import * as React from 'react';
import QuizCard, { IQuizCardProps } from '../interactive/QuizCard';

const cards: IQuizCardProps[] = [
  {
    number: 1,
    question: 'Sammanfatta en offentlig rapport',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'yellow', label: 'GUL' }],
    answer: 'Kontrollera mot originalet: har nyanser, beslut eller ansvar fallit bort?'
  },
  {
    number: 2,
    question: 'Förenkla en medborgartext',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'green', label: 'GRÖN' }, { tone: 'yellow', label: 'GUL' }],
    answer: 'Beror på innehållet: utan personuppgifter ofta låg risk — med personuppgifter gul. Granska alltid ton och att innebörden inte ändrats.'
  },
  {
    number: 3,
    question: 'Svara på avidentifierad Infracontrol-fråga',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'yellow', label: 'GUL' }],
    answer: 'Utkast går bra — kontrollera ansvar, fakta och vad som får lovas innan svaret skickas.'
  },
  {
    number: 4,
    question: 'Tolka bild från ett ärende',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'yellow', label: 'GUL' }, { tone: 'red', label: 'RÖD' }],
    answer: 'Beror på bilden — personer eller registreringsnummer gör den röd. Tolkning får aldrig ensam ligga till grund för bedömning.'
  },
  {
    number: 5,
    question: 'Bearbeta ärende med personuppgifter',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'red', label: 'RÖD' }],
    answer: 'Stanna upp: lokal rutin, rättslig grund och informationsklassning först.'
  },
  {
    number: 6,
    question: 'Formulera beslutsmotivering',
    hint: 'Rösta först — klicka för möjlig bedömning',
    verdicts: [{ tone: 'red', label: 'RÖD' }],
    answer: 'Myndighetsbeslut kräver professionell bedömning — ingen AI-text utan godkänd rutin.'
  }
];

/** Slide 17 — "Övning: grön, gul eller röd?": six clickable quiz cards. */
const Slide17Quiz: React.FC = () => (
  <section className="slide">
    <header className="s-head">
      <div className="s-head-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="s-num">17</span>
          <h2 className="s-title">Övning: grön, gul eller röd?</h2>
        </div>
        <span className="ex-tag">ÖVNING · HANDUPPRÄCKNING</span>
      </div>
    </header>
    <div className="quiz-grid anim">
      {cards.map((c) => (
        <QuizCard key={c.number} {...c} />
      ))}
    </div>
    <p className="takeaway"><strong>Det finns inte alltid ett exakt svar.</strong><span>Poängen är att ställa rätt frågor: vilken information, vilket verktyg, vilket syfte — och vem granskar?</span></p>
  </section>
);

export default Slide17Quiz;
