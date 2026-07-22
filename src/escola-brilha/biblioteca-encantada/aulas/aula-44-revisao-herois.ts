import type { AulaBE } from "../types";
import { url as heroi } from "@/assets/hiperfocos/herois/heroi.png.asset.json";
import { url as heroina } from "@/assets/hiperfocos/herois/heroina.png.asset.json";
import { url as capita } from "@/assets/hiperfocos/herois/capita.png.asset.json";
import { url as justiceiro } from "@/assets/hiperfocos/herois/justiceiro.png.asset.json";
import { url as robo } from "@/assets/hiperfocos/herois/robo.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula44RevisaoHerois: AulaBE = {
  slug: "aula-44-revisao-herois",
  numero: 44,
  titulo: "REVISÃO HERÓIS",
  objetivo: "Fechar a Semana 11. Recuperar HERÓI, HEROÍNA, CAPITÃ, JUSTICEIRO e ROBÔ.",
  palavrasAlvo: ["HEROIS"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa dos HERÓIS!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no HERÓI.",
    "palavra": "HEROI",
    "imagem": heroi_TOKEN,
    "distratores": [
      {
        "palavra": "ROBO",
        "imagem": robo_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! HERÓI!",
    "imagem": heroi_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na HEROÍNA.",
    "palavra": "HEROINA",
    "imagem": heroina_TOKEN,
    "distratores": [
      {
        "palavra": "CAPITA",
        "imagem": capita_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! HEROÍNA!",
    "imagem": heroina_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca em quem SALVA a cidade (CAPITÃ).",
    "palavra": "CAPITA",
    "imagem": capita_TOKEN,
    "distratores": [
      {
        "palavra": "JUSTICEIRO",
        "imagem": justiceiro_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CAPITÃ SALVA!",
    "imagem": capita_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você conhece HERÓIS! Beijo da Pip!",
    "imagem": pipVet_TOKEN
  }
],
};
