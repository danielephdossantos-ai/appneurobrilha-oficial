import type { AulaGeografiaV4 } from "../../types";
import mapaCaminho from "@/assets/geografia-1ano/mapa-caminho.svg";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import mochila from "@/assets/neuro-treino/objetos/mochila.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import bussola from "@/assets/neuro-treino/objetos/bussola.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";

/**
 * Aula 3 — O Caminho até a Escola
 * Trabalha PERCURSO, PONTOS DE REFERÊNCIA e noções básicas de
 * segurança no trânsito (faixa de pedestre). Usa mapa clicável +
 * orientação espacial no grid.
 */
export const aula03: AulaGeografiaV4 = {
  slug: "aula-03-caminho-escola",
  titulo: "Da Minha Casa até a Escola",
  iconeTrilha: "🛣",
  bncc: ["EF01GE05", "EF01GE09"],
  duracaoMin: 18,

  momento01_missao: {
    texto: "Descubra o CAMINHO da casa até a escola!",
    imagemUrl: mochila,
  },

  momento02_narrativa: {
    titulo: "Brilha pega a mochila e a bússola",
    historia:
      "Hoje Brilha vai fazer um trajeto: sair de CASA e chegar na ESCOLA. No caminho existem coisas que ajudam a se localizar — árvores grandes, faixa de pedestre, uma padaria. Isso se chama PONTO DE REFERÊNCIA.",
    imagemUrl: bussola,
  },

  momento03_exploracaoVisual: {
    instrucao: "Olhe o mapa do caminho. Toque em cada ponto pra descobrir:",
    mapa: {
      titulo: "Da Casa até a Escola",
      imagemUrl: mapaCaminho,
      pontos: [
        { id: "casa", x: 12, y: 82, icone: "🏠", nome: "Sua casa",
          descricao: "O ponto de PARTIDA. É daqui que a caminhada começa." },
        { id: "arvore", x: 33, y: 40, icone: "🌳", nome: "Árvore grande",
          descricao: "Ponto de referência! Quando você chega aqui, sabe que está no meio do caminho." },
        { id: "faixa", x: 50, y: 55, icone: "🚸", nome: "Faixa de pedestre",
          descricao: "Aqui é o lugar SEGURO pra atravessar a rua. Sempre olhe pros dois lados!" },
        { id: "escola", x: 88, y: 22, icone: "🏫", nome: "Sua escola",
          descricao: "O ponto de CHEGADA. Fim do caminho!" },
      ],
    },
  },

  momento04_observacao: {
    perguntaGuia: "Como a gente sabe que está indo pelo caminho CERTO?",
    pistas: [
      "A gente olha as coisas que já conhece — a árvore, a padaria, a esquina.",
      "Se estivermos vendo o que sempre vemos, estamos no caminho certo.",
      "Se aparecer algo que nunca vimos, talvez a gente tenha se perdido.",
    ],
    revelacao:
      "PONTOS DE REFERÊNCIA são coisas fixas no caminho (uma árvore, uma loja, um sinal) que servem de PISTA pra você saber onde está.",
  },

  momento05_ensinoExplicito: {
    titulo: "3 regras do caminho seguro",
    etapas: [
      { texto: "1) Ande sempre com um ADULTO ou em GRUPO.", imagemUrl: mochila },
      { texto: "2) Atravesse a rua NA FAIXA de pedestre e olhe pros DOIS LADOS." },
      { texto: "3) Use PONTOS DE REFERÊNCIA (árvore, loja, esquina) pra não se perder.", imagemUrl: arvore },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha vai contar o caminho dele:",
    passos: [
      "— Saio de CASA e caminho até a ÁRVORE GRANDE.",
      "— Da árvore eu vejo a FAIXA DE PEDESTRE. Olho pros dois lados e atravesso.",
      "— Depois da faixa, subo a ruazinha e chego na ESCOLA. Pronto!",
    ],
  },

  momento07_nosFazemos: {
    enunciado: "Vamos juntos: guie o Brilha até a árvore (o meio do caminho).",
    dica: "Use as setinhas. Cada seta anda 1 quadrado. Ande pra cima e pra direita.",
    orientacao: {
      instrucao: "Leve o Brilha até a árvore no meio do caminho.",
      personagemUrl: brilha,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 1, coluna: 1, imagemUrl: arvore, nome: "Árvore grande" },
      feedbackAcerto:
        "Chegou! Você percebeu que precisava subir E ir pra direita. Isso é ORIENTAÇÃO ESPACIAL.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Sozinho: leve o Brilha da casa até a escola (canto de cima, à direita).",
    orientacao: {
      instrucao: "Chegue na escola!",
      personagemUrl: brilha,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 0, coluna: 2, imagemUrl: escola, nome: "Escola" },
      feedbackAcerto:
        "Perfeito! Você atravessou o mapa todo. Chegou na ESCOLA!",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você está andando com sua mãe e vê uma faixa branca no chão com o sinal 🚸.",
    problema: "O que você deve fazer nessa faixa?",
    quiz: {
      pergunta: "O que você faz?",
      opcoes: [
        "Corro atravessando sem olhar",
        "Paro, olho os dois lados, e atravesso com um adulto",
        "Sento no meio da faixa",
      ],
      correta: 1,
      feedbackAcerto:
        "Certo! Faixa de pedestre é o lugar CERTO pra atravessar — mas sempre parando e olhando.",
      feedbackErro:
        "Cuidado! Mesmo na faixa a gente precisa PARAR, OLHAR e só depois atravessar.",
    },
  },

  momento10_minijogo: {
    titulo: "Encontre a Escola",
    instrucao: "Mapa novo! Toque no ponto que é a ESCOLA:",
    jogo: {
      tipo: "mapaClicavel",
      bloco: {
        titulo: "Onde fica a escola?",
        imagemUrl: mapaCaminho,
        desafio: "Toque no prédio da ESCOLA.",
        respostaCerta: "escola",
        pontos: [
          { id: "casa", x: 12, y: 82, icone: "?", nome: "?", descricao: "" },
          { id: "arvore", x: 33, y: 40, icone: "?", nome: "?", descricao: "" },
          { id: "faixa", x: 50, y: 55, icone: "?", nome: "?", descricao: "" },
          { id: "escola", x: 88, y: 22, icone: "?", nome: "?", descricao: "" },
        ],
        feedbackAcerto: "Isso! A escola é o prédio maior, no fim do caminho.",
        feedbackErro: "Escola é o prédio grande com portão azul, no CANTO DE CIMA.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos revisar:",
    perguntas: [
      {
        pergunta: "O que é um ponto de referência?",
        opcoes: [
          "Uma coisa que a gente vê no caminho e usa pra se localizar",
          "Uma placa de trânsito só pra carros",
          "Um brinquedo",
        ],
        correta: 0,
        feedbackAcerto: "Certo! Árvore, padaria, esquina — qualquer coisa fixa que ajuda a se localizar.",
        feedbackErro: "Ponto de referência é o que a gente USA pra se orientar no caminho.",
      },
      {
        pergunta: "Qual é a MELHOR forma de atravessar uma rua?",
        opcoes: [
          "Correr no meio da rua",
          "Na faixa de pedestre, olhando pros dois lados",
          "De olhos fechados",
        ],
        correta: 1,
        feedbackAcerto: "Perfeito! Faixa + olhar + adulto = segurança.",
        feedbackErro: "Sempre na faixa e olhando pros dois lados.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🚶 Meu Caminho até a Escola",
    materiais: ["Papel", "Lápis de cor"],
    passos: [
      "No caminho da escola (com o adulto), preste atenção nos pontos de referência.",
      "Em casa, desenhe o percurso: casa → pontos → escola.",
      "Marque com um X as faixas de pedestre.",
    ],
    registro: "Traga o mapa do seu caminho.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Se você chegar num lugar que nunca viu, o que fazer?",
        opcoes: [
          "Sair correndo sozinho",
          "Falar com o adulto que está com você",
          "Se esconder",
        ],
        correta: 1,
        feedbackAcerto: "Certo! Sempre avisar o adulto que está com você.",
        feedbackErro: "Nunca saia sozinho. Fale com o adulto.",
      },
      {
        pergunta: "Qual instrumento ajuda a se orientar?",
        opcoes: ["Colher", "Bússola", "Copo"],
        correta: 1,
        feedbackAcerto: "Isso! A BÚSSOLA mostra as direções (norte, sul, leste, oeste).",
        feedbackErro: "É a BÚSSOLA — ela aponta pro norte e ajuda a se orientar.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "🌟 3ª página desbloqueada! Chegamos na escola — vamos EXPLORAR ela por dentro.",
    imagemUrl: escola,
  },

  recompensa: { xp: 120, moedas: 60, medalha: "🏅 Navegador de Ruas" },
};

void casa;
