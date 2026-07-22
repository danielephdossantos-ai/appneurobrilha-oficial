/**
 * Aula 4 — "ACABOU"
 * TEACCH: rotina com fim previsível. Ensina a fechar interação e revisa
 * VACA e PORQUINHO. Fecha a Semana 1 da Biblioteca Encantada.
 */
import type { AulaBE } from "../types";
import { url as vaquinha } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as porquinho } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula04Acabou: AulaBE = {
  slug: "aula-04-acabou",
  numero: 4,
  titulo: "ACABOU",
  objetivo:
    "TEACCH — fechar rotina com previsibilidade. Revisa VACA e PORQUINHO e introduz ACABOU.",
  palavrasAlvo: ["VACA", "PORQUINHO"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende uma palavra importante: ACABOU. Quando terminou, a gente fala ACABOU.",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! A VACA voltou! VA-CA.",
      imagem: vaquinha,
      palavra: "VACA",
    },
    {
      tipo: "pecs",
      fala: "Toca na VACA.",
      palavra: "VACA",
      imagem: vaquinha,
      distratores: [{ palavra: "GALINHA", imagem: galinha }],
    },
    {
      tipo: "reforco",
      fala: "Isso! VACA! Agora vamos falar: VACA, ACABOU!",
      imagem: vaquinha,
    },
    {
      tipo: "olha",
      fala: "OLHA! O PORQUINHO também! POR-QUI-NHO.",
      imagem: porquinho,
      palavra: "PORQUINHO",
    },
    {
      tipo: "pecs",
      fala: "Toca no PORQUINHO.",
      palavra: "PORQUINHO",
      imagem: porquinho,
      distratores: [{ palavra: "GALINHA", imagem: galinha }],
    },
    {
      tipo: "reforco",
      fala: "Muito bem! PORQUINHO, ACABOU! Você aprendeu a fechar.",
      imagem: porquinho,
    },
    {
      tipo: "fim",
      fala:
        "ACABOU a aula! Você foi incrível. A Pip volta amanhã. Tchau, beijo!",
      imagem: pipVet,
    },
  ],
};
