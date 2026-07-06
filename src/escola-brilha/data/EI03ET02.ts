import type { Aula } from "../types";
import sementeImg from "@/assets/neuro-treino/objetos/semente.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import velaImg from "@/assets/neuro-treino/objetos/vela.png";
import fogoImg from "@/assets/neuro-treino/objetos/fogo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03ET02 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 2: Observar mudanças em materiais (experimentos)
 */
const aula: Aula = {
  codigo: "EI03ET02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "As Coisas Mudam!",

  narrativa: {
    titulo: "A floresta parou no tempo",
    contexto: "Na floresta, nada mais muda: a semente não vira flor, a chuva não molha, a vela não derrete.",
    problema: "Pra tudo voltar a se transformar, as crianças precisam OBSERVAR o que acontece com as coisas.",
    convite: "Vamos ver o mundo se transformar?",
  },

  conhecimentosPrevios: ["Já viu chover.", "Já viu uma planta crescer.", "Sabe que o gelo derrete."],

  missao: "Descobrir que as coisas se TRANSFORMAM: semente vira flor, chuva molha, sol seca, fogo derrete.",

  objetivos: [
    "Observar transformações da natureza.",
    "Relacionar causa (chuva) e efeito (molhar).",
    "Descrever mudanças com palavras simples.",
  ],

  explicacao: "As coisas MUDAM o tempo todo:\n\n• A SEMENTE vira FLOR quando ganha água e sol.\n• A CHUVA MOLHA a terra.\n• O SOL SECA a roupa.\n• A VELA DERRETE com o fogo.\n\nQuando algo muda de um jeito pra outro, chamamos de TRANSFORMAÇÃO.",

  explicacaoAtiva: [
    { texto: "A sementinha dorme na terra…", imagem: sementeImg, imagemAlt: "Semente" },
    { texto: "Com água e sol, ela vira FLOR!", imagem: florImg, imagemAlt: "Flor" },
    {
      texto: "E depois vira uma ÁRVORE grande.",
      imagem: arvoreImg,
      imagemAlt: "Árvore",
      checagem: {
        pergunta: "O que a semente precisa pra crescer?",
        opcoes: ["Água e sol", "Vento"],
        correta: 0,
        explicacao: "Água e sol fazem a planta crescer.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Transformar é mudar de um jeito pra outro.",
    nivel2: "A semente vira flor. A chuva molha. O sol seca.",
    nivel3: "Toda transformação tem um MOTIVO (água, calor, tempo).",
    nivel4: "Observar mudanças ajuda a entender a natureza.",
  },

  exemploResolvido: {
    enunciado: "Quantas flores nasceram no jardim?",
    passos: ["Toque na primeira flor.", "Toque na segunda.", "Toque na terceira. 1, 2, 3 flores!"],
    resposta: "3 flores nasceram das sementes.",
    interativo: { tipo: "contagem", imagemUrl: florImg, quantidade: 3, nomeItem: "flor", nomeItemPlural: "flores", pergunta: "Quantas flores?" },
  },

  atividadeGuiada: {
    enunciado: "O que MOLHA a terra?",
    resposta: "A chuva.",
    explicacao: "Quando chove, a água cai do céu e molha tudo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "O que molha?",
      opcoes: [
        { nome: "Chuva", imagemUrl: chuvaImg },
        { nome: "Sol", imagemUrl: solImg },
        { nome: "Fogo", imagemUrl: fogoImg },
      ],
      respostaCerta: "Chuva",
    },
  },

  exercicios: [
    { enunciado: "🌱 A semente vira o quê?", resposta: "Flor / planta!", dica: "Precisa de água e sol." },
    { enunciado: "🌧️ A chuva faz o quê?", resposta: "Molha!", dica: "Deixa tudo cheio de água." },
    { enunciado: "🕯️ A vela com fogo?", resposta: "Derrete.", dica: "A cera fica mole." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o que causa cada mudança.",
    resposta: "Água faz semente virar flor, sol seca a chuva, fogo derrete a vela.",
    visual: {
      cena: [
        { personagem: "Chuva", itemImagemUrl: chuvaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Sol", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Fogo", itemImagemUrl: fogoImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quem faz a semente crescer?", opcoes: ["Chuva e sol", "Fogo"], correta: 0, explicacao: "Água e sol juntos." },
        { pergunta: "Quem SECA a roupa?", opcoes: ["Sol", "Chuva"], correta: 0, explicacao: "O calor do sol evapora a água." },
        { pergunta: "Quem DERRETE a vela?", opcoes: ["Fogo", "Chuva"], correta: 0, explicacao: "O calor do fogo derrete a cera." },
      ],
    },
  },

  revisao: {
    pontos: [
      "As coisas se transformam.",
      "Semente + água + sol = flor.",
      "Chuva molha; sol seca.",
      "Calor derrete (vela, gelo).",
    ],
    dica: "Em casa: molhe a terra de uma planta e observe amanhã.",
  },

  quiz: [
    { pergunta: "O que faz a semente virar flor?", opcoes: ["Água e sol", "Fogo"], correta: 0, explicacao: "Água e sol.", visual: { tipo: "itens", imagemUrl: sementeImg, quantidade: 1, rotulo: "Semente" } },
    { pergunta: "O que MOLHA?", opcoes: ["Chuva", "Sol"], correta: 0, explicacao: "A chuva molha.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "Chuva" } },
    { pergunta: "O que DERRETE a vela?", opcoes: ["Fogo", "Chuva"], correta: 0, explicacao: "O fogo derrete.", visual: { tipo: "itens", imagemUrl: velaImg, quantidade: 1, rotulo: "Vela" } },
  ],

  conclusao: "🏅 Você fez a floresta se transformar de novo! Missão em Casa: observe uma planta durante 3 dias.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A borboleta antes de voar era uma lagartinha — ela se transforma dentro de um casulinho!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas sementes?", instrucao: "Toque em cada semente.", grupos: [{ imagemUrl: sementeImg, quantidade: 3, rotulo: "Sementes" }], pergunta: "Quantas sementes?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 sementes.", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas flores nasceram?", instrucao: "Toque em cada flor.", grupos: [{ imagemUrl: florImg, quantidade: 3, rotulo: "Flores" }], pergunta: "Quantas flores?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 flores!", erro: "1, 2, 3." },
    { tipo: "ligar", titulo: "Fase 3 · O que causa a mudança", instrucao: "Ligue a causa ao efeito.", pares: [
      { a: "Chuva", b: "Molha", aImagem: chuvaImg, aQuantidade: 1 },
      { a: "Sol", b: "Seca", aImagem: solImg, aQuantidade: 1 },
      { a: "Fogo", b: "Derrete", aImagem: fogoImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Antes e depois", instrucao: "Toque na estrela e depois no que a semente vira.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Semente", cor: "#A78BFA", capacidade: 1, imagemUrl: sementeImg },
      { nome: "Flor", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
      { nome: "Árvore", cor: "#22C55E", capacidade: 1, imagemUrl: arvoreImg },
    ], pares: [
      { item: "Começo", alvo: "Semente" },
      { item: "Meio", alvo: "Flor" },
      { item: "Fim", alvo: "Árvore" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Chuva faz o quê?", opcoes: ["Molha", "Seca"], correta: 0, explicacao: "Molha tudo.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "Chuva" } },
      { pergunta: "Sol faz o quê com a roupa molhada?", opcoes: ["Seca", "Molha"], correta: 0, explicacao: "Seca com o calor.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Sol" } },
    ],
    medio: [
      { pergunta: "Semente + água + sol = ?", opcoes: ["Flor", "Pedra"], correta: 0, explicacao: "Vira flor.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } },
      { pergunta: "Vela com fogo?", opcoes: ["Derrete", "Cresce"], correta: 0, explicacao: "A cera derrete.", visual: { tipo: "itens", imagemUrl: velaImg, quantidade: 1, rotulo: "Vela" } },
    ],
    dificil: [
      { pergunta: "O que vem ANTES da flor?", opcoes: ["Semente", "Árvore"], correta: 0, explicacao: "Primeiro a semente.", visual: { tipo: "itens", imagemUrl: sementeImg, quantidade: 1, rotulo: "Semente" } },
      { pergunta: "O que vem DEPOIS da flor grande?", opcoes: ["Árvore", "Semente"], correta: 0, explicacao: "Cresce e vira árvore.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET03", titulo: "Fontes de informação sobre a natureza" },
};

export default aula;
