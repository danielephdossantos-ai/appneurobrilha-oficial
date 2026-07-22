/**
 * Aula 9 — "PEQUENO"
 * Conceito de tamanho (par oposto de GRANDE). Discriminação ABA.
 * Palavras-alvo: PEQUENO e MACACO.
 */
import type { AulaBE } from "../types";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula09Pequeno: AulaBE = {
  slug: "aula-09-pequeno",
  numero: 9,
  titulo: "PEQUENO",
  objetivo:
    "Discriminação de tamanho (PEQUENO) por contraste com GRANDE. Palavra-alvo: PEQUENO.",
  palavrasAlvo: ["PEQUENO", "MACACO"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: PEQUENO. Uma coisa PEQUENA é bem pequenininha!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o MACACO! Ele é PEQUENO. PE-QUE-NO.",
      imagem: macaco,
      palavra: "PEQUENO",
    },
    {
      tipo: "pecs",
      fala: "Toca no que é PEQUENO.",
      palavra: "MACACO",
      imagem: macaco,
      distratores: [{ palavra: "ELEFANTE", imagem: elefante }],
    },
    {
      tipo: "reforco",
      fala: "Isso! O MACACO é PEQUENO! Muito bem!",
      imagem: macaco,
    },
    {
      tipo: "olha",
      fala: "OLHA a GALINHA! A galinha também é PEQUENA. PE-QUE-NA.",
      imagem: galinha,
      palavra: "PEQUENO",
    },
    {
      tipo: "pecs",
      fala: "Toca no animal PEQUENO.",
      palavra: "GALINHA",
      imagem: galinha,
      distratores: [{ palavra: "ELEFANTE", imagem: elefante }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! A GALINHA é PEQUENA! Você aprendeu!",
      imagem: galinha,
    },
    {
      tipo: "fim",
      fala:
        "PEQUENO! Macaco pequeno, galinha pequena. Você foi incrível! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
