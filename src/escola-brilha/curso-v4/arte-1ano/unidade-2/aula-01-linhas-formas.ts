import type { AulaArteV1 } from "../../types";
import vocabReta from "@/assets/arte-2ano/u2-vocab-reta.jpg";
import vocabCurva from "@/assets/arte-2ano/u2-vocab-curva.jpg";
import vocabForma from "@/assets/arte-2ano/u2-vocab-forma.jpg";
import vocabContorno from "@/assets/arte-2ano/u2-vocab-contorno.jpg";
import pigKandinsky from "@/assets/arte-2ano/u2-pig-kandinsky.jpg";
import pigMondrian from "@/assets/arte-2ano/u2-pig-mondrian.jpg";
import pigTriangulo from "@/assets/arte-2ano/u2-pig-triangulo.jpg";
import pigRetangulo from "@/assets/arte-2ano/u2-pig-retangulo.jpg";
import objPizza from "@/assets/arte-2ano/u2-obj-pizza.jpg";
import objBola from "@/assets/arte-2ano/u2-obj-bola.jpg";
import objPorta from "@/assets/arte-2ano/u2-obj-porta.jpg";
import passo1Img from "@/assets/arte-2ano/u2-passo1-quadrado.jpg";
import passo2Img from "@/assets/arte-2ano/u2-passo2-triangulo.jpg";
import passo3Img from "@/assets/arte-2ano/u2-passo3-porta.jpg";
import passo4Img from "@/assets/arte-2ano/u2-passo4-janela.jpg";
import passo5Img from "@/assets/arte-2ano/u2-passo5-sol.jpg";

/** Arte · 1º Ano · Unidade 2 · Aula 01 — "Linhas e Formas Que Eu Vejo" (EF15AR04) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-linhas-formas",
  titulo: "Linhas e Formas Que Eu Vejo",
  iconeTrilha: "📐",
  bncc: ["EF15AR04"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Olha essas formas! Toca em cada uma pra ver de onde ela vem no mundo.",
    titulo: "Formas Mágicas",
    instrucao: "Toca em cada forma",
    itens: [
      { emoji: "🔺", rotulo: "Triângulo", descricao: "Tem 3 pontas. Igual fatia de pizza.", cor: "#f97316" },
      { emoji: "⬛", rotulo: "Quadrado", descricao: "Tem 4 lados iguais. Igual janela.", cor: "#2563eb" },
      { emoji: "⚪", rotulo: "Círculo", descricao: "É redondo. Igual bola.", cor: "#22c55e" },
      { emoji: "▬", rotulo: "Retângulo", descricao: "4 lados: 2 grandes e 2 pequenos. Igual porta.", cor: "#a855f7" },
    ],
    falaFinal: "Formas são os tijolinhos de todo desenho!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha qual forma!",
    perguntas: [
      { pergunta: "Qual forma é redonda, sem pontas?",
        alternativas: [{ texto: "Círculo", correta: true }, { texto: "Quadrado", correta: false }],
        feedbackAcerto: "Círculo! Redondinho.", feedbackErro: "Quadrado tem pontas. Círculo é redondo." },
      { pergunta: "Qual forma tem 3 lados?",
        alternativas: [{ texto: "Triângulo", correta: true }, { texto: "Quadrado", correta: false }],
        feedbackAcerto: "Triângulo tem 3!", feedbackErro: "Quadrado tem 4. Triângulo tem 3." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Toca em cada cartinha.",
    cards: [
      { termo: "Linha Reta", definicao: "Vai direto. Igual régua.", emoji: "➖", cor: "#2563eb", fotoUrl: vocabReta },
      { termo: "Linha Curva", definicao: "Faz onda.", emoji: "〰️", cor: "#22c55e", fotoUrl: vocabCurva },
      { termo: "Forma", definicao: "Um desenho fechado.", emoji: "🔷", cor: "#f97316", fotoUrl: vocabForma },
      { termo: "Contorno", definicao: "A borda do desenho.", emoji: "✏️", cor: "#a855f7", fotoUrl: vocabContorno },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Tem pintor famoso que usa só formas!",
    paragrafos: [
      "Kandinsky pintava círculos, triângulos e quadrados coloridos.",
      "Mondrian usava só linhas retas e cores primárias.",
      "Formas simples viram arte de museu!",
    ],
    pigmentos: [
      { nome: "Círculo do Kandinsky", hex: "#f97316", fonte: "Cores em círculos", emoji: "⭕", fotoUrl: pigKandinsky },
      { nome: "Quadrado do Mondrian", hex: "#dc2626", fonte: "Linhas pretas", emoji: "🟥", fotoUrl: pigMondrian },
      { nome: "Triângulo", hex: "#facc15", fonte: "3 pontas", emoji: "🔺", fotoUrl: pigTriangulo },
      { nome: "Retângulo", hex: "#2563eb", fonte: "Alto e estreito", emoji: "🟦", fotoUrl: pigRetangulo },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Mostra o que aprendeu!",
    perguntas: [
      { pergunta: "Quantos lados tem um Triângulo?",
        alternativas: [{ texto: "3", correta: true }, { texto: "4", correta: false }],
        feedbackAcerto: "3 lados!", feedbackErro: "Triângulo tem 3." },
      { pergunta: "Bola de futebol é qual forma?",
        alternativas: [{ texto: "Círculo", correta: true }, { texto: "Quadrado", correta: false }],
        feedbackAcerto: "Círculo!", feedbackErro: "Bola é redonda = Círculo." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada objeto tem uma forma escondida!",
    animais: [
      { nome: "Pizza", emoji: "🍕", fotoUrl: objPizza,
        corAlvo: { nome: "Triângulo", hex: "#f97316" },
        opcoes: [{ nome: "Círculo", hex: "#22c55e" }, { nome: "Triângulo", hex: "#f97316" }],
        falaAcerto: "Triângulo!" },
      { nome: "Bola", emoji: "⚽", fotoUrl: objBola,
        corAlvo: { nome: "Círculo", hex: "#22c55e" },
        opcoes: [{ nome: "Círculo", hex: "#22c55e" }, { nome: "Triângulo", hex: "#f97316" }],
        falaAcerto: "Círculo redondinho!" },
      { nome: "Porta", emoji: "🚪", fotoUrl: objPorta,
        corAlvo: { nome: "Retângulo", hex: "#a855f7" },
        opcoes: [{ nome: "Retângulo", hex: "#a855f7" }, { nome: "Círculo", hex: "#22c55e" }],
        falaAcerto: "Retângulo!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos na ordem certa pra desenhar uma casinha!",
    passos: [
      { id: "p1", texto: "Quadrado grande (parede)", emoji: "⬛", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Triângulo em cima (telhado)", emoji: "🔺", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "Retângulo (porta)", emoji: "🟪", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Quadradinho (janela)", emoji: "🟦", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "Círculo (sol)", emoji: "☀️", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Você construiu uma casinha!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras coloridas.",
    titulo: "Meu Diário",
    trechos: [
      { texto: "O telhado ficou", palavraDestaque: "triângulo", corDestaque: "#f97316" },
      { texto: "O sol é um", palavraDestaque: "círculo", corDestaque: "#facc15" },
      { texto: "A porta é um", palavraDestaque: "retângulo", corDestaque: "#a855f7" },
      { texto: "Eu sou artista!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Detetive das Formas! Toque em cada forma!",
    titulo: "🔎 Caça Formas",
    instrucao: "Toque em todas!",
    tempoSeg: 45,
    itens: [
      { emoji: "🔺", rotulo: "Triângulo", cor: "#f97316" },
      { emoji: "⚪", rotulo: "Círculo", cor: "#facc15" },
      { emoji: "🟦", rotulo: "Quadrado", cor: "#2563eb" },
      { emoji: "🟪", rotulo: "Retângulo", cor: "#a855f7" },
    ],
    falaFinal: "Achou todas!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Toca em cada forma pra revisar.",
    titulo: "🔁 Roda das Formas",
    itens: [
      { emoji: "🔺", rotulo: "Triângulo", descricao: "3 lados. Pizza, telhado.", cor: "#f97316" },
      { emoji: "⚪", rotulo: "Círculo", descricao: "Redondo. Sol, bola.", cor: "#22c55e" },
      { emoji: "⬛", rotulo: "Quadrado", descricao: "4 lados iguais.", cor: "#2563eb" },
      { emoji: "▬", rotulo: "Retângulo", descricao: "Porta, TV.", cor: "#a855f7" },
    ],
    falaFinal: "Você é mestre das formas!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão!",
    quiz: {
      pergunta: "Quantos lados tem o Triângulo?",
      alternativas: [{ texto: "3 lados", correta: true }, { texto: "4 lados", correta: false }],
      feedback: "3 lados! Perfeito!",
    },
    missaoFamilia: "🏠 Caça Formas em Casa: com a família, ache 1 triângulo, 1 quadrado, 1 círculo. Tire foto!",
    recompensaTitulo: "📐 Segunda página do Baú aberta!",
    recompensaItem: "📐 Reguinha Mágica",
  },
  recompensa: { xp: 50, moedas: 25, medalha: "Reguinha Mágica" },
};
