import type { AulaBE } from "../types";
import { url as astro } from "@/assets/hiperfocos/robos/astronauta-bot.png.asset.json";
import { url as engrenagem } from "@/assets/hiperfocos/robos/engrenagem.png.asset.json";
import { url as robo } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula47AstronautaBot: AulaBE = {
  slug: "aula-47-astronauta-bot",
  numero: 47,
  titulo: "ASTRONAUTA BOT",
  objetivo: "Nomear ASTRONAUTA BOT e ENGRENAGEM.",
  palavrasAlvo: ["ASTRONAUTA","ENGRENAGEM"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Um ROBÔ ASTRONAUTA!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA o ASTRONAUTA BOT! As-tro-nau-ta!",
    "imagem": astro,
    "palavra": "ASTRONAUTA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no ASTRONAUTA BOT.",
    "palavra": "ASTRONAUTA",
    "imagem": astro,
    "distratores": [
      {
        "palavra": "ROBO",
        "imagem": robo
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! ASTRONAUTA BOT!",
    "imagem": astro
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma ENGRENAGEM! Ela GIRA o robô! Cliqui!",
    "imagem": engrenagem,
    "palavra": "ENGRENAGEM"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na ENGRENAGEM.",
    "palavra": "ENGRENAGEM",
    "imagem": engrenagem,
    "distratores": [
      {
        "palavra": "ASTRONAUTA",
        "imagem": astro
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! ENGRENAGEM!",
    "imagem": engrenagem
  },
  {
    "tipo": "fim",
    "fala": "ASTRONAUTA BOT com sua ENGRENAGEM! Beijo!",
    "imagem": pipVet
  }
],
};
