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
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO01 — Mundo 1 · Amigos da Floresta Encantada · Missão 1
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * BNCC EI03EO01: Demonstrar empatia pelos outros, percebendo que as pessoas
 * têm diferentes sentimentos, necessidades e maneiras de pensar e agir.
 *
 * Tema: "Quem Sou Eu" — Brilha chega à Floresta Encantada e descobre
 * junto com os amigos aquilo que torna cada um especial.
 * Estrela recompensa: ⭐ Identidade.
 *
 * Padrão TRAVADO EF01MA02 aplicado a socioemocional visual (crianças
 * não-alfabetizadas → tudo em imagens, sem texto pra ler).
 */
const aula: Aula = {
  codigo: "EI03EO01",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Quem Sou Eu",

  narrativa: {
    titulo: "Quem Sou Eu",
    contexto:
      "O Brilha acaba de chegar à Floresta Encantada. As árvores estão sem luz, os amigos estão tristes. A Coruja Sábia explica: para acender a primeira estrela da Árvore da Amizade, cada um precisa contar quem é.",
    problema:
      "Só que o Brilha ainda não sabe direito o que faz dele único. Será que a gente ajuda ele a descobrir?",
    convite: "Bora conhecer o Brilha e os amigos da floresta?",
  },

  conhecimentosPrevios: [
    "Reconhecer o próprio nome quando alguém chama.",
    "Apontar para si mesmo quando pergunta 'quem é você?'.",
    "Nomear alguém de quem gosta muito.",
  ],

  missao:
    "Descobrir que cada pessoa é única — tem seu nome, seu jeito, aquilo que ama — e que isso é bonito.",

  objetivos: [
    "Reconhecer a si mesmo como alguém especial.",
    "Perceber que cada amigo tem um jeito diferente — e todo mundo importa.",
  ],

  motivacao:
    "Cada pessoa é como uma estrela: brilha do seu próprio jeitinho. E quando as estrelas se juntam, a floresta toda se ilumina!",

  explicacao:
    "EU SOU EU. Ninguém no mundo é igualzinho a mim.\n\n• Tenho um NOME que só é meu.\n• Tenho um JEITO — alegre, calmo, curioso, brincalhão…\n• Tenho COISAS QUE AMO — comidas, brincadeiras, pessoas.\n• Tenho um CORPO — meus olhinhos, minhas mãos, meu sorriso.\n\nMeus amigos são diferentes de mim, e tudo bem. É bonito ser diferente. Juntos, a gente faz uma floresta cheia de cores!",

  explicacaoAtiva: [
    {
      texto: "Oi! Eu sou o Brilha. Toque em mim pra me cumprimentar!",
      imagem: brilhaImg,
      imagemAlt: "Brilha, a estrelinha amarela sorrindo",
    },
    {
      texto: "Esta é a Coruja Sábia. Ela sabe tudo sobre a floresta.",
      imagem: corujaImg,
      imagemAlt: "Coruja Sábia roxa com óculos",
    },
    {
      texto: "O Lupi adora pular e correr. Cada um tem um jeitinho!",
      imagem: lupiImg,
      imagemAlt: "Lupi, o coelhinho branco",
    },
    {
      texto: "A Fifi é raposa e adora brincar. E você, do que gosta?",
      imagem: fifiImg,
      imagemAlt: "Fifi, a raposinha laranja",
      checagem: {
        pergunta: "Você é único ou existe outro igualzinho a você?",
        opcoes: ["Sou único, só existe UM de mim", "Tem vários iguais a mim"],
        correta: 0,
        explicacao: "Isso! No mundo todinho só existe UM você. Que legal!",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Eu sou eu. Só existe UM de mim no mundo.",
    nivel2:
      "Cada amigo é diferente: o Lupi pula, o Téo é calmo, a Fifi brinca. Cada um é especial.",
    nivel3:
      "Se todos fôssemos iguais, a floresta seria só de uma cor. Ser diferente deixa tudo mais bonito.",
    nivel4:
      "Em casa, você tem seu nome, sua cama, seu brinquedo preferido. Isso mostra quem você é.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha aponta pra si mesmo e diz: 'Eu sou o Brilha!'. Vamos contar juntos: quantos Brilhas existem no mundo?",
    passos: [
      "Toque na estrelinha Brilha na tela.",
      "Diga em voz alta: 'Só tem UM Brilha!'",
      "Agora aponta pra você e diz seu nome. Só tem UM você também!",
    ],
    resposta: "Existe apenas 1 Brilha. E só 1 você. Cada um é único!",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 1,
      nomeItem: "Brilha",
      nomeItemPlural: "Brilhas",
      pergunta: "Quantos Brilhas existem no mundo?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Na Floresta Encantada estão o Brilha, o Lupi e a Fifi. Cada um é um amiguinho diferente. Quantos amigos apareceram na cena?",
    resposta: "3 amigos — cada um único e especial do seu jeito.",
    explicacao:
      "Somos 3 amigos diferentes: uma estrela, um coelho e uma raposa. Cada um traz uma cor pra floresta.",
    visual: {
      tipo: "podio",
      pergunta:
        "Toque em cada amigo pra contar. Quem está no lugar do meio (2º) da foto?",
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
        "⭐ O Brilha aponta pra ele mesmo. O que ele quer dizer?",
      resposta: "Ele está dizendo: 'Eu sou eu, o Brilha!'",
      dica: "Quando a gente aponta pra si mesmo, mostra quem é.",
    },
    {
      enunciado:
        "🐰 O Lupi ama pular. A Fifi ama brincar. Isso quer dizer o quê?",
      resposta:
        "Que cada um gosta de coisas diferentes — e tudo bem, isso é ser único.",
      dica: "Você conhece alguém que gosta de coisas diferentes de você?",
    },
    {
      enunciado:
        "🌳 A Coruja Sábia diz que a floresta fica bonita porque cada bicho é diferente. O que a gente aprende com isso?",
      resposta:
        "Ser diferente é bom. Cada amigo traz uma coisa boa pra floresta.",
      dica: "Imagine se todos fossem iguais — que sem graça, né?",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: a Coruja Sábia mostra 3 amigos. Toque em cada um e responda quem é quem!",
    resposta:
      "Brilha = a estrelinha. Lupi = o coelho. Téo = a tartaruga.",
    visual: {
      cena: [
        { personagem: "Brilha (estrelinha)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (coelho)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Téo (tartaruga)", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        {
          pergunta: "Qual amigo é a ESTRELINHA amarela?",
          opcoes: ["Brilha", "Lupi", "Téo"],
          correta: 0,
          explicacao: "O Brilha é a estrelinha que ilumina a floresta.",
        },
        {
          pergunta: "Qual amigo é o COELHO branco?",
          opcoes: ["Brilha", "Lupi", "Téo"],
          correta: 1,
          explicacao: "O Lupi é o coelhinho curioso das orelhas grandes.",
        },
        {
          pergunta: "Qual amigo é a TARTARUGA calma?",
          opcoes: ["Brilha", "Lupi", "Téo"],
          correta: 2,
          explicacao: "O Téo é a tartaruga tranquila e paciente.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Eu sou EU — no mundo todo só existe UM de mim.",
      "Cada amigo é diferente e isso é bonito.",
      "Meu nome, meu jeito e o que eu amo mostram quem eu sou.",
      "Juntos, todos os amigos fazem a floresta brilhar.",
    ],
    dica: "Quando alguém pedir 'quem é você?', aponte pra você e diga seu nome com orgulho.",
  },

  quiz: [
    {
      pergunta: "Quantos amigos IGUALZINHOS a você existem no mundo?",
      opcoes: ["Muitos", "Nenhum — só existe UM de você", "Dois"],
      correta: 1,
      explicacao: "Cada pessoa é única. Só existe UM você!",
      visual: {
        tipo: "itens",
        imagemUrl: brilhaImg,
        quantidade: 1,
        rotulo: "Só existe UM de você",
      },
    },
    {
      pergunta:
        "O Lupi adora pular. A Fifi adora brincar. Isso é bom ou ruim?",
      opcoes: ["Bom — cada um é diferente", "Ruim — deviam ser iguais"],
      correta: 0,
      explicacao: "Ser diferente é lindo! Cada amigo tem seu jeito.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
        ],
      },
    },
    {
      pergunta:
        "Quantos amigos aparecem nesta cena da Floresta Encantada?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      explicacao: "Brilha, Lupi e Fifi — 3 amigos diferentes e especiais.",
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
    "🏅 Medalha conquistada: Guardião da Identidade! Você ajudou o Brilha a descobrir que cada um é único — e acendeu a PRIMEIRA ESTRELA ⭐ da Árvore da Amizade! Missão em Casa: aponte pra você no espelho e diga seu nome bem alto. Depois pergunte pra alguém da família: 'você é único assim como eu?'",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Nenhuma pessoa no mundo tem a mesma digital que a sua! Aquele desenhinho na ponta do dedo é só seu. Cada um de nós é único até nas coisas bem pequeninhas.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Conhecendo o Brilha",
      instrucao:
        "Este é o Brilha, nosso amigo estrela. Toque nele pra cumprimentar.",
      grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }],
      pergunta: "Quantos Brilhas existem no mundo?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "Isso! Só existe UM Brilha — assim como só existe UM VOCÊ.",
      erro: "Olha bem. Quantos Brilhas você vê na tela?",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Contando os amigos da floresta",
      instrucao: "Estes são os amigos que o Brilha conheceu. Toque em cada um.",
      grupos: [
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
      ],
      pergunta: "Quantos amiguinhos apareceram?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Muito bem! São 4 amigos, cada um diferente do outro.",
      erro: "Aponte um por um: Lupi, Fifi, Téo, Piu.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada amigo com seu jeitinho",
      instrucao:
        "Ligue cada amigo ao seu par certo. Toque no amigo e depois no par.",
      pares: [
        { a: "Brilha (estrelinha)", b: "brilha no céu", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Lupi (coelho)", b: "adora saltar em flores", aImagem: lupiImg, aQuantidade: 1, bImagem: flor, bQuantidade: 1 },
        { a: "Téo (tartaruga)", b: "calmo, cheio de coração", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Como você está se sentindo?",
      instrucao:
        "A Coruja Sábia pergunta: qual carinha combina com você AGORA?",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
      ],
      pergunta: "Quantas carinhas de sentimento tem na tela?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Isso! Cada carinha é um jeitinho de se sentir. Todos valem!",
      erro: "Conte de um em um: 1, 2, 3.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Presente pra cada amigo",
      instrucao:
        "Cada amigo ganha 1 balão colorido de boas-vindas. Toque no balão e depois no amigo.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
      ],
      pares: [
        { item: "Balão do Brilha", alvo: "Brilha" },
        { item: "Balão do Lupi", alvo: "Lupi" },
        { item: "Balão da Fifi", alvo: "Fifi" },
        { item: "Balão do Téo", alvo: "Téo" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Cada carinha, um sentimento",
      instrucao:
        "Ligue cada amigo à carinha que combina com o jeito dele.",
      pares: [
        { a: "Brilha alegre", b: "carinha feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Téo calminho", b: "carinha tranquila", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Lupi curioso", b: "coração batendo", aImagem: lupiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual dessas é a ESTRELINHA Brilha?",
        opcoes: ["A estrela amarela", "O coelho branco", "A tartaruga verde"],
        correta: 0,
        explicacao: "O Brilha é a estrelinha amarela que ilumina a floresta.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
            { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
          ],
        },
      },
      {
        pergunta: "Quantos amigos você vê nesta cena?",
        opcoes: ["1", "2", "3"],
        correta: 2,
        explicacao: "Brilha, Lupi e Fifi — 3 amigos, cada um diferente.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
            { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta:
          "Um amigo está com uma carinha ASSIM. Como ele está se sentindo?",
        opcoes: ["Feliz", "Triste", "Tranquilo"],
        correta: 0,
        explicacao: "A carinha com um sorriso grandão mostra FELICIDADE.",
        visual: {
          tipo: "itens",
          imagemUrl: felizImg,
          quantidade: 1,
          rotulo: "Como está o amigo?",
        },
      },
      {
        pergunta: "E este outro amigo, como está?",
        opcoes: ["Feliz", "Triste", "Bravo"],
        correta: 1,
        explicacao: "A carinha com a boca pra baixo mostra TRISTEZA.",
        visual: {
          tipo: "itens",
          imagemUrl: tristeImg,
          quantidade: 1,
          rotulo: "Como está o amigo?",
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "O Lupi salta, a Fifi brinca, o Téo é calmo. Isso é bom ou ruim?",
        opcoes: [
          "Bom — ser diferente deixa a floresta bonita",
          "Ruim — todos deviam ser iguais",
        ],
        correta: 0,
        explicacao:
          "Cada um tem seu jeitinho, e juntos formam uma floresta cheia de cores.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi salta", cor: "#F472B6" },
            { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi brinca", cor: "#FB923C" },
            { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo é calmo", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta:
          "Você está com uma carinha assim. É certo mostrar o que você sente?",
        opcoes: ["Sim, sempre é bom mostrar", "Não, tem que esconder"],
        correta: 0,
        explicacao:
          "Mostrar o que a gente sente é lindo. Ninguém precisa esconder!",
        visual: {
          tipo: "itens",
          imagemUrl: tranquiloImg,
          quantidade: 1,
          rotulo: "Meu sentimento agora",
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO02",
    titulo: "Minha Família — laços de afeto",
  },
};

// Imports mantidos para expansão visual futura (Piu como mensageiro em
// outras cenas) sem quebrar o padrão do banco de mídias.
void piuImg;

export default aula;
