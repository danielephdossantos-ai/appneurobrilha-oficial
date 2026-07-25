import type { AulaV4 } from "../../types";

export const aula06_problemasMaisMenos: AulaV4 = {
  slug: "u2-06-problemas-mais-menos",
  titulo: "Problemas de somar e subtrair",
  iconeTrilha: "🧩",
  bncc: ["EF04MA13", "EF04MA05"],
  duracaoMin: 22,
  metodologias: ["vergnaud", "rme", "skemp"],

  momento01_motivacao: {
    titulo: "Ler o problema",
    historia:
      "{NOME}, decidir + ou − depende da HISTÓRIA. 'Chegaram mais' = soma. 'Foram embora' = subtração. 'Diferença entre' = subtração.",
  },
  momento02_exploracao: {
    instrucao: "Pistas de linguagem.",
    cenas: [
      { tipo: "texto", texto: "Soma: chegaram, ganhou, no total, juntou.", destaque: true },
      { tipo: "texto", texto: "Subtração: sobrou, foi embora, tirou, diferença, quantos a mais/a menos." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "'Quantos a mais' pede + ou −?",
    pista: "É comparar dois grupos.",
    revelacao: "Comparar = subtrair o menor do maior.",
  },
  momento04_explicacao: {
    titulo: "Três tipos clássicos (Vergnaud)",
    etapas: [
      {
        texto: "Composição: parte + parte = todo. Ex.: 1.230 meninos + 1.145 meninas.",
        exemploReal: {
          contexto: "Escola do Reino.",
          destaque: "1.230 + 1.145 = 2.375 alunos.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [1230, 1145],
            resultado: 2375,
            passos: [
              { coluna: "U", fala: "0 + 5 = 5.", digito: 5 },
              { coluna: "D", fala: "3 + 4 = 7.", digito: 7 },
              { coluna: "C", fala: "2 + 1 = 3.", digito: 3 },
              { coluna: "UM", fala: "1 + 1 = 2.", digito: 2 },
            ],
          },
        },
      },
      {
        texto: "Transformação: começou com X, tirou/ganhou Y. Ex.: tinha 3.500, gastou 1.240.",
        exemploReal: {
          contexto: "Caixa do reino.",
          destaque: "3.500 − 1.240 = 2.260.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [3500, 1240],
            resultado: 2260,
            passos: [
              { coluna: "U", fala: "0 − 0 = 0.", digito: 0 },
              { coluna: "D", fala: "0 − 4 não dá. 10 − 4 = 6. C vira 4.", digito: 6 },
              { coluna: "C", fala: "4 − 2 = 2.", digito: 2 },
              { coluna: "UM", fala: "3 − 1 = 2.", digito: 2 },
            ],
          },
        },
      },
      {
        texto: "Comparação: dois grupos, quantos a mais? Ex.: 2.500 e 1.850.",
        exemploReal: {
          contexto: "Comparando aldeias.",
          destaque: "2.500 − 1.850 = 650 a mais.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Tinha 4.230 reais. Gastou 1.560. Quanto sobrou?",
    passos: ["Palavra-chave: gastou → subtração.", "4.230 − 1.560 = 2.670."],
    resposta: "R$ 2.670",
    casasValor: { numero: 2670, mostrarDecomposicao: true, extenso: "dois mil, seiscentos e setenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "A cidade tinha 3.450 moradores. Chegaram 1.276 novos. Quantos agora?",
    dica: "'Chegaram' = soma.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.726" }, { nome: "4.626" }, { nome: "4.826" }],
      respostaCerta: "4.726",
      feedbackAcerto: "🎯 4.726 moradores.",
      feedbackErro: "3.450 + 1.276 = 4.726.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Uma padaria fez 2.800 pães. Vendeu 1.945. Quantos sobraram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "855" }, { nome: "755" }, { nome: "955" }],
      respostaCerta: "855",
      feedbackAcerto: "🎯 855 pães.",
      feedbackErro: "2.800 − 1.945 = 855.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana leu 1.240 páginas. Bruno leu 895.",
    problema: "Quantas páginas Ana leu a mais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "345" }, { nome: "245" }, { nome: "445" }],
      respostaCerta: "345",
      feedbackAcerto: "🎯 345 páginas a mais.",
      feedbackErro: "Comparar = subtrair: 1.240 − 895 = 345.",
    },
  },
  momento09_revisao: {
    pontos: ["Leia o problema com calma.", "Marque a pergunta.", "Escolha + ou − pela ação da história."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Tinha 5.000 reais. Ganhou 2.350. Ficou com:", opcoes: ["7.350", "2.650", "7.250"], correta: 0, feedbackAcerto: "🎉 7.350.", feedbackErro: "Ganhou = soma: 5.000+2.350=7.350." },
      { pergunta: "Escola com 3.200 alunos, saíram 1.450. Ficaram:", opcoes: ["1.750", "1.650", "1.850"], correta: 0, feedbackAcerto: "🎉 1.750.", feedbackErro: "Saíram = subtração: 3.200−1.450=1.750." },
      { pergunta: "Time A: 4.500 pontos. Time B: 3.780. Diferença:", opcoes: ["720", "620", "820"], correta: 0, feedbackAcerto: "🎉 720.", feedbackErro: "Diferença = subtração: 4.500−3.780=720." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Inventando problemas",
    materiais: ["Papel"],
    passos: ["Invente 3 problemas com números de 4 algarismos.", "Um de soma, um de subtração e um de comparação.", "Peça alguém pra resolver."],
    registro: "📸 Foto dos 3 problemas resolvidos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
