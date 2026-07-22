/**
 * Aula 21 — "OLHA! FOGUETE"
 * Abre o Módulo 3 (tema Espaço). Novo vocabulário, mesma base ABA/PECS/TEACCH.
 * Palavras-alvo: FOGUETE e LUA.
 */
import type { AulaBE } from "../types";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula21OlhaFoguete: AulaBE = {
  slug: "aula-21-olha-foguete",
  numero: 21,
  titulo: "OLHA! FOGUETE",
  objetivo:
    "Abrir o novo tema (espaço) mantendo a rotina TEACCH. Atenção conjunta e nomeação de FOGUETE e LUA.",
  palavrasAlvo: ["FOGUETE", "LUA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje começa uma aventura NOVA! A gente vai pro ESPAÇO! Vem comigo!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! É o FOGUETE! Fo-gue-te. Ele voa lá pro céu!",
      imagem: foguete,
      palavra: "FOGUETE",
    },
    {
      tipo: "pecs",
      fala: "Toca no FOGUETE.",
      palavra: "FOGUETE",
      imagem: foguete,
      distratores: [{ palavra: "LUA", imagem: lua }],
    },
    {
      tipo: "reforco",
      fala: "Isso! Esse é o FOGUETE! Shhhhhu!",
      imagem: foguete,
    },
    {
      tipo: "olha",
      fala: "OLHA a LUA! Redondinha lá no céu! Aparece de noite.",
      imagem: lua,
      palavra: "LUA",
    },
    {
      tipo: "pecs",
      fala: "Toca na LUA, a redondinha do céu.",
      palavra: "LUA",
      imagem: lua,
      distratores: [{ palavra: "FOGUETE", imagem: foguete }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! LUA! Que bonita!",
      imagem: lua,
    },
    {
      tipo: "fim",
      fala:
        "Você conheceu o FOGUETE e a LUA! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
