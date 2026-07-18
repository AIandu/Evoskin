export default function Slide03Architecture() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION C</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>System Architecture</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 03 — NODE CROSS-SECTION, CORE COMPONENTS</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: VERIFIED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — SVG node cross-section */}
          <div style={{ flex: 5, position: 'relative', border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.8vw 1vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', borderRight: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>DIAGRAM 3.1 — CROSS-SECTION</div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: '3vw' }}>
              <svg width="22vw" height="22vw" viewBox="0 0 220 220" style={{ overflow: 'visible' }}>
                {/* Shell */}
                <circle cx="110" cy="110" r="100" fill="rgba(125,211,252,0.06)" stroke="#7DD3FC" strokeWidth="1.5" />
                {/* Buffer */}
                <circle cx="110" cy="110" r="76" fill="rgba(125,211,252,0.08)" stroke="rgba(125,211,252,0.7)" strokeWidth="1" strokeDasharray="4 3" />
                {/* Core */}
                <circle cx="110" cy="110" r="54" fill="rgba(125,211,252,0.14)" stroke="#7DD3FC" strokeWidth="1.5" />

                {/* Label lines — Shell */}
                <line x1="177" y1="47" x2="220" y2="20" stroke="#7DD3FC" strokeWidth="0.8" opacity="0.7" />
                <text x="224" y="18" fill="#7DD3FC" fontSize="10" fontFamily="DM Mono, monospace">SHELL  n=1.50</text>
                <text x="224" y="30" fill="rgba(224,242,254,0.6)" fontSize="9" fontFamily="DM Mono, monospace">TPU/TPR  t=1.0mm</text>

                {/* Label lines — Buffer */}
                <line x1="163" y1="69" x2="220" y2="60" stroke="rgba(125,211,252,0.7)" strokeWidth="0.8" opacity="0.7" />
                <text x="224" y="58" fill="rgba(125,211,252,0.9)" fontSize="10" fontFamily="DM Mono, monospace">BUFFER  n=1.41</text>
                <text x="224" y="70" fill="rgba(224,242,254,0.6)" fontSize="9" fontFamily="DM Mono, monospace">SiO  300nm</text>

                {/* Label lines — Core */}
                <line x1="148" y1="83" x2="220" y2="100" stroke="#7DD3FC" strokeWidth="0.8" opacity="0.7" />
                <text x="224" y="98" fill="#7DD3FC" fontSize="10" fontFamily="DM Mono, monospace">CORE  n=1.33</text>
                <text x="224" y="110" fill="rgba(224,242,254,0.6)" fontSize="9" fontFamily="DM Mono, monospace">H2O/glycerin</text>

                {/* Center label */}
                <text x="110" y="107" fill="#E0F2FE" fontSize="10" textAnchor="middle" fontFamily="DM Mono, monospace">PRESSURE</text>
                <text x="110" y="119" fill="#E0F2FE" fontSize="10" textAnchor="middle" fontFamily="DM Mono, monospace">ACTUATION</text>

                {/* Dimension bracket — radius */}
                <line x1="110" y1="156" x2="110" y2="208" stroke="rgba(125,211,252,0.5)" strokeWidth="0.8" />
                <line x1="110" y1="208" x2="56" y2="208" stroke="rgba(125,211,252,0.5)" strokeWidth="0.8" />
                <text x="80" y="218" fill="rgba(125,211,252,0.7)" fontSize="9" textAnchor="middle" fontFamily="DM Mono, monospace">r = 25mm</text>
              </svg>
            </div>
          </div>

          {/* Right — spec blocks */}
          <div style={{ flex: 5, display: 'flex', flexDirection: 'column', gap: '2.5vh' }}>
            <div style={{ position: 'relative', paddingLeft: '2vw' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: '0.25vw', height: '100%', backgroundColor: '#7DD3FC' }} />
              <div style={{ fontSize: '1.7vw', color: '#FFFFFF', marginBottom: '0.6vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>CORE — n = 1.33</div>
              <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.5 }}>Water / water-glycerin mixture. Pressure actuation via internal fluid regulation. Passive thermal heat sink — high specific heat capacity absorbs temperature fluctuation without pressure spikes.</div>
            </div>
            <div style={{ position: 'relative', paddingLeft: '2vw' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: '0.25vw', height: '100%', backgroundColor: 'rgba(125,211,252,0.5)' }} />
              <div style={{ fontSize: '1.7vw', color: '#FFFFFF', marginBottom: '0.6vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>BUFFER — n = 1.41 @ 300nm</div>
              <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.5 }}>300nm silicone oil transition layer. Index is the geometric mean of core and shell: &#x221A;(1.33 &times; 1.50) &asymp; 1.41. Suppresses Fresnel back-reflection at the core-shell boundary by 98.5%.</div>
            </div>
            <div style={{ position: 'relative', paddingLeft: '2vw' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: '0.25vw', height: '100%', backgroundColor: 'rgba(125,211,252,0.3)' }} />
              <div style={{ fontSize: '1.7vw', color: '#FFFFFF', marginBottom: '0.6vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>SHELL — n = 1.50, t = 1.0mm</div>
              <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.5 }}>95A Shore TPU/TPR. Elastic compliance absorbs thermal expansion by stretching — not by transmitting strain into fluid pressure. Tensile strength 50 MPa; hoop stress at full load 0.667 MPa (75&times; margin).</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: 'auto' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 03/10</div>
        </div>
      </div>
    </div>
  );
}
