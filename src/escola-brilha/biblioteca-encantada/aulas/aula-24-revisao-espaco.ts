/**
 * Aula 24 — "REVISÃO ESPAÇO"
 * Fecha a Semana 6. Generaliza FOGUETE, LUA, ASTRONAUTA, ESTRELA + verbos SOBE/BRILHA.
 */
import type { AulaBE } from "../types";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as astronauta } from "@/assets/hiperfocos/espaco/astronauta.png.asset.json";
import { url as estrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as planeta } from "@/assets/hiperfocos/espaco/planeta.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula24RevisaoEspaco: AulaBE = {
  slug: "aula-24-revisao-espaco",
  numero: 24,
  titulo: "REVISÃO ESPAÇO",
  objetivo:
    "Fechar a Semana 6. Recuperar FOGUETE, LUA, ASTRONAUTA, ESTRELA e introduzir PLANETA.",
  palavrasAlvo: ["ESPAÇO", "PLANETA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Festa do ESPAÇO! Vamos lembrar tudo!",
      imagem: pipVet,
    },
    {
      tipo: "pecs",
      fala: "Toca no FOGUETE, o que SOBE!",
      palavra: "FOGUETE",
      imagem: foguete,
      distratores: [{ palavra: "LUA", imagem: lua }],
    },
    {
      tipo: "reforco",
      fala: "Isso! FOGUETE SOBE! Shhhhu!",
      imagem: foguete,
    },
    {
      tipo: "pecs",
      fala: "Toca no ASTRONAUTA.",
      palavra: "ASTRONAUTA",
      imagem: astronauta,
      distratores: [{ palavra: "ESTRELA", imagem: estrela }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! ASTRONAUTA no espaço!",
      imagem: astronauta,
    },
    {
      tipo: "pecs",
      fala: "Toca na que BRILHA piscando: ESTRELA.",
      palavra: "ESTRELA",
      imagem: estrela,
      distratores: [{ palavra: "LUA", imagem: lua }],
    },
    {
      tipo: "reforco",
      fala: "Isso! ESTRELA BRILHA!",
      imagem: estrela,
    },
    {
      tipo: "olha",
      fala: "OLHA um PLANETA! Pla-ne-ta. Uma bola gigante no espaço!",
      imagem: planeta,
      palavra: "PLANETA",
    },
    {
      tipo: "pecs",
      fala: "Toca no PLANETA.",
      palavra: "PLANETA",
      imagem: planeta,
      distratores: [{ palavra: "FOGUETE", imagem: foguete }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! PLANETA!",
      imagem: planeta,
    },
    {
      tipo: "fim",
      fala:
        "Você conhece o ESPAÇO! FOGUETE, LUA, ASTRONAUTA, ESTRELA e PLANETA. Você arrasou! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
