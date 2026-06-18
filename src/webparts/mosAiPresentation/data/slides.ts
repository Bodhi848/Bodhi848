import { MoSAiSlide } from './types';
import { speakerNotes } from './speakerNotes';

import Slide01Cover from '../components/slides/Slide01Cover';
import Slide02Goals from '../components/slides/Slide02Goals';
import Slide03Bikupa from '../components/slides/Slide03Bikupa';
import Slide04Concepts from '../components/slides/Slide04Concepts';
import Slide05Tools from '../components/slides/Slide05Tools';

/**
 * The deck.
 *
 * TEST SCOPE (this increment): slides 01–05 are fully migrated as React
 * components, with the interactive pieces (slide 03 timer, slide 04 venn/tabs)
 * reimplemented in React. Slides 06–29 (incl. the 3-step error demo, quiz,
 * QR closing slide, appendix A1–A8 and backup B1–B2) are the next increment —
 * their content lives in "AI-introduktion Eslöv v11.html" and the reusable
 * interaction components are already provided under components/interactive/.
 */
export const slides: MoSAiSlide[] = [
  {
    id: '01',
    number: '01',
    label: '01 · AI som stöd i vardagen',
    title: 'AI som stöd i Miljö och Samhällsbyggnads vardag',
    type: 'cover',
    component: Slide01Cover,
    speakerNotes: speakerNotes['01']
  },
  {
    id: '02',
    number: '02',
    label: '02 · Mål för passet',
    title: 'Efter passet kan du…',
    type: 'normal',
    component: Slide02Goals,
    speakerNotes: speakerNotes['02']
  },
  {
    id: '03',
    number: '03',
    label: '03 · Bikupa',
    title: 'Bikupa: var tar texten tid?',
    type: 'interactive',
    component: Slide03Bikupa,
    speakerNotes: speakerNotes['03']
  },
  {
    id: '04',
    number: '04',
    label: '04 · Begreppen',
    title: 'AI, generativ AI och språkmodell',
    type: 'interactive',
    component: Slide04Concepts,
    speakerNotes: speakerNotes['04']
  },
  {
    id: '05',
    number: '05',
    label: '05 · Verktygskompassen',
    title: 'Verktygskompassen: vilket AI-stöd passar till vad?',
    type: 'normal',
    component: Slide05Tools,
    speakerNotes: speakerNotes['05']
  }
  // --- TODO (next increment): slides 06–19, appendix A1–A8, backup B1–B2 ---
];

/**
 * Returns the slides to display given the `showAppendix` setting.
 * Decision (see MIGRATION_NOTES.md): appendix + backup slides are appended after
 * the main sequence and only shown when the toggle is on (default off).
 */
export function getVisibleSlides(showAppendix: boolean): MoSAiSlide[] {
  if (showAppendix) {
    return slides;
  }
  return slides.filter((s) => !s.isAppendix && !s.isBackup);
}
