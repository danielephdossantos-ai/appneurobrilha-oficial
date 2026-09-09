/**
 * Aula 19 — "FORTE"
 * Adjetivo funcional. Associa FORTE aos dinos com armadura/chifres.
 * Palavras-alvo: FORTE e TRICERATOPS.
 */
import type { AulaBE } from "../types";
import { url as triceratops } from "@/assets/hiperfocos/dinossauros/triceratops.png.asset.json";
import { url as estego } from "@/assets/hiperfocos/dinossauros/estegossauro.png.asset.json";
import { url as velociraptor } from "@/assets/hiperfocos/dinossauros/velociraptor.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula19Forte: AulaBE = {
  slug: "aula-19-forte",
  numero: 19,
  titulo: "FORTE",
  objetivo:
    "Aprender o adjetivo FORTE. Associar força a dinos com chifres e placas.",
  palavrasAlvo: ["FORTE", "TRICERATOPS"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente aprende: FORTE! Quem é bem FORTE?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o TRICERATOPS! Tem 3 CHIFRES! Ele é FORTE!",
      imagem: triceratops,
      palavra: "TRICERATOPS",
    },
    {
      tipo: "pecs",
      fala: "Toca no TRICERATOPS, o dos 3 chifres.",
      palavra: "TRICERATOPS",
      imagem: triceratops,
      distratores: [{ palavra: "VELOCIRAPTOR", imagem: velociraptor }],
    },
    {
      tipo: "reforco",
      fala: "Isso! TRICERATOPS é FORTE! Ninguém mexe com ele!",
      imagem: triceratops,
    },
    {
      tipo: "olha",
      fala: "OLHA o ESTEGOSSAURO! Placas nas costas! Também é FORTE!",
      imagem: estego,
      palavra: "FORTE",
    },
    {
      tipo: "pecs",
      fala: "Toca no dinossauro FORTE das placas: ESTEGOSSAURO.",
      palavra: "ESTEGOSSAURO",
      imagem: estego,
      distratores: [{ palavra: "VELOCIRAPTOR", imagem: velociraptor }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! ESTEGOSSAURO é FORTE! Você também é FORTE!",
      imagem: estego,
    },
    {
      tipo: "fim",
      fala: "FORTE! TRICERATOPS e ESTEGOSSAURO. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
