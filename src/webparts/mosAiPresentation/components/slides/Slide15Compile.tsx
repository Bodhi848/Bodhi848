import * as React from 'react';

const questions: string[] = [
  'Vad är syftet — och finns personuppgifter?',
  'Kan resultatet kopplas till en fysisk person?',
  'Har vi rättslig grund?',
  'Är underlaget korrekt och aktuellt?',
  'Får resultatet användas eller delas i detta sammanhang?',
  'Vem granskar?'
];

/** Slide 15 — "När AI sammanställer": Copilot flow + GDPR questions. */
const Slide15Compile: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">15</span>
          <h2 className="s-title">När AI sammanställer information</h2>
        </div>
        <span className="risk-tag">ATT KÄNNA TILL</span>
      </div>
    </header>
    <p className="safe-lede anim">
      <strong>Det här betyder inte att Copilot inte kan användas.</strong> När AI kombinerar information från flera källor
      kan resultatet bli en ny sammanställning — den behöver ibland bedömas som ett nytt användningssätt, särskilt om
      personer kan identifieras.
    </p>
    <div className="anim" style={{ display: 'flex', flexDirection: 'column', gap: 40, flex: 1, justifyContent: 'center' }}>
      <div className="flow" style={{ justifyContent: 'center' }}>
        <div className="chip-col">
          <div className="chip">Dokument</div>
          <div className="chip">Mejl</div>
          <div className="chip">Mötesanteckning</div>
          <div className="chip">Lista</div>
        </div>
        <span className="flow-arrow" style={{ fontSize: 25 }}>→</span>
        <div className="ai-box"><span>Copilot</span><small>kombinerar det du har behörighet till</small></div>
        <span className="flow-arrow">→</span>
        <div className="ai-box amber-box"><span>Ny sammanställning</span><small>kan behöva bedömas på nytt — ibland som personuppgiftsbehandling</small></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 70px' }}>
        {questions.map((q, i) => (
          <div className="ethic-q" key={i} style={{ fontSize: 'var(--type-small)' }}>
            <span className="eq-num">{i + 1}</span><span>{q}</span>
          </div>
        ))}
      </div>
    </div>
    <p className="takeaway"><strong>En ny sammanställning kan kräva en ny bedömning.</strong><span>Syfte, behörighet, rättslig grund och granskning avgör hur resultatet får användas.</span></p>
  </section>
);

export default Slide15Compile;
