import * as React from 'react';

const risks: Array<{ h: string; p: string }> = [
  { h: 'Kan låta säker — även när svaret är fel', p: 'Tonen avslöjar inte kvaliteten.' },
  { h: 'Saknar lokal kontext', p: 'Vet inte vad som gäller i Eslöv eller i vår rutin.' },
  { h: 'Kan beskriva källor som inte finns', p: 'Referenser kan se äkta ut utan att finnas.' },
  { h: 'Kan missa aktuella beslut', p: 'Kunskapen har brytpunkter i tiden.' },
  { h: 'Kan förenkla bort nyanser', p: 'Viktiga undantag och villkor kan försvinna.' },
  { h: 'Kan formulera trovärdiga gissningar', p: 'Luckor fylls med rimliga — inte kontrollerade — svar.' }
];

/** Slide 13 — "Faktaluckor och gissningar": six calm risk cards. */
const Slide13Gaps: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">13</span>
          <h2 className="s-title">Faktaluckor och gissningar</h2>
        </div>
        <span className="risk-tag">ATT KÄNNA TILL</span>
      </div>
    </header>
    <p className="lede" style={{ marginBottom: 48 }}>AI kan fylla i luckor med svar som låter rimliga — men som inte är kontrollerade fakta.</p>
    <div className="anim calm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px 70px', flex: 1, alignContent: 'center' }}>
      {risks.map((r, i) => (
        <div className="warn-row" key={i}>
          <span className="warn-glyph">i</span>
          <div><h3>{r.h}</h3><p>{r.p}</p></div>
        </div>
      ))}
    </div>
    <p className="takeaway"><strong>Tydligt svar är inte samma sak som korrekt svar.</strong><span>Det är därför vi granskar fakta, tillägg, löften, ton och användning.</span></p>
  </section>
);

export default Slide13Gaps;
