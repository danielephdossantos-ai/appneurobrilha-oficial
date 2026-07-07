import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 2 — "Somas até 10 com Maçãs"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Roteiro fixado pelo professor:
 *   Aprendendo (Etapa 1: contar 5 → Etapa 2: chegam +2 → Etapa 3:
 *   frutas viram números 5+2 → Etapa 4: conta armada 5+2=7 →
 *   Etapa 5: generalização 4+3 com bananas) →
 *   5 Fases de prática → Minijogo Colheita Relâmpago →
 *   Desafio Brilha → Curiosidade → Quiz Final (5 perguntas).
 *
 * ENTREGA POR FATIAS:
 *   ✅ Fatia 1 — momentos 01–05 (Aprendendo completo).
 *   ⏳ Fatia 2 — momentos 06–08 (Fases 1–5).
 *   ⏳ Fatia 3 — momento 09 (Minijogo Colheita Relâmpago com física).
 *   ⏳ Fatia 4 — momentos 10–11 (Desafio + Curiosidade + Quiz de 5 perguntas).
 *
 * BNCC: EF02MA05 (adição até 20), EF02MA06 (fatos básicos da adição).
 */
export const aula02_somasAte10: AulaV4 = {
  slug: "02-somas-ate-10-macas",
  titulo: "Somas até 10 com Maçãs",
  iconeTrilha: "➕",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 20,

  // ===== APRENDENDO (Etapas 1 → 5) ===================================

  momento01_motivacao: {
    titulo: "O pomar está cheio!",
    historia:
      "Brilha entrou no pomar da Vila e viu maçãs vermelhas por todo lado! O Seu Coelho pediu ajuda: 'Preciso saber quantas maçãs colhi ao todo pra vender na feira.' Vamos aprender a JUNTAR quantidades — isso se chama SOMAR!",
    imagemUrl: brilha,
  },

  // Etapa 1 — Observe (contar 5 maçãs tocando)
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Observe. Na primeira cesta caíram estas maçãs. Toque em cada uma para contar:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 5,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs existem?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Você contou tocando uma por uma. Percebeu o padrão?",
    pista:
      "Cada toque conta MAIS UMA. Um, dois, três, quatro, cinco... o número sempre cresce de 1 em 1.",
    revelacao:
      "É isso! Contar é dizer o número da POSIÇÃO de cada coisa. E se chegam mais frutas, a gente continua contando de onde parou — nasce a SOMA!",
  },

  // Etapas 2, 3, 4 e 5 — a explicação em si
  momento04_explicacao: {
    titulo: "Quando chegam mais frutas: nasce a soma",
    etapas: [
      // ---- Etapa 2 — Mais frutas chegaram ------------------------
      {
        texto:
          "Etapa 2 — Chegaram MAIS 2 maçãs na cesta! Toque em cada maçã para ver quantas ficaram no total.",
        exemplo: "Já tínhamos 5. Chegaram 2. Toque uma a uma: 1, 2, 3, 4, 5, 6, 7!",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [5, 2],
        },
      },
      // ---- Etapa 3 — Transformando frutas em número --------------
      {
        texto:
          "Etapa 3 — As frutas viram NÚMERO. 5 maçãs do primeiro grupo + 2 maçãs do segundo = 7 maçãs no total.",
        exemplo: "Escrevemos assim: 5 + 2 = 7. O sinal '+' quer dizer JUNTAR.",
      },
      // ---- Etapa 4 — Conta armada (adição vertical) --------------
      {
        texto:
          "Etapa 4 — Também podemos escrever essa soma de outro jeito: uma embaixo da outra. Isso se chama CONTA ARMADA. Aperte 'Resolver' pra ver o Brilha contar.",
        exemplo:
          "Começa em 5, conta mais 2 (seis... sete...) e chega em 7.",
        contaArmada: {
          a: 5,
          b: 2,
          resultado: 7,
          itemPlural: "maçãs",
        },
      },
      // ---- Etapa 5 — Generalização com bananas -------------------
      {
        texto:
          "Etapa 5 — Não importa a fruta! Com 4 bananas + 3 bananas o jeito é o mesmo: JUNTAR os dois grupos.",
        exemplo: "4 + 3 = 7. Toque nas bananas pra conferir e veja a conta armada.",
        frutasParaNumero: {
          imagemUrl: banana,
          itemPlural: "bananas",
          grupos: [4, 3],
        },
      },
      {
        texto: "Agora com a conta armada de 4 + 3:",
        contaArmada: {
          a: 4,
          b: 3,
          resultado: 7,
          itemPlural: "bananas",
        },
      },
    ],
  },

  // Brilha resolve 6 + 2 em voz alta (modelagem)
  momento05_modelagem: {
    enunciado: "Brilha vai resolver 6 + 2 pensando em voz alta:",
    passos: [
      "Primeiro, olho a conta: 6 + 2. Preciso JUNTAR 6 maçãs com 2 maçãs.",
      "Começo pelo número maior: 6. Guardo o 6 na cabeça.",
      "Agora conto MAIS 2 a partir do 6: sete... oito.",
      "Cheguei em 8! Escrevo embaixo da linha: o resultado é 8.",
      "Confiro: 6 + 2 = 8. Perfeito!",
    ],
    resposta: "6 + 2 = 8",
    visualUrl: maca,
  },

  // ===== FATIAS 2, 3, 4 — PLACEHOLDERS (não quebram o build) =========

  momento06_praticaGuiada: {
    enunciado: "🚧 Fase 1 chega na próxima fatia (contagem guiada de coleções).",
    dica: "Aguardando aprovação da Fatia 1 pra construir as 5 Fases.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: maca, quantidade: 3, rotulo: "Maçãs" }],
      pergunta: "Quantas maçãs? (placeholder)",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "Boa!",
      feedbackErro: "Conte de novo.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "🚧 Chega na Fatia 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Placeholder",
      opcoes: [{ nome: "Ok", imagemUrl: maca }],
      respostaCerta: "Ok",
      feedbackAcerto: "—",
      feedbackErro: "—",
    },
  },
  momento08_aplicacao: {
    contexto: "🚧 Fase 5 (problema do pomar 6+3) chega na Fatia 2.",
    problema: "Placeholder",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Placeholder",
      opcoes: [{ nome: "Ok", imagemUrl: maca }],
      respostaCerta: "Ok",
      feedbackAcerto: "—",
      feedbackErro: "—",
    },
  },
  momento09_revisao: {
    pontos: [
      "Revisão da aula: contamos tocando cada fruta.",
      "Depois vimos que juntar dois grupos é uma SOMA.",
      "E aprendemos a escrever a soma na CONTA ARMADA (uma embaixo da outra).",
      "🎮 Agora é hora de brincar: Colheita Relâmpago!",
    ],
    miniDesafio: {
      tipo: "minijogoColheita",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvoInicial: 8,
      chegaramMais: 2,
      duracaoSeg: 90,
      feedbackAcerto:
        "🎉 Perfeito! 8 maçãs + 2 maçãs que chegaram = 10 maçãs na cesta.",
      feedbackErro:
        "Quase! Você pegou 8 maçãs e chegaram mais 2. 8 + 2 = 10. Ficaram 10 maçãs na cesta.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "🚧 Quiz final de 5 perguntas + Desafio Brilha chegam na Fatia 4. Placeholder: 5 + 2 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Começamos no 5 e contamos +2: seis, sete. Total 7.",
        feedbackErro: "Vamos junto: 5, seis, sete. A resposta é 7.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "🚧 Missão em família + Curiosidade chegam na Fatia 4",
    materiais: ["Aguardando aprovação da Fatia 1."],
    passos: ["Fatia 1 valida Aprendendo (Etapas 1 a 5)."],
    registro: "—",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Aprendiz do Pomar Matemático",
  },
};
