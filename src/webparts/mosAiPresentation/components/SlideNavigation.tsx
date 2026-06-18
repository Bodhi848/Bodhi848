import * as React from 'react';

export interface ISlideNavigationProps {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  notesAvailable: boolean;
  notesOpen: boolean;
  onToggleNotes: () => void;
}

/** Prev/next buttons + an optional speaker-notes toggle, all keyboard-accessible. */
const SlideNavigation: React.FC<ISlideNavigationProps> = ({
  index, total, onPrev, onNext, notesAvailable, notesOpen, onToggleNotes
}) => (
  <div className="deck-nav" role="group" aria-label="Bildspelsnavigation">
    <button
      type="button"
      className="dnav-btn"
      onClick={onPrev}
      disabled={index <= 0}
      aria-label="Föregående bild"
    >
      <span aria-hidden="true">←</span>
    </button>

    {notesAvailable && (
      <button
        type="button"
        className={`dnav-btn dnav-notes${notesOpen ? ' is-on' : ''}`}
        onClick={onToggleNotes}
        aria-pressed={notesOpen}
        aria-label={notesOpen ? 'Dölj talmanus' : 'Visa talmanus'}
      >
        <span aria-hidden="true">≡</span>
      </button>
    )}

    <button
      type="button"
      className="dnav-btn"
      onClick={onNext}
      disabled={index >= total - 1}
      aria-label="Nästa bild"
    >
      <span aria-hidden="true">→</span>
    </button>
  </div>
);

export default SlideNavigation;
