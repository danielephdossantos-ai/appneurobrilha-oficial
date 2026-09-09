import type { AulaBE } from "../types";
import { url as peixinho } from "@/assets/hiperfocos/sereias/peixinho.png.asset.json";
import { url as cavalomar } from "@/assets/hiperfocos/sereias/cavalo-marinho.png.asset.json";
import { url as sereia } from "@/assets/hiperfocos/sereias/sereia.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula50Nada: AulaBE = {
  slug: "aula-50-nada",
  numero: 50,
  titulo: "NADA",
  objetivo: "Ensinar o verbo NADA com PEIXINHO e CAVALO MARINHO.",
  palavrasAlvo: ["NADA","CAVALOMAR"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem NADA no mar?",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA o PEIXINHO NADAR! Na-da!",
    "imagem": peixinho,
    "palavra": "PEIXINHO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no PEIXINHO que NADA.",
    "palavra": "PEIXINHO",
    "imagem": peixinho,
    "distratores": [
      {
        "palavra": "SEREIA",
        "imagem": sereia
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PEIXINHO NADA!",
    "imagem": peixinho
  },
  {
    "tipo": "olha",
    "fala": "OLHA um CAVALO MARINHO! Ca-va-lo ma-ri-nho!",
    "imagem": cavalomar,
    "palavra": "CAVALOMAR"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CAVALO MARINHO.",
    "palavra": "CAVALOMAR",
    "imagem": cavalomar,
    "distratores": [
      {
        "palavra": "PEIXINHO",
        "imagem": peixinho
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! CAVALO MARINHO!",
    "imagem": cavalomar
  },
  {
    "tipo": "fim",
    "fala": "Todo mundo NADA no MAR! Beijo!",
    "imagem": pipVet
  }
],
};
