/**
 * COMPILA TUTTI I CLIENTI PER GITHUB PAGES
 * ========================================
 *
 *   DEMO_ORIGIN=https://andreagalanti91.github.io DEMO_PATH=/agriturismi \
 *     npm run build:pages
 *
 * Compila ogni cliente di tenants/ come anteprima (vedi build-demo.mjs):
 * ognuno nella sua sottocartella, non indicizzato dai motori di ricerca. Il
 * risultato sta in dist/demo/ ed è esattamente quello che il workflow
 * .github/workflows/pages.yml pubblica.
 *
 *   https://andreagalanti91.github.io/agriturismi/nerbona/    un cliente
 *
 * L'indirizzo radice NON elenca i clienti: le anteprime si mandano ai
 * potenziali clienti, e nessuno deve vedere quelle degli altri. build-demo
 * scrive una pagina indice con l'elenco (utile in locale); qui viene
 * sostituita da una pagina vuota.
 *
 * Un cliente che non compila non ferma gli altri: viene segnalato in fondo
 * e lo script esce con errore, così il workflow lo mostra in rosso.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";

const tenants = fs
  .readdirSync("tenants", { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
  .map((entry) => entry.name)
  .sort();

fs.rmSync("dist/demo", { recursive: true, force: true });

const failed = [];
for (const siteId of tenants) {
  const result = spawnSync(process.execPath, ["scripts/build-demo.mjs"], {
    env: { ...process.env, SITE_ID: siteId },
    stdio: "inherit",
  });
  if (result.status !== 0) failed.push(siteId);
}

/* Al posto dell'elenco dei clienti, una pagina vuota e non indicizzata. */
fs.writeFileSync(
  "dist/demo/index.html",
  `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title></title>
</head>
<body></body>
</html>
`,
);

console.log(`\nCompilati: ${tenants.length - failed.length}/${tenants.length}`);
if (failed.length) {
  console.error(`Falliti: ${failed.join(", ")}`);
  process.exit(1);
}
