import * as React from 'react';
import { useState } from 'react';

type ConceptKey = 'ai' | 'gen' | 'llm';

/** Stagger-delay custom property used by the entrance animation in the SCSS. */
const cssVar = (d: string): React.CSSProperties => ({ ['--d']: d } as React.CSSProperties);

/**
 * React reimplementation of the slide-04 "Begreppen" interaction:
 * clickable concentric rings + concept tabs that reveal one of three
 * illustrated panels (AI · Generativ AI · Språkmodell).
 *
 * Original behaviour lived in `deck-interactions-v4.js` and toggled
 * `#venn-area[data-active]`; here it is React state. The scoped SCSS targets
 * `.venn-wrap[data-active="…"]` so the original visual rules still apply.
 */
const ConceptVenn: React.FC = () => {
  const [active, setActive] = useState<ConceptKey | ''>('');

  const toggle = (k: ConceptKey): void => setActive((cur) => (cur === k ? '' : k));

  const tab = (k: ConceptKey, label: string): React.ReactElement => (
    <button
      className="cstage-tab"
      type="button"
      data-k={k}
      aria-pressed={active === k}
      onClick={(e) => { e.stopPropagation(); toggle(k); }}
    >
      {label}
    </button>
  );

  const panelClass = (k: ConceptKey, extra?: string): string =>
    `cstage-panel cstage-illu${extra ? ' ' + extra : ''}${active === k ? ' play' : ''}`;

  return (
    <div className="venn-wrap anim" data-active={active}>
      <div className="venn">
        <button
          className="ring ring-ai"
          type="button"
          data-k="ai"
          aria-label="AI"
          onClick={(e) => { e.stopPropagation(); toggle('ai'); }}
        >
          <span className="ring-label">AI</span>
        </button>
        <button
          className="ring ring-gen"
          type="button"
          data-k="gen"
          aria-label="Generativ AI"
          onClick={(e) => { e.stopPropagation(); toggle('gen'); }}
        >
          <span className="ring-label">Generativ AI</span>
        </button>
        <button
          className="ring ring-llm"
          type="button"
          data-k="llm"
          aria-label="Språkmodell"
          onClick={(e) => { e.stopPropagation(); toggle('llm'); }}
        >
          <span className="ring-label">Språkmodell</span>
        </button>
      </div>

      <div className="concept-stage">
        <div className="cstage-tabs">
          {tab('ai', 'AI')}
          {tab('gen', 'Generativ AI')}
          {tab('llm', 'Språkmodell')}
        </div>
        <div className="cstage-body">
          <p className="cstage-empty">
            Klicka på ett begrepp — i ringarna eller knapparna — för att se vad det betyder.
          </p>

          {/* AI: känner igen mönster och sorterar */}
          <div className={panelClass('ai')} data-stage="ai">
            <h3>AI <span className="cstage-sub">— känner igen mönster och sorterar</span></h3>
            <div className="src-box pop">
              <span className="src-tag">INKOMNA SYNPUNKTER</span>
              <div className="ai-mixed">
                <span className="ai-chip">Buller från krossverk</span>
                <span className="ai-chip">Bygglov för altan</span>
                <span className="ai-chip">Trasig gatlykta</span>
                <span className="ai-chip">Lukt från reningsverk</span>
                <span className="ai-chip">Strandskydd vid sjön</span>
                <span className="ai-chip">Hål i cykelvägen</span>
              </div>
            </div>
            <div className="flow-row"><span className="flow-pill pulse">AI SORTERAR</span><span className="flow-arrow">↓</span></div>
            <div className="ai-piles">
              <div className="ai-pile stagger" style={cssVar('1s')} data-theme="miljo">
                <span className="pile-label">MILJÖ</span>
                <span className="pile-chip">Buller från krossverk</span>
                <span className="pile-chip">Lukt från reningsverk</span>
              </div>
              <div className="ai-pile stagger" style={cssVar('1.7s')} data-theme="bygg">
                <span className="pile-label">BYGGLOV</span>
                <span className="pile-chip">Bygglov för altan</span>
                <span className="pile-chip">Strandskydd vid sjön</span>
              </div>
              <div className="ai-pile stagger" style={cssVar('2.4s')} data-theme="gata">
                <span className="pile-label">GATA &amp; PARK</span>
                <span className="pile-chip">Trasig gatlykta</span>
                <span className="pile-chip">Hål i cykelvägen</span>
              </div>
            </div>
            <p className="cstage-cap stagger" style={cssVar('3.1s')}>
              I det här exemplet används AI för att känna igen mönster och sortera. Den skapar inget nytt innehåll.
            </p>
          </div>

          {/* Generativ AI: skapar nytt innehåll */}
          <div className={panelClass('gen')} data-stage="gen">
            <h3>Generativ AI <span className="cstage-sub">— skapar nytt innehåll</span></h3>
            <div className="src-box pop">
              <span className="src-tag">DIN BEGÄRAN</span>
              <p className="src-text">”Skriv ett utkast till svar om varför papperskorgarna i parken inte töms oftare.”</p>
            </div>
            <div className="flow-row"><span className="flow-pill pulse">GENERATIV AI SKAPAR</span><span className="flow-arrow">↓</span></div>
            <div className="gen-doc">
              <span className="src-tag src-tag-green">NYTT UTKAST</span>
              <p className="gen-line stagger" style={cssVar('1s')}>Tack för din synpunkt om papperskorgarna i parken.</p>
              <p className="gen-line stagger" style={cssVar('1.6s')}>Tömning sker enligt kommunens renhållningsplan, normalt en gång i veckan.</p>
              <p className="gen-line stagger" style={cssVar('2.2s')}>Vid högt tryck kan vi se över behovet av extra tömning.</p>
              <p className="gen-line stagger" style={cssVar('2.8s')}>Hör gärna av dig om problemet kvarstår.</p>
            </div>
            <p className="cstage-cap stagger" style={cssVar('3.4s')}>
              Generativ AI skapar nytt — av en begäran blir ett utkast att granska.
            </p>
          </div>

          {/* Språkmodell: generativ AI som arbetar med text */}
          <div className={panelClass('llm', 'cstage-llm')} data-stage="llm">
            <h3>Språkmodell <span className="cstage-sub">— generativ AI som arbetar med text</span></h3>
            <div className="llm-src pop">
              <span className="llm-tag">ORIGINALTEXT · MYNDIGHETSSPRÅK</span>
              <p>”Ansökan om bygglov för altan kan ej beviljas då åtgärden strider mot gällande detaljplan vad avser byggnadshöjd.”</p>
            </div>
            <div className="llm-flow">
              <span className="llm-model pulse">SPRÅKMODELL</span>
              <span className="llm-down">↓</span>
            </div>
            <div className="llm-outs">
              <div className="llm-out stagger" style={cssVar('1s')}><span className="llm-otag">KLARSPRÅK</span><p>”Du kan inte få bygglov för altanen eftersom den blir högre än vad detaljplanen tillåter.”</p></div>
              <div className="llm-out stagger" style={cssVar('1.7s')}><span className="llm-otag">KORT</span><p>”Avslag — altanen blir för hög enligt detaljplanen.”</p></div>
              <div className="llm-out stagger" style={cssVar('2.4s')}><span className="llm-otag">VÄNLIGT SVAR</span><p>”Tyvärr kan vi inte bevilja bygglovet. Altanens höjd överskrider detaljplanen — hör gärna av dig om du vill veta mer.”</p></div>
            </div>
            <p className="llm-cap stagger" style={cssVar('3.1s')}>
              Samma innehåll — modellen formar om texten efter din instruktion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptVenn;
