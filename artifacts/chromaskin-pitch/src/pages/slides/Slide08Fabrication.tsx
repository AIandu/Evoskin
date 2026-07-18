export default function Slide08Fabrication() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION H</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Fabrication Roadmap</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 08 — FIVE-STAGE PHYSICAL PROTOTYPE SEQUENCE</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: PLANNED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3vh', minHeight: 0 }}>
          {/* Horizontal process flow */}
          <div style={{ flex: 1, display: 'flex', gap: '0', alignItems: 'stretch' }}>
            {[
              { num: '01', title: 'MOTHER MOLD', desc: 'CNC-machined aluminum or high-resolution resin 3D print. Sets outer shell curvature and hexagonal tile geometry.', color: 'rgba(125,211,252,0.12)', border: '#7DD3FC' },
              { num: '02', title: 'BUFFER LAYER', desc: '300nm silicone oil deposited via vapor deposition or precision spin-coating. Thickness controlled to ±10nm.', color: 'rgba(125,211,252,0.08)', border: 'rgba(125,211,252,0.6)' },
              { num: '03', title: 'CORE FILLING', desc: 'Vacuum-sealed injection of degassed water/glycerin fluid. Eliminates micro-bubble nucleation sites.', color: 'rgba(125,211,252,0.06)', border: 'rgba(125,211,252,0.5)' },
              { num: '04', title: 'STRESS TEST', desc: 'Cyclic thermal (0–60°C) and pressure cycling to 3× operating load. Validates 75× safety margin empirically.', color: 'rgba(125,211,252,0.05)', border: 'rgba(125,211,252,0.4)' },
              { num: '05', title: 'VANISHING DEMO', desc: '7×7 tile array placed on textured surface. P2P swarm convergence recorded. Seam elimination confirmed by video inspection.', color: 'rgba(125,211,252,0.1)', border: '#7DD3FC' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: step.color, border: `0.12vw solid ${step.border}`, padding: '1.5vw 1vw', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>
                  <div style={{ fontSize: '2vw', color: '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '0.8vh', opacity: 0.7 }}>{step.num}</div>
                  <div style={{ fontSize: '1.5vw', color: '#FFFFFF', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '1.2vh', lineHeight: 1.2 }}>{step.title}</div>
                  <div style={{ fontSize: '1.4vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.5, flex: 1 }}>{step.desc}</div>
                  {/* Step number bottom */}
                  <div style={{ position: 'absolute', bottom: '1vh', right: '1vw', fontSize: '0.8vw', color: 'rgba(125,211,252,0.5)' }}>STAGE {step.num}</div>
                </div>
                {i < 4 && (
                  <div style={{ display: 'flex', alignItems: 'center', zIndex: 1, margin: '0 -0.5vw', flexShrink: 0 }}>
                    <div style={{ width: '1.5vw', height: '0', borderTop: '0.1vw solid #7DD3FC', position: 'relative' }}>
                      <div style={{ position: 'absolute', right: '-0.3vw', top: '-0.5vh', width: 0, height: 0, borderTop: '0.6vh solid transparent', borderBottom: '0.6vh solid transparent', borderLeft: '0.8vw solid #7DD3FC' }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress annotation */}
          <div style={{ border: '0.1vw solid rgba(125,211,252,0.25)', padding: '1.2vw 2vw', backgroundColor: 'rgba(125,211,252,0.04)', display: 'flex', gap: '6vw', alignItems: 'center' }}>
            <div style={{ fontSize: '1.2vw', color: '#7DD3FC' }}>CURRENT STATUS</div>
            <div style={{ display: 'flex', gap: '4vw' }}>
              <div style={{ fontSize: '1.5vw', color: '#7DD3FC', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>Stages 01–03: <span style={{ color: '#E0F2FE', fontWeight: 400 }}>Design complete — awaiting hardware contract</span></div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '1.5vw', color: 'rgba(224,242,254,0.7)' }}>Stages 04–05: Follows prototype fabrication</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: '1vh' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 08/10</div>
        </div>
      </div>
    </div>
  );
}
