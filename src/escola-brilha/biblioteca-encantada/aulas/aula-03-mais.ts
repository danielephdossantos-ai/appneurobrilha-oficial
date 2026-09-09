/**
 * Aula 3 — "MAIS"
 * ABA/Denver: pedir MAIS de algo motivador. Generaliza pedido com um item novo
 * (GALINHA) e revisa CAVALO da Aula 1.
 */
import type { AulaBE } from "../types";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula03Mais: AulaBE = {
  slug: "aula-03-mais",
  numero: 3,
  titulo: "MAIS",
  objetivo:
    "Pedir MAIS (função pragmática ABA). Palavras-alvo: GALINHA (nova) e CAVALO (revisão).",
  palavrasAlvo: ["GALINHA", "CAVALO"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente vai pedir MAIS. Quando gosta, a gente pede MAIS. Bora?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Uma GALINHA! GA-LI-NHA. Fala comigo: GALINHA.",
      imagem: galinha,
      palavra: "GALINHA",
    },
    {
      tipo: "pecs",
      fala: "Toca na GALINHA pra pedir MAIS GALINHA.",
      palavra: "GALINHA",
      imagem: galinha,
      distratores: [{ palavra: "OVELHA", imagem: ovelha }],
    },
    {
      tipo: "reforco",
      fala: "Isso! MAIS GALINHA! Você pediu comigo!",
      imagem: galinha,
    },
    {
      tipo: "olha",
      fala: "Lembra do CAVALO? OLHA! CA-VA-LO.",
      imagem: cavalo,
      palavra: "CAVALO",
    },
    {
      tipo: "pecs",
      fala: "Toca no CAVALO pra pedir MAIS CAVALO.",
      palavra: "CAVALO",
      imagem: cavalo,
      distratores: [{ palavra: "OVELHA", imagem: ovelha }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! MAIS CAVALO! Você lembrou!",
      imagem: cavalo,
    },
    {
      tipo: "fim",
      fala:
        "Hoje a gente pediu MAIS GALINHA e MAIS CAVALO. Você foi demais! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
