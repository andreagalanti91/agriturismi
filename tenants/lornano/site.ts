/**
 * FATTORIA LORNANO
 * ================
 *
 * Anteprima di redesign costruita sulla stessa struttura di Fattoria Nerbona,
 * con i contenuti pubblici di lornano.it: storia, ville, esperienze di
 * degustazione, recensioni e fotografie vengono da lì, riscritti e
 * riorganizzati. Prezzi e orari vanno fatti confermare al cliente.
 *
 *   Le ville ▾  /trebbiano  /sangiovese  /canaiolo  /malvasia
 *   Cantina /cantina · Degustazioni /degustazioni · Territorio /territorio
 *   Shop → lornano.it/lornano-shop · Prenota → Beds24
 *
 * PRENOTAZIONE. Lornano usa Beds24, che accetta il collegamento diretto a una
 * singola villa (`roomid`): ogni villa ha il suo "Prenota".
 */

import type { Localized, SiteConfig } from "../../src/config/types";
import { defaultLegalPages } from "../_shared/legal";

const BEDS24 = "https://www.beds24.com/booking2.php?propid=36961";

/** Le foto di una villa: stays/<nome>-01.webp, -02... */
const photos = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `stays/${name}-${String(i + 1).padStart(2, "0")}.webp`);

const WHATSAPP_LABEL: Localized = { it: "Scrivici su WhatsApp", en: "Message us on WhatsApp" };
const EMAIL_LABEL: Localized = { it: "Scrivici una email", en: "Email us" };
const DISCOVER: Localized = { it: "Scopri", en: "Discover" };

const POOL: Localized = { it: "Piscina condivisa fra le ville", en: "Pool shared by the villas" };
const PARKING: Localized = { it: "Posto auto e ingresso riservati", en: "Own parking space and entrance" };
const KITCHEN: Localized = { it: "Cucina attrezzata", en: "Equipped kitchen" };
const WIFI: Localized = { it: "Wi-Fi", en: "Wi-Fi" };
const FIREPLACE: Localized = { it: "Camino", en: "Fireplace" };

const site: SiteConfig = {
  brand: {
    id: "lornano",
    prefix: "Fattoria",
    name: "Lornano",
    logo: "logo.svg",
    since: "1904",
  },

  contact: {
    /* Il cellulare dell'ospitalità è quello su cui funziona WhatsApp; il
       fisso dell'ufficio compare come secondo numero. */
    phone: "393475886370",
    phoneDisplay: "+39 347 588 6370",
    phoneAlt: { number: "390577309059", display: "+39 0577 309059" },
    email: "hospitality@lornano.it",
    address: ["Strada di Lornano 12", "53035 Monteriggioni (SI)"],
    coordinates: { lat: 43.3974, lng: 11.2698 },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/lornanochianticlassico/" },
      { label: "Facebook", href: "https://www.facebook.com/lornanochianticlassico/" },
    ],
  },

  seo: {
    domain: "https://www.lornano.it",
    title: {
      it: "Fattoria Lornano | Chianti Classico e ville con piscina a Monteriggioni",
      en: "Fattoria Lornano | Chianti Classico and villas with pool near Siena",
    },
    description: {
      it: "Cantina di Chianti Classico dal 1904 e quattro ville con piscina fra le vigne, a dieci minuti da Siena e Monteriggioni.",
      en: "A Chianti Classico winery since 1904 and four villas with pool among the vineyards, ten minutes from Siena and Monteriggioni.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-11-16",

  nav: [
    {
      label: { it: "Le ville", en: "The villas" },
      children: [
        { href: "/trebbiano", label: { it: "Villa Trebbiano", en: "Villa Trebbiano" } },
        { href: "/sangiovese", label: { it: "Villa Sangiovese", en: "Villa Sangiovese" } },
        { href: "/canaiolo", label: { it: "Villa Canaiolo", en: "Villa Canaiolo" } },
        { href: "/malvasia", label: { it: "Villa Malvasia", en: "Villa Malvasia" } },
      ],
    },
    { page: "cantina", label: { it: "Cantina", en: "Winery" } },
    { page: "degustazioni", label: { it: "Degustazioni", en: "Tastings" } },
    { page: "territorio", label: { it: "Territorio", en: "Surroundings" } },
    { href: "https://www.lornano.it/lornano-shop/", label: { it: "Shop", en: "Shop" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  stayPath: "",

  booking: {
    url: BEDS24,
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
          it: "La piscina di Lornano affacciata sulle colline del Chianti",
          en: "The Lornano pool overlooking the Chianti hills",
        },
      },
      labelParts: [
        { it: "Chianti Classico", en: "Chianti Classico" },
        { it: "Monteriggioni · Siena", en: "Monteriggioni · Siena" },
      ],
      titleLines: [
        { it: "Dormire fra le vigne", en: "Sleep among the vines" },
        { it: "che fanno il nostro vino.", en: "that make our wine." },
      ],
      intro: {
        it: "Quattro ville con piscina in un borgo di campagna, una cantina che produce Chianti Classico dal 1904 e Siena a dieci minuti.",
        en: "Four villas with a pool in a country hamlet, a winery making Chianti Classico since 1904, and Siena ten minutes away.",
      },
      cta: {
        label: { it: "Scopri le ville", en: "See the villas" },
        href: "#ville",
      },
      pillars: [
        { it: "Quattro ville · piscina", en: "Four villas · pool" },
        { it: "Cantina dal 1904", en: "Winery since 1904" },
        { it: "Siena 10 km", en: "Siena 10 km" },
      ],
    },

    {
      type: "story",
      id: "fattoria",
      number: "1904",
      numberLabel: { it: "LA FAMIGLIA POZZOLI", en: "THE POZZOLI FAMILY" },
      ghost: "LORNANO",
      titleLines: [
        { it: "Centottanta ettari", en: "A hundred and eighty" },
        { it: "di Chianti", en: "hectares of" },
      ],
      titleEmphasis: { it: "Classico.", en: "Chianti Classico." },
      mainImage: {
        src: "wine/vigneti.webp",
        alt: { it: "I vigneti di Lornano", en: "The Lornano vineyards" },
        caption: {
          it: "Cinquantuno ettari di vigna, quasi tutta Sangiovese",
          en: "Fifty-one hectares of vineyards, almost all Sangiovese",
        },
      },
      aerialImage: {
        src: "estate/villa-parco.webp",
        alt: { it: "La villa padronale nel parco", en: "The main villa in its park" },
        badge: "43°23′ N · 11°16′ E",
      },
      manifesto: {
        label: { it: "UNA FAMIGLIA, UNA CANTINA", en: "ONE FAMILY, ONE WINERY" },
        text: {
          it: "La famiglia Pozzoli coltiva queste colline dal 1904, e nel 1924 fu fra i fondatori del Consorzio del Chianti Classico. Oggi la fattoria conta 180 ettari, 51 di vigna, con il Sangiovese in purezza al centro di tutto. La certificazione SQNPI per la produzione integrata e un impianto fotovoltaico da 60 kW raccontano il modo di lavorare: attenzione alla terra, senza scorciatoie. Accanto alla cantina, le vecchie case del borgo sono diventate quattro ville per gli ospiti.",
          en: "The Pozzoli family has farmed these hills since 1904, and in 1924 was among the founders of the Chianti Classico Consortium. Today the estate covers 180 hectares, 51 of them vineyards, with pure Sangiovese at the heart of everything. SQNPI integrated-farming certification and a 60 kW solar plant tell the way we work: care for the land, no shortcuts. Next to the winery, the old houses of the hamlet have become four villas for guests.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stayTabs",
      id: "ville",
      kicker: { it: "Dormire a Lornano", en: "Stay at Lornano" },
      title: {
        it: "Quattro ville, quattro vitigni.",
        en: "Four villas, four grapes.",
      },
      text: {
        it: "Ogni villa porta il nome di un vitigno della tenuta e ha la sua cucina, il suo spazio esterno e l'accesso alla piscina comune.",
        en: "Each villa is named after one of the estate's grapes and has its own kitchen, outdoor space and access to the shared pool.",
      },
      tabs: [
        {
          label: { it: "Le ville", en: "The villas" },
          stays: ["trebbiano", "sangiovese", "canaiolo", "malvasia"],
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
      title: {
        it: "Una piscina sola, per quattro ville.",
        en: "One pool, for four villas.",
      },
      text: {
        it: "Lettini, ombrelloni e il giardino tutto intorno: con poche famiglie ospiti alla volta, l'acqua non è mai affollata. La sera si accende e diventa il posto dell'aperitivo.",
        en: "Loungers, parasols and the garden all around: with only a few families staying at a time, it's never crowded. In the evening it lights up and becomes the place for an aperitif.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "IN CANTINA", en: "AT THE WINERY" },
      title: {
        it: "Il vino si capisce meglio dove nasce.",
        en: "Wine makes more sense where it's made.",
      },
      intro: {
        it: "Visite, degustazioni e cucina, a pochi passi dalla villa.",
        en: "Tours, tastings and cooking, a few steps from your villa.",
      },
      marquee: {
        it: "VIGNA · CANTINA · DEGUSTAZIONI · CUCINA · TRAMONTO · ",
        en: "VINEYARD · CELLAR · TASTINGS · COOKING · SUNSET · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: { it: "Tutte le esperienze", en: "All experiences" },
      ctaHref: "/degustazioni",
      items: [
        {
          title: "Tour & Taste",
          word: { it: "CANTINA", en: "CELLAR" },
          meta: { it: "Da 20 € a persona", en: "From €20 per person" },
          text: {
            it: "Le cantine storiche del Quattrocento, la storia della fattoria e la degustazione di tre vini e dell'olio.",
            en: "The 15th-century cellars, the story of the estate and a tasting of three wines and our olive oil.",
          },
          image: "wine/bottaia.webp",
        },
        {
          title: "Aperitivo al tramonto",
          word: { it: "TRAMONTO", en: "SUNSET" },
          meta: { it: "40 € a persona", en: "€40 per person" },
          text: {
            it: "Nel parco ottocentesco della villa, con le colline del Chianti davanti mentre il sole scende.",
            en: "In the villa's 19th-century park, facing the Chianti hills as the sun goes down.",
          },
          image: "wine/degustazione-giardino.webp",
        },
        {
          title: "Cooking class",
          word: { it: "CUCINA", en: "KITCHEN" },
          meta: { it: "180 € a persona", en: "€180 per person" },
          text: {
            it: "Tagliatelle, bruschetta e tiramisù con la chef, poi a tavola con quattro vini di Lornano.",
            en: "Tagliatelle, bruschetta and tiramisù with our chef, then lunch with four Lornano wines.",
          },
          image: "wine/cooking-class.webp",
        },
      ],
    },

    {
      type: "cards",
      id: "scopri",
      tone: "dark",
      kicker: { it: "Oltre il soggiorno", en: "Beyond your stay" },
      title: {
        it: "La cantina, le degustazioni e la Toscana intorno.",
        en: "The winery, the tastings and the Tuscany around you.",
      },
      items: [
        {
          meta: { it: "Dal 1904", en: "Since 1904" },
          title: { it: "Cantina", en: "Winery" },
          text: {
            it: "Le vigne, la bottaia e i vini: dal Chianti Classico al Vin Santo, premiati da Decanter.",
            en: "The vineyards, the barrel room and the wines: from Chianti Classico to Vin Santo, praised by Decanter.",
          },
          image: { src: "wine/botti-rosse.webp", alt: { it: "Le botti in cantina", en: "Barrels in the cellar" } },
          link: { label: DISCOVER, href: "/cantina" },
        },
        {
          meta: { it: "Sette esperienze", en: "Seven experiences" },
          title: { it: "Degustazioni", en: "Tastings" },
          text: {
            it: "Dal pranzo leggero in vigna alla lezione di cucina: tutte le esperienze in fattoria.",
            en: "From a light lunch in the vineyard to a cooking class: all the experiences at the farm.",
          },
          image: { src: "wine/tagliere.webp", alt: { it: "Tagliere e vino", en: "Platter and wine" } },
          link: { label: DISCOVER, href: "/degustazioni" },
        },
        {
          meta: { it: "Siena · Chianti · Monteriggioni", en: "Siena · Chianti · Monteriggioni" },
          title: { it: "Territorio", en: "Surroundings" },
          text: {
            it: "Siena a dieci minuti, le mura di Monteriggioni a cinque, il Chianti tutto intorno.",
            en: "Siena ten minutes away, the walls of Monteriggioni five, Chianti all around.",
          },
          image: { src: "estate/viale.webp", alt: { it: "Il viale della fattoria", en: "The farm avenue" } },
          link: { label: DISCOVER, href: "/territorio" },
        },
      ],
    },

    {
      type: "reviews",
      id: "ospiti",
      kicker: { it: "Dicono di noi", en: "What guests say" },
      title: { it: "Chi viene, di solito torna.", en: "Those who come usually come back." },
      /* Dal sito lornano.it, accorciate e tradotte. */
      items: [
        {
          source: "lornano.it",
          title: { it: "Il viaggio più memorabile in Toscana", en: "The most memorable Tuscan trip" },
          quote: {
            it: "Vengo in vacanza in Toscana da diversi anni e senza dubbio il viaggio più memorabile è stato a Malvasia, a Lornano. Il borgo è idilliaco, immerso in una delle campagne più belle della Toscana. Nessuna visita è completa senza il giro in cantina e la degustazione.",
            en: "I have been holidaying in Tuscany for several years and without doubt the most memorable trip was our visit to Malvasia at Lornano. The hamlet is idyllic, set in some of the most stunning countryside Tuscany has to offer. No visit is complete without a tour of the wine cellars and a tasting.",
          },
          author: "J.H. e famiglia",
          date: { it: "Luglio 2009", en: "July 2009" },
        },
        {
          source: "lornano.it",
          quote: {
            it: "La casa era ottima e la consiglierei a chiunque. Siena a dieci minuti, Firenze a quarantacinque, oppure restare in fattoria a giocare nella splendida piscina.",
            en: "The house was great, and I would not hesitate to recommend it to anyone. We were able to visit Siena in 10 mins and Florence in 45, or just hang around and play in the wonderful swimming pool.",
          },
          author: "V.R. e famiglia",
          date: { it: "Agosto 2011", en: "August 2011" },
        },
        {
          source: "lornano.it",
          quote: {
            it: "Casa comoda e pulita, posizione ottima. Il vino e l'olio della fattoria erano fantastici, e i proprietari sono stati gentilissimi a mostrarci la cantina. La piscina era perfetta per rinfrescarsi.",
            en: "The property was very comfy, clean and a great location. The wine and olive oil from the vineyard on site was fantastic. The owners were very accommodating in showing us around the wine cellar. The pool was great to cool off in.",
          },
          author: "M.F. e famiglia",
          date: { it: "Giugno 2010", en: "June 2010" },
        },
      ],
    },

    {
      type: "territory",
      id: "territorio",
      kicker: { it: "Nel cuore del Chianti", en: "Heart of Chianti" },
      title: {
        it: "Siena da una parte, il Chianti dall'altra.",
        en: "Siena on one side, Chianti on the other.",
      },
      text: {
        it: "Monteriggioni a cinque minuti, Siena a dieci, i borghi del Chianti a mezz'ora, Firenze entro l'ora.",
        en: "Monteriggioni five minutes away, Siena ten, the Chianti villages half an hour, Florence within the hour.",
      },
      disclaimer: { it: "DISTANZE STRADALI INDICATIVE", en: "APPROXIMATE DRIVING DISTANCES" },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Fattoria Lornano",
        en: "Stylised map of distances from Fattoria Lornano",
      },
      gridLabels: { x: "43°23′ N", y: "11°16′ E" },
      homeLabel: { lines: ["Fattoria", "Lornano"], sub: "Monteriggioni" },
      rings: [
        { km: 10, label: "10 km" },
        { km: 25, label: "25 km" },
        { km: 50, label: "50 km" },
      ],
      legend: {
        home: "Lornano",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: { it: "Distanze stradali indicative", en: "Approximate driving distances" },
      },
      items: [
        { id: "monteriggioni", name: { it: "Monteriggioni", en: "Monteriggioni" }, distance: "6 km", coordinates: { lat: 43.39, lng: 11.2236 } },
        { id: "siena", name: { it: "Siena", en: "Siena" }, distance: "12 km", coordinates: { lat: 43.3188, lng: 11.3308 } },
        { id: "castellina", name: { it: "Castellina in Chianti", en: "Castellina in Chianti" }, distance: "15 km", coordinates: { lat: 43.4703, lng: 11.2836 } },
        { id: "colle", name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" }, distance: "18 km", coordinates: { lat: 43.4213, lng: 11.1275 } },
        { id: "radda", name: { it: "Radda in Chianti", en: "Radda in Chianti" }, distance: "28 km", coordinates: { lat: 43.4862, lng: 11.3737 } },
        { id: "gimignano", name: { it: "San Gimignano", en: "San Gimignano" }, distance: "35 km", coordinates: { lat: 43.4677, lng: 11.0431 } },
        { id: "florence", name: { it: "Firenze", en: "Florence" }, distance: "55 km", coordinates: { lat: 43.7696, lng: 11.2558 } },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "estate/piazza.webp",
        alt: { it: "La piazzetta del borgo di Lornano", en: "The little square of the Lornano hamlet" },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: { it: "Vi aspettiamo a Lornano.", en: "We look forward to welcoming you." },
      text: {
        it: "Disponibilità e prezzi delle ville sono online, in tempo reale. Per degustazioni, gruppi o qualsiasi domanda scriveteci: vi rispondiamo di persona.",
        en: "Villa availability and prices are online, live. For tastings, groups or any question, write to us: we'll reply in person.",
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
      slug: "cantina",
      title: { it: "La cantina", en: "The winery" },
      description: {
        it: "Chianti Classico dal 1904: la famiglia Pozzoli, 51 ettari di vigna, la bottaia e i vini premiati di Fattoria Lornano.",
        en: "Chianti Classico since 1904: the Pozzoli family, 51 hectares of vineyards, the barrel room and Fattoria Lornano's award-winning wines.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "wine/bottaia.webp",
            alt: { it: "La bottaia di Lornano", en: "The Lornano barrel room" },
          },
          labelParts: [
            { it: "Cantina", en: "Winery" },
            { it: "Dal 1904", en: "Since 1904" },
          ],
          titleLines: [
            { it: "Sangiovese,", en: "Sangiovese," },
            { it: "da quattro generazioni", en: "for four generations" },
          ],
          intro: {
            it: "Fra i fondatori del Consorzio del Chianti Classico nel 1924, la famiglia Pozzoli fa vino su queste colline da più di un secolo.",
            en: "Among the founders of the Chianti Classico Consortium in 1924, the Pozzoli family has made wine on these hills for over a century.",
          },
          cta: { label: { it: "La tenuta in numeri", en: "The estate in numbers" }, href: "#numeri" },
          pillars: [
            { it: "180 ettari", en: "180 hectares" },
            { it: "51 di vigna", en: "51 of vineyards" },
            { it: "Certificazione SQNPI", en: "SQNPI certified" },
          ],
        },
        {
          type: "facts",
          id: "numeri",
          kicker: { it: "La tenuta", en: "The estate" },
          title: { it: "In numeri", en: "In numbers" },
          image: { src: "wine/vigna.webp", alt: { it: "Filari di Sangiovese", en: "Rows of Sangiovese" } },
          items: [
            { label: { it: "Fondazione", en: "Founded" }, value: { it: "1904", en: "1904" }, note: { it: "Famiglia Pozzoli", en: "Pozzoli family" } },
            { label: { it: "Consorzio", en: "Consortium" }, value: { it: "1924", en: "1924" }, note: { it: "Fra i soci fondatori del Chianti Classico", en: "Founding member of Chianti Classico" } },
            { label: { it: "Superficie", en: "Estate" }, value: { it: "180 ettari", en: "180 hectares" } },
            { label: { it: "Vigneti", en: "Vineyards" }, value: { it: "51 ettari", en: "51 hectares" }, note: { it: "Sangiovese in purezza al centro", en: "Pure Sangiovese at the core" } },
            { label: { it: "Agricoltura", en: "Farming" }, value: { it: "Integrata", en: "Integrated" }, note: { it: "Certificazione SQNPI", en: "SQNPI certification" } },
            { label: { it: "Energia", en: "Energy" }, value: { it: "60 kW", en: "60 kW" }, note: { it: "Impianto fotovoltaico", en: "Solar plant" } },
          ],
        },
        {
          type: "chapters",
          id: "vini",
          kicker: { it: "I vini", en: "The wines" },
          title: { it: "Dalla vigna alla bottiglia", en: "From vine to bottle" },
          items: [
            {
              word: { it: "Vigna", en: "Vineyard" },
              kicker: { it: "Sangiovese in purezza", en: "Pure Sangiovese" },
              title: { it: "Le Bandite", en: "Le Bandite" },
              text: {
                it: "Il cru della tenuta, da un solo vigneto. L'annata 2021 ha ricevuto 94 punti da Decanter.",
                en: "The estate's cru, from a single vineyard. The 2021 vintage scored 94 points from Decanter.",
              },
              details: [{ it: "Decanter · 94 punti", en: "Decanter · 94 points" }],
              image: { src: "wine/bottiglia-vigna.webp", alt: { it: "Una bottiglia fra i filari", en: "A bottle among the rows" } },
            },
            {
              word: { it: "Cantina", en: "Cellar" },
              kicker: { it: "Botti e barrique", en: "Casks and barriques" },
              title: { it: "Chianti Classico", en: "Chianti Classico" },
              text: {
                it: "Il vino di sempre della fattoria, affinato in botti di rovere nelle cantine del Quattrocento sotto la villa, dove la temperatura resta fra 12 e 18 gradi tutto l'anno.",
                en: "The estate's signature wine, aged in oak casks in the 15th-century cellars under the villa, where the temperature stays between 12 and 18 degrees all year.",
              },
              image: { src: "wine/botti.webp", alt: { it: "Le botti", en: "The casks" } },
            },
            {
              word: { it: "Tempo", en: "Time" },
              kicker: { it: "Nella vinsantaia", en: "In the vin santo loft" },
              title: { it: "Vin Santo", en: "Vin Santo" },
              text: {
                it: "Uve appassite sui graticci e anni di caratelli. L'annata 2015 ha ricevuto 93 punti da Decanter; i vini di Lornano sono segnalati anche da Veronelli e Bibenda.",
                en: "Grapes dried on racks and years in small casks. The 2015 vintage scored 93 points from Decanter; Lornano wines are also listed by Veronelli and Bibenda.",
              },
              details: [{ it: "Decanter · 93 punti", en: "Decanter · 93 points" }],
              image: { src: "wine/vinsantaia.webp", alt: { it: "La vinsantaia", en: "The vin santo loft" } },
              link: { label: { it: "Acquista nello shop", en: "Buy in the shop" }, href: "https://www.lornano.it/lornano-shop/" },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "wine/bottiglie.webp", alt: { it: "Le bottiglie di Lornano", en: "Lornano bottles" } },
          kicker: { it: "Visite in cantina", en: "Winery visits" },
          title: { it: "Venite a trovarci.", en: "Come and visit." },
          text: {
            it: "Le visite si prenotano: scriveteci con il giorno e il numero di persone.",
            en: "Visits are by appointment: write to us with the date and number of people.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },

    {
      slug: "degustazioni",
      title: { it: "Degustazioni ed esperienze", en: "Tastings and experiences" },
      description: {
        it: "Tour della cantina, degustazioni, pranzo in vigna, aperitivo al tramonto e lezione di cucina toscana a Fattoria Lornano.",
        en: "Winery tours, tastings, lunch in the vineyard, sunset aperitif and Tuscan cooking class at Fattoria Lornano.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: {
            src: "wine/degustazione.webp",
            alt: { it: "Una degustazione a Lornano", en: "A tasting at Lornano" },
          },
          labelParts: [
            { it: "Degustazioni", en: "Tastings" },
            { it: "Tutto l'anno", en: "All year round" },
          ],
          titleLines: [
            { it: "Sette modi", en: "Seven ways" },
            { it: "di assaggiare Lornano", en: "to taste Lornano" },
          ],
          intro: {
            it: "Aperte agli ospiti delle ville e a chi passa da qui, solo su prenotazione: vi mandiamo la conferma via email.",
            en: "Open to villa guests and visitors alike, by reservation only: we'll send you a confirmation email.",
          },
          cta: { label: { it: "Le esperienze", en: "The experiences" }, href: "#esperienze" },
          pillars: [
            { it: "Da 20 € a persona", en: "From €20 per person" },
            { it: "In italiano e inglese", en: "In Italian and English" },
          ],
        },
        {
          type: "cards",
          id: "esperienze",
          kicker: { it: "Le esperienze", en: "The experiences" },
          title: { it: "Scegliete la vostra.", en: "Choose yours." },
          text: {
            it: "Prezzi a persona, minimo due persone, solo su prenotazione. Pranzi e taglieri si possono personalizzare: chiedeteci.",
            en: "Prices per person, minimum two people, by reservation only. Lunches and platters can be tailored: just ask.",
          },
          items: [
            {
              meta: { it: "20 € · circa 1 ora", en: "€20 · about 1 hour" },
              title: { it: "Tour & Taste", en: "Tour & Taste" },
              text: {
                it: "La visita delle cantine storiche del Quattrocento, la storia di Lornano e il nostro modo di coltivare, poi la degustazione.",
                en: "A tour of the 15th-century cellars, the story of Lornano and the way we farm, then a tasting.",
              },
              details: [
                { it: "3 vini di Lornano", en: "3 Lornano wines" },
                { it: "Olio extravergine della fattoria", en: "The estate's extra virgin olive oil" },
              ],
              image: { src: "wine/bottaia.webp", alt: { it: "La bottaia", en: "The barrel room" } },
            },
            {
              meta: { it: "35 € · circa 1 ora", en: "€35 · about 1 hour" },
              title: { it: "Vino, formaggi e…", en: "Wine, cheese and…" },
              text: {
                it: "Alla visita e alla degustazione si aggiungono pecorino, salumi e pane casalingo.",
                en: "The tour and tasting, plus pecorino, cured meats and farmhouse bread.",
              },
              details: [
                { it: "4 vini", en: "4 wines" },
                { it: "Olio, pecorino, prosciutto, salame, bruschetta", en: "Olive oil, pecorino, ham, salami, bruschetta" },
              ],
              image: { src: "wine/tagliere.webp", alt: { it: "Tagliere di salumi e formaggi", en: "Platter of cheese and cured meats" } },
            },
            {
              meta: { it: "40 € · circa 1 ora", en: "€40 · about 1 hour" },
              title: { it: "Cru Experience", en: "The Cru Experience" },
              text: {
                it: "I vini più rappresentativi: la Riserva da vigna singola Le Bandite, la Gran Selezione e il Supertuscan.",
                en: "Our most representative wines: the single-vineyard Riserva Le Bandite, the Gran Selezione and the Supertuscan.",
              },
              details: [
                { it: "5 vini", en: "5 wines" },
                { it: "Olio e stuzzichini", en: "Olive oil and snacks" },
              ],
              image: { src: "wine/calici.webp", alt: { it: "Calici in degustazione", en: "Glasses at a tasting" } },
            },
            {
              meta: { it: "40 € · circa 1 ora e mezza", en: "€40 · about 1.5 hours" },
              title: { it: "Aperitivo al tramonto", en: "Sunset aperitif" },
              text: {
                it: "Nel parco ottocentesco della villa, con le colline del Chianti davanti mentre il sole scende.",
                en: "In the 19th-century park of the villa, facing the Chianti hills as the sun goes down.",
              },
              details: [
                { it: "Visita della cantina · 4 vini", en: "Cellar tour · 4 wines" },
                { it: "Olio, pecorino, salumi, bruschetta", en: "Olive oil, pecorino, cured meats, bruschetta" },
              ],
              image: { src: "wine/degustazione-giardino.webp", alt: { it: "Aperitivo nel parco", en: "Aperitif in the park" } },
            },
            {
              meta: { it: "45 € · non in inverno", en: "€45 · not in winter" },
              title: { it: "Fra le vigne", en: "Into the vineyards" },
              text: {
                it: "Venti minuti a piedi fra i filari per scoprire il terroir del Chianti Classico, poi la cantina e la degustazione.",
                en: "A twenty-minute walk among the rows to discover the Chianti Classico terroir, then the cellar and a tasting.",
              },
              details: [
                { it: "4 vini con prodotti toscani", en: "4 wines with Tuscan food" },
                { it: "Con brutto tempo la passeggiata salta", en: "No vineyard walk in bad weather" },
              ],
              image: { src: "wine/vigneti.webp", alt: { it: "I vigneti", en: "The vineyards" } },
            },
            {
              meta: { it: "60 € · circa 1 ora e 45", en: "€60 · about 1 h 45" },
              title: { it: "Pranzo leggero in cantina", en: "Light lunch at the winery" },
              text: {
                it: "Visita della cantina, poi un pranzo toscano: affettati, pecorino e bruschetta, un primo come pasta o lasagne, Vin Santo e cantucci.",
                en: "A cellar tour, then a Tuscan lunch: cured meats, pecorino and bruschetta, a pasta or lasagne course, Vin Santo and cantucci.",
              },
              details: [{ it: "4 vini e Vin Santo", en: "4 wines and Vin Santo" }],
              image: { src: "wine/rosato-piscina.webp", alt: { it: "Un calice di rosato", en: "A glass of rosé" } },
            },
            {
              meta: { it: "180 € · circa 3 ore", en: "€180 · about 3 hours" },
              title: { it: "Lezione di cucina toscana", en: "Tuscan cooking class" },
              text: {
                it: "Con la chef, in un ambiente di famiglia: tagliatelle fatte a mano, bruschetta e tiramisù. Poi la cantina e il pranzo che avete preparato, con quattro vini.",
                en: "With our chef, in a family setting: handmade tagliatelle, bruschetta and tiramisù. Then the cellar, and the lunch you made, paired with four wines.",
              },
              details: [
                { it: "Inizio alle 10:30", en: "Starts at 10:30" },
                { it: "Diploma e ricette stampate", en: "Diploma and printed recipes" },
              ],
              image: { src: "wine/cooking-class.webp", alt: { it: "Lezione di cucina", en: "Cooking class" } },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "wine/degustazione.webp", alt: { it: "Una degustazione", en: "A tasting" } },
          kicker: { it: "Prenota un'esperienza", en: "Book an experience" },
          title: { it: "Scriveteci giorno e persone.", en: "Tell us the date and how many." },
          text: {
            it: "Vi confermiamo disponibilità e orario. Le esperienze si fanno anche senza soggiornare a Lornano.",
            en: "We'll confirm availability and time. You don't need to stay at Lornano to book.",
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
        it: "Cosa vedere intorno a Fattoria Lornano: Monteriggioni, Siena, i borghi del Chianti Classico, San Gimignano e Firenze.",
        en: "What to see around Fattoria Lornano: Monteriggioni, Siena, the Chianti Classico villages, San Gimignano and Florence.",
      },
      sections: [
        {
          type: "hero",
          id: "home",
          size: "editorial",
          image: { src: "estate/borgo.webp", alt: { it: "Il borgo di Lornano", en: "The Lornano hamlet" } },
          labelParts: [
            { it: "Territorio", en: "Surroundings" },
            { it: "Chianti · Siena", en: "Chianti · Siena" },
          ],
          titleLines: [
            { it: "Tutto il Chianti", en: "All of Chianti" },
            { it: "a portata di mano", en: "within reach" },
          ],
          intro: {
            it: "Lornano sta sulla strada che dal Chianti scende a Siena: in pochi minuti si è in piazza del Campo o sulle mura di Monteriggioni.",
            en: "Lornano sits on the road down from Chianti to Siena: in a few minutes you're in Piazza del Campo or on the walls of Monteriggioni.",
          },
          cta: { label: { it: "Cosa vedere", en: "What to see" }, href: "#dintorni" },
          pillars: [
            { it: "Monteriggioni 6 km", en: "Monteriggioni 6 km" },
            { it: "Siena 12 km", en: "Siena 12 km" },
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
              kicker: { it: "A 12 km", en: "12 km away" },
              title: { it: "Piazza del Campo e il Duomo", en: "Piazza del Campo and the Cathedral" },
              text: {
                it: "Il Palio, le contrade, il Duomo e la Torre del Mangia: Siena si raggiunge in un quarto d'ora, anche per una cena.",
                en: "The Palio, the contrade, the Cathedral and the Torre del Mangia: Siena is a quarter of an hour away, even just for dinner.",
              },
            },
            {
              word: { it: "Mura", en: "Walls" },
              kicker: { it: "A 6 km", en: "6 km away" },
              title: { it: "Monteriggioni", en: "Monteriggioni" },
              text: {
                it: "Il borgo murato citato da Dante, con le sue quattordici torri, sulla Via Francigena.",
                en: "The walled village quoted by Dante, with its fourteen towers, on the Via Francigena.",
              },
            },
            {
              word: { it: "Chianti", en: "Chianti" },
              kicker: { it: "Da 15 km", en: "From 15 km" },
              title: { it: "Castellina, Radda, Gaiole", en: "Castellina, Radda, Gaiole" },
              text: {
                it: "La Chiantigiana sale fra vigne e castelli: cantine, borghi in pietra e strade che invitano a fermarsi.",
                en: "The Chiantigiana road climbs among vineyards and castles: wineries, stone villages and roads made for stopping.",
              },
            },
          ],
        },
        {
          type: "contact",
          id: "contatti",
          image: { src: "estate/viale.webp", alt: { it: "Il viale della fattoria", en: "The farm avenue" } },
          kicker: { it: "Il vostro soggiorno", en: "Your stay" },
          title: { it: "Vi aspettiamo a Lornano.", en: "We look forward to welcoming you." },
          text: {
            it: "Vi diamo volentieri consigli su itinerari, ristoranti e cantine da visitare.",
            en: "We're happy to suggest itineraries, restaurants and wineries to visit.",
          },
          whatsappLabel: WHATSAPP_LABEL,
          emailLabel: EMAIL_LABEL,
        },
      ],
    },
  ],

  /* ================================================================ */
  /* Ville                                                             */
  /* ================================================================ */

  accommodations: [
    {
      slug: "trebbiano",
      name: "Villa Trebbiano",
      category: { it: "VILLA PER DUE", en: "VILLA FOR TWO" },
      size: "1",
      guests: "2",
      layout: { it: "1 camera queen · patio privato", en: "1 queen bedroom · private patio" },
      blurb: {
        it: "La più raccolta: una camera queen, la cucina e un patio privato.",
        en: "The most intimate: a queen bedroom, a kitchen and a private patio.",
      },
      description: {
        it: "Un rifugio per due dentro una delle case del borgo, con ingresso dalla piazzetta o dal giardino privato. Si entra dal patio coperto e arredato nel salottino; accanto, la cucina compatta che si apre anch'essa sul patio. Una breve scala porta alla grande camera con letto queen e la porta-finestra ad arco sulla piazza.",
        en: "A retreat for two inside one of the hamlet's houses, entered from the piazza or from its private garden. You step from the covered, furnished patio into the sitting room; next to it, a compact kitchen also opening onto the patio. A short staircase leads up to the large bedroom with a queen bed and arched French doors onto the piazza.",
      },
      cover: "stays/trebbiano-01.webp",
      detail: "stays/trebbiano-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, WIFI],
      units: [
        {
          slug: "villa-trebbiano",
          name: "Villa Trebbiano",
          guests: "2",
          layout: { it: "1 camera queen · 1 bagno con doccia", en: "1 queen bedroom · 1 shower room" },
          text: {
            it: "Salottino con divano, cucina compatta, bagno con doccia, camera con letto queen al piano di sopra. Patio coperto e giardino privati, posto auto riservato.",
            en: "Sitting room with sofa, compact kitchen, shower room, upstairs bedroom with queen bed. Private covered patio and garden, reserved parking space.",
          },
          images: photos("trebbiano", 9),
          bookingUrl: `${BEDS24}&roomid=85308`,
        },
      ],
    },
    {
      slug: "sangiovese",
      name: "Villa Sangiovese",
      category: { it: "VILLA PER SEI", en: "VILLA FOR SIX" },
      size: "1",
      guests: "6",
      layout: { it: "3 camere · 2 bagni · camino", en: "3 bedrooms · 2 bathrooms · fireplace" },
      blurb: {
        it: "La più grande, al primo piano: tre camere, due bagni e il camino toscano.",
        en: "The largest, for families or friends: three bedrooms, two bathrooms and a fireplace.",
      },
      description: {
        it: "Al primo piano, raggiunto da una scala esterna in pietra. Il soggiorno ha i soffitti altissimi e il camino toscano; la cucina di campagna ha il tavolo di marmo e le vecchie ricette incorniciate alle pareti. Una matrimoniale con bagno e due grandi camere doppie con un bagno in comune. Sotto la piazza, un prato privato con il pergolato.",
        en: "On the first floor, reached by an external stone staircase. The sitting room has very tall ceilings and a Tuscan fireplace; the farmhouse kitchen has a marble table and old recipes framed on the walls. One double bedroom with en-suite and two spacious twin rooms sharing a large bathroom. Below the piazza, a private lawn with a pergola.",
      },
      cover: "stays/sangiovese-01.webp",
      detail: "stays/sangiovese-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, FIREPLACE, WIFI],
      units: [
        {
          slug: "villa-sangiovese",
          name: "Villa Sangiovese",
          guests: "6",
          layout: { it: "3 camere · 2 bagni", en: "3 bedrooms · 2 bathrooms" },
          text: {
            it: "Primo piano con scala esterna in pietra. Soggiorno con camino, cucina con tavolo di marmo, una matrimoniale con bagno, due doppie con bagno condiviso. Prato privato con pergolato.",
            en: "First floor with external stone staircase. Sitting room with fireplace, kitchen with marble table, one double with en-suite, two twins sharing a bathroom. Private lawn with pergola.",
          },
          images: photos("sangiovese", 14),
          bookingUrl: `${BEDS24}&roomid=85306`,
        },
      ],
    },
    {
      slug: "canaiolo",
      name: "Villa Canaiolo",
      category: { it: "VILLA PER QUATTRO", en: "VILLA FOR FOUR" },
      size: "1",
      guests: "4",
      layout: { it: "2 camere · 1 bagno · camino", en: "2 bedrooms · 1 bathroom · fireplace" },
      blurb: {
        it: "Sulla piazzetta fiorita del borgo, con il camino in cucina.",
        en: "On the hamlet's flower-filled piazza, with a fireplace in the kitchen.",
      },
      description: {
        it: "La porta si apre sulla piazzetta fiorita in un ingresso con le travi a vista; un grande arco in mattoni divide la cucina, con il camino e un tavolo che raddoppia, dal soggiorno. Al piano di sopra il bagno, una camera doppia e una matrimoniale con un piccolo terrazzo sul giardino. Davanti alla porta, un angolo della piazza riservato per mangiare fuori.",
        en: "The front door opens from the flower-filled piazza into a beamed entry; a wide brick arch separates the kitchen, with its fireplace and a table that extends to twice its size, from the sitting room. Upstairs, a bathroom, a twin room and a double with a small terrace over the garden. By the door, a reserved spot on the piazza for outdoor meals.",
      },
      cover: "stays/canaiolo-01.webp",
      detail: "stays/canaiolo-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, FIREPLACE, WIFI],
      units: [
        {
          slug: "villa-canaiolo",
          name: "Villa Canaiolo",
          guests: "4",
          layout: { it: "2 camere · 1 bagno", en: "2 bedrooms · 1 bathroom" },
          text: {
            it: "Cucina con camino e tavolo allungabile, soggiorno, una doppia e una matrimoniale con terrazzino, un bagno. Tavolo riservato sulla piazza.",
            en: "Kitchen with fireplace and extending table, sitting room, a twin and a double with small terrace, one bathroom. Reserved table on the piazza.",
          },
          images: photos("canaiolo", 12),
          bookingUrl: `${BEDS24}&roomid=85305`,
        },
      ],
    },
    {
      slug: "malvasia",
      name: "Villa Malvasia",
      category: { it: "VILLA PER QUATTRO", en: "VILLA FOR FOUR" },
      size: "1",
      guests: "4",
      layout: { it: "2 camere · 2 bagni · camino", en: "2 bedrooms · 2 bathrooms · fireplace" },
      blurb: {
        it: "Il vecchio fienile: grandi vetrate, mattoni antichi e il camino.",
        en: "The old barn: large glazed panels, ancient brickwork and a fireplace.",
      },
      description: {
        it: "I grandi portoni del fienile si aprono su un soggiorno ampio con camino; le vetrate stanno dietro le vecchie grate in mattoni, e scale e sostegni in acciaio accompagnano pietra e cotto. Al piano di sopra una doppia, una matrimoniale con letto antico e il bagno; scendendo le scale in travertino, la cucina, un secondo bagno e la porta sul patio arredato.",
        en: "The big barn doors open onto a large sitting room with fireplace; glazed panels sit behind the old brick-pattern windows, and steel stairs and supports set off the ancient stone and brick. Upstairs a twin, a double with an antique bed and a shower room; down the travertine stairs, the kitchen, a second shower room and the door to a wide furnished patio.",
      },
      cover: "stays/malvasia-01.webp",
      detail: "stays/malvasia-02.webp",
      gallery: [],
      amenities: [POOL, PARKING, KITCHEN, FIREPLACE, WIFI],
      units: [
        {
          slug: "villa-malvasia",
          name: "Villa Malvasia",
          guests: "4",
          layout: { it: "2 camere · 2 bagni", en: "2 bedrooms · 2 bathrooms" },
          text: {
            it: "Soggiorno con camino, cucina, una doppia e una matrimoniale, due bagni con doccia, patio arredato.",
            en: "Sitting room with fireplace, kitchen, a twin and a double, two shower rooms, furnished patio.",
          },
          images: photos("malvasia", 13),
          bookingUrl: `${BEDS24}&roomid=85307`,
        },
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutte le ville", en: "All villas" },
    kicker: { it: "La vostra villa a Lornano", en: "Your villa at Lornano" },
    sizeLabel: { it: "Camere", en: "Bedrooms" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la villa", en: "Inside" },
    unitsLabel: { it: "La villa", en: "The villa" },
    askLabel: { it: "Chiedi informazioni", en: "Ask about it" },
    askMessage: {
      it: "Buongiorno, vorrei informazioni su {name} di Fattoria Lornano.",
      en: "Hello, I'd like some information about {name} at Fattoria Lornano.",
    },
    amenitiesLabel: { it: "Nella villa", en: "In the villa" },
    ctaTitle: { it: "Un'estate fra le vigne.", en: "A summer among the vines." },
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

  footer: { copyright: "© 2026 Fattoria Lornano" },

  legalPages: defaultLegalPages({
    name: "Fattoria Lornano",
    address: "Strada di Lornano 12, 53035 Monteriggioni (SI)",
    email: "lornano@lornano.it",
  }),
};

export default site;
