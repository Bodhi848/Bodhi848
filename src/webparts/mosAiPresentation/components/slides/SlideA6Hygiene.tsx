import * as React from 'react';

const checks: string[] = [
  'Behörigheter — vem har åtkomst till ytan?',
  'Delningar — är länkar öppna för ”alla i organisationen”?',
  'Gamla dokument — utkast och inaktuellt blir lättare att hitta',
  'Dokumentytor — rätt material i Teams, SharePoint och OneDrive',
  'Känsligt material — ligger det där det ska?'
];

/** A6 — "M365-hygien": prerequisite checklist for safe Copilot (appendix). */
const SlideA6Hygiene: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A6</span>
          <h2 className="s-title">M365-hygien: förutsättning för säker Copilot</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="split anim" style={{ alignItems: 'center' }}>
      <div className="check-list">
        {checks.map((c, i) => (
          <div className="check-row" key={i}><span className="c-mark">{i + 1}</span><span>{c}</span></div>
        ))}
      </div>
      <div className="viktigt-card">
        <span className="vk-tag">MINNESREGEL</span>
        <h3>Copilot gör inte fel behörigheter rätt.</h3>
        <p>Den gör information lättare att hitta — även gamla utkast och felaktigt delade dokument. Ordning och reda i M365 är därför en förutsättning, inte ett sidospår.</p>
      </div>
    </div>
    <p className="takeaway"><strong>Hygienen är inte en AI-fråga i sig</strong><span>— men AI gör behovet av den tydligare.</span></p>
  </section>
);

export default SlideA6Hygiene;
