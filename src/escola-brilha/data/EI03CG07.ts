import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";

/**
 * EI03CG07 — Aula 7: Higiene: cuidar do corpo
 * Estrela: ⭐ Autocuidado · Medalha: 🏅 Cuidador do Corpo
 */
const aula: Aula = {
  codigo: "EI03CG07",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Higiene: Cuidar do Corpo",

  narrativa: {
    titulo: "O banho da floresta",
    contexto: "Depois de brincar na terra, o Lupi voltou todo sujo. A mamãe disse: 'Hora do banho!' E o Lupi entrou na água quentinha da folha.",
    problema: "A sétima estrela só acende quando a criança descobrir que CUIDAR do corpo é dar amor pra ele.",
    convite: "Vamos aprender a cuidar do corpo com a turma?",
  },

  conhecimentosPrevios: ["Já tomou banho.", "Já escovou os dentes.", "Já lavou as mãos."],

  missao: "Descobrir que a higiene é um jeito de dar CARINHO ao próprio corpo.",

  objetivos: ["Identificar hábitos de higiene diários.", "Perceber por que cada um é importante."],

  motivacao: "Corpo limpinho é corpo feliz — e amigo dos amigos!",

  explicacao: "CUIDAR do corpo todo dia:\n\n• LAVAR AS MÃOS antes de comer e depois do banheiro.\n• ESCOVAR OS DENTES 3 vezes: manhã, tarde e noite.\n• TOMAR BANHO — limpa o corpo todo.\n• PENTEAR O CABELO — deixa arrumadinho.\n• CORTAR AS UNHAS — mantém as mãos limpas.\n\nQuem cuida do corpo, cuida também das pessoas ao redor.",

  explicacaoAtiva: [
    { texto: "O Lupi está lavando as mãos com sabonete.", imagem: chuvaImg, imagemAlt: "Água caindo" },
    { texto: "Depois vai escovar os dentes — 3 vezes por dia.", imagem: felizImg, imagemAlt: "Sorriso limpo" },
    { texto: "Corpo limpinho, coração feliz!", imagem: coracaoImg, imagemAlt: "Coração", checagem: { pergunta: "Quantas vezes escovamos os dentes?", opcoes: ["3 vezes por dia", "Só no Natal"], correta: 0, explicacao: "Isso! Manhã, tarde e noite." } }
  ],

  explicacoesNiveis: {
    nivel1: "Higiene é cuidar do corpo.",
    nivel2: "Depois de brincar na terra, minhas mãos precisam de água e sabão.",
    nivel3: "Corpo é como uma casinha — precisa ser limpo sempre.",
    nivel4: "Higiene protege de doenças e dos bichinhos que a gente não vê.",
  },

  exemploResolvido: {
    enunciado: "O Téo vai escovar os dentes 3 vezes hoje. Vamos contar!",
    passos: ["1ª vez de manhã.", "2ª vez depois do almoço.", "3ª vez antes de dormir."],
    resposta: "3 escovações por dia.",
    interativo: { tipo: "contagem", imagemUrl: felizImg, quantidade: 3, nomeItem: "escovação", nomeItemPlural: "escovações", pergunta: "Quantas vezes escovamos os dentes por dia?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos entram no banheiro. Quem está no MEIO da fila?",
    resposta: "A Fifi está no meio.",
    explicacao: "1º Lupi, 2º Fifi, 3º Téo.",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da fila do banho?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Téo", imagemUrl: teoImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "🧼 Quando lavar as mãos?", resposta: "Antes de comer, depois do banheiro, depois de brincar.", dica: "Sempre que tocaram em muita coisa." },
    { enunciado: "🦷 Por que escovar os dentes?", resposta: "Pra tirar restinho de comida e evitar dor de dente.", dica: "Dente limpo = sorriso feliz." },
    { enunciado: "🛁 Banho é só quando estou sujo?", resposta: "Não — banho todo dia é cuidado.", dica: "Corpo pede banho." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 momentos do dia. Descubra qual cuidado combina.",
    resposta: "Cada hora do dia tem seu cuidado.",
    visual: {
      cena: [{ personagem: "Manhã", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Depois do almoço", itemImagemUrl: felizImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Noite", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#A78BFA" }],
      perguntas: [{ pergunta: "De MANHÃ o que fazemos primeiro?", opcoes: ["Escovar os dentes", "Correr no barro"], correta: 0, explicacao: "Manhã começa com escovação." }, { pergunta: "Depois do ALMOÇO, o que fazemos?", opcoes: ["Escovar de novo", "Nada"], correta: 0, explicacao: "Depois de comer, escova." }, { pergunta: "À NOITE, antes de dormir?", opcoes: ["Escovar mais uma vez", "Comer bala"], correta: 0, explicacao: "Última escovação do dia." }],
    },
  },

  revisao: {
    pontos: ["Higiene é carinho com o corpo.", "Mãos limpas evitam doença.", "3 escovações por dia.", "Banho e pente também são cuidado."],
    dica: "Hoje: lave bem as mãos antes de comer.",
  },

  quiz: [
    { pergunta: "Quantas escovações por dia?", opcoes: ["1", "3"], correta: 1, explicacao: "3 vezes.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Sorriso" } },
    { pergunta: "Antes de comer, lavo o quê?", opcoes: ["As mãos", "Os pés"], correta: 0, explicacao: "Mãos limpas antes de comer.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "Água" } },
    { pergunta: "Higiene é o quê?", opcoes: ["Cuidar do corpo", "Sujar mais"], correta: 0, explicacao: "Cuidar é amar o corpo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor", cor: "#F472B6" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" }] } }
  ],

  conclusao: "🏅 Medalha: Cuidador do Corpo! A SÉTIMA ESTRELA ⭐ acendeu. Em Casa: escove os dentes cantando uma música até acabar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Suas mãos podem carregar milhares de bichinhos invisíveis. Sabonete afasta todos eles em 20 segundos!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Escovações", instrucao: "Conte as vezes que escovamos os dentes.", grupos: [{ imagemUrl: felizImg, quantidade: 3, rotulo: "Escovações" }], pergunta: "Quantas escovações?", opcoes: ["1", "2", "3"], correta: 2, acerto: "3 vezes por dia!", erro: "Manhã, tarde e noite." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos na fila do banho", instrucao: "Conte os amigos.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos amigos?", opcoes: ["2", "3"], correta: 1, acerto: "3 amigos!", erro: "Um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Cuidado e resultado", instrucao: "Ligue o cuidado ao resultado.", pares: [{ a: "Lavar mãos", b: "sem bichinhos", aImagem: chuvaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 }, { a: "Escovar dentes", b: "sorriso limpo", aImagem: felizImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }, { a: "Tomar banho", b: "corpo cheiroso", aImagem: chuvaImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Coração pra cada cuidado", instrucao: "Dê 1 coração pra cada amigo cuidando.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "C1", alvo: "Lupi" }, { item: "C2", alvo: "Fifi" }, { item: "C3", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Escovo dentes com o quê?", opcoes: ["Escova", "Colher"], correta: 0, explicacao: "Escova de dentes.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Sorriso" } }, { pergunta: "Lavo mãos com o quê?", opcoes: ["Água e sabão", "Areia"], correta: 0, explicacao: "Água + sabão.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "Água" } }],
    medio: [{ pergunta: "Quando lavar mãos?", opcoes: ["Antes de comer", "Nunca"], correta: 0, explicacao: "Antes de comer sempre.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" } }, { pergunta: "Banho todo dia é importante?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Banho diário cuida do corpo.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Limpinho" } }],
    dificil: [{ pergunta: "Se eu não lavo as mãos, o que pode acontecer?", opcoes: ["Ficar doente", "Nada"], correta: 0, explicacao: "Bichinhos entram na boca.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Prevenir" } }, { pergunta: "Higiene é só pra criança?", opcoes: ["Não, pra todo mundo", "Sim, só criança"], correta: 0, explicacao: "Todo mundo cuida do corpo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Todos" } }],
  },

  proximaHabilidade: { codigo: "EI03CG08", titulo: "Alimentação e força" },
};

void solImg;

export default aula;
