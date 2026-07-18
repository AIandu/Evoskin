import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const REFLECTANCE_REDUCTION = 0.985;
export const STRUCTURAL_SAFETY_MARGIN = 75;
export const BASELINE_REFLECTANCE = 0.0036;
export const GRADED_REFLECTANCE = 0.0001;

const GRID_SIZE = 32;
const NODE_SIZE = 1.0; 
const SPACING = 0.85; 

interface SwarmSceneProps {
    pressStrength: number;
    isTextured: boolean;
    isPlaying: boolean;
    setSeamsRemaining: (val: number) => void;
    resetKey: number;
}

function generateNoiseTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    const imgData = ctx.createImageData(1024, 1024);
    const data = imgData.data;

    for (let y = 0; y < 1024; y++) {
        for (let x = 0; x < 1024; x++) {
            const nx = x / 1024;
            const ny = y / 1024;
            
            let v = 0;
            v += Math.sin(nx * 20 + Math.cos(ny * 20)) * 0.5;
            v += Math.cos(ny * 40 + Math.sin(nx * 30)) * 0.25;
            v += Math.sin(nx * 80 + ny * 80) * 0.125;
            v += Math.cos(nx * 160 - ny * 160) * 0.0625;
            v = (v + 0.9375) / 1.875; // roughly 0 to 1
            
            const c1 = [30, 35, 25]; // very dark green
            const c2 = [60, 70, 45]; // olive
            const c3 = [90, 85, 60]; // tan/brownish
            
            let r, g, b;
            if (v < 0.5) {
                const t = v / 0.5;
                r = c1[0] + t * (c2[0] - c1[0]);
                g = c1[1] + t * (c2[1] - c1[1]);
                b = c1[2] + t * (c2[2] - c1[2]);
            } else {
                const t = (v - 0.5) / 0.5;
                r = c2[0] + t * (c3[0] - c2[0]);
                g = c2[1] + t * (c3[1] - c2[1]);
                b = c2[2] + t * (c3[2] - c2[2]);
            }
            
            const i = (y * 1024 + x) * 4;
            data[i] = r;
            data[i+1] = g;
            data[i+2] = b;
            data[i+3] = 255;
        }
    }
    
    // Add grain
    for (let i = 0; i < data.length; i += 4) {
        const grain = (Math.random() - 0.5) * 20;
        data[i] = Math.min(255, Math.max(0, data[i] + grain));
        data[i+1] = Math.min(255, Math.max(0, data[i+1] + grain));
        data[i+2] = Math.min(255, Math.max(0, data[i+2] + grain));
    }
    ctx.putImageData(imgData, 0, 0);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
}

const vertexShader = `
varying vec2 vLocalUV;
varying vec2 vScreenUV;
varying float vReflectance;
attribute float instanceReflectance;

void main() {
    vLocalUV = uv;
    vReflectance = instanceReflectance;
    
    vec4 localPosition = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      localPosition = instanceMatrix * localPosition;
    #endif

    vec4 mvPosition = viewMatrix * modelMatrix * localPosition;
    vec4 clipPos = projectionMatrix * mvPosition;
    gl_Position = clipPos;
    
    // Compute normalized screen coordinates (0 to 1)
    vScreenUV = clipPos.xy / clipPos.w * 0.5 + 0.5;
}
`;

const fragmentShader = `
uniform sampler2D uBackgroundTexture;
uniform bool uIsTextured;

varying vec2 vLocalUV;
varying vec2 vScreenUV;
varying float vReflectance;

const float BASELINE_REFLECTANCE = 0.0036;
const float GRADED_REFLECTANCE = 0.0001;

void main() {
    vec2 localPos = (vLocalUV - 0.5) * 2.0;
    float dist = length(localPos);
    
    // Calculate convergence strictly from reflectance
    float convergence = 1.0 - clamp((vReflectance - GRADED_REFLECTANCE) / (BASELINE_REFLECTANCE - GRADED_REFLECTANCE), 0.0, 1.0);
    
    // At low convergence (0), edge is small. At high convergence (1), edge dominates.
    float falloffStart = mix(0.9, 0.0, convergence);
    float edgeAlpha = 1.0 - smoothstep(falloffStart, 1.0, dist);
    
    if (dist > 1.0) discard;
    
    vec4 bgColor;
    if (uIsTextured) {
        bgColor = texture2D(uBackgroundTexture, vScreenUV);
    } else {
        bgColor = vec4(0.18, 0.22, 0.18, 1.0); // uniform solid fallback
    }
    
    vec3 nodeColor = vec3(0.06, 0.09, 0.06); 
    vec3 finalColor = mix(nodeColor, bgColor.rgb, convergence);
    
    gl_FragColor = vec4(finalColor, edgeAlpha);
}
`;

const bgVertexShader = `
varying vec2 vScreenUV;
void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 clipPos = projectionMatrix * mvPosition;
    gl_Position = clipPos;
    vScreenUV = clipPos.xy / clipPos.w * 0.5 + 0.5;
}
`;

const bgFragmentShader = `
uniform sampler2D uBackgroundTexture;
varying vec2 vScreenUV;
void main() {
    gl_FragColor = texture2D(uBackgroundTexture, vScreenUV);
}
`;

export default function SwarmScene(props: SwarmSceneProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const reflectancesRef = useRef<Float32Array>(new Float32Array(GRID_SIZE * GRID_SIZE));
    const propsRef = useRef(props);
    
    useEffect(() => {
        propsRef.current = props;
    }, [props]);

    // Handle reset
    useEffect(() => {
        const arr = reflectancesRef.current;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = BASELINE_REFLECTANCE;
        }
    }, [props.resetKey]);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color(0.18, 0.22, 0.18));
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const gridWorldWidth = GRID_SIZE * SPACING;
        const viewSize = gridWorldWidth / 0.8; // Grid takes ~80% of screen

        let aspect = window.innerWidth / window.innerHeight;
        let camWidth, camHeight;
        if (aspect > 1) {
            camHeight = viewSize;
            camWidth = viewSize * aspect;
        } else {
            camWidth = viewSize;
            camHeight = viewSize / aspect;
        }

        const camera = new THREE.OrthographicCamera(
            -camWidth / 2, camWidth / 2,
            camHeight / 2, -camHeight / 2,
            0.1, 100
        );
        camera.position.z = 10;

        // Background setup
        const bgTexture = generateNoiseTexture();
        const bgMaterial = new THREE.ShaderMaterial({
            vertexShader: bgVertexShader,
            fragmentShader: bgFragmentShader,
            uniforms: { uBackgroundTexture: { value: bgTexture } },
            depthWrite: false
        });
        const bgGeo = new THREE.PlaneGeometry(1000, 1000); // large enough to cover screen
        const bgMesh = new THREE.Mesh(bgGeo, bgMaterial);
        bgMesh.position.z = -5;
        scene.add(bgMesh);

        // Nodes setup
        const nodeMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uBackgroundTexture: { value: bgTexture },
                uIsTextured: { value: true }
            },
            transparent: true,
            depthWrite: false, // crucial for overlapping alpha blending without z-fighting
            blending: THREE.NormalBlending
        });

        const nodeGeo = new THREE.PlaneGeometry(NODE_SIZE, NODE_SIZE);
        const instancedMesh = new THREE.InstancedMesh(nodeGeo, nodeMaterial, GRID_SIZE * GRID_SIZE);
        scene.add(instancedMesh);

        const bgVals = new Float32Array(GRID_SIZE * GRID_SIZE);
        const dummy = new THREE.Object3D();
        const hexOffsetX = SPACING;
        const hexOffsetY = SPACING * Math.sqrt(3) / 2;
        const startX = - (GRID_SIZE * hexOffsetX) / 2 + hexOffsetX / 2;
        const startY = - (GRID_SIZE * hexOffsetY) / 2 + hexOffsetY / 2;

        for (let y = 0; y < GRID_SIZE; y++) {
            for (let x = 0; x < GRID_SIZE; x++) {
                const i = y * GRID_SIZE + x;
                const xPos = startX + x * hexOffsetX + (y % 2) * (hexOffsetX / 2);
                const yPos = startY + y * hexOffsetY;
                
                dummy.position.set(xPos, yPos, 0);
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(i, dummy.matrix);
                
                reflectancesRef.current[i] = BASELINE_REFLECTANCE;
                
                const nx = x / GRID_SIZE;
                const ny = y / GRID_SIZE;
                let v = Math.sin(nx * 20 + Math.cos(ny * 20)) * 0.5 + 
                        Math.cos(ny * 40 + Math.sin(nx * 30)) * 0.25 + 
                        Math.sin(nx * 80 + ny * 80) * 0.125;
                bgVals[i] = (v + 0.875) / 1.75;
            }
        }
        instancedMesh.instanceMatrix.needsUpdate = true;

        const reflectanceAttr = new THREE.InstancedBufferAttribute(reflectancesRef.current, 1);
        nodeGeo.setAttribute('instanceReflectance', reflectanceAttr);

        // Resize handler
        function handleResize() {
            aspect = window.innerWidth / window.innerHeight;
            if (aspect > 1) {
                camHeight = viewSize;
                camWidth = viewSize * aspect;
            } else {
                camWidth = viewSize;
                camHeight = viewSize / aspect;
            }
            camera.left = -camWidth / 2;
            camera.right = camWidth / 2;
            camera.top = camHeight / 2;
            camera.bottom = -camHeight / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        // Animation loop
        let animationId: number;
        let frameCount = 0;
        const nextReflectances = new Float32Array(GRID_SIZE * GRID_SIZE);

        function animate() {
            animationId = requestAnimationFrame(animate);
            
            const { pressStrength, isTextured, isPlaying, setSeamsRemaining } = propsRef.current;
            
            nodeMaterial.uniforms.uIsTextured.value = isTextured;
            bgMesh.visible = isTextured;
            
            if (isPlaying) {
                let seamsCount = 0;
                const targetRefl = THREE.MathUtils.lerp(BASELINE_REFLECTANCE, GRADED_REFLECTANCE, pressStrength);
                const arr = reflectancesRef.current;
                
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE; x++) {
                        const i = y * GRID_SIZE + x;
                        const currentRefl = arr[i];
                        
                        let sum = 0;
                        let count = 0;
                        const offsets = y % 2 === 0 
                            ? [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1]] 
                            : [[-1, 0], [1, 0], [0, -1], [0, 1], [1, -1], [1, 1]];
                            
                        for (const [dx, dy] of offsets) {
                            const nx = x + dx;
                            const ny = y + dy;
                            if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
                                sum += arr[ny * GRID_SIZE + nx];
                                count++;
                            }
                        }
                        const neighborAvg = count > 0 ? sum / count : currentRefl;
                        const bgVal = bgVals[i];
                        
                        // Simulation step: drive toward target based on texture value, mix with neighbors
                        let val = THREE.MathUtils.lerp(currentRefl, targetRefl, 0.05 * (0.5 + bgVal * 0.5));
                        val = THREE.MathUtils.lerp(val, neighborAvg, REFLECTANCE_REDUCTION * 0.1);
                        val = THREE.MathUtils.clamp(val, GRADED_REFLECTANCE, BASELINE_REFLECTANCE);
                        
                        nextReflectances[i] = val;
                        
                        if (val > GRADED_REFLECTANCE * 2) {
                            seamsCount++;
                        }
                    }
                }
                
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = nextReflectances[i];
                }
                reflectanceAttr.needsUpdate = true;
                
                if (frameCount % 10 === 0) {
                    const pct = (seamsCount / (GRID_SIZE * GRID_SIZE)) * 100;
                    setSeamsRemaining(pct);
                }
            }
            
            renderer.render(scene, camera);
            frameCount++;
        }
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            bgGeo.dispose();
            nodeGeo.dispose();
            nodeMaterial.dispose();
            bgMaterial.dispose();
            bgTexture.dispose();
        };
    }, []); // Run once

    return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
