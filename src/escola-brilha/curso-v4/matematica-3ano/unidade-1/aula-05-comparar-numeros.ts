import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 5 — "Comparar Números (até 1.000)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: comparar 2 números usando >, <, =. Estratégia CDU: compara
 * centenas → se empatar, dezenas → se empatar, unidades.
 * BNCC: EF03MA02, EF03MA03.
 */
export const aula05_compararNumeros: AulaV4 = {
  slug: "05-comparar-numeros",
  titulo: "Quem é o Maior?",
  iconeTrilha: "⚖️",
  bncc: ["EF03MA02", "EF03MA03"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Duas caixas, quem tem mais?",
    historia:
      "Chegaram duas caixas no depósito: uma com 348 maçãs e outra com 384. A Prefeita perguntou: 'Qual tem MAIS?' Brilha coçou a cabeça: os números são parecidíssimos! Vamos ensinar um TRUQUE que nunca falha.",
    imagemUrl: coruja,
  },

  momento02_exploracao: {
    instrucao: "Compare: 3 maçãs OU 30 maçãs?",
    cenas: [
      { tipo: "texto", texto: "3 vs 30 é fácil: 30 é muito mais!" },
      { tipo: "texto", texto: "Mas 348 vs 384 é mais difícil...", destaque: true },
      { tipo: "texto", texto: "Precisamos de uma regra." },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 15,
      itemPlural: "maçãs",
      pergunta: "Só pra aquecer: quantas maçãs?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Se ambos têm 3 centenas, como decidir?",
    pista: "Se as centenas EMPATAM, olha a próxima casa (dezena).",
    revelacao:
      "REGRA: começa pela CENTENA. Quem tem mais centena vence. Empatou? Vai pra DEZENA. Empatou? Vai pra UNIDADE. Nunca falha!",
  },

  momento04_explicacao: {
    titulo: "Sinais e regra CDU",
    etapas: [
      {
        texto: "Sinais: '>' MAIOR que · '<' MENOR que · '=' IGUAL.",
        exemplo: "A boca aberta 'come' o maior número.",
      },
      {
        texto: "Passo 1: compara CENTENAS. Se diferentes, quem tiver mais centena vence.",
        exemplo: "500 vs 300 → 500 > 300 (5 > 3, para).",
      },
      {
        texto: "Passo 2: se centenas iguais, compara DEZENAS.",
        exemplo: "348 vs 384 → centenas empatam (3=3). Dezenas: 4 vs 8 → 384 > 348.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 4, rotulo: "348 · D=4" },
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 8, rotulo: "384 · D=8" },
        ],
      },
      {
        texto: "Passo 3: só se dezenas também empatarem, olha a UNIDADE.",
        exemplo: "352 vs 357 → C=3, D=5 (empate). U: 2<7 → 352 < 357.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha compara 274 e 271:",
    passos: [
      "Centenas: 2 = 2 → empate. Vai pra dezena.",
      "Dezenas: 7 = 7 → empate. Vai pra unidade.",
      "Unidades: 4 vs 1 → 4 > 1.",
      "Então 274 > 271.",
      "Truque CDU não falha! ⚖️",
    ],
    resposta: "274 > 271",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! 428 __ 512. Qual sinal?",
    dica: "Compara centena primeiro: 4 vs 5.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "428 · C=4" },
        { imagemUrl: banana, quantidade: 100, rotulo: "512 · C=5" },
      ],
      pergunta: "Sinal entre 428 e 512:",
      opcoes: ["428 > 512", "428 < 512", "428 = 512"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 5 > 4 na centena, então 512 > 428 → 428 < 512.",
      feedbackErro: "Compara centena: 4 < 5. Então 428 < 512. Nem olha o resto.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! 630 __ 603. Qual sinal?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "630" },
        { imagemUrl: maca, quantidade: 100, rotulo: "603" },
      ],
      pergunta: "Sinal:",
      opcoes: ["630 > 603", "630 < 603", "630 = 603"],
      correta: 0,
      feedbackAcerto:
        "🎉 Perfeito! Centenas empatam (6=6). Dezenas: 3 > 0 → 630 > 603.",
      feedbackErro: "C empata (6=6). Dezena: 3 vs 0 → 3 é maior. 630 > 603.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita pediu pra ranquear 3 barracas: Maçã (215), Banana (251), Pêra (152).",
    problema: "Qual é a MAIOR?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Maior das três:",
      opcoes: [
        { nome: "Maçã (215)", imagemUrl: maca },
        { nome: "Banana (251)", imagemUrl: banana },
        { nome: "Pêra (152)", imagemUrl: coruja },
      ],
      respostaCerta: "Banana (251)",
      feedbackAcerto:
        "🎯 Isso! 152 tem C=1 (menor). 215 e 251 empatam em C=2, mas D=5 > D=1 → 251 vence.",
      feedbackErro:
        "Centena: 152 tem só 1 (menor). Entre 215 e 251, dezena decide: 5 > 1 → 251.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Compare da ESQUERDA pra direita: C, depois D, depois U.",
      "Assim que uma casa é diferente, PAROU: essa decide.",
      "Boca do sinal aponta pro MAIOR.",
      "🎮 Duelo de placas!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "489" },
        { imagemUrl: maca, quantidade: 100, rotulo: "498" },
      ],
      pergunta: "489 __ 498",
      opcoes: ["489 > 498", "489 < 498", "489 = 498"],
      correta: 1,
      feedbackAcerto: "🎉 C empata (4=4), D empata (8=9? não). D: 8 < 9 → 489 < 498.",
      feedbackErro: "C=4=4 (empate). D: 8 vs 9 → 8<9. Fica 489 < 498.",
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
        feedbackAcerto: "Isso! C empata (3=3). D: 1 < 3 → 313 < 331.",
        feedbackErro: "C empata. D: 1 vs 3 → 1<3. 313 < 331.",
      },
      {
        pergunta: "555 __ 555. Qual sinal?",
        opcoes: ["555 > 555", "555 < 555", "555 = 555"],
        correta: 2,
        feedbackAcerto: "🎉 Tudo igual → 555 = 555.",
        feedbackErro: "Todos os dígitos batem. Sinal de igual.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Duelo dos Números",
    materiais: ["Baralho ou papéis com dígitos 0-9", "3 espaços marcados: C D U"],
    passos: [
      "Cada jogador sorteia 3 cartas e monta o maior número que conseguir.",
      "Coloquem lado a lado e usem >, <, = para comparar.",
      "Quem monta o maior vence a rodada.",
      "Faça 5 rodadas.",
    ],
    registro: "📸 Foto do duelo final com o vencedor.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
