import * as React from 'react';

const footerText: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--type-micro)',
  color: '#8FBCA4'
};

/** Slide 01 — dark cover with hero title, focus row and concentric rings. */
const Slide01Cover: React.FC = () => (
  <section className="slide dark-slide">
    <div style={{ display: 'flex', alignItems: 'center', gap: 100, flex: 1 }}>
      <div className="anim" style={{ display: 'flex', flexDirection: 'column', gap: 36, flex: 1 }}>
        <span className="kicker">ESLÖVS KOMMUN · MILJÖ OCH SAMHÄLLSBYGGNAD · UTVECKLINGSPROGRAM</span>
        <h1 className="hero-title">AI som stöd i Miljö och Samhällsbyggnads vardag</h1>
        <p className="hero-sub">Generativ AI, Svea GPT och Copilot — praktisk nytta och trygg användning</p>
        <div className="focus-row">
          <span>Läsa</span><span className="sep">·</span>
          <span>Sammanfatta</span><span className="sep">·</span>
          <span>Strukturera</span><span className="sep">·</span>
          <span>Formulera</span><span className="sep">·</span>
          <span>Få överblick</span><span className="sep">·</span>
          <span>Kommunicera</span>
        </div>
      </div>
      <div className="cover-rings anim">
        <div className="cring cring-1"><span>AI</span></div>
        <div className="cring cring-2"><span>Generativ AI</span></div>
        <div className="cring cring-3"><b>Språkmodell</b></div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1.5px solid rgba(255,255,255,0.18)', paddingTop: 28 }}>
      <span style={footerText}>AI är ett stödverktyg — inte en beslutsfattare</span>
      <span style={footerText}>60 minuter</span>
    </div>
  </section>
);

export default Slide01Cover;
