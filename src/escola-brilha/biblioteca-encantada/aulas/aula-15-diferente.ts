/**
 * Aula 15 — "DIFERENTE"
 * Discriminação (contraste com IGUAL · ABA/Denver).
 * Palavras-alvo: DIFERENTE e ELEFANTE.
 */
import type { AulaBE } from "../types";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula15Diferente: AulaBE = {
  slug: "aula-15-diferente",
  numero: 15,
  titulo: "DIFERENTE",
  objetivo:
    "Discriminação por contraste (oposto de IGUAL). Achar o DIFERENTE.",
  palavrasAlvo: ["DIFERENTE", "ELEFANTE"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: DIFERENTE. Quando duas coisas não são iguais, elas são DIFERENTES!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o ELEFANTE! E-LE-FAN-TE. Bem GRANDE!",
      imagem: elefante,
      palavra: "ELEFANTE",
    },
    {
      tipo: "pecs",
      fala: "Um é ELEFANTE, outro é MACACO. Toca no que é DIFERENTE do macaco.",
      palavra: "ELEFANTE",
      imagem: elefante,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Isso! O ELEFANTE é DIFERENTE do macaco! Bem diferente!",
      imagem: elefante,
    },
    {
      tipo: "olha",
      fala: "OLHA o LEÃO! O leão é DIFERENTE da ovelha. Um ruge, outra faz béé!",
      imagem: leao,
      palavra: "DIFERENTE",
    },
    {
      tipo: "pecs",
      fala: "Toca no que é DIFERENTE da ovelha.",
      palavra: "LEÃO",
      imagem: leao,
      distratores: [{ palavra: "OVELHA", imagem: ovelha }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! LEÃO e ovelha são DIFERENTES! Você viu!",
      imagem: leao,
    },
    {
      tipo: "fim",
      fala:
        "DIFERENTE! Você aprendeu a ver o que é diferente. Craque! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
