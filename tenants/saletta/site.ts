/**
 * AGRITURISMO SALETTA
 * ===================
 *
 * Anteprima di redesign costruita con i contenuti pubblici di
 * agriturismosaletta.it: appartamenti, tariffe, servizi, condizioni e
 * fotografie vengono da lì, riscritti e riorganizzati. Le foto sul sito
 * originale sono a 800 px: vanno richieste gli originali.
 *
 *   Appartamenti ▾  /noce  /cipresso  /olivo  /pino
 *   L'agriturismo /agriturismo · Servizi /servizi · Tariffe /tariffe · Territorio /territorio
 *
 * PRENOTAZIONE. Il sito originale non ha un motore di prenotazione: la voce
 * "Prenotazioni" è una email. Qui niente `booking`: i pulsanti portano ai
 * contatti (WhatsApp ed email).
 *
 * DA VERIFICARE CON IL CLIENTE
 * - CIN non pubblicato sul sito.
 * - Coordinate: centro di Staggia Senese (la località Fontana, 13 non è
 *   geocodificata su OpenStreetMap), approssimate a qualche centinaio di metri.
 * - Tassa di soggiorno: il sito riporta 2,00 € e 1,50 € in due punti.
 * - Distanze del territorio: stradali indicative, stimate da Staggia.
 * - Il numero è un cellulare: confermare che sia attivo su WhatsApp.
 * - Il sito originale non pubblica recensioni proprie (solo un widget
 *   Tripadvisor): nessuna sezione recensioni.
 * - La pagina Facebook è quella linkata dal sito originale.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const POOL: Localized = { it: "Piscina", en: "Pool" };
const BBQ: Localized = { it: "Barbecue e area relax", en: "Barbecue and relaxation area" };
const KITCHEN: Localized = { it: "Angolo cottura", en: "Kitchen area" };
const WIFI: Localized = { it: "Wi-Fi gratuito", en: "Free Wi-Fi" };
const LINEN: Localized = { it: "Biancheria inclusa", en: "Linen included" };
const FIREPLACE: Localized = { it: "Camino", en: "Fireplace" };
const WASHER: Localized = { it: "Lavatrice", en: "Washing machine" };

const site: SiteConfig = {
  brand: {
    id: "saletta",
    prefix: "Agriturismo",
    name: "Saletta",
    logo: "logo.svg",
  },

  contact: {
    phone: "393382175499",
    phoneDisplay: "+39 338 217 5499",
    email: "info@agriturismosaletta.it",
    address: ["Località Fontana, 13", "53038 Staggia Senese, Poggibonsi (SI)"],
    vat: "01345300527",
    coordinates: { lat: 43.4223, lng: 11.1825 },
    social: [
      { label: "Facebook", href: "https://www.facebook.com/pages/Agriturismo-AzAgrSaletta/815063235253177" },
    ],
  },

  seo: {
    domain: "https://www.agriturismosaletta.it",
    title: {
      it: "Agriturismo Saletta | Appartamenti con piscina nel Chianti, fra Siena e Firenze",
      en: "Agriturismo Saletta | Apartments with pool in Chianti, between Siena and Florence",
    },
    description: {
      it: "Quattro appartamenti con piscina fra ulivi e vigneti a Staggia Senese, a conduzione familiare. Siena, San Gimignano e Firenze a portata di mano.",
      en: "Four apartments with a pool among olive groves and vineyards at Staggia Senese, family-run. Siena, San Gimignano and Florence within easy reach.",
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
        { href: "/noce", label: { it: "Appartamento Noce", en: "Noce apartment" } },
        { href: "/cipresso", label: { it: "Appartamento Cipresso", en: "Cipresso apartment" } },
        { href: "/olivo", label: { it: "Appartamento Olivo", en: "Olivo apartment" } },
        { href: "/pino", label: { it: "Appartamento Pino", en: "Pino apartment" } },
      ],
    },
    { page: "agriturismo", label: { it: "L'agriturismo", en: "The farm" } },
    { page: "servizi", label: { it: "Servizi", en: "Services" } },
    { page: "tariffe", label: { it: "Tariffe", en: "Rates" } },
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
          it: "Il casale di Saletta fra gli ulivi, con la corte e i tavoli all'ombra",
          en: "The Saletta farmhouse among the olive trees, with its courtyard and shaded tables",
        },
      },
      labelParts: [
        { it: "Chianti", en: "Chianti" },
        { it: "Staggia Senese · Siena", en: "Staggia Senese · Siena" },
      ],
      titleLines: [
        { it: "Quattro appartamenti", en: "Four apartments" },
        { it: "fra ulivi e vigneti.", en: "among olive groves and vineyards." },
      ],
      intro: {
        it: "Un agriturismo a conduzione familiare nel Chianti, con la piscina nel verde e Siena, San Gimignano e Firenze a un'ora o meno.",
        en: "A family-run farm stay in Chianti, with a pool in the greenery and Siena, San Gimignano and Florence within an hour.",
      },
      cta: {
        label: { it: "Scopri gli appartamenti", en: "See the apartments" },
        href: "#appartamenti",
      },
      pillars: [
        { it: "Quattro appartamenti · piscina", en: "Four apartments · pool" },
        { it: "Aperti dal 1° maggio al 28 ottobre", en: "Open 1 May to 28 October" },
        { it: "Fra Firenze e Siena", en: "Between Florence and Siena" },
      ],
    },

    {
      type: "story",
      id: "agriturismo",
      number: "4",
      numberLabel: { it: "APPARTAMENTI NELL'ANTICA CASA COLONICA", en: "APARTMENTS IN THE OLD FARMHOUSE" },
      ghost: "SALETTA",
      titleLines: [
        { it: "Un posto dove", en: "A place to" },
        { it: "riposare e", en: "rest and" },
      ],
      titleEmphasis: { it: "chiacchierare.", en: "chat." },
      mainImage: {
        src: "estate/vigna.webp",
        alt: { it: "I filari di vigna di Saletta", en: "The Saletta vineyard rows" },
        caption: {
          it: "Vigne e ulivi tutto intorno alla casa",
          en: "Vines and olive trees all around the house",
        },
      },
      aerialImage: {
        src: "estate/aerea.webp",
        alt: { it: "Il casale e la piscina visti dall'alto", en: "The farmhouse and pool from above" },
        badge: "43°25′ N · 11°11′ E",
      },
      manifesto: {
        label: { it: "UN'AZIENDA AGRICOLA DI FAMIGLIA", en: "A FAMILY FARM" },
        text: {
          it: "Saletta è l'azienda agricola della famiglia Ticci, a Staggia Senese, fra Firenze e Siena. Nell'antica casa colonica sono stati ristrutturati con cura quattro appartamenti, in mezzo a ulivi e vigneti. È un luogo dove riposare e scambiare due parole con gli altri ospiti. Ci tiene molto farvi vivere le tradizioni della Toscana: assaggiare la cucina di qui, e il vino Chianti e l'olio che produciamo noi.",
          en: "Saletta is the Ticci family's farm at Staggia Senese, between Florence and Siena. Four apartments have been lovingly restored in the old farmhouse, among olive groves and vineyards. It's a place to rest and swap a few words with the other guests. We care about letting you experience Tuscan traditions: tasting the local cooking, and the Chianti wine and olive oil we make ourselves.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "appartamenti",
      kicker: { it: "Dormire a Saletta", en: "Stay at Saletta" },
      title: { it: "Quattro appartamenti, quattro alberi.", en: "Four apartments, four trees." },
      text: {
        it: "Da due a sei persone. Ogni appartamento ha la sua cucina; la piscina è di tutti.",
        en: "From two to six guests. Each apartment has its own kitchen; the pool is shared.",
      },
      tabs: [
        {
          label: { it: "Gli appartamenti", en: "The apartments" },
          stays: ["noce", "cipresso", "olivo", "pino"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina.webp",
        alt: { it: "La piscina fra gli ulivi", en: "The pool among the olive trees" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: { it: "Lettini e ombrelloni fra gli ulivi.", en: "Loungers and parasols among the olives." },
      text: {
        it: "Intorno alla piscina ci sono isole con lettini e ombrelloni, così ognuno ha il suo spazio. Poi il barbecue, il tavolo con le panche, il ping-pong e un'area giochi per i bambini.",
        en: "Around the pool there are islands of loungers and parasols, so everyone has their own space. Then the barbecue, a table with benches, table tennis and a children's play area.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "SU RICHIESTA", en: "ON REQUEST" },
      title: { it: "Una giornata fatta su misura.", en: "A day made to measure." },
      intro: {
        it: "A richiesta vi prepariamo un programma: cantine, città d'arte e sentieri.",
        en: "On request we'll prepare a programme: wineries, art cities and trails.",
      },
      marquee: {
        it: "VINO · SIENA · PALIO · VIA FRANCIGENA · PASSEGGIATE · ",
        en: "WINE · SIENA · PALIO · VIA FRANCIGENA · WALKS · ",
      },
      itemLabel: { it: "PROPOSTA", en: "IDEA" },
      ctaLabel: { it: "Tutto il territorio", en: "The whole area" },
      ctaHref: "/territorio",
      items: [
        {
          title: "Degustazioni nel Chianti Classico",
          word: { it: "VINO", en: "WINE" },
          meta: { it: "Su richiesta", en: "On request" },
          text: {
            it: "La degustazione dei vini tipici in una cantina del Chianti Classico. E a Saletta, il nostro Chianti e il nostro olio.",
            en: "A tasting of typical wines at a Chianti Classico winery. And at Saletta, our own Chianti and olive oil.",
          },
          image: "estate/vigna.webp",
        },
        {
          title: "Siena durante il Palio",
          word: { it: "PALIO", en: "PALIO" },
          meta: { it: "2 luglio · 16 agosto", en: "2 July · 16 August" },
          text: {
            it: "L'esperienza di vivere Siena nei giorni del Palio. Vi consigliamo anche musei, concerti e sagre.",
            en: "The experience of living Siena on Palio days. We can also suggest museums, concerts and local fairs.",
          },
          image: "estate/tramonto.webp",
        },
        {
          title: "Via Francigena a piedi o in bici",
          word: { it: "SENTIERI", en: "TRAILS" },
          meta: { it: "A due passi da casa", en: "Right by the farm" },
          text: {
            it: "La Via Francigena passa vicino a Saletta: ottimi sentieri per camminare o andare in mountain bike. Vi segnaliamo anche i ristoranti tipici.",
            en: "The Via Francigena passes close to Saletta: great trails for walking or mountain biking. We'll also point you to typical restaurants.",
          },
          image: "estate/ulivi.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Prima di partire", en: "Before you go" },
      title: { it: "Come funziona il soggiorno.", en: "How your stay works." },
      items: [
        {
          meta: { it: "Dal 1° maggio al 28 ottobre", en: "1 May to 28 October" },
          title: { it: "L'agriturismo", en: "The farm" },
          text: {
            it: "L'azienda agricola, la casa colonica, il verde intorno e le tradizioni toscane.",
            en: "The farm, the old farmhouse, the greenery around it and Tuscan traditions.",
          },
          image: { src: "estate/corte.webp", alt: { it: "La corte con il torchio e i tavoli", en: "The courtyard with the wine press and tables" } },
          link: { label: DISCOVER, href: "/agriturismo" },
        },
        {
          meta: { it: "Da 75 € a notte", en: "From €75 a night" },
          title: { it: "Tariffe e condizioni", en: "Rates and conditions" },
          text: {
            it: "Prezzi per appartamento, cosa è incluso, caparra, check-in e penali di annullamento.",
            en: "Prices per apartment, what's included, deposit, check-in and cancellation fees.",
          },
          image: { src: "estate/sala.webp", alt: { it: "La sala comune con camino e travi a vista", en: "The common room with fireplace and exposed beams" } },
          link: { label: DISCOVER, href: "/tariffe" },
        },
        {
          meta: { it: "Siena · Chianti · San Gimignano", en: "Siena · Chianti · San Gimignano" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Colle di Val d'Elsa a pochi minuti, San Gimignano, Siena e Firenze.",
            en: "Colle di Val d'Elsa a few minutes away, then San Gimignano, Siena and Florence.",
          },
          image: { src: "estate/campi.webp", alt: { it: "Campi verdi con una rosa in fiore", en: "Green fields with a rose in bloom" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Fra Firenze e Siena", en: "Between Florence and Siena" },
      title: {
        it: "Il Chianti da una parte, le città d'arte dall'altra.",
        en: "Chianti on one side, the art cities on the other.",
      },
      text: {
        it: "Colle di Val d'Elsa e Poggibonsi a pochi minuti, San Gimignano e Siena entro la mezz'ora, Firenze in un'ora.",
        en: "Colle di Val d'Elsa and Poggibonsi a few minutes away, San Gimignano and Siena within half an hour, Florence in an hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Agriturismo Saletta",
        en: "Stylised map of distances from Agriturismo Saletta",
      },
      gridLabels: { x: "43°25′ N", y: "11°11′ E" },
      homeLabel: { lines: ["Agriturismo", "Saletta"], sub: "Staggia Senese" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Saletta",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "poggibonsi", name: { it: "Poggibonsi", en: "Poggibonsi" }, distance: "4 km", coordinates: { lat: 43.469, lng: 11.1479 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "5 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "9 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "22 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "25 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "25 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "55 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/ingresso.webp",
        alt: { it: "L'ingresso del casale coperto di rampicanti", en: "The farmhouse entrance covered in climbing plants" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Saletta.", en: "We look forward to welcoming you." },
      text: {
        it: "Per disponibilità e prenotazioni scriveteci: vi rispondiamo di persona. Si prenota con una caparra del 30%.",
        en: "For availability and bookings, write to us: we'll reply in person. A 30% deposit confirms the booking.",
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
      slug: "agriturismo",
      title: { it: "L'agriturismo", en: "The farm" },
      description: {
        it: "L'azienda agricola Saletta a Staggia Senese: casa colonica, ulivi, vigneti e quattro appartamenti ristrutturati, a conduzione familiare.",
        en: "Saletta farm at Staggia Senese: old farmhouse, olive groves, vineyards and four restored apartments, family-run.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/casale.webp",
            alt: { it: "Il casale di Saletta con la corte", en: "The Saletta farmhouse and courtyard" },
          },
          labelParts: [
            { it: "L'agriturismo", en: "The farm" },
            { it: "Azienda agricola di famiglia", en: "Family farm" },
          ],
          titleLines: [
            { it: "Una casa colonica", en: "An old farmhouse" },
            { it: "in mezzo al verde", en: "in the greenery" },
          ],
          intro: {
            it: "Quattro appartamenti ristrutturati con cura nell'antica casa colonica, fra Firenze e Siena.",
            en: "Four apartments carefully restored in the old farmhouse, between Florence and Siena.",
          },
          cta: { label: { it: "La tenuta", en: "The farm" }, href: "#tenuta" },
          pillars: [
            { it: "4 appartamenti", en: "4 apartments" },
            { it: "Piscina", en: "Pool" },
            { it: "1° maggio · 28 ottobre", en: "1 May · 28 October" },
          ],
        },
        {
          type: "chapters",
          id: "tenuta",
          kicker: { it: "La tenuta", en: "The farm" },
          title: { it: "Cosa trovate a Saletta", en: "What you'll find at Saletta" },
          items: [
            {
              word: { it: "Casa", en: "House" },
              kicker: { it: "Antica casa colonica", en: "Old farmhouse" },
              title: { it: "Pietra, travi e cotto", en: "Stone, beams and terracotta" },
              text: {
                it: "Gli appartamenti stanno nella vecchia casa colonica, ristrutturata con amore. Travi a vista, pavimenti in cotto e un'ampia sala rustica con il camino, in comune fra Cipresso e Olivo.",
                en: "The apartments are in the old farmhouse, lovingly restored. Exposed beams, terracotta floors and a wide rustic room with a fireplace, shared by Cipresso and Olivo.",
              },
              image: { src: "estate/sala.webp", alt: { it: "La sala con il camino", en: "The room with the fireplace" } },
            },
            {
              word: { it: "Campi", en: "Fields" },
              kicker: { it: "Ulivi e vigneti", en: "Olive groves and vineyards" },
              title: { it: "Il nostro vino e il nostro olio", en: "Our wine and our oil" },
              text: {
                it: "Nell'agriturismo potete assaggiare un ottimo vino Chianti e l'olio di oliva di nostra produzione.",
                en: "At the farm you can taste an excellent Chianti wine and the olive oil we produce ourselves.",
              },
              image: { src: "estate/ulivi.webp", alt: { it: "Ulivi e cespugli con la campagna sullo sfondo", en: "Olive trees and shrubs with the countryside behind" } },
            },
            {
              word: { it: "Acqua", en: "Water" },
              kicker: { it: "Per stare all'aperto", en: "Outdoors" },
              title: { it: "Piscina, prati e terrazza", en: "Pool, lawns and terrace" },
              text: {
                it: "La piscina con le sue isole di lettini e ombrelloni, grandi prati, la terrazza con i tavoli. Un posto dove riposare e scambiare idee con gli altri ospiti.",
                en: "The pool with its islands of loungers and parasols, big lawns, the terrace with tables. A place to rest and swap ideas with other guests.",
              },
              image: { src: "estate/terrazza.webp", alt: { it: "La terrazza con tavoli e ombrelloni arancioni", en: "The terrace with tables and orange parasols" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/piscina-2.webp", alt: { it: "La piscina di Saletta", en: "The Saletta pool" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Venite a trovarci.", en: "Come and stay." },
          text: {
            it: "Scriveteci con le date e il numero di persone.",
            en: "Write to us with your dates and number of guests.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "servizi",
      title: { it: "Servizi", en: "Services" },
      description: {
        it: "Piscina, barbecue, ping-pong, area giochi, Wi-Fi gratuito, babysitter su richiesta e programmi su misura a Agriturismo Saletta.",
        en: "Pool, barbecue, table tennis, play area, free Wi-Fi, babysitting on request and tailor-made programmes at Agriturismo Saletta.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/piscina.webp", alt: { it: "La piscina fra gli ulivi", en: "The pool among the olive trees" } },
          labelParts: [
            { it: "Servizi", en: "Services" },
            { it: "Per tutta la famiglia", en: "For the whole family" },
          ],
          titleLines: [
            { it: "Tutto quello che serve", en: "Everything you need" },
            { it: "per stare bene", en: "to feel at home" },
          ],
          intro: {
            it: "Spazi all'aperto, giochi per i bambini e, a richiesta, un programma per le vostre giornate.",
            en: "Outdoor spaces, games for children and, on request, a programme for your days.",
          },
          cta: { label: { it: "I servizi", en: "The services" }, href: "#servizi" },
          pillars: [
            { it: "Wi-Fi gratuito", en: "Free Wi-Fi" },
            { it: "Bambini benvenuti", en: "Children welcome" },
          ],
        },
        {
          type: "cards",
          id: "servizi",
          kicker: { it: "Servizi", en: "Services" },
          title: { it: "In agriturismo", en: "At the farm" },
          text: {
            it: "Piscina, barbecue, ping-pong e attrezzature dell'agriturismo sono compresi nel prezzo.",
            en: "Pool, barbecue, table tennis and the farm's equipment are included in the price.",
          },
          items: [
            {
              meta: { it: "Compresa nel prezzo", en: "Included" },
              title: { it: "Piscina e relax", en: "Pool and relaxing" },
              text: {
                it: "Piscina attrezzata, aree relax con lettini e ombrelloni, barbecue, tavolo con panche e ping-pong.",
                en: "Equipped pool, relaxation areas with loungers and parasols, barbecue, table with benches and table tennis.",
              },
              details: [
                { it: "Sanificazione quotidiana di piscina e spazi comuni", en: "Daily sanitising of pool and common areas" },
              ],
              image: { src: "estate/piscina-2.webp", alt: { it: "La piscina con lettini e ombrelloni", en: "The pool with loungers and parasols" } },
            },
            {
              meta: { it: "Bambini benvenuti", en: "Children welcome" },
              title: { it: "Famiglie", en: "Families" },
              text: {
                it: "Qualche gioco per bambini, grandi prati e la piscina. Per una serata da soli, babysitter a pagamento.",
                en: "A few children's games, big lawns and the pool. For an evening out, a paid babysitting service.",
              },
              details: [{ it: "Babysitter su richiesta", en: "Babysitter on request" }],
              image: { src: "estate/campi.webp", alt: { it: "Un prato verde con rose in fiore", en: "A green lawn with blooming roses" } },
            },
            {
              meta: { it: "A richiesta", en: "On request" },
              title: { it: "Il programma della giornata", en: "Your day's programme" },
              text: {
                it: "Cantine del Chianti Classico, musei di Siena o Firenze, il Palio (2 luglio o 16 agosto), concerti e sagre. Vi consigliamo ristoranti tipici e sentieri.",
                en: "Chianti Classico wineries, museums in Siena or Florence, the Palio (2 July or 16 August), concerts and local fairs. We'll suggest typical restaurants and trails.",
              },
              image: { src: "estate/corte.webp", alt: { it: "La corte con il torchio e i tavoli", en: "The courtyard with the wine press and tables" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/ingresso.webp", alt: { it: "L'ingresso del casale", en: "The farmhouse entrance" } },
          kicker: { it: "Domande?", en: "Questions?" },
          title: { it: "Chiedeteci pure.", en: "Just ask." },
          text: {
            it: "Per qualsiasi servizio o programma scriveteci: rispondiamo di persona.",
            en: "For any service or programme, write to us: we reply in person.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "tariffe",
      title: { it: "Tariffe e condizioni", en: "Rates and conditions" },
      description: {
        it: "Tariffe per appartamento a notte, cosa è incluso, caparra, check-in e condizioni di annullamento a Agriturismo Saletta.",
        en: "Nightly rates per apartment, what's included, deposit, check-in and cancellation terms at Agriturismo Saletta.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/sala.webp", alt: { it: "La sala comune con camino", en: "The common room with fireplace" } },
          labelParts: [
            { it: "Tariffe", en: "Rates" },
            { it: "1° maggio · 28 ottobre", en: "1 May · 28 October" },
          ],
          titleLines: [
            { it: "Prezzi chiari,", en: "Clear prices," },
            { it: "per appartamento", en: "per apartment" },
          ],
          intro: {
            it: "Il prezzo è a notte per l'intero appartamento. Biancheria, pulizie, luce, acqua, gas e piscina sono compresi.",
            en: "The price is per night for the whole apartment. Linen, cleaning, electricity, water, gas and pool are included.",
          },
          cta: { label: { it: "I prezzi", en: "The prices" }, href: "#prezzi" },
          pillars: [
            { it: "Caparra 30%", en: "30% deposit" },
            { it: "Check-in 16–20", en: "Check-in 4–8 pm" },
          ],
        },
        {
          type: "facts",
          id: "prezzi",
          kicker: { it: "Tariffe a notte", en: "Nightly rates" },
          title: { it: "Per appartamento", en: "Per apartment" },
          image: { src: "estate/piscina.webp", alt: { it: "La piscina", en: "The pool" } },
          items: [
            { label: { it: "Noce · 2-3 persone", en: "Noce · 2-3 guests" }, value: { it: "da 80 €", en: "from €80" }, note: { it: "Bassa 80 € · alta 90 €", en: "Low 80 · high 90" } },
            { label: { it: "Cipresso · 2-3 persone", en: "Cipresso · 2-3 guests" }, value: { it: "da 75 €", en: "from €75" }, note: { it: "Bassa 75 € · alta 80 €", en: "Low 75 · high 80" } },
            { label: { it: "Olivo · 4 persone", en: "Olivo · 4 guests" }, value: { it: "da 120 €", en: "from €120" }, note: { it: "Bassa 120 € · alta 140 €", en: "Low 120 · high 140" } },
            { label: { it: "Pino · 6 persone", en: "Pino · 6 guests" }, value: { it: "da 170 €", en: "from €170" }, note: { it: "Bassa 170 € · alta 190 €", en: "Low 170 · high 190" } },
            { label: { it: "Bassa stagione", en: "Low season" }, value: { it: "Mag · Giu · Set · Ott", en: "May · Jun · Sep · Oct" } },
            { label: { it: "Alta stagione", en: "High season" }, value: { it: "Luglio · Agosto", en: "July · August" } },
          ],
        },
        {
          type: "cards",
          id: "condizioni",
          kicker: { it: "Condizioni", en: "Terms" },
          title: { it: "Cosa sapere prima di prenotare", en: "Before you book" },
          items: [
            {
              meta: { it: "Compreso", en: "Included" },
              title: { it: "Nel prezzo", en: "In the price" },
              text: {
                it: "Cambio biancheria settimanale, pulizia iniziale e finale, gas, luce e acqua, piscina, barbecue, ping-pong e attrezzature dell'agriturismo.",
                en: "Weekly linen change, initial and final cleaning, gas, electricity and water, pool, barbecue, table tennis and the farm's equipment.",
              },
              details: [
                { it: "Escluso: riscaldamento extra, a consumo", en: "Not included: extra heating, metered" },
                { it: "Tassa di soggiorno dai 12 anni, max 5 notti", en: "Tourist tax from age 12, max 5 nights" },
              ],
              image: { src: "stays/pino-01.webp", alt: { it: "Il soggiorno con camino dell'appartamento Pino", en: "The Pino apartment living room with fireplace" } },
            },
            {
              meta: { it: "Caparra 30%", en: "30% deposit" },
              title: { it: "Prenotare e pagare", en: "Booking and paying" },
              text: {
                it: "Si conferma con una caparra del 30% tramite bonifico. Il saldo all'arrivo in contanti, oppure in anticipo con bonifico.",
                en: "A 30% deposit by bank transfer confirms the booking. The balance is paid on arrival in cash, or in advance by transfer.",
              },
              details: [
                { it: "Luglio e agosto: meglio da sabato a sabato", en: "July and August: Saturday to Saturday preferred" },
                { it: "Festività: minimo 3 notti", en: "Holidays: minimum 3 nights" },
              ],
              image: { src: "stays/cipresso-02.webp", alt: { it: "Camera matrimoniale dell'appartamento Cipresso", en: "Double bedroom in the Cipresso apartment" } },
            },
            {
              meta: { it: "Check-in 16:00–20:00", en: "Check-in 4–8 pm" },
              title: { it: "Arrivo e annullamenti", en: "Arrival and cancellation" },
              text: {
                it: "Check-out entro le 10:00. Per arrivi in altri orari contattateci. All'arrivo servono un documento e la tassa di soggiorno.",
                en: "Check-out by 10 am. For other arrival times, contact us. On arrival you need ID and the tourist tax.",
              },
              details: [
                { it: "Annullamento fino a 30 giorni prima: 30%", en: "Cancel up to 30 days before: 30%" },
                { it: "Da 29 a 10 giorni: 50%", en: "29 to 10 days before: 50%" },
                { it: "Da 9 giorni e no show: 100%", en: "From 9 days and no-show: 100%" },
              ],
              image: { src: "stays/olivo-03.webp", alt: { it: "Camera dell'appartamento Olivo", en: "Bedroom in the Olivo apartment" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/terrazza.webp", alt: { it: "La terrazza con i tavoli", en: "The terrace with tables" } },
          kicker: { it: "Prenota", en: "Book" },
          title: { it: "Scriveteci le date.", en: "Tell us your dates." },
          text: {
            it: "Vi confermiamo disponibilità e prezzo per il vostro periodo.",
            en: "We'll confirm availability and price for your dates.",
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
        it: "Cosa vedere intorno a Agriturismo Saletta: Siena, San Gimignano, Colle di Val d'Elsa, il Chianti Classico e Firenze.",
        en: "What to see around Agriturismo Saletta: Siena, San Gimignano, Colle di Val d'Elsa, Chianti Classico and Florence.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/tramonto.webp", alt: { it: "Il sole che tramonta sulle colline", en: "The sun setting over the hills" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Chianti · Siena · Firenze", en: "Chianti · Siena · Florence" },
          ],
          titleLines: [
            { it: "Fra Firenze", en: "Between Florence" },
            { it: "e Siena", en: "and Siena" },
          ],
          intro: {
            it: "Da Saletta si raggiungono le città d'arte toscane e il Chianti Classico, e si cammina sulla Via Francigena.",
            en: "From Saletta you can reach Tuscany's art cities and Chianti Classico, and walk the Via Francigena.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Colle di Val d'Elsa 5 km", en: "Colle di Val d'Elsa 5 km" },
            { it: "Siena 25 km", en: "Siena 25 km" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Città", en: "Cities" },
              kicker: { it: "Siena, Firenze, Pisa", en: "Siena, Florence, Pisa" },
              title: { it: "Le città d'arte", en: "The art cities" },
              text: {
                it: "Nelle vicinanze ci sono Siena, Firenze, Pisa, San Gimignano e Colle di Val d'Elsa. A richiesta vi consigliamo i musei da visitare e come vivere Siena nei giorni del Palio, il 2 luglio e il 16 agosto.",
                en: "Nearby are Siena, Florence, Pisa, San Gimignano and Colle di Val d'Elsa. On request we'll suggest museums and how to experience Siena on Palio days, 2 July and 16 August.",
              },
              image: { src: "estate/aerea.webp", alt: { it: "Il casale e la campagna intorno, visti dall'alto", en: "The farmhouse and surrounding countryside from above" } },
            },
            {
              word: { it: "Chianti", en: "Chianti" },
              kicker: { it: "Cantine e degustazioni", en: "Wineries and tastings" },
              title: { it: "Il Chianti Classico", en: "Chianti Classico" },
              text: {
                it: "La degustazione dei vini tipici in una cantina del Chianti Classico: ve la organizziamo a richiesta.",
                en: "A tasting of typical wines at a Chianti Classico winery: we can arrange it on request.",
              },
              image: { src: "estate/vigna.webp", alt: { it: "Filari di vigna", en: "Vineyard rows" } },
            },
            {
              word: { it: "Passeggiate", en: "Walks" },
              kicker: { it: "A piedi, in bici, a cavallo", en: "On foot, by bike, on horseback" },
              title: { it: "Via Francigena e dintorni", en: "The Via Francigena and around" },
              text: {
                it: "La Via Francigena passa vicino a Saletta: sentieri per camminare o andare in mountain bike. A 1,5 km c'è un centro ippico, a Colle di Val d'Elsa (5 km) un campo da golf a 6 buche.",
                en: "The Via Francigena passes near Saletta: trails for walking or mountain biking. A riding centre is 1.5 km away, and a 6-hole golf course at Colle di Val d'Elsa (5 km).",
              },
              image: { src: "estate/grano.webp", alt: { it: "Un campo di grano con una quercia", en: "A wheat field with an oak tree" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/ulivi.webp", alt: { it: "Gli ulivi intorno alla casa", en: "The olive trees around the house" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Saletta.", en: "We look forward to welcoming you." },
          text: {
            it: "Vi diamo volentieri consigli su itinerari, ristoranti e cantine.",
            en: "We're happy to suggest itineraries, restaurants and wineries.",
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
      slug: "noce",
      name: "Appartamento Noce",
      category: { it: "PER DUE O TRE", en: "FOR TWO OR THREE" },
      size: "1",
      guests: "3",
      layout: { it: "1 camera doppia + terzo letto · 1° piano", en: "1 double bedroom + third bed · first floor" },
      blurb: {
        it: "Al primo piano: cucina con zona pranzo, camera doppia e terzo letto.",
        en: "On the first floor: kitchen with dining area, double bedroom and a third bed.",
      },
      description: {
        it: "Un appartamento per due o tre persone al primo piano della casa colonica. Cucina con zona pranzo, una camera doppia con terzo letto, bagno con doccia e lavatrice.",
        en: "An apartment for two or three guests on the first floor of the farmhouse. Kitchen with dining area, a double bedroom with a third bed, shower room with washing machine.",
      },
      cover: "stays/noce-01.webp",
      detail: "stays/noce-02.webp",
      gallery: [],
      amenities: [POOL, BBQ, KITCHEN, WASHER, LINEN, WIFI],
      units: [
        {
          slug: "appartamento-noce",
          name: "Appartamento Noce",
          guests: "3",
          layout: { it: "1 camera doppia con terzo letto · 1 bagno", en: "1 double bedroom with third bed · 1 bathroom" },
          text: {
            it: "Primo piano. Cucina e zona pranzo, camera doppia con terzo letto, bagno con doccia e lavatrice.",
            en: "First floor. Kitchen and dining area, double bedroom with third bed, shower room with washing machine.",
          },
          images: ["stays/noce-01.webp", "stays/noce-02.webp", "stays/noce-03.webp"],
        },
      ],
    },
    {
      slug: "cipresso",
      name: "Appartamento Cipresso",
      category: { it: "PER DUE O TRE", en: "FOR TWO OR THREE" },
      size: "1",
      guests: "3",
      layout: { it: "1 camera doppia + terzo letto · sala con camino", en: "1 double bedroom + third bed · lounge with fireplace" },
      blurb: {
        it: "Con il grande salone rustico e il camino, in comune con Olivo.",
        en: "With the large rustic lounge and fireplace, shared with Olivo.",
      },
      description: {
        it: "Un appartamento per due o tre persone al primo piano. Cucina e zona pranzo, una camera doppia con terzo letto, bagno con doccia. Davanti, l'ampio salone rustico con il grande camino, in comune con l'appartamento Olivo.",
        en: "An apartment for two or three guests on the first floor. Kitchen and dining area, a double bedroom with a third bed, shower room. In front, the wide rustic lounge with a large fireplace, shared with the Olivo apartment.",
      },
      cover: "stays/cipresso-05.webp",
      detail: "stays/cipresso-06.webp",
      gallery: [],
      amenities: [POOL, BBQ, KITCHEN, FIREPLACE, LINEN, WIFI],
      units: [
        {
          slug: "appartamento-cipresso",
          name: "Appartamento Cipresso",
          guests: "3",
          layout: { it: "1 camera doppia con terzo letto · 1 bagno", en: "1 double bedroom with third bed · 1 bathroom" },
          text: {
            it: "Primo piano. Cucina e zona pranzo, camera doppia con terzo letto, bagno con doccia, salone rustico con camino in comune con Olivo.",
            en: "First floor. Kitchen and dining area, double bedroom with third bed, shower room, rustic lounge with fireplace shared with Olivo.",
          },
          images: [
            "stays/cipresso-05.webp",
            "stays/cipresso-06.webp",
            "stays/cipresso-07.webp",
            "stays/cipresso-08.webp",
            "stays/cipresso-01.webp",
            "stays/cipresso-02.webp",
            "stays/cipresso-03.webp",
            "stays/cipresso-04.webp",
          ],
        },
      ],
    },
    {
      slug: "olivo",
      name: "Appartamento Olivo",
      category: { it: "PER QUATTRO", en: "FOR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "2 camere doppie · 1 bagno · 1° piano", en: "2 double bedrooms · 1 bathroom · first floor" },
      blurb: {
        it: "Grande cucina con pranzo e due camere doppie, al primo piano.",
        en: "Large kitchen with dining area and two double bedrooms, on the first floor.",
      },
      description: {
        it: "Un appartamento per quattro persone al primo piano. Grande cucina con zona pranzo, due camere doppie, bagno con doccia e lavatrice. Davanti, il salone rustico con il grande camino, in comune con l'appartamento Cipresso.",
        en: "An apartment for four on the first floor. Large kitchen with dining area, two double bedrooms, shower room with washing machine. In front, the rustic lounge with a large fireplace, shared with the Cipresso apartment.",
      },
      cover: "stays/olivo-01.webp",
      detail: "stays/olivo-02.webp",
      gallery: [],
      amenities: [POOL, BBQ, KITCHEN, FIREPLACE, WASHER, LINEN, WIFI],
      units: [
        {
          slug: "appartamento-olivo",
          name: "Appartamento Olivo",
          guests: "4",
          layout: { it: "2 camere doppie · 1 bagno", en: "2 double bedrooms · 1 bathroom" },
          text: {
            it: "Primo piano. Grande cucina con zona pranzo, due camere doppie, bagno con doccia e lavatrice, salone rustico con camino in comune con Cipresso.",
            en: "First floor. Large kitchen with dining area, two double bedrooms, shower room with washing machine, rustic lounge with fireplace shared with Cipresso.",
          },
          images: [
            "stays/olivo-01.webp",
            "stays/olivo-02.webp",
            "stays/olivo-03.webp",
            "stays/olivo-04.webp",
            "stays/olivo-05.webp",
          ],
        },
      ],
    },
    {
      slug: "pino",
      name: "Appartamento Pino",
      category: { it: "PER SEI", en: "FOR SIX" },
      size: "3",
      guests: "6",
      layout: { it: "3 camere doppie · 2 bagni · camino", en: "3 double bedrooms · 2 bathrooms · fireplace" },
      blurb: {
        it: "Al piano terra: grande soggiorno con camino, tre camere e due bagni.",
        en: "On the ground floor: large living room with fireplace, three bedrooms and two bathrooms.",
      },
      description: {
        it: "L'appartamento più grande, al piano terra. Un grande soggiorno con caminetto che si apre sul giardino, la cucina, tre camere doppie, due bagni e un ripostiglio con lavatrice.",
        en: "The largest apartment, on the ground floor. A large living room with fireplace opening onto the garden, kitchen, three double bedrooms, two bathrooms and a utility room with washing machine.",
      },
      cover: "stays/pino-01.webp",
      detail: "stays/pino-02.webp",
      gallery: [],
      amenities: [POOL, BBQ, KITCHEN, FIREPLACE, WASHER, LINEN, WIFI],
      units: [
        {
          slug: "appartamento-pino",
          name: "Appartamento Pino",
          guests: "6",
          layout: { it: "3 camere doppie · 2 bagni", en: "3 double bedrooms · 2 bathrooms" },
          text: {
            it: "Piano terra. Grande soggiorno con caminetto, cucina, tre camere doppie, due bagni, ripostiglio con lavatrice.",
            en: "Ground floor. Large living room with fireplace, kitchen, three double bedrooms, two bathrooms, utility room with washing machine.",
          },
          images: ["stays/pino-01.webp", "stays/pino-02.webp", "stays/pino-03.webp", "stays/pino-04.webp"],
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli appartamenti", en: "All apartments" },
    kicker: { it: "Il vostro appartamento a Saletta", en: "Your apartment at Saletta" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'appartamento", en: "Inside" },
    unitsLabel: { it: "L'appartamento", en: "The apartment" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Agriturismo Saletta.",
      en: "Hello, I'd like some information about {name} at Agriturismo Saletta.",
    },
    amenitiesLabel: { it: "Nell'appartamento", en: "In the apartment" },
    ctaTitle: { it: "Un'estate fra ulivi e vigneti.", en: "A summer among olives and vines." },
    ctaLabel: WHATSAPP_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECT" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Scrivendoci parlate direttamente con noi, senza intermediari.",
      en: "Writing to us, you deal with us directly, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Agriturismo Saletta" },

  legalPages: defaultLegalPages({
    name: "Agriturismo Az. Agricola Saletta",
    address: "Località Fontana 13, 53038 Staggia Senese, Poggibonsi (SI)",
    email: "info@agriturismosaletta.it",
  }),
};

export default site;
