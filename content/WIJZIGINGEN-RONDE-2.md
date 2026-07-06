# WIJZIGINGEN RONDE 2 — huisstijl & content

*Voor Claude Code. Vervang eerst de vier contentdocumenten in de repo door de nieuwe versies (bijgeleverd) en voer daarna onderstaande wijzigingen door. Werk op de bestaande preview; het domein blijft onaangeroerd.*

---

## 1. CONTENT BIJGEWERKT — nieuwe documentversies letterlijk overnemen

- **/groepen:** de volgorde is omgedraaid. De besloten ruimte is nu PRODUCT 1 en het hoofdproduct van de site; de VIP-tafel is PRODUCT 2. Hero-knoppen, formuliervolgorde en homepage-teaserblokken zijn in de documenten al meegewisseld.
- **/agenda:** openingstijden per dag toegevoegd (deuren open 19:00, zaterdag 17:00) en de vaste DJ-poule van acht in de intro.
- **/over:** werken-bij aangevuld met runners en shiftmanagers.
- **Homepage-footer:** openingstijden-regel toegevoegd.
- **schema.org openingstijden bijwerken:** wo/do/vr 19:00–, za 17:00–; sluiting vr/za 04:00, wo/do 02:00. Zondag niet als vaste openingsdag opnemen (alleen bij PSV-wedstrijden — dat staat in de content, niet in de structured data).

## 2. LOGO

- Gebruik de bijgeleverde webbestanden: `costa-logo-web.png` (1600px, transparant, sRGB) en `costa-logo-web-klein.png` (400px). Gebruik NOOIT het originele bestand `Costa-Logo.png` — dat is een CMYK-drukbestand.
- Plaatsing: klein in de header (linksboven, max ±56px hoog op mobiel) en in de footer. Nergens anders als los element herhalen.
- Favicon en app-icoon uit het logo genereren.
- [BESLISPUNT A — BESLOTEN] Er bestaat geen kale woordmerkversie. Gebruik de ronde sticker klein in de header (max ±56px hoog op mobiel; de tekstring is op dat formaat onleesbaar en dus acceptabel) en in de footer. Zet een TODO-comment in de header-component: vervangen door kaal woordmerk zodra de ontwerper dat levert.

## 3. ZOMERSE HUISSTIJL — accenten, geen behang

Het huidige ontwerp is te generiek. Breng de eigen identiteit erin met elementen van de oude site en de posterstijl:

- **Kleurgebruik aanscherpen naar het logopalet:** magenta/roze als primaire CTA-kleur, zonnig geel en fris groen als accentkleuren. Sample de exacte waarden uit `costa-logo-web.png`.
- **Tropische elementen als decoratie:** palmbladeren die vanuit de hoeken van secties het beeld in steken (zoals op de posters), een palmboom-silhouet, en de toekan (LET OP: het is een toekan, geen kaketoe/papegaai) als klein terugkerend detail — bijvoorbeeld bij de footer of de 404-pagina.
- **HARDE GRENS tegen kermis:** maximaal 2 decoratieve elementen per scherm/sectie, altijd achter of naast de content (nooit over tekst), en de leesbaarheid/contrast-eisen (AA) blijven onverkort gelden. De sfeer is "festival in de zomer", niet "sticker-explosie". Bij twijfel: minder.
- [BESLISPUNT B — BESLOTEN] Basiskleur: donker (bijna zwart) met de zomerse logokleuren als accenten. De bestaande donkere opzet blijft dus staan; alleen het accentpalet en de decoratie-elementen komen erbij.

## 4. BEELDMATERIAAL VAN DE OUDE SITE HALEN

- [BESLISPUNT C — GELEVERD, MET VOORBEHOUD] Zes geoptimaliseerde foto's van de besloten ruimte zijn bijgeleverd (map: `ruimte-*.jpg`, 1920px, web-klaar). Toewijzing:
  - `ruimte-hero-overzicht.jpg` → pagina-hero van /groepen (breed panorama)
  - `ruimte-overzicht-lichtshow.jpg` en `ruimte-tafels-en-bar.jpg` → PRODUCT 1-sectie
  - `ruimte-eigen-bar.jpg` en `ruimte-bar-detail.jpg` → bij de bullets "eigen bar met eigen barman/vrouw"
  - `ruimte-dj-booth.jpg` → bij de bullet "DJ-booth, lichtshow en beamer"
  - Alt-teksten in het Nederlands, beschrijvend ("De besloten ruimte van Café Costa met eigen bar en DJ-booth").
  - Dit zijn sfeerfoto's van de lége, aangeklede ruimte. Foto's in vol bedrijf volgen later en vervangen dan maximaal twee van deze — zet een TODO-comment. De livegang is hiermee NIET meer geblokkeerd op beeldmateriaal.
- De tropische graphics (bladeren/palmen/toekan) mogen wél van https://www.cafecosta.nl gehaald worden als ze daar als losse afbeeldingen staan; anders zelf strakke SVG's maken in de logokleuren — géén AI-gegenereerde fotorealistische beelden.

## 5. HERO /groepen

De pagina-hero van /groepen krijgt (zodra beschikbaar) een foto van de besloten ruimte in vol bedrijf in plaats van een generieke sfeerfoto — het hoofdproduct verdient de openingsfoto.

## 6. NA AFLOOP

Deploy naar de preview-URL en lever een korte lijst op van: welke assets van de oude site zijn overgenomen, welke beslispunten (A/B/C) nog openstaan, en een screenshot-instructie voor de mobiele check.
