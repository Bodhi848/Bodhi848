import * as React from 'react';

/** A5 — "Extra case: Excel och energi": data flow (appendix). */
const SlideA5Excel: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A5</span>
          <h2 className="s-title">Extra case: Excel och energiförbrukning</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="split anim" style={{ alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <p className="lede" style={{ fontSize: 'var(--type-body)' }}>Fiktivt Excelunderlag: energiförbrukning för belysningsstolpar. AI kan hjälpa med att:</p>
        <ul className="bullets">
          <li><span>Föreslå diagram</span></li>
          <li><span>Hitta avvikelser</span></li>
          <li><span>Sammanfatta trender</span></li>
          <li><span>Skapa frågor för vidare analys</span></li>
        </ul>
      </div>
      <div className="data-flow">
        <div className="data-mini">
          <i /><i /><i /><i />
          <i /><i className="hot" /><i /><i />
          <i /><i /><i /><i className="hot" />
          <i /><i /><i /><i />
        </div>
        <span className="flow-arrow">→</span>
        <div className="ai-box"><span>AI</span><small>överblick och frågor — inte slutsatser</small></div>
      </div>
    </div>
    <p className="takeaway"><strong>AI ersätter inte datakvalitetskontroll</strong><span>— eller verksamhetsbedömning.</span></p>
  </section>
);

export default SlideA5Excel;
