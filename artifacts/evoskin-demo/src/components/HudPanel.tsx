import React, { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { 
    REFLECTANCE_REDUCTION, 
    STRUCTURAL_SAFETY_MARGIN, 
    BASELINE_REFLECTANCE, 
    GRADED_REFLECTANCE 
} from './SwarmScene';

interface HudPanelProps {
    pressStrength: number;
    setPressStrength: (val: number) => void;
    isTextured: boolean;
    setIsTextured: (val: boolean) => void;
    isPlaying: boolean;
    setIsPlaying: (val: boolean) => void;
    resetSimulation: () => void;
    seamsRemaining: number;
}

export default function HudPanel({
    pressStrength, setPressStrength,
    isTextured, setIsTextured,
    isPlaying, setIsPlaying,
    resetSimulation,
    seamsRemaining
}: HudPanelProps) {
    const statuses = [
        "AWAITING INPUT...",
        "CONVERGING REFRACTIVE INDEX...",
        "OPTIMIZING BOUNDARY CONDITIONS...",
        "SEAM ANALYSIS IN PROGRESS...",
        "MAINTAINING OPTICAL CAMOUFLAGE..."
    ];
    const [statusIndex, setStatusIndex] = useState(0);

    useEffect(() => {
        if (!isPlaying) {
            setStatusIndex(0);
            return;
        }
        const interval = setInterval(() => {
            setStatusIndex(i => (i + 1) % statuses.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const isFullyConverged = pressStrength > 0.95 && seamsRemaining < 1;
    const statusText = isPlaying 
        ? (isFullyConverged ? "SEAM ANALYSIS COMPLETE: 100% CONVERGENCE" : statuses[statusIndex]) 
        : "SYSTEM STANDBY";

    return (
        <div className="absolute right-8 top-8 bottom-8 w-80 bg-black/80 border border-primary/50 rounded-lg p-6 flex flex-col gap-6 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)] overflow-y-auto z-10 text-primary pointer-events-auto">
            
            <div className="border-b border-primary/50 pb-4">
                <h1 className="text-primary font-bold text-xl tracking-wider leading-tight uppercase">
                    EvoSkin Optical Camouflage System
                </h1>
                <p className="text-primary/70 text-xs mt-2 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Classification: Demo
                </p>
            </div>
            
            {/* Status Loop */}
            <div className="bg-primary/10 border border-primary/30 p-3 rounded text-sm min-h-12 flex items-center">
                <span className="text-primary mr-3 animate-pulse">▶</span> 
                {statusText}
            </div>
            
            {/* Controls */}
            <div className="space-y-6">
                <div>
                    <label className="text-xs text-primary/70 mb-3 block uppercase tracking-widest">
                        Optical Convergence Strength
                    </label>
                    <input 
                        type="range" 
                        min="0" max="1" step="0.01" 
                        value={pressStrength}
                        onChange={(e) => setPressStrength(parseFloat(e.target.value))}
                        className="w-full h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                        style={{
                            outline: 'none',
                            opacity: 0.9
                        }}
                    />
                    <div className="text-right text-xs mt-2 font-bold tracking-wider">
                        {(pressStrength * 100).toFixed(0)}%
                    </div>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={() => setIsTextured(!isTextured)}
                        className={`flex-1 border py-2 text-xs transition-colors uppercase tracking-wider ${
                            isTextured 
                                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(34,197,94,0.3)]' 
                                : 'bg-transparent border-primary/50 text-primary/70 hover:bg-primary/10'
                        }`}
                    >
                        Textured
                    </button>
                    <button 
                        onClick={() => setIsTextured(!isTextured)}
                        className={`flex-1 border py-2 text-xs transition-colors uppercase tracking-wider ${
                            !isTextured 
                                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(34,197,94,0.3)]' 
                                : 'bg-transparent border-primary/50 text-primary/70 hover:bg-primary/10'
                        }`}
                    >
                        Uniform
                    </button>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="flex-1 flex items-center justify-center gap-2 border border-primary/50 py-2 text-xs hover:bg-primary/20 transition-colors uppercase tracking-wider"
                    >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                        {isPlaying ? 'PAUSE' : 'PLAY'}
                    </button>
                    <button 
                        onClick={resetSimulation}
                        className="flex-none px-4 flex items-center justify-center border border-primary/50 py-2 hover:bg-primary/20 transition-colors"
                        title="Reset Simulation"
                    >
                        <RotateCcw size={14} />
                    </button>
                </div>
            </div>
            
            {/* Seams Remaining */}
            <div className="space-y-3 mt-4">
                <div className="flex justify-between items-end">
                    <span className="text-xs text-primary/70 uppercase tracking-widest">Seams Remaining</span>
                    <span className="text-xl font-bold">{seamsRemaining.toFixed(1)}%</span>
                </div>
                <div className="h-3 w-full bg-primary/10 border border-primary/30 rounded overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${Math.max(0, seamsRemaining)}%` }}
                    />
                </div>
            </div>
            
            {/* Static Readouts */}
            <div className="mt-auto space-y-2 text-[10px] text-primary/70 border-t border-primary/30 pt-4 uppercase tracking-wider">
                <div className="flex justify-between"><span>Core RI:</span><span className="text-primary font-bold">1.33</span></div>
                <div className="flex justify-between"><span>Buffer RI:</span><span className="text-primary font-bold">1.41 @ 300nm</span></div>
                <div className="flex justify-between"><span>Shell RI:</span><span className="text-primary font-bold">1.50</span></div>
                <div className="flex justify-between"><span>Wall:</span><span className="text-primary font-bold">1.0mm</span></div>
                <div className="flex justify-between"><span>Refl. Reduction:</span><span className="text-primary font-bold">{(REFLECTANCE_REDUCTION * 100).toFixed(1)}%</span></div>
                <div className="flex justify-between"><span>Struct. Safety:</span><span className="text-primary font-bold">✓ {STRUCTURAL_SAFETY_MARGIN}% MARGIN</span></div>
                <div className="flex justify-between"><span>Baseline Refl:</span><span className="text-primary font-bold">{BASELINE_REFLECTANCE.toFixed(4)}</span></div>
                <div className="flex justify-between"><span>Graded Refl:</span><span className="text-primary font-bold">{GRADED_REFLECTANCE.toFixed(4)}</span></div>
            </div>
            
        </div>
    );
}
