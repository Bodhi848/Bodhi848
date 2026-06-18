import type { FitMode } from '../MoSAiPresentationWebPart';

export interface IMoSAiPresentationProps {
  /** Web part title (shown above the deck; configurable in the property pane). */
  title: string;
  /** Whether the speaker-notes panel starts open. */
  showSpeakerNotes: boolean;
  /** Whether appendix/backup slides are included. */
  showAppendix: boolean;
  /** 0-based index of the slide to open on first render. */
  startSlide: number;
  /** How the 1920×1080 stage is fitted into the column. */
  fitMode: FitMode;
  /** SPFx web part instance id — used to scope DOM ids/aria within the part. */
  instanceId: string;
}
