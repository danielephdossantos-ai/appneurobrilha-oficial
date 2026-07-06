import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";

/**
 * EI03EO03 — Amigos de Verdade (brincar juntos, dividir, esperar a vez).
 * ⭐ Estrela: Amizade.
 */
const aula: Aula = {
  codigo: "EI03EO03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Amigos de Verdade",

  narrativa: {
    titulo: "Amigos de Verdade",
    contexto:
      "O Brilha encontrou um balanço na Floresta Encantada. Só que o Lupi também quer usar. E a Fifi também! Como brincar sem ninguém ficar triste?",
    problema: "Só cabe UM por vez no balanço. E agora?",
    convite: "Bora ajudar os amigos a brincarem juntos?",
  },

  conhecimentosPrevios: [
    "Reconhecer amiguinhos com quem gosta de brincar.",
    "Saber esperar um pouquinho.",
    "Dividir brinquedo com carinho.",
  ],

  missao: "Descobrir que amigo de verdade sabe DIVIDIR, ESPERAR A VEZ e BRINCAR JUNTO.",

  objetivos: [
    "Entender que dividir deixa a brincadeira mais gostosa.",
    "Praticar esperar a vez com paciência.",
  ],

  motivacao: "Quando a gente brinca junto, a alegria fica DOBRADA!",

  explicacao:
    "AMIGO DE VERDADE:\n\n• DIVIDE o brinquedo.\n• ESPERA a vez com carinho.\n• Não briga — CONVERSA.\n• Fica FELIZ quando o amigo se diverte.\n\nBrincar sozinho é bom. Brincar junto é MELHOR AINDA!",

  explicacaoAtiva: [
    { texto: "O Brilha quer o balanço. O Lupi também quer. Toque no Brilha.", imagem: brilhaImg, imagemAlt: "Brilha querendo balanço" },
    { texto: "A Coruja Sábia sugere: 'E se vocês combinarem cada um um pouquinho?'", imagem: corujaImg, imagemAlt: "Coruja Sábia ensinando" },
    { texto: "O Lupi topa: 'Você vai primeiro, eu espero.'", imagem: lupiImg, imagemAlt: "Lupi esperando" },
    {
      texto: "A Fifi entra na roda: 'Depois é minha vez!' Assim todo mundo brinca.",
      imagem: fifiImg,
      imagemAlt: "Fifi feliz",
      checagem: {
        pergunta: "Quando dois amigos querem o mesmo brinquedo, o melhor é:",
        opcoes: ["Combinar e esperar a vez", "Brigar até um chorar"],
        correta: 0,
        explicacao: "Isso! Combinando, todo mundo brinca feliz.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Amigo divide.",
    nivel2: "Amigo espera a vez e não briga.",
    nivel3: "Quando eu divido, a brincadeira dura mais e fica mais legal.",
    nivel4: "Esperar um pouquinho é sinal de que eu me importo com o amigo.",
  },

  exemploResolvido: {
    enunciado: "Só tem 1 balanço e 3 amigos querem brincar. O que fazer?",
    passos: [
      "Combinar quem vai primeiro.",
      "Cada um brinca um pouquinho.",
      "Enquanto espera, torce pelo amigo.",
    ],
    resposta: "Cada amigo tem sua vez. Todos brincam!",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 3,
      nomeItem: "amigo na fila",
      nomeItemPlural: "amigos na fila",
      pergunta: "Quantos amigos vão se revezar?",
    },
  },

  atividadeGuiada: {
    enunciado: "O Brilha divide flores com os amigos. Quantos amigos vão ganhar flor?",
    resposta: "3 amigos ganham flor — dividir é lindo.",
    explicacao: "Dividindo com Lupi, Fifi e Téo — 3 amigos felizes.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada amigo que ganhou flor. Quem está no meio (2º)?",
      participantes: [
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 1 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 },
        { nome: "Téo", imagemUrl: teoImg, posicao: 3 },
      ],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "⭐ Você tem 2 bolinhas e o amigo nenhuma. O que faz?", resposta: "Divido 1 com ele.", dica: "Dividir alegra os dois." },
    { enunciado: "🐰 Um amigo tá brincando com o que você quer. O que faz?", resposta: "Espero a vez ou pergunto se posso brincar junto.", dica: "Perguntar é sempre melhor que arrancar." },
    { enunciado: "🦉 Por que a Coruja diz 'brincar junto é melhor'?", resposta: "Porque a alegria fica dobrada quando é dividida.", dica: "Junto é mais divertido." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: em cada cena, escolha o jeito AMIGO de agir.",
    resposta: "Dividir, esperar, chamar pra brincar.",
    visual: {
      cena: [
        { personagem: "Brilha com balão", itemImagemUrl: balaoImg, quantidade: 2, cor: "#FBBF24" },
        { personagem: "Lupi sem balão", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi esperando vez", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" },
      ],
      perguntas: [
        { pergunta: "Você tem 2 balões, o amigo nenhum. O que faz?", opcoes: ["Divido 1 com ele", "Guardo os 2"], correta: 0, explicacao: "Dividir é ser amigo de verdade." },
        { pergunta: "Amigo brincando com o que você quer. O que faz?", opcoes: ["Peço a vez com carinho", "Tomo dele"], correta: 0, explicacao: "Pedir com carinho sempre funciona melhor." },
        { pergunta: "Um amigo tá sozinho. O que faz?", opcoes: ["Chamo pra brincar", "Ignoro"], correta: 0, explicacao: "Chamar pra brincar faz o coração do amigo brilhar." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Amigo divide.",
      "Amigo espera a vez.",
      "Amigo conversa em vez de brigar.",
      "Brincar junto é MAIS divertido.",
    ],
    dica: "Hoje, divida algo com um amigo — mesmo que seja um sorriso.",
  },

  quiz: [
    {
      pergunta: "Amigo de verdade faz o quê?",
      opcoes: ["Toma o brinquedo", "Divide e espera a vez", "Foge do amigo"],
      correta: 1,
      explicacao: "Dividir e esperar — receita da boa amizade.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amizade" },
    },
    {
      pergunta: "Só 1 balanço, 2 amigos. E aí?",
      opcoes: ["Cada um um pouquinho", "Briga"],
      correta: 0,
      explicacao: "Revezar — todo mundo brinca.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha 1º", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi 2º", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos ganharam flor?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      explicacao: "3 amigos ganharam. Dividir alegra!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
          { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Amigo do Coração! Você acendeu a 3ª ESTRELA ⭐ (Amizade). Missão em Casa: divida algo hoje com alguém — um brinquedo, um pedaço de fruta, um abraço.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Quando você divide algo, seu cérebro solta uma 'química da alegria' — e ela é ainda mais forte pra quem dá do que pra quem recebe!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Amigos no balanço",
      instrucao: "Estes amigos querem o mesmo balanço. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
      ],
      pergunta: "Quantos amigos vão se revezar?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Isso! 3 amigos, cada um um pouquinho.",
      erro: "Conte: Brilha, Lupi, Fifi.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Flores pra dividir",
      instrucao: "O Brilha vai dividir estas flores. Toque em cada flor.",
      grupos: [{ imagemUrl: florImg, quantidade: 3, rotulo: "Flores" }],
      pergunta: "Quantas flores tem pra dividir?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 flores — uma pra cada amigo!",
      erro: "Aponte cada flor.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada amigo, um presentinho",
      instrucao: "Ligue cada amigo ao presente que ele ganhou.",
      pares: [
        { a: "Lupi", b: "flor", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
        { a: "Fifi", b: "balão", aImagem: fifiImg, aQuantidade: 1, bImagem: balaoImg, bQuantidade: 1 },
        { a: "Téo", b: "coração", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · A fila do balanço",
      instrucao: "Cada amigo espera sua vez. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "1º" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "2º" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "3º" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "4º" },
      ],
      pergunta: "Quantos amigos estão na fila?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 amigos, esperando com paciência.",
      erro: "Conte um a um.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Presente da amizade",
      instrucao: "Cada amigo recebe 1 coração de amizade. Toque no coração e depois no amigo.",
      itemImagem: coracaoImg,
      alvosVisuais: [
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
        { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg },
      ],
      pares: [
        { item: "Coração pro Lupi", alvo: "Lupi" },
        { item: "Coração pra Fifi", alvo: "Fifi" },
        { item: "Coração pro Téo", alvo: "Téo" },
        { item: "Coração pro Piu", alvo: "Piu" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Amigo e sentimento",
      instrucao: "Ligue cada situação de amizade à carinha que combina.",
      pares: [
        { a: "Dividi meu brinquedo", b: "feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Esperei minha vez", b: "tranquilo", aImagem: lupiImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Amigo brincou comigo", b: "coração feliz", aImagem: fifiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Amigo de verdade DIVIDE ou GUARDA tudo pra si?",
        opcoes: ["Divide", "Guarda tudo"],
        correta: 0,
        explicacao: "Amigo divide com carinho.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Dividir" },
      },
      {
        pergunta: "Quantos amigos podem brincar juntos?",
        opcoes: ["1", "Muitos", "Nenhum"],
        correta: 1,
        explicacao: "Quanto mais, mais divertido!",
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
        pergunta: "Amigo brincando com seu preferido. O que faz?",
        opcoes: ["Peço a vez com carinho", "Arranco da mão"],
        correta: 0,
        explicacao: "Pedir com carinho é o jeito amigo.",
        visual: { tipo: "itens", imagemUrl: lupiImg, quantidade: 1, rotulo: "Pedir com carinho" },
      },
      {
        pergunta: "Vi um amigo sozinho. O que faço?",
        opcoes: ["Chamo pra brincar", "Passo direto"],
        correta: 0,
        explicacao: "Chamar faz o amigo se sentir importante.",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Amigo feliz" },
      },
    ],
    dificil: [
      {
        pergunta: "Estou bravo com o amigo. O melhor é:",
        opcoes: ["Conversar sobre o que senti", "Ficar sem falar pra sempre"],
        correta: 0,
        explicacao: "Conversar resolve. Amizade vale a pena!",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Eu", cor: "#FBBF24" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Amigo", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Dividi meu lanche. Como me sinto?",
        opcoes: ["Coração cheio", "Perdi alguma coisa"],
        correta: 0,
        explicacao: "Quem divide ganha coração cheio de alegria.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração cheio" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO04", titulo: "Eu Falo o Que Sinto" },
};

void estrelaImg;
void piuImg;

export default aula;
