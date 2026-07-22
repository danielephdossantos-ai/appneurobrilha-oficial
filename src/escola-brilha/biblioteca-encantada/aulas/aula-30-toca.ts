/**
 * Aula 30 — "TOCA"
 * Verbo funcional TOCA com BATERIA e MICROFONE (CANTA).
 */
import type { AulaBE } from "../types";
import { url as bateria } from "@/assets/hiperfocos/musica/bateria.png.asset.json";
import { url as microfone } from "@/assets/hiperfocos/musica/microfone.png.asset.json";
import { url as violao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula30Toca: AulaBE = {
  slug: "aula-30-toca",
  numero: 30,
  titulo: "TOCA",
  objetivo:
    "Ensinar o verbo TOCA associado a instrumentos. Introduzir BATERIA e MICROFONE.",
  palavrasAlvo: ["TOCA", "BATERIA"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje a gente vai TOCAR! To-ca!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA uma BATERIA! Ba-te-ri-a. A mão TOCA a BATERIA! Tum tum tum!",
      imagem: bateria,
      palavra: "BATERIA",
    },
    {
      tipo: "pecs",
      fala: "Toca no que faz TUM TUM.",
      palavra: "BATERIA",
      imagem: bateria,
      distratores: [{ palavra: "VIOLAO", imagem: violao }],
    },
    {
      tipo: "reforco",
      fala: "Isso! BATERIA! Tum tum tum!",
      imagem: bateria,
    },
    {
      tipo: "olha",
      fala: "OLHA um MICROFONE! Mi-cro-fo-ne. A gente CANTA no microfone! Lá lá lá!",
      imagem: microfone,
      palavra: "MICROFONE",
    },
    {
      tipo: "pecs",
      fala: "Toca no que a gente CANTA.",
      palavra: "MICROFONE",
      imagem: microfone,
      distratores: [{ palavra: "BATERIA", imagem: bateria }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! MICROFONE! Lá lá lá!",
      imagem: microfone,
    },
    {
      tipo: "fim",
      fala: "A Pip TOCA a BATERIA e CANTA no MICROFONE! Você arrasou! Beijo!",
      imagem: pipVet,
    },
  ],
};
