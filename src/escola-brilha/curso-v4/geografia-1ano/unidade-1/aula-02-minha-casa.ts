import type { AulaGeografiaV4 } from "../../types";
import plantaCasa from "@/assets/geografia-1ano/planta-casa.svg";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import cadeira from "@/assets/neuro-treino/objetos/cadeira.png";
import geladeira from "@/assets/neuro-treino/objetos/geladeira.png";
import casaAntiga from "@/assets/neuro-treino/objetos/casa-antiga.png";
import casaModerna from "@/assets/neuro-treino/objetos/casa-moderna.png";

/**
 * Aula 2 — Minha Casa
 * Planta baixa clicável: sala, cozinha, quarto, banheiro.
 * A criança aprende que uma casa é dividida em CÔMODOS
 * e cada um serve pra uma coisa diferente.
 */
export const aula02: AulaGeografiaV4 = {
  slug: "aula-02-minha-casa",
  titulo: "Minha Casa por Dentro",
  iconeTrilha: "🏠",
  bncc: ["EF01GE03", "EF01GE09"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra os cômodos que existem dentro de uma casa!",
    imagemUrl: casa,
  },

  momento02_narrativa: {
    titulo: "Brilha abre a planta da casa",
    historia:
      "Brilha voltou da rua e viu sua casa de UM JEITO NOVO: por cima, como se tivesse voando! Assim ele conseguia ver TODOS os cômodos ao mesmo tempo. Isso se chama PLANTA da casa. Vamos explorar cada cômodo?",
    imagemUrl: casa,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada cômodo da casa e descubra pra que ele serve:",
    mapa: {
      titulo: "A Casa por Cima (Planta)",
      imagemUrl: plantaCasa,
      pontos: [
        { id: "quarto", x: 32, y: 32, icone: "🛏", nome: "Quarto",
          descricao: "É onde a gente DORME e descansa. Tem cama, travesseiro e às vezes um armário." },
        { id: "banheiro", x: 78, y: 32, icone: "🚿", nome: "Banheiro",
          descricao: "É onde a gente toma BANHO, escova os dentes e usa o vaso." },
        { id: "sala", x: 30, y: 68, icone: "📺", nome: "Sala",
          descricao: "É onde a família SE ENCONTRA: assiste TV, conversa, recebe visitas." },
        { id: "cozinha", x: 70, y: 68, icone: "🍳", nome: "Cozinha",
          descricao: "É onde a gente COZINHA e come. Tem fogão, geladeira e pia." },
      ],
    },
  },

  momento04_observacao: {
    perguntaGuia: "Por que a casa é DIVIDIDA em cômodos?",
    pistas: [
      "No quarto tem cama porque a gente dorme lá.",
      "No banheiro tem vaso porque a gente usa lá.",
      "Na cozinha tem fogão porque a gente cozinha lá.",
    ],
    revelacao:
      "Cada cômodo serve pra UMA COISA. Por isso os móveis certos ficam em cada lugar. Uma casa organizada ajuda a família a viver melhor.",
  },

  momento05_ensinoExplicito: {
    titulo: "Os 4 cômodos básicos",
    etapas: [
      { texto: "🛏 QUARTO: pra dormir e descansar." },
      { texto: "🚿 BANHEIRO: pra higiene (banho, escovar dentes)." },
      { texto: "📺 SALA: pra ficar com a família e receber visitas." },
      { texto: "🍳 COZINHA: pra preparar e comer as refeições.", imagemUrl: geladeira },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha vai me mostrar onde ele guarda a comida:",
    passos: [
      "— Comida gelada fica na GELADEIRA.",
      "— A geladeira fica na COZINHA.",
      "— Então: se eu quero pegar leite, eu vou pra COZINHA!",
    ],
    visualUrl: geladeira,
  },

  momento07_nosFazemos: {
    enunciado: "Vamos juntos: toque no cômodo CERTO da planta.",
    dica: "Se a atividade é DORMIR, o cômodo é o QUARTO.",
    mapa: {
      titulo: "Onde a gente dorme?",
      imagemUrl: plantaCasa,
      desafio: "Toque no QUARTO na planta.",
      respostaCerta: "quarto",
      pontos: [
        { id: "quarto", x: 32, y: 32, icone: "?", nome: "?", descricao: "" },
        { id: "banheiro", x: 78, y: 32, icone: "?", nome: "?", descricao: "" },
        { id: "sala", x: 30, y: 68, icone: "?", nome: "?", descricao: "" },
        { id: "cozinha", x: 70, y: 68, icone: "?", nome: "?", descricao: "" },
      ],
      feedbackAcerto: "Isso! O quarto é onde a gente descansa. Você identificou pela POSIÇÃO na planta.",
      feedbackErro: "Quase! Lembra: o quarto costuma ficar mais reservado, pra ser silencioso.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Sozinho: toque no cômodo onde a família se reúne pra assistir TV.",
    mapa: {
      titulo: "Onde a família assiste TV?",
      imagemUrl: plantaCasa,
      desafio: "Ache a SALA.",
      respostaCerta: "sala",
      pontos: [
        { id: "quarto", x: 32, y: 32, icone: "?", nome: "?", descricao: "" },
        { id: "banheiro", x: 78, y: 32, icone: "?", nome: "?", descricao: "" },
        { id: "sala", x: 30, y: 68, icone: "?", nome: "?", descricao: "" },
        { id: "cozinha", x: 70, y: 68, icone: "?", nome: "?", descricao: "" },
      ],
      feedbackAcerto: "Perfeito! A sala tem sofá e TV — é o coração social da casa.",
      feedbackErro: "Volte na exploração: a sala tem o sofá e a TV.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você acabou de comer e ficou com sujeira nas mãos.",
    problema: "Pra qual cômodo você deve ir pra lavar as mãos?",
    quiz: {
      pergunta: "Pra qual cômodo você vai?",
      opcoes: ["Quarto", "Banheiro", "Sala"],
      correta: 1,
      feedbackAcerto: "Certo! Lavar as mãos é HIGIENE — e higiene se faz no BANHEIRO (na pia).",
      feedbackErro: "Pense: onde tem PIA de lavar as mãos? No banheiro (e também na cozinha).",
    },
  },

  momento10_minijogo: {
    titulo: "Cada Móvel no Seu Lugar",
    instrucao: "Arraste cada MÓVEL para o cômodo certo:",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Onde fica cada móvel?",
        itens: [
          { id: "cama", texto: "Cama 🛏", alvoId: "quarto" },
          { id: "geladeira", texto: "Geladeira 🧊", alvoId: "cozinha", imagemUrl: geladeira },
          { id: "sofa", texto: "Sofá 🛋", alvoId: "sala" },
          { id: "vaso", texto: "Vaso sanitário 🚽", alvoId: "banheiro" },
          { id: "fogao", texto: "Fogão 🍳", alvoId: "cozinha" },
          { id: "tv", texto: "Televisão 📺", alvoId: "sala" },
        ],
        alvos: [
          { id: "quarto", nome: "🛏 Quarto" },
          { id: "banheiro", nome: "🚿 Banheiro" },
          { id: "sala", nome: "📺 Sala" },
          { id: "cozinha", nome: "🍳 Cozinha" },
        ],
        feedbackAcerto: "Tudo no lugar certo! Uma casa organizada assim ajuda a família a se cuidar.",
        feedbackErro: "Repense: cada cômodo tem os móveis do que a gente FAZ lá.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos ver o que ficou claro:",
    perguntas: [
      {
        pergunta: "Uma PLANTA da casa é...",
        opcoes: [
          "Um vaso de flores da casa",
          "O desenho da casa vista de cima",
          "A foto da fachada",
        ],
        correta: 1,
        feedbackAcerto: "Isso! Planta é o desenho da casa vista DE CIMA, mostrando todos os cômodos.",
        feedbackErro: "Planta baixa é como se você fosse um passarinho vendo a casa de cima.",
      },
      {
        pergunta: "O fogão fica em qual cômodo?",
        opcoes: ["Quarto", "Banheiro", "Cozinha"],
        correta: 2,
        feedbackAcerto: "Certo! Fogão + geladeira + pia = cozinha.",
        feedbackErro: "Onde a gente cozinha? Na cozinha! É lá que fica o fogão.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🗺 A Planta da MINHA Casa",
    materiais: ["Folha grande de papel", "Lápis"],
    passos: [
      "Peça um adulto pra ajudar você a desenhar a SUA casa vista de cima.",
      "Faça um retângulo pra cada cômodo. Escreva o nome dentro.",
      "Marque com um coração o SEU cômodo favorito.",
    ],
    registro: "Traga a planta da sua casa na próxima aula.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Duas casas podem ter cômodos em lugares DIFERENTES?",
        opcoes: ["Sim, cada casa é única", "Não, toda casa é igualzinha"],
        correta: 0,
        feedbackAcerto:
          "Certo! Existem casas grandes e pequenas, antigas e modernas — cada uma organiza os cômodos de um jeito.",
        feedbackErro:
          "Olhe: existe casa antiga, casa moderna, apartamento, sobrado — todas diferentes.",
        visualUrl: casaAntiga,
      },
      {
        pergunta: "Por que precisamos de cômodos separados?",
        opcoes: [
          "Pra cada atividade ter o lugar certo",
          "Pra ficar mais bonito só",
          "Pra ninguém se falar",
        ],
        correta: 0,
        feedbackAcerto: "Isso! Dormir no quarto, cozinhar na cozinha… cada coisa no seu lugar.",
        feedbackErro: "Cômodos separados servem pra ORGANIZAR as atividades da família.",
        visualUrl: casaModerna,
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🌟 2ª página do Grande Atlas desbloqueada! Agora vamos descobrir o CAMINHO da sua casa até a escola.",
    imagemUrl: brilha,
  },

  recompensa: { xp: 100, moedas: 50, medalha: "🏅 Arquiteto do Meu Lar" },
};

// silencia lint (import só de referência visual futura)
void cadeira;
