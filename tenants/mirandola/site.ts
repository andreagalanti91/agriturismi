/**
 * AGRITURISMO LA MIRANDOLA
 * ========================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Nerbona,
 * con i contenuti pubblici di lamirandola.it: testi, appartamenti, prodotti,
 * recensione e fotografie vengono da lì, riscritti e riorganizzati.
 *
 *   Appartamenti ▾  /il-falco  /il-fagiano  /il-capriolo  /lusignolo
 *   Agriturismo /agriturismo · Prodotti /prodotti · Territorio /territorio
 *   Prenota → lamirandola.it/booking-page
 *
 * LE FOTO: solo quelle scattate in struttura. Il sito attuale usa anche
 * immagini di repertorio del tema WordPress, lasciate fuori.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

/* Dotazioni uguali in tutti gli appartamenti. */
const POOL: Localized = { it: "Piscina con solarium", en: "Pool with sun terrace" };
const COFFEE: Localized = { it: "Macchina del caffè, moka e microonde", en: "Coffee machine, moka pot and microwave" };
const KEYS: Localized = { it: "Chiavi in consegna: rientrate quando volete", en: "Your own keys: come and go as you like" };
const LUGGAGE: Localized = { it: "Deposito bagagli anche dopo il check-out", en: "Luggage storage after check-out" };
const PETS: Localized = { it: "Animali benvenuti", en: "Pets welcome" };

const site: SiteConfig = {
  brand: {
    id: "mirandola",
    prefix: "Agriturismo",
    name: "La Mirandola",
    logo: "logo.svg",
    /* Codice Identificativo Nazionale, come pubblicato su lamirandola.it. */
    cin: "IT050039B5FEEBG6QA",
  },

  contact: {
    phone: "393497842455",
    phoneDisplay: "+39 349 784 2455",
    email: "info@lamirandola.it",
    address: ["Località Villamagna", "56048 Volterra (PI)"],
    vat: "02229930504",
    coordinates: { lat: 43.4813, lng: 10.8388 },
    social: [
      { label: "Facebook", href: "https://www.facebook.com/agriturismolamirandola/" },
    ],
  },

  seo: {
    domain: "https://lamirandola.it",
    title: {
      it: "Agriturismo La Mirandola | Appartamenti con piscina a Volterra",
      en: "Agriturismo La Mirandola | Apartments with pool near Volterra",
    },
    description: {
      it: "Quattro appartamenti in stile rustico toscano con piscina, vino e olio biologici, sulle colline fra Volterra e San Gimignano.",
      en: "Four rustic Tuscan apartments with a pool, organic wine and olive oil, on the hills between Volterra and San Gimignano.",
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
        { href: "/il-falco", label: { it: "Il Falco", en: "Il Falco" } },
        { href: "/il-fagiano", label: { it: "Il Fagiano", en: "Il Fagiano" } },
        { href: "/il-capriolo", label: { it: "Il Capriolo", en: "Il Capriolo" } },
        { href: "/lusignolo", label: { it: "L'Usignolo", en: "L'Usignolo" } },
      ],
    },
    { page: "agriturismo", label: { it: "Agriturismo", en: "The farm" } },
    { page: "prodotti", label: { it: "Prodotti", en: "Produce" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: "https://lamirandola.it/booking-page/",
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
          it: "L'ingresso dell'agriturismo La Mirandola fra gli ulivi",
          en: "The entrance to La Mirandola among the olive trees",
        },
      },
      labelParts: [
        { it: "Agriturismo biologico", en: "Organic farm stay" },
        { it: "Volterra", en: "Volterra" },
      ],
      titleLines: [
        { it: "In cima al colle,", en: "On top of the hill," },
        { it: "fra vigne e ulivi.", en: "among vines and olives." },
      ],
      intro: {
        it: "Quattro appartamenti in pietra con piscina, vino e olio di nostra produzione, a pochi minuti da Volterra e San Gimignano.",
        en: "Four stone apartments with a pool, our own wine and olive oil, minutes from Volterra and San Gimignano.",
      },
      cta: {
        label: { it: "Scopri gli appartamenti", en: "See the apartments" },
        href: "#appartamenti",
      },
      pillars: [
        { it: "Quattro appartamenti · piscina", en: "Four apartments · pool" },
        { it: "Biologico, a km zero", en: "Organic, zero-mile" },
        { it: "Aperti tutto l'anno", en: "Open all year" },
      ],
    },

    {
      type: "story",
      id: "agriturismo",
      number: "01",
      numberLabel: { it: "L'AZIENDA AGRICOLA", en: "THE FARM" },
      ghost: "MIRANDOLA",
      titleLines: [
        { it: "Un colle sopra", en: "A hill above" },
        { it: "la campagna", en: "the countryside" },
      ],
      titleEmphasis: { it: "di Volterra.", en: "of Volterra." },
      mainImage: {
        src: "estate/casale.webp",
        alt: { it: "Il casale della Mirandola", en: "The La Mirandola farmhouse" },
        caption: {
          it: "Travi, archi e pietra a vista: lo stile rustico toscano",
          en: "Beams, arches and exposed stone: rustic Tuscan style",
        },
      },
      aerialImage: {
        src: "estate/vigna-trattore.webp",
        alt: { it: "La vigna dell'azienda", en: "The farm's vineyard" },
        badge: "43°28′ N · 10°50′ E",
      },
      manifesto: {
        label: { it: "PASSIONE E NATURA", en: "PASSION AND NATURE" },
        text: {
          it: "La Mirandola sta in alto su un colle e domina un paesaggio di vigneti, oliveti e campi di grano. Claudia e la sua famiglia coltivano la terra nel rispetto dell'ambiente e delle tradizioni contadine, con metodo biologico: il vino e l'olio che si assaggiano in terrazza vengono da qui. Gli appartamenti sono ricavati dal vecchio casale e conservano il fascino della campagna toscana.",
          en: "La Mirandola sits high on a hill, overlooking a landscape of vineyards, olive groves and wheat fields. Claudia and her family farm the land organically, respecting the environment and country traditions: the wine and oil you taste on the terrace come from here. The apartments were carved from the old farmhouse and keep all the charm of the Tuscan countryside.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "appartamenti",
      kicker: { it: "Dormire alla Mirandola", en: "Stay at La Mirandola" },
      title: {
        it: "Quattro appartamenti, ognuno con il suo spazio fuori.",
        en: "Four apartments, each with its own outdoor space.",
      },
      text: {
        it: "Indipendenti, da due a sei persone, con giardino o spazio esterno privato e barbecue.",
        en: "Self-contained, for two to six guests, with a private garden or outdoor area and barbecue.",
      },
      tabs: [
        {
          label: { it: "Gli appartamenti", en: "The apartments" },
          stays: ["il-falco", "il-fagiano", "il-capriolo", "lusignolo"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina-vista.webp",
        alt: { it: "La piscina affacciata sulla campagna", en: "The pool overlooking the countryside" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Acqua, solarium e la campagna fino all'orizzonte.",
        en: "Water, a sun terrace and countryside to the horizon.",
      },
      text: {
        it: "Aperta nella stagione estiva, con sdraio e lettini, accanto agli appartamenti e circondata dai profumi e dalla quiete della campagna.",
        en: "Open in summer, with deckchairs and loungers, next to the apartments and surrounded by the scents and quiet of the countryside.",
      },
    },

    {
      type: "experiences",
      id: "giornate",
      kicker: { it: "GIORNATE ALLA MIRANDOLA", en: "DAYS AT LA MIRANDOLA" },
      title: {
        it: "Lentezza, sapori e aria aperta.",
        en: "Slowness, flavours and open air.",
      },
      intro: {
        it: "Quello che offre la fattoria, a pochi passi dalla porta di casa.",
        en: "What the farm offers, a few steps from your door.",
      },
      marquee: {
        it: "PISCINA · VINO · OLIO · SENTIERI · BARBECUE · ",
        en: "POOL · WINE · OLIVE OIL · TRAILS · BARBECUE · ",
      },
      itemLabel: { it: "IN FATTORIA", en: "AT THE FARM" },
      ctaLabel: { it: "I nostri prodotti", en: "Our produce" },
      ctaHref: "/prodotti",
      items: [
        {
          title: "Degustazione in terrazza",
          word: { it: "VINO", en: "WINE" },
          meta: { it: "Vino e olio di nostra produzione", en: "Our own wine and oil" },
          text: {
            it: "I nostri vini e l'olio extravergine biologico, assaggiati sulla terrazza con la campagna davanti.",
            en: "Our wines and organic extra virgin olive oil, tasted on the terrace with the countryside in front of you.",
          },
          image: "estate/calice.webp",
        },
        {
          title: "Barbecue in giardino",
          word: { it: "BRACE", en: "GRILL" },
          meta: { it: "Giardino privato e barbecue", en: "Private garden and barbecue" },
          text: {
            it: "La sera si cena fuori: ogni appartamento ha il suo spazio all'aperto, e c'è il barbecue per grigliare.",
            en: "In the evening you eat outside: every apartment has its own outdoor space, and there's a barbecue for grilling.",
          },
          image: "estate/barbecue.webp",
        },
        {
          title: "Passeggiate",
          word: { it: "SENTIERI", en: "TRAILS" },
          meta: { it: "Boschi, colline, cavallo", en: "Woods, hills, horse riding" },
          text: {
            it: "Sentieri che attraversano boschi e colline, a piedi o a cavallo, partendo direttamente dalla fattoria.",
            en: "Trails crossing woods and hills, on foot or on horseback, starting right from the farm.",
          },
          image: "estate/oliveta.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "L'azienda, i prodotti e la Toscana intorno.",
        en: "The farm, its produce and the Tuscany around you.",
      },
      items: [
        {
          meta: { it: "Biologico", en: "Organic" },
          title: { it: "L'agriturismo", en: "The farm" },
          text: {
            it: "Come coltiviamo, cosa trovate in struttura e quello che serve sapere prima di arrivare.",
            en: "How we farm, what you'll find on site and what to know before you arrive.",
          },
          image: { src: "estate/pergola.webp", alt: { it: "La pergola", en: "The pergola" } },
          link: { label: DISCOVER, href: "/agriturismo" },
        },
        {
          meta: { it: "Vino e olio", en: "Wine and oil" },
          title: { it: "Prodotti", en: "Produce" },
          text: {
            it: "Tocco Rosso, Poggiara, Ciliegiolo Ego e l'olio extravergine: si assaggiano e si comprano qui.",
            en: "Tocco Rosso, Poggiara, Ciliegiolo Ego and our extra virgin oil: taste and buy them here.",
          },
          image: { src: "estate/barrique.webp", alt: { it: "Le barrique", en: "The barriques" } },
          link: { label: DISCOVER, href: "/prodotti" },
        },
        {
          meta: { it: "Volterra · San Gimignano · Siena", en: "Volterra · San Gimignano · Siena" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Volterra a un quarto d'ora, San Gimignano a mezz'ora, Siena, Pisa e Firenze in giornata.",
            en: "Volterra a quarter of an hour away, San Gimignano half an hour, Siena, Pisa and Florence as day trips.",
          },
          image: { src: "territory/volterra.webp", alt: { it: "Volterra", en: "Volterra" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "reviews",
      id: "ospiti",
      kicker: { it: "Dicono di noi", en: "What guests say" },
      title: { it: "Una settimana che si ricorda.", en: "A week to remember." },
      /* Dal sito lamirandola.it. */
      items: [
        {
          source: "lamirandola.it",
          score: "5/5",
          title: { it: "Location incantevole con panorama mozzafiato", en: "Enchanting place with a breathtaking view" },
          quote: {
            it: "Abbiamo trascorso da poco una piacevolissima settimana nell'agriturismo gestito da Claudia e la sua famiglia. Ci ha descritto con passione e fatto assaggiare gli ottimi vini e olio di loro produzione. Ci siamo trovati benissimo e non vediamo l'ora di tornarci, magari di primavera per ammirare la natura circostante in fiore.",
            en: "We recently spent a lovely week at the farm run by Claudia and her family. She passionately told us about, and let us taste, the excellent wines and oil they produce. We felt very much at home and can't wait to return, perhaps in spring to see the countryside in bloom.",
          },
          author: "Isabelle Huppe",
        },
      ],
      links: [
        { label: { it: "Recensioni su Tripadvisor", en: "Reviews on Tripadvisor" }, href: "https://www.tripadvisor.it/Search?q=Agriturismo%20La%20Mirandola%20Volterra" },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Fra Volterra e San Gimignano", en: "Between Volterra and San Gimignano" },
      title: {
        it: "Le città d'arte della Toscana, in giornata.",
        en: "Tuscany's art cities, as day trips.",
      },
      text: {
        it: "Villamagna sotto casa, Volterra a un quarto d'ora, San Gimignano a mezz'ora; Siena, Pisa e Firenze entro un'ora e un quarto.",
        en: "Villamagna just below, Volterra a quarter of an hour away, San Gimignano half an hour; Siena, Pisa and Florence within an hour and a quarter.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze dall'agriturismo La Mirandola",
        en: "Stylised map of distances from La Mirandola",
      },
      gridLabels: { x: "43°28′ N", y: "10°50′ E" },
      homeLabel: { lines: ["La", "Mirandola"], sub: "Villamagna · Volterra" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 30, label: "30 km" },
        { km: 60, label: "60 km" },
      ],
      legend: {
        home: "La Mirandola",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "12 km", coordinates: { lat: 43.4014, lng: 10.8608 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "30 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "65 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "pisa", name: { it: "Pisa", en: "Pisa" }, distance: "65 km", coordinates: { lat: 43.7228, lng: 10.4017 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "75 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
        { id: "lucca", name: { it: "Lucca", en: "Lucca" }, distance: "85 km", coordinates: { lat: 43.8429, lng: 10.5027 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/piscina-pergola.webp",
        alt: { it: "La piscina e la pergola", en: "The pool and the pergola" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo alla Mirandola.", en: "We look forward to welcoming you." },
      text: {
        it: "Siamo aperti tutto l'anno e rispondiamo tutti i giorni dalle 8 alle 22. Possiamo aiutarvi a programmare il soggiorno e consigliarvi i posti più belli da visitare.",
        en: "We're open all year and answer every day from 8am to 10pm. We can help you plan your stay and suggest the most beautiful places to visit.",
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
        it: "Agriturismo biologico a Volterra: appartamenti indipendenti, giardino e barbecue, piscina, animali benvenuti e prodotti a km zero.",
        en: "Organic farm stay near Volterra: self-contained apartments, garden and barbecue, pool, pets welcome and zero-mile produce.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/cartello.webp", alt: { it: "L'ingresso della Mirandola", en: "The La Mirandola entrance" } },
          labelParts: [
            { it: "Agriturismo", en: "The farm" },
            { it: "Sempre aperti", en: "Open all year" },
          ],
          titleLines: [
            { it: "Passione", en: "Passion" },
            { it: "e natura", en: "and nature" },
          ],
          intro: {
            it: "Da anni coltiviamo la terra nel rispetto dell'ambiente e delle tradizioni contadine, producendo solo prodotti biologici.",
            en: "For years we have farmed this land with respect for the environment and country traditions, growing only organic produce.",
          },
          cta: { label: { it: "Da sapere", en: "Good to know" }, href: "#informazioni" },
          pillars: [
            { it: "Appartamenti indipendenti", en: "Self-contained apartments" },
            { it: "Giardino e barbecue", en: "Garden and barbecue" },
            { it: "Animali benvenuti", en: "Pets welcome" },
          ],
        },
        {
          type: "facts",
          id: "informazioni",
          kicker: { it: "Prima di arrivare", en: "Before you arrive" },
          title: { it: "Da sapere", en: "Good to know" },
          image: { src: "estate/piscina.webp", alt: { it: "La piscina", en: "The pool" } },
          items: [
            { label: { it: "Apertura", en: "Open" }, value: { it: "Tutto l'anno", en: "All year" } },
            { label: { it: "Ospiti", en: "Guests" }, value: { it: "Da 2 a 6 per appartamento", en: "2 to 6 per apartment" } },
            { label: { it: "Piscina", en: "Pool" }, value: { it: "In estate", en: "In summer" }, note: { it: "Con solarium, sdraio e lettini", en: "With sun terrace, deckchairs and loungers" } },
            { label: { it: "Animali", en: "Pets" }, value: { it: "Benvenuti", en: "Welcome" }, note: { it: "Tutto l'anno", en: "All year" } },
            { label: { it: "Arrivi", en: "Arrivals" }, value: { it: "In autonomia", en: "Self check-in" }, note: { it: "Chiavi in consegna e deposito bagagli", en: "Your own keys and luggage storage" } },
            { label: { it: "Tassa di soggiorno", en: "Tourist tax" }, value: { it: "2,50 €", en: "€2.50" }, note: { it: "A persona per notte, da verificare con il Comune", en: "Per person per night, subject to council rules" } },
          ],
        },
        {
          type: "gallery",
          id: "struttura",
          kicker: { it: "La struttura", en: "The property" },
          title: { it: "Pietra, ulivi e orizzonte.", en: "Stone, olives and horizon." },
          images: [
            { src: "estate/casale-ombrellone.webp", alt: { it: "Il casale in estate", en: "The farmhouse in summer" } },
            { src: "estate/piscina-pergola.webp", alt: { it: "La piscina e la pergola", en: "The pool and the pergola" } },
            { src: "estate/cartello-vigna.webp", alt: { it: "Il cartello fra le vigne", en: "The sign among the vines" } },
            { src: "estate/oliveta.webp", alt: { it: "L'oliveta", en: "The olive grove" } },
            { src: "estate/barbecue.webp", alt: { it: "Il barbecue", en: "The barbecue" } },
            { src: "estate/pergola.webp", alt: { it: "La pergola", en: "The pergola" } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/casale.webp", alt: { it: "Il casale", en: "The farmhouse" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Scriveteci, vi rispondiamo noi.", en: "Write to us, we'll reply ourselves." },
          text: {
            it: "Tutti i giorni dalle 8 alle 22.",
            en: "Every day from 8am to 10pm.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "prodotti",
      title: { it: "I nostri prodotti", en: "Our produce" },
      description: {
        it: "Vino rosso e olio extravergine biologici dell'azienda agricola La Mirandola, da degustare in terrazza e acquistare in fattoria.",
        en: "Organic red wine and extra virgin olive oil from La Mirandola farm, to taste on the terrace and buy at the farm.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/barrique.webp", alt: { it: "Le barrique della cantina", en: "Barriques in the cellar" } },
          labelParts: [
            { it: "Prodotti", en: "Produce" },
            { it: "Biologici, a km zero", en: "Organic, zero-mile" },
          ],
          titleLines: [
            { it: "Il vino e l'olio", en: "The wine and oil" },
            { it: "di questo colle", en: "of this hill" },
          ],
          intro: {
            it: "I nostri prodotti sono a km zero per davvero: nascono nei campi che vedete dalla finestra.",
            en: "Our produce really is zero-mile: it grows in the fields you see from the window.",
          },
          cta: { label: { it: "I vini", en: "The wines" }, href: "#vini" },
          pillars: [
            { it: "Vino rosso", en: "Red wine" },
            { it: "Olio EVO biologico", en: "Organic EVO oil" },
          ],
        },
        {
          type: "chapters",
          id: "vini",
          kicker: { it: "Dalla nostra terra", en: "From our land" },
          title: { it: "Cosa produciamo", en: "What we make" },
          items: [
            {
              word: { it: "Vino", en: "Wine" },
              kicker: { it: "Rossi della casa", en: "Our reds" },
              title: { it: "Tocco Rosso, Poggiara, Ciliegiolo Ego", en: "Tocco Rosso, Poggiara, Ciliegiolo Ego" },
              text: {
                it: "Tre rossi dalle vigne intorno alla casa. Si assaggiano in terrazza e si portano a casa.",
                en: "Three reds from the vineyards around the house. Taste them on the terrace and take them home.",
              },
              image: { src: "estate/calice.webp", alt: { it: "Un calice di rosso", en: "A glass of red" } },
            },
            {
              word: { it: "Olio", en: "Oil" },
              kicker: { it: "Extravergine biologico", en: "Organic extra virgin" },
              title: { it: "L'olio dell'oliveta", en: "Oil from our grove" },
              text: {
                it: "Dagli ulivi della fattoria, coltivati con metodo biologico come tutto il resto.",
                en: "From the farm's olive trees, grown organically like everything else.",
              },
              image: { src: "estate/oliveta.webp", alt: { it: "L'oliveta", en: "The olive grove" } },
            },
            {
              word: { it: "Terrazza", en: "Terrace" },
              kicker: { it: "Degustazione", en: "Tasting" },
              title: { it: "Assaggiare dove nasce", en: "Taste it where it's made" },
              text: {
                it: "Una degustazione sulla terrazza, con il paesaggio della campagna toscana davanti. Chiedeteci quando.",
                en: "A tasting on the terrace, with the Tuscan countryside in front of you. Ask us when.",
              },
              image: { src: "estate/vigna-trattore.webp", alt: { it: "La vendemmia", en: "Harvest time" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/cartello-vigna.webp", alt: { it: "La vigna", en: "The vineyard" } },
          kicker: { it: "Vino e olio", en: "Wine and oil" },
          title: { it: "Volete prenotare una degustazione?", en: "Would you like to book a tasting?" },
          text: {
            it: "Scriveteci: vi diciamo quando e cosa assaggiare.",
            en: "Write to us: we'll tell you when and what to taste.",
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
        it: "Cosa vedere intorno all'agriturismo La Mirandola: Volterra, San Gimignano, Siena, Pisa, Firenze e Lucca.",
        en: "What to see around La Mirandola: Volterra, San Gimignano, Siena, Pisa, Florence and Lucca.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "territory/volterra.webp", alt: { it: "Volterra", en: "Volterra" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Val di Cecina", en: "Val di Cecina" },
          ],
          titleLines: [
            { it: "Luoghi", en: "Places" },
            { it: "da visitare", en: "to visit" },
          ],
          intro: {
            it: "Una piccola parte delle meraviglie intorno all'agriturismo, a partire da Volterra.",
            en: "A small part of the wonders around the farm, starting with Volterra.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Volterra 12 km", en: "Volterra 12 km" },
            { it: "San Gimignano 30 km", en: "San Gimignano 30 km" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Volterra", en: "Volterra" },
              kicker: { it: "A 12 km", en: "12 km away" },
              title: { it: "Arte, alabastro e vicoli", en: "Art, alabaster and alleys" },
              text: {
                it: "In ogni vicolo c'è qualcosa da scoprire, dalle botteghe storiche ai laboratori di alabastro. Da non perdere Piazza dei Priori, il Duomo, il Battistero, l'anfiteatro romano e i musei.",
                en: "Every alley has something to discover, from historic shops to alabaster workshops. Don't miss Piazza dei Priori, the Cathedral, the Baptistery, the Roman amphitheatre and the museums.",
              },
              image: { src: "territory/volterra.webp", alt: { it: "Volterra", en: "Volterra" } },
            },
            {
              word: { it: "Torri", en: "Towers" },
              kicker: { it: "A 30 km", en: "30 km away" },
              title: { it: "San Gimignano", en: "San Gimignano" },
              text: {
                it: "La città delle torri, da ammirare in ogni dettaglio, e la Vernaccia nelle cantine intorno.",
                en: "The town of towers, to admire in every detail, and Vernaccia in the wineries around it.",
              },
              image: { src: "territory/san-gimignano.webp", alt: { it: "San Gimignano", en: "San Gimignano" } },
            },
            {
              word: { it: "Siena", en: "Siena" },
              kicker: { it: "A 65 km", en: "65 km away" },
              title: { it: "Città d'arte e tradizioni", en: "Art city and traditions" },
              text: {
                it: "Piazza del Campo, il Duomo e le contrade del Palio, tutta da scoprire.",
                en: "Piazza del Campo, the Cathedral and the Palio districts, all waiting to be discovered.",
              },
              image: { src: "territory/siena.webp", alt: { it: "Siena", en: "Siena" } },
            },
          ],
        },
        {
          type: "prose",
          id: "villamagna",
          kicker: { it: "Sotto casa", en: "Just below" },
          title: { it: "Villamagna", en: "Villamagna" },
          paragraphs: [
            {
              it: "La Mirandola è a due passi da Villamagna, un piccolo borgo di cinquecento abitanti, molto caratteristico.",
              en: "La Mirandola is a stone's throw from Villamagna, a small and charming village of five hundred people.",
            },
            {
              it: "In paese ci sono botteghe di prodotti locali, bar, bancomat, ufficio postale, chiese e un parco giochi per i bambini.",
              en: "The village has shops selling local produce, a bar, cash machine, post office, churches and a playground for children.",
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/hero.webp", alt: { it: "L'ingresso della Mirandola", en: "The La Mirandola entrance" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aiutiamo a organizzarlo.", en: "We'll help you plan it." },
          text: {
            it: "Itinerari, ristoranti, mete per una giornata: chiedeteci pure.",
            en: "Itineraries, restaurants, day trips: just ask.",
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
      slug: "il-falco",
      name: "Il Falco",
      category: { it: "APPARTAMENTO", en: "APARTMENT" },
      size: "3",
      guests: "2–3",
      layout: { it: "3 vani", en: "3 rooms" },
      blurb: {
        it: "Comodo e raccolto, pensato per due o tre ospiti.",
        en: "Comfortable and cosy, designed for two or three guests.",
      },
      description: {
        it: "Un appartamento di tre vani in stile rustico toscano, con travi e pietra a vista, comodamente predisposto per due o tre persone.",
        en: "A three-room apartment in rustic Tuscan style, with exposed beams and stone, comfortably set up for two or three people.",
      },
      cover: "stays/il-falco-01.webp",
      detail: "stays/il-falco-02.webp",
      gallery: [],
      amenities: [POOL, COFFEE, KEYS, LUGGAGE, PETS],
      units: [
        {
          slug: "falco",
          name: "Il Falco",
          guests: "2–3",
          layout: { it: "3 vani", en: "3 rooms" },
          text: {
            it: "Per una coppia o una piccola famiglia. Spazio esterno privato e accesso alla piscina.",
            en: "For a couple or a small family. Private outdoor space and access to the pool.",
          },
          images: ["stays/il-falco-01.webp", "stays/il-falco-02.webp", "stays/il-falco-03.webp"],
        },
      ],
    },
    {
      slug: "il-fagiano",
      name: "Il Fagiano",
      category: { it: "IL PIÙ GRANDE", en: "THE LARGEST" },
      size: "5",
      guests: "4–6",
      layout: { it: "5 vani", en: "5 rooms" },
      blurb: {
        it: "Il più grande, per famiglie e gruppi di amici fino a sei.",
        en: "The largest, for families and groups of friends up to six.",
      },
      description: {
        it: "Il più grande fra i nostri appartamenti: cinque vani per quattro-sei persone, ideale per famiglie numerose o gruppi di amici.",
        en: "The largest of our apartments: five rooms for four to six people, ideal for larger families or groups of friends.",
      },
      cover: "stays/il-fagiano-01.webp",
      detail: "stays/il-fagiano-02.webp",
      gallery: [],
      amenities: [POOL, COFFEE, KEYS, LUGGAGE, PETS],
      units: [
        {
          slug: "fagiano",
          name: "Il Fagiano",
          guests: "4–6",
          layout: { it: "5 vani", en: "5 rooms" },
          text: {
            it: "Spazio per tutti, dentro e fuori, con accesso alla piscina.",
            en: "Room for everyone, indoors and out, with access to the pool.",
          },
          images: ["stays/il-fagiano-01.webp", "stays/il-fagiano-02.webp", "stays/il-fagiano-03.webp"],
        },
      ],
    },
    {
      slug: "il-capriolo",
      name: "Il Capriolo",
      category: { it: "APPARTAMENTO", en: "APARTMENT" },
      size: "—",
      guests: "2–4",
      layout: { it: "Il più grande spazio esterno", en: "The largest outdoor space" },
      blurb: {
        it: "Quello con più spazio all'aperto, per pranzi e cene fuori.",
        en: "The one with the most outdoor space, for lunches and dinners outside.",
      },
      description: {
        it: "Il nostro appartamento con lo spazio esterno più grande, perfetto per chi ama pranzare e cenare all'aperto. Per due-quattro persone.",
        en: "Our apartment with the largest outdoor space, perfect for those who love eating outside. For two to four people.",
      },
      cover: "stays/il-capriolo-01.webp",
      detail: "stays/il-capriolo-02.webp",
      gallery: [],
      amenities: [POOL, COFFEE, KEYS, LUGGAGE, PETS],
      units: [
        {
          slug: "capriolo",
          name: "Il Capriolo",
          guests: "2–4",
          layout: { it: "Ampio spazio esterno", en: "Large outdoor space" },
          text: {
            it: "Tavola all'aperto per le sere d'estate e accesso alla piscina.",
            en: "An outdoor table for summer evenings and access to the pool.",
          },
          images: ["stays/il-capriolo-01.webp", "stays/il-capriolo-02.webp", "stays/il-capriolo-03.webp"],
        },
      ],
    },
    {
      slug: "lusignolo",
      name: "L'Usignolo",
      category: { it: "CON GIARDINO", en: "WITH GARDEN" },
      size: "3",
      guests: "2–4",
      layout: { it: "3 vani · giardino e barbecue privati", en: "3 rooms · private garden and barbecue" },
      blurb: {
        it: "Con il suo giardino e il suo barbecue privato.",
        en: "With its own garden and private barbecue.",
      },
      description: {
        it: "Tre vani per due-quattro persone, con il piacere di un giardino tutto per sé e un barbecue privato.",
        en: "Three rooms for two to four people, with the pleasure of a garden all to yourselves and a private barbecue.",
      },
      cover: "stays/lusignolo-01.webp",
      detail: "stays/lusignolo-02.webp",
      gallery: [],
      amenities: [POOL, COFFEE, KEYS, LUGGAGE, PETS],
      units: [
        {
          slug: "usignolo",
          name: "L'Usignolo",
          guests: "2–4",
          layout: { it: "3 vani · giardino privato", en: "3 rooms · private garden" },
          text: {
            it: "Giardino e barbecue privati, accesso alla piscina.",
            en: "Private garden and barbecue, access to the pool.",
          },
          images: ["stays/lusignolo-01.webp", "stays/lusignolo-02.webp", "stays/lusignolo-03.webp"],
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli appartamenti", en: "All apartments" },
    kicker: { it: "La vostra casa alla Mirandola", en: "Your home at La Mirandola" },
    sizeLabel: { it: "Vani", en: "Rooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la casa", en: "Inside" },
    unitsLabel: { it: "L'appartamento", en: "The apartment" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni sull'appartamento {name} dell'agriturismo La Mirandola.",
      en: "Hello, I'd like some information about the {name} apartment at La Mirandola.",
    },
    amenitiesLabel: { it: "In tutti gli appartamenti", en: "In every apartment" },
    ctaTitle: { it: "Una settimana sul colle.", en: "A week on the hill." },
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

  footer: { copyright: "© 2026 Azienda Agricola Mirandola di Tavella Claudia" },

  legalPages: defaultLegalPages({
    name: "Azienda Agricola Mirandola di Tavella Claudia",
    address: "Località Villamagna, 56048 Volterra (PI)",
    email: "info@lamirandola.it",
  }),
};

export default site;
