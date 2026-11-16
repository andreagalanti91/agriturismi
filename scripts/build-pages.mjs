/**
 * COMPILA TUTTI I CLIENTI PER GITHUB PAGES
 * ========================================
 *
 *   DEMO_ORIGIN=https://andreagalanti91.github.io DEMO_PATH=/agriturismi \
 *     npm run build:pages
 *
 * Compila ogni cliente di tenants/ come anteprima (vedi build-demo.mjs):
 * ognuno nella sua sottocartella, non indicizzato dai motori di ricerca, più
 * una pagina indice con l'elenco. Il risultato sta in dist/demo/ ed è
 * esattamente quello che il workflow .github/workflows/pages.yml pubblica.
 *
 *   https://andreagalanti91.github.io/agriturismi/            elenco
 *   https://andreagalanti91.github.io/agriturismi/nerbona/    un cliente
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

console.log(`\nCompilati: ${tenants.length - failed.length}/${tenants.length}`);
if (failed.length) {
  console.error(`Falliti: ${failed.join(", ")}`);
  process.exit(1);
}
