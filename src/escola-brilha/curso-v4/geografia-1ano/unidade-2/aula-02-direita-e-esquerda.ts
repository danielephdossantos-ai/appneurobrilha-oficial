import type { AulaGeografiaV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bussola from "@/assets/neuro-treino/objetos/bussola.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";
import setaEsq from "@/assets/neuro-treino/objetos/seta-esquerda.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import mao from "@/assets/neuro-treino/objetos/menino.png";

/**
 * Aula 2 · Unidade 2 — Direita e Esquerda
 * A criança aprende os dois lados do corpo brincando com Brilha.
 */
export const aula02: AulaGeografiaV4 = {
  slug: "aula-02-direita-e-esquerda",
  titulo: "Direita e Esquerda",
  iconeTrilha: "↔️",
  bncc: ["EF01GE05"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra qual é a sua mão DIREITA e qual é a ESQUERDA!",
    imagemUrl: bussola,
  },

  momento02_narrativa: {
    titulo: "As duas mãos do explorador",
    historia:
      "Brilha esticou os bracinhos e falou: — Um lado é a DIREITA. O outro é a ESQUERDA. Todo explorador precisa saber. Levante a mão que você usa pra segurar o lápis — provavelmente é essa a sua DIREITA!",
    imagemUrl: mao,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque nas cartas e conheça DIREITA e ESQUERDA.",
    galeria: [
      { imagemUrl: setaDir, legenda: "DIREITA — o lado da mão que segura o lápis (na maioria das pessoas)" },
      { imagemUrl: setaEsq, legenda: "ESQUERDA — o lado do outro braço" },
      { imagemUrl: brilha, legenda: "Brilha tem 2 lados: 1 direito, 1 esquerdo" },
      { imagemUrl: bussola, legenda: "A bússola aponta os lados pra gente" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como eu descubro qual mão é a DIREITA?",
    pistas: [
      "A maioria das pessoas ESCREVE com a mão direita.",
      "A mão que você usa pra CUMPRIMENTAR alguém geralmente é a direita.",
      "O outro lado é a ESQUERDA.",
    ],
    revelacao:
      "Cada pessoa tem dois lados: DIREITA e ESQUERDA. Se você não lembra qual é qual, olha pra sua mão de escrever.",
  },

  momento05_ensinoExplicito: {
    titulo: "Meu corpo tem dois lados",
    etapas: [
      { texto: "Olho a minha MÃO de escrever — esse lado é a DIREITA.", imagemUrl: setaDir },
      { texto: "O outro lado é a ESQUERDA.", imagemUrl: setaEsq },
      { texto: "Se eu viro à direita, sigo pro lado da mão direita. Se viro à esquerda, sigo pro outro lado.", imagemUrl: bussola },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha mostra:",
    passos: [
      "— Na minha DIREITA tem uma maçã 🍎.",
      "— Na minha ESQUERDA tem um balão 🎈.",
      "— Se eu virar à direita, eu chego na maçã.",
      "— Se eu virar à esquerda, eu chego no balão.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: leve Brilha até a estrela usando ⬅️ e ➡️.",
    dica: "➡️ vai pra DIREITA. ⬅️ vai pra ESQUERDA.",
    orientacao: {
      instrucao: "Ande pra DIREITA (➡️) até chegar na estrela!",
      personagemUrl: brilha,
      cenarioUrl: parque,
      posicaoInicial: { linha: 1, coluna: 0 },
      alvo: { linha: 1, coluna: 2, imagemUrl: estrela, nome: "Estrela" },
      feedbackAcerto: "Boa! Você foi 2 casas pra DIREITA e pegou a estrela.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho — o balão está pra qual lado?",
    quiz: {
      pergunta: "Brilha está de frente pra você. Do lado da mão que ele escreve tem uma maçã. Onde está a maçã?",
      opcoes: ["Na DIREITA dele", "Na ESQUERDA dele"],
      correta: 0,
      feedbackAcerto: "Isso! A mão de escrever geralmente é a DIREITA.",
      feedbackErro: "Lembre: o lado da mão que escreve costuma ser a DIREITA.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você está andando na calçada e vê um carro no lado da sua mão direita.",
    problema: "De que lado está o carro?",
    quiz: {
      pergunta: "O carro está…",
      opcoes: ["Na minha DIREITA", "Na minha ESQUERDA"],
      correta: 0,
      feedbackAcerto: "Perfeito! O lado da sua mão direita é a sua DIREITA.",
      feedbackErro: "Se está do lado da MÃO DIREITA, então está na DIREITA.",
    },
  },

  momento10_minijogo: {
    titulo: "Direita e Esquerda",
    instrucao: "Toque em cada carta e brinque com o Brilha.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: setaDir, titulo: "Vira à DIREITA", descricao: "Levanta a mão que você escreve — esse é o lado direito." },
          { imagemUrl: setaEsq, titulo: "Vira à ESQUERDA", descricao: "O outro lado é a esquerda." },
          { imagemUrl: maca, titulo: "Maçã na direita", descricao: "Se Brilha estende a mão direita, alcança a maçã." },
          { imagemUrl: balao, titulo: "Balão na esquerda", descricao: "Com a mão esquerda, Brilha alcança o balão." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos revisar:",
    perguntas: [
      {
        pergunta: "Qual mão a maioria das pessoas usa pra escrever?",
        opcoes: ["Direita", "Esquerda"],
        correta: 0,
        feedbackAcerto: "Isso! A maioria escreve com a DIREITA (mas alguns escrevem com a esquerda e tudo bem).",
        feedbackErro: "A maioria escreve com a DIREITA — mas ser canhoto também é normal.",
      },
      {
        pergunta: "Quantos lados o meu corpo tem?",
        opcoes: ["Só 1", "2 — direito e esquerdo"],
        correta: 1,
        feedbackAcerto: "Certo! Todo corpo tem 2 lados.",
        feedbackErro: "Cada pessoa tem 2 lados: direito e esquerdo.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🖐 Meus dois lados",
    materiais: ["Nenhum — só o seu corpo"],
    passos: [
      "Levante a MÃO DIREITA no ar e diga: 'Esta é a minha DIREITA!'",
      "Levante a MÃO ESQUERDA e diga: 'Esta é a minha ESQUERDA!'",
      "Peça pra um adulto pedir: 'levanta a direita, levanta a esquerda' — como uma brincadeira.",
    ],
    registro: "Diga se acertou todas ou se se confundiu em alguma.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Se eu VIRO À DIREITA, pra que lado eu sigo?",
        opcoes: ["Pro lado da minha mão direita", "Pro lado da minha mão esquerda"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Virar à DIREITA é seguir pro lado da mão direita.",
      },
      {
        pergunta: "Quantos lados o corpo tem?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "Certo — direito e esquerdo.",
        feedbackErro: "São 2 lados: direito e esquerdo.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "⭐ Você desbloqueou DIREITA e ESQUERDA! Próxima aula: EM CIMA e EMBAIXO.",
    imagemUrl: bussola,
  },

  recompensa: { xp: 100, moedas: 40, medalha: "🧭 Explorador dos Lados" },
};
