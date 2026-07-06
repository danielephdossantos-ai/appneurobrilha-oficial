import type { Aula } from "../types";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import pandaImg from "@/assets/neuro-treino/objetos/panda.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

const aula: Aula = {
  codigo: "EI03EO03",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Amigos da Floresta",

  narrativa: {
    titulo: "A Turma da Floresta",
    contexto:
      "O Brilha estava sozinho brincando com a bola quando o Macaco, a Coelha e a Tartaruga chegaram. Todo mundo queria brincar junto!",
    problema:
      "Só tem UMA bola — e cada um quer pra si. Como fazer todo mundo se divertir sem ninguém ficar triste?",
    convite: "Vamos ajudar a turma a brincar junto?",
  },

  conhecimentosPrevios: [
    "Aceitar dividir um brinquedo por um tempo.",
    "Esperar a vez em brincadeiras simples.",
    "Reconhecer quando o amigo está triste.",
  ],

  missao:
    "Descobrir que brincar JUNTO é mais divertido — e aprender a dividir, esperar a vez e ajudar os amigos.",

  objetivos: [
    "Escolher brinquedos que dá pra compartilhar.",
    "Reconhecer atitudes gentis entre amigos.",
    "Entender que esperar a vez faz todo mundo brincar.",
    "Perceber quando um amigo precisa de ajuda.",
  ],

  motivacao:
    "Brincar sozinho é bom. Brincar com amigo é AINDA melhor — dá pra rir, correr, inventar história juntos. Bora aprender os segredos dos amigos da floresta?",

  explicacao:
    "Ter amigos é uma das coisas mais legais da vida:\n\n• DIVIDIR — deixar o amigo brincar com seu brinquedo.\n• ESPERAR A VEZ — todo mundo tem seu momento.\n• AJUDAR — quando o amigo cai, você estende a mão.\n• RIR JUNTO — brincadeira boa é aquela em que todos se divertem.\n\nQuando você é amigo dos outros, os outros são amigos de você também.",

  explicacoesNiveis: {
    nivel1: "Amigo é quem brinca com você e cuida de você.",
    nivel2: "Compartilhar a bola faz todo mundo se divertir.",
    nivel3: "Esperar a vez é como uma fila: cada um brinca no seu tempo.",
    nivel4: "No parquinho você espera pra escorregar — isso é ser amigo dos outros.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada amigo que chegou pra brincar com o Brilha. Quantos amigos são?",
    passos: [
      "Toque no Macaco, na Coelha e na Tartaruga.",
      "Conte: 1, 2, 3.",
      "Com o Brilha, são 4 amigos brincando!",
    ],
    resposta: "3 amigos chegaram — com o Brilha, 4 no total.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coelhoImg,
      quantidade: 3,
      nomeItem: "amigo",
      nomeItemPlural: "amigos",
      pergunta: "Quantos amigos chegaram pra brincar com o Brilha?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Macaco trouxe 4 brinquedos pra dividir com os amigos. Quantos brinquedos ele trouxe?",
    resposta: "4 brinquedos — dá pra cada amigo brincar com um!",
    explicacao:
      "Quando cada amigo tem um brinquedo, ninguém precisa esperar. Isso é DIVIDIR.",
    visual: {
      tipo: "grupos",
      pergunta:
        "Toque em cada brinquedo do Macaco. Quantos ele trouxe pra dividir?",
      imagemUrl: bolaImg,
      itemSingular: "brinquedo",
      itemPlural: "brinquedos",
      quantidadeGrupos: 1,
      itensPorGrupo: 4,
      opcoes: [3, 4, 5],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado: "🤝 Seu amigo quer brincar com seu carrinho. O que você faz?",
      resposta: "Empresta — dividir deixa todo mundo feliz.",
      dica: "Escolha a atitude gentil.",
    },
    {
      enunciado: "🎈 Vocês têm 1 balão e 2 amigos. O que fazer?",
      resposta: "Brincar juntos com o mesmo balão — jogando pra cima!",
      dica: "Um só balão, dois amigos — bora jogar junto.",
    },
    {
      enunciado: "😊 O amigo caiu do escorregador. Como você reage?",
      resposta: "Ajuda ele a levantar e pergunta se está tudo bem.",
      dica: "Amigo cuida de amigo.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: a turma quer brincar de roda. Quantos amigos estão na floresta e o que eles compartilham?",
    resposta:
      "5 amigos na roda — e todos compartilham a bola, o balão e o carinho!",
    visual: {
      cena: [
        { personagem: "Brilha", itemImagemUrl: esquiloImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Coelha", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Macaco", itemImagemUrl: macacoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Tartaruga", itemImagemUrl: tartarugaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Coruja", itemImagemUrl: corujaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "Quantos amigos estão na roda?",
          opcoes: ["3", "4", "5"],
          correta: 2,
          explicacao: "5 amigos: Brilha, Coelha, Macaco, Tartaruga e Coruja.",
        },
        {
          pergunta: "O que amigos SEMPRE dividem?",
          opcoes: ["Segredos ruins", "Brinquedos e carinho", "Nada"],
          correta: 1,
          explicacao: "Dividir brinquedos e carinho é o segredo da amizade.",
        },
        {
          pergunta: "Se um amigo cair, o que fazer?",
          opcoes: ["Rir", "Ajudar a levantar", "Ir embora"],
          correta: 1,
          explicacao: "Amigo ajuda amigo — sempre.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Amigo é quem brinca junto e cuida.",
      "Dividir o brinquedo faz todo mundo se divertir.",
      "Esperar a vez é ser amigo dos outros.",
      "Ajudar o amigo é a maior gentileza.",
    ],
    dica: "Hoje, quando brincar com alguém, tente dividir seu brinquedo favorito.",
  },

  quiz: [
    {
      pergunta: "Quantos amigos estão nesta roda?",
      opcoes: ["3", "4", "5"],
      correta: 2,
      explicacao: "5 amiguinhos brincando juntos.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Brilha" },
          { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
          { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
          { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
          { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" },
        ],
      },
    },
    {
      pergunta: "Amigo que empresta o brinquedo é...",
      opcoes: ["Chato", "Gentil", "Bravo"],
      correta: 1,
      explicacao: "Emprestar é uma atitude gentil.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Gentil" },
        ],
      },
    },
    {
      pergunta: "O que amigos costumam dividir?",
      opcoes: ["Bola e balão", "Só a bola", "Nada"],
      correta: 0,
      explicacao: "Bola, balão, brincadeira — tudo se divide.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" },
          { imagemUrl: balaoImg, quantidade: 1, rotulo: "Balão" },
        ],
      },
    },
    {
      pergunta: "Se seu amigo cair, o que você faz?",
      opcoes: ["Ajuda a levantar", "Ri e sai correndo", "Finge que não viu"],
      correta: 0,
      explicacao: "Amigo ajuda amigo — sempre estende a mão.",
    },
  ],

  conclusao:
    "🏅 Conquista: Amigão da Floresta! Você aprendeu que dividir e esperar a vez faz todo mundo se divertir. Missão em Casa: empreste um brinquedo pra alguém da sua casa hoje.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Até os elefantes têm amigos! Eles se ajudam quando um está doente e ficam tristes quando um amigo vai embora.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quantos amigos vieram?",
      instrucao: "Conte os amigos que chegaram pra brincar.",
      grupos: [
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
        { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
        { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
      ],
      pergunta: "Quantos amigos chegaram pra brincar?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Isso! 3 amigos chegaram.",
      erro: "Conte um por vez.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Divida os brinquedos",
      instrucao: "Arraste 1 brinquedo pra cada amigo — assim ninguém fica sem.",
      pares: [
        { item: "Bola 1", alvo: "Coelha", itemImagem: bolaImg },
        { item: "Balão 1", alvo: "Macaco", itemImagem: balaoImg },
        { item: "Presente 1", alvo: "Tartaruga", itemImagem: presenteImg },
        { item: "Ursinho 1", alvo: "Brilha", itemImagem: ursinhoImg },
      ],
      alvosVisuais: [
        { nome: "Coelha", cor: "#F472B6", capacidade: 1, imagemUrl: coelhoImg },
        { nome: "Macaco", cor: "#FBBF24", capacidade: 1, imagemUrl: macacoImg },
        { nome: "Tartaruga", cor: "#34D399", capacidade: 1, imagemUrl: tartarugaImg },
        { nome: "Brilha", cor: "#FB923C", capacidade: 1, imagemUrl: esquiloImg },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Atitude gentil ou não?",
      instrucao: "Ligue cada atitude à carinha certa.",
      pares: [
        { a: "Emprestar brinquedo", b: "Feliz", aImagem: presenteImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Ajudar quem caiu", b: "Coração", aImagem: coracaoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Empurrar amigo", b: "Bravo", aImagem: bravoImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Toque em quem é o Brilha.",
        opcoes: ["Coelha", "Esquilo", "Panda"],
        correta: 1,
        explicacao: "O Brilha é o esquilo.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Esquilo" },
            { imagemUrl: pandaImg, quantidade: 1, rotulo: "Panda" },
          ],
        },
      },
      {
        pergunta: "Dividir o brinquedo deixa o amigo...",
        opcoes: ["Feliz", "Bravo"],
        correta: 0,
        explicacao: "Feliz — porque ele consegue brincar também.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta:
          "Estão brincando 2 amigos e chega mais 1. Quantos ficam?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "2 + 1 = 3 amigos.",
        visual: {
          tipo: "itens",
          imagemUrl: estrelaImg,
          quantidade: 3,
          rotulo: "Amigos",
        },
      },
      {
        pergunta: "O que amigo NÃO faz?",
        opcoes: ["Empurra", "Empresta", "Ajuda"],
        correta: 0,
        explicacao: "Empurrar machuca — amigo não faz isso.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Tem 5 amigos e só 3 bolas. O que fazer?",
        opcoes: [
          "Dividir e revezar",
          "Uma criança fica com todas",
          "Ninguém brinca",
        ],
        correta: 0,
        explicacao: "Dividir e revezar — assim todos brincam.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bolaImg, quantidade: 3, rotulo: "Bolas" },
            { imagemUrl: coracaoImg, quantidade: 5, rotulo: "Amigos" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO04",
    titulo: "Expressar como estou me sentindo",
  },
};

export default aula;
