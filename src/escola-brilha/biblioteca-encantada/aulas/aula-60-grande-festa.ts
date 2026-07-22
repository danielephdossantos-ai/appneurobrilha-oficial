import type { AulaBE } from "../types";
import { url as steve } from "@/assets/hiperfocos/minecraft/steve.png.asset.json";
import { url as princesa } from "@/assets/hiperfocos/princesas/princesa.png.asset.json";
import { url as heroi } from "@/assets/hiperfocos/herois/heroi.png.asset.json";
import { url as sereia } from "@/assets/hiperfocos/sereias/sereia.png.asset.json";
import { url as bailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as robo } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula60GrandeFesta: AulaBE = {
  slug: "aula-60-grande-festa",
  numero: 60,
  titulo: "GRANDE FESTA",
  objetivo: "Fechar a Semana 15 e comemorar 60 aulas! Recuperar palavras marcantes de vários módulos.",
  palavrasAlvo: ["FESTA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje é FESTA! 60 AULAS! Você é INCRÍVEL!",
    "imagem": pipVet
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA.",
    "palavra": "PRINCESA",
    "imagem": princesa,
    "distratores": [
      {
        "palavra": "HEROI",
        "imagem": heroi
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PRINCESA!",
    "imagem": princesa
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
    "fala": "Perfeito! HERÓI!",
    "imagem": heroi
  },
  {
    "tipo": "pecs",
    "fala": "Toca na SEREIA.",
    "palavra": "SEREIA",
    "imagem": sereia,
    "distratores": [
      {
        "palavra": "BAILARINA",
        "imagem": bailarina
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! SEREIA!",
    "imagem": sereia
  },
  {
    "tipo": "pecs",
    "fala": "Toca na BAILARINA.",
    "palavra": "BAILARINA",
    "imagem": bailarina,
    "distratores": [
      {
        "palavra": "STEVE",
        "imagem": steve
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! BAILARINA!",
    "imagem": bailarina
  },
  {
    "tipo": "pecs",
    "fala": "Toca no ROBÔ.",
    "palavra": "ROBO",
    "imagem": robo,
    "distratores": [
      {
        "palavra": "STEVE",
        "imagem": steve
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! ROBÔ! Bip bip!",
    "imagem": robo
  },
  {
    "tipo": "fim",
    "fala": "PARABÉNS! Você fez 60 AULAS com a Pip! Você é um LEITOR e um AMIGO! Beijo enorme!",
    "imagem": pipVet
  }
],
};
