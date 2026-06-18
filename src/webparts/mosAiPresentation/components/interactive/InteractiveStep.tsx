import * as React from 'react';
import { useState } from 'react';

export interface IInteractiveStepProps {
  /** Number of steps (e.g. 3 for the slide-14 error demo). */
  steps: number;
  /** Button label per step; the last label restarts (e.g. "Börja om ↺"). */
  labels: string[];
  /** Render the body for the current 0-based step. */
  children: (step: number) => React.ReactNode;
  /** Called whenever the step changes (optional). */
  onStepChange?: (step: number) => void;
}

/**
 * Generic progressive-reveal stepper — a React port of the slide-14 `err-demo`
 * step control (original cycled a `data-step` attribute and intercepted
 * Space/→/← while the slide was active). Built as a reusable primitive for the
 * slides 06–29 increment; not used by slides 01–05.
 */
const InteractiveStep: React.FC<IInteractiveStepProps> = ({ steps, labels, children, onStepChange }) => {
  const [step, setStep] = useState<number>(0);

  const go = (n: number): void => {
    const clamped = Math.max(0, Math.min(steps - 1, n));
    setStep(clamped);
    if (onStepChange) { onStepChange(clamped); }
  };

  const advance = (): void => go(step >= steps - 1 ? 0 : step + 1);

  return (
    <div data-step={step}>
      {children(step)}
      <div className="step-control">
        <div className="step-dots" aria-hidden="true">
          {Array.from({ length: steps }).map((_, i) => (
            <i key={i} className={i <= step ? 'on' : undefined} />
          ))}
        </div>
        <button
          type="button"
          className={`step-btn${step === steps - 1 ? ' ghost' : ''}`}
          onClick={(e) => { e.stopPropagation(); advance(); }}
        >
          {labels[step] ?? 'Nästa →'}
        </button>
        <span className="step-hint">Mellanslag eller → stegar igenom</span>
      </div>
    </div>
  );
};

export default InteractiveStep;
