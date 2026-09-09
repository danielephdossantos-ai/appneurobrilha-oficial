/**
 * Aula 29 — "OLHA! VIOLÃO"
 * Abre o Módulo 5 (Música). Introduz VIOLÃO e PIANO.
 */
import type { AulaBE } from "../types";
import { url as violao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as piano } from "@/assets/hiperfocos/musica/piano.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula29OlhaViolao: AulaBE = {
  slug: "aula-29-olha-violao",
  numero: 29,
  titulo: "OLHA! VIOLÃO",
  objetivo:
    "Abrir o Módulo 5 (Música). Nomear VIOLÃO e PIANO com atenção conjunta e discriminação simples.",
  palavrasAlvo: ["VIOLAO", "PIANO"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a Pip trouxe MÚSICA! Olha só que legal!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA um VIOLÃO! Vi-o-lão. Ele faz DEDILHOM DEDILHOM!",
      imagem: violao,
      palavra: "VIOLAO",
    },
    {
      tipo: "pecs",
      fala: "Toca no VIOLÃO.",
      palavra: "VIOLAO",
      imagem: violao,
      distratores: [{ palavra: "PIANO", imagem: piano }],
    },
    {
      tipo: "reforco",
      fala: "Isso! VIOLÃO!",
      imagem: violao,
    },
    {
      tipo: "olha",
      fala: "OLHA um PIANO! Pi-a-no. Ele faz PLIM PLOM!",
      imagem: piano,
      palavra: "PIANO",
    },
    {
      tipo: "pecs",
      fala: "Toca no PIANO.",
      palavra: "PIANO",
      imagem: piano,
      distratores: [{ palavra: "VIOLAO", imagem: violao }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! PIANO!",
      imagem: piano,
    },
    {
      tipo: "fim",
      fala: "Você conheceu VIOLÃO e PIANO! Amanhã tem mais música! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
