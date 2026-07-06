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

/**
 * EI03CG08 — Mundo 2 · O Corpo que Fala na Floresta · Missão 8
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Espaço" — Perto/longe, dentro/fora — noção espacial.
 * Estrela recompensa: ⭐ Espaço.
 */
const aula: Aula = {
  codigo: "EI03CG08",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Espaço",

  narrativa: {
    titulo: "Espaço",
    contexto: "Uma neblina mágica cobriu a Floresta e os amigos não sabem mais o que está PERTO ou LONGE, DENTRO ou FORA. O Brilha tropeça na Fifi porque não percebeu que ela estava BEM PERTO.",
    problema: "A Coruja Sábia explica: o corpo precisa aprender onde estão as coisas em relação a ele. Vamos ajudar?",
    convite: "Bora com o Brilha aprender perto, longe, dentro e fora?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Reconhecer noções espaciais básicas: perto/longe, dentro/fora, em cima/embaixo.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Saber onde as coisas estão é como ter um mapa dentro da cabeça. O corpo se organiza melhor!",

  explicacao: "• PERTO: a coisa está do lado da gente.\\n• LONGE: a coisa está muito distante.\\n• DENTRO: a coisa está por dentro de algo.\\n• FORA: a coisa está por fora.\\n• EM CIMA / EMBAIXO: acima ou abaixo.\n\nEspaço é onde tudo cabe. Saber a posição das coisas ajuda o corpo a se mover certo.",

  explicacaoAtiva: [
    { texto: "Toque no Brilha que está PERTO da árvore.", imagem: brilhaImg, imagemAlt: "Brilha perto" },
    { texto: "O Lupi está LONGE, quase sumindo.", imagem: lupiImg, imagemAlt: "Lupi longe" },
    { texto: "A Fifi está DENTRO da toca.", imagem: fifiImg, imagemAlt: "Fifi dentro" },
    {
      texto: "O Téo está FORA da toca, do lado.",
      imagem: teoImg,
      imagemAlt: "Téo fora",
      checagem: {
        pergunta: "Se algo está BEM COLADO em você, está…",
        opcoes: ["Perto", "Longe"],
        correta: 0,
        explicacao: "Isso! Colado é PERTO.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Perto é próximo. Longe é distante.",
    nivel2: "Dentro é por dentro. Fora é por fora.",
    nivel3: "Em cima é acima. Embaixo é abaixo.",
    nivel4: "Em casa, o brinquedo pode estar DENTRO da caixa ou EM CIMA da mesa.",
  },

  exemploResolvido: {
    enunciado: "Tem 2 amigos PERTO do Brilha e 1 LONGE. Quantos estão perto?",
    passos: ["Toque nos amigos perto.", "Conte: 1, 2.", "2 perto e 1 longe."],
    resposta: "2 amigos perto.",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 2,
      nomeItem: "amigo perto",
      nomeItemPlural: "amigos perto",
      pergunta: "Tem 2 amigos PERTO do Brilha e 1 LONGE. Quantos estão perto?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha ao lado da árvore, Lupi longe, Fifi dentro da toca. Quem está PERTO da árvore?",
    resposta: "Brilha",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha ao lado da árvore, Lupi longe, Fifi dentro da toca. Quem está PERTO da árvore?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 3 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }
      ],
      respostaCerta: "Brilha",
    },
  },

  exercicios: [
    { enunciado: "Perto é o quê?", resposta: "Coisa que está do lado, colada.", dica: "Perto = próximo." },
    { enunciado: "Longe é o quê?", resposta: "Coisa que está distante, longe.", dica: "Longe = distante." },
    { enunciado: "Dentro é o quê?", resposta: "Coisa por dentro de outra.", dica: "Dentro = por dentro." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos em posições diferentes. Descubra onde cada um está!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (perto)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (longe)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (dentro)", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem está PERTO?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha bem colado." },
        { pergunta: "Quem está LONGE?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi lá longe." },
        { pergunta: "Quem está DENTRO?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi dentro da toca." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Perto e longe mostram distância.", "Dentro e fora mostram interior e exterior.", "Em cima e embaixo mostram altura.", "Saber a posição das coisas ajuda a se mover."
    ],
    dica: "Amanhã, procure algo PERTO, algo LONGE, algo DENTRO e algo FORA na sua casa.",
  },

  quiz: [
    { pergunta: "Se algo está BEM COLADO em você, está…", opcoes: ["Perto", "Longe", "Dentro"], correta: 0, explicacao: "Colado = perto.", visual: { tipo: "cena", posicao: "aoLado", referenciaImg: arvoreImg, referenciaLabel: "Árvore", sujeitoImg: brilhaImg, sujeitoLabel: "Perto" } },
    { pergunta: "Se um brinquedo está DENTRO da caixa, ele está…", opcoes: ["Fora", "Dentro", "Em cima"], correta: 1, explicacao: "Dentro é por dentro.", visual: { tipo: "cena", posicao: "dentro", referenciaImg: bauImg, referenciaLabel: "Caixa", sujeitoImg: blocoImg, sujeitoLabel: "Brinquedo" } },
    { pergunta: "Se algo está EMBAIXO da mesa, está…", opcoes: ["Em cima", "Embaixo", "Do lado"], correta: 1, explicacao: "Embaixo é abaixo.", visual: { tipo: "cena", posicao: "baixo", referenciaImg: arvoreImg, referenciaLabel: "Mesa", sujeitoImg: blocoImg, sujeitoLabel: "Embaixo" } }
  ],

  conclusao: "🏅 Medalha: Guardião do Espaço! A neblina se dissipou e a floresta voltou a ter posição certa. Missão em Casa: coloque um brinquedo DENTRO da caixa e outro EM CIMA da mesa.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "O cérebro tem um MAPA INTERNO do corpo! Ele sabe onde suas mãos estão mesmo de olhos fechados.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três posições", instrucao: "Cada amigo está numa posição diferente.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Perto" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Longe" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Dentro" }], pergunta: "Quantas posições aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 posições!", erro: "Conte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todos organizados", instrucao: "Todos os amigos se organizaram no espaço.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }], pergunta: "Quantos amigos se organizaram?", opcoes: ["4", "5", "6"], correta: 1, acerto: "5 amigos organizados!", erro: "Aponte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, sua posição", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "PERTO da árvore", aImagem: brilhaImg, aQuantidade: 1, bImagem: arvoreImg, bQuantidade: 1 },
      { a: "Lupi", b: "LONGE, na flor", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
      { a: "Fifi", b: "DENTRO da caixa", aImagem: fifiImg, aQuantidade: 1, bImagem: bauImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quem está PERTO?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha coladinho.", visual: { tipo: "cena", posicao: "aoLado", referenciaImg: arvoreImg, referenciaLabel: "Árvore", sujeitoImg: brilhaImg, sujeitoLabel: "Perto" } },
      { pergunta: "Quantas posições?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 posições.", visual: { tipo: "grupos", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Perto", cor: "#FBBF24" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Longe", cor: "#60A5FA" }, { imagemUrl: bauImg, quantidade: 1, rotulo: "Dentro", cor: "#FB923C" }] } }
    ],
    medio: [
      { pergunta: "O Brilha está pertinho da Fifi. Como se sente?", opcoes: ["Feliz", "Bravo", "Sozinho"], correta: 0, explicacao: "Perto de amigo = feliz.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Lupi está longe. Como se sente?", opcoes: ["Acompanhado", "Sozinho", "Bravo"], correta: 1, explicacao: "Longe pode dar solidão.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Sozinho" } }
    ],
    dificil: [
      { pergunta: "É bom saber onde as coisas estão?", opcoes: ["Sim — evita tropeço", "Não faz diferença"], correta: 0, explicacao: "Espaço evita acidentes.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Se estou LONGE de alguém, o que fazer pra ficar PERTO?", opcoes: ["Andar até", "Ficar parado"], correta: 0, explicacao: "Andar aproxima.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG09",
    titulo: "Coordenação Global",
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
