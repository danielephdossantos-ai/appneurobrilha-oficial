import type { AulaBE } from "../types";
import { url as drone } from "@/assets/hiperfocos/robos/drone.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/robos/foguete-robo.png.asset.json";
import { url as robo } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula46VoaDrone: AulaBE = {
  slug: "aula-46-voa-drone",
  numero: 46,
  titulo: "VOA (DRONE)",
  objetivo: "Generalizar VOA com DRONE e FOGUETE ROBÔ.",
  palavrasAlvo: ["VOA","FOGUETE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem VOA no mundo robô?",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA o DRONE VOAR! Zumm!",
    "imagem": drone_TOKEN,
    "palavra": "DRONE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no DRONE que VOA.",
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
    "fala": "Isso! DRONE VOA!",
    "imagem": drone_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um FOGUETE ROBÔ! Ele SOBE! Whoosh!",
    "imagem": foguete_TOKEN,
    "palavra": "FOGUETE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no FOGUETE.",
    "palavra": "FOGUETE",
    "imagem": foguete_TOKEN,
    "distratores": [
      {
        "palavra": "DRONE",
        "imagem": drone_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! FOGUETE!",
    "imagem": foguete_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "DRONE VOA e FOGUETE SOBE! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
