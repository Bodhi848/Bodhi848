# Assets

Local, SPFx-bundled assets for the web part. Reference them from components with
`require('./assets/<folder>/<file>')` (or an ESM `import`) so paths resolve
through the SPFx build — never via hard-coded `./uploads/...` relative URLs from
the original HTML.

## Status (this increment)
Slides 01–05 are pure CSS/text and reference **no** image assets, so these
folders are intentionally empty placeholders.

- `screenshots/` — for anonymised demo screenshots used by later slides
  (e.g. backup slides B1/B2). The screenshots in the source zip were QA/review
  artifacts and were **not** migrated.
- `uploads/` — for any genuine presentation images added with slides 06–29.
