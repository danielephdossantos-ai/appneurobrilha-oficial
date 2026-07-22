/**
 * Aula 2 — "QUERO"
 * PECS Fase II: iniciativa comunicativa. A criança "pede" tocando na figura
 * do que quer. Palavras-alvo: PORQUINHO e OVELHA.
 */
import type { AulaBE } from "../types";
import { url as porquinho } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula02Quero: AulaBE = {
  slug: "aula-02-quero",
  numero: 2,
  titulo: "QUERO",
  objetivo:
    "PECS Fase II — iniciar pedido tocando a figura. Palavras-alvo: PORQUINHO e OVELHA.",
  palavrasAlvo: ["PORQUINHO", "OVELHA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi de novo! Sou a Pip. Hoje a gente vai pedir. Quando você QUER, você toca na figura, tá?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um PORQUINHO! POR-QUI-NHO.",
      imagem: porquinho,
      palavra: "PORQUINHO",
    },
    {
      tipo: "pecs",
      fala: "Toca no PORQUINHO pra dizer QUERO.",
      palavra: "PORQUINHO",
      imagem: porquinho,
      distratores: [{ palavra: "GALINHA", imagem: galinha }],
    },
    {
      tipo: "reforco",
      fala: "Isso! Você pediu o PORQUINHO! QUERO PORQUINHO!",
      imagem: porquinho,
    },
    {
      tipo: "olha",
      fala: "Agora OLHA! Uma OVELHA! O-VE-LHA.",
      imagem: ovelha,
      palavra: "OVELHA",
    },
    {
      tipo: "pecs",
      fala: "Toca na OVELHA pra dizer QUERO.",
      palavra: "OVELHA",
      imagem: ovelha,
      distratores: [{ palavra: "GALINHA", imagem: galinha }],
    },
    {
      tipo: "reforco",
      fala: "Muito bem! QUERO OVELHA! Você pediu direitinho.",
      imagem: ovelha,
    },
    {
      tipo: "fim",
      fala:
        "Hoje você aprendeu a pedir: QUERO PORQUINHO e QUERO OVELHA. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
