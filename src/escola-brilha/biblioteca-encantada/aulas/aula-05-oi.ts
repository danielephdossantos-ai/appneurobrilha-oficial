/**
 * Aula 5 — "OI!" (Semana 2 · abertura)
 * Cumprimento social (Denver/ESDM · pragmática) + generalização PECS Fase II
 * com novos itens (zoológico). Palavras-alvo: LEÃO e MACACO.
 */
import type { AulaBE } from "../types";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula05Oi: AulaBE = {
  slug: "aula-05-oi",
  numero: 5,
  titulo: "OI!",
  objetivo:
    "Cumprimento social + generalização PECS com novos animais (LEÃO, MACACO).",
  palavrasAlvo: ["LEÃO", "MACACO"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "OI! Hoje a Pip trouxe amigos novos do zoológico. Fala comigo: OI!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um LEÃO! LE-ÃO. Fala oi pro leão: OI, LEÃO!",
      imagem: leao,
      palavra: "LEÃO",
    },
    {
      tipo: "pecs",
      fala: "Toca no LEÃO pra dar OI.",
      palavra: "LEÃO",
      imagem: leao,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Isso! OI, LEÃO! Você cumprimentou muito bem.",
      imagem: leao,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um MACACO! MA-CA-CO. OI, MACACO!",
      imagem: macaco,
      palavra: "MACACO",
    },
    {
      tipo: "pecs",
      fala: "Toca no MACACO pra dar OI.",
      palavra: "MACACO",
      imagem: macaco,
      distratores: [{ palavra: "TARTARUGA", imagem: tartaruga }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! OI, MACACO! Que amigo legal.",
      imagem: macaco,
    },
    {
      tipo: "fim",
      fala:
        "A gente aprendeu a dar OI pro LEÃO e pro MACACO. Beijo da Pip, até já!",
      imagem: pipVet,
    },
  ],
};
