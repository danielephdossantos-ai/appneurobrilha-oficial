/**
 * Aula 23 — "BRILHA"
 * Adjetivo/verbo funcional. Estrela BRILHA; Lua BRILHA.
 * Palavras-alvo: BRILHA e ESTRELA.
 */
import type { AulaBE } from "../types";
import { url as estrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula23Brilha: AulaBE = {
  slug: "aula-23-brilha",
  numero: 23,
  titulo: "BRILHA",
  objetivo:
    "Aprender BRILHA. Associar brilho à ESTRELA e à LUA.",
  palavrasAlvo: ["BRILHA", "ESTRELA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente aprende: BRILHA! O que BRILHA no céu?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA a ESTRELA! Es-tre-la. Ela BRILHA! Piscando no céu!",
      imagem: estrela,
      palavra: "ESTRELA",
    },
    {
      tipo: "pecs",
      fala: "Toca na ESTRELA, a que BRILHA.",
      palavra: "ESTRELA",
      imagem: estrela,
      distratores: [{ palavra: "FOGUETE", imagem: foguete }],
    },
    {
      tipo: "reforco",
      fala: "Isso! ESTRELA BRILHA!",
      imagem: estrela,
    },
    {
      tipo: "olha",
      fala: "OLHA a LUA! A LUA também BRILHA de noite!",
      imagem: lua,
      palavra: "BRILHA",
    },
    {
      tipo: "pecs",
      fala: "Toca no que BRILHA de noite: LUA.",
      palavra: "LUA",
      imagem: lua,
      distratores: [{ palavra: "FOGUETE", imagem: foguete }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! LUA BRILHA! Que linda!",
      imagem: lua,
    },
    {
      tipo: "fim",
      fala: "BRILHA! ESTRELA e LUA. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
