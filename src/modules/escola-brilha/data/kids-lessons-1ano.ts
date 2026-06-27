import type { KidsLesson } from "../types/kids-lesson";

/**
 * Banco local de aulas Kids (1º Ano).
 * Mapeado por codigo_bncc. Piloto: EF01MA03 (adição até 9).
 */

export const KIDS_LESSONS_1ANO: Record<string, KidsLesson> = {
  EF01MA03: {
    codigo_bncc: "EF01MA03",
    titulo: "Vamos aprender a somar!",
    disciplina: "Matemática",
    serie: "1º Ano",
    xp: 110,
    cor: "blue",
    scenes: [
      {
        kind: "intro",
        mascot: "pip",
        titulo: "Oi! Eu sou o Pip!",
        fala:
          "Oi amiguinho! Eu sou o Pip. Hoje vamos aprender uma coisa muito legal: somar! Vem comigo!",
      },
      {
        kind: "concept",
        titulo: "Este é o sinal de mais",
        simbolo: "+",
        fala:
          "Olha bem para esse sinal. Esse é o sinal de mais. Quando ele aparece, a gente junta duas quantidades. Mais quer dizer juntar.",
      },
      {
        kind: "usecase",
        titulo: "Onde usamos o mais?",
        cenas: [
          { emoji: "🍎", texto: "Juntar maçãs" },
          { emoji: "🧸", texto: "Juntar brinquedos" },
          { emoji: "✋", texto: "Contar nos dedos" },
        ],
        fala:
          "A gente usa o mais quando junta coisas. Juntar maçãs, juntar brinquedos, ou contar nos dedinhos.",
      },
      {
        kind: "step_count",
        titulo: "Vamos ver: 4 + 5",
        a: 4,
        b: 5,
        objeto: "🍎",
        fala:
          "Olha! Em cima tem quatro maçãs. Em baixo tem cinco maçãs. No meio, o sinal de mais. Quer dizer que vamos juntar tudo.",
      },
      {
        kind: "step_join",
        titulo: "Juntando tudo!",
        a: 4,
        b: 5,
        objeto: "🍎",
        fala:
          "Agora vou contar todas as maçãs juntas. Um, dois, três, quatro, cinco, seis, sete, oito, nove! Nove maçãs!",
      },
      {
        kind: "step_vertical_sum",
        titulo: "Agora a conta escrita",
        a: 4,
        b: 5,
        fala:
          "Olha como a gente escreve a conta. O quatro fica em cima. Embaixo, o cinco. Do lado, o sinal de mais. Embaixo da linha vai o resultado: nove!",
      },
      {
        kind: "practice_count",
        titulo: "Sua vez! Toque nas maçãs",
        a: 4,
        b: 5,
        objeto: "🍎",
        fala:
          "Agora é a sua vez! Toque em cada maçã e vamos contar juntos.",
      },
      {
        kind: "concept",
        titulo: "Agora o sinal de menos",
        simbolo: "−",
        fala:
          "Olha esse outro sinal. Esse é o sinal de menos. Quando ele aparece, a gente tira uma quantidade. Menos quer dizer tirar.",
      },
      {
        kind: "step_subtract",
        titulo: "Vamos ver: 7 − 3",
        a: 7,
        b: 3,
        objeto: "🍎",
        fala:
          "Olha! A gente tinha sete maçãs. Vamos tirar três. Uma… duas… três! Sobraram quatro maçãs.",
      },
      {
        kind: "step_vertical_sub",
        titulo: "A conta de menos escrita",
        a: 7,
        b: 3,
        fala:
          "Veja como escrever. O sete fica em cima. Embaixo, o três com o sinal de menos. Embaixo da linha, o que sobrou: quatro!",
      },
      {
        kind: "concept",
        titulo: "E o sinal de igual",
        simbolo: "=",
        fala:
          "Este é o sinal de igual. Ele mostra que os dois lados têm a mesma quantidade. Igual quer dizer mesma coisa.",
      },
      {
        kind: "step_equal",
        titulo: "3 = 3",
        n: 3,
        objeto: "🍎",
        fala:
          "Olha: três maçãs de um lado, três maçãs do outro. Os dois lados são iguais!",
      },
      {
        kind: "summary",
        titulo: "Você aprendeu!",
        itens: [
          "+ quer dizer juntar",
          "− quer dizer tirar",
          "= quer dizer mesma quantidade",
        ],
        fala:
          "Que demais! Você aprendeu três sinais: mais, menos e igual. Parabéns!",
      },
      {
        kind: "celebrate",
        titulo: "Parabéns!",
        fala: "Você é demais! Ganhou cento e dez de experiência. Vamos para a próxima!",
      },
    ],
  },
};

export function getKidsLesson(codigo: string | undefined): KidsLesson | null {
  if (!codigo) return null;
  return KIDS_LESSONS_1ANO[codigo] ?? null;
}
