import { useEffect } from 'react';

export interface IDeckKeyboardHandlers {
  next: () => void;
  prev: () => void;
  first: () => void;
  last: () => void;
  escape: () => void;
}

/**
 * Registers keyboard navigation for the deck and cleans it up on unmount.
 *
 *  ArrowRight / PageDown / Space → next
 *  ArrowLeft  / PageUp           → prev
 *  Home                          → first
 *  End                           → last
 *  Escape                        → close overlay / notes
 *
 * The listener is attached to `document` but is **guarded** so it only acts when
 * the user is interacting with this web part — either focus is inside the deck
 * root, or the pointer is hovering it. This prevents the deck from hijacking the
 * arrow keys for the rest of the SharePoint page.
 */
export function useDeckKeyboard(
  rootRef: React.RefObject<HTMLElement>,
  isHoveredRef: React.MutableRefObject<boolean>,
  handlers: IDeckKeyboardHandlers
): void {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      const root = rootRef.current;
      if (!root) { return; }

      const active = document.activeElement;
      const focusInside = !!active && root.contains(active);
      if (!focusInside && !isHoveredRef.current) { return; }

      // Don't steal keys from text inputs inside the deck.
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) {
        if (e.key !== 'Escape') { return; }
      }
      if (e.metaKey || e.ctrlKey || e.altKey) { return; }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'Spacebar':
          handlers.next();
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          handlers.prev();
          e.preventDefault();
          break;
        case 'Home':
          handlers.first();
          e.preventDefault();
          break;
        case 'End':
          handlers.last();
          e.preventDefault();
          break;
        case 'Escape':
          handlers.escape();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [rootRef, isHoveredRef, handlers]);
}
