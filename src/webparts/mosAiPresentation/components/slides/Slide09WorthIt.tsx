import * as React from 'react';

/** Slide 09 — "När är AI värt tiden?": write yourself vs use AI. */
const Slide09WorthIt: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">09</span>
      <h2 className="s-title">När är AI värt tiden?</h2>
    </header>
    <div className="dual anim">
      <div className="dual-card dual-soft">
        <h3>Skriv själv</h3>
        <ul>
          <li>Svaret är kort och enkelt</li>
          <li>Du kan svaret direkt</li>
          <li>Ansvar och nästa steg är redan känt</li>
          <li>Det är snabbare att skriva själv</li>
          <li>Ingen återanvändning behövs</li>
        </ul>
      </div>
      <div className="dual-card dual-strong">
        <h3>Använd AI som stöd</h3>
        <ul>
          <li>Texten är lång eller rörig</li>
          <li>Tonen är känslig</li>
          <li>Du behöver strukturera underlag</li>
          <li>Du vill undvika att lova fel</li>
          <li>Liknande svar återkommer ofta</li>
          <li>Du vill få fram kontrollpunkter</li>
        </ul>
      </div>
    </div>
    <p className="takeaway"><strong>AI ska inte användas för allt.</strong><span>Använd AI när startsträckan, strukturen, tonen eller kontrollpunkterna är problemet.</span></p>
  </section>
);

export default Slide09WorthIt;
