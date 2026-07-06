import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

const aula: Aula = {
  codigo: "EI03EO05",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Resolvendo Conflitos",

  narrativa: {
    titulo: "A Bola Dividida",
    contexto:
      "O Brilha e o Macaco encontraram UMA bola bem no meio da floresta. Os dois quiseram brincar sozinhos.",
    problema:
      "Começaram a puxar a bola e brigaram. Agora ninguém está brincando — só bravos e tristes.",
    convite: "Vamos ajudar os dois a resolver essa briga sem gritar?",
  },

  conhecimentosPrevios: [
    "Reconhecer quando está bravo.",
    "Perceber quando um amigo está bravo.",
    "Falar em vez de bater ou empurrar.",
  ],

  missao:
    "Aprender jeitos gentis de resolver briguinhas: falar, dividir, revezar e pedir ajuda.",

  objetivos: [
    "Identificar quando existe um conflito.",
    "Escolher uma solução gentil em vez de bater ou gritar.",
    "Entender que dividir e revezar resolvem quase tudo.",
    "Saber quando chamar um adulto.",
  ],

  motivacao:
    "Briga faz o coração doer. Mas toda briguinha tem uma saída — e quase sempre é FALAR e DIVIDIR.",

  explicacao:
    "Quando dois amigos querem a mesma coisa:\n\n• RESPIRE — três respirações antes de reagir.\n• FALE — 'eu também quero brincar'.\n• PROPONHA — 'a gente reveza: primeiro você, depois eu'.\n• PEÇA AJUDA — se não resolver, chame um adulto.\n\nBater e gritar NUNCA resolve. Só machuca.",

  explicacoesNiveis: {
    nivel1: "Quando tem briga, fale em vez de bater.",
    nivel2: "Igual o Brilha e o Macaco: revezar a bola resolve.",
    nivel3: "Respira, fala e propõe uma solução gentil.",
    nivel4: "Se irmão pegou seu brinquedo, fale calmo e chame um adulto se precisar.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada solução gentil pra briga da bola. Quantas soluções existem?",
    passos: [
      "Toque em: dividir, revezar, chamar adulto, pedir por favor.",
      "Conte: 1, 2, 3, 4.",
      "Existem 4 soluções gentis!",
    ],
    resposta: "4 soluções — muito melhor que brigar.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 4,
      nomeItem: "solução",
      nomeItemPlural: "soluções",
      pergunta: "Quantas soluções gentis existem pra briga da bola?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Brilha e o Macaco brigaram pela bola. Toque na atitude que vai deixar os DOIS felizes.",
    resposta: "Revezar — cada um brinca por um tempo.",
    explicacao:
      "Quando revezam, os dois brincam. Ninguém fica sem — e a bola não some!",
    visual: {
      tipo: "podio",
      pergunta:
        "Qual a MELHOR solução: brigar, revezar, ou levar a bola embora?",
      participantes: [
        { nome: "Brigar", imagemUrl: bravoImg, posicao: 3 },
        { nome: "Revezar", imagemUrl: felizImg, posicao: 1 },
        { nome: "Levar embora", imagemUrl: tristeImg, posicao: 2 },
      ],
      respostaCerta: "Revezar",
    },
  },

  exercicios: [
    {
      enunciado: "😠 Alguém pegou seu brinquedo sem pedir. O que fazer?",
      resposta: "Falar calmo: 'quero de volta, por favor'.",
      dica: "Não empurra — fala.",
    },
    {
      enunciado: "🤝 Dois amigos querem o mesmo brinquedo. Qual solução?",
      resposta: "Revezar — cada um brinca um pouco.",
      dica: "Um por vez.",
    },
    {
      enunciado: "😢 Você tentou resolver e não deu. O que fazer?",
      resposta: "Chamar um adulto pra ajudar.",
      dica: "Adulto ajuda quando a gente pede.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: escolha as atitudes CERTAS na briga da bola.",
    resposta:
      "Certas: falar, dividir, revezar, chamar adulto. Erradas: bater, gritar, quebrar.",
    visual: {
      cena: [
        { personagem: "Falar", itemImagemUrl: felizImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Revezar", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Bater", itemImagemUrl: bravoImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "Qual atitude resolve a briga?",
          opcoes: ["Bater", "Falar calmo", "Gritar"],
          correta: 1,
          explicacao: "Falar calmo faz o amigo entender.",
        },
        {
          pergunta: "Se cada um quer a bola, o melhor é...",
          opcoes: ["Um leva embora", "Revezar", "Esconder"],
          correta: 1,
          explicacao: "Revezar — todo mundo brinca.",
        },
        {
          pergunta: "Se não conseguir resolver sozinho?",
          opcoes: ["Chorar sozinho", "Chamar adulto", "Bater mais"],
          correta: 1,
          explicacao: "Chamar um adulto é atitude corajosa.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Toda briguinha tem uma saída gentil.",
      "Respirar antes de reagir ajuda muito.",
      "Revezar e dividir resolvem quase tudo.",
      "Se não der, chame um adulto — sem vergonha.",
    ],
    dica: "Antes de bater ou gritar, respire 3 vezes bem fundo.",
  },

  quiz: [
    {
      pergunta: "Amigo pegou seu brinquedo sem pedir. Melhor atitude?",
      opcoes: ["Bater", "Falar 'por favor devolve'", "Sair correndo"],
      correta: 1,
      explicacao: "Falar calmo resolve.",
    },
    {
      pergunta: "Duas crianças querem o mesmo brinquedo. Solução?",
      opcoes: ["Brigar", "Revezar", "Esconder"],
      correta: 1,
      explicacao: "Revezar — cada um brinca um pouquinho.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "1 bola" },
          { imagemUrl: felizImg, quantidade: 2, rotulo: "2 amigos" },
        ],
      },
    },
    {
      pergunta: "Bater no amigo é...",
      opcoes: ["Certo", "Errado"],
      correta: 1,
      explicacao: "Bater machuca. Nunca resolve.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bater" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Machuca" },
        ],
      },
    },
    {
      pergunta: "Não consegui resolver sozinho. Faço o quê?",
      opcoes: ["Chamo adulto", "Bato mais forte", "Fico bravo em silêncio"],
      correta: 0,
      explicacao: "Chamar adulto é corajoso.",
    },
  ],

  conclusao:
    "🏅 Conquista: Pequeno Pacificador! Você aprendeu a resolver briguinhas sem machucar. Missão em Casa: se brigar com alguém, respire 3 vezes antes de falar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Respirar bem devagar avisa o cérebro que está tudo bem — e a raiva vai embora mais rápido.",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Certo ou errado?",
      instrucao: "Arraste cada atitude pra área certa.",
      pares: [
        { item: "Falar", alvo: "Certo", itemImagem: felizImg },
        { item: "Revezar", alvo: "Certo", itemImagem: coracaoImg },
        { item: "Bater", alvo: "Errado", itemImagem: bravoImg },
        { item: "Gritar", alvo: "Errado", itemImagem: tristeImg },
      ],
      alvosVisuais: [
        { nome: "Certo", cor: "#34D399", capacidade: 2 },
        { nome: "Errado", cor: "#EF4444", capacidade: 2 },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Diálogo gentil",
      instrucao: "Ligue cada situação à solução gentil.",
      pares: [
        { a: "Dois querem a bola", b: "Revezar", aImagem: bolaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Amigo tirou brinquedo", b: "Falar", aImagem: presenteImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Ninguém escuta", b: "Chamar adulto", aImagem: tristeImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Soluções gentis",
      instrucao: "Conte quantas soluções gentis existem.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Falar" },
        { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Revezar" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Chamar adulto" },
        { imagemUrl: presenteImg, quantidade: 1, rotulo: "Pedir por favor" },
      ],
      pergunta: "Quantas soluções gentis?",
      opcoes: ["2", "3", "4"],
      correta: 2,
      acerto: "Isso! 4 caminhos melhores que brigar.",
      erro: "Conte um por vez.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Bater no amigo é certo?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        explicacao: "Não. Bater machuca.",
      },
      {
        pergunta: "Toque na atitude GENTIL.",
        opcoes: ["Falar", "Gritar"],
        correta: 0,
        explicacao: "Falar calmo é gentil.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Falar" },
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Gritar" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "1 bola, 2 amigos. Solução?",
        opcoes: ["Revezar", "Brigar"],
        correta: 0,
        explicacao: "Revezar — cada um brinca.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "1 bola" },
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Amigo 1" },
            { imagemUrl: macacoImg, quantidade: 1, rotulo: "Amigo 2" },
          ],
        },
      },
      {
        pergunta: "Antes de reagir bravo, o que fazer?",
        opcoes: ["Respirar", "Gritar"],
        correta: 0,
        explicacao: "Respirar acalma.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Você já falou e o amigo continua tirando o brinquedo. O que fazer?",
        opcoes: ["Bater", "Chamar um adulto", "Ficar quieto"],
        correta: 1,
        explicacao: "Chamar adulto é o certo.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO06",
    titulo: "Respeitar as diferenças entre as pessoas",
  },
};

void esquiloImg;

export default aula;
