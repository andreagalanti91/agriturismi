/**
 * AGRITURISMO LA SEGOLINA
 * =======================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Lornano,
 * con i contenuti pubblici di lasegolina.it: storia della famiglia, alloggi,
 * impegni green, degustazioni, sport e dintorni vengono da lì, riscritti e
 * riorganizzati. Le fotografie sono quelle del sito attuale (piccole: vanno
 * sostituite con gli originali). Da far confermare al cliente: prezzi, orari,
 * CIN, e-mail e numero WhatsApp.
 *
 *   Alloggi ▾  /camere  /monteriggioni  /montepulciano  /siena
 *   La fattoria /la-fattoria · Esperienze /esperienze · Territorio /territorio
 *
 * PRENOTAZIONE. Il sito attuale usa il modulo VikBooking su /prenotazioni.html
 * (Joomla), senza collegamento diretto al singolo alloggio: un solo "Prenota".
 *
 * Dati dal sito: Podere La Segolina 3, Loc. Sant'Antonio SP 5, 53034 Colle di
 * Val d'Elsa; GPS 43.405141 / 11.168589; tel. 0577 905026; cell. 333 2299223;
 * info@lasegolina.it. Prezzi massimi giornalieri dichiarati: camera doppia con
 * bagno 95 €, appartamento tipo A 150 €, tipo B 180 €. Distanze: indicative.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const BOOKING = "https://www.lasegolina.it/prenotazioni.html";

/** Le foto di un alloggio: stays/<nome>-01.webp, -02... */
const photos = (name: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `stays/${name}-${String(from + i).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const GARDEN: Localized = { it: "Giardino privato", en: "Private garden" };
const KITCHEN: Localized = { it: "Cucina", en: "Kitchen" };
const WIFI: Localized = { it: "Wi-Fi", en: "Wi-Fi" };
const BATH: Localized = { it: "Bagno privato", en: "Private bathroom" };
const FIREPLACE: Localized = { it: "Camino", en: "Fireplace" };
const POOL: Localized = { it: "Piscina dell'agriturismo", en: "Farm swimming pool" };

const site: SiteConfig = {
  brand: {
    id: "segolina",
    prefix: "Agriturismo",
    name: "La Segolina",
    logo: "logo.svg",
    since: "2007",
  },

  contact: {
    phone: "393332299223",
    phoneDisplay: "+39 333 229 9223",
    phoneAlt: { number: "390577905026", display: "+39 0577 905026" },
    email: "info@lasegolina.it",
    address: ["Podere La Segolina 3, Loc. Sant'Antonio SP 5", "53034 Colle di Val d'Elsa (SI)"],
    coordinates: { lat: 43.405141, lng: 11.168589 },
    social: [{ label: "Facebook", href: "https://www.facebook.com/pages/La-Segolina/164308113605824" }],
  },

  seo: {
    domain: "https://www.lasegolina.it",
    title: {
      it: "Agriturismo La Segolina | Appartamenti e camere a Colle di Val d'Elsa",
      en: "Agriturismo La Segolina | Apartments and rooms near Colle di Val d'Elsa",
    },
    description: {
      it: "Un podere dell'Ottocento in pietra e mattoni fra Monteriggioni e Colle di Val d'Elsa: tre appartamenti e due camere, agricoltura biologica, energie rinnovabili.",
      en: "A 19th-century stone and brick farmstead between Monteriggioni and Colle di Val d'Elsa: three apartments and two rooms, organic farming, renewable energy.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Alloggi", en: "Stay" },
      children: [
        { href: "/camere", label: { it: "Camere San Gimignano e Castellina", en: "San Gimignano and Castellina rooms" } },
        { href: "/monteriggioni", label: { it: "Appartamento Monteriggioni", en: "Monteriggioni apartment" } },
        { href: "/montepulciano", label: { it: "Appartamento Montepulciano", en: "Montepulciano apartment" } },
        { href: "/siena", label: { it: "Appartamento Siena", en: "Siena apartment" } },
      ],
    },
    { page: "la-fattoria", label: { it: "La fattoria", en: "The farm" } },
    { page: "esperienze", label: { it: "Esperienze", en: "Experiences" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: BOOKING,
    label: { it: "Prenota", en: "Book now" },
  },

  sections: [
    {
      type: "hero",
      id: "home",
      image: {
        src: "estate/hero.webp",
        alt: {
          it: "Il podere La Segolina in pietra e mattoni, circondato da alberi",
          en: "La Segolina farmhouse in stone and brick, surrounded by trees",
        },
      },
      labelParts: [
        { it: "Val d'Elsa", en: "Val d'Elsa" },
        { it: "Colle · Monteriggioni", en: "Colle · Monteriggioni" },
      ],
      titleLines: [
        { it: "Un podere di pietra", en: "A stone farmstead" },
        { it: "fra le colline senesi.", en: "in the Sienese hills." },
      ],
      intro: {
        it: "Tre appartamenti e due camere in un podere dell'Ottocento, con vigna, piscina e la Montagnola senese alle spalle.",
        en: "Three apartments and two rooms in a 19th-century farmstead, with vineyard, pool and the Montagnola Senese behind it.",
      },
      cta: { label: { it: "Scopri gli alloggi", en: "See the stays" }, href: "#alloggi" },
      pillars: [
        { it: "Agricoltura biologica", en: "Organic farming" },
        { it: "25 ettari", en: "25 hectares" },
        { it: "Piscina", en: "Pool" },
      ],
    },

    {
      type: "story",
      id: "fattoria",
      number: "2007",
      numberLabel: { it: "ANTONIO E MARIA GRAZIA", en: "ANTONIO AND MARIA GRAZIA" },
      ghost: "SEGOLINA",
      titleLines: [
        { it: "Una famiglia, un podere", en: "One family, one farmstead" },
        { it: "e una nuova", en: "and a new" },
      ],
      titleEmphasis: { it: "vita in campagna.", en: "life in the country." },
      mainImage: {
        src: "estate/cortile.webp",
        alt: { it: "Il cortile del podere con le case in pietra", en: "The farmstead courtyard with its stone houses" },
        caption: {
          it: "Il vecchio podere di famiglia, della prima metà dell'Ottocento",
          en: "The old family farmstead, from the first half of the 19th century",
        },
      },
      aerialImage: {
        src: "estate/strada.webp",
        alt: { it: "La casa lungo la strada provinciale 5", en: "The house along the provincial road 5" },
        badge: "43°24′ N · 11°10′ E",
      },
      manifesto: {
        label: { it: "LASCIARE LA CITTÀ", en: "LEAVING THE CITY" },
        text: {
          it: "Nel 2007 Antonio e Maria Grazia hanno lasciato Bologna con i tre figli per trasferirsi in Val d'Elsa. Con passione e fatica hanno riportato in vita un antico podere in pietra e mattoni, seguendo criteri ecologici: geotermia, fotovoltaico, isolamento, raccolta delle acque piovane. Oggi l'azienda ha 25 ettari fra terreno e vigneti. Hanno mantenuto la memoria della casa e il carattere toscano, pensando al futuro dei figli e al benessere degli ospiti.",
          en: "In 2007 Antonio and Maria Grazia left Bologna with their three children and moved to Val d'Elsa. With passion and hard work they brought an old stone and brick farmstead back to life, following ecological criteria: geothermal energy, solar panels, insulation, rainwater harvesting. Today the farm covers 25 hectares of land and vineyards. They kept the memory of the house and its Tuscan character, with their children's future and their guests' wellbeing in mind.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "alloggi",
      kicker: { it: "Dormire a La Segolina", en: "Stay at La Segolina" },
      title: { it: "Tre appartamenti e due camere.", en: "Three apartments and two rooms." },
      text: {
        it: "Dodici ospiti in tutto, ognuno con il suo ingresso e il suo spazio verde. Gli appartamenti hanno la cucina, le camere il bagno privato.",
        en: "Twelve guests in all, each stay with its own entrance and green space. Apartments have a kitchen, rooms a private bathroom.",
      },
      tabs: [
        {
          label: { it: "Gli alloggi", en: "The stays" },
          stays: ["camere", "monteriggioni", "montepulciano", "siena"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "giardino",
      image: {
        src: "estate/portico.webp",
        alt: { it: "Il portico e il giardino del podere", en: "The porch and garden of the farmstead" },
      },
      kicker: { it: "Fuori dalla porta", en: "Outside your door" },
      title: { it: "Portico, giardino e una grande quercia.", en: "A porch, a garden and a great oak." },
      text: {
        it: "Ogni alloggio ha il suo giardino privato, sotto il portico o all'ombra di una quercia secolare. In fondo, un ampio fienile attrezzato per rilassarsi, e la piscina per i giorni caldi.",
        en: "Every stay has its own private garden, under the porch or in the shade of a centuries-old oak. Beyond, a large equipped barn to relax in, and the pool for hot days.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "IN FATTORIA", en: "AT THE FARM" },
      title: { it: "Si impara assaggiando e camminando.", en: "Learn by tasting and walking." },
      intro: {
        it: "Vino, bicicletta e vendemmia: tre modi per conoscere la terra intorno al podere.",
        en: "Wine, bikes and the grape harvest: three ways to get to know the land around the farm.",
      },
      marquee: {
        it: "VINO · UVA · BICICLETTA · FRANCIGENA · MONTAGNOLA · ",
        en: "WINE · GRAPES · BIKES · FRANCIGENA · MONTAGNOLA · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Tutte le esperienze", en: "All experiences" },
      ctaHref: "/esperienze",
      items: [
        {
          title: "Corso di degustazione",
          word: { it: "VINO", en: "WINE" },
          meta: { it: "Con un sommelier FISAR", en: "With a FISAR sommelier" },
          text: {
            it: "Un breve corso d'introduzione ai vini toscani: Chianti, Brunello, Nobile di Montepulciano.",
            en: "A short introduction to Tuscan wines: Chianti, Brunello, Nobile di Montepulciano.",
          },
          image: "estate/rose.webp",
        },
        {
          title: "Via Francigena in bici",
          word: { it: "BICI", en: "BIKE" },
          meta: { it: "Anche a piedi", en: "Or on foot" },
          text: {
            it: "Un percorso guidato in mountain bike o con i bastoncini da nordic walking, lungo l'antica via dei pellegrini.",
            en: "A guided route by mountain bike or nordic walking, along the ancient pilgrims' road.",
          },
          image: "estate/girasoli.webp",
        },
        {
          title: "Il ciclo dell'uva",
          word: { it: "UVA", en: "GRAPES" },
          meta: { it: "Settembre", en: "September" },
          text: {
            it: "La fattoria didattica: i bambini seguono la vendemmia, dal grappolo al mosto.",
            en: "Our educational farm: children follow the harvest, from bunch to must.",
          },
          image: "estate/podere.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: { it: "La fattoria, le esperienze e la Toscana intorno.", en: "The farm, the experiences and the Tuscany around you." },
      items: [
        {
          meta: { it: "Biologico · energie rinnovabili", en: "Organic · renewable energy" },
          title: { it: "La fattoria", en: "The farm" },
          text: {
            it: "La storia del podere, gli impegni green e i prodotti: vino, olio, miele e ceci.",
            en: "The story of the farmstead, its green commitments and its products: wine, oil, honey and chickpeas.",
          },
          image: { src: "estate/prima-1.webp", alt: { it: "Il podere prima della ristrutturazione", en: "The farmstead before restoration" } },
          link: { label: DISCOVER, href: "/la-fattoria" },
        },
        {
          meta: { it: "Vino · bici · vendemmia", en: "Wine · bikes · harvest" },
          title: { it: "Esperienze", en: "Experiences" },
          text: {
            it: "Degustazioni con il sommelier, la Francigena in bici, il ciclo dell'uva per i più piccoli.",
            en: "Tastings with the sommelier, the Francigena by bike, the grape cycle for little ones.",
          },
          image: { src: "estate/famiglia.webp", alt: { it: "Una famiglia in sosta lungo un sentiero", en: "A family resting along a path" } },
          link: { label: DISCOVER, href: "/esperienze" },
        },
        {
          meta: { it: "Siena · San Gimignano · Volterra", en: "Siena · San Gimignano · Volterra" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Monteriggioni a dieci minuti, Siena e San Gimignano in mezz'ora, il Chianti e Volterra a portata di mano.",
            en: "Monteriggioni ten minutes away, Siena and San Gimignano within half an hour, Chianti and Volterra within reach.",
          },
          image: { src: "estate/veranda.webp", alt: { it: "La campagna vista dal portico", en: "The countryside seen from the porch" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Nel cuore della Val d'Elsa", en: "Heart of Val d'Elsa" },
      title: { it: "Tra Monteriggioni e Colle.", en: "Between Monteriggioni and Colle." },
      text: {
        it: "Il podere sta sulla provinciale 5, fra Monteriggioni e Colle di Val d'Elsa: da qui Siena, San Gimignano, Volterra e il Chianti sono a una guida tranquilla.",
        en: "The farm sits on the provincial road 5, between Monteriggioni and Colle di Val d'Elsa: from here Siena, San Gimignano, Volterra and Chianti are an easy drive.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Agriturismo La Segolina",
        en: "Stylised map of distances from Agriturismo La Segolina",
      },
      gridLabels: { x: "43°24′ N", y: "11°10′ E" },
      homeLabel: { lines: ["Agriturismo", "La Segolina"], sub: "Colle di Val d'Elsa" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "La Segolina",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "7 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "10 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "22 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "25 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "25 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "volterra", name: { it: "Volterra", en: "Volterra" }, distance: "40 km", coordinates: { lat: 43.4007, lng: 10.8603 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "60 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/ingresso.webp",
        alt: { it: "L'ingresso del podere dalla strada", en: "The farmstead entrance from the road" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a La Segolina.", en: "We look forward to welcoming you." },
      text: {
        it: "Per disponibilità e prenotazioni usate il modulo online o scriveteci: vi rispondiamo di persona. Prezzi massimi a notte: camera doppia con bagno 95 €, appartamenti da 150 a 180 €.",
        en: "For availability and bookings use the online form or write to us: we'll reply in person. Maximum nightly rates: double room with bathroom €95, apartments €150 to €180.",
      },
      whatsappLabel: WHATSAPP_LABEL,
      emailLabel: EMAIL_LABEL,
    },
  ],

  pages: [
    {
      slug: "la-fattoria",
      title: { it: "La fattoria", en: "The farm" },
      description: {
        it: "La storia di Antonio e Maria Grazia, i 25 ettari di vigna e terra, gli impegni green e i prodotti di Agriturismo La Segolina.",
        en: "The story of Antonio and Maria Grazia, 25 hectares of vines and land, the green commitments and the products of Agriturismo La Segolina.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/podere.webp",
            alt: { it: "Il podere visto dal giardino", en: "The farmstead seen from the garden" },
          },
          labelParts: [
            { it: "La fattoria", en: "The farm" },
            { it: "Dal 2007", en: "Since 2007" },
          ],
          titleLines: [
            { it: "Un vecchio podere", en: "An old farmstead" },
            { it: "riportato in vita", en: "brought back to life" },
          ],
          intro: {
            it: "La casa di famiglia, della prima metà dell'Ottocento, ristrutturata con criteri ecologici e senza perdere il suo carattere toscano.",
            en: "The family house, from the first half of the 19th century, restored with ecological criteria and without losing its Tuscan character.",
          },
          cta: { label: { it: "La fattoria in sintesi", en: "The farm at a glance" }, href: "#numeri" },
          pillars: [
            { it: "25 ettari", en: "25 hectares" },
            { it: "Biologico", en: "Organic" },
            { it: "Geotermia e fotovoltaico", en: "Geothermal and solar" },
          ],
        },
        {
          type: "facts",
          id: "numeri",
          kicker: { it: "La fattoria", en: "The farm" },
          title: { it: "In sintesi", en: "At a glance" },
          image: { src: "estate/prima-2.webp", alt: { it: "Il podere fra gli alberi prima dei lavori", en: "The farmstead among the trees before the works" } },
          items: [
            { label: { it: "Costruzione", en: "Built" }, value: { it: "Prima metà dell'800", en: "Early 1800s" }, note: { it: "Podere di famiglia", en: "Family farmstead" } },
            { label: { it: "Rinascita", en: "Restoration" }, value: { it: "2007", en: "2007" }, note: { it: "Da Bologna alla Val d'Elsa", en: "From Bologna to Val d'Elsa" } },
            { label: { it: "Superficie", en: "Land" }, value: { it: "25 ettari", en: "25 hectares" }, note: { it: "Terreno e vigneti", en: "Fields and vineyards" } },
            { label: { it: "Agricoltura", en: "Farming" }, value: { it: "Biologica", en: "Organic" } },
            { label: { it: "Certificazione", en: "Certification" }, value: { it: "ICEA", en: "ICEA" }, note: { it: "Prodotti e servizi", en: "Products and services" } },
            { label: { it: "Ospiti", en: "Guests" }, value: { it: "Fino a 12", en: "Up to 12" } },
          ],
        },
        {
          type: "chapters",
          id: "green",
          kicker: { it: "Impegni green", en: "Green commitments" },
          title: { it: "Una ristrutturazione pensata per il futuro", en: "A restoration built for the future" },
          items: [
            {
              word: { it: "Energia", en: "Energy" },
              kicker: { it: "Fonti rinnovabili", en: "Renewable sources" },
              title: { it: "Geotermia e fotovoltaico", en: "Geothermal and solar" },
              text: {
                it: "Tetto isolato, luci a led con spegnimento automatico, geotermia e fotovoltaico: la casa consuma poco e produce da sé.",
                en: "Insulated roof, LED lights with automatic switch-off, geothermal and solar power: the house uses little and makes its own.",
              },
              image: { src: "estate/cortile.webp", alt: { it: "Il cortile del podere", en: "The farmstead courtyard" } },
            },
            {
              word: { it: "Acqua", en: "Water" },
              kicker: { it: "Risparmio idrico", en: "Saving water" },
              title: { it: "Contatori e acqua piovana", en: "Meters and rainwater" },
              text: {
                it: "I consumi si controllano con i contatori, l'acqua piovana si raccoglie e si ricicla. Anche la raccolta differenziata fa parte della vita del podere.",
                en: "Consumption is monitored with meters, rainwater is collected and reused. Separate waste collection is part of everyday life at the farm.",
              },
              image: { src: "estate/finestra.webp", alt: { it: "Una finestra in mattoni sul giardino", en: "A brick window onto the garden" } },
            },
            {
              word: { it: "Terra", en: "Land" },
              kicker: { it: "Filiera corta", en: "Short supply chain" },
              title: { it: "Vino, olio, miele e ceci", en: "Wine, oil, honey and chickpeas" },
              text: {
                it: "Rosso Toscano IGT biologico, olio biologico, miele e ceci. Progetti per la biodiversità, il recupero di varietà locali e le erbe aromatiche.",
                en: "Organic Rosso Toscano IGT wine, organic olive oil, honey and chickpeas. Projects for biodiversity, recovery of local varieties and aromatic herbs.",
              },
              image: { src: "estate/arco.webp", alt: { it: "Un portone ad arco con vista sui campi", en: "An arched doorway looking onto the fields" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/porta.webp", alt: { it: "Il portone del podere con il cane di casa", en: "The farmstead door with the house dog" } },
          kicker: { it: "Venite a trovarci", en: "Come and visit" },
          title: { it: "Antonio e Maria Grazia vi aspettano.", en: "Antonio and Maria Grazia await you." },
          text: {
            it: "Scriveteci per conoscere la fattoria o per acquistare vino, olio e miele.",
            en: "Write to us to get to know the farm or to buy wine, oil and honey.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "esperienze",
      title: { it: "Esperienze", en: "Experiences" },
      description: {
        it: "Degustazioni con sommelier, Via Francigena in mountain bike o a piedi, fattoria didattica e piscina a Agriturismo La Segolina.",
        en: "Tastings with a sommelier, the Via Francigena by mountain bike or on foot, educational farm and pool at Agriturismo La Segolina.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/girasoli.webp", alt: { it: "Girasoli lungo una strada bianca, con due ciclisti", en: "Sunflowers along a dirt road, with two cyclists" } },
          labelParts: [
            { it: "Esperienze", en: "Experiences" },
            { it: "Vino · bici · natura", en: "Wine · bikes · nature" },
          ],
          titleLines: [
            { it: "Da fare", en: "To do" },
            { it: "intorno al podere", en: "around the farm" },
          ],
          intro: {
            it: "Le colline del Chianti si fanno a piedi, a cavallo o in bicicletta. E a tavola, con un bicchiere in mano.",
            en: "The Chianti hills are for walking, riding or cycling. And for the table, with a glass in hand.",
          },
          cta: { label: { it: "Le proposte", en: "What we offer" }, href: "#proposte" },
          pillars: [
            { it: "Sommelier FISAR", en: "FISAR sommelier" },
            { it: "Via Francigena", en: "Via Francigena" },
          ],
        },
        {
          type: "cards",
          id: "proposte",
          kicker: { it: "Le proposte", en: "What we offer" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Scriveteci per date, orari e costi: li concordiamo insieme.",
            en: "Write to us for dates, times and costs: we arrange them together.",
          },
          items: [
            {
              meta: { it: "Con un sommelier FISAR", en: "With a FISAR sommelier" },
              title: { it: "Corso di degustazione", en: "Wine tasting course" },
              text: {
                it: "Brevi corsi d'introduzione alla degustazione dei vini toscani, per ospiti e amici della fattoria.",
                en: "Short introductory courses on tasting Tuscan wines, for guests and friends of the farm.",
              },
              details: [
                { it: "Chianti, Brunello, Nobile di Montepulciano", en: "Chianti, Brunello, Nobile di Montepulciano" },
                { it: "Abbinamenti con il cibo", en: "Food pairings" },
              ],
              image: { src: "estate/rose.webp", alt: { it: "Rose rosse sul portico del podere", en: "Red roses on the farmstead porch" } },
            },
            {
              meta: { it: "Mountain bike o nordic walking", en: "Mountain bike or nordic walking" },
              title: { it: "Via Francigena", en: "Via Francigena" },
              text: {
                it: "Un percorso guidato sull'antica via dei pellegrini, che passa proprio da queste colline.",
                en: "A guided route on the ancient pilgrims' road, which runs right through these hills.",
              },
              details: [{ it: "Con guida", en: "Guided" }],
              image: { src: "estate/famiglia.webp", alt: { it: "Una famiglia in sosta lungo un sentiero", en: "A family resting along a path" } },
            },
            {
              meta: { it: "Settembre", en: "September" },
              title: { it: "Il ciclo dell'uva", en: "The grape cycle" },
              text: {
                it: "La fattoria didattica per i bambini: la vendemmia raccontata e vissuta, dal grappolo al mosto.",
                en: "The educational farm for children: the grape harvest told and lived, from bunch to must.",
              },
              image: { src: "estate/prima-1.webp", alt: { it: "Il podere fra gli alberi", en: "The farmstead among the trees" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/portico.webp", alt: { it: "Il portico del podere", en: "The farmstead porch" } },
          kicker: { it: "Prenota un'esperienza", en: "Book an experience" },
          title: { it: "Scriveteci quando e in quanti.", en: "Tell us when and how many." },
          text: {
            it: "Vi confermiamo disponibilità e orario. Vicino al podere trovate anche un centro ippico e le terme di Rapolano.",
            en: "We'll confirm availability and time. Near the farm you'll also find a riding centre and the Rapolano spa.",
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
        it: "Cosa vedere intorno ad Agriturismo La Segolina: Monteriggioni, Siena, San Gimignano, Volterra e le colline del Chianti.",
        en: "What to see around Agriturismo La Segolina: Monteriggioni, Siena, San Gimignano, Volterra and the Chianti hills.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/strada.webp", alt: { it: "La casa lungo la strada provinciale", en: "The house along the provincial road" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Val d'Elsa · Siena", en: "Val d'Elsa · Siena" },
          ],
          titleLines: [
            { it: "Il cuore", en: "The heart" },
            { it: "della Toscana", en: "of Tuscany" },
          ],
          intro: {
            it: "Da qui Siena, Firenze, il Chianti, le Colline Metallifere, Volterra, il mare e persino Pisa sono facili da raggiungere. Un viaggio breve, ma da non fare di fretta.",
            en: "From here Siena, Florence, Chianti, the Metalliferous Hills, Volterra, the sea and even Pisa are easy to reach. A short trip, but not one to rush.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Monteriggioni 10 km", en: "Monteriggioni 10 km" },
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
              word: { it: "Mura", en: "Walls" },
              kicker: { it: "A 10 km", en: "10 km away" },
              title: { it: "Monteriggioni", en: "Monteriggioni" },
              text: {
                it: "Con le sue quattordici torri e la cinta intatta, è la porta senese alla Val d'Elsa, voluta a presidio della Francigena. Varcare la porta è come premere il pulsante dell'ascensore del tempo.",
                en: "With its fourteen towers and intact walls, it is Siena's gateway to Val d'Elsa, built to guard the Francigena. Walking through the gate is like pressing the time-machine button.",
              },
            },
            {
              word: { it: "Siena", en: "Siena" },
              kicker: { it: "A 25 km", en: "25 km away" },
              title: { it: "Piazza del Campo e il Palio", en: "Piazza del Campo and the Palio" },
              text: {
                it: "Fra salite e discese, musei, piazze, chiese e panorami. Il Palio del 2 luglio e del 16 agosto, sfida fra le diciassette contrade, riempie la città di colori e di cavalli.",
                en: "Up and down, museums, squares, churches and views. The Palio of 2 July and 16 August, a contest between the seventeen contrade, fills the city with colour and horses.",
              },
            },
            {
              word: { it: "Torri", en: "Towers" },
              kicker: { it: "A 22 km", en: "22 km away" },
              title: { it: "San Gimignano e Volterra", en: "San Gimignano and Volterra" },
              text: {
                it: "San Gimignano, centro storico patrimonio Unesco, sale su un colle a dominare la Val d'Elsa. Volterra porta i segni di ogni epoca, dagli Etruschi all'Ottocento.",
                en: "San Gimignano, a UNESCO World Heritage old town, rises on a hill above Val d'Elsa. Volterra bears the marks of every era, from the Etruscans to the 19th century.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/veranda.webp", alt: { it: "La campagna vista dal portico", en: "The countryside seen from the porch" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a La Segolina.", en: "We look forward to welcoming you." },
          text: {
            it: "Vi diamo volentieri consigli su itinerari, ristoranti e cantine da visitare. C'è anche una fermata dell'autobus davanti al podere, con corse per Siena, San Gimignano, Colle e Firenze.",
            en: "We're happy to suggest itineraries, restaurants and wineries to visit. There's also a bus stop at the farm, with services to Siena, San Gimignano, Colle and Florence.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  accommodations: [
    {
      slug: "camere",
      name: "Camere San Gimignano e Castellina",
      category: { it: "DUE CAMERE", en: "TWO ROOMS" },
      size: "2",
      guests: "4",
      layout: { it: "2 camere matrimoniali · bagno privato", en: "2 double rooms · private bathroom" },
      blurb: {
        it: "Al piano terra del corpo principale, con la sala comune e il camino.",
        en: "On the ground floor of the main house, with the shared lounge and fireplace.",
      },
      description: {
        it: "Due camere matrimoniali al piano terra dell'edificio principale, disponibili anche separatamente. Ognuna ha il bagno privato. Si può usare l'ampia sala comune con camino, televisione LCD, aria condizionata e Wi-Fi, sotto le volte in mattoni. Giardino privato.",
        en: "Two double rooms on the ground floor of the main building, also available separately. Each has a private bathroom. Guests can use the large shared lounge with fireplace, LCD TV, air conditioning and Wi-Fi, under brick vaults. Private garden.",
      },
      cover: "stays/camere-01.webp",
      detail: "stays/camere-04.webp",
      gallery: [],
      amenities: [BATH, GARDEN, FIREPLACE, WIFI, POOL],
      units: [
        {
          slug: "camera-castellina",
          name: "Camera Castellina",
          guests: "2",
          layout: { it: "1 camera matrimoniale · bagno privato", en: "1 double room · private bathroom" },
          text: {
            it: "Camera matrimoniale con testiera arancio e muri in pietra, bagno privato con lavabo a vasca.",
            en: "Double room with an orange headboard and stone walls, private bathroom with a basin.",
          },
          images: photos("camere", 1, 3),
        },
        {
          slug: "camera-san-gimignano",
          name: "Camera San Gimignano",
          guests: "2",
          layout: { it: "1 camera matrimoniale · bagno privato", en: "1 double room · private bathroom" },
          text: {
            it: "Camera matrimoniale con bagno privato. Si apre sulla sala comune con camino, sotto le volte in mattoni.",
            en: "Double room with private bathroom. It opens onto the shared lounge with fireplace, under brick vaults.",
          },
          images: photos("camere", 4, 7),
        },
      ],
    },
    {
      slug: "monteriggioni",
      name: "Appartamento Monteriggioni",
      category: { it: "APPARTAMENTO 2+2", en: "APARTMENT 2+2" },
      size: "1",
      guests: "4",
      layout: { it: "1 camera · divano letto · giardino", en: "1 bedroom · sofa bed · garden" },
      blurb: {
        it: "Circa 50 mq al piano terra, con il salone rivolto verso Monteriggioni.",
        en: "About 50 sqm on the ground floor, its living room facing Monteriggioni.",
      },
      description: {
        it: "Un appartamento di circa 50 mq al piano terra dell'edificio principale. Zona giorno con ampio salone e divano letto rivolto verso Monteriggioni, grande cucina a vista, una camera matrimoniale con bagno. Giardino privato. Bambini sotto i 12 anni per il secondo letto.",
        en: "An apartment of about 50 sqm on the ground floor of the main building. Living area with a wide lounge and sofa bed facing Monteriggioni, large open kitchen, a double bedroom with bathroom. Private garden. Children under 12 for the extra bed.",
      },
      cover: "stays/monteriggioni-01.webp",
      detail: "stays/monteriggioni-03.webp",
      gallery: [],
      amenities: [KITCHEN, BATH, GARDEN, WIFI, POOL],
      units: [
        {
          slug: "appartamento-monteriggioni",
          name: "Appartamento Monteriggioni",
          guests: "2+2",
          layout: { it: "1 camera matrimoniale · 1 bagno", en: "1 double bedroom · 1 bathroom" },
          text: {
            it: "Salone con divano letto, cucina a vista con tavolo, camera matrimoniale, bagno. Giardino privato.",
            en: "Lounge with sofa bed, open kitchen with table, double bedroom, bathroom. Private garden.",
          },
          images: photos("monteriggioni", 1, 6),
        },
      ],
    },
    {
      slug: "montepulciano",
      name: "Appartamento Montepulciano",
      category: { it: "APPARTAMENTO 2+2", en: "APARTMENT 2+2" },
      size: "1",
      guests: "4",
      layout: { it: "1 camera · primo piano · fienile", en: "1 bedroom · first floor · barn" },
      blurb: {
        it: "Al primo piano di una capanna toscana, con il fienile attrezzato sul retro.",
        en: "On the first floor of a Tuscan barn house, with an equipped hayloft at the back.",
      },
      description: {
        it: "Al primo piano di una classica capanna toscana, ristrutturata con cura, si sale da una scala esterna in pietra. L'appartamento di circa 50 mq ha la zona giorno con angolo cottura, una camera matrimoniale e un bagno. Sul retro, un ampio fienile attrezzato da usare come zona relax.",
        en: "On the first floor of a classic, carefully restored Tuscan barn house, reached by an outside stone staircase. The apartment of about 50 sqm has a living area with kitchenette, a double bedroom and a bathroom. At the back, a large equipped hayloft to use as a relaxation area.",
      },
      cover: "stays/montepulciano-01.webp",
      detail: "stays/montepulciano-04.webp",
      gallery: [],
      amenities: [KITCHEN, BATH, WIFI, POOL],
      units: [
        {
          slug: "appartamento-montepulciano",
          name: "Appartamento Montepulciano",
          guests: "2+2",
          layout: { it: "1 camera matrimoniale · 1 bagno", en: "1 double bedroom · 1 bathroom" },
          text: {
            it: "Soggiorno con angolo cottura, camera matrimoniale, bagno. Fienile attrezzato sul retro.",
            en: "Living area with kitchenette, double bedroom, bathroom. Equipped hayloft at the back.",
          },
          images: photos("montepulciano", 1, 6),
        },
      ],
    },
    {
      slug: "siena",
      name: "Appartamento Siena",
      category: { it: "APPARTAMENTO", en: "APARTMENT" },
      size: "2",
      guests: "5",
      layout: { it: "2 camere · camino · giardino", en: "2 bedrooms · fireplace · garden" },
      blurb: {
        it: "Il più grande, circa 80 mq, con il giardino all'ombra di una quercia secolare.",
        en: "The largest, about 80 sqm, with a garden in the shade of a centuries-old oak.",
      },
      description: {
        it: "Circa 80 mq al piano terra di una classica capanna toscana, ristrutturata nel rispetto dello stile originario. Ampia cucina con affaccio sul giardino privato, all'ombra di una grande quercia secolare; una camera matrimoniale (2+1), una camera doppia con camino e il bagno.",
        en: "About 80 sqm on the ground floor of a classic Tuscan barn house, restored in keeping with its original style. A large kitchen overlooking the private garden in the shade of a great centuries-old oak; a double bedroom (2+1), a twin room with fireplace and a bathroom.",
      },
      cover: "stays/siena-01.webp",
      detail: "stays/siena-02.webp",
      gallery: [],
      amenities: [KITCHEN, BATH, FIREPLACE, GARDEN, WIFI, POOL],
      units: [
        {
          slug: "appartamento-siena",
          name: "Appartamento Siena",
          guests: "5",
          layout: { it: "2 camere · 1 bagno", en: "2 bedrooms · 1 bathroom" },
          text: {
            it: "Cucina con vista sul giardino, camera matrimoniale (2+1), camera doppia con camino, bagno.",
            en: "Kitchen overlooking the garden, double bedroom (2+1), twin room with fireplace, bathroom.",
          },
          images: photos("siena", 1, 4),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli alloggi", en: "All stays" },
    kicker: { it: "Il vostro alloggio a La Segolina", en: "Your stay at La Segolina" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'alloggio", en: "Inside" },
    unitsLabel: { it: "L'alloggio", en: "The stay" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Agriturismo La Segolina.",
      en: "Hello, I'd like some information about {name} at Agriturismo La Segolina.",
    },
    amenitiesLabel: { it: "Nell'alloggio", en: "In the stay" },
    ctaTitle: { it: "Un'estate fra le colline.", en: "A summer among the hills." },
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

  footer: { copyright: "© 2026 Agriturismo La Segolina" },

  legalPages: defaultLegalPages({
    name: "Agriturismo La Segolina",
    address: "Podere La Segolina 3, Loc. Sant'Antonio SP 5, 53034 Colle di Val d'Elsa (SI)",
    email: "info@lasegolina.it",
  }),
};

export default site;
