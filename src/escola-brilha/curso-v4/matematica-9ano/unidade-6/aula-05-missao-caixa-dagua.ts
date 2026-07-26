import type { AulaV4 } from "../../types";

export const aula05_missaoCaixaDagua: AulaV4 = {
  slug: "u6-05-missao-caixa-dagua",
  titulo: "Missão: A Caixa-d'Água e a Praça do Bairro",
  iconeTrilha: "🚰",
  bncc: ["EF09MA19", "EF09MA20"],
  duracaoMin: 35,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Um projeto de engenharia para o bairro",
    historia:
      "{NOME}, chegou sua missão final! A prefeitura te contratou para planejar a caixa-d'água de um condomínio E a reforma de uma praça. Você vai usar tudo o que aprendeu: circunferência, área de figuras, volume de sólidos, capacidade em litros e até o custo do projeto. Vamos, engenheira, engenheiro?",
  },

  momento02_exploracao: {
    instrucao: "Reveja as ferramentas que você vai usar nesta missão.",
    cenas: [
      { tipo: "solido", forma: "cilindro", legenda: "Caixa-d'água cilíndrica" },
      { tipo: "figuraPlana", forma: "circulo", legenda: "Praça circular" },
      {
        tipo: "tabela",
        titulo: "Ferramentas da missão",
        cabecalhos: ["Conceito", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["Área do círculo", "A = 3,14 · r²"] },
          { rotulo: "2", valores: ["Volume do cilindro", "V = 3,14 · r² · h"] },
          { rotulo: "3", valores: ["Capacidade", "1 m³ = 1000 L"] },
          { rotulo: "4", valores: ["Custo", "Custo = quantidade × preço unitário"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Toda missão de engenharia começa com a MESMA pergunta: o que eu preciso calcular primeiro?" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Uma caixa-d'água cilíndrica tem raio 1 m e altura 2 m. Quantos litros ela guarda cheia?",
    pista: "Primeiro calcule o volume em m³, depois converta para litros.",
    revelacao: "V = 3,14 · 1² · 2 = 6,28 m³. Como 1 m³ = 1000 L, a caixa guarda 6280 litros!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Caixa-d'água cilíndrica r = 1 m, h = 2 m",
      passos: [
        { expr: "V = 3,14 · 1² · 2", explica: "Aplico a fórmula do cilindro.", status: "neutro" },
        { expr: "V = 3,14 · 1 · 2 = 6,28 m³", explica: "Multiplico tudo.", status: "ok" },
        { expr: "6,28 m³ · 1000 = 6280 L", explica: "Converto para litros.", status: "ok", professor: "Em projetos reais de caixa-d'água, sempre convertemos o resultado final para litros, pois é assim que a capacidade é anunciada." },
      ],
      fatorada: "6280 litros",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Planejando a caixa-d'água e a praça, passo a passo",
    etapas: [
      {
        texto: "PASSO 1 — Calcular o volume da caixa-d'água (cilindro) e convertê-lo em litros.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Caixa-d'água cilíndrica com raio 1,5 m e altura 2 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 3,14 · r² · h",
            passos: [
              { expr: "r² = 1,5² = 2,25", explica: "Elevo o raio ao quadrado.", status: "neutro" },
              { expr: "V = 3,14 · 2,25 · 2 = 14,13 m³", explica: "Aplico a fórmula completa.", status: "ok" },
              { expr: "14,13 m³ · 1000 = 14130 L", explica: "Converto em litros.", status: "ok", professor: "Sempre calculamos o volume em metros cúbicos primeiro e só depois convertemos, para evitar erro de casas decimais." },
            ],
            fatorada: "14 130 litros",
          },
          destaque: "Volume do cilindro → converter em litros.",
        },
      },
      {
        texto: "PASSO 2 — Calcular a área da praça (círculo) para saber quanto de piso ou grama será usado.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Praça circular com raio 10 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = 3,14 · r²",
            passos: [
              { expr: "r² = 10² = 100", explica: "Elevo o raio ao quadrado.", status: "neutro" },
              { expr: "A = 3,14 · 100 = 314 m²", explica: "Multiplico pelo π aproximado.", status: "ok", professor: "A área do círculo é sempre 3,14 vezes o raio ao quadrado — é a base de qualquer projeto circular." },
            ],
            fatorada: "A = 314 m²",
          },
          destaque: "Área do círculo → base para calcular material e custo.",
        },
      },
      {
        texto: "PASSO 3 — Calcular o custo total, multiplicando a quantidade (área ou volume) pelo preço unitário.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "A praça de 314 m² será gramada. Cada m² de grama custa R$ 12,00.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Custo = área × preço por m²",
            passos: [
              { expr: "Custo = 314 · 12", explica: "Multiplico a área pelo preço unitário.", status: "neutro" },
              { expr: "Custo = R$ 3768,00", explica: "Resultado final do orçamento.", status: "ok", professor: "Em qualquer orçamento, o custo total é sempre a quantidade de material multiplicada pelo preço de cada unidade." },
            ],
            fatorada: "R$ 3768,00",
          },
          destaque: "Custo = quantidade × preço unitário.",
        },
      },
      {
        texto: "PASSO 4 — Combinar tudo: volume da caixa-d'água em litros, área da praça e custo total do projeto.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Resumo do projeto: caixa-d'água com 14 130 L, praça com 314 m², custo de gramado R$ 3768,00.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Relatório final do projeto",
            passos: [
              { expr: "Capacidade da caixa-d'água: 14 130 L", explica: "Suficiente para o consumo do condomínio.", status: "ok" },
              { expr: "Área da praça: 314 m²", explica: "Espaço total a ser reformado.", status: "ok" },
              { expr: "Custo do gramado: R$ 3768,00", explica: "Orçamento apresentado à prefeitura.", status: "ok", professor: "Um bom projeto de engenharia sempre apresenta as três informações juntas: capacidade, área e custo." },
            ],
            fatorada: "Projeto completo!",
          },
          destaque: "Engenharia real une geometria, volume e orçamento.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma caixa-d'água cilíndrica tem raio 1 m e altura 3 m. Quantos litros ela guarda?",
    resposta: "9420 litros",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 3,14 · r² · h, depois converter",
      passos: [
        { expr: "V = 3,14 · 1² · 3", explica: "Aplico a fórmula do cilindro.", status: "neutro" },
        { expr: "V = 3,14 · 3 = 9,42 m³", explica: "Multiplico.", status: "ok" },
        { expr: "9,42 m³ · 1000 = 9420 L", explica: "Converto para litros.", status: "ok", professor: "Repare: sempre termino em litros, pois é a unidade que interessa para o consumo de água." },
      ],
      fatorada: "9420 litros",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo o volume do cilindro em m³.",
      "Converto o resultado para litros multiplicando por 1000.",
      "Apresento a capacidade final da caixa-d'água.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: uma praça circular tem raio 5 m. O metro quadrado de calçamento custa R$ 20,00. Qual é o custo total do calçamento?",
    dica: "Primeiro calcule a área (3,14 · r²), depois multiplique pelo preço unitário.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = 3,14 · 5² ; Custo = A × 20",
      passos: [
        { expr: "r² = 5² = 25", explica: "Elevo o raio ao quadrado.", status: "neutro" },
        { expr: "A = 3,14 · 25 = 78,5 m²", explica: "Área da praça circular.", status: "ok" },
        { expr: "Custo = 78,5 · 20 = ?", explica: "Complete a multiplicação final.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o custo total do calçamento?",
      opcoes: [{ nome: "R$ 1570,00" }, { nome: "R$ 785,00" }, { nome: "R$ 157,00" }],
      respostaCerta: "R$ 1570,00",
      feedbackAcerto: "🎯 A = 78,5 m²; Custo = 78,5 · 20 = R$ 1570,00.",
      feedbackErro: "Calcule a área (3,14·25=78,5 m²) e multiplique pelo preço: 78,5 · 20 = R$ 1570,00.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma caixa-d'água cilíndrica tem raio 2 m e altura 1,5 m. Quantos litros ela comporta?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 3,14 · r² · h, depois converter",
      passos: [
        { expr: "r² = 2² = 4", explica: "Eleve o raio ao quadrado.", status: "neutro" },
        { expr: "V = 3,14 · 4 · 1,5 = ?", explica: "Complete a multiplicação.", status: "neutro" },
        { expr: "Converta o resultado em m³ para litros.", explica: "Multiplique por 1000.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos litros a caixa-d'água comporta?",
      opcoes: [{ nome: "18 840 L" }, { nome: "1884 L" }, { nome: "18,84 L" }],
      respostaCerta: "18 840 L",
      feedbackAcerto: "🎯 V = 3,14 · 4 · 1,5 = 18,84 m³; 18,84 · 1000 = 18 840 L.",
      feedbackErro: "Calcule V = 3,14 · 4 · 1,5 = 18,84 m³ e converta: 18,84 · 1000 = 18 840 L.",
    },
  },

  momento08_aplicacao: {
    contexto: "Missão final: o condomínio quer uma caixa-d'água cilíndrica com raio 1 m e altura 2,5 m, e a praça ao lado (circular, raio 8 m) será gramada a R$ 15,00 o m².",
    problema: "Quantos litros a caixa-d'água guarda e qual é o custo do gramado da praça?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Projeto completo: caixa-d'água + praça",
      passos: [
        { expr: "V caixa = 3,14 · 1² · 2,5 = 7,85 m³", explica: "Volume da caixa-d'água.", status: "neutro" },
        { expr: "Capacidade = 7,85 · 1000 = 7850 L", explica: "Converto para litros.", status: "ok" },
        { expr: "A praça = 3,14 · 8² = 200,96 m²", explica: "Área da praça circular.", status: "ok" },
        { expr: "Custo = 200,96 · 15 = R$ 3014,40", explica: "Multiplico a área pelo preço do gramado.", status: "ok", professor: "Um projeto completo de engenharia sempre junta capacidade (litros) e custo (reais) em um único relatório." },
      ],
      fatorada: "7850 L e R$ 3014,40",
      legenda: "Aplicação — missão final",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a capacidade da caixa-d'água e o custo do gramado?",
      opcoes: [{ nome: "7850 L e R$ 3014,40" }, { nome: "785 L e R$ 301,44" }, { nome: "7850 L e R$ 200,96" }],
      respostaCerta: "7850 L e R$ 3014,40",
      feedbackAcerto: "🎯 V = 7,85 m³ = 7850 L; A praça = 200,96 m²; Custo = 200,96 · 15 = R$ 3014,40.",
      feedbackErro: "Calcule o volume da caixa (7,85 m³ = 7850 L) e a área da praça (200,96 m²), depois multiplique pelo preço: 200,96 · 15 = R$ 3014,40.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Volume do cilindro: V = 3,14 · r² · h.",
      "Conversão: 1 m³ = 1000 L.",
      "Área do círculo: A = 3,14 · r².",
      "Custo total = quantidade (área ou volume) × preço unitário.",
      "Um bom projeto de engenharia junta capacidade, área e custo no relatório final.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma caixa-d'água cilíndrica tem raio 1 m e altura 1 m. Quantos litros ela comporta?",
        opcoes: ["3140 L", "314 L", "31,4 L"],
        correta: 0,
        feedbackAcerto: "🎉 V = 3,14 · 1² · 1 = 3,14 m³ = 3140 L.",
        feedbackErro: "Calcule V = 3,14 · r² · h = 3,14 m³ e converta: 3,14 · 1000 = 3140 L.",
      },
      {
        pergunta: "Uma praça circular tem raio 6 m. Qual é a sua área?",
        opcoes: ["113,04 m²", "37,68 m²", "18,84 m²"],
        correta: 0,
        feedbackAcerto: "🎉 A = 3,14 · 6² = 3,14 · 36 = 113,04 m².",
        feedbackErro: "Use A = 3,14 · r²: 3,14 · 36 = 113,04 m².",
      },
      {
        pergunta: "O metro quadrado de piso custa R$ 25,00. Para uma praça de 100 m², o custo total é:",
        opcoes: ["R$ 2500,00", "R$ 250,00", "R$ 25000,00"],
        correta: 0,
        feedbackAcerto: "🎉 Custo = 100 · 25 = R$ 2500,00.",
        feedbackErro: "Custo = área × preço unitário: 100 · 25 = R$ 2500,00.",
      },
      {
        pergunta: "1 m³ de água corresponde a quantos litros?",
        opcoes: ["1000 L", "100 L", "10 000 L"],
        correta: 0,
        feedbackAcerto: "🎉 1 m³ = 1000 L, uma relação fundamental de capacidade.",
        feedbackErro: "Lembre-se: 1 m³ = 1000 litros, sempre.",
      },
      {
        pergunta: "Um projeto de engenharia mistura área, volume e custo. Qual é a ordem correta de raciocínio?",
        opcoes: [
          "Calcular a medida geométrica (área/volume), depois converter unidades se necessário, e por fim calcular o custo",
          "Calcular o custo primeiro, sem saber a área ou o volume",
          "Não é preciso calcular a área ou o volume, só o preço final",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Primeiro a geometria (área/volume), depois a conversão de unidade, e só então o custo.",
        feedbackErro: "A ordem certa é: 1) calcular área/volume; 2) converter unidades (ex.: litros); 3) calcular o custo multiplicando pela quantidade.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Projete uma caixa-d'água ou praça da sua rua",
    materiais: ["Fita métrica ou trena", "Papel, caneta e calculadora"],
    passos: [
      "Escolha uma caixa-d'água, piscina ou praça perto de casa (ou invente um projeto).",
      "Meça ou estime as dimensões (raio, altura, lado).",
      "Calcule o volume (em litros) ou a área, e um custo aproximado de material.",
      "Apresente seu 'relatório de engenheiro' para a família.",
    ],
    registro: "📸 Foto do relatório com as contas de volume, área e custo.",
  },
  recompensa: { xp: 250, moedas: 150, medalha: "Engenheira/Engenheiro Mirim" },
};
