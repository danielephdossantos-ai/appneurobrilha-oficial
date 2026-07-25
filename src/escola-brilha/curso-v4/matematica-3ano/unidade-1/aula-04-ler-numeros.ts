import type { AulaV4 } from "../../types";

/**
 * Aula 4 — "Ler e Escrever Números até 1.000"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: nomes das centenas (cem, duzentos...); ligação com "e" entre
 * as casas; família dos teens (11-19); zero no meio (pula ao ler).
 * BNCC: EF03MA01.
 * Metodologias: Skemp (leitura relacional) · RME.
 */
export const aula04_lerNumeros: AulaV4 = {
  slug: "04-ler-numeros",
  titulo: "Ler e Escrever Números",
  iconeTrilha: "📖",
  bncc: ["EF03MA01"],
  duracaoMin: 20,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "A Prefeita ditou um número...",
    historia:
      "A Prefeita ditou pra você: 'Registre trezentos e quarenta e dois habitantes!' Você precisa escrever esse número na placa. Depois, virou uma placa nova: 705. Como se lê? Hoje aprendemos os dois lados — LER e ESCREVER — sem confusão.",
  },

  momento02_exploracao: {
    instrucao: "Compare três placas e como cada uma se lê.",
    cenas: [
      { tipo: "texto", texto: "100 → cem" },
      { tipo: "texto", texto: "342 → trezentos E quarenta E dois", destaque: true },
      { tipo: "texto", texto: "705 → setecentos E cinco (dezena é 0 — não se fala)" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que colocamos 'e' entre as casas ao ler?",
    pista: "O 'e' junta as partes: centena E dezena E unidade.",
    revelacao:
      "REGRA de leitura: fale a CENTENA + 'e' + a DEZENA + 'e' + a UNIDADE. Se alguma casa for 0, PULE ela. E 100 tem nome próprio: CEM.",
  },

  momento04_explicacao: {
    titulo: "Nomes e regras de leitura",
    etapas: [
      {
        texto:
          "Cada CENTENA tem um nome: cem, duzentos, trezentos, quatrocentos, quinhentos, seiscentos, setecentos, oitocentos, novecentos.",
        exemploReal: {
          contexto:
            "A biblioteca da Prefeitura tem 500 livros. Lê-se 'quinhentos livros'.",
          casasValor: {
            numero: 500,
            extenso: "quinhentos",
            mostrarDecomposicao: true,
          },
          destaque: "500 = 5 centenas + 0 + 0 → 'quinhentos'.",
        },
      },
      {
        texto:
          "As DEZENAS redondas: dez, vinte, trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa.",
        exemploReal: {
          contexto: "A escola tem 60 alunos no 3º ano. Lê-se 'sessenta alunos'.",
          casasValor: {
            numero: 60,
            extenso: "sessenta",
            mostrarDecomposicao: true,
          },
          destaque: "60 = 6 dezenas + 0 unidades → 'sessenta'.",
        },
      },
      {
        texto:
          "Família dos TEENS (11–19) tem nomes próprios: onze, doze, treze, catorze, quinze, dezesseis, dezessete, dezoito, dezenove.",
        exemploReal: {
          contexto:
            "O prédio da Prefeitura tem 215 janelas. Cuidado: os últimos dois dígitos são 15 = 'quinze', não 'dez e cinco'.",
          casasValor: {
            numero: 215,
            extenso: "duzentos e quinze",
            mostrarDecomposicao: true,
          },
          destaque: "215 = 200 + 15 → 'duzentos e quinze'.",
        },
      },
      {
        texto:
          "Se a DEZENA for 0, PULE ao ler — vai direto da centena pra unidade.",
        exemploReal: {
          contexto:
            "O crachá do zelador é 704. Como a dezena é 0, lê-se 'setecentos e quatro' (a dezena some da fala).",
          casasValor: {
            numero: 704,
            extenso: "setecentos e quatro",
            mostrarDecomposicao: true,
          },
          destaque: "704 = 700 + 0 + 4. Dezena zero não é falada.",
        },
      },
      {
        texto:
          "Chegou a 1.000? Nasce a casa do MILHAR. Lê-se 'mil'.",
        exemploReal: {
          contexto:
            "O Censo da Cidade totalizou 1.248 habitantes. Lemos por partes: milhar + centena + dezena + unidade.",
          casasValor: {
            numero: 1248,
            extenso: "mil duzentos e quarenta e oito",
            mostrarDecomposicao: true,
          },
          destaque: "1.248 = 1 milhar + 248 → 'mil duzentos e quarenta e oito'.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha vai LER o número 468 em voz alta:",
    passos: [
      "Olho a CENTENA: 4 → 'quatrocentos'.",
      "Junto com 'e' + a DEZENA: 6 → 'sessenta'.",
      "Junto com 'e' + a UNIDADE: 8 → 'oito'.",
      "Fala completa: 'QUATROCENTOS E SESSENTA E OITO'. 📖",
    ],
    resposta: "quatrocentos e sessenta e oito",
    casasValor: {
      numero: 468,
      mostrarDecomposicao: true,
      extenso: "quatrocentos e sessenta e oito",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Como se lê 250?",
    dica: "Centena 2 → duzentos. Dezena 5 → cinquenta. Unidade 0 → pula.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "250 lê-se:",
      opcoes: [
        { nome: "duzentos e cinquenta" },
        { nome: "vinte e cinquenta" },
        { nome: "duzentos e cinco" },
      ],
      respostaCerta: "duzentos e cinquenta",
      feedbackAcerto:
        "🎉 Isso! 200 + 50 + 0 → 'duzentos e cinquenta'. Unidade zero não se fala.",
      feedbackErro:
        "200 = 'duzentos'. 50 = 'cinquenta'. Junte com 'e': 'duzentos e cinquenta'.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! A Prefeita disse: 'setecentos e treze'. Que número é esse?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número:",
      opcoes: [{ nome: "73" }, { nome: "703" }, { nome: "713" }],
      respostaCerta: "713",
      feedbackAcerto:
        "🎯 Isso! 700 + 13 = 713. 'Treze' já é 13 (família teen).",
      feedbackErro:
        "Cuidado: 'treze' já é 13, não 'dez e três'. 700 + 13 = 713.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita pediu um cartaz que diga 'CEM habitantes'. Você precisa escrever esse número.",
    problema: "Cem = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número certo:",
      opcoes: [{ nome: "10" }, { nome: "100" }, { nome: "1.000" }],
      respostaCerta: "100",
      feedbackAcerto:
        "🎯 Isso! CEM = 100. É o nome próprio de 1 centena cheia.",
      feedbackErro: "Cem = 100. Dez = 10. Mil = 1.000. Só 100 tem esse nome curto.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ler: CENTENA + 'e' + DEZENA + 'e' + UNIDADE.",
      "Se uma casa é 0, PULE ela.",
      "100 = cem. 200-900 têm nomes próprios.",
      "11 a 19 têm nomes próprios (onze, doze, treze...).",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "'Quatrocentos e nove' é qual número?",
      opcoes: [{ nome: "49" }, { nome: "409" }, { nome: "490" }],
      respostaCerta: "409",
      feedbackAcerto: "🎉 400 + 0 + 9 = 409. A dezena é 0 (não se fala).",
      feedbackErro: "400 + 0 + 9 = 409. 'quatrocentos e nove' pula a dezena vazia.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Oitocentos e vinte e cinco' é:",
        opcoes: ["825", "285", "852"],
        correta: 0,
        feedbackAcerto: "🎉 800 + 20 + 5 = 825.",
        feedbackErro: "800 + 20 + 5 = 825.",
      },
      {
        pergunta: "Como se lê 606?",
        opcoes: ["seis e seis", "seiscentos e seis", "sessenta e seis"],
        correta: 1,
        feedbackAcerto: "Isso! 600 + 0 + 6 → 'seiscentos e seis'.",
        feedbackErro:
          "600 = 'seiscentos'. Dezena 0 pula. 6 = 'seis'. Fica 'seiscentos e seis'.",
      },
      {
        pergunta: "Como se lê 312?",
        opcoes: [
          "trezentos e doze",
          "trezentos e um e dois",
          "trinta e doze",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 300 + 12 (doze — família teen) → 'trezentos e doze'.",
        feedbackErro:
          "300 = 'trezentos'. 12 = 'doze' (não 'dez e dois'). Fica 'trezentos e doze'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Ditado dos Números",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Um adulto DITA 5 números entre 100 e 999 (ex.: 'quatrocentos e trinta e sete').",
      "Você escreve o número na placa CDU.",
      "Depois inverta: você fala em voz alta, o adulto escreve.",
      "Confiram no fim. Marque em vermelho os que precisam de repetição.",
    ],
    registro: "📸 Foto da folha com os 5 números escritos.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
