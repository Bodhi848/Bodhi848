import * as React from 'react';

/** A1 — "Demo 3 (reserv): miljörapport" (appendix / reserve demo). */
const SlideA1Demo3: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A1</span>
          <h2 className="s-title">Demo 3 (reserv): AI som läshjälp — miljörapport</h2>
        </div>
        <span className="extra-tag">RESERV · FÖRDJUPNING</span>
      </div>
    </header>
    <div className="mini-model anim" style={{ marginBottom: 24 }}>
      <span className="mm-step">1 · Underlag</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step is-ai">2 · AI-stöd</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step">3 · Granskning</span>
    </div>
    <div className="split anim" style={{ alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
        <p className="lede" style={{ fontSize: 'var(--type-body)' }}>En lång miljörapport tar tid att läsa. AI kan ge en första orientering:</p>
        <ul className="bullets">
          <li><span>Sammanfatta i max fem punkter</span></li>
          <li><span>Lyfta risker och tidsfrister</span></li>
          <li><span>Skapa en läsbar strukturöversikt</span></li>
          <li><span>Flagga vad som måste kontrolleras mot källan</span></li>
        </ul>
      </div>
      <div className="demo-prompt">
        <span className="dp-label">PROMPT · SVEA GPT</span>
        <p>Du granskar ett avidentifierat utdrag ur en miljörapport inför ett ärende. Sammanfatta utdraget i max fem punkter.</p>
        <ul>
          <li>Lyft risker och tidsfrister först</li>
          <li>Tillför inget som inte framgår av texten</li>
          <li>Markera vad som är oklart eller måste kontrolleras mot källan</li>
        </ul>
      </div>
    </div>
    <p className="takeaway"><strong>Sammanfattningen ersätter aldrig originalet.</strong><span>Gå alltid tillbaka till originalunderlaget innan något används vidare.</span></p>
  </section>
);

export default SlideA1Demo3;
