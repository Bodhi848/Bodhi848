import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface ICountdownTimerProps {
  /** Total seconds to count down from. */
  seconds?: number;
}

type TimerState = 'idle' | 'running' | 'done';

function format(total: number): string {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * React reimplementation of the original `.timer-pill` exercise timer (slide 03).
 * The original wired start/pause/reset via `deck-interactions-v4.js`; here it is
 * pure React state with a `setInterval` that is cleaned up on unmount.
 */
const CountdownTimer: React.FC<ICountdownTimerProps> = ({ seconds = 180 }) => {
  const [remaining, setRemaining] = useState<number>(seconds);
  const [state, setState] = useState<TimerState>('idle');
  const intervalRef = useRef<number | undefined>(undefined);

  const clear = useCallback((): void => {
    if (intervalRef.current !== undefined) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, []);

  useEffect(() => clear, [clear]);

  const toggle = useCallback((): void => {
    if (state === 'running') {
      clear();
      setState('idle');
      return;
    }
    if (remaining <= 0) { return; }
    setState('running');
    intervalRef.current = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clear();
          setState('done');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [state, remaining, clear]);

  const reset = useCallback((): void => {
    clear();
    setRemaining(seconds);
    setState('idle');
  }, [clear, seconds]);

  const actionLabel = state === 'running' ? 'Pausa' : state === 'done' ? 'Klart' : 'Starta';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <button
        className="timer-pill"
        type="button"
        data-state={state}
        onClick={(e) => { e.stopPropagation(); toggle(); }}
        aria-label={`Timer ${format(remaining)} — ${actionLabel}`}
      >
        <span className="t-time">{format(remaining)}</span>
        <span className="t-action">{actionLabel}</span>
      </button>
      <button
        className="timer-reset"
        type="button"
        title="Återställ timern"
        aria-label="Återställ timern"
        onClick={(e) => { e.stopPropagation(); reset(); }}
      >
        ↺
      </button>
    </div>
  );
};

export default CountdownTimer;
