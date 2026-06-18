import * as React from 'react';
import ImageSlot from '../interactive/ImageSlot';

/**
 * B1 — "Backup: Demo 1 (Svea)". Fallback screenshot slide.
 * Configure `src` with an anonymised screenshot URL from a SharePoint library
 * (the original drag-drop persistence is not reimplemented — see MIGRATION_NOTES).
 */
const SlideB1Backup: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">B1</span>
          <h2 className="s-title">Backup: Svea-svaret (klarspråk)</h2>
        </div>
        <span className="backup-tag">BACKUP · OM LIVE INTE FUNGERAR</span>
      </div>
    </header>
    <div className="slot-row anim">
      <div className="slot-card">
        <span className="slot-label">SKÄRMBILD · SVEA GPT-SVARET (AVIDENTIFIERAT)</span>
        <ImageSlot placeholder="Konfigurera en avidentifierad skärmbild av Svea-svaret (bild-URL)" alt="Avidentifierad skärmbild av Svea GPT-svaret" />
      </div>
    </div>
    <p className="takeaway"><strong>Endast avidentifierad skärmbild.</strong><span>Samma kontrollfrågor gäller: fakta, innebörd, ton — och vad som måste kontrolleras.</span></p>
  </section>
);

export default SlideB1Backup;
