import type * as React from 'react';

/**
 * Slide categories carried over from the original deck. `data-label` in the
 * source HTML encoded a number + title; appendix/backup were tagged via
 * `extra-tag` / `backup-tag`.
 */
export type SlideType =
  | 'cover'
  | 'normal'
  | 'interactive'
  | 'demo'
  | 'summary'
  | 'appendix';

/**
 * One slide in the deck.
 *
 * Hybrid rendering model:
 *  - `component` renders the slide as a real React component (used for slides 1–5
 *    and all interactive slides).
 *  - `html` is reserved for the later increment (slides 6–29) where static content
 *    slides may be migrated as sanitized HTML. It is rendered through a strictly
 *    isolated, DOMPurify-sanitized path (not yet wired — see MIGRATION_NOTES.md).
 */
export interface MoSAiSlide {
  /** Stable id, e.g. "01", "04", "A1", "B2". */
  id: string;
  /** Display number shown in the deck chrome, e.g. "01" or "A1". */
  number: string;
  /** Original `data-label` value, e.g. "04 · Begreppen". */
  label?: string;
  /** Visible slide title. */
  title: string;
  type: SlideType;
  /** React-rendered slide body (preferred). */
  component?: React.ComponentType;
  /** Reserved: sanitized HTML body for slides migrated later. */
  html?: string;
  /** Speaker notes from the source `data-speaker-notes` attribute. */
  speakerNotes?: string;
  /** Appendix slides (A1–A8) are only shown when `showAppendix` is enabled. */
  isAppendix?: boolean;
  /** Backup slides (B1–B2) — hidden by default, surfaced with appendix. */
  isBackup?: boolean;
}
