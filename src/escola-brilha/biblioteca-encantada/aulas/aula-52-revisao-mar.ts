import type { AulaBE } from "../types";
import { url as sereia } from "@/assets/hiperfocos/sereias/sereia.png.asset.json";
import { url as peixinho } from "@/assets/hiperfocos/sereias/peixinho.png.asset.json";
import { url as cavalomar } from "@/assets/hiperfocos/sereias/cavalo-marinho.png.asset.json";
import { url as concha } from "@/assets/hiperfocos/sereias/concha.png.asset.json";
import { url as perola } from "@/assets/hiperfocos/sereias/perola.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula52RevisaoMar: AulaBE = {
  slug: "aula-52-revisao-mar",
  numero: 52,
  titulo: "REVISÃO MAR",
  objetivo: "Fechar a Semana 13. Recuperar SEREIA, PEIXINHO, CAVALO MARINHO, CONCHA e PÉROLA.",
  palavrasAlvo: ["MAR"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa do FUNDO DO MAR!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na SEREIA.",
    "palavra": "SEREIA",
    "imagem": sereia_TOKEN,
    "distratores": [
      {
        "palavra": "CAVALOMAR",
        "imagem": cavalomar_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! SEREIA!",
    "imagem": sereia_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no que NADA (PEIXINHO).",
    "palavra": "PEIXINHO",
    "imagem": peixinho_TOKEN,
    "distratores": [
      {
        "palavra": "CONCHA",
        "imagem": concha_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PEIXINHO NADA!",
    "imagem": peixinho_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PÉROLA.",
    "palavra": "PEROLA",
    "imagem": perola_TOKEN,
    "distratores": [
      {
        "palavra": "SEREIA",
        "imagem": sereia_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PÉROLA!",
    "imagem": perola_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você conhece o MAR! Beijo da Pip!",
    "imagem": pipVet_TOKEN
  }
],
};
