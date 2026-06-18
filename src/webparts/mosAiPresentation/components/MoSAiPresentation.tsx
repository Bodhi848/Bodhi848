import * as React from 'react';
import styles from './MoSAiPresentation.module.scss';
import { IMoSAiPresentationProps } from './IMoSAiPresentationProps';
import SlideDeck from './SlideDeck';
import { getVisibleSlides } from '../data/slides';

/**
 * Root web part component.
 *
 * The single `styles.mosAiPresentation` class is the scoping root: every deck
 * style in MoSAiPresentation.module.scss lives under it (via `:global`), so no
 * CSS leaks onto the rest of the SharePoint page.
 */
const MoSAiPresentation: React.FC<IMoSAiPresentationProps> = (props) => {
  const { title, showSpeakerNotes, showAppendix, startSlide, fitMode } = props;
  const slides = getVisibleSlides(showAppendix);

  return (
    <section className={styles.mosAiPresentation}>
      {title && <h2 className="deck-heading">{title}</h2>}
      <SlideDeck
        slides={slides}
        startSlide={startSlide}
        fitMode={fitMode}
        showSpeakerNotes={showSpeakerNotes}
      />
    </section>
  );
};

export default MoSAiPresentation;
