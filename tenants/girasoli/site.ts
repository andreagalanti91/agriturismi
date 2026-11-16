/**
 * AGRITURISMO CASA DEI GIRASOLI
 * =============================
 *
 * Anteprima di redesign con i contenuti pubblici di casagirasoli.com: storia
 * del casale, quattro appartamenti, piscina, azienda agricola (olio), tariffe,
 * dintorni e indicazioni stradali sono presi da lì, riscritti e riorganizzati.
 * Le foto sono quelle del sito (e dei suoi canali) del cliente, anche se
 * piccole o datate: vanno sostituite con gli originali.
 *
 *   Appartamenti ▾  /verde  /arancio  /giallo  /azzurro
 *   Tariffe /tariffe · Azienda agricola /azienda-agricola
 *   Territorio /territorio · Dove siamo /dove-siamo
 *
 * PRENOTAZIONE. Il sito attuale non ha un motore di prenotazione: si scrive
 * via email (preferita) o si telefona. Qui non c'è `booking`: i pulsanti
 * portano ai contatti, WhatsApp ed email.
 *
 * DA VERIFICARE COL CLIENTE
 *  - CIN (non pubblicato sul sito)
 *  - tariffe 2026 e date di apertura della piscina (il sito riporta il 2023)
 *  - coordinate: prese dal centro della mappa incorporata nel sito attuale,
 *    sono approssimate
 *  - numero WhatsApp (si usa il cellulare del sito)
 *  - Iubenda: privacy e cookie policy rimandano ai documenti del cliente
 */

import type { Localized, SiteConfig } from "../../src/config/types";

/** Le foto di un appartamento: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const WIFI: Localized = { it: "Wi-Fi gratuito", en: "Free Wi-Fi" };
const PARKING: Localized = { it: "Parcheggio coperto e gratuito", en: "Free covered parking" };
const KITCHEN: Localized = { it: "Cucina accessoriata", en: "Equipped kitchen" };
const OUTDOOR: Localized = { it: "Spazio esterno privato", en: "Private outdoor space" };
const POOL: Localized = { it: "Piscina dell'agriturismo", en: "Farm swimming pool" };
const LINEN: Localized = { it: "Biancheria inclusa", en: "Linen included" };
const FIREPLACE: Localized = { it: "Camino", en: "Fireplace" };
const DISHWASHER: Localized = { it: "Lavastoviglie", en: "Dishwasher" };
const AIRCON: Localized = { it: "Aria condizionata (al consumo)", en: "Air conditioning (metered)" };
const SAFE: Localized = { it: "Cassaforte", en: "Safe" };

const site: SiteConfig = {
  brand: {
    id: "girasoli",
    prefix: "Agriturismo",
    name: "Casa dei Girasoli",
    logo: "logo.svg",
    since: "2008",
  },

  contact: {
    phone: "393474493374",
    phoneDisplay: "+39 347 449 3374",
    email: "info@casagirasoli.com",
    address: ["Loc. Strada 5", "53037 San Gimignano (SI)"],
    vat: "01420310524",
    coordinates: { lat: 43.4815, lng: 11.0291 },
    social: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/pages/Agriturismo-CASA-dei-GIRASOLI/113248182032340",
      },
    ],
  },

  seo: {
    domain: "https://www.casagirasoli.com",
    title: {
      it: "Agriturismo Casa dei Girasoli | Appartamenti con piscina a San Gimignano",
      en: "Agriturismo Casa dei Girasoli | Apartments with pool in San Gimignano",
    },
    description: {
      it: "Quattro appartamenti in un casale del Settecento con piscina e oliveto, a un chilometro da San Gimignano e raggiungibile a piedi lungo la Via Francigena.",
      en: "Four apartments in an 18th-century farmhouse with pool and olive grove, one kilometre from San Gimignano and reachable on foot along the Via Francigena.",
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
        { href: "/verde", label: { it: "Appartamento Verde", en: "Verde apartment" } },
        { href: "/arancio", label: { it: "Appartamento Arancio", en: "Arancio apartment" } },
        { href: "/giallo", label: { it: "Appartamento Giallo", en: "Giallo apartment" } },
        { href: "/azzurro", label: { it: "Appartamento Azzurro", en: "Azzurro apartment" } },
      ],
    },
    { page: "tariffe", label: { it: "Tariffe", en: "Rates" } },
    { page: "azienda-agricola", label: { it: "Azienda agricola", en: "The farm" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
    { page: "dove-siamo", label: { it: "Dove siamo", en: "Getting here" } },
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
          it: "Il casale di Casa dei Girasoli visto dall'alto, con San Gimignano sullo sfondo",
          en: "Casa dei Girasoli seen from above, with San Gimignano in the background",
        },
      },
      labelParts: [
        { it: "San Gimignano", en: "San Gimignano" },
        { it: "Chianti senese", en: "Sienese Chianti" },
      ],
      titleLines: [
        { it: "Un casale fra gli ulivi,", en: "A farmhouse among the olive trees," },
        { it: "a un chilometro dalle torri.", en: "one kilometre from the towers." },
      ],
      intro: {
        it: "Quattro appartamenti in un casale del Settecento, con piscina, oliveto e panorama a 360 gradi. San Gimignano si raggiunge a piedi in quindici minuti.",
        en: "Four apartments in an 18th-century farmhouse, with a pool, olive grove and 360-degree views. San Gimignano is a fifteen-minute walk.",
      },
      cta: {
        label: { it: "Scopri gli appartamenti", en: "See the apartments" },
        href: "#appartamenti",
      },
      pillars: [
        { it: "Quattro appartamenti", en: "Four apartments" },
        { it: "Piscina", en: "Swimming pool" },
        { it: "San Gimignano 1 km", en: "San Gimignano 1 km" },
      ],
    },

    {
      type: "story",
      id: "casale",
      number: "1700",
      numberLabel: { it: "IL CASALE", en: "THE FARMHOUSE" },
      ghost: "GIRASOLI",
      titleLines: [
        { it: "Una torre del Duecento,", en: "A 13th-century tower," },
        { it: "un casale del Settecento,", en: "an 18th-century farmhouse," },
      ],
      titleEmphasis: { it: "una casa di famiglia.", en: "a family home." },
      mainImage: {
        src: "estate/colline.webp",
        alt: { it: "Le colline intorno a San Gimignano", en: "The hills around San Gimignano" },
        caption: {
          it: "Panorama a 360° sulle colline del Chianti senese",
          en: "360-degree views over the Sienese Chianti hills",
        },
      },
      aerialImage: {
        src: "estate/aerea.webp",
        alt: {
          it: "Il casale e la piscina visti dall'alto, fra i cipressi",
          en: "The farmhouse and pool from above, among the cypress trees",
        },
        badge: "43°28′ N · 11°02′ E",
      },
      manifesto: {
        label: { it: "LA FAMIGLIA MARCONI", en: "THE MARCONI FAMILY" },
        text: {
          it: "Il casale fu costruito nel 1700 sopra una torre di avvistamento del 1200. Appartiene alla famiglia Marconi, di padre in figlio, ed è diventato Casa dei Girasoli nel 2008 per volontà di Paolo, agricoltore per amore della campagna. Dal 2014 lo porta avanti la figlia Antonella. La ristrutturazione ha lasciato soffitti a volta, travi a vista, archi in mattoni e pavimenti in cotto, con tutti i comfort di oggi. Intorno, dieci ettari di podere con oliveti, cipressi e campi di grano interrotti dai girasoli.",
          en: "The farmhouse was built in 1700 on top of a lookout tower from 1200. It belongs to the Marconi family, handed down from father to son, and became Casa dei Girasoli in 2008 thanks to Paolo, a farmer for the love of the countryside. Since 2014 his daughter Antonella has run it. The renovation kept the vaulted ceilings, exposed beams, brick arches and terracotta floors, with every modern comfort. All around, ten hectares of farmland with olive groves, cypresses and wheat fields broken up by sunflowers.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "appartamenti",
      kicker: { it: "Dormire a Casa dei Girasoli", en: "Stay at Casa dei Girasoli" },
      title: {
        it: "Quattro appartamenti, quattro colori.",
        en: "Four apartments, four colours.",
      },
      text: {
        it: "Verde come la campagna, Arancio come il tramonto, Giallo come i girasoli, Azzurro come il cielo. Da due a quattro persone, ognuno con ingresso indipendente e spazio esterno privato.",
        en: "Green like the countryside, orange like the sunset, yellow like the sunflowers, blue like the sky. For two to four guests, each with its own entrance and private outdoor space.",
      },
      tabs: [
        {
          label: { it: "Gli appartamenti", en: "The apartments" },
          stays: ["verde", "arancio", "giallo", "azzurro"],
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
          it: "La piscina fra i cipressi, con le colline sullo sfondo",
          en: "The pool among the cypress trees, with the hills beyond",
        },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: { it: "Una piscina nuova, sulle colline.", en: "A new pool, on the hills." },
      text: {
        it: "Rettangolare, con la scala romana, circondata da un solarium con ombrelloni e lettini e da un prato verde. È a disposizione solo degli ospiti, adulti e bambini, ed è il posto giusto per rilassarsi dopo una giornata in giro per la Toscana.",
        en: "Rectangular, with Roman steps, surrounded by a solarium with parasols and loungers and by a green lawn. It is for guests only, adults and children alike, and the right place to unwind after a day out in Tuscany.",
      },
    },

    {
      type: "experiences",
      id: "da-fare",
      kicker: { it: "A CASA DEI GIRASOLI", en: "AT CASA DEI GIRASOLI" },
      title: {
        it: "Poche cose da fare, tutte belle.",
        en: "Few things to do, all of them good.",
      },
      intro: {
        it: "Un tuffo, un olio che nasce qui, una passeggiata fino alle torri.",
        en: "A swim, an olive oil made right here, a walk up to the towers.",
      },
      marquee: {
        it: "PISCINA · OLIVETO · VIA FRANCIGENA · TORRI · TRAMONTO · ",
        en: "POOL · OLIVE GROVE · VIA FRANCIGENA · TOWERS · SUNSET · ",
      },
      itemLabel: { it: "DA FARE", en: "TO DO" },
      ctaLabel: { it: "Cosa fare nei dintorni", en: "More to do nearby" },
      ctaHref: "/territorio",
      items: [
        {
          title: "La piscina",
          word: { it: "TUFFO", en: "DIP" },
          meta: { it: "Da metà maggio a metà ottobre", en: "Mid-May to mid-October" },
          text: {
            it: "Solarium con lettini e ombrelloni e un prato tutto intorno, per grandi e piccoli.",
            en: "A solarium with loungers and parasols and a lawn all around, for young and old.",
          },
          image: "estate/piscina-lettini.webp",
        },
        {
          title: "Olio di casa",
          word: { it: "OLIVETO", en: "GROVE" },
          meta: { it: "Moraiolo, Leccino, Frantoio, Pendolino", en: "Moraiolo, Leccino, Frantoio, Pendolino" },
          text: {
            it: "Olive raccolte nei nostri terreni e spremute a freddo entro 24 ore. Si compra in azienda.",
            en: "Olives picked on our own land and cold-pressed within 24 hours. You can buy it at the farm.",
          },
          image: "farm/raccolta.webp",
        },
        {
          title: "Via Francigena",
          word: { it: "CAMMINO", en: "WALK" },
          meta: { it: "15 minuti a piedi", en: "15 minutes on foot" },
          text: {
            it: "Si va a San Gimignano a piedi, con una passeggiata panoramica lungo la Via Francigena. L'auto può restare ferma.",
            en: "Walk to San Gimignano along the Via Francigena on a scenic path. The car can stay parked.",
          },
          image: "estate/ingresso.webp",
        },
      ],
    },

    {
      type: "gallery",
      id: "galleria",
      kicker: { it: "Galleria", en: "Gallery" },
      title: { it: "Fuori dalla porta.", en: "Right outside the door." },
      text: {
        it: "Giardino, terrazze, pergolati e fiori: ogni appartamento ha il suo angolo, e c'è tutto il giardino da dividere.",
        en: "Garden, terraces, pergolas and flowers: each apartment has its own corner, and there is a whole garden to share.",
      },
      images: [
        { src: "estate/giardino.webp", alt: { it: "Il giardino con i lettini", en: "The garden with sun loungers" } },
        { src: "estate/terrazza.webp", alt: { it: "La terrazza in cotto con i fiori", en: "The terracotta terrace with flowers" } },
        { src: "estate/casale.webp", alt: { it: "Il casale in pietra", en: "The stone farmhouse" } },
        { src: "estate/girasole.webp", alt: { it: "Un girasole sulla strada bianca", en: "A sunflower on the white road" } },
        { src: "estate/pergolato.webp", alt: { it: "Il pergolato con tavolo e sedie", en: "The pergola with table and chairs" } },
        { src: "estate/casale-piscina.webp", alt: { it: "Il casale e la piscina dall'alto", en: "The farmhouse and pool from above" } },
        { src: "estate/albero.webp", alt: { it: "Il prato con un albero in fiore", en: "The lawn with a tree in bloom" } },
        { src: "estate/girasoli.webp", alt: { it: "Girasoli davanti al casale", en: "Sunflowers in front of the farmhouse" } },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Prima di partire", en: "Before you go" },
      title: {
        it: "Tariffe, azienda agricola e dintorni.",
        en: "Rates, the farm and the surroundings.",
      },
      items: [
        {
          meta: { it: "Soggiorni da sabato a sabato", en: "Saturday to Saturday stays" },
          title: { it: "Tariffe", en: "Rates" },
          text: {
            it: "Prezzi a settimana per ogni appartamento, per bassa, media e alta stagione, e che cosa è incluso.",
            en: "Weekly prices for each apartment in low, mid and high season, and what is included.",
          },
          image: { src: "estate/girasoli.webp", alt: { it: "Girasoli davanti al casale", en: "Sunflowers in front of the farmhouse" } },
          link: { label: DISCOVER, href: "/tariffe" },
        },
        {
          meta: { it: "Dieci ettari · olio extravergine", en: "Ten hectares · extra virgin olive oil" },
          title: { it: "Azienda agricola", en: "The farm" },
          text: {
            it: "L'oliveto, la raccolta e l'olio che si porta a casa: tutto fatto da noi.",
            en: "The olive grove, the harvest and the oil you take home: all done by us.",
          },
          image: { src: "farm/olive.webp", alt: { it: "Cassette di olive appena raccolte", en: "Crates of freshly picked olives" } },
          link: { label: DISCOVER, href: "/azienda-agricola" },
        },
        {
          meta: { it: "San Gimignano · Siena · Firenze", en: "San Gimignano · Siena · Florence" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "San Gimignano a un chilometro, Certaldo, Volterra, Siena e Firenze in giornata.",
            en: "San Gimignano one kilometre away, with Certaldo, Volterra, Siena and Florence as day trips.",
          },
          image: { src: "territory/san-gimignano.webp", alt: { it: "Le torri di San Gimignano", en: "The towers of San Gimignano" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Nel cuore della Toscana", en: "Heart of Tuscany" },
      title: {
        it: "Le torri a un passo, la Toscana intorno.",
        en: "The towers a step away, Tuscany all around.",
      },
      text: {
        it: "San Gimignano a un chilometro, Certaldo e Colle di Val d'Elsa a pochi minuti, Siena e Firenze in giornata.",
        en: "San Gimignano one kilometre away, Certaldo and Colle di Val d'Elsa a few minutes off, Siena and Florence as day trips.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Casa dei Girasoli",
        en: "Stylised map of distances from Casa dei Girasoli",
      },
      gridLabels: { x: "43°28′ N", y: "11°02′ E" },
      homeLabel: { lines: ["Casa dei", "Girasoli"], sub: "San Gimignano" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Casa dei Girasoli",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "1 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "certaldo", name: { it: "Certaldo", en: "Certaldo" }, distance: "9 km", coordinates: { lat: 43.549, lng: 11.04 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "15 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "25 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "28 km", coordinates: { lat: 43.4006, lng: 10.8603 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "35 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "45 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/giardino.webp",
        alt: { it: "Il giardino con i lettini e il pergolato", en: "The garden with loungers and the pergola" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo ai Girasoli.", en: "We look forward to welcoming you." },
      text: {
        it: "Per sapere se un appartamento è libero scriveteci una email o telefonateci: vi rispondiamo di persona. Arrivi dalle 15 alle 18, partenze entro le 10.",
        en: "To find out whether an apartment is free, email or call us: we'll reply in person. Check-in 3 to 6 pm, check-out by 10 am.",
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
      slug: "tariffe",
      title: { it: "Tariffe e informazioni", en: "Rates and information" },
      description: {
        it: "Prezzi settimanali degli appartamenti Verde, Arancio, Giallo e Azzurro a Casa dei Girasoli, servizi inclusi, orari di arrivo e tassa di soggiorno.",
        en: "Weekly prices for the Verde, Arancio, Giallo and Azzurro apartments at Casa dei Girasoli, what is included, check-in times and tourist tax.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/pergolato.webp",
            alt: { it: "Il pergolato con tavolo e sedie nel giardino", en: "The pergola with table and chairs in the garden" },
          },
          labelParts: [
            { it: "Tariffe", en: "Rates" },
            { it: "Da sabato a sabato", en: "Saturday to Saturday" },
          ],
          titleLines: [
            { it: "Prezzi chiari,", en: "Clear prices," },
            { it: "tutto incluso o quasi", en: "almost all-inclusive" },
          ],
          intro: {
            it: "Consumi, biancheria, pulizia finale e parcheggio coperto sono già nel prezzo. I soggiorni sono di norma settimanali, da sabato a sabato.",
            en: "Utilities, linen, final cleaning and covered parking are already in the price. Stays are normally weekly, Saturday to Saturday.",
          },
          cta: { label: { it: "Vedi le tariffe", en: "See the rates" }, href: "#prezzi" },
          pillars: [
            { it: "Prezzi con IVA", en: "VAT included" },
            { it: "Anche 2 notti", en: "From 2 nights" },
          ],
        },
        {
          type: "facts",
          id: "prezzi",
          kicker: { it: "A settimana", en: "Per week" },
          title: { it: "Le tariffe", en: "The rates" },
          text: {
            it: "Bassa stagione: dal 1 gennaio al 12 maggio e dal 21 ottobre al 31 dicembre. Media: dal 13 maggio al 16 giugno e dal 16 settembre al 20 ottobre. Alta: dal 17 giugno al 15 settembre.",
            en: "Low season: 1 January to 12 May and 21 October to 31 December. Mid: 13 May to 16 June and 16 September to 20 October. High: 17 June to 15 September.",
          },
          image: { src: "estate/terrazza.webp", alt: { it: "La terrazza in cotto con i fiori", en: "The terracotta terrace with flowers" } },
          items: [
            {
              label: { it: "Verde · 2 persone", en: "Verde · 2 guests" },
              value: { it: "da 690 €", en: "from €690" },
              note: { it: "Media 740 € · alta 840 €", en: "Mid 740 € · high 840 €" },
            },
            {
              label: { it: "Arancio · 2 persone", en: "Arancio · 2 guests" },
              value: { it: "da 740 €", en: "from €740" },
              note: { it: "Media 840 € · alta 1.040 €", en: "Mid 840 € · high 1,040 €" },
            },
            {
              label: { it: "Giallo · 4 persone", en: "Giallo · 4 guests" },
              value: { it: "da 990 €", en: "from €990" },
              note: { it: "Media 1.190 € · alta 1.390 €", en: "Mid 1,190 € · high 1,390 €" },
            },
            {
              label: { it: "Azzurro · 4 persone", en: "Azzurro · 4 guests" },
              value: { it: "da 1.090 €", en: "from €1,090" },
              note: { it: "Media 1.290 € · alta 1.490 €", en: "Mid 1,290 € · high 1,490 €" },
            },
            {
              label: { it: "Soggiorni brevi", en: "Short stays" },
              value: { it: "35–63 €", en: "€35–63" },
              note: { it: "A persona a notte, minimo 2 notti", en: "Per person per night, minimum 2 nights" },
            },
          ],
        },
        {
          type: "prose",
          id: "informazioni",
          kicker: { it: "Da sapere", en: "Good to know" },
          title: { it: "Cosa è incluso, cosa no", en: "What is and isn't included" },
          paragraphs: [
            {
              it: "Nel prezzo: consumi di acqua, luce e gas, utensili da cucina, biancheria da letto, da bagno e da cucina, asciugacapelli, TV, pulizia finale, parcheggio coperto, Wi-Fi e kit cortesia.",
              en: "Included: water, electricity and gas, kitchen utensils, bed, bath and kitchen linen, hairdryer, TV, final cleaning, covered parking, Wi-Fi and toiletries.",
            },
            {
              it: "Esclusi: il riscaldamento d'inverno e l'aria condizionata di Azzurro e Arancio, al consumo; biancheria da piscina e cuffie; letto aggiuntivo per bambino (4-11 anni), 150 € a settimana.",
              en: "Not included: winter heating and the air conditioning in Azzurro and Arancio, metered; pool towels and caps; extra child's bed (ages 4-11), €150 per week.",
            },
            {
              it: "Tassa di soggiorno: 1,50 € a persona al giorno, per un massimo di 5 giorni, riscossa per conto del Comune di San Gimignano. Bambini fino a 12 anni esenti; esclusi novembre, dicembre, gennaio e febbraio.",
              en: "Tourist tax: €1.50 per person per day, for a maximum of 5 days, collected for the Municipality of San Gimignano. Children up to 12 exempt; not charged in November, December, January and February.",
            },
            {
              it: "Arrivi dalle 15 alle 18, partenze entro le 10. Nelle due settimane centrali di agosto i prezzi possono variare.",
              en: "Check-in from 3 to 6 pm, check-out by 10 am. In the two middle weeks of August prices may vary.",
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/giardino.webp", alt: { it: "Il giardino con i lettini", en: "The garden with loungers" } },
          kicker: { it: "Disponibilità", en: "Availability" },
          title: { it: "Scriveteci le date.", en: "Tell us your dates." },
          text: {
            it: "Per sapere se c'è posto, scriveteci una email (meglio) o telefonateci: vi rispondiamo con disponibilità e prezzo.",
            en: "To find out if there's room, email us (preferred) or call: we'll reply with availability and price.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "azienda-agricola",
      title: { it: "L'azienda agricola", en: "The farm" },
      description: {
        it: "Dieci ettari di podere a San Gimignano, con oliveto e produzione di olio extravergine: Moraiolo, Leccino, Frantoio e Pendolino.",
        en: "Ten hectares of farmland in San Gimignano, with an olive grove and extra virgin olive oil: Moraiolo, Leccino, Frantoio and Pendolino.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "farm/olive.webp",
            alt: { it: "Cassette di olive appena raccolte nell'oliveto", en: "Crates of freshly picked olives in the grove" },
          },
          labelParts: [
            { it: "Azienda agricola", en: "The farm" },
            { it: "Olio extravergine", en: "Extra virgin olive oil" },
          ],
          titleLines: [
            { it: "L'olio lo facciamo", en: "We make the oil" },
            { it: "dalla pianta alla bottiglia", en: "from tree to bottle" },
          ],
          intro: {
            it: "Dieci ettari a San Gimignano, una delle zone più note per l'olio extravergine. Seguiamo ogni fase di persona.",
            en: "Ten hectares in San Gimignano, one of the best-known areas for extra virgin olive oil. We follow every step in person.",
          },
          cta: { label: { it: "Come lavoriamo", en: "How we work" }, href: "#olio" },
          pillars: [
            { it: "10 ettari", en: "10 hectares" },
            { it: "Senza pesticidi", en: "No pesticides" },
          ],
        },
        {
          type: "chapters",
          id: "olio",
          kicker: { it: "L'olio", en: "The oil" },
          title: { it: "Dalla pianta alla bottiglia", en: "From tree to bottle" },
          items: [
            {
              word: { it: "Oliveto", en: "Grove" },
              kicker: { it: "Quattro cultivar", en: "Four cultivars" },
              title: { it: "Moraiolo, Leccino, Frantoio, Pendolino", en: "Moraiolo, Leccino, Frantoio, Pendolino" },
              text: {
                it: "Curiamo personalmente la pianta e la terra dove affonda le radici. Le olive sono coltivate con metodi naturali, senza uso di pesticidi.",
                en: "We look after the tree and the soil it grows in ourselves. The olives are grown by natural methods, with no pesticides.",
              },
              image: { src: "farm/raccolta-lavoro.webp", alt: { it: "La raccolta delle olive nell'oliveto", en: "Picking olives in the grove" } },
            },
            {
              word: { it: "Raccolta", en: "Harvest" },
              kicker: { it: "Solo olive nostre", en: "Only our olives" },
              title: { it: "Spremute a freddo in 24 ore", en: "Cold-pressed within 24 hours" },
              text: {
                it: "Solo olive raccolte nei nostri terreni, portate al frantoio e spremute a freddo nelle ventiquattro ore successive, per conservare le qualità dell'olio.",
                en: "Only olives picked on our own land, taken to the mill and cold-pressed within the following twenty-four hours, to keep the oil's qualities intact.",
              },
              image: { src: "farm/raccolta.webp", alt: { it: "Cassette di olive di colori diversi", en: "Crates of olives in different colours" } },
            },
            {
              word: { it: "Casa", en: "Home" },
              kicker: { it: "Vendita diretta", en: "Direct sale" },
              title: { it: "Da portare a casa", en: "To take home" },
              text: {
                it: "L'olio si acquista direttamente in azienda: un profumo e un sapore di altri tempi da mettere in valigia.",
                en: "You can buy the oil directly at the farm: a scent and flavour of times gone by to pack in your suitcase.",
              },
              image: { src: "farm/olio.webp", alt: { it: "Una latta di olio extravergine della casa", en: "A tin of the farm's extra virgin olive oil" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/albero.webp", alt: { it: "Il prato con un albero in fiore", en: "The lawn with a tree in bloom" } },
          kicker: { it: "L'olio di Girasoli", en: "Girasoli olive oil" },
          title: { it: "Chiedeteci l'olio.", en: "Ask us about the oil." },
          text: {
            it: "Per acquistare l'olio scriveteci o passate in azienda durante il soggiorno.",
            en: "To buy the oil, write to us or stop by the farm during your stay.",
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
        it: "Cosa fare intorno a Casa dei Girasoli: San Gimignano a piedi, Certaldo Alto, la Via Francigena, Volterra, Siena, Firenze e il Chianti.",
        en: "What to do around Casa dei Girasoli: San Gimignano on foot, Certaldo Alto, the Via Francigena, Volterra, Siena, Florence and Chianti.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/colline.webp", alt: { it: "Le colline intorno a San Gimignano", en: "The hills around San Gimignano" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "San Gimignano", en: "San Gimignano" },
          ],
          titleLines: [
            { it: "La Toscana migliore", en: "The best of Tuscany" },
            { it: "a portata di giornata", en: "within a day trip" },
          ],
          intro: {
            it: "Casa dei Girasoli sta al centro della Toscana: San Gimignano è a un chilometro e le altre città d'arte si raggiungono in giornata.",
            en: "Casa dei Girasoli sits in the middle of Tuscany: San Gimignano is a kilometre away and the other art cities are an easy day trip.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "San Gimignano 1 km", en: "San Gimignano 1 km" },
            { it: "Siena 35 km", en: "Siena 35 km" },
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
              kicker: { it: "A 1 km, 15 minuti a piedi", en: "1 km away, 15 minutes on foot" },
              title: { it: "San Gimignano", en: "San Gimignano" },
              text: {
                it: "La città medievale delle belle torri, patrimonio mondiale dell'UNESCO. Si raggiunge a piedi con una passeggiata panoramica lungo la Via Francigena. Di sera, con le torri illuminate, sembra una fiaba. Ristoranti, pizzerie, bar e negozi con i prodotti del posto, dalla Vernaccia al Chianti, dallo zafferano all'olio.",
                en: "The medieval city of beautiful towers, a UNESCO World Heritage Site. You can walk there along the Via Francigena on a panoramic path. At night, with the towers lit up, it feels like a fairy tale. Restaurants, pizzerias, bars and shops with local produce, from Vernaccia to Chianti, from saffron to olive oil.",
              },
              image: { src: "territory/san-gimignano.webp", alt: { it: "Le torri di San Gimignano", en: "The towers of San Gimignano" } },
            },
            {
              word: { it: "Borgo", en: "Village" },
              kicker: { it: "A 9 km", en: "9 km away" },
              title: { it: "Certaldo Alto", en: "Certaldo Alto" },
              text: {
                it: "Uno dei borghi più caratteristici della Toscana, patria di Giovanni Boccaccio. Il centro medievale è perfettamente conservato: si sale a piedi o con la funicolare.",
                en: "One of the most characteristic villages in Tuscany, home of the poet Giovanni Boccaccio. The medieval centre is perfectly preserved: you can walk up or take the funicular.",
              },
            },
            {
              word: { it: "Cammino", en: "Pilgrim road" },
              kicker: { it: "A piedi, a cavallo, in bici", en: "On foot, horseback or bike" },
              title: { it: "Via Francigena e sentieri", en: "Via Francigena and trails" },
              text: {
                it: "La Via Francigena, la strada di pellegrini e mercanti da Canterbury a Roma, passa da San Gimignano. Intorno ci sono sentieri per trekking e mountain bike e, a meno di 7 km, un maneggio per passeggiate a cavallo. Si organizzano anche gite in 500 d'epoca o in Vespa.",
                en: "The Via Francigena, the road of pilgrims and merchants from Canterbury to Rome, runs through San Gimignano. Around the farm there are trails for hiking and mountain biking and, less than 7 km away, a riding stable for rides through the hills. Trips in a vintage Fiat 500 or on a Vespa can also be arranged.",
              },
              image: { src: "estate/ingresso.webp", alt: { it: "La strada bianca che porta al casale", en: "The white road leading to the farmhouse" } },
            },
            {
              word: { it: "Città", en: "Cities" },
              kicker: { it: "In giornata", en: "Day trips" },
              title: { it: "Volterra, Siena, Firenze", en: "Volterra, Siena, Florence" },
              text: {
                it: "Volterra a 28 km, Siena a 35, Firenze a 45; poi Pisa, Lucca, Montalcino, Pienza e Montepulciano. Il Chianti Classico, con Castellina, Radda, Gaiole e Greve, è a circa 35 km. Il mare della Versilia è a 70.",
                en: "Volterra 28 km away, Siena 35, Florence 45; then Pisa, Lucca, Montalcino, Pienza and Montepulciano. The Chianti Classico area, with Castellina, Radda, Gaiole and Greve, is about 35 km away. The Versilia coast is 70.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/casale.webp", alt: { it: "Il casale in pietra", en: "The stone farmhouse" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi diamo noi i consigli.", en: "We'll point you the way." },
          text: {
            it: "All'arrivo troverete mappe e guide, e consigli su sagre, mercati, eventi e ristoranti tipici, alcuni convenzionati con noi.",
            en: "On arrival you'll find maps and guides, and tips on local festivals, markets, events and typical restaurants, some of them in partnership with us.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "dove-siamo",
      title: { it: "Dove siamo", en: "Getting here" },
      description: {
        it: "Come arrivare a Casa dei Girasoli, località Strada, San Gimignano: in auto da nord, da sud e da Pisa, in treno e in autobus.",
        en: "How to reach Casa dei Girasoli, Strada, San Gimignano: by car from the north, south and Pisa, by train and bus.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/casale-piscina.webp", alt: { it: "Il casale e la piscina dall'alto", en: "The farmhouse and pool from above" } },
          labelParts: [
            { it: "Dove siamo", en: "Getting here" },
            { it: "Loc. Strada", en: "Strada" },
          ],
          titleLines: [
            { it: "In fondo alla strada bianca,", en: "At the end of the white road," },
            { it: "dopo i cipressi", en: "past the cypress trees" },
          ],
          intro: {
            it: "A un chilometro da San Gimignano, sulla strada per Certaldo. Il casale è in fondo a una breve strada bianca con un filare di cipressi.",
            en: "One kilometre from San Gimignano, on the road to Certaldo. The farmhouse is at the end of a short white road lined with cypress trees.",
          },
          cta: { label: { it: "Le indicazioni", en: "Directions" }, href: "#arrivare" },
          pillars: [
            { it: "Stazione di Poggibonsi", en: "Poggibonsi station" },
            { it: "Parcheggio gratuito", en: "Free parking" },
          ],
        },
        {
          type: "prose",
          id: "arrivare",
          kicker: { it: "In auto", en: "By car" },
          title: { it: "Come arrivare", en: "How to get here" },
          paragraphs: [
            {
              it: "Da nord: A1 Milano-Roma, uscita Firenze-Impruneta, superstrada Firenze-Siena per circa 35 km, uscita Poggibonsi Nord, poi le indicazioni per San Gimignano (circa 11 km).",
              en: "From the north: A1 Milan-Rome, Firenze-Impruneta exit, the Florence-Siena expressway for about 35 km, Poggibonsi Nord exit, then follow signs for San Gimignano (about 11 km).",
            },
            {
              it: "Da sud: A1 Roma-Milano, uscita Valdichiana, raccordo Siena-Bettolle, uscita Siena Ovest, superstrada Siena-Firenze, uscita Poggibonsi Nord, poi San Gimignano.",
              en: "From the south: A1 Rome-Milan, Valdichiana exit, the Siena-Bettolle link road, Siena Ovest exit, the Siena-Florence expressway, Poggibonsi Nord exit, then San Gimignano.",
            },
            {
              it: "Da Pisa: superstrada Firenze-Pisa-Livorno in direzione Firenze, uscita Empoli Ovest, indicazioni per Castelfiorentino e Certaldo, poi San Gimignano.",
              en: "From Pisa: the Florence-Pisa-Livorno expressway towards Florence, Empoli Ovest exit, signs for Castelfiorentino and Certaldo, then San Gimignano.",
            },
            {
              it: "A San Gimignano costeggiate le mura sulla destra e seguite per Certaldo. Dopo circa 2 km, alla grande rotonda, proseguite per Certaldo; dopo circa 300 m girate a destra per Podere Paradiso e, dopo 30 m, a sinistra sulla strada bianca con i cipressi: in fondo c'è il casale.",
              en: "In San Gimignano keep the town walls on your right and follow signs for Certaldo. After about 2 km, at the large roundabout, continue towards Certaldo; after about 300 m turn right for Podere Paradiso and, after 30 m, left onto the white road lined with cypresses: the farmhouse is at the end.",
            },
          ],
          image: { src: "estate/ingresso.webp", alt: { it: "La strada bianca che porta al casale", en: "The white road leading to the farmhouse" } },
        },
        {
          type: "prose",
          id: "mezzi",
          kicker: { it: "Senza auto", en: "Without a car" },
          title: { it: "In treno e in autobus", en: "By train and bus" },
          paragraphs: [
            {
              it: "La stazione più vicina è Poggibonsi. Da lì un autobus porta a San Gimignano e può lasciarvi direttamente alla grande rotonda della località Strada: da qui si prosegue a piedi, circa 300 m verso Certaldo e poi a destra per Podere Paradiso.",
              en: "The nearest station is Poggibonsi. From there a bus runs to San Gimignano and can drop you right at the large roundabout in Strada: from there walk about 300 m towards Certaldo, then right for Podere Paradiso.",
            },
            {
              it: "In alternativa, l'autobus arriva a Porta San Giovanni, a San Gimignano, dove un secondo autobus in direzione Strada vi lascia alla stessa rotonda.",
              en: "Alternatively, the bus goes to Porta San Giovanni in San Gimignano, where a second bus towards Strada drops you at the same roundabout.",
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/girasole.webp", alt: { it: "Un girasole sulla strada bianca", en: "A sunflower on the white road" } },
          kicker: { it: "Siamo qui", en: "We are here" },
          title: { it: "Se vi perdete, chiamateci.", en: "If you get lost, call us." },
          text: {
            it: "Vi guidiamo noi fino al cancello.",
            en: "We'll guide you in.",
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
      slug: "verde",
      name: "Appartamento Verde",
      category: { it: "PER DUE", en: "FOR TWO" },
      size: "1",
      guests: "2",
      layout: { it: "35 mq · 1 camera · piano terra", en: "35 sq m · 1 bedroom · ground floor" },
      blurb: {
        it: "La camera a volta con mattoni antichi e muri in pietra, fresca d'estate e calda d'inverno.",
        en: "The vaulted bedroom with ancient brick and stone walls, cool in summer and warm in winter.",
      },
      description: {
        it: "Al piano terra, un appartamento di 35 mq con una camera matrimoniale, un bagno con doccia, un piccolo soggiorno con cucina e uno spazio esterno privato con tavolo e sedie. La camera ha il soffitto a volta con mattoni antichi e muri originali in pietra: intima e romantica. Poggia sulle spesse mura dell'ex torre di avvistamento, che lo tengono fresco d'estate, senza bisogno di aria condizionata, e caldo d'inverno.",
        en: "On the ground floor, a 35 sq m apartment with a double bedroom, a shower room, a small sitting room with kitchen and a private outdoor space with table and chairs. The bedroom has a vaulted ceiling with ancient brick and original stone walls: intimate and romantic. It stands on the thick walls of the former lookout tower, which keep it cool in summer, with no need for air conditioning, and warm in winter.",
      },
      cover: "stays/verde-01.webp",
      detail: "stays/verde-02.webp",
      gallery: [],
      amenities: [WIFI, PARKING, KITCHEN, OUTDOOR, POOL, LINEN, SAFE],
      units: [
        {
          slug: "appartamento-verde",
          name: "Appartamento Verde",
          guests: "2",
          layout: { it: "1 camera matrimoniale · 1 bagno con doccia", en: "1 double bedroom · 1 shower room" },
          text: {
            it: "Camera con soffitto a volta, bagno con box doccia, piccolo soggiorno con cucina accessoriata, spazio esterno privato. Possibile aggiungere un lettino da campeggio per un bimbo da 0 a 3 anni.",
            en: "Bedroom with vaulted ceiling, shower room, small sitting room with equipped kitchen, private outdoor space. A camp cot can be added for a child aged 0 to 3.",
          },
          images: photos("verde", 4),
        },
      ],
    },
    {
      slug: "arancio",
      name: "Appartamento Arancio",
      category: { it: "PER DUE", en: "FOR TWO" },
      size: "1",
      guests: "2",
      layout: { it: "50 mq · 1 camera · giardino privato", en: "50 sq m · 1 bedroom · private garden" },
      blurb: {
        it: "Colori caldi, travi a vista e una finestra nel tetto per guardare le stelle.",
        en: "Warm colours, exposed beams and a roof window for watching the stars.",
      },
      description: {
        it: "Al piano terra, 50 mq arredati con colori caldi: alti soffitti con mattoni e travi originali, un ampio soggiorno con cucina che si affaccia sul giardino privato e una camera spaziosa con una finestra ritagliata nel tetto, da cui si guardano le costellazioni. Dalle finestre e dal giardino si vedono le vallate intorno. In camera c'è posto per un letto aggiuntivo per un bambino. Una porta lo collega all'appartamento Azzurro: aperta, i due diventano un unico grande appartamento.",
        en: "On the ground floor, 50 sq m furnished in warm colours: high ceilings with original brick and beams, a large living room with kitchen opening onto the private garden, and a spacious bedroom with a window cut into the roof for watching the constellations. From the windows and the garden you see the surrounding valleys. The bedroom has room for an extra child's bed. A door connects it to the Azzurro apartment: opened, the two become one large apartment.",
      },
      cover: "stays/arancio-01.webp",
      detail: "stays/arancio-02.webp",
      gallery: [],
      amenities: [WIFI, PARKING, KITCHEN, OUTDOOR, DISHWASHER, AIRCON, POOL, LINEN, SAFE],
      units: [
        {
          slug: "appartamento-arancio",
          name: "Appartamento Arancio",
          guests: "2",
          layout: { it: "1 camera matrimoniale · 1 bagno con doccia", en: "1 double bedroom · 1 shower room" },
          text: {
            it: "Camera con finestra nel tetto, bagno con box doccia, ampio soggiorno con cucina accessoriata e giardino privato. Letto aggiuntivo per un bambino da 0 a 12 anni, a pagamento.",
            en: "Bedroom with roof window, shower room, large living room with equipped kitchen and private garden. Extra bed for a child aged 0 to 12, at extra cost.",
          },
          images: photos("arancio", 5),
        },
      ],
    },
    {
      slug: "giallo",
      name: "Appartamento Giallo",
      category: { it: "PER QUATTRO", en: "FOR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "75 mq · 2 camere · camino · gazebo", en: "75 sq m · 2 bedrooms · fireplace · gazebo" },
      blurb: {
        it: "Al primo piano, sull'antica pianta della torre: camino, mobili toscani e gazebo.",
        en: "On the first floor, on the old footprint of the tower: fireplace, Tuscan furniture and gazebo.",
      },
      description: {
        it: "Al primo piano, 75 mq sull'antica pianta della torre di avvistamento. Il grande salone ha l'antico camino rurale, i soffitti di mattoni e le travi originali. L'arredamento è fatto di mobili toscani del territorio, alcuni originali dell'Ottocento. Le due camere non sono attigue, così ognuno ha la sua intimità, e da tutte le finestre si vede la campagna a 360 gradi. Gazebo e giardino sono solo per chi sta qui: colazioni, aperitivi e cene all'aperto.",
        en: "On the first floor, 75 sq m on the old footprint of the lookout tower. The large living room has the old rustic fireplace, brick ceilings and original beams. The furniture is local Tuscan, some pieces original from the 1800s. The two bedrooms are not adjoining, so everyone has privacy, and every window looks out over the countryside in all directions. The gazebo and garden are reserved for this apartment: breakfasts, aperitifs and dinners outdoors.",
      },
      cover: "stays/giallo-01.webp",
      detail: "stays/giallo-02.webp",
      gallery: [],
      amenities: [WIFI, PARKING, KITCHEN, FIREPLACE, OUTDOOR, POOL, LINEN],
      units: [
        {
          slug: "appartamento-giallo",
          name: "Appartamento Giallo",
          guests: "4",
          layout: { it: "1 matrimoniale · 1 doppia · 1 bagno con doccia", en: "1 double · 1 twin/double · 1 shower room" },
          text: {
            it: "Una camera matrimoniale e una doppia (letto matrimoniale o due letti separati), antibagno e bagno con doccia, salone con cucina e camino funzionante, gazebo e giardino privati.",
            en: "One double bedroom and one room with a double or two single beds, anteroom and shower room, living room with kitchen and working fireplace, private gazebo and garden.",
          },
          images: photos("giallo", 7),
        },
      ],
    },
    {
      slug: "azzurro",
      name: "Appartamento Azzurro",
      category: { it: "PER QUATTRO", en: "FOR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "70 mq · 2 camere · camino · pergolato", en: "70 sq m · 2 bedrooms · fireplace · pergola" },
      blurb: {
        it: "Il più grande al piano terra: salone con camino, porte-finestre sul panorama e pergolato con tavolo in marmo.",
        en: "The largest on the ground floor: living room with fireplace, French doors onto the view and a pergola with a marble table.",
      },
      description: {
        it: "Al piano terra, 70 mq con due camere matrimoniali, una stanza guardaroba, un bagno con doccia e un grande salone con cucina e camino funzionante. Le camere e il salone hanno grandi porte-finestre sullo spazio esterno privato e sul paesaggio. Davanti al salone, il pergolato ha un tavolo di marmo per mangiare, leggere e stare insieme. Nella camera principale ci sono la toeletta con specchio e un'ampia stanza-guardaroba. Si può aggiungere un letto per un bambino. Una porta lo collega all'Arancio: aperta, ospita 6 adulti e 2 bambini.",
        en: "On the ground floor, 70 sq m with two double bedrooms, a dressing room, a shower room and a large living room with kitchen and working fireplace. The bedrooms and the living room have large French doors onto the private outdoor space and the landscape. In front of the living room, the pergola has a marble table for eating, reading and being together. The main bedroom has a dressing table with mirror and a large walk-in wardrobe room. A bed can be added for a child. A door connects it to Arancio: opened, it sleeps 6 adults and 2 children.",
      },
      cover: "stays/azzurro-01.webp",
      detail: "stays/azzurro-02.webp",
      gallery: [],
      amenities: [WIFI, PARKING, KITCHEN, FIREPLACE, OUTDOOR, DISHWASHER, AIRCON, POOL, LINEN, SAFE],
      units: [
        {
          slug: "appartamento-azzurro",
          name: "Appartamento Azzurro",
          guests: "4",
          layout: { it: "2 camere matrimoniali · 1 bagno con doccia", en: "2 double bedrooms · 1 shower room" },
          text: {
            it: "Due camere matrimoniali, stanza guardaroba, bagno con box doccia, salone con cucina e camino, pergolato privato con tavolo in marmo. Letto aggiuntivo per un bambino da 0 a 12 anni, a pagamento.",
            en: "Two double bedrooms, dressing room, shower room, living room with kitchen and fireplace, private pergola with marble table. Extra bed for a child aged 0 to 12, at extra cost.",
          },
          images: photos("azzurro", 8),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli appartamenti", en: "All apartments" },
    kicker: { it: "Il vostro appartamento ai Girasoli", en: "Your apartment at Casa dei Girasoli" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'appartamento", en: "Inside" },
    unitsLabel: { it: "L'appartamento", en: "The apartment" },
    askLabel: { it: "Chiedi disponibilità", en: "Ask about availability" },
    askMessage: {
      it: "Buongiorno, vorrei sapere la disponibilità dell'{name} a Casa dei Girasoli.",
      en: "Hello, I'd like to know the availability of the {name} at Casa dei Girasoli.",
    },
    amenitiesLabel: { it: "Nell'appartamento", en: "In the apartment" },
    ctaTitle: { it: "Un'estate fra gli ulivi.", en: "A summer among the olive trees." },
    ctaLabel: WHATSAPP_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "SCRIVICI DIRETTAMENTE", en: "WRITE TO US DIRECTLY" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Scrivendoci o telefonando parlate direttamente con la famiglia, senza intermediari.",
      en: "By writing or calling you deal directly with the family, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Agriturismo Casa dei Girasoli" },

  /* Il sito attuale usa già Iubenda: si rimanda ai documenti del cliente. */
  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/21686409",
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/21686409/cookie-policy",
    },
  ],
};

export default site;
