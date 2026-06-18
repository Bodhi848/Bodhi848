import * as React from 'react';

const faqs: Array<{ q: string; a: string }> = [
  { q: 'Varför kan AI svara fel?', a: 'AI är byggt för att skapa ett sannolikt och sammanhängande svar. Det betyder inte att svaret automatiskt är sant i vårt ärende, vår rutin eller vår lokala kontext.' },
  { q: 'Kan man inte bara säga att AI inte ska gissa?', a: 'Jo, och det bör vi göra. Men AI vet inte alltid själv vad den saknar. Därför måste vi också be den markera osäkerheter och lista vad vi behöver kontrollera.' },
  { q: 'Varför använda AI om jag ändå måste granska?', a: 'I korta och enkla svar ska du ofta skriva själv. AI är mest användbart när texten är lång, rörig, känslig, återkommande eller när du behöver struktur och kontrollpunkter.' },
  { q: 'Vad är poängen med AI vid ett kort medborgarsvar?', a: 'Inte alltid att spara sekunder. Poängen kan vara att få neutral ton, tydlig struktur, undvika fel löften och få fram vad som behöver kontrolleras.' }
];

/** A8 — "Vanliga frågor efteråt": FAQ grid (appendix). */
const SlideA8Faq: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A8</span>
          <h2 className="s-title">Vanliga frågor efter presentationen</h2>
        </div>
        <span className="extra-tag">APPENDIX · FRÅGESTUND</span>
      </div>
    </header>
    <div className="faq-grid anim">
      {faqs.map((f, i) => (
        <div className="faq-item" key={i}>
          <p className="faq-q"><span className="fq-n">{i + 1}</span><span>{f.q}</span></p>
          <p className="faq-a">{f.a}</p>
        </div>
      ))}
    </div>
    <p className="takeaway"><strong>AI är ett stöd — inte en genväg förbi granskning.</strong><span>Människan kontrollerar mot källa, rutin och ansvar.</span></p>
  </section>
);

export default SlideA8Faq;
