/**
 * Aula 8 — "DORME" (Semana 2 · fechamento)
 * Verbo funcional (rotina TEACCH · dia/noite) + generalização com animais.
 * Palavras-alvo: DORME e CORUJA.
 */
import type { AulaBE } from "../types";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula08Dorme: AulaBE = {
  slug: "aula-08-dorme",
  numero: 8,
  titulo: "DORME",
  objetivo:
    "Verbo DORME (rotina dia/noite) e reconhecimento da CORUJA. Fecha a Semana 2.",
  palavrasAlvo: ["DORME", "CORUJA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: DORME. Quando a noite chega, o bichinho DORME. Shhh!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! Uma CORUJA! CO-RU-JA. De dia, a coruja DORME.",
      imagem: coruja,
      palavra: "CORUJA",
    },
    {
      tipo: "pecs",
      fala: "Toca na CORUJA que DORME.",
      palavra: "CORUJA",
      imagem: coruja,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Isso! A CORUJA DORME de dia. Shhh, silêncio!",
      imagem: coruja,
    },
    {
      tipo: "olha",
      fala: "OLHA o LEÃO! O leão também DORME. LE-ÃO DORME.",
      imagem: leao,
      palavra: "DORME",
    },
    {
      tipo: "pecs",
      fala: "Toca no LEÃO que DORME.",
      palavra: "LEÃO",
      imagem: leao,
      distratores: [{ palavra: "MACACO", imagem: macaco }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! LEÃO DORME. Você aprendeu o verbo DORME!",
      imagem: leao,
    },
    {
      tipo: "fim",
      fala:
        "Fim da Semana 2! Você aprendeu OI, QUERO VER, GRANDE e DORME. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
