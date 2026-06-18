import * as React from 'react';

/** Slide 11 — "Demo 1: Svea och klarspråk" (main live demo). */
const Slide11Demo1: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">11</span>
          <h2 className="s-title">Demo 1: Svea GPT och klarspråk</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
          <span className="demo-flag">HUVUDDEMO</span>
          <span className="ex-tag">LIVE-DEMO</span>
        </div>
      </div>
    </header>
    <div className="mini-model anim" style={{ marginBottom: 26 }}>
      <span className="mm-step">1 · Underlag</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step is-ai">2 · AI-stöd</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step">3 · Granskning</span>
    </div>
    <div className="split anim" style={{ alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
        <p className="lede" style={{ fontSize: 'var(--type-body)' }}>Från fackspråk till begripligt utkast — avidentifierat utdrag ur ett bygglovsbeslut:</p>
        <ul className="bullets">
          <li><span>Enklare språk</span></li>
          <li><span>Tydligare struktur</span></li>
          <li><span>Punktlistan ”Dina nästa steg”</span></li>
          <li><span>Saklig myndighetston</span></li>
          <li><span>Kontroll före användning</span></li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="demo-prompt">
          <span className="dp-label">DEMO-PROMPT · SVEA GPT</span>
          <p>Agera kommunikatör i en kommun. Skriv om nedanstående avidentifierade textutdrag från ett bygglovsbeslut till enkel och begriplig svenska för den sökande.</p>
          <ul>
            <li>Behåll saklig myndighetston — ändra inte den juridiska innebörden</li>
            <li>Lägg inte till nya fakta · max tre korta stycken</li>
            <li>Avsluta med punktlistan ”Dina nästa steg”</li>
            <li>Markera vad som behöver kontrolleras av handläggare</li>
          </ul>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10, borderLeft: '6px solid var(--amber)' }}>
          <span className="dp-label" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-micro)', letterSpacing: '0.1em', color: 'var(--amber)' }}>GRANSKA SVARET · FAKTA · TILLÄGG · LÖFTEN · TON · ANVÄNDNING</span>
          <p style={{ margin: 0, fontSize: 'var(--type-micro)', color: 'var(--muted)' }}>Har AI ändrat betydelsen? Lagt till något? Är tonen saklig och begriplig? Vad måste kontrolleras innan texten används?</p>
        </div>
      </div>
    </div>
    <p className="takeaway"><strong>AI hjälper med språk och struktur.</strong><span>Handläggaren ansvarar för innebörd, fakta och användning.</span></p>
  </section>
);

export default Slide11Demo1;
