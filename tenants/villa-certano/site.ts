/**
 * BORGO VILLA CERTANO
 * ===================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Lornano,
 * con i contenuti pubblici di borgovillacertano.com (pagine di villa, case,
 * giardini, esperienze, contatti e foto). Prezzi e orari delle esperienze
 * vengono dalle pagine del sito; vanno fatti confermare al cliente.
 *
 *   Dormire ▾  /villa-certano /roseto /poggiolo /tinaia /querciolaia
 *              /granaino /scuderia /stallina
 *   Il borgo /borgo · I giardini /giardini · Esperienze /esperienze
 *   Territorio /territorio · Prenota → Xenion
 *
 * PRENOTAZIONE. Il sito usa il motore Xenion
 * (my.xenion.it/borgovillacertano). Non risulta un collegamento diretto al
 * singolo alloggio: tutti i "Prenota" portano alla pagina di prenotazione.
 *
 * NOTE DA VERIFICARE CON IL CLIENTE
 * - CIN non pubblicato sul sito: da aggiungere in `brand.cin`.
 * - Il sito dice "meno di 5 km da Siena" e "15 minuti"; le altre distanze
 *   sono stradali indicative, calcolate da noi.
 * - Capienza dell'appartamento in villa (3 camere: due matrimoniali e una
 *   singola) e di Tinaia ("2 o 5 persone") ricavate dalle descrizioni.
 * - Costi: animali 20 € a soggiorno (non in villa); lavaggio biancheria 15 €
 *   a carico; lezioni di yoga e tour guidati con i prezzi delle pagine del
 *   sito, di cui il cliente indica l'anno (2025/2026) in modo incoerente.
 * - Nessuna recensione: il sito non ne pubblica con autore.
 */

import type { Localized, SiteConfig } from "../../src/config/types";

const BOOKING = "https://my.xenion.it/borgovillacertano/paginaprenotazione?idstructure=2&lang=en";

/** Le foto di un alloggio: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const PARKING: Localized = { it: "Parcheggio gratuito nella tenuta", en: "Free parking on the estate" };
const KITCHEN: Localized = { it: "Cucina attrezzata", en: "Equipped kitchen" };
const KITCHENETTE: Localized = { it: "Angolo cottura", en: "Kitchenette" };
const WIFI: Localized = { it: "Wi-Fi gratuito", en: "Free Wi-Fi" };
const PARK: Localized = { it: "Parco e giardini a disposizione", en: "Park and gardens for guests" };
const LINENS: Localized = { it: "Biancheria inclusa", en: "Linens included" };
const WINE: Localized = { it: "Una bottiglia di Chianti biologico in omaggio", en: "A bottle of organic Chianti as a gift" };
const AC: Localized = { it: "Aria condizionata", en: "Air conditioning" };
const PETS: Localized = { it: "Animali ammessi (20 € a soggiorno)", en: "Pets welcome (€20 per stay)" };
const WASHER: Localized = { it: "Lavatrice", en: "Washing machine" };
const FIREPLACE: Localized = { it: "Camino", en: "Fireplace" };
const TERRACE: Localized = { it: "Terrazza giardino privata", en: "Private garden terrace" };

const site: SiteConfig = {
  brand: {
    id: "villa-certano",
    prefix: "Borgo",
    name: "Villa Certano",
    logo: "logo.svg",
  },

  contact: {
    /* Il cellulare della proprietaria (Annalisa) è quello di WhatsApp; la
       reception (Graciela) compare come secondo numero. */
    phone: "393398327066",
    phoneDisplay: "+39 339 8327066",
    phoneAlt: { number: "393477457529", display: "+39 347 7457529" },
    email: "info@borgovillacertano.com",
    address: ["Strada di Certano 24", "53100 Siena (SI)"],
    vat: "01377540529",
    coordinates: { lat: 43.2948462, lng: 11.2869893 },
    social: [{ label: "Instagram", href: "https://www.instagram.com/borgovillacertano/" }],
  },

  seo: {
    domain: "https://borgovillacertano.com",
    title: {
      it: "Borgo Villa Certano | Villa storica e case di campagna a Siena",
      en: "Borgo Villa Certano | Historic villa and country houses near Siena",
    },
    description: {
      it: "Una villa neoclassica con sale affrescate e sette case di campagna fra vigne e ulivi, a meno di 5 km da Siena.",
      en: "A neoclassical villa with frescoed halls and seven country houses among vines and olive trees, less than 5 km from Siena.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Dormire", en: "Stay" },
      children: [
        { href: "/villa-certano", label: { it: "Appartamento in villa", en: "Villa apartment" } },
        { href: "/roseto", label: { it: "Roseto", en: "Roseto" } },
        { href: "/poggiolo", label: { it: "Poggiolo", en: "Poggiolo" } },
        { href: "/tinaia", label: { it: "Tinaia", en: "Tinaia" } },
        { href: "/querciolaia", label: { it: "Querciolaia e Lecceto", en: "Querciolaia & Lecceto" } },
        { href: "/granaino", label: { it: "Granaino", en: "Granaino" } },
        { href: "/scuderia", label: { it: "Scuderia", en: "Scuderia" } },
        { href: "/stallina", label: { it: "Stallina", en: "Stallina" } },
      ],
    },
    { page: "borgo", label: { it: "Il borgo", en: "The hamlet" } },
    { page: "giardini", label: { it: "I giardini", en: "The gardens" } },
    { page: "esperienze", label: { it: "Esperienze", en: "Experiences" } },
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
          it: "La facciata di Villa Certano con la torre dell'orologio",
          en: "The facade of Villa Certano with its clock tower",
        },
      },
      labelParts: [
        { it: "Siena", en: "Siena" },
        { it: "Colline di Certano", en: "Certano hills" },
      ],
      titleLines: [
        { it: "Una villa del Quattrocento,", en: "A villa with fifteenth-century roots," },
        { it: "a un passo da Siena.", en: "a stone's throw from Siena." },
      ],
      intro: {
        it: "Sale affrescate, un giardino all'italiana e sette case di campagna fra vigne e ulivi. Siena è a meno di cinque chilometri.",
        en: "Frescoed halls, an Italian garden and seven country houses among vines and olive groves. Siena is less than five kilometres away.",
      },
      cta: {
        label: { it: "Scopri dove dormire", en: "See where to stay" },
        href: "#alloggi",
      },
      pillars: [
        { it: "Sette case · fino a 26 ospiti", en: "Seven houses · up to 26 guests" },
        { it: "Siena 5 km", en: "Siena 5 km" },
        { it: "Chianti biologico", en: "Organic Chianti" },
      ],
    },

    {
      type: "story",
      id: "borgo",
      number: "7",
      numberLabel: { it: "CASE DI CAMPAGNA", en: "COUNTRY HOUSES" },
      ghost: "CERTANO",
      titleLines: [
        { it: "Un borgo intero", en: "A whole hamlet" },
        { it: "sulla collina di", en: "on the hill of" },
      ],
      titleEmphasis: { it: "Costalpino.", en: "Costalpino." },
      mainImage: {
        src: "estate/vigne.webp",
        alt: { it: "I filari della tenuta di Certano", en: "The Certano vineyard rows" },
        caption: {
          it: "Vigne, ulivi e frutteti scendono fino alla valle",
          en: "Vines, olive trees and orchards run down to the valley",
        },
      },
      aerialImage: {
        src: "estate/villa-aerea.webp",
        alt: { it: "La villa vista dall'alto, con il giardino", en: "The villa from above, with its garden" },
        badge: "43°17′ N · 11°17′ E",
      },
      manifesto: {
        label: { it: "STORIA E VITA IN CAMPAGNA", en: "HISTORY AND COUNTRY LIFE" },
        text: {
          it: "Già in epoca longobarda qui sorgeva un piccolo villaggio attorno alla chiesa protoromanica di San Michele Arcangelo, che esiste ancora. Nel Quattrocento nelle case del borgo abitò il pittore Lorenzo di Pietro, detto il Vecchietta. La tenuta comprende la villa neoclassica con il giardino pensile e la limonaia, le case dei contadini, la cantina scavata nell'arenaria e un parco di cedri secolari. Vigne e olivi producono Chianti DOCG biologico, olio e vinsanto.",
          en: "Already in Lombard times a small village stood here around the proto-Romanesque church of San Michele Arcangelo, which is still there. In the 15th century the painter Lorenzo di Pietro, known as Il Vecchietta, lived in the hamlet's houses. The estate includes the neoclassical villa with its hanging garden and lemon house, the farmhands' houses, the cellar dug into sandstone and a park of centuries-old cedars. Vines and olive trees produce organic Chianti DOCG, olive oil and vin santo.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "alloggi",
      kicker: { it: "Dormire a Certano", en: "Stay at Certano" },
      title: {
        it: "Otto alloggi, tutti diversi.",
        en: "Eight places to stay, each different.",
      },
      text: {
        it: "Dall'appartamento nella villa al monolocale sotto il glicine: ognuno ha la sua cucina e l'accesso al parco e ai giardini. Si prenota uno solo o tutto il borgo, fino a 26 ospiti.",
        en: "From the apartment in the villa to the studio under the wisteria: each has its own kitchen and access to the park and gardens. Book one, or the whole hamlet for up to 26 guests.",
      },
      tabs: [
        {
          label: { it: "Nella villa", en: "In the villa" },
          stays: ["villa-certano", "roseto", "poggiolo", "tinaia", "querciolaia", "granaino"],
        },
        {
          label: { it: "Nelle ex scuderie", en: "In the old stables" },
          stays: ["scuderia", "stallina"],
        },
      ],
      linkLabel: DISCOVER,
    },

    {
      type: "feature",
      id: "giardino",
      image: {
        src: "estate/giardino-pensile.webp",
        alt: { it: "Il giardino pensile all'italiana con le rose", en: "The Italian hanging garden with roses" },
      },
      kicker: { it: "Il giardino pensile", en: "The hanging garden" },
      title: {
        it: "Siepi di bosso, rose e un panorama a perdita d'occhio.",
        en: "Box hedges, roses and a view that never ends.",
      },
      text: {
        it: "Si raggiunge dalla piazza della chiesa passando per la limonaia. Panchine d'inizio Novecento, aiuole geometriche e la stessa vista della villa: dalle Colline Metallifere al Monte Amiata.",
        en: "Reached from the church square through the lemon house. Early-twentieth-century benches, geometric flowerbeds and the same view as the villa: from the Colline Metallifere to Monte Amiata.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "A CERTANO", en: "AT CERTANO" },
      title: {
        it: "Un soggiorno, tante giornate diverse.",
        en: "One stay, many different days.",
      },
      intro: {
        it: "Su richiesta, in tenuta o nei dintorni.",
        en: "On request, on the estate or nearby.",
      },
      marquee: {
        it: "CUCINA · YOGA · TOUR · CANTINA · GIARDINI · ",
        en: "COOKING · YOGA · TOURS · CELLAR · GARDENS · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Tutte le esperienze", en: "All experiences" },
      ctaHref: "/esperienze",
      items: [
        {
          title: "Lezioni di cucina",
          word: { it: "CUCINA", en: "KITCHEN" },
          meta: { it: "Con la chef Katy · circa 3 ore", en: "With chef Katy · about 3 hours" },
          text: {
            it: "Pasta fresca tirata a mattarello nell'antica cucina della villa, con due o tre sughi, poi tutti a tavola.",
            en: "Fresh pasta rolled by hand in the villa's ancient kitchen, with two or three sauces, then lunch together.",
          },
          image: "experiences/cucina-antica.webp",
        },
        {
          title: "Hatha yoga",
          word: { it: "YOGA", en: "YOGA" },
          meta: { it: "Da maggio a settembre", en: "May to September" },
          text: {
            it: "Lezioni private o di gruppo con una maestra EFOA, nella sala della tenuta o all'aperto, in mezzo al verde.",
            en: "Private or group lessons with an EFOA master teacher, in the estate's hall or outdoors among the greenery.",
          },
          image: "experiences/yoga.webp",
        },
        {
          title: "Tour guidati",
          word: { it: "TOUR", en: "TOURS" },
          meta: { it: "Tutto l'anno · su prenotazione", en: "All year · by reservation" },
          text: {
            it: "Siena, San Gimignano, Pienza, Montalcino e la Val d'Orcia con una guida nazionale abilitata, in italiano, inglese o tedesco.",
            en: "Siena, San Gimignano, Pienza, Montalcino and the Val d'Orcia with an authorised national guide, in Italian, English or German.",
          },
          image: "experiences/sala-affrescata.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "La tenuta, i giardini e la Toscana intorno.",
        en: "The estate, the gardens and the Tuscany around you.",
      },
      items: [
        {
          meta: { it: "Chiesa · cantina · sale affrescate", en: "Church · cellar · frescoed halls" },
          title: { it: "Il borgo", en: "The hamlet" },
          text: {
            it: "Le sale affrescate al piano terra, la chiesa romanica, la cantina scavata nell'arenaria e il negozio con vino e olio di casa.",
            en: "The frescoed ground-floor halls, the Romanesque church, the sandstone cellar and the shop with the estate's wine and oil.",
          },
          image: { src: "experiences/sala-affrescata-3.webp", alt: { it: "Una sala affrescata della villa", en: "A frescoed hall in the villa" } },
          link: { label: DISCOVER, href: "/borgo" },
        },
        {
          meta: { it: "Un parco di cedri secolari", en: "A park of centuries-old cedars" },
          title: { it: "I giardini", en: "The gardens" },
          text: {
            it: "Giardino pensile, frutteto, orto delle erbe, bosco di lecci e il grande cedro del Libano: angoli diversi per ogni ora.",
            en: "Hanging garden, orchard, herb garden, holm oak grove and the great Lebanon cedar: a different corner for every hour.",
          },
          image: { src: "estate/cedro.webp", alt: { it: "Il grande cedro del Libano nel parco", en: "The great Lebanon cedar in the park" } },
          link: { label: DISCOVER, href: "/giardini" },
        },
        {
          meta: { it: "Siena · Crete Senesi · Val d'Orcia", en: "Siena · Crete Senesi · Val d'Orcia" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Siena a cinque chilometri, le Crete Senesi all'orizzonte, San Gimignano e la Val d'Orcia in una giornata.",
            en: "Siena five kilometres away, the Crete Senesi on the horizon, San Gimignano and the Val d'Orcia in a day.",
          },
          image: { src: "estate/panorama.webp", alt: { it: "Il panorama dalla collina di Certano", en: "The view from the Certano hill" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Alle porte di Siena", en: "At the gates of Siena" },
      title: {
        it: "Siena da una parte, la Val d'Orcia dall'altra.",
        en: "Siena on one side, the Val d'Orcia on the other.",
      },
      text: {
        it: "Siena a pochi minuti, le Crete Senesi e San Galgano a mezz'ora, San Gimignano e Montalcino entro l'ora.",
        en: "Siena a few minutes away, the Crete Senesi and San Galgano half an hour, San Gimignano and Montalcino within the hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Borgo Villa Certano",
        en: "Stylised map of distances from Borgo Villa Certano",
      },
      gridLabels: { x: "43°17′ N", y: "11°17′ E" },
      homeLabel: { lines: ["Borgo Villa", "Certano"], sub: "Siena" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 30, label: "30 km" },
        { km: 60, label: "60 km" },
      ],
      legend: {
        home: "Certano",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "5 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "25 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "sangalgano", name: { it: "San Galgano", en: "San Galgano" }, distance: "35 km", coordinates: { lat: 43.1484, lng: 11.15 } },
        { id: "crete", name: { it: "Asciano e Crete Senesi", en: "Asciano and Crete Senesi" }, distance: "35 km", coordinates: { lat: 43.2327, lng: 11.5646 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "50 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "montalcino", name: { it: "Montalcino", en: "Montalcino" }, distance: "55 km", coordinates: { lat: 43.0577, lng: 11.4897 } },
        { id: "pienza", name: { it: "Pienza", en: "Pienza" }, distance: "65 km", coordinates: { lat: 43.0766, lng: 11.679 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/villa-giardino.webp",
        alt: { it: "La villa vista dal giardino fra i cipressi", en: "The villa seen from the garden among the cypresses" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Certano.", en: "We look forward to welcoming you." },
      text: {
        it: "Prezzi e disponibilità sono online. Per gruppi, ritiri, seminari o qualsiasi domanda scriveteci: vi risponde Annalisa, di persona.",
        en: "Prices and availability are online. For groups, retreats, seminars or any question, write to us: Annalisa will reply in person.",
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
        it: "La villa di Certano, le sale affrescate, la chiesa romanica, la cantina scavata nell'arenaria e il negozio della tenuta.",
        en: "Villa Certano, the frescoed halls, the Romanesque church, the sandstone cellar and the estate shop.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "estate/villa-facciata.webp",
            alt: { it: "Villa Certano fra i cipressi", en: "Villa Certano among the cypresses" },
          },
          labelParts: [
            { it: "Il borgo", en: "The hamlet" },
            { it: "In cima alla collina", en: "On the hilltop" },
          ],
          titleLines: [
            { it: "In fondo al viale", en: "At the end of the avenue" },
            { it: "di cipressi", en: "of cypresses" },
          ],
          intro: {
            it: "La villa sta in cima alla collina, in posizione panoramica. Alle spalle la chiesa, il parco, la cantina: tutto a pochi passi.",
            en: "The villa stands on the hilltop with a sweeping view. Behind it the church, the park and the cellar: everything within a few steps.",
          },
          cta: { label: { it: "In numeri", en: "In numbers" }, href: "#numeri" },
          pillars: [
            { it: "Chiesa di San Michele", en: "San Michele church" },
            { it: "Cantina nell'arenaria", en: "Sandstone cellar" },
          ],
        },
        {
          type: "facts",
          id: "numeri",
          kicker: { it: "La tenuta", en: "The estate" },
          title: { it: "In breve", en: "At a glance" },
          image: { src: "estate/villa-aerea.webp", alt: { it: "La tenuta vista dall'alto", en: "The estate from above" } },
          items: [
            { label: { it: "Case di campagna", en: "Country houses" }, value: { it: "7", en: "7" }, note: { it: "Fino a 26 ospiti in tutto", en: "Up to 26 guests in all" } },
            { label: { it: "Da Siena", en: "From Siena" }, value: { it: "5 km", en: "5 km" }, note: { it: "Costalpino ha tutti i servizi", en: "Costalpino has all the services" } },
            { label: { it: "Aeroporto di Firenze", en: "Florence airport" }, value: { it: "80 km", en: "80 km" } },
            { label: { it: "Check-in", en: "Check-in" }, value: { it: "17:00 – 19:00", en: "5 – 7 pm" }, note: { it: "Alla reception", en: "At reception" } },
            { label: { it: "Check-out", en: "Check-out" }, value: { it: "Entro le 10:00", en: "By 10 am" } },
            { label: { it: "Parcheggio", en: "Parking" }, value: { it: "Gratuito", en: "Free" }, note: { it: "Nella proprietà, fino a 5 posti", en: "On the property, up to 5 places" } },
          ],
        },
        {
          type: "chapters",
          id: "luoghi",
          kicker: { it: "Il percorso", en: "The walk" },
          title: { it: "Dalla reception alla cantina", en: "From reception to the cellar" },
          items: [
            {
              word: { it: "Sale", en: "Halls" },
              kicker: { it: "Piano terra della villa", en: "Villa ground floor" },
              title: { it: "Le sale affrescate", en: "The frescoed halls" },
              text: {
                it: "Due sale affrescate, la grande cucina con il camino e l'antica cantina occupano il piano terra della villa. Si visitano con il tour della tenuta, che sale anche sulla torre dell'orologio per il panorama più bello.",
                en: "Two frescoed halls, the large kitchen with its fireplace and the old cellar fill the villa's ground floor. They are part of the estate tour, which also climbs the clock tower for the finest view.",
              },
              image: { src: "experiences/sala-affrescata-2.webp", alt: { it: "Sala affrescata con pavimento a esagoni", en: "Frescoed hall with hexagonal floor" } },
            },
            {
              word: { it: "Chiesa", en: "Church" },
              kicker: { it: "San Michele Arcangelo", en: "San Michele Arcangelo" },
              title: { it: "La chiesa protoromanica", en: "The proto-Romanesque church" },
              text: {
                it: "Davanti alla villa, nel cortile a destra del viale, c'è la chiesa attorno a cui nacque il villaggio in epoca longobarda. Proseguendo a piedi si arriva alla bella abside romanica.",
                en: "In front of the villa, in the courtyard to the right of the avenue, stands the church around which the village grew in Lombard times. Walking on you reach the lovely Romanesque apse.",
              },
              image: { src: "estate/chiesa.webp", alt: { it: "La facciata della chiesa di San Michele", en: "The facade of San Michele church" } },
            },
            {
              word: { it: "Cantina", en: "Cellar" },
              kicker: { it: "Vendemmia a metà settembre", en: "Harvest in mid September" },
              title: { it: "La tinaia e la cantina", en: "The vat house and cellar" },
              text: {
                it: "In autunno l'uva arriva qui a fermentare e diventa Chianti DOCG. Durante la vendemmia, di solito da metà settembre a metà ottobre, si vedono i primi passaggi: dalla raccolta in vigna ai tini.",
                en: "In autumn the grapes come here to ferment and become Chianti DOCG. During the harvest, usually mid September to mid October, you can see the first steps: from picking in the vineyard to the vats.",
              },
              image: { src: "experiences/cantina.webp", alt: { it: "La cantina scavata nell'arenaria", en: "The sandstone cellar" } },
            },
            {
              word: { it: "Negozio", en: "Shop" },
              kicker: { it: "Accanto alla reception", en: "Next to reception" },
              title: { it: "Vino, olio e la Buca delle Fate", en: "Wine, oil and La Buca delle Fate" },
              text: {
                it: "Alla reception si comprano il vino, l'olio e il vinsanto di Certano. Lì accanto, il piccolo negozio di artigianato La Buca delle Fate.",
                en: "At reception you can buy Certano's wine, olive oil and vin santo. Next door, the little craft shop La Buca delle Fate.",
              },
              image: { src: "experiences/buca-delle-fate.webp", alt: { it: "Il negozio La Buca delle Fate", en: "The La Buca delle Fate shop" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "experiences/borgo-edificio.webp", alt: { it: "La villa e la balaustra del giardino", en: "The villa and the garden balustrade" } },
          kicker: { it: "Visite alla tenuta", en: "Estate visits" },
          title: { it: "Venite a vederla.", en: "Come and see it." },
          text: {
            it: "Il tour si prenota alla reception: sale affrescate, chiesa, cantina e torre dell'orologio.",
            en: "The tour is booked at reception: frescoed halls, church, cellar and clock tower.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "giardini",
      title: { it: "I giardini", en: "The gardens" },
      description: {
        it: "Il giardino pensile all'italiana, il frutteto, l'orto delle erbe, il bosco di lecci e il parco di cedri secolari di Borgo Villa Certano.",
        en: "The Italian hanging garden, the orchard, the herb garden, the holm oak grove and the park of centuries-old cedars at Borgo Villa Certano.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/parterre-aereo.webp", alt: { it: "Il giardino all'italiana visto dall'alto", en: "The Italian garden from above" } },
          labelParts: [
            { it: "I giardini", en: "The gardens" },
            { it: "Parco di Certano", en: "Certano park" },
          ],
          titleLines: [
            { it: "Un angolo diverso", en: "A different corner" },
            { it: "per ogni ora", en: "for every hour" },
          ],
          intro: {
            it: "Lettini, tavoli, salotti all'aperto e un gazebo: il parco attorno alla villa è a disposizione di tutti gli ospiti.",
            en: "Loungers, tables, outdoor sofas and a gazebo: the park around the villa is open to all guests.",
          },
          cta: { label: { it: "Giro dei giardini", en: "Tour of the gardens" }, href: "#angoli" },
          pillars: [
            { it: "Cedri secolari", en: "Centuries-old cedars" },
            { it: "Panorama a sud", en: "View to the south" },
          ],
        },
        {
          type: "chapters",
          id: "angoli",
          kicker: { it: "Gli angoli", en: "The corners" },
          title: { it: "Dove sedersi a Certano", en: "Where to sit at Certano" },
          items: [
            {
              word: { it: "Pensile", en: "Terrace" },
              kicker: { it: "Dalla limonaia", en: "Through the lemon house" },
              title: { it: "Il giardino all'italiana", en: "The Italian garden" },
              text: {
                it: "Siepi geometriche di bosso, fiori e panchine d'inizio Novecento, con lo stesso panorama della villa. Si può prenotare per un rinfresco o una cerimonia.",
                en: "Geometric box hedges, flowers and early-twentieth-century benches, with the same panorama as the villa. It can be booked for refreshments or a ceremony.",
              },
              image: { src: "estate/giardino-pensile.webp", alt: { it: "Il giardino pensile con le rose", en: "The hanging garden with roses" } },
            },
            {
              word: { it: "Cedro", en: "Cedar" },
              kicker: { it: "Accanto alla villa", en: "Beside the villa" },
              title: { it: "Il parco del cedro del Libano", en: "The Lebanon cedar park" },
              text: {
                it: "Un grande cedro secolare, siepi di viburno e oleandro, sdraio e tavoli: il posto giusto per leggere all'ombra.",
                en: "A great centuries-old cedar, viburnum and oleander hedges, deckchairs and tables: the place to read in the shade.",
              },
              image: { src: "estate/cedro.webp", alt: { it: "Il cedro del Libano", en: "The Lebanon cedar" } },
            },
            {
              word: { it: "Frutteto", en: "Orchard" },
              kicker: { it: "A nord della villa", en: "North of the villa" },
              title: { it: "Il prato del frutteto", en: "The orchard lawn" },
              text: {
                it: "Sdraio e tavolini guardano le colline. Alla sera, l'aperitivo con il sole che tramonta dietro la Montagnola.",
                en: "Loungers and small tables face the hills. In the evening, an aperitif as the sun sets behind the Montagnola.",
              },
              image: { src: "estate/relax.webp", alt: { it: "Due ospiti in sdraio nel frutteto", en: "Two guests on loungers in the orchard" } },
            },
            {
              word: { it: "Erbe", en: "Herbs" },
              kicker: { it: "Sulle terrazze", en: "On the terraces" },
              title: { it: "L'orto delle erbe e il gazebo", en: "The herb garden and gazebo" },
              text: {
                it: "Un tempo orto con pollaio e laghetto per le anatre, oggi terrazze con vista sul castello di Belcaro. Di sera, per guardare le stelle girare attorno alla Stella Polare.",
                en: "Once a vegetable garden with a hen house and duck pond, now terraces facing Belcaro castle. At night, a spot to watch the stars turn around the North Star.",
              },
              image: { src: "estate/tavolo-giardino.webp", alt: { it: "Un tavolo sotto il gazebo", en: "A table under the gazebo" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/prato.webp", alt: { it: "Un angolo di prato con tavolo in ferro battuto", en: "A lawn corner with a wrought-iron table" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Certano.", en: "We look forward to welcoming you." },
          text: {
            it: "Per riservare il giardino pensile per un'occasione speciale, scriveteci.",
            en: "To reserve the hanging garden for a special occasion, write to us.",
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
        it: "Lezioni di cucina toscana, hatha yoga, tour guidati nel senese e pranzi nelle sale della villa a Borgo Villa Certano.",
        en: "Tuscan cooking lessons, hatha yoga, guided tours around Siena and lunches in the villa's halls at Borgo Villa Certano.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "experiences/sala-affrescata.webp",
            alt: { it: "La sala affrescata con gli alberi dipinti", en: "The frescoed hall with painted trees" },
          },
          labelParts: [
            { it: "Esperienze", en: "Experiences" },
            { it: "Su richiesta", en: "On request" },
          ],
          titleLines: [
            { it: "Cucina, yoga e tour", en: "Cooking, yoga and tours" },
            { it: "senza lasciare Certano", en: "without leaving Certano" },
          ],
          intro: {
            it: "Si prenotano insieme alla casa o più tardi, anche alla reception, secondo disponibilità. Chi organizza le giornate sono professionisti di fiducia.",
            en: "Book them with your house or later, even at reception, subject to availability. Each day is run by trusted professionals.",
          },
          cta: { label: { it: "Le esperienze", en: "The experiences" }, href: "#proposte" },
          pillars: [
            { it: "Cucina · yoga · tour", en: "Cooking · yoga · tours" },
            { it: "Pranzi in villa", en: "Lunches in the villa" },
          ],
        },
        {
          type: "cards",
          id: "proposte",
          kicker: { it: "Le proposte", en: "The offers" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Prezzi e condizioni sono quelli pubblicati dalla tenuta; per le lezioni di cucina il prezzo dipende dal menù scelto. Prenotate scrivendoci.",
            en: "Prices and terms are those published by the estate; cooking class prices depend on the chosen menu. Book by writing to us.",
          },
          items: [
            {
              meta: { it: "Circa 3 ore · da aprile a ottobre", en: "About 3 hours · April to October" },
              title: { it: "Lezione di cucina toscana", en: "Tuscan cooking lesson" },
              text: {
                it: "Con la chef Katy nell'antica cucina della villa: fettuccine, pappardelle o ravioli fatti a mano, con due o tre sughi, antipasti e dolce. Prezzo in base al menù.",
                en: "With chef Katy in the villa's ancient kitchen: handmade fettuccine, pappardelle or ravioli with two or three sauces, appetizers and dessert. Price depends on the menu.",
              },
              details: [
                { it: "Riservata agli ospiti", en: "For guests only" },
                { it: "Prenotare con due giorni di anticipo", en: "Book two days ahead" },
              ],
              image: { src: "experiences/cucina-antica.webp", alt: { it: "L'antica cucina della villa", en: "The villa's ancient kitchen" } },
            },
            {
              meta: { it: "Su richiesta", en: "On request" },
              title: { it: "Pranzi e cene in villa", en: "Lunches and dinners at the villa" },
              text: {
                it: "Cena di benvenuto nell'alloggio, pranzo nella sala affrescata o nella cantina con pecorino e mieli, pizza nel forno a legna per i gruppi.",
                en: "A welcome dinner in your house, lunch in the frescoed hall or the cellar with pecorino and honeys, wood-fired pizza for groups.",
              },
              details: [
                { it: "Menù da 3 o 4 portate a scelta", en: "3 or 4 course menus to choose from" },
                { it: "Cena nella sala affrescata", en: "Dinner in the frescoed hall" },
              ],
              image: { src: "experiences/sala-affrescata-3.webp", alt: { it: "La sala affrescata apparecchiata", en: "The frescoed hall, set for a meal" } },
            },
            {
              meta: { it: "Da 180 € · da maggio a settembre", en: "From €180 · May to September" },
              title: { it: "Hatha yoga", en: "Hatha yoga" },
              text: {
                it: "Con Antonella Filippone, maestra EFOA: lezione individuale di un'ora, yoga al mattino prima della colazione, giornata intera, respiro, meditazione o yoga nella natura.",
                en: "With Antonella Filippone, EFOA master teacher: one-hour private lesson, morning yoga before breakfast, a full day, breathwork, meditation or yoga in nature.",
              },
              details: [
                { it: "Individuale: 180 € per 1 o 2 persone", en: "Private: €180 for 1 or 2 people" },
                { it: "Giornata intera: 370 € fino a 3 persone", en: "Full day: €370 up to 3 people" },
              ],
              image: { src: "experiences/yoga.webp", alt: { it: "La sala yoga con i tappetini", en: "The yoga hall with mats" } },
            },
            {
              meta: { it: "Tutto l'anno · tour a prezzo fisso", en: "All year · fixed-price tours" },
              title: { it: "Tour guidati nel senese", en: "Guided tours around Siena" },
              text: {
                it: "Con Pia Maria Selenka, guida nazionale abilitata: Siena, San Gimignano, Pienza, San Galgano, Monteriggioni, Montepulciano, Montalcino. In italiano, inglese e tedesco.",
                en: "With Pia Maria Selenka, authorised national guide: Siena, San Gimignano, Pienza, San Galgano, Monteriggioni, Montepulciano, Montalcino. In Italian, English and German.",
              },
              details: [
                { it: "Mezza giornata 270 € · giornata intera 500 €", en: "Half day €270 · full day €500" },
                { it: "Prezzi a tour, non a persona", en: "Prices per tour, not per person" },
              ],
              image: { src: "experiences/sala-affrescata-4.webp", alt: { it: "La sala affrescata con soffitto a cassettoni", en: "The frescoed hall with coffered ceiling" } },
            },
            {
              meta: { it: "Con il tour della tenuta", en: "With the estate tour" },
              title: { it: "Visita della cantina", en: "Cellar visit" },
              text: {
                it: "La scalinata di mattoni, la cantina scavata nell'arenaria e, in autunno, la tinaia. Degustazione dei prodotti di Certano: olio extravergine e Chianti DOCG.",
                en: "The brick stairway, the sandstone cellar and, in autumn, the vat house. A tasting of Certano's products: extra virgin olive oil and Chianti DOCG.",
              },
              details: [{ it: "Si prenota alla reception", en: "Book at reception" }],
              image: { src: "experiences/cantina-botti.webp", alt: { it: "Le botti nella cantina", en: "Casks in the cellar" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "experiences/degustazione.webp", alt: { it: "Una bottiglia aperta sul banco della cantina", en: "An open bottle on the cellar bench" } },
          kicker: { it: "Prenota un'esperienza", en: "Book an experience" },
          title: { it: "Scriveteci cosa vi piacerebbe fare.", en: "Tell us what you'd like to do." },
          text: {
            it: "Vi rispondiamo con date e orari disponibili; le lezioni si pagano direttamente a chi le tiene.",
            en: "We'll reply with available dates and times; lessons are paid directly to the teacher.",
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
        it: "Cosa vedere intorno a Borgo Villa Certano: Siena, le Crete Senesi, San Galgano, San Gimignano, Montalcino e la Val d'Orcia.",
        en: "What to see around Borgo Villa Certano: Siena, the Crete Senesi, San Galgano, San Gimignano, Montalcino and the Val d'Orcia.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/panorama.webp", alt: { it: "Il panorama dalla collina di Certano", en: "The view from the Certano hill" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Siena · Val d'Orcia", en: "Siena · Val d'Orcia" },
          ],
          titleLines: [
            { it: "Dalla collina si vede", en: "From the hill you can see" },
            { it: "mezza Toscana", en: "half of Tuscany" },
          ],
          intro: {
            it: "A sud il Pian dei Mori e le Colline Metallifere, a est le Crete Senesi, lontano il Monte Amiata. Siena sta a quattro chilometri in linea d'aria.",
            en: "To the south the Pian dei Mori and the Colline Metallifere, to the east the Crete Senesi, far off Monte Amiata. Siena is four kilometres as the crow flies.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Siena 5 km", en: "Siena 5 km" },
            { it: "Costalpino 2 km", en: "Costalpino 2 km" },
          ],
        },
        {
          type: "chapters",
          id: "dintorni",
          kicker: { it: "Dintorni", en: "Nearby" },
          title: { it: "Cosa vedere", en: "What to see" },
          items: [
            {
              word: { it: "Siena", en: "Siena" },
              kicker: { it: "A meno di 5 km", en: "Less than 5 km away" },
              title: { it: "Il Duomo, il Campo, il Buongoverno", en: "The Cathedral, the Campo, the Good Government" },
              text: {
                it: "Il pavimento del Duomo, l'affresco del Buongoverno in Palazzo Pubblico, la Maestà al museo dell'Opera: Siena si raggiunge in pochi minuti, anche per una cena.",
                en: "The Cathedral floor, the Good Government fresco in the Town Hall, the Maestà in the Opera museum: Siena is only minutes away, even for dinner.",
              },
            },
            {
              word: { it: "Costalpino", en: "Costalpino" },
              kicker: { it: "A 2 km", en: "2 km away" },
              title: { it: "I servizi a portata di mano", en: "Services close by" },
              text: {
                it: "Bar, edicola, posta, supermercato, pasticceria, farmacia, tabaccheria, bancomat: tutto a Costalpino, un chilometro dopo l'incrocio per Certano.",
                en: "Café, newsagent, post office, supermarket, pastry shop, pharmacy, tobacconist, ATM: all in Costalpino, a kilometre past the Certano turnoff.",
              },
            },
            {
              word: { it: "Crete", en: "Crete" },
              kicker: { it: "A mezz'ora", en: "Half an hour away" },
              title: { it: "Crete Senesi e San Galgano", en: "Crete Senesi and San Galgano" },
              text: {
                it: "Colline d'argilla con cipressi isolati che cominciano proprio a Costalpino. Verso ovest l'abbazia di San Galgano e la spada nella roccia.",
                en: "Clay hills with lone cypresses that begin right at Costalpino. To the west, San Galgano Abbey and the sword in the stone.",
              },
            },
            {
              word: { it: "Val d'Orcia", en: "Val d'Orcia" },
              kicker: { it: "In una giornata", en: "In a day" },
              title: { it: "Montalcino, Pienza, Montepulciano", en: "Montalcino, Pienza, Montepulciano" },
              text: {
                it: "Degustazione di Brunello, passeggiata a Pienza e Vino Nobile a Montepulciano: la giornata classica, con partenza da Certano alle nove.",
                en: "A Brunello tasting, a stroll in Pienza and Vino Nobile in Montepulciano: the classic day, leaving Certano at nine.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/borgo-aereo.webp", alt: { it: "Il borgo di Certano fra vigne e ulivi", en: "The Certano hamlet among vines and olive trees" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Certano.", en: "We look forward to welcoming you." },
          text: {
            it: "Vi aiutiamo volentieri a scegliere itinerari, ristoranti e cantine da visitare.",
            en: "We're happy to help you choose itineraries, restaurants and wineries to visit.",
          },
          whatsappLabel: WHATSAPP_LABEL,
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
      slug: "villa-certano",
      name: "Villa Certano",
      category: { it: "APPARTAMENTO IN VILLA", en: "APARTMENT IN THE VILLA" },
      size: "3",
      guests: "5",
      layout: { it: "3 camere con bagno · terrazza giardino", en: "3 bedrooms en suite · garden terrace" },
      blurb: {
        it: "Il primo piano della villa storica: tre camere con bagno e un giardino pensile solo per voi.",
        en: "The first floor of the historic villa: three en-suite bedrooms and a hanging garden just for you.",
      },
      description: {
        it: "L'appartamento occupa il primo piano della villa, con interni ampi ed eleganti. Tre camere, tutte con bagno privato: due matrimoniali e una con letto singolo. Una grande cucina attrezzata con tavolo, una sala da pranzo separata e due salotti, uno dei quali apre direttamente sulla terrazza giardino riservata agli ospiti. Due ingressi indipendenti, entrambi con scale. Su richiesta colazioni, pranzi e cene con chef, massaggi, lezioni di cucina e yoga.",
        en: "The apartment fills the villa's first floor, with spacious, elegant interiors. Three bedrooms, all with private bathroom: two doubles and one with a single bed. A large equipped kitchen with dining table, a separate dining room and two sitting rooms, one opening directly onto the private garden terrace reserved for guests. Two independent entrances, both by stairs. On request: breakfasts, lunches and dinners with a chef, massages, cooking lessons and yoga.",
      },
      cover: "stays/villa-certano-01.webp",
      detail: "stays/villa-certano-02.webp",
      gallery: [],
      amenities: [KITCHEN, TERRACE, PARK, PARKING, WIFI],
      units: [
        {
          slug: "appartamento-villa-certano",
          name: "Villa Certano",
          guests: "5",
          layout: { it: "3 camere · 3 bagni", en: "3 bedrooms · 3 bathrooms" },
          text: {
            it: "Primo piano della villa, con salotti, sala da pranzo, cucina e terrazza giardino privata. Animali non ammessi.",
            en: "First floor of the villa, with sitting rooms, dining room, kitchen and private garden terrace. No pets.",
          },
          images: photos("villa-certano", 9),
        },
      ],
    },
    {
      slug: "roseto",
      name: "Roseto",
      category: { it: "CASA PER QUATTRO", en: "HOUSE FOR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "2 camere · bagno e doccia separata", en: "2 bedrooms · bathroom and separate shower" },
      blurb: {
        it: "Al primo piano della villa, con vista sull'eremo di Lecceto e sui cedri.",
        en: "On the villa's first floor, facing the Lecceto hermitage and the cedars.",
      },
      description: {
        it: "Al primo piano della villa, ristrutturato in stile rustico toscano con qualche tocco elegante. Una camera matrimoniale, una con due letti, un soggiorno con angolo cottura e un bagno con bidet e una doccia separata. Dalle finestre si vedono l'eremo di Lecceto, la campagna, il giardino pensile e la piazza della chiesa; al tramonto i cedri secolari si staccano sul cielo.",
        en: "On the villa's first floor, renovated in rustic Tuscan style with a few elegant touches. A double bedroom, a twin room, a living room with kitchenette and a bathroom with bidet and a separate shower. From the windows you see the Lecceto hermitage, the countryside, the hanging garden and the church square; at sunset the centuries-old cedars stand out against the sky.",
      },
      cover: "stays/roseto-01.webp",
      detail: "stays/roseto-02.webp",
      gallery: [],
      amenities: [KITCHENETTE, WASHER, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "roseto",
          name: "Roseto",
          guests: "4",
          layout: { it: "2 camere · 1 bagno", en: "2 bedrooms · 1 bathroom" },
          text: {
            it: "Camera matrimoniale, camera a due letti, soggiorno con angolo cottura, bagno con bidet e doccia separata. Lavatrice in casa.",
            en: "Double bedroom, twin room, living room with kitchenette, bathroom with bidet and separate shower. Washing machine in the house.",
          },
          images: photos("roseto", 9),
        },
      ],
    },
    {
      slug: "poggiolo",
      name: "Poggiolo",
      category: { it: "CASA PER QUATTRO", en: "HOUSE FOR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "2 camere · cucina · bagno", en: "2 bedrooms · kitchen · bathroom" },
      blurb: {
        it: "Al secondo piano, con le finestre sul giardino pensile e le rose.",
        en: "On the second floor, windows onto the hanging garden and its roses.",
      },
      description: {
        it: "Al secondo piano della villa, ristrutturato in stile rustico toscano. Una camera matrimoniale, una a due letti, un soggiorno, una cucina e un bagno. Le finestre guardano il giardino pensile all'italiana con le rose e i limoni.",
        en: "On the villa's second floor, renovated in rustic Tuscan style. A double bedroom, a twin room, a living room, a kitchen and a bathroom. The windows overlook the Italian hanging garden with its roses and lemon trees.",
      },
      cover: "stays/poggiolo-01.webp",
      detail: "stays/poggiolo-02.webp",
      gallery: [],
      amenities: [KITCHEN, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "poggiolo",
          name: "Poggiolo",
          guests: "4",
          layout: { it: "2 camere · 1 bagno", en: "2 bedrooms · 1 bathroom" },
          text: {
            it: "Camera matrimoniale, camera a due letti, soggiorno, cucina, bagno. Secondo piano, senza ascensore.",
            en: "Double bedroom, twin room, living room, kitchen, bathroom. Second floor, no lift.",
          },
          images: photos("poggiolo", 9),
        },
      ],
    },
    {
      slug: "tinaia",
      name: "Tinaia",
      category: { it: "CASA PER DUE O CINQUE", en: "HOUSE FOR TWO TO FIVE" },
      size: "2",
      guests: "5",
      layout: { it: "2 camere · travi a vista · aria condizionata", en: "2 bedrooms · exposed beams · air conditioning" },
      blurb: {
        it: "L'ultimo piano della villa: travi a vista, mobili antichi, vista sull'eremo di Lecceto.",
        en: "The villa's top floor: exposed beams, antique furniture, views of the Lecceto hermitage.",
      },
      description: {
        it: "All'ultimo piano della villa. Le travi a vista e i mobili antichi creano un'atmosfera calda e raccolta. Una camera matrimoniale, una camera con tre letti e aria condizionata, un soggiorno con angolo cottura e un bagno. Dalle finestre l'eremo di Lecceto, la campagna e il parco con i cedri del Libano.",
        en: "On the villa's top floor. Exposed beams and antique furniture make for a warm, cosy atmosphere. A double bedroom, a bedroom with three beds and air conditioning, a living room with kitchenette and a bathroom. The windows look onto the Lecceto hermitage, the countryside and the park with its Lebanon cedars.",
      },
      cover: "stays/tinaia-01.webp",
      detail: "stays/tinaia-02.webp",
      gallery: [],
      amenities: [KITCHENETTE, AC, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "tinaia",
          name: "Tinaia",
          guests: "5",
          layout: { it: "2 camere · 1 bagno", en: "2 bedrooms · 1 bathroom" },
          text: {
            it: "Camera matrimoniale, camera a tre letti con aria condizionata, soggiorno con angolo cottura, bagno. Ultimo piano.",
            en: "Double bedroom, three-bed bedroom with air conditioning, living room with kitchenette, bathroom. Top floor.",
          },
          images: photos("tinaia", 8),
        },
      ],
    },
    {
      slug: "querciolaia",
      name: "Querciolaia e Lecceto",
      category: { it: "CAMERE PER DUE O QUATTRO", en: "ROOMS FOR TWO OR FOUR" },
      size: "2",
      guests: "4",
      layout: { it: "2 camere · 1 bagno condiviso", en: "2 bedrooms · 1 shared bathroom" },
      blurb: {
        it: "Due camere all'ultimo piano della villa: da sole per due, insieme per quattro.",
        en: "Two rooms on the villa's top floor: just one for two, both together for four.",
      },
      description: {
        it: "Eleganti camere all'ultimo piano della villa, dove nel Quattrocento abitò il Vecchietta. Querciolaia è la camera matrimoniale; accanto c'è Lecceto, una camera a due letti da aggiungere se serve. Un solo bagno, condiviso. Le camere sono al secondo piano e non c'è ascensore. Un condizionatore portatile si sposta da una camera all'altra.",
        en: "Elegant rooms on the villa's top floor, where the painter Il Vecchietta lived in the 15th century. Querciolaia is the double bedroom; next to it is Lecceto, a twin room you can add if needed. One bathroom, shared. The rooms are on the second floor and there is no lift. A portable air conditioner moves from one room to the other.",
      },
      cover: "stays/querciolaia-01.webp",
      detail: "stays/querciolaia-02.webp",
      gallery: [],
      amenities: [LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "querciolaia",
          name: "Querciolaia e Lecceto",
          guests: "4",
          layout: { it: "Camera doppia + camera a due letti opzionale", en: "Double room + optional twin room" },
          text: {
            it: "Camera matrimoniale (Querciolaia) e camera a due letti (Lecceto) con un bagno in comune. Condizionatore portatile.",
            en: "Double room (Querciolaia) and twin room (Lecceto) sharing one bathroom. Portable air conditioner.",
          },
          images: photos("querciolaia", 8),
        },
      ],
    },
    {
      slug: "granaino",
      name: "Granaino",
      category: { it: "MANSARDA PER DUE", en: "ATTIC FOR TWO" },
      size: "1",
      guests: "2",
      layout: { it: "1 camera · soggiorno · aria condizionata", en: "1 bedroom · living room · air conditioning" },
      blurb: {
        it: "La mansarda al secondo piano, con vista sul giardino pensile.",
        en: "The second-floor attic, overlooking the hanging garden.",
      },
      description: {
        it: "Una mansarda accogliente, parte del borgo antico, al secondo piano di un'ala della villa dove nel Quattrocento abitò il pittore Lorenzo di Pietro, detto il Vecchietta. Camera matrimoniale con aria condizionata, soggiorno con grande tavolo, angolo cottura e bagno. Dalle finestre si vedono il giardino pensile con le rose e i limoni, il giardino all'italiana.",
        en: "A cosy attic, part of the ancient hamlet, on the second floor of a villa wing where the painter Lorenzo di Pietro, known as Il Vecchietta, lived in the 15th century. Double bedroom with air conditioning, living room with a large table, kitchenette and bathroom. The windows overlook the hanging garden with roses and lemon trees, the Italian garden.",
      },
      cover: "stays/granaino-01.webp",
      detail: "stays/granaino-02.webp",
      gallery: [],
      amenities: [KITCHENETTE, AC, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "granaino",
          name: "Granaino",
          guests: "2",
          layout: { it: "1 camera · 1 bagno", en: "1 bedroom · 1 bathroom" },
          text: {
            it: "Camera matrimoniale con aria condizionata, soggiorno con tavolo, angolo cottura, bagno. Secondo piano.",
            en: "Double bedroom with air conditioning, living room with table, kitchenette, bathroom. Second floor.",
          },
          images: photos("granaino", 8),
        },
      ],
    },
    {
      slug: "scuderia",
      name: "Scuderia",
      category: { it: "CASA PER CINQUE", en: "HOUSE FOR FIVE" },
      size: "3",
      guests: "5",
      layout: { it: "3 camere · camino · 1 bagno", en: "3 bedrooms · fireplace · 1 bathroom" },
      blurb: {
        it: "L'ex scuderia con il camino e la vista sulla Torre del Mangia.",
        en: "The old stable with fireplace and a view of the Torre del Mangia.",
      },
      description: {
        it: "Al primo piano di un edificio che era la scuderia, ristrutturato e arredato con mobili antichi nel rispetto della tradizione toscana. Un grande soggiorno con zona pranzo e camino, la cucina, una camera matrimoniale, una con due letti singoli, una con un letto singolo e un bagno. Dalle finestre si vedono la Torre del Mangia e il campanile del Duomo, la villa di Belcaro, i cedri del parco, la chiesa e, lontano, l'eremo di Lecceto.",
        en: "On the first floor of a building that was once the stable, renovated and furnished with antiques in keeping with Tuscan tradition. A large living-dining room with fireplace, a kitchen, a double bedroom, a twin, a single and a bathroom. The windows show the Torre del Mangia and the cathedral bell tower, Belcaro villa, the park's cedars, the church and, far away, the Lecceto hermitage.",
      },
      cover: "stays/scuderia-01.webp",
      detail: "stays/scuderia-02.webp",
      gallery: [],
      amenities: [KITCHEN, FIREPLACE, WASHER, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "scuderia",
          name: "Scuderia",
          guests: "5",
          layout: { it: "3 camere · 1 bagno", en: "3 bedrooms · 1 bathroom" },
          text: {
            it: "Soggiorno con camino e zona pranzo, cucina, matrimoniale, camera a due letti, camera singola, bagno. Lavatrice.",
            en: "Living room with fireplace and dining area, kitchen, double, twin, single, bathroom. Washing machine.",
          },
          images: photos("scuderia", 9),
        },
      ],
    },
    {
      slug: "stallina",
      name: "Stallina",
      category: { it: "MONOLOCALE PER DUE", en: "STUDIO FOR TWO" },
      size: "1",
      guests: "2",
      layout: { it: "Monolocale · accesso al giardino", en: "Studio · garden access" },
      blurb: {
        it: "L'ex stalla: un monolocale con il portico sotto il glicine e le vigne davanti.",
        en: "The old stable: a studio with a porch under the wisteria and vineyards ahead.",
      },
      description: {
        it: "La Stallina è un monolocale accogliente che un tempo faceva parte della stalla. Immerso nella campagna, con accesso diretto al giardino e un panorama sulle vigne. Un letto matrimoniale, un angolo cottura e un bagno. Fuori, il portico sotto il glicine con mobili da giardino per il relax.",
        en: "La Stallina is a cosy studio that was once part of the stable. Set in the countryside with direct garden access and a view over the vineyards. A double bed, a kitchenette and a bathroom. Outside, the porch under the wisteria with garden furniture for relaxing.",
      },
      cover: "stays/stallina-01.webp",
      detail: "stays/stallina-02.webp",
      gallery: [],
      amenities: [KITCHENETTE, LINENS, WINE, PARK, PARKING, WIFI, PETS],
      units: [
        {
          slug: "stallina",
          name: "Stallina",
          guests: "2",
          layout: { it: "Monolocale · 1 bagno", en: "Studio · 1 bathroom" },
          text: {
            it: "Letto matrimoniale, angolo cottura, bagno. Portico con mobili da giardino sotto il glicine.",
            en: "Double bed, kitchenette, bathroom. Porch with garden furniture under the wisteria.",
          },
          images: photos("stallina", 7),
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli alloggi", en: "All places to stay" },
    kicker: { it: "Il vostro alloggio a Certano", en: "Your place at Certano" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro l'alloggio", en: "Inside" },
    unitsLabel: { it: "L'alloggio", en: "The place" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Borgo Villa Certano.",
      en: "Hello, I'd like some information about {name} at Borgo Villa Certano.",
    },
    amenitiesLabel: { it: "Nell'alloggio", en: "In the place" },
    ctaTitle: { it: "Un soggiorno fra i cedri.", en: "A stay among the cedars." },
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

  footer: { copyright: "© 2026 Borgo Villa Certano" },

  /* La struttura ha già le informative su Iubenda: si rimanda al loro
     documento, che resta aggiornato da chi lo mantiene. */
  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/33800531",
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/33800531/cookie-policy",
    },
  ],
};

export default site;
