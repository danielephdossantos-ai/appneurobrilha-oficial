import type { AulaBE } from "../types";
import { url as heroi } from "@/assets/hiperfocos/herois/heroi.png.asset.json";
import { url as robo } from "@/assets/hiperfocos/herois/robo.png.asset.json";
import { url as capita } from "@/assets/hiperfocos/herois/capita.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula43VoaHeroi: AulaBE = {
  slug: "aula-43-voa-heroi",
  numero: 43,
  titulo: "VOA (HERÓI)",
  objetivo: "Generalizar VOA com HERÓI + ROBÔ HERÓI.",
  palavrasAlvo: ["VOA","ROBO"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! O HERÓI VOA no céu!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA o HERÓI VOAR! Uau!",
    "imagem": heroi,
    "palavra": "HEROI"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no HERÓI que VOA.",
    "palavra": "HEROI",
    "imagem": heroi,
    "distratores": [
      {
        "palavra": "CAPITA",
        "imagem": capita
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! HERÓI VOA!",
    "imagem": heroi
  },
  {
    "tipo": "olha",
    "fala": "OLHA um ROBÔ herói! Ro-bô! Bip bip!",
    "imagem": robo,
    "palavra": "ROBO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no ROBÔ.",
    "palavra": "ROBO",
    "imagem": robo,
    "distratores": [
      {
        "palavra": "HEROI",
        "imagem": heroi
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! ROBÔ!",
    "imagem": robo
  },
  {
    "tipo": "fim",
    "fala": "HERÓI VOA e ROBÔ faz bip! Beijo!",
    "imagem": pipVet
  }
],
};
