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
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";

/**
 * EI03CG03 — Aula 3: Dançando com os amigos
 * Estrela: ⭐ Ritmo · Medalha: 🏅 Dançarino da Floresta
 */
const aula: Aula = {
  codigo: "EI03CG03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Dançando com os Amigos",

  narrativa: {
    titulo: "A festa do ritmo",
    contexto: "O Piu começou a bater as asinhas — tim, tim, tim. A Fifi bateu palma no mesmo tempo. O Lupi pulou. E de repente, a floresta virou uma DANÇA.",
    problema: "A terceira estrela do Mundo 2 só acende quando a criança sentir o RITMO no próprio corpo.",
    convite: "Bora dançar com a turma?",
  },

  conhecimentosPrevios: ["Já bateu palma.", "Já ouviu música.", "Já mexeu o corpinho num ritmo."],

  missao: "Descobrir que o corpo é um instrumento — e que dançar é falar com o ritmo.",

  objetivos: ["Perceber o ritmo com o corpo.", "Repetir sequências simples de movimentos."],

  motivacao: "Todo mundo pode dançar do seu jeito — não existe dança errada!",

  explicacao: "RITMO é o tim-tim-tim que faz o corpo mexer:\n\n• Bater PALMA é ritmo.\n• Bater o PÉ no chão é ritmo.\n• PULAR no mesmo tempo é ritmo.\n\nQuando o corpo se mexe seguindo esse tim-tim, a gente está DANÇANDO. Cada um dança de um jeito — todos são bonitos.",

  explicacaoAtiva: [
    { texto: "O Piu bate as asinhas: tim, tim, tim.", imagem: piuImg, imagemAlt: "Piu batendo asas" },
    { texto: "A Fifi bateu palma junto — no mesmo tempo!", imagem: fifiImg, imagemAlt: "Fifi batendo palma" },
    { texto: "O Lupi pulou: pum, pum!", imagem: lupiImg, imagemAlt: "Lupi pulando", checagem: { pergunta: "Todos dançam do mesmo jeito?", opcoes: ["Cada um do seu jeito", "Só um jeito é certo"], correta: 0, explicacao: "Cada corpo dança diferente — e tudo bem!" } }
  ],

  explicacoesNiveis: {
    nivel1: "Dançar é mexer o corpo com ritmo.",
    nivel2: "Se você bate palma no tempo da música, já está dançando.",
    nivel3: "Ritmo é como um trem: chuca-chuca-chuca. O corpo vai junto.",
    nivel4: "Em festa, em casa, na rua — a gente dança porque o corpo pede.",
  },

  exemploResolvido: {
    enunciado: "A Fifi vai bater palma 3 vezes. Vamos contar juntos!",
    passos: ["Toque na 1ª palma.", "Toque na 2ª palma.", "Toque na 3ª palma. Uma, duas, três!"],
    resposta: "3 palmas no ritmo da dança!",
    interativo: { tipo: "contagem", imagemUrl: fifiImg, quantidade: 3, nomeItem: "palma", nomeItemPlural: "palmas", pergunta: "Quantas palmas a Fifi bateu?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos abriram a roda. Quem está no MEIO?",
    resposta: "O Piu está no meio — ele dá o ritmo!",
    explicacao: "Na roda, o Piu está no 2º lugar (meio).",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da roda?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Piu", imagemUrl: piuImg, posicao: 2 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }],
      respostaCerta: "Piu",
    },
  },

  exercicios: [
    { enunciado: "👏 O que é RITMO?", resposta: "É o tim-tim-tim que faz o corpo mexer.", dica: "Bate palma agora." },
    { enunciado: "💃 Todo mundo dança igual?", resposta: "Não! Cada um dança do seu jeito.", dica: "Cada corpo é único." },
    { enunciado: "🎵 Onde a gente pode dançar?", resposta: "Em qualquer lugar — em casa, na escola, na rua.", dica: "Basta o corpo pedir." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos dançando. Descubra o ritmo de cada um.",
    resposta: "Cada amigo tem seu ritmo — juntos, viram festa!",
    visual: {
      cena: [{ personagem: "Piu batendo asas", itemImagemUrl: piuImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Fifi batendo palma", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Lupi pulando", itemImagemUrl: lupiImg, quantidade: 1, cor: "#A78BFA" }],
      perguntas: [{ pergunta: "O Piu bate asas. Que ritmo faz?", opcoes: ["Tim-tim-tim", "Silêncio"], correta: 0, explicacao: "Asa faz tim-tim." }, { pergunta: "A Fifi bate 3 palmas. Quantas?", opcoes: ["2", "3"], correta: 1, explicacao: "Três palmas seguidas." }, { pergunta: "Todos dançam junto. Isso vira o quê?", opcoes: ["Uma festa", "Uma briga"], correta: 0, explicacao: "Dançar junto é festa!" }],
    },
  },

  revisao: {
    pontos: ["Ritmo é o tim-tim que faz o corpo mexer.", "Dançar é mexer o corpo com ritmo.", "Cada corpo dança do seu jeito.", "Dança une os amigos."],
    dica: "Hoje em casa: coloque uma música e dance 1 minuto.",
  },

  quiz: [
    { pergunta: "Bater palma é o quê?", opcoes: ["Ritmo", "Sono"], correta: 0, explicacao: "Palma é ritmo do corpo.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Palma" } },
    { pergunta: "Dançar precisa saber muito?", opcoes: ["Não, é só mexer", "Sim, muito"], correta: 0, explicacao: "Todo mundo pode dançar.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz dançando" } },
    { pergunta: "Quantas palmas você conta: 1, 2, 3?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "São 3 palmas.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "1", cor: "#FBBF24" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "2", cor: "#F472B6" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "3", cor: "#60A5FA" }] } }
  ],

  conclusao: "🏅 Medalha: Dançarino da Floresta! A TERCEIRA ESTRELA ⭐ acendeu. Em Casa: dance com quem cuida de você — mesmo sem música.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Até os passarinhos dançam! O Piu balança a cabecinha no ritmo do canto — é a dança dele.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Palmas", instrucao: "Conte as palmas.", grupos: [{ imagemUrl: fifiImg, quantidade: 3, rotulo: "Palmas" }], pergunta: "Quantas palmas?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 palmas.", erro: "Conte de novo: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos dançando", instrucao: "Toque em cada amigo.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos amigos dançam?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 dançarinos!", erro: "Conte um por um." },
    { tipo: "ordenar", titulo: "Fase 3 · A ordem dos movimentos", instrucao: "Ordene: 1º palma, 2º pé, 3º pulo.", itens: ["Palma", "Pé no chão", "Pulo"], imagens: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Palma", cor: "#FBBF24" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Pé", cor: "#60A5FA" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Pulo", cor: "#F472B6" }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada dançarino", instrucao: "Toque na estrela e depois no amigo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Piu", cor: "#A78BFA", capacidade: 1, imagemUrl: piuImg }], pares: [{ item: "Estrela Fifi", alvo: "Fifi" }, { item: "Estrela Lupi", alvo: "Lupi" }, { item: "Estrela Piu", alvo: "Piu" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Palma é ritmo?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Palma faz ritmo.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Palma" } }, { pergunta: "Quantas palmas: 1 e 1?", opcoes: ["2", "3"], correta: 0, explicacao: "1+1=2.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "1", cor: "#FBBF24" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "1", cor: "#F472B6" }] } }],
    medio: [{ pergunta: "Dançar é só pra criança?", opcoes: ["Não, é pra todo mundo", "Sim, só criança"], correta: 0, explicacao: "Vovó, papai, todo mundo dança.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô Coruja" } }, { pergunta: "Preciso saber muito pra dançar?", opcoes: ["Não, é só mexer", "Sim"], correta: 0, explicacao: "Basta o corpo pedir.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } }],
    dificil: [{ pergunta: "Ritmo é o mesmo pra todo mundo?", opcoes: ["Cada corpo tem o seu", "É igualzinho"], correta: 0, explicacao: "Cada um sente o ritmo do seu jeito.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração no ritmo" } }, { pergunta: "Se todo mundo dança junto, vira o quê?", opcoes: ["Uma festa", "Um susto"], correta: 0, explicacao: "Dançar junto é festa.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "Festa" } }],
  },

  proximaHabilidade: { codigo: "EI03CG04", titulo: "Pulando, correndo, subindo" },
};

void brilhaImg; void florImg; void solImg;

export default aula;
