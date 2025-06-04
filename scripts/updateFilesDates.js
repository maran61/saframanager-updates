// scripts/updateFilesDates.js

/**
 * Este script:
 * 1. Lê 'src/data/filesData.js' para obter o array sem datas.
 * 2. Para cada item, usa o downloadUrl para montar o caminho no disco em 'public/files/...'.
 * 3. Faz fs.stat() para pegar a data de modificação (mtime).
 * 4. Preenche `additionalInfo` com "Última atualização: dd/mm/yyyy".
 * 5. Grava o resultado em 'src/data/filesData.withDates.js'.
 */

import { promises } from "fs";
import { join } from "path";

import { filesData } from "../src/data/filesData.tsx";

// Função utilitária para formatar Date em dd/mm/yyyy
function formatDateBR(dateObj) {
  const d = new Date(dateObj);
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

async function main() {
  // Vamos gerar um novo array com datas preenchidas
  const updatedFiles = await Promise.all(
    filesData.map(async (file) => {
      // `file.downloadUrl` é algo como "/files/gps/GPS_V1.1.7.apk"
      // Precisamos mapear para o caminho físico "public/files/gps/GPS_V1.1.7.apk"
      const relativeUrl = file.downloadUrl.startsWith("/")
        ? file.downloadUrl.slice(1) // remove a barra inicial
        : file.downloadUrl;
      const fullPath = join(__dirname, "..", "public", relativeUrl);

      try {
        const stats = await promises.stat(fullPath);
        const dataModificacao = stats.mtime; // mtime = last modified
        const dataFormatada = formatDateBR(dataModificacao);

        return {
          ...file,
          additionalInfo: `Última atualização: ${dataFormatada}`,
        };
      } catch (err) {
        console.warn(
          `[updateFilesDates] Não foi possível ler stats de ${fullPath}: ${err.message}`
        );
        return {
          ...file,
          additionalInfo: "Última atualização: Indisponível",
        };
      }
    })
  );

  // Converte o array em string JS (serializado), para gerar um arquivo .js
  const outputPath = join(
    __dirname,
    "..",
    "src",
    "data",
    "filesData.withDates.js"
  );
  const fileContents = `export const filesData = ${JSON.stringify(
    updatedFiles,
    null,
    2
  )};\n`;

  await promises.writeFile(outputPath, fileContents, "utf-8");
  console.log(`✔ Arquivo gerado: ${outputPath}`);
}

main().catch((e) => {
  console.error("❌ Erro ao executar updateFilesDates.js:", e);
  process.exit(1);
});
