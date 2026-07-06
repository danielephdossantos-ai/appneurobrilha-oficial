import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import confusoImg from "@/assets/brilha-vida/emocoes/confuso.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO08 — Reconhecer sentimentos próprios e dos outros (empatia).
 * ⭐ Estrela: Empatia.
 */
const aula: Aula = {
  codigo: "EI03EO08",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Nome dos Sentimentos",

  narrativa: {
    titulo: "Nome dos Sentimentos",
    contexto:
      "A Coruja Sábia abriu uma caixinha mágica com 5 carinhas de sentimento. 'Cada carinha tem um nome. Conhecer os nomes dá SUPERPODER!'",
    problema: "Como saber o que o amigo sente só de olhar?",
    convite: "Bora aprender a ler as carinhas dos amigos?",
  },

  conhecimentosPrevios: ["Reconhecer feliz e triste.", "Notar quando alguém está bravo.", "Perceber calma."],

  missao: "Aprender a NOMEAR sentimentos — meus e dos amigos.",

  objetivos: [
    "Reconhecer 5 sentimentos: feliz, triste, bravo, calmo, confuso.",
    "Ler o sentimento do amigo pela carinha.",
  ],

  motivacao: "Quando você entende o sentimento do amigo, vira SUPER-AMIGO!",

  explicacao:
    "AS 5 CARINHAS:\n\n😊 FELIZ — sorriso grande.\n😢 TRISTE — boca pra baixo.\n😠 BRAVO — sobrancelhas fechadas.\n😌 CALMO — carinha tranquila.\n😕 CONFUSO — não sabe direito.\n\nCada sentimento é REAL e vale a pena.",

  explicacaoAtiva: [
    { texto: "Toque na carinha FELIZ.", imagem: felizImg, imagemAlt: "Feliz" },
    { texto: "Toque na carinha TRISTE. Boca pra baixo.", imagem: tristeImg, imagemAlt: "Triste" },
    { texto: "Toque na carinha BRAVA. Sobrancelhas fechadas.", imagem: bravoImg, imagemAlt: "Bravo" },
    {
      texto: "Toque na carinha CONFUSA. 'Hmm, sei lá…'",
      imagem: confusoImg,
      imagemAlt: "Confuso",
      checagem: {
        pergunta: "Todo sentimento vale a pena?",
        opcoes: ["Sim, todo sentimento é real", "Não, só o feliz vale"],
        correta: 0,
        explicacao: "Isso! Todo sentimento é bem-vindo.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Existem vários sentimentos, não só feliz e triste.",
    nivel2: "Feliz, triste, bravo, calmo, confuso — cada um tem carinha.",
    nivel3: "Reconhecer o sentimento do amigo é ser SUPER-AMIGO.",
    nivel4: "Nenhum sentimento é ruim — todos servem pra alguma coisa.",
  },

  exemploResolvido: {
    enunciado: "5 carinhas diferentes na caixinha da Coruja. Quantas?",
    passos: ["Feliz.", "Triste.", "Bravo.", "Calmo.", "Confuso."],
    resposta: "5 sentimentos com nome!",
    interativo: {
      tipo: "contagem",
      imagemUrl: felizImg,
      quantidade: 5,
      nomeItem: "carinha",
      nomeItemPlural: "carinhas",
      pergunta: "Quantas carinhas de sentimento?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos, 3 sentimentos diferentes. Quantos?",
    resposta: "3 amigos, 3 sentimentos.",
    explicacao: "Cada amigo pode estar sentindo algo diferente ao mesmo tempo.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada carinha. Qual está no meio (2ª)?",
      participantes: [
        { nome: "Feliz", imagemUrl: felizImg, posicao: 1 },
        { nome: "Bravo", imagemUrl: bravoImg, posicao: 2 },
        { nome: "Calmo", imagemUrl: tranquiloImg, posicao: 3 },
      ],
      respostaCerta: "Bravo",
    },
  },

  exercicios: [
    { enunciado: "⭐ Amigo com boca pra baixo. Está:", resposta: "Triste.", dica: "Boca pra baixo = tristeza." },
    { enunciado: "🐰 Amigo com sobrancelha fechada. Está:", resposta: "Bravo.", dica: "Sobrancelha fechada = raiva." },
    { enunciado: "🦉 Amigo dizendo 'sei lá...'. Está:", resposta: "Confuso.", dica: "Confuso = não sabe ainda." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: leia a carinha de cada amigo.",
    resposta: "Feliz, triste, bravo.",
    visual: {
      cena: [
        { personagem: "Brilha feliz", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi triste", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi brava", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" },
      ],
      perguntas: [
        { pergunta: "Brilha ganhou estrela. Está:", opcoes: ["Feliz", "Bravo"], correta: 0, explicacao: "Estrela = alegria!" },
        { pergunta: "Lupi perdeu cenoura. Está:", opcoes: ["Triste", "Feliz"], correta: 0, explicacao: "Perder algo = tristeza." },
        { pergunta: "Fifi levou empurrão. Está:", opcoes: ["Brava", "Calma"], correta: 0, explicacao: "Empurrão dá raiva mesmo!" },
      ],
    },
  },

  revisao: {
    pontos: [
      "5 sentimentos: feliz, triste, bravo, calmo, confuso.",
      "Todo sentimento é real e válido.",
      "Ler a carinha do amigo é ser super-amigo.",
      "Sentimento não é bonzinho nem malzinho — só é.",
    ],
    dica: "Hoje observe 1 amigo/família e adivinhe pela carinha o sentimento dele.",
  },

  quiz: [
    {
      pergunta: "Boca pra baixo = qual sentimento?",
      opcoes: ["Feliz", "Triste", "Bravo"],
      correta: 1,
      explicacao: "Triste!",
      visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
    },
    {
      pergunta: "Sobrancelha fechada = qual?",
      opcoes: ["Bravo", "Feliz"],
      correta: 0,
      explicacao: "Bravo!",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo", cor: "#EF4444" },
        ],
      },
    },
    {
      pergunta: "Quantas carinhas na caixa da Coruja?",
      opcoes: ["3", "4", "5"],
      correta: 2,
      explicacao: "5 sentimentos com nome!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste", cor: "#60A5FA" },
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo", cor: "#EF4444" },
          { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calmo", cor: "#34D399" },
          { imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso", cor: "#A78BFA" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Leitor de Carinhas! 8ª ESTRELA ⭐ (Empatia) acesa. Missão em Casa: aponte pra 1 pessoa da família e adivinhe como ela tá se sentindo — depois pergunte se acertou.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Bebês recém-nascidos já sabem imitar carinhas! Sentimento é a primeira 'língua' que a gente aprende.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · A caixinha de sentimentos",
      instrucao: "Toque em cada carinha da caixinha da Coruja.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calmo" },
        { imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" },
      ],
      pergunta: "Quantos sentimentos com nome?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 sentimentos — que superpoder!",
      erro: "Conte cada carinha.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Só as tristes",
      instrucao: "Encontre a carinha triste.",
      grupos: [{ imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" }],
      pergunta: "Quantas tristes?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "1 triste — reconheci!",
      erro: "Aponte pra boca pra baixo.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Amigo e carinha",
      instrucao: "Ligue cada amigo à carinha dele.",
      pares: [
        { a: "Brilha ganhou presente", b: "feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Lupi perdeu brinquedo", b: "triste", aImagem: lupiImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 },
        { a: "Téo meditando", b: "calmo", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Todo sentimento vale",
      instrucao: "Toque em cada carinha diferente.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" },
      ],
      pergunta: "Quantas carinhas diferentes?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3! Todas valem — nenhuma é errada.",
      erro: "Conte cada uma.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Balão da carinha",
      instrucao: "Cada carinha ganha 1 balão da cor dela. Toque no balão e depois na carinha.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Feliz", cor: "#FBBF24", capacidade: 1, imagemUrl: felizImg },
        { nome: "Triste", cor: "#60A5FA", capacidade: 1, imagemUrl: tristeImg },
        { nome: "Bravo", cor: "#EF4444", capacidade: 1, imagemUrl: bravoImg },
        { nome: "Calmo", cor: "#34D399", capacidade: 1, imagemUrl: tranquiloImg },
        { nome: "Confuso", cor: "#A78BFA", capacidade: 1, imagemUrl: confusoImg },
      ],
      pares: [
        { item: "Balão feliz", alvo: "Feliz" },
        { item: "Balão triste", alvo: "Triste" },
        { item: "Balão bravo", alvo: "Bravo" },
        { item: "Balão calmo", alvo: "Calmo" },
        { item: "Balão confuso", alvo: "Confuso" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Sentimento e o que ajuda",
      instrucao: "Cada sentimento tem uma ação que ajuda.",
      pares: [
        { a: "Triste", b: "abraço", aImagem: tristeImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Bravo", b: "respirar fundo", aImagem: bravoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Confuso", b: "perguntar pra alguém", aImagem: confusoImg, aQuantidade: 1, bImagem: corujaImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Sorrisão grande é:",
        opcoes: ["Feliz", "Triste"],
        correta: 0,
        explicacao: "Sorriso = felicidade.",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
      },
      {
        pergunta: "Carinha 'sei lá' é:",
        opcoes: ["Confuso", "Feliz"],
        correta: 0,
        explicacao: "Confuso — quando não sei.",
        visual: { tipo: "itens", imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" },
      },
    ],
    medio: [
      {
        pergunta: "Amigo bravo. Ajudo com:",
        opcoes: ["Respirar junto", "Gritar de volta"],
        correta: 0,
        explicacao: "Respirar acalma.",
        visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
      },
      {
        pergunta: "Amigo triste. Ofereço:",
        opcoes: ["Abraço", "Nada"],
        correta: 0,
        explicacao: "Abraço aquece.",
        visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
      },
    ],
    dificil: [
      {
        pergunta: "Sentimento ruim existe?",
        opcoes: ["Não — só existem sentimentos", "Sim, tem sentimento proibido"],
        correta: 0,
        explicacao: "Todo sentimento é válido — o que importa é o que faço com ele.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo vale", cor: "#EF4444" },
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz vale", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "Amigo confuso. Ajudo:",
        opcoes: ["Pergunto pra entender junto", "Rio dele"],
        correta: 0,
        explicacao: "Entender junto é ser super-amigo.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Perguntar" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO09", titulo: "Juntos a Gente Consegue" },
};

void piuImg;

export default aula;
