import specialsData from './specials.json';
import { SITE } from './site';

export type Special = {
  titel: string;
  datum: string;
  tijd?: string;
  tekst: string;
  lineup?: string[];
  details?: string[];
  poster?: string | null;
  posterAlt?: string;
  ticketUrl?: string | null;
  ticketPrijs?: number;
  popup?: boolean;
};

// Bepaald op buildtijd in Nederlandse tijd; de site wordt minimaal wekelijks
// gedeployd, dus een voorbij event verdwijnt uiterlijk een week later. De popup
// controleert de datum daarnaast nog in de browser.
const vandaag = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Amsterdam' }).format(new Date());

export const aankomendeSpecials: Special[] = ((specialsData.specials as Special[]) ?? [])
  .filter((s) => s.datum >= vandaag)
  .sort((a, b) => a.datum.localeCompare(b.datum));

export const datumFormat = new Intl.DateTimeFormat('nl-NL', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Amsterdam',
});

export const isExtern = (url: string) => /^https?:\/\//.test(url);

export function eventSchema(specials: Special[]) {
  if (specials.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@graph': specials.map((s) => ({
      '@type': 'Event',
      name: s.titel,
      startDate: s.tijd ? `${s.datum}T${s.tijd}:00+01:00` : s.datum,
      description: s.tekst,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      ...(s.poster ? { image: new URL(s.poster, SITE.url).href } : {}),
      ...(s.lineup?.length ? { performer: s.lineup.map((naam) => ({ '@type': 'Person', name: naam })) } : {}),
      ...(s.ticketUrl
        ? {
            offers: {
              '@type': 'Offer',
              url: new URL(s.ticketUrl, SITE.url).href,
              ...(s.ticketPrijs ? { price: s.ticketPrijs, priceCurrency: 'EUR' } : {}),
              availability: 'https://schema.org/InStock',
            },
          }
        : {}),
      location: {
        '@type': 'BarOrPub',
        name: SITE.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.city,
          addressCountry: SITE.address.country,
        },
      },
    })),
  };
}
