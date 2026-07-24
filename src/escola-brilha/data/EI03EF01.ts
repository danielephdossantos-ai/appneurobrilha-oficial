import type { Aula } from "../types";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as tristeImg } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as bravoImg } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as tranquiloImg } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";

/**
 * EI03EF01 — Escuta, Fala, Pensamento e Imaginação · Pré II
 * BNCC: expressar ideias, desejos e sentimentos por meio da linguagem oral,
 * escrita espontânea, desenhos, fotos e outras formas de expressão.
 *
 * Pedagogia (Pré II, 5–6 anos):
 *  - Ampliar o vocabulário emocional (feliz, triste, bravo, tranquilo).
 *  - Ensinar a criança a NOMEAR o que sente antes de reagir (autorregulação
 *    verbal — Vygotsky, ZDP: a linguagem organiza o pensamento).
 *  - Usar frases prontas de pedido ("eu quero…", "eu não quero…", "posso…?")
 *    — base da comunicação funcional (PECS Fase III / Denver).
 */
const aula: Aula = {
  codigo: "EI03EF01",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Falar o que Eu Sinto",

  narrativa: {
    titulo: "O Brilha ficou com um nó na garganta",
    contexto: "O Brilha queria contar pra mãe que estava triste, mas as palavras não saíam. Ele só apontava e chorava.",
    problema: "Sem palavras, ninguém entendia o Brilha. Ele precisava aprender a DIZER o que sentia e o que queria.",
    convite: "Bora ajudar o Brilha a achar as palavras certas?",
  },

  conhecimentosPrevios: ["Já sabe dizer 'quero'.", "Reconhece o rosto de mamãe/papai.", "Percebe quando está feliz ou triste."],

  missao: "Aprender que a gente PODE FALAR o que sente e o que quer — e ser entendido pelos outros.",

  objetivos: [
    "Nomear pelo menos 4 sentimentos: FELIZ, TRISTE, BRAVO, CALMO.",
    "Usar frases-modelo: 'Eu quero…', 'Eu não quero…', 'Estou…'.",
    "Perceber que falar o que sente ajuda a resolver problemas sem birra.",
  ],

  explicacao:
    "Todo mundo SENTE muita coisa por dentro.\n\n• Quando o coração fica leve e a gente ri — está FELIZ.\n• Quando o coração aperta e os olhos molham — está TRISTE.\n• Quando a barriga esquenta e a gente quer gritar — está BRAVO.\n• Quando a gente respira devagar e sorri de leve — está CALMO.\n\nA gente pode DIZER isso: 'Estou triste', 'Eu quero abraço', 'Não quero agora'.\n\nQuem fala o que sente, ajuda o outro a entender.",

  explicacaoAtiva: [
    { texto: "Rosto FELIZ: bochecha subida, sorrisão. Fala: 'Estou feliz!'", imagem: felizImg, imagemAlt: "Rosto feliz" },
    { texto: "Rosto TRISTE: boca pra baixo, olhinhos molhados. Fala: 'Estou triste.'", imagem: tristeImg, imagemAlt: "Rosto triste" },
    {
      texto: "Rosto BRAVO: sobrancelha franzida. Fala: 'Estou bravo.'",
      imagem: bravoImg,
      imagemAlt: "Rosto bravo",
      checagem: {
        pergunta: "Como o rosto fica quando a gente está FELIZ?",
        opcoes: ["Sorrindo", "Chorando"],
        correta: 0,
        explicacao: "Feliz é sorriso grande!",
      },
    },
    { texto: "Rosto CALMO: respira fundo. Fala: 'Estou tranquilo.'", imagem: tranquiloImg, imagemAlt: "Rosto tranquilo" },
  ],

  explicacoesNiveis: {
    nivel1: "A gente PODE falar o que sente.",
    nivel2: "Feliz é sorriso, triste é choro, bravo é grito, calmo é respiração.",
    nivel3: "Antes de bater ou chorar, tenta FALAR: 'Estou bravo, quero ficar sozinho um pouquinho.'",
    nivel4: "Adulto também sente — e também precisa dizer. É assim que família se entende.",
  },

  exemploResolvido: {
    enunciado: "A menina quer a maçã. Como ela pede sem birra?",
    passos: [
      "Ela olha pra mãe.",
      "Fala com voz calma: 'Mãe, EU QUERO a maçã, por favor.'",
      "A mãe entende e dá a maçã.",
    ],
    resposta: "Pediu com palavras: ganhou a maçã e ainda ficou feliz.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 1, nomeItem: "maçã", nomeItemPlural: "maçãs", pergunta: "Quantas maçãs ela quer?" },
  },

  atividadeGuiada: {
    enunciado: "Qual rosto mostra que a criança está TRISTE?",
    resposta: "O rosto com a boca pra baixo.",
    explicacao: "Triste é quando o coração aperta e a boca vai pra baixo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Toque no rosto TRISTE.",
      opcoes: [
        { nome: "Triste", imagemUrl: tristeImg },
        { nome: "Feliz", imagemUrl: felizImg },
        { nome: "Bravo", imagemUrl: bravoImg },
      ],
      respostaCerta: "Triste",
    },
  },

  exercicios: [
    { enunciado: "Como você pede o brinquedo do amigo sem tomar?", resposta: "Falando: 'Posso brincar também?'", dica: "Usa a boca antes da mão." },
    { enunciado: "Está bravo. O que dá pra fazer sem gritar?", resposta: "Respirar fundo e dizer 'estou bravo'.", dica: "Respira devagar." },
    { enunciado: "Ganhou abraço da mamãe. Como você fica?", resposta: "Feliz!", dica: "Sorri grande." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o sentimento de cada carinha.",
    resposta: "Feliz, triste e bravo.",
    visual: {
      cena: [
        { personagem: "Feliz", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Triste", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Bravo", itemImagemUrl: bravoImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quem está com sorriso grande?", opcoes: ["Feliz", "Triste"], correta: 0, explicacao: "Sorriso grande = feliz." },
        { pergunta: "Quem tem boca pra baixo?", opcoes: ["Bravo", "Triste"], correta: 1, explicacao: "Triste tem boca pra baixo." },
        { pergunta: "Quem franze a sobrancelha?", opcoes: ["Bravo", "Feliz"], correta: 0, explicacao: "Bravo franze a sobrancelha." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Sentir é normal — todo mundo sente.",
      "A gente PODE dizer o que sente com palavras.",
      "'Eu quero' e 'Eu não quero' evitam birra.",
      "Falar ajuda os outros a entender.",
    ],
    dica: "Em casa: no fim do dia, cada um diz UM sentimento do dia. Todo mundo escuta.",
  },

  quiz: [
    { pergunta: "Qual é a carinha FELIZ?", opcoes: ["Sorrindo", "Chorando"], correta: 0, explicacao: "Feliz é sorriso.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } },
    { pergunta: "'Estou triste' — o que fazer?", opcoes: ["Contar pra alguém", "Ficar quieto sozinho"], correta: 0, explicacao: "Falar ajuda a passar a tristeza.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" } },
    { pergunta: "Quer a bola do amigo. Você:", opcoes: ["Toma da mão dele", "Pede: 'posso brincar?'"], correta: 1, explicacao: "Pedir com palavras é o certo.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" } },
  ],

  conclusao: "🏅 Você aprendeu a colocar em PALAVRAS o que sente e o que quer! Missão em Casa: hoje diga pra mamãe 'eu te amo' e escute o que ela responde.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Crianças que aprendem a nomear os sentimentos brigam menos e dormem melhor — o cérebro fica em paz.",
    imagemUrl: maeImg,
  },

  interativas: [
    {
      tipo: "ligar",
      titulo: "Fase 1 · Cada rosto, um sentimento",
      instrucao: "Ligue o rosto ao nome certo.",
      pares: [
        { a: "Feliz", b: "Sorrindo", aImagem: felizImg, aQuantidade: 1 },
        { a: "Triste", b: "Boca pra baixo", aImagem: tristeImg, aQuantidade: 1 },
        { a: "Bravo", b: "Cenho franzido", aImagem: bravoImg, aQuantidade: 1 },
        { a: "Calmo", b: "Respirando fundo", aImagem: tranquiloImg, aQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Frase mágica",
      instrucao: "Escute a cena e escolha.",
      grupos: [{ imagemUrl: meninaImg, quantidade: 1, rotulo: "Menina quer o brinquedo" }],
      pergunta: "O que a menina fala pra ganhar sem birra?",
      opcoes: ["Grita: DÁ!", "Fala: 'Posso brincar, por favor?'"],
      correta: 1,
      acerto: "Isso! Palavras mágicas resolvem.",
      erro: "Gritar não ajuda. Melhor pedir com palavras.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Feliz é…", opcoes: ["Sorrir", "Chorar"], correta: 0, explicacao: "Sorriso é feliz.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } },
    ],
    medio: [
      { pergunta: "Estou bravo. Melhor:", opcoes: ["Respirar e falar", "Bater"], correta: 0, explicacao: "Palavras acalmam.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" } },
    ],
    dificil: [
      { pergunta: "Amigo tomou seu brinquedo. Como falar?", opcoes: ["'Isso é meu, me devolve, por favor'", "Chorar sem falar"], correta: 0, explicacao: "Falar com respeito resolve.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF02", titulo: "Palavras que Rimam" },
};

export default aula;
