export default function Slide04Swarm() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0F2537', backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255,255,255,0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255,255,255,0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255,255,255,0.05) 0.05vw, transparent 0.05vw)', backgroundSize: '5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw', color: '#E0F2FE', fontFamily: "'DM Mono', monospace", boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', top: '2vh', left: '2vw', right: '2vw', bottom: '2vh', border: '0.2vw solid #7DD3FC', boxSizing: 'border-box' }}><div style={{ position: 'absolute', top: '1vh', left: '1vw', right: '1vw', bottom: '1vh', border: '0.1vw dashed rgba(125,211,252,0.5)', boxSizing: 'border-box' }} /></div>
      <div style={{ position: 'absolute', top: '10vh', left: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', top: '9vw', left: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', bottom: '10vh', right: '10vw', width: '2vw', height: '0.1vh', backgroundColor: '#7DD3FC' }} /><div style={{ position: 'absolute', bottom: '9vw', right: '10.95vw', width: '0.1vw', height: '2vw', backgroundColor: '#7DD3FC' }} />
      <div style={{ position: 'absolute', top: '4vh', left: '50vw', transform: 'translateX(-50%)', fontSize: '0.8vw', color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '1vw' }}><span>|</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>ELEVATION D</span><span style={{ borderTop: '0.1vh solid #7DD3FC', width: '10vw', display: 'inline-block' }} /><span>|</span></div>
      <div style={{ position: 'absolute', bottom: '4vh', right: '4vw', width: '15vw', height: '8vh', border: '0.1vw solid #7DD3FC', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, borderBottom: '0.1vw solid #7DD3FC', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>APPR: _________</div><div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '0.5vw', fontSize: '0.7vw' }}>SCALE: NTS</div></div>

      <div style={{ position: 'absolute', top: '13vh', left: '10vw', width: '80vw', height: '74vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5vh', borderBottom: '0.1vh solid rgba(125,211,252,0.3)', paddingBottom: '1.5vh' }}>
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8vw', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.1vw', color: '#FFFFFF', textShadow: '0.1vw 0.1vw 0 rgba(125,211,252,0.2)' }}>P2P Swarm Intelligence</h2>
            <div style={{ fontSize: '0.9vw', color: '#7DD3FC', letterSpacing: '0.1vw', marginTop: '0.5vh' }}>FIG. 04 — COMPULSION-TO-MINIMIZE-DELTA BEHAVIORAL RULE</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}><div>SPEC: CHROMASKIN-01</div><div>STATUS: VERIFIED</div></div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '5vw', minHeight: 0 }}>
          {/* Left — flow diagram */}
          <div style={{ flex: 4, position: 'relative', border: '0.1vw solid rgba(125,211,252,0.3)', backgroundColor: 'rgba(15,37,55,0.8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.8vw 1vw', borderBottom: '0.1vw solid rgba(125,211,252,0.3)', borderRight: '0.1vw solid rgba(125,211,252,0.3)', fontSize: '0.8vw', color: '#7DD3FC' }}>DIAGRAM 4.1 — NODE LOOP</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0', paddingTop: '3vh' }}>
              {[
                { step: '01', label: 'SENSE', desc: 'Local optical + contact geometry' },
                { step: '02', label: 'HANDSHAKE', desc: 'Query immediate neighbors — optical + thermal state' },
                { step: '03', label: 'COMPUTE', desc: 'Compulsion Logic — minimize delta to neighbors' },
                { step: '04', label: 'CONFIRM', desc: 'Convergence threshold reached — loop ends' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
                  <div style={{ width: '100%', padding: '1.2vh 1.5vw', border: `0.15vw solid ${i === 0 ? '#7DD3FC' : 'rgba(125,211,252,0.4)'}`, backgroundColor: i === 0 ? 'rgba(125,211,252,0.1)' : 'rgba(125,211,252,0.03)', boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                      <span style={{ fontSize: '1.1vw', color: '#7DD3FC', fontWeight: 700 }}>{s.step}</span>
                      <span style={{ fontSize: '1.6vw', color: '#FFFFFF', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: '1.3vw', color: 'rgba(224,242,254,0.75)', marginTop: '0.4vh' }}>{s.desc}</div>
                  </div>
                  {i < 3 && (
                    <div style={{ width: '0.1vw', height: '1.8vh', backgroundColor: '#7DD3FC', opacity: 0.6 }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — bullets */}
          <div style={{ flex: 6, display: 'flex', flexDirection: 'column', gap: '2.5vh' }}>
            {[
              { title: 'No Master Controller', body: 'Every node is autonomous. The swarm has no central authority, no global map, and no coordination broadcast — only local peer handshakes.' },
              { title: 'One Governing Rule', body: 'Minimize delta between own physical/optical state and that of immediate neighbors. The camouflage effect is an emergent property of this single rule.' },
              { title: 'Asynchronous Propagation', body: 'Convergence spreads across the surface without waiting for the full swarm to report. Each node updates independently and immediately.' },
              { title: 'No Single Points of Failure', body: 'Any node can be removed or fail without halting the system. The surrounding nodes recompute against each other.' },
              { title: 'Thermal State in Handshake', body: 'Localized heat loads are included in P2P state exchange — distributed thermal balancing is a first-class behavior, not an afterthought.' },
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
          <div style={{ fontSize: '0.8vw', color: 'rgba(224,242,254,0.7)' }}>SHEET: 04/10</div>
        </div>
      </div>
    </div>
  );
}
