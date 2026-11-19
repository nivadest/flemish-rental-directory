# Final validation — 2026-11-19

Public: https://nivadest.github.io/flemish-rental-directory/
Repository: https://github.com/nivadest/flemish-rental-directory
Deployed application commit: 7e30d938c006a5a9dfe1705491c3e5f9973f7eb2
Successful workflow: https://github.com/nivadest/flemish-rental-directory/actions/runs/44486915034

- 60 unique companies/groups; 72 recorded locations, including explicitly labeled registered offices.
- Counts by province: Antwerpen 12; Limburg 15; Oost-Vlaanderen 11; West-Vlaanderen 12; Vlaams-Brabant 12. Two cross-province merged groups cause overlap.
- All 60 visually reviewed; 62 provincial assessments before merging; 364 website screenshots audited as valid PNGs with desktop/mobile coverage.
- Scores: 2=1, 3=16, 4=41, 5=2. No artificial low scores or unrated rows introduced.
- npm test passes schema, duplicate host/id checks, rubric mean, six types in each province, filters, sorting, telephone normalization and CSV escaping/formula safety.
- Public app 65/65 DOM assertions pass; actual native interactions and actual downloaded Limburg CSV (15 rows) verified.
- Viewed screenshots at 1440, 390 and 320 pixels. Narrow-select clipping and favicon 404 fixed and reverified; no horizontal overflow, no JS exceptions, zero final console errors.
- Public HTML/data available unauthenticated; deployed JSON exactly matches local parsed data.
- 150 distinct source/website URL strings checked. Initial simple fetch 139 OK/11 issues; alternate official fetch/browser checks retrieved all 11. Sarens has a fetch-client certificate-chain limitation but normal browser displays official pages without any override. No confirmed broken source URL. No TLS bypass.
- Independent low-score phone/location checks (Megamax, Walca, Jo) agree with official sources.

Evidence: evidence/ui/, evidence/link-check.json, evidence/link-followup.md, evidence/link-followup/, evidence/final-source-spotcheck.md, evidence/chain-contact-*.json. These local evidence files are git-ignored; public website serves only public/.

Limitations: systematic broad selection, not exhaustive. Additional Sarens regional offices emerged in final link follow-up and are preserved as follow-up leads rather than silently changing the frozen provincial inventory. Other chains and subregions remain incomplete. No phone calls, enquiry submissions, bookings, stock checks or exhaustive accessibility audit. Ratings subjective and website-only. Browser screenshots emulate viewport sizes, not physical devices.
