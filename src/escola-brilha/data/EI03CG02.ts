import type { Aula } from "../types";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as tristeImg } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as bravoImg } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as confusoImg } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maoImg } from "@/assets/neuro-treino/sentidos/mao.png.asset.json";
import { url as palmasImg } from "@/assets/neuro-treino/sentidos/palmas.png.asset.json";
import { url as bocaImg } from "@/assets/neuro-treino/sentidos/boca-sorriso.png.asset.json";
import { url as silencioImg } from "@/assets/neuro-treino/sentidos/dedo-silencio.png.asset.json";
import { url as joiaImg } from "@/assets/neuro-treino/sentidos/mao-joia.png.asset.json";
import { url as abracoImg } from "@/assets/neuro-treino/sentidos/bracos-abraco.png.asset.json";

/**
 * EI03CG02 — Aula 2: Gestos falam
 * Padrão TRAVADO: só partes do corpo (mão, boca, braços) — sem mascotes,
 * sem pódio. Cada gesto é uma imagem própria do corpo.
 */
const aula: Aula = {
  codigo: "EI03CG02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Gestos Falam",

  narrativa: {
    titulo: "O corpo que conversa",
    contexto: "Sem falar nada, uma mão acenou, uma boca sorriu e um dedo apontou pro céu. Todo mundo entendeu na hora.",
    problema: "A segunda estrela só acende quando a criança descobre que o corpo FALA sem usar a boca.",
    convite: "Vamos aprender a conversar só com gestos?",
  },

  conhecimentosPrevios: ["Sabe acenar tchau.", "Reconhece um sorriso.", "Sabe apontar."],

  missao: "Descobrir que o corpo comunica sentimentos e ideias sem precisar de palavras.",

  objetivos: ["Identificar gestos comuns e o que cada um significa.", "Usar o corpo pra expressar emoções."],

  motivacao: "Antes de falar, todo bebê já se comunica — com o corpinho todo!",

  explicacao: "Meu CORPO FALA sem abrir a boca:\n\n• Uma BOCA sorrindo diz 'estou feliz'.\n• Uma MÃO acenando diz 'oi' ou 'tchau'.\n• Um DEDO na boca diz 'silêncio'.\n• Um POLEGAR pra cima diz 'muito bem!'.\n• DOIS BRAÇOS abertos dizem 'me abraça'.\n\nIsso se chama GESTO — o corpo virando palavra.",

  explicacaoAtiva: [
    { texto: "Uma boca sorrindo. O que ela quer dizer?", imagem: bocaImg, imagemAlt: "Boca sorrindo" },
    { texto: "Um dedo na boca. Isso pede…", imagem: silencioImg, imagemAlt: "Dedo na boca pedindo silêncio" },
    { texto: "Dois braços abertos!", imagem: abracoImg, imagemAlt: "Braços em abraço", checagem: { pergunta: "Braços abertos assim são convite pra quê?", opcoes: ["Um abraço", "Uma corrida"], correta: 0, explicacao: "Isso! Braços abertos chamam pro abraço." } }
  ],

  explicacoesNiveis: {
    nivel1: "O corpo fala sem palavras.",
    nivel2: "Quando você faz cara feia, todo mundo entende que está bravo — sem você dizer nada.",
    nivel3: "Gestos são como desenhos que a gente faz no ar.",
    nivel4: "Em qualquer lugar do mundo, um sorriso quer dizer a mesma coisa.",
  },

  exemploResolvido: {
    enunciado: "Uma mão sobe pra acenar tchau. Quantas mãos são usadas?",
    passos: ["Toque na mão que se mexe.", "Só uma mão sobe e balança.", "1 mão pra dar tchau!"],
    resposta: "Usa 1 mão pra acenar tchau.",
    interativo: { tipo: "contagem", imagemUrl: maoImg, quantidade: 1, nomeItem: "mão", nomeItemPlural: "mãos", pergunta: "Quantas mãos acenam tchau?" },
  },

  atividadeGuiada: {
    enunciado: "Qual gesto pede SILÊNCIO? Toque na imagem certa.",
    resposta: "O dedo na boca pede silêncio.",
    explicacao: "Dedo na frente da boca = shhhh, ninguém fala.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual gesto pede silêncio?",
      opcoes: [
        { nome: "Dedo na boca", imagemUrl: silencioImg },
        { nome: "Joia", imagemUrl: joiaImg },
        { nome: "Abraço", imagemUrl: abracoImg },
      ],
      respostaCerta: "Dedo na boca",
    },
  },

  exercicios: [
    { enunciado: "😊 Quando alguém sorri pra você, o que isso quer dizer?", resposta: "Que a pessoa está feliz ou é sua amiga.", dica: "Como você se sente quando sorriem pra você?" },
    { enunciado: "👍 Quando alguém faz o joia (polegar pra cima), significa…", resposta: "Que aprovou, achou bom.", dica: "Faz o joia agora." },
    { enunciado: "🤗 Braços abertos são convite pra quê?", resposta: "Pra um abraço.", dica: "É gesto de carinho." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: três gestos do corpo, três significados diferentes. Descubra cada um.",
    resposta: "Cada gesto do corpo conta uma coisa.",
    visual: {
      cena: [
        { personagem: "Boca sorrindo", itemImagemUrl: bocaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Mão acenando", itemImagemUrl: maoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Braços em abraço", itemImagemUrl: abracoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Uma boca sorrindo mostra que a pessoa está…", opcoes: ["Feliz", "Brava"], correta: 0, explicacao: "Sorriso é gesto de FELICIDADE." },
        { pergunta: "Uma mão que sobe e balança quer dizer…", opcoes: ["Oi/Tchau", "Silêncio"], correta: 0, explicacao: "Mão acenando cumprimenta." },
        { pergunta: "Braços abertos são convite pra…", opcoes: ["Abraço", "Correr"], correta: 0, explicacao: "Braços abertos = abraço." },
      ],
    },
  },

  revisao: {
    pontos: ["O corpo fala sem palavras.", "Gesto é o corpo se comunicando.", "Sorriso, aceno e abraço são universais.", "Todo gesto conta uma pequena história."],
    dica: "Hoje: faça um gesto de carinho pra alguém sem falar nada.",
  },

  quiz: [
    { pergunta: "Uma boca SORRINDO quer dizer o quê?", opcoes: ["Estou feliz", "Estou com medo"], correta: 0, explicacao: "Sorriso é gesto de alegria.", visual: { tipo: "itens", imagemUrl: bocaImg, quantidade: 1, rotulo: "Boca sorrindo" } },
    { pergunta: "Como a gente diz 'oi' sem falar?", opcoes: ["Acenando a mão", "Fechando os olhos"], correta: 0, explicacao: "Mão acenando é o oi silencioso.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 1, rotulo: "Mão" } },
    { pergunta: "Qual gesto pede SILÊNCIO?", opcoes: ["Dedo na boca", "Polegar pra cima"], correta: 0, explicacao: "Dedo na boca = shhhh.", visual: { tipo: "grupos", grupos: [{ imagemUrl: silencioImg, quantidade: 1, rotulo: "Silêncio", cor: "#A78BFA" }, { imagemUrl: joiaImg, quantidade: 1, rotulo: "Joia", cor: "#F472B6" }] } }
  ],

  conclusao: "🏅 Medalha: Mestre do Gesto! A SEGUNDA ESTRELA ⭐ do Mundo 2 acendeu. Em Casa: fale com sua família só com gestos por 1 minuto.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Antes de aprender a falar, todo bebê já sabe acenar, apontar e sorrir. O corpo aprende a falar ANTES da boca!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Palmas de aprovação", instrucao: "Conte quantas palmas você vê.", grupos: [{ imagemUrl: palmasImg, quantidade: 3, rotulo: "Palmas" }], pergunta: "Quantas palmas aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 palmas.", erro: "Conte uma por uma." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Gestos diferentes", instrucao: "Toque em cada gesto.", grupos: [{ imagemUrl: maoImg, quantidade: 1, rotulo: "Aceno" }, { imagemUrl: joiaImg, quantidade: 1, rotulo: "Joia" }, { imagemUrl: abracoImg, quantidade: 1, rotulo: "Abraço" }], pergunta: "Quantos gestos diferentes tem?", opcoes: ["2", "3"], correta: 1, acerto: "Muito bem! 3 gestos.", erro: "Conte cada imagem." },
    { tipo: "ligar", titulo: "Fase 3 · Gesto e sentimento", instrucao: "Ligue o gesto ao sentimento certo.", pares: [
      { a: "Sorriso", b: "feliz", aImagem: bocaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      { a: "Cara emburrada", b: "bravo", aImagem: bravoImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 },
      { a: "Abraço", b: "amor", aImagem: abracoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Coração pra cada gesto de carinho", instrucao: "Toque no coração e depois no gesto.", itemImagem: coracaoImg, alvosVisuais: [
      { nome: "Sorriso", cor: "#FBBF24", capacidade: 1, imagemUrl: bocaImg },
      { nome: "Abraço", cor: "#F472B6", capacidade: 1, imagemUrl: abracoImg },
      { nome: "Joia", cor: "#60A5FA", capacidade: 1, imagemUrl: joiaImg },
    ], pares: [{ item: "Coração 1", alvo: "Sorriso" }, { item: "Coração 2", alvo: "Abraço" }, { item: "Coração 3", alvo: "Joia" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Sorriso é gesto do quê?", opcoes: ["Alegria", "Sono"], correta: 0, explicacao: "Sorriso é alegria.", visual: { tipo: "itens", imagemUrl: bocaImg, quantidade: 1, rotulo: "Sorriso" } },
      { pergunta: "Aceno da mão é pra dizer…", opcoes: ["Oi/tchau", "Silêncio"], correta: 0, explicacao: "Mão acenando cumprimenta.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 1, rotulo: "Mão" } },
    ],
    medio: [
      { pergunta: "Cara emburrada mostra qual sentimento?", opcoes: ["Raiva", "Alegria"], correta: 0, explicacao: "Cara feia é raiva ou tristeza.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" } },
      { pergunta: "Se quero pedir silêncio, o gesto é…", opcoes: ["Dedo na boca", "Palma"], correta: 0, explicacao: "Dedo na boca pede silêncio.", visual: { tipo: "itens", imagemUrl: silencioImg, quantidade: 1, rotulo: "Silêncio" } },
    ],
    dificil: [
      { pergunta: "O gesto fala a mesma coisa em qualquer lugar do mundo?", opcoes: ["Sim, muitos gestos sim", "Não, nenhum"], correta: 0, explicacao: "Sorriso e abraço são entendidos por todos.", visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "Abraço universal" } },
      { pergunta: "Um bebê que não fala ainda, consegue se comunicar?", opcoes: ["Sim, com gestos", "Não consegue"], correta: 0, explicacao: "Bebês apontam, sorriem, choram — tudo é gesto.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Bebê feliz" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03CG03", titulo: "Dançando com os amigos" },
};

void estrelaImg; void tristeImg; void confusoImg; void solImg;

export default aula;
