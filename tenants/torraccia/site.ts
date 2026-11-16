/**
 * TORRACCIA DI CHIUSI
 * ===================
 *
 * Anteprima di redesign con i contenuti pubblici di torracciadichiusi.it:
 * camere e suite, ristorante, cantina, tempio etrusco di Hinthial, attività
 * e distanze sono presi da lì, riscritti e riorganizzati. Le tariffe sono
 * quelle del "listino 2027" pubblicato nella pagina Camere e prezzi: vanno
 * fatte confermare al cliente. Le foto vengono dal sito del cliente; le
 * stanze non sono etichettate per nome sul sito originale, quindi le foto
 * delle camere sono assegnate per tipologia e vanno riviste insieme a lui.
 *
 *   Camere ▾  /camere  /suite
 *   Ristorante /ristorante · Cantina /cantina · Hinthial /hinthial
 *   Attività /attivita
 *
 * PRENOTAZIONE. Il sito usa KrossBooking (codice struttura
 * `latorracciadichiusi`). Il collegamento è unico per tutta la struttura:
 * se il cliente ha i link per singola tipologia, vanno messi in
 * `units[].bookingUrl`.
 *
 * Dati da verificare: nessun numero WhatsApp pubblicato (si usa il fisso),
 * distanze stradali indicative (dal sito del cliente dove presenti).
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const KROSS = "https://book.krossbooking.com/it/latorracciadichiusi";

/** Le foto di una tipologia: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const CONTACT_LABEL: Localized = { it: "Chiamaci o scrivici", en: "Call or write to us" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const POOL: Localized = { it: "Piscina panoramica con idromassaggio", en: "Panoramic pool with hydromassage" };
const BREAKFAST: Localized = { it: "Colazione inclusa", en: "Breakfast included" };
const AC: Localized = { it: "Aria condizionata e riscaldamento", en: "Air conditioning and heating" };
const WIFI: Localized = { it: "Wi-Fi e TV SAT", en: "Wi-Fi and satellite TV" };
const BATH: Localized = { it: "Bagno privato con asciugacapelli", en: "Private bathroom with hairdryer" };
const TERRACE: Localized = { it: "Terrazzo privato con vista su San Gimignano", en: "Private terrace facing San Gimignano" };

const site: SiteConfig = {
  brand: {
    id: "torraccia",
    prefix: "",
    name: "Torraccia di Chiusi",
    logo: "logo.svg",
    cin: "IT052028B5XMATNPS2",
  },

  contact: {
    phone: "390577941972",
    phoneDisplay: "+39 0577 941972",
    email: "info@torracciadichiusi.it",
    address: ["Località Montauto", "53037 San Gimignano (SI)"],
    vat: "04230581003",
    coordinates: { lat: 43.4344, lng: 11.0639 },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/torracciadi/" },
      { label: "Facebook", href: "https://www.facebook.com/TorracciaDiChiusiAgriturismoRelais" },
    ],
  },

  seo: {
    domain: "https://www.torracciadichiusi.it",
    title: {
      it: "Torraccia di Chiusi | Agriturismo con ristorante e cantina a San Gimignano",
      en: "Torraccia di Chiusi | Farm stay with restaurant and winery near San Gimignano",
    },
    description: {
      it: "Camere e suite in un borgo medievale a Montauto, con ristorante, vini biologici, piscina panoramica e vista sulle torri di San Gimignano.",
      en: "Rooms and suites in a medieval hamlet at Montauto, with restaurant, organic wines, a panoramic pool and views of the towers of San Gimignano.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Camere e suite", en: "Rooms and suites" },
      children: [
        { href: "/camere", label: { it: "Camere", en: "Rooms" } },
        { href: "/suite", label: { it: "Suite", en: "Suites" } },
      ],
    },
    { page: "ristorante", label: { it: "Ristorante", en: "Restaurant" } },
    { page: "cantina", label: { it: "Cantina", en: "Winery" } },
    { page: "hinthial", label: { it: "Hinthial", en: "Hinthial" } },
    { page: "attivita", label: { it: "Attività e relax", en: "Activities" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: KROSS,
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
          it: "Il borgo di Torraccia di Chiusi nella luce del tramonto",
          en: "The Torraccia di Chiusi hamlet in the evening light",
        },
      },
      labelParts: [
        { it: "Montauto", en: "Montauto" },
        { it: "San Gimignano · Toscana", en: "San Gimignano · Tuscany" },
      ],
      titleLines: [
        { it: "Un borgo medievale", en: "A medieval hamlet" },
        { it: "di fronte a San Gimignano.", en: "facing San Gimignano." },
      ],
      intro: {
        it: "Camere e suite fra gli ulivi, il ristorante dello chef Bruno Staccioli, vini biologici di casa e la piscina con vista sulle torri.",
        en: "Rooms and suites among the olive trees, chef Bruno Staccioli's restaurant, our own organic wines and a pool facing the towers.",
      },
      cta: {
        label: { it: "Scopri le camere", en: "See the rooms" },
        href: "#camere",
      },
      pillars: [
        { it: "Camere e suite", en: "Rooms and suites" },
        { it: "Ristorante e cantina bio", en: "Organic restaurant and winery" },
        { it: "San Gimignano 9 km", en: "San Gimignano 9 km" },
      ],
    },

    {
      type: "story",
      id: "torraccia",
      number: "9 km",
      numberLabel: { it: "DA SAN GIMIGNANO", en: "FROM SAN GIMIGNANO" },
      ghost: "TORRACCIA",
      titleLines: [
        { it: "L'ospitalità", en: "Hospitality" },
        { it: "a misura", en: "on a" },
      ],
      titleEmphasis: { it: "d'uomo.", en: "human scale." },
      mainImage: {
        src: "estate/borgo.webp",
        alt: { it: "Il borgo di Torraccia di Chiusi", en: "The Torraccia di Chiusi hamlet" },
        caption: {
          it: "Un piccolo borgo medievale, in località Montauto",
          en: "A small medieval hamlet at Montauto",
        },
      },
      aerialImage: {
        src: "estate/san-gimignano.webp",
        alt: { it: "Il profilo di San Gimignano all'orizzonte", en: "The San Gimignano skyline on the horizon" },
        badge: "43°26′ N · 11°03′ E",
      },
      manifesto: {
        label: { it: "TRA BUON VIVERE E ARIA PURA", en: "GOOD LIVING AND CLEAN AIR" },
        text: {
          it: "Torraccia di Chiusi sorge all'incrocio di sentieri medievali, sull'antica Via Francigena: era una torre di avvistamento e di controllo. Oggi è un agriturismo biologico dove si raccolgono a mano le olive e l'uva, si vinifica in cantina e si cucina con l'orto di casa. Qui è tornata alla luce anche Hinthial, la statua etrusca detta l'Ombra di San Gimignano. Vi accogliamo con discrezione, e ci prendiamo cura di voi.",
          en: "Torraccia di Chiusi stands where medieval paths cross, on the ancient Via Francigena: it was once a watchtower. Today it is an organic farm stay where olives and grapes are picked by hand, wine is made in our own cellar and the kitchen cooks from our garden. Here too the Etruscan bronze Hinthial, the Shadow of San Gimignano, came back to light. We welcome you with discretion, and look after you.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "camere",
      kicker: { it: "Dormire alla Torraccia", en: "Stay at Torraccia" },
      title: {
        it: "Camere con carattere, suite con terrazzo.",
        en: "Rooms with character, suites with a terrace.",
      },
      text: {
        it: "Dedicate agli animali che si incontrano nella tenuta, hanno cotto toscano, travi a vista, mobili d'epoca e tessuti di puro cotone.",
        en: "Named after the animals you may meet on the estate, they have Tuscan terracotta floors, exposed beams, antique furniture and pure cotton fabrics.",
      },
      tabs: [
        {
          label: { it: "Camere e suite", en: "Rooms and suites" },
          stays: ["camere", "suite"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/piscina.webp",
        alt: { it: "La piscina fra i cipressi, con le colline intorno", en: "The pool among cypress trees, hills all around" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Una piscina con vista sulle torri.",
        en: "A pool with a view of the towers.",
      },
      text: {
        it: "Una piscina panoramica con idromassaggio, il silenzio della campagna e San Gimignano all'orizzonte. Dopo, un tè o una tisana nella Caffetteria del Cedro, sui divani davanti alla vetrata sul giardino.",
        en: "A panoramic pool with hydromassage, the silence of the countryside and San Gimignano on the horizon. Afterwards, tea or an infusion in the Caffetteria del Cedro, on the sofas facing the garden window.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "ALLA TORRACCIA", en: "AT TORRACCIA" },
      title: {
        it: "Si mangia, si beve, si cammina.",
        en: "Eat, drink, walk.",
      },
      intro: {
        it: "Il ristorante, la cantina e i sentieri della Francigena, a pochi passi dalla camera.",
        en: "The restaurant, the winery and the Via Francigena paths, a few steps from your room.",
      },
      marquee: {
        it: "CUCINA · VINO BIO · FRANCIGENA · PISCINA · TRAMONTO · ",
        en: "KITCHEN · ORGANIC WINE · FRANCIGENA · POOL · SUNSET · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Tutte le attività", en: "All activities" },
      ctaHref: "/attivita",
      items: [
        {
          title: "Cena degustazione",
          word: { it: "CUCINA", en: "KITCHEN" },
          meta: { it: "Alle 20:00 · su prenotazione", en: "At 8 pm · by reservation" },
          text: {
            it: "Un menu unico di cinque portate, diverso ogni sera, servito al tavolo con pane a lievitazione naturale e olio di casa.",
            en: "A single five-course menu, different every evening, served at the table with naturally leavened bread and our own oil.",
          },
          image: "food/primo.webp",
        },
        {
          title: "Wine tasting",
          word: { it: "CANTINA", en: "CELLAR" },
          meta: { it: "In azienda · contattateci", en: "At the estate · contact us" },
          text: {
            it: "I vini biologici di Torraccia, dalle bollicine Goccia d'Oro ai Rasna, assaggiati dove nascono.",
            en: "Torraccia's organic wines, from the Goccia d'Oro sparkling to the Rasna whites, tasted where they are made.",
          },
          image: "wine/cantina.webp",
        },
        {
          title: "Sulla Via Francigena",
          word: { it: "CAMMINO", en: "WALK" },
          meta: { it: "Tutto l'anno", en: "All year round" },
          text: {
            it: "Sentieri fra boschi e ulivi, e San Gimignano a piedi in circa due ore lungo l'antica via dei pellegrini.",
            en: "Paths through woods and olive groves, and San Gimignano on foot in about two hours along the old pilgrims' road.",
          },
          image: "estate/sentiero.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "Il ristorante, la cantina e la storia etrusca.",
        en: "The restaurant, the winery and the Etruscan story.",
      },
      items: [
        {
          meta: { it: "Chef Bruno Staccioli", en: "Chef Bruno Staccioli" },
          title: { it: "Ristorante", en: "Restaurant" },
          text: {
            it: "Cucina di innovativa tradizione, con l'orto biologico di casa e i produttori locali a km zero.",
            en: "Innovative traditional cooking, from our organic garden and local km-zero producers.",
          },
          image: { src: "food/sala-camino.webp", alt: { it: "La sala del ristorante con il camino", en: "The restaurant dining room with its fireplace" } },
          link: { label: DISCOVER, href: "/ristorante" },
        },
        {
          meta: { it: "Vini biologici", en: "Organic wines" },
          title: { it: "Cantina", en: "Winery" },
          text: {
            it: "Vendemmia a mano, vinificazione in azienda e bollicine nelle cantine scavate nel tufo.",
            en: "Hand harvest, on-site winemaking and sparkling wine in the cellars dug into the tufa.",
          },
          image: { src: "wine/cantina-2.webp", alt: { it: "Le bottiglie in affinamento nella cantina", en: "Bottles ageing in the cellar" } },
          link: { label: DISCOVER, href: "/cantina" },
        },
        {
          meta: { it: "III secolo a.C.", en: "3rd century BC" },
          title: { it: "Hinthial", en: "Hinthial" },
          text: {
            it: "L'Ombra di San Gimignano: il bronzo etrusco ritrovato nella tenuta, oggi al museo della città.",
            en: "The Shadow of San Gimignano: the Etruscan bronze found on the estate, now in the town museum.",
          },
          image: { src: "hinthial/statua.webp", alt: { it: "Dettaglio della statua votiva etrusca in bronzo", en: "Detail of the Etruscan votive bronze statue" } },
          link: { label: DISCOVER, href: "/hinthial" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Al centro della Toscana", en: "In the heart of Tuscany" },
      title: {
        it: "San Gimignano, Siena e Firenze a un'ora.",
        en: "San Gimignano, Siena and Florence within an hour.",
      },
      text: {
        it: "San Gimignano a venti minuti d'auto, Colle di Val d'Elsa e Volterra a mezz'ora, Siena e Firenze entro l'ora.",
        en: "San Gimignano twenty minutes by car, Colle di Val d'Elsa and Volterra half an hour, Siena and Florence within the hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Torraccia di Chiusi",
        en: "Stylised map of distances from Torraccia di Chiusi",
      },
      gridLabels: { x: "43°26′ N", y: "11°03′ E" },
      homeLabel: { lines: ["Torraccia", "di Chiusi"], sub: "Montauto" },
      rings: [
        { km: 15, label: "15 km" },
        { km: 40, label: "40 km" },
        { km: 70, label: "70 km" },
      ],
      legend: {
        home: "Torraccia",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "9 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "14 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "certaldo", name: { it: "Certaldo", en: "Certaldo" }, distance: "21 km", coordinates: { lat: 43.5489, lng: 11.0414 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "33 km", coordinates: { lat: 43.401, lng: 10.86 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "40 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "60 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
        { id: "pienza", name: { it: "Pienza", en: "Pienza" }, distance: "64 km", coordinates: { lat: 43.0766, lng: 11.679 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/scala.webp",
        alt: { it: "La scala in pietra fra i vasi di fiori", en: "The stone staircase among flowerpots" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo alla Torraccia.", en: "We look forward to welcoming you." },
      text: {
        it: "Per informazioni, disponibilità e prenotazioni dirette scriveteci a info@torracciadichiusi.it o chiamateci: rispondiamo di persona.",
        en: "For information, availability and direct bookings write to info@torracciadichiusi.it or call us: we reply in person.",
      },
      whatsappLabel: CONTACT_LABEL,
      emailLabel: EMAIL_LABEL,
    },
  ],

  /* ================================================================ */
  /* Pagine interne                                                    */
  /* ================================================================ */

  pages: [
    {
      slug: "ristorante",
      title: { it: "Il ristorante", en: "The restaurant" },
      description: {
        it: "Il ristorante di Torraccia di Chiusi: colazione, pranzo e cena dello chef Bruno Staccioli, con orto biologico e vista su San Gimignano.",
        en: "The Torraccia di Chiusi restaurant: breakfast, lunch and dinner by chef Bruno Staccioli, with organic garden and views of San Gimignano.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/terrazza.webp",
            alt: { it: "La veranda del ristorante sulle colline", en: "The restaurant veranda over the hills" },
          },
          labelParts: [
            { it: "Ristorante", en: "Restaurant" },
            { it: "Chef Bruno Staccioli", en: "Chef Bruno Staccioli" },
          ],
          titleLines: [
            { it: "Innovativa tradizione,", en: "Innovative tradition," },
            { it: "al ritmo delle stagioni", en: "at the pace of the seasons" },
          ],
          intro: {
            it: "Aperto agli ospiti dell'agriturismo e a chi viene da fuori, su prenotazione.",
            en: "Open to farm-stay guests and visitors alike, by reservation.",
          },
          cta: { label: { it: "Colazione, pranzo e cena", en: "Breakfast, lunch and dinner" }, href: "#pasti" },
          pillars: [
            { it: "Orto biologico", en: "Organic garden" },
            { it: "Prodotti a km zero", en: "Km-zero produce" },
            { it: "Vini bio di casa", en: "Our own organic wines" },
          ],
        },
        {
          type: "chapters",
          id: "pasti",
          kicker: { it: "Durante la giornata", en: "Through the day" },
          title: { it: "Colazione, pranzo e cena", en: "Breakfast, lunch and dinner" },
          items: [
            {
              word: { it: "Mattina", en: "Morning" },
              kicker: { it: "La colazione", en: "Breakfast" },
              title: { it: "Il buongiorno della Torraccia", en: "Torraccia's good morning" },
              text: {
                it: "Le torte artigianali di Maritza, il pane da lievito madre e grani antichi, le marmellate biologiche, salumi e formaggi, yogurt, uova, cereali e frutta fresca.",
                en: "Maritza's homemade cakes, mother-yeast bread from ancient grains, organic jams, cured meats and cheeses, yogurt, eggs, cereals and fresh fruit.",
              },
              image: { src: "food/colazione.webp", alt: { it: "La tavola della colazione con torte e frutta", en: "The breakfast table with cakes and fruit" } },
            },
            {
              word: { it: "Mezzogiorno", en: "Noon" },
              kicker: { it: "Il pranzo · alle 13:30", en: "Lunch · at 1:30 pm" },
              title: { it: "Un menu unico, di stagione", en: "A single seasonal menu" },
              text: {
                it: "Un semplice buffet con un piatto di pasta, insalate, verdure e formaggi, secondo l'orto e la stagione. In alternativa, un piatto unico fra le proposte del giorno.",
                en: "A simple buffet with a pasta dish, salads, vegetables and cheeses, depending on the garden and the season. Or a single dish from the day's proposals.",
              },
              image: { src: "food/pane-vino.webp", alt: { it: "Pane e un calice di vino bianco sul tavolo", en: "Bread and a glass of white wine on the table" } },
            },
            {
              word: { it: "Sera", en: "Evening" },
              kicker: { it: "La cena · alle 20:00", en: "Dinner · at 8 pm" },
              title: { it: "Cinque portate, diverse ogni sera", en: "Five courses, different every evening" },
              text: {
                it: "Un menu unico servito al tavolo, dall'antipasto al dolce. In estate sulla veranda con vista sulle torri di San Gimignano, in autunno e inverno nelle sale, davanti al camino.",
                en: "A single menu served at the table, from starter to dessert. In summer on the veranda facing the San Gimignano towers, in autumn and winter in the dining rooms by the fireplace.",
              },
              details: [
                { it: "Menu per vegani, vegetariani e celiaci su richiesta, con 2 giorni di preavviso", en: "Vegan, vegetarian and gluten-free menus on request, 2 days in advance" },
                { it: "Gruppi da 6 persone: prenotare per telefono", en: "Groups of 6 or more: book by phone" },
              ],
              image: { src: "food/secondo.webp", alt: { it: "Un secondo piatto con purea di piselli", en: "A main course with pea purée" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "food/tavolata.webp", alt: { it: "La lunga tavola apparecchiata davanti al camino", en: "The long laid table by the fireplace" } },
          kicker: { it: "Prenota un tavolo", en: "Book a table" },
          title: { it: "Chiamateci o scriveteci.", en: "Call or write to us." },
          text: {
            it: "Prenotate in anticipo: la conferma arriva via email. Potete annullare almeno un giorno prima.",
            en: "Please book in advance: confirmation comes by email. You can cancel at least one day before.",
          },
          whatsappLabel: CONTACT_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "cantina",
      title: { it: "La cantina", en: "The winery" },
      description: {
        it: "I vini biologici di Torraccia di Chiusi: Goccia d'Oro, Turms, Rasna e Nero, vinificati in azienda da Stefano Boco.",
        en: "Torraccia di Chiusi organic wines: Goccia d'Oro, Turms, Rasna and Nero, made on the estate by Stefano Boco.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "wine/cantina.webp", alt: { it: "Le bottiglie in affinamento nella cantina", en: "Bottles ageing in the cellar" } },
          labelParts: [
            { it: "Cantina", en: "Winery" },
            { it: "Vini biologici", en: "Organic wines" },
          ],
          titleLines: [
            { it: "Il sapore", en: "The taste" },
            { it: "di un futuro antico", en: "of an ancient future" },
          ],
          intro: {
            it: "Vigneti biologici, vendemmia a mano e vinificazione in azienda: la filosofia di Stefano Boco, il proprietario.",
            en: "Organic vineyards, hand harvest and on-site winemaking: the philosophy of Stefano Boco, the owner.",
          },
          cta: { label: { it: "I vini", en: "The wines" }, href: "#vini" },
          pillars: [
            { it: "Vendemmia a mano", en: "Hand harvest" },
            { it: "Vini certificati bio", en: "Certified organic wines" },
          ],
        },
        {
          type: "cards",
          id: "vini",
          kicker: { it: "I nostri vini", en: "Our wines" },
          title: { it: "Una cantina, tante etichette.", en: "One cellar, many labels." },
          text: {
            it: "Si degustano in azienda o si acquistano direttamente in cantina. Per informazioni e ordini scriveteci: lo shop online è in costruzione.",
            en: "Taste them at the estate or buy them directly at the cellar. For information and orders write to us: the online shop is being built.",
          },
          items: [
            {
              meta: { it: "Bollicine", en: "Sparkling" },
              title: { it: "Goccia d'Oro", en: "Goccia d'Oro" },
              text: {
                it: "Le bollicine di Torraccia, affinate sui pupitres nelle cantine scavate nel tufo.",
                en: "Torraccia's sparkling wine, aged on pupitres in the cellars dug into the tufa.",
              },
              image: { src: "wine/goccia.webp", alt: { it: "Una bottiglia di Goccia d'Oro contro la pietra", en: "A bottle of Goccia d'Oro against the stone" } },
            },
            {
              meta: { it: "Bianco", en: "White" },
              title: { it: "Rasna bianco, Traminer, Verdicchio", en: "Rasna white, Traminer, Verdicchio" },
              text: {
                it: "I bianchi della tenuta, con nomi che vengono dall'Etruria.",
                en: "The estate's whites, with names that come from Etruria.",
              },
              image: { src: "wine/rasna-bianco.webp", alt: { it: "Bottiglia e calice di Rasna bianco in una nicchia di tufo", en: "Bottle and glass of Rasna white in a tufa niche" } },
            },
            {
              meta: { it: "Rosso e rosato", en: "Red and rosé" },
              title: { it: "Nero, Turms, Rasna rosso e rosato", en: "Nero, Turms, Rasna red and rosé" },
              text: {
                it: "I rossi della cantina e il Rasna rosato, per la tavola di tutti i giorni e per le occasioni.",
                en: "The cellar's reds and the Rasna rosé, for everyday meals and special occasions.",
              },
              image: { src: "wine/nero.webp", alt: { it: "Bottiglia e calice di vino rosso nella nicchia di tufo", en: "Bottle and glass of red wine in the tufa niche" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "wine/pupitres.webp", alt: { it: "I pupitres con le bottiglie nella cantina", en: "The pupitres with bottles in the cellar" } },
          kicker: { it: "Degustazioni e acquisti", en: "Tastings and purchases" },
          title: { it: "Venite a trovarci in cantina.", en: "Come and visit the cellar." },
          text: {
            it: "Scriveteci con il giorno e il numero di persone: vi confermiamo la degustazione.",
            en: "Write to us with the date and number of people: we'll confirm your tasting.",
          },
          whatsappLabel: CONTACT_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "hinthial",
      title: { it: "Hinthial, l'Ombra di San Gimignano", en: "Hinthial, the Shadow of San Gimignano" },
      description: {
        it: "Il tempio etrusco di Torraccia di Chiusi e la statua votiva in bronzo Hinthial, l'Ombra di San Gimignano, esposta nel museo archeologico della città.",
        en: "The Etruscan temple of Torraccia di Chiusi and the bronze votive statue Hinthial, the Shadow of San Gimignano, displayed in the town's archaeological museum.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "hinthial/statua.webp", alt: { it: "Dettaglio della statua votiva in bronzo", en: "Detail of the bronze votive statue" } },
          labelParts: [
            { it: "Hinthial", en: "Hinthial" },
            { it: "III secolo a.C.", en: "3rd century BC" },
          ],
          titleLines: [
            { it: "L'anima, il sacro:", en: "The soul, the sacred:" },
            { it: "una storia incredibile", en: "an incredible story" },
          ],
          intro: {
            it: "Nella tenuta è stato trovato un santuario etrusco e, sepolta accanto a un altare, la statua di un giovane offerente in bronzo.",
            en: "An Etruscan sanctuary was found on the estate and, buried next to an altar, the bronze statue of a young worshipper.",
          },
          cta: { label: { it: "La scoperta", en: "The discovery" }, href: "#storia" },
          pillars: [
            { it: "Alta 64 cm", en: "64 cm tall" },
            { it: "Oltre 3 kg di bronzo", en: "Over 3 kg of bronze" },
          ],
        },
        {
          type: "chapters",
          id: "storia",
          kicker: { it: "La storia", en: "The story" },
          title: { it: "Dalla terra al museo", en: "From the earth to the museum" },
          items: [
            {
              word: { it: "Scoperta", en: "Discovery" },
              kicker: { it: "Durante lavori su un tubo di scarico", en: "During work on a drain pipe" },
              title: { it: "«Fermi, fermate la ruspa!»", en: "“Stop, stop the digger!”" },
              text: {
                it: "A trovarla è stata la proprietaria, Donatella Sandrelli: nella terra smossa vide tracce di verde brillante, il segno del bronzo ossidato. Scese nella fossa e ripulì a mani nude prima il volto, poi le spalle, poi tutto il corpo.",
                en: "It was found by the owner, Donatella Sandrelli: in the turned earth she saw traces of bright green, the sign of oxidised bronze. She climbed into the pit and cleared first the face, then the shoulders, then the whole body by hand.",
              },
              image: { src: "hinthial/scoperta.webp", alt: { it: "La proprietaria con la statuetta in mano", en: "The owner holding the statuette" } },
            },
            {
              word: { it: "Statua", en: "Statue" },
              kicker: { it: "Sacro e anima", en: "Sacred and soul" },
              title: { it: "Hinthial", en: "Hinthial" },
              text: {
                it: "In etrusco il nome significa sia «sacro» sia «anima». Il giovane offerente indossa una corta toga e regge una patera ombelicata. Il nome «Ombra di San Gimignano» glielo ha dato l'ispettore della Soprintendenza Jacopo Tabolli. È esposta al museo archeologico di San Gimignano.",
                en: "In Etruscan the name means both “sacred” and “soul”. The young worshipper wears a short toga and holds an omphalos dish. The name “Shadow of San Gimignano” was given by Superintendency inspector Jacopo Tabolli. It is on display in the San Gimignano archaeological museum.",
              },
              image: { src: "hinthial/statua-2.webp", alt: { it: "La statua di Hinthial, dettaglio del manto", en: "The Hinthial statue, detail of the mantle" } },
            },
            {
              word: { it: "Tempio", en: "Temple" },
              kicker: { it: "Un luogo di culto per cinquecento anni", en: "A place of worship for five hundred years" },
              title: { it: "Il santuario nel bosco", en: "The sanctuary in the woods" },
              text: {
                it: "Gli scavi hanno rivelato un'area sacra frequentata dal III secolo a.C. al II secolo d.C., con monete, ceramiche e un plinto che forse fu altare. Era vicino a una sorgente, in una valle ancora ricca di acque e di cascate.",
                en: "Excavations revealed a sacred area in use from the 3rd century BC to the 2nd century AD, with coins, pottery and a plinth that may have been an altar. It lay near a spring, in a valley still rich in water and waterfalls.",
              },
              image: { src: "estate/macina.webp", alt: { it: "Una grande macina di pietra nel bosco della tenuta", en: "A large millstone in the estate woods" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/sentiero.webp", alt: { it: "Il sentiero nel bosco verso la tenuta", en: "The woodland path towards the estate" } },
          kicker: { it: "Vieni a vedere dove è successo", en: "Come and see where it happened" },
          title: { it: "Scrivici per saperne di più.", en: "Write to us to find out more." },
          text: {
            it: "Gli ospiti possono passeggiare nel bosco intorno alla tenuta: chiedeteci dove.",
            en: "Guests can walk in the woods around the estate: ask us where.",
          },
          whatsappLabel: CONTACT_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "attivita",
      title: { it: "Attività e relax", en: "Activities and relax" },
      description: {
        it: "Piscina con idromassaggio, passeggiate sulla Via Francigena, degustazioni e corsi di cucina a Torraccia di Chiusi, con le distanze dalle città d'arte vicine.",
        en: "Pool with hydromassage, walks on the Via Francigena, tastings and cooking courses at Torraccia di Chiusi, with distances from nearby art cities.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/veranda.webp", alt: { it: "La veranda con le poltrone e le colline intorno", en: "The veranda with armchairs and hills all around" } },
          labelParts: [
            { it: "Attività e relax", en: "Activities" },
            { it: "Tutto l'anno", en: "All year round" },
          ],
          titleLines: [
            { it: "Un luogo dell'anima,", en: "A place for the soul," },
            { it: "per ritrovare benessere", en: "to find well-being again" },
          ],
          intro: {
            it: "Silenzio, colori intensi e profumi: la piscina panoramica, un calice dei nostri vini e i sentieri della Francigena.",
            en: "Silence, intense colours and scents: the panoramic pool, a glass of our wines and the Via Francigena paths.",
          },
          cta: { label: { it: "Cosa fare", en: "What to do" }, href: "#attivita" },
          pillars: [
            { it: "Piscina con idromassaggio", en: "Pool with hydromassage" },
            { it: "Trekking e passeggiate", en: "Trekking and walks" },
          ],
        },
        {
          type: "cards",
          id: "attivita",
          kicker: { it: "Le attività", en: "Activities" },
          title: { it: "Scegliete il ritmo.", en: "Choose your pace." },
          text: {
            it: "Per le attività contattateci direttamente: vi diamo tutte le informazioni.",
            en: "Contact us directly about activities: we'll give you all the details.",
          },
          items: [
            {
              meta: { it: "Wine tasting · aperitivo", en: "Wine tasting · aperitif" },
              title: { it: "Degustazioni", en: "Tastings" },
              text: {
                it: "Un calice dei vini bio di casa, o una degustazione completa abbinata alle proposte gastronomiche della cucina.",
                en: "A glass of our organic wines, or a full tasting paired with the kitchen's gastronomic proposals.",
              },
              image: { src: "wine/rasna-tavola.webp", alt: { it: "Rasna bianco e calici sulla tavola", en: "Rasna white and glasses on the table" } },
            },
            {
              meta: { it: "Cena degustazione · corsi di cucina", en: "Tasting dinner · cooking courses" },
              title: { it: "In cucina", en: "In the kitchen" },
              text: {
                it: "La cena degustazione dello chef e i corsi di cucina: ingredienti dell'orto e ricette del territorio.",
                en: "The chef's tasting dinner and cooking courses: garden ingredients and local recipes.",
              },
              image: { src: "food/primo.webp", alt: { it: "Un piatto di tortelli", en: "A plate of tortelli" } },
            },
            {
              meta: { it: "Passeggiate · trekking", en: "Walks · trekking" },
              title: { it: "Sentieri e Via Francigena", en: "Paths and the Via Francigena" },
              text: {
                it: "Escursioni fra boschi e sentieri, con il volo di uccelli e farfalle. La Francigena descritta da Sigerico nel 987 passa intorno alla tenuta.",
                en: "Hikes through woods and trails, with birds and butterflies. The Francigena described by Sigeric in 987 AD runs around the estate.",
              },
              image: { src: "estate/giardino.webp", alt: { it: "Il giardino con i vasi di limoni", en: "The garden with lemon pots" } },
            },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Le città d'arte vicine", en: "Nearby art cities" },
          items: [
            {
              word: { it: "Torri", en: "Towers" },
              kicker: { it: "A 9 km · 20 minuti d'auto", en: "9 km · 20 minutes by car" },
              title: { it: "San Gimignano", en: "San Gimignano" },
              text: {
                it: "A piedi sull'antica Francigena si arriva in circa due ore e dieci. Colle di Val d'Elsa è a 14 km, venti minuti d'auto.",
                en: "On foot along the old Francigena it takes about two hours and ten minutes. Colle di Val d'Elsa is 14 km away, twenty minutes by car.",
              },
              image: { src: "estate/san-gimignano.webp", alt: { it: "Le torri di San Gimignano all'orizzonte", en: "The towers of San Gimignano on the horizon" } },
            },
            {
              word: { it: "Siena", en: "Siena" },
              kicker: { it: "A 40 km · 35 minuti d'auto", en: "40 km · 35 minutes by car" },
              title: { it: "Siena e Volterra", en: "Siena and Volterra" },
              text: {
                it: "Siena è a 35 minuti d'auto; Volterra a 33 km, quaranta minuti. Certaldo è a 21 km, mezz'ora.",
                en: "Siena is 35 minutes by car; Volterra 33 km, forty minutes. Certaldo is 21 km, half an hour.",
              },
            },
            {
              word: { it: "Firenze", en: "Florence" },
              kicker: { it: "A 60 km · 50 minuti d'auto", en: "60 km · 50 minutes by car" },
              title: { it: "Firenze, Pienza, Montepulciano", en: "Florence, Pienza, Montepulciano" },
              text: {
                it: "Firenze in cinquanta minuti. Pienza è a 64 km, due ore; Montepulciano a 101 km, circa un'ora e mezza.",
                en: "Florence in fifty minutes. Pienza is 64 km, two hours; Montepulciano 101 km, about an hour and a half.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/piscina.webp", alt: { it: "La piscina panoramica", en: "The panoramic pool" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo alla Torraccia.", en: "We look forward to welcoming you." },
          text: {
            it: "Dateci un'idea di quanto restate e di cosa amate fare: vi consigliamo noi.",
            en: "Tell us how long you're staying and what you love to do: we'll suggest the rest.",
          },
          whatsappLabel: CONTACT_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  /* ================================================================ */
  /* Alloggi                                                           */
  /* ================================================================ */

  accommodations: [
    {
      slug: "camere",
      name: "Camere",
      category: { it: "CAMERE STANDARD", en: "STANDARD ROOMS" },
      size: "1",
      guests: "2–3",
      layout: { it: "Doppie, tripla e Il Nido", en: "Doubles, triple and Il Nido" },
      blurb: {
        it: "Matrimoniali e tripla con vista sulla campagna e sul borgo, da 190 € a notte.",
        en: "Doubles and a triple facing the countryside and the hamlet, from €190 a night.",
      },
      description: {
        it: "Ogni camera ha la sua personalità: pavimenti in cotto toscano, travi a vista, mobili d'epoca e tessuti di puro cotone. Le camere doppie hanno riscaldamento, aria condizionata, ventilatore, bagno privato con doccia (una anche con vasca), asciugacapelli, TV SAT e Wi-Fi. Alcune hanno la possibilità del terzo letto.",
        en: "Each room has its own personality: Tuscan terracotta floors, exposed beams, antique furniture and pure cotton fabrics. Double rooms have heating, air conditioning, a fan, a private shower room (one also with a bath), hairdryer, satellite TV and Wi-Fi. Some can take a third bed.",
      },
      cover: "stays/camera-01.webp",
      detail: "stays/camera-02.webp",
      gallery: [],
      amenities: [BREAKFAST, POOL, AC, WIFI, BATH],
      units: [
        {
          slug: "camera-matrimoniale",
          name: "Camera matrimoniale standard",
          guests: "2",
          layout: { it: "1 letto matrimoniale · bagno con doccia", en: "1 double bed · shower room" },
          text: {
            it: "Per due persone, 220 € a notte con prima colazione (listino 2027). Alcune camere con possibilità del terzo letto.",
            en: "For two people, €220 a night with breakfast (2027 list). Some rooms can take a third bed.",
          },
          images: photos("camera", 6),
          bookingUrl: KROSS,
        },
        {
          slug: "camera-tripla",
          name: "Camera tripla",
          guests: "3",
          layout: { it: "1 king size e 1 singolo · bagno con doccia", en: "1 king bed and 1 single · shower room" },
          text: {
            it: "Finestra e porta-finestra sul giardino, letto king size e un letto singolo. 280 € a notte per tre persone con prima colazione.",
            en: "Window and French door onto the garden, a king-size bed and a single. €280 a night for three people with breakfast.",
          },
          images: photos("tripla", 3),
          bookingUrl: KROSS,
        },
        {
          slug: "il-nido",
          name: "Il Nido",
          guests: "2",
          layout: { it: "1 letto matrimoniale · circa 11 mq", en: "1 double bed · about 11 sq m" },
          text: {
            it: "La più piccola delle matrimoniali, romantica e accogliente, con vista sul giardino nel cuore della Torraccia. 190 € a notte con prima colazione.",
            en: "The smallest of the double rooms, romantic and cosy, overlooking the garden at the heart of Torraccia. €190 a night with breakfast.",
          },
          images: photos("nido", 3),
          bookingUrl: KROSS,
        },
      ],
    },
    {
      slug: "suite",
      name: "Suite",
      category: { it: "SUITE CON TERRAZZO", en: "SUITES WITH TERRACE" },
      size: "1–2",
      guests: "2–6",
      layout: { it: "La Poiana, Il Gufo Reale, La Cicogna", en: "La Poiana, Il Gufo Reale, La Cicogna" },
      blurb: {
        it: "Tre suite per famiglie o per chi vuole più privacy, con terrazzo o balcone.",
        en: "Three suites for families or for more privacy, with terrace or balcony.",
      },
      description: {
        it: "Più ampie delle camere, con gli stessi comfort: aria condizionata, riscaldamento, TV e Wi-Fi. La Poiana e Il Gufo Reale hanno un ampio terrazzo abitabile con vista su San Gimignano e sulle colline; La Cicogna ha ingresso indipendente, due camere e un balcone sul borgo.",
        en: "Roomier than the standard rooms, with the same comforts: air conditioning, heating, TV and Wi-Fi. La Poiana and Il Gufo Reale have a large liveable terrace facing San Gimignano and the hills; La Cicogna has a private entrance, two bedrooms and a balcony over the hamlet.",
      },
      cover: "stays/poiana-01.webp",
      detail: "stays/gufo-01.webp",
      gallery: [],
      amenities: [BREAKFAST, POOL, AC, WIFI, TERRACE],
      units: [
        {
          slug: "suite-9-la-poiana",
          name: "Suite 9 · La Poiana",
          guests: "2–3",
          layout: { it: "Camera king size · salottino con divano letto", en: "King bedroom · sitting room with sofa bed" },
          text: {
            it: "Camera matrimoniale king size, salottino separato con divano letto alla francese per un terzo ospite, ampio terrazzo privato sulla valle. 260 € a notte per due con prima colazione.",
            en: "King-size bedroom, separate sitting room with French sofa bed for a third guest, large private terrace over the valley. €260 a night for two with breakfast.",
          },
          images: photos("poiana", 3),
          bookingUrl: KROSS,
        },
        {
          slug: "suite-10-il-gufo-reale",
          name: "Suite 10 · Il Gufo Reale",
          guests: "2–5",
          layout: { it: "Camera king size · ampia zona giorno", en: "King bedroom · large living area" },
          text: {
            it: "Molto spaziosa: camera king size, zona giorno con possibile divano letto matrimoniale per due persone in più e un letto-poltrona per una. Terrazzo panoramico privato. 260 € a notte per due con prima colazione.",
            en: "Very spacious: king-size bedroom, living area with a possible double sofa bed for two more people and a chair-bed for one. Private panoramic terrace. €260 a night for two with breakfast.",
          },
          images: photos("gufo", 3),
          bookingUrl: KROSS,
        },
        {
          slug: "suite-11-la-cicogna",
          name: "Suite 11 · La Cicogna",
          guests: "4",
          layout: { it: "2 camere da letto · soggiorno · 1 bagno", en: "2 bedrooms · sitting room · 1 bathroom" },
          text: {
            it: "Suite superior con ingresso indipendente: una grande camera king size e una più piccola con letto alla francese, separate da un soggiorno con possibile divano letto. Frigorifero, balcone sul borgo. 370 € a notte con prima colazione.",
            en: "Superior suite with private entrance: a large king-size bedroom and a smaller one with a French double bed, split by a sitting room with a possible sofa bed. Fridge, balcony over the hamlet. €370 a night with breakfast.",
          },
          images: photos("cicogna", 4),
          bookingUrl: KROSS,
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutte le camere", en: "All rooms" },
    kicker: { it: "La vostra camera alla Torraccia", en: "Your room at Torraccia" },
    sizeLabel: { it: "Camere da letto", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la camera", en: "Inside" },
    unitsLabel: { it: "Le sistemazioni", en: "The rooms" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Torraccia di Chiusi.",
      en: "Hello, I'd like some information about {name} at Torraccia di Chiusi.",
    },
    amenitiesLabel: { it: "In camera", en: "In your room" },
    ctaTitle: { it: "Un soggiorno di fronte a San Gimignano.", en: "A stay facing San Gimignano." },
    ctaLabel: CONTACT_LABEL,
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECT" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Per informazioni sulle prenotazioni dirette scriveteci o chiamateci: rispondiamo di persona.",
      en: "For direct bookings write to us or call: we reply in person.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: { copyright: "© 2026 Azienda Agricola Torraccia di Chiusi" },

  legalPages: defaultLegalPages({
    name: "Azienda Agricola Torraccia di Chiusi S.r.l.",
    address: "Località Montauto, 53037 San Gimignano (SI)",
    email: "info@torracciadichiusi.it",
  }),
};

export default site;
