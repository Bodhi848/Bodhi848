import * as React from 'react';

/** A3 — "Prompt: medborgarsvar": full Copilot prompt (appendix). */
const SlideA3Prompt: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A3</span>
          <h2 className="s-title">Fullständig prompt: svar på medborgarsynpunkt</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="anim" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div className="demo-prompt" style={{ maxWidth: 1560, margin: '0 auto' }}>
        <span className="dp-label">PROMPT · COPILOT</span>
        <p>Agera stöd till en kommunal medarbetare som ska svara på en medborgarsynpunkt.</p>
        <p><strong>Underlag:</strong> En medborgare upplever att en ny bänk har placerats nära bostaden och vill att kommunen flyttar den.</p>
        <p>Gör två saker:</p>
        <ul>
          <li><strong>1. Lista vad jag måste kontrollera</strong> innan jag svarar.</li>
          <li><strong>2. Skriv därefter ett kort svarsförslag.</strong></li>
        </ul>
        <p>Krav:</p>
        <ul>
          <li>Lägg inte till fakta som inte framgår.</li>
          <li>Lova ingen åtgärd.</li>
          <li>Markera osäkerheter.</li>
          <li>Håll svaret kort, sakligt och respektfullt.</li>
        </ul>
      </div>
    </div>
    <p className="takeaway"><strong>Endast avidentifierad text.</strong><span>Aldrig originalskärmbilder från Infracontrol eller Kontaktcenter.</span></p>
  </section>
);

export default SlideA3Prompt;
