import * as React from 'react';
import ImageSlot from '../interactive/ImageSlot';

/**
 * B2 — "Backup: Demo 2 (Copilot)". Fallback screenshot slide.
 * Configure `src` with an anonymised screenshot URL from a SharePoint library
 * (the original drag-drop persistence is not reimplemented — see MIGRATION_NOTES).
 */
const SlideB2Backup: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">B2</span>
          <h2 className="s-title">Backup: Copilot-utkastet (medborgarsvar)</h2>
        </div>
        <span className="backup-tag">BACKUP · OM LIVE INTE FUNGERAR</span>
      </div>
    </header>
    <div className="slot-row anim">
      <div className="slot-card">
        <span className="slot-label">SKÄRMBILD · COPILOT-UTKASTET (AVIDENTIFIERAT)</span>
        <ImageSlot placeholder="Konfigurera en avidentifierad skärmbild av Copilot-utkastet (bild-URL)" alt="Avidentifierad skärmbild av Copilot-utkastet" />
      </div>
    </div>
    <p className="takeaway"><strong>AI hjälper med struktur och ton.</strong><span>Människan kontrollerar ansvar, placering och vad som får lovas.</span></p>
  </section>
);

export default SlideB2Backup;
