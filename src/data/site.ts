// Centrale sitegegevens — pas hier aan, werkt overal door.
export const SITE = {
  name: 'Café Costa',
  url: 'https://cafecosta.nl',
  address: {
    street: 'Stratumseind 31',
    postalCode: '5611 ET',
    city: 'Eindhoven',
    country: 'NL',
  },
  socials: {
    instagram: 'https://www.instagram.com/cafecostaeindhoven/',
    facebook: 'https://www.facebook.com/cafecostaeindhoven/',
    // TODO: TikTok-account niet gevonden bij oplevering — juiste URL invullen of dit veld op null zetten om het icoon te verbergen.
    tiktok: 'https://www.tiktok.com/@cafecostaeindhoven',
  },
  // Openingstijden voor schema.org: deuren open 19:00 (zaterdag 17:00),
  // sluiting vr/za 04:00, wo/do 02:00. Zondag bewust niet opgenomen —
  // dan alleen open bij PSV-wedstrijden (staat in de content).
  openingHours: [
    { days: ['Wednesday', 'Thursday'], opens: '19:00', closes: '02:00' },
    { days: ['Friday'], opens: '19:00', closes: '04:00' },
    { days: ['Saturday'], opens: '17:00', closes: '04:00' },
  ],
};
