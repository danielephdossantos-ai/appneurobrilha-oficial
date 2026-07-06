import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

/**
 * EI03EO06 — Empatia e cuidado com o outro.
 * ⭐ Estrela: Cuidado.
 */
const aula: Aula = {
  codigo: "EI03EO06",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Cuidar do Amigo",

  narrativa: {
    titulo: "Cuidar do Amigo",
    contexto:
      "O Piu machucou a asinha e não consegue voar. Ele está triste sozinho no galho. O Brilha vê e sente o coração apertar. 'A gente precisa cuidar dele!'",
    problema: "Como ajudar um amigo que está machucado ou triste?",
    convite: "Bora aprender a cuidar dos amigos?",
  },

  conhecimentosPrevios: ["Perceber quando alguém está triste.", "Dar abraço.", "Perguntar 'você tá bem?'."],

  missao: "Aprender a cuidar do amigo com atenção, escuta e carinho.",

  objetivos: [
    "Perceber quando um amigo precisa de ajuda.",
    "Oferecer cuidado com gestos simples.",
  ],

  motivacao: "Cuidar do outro é a forma mais bonita de dizer 'você importa'.",

  explicacao:
    "COMO CUIDAR:\n\n• PERGUNTAR: 'Você tá bem?'\n• OUVIR de verdade.\n• OFERECER: abraço, água, ajuda pra chamar adulto.\n• FICAR JUNTO — ninguém gosta de ficar sozinho quando tá mal.\n\nCuidar não é resolver tudo. É estar ali.",

  explicacaoAtiva: [
    { texto: "O Piu machucou a asinha. Toque nele com carinho.", imagem: piuImg, imagemAlt: "Piu machucado" },
    { texto: "O Brilha se aproxima. 'Você tá bem?'", imagem: brilhaImg, imagemAlt: "Brilha perguntando" },
    { texto: "A Coruja Sábia chega pra ajudar de verdade — adulto sempre resolve.", imagem: corujaImg, imagemAlt: "Coruja ajudando" },
    {
      texto: "Um abraço da Fifi. O Piu já se sente melhor.",
      imagem: fifiImg,
      imagemAlt: "Fifi abraçando",
      checagem: {
        pergunta: "Amigo triste. O melhor primeiro passo é:",
        opcoes: ["Perguntar 'você tá bem?'", "Fingir que não viu"],
        correta: 0,
        explicacao: "Isso! Perguntar mostra que você se importa.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Cuidar é se importar.",
    nivel2: "Pergunto, escuto, ofereço ajuda.",
    nivel3: "Se é grave, chamo um adulto — cuidar não é resolver sozinho.",
    nivel4: "Ficar do lado já é cuidar — ninguém gosta de ficar mal sozinho.",
  },

  exemploResolvido: {
    enunciado: "O Piu está triste. 3 amigos vão ajudar de jeitos diferentes. Quantos vão?",
    passos: ["Brilha pergunta 'tá bem?'.", "Fifi abraça.", "Coruja chama adulto."],
    resposta: "3 amigos, 3 formas de cuidar.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 3,
      nomeItem: "coração cuidando",
      nomeItemPlural: "corações cuidando",
      pergunta: "Quantos corações se juntaram pra cuidar?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos oferecem flor pro Piu se sentir melhor. Quantos amigos?",
    resposta: "3 amigos com flor — que gesto lindo!",
    explicacao: "Um gesto pequeno pode alegrar muito quem tá mal.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada amigo. Quem está no meio (2º)?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 },
        { nome: "Téo", imagemUrl: teoImg, posicao: 3 },
      ],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "⭐ Vi um amigo chorando. Faço o quê?", resposta: "Vou até ele e pergunto se tá bem.", dica: "Perguntar é o começo do cuidado." },
    { enunciado: "🐰 Amigo caiu. Ajudo como?", resposta: "Estendo a mão e chamo adulto se precisar.", dica: "Cuidar é agir com carinho." },
    { enunciado: "🦉 Cuidar é resolver tudo?", resposta: "Não! Cuidar é ESTAR JUNTO, mesmo sem resolver.", dica: "Presença já é cuidado." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: em cada cena, qual é o jeito CUIDADOSO de agir?",
    resposta: "Perguntar, oferecer, chamar adulto.",
    visual: {
      cena: [
        { personagem: "Piu machucado", itemImagemUrl: piuImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Fifi triste", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Coruja adulta", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        { pergunta: "Amigo machucado. Faço:", opcoes: ["Chamo um adulto", "Vou embora"], correta: 0, explicacao: "Adulto sabe cuidar de machucado." },
        { pergunta: "Amiga triste. Faço:", opcoes: ["Ofereço abraço", "Rio dela"], correta: 0, explicacao: "Abraço aquece o coração." },
        { pergunta: "Adulto chegou pra ajudar. Faço:", opcoes: ["Fico junto e ajudo", "Corro embora"], correta: 0, explicacao: "Ficar junto é apoiar." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cuidar começa perguntando.",
      "Ficar junto já é cuidar.",
      "Machucado grave = chamar adulto.",
      "Um gesto pequeno alegra muito.",
    ],
    dica: "Hoje, pergunte pra alguém: 'você tá bem?' — e escute a resposta.",
  },

  quiz: [
    {
      pergunta: "Cuidar é:",
      opcoes: ["Se importar com o outro", "Resolver tudo sozinho"],
      correta: 0,
      explicacao: "Cuidar = se importar.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" },
    },
    {
      pergunta: "Amigo machucado. Primeiro passo:",
      opcoes: ["Perguntar 'tá bem?'", "Sair de perto"],
      correta: 0,
      explicacao: "Perguntar mostra que você viu.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu", cor: "#60A5FA" },
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos foram cuidar do Piu?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      explicacao: "Brilha, Fifi e Coruja — 3 amigos.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
          { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja", cor: "#A78BFA" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Coração Cuidador! 6ª ESTRELA ⭐ (Cuidado) acesa. Missão em Casa: pergunte pra alguém da família 'você tá bem hoje?' — e ouça.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Quando a gente cuida de alguém, o cérebro nosso solta uma química chamada oxitocina — a 'química do abraço'. Cuidar cuida da gente também!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Piu precisa de ajuda",
      instrucao: "O Piu machucou a asinha. Toque nele com carinho.",
      grupos: [{ imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }],
      pergunta: "Quantos amigos precisam de ajuda?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "1 amigo — e ele precisa de nós!",
      erro: "Aponte pro Piu.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Amigos que vão cuidar",
      instrucao: "Estes vão cuidar do Piu. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" },
      ],
      pergunta: "Quantos amigos cuidadores?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 amigos juntos — Piu não tá sozinho!",
      erro: "Conte um a um.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada um cuida de um jeito",
      instrucao: "Ligue cada amigo à forma de cuidar.",
      pares: [
        { a: "Brilha", b: "pergunta 'tá bem?'", aImagem: brilhaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Fifi", b: "dá abraço", aImagem: fifiImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Coruja", b: "chama adulto", aImagem: corujaImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Flores pro Piu",
      instrucao: "Cada amigo trouxe 1 flor. Toque em cada flor.",
      grupos: [{ imagemUrl: florImg, quantidade: 3, rotulo: "Flores" }],
      pergunta: "Quantas flores pro Piu?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 flores! O Piu vai amar.",
      erro: "Conte cada flor.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Presente do carinho",
      instrucao: "Cada amigo cuidador ganha 1 presente da amizade. Toque no presente e depois no amigo.",
      itemImagem: presenteImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
        { nome: "Coruja", cor: "#A78BFA", capacidade: 1, imagemUrl: corujaImg },
      ],
      pares: [
        { item: "Presente do Brilha", alvo: "Brilha" },
        { item: "Presente da Fifi", alvo: "Fifi" },
        { item: "Presente do Téo", alvo: "Téo" },
        { item: "Presente da Coruja", alvo: "Coruja" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Como o Piu se sentiu",
      instrucao: "Ligue cada momento à carinha do Piu.",
      pares: [
        { a: "Machucado sozinho", b: "triste", aImagem: piuImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 },
        { a: "Amigos chegaram", b: "tranquilo", aImagem: brilhaImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Ganhou flores e abraço", b: "feliz", aImagem: florImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Amigo triste. Faço:",
        opcoes: ["Pergunto 'tá bem?'", "Ignoro"],
        correta: 0,
        explicacao: "Perguntar é o começo.",
        visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Amigo triste" },
      },
      {
        pergunta: "Amigo machucado grave. Faço:",
        opcoes: ["Chamo adulto", "Fico só olhando"],
        correta: 0,
        explicacao: "Adulto resolve o que a gente não consegue.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Adulto" },
      },
    ],
    medio: [
      {
        pergunta: "Cuidar é resolver tudo?",
        opcoes: ["Não, é estar junto", "Sim, tenho que resolver"],
        correta: 0,
        explicacao: "Estar junto já é cuidar!",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Presença" },
      },
      {
        pergunta: "Amigo caiu. Ofereço:",
        opcoes: ["A mão pra levantar", "Risada"],
        correta: 0,
        explicacao: "Mão estendida = cuidado.",
        visual: { tipo: "itens", imagemUrl: lupiImg, quantidade: 1, rotulo: "Ajudar" },
      },
    ],
    dificil: [
      {
        pergunta: "Como me sinto ao cuidar de alguém?",
        opcoes: ["Coração cheio", "Vazio"],
        correta: 0,
        explicacao: "Cuidar enche o coração — de quem cuida também.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração", cor: "#EF4444" },
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "Amigo não quer falar. Faço:",
        opcoes: ["Fico do lado em silêncio", "Insisto até irritar"],
        correta: 0,
        explicacao: "Silêncio ao lado também é cuidado.",
        visual: { tipo: "itens", imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Presença" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO07", titulo: "Cada Um É Diferente" },
};

export default aula;
