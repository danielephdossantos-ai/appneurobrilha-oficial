import type { AulaV4 } from "../../types";

/**
 * Aula 6 · U1 — "Ordenar números até 10.000"
 * BNCC: EF04MA02.
 */
export const aula06_ordenarAte10000: AulaV4 = {
  slug: "u1-06-ordenar-ate-10000",
  titulo: "Ordenar números até 10.000",
  iconeTrilha: "🔢",
  bncc: ["EF04MA02"],
  duracaoMin: 18,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "Fila do maior ao menor",
    historia:
      "{NOME}, o Reino vai organizar seus vilarejos por população. Vieram 5 números: 3.240, 3.204, 3.402, 3.024, 3.420. Alguém precisa colocá-los em ordem!",
  },

  momento02_exploracao: {
    instrucao: "Ordenar é comparar em cadeia.",
    cenas: [
      { tipo: "texto", texto: "Crescente = do menor pro maior.", destaque: true },
      { tipo: "texto", texto: "Decrescente = do maior pro menor." },
      { tipo: "texto", texto: "Compare de dois em dois, casa por casa." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual truque acelera a fila?",
    pista: "Comece pelo MILHAR. Depois centena. Só desce se empatar.",
    revelacao:
      "Se os milhares são iguais, ordena pela centena. Se as centenas empatam, pela dezena. E assim por diante.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo pra ordenar",
    etapas: [
      {
        texto: "1º Junte os números. 2º Ache o menor. 3º Ache o próximo menor. 4º Continue até acabar.",
        exemploReal: {
          contexto: "Ordenando 3.240, 3.204, 3.402 em ordem CRESCENTE:",
          destaque: "Compare da esquerda pra direita. Milhar igual (3). Centena: 2, 2, 4 → 3.402 é o maior. Empate em 3.240 e 3.204 → dezena: 4>0. Fila: 3.204, 3.240, 3.402.",
        },
      },
      {
        texto: "Decrescente é o mesmo processo, mas ache o MAIOR primeiro.",
        exemploReal: {
          contexto: "Ordem DECRESCENTE dos mesmos números:",
          destaque: "3.402 > 3.240 > 3.204.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordene em ordem CRESCENTE: 1.900, 1.099, 1.909.",
    resposta: "1.099, 1.900, 1.909.",
    passos: [
      "Milhar igual em todos (1).",
      "Centena: 0 (1.099) < 9 (1.900) = 9 (1.909) → menor é 1.099.",
      "Entre 1.900 e 1.909: dezena igual, unidade 0<9 → 1.900 < 1.909.",
      "Fila: 1.099, 1.900, 1.909.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é a ordem CRESCENTE de 5.010, 5.100, 5.001?",
    dica: "Compare centena, depois dezena, depois unidade.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "5.001, 5.010, 5.100" },
        { nome: "5.100, 5.010, 5.001" },
        { nome: "5.010, 5.001, 5.100" },
      ],
      respostaCerta: "5.001, 5.010, 5.100",
      feedbackAcerto: "🎯 UM=5 nos três. C: 0=0=1 → 5.100 é o maior. Entre os outros, D: 0<1 → 5.001<5.010.",
      feedbackErro: "Menor primeiro: 5.001. Depois 5.010. Por último 5.100.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Ordem DECRESCENTE de 7.400, 7.040, 7.404, 7.044.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "7.404, 7.400, 7.044, 7.040" },
        { nome: "7.400, 7.404, 7.044, 7.040" },
        { nome: "7.040, 7.044, 7.400, 7.404" },
      ],
      respostaCerta: "7.404, 7.400, 7.044, 7.040",
      feedbackAcerto: "🎯 Maior: 7.404. Depois 7.400. Depois 7.044. Menor: 7.040.",
      feedbackErro: "Decrescente = maior primeiro. C=4 nos dois primeiros; U=4>0 → 7.404 > 7.400.",
    },
  },

  momento08_aplicacao: {
    contexto: "Vilarejos por população: Colina (2.310), Prado (2.031), Rio (2.301), Fonte (2.130).",
    problema: "Ordem CRESCENTE?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "2.031, 2.130, 2.301, 2.310" },
        { nome: "2.310, 2.301, 2.130, 2.031" },
        { nome: "2.031, 2.301, 2.130, 2.310" },
      ],
      respostaCerta: "2.031, 2.130, 2.301, 2.310",
      feedbackAcerto: "🎯 Ordem crescente: menor → maior.",
      feedbackErro: "Comece pela centena: 0<1<3. Entre 2.301 e 2.310: D=0<1 → 2.301 antes.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ordem crescente: menor → maior.",
      "Ordem decrescente: maior → menor.",
      "Compare casa por casa: UM, C, D, U.",
      "Empate numa casa? Vá pra próxima à direita.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Ordem CRESCENTE de 4.567, 4.657, 4.576:",
        opcoes: ["4.567, 4.576, 4.657", "4.567, 4.657, 4.576", "4.657, 4.576, 4.567"],
        correta: 0,
        feedbackAcerto: "🎉 Menor primeiro: 4.567.",
        feedbackErro: "C=5=5=6 → 4.657 é o maior. Entre 4.567 e 4.576: D=6<7 → 4.567 primeiro.",
      },
      {
        pergunta: "Ordem DECRESCENTE de 3.030, 3.003, 3.300:",
        opcoes: ["3.003, 3.030, 3.300", "3.300, 3.030, 3.003", "3.300, 3.003, 3.030"],
        correta: 1,
        feedbackAcerto: "🎉 Maior primeiro.",
        feedbackErro: "C: 3>0=0. Entre 3.030 e 3.003: D=3>0 → 3.030 antes.",
      },
      {
        pergunta: "Qual é o MAIOR: 8.008, 8.080, 8.800?",
        opcoes: ["8.008", "8.080", "8.800"],
        correta: 2,
        feedbackAcerto: "🎉 C=8 é o maior. 8.800 vence.",
        feedbackErro: "Centena decide primeiro: 8>0=0.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fila dos preços",
    materiais: ["Encartes ou notas fiscais", "Caderno"],
    passos: [
      "Ache 5 preços/valores entre 1.000 e 9.999.",
      "Organize em ordem crescente e decrescente.",
      "Peça a alguém pra conferir.",
    ],
    registro: "📸 Foto do caderno.",
  },

  recompensa: { xp: 110, moedas: 55 },
};
