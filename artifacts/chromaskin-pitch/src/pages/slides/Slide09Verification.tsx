export default function Slide09Verification() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION I</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Verification Methodology</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 09 — INDEPENDENT RE-DERIVATION REQUIREMENT</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: PROTOCOL ESTABLISHED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — bullets */}
          <div style={{ flex: 5, display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            {[
              { title: 'Discrepancy Caught by Re-Derivation', body: 'Two prior implementations produced 0.62 MPa and 55.9 MPa for identical shell parameters — a 90× disagreement. Both self-reported "pass." Neither was correct in isolation.' },
              { title: 'Root Cause: Incompatible Physical Assumptions', body: 'Model A assumed rigid shell (self-consistent but wrong boundary). Model B ignored fluid pressure (physically incomplete). Each model agreed with itself — but not with the other.' },
              { title: 'Resolution: Closed-Form Coupled Model', body: 'Derived from first principles: hoop stress σ = Pr/t where P comes from the fluid pressure equation, r = shell radius, t = shell thickness. Result: 0.667 MPa. Independently verified.' },
              { title: 'Standing Protocol', body: 'Every numeric result requires independent derivation from first principles AND physical/visual inspection of the stated outcome. Self-reporting is insufficient.' },
            ].map((b, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '2vw' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '0.2vw', height: '100%', backgroundColor: i === 0 ? '#ef4444' : i === 2 ? '#7DD3FC' : 'rgba(125,211,252,0.4)' }} />
                <div style={{ fontSize: '1.6vw', color: '#FFFFFF', marginBottom: '0.3vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{b.title}</div>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.45 }}>{b.body}</div>
              </div>
            ))}
          </div>

          {/* Right — comparison table */}
          <div style={{ flex: 5, border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0.8vw 1.2vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>TABLE 9.1 — PRIOR RUNS vs. VERIFIED MODEL</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
              <thead>
                <tr style={{ borderBottom: '0.1vw solid #7DD3FC' }}>
                  <th style={{ textAlign: 'left', padding: '1.3vh 1.2vw', fontSize: '1.1vw', color: '#7DD3FC', fontWeight: 500 }}>MODEL</th>
                  <th style={{ textAlign: 'center', padding: '1.3vh 1.2vw', fontSize: '1.1vw', color: '#7DD3FC', fontWeight: 500 }}>PEAK STRESS</th>
                  <th style={{ textAlign: 'center', padding: '1.3vh 1.2vw', fontSize: '1.1vw', color: '#7DD3FC', fontWeight: 500 }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Prior Run A (rigid shell)</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#ef4444', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>0.62 MPa</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#f59e0b', textAlign: 'center' }}>WRONG MODEL</td>
                </tr>
                <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Prior Run B (uncoupled)</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#ef4444', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>55.9 MPa</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#ef4444', textAlign: 'center' }}>INCOMPLETE</td>
                </tr>
                <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#FFFFFF', fontWeight: 600 }}>Verified (coupled)</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>0.667 MPa</td>
                  <td style={{ padding: '1.5vh 1.2vw', fontSize: '1.5vw', color: '#7DD3FC', fontWeight: 700, textAlign: 'center' }}>75× MARGIN ✓</td>
                </tr>
              </tbody>
            </table>
            <div style={{ padding: '1.2vw', borderTop: '0.1vw solid rgba(125,211,252,0.2)', backgroundColor: 'rgba(125,211,252,0.05)' }}>
              <div style={{ fontSize: '1.3vw', color: 'rgba(224,242,254,0.75)', lineHeight: 1.5 }}>Key lesson: identical inputs produced a 90× stress discrepancy across models. Self-reported "pass" is not a verification standard.</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: 'auto' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 09/10</div>
        </div>
      </div>
    </div>
  );
}
