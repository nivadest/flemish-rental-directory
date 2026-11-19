# Werfwijzer

Dutch public machinery-rental directory for all five Flemish provinces. 60 deduplicated company/group records, reviewed 2026-11-19. Public URL: https://nivadest.github.io/flemish-rental-directory/

## Run

Node 22+; no runtime or build dependencies. `npm run build` merges provincial research; `npm test` validates data and pure filtering/CSV logic. `npm run serve` serves only public/ on loopback port 4173.

## Architecture / preflight

Reviewed maintained Vite (https://github.com/vitejs/vite) and free GitHub Pages (https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages). A custom app was explicitly requested. Native ES modules and CSS are sufficient for 60 static records; deliberately no framework, dependency install, external font, analytics or backend. Existing authorized GitHub account used; no new account, paid plan, domain, purchase or gateway exposure. Only public/ is hosted; evidence stays local and git-ignored.

## Research and review

- research/*.json: original province records, official source links, phones, locations, types, five rubric dimensions and observed evidence.
- research/*-coverage.md: discovery queries, exclusions, limitations and subsequent visual reviews. Early null-score statements are historical, superseded by final review sections.
- evidence/: locally archived desktop/mobile screenshots and observation JSON/text. 364 website PNGs at audit time; desktop 1440px and mobile 390px exist for each provincial record. Not published to avoid redistributing unnecessary third-party page captures.
- public/data.json: merged dataset; Huurland and TVH records merged by official hostname. TVH includes Rentalift. Alternative duplicate reviews retained; first full review controls primary score.
- public/coverage.json: current counts.
- AUDIT.md: independent evidence audit; medium contact-scope and legal-seat issues fixed after report. Regional numbers now explicitly company contacts, not direct branch mappings; LVC/Jo registered-office and appointment caveats retained.
- QA.md: UI verification report (initial localhost policy restriction, followed by public-site testing when deployed).

Five equal-weight subjective website dimensions: design, mobile, navigation, product information, enquiry. Anchors 1 major barriers / 2 substantial gaps / 3 functional/basic / 4 clear modern useful / 5 excellent comprehensive usability. Overall rounded mean. No negative inference from network failure; unreviewable records remain null. No forms submitted. Scores concern websites, not companies or service quality.

Province counts: Antwerpen 12, Limburg 15, Oost-Vlaanderen 11, West-Vlaanderen 12, Vlaams-Brabant 12. Counts overlap across merged chains. Six machine types represented in every province. This is a broad, systematically discovered selection, not an exhaustive census. National-chain branch coverage and some subregions remain incomplete; see coverage reports. Types are company-wide, not guaranteed branch stock. Phones transcribed from official sources, not called.

## Deployment

GitHub Pages via .github/workflows/pages.yml; only public/ artifact. Build/test gate before deploy. No secrets in repository. For changes, edit research or UI, run build/test, commit/push main. Browser QA must use permitted navigation; localhost was policy-blocked, not bypassed.

CSV exports current filtered/sorted results, UTF-8 BOM and semicolon delimiter, quoted cells and formula-injection protection. + phone values receive an apostrophe prefix for spreadsheet safety. HTML text is escaped; external links use noopener/noreferrer. Telephone links strip optional international (0).
