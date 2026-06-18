import * as React from 'react';
import QrCode from '../interactive/QrCode';

/**
 * URL the closing-slide QR points to (the AI-lathund A4 handout).
 * In the original this was configurable via the tweaks panel; set this to the
 * real SharePoint link to the lathund PDF. Placeholder until confirmed.
 */
const LATHUND_URL = 'https://eslov.sharepoint.com/';

const rules: Array<{ n: string; h: string; p: string }> = [
  { n: '1', h: 'Börja med AI', p: 'Använd AI för struktur, utkast, idéer och första överblick. Börja smått och tryggt.' },
  { n: '2', h: 'Granska själv', p: 'Kontrollera fakta, ton, källor, lokal kontext — och vad AI har lagt till.' },
  { n: '3', h: 'Ansvara alltid', p: 'Du ansvarar för det material du skickar, publicerar eller använder i tjänsten.' }
];

/** Slide 19 — "Tre regler": dark closing slide with final question + QR. */
const Slide19Rules: React.FC = () => (
  <section className="slide dark-slide">
    <header className="s-head">
      <span className="s-num">19</span>
      <h2 className="s-title">Tre regler för AI i vardagen</h2>
    </header>
    <div className="sum-grid anim" style={{ flex: 1, alignContent: 'center' }}>
      {rules.map((r) => (
        <div className="sum-card" key={r.n}>
          <span className="sum-n">{r.n}</span>
          <h3>{r.h}</h3>
          <p>{r.p}</p>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 80, borderTop: '1.5px solid rgba(255,255,255,0.18)', paddingTop: 44 }}>
      <div className="final-q" style={{ alignItems: 'flex-start', textAlign: 'left', gap: 18, flex: 1 }}>
        <span className="fq-label">SLUTFRÅGA</span>
        <p className="fq-text" style={{ fontSize: 'calc(var(--ts) * 76px)', lineHeight: 1.04, fontWeight: 700 }}>
          Sparar detta tid utan att öka risken?
        </p>
      </div>
      <div className="qr-box" style={{ flex: 'none', gap: 22 }}>
        <p className="qr-text" style={{ maxWidth: 190 }}>Skanna för AI-lathunden — allt på en A4.</p>
        <div style={{ background: '#FFFFFF', borderRadius: 14, padding: 12, flex: 'none' }}>
          <QrCode value={LATHUND_URL} size={140} />
        </div>
      </div>
    </div>
  </section>
);

export default Slide19Rules;
