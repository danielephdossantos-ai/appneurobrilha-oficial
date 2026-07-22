import type { AulaBE } from "../types";
import { url as robo } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as drone } from "@/assets/hiperfocos/robos/drone.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/robos/foguete-robo.png.asset.json";
import { url as astro } from "@/assets/hiperfocos/robos/astronauta-bot.png.asset.json";
import { url as engrenagem } from "@/assets/hiperfocos/robos/engrenagem.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula48RevisaoRobos: AulaBE = {
  slug: "aula-48-revisao-robos",
  numero: 48,
  titulo: "REVISÃO ROBÔS",
  objetivo: "Fechar a Semana 12. Recuperar ROBÔ, DRONE, FOGUETE, ASTRONAUTA e ENGRENAGEM.",
  palavrasAlvo: ["ROBOS"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa dos ROBÔS!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no ROBÔ.",
    "palavra": "ROBO",
    "imagem": robo_TOKEN,
    "distratores": [
      {
        "palavra": "DRONE",
        "imagem": drone_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! ROBÔ!",
    "imagem": robo_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no que VOA (DRONE).",
    "palavra": "DRONE",
    "imagem": drone_TOKEN,
    "distratores": [
      {
        "palavra": "ENGRENAGEM",
        "imagem": engrenagem_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! DRONE VOA!",
    "imagem": drone_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no FOGUETE.",
    "palavra": "FOGUETE",
    "imagem": foguete_TOKEN,
    "distratores": [
      {
        "palavra": "ASTRONAUTA",
        "imagem": astro_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! FOGUETE SOBE!",
    "imagem": foguete_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você conhece os ROBÔS! Bip bip! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
