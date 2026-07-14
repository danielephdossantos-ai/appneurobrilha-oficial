import type { AulaV4 } from "../../types";
import { url as quadrado } from "@/assets/neuro-treino/objetos/quadrado.png.asset.json";
import { url as triangulo } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";
import { url as circulo } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 6 · Aula 1 — "A Caça às Formas"
 * Cidade das Descobertas · Geometria plana (2º ano).
 *
 * Reconhecer quadrado, retângulo, triângulo e círculo em objetos do dia a dia.
 */
export const aula01_cacaAsFormas: AulaV4 = {
  slug: "u6-01-caca-as-formas",
  titulo: "A Caça às Formas",
  iconeTrilha: "🔺",
  bncc: ["EF02MA14", "EF02MA15"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A praça das formas",
    historia:
      "Brilha e a Coruja chegaram na CIDADE DAS DESCOBERTAS! A Coruja apontou pra praça: 'Olha só… tem forma em TUDO! Na janela, na bola, na placa, no telhado.' Brilha piscou: 'Vamos caçar as formas escondidas por aqui!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Toque nos objetos da praça e descubra a forma de cada um:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: livro, quantidade: 1, rotulo: "Livro" },
      { tipo: "grupoItens", imagemUrl: bola, quantidade: 1, rotulo: "Bola" },
      { tipo: "grupoItens", imagemUrl: relogio, quantidade: 1, rotulo: "Relógio" },
      { tipo: "grupoItens", imagemUrl: casa, quantidade: 1, rotulo: "Casa (telhado)" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que faz uma forma ser DIFERENTE da outra?",
    pista: "Conte quantos LADOS cada forma tem.",
    revelacao:
      "Isso! 🟦 QUADRADO tem 4 lados iguais. ⬛ RETÂNGULO tem 4 lados (2 pares). 🔺 TRIÂNGULO tem 3 lados. ⚪ CÍRCULO NÃO tem lados — é redondinho.",
  },

  momento04_explicacao: {
    titulo: "As 4 formas planas",
    etapas: [
      { texto: "🟦 QUADRADO — 4 lados IGUAIS.", exemplo: "Ex.: janela quadrada.", imagemUrl: quadrado },
      { texto: "⬛ RETÂNGULO — 4 lados, 2 pares iguais.", exemplo: "Ex.: livro, porta.", imagemUrl: livro },
      { texto: "🔺 TRIÂNGULO — 3 lados.", exemplo: "Ex.: telhado, fatia de pizza.", imagemUrl: triangulo },
      { texto: "⚪ CÍRCULO — não tem lados, é redondo.", exemplo: "Ex.: bola, relógio.", imagemUrl: circulo },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha caça formas na praça:",
    passos: [
      "Vejo um LIVRO: 4 lados, 2 pares. → RETÂNGULO.",
      "Vejo o RELÓGIO: redondinho, sem lados. → CÍRCULO.",
      "Vejo o TELHADO da casa: 3 lados. → TRIÂNGULO.",
      "Vejo a JANELA quadradinha: 4 lados iguais. → QUADRADO.",
    ],
    resposta: "Cada objeto tem uma forma diferente!",
    visualUrl: casa,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Que forma tem esta BOLA?",
    dica: "É redondinha, sem lados… lembra o quê?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma da bola?",
      opcoes: [
        { nome: "Círculo", imagemUrl: circulo },
        { nome: "Quadrado", imagemUrl: quadrado },
        { nome: "Triângulo", imagemUrl: triangulo },
      ],
      respostaCerta: "Círculo",
      feedbackAcerto: "🎉 Isso! A bola é redonda — forma de CÍRCULO.",
      feedbackErro: "Bola não tem lados… é redondinha → CÍRCULO.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Qual a forma de um LIVRO?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Livro tem 4 lados, 2 pares iguais. Qual forma?",
      opcoes: [
        { nome: "Triângulo", imagemUrl: triangulo },
        { nome: "Retângulo", imagemUrl: livro },
        { nome: "Círculo", imagemUrl: circulo },
      ],
      respostaCerta: "Retângulo",
      feedbackAcerto: "🎉 Boa! Livro é RETÂNGULO.",
      feedbackErro: "4 lados, 2 pares iguais = RETÂNGULO.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — O telhado da casa tem forma de…",
    problema: "Olhe pra casa. Qual forma tem o telhado?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Telhado tem 3 lados. Que forma é?",
      opcoes: [
        { nome: "Quadrado", imagemUrl: quadrado },
        { nome: "Triângulo", imagemUrl: triangulo },
        { nome: "Círculo", imagemUrl: circulo },
      ],
      respostaCerta: "Triângulo",
      feedbackAcerto: "🎉 Isso! 3 lados = TRIÂNGULO.",
      feedbackErro: "Conte os lados: 3 → TRIÂNGULO.",
    },
  },

  momento09_revisao: {
    pontos: [
      "🟦 Quadrado: 4 lados iguais.",
      "⬛ Retângulo: 4 lados, 2 pares.",
      "🔺 Triângulo: 3 lados.",
      "⚪ Círculo: sem lados, redondo.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Uma janela quadradinha é qual forma?",
      opcoes: [
        { nome: "Quadrado", imagemUrl: quadrado },
        { nome: "Círculo", imagemUrl: circulo },
        { nome: "Triângulo", imagemUrl: triangulo },
      ],
      respostaCerta: "Quadrado",
      feedbackAcerto: "🎉 Isso! 4 lados iguais = QUADRADO.",
      feedbackErro: "4 lados IGUAIS = QUADRADO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Quantos lados tem um TRIÂNGULO?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Triângulo tem 3 lados.",
        feedbackErro: "Triângulo tem 3 lados.",
      },
      {
        pergunta: "Pergunta 2 de 5 — O RELÓGIO redondo é qual forma?",
        opcoes: ["Quadrado", "Círculo", "Triângulo"],
        correta: 1,
        feedbackAcerto: "🎉 Redondo = CÍRCULO.",
        feedbackErro: "Sem lados, redondo = CÍRCULO.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Livro tem qual forma?",
        opcoes: ["Retângulo", "Círculo", "Triângulo"],
        correta: 0,
        feedbackAcerto: "🎉 4 lados, 2 pares = RETÂNGULO.",
        feedbackErro: "4 lados, 2 pares iguais = RETÂNGULO.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Qual forma NÃO tem lados?",
        opcoes: ["Quadrado", "Triângulo", "Círculo"],
        correta: 2,
        feedbackAcerto: "🎉 Círculo é redondo, sem lados.",
        feedbackErro: "Círculo é o único SEM lados.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Uma janela com 4 lados IGUAIS é…",
        opcoes: ["Retângulo", "Quadrado", "Triângulo"],
        correta: 1,
        feedbackAcerto: "🎉 4 lados iguais = QUADRADO. 🏆",
        feedbackErro: "IGUAIS = QUADRADO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏡 Caça às Formas em Casa",
    materiais: ["Olhos atentos", "Papel e lápis"],
    passos: [
      "1) Andem pela casa procurando formas.",
      "2) Encontrem 1 QUADRADO, 1 RETÂNGULO, 1 TRIÂNGULO e 1 CÍRCULO.",
      "3) A criança desenha ou registra cada objeto encontrado.",
      "4) A família confere: os lados batem?",
    ],
    registro: "📸 Foto ou desenho dos 4 objetos com a forma escrita ao lado.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Caçador(a) de Formas",
  },
};
