# Website Café Costa — cafecosta.nl

Statische site gebouwd met [Astro](https://astro.build) + Tailwind CSS, gehost op Netlify.
De bronteksten staan in `content/` (de vier contentdocumenten + BOUWPROMPT.md).

## Wekelijkse update (5 minuten)

Het "Deze week"-blok op `/agenda` leest uit **`src/data/deze-week.json`**:

1. Open het bestand, vul per dag één regel in (lege regel `""` = dag verbergen).
2. Commit en push — Netlify deployt automatisch.
3. Dán pas de Instagram-post maken. De site is de bron, Instagram is de megafoon.

Specials (artiesten, themafeesten, oud & nieuw) gaan in **`src/data/specials.json`** —
lege lijst = sectie onzichtbaar. Instructies staan bovenin beide bestanden.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # productie-build naar dist/
```

## Formulieren (Netlify Forms)

- `boekingsaanvraag` op `/groepen` → bevestigingspagina `/bedankt`
- `sollicitatie` op `/over` → bevestigingspagina `/gesolliciteerd`

**Na de eerste deploy instellen in de Netlify-UI** (Site → Forms → Notifications):
e-mailnotificatie voor beide formulieren naar het boekingsadres (mitch@…).
Het adres staat bewust nérgens in de code of HTML.

## Nog openstaand (content)

- [ ] Ronde kleurensticker als webbestand (`costa-logo-web.png`) → nu alleen de wordmark uit het .ai-bestand (TODO in `src/components/Logo.astro`)
- [ ] Foto's besloten ruimte in vol bedrijf → vervangen max. 2 van de huidige lege-ruimte-foto's (TODO in `src/pages/groepen.astro`)
- [ ] Foto van een volle VIP-tafel met flessen → VIP-sectie op `/groepen` heeft nog geen beeld
- [ ] Liggende (16:9) dagposters voor donderdag/vrijdag/zaterdag → nu tekstblokken zonder beeld
- [ ] Foto Gert-Jan & Mitch samen in de zaak → placeholder op `/over` (zoek op TODO)
- [ ] FAQ-antwoord "Kunnen we ook eten regelen?" → item staat klaar in `src/pages/groepen.astro` (TODO)
- [ ] Personeelsfeesten / flexibele roosters vermelden bij "Werken bij"? → TODO in `src/pages/over.astro`
- [ ] TikTok-URL checken in `src/data/site.ts` (Instagram/Facebook zijn geverifieerd)
- [ ] Exacte logokleuren samplen zodra `costa-logo-web.png` er is (TODO in `src/styles/global.css`)
- [ ] Drie Google-reviewquotes voor de homepage (optioneel)

## Lanceervolgorde (uit BOUWPROMPT.md §9)

1. Deploy naar Netlify preview-URL — bestaande site/DNS nog niet aanraken
2. Testronde op een echte telefoon: alle pagina's, beide formulieren met proefinzending, redirects
3. Pas na geslaagde proefboeking: domein cafecosta.nl omzetten naar Netlify
4. Na livegang: /tickets-redirect checken, mailadres nergens openbaar, Google Search Console aanmelden met `https://cafecosta.nl/sitemap-index.xml`

Analytics: privacyvriendelijk en cookieloos houden (Netlify Analytics aanzetten in de Netlify-UI, of Plausible) — dan is er geen cookiebanner nodig.
