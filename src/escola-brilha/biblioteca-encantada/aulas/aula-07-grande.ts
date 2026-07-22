/**
 * Aula 7 — "GRANDE"
 * Conceito de tamanho (linguagem receptiva · ABA discriminação).
 * Contrasta ELEFANTE (grande) vs MACACO (pequeno). Palavra-alvo: GRANDE.
 */
import type { AulaBE } from "../types";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula07Grande: AulaBE = {
  slug: "aula-07-grande",
  numero: 7,
  titulo: "GRANDE",
  objetivo:
    "Discriminação de tamanho (GRANDE) com contraste elefante × macaco.",
  palavrasAlvo: ["GRANDE", "ELEFANTE"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: GRANDE. Uma coisa GRANDE é bem grandona!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o ELEFANTE! Ele é GRANDE! GRAN-DE.",
      imagem: elefante,
      palavra: "GRANDE",
    },
    {
      tipo: "pecs",
      fala: "Toca no que é GRANDE.",
      palavra: "ELEFANTE",
      imagem: elefante,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Isso! O ELEFANTE é GRANDE! Muito bem!",
      imagem: elefante,
    },
    {
      tipo: "olha",
      fala: "OLHA o LEÃO! O leão também é GRANDE! GRAN-DE.",
      imagem: leao,
      palavra: "GRANDE",
    },
    {
      tipo: "pecs",
      fala: "Toca no animal GRANDE.",
      palavra: "LEÃO",
      imagem: leao,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! O LEÃO é GRANDE! Você aprendeu!",
      imagem: leao,
    },
    {
      tipo: "fim",
      fala:
        "GRANDE! Elefante GRANDE, leão GRANDE. Você foi incrível! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
