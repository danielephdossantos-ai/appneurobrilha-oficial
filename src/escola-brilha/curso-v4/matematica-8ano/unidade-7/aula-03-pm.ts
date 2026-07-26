import type { AulaV4 } from "../../types";

export const aula03_pm: AulaV4 = {
  slug: "u7-03-pm",
  titulo: "Princípio Multiplicativo",
  iconeTrilha: "🎲",
  bncc: ["EF08MA22"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Contar sem contar um por um",
    historia:
      "{NOME}, com 3 camisetas e 2 calças, quantos looks diferentes você monta? Dá para listar: 6. Mas e com 10 camisetas, 8 calças e 5 tênis? Listar é impossível. O Princípio Multiplicativo resolve em uma linha: MULTIPLIQUE as escolhas de cada etapa.",
  },
  momento02_exploracao: {
    instrucao: "Veja a árvore virando conta. Cada etapa multiplica.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "3 camisetas × 2 calças = 6 looks",
        cabecalhos: ["Camiseta", "Calça", "Look"],
        linhas: [
          { rotulo: "Branca", valores: ["Jeans", "1"] },
          { rotulo: "Branca", valores: ["Preta", "2"] },
          { rotulo: "Azul", valores: ["Jeans", "3"] },
          { rotulo: "Azul", valores: ["Preta", "4"] },
          { rotulo: "Verde", valores: ["Jeans", "5"] },
          { rotulo: "Verde", valores: ["Preta", "6"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "Regra: se a decisão tem etapas independentes com a₁, a₂, …, aₙ opções, o total é a₁ · a₂ · … · aₙ.",
        destaque: true,
      },
      {
        tipo: "graficoBarras",
        titulo: "Cresce rápido: dígitos de uma senha numérica",
        unidade: "possibilidades",
        barras: [
          { rotulo: "1 díg.", valor: 10 },
          { rotulo: "2 díg.", valor: 100 },
          { rotulo: "3 díg.", valor: 1000 },
          { rotulo: "4 díg.", valor: 10000 },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que multiplicar, e não somar?",
    pista: "Para CADA camiseta existem todas as calças de novo.",
    revelacao:
      "Somar seria escolher camiseta OU calça. Multiplicar é escolher camiseta E calça. 'E' → multiplica; 'ou' (exclusivo) → soma.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3 camisetas e 2 calças",
      passos: [
        { expr: "3 + 2 = 5", explica: "Isso conta peças, não looks.", status: "x" },
        { expr: "Cada camiseta combina com 2 calças", explica: "2 looks por camiseta.", status: "neutro" },
        {
          expr: "3 · 2 = 6 looks",
          explica: "Três grupos de 2.",
          status: "ok",
          professor:
            "Guarde a tradução: a palavra 'e' entre etapas de uma mesma escolha significa multiplicação; a palavra 'ou' entre alternativas que não acontecem juntas significa adição.",
        },
      ],
      fatorada: "Total = 3 · 2 = 6",
    },
  },
  momento04_explicacao: {
    titulo: "Etapa por etapa, sempre multiplicando",
    etapas: [
      {
        texto: "Duas etapas: multiplique as duas quantidades.",
        exemploReal: {
          contexto: "Uma lanchonete tem 4 lanches e 3 sucos. Quantos combos?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Etapas: lanche · suco",
            passos: [
              { expr: "1ª etapa: 4 opções", explica: "Lanches.", status: "neutro" },
              { expr: "2ª etapa: 3 opções", explica: "Sucos.", status: "neutro" },
              { expr: "Total = 4 · 3 = 12", explica: "Combos possíveis.", status: "ok" },
            ],
            fatorada: "12 combos",
          },
          destaque: "12 combos.",
        },
      },
      {
        texto: "Três ou mais etapas: multiplique todas.",
        exemploReal: {
          contexto: "3 camisetas, 2 calças e 4 tênis.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3 · 2 · 4",
            passos: [
              { expr: "3 · 2 = 6", explica: "Camiseta com calça.", status: "neutro" },
              { expr: "6 · 4 = 24", explica: "Cada um dos 6 conjuntos com 4 tênis.", status: "ok" },
              {
                expr: "Total = 24 looks",
                explica: "",
                status: "ok",
                professor:
                  "Não existe limite de etapas. Só verifique se as escolhas são realmente independentes: uma etapa não pode restringir a outra.",
              },
            ],
            fatorada: "24 looks",
          },
          destaque: "24 looks.",
        },
      },
      {
        texto: "Senhas com repetição permitida: cada posição tem TODAS as opções de novo.",
        exemploReal: {
          contexto: "Senha (PIN) de 4 dígitos, de 0 a 9, podendo repetir.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "PIN: _ _ _ _",
            passos: [
              { expr: "1ª posição: 10 opções", explica: "Dígitos 0 a 9.", status: "neutro" },
              { expr: "Cada posição: 10 opções", explica: "Pode repetir.", status: "neutro" },
              { expr: "10 · 10 · 10 · 10 = 10⁴", explica: "Quatro posições.", status: "neutro" },
              {
                expr: "= 10 000 senhas",
                explica: "",
                status: "ok",
                professor:
                  "Quando a repetição é permitida, o total é (número de símbolos) elevado ao (número de posições). Esse é o motivo de senhas longas serem tão mais seguras: cada caractere a mais multiplica tudo de novo.",
              },
            ],
            fatorada: "10 000 senhas",
          },
          destaque: "10⁴ = 10 000.",
        },
      },
      {
        texto: "Sem repetição: cada etapa perde uma opção.",
        exemploReal: {
          contexto: "3 amigos disputam 1º, 2º e 3º lugar. Quantas ordens de chegada?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1º · 2º · 3º",
            passos: [
              { expr: "1º lugar: 3 opções", explica: "Qualquer um dos três.", status: "neutro" },
              { expr: "2º lugar: 2 opções", explica: "Um já ficou em 1º.", status: "neutro" },
              { expr: "3º lugar: 1 opção", explica: "Sobrou um só.", status: "neutro" },
              {
                expr: "3 · 2 · 1 = 6 ordens",
                explica: "",
                status: "ok",
                professor:
                  "Aqui a repetição é proibida, então a cada etapa some uma possibilidade. Pergunte sempre: 'a mesma opção pode aparecer duas vezes?'. A resposta muda a conta inteira.",
              },
            ],
            fatorada: "6 ordens possíveis",
          },
          destaque: "Sem repetir: 3 · 2 · 1.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "🤝 Nós fazemos: sorveteria com 5 sabores e 3 tipos de casquinha. Quantas combinações?",
    resposta: "15",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "sabor · casquinha",
      passos: [
        { expr: "1ª etapa: 5 sabores", explica: "", status: "neutro" },
        { expr: "2ª etapa: 3 casquinhas", explica: "", status: "neutro" },
        { expr: "5 · 3 = 15", explica: "", status: "ok" },
      ],
      fatorada: "15 combinações",
    },
    passos: ["Identifique as etapas.", "Conte as opções de cada uma.", "Multiplique: 5 · 3 = 15."],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: 3 blusas e 4 saias.",
    dica: "Duas etapas independentes → multiplique.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "blusa · saia",
      passos: [
        { expr: "3 · 4", explica: "Etapas multiplicadas.", status: "neutro" },
        { expr: "= 12", explica: "", status: "ok" },
      ],
      fatorada: "12 looks",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Total de looks:",
      opcoes: [{ nome: "12" }, { nome: "7" }, { nome: "34" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 3 · 4 = 12.",
      feedbackErro: "7 é a soma das peças. Combinações se MULTIPLICAM.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Senha de 3 dígitos (0 a 9), podendo repetir.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "_ _ _  (10 opções cada)",
      passos: [
        { expr: "10 · 10 · 10", explica: "Uma etapa por posição.", status: "neutro" },
        { expr: "= 10³", explica: "", status: "neutro" },
        { expr: "= 1000 senhas", explica: "", status: "ok" },
      ],
      fatorada: "1000 senhas",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Total:",
      opcoes: [{ nome: "1000" }, { nome: "30" }, { nome: "27" }],
      respostaCerta: "1000",
      feedbackAcerto: "🎯 10³ = 1000.",
      feedbackErro: "São 10 opções em cada uma das 3 posições: 10 · 10 · 10.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: um restaurante monta o prato feito com 3 sucos, 4 lanches e 2 sobremesas. O dono quer anunciar quantas refeições diferentes o cliente pode montar.",
    problema: "Quantos combos diferentes existem?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "suco · lanche · sobremesa",
      passos: [
        { expr: "3 · 4 = 12", explica: "Suco com lanche.", status: "neutro" },
        { expr: "12 · 2 = 24", explica: "Cada um com 2 sobremesas.", status: "ok" },
        {
          expr: "Total = 24 combos",
          explica: "",
          status: "ok",
          professor:
            "Se o restaurante acrescentar só mais 1 lanche (5 no lugar de 4), o total sobe para 3 · 5 · 2 = 30. Uma opção a mais numa etapa multiplica o cardápio inteiro.",
        },
      ],
      fatorada: "24 combos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Total de combos:",
      opcoes: [{ nome: "24" }, { nome: "9" }, { nome: "36" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 3 · 4 · 2 = 24.",
      feedbackErro: "9 é a soma. Multiplique as três etapas: 3 · 4 · 2.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Etapas independentes → MULTIPLIQUE as opções.",
      "'E' multiplica; 'ou' (exclusivo) soma.",
      "Com repetição: opçõesᵖᵒˢⁱçõᵉˢ (ex.: 10⁴).",
      "Sem repetição: cada etapa perde uma opção (3 · 2 · 1).",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2 caminhos até a escola e 5 até o clube. Total de trajetos escola→clube:", opcoes: ["10", "7", "25"], correta: 0, feedbackAcerto: "🎉 2 · 5.", feedbackErro: "Duas etapas: multiplique 2 · 5." },
      { pergunta: "Senha de 2 dígitos (0–9), pode repetir:", opcoes: ["100", "20", "10"], correta: 0, feedbackAcerto: "🎉 10² = 100.", feedbackErro: "10 opções em cada posição: 10 · 10." },
      { pergunta: "4 camisas e 3 bermudas:", opcoes: ["12", "7", "43"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4 · 3 = 12." },
      { pergunta: "Fila com 3 pessoas, ordens diferentes:", opcoes: ["6", "3", "9"], correta: 0, feedbackAcerto: "🎉 3 · 2 · 1 = 6.", feedbackErro: "Sem repetir: 3 · 2 · 1." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Quantos looks tem meu guarda-roupa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Conte suas camisetas, calças e calçados.",
      "Multiplique as três quantidades.",
      "Mostre à família quantos dias você passaria sem repetir o look.",
    ],
    registro: "📸 Foto da conta montada.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
