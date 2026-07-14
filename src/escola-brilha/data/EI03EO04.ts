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
 * EI03EO04 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Minhas Emoções"
 * Estrela recompensa: ⭐ Emoções
 * Medalha: 🏅 Guardião das Emoções
 */
const aula: Aula = {
  codigo: "EI03EO04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Minhas Emoções",

  narrativa: {
    titulo: "Minhas Emoções",
    contexto: "O Brilha acordou estranho. Um dia ele tá pulando de alegria; outro dia tá com a carinha caída. A Coruja Sábia explica: 'Isso são EMOÇÕES — todo mundo sente'.",
    problema: "A quarta estrela só acende quando a criança reconhece o que está sentindo. Bora ajudar o Brilha a colocar nome nas emoções?",
    convite: "Vamos conhecer as carinhas dos sentimentos!",
  },

  conhecimentosPrevios: ["Chorar quando está triste.", "Rir quando está feliz.", "Fazer bico quando está bravo."],

  missao: "Reconhecer as principais emoções (feliz, triste, bravo, tranquilo, confuso) e saber que TODAS são normais.",

  objetivos: ["Nomear o que estou sentindo.", "Aceitar que todo sentimento é válido."],

  motivacao: "Sentir é humano. Não tem sentimento errado — tem só sentimento que precisa ser entendido.",

  explicacao: "EMOÇÕES são o que a gente sente por dentro:\n\n• FELIZ 😊 — quando tá tudo bem.\n• TRISTE 😢 — quando algo dói.\n• BRAVO 😠 — quando algo é injusto.\n• TRANQUILO 😌 — quando tá calminho.\n• CONFUSO 🤔 — quando não entende.\n\nTodas essas emoções são NORMAIS. O importante é falar sobre elas.",

  explicacaoAtiva: [
    { texto: "Esta é a carinha FELIZ. Quando você sorri, você tá assim!", imagem: felizImg, imagemAlt: "Carinha feliz" },
    { texto: "Esta é a carinha TRISTE. Todo mundo fica triste às vezes.", imagem: tristeImg, imagemAlt: "Carinha triste" },
    { texto: "Esta é a carinha BRAVA. Ficar bravo também é normal.", imagem: bravoImg, imagemAlt: "Carinha brava", checagem: { pergunta: "Ficar triste às vezes é errado?", opcoes: ["Não, todo mundo fica triste", "Sim, é errado"], correta: 0, explicacao: "Isso! Tristeza é normal — faz parte de sentir." } }
  ],

  explicacoesNiveis: {
    nivel1: "Emoção é o que eu sinto por dentro.",
    nivel2: "Feliz sorri, triste chora, bravo faz bico. Cada carinha mostra uma emoção.",
    nivel3: "Toda emoção passa. Depois do triste, vem o feliz de novo.",
    nivel4: "Falar 'eu tô triste' ajuda a passar mais rápido — é bom pedir abraço quando precisa.",
  },

  exemploResolvido: {
    enunciado: "O Brilha viu um sorvete e sorriu. Depois derrubou o sorvete e chorou. Quantas emoções apareceram?",
    passos: ["Aponte pra carinha feliz.", "Aponte pra carinha triste.", "Conte: 1, 2 emoções."],
    resposta: "2 emoções: primeiro FELIZ, depois TRISTE.",
    interativo: { tipo: "contagem", imagemUrl: felizImg, quantidade: 2, nomeItem: "emoção", nomeItemPlural: "emoções", pergunta: "Quantas emoções o Brilha sentiu?" },
  },

  atividadeGuiada: {
    enunciado: "Três carinhas apareceram em fila. Qual está no MEIO?",
    resposta: "A carinha TRISTE está no meio.",
    explicacao: "Feliz (1º), Triste (2º) e Bravo (3º). A triste é a do meio.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Feliz", imagemUrl: felizImg, posicao: 1 }, { nome: "Triste", imagemUrl: tristeImg, posicao: 2 }, { nome: "Bravo", imagemUrl: bravoImg, posicao: 3 }],
      respostaCerta: "Triste",
    },
  },

  exercicios: [
    { enunciado: "😊 Quando você ganha um presente, qual carinha faz?", resposta: "Faço a carinha FELIZ — sorriso grande e olhos brilhando.", dica: "Pense na última vez que ganhou algo legal." },
    { enunciado: "😢 Se um amigo pega seu brinquedo sem pedir, você fica como?", resposta: "Bravo ou triste — e tudo bem sentir isso.", dica: "Falar 'não gostei' ajuda." },
    { enunciado: "😌 Quando você tá deitado escutando música calma, é qual emoção?", resposta: "TRANQUILO — o coração tá em paz.", dica: "Tranquilo é um sentimento gostoso." }
  ],

  desafio: {
    enunciado: "Situações apareceram. Toque na carinha da emoção certa!",
    resposta: "Cada situação combina com uma emoção diferente.",
    visual: {
      cena: [{ personagem: "Feliz", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Triste", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" }, { personagem: "Bravo", itemImagemUrl: bravoImg, quantidade: 1, cor: "#F87171" }],
      perguntas: [{ pergunta: "O Brilha ganhou um abraço da Mamãe. Qual carinha?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Abraço deixa FELIZ." }, { pergunta: "A Fifi perdeu o balão. Qual carinha?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 1, explicacao: "Perder algo deixa TRISTE." }, { pergunta: "O Lupi teve o brinquedo tomado sem pedir. Qual carinha?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 2, explicacao: "Injustiça deixa BRAVO — e é normal." }],
    },
  },

  revisao: {
    pontos: ["Emoções são o que sinto por dentro.", "Feliz, triste, bravo, tranquilo e confuso — todos são normais.", "Toda emoção PASSA depois de um tempo.", "Falar do que sinto ajuda a me sentir melhor."],
    dica: "Toda noite, pergunte a si mesmo: 'como eu tô me sentindo agora?'.",
  },

  quiz: [
    { pergunta: "Ganhar abraço deixa a gente…", opcoes: ["Feliz", "Triste"], correta: 0, explicacao: "Abraço = felicidade.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } },
    { pergunta: "Perder um brinquedo pode deixar a gente…", opcoes: ["Feliz", "Triste"], correta: 1, explicacao: "Perder algo dói — é normal ficar triste.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" } },
    { pergunta: "Quantas emoções básicas estudamos hoje?", opcoes: ["3", "4", "5"], correta: 2, explicacao: "Feliz, triste, bravo, tranquilo, confuso — 5 emoções.", visual: { tipo: "grupos", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" }, { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" }, { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" }, { imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião das Emoções! A QUARTA ESTRELA ⭐ acendeu. Missão em Casa: hoje à noite, diga pra alguém da família como você tá se sentindo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que existem MAIS DE 20 emoções que a gente sente? Além de feliz e triste, tem orgulho, curiosidade, alívio e até 'saudade' — que quase só o português tem palavra pra isso!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · As carinhas dos sentimentos", instrucao: "Estas são as principais emoções.", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" }, { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" }, { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" }, { imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" }], pergunta: "Quantas carinhas de sentimento tem aqui?", opcoes: ["3", "4", "5"], correta: 2, acerto: "5 carinhas — todas são normais!", erro: "Conte uma por uma." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Só as carinhas felizes", instrucao: "Toque só nas carinhas que mostram alegria/calma.", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" }, { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" }], pergunta: "Quantas carinhas boas apareceram?", opcoes: ["1", "2", "3"], correta: 1, acerto: "2 carinhas de emoções gostosas.", erro: "Feliz e tranquilo — 2 carinhas." },
    { tipo: "ligar", titulo: "Fase 3 · Combinar situação com emoção", instrucao: "Ligue cada situação à emoção certa.", pares: [{ a: "Ganhou presente", b: "carinha feliz", aImagem: presenteImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 }, { a: "Perdeu o balão", b: "carinha triste", aImagem: balaoImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 }, { a: "Está deitado no sol", b: "carinha tranquila", aImagem: solImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Um coração pra cada emoção", instrucao: "Toda emoção merece cuidado. Dê 1 coração pra cada carinha.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Feliz", cor: "#FBBF24", capacidade: 1, imagemUrl: felizImg }, { nome: "Triste", cor: "#60A5FA", capacidade: 1, imagemUrl: tristeImg }, { nome: "Bravo", cor: "#F87171", capacidade: 1, imagemUrl: bravoImg }, { nome: "Tranquilo", cor: "#34D399", capacidade: 1, imagemUrl: tranquiloImg }], pares: [{ item: "Coração pra Feliz", alvo: "Feliz" }, { item: "Coração pra Triste", alvo: "Triste" }, { item: "Coração pra Bravo", alvo: "Bravo" }, { item: "Coração pra Tranquilo", alvo: "Tranquilo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Qual é a carinha FELIZ?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Sorriso grande = feliz.", visual: { tipo: "grupos", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" }, { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" }] } }, { pergunta: "Qual é a carinha TRISTE?", opcoes: ["Feliz", "Triste", "Tranquilo"], correta: 1, explicacao: "Boca pra baixo = triste.", visual: { tipo: "grupos", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" }, { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" }] } }],
    medio: [{ pergunta: "O que sinto quando alguém tira meu brinquedo?", opcoes: ["Bravo", "Feliz"], correta: 0, explicacao: "Injustiça costuma deixar bravo.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" } }, { pergunta: "E quando não entendo o que aconteceu?", opcoes: ["Confuso", "Feliz"], correta: 0, explicacao: "Sem entender = confuso.", visual: { tipo: "itens", imagemUrl: confusoImg, quantidade: 1, rotulo: "Confuso" } }],
    dificil: [{ pergunta: "Ficar triste às vezes é errado?", opcoes: ["Não — tristeza é normal", "Sim, é errado"], correta: 0, explicacao: "Sentir tristeza faz parte de ser humano.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste é normal" } }, { pergunta: "O que ajuda quando eu tô triste?", opcoes: ["Falar com alguém que amo", "Ficar sozinho pra sempre"], correta: 0, explicacao: "Compartilhar o sentimento ajuda muito.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Falar ajuda" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO05",
    titulo: "Compartilhar — dividir com carinho",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
