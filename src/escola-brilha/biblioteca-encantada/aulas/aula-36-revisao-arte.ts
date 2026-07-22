import type { AulaBE } from "../types";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as tinta } from "@/assets/hiperfocos/arte/tinta.png.asset.json";
import { url as cavalete } from "@/assets/hiperfocos/arte/cavalete.png.asset.json";
import { url as paleta } from "@/assets/hiperfocos/arte/paleta.png.asset.json";
import { url as lapis } from "@/assets/hiperfocos/arte/lapis-cor.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula36RevisaoArte: AulaBE = {
  slug: "aula-36-revisao-arte",
  numero: 36,
  titulo: "REVISÃO ARTE",
  objetivo: "Fechar a Semana 9. Recuperar PINCEL, TINTA, CAVALETE, PALETA e LÁPIS.",
  palavrasAlvo: ["ARTE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa da ARTE! Vamos lembrar tudo!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no PINCEL.",
    "palavra": "PINCEL",
    "imagem": pincel_TOKEN,
    "distratores": [
      {
        "palavra": "TINTA",
        "imagem": tinta_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PINCEL!",
    "imagem": pincel_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CAVALETE.",
    "palavra": "CAVALETE",
    "imagem": cavalete_TOKEN,
    "distratores": [
      {
        "palavra": "PALETA",
        "imagem": paleta_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! CAVALETE!",
    "imagem": cavalete_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no LÁPIS DE COR.",
    "palavra": "LAPIS",
    "imagem": lapis_TOKEN,
    "distratores": [
      {
        "palavra": "PINCEL",
        "imagem": pincel_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! LÁPIS!",
    "imagem": lapis_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você é um ARTISTA! PINCEL, TINTA, CAVALETE, PALETA e LÁPIS! Beijo da Pip!",
    "imagem": pipVet_TOKEN
  }
],
};
