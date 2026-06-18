import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as QRCode from 'qrcode';

export interface IQrCodeProps {
  /** URL/text to encode (e.g. the SharePoint lathund link). */
  value: string;
  size?: number;
  colorDark?: string;
  colorLight?: string;
}

/**
 * QR code rendered with the bundled `qrcode` npm package — replaces the original
 * qrcodejs CDN `<script>` (no external CDN, no custom script). Reusable primitive
 * for the slide-19 closing slide in the slides 06–29 increment.
 */
const QrCode: React.FC<IQrCodeProps> = ({ value, size = 140, colorDark = '#14392B', colorLight = '#ffffff' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !value) { return; }
    QRCode.toCanvas(
      canvas,
      value,
      { width: size, margin: 0, color: { dark: colorDark, light: colorLight } },
      (err: Error | null | undefined) => {
        if (err) { /* swallow: a broken QR must not break the deck */ }
      }
    );
  }, [value, size, colorDark, colorLight]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      role="img"
      aria-label={`QR-kod till ${value}`}
      style={{ width: size, height: size, display: 'block', borderRadius: 8 }}
    />
  );
};

export default QrCode;
