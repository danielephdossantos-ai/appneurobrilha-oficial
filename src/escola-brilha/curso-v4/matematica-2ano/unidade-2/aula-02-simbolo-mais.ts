import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 2 · Aula 2 — "Descobrindo o Símbolo +"
 * A Cidade das Adições · BNCC EF02MA05.
 *
 * Foco: introduzir formalmente os SINAIS '+' e '=' como forma de
 * escrever o que já sabemos fazer (juntar). Reutiliza frutasParaNumero,
 * contaArmada, contarQuiz e operacaoVisual.
 */
export const aula02_simboloMais: AulaV4 = {
  slug: "u2-02-simbolo-mais",
  titulo: "Descobrindo o Símbolo +",
  iconeTrilha: "➕",
  bncc: ["EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Um mapa misterioso!",
    historia:
      "Brilha encontrou um mapa da Cidade das Adições. No meio do mapa aparecia um símbolo estranho: uma cruzinha. Dona Coruja explicou: 'Esse símbolo se chama MAIS e significa JUNTAR. Toda vez que você quiser escrever uma adição, ele vai aparecer!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Olhe o desenho: 3 maçãs, depois mais 2. Toque em todas pra ver o que dá:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 5,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs ao todo?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "A gente sabe que 3 maçãs + 2 maçãs = 5. Mas como escrever isso com números e sinais?",
    pista:
      "O símbolo '+' quer dizer JUNTAR. O símbolo '=' quer dizer DÁ ou RESULTA em.",
    revelacao:
      "Escrevemos assim: 3 + 2 = 5. 'Três MAIS dois É IGUAL A cinco.' O '+' junta, o '=' mostra o total!",
  },

  momento04_explicacao: {
    titulo: "Os símbolos + e =",
    etapas: [
      {
        texto:
          "Etapa 2 — O sinal '+' aparece ENTRE dois números. Ele diz: 'junte esses dois!'",
        exemplo:
          "Se vejo '3 + 2', leio: 'três MAIS dois' — vou juntar 3 com 2.",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [3, 2],
        },
      },
      {
        texto:
          "Etapa 3 — O sinal '=' vem DEPOIS. Ele diz: 'o resultado é isto aqui!'",
        exemplo:
          "3 + 2 = 5. Leio: 'três mais dois É IGUAL A cinco'. O 5 é o resultado.",
      },
      {
        texto:
          "Etapa 4 — Vamos treinar a leitura: 4 + 1 = 5. 'Quatro mais um é igual a cinco.'",
        exemplo:
          "Sempre a mesma fórmula: NÚMERO + NÚMERO = RESULTADO.",
        frutasParaNumero: {
          imagemUrl: banana,
          itemPlural: "bananas",
          grupos: [4, 1],
        },
      },
      {
        texto: "Etapa 5 — 6 + 2 = 8. Vamos ver a conta armada:",
        contaArmada: {
          a: 6,
          b: 2,
          resultado: 8,
          itemPlural: "estrelas",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha vai escrever a adição de 2 + 3 em voz alta:",
    passos: [
      "Vejo 2 estrelas de um lado e 3 do outro.",
      "Escrevo os dois números com o '+' entre eles: 2 + 3.",
      "Junto tudo e conto: 1, 2, 3, 4, 5.",
      "Coloco o '=' e o resultado: 2 + 3 = 5.",
      "Leio em voz alta: 'dois mais três é igual a cinco'.",
    ],
    resposta: "2 + 3 = 5",
    visualUrl: estrela,
    colecaoVisual: {
      imagemUrl: estrela,
      grupos: [2, 3],
      itemPlural: "estrelas",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Vamos juntos! Junte 4 bananas com 1 banana e escreva a adição.",
    dica: "4 mais 1... quatro, cinco. 4 + 1 = 5.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: banana,
      itemPlural: "bananas",
      a: 4,
      b: 1,
      legenda: "4 + 1 = 5",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a). Escolha o resultado certo pra 6 + 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 6, rotulo: "Céu 1" },
        { imagemUrl: estrela, quantidade: 2, rotulo: "Céu 2" },
      ],
      pergunta: "6 + 2 = ?",
      opcoes: ["7", "8", "9"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 6 + 2 = 8. 'Seis mais dois é igual a oito.'",
      feedbackErro: "Comece no 6 e conte +2: sete, oito. Fica 8.",
    },
  },

  // Aplicação — Lucas: 5 bolas + 2
  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Lucas tinha 5 bolas guardadas. Ele ganhou mais 2 no aniversário.",
    problema:
      "Escreva a adição: 5 + 2 = ? Quantas bolas Lucas tem agora?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 5, rotulo: "Já tinha" },
        { imagemUrl: bola, quantidade: 2, rotulo: "Ganhou" },
      ],
      pergunta: "5 + 2 = ?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto:
        "🎉 Perfeito! 5 + 2 = 7. Lucas tem 7 bolas.",
      feedbackErro:
        "Junte: 5 + 2 = 7. Cinco mais dois é sete.",
    },
  },

  momento09_revisao: {
    pontos: [
      "O símbolo '+' significa JUNTAR.",
      "O símbolo '=' significa É IGUAL A (o resultado).",
      "Toda adição segue: NÚMERO + NÚMERO = RESULTADO.",
      "🎯 Mini-desafio: escolha o sinal certo!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 3, rotulo: "3" },
        { imagemUrl: bola, quantidade: 4, rotulo: "4" },
      ],
      pergunta:
        "Se JUNTAMOS 3 bolas com 4, qual sinal usamos entre os números?",
      opcoes: ["3 = 4", "3 + 4", "3 < 4"],
      correta: 1,
      feedbackAcerto:
        "🎉 Boa! '+' porque estamos JUNTANDO. 3 + 4 = 7.",
      feedbackErro:
        "Juntar sempre usa '+'. Fica 3 + 4 = 7.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Como se lê '3 + 2 = 5'?",
        opcoes: [
          "Três menos dois é igual a cinco",
          "Três mais dois é igual a cinco",
          "Três vezes dois é igual a cinco",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! O '+' se lê MAIS. O '=' se lê É IGUAL A.",
        feedbackErro:
          "'+' é MAIS. '=' é IGUAL A. Lê-se: 'três mais dois é igual a cinco'.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Quanto é 4 + 2?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 4, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Perfeito! 4 + 2 = 6.",
        feedbackErro: "4 + 2: cinco, seis. Fica 6.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Qual sinal significa JUNTAR?",
        opcoes: ["-", "+", "="],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O '+' é JUNTAR (adição).",
        feedbackErro: "Juntar = '+'. O '=' mostra o resultado.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — Escreva a adição: 6 estrelas + 3 estrelas = ?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 6, rotulo: "Céu" },
          { imagemUrl: estrela, quantidade: 3, rotulo: "Céu" },
        ],
        feedbackAcerto: "🎉 Isso! 6 + 3 = 9.",
        feedbackErro: "Comece no 6 e conte +3: sete, oito, nove. Fica 9.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Lucas tinha 5 bolas e ganhou mais 3. Qual adição resolve o problema?",
        opcoes: ["5 - 3 = 2", "5 + 3 = 8", "5 = 3"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 5, rotulo: "Tinha" },
          { imagemUrl: bola, quantidade: 3, rotulo: "Ganhou" },
        ],
        feedbackAcerto:
          "🎉 Uau! 'Ganhou mais' → soma. 5 + 3 = 8 bolas. 🏆",
        feedbackErro:
          "'Ganhou mais' = adição. Fica 5 + 3 = 8.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "➕ Caça ao Símbolo em Casa",
    materiais: [
      "Papel e lápis",
      "Objetinhos pra contar",
    ],
    passos: [
      "1) O adulto desenha dois grupos de objetos no papel (ex.: 4 e 3 bolinhas).",
      "2) A criança escreve entre eles o símbolo '+' e no fim '=' com o total.",
      "3) A criança lê em voz alta: 'quatro mais três é igual a sete'.",
      "4) Trocam: a criança desenha, o adulto escreve os sinais.",
      "5) Bônus: procurar o símbolo '+' em embalagens, calendários, teclado.",
    ],
    registro:
      "📸 Foto do papel com pelo menos 3 adições escritas.",
  },

  recompensa: {
    xp: 160,
    moedas: 80,
    medalha: "Leitor(a) dos Sinais",
  },
};
