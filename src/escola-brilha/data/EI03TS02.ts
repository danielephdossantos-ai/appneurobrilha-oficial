import type { Aula } from "../types";
import { url as tintaImg } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";

/**
 * EI03TS02 — Traços, Sons, Cores e Formas
 * Aula 2: Desenhar, pintar e criar
 */
const aula: Aula = {
  codigo: "EI03TS02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Desenhar, Pintar e Criar",

  narrativa: {
    titulo: "As cores sumiram",
    contexto: "A floresta ficou toda CINZA. Nem o sol, nem as flores, nem as árvores têm cor.",
    problema: "Só quem pinta e desenha pode devolver as cores. A gente vai precisar de tinta, pincel e muita imaginação!",
    convite: "Bora colorir a floresta?",
  },

  conhecimentosPrevios: ["Já rabiscou com lápis.", "Sabe o nome de algumas cores.", "Já viu tinta."],

  missao: "Descobrir que dá pra criar arte usando desenho, pintura e cores — e cada obra é única.",

  objetivos: [
    "Reconhecer materiais de arte (tinta, pincel, lápis).",
    "Associar cores a objetos do mundo.",
    "Perceber que cada pessoa cria arte de um jeito diferente.",
  ],

  explicacao: "PINTAR e DESENHAR é criar com as mãos.\n\n• A TINTA dá cor: vermelha, azul, amarela.\n• O PINCEL espalha a tinta no papel.\n• O LÁPIS faz linhas e rabiscos.\n\nCada desenho é UNICO — igual a você. Não existe desenho errado: existe SEU jeito de fazer arte.",

  explicacaoAtiva: [
    { texto: "Olha a lata de tinta! É vermelha e brilhante.", imagem: tintaImg, imagemAlt: "Tinta vermelha" },
    { texto: "O pincel pega a tinta e leva pro papel.", imagem: pincelImg, imagemAlt: "Pincel colorido" },
    {
      texto: "Com tinta vermelha, dá pra pintar um coração!",
      imagem: coracaoImg,
      imagemAlt: "Coração vermelho",
      checagem: {
        pergunta: "O que a gente usa pra ESPALHAR a tinta no papel?",
        opcoes: ["Pincel", "Colher"],
        correta: 0,
        explicacao: "Isso! O pincel espalha a tinta.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Pintar é dar cor. Desenhar é fazer traços.",
    nivel2: "Com pincel e tinta, dá pra pintar o sol amarelo, o coração vermelho, a árvore verde.",
    nivel3: "Cada pessoa desenha diferente — e todo desenho é bonito à sua maneira.",
    nivel4: "A arte serve pra mostrar o que a gente sente, imagina e sonha.",
  },

  exemploResolvido: {
    enunciado: "Vamos pintar 3 flores no jardim!",
    passos: ["Molhe o pincel na tinta.", "Pinte a primeira flor.", "Pinte a segunda. Pinte a terceira. 3 flores coloridas!"],
    resposta: "3 flores prontinhas pra alegrar a floresta.",
    interativo: { tipo: "contagem", imagemUrl: florImg, quantidade: 3, nomeItem: "flor", nomeItemPlural: "flores", pergunta: "Quantas flores foram pintadas?" },
  },

  atividadeGuiada: {
    enunciado: "Qual objeto a gente usa pra PINTAR?",
    resposta: "O pincel (com a tinta).",
    explicacao: "O pincel é feito pra espalhar tinta no papel.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual serve pra pintar?",
      opcoes: [
        { nome: "Pincel", imagemUrl: pincelImg },
        { nome: "Tinta", imagemUrl: tintaImg },
        { nome: "Sol", imagemUrl: solImg },
      ],
      respostaCerta: "Pincel",
    },
  },

  exercicios: [
    { enunciado: "☀️ De que cor é o sol?", resposta: "Amarelo.", dica: "Olha pro céu de manhã." },
    { enunciado: "❤️ De que cor é um coração?", resposta: "Vermelho.", dica: "A cor do amor." },
    { enunciado: "🌳 De que cor são as folhas da árvore?", resposta: "Verdes.", dica: "Verde igual grama." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada coisa da natureza tem sua cor. Descubra qual pintar em cada uma.",
    resposta: "Sol amarelo, flor colorida, árvore verde.",
    visual: {
      cena: [
        { personagem: "Sol", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Flor", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Árvore", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        { pergunta: "De que cor pinto o SOL?", opcoes: ["Amarelo", "Azul"], correta: 0, explicacao: "O sol é amarelo brilhante." },
        { pergunta: "De que cor pinto as FOLHAS da árvore?", opcoes: ["Verde", "Vermelho"], correta: 0, explicacao: "Folhas são verdes." },
        { pergunta: "Uma FLOR pode ter qual cor?", opcoes: ["Só preto", "Muitas cores"], correta: 1, explicacao: "Flor pode ser rosa, amarela, vermelha, roxa — muitas cores!" },
      ],
    },
  },

  revisao: {
    pontos: [
      "Pintar dá cor. Desenhar faz traços.",
      "O pincel espalha a tinta.",
      "Cada cor combina com coisas do mundo.",
      "Todo desenho é único.",
    ],
    dica: "Em casa: pegue papel e lápis e desenhe o que você mais gosta.",
  },

  quiz: [
    { pergunta: "De que cor é a tinta da lata?", opcoes: ["Vermelha", "Preta"], correta: 0, explicacao: "Aqui a tinta é vermelha.", visual: { tipo: "itens", imagemUrl: tintaImg, quantidade: 1, rotulo: "Tinta vermelha" } },
    { pergunta: "Qual serve pra ESPALHAR tinta?", opcoes: ["Pincel", "Estrela"], correta: 0, explicacao: "O pincel espalha a tinta.", visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "Pincel" } },
    { pergunta: "Quantas cores tem o arco-íris (mais ou menos)?", opcoes: ["1", "Muitas"], correta: 1, explicacao: "O arco-íris tem várias cores juntas.", visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "Pincel colorido" } },
  ],

  conclusao: "🏅 Você trouxe as CORES de volta! Missão em Casa: faça um desenho e mostre pra família dizer as cores.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Misturando AZUL com AMARELO, aparece a cor VERDE — igualzinho a folha de árvore!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas flores?", instrucao: "Toque em cada flor.", grupos: [{ imagemUrl: florImg, quantidade: 3, rotulo: "Flores" }], pergunta: "Quantas flores pintamos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 flores.", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantos pincéis?", instrucao: "Toque em cada pincel.", grupos: [{ imagemUrl: pincelImg, quantidade: 2, rotulo: "Pincéis" }], pergunta: "Quantos pincéis?", opcoes: ["1", "2", "3"], correta: 1, acerto: "Muito bem! 2 pincéis.", erro: "Um, dois — 2." },
    { tipo: "ligar", titulo: "Fase 3 · Cor certa pra cada coisa", instrucao: "Ligue o objeto à cor certa.", pares: [
      { a: "Sol", b: "Amarelo", aImagem: solImg, aQuantidade: 1 },
      { a: "Coração", b: "Vermelho", aImagem: coracaoImg, aQuantidade: 1 },
      { a: "Árvore", b: "Verde", aImagem: arvoreImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Pinte cada coisa", instrucao: "Toque no pincel e depois no objeto certo.", itemImagem: pincelImg, alvosVisuais: [
      { nome: "Sol", cor: "#FBBF24", capacidade: 1, imagemUrl: solImg },
      { nome: "Coração", cor: "#F87171", capacidade: 1, imagemUrl: coracaoImg },
      { nome: "Árvore", cor: "#34D399", capacidade: 1, imagemUrl: arvoreImg },
    ], pares: [
      { item: "Amarelo", alvo: "Sol" },
      { item: "Vermelho", alvo: "Coração" },
      { item: "Verde", alvo: "Árvore" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "De que cor é o sol?", opcoes: ["Amarelo", "Roxo"], correta: 0, explicacao: "Sol amarelo.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Sol" } },
      { pergunta: "De que cor é o coração?", opcoes: ["Vermelho", "Verde"], correta: 0, explicacao: "Coração vermelho.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" } },
    ],
    medio: [
      { pergunta: "Qual usamos pra pintar?", opcoes: ["Pincel", "Estrela"], correta: 0, explicacao: "Pincel.", visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "Pincel" } },
      { pergunta: "Qual usamos pra fazer casa desenhada?", opcoes: ["Lápis / pincel", "Colher"], correta: 0, explicacao: "Lápis ou pincel desenham a casa.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
    ],
    dificil: [
      { pergunta: "Todo desenho é igual?", opcoes: ["Não, cada um é único", "Sim"], correta: 0, explicacao: "Cada pessoa desenha do seu jeito.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Sua arte" } },
      { pergunta: "Azul + Amarelo dá qual cor?", opcoes: ["Verde", "Preto"], correta: 0, explicacao: "Azul + amarelo = verde.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Verde" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03TS03", titulo: "Qualidades do som — alto, baixo, forte, fraco" },
};

void estrelaImg;

export default aula;
