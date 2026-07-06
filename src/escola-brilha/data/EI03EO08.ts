import type { Aula } from "../types";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import fogoImg from "@/assets/neuro-treino/objetos/fogo.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";

const aula: Aula = {
  codigo: "EI03EO08",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Regras da Floresta",

  narrativa: {
    titulo: "Sinal Verde, Sinal Vermelho",
    contexto:
      "Na floresta existe um caminho com 2 sinais mágicos: um VERDE (pode) e um VERMELHO (não pode). Os bichos precisam aprender pra brincadeira dar certo.",
    problema:
      "Um coelhinho passou correndo no vermelho e tropeçou. Vamos ensinar TODO mundo as regrinhas?",
    convite: "Bora aprender o que pode e o que não pode?",
  },

  conhecimentosPrevios: [
    "Saber esperar a vez.",
    "Reconhecer sim/não.",
    "Obedecer combinações simples da família.",
  ],

  missao:
    "Entender que REGRAS existem pra proteger e organizar todo mundo — e aprender a separar 'pode' de 'não pode'.",

  objetivos: [
    "Separar atitudes 'pode' e 'não pode'.",
    "Respeitar o trânsito da floresta (sinal verde/vermelho).",
    "Fazer fila sem furar.",
    "Entender que regra é combinação — não é castigo.",
  ],

  motivacao:
    "Regras não são chatas — são um combinado pra ninguém se machucar e todo mundo se divertir junto.",

  explicacao:
    "As regras da floresta são simples:\n\n• SINAL VERDE = pode passar, pode brincar.\n• SINAL VERMELHO = espera! Pode ter perigo.\n• FILA = cada um no seu lugar.\n• MÃOS AGRADECIDAS = pedir 'por favor' e agradecer.\n\nSeguir as regras deixa todo mundo mais seguro e mais feliz.",

  explicacoesNiveis: {
    nivel1: "Verde = pode. Vermelho = espera.",
    nivel2: "Furar fila é 'não pode'. Ajudar é 'pode'.",
    nivel3: "Regras são combinações que cuidam da gente.",
    nivel4: "Em casa: sentar pra comer, escovar dente, dormir na hora.",
  },

  exemploResolvido: {
    enunciado:
      "Conte quantas atitudes 'PODE' aparecem na floresta.",
    passos: [
      "Toque em: ajudar, dividir, esperar a vez.",
      "Conte: 1, 2, 3.",
      "3 atitudes 'PODE'!",
    ],
    resposta: "3 atitudes 'pode'.",
    interativo: {
      tipo: "contagem",
      imagemUrl: felizImg,
      quantidade: 3,
      nomeItem: "atitude",
      nomeItemPlural: "atitudes",
      pergunta: "Quantas atitudes 'PODE' aparecem?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque no sinal certo: 'furar fila' é PODE ou NÃO PODE?",
    resposta: "NÃO PODE — furar fila é injusto com quem esperou.",
    explicacao:
      "Fila é organização. Furar deixa os outros bravos e é injusto.",
    visual: {
      tipo: "podio",
      pergunta:
        "Furar fila é PODE (verde) ou NÃO PODE (vermelho)?",
      participantes: [
        { nome: "Não pode", imagemUrl: bravoImg, posicao: 1 },
        { nome: "Pode", imagemUrl: felizImg, posicao: 3 },
      ],
      respostaCerta: "Não pode",
    },
  },

  exercicios: [
    {
      enunciado: "🚦 Sinal vermelho: você...",
      resposta: "Espera.",
      dica: "Vermelho = para.",
    },
    {
      enunciado: "🚦 Sinal verde: você...",
      resposta: "Passa com cuidado.",
      dica: "Verde = pode ir.",
    },
    {
      enunciado: "🧍‍♂️ Chegou pra brincar. O que fazer na fila?",
      resposta: "Entra no fim e espera a vez.",
      dica: "Cada um no seu lugar.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: separe PODE e NÃO PODE nas atitudes da floresta.",
    resposta:
      "PODE: ajudar, dividir, esperar. NÃO PODE: bater, gritar, furar fila.",
    visual: {
      cena: [
        { personagem: "Ajudar", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Dividir", itemImagemUrl: estrelaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Bater", itemImagemUrl: bravoImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "Ajudar amigo é...",
          opcoes: ["Pode", "Não pode"],
          correta: 0,
          explicacao: "Pode! É gentileza.",
        },
        {
          pergunta: "Furar a fila é...",
          opcoes: ["Pode", "Não pode"],
          correta: 1,
          explicacao: "Não pode — é injusto.",
        },
        {
          pergunta: "Bater no amigo é...",
          opcoes: ["Pode", "Não pode"],
          correta: 1,
          explicacao: "Não pode — machuca.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Verde = pode. Vermelho = para.",
      "Fila é organização — não fura.",
      "Regras protegem todo mundo.",
      "Pedir 'por favor' e agradecer é regra do coração.",
    ],
    dica: "Antes de fazer, pensa: isso é PODE ou NÃO PODE?",
  },

  quiz: [
    {
      pergunta: "Sinal vermelho quer dizer...",
      opcoes: ["Pare", "Vá", "Corra"],
      correta: 0,
      explicacao: "Vermelho = pare.",
    },
    {
      pergunta: "Furar a fila é...",
      opcoes: ["Pode", "Não pode"],
      correta: 1,
      explicacao: "Não pode.",
    },
    {
      pergunta: "Regras servem pra...",
      opcoes: ["Proteger todos", "Atrapalhar", "Nada"],
      correta: 0,
      explicacao: "Cuidam da gente.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" },
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Todos felizes" },
        ],
      },
    },
    {
      pergunta: "Encostar em fogo é...",
      opcoes: ["Pode", "Não pode"],
      correta: 1,
      explicacao: "NÃO PODE — queima.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: fogoImg, quantidade: 1, rotulo: "Fogo" },
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Perigo" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Conquista: Guardião das Regras! Você aprendeu a separar 'pode' de 'não pode'. Missão em Casa: em casa, cite 1 regra e explique pra que ela serve.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Até no futebol, no jogo da velha, na rodinha da escola — TUDO tem regras. Sem regra, ninguém consegue jogar.",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Pode ou Não Pode?",
      instrucao: "Arraste cada atitude pra caixa certa.",
      pares: [
        { item: "Ajudar", alvo: "Pode", itemImagem: coracaoImg },
        { item: "Dividir", alvo: "Pode", itemImagem: estrelaImg },
        { item: "Bater", alvo: "Não Pode", itemImagem: bravoImg },
        { item: "Furar fila", alvo: "Não Pode", itemImagem: fogoImg },
      ],
      alvosVisuais: [
        { nome: "Pode", cor: "#34D399", capacidade: 2 },
        { nome: "Não Pode", cor: "#EF4444", capacidade: 2 },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Trânsito da Floresta",
      instrucao: "Ligue cada sinal à atitude certa.",
      pares: [
        { a: "Sinal Verde", b: "Passar", aImagem: solImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Sinal Vermelho", b: "Parar", aImagem: chuvaImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Fila da Merenda",
      instrucao: "Arraste os bichos pra ficarem em fila, sem furar.",
      pares: [
        { item: "1º Coelho", alvo: "Fila", itemImagem: coelhoImg },
        { item: "2º Esquilo", alvo: "Fila", itemImagem: esquiloImg },
        { item: "3º Macaco", alvo: "Fila", itemImagem: macacoImg },
      ],
      alvosVisuais: [{ nome: "Fila", cor: "#60A5FA", capacidade: 3, imagemUrl: livroImg }],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Sinal verde quer dizer:",
        opcoes: ["Pode", "Pare"],
        correta: 0,
        explicacao: "Pode passar.",
      },
      {
        pergunta: "Bater é:",
        opcoes: ["Pode", "Não pode"],
        correta: 1,
        explicacao: "Não pode.",
      },
    ],
    medio: [
      {
        pergunta: "Quantas atitudes PODEM aqui?",
        opcoes: ["1", "2", "3"],
        correta: 2,
        explicacao: "3: ajudar, dividir, esperar.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Ajudar" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Dividir" },
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Esperar" },
          ],
        },
      },
      {
        pergunta: "Regra é castigo?",
        opcoes: ["Sim", "Não, é combinado"],
        correta: 1,
        explicacao: "Regra é combinado pra proteger.",
      },
    ],
    dificil: [
      {
        pergunta:
          "3 amigos na fila. Chegou o 4º. Onde ele entra?",
        opcoes: ["No começo", "No meio", "No final"],
        correta: 2,
        explicacao: "Sempre no final — é justo.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "1º" },
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "2º" },
            { imagemUrl: macacoImg, quantidade: 1, rotulo: "3º" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "4º (novo)" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO09",
    titulo: "Participar de brincadeiras coletivas",
  },
};

void livroImg;

export default aula;
