/**
 * FATTORIA IL CASONE
 * ==================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Nerbona,
 * con i contenuti pubblici di fattoriailcasone.it: testi, camere, offerta e
 * fotografie vengono da lì, riscritti e riorganizzati.
 *
 *   Camere ▾  /matrimoniale-standard  /matrimoniale-superior
 *             /camera-deluxe  /tripla-deluxe
 *   La fattoria /la-fattoria · Offerte /offerte · Dove siamo /dove-siamo
 *   Prenota → motore Amichotel
 *
 * È un B&B con sei camere e senza piscina: niente sezione esperienze, più
 * spazio alla casa del Quattrocento, al giardino e a Monteriggioni.
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

/* Dotazioni uguali in tutte le camere. */
const ROOM_AMENITIES: Localized[] = [
  { it: "Bagno privato con doccia, asciugacapelli e kit cortesia", en: "Private bathroom with shower, hairdryer and toiletries" },
  { it: "Aria condizionata e riscaldamento", en: "Air conditioning and heating" },
  { it: "TV e Wi-Fi", en: "TV and Wi-Fi" },
  { it: "Scrivania", en: "Desk" },
  { it: "Zanzariere", en: "Mosquito nets" },
  { it: "Parcheggio privato", en: "Private parking" },
  { it: "Camere non fumatori", en: "Non-smoking rooms" },
];

/** Le foto di una camera: stays/<nome>-01.webp, -02... */
const photos = (name: string) =>
  Array.from({ length: 5 }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const site: SiteConfig = {
  brand: {
    id: "casone",
    prefix: "B&B",
    name: "Fattoria Il Casone",
    logo: "logo.svg",
  },

  contact: {
    phone: "393385493385",
    phoneDisplay: "+39 338 549 3385",
    email: "fattoriailcasone@hotmail.com",
    address: ["Strada di Gabbricce 25/a", "53035 Monteriggioni (SI)"],
    vat: "IT01122820523",
    coordinates: { lat: 43.3961, lng: 11.189 },
    social: [{ label: "Instagram", href: "https://www.instagram.com/fattoriailcasone/" }],
  },

  seo: {
    domain: "https://www.fattoriailcasone.it",
    title: {
      it: "B&B Fattoria Il Casone | Camere a Monteriggioni, Siena",
      en: "B&B Fattoria Il Casone | Rooms near Monteriggioni, Siena",
    },
    description: {
      it: "Sei camere in una fattoria del Quattrocento con giardino di 4000 mq, a tre minuti da Monteriggioni e a breve distanza da Siena.",
      en: "Six rooms in a 15th-century farmhouse with a 4,000 m² garden, three minutes from Monteriggioni and a short drive from Siena.",
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
        { href: "/matrimoniale-standard", label: { it: "Matrimoniale Standard", en: "Standard Double" } },
        { href: "/matrimoniale-superior", label: { it: "Matrimoniale Superior", en: "Superior Double" } },
        { href: "/camera-deluxe", label: { it: "Camera Deluxe", en: "Deluxe Room" } },
        { href: "/tripla-deluxe", label: { it: "Tripla Deluxe", en: "Deluxe Triple" } },
      ],
    },
    { page: "la-fattoria", label: { it: "La fattoria", en: "The farmhouse" } },
    { page: "offerte", label: { it: "Offerte", en: "Offers" } },
    { page: "dove-siamo", label: { it: "Dove siamo", en: "Location" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: "https://booking.amichotel.it/widget.aspx?p_id=113",
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
          it: "La facciata gialla della Fattoria Il Casone con la torretta",
          en: "The yellow façade of Fattoria Il Casone with its tower",
        },
      },
      labelParts: [
        { it: "Bed & Breakfast", en: "Bed & Breakfast" },
        { it: "Monteriggioni", en: "Monteriggioni" },
      ],
      titleLines: [
        { it: "Una fattoria del Quattrocento,", en: "A 15th-century farmhouse," },
        { it: "sotto le mura di Monteriggioni.", en: "below the walls of Monteriggioni." },
      ],
      intro: {
        it: "Sei camere fra travi a vista e cotto antico, un giardino di 4000 metri quadri e il borgo di Dante a tre minuti.",
        en: "Six rooms with exposed beams and old terracotta floors, a 4,000 m² garden, and Dante's walled village three minutes away.",
      },
      cta: {
        label: { it: "Scopri le camere", en: "See the rooms" },
        href: "#camere",
      },
      pillars: [
        { it: "Sei camere con bagno", en: "Six rooms with bathroom" },
        { it: "Giardino di 4000 m²", en: "4,000 m² garden" },
        { it: "Monteriggioni 3 minuti", en: "Monteriggioni 3 minutes" },
      ],
    },

    {
      type: "story",
      id: "fattoria",
      number: "1400",
      numberLabel: { it: "LA FATTORIA", en: "THE FARMHOUSE" },
      ghost: "CASONE",
      titleLines: [
        { it: "Sei secoli", en: "Six centuries" },
        { it: "di campagna", en: "of Sienese" },
      ],
      titleEmphasis: { it: "senese.", en: "countryside." },
      mainImage: {
        src: "estate/corte.webp",
        alt: { it: "L'ingresso ad arco della fattoria", en: "The arched entrance of the farmhouse" },
        caption: {
          it: "Porte toscane antiche e mattoni rossi, riportati al loro splendore",
          en: "Old Tuscan doors and red brick, restored to their former glory",
        },
      },
      aerialImage: {
        src: "estate/monteriggioni.webp",
        alt: { it: "Le mura di Monteriggioni dalla campagna", en: "The walls of Monteriggioni from the countryside" },
        badge: "43°23′ N · 11°11′ E",
      },
      manifesto: {
        label: { it: "UNA CASA ANTICA, RESTAURATA CON CURA", en: "AN OLD HOUSE, CAREFULLY RESTORED" },
        text: {
          it: "Fra colline verdi e vigneti, nella campagna di Monteriggioni, il Casone è un'antica fattoria del Quattrocento che un restauro attento ha riportato all'antico splendore: soffitti con travi a vista, porte toscane d'epoca, pavimenti in mattoni rossi. Dentro c'è ancora la grande cucina originale con il vecchio camino e la sua panca, dove sedersi con un bicchiere di vino. Fuori, un giardino di 4000 metri quadri fra rose, more selvatiche, fragole, menta e lavanda.",
          en: "Among green hills and vineyards in the Monteriggioni countryside, Il Casone is a 15th-century farmhouse brought back to its former glory by careful restoration: exposed-beam ceilings, period Tuscan doors, red brick floors. Inside there's still the large original kitchen with its old fireplace and bench, a place to sit with a glass of wine. Outside, a 4,000 m² garden among roses, wild blackberries, strawberries, mint and lavender.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "camere",
      kicker: { it: "Dormire al Casone", en: "Stay at Il Casone" },
      title: {
        it: "Sei camere, quattro modi di stare.",
        en: "Six rooms, four ways to stay.",
      },
      text: {
        it: "Spaziose e luminose, con il fascino rustico della tradizione toscana e i comfort di oggi. Tutte con bagno privato.",
        en: "Spacious and bright, with the rustic charm of Tuscan tradition and today's comforts. All with private bathroom.",
      },
      tabs: [
        {
          label: { it: "Le camere", en: "The rooms" },
          stays: ["matrimoniale-standard", "matrimoniale-superior", "camera-deluxe", "tripla-deluxe"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "giardino",
      image: {
        src: "estate/villa-fioritura.webp",
        alt: { it: "Il giardino in fiore la sera", en: "The garden in bloom at dusk" },
      },
      kicker: { it: "Il giardino", en: "The garden" },
      title: {
        it: "Quattromila metri quadri di prato, rose e lavanda.",
        en: "Four thousand square metres of lawn, roses and lavender.",
      },
      text: {
        it: "Tavolini all'ombra, panchine sotto i ciliegi e i profumi dell'orto: il posto dove finire la giornata, quando le luci della fattoria si accendono.",
        en: "Tables in the shade, benches under the cherry trees and the scents of the herb garden: the place to end the day, when the farmhouse lights come on.",
      },
    },

    {
      type: "feature",
      id: "offerta",
      image: {
        src: "estate/villa-sera.webp",
        alt: { it: "La fattoria illuminata la sera", en: "The farmhouse lit up at night" },
      },
      kicker: { it: "Offerta · prenotando sul sito", en: "Offer · booking direct" },
      title: {
        it: "Tre notti con colazione, 267 € tutto incluso.",
        en: "Three nights with breakfast, €267 all inclusive.",
      },
      text: {
        it: "Più resti, più risparmi. Per averla, indica il codice OFF267 quando prenoti.",
        en: "The longer you stay, the more you save. Quote code OFF267 when you book.",
      },
      cta: {
        label: { it: "Tutte le offerte", en: "All offers" },
        href: "/offerte",
      },
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Posizione strategica", en: "Perfectly placed" },
      title: {
        it: "Monteriggioni sotto casa, Siena a un passo.",
        en: "Monteriggioni next door, Siena a step away.",
      },
      text: {
        it: "Il punto di partenza ideale per Siena, il Chianti e San Gimignano, con la superstrada Firenze-Siena a pochi minuti.",
        en: "The ideal starting point for Siena, Chianti and San Gimignano, with the Florence-Siena highway minutes away.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Fattoria Il Casone",
        en: "Stylised map of distances from Fattoria Il Casone",
      },
      gridLabels: { x: "43°23′ N", y: "11°11′ E" },
      homeLabel: { lines: ["Il", "Casone"], sub: "Monteriggioni" },
      rings: [
        { km: 5, label: "5 km" },
        { km: 20, label: "20 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Il Casone",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "3 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "12 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "18 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
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
        src: "estate/villa-sera.webp",
        alt: { it: "La fattoria la sera", en: "The farmhouse at night" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo al Casone.", en: "We look forward to welcoming you." },
      text: {
        it: "Sul nostro sito trovate sempre la tariffa e le condizioni migliori. Per domande o richieste particolari scriveteci: vi rispondiamo di persona.",
        en: "Our website always has the best rate and conditions. For questions or special requests, write to us: we'll reply in person.",
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
      slug: "la-fattoria",
      title: { it: "La fattoria", en: "The farmhouse" },
      description: {
        it: "Una fattoria del Quattrocento restaurata nella campagna di Monteriggioni: travi a vista, la cucina con il camino, un giardino di 4000 mq.",
        en: "A restored 15th-century farmhouse in the Monteriggioni countryside: exposed beams, the kitchen with its fireplace, a 4,000 m² garden.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/corte.webp", alt: { it: "L'ingresso della fattoria", en: "The farmhouse entrance" } },
          labelParts: [
            { it: "La fattoria", en: "The farmhouse" },
            { it: "Dal 1400", en: "Since the 1400s" },
          ],
          titleLines: [
            { it: "Una casa antica,", en: "An old house," },
            { it: "comoda come oggi", en: "comfortable as today" },
          ],
          intro: {
            it: "Il restauro ha conservato quello che c'era: travi, porte, cotto e la grande cucina con il camino.",
            en: "The restoration kept what was there: beams, doors, terracotta and the big kitchen with its fireplace.",
          },
          cta: { label: { it: "Da sapere", en: "Good to know" }, href: "#informazioni" },
          pillars: [
            { it: "Sei camere", en: "Six rooms" },
            { it: "Colazione", en: "Breakfast" },
            { it: "Parcheggio privato", en: "Private parking" },
          ],
        },
        {
          type: "facts",
          id: "informazioni",
          kicker: { it: "Prima di arrivare", en: "Before you arrive" },
          title: { it: "Da sapere", en: "Good to know" },
          image: { src: "estate/hero.webp", alt: { it: "La facciata", en: "The façade" } },
          items: [
            { label: { it: "Camere", en: "Rooms" }, value: { it: "Sei", en: "Six" }, note: { it: "Tutte con bagno privato", en: "All with private bathroom" } },
            { label: { it: "Edificio", en: "Building" }, value: { it: "Quattrocento", en: "15th century" }, note: { it: "Restaurato con cura", en: "Carefully restored" } },
            { label: { it: "Giardino", en: "Garden" }, value: { it: "4000 m²", en: "4,000 m²" }, note: { it: "Rose, lavanda e orto", en: "Roses, lavender and herbs" } },
            { label: { it: "Comfort", en: "Comfort" }, value: { it: "Aria condizionata", en: "Air conditioning" }, note: { it: "Riscaldamento, TV e Wi-Fi in camera", en: "Heating, TV and Wi-Fi in the room" } },
            { label: { it: "Auto", en: "Car" }, value: { it: "Parcheggio privato", en: "Private parking" } },
            { label: { it: "Monteriggioni", en: "Monteriggioni" }, value: { it: "3 minuti", en: "3 minutes" }, note: { it: "In auto", en: "By car" } },
          ],
        },
        {
          type: "gallery",
          id: "spazi",
          kicker: { it: "Gli spazi", en: "The spaces" },
          title: { it: "Dentro e fuori.", en: "Inside and out." },
          images: [
            { src: "estate/villa-fioritura.webp", alt: { it: "La fattoria in primavera", en: "The farmhouse in spring" } },
            { src: "estate/corte.webp", alt: { it: "La corte", en: "The courtyard" } },
            { src: "stays/camera-deluxe-01.webp", alt: { it: "La camera Deluxe", en: "The Deluxe room" } },
            { src: "stays/tripla-deluxe-01.webp", alt: { it: "La Tripla Deluxe", en: "The Deluxe Triple" } },
            { src: "estate/villa-sera.webp", alt: { it: "La fattoria la sera", en: "The farmhouse at night" } },
            { src: "stays/matrimoniale-superior-01.webp", alt: { it: "La Matrimoniale Superior", en: "The Superior Double" } },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/villa-fioritura.webp", alt: { it: "Il giardino", en: "The garden" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Scriveteci, vi rispondiamo noi.", en: "Write to us, we'll reply ourselves." },
          text: {
            it: "Per date, camere o richieste particolari.",
            en: "About dates, rooms or special requests.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "offerte",
      title: { it: "Offerte", en: "Offers" },
      description: {
        it: "Le offerte del B&B Fattoria Il Casone a Monteriggioni: tre notti con colazione a 267 € prenotando direttamente.",
        en: "Offers at B&B Fattoria Il Casone near Monteriggioni: three nights with breakfast for €267 when booking direct.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "compact",
          image: { src: "estate/villa-sera.webp", alt: { it: "La fattoria la sera", en: "The farmhouse at night" } },
          labelParts: [
            { it: "Offerte", en: "Offers" },
            { it: "Solo prenotando sul sito", en: "Booking direct only" },
          ],
          titleLines: [
            { it: "Più resti,", en: "Stay longer," },
            { it: "più risparmi.", en: "save more." },
          ],
          intro: {
            it: "Sul nostro sito trovate sempre la tariffa e le condizioni più vantaggiose.",
            en: "Our website always has the best rate and conditions.",
          },
          cta: { label: { it: "L'offerta", en: "The offer" }, href: "#tre-notti" },
          pillars: [
            { it: "Colazione inclusa", en: "Breakfast included" },
            { it: "Codice OFF267", en: "Code OFF267" },
          ],
        },
        {
          type: "feature",
          id: "tre-notti",
          image: { src: "stays/camera-deluxe-02.webp", alt: { it: "Una camera del Casone", en: "A room at Il Casone" } },
          kicker: { it: "Tre notti", en: "Three nights" },
          title: { it: "267 € tutto incluso, colazione compresa.", en: "€267 all inclusive, breakfast included." },
          text: {
            it: "Una fuga completa a un prezzo piccolo piccolo. Per prenotarla, indicate il codice OFF267.",
            en: "A complete getaway at a very small price. To book it, quote code OFF267.",
          },
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/hero.webp", alt: { it: "La fattoria", en: "The farmhouse" } },
          kicker: { it: "Prenota l'offerta", en: "Book the offer" },
          title: { it: "Domande sull'offerta?", en: "Questions about the offer?" },
          text: {
            it: "Scriveteci con le date: vi confermiamo la disponibilità.",
            en: "Write to us with your dates: we'll confirm availability.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "dove-siamo",
      title: { it: "Dove siamo", en: "Location" },
      description: {
        it: "Come arrivare al B&B Fattoria Il Casone, a tre minuti da Monteriggioni: uscita Monteriggioni della Firenze-Siena, direzione Strove.",
        en: "How to reach B&B Fattoria Il Casone, three minutes from Monteriggioni: Monteriggioni exit of the Florence-Siena highway, towards Strove.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/monteriggioni-vigne.webp", alt: { it: "Monteriggioni fra le vigne", en: "Monteriggioni among the vineyards" } },
          labelParts: [
            { it: "Dove siamo", en: "Location" },
            { it: "Monteriggioni · Siena", en: "Monteriggioni · Siena" },
          ],
          titleLines: [
            { it: "Al centro", en: "At the heart" },
            { it: "della Toscana", en: "of Tuscany" },
          ],
          intro: {
            it: "A tre minuti da Monteriggioni e a breve distanza da Siena, Castellina in Chianti e San Gimignano.",
            en: "Three minutes from Monteriggioni and a short drive from Siena, Castellina in Chianti and San Gimignano.",
          },
          cta: { label: { it: "Come arrivare", en: "How to get here" }, href: "#come-arrivare" },
          pillars: [
            { it: "Superstrada Firenze-Siena", en: "Florence-Siena highway" },
            { it: "Uscita Monteriggioni", en: "Monteriggioni exit" },
          ],
        },
        {
          type: "prose",
          id: "come-arrivare",
          kicker: { it: "In auto", en: "By car" },
          title: { it: "Come arrivare", en: "How to get here" },
          paragraphs: [
            {
              it: "Da tutte le provenienze: superstrada a quattro corsie Firenze-Siena (raccordo RA6), uscita Monteriggioni. Alla rotonda prendete a destra, seguendo l'indicazione Strove - Pian del Casone. Dopo circa un chilometro e mezzo trovate la fattoria.",
              en: "From every direction: take the four-lane Florence-Siena highway (RA6), Monteriggioni exit. At the roundabout turn right, following signs for Strove - Pian del Casone. After about a kilometre and a half you'll find the farmhouse.",
            },
            {
              it: "Dall'autostrada A1: da nord uscita Firenze Impruneta, da sud uscita Valdichiana, poi la Firenze-Siena.",
              en: "From the A1 motorway: from the north take the Firenze Impruneta exit, from the south the Valdichiana exit, then the Florence-Siena highway.",
            },
          ],
          image: { src: "estate/monteriggioni.webp", alt: { it: "Le mura di Monteriggioni", en: "The walls of Monteriggioni" } },
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/villa-sera.webp", alt: { it: "La fattoria la sera", en: "The farmhouse at night" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo al Casone.", en: "We look forward to welcoming you." },
          text: {
            it: "Se vi perdete, chiamateci: vi guidiamo noi.",
            en: "If you get lost, call us: we'll guide you in.",
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
      slug: "matrimoniale-standard",
      name: "Matrimoniale Standard",
      category: { it: "CAMERA DOPPIA", en: "DOUBLE ROOM" },
      size: "—",
      guests: "2",
      layout: { it: "Letto matrimoniale · bagno privato", en: "Double bed · private bathroom" },
      blurb: {
        it: "Semplice e accogliente, con il bagno privato.",
        en: "Simple and welcoming, with a private bathroom.",
      },
      description: {
        it: "Una camera matrimoniale con bagno privato, arredata in stile semplice e confortevole, con il fascino rustico della casa.",
        en: "A double room with private bathroom, furnished in a simple, comfortable style, with all the rustic charm of the house.",
      },
      cover: "stays/matrimoniale-standard-01.webp",
      detail: "stays/matrimoniale-standard-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "standard",
          name: "Matrimoniale Standard",
          guests: "2",
          layout: { it: "Letto matrimoniale · bagno privato", en: "Double bed · private bathroom" },
          text: {
            it: "Camera doppia con bagno privato, aria condizionata, TV e Wi-Fi.",
            en: "Double room with private bathroom, air conditioning, TV and Wi-Fi.",
          },
          images: photos("matrimoniale-standard"),
        },
      ],
    },
    {
      slug: "matrimoniale-superior",
      name: "Matrimoniale Superior",
      category: { it: "CAMERA DOPPIA", en: "DOUBLE ROOM" },
      size: "14 m²",
      guests: "2",
      layout: { it: "Primo piano · bagno privato", en: "First floor · private bathroom" },
      blurb: {
        it: "Al primo piano, raccolta e luminosa.",
        en: "On the first floor, cosy and bright.",
      },
      description: {
        it: "Camera matrimoniale di 14 metri quadri al primo piano, con bagno privato e kit cortesia.",
        en: "A 14 m² double room on the first floor, with private bathroom and toiletries.",
      },
      cover: "stays/matrimoniale-superior-01.webp",
      detail: "stays/matrimoniale-superior-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "superior",
          name: "Matrimoniale Superior",
          guests: "2",
          layout: { it: "14 m² · primo piano", en: "14 m² · first floor" },
          text: {
            it: "Camera doppia al primo piano con bagno privato, aria condizionata, TV e Wi-Fi.",
            en: "First-floor double room with private bathroom, air conditioning, TV and Wi-Fi.",
          },
          images: photos("matrimoniale-superior"),
        },
      ],
    },
    {
      slug: "camera-deluxe",
      name: "Camera Deluxe",
      category: { it: "INGRESSO INDIPENDENTE", en: "PRIVATE ENTRANCE" },
      size: "45 m²",
      guests: "2",
      layout: { it: "Piano terra · ingresso indipendente", en: "Ground floor · private entrance" },
      blurb: {
        it: "La più grande: 45 metri quadri al piano terra, con ingresso tutto suo.",
        en: "The largest: 45 m² on the ground floor, with its own entrance.",
      },
      description: {
        it: "Camera matrimoniale di 45 metri quadri al piano terra, con ingresso indipendente, letto matrimoniale, bagno privato e kit cortesia.",
        en: "A 45 m² double room on the ground floor, with private entrance, double bed, private bathroom and toiletries.",
      },
      cover: "stays/camera-deluxe-01.webp",
      detail: "stays/camera-deluxe-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "deluxe",
          name: "Camera Deluxe",
          guests: "2",
          layout: { it: "45 m² · piano terra", en: "45 m² · ground floor" },
          text: {
            it: "Ingresso indipendente, letto matrimoniale, bagno privato, aria condizionata, TV e Wi-Fi.",
            en: "Private entrance, double bed, private bathroom, air conditioning, TV and Wi-Fi.",
          },
          images: photos("camera-deluxe"),
        },
      ],
    },
    {
      slug: "tripla-deluxe",
      name: "Tripla Deluxe",
      category: { it: "PER TRE", en: "FOR THREE" },
      size: "23 m²",
      guests: "3",
      layout: { it: "Primo piano · matrimoniale e singola", en: "First floor · double and single" },
      blurb: {
        it: "Due ambienti per tre: una matrimoniale e una singola.",
        en: "Two rooms for three: a double and a single.",
      },
      description: {
        it: "Camera tripla di 23 metri quadri al primo piano: una camera matrimoniale (o due letti singoli su richiesta), una camera singola e il bagno privato con asciugacapelli e kit cortesia.",
        en: "A 23 m² triple on the first floor: a double bedroom (or two singles on request), a single bedroom and a private bathroom with hairdryer and toiletries.",
      },
      cover: "stays/tripla-deluxe-01.webp",
      detail: "stays/tripla-deluxe-02.webp",
      gallery: [],
      amenities: ROOM_AMENITIES,
      units: [
        {
          slug: "tripla",
          name: "Tripla Deluxe",
          guests: "3",
          layout: { it: "23 m² · primo piano", en: "23 m² · first floor" },
          text: {
            it: "Matrimoniale (o due singoli) più una singola, bagno privato, aria condizionata, TV e Wi-Fi.",
            en: "Double (or two singles) plus a single, private bathroom, air conditioning, TV and Wi-Fi.",
          },
          images: photos("tripla-deluxe"),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutte le camere", en: "All rooms" },
    kicker: { it: "La vostra camera al Casone", en: "Your room at Il Casone" },
    sizeLabel: { it: "Superficie", en: "Size" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "La camera", en: "The room" },
    unitsLabel: { it: "La camera", en: "The room" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni sulla camera {name} del B&B Fattoria Il Casone.",
      en: "Hello, I'd like some information about the {name} room at B&B Fattoria Il Casone.",
    },
    amenitiesLabel: { it: "In tutte le camere", en: "In every room" },
    ctaTitle: { it: "Qualche notte nella campagna senese.", en: "A few nights in the Sienese countryside." },
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

  footer: { copyright: "© 2026 Fattoria Il Casone" },

  legalPages: defaultLegalPages({
    name: "Fattoria Il Casone",
    address: "Strada di Gabbricce 25/a, 53035 Monteriggioni (SI)",
    email: "fattoriailcasone@hotmail.com",
  }),
};

export default site;
