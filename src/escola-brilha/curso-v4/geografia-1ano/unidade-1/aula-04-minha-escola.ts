import type { AulaGeografiaV4 } from "../../types";
import plantaEscola from "@/assets/geografia-1ano/planta-escola.svg";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import patio from "@/assets/neuro-treino/objetos/patio-escola.png";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 4 — Minha Escola por Dentro
 * Planta clicável da escola: salas, pátio, biblioteca, secretaria,
 * banheiros e cantina. Discute a função de cada espaço.
 */
export const aula04: AulaGeografiaV4 = {
  slug: "aula-04-minha-escola",
  titulo: "Minha Escola por Dentro",
  iconeTrilha: "🏫",
  bncc: ["EF01GE03", "EF01GE08"],
  duracaoMin: 18,

  momento01_missao: {
    texto: "Descubra TODOS os espaços da sua escola!",
    imagemUrl: escola,
  },

  momento02_narrativa: {
    titulo: "Brilha atravessa o portão",
    historia:
      "Portão! Sinal! Vozes de crianças! Brilha entrou na escola e viu que ela é como uma casa GRANDE — só que em vez de uma família, mora uma COMUNIDADE. Cada espaço tem um nome e uma função. Vamos conhecer todos?",
    imagemUrl: escola,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada espaço da escola pra saber pra que ele serve:",
    mapa: {
      titulo: "Planta da Escola",
      imagemUrl: plantaEscola,
      pontos: [
        { id: "sala1", x: 22, y: 30, icone: "📚", nome: "Sala de aula",
          descricao: "Onde acontece a AULA. Tem lousa, carteiras e a professora." },
        { id: "sala2", x: 22, y: 55, icone: "📗", nome: "Outra sala de aula",
          descricao: "Cada turma tem a sua sala." },
        { id: "biblio", x: 22, y: 78, icone: "📖", nome: "Biblioteca",
          descricao: "Onde ficam os LIVROS pra emprestar e ler.", imagemUrl: biblioteca },
        { id: "patio", x: 52, y: 55, icone: "⚽", nome: "Pátio",
          descricao: "Onde a gente brinca no RECREIO.", imagemUrl: patio },
        { id: "secret", x: 82, y: 30, icone: "📋", nome: "Secretaria",
          descricao: "Onde a diretora e as tias organizam os papéis da escola." },
        { id: "banh", x: 82, y: 52, icone: "🚻", nome: "Banheiros",
          descricao: "Pra ir ao banheiro e lavar as mãos." },
        { id: "cant", x: 82, y: 76, icone: "🍎", nome: "Cantina",
          descricao: "Onde a gente MERENDA (lanche da escola)." },
      ],
    },
  },

  momento04_observacao: {
    perguntaGuia: "Por que a escola tem espaços TÃO DIFERENTES?",
    pistas: [
      "Na sala a gente ESTUDA (então tem lousa).",
      "No pátio a gente BRINCA (então é grande e aberto).",
      "Na biblioteca a gente LÊ (então é silenciosa).",
    ],
    revelacao:
      "Cada espaço da escola foi feito PENSANDO no que a gente faz lá — igual aos cômodos da casa, mas pra uma COMUNIDADE inteira.",
  },

  momento05_ensinoExplicito: {
    titulo: "Quem cuida de cada espaço?",
    etapas: [
      { texto: "Sala de aula → PROFESSORA/PROFESSOR.", imagemUrl: professora },
      { texto: "Biblioteca → BIBLIOTECÁRIO(A).", imagemUrl: biblioteca },
      { texto: "Cantina → COZINHEIRO(A)." },
      { texto: "Secretaria → DIRETOR(A) e secretaria." },
      { texto: "Pátio → INSPETOR(A) cuida do recreio.", imagemUrl: patio },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha vai me contar sua manhã na escola:",
    passos: [
      "— Cheguei pelo PORTÃO e fui pra SALA DE AULA.",
      "— Depois de 2 aulas, tocou o sino: hora do RECREIO! Fui pro PÁTIO.",
      "— Depois do recreio, passei na BIBLIOTECA pra pegar um livro.",
      "— No fim da manhã, saí pelo mesmo portão.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Vamos juntos: toque no espaço em que a gente APRENDE.",
    dica: "Pense: onde tem lousa e carteira?",
    mapa: {
      titulo: "Onde a gente aprende?",
      imagemUrl: plantaEscola,
      desafio: "Toque na SALA DE AULA.",
      respostaCerta: "sala1",
      pontos: [
        { id: "sala1", x: 22, y: 30, icone: "?", nome: "?", descricao: "" },
        { id: "patio", x: 52, y: 55, icone: "?", nome: "?", descricao: "" },
        { id: "biblio", x: 22, y: 78, icone: "?", nome: "?", descricao: "" },
        { id: "cant", x: 82, y: 76, icone: "?", nome: "?", descricao: "" },
      ],
      feedbackAcerto: "Certo! A sala de aula é o coração do estudo.",
      feedbackErro: "Sala de aula fica geralmente no primeiro andar, à esquerda na planta.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Sozinho: toque no espaço onde acontece o RECREIO.",
    mapa: {
      titulo: "Onde é o recreio?",
      imagemUrl: plantaEscola,
      desafio: "Toque no PÁTIO.",
      respostaCerta: "patio",
      pontos: [
        { id: "sala1", x: 22, y: 30, icone: "?", nome: "?", descricao: "" },
        { id: "patio", x: 52, y: 55, icone: "?", nome: "?", descricao: "" },
        { id: "biblio", x: 22, y: 78, icone: "?", nome: "?", descricao: "" },
        { id: "cant", x: 82, y: 76, icone: "?", nome: "?", descricao: "" },
      ],
      feedbackAcerto: "Perfeito! Pátio no centro, espaço aberto pra brincar.",
      feedbackErro: "O pátio é o espaço grande no MEIO da escola.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você quer pegar um livro emprestado pra ler em casa.",
    problema: "Pra qual espaço da escola você vai?",
    quiz: {
      pergunta: "Onde pegar livro emprestado?",
      opcoes: ["Secretaria", "Biblioteca", "Cantina"],
      correta: 1,
      feedbackAcerto: "Isso! Biblioteca é o espaço dos LIVROS.",
      feedbackErro: "Livro fica na BIBLIOTECA. A cantina é da comida, a secretaria dos papéis.",
    },
  },

  momento10_minijogo: {
    titulo: "Cada Pessoa em Seu Espaço",
    instrucao: "Arraste cada pessoa pro lugar onde ela trabalha:",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Quem trabalha onde?",
        itens: [
          { id: "prof", texto: "Professora 👩‍🏫", alvoId: "sala", imagemUrl: professora },
          { id: "biblio", texto: "Bibliotecária 📚", alvoId: "biblio" },
          { id: "cozinh", texto: "Cozinheira 👩‍🍳", alvoId: "cant" },
          { id: "insp", texto: "Inspetora 🦺", alvoId: "patio" },
        ],
        alvos: [
          { id: "sala", nome: "📚 Sala de aula" },
          { id: "biblio", nome: "📖 Biblioteca" },
          { id: "cant", nome: "🍎 Cantina" },
          { id: "patio", nome: "⚽ Pátio" },
        ],
        feedbackAcerto: "Toda comunidade escolar organizada! Cada pessoa ajuda de um jeito.",
        feedbackErro: "Repense: cada profissional trabalha no espaço da sua função.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos ver o que aprendeu:",
    perguntas: [
      {
        pergunta: "A escola é como uma CASA?",
        opcoes: [
          "Não tem nada a ver",
          "Sim, tem espaços diferentes, mas é pra UMA COMUNIDADE",
          "Só se for pequena",
        ],
        correta: 1,
        feedbackAcerto: "Isso! A casa é da família; a escola é da comunidade escolar.",
        feedbackErro: "As duas têm espaços com FUNÇÃO — a escola só é maior porque atende mais gente.",
      },
      {
        pergunta: "Onde a gente MERENDA?",
        opcoes: ["Sala de aula", "Cantina", "Secretaria"],
        correta: 1,
        feedbackAcerto: "Cantina — onde a comida é preparada e servida.",
        feedbackErro: "Comida = cantina.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🏫 Meu Roteiro da Escola",
    materiais: ["Papel", "Lápis de cor"],
    passos: [
      "Com um adulto, converse: o que existe na SUA escola?",
      "Desenhe os 4 espaços que você mais gosta.",
      "Escreva o nome embaixo de cada um.",
    ],
    registro: "Traga o desenho pra próxima aula.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual espaço é MAIS SILENCIOSO?",
        opcoes: ["Pátio no recreio", "Biblioteca", "Cantina"],
        correta: 1,
        feedbackAcerto: "Certo! Biblioteca precisa de silêncio pra concentração.",
        feedbackErro: "Onde a gente LÊ, é silêncio: biblioteca.",
      },
      {
        pergunta: "Quem cuida das crianças no RECREIO?",
        opcoes: ["Diretora", "Inspetor(a)", "Cozinheira"],
        correta: 1,
        feedbackAcerto: "Isso! Inspetor(a) cuida do pátio no recreio.",
        feedbackErro: "É o(a) INSPETOR(A) — cuida do pátio pra ninguém se machucar.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "🌟 4ª página desbloqueada! Última missão da unidade: sua SALA DE AULA de perto.",
    imagemUrl: professora,
  },

  recompensa: { xp: 120, moedas: 60, medalha: "🏅 Explorador da Escola" },
};
