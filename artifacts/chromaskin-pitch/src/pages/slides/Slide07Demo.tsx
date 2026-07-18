export default function Slide07Demo() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION G</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>Swarm-Scale Demo</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 07 — 1,000-NODE WEBGL SIMULATION, BOTH CONDITIONS</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: LIVE / VERIFIED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — swarm grid visual */}
          <div style={{ flex: 5, border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.8vw 1vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', borderRight: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>DIAGRAM 7.1 — NODE ARRAY (1,000 NODES)</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '3vh', gap: '1vh' }}>
              {/* Hex-ish grid of circles — 8 rows of varying counts */}
              {[8,9,9,10,10,9,9,8].map((count, row) => (
                <div key={row} style={{ display: 'flex', gap: '1.2vw', marginLeft: row % 2 === 1 ? '0.6vw' : '0' }}>
                  {Array.from({ length: count }).map((_, col) => {
                    const opacity = (row * count + col) % 7 === 0 ? 0.08
                      : (row * count + col) % 5 === 0 ? 0.25
                      : (row * count + col) % 3 === 0 ? 0.55
                      : 0.85;
                    return (
                      <div key={col} style={{
                        width: '2.4vw', height: '2.4vw', borderRadius: '50%',
                        backgroundColor: `rgba(125,211,252,${opacity})`,
                        border: `0.05vw solid rgba(125,211,252,${Math.min(opacity + 0.1, 1)})`,
                        boxShadow: opacity > 0.7 ? '0 0 0.4vw rgba(125,211,252,0.5)' : 'none',
                      }} />
                    );
                  })}
                </div>
              ))}
              <div style={{ fontSize: '1.2vw', color: 'rgba(224,242,254,0.6)', marginTop: '1.5vh', letterSpacing: '0.1vw' }}>CONVERGENCE IN PROGRESS — SEAMS VANISHING</div>
            </div>
          </div>

          {/* Right — bullets */}
          <div style={{ flex: 5, display: 'flex', flexDirection: 'column', gap: '2.3vh' }}>
            {[
              { title: '1,000 Nodes Simulated', body: 'Full swarm built in WebGL/Three.js. Renders real-time convergence behavior in browser — no special hardware required.' },
              { title: 'Textured Background', body: 'Nodes converge on an arbitrary image background. At 100% convergence, the surface is visually indistinguishable from the surroundings.' },
              { title: 'Uniform Background', body: 'Nodes fade against a solid background — verifying seam elimination independent of texture noise.' },
              { title: 'Seams Remaining — Directly Measured', body: 'Visual seam metric is verified by direct inspection, not self-report. Observable result at the output of the simulation, not inside it.' },
              { title: 'Interactive Live Demo', body: 'Available at the vanishing swarm URL. Responds to touch and mouse. Mode toggle in-session.' },
            ].map((b, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '2vw' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '0.2vw', height: '100%', backgroundColor: i === 0 ? '#7DD3FC' : 'rgba(125,211,252,0.4)' }} />
                <div style={{ fontSize: '1.6vw', color: '#FFFFFF', marginBottom: '0.3vh', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{b.title}</div>
                <div style={{ fontSize: '1.5vw', color: 'rgba(224,242,254,0.8)', lineHeight: 1.45 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.1vh solid rgba(125,211,252,0.3)', paddingTop: '1.5vh', marginTop: 'auto' }}>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DRAWN BY: Loretta Chapman / AI&amp;U</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>DATE: July 18, 2026</div>
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 07/10</div>
        </div>
      </div>
    </div>
  );
}
