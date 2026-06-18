import * as React from 'react';

/** A4 — "Extra case: gata och park": two observation cards (appendix). */
const SlideA4Cases: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A4</span>
          <h2 className="s-title">Extra case: dagvattenbrunn och nedskräpning</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="obs-split anim" style={{ flex: 1, alignContent: 'center' }}>
      <div className="card obs-card obs-see">
        <h3>Dagvattenbrunn i nivåskillnad</h3>
        <p>En medborgare har anmält att en brunn i vägbanan ligger fel i nivå jämfört med asfalten — och beskriver risk för cyklister, mopeder och andra trafikanter.</p>
        <p className="case-point">AI får inte lova åtgärd innan ansvarig aktör och fakta är kontrollerade.</p>
      </div>
      <div className="card obs-card obs-see">
        <h3>Nedskräpning och grenar</h3>
        <p>En medborgare har anmält skräp och grenar i ett grönområde, upplever att platsen varit ostädad länge och önskar att kommunen åtgärdar detta.</p>
        <p className="case-point">Även enkla ärenden behöver kontrolleras innan svar skickas.</p>
      </div>
    </div>
    <p className="takeaway"><strong>Avidentifierade övningscase.</strong><span>Aldrig namn, adresser, ärendenummer eller kartpositioner.</span></p>
  </section>
);

export default SlideA4Cases;
