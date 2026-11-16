/**
 * AGRITURISMO COLOMBAIOLO
 * =======================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Nerbona,
 * con i contenuti pubblici di colombaiolo.com: i quattro appartamenti, la
 * piscina fra gli olivi, l'oliveta di famiglia, come arrivare. Testi riscritti
 * e riorganizzati, nessun dato aggiunto: foto dal sito dell'azienda.
 *
 *   Appartamenti ▾  /marta  /simona  /italo  /mara
 *   Piscina e giardino /giardino · L'oliveta /oliveta · Dove siamo /dove-siamo
 *
 * PRENOTAZIONE. Il sito attuale non ha un motore di prenotazione: si scrive
 * (email o modulo) o si telefona a Simona. L'anteprima fa lo stesso, con
 * WhatsApp e email; `booking` è quindi assente.
 *
 * DA VERIFICARE CON IL CLIENTE
 *  - posti letto: il sito non li indica; qui sono ricavati dalla descrizione
 *    delle camere (Marta e Simona hanno lo stesso testo sul sito)
 *  - coordinate: via Strada del Colombaiolo da OpenStreetMap, da affinare
 *  - distanze del territorio: indicative (quelle di Siena, stazione e servizi
 *    sono dal sito)
 *  - prezzi: non pubblicati, non compaiono
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

/** Le foto di un appartamento: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const POOL: Localized = { it: "Piscina fra gli olivi", en: "Pool among the olive trees" };
const PARKING: Localized = { it: "Parcheggio privato con cancello", en: "Private gated parking" };
const KITCHEN: Localized = { it: "Cucina con stoviglie", en: "Kitchen with tableware" };
const WIFI: Localized = { it: "Wi-Fi", en: "Wi-Fi" };
const LINEN: Localized = { it: "Biancheria inclusa", en: "Linen provided" };
const HEATING: Localized = { it: "Riscaldamento autonomo (1 nov – 31 mar)", en: "Independent heating (1 Nov – 31 Mar)" };
const COURTYARD: Localized = { it: "Resede privata con tavolo e ombrellone", en: "Private courtyard with table and umbrella" };
const BBQ: Localized = { it: "Barbecue in comune", en: "Shared barbecue" };
const WASHER: Localized = { it: "Lavatrice", en: "Washing machine" };
const NOSMOKE: Localized = { it: "Per non fumatori", en: "Non-smoking" };

const site: SiteConfig = {
  brand: {
    id: "colombaiolo",
    prefix: "Agriturismo",
    name: "Colombaiolo",
    logo: "logo.svg",
    cin: "IT052032B5DE2M8ICQ",
  },

  contact: {
    /* Il cellulare è quello di Simona; il fisso è il secondo numero. */
    phone: "393394181026",
    phoneDisplay: "+39 339 418 1026",
    phoneAlt: { number: "390577332453", display: "+39 0577 332453" },
    email: "info@colombaiolo.com",
    address: ["Strada del Colombaiolo 3", "53100 Siena"],
    coordinates: { lat: 43.3558, lng: 11.331 },
    social: [],
  },

  seo: {
    domain: "https://www.colombaiolo.com",
    title: {
      it: "Agriturismo Colombaiolo | Appartamenti con piscina a Siena",
      en: "Agriturismo Colombaiolo | Apartments with pool in Siena",
    },
    description: {
      it: "Quattro appartamenti con piscina fra gli olivi, sulle colline del Chianti a 4 km dal centro di Siena.",
      en: "Four apartments with a pool among the olive trees, on the Chianti hills 4 km from the centre of Siena.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Appartamenti", en: "Apartments" },
      children: [
        { href: "/marta", label: { it: "Appartamento Marta", en: "Marta apartment" } },
        { href: "/simona", label: { it: "Appartamento Simona", en: "Simona apartment" } },
        { href: "/italo", label: { it: "Appartamento Italo", en: "Italo apartment" } },
        { href: "/mara", label: { it: "Appartamento Mara", en: "Mara apartment" } },
      ],
    },
    { page: "giardino", label: { it: "Piscina e giardino", en: "Pool and garden" } },
    { page: "oliveta", label: { it: "L'oliveta", en: "The olive grove" } },
    { page: "dove-siamo", label: { it: "Dove siamo", en: "Find us" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  /* ================================================================ */
  /* Homepage                                                          */
  /* ================================================================ */

  sections: [
    {
      type: "hero",
      id: "home",
      image: {
        src: "estate/hero.webp",
        alt: {
          it: "L'agriturismo visto dall'alto, con la piscina fra gli olivi e le colline del Chianti",
          en: "The farm seen from above, with the pool among the olive trees and the Chianti hills",
        },
      },
      labelParts: [
        { it: "Colline del Chianti", en: "Chianti hills" },
        { it: "Siena", en: "Siena" },
      ],
      titleLines: [
        { it: "Una piscina fra gli olivi,", en: "A pool among the olive trees," },
        { it: "Siena a quattro chilometri.", en: "Siena four kilometres away." },
      ],
      intro: {
        it: "Quattro appartamenti in un'azienda agricola di famiglia, sulle colline che guardano il Chianti. Si arriva in centro in pochi minuti, anche senza auto.",
        en: "Four apartments on a family-run farm, on the hills overlooking Chianti. The city centre is minutes away, even without a car.",
      },
      cta: {
        label: { it: "Scopri gli appartamenti", en: "See the apartments" },
        href: "#appartamenti",
      },
      pillars: [
        { it: "Quattro appartamenti", en: "Four apartments" },
        { it: "Piscina e oliveta", en: "Pool and olive grove" },
        { it: "Siena 4 km", en: "Siena 4 km" },
      ],
    },

    {
      type: "story",
      id: "azienda",
      number: "3",
      numberLabel: { it: "ETTARI DI OLIVETA", en: "HECTARES OF OLIVE GROVE" },
      ghost: "COLOMBAIOLO",
      titleLines: [
        { it: "Un'azienda agricola", en: "A family farm" },
        { it: "di famiglia, in mezzo a", en: "in the middle of" },
      ],
      titleEmphasis: { it: "un'oliveta.", en: "an olive grove." },
      mainImage: {
        src: "olio/oliveta.webp",
        alt: { it: "I filari dell'oliveta durante la raccolta", en: "The olive rows during the harvest" },
        caption: {
          it: "Tre ettari di olivi, da cui viene l'olio extravergine",
          en: "Three hectares of olive trees, source of our extra virgin oil",
        },
      },
      aerialImage: {
        src: "estate/giardino.webp",
        alt: { it: "Il giardino con il tavolo all'ombra degli olivi", en: "The garden with a table in the olive shade" },
        badge: "43°21′ N · 11°19′ E",
      },
      manifesto: {
        label: { it: "CONDUZIONE FAMILIARE", en: "FAMILY-RUN" },
        text: {
          it: "L'Azienda Agricola Colombaiolo ha una conduzione familiare e si trova sulle colline che guardano il Chianti. Intorno ci sono circa tre ettari di oliveta, da cui si ricava olio extravergine di oliva. Fra gli olivi stanno i quattro appartamenti, la piscina e un grande giardino con le piante aromatiche. Simona vi accoglie di persona.",
          en: "Azienda Agricola Colombaiolo is run by the family and sits on the hills overlooking Chianti. Around it are about three hectares of olive grove, which give us extra virgin olive oil. Among the trees you will find the four apartments, the pool and a large garden of aromatic plants. Simona welcomes you in person.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "appartamenti",
      kicker: { it: "Dormire al Colombaiolo", en: "Stay at Colombaiolo" },
      title: {
        it: "Quattro appartamenti, ognuno con il suo giardino.",
        en: "Four apartments, each with its own garden.",
      },
      text: {
        it: "Tutti hanno Wi-Fi, cucina con stoviglie, biancheria e una resede privata con tavolo e ombrellone. Piscina e barbecue sono per tutti gli ospiti.",
        en: "All have Wi-Fi, a kitchen with tableware, linen and a private courtyard with table and umbrella. Pool and barbecue are for all guests.",
      },
      tabs: [
        {
          label: { it: "Gli appartamenti", en: "The apartments" },
          stays: ["marta", "simona", "italo", "mara"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/oliveta-piscina.webp",
        alt: { it: "La piscina circondata dagli olivi", en: "The pool surrounded by olive trees" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Si fa il bagno in mezzo agli olivi.",
        en: "You swim among the olive trees.",
      },
      text: {
        it: "La piscina è aperta dal 20 maggio al 6 ottobre. Intorno ci sono lettini, ombrelloni e un prato dove stendersi all'ombra.",
        en: "The pool is open from 20 May to 6 October. Around it you will find loungers, parasols and a lawn to stretch out in the shade.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "IN AZIENDA", en: "ON THE FARM" },
      title: {
        it: "Poche cose, fatte con calma.",
        en: "A few things, done slowly.",
      },
      intro: {
        it: "Acqua, olio e un giardino che profuma di erbe: il resto è Siena.",
        en: "Water, olive oil and a garden that smells of herbs: the rest is Siena.",
      },
      marquee: {
        it: "OLIVI · PISCINA · GIARDINO · BARBECUE · OLIO · COLLINE · ",
        en: "OLIVES · POOL · GARDEN · BARBECUE · OLIVE OIL · HILLS · ",
      },
      itemLabel: { it: "IN AZIENDA", en: "ON THE FARM" },
      ctaLabel: { it: "Piscina e giardino", en: "Pool and garden" },
      ctaHref: "/giardino",
      items: [
        {
          title: "La piscina",
          word: { it: "PISCINA", en: "POOL" },
          meta: { it: "Dal 20 maggio al 6 ottobre", en: "20 May to 6 October" },
          text: {
            it: "Circondata dall'oliveta, a disposizione di tutti gli ospiti degli appartamenti.",
            en: "Surrounded by the olive grove, open to all guests of the apartments.",
          },
          image: "estate/piscina.webp",
        },
        {
          title: "L'olio della casa",
          word: { it: "OLIO", en: "OLIVE OIL" },
          meta: { it: "Dalla nostra oliveta", en: "From our own grove" },
          text: {
            it: "Tre ettari di olivi e un olio extravergine che si assaggia meglio su una fetta di pane.",
            en: "Three hectares of olive trees and an extra virgin oil best tasted on a slice of bread.",
          },
          image: "olio/olio.webp",
        },
        {
          title: "Giardino e barbecue",
          word: { it: "GIARDINO", en: "GARDEN" },
          meta: { it: "Per tutti gli ospiti", en: "For all guests" },
          text: {
            it: "Un ampio giardino con piante aromatiche e il barbecue in comune, per le cene all'aperto.",
            en: "A large garden of aromatic plants and a shared barbecue for dinners outdoors.",
          },
          image: "estate/terrazza.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Prima di partire", en: "Before you come" },
      title: {
        it: "Il giardino, l'oliveta e la strada per arrivare.",
        en: "The garden, the olive grove and how to get here.",
      },
      items: [
        {
          meta: { it: "20 maggio – 6 ottobre", en: "20 May – 6 October" },
          title: { it: "Piscina e giardino", en: "Pool and garden" },
          text: {
            it: "La piscina fra gli olivi, il giardino con le erbe aromatiche, il barbecue e il deposito per le biciclette.",
            en: "The pool among the olives, the herb garden, the barbecue and the bike room.",
          },
          image: { src: "estate/fiori.webp", alt: { it: "Una resede fiorita con tavolo e ombrellone", en: "A flowering courtyard with table and umbrella" } },
          link: { label: DISCOVER, href: "/giardino" },
        },
        {
          meta: { it: "Conduzione familiare", en: "Family-run" },
          title: { it: "L'oliveta", en: "The olive grove" },
          text: {
            it: "Circa tre ettari di olivi sulle colline che guardano il Chianti, e l'olio extravergine che ne viene.",
            en: "About three hectares of olive trees on the hills overlooking Chianti, and the extra virgin oil they give.",
          },
          image: { src: "olio/raccolta.webp", alt: { it: "La raccolta delle olive sotto le reti", en: "Olive picking over the nets" } },
          link: { label: DISCOVER, href: "/oliveta" },
        },
        {
          meta: { it: "Siena 4,3 km", en: "Siena 4.3 km" },
          title: { it: "Dove siamo", en: "Find us" },
          text: {
            it: "In campagna ma vicino a tutto: negozi a 850 metri, l'autobus per il centro ogni mezz'ora.",
            en: "In the country but close to everything: shops 850 metres away, a bus to the centre every half hour.",
          },
          image: { src: "estate/panorama.webp", alt: { it: "Le colline senesi viste dal giardino", en: "The Sienese hills seen from the garden" } },
          link: { label: DISCOVER, href: "/dove-siamo" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Fra Siena e il Chianti", en: "Between Siena and Chianti" },
      title: {
        it: "Il centro di Siena è a quattro chilometri.",
        en: "Central Siena is four kilometres away.",
      },
      text: {
        it: "Il Palio e la piazza a pochi minuti, Monteriggioni e i borghi del Chianti in mezz'ora, Firenze entro l'ora e mezza.",
        en: "The Palio and its piazza minutes away, Monteriggioni and the Chianti villages within half an hour, Florence within an hour and a half.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Agriturismo Colombaiolo",
        en: "Stylised map of distances from Agriturismo Colombaiolo",
      },
      gridLabels: { x: "43°21′ N", y: "11°19′ E" },
      homeLabel: { lines: ["Agriturismo", "Colombaiolo"], sub: "Siena" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Colombaiolo",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "siena", name: { it: "Siena, centro", en: "Siena, centre" }, distance: "4 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "17 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "22 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "28 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "radda", name: { it: "Radda in Chianti", en: "Radda in Chianti" }, distance: "30 km", coordinates: { lat: 43.4862, lng: 11.3737 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "45 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "70 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/fiori.webp",
        alt: { it: "Una resede fiorita con tavolo e ombrellone arancione", en: "A flowering courtyard with table and orange umbrella" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo al Colombaiolo.", en: "We look forward to welcoming you." },
      text: {
        it: "Per disponibilità, prezzi o qualsiasi domanda scrivete o telefonate a Simona: vi risponde di persona.",
        en: "For availability, prices or any question write or call Simona: she replies in person.",
      },
      whatsappLabel: WHATSAPP_LABEL,
      emailLabel: EMAIL_LABEL,
    },
  ],

  /* ================================================================ */
  /* Pagine interne                                                    */
  /* ================================================================ */

  pages: [
    {
      slug: "giardino",
      title: { it: "Piscina e giardino", en: "Pool and garden" },
      description: {
        it: "La piscina fra gli olivi (20 maggio – 6 ottobre), il giardino con le aromatiche, il barbecue e il locale biciclette dell'Agriturismo Colombaiolo.",
        en: "The pool among the olive trees (20 May – 6 October), the herb garden, the barbecue and the bike room at Agriturismo Colombaiolo.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/piscina.webp",
            alt: { it: "La piscina con lettini e ombrelloni", en: "The pool with loungers and parasols" },
          },
          labelParts: [
            { it: "Piscina e giardino", en: "Pool and garden" },
            { it: "Per tutti gli ospiti", en: "For all guests" },
          ],
          titleLines: [
            { it: "Tutto lo spazio", en: "All the space" },
            { it: "che serve per stare fuori", en: "you need to stay outdoors" },
          ],
          intro: {
            it: "Ogni appartamento ha la sua resede privata. La piscina, il giardino e il barbecue sono in comune.",
            en: "Each apartment has its own private courtyard. The pool, garden and barbecue are shared.",
          },
          cta: { label: { it: "Gli spazi", en: "The spaces" }, href: "#spazi" },
          pillars: [
            { it: "Piscina 20 maggio – 6 ottobre", en: "Pool 20 May – 6 October" },
            { it: "Barbecue in comune", en: "Shared barbecue" },
          ],
        },
        {
          type: "chapters",
          id: "spazi",
          kicker: { it: "All'aperto", en: "Outdoors" },
          title: { it: "Gli spazi", en: "The spaces" },
          items: [
            {
              word: { it: "Piscina", en: "Pool" },
              kicker: { it: "Dal 20 maggio al 6 ottobre", en: "20 May to 6 October" },
              title: { it: "La piscina fra gli olivi", en: "The pool among the olive trees" },
              text: {
                it: "Circondata dall'oliveta, con lettini e ombrelloni. È a disposizione di tutti gli ospiti.",
                en: "Surrounded by the olive grove, with loungers and parasols. Open to all guests.",
              },
              image: { src: "estate/oliveta-piscina.webp", alt: { it: "La piscina vista dal prato", en: "The pool seen from the lawn" } },
            },
            {
              word: { it: "Giardino", en: "Garden" },
              kicker: { it: "Per tutti", en: "For everyone" },
              title: { it: "Piante aromatiche e barbecue", en: "Aromatic plants and a barbecue" },
              text: {
                it: "Un ampio giardino con le piante aromatiche e il barbecue in comune con gli altri appartamenti, per mangiare all'aperto.",
                en: "A large garden of aromatic plants and a barbecue shared with the other apartments, for eating outdoors.",
              },
              image: { src: "estate/giardino.webp", alt: { it: "Un tavolo all'ombra degli olivi", en: "A table in the shade of the olive trees" } },
            },
            {
              word: { it: "Resede", en: "Courtyard" },
              kicker: { it: "Una per appartamento", en: "One per apartment" },
              title: { it: "Il vostro angolo privato", en: "Your private corner" },
              text: {
                it: "Tavolo, sedie e ombrellone davanti alla porta, con vista sulle colline.",
                en: "A table, chairs and umbrella at your door, with a view of the hills.",
              },
              image: { src: "estate/terrazza.webp", alt: { it: "Tavolo e sedie sul terrazzo, con le colline dietro", en: "Table and chairs on the terrace, hills beyond" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/panorama.webp", alt: { it: "Il panorama sulle colline", en: "The view over the hills" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo al Colombaiolo.", en: "We look forward to welcoming you." },
          text: {
            it: "In azienda c'è anche un locale per le biciclette, dove si possono ricaricare le batterie. Per tutto il resto, chiedete a Simona.",
            en: "There is also a bike room on the farm, where you can recharge batteries. For anything else, ask Simona.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "oliveta",
      title: { it: "L'oliveta", en: "The olive grove" },
      description: {
        it: "Azienda agricola a conduzione familiare sulle colline che guardano il Chianti: circa tre ettari di oliveta e olio extravergine di oliva.",
        en: "A family-run farm on the hills overlooking Chianti: about three hectares of olive grove and extra virgin olive oil.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "olio/oliveta.webp", alt: { it: "I filari dell'oliveta", en: "The rows of the olive grove" } },
          labelParts: [
            { it: "L'oliveta", en: "The olive grove" },
            { it: "Azienda agricola", en: "Working farm" },
          ],
          titleLines: [
            { it: "Tre ettari di olivi", en: "Three hectares of olives" },
            { it: "intorno a casa", en: "around the house" },
          ],
          intro: {
            it: "L'azienda è a conduzione familiare. Dalle olive si ricava olio extravergine.",
            en: "The farm is family-run. The olives give extra virgin olive oil.",
          },
          cta: { label: { it: "L'azienda", en: "The farm" }, href: "#azienda" },
          pillars: [
            { it: "Conduzione familiare", en: "Family-run" },
            { it: "Olio extravergine", en: "Extra virgin olive oil" },
          ],
        },
        {
          type: "facts",
          id: "azienda",
          kicker: { it: "L'azienda", en: "The farm" },
          title: { it: "In breve", en: "At a glance" },
          image: { src: "olio/raccolta.webp", alt: { it: "Olive raccolte sulle reti", en: "Olives gathered on the nets" } },
          items: [
            { label: { it: "Oliveta", en: "Olive grove" }, value: { it: "3 ettari", en: "3 hectares" }, note: { it: "Circa", en: "About" } },
            { label: { it: "Prodotto", en: "Product" }, value: { it: "Olio EVO", en: "EVO oil" }, note: { it: "Extravergine di oliva", en: "Extra virgin olive oil" } },
            { label: { it: "Conduzione", en: "Management" }, value: { it: "Familiare", en: "Family" } },
            { label: { it: "Posizione", en: "Position" }, value: { it: "Colline", en: "Hills" }, note: { it: "Davanti al Chianti", en: "Facing Chianti" } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "olio/olio.webp", alt: { it: "Olio extravergine e pane", en: "Extra virgin oil and bread" } },
          kicker: { it: "Chiedete a Simona", en: "Ask Simona" },
          title: { it: "Venite a trovarci.", en: "Come and visit." },
          text: {
            it: "Se vi interessa l'olio della casa, scriveteci: vi diciamo come fare.",
            en: "If you'd like our olive oil, write to us and we'll tell you how.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "dove-siamo",
      title: { it: "Dove siamo", en: "Find us" },
      description: {
        it: "Strada del Colombaiolo 3, Siena: a 4,3 km dal centro, con supermercato e fermata dell'autobus a pochi passi. Come arrivare.",
        en: "Strada del Colombaiolo 3, Siena: 4.3 km from the centre, with a supermarket and bus stop close by. How to get here.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/panorama.webp", alt: { it: "Le colline senesi", en: "The Sienese hills" } },
          labelParts: [
            { it: "Dove siamo", en: "Find us" },
            { it: "Siena", en: "Siena" },
          ],
          titleLines: [
            { it: "In campagna,", en: "In the country," },
            { it: "ma vicino a tutto", en: "yet close to everything" },
          ],
          intro: {
            it: "Non serve l'auto: a 850 metri ci sono supermercato, panificio, bar, farmacia, posta e banca. Il centro storico è a 4,3 km.",
            en: "You don't need a car: 850 metres away there are a supermarket, bakery, café, pharmacy, post office and bank. The old town is 4.3 km away.",
          },
          cta: { label: { it: "Come arrivare", en: "Getting here" }, href: "#arrivare" },
          pillars: [
            { it: "Siena 4,3 km", en: "Siena 4.3 km" },
            { it: "Bus ogni 30 minuti", en: "Bus every 30 minutes" },
          ],
        },
        {
          type: "chapters",
          id: "arrivare",
          kicker: { it: "Come arrivare", en: "Getting here" },
          title: { it: "A piedi, in autobus, in auto", en: "On foot, by bus, by car" },
          items: [
            {
              word: { it: "A piedi", en: "On foot" },
              kicker: { it: "A 850 metri", en: "850 metres away" },
              title: { it: "I servizi a due passi", en: "Services close by" },
              text: {
                it: "Supermercato, panificio, bar, farmacia, posta e banca a 850 metri. L'ospedale è a 1,3 km e la Clinica Rugani a 1,8 km.",
                en: "Supermarket, bakery, café, pharmacy, post office and bank 850 metres away. The hospital is 1.3 km away and the Rugani Clinic 1.8 km.",
              },
              image: { src: "estate/giardino.webp", alt: { it: "Il giardino dell'agriturismo", en: "The farm garden" } },
            },
            {
              word: { it: "Autobus", en: "Bus" },
              kicker: { it: "Fermata a 600 metri", en: "Stop 600 metres away" },
              title: { it: "In centro e alla stazione", en: "To the centre and the station" },
              text: {
                it: "L'autobus parte ogni 30 minuti e porta in centro e alla stazione. La stazione ferroviaria di Siena dista 3 km.",
                en: "The bus runs every 30 minutes to the centre and the station. Siena railway station is 3 km away.",
              },
              image: { src: "estate/fiori.webp", alt: { it: "La resede fiorita", en: "The flowering courtyard" } },
            },
            {
              word: { it: "In auto", en: "By car" },
              kicker: { it: "Uscita Siena Nord", en: "Siena Nord exit" },
              title: { it: "Dalla tangenziale di Siena", en: "From the Siena ring road" },
              text: {
                it: "Uscita Siena Nord, poi in direzione ospedale. All'incrocio girate a sinistra verso Le Tolfe-Castagno e al primo incrocio proseguite dritto in Strada del Colombaiolo: dopo circa 200 metri, a sinistra, il cancello dell'Azienda Agricola Colombaiolo. Parcheggio privato dentro un piazzale chiuso da cancello automatico.",
                en: "Take the Siena Nord exit, then follow signs for the hospital. At the crossroads turn left towards Le Tolfe-Castagno and at the first crossing continue straight on Strada del Colombaiolo: after about 200 metres, on the left, is the gate of Azienda Agricola Colombaiolo. Private parking in a yard closed by an automatic gate.",
              },
              image: { src: "estate/hero.webp", alt: { it: "L'azienda vista dall'alto", en: "The farm from above" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/terrazza.webp", alt: { it: "Il terrazzo con vista sulle colline", en: "The terrace with a view of the hills" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo al Colombaiolo.", en: "We look forward to welcoming you." },
          text: {
            it: "Per indicazioni più precise telefonate o scrivete: vi veniamo incontro.",
            en: "For more precise directions call or write: we'll meet you halfway.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  /* ================================================================ */
  /* Appartamenti                                                      */
  /* ================================================================ */

  accommodations: [
    {
      slug: "marta",
      name: "Appartamento Marta",
      category: { it: "75 MQ SU DUE PIANI", en: "75 SQ M OVER TWO FLOORS" },
      size: "2",
      guests: "3",
      layout: { it: "2 camere · 2 bagni · 75 mq", en: "2 bedrooms · 2 bathrooms · 75 sq m" },
      blurb: {
        it: "Il più ampio: 75 mq su due piani, con soggiorno-cucina e terrazzino.",
        en: "The largest: 75 sq m over two floors, with living-kitchen and a small terrace.",
      },
      description: {
        it: "Un appartamento di 75 mq su due piani. Al piano terra, un ampio soggiorno con cucina e il bagno di servizio. Al primo piano, la camera matrimoniale, una camera singola con terrazzino e il bagno con doccia. Davanti alla porta, la resede privata con tavolo, sedie e ombrellone.",
        en: "A 75 sq m apartment over two floors. Downstairs, a large living room with kitchen and a guest bathroom. Upstairs, the double bedroom, a single bedroom with small terrace and the shower room. At the door, a private courtyard with table, chairs and umbrella.",
      },
      cover: "stays/marta-01.webp",
      detail: "stays/marta-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, WIFI, LINEN, HEATING, COURTYARD, BBQ, NOSMOKE],
      units: [
        {
          slug: "appartamento-marta",
          name: "Appartamento Marta",
          guests: "3",
          layout: { it: "2 camere · 2 bagni", en: "2 bedrooms · 2 bathrooms" },
          text: {
            it: "Soggiorno-cucina e bagno di servizio al piano terra; al primo piano matrimoniale, singola con terrazzino e bagno con doccia. Riscaldamento autonomo dal 1 novembre al 31 marzo.",
            en: "Living-kitchen and guest bathroom downstairs; upstairs a double, a single with small terrace and a shower room. Independent heating from 1 November to 31 March.",
          },
          images: photos("marta", 8),
        },
      ],
    },
    {
      slug: "simona",
      name: "Appartamento Simona",
      category: { it: "75 MQ SU DUE PIANI", en: "75 SQ M OVER TWO FLOORS" },
      size: "2",
      guests: "3",
      layout: { it: "2 camere · 2 bagni · 75 mq", en: "2 bedrooms · 2 bathrooms · 75 sq m" },
      blurb: {
        it: "75 mq su due piani, con la resede sul prato e la scala per le camere.",
        en: "75 sq m over two floors, with a courtyard on the lawn and stairs to the bedrooms.",
      },
      description: {
        it: "Un appartamento di 75 mq su due piani. Al piano terra, un ampio soggiorno con cucina e il bagno di servizio. Al primo piano, la camera matrimoniale, una camera singola con terrazzino e il bagno con doccia. All'esterno, una resede privata sul prato con tavolo, sedie e ombrellone.",
        en: "A 75 sq m apartment over two floors. Downstairs, a large living room with kitchen and a guest bathroom. Upstairs, the double bedroom, a single bedroom with small terrace and the shower room. Outside, a private courtyard on the lawn with table, chairs and umbrella.",
      },
      cover: "stays/simona-01.webp",
      detail: "stays/simona-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, WIFI, LINEN, HEATING, COURTYARD, BBQ, NOSMOKE],
      units: [
        {
          slug: "appartamento-simona",
          name: "Appartamento Simona",
          guests: "3",
          layout: { it: "2 camere · 2 bagni", en: "2 bedrooms · 2 bathrooms" },
          text: {
            it: "Soggiorno-cucina e bagno di servizio al piano terra; al primo piano matrimoniale, singola con terrazzino e bagno con doccia. Riscaldamento autonomo dal 1 novembre al 31 marzo.",
            en: "Living-kitchen and guest bathroom downstairs; upstairs a double, a single with small terrace and a shower room. Independent heating from 1 November to 31 March.",
          },
          images: photos("simona", 8),
        },
      ],
    },
    {
      slug: "italo",
      name: "Appartamento Italo",
      category: { it: "BILOCALE AL PIANO TERRA", en: "GROUND-FLOOR ONE-BEDROOM" },
      size: "1",
      guests: "2",
      layout: { it: "1 camera · 1 bagno · piano terra", en: "1 bedroom · 1 bathroom · ground floor" },
      blurb: {
        it: "Il bilocale al piano terra, con cucina-soggiorno e spazio esterno privato.",
        en: "The ground-floor one-bedroom, with kitchen-living room and private outdoor space.",
      },
      description: {
        it: "Un bilocale al piano terra: si entra nella cucina-soggiorno, poi ci sono il bagno con box doccia e la camera matrimoniale. Fuori, lo spazio privato con tavolo, sedie e ombrellone.",
        en: "A ground-floor one-bedroom: you enter the kitchen-living room, then the bathroom with shower and the double bedroom. Outside, a private space with table, chairs and umbrella.",
      },
      cover: "stays/italo-01.webp",
      detail: "stays/italo-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, WIFI, LINEN, HEATING, COURTYARD, BBQ, NOSMOKE],
      units: [
        {
          slug: "appartamento-italo",
          name: "Appartamento Italo",
          guests: "2",
          layout: { it: "1 camera · 1 bagno", en: "1 bedroom · 1 bathroom" },
          text: {
            it: "Ingresso in cucina-soggiorno, bagno con box doccia, camera matrimoniale. Riscaldamento autonomo dal 1 novembre al 31 marzo.",
            en: "Entrance into the kitchen-living room, shower room, double bedroom. Independent heating from 1 November to 31 March.",
          },
          images: photos("italo", 7),
        },
      ],
    },
    {
      slug: "mara",
      name: "Appartamento Mara",
      category: { it: "LA SUITE", en: "THE SUITE" },
      size: "1",
      guests: "2",
      layout: { it: "1 camera con soppalco · 1 bagno", en: "1 bedroom with loft · 1 bathroom" },
      blurb: {
        it: "La suite del Colombaiolo: soppalco con lucernario e due finestroni sulle colline.",
        en: "The Colombaiolo suite: a loft with skylight and two big windows on the hills.",
      },
      description: {
        it: "È la suite del Colombaiolo. La camera matrimoniale ha un soppalco con lucernario; poi un ampio bagno e un soggiorno con cucina, con due finestroni da cui si guardano le colline del Chianti. Fuori, lo spazio privato con tavolo, sedie e ombrellone.",
        en: "The suite of Colombaiolo. The double bedroom has a loft with skylight; there is also a large bathroom and a living room with kitchen, with two big windows looking onto the Chianti hills. Outside, a private space with table, chairs and umbrella.",
      },
      cover: "stays/mara-01.webp",
      detail: "stays/mara-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, WIFI, LINEN, HEATING, WASHER, COURTYARD, BBQ, NOSMOKE],
      units: [
        {
          slug: "appartamento-mara",
          name: "Appartamento Mara",
          guests: "2",
          layout: { it: "1 camera con soppalco · 1 bagno", en: "1 bedroom with loft · 1 bathroom" },
          text: {
            it: "Camera matrimoniale con soppalco e lucernario, ampio bagno, soggiorno con cucina. Lavatrice. Riscaldamento autonomo dal 1 novembre al 31 marzo.",
            en: "Double bedroom with loft and skylight, large bathroom, living room with kitchen. Washing machine. Independent heating from 1 November to 31 March.",
          },
          images: photos("mara", 9),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli appartamenti", en: "All apartments" },
    kicker: { it: "Il vostro appartamento al Colombaiolo", en: "Your apartment at Colombaiolo" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'appartamento", en: "Inside" },
    unitsLabel: { it: "L'appartamento", en: "The apartment" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} dell'Agriturismo Colombaiolo.",
      en: "Hello, I'd like some information about {name} at Agriturismo Colombaiolo.",
    },
    amenitiesLabel: { it: "Nell'appartamento", en: "In the apartment" },
    ctaTitle: { it: "Una pausa fra gli olivi.", en: "A pause among the olive trees." },
    ctaLabel: WHATSAPP_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECT" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Scrivendoci o telefonando, parlate direttamente con Simona, senza intermediari.",
      en: "By writing or calling, you deal directly with Simona, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Agriturismo Colombaiolo" },

  legalPages: defaultLegalPages({
    name: "Azienda Agricola Colombaiolo",
    address: "Strada del Colombaiolo 3, 53100 Siena",
    email: "info@colombaiolo.com",
  }),
};

export default site;
