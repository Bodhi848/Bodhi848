import * as React from 'react';

const useCards: Array<{ h: string; p: string }> = [
  { h: 'Samla verkliga arbetsmoment', p: 'Utgå från era exempel i bikupan.' },
  { h: 'Skapa säkra promptkort', p: 'Färdiga, testade promptar för vanliga uppgifter.' },
  { h: 'Ange risknivå och kontrollpunkter', p: 'Varje kort märks grönt, gult eller rött.' },
  { h: 'Testa med godkända underlag', p: 'Avidentifierat, offentligt eller godkänt material.' },
  { h: 'Hitta 2–3 AI-testpiloter från MoS', p: 'Medarbetare som testar arbetssätt i vardagen.' },
  { h: 'Bygg ett promptbibliotek tillsammans', p: 'Det som fungerar delas vidare till alla.' }
];

const tomorrow: string[] = [
  'Välj en okänslig text',
  'Be AI göra den tydligare',
  'Kontrollera om något har ändrats',
  'Spara prompten om den fungerade',
  'Dela med arbetsgruppen'
];

/** Slide 18 — "Nästa steg": six action cards + "test tomorrow" band. */
const Slide18NextSteps: React.FC = () => (
  <section className="slide s15-tight">
    <header className="s-head">
      <span className="s-num">18</span>
      <h2 className="s-title">Så testar vi AI säkert tillsammans</h2>
    </header>
    <div className="use-grid anim" style={{ flex: 1, alignContent: 'center', gap: 18 }}>
      {useCards.map((c, i) => (
        <div className="use-card card" key={i}>
          <h3><span className="dot" /><span>{c.h}</span></h3>
          <p>{c.p}</p>
        </div>
      ))}
    </div>
    <div className="start-band anim tomorrow-band" style={{ marginTop: 14 }}>
      <span className="sb-label">TESTA<br />IMORGON</span>
      <div className="tomorrow-steps">
        {tomorrow.map((t, i) => (
          <span className="tm-step" key={i}><b>{i + 1}</b> {t}</span>
        ))}
      </div>
    </div>
    <p className="takeaway"><strong>Du behöver inte vara teknisk — du behöver kunna din verksamhet.</strong><span>Granska alltid innan något används. Börja smått och tryggt.</span></p>
  </section>
);

export default Slide18NextSteps;
