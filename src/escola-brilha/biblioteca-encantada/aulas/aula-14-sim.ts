/**
 * Aula 14 — "SIM"
 * Afirmação funcional (mand de aceitação · ABA).
 * Palavras-alvo: SIM e GALINHA.
 */
import type { AulaBE } from "../types";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as porquinho } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula14Sim: AulaBE = {
  slug: "aula-14-sim",
  numero: 14,
  titulo: "SIM",
  objetivo:
    "Afirmação funcional (mand de aceitação). Dizer SIM pro que a gente quer.",
  palavrasAlvo: ["SIM", "GALINHA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: SIM. Quando a gente quer, a gente fala SIM. SIM sim sim!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA a GALINHA! GA-LI-NHA. Ela disse SIM pro milho!",
      imagem: galinha,
      palavra: "GALINHA",
    },
    {
      tipo: "pecs",
      fala: "Toca na GALINHA que disse SIM.",
      palavra: "GALINHA",
      imagem: galinha,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Isso! A GALINHA disse SIM! Quer milho, quer sim!",
      imagem: galinha,
    },
    {
      tipo: "olha",
      fala: "OLHA o PORQUINHO! O porquinho disse SIM pra lama. Adora!",
      imagem: porquinho,
      palavra: "SIM",
    },
    {
      tipo: "pecs",
      fala: "Toca no PORQUINHO que disse SIM.",
      palavra: "PORQUINHO",
      imagem: porquinho,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! Quando quiser, fala SIM! Alto e claro!",
      imagem: porquinho,
    },
    {
      tipo: "fim",
      fala: "SIM! Galinha sim, porquinho sim. Você fala SIM! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
