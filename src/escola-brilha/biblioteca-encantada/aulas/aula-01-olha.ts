/**
 * Aula 1 — "OLHA!"
 * Objetivo: atenção conjunta (Denver/ESDM) + primeiras palavras funcionais (PECS Fase I).
 * Palavras-alvo: CACHORRO e VACA (imagens do banco: cavalo/vaquinha).
 * Nota: usamos cavalo e vaquinha do módulo hiperfocos/fazendinha pra ter certeza
 * de que os arquivos existem no build.
 */
import type { AulaBE } from "../types";
import cavalo from "@/assets/hiperfocos/fazendinha/cavalo.png";
import vaquinha from "@/assets/hiperfocos/fazendinha/vaquinha.png";
import galinha from "@/assets/hiperfocos/fazendinha/galinha.png";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula01Olha: AulaBE = {
  slug: "aula-01-olha",
  numero: 1,
  titulo: "OLHA!",
  objetivo:
    "Atenção conjunta + troca por figura (PECS Fase I). Duas palavras-alvo: CAVALO e VACA.",
  palavrasAlvo: ["CAVALO", "VACA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Eu sou a Pip. Hoje a gente vai olhar juntos. Quando eu falar OLHA, você olha comigo, tá?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Um CAVALO! CA-VA-LO.",
      imagem: cavalo,
      palavra: "CAVALO",
    },
    {
      tipo: "pecs",
      fala: "Toca no CAVALO.",
      palavra: "CAVALO",
      imagem: cavalo,
      distratores: [{ palavra: "GALINHA", imagem: galinha }],
    },
    {
      tipo: "reforco",
      fala: "Isso! CAVALO! Você viu comigo. Muito bem!",
      imagem: cavalo,
    },
    {
      tipo: "olha",
      fala: "Agora OLHA! Uma VACA! VA-CA.",
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
      fala: "Perfeito! VACA! Você tá olhando comigo.",
      imagem: vaquinha,
    },
    {
      tipo: "fim",
      fala:
        "A gente aprendeu duas palavras: CAVALO e VACA. Você foi incrível! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
