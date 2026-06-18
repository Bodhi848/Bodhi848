import * as React from 'react';

export interface IProgressBarProps {
  index: number;
  total: number;
  onJump: (index: number) => void;
}

/** Progress indicator: a "n / total" counter plus clickable slide dots. */
const ProgressBar: React.FC<IProgressBarProps> = ({ index, total, onJump }) => {
  const pct = total > 1 ? (index / (total - 1)) * 100 : 0;
  return (
    <div className="deck-progress">
      <div className="deck-progress-track" aria-hidden="true">
        <div className="deck-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div
        className="deck-dots"
        role="tablist"
        aria-label="Gå till bild"
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Bild ${i + 1}`}
            className={`deck-dot${i === index ? ' is-active' : ''}`}
            onClick={() => onJump(i)}
          />
        ))}
      </div>
      <span className="deck-counter" aria-live="polite">{index + 1} / {total}</span>
    </div>
  );
};

export default ProgressBar;
