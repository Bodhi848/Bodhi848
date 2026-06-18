import * as React from 'react';

export interface IImageSlotProps {
  /** Image URL (e.g. an anonymised screenshot stored in a SharePoint library). */
  src?: string;
  /** Alt text for accessibility. */
  alt?: string;
  /** Caption shown when no image is configured. */
  placeholder?: string;
}

/**
 * Static replacement for the original `<image-slot>` custom element.
 *
 * The original supported drag-and-drop upload with a JSON sidecar persisted via
 * the export runtime (`window.omelette.writeFile`). That persistence has no
 * equivalent on a modern SharePoint page without a backend, so it is intentionally
 * NOT reimplemented (see MIGRATION_NOTES.md). Instead, a presenter configures an
 * image URL (e.g. an anonymised backup screenshot uploaded to a document library).
 * Reusable primitive for the backup slides B1/B2 in the slides 06–29 increment.
 */
const ImageSlot: React.FC<IImageSlotProps> = ({ src, alt, placeholder }) => {
  if (src) {
    return <img className="image-slot" src={src} alt={alt ?? ''} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 14, display: 'block' }} />;
  }
  return (
    <div
      className="image-slot image-slot--empty"
      role="img"
      aria-label={placeholder ?? 'Bildplats'}
    >
      <span>{placeholder ?? 'Ingen bild konfigurerad'}</span>
    </div>
  );
};

export default ImageSlot;
