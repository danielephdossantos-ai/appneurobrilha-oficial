/**
 * Aula 32 — "REVISÃO MÚSICA"
 * Fecha a Semana 8 e o Módulo 5. Generaliza VIOLÃO, PIANO, BATERIA, MICROFONE, NOTA.
 */
import type { AulaBE } from "../types";
import { url as violao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as piano } from "@/assets/hiperfocos/musica/piano.png.asset.json";
import { url as bateria } from "@/assets/hiperfocos/musica/bateria.png.asset.json";
import { url as microfone } from "@/assets/hiperfocos/musica/microfone.png.asset.json";
import { url as notaMusical } from "@/assets/hiperfocos/musica/nota-musical.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula32RevisaoMusica: AulaBE = {
  slug: "aula-32-revisao-musica",
  numero: 32,
  titulo: "REVISÃO MÚSICA",
  objetivo:
    "Fechar a Semana 8 e o Módulo 5. Recuperar VIOLÃO, PIANO, BATERIA, MICROFONE e NOTA MUSICAL.",
  palavrasAlvo: ["MUSICA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Festa da MÚSICA! Vamos lembrar tudo! Lá lá lá!",
      imagem: pipVet,
    },
    {
      tipo: "pecs",
      fala: "Toca no VIOLÃO.",
      palavra: "VIOLAO",
      imagem: violao,
      distratores: [{ palavra: "PIANO", imagem: piano }],
    },
    {
      tipo: "reforco",
      fala: "Isso! VIOLÃO! Dedilhom!",
      imagem: violao,
    },
    {
      tipo: "pecs",
      fala: "Toca no que faz TUM TUM.",
      palavra: "BATERIA",
      imagem: bateria,
      distratores: [{ palavra: "MICROFONE", imagem: microfone }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! BATERIA!",
      imagem: bateria,
    },
    {
      tipo: "pecs",
      fala: "Toca no que a gente CANTA.",
      palavra: "MICROFONE",
      imagem: microfone,
      distratores: [{ palavra: "PIANO", imagem: piano }],
    },
    {
      tipo: "reforco",
      fala: "Isso! MICROFONE! Lá lá lá!",
      imagem: microfone,
    },
    {
      tipo: "pecs",
      fala: "Toca na NOTA MUSICAL.",
      palavra: "NOTA",
      imagem: notaMusical,
      distratores: [{ palavra: "VIOLAO", imagem: violao }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! NOTA MUSICAL!",
      imagem: notaMusical,
    },
    {
      tipo: "fim",
      fala:
        "Você conhece a MÚSICA! VIOLÃO, PIANO, BATERIA, MICROFONE e NOTA! Você arrasou! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
