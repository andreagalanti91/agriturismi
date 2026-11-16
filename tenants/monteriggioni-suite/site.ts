/**
 * MONTERIGGIONI SUITE
 * ===================
 *
 * Anteprima di redesign con i contenuti pubblici di monteriggionisuite.com:
 * la villetta in pietra, la piscina, i servizi, i contatti e le fotografie
 * vengono da lì, riscritti e riorganizzati. Le distanze del territorio sono
 * indicative (calcolate da Abbadia Isola, coordinate OpenStreetMap).
 *
 *   La suite /suite · Servizi /servizi · Piscina /piscina · Territorio /territorio
 *
 * PRENOTAZIONE. Il sito attuale non ha un motore di prenotazione: c'è solo un
 * modulo di richiesta (soggiorni da sabato a sabato, una settimana o più). Qui
 * non c'è `booking`: i pulsanti portano ai contatti, WhatsApp ed email.
 *
 * DA FAR CONFERMARE AL CLIENTE: CIN, numero massimo di ospiti, camere e bagni,
 * prezzi, la cucina (visibile nelle foto, non descritta nel testo del sito).
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

/** Le foto della suite: stays/suite-01.webp, -02... */
const photos = (count: number) =>
  Array.from({ length: count }, (_, i) => `stays/suite-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const POOL: Localized = { it: "Piscina privata 11 × 5 m", en: "Private 11 × 5 m pool" };
const GARDEN: Localized = { it: "Giardino recintato da siepi", en: "Garden screened by hedges" };
const PORCH: Localized = { it: "Porticato con tavolo", en: "Porch with dining table" };
const FIREPLACE: Localized = { it: "Caminetto", en: "Fireplace" };
const TV: Localized = { it: "TV SAT e HI-FI", en: "Satellite TV and hi-fi" };
const KITCHEN: Localized = { it: "Cucina", en: "Kitchen" };
const WIFI: Localized = { it: "Wi-Fi in casa e in giardino", en: "Wi-Fi indoors and in the garden" };

const site: SiteConfig = {
  brand: {
    id: "monteriggioni-suite",
    prefix: "Dimora",
    name: "Monteriggioni Suite",
    logo: "logo.svg",
  },

  contact: {
    /* Il cellulare è quello su cui funziona WhatsApp; il fisso compare come
       secondo numero. */
    phone: "393356294086",
    phoneDisplay: "+39 335 629 4086",
    phoneAlt: { number: "390577304032", display: "+39 0577 304032" },
    email: "info@monteriggionisuite.com",
    address: ["Strada di Strove 2, Loc. Abbadia Isola", "53035 Monteriggioni (SI)"],
    coordinates: { lat: 43.3878, lng: 11.1947 },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/monteriggionisuite/" },
      { label: "Facebook", href: "https://www.facebook.com/monteriggionisuite/" },
    ],
  },

  seo: {
    domain: "https://www.monteriggionisuite.com",
    title: {
      it: "Monteriggioni Suite | Villetta in pietra con piscina vicino a Siena",
      en: "Monteriggioni Suite | Stone cottage with pool near Siena",
    },
    description: {
      it: "Una villetta in pietra con piscina privata e giardino, a due passi da Monteriggioni e dalla Via Francigena, per una coppia in cerca di campagna toscana.",
      en: "A stone cottage with private pool and garden, a short walk from Monteriggioni and the Via Francigena, for a couple looking for the Tuscan countryside.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    { href: "/suite", label: { it: "La suite", en: "The suite" } },
    { page: "servizi", label: { it: "Servizi", en: "Features" } },
    { page: "piscina", label: { it: "Piscina", en: "Pool" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
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
          it: "La villetta in pietra di Monteriggioni Suite tra il verde del giardino",
          en: "The stone cottage of Monteriggioni Suite among the garden greenery",
        },
      },
      labelParts: [
        { it: "Abbadia Isola", en: "Abbadia Isola" },
        { it: "Monteriggioni · Siena", en: "Monteriggioni · Siena" },
      ],
      titleLines: [
        { it: "Una suite con vista", en: "A suite with a view" },
        { it: "su Monteriggioni.", en: "of Monteriggioni." },
      ],
      intro: {
        it: "Una villetta in pietra con piscina e giardino, nella campagna accanto alle mura di Monteriggioni, lungo la Via Francigena.",
        en: "A stone cottage with pool and garden, in the countryside next to the walls of Monteriggioni, on the Via Francigena.",
      },
      cta: {
        label: { it: "Scopri la suite", en: "See the suite" },
        href: "#suite",
      },
      pillars: [
        { it: "Piscina privata", en: "Private pool" },
        { it: "Via Francigena", en: "Via Francigena" },
        { it: "Monteriggioni 2 km a piedi", en: "Monteriggioni 2 km on foot" },
      ],
    },

    {
      type: "story",
      id: "dimora",
      number: "300 m",
      numberLabel: { it: "DALL'ABBADIA ISOLA", en: "FROM ABBADIA ISOLA" },
      ghost: "SUITE",
      titleLines: [
        { it: "Fra grano, girasoli", en: "Among wheat, sunflowers" },
        { it: "e vigne del", en: "and the vineyards of" },
      ],
      titleEmphasis: { it: "Chianti.", en: "Chianti." },
      mainImage: {
        src: "estate/vista.webp",
        alt: { it: "Il porticato con vista sulle mura di Monteriggioni", en: "The porch with a view of the walls of Monteriggioni" },
        caption: {
          it: "Dal porticato si vedono le mura di Monteriggioni",
          en: "From the porch you can see the walls of Monteriggioni",
        },
      },
      aerialImage: {
        src: "estate/giardino.webp",
        alt: { it: "Il prato con il pergolato in fondo", en: "The lawn with the pergola beyond" },
        badge: "43°23′ N · 11°11′ E",
      },
      manifesto: {
        label: { it: "UNA DIMORA PER DUE", en: "A HOME FOR TWO" },
        text: {
          it: "La Monteriggioni Suite sta nella valle dominata dal rilievo di Montemaggio, accanto alla cinta muraria di Monteriggioni e a ridosso dei vigneti del Chianti. È una bella villetta in pietra, a trecento metri dal borgo di Abbadia Isola, dove ci sono l'abbazia costruita nell'anno 1000 sulla via Francigena, un ristorante e un wine-bar. È pensata per una coppia che vuole alternare momenti di intimità a itinerari culturali ed enogastronomici.",
          en: "Monteriggioni Suite lies in the valley dominated by Montemaggio, next to the walls of Monteriggioni and close to the Chianti vineyards. It is a lovely stone cottage, three hundred metres from the village of Abbadia Isola, home to the abbey built in the year 1000 on the Via Francigena, a restaurant and a wine bar. It is made for a couple who want to alternate quiet moments with cultural and food-and-wine itineraries.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "suite",
      kicker: { it: "Dormire a Monteriggioni", en: "Stay at Monteriggioni" },
      title: { it: "Una sola suite, tutta per voi.", en: "One suite, all yours." },
      text: {
        it: "Casa, porticato, giardino e piscina sono a uso esclusivo degli ospiti. Si soggiorna da sabato a sabato, per una o più settimane.",
        en: "The house, porch, garden and pool are for guests only. Stays run Saturday to Saturday, for one or more weeks.",
      },
      tabs: [
        {
          label: { it: "La suite", en: "The suite" },
          stays: ["suite"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina-sera.webp",
        alt: { it: "La piscina illuminata al calare della sera", en: "The pool lit up at dusk" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: { it: "Una piscina solo vostra, anche di notte.", en: "A pool just for you, even at night." },
      text: {
        it: "Undici metri per cinque, profonda da 1,20 a 2,00 m, con la zona tuffi e la luce dall'interno per i bagni notturni. Intorno, alberi da frutta, la doccia esterna e un pergolato con tavolo, lettini e sdraio.",
        en: "Eleven metres by five, from 1.20 to 2.00 m deep, with a diving area and lights inside for night swims. All around, fruit trees, an outdoor shower and a pergola with table, sunbeds and deckchairs.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "A PORTATA DI PASSO", en: "WITHIN WALKING DISTANCE" },
      title: { it: "Il tempo, qui, va a passo d'uomo.", en: "Time here moves at walking pace." },
      intro: {
        it: "Acqua, cammino e un borgo antico, senza prendere l'auto.",
        en: "Water, a walk and an ancient village, without taking the car.",
      },
      marquee: {
        it: "PISCINA · PORTICATO · FRANCIGENA · ABBAZIA · MURA · ",
        en: "POOL · PORCH · FRANCIGENA · ABBEY · WALLS · ",
      },
      itemLabel: { it: "A PORTATA DI PASSO", en: "WITHIN REACH" },
      ctaLabel: { it: "Il territorio", en: "The surroundings" },
      ctaHref: "/territorio",
      items: [
        {
          title: "Un tuffo in giardino",
          word: { it: "PISCINA", en: "POOL" },
          meta: { it: "Solo per gli ospiti", en: "Guests only" },
          text: {
            it: "La piscina è protetta da alte siepi e circondata da susini, ciliegi, peri, meli e noci.",
            en: "The pool is screened by tall hedges and surrounded by plum, cherry, pear, apple and walnut trees.",
          },
          image: "estate/bordo-piscina.webp",
        },
        {
          title: "Sulla Via Francigena",
          word: { it: "CAMMINO", en: "WALK" },
          meta: { it: "2 km a piedi", en: "2 km on foot" },
          text: {
            it: "Dalla casa si raggiunge a piedi il Castello di Monteriggioni lungo l'antica via Francigena.",
            en: "From the house you can walk to the Castle of Monteriggioni along the ancient Via Francigena.",
          },
          image: "estate/portico-sera.webp",
        },
        {
          title: "Abbadia Isola",
          word: { it: "ABBAZIA", en: "ABBEY" },
          meta: { it: "A 300 metri", en: "300 metres away" },
          text: {
            it: "L'abbazia dell'anno 1000, un ristorante e un wine-bar nel borgo, a due passi dalla casa.",
            en: "The abbey from the year 1000, a restaurant and a wine bar in the village, a few steps from the house.",
          },
          image: "estate/casa.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre la porta", en: "Beyond the door" },
      title: {
        it: "La casa, la piscina e la Toscana intorno.",
        en: "The house, the pool and the Tuscany around you.",
      },
      items: [
        {
          meta: { it: "Su due livelli", en: "On two levels" },
          title: { it: "Servizi", en: "Features" },
          text: {
            it: "Soggiorno con caminetto, zona pranzo, portico e giardino: tutto quello che c'è in casa.",
            en: "Sitting room with fireplace, dining area, porch and garden: everything the house offers.",
          },
          image: { src: "stays/suite-04.webp", alt: { it: "Il caminetto e la scala del soggiorno", en: "The fireplace and staircase in the sitting room" } },
          link: { label: DISCOVER, href: "/servizi" },
        },
        {
          meta: { it: "11 × 5 metri", en: "11 × 5 metres" },
          title: { it: "Piscina e giardino", en: "Pool and garden" },
          text: {
            it: "Uso esclusivo, doccia esterna, pergolato e un prato all'inglese.",
            en: "Exclusive use, outdoor shower, pergola and an English-style lawn.",
          },
          image: { src: "estate/piscina.webp", alt: { it: "La piscina con i lettini nel giardino", en: "The pool with sunbeds in the garden" } },
          link: { label: DISCOVER, href: "/piscina" },
        },
        {
          meta: { it: "Monteriggioni · Siena · Chianti", en: "Monteriggioni · Siena · Chianti" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Le mura a due chilometri a piedi, Siena e il Chianti a portata di auto, come arrivare.",
            en: "The walls two kilometres on foot, Siena and Chianti by car, and how to get here.",
          },
          image: { src: "estate/portico.webp", alt: { it: "Il porticato con il tavolo per pranzare all'aperto", en: "The porch with the outdoor dining table" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Fra Siena e il Chianti", en: "Between Siena and Chianti" },
      title: {
        it: "Monteriggioni a due passi, la Toscana tutto intorno.",
        en: "Monteriggioni a stone's throw away, Tuscany all around.",
      },
      text: {
        it: "Le mura a due chilometri a piedi, Siena e Colle di Val d'Elsa in un quarto d'ora, San Gimignano e il Chianti poco oltre.",
        en: "The walls two kilometres on foot, Siena and Colle di Val d'Elsa in a quarter of an hour, San Gimignano and Chianti a little further.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Monteriggioni Suite",
        en: "Stylised map of distances from Monteriggioni Suite",
      },
      gridLabels: { x: "43°23′ N", y: "11°11′ E" },
      homeLabel: { lines: ["Monteriggioni", "Suite"], sub: "Abbadia Isola" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Monteriggioni Suite",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "3 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "13 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "17 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "19 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "24 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "45 km", coordinates: { lat: 43.4018, lng: 10.8606 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "55 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/pergolato-sera.webp",
        alt: { it: "Il pergolato in giardino al tramonto", en: "The garden pergola at dusk" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo ad Abbadia Isola.", en: "We look forward to welcoming you." },
      text: {
        it: "La suite si affitta da sabato a sabato, per una o più settimane. Scriveteci le date e il numero di ospiti: vi rispondiamo di persona.",
        en: "The suite is let Saturday to Saturday, for one or more weeks. Write to us with your dates and number of guests: we'll reply in person.",
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
      slug: "servizi",
      title: { it: "Servizi", en: "Features" },
      description: {
        it: "Soggiorno su due livelli con caminetto, porticato, giardino e Wi-Fi: i servizi della villetta di Monteriggioni Suite.",
        en: "Two-level sitting room with fireplace, porch, garden and Wi-Fi: the features of the Monteriggioni Suite cottage.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "stays/suite-04.webp", alt: { it: "Il caminetto del soggiorno", en: "The sitting-room fireplace" } },
          labelParts: [
            { it: "Servizi", en: "Features" },
            { it: "La casa", en: "The house" },
          ],
          titleLines: [
            { it: "Dentro e fuori,", en: "Inside and out," },
            { it: "tutto per voi", en: "all for you" },
          ],
          intro: {
            it: "Una villetta in pietra con porticato, un soggiorno su due livelli e un giardino che la circonda.",
            en: "A stone cottage with a porch, a two-level sitting room and a garden all around.",
          },
          cta: { label: { it: "Cosa c'è in casa", en: "What's inside" }, href: "#casa" },
          pillars: [
            { it: "Caminetto", en: "Fireplace" },
            { it: "TV SAT e HI-FI", en: "Satellite TV and hi-fi" },
            { it: "Wi-Fi", en: "Wi-Fi" },
          ],
        },
        {
          type: "chapters",
          id: "casa",
          kicker: { it: "La casa", en: "The house" },
          title: { it: "Come si vive", en: "Living here" },
          items: [
            {
              word: { it: "Portico", en: "Porch" },
              kicker: { it: "All'aperto", en: "Outdoors" },
              title: { it: "Il porticato", en: "The porch" },
              text: {
                it: "La casa è in parte contornata da un porticato con un tavolo per pranzare all'aperto e sedute per letture rilassanti.",
                en: "The house is partly surrounded by a porch with a table for eating outdoors and seats for relaxed reading.",
              },
              image: { src: "estate/portico.webp", alt: { it: "Il tavolo sotto il porticato", en: "The table under the porch" } },
            },
            {
              word: { it: "Soggiorno", en: "Sitting room" },
              kicker: { it: "Su due livelli", en: "On two levels" },
              title: { it: "Divano, libri e caminetto", en: "Sofa, books and fireplace" },
              text: {
                it: "Una zona divano con TV SAT, HI-FI, libreria e caminetto, e una zona pranzo con un tavolo grande.",
                en: "A sofa area with satellite TV, hi-fi, bookcase and fireplace, and a dining area with a large table.",
              },
              image: { src: "stays/suite-05.webp", alt: { it: "Il divano del soggiorno", en: "The sitting-room sofa" } },
            },
            {
              word: { it: "Vista", en: "View" },
              kicker: { it: "Al livello superiore", en: "On the upper level" },
              title: { it: "Le mura dalla finestra", en: "The walls from the window" },
              text: {
                it: "Sul livello superiore c'è un altro divano: da due finestre si vede la cinta muraria di Monteriggioni.",
                en: "The upper level has another sofa: from two windows you can see the walls of Monteriggioni.",
              },
              image: { src: "stays/suite-02.webp", alt: { it: "Il soppalco con le finestre e la poltrona", en: "The upper level with windows and armchair" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "stays/suite-03.webp", alt: { it: "La camera con il letto antico", en: "The bedroom with the antique bed" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Chiedeteci le date.", en: "Ask us about dates." },
          text: {
            it: "Si soggiorna da sabato a sabato, per una o più settimane. Scriveteci quando e in quanti.",
            en: "Stays run Saturday to Saturday, for one or more weeks. Tell us when and how many.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "piscina",
      title: { it: "Piscina e giardino", en: "Pool and garden" },
      description: {
        it: "La piscina privata di 11 per 5 metri, illuminata, con doccia esterna e pergolato, nel giardino di Monteriggioni Suite.",
        en: "The private 11 by 5 metre pool, lit at night, with outdoor shower and pergola, in the garden of Monteriggioni Suite.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/piscina.webp", alt: { it: "La piscina con i lettini", en: "The pool with sunbeds" } },
          labelParts: [
            { it: "Piscina", en: "Pool" },
            { it: "Solo per gli ospiti", en: "Guests only" },
          ],
          titleLines: [
            { it: "Una piscina fra", en: "A pool among" },
            { it: "gli alberi da frutta", en: "the fruit trees" },
          ],
          intro: {
            it: "In un ampio giardino con prato all'inglese, protetta da alte siepi: la piscina è a uso esclusivo degli ospiti della villetta.",
            en: "In a wide garden with an English-style lawn, screened by tall hedges: the pool is for the exclusive use of the cottage's guests.",
          },
          cta: { label: { it: "I numeri", en: "The details" }, href: "#numeri" },
          pillars: [
            { it: "11 × 5 metri", en: "11 × 5 metres" },
            { it: "Illuminata", en: "Lit at night" },
          ],
        },
        {
          type: "facts",
          id: "numeri",
          kicker: { it: "La piscina", en: "The pool" },
          title: { it: "In breve", en: "At a glance" },
          image: { src: "estate/bordo-piscina.webp", alt: { it: "Il bordo della piscina con il giardino e le colline", en: "The pool edge with the garden and hills" } },
          items: [
            { label: { it: "Dimensioni", en: "Size" }, value: { it: "11 × 5 m", en: "11 × 5 m" } },
            { label: { it: "Profondità", en: "Depth" }, value: { it: "1,20 – 2,00 m", en: "1.20 – 2.00 m" }, note: { it: "Con zona tuffi", en: "With diving area" } },
            { label: { it: "Uso", en: "Use" }, value: { it: "Esclusivo", en: "Exclusive" }, note: { it: "Per gli ospiti della villetta", en: "For the cottage's guests" } },
            { label: { it: "Luce", en: "Light" }, value: { it: "Dall'interno", en: "From within" }, note: { it: "Per i bagni notturni", en: "For night swims" } },
            { label: { it: "Accanto", en: "Alongside" }, value: { it: "Doccia esterna", en: "Outdoor shower" }, note: { it: "E pergolato ombreggiato", en: "And shaded pergola" } },
            { label: { it: "Connessione", en: "Connection" }, value: { it: "Wi-Fi", en: "Wi-Fi" }, note: { it: "Copre tutta l'area", en: "Covers the whole area" } },
          ],
        },
        {
          type: "chapters",
          id: "giardino",
          kicker: { it: "Il giardino", en: "The garden" },
          title: { it: "Dal mattino alla sera", en: "From morning to night" },
          items: [
            {
              word: { it: "Giorno", en: "Day" },
              kicker: { it: "Sul prato", en: "On the lawn" },
              title: { it: "Lettini e sdraio", en: "Sunbeds and deckchairs" },
              text: {
                it: "Accanto alla piscina ci sono lettini prendisole e sedie sdraio, nel prato curato all'inglese.",
                en: "Next to the pool there are sunbeds and deckchairs on the manicured English-style lawn.",
              },
              image: { src: "estate/giardino.webp", alt: { it: "Il prato e il pergolato nel giardino", en: "The lawn and pergola in the garden" } },
            },
            {
              word: { it: "Ombra", en: "Shade" },
              kicker: { it: "Il pergolato", en: "The pergola" },
              title: { it: "Un tavolo sotto le rampicanti", en: "A table under the climbers" },
              text: {
                it: "Il pergolato è ombreggiato da piante rampicanti e ha tavolo e sedie per mangiare all'aperto.",
                en: "The pergola is shaded by climbing plants and has a table and chairs for eating outdoors.",
              },
              image: { src: "estate/pergolato-sera.webp", alt: { it: "Il pergolato e la piscina al crepuscolo", en: "The pergola and pool at dusk" } },
            },
            {
              word: { it: "Sera", en: "Night" },
              kicker: { it: "Luce dall'interno", en: "Lit from within" },
              title: { it: "Il bagno notturno", en: "The night swim" },
              text: {
                it: "La piscina è illuminata dall'interno: alla sera diventa un rettangolo di luce nel giardino buio.",
                en: "The pool is lit from within: in the evening it becomes a rectangle of light in the dark garden.",
              },
              image: { src: "estate/piscina-sera.webp", alt: { it: "La piscina illuminata di sera", en: "The pool lit up in the evening" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/casa.webp", alt: { it: "La villetta vista dal giardino", en: "The cottage seen from the garden" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Venite a farvi un bagno.", en: "Come for a swim." },
          text: {
            it: "Scriveteci le date che preferite: vi diciamo subito se la suite è libera.",
            en: "Write to us with your preferred dates: we'll tell you right away whether the suite is free.",
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
        it: "Abbadia Isola, Monteriggioni, Siena e il Chianti: dintorni e come arrivare a Monteriggioni Suite.",
        en: "Abbadia Isola, Monteriggioni, Siena and Chianti: the surroundings and how to reach Monteriggioni Suite.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/vista.webp", alt: { it: "Il porticato con vista sulle mura di Monteriggioni", en: "The porch overlooking the walls of Monteriggioni" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Via Francigena", en: "Via Francigena" },
          ],
          titleLines: [
            { it: "Le mura di Monteriggioni", en: "The walls of Monteriggioni" },
            { it: "a due chilometri a piedi", en: "two kilometres on foot" },
          ],
          intro: {
            it: "La casa sta nella valle sotto Montemaggio, sull'antica via Francigena: un borgo con l'abbazia a trecento metri, il castello a due chilometri.",
            en: "The house sits in the valley beneath Montemaggio, on the ancient Via Francigena: a village with its abbey 300 metres away, the castle two kilometres on.",
          },
          cta: { label: { it: "Cosa c'è intorno", en: "What's around" }, href: "#dintorni" },
          pillars: [
            { it: "Abbazia 300 m", en: "Abbey 300 m" },
            { it: "Monteriggioni 2 km a piedi", en: "Monteriggioni 2 km on foot" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa c'è intorno", en: "What's around" },
          items: [
            {
              word: { it: "Abbazia", en: "Abbey" },
              kicker: { it: "A 300 metri", en: "300 metres away" },
              title: { it: "Abbadia Isola", en: "Abbadia Isola" },
              text: {
                it: "Il borgo storico ha l'abbazia costruita nell'anno 1000 sulla via Francigena, un ristorante e un wine-bar.",
                en: "The historic village has the abbey built in the year 1000 on the Via Francigena, a restaurant and a wine bar.",
              },
            },
            {
              word: { it: "Mura", en: "Walls" },
              kicker: { it: "A 2 km a piedi", en: "2 km on foot" },
              title: { it: "Il Castello di Monteriggioni", en: "The Castle of Monteriggioni" },
              text: {
                it: "Si arriva a piedi seguendo l'antica via Francigena; qualche scorcio delle mura si vede già da casa.",
                en: "You can walk there along the ancient Via Francigena; a few glimpses of the walls can already be seen from the house.",
              },
            },
            {
              word: { it: "In auto", en: "By car" },
              kicker: { it: "Come arrivare", en: "Getting here" },
              title: { it: "Dall'A1 alla Superstrada Firenze–Siena", en: "From the A1 to the Florence–Siena road" },
              text: {
                it: "Da Roma uscite a Valdichiana e prendete la Siena–Bettolle, poi la Firenze–Siena verso Firenze. Da Milano uscite a Firenze Impruneta e prendete la Firenze–Siena verso Siena. In entrambi i casi uscita Monteriggioni e indicazioni per Abbadia Isola.",
                en: "From Rome take the Valdichiana exit and the Siena–Bettolle road, then the Florence–Siena road towards Florence. From Milan take the Firenze Impruneta exit and the Florence–Siena road towards Siena. Either way, exit at Monteriggioni and follow signs for Abbadia Isola.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/portico-sera.webp", alt: { it: "Il porticato illuminato di sera", en: "The porch lit up in the evening" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo ad Abbadia Isola.", en: "We look forward to welcoming you." },
          text: {
            it: "Se volete consigli su itinerari e ristoranti, scriveteci.",
            en: "If you'd like suggestions on itineraries and restaurants, just write to us.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  /* ================================================================ */
  /* Alloggio                                                          */
  /* ================================================================ */

  accommodations: [
    {
      slug: "suite",
      name: "La Suite",
      category: { it: "VILLETTA IN PIETRA", en: "STONE COTTAGE" },
      size: "1",
      guests: "2",
      layout: { it: "Soggiorno su due livelli · caminetto · portico", en: "Two-level sitting room · fireplace · porch" },
      blurb: {
        it: "Una villetta in pietra con porticato, piscina e giardino tutti per voi.",
        en: "A stone cottage with porch, pool and garden all to yourselves.",
      },
      description: {
        it: "Una bella villetta in pietra, a trecento metri dal borgo di Abbadia Isola. Il porticato che contorna in parte la casa ha un tavolo per pranzare all'aperto. Dentro, un ampio soggiorno su due livelli: la zona divano con TV SAT, HI-FI, libreria e caminetto, la zona pranzo con tavolo grande e, al livello superiore, un divano con due finestre da cui si vede la cinta muraria di Monteriggioni.",
        en: "A lovely stone cottage, three hundred metres from the village of Abbadia Isola. The porch that partly surrounds the house has a table for eating outdoors. Inside, a spacious sitting room on two levels: the sofa area with satellite TV, hi-fi, bookcase and fireplace, the dining area with a large table and, on the upper level, a sofa with two windows overlooking the walls of Monteriggioni.",
      },
      cover: "stays/suite-01.webp",
      detail: "stays/suite-02.webp",
      gallery: [],
      amenities: [POOL, GARDEN, PORCH, FIREPLACE, TV, KITCHEN, WIFI],
      units: [
        {
          slug: "la-suite",
          name: "La Suite",
          guests: "2",
          layout: { it: "Soggiorno su due livelli · caminetto", en: "Two-level sitting room · fireplace" },
          text: {
            it: "Porticato con tavolo, soggiorno con caminetto e zona pranzo, livello superiore con vista sulle mura. Piscina 11 × 5 m e giardino a uso esclusivo. Da sabato a sabato.",
            en: "Porch with table, sitting room with fireplace and dining area, upper level overlooking the walls. 11 × 5 m pool and garden for exclusive use. Saturday to Saturday.",
          },
          images: photos(9),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Torna alla suite", en: "Back to the suite" },
    kicker: { it: "La vostra suite a Monteriggioni", en: "Your suite at Monteriggioni" },
    sizeLabel: { it: "Alloggio", en: "Home" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la casa", en: "Inside" },
    unitsLabel: { it: "La suite", en: "The suite" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Monteriggioni Suite.",
      en: "Hello, I'd like some information about {name} at Monteriggioni Suite.",
    },
    amenitiesLabel: { it: "Nella casa", en: "In the house" },
    ctaTitle: { it: "Una settimana in campagna.", en: "A week in the countryside." },
    ctaLabel: WHATSAPP_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECT" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Scrivendoci o chiamandoci parlate direttamente con noi, senza intermediari.",
      en: "Writing or calling us, you deal with us directly, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Monteriggioni Suite · P.IVA 00766290522" },

  legalPages: defaultLegalPages({
    name: "Monteriggioni Suite",
    address: "Strada di Strove 2, Loc. Abbadia Isola, 53035 Monteriggioni (SI)",
    email: "info@monteriggionisuite.com",
  }),
};

export default site;
