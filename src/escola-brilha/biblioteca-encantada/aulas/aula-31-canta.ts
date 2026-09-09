/**
 * Aula 31 — "CANTA"
 * Verbo CANTA + imitação vocal (LÁ LÁ LÁ). Discriminação MICROFONE x PIANO.
 */
import type { AulaBE } from "../types";
import { url as microfone } from "@/assets/hiperfocos/musica/microfone.png.asset.json";
import { url as piano } from "@/assets/hiperfocos/musica/piano.png.asset.json";
import { url as notaMusical } from "@/assets/hiperfocos/musica/nota-musical.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula31Canta: AulaBE = {
  slug: "aula-31-canta",
  numero: 31,
  titulo: "CANTA",
  objetivo:
    "Ensinar CANTA com imitação vocal (LÁ LÁ LÁ). Introduzir NOTA MUSICAL como símbolo do som.",
  palavrasAlvo: ["CANTA", "NOTA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a Pip vai CANTAR com você! Can-ta!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "A Pip CANTA! LÁ LÁ LÁ! Agora você: LÁ LÁ LÁ!",
      imagem: microfone,
      palavra: "CANTA",
    },
    {
      tipo: "pecs",
      fala: "Toca no MICROFONE, onde a gente CANTA.",
      palavra: "MICROFONE",
      imagem: microfone,
      distratores: [{ palavra: "PIANO", imagem: piano }],
    },
    {
      tipo: "reforco",
      fala: "Isso! No MICROFONE a gente CANTA!",
      imagem: microfone,
    },
    {
      tipo: "olha",
      fala: "OLHA uma NOTA MUSICAL! Ela mostra o SOM da música! Lá lá lá!",
      imagem: notaMusical,
      palavra: "NOTA",
    },
    {
      tipo: "pecs",
      fala: "Toca na NOTA MUSICAL.",
      palavra: "NOTA",
      imagem: notaMusical,
      distratores: [{ palavra: "PIANO", imagem: piano }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! NOTA MUSICAL!",
      imagem: notaMusical,
    },
    {
      tipo: "fim",
      fala: "Você CANTOU com a Pip! LÁ LÁ LÁ! Beijo!",
      imagem: pipVet,
    },
  ],
};
