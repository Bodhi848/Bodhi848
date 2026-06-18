import * as React from 'react';

/** Slide 12 — "Demo 2: AI eller skriva själv": decision demo. */
const Slide12Demo2: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">12</span>
          <h2 className="s-title" style={{ whiteSpace: 'nowrap' }}>Demo 2: AI eller skriva själv?</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
          <span className="ex-tag">LIVE-DEMO</span>
        </div>
      </div>
    </header>
    <div className="mini-model anim" style={{ marginBottom: 2 }}>
      <span className="mm-step">Vägval</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step is-ai">Kontrollpunkter</span>
      <span className="mm-arrow">→</span>
      <span className="mm-step">Kort svarsförslag</span>
    </div>
    <div className="underlag-bar anim" style={{ marginBottom: 6 }}>
      <span className="ub-tag">MEDBORGARENS SYNPUNKT · AVIDENTIFIERAD</span>
      <p>”En ny bänk har placerats nära min bostad. Det blir insyn mot uteplatsen — jag vill att kommunen flyttar den.”</p>
    </div>
    <div className="split anim" style={{ alignItems: 'stretch', gap: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div className="dual-card dual-soft" style={{ padding: '16px 30px', gap: 10 }}>
          <h3 style={{ fontSize: 'var(--type-body)' }}>Skriv själv</h3>
          <ul style={{ fontSize: 'var(--type-micro)', gap: 7 }}>
            <li>Om ansvar redan är känt</li>
            <li>Om nästa steg är tydligt</li>
            <li>Om svaret är kort och enkelt</li>
            <li>Om du redan har rätt formulering</li>
          </ul>
        </div>
        <div className="dual-card dual-strong" style={{ padding: '16px 30px', gap: 10 }}>
          <h3 style={{ fontSize: 'var(--type-body)' }}>Använd AI som stöd</h3>
          <ul style={{ fontSize: 'var(--type-micro)', gap: 7 }}>
            <li>Om tonen är känslig</li>
            <li>Om du vill undvika att lova fel</li>
            <li>Om ansvar eller placering behöver kontrolleras</li>
            <li>Om du vill få en kontrollista först</li>
          </ul>
        </div>
      </div>
      <div className="demo-prompt" style={{ margin: 0, gap: 7 }}>
        <span className="dp-label">PROMPT · COPILOT</span>
        <p>Agera stöd till en kommunal medarbetare som ska svara på en medborgarsynpunkt.</p>
        <p><strong>Underlag:</strong> En medborgare upplever att en ny bänk har placerats nära bostaden och vill att kommunen flyttar den.</p>
        <p>Gör två saker:</p>
        <ul>
          <li><strong>1. Lista vad jag måste kontrollera</strong> innan jag svarar.</li>
          <li><strong>2. Skriv därefter ett kort svarsförslag.</strong></li>
        </ul>
        <p style={{ marginTop: 4 }}>Krav: lägg inte till fakta som inte framgår · lova ingen åtgärd · markera osäkerheter · håll svaret kort, sakligt och respektfullt.</p>
      </div>
    </div>
    <p className="takeaway"><strong>AI används inte bara för formulering.</strong><span>AI kan först hjälpa dig se vad som måste kontrolleras.</span></p>
  </section>
);

export default Slide12Demo2;
