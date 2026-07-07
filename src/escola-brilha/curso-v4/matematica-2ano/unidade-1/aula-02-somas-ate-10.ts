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
 *   ✅ Fatia 2 — momentos 06–08 (3 Fases: guiada 3+2, independente 4+3, aplicação pomar 6+3).
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

  // ===== FATIA 2 — 3 FASES DE PRÁTICA (guiada → independente → aplicação)

  // Fase 1 — Nós fazemos juntos: 3 + 2 com maçãs (animação passo a passo)
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! A cesta tem 3 maçãs e chegaram mais 2. Aperte pra ver a soma acontecer, contando cada maçã.",
    dica: "Comece pelo número maior (3) e conte MAIS 2: quatro… cinco. A resposta é 5.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 3,
      b: 2,
      legenda: "3 maçãs + 2 maçãs = 5 maçãs",
    },
  },

  // Fase 2 — Você faz: contar 4 + 3 bananas e escolher o total
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Toque em CADA banana pra contar. Depois escolha quantas ficaram no total.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 4, rotulo: "Primeiro grupo" },
        { imagemUrl: banana, quantidade: 3, rotulo: "Chegaram mais" },
      ],
      pergunta: "Quantas bananas ficaram no total?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 4 bananas + 3 bananas = 7. Começou no 4 e contou +3: cinco, seis, sete.",
      feedbackErro:
        "Vamos junto: já tinha 4 bananas. Conte MAIS 3 a partir do 4: cinco… seis… sete. A resposta é 7.",
    },
  },

  // Fase 5 — Aplicação: problema do pomar 6 + 3
  momento08_aplicacao: {
    contexto:
      "Fase 5 — Problema do pomar! Seu Coelho colheu 6 maçãs de manhã. À tarde, colheu mais 3. Ele quer saber o total pra vender na feira.",
    problema:
      "6 maçãs de manhã + 3 maçãs à tarde. Quantas maçãs Seu Coelho tem pra vender?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 6,
      b: 3,
      legenda: "6 maçãs (manhã) + 3 maçãs (tarde) = 9 maçãs",
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
      // 1 — 2 + 3 com maçãs
      {
        pergunta: "Pergunta 1 de 5 — Quanto é 2 + 3? Toque nas maçãs pra contar tudo.",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 2, rotulo: "Primeiro grupo" },
          { imagemUrl: maca, quantidade: 3, rotulo: "Chegaram mais" },
        ],
        feedbackAcerto:
          "🎉 Isso! 2 maçãs + 3 maçãs = 5. Começamos no 3 (o maior) e contamos +2: quatro, cinco.",
        feedbackErro:
          "Vamos juntos: 2 maçãs no primeiro grupo, 3 maçãs no segundo. Conte todas: 1, 2, 3, 4, 5. A resposta é 5.",
      },
      // 2 — 4 + 3 maçãs (contexto Seu Coelho)
      {
        pergunta: "Pergunta 2 de 5 — Seu Coelho colheu 4 maçãs e depois mais 3. Quantas maçãs ele tem?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 4, rotulo: "De manhã" },
          { imagemUrl: maca, quantidade: 3, rotulo: "À tarde" },
        ],
        feedbackAcerto:
          "🎉 Perfeito! 4 + 3 = 7. Começou no 4 e contou: cinco, seis, sete.",
        feedbackErro:
          "Pense: 4 maçãs já tinha. Chegaram mais 3. Conte a partir do 4: cinco, seis, sete. São 7 maçãs.",
      },
      // 3 — 6 + 4 maçãs (chega no 10)
      {
        pergunta: "Pergunta 3 de 5 — Quanto é 6 + 4? Conte todas as maçãs.",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "Cesta 1" },
          { imagemUrl: maca, quantidade: 4, rotulo: "Cesta 2" },
        ],
        feedbackAcerto:
          "🎉 Isso! 6 + 4 = 10. Uma dezena cheia — a cesta ficou cheinha!",
        feedbackErro:
          "Começa no 6 e conta MAIS 4 nos dedos: sete, oito, nove, dez. A resposta é 10.",
      },
      // 4 — 2 + 6 bananas
      {
        pergunta: "Pergunta 4 de 5 — Brilha tem 2 bananas. A amiga dela deu mais 6. Quantas bananas ficaram?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 2, rotulo: "Brilha" },
          { imagemUrl: banana, quantidade: 6, rotulo: "Amiga deu" },
        ],
        feedbackAcerto:
          "🎉 Boa! 2 + 6 = 8. Truque esperto: começar pelo MAIOR (6) e contar +2: sete, oito. Fica mais fácil!",
        feedbackErro:
          "Dica de ouro: quando um número é bem maior, comece por ele. 6 + 2: sete, oito. Total 8.",
      },
      // 5 — 5 + 5 maçãs
      {
        pergunta: "Pergunta 5 de 5 — Uma cesta tem 5 maçãs e outra tem 5 maçãs. Se juntarmos as duas, quantas maçãs teremos?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Cesta 1" },
          { imagemUrl: maca, quantidade: 5, rotulo: "Cesta 2" },
        ],
        feedbackAcerto:
          "🎉 Uau! 5 + 5 = 10. Duas mãos cheias — uma dezena! Você é campeão(ã) do pomar! 🏆",
        feedbackErro:
          "Pense em duas mãos: 5 dedos numa mão, 5 na outra. Junte tudo: 10 dedos. 5 + 5 = 10 maçãs.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "🍎 A Feira do Pomar em casa",
    materiais: [
      "10 frutas de verdade (maçãs, laranjas, bananas — o que tiver na cozinha)",
      "2 pratos, cestas ou potes",
      "Papel e lápis (opcional, pra escrever a conta)",
    ],
    passos: [
      "1) Peça um adulto pra colocar algumas frutas no primeiro prato (ex.: 4). A criança conta em voz alta tocando cada uma: um, dois, três, quatro.",
      "2) O adulto coloca MAIS algumas frutas no segundo prato (ex.: 3). A criança conta esse grupo também.",
      "3) Agora a mágica da SOMA: a criança junta os dois pratos e conta TUDO tocando fruta por fruta, começando pelo maior grupo.",
      "4) O adulto pergunta: 'Quanto deu no total?' A criança fala em voz alta: '4 mais 3 é igual a 7!'",
      "5) Repitam 3 vezes com combinações diferentes (sempre somando até no máximo 10): 5+2, 6+3, 4+4. Cada acerto é uma comemoração!",
    ],
    registro:
      "📸 Tire uma foto dos dois pratos ANTES de juntar e outra DEPOIS, com a criança mostrando com os dedos o resultado da soma.",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Aprendiz do Pomar Matemático",
  },
};
