import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";

/**
 * EI03CG05 — Aula 5: Equilíbrio na floresta
 * Estrela: ⭐ Equilíbrio · Medalha: 🏅 Guardião do Equilíbrio
 */
const aula: Aula = {
  codigo: "EI03CG05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Equilíbrio na Floresta",

  narrativa: {
    titulo: "A ponte de tronco",
    contexto: "Na floresta apareceu uma ponte de tronco fininha. A Fifi olhou, respirou fundo, abriu os braços — e atravessou sem cair!",
    problema: "A quinta estrela do Mundo 2 acende quando a criança descobrir o SEGREDO do equilíbrio.",
    convite: "Vamos atravessar a ponte com a Fifi?",
  },

  conhecimentosPrevios: ["Sabe ficar em pé.", "Já andou numa linha do chão.", "Já ficou num pé só por alguns segundos."],

  missao: "Descobrir que EQUILÍBRIO é o corpo firme, calmo e concentrado.",

  objetivos: ["Ficar num pé só por alguns segundos.", "Perceber que respirar ajuda no equilíbrio."],

  motivacao: "Equilíbrio é força que vem de dentro — do foco!",

  explicacao: "EQUILÍBRIO é o corpo ficando FIRME sem cair.\n\n• BRAÇOS abertos ajudam.\n• OLHOS num ponto fixo ajudam.\n• RESPIRAR devagar ajuda.\n• PÉ bem apoiado ajuda.\n\nQuem tem equilíbrio consegue andar em cima de um tronco, ficar num pé só, ou subir devagar.",

  explicacaoAtiva: [
    { texto: "A Fifi abre os braços — assim ela não cai.", imagem: fifiImg, imagemAlt: "Fifi de braços abertos" },
    { texto: "Ela olha pra frente, num ponto fixo.", imagem: solImg, imagemAlt: "Foco no horizonte" },
    { texto: "E respira fundo — o corpo fica calmo.", imagem: felizImg, imagemAlt: "Rosto calmo", checagem: { pergunta: "O que ajuda no equilíbrio?", opcoes: ["Braços abertos + respirar", "Fechar os olhos e girar"], correta: 0, explicacao: "Isso! Braços abertos e respiração são o segredo." } }
  ],

  explicacoesNiveis: {
    nivel1: "Equilíbrio é ficar firme sem cair.",
    nivel2: "Se eu abrir os braços quando ando na linha, não caio pro lado.",
    nivel3: "O corpo é como uma balança — braços ajudam a nivelar.",
    nivel4: "Bailarinos e atletas treinam o equilíbrio o tempo todo.",
  },

  exemploResolvido: {
    enunciado: "A Fifi consegue ficar 3 segundos num pé só. Vamos contar juntos!",
    passos: ["Um... a Fifi está firme.", "Dois... continua!", "Três! Conseguiu!"],
    resposta: "3 segundos de equilíbrio — muito bem, Fifi!",
    interativo: { tipo: "contagem", imagemUrl: fifiImg, quantidade: 3, nomeItem: "segundo", nomeItemPlural: "segundos", pergunta: "Por quantos segundos a Fifi ficou num pé só?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos treinaram equilíbrio. Quem ficou no MEIO do pódio?",
    resposta: "O Téo ficou em 2º lugar.",
    explicacao: "1º Fifi (5s), 2º Téo (4s), 3º Lupi (2s).",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio no treino de equilíbrio?",
      participantes: [{ nome: "Fifi", imagemUrl: fifiImg, posicao: 1 }, { nome: "Téo", imagemUrl: teoImg, posicao: 2 }, { nome: "Lupi", imagemUrl: lupiImg, posicao: 3 }],
      respostaCerta: "Téo",
    },
  },

  exercicios: [
    { enunciado: "🤸 O que ajuda a NÃO CAIR?", resposta: "Braços abertos, respirar e olhar fixo.", dica: "Tente ficar num pé só." },
    { enunciado: "🌳 Onde precisamos de equilíbrio?", resposta: "Na escada, na ponte, andando na linha.", dica: "Pensa onde poderia cair." },
    { enunciado: "🧘 Respirar devagar ajuda?", resposta: "Sim! Calma dá equilíbrio.", dica: "Respire fundo agora." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos na ponte da floresta. Descubra o segredo de cada um.",
    resposta: "Todo mundo pode ter equilíbrio com prática.",
    visual: {
      cena: [{ personagem: "Fifi calma", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Téo respirando", itemImagemUrl: teoImg, quantidade: 1, cor: "#60A5FA" }, { personagem: "Lupi treinando", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }],
      perguntas: [{ pergunta: "A Fifi está firme. Como ela faz?", opcoes: ["Braços abertos", "Braços cruzados"], correta: 0, explicacao: "Braços abertos equilibram." }, { pergunta: "O Téo respira fundo. Isso ajuda?", opcoes: ["Sim, dá calma", "Não faz diferença"], correta: 0, explicacao: "Respiração dá equilíbrio." }, { pergunta: "O Lupi ainda não conseguiu. O que ele faz?", opcoes: ["Treina mais", "Desiste"], correta: 0, explicacao: "Praticar sempre resolve." }],
    },
  },

  revisao: {
    pontos: ["Equilíbrio é ficar firme sem cair.", "Braços abertos + respiração = segredo.", "Olho num ponto fixo ajuda.", "Praticar melhora todo dia."],
    dica: "Hoje: fique 5 segundos num pé só, com braços abertos.",
  },

  quiz: [
    { pergunta: "O que ajuda a se equilibrar?", opcoes: ["Braços abertos", "Olhos fechados"], correta: 0, explicacao: "Braços abertos dão equilíbrio.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi firme" } },
    { pergunta: "Respirar devagar ajuda no equilíbrio?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Calma dá equilíbrio.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Calma" } },
    { pergunta: "Se ainda não consigo, o que fazer?", opcoes: ["Treinar", "Desistir"], correta: 0, explicacao: "Praticar sempre resolve.", visual: { tipo: "grupos", grupos: [{ imagemUrl: coracaoImg, quantidade: 1, rotulo: "Persistir", cor: "#F472B6" }, { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Conseguir", cor: "#FBBF24" }] } }
  ],

  conclusao: "🏅 Medalha: Guardião do Equilíbrio! A QUINTA ESTRELA ⭐ acendeu. Em Casa: treine ficar num pé só na frente do espelho.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "As corujas conseguem ficar horas num pé só sem se cansar. O Vovô Coruja é campeão de equilíbrio!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Segundos da Fifi", instrucao: "Conte os segundos.", grupos: [{ imagemUrl: fifiImg, quantidade: 3, rotulo: "Segundos" }], pergunta: "Quantos segundos?", opcoes: ["2", "3", "5"], correta: 1, acerto: "3 segundos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos que treinam", instrucao: "Cada amigo treina equilíbrio.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }], pergunta: "Quantos amigos treinam?", opcoes: ["2", "3"], correta: 1, acerto: "3 amigos!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Segredo do equilíbrio", instrucao: "Ligue o que ajuda.", pares: [{ a: "Braços abertos", b: "não cai", aImagem: fifiImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }, { a: "Respiração calma", b: "corpo firme", aImagem: felizImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Olho num ponto fixo", b: "foco", aImagem: solImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra quem tem equilíbrio", instrucao: "Dê 1 estrela pra cada amigo firme.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }, { nome: "Coruja", cor: "#A78BFA", capacidade: 1, imagemUrl: corujaImg }], pares: [{ item: "E1", alvo: "Fifi" }, { item: "E2", alvo: "Téo" }, { item: "E3", alvo: "Coruja" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Braços abertos ajudam a equilibrar?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Braços abertos = balança.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Braços abertos" } }, { pergunta: "Se eu correr enquanto tento equilibrar, dá certo?", opcoes: ["Não, precisa calma", "Sim, sempre"], correta: 0, explicacao: "Calma é chave.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Calma" } }],
    medio: [{ pergunta: "Ficar num pé só treina o quê?", opcoes: ["Equilíbrio", "Voz"], correta: 0, explicacao: "Um pé só = equilíbrio.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Um pé" } }, { pergunta: "Respirar fundo faz o quê?", opcoes: ["Acalma o corpo", "Deixa nervoso"], correta: 0, explicacao: "Respirar acalma.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração calmo" } }],
    dificil: [{ pergunta: "Bailarinos treinam equilíbrio todo dia?", opcoes: ["Sim, sempre", "Não precisa"], correta: 0, explicacao: "Prática é tudo.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Talento treinado" } }, { pergunta: "Se eu cair uma vez, tenho que desistir?", opcoes: ["Não, eu tento de novo", "Sim, desisto"], correta: 0, explicacao: "Cair faz parte.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Tento de novo" } }],
  },

  proximaHabilidade: { codigo: "EI03CG06", titulo: "Minhas mãos criam" },
};

void arvoreImg; void piuImg;

export default aula;
