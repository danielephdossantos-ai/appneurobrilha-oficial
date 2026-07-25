import type { AulaV4 } from "../../types";

export const aula01_bilhao: AulaV4 = {
  slug: "u1-01-bilhao",
  titulo: "Do milhão ao bilhão",
  iconeTrilha: "🔬",
  bncc: ["EF06MA01"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "O Laboratório abriu as portas",
    historia:
      "{NOME}, você foi chamado(a) ao LABORATÓRIO. Primeira missão: entender números TÃO grandes que passam do milhão. Chegam ao BILHÃO. Aqui, todo número vira HIPÓTESE que a gente testa.",
  },

  momento02_exploracao: {
    instrucao: "Toque nas classes. Cada grupo de 3 dígitos é uma CLASSE.",
    cenas: [
      { tipo: "texto", texto: "Da direita pra esquerda: Unidades · Milhar · Milhão · Bilhão.", destaque: true },
      {
        tipo: "tabela",
        titulo: "As 4 classes do sistema decimal",
        cabecalhos: ["Classe", "Valor de 1", "Nº de zeros"],
        linhas: [
          { rotulo: "Unidades", valores: ["1", "0"] },
          { rotulo: "Milhar", valores: ["1.000", "3"] },
          { rotulo: "Milhão", valores: ["1.000.000", "6"] },
          { rotulo: "Bilhão", valores: ["1.000.000.000", "9"] },
        ],
        destacar: { linha: 3 },
      },
      { tipo: "texto", texto: "Cada classe é 1.000× a anterior. Pule de 3 em 3 zeros." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quantos milhões cabem em 1 bilhão?",
    pista: "Cada classe é ×1.000 da anterior. Milhão → Bilhão = ×1.000.",
    revelacao: "1 bilhão = 1.000 milhões = 1.000.000.000 (9 zeros).",
  },

  momento04_explicacao: {
    titulo: "Ler por classes — separar em blocos de 3",
    etapas: [
      {
        texto: "Separe o número em CLASSES pelos pontos. Depois leia cada bloco com o nome dele.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Exemplo: 2.345.678.901",
          visualMat: {
            tipo: "tabela",
            titulo: "2 · 345 · 678 · 901",
            cabecalhos: ["Bilhão", "Milhão", "Milhar", "Unidade"],
            linhas: [{ rotulo: "Bloco", valores: ["2", "345", "678", "901"] }],
          },
          destaque: "Lê-se: dois bilhões, trezentos e quarenta e cinco milhões, seiscentos e setenta e oito mil, novecentos e um.",
        },
      },
      {
        texto: "Números menores? Mesma regra — só tem menos classes.",
        exemploReal: {
          contexto: "42.700.000",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Milhão", "Milhar", "Unidade"],
            linhas: [{ rotulo: "Bloco", valores: ["42", "700", "000"] }],
          },
          destaque: "Quarenta e dois milhões, setecentos mil.",
        },
      },
      {
        texto: "Zeros de classes intermediárias vazias NÃO são lidos, mas seguram a posição.",
        exemploReal: {
          contexto: "3.005.000.000",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Bilhão", "Milhão", "Milhar", "Unidade"],
            linhas: [{ rotulo: "Bloco", valores: ["3", "005", "000", "000"] }],
            destacar: { coluna: 2 },
          },
          destaque: "Três bilhões e cinco milhões.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva por extenso 1.200.000.000.",
    resposta: "Um bilhão e duzentos milhões",
    visualMat: {
      tipo: "tabela",
      titulo: "1.200.000.000 — separado por classes",
      cabecalhos: ["Bilhão", "Milhão", "Milhar", "Unidade"],
      linhas: [{ rotulo: "Bloco", valores: ["1", "200", "000", "000"] }],
    },
    passos: [
      "Separe pelos pontos: 1 · 200 · 000 · 000.",
      "Nomeie da esquerda pra direita: 1 bilhão, 200 milhões, 0 mil, 0 unidades.",
      "Leia junto — pula os zeros: um bilhão e duzentos milhões.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Como se lê 5.030.000?",
    dica: "Separe: 5 · 030 · 000. Três classes.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a leitura correta:",
      opcoes: [
        { nome: "Cinco milhões e trinta mil" },
        { nome: "Cinco milhões e trezentos mil" },
        { nome: "Cinquenta milhões e trinta mil" },
      ],
      respostaCerta: "Cinco milhões e trinta mil",
      feedbackAcerto: "🎯 Bloco de milhar = 030 = trinta.",
      feedbackErro: "5 (milhão) · 030 (milhar) · 000 = cinco milhões e trinta mil.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "2.400.000.000 é igual a:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "2 bilhões e 400 milhões" },
        { nome: "24 bilhões" },
        { nome: "240 milhões" },
      ],
      respostaCerta: "2 bilhões e 400 milhões",
      feedbackAcerto: "🎯 2 · 400 · 000 · 000 → 2 bi + 400 mi.",
      feedbackErro: "Tem 10 algarismos → começa em bilhão. 2 bi + 400 mi.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "População (aproximada): Brasil ≈ 203.000.000 · Mundo ≈ 8.000.000.000.",
    problema: "Quantas vezes o mundo tem mais habitantes que o Brasil?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Estimativa:",
      opcoes: [
        { nome: "Cerca de 40 vezes" },
        { nome: "Cerca de 4 vezes" },
        { nome: "Cerca de 400 vezes" },
      ],
      respostaCerta: "Cerca de 40 vezes",
      feedbackAcerto: "🎯 8.000 (mi) ÷ 200 (mi) ≈ 40.",
      feedbackErro: "8 bilhões ÷ 200 milhões ≈ 40.",
    },
  },

  momento09_revisao: {
    pontos: [
      "1 classe = bloco de 3 dígitos. ×1.000 da anterior.",
      "Da direita pra esquerda: Unidade → Milhar → Milhão → Bilhão.",
      "Bilhão = 1.000.000.000 (9 zeros).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1 bilhão é igual a:",
        opcoes: ["1.000 milhões", "100 milhões", "10 milhões"],
        correta: 0,
        feedbackAcerto: "🎉 1 bi = 1.000 mi.",
        feedbackErro: "×1.000 do milhão.",
      },
      {
        pergunta: "Como se lê 12.500.000?",
        opcoes: ["Doze milhões e quinhentos mil", "Um bilhão e 250 mil", "Cento e vinte e cinco milhões"],
        correta: 0,
        feedbackAcerto: "🎉 12 (mi) · 500 (mil).",
        feedbackErro: "Tem 8 algarismos → começa em milhão.",
      },
      {
        pergunta: "3.000.000.000 é:",
        opcoes: ["3 bilhões", "3 milhões", "300 milhões"],
        correta: 0,
        feedbackAcerto: "🎉 9 zeros à direita do 3.",
        feedbackErro: "9 zeros = bilhão.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-bilhão",
    materiais: ["Jornal ou site de notícias"],
    passos: [
      "Encontre uma notícia com um número ≥ 1 milhão.",
      "Copie o número e escreva por extenso.",
      "Diga a que classe pertence o dígito mais à esquerda.",
    ],
    registro: "📸 Foto da manchete + seu registro.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
