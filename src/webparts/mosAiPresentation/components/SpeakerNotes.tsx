import * as React from 'react';

export interface ISpeakerNotesProps {
  open: boolean;
  notes?: string;
  slideLabel?: string;
  onClose: () => void;
}

/**
 * Local-only speaker-notes panel. Notes come from the source `data-speaker-notes`
 * and are shown next to the deck — never persisted or sent anywhere.
 */
const SpeakerNotes: React.FC<ISpeakerNotesProps> = ({ open, notes, slideLabel, onClose }) => {
  if (!open) { return null; }
  return (
    <aside className="deck-notes" aria-label="Talmanus">
      <div className="deck-notes-head">
        <span className="deck-notes-title">Talmanus{slideLabel ? ` · ${slideLabel}` : ''}</span>
        <button type="button" className="deck-notes-close" onClick={onClose} aria-label="Stäng talmanus">×</button>
      </div>
      <div className="deck-notes-body">
        {notes ? <p>{notes}</p> : <p className="deck-notes-empty">Inga talmanusanteckningar för den här bilden.</p>}
      </div>
    </aside>
  );
};

export default SpeakerNotes;
