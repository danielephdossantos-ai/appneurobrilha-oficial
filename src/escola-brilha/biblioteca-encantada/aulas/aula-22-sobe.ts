/**
 * Aula 22 — "SOBE"
 * Verbo de ação. Foguete SOBE pro céu; astronauta SOBE no foguete.
 * Palavras-alvo: SOBE e ASTRONAUTA.
 */
import type { AulaBE } from "../types";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as astronauta } from "@/assets/hiperfocos/espaco/astronauta.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula22Sobe: AulaBE = {
  slug: "aula-22-sobe",
  numero: 22,
  titulo: "SOBE",
  objetivo:
    "Aprender o verbo SOBE (movimento pra cima). Introduzir ASTRONAUTA.",
  palavrasAlvo: ["SOBE", "ASTRONAUTA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente aprende: SOBE! O que SOBE lá pro céu?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o FOGUETE! Ele SOBE! Vai lá pra cima! Shhhhhu!",
      imagem: foguete,
      palavra: "SOBE",
    },
    {
      tipo: "pecs",
      fala: "Toca no que SOBE pro céu: FOGUETE.",
      palavra: "FOGUETE",
      imagem: foguete,
      distratores: [{ palavra: "LUA", imagem: lua }],
    },
    {
      tipo: "reforco",
      fala: "Isso! FOGUETE SOBE!",
      imagem: foguete,
    },
    {
      tipo: "olha",
      fala: "OLHA o ASTRONAUTA! As-tro-nau-ta. Ele SOBE no foguete!",
      imagem: astronauta,
      palavra: "ASTRONAUTA",
    },
    {
      tipo: "pecs",
      fala: "Toca no ASTRONAUTA.",
      palavra: "ASTRONAUTA",
      imagem: astronauta,
      distratores: [{ palavra: "LUA", imagem: lua }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! ASTRONAUTA! Ele vai pro espaço!",
      imagem: astronauta,
    },
    {
      tipo: "fim",
      fala: "Você aprendeu SOBE e ASTRONAUTA! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
