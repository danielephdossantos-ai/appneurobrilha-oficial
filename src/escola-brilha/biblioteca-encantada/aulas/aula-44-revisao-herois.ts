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
    "imagem": pipVet
  },
  {
    "tipo": "pecs",
    "fala": "Toca no HERÓI.",
    "palavra": "HEROI",
    "imagem": heroi,
    "distratores": [
      {
        "palavra": "ROBO",
        "imagem": robo
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! HERÓI!",
    "imagem": heroi
  },
  {
    "tipo": "pecs",
    "fala": "Toca na HEROÍNA.",
    "palavra": "HEROINA",
    "imagem": heroina,
    "distratores": [
      {
        "palavra": "CAPITA",
        "imagem": capita
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! HEROÍNA!",
    "imagem": heroina
  },
  {
    "tipo": "pecs",
    "fala": "Toca em quem SALVA a cidade (CAPITÃ).",
    "palavra": "CAPITA",
    "imagem": capita,
    "distratores": [
      {
        "palavra": "JUSTICEIRO",
        "imagem": justiceiro
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CAPITÃ SALVA!",
    "imagem": capita
  },
  {
    "tipo": "fim",
    "fala": "Você conhece HERÓIS! Beijo da Pip!",
    "imagem": pipVet
  }
],
};
