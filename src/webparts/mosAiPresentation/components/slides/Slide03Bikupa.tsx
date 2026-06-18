import * as React from 'react';
import CountdownTimer from '../interactive/CountdownTimer';

/** Slide 03 — "Bikupa" pair exercise with a 3-minute countdown timer. */
const Slide03Bikupa: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">03</span>
          <h2 className="s-title">Bikupa: var tar texten tid?</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="ex-tag">ÖVNING · 2 OCH 2</span>
          <CountdownTimer seconds={180} />
        </div>
      </div>
    </header>
    <div className="anim" style={{ display: 'flex', flexDirection: 'column', gap: 70, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <p className="lede" style={{ textAlign: 'center', maxWidth: 1450, fontFamily: 'var(--font-display)', fontWeight: 600 }}>
        ”Vilken arbetsuppgift tar mycket tid och handlar om att läsa, sammanfatta, strukturera eller formulera?”
      </p>
      <div className="chip-cloud" style={{ justifyContent: 'center' }}>
        <div className="chip">Läsa</div>
        <div className="chip">Sammanfatta</div>
        <div className="chip">Strukturera</div>
        <div className="chip">Formulera</div>
      </div>
    </div>
    <p className="takeaway">
      <strong>2–3 min två och två · 2 min insamling.</strong>
      <span>Era exempel blir den röda tråden genom resten av passet.</span>
    </p>
  </section>
);

export default Slide03Bikupa;
