import type { Aula } from "../types";
import { url as brilhaImg } from "@/assets/escola-brilha/mascotes/brilha.png.asset.json";
import { url as corujaImg } from "@/assets/escola-brilha/ei-mundo1/coruja.png.asset.json";
import { url as lupiImg } from "@/assets/escola-brilha/ei-mundo1/lupi.png.asset.json";
import { url as fifiImg } from "@/assets/escola-brilha/ei-mundo1/fifi.png.asset.json";
import { url as teoImg } from "@/assets/escola-brilha/ei-mundo1/teo.png.asset.json";
import { url as piuImg } from "@/assets/escola-brilha/ei-mundo1/piu.png.asset.json";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as tristeImg } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as tranquiloImg } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as bravoImg } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as confusoImg } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as ursinhoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * EI03EO08 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Regras da Floresta"
 * Estrela recompensa: ⭐ Convivência
 * Medalha: 🏅 Guardião da Convivência
 */
const aula: Aula = {
  codigo: "EI03EO08",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Regras da Floresta",

  narrativa: {
    titulo: "Regras da Floresta",
    contexto: "O parque da floresta amanheceu BAGUNÇADO! Brinquedos jogados, lixo pelo chão, cada um brincando sem esperar a vez.",
    problema: "A oitava estrela só acende quando os amigos aprendem a seguir REGRAS. Sem regras, ninguém consegue brincar em paz.",
    convite: "Vamos organizar as regras da floresta juntos?",
  },

  conhecimentosPrevios: ["Esperar a vez.", "Guardar brinquedo depois de usar.", "Não jogar lixo no chão."],

  missao: "Descobrir que REGRAS ajudam todo mundo a brincar bem, sem brigar.",

  objetivos: ["Reconhecer o que PODE e o que NÃO PODE.", "Perceber que regras servem pra proteger todos."],

  motivacao: "Regra não é chatice — é um combinado pra ninguém sair machucado nem triste.",

  explicacao: "REGRAS são combinados pra viver junto:\n\n• PODE: brincar, dividir, ajudar, esperar a vez.\n• NÃO PODE: bater, empurrar, tomar sem pedir, jogar lixo.\n\nSem regras, tudo vira BAGUNÇA. Com regras, todo mundo brinca em paz.",

  explicacaoAtiva: [
    { texto: "Este é o parque bagunçado. Precisa ser organizado!", imagem: arvoreImg, imagemAlt: "Parque" },
    { texto: "Uma regra: guardar o brinquedo. Toque no ursinho!", imagem: ursinhoImg, imagemAlt: "Guardar" },
    { texto: "Outra regra: esperar a vez na fila.", imagem: corujaImg, imagemAlt: "Coruja organizando", checagem: { pergunta: "Regras existem pra…", opcoes: ["Todo mundo brincar bem", "Atrapalhar a brincadeira"], correta: 0, explicacao: "Regras protegem — não atrapalham." } }
  ],

  explicacoesNiveis: {
    nivel1: "Regra é combinado pra brincar sem brigar.",
    nivel2: "Esperar a vez, guardar brinquedo, não bater — tudo é regra.",
    nivel3: "Regras servem pra proteger a mim e aos amigos.",
    nivel4: "Em casa e na escola tem regras diferentes — todas são importantes.",
  },

  exemploResolvido: {
    enunciado: "Na floresta tem 3 regras: esperar a vez, guardar brinquedo, não jogar lixo. Quantas regras?",
    passos: ["Toque em cada regra.", "Conte: 1, 2, 3."],
    resposta: "3 regras principais da floresta.",
    interativo: { tipo: "contagem", imagemUrl: corujaImg, quantidade: 3, nomeItem: "regra", nomeItemPlural: "regras", pergunta: "Quantas regras a Coruja ensinou?" },
  },

  atividadeGuiada: {
    enunciado: "3 combinados aparecem em fila. Qual está no MEIO?",
    resposta: "'Guardar brinquedo' está no meio.",
    explicacao: "Esperar a vez (1º), Guardar brinquedo (2º), Não jogar lixo (3º).",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Esperar vez", imagemUrl: corujaImg, posicao: 1 }, { nome: "Guardar brinquedo", imagemUrl: ursinhoImg, posicao: 2 }, { nome: "Não jogar lixo", imagemUrl: florImg, posicao: 3 }],
      respostaCerta: "Guardar brinquedo",
    },
  },

  exercicios: [
    { enunciado: "🙋 Vários amigos querem o balanço. O que fazer?", resposta: "Esperar a vez — cada um brinca um tempinho.", dica: "Fila é justiça." },
    { enunciado: "🧸 Terminou de brincar. E agora?", resposta: "Guardar o brinquedo no lugar dele.", dica: "Guardar deixa tudo organizado." },
    { enunciado: "🌳 Achei lixo no chão. O que faço?", resposta: "Pego e jogo no lixo. Floresta limpa é floresta feliz.", dica: "Cuidar do lugar é regra também." }
  ],

  desafio: {
    enunciado: "3 situações no parque. Diga: PODE ou NÃO PODE?",
    resposta: "Regras claras deixam a brincadeira gostosa pra todos.",
    visual: {
      cena: [{ personagem: "Esperar vez", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" }, { personagem: "Tomar brinquedo", itemImagemUrl: confusoImg, quantidade: 1, cor: "#F87171" }, { personagem: "Jogar lixo", itemImagemUrl: tristeImg, quantidade: 1, cor: "#94A3B8" }],
      perguntas: [{ pergunta: "Esperar a vez no balanço.", opcoes: ["PODE", "NÃO PODE"], correta: 0, explicacao: "Esperar é regra boa." }, { pergunta: "Tomar o brinquedo do amigo sem pedir.", opcoes: ["PODE", "NÃO PODE"], correta: 1, explicacao: "Tomar sem pedir NÃO PODE." }, { pergunta: "Jogar lixo na grama.", opcoes: ["PODE", "NÃO PODE"], correta: 1, explicacao: "Lixo vai no lixo, NÃO na grama." }],
    },
  },

  revisao: {
    pontos: ["Regras são combinados pra viver junto.", "PODE: brincar, dividir, esperar a vez.", "NÃO PODE: bater, tomar, sujar.", "Regras protegem todo mundo."],
    dica: "Em casa, pergunte: 'quais são as nossas regras?'",
  },

  quiz: [
    { pergunta: "Regras servem pra…", opcoes: ["Todo mundo brincar bem", "Chatear os amigos"], correta: 0, explicacao: "Regras protegem.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja explicando" } },
    { pergunta: "Tomar brinquedo sem pedir é…", opcoes: ["PODE", "NÃO PODE"], correta: 1, explicacao: "NÃO PODE — precisa pedir.", visual: { tipo: "comparar", lados: [{ imagemUrl: confusoImg, quantidade: 1, rotulo: "Não pode", cor: "#F87171" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Pedir emprestado", cor: "#34D399" }] } },
    { pergunta: "Quantas regras principais aprendemos?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 regras: esperar, guardar, não sujar.", visual: { tipo: "grupos", grupos: [{ imagemUrl: corujaImg, quantidade: 1, rotulo: "Esperar" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Guardar" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Não sujar" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião da Convivência! A OITAVA ESTRELA ⭐ acendeu. Missão em Casa: escolha 1 regra da sua casa pra seguir bem hoje.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que até nas formigas existem regras? Cada formiga tem uma função — carregar, cavar, cuidar — e por isso o formigueiro funciona tão bem!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · As regras da floresta", instrucao: "A Coruja Sábia ensinou 3 combinados.", grupos: [{ imagemUrl: corujaImg, quantidade: 1, rotulo: "Esperar" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Guardar" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Não sujar" }], pergunta: "Quantas regras foram ensinadas?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 regras — todas importantes!", erro: "Aponte cada uma." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos seguindo as regras", instrucao: "Estes amigos estão seguindo as regras.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi na fila" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi guardando" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo limpando" }], pergunta: "Quantos amigos seguem as regras?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 amigos = floresta em paz.", erro: "Lupi, Fifi, Téo." },
    { tipo: "ligar", titulo: "Fase 3 · Cada regra tem uma atitude", instrucao: "Ligue a regra à atitude que combina.", pares: [{ a: "Esperar a vez", b: "fila do balanço", aImagem: corujaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }, { a: "Guardar brinquedo", b: "ursinho no lugar", aImagem: ursinhoImg, aQuantidade: 1, bImagem: casaImg, bQuantidade: 1 }, { a: "Não jogar lixo", b: "flor no jardim", aImagem: florImg, aQuantidade: 1, bImagem: arvoreImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Cada amigo, sua regra cumprida", instrucao: "Dê 1 coração pra cada amigo que cumpriu a regra.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Lupi (esperou)", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi (guardou)", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo (limpou)", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "Coração pro Lupi", alvo: "Lupi (esperou)" }, { item: "Coração pra Fifi", alvo: "Fifi (guardou)" }, { item: "Coração pro Téo", alvo: "Téo (limpou)" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Esperar a vez é…", opcoes: ["PODE", "NÃO PODE"], correta: 0, explicacao: "PODE — é regra boa.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Esperar" } }, { pergunta: "Jogar lixo na grama é…", opcoes: ["PODE", "NÃO PODE"], correta: 1, explicacao: "NÃO PODE.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Lixo no chão" } }],
    medio: [{ pergunta: "Guardar o brinquedo depois é…", opcoes: ["Regra boa", "Chatice"], correta: 0, explicacao: "É regra que ajuda todos.", visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Guardado" } }, { pergunta: "Bater no amigo é…", opcoes: ["Nunca pode", "Pode às vezes"], correta: 0, explicacao: "Bater NUNCA pode.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bater não" } }],
    dificil: [{ pergunta: "Se ninguém seguisse regras, como seria?", opcoes: ["Bagunça total", "Melhor pra todos"], correta: 0, explicacao: "Sem regras vira bagunça.", visual: { tipo: "comparar", lados: [{ imagemUrl: confusoImg, quantidade: 1, rotulo: "Sem regras", cor: "#F87171" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Com regras", cor: "#34D399" }] } }, { pergunta: "Regras servem pra…", opcoes: ["Proteger a mim e ao amigo", "Só me chatear"], correta: 0, explicacao: "Protegem todos.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Proteção" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO09",
    titulo: "Trabalhar em Grupo",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
