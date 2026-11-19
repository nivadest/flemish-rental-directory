# UI QA — blocked

2026-11-19, target http://127.0.0.1:4173.

Read browser-automation skill, verified managed Chromium is available, and listed tabs (none). Attempted to open a dedicated `qa-werfwijzer` tab. Browser tool rejected navigation with **`browser navigation blocked by policy`**. No tab was created. This is an execution-policy blocker, not an application defect. Did not bypass that restriction using direct Playwright/CDP.

A read-only HTTP HEAD check returned **200 OK** (`text/html`), so the local server is reachable. OpenClaw has an installed Playwright package available, but browser tests were not run due to the explicit navigation-policy rejection.

## Unverified requirements
- Desktop 1440 and mobile 390/320 rendering and viewed screenshots.
- Search; every province/type/rating filter; sorting and reset; empty state.
- Real CSV download and content.
- External/tel links, browser console errors.
- 60 rendered deduplicated companies.

No app defect can be established from this run. No application files were modified; no screenshots or UI test success evidence were produced.

## Unblock
Permit browser navigation to this localhost development server through the supported browser policy/configuration, then rerun this QA.
