import * as React from 'react';

/** A7 — "Bilder och AI": observation vs interpretation (appendix). */
const SlideA7Images: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A7</span>
          <h2 className="s-title">Extra spår: bilder och AI</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="obs-split anim" style={{ flex: 1, alignContent: 'center' }}>
      <div className="card obs-card obs-see">
        <h3>AI kan hjälpa med</h3>
        <p>Beskriva vad en bild verkar innehålla. Skapa alt-text. Läsa text i bild. Skilja observation från tolkning.</p>
      </div>
      <div className="card obs-card obs-guess">
        <h3>Risken</h3>
        <p>Bildtolkning ska inte ensam ligga till grund för bedömning, tillsyn eller beslut. Bilder från ärenden kan dessutom innehålla personer, registreringsnummer och adresser.</p>
      </div>
    </div>
    <p className="takeaway"><strong>Observation är inte bedömning.</strong><span>Tolkningen granskas alltid av en människa med verksamhetskunskap.</span></p>
  </section>
);

export default SlideA7Images;
