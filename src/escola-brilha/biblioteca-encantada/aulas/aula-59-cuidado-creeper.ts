import type { AulaBE } from "../types";
import { url as creeper } from "@/assets/hiperfocos/minecraft/creeper.png.asset.json";
import { url as lhama } from "@/assets/hiperfocos/minecraft/lhama.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/minecraft/galinha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula59CuidadoCreeper: AulaBE = {
  slug: "aula-59-cuidado-creeper",
  numero: 59,
  titulo: "CUIDADO! CREEPER",
  objetivo: "Ensinar CUIDADO com CREEPER. Contraste com LHAMA (amigo) e GALINHA.",
  palavrasAlvo: ["CUIDADO","CREEPER"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! CUIDADO! Tem CREEPER!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um CREEPER! Cre-e-per! CUIDADO, ele explode! Sssssss!",
    "imagem": creeper_TOKEN,
    "palavra": "CREEPER"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CREEPER (cuidado!).",
    "palavra": "CREEPER",
    "imagem": creeper_TOKEN,
    "distratores": [
      {
        "palavra": "LHAMA",
        "imagem": lhama_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CREEPER! CUIDADO!",
    "imagem": creeper_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma LHAMA! Lha-ma! Ela é AMIGA!",
    "imagem": lhama_TOKEN,
    "palavra": "LHAMA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no que é AMIGO (LHAMA).",
    "palavra": "LHAMA",
    "imagem": lhama_TOKEN,
    "distratores": [
      {
        "palavra": "CREEPER",
        "imagem": creeper_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! LHAMA é AMIGA!",
    "imagem": lhama_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na GALINHA.",
    "palavra": "GALINHA",
    "imagem": galinha_TOKEN,
    "distratores": [
      {
        "palavra": "CREEPER",
        "imagem": creeper_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! GALINHA!",
    "imagem": galinha_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "CUIDADO com CREEPER, mas LHAMA e GALINHA são AMIGAS! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
