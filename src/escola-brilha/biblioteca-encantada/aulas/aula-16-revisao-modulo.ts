/**
 * Aula 16 — "REVISÃO DO MÓDULO"
 * Fechamento das 16 primeiras aulas da Biblioteca Encantada.
 * Generalização: OLHA, QUERO, MAIS, ACABOU, GRANDE, PEQUENO, IGUAL, DIFERENTE, SIM, NÃO.
 */
import type { AulaBE } from "../types";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula16RevisaoModulo: AulaBE = {
  slug: "aula-16-revisao-modulo",
  numero: 16,
  titulo: "REVISÃO",
  objetivo:
    "Fechamento das 16 primeiras aulas. Generalização e manutenção ABA de tudo que foi aprendido.",
  palavrasAlvo: ["GRANDE", "DIFERENTE"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje é festa! A gente vai lembrar TUDO que aprendeu. Você mandou muito bem!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "Lembra? O ELEFANTE é GRANDE. GRAN-DE.",
      imagem: elefante,
      palavra: "GRANDE",
    },
    {
      tipo: "pecs",
      fala: "Toca no animal GRANDE.",
      palavra: "ELEFANTE",
      imagem: elefante,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Isso! ELEFANTE é GRANDE. Você lembrou!",
      imagem: elefante,
    },
    {
      tipo: "pecs",
      fala: "A GALINHA disse SIM pro milho. Toca na GALINHA.",
      palavra: "GALINHA",
      imagem: galinha,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! GALINHA disse SIM! Nhac nhac!",
      imagem: galinha,
    },
    {
      tipo: "pecs",
      fala: "Acha a OVELHA IGUAL. Toca na ovelha.",
      palavra: "OVELHA",
      imagem: ovelha,
      distratores: [{ palavra: "LEÃO", imagem: leao }],
    },
    {
      tipo: "reforco",
      fala: "Isso! OVELHA IGUAL. Você é craque em achar!",
      imagem: ovelha,
    },
    {
      tipo: "pecs",
      fala: "Toca no que é DIFERENTE do cavalo.",
      palavra: "CORUJA",
      imagem: coruja,
      distratores: [{ palavra: "CAVALO", imagem: cavalo }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! CORUJA é DIFERENTE do cavalo!",
      imagem: coruja,
    },
    {
      tipo: "fim",
      fala:
        "Você terminou 16 aulas! OLHA, QUERO, MAIS, SIM, NÃO, GRANDE, PEQUENO, IGUAL, DIFERENTE. Você é demais! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
