# MIGRATION_NOTES — från standalone-HTML till SPFx-webbdel

Detta dokument beskriver hur AI-introduktionen migrerats från den fristående
HTML-presentationen till SharePoint Framework-webbdelen `MoSAiPresentation`,
vilka antaganden som gjorts och vad som medvetet **inte** migrerats.

---

## 1. Källa

| Vad | Fil i `MoS_Ai.zip` | Användning |
|---|---|---|
| **Huvudkälla (presentation)** | `AI-introduktion Eslöv v11.html` | Senaste kompletta versionen: `<deck-stage width="1920" height="1080">` med **29 `<section>`-bilder** (19 huvud + 8 appendix A1–A8 + 2 backup B1–B2), alla med `data-speaker-notes`. |
| **Design/styling** | `deck-styles.css` | Färger, typografi, komponentstilar → scopad SCSS. |
| **Navigations-/scenlogik (referens)** | `deck-stage.js` | Beteende för next/prev, tangentbord, skalning, talmanus → React-hooks. |
| **Interaktionslogik (referens)** | `deck-interactions-v4.js` | Timer + ringar/flikar (bild 04) → React-state. |
| **Bildplats (referens)** | `image-slot.js` | `<image-slot>`-komponenten → statisk `ImageSlot` (URL-baserad). |
| **Innehållskontroll** | `scratchpad.md`, `Talmanus och fragehandbok …`, `AI-lathund A4.html` | Korsläsning av innehåll, talmanus och handout. |

**Bekräftelse av huvudkälla:** `v11` valdes framför v2–v10/standalone eftersom den
är den senaste *plain* versionen (refererar externa filer i stället för att
inline:a allt), innehåller flest bilder, har talmanus på varje bild och de
fullständiga interaktionerna (timer, ringar/flikar, stegvis felexempel, quiz, QR).
Standalone-filerna (1,7 MB) är samma innehåll men med base64-inbäddade assets +
bundler-manifest och används **inte**.

### Testomfång (detta steg)
Bild **01–05** är fullt migrerade. Övriga bilder (06–19, A1–A8, B1–B2) är nästa
steg; deras innehåll finns i `v11.html` och de återanvändbara interaktions­
komponenterna finns redan i `components/interactive/`.

### Använda assets
Bild 01–05 är rent CSS/text och refererar **inga** bildfiler. Skärmdumparna i
`screenshots/` och `uploads/` är QA-/granskningsartefakter och migrerades inte.

---

## 2. Borttaget (och varför)

| Borttaget | Var i originalet | Varför |
|---|---|---|
| **React, ReactDOM (CDN)** | `unpkg.com/react…`, `react-dom…` | Externt CDN-script; SPFx paketerar React lokalt. |
| **Babel standalone (CDN)** | `@babel/standalone` + `type="text/babel"` | Babel i webbläsaren är inte tillåtet på en modern SharePoint-sida. SPFx kompilerar TSX vid build. |
| **qrcodejs (CDN)** | `cdnjs…/qrcode.min.js` | Externt CDN. Ersatt med det paketerade npm-paketet `qrcode`. |
| **tweaks-panel.jsx / tweaks-app-v4.jsx / tweaks-app.jsx** | `<script type="text/babel">` | Dev-/redigeringsverktyg (live-tweak av färg/typografi). Inte presentationsinnehåll. Motsvarande styrning sker via webbdelens egenskaper. |
| **`__bundler_thumbnail` / `__bundler_*`-mallar + manifest** | `<template>` i `<head>`, standalone-manifest | Exportverktygets tekniska lager (thumbnails, runtime-uppackning). |
| **Standalone-bundler / DOMParser-swap / `document…replaceWith`** | standalone-HTML | Runtime-uppackning som kräver custom script. |
| **Thumbnail-rail med drag-reorder/kontextmeny** | `deck-stage.js` | Redigeringsfunktion för export-runtime (`dc-op`, `window.omelette`). Ej relevant i webbdelen. |
| **Tap-to-navigate** | `deck-stage.js` (avstängd redan i v11) | Originalet stängde av den; vi använder knappar + tangentbord. |
| **`<image-slot>` sidolagring** | `image-slot.js` (`window.omelette.writeFile`, `.json`-sidecar) | Kräver backend/skrivåtkomst. Ersatt med statisk URL-baserad `ImageSlot`. |
| **Globala CSS-resets / `:root` / `html` / `body` / `@media print *`** | `deck-styles.css` | Skulle läcka och påverka SharePoint-sidan. Ersatt med webbdelsscopade selektorer. |
| **Google Fonts `@import` (CDN)** | rad 1 i `deck-styles.css` | Externt CDN. Ersatt med systemtypsnitts-fallback (se Risker). |

---

## 3. Ändrat

### HTML → React-komponenter
- Varje `<section>` blev en React-komponent (`slides/Slide01Cover.tsx` …
  `Slide05Tools.tsx`). `data-label` → `label`/`number`/`title` i `data/slides.ts`.
- **Ingen `dangerouslySetInnerHTML`** används för bild 01–05 (allt är riktig JSX).
  Den sanerade HTML-vägen är reserverad för senare statiska bilder och ska då gå
  via DOMPurify i `Slide.tsx` (i dag bara en platshållare).

### CSS → scopad SCSS / CSS Modules
- All styling ligger i `MoSAiPresentation.module.scss` under den enda lokalt
  hashade klassen `.mosAiPresentation`. Originalets klassnamn behålls inuti ett
  `:global`-block, vilket ger selektorer som `.mosAiPresentation_<hash> .s-head`
  — alltså scopat per ascendent, ingen läckage.
- Designtokens (`--green #2F7D5B`, `--green-deep #14392B`, `--type-*` …) flyttades
  från `:root` till `.mosAiPresentation`.
- `deck-stage > section` → `.slide`. `#venn-area[data-active="…"]` →
  `.venn-wrap[data-active="…"]`.
- `color-mix(in oklch, …)` och `oklch(...)` i vanliga egenskaper konverterades till
  statiska `rgba()`/`hex` för att undvika problem i Sass-kompilatorn. Tokenvärden
  behålls som opaka custom properties.

### JS-interaktioner → React-state/hooks
- **Timer (bild 03):** `CountdownTimer.tsx` med `useState` + `setInterval`,
  upprensning i `useEffect`-cleanup.
- **Ringar/flikar (bild 04):** `ConceptVenn.tsx` håller `active`-state; SCSS reagerar
  på `data-active` precis som originalet (men på klass i stället för id).
- **Navigering:** `SlideDeck.tsx` håller `index`; `useDeckKeyboard.ts` registrerar och
  städar bort en `keydown`-lyssnare, **guardad** så den bara agerar när webbdelen är
  fokuserad/hovrad (kapar inte sidans tangentbord).
- **Skalning:** `useFitScale.ts` (ResizeObserver) beräknar `scale = bredd/1920` och
  applicerar `transform: scale()` så originalets pixelbaserade 1920×1080-layout
  bevaras. `fitMode: contain` begränsar dessutom höjden.
- **Stegvis avslöjande / quiz / QR:** `InteractiveStep.tsx`, `QuizCard.tsx`,
  `QrCode.tsx` byggda som återanvändbara primitiver (för bild 06–29).

### Asset-hantering → SPFx-kompatibel
- Inga hårdkodade `./uploads/…`/`./screenshots/…`-sökvägar. Lokala assets ska
  refereras via `require()`/`import` under `assets/` (tomma platshållarmappar i dag).

---

## 4. Risker / kvarvarande teknisk skuld

| Risk | Detalj | Förslag |
|---|---|---|
| **Bilder som fortfarande renderas via HTML** | Inga — bild 01–05 är ren JSX. Den sanerade HTML-vägen i `Slide.tsx` är ännu inte aktiv. | Vid migrering av statiska bilder 06+: lägg in DOMPurify och sanera. |
| **Typografi** | Varumärkestypsnitten ersatta med systemtypsnitt (för att slippa CDN). | Lägg lokala `woff2` under `assets/fonts` + `@font-face`. |
| **Alt-text på bilder** | Bild 01–05 saknar bilder, så ej aktuellt. `ImageSlot` har `alt`-prop. | Säkerställ alt-text när backupbilder läggs till. |
| **Förenklade interaktioner** | Originalets `.play`-animationer (staggered reveal i bild 04) återtriggas vid byte via `key`-remount, inte via MutationObserver. Visuellt likvärdigt. | OK; dokumenterat. |
| **Övriga komponentstilar** | Endast stilar som bild 01–05 + primitiverna behöver är porterade. | Portera resterande `deck-styles.css`-block tillsammans med bild 06–29. |
| **Appendix-beslut** | Appendix (A1–A8) och backup (B1–B2) läggs **efter** huvudsekvensen och visas bara när `showAppendix` är på (standard av). Matchar originalets ordning. | — |
| **Teams-stöd** | Manifestet anger Teams-hostar men flödet är endast testat som SharePoint-webbdel. | Verifiera i Teams vid behov. |

---

## 5. Teststatus

| Test | Status |
|---|---|
| `npm install` | Se commit-/körlogg (kör i byggmiljön). |
| `gulp build` (TypeScript, inga typfel) | Se körlogg. |
| `gulp bundle --ship` | Se körlogg. |
| `gulp package-solution --ship` (skapar `.sppkg`) | Se körlogg. |
| Lokal workbench (`gulp serve`) | Kräver webbläsare/tenant; verifieras manuellt. I container utan webbläsare ersätts detta av build/paket + kodgranskning. |
| Manuell navigationstest (knappar, ←/→/Home/End, punkter) | Implementerat; verifieras i workbench. |
| Interaktionstest (timer bild 03, ringar/flikar bild 04, talmanus) | Implementerat; verifieras i workbench. |
| Responsivitet (ingen horisontell scroll, läsbart på liten skärm) | `useFitScale` + media-queries; verifieras i workbench. |

> Faktisk build-/paketeringsstatus framgår av körningen i samband med leverans.

---

## 6. Antaganden

1. **SPFx 1.21.1** valdes enligt önskemål ("senaste 1.21.x"). Notera att absolut
   senaste SPFx är 1.23.1 vid skrivande stund — versionsbyte är enkelt (endast
   versionspinnar i `package.json`/`tsconfig`).
2. "Första 5 bilderna" tolkas som testleverans; arkitektur + interaktions­primitiver
   är byggda så att bild 06–29 är ett rent innehålls-/datasteg.
3. Backupbilder (B1/B2) använder konfigurerbar bild-URL i stället för drag-och-släpp.
4. Talmanus hämtas från `data-speaker-notes` i `v11` (inte från det separata
   `Talmanus … .html`, som är presentatörsstöd snarare än bildinnehåll).
5. `AI-lathund A4.html` är en separat handout (länkas via QR på slutbilden), inte en
   appendix-bild.
