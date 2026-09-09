/**
 * Aula 26 — "ANDA"
 * Verbo funcional. ÔNIBUS ANDA; CAMINHÃO ANDA.
 */
import type { AulaBE } from "../types";
import { url as onibus } from "@/assets/hiperfocos/carros/onibus.png.asset.json";
import { url as caminhao } from "@/assets/hiperfocos/carros/caminhao.png.asset.json";
import { url as moto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula26Anda: AulaBE = {
  slug: "aula-26-anda",
  numero: 26,
  titulo: "ANDA",
  objetivo:
    "Aprender ANDA. Associar movimento a ÔNIBUS e CAMINHÃO.",
  palavrasAlvo: ["ANDA", "ONIBUS"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente aprende: ANDA! O que ANDA na rua?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o ÔNIBUS! Ô-ni-bus. Ele ANDA com muita gente dentro!",
      imagem: onibus,
      palavra: "ONIBUS",
    },
    {
      tipo: "pecs",
      fala: "Toca no ÔNIBUS, o que ANDA cheio de gente.",
      palavra: "ONIBUS",
      imagem: onibus,
      distratores: [{ palavra: "MOTO", imagem: moto }],
    },
    {
      tipo: "reforco",
      fala: "Isso! ÔNIBUS ANDA!",
      imagem: onibus,
    },
    {
      tipo: "olha",
      fala: "OLHA o CAMINHÃO! Ca-mi-nhão. Ele ANDA e leva coisas grandes!",
      imagem: caminhao,
      palavra: "ANDA",
    },
    {
      tipo: "pecs",
      fala: "Toca no CAMINHÃO.",
      palavra: "CAMINHAO",
      imagem: caminhao,
      distratores: [{ palavra: "MOTO", imagem: moto }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! CAMINHÃO ANDA!",
      imagem: caminhao,
    },
    {
      tipo: "fim",
      fala: "ANDA! ÔNIBUS e CAMINHÃO. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
