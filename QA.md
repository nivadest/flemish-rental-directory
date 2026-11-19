# Public UI QA

Verified 2026-11-19, approximately 09:17–09:21 Europe/Brussels, against https://nivadest.github.io/flemish-rental-directory/ in managed Chromium through the supported browser tool. The earlier localhost policy block was not bypassed; this run used the authorized public deployment only. No app files modified.

## Result
**Functional checks passed; two minor presentation defects found.** 65/65 browser-DOM assertions passed (evidence/ui/assertions.json). These run the actual deployed UI's input/change/click handlers and compare rendered company IDs with independently filtered deployed JSON, not merely imported application logic. Native browser select/type/click interactions additionally verified Limburg selection (15 results), search empty state and reset (60 results), and initiated CSV export.

- 60 unique company cards rendered (the page also contains three methodology articles; generic article count is not the company count).
- Every province option including All: Antwerpen 12, Limburg 15, Oost-Vlaanderen 11, West-Vlaanderen 12, Vlaams-Brabant 12. Province totals overlap for multi-province companies.
- Every machine option including All: Graafmachines 36, Heftrucks 25, Hoogwerkers 36, Kranen 16, Verreikers 18, Wielladers 28.
- Every score option including All and unrated: 1→0, 2→1, 3→16, 4→41, 5→2, unrated→0.
- Search by company, mixed case/trimmed whitespace, municipality, accent normalization, machine type and no-match; combined province/type/rating/search; live counters; all three sorts; both reset controls; details disclosure open/close passed.
- All rendered company website/tel/source hrefs agree with data; website new-tab links have noopener. No empty/unsafe href or missing fragment target. All seven same-origin page/research/data links returned HTTP 200 (evidence/ui/internal-links.json). External destination availability and actual phone calls were not tested.
- **Real browser CSV download:** selecting Limburg then clicking export produced /private/tmp/openclaw/downloads/werfwijzer-2026-11-19.csv. Retained as evidence/ui/limburg.csv: 6,512 bytes, UTF-8 BOM, 15 data rows, 15 consistent columns, company names exactly match the Limburg filter. Python csv parser verified quoting/delimiter structure; result in csv-verification.json. Browser download saveAs reported ENOENT after the artifact was already saved in the standard downloads directory; this was a tool artifact-copy issue, not a missing application download. No synthetic CSV was substituted.
- No JavaScript page exceptions. One console resource error: missing favicon (below). Diagnostics retained.

## Actual screenshots inspected
All six PNGs in evidence/ui were captured and visually viewed, not just generated:
- desktop-1440.png — 1440×1000, readable hero, full filter row and three-column cards.
- mobile-390-top.png / mobile-390-controls.png — 390×844, stacked hero/card layout, readable controls and cards.
- mobile-320-top.png / mobile-320-controls.png / mobile-320-empty.png — 320×844, narrow hero, controls, card and empty-state reset.
No horizontal document overflow at 390 or 320 (document scroll widths 375 and 305 respectively, excluding the scrollbar). This is viewport QA, not physical-device/touch emulation.

## Defects (not fixed in this QA scope)
1. **Minor — 320px selected filter labels truncate.** Province/type remain in two columns, causing “Alle provincies” and “Alle machines” to be visibly clipped. Longer selected province names will likewise be unclear. Reproduce at 320×844, scroll to filters; see mobile-320-controls.png. Recommend stacking these two selects at the narrowest breakpoint. Functionality works and no page overflow occurs.
2. **Minor — favicon HTTP 404.** Console records https://nivadest.github.io/favicon.ico returning 404. Add an explicit base-path-safe favicon link or favicon asset. No JS exceptions or functional impact observed.

## Replay / limits
Use the browser-automation skill, open the public URL, then pass the complete contents of tests/ui-browser.js as browser act/evaluate fn. It is an async arrow function, not a standalone Node runner. node --check tests/ui-browser.js passed. Test coverage reflects this deployed dataset; no unrated rows exist to empirically test unrated-last sorting with populated unrated data. Screenshots and native interaction evidence supplement the DOM-event assertions. No forms submitted, no third-party sites modified, no phone calls made.
