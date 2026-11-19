> **Actuele status:** alle opgenomen websites zijn nadien visueel op desktop en mobiel beoordeeld. Historische verwijzingen naar ontbrekende scores in de eerste onderzoeksfase zijn achterhaald; de latere visuele review en JSON zijn leidend.

# Vlaams-Brabant — onderzoeksdekking

Datum: 2026-11-19. Resultaat: 12 unieke bedrijven/groepen, 15 locatievermeldingen. Zeven lokale zelfstandige verhuurmerken plus vijf grotere/meervestigingsgroepen. Alle zes gevraagde machinecategorieën zijn vertegenwoordigd. Geen volledigheidsclaim.

## Werkwijze en beperkingen
- Systematische zoekopdrachten per machinetype en subregio via Bing in eigen browsertab `research-vlaams-brabant`; Google gaf CAPTCHA, DuckDuckGo eveneens. Directe Bing-fetch gaf vaak ongerelateerde/lege resultaten; de gewone browser leverde bruikbare resultaten. Geen CAPTCHA omzeild.
- Officiële websites/contact- en productpagina’s werkelijk opgehaald. Waar leesbaarheidsfilters enkel cookies of voetteksten toonden: volledige HTML opgehaald en tekst geëxtraheerd met Python-standaardbibliotheek, zonder bestanden buiten de twee toegestane outputs te schrijven.
- Niet visueel beoordeeld: geen desktop/mobiele screenshots beoordeeld. Alle scores en vijf dimensies zijn null; fetchproblemen leveren geen negatieve score op.
- Telefoons zijn letterlijke officiële publieke bedrijfsnummers, geen zoekresultaat-only nummers. Knikladers genormaliseerd naar Wielladers; minigravers naar Graafmachines; schaarliften naar Hoogwerkers. Geen live voorraadgarantie.
- Ketens één vermelding; alleen expliciet gecontroleerde lokale vestigingen opgenomen. Boels-categorieën zijn bewust beperkt tot de gecontroleerde hoogwerkercategorie.
- Huurland “Leuven” ligt in Lubbeek; “Mechelen” ligt in Boortmeerbeek. Werkelijke gemeenten gebruikt. LVC tweede locatie is maatschappelijke zetel, niet afhaalmagazijn.
- M&C heeft Franse inhoud op opgehaalde NL-routes. Sarens werkte via gewone Python HTTPS-fetch na certificaatfout in web_fetch.

## Waargenomen bewijs per opgenomen bedrijf
- **AL Verhuur**: Contact: Mechelsesteenweg 590, 1800 Vilvoorde; 02 253 30 30. Officiële verhuurnavigatie noemt graafmachines, knikladers, heftrucks, starre/roterende verreikers en hoogwerkers. Bronnen: https://alverhuur.be/ ; https://alverhuur.be/contact/
- **Rent-Assist**: Grijpenlaan 24b, 3300 Tienen; gsm 0467 33 90 81. Site noemt verhuur van graafmachines, hoogtewerkers en knikladers. Bronnen: https://rent-assist.be/ ; https://rent-assist.be/contact/
- **Maes Rental**: Maes-Laeremans bv; magazijn Langerode 17/B8, 3460 Bekkevoort; 0471 26 79 04. Homepage toont Minigraver 4T, Minigraver 1,9T en Kniklader 1,5T als verhuurproducten. Bronnen: https://maesrental.be/
- **M&C Service**: Contact vermeldt Gentsestraat 45, 1853 Grimbergen (Strombeek-Bever), 0475 23 84 84. Officiële pagina beschrijft location de nacelles / camions nacelle. NL-routes leveren momenteel Franse inhoud. Bronnen: https://mcservice.be/nl/contact ; https://mcservice.be/nl/verhuur-hoogtewerkers-vlaams-brabant
- **Verhuur Center**: Contact: 0470 12 32 68. Productpagina noemt Minigraver 1.1 Ton en Kniklader 1.7 Ton; levering vanuit Schaffen, afhaling in Diest. Bronnen: https://verhuur.center/contact/ ; https://verhuur.center/graaf-grondwerken/
- **Dima Verhuur**: Homepage vermeldt Keiberg 53, 3053 Haasrode en 0496 23 14 89; verhuur Leguan 190/225 spinhoogtewerkers en Magni ES1012 schaarlift. Bronnen: https://dimaverhuur.be/
- **LVC Verhuur**: Homepage bevestigt verhuur minigravers en knikladers. Contact: magazijn Horebeekstraat 4, 3220 Holsbeek; maatschappelijke zetel Tiensesteenweg 73, 3211 Binkom (Lubbeek); 0469 40 81 07. Bronnen: https://lvcverhuur.be/ ; https://lvcverhuur.be/contact/
- **TVH Equipment**: Vestiging Weversstraat 38, 1840 Londerzeel; vestigingstel +32 52 30 77 30 (pagina noemt apart verhuur +32 3 544 14 04). Verhuurgamma: hoogwerkers, minirupshijskranen, verreikers en heftrucks. Bronnen: https://www.tvhequipment.com/nl/meta/locaties/overzicht/londerzeel/
- **ROB Verhuur / ROB Rent**: ROB Rent Brussel-Antwerpen: Autostrade A12 17, Londerzeel; 02 223 43 07. Homepage: verhuur hoogwerkers, schaarliften, verreikers, heftrucks en categorie minikraan. Eén groepsvermelding. Bronnen: https://www.robverhuur.be/ ; https://www.robverhuur.be/nl/contact
- **Sarens**: Contact België: SARENS BRUSSELS, Autoweg 8, 1861 Wolvertem; +32 52 31 84 10. Homepage beschrijft kraanverhuur en mobiele telescoopkranen, mobiele torenkranen, autolaadkranen en rupskranen. Bronnen: https://www.sarens.com/ ; https://www.sarens.com/contact/belgium.htm
- **Huurland**: Filiaal Leuven feitelijk Ambachtenstraat 3, 3210 Lubbeek, 016 18 61 44; Mechelen feitelijk Leuvensesteenweg 224, 3190 Boortmeerbeek; Zellik Doornveld 80, 1731 Zellik. Catalogus: minigraafmachines, graafmachines, knikladers; verhuurnavigatie hoogwerkers, verreikers en heftrucks. Bronnen: https://www.huurland.be/nl/filialen/1229/leuven ; https://www.huurland.be/nl/filialen/1223/mechelen ; https://www.huurland.be/nl/filialen/1222/zellik ; https://www.huurland.be/nl/huren/grondverzet
- **Boels Rental**: Officiële filiaalpagina: Neringenweg 54, Leuven 3001; +32 (0)16-295085. Officiële categoriepagina bevestigt verhuur hoogwerkers. Andere categorieën/vestigingen niet in deze deelverificatie opgenomen. Bronnen: https://www.boels.com/nl-be/branches/vlaams-brabant/leuven-heverlee ; https://www.boels.com/nl-be/huren/hoogwerkers/c/ak94cgsr

## Zoekopdrachten
- machineverhuur Vlaams Brabant graafmachine verhuur — https://www.bing.com/search?q=machineverhuur%20Vlaams%20Brabant%20graafmachine%20verhuur&setlang=nl&cc=be
- machineverhuur Leuven — https://www.bing.com/search?q=machineverhuur%20Leuven&setlang=nl&cc=be
- machineverhuur Tienen Aarschot — https://www.bing.com/search?q=machineverhuur%20Tienen%20Aarschot&setlang=nl&cc=be
- machineverhuur Asse Halle Vlaams Brabant — https://www.bing.com/search?q=machineverhuur%20Asse%20Halle%20Vlaams%20Brabant&setlang=nl&cc=be
- hoogwerker verhuur Vlaams-Brabant — https://www.bing.com/search?q=hoogwerker%20verhuur%20Vlaams-Brabant&setlang=nl&cc=be
- kraanverhuur Vlaams-Brabant — https://www.bing.com/search?q=kraanverhuur%20Vlaams-Brabant&setlang=nl&cc=be
- graafmachine huren Vlaams-Brabant — https://www.bing.com/search?q=graafmachine%20huren%20Vlaams-Brabant&setlang=nl&cc=be
- verhuur machines Diest — https://www.bing.com/search?q=verhuur%20machines%20Diest&setlang=nl&cc=be
- machineverhuur Meise Londerzeel — https://www.bing.com/search?q=machineverhuur%20Meise%20Londerzeel&setlang=nl&cc=be
- graafmachine huren Halle Lennik — https://www.bing.com/search?q=graafmachine%20huren%20Halle%20Lennik&setlang=nl&cc=be
- heftrucks verhuur Vlaams-Brabant — https://www.bing.com/search?q=heftrucks%20verhuur%20Vlaams-Brabant&setlang=nl&cc=be
- machineverhuur Landen Zoutleeuw — https://www.bing.com/search?q=machineverhuur%20Landen%20Zoutleeuw&setlang=nl&cc=be
- machineverhuur Ternat Asse — https://www.bing.com/search?q=machineverhuur%20Ternat%20Asse&setlang=nl&cc=be
- graafmachine huren Aarschot Haacht — https://www.bing.com/search?q=graafmachine%20huren%20Aarschot%20Haacht&setlang=nl&cc=be
- minigraver huren Leuven — https://www.bing.com/search?q=minigraver%20huren%20Leuven&setlang=nl&cc=be
- verreiker huren Tienen Leuven — https://www.bing.com/search?q=verreiker%20huren%20Tienen%20Leuven&setlang=nl&cc=be
- kraanverhuur Vilvoorde Leuven bedrijf — https://www.bing.com/search?q=kraanverhuur%20Vilvoorde%20Leuven%20bedrijf&setlang=nl&cc=be
- hoogwerker verhuur Tienen Aarschot bedrijf — https://www.bing.com/search?q=hoogwerker%20verhuur%20Tienen%20Aarschot%20bedrijf&setlang=nl&cc=be
- graafmachine verhuur Merchtem Opwijk — https://www.bing.com/search?q=graafmachine%20verhuur%20Merchtem%20Opwijk&setlang=nl&cc=be
- VL Verhuur Opwijk — https://www.bing.com/search?q=VL%20Verhuur%20Opwijk&setlang=nl&cc=be
- machineverhuur Bertem Overijse Huldenberg — https://www.bing.com/search?q=machineverhuur%20Bertem%20Overijse%20Huldenberg&setlang=nl&cc=be
- machineverhuur Lubbeek Rotselaar — https://www.bing.com/search?q=machineverhuur%20Lubbeek%20Rotselaar&setlang=nl&cc=be

## Niet opgenomen / vervolgkandidaten
- Leuvenverhuur: telefoon 0492/22.14.22 op https://leuvenverhuur.com/1_5_contact.html en graafmachines/laders/hoogwerker op /1_3_producten.html gecontroleerd; geen expliciet vestigingsadres gevonden, dus niet opgenomen op basis van bedrijfsnaam alleen.
- Fuchs Meise: officiële HTTP-homepage vrijwel leeg, HTTPS timeout. Geen afdoende actuele verhuurverificatie.
- VL Verhuur Opwijk: zoekresultaten wijzen op officiële Facebook-pagina; niet afdoende rechtstreeks gecontroleerd.
- BestRent Aarschot-pagina is een servicegebied/transportpagina, geen bevestigde lokale vestiging.
- De Ryck (Heist-op-den-Berg), Gavarent (Herzele), 4Rent (Brugge), LVS Rent (Brecht), Heylen & Co (Nijlen), LTC (Heusden-Zolder): officiële sites gecontroleerd; buiten provincie. Geografische SEO-pagina’s niet als vestigingsbewijs gebruikt.
- Van De Velde Rotselaar: officiële verhuurpagina bekeken; tuinmachines en klein gereedschap, geen gevraagde zware categorie bevestigd.
- Keuleers, Collé, Luibl: zoekleads maar geen voldoende geverifieerde provinciale vestiging in deze ronde.


## Aanvulling: visuele websitebeoordeling 2026-11-19

De eerdere notitie “niet visueel beoordeeld” is voor alle 12 opgenomen websites vervangen door onderstaande inspectie. Eigen tab `review-Vlaams-Brabant`, Chromium/Playwright. Van ieder bedrijf zijn desktopbeelden (1440×1000) én mobiele beelden (390×844) daadwerkelijk geopend en visueel bekeken, naast navigatie, aanbod en aanvraag/contactinhoud. Geen formulieren verzonden, geen boekingen of contactacties uitgevoerd. Scores zijn subjectieve beoordelingen van de publieke website, niet van bedrijfs- of servicekwaliteit. Ankers: 1 grote gebruiksbarrières; 2 substantiële tekortkomingen; 3 functioneel/basis; 4 duidelijk, modern en nuttig; 5 uitstekend, gedetailleerd en bruikbaar. Totaal is het afgeronde gemiddelde van ontwerp/mobiel/navigatie/producten/aanvraag.

Bewijs: `evidence/Vlaams-Brabant/`, per bedrijfs-id `-desktop.png`, `-mobile.png`, aanvullende `-detail-*`, `-final-*` en JSON met waargenomen inhoud/links. De drie bestanden `huurland-check-mobile.png`, `lvc-verhuur-check-mobile.png` en `boels-check-mobile.png` zijn ondanks de naam extra desktopbeelden (standaardviewport na CDP-herverbinding), niet het mobiele hoofdbewijs; daarvoor gelden de oorspronkelijke mobiele beelden en aanvullende detail/final/clean-mobile-beelden.

- **AL Verhuur** — 4/3/4/4/4 → 4/5. Duidelijke categorieën, zoekfunctie en productfilters met prijzen en reserveerknoppen. Mobiele introductietekst is erg groot en duwt het aanbod naar beneden; uitgebreid contactformulier.
- **Rent-Assist** — 3/4/4/5/4 → 4/5. Overzichtelijke producttegels en goed leesbare mobiele stapeling. Avant-detail toont afmetingen, capaciteit, dag- tot maandprijzen en waarborg; aanvraag met huurdata. Enkele footerlinks bevatten onjuiste tel/mailto-opmaak.
- **Maes Rental** — 4/3/4/4/4 → 4/5. Verzorgde catalogus met huurperiode, dagprijs, accessoires en offerteknop. Productdetail past mobiel goed, maar op de homepage breekt “Machineverhuur” ongelukkig af. Transporttarieven zijn concreet vermeld.
- **M&C Service** — 3/3/3/4/4 → 3/5. Telefoon en verhuurknoppen vallen op; machineoverzicht vermeldt werkhoogten en dagprijzen en contact bevat machinekeuze. Taalkeuze en cookievenster nemen mobiel veel ruimte; Nederlandse homepage werkt via de taallink.
- **Verhuur Center** — 3/3/3/3/4 → 3/5. Categoriekaarten en bel-/WhatsApp-knoppen zijn duidelijk, met contactformulier en basisgegevens per machine. Desktopkop loopt rechts buiten beeld; productoverzicht bevat onafgewerkte tekst zoals “Lijstitem #3”.
- **Dima Verhuur** — 3/4/4/5/4 → 4/5. Directe machinekaarten, uitgebreide specificaties, meerdere huurprijzen en waarborg. Mobiele inhoud stapelt leesbaar; reservatiekalender en offertepad zichtbaar. Lichtgroene koppen hebben beperkt contrast op wit.
- **LVC Verhuur** — 4/4/3/3/3 → 3/5. Heldere oranje contactknoppen en leesbare mobiele opmaak. Verhuurpagina biedt categoriekeuze en huur-/leveringsuitleg; in de bekeken weergave bleven concrete machinekaarten en het aangekondigde contactformulier beperkt zichtbaar.
- **TVH Equipment** — 3/3/4/4/4 → 4/5. Uitgebreide categorienavigatie, technische vergelijkingstabel, PDF-links en aanvraag per machine. Mobiel vereist de brede specificatietabel horizontaal scrollen; vestigingscontact staat apart en duidelijk.
- **ROB Verhuur / ROB Rent** — 3/3/4/4/4 → 4/5. Veel machinecategorieën en gerichte filters voor bereik, capaciteit en ondergrond; offerte- en filiaalcontact duidelijk. Mobiele tekst is lang en uitgevuld met grote woordspaties; cookievenster vraagt eerst aandacht.
- **Sarens** — 4/4/4/3/4 → 4/5. Sterke kraanfotografie en verzorgde mobiele herindeling met broodkruimels. Kraanoverzicht geeft typen en toepassingen, maar geen directe huurprijzen; Belgische vestigingen en contactformulier zijn vindbaar.
- **Huurland** — 4/4/4/5/4 → 4/5. Duidelijke categoriebeelden en mobiele producttegels. Minigraver-detail bevat prijzen, waarborg, afmetingen, instructievideo’s, documenten en transportberekening; filiaalformulieren zijn zichtbaar.
- **Boels Rental** — 4/3/4/4/3 → 4/5. Moderne catalogus met zoeken, filters en vergelijken; productdetail bevat veel technische specificaties. Land-, cookie- en klantgroepkeuze voegen stappen toe, vooral mobiel; bekeken hoogwerker vermeldt prijs op aanvraag.

### Beperkingen en opgeloste hindernissen
- Alle 12 sites waren visueel toegankelijk; geen volledig geblokkeerde of ongefundeerd laag beoordeelde fetch.
- Cookievensters waar mogelijk via weigeren/essentiële cookies gesloten. Sarens: via Customize → Deny; M&C: werkende Nederlandse homepage via taallink, hoewel oudere NL-bronroutes naar Franse inhoud doorsturen. Boels: Belgische routes rechtstreeks geopend en klantgroep Particulier gekozen; daarna productpagina zonder overlay gezien.
- LVC: categorieën waren in eerste desktopweergave zichtbaar, maar latere selector bleek verborgen; geen volledige machine-detailinspectie mogelijk in deze weergave. Contacttekst verwijst naar formulier; het formulier was niet duidelijk zichtbaar. Telefoon, e-mail en adressen wel leesbaar. Dit is een begrensde waarneming, geen claim dat de site voor iedereen defect is.
- TVH: aanvraaglinks en contactgegevens bekeken; extern aanvraagtraject niet tot verzending getest. Overige zichtbare formulieren evenmin functioneel getest. Geen beschikbaarheids-, prijs- of volledigheidsgarantie.
