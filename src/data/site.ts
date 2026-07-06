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
  // Openingstijden voor schema.org. Sluitingstijden staan vast (vr/za 04:00, overig 02:00).
  // TODO: openingstijd van vrijdag en zaterdag checken bij de eigenaar (nu 22:00 aangehouden, zoals donderdag).
  openingHours: [
    { days: ['Wednesday'], opens: '19:00', closes: '02:00' },
    { days: ['Thursday'], opens: '22:00', closes: '02:00' },
    { days: ['Friday', 'Saturday'], opens: '22:00', closes: '04:00' },
  ],
};
