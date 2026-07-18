export default function Slide05Optical() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION E</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Optical Performance</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 05 — GRADED-INDEX BUFFER VALIDATION, 400–700nm</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: VERIFIED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — table + robustness */}
          <div style={{ flex: 6, display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            {/* Data table */}
            <div style={{ border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)' }}>
              <div style={{ padding: '0.8vw 1.2vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>TABLE 5.1 — REFLECTANCE COMPARISON AT CORE-SHELL INTERFACE</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '0.1vw solid #7DD3FC' }}>
                    <th style={{ textAlign: 'left', padding: '1.2vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500, letterSpacing: '0.05vw' }}>CONFIGURATION</th>
                    <th style={{ textAlign: 'center', padding: '1.2vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>REFLECTANCE</th>
                    <th style={{ textAlign: 'center', padding: '1.2vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>TRANSMITTANCE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Abrupt interface (no buffer)</td>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#ef4444', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>0.36%</td>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#E0F2FE', textAlign: 'center' }}>99.64%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Graded buffer — 300nm silicone oil</td>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>0.0053%</td>
                    <td style={{ padding: '1.2vh 1.5vw', fontSize: '1.5vw', color: '#7DD3FC', textAlign: 'center' }}>99.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Robustness note */}
            <div style={{ border: '0.1vw solid rgba(125,211,252,0.3)', padding: '1.5vw', backgroundColor: 'rgba(125,211,252,0.04)' }}>
              <div style={{ fontSize: '1.2vw', color: '#7DD3FC', marginBottom: '1vh' }}>ROBUSTNESS — VALIDATED CONDITIONS</div>
              <div style={{ display: 'flex', gap: '4vw' }}>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.85)' }}>&lambda; = 400–700nm</div>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.85)' }}>&theta; = 0° to 58°</div>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.85)' }}>Both polarizations (s &amp; p)</div>
              </div>
            </div>
          </div>

          {/* Right — hero stat */}
          <div style={{ flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.8vw 1vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', borderRight: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>KEY RESULT</div>
            <div style={{ textAlign: 'center', paddingTop: '3vh' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7vw', fontWeight: 700, lineHeight: 0.9, color: '#7DD3FC', textShadow: '0 0 4vw rgba(125,211,252,0.4)' }}>98.5%</div>
              <div style={{ fontSize: '1.5vw', color: '#E0F2FE', marginTop: '1.5vh', letterSpacing: '0.1vw', textTransform: 'uppercase' }}>Reflectance Reduction</div>
              <div style={{ fontSize: '1.3vw', color: 'rgba(224,242,254,0.65)', marginTop: '1vh' }}>abrupt → graded buffer</div>
              {/* Bar comparison */}
              <div style={{ marginTop: '3vh', width: '14vw', margin: '3vh auto 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2vw', color: 'rgba(224,242,254,0.7)', marginBottom: '0.5vh' }}>
                  <span>Abrupt</span><span>0.36%</span>
                </div>
                <div style={{ height: '1.5vh', backgroundColor: 'rgba(239,68,68,0.7)', marginBottom: '1.5vh', width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2vw', color: 'rgba(224,242,254,0.7)', marginBottom: '0.5vh' }}>
                  <span>Graded</span><span>0.0053%</span>
                </div>
                <div style={{ height: '1.5vh', backgroundColor: '#7DD3FC', width: '1.5%' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: 'auto' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 05/10</div>
        </div>
      </div>
    </div>
  );
}
