/**
 * HOTEL IL PICCOLO CASTELLO
 * =========================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Nerbona,
 * con i contenuti pubblici di ilpiccolocastello.com: testi, camere,
 * ristoranti, benessere, sale meeting, attività e fotografie vengono da lì,
 * riscritti e riorganizzati. Prezzi e orari vanno fatti confermare.
 *
 *   Camere ▾  /familiare-deluxe  /classic-superior  /camere-nel-castello
 *   Ristoranti /ristoranti · Benessere /benessere · Meeting ed eventi
 *   /meeting-eventi · Attività /attivita · Siena e dintorni /siena-e-dintorni
 *   Prenota → WuBook
 *
 * Il sito originale ha quattro lingue; l'anteprima ne mostra due.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

/* Dotazioni uguali in tutte le camere. */
const ROOM_AMENITIES: Localized[] = [
  { it: "Aria condizionata", en: "Air conditioning" },
  { it: "TV satellitare", en: "Satellite TV" },
  { it: "Minibar", en: "Minibar" },
  { it: "Cassetta di sicurezza", en: "Safe" },
  { it: "Connessione internet", en: "Internet connection" },
];

/** Le foto di una camera: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const site: SiteConfig = {
  brand: {
    id: "piccolo-castello",
    prefix: "Hotel",
    name: "Il Piccolo Castello",
    logo: "logo.svg",
  },

  contact: {
    /* Il centralino non riceve WhatsApp: i pulsanti "WhatsApp" vanno
       verificati con il cliente o sostituiti con un cellulare. */
    phone: "390577307300",
    phoneDisplay: "+39 0577 307300",
    email: "info@ilpiccolocastello.com",
    address: ["Strada Provinciale Colligiana 8", "53035 Monteriggioni (SI)"],
    vat: "00967300526",
    coordinates: { lat: 43.3931, lng: 11.1944 },
    social: [{ label: "Facebook", href: "https://www.facebook.com/hotelilpiccolocastello/" }],
  },

  seo: {
    domain: "https://www.ilpiccolocastello.com",
    title: {
      it: "Hotel Il Piccolo Castello | 4 stelle a Monteriggioni, Siena",
      en: "Hotel Il Piccolo Castello | 4-star hotel in Monteriggioni, Siena",
    },
    description: {
      it: "Hotel 4 stelle neoclassico all'ombra della rocca di Monteriggioni: 50 camere, piscina, giardino all'italiana, ristorante e beauty center.",
      en: "Neoclassical 4-star hotel below the walls of Monteriggioni: 50 rooms, pool, Italian garden, restaurant and beauty centre.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Camere", en: "Rooms" },
      children: [
        { href: "/familiare-deluxe", label: { it: "Familiare Deluxe", en: "Family Deluxe" } },
        { href: "/classic-superior", label: { it: "Classic & Superior", en: "Classic & Superior" } },
        { href: "/camere-nel-castello", label: { it: "Camere nel Castello", en: "Rooms in the Castle" } },
      ],
    },
    { page: "ristoranti", label: { it: "Ristoranti", en: "Restaurants" } },
    { page: "benessere", label: { it: "Benessere", en: "Wellness" } },
    { page: "meeting-eventi", label: { it: "Meeting ed eventi", en: "Meetings & events" } },
    { page: "attivita", label: { it: "Attività", en: "Activities" } },
    { page: "siena-e-dintorni", label: { it: "Siena e dintorni", en: "Siena & around" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: "https://wubook.net/wbkd/wbk/?lcode=1484763013",
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
          it: "La piscina dell'hotel abbracciata dalle ali neoclassiche",
          en: "The hotel pool embraced by its neoclassical wings",
        },
      },
      labelParts: [
        { it: "Hotel 4 stelle", en: "4-star hotel" },
        { it: "Monteriggioni · Siena", en: "Monteriggioni · Siena" },
      ],
      titleLines: [
        { it: "All'ombra della rocca", en: "In the shadow of" },
        { it: "di Monteriggioni.", en: "Monteriggioni's walls." },
      ],
      intro: {
        it: "Un hotel neoclassico attorno a una piscina e a un giardino all'italiana, fra Siena, il borgo medievale e le colline del Chianti.",
        en: "A neoclassical hotel around a pool and an Italian garden, between Siena, the medieval village and the Chianti hills.",
      },
      cta: {
        label: { it: "Scopri le camere", en: "See the rooms" },
        href: "#camere",
      },
      pillars: [
        { it: "50 camere · piscina", en: "50 rooms · pool" },
        { it: "Ristorante e beauty center", en: "Restaurant and beauty centre" },
        { it: "Siena 15 km", en: "Siena 15 km" },
      ],
    },

    {
      type: "story",
      id: "hotel",
      number: "50",
      numberLabel: { it: "CAMERE", en: "ROOMS" },
      ghost: "CASTELLO",
      titleLines: [
        { it: "Un gioiello", en: "A gem in" },
        { it: "neoclassico", en: "Sienese neoclassical" },
      ],
      titleEmphasis: { it: "senese.", en: "style." },
      mainImage: {
        src: "estate/giardino.webp",
        alt: { it: "Il giardino all'italiana", en: "The Italian garden" },
        caption: {
          it: "Il giardino all'italiana, il cuore dell'hotel",
          en: "The Italian garden, the heart of the hotel",
        },
      },
      aerialImage: {
        src: "estate/monteriggioni.webp",
        alt: { it: "Le mura di Monteriggioni", en: "The walls of Monteriggioni" },
        badge: "43°23′ N · 11°11′ E",
      },
      manifesto: {
        label: { it: "IL DISEGNO DI AGOSTINO FANTASTICI", en: "AGOSTINO FANTASTICI'S DESIGN" },
        text: {
          it: "Il Piccolo Castello sta ai piedi della rocca di Monteriggioni, la fortezza che proteggeva Siena. È fatto di più ali collegate su un solo piano e disposte a semicerchio, che abbracciano il parco, la piscina e il giardino all'italiana. Le cinquanta camere si ispirano ai disegni originali dell'architetto senese Agostino Fantastici e ai colori delle terre di Siena: mobili e oggetti sono stati realizzati da artigiani locali, i decori dipinti a mano.",
          en: "Il Piccolo Castello stands at the foot of Monteriggioni's fortress, which once guarded Siena. It is made of several wings linked on a single floor and arranged in a semicircle around the park, the pool and the Italian garden. The fifty rooms take their cue from the original drawings of Sienese architect Agostino Fantastici and the colours of the Siena earth: furniture and objects were made by local craftsmen, the decorations painted by hand.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "camere",
      kicker: { it: "Dormire al Piccolo Castello", en: "Stay at Il Piccolo Castello" },
      title: {
        it: "Cinquanta camere, due indirizzi.",
        en: "Fifty rooms, two addresses.",
      },
      text: {
        it: "Attorno alla piscina e al giardino dell'hotel, oppure dentro le mura del borgo medievale.",
        en: "Around the hotel's pool and garden, or inside the walls of the medieval village.",
      },
      tabs: [
        {
          label: { it: "In hotel", en: "At the hotel" },
          text: {
            it: "Familiari Deluxe con soppalco e camere Classic e Superior, affacciate sul parco e sulla piscina.",
            en: "Family Deluxe rooms with mezzanine, and Classic and Superior rooms, overlooking the park and the pool.",
          },
          stays: ["familiare-deluxe", "classic-superior"],
        },
        {
          label: { it: "Nel castello", en: "In the castle" },
          text: {
            it: "Le camere Da Remo, nel cuore della rocca di Monteriggioni, affacciate sulle mura.",
            en: "The Da Remo rooms, in the heart of Monteriggioni's fortress, overlooking the walls.",
          },
          stays: ["camere-nel-castello"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina.webp",
        alt: { it: "La piscina semiolimpionica", en: "The semi-Olympic pool" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Un tuffo dopo Siena.",
        en: "A swim after Siena.",
      },
      text: {
        it: "Una piscina semiolimpionica circondata dal giardino: il posto giusto dopo una giornata in città o una passeggiata nel borgo. Cocktail a bordo vasca, spuntini all'ombra del gazebo del Lounge Bar.",
        en: "A semi-Olympic pool surrounded by the garden: the right place after a day in town or a walk in the village. Cocktails by the pool, snacks in the shade of the Lounge Bar gazebo.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "IL TEMPO IN HOTEL", en: "TIME AT THE HOTEL" },
      title: {
        it: "A tavola, in acqua, al tramonto.",
        en: "At the table, in the water, at sunset.",
      },
      intro: {
        it: "Tutto dentro il parco, a pochi passi dalla camera.",
        en: "All within the park, a few steps from your room.",
      },
      marquee: {
        it: "RISTORANTE · BEAUTY CENTER · LOUNGE BAR · PISCINA · GIARDINO · ",
        en: "RESTAURANT · BEAUTY CENTRE · LOUNGE BAR · POOL · GARDEN · ",
      },
      itemLabel: { it: "IN HOTEL", en: "AT THE HOTEL" },
      ctaLabel: { it: "I ristoranti", en: "The restaurants" },
      ctaHref: "/ristoranti",
      items: [
        {
          title: "La Ducareccia",
          word: { it: "BRACE", en: "EMBERS" },
          meta: { it: "Ristorante dell'hotel", en: "The hotel restaurant" },
          text: {
            it: "La tradizione toscana rielaborata, i prodotti di stagione del senese e Sua Eccellenza la Fiorentina, cotta sul braciere a carbone.",
            en: "Tuscan tradition reinterpreted, seasonal Sienese produce and His Excellency the Fiorentina, cooked over a charcoal brazier.",
          },
          image: "food/fiorentina.webp",
        },
        {
          title: "Beauty Center",
          word: { it: "RELAX", en: "RELAX" },
          meta: { it: "1 ora e 30 in esclusiva · da 30 €", en: "1.5 hours, private · from €30" },
          text: {
            it: "Idromassaggio, sauna e bagno turco riservati solo a voi, per la coppia o la famiglia. Massaggi su prenotazione.",
            en: "Whirlpool, sauna and Turkish bath reserved just for you, as a couple or a family. Massages on request.",
          },
          image: "wellness/vasca.webp",
        },
        {
          title: "Lounge Bar",
          word: { it: "TRAMONTO", en: "SUNSET" },
          meta: { it: "Aperitivo a bordo piscina", en: "Poolside aperitif" },
          text: {
            it: "Ispirato ai disegni di Fantastici: un drink a bordo piscina e i colori di Siena al tramonto sulle colline del Chianti.",
            en: "Inspired by Fantastici's drawings: a drink by the pool and Siena's colours at sunset over the Chianti hills.",
          },
          image: "food/lounge.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "Matrimoni, meeting e la Toscana intorno.",
        en: "Weddings, meetings and the Tuscany around you.",
      },
      items: [
        {
          meta: { it: "Matrimoni e feste", en: "Weddings and parties" },
          title: { it: "Eventi", en: "Events" },
          text: {
            it: "Un pranzo di nozze nelle sale della Ducareccia, un buffet a bordo piscina, una festa al Lounge Bar.",
            en: "A wedding lunch in the Ducareccia halls, a poolside buffet, a party at the Lounge Bar.",
          },
          image: { src: "events/cerimonie-1.webp", alt: { it: "Un tavolo allestito per una cerimonia", en: "A table set for a ceremony" } },
          link: { label: DISCOVER, href: "/meeting-eventi" },
        },
        {
          meta: { it: "Fino a 180 posti", en: "Up to 180 seats" },
          title: { it: "Meeting", en: "Meetings" },
          text: {
            it: "Quattro sale, dalla Fantastici divisibile in quattro alle salette per i piccoli gruppi.",
            en: "Four rooms, from the Fantastici hall, divisible into four, to small rooms for small groups.",
          },
          image: { src: "events/meeting.webp", alt: { it: "La sala meeting", en: "The meeting room" } },
          link: { label: DISCOVER, href: "/meeting-eventi" },
        },
        {
          meta: { it: "Siena · Chianti · Francigena", en: "Siena · Chianti · Francigena" },
          title: { it: "Siena e dintorni", en: "Siena and around" },
          text: {
            it: "Il Palio, le crete, le cantine del Chianti Classico e la Festa Medievale di Monteriggioni.",
            en: "The Palio, the clay hills, the Chianti Classico wineries and the Monteriggioni Medieval Festival.",
          },
          image: { src: "territory/crete.webp", alt: { it: "Le crete senesi", en: "The Sienese clay hills" } },
          link: { label: DISCOVER, href: "/siena-e-dintorni" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Nel cuore della Toscana", en: "Heart of Tuscany" },
      title: {
        it: "Siena da una parte, Firenze dall'altra.",
        en: "Siena on one side, Florence on the other.",
      },
      text: {
        it: "Il borgo di Monteriggioni a due passi, Siena in un quarto d'ora, il Chianti e San Gimignano a mezz'ora, Firenze entro l'ora.",
        en: "Monteriggioni village a stone's throw away, Siena in a quarter of an hour, Chianti and San Gimignano in half an hour, Florence within the hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze dall'Hotel Il Piccolo Castello",
        en: "Stylised map of distances from Hotel Il Piccolo Castello",
      },
      gridLabels: { x: "43°23′ N", y: "11°11′ E" },
      homeLabel: { lines: ["Il Piccolo", "Castello"], sub: "Monteriggioni" },
      rings: [
        { km: 5, label: "5 km" },
        { km: 20, label: "20 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Il Piccolo Castello",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "2 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "10 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "15 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "20 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "28 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "45 km", coordinates: { lat: 43.4014, lng: 10.8608 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "55 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/monteriggioni-notte.webp",
        alt: { it: "Monteriggioni illuminata di notte", en: "Monteriggioni lit up at night" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Monteriggioni.", en: "We look forward to welcoming you." },
      text: {
        it: "Disponibilità e prezzi sono online. Per gruppi, eventi, transfer da aeroporti e stazioni o qualsiasi domanda, scriveteci.",
        en: "Availability and prices are online. For groups, events, transfers from airports and stations or any question, write to us.",
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
      slug: "ristoranti",
      title: { it: "Ristoranti e bar", en: "Restaurants and bar" },
      description: {
        it: "La Ducareccia in hotel e Da Remo nel borgo di Monteriggioni: cucina toscana, Fiorentina alla brace e il Lounge Bar a bordo piscina.",
        en: "La Ducareccia at the hotel and Da Remo in Monteriggioni village: Tuscan cooking, Fiorentina on the grill and the poolside Lounge Bar.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "food/sala.webp", alt: { it: "La sala del ristorante", en: "The restaurant dining room" } },
          labelParts: [
            { it: "Ristoranti", en: "Restaurants" },
            { it: "Hotel e borgo", en: "Hotel and village" },
          ],
          titleLines: [
            { it: "Due tavole,", en: "Two tables," },
            { it: "una tradizione", en: "one tradition" },
          ],
          intro: {
            it: "Uno nel parco dell'hotel, l'altro in piazza a Monteriggioni: la cucina senese e del Chianti in due luoghi molto diversi.",
            en: "One in the hotel park, the other on Monteriggioni's square: Sienese and Chianti cooking in two very different places.",
          },
          cta: { label: { it: "I ristoranti", en: "The restaurants" }, href: "#tavole" },
          pillars: [
            { it: "La Ducareccia", en: "La Ducareccia" },
            { it: "Da Remo", en: "Da Remo" },
            { it: "Lounge Bar", en: "Lounge Bar" },
          ],
        },
        {
          type: "chapters",
          id: "tavole",
          kicker: { it: "A tavola", en: "At the table" },
          title: { it: "Dove mangiare", en: "Where to eat" },
          items: [
            {
              word: { it: "Brace", en: "Embers" },
              kicker: { it: "In hotel", en: "At the hotel" },
              title: { it: "Ristorante La Ducareccia", en: "La Ducareccia restaurant" },
              text: {
                it: "Una cucina che rielabora le grandi ricette della tradizione toscana, con prodotti di stagione e ingredienti del territorio senese, in un ambiente elegante. A tavola, Sua Eccellenza la Fiorentina, cotta sul braciere a carbone.",
                en: "Cooking that reinterprets the great recipes of Tuscan tradition, with seasonal produce and Sienese ingredients, in an elegant setting. At the table, His Excellency the Fiorentina, cooked over a charcoal brazier.",
              },
              details: [{ it: "Prenotazioni +39 0577 304116", en: "Reservations +39 0577 304116" }],
              image: { src: "food/brace.webp", alt: { it: "La brace", en: "The grill" } },
              link: { label: { it: "ducareccia.it", en: "ducareccia.it" }, href: "https://www.ducareccia.it" },
            },
            {
              word: { it: "Borgo", en: "Village" },
              kicker: { it: "Nel castello di Monteriggioni", en: "In Monteriggioni castle" },
              title: { it: "Ristorante Da Remo", en: "Da Remo restaurant" },
              text: {
                it: "Un locale del Trecento in pietra e tufo sulla piazza principale del borgo, con il giardino ai piedi delle mura. Pasta fatta in casa, tartufi, cacciagione e Chianina alla griglia sul carbone. Durante la Festa Medievale, menu speciali.",
                en: "A 14th-century stone and tufa dining room on the village's main square, with a garden at the foot of the walls. Homemade pasta, truffles, game and Chianina beef grilled over charcoal. During the Medieval Festival, special menus.",
              },
              details: [
                { it: "Sempre aperto, meglio prenotare", en: "Always open, booking advised" },
                { it: "Prenotazioni +39 0577 304370", en: "Reservations +39 0577 304370" },
              ],
              image: { src: "food/daremo-1.webp", alt: { it: "Da Remo", en: "Da Remo" } },
              link: { label: { it: "ristorantemonteriggioni.it", en: "ristorantemonteriggioni.it" }, href: "https://www.ristorantemonteriggioni.it" },
            },
            {
              word: { it: "Aperitivo", en: "Aperitif" },
              kicker: { it: "A bordo piscina", en: "By the pool" },
              title: { it: "Lounge Bar", en: "Lounge Bar" },
              text: {
                it: "Spuntini serviti a bordo piscina, cocktail all'ombra del gazebo vicino al parco e i colori di Siena al tramonto.",
                en: "Snacks served by the pool, cocktails in the shade of the gazebo by the park, and Siena's colours at sunset.",
              },
              image: { src: "food/lounge.webp", alt: { it: "Il Lounge Bar", en: "The Lounge Bar" } },
            },
          ],
        },
        {
          type: "gallery",
          id: "galleria",
          kicker: { it: "In cucina e in sala", en: "Kitchen and dining room" },
          title: { it: "I sapori del territorio.", en: "The flavours of the land." },
          images: [
            { src: "food/fiorentina.webp", alt: { it: "La Fiorentina", en: "The Fiorentina" } },
            { src: "food/ducareccia-1.webp", alt: { it: "La Ducareccia", en: "La Ducareccia" } },
            { src: "food/ducareccia-2.webp", alt: { it: "Un piatto della Ducareccia", en: "A dish at La Ducareccia" } },
            { src: "food/daremo-2.webp", alt: { it: "Da Remo", en: "Da Remo" } },
            { src: "food/ducareccia-3.webp", alt: { it: "La sala", en: "The dining room" } },
            { src: "food/daremo-3.webp", alt: { it: "Da Remo nel borgo", en: "Da Remo in the village" } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "food/daremo-4.webp", alt: { it: "Da Remo", en: "Da Remo" } },
          kicker: { it: "Prenota un tavolo", en: "Book a table" },
          title: { it: "Vi teniamo un posto.", en: "We'll keep you a seat." },
          text: {
            it: "Per i tavoli scrivete all'hotel o chiamate direttamente il ristorante.",
            en: "For tables, write to the hotel or call the restaurant directly.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "benessere",
      title: { it: "Beauty Center", en: "Beauty Centre" },
      description: {
        it: "Il percorso benessere dell'Hotel Il Piccolo Castello in uso esclusivo: idromassaggio, sauna, bagno turco e massaggi su prenotazione.",
        en: "The private wellness area at Hotel Il Piccolo Castello: whirlpool, sauna, Turkish bath and massages on request.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "wellness/vasca.webp", alt: { it: "La vasca idromassaggio", en: "The whirlpool bath" } },
          labelParts: [
            { it: "Beauty Center", en: "Beauty Centre" },
            { it: "In uso esclusivo", en: "Private use" },
          ],
          titleLines: [
            { it: "Un'ora e mezza", en: "An hour and a half" },
            { it: "tutta per voi", en: "all to yourselves" },
          ],
          intro: {
            it: "Il percorso benessere si prenota solo per la coppia o per la famiglia: nessun altro ospite, il massimo del relax.",
            en: "The wellness area is booked only for a couple or a family: no other guests, maximum relaxation.",
          },
          cta: { label: { it: "Prezzi e massaggi", en: "Prices and massages" }, href: "#percorso" },
          pillars: [
            { it: "Idromassaggio 10 posti", en: "10-seat whirlpool" },
            { it: "Sauna e bagno turco", en: "Sauna and Turkish bath" },
          ],
        },
        {
          type: "facts",
          id: "percorso",
          kicker: { it: "Percorso benessere", en: "Wellness area" },
          title: { it: "Cosa comprende", en: "What's included" },
          text: {
            it: "Salotto, stanza relax, vasca idromassaggio da dieci posti, sauna e bagno turco. Accappatoio, ciabatte e drink di benvenuto compresi.",
            en: "Lounge, relaxation room, ten-seat whirlpool, sauna and Turkish bath. Bathrobe, slippers and welcome drink included.",
          },
          image: { src: "wellness/sauna.webp", alt: { it: "La sauna", en: "The sauna" } },
          items: [
            { label: { it: "Adulti", en: "Adults" }, value: { it: "30 €", en: "€30" }, note: { it: "1 ora e 30, uso esclusivo", en: "1.5 hours, private use" } },
            { label: { it: "Bambini", en: "Children" }, value: { it: "15 €", en: "€15" }, note: { it: "1 ora e 30, uso esclusivo", en: "1.5 hours, private use" } },
            { label: { it: "Massaggio 30 minuti", en: "30-minute massage" }, value: { it: "50 €", en: "€50" }, note: { it: "Su prenotazione", en: "On request" } },
            { label: { it: "Massaggio 50 minuti", en: "50-minute massage" }, value: { it: "75 €", en: "€75" }, note: { it: "Su prenotazione", en: "On request" } },
          ],
        },
        {
          type: "prose",
          id: "massaggi",
          kicker: { it: "Su prenotazione", en: "On request" },
          title: { it: "I massaggi", en: "Massages" },
          paragraphs: [
            {
              it: "Ayurvedico, candle massage, hot stone, bamboo, decontratturante, linfodrenante e aromaterapeutico. Il prezzo dipende dalla durata scelta.",
              en: "Ayurvedic, candle massage, hot stone, bamboo, deep tissue, lymphatic drainage and aromatherapy. The price depends on the length you choose.",
            },
          ],
          image: { src: "wellness/bagno-turco.webp", alt: { it: "Il bagno turco", en: "The Turkish bath" } },
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "wellness/vasca.webp", alt: { it: "Il Beauty Center", en: "The Beauty Centre" } },
          kicker: { it: "Prenota il percorso", en: "Book the wellness area" },
          title: { it: "Scegliete giorno e ora.", en: "Choose the day and time." },
          text: {
            it: "Vi confermiamo la disponibilità del percorso e dei massaggi.",
            en: "We'll confirm availability of the wellness area and massages.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "meeting-eventi",
      title: { it: "Meeting ed eventi", en: "Meetings and events" },
      description: {
        it: "Matrimoni, feste private e congressi all'Hotel Il Piccolo Castello: quattro sale meeting fino a 180 posti, ristorante, piscina e giardino.",
        en: "Weddings, private parties and conferences at Hotel Il Piccolo Castello: four meeting rooms seating up to 180, restaurant, pool and garden.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "events/cerimonie-2.webp", alt: { it: "Una sala allestita per un evento", en: "A room set for an event" } },
          labelParts: [
            { it: "Eventi e matrimoni", en: "Events and weddings" },
            { it: "Meeting", en: "Meetings" },
          ],
          titleLines: [
            { it: "Il vostro giorno,", en: "Your day," },
            { it: "curato nei dettagli", en: "with every detail cared for" },
          ],
          intro: {
            it: "Dal menu personalizzato all'allestimento, fino all'ospitalità per la notte: un evento pensato su misura.",
            en: "From a tailored menu to the setting and overnight hospitality: an event shaped around you.",
          },
          cta: { label: { it: "Le sale", en: "The rooms" }, href: "#sale" },
          pillars: [
            { it: "Quattro sale", en: "Four rooms" },
            { it: "Fino a 180 posti", en: "Up to 180 seats" },
          ],
        },
        {
          type: "chapters",
          id: "eventi",
          kicker: { it: "Eventi", en: "Events" },
          title: { it: "Tre modi di festeggiare", en: "Three ways to celebrate" },
          items: [
            {
              word: { it: "Nozze", en: "Weddings" },
              kicker: { it: "Alla Ducareccia", en: "At La Ducareccia" },
              title: { it: "Il pranzo di matrimonio", en: "The wedding lunch" },
              text: {
                it: "Nelle sale del ristorante, con il giardino all'italiana per le foto e le camere per gli invitati.",
                en: "In the restaurant halls, with the Italian garden for photos and rooms for the guests.",
              },
              image: { src: "events/cerimonie-3.webp", alt: { it: "Tavola nuziale", en: "Wedding table" } },
            },
            {
              word: { it: "Festa", en: "Party" },
              kicker: { it: "A bordo piscina", en: "By the pool" },
              title: { it: "Buffet e feste private", en: "Buffets and private parties" },
              text: {
                it: "Un buffet a bordo piscina o al Lounge Bar, per una festa fra amici o un compleanno.",
                en: "A buffet by the pool or at the Lounge Bar, for a party with friends or a birthday.",
              },
              image: { src: "events/cerimonie-4.webp", alt: { it: "Buffet", en: "Buffet" } },
            },
            {
              word: { it: "Lavoro", en: "Business" },
              kicker: { it: "Nel Giardino d'Inverno", en: "In the Winter Garden" },
              title: { it: "Incontri aziendali", en: "Company meetings" },
              text: {
                it: "Riunioni, convention e cene aziendali, con il servizio dello staff dell'hotel.",
                en: "Meetings, conventions and company dinners, served by the hotel staff.",
              },
              image: { src: "events/meeting.webp", alt: { it: "Sala meeting", en: "Meeting room" } },
            },
          ],
        },
        {
          type: "facts",
          id: "sale",
          kicker: { it: "Sale meeting", en: "Meeting rooms" },
          title: { it: "Le sale", en: "The rooms" },
          text: {
            it: "Tutte dedicate ad artisti senesi. Allestimenti, attrezzature e coffee break su richiesta.",
            en: "All named after Sienese artists. Layouts, equipment and coffee breaks on request.",
          },
          image: { src: "events/cerimonie-5.webp", alt: { it: "Una sala allestita", en: "A prepared room" } },
          items: [
            { label: { it: "Sala Fantastici", en: "Fantastici hall" }, value: { it: "180 posti", en: "180 seats" }, note: { it: "200 m², divisibile in quattro", en: "200 m², divisible into four" } },
            { label: { it: "Sala Martini", en: "Martini room" }, value: { it: "35 persone", en: "35 people" }, note: { it: "50 m²", en: "50 m²" } },
            { label: { it: "Sala Lorenzetti", en: "Lorenzetti room" }, value: { it: "25 persone", en: "25 people" }, note: { it: "50 m²", en: "50 m²" } },
            { label: { it: "Sala Beccafumi", en: "Beccafumi room" }, value: { it: "20 persone", en: "20 people" }, note: { it: "30 m²", en: "30 m²" } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "events/cerimonie-1.webp", alt: { it: "Un evento", en: "An event" } },
          kicker: { it: "Organizziamo insieme", en: "Let's plan it together" },
          title: { it: "Raccontateci il vostro evento.", en: "Tell us about your event." },
          text: {
            it: "Data, numero di ospiti e tipo di evento: vi mandiamo una proposta.",
            en: "Date, number of guests and type of event: we'll send you a proposal.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "attivita",
      title: { it: "Attività", en: "Activities" },
      description: {
        it: "Quad, kart, trekking sulla Via Francigena, auto d'epoca, Vespa, cavallo, tiro con l'arco, mongolfiera e mountain bike intorno a Monteriggioni.",
        en: "Quads, karting, Via Francigena trekking, vintage cars, Vespa, horse riding, archery, hot-air ballooning and mountain biking around Monteriggioni.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "compact",
          image: { src: "estate/monteriggioni-campi.webp", alt: { it: "La campagna di Monteriggioni", en: "The Monteriggioni countryside" } },
          labelParts: [
            { it: "Attività", en: "Activities" },
            { it: "Su prenotazione", en: "On request" },
          ],
          titleLines: [
            { it: "La Toscana,", en: "Tuscany," },
            { it: "da muoversi", en: "on the move" },
          ],
          intro: {
            it: "Nove modi per scoprire la campagna senese, organizzati con partner di fiducia.",
            en: "Nine ways to discover the Sienese countryside, organised with trusted partners.",
          },
          cta: { label: { it: "Le attività", en: "The activities" }, href: "#elenco" },
          pillars: [
            { it: "Transfer su richiesta", en: "Transfers on request" },
          ],
        },
        {
          type: "cards",
          id: "elenco",
          kicker: { it: "Le attività", en: "The activities" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Si prenotano in reception. Prezzi e disponibilità su richiesta.",
            en: "Book at reception. Prices and availability on request.",
          },
          items: [
            { meta: { it: "A piedi", en: "On foot" }, title: { it: "Trekking sulla Via Francigena", en: "Via Francigena trekking" }, text: { it: "L'antica via dei pellegrini passa proprio da Monteriggioni.", en: "The ancient pilgrims' route runs right through Monteriggioni." } },
            { meta: { it: "In sella", en: "In the saddle" }, title: { it: "Passeggiate a cavallo", en: "Horse riding" }, text: { it: "Dalle scuderie a otto chilometri dall'hotel, fra boschi e strade bianche.", en: "From stables eight kilometres from the hotel, through woods and white roads." } },
            { meta: { it: "Con Gippo Bike", en: "With Gippo Bike" }, title: { it: "Mountain bike", en: "Mountain biking" }, text: { it: "Percorsi fra le colline senesi, per ogni livello.", en: "Routes through the Sienese hills, for every level." } },
            { meta: { it: "Su due ruote", en: "On two wheels" }, title: { it: "Tour in Vespa", en: "Vespa tours" }, text: { it: "Il Chianti come in un film, sulle strade panoramiche.", en: "Chianti like in a film, on the scenic roads." } },
            { meta: { it: "Su quattro ruote", en: "On four wheels" }, title: { it: "Auto d'epoca", en: "Vintage cars" }, text: { it: "Al volante di una classica fra borghi e vigne.", en: "At the wheel of a classic among villages and vineyards." } },
            { meta: { it: "Dall'alto", en: "From above" }, title: { it: "Mongolfiera", en: "Hot-air balloon" }, text: { it: "La Toscana all'alba, in silenzio.", en: "Tuscany at dawn, in silence." } },
            { meta: { it: "Fuoristrada", en: "Off-road" }, title: { it: "Quad", en: "Quads" }, text: { it: "Strade bianche e sterrati in quad.", en: "White roads and dirt tracks by quad." } },
            { meta: { it: "In pista", en: "On the track" }, title: { it: "Kart", en: "Karting" }, text: { it: "Un pomeriggio di velocità per grandi e ragazzi.", en: "An afternoon of speed for adults and teens." } },
            { meta: { it: "Minimo 10 persone", en: "Minimum 10 people" }, title: { it: "Tiro con l'arco", en: "Archery" }, text: { it: "Ideale per gruppi e team building.", en: "Ideal for groups and team building." } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/monteriggioni.webp", alt: { it: "Monteriggioni", en: "Monteriggioni" } },
          kicker: { it: "Prenota un'attività", en: "Book an activity" },
          title: { it: "Ci pensiamo noi.", en: "We'll take care of it." },
          text: {
            it: "Diteci cosa vi interessa e quando: organizziamo tutto, anche il transfer.",
            en: "Tell us what you'd like and when: we'll organise everything, transfer included.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "siena-e-dintorni",
      title: { it: "Siena e dintorni", en: "Siena and around" },
      description: {
        it: "Cosa vedere intorno all'Hotel Il Piccolo Castello: Siena e il Palio, il Chianti Classico, la Via Francigena e la Festa Medievale di Monteriggioni.",
        en: "What to see around Hotel Il Piccolo Castello: Siena and the Palio, Chianti Classico, the Via Francigena and the Monteriggioni Medieval Festival.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "territory/crete-casale.webp", alt: { it: "Un casale nelle crete senesi", en: "A farmhouse in the Sienese clay hills" } },
          labelParts: [
            { it: "Siena e dintorni", en: "Siena and around" },
            { it: "Itinerari", en: "Itineraries" },
          ],
          titleLines: [
            { it: "Le meraviglie", en: "The wonders" },
            { it: "del territorio", en: "of the land" },
          ],
          intro: {
            it: "Borghi medievali, i tesori d'arte di Siena, un'osteria tipica, un bicchiere di Chianti Classico in cantina.",
            en: "Medieval villages, Siena's art treasures, a traditional osteria, a glass of Chianti Classico at the winery.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Siena 15 km", en: "Siena 15 km" },
            { it: "Chianti 20 km", en: "Chianti 20 km" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Palio", en: "Palio" },
              kicker: { it: "A 15 km", en: "15 km away" },
              title: { it: "Siena", en: "Siena" },
              text: {
                it: "Piazza del Campo, il Duomo, il museo di Santa Maria della Scala e il Palio, il 2 luglio e il 16 agosto.",
                en: "Piazza del Campo, the Cathedral, the Santa Maria della Scala museum and the Palio, on 2 July and 16 August.",
              },
              image: { src: "territory/tramonto.webp", alt: { it: "Tramonto sulle colline senesi", en: "Sunset over the Sienese hills" } },
            },
            {
              word: { it: "Medioevo", en: "Middle Ages" },
              kicker: { it: "A 2 km", en: "2 km away" },
              title: { it: "Monteriggioni e la Via Francigena", en: "Monteriggioni and the Via Francigena" },
              text: {
                it: "Le mura con le quattordici torri, la Festa Medievale d'estate e l'antica strada dei pellegrini da percorrere a piedi.",
                en: "The walls with their fourteen towers, the summer Medieval Festival and the ancient pilgrims' road to walk.",
              },
              image: { src: "estate/monteriggioni.webp", alt: { it: "Monteriggioni", en: "Monteriggioni" } },
            },
            {
              word: { it: "Vino", en: "Wine" },
              kicker: { it: "Da 20 km", en: "From 20 km" },
              title: { it: "Il Chianti Classico", en: "Chianti Classico" },
              text: {
                it: "Castellina, Radda e Gaiole: castelli, borghi in pietra e cantine dove degustare il DOCG.",
                en: "Castellina, Radda and Gaiole: castles, stone villages and wineries to taste the DOCG.",
              },
              image: { src: "territory/chianti.webp", alt: { it: "Il Chianti", en: "Chianti" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "territory/crete.webp", alt: { it: "Le crete senesi", en: "The Sienese clay hills" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aiutiamo con gli itinerari.", en: "We'll help with itineraries." },
          text: {
            it: "Su richiesta organizziamo anche il transfer da aeroporti e stazioni.",
            en: "On request we also arrange transfers from airports and stations.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  /* ================================================================ */
  /* Camere                                                            */
  /* ================================================================ */

  accommodations: [
    {
      slug: "familiare-deluxe",
      name: "Familiare Deluxe",
      category: { it: "OTTO CAMERE", en: "EIGHT ROOMS" },
      size: "8",
      guests: "2–4",
      layout: { it: "Con soppalco · vista piscina", en: "With mezzanine · pool view" },
      blurb: {
        it: "Con il soppalco per una zona notte in più, e l'accesso alla piscina a sfioro.",
        en: "With a mezzanine for extra sleeping space, and access to the infinity pool.",
      },
      description: {
        it: "Otto camere finemente decorate, con motivi geometrici e i colori della campagna senese, l'ocra e il verde. Un elegante soppalco crea una zona notte in più; la versione vista piscina ha l'accesso diretto alla piscina a sfioro.",
        en: "Eight finely decorated rooms, with geometric motifs and the colours of the Sienese countryside, ochre and green. An elegant mezzanine creates extra sleeping space; the pool-view version has direct access to the infinity pool.",
      },
      cover: "stays/familiare-deluxe-01.webp",
      detail: "stays/familiare-deluxe-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "familiare",
          name: "Familiare Deluxe",
          layout: { it: "Soppalco · accesso alla piscina", en: "Mezzanine · pool access" },
          text: {
            it: "Per famiglie o piccoli gruppi: la zona notte sul soppalco lascia spazio a tutti.",
            en: "For families or small groups: the mezzanine sleeping area leaves room for everyone.",
          },
          images: photos("familiare-deluxe", 5),
        },
      ],
    },
    {
      slug: "classic-superior",
      name: "Classic & Superior",
      category: { it: "TRENTAQUATTRO CAMERE", en: "THIRTY-FOUR ROOMS" },
      size: "34",
      guests: "2",
      layout: { it: "Superior con accesso al cortile della piscina", en: "Superior with access to the pool courtyard" },
      blurb: {
        it: "Ampie e luminose, nei toni del rosa antico e del celeste.",
        en: "Spacious and bright, in shades of antique rose and pale blue.",
      },
      description: {
        it: "Trentaquattro camere che uniscono lo stile neoclassico dell'hotel alle tinte riposanti del rosa antico e del celeste, con decori a motivi geometrici. Le Superior hanno l'accesso diretto al cortile interno con la piscina a sfioro: le consigliamo a chi vuole vivere a pieno gli spazi dell'hotel.",
        en: "Thirty-four rooms combining the hotel's neoclassical style with soothing antique rose and pale blue tones and geometric decorations. The Superior rooms open directly onto the inner courtyard with the infinity pool: we recommend them to those who want to make the most of the hotel.",
      },
      cover: "stays/classic-superior-01.webp",
      detail: "stays/classic-superior-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "classic",
          name: "Classic",
          layout: { it: "Camera doppia", en: "Double room" },
          text: {
            it: "Ampia e luminosa, con i decori neoclassici dell'hotel.",
            en: "Spacious and bright, with the hotel's neoclassical decoration.",
          },
          images: photos("classic-superior", 3),
        },
        {
          slug: "superior",
          name: "Superior",
          layout: { it: "Accesso diretto al cortile della piscina", en: "Direct access to the pool courtyard" },
          text: {
            it: "Come la Classic, con in più la porta sul cortile interno e la piscina a sfioro.",
            en: "Like the Classic, plus a door onto the inner courtyard and the infinity pool.",
          },
          images: ["stays/classic-superior-04.webp", "stays/classic-superior-05.webp", "stays/classic-superior-06.webp"],
        },
      ],
    },
    {
      slug: "camere-nel-castello",
      name: "Camere nel Castello",
      category: { it: "DENTRO LE MURA", en: "INSIDE THE WALLS" },
      size: "—",
      guests: "2",
      layout: { it: "Nel borgo di Monteriggioni", en: "In Monteriggioni village" },
      blurb: {
        it: "Dormire dentro la rocca di Monteriggioni, affacciati sulle mura.",
        en: "Sleep inside Monteriggioni's fortress, overlooking the walls.",
      },
      description: {
        it: "Le camere Da Remo, nel centro della rocca di Monteriggioni: pietra, legno e tufo, arredi in stile rustico e la vista sulle mura della fortezza medievale. Il fascino del borgo con i comfort di un quattro stelle.",
        en: "The Da Remo rooms, in the centre of Monteriggioni's fortress: stone, wood and tufa, rustic furnishings and a view of the medieval walls. The charm of the village with the comforts of a four-star hotel.",
      },
      cover: "stays/camere-nel-castello-01.webp",
      detail: "stays/camere-nel-castello-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "da-remo",
          name: "Camere Da Remo",
          layout: { it: "Piazza di Monteriggioni", en: "Monteriggioni square" },
          text: {
            it: "Sopra il Ristorante Da Remo, nella piazza principale del borgo.",
            en: "Above the Da Remo restaurant, on the village's main square.",
          },
          images: photos("camere-nel-castello", 5),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutte le camere", en: "All rooms" },
    kicker: { it: "La vostra camera al Piccolo Castello", en: "Your room at Il Piccolo Castello" },
    sizeLabel: { it: "Camere", en: "Rooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Le camere", en: "The rooms" },
    unitsLabel: { it: "Le tipologie", en: "Room types" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni sulla camera {name} dell'Hotel Il Piccolo Castello.",
      en: "Hello, I'd like some information about the {name} room at Hotel Il Piccolo Castello.",
    },
    amenitiesLabel: { it: "In tutte le camere", en: "In every room" },
    ctaTitle: { it: "Qualche giorno sotto le mura.", en: "A few days below the walls." },
    ctaLabel: EMAIL_LABEL,
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

  footer: { copyright: "© 2026 Hotel Il Piccolo Castello" },

  legalPages: defaultLegalPages({
    name: "Hotel Il Piccolo Castello",
    address: "Strada Provinciale Colligiana 8, 53035 Monteriggioni (SI)",
    email: "info@ilpiccolocastello.com",
  }),
};

export default site;
