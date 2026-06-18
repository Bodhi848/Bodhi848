import * as React from 'react';

/** Slide 07 — "Kan vi inte bara säga gissa inte?": two decision cards. */
const Slide07GuessNot: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">07</span>
      <h2 className="s-title">Kan vi inte bara säga ”gissa inte”?</h2>
    </header>
    <div className="dual anim">
      <div className="dual-card dual-strong">
        <h3>Det hjälper</h3>
        <ul>
          <li>Be AI skriva ”saknas i underlaget”</li>
          <li>Be AI markera osäkerheter</li>
          <li>Be AI inte lägga till fakta</li>
          <li>Be AI lista kontrollpunkter</li>
        </ul>
      </div>
      <div className="dual-card dual-soft">
        <h3>Men det räcker inte</h3>
        <ul>
          <li>AI vet inte alltid själv vad som saknas</li>
          <li>AI kan ändå låta säker</li>
          <li>AI kan formulera rimliga antaganden</li>
          <li>Människan måste kontrollera mot källa, rutin och ansvar</li>
        </ul>
      </div>
    </div>
    <p className="takeaway"><strong>En bra instruktion minskar risken.</strong><span>Den ersätter inte kontroll mot källa, rutin och ansvar.</span></p>
  </section>
);

export default Slide07GuessNot;
