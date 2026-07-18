export default function Slide02Problem() {
  const shell = {
    width: '100vw', height: '100vh', overflow: 'hidden' as const,
    backgroundColor: '#0F2537',
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)',
    backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw',
    color: '#E0F2FE', fontFamily: "'DM Mono', monospace",
    position: 'relative' as const, boxSizing: 'border-box' as const,
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={shell}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}>
        <div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} />
      </div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}>
        <span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION B</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span>
      </div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div>
      </div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>The Problem</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 02 — ROOT CAUSE ANALYSIS</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)', letterSpacing: '0.1vw' }}>
            <div>SPEC: CHROMASKIN-01</div><div>STATUS: IDENTIFIED</div>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — bullets */}
          <div style={{ flex: 6, display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            {[
              { title: 'Visible Seams at Every Node', body: 'Each node boundary creates a Fresnel reflection. At scale, this produces a visible hexagonal seam grid across the camouflage surface.' },
              { title: 'Central Control is a Liability', body: 'Rigid, centrally-controlled systems carry single points of failure and high communication overhead — incompatible with real-world operational demands.' },
              { title: 'No Real-Time Adaptation', body: 'No existing surface adapts in real-time to arbitrary textures and contact geometries simultaneously, across both optical and pressure domains.' },
              { title: 'Physics of the Abrupt Interface', body: 'RI jump n=1.33 → n=1.50 at the core-shell boundary: reflectance 0.36% per interface. Multiply by 1,000 nodes — the seam grid is unavoidable.' },
            ].map((b, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '2vw' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '0.2vw', height: '100%', backgroundColor: i === 0 ? '#7DD3FC' : 'rgba(125,211,252,0.4)' }} />
                <div style={{ fontSize: '1.6vw', color: '#FFFFFF', marginBottom: '0.4vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{b.title}</div>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.5 }}>{b.body}</div>
              </div>
            ))}
          </div>

          {/* Right — RI stack diagram */}
          <div style={{ flex: 4, position: 'relative', border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.8vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', borderRight: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>DIAGRAM 2.1 — RI STACK</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3vw 2vw 2vw' }}>
              {/* Stack layers */}
              {[
                { label: 'FLUID CORE', ri: 'n = 1.33', h: '22%', bg: 'rgba(125,211,252,0.08)', border: '#7DD3FC' },
                { label: 'ABRUPT INTERFACE', ri: 'R = 0.36%', h: '12%', bg: 'rgba(239,68,68,0.25)', border: '#ef4444' },
                { label: 'TPU SHELL', ri: 'n = 1.50', h: '22%', bg: 'rgba(125,211,252,0.05)', border: 'rgba(125,211,252,0.5)' },
              ].map((layer, i) => (
                <div key={i} style={{ width: '80%', height: layer.h, backgroundColor: layer.bg, border: `0.1vw solid ${layer.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5vw', boxSizing: 'border-box', marginBottom: i < 2 ? '0' : '0' }}>
                  <span style={{ fontSize: '1.3vw', color: layer.border === '#ef4444' ? '#ef4444' : '#E0F2FE', fontWeight: layer.border === '#ef4444' ? 700 : 400 }}>{layer.label}</span>
                  <span style={{ fontSize: '1.5vw', color: layer.border === '#ef4444' ? '#ef4444' : '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>{layer.ri}</span>
                </div>
              ))}
              <div style={{ marginTop: '2.5vh', fontSize: '1.3vw', color: 'rgba(239,68,68,0.9)', textAlign: 'center', lineHeight: 1.4 }}>
                Abrupt interface — visible seam<br />at every node boundary
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: 'auto' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 02/10</div>
        </div>
      </div>
    </div>
  );
}
