export default function Slide06Mechanical() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION F</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Mechanical Validation</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 06 — HOOP STRESS ANALYSIS, COUPLED MODEL (VERIFIED)</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: VERIFIED — 75× MARGIN</div></div>
        </div>

        {/* Metric boxes row */}
        <div style={{ display: 'flex', gap: '2vw', marginBottom: '3vh' }}>
          {[
            { label: 'INTERNAL PRESSURE', val: '0.053 MPa', sub: 'P — cylindrical shell formula' },
            { label: 'HOOP STRESS', val: '0.667 MPa', sub: '\u03C3 = Pr/t — coupled model', highlight: true },
            { label: 'TPU TENSILE STRENGTH', val: '50 MPa', sub: '\u03C3\u2098\u2090\u02E3 — 95A Shore material' },
            { label: 'SAFETY MARGIN', val: '75\u00D7', sub: '50 MPa / 0.667 MPa = 75.0', hero: true },
          ].map((m, i) => (
            <div key={i} style={{ flex: 1, padding: '1.2vw', border: `0.15vw solid ${m.hero ? '#7DD3FC' : m.highlight ? 'rgba(125,211,252,0.6)' : 'rgba(125,211,252,0.3)'}`, backgroundColor: m.hero ? 'rgba(125,211,252,0.1)' : 'rgba(125,211,252,0.04)' }}>
              <div style={{ fontSize: '0.9vw', color: 'rgba(224,242,254,0.7)', marginBottom: '0.8vh', letterSpacing: '0.05vw' }}>{m.label}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.6vw', fontWeight: 700, color: m.hero ? '#7DD3FC' : '#FFFFFF', lineHeight: 1, marginBottom: '0.5vh' }}>{m.val}</div>
              <div style={{ fontSize: '1.1vw', color: 'rgba(224,242,254,0.6)' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Model comparison table */}
        <div style={{ flex: 1, border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ padding: '0.8vw 1.2vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>TABLE 6.1 — THREE-MODEL STRESS COMPARISON</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
            <thead>
              <tr style={{ borderBottom: '0.1vw solid #7DD3FC' }}>
                <th style={{ textAlign: 'left', padding: '1.3vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>MODEL</th>
                <th style={{ textAlign: 'left', padding: '1.3vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>ASSUMPTION</th>
                <th style={{ textAlign: 'center', padding: '1.3vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>PEAK STRESS</th>
                <th style={{ textAlign: 'center', padding: '1.3vh 1.5vw', fontSize: '1.2vw', color: '#7DD3FC', fontWeight: 500 }}>VERDICT</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Rigid Shell</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: 'rgba(224,242,254,0.75)' }}>Shell cannot stretch; 0.20% thermal expansion</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#ef4444', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>&gt;&gt; 50 MPa</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#ef4444', textAlign: 'center' }}>RUPTURE</td>
              </tr>
              <tr style={{ borderBottom: '0.05vw solid rgba(125,211,252,0.2)' }}>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#E0F2FE' }}>Solid Shell (Uncoupled)</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: 'rgba(224,242,254,0.75)' }}>Fluid pressure ignored; elastic shell only</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: 'rgba(224,242,254,0.7)', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center' }}>Passes*</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#f59e0b', textAlign: 'center' }}>INCOMPLETE</td>
              </tr>
              <tr>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#FFFFFF', fontWeight: 600 }}>Coupled (Verified)</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: 'rgba(224,242,254,0.75)' }}>Joint fluid &amp; elastic solution — correct physics</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textAlign: 'center' }}>0.667 MPa</td>
                <td style={{ padding: '1.3vh 1.5vw', fontSize: '1.5vw', color: '#7DD3FC', fontWeight: 700, textAlign: 'center' }}>75× MARGIN ✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: '2vh' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 06/10</div>
        </div>
      </div>
    </div>
  );
}
