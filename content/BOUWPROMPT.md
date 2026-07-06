# BOUWPROMPT VOOR CLAUDE CODE — nieuwe website Café Costa

*Gebruik: zet dit bestand samen met de vier contentdocumenten (costa-homepage.md, costa-groepen-verhuur-pagina.md, costa-agenda.md, costa-over.md) en de hero-video (costa_hero_loop.mp4) in een lege projectmap. Start Claude Code en geef de opdracht: "Lees BOUWPROMPT.md en voer hem uit." De contentdocumenten zijn de bron van alle teksten — schrijf ze niet zelf, neem ze letterlijk over.*

---

## 1. OPDRACHT

Bouw de complete nieuwe website voor Café Costa, een feestcafé op Stratumseind 31 in Eindhoven. Vier pagina's, één aanvraagformulier, video-hero. Doel van de site: groepsboekingen binnenhalen (VIP-tafels en verhuur van de besloten ruimte). De site vervangt een verouderde WordPress-site op cafecosta.nl.

## 2. TECH STACK

- **Framework:** Astro (statische output). Geen React/SPA nodig — dit is een contentsite die snel moet zijn op mobiel.
- **Styling:** Tailwind CSS.
- **Hosting & deploy:** Netlify. Gebruik Netlify Forms voor de formulieren (geen eigen backend bouwen).
- **Wekelijkse content:** het "Deze week"-blok op de agendapagina leest uit één bestand: `src/data/deze-week.json` met velden per dag (wo/do/vr/za/zo). De eigenaar werkt dit wekelijks bij (via Claude Code of direct in het bestand) en deployt. Maak dit bestand met duidelijke voorbeeldinhoud en een comment-instructie bovenin.

## 3. PAGINA'S & ROUTES

| Route | Bron | Doel |
|---|---|---|
| `/` | costa-homepage.md | Sfeer + doorsturen naar boeken |
| `/groepen` | costa-groepen-verhuur-pagina.md | Dé geldpagina: VIP-tafel, besloten ruimte, heel Costa |
| `/agenda` | costa-agenda.md | Deze week + vast weekprogramma + specials |
| `/over` | costa-over.md | Verhaal, team, werken bij |

Volg de sectiestructuur van elk document exact. Teksten letterlijk overnemen; regieaanwijzingen tussen haakjes en secties "bewust weggelaten" / "open punten" zijn instructies, geen content. Onderdelen gemarkeerd als [aanvullen] weglaten tot de eigenaar ze levert.

**Redirects (in `netlify.toml`), zodat oude Google-resultaten niet doodlopen:**
- `/tickets` en `/tickets/*` → `/agenda`
- `/verhuur`, `/groepsarrangementen` en varianten → `/groepen`
- `/contact` → `/over`
- overige oude paden → `/`

## 4. DESIGN

**Richting: festival-energie, video-first, donkere basis met zomerse neonaccenten.** Denk aan de huisstijl van het logo: magenta/roze, zonnig geel, teal — op een donkere ondergrond (bijna zwart, niet grijs). Groot, vet typografisch. De site moet voelen als een avond die op het punt staat te escaleren, niet als een brochure.

- **Hero homepage:** costa_hero_loop.mp4 fullscreen, autoplay, muted, loop, `playsinline`, met een stilstaand posterframe als fallback. Donkere overlay (±45%) zodat de witte kop leesbaar blijft.
- **Knoppen:** primaire CTA in magenta/roze, groot, ook op mobiel met duim bereikbaar. Secundaire CTA outline.
- **Koppen:** in kapitalen zoals in de contentdocumenten, extra bold. Lopende tekst normaal.
- **Mobiel eerst:** ontwerp op 380px breedte; het publiek is 18–30 en zit vrijwel altijd op een telefoon, vaak 's avonds.
- **Geen** carrousels, geen parallax, geen autoplay-audio, geen preloaders.

## 5. FORMULIEREN (Netlify Forms)

**Formulier 1 — Boekingsaanvraag** (op `/groepen`, bereikbaar via alle boek-knoppen):
velden exact zoals in costa-groepen-verhuur-pagina.md (wat wil je boeken / naam / e-mail / telefoon / datum + reservedatum / aantal personen / gelegenheid / opmerkingen). Honeypot-veld tegen spam. Notificatie naar mitch@cafecosta.nl. Bevestigingstekst uit het document.

**Formulier 2 — Sollicitatie** (op `/over`): naam, leeftijd, telefoonnummer, motivatie in één zin. Zelfde notificatie-adres.

Het e-mailadres mitch@cafecosta.nl mag NERGENS zichtbaar in de HTML of op de pagina staan — alleen in de Netlify-notificatie-instelling.

## 6. SEO & META

- Paginatitels en meta-omschrijvingen exact uit de contentdocumenten.
- Open Graph-tags per pagina met een sfeerfoto.
- `schema.org/BarOrPub` (LocalBusiness) op elke pagina: naam, adres Stratumseind 31 Eindhoven, openingstijden (wo–za; vr/za tot 04:00, overig tot 02:00).
- Specials op de agenda als `schema.org/Event` zodra ze bestaan.
- Nette sitemap.xml en robots.txt.

## 7. TOEGANKELIJKHEID & PERFORMANCE

- **Zoomen NOOIT blokkeren**: geen `user-scalable=no` of `maximum-scale=1` in de viewport-meta (fout van de oude site — niet herhalen).
- Alt-teksten op alle beelden; contrast minimaal AA op de donkere achtergrond.
- Hero-video max ±4 MB; alle overige beelden lazy-loaded en als WebP/AVIF.
- Lighthouse-doel mobiel: Performance ≥ 90, SEO ≥ 95.

## 8. NIET BOUWEN (bewuste keuzes — niet "verbeteren")

- Geen Instagram-feed of social-embeds, waar dan ook
- Geen aparte ticketpagina
- Geen nieuws-/blogsectie
- Geen "wij zijn nu open"-widget
- Geen chatbot
- Geen cookiebanner-circus: gebruik privacyvriendelijke analytics zonder cookies (bijv. Netlify Analytics of Plausible) zodat er geen banner nodig is
- Socials alleen als iconen in de footer

## 9. OPLEVERING & LANCEERVOLGORDE

1. Bouw alles en deploy naar een Netlify preview-URL. **Raak de bestaande site/DNS nog niet aan.**
2. Testronde op de preview: alle vier pagina's op een echte telefoon, beide formulieren met een echte proefinzending (check dat de mail bij mitch@ aankomt), alle knoppen, de redirects.
3. Pas na geslaagde proefboeking: domein cafecosta.nl omzetten naar Netlify.
4. Direct na livegang controleren: oude /tickets-URL redirect werkt, mitch@ staat nergens meer openbaar, Google Search Console aanmelden met de nieuwe sitemap.

## 10. OPEN CONTENT (niet blokkeren op de bouw)

- Liggende dagposters voor donderdag/vrijdag/zaterdag (nu alleen Game Nights beschikbaar) → gebruik tijdelijk sfeerfoto's
- Foto Gert-Jan & Mitch voor /over → tijdelijke placeholder met duidelijke TODO-comment
- Betaalproces VIP-tafel loopt vooralsnog per factuur na bevestiging — dit staat al correct in de content
