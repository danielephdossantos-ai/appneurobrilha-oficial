import type { CursoIng, NivelIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { semana1Pre2 } from "./ingles-pre2-s1";
import { semana2Pre2 } from "./ingles-pre2-s2";
import { semana3Pre2 } from "./ingles-pre2-s3";
import { semana4Pre2 } from "./ingles-pre2-s4";
import { nivel1Pre2 } from "./ingles-pre2-n1";
import { n3Pre2_semana1 } from "./ingles-pre2-n3-s1";
import { n3Pre2_semana2 } from "./ingles-pre2-n3-s2";
import { n3Pre2_semana3 } from "./ingles-pre2-n3-s3";
import { n3Pre2_semana4 } from "./ingles-pre2-n3-s4";
import { n4Pre2_semana1 } from "./ingles-pre2-n4-s1";
import { n4Pre2_semana2 } from "./ingles-pre2-n4-s2";
import { n4Pre2_semana3 } from "./ingles-pre2-n4-s3";
import { n4Pre2_semana4 } from "./ingles-pre2-n4-s4";

/**
 * Inglês EI — Pré II (5–6 anos) · 4 níveis
 *
 * Nível 1 (Baby English): recomeço leve, 2 palavras/aula, 8 aulas.
 * Nível 2 (First Words): conteúdo pedagógico original — greetings, weather,
 * rotina, comida + feelings — 20 aulas.
 */

const nivel2Pre2: NivelIng = {
  slug: "n2",
  numero: 2,
  titulo: "Nível 2 · First Words",
  subtitulo: "Greetings, weather, rotina e sentimentos — 20 aulas",
  destravado: true,
  unidades: [
    {
      slug: "semana-1",
      numero: 1,
      titulo: "Semana 1 — Say hello to the world!",
      subtitulo: "Hello, my name, how are you, goodbye, please + thanks.",
      aulas: semana1Pre2,
    },
    {
      slug: "semana-2",
      numero: 2,
      titulo: "Semana 2 — Weather and time of day",
      subtitulo: "It is sunny, rainy, cloudy, windy — day and night.",
      aulas: semana2Pre2,
    },
    {
      slug: "semana-3",
      numero: 3,
      titulo: "Semana 3 — Getting ready",
      subtitulo: "Put on, wash, brush, bath — my daily routine.",
      aulas: semana3Pre2,
    },
    {
      slug: "semana-4",
      numero: 4,
      titulo: "Semana 4 — Food, feelings & Graduation",
      subtitulo: "I like, I love, I am happy — Little English Explorer!",
      aulas: semana4Pre2,
    },
  ],
};

const nivel3Pre2: NivelIng = {
  slug: "n3",
  numero: 3,
  titulo: "Nível 3 · I Can Say",
  subtitulo: "Clima, sentimentos, roupas e casa — 8 aulas",
  destravado: true,
  unidades: [n3Pre2_semana1, n3Pre2_semana2, n3Pre2_semana3, n3Pre2_semana4],
};

const nivel4Pre2: NivelIng = {
  slug: "n4",
  numero: 4,
  titulo: "Nível 4 · Little Talker",
  subtitulo: "Pedidos, convites, descrições e histórias — 8 aulas",
  destravado: true,
  unidades: [n4Pre2_semana1, n4Pre2_semana2, n4Pre2_semana3, n4Pre2_semana4],
};

export const cursoInglesPre2: CursoIng = {
  slug: "ingles-ei-pre2",
  serie: "pre2",
  serieLabel: "Pré II (5–6 anos)",
  titulo: "My First English — Pré II",
  descricao:
    "4 níveis para 5–6 anos. Começa leve no Nível 1 (Baby English) e vai até mini-diálogos no Nível 4.",
  corPrimaria: "#4338ca",
  corSecundaria: "#c7d2fe",
  mascoteUrl: buddy,
  unidades: [],
  niveis: [nivel1Pre2, nivel2Pre2, nivel3Pre2, nivel4Pre2],
};
