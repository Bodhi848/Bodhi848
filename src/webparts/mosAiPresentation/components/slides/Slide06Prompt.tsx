import * as React from 'react';

/** Slide 06 — "Prompten minskar risken": weak vs strong prompt + formula. */
const Slide06Prompt: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">06</span>
      <h2 className="s-title">Prompten minskar risken — men tar inte bort granskningen</h2>
    </header>
    <div className="anim" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 26, justifyContent: 'center' }}>
      <p className="lede" style={{ fontSize: 'var(--type-subtitle)', maxWidth: 1640 }}>
        En stark prompt gör svaret <strong>lättare att granska</strong>. Den gör inte svaret automatiskt korrekt.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr auto 1.2fr', gap: '0 44px', alignItems: 'stretch' }}>
        <div className="demo-prompt" style={{ borderLeftColor: 'var(--muted)', opacity: 0.72 }}>
          <span className="dp-label" style={{ color: 'var(--muted)' }}>SVAG PROMPT</span>
          <p style={{ fontStyle: 'italic', fontSize: 'var(--type-body)', margin: 0 }}>”Svara på det här mejlet.”</p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 'var(--type-micro)', fontWeight: 700, letterSpacing: '0.07em', color: 'var(--muted)' }}>Oförutsägbart · svårt att granska</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: 'var(--muted)' }}>→</div>
        <div className="demo-prompt" style={{ borderLeftColor: 'var(--green)' }}>
          <span className="dp-label">STARK PROMPT</span>
          <p style={{ fontSize: 'var(--type-small)', margin: 0, lineHeight: 1.5 }}>
            Agera stöd till en kommunal medarbetare som ska skriva ett första utkast till svar på en medborgarsynpunkt.
            Bekräfta vad personen upplever, men lova ingen åtgärd. Lägg inte till fakta som inte framgår.{' '}
            <strong>Markera vad jag måste kontrollera innan svaret skickas.</strong>
          </p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 'var(--type-micro)', fontWeight: 700, letterSpacing: '0.07em', color: 'var(--green)' }}>Nära underlaget · lätt att granska</span>
        </div>
      </div>
      <div className="lab-formula" style={{ marginTop: 4 }}>
        <span className="lf-lead">EN STARK PROMPT INNEHÅLLER</span>
        <span className="part-chip">Roll</span>
        <span className="part-chip">Uppgift</span>
        <span className="part-chip">Kontext</span>
        <span className="part-chip">Ton</span>
        <span className="part-chip">Format</span>
        <span className="part-chip">Begränsning</span>
        <span className="part-chip" style={{ background: 'var(--green)', color: '#fff', fontSize: 'var(--type-small)', padding: '14px 28px' }}>Kontrollkrav ✓</span>
      </div>
    </div>
    <p className="takeaway"><strong>En stark prompt minskar risken och gör svaret lättare att kontrollera.</strong><span>Den ersätter aldrig granskning.</span></p>
  </section>
);

export default Slide06Prompt;
