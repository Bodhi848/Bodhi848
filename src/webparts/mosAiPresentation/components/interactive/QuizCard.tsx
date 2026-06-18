import * as React from 'react';
import { useState } from 'react';

export interface IQuizVerdict {
  /** Visual tone of the badge. */
  tone: 'green' | 'yellow' | 'red';
  /** Badge text, e.g. "GUL". */
  label: string;
}

export interface IQuizCardProps {
  number: number | string;
  question: string;
  hint?: string;
  /** One or more colour-coded verdicts revealed on click. */
  verdicts: IQuizVerdict[];
  /** Revealed explanatory text shown next to the verdict badges. */
  answer: string;
}

/**
 * React reimplementation of the slide-17 facit/quiz reveal card. Clicking the
 * card toggles the answer (original used a `.revealed` class toggle).
 * Built as a reusable primitive for the slides 06–29 increment.
 */
const QuizCard: React.FC<IQuizCardProps> = ({ number, question, hint, verdicts, answer }) => {
  const [revealed, setRevealed] = useState<boolean>(false);

  return (
    <div
      className={`quiz-card${revealed ? ' revealed' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={revealed}
      onClick={() => setRevealed((r) => !r)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setRevealed((r) => !r); }
      }}
    >
      <div className="quiz-q"><span className="qn">{number}</span><span>{question}</span></div>
      {hint && <span className="quiz-hint">{hint}</span>}
      <div className="quiz-a">
        {verdicts.map((v, i) => (
          <span key={i} className={`qz qz-${v.tone}`}>{v.label}</span>
        ))}
        <span>{answer}</span>
      </div>
    </div>
  );
};

export default QuizCard;
