/**
 * Aula 18 — "CORRE"
 * Verbo de ação (mand + tact). Reforça velocidade e movimento.
 * Palavras-alvo: CORRE e VELOCIRAPTOR.
 */
import type { AulaBE } from "../types";
import { url as velociraptor } from "@/assets/hiperfocos/dinossauros/velociraptor.png.asset.json";
import { url as trex } from "@/assets/hiperfocos/dinossauros/trex.png.asset.json";
import { url as braquio } from "@/assets/hiperfocos/dinossauros/braquiossauro.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula18Corre: AulaBE = {
  slug: "aula-18-corre",
  numero: 18,
  titulo: "CORRE",
  objetivo:
    "Aprender o verbo CORRE associado a um dinossauro rápido. Aumenta o repertório de ações.",
  palavrasAlvo: ["CORRE", "VELOCIRAPTOR"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente aprende: CORRE! Quem CORRE bem rápido?",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o VELOCIRAPTOR! Ve-lo-ci-rap-tor. Ele CORRE muito rápido!",
      imagem: velociraptor,
      palavra: "VELOCIRAPTOR",
    },
    {
      tipo: "pecs",
      fala: "Toca no VELOCIRAPTOR, o que CORRE rápido.",
      palavra: "VELOCIRAPTOR",
      imagem: velociraptor,
      distratores: [{ palavra: "BRAQUIOSSAURO", imagem: braquio }],
    },
    {
      tipo: "reforco",
      fala: "Isso! VELOCIRAPTOR CORRE! Zummm!",
      imagem: velociraptor,
    },
    {
      tipo: "olha",
      fala: "O TREX também CORRE! CORRE atrás! Rrraaawwr!",
      imagem: trex,
      palavra: "CORRE",
    },
    {
      tipo: "pecs",
      fala: "Toca em quem CORRE bem rápido: VELOCIRAPTOR.",
      palavra: "VELOCIRAPTOR",
      imagem: velociraptor,
      distratores: [{ palavra: "BRAQUIOSSAURO", imagem: braquio }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! VELOCIRAPTOR CORRE! Você é rápido igual ele!",
      imagem: velociraptor,
    },
    {
      tipo: "fim",
      fala: "Você aprendeu CORRE! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
