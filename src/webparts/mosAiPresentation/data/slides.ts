import { MoSAiSlide } from './types';
import { speakerNotes } from './speakerNotes';

import Slide01Cover from '../components/slides/Slide01Cover';
import Slide02Goals from '../components/slides/Slide02Goals';
import Slide03Bikupa from '../components/slides/Slide03Bikupa';
import Slide04Concepts from '../components/slides/Slide04Concepts';
import Slide05Tools from '../components/slides/Slide05Tools';
import Slide06Prompt from '../components/slides/Slide06Prompt';
import Slide07GuessNot from '../components/slides/Slide07GuessNot';
import Slide08Review from '../components/slides/Slide08Review';
import Slide09WorthIt from '../components/slides/Slide09WorthIt';
import Slide10SafeDemo from '../components/slides/Slide10SafeDemo';
import Slide11Demo1 from '../components/slides/Slide11Demo1';
import Slide12Demo2 from '../components/slides/Slide12Demo2';
import Slide13Gaps from '../components/slides/Slide13Gaps';
import Slide14Errors from '../components/slides/Slide14Errors';
import Slide15Compile from '../components/slides/Slide15Compile';
import Slide16TrafficLight from '../components/slides/Slide16TrafficLight';
import Slide17Quiz from '../components/slides/Slide17Quiz';
import Slide18NextSteps from '../components/slides/Slide18NextSteps';
import Slide19Rules from '../components/slides/Slide19Rules';
import SlideA1Demo3 from '../components/slides/SlideA1Demo3';
import SlideA2Startup from '../components/slides/SlideA2Startup';
import SlideA3Prompt from '../components/slides/SlideA3Prompt';
import SlideA4Cases from '../components/slides/SlideA4Cases';
import SlideA5Excel from '../components/slides/SlideA5Excel';
import SlideA6Hygiene from '../components/slides/SlideA6Hygiene';
import SlideA7Images from '../components/slides/SlideA7Images';
import SlideA8Faq from '../components/slides/SlideA8Faq';
import SlideB1Backup from '../components/slides/SlideB1Backup';
import SlideB2Backup from '../components/slides/SlideB2Backup';

/**
 * The full deck — all 29 slides from "AI-introduktion Eslöv v11.html" migrated
 * as React components (19 main + 8 appendix A1–A8 + 2 backup B1–B2).
 *
 * Interactions reimplemented in React: timer (03), concept rings/tabs (04),
 * 3-step error reveal (14), quiz reveal (17), QR closing slide (19), image-slot
 * backup slides (B1/B2).
 */
export const slides: MoSAiSlide[] = [
  { id: '01', number: '01', label: '01 · AI som stöd i vardagen', title: 'AI som stöd i Miljö och Samhällsbyggnads vardag', type: 'cover', component: Slide01Cover, speakerNotes: speakerNotes['01'] },
  { id: '02', number: '02', label: '02 · Mål för passet', title: 'Efter passet kan du…', type: 'normal', component: Slide02Goals, speakerNotes: speakerNotes['02'] },
  { id: '03', number: '03', label: '03 · Bikupa', title: 'Bikupa: var tar texten tid?', type: 'interactive', component: Slide03Bikupa, speakerNotes: speakerNotes['03'] },
  { id: '04', number: '04', label: '04 · Begreppen', title: 'AI, generativ AI och språkmodell', type: 'interactive', component: Slide04Concepts, speakerNotes: speakerNotes['04'] },
  { id: '05', number: '05', label: '05 · Verktygskompassen', title: 'Verktygskompassen: vilket AI-stöd passar till vad?', type: 'normal', component: Slide05Tools, speakerNotes: speakerNotes['05'] },
  { id: '06', number: '06', label: '06 · Prompten minskar risken', title: 'Prompten minskar risken — men tar inte bort granskningen', type: 'normal', component: Slide06Prompt, speakerNotes: speakerNotes['06'] },
  { id: '07', number: '07', label: '07 · Kan vi inte bara säga gissa inte?', title: 'Kan vi inte bara säga ”gissa inte”?', type: 'normal', component: Slide07GuessNot, speakerNotes: speakerNotes['07'] },
  { id: '08', number: '08', label: '08 · Granskningstrappan', title: 'Granskningstrappan: så kontrollerar du ett AI-svar', type: 'normal', component: Slide08Review, speakerNotes: speakerNotes['08'] },
  { id: '09', number: '09', label: '09 · När är AI värt tiden?', title: 'När är AI värt tiden?', type: 'normal', component: Slide09WorthIt, speakerNotes: speakerNotes['09'] },
  { id: '10', number: '10', label: '10 · Säker demo', title: 'Så demonstrerar vi säkert', type: 'demo', component: Slide10SafeDemo, speakerNotes: speakerNotes['10'] },
  { id: '11', number: '11', label: '11 · Demo 1: Svea och klarspråk', title: 'Demo 1: Svea GPT och klarspråk', type: 'demo', component: Slide11Demo1, speakerNotes: speakerNotes['11'] },
  { id: '12', number: '12', label: '12 · Demo 2: AI eller skriva själv', title: 'Demo 2: AI eller skriva själv?', type: 'demo', component: Slide12Demo2, speakerNotes: speakerNotes['12'] },
  { id: '13', number: '13', label: '13 · Faktaluckor och gissningar', title: 'Faktaluckor och gissningar', type: 'normal', component: Slide13Gaps, speakerNotes: speakerNotes['13'] },
  { id: '14', number: '14', label: '14 · AI-svar med fel', title: 'Exempel: AI kan svara säkert men fel', type: 'interactive', component: Slide14Errors, speakerNotes: speakerNotes['14'] },
  { id: '15', number: '15', label: '15 · När AI sammanställer', title: 'När AI sammanställer information', type: 'normal', component: Slide15Compile, speakerNotes: speakerNotes['15'] },
  { id: '16', number: '16', label: '16 · Trafikljuset', title: 'Trafikljuset för AI-användning', type: 'normal', component: Slide16TrafficLight, speakerNotes: speakerNotes['16'] },
  { id: '17', number: '17', label: '17 · Övning: grön, gul eller röd', title: 'Övning: grön, gul eller röd?', type: 'interactive', component: Slide17Quiz, speakerNotes: speakerNotes['17'] },
  { id: '18', number: '18', label: '18 · Nästa steg', title: 'Så testar vi AI säkert tillsammans', type: 'normal', component: Slide18NextSteps, speakerNotes: speakerNotes['18'] },
  { id: '19', number: '19', label: '19 · Tre regler', title: 'Tre regler för AI i vardagen', type: 'summary', component: Slide19Rules, speakerNotes: speakerNotes['19'] },

  // --- Appendix (shown when showAppendix is enabled) ---
  { id: 'A1', number: 'A1', label: 'A1 · Demo 3 (reserv): miljörapport', title: 'Demo 3 (reserv): AI som läshjälp — miljörapport', type: 'appendix', component: SlideA1Demo3, speakerNotes: speakerNotes.A1, isAppendix: true },
  { id: 'A2', number: 'A2', label: 'A2 · Exempel: minska startsträckan', title: 'Exempel på var AI kan minska startsträckan', type: 'appendix', component: SlideA2Startup, speakerNotes: speakerNotes.A2, isAppendix: true },
  { id: 'A3', number: 'A3', label: 'A3 · Prompt: medborgarsvar', title: 'Fullständig prompt: svar på medborgarsynpunkt', type: 'appendix', component: SlideA3Prompt, speakerNotes: speakerNotes.A3, isAppendix: true },
  { id: 'A4', number: 'A4', label: 'A4 · Extra case: gata och park', title: 'Extra case: dagvattenbrunn och nedskräpning', type: 'appendix', component: SlideA4Cases, speakerNotes: speakerNotes.A4, isAppendix: true },
  { id: 'A5', number: 'A5', label: 'A5 · Extra case: Excel och energi', title: 'Extra case: Excel och energiförbrukning', type: 'appendix', component: SlideA5Excel, speakerNotes: speakerNotes.A5, isAppendix: true },
  { id: 'A6', number: 'A6', label: 'A6 · M365-hygien', title: 'M365-hygien: förutsättning för säker Copilot', type: 'appendix', component: SlideA6Hygiene, speakerNotes: speakerNotes.A6, isAppendix: true },
  { id: 'A7', number: 'A7', label: 'A7 · Bilder och AI', title: 'Extra spår: bilder och AI', type: 'appendix', component: SlideA7Images, speakerNotes: speakerNotes.A7, isAppendix: true },
  { id: 'A8', number: 'A8', label: 'A8 · Vanliga frågor efteråt', title: 'Vanliga frågor efter presentationen', type: 'appendix', component: SlideA8Faq, speakerNotes: speakerNotes.A8, isAppendix: true },

  // --- Backup (shown with appendix) ---
  { id: 'B1', number: 'B1', label: 'B1 · Backup: Demo 1 (Svea)', title: 'Backup: Svea-svaret (klarspråk)', type: 'appendix', component: SlideB1Backup, speakerNotes: speakerNotes.B1, isBackup: true },
  { id: 'B2', number: 'B2', label: 'B2 · Backup: Demo 2 (Copilot)', title: 'Backup: Copilot-utkastet (medborgarsvar)', type: 'appendix', component: SlideB2Backup, speakerNotes: speakerNotes.B2, isBackup: true }
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
