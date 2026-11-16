/**
 * INFORMATIVE DI PARTENZA
 * =======================
 * Privacy e cookie policy per un sito senza cookie, senza moduli di contatto
 * e senza servizi di terze parti incorporati. Le usano i clienti che non hanno
 * un'informativa propria (Iubenda o simili): cambiano solo titolare e
 * recapito, che si passano qui sotto.
 *
 * Vanno rilette e approvate dal cliente prima di andare online.
 */

import type { LegalPage } from "../../src/config/types";

export function defaultLegalPages(owner: {
  /** Ragione sociale o nome della struttura. */
  name: string;
  /** Indirizzo su una riga. */
  address: string;
  email: string;
}): LegalPage[] {
  const mail = `<a href="mailto:${owner.email}">${owner.email}</a>`;
  return [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      body: {
        it: `
<section>
  <h2>Titolare del trattamento</h2>
  <p>${owner.name}, ${owner.address}. Per qualsiasi richiesta relativa ai dati
  personali è possibile scrivere a ${mail}.</p>
</section>
<section>
  <h2>Dati raccolti</h2>
  <p>Questo sito non utilizza moduli di contatto, non registra account e non
  esegue profilazione. I contatti avvengono tramite WhatsApp, email o telefono:
  in quel caso i dati sono trattati dai rispettivi fornitori secondo le loro
  informative. La prenotazione online avviene sul sito del motore di
  prenotazione, che ha una propria informativa.</p>
  <p>Il server che ospita il sito può conservare log tecnici di accesso
  (indirizzo IP, data e ora, pagina richiesta) per finalità di sicurezza e
  diagnostica.</p>
</section>
<section>
  <h2>Finalità e base giuridica</h2>
  <p>I dati eventualmente comunicati sono utilizzati esclusivamente per
  rispondere alle richieste di informazioni e disponibilità, sulla base del
  legittimo interesse a dare riscontro alle richieste ricevute.</p>
</section>
<section>
  <h2>Conservazione</h2>
  <p>Le comunicazioni sono conservate per il tempo necessario a gestire la
  richiesta e gli eventuali obblighi contabili e fiscali conseguenti.</p>
</section>
<section>
  <h2>Diritti dell’interessato</h2>
  <p>È possibile chiedere in qualsiasi momento accesso, rettifica,
  cancellazione, limitazione o portabilità dei propri dati, e opporsi al
  trattamento, scrivendo all’indirizzo indicato sopra. È inoltre possibile
  proporre reclamo al Garante per la protezione dei dati personali.</p>
</section>`,
        en: `
<section>
  <h2>Data controller</h2>
  <p>${owner.name}, ${owner.address}, Italy. For any request concerning
  personal data, write to ${mail}.</p>
</section>
<section>
  <h2>Data collected</h2>
  <p>This website has no contact forms, no accounts and no profiling. Enquiries
  reach us through WhatsApp, email or phone: in those cases data is processed by
  the respective providers under their own privacy notices. Online booking
  takes place on the booking engine's website, which has its own notice.</p>
  <p>The hosting server may keep technical access logs (IP address, timestamp,
  requested page) for security and diagnostic purposes.</p>
</section>
<section>
  <h2>Purpose and legal basis</h2>
  <p>Any data you send us is used solely to answer requests for information and
  availability, on the basis of our legitimate interest in replying to
  enquiries.</p>
</section>
<section>
  <h2>Retention</h2>
  <p>Messages are kept for as long as needed to handle the enquiry and to meet
  any resulting accounting and tax obligations.</p>
</section>
<section>
  <h2>Your rights</h2>
  <p>You may at any time request access to, correction, erasure, restriction or
  portability of your data, and object to processing, by writing to the
  address above. You may also lodge a complaint with the Italian Data
  Protection Authority.</p>
</section>`,
      },
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      body: {
        it: `
<section>
  <h2>Cookie utilizzati</h2>
  <p>Questo sito non utilizza cookie di profilazione, non installa strumenti di
  analisi statistica e non incorpora contenuti di terze parti che tracciano la
  navigazione.</p>
</section>
<section>
  <h2>Memoria locale</h2>
  <p>Il sito salva sul dispositivo una sola preferenza tecnica: la lingua
  scelta, così da riproporla alla visita successiva. Non è un cookie e non
  viene trasmessa a nessun server. Si cancella svuotando i dati del sito dalle
  impostazioni del browser.</p>
</section>
<section>
  <h2>Servizi esterni</h2>
  <p>I collegamenti a WhatsApp, email, telefono e al motore di prenotazione
  aprono servizi esterni: da quel momento valgono le informative dei rispettivi
  fornitori.</p>
</section>
<section>
  <h2>Aggiornamenti</h2>
  <p>Se in futuro verranno introdotti strumenti di analisi o mappe incorporate,
  questa pagina sarà aggiornata e verrà aggiunta la richiesta di consenso
  prevista dalla normativa.</p>
</section>`,
        en: `
<section>
  <h2>Cookies used</h2>
  <p>This website uses no profiling cookies, installs no analytics tools and
  embeds no third-party content that tracks browsing.</p>
</section>
<section>
  <h2>Local storage</h2>
  <p>The site stores one technical preference on your device: the language you
  selected, so it can be restored on your next visit. It is not a cookie and is
  never sent to any server. Clearing the site data in your browser settings
  removes it.</p>
</section>
<section>
  <h2>External services</h2>
  <p>Links to WhatsApp, email, phone and the booking engine open external
  services: from that point their own privacy notices apply.</p>
</section>
<section>
  <h2>Updates</h2>
  <p>Should analytics or embedded maps be added in future, this page will be
  updated and the consent request required by law will be introduced.</p>
</section>`,
      },
    },
  ];
}
