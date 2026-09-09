/**
 * Aula 12 — "REVISÃO" (fechamento da Semana 3)
 * Generalização das palavras da semana: PEQUENO, COME, IGUAL.
 * Palavras-alvo: revisão (sem novas).
 */
import type { AulaBE } from "../types";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula12Revisao: AulaBE = {
  slug: "aula-12-revisao",
  numero: 12,
  titulo: "REVISÃO",
  objetivo:
    "Generalização da Semana 3: PEQUENO, COME, IGUAL. Manutenção ABA.",
  palavrasAlvo: ["PEQUENO", "COME"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente vai lembrar tudo que aprendeu essa semana. Vamos brincar!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "Lembra? O MACACO é PEQUENO. PE-QUE-NO.",
      imagem: macaco,
      palavra: "PEQUENO",
    },
    {
      tipo: "pecs",
      fala: "Toca no animal PEQUENO.",
      palavra: "MACACO",
      imagem: macaco,
      distratores: [{ palavra: "ELEFANTE", imagem: elefante }],
    },
    {
      tipo: "reforco",
      fala: "Isso! MACACO é PEQUENO. Você lembrou!",
      imagem: macaco,
    },
    {
      tipo: "olha",
      fala: "Lembra? O CAVALO COME. CO-ME.",
      imagem: cavalo,
      palavra: "COME",
    },
    {
      tipo: "pecs",
      fala: "Toca no CAVALO que COME.",
      palavra: "CAVALO",
      imagem: cavalo,
      distratores: [{ palavra: "CORUJA", imagem: coruja }],
    },
    {
      tipo: "reforco",
      fala: "Isso! O CAVALO COME. Nhac nhac!",
      imagem: cavalo,
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
      fala: "Perfeito! OVELHA IGUAL! Você é craque!",
      imagem: ovelha,
    },
    {
      tipo: "fim",
      fala:
        "Fim da Semana 3! PEQUENO, COME e IGUAL. Você mandou muito bem! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
