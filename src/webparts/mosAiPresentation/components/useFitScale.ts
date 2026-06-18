import { useLayoutEffect, useRef, useState } from 'react';
import type { FitMode } from '../MoSAiPresentationWebPart';

export const DESIGN_WIDTH = 1920;
export const DESIGN_HEIGHT = 1080;

/**
 * Computes the scale factor that fits the fixed 1920×1080 design stage into the
 * web part column, preserving the original pixel-based layout (the same idea as
 * the original `deck-stage._fit()`, adapted from "fullscreen" to "in-column").
 *
 *  - `width`:   scale = containerWidth / 1920  (deck fills the column width)
 *  - `contain`: additionally cap so the deck height fits ~82% of the viewport
 *               height, so a tall deck doesn't overflow the fold.
 *
 * Returns a ref to attach to the measured container and the current scale.
 */
export function useFitScale(fitMode: FitMode): {
  containerRef: React.RefObject<HTMLDivElement>;
  scale: number;
} {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.3);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) { return; }

    const compute = (): void => {
      const width = el.clientWidth || DESIGN_WIDTH;
      let next = width / DESIGN_WIDTH;
      if (fitMode === 'contain' && typeof window !== 'undefined') {
        const maxHeight = window.innerHeight * 0.82;
        next = Math.min(next, maxHeight / DESIGN_HEIGHT);
      }
      // Guard against 0 / NaN during first layout passes.
      if (next > 0 && Number.isFinite(next)) {
        setScale(next);
      }
    };

    compute();

    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(compute);
      observer.observe(el);
    }
    window.addEventListener('resize', compute);

    return () => {
      if (observer) { observer.disconnect(); }
      window.removeEventListener('resize', compute);
    };
  }, [fitMode]);

  return { containerRef, scale };
}
