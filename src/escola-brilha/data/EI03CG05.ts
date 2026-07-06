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
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";
import leaoImg from "@/assets/neuro-treino/objetos/leao.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import toquePontoImg from "@/assets/escola-brilha/movimentos/toque-ponto.svg";
import arrastarBlocoImg from "@/assets/escola-brilha/movimentos/arrastar-bloco.svg";
import encaixarCaixaImg from "@/assets/escola-brilha/movimentos/encaixar-caixa.svg";
import pincaSementeImg from "@/assets/escola-brilha/movimentos/pinca-semente.svg";

/**
 * EI03CG05 — Mundo 2 · O Corpo que Fala na Floresta · Missão 5
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Coordenação das Mãos" — Motora fina — tocar, arrastar, encaixar.
 * Estrela recompensa: ⭐ Coordenação Fina.
 */
const aula: Aula = {
  codigo: "EI03CG05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Coordenação das Mãos",

  narrativa: {
    titulo: "Coordenação das Mãos",
    contexto: "As sementes mágicas da Floresta caíram e se espalharam. Só podem ser recolhidas com MÃOS ESPERTAS — os dedinhos precisam saber tocar, arrastar e encaixar cada uma no lugar certo.",
    problema: "O Brilha tenta pegar as sementes com o pé e não consegue. A Coruja Sábia explica: pra coisas pequenininhas, a gente usa os DEDOS.",
    convite: "Bora treinar os dedinhos com o Brilha?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Coordenar movimentos finos das mãos: tocar com precisão, arrastar objetos e encaixar peças.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Suas mãos são superferramentas! Elas tocam, seguram, arrastam e encaixam. Sem elas, nada de blocos!",

  explicacao: "• TOCAR: usar o dedo indicador com precisão.\\n• PEGAR: usar polegar + indicador (pinça).\\n• ARRASTAR: segurar e levar sem soltar.\\n• ENCAIXAR: colocar peça no lugar certo.\\n• SOLTAR: abrir a mão devagar.\n\nMão treinada é mão que faz tudo: desenha, escreve, brinca. Cada dedinho é um herói!",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele mostrar o DEDO indicador.", imagem: brilhaImg, imagemAlt: "Brilha apontando" },
    { texto: "O Lupi vai PEGAR uma flor com a pinça.", imagem: lupiImg, imagemAlt: "Lupi pegando flor" },
    { texto: "A Fifi ARRASTA um bloco pra caixa.", imagem: fifiImg, imagemAlt: "Fifi arrastando bloco" },
    {
      texto: "O Téo ENCAIXA a peça no lugar certo.",
      imagem: teoImg,
      imagemAlt: "Téo encaixando",
      checagem: {
        pergunta: "Pra pegar uma semente pequena, qual dedo ajuda?",
        opcoes: ["O polegar com o indicador", "O cotovelo"],
        correta: 0,
        explicacao: "Isso! Polegar + indicador = pinça.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "As mãos fazem movimentos pequenos e precisos.",
    nivel2: "Tocar, pegar, arrastar e encaixar são movimentos das mãos.",
    nivel3: "Treinar as mãos ajuda a desenhar, escrever e brincar melhor.",
    nivel4: "Em casa, você usa as mãos pra comer, escovar os dentes e brincar.",
  },

  exemploResolvido: {
    enunciado: "O Brilha precisa encaixar 3 blocos. Quantas encaixadas ele faz?",
    passos: ["Toque em cada bloco.", "Conte: 1, 2, 3.", "3 encaixadas — 1 por bloco!"],
    resposta: "3 encaixadas.",
    interativo: {
      tipo: "encaixar",
      itemImagemUrl: blocoImg,
      alvoImagemUrl: bauImg,
      quantidade: 3,
      nomeItem: "bloco",
      nomeItemPlural: "blocos",
      pergunta: "O Brilha precisa encaixar 3 blocos. Quantas encaixadas ele faz?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha TOCA, Lupi ARRASTA, Fifi ENCAIXA. Quem coloca a peça no LUGAR?",
    resposta: "Fifi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "cartoes",
      pergunta: "Brilha TOCA, Lupi ARRASTA, Fifi ENCAIXA. Quem coloca a peça no LUGAR?",
      cartoes: [
        { nome: "Brilha", imagemUrl: brilhaImg, acaoImagemUrl: toquePontoImg, rotulo: "TOCA no ponto" },
        { nome: "Lupi", imagemUrl: lupiImg, acaoImagemUrl: arrastarBlocoImg, rotulo: "ARRASTA o bloco" },
        { nome: "Fifi", imagemUrl: fifiImg, acaoImagemUrl: encaixarCaixaImg, rotulo: "ENCAIXA na caixa" }
      ],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "Pra pegar uma flor pequenininha, como fica a mão?", resposta: "Em pinça: polegar + indicador.", dica: "Pinça é o segredo." },
    { enunciado: "Pra arrastar um bloco, o que a mão faz?", resposta: "Segura firme e leva sem soltar.", dica: "Segurar sem soltar." },
    { enunciado: "Pra encaixar, o que precisa?", resposta: "Colocar a peça no lugar certo com cuidado.", dica: "Encaixar = lugar certo." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos usam as mãos diferente. Descubra qual movimento!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (toca)", personagemImagemUrl: brilhaImg, itemImagemUrl: toquePontoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (arrasta)", personagemImagemUrl: lupiImg, itemImagemUrl: arrastarBlocoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (encaixa)", personagemImagemUrl: fifiImg, itemImagemUrl: encaixarCaixaImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem só TOCA com o dedo?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha só encosta o dedo." },
        { pergunta: "Quem ARRASTA sem soltar?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi arrasta pela floresta." },
        { pergunta: "Quem ENCAIXA a peça?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi coloca no lugar certo." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Mão coordenada faz muita coisa!", "Tocar, pegar, arrastar e encaixar são movimentos finos.", "Polegar + indicador = pinça pra coisas pequenas.", "Treinar as mãos ajuda em tudo na vida."
    ],
    dica: "Amanhã, tente pegar 5 grãozinhos com a pinça (polegar + indicador). Consegue?",
  },

  quiz: [
    { pergunta: "Pra pegar coisa PEQUENA, que dedos ajudam?", opcoes: ["Polegar + indicador", "Cotovelo", "Pé"], correta: 0, explicacao: "Pinça é o segredo!", visual: { tipo: "itens", imagemUrl: pincaSementeImg, quantidade: 1, rotulo: "Polegar + indicador" } },
    { pergunta: "Pra ENCAIXAR uma peça, precisa…", opcoes: ["Chutar", "Colocar no lugar certo", "Jogar longe"], correta: 1, explicacao: "Encaixar = lugar certo.", visual: { tipo: "itens", imagemUrl: encaixarCaixaImg, quantidade: 1, rotulo: "Peça no lugar certo" } },
    { pergunta: "Arrastar é…", opcoes: ["Segurar e levar", "Soltar no ar"], correta: 0, explicacao: "Segurar sem soltar.", visual: { tipo: "itens", imagemUrl: arrastarBlocoImg, quantidade: 1, rotulo: "Segurar e levar" } }
  ],

  conclusao: "🏅 Medalha: Guardião da Coordenação Fina! As sementes mágicas foram recolhidas. Missão em Casa: pegue 10 grãozinhos (feijão, arroz) com pinça e coloque num copo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A mão humana tem 27 ossinhos! É a parte do corpo com MAIS ossos em menos espaço.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três movimentos das mãos", instrucao: "Cada amigo faz um movimento com as mãos.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Toca" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Arrasta" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Encaixa" }], pergunta: "Quantos movimentos aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 movimentos das mãos!", erro: "Conte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todos com as mãos ativas", instrucao: "Todos os amigos treinam as mãozinhas.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos amigos treinam?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 amigos treinando as mãozinhas!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, seu movimento", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "TOCA no ponto", aImagem: brilhaImg, aQuantidade: 1, bImagem: toquePontoImg, bQuantidade: 1 },
      { a: "Lupi", b: "ARRASTA o bloco", aImagem: lupiImg, aQuantidade: 1, bImagem: arrastarBlocoImg, bQuantidade: 1 },
      { a: "Fifi", b: "ENCAIXA na caixa", aImagem: fifiImg, aQuantidade: 1, bImagem: encaixarCaixaImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual amigo ENCAIXA?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi coloca no lugar certo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: toquePontoImg, quantidade: 1, rotulo: "Brilha toca", cor: "#FBBF24" }, { imagemUrl: arrastarBlocoImg, quantidade: 1, rotulo: "Lupi arrasta", cor: "#F472B6" }, { imagemUrl: encaixarCaixaImg, quantidade: 1, rotulo: "Fifi encaixa", cor: "#FB923C" }] } },
      { pergunta: "Quantos amigos treinam mãos?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 amigos!", visual: { tipo: "grupos", grupos: [{ imagemUrl: toquePontoImg, quantidade: 1, rotulo: "Toca", cor: "#FBBF24" }, { imagemUrl: arrastarBlocoImg, quantidade: 1, rotulo: "Arrasta", cor: "#F472B6" }, { imagemUrl: encaixarCaixaImg, quantidade: 1, rotulo: "Encaixa", cor: "#FB923C" }] } }
    ],
    medio: [
      { pergunta: "O Téo encaixou tudo. Como se sente?", opcoes: ["Feliz", "Bravo", "Cansado"], correta: 0, explicacao: "Feliz por conseguir!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "A Fifi tentou e não encaixou. Como está?", opcoes: ["Tranquila", "Chateada", "Brava"], correta: 1, explicacao: "Chateia — tenta de novo!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } }
    ],
    dificil: [
      { pergunta: "Se não conseguir de primeira, o que fazer?", opcoes: ["Tentar de novo com calma", "Chutar longe"], correta: 0, explicacao: "Calma + tentar de novo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Mãos treinadas ajudam a…", opcoes: ["Escrever e desenhar", "Nada"], correta: 0, explicacao: "Servem pra tudo!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG06",
    titulo: "Expressões do Corpo",
  },
};

// Mantém imports pra expansão visual.
void tranquiloImg;
void tristeImg;
void bravoImg;
void arvoreImg;
void blocoImg;
void bauImg;
void leaoImg;
void sapoImg;
void passaroImg;
void florImg;
void estrelaImg;
void coracaoImg;
void felizImg;
void piuImg;
void corujaImg;

export default aula;
