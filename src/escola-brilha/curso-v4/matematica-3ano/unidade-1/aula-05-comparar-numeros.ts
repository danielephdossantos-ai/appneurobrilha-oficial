import type { AulaV4 } from "../../types";

/**
 * Aula 5 — "Comparar Números (>, <, =) até 1.000"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: regra CDU para comparação — começa pela centena; empatou, dezena;
 * empatou, unidade. Zero conta como valor menor.
 * BNCC: EF03MA02, EF03MA03.
 */
export const aula05_compararNumeros: AulaV4 = {
  slug: "05-comparar-numeros",
  titulo: "Quem é o Maior?",
  iconeTrilha: "⚖️",
  bncc: ["EF03MA02", "EF03MA03"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],

  momento01_motivacao: {
    titulo: "Duas placas parecidíssimas",
    historia:
      "Chegaram dois registros no Cartório: o bairro Central tem 348 habitantes e o bairro Vale, 384. A Prefeita perguntou: 'Qual bairro tem MAIS?' Os números são quase iguais. Precisamos de uma regra que não falhe nunca.",
  },

  momento02_exploracao: {
    instrucao: "Compare mentalmente.",
    cenas: [
      { tipo: "texto", texto: "3 vs 30 é fácil: 30 é muito maior." },
      { tipo: "texto", texto: "Mas 348 vs 384... precisa de método.", destaque: true },
      { tipo: "texto", texto: "Vamos criar uma regra passo a passo que sempre funciona." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se as centenas empatam, como decidir quem é maior?",
    pista: "Vá pra próxima casa: a dezena.",
    revelacao:
      "REGRA CDU: começa pela CENTENA. Quem tem mais centena vence — para. Empatou? Vai pra DEZENA. Empatou? Vai pra UNIDADE. Assim que uma casa é diferente, a comparação termina.",
  },

  momento04_explicacao: {
    titulo: "Sinais e o método CDU",
    etapas: [
      {
        texto:
          "Sinais: '>' MAIOR que · '<' MENOR que · '=' IGUAL. A 'boca' do sinal aponta pro MAIOR.",
        exemploReal: {
          contexto:
            "500 e 300: só de olhar as centenas, 5 > 3. Escrevemos: 500 > 300.",
          casasValor: {
            numero: 500,
            extenso: "quinhentos",
            mostrarDecomposicao: true,
          },
          destaque: "5 na centena vence. A boca do '>' aponta pro 500.",
        },
      },
      {
        texto:
          "Passo 1 — compare as CENTENAS. Se diferentes, quem tiver mais centena vence e a comparação PARA.",
        exemploReal: {
          contexto:
            "Bairro A: 512 habitantes. Bairro B: 428 habitantes. Compare as centenas: 5 > 4.",
          casasValor: {
            numero: 512,
            extenso: "quinhentos e doze",
            mostrarDecomposicao: true,
          },
          destaque: "512 > 428 porque 5 > 4 na centena. Nem precisa olhar o resto.",
        },
      },
      {
        texto:
          "Passo 2 — se as centenas empatarem, compare as DEZENAS.",
        exemploReal: {
          contexto:
            "Bairro Central: 348. Bairro Vale: 384. Centenas empatam (3=3). Olho a dezena: 4 vs 8.",
          casasValor: {
            numero: 384,
            extenso: "trezentos e oitenta e quatro",
            mostrarDecomposicao: true,
          },
          destaque: "384 > 348 porque 8 > 4 na dezena.",
        },
      },
      {
        texto:
          "Passo 3 — se centenas E dezenas empatarem, olhe a UNIDADE.",
        exemploReal: {
          contexto:
            "Duas ruas: rua A tem 352 casas, rua B tem 357. Centenas (3=3) e dezenas (5=5) empatam. Unidade decide.",
          casasValor: {
            numero: 357,
            extenso: "trezentos e cinquenta e sete",
            mostrarDecomposicao: true,
          },
          destaque: "352 < 357 porque 2 < 7 na unidade.",
        },
      },
      {
        texto:
          "O ZERO é um valor menor que qualquer outro dígito naquela casa.",
        exemploReal: {
          contexto:
            "Compare 630 e 603. Centenas empatam. Dezenas: 3 vs 0. Como 0 < 3, o 603 é menor.",
          casasValor: {
            numero: 630,
            extenso: "seiscentos e trinta",
            mostrarDecomposicao: true,
          },
          destaque: "630 > 603 porque 3 > 0 na dezena.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha compara 274 e 271, casa por casa:",
    passos: [
      "Centenas: 2 = 2 → empate. Vai pra dezena.",
      "Dezenas: 7 = 7 → empate. Vai pra unidade.",
      "Unidades: 4 vs 1 → 4 > 1.",
      "Conclusão: 274 > 271.",
      "A regra CDU não falha! ⚖️",
    ],
    resposta: "274 > 271",
    casasValor: {
      numero: 274,
      mostrarDecomposicao: true,
      extenso: "duzentos e setenta e quatro",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! 428 __ 512. Qual sinal usar?",
    dica: "Compare a centena primeiro: 4 vs 5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o sinal:",
      opcoes: [{ nome: "428 > 512" }, { nome: "428 < 512" }, { nome: "428 = 512" }],
      respostaCerta: "428 < 512",
      feedbackAcerto:
        "🎉 Isso! Centena: 4 < 5. Fica 428 < 512 (nem precisa olhar o resto).",
      feedbackErro:
        "Centena decide: 4 < 5. Então 428 < 512. A comparação PAROU aí.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! 630 __ 603. Qual sinal?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o sinal correto:",
      opcoes: [{ nome: "630 > 603" }, { nome: "630 < 603" }, { nome: "630 = 603" }],
      respostaCerta: "630 > 603",
      feedbackAcerto:
        "🎯 Perfeito! Centenas empatam (6=6). Dezenas: 3 > 0 → 630 > 603.",
      feedbackErro:
        "C empata (6=6). Dezena: 3 vs 0 → 3 é maior. 630 > 603.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita quer ranquear 3 bairros pela população: Central (215), Vale (251), Alto (152).",
    problema: "Qual bairro tem o MAIOR número de habitantes?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o bairro mais populoso:",
      opcoes: [
        { nome: "Central (215)" },
        { nome: "Vale (251)" },
        { nome: "Alto (152)" },
      ],
      respostaCerta: "Vale (251)",
      feedbackAcerto:
        "🎯 Isso! Alto (152) tem C=1 (menor). Entre 215 e 251, dezena decide: 5 > 1 → Vale vence.",
      feedbackErro:
        "Alto tem C=1 (fora). Entre 215 e 251, dezena: 5 > 1 → Vale (251) é o maior.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Compare da ESQUERDA pra direita: Centena → Dezena → Unidade.",
      "Assim que uma casa é diferente, PAROU: ela decide.",
      "A boca do sinal aponta pro MAIOR.",
      "Zero é menor que qualquer outro dígito na mesma casa.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "489 __ 498. Qual sinal?",
      opcoes: [{ nome: "489 > 498" }, { nome: "489 < 498" }, { nome: "489 = 498" }],
      respostaCerta: "489 < 498",
      feedbackAcerto: "🎉 C empata. Dezena: 8 < 9 → 489 < 498.",
      feedbackErro: "C=4=4 (empata). Dezena: 8 < 9 → 489 < 498.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "700 __ 690. Qual sinal?",
        opcoes: ["700 > 690", "700 < 690", "700 = 690"],
        correta: 0,
        feedbackAcerto: "🎉 Centena: 7 > 6 → 700 > 690.",
        feedbackErro: "C: 7 > 6. Já decide. 700 > 690.",
      },
      {
        pergunta: "313 __ 331. Qual sinal?",
        opcoes: ["313 > 331", "313 < 331", "313 = 331"],
        correta: 1,
        feedbackAcerto: "Isso! C empata (3=3). Dezena: 1 < 3 → 313 < 331.",
        feedbackErro: "C empata. Dezena: 1 < 3. Fica 313 < 331.",
      },
      {
        pergunta: "555 __ 555. Qual sinal?",
        opcoes: ["555 > 555", "555 < 555", "555 = 555"],
        correta: 2,
        feedbackAcerto: "🎉 Todas as casas iguais → 555 = 555.",
        feedbackErro: "Todos os dígitos batem casa a casa. Sinal de igual.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Duelo dos Números",
    materiais: [
      "Baralho ou papéis com dígitos 0-9",
      "Papel com 3 espaços marcados: C D U",
    ],
    passos: [
      "Cada jogador sorteia 3 cartas e monta o maior número que conseguir.",
      "Coloquem lado a lado e usem >, <, = para comparar.",
      "Quem monta o maior vence a rodada.",
      "Faça 5 rodadas.",
    ],
    registro: "📸 Foto do duelo final com o vencedor destacado.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
