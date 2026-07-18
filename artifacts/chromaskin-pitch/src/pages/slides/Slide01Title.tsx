const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      backgroundColor: '#0F2537',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)',
      backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw',
      color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box',
    }}>
      {/* Hero image right side */}
      <img crossOrigin="anonymous" src={`${base}hero.png`} alt="" style={{ position: 'absolute', right: 0, top: 0, width: '48vw', height: '100vh', objectFit: 'cover', opacity: 0.45 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, width: '48vw', height: '100vh', background: 'linear-gradient(to right, #0F2537 0%, transparent 40%)' }} />

      {/* Outer border */}
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} />
      </div>

      {/* Crosshairs TL */}
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      {/* Crosshairs BR */}
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />

      {/* Dimension marker */}
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}>
        <span>|</span>
        <span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} />
        <span>ELEVATION A</span>
        <span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} />
        <span>|</span>
      </div>

      {/* Side section marker */}
      <div style={{ position: 'absolute', top: '50vh', right: '3vw', transform: 'translateY(-50%) rotate(90deg)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '0.8vw', whiteSpace: 'nowrap' }}>
        <span>|</span>
        <span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} />
        <span>SECT. 1</span>
        <span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} />
        <span>|</span>
      </div>

      {/* Content area */}
      <div style={{ position: 'absolute', top: '20vh', left: '15vw', width: '70vw', height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        {/* Top org row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '1.1vw', color: '#7DD3FC', letterSpacing: '0.2vw', marginBottom: '0.8vh' }}>[ AI&amp;U ]</div>
            <div style={{ fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)', letterSpacing: '0.1vw' }}>PROJECT NO. CHROMASKIN-2026</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)', letterSpacing: '0.1vw' }}>
            <div style={{ marginBottom: '0.5vh' }}>STATUS: DEMO / PRE-CONTRACT</div>
            <div>REV: 01</div>
          </div>
        </div>

        {/* Main title */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-5vw', top: '4vh', width: '4vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} />
          <div style={{ position: 'absolute', left: '-5vw', top: '4vh', width: '0.1vw', height: '9vh', backgroundColor: '#7DD3FC' }} />

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8vw', fontWeight: 700, lineHeight: 0.9, margin: '0 0 2.5vh 0', textTransform: 'uppercase', letterSpacing: '-0.2vw', color: '#FFFFFF', textShadow: '0.2vw 0.2vw 0 rgba(125,211,252,0.2)' }}>
            Chroma<br />Skin
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2vw' }}>
            <div style={{ width: '2vw', height: '0.2vh', backgroundColor: '#7DD3FC', marginTop: '1.2vh', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '1.6vw', fontWeight: 400, lineHeight: 1.5, color: '#E0F2FE', margin: '0 0 0.8vh 0' }}>
                Adaptive Optical Camouflage System
              </p>
              <p style={{ fontSize: '1.3vw', color: 'rgba(224,242,254,0.65)', margin: 0 }}>
                Peer-to-Peer Biomimetic Swarm — Technical Validation Report
              </p>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '2vh' }}>
          <div style={{ fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026  |  15:41</div>
          <div style={{ fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 01/10</div>
        </div>
      </div>

      {/* Classification banner */}
      <div style={{ position: 'absolute', bottom: '8.5vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.85vw', color: 'rgba(125,211,252,0.7)', letterSpacing: '0.15vw', whiteSpace: 'nowrap' }}>
        CLASSIFICATION: DEMONSTRATION / PRE-CONTRACT TECHNICAL DISCLOSURE
      </div>

      {/* Bottom right title block */}
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div>
      </div>
    </div>
  );
}
