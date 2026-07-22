import type { CursoIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { semana1Pre2 } from "./ingles-pre2-s1";
import { semana2Pre2 } from "./ingles-pre2-s2";
import { semana3Pre2 } from "./ingles-pre2-s3";
import { semana4Pre2 } from "./ingles-pre2-s4";

/**
 * Inglês EI — Pré II (5–6 anos) · Curso completo (20 aulas)
 *
 * Progressão pedagógica em cima do Pré I:
 *  - S1 Greetings: hello/hi/name/how are you/goodbye/please+thanks (conversa completa)
 *  - S2 Weather: "It is sunny/rainy/cloudy/windy" + day/night (descrever o mundo)
 *  - S3 Routine: put on/wash/brush/bath (rotina diária em ações)
 *  - S4 Food + Feelings + Graduation: "I like / I love" + happy/sad + formatura EI
 *
 * Fecha a Educação Infantil inteira (Maternal + Pré I + Pré II) — 60 aulas totais.
 */

export const cursoInglesPre2: CursoIng = {
  slug: "ingles-ei-pre2",
  serie: "pre2",
  serieLabel: "Pré II (5–6 anos)",
  titulo: "My First English — Pré II",
  descricao:
    "Pré II completo: conversa, tempo, rotina diária, comida e sentimentos. Fecha a Educação Infantil com formatura Little English Explorer.",
  corPrimaria: "#4338ca",
  corSecundaria: "#c7d2fe",
  mascoteUrl: buddy,
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
