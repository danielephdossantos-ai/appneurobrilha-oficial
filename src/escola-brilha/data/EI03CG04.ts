import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";

/**
 * EI03CG04 — Aula 4: Pulando, correndo, subindo
 * Estrela: ⭐ Corpo em Ação · Medalha: 🏅 Aventureiro Ágil
 */
const aula: Aula = {
  codigo: "EI03CG04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Pulando, Correndo, Subindo",

  narrativa: {
    titulo: "A corrida do parque",
    contexto: "O parque abriu! O Lupi correu, a Fifi pulou e o Téo subiu na árvore mais alta. Cada um usou o corpo de um jeito.",
    problema: "A quarta estrela só acende quando a criança perceber que cada MOVIMENTO GRANDE precisa de força e cuidado.",
    convite: "Vamos brincar no parque com a turma?",
  },

  conhecimentosPrevios: ["Sabe correr.", "Já subiu num degrau.", "Já pulou com os dois pés."],

  missao: "Aprender a usar o corpo com FORÇA e CUIDADO em brincadeiras que exigem correr, pular e subir.",

  objetivos: ["Controlar o corpo em movimentos grandes.", "Perceber o próprio limite (não se machucar)."],

  motivacao: "Quanto mais eu brinco, mais forte e ágil eu fico!",

  explicacao: "MOVIMENTOS GRANDES do corpo:\n\n• CORRER — as pernas trabalham rápido.\n• PULAR — os dois pés saem do chão junto.\n• SUBIR — as mãos seguram, os pés empurram.\n• DESCER — devagar, com cuidado.\n\nCada movimento precisa de FORÇA (energia do corpo) e CUIDADO (pra não cair).",

  explicacaoAtiva: [
    { texto: "O Lupi está correndo — as pernas trabalham rápido!", imagem: lupiImg, imagemAlt: "Lupi correndo" },
    { texto: "A Fifi pulou alto — os dois pés saíram do chão.", imagem: fifiImg, imagemAlt: "Fifi pulando" },
    { texto: "O Téo subiu na árvore, um pé de cada vez.", imagem: teoImg, imagemAlt: "Téo subindo", checagem: { pergunta: "Pra subir com segurança, o que precisa?", opcoes: ["Cuidado passo a passo", "Correr de olhos fechados"], correta: 0, explicacao: "Isso! Subir devagar é subir seguro." } }
  ],

  explicacoesNiveis: {
    nivel1: "Correr, pular e subir são movimentos grandes.",
    nivel2: "Pra pular a poça, os dois pés saem do chão juntos.",
    nivel3: "Pense no corpo como uma mola: dobra, junta força, dispara!",
    nivel4: "No parque, na escola, em casa — a gente treina o corpo brincando.",
  },

  exemploResolvido: {
    enunciado: "O Lupi vai dar 4 pulos pra chegar na Fifi. Vamos contar?",
    passos: ["Toque no 1º pulo.", "Toque no 2º.", "3º e 4º — chegou!"],
    resposta: "4 pulos até chegar na amiga.",
    interativo: { tipo: "contagem", imagemUrl: lupiImg, quantidade: 4, nomeItem: "pulo", nomeItemPlural: "pulos", pergunta: "Quantos pulos o Lupi deu?" },
  },

  atividadeGuiada: {
    enunciado: "Na corrida do parque, quem chegou em 2º (MEIO do pódio)?",
    resposta: "A Fifi ficou em 2º lugar.",
    explicacao: "1º Lupi, 2º Fifi, 3º Téo.",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no pódio no 2º lugar?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Téo", imagemUrl: teoImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "🏃 Pra correr, quais partes trabalham mais?", resposta: "As pernas — mas o corpo todo ajuda.", dica: "Pensa em correndo agora." },
    { enunciado: "🦘 Quando pulo, quantos pés saem do chão?", resposta: "Os dois pés — junto.", dica: "Pula de mentirinha." },
    { enunciado: "🌳 Pra subir sem cair, o que preciso?", resposta: "Cuidado, mãos firmes e um pé de cada vez.", dica: "Devagar chega mais longe." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos no parque. Descubra o movimento certo.",
    resposta: "Cada amigo mostrou um movimento grande.",
    visual: {
      cena: [{ personagem: "Lupi correndo", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Fifi pulando", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Téo subindo", itemImagemUrl: teoImg, quantidade: 1, cor: "#60A5FA" }],
      perguntas: [{ pergunta: "O Lupi CORRE. Quem trabalha mais?", opcoes: ["As pernas", "O nariz"], correta: 0, explicacao: "Correr é coisa de perna." }, { pergunta: "A Fifi PULOU. Quantos pés saíram do chão?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2 pés." }, { pergunta: "O Téo SOBE. Como ele faz?", opcoes: ["Com cuidado", "Rápido demais"], correta: 0, explicacao: "Subir precisa de calma." }],
    },
  },

  revisao: {
    pontos: ["Correr, pular e subir são movimentos grandes.", "Cada movimento precisa de força.", "Cuidado protege o corpo.", "Brincar deixa o corpo forte."],
    dica: "Hoje: dê 5 pulinhos e conte junto.",
  },

  quiz: [
    { pergunta: "Pra PULAR, quantos pés saem do chão?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2 pés juntos.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi pulando" } },
    { pergunta: "Pra SUBIR sem cair, o que preciso?", opcoes: ["Cuidado", "Fechar os olhos"], correta: 0, explicacao: "Cuidado é o segredo.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Téo subindo" } },
    { pergunta: "Quantos amigos brincam no parque?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Lupi, Fifi e Téo — 3.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FBBF24" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#60A5FA" }] } }
  ],

  conclusao: "🏅 Medalha: Aventureiro Ágil! A QUARTA ESTRELA ⭐ acendeu. Em Casa: brinque de pular corda ou dar 10 pulinhos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Um sapo pula até 20 vezes o tamanho do corpo dele! Se você pulasse assim, chegaria no telhado de casa.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Pulos do Lupi", instrucao: "Conte os pulos.", grupos: [{ imagemUrl: lupiImg, quantidade: 3, rotulo: "Pulos" }], pergunta: "Quantos pulos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 pulos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos correndo", instrucao: "Toque em cada corredor.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }], pergunta: "Quantos amigos correm?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 amigos!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Movimento certo", instrucao: "Ligue amigo ao que ele faz.", pares: [{ a: "Lupi", b: "corre", aImagem: lupiImg, aQuantidade: 1, bImagem: solImg, bQuantidade: 1 }, { a: "Fifi", b: "pula", aImagem: fifiImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 }, { a: "Téo", b: "sobe na árvore", aImagem: teoImg, aQuantidade: 1, bImagem: arvoreImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pro corpo forte", instrucao: "Dê 1 estrela pra cada amigo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "E1", alvo: "Lupi" }, { item: "E2", alvo: "Fifi" }, { item: "E3", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Correr usa o quê?", opcoes: ["Pernas", "Orelhas"], correta: 0, explicacao: "Pernas correm.", visual: { tipo: "itens", imagemUrl: lupiImg, quantidade: 1, rotulo: "Correr" } }, { pergunta: "Pular usa quantos pés?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Pular" } }],
    medio: [{ pergunta: "Subir precisa de…", opcoes: ["Cuidado", "Pressa"], correta: 0, explicacao: "Cuidado protege.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Subir" } }, { pergunta: "Quem trabalha mais na corrida?", opcoes: ["Pernas e coração", "Só a mão"], correta: 0, explicacao: "Pernas e coração juntos.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração acelerado" } }],
    dificil: [{ pergunta: "Se eu não sei subir alto, o que faço?", opcoes: ["Peço ajuda", "Subo sozinho até cair"], correta: 0, explicacao: "Pedir ajuda é sabedoria.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Peço ajuda" } }, { pergunta: "Depois de correr muito, o corpo pede…", opcoes: ["Descanso e água", "Correr mais"], correta: 0, explicacao: "Descanso repõe a energia.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Descansar" } }],
  },

  proximaHabilidade: { codigo: "EI03CG05", titulo: "Equilíbrio na floresta" },
};

void arvoreImg;

export default aula;
