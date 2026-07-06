import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import confusoImg from "@/assets/brilha-vida/emocoes/confuso.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EI03CG02 — Aula 2: Gestos falam
 * Estrela: ⭐ Linguagem do Corpo · Medalha: 🏅 Mestre do Gesto
 */
const aula: Aula = {
  codigo: "EI03CG02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Gestos Falam",

  narrativa: {
    titulo: "O corpo que conversa",
    contexto: "O Téo entrou em silêncio na sala. Não disse uma palavra — só acenou, sorriu e apontou pro céu. Todo mundo entendeu.",
    problema: "A segunda estrela só acende quando a criança descobre que o corpo FALA sem usar a boca.",
    convite: "Vamos aprender a conversar com gestos?",
  },

  conhecimentosPrevios: ["Sabe acenar tchau.", "Reconhece um sorriso.", "Sabe apontar."],

  missao: "Descobrir que o corpo comunica sentimentos e ideias sem precisar de palavras.",

  objetivos: ["Identificar gestos comuns e o que cada um significa.", "Usar o corpo pra expressar emoções."],

  motivacao: "Antes de falar, os bebês já se comunicam — com o corpinho todo!",

  explicacao: "Meu CORPO FALA sem abrir a boca:\n\n• Um SORRISO diz 'estou feliz'.\n• Um ACENO diz 'oi' ou 'tchau'.\n• Um DEDO na boca diz 'silêncio'.\n• Um POLEGAR pra cima diz 'muito bem!'.\n• Um ABRAÇO diz 'eu te amo'.\n\nIsso se chama GESTO — o corpo virando palavra.",

  explicacaoAtiva: [
    { texto: "O Téo está sorrindo. O que ele quer dizer?", imagem: felizImg, imagemAlt: "Rosto feliz" },
    { texto: "A Fifi está com o dedo na boca. Isso pede…", imagem: fifiImg, imagemAlt: "Fifi pedindo silêncio" },
    { texto: "O Lupi está com os braços abertos!", imagem: lupiImg, imagemAlt: "Lupi de braços abertos", checagem: { pergunta: "Braços abertos assim são convite pra quê?", opcoes: ["Um abraço", "Uma corrida"], correta: 0, explicacao: "Isso! Braços abertos chamam pro abraço." } }
  ],

  explicacoesNiveis: {
    nivel1: "O corpo fala sem palavras.",
    nivel2: "Quando você faz cara feia, todo mundo entende que está bravo — sem você dizer nada.",
    nivel3: "Gestos são como desenhos que a gente faz no ar.",
    nivel4: "Em qualquer lugar do mundo, um sorriso quer dizer a mesma coisa.",
  },

  exemploResolvido: {
    enunciado: "A Fifi acena tchau. Quantas mãos ela usa?",
    passos: ["Toque na mão que se mexe.", "Só uma mão sobe e balança.", "1 mão pra dar tchau!"],
    resposta: "A Fifi usa 1 mão pra acenar tchau.",
    interativo: { tipo: "contagem", imagemUrl: fifiImg, quantidade: 1, nomeItem: "mão", nomeItemPlural: "mãos", pergunta: "Quantas mãos acenam tchau?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos fizeram gestos diferentes. Quem está no MEIO?",
    resposta: "O Téo está no meio — ele mandou um beijo pra turma.",
    explicacao: "Na foto dos gestos, quem está no 2º lugar é o Téo.",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da foto dos gestos?",
      participantes: [{ nome: "Fifi", imagemUrl: fifiImg, posicao: 1 }, { nome: "Téo", imagemUrl: teoImg, posicao: 2 }, { nome: "Lupi", imagemUrl: lupiImg, posicao: 3 }],
      respostaCerta: "Téo",
    },
  },

  exercicios: [
    { enunciado: "😊 Quando alguém sorri pra você, o que isso quer dizer?", resposta: "Que a pessoa está feliz ou é sua amiga.", dica: "Como você se sente quando sorriem pra você?" },
    { enunciado: "👍 Quando alguém faz o joia (polegar pra cima), significa…", resposta: "Que aprovou, achou bom.", dica: "Faz o joia agora." },
    { enunciado: "🤗 Braços abertos são convite pra quê?", resposta: "Pra um abraço.", dica: "É gesto de carinho." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos com gestos e emoções. Descubra o que cada um sente.",
    resposta: "Cada gesto revela um sentimento.",
    visual: {
      cena: [{ personagem: "Fifi sorrindo", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Téo com cara triste", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" }, { personagem: "Lupi confuso", itemImagemUrl: confusoImg, quantidade: 1, cor: "#A78BFA" }],
      perguntas: [{ pergunta: "A Fifi está sorrindo. Como ela se sente?", opcoes: ["Feliz", "Bravo"], correta: 0, explicacao: "Sorriso é gesto de FELICIDADE." }, { pergunta: "O Téo está com cara triste. Que gesto pode ajudar?", opcoes: ["Um abraço", "Empurrar"], correta: 0, explicacao: "Abraço acolhe quem está triste." }, { pergunta: "O Lupi está confuso. Que gesto ele faz?", opcoes: ["Coça a cabeça", "Bate palma"], correta: 0, explicacao: "Coçar a cabeça é gesto de dúvida." }],
    },
  },

  revisao: {
    pontos: ["O corpo fala sem palavras.", "Gesto é o corpo se comunicando.", "Sorriso, aceno e abraço são universais.", "Todo gesto conta uma pequena história."],
    dica: "Hoje: faça um gesto de carinho pra alguém sem falar nada.",
  },

  quiz: [
    { pergunta: "Um SORRISO quer dizer o quê?", opcoes: ["Estou feliz", "Estou com medo"], correta: 0, explicacao: "Sorriso é gesto de alegria.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Rosto feliz" } },
    { pergunta: "Como a gente diz 'oi' sem falar?", opcoes: ["Acenando", "Fechando os olhos"], correta: 0, explicacao: "Acenar é o oi silencioso.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi acena" } },
    { pergunta: "Qual gesto pede SILÊNCIO?", opcoes: ["Dedo na boca", "Pé no chão"], correta: 0, explicacao: "Dedo na boca = shhhh.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Silêncio", cor: "#A78BFA" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Não é", cor: "#F472B6" }] } }
  ],

  conclusao: "🏅 Medalha: Mestre do Gesto! A SEGUNDA ESTRELA ⭐ do Mundo 2 acendeu. Em Casa: fale com sua família só com gestos por 1 minuto.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Antes de aprender a falar, todo bebê já sabe acenar, apontar e sorrir. O corpo aprende a falar ANTES da boca!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Sorrisos na turma", instrucao: "Conte quantos sorrisos você vê.", grupos: [{ imagemUrl: felizImg, quantidade: 3, rotulo: "Sorrisos" }], pergunta: "Quantos sorrisos aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 sorrisos.", erro: "Conte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Gestos diferentes", instrucao: "Cada amigo faz um gesto.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Aceno" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Beijo" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Joia" }], pergunta: "Quantos gestos diferentes tem?", opcoes: ["2", "3"], correta: 1, acerto: "Muito bem! 3 gestos.", erro: "Conte cada amigo." },
    { tipo: "ligar", titulo: "Fase 3 · Gesto e sentimento", instrucao: "Ligue o gesto ao sentimento certo.", pares: [{ a: "Sorriso", b: "feliz", aImagem: felizImg, aQuantidade: 1, bImagem: solImg, bQuantidade: 1 }, { a: "Cara emburrada", b: "bravo", aImagem: bravoImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 }, { a: "Abraço", b: "amor", aImagem: coracaoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Coração pra quem sorri", instrucao: "Dê 1 coração pra cada amigo sorrindo.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }], pares: [{ item: "Coração 1", alvo: "Fifi" }, { item: "Coração 2", alvo: "Téo" }, { item: "Coração 3", alvo: "Lupi" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Sorriso é gesto do quê?", opcoes: ["Alegria", "Sono"], correta: 0, explicacao: "Sorriso é alegria.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } }, { pergunta: "Aceno é pra dizer…", opcoes: ["Oi/tchau", "Vem cá"], correta: 0, explicacao: "Aceno cumprimenta.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Aceno" } }],
    medio: [{ pergunta: "Cara emburrada mostra qual sentimento?", opcoes: ["Raiva", "Alegria"], correta: 0, explicacao: "Cara feia é raiva ou tristeza.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" } }, { pergunta: "Se quero pedir silêncio, o gesto é…", opcoes: ["Dedo na boca", "Palma"], correta: 0, explicacao: "Dedo na boca pede silêncio.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Silêncio" } }],
    dificil: [{ pergunta: "O gesto fala a mesma coisa em qualquer lugar do mundo?", opcoes: ["Sim, muitos gestos sim", "Não, nenhum"], correta: 0, explicacao: "Sorriso e abraço são entendidos por todos.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor universal" } }, { pergunta: "Um bebê que não fala ainda, consegue se comunicar?", opcoes: ["Sim, com gestos", "Não consegue"], correta: 0, explicacao: "Bebês apontam, sorriem, choram — tudo é gesto.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Bebê feliz" } }],
  },

  proximaHabilidade: { codigo: "EI03CG03", titulo: "Dançando com os amigos" },
};

void brilhaImg; void piuImg; void estrelaImg;

export default aula;
