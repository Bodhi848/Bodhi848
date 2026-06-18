import * as React from 'react';
import { MoSAiSlide } from '../data/types';

export interface ISlideProps {
  slide: MoSAiSlide;
}

/**
 * Renders a single slide. Prefers the React `component`; falls back to the
 * reserved sanitized-HTML path (slides 06–29 increment). The fallback is only a
 * placeholder here — when HTML slides are added, this is where a DOMPurify-based
 * isolated renderer is wired in (see MIGRATION_NOTES.md).
 */
const Slide: React.FC<ISlideProps> = ({ slide }) => {
  if (slide.component) {
    const Component = slide.component;
    return <Component />;
  }

  // Reserved path — intentionally not rendering raw HTML yet.
  return (
    <section className="slide">
      <header className="s-head">
        <span className="s-num">{slide.number}</span>
        <h2 className="s-title">{slide.title}</h2>
      </header>
      <div className="anim" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <p className="lede" style={{ color: 'var(--muted)' }}>
          Den här sliden migreras i nästa steg.
        </p>
      </div>
    </section>
  );
};

export default Slide;
