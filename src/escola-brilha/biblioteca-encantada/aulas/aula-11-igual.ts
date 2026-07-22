/**
 * Aula 11 — "IGUAL"
 * Matching (pareamento) — habilidade-base ABA / Denver.
 * Palavras-alvo: IGUAL e OVELHA.
 */
import type { AulaBE } from "../types";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as porquinho } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula11Igual: AulaBE = {
  slug: "aula-11-igual",
  numero: 11,
  titulo: "IGUAL",
  objetivo:
    "Pareamento (matching). Achar a figura IGUAL — habilidade-base ABA.",
  palavrasAlvo: ["IGUAL", "OVELHA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: IGUAL. Quando duas coisas são iguais, elas são a mesma coisa!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Uma OVELHA! O-VE-LHA. Fofinha!",
      imagem: ovelha,
      palavra: "OVELHA",
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
      fala: "Isso! Você achou a OVELHA IGUAL! Muito bem!",
      imagem: ovelha,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um PORQUINHO! POR-QUI-NHO.",
      imagem: porquinho,
      palavra: "PORQUINHO",
    },
    {
      tipo: "pecs",
      fala: "Acha o PORQUINHO IGUAL. Toca no porquinho.",
      palavra: "PORQUINHO",
      imagem: porquinho,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! Você achou o PORQUINHO IGUAL! Aprendeu!",
      imagem: porquinho,
    },
    {
      tipo: "fim",
      fala:
        "IGUAL! Ovelha igual, porquinho igual. Você é craque em achar! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
