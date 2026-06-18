/**
 * Speaker notes extracted verbatim from the `data-speaker-notes` attributes in
 * "AI-introduktion Eslöv v11.html". Kept separate from layout so notes can be
 * maintained without touching the slide components.
 *
 * Scope: slides 01–05 (the test increment). Notes for slides 06–29 live in the
 * source HTML and are added together with their slide components.
 */
export const speakerNotes: Record<string, string> = {
  '01':
    'Välkomna till AI-delen av utvecklingsdagen. AI är inte bara en IT-fråga — det är ' +
    'relevant i arbetsmoment där vi hanterar information, dokument, frågor, ärenden och ' +
    'kommunikation. Vi fokuserar på praktisk användning och säkra ramar. Viktig princip ' +
    'genom hela passet: AI är ett stödverktyg, inte en beslutsfattare.',
  '02':
    'Detta är inte en teknisk utbildning. Det är en praktisk introduktion till hur AI kan ' +
    'användas som stöd, vad vi ska vara försiktiga med och hur vi kan testa på ett säkert ' +
    'sätt. Betona: ni ska inte kunna allt efteråt — ni ska kunna ställa bättre frågor och ' +
    'testa säkrare.',
  '03':
    'Tänk inte på teknik. Tänk på arbetsmoment. Var finns mycket text? Var behöver ni skapa ' +
    'överblick? Var formulerar ni svar, underlag eller sammanfattningar? 2–3 minuter två och ' +
    'två, sedan 2 minuter insamling i helgrupp. Starta timern på sliden. Tipsa deltagarna: ' +
    'ta en konkret arbetsuppgift, inte en hel process.',
  '04':
    'Vi behöver inte kunna tekniken bakom. Det räcker att förstå skillnaden: AI hittar ' +
    'mönster och ger förslag, generativ AI skapar utkast och en språkmodell arbetar med text. ' +
    'Om någon frågar hur det fungerar: en språkmodell skapar svar utifrån mönster i språk, ' +
    'instruktionen den får och den information den har tillgång till i stunden. Undvik ' +
    'förenklingen att den bara gissar nästa ord. Klicka på ringarna eller korten för att ' +
    'markera respektive begrepp. Kör gärna statiskt om tiden är knapp — poängen är skillnaden ' +
    'mellan begreppen, inte animationen.',
  '05':
    'Svea GPT kan ses som fristående textstöd — det arbetar med det du själv skriver eller ' +
    'klistrar in. Copilot är integrerat i Microsoft 365 och kan använda information som ' +
    'användaren har behörighet till; därför blir behörigheter, delningar och dokumentytor ' +
    'viktiga. Publika AI-tjänster ska bara användas med helt okänsligt material om inget ' +
    'annat är godkänt. Säg inte att Copilot bara ser det du ser — säg att Copilot kan ' +
    'använda information som användaren har behörighet till.'
};
