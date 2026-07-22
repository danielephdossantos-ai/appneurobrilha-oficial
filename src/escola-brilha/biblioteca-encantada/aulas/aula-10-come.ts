/**
 * Aula 10 — "COME"
 * Verbo funcional COME (rotina de alimentação · ABA).
 * Palavras-alvo: COME e CAVALO.
 */
import type { AulaBE } from "../types";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as vaca } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula10Come: AulaBE = {
  slug: "aula-10-come",
  numero: 10,
  titulo: "COME",
  objetivo:
    "Verbo COME (rotina de alimentação). Generaliza com animais da fazenda.",
  palavrasAlvo: ["COME", "CAVALO"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: COME. Quando o bichinho tem fome, ele COME. Nhac nhac!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o CAVALO! O cavalo COME capim. CO-ME.",
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
      tipo: "olha",
      fala: "OLHA a VACA! A vaca também COME. CO-ME.",
      imagem: vaca,
      palavra: "COME",
    },
    {
      tipo: "pecs",
      fala: "Toca na VACA que COME.",
      palavra: "VACA",
      imagem: vaca,
      distratores: [{ palavra: "CORUJA", imagem: coruja }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! A VACA COME. Você aprendeu o verbo COME!",
      imagem: vaca,
    },
    {
      tipo: "fim",
      fala: "COME! Cavalo come, vaca come. Você foi demais! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
