# Research/evidence audit

Date: 2026-11-19. Scope: existing research JSON, evidence files, public/data.json and relevant build/display methodology. No new external research; only this report was written. Findings distinguish missing archived proof from a demonstrated factual error.

## Verdict

Visual review evidence exists for every company. The low ratings inspected are supported by real mobile layout failures, not merely fetch failures. Both 5/5 sites have plausible supporting visual/content evidence. Fix branch-phone attribution and clarify registered-office locations before treating the downloadable dataset as branch-level contact data. Some chain contact/location claims are documented only in researcher notes, not preserved primary-source snapshots.

## Verified coverage and integrity

- Five research files contain 62 provincial records: Antwerpen 12, Limburg 15, Oost-Vlaanderen 11, Vlaams-Brabant 12, West-Vlaanderen 12.
- public/data.json has 60 distinct companies: Huurland and TVH Equipment each correctly merge two provincial records. Rentalift is included in TVH, not duplicated. No repeated normalized official website hostname in public data; no demonstrated missed chain merge.
- 364 PNGs exist. PNG signatures, all chunk checksums and IEND markers validated; no invalid images. Every provincial record has both an actual 1440-pixel desktop image and an actual 390-pixel mobile image. This verifies file existence/dimensions, not that every screenshot has been independently visually audited.
- All 58 nonmerged public records match their research fields exactly. All 60 public overall ratings equal the rounded mean of the five assessment dimensions.
- No demonstrated wrong-province assignment. Huurland’s marketing labels Leuven/Mechelen are correctly represented as Lubbeek/Boortmeerbeek, both Vlaams-Brabant. De Ryck’s archived “Heist-o/d-Berg” correctly supports Heist-op-den-Berg, Antwerpen. Joris Van Dijck’s Genk location is supported separately despite a central 014 telephone prefix; prefix alone is not a province error.

## Findings requiring attention

### 1. Medium — generated branchContacts over-assigns regional contact numbers

scripts/build.mjs creates each branchContacts entry by attaching one research phone to *every* location in that provincial research record. This is not a verified per-branch telephone mapping.

- Huurland: public data assigns 016 18 61 44 to “Lubbeek, Boortmeerbeek, Asse (Zellik)”. evidence/Vlaams-Brabant/huurland-content.json explicitly gives Boortmeerbeek **015 61 55 28**, whereas 016 18 61 44 belongs to Lubbeek. Similarly 050 31 22 05 is described in the research as Brugge’s number, but branchContacts labels it against all four West-Vlaanderen cities.
- TVH: public branchContacts associates +32 56 73 73 10 with Waregem, Diksmuide and Izegem. The research evidence itself gives Rentalift/Izegem **+32 51 31 74 11**. The former may be a valid group rental contact, but it is not demonstrated as each branch’s direct number.
- TVH Londerzeel: +32 52 30 77 30 is explicitly the branch number; the research additionally distinguishes rental +32 3 544 14 04. Preserve that distinction if presenting rental-specific contacts.

Recommended correction: map phones only to the location proven by the source, or rename the structure to representative regional/group contacts and explicitly mark scope. A single representative company phone is not itself a false phone; the misleading part is the branch association.

### 2. Medium — legal seats presented as undifferentiated rental locations

- LVC: archived content explicitly labels Binkom (Lubbeek) a **maatschappelijke zetel**, and Holsbeek the **magazijn**. public locations and the card city list do not retain this distinction.
- Jo Verhuurcenter: archived contact page labels Zele the registered office, with Lede at Kleiweg 19; visits are **enkel op afspraak**. The homepage also describes both as company locations, so Zele is not proven false, but it is not unambiguously a walk-in pickup branch.

Recommended correction: retain location roles and appointment caveats in structured/displayed data. Do not infer that every recorded address offers machine collection. This is a location-type ambiguity, not a wrong-province finding.

### 3. Medium — gaps in archived primary-source chain contact proof

- West-Vlaanderen TVH screenshots/text primarily preserve rental catalogue/review material. The saved matching JSON files do not contain Waregem, Diksmuide or Izegem. Research JSON and coverage notes cite official contact/location and Rentalift pages and summarize the addresses/group relationship, but those underlying contact snapshots are not present under that company’s evidence files.
- Huurland Brugge phone 050 31 22 05 appears in research notes/public data, but was not found in the archived matching JSON/TXT evidence; the four West-Vlaanderen branch pages are cited rather than preserved as contact captures.
- A normalized telephone scan found a matching published phone in company evidence for the other 61 provincial research records. This is a useful provenance check, not a guarantee of present-day correctness.

Recommended correction: preserve the already cited official contact pages with URL/capture date, or label these fields as researcher-transcribed from cited sources rather than fully archived proof. Missing snapshots do not establish that the addresses or phone are wrong.

### 4. Low — confusing historical snapshots and filenames

All provincial coverage notes retain earlier statements that ratings are null and no visual review occurred. Later sections explicitly supersede these statements and match the final JSON/screenshots. These are resolved historical contradictions, not evidence that final ratings are fabricated; mark old sections visibly obsolete or consolidate them.

The files huurland-check-mobile.png, lvc-verhuur-check-mobile.png and boels-check-mobile.png under Vlaams-Brabant are actually **1200×829 desktop** captures. The coverage note already discloses this. Genuine original/detail/final mobile captures exist, so review coverage still passes. Rename misleading filenames or include an explicit image manifest; do not use these three files as mobile proof.

## Visual spot checks

### Megamax Limburg — 2/5, mobile 1/5: supported

Opened desktop-clear and mobile-top images. Desktop shows a branded crane site; the 390-pixel mobile image shows severe horizontal clipping and a horizontal scrollbar, with much of the menu/content offscreen. megamax-limburg.json records viewport 390/document 980. The saved check JSON supports tonnage-organized crane catalogue, Hasselt address, +32 (0)11 18 77 08 and contact form. No unsupported low-rating premise found.

### Jo Verhuurcenter — 3/5, mobile 1/5: supported

Opened desktop/mobile homepage images. The mobile page clearly clips logo, navigation, headline and body. observations.json records scroll width 980 versus viewport 390 and preserves product/contact content: specification PDF links, excavator prices on request, accessory daily prices, phone, Lede/Zele addresses and appointment caveat. No unsupported low-rating premise found. Navigation also advertises “KNIKLADERS - VERREIKERS”; the current types omit verreikers, but this is an unverified completeness lead, not enough alone to change the classification.

### Walca-rent — 3/5, mobile 1/5: supported

Opened 1440/390 homepage images. Mobile retains a wide fixed layout with clipped menu and text. details.json preserves specific machine dimensions, daily/week pricing and a contact form. The claimed hours conflict is real: homepage says closing **17:30 instead of 18:30**, whereas saved contact content still says weekdays to **18:30**; Saturday periods differ too. Review correctly flags the conflict rather than silently choosing hours.

### NML Verhuur — 5/5: plausible and supported within stated scope

Opened desktop homepage, mobile product and mobile enquiry images. Clear responsive layout, prominent call/WhatsApp/quote controls, machine-specific content and a machine/date quote form are visible. The screenshot’s own Google stars are distinct from this directory’s five-dimension assessment (4/5/4/5/5 averages 4.6, rounds to 5). No evidence the website score was simply copied from customer reviews. Actual submission performance remains untested, as disclosed.

### Schops Machines — 5/5: plausible and supported within stated scope

Opened desktop-clear/mobile-top images: responsive layout, search, categories and contact controls are visible. detail-2.json preserves a machine-specific reservation form with dates, pickup/delivery, customer fields and summary, explicitly saying reservations are personally confirmed. Five dimensions 4/4/5/5/5 average 4.6. No unsupported high-rating premise found. Screenshot shows a “Liften” category that is absent from current machine types; coverage notes explicitly say types were not revised during visual review, so this remains a completeness follow-up, not a rating defect.

## Limits and publication recommendation

This was a bounded evidence audit, not a new full directory search, independent registry/address verification, availability test, full accessibility audit or live retest. Screenshots can support visual usability judgments but cannot prove successful transactions. Ratings are subjective moment-in-time assessments; existing public methodology appropriately discloses this and the incomplete national-chain coverage. Keep those disclaimers.

Publish after correcting/qualifying branch phone mappings and registered-office presentation. Preserve missing primary-source contact snapshots when available. No blanket rerating or complete research redo is indicated by this audit.

## Implementation follow-up

Contact labels now explicitly say published company contact for a province, not a direct branch number. LVC and Jo locations retain registered-office/appointment roles in data and expanded UI. Historic null-score coverage statements carry a prominent superseded-status note. Missing cited chain pages were re-fetched successfully (HTTP 200) into evidence/chain-contact-0..3.json; extraction may still omit dynamically rendered sections.
