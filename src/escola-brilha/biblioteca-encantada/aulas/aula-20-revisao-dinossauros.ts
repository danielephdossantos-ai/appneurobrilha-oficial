/**
 * Aula 20 — "REVISÃO DINOSSAUROS"
 * Fecha a Semana 5. Generaliza TREX, BRAQUIOSSAURO, VELOCIRAPTOR, TRICERATOPS, ESTEGOSSAURO.
 */
import type { AulaBE } from "../types";
import { url as trex } from "@/assets/hiperfocos/dinossauros/trex.png.asset.json";
import { url as braquio } from "@/assets/hiperfocos/dinossauros/braquiossauro.png.asset.json";
import { url as velociraptor } from "@/assets/hiperfocos/dinossauros/velociraptor.png.asset.json";
import { url as triceratops } from "@/assets/hiperfocos/dinossauros/triceratops.png.asset.json";
import { url as estego } from "@/assets/hiperfocos/dinossauros/estegossauro.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula20RevisaoDinossauros: AulaBE = {
  slug: "aula-20-revisao-dinossauros",
  numero: 20,
  titulo: "REVISÃO DINOSSAUROS",
  objetivo:
    "Fechar a Semana 5. Recuperar TREX, BRAQUIOSSAURO, VELOCIRAPTOR, TRICERATOPS, ESTEGOSSAURO com CORRE e FORTE.",
  palavrasAlvo: ["DINOSSAURO", "FORTE"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Festa dos DINOSSAUROS! Vamos lembrar todos eles!",
      imagem: pipVet,
    },
    {
      tipo: "pecs",
      fala: "Toca no TREX. Rrraaawwr!",
      palavra: "TREX",
      imagem: trex,
      distratores: [{ palavra: "BRAQUIOSSAURO", imagem: braquio }],
    },
    {
      tipo: "reforco",
      fala: "Isso! TREX!",
      imagem: trex,
    },
    {
      tipo: "pecs",
      fala: "Toca em quem CORRE rápido: VELOCIRAPTOR.",
      palavra: "VELOCIRAPTOR",
      imagem: velociraptor,
      distratores: [{ palavra: "ESTEGOSSAURO", imagem: estego }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! VELOCIRAPTOR CORRE!",
      imagem: velociraptor,
    },
    {
      tipo: "pecs",
      fala: "Toca no FORTE dos 3 chifres: TRICERATOPS.",
      palavra: "TRICERATOPS",
      imagem: triceratops,
      distratores: [{ palavra: "BRAQUIOSSAURO", imagem: braquio }],
    },
    {
      tipo: "reforco",
      fala: "Isso! TRICERATOPS FORTE!",
      imagem: triceratops,
    },
    {
      tipo: "pecs",
      fala: "Toca no do pescoço GRANDE: BRAQUIOSSAURO.",
      palavra: "BRAQUIOSSAURO",
      imagem: braquio,
      distratores: [{ palavra: "VELOCIRAPTOR", imagem: velociraptor }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! BRAQUIOSSAURO GRANDE!",
      imagem: braquio,
    },
    {
      tipo: "fim",
      fala:
        "Você conhece 5 DINOSSAUROS! TREX, BRAQUIOSSAURO, VELOCIRAPTOR, TRICERATOPS e ESTEGOSSAURO. Você arrasou! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
