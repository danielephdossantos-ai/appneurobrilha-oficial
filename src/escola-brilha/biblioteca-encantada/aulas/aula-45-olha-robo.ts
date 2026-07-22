import type { AulaBE } from "../types";
import { url as robo } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as drone } from "@/assets/hiperfocos/robos/drone.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula45OlhaRobo: AulaBE = {
  slug: "aula-45-olha-robo",
  numero: 45,
  titulo: "OLHA! ROBÔ",
  objetivo: "Abrir o Módulo 9 (Robôs). Nomear ROBÔ e DRONE.",
  palavrasAlvo: ["ROBO","DRONE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip vai ao mundo dos ROBÔS! Bip bip!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um ROBÔ! Ro-bô! Bip bip bop!",
    "imagem": robo_TOKEN,
    "palavra": "ROBO"
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
    "tipo": "olha",
    "fala": "OLHA um DRONE! Dro-ne! Zumm!",
    "imagem": drone_TOKEN,
    "palavra": "DRONE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no DRONE.",
    "palavra": "DRONE",
    "imagem": drone_TOKEN,
    "distratores": [
      {
        "palavra": "ROBO",
        "imagem": robo_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! DRONE!",
    "imagem": drone_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "ROBÔ e DRONE fazem bip! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
