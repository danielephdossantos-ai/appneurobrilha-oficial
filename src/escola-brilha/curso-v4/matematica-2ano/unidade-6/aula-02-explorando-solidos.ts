import type { AulaV4 } from "../../types";
import { url as cubo } from "@/assets/neuro-treino/objetos/cubo.png.asset.json";
import { url as esfera } from "@/assets/neuro-treino/objetos/esfera.png.asset.json";
import { url as cilindro } from "@/assets/neuro-treino/objetos/cilindro.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as dado } from "@/assets/neuro-treino/objetos/dado.png.asset.json";
import { url as lata } from "@/assets/neuro-treino/objetos/lata.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 6 · Aula 2 — "Explorando os Sólidos"
 * Cidade das Descobertas · Geometria espacial (2º ano).
 */
export const aula02_explorandoSolidos: AulaV4 = {
  slug: "u6-02-explorando-solidos",
  titulo: "Explorando os Sólidos",
  iconeTrilha: "📦",
  bncc: ["EF02MA14"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A estação de entregas",
    historia:
      "Brilha chegou na ESTAÇÃO DE ENTREGAS! Caixas, bolas, latas e dados por todo lado. A Coruja disse: 'Cada um desses é um SÓLIDO. Vamos aprender o nome de cada um!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Observe os sólidos que chegaram na estação:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: dado, quantidade: 1, rotulo: "Dado" },
      { tipo: "grupoItens", imagemUrl: bola, quantidade: 1, rotulo: "Bola" },
      { tipo: "grupoItens", imagemUrl: lata, quantidade: 1, rotulo: "Lata" },
      { tipo: "grupoItens", imagemUrl: caixa, quantidade: 1, rotulo: "Caixa" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que faz um sólido ser DIFERENTE do outro?",
    pista: "Uns têm pontas e cantos. Outros rolam.",
    revelacao:
      "🧊 CUBO tem 6 faces iguais. 📦 BLOCO retangular tem faces diferentes. ⚽ ESFERA rola pra tudo. 🥫 CILINDRO tem 2 círculos e rola pro lado.",
  },

  momento04_explicacao: {
    titulo: "Os 4 sólidos do dia a dia",
    etapas: [
      { texto: "🧊 CUBO — 6 faces IGUAIS. Ex.: dado.", exemplo: "Todo lado é quadrado.", imagemUrl: cubo },
      { texto: "📦 BLOCO retangular — 6 faces, 3 pares. Ex.: caixa de sapato.", exemplo: "Faces retangulares.", imagemUrl: bloco },
      { texto: "⚽ ESFERA — redonda, rola pra tudo.", exemplo: "Ex.: bola.", imagemUrl: esfera },
      { texto: "🥫 CILINDRO — 2 círculos e um lado curvo.", exemplo: "Ex.: lata de milho.", imagemUrl: cilindro },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha organiza a estação:",
    passos: [
      "Vejo um DADO: 6 faces quadradas iguais → CUBO.",
      "Vejo uma BOLA: rola pra tudo → ESFERA.",
      "Vejo uma LATA: 2 círculos e um lado curvo → CILINDRO.",
      "Vejo uma CAIXA de livros: retangular → BLOCO.",
    ],
    resposta: "Cada objeto foi pro depósito certo!",
    visualUrl: caixa,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Uma LATA de milho é qual sólido?",
    dica: "Tem 2 círculos (em cima e embaixo) e rola pro lado.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Que sólido é uma lata?",
      opcoes: [
        { nome: "Cilindro", imagemUrl: cilindro },
        { nome: "Cubo", imagemUrl: cubo },
        { nome: "Esfera", imagemUrl: esfera },
      ],
      respostaCerta: "Cilindro",
      feedbackAcerto: "🎉 Isso! Lata = CILINDRO.",
      feedbackErro: "2 círculos + lado curvo = CILINDRO.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Um DADO é qual sólido?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "6 faces quadradas iguais. Que sólido?",
      opcoes: [
        { nome: "Esfera", imagemUrl: esfera },
        { nome: "Cubo", imagemUrl: cubo },
        { nome: "Cilindro", imagemUrl: cilindro },
      ],
      respostaCerta: "Cubo",
      feedbackAcerto: "🎉 6 faces iguais = CUBO.",
      feedbackErro: "Faces quadradas iguais = CUBO.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Chegou uma BOLA pra ser entregue.",
    problema: "Pra qual depósito ela vai?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Bola é qual sólido?",
      opcoes: [
        { nome: "Cubo", imagemUrl: cubo },
        { nome: "Esfera", imagemUrl: esfera },
        { nome: "Bloco", imagemUrl: bloco },
      ],
      respostaCerta: "Esfera",
      feedbackAcerto: "🎉 Bola rola pra tudo = ESFERA.",
      feedbackErro: "Rola pra qualquer lado = ESFERA.",
    },
  },

  momento09_revisao: {
    pontos: [
      "🧊 Cubo: 6 faces iguais.",
      "📦 Bloco: retangular, 3 pares de faces.",
      "⚽ Esfera: redonda, rola pra tudo.",
      "🥫 Cilindro: 2 círculos + lado curvo.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Um LIVRO grosso lembra qual sólido?",
      opcoes: [
        { nome: "Bloco", imagemUrl: bloco },
        { nome: "Esfera", imagemUrl: esfera },
        { nome: "Cilindro", imagemUrl: cilindro },
      ],
      respostaCerta: "Bloco",
      feedbackAcerto: "🎉 Retangular = BLOCO.",
      feedbackErro: "Faces retangulares = BLOCO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Quantas faces tem um CUBO?",
        opcoes: ["4", "6", "8"],
        correta: 1,
        feedbackAcerto: "🎉 Cubo tem 6 faces.",
        feedbackErro: "Cubo tem 6 faces iguais.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Qual sólido rola pra qualquer lado?",
        opcoes: ["Cubo", "Esfera", "Bloco"],
        correta: 1,
        feedbackAcerto: "🎉 Esfera rola pra tudo.",
        feedbackErro: "A esfera é redonda e rola pra tudo.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Uma LATA de milho é…",
        opcoes: ["Cilindro", "Cubo", "Esfera"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Lata = CILINDRO.",
        feedbackErro: "2 círculos + lado curvo = CILINDRO.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Uma caixa de sapato é…",
        opcoes: ["Esfera", "Bloco retangular", "Cilindro"],
        correta: 1,
        feedbackAcerto: "🎉 Caixa retangular = BLOCO.",
        feedbackErro: "Faces retangulares = BLOCO.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Um dado de jogo é…",
        opcoes: ["Cubo", "Cilindro", "Esfera"],
        correta: 0,
        feedbackAcerto: "🎉 6 faces iguais = CUBO. 🏆",
        feedbackErro: "6 faces quadradas iguais = CUBO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📦 Estação de Entregas em Casa",
    materiais: ["4 objetos da casa"],
    passos: [
      "1) Procurem: 1 cubo, 1 esfera, 1 cilindro e 1 bloco retangular.",
      "2) A criança nomeia cada sólido.",
      "3) Empilhem os sólidos: quais empilham? Quais rolam?",
      "4) Registrem o que descobriram.",
    ],
    registro: "📸 Foto dos 4 sólidos organizados.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Organizador(a) dos Sólidos",
  },
};
