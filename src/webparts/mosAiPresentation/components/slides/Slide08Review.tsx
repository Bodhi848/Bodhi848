import * as React from 'react';

const steps: Array<{ n: string; h: string; p: string }> = [
  { n: '1', h: 'Fakta', p: 'Stämmer uppgifterna mot källa eller ärende?' },
  { n: '2', h: 'Tillägg', p: 'Har AI lagt till något som inte fanns?' },
  { n: '3', h: 'Löften', p: 'Lovar texten något vi inte kan lova?' },
  { n: '4', h: 'Ton', p: 'Är svaret sakligt, begripligt och lämpligt?' },
  { n: '5', h: 'Användning', p: 'Får detta skickas, delas eller användas här?' }
];

/** Slide 08 — "Granskningstrappan": five escalating review steps + memo band. */
const Slide08Review: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">08</span>
      <h2 className="s-title">Granskningstrappan: så kontrollerar du ett AI-svar</h2>
    </header>
    <div className="trappa anim">
      {steps.map((s) => (
        <div className="tr-step" key={s.n}>
          <span className="tr-num">{s.n}</span>
          <h3>{s.h}</h3>
          <p>{s.p}</p>
        </div>
      ))}
    </div>
    <div className="memo-band anim" style={{ marginTop: 26 }}>
      <span className="mb-lead">MINNESRAD</span>
      <div className="mb-words">
        <span className="mb-word">Fakta</span><span className="mb-dot">·</span>
        <span className="mb-word">Tillägg</span><span className="mb-dot">·</span>
        <span className="mb-word">Löften</span><span className="mb-dot">·</span>
        <span className="mb-word">Ton</span><span className="mb-dot">·</span>
        <span className="mb-word">Användning</span>
      </div>
    </div>
    <p className="takeaway"><strong>Granskning betyder inte att läsa en extra gång.</strong><span>Det betyder att kontrollera rätt saker.</span></p>
  </section>
);

export default Slide08Review;
