import type { AulaBE } from "../types";
import { url as fada } from "@/assets/hiperfocos/princesas/fada.png.asset.json";
import { url as unicornio } from "@/assets/hiperfocos/princesas/unicornio.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula39Voa: AulaBE = {
  slug: "aula-39-voa",
  numero: 39,
  titulo: "VOA",
  objetivo: "Ensinar VOA com FADA e UNICÓRNIO.",
  palavrasAlvo: ["VOA","FADA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem VOA no reino?",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma FADA! Fa-da! Ela VOA! Fiu!",
    "imagem": fada,
    "palavra": "FADA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na FADA que VOA.",
    "palavra": "FADA",
    "imagem": fada,
    "distratores": [
      {
        "palavra": "UNICORNIO",
        "imagem": unicornio
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! FADA VOA!",
    "imagem": fada
  },
  {
    "tipo": "olha",
    "fala": "OLHA um UNICÓRNIO! U-ni-cór-nio!",
    "imagem": unicornio,
    "palavra": "UNICORNIO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no UNICÓRNIO.",
    "palavra": "UNICORNIO",
    "imagem": unicornio,
    "distratores": [
      {
        "palavra": "FADA",
        "imagem": fada
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! UNICÓRNIO!",
    "imagem": unicornio
  },
  {
    "tipo": "fim",
    "fala": "A FADA VOA e o UNICÓRNIO galopa! Beijo!",
    "imagem": pipVet
  }
],
};
