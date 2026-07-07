import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 5 · Aula 1 — "Como Resolver um Problema?"
 * Mercado dos Problemas · BNCC EF02MA06.
 *
 * Introduz os 4 passos do bom solucionador: LER, ENCONTRAR NÚMEROS,
 * DECIDIR OPERAÇÃO, RESOLVER E CONFERIR.
 */
export const aula01_comoResolver: AulaV4 = {
  slug: "u5-01-como-resolver-um-problema",
  titulo: "Como Resolver um Problema?",
  iconeTrilha: "🛒",
  bncc: ["EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A banca da Dona Coelha",
    historia:
      "Brilha e a Coruja chegaram no MERCADO DA VILA ENCANTADA! Dona Coelha estava aflita: 'Tinha 8 maçãs, chegaram mais 4… quantas tenho AGORA? Preciso saber pra organizar minha banca!' A Coruja disse: 'Vou te ensinar os 4 passos pra resolver QUALQUER problema.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Dona Coelha tinha 8 maçãs e chegaram mais 4. Toque em cada MAÇÃ pra contar tudo:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 12,
      itemPlural: "maçãs",
      pergunta: "8 + 4 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Antes de fazer a conta, o que a gente precisa entender?",
    pista:
      "O que a Dona Coelha JÁ TINHA, o que MUDOU e o que ela QUER SABER.",
    revelacao:
      "Isso! Um bom solucionador segue 4 PASSOS: 1) LER com atenção, 2) achar os NÚMEROS, 3) DECIDIR (juntar ou tirar?), 4) RESOLVER e conferir.",
  },

  momento04_explicacao: {
    titulo: "Os 4 passos do solucionador",
    etapas: [
      {
        texto: "1️⃣ LER com atenção — leia o problema DEVAGAR.",
        exemplo: "'Dona Coelha tinha 8 maçãs e chegaram mais 4.'",
      },
      {
        texto: "2️⃣ ENCONTRAR os números — quais quantidades aparecem?",
        exemplo: "Números importantes: 8 e 4.",
      },
      {
        texto:
          "3️⃣ DECIDIR a operação — 'chegaram mais' pede SOMA.",
        exemplo: "Vamos JUNTAR: 8 + 4.",
      },
      {
        texto:
          "4️⃣ RESOLVER e conferir — 8 + 4 = 12.",
        exemplo: "Faz sentido? Se ela tinha 8 e ganhou mais, tem que ter MAIS que 8. ✔",
        contaArmada: { a: 8, b: 4, resultado: 12, operacao: "soma" },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve: 'Lucas tinha 5 carrinhos. Ganhou mais 3.'",
    passos: [
      "1) LEIO devagar: 'tinha 5… ganhou mais 3.'",
      "2) NÚMEROS: 5 e 3.",
      "3) DECIDO: 'ganhou mais' = JUNTAR (soma).",
      "4) RESOLVO: 5 + 3 = 8 carrinhos.",
      "5) CONFIRO: 8 é maior que 5. Faz sentido!",
    ],
    resposta: "5 + 3 = 8 carrinhos",
    visualUrl: bola,
    colecaoVisual: {
      imagemUrl: bola,
      grupos: [5, 3],
      itemPlural: "carrinhos",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — 'Maria tinha 9 flores. Colheu mais 2.' Quantas ao todo?",
    dica: "'Colheu mais' = juntar. 9 + 2 = 11.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 9, rotulo: "Tinha" },
        { imagemUrl: flor, quantidade: 2, rotulo: "Colheu" },
      ],
      pergunta: "9 + 2 = ?",
      opcoes: ["10", "11", "12"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 9 + 2 = 11 flores.",
      feedbackErro: "9 + 2: dez, onze. Fica 11.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — 'João tinha 6 lápis. Ganhou mais 4.' Quantos agora?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: lapis, quantidade: 6, rotulo: "Tinha" },
        { imagemUrl: lapis, quantidade: 4, rotulo: "Ganhou" },
      ],
      pergunta: "6 + 4 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 6 + 4 = 10 lápis.",
      feedbackErro: "'Ganhou' pede SOMA. 6 + 4 = 10.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Na escola havia 12 livros. Chegaram mais 5.",
    problema:
      "Quantos livros há agora?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: livro,
      itemPlural: "livros",
      a: 12,
      b: 5,
      legenda: "12 + 5 = 17 livros",
    },
  },

  momento09_revisao: {
    pontos: [
      "4 passos: LER, achar NÚMEROS, DECIDIR, RESOLVER e conferir.",
      "'Ganhou', 'chegou', 'juntou' pedem SOMA.",
      "Confira sempre se a resposta FAZ SENTIDO.",
      "🛒 Minijogo: Carrinho das Compras!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 7, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
      ],
      pergunta:
        "'Cliente pediu 7 maçãs, depois pediu mais 3.' Quantas no carrinho?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 + 3 = 10 maçãs no carrinho.",
      feedbackErro: "'Mais 3' = juntar. 7 + 3 = 10.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Pergunta 1 de 5 — Qual é o PRIMEIRO passo pra resolver um problema?",
        opcoes: ["Fazer a conta", "Ler com atenção", "Chutar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! LER com atenção primeiro.",
        feedbackErro: "Antes da conta, sempre LER.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — 'Lucas tinha 5 e ganhou 3.' Total?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 5, rotulo: "Tinha" },
          { imagemUrl: bola, quantidade: 3, rotulo: "Ganhou" },
        ],
        feedbackAcerto: "🎉 Isso! 5 + 3 = 8.",
        feedbackErro: "'Ganhou' = soma. 5 + 3 = 8.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — 'Maria tinha 9 flores e colheu 2.' Total?",
        opcoes: ["10", "11", "12"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: flor, quantidade: 9, rotulo: "Tinha" },
          { imagemUrl: flor, quantidade: 2, rotulo: "Colheu" },
        ],
        feedbackAcerto: "🎉 Isso! 9 + 2 = 11.",
        feedbackErro: "'Colheu MAIS' = soma. 9 + 2 = 11.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — 'Havia 12 livros e chegaram 5.' Quantos?",
        opcoes: ["16", "17", "18"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: livro, quantidade: 12, rotulo: "Tinha" },
          { imagemUrl: livro, quantidade: 5, rotulo: "Chegaram" },
        ],
        feedbackAcerto: "🎉 Boa! 12 + 5 = 17.",
        feedbackErro: "12 + 5 = 17. 'Chegaram' = soma.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Depois de resolver, o que a gente faz?",
        opcoes: ["Termina", "CONFERE se faz sentido", "Muda a resposta"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Sempre CONFERIR se a resposta faz sentido. 🏆",
        feedbackErro:
          "O 4º passo é CONFERIR se a resposta faz sentido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🛒 Inventor de Problemas em Casa",
    materiais: [
      "Dois alimentos da cozinha (ex.: laranjas e biscoitos)",
      "Papel e lápis",
    ],
    passos: [
      "1) A criança escolhe dois alimentos e conta quantos há de cada.",
      "2) A família INVENTA um problema de soma com essas quantidades.",
      "3) A criança lê em voz alta e segue os 4 PASSOS.",
      "4) Resolve e confere.",
      "5) A família aplaude o RACIOCÍNIO.",
    ],
    registro:
      "📸 Foto do problema inventado, resolvido no papel.",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Aprendiz(a) do Mercado",
  },
};
