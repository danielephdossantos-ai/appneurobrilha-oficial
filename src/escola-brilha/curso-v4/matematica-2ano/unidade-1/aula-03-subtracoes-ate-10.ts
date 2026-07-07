import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 3 — "Tirando da Cesta: Subtrações até 10"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Segue EXATAMENTE o padrão travado da Aula 2:
 *   Aprendendo (Etapa 1: contar 8 → Etapa 2: caem 3 no chão → Etapa 3:
 *   frutas viram números 8−3 → Etapa 4: conta armada 8−3=5 →
 *   Etapa 5: generalização 7−2 com bananas) →
 *   3 Fases de prática (guiada, independente, aplicação) →
 *   Minijogo Colheita Relâmpago (subtração) → Quiz Final (5 perguntas
 *   com visualGrupos) → Missão em Família.
 *
 * BNCC: EF02MA05 (subtração até 20), EF02MA06 (fatos básicos).
 */
export const aula03_subtracoesAte10: AulaV4 = {
  slug: "03-subtracoes-ate-10-macas",
  titulo: "Tirando da Cesta: Subtrações até 10",
  iconeTrilha: "➖",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 20,

  // ===== APRENDENDO (Etapas 1 → 5) ===================================

  momento01_motivacao: {
    titulo: "Ai! Caíram maçãs da cesta!",
    historia:
      "Seu Coelho estava voltando da feira com a cesta cheia de maçãs quando tropeçou numa pedra. Algumas maçãs rolaram pra longe! Ele quer saber: 'Quantas maçãs ainda ficaram na cesta?' Pra descobrir, a gente precisa TIRAR — isso se chama SUBTRAIR!",
    imagemUrl: brilha,
  },

  // Etapa 1 — Observe (contar 8 maçãs tocando)
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Observe. A cesta do Seu Coelho tinha estas maçãs antes do tropeço. Toque em cada uma para contar:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 8,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs existiam na cesta?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Se caírem algumas, o que acontece com o total?",
    pista:
      "Contar sempre CRESCE de 1 em 1. Mas quando tiramos, o número DIMINUI de 1 em 1. Cada maçã que cai é uma a menos.",
    revelacao:
      "É isso! Quando tiramos coisas de um grupo, o número FICA MENOR. Isso se chama SUBTRAÇÃO — e o sinal dela é o '−' (menos)!",
  },

  // Etapas 2, 3, 4 e 5 — a explicação em si
  momento04_explicacao: {
    titulo: "Quando frutas somem: nasce a subtração",
    etapas: [
      // ---- Etapa 2 — Caíram algumas ------------------------
      {
        texto:
          "Etapa 2 — Da cesta com 8 maçãs, caíram 3 no chão! Vamos ver quantas SOBRARAM. Aperte pra ver a subtração acontecer.",
        exemplo:
          "Tínhamos 8. Tiramos 3. Sobraram: 5!",
      },
      // ---- Etapa 3 — Transformando frutas em número --------------
      {
        texto:
          "Etapa 3 — Agora vira NÚMERO. 8 maçãs que tinham − 3 maçãs que caíram = 5 maçãs que ficaram.",
        exemplo: "Escrevemos: 8 − 3 = 5. O sinal '−' quer dizer TIRAR.",
      },
      // ---- Etapa 4 — Conta armada ---------------
      {
        texto:
          "Etapa 4 — Também podemos escrever uma embaixo da outra: a CONTA ARMADA. Aperte 'Resolver' pra ver o Brilha contar de trás pra frente.",
        exemplo:
          "Começa em 8, volta 3 (sete... seis... cinco...) e chega em 5.",
        contaArmada: {
          a: 8,
          b: 3,
          resultado: 5,
          itemPlural: "maçãs",
        },
      },
      // ---- Etapa 5 — Generalização com bananas -------------------
      {
        texto:
          "Etapa 5 — Não importa a fruta! Com 7 bananas − 2 bananas o jeito é o mesmo: TIRAR do grupo.",
        exemplo: "7 − 2 = 5. Aperte pra conferir e veja a conta armada.",
      },
      {
        texto: "Agora com a conta armada de 7 − 2:",
        contaArmada: {
          a: 7,
          b: 2,
          resultado: 5,
          itemPlural: "bananas",
        },
      },
    ],
  },

  // Brilha resolve 9 − 4 em voz alta (modelagem)
  momento05_modelagem: {
    enunciado: "Brilha vai resolver 9 − 4 pensando em voz alta:",
    passos: [
      "Primeiro, olho a conta: 9 − 4. Preciso TIRAR 4 maçãs de um grupo de 9.",
      "Começo pelo número da frente: 9. Guardo o 9 na cabeça.",
      "Agora conto PRA TRÁS 4 vezes a partir do 9: oito... sete... seis... cinco.",
      "Cheguei em 5! Escrevo embaixo da linha: sobraram 5.",
      "Confiro: 9 − 4 = 5. Perfeito!",
    ],
    resposta: "9 − 4 = 5",
    visualUrl: maca,
  },

  // ===== FATIA 2 — 3 FASES DE PRÁTICA (guiada → independente → aplicação)

  // Fase 1 — Nós fazemos juntos: 5 − 2 com maçãs (animação passo a passo)
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! A cesta tem 5 maçãs, mas 2 caíram no chão. Aperte pra ver a subtração acontecer, tirando cada maçã.",
    dica: "Comece no 5 e volte 2 casas: quatro… três. Sobraram 3 maçãs.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 5,
      b: 2,
      legenda: "5 maçãs − 2 maçãs = 3 maçãs",
    },
  },

  // Fase 2 — Você faz: 6 − 3 bananas
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Havia 6 bananas e a macaquinha comeu 3. Aperte pra ver quantas ficaram e escolha o total certo.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 6, rotulo: "Bananas na cesta" },
      ],
      pergunta: "Se a macaquinha comeu 3 bananas, quantas SOBRARAM?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 6 − 3 = 3. Começou no 6 e voltou 3: cinco, quatro, três.",
      feedbackErro:
        "Vamos junto: você tinha 6 bananas. A macaquinha comeu 3. Conte pra TRÁS a partir do 6: cinco… quatro… três. Sobraram 3.",
    },
  },

  // Fase 3 — Aplicação: problema do pomar 10 − 4
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Problema do pomar! Seu Coelho colheu 10 maçãs bem bonitas. Mas ele deu 4 de presente pra vovó coelha.",
    problema:
      "10 maçãs colhidas − 4 maçãs dadas de presente. Quantas maçãs ficaram com Seu Coelho pra vender?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 10,
      b: 4,
      legenda: "10 maçãs − 4 maçãs (vovó) = 6 maçãs",
    },
  },

  momento09_revisao: {
    pontos: [
      "Revisão da aula: contamos tudo que tinha tocando cada fruta.",
      "Depois vimos que tirar de um grupo é uma SUBTRAÇÃO.",
      "E aprendemos a escrever a subtração na CONTA ARMADA (uma embaixo da outra).",
      "🎮 Agora é hora de brincar: Colheita Relâmpago da Subtração!",
    ],
    miniDesafio: {
      tipo: "minijogoColheita",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvoInicial: 10,
      chegaramMais: -3,
      duracaoSeg: 90,
      feedbackAcerto:
        "🎉 Perfeito! Você tinha 10 maçãs e 3 caíram. 10 − 3 = 7. Ficaram 7 na cesta!",
      feedbackErro:
        "Quase! Você tinha 10 maçãs e 3 caíram. Conte pra trás: nove, oito, sete. Sobraram 7.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      // 1 — bem fácil: subtração pequena
      {
        pergunta: "Pergunta 1 de 5 — Quanto é 5 − 2? Toque nas maçãs pra visualizar.",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Tinha" },
        ],
        feedbackAcerto:
          "🎉 Isso! Comece no 5 e volte 2: quatro, três. Sobraram 3.",
        feedbackErro:
          "Vamos juntos: comece no 5 e conte pra trás nos dedos: quatro… três. A resposta é 3.",
      },
      // 2 — subtração média com maçãs (contexto)
      {
        pergunta:
          "Pergunta 2 de 5 — Seu Coelho tinha 7 maçãs e comeu 2 no lanche. Quantas maçãs sobraram?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 7, rotulo: "Antes do lanche" },
        ],
        feedbackAcerto:
          "🎉 Perfeito! 7 − 2 = 5. Voltou 2 casas do 7: seis, cinco.",
        feedbackErro:
          "Pense: 7 maçãs, comeu 2. Volte 2 a partir do 7: seis, cinco. Sobraram 5.",
      },
      // 3 — chegando no zero: 8 − 8
      {
        pergunta: "Pergunta 3 de 5 — Quanto é 8 − 8?",
        opcoes: ["0", "1", "8"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 8, rotulo: "Tinha 8, tirou todas" },
        ],
        feedbackAcerto:
          "🎉 Isso! Se tira TUDO que tinha, sobra ZERO. 8 − 8 = 0. A cesta ficou vazia!",
        feedbackErro:
          "Truque: quando você tira tudo o que tinha, sobra NADA. 8 − 8 = 0.",
      },
      // 4 — subtrair 1 (comparação)
      {
        pergunta:
          "Pergunta 4 de 5 — Brilha tinha 9 bananas e deu 1 pra amiga. Quantas ficaram?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 9, rotulo: "Brilha tinha" },
        ],
        feedbackAcerto:
          "🎉 Boa! 9 − 1 = 8. Truque esperto: tirar 1 é só falar o número ANTES: antes do 9 vem o 8.",
        feedbackErro:
          "Dica de ouro: tirar 1 é dizer o número que vem ANTES. Antes do 9 vem o 8. Sobraram 8 bananas.",
      },
      // 5 — problema aplicado 10 − 5
      {
        pergunta:
          "Pergunta 5 de 5 — Uma cesta tem 10 maçãs. Se Seu Coelho vender 5, quantas ficam na cesta?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "Cesta cheia" },
        ],
        feedbackAcerto:
          "🎉 Uau! 10 − 5 = 5. Tirou metade! Sobrou a outra metade. Você é campeão(ã) do pomar! 🏆",
        feedbackErro:
          "Pense em duas mãos: 10 dedos, dobra 5. Sobram 5 esticados. 10 − 5 = 5 maçãs.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🍎 A Cesta que Esvazia",
    materiais: [
      "10 frutas de verdade (maçãs, laranjas, bananas — o que tiver na cozinha)",
      "1 prato, cesta ou pote",
      "Papel e lápis (opcional, pra escrever a conta)",
    ],
    passos: [
      "1) O adulto coloca 10 frutas no prato. A criança conta em voz alta tocando cada uma: um, dois, três... dez.",
      "2) O adulto tira ALGUMAS frutas do prato (ex.: 3) e coloca de lado. A criança olha as que sobraram e conta: um, dois, três... sete!",
      "3) A criança fala a conta em voz alta: '10 menos 3 é igual a 7!'",
      "4) Repitam 3 vezes com quantidades diferentes (sempre subtraindo de no máximo 10): 8 − 2, 9 − 4, 10 − 6. Cada acerto é uma comemoração!",
      "5) Bônus: pergunte 'e se eu comer TODAS as frutas, quantas sobram?' — a resposta é ZERO. Ensina o conceito de vazio.",
    ],
    registro:
      "📸 Tire uma foto do prato ANTES (cheio) e DEPOIS (com o que sobrou), com a criança mostrando com os dedos quantas ficaram.",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Detetive da Subtração",
  },
};
