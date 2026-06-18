import * as React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { MoSAiSlide } from '../data/types';
import type { FitMode } from '../MoSAiPresentationWebPart';
import { useFitScale, DESIGN_WIDTH, DESIGN_HEIGHT } from './useFitScale';
import { useDeckKeyboard } from './useDeckKeyboard';
import Slide from './Slide';
import SlideNavigation from './SlideNavigation';
import ProgressBar from './ProgressBar';
import SpeakerNotes from './SpeakerNotes';

export interface ISlideDeckProps {
  slides: MoSAiSlide[];
  startSlide: number;
  fitMode: FitMode;
  showSpeakerNotes: boolean;
}

const clampIndex = (i: number, total: number): number =>
  Math.max(0, Math.min(total - 1, i));

const SlideDeck: React.FC<ISlideDeckProps> = ({ slides, startSlide, fitMode, showSpeakerNotes }) => {
  const total = slides.length;
  const [index, setIndex] = useState<number>(() => clampIndex(startSlide, total));
  const [notesOpen, setNotesOpen] = useState<boolean>(showSpeakerNotes);

  const rootRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef<boolean>(false);
  const { containerRef, scale } = useFitScale(fitMode);

  const go = useCallback((i: number) => setIndex((cur) => {
    const next = clampIndex(i, total);
    return next === cur ? cur : next;
  }), [total]);

  const handlers = useMemo(() => ({
    next: () => go(index + 1),
    prev: () => go(index - 1),
    first: () => go(0),
    last: () => go(total - 1),
    escape: () => setNotesOpen(false)
  }), [go, index, total]);

  useDeckKeyboard(rootRef, hoveredRef, handlers);

  if (total === 0) {
    return <div className="deck-empty">Inga bilder att visa.</div>;
  }

  const current = slides[index];
  const notesAvailable = slides.some((s) => !!s.speakerNotes);

  return (
    <div
      className="deck-root"
      ref={rootRef}
      tabIndex={0}
      role="region"
      aria-roledescription="bildspel"
      aria-label={`Bild ${index + 1} av ${total}: ${current.title}`}
      onMouseEnter={() => { hoveredRef.current = true; }}
      onMouseLeave={() => { hoveredRef.current = false; }}
    >
      <div className={`deck-layout${notesOpen ? ' has-notes' : ''}`}>
        <div className="deck-main">
          {/* Measured container — drives the fit scale. */}
          <div className="deck-viewport" ref={containerRef}>
            <div
              className="deck-stage-scale"
              style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale }}
            >
              <div
                className="stage"
                style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})` }}
              >
                {/* key remounts the slide so entrance animations replay on change */}
                <Slide key={current.id} slide={current} />
              </div>
            </div>
          </div>

          <ProgressBar index={index} total={total} onJump={go} />

          <SlideNavigation
            index={index}
            total={total}
            onPrev={handlers.prev}
            onNext={handlers.next}
            notesAvailable={notesAvailable}
            notesOpen={notesOpen}
            onToggleNotes={() => setNotesOpen((o) => !o)}
          />
        </div>

        <SpeakerNotes
          open={notesOpen}
          notes={current.speakerNotes}
          slideLabel={current.label ?? current.number}
          onClose={() => setNotesOpen(false)}
        />
      </div>
    </div>
  );
};

export default SlideDeck;
