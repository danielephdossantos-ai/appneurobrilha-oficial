import type { Aula } from "../types";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maoImg } from "@/assets/neuro-treino/sentidos/mao.png.asset.json";
import { url as palmasImg } from "@/assets/neuro-treino/sentidos/palmas.png.asset.json";
import { url as peImg } from "@/assets/neuro-treino/sentidos/pe.png.asset.json";
import { url as pesPulandoImg } from "@/assets/neuro-treino/sentidos/pes-pulando.png.asset.json";
import { url as cabecaImg } from "@/assets/neuro-treino/sentidos/cabeca.png.asset.json";

/**
 * EI03CG03 — Aula 3: Dançando com o corpo
 * Padrão TRAVADO: só partes do corpo — mãos, palmas, pés.
 * Sem mascotes, sem pódio.
 */
const aula: Aula = {
  codigo: "EI03CG03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Dançando com o Corpo",

  narrativa: {
    titulo: "A festa do ritmo",
    contexto: "Duas mãos começaram a bater palma — tim, tim, tim. Depois dois pés bateram no chão. Uma cabeça balançou junto. E de repente virou DANÇA.",
    problema: "A terceira estrela do Mundo 2 só acende quando a criança sentir o RITMO no próprio corpo.",
    convite: "Bora dançar batendo palma, pé e balançando a cabeça?",
  },

  conhecimentosPrevios: ["Já bateu palma.", "Já ouviu música.", "Já mexeu o corpinho num ritmo."],

  missao: "Descobrir que o corpo é um instrumento — e que dançar é falar com o ritmo.",

  objetivos: ["Perceber o ritmo com o corpo.", "Repetir sequências simples de movimentos."],

  motivacao: "Todo mundo pode dançar do seu jeito — não existe dança errada!",

  explicacao: "RITMO é o tim-tim-tim que faz o corpo mexer:\n\n• Duas MÃOS batendo palma é ritmo.\n• Um PÉ batendo no chão é ritmo.\n• A CABEÇA balançando também é ritmo.\n\nQuando o corpo se mexe seguindo esse tim-tim, a gente está DANÇANDO. Cada um dança de um jeito — todos são bonitos.",

  explicacaoAtiva: [
    { texto: "Duas mãos batem palma: tim, tim, tim.", imagem: palmasImg, imagemAlt: "Mãos batendo palma" },
    { texto: "Um pé bate no chão junto — no mesmo tempo!", imagem: peImg, imagemAlt: "Pé no chão" },
    { texto: "E a cabeça balança: pum, pum!", imagem: cabecaImg, imagemAlt: "Cabeça balançando", checagem: { pergunta: "Todo mundo dança do mesmo jeito?", opcoes: ["Cada um do seu jeito", "Só um jeito é certo"], correta: 0, explicacao: "Cada corpo dança diferente — e tudo bem!" } }
  ],

  explicacoesNiveis: {
    nivel1: "Dançar é mexer o corpo com ritmo.",
    nivel2: "Se você bate palma no tempo da música, já está dançando.",
    nivel3: "Ritmo é como um trem: chuca-chuca-chuca. O corpo vai junto.",
    nivel4: "Em festa, em casa, na rua — a gente dança porque o corpo pede.",
  },

  exemploResolvido: {
    enunciado: "Vamos bater palma 3 vezes. Conte com a gente!",
    passos: ["Toque na 1ª palma.", "Toque na 2ª palma.", "Toque na 3ª palma. Uma, duas, três!"],
    resposta: "3 palmas no ritmo da dança!",
    interativo: { tipo: "contagem", imagemUrl: palmasImg, quantidade: 3, nomeItem: "palma", nomeItemPlural: "palmas", pergunta: "Quantas palmas você bateu?" },
  },

  atividadeGuiada: {
    enunciado: "Qual parte do corpo faz RITMO batendo no chão? Toque na imagem certa.",
    resposta: "O pé faz ritmo batendo no chão.",
    explicacao: "Pé no chão: pum, pum, pum — é ritmo!",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual parte do corpo bate no chão fazendo ritmo?",
      opcoes: [
        { nome: "Pé", imagemUrl: peImg },
        { nome: "Cabeça", imagemUrl: cabecaImg },
        { nome: "Mão", imagemUrl: maoImg },
      ],
      respostaCerta: "Pé",
    },
  },

  exercicios: [
    { enunciado: "👏 O que é RITMO?", resposta: "É o tim-tim-tim que faz o corpo mexer.", dica: "Bate palma agora." },
    { enunciado: "💃 Todo mundo dança igual?", resposta: "Não! Cada um dança do seu jeito.", dica: "Cada corpo é único." },
    { enunciado: "🎵 Onde a gente pode dançar?", resposta: "Em qualquer lugar — em casa, na escola, na rua.", dica: "Basta o corpo pedir." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: três partes do corpo fazendo ritmo. Descubra o que cada uma faz.",
    resposta: "Mãos batem palma, pé bate no chão, cabeça balança — juntos viram dança!",
    visual: {
      cena: [
        { personagem: "Mãos batendo palma", itemImagemUrl: palmasImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Pé batendo no chão", itemImagemUrl: peImg, quantidade: 2, cor: "#60A5FA" },
        { personagem: "Cabeça balançando", itemImagemUrl: cabecaImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Duas mãos juntas fazem que barulho?", opcoes: ["Palma", "Silêncio"], correta: 0, explicacao: "Palma-palma-palma!" },
        { pergunta: "Quantas palmas em 1, 2, 3?", opcoes: ["2", "3"], correta: 1, explicacao: "Três palmas seguidas." },
        { pergunta: "Todas as partes do corpo mexem junto. Isso vira o quê?", opcoes: ["Uma dança", "Uma briga"], correta: 0, explicacao: "Dançar junto é festa!" },
      ],
    },
  },

  revisao: {
    pontos: ["Ritmo é o tim-tim que faz o corpo mexer.", "Mãos, pés e cabeça fazem ritmo.", "Cada corpo dança do seu jeito.", "Dança une todo mundo."],
    dica: "Hoje em casa: coloque uma música e dance 1 minuto.",
  },

  quiz: [
    { pergunta: "Bater palma é o quê?", opcoes: ["Ritmo", "Sono"], correta: 0, explicacao: "Palma é ritmo do corpo.", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma" } },
    { pergunta: "Dançar precisa saber muito?", opcoes: ["Não, é só mexer", "Sim, muito"], correta: 0, explicacao: "Todo mundo pode dançar.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Dançar feliz" } },
    { pergunta: "Quantas palmas você conta: 1, 2, 3?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "São 3 palmas.", visual: { tipo: "grupos", grupos: [{ imagemUrl: palmasImg, quantidade: 1, rotulo: "1", cor: "#FBBF24" }, { imagemUrl: palmasImg, quantidade: 1, rotulo: "2", cor: "#F472B6" }, { imagemUrl: palmasImg, quantidade: 1, rotulo: "3", cor: "#60A5FA" }] } }
  ],

  conclusao: "🏅 Medalha: Dançarino da Floresta! A TERCEIRA ESTRELA ⭐ acendeu. Em Casa: dance com quem cuida de você — mesmo sem música.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Até os passarinhos dançam! Eles balançam a cabecinha no ritmo do canto — é a dança do corpo pequeno.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Palmas", instrucao: "Conte as palmas.", grupos: [{ imagemUrl: palmasImg, quantidade: 3, rotulo: "Palmas" }], pergunta: "Quantas palmas?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 palmas.", erro: "Conte de novo: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Partes que dançam", instrucao: "Toque em cada parte do corpo que dança.", grupos: [{ imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma" }, { imagemUrl: peImg, quantidade: 1, rotulo: "Pé" }, { imagemUrl: cabecaImg, quantidade: 1, rotulo: "Cabeça" }, { imagemUrl: maoImg, quantidade: 1, rotulo: "Mão" }], pergunta: "Quantas partes do corpo dançam?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 partes dançarinas!", erro: "Conte um por um." },
    { tipo: "ordenar", titulo: "Fase 3 · A ordem dos movimentos", instrucao: "Ordene: 1º palma, 2º pé, 3º pulo.", itens: ["Palma", "Pé no chão", "Pulo"], imagens: [{ imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma", cor: "#FBBF24" }, { imagemUrl: peImg, quantidade: 1, rotulo: "Pé", cor: "#60A5FA" }, { imagemUrl: pesPulandoImg, quantidade: 1, rotulo: "Pulo", cor: "#F472B6" }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada parte do corpo que dança", instrucao: "Toque na estrela e depois na parte.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Mãos", cor: "#FBBF24", capacidade: 1, imagemUrl: palmasImg },
      { nome: "Pé", cor: "#60A5FA", capacidade: 1, imagemUrl: peImg },
      { nome: "Cabeça", cor: "#A78BFA", capacidade: 1, imagemUrl: cabecaImg },
    ], pares: [{ item: "Estrela mãos", alvo: "Mãos" }, { item: "Estrela pé", alvo: "Pé" }, { item: "Estrela cabeça", alvo: "Cabeça" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Palma é ritmo?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Palma faz ritmo.", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma" } },
      { pergunta: "Quantas palmas: 1 e 1?", opcoes: ["2", "3"], correta: 0, explicacao: "1+1=2.", visual: { tipo: "grupos", grupos: [{ imagemUrl: palmasImg, quantidade: 1, rotulo: "1", cor: "#FBBF24" }, { imagemUrl: palmasImg, quantidade: 1, rotulo: "1", cor: "#F472B6" }] } },
    ],
    medio: [
      { pergunta: "Dançar é só pra criança?", opcoes: ["Não, é pra todo mundo", "Sim, só criança"], correta: 0, explicacao: "Vovó, papai, todo mundo dança.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Todos dançam" } },
      { pergunta: "Preciso saber muito pra dançar?", opcoes: ["Não, é só mexer", "Sim"], correta: 0, explicacao: "Basta o corpo pedir.", visual: { tipo: "itens", imagemUrl: cabecaImg, quantidade: 1, rotulo: "Só mexer" } },
    ],
    dificil: [
      { pergunta: "Ritmo é o mesmo pra todo mundo?", opcoes: ["Cada corpo tem o seu", "É igualzinho"], correta: 0, explicacao: "Cada um sente o ritmo do seu jeito.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração no ritmo" } },
      { pergunta: "Se todo mundo dança junto, vira o quê?", opcoes: ["Uma festa", "Um susto"], correta: 0, explicacao: "Dançar junto é festa.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Festa" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03CG04", titulo: "Pulando, correndo, subindo" },
};

void solImg;

export default aula;
