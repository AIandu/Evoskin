import { useState, useCallback } from 'react';
import SwarmScene from '@/components/SwarmScene';
import HudPanel from '@/components/HudPanel';
import WebGLErrorBoundary from '@/components/WebGLErrorBoundary';

export default function Home() {
    const [pressStrength, setPressStrength] = useState(0);
    const [isTextured, setIsTextured] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [seamsRemaining, setSeamsRemaining] = useState(100);
    const [resetKey, setResetKey] = useState(0);

    const resetSimulation = useCallback(() => {
        setResetKey(prev => prev + 1);
        setPressStrength(0);
        setSeamsRemaining(100);
    }, []);

    return (
        <div className="relative w-full h-screen bg-hex overflow-hidden scanlines dark">
            <WebGLErrorBoundary>
              <SwarmScene 
                  pressStrength={pressStrength}
                  isTextured={isTextured}
                  isPlaying={isPlaying}
                  setSeamsRemaining={setSeamsRemaining}
                  resetKey={resetKey}
              />
            </WebGLErrorBoundary>
            <HudPanel 
                pressStrength={pressStrength}
                setPressStrength={setPressStrength}
                isTextured={isTextured}
                setIsTextured={setIsTextured}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                resetSimulation={resetSimulation}
                seamsRemaining={seamsRemaining}
            />
        </div>
    );
}
