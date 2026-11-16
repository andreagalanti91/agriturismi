/**
 * ANTICO BORGO POGGIARELLO
 * ========================
 *
 * Anteprima di redesign costruita con i contenuti pubblici di poggiarello.com:
 * borgo, appartamenti, ristorante, benessere, offerte, dintorni e fotografie
 * vengono da lì, riscritti e riorganizzati. Prezzi, orari e periodi di
 * apertura vanno fatti confermare al cliente.
 *
 *   Appartamenti ▾  /appartamento-2  /appartamento-2-4  /appartamento-4-6
 *                   /appartamento-6-8  /suite-2-4
 *   Il borgo /borgo · Ristorante /ristorante · Benessere /benessere
 *   Offerte /offerte · Territorio /territorio
 *
 * PRENOTAZIONE. Poggiarello usa il motore WuBook, con un solo collegamento
 * per tutta la struttura (non si può puntare a un singolo appartamento).
 *
 * DATI DA VERIFICARE. Le coordinate sono quelle del pin di Google Maps
 * indicato dal sito; le distanze del territorio sono stradali indicative
 * (stima, non dal sito). Il CIN non è pubblicato sul sito. Le recensioni non
 * sono riportate: il sito le cita solo in un'immagine ("eccellente", 5,0 su
 * Google), senza testo con autore.
 */

import type { Localized, SiteConfig } from "../../src/config/types";

const BOOKING = "https://wubook.net/neb/bk?ep=66b582f0&w_id=2252&lang=it";

/** Le foto di un alloggio: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const WIFI: Localized = { it: "Wi-Fi veloce gratuito", en: "Free high-speed Wi-Fi" };
const AC: Localized = { it: "Aria condizionata", en: "Air conditioning" };
const TV: Localized = { it: "Smart TV con i vostri account di streaming", en: "Smart TV with your own streaming accounts" };
const KITCHEN: Localized = { it: "Cucina o angolo cottura", en: "Kitchen or kitchenette" };
const POOL: Localized = { it: "Piscina 16 × 9 m (aprile–ottobre)", en: "16 × 9 m pool (April–October)" };
const COT: Localized = { it: "Culla gratuita fino a 4 anni", en: "Free cot up to age 4" };
const ROMAN: Localized = { it: "Bagno romano su prenotazione", en: "Roman bath by reservation" };
const PETS: Localized = { it: "Animali ammessi", en: "Pets welcome" };

const site: SiteConfig = {
  brand: {
    id: "poggiarello",
    prefix: "Antico Borgo",
    name: "Poggiarello",
    logo: "logo.svg",
  },

  contact: {
    /* Il cellulare è quello su cui funziona WhatsApp; il fisso compare come
       secondo numero. */
    phone: "393351281585",
    phoneDisplay: "+39 335 128 1585",
    phoneAlt: { number: "390577301003", display: "+39 0577 301003" },
    email: "info@poggiarello.com",
    address: ["Strada di San Monti 12", "Monteriggioni (SI)"],
    coordinates: { lat: 43.3640098, lng: 11.1706151 },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/anticoborgopoggiarello/" },
      { label: "Facebook", href: "http://www.facebook.com/pages/Antico-Borgo-Poggiarello/135286436576259" },
    ],
  },

  seo: {
    domain: "https://www.poggiarello.com",
    title: {
      it: "Antico Borgo Poggiarello | Agriturismo con piscina e ristorante a Monteriggioni",
      en: "Antico Borgo Poggiarello | Farmhouse with pool and restaurant near Monteriggioni",
    },
    description: {
      it: "Quattordici appartamenti e una suite in un borgo del Seicento nel Chianti Senese, con piscina, ristorante, bagno romano e Monteriggioni a pochi minuti.",
      en: "Fourteen apartments and a suite in a 17th-century hamlet in the Sienese Chianti, with pool, restaurant, Roman bath and Monteriggioni minutes away.",
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
        { href: "/appartamento-2", label: { it: "Per 2 persone", en: "For 2 guests" } },
        { href: "/appartamento-2-4", label: { it: "Per 2/4 persone", en: "For 2–4 guests" } },
        { href: "/suite-2-4", label: { it: "Suite 2/4", en: "Suites 2–4" } },
        { href: "/appartamento-4-6", label: { it: "Per 4/6 persone", en: "For 4–6 guests" } },
        { href: "/appartamento-6-8", label: { it: "Per 6/8 persone", en: "For 6–8 guests" } },
      ],
    },
    { page: "borgo", label: { it: "Il borgo", en: "The hamlet" } },
    { page: "ristorante", label: { it: "Ristorante", en: "Restaurant" } },
    { page: "benessere", label: { it: "Benessere", en: "Wellness" } },
    { page: "offerte", label: { it: "Offerte", en: "Offers" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: BOOKING,
    label: { it: "Prenota", en: "Book now" },
  },

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
          it: "Il borgo di Poggiarello al tramonto, con gli ospiti a tavola nella piazzetta",
          en: "The Poggiarello hamlet at dusk, with guests dining in the little square",
        },
      },
      labelParts: [
        { it: "Chianti Senese", en: "Sienese Chianti" },
        { it: "Monteriggioni · Siena", en: "Monteriggioni · Siena" },
      ],
      titleLines: [
        { it: "Un borgo del Seicento", en: "A 17th-century hamlet" },
        { it: "tutto per voi.", en: "all to yourselves." },
      ],
      intro: {
        it: "Quattordici appartamenti e una suite tra boschi, vigne e colline, con piscina, ristorante e Monteriggioni a pochi minuti.",
        en: "Fourteen apartments and a suite among woods, vineyards and hills, with a pool, a restaurant and Monteriggioni minutes away.",
      },
      cta: {
        label: { it: "Scopri gli appartamenti", en: "See the apartments" },
        href: "#appartamenti",
      },
      pillars: [
        { it: "14 appartamenti e una suite", en: "14 apartments and a suite" },
        { it: "Piscina e ristorante", en: "Pool and restaurant" },
        { it: "Animali ammessi", en: "Pets welcome" },
      ],
    },

    {
      type: "story",
      id: "borgo",
      number: "XVII",
      numberLabel: { it: "SECOLO · BORGO RURALE", en: "CENTURY · RURAL HAMLET" },
      ghost: "POGGIARELLO",
      titleLines: [
        { it: "Un piccolo villaggio", en: "A small village" },
        { it: "sopra il bosco", en: "above the woods" },
      ],
      titleEmphasis: { it: "di Montagnola.", en: "of the Montagnola." },
      mainImage: {
        src: "estate/borgo.webp",
        alt: { it: "Il borgo di pietra visto dall'alto", en: "The stone hamlet seen from above" },
        caption: {
          it: "Gli appartamenti sono ricavati da edifici rurali esistenti",
          en: "The apartments are made from existing farm buildings",
        },
      },
      aerialImage: {
        src: "estate/panorama.webp",
        alt: { it: "Il borgo sulla collina, con le colline senesi dietro", en: "The hamlet on its hill, with the Sienese hills beyond" },
        badge: "43°21′ N · 11°10′ E",
      },
      manifesto: {
        label: { it: "LA TORRE, GLI ULIVI, IL SILENZIO", en: "THE TOWER, THE OLIVES, THE QUIET" },
        text: {
          it: "Poggiarello è un borgo rurale del XVII secolo, con una torre che risale all'anno 1000. Intorno ci sono i boschi, le vigne e le colline del Parco Naturale della Montagnola Senese. Dopo il restauro è diventato un piccolo villaggio: quattordici appartamenti e una suite, ognuno con la sua privacy, e luoghi dove stare insieme, come la piscina, il ristorante e l'area giochi. Spazi comuni e interni sono senza barriere architettoniche, e due appartamenti sono attrezzati per chi ha difficoltà di movimento.",
          en: "Poggiarello is a 17th-century rural hamlet, with a tower dating back to the year 1000. All around are the woods, vineyards and hills of the Montagnola Senese Nature Park. After restoration it became a small village: fourteen apartments and a suite, each with its own privacy, and places to be together, such as the pool, the restaurant and the play area. Shared spaces and interiors are free of architectural barriers, and two apartments are fully equipped for guests with reduced mobility.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "appartamenti",
      kicker: { it: "Dormire a Poggiarello", en: "Stay at Poggiarello" },
      title: {
        it: "Cinque tipologie, per due o per otto.",
        en: "Five types, for two or for eight.",
      },
      text: {
        it: "Arredati in stile toscano, hanno tutti aria condizionata, Wi-Fi veloce gratuito e Smart TV. Scegliete in base a quante persone siete.",
        en: "Furnished in Tuscan style, all have air conditioning, free high-speed Wi-Fi and a Smart TV. Choose by how many of you are coming.",
      },
      tabs: [
        {
          label: { it: "Tutti", en: "All" },
          stays: ["appartamento-2", "appartamento-2-4", "suite-2-4", "appartamento-4-6", "appartamento-6-8"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina.webp",
        alt: { it: "La piscina tra gli ulivi, a ridosso del bosco", en: "The pool among the olive trees, beside the woods" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Un bagno tra gli ulivi.",
        en: "A swim among the olive trees.",
      },
      text: {
        it: "Sedici metri per nove, con i gradini che scendono piano nell'acqua. Si prende il sole all'ombra degli ulivi e si fa il bagno da metà aprile a metà ottobre circa, secondo la stagione.",
        en: "Sixteen metres by nine, with steps that slope gently into the water. You sunbathe in the shade of the olive trees and swim from mid-April to mid-October or so, depending on the season.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "AL BORGO", en: "AT THE HAMLET" },
      title: {
        it: "Mangiare bene, rallentare, camminare.",
        en: "Eat well, slow down, walk.",
      },
      intro: {
        it: "Tre cose da fare senza prendere l'auto.",
        en: "Three things to do without taking the car.",
      },
      marquee: {
        it: "RISTORANTE · BAGNO ROMANO · PIETRA · FRANCIGENA · ULIVI · ",
        en: "RESTAURANT · ROMAN BATH · STONE · FRANCIGENA · OLIVES · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Tutte le proposte", en: "All the options" },
      ctaHref: "/ristorante",
      items: [
        {
          title: "Ristorante",
          word: { it: "CUCINA", en: "KITCHEN" },
          meta: { it: "Nelle antiche stalle", en: "In the old stables" },
          text: {
            it: "Ribollita, panzanella, bistecca alla fiorentina: piatti di stagione con prodotti del territorio. Colazione compresa per molti ospiti.",
            en: "Ribollita, panzanella, Florentine steak: seasonal dishes made with local produce. Breakfast served here for many guests.",
          },
          image: "ristorante/pasta.webp",
        },
        {
          title: "Bagno romano",
          word: { it: "RELAX", en: "RELAX" },
          meta: { it: "Su prenotazione", en: "By reservation" },
          text: {
            it: "Una piccola vasca di acqua riscaldata a 37° ricavata in una grotta del borgo. Poi, se volete, un massaggio.",
            en: "A small pool of water heated to 37° carved into a cave of the hamlet. Then, if you like, a massage.",
          },
          image: "benessere/bagno-romano.webp",
        },
        {
          title: "Via Francigena",
          word: { it: "CAMMINO", en: "WALK" },
          meta: { it: "Monteriggioni · Colle", en: "Monteriggioni · Colle" },
          text: {
            it: "Il tratto fra Monteriggioni e Colle di Val d'Elsa passa poco lontano: circa 12 chilometri tra vigne, abbazie e torri.",
            en: "The stretch between Monteriggioni and Colle di Val d'Elsa passes close by: about 12 kilometres of vineyards, abbeys and towers.",
          },
          image: "territorio/monteriggioni.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "Il ristorante, il benessere e i dintorni.",
        en: "The restaurant, the wellness and the surroundings.",
      },
      items: [
        {
          meta: { it: "Cucina toscana", en: "Tuscan cooking" },
          title: { it: "Ristorante", en: "Restaurant" },
          text: {
            it: "Sala nelle antiche stalle con le mangiatoie originali, tavoli in piazzetta d'estate, menu anche per celiaci.",
            en: "A dining room in the old stables with the original mangers, tables in the square in summer, gluten-free menus too.",
          },
          image: { src: "ristorante/sala.webp", alt: { it: "La sala del ristorante con gli archi in mattoni", en: "The restaurant dining room with brick arches" } },
          link: { label: DISCOVER, href: "/ristorante" },
        },
        {
          meta: { it: "Bagno romano · massaggi", en: "Roman bath · massage" },
          title: { it: "Benessere", en: "Wellness" },
          text: {
            it: "La vasca nella grotta e i massaggi, da prenotare con calma. Poi si torna fra gli ulivi.",
            en: "The pool in the cave and massage treatments, to book at leisure. Then back among the olive trees.",
          },
          image: { src: "estate/fuoco.webp", alt: { it: "Un fuoco acceso davanti a una casa del borgo", en: "A fire lit in front of a house in the hamlet" } },
          link: { label: DISCOVER, href: "/benessere" },
        },
        {
          meta: { it: "Monteriggioni · Siena · San Gimignano", en: "Monteriggioni · Siena · San Gimignano" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Le mura di Monteriggioni, Siena, San Gimignano e la Via Francigena a pochi minuti.",
            en: "The walls of Monteriggioni, Siena, San Gimignano and the Via Francigena, a short drive away.",
          },
          image: { src: "territorio/san-gimignano.webp", alt: { it: "San Gimignano e le colline della Val d'Elsa", en: "San Gimignano and the Val d'Elsa hills" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "dintorni",
      kicker: { it: "Chianti Senese", en: "Sienese Chianti" },
      title: {
        it: "Siena, San Gimignano, Volterra.",
        en: "Siena, San Gimignano, Volterra.",
      },
      text: {
        it: "Monteriggioni a pochi minuti, le città d'arte della Toscana entro un'ora.",
        en: "Monteriggioni a few minutes away, Tuscany's art cities within the hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Antico Borgo Poggiarello",
        en: "Stylised map of distances from Antico Borgo Poggiarello",
      },
      gridLabels: { x: "43°21′ N", y: "11°10′ E" },
      homeLabel: { lines: ["Antico Borgo", "Poggiarello"], sub: "Monteriggioni" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Poggiarello",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "8 km", coordinates: { lat: 43.3903, lng: 11.2236 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "12 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "22 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "25 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "30 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "40 km", coordinates: { lat: 43.4007, lng: 10.8609 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "60 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/piazza.webp",
        alt: { it: "La piazzetta del borgo con il pergolato", en: "The hamlet's little square with its pergola" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Poggiarello.", en: "We look forward to welcoming you." },
      text: {
        it: "Disponibilità e prezzi si vedono online. Per tavoli al ristorante, massaggi o qualsiasi domanda scriveteci: rispondiamo di persona.",
        en: "Availability and prices are online. For restaurant tables, massages or any question, write to us: we reply in person.",
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
      slug: "borgo",
      title: { it: "Il borgo", en: "The hamlet" },
      description: {
        it: "Il borgo rurale del Seicento di Poggiarello: la torre dell'anno 1000, l'area giochi per i bambini, l'energia solare e la ricarica per auto elettriche.",
        en: "Poggiarello's 17th-century rural hamlet: the tower from the year 1000, the children's play area, solar power and EV charging.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/aerea.webp",
            alt: { it: "Il borgo visto dall'alto, tra i boschi", en: "The hamlet seen from above, among the woods" },
          },
          labelParts: [
            { it: "Il borgo", en: "The hamlet" },
            { it: "Montagnola Senese", en: "Montagnola Senese" },
          ],
          titleLines: [
            { it: "Pietra, bosco", en: "Stone, woods" },
            { it: "e aria buona", en: "and fresh air" },
          ],
          intro: {
            it: "Un borgo del Seicento sulla cima di una collina, circondato dal Parco Naturale della Montagnola Senese.",
            en: "A 17th-century hamlet on a hilltop, surrounded by the Montagnola Senese Nature Park.",
          },
          cta: { label: { it: "Scopri il borgo", en: "Discover the hamlet" }, href: "#vita" },
          pillars: [
            { it: "Torre dell'anno 1000", en: "Tower from the year 1000" },
            { it: "Senza barriere", en: "Barrier-free" },
          ],
        },
        {
          type: "chapters",
          id: "vita",
          kicker: { it: "Vivere il borgo", en: "Life at the hamlet" },
          title: { it: "Tre cose da sapere", en: "Three things to know" },
          items: [
            {
              word: { it: "Pietra", en: "Stone" },
              kicker: { it: "Dal Seicento", en: "Since the 1600s" },
              title: { it: "Case, torre e vicoli", en: "Houses, tower and lanes" },
              text: {
                it: "Tutti gli alloggi sono ricavati da edifici esistenti, compresa un'antica torre dell'anno 1000. Dall'alto si vedono tramonti e paesaggi tipici toscani.",
                en: "All the apartments are made from existing buildings, including an ancient tower from the year 1000. From the top you can watch sunsets and classic Tuscan landscapes.",
              },
              image: { src: "estate/torre.webp", alt: { it: "Una casa del borgo con il giardino", en: "A house of the hamlet with its garden" } },
            },
            {
              word: { it: "Famiglie", en: "Families" },
              kicker: { it: "Per i più piccoli", en: "For little ones" },
              title: { it: "Piscina, giochi e ristorante", en: "Pool, play area and restaurant" },
              text: {
                it: "Piscina con gradini a scendere, area giochi con scivoli e altalene in legno e acciaio, ristorante dove si fa colazione. La culla si aggiunge gratis fino a 4 anni.",
                en: "A pool with gently sloping steps, a play area with slides and swings in wood and steel, and a restaurant for breakfast. A cot can be added free up to age 4.",
              },
              details: [
                { it: "Spazi comuni senza barriere", en: "Barrier-free shared spaces" },
                { it: "Due appartamenti attrezzati per la mobilità ridotta", en: "Two apartments equipped for reduced mobility" },
              ],
              image: { src: "estate/giochi.webp", alt: { it: "L'area giochi tra gli ulivi", en: "The play area among the olive trees" } },
            },
            {
              word: { it: "Sole", en: "Sun" },
              kicker: { it: "Sostenibilità", en: "Sustainability" },
              title: { it: "Energia pulita e acqua riusata", en: "Clean energy and reused water" },
              text: {
                it: "Un impianto fotovoltaico alimenta il borgo e la colonnina per auto elettriche (Tipo 2, 7,3 kW). Le caldaie sono a condensazione e le acque reflue, depurate, irrigano i giardini.",
                en: "A solar plant powers the hamlet and the EV charger (Type 2, 7.3 kW). The boilers are condensing, and treated wastewater irrigates the gardens.",
              },
              details: [
                { it: "Ricarica auto elettriche", en: "EV charging" },
                { it: "Acque depurate per i giardini", en: "Treated water for the gardens" },
              ],
              image: { src: "estate/pannelli.webp", alt: { it: "L'impianto fotovoltaico visto dall'alto, con la piscina in fondo", en: "The solar plant seen from above, with the pool beyond" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/fuoco.webp", alt: { it: "Un fuoco nel borgo", en: "A fire in the hamlet" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Venite a trovarci.", en: "Come and visit." },
          text: {
            it: "Scriveteci con le date e il numero di persone: vi consigliamo l'appartamento giusto.",
            en: "Write to us with your dates and group size: we'll suggest the right apartment.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "ristorante",
      title: { it: "Il ristorante", en: "The restaurant" },
      description: {
        it: "Il ristorante di Antico Borgo Poggiarello: cucina toscana di stagione nelle antiche stalle, tavoli in piazzetta d'estate, menu per celiaci e vegetariani.",
        en: "The restaurant at Antico Borgo Poggiarello: seasonal Tuscan cooking in the old stables, tables in the square in summer, gluten-free and vegetarian options.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "ristorante/sala.webp",
            alt: { it: "La sala del ristorante con archi in mattoni", en: "The restaurant dining room with brick arches" },
          },
          labelParts: [
            { it: "Ristorante", en: "Restaurant" },
            { it: "Cucina toscana", en: "Tuscan cooking" },
          ],
          titleLines: [
            { it: "Una cena toscana,", en: "A Tuscan dinner," },
            { it: "a due passi dal letto", en: "steps from your bed" },
          ],
          intro: {
            it: "A metà strada fra il Chianti Senese e quello Fiorentino: ricette di tradizione con prodotti di stagione della zona.",
            en: "Halfway between the Sienese and Florentine Chianti: traditional recipes made with seasonal local produce.",
          },
          cta: { label: { it: "La cucina", en: "The cooking" }, href: "#cucina" },
          pillars: [
            { it: "Colazione per gli ospiti", en: "Breakfast for guests" },
            { it: "Anche per celiaci", en: "Gluten-free too" },
          ],
        },
        {
          type: "chapters",
          id: "cucina",
          kicker: { it: "A tavola", en: "At the table" },
          title: { it: "Dalla colazione alla fiorentina", en: "From breakfast to the Florentine steak" },
          items: [
            {
              word: { it: "Mattina", en: "Morning" },
              kicker: { it: "Per gli ospiti", en: "For guests" },
              title: { it: "La colazione a buffet", en: "The breakfast buffet" },
              text: {
                it: "Ogni appartamento ha la sua cucina, ma per molti ospiti la colazione si fa qui, al ristorante: dolce o salata, a scelta.",
                en: "Every apartment has its own kitchen, but for many guests breakfast is served here, in the restaurant: sweet or savoury, your choice.",
              },
              image: { src: "ristorante/colazione.webp", alt: { it: "Il buffet della colazione con yogurt, marmellate e salumi", en: "The breakfast buffet with yoghurt, jams and cured meats" } },
            },
            {
              word: { it: "Sera", en: "Evening" },
              kicker: { it: "Piatti di stagione", en: "Seasonal dishes" },
              title: { it: "Ribollita, panzanella, fiorentina", en: "Ribollita, panzanella, Florentine steak" },
              text: {
                it: "Bruschette, pappa al pomodoro, pasta fresca e la bistecca alla fiorentina. Se ci avvisate per tempo prepariamo versioni per celiaci, vegetariane o per chi ha allergie.",
                en: "Bruschetta, tomato and bread soup, fresh pasta and the Florentine steak. If you tell us in advance we prepare gluten-free, vegetarian or allergy-friendly versions.",
              },
              details: [{ it: "Prenotate al 0577 301003", en: "Book on +39 0577 301003" }],
              image: { src: "ristorante/tagliata.webp", alt: { it: "Una bistecca grigliata, appena tagliata", en: "A grilled steak, freshly cut" } },
            },
            {
              word: { it: "Stalle", en: "Stables" },
              kicker: { it: "La sala", en: "The room" },
              title: { it: "Le mangiatoie sono rimaste", en: "The mangers are still here" },
              text: {
                it: "Il ristorante è ricavato dalle antiche stalle: nel restauro abbiamo tenuto le mangiatoie originali. D'estate si mangia anche fuori, sotto le stelle.",
                en: "The restaurant is carved out of the old stables: in the restoration we kept the original mangers. In summer you can also eat outside, under the stars.",
              },
              image: { src: "ristorante/mangiatoia.webp", alt: { it: "Una mangiatoia originale in pietra e paglia", en: "An original manger with straw" } },
            },
            {
              word: { it: "Vino", en: "Wine" },
              kicker: { it: "In cantinetta", en: "In the wine room" },
              title: { it: "Chianti, Vernaccia, Brunello", en: "Chianti, Vernaccia, Brunello" },
              text: {
                it: "Grandi nomi e piccoli produttori locali: Vernaccia di San Gimignano, Brunello di Montalcino e naturalmente i vini del Chianti. Il personale vi aiuta ad abbinarli.",
                en: "Big names and small local producers: Vernaccia di San Gimignano, Brunello di Montalcino and of course Chianti wines. Our staff will help you pair them.",
              },
              image: { src: "ristorante/vini.webp", alt: { it: "Bottiglie di rosso con salumi e formaggi su un tavolo", en: "Bottles of red wine with cured meats and cheese on a table" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "ristorante/tavoli-sera.webp", alt: { it: "I tavoli all'aperto nel borgo, di sera", en: "Outdoor tables in the hamlet at night" } },
          kicker: { it: "Prenotate un tavolo", en: "Book a table" },
          title: { it: "Scriveteci o chiamateci.", en: "Write or call us." },
          text: {
            it: "Il ristorante è aperto anche a chi non dorme da noi. Diteci quanti siete e se ci sono intolleranze.",
            en: "The restaurant is open to non-guests too. Tell us how many you are and about any intolerances.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "benessere",
      title: { it: "Benessere", en: "Wellness" },
      description: {
        it: "Il bagno romano in una grotta, la piscina e i massaggi in agriturismo a Poggiarello, nel Chianti Senese.",
        en: "The Roman bath in a cave, the pool and massage treatments at Poggiarello in the Sienese Chianti.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/piscina.webp",
            alt: { it: "La piscina fra gli ulivi", en: "The pool among the olive trees" },
          },
          labelParts: [
            { it: "Benessere", en: "Wellness" },
            { it: "Bagno romano · massaggi", en: "Roman bath · massage" },
          ],
          titleLines: [
            { it: "Staccare,", en: "Switch off," },
            { it: "con calma", en: "slowly" },
          ],
          intro: {
            it: "Il contatto con la natura fa già bene. Chi vuole farsi coccolare trova una vasca in una grotta e massaggi su prenotazione.",
            en: "Being in nature already does you good. If you want to be pampered, there's a pool in a cave and massages by reservation.",
          },
          cta: { label: { it: "Scopri", en: "Discover" }, href: "#relax" },
          pillars: [
            { it: "Massaggi da 60 €", en: "Massages from €60" },
            { it: "Acqua a 37°", en: "Water at 37°" },
          ],
        },
        {
          type: "chapters",
          id: "relax",
          kicker: { it: "Relax", en: "Relax" },
          title: { it: "La grotta e le mani", en: "The cave and the hands" },
          items: [
            {
              word: { it: "Grotta", en: "Cave" },
              kicker: { it: "Su prenotazione", en: "By reservation" },
              title: { it: "Il bagno romano", en: "The Roman bath" },
              text: {
                it: "Una piccola piscina coperta di 5 × 5 metri, ricavata da una grotta ai piani bassi del borgo, con acqua riscaldata a 37°. Ha spogliatoio e doccia. Si può prenotare anche per un'ora solo per voi.",
                en: "A small covered pool of 5 × 5 metres, carved from a cave on the lower floors of the hamlet, with water heated to 37°. It has a changing room and shower. You can book it for an hour just for yourselves.",
              },
              details: [
                { it: "Fuori dai mesi estivi: confermate i periodi", en: "Outside the summer months: please confirm dates" },
              ],
              image: { src: "benessere/bagno-romano.webp", alt: { it: "La vasca del bagno romano nella grotta, con le pietre", en: "The Roman bath pool in the cave, with stones" } },
            },
            {
              word: { it: "Mani", en: "Hands" },
              kicker: { it: "Da 60 € · almeno 1 ora", en: "From €60 · at least 1 hour" },
              title: { it: "I massaggi", en: "Massage treatments" },
              text: {
                it: "Lavoriamo con professioniste di lunga esperienza. Fra i trattamenti: massaggio ayurvedico con olio (Abhyangam), Kobido al viso, linfodrenante e riflessologia plantare. Chiedeteci la brochure.",
                en: "We work with experienced therapists. Treatments include ayurvedic oil massage (Abhyangam), facial Kobido, lymphatic drainage and foot reflexology. Ask us for the brochure.",
              },
              details: [{ it: "Prenotazione richiesta", en: "Reservation required" }],
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/sera.webp", alt: { it: "Il borgo illuminato di sera", en: "The hamlet lit up at night" } },
          kicker: { it: "Prenota il relax", en: "Book some relaxation" },
          title: { it: "Scriveteci cosa vi piacerebbe.", en: "Tell us what you'd like." },
          text: {
            it: "Vi diciamo orari e disponibilità del bagno romano e dei massaggi.",
            en: "We'll tell you times and availability for the Roman bath and massages.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "offerte",
      title: { it: "Le offerte", en: "Offers" },
      description: {
        it: "Offerte di Antico Borgo Poggiarello: cena toscana con bistecca alla fiorentina, weekend romantico, vacanze col cane e corsi di cucina.",
        en: "Offers at Antico Borgo Poggiarello: Tuscan dinner with Florentine steak, romantic weekend, holidays with your dog and cooking classes.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/sera.webp",
            alt: { it: "Il borgo di sera, con le luci accese", en: "The hamlet in the evening, with lights on" },
          },
          labelParts: [
            { it: "Offerte", en: "Offers" },
            { it: "Da confermare col borgo", en: "Confirm with us" },
          ],
          titleLines: [
            { it: "Quattro buoni motivi", en: "Four good reasons" },
            { it: "per fermarsi di più", en: "to stay a little longer" },
          ],
          intro: {
            it: "Una cena, un weekend in due, una vacanza con il cane, un corso di cucina. Condizioni e periodi vanno sempre confermati con noi.",
            en: "A dinner, a weekend for two, a holiday with your dog, a cooking class. Terms and dates are always to be confirmed with us.",
          },
          cta: { label: { it: "Le offerte", en: "The offers" }, href: "#offerte" },
          pillars: [
            { it: "Non cumulabili", en: "Not combinable" },
          ],
        },
        {
          type: "cards",
          id: "offerte",
          kicker: { it: "Le offerte", en: "The offers" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Le offerte non sono cumulabili con altre in corso. Chiedeteci disponibilità e periodi esclusi.",
            en: "Offers can't be combined with others. Ask us about availability and excluded dates.",
          },
          items: [
            {
              meta: { it: "55 € a persona", en: "€55 per person" },
              title: { it: "Cena toscana DOCG", en: "Tuscan DOCG dinner" },
              text: {
                it: "Antipasto, bistecca alla fiorentina da 1,5 kg, contorno e dolce, con una bottiglia di Chianti in omaggio. Disponibile anche per celiaci.",
                en: "Starter, 1.5 kg Florentine steak, side dish and dessert, with a complimentary bottle of Chianti. Gluten-free version available.",
              },
              image: { src: "ristorante/tagliata.webp", alt: { it: "Una bistecca grigliata tagliata", en: "A grilled steak, sliced" } },
            },
            {
              meta: { it: "Da 140 € a notte per due", en: "From €140 per night for two" },
              title: { it: "Weekend romantico", en: "Romantic weekend" },
              text: {
                it: "Minimo due notti con colazione a buffet e un'ora di accesso esclusivo al bagno romano. Esclusi Pasqua, giugno, luglio, agosto, 1° maggio, 2 giugno e 1° novembre.",
                en: "Minimum two nights with buffet breakfast and one hour of exclusive access to the Roman bath. Excludes Easter, June, July, August, 1 May, 2 June and 1 November.",
              },
              image: { src: "benessere/bagno-romano.webp", alt: { it: "Il bagno romano", en: "The Roman bath" } },
            },
            {
              meta: { it: "Pulizia finale 50 €", en: "Final cleaning €50" },
              title: { it: "Vacanze col cane", en: "Holidays with your dog" },
              text: {
                it: "Il cane è il benvenuto. Con soggiorno di almeno 3 notti, pulizia finale e sanificazione le facciamo noi a 50 €. Ristorante e terrazza con il cane al guinzaglio. Esclusi Capodanno, Pasqua, luglio e agosto.",
                en: "Your dog is welcome. For stays of at least 3 nights, we take care of the final cleaning and sanitising for €50. Restaurant and terrace with your dog on a lead. Excludes New Year, Easter, July and August.",
              },
              image: { src: "estate/aerea.webp", alt: { it: "Il borgo e il bosco intorno, ideali per passeggiare", en: "The hamlet and surrounding woods, ideal for walking" } },
            },
            {
              meta: { it: "50 € · 65 € a persona", en: "€50 · €65 per person" },
              title: { it: "Corsi di cucina", en: "Cooking classes" },
              text: {
                it: "Il corso di panificazione (pane, focacce, schiacciate) costa 50 € a persona; quello di cucina, dall'antipasto al dolce, 65 €. Su prenotazione, anche per i bambini.",
                en: "The bread-making class (bread, focaccia, schiacciata) is €50 per person; the cooking class, from starter to dessert, €65. By reservation, children welcome.",
              },
              image: { src: "ristorante/pasta.webp", alt: { it: "Un piatto di pasta fresca con formaggio", en: "A plate of fresh pasta with cheese" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/piazza.webp", alt: { it: "La piazzetta del borgo", en: "The hamlet's little square" } },
          kicker: { it: "Chiedeteci", en: "Ask us" },
          title: { it: "Vi rispondiamo noi.", en: "We'll answer you." },
          text: {
            it: "Scriveteci le date e il numero di persone: vi diciamo cosa è disponibile e a quali condizioni.",
            en: "Send us your dates and group size: we'll tell you what's available and on what terms.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "territorio",
      title: { it: "Il territorio", en: "The surroundings" },
      description: {
        it: "Cosa fare intorno ad Antico Borgo Poggiarello: Monteriggioni, la Via Francigena, Abbadia Isola, la festa medievale, San Gimignano e Siena.",
        en: "What to do around Antico Borgo Poggiarello: Monteriggioni, the Via Francigena, Abbadia Isola, the medieval festival, San Gimignano and Siena.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/vista-san-gimignano.webp",
            alt: { it: "Il panorama dalla terrazza del borgo verso le colline", en: "The view from the hamlet's terrace over the hills" },
          },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Monteriggioni · Chianti", en: "Monteriggioni · Chianti" },
          ],
          titleLines: [
            { it: "Camminare,", en: "Walk," },
            { it: "poi guidare", en: "then drive" },
          ],
          intro: {
            it: "Si parte a piedi o in bici, dalla porta del borgo. Poi, in auto, Siena e San Gimignano sono a un passo.",
            en: "Set off on foot or by bike, from the hamlet's door. Then, by car, Siena and San Gimignano are close.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Monteriggioni", en: "Monteriggioni" },
            { it: "Via Francigena", en: "Via Francigena" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Mura", en: "Walls" },
              kicker: { it: "Monteriggioni", en: "Monteriggioni" },
              title: { it: "Il borgo con quattordici torri", en: "The village with fourteen towers" },
              text: {
                it: "Mura quasi intatte lunghe 570 metri, con 14 torri e due porte: Dante le paragonò a una corona. Il giro sulle mura è di circa 2 chilometri.",
                en: "Almost intact walls 570 metres long, with 14 towers and two gates: Dante compared them to a crown. The walk along the walls is about 2 kilometres.",
              },
              image: { src: "territorio/monteriggioni.webp", alt: { it: "Le mura di Monteriggioni sulla collina", en: "The walls of Monteriggioni on the hill" } },
            },
            {
              word: { it: "Cammino", en: "Trail" },
              kicker: { it: "Via Francigena · 12 km", en: "Via Francigena · 12 km" },
              title: { it: "Da Monteriggioni a Colle", en: "From Monteriggioni to Colle" },
              text: {
                it: "Un tratto semplice, senza attrezzatura speciale: vigne, chiese, abbazie e torri. Consigliata la tappa ad Abbadia Isola, un'abbazia che un tempo stava in mezzo a un lago.",
                en: "An easy stretch, no special gear needed: vineyards, churches, abbeys and towers. Don't miss Abbadia Isola, an abbey that once stood in the middle of a lake.",
              },
            },
            {
              word: { it: "Festa", en: "Festival" },
              kicker: { it: "A metà luglio", en: "Mid-July" },
              title: { it: "Monteriggioni di torri si corona", en: "Monteriggioni di torri si corona" },
              text: {
                it: "Ogni anno la festa medievale riporta il borgo al Duecento: costumi, mercanti, artigiani e musici. Si paga in scudi di Monteriggioni.",
                en: "Every year the medieval festival takes the village back to the 1200s: costumes, merchants, craftsmen and musicians. You pay in Monteriggioni shields.",
              },
            },
            {
              word: { it: "Torri", en: "Towers" },
              kicker: { it: "San Gimignano", en: "San Gimignano" },
              title: { it: "La Val d'Elsa dall'alto", en: "The Val d'Elsa from above" },
              text: {
                it: "Dalle suite si vede la Val d'Elsa fino a San Gimignano. Da qui è una gita facile, come Siena, Volterra e Firenze.",
                en: "From the suites you can see the Val d'Elsa as far as San Gimignano. It's an easy outing, as are Siena, Volterra and Florence.",
              },
              image: { src: "territorio/san-gimignano.webp", alt: { it: "San Gimignano e le colline verdi della Val d'Elsa", en: "San Gimignano and the green hills of the Val d'Elsa" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/borgo.webp", alt: { it: "Il borgo di Poggiarello", en: "The Poggiarello hamlet" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Poggiarello.", en: "We look forward to welcoming you." },
          text: {
            it: "Vi consigliamo volentieri itinerari a piedi e in bici, cantine e ristoranti da provare.",
            en: "We're happy to suggest walking and cycling routes, wineries and restaurants to try.",
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
      slug: "appartamento-2",
      name: "Appartamento per 2",
      category: { it: "PER DUE PERSONE", en: "FOR TWO GUESTS" },
      size: "1",
      guests: "2",
      layout: { it: "1 camera matrimoniale · soggiorno · cucina", en: "1 double bedroom · living room · kitchen" },
      blurb: {
        it: "Per le coppie: camera matrimoniale, soggiorno e cucina, in un'atmosfera romantica.",
        en: "For couples: a double bedroom, living room and kitchen, with a romantic feel.",
      },
      description: {
        it: "Pensato per le coppie che cercano relax tra le colline senesi. Camera matrimoniale con letto a doghe in legno, ampio soggiorno, cucina e bagno con box doccia. Arredo in stile toscano, con le comodità di oggi.",
        en: "Made for couples looking for relaxation among the Sienese hills. A double bedroom with a wooden slatted bed, a spacious living room, a kitchen and a bathroom with shower. Tuscan-style furnishings, with modern comforts.",
      },
      cover: "stays/due-01.webp",
      detail: "stays/due-02.webp",
      gallery: [],
      amenities: [WIFI, AC, TV, KITCHEN, POOL, COT, ROMAN, PETS],
      units: [
        {
          slug: "appartamento-2",
          name: "Appartamento per 2",
          guests: "2",
          layout: { it: "1 camera matrimoniale · 1 bagno con doccia", en: "1 double bedroom · 1 shower room" },
          text: {
            it: "Camera matrimoniale, ampio soggiorno, cucina, bagno con box doccia.",
            en: "Double bedroom, spacious living room, kitchen, shower room.",
          },
          images: photos("due", 6),
        },
      ],
    },
    {
      slug: "appartamento-2-4",
      name: "Appartamento per 2/4",
      category: { it: "PER 2/4 PERSONE", en: "FOR 2–4 GUESTS" },
      size: "1",
      guests: "4",
      layout: { it: "1 camera matrimoniale · divano letto · cucina", en: "1 double bedroom · sofa bed · kitchen" },
      blurb: {
        it: "Adatto alle famiglie: camera matrimoniale e soggiorno con divano letto doppio.",
        en: "Suited to families: a double bedroom and a living room with a double sofa bed.",
      },
      description: {
        it: "Una tipologia per le famiglie, nel nostro borgo medievale. Camera matrimoniale, ampio soggiorno con divano letto matrimoniale, cucina e bagno con box doccia. Letti con doghe in legno; si può aggiungere gratis una culla.",
        en: "A type for families, in our medieval hamlet. A double bedroom, a spacious living room with a double sofa bed, a kitchen and a bathroom with shower. Wooden slatted beds; a cot can be added free of charge.",
      },
      cover: "stays/due-quattro-01.webp",
      detail: "stays/due-quattro-02.webp",
      gallery: [],
      amenities: [WIFI, AC, TV, KITCHEN, POOL, COT, ROMAN, PETS],
      units: [
        {
          slug: "appartamento-2-4",
          name: "Appartamento per 2/4",
          guests: "4",
          layout: { it: "1 camera matrimoniale · divano letto matrimoniale · 1 bagno", en: "1 double bedroom · double sofa bed · 1 bathroom" },
          text: {
            it: "Camera matrimoniale, soggiorno con divano letto matrimoniale, cucina, bagno con box doccia.",
            en: "Double bedroom, living room with double sofa bed, kitchen, shower room.",
          },
          images: photos("due-quattro", 8),
        },
      ],
    },
    {
      slug: "suite-2-4",
      name: "Suite 2/4",
      category: { it: "SUITE 2/4 PERSONE", en: "SUITE FOR 2–4 GUESTS" },
      size: "1",
      guests: "4",
      layout: { it: "1 camera · divano letto · terrazzo privato", en: "1 bedroom · sofa bed · private terrace" },
      blurb: {
        it: "Più spazio e un terrazzo privato con vista sulla Val d'Elsa e San Gimignano.",
        en: "More space and a private terrace overlooking the Val d'Elsa and San Gimignano.",
      },
      description: {
        it: "Bilocali più ampi, con terrazzi privati affacciati sulla Val d'Elsa e su San Gimignano, con tavoli e sedie da giardino per i tramonti. Dentro, ampio soggiorno con divano letto matrimoniale e angolo cucina, camera matrimoniale e bagno con box doccia.",
        en: "Larger two-room apartments with private terraces overlooking the Val d'Elsa and San Gimignano, with garden tables and chairs for the sunsets. Inside, a spacious living room with a double sofa bed and kitchenette, a double bedroom and a bathroom with shower.",
      },
      cover: "stays/suite-01.webp",
      detail: "stays/suite-02.webp",
      gallery: [],
      amenities: [
        { it: "Terrazzo privato con vista", en: "Private terrace with a view" },
        WIFI, AC, TV, KITCHEN, POOL, COT, ROMAN, PETS,
      ],
      units: [
        {
          slug: "suite-2-4",
          name: "Suite 2/4",
          guests: "4",
          layout: { it: "1 camera matrimoniale · divano letto · 1 bagno", en: "1 double bedroom · sofa bed · 1 bathroom" },
          text: {
            it: "Soggiorno con divano letto matrimoniale e angolo cucina, camera matrimoniale, bagno con box doccia, terrazzo privato con tavolo e sedie.",
            en: "Living room with double sofa bed and kitchenette, double bedroom, shower room, private terrace with table and chairs.",
          },
          images: photos("suite", 7),
        },
      ],
    },
    {
      slug: "appartamento-4-6",
      name: "Appartamento per 4/6",
      category: { it: "PER 4/6 PERSONE", en: "FOR 4–6 GUESTS" },
      size: "2",
      guests: "6",
      layout: { it: "2 camere · divano letto · angolo cottura", en: "2 bedrooms · sofa bed · kitchenette" },
      blurb: {
        it: "Trilocale per famiglie numerose o piccoli gruppi di amici.",
        en: "A three-room apartment for larger families or small groups of friends.",
      },
      description: {
        it: "Trilocale per chi vuole più spazio: due camere (una matrimoniale e una con letti singoli), ampio soggiorno con divano letto matrimoniale, angolo cottura e bagno con box doccia. Adatto anche a piccoli gruppi di amici.",
        en: "A three-room apartment for those who want more space: two bedrooms (one double, one with twin beds), a spacious living room with a double sofa bed, a kitchenette and a bathroom with shower. Also suited to small groups of friends.",
      },
      cover: "stays/quattro-sei-01.webp",
      detail: "stays/quattro-sei-02.webp",
      gallery: [],
      amenities: [WIFI, AC, TV, KITCHEN, POOL, COT, ROMAN, PETS],
      units: [
        {
          slug: "appartamento-4-6",
          name: "Appartamento per 4/6",
          guests: "6",
          layout: { it: "2 camere (1 matrimoniale, 1 a letti singoli) · 1 bagno", en: "2 bedrooms (1 double, 1 twin) · 1 bathroom" },
          text: {
            it: "Camera matrimoniale, camera a letti singoli, soggiorno con divano letto matrimoniale, angolo cottura, bagno con box doccia.",
            en: "Double bedroom, twin bedroom, living room with double sofa bed, kitchenette, shower room.",
          },
          images: photos("quattro-sei", 8),
        },
      ],
    },
    {
      slug: "appartamento-6-8",
      name: "Appartamento per 6/8",
      category: { it: "PER 6/8 PERSONE", en: "FOR 6–8 GUESTS" },
      size: "3",
      guests: "8",
      layout: { it: "3 camere · 2 bagni · spazio esterno", en: "3 bedrooms · 2 bathrooms · outdoor space" },
      blurb: {
        it: "Il più grande: tre camere matrimoniali, due bagni e uno spazio esterno con tavoli.",
        en: "The largest: three double bedrooms, two bathrooms and an outdoor space with tables.",
      },
      description: {
        it: "Molto confortevole, ideale per un gruppo di amici, una famiglia numerosa o due famiglie che vogliono condividere la vacanza. Ampio soggiorno con divano letto matrimoniale e angolo cucina, tre camere matrimoniali, due bagni con box doccia. Fuori, un bello spazio con tavoli e sedie da giardino.",
        en: "Very comfortable, ideal for a group of friends, a large family or two families sharing a holiday. A spacious living room with a double sofa bed and kitchenette, three double bedrooms, two bathrooms with shower. Outside, a lovely area with garden tables and chairs.",
      },
      cover: "stays/sei-otto-01.webp",
      detail: "stays/sei-otto-02.webp",
      gallery: [],
      amenities: [
        { it: "Spazio esterno con tavoli e sedie", en: "Outdoor area with table and chairs" },
        WIFI, AC, TV, KITCHEN, POOL, COT, ROMAN, PETS,
      ],
      units: [
        {
          slug: "appartamento-6-8",
          name: "Appartamento per 6/8",
          guests: "8",
          layout: { it: "3 camere matrimoniali · 2 bagni", en: "3 double bedrooms · 2 bathrooms" },
          text: {
            it: "Tre camere matrimoniali, soggiorno con divano letto matrimoniale, angolo cucina, due bagni con box doccia, spazio esterno con tavoli e sedie.",
            en: "Three double bedrooms, living room with double sofa bed, kitchenette, two shower rooms, outdoor area with tables and chairs.",
          },
          images: photos("sei-otto", 7),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli appartamenti", en: "All apartments" },
    kicker: { it: "Il vostro alloggio a Poggiarello", en: "Your stay at Poggiarello" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'appartamento", en: "Inside" },
    unitsLabel: { it: "L'appartamento", en: "The apartment" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Antico Borgo Poggiarello.",
      en: "Hello, I'd like some information about {name} at Antico Borgo Poggiarello.",
    },
    amenitiesLabel: { it: "Nell'appartamento", en: "In the apartment" },
    ctaTitle: { it: "Qualche giorno fra gli ulivi.", en: "A few days among the olive trees." },
    ctaLabel: WHATSAPP_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECT" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Prenotando sul nostro sito o scrivendoci, parlate direttamente con noi, senza intermediari.",
      en: "Booking on our site or writing to us, you deal with us directly, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Antico Borgo Poggiarello · Poggiarello srl · P.IVA 01012250526" },

  /* Il cliente ha già le informative su Iubenda: si rimanda a quelle. */
  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/8236255",
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/8236255/cookie-policy",
    },
  ],
};

export default site;
