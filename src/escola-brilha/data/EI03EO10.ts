import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import confusoImg from "@/assets/brilha-vida/emocoes/confuso.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";

/**
 * EI03EO10 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Festa da Amizade"
 * Estrela recompensa: ⭐ Guardião da Amizade
 * Medalha: 🏅 Guardião SUPREMO da Amizade
 */
const aula: Aula = {
  codigo: "EI03EO10",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Festa da Amizade",

  narrativa: {
    titulo: "Festa da Amizade",
    contexto: "A Floresta Encantada tá TODA colorida de novo! As 9 estrelas da Árvore da Amizade brilham. A Coruja Sábia convida: 'É hora da FESTA da Amizade!'",
    problema: "A décima e última estrela só acende depois de uma grande festa onde os amigos celebram TUDO que aprenderam.",
    convite: "Bora fazer a maior festa da floresta!",
  },

  conhecimentosPrevios: ["Lembrar dos amigos aprendidos nas 9 aulas.", "Reconhecer as 9 estrelas conquistadas.", "Sentir orgulho da própria jornada."],

  missao: "Celebrar TUDO que aprendemos: identidade, família, amizade, emoções, compartilhar, respeito, ajuda, regras, grupo.",

  objetivos: ["Rever os aprendizados do lote.", "Coletar as estrelas finais."],

  motivacao: "Chegar até aqui é motivo de festa! Você virou um verdadeiro Guardião da Amizade.",

  explicacao: "HOJE É FESTA:\n\n• 9 estrelas já foram acesas.\n• A décima estrela é a MAIOR: a estrela do GUARDIÃO.\n• Todos os amigos da floresta estão convidados.\n• Tem bolo, balões, música e muitos abraços.\n\nCada amizade é uma estrela. E hoje a gente celebra todas.",

  explicacaoAtiva: [
    { texto: "A floresta voltou a brilhar. Toque na árvore mágica!", imagem: arvoreImg, imagemAlt: "Floresta" },
    { texto: "Tem BOLO na festa. Vai ter pra todo mundo!", imagem: boloImg, imagemAlt: "Bolo" },
    { texto: "Balões coloridos pra cada amigo!", imagem: balaoImg, imagemAlt: "Balão", checagem: { pergunta: "Quantas aulas você concluiu pra chegar na festa?", opcoes: ["9 aulas", "3 aulas"], correta: 0, explicacao: "9 aulas concluídas — hoje é a 10ª, a festa!" } }
  ],

  explicacoesNiveis: {
    nivel1: "Hoje é festa da amizade — a maior comemoração.",
    nivel2: "Todos os amigos vieram: Lupi, Fifi, Téo, Piu, Coruja, Brilha.",
    nivel3: "Cada aula acendeu uma estrela. Agora a Árvore da Amizade tá completa.",
    nivel4: "A missão continua: levar tudo isso pra vida real, na escola, na casa, com os amigos de verdade.",
  },

  exemploResolvido: {
    enunciado: "Na festa apareceram 5 amigos: Brilha, Lupi, Fifi, Téo e Piu. Quantos estão comemorando?",
    passos: ["Toque em cada amigo.", "Conte: 1, 2, 3, 4, 5!"],
    resposta: "5 amigos na festa da amizade!",
    interativo: { tipo: "contagem", imagemUrl: brilhaImg, quantidade: 5, nomeItem: "amigo na festa", nomeItemPlural: "amigos na festa", pergunta: "Quantos amigos vieram pra festa?" },
  },

  atividadeGuiada: {
    enunciado: "3 presentes de festa aparecem em fila. Qual está no MEIO?",
    resposta: "O bolo está no meio — o coração da festa.",
    explicacao: "Balão (1º), Bolo (2º), Presente (3º).",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Balão", imagemUrl: balaoImg, posicao: 1 }, { nome: "Bolo", imagemUrl: boloImg, posicao: 2 }, { nome: "Presente", imagemUrl: presenteImg, posicao: 3 }],
      respostaCerta: "Bolo",
    },
  },

  exercicios: [
    { enunciado: "🎉 Você conseguiu chegar na festa. Como se sente?", resposta: "Feliz, orgulhoso e com o coração cheio.", dica: "Você merece essa alegria!" },
    { enunciado: "⭐ Quantas estrelas você acendeu na Árvore da Amizade?", resposta: "10 estrelas — uma por aula.", dica: "Cada estrela é um aprendizado." },
    { enunciado: "🎂 Na festa, o bolo é dividido entre todos. Isso ensina o quê?", resposta: "Compartilhar até no dia da festa — amizade é isso.", dica: "Festa de amigo é festa de todos." }
  ],

  desafio: {
    enunciado: "3 amigos aparecem na cena final. Escolha quem representa cada aprendizado.",
    resposta: "Cada amigo carrega uma lição das nossas aulas.",
    visual: {
      cena: [{ personagem: "Coruja Sábia (regras)", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" }, { personagem: "Fifi (amizade)", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }, { personagem: "Brilha (identidade)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" }],
      perguntas: [{ pergunta: "Quem ensinou as REGRAS?", opcoes: ["Coruja Sábia", "Fifi", "Brilha"], correta: 0, explicacao: "Coruja Sábia = regras da floresta." }, { pergunta: "Quem representa a AMIZADE que divide?", opcoes: ["Coruja Sábia", "Fifi", "Brilha"], correta: 1, explicacao: "Fifi = amizade e alegria." }, { pergunta: "Quem começou nossa jornada de IDENTIDADE?", opcoes: ["Coruja Sábia", "Fifi", "Brilha"], correta: 2, explicacao: "Brilha = 'quem sou eu'." }],
    },
  },

  revisao: {
    pontos: ["Aprendemos: identidade, família, amizade, emoções.", "Aprendemos: compartilhar, respeitar, ajudar.", "Aprendemos: seguir regras e trabalhar em grupo.", "Hoje celebramos TUDO na Festa da Amizade!"],
    dica: "Conta pra alguém da família tudo que você aprendeu nas 10 aulas.",
  },

  quiz: [
    { pergunta: "Quantas estrelas a Árvore da Amizade recebeu?", opcoes: ["5", "10", "3"], correta: 1, explicacao: "10 estrelas — uma por aula.", visual: { tipo: "grupos", grupos: [{ imagemUrl: estrelaImg, quantidade: 10, rotulo: "Estrelas", cor: "#FBBF24" }] } },
    { pergunta: "Amizade se comemora dividindo…", opcoes: ["Bolo, sorriso, presente", "Nada"], correta: 0, explicacao: "Amizade se comemora dividindo tudo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Sorriso" }, { imagemUrl: presenteImg, quantidade: 1, rotulo: "Presente" }] } },
    { pergunta: "Você virou um…", opcoes: ["Guardião da Amizade", "Não sei"], correta: 0, explicacao: "É isso! Guardião da Amizade!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Guardião!" } }
  ],

  conclusao: "🏅 MEDALHA FINAL: Guardião SUPREMO da Amizade! A DÉCIMA ESTRELA ⭐ brilha no céu da floresta! Você concluiu o Mundo 1 — Amigos da Floresta Encantada. Missão em Casa: faça uma festinha simples com a família ou com um amigo pra celebrar a jornada!",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que a palavra AMIZADE vem do latim 'amare' — que quer dizer AMAR? Amigo é o amor que a gente escolhe todo dia. Parabéns, Guardião!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Todos os amigos na festa", instrucao: "Todos os amigos que a gente conheceu vieram pra festa.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos vieram celebrar?", opcoes: ["4", "5", "6"], correta: 2, acerto: "6 amigos — a floresta inteira!", erro: "Aponte todos: Brilha, Lupi, Fifi, Téo, Piu, Coruja." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Coletar as estrelas conquistadas", instrucao: "Toque em cada estrela da Árvore da Amizade.", grupos: [{ imagemUrl: estrelaImg, quantidade: 10, rotulo: "Estrelas conquistadas" }], pergunta: "Quantas estrelas a árvore recebeu?", opcoes: ["8", "9", "10"], correta: 2, acerto: "10 estrelas! Missão CONCLUÍDA.", erro: "Conte devagar: 10 estrelas no total." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, uma lição da jornada", instrucao: "Ligue cada amigo à lição que ele ensinou.", pares: [{ a: "Brilha", b: "quem sou eu", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }, { a: "Coruja Sábia", b: "regras da floresta", aImagem: corujaImg, aQuantidade: 1, bImagem: livroImg, bQuantidade: 1 }, { a: "Fifi", b: "amizade e alegria", aImagem: fifiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Téo", b: "calma e paciência", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Presentes da festa pra cada amigo", instrucao: "Cada amigo ganha 1 presente de amizade!", itemImagem: presenteImg, alvosVisuais: [{ nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }, { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg }], pares: [{ item: "Presente Brilha", alvo: "Brilha" }, { item: "Presente Lupi", alvo: "Lupi" }, { item: "Presente Fifi", alvo: "Fifi" }, { item: "Presente Téo", alvo: "Téo" }, { item: "Presente Piu", alvo: "Piu" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Hoje é dia de…", opcoes: ["Festa da Amizade", "Aula normal"], correta: 0, explicacao: "É festa!", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "Festa" } }, { pergunta: "Quantas estrelas a árvore tem?", opcoes: ["5", "10"], correta: 1, explicacao: "10 estrelas!", visual: { tipo: "grupos", grupos: [{ imagemUrl: estrelaImg, quantidade: 10, rotulo: "Estrelas", cor: "#FBBF24" }] } }],
    medio: [{ pergunta: "Na festa a gente divide o bolo. Isso é…", opcoes: ["Compartilhar", "Egoísmo"], correta: 0, explicacao: "Dividir na festa é lindo.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" } }, { pergunta: "Todos os amigos vieram. Como estão?", opcoes: ["Felizes", "Bravos"], correta: 0, explicacao: "Todos felizes!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } }],
    dificil: [{ pergunta: "Você concluiu quantas aulas?", opcoes: ["5", "10"], correta: 1, explicacao: "10 aulas — Mundo 1 completo!", visual: { tipo: "grupos", grupos: [{ imagemUrl: estrelaImg, quantidade: 10, rotulo: "Aulas concluídas", cor: "#FBBF24" }] } }, { pergunta: "Amizade é o quê, no fim?", opcoes: ["Amor que a gente escolhe", "Chatice"], correta: 0, explicacao: "Amor escolhido todos os dias.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor" } }],
  },

  proximaHabilidade: {
    codigo: "EI-02",
    titulo: "Próximo mundo desbloqueado!",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
