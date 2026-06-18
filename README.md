# MoS AI-introduktion — SharePoint Framework-webbdel (`MoSAiPresentation`)

En produktionsnära SharePoint Framework-webbdel (SPFx) som visar AI-introduktionen
för **Miljö och Samhällsbyggnad, Eslövs kommun** som ett bildspelsliknande
gränssnitt direkt på en modern SharePoint Online-sida.

Webbdelen är en ombyggnad av den tidigare fristående HTML-presentationen
(`AI-introduktion Eslöv v11.html`). Till skillnad från originalet:

- **kräver inget custom script** i SharePoint,
- **använder ingen iframe**,
- **använder ingen Babel i webbläsaren**,
- **har inga externa CDN-beroenden** (React, ReactDOM, Babel och QR-biblioteket
  paketeras lokalt via SPFx),
- **läcker ingen CSS** utanför webbdelen (all styling ligger under en scopad rot,
  `.mosAiPresentation`).

## Syfte

Återanvända innehåll, layout, bilder och interaktioner från presentationen, men
i en kontrollerad, förvaltningsbar och säker SPFx-struktur som går att
vidareutveckla.

## Omfattning (detta steg)

> **Testomfång:** De **fem första bilderna** är fullt migrerade som React-komponenter,
> inklusive de interaktiva delarna (timer på bild 03, klickbara ringar/flikar på
> bild 04). Återstående bilder (06–19), appendix (A1–A8) och backup (B1–B2) är nästa
> steg — de återanvändbara interaktionskomponenterna (stegvis avslöjande, quiz, QR,
> bildplats) finns redan under `components/interactive/`. Se `MIGRATION_NOTES.md`.

## Förutsättningar

- Node.js **22.x** (matchar SPFx 1.21.1)
- npm 10+
- En SharePoint Online-tenant med App Catalog (för paketering/installation)

## Installera beroenden

```bash
npm install
```

## Kör lokalt (workbench)

```bash
gulp serve
```

Öppnar den hostade workbenchen. Justera `initialPage` i `config/serve.json` till din
tenant (`https://<tenant>.sharepoint.com/_layouts/workbench.aspx`). Den lokala
workbenchen (`https://localhost:4321/temp/workbench.html`) fungerar också för ren
rendering.

## Bygg

```bash
gulp build          # TypeScript + SCSS, inga typfel
gulp bundle --ship  # produktionsbundle
```

## Paketera för SharePoint

```bash
gulp bundle --ship
gulp package-solution --ship
```

Detta skapar paketet `sharepoint/solution/mos-ai-presentation.sppkg`.

## Lägg till webbdelen på en modern SharePoint-sida

1. Ladda upp `mos-ai-presentation.sppkg` till **App Catalog** och godkänn
   distributionen (lösningen har `skipFeatureDeployment: true` och kan göras
   tenant-tillgänglig).
2. Lägg till appen **MoS AI-introduktion** på den webbplats där den ska användas.
3. Redigera en modern sida → lägg till webbdelen **MoS AI-introduktion**
   (kategori *Advanced*).
4. Öppna webbdelens egenskaper för att styra visningen:

| Egenskap | Typ | Standard | Beskrivning |
|---|---|---|---|
| `title` | text | `AI som stöd i vardagen` | Rubrik ovanför bildspelet |
| `showSpeakerNotes` | toggle | `false` | Visa talmanus-panelen från start |
| `showAppendix` | toggle | `false` | Inkludera appendix-/backupbilder |
| `startSlide` | slider | `0` | Vilken bild som visas först (0-baserat) |
| `fitMode` | dropdown | `contain` | `contain` = ryms i höjd, `width` = fyll kolumnen |

## Navigation

- **Knappar:** föregående/nästa (nere till vänster) samt klickbara punkter.
- **Tangentbord** (när webbdelen är fokuserad eller muspekaren är över den):
  `→`/`PageDown`/`Mellanslag` = nästa, `←`/`PageUp` = föregående, `Home` = första,
  `End` = sista, `Esc` = stäng talmanus.
- **Talmanus:** knapp i navigationsraden växlar panelen (lokalt, inget skickas vidare).

## Projektstruktur

```
src/webparts/mosAiPresentation/
  MoSAiPresentationWebPart.ts          # Web part + egenskapspanel
  MoSAiPresentationWebPart.manifest.json
  loc/                                  # Lokaliseringssträngar (en-us, sv-se)
  components/
    MoSAiPresentation.tsx               # Rot, scopad rotklass
    MoSAiPresentation.module.scss        # All styling (scopad under .mosAiPresentation)
    SlideDeck.tsx                        # Index-state, scaling, tangentbord
    Slide.tsx                            # Renderar aktiv bild
    SlideNavigation.tsx · ProgressBar.tsx · SpeakerNotes.tsx
    useFitScale.ts · useDeckKeyboard.ts  # Hooks (skala + tangentbord)
    interactive/
      CountdownTimer.tsx                 # Bild 03 (används)
      ConceptVenn.tsx                    # Bild 04 (används)
      QuizCard.tsx · InteractiveStep.tsx · QrCode.tsx · ImageSlot.tsx  # redo för 06–29
    slides/
      Slide01Cover.tsx … Slide05Tools.tsx
  data/
    types.ts · slides.ts · speakerNotes.ts
  assets/
    screenshots/ · uploads/
```

## Kända begränsningar

- Endast bild 01–05 är migrerade i detta steg (se `MIGRATION_NOTES.md`).
- Originalets varumärkestypsnitt (*Familjen Grotesk*, *Source Sans 3*) laddades från
  Google Fonts (CDN). För att undvika CDN används ett systemtypsnitts-fallback. Lägg
  lokala `woff2`-filer under `assets/fonts` + `@font-face` för exakt typografi.
- `<image-slot>` med drag-och-släpp och sidolagring återskapas inte (kräver backend).
  Backupbilder anges i stället som bild-URL.
- QR-koden genereras med det paketerade `qrcode`-biblioteket i stället för CDN.

## Licens / förvaltning

Internt material för Eslövs kommun, Miljö och Samhällsbyggnad.
