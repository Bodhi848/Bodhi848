import * as React from 'react';

/** Slide 16 — "Trafikljuset": green/yellow/red usage categories. */
const Slide16TrafficLight: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">16</span>
      <h2 className="s-title">Trafikljuset för AI-användning</h2>
    </header>
    <div className="tl-info anim" style={{ flex: 1, alignContent: 'center' }}>
      <div className="tl-card tl-green">
        <span className="tl-light" />
        <h3>Grön</h3>
        <p className="tl-ex">Idéer, fiktiva exempel, struktur, språkförbättring.</p>
        <p className="tl-rule">Kan ofta testas med låg risk — granska ändå resultatet.</p>
      </div>
      <div className="tl-card tl-yellow">
        <span className="tl-light" />
        <h3>Gul</h3>
        <p className="tl-ex">Sammanfatta rapporter, utkast till medborgarsvar, sortera synpunkter, analysera enkel tabell.</p>
        <p className="tl-rule">Gul är inte stopp — använd med omdöme och kontroll: rätt verktyg, rätt underlag, mänsklig granskning.</p>
      </div>
      <div className="tl-card tl-red">
        <span className="tl-light" />
        <h3>Röd</h3>
        <p className="tl-ex">Sekretess · känsliga uppgifter · skarpa personuppgifter · beslut eller juridiska bedömningar utan godkänd rutin.</p>
        <p className="tl-rule">Stanna upp och kontrollera lokal rutin.</p>
      </div>
    </div>
    <p className="takeaway"><strong>Rött betyder inte ”byt bara verktyg”.</strong><span>Det betyder ”stanna upp och kontrollera vad som får göras, i vilket verktyg och med vilken granskning”.</span></p>
  </section>
);

export default Slide16TrafficLight;
