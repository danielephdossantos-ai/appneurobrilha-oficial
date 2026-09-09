import type { AulaV4 } from "../../types";

/**
 * Aula 9 — "Revisão da Unidade 1 · Circuito das 5 Estações"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Circuito reunindo as 5 grandes habilidades da unidade:
 *   1) contar/decompor · 2) valor posicional · 3) ler número ·
 *   4) comparar/ordenar · 5) sequência.
 * BNCC: EF03MA01, EF03MA02, EF03MA03.
 */
export const aula09_revisaoUnidade: AulaV4 = {
  slug: "09-revisao-unidade",
  titulo: "Circuito da Cidade",
  iconeTrilha: "🔄",
  bncc: ["EF03MA01", "EF03MA02", "EF03MA03"],
  duracaoMin: 22,
  metodologias: ["skemp", "cpa", "rme"],

  momento01_motivacao: {
    titulo: "Circuito das 5 Estações!",
    historia:
      "A Cidade dos Números vai fechar por hoje e a Prefeita quer conferir se aprendemos TUDO desta unidade. Preparou um circuito com 5 estações: decompor, valor posicional, ler número, comparar/ordenar e sequência. Quem passa por todas leva XP dobrado!",
  },

  momento02_exploracao: {
    instrucao: "Estação 1 — DECOMPOSIÇÃO. Reveja como um número se abre em casas.",
    cenas: [
      { tipo: "texto", texto: "234 = 200 + 30 + 4" },
      { tipo: "texto", texto: "573 = 500 + 70 + 3", destaque: true },
      { tipo: "texto", texto: "Toda decomposição é somar o valor de cada casa." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Você lembra das 5 estações da Unidade 1?",
    pista:
      "Aulas 1-3: contar/decompor até 1.000. Aula 4: ler. Aulas 5-6: comparar e ordenar. Aula 7: arredondar. Aula 8: sequência.",
    revelacao:
      "Isso! Vamos passar rapidinho por todas e provar que você virou explorador(a) da Cidade dos Números.",
  },

  momento04_explicacao: {
    titulo: "Lembretes das 5 estações",
    etapas: [
      {
        texto:
          "1) CONTAR/DECOMPOR: cada número é a soma do valor de suas casas.",
        exemploReal: {
          contexto: "Número da placa do ônibus escolar: 342.",
          casasValor: {
            numero: 342,
            extenso: "trezentos e quarenta e dois",
            mostrarDecomposicao: true,
          },
          destaque: "342 = 300 + 40 + 2.",
        },
      },
      {
        texto:
          "2) VALOR POSICIONAL: o mesmo algarismo vale coisas diferentes em cada casa.",
        exemploReal: {
          contexto: "Em 528, o algarismo 5 mora na CENTENA.",
          casasValor: {
            numero: 528,
            extenso: "quinhentos e vinte e oito",
            mostrarDecomposicao: true,
          },
          destaque: "5 na centena = 500.",
        },
      },
      {
        texto:
          "3) LER: centena + 'e' + dezena + 'e' + unidade. Se uma casa é 0, pula.",
        exemploReal: {
          contexto: "342 lê-se juntando as três casas.",
          casasValor: {
            numero: 342,
            extenso: "trezentos e quarenta e dois",
            mostrarDecomposicao: true,
          },
          destaque: "342 = 'trezentos e quarenta e dois'.",
        },
      },
      {
        texto:
          "4) COMPARAR: use CDU (centena, depois dezena, depois unidade). A boca do sinal aponta pro maior.",
        exemploReal: {
          contexto: "Compare 428 e 512. Centena: 4 < 5 → decide na hora.",
          destaque: "428 < 512.",
        },
      },
      {
        texto:
          "5) SEQUÊNCIA: pulo = próximo − anterior. Some o pulo pra prever o próximo termo.",
        exemploReal: {
          contexto: "10, 20, 30, ?, ? — pulo é 10.",
          destaque: "Próximos: 40 e 50.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve um mini de cada estação:",
    passos: [
      "1) 342 = 300 + 40 + 2 (decomposição).",
      "2) Em 342, o 4 vale 40.",
      "3) 342 = 'trezentos e quarenta e dois'.",
      "4) 342 > 234 (compara centena: 3 > 2).",
      "5) 342, 352, 362 (pulo 10).",
    ],
    resposta: "Circuito modelado!",
    casasValor: {
      numero: 342,
      mostrarDecomposicao: true,
      extenso: "trezentos e quarenta e dois",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Estação 2 — VALOR POSICIONAL. Quanto vale o 6 em 462?",
    dica: "6 está na casa da dezena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O 6 em 462 vale:",
      opcoes: [{ nome: "6" }, { nome: "60" }, { nome: "600" }],
      respostaCerta: "60",
      feedbackAcerto: "🎉 60! O 6 está na dezena.",
      feedbackErro: "Da direita: 2 (U), 6 (D), 4 (C). O 6 na Dezena vale 60.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Estação 3 — LER. Que número é 'seiscentos e sete'?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "seiscentos e sete =",
      opcoes: [{ nome: "67" }, { nome: "607" }, { nome: "670" }],
      respostaCerta: "607",
      feedbackAcerto: "🎯 607. Dezena é 0 (não se fala).",
      feedbackErro: "600 + 0 + 7 = 607. Dezena zero pula na leitura.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Estação 4 — COMPARAR/ORDENAR. Três bairros: Central (289), Vale (298), Alto (209).",
    problema: "Coloque em ORDEM CRESCENTE:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem crescente:",
      opcoes: [
        { nome: "209 < 289 < 298" },
        { nome: "289 < 298 < 209" },
        { nome: "298 < 289 < 209" },
      ],
      respostaCerta: "209 < 289 < 298",
      feedbackAcerto: "🎉 Alto (D=0), Central (D=8), Vale (D=9). Ordem certa!",
      feedbackErro: "Todos têm C=2. Dezena: 0 < 8 < 9. Fica 209 < 289 < 298.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Circuito quase pronto! Falta a Estação 5 (sequência).",
      "Pulo = diferença entre dois termos consecutivos.",
      "🎯 Última estação!",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Estação 5 — Sequência 310, 320, 330, ... próximo?",
      opcoes: [{ nome: "331" }, { nome: "340" }, { nome: "400" }],
      respostaCerta: "340",
      feedbackAcerto: "🎉 Pulo 10 → 340.",
      feedbackErro: "320 − 310 = 10. 330 + 10 = 340.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "P1/5 (DECOMPOSIÇÃO) — 243 = ?",
        opcoes: ["200 + 40 + 3", "2 + 4 + 3", "20 + 40 + 3"],
        correta: 0,
        feedbackAcerto: "🎉 200 + 40 + 3 = 243.",
        feedbackErro: "C=2 (200), D=4 (40), U=3 (3). Soma: 200 + 40 + 3.",
      },
      {
        pergunta: "P2/5 (VALOR POSICIONAL) — Em 795, o 9 vale:",
        opcoes: ["9", "90", "900"],
        correta: 1,
        feedbackAcerto: "🎉 90. O 9 mora na dezena.",
        feedbackErro: "Da direita: 5 (U), 9 (D), 7 (C). 9 na dezena = 90.",
      },
      {
        pergunta: "P3/5 (LER) — 'quatrocentos e onze' é:",
        opcoes: ["411", "401", "441"],
        correta: 0,
        feedbackAcerto: "🎉 400 + 11 = 411. 'onze' já é 11.",
        feedbackErro: "400 + 11 = 411.",
      },
      {
        pergunta: "P4/5 (COMPARAR) — 526 __ 562. Sinal?",
        opcoes: ["526 > 562", "526 < 562", "526 = 562"],
        correta: 1,
        feedbackAcerto: "🎉 C empata. Dezena: 2 < 6 → 526 < 562.",
        feedbackErro: "C=5=5. Dezena: 2 < 6. Fica 526 < 562.",
      },
      {
        pergunta: "P5/5 (SEQUÊNCIA) — 190, 200, 210, ?, ?",
        opcoes: ["211, 212", "220, 230", "300, 400"],
        correta: 1,
        feedbackAcerto: "🎉 Pulo 10 → 220, 230. Circuito completo! 🏆",
        feedbackErro: "Pulo é 10 (200 − 190). 210+10=220, 220+10=230.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Circuito da Cidade em Casa",
    materiais: ["Papel", "Caneta", "Cronômetro do celular"],
    passos: [
      "1) DECOMPOR: um adulto escreve um número (ex.: 258); você diz o valor de cada casa.",
      "2) VALOR POSICIONAL: escreva 3 números e circule o algarismo mais 'forte' de cada.",
      "3) LER: adulto escreve, você lê em voz alta.",
      "4) COMPARAR: adulto escreve 2 números; você põe >, <, =.",
      "5) SEQUÊNCIA: você inventa um pulo e escreve 5 termos.",
    ],
    registro: "📸 Foto do papel com as 5 estações marcadas.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
