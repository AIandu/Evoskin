export default function Slide10NextSteps() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION J</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Next Steps</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 10 — DEVELOPMENT TRAJECTORY & PARTNERSHIP</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: SEEKING PARTNER</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5vh', minHeight: 0 }}>
          {/* Status banner */}
          <div style={{ border: '0.15vw solid #7DD3FC', backgroundColor: 'rgba(125,211,252,0.08)', padding: '1.5vh 2vw', display: 'flex', alignItems: 'center', gap: '3vw' }}>
            <div style={{ fontSize: '1vw', color: '#7DD3FC', letterSpacing: '0.15vw', flexShrink: 0 }}>DISCLOSURE STATUS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8vw', color: '#FFFFFF', fontWeight: 700 }}>
              Pre-Contract Technical Disclosure — Complete
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '1.5vw', color: 'rgba(224,242,254,0.7)' }}>All models verified</div>
          </div>

          {/* Timeline items */}
          <div style={{ display: 'flex', gap: '2vw', flex: 1 }}>
            {[
              {
                phase: 'IMMEDIATE',
                title: 'Physical Node Fabrication',
                items: ['Fabricate single physical node', 'Stress-test to 3× operating load', 'Validate 75× safety margin empirically', 'Optical measurement via spectrometer'],
                color: '#7DD3FC', border: '#7DD3FC', bg: 'rgba(125,211,252,0.1)',
              },
              {
                phase: 'NEAR-TERM',
                title: '7×7 Tile Array Demo',
                items: ['Assemble 49-node physical tile', 'Deploy on textured surface', 'Record seam vanishing by video', 'Validate vs. simulation result'],
                color: 'rgba(125,211,252,0.7)', border: 'rgba(125,211,252,0.5)', bg: 'rgba(125,211,252,0.06)',
              },
              {
                phase: 'SEEKING',
                title: 'DoD Partnership',
                items: ['Development partnership agreement', 'SBIR / STTR engagement', 'Hardware + environment testing', 'Scalability pathway definition'],
                color: 'rgba(125,211,252,0.6)', border: 'rgba(125,211,252,0.4)', bg: 'rgba(125,211,252,0.05)',
              },
              {
                phase: 'CONTACT',
                title: 'AI&U Program Office',
                items: ['Loretta Chapman', 'Principal Investigator', 'ChromaSkin Program Office', 'July 2026'],
                color: 'rgba(125,211,252,0.5)', border: 'rgba(125,211,252,0.35)', bg: 'rgba(125,211,252,0.04)',
                isContact: true,
              },
            ].map((col, i) => (
              <div key={i} style={{ flex: 1, border: `0.12vw solid ${col.border}`, backgroundColor: col.bg, padding: '1.5vw', display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
                <div style={{ fontSize: '0.9vw', color: col.color, letterSpacing: '0.1vw', marginBottom: '0.3vh' }}>{col.phase}</div>
                <div style={{ fontSize: '1.6vw', color: '#FFFFFF', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2, marginBottom: '0.8vh' }}>{col.title}</div>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.8vw', alignItems: 'flex-start' }}>
                    <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', backgroundColor: col.color, marginTop: '0.7vh', flexShrink: 0 }} />
                    <div style={{ fontSize: '1.4vw', color: col.isContact && j === 0 ? '#7DD3FC' : 'rgba(224,242,254,0.85)', lineHeight: 1.4, fontWeight: col.isContact && j === 0 ? 600 : 400 }}>{item}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: '1.5vh' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026  |  15:41</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 10/10</div>
        </div>
      </div>
    </div>
  );
}
