/**
 * VILLA LECCHI
 * ============
 *
 * Anteprima di redesign con i contenuti pubblici di villalecchi.com (pagine
 * IT, testi riscritti e riorganizzati): hotel 4 stelle in albergo diffuso a
 * Lecchi, Poggibonsi, con undici tipologie di camera in tre edifici, Bio Spa,
 * due piscine, ristorante e cerimonie.
 *
 *   Camere /#camere (Limonaia, Fattoria, Villa Principale)
 *   Spa e piscine /spa · Ristorante /ristorante · Cerimonie /cerimonie
 *   Territorio /territorio
 *
 * DA VERIFICARE COL CLIENTE
 *  - CIN: non pubblicato sul sito.
 *  - Prenotazione: motore SimpleBooking (hotel 6508). Il collegamento diretto
 *    a una singola camera non è pubblico, quindi un solo "Prenota".
 *  - Telefoni: il sito pubblica solo i fissi (hotel e ristorante), nessun
 *    WhatsApp: i pulsanti "WhatsApp" aprono wa.me sul fisso e vanno sostituiti
 *    con un cellulare o tolti.
 *  - Superfici: dalle schede delle singole camere (la tabella comparativa del
 *    sito riporta valori leggermente diversi).
 *  - Distanze del territorio: Siena 15 km e Firenze 45 km dal sito; le altre
 *    sono stradali indicative.
 *  - Recensioni: citate testualmente da Google (come mostrate sul sito
 *    tramite Trustindex), accorciate e tradotte.
 *  - Coordinate: dal sito (N 43°26'13,5" E 11°11'12,6").
 *  - Informative: quelle del sito (form di contatto, newsletter) sono più
 *    ricche di quelle di partenza; da riscrivere con il cliente.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const BOOKING = "https://www.simplebooking.it/ibe2/hotel/6508?lang=IT&cur=EUR";

/** Le foto di una camera: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const AC: Localized = { it: "Aria condizionata", en: "Air conditioning" };
const WIFI: Localized = { it: "Wi-Fi veloce gratuito", en: "Free high-speed Wi-Fi" };
const MINIBAR: Localized = { it: "Minibar e cassaforte", en: "Minibar and safe" };
const TV: Localized = { it: "TV 43\" con canali stranieri", en: "43\" TV with international channels" };
const TV65: Localized = { it: "TV 65\" con canali stranieri", en: "65\" TV with international channels" };
const SPA: Localized = { it: "Accesso alla Bio Spa", en: "Access to the Bio Spa" };
const VIEW: Localized = { it: "Finestra panoramica sul Chianti", en: "Panoramic window over Chianti" };
const CANOPY: Localized = { it: "Letto a baldacchino", en: "Canopy bed" };
const CHROMO: Localized = { it: "Doccia cromoterapica", en: "Chromotherapy shower" };
const LIVING: Localized = { it: "Zona salotto", en: "Sitting area" };

const BASE = [AC, WIFI, MINIBAR, TV, SPA];

const site: SiteConfig = {
  brand: {
    id: "villa-lecchi",
    prefix: "Hotel",
    name: "Villa Lecchi",
    logo: "logo.svg",
  },

  contact: {
    phone: "390577930090",
    phoneDisplay: "+39 0577 930090",
    phoneAlt: { number: "390577930885", display: "+39 0577 930885 (ristorante)" },
    email: "booking@villalecchi.com",
    address: ["Località Lecchi, Staggia Senese", "53036 Poggibonsi (SI)"],
    vat: "00800600520",
    coordinates: { lat: 43.43708, lng: 11.18683 },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/villa_lecchi_official/" },
      { label: "Facebook", href: "https://www.facebook.com/villalecchi/" },
      {
        label: "Tripadvisor",
        href: "https://www.tripadvisor.it/Hotel_Review-g644282-d233502-Reviews-Villa_Lecchi-Poggibonsi_Tuscany.html",
      },
    ],
  },

  seo: {
    domain: "https://www.villalecchi.com",
    title: {
      it: "Hotel Villa Lecchi | 4 stelle con spa nel Chianti, vicino a Siena",
      en: "Hotel Villa Lecchi | 4-star hotel with spa in Chianti, near Siena",
    },
    description: {
      it: "Albergo diffuso 4 stelle in una villa d'epoca a Poggibonsi: trentasette camere, Bio Spa, due piscine e ristorante, a quindici chilometri da Siena.",
      en: "A 4-star hotel in a period villa near Poggibonsi: thirty-seven rooms, Bio Spa, two pools and a restaurant, fifteen kilometres from Siena.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    { href: "/#camere", label: { it: "Camere", en: "Rooms" } },
    { page: "spa", label: { it: "Spa e piscine", en: "Spa and pools" } },
    { page: "ristorante", label: { it: "Ristorante", en: "Restaurant" } },
    { page: "cerimonie", label: { it: "Cerimonie", en: "Celebrations" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
  ],

  headerCta: { it: "Verifica disponibilità", en: "Check availability" },

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
          it: "Villa Lecchi e la piscina tra i pini, al tramonto sulle colline del Chianti",
          en: "Villa Lecchi and its pool among the pines at sunset over the Chianti hills",
        },
      },
      labelParts: [
        { it: "Poggibonsi · Chianti senese", en: "Poggibonsi · Chianti Senese" },
        { it: "Hotel 4 stelle con spa", en: "4-star hotel with spa" },
      ],
      titleLines: [
        { it: "Una villa d'epoca", en: "A period villa" },
        { it: "sulle colline del Chianti.", en: "on the Chianti hills." },
      ],
      intro: {
        it: "Trentasette camere in tre antichi edifici, la Bio Spa, due piscine e un ristorante con le verdure dell'orto. Siena a quindici chilometri.",
        en: "Thirty-seven rooms in three historic buildings, a Bio Spa, two pools and a restaurant serving vegetables from our garden. Siena fifteen kilometres away.",
      },
      cta: {
        label: { it: "Scopri le camere", en: "See the rooms" },
        href: "#camere",
      },
      pillars: [
        { it: "37 camere", en: "37 rooms" },
        { it: "Bio Spa e due piscine", en: "Bio Spa and two pools" },
        { it: "Siena 15 km", en: "Siena 15 km" },
      ],
    },

    {
      type: "story",
      id: "villa",
      number: "37",
      numberLabel: { it: "CAMERE IN TRE EDIFICI", en: "ROOMS IN THREE BUILDINGS" },
      ghost: "LECCHI",
      titleLines: [
        { it: "La villa, la fattoria,", en: "The villa, the farmhouse," },
        { it: "la limonaia:", en: "the lemon house:" },
      ],
      titleEmphasis: { it: "un albergo diffuso.", en: "one scattered hotel." },
      mainImage: {
        src: "estate/villa.webp",
        alt: { it: "La villa gialla con la scala e la terrazza", en: "The yellow villa with its staircase and terrace" },
        caption: {
          it: "La villa principale, con le sue due torri",
          en: "The main villa, with its two towers",
        },
      },
      aerialImage: {
        src: "estate/torre.webp",
        alt: { it: "La torre della villa", en: "The villa's tower" },
        badge: "43°26′ N · 11°11′ E",
      },
      manifesto: {
        label: { it: "UN SOGGIORNO SU MISURA", en: "A STAY MADE TO MEASURE" },
        text: {
          it: "Villa Lecchi è una residenza d'epoca del Settecento con due torri e un belvedere sulle colline di Poggibonsi e del Chianti. Le camere stanno in tre edifici: la villa, con affreschi e moquette, la fattoria, bianca e rustica, e la limonaia, rinnovata nel 2025. Con il servizio di un quattro stelle e una Bio Spa tutta per gli ospiti, ognuno trova la sua dimensione: la coppia in fuga romantica, la famiglia, chi cerca un weekend lontano dalla città.",
          en: "Villa Lecchi is an 18th-century period residence with two towers and a belvedere over the hills of Poggibonsi and Chianti. The rooms are spread over three buildings: the villa, with frescoes and carpeted floors, the white, rustic farmhouse, and the lemon house, renovated in 2025. With four-star service and a Bio Spa reserved for guests, everyone finds their own setting: couples on a romantic escape, families, anyone after a weekend away from the city.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "camere",
      kicker: { it: "Dormire a Villa Lecchi", en: "Stay at Villa Lecchi" },
      title: {
        it: "Undici tipi di camera, tre edifici.",
        en: "Eleven room types, three buildings.",
      },
      text: {
        it: "Dalla singola della limonaia alla Tower Suite nella torre della villa: scegliete l'edificio, poi la camera.",
        en: "From the single room in the lemon house to the Tower Suite in the villa's tower: choose the building, then the room.",
      },
      tabs: [
        {
          label: { it: "Villa Principale", en: "Main Villa" },
          text: {
            it: "Sei camere nella villa: affreschi, tappeti e le suite Versace, fra cui la Tower Suite nella torre.",
            en: "Six rooms in the villa: frescoes, rugs and the Versace suites, including the Tower Suite in the tower.",
          },
          stays: [
            "superior-matrimoniale",
            "superior-tripla",
            "superior-accessibile",
            "jr-suite",
            "king-suite",
            "tower-suite",
          ],
        },
        {
          label: { it: "Fattoria", en: "Farmhouse" },
          text: {
            it: "Camere ampie e luminose con travi a vista, sulle vigne e le torri di San Gimignano.",
            en: "Spacious, bright rooms with exposed beams, looking over the vines and the towers of San Gimignano.",
          },
          stays: ["deluxe-matrimoniale", "deluxe-tripla"],
        },
        {
          label: { it: "Limonaia", en: "Lemon house" },
          text: {
            it: "Camere rinnovate nel 2025, con parquet e grandi finestre sul Chianti.",
            en: "Rooms renovated in 2025, with parquet floors and big windows over Chianti.",
          },
          stays: ["comfort-singola", "comfort-matrimoniale", "comfort-tripla"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina.webp",
        alt: {
          it: "La piscina all'aperto con i lettini e il panorama sulle colline",
          en: "The outdoor pool with sunloungers and a view over the hills",
        },
      },
      kicker: { it: "Le piscine", en: "The pools" },
      title: {
        it: "Una fuori, una dentro, entrambe con vista sul verde.",
        en: "One outside, one inside, both overlooking the green.",
      },
      text: {
        it: "All'aperto, un tuffo o i giochi dei bambini nelle ore calde, con i lettini sotto i pini. Dentro, nella Bio Spa, la vasca idromassaggio riscaldata a 37 gradi, con una parete di vetro sul bosco.",
        en: "Outside, a dip or the children's games in the hottest hours, with loungers under the pines. Inside, in the Bio Spa, the whirlpool heated to 37 degrees, with a glass wall onto the woods.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "A VILLA LECCHI", en: "AT VILLA LECCHI" },
      title: {
        it: "Il tempo lento del Chianti.",
        en: "The slow time of Chianti.",
      },
      intro: {
        it: "Benessere, vino e tramonti, senza uscire dalla tenuta.",
        en: "Wellness, wine and sunsets, without leaving the estate.",
      },
      marquee: {
        it: "SPA · HAMMAM · CANTINA · TRAMONTO · BELVEDERE · ",
        en: "SPA · HAMMAM · CELLAR · SUNSET · BELVEDERE · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Spa e piscine", en: "Spa and pools" },
      ctaHref: "/spa",
      items: [
        {
          title: "Bio Spa",
          word: { it: "BENESSERE", en: "WELLNESS" },
          meta: { it: "Per gli ospiti dell'hotel", en: "For hotel guests" },
          text: {
            it: "Hammam, doccia emozionale, vasca idromassaggio a 37 gradi e solarium, in un bosco secolare. Massaggi con olio d'oliva toscano biologico.",
            en: "Hammam, emotional shower, whirlpool at 37 degrees and solarium, in an old-growth wood. Massages with organic Tuscan olive oil.",
          },
          image: "spa/piscina-interna.webp",
        },
        {
          title: "Cantine e degustazioni",
          word: { it: "VINO", en: "WINE" },
          meta: { it: "Su richiesta", en: "On request" },
          text: {
            it: "Il personale organizza visite guidate alle cantine vicine, degustazioni e light lunch con i produttori del Chianti.",
            en: "Our staff arranges guided visits to nearby wineries, tastings and light lunches with Chianti producers.",
          },
          image: "food/vino.webp",
        },
        {
          title: "Aperitivo al belvedere",
          word: { it: "TRAMONTO", en: "SUNSET" },
          meta: { it: "In terrazza", en: "On the terrace" },
          text: {
            it: "La terrazza guarda a ovest: il sole scende sulle colline e sulle torri di San Gimignano.",
            en: "The terrace faces west: the sun sets over the hills and the towers of San Gimignano.",
          },
          image: "estate/terrazza-tramonto.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre la camera", en: "Beyond your room" },
      title: {
        it: "La spa, il ristorante, le grandi occasioni.",
        en: "The spa, the restaurant, the big occasions.",
      },
      items: [
        {
          meta: { it: "Hammam · idromassaggio · solarium", en: "Hammam · whirlpool · solarium" },
          title: { it: "Spa e piscine", en: "Spa and pools" },
          text: {
            it: "Il percorso della Bio Spa e la piscina all'aperto, fra i pini e le colline.",
            en: "The Bio Spa circuit and the outdoor pool, among the pines and hills.",
          },
          image: { src: "spa/idromassaggio.webp", alt: { it: "La vasca idromassaggio della spa", en: "The spa whirlpool" } },
          link: { label: DISCOVER, href: "/spa" },
        },
        {
          meta: { it: "Cucina toscana · ingredienti dell'orto", en: "Tuscan cuisine · garden ingredients" },
          title: { it: "Ristorante", en: "Restaurant" },
          text: {
            it: "Gli chef Filippo e Saverio, padre e figlio, e una cucina di tradizione con un tocco moderno.",
            en: "Chefs Filippo and Saverio, father and son, and a traditional kitchen with a modern touch.",
          },
          image: { src: "food/piatto.webp", alt: { it: "Un piatto del ristorante", en: "A dish from the restaurant" } },
          link: { label: DISCOVER, href: "/ristorante" },
        },
        {
          meta: { it: "Matrimoni · compleanni · lauree", en: "Weddings · birthdays · graduations" },
          title: { it: "Cerimonie", en: "Celebrations" },
          text: {
            it: "Il giardino, la terrazza e le sale della villa per i giorni che si ricordano.",
            en: "The garden, the terrace and the villa's rooms for the days you remember.",
          },
          image: { src: "events/banchetto.webp", alt: { it: "Banchetto nel giardino", en: "Banquet in the garden" } },
          link: { label: DISCOVER, href: "/cerimonie" },
        },
      ],
    },

    {
      type: "reviews",
      id: "ospiti",
      kicker: { it: "Dicono di noi", en: "What guests say" },
      title: { it: "Chi viene, se ne ricorda.", en: "Those who come remember it." },
      /* Recensioni Google riprese dal sito villalecchi.com (Trustindex),
         accorciate; la seconda è tradotta dal francese. */
      items: [
        {
          source: "Google",
          quote: {
            it: "Abbiamo passato un periodo bellissimo. Il posto più rilassante e preferito di tutta la nostra vacanza. Il ristorante era fenomenale.",
            en: "We had the most wonderful time here. The most relaxing, and favorite spot of our vacation by far. The restaurant was phenomenal as well.",
          },
          author: "Audrey",
          date: { it: "Settembre 2025", en: "September 2025" },
        },
        {
          source: "Google",
          quote: {
            it: "Un soggiorno eccellente a Villa Lecchi: l'accoglienza calorosa, la vista a 360° sulle colline toscane e la cucina deliziosa. L'impressione di essere in un piccolo paradiso, vicino a Siena e a piccole città medievali da visitare.",
            en: "We had an excellent stay at Villa Lecchi, for the warm welcome, the 360° view over the Tuscan hills and the delicious cuisine. The feeling of being in a little paradise, close to Siena and to small medieval towns to visit.",
          },
          author: "Eva",
          date: { it: "Agosto 2025", en: "August 2025" },
        },
        {
          source: "Google",
          quote: {
            it: "Posto incantevole immerso nel verde della campagna toscana, con un panorama stupendo. Piscina all'aperto molto bella, colazione abbondante e ristorante all'altezza delle aspettative. Personale gentilissimo e sempre disponibile.",
            en: "An enchanting spot set in the green of the Tuscan countryside with a stunning view. Very nice outdoor pool, a generous breakfast and a restaurant that lives up to expectations. Very kind staff, always available.",
          },
          author: "Monica",
          date: { it: "Agosto 2025", en: "August 2025" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Tra Siena e Firenze", en: "Between Siena and Florence" },
      title: {
        it: "Sulla Cassia, nel cuore del Chianti senese.",
        en: "On the Via Cassia, in the heart of Chianti Senese.",
      },
      text: {
        it: "Siena a quindici chilometri, Firenze a quarantacinque, San Gimignano e Monteriggioni a un quarto d'ora.",
        en: "Siena fifteen kilometres away, Florence forty-five, San Gimignano and Monteriggioni a quarter of an hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Villa Lecchi",
        en: "Stylised map of distances from Villa Lecchi",
      },
      gridLabels: { x: "43°26′ N", y: "11°11′ E" },
      homeLabel: { lines: ["Villa", "Lecchi"], sub: "Poggibonsi" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Villa Lecchi",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "8 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "10 km", coordinates: { lat: 43.3906, lng: 11.2236 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "15 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "15 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "18 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "40 km", coordinates: { lat: 43.4018, lng: 10.8604 } },
        { id: "greve", name: { it: "Greve in Chianti", en: "Greve in Chianti" }, distance: "35 km", coordinates: { lat: 43.5848, lng: 11.3164 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "45 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/giardino.webp",
        alt: { it: "La terrazza e il giardino di Villa Lecchi", en: "Villa Lecchi's terrace and garden" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Villa Lecchi.", en: "We look forward to welcoming you." },
      text: {
        it: "Disponibilità e prezzi sono online, in tempo reale. Per un preventivo, un gruppo o una cerimonia scriveteci: vi rispondiamo di persona.",
        en: "Availability and prices are online, live. For a quote, a group or a celebration, write to us: we'll reply in person.",
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
      slug: "spa",
      title: { it: "Spa e piscine", en: "Spa and pools" },
      description: {
        it: "La Bio Spa di Villa Lecchi: hammam, vasca idromassaggio a 37 gradi, docce emozionali, solarium e piscina all'aperto nel Chianti.",
        en: "The Villa Lecchi Bio Spa: hammam, whirlpool at 37 degrees, emotional showers, solarium and an outdoor pool in Chianti.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "spa/piscina-interna.webp",
            alt: { it: "La piscina interna della Bio Spa", en: "The Bio Spa indoor pool" },
          },
          labelParts: [
            { it: "Bio Spa", en: "Bio Spa" },
            { it: "In un bosco secolare", en: "In an old-growth wood" },
          ],
          titleLines: [
            { it: "Relax e bellezza", en: "Relaxation and beauty" },
            { it: "in mezzo al bosco", en: "in the middle of the woods" },
          ],
          intro: {
            it: "Fra Siena e Firenze, con vista sulle torri di San Gimignano: un percorso di benessere da fare da soli o in coppia.",
            en: "Between Siena and Florence, with a view of the towers of San Gimignano: a wellness circuit to enjoy alone or as a couple.",
          },
          cta: { label: { it: "Il percorso", en: "The circuit" }, href: "#percorso" },
          pillars: [
            { it: "Idromassaggio a 37°", en: "Whirlpool at 37°" },
            { it: "Hammam", en: "Hammam" },
            { it: "Piscina all'aperto", en: "Outdoor pool" },
          ],
        },
        {
          type: "chapters",
          id: "percorso",
          kicker: { it: "Il percorso", en: "The circuit" },
          title: { it: "Cosa trovate", en: "What you'll find" },
          items: [
            {
              word: { it: "Acqua", en: "Water" },
              kicker: { it: "Idromassaggio", en: "Whirlpool" },
              title: { it: "La vasca a 37 gradi", en: "The pool at 37 degrees" },
              text: {
                it: "Una vasca idromassaggio in un ambiente rustico ed elegante: una parete di vetro guarda fuori, i muri di pietra ricordano i casali del Chianti.",
                en: "A whirlpool in a rustic, elegant room: a glass wall looks outside, the stone walls recall the farmhouses of Chianti.",
              },
              image: { src: "spa/idromassaggio.webp", alt: { it: "La vasca idromassaggio", en: "The whirlpool" } },
            },
            {
              word: { it: "Vapore", en: "Steam" },
              kicker: { it: "Hammam", en: "Hammam" },
              title: { it: "Tepidarium, calidarium, frigidarium", en: "Tepidarium, calidarium, frigidarium" },
              text: {
                it: "Il bagno turco con essenze balsamiche, dopo le escursioni: l'alternanza dei tre ambienti attiva la circolazione e rigenera la pelle.",
                en: "The Turkish bath with balsamic essences, after a day out: moving between the three rooms stimulates circulation and renews the skin.",
              },
              image: { src: "spa/percorso.webp", alt: { it: "Il percorso della spa", en: "The spa circuit" } },
            },
            {
              word: { it: "Colore", en: "Colour" },
              kicker: { it: "Docce emozionali", en: "Emotional showers" },
              title: { it: "Pioggia tropicale e nebbia fredda", en: "Tropical rain and cold mist" },
              text: {
                it: "L'acqua si combina con aromi e luci colorate: blu per rinfrescare, rosso per dare forza, arancione per l'allegria. Poi i lettini sotto gli alberi.",
                en: "Water combines with scents and coloured light: blue to refresh, red for strength, orange for cheer. Then the loungers under the trees.",
              },
              image: { src: "spa/massaggi.webp", alt: { it: "La stanza dei massaggi", en: "The massage room" } },
            },
            {
              word: { it: "Sole", en: "Sun" },
              kicker: { it: "Solarium e piscina", en: "Solarium and pool" },
              title: { it: "All'aperto, fra i pini", en: "Outdoors, among the pines" },
              text: {
                it: "La piscina esterna sta su un colle fra vigneti e uliveti. Nelle ore più calde, un tuffo; poi una merenda a bordo piscina con un dolce fatto a mano.",
                en: "The outdoor pool stands on a hill among vineyards and olive groves. A dip in the hottest hours, then a poolside snack with a handmade cake.",
              },
              image: { src: "estate/piscina-pini.webp", alt: { it: "La piscina fra i pini", en: "The pool among the pines" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "spa/lettini-arco.webp", alt: { it: "I lettini sotto l'arco", en: "Loungers under the arch" } },
          kicker: { it: "Massaggi e trattamenti", en: "Massages and treatments" },
          title: { it: "Chiedeteci il vostro.", en: "Ask us for yours." },
          text: {
            it: "Massaggi e trattamenti con olio d'oliva toscano biologico si prenotano con la massaggiatrice: scriveteci o chiamateci.",
            en: "Massages and treatments with organic Tuscan olive oil are booked with our therapist: write or call us.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "ristorante",
      title: { it: "Ristorante", en: "Restaurant" },
      description: {
        it: "Il ristorante di Villa Lecchi: cucina toscana di tradizione con ingredienti biologici e a chilometro zero, degustazioni di vino e cooking class.",
        en: "The Villa Lecchi restaurant: traditional Tuscan cuisine with organic, local ingredients, wine tastings and cooking classes.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "food/terrazza-ristorante.webp",
            alt: { it: "I tavoli apparecchiati sulla terrazza", en: "Tables laid on the terrace" },
          },
          labelParts: [
            { it: "Ristorante", en: "Restaurant" },
            { it: "Cucina toscana", en: "Tuscan cuisine" },
          ],
          titleLines: [
            { it: "Cenare tra vigne,", en: "Dining among vines," },
            { it: "ulivi e cipressi", en: "olives and cypresses" },
          ],
          intro: {
            it: "Carne, pesce e piatti vegetariani, con ingredienti per lo più biologici e a chilometro zero, anche dall'orto della villa.",
            en: "Meat, fish and vegetarian dishes, with mostly organic, local ingredients, some from the villa's own garden.",
          },
          cta: { label: { it: "La cucina", en: "The kitchen" }, href: "#cucina" },
          pillars: [
            { it: "Colazione, pranzo e cena", en: "Breakfast, lunch and dinner" },
            { it: "Senza glutine e vegano su richiesta", en: "Gluten-free and vegan on request" },
          ],
        },
        {
          type: "chapters",
          id: "cucina",
          kicker: { it: "La cucina", en: "The kitchen" },
          title: { it: "Dalla colazione alla cena", en: "From breakfast to dinner" },
          items: [
            {
              word: { it: "Tavola", en: "Table" },
              kicker: { it: "Filippo e Saverio, figlio e padre", en: "Filippo and Saverio, son and father" },
              title: { it: "Tradizione con un tocco moderno", en: "Tradition with a modern touch" },
              text: {
                it: "Non solo bistecca alla fiorentina e primi al tartufo: ribollita, pappa al pomodoro, pici cacio e pepe, rivisitati con mano leggera.",
                en: "Not only Florentine steak and truffle pasta: ribollita, tomato bread soup, pici cacio e pepe, lightly reimagined.",
              },
              image: { src: "food/piatto.webp", alt: { it: "Un piatto di carne", en: "A meat dish" } },
            },
            {
              word: { it: "Mattina", en: "Morning" },
              kicker: { it: "Colazione", en: "Breakfast" },
              title: { it: "Marmellate e dolci di Laura", en: "Laura's jams and cakes" },
              text: {
                it: "Si comincia con marmellate e dolci preparati in casa, serviti con vista sulle colline.",
                en: "The day starts with homemade jams and cakes, served with a view of the hills.",
              },
              image: { src: "food/colazione.webp", alt: { it: "Colazione apparecchiata", en: "A laid breakfast table" } },
            },
            {
              word: { it: "Sera", en: "Evening" },
              kicker: { it: "In terrazza", en: "On the terrace" },
              title: { it: "Cena con il tramonto", en: "Dinner at sunset" },
              text: {
                it: "Cena romantica o aperitivo al bar e sulla terrazza, quando la luce scende sulle colline.",
                en: "A romantic dinner or an aperitif at the bar and on the terrace, as the light falls on the hills.",
              },
              image: { src: "food/cena-vista.webp", alt: { it: "Tavolo con vista sulle colline", en: "A table with a view of the hills" } },
            },
          ],
        },
        {
          type: "cards",
          id: "esperienze",
          kicker: { it: "Per i gruppi", en: "For groups" },
          title: { it: "Cantina e cucina, insieme.", en: "Cellar and kitchen, together." },
          text: {
            it: "Su richiesta si organizzano degustazioni e cooking class. Date e costi si concordano con il ristorante.",
            en: "Tastings and cooking classes can be arranged on request. Dates and costs are agreed with the restaurant.",
          },
          items: [
            {
              meta: { it: "Da 10 a 30 persone", en: "10 to 30 people" },
              title: { it: "Degustazione di vini", en: "Wine tasting" },
              text: {
                it: "Si svolge nella cantina di famiglia, che risale al Cinquecento, dove l'atmosfera racconta la maestria dell'assaggio e dell'affinamento.",
                en: "It takes place in the family cellar, dating from the 16th century, where the atmosphere speaks of the craft of tasting and ageing.",
              },
              image: { src: "food/vino.webp", alt: { it: "Un calice di rosso", en: "A glass of red wine" } },
            },
            {
              meta: { it: "Da 10 a 25 persone", en: "10 to 25 people" },
              title: { it: "Cooking class", en: "Cooking class" },
              text: {
                it: "Al fianco degli chef Saverio e Filippo, per imparare a cucinare e impiattare i classici della cucina toscana.",
                en: "Alongside chefs Saverio and Filippo, learning to cook and plate the classics of Tuscan cuisine.",
              },
              image: { src: "food/tavola.webp", alt: { it: "Una tavola apparecchiata", en: "A laid table" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "food/sala.webp", alt: { it: "La sala da pranzo", en: "The dining room" } },
          kicker: { it: "Prenota un tavolo", en: "Book a table" },
          title: { it: "Scriveteci o chiamateci.", en: "Write to us or call." },
          text: {
            it: "Per il ristorante: +39 0577 930885 · ristorante@villalecchi.com.",
            en: "For the restaurant: +39 0577 930885 · ristorante@villalecchi.com.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "cerimonie",
      title: { it: "Cerimonie ed eventi", en: "Celebrations and events" },
      description: {
        it: "Matrimoni, compleanni, anniversari e feste di laurea a Villa Lecchi, fra Firenze e Siena: giardino, terrazza panoramica e sale d'epoca.",
        en: "Weddings, birthdays, anniversaries and graduation parties at Villa Lecchi, between Florence and Siena: garden, panoramic terrace and period rooms.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "events/tavolo-giardino.webp",
            alt: { it: "Un tavolo apparecchiato nel giardino", en: "A table laid in the garden" },
          },
          labelParts: [
            { it: "Cerimonie", en: "Celebrations" },
            { it: "Tra Firenze e Siena", en: "Between Florence and Siena" },
          ],
          titleLines: [
            { it: "I giorni da ricordare,", en: "The days to remember," },
            { it: "in una villa del Settecento", en: "in an 18th-century villa" },
          ],
          intro: {
            it: "Giardino, terrazza belvedere e sale d'epoca: lo staff segue ogni dettaglio, dalla cucina su misura ai fiori.",
            en: "Garden, belvedere terrace and period rooms: our staff looks after every detail, from a tailored menu to the flowers.",
          },
          cta: { label: { it: "Le occasioni", en: "The occasions" }, href: "#occasioni" },
          pillars: [
            { it: "Matrimoni", en: "Weddings" },
            { it: "Compleanni e anniversari", en: "Birthdays and anniversaries" },
            { it: "Feste di laurea", en: "Graduation parties" },
          ],
        },
        {
          type: "cards",
          id: "occasioni",
          kicker: { it: "Le occasioni", en: "The occasions" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Per ogni evento il menù si costruisce insieme agli chef Filippo e Saverio, con i vini della nostra cantina.",
            en: "For every event the menu is built together with chefs Filippo and Saverio, with wines from our cellar.",
          },
          items: [
            {
              title: { it: "Matrimoni", en: "Weddings" },
              text: {
                it: "Cerimonia civile nel giardino panoramico a bordo piscina, aperitivo fra il verde, menù su misura e, il giorno dopo, la spa.",
                en: "A civil ceremony in the panoramic poolside garden, an aperitif among the greenery, a tailored menu and, the day after, the spa.",
              },
              details: [
                { it: "Consigli su wedding planner e musica", en: "Advice on wedding planners and music" },
                { it: "Degustazioni e brindisi a tema", en: "Tastings and themed toasts" },
              ],
              image: { src: "events/giardino.webp", alt: { it: "Il giardino allestito per un evento", en: "The garden set for an event" } },
            },
            {
              title: { it: "Compleanni e anniversari", en: "Birthdays and anniversaries" },
              text: {
                it: "Un cocktail di benvenuto al bar, un menù a tema e i vini della cantina, nelle sale della villa o sulla terrazza belvedere.",
                en: "A welcome cocktail at the bar, a themed menu and wines from the cellar, in the villa's rooms or on the belvedere terrace.",
              },
              details: [{ it: "Aperitivo su misura, su richiesta", en: "Tailored aperitif, on request" }],
              image: { src: "events/terrazza-apparecchiata.webp", alt: { it: "La terrazza apparecchiata", en: "The terrace laid for dinner" } },
            },
            {
              title: { it: "Feste di laurea", en: "Graduation parties" },
              text: {
                it: "Aperitivo di benvenuto, menù a tema nel ristorante e brindisi in giardino o in terrazza al tramonto.",
                en: "A welcome aperitif, a themed menu in the restaurant and a toast in the garden or on the terrace at sunset.",
              },
              details: [{ it: "Percorsi wellness per pochi amici", en: "Wellness circuits for a few friends" }],
              image: { src: "events/sala-eventi.webp", alt: { it: "La sala eventi", en: "The event room" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "events/terrazza-tavoli.webp", alt: { it: "La terrazza con i tavoli", en: "The terrace with its tables" } },
          kicker: { it: "Il vostro evento", en: "Your event" },
          title: { it: "Parliamone insieme.", en: "Let's talk it over." },
          text: {
            it: "Scriveteci la data e il numero di ospiti: vi mandiamo un preventivo.",
            en: "Tell us the date and the number of guests: we'll send you a quote.",
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
        it: "Cosa vedere intorno a Villa Lecchi: Siena, San Gimignano, Volterra, Monteriggioni e i borghi del Chianti.",
        en: "What to see around Villa Lecchi: Siena, San Gimignano, Volterra, Monteriggioni and the Chianti villages.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/borgo.webp", alt: { it: "La campagna intorno a Lecchi", en: "The countryside around Lecchi" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Chianti · Val d'Elsa", en: "Chianti · Val d'Elsa" },
          ],
          titleLines: [
            { it: "Il Chianti senese", en: "Chianti Senese" },
            { it: "a portata di mano", en: "within reach" },
          ],
          intro: {
            it: "Lecchi sta sulla Cassia, fra Siena e Firenze: i borghi medievali, le cantine e le strade del vino sono a pochi minuti.",
            en: "Lecchi sits on the Via Cassia between Siena and Florence: medieval villages, wineries and wine roads are minutes away.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Siena 15 km", en: "Siena 15 km" },
            { it: "Firenze 45 km", en: "Florence 45 km" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Torri", en: "Towers" },
              kicker: { it: "San Gimignano e Volterra", en: "San Gimignano and Volterra" },
              title: { it: "Due perle medievali", en: "Two medieval gems" },
              text: {
                it: "Vie acciottolate, case torri, palazzi nobiliari e artigiani che tramandano i mestieri da generazioni. A San Gimignano, la Torre del Diavolo e il Museo della Tortura.",
                en: "Cobbled lanes, tower houses, noble palaces and craftsmen who hand down their trades. In San Gimignano, the Devil's Tower and the Torture Museum.",
              },
              image: { src: "estate/vigne-tramonto.webp", alt: { it: "Vigne al tramonto", en: "Vineyards at sunset" } },
            },
            {
              word: { it: "Strade", en: "Roads" },
              kicker: { it: "Chianti", en: "Chianti" },
              title: { it: "Volpaia, Radda, Castellina, Greve", en: "Volpaia, Radda, Castellina, Greve" },
              text: {
                it: "I paesi del Chianti fra vigneti e oliveti: cantine, olio, vino e formaggi, e la via Francigena per chi ama camminare.",
                en: "The Chianti villages among vineyards and olive groves: wineries, olive oil, wine and cheese, and the Via Francigena for walkers.",
              },
            },
            {
              word: { it: "Città", en: "Cities" },
              kicker: { it: "Siena e oltre", en: "Siena and beyond" },
              title: { it: "Siena, Firenze, Pisa", en: "Siena, Florence, Pisa" },
              text: {
                it: "Siena è a un quarto d'ora, Firenze a mezz'ora circa, Pisa a un'ora: con più di un weekend, il Duomo senese e la Piazza dei Miracoli.",
                en: "Siena is a quarter of an hour away, Florence about half an hour, Pisa an hour: with more than a weekend, the Siena Cathedral and the Piazza dei Miracoli.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/viale.webp", alt: { it: "Il vialetto di accesso alla villa", en: "The driveway up to the villa" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Villa Lecchi.", en: "We look forward to welcoming you." },
          text: {
            it: "Il personale organizza navette da e verso città e aeroporti (con congruo anticipo) e vi aiuta a prenotare cantine e degustazioni.",
            en: "Our staff arranges shuttles to and from cities and airports (with advance notice) and helps you book wineries and tastings.",
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
    /* --- Villa Principale ------------------------------------------- */
    {
      slug: "superior-matrimoniale",
      name: "Superior matrimoniale",
      category: { it: "VILLA PRINCIPALE · PER DUE", en: "MAIN VILLA · FOR TWO" },
      size: "30 m²",
      guests: "2",
      layout: { it: "Letto king size · vista sulle colline", en: "King bed · hill views" },
      blurb: {
        it: "La Toscana più romantica, in una camera che invita a rallentare.",
        en: "The most romantic Tuscany, in a room that invites you to slow down.",
      },
      description: {
        it: "Dentro la villa, spazi ampi, colori caldi e tessuti avvolgenti nel segno dell'Ottocento toscano. Dalle finestre, colline di ulivi e vigneti. Ogni matrimoniale superior è diversa dalle altre, ma tutte hanno la stessa anima.",
        en: "Inside the villa, with generous space, warm colours and enveloping fabrics in the spirit of the Tuscan 19th century. From the windows, hills of olive trees and vineyards. Every Superior double is different from the others, but they all share the same soul.",
      },
      cover: "stays/superior-matrimoniale-01.webp",
      detail: "stays/superior-matrimoniale-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "superior-matrimoniale",
          name: "Superior matrimoniale",
          guests: "2",
          layout: { it: "30 m² · letto king size 180×200", en: "30 m² · king bed 180×200" },
          text: {
            it: "Due letti 90×200 uniti in un king size con materasso comfort e topper. Aria condizionata, minibar, cassaforte, TV 43\", Wi-Fi.",
            en: "Two 90×200 beds joined into a king size with comfort mattress and topper. Air conditioning, minibar, safe, 43\" TV, Wi-Fi.",
          },
          images: photos("superior-matrimoniale", 9),
        },
      ],
    },
    {
      slug: "superior-tripla",
      name: "Superior tripla",
      category: { it: "VILLA PRINCIPALE · PER TRE", en: "MAIN VILLA · FOR THREE" },
      size: "25 m²",
      guests: "3",
      layout: { it: "King size più letto singolo", en: "King bed plus single bed" },
      blurb: {
        it: "Al primo piano della villa, classica e luminosa.",
        en: "On the villa's first floor, classic and bright.",
      },
      description: {
        it: "Arredata con gusto sobrio e tessuti raffinati, accoglie tre ospiti in un ambiente classico. Le ampie finestre incorniciano la luce naturale e scorci sulle colline. L'accesso alla Bio Spa è incluso nella tariffa.",
        en: "Furnished with sober taste and refined fabrics, it welcomes three guests in a classic setting. Wide windows frame natural light and glimpses of the hills. Access to the Bio Spa is included in the rate.",
      },
      cover: "stays/superior-tripla-01.webp",
      detail: "stays/superior-tripla-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "superior-tripla",
          name: "Superior tripla",
          guests: "3",
          layout: { it: "25 m² · king size + singolo", en: "25 m² · king + single" },
          text: {
            it: "Tre letti singoli 90×200, due unibili in un king size, con materassi comfort e topper. Finestra panoramica, minibar, cassaforte.",
            en: "Three 90×200 single beds, two joinable into a king size, with comfort mattresses and toppers. Panoramic window, minibar, safe.",
          },
          images: photos("superior-tripla", 8),
        },
      ],
    },
    {
      slug: "superior-accessibile",
      name: "Superior matrimoniale accessibile",
      category: { it: "VILLA PRINCIPALE · ACCESSIBILE", en: "MAIN VILLA · ACCESSIBLE" },
      size: "30 m²",
      guests: "2",
      layout: { it: "King size · accessibile in sedia a rotelle", en: "King bed · wheelchair accessible" },
      blurb: {
        it: "Romantica e luminosa, accessibile anche con sedia a rotelle.",
        en: "Romantic and bright, also wheelchair accessible.",
      },
      description: {
        it: "Dentro la villa padronale, con pavimenti in cotto e un letto king size con testiera in velluto. Pensata per le coppie in cerca di quiete, unisce eleganza e funzionalità con discrezione, e si apre sulla campagna con cipressi, uliveti e vigneti.",
        en: "Inside the main villa, with terracotta floors and a king bed with a velvet headboard. Made for couples seeking calm, it combines elegance and function with discretion, and opens onto a countryside of cypresses, olive groves and vineyards.",
      },
      cover: "stays/superior-accessibile-01.webp",
      detail: "stays/superior-accessibile-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "superior-accessibile",
          name: "Superior matrimoniale accessibile",
          guests: "2",
          layout: { it: "30 m² · letto king size 180×200", en: "30 m² · king bed 180×200" },
          text: {
            it: "Accessibile con sedia a rotelle. Letto king size con topper, finestre panoramiche, bagno in marmo con ampia doccia.",
            en: "Wheelchair accessible. King bed with topper, panoramic windows, marble bathroom with a large shower.",
          },
          images: photos("superior-accessibile", 8),
        },
      ],
    },
    {
      slug: "jr-suite",
      name: "Versace Junior Suite",
      category: { it: "VILLA PRINCIPALE · PER DUE", en: "MAIN VILLA · FOR TWO" },
      size: "33 m²",
      guests: "2",
      layout: { it: "Affreschi dell'Ottocento · baldacchino", en: "19th-century frescoes · canopy bed" },
      blurb: {
        it: "Affreschi d'epoca e dettagli firmati Versace.",
        en: "Period frescoes and Versace details.",
      },
      description: {
        it: "Il cuore più scenografico di Villa Lecchi: affreschi originali dell'Ottocento, arredi firmati Versace e un letto a baldacchino. Ampi spazi, materiali pregiati e luce naturale dalle finestre sul paesaggio toscano. Per una fuga romantica o un anniversario.",
        en: "The most spectacular heart of Villa Lecchi: original 19th-century frescoes, Versace-designed furnishings and a canopy bed. Generous spaces, fine materials and natural light from windows over the Tuscan landscape. For a romantic escape or an anniversary.",
      },
      cover: "stays/jr-suite-01.webp",
      detail: "stays/jr-suite-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV65, CANOPY, SPA],
      units: [
        {
          slug: "versace-jr-suite",
          name: "Versace Junior Suite",
          guests: "2",
          layout: { it: "33 m² · letto king size", en: "33 m² · king bed" },
          text: {
            it: "Letto king size a baldacchino, affreschi originali del 1800, moquette, TV 65\", minibar, cassaforte.",
            en: "Canopy king bed, original 1800s frescoes, carpet, 65\" TV, minibar, safe.",
          },
          images: photos("jr-suite", 7),
        },
      ],
    },
    {
      slug: "king-suite",
      name: "Versace King Suite",
      category: { it: "VILLA PRINCIPALE · PER DUE", en: "MAIN VILLA · FOR TWO" },
      size: "45 m²",
      guests: "2",
      layout: { it: "Baldacchino · salotto · doccia cromoterapica", en: "Canopy bed · sitting room · chromotherapy shower" },
      blurb: {
        it: "La camera più prestigiosa, per un soggiorno romantico.",
        en: "The most prestigious room, for a romantic stay.",
      },
      description: {
        it: "Legno antico, tessuti preziosi e luce morbida. Il letto a baldacchino evoca lo stile ottocentesco della villa; il bagno firmato Versace ha la doccia cromoterapica. Dalle finestre, i vigneti del Chianti, la Val d'Elsa e il profilo di San Gimignano.",
        en: "Antique wood, precious fabrics and soft light. The canopy bed recalls the villa's 19th-century style; the Versace bathroom has a chromotherapy shower. From the windows, Chianti's vineyards, the Val d'Elsa and the skyline of San Gimignano.",
      },
      cover: "stays/king-suite-01.webp",
      detail: "stays/king-suite-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV65, CANOPY, CHROMO, LIVING, SPA],
      units: [
        {
          slug: "versace-king-suite",
          name: "Versace King Suite",
          guests: "2",
          layout: { it: "45 m² · letto king size", en: "45 m² · king bed" },
          text: {
            it: "Letto king size a baldacchino, zona salotto con divano e poltrona, doccia cromoterapica, TV 65\", moquette.",
            en: "Canopy king bed, sitting area with sofa and armchair, chromotherapy shower, 65\" TV, carpet.",
          },
          images: photos("king-suite", 8),
        },
      ],
    },
    {
      slug: "tower-suite",
      name: "Versace Tower Suite",
      category: { it: "VILLA PRINCIPALE · PER QUATTRO", en: "MAIN VILLA · FOR FOUR" },
      size: "50 m²",
      guests: "4",
      layout: { it: "Quattro ambienti · salotto con vista a 360°", en: "Four rooms · living room with 360° views" },
      blurb: {
        it: "Dormire in una torre: quattro ambienti sul Chianti.",
        en: "Sleep in a tower: four rooms over Chianti.",
      },
      description: {
        it: "Racchiusa nella torre secolare della villa, la Tower Suite ha quattro ambienti distinti aperti su colline dorate, cipressi e tetti antichi. Tessuti pregiati, dettagli Versace e un living panoramico con vista a 360° sul Chianti, dove il tempo rallenta.",
        en: "Set in the villa's centuries-old tower, the Tower Suite has four distinct rooms opening onto golden hills, cypresses and ancient rooftops. Fine fabrics, Versace details and a panoramic living room with 360° views over Chianti, where time slows down.",
      },
      cover: "stays/tower-suite-01.webp",
      detail: "stays/tower-suite-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV65, CANOPY, CHROMO, LIVING, SPA],
      units: [
        {
          slug: "versace-tower-suite",
          name: "Versace Tower Suite",
          guests: "4",
          layout: { it: "50 m² · king size + due singoli", en: "50 m² · king + two singles" },
          text: {
            it: "Letto king size più due letti singoli, letto a baldacchino, soggiorno panoramico, doccia cromoterapica, TV 65\".",
            en: "King bed plus two single beds, canopy bed, panoramic living room, chromotherapy shower, 65\" TV.",
          },
          images: photos("tower-suite", 9),
        },
      ],
    },

    /* --- Fattoria --------------------------------------------------- */
    {
      slug: "deluxe-matrimoniale",
      name: "Deluxe matrimoniale",
      category: { it: "FATTORIA · PER DUE", en: "FARMHOUSE · FOR TWO" },
      size: "20 m²",
      guests: "2",
      layout: { it: "Letto king size · travi a vista", en: "King bed · exposed beams" },
      blurb: {
        it: "La campagna senese in una stanza sospesa nel tempo.",
        en: "The Sienese countryside in a room suspended in time.",
      },
      description: {
        it: "Una camera della fattoria, con travi a vista e il calore del legno che evocano le dimore contadine. Dalla finestra, lo sguardo corre tra i filari e le torri medievali di San Gimignano. Rinnovata nel 2025.",
        en: "A farmhouse room, with exposed beams and the warmth of wood recalling country dwellings. From the window, your eye travels over the vine rows to the medieval towers of San Gimignano. Renovated in 2025.",
      },
      cover: "stays/deluxe-matrimoniale-01.webp",
      detail: "stays/deluxe-matrimoniale-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "deluxe-matrimoniale",
          name: "Deluxe matrimoniale",
          guests: "2",
          layout: { it: "20 m² · letto king size 180×200", en: "20 m² · king bed 180×200" },
          text: {
            it: "Materassi king size con topper, climatizzazione, Wi-Fi veloce, minibar, cassaforte, TV 43\", pavimento in legno.",
            en: "King size mattresses with topper, climate control, fast Wi-Fi, minibar, safe, 43\" TV, wooden floor.",
          },
          images: photos("deluxe-matrimoniale", 7),
        },
      ],
    },
    {
      slug: "deluxe-tripla",
      name: "Deluxe tripla",
      category: { it: "FATTORIA · PER TRE", en: "FARMHOUSE · FOR THREE" },
      size: "22 m²",
      guests: "3",
      layout: { it: "King size più letto singolo", en: "King bed plus single bed" },
      blurb: {
        it: "Stile toscano e comodità contemporanea, con finestra panoramica.",
        en: "Tuscan style and contemporary comfort, with a panoramic window.",
      },
      description: {
        it: "Travi in legno, dettagli in velluto e luce naturale: una camera calda per tre persone, con un letto matrimoniale king size e un singolo. Dalla finestra la campagna si apre in colline e vigne.",
        en: "Wooden beams, velvet details and natural light: a warm room for three, with a king-size double bed and a single. From the window the countryside opens onto hills and vines.",
      },
      cover: "stays/deluxe-tripla-01.webp",
      detail: "stays/deluxe-tripla-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "deluxe-tripla",
          name: "Deluxe tripla",
          guests: "3",
          layout: { it: "22 m² · king size + singolo", en: "22 m² · king + single" },
          text: {
            it: "Letto king size 180×200 e singolo 90×200, climatizzazione a controllo autonomo, minibar, cassaforte, TV 43\".",
            en: "King bed 180×200 and a 90×200 single, individually controlled climate system, minibar, safe, 43\" TV.",
          },
          images: photos("deluxe-tripla", 6),
        },
      ],
    },

    /* --- Limonaia --------------------------------------------------- */
    {
      slug: "comfort-singola",
      name: "Comfort singola",
      category: { it: "LIMONAIA · PER UNO", en: "LEMON HOUSE · FOR ONE" },
      size: "15 m²",
      guests: "1",
      layout: { it: "Letto 120×200 · parquet", en: "120×200 bed · parquet" },
      blurb: {
        it: "Un rifugio elegante per riscoprire il silenzio.",
        en: "An elegant retreat to rediscover silence.",
      },
      description: {
        it: "Affacciata sulle colline del Chianti, un piccolo rifugio di pace. La luce entra morbida dalla finestra panoramica e dal parquet caldo; un letto ampio, il silenzio della campagna. Dopo una giornata tra borghi e vigneti, la Bio Spa.",
        en: "Overlooking the Chianti hills, a small retreat of peace. Soft light comes from the panoramic window onto the warm parquet; a wide bed, the silence of the countryside. After a day among villages and vineyards, the Bio Spa.",
      },
      cover: "stays/comfort-singola-01.webp",
      detail: "stays/comfort-singola-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "comfort-singola",
          name: "Comfort singola",
          guests: "1",
          layout: { it: "15 m² · letto 120×200", en: "15 m² · 120×200 bed" },
          text: {
            it: "Letto 120×200 con materasso comfort e topper, aria condizionata, minibar, cassaforte, TV 43\". Ultima ristrutturazione 2025.",
            en: "120×200 bed with comfort mattress and topper, air conditioning, minibar, safe, 43\" TV. Last renovated 2025.",
          },
          images: photos("comfort-singola", 8),
        },
      ],
    },
    {
      slug: "comfort-matrimoniale",
      name: "Comfort matrimoniale",
      category: { it: "LIMONAIA · PER DUE", en: "LEMON HOUSE · FOR TWO" },
      size: "20 m²",
      guests: "2",
      layout: { it: "Letto king size · finestre sui cipressi", en: "King bed · windows onto cypresses" },
      blurb: {
        it: "Un nido raffinato nel panorama più poetico del Chianti.",
        en: "A refined nest in Chianti's most poetic panorama.",
      },
      description: {
        it: "Qui il risveglio ha il sapore della quiete toscana. Le grandi finestre guardano i filari di cipressi e la dolcezza delle colline. Interni rinnovati di recente, design essenziale e accogliente, a pochi passi dalla Bio Spa.",
        en: "Here you wake to Tuscan calm. The big windows look onto rows of cypresses and the gentle hills. Recently renovated interiors, a simple and welcoming design, a few steps from the Bio Spa.",
      },
      cover: "stays/comfort-matrimoniale-01.webp",
      detail: "stays/comfort-matrimoniale-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "comfort-matrimoniale",
          name: "Comfort matrimoniale",
          guests: "2",
          layout: { it: "20 m² · letto king size 180×200", en: "20 m² · king bed 180×200" },
          text: {
            it: "Due letti 90×200 uniti in un king size con topper, aria condizionata, Wi-Fi veloce, minibar, cassaforte, TV 43\".",
            en: "Two 90×200 beds joined into a king size with topper, air conditioning, fast Wi-Fi, minibar, safe, 43\" TV.",
          },
          images: photos("comfort-matrimoniale", 8),
        },
      ],
    },
    {
      slug: "comfort-tripla",
      name: "Comfort tripla",
      category: { it: "LIMONAIA · PER TRE", en: "LEMON HOUSE · FOR THREE" },
      size: "30 m²",
      guests: "3",
      layout: { it: "King size più letto singolo", en: "King bed plus single bed" },
      blurb: {
        it: "Ampia e luminosa, per una piccola famiglia o per amici.",
        en: "Roomy and bright, for a small family or friends.",
      },
      description: {
        it: "Spazio, tranquillità e il calore della campagna toscana: grandi finestre, parquet effetto legno, colori naturali e tessuti morbidi. Può ospitare fino a tre persone, con l'accesso alla Bio Spa incluso.",
        en: "Space, calm and the warmth of the Tuscan countryside: big windows, wood-effect parquet, natural colours and soft fabrics. It sleeps up to three, with access to the Bio Spa included.",
      },
      cover: "stays/comfort-tripla-01.webp",
      detail: "stays/comfort-tripla-02.webp",
      gallery: [],
      amenities: [AC, WIFI, MINIBAR, TV, SPA, VIEW],
      units: [
        {
          slug: "comfort-tripla",
          name: "Comfort tripla",
          guests: "3",
          layout: { it: "30 m² · king size + singolo", en: "30 m² · king + single" },
          text: {
            it: "Letto king size 180×200 e singolo 90×200 con materassi comfort e topper, minibar, cassaforte, TV 43\".",
            en: "King bed 180×200 and a 90×200 single with comfort mattresses and toppers, minibar, safe, 43\" TV.",
          },
          images: photos("comfort-tripla", 8),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutte le camere", en: "All rooms" },
    kicker: { it: "La vostra camera a Villa Lecchi", en: "Your room at Villa Lecchi" },
    sizeLabel: { it: "Superficie", en: "Size" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la camera", en: "Inside" },
    unitsLabel: { it: "La camera", en: "The room" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni sulla camera {name} di Villa Lecchi.",
      en: "Hello, I'd like some information about the {name} room at Villa Lecchi.",
    },
    amenitiesLabel: { it: "Nella camera", en: "In the room" },
    ctaTitle: { it: "Una pausa fra le colline.", en: "A pause among the hills." },
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

  footer: { copyright: "© 2026 Villa Lecchi" },

  legalPages: defaultLegalPages({
    name: "Villa Marianna S.r.l.",
    address: "Località Lecchi, Staggia Senese, 53036 Poggibonsi (SI)",
    email: "booking@villalecchi.com",
  }),
};

export default site;
