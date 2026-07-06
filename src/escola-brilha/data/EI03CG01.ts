import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import maoImg from "@/assets/neuro-treino/sentidos/mao.png";
import peImg from "@/assets/neuro-treino/sentidos/pe.png";
import cabecaImg from "@/assets/neuro-treino/sentidos/cabeca.png";
import palmasImg from "@/assets/neuro-treino/sentidos/palmas.png";
import olhoImg from "@/assets/neuro-treino/sentidos/olho.png";

/**
 * EI03CG01 — Mundo 2 · Corpo, Gestos e Movimentos
 * Aula 1: Meu corpo se movimenta
 * Estrela: ⭐ Corpo desperto · Medalha: 🏅 Explorador do Corpo
 */
const aula: Aula = {
  codigo: "EI03CG01",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Meu Corpo se Movimenta",

  narrativa: {
    titulo: "O corpo acorda",
    contexto: "O sol nasceu na floresta. A Fifi abre os olhos, estica os braços bem alto e sorri: 'Meu corpo acordou!'",
    problema: "A primeira estrela do Mundo 2 só acende quando a criança descobre TODAS as partes do corpo que se mexem sozinhas.",
    convite: "Bora acordar o corpo com a Fifi?",
  },

  conhecimentosPrevios: ["Reconhecer mãos, pés e cabeça.", "Saber que o corpo pode se mexer.", "Já ter brincado de imitar movimentos."],

  missao: "Descobrir que o corpo é uma máquina incrível que anda, pula, dobra e gira — cada parte faz algo diferente.",

  objetivos: ["Nomear partes do corpo que se movimentam.", "Perceber que cada movimento tem um sentido."],

  motivacao: "Meu corpo é meu companheiro de aventura — ele me leva pra onde eu quero ir!",

  explicacao: "Meu CORPO é meu primeiro brinquedo.\n\n• A CABEÇA gira pra olhar tudo.\n• Os BRAÇOS abraçam, apontam, alcançam.\n• As MÃOS pegam, batem palma, acenam.\n• As PERNAS andam, correm, pulam.\n• Os PÉS carregam a gente pra qualquer lugar.\n\nQuando a gente mexe uma parte, o corpo todo participa. Isso se chama MOVIMENTO.",

  explicacaoAtiva: [
    { texto: "Olha a Fifi! Ela girou a cabeça pra olhar o céu.", imagem: fifiImg, imagemAlt: "Fifi olhando pra cima" },
    { texto: "Agora ela estica os braços bem alto — como se fosse pegar o sol.", imagem: solImg, imagemAlt: "Sol brilhando" },
    { texto: "E os pés? Os pés dela pulam de alegria!", imagem: fifiImg, imagemAlt: "Fifi pulando", checagem: { pergunta: "Quando você pula, o que se mexe?", opcoes: ["As pernas e os pés", "Só a cabeça"], correta: 0, explicacao: "Isso! Pra pular a gente usa pernas e pés — e o corpo todo ajuda." } }
  ],

  explicacoesNiveis: {
    nivel1: "Meu corpo se mexe — de muitos jeitos.",
    nivel2: "Se eu quero pegar uma bola, o BRAÇO estica. Se quero correr, as PERNAS trabalham.",
    nivel3: "Cada parte do corpo tem uma função — como as peças de uma casinha.",
    nivel4: "Pra brincar, pra comer, pra abraçar — sempre uso alguma parte do corpo.",
  },

  exemploResolvido: {
    enunciado: "Vamos bater palma! Quantas mãos a gente usa?",
    passos: ["Toque na primeira mão.", "Toque na segunda mão.", "Uma, duas — 2 mãos batem palma!"],
    resposta: "A gente usa 2 mãos pra bater palma — uma bate na outra.",
    interativo: { tipo: "contagem", imagemUrl: maoImg, quantidade: 2, nomeItem: "mão", nomeItemPlural: "mãos", pergunta: "Quantas mãos batem palma?" },
  },

  atividadeGuiada: {
    enunciado: "Qual parte do corpo BATE PALMA? Toque na resposta certa.",
    resposta: "A mão bate palma.",
    explicacao: "As mãos se encontram e fazem barulho: palma-palma-palma!",
    visual: {
      tipo: "podio",
      pergunta: "Qual parte do corpo bate palma?",
      participantes: [{ nome: "Mão", imagemUrl: maoImg, posicao: 1 }, { nome: "Pé", imagemUrl: peImg, posicao: 2 }, { nome: "Cabeça", imagemUrl: cabecaImg, posicao: 3 }],
      respostaCerta: "Mão",
    },
  },

  exercicios: [
    { enunciado: "🖐️ Quando você acena tchau, o que se mexe?", resposta: "A mão e o braço.", dica: "Faça o movimento agora." },
    { enunciado: "🦵 Pra correr atrás da bola, qual parte trabalha mais?", resposta: "As pernas.", dica: "Sem elas, dá pra correr?" },
    { enunciado: "🙂 Quando você sorri, o que se mexe no rosto?", resposta: "A boca — e os olhos brilham junto.", dica: "Faz um sorriso bem grande." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada parte do corpo faz um movimento diferente. Descubra qual usa em cada ação.",
    resposta: "Mão bate palma. Pé pula. Cabeça balança.",
    visual: {
      cena: [{ personagem: "Mãos batendo palma", itemImagemUrl: palmasImg, quantidade: 2, cor: "#F472B6" }, { personagem: "Pé pulando", itemImagemUrl: peImg, quantidade: 2, cor: "#FBBF24" }, { personagem: "Cabeça balançando", itemImagemUrl: cabecaImg, quantidade: 1, cor: "#60A5FA" }],
      perguntas: [{ pergunta: "Qual parte do corpo PULA?", opcoes: ["Pé", "Orelha"], correta: 0, explicacao: "Os pés impulsionam o pulo." }, { pergunta: "Qual parte do corpo ACENA?", opcoes: ["Mão", "Joelho"], correta: 0, explicacao: "A mão sobe e balança." }, { pergunta: "Quantas mãos batem palma juntas?", opcoes: ["1", "2"], correta: 1, explicacao: "São 2 mãos que se encontram." }],
    },
  },

  revisao: {
    pontos: ["O corpo se mexe de muitos jeitos.", "Cada parte tem uma função.", "Movimento é o corpo trabalhando.", "Brincar é a melhor forma de conhecer o corpo."],
    dica: "Hoje em casa: faça 3 movimentos diferentes com o corpo.",
  },

  quiz: [
    { pergunta: "Com o que a gente ANDA?", opcoes: ["Com as pernas", "Com o cotovelo"], correta: 0, explicacao: "As pernas levam a gente pra qualquer lugar.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi caminhando" } },
    { pergunta: "Com o que a gente OLHA o mundo?", opcoes: ["Com os olhos", "Com os pés"], correta: 0, explicacao: "Os olhos enxergam tudo.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Rostinho feliz" } },
    { pergunta: "Quantos braços eu tenho?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "Todo mundo tem 2 braços.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Braço direito", cor: "#F472B6" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Braço esquerdo", cor: "#60A5FA" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Explorador do Corpo! A PRIMEIRA ESTRELA ⭐ do Mundo 2 acendeu. Missão em Casa: mostre pra sua família 3 movimentos que você aprendeu.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Seu corpo tem mais de 600 músculos — e todos eles ajudam você a se mexer, sorrir e até respirar!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas mãos?", instrucao: "Toque em cada mão.", grupos: [{ imagemUrl: maoImg, quantidade: 2, rotulo: "Mãos" }], pergunta: "Quantas mãos temos?", opcoes: ["1", "2", "3"], correta: 1, acerto: "Isso! 2 mãos pra fazer tudo.", erro: "Conte de novo: uma, duas." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantos pés?", instrucao: "Toque em cada pé.", grupos: [{ imagemUrl: peImg, quantidade: 2, rotulo: "Pés" }], pergunta: "Quantos pés temos pra brincar?", opcoes: ["2", "4"], correta: 0, acerto: "Muito bem! 2 pés.", erro: "Um pé, dois pés — só 2." },
    { tipo: "ligar", titulo: "Fase 3 · Parte do corpo e o que faz", instrucao: "Ligue a parte do corpo à ação certa.", pares: [{ a: "Mãos", b: "batem palma", aImagem: maoImg, aQuantidade: 2, bImagem: palmasImg, bQuantidade: 1 }, { a: "Pés", b: "pulam", aImagem: peImg, aQuantidade: 2, bImagem: bolaImg, bQuantidade: 1 }, { a: "Olhos", b: "olham o sol", aImagem: olhoImg, aQuantidade: 2, bImagem: solImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Cada parte no lugar certo", instrucao: "Toque na estrela e depois na parte do corpo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Mão", cor: "#F472B6", capacidade: 1, imagemUrl: maoImg }, { nome: "Pé", cor: "#FBBF24", capacidade: 1, imagemUrl: peImg }, { nome: "Cabeça", cor: "#60A5FA", capacidade: 1, imagemUrl: cabecaImg }], pares: [{ item: "Estrela pra mão", alvo: "Mão" }, { item: "Estrela pro pé", alvo: "Pé" }, { item: "Estrela pra cabeça", alvo: "Cabeça" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "O que a gente usa pra ANDAR?", opcoes: ["Pernas", "Nariz"], correta: 0, explicacao: "Pernas andam.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi andando" } }, { pergunta: "Quantos olhos você tem?", opcoes: ["1", "2"], correta: 1, explicacao: "2 olhinhos.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Rostinho" } }],
    medio: [{ pergunta: "Pra ABRAÇAR, o que a gente usa?", opcoes: ["Os braços", "Os joelhos"], correta: 0, explicacao: "Os braços apertam com carinho.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Abraço" } }, { pergunta: "Qual parte do corpo pega uma flor?", opcoes: ["A mão", "O cotovelo"], correta: 0, explicacao: "A mão pega, segura.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } }],
    dificil: [{ pergunta: "O corpo se mexe SOZINHO ou eu comando?", opcoes: ["Eu comando", "Sozinho"], correta: 0, explicacao: "Você decide cada movimento — o corpo obedece.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Você no comando" } }, { pergunta: "Pra brincar de bola, quantas partes do corpo trabalham?", opcoes: ["Só 1", "Várias juntas"], correta: 1, explicacao: "Braço, mão, perna, olho — todo mundo ajuda.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" } }],
  },

  proximaHabilidade: { codigo: "EI03CG02", titulo: "Gestos falam — comunicando com o corpo" },
};

void piuImg; void corujaImg; void arvoreImg; void lupiImg; void teoImg; void fifiImg; void coracaoImg;

export default aula;
