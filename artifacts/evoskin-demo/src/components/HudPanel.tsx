import React, { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';
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

const STATUSES = [
    "AWAITING INPUT...",
    "CONVERGING REFRACTIVE INDEX...",
    "OPTIMIZING BOUNDARY CONDITIONS...",
    "SEAM ANALYSIS IN PROGRESS...",
    "MAINTAINING OPTICAL CAMOUFLAGE...",
];

export default function HudPanel({
    pressStrength, setPressStrength,
    isTextured, setIsTextured,
    isPlaying, setIsPlaying,
    resetSimulation,
    seamsRemaining
}: HudPanelProps) {
    const [statusIndex, setStatusIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!isPlaying) { setStatusIndex(0); return; }
        const id = setInterval(() => setStatusIndex(i => (i + 1) % STATUSES.length), 2000);
        return () => clearInterval(id);
    }, [isPlaying]);

    const isFullyConverged = pressStrength > 0.95 && seamsRemaining < 1;
    const statusText = isPlaying
        ? (isFullyConverged ? "SEAM ANALYSIS COMPLETE: 100% CONVERGENCE" : STATUSES[statusIndex])
        : "SYSTEM STANDBY";

    const readouts = (
        <div className="space-y-1.5 text-[10px] text-primary/70 uppercase tracking-wider">
            <div className="flex justify-between"><span>Core RI:</span><span className="text-primary font-bold">1.33</span></div>
            <div className="flex justify-between"><span>Buffer RI:</span><span className="text-primary font-bold">1.41 @ 300nm</span></div>
            <div className="flex justify-between"><span>Shell RI:</span><span className="text-primary font-bold">1.50</span></div>
            <div className="flex justify-between"><span>Wall:</span><span className="text-primary font-bold">1.0mm</span></div>
            <div className="flex justify-between"><span>Refl. Reduction:</span><span className="text-primary font-bold">{(REFLECTANCE_REDUCTION * 100).toFixed(1)}%</span></div>
            <div className="flex justify-between"><span>Struct. Safety:</span><span className="text-primary font-bold">✓ {STRUCTURAL_SAFETY_MARGIN}% MARGIN</span></div>
            <div className="flex justify-between"><span>Baseline Refl:</span><span className="text-primary font-bold">{BASELINE_REFLECTANCE.toFixed(4)}</span></div>
            <div className="flex justify-between"><span>Graded Refl:</span><span className="text-primary font-bold">{GRADED_REFLECTANCE.toFixed(4)}</span></div>
        </div>
    );

    return <>
        {/* ── DESKTOP: right sidebar ─────────────────────────────────── */}
        <div className="hidden md:flex absolute right-6 top-6 bottom-6 w-72 lg:w-80 flex-col gap-5 bg-black/80 border border-primary/50 rounded-lg p-5 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)] overflow-y-auto z-10 text-primary pointer-events-auto">

            {/* Header */}
            <div className="border-b border-primary/50 pb-4">
                <h1 className="text-primary font-bold text-base lg:text-xl tracking-wider leading-tight uppercase">
                    EvoSkin Optical Camouflage System
                </h1>
                <p className="text-primary/70 text-[10px] mt-2 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Classification: Demo
                </p>
            </div>

            {/* Status */}
            <div className="bg-primary/10 border border-primary/30 p-3 rounded text-xs min-h-10 flex items-center gap-2">
                <span className="text-primary animate-pulse shrink-0">▶</span>
                <span>{statusText}</span>
            </div>

            {/* Slider */}
            <div>
                <label className="text-[10px] text-primary/70 mb-2 block uppercase tracking-widest">
                    Optical Convergence Strength
                </label>
                <input
                    type="range" min="0" max="1" step="0.01"
                    value={pressStrength}
                    onChange={e => setPressStrength(parseFloat(e.target.value))}
                    className="w-full h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="text-right text-xs mt-1.5 font-bold tracking-wider">
                    {(pressStrength * 100).toFixed(0)}%
                </div>
            </div>

            {/* Background toggle */}
            <div className="flex gap-2">
                {['Textured', 'Uniform'].map((label, i) => {
                    const active = i === 0 ? isTextured : !isTextured;
                    return (
                        <button key={label}
                            onClick={() => setIsTextured(i === 0)}
                            className={`flex-1 border py-2 text-[10px] transition-colors uppercase tracking-wider ${
                                active
                                    ? 'bg-primary/20 border-primary text-primary shadow-[0_0_8px_rgba(34,197,94,0.3)]'
                                    : 'bg-transparent border-primary/40 text-primary/60 hover:bg-primary/10'
                            }`}
                        >{label}</button>
                    );
                })}
            </div>

            {/* Playback */}
            <div className="flex gap-2">
                <button onClick={() => setIsPlaying(!isPlaying)}
                    className="flex-1 flex items-center justify-center gap-2 border border-primary/50 py-2 text-[10px] hover:bg-primary/20 transition-colors uppercase tracking-wider">
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <button onClick={resetSimulation}
                    className="px-4 flex items-center justify-center border border-primary/50 py-2 hover:bg-primary/20 transition-colors"
                    title="Reset">
                    <RotateCcw size={13} />
                </button>
            </div>

            {/* Seams */}
            <div className="space-y-2">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] text-primary/70 uppercase tracking-widest">Seams Remaining</span>
                    <span className="text-lg font-bold">{seamsRemaining.toFixed(1)}%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 border border-primary/30 rounded overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${Math.max(0, seamsRemaining)}%` }} />
                </div>
            </div>

            {/* Static readouts */}
            <div className="mt-auto border-t border-primary/30 pt-4">{readouts}</div>
        </div>

        {/* ── MOBILE: bottom sheet ───────────────────────────────────── */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/90 border-t border-primary/50 backdrop-blur-md z-10 text-primary pointer-events-auto">

            {/* Collapsed bar — always visible */}
            <div className="flex items-center gap-3 px-4 py-3">
                {/* Seams readout */}
                <div className="flex-1 min-w-0">
                    <div className="text-[9px] text-primary/60 uppercase tracking-widest mb-1">Seams Remaining</div>
                    <div className="h-1.5 w-full bg-primary/10 border border-primary/30 rounded overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${Math.max(0, seamsRemaining)}%` }} />
                    </div>
                </div>
                <span className="text-sm font-bold shrink-0">{seamsRemaining.toFixed(1)}%</span>

                {/* Inline play/reset */}
                <button onClick={() => setIsPlaying(!isPlaying)}
                    className="border border-primary/50 p-2 hover:bg-primary/20 transition-colors shrink-0">
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button onClick={resetSimulation}
                    className="border border-primary/50 p-2 hover:bg-primary/20 transition-colors shrink-0">
                    <RotateCcw size={14} />
                </button>

                {/* Expand toggle */}
                <button onClick={() => setExpanded(v => !v)}
                    className="border border-primary/50 p-2 hover:bg-primary/20 transition-colors shrink-0">
                    {expanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                </button>
            </div>

            {/* Convergence slider — always visible on mobile */}
            <div className="px-4 pb-3 border-t border-primary/20 pt-2">
                <div className="flex items-center gap-3">
                    <span className="text-[9px] text-primary/60 uppercase tracking-widest shrink-0">Convergence</span>
                    <input
                        type="range" min="0" max="1" step="0.01"
                        value={pressStrength}
                        onChange={e => setPressStrength(parseFloat(e.target.value))}
                        className="flex-1 h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <span className="text-xs font-bold shrink-0 w-8 text-right">
                        {(pressStrength * 100).toFixed(0)}%
                    </span>
                </div>
            </div>

            {/* Expanded section */}
            {expanded && (
                <div className="px-4 pb-4 space-y-4 border-t border-primary/20 pt-3">

                    {/* Status */}
                    <div className="bg-primary/10 border border-primary/30 p-2 rounded text-[10px] flex items-center gap-2">
                        <span className="text-primary animate-pulse shrink-0">▶</span>
                        <span>{statusText}</span>
                    </div>

                    {/* Title */}
                    <div>
                        <div className="text-primary font-bold text-xs tracking-wider uppercase">EvoSkin Optical Camouflage</div>
                        <div className="text-primary/60 text-[9px] mt-0.5 uppercase tracking-widest flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            Classification: Demo
                        </div>
                    </div>

                    {/* Background toggle */}
                    <div className="flex gap-2">
                        {['Textured', 'Uniform'].map((label, i) => {
                            const active = i === 0 ? isTextured : !isTextured;
                            return (
                                <button key={label}
                                    onClick={() => setIsTextured(i === 0)}
                                    className={`flex-1 border py-2 text-[10px] transition-colors uppercase tracking-wider ${
                                        active
                                            ? 'bg-primary/20 border-primary text-primary'
                                            : 'bg-transparent border-primary/40 text-primary/60'
                                    }`}
                                >{label}</button>
                            );
                        })}
                    </div>

                    {/* Readouts */}
                    <div className="border-t border-primary/20 pt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-[9px] text-primary/70 uppercase tracking-wider">
                        <div className="flex justify-between col-span-1"><span>Core RI:</span><span className="text-primary font-bold">1.33</span></div>
                        <div className="flex justify-between col-span-1"><span>Buffer RI:</span><span className="text-primary font-bold">1.41@300nm</span></div>
                        <div className="flex justify-between col-span-1"><span>Shell RI:</span><span className="text-primary font-bold">1.50</span></div>
                        <div className="flex justify-between col-span-1"><span>Wall:</span><span className="text-primary font-bold">1.0mm</span></div>
                        <div className="flex justify-between col-span-1"><span>Refl. Red.:</span><span className="text-primary font-bold">{(REFLECTANCE_REDUCTION * 100).toFixed(1)}%</span></div>
                        <div className="flex justify-between col-span-1"><span>Safety:</span><span className="text-primary font-bold">✓ {STRUCTURAL_SAFETY_MARGIN}%</span></div>
                        <div className="flex justify-between col-span-1"><span>Base Refl:</span><span className="text-primary font-bold">{BASELINE_REFLECTANCE}</span></div>
                        <div className="flex justify-between col-span-1"><span>Graded:</span><span className="text-primary font-bold">{GRADED_REFLECTANCE}</span></div>
                    </div>
                </div>
            )}
        </div>
    </>;
}
