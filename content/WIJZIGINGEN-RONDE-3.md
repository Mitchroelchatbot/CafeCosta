# WIJZIGINGEN RONDE 3 — de échte huisstijl erin

*Voor Claude Code. De eigenaar heeft de bestaande huisstijl van Costa aangeleverd: kant-en-klare paginabanners, een kaal woordmerk en professionele sfeerfoto's. Deze ronde vervangt de generieke aankleding door dat materiaal. Content/teksten wijzigen alleen waar hieronder benoemd.*

---

## 1. DE STIJL — herbouw de banner-stijl in code, verzin geen eigen stijl

De bijgeleverde banners (`Agenda-banner.jpg`, `Homepage-banner.jpg`, `Contact-banner.jpg`, `Impressie-banner.jpg`) definiëren de huisstijl. Ze mogen worden aangepast en verknipt; wat heilig is, is de STIJL, niet de bestanden. Werkwijze:
- **Herbouw de stijl als CSS/HTML-compositie** (voorkeur boven het plaatsen van de banner-JPG's als geheel): de gradiënt als CSS-achtergrond, de bladeren als losse uitgeknipte beeldelementen uit de banners (croppen mag), en de koppen als échte HTML-tekst — ingebakken tekst in afbeeldingen is onzichtbaar voor Google en schaalt niet op mobiel.
- **Stijl-tokens, te samplen uit de banners:** diepdonkere paars-magenta gradiënt (hoeken vrijwel zwart, midden dieppaars/magenta); tropische papierknip-palmbladeren en monstera's in de hoeken in paars/roze/petrol, subtiel donkerder dan de content, nooit óver tekst; koppen in wit blocky display-lettertype met roze neongloed (dichtstbijzijnde vrije webfont + text-shadow); foto's met gescheurde/organische randen in collagestijl waar passend.
- Wat NIET mag veranderen bij het aanpassen van banners: het kleurenpalet, de bladeren-stijl en het logo — niet hertekenen of vervangen door iets soortgelijks.
- De eerder gemaakte SVG-decoraties vervangen door dit; de regel "max 2 decoratie-elementen per sectie, contrast AA" blijft gelden.

## 2. PAGINAHEADERS IN BANNER-STIJL

- Bouw de paginaheaders van /agenda, /over (contact-sectie) en de impressie-sectie als CSS/HTML-composities in de banner-stijl uit §1, met échte tekst-koppen (H1 zichtbaar én indexeerbaar). De banner-JPG's dienen als visuele referentie en als bron om bladeren/elementen uit te croppen.
- De banner-JPG's mogen daarnaast als geheel worden ingezet waar ingebakken tekst geen kwaad kan: `Homepage-banner.jpg` als OG-image en als fallback-posterframe voor de hero-video.
- Alle gebruikte beeldelementen comprimeren naar WebP.

## 3. LOGO'S OMWISSELEN

- **Header:** het kale woordmerk. Gebruik `costa-woordmerk-wit.png` (witte variant, transparant — bijgeleverd) op de donkere basis. Max ±48–56px hoog op mobiel. Het zwarte origineel (`costa-woordmerk-zwart.png`) alleen gebruiken op lichte vlakken, als die er komen.
- **De ronde sticker groot terug:** op twee plekken — (a) prominent in de footer, gecentreerd of links, ±140–180px, en (b) op /over bij het verhaal, groot (±280px) naast of boven "Sinds 2002". NIET groot op de homepage-hero; daar wint de video.
- Let op: het woordmerk is 595px breed — nooit groter weergeven dan ±300px CSS-breedte, anders wordt het wazig. Favicon blijft uit de ronde sticker.

## 4. NIEUWE SFEERFOTO'S (bijgeleverd, geoptimaliseerd)

- `sfeer-handen-omhoog.jpg` → homepage sectie 4 ("Waarom Costa") — dé energiefoto
- `sfeer-volle-zaak.jpg` → /agenda bij het vaste weekprogramma (vrijdag of zaterdag)
- `sfeer-vlaggetjes.jpg` → reserve/OG-image voor /agenda
- `sfeer-terras.jpg` → /over of bij de PSV-zondag (er is een terras — dat wisten we nog niet eens)
- Alt-teksten beschrijvend in het Nederlands. Deze foto's tonen de VOLLE zaak — gebruik ze niet op /groepen bij de besloten ruimte (andere ruimte, andere belofte).

## 5. NIEUWE COMPACTE SECTIE: IMPRESSIE (op /over, onder het team)

Fotogrid van maximaal 6 beelden: 3 sfeerfoto's hierboven + 3 ruimte-foto's uit ronde 2. Met `Impressie-banner.jpg` als sectiekop. Lazy-loaded, geen lightbox-library nodig — simpel grid.

## 6. PSV-ZONDAG KRIJGT ZIJN POSTER

`WhatsApp-Image-2025-10-02...jpeg` (de "MATCHDAY"-poster) → bij het zondagblok op /agenda. Staand formaat: toon hem als kaart naast de tekst, niet als brede banner. De tekst van het zondagblok mag één zin rijker: het terras. Voeg toe aan het bestaande blok: "Binnen op groot scherm én buiten op ons terras."

## 7. JAARTALLEN DYNAMISCH — overal

Elk genoemd aantal jaren wordt in de code berekend: `huidigJaar - 2002`. Nergens meer een vast getal ("21 jaar", "24 jaar") in tekst of alt-teksten. "Sinds 2002" mag wél altijd, dat veroudert nooit. Doorzoek alle pagina's op oude vaste jaartallen en vervang ze.

## 8. NIET DOEN

- De banners niet als homepage-hero (video wint)
- De ronde sticker niet in de header (woordmerk wint daar)
- `lowres.mp4` NIET gebruiken: 640×360 is te lage resolutie voor elk denkbaar doel op de site
- Geen extra bladeren/decoratie bovenop de banners stapelen — die zijn al af

## NOG VAN DE EIGENAAR (niet blokkerend)

1. Hi-res moederbestand van `lowres.mp4` (indien beschikbaar) → wordt dan de nieuwe hero-loop
2. Losse bladeren/toekan-assets van de ontwerper die de banners maakte (PNG/SVG met transparantie) — tot die tijd mag Claude Code hoekdecoraties uit de banners croppen
3. De vol-bedrijf-foto's van de besloten ruimte (blijft openstaan uit ronde 2)
