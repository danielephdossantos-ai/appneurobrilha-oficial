import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 7 — "Somando com Dezenas"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Une agrupamento em caixotes (Aula 5) com soma (Aula 6):
 *   2 caixotes + 3 soltas = 23 · 1 caixote + 5 soltas = 15 · 20+15=35.
 * Foco: primeiro CONCRETO (caixotes+soltas), depois ALGORITMO (conta
 * armada empilhada de dezenas com unidades).
 *
 * BNCC: EF02MA05.
 */
export const aula07_somandoComDezenas: AulaV4 = {
  slug: "07-somando-com-dezenas",
  titulo: "Somando com Dezenas",
  iconeTrilha: "📦➕",
  bncc: ["EF02MA05"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Muita fruta pra somar!",
    historia:
      "A feira estava cheia! Seu Coelho separou 2 caixotes de maçãs (cada caixote com 10) e 3 maçãs soltas. Dona Coruja perguntou: 'Quantas você tem AO TODO?' Brilha entrou correndo: 'Vamos usar os CAIXOTES pra somar rapidinho!'",
    imagemUrl: brilha,
  },

  // Etapa 1 — mostrar 2 caixotes + 3 soltas = 23
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Veja a arrumação de Seu Coelho: 2 caixotes de 10 e 3 maçãs soltas. Quanto dá ao todo?",
    cenas: [
      {
        tipo: "comparar",
        lados: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦 Caixote 1" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦 Caixote 2" },
        ],
      },
    ],
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 1" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 2" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎 3 soltas" },
      ],
      pergunta: "Quantas maçãs ao todo?",
      opcoes: ["5", "23", "32"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 10 + 10 + 3 = 23. Cada caixote vale 10.",
      feedbackErro:
        "Some os caixotes: 10 + 10 = 20. Some as soltas: 20 + 3 = 23.",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se juntarmos as maçãs do Coelho com as da Coruja (1 caixote + 5 soltas), como fica a soma?",
    pista:
      "Somamos DEZENAS com DEZENAS (caixotes com caixotes) e UNIDADES com UNIDADES (soltas com soltas).",
    revelacao:
      "Isso! Na CONTA ARMADA a gente empilha: dezena embaixo de dezena, unidade embaixo de unidade. Assim: 23 + 15 = 38.",
  },

  momento04_explicacao: {
    titulo: "Somar por dezenas e unidades",
    etapas: [
      // Etapa 2 — 1 caixote + 5 soltas = 15
      {
        texto:
          "Etapa 2 — Dona Coruja tem 1 caixote e 5 soltas. Isso é 15.",
        exemplo:
          "1 caixote = 10. Mais 5 soltas = 15. O '1' na frente é a dezena, o '5' atrás é a unidade.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 1, rotulo: "📦 1 caixote (10)" },
          { imagemUrl: maca, tamanhoGrupo: 5, qtdGrupos: 1, rotulo: "🍎 5 soltas" },
        ],
      },
      // Etapa 3 — juntar as duas coleções
      {
        texto:
          "Etapa 3 — Agora JUNTAMOS as maçãs dos dois. Ficam 3 caixotes e 8 soltas.",
        exemplo:
          "2 caixotes (Coelho) + 1 caixote (Coruja) = 3 caixotes. 3 soltas + 5 soltas = 8 soltas. Total: 38.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "📦 3 caixotes = 30" },
          { imagemUrl: maca, tamanhoGrupo: 8, qtdGrupos: 1, rotulo: "🍎 8 soltas" },
        ],
      },
      // Etapa 4 — conta armada
      {
        texto:
          "Etapa 4 — Na CONTA ARMADA a gente empilha os dois números. Dezena embaixo de dezena. Unidade embaixo de unidade. Depois soma cada coluna.",
        exemplo:
          "23 + 15: 3 + 5 = 8 (unidades). 2 + 1 = 3 (dezenas). Fica 38!",
        contaArmada: {
          a: 23,
          b: 15,
          resultado: 38,
          itemPlural: "maçãs",
        },
      },
      // Etapa 5 — bananas 20 + 15 = 35
      {
        texto:
          "Etapa 5 — Funciona com qualquer fruta. Dona Coruja tem 2 caixotes de bananas e Seu Coelho tem 1 caixote + 5 soltas.",
        exemplo:
          "20 + 15 = 35. Some as unidades (0+5=5), some as dezenas (2+1=3). Fica 35.",
        agrupamentos: [
          { imagemUrl: banana, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "📦 3 caixotes = 30" },
          { imagemUrl: banana, tamanhoGrupo: 5, qtdGrupos: 1, rotulo: "🍌 5 soltas" },
        ],
      },
      {
        texto: "Conta armada de 20 + 15:",
        contaArmada: {
          a: 20,
          b: 15,
          resultado: 35,
          itemPlural: "bananas",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai somar 24 + 13 pensando em voz alta:",
    passos: [
      "Olho a conta: 24 + 13. Vou empilhar.",
      "Começo pelas UNIDADES (soltas): 4 + 3 = 7.",
      "Agora as DEZENAS (caixotes): 2 + 1 = 3.",
      "Junto: 3 dezenas e 7 unidades = 37.",
      "Confiro contando os caixotes: 10, 20, 30 + 7 soltas = 37. Perfeito!",
    ],
    resposta: "24 + 13 = 37",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [10, 10, 10, 7],
      itemPlural: "maçãs",
    },
  },

  // Fase 1 — Guiada: 12 + 4 (só mexe nas unidades)
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! Seu Coelho tem 12 maçãs (1 caixote + 2 soltas) e ganhou mais 4 soltas.",
    dica: "Some só as soltas: 2 + 4 = 6. O caixote continua sendo 1. Fica 16.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 1 caixote" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎 2 soltas" },
        { imagemUrl: maca, quantidade: 4, rotulo: "🍎 +4 soltas" },
      ],
      pergunta: "Quantas maçãs Seu Coelho tem agora?",
      opcoes: ["16", "60", "14"],
      correta: 0,
      feedbackAcerto:
        "🎉 Isso! 12 + 4 = 16. Só as soltas mudaram: 2 + 4 = 6.",
      feedbackErro:
        "O caixote continua 1. Some só as soltas: 2 + 4 = 6. Fica 16.",
    },
  },

  // Fase 2 — Independente: 22 + 13 bananas
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Dona Coruja tem 22 bananas e Seu Coelho vai dar mais 13. Qual o total?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 Coruja" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 Coruja" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌 Coruja" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 Coelho" },
        { imagemUrl: banana, quantidade: 3, rotulo: "🍌 Coelho" },
      ],
      pergunta: "Quantas bananas ao todo?",
      opcoes: ["25", "35", "45"],
      correta: 1,
      feedbackAcerto:
        "🎉 Perfeito! 22 + 13 = 35. Unidades: 2+3=5. Dezenas: 2+1=3.",
      feedbackErro:
        "Some primeiro as soltas (2+3=5), depois os caixotes (2+1=3). Fica 35.",
    },
  },

  // Fase 3 — Aplicação: 30 + 15
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Feira grande! Seu Coelho vendeu 30 maçãs de manhã (3 caixotes) e à tarde vendeu mais 15 (1 caixote e 5 soltas).",
    problema:
      "Quantas maçãs Seu Coelho vendeu no dia inteiro?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 tarde" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎 tarde" },
      ],
      pergunta: "Total do dia?",
      opcoes: ["35", "45", "55"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 30 + 15 = 45. 4 caixotes e 5 soltas.",
      feedbackErro:
        "Dezenas: 3 + 1 = 4 caixotes. Unidades: 0 + 5 = 5 soltas. Fica 45.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Pra somar números de dois algarismos: empilhamos.",
      "Somamos SOLTAS com SOLTAS (unidades) primeiro.",
      "Depois CAIXOTES com CAIXOTES (dezenas).",
      "Ex.: 23 + 15 → 3+5=8 e 2+1=3 → 38.",
      "🎯 Mini-desafio!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 4, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
      ],
      pergunta: "Mini-desafio: 14 + 22 = ?",
      opcoes: ["26", "36", "46"],
      correta: 1,
      feedbackAcerto:
        "🎉 Boa! 14 + 22 = 36. Unidades: 4+2=6. Dezenas: 1+2=3.",
      feedbackErro:
        "Some soltas (4+2=6) e caixotes (1+2=3). Fica 36.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 10 + 5 = ?",
        opcoes: ["15", "50", "6"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Isso! 1 caixote + 5 soltas = 15.",
        feedbackErro: "Caixote vale 10. 10 + 5 = 15.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 20 + 10 = ?",
        opcoes: ["21", "30", "22"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        ],
        feedbackAcerto: "🎉 Perfeito! 2 caixotes + 1 caixote = 3 caixotes = 30.",
        feedbackErro: "2 caixotes é 20. Mais 1 caixote é 30.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 13 + 6 = ?",
        opcoes: ["19", "76", "13"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎 +" },
        ],
        feedbackAcerto: "🎉 Isso! Só as soltas mudam: 3+6=9. Fica 19.",
        feedbackErro: "Caixote continua 1. Some as soltas: 3+6=9. Fica 19.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 21 + 14 = ?",
        opcoes: ["35", "45", "25"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 1, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 Boa! Soltas: 1+4=5. Caixotes: 2+1=3. Fica 35.",
        feedbackErro: "Soltas: 1+4=5. Caixotes: 2+1=3. Total: 35.",
      },
      {
        pergunta: "Pergunta 5 de 5 — 32 + 15 = ?",
        opcoes: ["37", "47", "57"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
        ],
        feedbackAcerto:
          "🎉 Uau! Soltas 2+5=7. Caixotes 3+1=4. Fica 47! 🏆",
        feedbackErro:
          "Soltas (2+5=7) + Caixotes (3+1=4) → 47.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📦 Feira das Dezenas em Casa",
    materiais: [
      "Objetinhos pra contar (feijões, tampinhas — pelo menos 40)",
      "4 potes (cada um vira um caixote de 10)",
      "Papel e lápis",
    ],
    passos: [
      "1) A criança monta 2 caixotes (dois potes cheios com 10 cada) e coloca 3 soltos do lado: '23'.",
      "2) O adulto monta outra pilha: 1 caixote e 5 soltos: '15'.",
      "3) Juntos, JUNTAM os dois: contam quantos caixotes ao todo e quantos soltos ao todo.",
      "4) A criança fala em voz alta: '23 mais 15 é igual a 38! 3 caixotes e 8 soltos.'",
      "5) Escrevem no papel a conta armada: 23 embaixo do 15.",
    ],
    registro:
      "📸 Foto das duas pilhas antes de juntar e da pilha total, com o número escrito no papel.",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Somador(a) das Dezenas",
  },
};
