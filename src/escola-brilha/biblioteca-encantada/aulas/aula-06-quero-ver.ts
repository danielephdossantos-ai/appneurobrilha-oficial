/**
 * Aula 6 — "QUERO VER"
 * PECS Fase III (discriminação entre 2 figuras funcionais) + verbo VER.
 * Palavras-alvo: ELEFANTE e TARTARUGA.
 */
import type { AulaBE } from "../types";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula06QueroVer: AulaBE = {
  slug: "aula-06-quero-ver",
  numero: 6,
  titulo: "QUERO VER",
  objetivo:
    "Pedir funcional com verbo VER (PECS Fase III). Palavras-alvo: ELEFANTE e TARTARUGA.",
  palavrasAlvo: ["ELEFANTE", "TARTARUGA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente vai pedir: QUERO VER. Quando a gente quer ver, a gente aponta e fala.",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um ELEFANTE gigante! E-LE-FAN-TE.",
      imagem: elefante,
      palavra: "ELEFANTE",
    },
    {
      tipo: "pecs",
      fala: "QUERO VER o ELEFANTE. Toca no ELEFANTE.",
      palavra: "ELEFANTE",
      imagem: elefante,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Isso! Você pediu: QUERO VER o ELEFANTE. Que bom!",
      imagem: elefante,
    },
    {
      tipo: "olha",
      fala: "OLHA! Uma TARTARUGA devagarinho. TAR-TA-RU-GA.",
      imagem: tartaruga,
      palavra: "TARTARUGA",
    },
    {
      tipo: "pecs",
      fala: "QUERO VER a TARTARUGA. Toca na TARTARUGA.",
      palavra: "TARTARUGA",
      imagem: tartaruga,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! QUERO VER a TARTARUGA. Você pediu certinho!",
      imagem: tartaruga,
    },
    {
      tipo: "fim",
      fala:
        "Aprendemos a pedir QUERO VER. ELEFANTE e TARTARUGA. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
