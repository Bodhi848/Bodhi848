import * as React from 'react';
import { useState } from 'react';
import InteractiveStep from '../interactive/InteractiveStep';

const errors: Array<{ n: string; h: string; p: string; link: string }> = [
  { n: '1', h: 'Påhittad tömningsdag', p: 'AI anger en exakt dag utan att ha kontrollerat tömningsintervallet.', link: 'Granskningssteg: Fakta' },
  { n: '2', h: 'Påhittad källa', p: 'Dokumentet eller paragrafen är inte verifierad, men referensen ser trovärdig ut.', link: 'Granskningssteg: Fakta och källa' },
  { n: '3', h: 'Otillåtet åtagande', p: 'AI lovar extra tömning trots att inget beslut eller uppdrag finns.', link: 'Granskningssteg: Löften' }
];

/**
 * Slide 14 — "AI-svar med fel": 3-step progressive reveal
 * (question → marks → conclusion), driven by the InteractiveStep primitive.
 *
 * Note: the original also intercepted arrow keys to step through. Here stepping
 * is via the button only, so the deck's keyboard navigation is never hijacked
 * (documented in MIGRATION_NOTES.md). The takeaway is revealed at the final step.
 */
const Slide14Errors: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <section className="slide">
      <header className="s-head">
        <div className="s-head-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="s-num">14</span>
            <h2 className="s-title">Exempel: AI kan svara säkert men fel</h2>
          </div>
          <span className="risk-tag">ATT KÄNNA TILL</span>
        </div>
      </header>

      <InteractiveStep
        steps={3}
        labels={['Visa markeringarna →', 'Visa slutsatsen →', 'Börja om ↺']}
        onStepChange={setStep}
      >
        {(s) => (
          <div className="split anim" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="hint">Fiktiv medborgarfråga: ”När töms papperskorgarna i parken?” — AI-utkastet:</p>
              <div className="bubble" style={{ fontStyle: 'normal' }}>
                <p style={{ margin: 0 }}>
                  Hej! Tack för din fråga.{' '}
                  <span className={`err-mark${s >= 1 ? ' on' : ''}`}>Papperskorgarna i parken töms varje måndag och torsdag<sup>1</sup></span>{' '}
                  enligt <span className={`err-mark${s >= 1 ? ' on' : ''}`}>kommunens renhållningsplan 2024, § 7<sup>2</sup></span>.{' '}
                  <span className={`err-mark${s >= 1 ? ' on' : ''}`}>Vi har även beställt en extra tömning denna vecka<sup>3</sup></span>.{' '}
                  Hör gärna av dig om du har fler frågor!
                </p>
              </div>
            </div>
            <div className="err-reveal">
              {s === 0 ? (
                <div className="ask-panel">
                  <span className="ask-kicker">Fråga gruppen</span>
                  <p className="ask-q">”Vad i det här svaret skulle ni vilja kontrollera innan det skickas?”</p>
                </div>
              ) : (
                <div className="err-list">
                  {errors.map((e) => (
                    <div className="warn-row" key={e.n}>
                      <span className="warn-glyph">{e.n}</span>
                      <div>
                        <h3>{e.h}</h3>
                        <p>{e.p}</p>
                        <span className="step-link">{e.link}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </InteractiveStep>

      <p className="takeaway" style={{ visibility: step >= 2 ? 'visible' : 'hidden' }}>
        <strong>Ett tydligt svar är inte automatiskt ett korrekt svar.</strong>
        <span>Säker ton rakt igenom — kontrollera ändå fakta, källa och åtagande.</span>
      </p>
    </section>
  );
};

export default Slide14Errors;
