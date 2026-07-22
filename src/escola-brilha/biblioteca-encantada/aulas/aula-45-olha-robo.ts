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
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA um ROBÔ! Ro-bô! Bip bip bop!",
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
        "palavra": "DRONE",
        "imagem": drone
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! ROBÔ!",
    "imagem": robo
  },
  {
    "tipo": "olha",
    "fala": "OLHA um DRONE! Dro-ne! Zumm!",
    "imagem": drone,
    "palavra": "DRONE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no DRONE.",
    "palavra": "DRONE",
    "imagem": drone,
    "distratores": [
      {
        "palavra": "ROBO",
        "imagem": robo
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! DRONE!",
    "imagem": drone
  },
  {
    "tipo": "fim",
    "fala": "ROBÔ e DRONE fazem bip! Beijo!",
    "imagem": pipVet
  }
],
};
