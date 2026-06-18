import * as React from 'react';

const checks: string[] = [
  'Verklighetsnära men avidentifierade ärendetyper',
  'Inga namn, adresser, telefonnummer eller ärendenummer',
  'Inga kartpositioner eller registreringsnummer',
  'Ingen sekretess eller omaskerade personuppgifter',
  'AI som utkast — inte beslut'
];

/** Slide 10 — "Säker demo": safe-demo checklist + workflow model. */
const Slide10SafeDemo: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">10</span>
      <h2 className="s-title">Så demonstrerar vi säkert</h2>
    </header>
    <div className="split anim" style={{ alignItems: 'center' }}>
      <div className="check-list">
        {checks.map((c, i) => (
          <div className="check-row" key={i}><span className="c-mark">✓</span><span>{c}</span></div>
        ))}
      </div>
      <div className="viktigt-card">
        <span className="vk-tag">ARBETSSÄTT</span>
        <h3>Vi demonstrerar arbetsmetoden — inte hantering av skarpa ärenden.</h3>
        <p>Medborgarexemplen är verklighetsnära ärendetyper, avidentifierade före passet. Vi gör detta just för att visa hur man kan arbeta tryggt utan att exponera information.</p>
      </div>
    </div>
    <div className="model-flow anim" style={{ marginTop: 36, borderTop: '1.5px solid var(--line)', paddingTop: 30 }}>
      <span className="mf-step">Underlag</span>
      <span className="mf-arrow">→</span>
      <span className="mf-step mf-ai">AI-stöd</span>
      <span className="mf-arrow">→</span>
      <span className="mf-step">Mänsklig granskning</span>
      <span className="mf-arrow">→</span>
      <span className="mf-step mf-use">Användning</span>
    </div>
    <p className="takeaway"><strong>Vi visar arbetssättet, inte skarpa ärenden.</strong><span>Underlag → AI-stöd → mänsklig granskning → användning.</span></p>
  </section>
);

export default Slide10SafeDemo;
