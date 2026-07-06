import type { Aula } from "../types";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import medoImg from "@/assets/neuro-treino/emocoes/medo.png";
import surpresoImg from "@/assets/neuro-treino/emocoes/surpreso.png";
import sonoImg from "@/assets/neuro-treino/emocoes/sono.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

const aula: Aula = {
  codigo: "EI03EO04",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Como Estou Me Sentindo?",

  narrativa: {
    titulo: "As Carinhas do Brilha",
    contexto:
      "O Brilha acordou meio esquisito hoje. De manhã ganhou um presente e ficou FELIZ. Depois um trovão o assustou. Na hora do lanche, a fruta favorita acabou — ficou TRISTE.",
    problema:
      "Ele quer contar tudo isso pra você, mas não sabe o nome de cada sentimento. Vamos ajudar?",
    convite: "Bora dar nome pras carinhas do Brilha?",
  },

  conhecimentosPrevios: [
    "Reconhecer o próprio rosto e expressões básicas.",
    "Saber que existe hora de ficar feliz e hora de ficar triste.",
    "Chamar um adulto quando algo incomoda.",
  ],

  missao:
    "Descobrir os nomes dos sentimentos — feliz, triste, bravo, com medo — e aprender a mostrar como você está.",

  objetivos: [
    "Identificar carinhas de feliz, triste, bravo, medo.",
    "Ligar cada sentimento a uma situação do dia.",
    "Escolher a carinha que representa como você está agora.",
    "Entender que TODO sentimento é OK — o que muda é o que a gente faz com ele.",
  ],

  motivacao:
    "Sentir é maravilhoso — a gente sente com o coração e mostra com o rosto. Não existe sentimento errado: até tristeza e raiva ensinam a gente a se cuidar.",

  explicacao:
    "As principais carinhas dos sentimentos são:\n\n• FELIZ 😊 — sorriso, olhos brilhando. Sente quando algo bom acontece.\n• TRISTE 😢 — cantos da boca pra baixo. Sente quando algo dá dó.\n• BRAVO 😠 — sobrancelha franzida. Sente quando algo é injusto.\n• MEDO 😨 — olhos arregalados. Sente quando algo assusta.\n\nQuando você mostra a carinha certa, os adultos entendem o que você precisa.",

  explicacoesNiveis: {
    nivel1: "A carinha mostra o que o coração está sentindo.",
    nivel2: "Ganhei presente = feliz. Perdi brinquedo = triste.",
    nivel3: "Igual o Brilha: cada situação, uma carinha diferente.",
    nivel4: "Se estiver com medo, fale — um abraço ajuda.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada carinha e conte quantas emoções o Brilha sentiu hoje.",
    passos: [
      "Toque na carinha feliz, triste, brava e com medo.",
      "Conte: 1, 2, 3, 4.",
      "O Brilha sentiu 4 emoções em um dia só!",
    ],
    resposta: "4 emoções — e todas são normais.",
    interativo: {
      tipo: "contagem",
      imagemUrl: felizImg,
      quantidade: 4,
      nomeItem: "carinha",
      nomeItemPlural: "carinhas",
      pergunta: "Quantas carinhas diferentes o Brilha fez hoje?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Brilha ganhou um presente. Toque na carinha certa que mostra como ele ficou.",
    resposta: "Feliz — presente costuma alegrar a gente.",
    explicacao:
      "Quando algo bom acontece, o rosto sorri sozinho. É a carinha FELIZ.",
    visual: {
      tipo: "grupos",
      pergunta:
        "O Brilha ganhou um presente. Toque na carinha certa.",
      imagemUrl: felizImg,
      itemSingular: "carinha",
      itemPlural: "carinhas",
      quantidadeGrupos: 1,
      itensPorGrupo: 1,
      opcoes: [1, 2, 3],
      correta: 0,
    },
  },

  exercicios: [
    {
      enunciado: "😢 Sua fruta favorita acabou. Como você fica?",
      resposta: "Triste — dá dó.",
      dica: "Escolha a carinha com cantos da boca pra baixo.",
    },
    {
      enunciado: "😨 Ouviu um trovão bem alto. Como se sente?",
      resposta: "Com medo — trovão assusta.",
      dica: "Olhos arregalados, coração acelerado.",
    },
    {
      enunciado: "😊 Ganhou um abraço da mamãe. Como fica?",
      resposta: "Feliz — abraço aquece.",
      dica: "Sorriso grande.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: Encontre a Emoção! Ligue cada acontecimento à carinha certa.",
    resposta:
      "Presente = feliz. Fruta acabou = triste. Trovão = medo. Alguém pegou meu brinquedo sem pedir = bravo.",
    visual: {
      cena: [
        { personagem: "Feliz (presente)", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Triste (fruta acabou)", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Medo (trovão)", itemImagemUrl: medoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Bravo (brinquedo tirado)", itemImagemUrl: bravoImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "Você ganhou um presente. Que carinha faz?",
          opcoes: ["Feliz", "Triste", "Bravo"],
          correta: 0,
          explicacao: "Presente traz alegria — carinha feliz.",
        },
        {
          pergunta: "O trovão foi alto. Como se sente?",
          opcoes: ["Feliz", "Com medo", "Bravo"],
          correta: 1,
          explicacao: "Trovão assusta — carinha de medo.",
        },
        {
          pergunta: "Alguém pegou seu brinquedo SEM pedir. Como fica?",
          opcoes: ["Bravo", "Feliz", "Com sono"],
          correta: 0,
          explicacao: "Injustiça deixa a gente brava.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Feliz, triste, bravo e medo são carinhas dos sentimentos.",
      "Todo sentimento é OK — o que muda é o que fazer com ele.",
      "Mostrar a carinha ajuda o adulto a te entender.",
      "Falar como está sentindo alivia o coração.",
    ],
    dica: "Quando não conseguir falar, aponte a carinha que combina com você.",
  },

  quiz: [
    {
      pergunta: "Qual é a carinha FELIZ?",
      opcoes: ["Feliz", "Triste", "Bravo"],
      correta: 0,
      explicacao: "A que sorri.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        ],
      },
    },
    {
      pergunta: "Qual carinha é de MEDO?",
      opcoes: ["Medo", "Feliz", "Sono"],
      correta: 0,
      explicacao: "Olhos arregalados é medo.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: medoImg, quantidade: 1, rotulo: "Medo" },
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          { imagemUrl: sonoImg, quantidade: 1, rotulo: "Sono" },
        ],
      },
    },
    {
      pergunta: "Trovão faz você se sentir como?",
      opcoes: ["Feliz", "Com medo", "Bravo"],
      correta: 1,
      explicacao: "Trovão costuma assustar.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: chuvaImg, quantidade: 1, rotulo: "Trovão" },
          { imagemUrl: medoImg, quantidade: 1, rotulo: "Medo" },
        ],
      },
    },
    {
      pergunta: "Um abraço bem gostoso deixa você...",
      opcoes: ["Bravo", "Feliz", "Triste"],
      correta: 1,
      explicacao: "Abraço aquece o coração — carinha feliz.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Abraço" },
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Conquista: Detetive dos Sentimentos! Você aprendeu 4 carinhas: feliz, triste, brava e com medo. Missão em Casa: antes de dormir, aponte pra família como você está se sentindo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O cérebro sente PRIMEIRO e só depois a gente entende com palavras. Por isso a carinha sai antes de a boca falar!",
  },

  interativas: [
    {
      tipo: "ligar",
      titulo: "Fase 1 · Ligue o acontecimento à emoção",
      instrucao: "Cada situação combina com uma carinha. Ligue!",
      pares: [
        { a: "Presente", b: "Feliz", aImagem: presenteImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Chuva com trovão", b: "Medo", aImagem: chuvaImg, aQuantidade: 1, bImagem: medoImg, bQuantidade: 1 },
        { a: "Bolo acabou", b: "Triste", aImagem: boloImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 },
        { a: "Sol brilhando", b: "Feliz", aImagem: solImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Quantas emoções o Brilha sentiu?",
      instrucao: "Conte as carinhas do dia do Brilha.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: medoImg, quantidade: 1, rotulo: "Medo" },
      ],
      pergunta: "Quantas carinhas diferentes o Brilha fez hoje?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Isso! 4 emoções em um dia.",
      erro: "Toque em cada carinha, uma por vez.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Onde vai cada carinha?",
      instrucao: "Arraste cada emoção pra área certa.",
      pares: [
        { item: "Feliz", alvo: "Bom", itemImagem: felizImg },
        { item: "Surpreso", alvo: "Bom", itemImagem: surpresoImg },
        { item: "Triste", alvo: "Difícil", itemImagem: tristeImg },
        { item: "Medo", alvo: "Difícil", itemImagem: medoImg },
      ],
      alvosVisuais: [
        { nome: "Bom", cor: "#FBBF24", capacidade: 2 },
        { nome: "Difícil", cor: "#60A5FA", capacidade: 2 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual é FELIZ?",
        opcoes: ["Feliz", "Triste"],
        correta: 0,
        explicacao: "A carinha que sorri.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
            { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
          ],
        },
      },
      {
        pergunta: "Qual é BRAVO?",
        opcoes: ["Bravo", "Sono"],
        correta: 0,
        explicacao: "Sobrancelha franzida.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
            { imagemUrl: sonoImg, quantidade: 1, rotulo: "Sono" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Ganhou brinquedo novo. Como se sente?",
        opcoes: ["Feliz", "Bravo", "Triste"],
        correta: 0,
        explicacao: "Brinquedo novo alegra.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: presenteImg, quantidade: 1, rotulo: "Presente" },
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          ],
        },
      },
      {
        pergunta: "Está escuro no quarto e você ouve barulho. Como fica?",
        opcoes: ["Com medo", "Feliz", "Bravo"],
        correta: 0,
        explicacao: "Barulho no escuro costuma dar medo — chame um adulto.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Você quer brincar mas o amigo tirou seu brinquedo. Como se sente?",
        opcoes: ["Bravo", "Feliz", "Com sono"],
        correta: 0,
        explicacao: "Injustiça deixa a gente brava — respire e fale.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Fale" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO05",
    titulo: "Aprender formas simples de resolver conflitos",
  },
};

void esquiloImg;

export default aula;
