import * as React from 'react';
import ConceptVenn from '../interactive/ConceptVenn';

/** Slide 04 — "Begreppen": clickable concentric rings + concept tabs. */
const Slide04Concepts: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">04</span>
      <h2 className="s-title">AI, generativ AI och språkmodell</h2>
    </header>
    <ConceptVenn />
    <p className="takeaway">
      <strong>Det räcker att förstå skillnaden</strong>
      <span>— tekniken bakom behöver vi inte kunna.</span>
    </p>
  </section>
);

export default Slide04Concepts;
