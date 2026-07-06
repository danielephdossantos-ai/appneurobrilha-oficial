import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";

/**
 * EI03EO10 — Pertencimento a grupo, comunidade, lugar.
 * ⭐ Estrela: Pertencer.
 */
const aula: Aula = {
  codigo: "EI03EO10",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Nossa Floresta",

  narrativa: {
    titulo: "Nossa Floresta",
    contexto:
      "As 9 estrelas da Árvore da Amizade estão acesas! A Coruja Sábia reúne todos: 'Vocês agora fazem PARTE desta floresta pra sempre. Aqui é a CASA de vocês.'",
    problema: "O que é pertencer a um lugar? Como cuidar da nossa casa junta?",
    convite: "Bora acender a última estrela e celebrar nossa floresta?",
  },

  conhecimentosPrevios: ["Reconhecer a própria casa.", "Nomear pessoas queridas.", "Saber onde é a escola."],

  missao: "Sentir que EU FAÇO PARTE — da minha família, da minha escola, do meu lugar.",

  objetivos: [
    "Reconhecer os grupos aos quais pertence.",
    "Perceber que cuidar do lugar é cuidar de todos.",
  ],

  motivacao: "Pertencer é sentir 'aqui eu sou querido, aqui eu importo'.",

  explicacao:
    "EU PERTENÇO A:\n\n• Minha FAMÍLIA (quem me ama em casa).\n• Minha ESCOLA (amigos e professores).\n• Meu BAIRRO/CIDADE (vizinhos, praça).\n• A NATUREZA (árvores, bichos, rios).\n\nCuidar desses lugares é cuidar da gente também.",

  explicacaoAtiva: [
    { texto: "Esta é a Árvore da Amizade. 9 estrelas acesas! Toque nela.", imagem: arvoreImg, imagemAlt: "Árvore com estrelas" },
    { texto: "A Coruja diz: 'Você agora FAZ PARTE.'", imagem: corujaImg, imagemAlt: "Coruja acolhendo" },
    { texto: "Sua casa, sua família — você pertence.", imagem: casaImg, imagemAlt: "Casa" },
    {
      texto: "E a floresta é NOSSA — cuidar dela é cuidar de todo mundo.",
      imagem: florImg,
      imagemAlt: "Flor",
      checagem: {
        pergunta: "Cuidar do lugar onde vivo é:",
        opcoes: ["Cuidar de mim e de todos", "Não faz diferença"],
        correta: 0,
        explicacao: "Isso! Meu lugar é parte de mim.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Eu faço parte da minha família e da minha escola.",
    nivel2: "Pertencer é sentir 'aqui eu sou querido'.",
    nivel3: "Cuidar do lugar é forma de agradecer por pertencer.",
    nivel4: "Cada grupo que eu pertenço deixa uma marca boa em mim.",
  },

  exemploResolvido: {
    enunciado: "5 amigos da floresta + você = quantos moradores?",
    passos: ["Brilha.", "Lupi.", "Fifi.", "Téo.", "Piu.", "VOCÊ."],
    resposta: "6 — porque você também faz parte!",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 6,
      nomeItem: "morador da floresta",
      nomeItemPlural: "moradores da floresta",
      pergunta: "Quantos moradores contando você?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 lugares que eu pertenço. Quantos?",
    resposta: "3: casa, escola e natureza.",
    explicacao: "Cada lugar tem gente que gosta de mim.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada lugar. Qual está no meio (2º)?",
      participantes: [
        { nome: "Casa", imagemUrl: casaImg, posicao: 1 },
        { nome: "Árvore", imagemUrl: arvoreImg, posicao: 2 },
        { nome: "Flor", imagemUrl: florImg, posicao: 3 },
      ],
      respostaCerta: "Árvore",
    },
  },

  exercicios: [
    { enunciado: "⭐ Onde eu moro é meu lugar?", resposta: "Sim! É a minha casa.", dica: "Meu lugar é onde sou querido." },
    { enunciado: "🐰 Como cuido do meu lugar?", resposta: "Guardo brinquedo, não jogo lixo, respeito.", dica: "Cuidado = amor pelo lugar." },
    { enunciado: "🦉 Pertencer é o quê?", resposta: "Sentir que sou parte, que importo.", dica: "Pertencer aquece o coração." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: quais são os lugares aos quais você pertence?",
    resposta: "Casa, escola, cidade, natureza — todos são meus.",
    visual: {
      cena: [
        { personagem: "Casa da família", itemImagemUrl: casaImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Árvore da escola", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Flor da natureza", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Casa é meu lugar?", opcoes: ["Sim, é minha família", "Não"], correta: 0, explicacao: "Casa = primeiro lugar de pertencer." },
        { pergunta: "Escola é meu lugar?", opcoes: ["Sim, tenho amigos e profes", "Não"], correta: 0, explicacao: "Na escola também pertenço." },
        { pergunta: "Natureza é minha casa?", opcoes: ["Sim, o planeta é de todos", "Não"], correta: 0, explicacao: "A Terra é lar de todos os seres." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Eu pertenço a lugares e a grupos.",
      "Pertencer é ser querido e importar.",
      "Cuidar do lugar é agradecer.",
      "A floresta é NOSSA — de todos.",
    ],
    dica: "Diga a alguém da família: 'que bom que eu faço parte daqui'.",
  },

  quiz: [
    {
      pergunta: "Pertencer é:",
      opcoes: ["Ser querido no lugar", "Estar sozinho"],
      correta: 0,
      explicacao: "Pertencer = ser querido.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Pertencer" },
    },
    {
      pergunta: "Cuidar da minha casa/escola é:",
      opcoes: ["Amor pelo lugar", "Só obrigação"],
      correta: 0,
      explicacao: "Cuidar = amar o lugar.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: casaImg, quantidade: 1, rotulo: "Casa", cor: "#FB923C" },
          { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Escola", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "Quantas estrelas acesas na Árvore ao final?",
      opcoes: ["8", "9", "10"],
      correta: 2,
      explicacao: "10 estrelas — 1 pra cada missão cumprida!",
      visual: {
        tipo: "itens",
        imagemUrl: estrelaImg,
        quantidade: 10,
        rotulo: "10 estrelas ⭐",
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Guardião da Floresta! 10ª ESTRELA ⭐ acesa — a Árvore da Amizade brilha COMPLETA! 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 Missão em Casa: desenhe sua casa com sua família dentro — e mostre pra alguém dizendo 'este é meu lugar'.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Assim como as árvores têm raízes que se ligam embaixo da terra, as pessoas têm 'raízes' nos lugares onde são queridas. Suas raízes já começaram a crescer!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Moradores da floresta",
      instrucao: "Estes são os moradores. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
      ],
      pergunta: "Quantos moradores da floresta?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 amigos + você = 6! Você também faz parte.",
      erro: "Conte cada um.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Estrelas da Árvore",
      instrucao: "Cada missão acendeu 1 estrela. Toque em cada.",
      grupos: [{ imagemUrl: estrelaImg, quantidade: 10, rotulo: "Estrelas" }],
      pergunta: "Quantas estrelas acesas?",
      opcoes: ["8", "9", "10"],
      correta: 2,
      acerto: "10 estrelas — árvore completa!",
      erro: "Conte com carinho.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Lugar e sentimento",
      instrucao: "Ligue cada lugar ao que sinto lá.",
      pares: [
        { a: "Minha casa", b: "amor", aImagem: casaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Minha escola", b: "amigos felizes", aImagem: arvoreImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "A natureza", b: "calma", aImagem: florImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Lugares que pertenço",
      instrucao: "Estes são meus lugares. Toque em cada um.",
      grupos: [
        { imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" },
        { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Escola" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "Natureza" },
      ],
      pergunta: "Quantos lugares meus?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 lugares onde sou querido!",
      erro: "Conte cada lugar.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Estrela pra cada lugar",
      instrucao: "Cada lugar meu ganha 1 estrela de amor. Toque na estrela e depois no lugar.",
      itemImagem: estrelaImg,
      alvosVisuais: [
        { nome: "Casa", cor: "#FB923C", capacidade: 1, imagemUrl: casaImg },
        { nome: "Escola", cor: "#34D399", capacidade: 1, imagemUrl: arvoreImg },
        { nome: "Natureza", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
        { nome: "Floresta", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
      ],
      pares: [
        { item: "Estrela pra casa", alvo: "Casa" },
        { item: "Estrela pra escola", alvo: "Escola" },
        { item: "Estrela pra natureza", alvo: "Natureza" },
        { item: "Estrela pra floresta", alvo: "Floresta" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Fim da jornada — as 10 estrelas",
      instrucao: "Ligue cada estrela conquistada ao valor dela.",
      pares: [
        { a: "Identidade", b: "quem sou eu", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Amizade", b: "amigos de verdade", aImagem: lupiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Pertencer", b: "minha floresta", aImagem: arvoreImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Minha casa é meu lugar?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "Sim! Casa = primeiro lugar de pertencer.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" },
      },
      {
        pergunta: "Escola tem amigos e profes que me querem?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "Sim! Escola também é meu lugar.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Escola" },
      },
    ],
    medio: [
      {
        pergunta: "Cuidar do meu lugar é:",
        opcoes: ["Cuidar de mim e de todos", "Perda de tempo"],
        correta: 0,
        explicacao: "Cuidar do lugar é cuidar da gente.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" },
      },
      {
        pergunta: "Pertencer aquece o quê?",
        opcoes: ["Coração", "Só o corpo"],
        correta: 0,
        explicacao: "Coração — sentimento bonito.",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
      },
    ],
    dificil: [
      {
        pergunta: "Novo amigo chega. Faço:",
        opcoes: ["Acolho pra ele pertencer também", "Ignoro"],
        correta: 0,
        explicacao: "Acolher é passar o pertencer adiante.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Eu acolho", cor: "#FBBF24" },
            { imagemUrl: piuImg, quantidade: 1, rotulo: "Amigo novo", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "10 estrelas acesas. Isso mostra:",
        opcoes: ["Você cresceu por dentro", "Nada demais"],
        correta: 0,
        explicacao: "Cada estrela é um valor que agora mora em você!",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 10, rotulo: "10 estrelas" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO10", titulo: "Missão completa da EI03EO — bora pra EI03EF!" },
};

export default aula;
