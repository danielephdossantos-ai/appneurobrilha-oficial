import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO02 — Mundo 1 · Amigos da Floresta Encantada · Missão 2
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * BNCC EI03EO02: Agir de maneira independente, com confiança em suas
 * capacidades, reconhecendo suas conquistas e limitações.
 *
 * Tema: "Eu Consigo!" — o Brilha quer pegar uma folha dourada num galho
 * alto. Aprende quando dá pra tentar sozinho e quando é hora de pedir ajuda.
 * Estrela recompensa: ⭐ Coragem.
 *
 * Padrão TRAVADO EF01MA02 aplicado a socioemocional visual.
 */
const aula: Aula = {
  codigo: "EI03EO02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Eu Consigo!",

  narrativa: {
    titulo: "Eu Consigo!",
    contexto:
      "Na Floresta Encantada, uma folha dourada balança bem alto num galho. O Brilha olha pra cima e pensa: 'Será que eu consigo pegar sozinho?' A Coruja Sábia sorri: 'Tente primeiro — se precisar, chame um amigo.'",
    problema:
      "O Brilha nunca tentou algo tão alto. Ele consegue sozinho? Ou é hora de pedir ajuda?",
    convite: "Bora ajudar o Brilha a descobrir o que ele consegue?",
  },

  conhecimentosPrevios: [
    "Reconhecer coisas que já sabe fazer sozinho (calçar sapato, comer, brincar).",
    "Perceber quando algo é difícil demais.",
    "Saber pedir ajuda quando não consegue.",
  ],

  missao:
    "Descobrir o que EU CONSIGO fazer sozinho, e quando é bom pedir ajuda.",

  objetivos: [
    "Reconhecer coisas que já consegue fazer sozinho.",
    "Perceber que pedir ajuda também é ser corajoso.",
  ],

  motivacao:
    "Toda vez que você tenta algo novo, você fica mais forte! E se não conseguir de primeira, tudo bem — a gente tenta de novo ou pede ajuda.",

  explicacao:
    "EU CONSIGO! Tem coisas que eu já faço sozinho:\n\n• Vestir o meu sapato.\n• Guardar meu brinquedo.\n• Escolher a fruta que eu quero.\n\nMas tem coisas difíceis. Aí eu:\n\n• Tento com calma.\n• Se não der, PEÇO AJUDA.\n\nPedir ajuda NÃO é ser fraco — é ser inteligente. Ninguém faz tudo sozinho, nem os adultos!",

  explicacaoAtiva: [
    {
      texto: "O Brilha quer pegar uma folha dourada bem alta. Toque nele pra dar coragem!",
      imagem: brilhaImg,
      imagemAlt: "Brilha olhando pra cima com coragem",
    },
    {
      texto: "A Coruja Sábia sussurra: 'Tenta primeiro, Brilha. Você é mais forte do que pensa!'",
      imagem: corujaImg,
      imagemAlt: "Coruja Sábia incentivando",
    },
    {
      texto: "O Lupi salta bem alto! Cada amigo é bom em alguma coisa.",
      imagem: lupiImg,
      imagemAlt: "Lupi saltando alto",
    },
    {
      texto: "Se a folha estiver ALTA DEMAIS, o Brilha pode chamar o Lupi. Pedir ajuda é ser corajoso!",
      imagem: lupiImg,
      imagemAlt: "Lupi ajudando um amigo",
      checagem: {
        pergunta: "Se você não consegue algo sozinho, o que você faz?",
        opcoes: ["Peço ajuda com carinho", "Fico bravo e desisto"],
        correta: 0,
        explicacao: "Isso! Pedir ajuda é inteligente e corajoso.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Eu consigo fazer muitas coisas sozinho.",
    nivel2:
      "Quando algo é difícil, eu tento com calma. Se não der, peço ajuda.",
    nivel3:
      "Pedir ajuda não é ser fraco. É saber que a gente cresce junto.",
    nivel4:
      "Cada dia você aprende uma coisa nova. Ontem talvez não conseguia; hoje já consegue!",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha tentou pegar a folha 1 vez sozinho e não conseguiu. O que ele deve fazer agora?",
    passos: [
      "Respira fundo — está tudo bem não ter conseguido.",
      "Pensa: 'Alguém pode me ajudar?'",
      "Chama o Lupi que salta alto.",
    ],
    resposta: "Pedir ajuda! Juntos, o Brilha e o Lupi pegam a folha.",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 1,
      nomeItem: "folha dourada",
      nomeItemPlural: "folhas douradas",
      pergunta: "Quantas folhas douradas o Brilha quer pegar?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Brilha, o Lupi e a Fifi tentam pegar frutas. Cada um consegue no que é bom. Quantos amigos estão tentando?",
    resposta: "3 amigos — cada um tenta do jeito dele.",
    explicacao:
      "3 amigos tentando: Brilha alcança as baixinhas, Lupi salta nas altas, Fifi rola pela floresta.",
    visual: {
      tipo: "podio",
      pergunta:
        "Toque em cada amigo pra contar. Quem está no meio (2º) da cena?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 },
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    {
      enunciado:
        "⭐ O Brilha tenta sozinho primeiro. O que isso mostra?",
      resposta: "Que ele é corajoso e acredita em si mesmo.",
      dica: "Tentar é o primeiro passo pra conseguir.",
    },
    {
      enunciado:
        "🐰 O Lupi salta mais alto que o Brilha. Isso é problema?",
      resposta:
        "Não! Cada um é bom em coisas diferentes. E dá pra ajudar um ao outro.",
      dica: "Quando você não consegue, alguém pode te ajudar.",
    },
    {
      enunciado:
        "🦉 A Coruja Sábia diz: 'Pedir ajuda é ser esperto.' O que ela quer dizer?",
      resposta:
        "Que a gente não precisa fazer tudo sozinho — juntos é melhor.",
      dica: "Até os grandes pedem ajuda!",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: olha cada situação e diz — dá pra fazer SOZINHO ou é hora de pedir AJUDA?",
    resposta:
      "Guardar brinquedo = sozinho. Alcançar coisa muito alta = pedir ajuda. Amarrar cadarço = tentar, e se não der, ajuda.",
    visual: {
      cena: [
        { personagem: "Brilha guardando brinquedo", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Folha bem alta", itemImagemUrl: estrelaImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Lupi ajudando", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Guardar seu brinquedo depois de brincar — dá pra fazer sozinho?",
          opcoes: ["Sim, eu consigo!", "Não, é impossível"],
          correta: 0,
          explicacao: "Isso! Guardar brinquedo é coisa que dá pra fazer sozinho.",
        },
        {
          pergunta: "Alcançar uma folha bem no alto — o que fazer?",
          opcoes: ["Tentar e depois pedir ajuda", "Ficar bravo"],
          correta: 0,
          explicacao: "Certinho! Tentar e, se não der, pedir ajuda com carinho.",
        },
        {
          pergunta: "Amarrar o cadarço da primeira vez — dá certo sempre?",
          opcoes: ["Nem sempre, e tudo bem tentar de novo", "Tem que dar de primeira"],
          correta: 0,
          explicacao: "Errar faz parte de aprender. A gente tenta de novo!",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Eu consigo muitas coisas sozinho — cada dia mais!",
      "Se algo é difícil, tento com calma.",
      "Pedir ajuda é ser corajoso, não fraco.",
      "Errar faz parte. A gente tenta de novo.",
    ],
    dica: "Antes de dizer 'não sei', tenta uma vez. Você vai se surpreender!",
  },

  quiz: [
    {
      pergunta: "O Brilha tenta pegar a folha e não consegue. E agora?",
      opcoes: ["Fica bravo e chora", "Tenta de novo ou pede ajuda", "Desiste pra sempre"],
      correta: 1,
      explicacao: "Isso! A gente tenta de novo — ou chama um amigo.",
      visual: {
        tipo: "itens",
        imagemUrl: brilhaImg,
        quantidade: 1,
        rotulo: "Brilha tentando",
      },
    },
    {
      pergunta: "Pedir ajuda é sinal de quê?",
      opcoes: ["Fraqueza", "Coragem e inteligência"],
      correta: 1,
      explicacao: "Pedir ajuda é ser corajoso. Ninguém faz tudo sozinho!",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha pede", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi ajuda", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos aparecem tentando alcançar a folha?",
      opcoes: ["1", "2", "3"],
      correta: 2,
      explicacao: "Brilha, Lupi e Fifi — juntos conseguem!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Corajoso do Brilha! Você ajudou o Brilha a descobrir que EU CONSIGO — e quando não dá, pedir ajuda é ser esperto. Acendeu a SEGUNDA ESTRELA ⭐ da Árvore da Amizade! Missão em Casa: escolha uma coisa que você quer aprender sozinho hoje (calçar sapato, guardar copo, escovar dente). Tente — e se precisar, peça ajuda com carinho.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando você tenta uma coisa nova, seu cérebro cria caminhos novinhos. Cada vez que você tenta de novo, o caminho fica mais forte. Por isso a gente melhora!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Coragem do Brilha",
      instrucao:
        "O Brilha vai tentar pegar a folha dourada. Toque nele pra dar coragem.",
      grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }],
      pergunta: "Quantos Brilhas estão tentando?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "Isso! Só 1 Brilha, cheio de coragem.",
      erro: "Olha bem. Quantos Brilhas você vê?",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Amigos que podem ajudar",
      instrucao: "Estes são amigos que podem ajudar o Brilha. Toque em cada um.",
      grupos: [
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi salta" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi corre" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu voa" },
      ],
      pergunta: "Quantos amigos podem ajudar?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Muito bem! 3 amigos prontos pra ajudar.",
      erro: "Aponte um por um: Lupi, Fifi, Piu.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada um ajuda do seu jeito",
      instrucao:
        "Ligue cada amigo à ajuda que ele pode dar.",
      pares: [
        { a: "Lupi", b: "salta alto pra pegar", aImagem: lupiImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Piu", b: "voa até o galho", aImagem: piuImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Téo", b: "empurra devagar", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Sozinho ou com ajuda?",
      instrucao:
        "Guardar brinquedo o Brilha faz sozinho. Alcançar coisa alta pede ajuda. Toque nas duas cenas.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Sozinho" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Com ajuda" },
      ],
      pergunta: "Quantas escolhas o Brilha tem?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      acerto: "Isso! 2 caminhos: tentar sozinho ou pedir ajuda.",
      erro: "Toque nas duas figuras: sozinho e com ajuda.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Balão da coragem",
      instrucao:
        "Cada amigo que ajudou ganha 1 balão de agradecimento. Toque no balão e depois no amigo.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg },
        { nome: "Coruja", cor: "#A78BFA", capacidade: 1, imagemUrl: corujaImg },
      ],
      pares: [
        { item: "Balão do Brilha", alvo: "Brilha" },
        { item: "Balão do Lupi", alvo: "Lupi" },
        { item: "Balão do Piu", alvo: "Piu" },
        { item: "Balão da Coruja", alvo: "Coruja" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Como você se sente ao conseguir?",
      instrucao:
        "Ligue cada momento à carinha que combina.",
      pares: [
        { a: "Consegui sozinho!", b: "carinha feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Amigo me ajudou", b: "carinha tranquila", aImagem: lupiImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Tentei com carinho", b: "coração forte", aImagem: brilhaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual dessas é uma coisa que dá pra fazer SOZINHO?",
        opcoes: ["Guardar meu brinquedo", "Alcançar o teto", "Dirigir um carro"],
        correta: 0,
        explicacao: "Guardar brinquedo você já consegue sozinho!",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Sozinho" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Alto demais" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Adulto faz" },
          ],
        },
      },
      {
        pergunta: "Se algo é DIFÍCIL demais, o que a gente faz?",
        opcoes: ["Peço ajuda", "Choro sem tentar", "Bate no amigo"],
        correta: 0,
        explicacao: "Pedir ajuda com carinho é sempre a melhor escolha.",
        visual: {
          tipo: "itens",
          imagemUrl: lupiImg,
          quantidade: 1,
          rotulo: "Amigo ajudando",
        },
      },
    ],
    medio: [
      {
        pergunta:
          "O Brilha tentou 1 vez e não conseguiu. Ele deve tentar de novo?",
        opcoes: ["Sim, tentar de novo é aprender", "Não, desistir"],
        correta: 0,
        explicacao: "Tentar de novo é como a gente aprende. Cada tentativa deixa mais forte!",
        visual: {
          tipo: "itens",
          imagemUrl: brilhaImg,
          quantidade: 1,
          rotulo: "Brilha tentando",
        },
      },
      {
        pergunta:
          "Um amigo ajudou você. O que você diz pra ele?",
        opcoes: ["Obrigado!", "Nada", "Some daqui"],
        correta: 0,
        explicacao: "Agradecer mostra que você reconheceu o carinho do amigo.",
        visual: {
          tipo: "itens",
          imagemUrl: felizImg,
          quantidade: 1,
          rotulo: "Feliz com a ajuda",
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "Você quer aprender a amarrar o cadarço. O que faz?",
        opcoes: [
          "Tento, e se não der, peço um adulto pra mostrar",
          "Espero até ficar adulto",
        ],
        correta: 0,
        explicacao:
          "Tentar + pedir ajuda = a receita pra aprender qualquer coisa nova.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Eu tento", cor: "#FBBF24" },
            { imagemUrl: corujaImg, quantidade: 1, rotulo: "Adulto ensina", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta:
          "Você conseguiu algo novo hoje! Como fica seu coração?",
        opcoes: ["Cheio de alegria", "Do mesmo tamanho", "Fica triste"],
        correta: 0,
        explicacao:
          "Cada conquista deixa a gente MAIS FORTE por dentro.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 1,
          rotulo: "Coração forte",
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO03",
    titulo: "Amigos de Verdade — brincar juntos",
  },
};

// Mantém flor/piuImg importados pra futuros expansões visuais.
void flor;
void piuImg;

export default aula;
