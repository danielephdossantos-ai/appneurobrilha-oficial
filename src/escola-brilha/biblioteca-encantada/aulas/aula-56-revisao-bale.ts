import type { AulaBE } from "../types";
import { url as bailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as tutu } from "@/assets/hiperfocos/bailarinas/tutu.png.asset.json";
import { url as cisne } from "@/assets/hiperfocos/bailarinas/cisne.png.asset.json";
import { url as sapatilha } from "@/assets/hiperfocos/bailarinas/sapatilha.png.asset.json";
import { url as caixinha } from "@/assets/hiperfocos/bailarinas/caixinha-musica.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula56RevisaoBale: AulaBE = {
  slug: "aula-56-revisao-bale",
  numero: 56,
  titulo: "REVISÃO BALÉ",
  objetivo: "Fechar a Semana 14. Recuperar BAILARINA, TUTU, CISNE, SAPATILHA e CAIXINHA.",
  palavrasAlvo: ["BALE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa do BALÉ!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na BAILARINA.",
    "palavra": "BAILARINA",
    "imagem": bailarina_TOKEN,
    "distratores": [
      {
        "palavra": "CISNE",
        "imagem": cisne_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! BAILARINA!",
    "imagem": bailarina_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no TUTU.",
    "palavra": "TUTU",
    "imagem": tutu_TOKEN,
    "distratores": [
      {
        "palavra": "SAPATILHA",
        "imagem": sapatilha_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! TUTU!",
    "imagem": tutu_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na CAIXINHA DE MÚSICA.",
    "palavra": "CAIXINHA",
    "imagem": caixinha_TOKEN,
    "distratores": [
      {
        "palavra": "CISNE",
        "imagem": cisne_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CAIXINHA!",
    "imagem": caixinha_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você conhece o BALÉ! DANÇA com a Pip! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
