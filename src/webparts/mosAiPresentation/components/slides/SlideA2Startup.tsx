import * as React from 'react';

const rows: Array<{ task: string; before: string; after: React.ReactNode; time: string }> = [
  { task: 'Skriva om ett beslut till klarspråk', before: 'Formulera allt från en tom sida', after: <><b>Utkast på sekunder</b> — du granskar ton och fakta</>, time: '~30 → ~10 min' },
  { task: 'Hitta in i en lång rapport', before: 'Läsa igenom och sammanfatta manuellt', after: <><b>Överblick och frågor</b> på minuter — att kontrollera mot original</>, time: '~45 → ~15 min' },
  { task: 'Utkast till ett medborgarsvar', before: 'Formulera struktur och ton själv', after: <><b>Utkast med rätt ton</b> att justera och äga</>, time: '~20 → ~8 min' }
];

/** A2 — "Exempel: minska startsträckan": before/after table (appendix). */
const SlideA2Startup: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">A2</span>
          <h2 className="s-title" style={{ lineHeight: 1.1, fontSize: 58 }}>Exempel på var AI kan minska startsträckan</h2>
        </div>
        <span className="extra-tag">APPENDIX</span>
      </div>
    </header>
    <div className="ba-table anim">
      <div className="ba-head">
        <span>Vardagsmoment</span>
        <span>Utan AI</span>
        <span>Med AI som utkast</span>
        <span style={{ textAlign: 'right' }}>Möjlig effekt</span>
      </div>
      {rows.map((r, i) => (
        <div className="ba-line" key={i}>
          <span className="bl-task">{r.task}</span>
          <span className="bl-before">{r.before}</span>
          <span className="bl-after">{r.after}</span>
          <span className="bl-time">{r.time}</span>
        </div>
      ))}
    </div>
    <p className="hint" style={{ marginTop: 6 }}>Illustrativa exempel — den verkliga tidsvinsten varierar med uppgift, underlag och granskningsbehov. Tiden för granskning försvinner aldrig.</p>
    <p className="takeaway"><strong>AI tar dig från tom sida till utkast.</strong><span>Du tar utkastet till färdigt — och äger resultatet.</span></p>
  </section>
);

export default SlideA2Startup;
