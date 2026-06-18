import * as React from 'react';

const goals: string[] = [
  'Förklara skillnaden mellan AI, generativ AI och språkmodell',
  'Veta vad Svea GPT och Copilot är till för',
  'Se när AI är värt tiden i MoS vardag',
  'Känna igen vad som alltid måste kontrolleras',
  'Ta ett första, tryggt steg och testa själv'
];

/** Slide 02 — learning objectives ("Efter passet kan du…"). */
const Slide02Goals: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <span className="s-num">02</span>
      <h2 className="s-title">Efter passet kan du…</h2>
    </header>
    <div className="anim" style={{ display: 'flex', flexDirection: 'column', gap: 56, flex: 1, justifyContent: 'center' }}>
      <div className="ethic-grid" style={{ flex: '0 0 auto' }}>
        {goals.map((g, i) => (
          <div className="ethic-q" key={i}>
            <span className="eq-num">{i + 1}</span>
            <span>{g}</span>
          </div>
        ))}
      </div>
    </div>
    <p className="takeaway">
      <strong>Det här är en introduktion — inte en teknisk kurs.</strong>
      <span>Du ska gå härifrån nyfiken och tryggare, inte färdigutbildad.</span>
    </p>
  </section>
);

export default Slide02Goals;
