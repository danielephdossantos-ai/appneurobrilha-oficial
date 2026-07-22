/**
 * Aula 17 — "OLHA! DINOSSAURO"
 * Abre o Módulo 2 (tema Dinossauros). Novo vocabulário, mesma base ABA/PECS/TEACCH.
 * Palavras-alvo: DINOSSAURO e TREX.
 */
import type { AulaBE } from "../types";
import { url as trex } from "@/assets/hiperfocos/dinossauros/trex.png.asset.json";
import { url as braquio } from "@/assets/hiperfocos/dinossauros/braquiossauro.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula17OlhaDinossauro: AulaBE = {
  slug: "aula-17-olha-dinossauro",
  numero: 17,
  titulo: "OLHA! DINOSSAURO",
  objetivo:
    "Abrir o novo tema (dinossauros) mantendo a rotina TEACCH. Atenção conjunta e nomeação de dois dinossauros.",
  palavrasAlvo: ["DINOSSAURO", "TREX"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje começa uma aventura NOVA! A gente vai conhecer os DINOSSAUROS. Vem comigo!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA! É o TREX! T-REX. Ele é grande e forte!",
      imagem: trex,
      palavra: "TREX",
    },
    {
      tipo: "pecs",
      fala: "Toca no TREX.",
      palavra: "TREX",
      imagem: trex,
      distratores: [{ palavra: "BRAQUIOSSAURO", imagem: braquio }],
    },
    {
      tipo: "reforco",
      fala: "Isso! Esse é o TREX! Rrraawwr!",
      imagem: trex,
    },
    {
      tipo: "olha",
      fala: "OLHA o BRAQUIOSSAURO! Pescoço bem GRANDE! Come folhas lá do alto.",
      imagem: braquio,
      palavra: "DINOSSAURO",
    },
    {
      tipo: "pecs",
      fala: "Toca no BRAQUIOSSAURO, o do pescoço grande.",
      palavra: "BRAQUIOSSAURO",
      imagem: braquio,
      distratores: [{ palavra: "TREX", imagem: trex }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! BRAQUIOSSAURO! Que pescoço enorme!",
      imagem: braquio,
    },
    {
      tipo: "fim",
      fala: "Você conheceu 2 DINOSSAUROS hoje! TREX e BRAQUIOSSAURO. Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
