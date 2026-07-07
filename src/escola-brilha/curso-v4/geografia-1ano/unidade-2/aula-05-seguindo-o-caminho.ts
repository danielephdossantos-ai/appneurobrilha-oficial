import type { AulaGeografiaV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bussola from "@/assets/neuro-treino/objetos/bussola.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import setaCima from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixo from "@/assets/neuro-treino/objetos/seta-baixo.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";
import setaEsq from "@/assets/neuro-treino/objetos/seta-esquerda.png";

/**
 * Aula 5 · Unidade 2 — Seguindo o Caminho
 * Fecha a unidade juntando frente/atrás, direita/esquerda, cima/baixo, perto/longe
 * num pequeno labirinto no parque.
 */
export const aula05: AulaGeografiaV4 = {
  slug: "aula-05-seguindo-o-caminho",
  titulo: "Seguindo o Caminho",
  iconeTrilha: "🗺️",
  bncc: ["EF01GE05", "EF01GE06"],
  duracaoMin: 20,

  momento01_missao: {
    texto: "Guie o Brilha pelo caminho até o tesouro do parque!",
    imagemUrl: mapaPercurso,
  },

  momento02_narrativa: {
    titulo: "O caminho do tesouro",
    historia:
      "A bússola do Brilha piscou 5 vezes seguidas. — Chegou a hora! Existe um TESOURO no parque. Pra achar, você precisa usar TUDO que aprendeu: frente, atrás, direita, esquerda, cima, baixo, perto e longe.",
    imagemUrl: mapaPercurso,
  },

  momento03_exploracaoVisual: {
    instrucao: "Reveja rapidamente cada direção antes de começar:",
    galeria: [
      { imagemUrl: setaCima, legenda: "⬆️ CIMA / FRENTE — segue em frente" },
      { imagemUrl: setaBaixo, legenda: "⬇️ BAIXO / ATRÁS — recua" },
      { imagemUrl: setaDir, legenda: "➡️ DIREITA — vira à direita" },
      { imagemUrl: setaEsq, legenda: "⬅️ ESQUERDA — vira à esquerda" },
      { imagemUrl: bussola, legenda: "🧭 BÚSSOLA — ajuda a se orientar" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como se segue um CAMINHO?",
    pistas: [
      "Um passo de cada vez.",
      "Se errou, você pode voltar (⬇️) e tentar de novo.",
      "Olhando o mapa, você vê pra onde ir.",
    ],
    revelacao:
      "CAMINHO é uma sequência de passos: um pra frente, um pra direita, e assim por diante.",
  },

  momento05_ensinoExplicito: {
    titulo: "As 4 direções que a gente já sabe",
    etapas: [
      { texto: "⬆️ pra cima (frente).", imagemUrl: setaCima },
      { texto: "⬇️ pra baixo (atrás).", imagemUrl: setaBaixo },
      { texto: "⬅️ pra esquerda.", imagemUrl: setaEsq },
      { texto: "➡️ pra direita.", imagemUrl: setaDir },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha mostra o caminho dele até a árvore favorita:",
    passos: [
      "— Saio da minha casa.",
      "— Sigo em FRENTE 3 passos.",
      "— Viro à DIREITA.",
      "— Ando mais 2 passos e cheguei na árvore.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto — leve Brilha até a estrela numa DIAGONAL: 2 passos pra CIMA + 2 pra DIREITA.",
    dica: "Combine ⬆️ com ➡️.",
    orientacao: {
      instrucao: "Suba (⬆️) e vá pra direita (➡️) até a estrela do topo!",
      personagemUrl: brilha,
      cenarioUrl: parque,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 0, coluna: 2, imagemUrl: estrela, nome: "Estrela do canto" },
      feedbackAcerto: "Você combinou duas direções — como um explorador de verdade!",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho: labirinto do meio do parque. A estrela está no CENTRO.",
    quiz: {
      pergunta: "Se Brilha está no CANTO (linha 0, coluna 0) e precisa chegar no CENTRO, ele precisa…",
      opcoes: [
        "Ir 1 pra baixo + 1 pra direita",
        "Ir 2 pra baixo + 2 pra direita",
        "Ficar parado",
      ],
      correta: 0,
      feedbackAcerto: "Isso! O centro está a 1 passo pra baixo e 1 pra direita.",
      feedbackErro: "Do canto pro centro dá 1 pra baixo e 1 pra direita — só 2 passos.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você está no supermercado e sua mãe fala: 'vai na terceira prateleira à sua direita'.",
    problema: "O que você faz?",
    quiz: {
      pergunta: "Você deve…",
      opcoes: [
        "Virar à direita e contar 3 prateleiras",
        "Virar à esquerda e correr",
      ],
      correta: 0,
      feedbackAcerto: "Perfeito! Seguir instruções é usar TUDO isso da aula.",
      feedbackErro: "Se falaram DIREITA, você vira à DIREITA. Depois conta as prateleiras.",
    },
  },

  momento10_minijogo: {
    titulo: "Caça ao Tesouro",
    instrucao: "Guie o Brilha até a estrela do canto oposto — atravesse o parque!",
    jogo: {
      tipo: "orientacaoEspacial",
      bloco: {
        instrucao: "Chegue na ESTRELA do canto oposto! (misture ⬇️ e ➡️)",
        personagemUrl: brilha,
        cenarioUrl: parque,
        posicaoInicial: { linha: 0, coluna: 0 },
        alvo: { linha: 2, coluna: 2, imagemUrl: estrela, nome: "Tesouro" },
        feedbackAcerto: "🏆 TESOURO ENCONTRADO! Você é um Pequeno Explorador de verdade!",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Última revisão da unidade:",
    perguntas: [
      {
        pergunta: "⬆️ significa…",
        opcoes: ["Frente / cima", "Atrás / baixo"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "⬆️ = pra CIMA / pra FRENTE.",
      },
      {
        pergunta: "Se algo está PERTO, eu chego…",
        opcoes: ["Rápido", "Só de avião"],
        correta: 0,
        feedbackAcerto: "Isso! PERTO = rápido.",
        feedbackErro: "PERTO é o oposto de LONGE — dá pra chegar RÁPIDO.",
      },
      {
        pergunta: "Qual mão eu levanto pra virar à DIREITA?",
        opcoes: ["A direita", "A esquerda"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "Direita = mão direita.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🗺 Meu primeiro mapa do caminho",
    materiais: ["Folha em branco", "Lápis"],
    passos: [
      "Desenhe uma folha em branco.",
      "Marque a SUA CASA de um lado e a ESCOLA do outro.",
      "Desenhe o caminho com SETINHAS (⬅️ ⬆️ ➡️ ⬇️).",
      "Peça pra alguém da família ver se o caminho está certo.",
    ],
    registro: "Guarde o mapa — ele vale como sua primeira página do Grande Atlas!",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Quantas direções eu tenho no meu grid do parque?",
        opcoes: ["2", "4 (cima, baixo, direita, esquerda)"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "São 4: ⬆️ ⬇️ ⬅️ ➡️.",
      },
      {
        pergunta: "Se eu erro o caminho, o que eu faço?",
        opcoes: ["Desisto", "Volto e tento de novo"],
        correta: 1,
        feedbackAcerto: "Certo! Explorador não desiste.",
        feedbackErro: "Volta e tenta de novo — sempre.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🌟 UNIDADE 2 CONCLUÍDA! Você guardou a 2ª página do Grande Atlas. Próxima aventura: DESCOBRINDO O BAIRRO.",
    imagemUrl: mapaPercurso,
  },

  recompensa: { xp: 150, moedas: 60, medalha: "🏅 Pequeno Cartógrafo" },
};
