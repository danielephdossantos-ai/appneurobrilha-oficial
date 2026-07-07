import type { AulaV4 } from "../../types";
import quadrado from "@/assets/neuro-treino/objetos/quadrado.png";
import triangulo from "@/assets/neuro-treino/objetos/triangulo.png";
import circulo from "@/assets/neuro-treino/objetos/circulo.png";
import cubo from "@/assets/neuro-treino/objetos/cubo.png";
import esfera from "@/assets/neuro-treino/objetos/esfera.png";
import cilindro from "@/assets/neuro-treino/objetos/cilindro.png";
import bloco from "@/assets/neuro-treino/objetos/bloco.png";
import relogio from "@/assets/neuro-treino/objetos/relogio.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import lata from "@/assets/neuro-treino/objetos/lata.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 6 · Aula 5 — "Missão Final dos Exploradores"
 * Mapa completo da Cidade das Descobertas: formas + sólidos +
 * localização + medidas + relógio.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u6-05-missao-final-exploradores",
  titulo: "Missão Final dos Exploradores",
  iconeTrilha: "🧭",
  bncc: ["EF02MA12", "EF02MA14", "EF02MA16", "EF02MA19"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O mapa completo",
    historia:
      "Brilha subiu no alto da torre e viu a CIDADE DAS DESCOBERTAS inteira. A Coruja disse: 'Falta uma última missão — MAPEAR a cidade toda: formas, sólidos, caminhos, medidas e horários. Se conseguir, vira GRANDE EXPLORADOR!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Passe pelo mapa e revise tudo o que você aprendeu:",
    cenas: [
      { tipo: "imagem", url: mapa, alt: "Mapa completo da cidade" },
      { tipo: "grupoItens", imagemUrl: circulo, quantidade: 1, rotulo: "Formas" },
      { tipo: "grupoItens", imagemUrl: cubo, quantidade: 1, rotulo: "Sólidos" },
      { tipo: "grupoItens", imagemUrl: mapa, quantidade: 1, rotulo: "Caminhos" },
      { tipo: "grupoItens", imagemUrl: relogio, quantidade: 1, rotulo: "Medidas & tempo" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que você já sabe fazer de EXPLORADOR?",
    pista: "Formas, sólidos, direções, medidas e horas.",
    revelacao:
      "Você aprendeu 5 super-poderes: reconhecer FORMAS, identificar SÓLIDOS, usar CAMINHOS, MEDIR e LER O RELÓGIO. Agora vamos usar TUDO junto!",
  },

  momento04_explicacao: {
    titulo: "Kit do Grande Explorador",
    etapas: [
      { texto: "🔺 Formas planas: quadrado, retângulo, triângulo, círculo." },
      { texto: "📦 Sólidos: cubo, bloco, esfera, cilindro." },
      { texto: "🗺️ Caminhos: esquerda, direita, em cima, embaixo, entre." },
      { texto: "📏 Medidas: comprimento (régua), massa (balança), capacidade (copo), tempo (relógio)." },
      { texto: "🕒 Relógio: ponteiro grande no 12 = hora cheia; no 6 = meia hora.", imagemUrl: relogio },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha mapeia a praça:",
    passos: [
      "Vejo uma BOLA → forma de círculo, sólido esfera.",
      "Ao LADO da praça tem uma escola.",
      "A LATA de lixo é um cilindro.",
      "O relógio da torre marca 12:00 (hora cheia).",
    ],
    resposta: "Praça mapeada! ✅",
    visualUrl: parque,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Que sólido é uma LATA?",
    dica: "2 círculos e um lado curvo…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Lata =",
      opcoes: [
        { nome: "Cilindro", imagemUrl: cilindro },
        { nome: "Cubo", imagemUrl: cubo },
        { nome: "Esfera", imagemUrl: esfera },
      ],
      respostaCerta: "Cilindro",
      feedbackAcerto: "🎉 Lata = CILINDRO.",
      feedbackErro: "2 círculos + curva = CILINDRO.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — A escola fica ENTRE a casa e o mercado. O que ENTRE quer dizer?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "ENTRE =",
      opcoes: [
        { nome: "No meio de dois", imagemUrl: escola },
        { nome: "Em cima", imagemUrl: parque },
        { nome: "Atrás", imagemUrl: bloco },
      ],
      respostaCerta: "No meio de dois",
      feedbackAcerto: "🎉 ENTRE = no meio de dois.",
      feedbackErro: "ENTRE quer dizer 'no meio de dois'.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — O relógio da torre está com o ponteiro grande no 6.",
    problema: "Se o pequeno está no 3, que horas são?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Grande no 6 = meia hora. Pequeno no 3. Que horas?",
      opcoes: [
        { nome: "3:00", imagemUrl: relogio },
        { nome: "3:30 (três e meia)", imagemUrl: relogio },
        { nome: "6:00", imagemUrl: relogio },
      ],
      respostaCerta: "3:30 (três e meia)",
      feedbackAcerto: "🎉 Isso! 3:30 — três e meia.",
      feedbackErro: "Grande no 6 = meia hora. Pequeno no 3 = 3:30.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Formas planas, sólidos, direções, medidas e horas.",
      "🕒 Grande no 12 = hora cheia. Grande no 6 = meia hora.",
      "📏 Cada medida tem seu instrumento.",
      "🗺️ Palavras de lugar guiam o caminho.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Um LIVRO é qual forma plana?",
      opcoes: [
        { nome: "Retângulo", imagemUrl: livro },
        { nome: "Círculo", imagemUrl: circulo },
        { nome: "Triângulo", imagemUrl: triangulo },
      ],
      respostaCerta: "Retângulo",
      feedbackAcerto: "🎉 Livro = RETÂNGULO.",
      feedbackErro: "4 lados, 2 pares = RETÂNGULO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Uma BOLA é qual sólido?",
        opcoes: ["Cubo", "Esfera", "Cilindro"],
        correta: 1,
        feedbackAcerto: "🎉 Bola = ESFERA.",
        feedbackErro: "Redonda, rola pra tudo = ESFERA.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Uma JANELA quadradinha é qual forma?",
        opcoes: ["Círculo", "Quadrado", "Triângulo"],
        correta: 1,
        feedbackAcerto: "🎉 4 lados iguais = QUADRADO.",
        feedbackErro: "Lados iguais = QUADRADO.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Pra ir da CASA ao MERCADO à direita, você vai pra…",
        opcoes: ["Esquerda", "Direita", "Atrás"],
        correta: 1,
        feedbackAcerto: "🎉 DIREITA.",
        feedbackErro: "Se está à direita, vou pra DIREITA.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Pra medir quanto de água cabe uso…",
        opcoes: ["Régua", "Balança", "Copo medidor"],
        correta: 2,
        feedbackAcerto: "🎉 Capacidade = COPO MEDIDOR.",
        feedbackErro: "Líquido = COPO MEDIDOR.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Ponteiro grande no 6, pequeno no 7. Que horas?",
        opcoes: ["7:00", "7:30 (sete e meia)", "6:00"],
        correta: 1,
        feedbackAcerto: "🎉 Grande no 6 = meia hora → 7:30. 🏆 GRANDE EXPLORADOR!",
        feedbackErro: "Grande no 6 = meia hora. Pequeno no 7 = 7:30.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧭 Caça Matemática em Casa",
    materiais: ["Régua", "Relógio", "Papel e lápis"],
    passos: [
      "1) Encontrem 3 objetos CIRCULARES, 3 RETANGULARES, 2 QUADRADOS e 2 TRIANGULARES.",
      "2) Meçam 2 objetos com a régua e anotem.",
      "3) Observem o relógio em uma HORA CHEIA e em uma MEIA HORA.",
      "4) A criança registra tudo no caderno como um mapa de exploração.",
    ],
    registro: "📸 Foto do 'mapa da caça matemática' com todas as descobertas.",
  },

  recompensa: {
    xp: 700,
    moedas: 450,
    medalha: "Grande Explorador(a) Matemático(a)",
  },
};
