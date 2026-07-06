import type { Aula } from "../types";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import medoImg from "@/assets/neuro-treino/emocoes/medo.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import doceImg from "@/assets/neuro-treino/objetos/doce.png";
import casquinhaImg from "@/assets/neuro-treino/objetos/casquinha.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import princesaImg from "@/assets/neuro-treino/objetos/princesa.png";
import heroiImg from "@/assets/neuro-treino/objetos/heroi.png";
import roboImg from "@/assets/neuro-treino/objetos/robo.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03EO01 — Missão 1 · Quem Sou Eu?
 * Educação Infantil · Campo: O Eu, o Outro e o Nós
 * Padrão travado: gabarito EF01MA02 (visual, sem palavras escritas para a criança).
 */
const aula: Aula = {
  codigo: "EI03EO01",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Quem Sou Eu?",

  narrativa: {
    titulo: "O Espelho Mágico do Brilha",
    contexto:
      "O esquilo Brilha achou um espelho brilhante no meio da floresta. Toda vez que um amigo se aproxima, o espelho mostra tudo o que ele é: nome, corpo, cor favorita, comida preferida.",
    problema:
      "Só que hoje o espelho apagou! Ninguém consegue se reconhecer. Precisamos de alguém especial pra ensinar o espelho a lembrar de novo.",
    convite: "Vamos mostrar pro espelho quem você é?",
  },

  conhecimentosPrevios: [
    "Reconhecer o próprio rosto no espelho.",
    "Apontar partes do corpo (cabeça, mão, pé).",
    "Dizer o próprio nome quando perguntam.",
  ],

  missao:
    "Descobrir o que faz você ser VOCÊ: seu nome, seu corpo, suas cores e suas comidas favoritas.",

  objetivos: [
    "Reconhecer o próprio nome entre outros nomes.",
    "Escolher um avatar que se pareça com você.",
    "Apontar comidas que você gosta.",
    "Nomear partes do próprio corpo tocando na imagem.",
  ],

  motivacao:
    "Cada criança do mundo é DIFERENTE — e isso é lindo! Você tem um jeito só seu de rir, de brincar, de comer. Bora descobrir o que faz VOCÊ ser especial?",

  explicacao:
    "Você tem MUITAS coisas que são só suas:\n\n• Um NOME que a família escolheu.\n• Um CORPO com cabeça, braços, mãos e pés.\n• GOSTOS: cores, brinquedos, comidas.\n• Um JEITO de sentir — feliz, triste, bravo, com medo.\n\nQuando você aprende a se conhecer, fica mais fácil contar pros outros o que você quer e o que você não quer.",

  explicacoesNiveis: {
    nivel1: "Você é único no mundo — ninguém é igual a você.",
    nivel2: "Seu nome, seu corpo e seus gostos formam quem você é.",
    nivel3: "É como o espelho do Brilha: só mostra o que é seu.",
    nivel4: "Em casa você fala seu nome, escolhe sua roupa e sua comida favorita.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha quer escolher um avatar que combine com ele. Toque nos personagens e conte quantos aparecem no espelho.",
    passos: [
      "Toque em cada personagem do espelho.",
      "Conte em voz alta: 1, 2, 3, 4.",
      "Quando terminar, escolha o que mais parece com você!",
    ],
    resposta: "4 avatares — cada um é diferente, igual às crianças do mundo.",
    interativo: {
      tipo: "contagem",
      imagemUrl: ursinhoImg,
      quantidade: 4,
      nomeItem: "amigo",
      nomeItemPlural: "amigos",
      pergunta: "Quantos amiguinhos apareceram no espelho?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O espelho mostrou 3 comidas favoritas do Brilha. Toque em cada uma e conte quantas comidas ele adora.",
    resposta: "3 comidas — o Brilha ama maçã, banana e bolo!",
    explicacao:
      "Cada criança tem comidas favoritas diferentes. Não precisa gostar de tudo — o importante é conhecer o que VOCÊ gosta.",
    visual: {
      tipo: "grupos",
      pergunta:
        "Toque em cada comida favorita do Brilha e conte quantas ele escolheu.",
      imagemUrl: macaImg,
      itemSingular: "comida",
      itemPlural: "comidas",
      quantidadeGrupos: 1,
      itensPorGrupo: 3,
      opcoes: [2, 3, 4],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado: "🧸 Qual avatar tem a MESMA quantidade de olhos que você?",
      resposta: "Todos! Toda pessoa tem 2 olhos.",
      dica: "Olhe no espelho: 1 olho... 2 olhos.",
    },
    {
      enunciado: "🍎 O Brilha gosta de fruta doce. Qual você escolheria?",
      resposta: "Vale maçã ou banana — as duas são frutas doces.",
      dica: "Toque na sua fruta favorita.",
    },
    {
      enunciado: "😊 Como você se sente quando alguém fala seu nome?",
      resposta: "Feliz — porque seu nome é só seu!",
      dica: "Escolha a carinha feliz.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: monte o avatar da festa! Quem é o Brilha, quantas comidas favoritas ele tem e como ele se sente?",
    resposta:
      "Brilha = esquilo. Comidas favoritas = 3. Sentimento = feliz!",
    visual: {
      cena: [
        { personagem: "Brilha", itemImagemUrl: esquiloImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Comidas favoritas", itemImagemUrl: macaImg, quantidade: 3, cor: "#EF4444" },
        { personagem: "Sentimento", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Qual bicho é o Brilha?",
          opcoes: ["Coelho", "Esquilo", "Tartaruga"],
          correta: 1,
          explicacao: "O Brilha é o esquilo da floresta.",
        },
        {
          pergunta: "Quantas comidas favoritas o Brilha tem?",
          opcoes: ["2", "3", "4"],
          correta: 1,
          explicacao: "3 comidas: maçã, banana e bolo.",
        },
        {
          pergunta: "Como o Brilha está se sentindo hoje?",
          opcoes: ["Feliz", "Triste", "Bravo"],
          correta: 0,
          explicacao: "Ele está FELIZ porque descobriu quem ele é.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cada pessoa tem um nome próprio.",
      "Seu corpo tem partes: cabeça, mãos, pés.",
      "Seus gostos são só seus — comidas, cores, brinquedos.",
      "Reconhecer quem você é ajuda a se comunicar.",
    ],
    dica: "Sempre que alguém perguntar seu nome, fale bem alto e sorria!",
  },

  quiz: [
    {
      pergunta: "Quantos olhos você tem?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      explicacao: "Todos temos 2 olhos.",
      visual: {
        tipo: "itens",
        imagemUrl: coracaoImg,
        quantidade: 2,
        rotulo: "Olhos",
      },
    },
    {
      pergunta: "Qual dessas é uma comida?",
      opcoes: ["Maçã", "Estrela", "Coração"],
      correta: 0,
      explicacao: "A maçã é uma fruta que a gente come.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" },
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Estrela" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
        ],
      },
    },
    {
      pergunta: "Qual carinha mostra alguém FELIZ?",
      opcoes: ["Feliz", "Triste", "Bravo"],
      correta: 0,
      explicacao: "A carinha sorrindo é a feliz.",
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
      pergunta: "Quem é você no espelho?",
      opcoes: ["Só você", "Seu amigo", "O Brilha"],
      correta: 0,
      explicacao: "O espelho mostra VOCÊ — ninguém é igual a você.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Pequeno Explorador de Si! Você aprendeu o que faz VOCÊ ser único. Missão em Casa: peça pra alguém fotografar você sorrindo e mostre a foto dizendo seu nome bem alto.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Não existe outra criança no mundo com a MESMA impressão digital que a sua. Nem gêmeos têm a mesma! Você é 100% original.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quantos amigos no espelho?",
      instrucao: "Toque em cada personagem e conte em voz alta.",
      grupos: [{ imagemUrl: ursinhoImg, quantidade: 4, rotulo: "Amigos do espelho" }],
      pergunta: "Quantos amigos aparecem?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Muito bem! 4 amigos, cada um único.",
      erro: "Conte de novo apontando um a um.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Ligue a comida ao amigo",
      instrucao: "Cada amigo escolheu uma comida favorita. Ligue!",
      pares: [
        { a: "Brilha", b: "Maçã", aImagem: esquiloImg, aQuantidade: 1, bImagem: macaImg, bQuantidade: 1 },
        { a: "Ursinho", b: "Bolo", aImagem: ursinhoImg, aQuantidade: 1, bImagem: boloImg, bQuantidade: 1 },
        { a: "Robô", b: "Doce", aImagem: roboImg, aQuantidade: 1, bImagem: doceImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Monte o avatar da festa",
      instrucao: "Arraste cada peça pro lugar certo do avatar.",
      pares: [
        { item: "Coração", alvo: "Sentimento", itemImagem: coracaoImg },
        { item: "Estrela", alvo: "Sentimento", itemImagem: estrelaImg },
        { item: "Bolo", alvo: "Comida", itemImagem: boloImg },
        { item: "Casquinha", alvo: "Comida", itemImagem: casquinhaImg },
      ],
      alvosVisuais: [
        { nome: "Sentimento", cor: "#FBBF24", capacidade: 2 },
        { nome: "Comida", cor: "#EF4444", capacidade: 2 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Toque no rostinho FELIZ.",
        opcoes: ["Feliz", "Triste", "Bravo"],
        correta: 0,
        explicacao: "O rosto sorrindo é o feliz.",
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
        pergunta: "Qual avatar é o Brilha?",
        opcoes: ["Ursinho", "Esquilo", "Robô"],
        correta: 1,
        explicacao: "O Brilha é o esquilo da floresta.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" },
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Esquilo" },
            { imagemUrl: roboImg, quantidade: 1, rotulo: "Robô" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Você tem 2 mãos. Quantos dedos tem em uma mão?",
        opcoes: ["3", "5", "10"],
        correta: 1,
        explicacao: "Cada mão tem 5 dedos.",
      },
      {
        pergunta: "Qual dessas coisas é COMIDA?",
        opcoes: ["Bolo", "Coração", "Estrela"],
        correta: 0,
        explicacao: "O bolo é comida — a gente come em festas.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" },
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Estrela" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "O Brilha, o Ursinho e o Robô estão no espelho. Quantos amigos aparecem?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "3 amigos: Brilha + Ursinho + Robô.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Brilha" },
            { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" },
            { imagemUrl: roboImg, quantidade: 1, rotulo: "Robô" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO02",
    titulo: "Reconhecer a família e as pessoas do convívio",
  },
};

void princesaImg;
void heroiImg;
void medoImg;

export default aula;
