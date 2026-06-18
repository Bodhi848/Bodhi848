import * as React from 'react';

interface ITool {
  badge: string;
  badgeClass?: string;
  name: string;
  use: string;
  note: string;
}

const tools: ITool[] = [
  {
    badge: 'TILLGÄNGLIG ENLIGT LOKAL RUTIN',
    name: 'Svea GPT',
    use: 'Fristående textarbete: klarspråk, idéer, sammanfattning av okänsliga texter.',
    note: 'Använd enligt lokal rutin. Mata inte in sekretess, omaskerade personuppgifter eller skarpa ärenden utan godkänd rutin.'
  },
  {
    badge: 'TILLGÄNGLIG + LICENS',
    badgeClass: 'tb-licens',
    name: 'Copilot',
    use: 'M365-material: dokument, möten, mejl och Teams som du har behörighet till.',
    note: 'Behörigheter, delningar, gamla dokument och nya sammanställningar behöver kontrolleras.'
  },
  {
    badge: 'ENDAST OKÄNSLIGT MATERIAL',
    badgeClass: 'tb-public',
    name: 'Publik AI',
    use: 'Generella exempel, idéer och övning med helt okänsligt material.',
    note: 'Ingen kommunal information, ärendedata, sekretess eller personuppgifter.'
  }
];

/** Slide 05 — "Verktygskompassen": three tool cards. */
const Slide05Tools: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">05</span>
      <h2 className="s-title">Verktygskompassen: vilket AI-stöd passar till vad?</h2>
    </header>
    <div className="tool-cards anim">
      {tools.map((t, i) => (
        <div className="tool-card card" key={i}>
          <span className={`tool-badge${t.badgeClass ? ' ' + t.badgeClass : ''}`}>{t.badge}</span>
          <span className="tool-name">{t.name}</span>
          <p className="tool-use">{t.use}</p>
          <p className="tool-note">{t.note}</p>
        </div>
      ))}
    </div>
    <p className="takeaway">
      <strong>Välj verktyg efter materialet — och använd det enligt rutin.</strong>
    </p>
  </section>
);

export default Slide05Tools;
