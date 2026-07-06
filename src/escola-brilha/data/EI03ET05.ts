import type { Aula } from "../types";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import joaninhaImg from "@/assets/neuro-treino/objetos/joaninha.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03ET05 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 5: Classificar por semelhanças e diferenças
 */
const aula: Aula = {
  codigo: "EI03ET05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Separar em Grupos",

  narrativa: {
    titulo: "A floresta bagunçada",
    contexto: "Na floresta, as coisas ficaram TODAS MISTURADAS: bichos, frutas e brinquedos no mesmo monte.",
    problema: "Pra organizar, a gente precisa SEPARAR EM GRUPOS: o que é parecido fica junto.",
    convite: "Vamos arrumar a floresta?",
  },

  conhecimentosPrevios: ["Sabe apontar bichos e frutas.", "Reconhece que cachorro é bicho.", "Sabe o que é maçã."],

  missao: "Classificar em GRUPOS: bichos com bichos, frutas com frutas, brinquedos com brinquedos.",

  objetivos: [
    "Separar objetos em grupos por semelhança.",
    "Explicar por que dois itens pertencem ao mesmo grupo.",
    "Identificar o que NÃO pertence a um grupo.",
  ],

  explicacao: "CLASSIFICAR é SEPARAR o que é PARECIDO:\n\n• BICHOS ficam juntos (cachorro, gato, passarinho).\n• FRUTAS ficam juntas (maçã, banana).\n• BRINQUEDOS ficam juntos (bola).\n\nQuando algo NÃO PERTENCE ao grupo, a gente TIRA.",

  explicacaoAtiva: [
    { texto: "Cachorro é BICHO.", imagem: cachorroImg, imagemAlt: "Cachorro" },
    { texto: "Maçã é FRUTA.", imagem: macaImg, imagemAlt: "Maçã" },
    {
      texto: "Bola é BRINQUEDO.",
      imagem: bolaImg,
      imagemAlt: "Bola",
      checagem: {
        pergunta: "Cachorro fica no grupo de…",
        opcoes: ["Bichos", "Frutas"],
        correta: 0,
        explicacao: "Cachorro é BICHO.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Classificar é juntar o parecido.",
    nivel2: "Cada grupo tem uma REGRA (bichos, frutas, brinquedos).",
    nivel3: "Se algo não segue a regra, sai do grupo.",
    nivel4: "Classificar organiza o mundo em famílias.",
  },

  exemploResolvido: {
    enunciado: "Quantas frutas tem na cesta?",
    passos: ["Toque na maçã: 1.", "Toque na banana: 2.", "São 2 frutas."],
    resposta: "2 frutas.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 2, nomeItem: "fruta", nomeItemPlural: "frutas", pergunta: "Quantas frutas?" },
  },

  atividadeGuiada: {
    enunciado: "Qual destes é FRUTA?",
    resposta: "Maçã.",
    explicacao: "Maçã nasce em árvore e a gente come.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é fruta?",
      opcoes: [
        { nome: "Maçã", imagemUrl: macaImg },
        { nome: "Cachorro", imagemUrl: cachorroImg },
        { nome: "Bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "Maçã",
    },
  },

  exercicios: [
    { enunciado: "🐶 Cachorro é bicho ou fruta?", resposta: "Bicho!", dica: "Late." },
    { enunciado: "🍌 Banana é bicho ou fruta?", resposta: "Fruta.", dica: "É amarela e doce." },
    { enunciado: "⚽ Bola é bicho ou brinquedo?", resposta: "Brinquedo.", dica: "A gente joga." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: coloque cada coisa no grupo certo.",
    resposta: "Bichos com bichos, frutas com frutas.",
    visual: {
      cena: [
        { personagem: "Cachorro", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Maçã", itemImagemUrl: macaImg, quantidade: 1, cor: "#F87171" },
        { personagem: "Bola", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Cachorro vai em qual grupo?", opcoes: ["Bichos", "Frutas"], correta: 0, explicacao: "Bicho." },
        { pergunta: "Maçã vai em qual grupo?", opcoes: ["Frutas", "Brinquedos"], correta: 0, explicacao: "Fruta." },
        { pergunta: "Bola vai em qual grupo?", opcoes: ["Brinquedos", "Bichos"], correta: 0, explicacao: "Brinquedo." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Classificar é juntar o parecido.",
      "Bichos com bichos.",
      "Frutas com frutas.",
      "O que não pertence, sai.",
    ],
    dica: "Em casa: separe seus brinquedos por cor.",
  },

  quiz: [
    { pergunta: "Cachorro é…", opcoes: ["Bicho", "Fruta"], correta: 0, explicacao: "Bicho.", visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro" } },
    { pergunta: "Banana é…", opcoes: ["Fruta", "Brinquedo"], correta: 0, explicacao: "Fruta.", visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana" } },
    { pergunta: "Borboleta é…", opcoes: ["Bicho", "Fruta"], correta: 0, explicacao: "Bicho que voa.", visual: { tipo: "itens", imagemUrl: borboletaImg, quantidade: 1, rotulo: "Borboleta" } },
  ],

  conclusao: "🏅 Você organizou a floresta! Missão em Casa: separe frutas e brinquedos em dois montes.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A joaninha é um bicho da mesma família da borboleta — os dois são INSETOS!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantos bichos?", instrucao: "Toque em cada bicho.", grupos: [{ imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro" }, { imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato" }, { imagemUrl: passaroImg, quantidade: 1, rotulo: "Passarinho" }], pergunta: "Quantos bichos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 bichos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas frutas?", instrucao: "Toque em cada fruta.", grupos: [{ imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" }, { imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana" }], pergunta: "Quantas frutas?", opcoes: ["1", "2", "3"], correta: 1, acerto: "2 frutas!", erro: "1, 2." },
    { tipo: "ligar", titulo: "Fase 3 · Cada um no seu grupo", instrucao: "Ligue.", pares: [
      { a: "Cachorro", b: "Bicho", aImagem: cachorroImg, aQuantidade: 1 },
      { a: "Maçã", b: "Fruta", aImagem: macaImg, aQuantidade: 1 },
      { a: "Bola", b: "Brinquedo", aImagem: bolaImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Separe os grupos", instrucao: "Toque na estrela e depois no grupo certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Bichos", cor: "#FBBF24", capacidade: 2, imagemUrl: gatoImg },
      { nome: "Frutas", cor: "#F87171", capacidade: 2, imagemUrl: bananaImg },
    ], pares: [
      { item: "Cachorro", alvo: "Bichos" },
      { item: "Borboleta", alvo: "Bichos" },
      { item: "Maçã", alvo: "Frutas" },
      { item: "Banana", alvo: "Frutas" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Gato é…", opcoes: ["Bicho", "Brinquedo"], correta: 0, explicacao: "Bicho.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato" } },
      { pergunta: "Maçã é…", opcoes: ["Fruta", "Bicho"], correta: 0, explicacao: "Fruta.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" } },
    ],
    medio: [
      { pergunta: "Joaninha é…", opcoes: ["Bicho", "Fruta"], correta: 0, explicacao: "Bicho pequenininho.", visual: { tipo: "itens", imagemUrl: joaninhaImg, quantidade: 1, rotulo: "Joaninha" } },
      { pergunta: "Bola é…", opcoes: ["Brinquedo", "Fruta"], correta: 0, explicacao: "Brinquedo.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" } },
    ],
    dificil: [
      { pergunta: "Qual NÃO É bicho?", opcoes: ["Banana", "Passarinho"], correta: 0, explicacao: "Banana é fruta.", visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana" } },
      { pergunta: "Qual NÃO É fruta?", opcoes: ["Cachorro", "Maçã"], correta: 0, explicacao: "Cachorro é bicho.", visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET06", titulo: "História pessoal e familiar" },
};

export default aula;
