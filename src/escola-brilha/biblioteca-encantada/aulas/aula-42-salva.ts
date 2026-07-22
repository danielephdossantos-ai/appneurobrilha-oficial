import type { AulaBE } from "../types";
import { url as capita } from "@/assets/hiperfocos/herois/capita.png.asset.json";
import { url as justiceiro } from "@/assets/hiperfocos/herois/justiceiro.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula42Salva: AulaBE = {
  slug: "aula-42-salva",
  numero: 42,
  titulo: "SALVA",
  objetivo: "Ensinar SALVA com CAPITÃ e JUSTICEIRO.",
  palavrasAlvo: ["SALVA","CAPITA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem SALVA a cidade?",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA a CAPITÃ! Ca-pi-tã! Ela SALVA!",
    "imagem": capita_TOKEN,
    "palavra": "CAPITA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na CAPITÃ.",
    "palavra": "CAPITA",
    "imagem": capita_TOKEN,
    "distratores": [
      {
        "palavra": "JUSTICEIRO",
        "imagem": justiceiro_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CAPITÃ SALVA!",
    "imagem": capita_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA o JUSTICEIRO! Jus-ti-cei-ro!",
    "imagem": justiceiro_TOKEN,
    "palavra": "JUSTICEIRO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no JUSTICEIRO.",
    "palavra": "JUSTICEIRO",
    "imagem": justiceiro_TOKEN,
    "distratores": [
      {
        "palavra": "CAPITA",
        "imagem": capita_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! JUSTICEIRO!",
    "imagem": justiceiro_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "CAPITÃ e JUSTICEIRO SALVAM! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
