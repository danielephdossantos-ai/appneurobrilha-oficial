import type { AulaArteV1 } from "../../types";
import __asset_vocabReta from "@/assets/arte-2ano/u2-vocab-reta.jpg.asset.json";
const vocabReta = __asset_vocabReta.url;
import __asset_vocabCurva from "@/assets/arte-2ano/u2-vocab-curva.jpg.asset.json";
const vocabCurva = __asset_vocabCurva.url;
import __asset_vocabForma from "@/assets/arte-2ano/u2-vocab-forma.jpg.asset.json";
const vocabForma = __asset_vocabForma.url;
import __asset_vocabContorno from "@/assets/arte-2ano/u2-vocab-contorno.jpg.asset.json";
const vocabContorno = __asset_vocabContorno.url;
import __asset_pigKandinsky from "@/assets/arte-2ano/u2-pig-kandinsky.jpg.asset.json";
const pigKandinsky = __asset_pigKandinsky.url;
import __asset_pigMondrian from "@/assets/arte-2ano/u2-pig-mondrian.jpg.asset.json";
const pigMondrian = __asset_pigMondrian.url;
import __asset_pigTriangulo from "@/assets/arte-2ano/u2-pig-triangulo.jpg.asset.json";
const pigTriangulo = __asset_pigTriangulo.url;
import __asset_pigRetangulo from "@/assets/arte-2ano/u2-pig-retangulo.jpg.asset.json";
const pigRetangulo = __asset_pigRetangulo.url;
import __asset_objPizza from "@/assets/arte-2ano/u2-obj-pizza.jpg.asset.json";
const objPizza = __asset_objPizza.url;
import __asset_objBola from "@/assets/arte-2ano/u2-obj-bola.jpg.asset.json";
const objBola = __asset_objBola.url;
import __asset_objPorta from "@/assets/arte-2ano/u2-obj-porta.jpg.asset.json";
const objPorta = __asset_objPorta.url;
import __asset_passo1Img from "@/assets/arte-2ano/u2-passo1-quadrado.jpg.asset.json";
const passo1Img = __asset_passo1Img.url;
import __asset_passo2Img from "@/assets/arte-2ano/u2-passo2-triangulo.jpg.asset.json";
const passo2Img = __asset_passo2Img.url;
import __asset_passo3Img from "@/assets/arte-2ano/u2-passo3-porta.jpg.asset.json";
const passo3Img = __asset_passo3Img.url;
import __asset_passo4Img from "@/assets/arte-2ano/u2-passo4-janela.jpg.asset.json";
const passo4Img = __asset_passo4Img.url;
import __asset_passo5Img from "@/assets/arte-2ano/u2-passo5-sol.jpg.asset.json";
const passo5Img = __asset_passo5Img.url;

/**
 * Arte · 2º Ano · Unidade 2 · Aula 01 — "Linhas, Formas e o Desenho Geométrico"
 * (EF15AR04 / EF15AR02)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-linhas-formas",
  titulo: "Linhas, Formas e o Desenho Geométrico",
  iconeTrilha: "📐",
  bncc: ["EF15AR02", "EF15AR04"],
  duracaoMin: 22,

  // 1 — MOTIVAÇÃO
  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, olha esse quadro do Kandinsky! Parece um quebra-cabeça de formas. Toca em cada forma pra descobrir de onde ela vem no mundo!",
    titulo: "Galeria de Formas Mágicas",
    instrucao: "Toca em cada forma para explorar",
    itens: [
      { emoji: "🔺", rotulo: "Triângulo", descricao: "3 lados, parece a ponta de um foguete ou uma fatia de pizza.", cor: "#f97316" },
      { emoji: "⬛", rotulo: "Quadrado", descricao: "4 lados iguais, como a janela da sua casa.", cor: "#2563eb" },
      { emoji: "⚪", rotulo: "Círculo", descricao: "Sem pontas, gira como uma bola de futebol.", cor: "#22c55e" },
      { emoji: "▬", rotulo: "Retângulo", descricao: "4 lados, dois compridos e dois curtos, como uma porta.", cor: "#a855f7" },
    ],
    falaFinal: "As formas geométricas são os TIJOLINHOS de todo desenho do mundo!",
  },

  // 2 — PREVISÃO
  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de desenhar, vamos treinar o OLHO de artista. Que forma vai nascer?",
    perguntas: [
      {
        pergunta: "Se juntarmos 4 linhas retas do mesmo tamanho fechando todas as pontas, que forma nasce?",
        alternativas: [
          { texto: "Um Quadrado", correta: true },
          { texto: "Um Círculo", correta: false },
        ],
        feedbackAcerto: "Isso! 4 lados iguais = Quadrado.",
        feedbackErro: "Quase! Círculo não tem pontas nem lados retos.",
      },
      {
        pergunta: "Qual forma tem 3 lados e parece a ponta de uma montanha?",
        alternativas: [
          { texto: "Retângulo", correta: false },
          { texto: "Triângulo", correta: true },
        ],
        feedbackAcerto: "Perfeito! 3 lados = Triângulo.",
        feedbackErro: "Retângulo tem 4 lados. Montanha lembra Triângulo.",
      },
      {
        pergunta: "Que tipo de linha lembra as ondas do mar?",
        alternativas: [
          { texto: "Linha Reta", correta: false },
          { texto: "Linha Curva", correta: true },
        ],
        feedbackAcerto: "Boa! Curvas dão movimento suave ao desenho.",
        feedbackErro: "Linha reta é como uma régua. Ondas são curvas.",
      },
    ],
  },

  // 3 — VOCABULÁRIO
  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Toca em cada cartão pra aprender as palavras do artista geométrico.",
    cards: [
      { termo: "Linha Reta", definicao: "Vai direto de um ponto ao outro, sem curvar. Como uma régua.", emoji: "➖", cor: "#2563eb", fotoUrl: vocabReta },
      { termo: "Linha Curva", definicao: "Se dobra suave, como uma onda do mar ou uma nuvem.", emoji: "〰️", cor: "#22c55e", fotoUrl: vocabCurva },
      { termo: "Forma Geométrica", definicao: "Figura fechada feita de linhas: quadrado, círculo, triângulo.", emoji: "🔷", cor: "#f97316", fotoUrl: vocabForma },
      { termo: "Contorno", definicao: "É a borda que faz aparecer a forma no papel.", emoji: "✏️", cor: "#a855f7", fotoUrl: vocabContorno },
    ],
  },

  // 4 — LEITURA GUIADA (galeria de arte geométrica)
  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como pintores famosos usam formas pra fazer arte de verdade.",
    paragrafos: [
      "Há muito tempo, um pintor chamado Kandinsky descobriu que podia contar histórias usando SÓ formas e cores.",
      "Ele pintava CÍRCULOS gigantes, TRIÂNGULOS coloridos e QUADRADOS que dançavam no meio da tela.",
      "Outro artista, Piet Mondrian, usava apenas linhas RETAS e retângulos vermelhos, azuis e amarelos.",
      "Hoje, esses quadros estão em museus do mundo inteiro — e tudo começou com formas simples como as suas!",
    ],
    pigmentos: [
      { nome: "Círculo de Kandinsky", hex: "#f97316", fonte: "Cores concêntricas", emoji: "⭕", fotoUrl: pigKandinsky },
      { nome: "Quadrado de Mondrian", hex: "#dc2626", fonte: "Linhas pretas grossas", emoji: "🟥", fotoUrl: pigMondrian },
      { nome: "Triângulo do Foguete", hex: "#facc15", fonte: "Aponta pra cima", emoji: "🔺", fotoUrl: pigTriangulo },
      { nome: "Retângulo da Porta", hex: "#2563eb", fonte: "Alto e estreito", emoji: "🟦", fotoUrl: pigRetangulo },
    ],
  },

  // 5 — COMPREENSÃO
  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Mostra pra mim o que você aprendeu, artista geométrico!",
    perguntas: [
      {
        pergunta: "Quantos lados tem um Triângulo?",
        alternativas: [
          { texto: "3 lados", correta: true },
          { texto: "4 lados", correta: false },
        ],
        feedbackAcerto: "Tri = 3! Triângulo tem 3 lados.",
        feedbackErro: "4 lados é o Quadrado. Triângulo tem 3.",
      },
      {
        pergunta: "Qual pintor famoso usava só formas geométricas?",
        alternativas: [
          { texto: "Wassily Kandinsky", correta: true },
          { texto: "Ronaldinho Gaúcho", correta: false },
        ],
        feedbackAcerto: "Isso! Kandinsky é o mestre das formas coloridas.",
        feedbackErro: "Ronaldinho joga bola! Kandinsky é o pintor das formas.",
      },
      {
        pergunta: "Uma bola de futebol tem qual forma?",
        alternativas: [
          { texto: "Círculo", correta: true },
          { texto: "Quadrado", correta: false },
        ],
        feedbackAcerto: "Sim! Bola = Círculo, sem pontas.",
        feedbackErro: "Quadrado tem 4 pontas. Bola é redonda = Círculo.",
      },
    ],
  },

  // 6 — ATELIÊ (associar objeto → forma)
  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada objeto do dia a dia tem uma forma escondida. Escolhe a forma certa pra cada um!",
    animais: [
      {
        nome: "Fatia de pizza", emoji: "🍕", fotoUrl: objPizza,
        corAlvo: { nome: "Triângulo", hex: "#f97316" },
        opcoes: [
          { nome: "Círculo", hex: "#22c55e" },
          { nome: "Triângulo", hex: "#f97316" },
          { nome: "Quadrado", hex: "#2563eb" },
        ],
        falaAcerto: "Triângulo! 3 lados iguais que apontam pra fora.",
      },
      {
        nome: "Bola de futebol", emoji: "⚽", fotoUrl: objBola,
        corAlvo: { nome: "Círculo", hex: "#22c55e" },
        opcoes: [
          { nome: "Retângulo", hex: "#a855f7" },
          { nome: "Triângulo", hex: "#f97316" },
          { nome: "Círculo", hex: "#22c55e" },
        ],
        falaAcerto: "Círculo! Redondinho sem nenhuma ponta.",
      },
      {
        nome: "Porta da sala", emoji: "🚪", fotoUrl: objPorta,
        corAlvo: { nome: "Retângulo", hex: "#a855f7" },
        opcoes: [
          { nome: "Círculo", hex: "#22c55e" },
          { nome: "Retângulo", hex: "#a855f7" },
          { nome: "Triângulo", hex: "#f97316" },
        ],
        falaAcerto: "Retângulo! 2 lados compridos e 2 curtos.",
      },
    ],
  },

  // 7 — SEQUÊNCIA
  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA de como desenhamos uma casa usando só formas.",
    passos: [
      { id: "p1", texto: "Desenho um QUADRADO grande (a parede)", emoji: "⬛", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Em cima, um TRIÂNGULO (o telhado)", emoji: "🔺", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "No meio, um RETÂNGULO pequeno (a porta)", emoji: "🟪", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Do lado, um QUADRADINHO (a janela)", emoji: "🟦", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "Um CÍRCULO amarelo no céu (o sol!)", emoji: "☀️", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Uau! Você construiu uma casa inteira só com formas!",
  },

  // 8 — VOCÊ LÊ
  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do pequeno arquiteto. Toca nas palavras coloridas.",
    titulo: "Diário do Pequeno Arquiteto",
    trechos: [
      { texto: "Hoje eu desenhei um telhado bem", palavraDestaque: "triângulo", corDestaque: "#f97316" },
      { texto: "A parede virou um grande", palavraDestaque: "quadrado", corDestaque: "#2563eb" },
      { texto: "O sol lá no alto era um lindo", palavraDestaque: "círculo", corDestaque: "#facc15" },
      { texto: "E a porta ficou um perfeito", palavraDestaque: "retângulo", corDestaque: "#a855f7" },
      { texto: "Formas viraram uma casa. Eu sou arquiteto de verdade!" },
    ],
  },

  // 9 — MINIJOGO
  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Detetive das Formas! O museu está cheio de formas escondidas. Toque em CADA uma antes do tempo acabar!",
    titulo: "🔎 Detetive das Formas",
    instrucao: "Toque em todas as formas rapidinho!",
    tempoSeg: 45,
    itens: [
      { emoji: "🔺", rotulo: "Triângulo do telhado", cor: "#f97316" },
      { emoji: "⚪", rotulo: "Círculo do sol", cor: "#facc15" },
      { emoji: "🟦", rotulo: "Quadrado da janela", cor: "#2563eb" },
      { emoji: "🟪", rotulo: "Retângulo da porta", cor: "#a855f7" },
      { emoji: "🔺", rotulo: "Triângulo do foguete", cor: "#dc2626" },
      { emoji: "⚪", rotulo: "Círculo da bola", cor: "#22c55e" },
    ],
    falaFinal: "Você tem OLHO DE DETETIVE! Achou todas as formas!",
  },

  // 10 — REVISÃO
  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Vamos revisar tudo que aprendemos! Toca em cada forma pra lembrar.",
    titulo: "🔁 Roda das Formas",
    itens: [
      { emoji: "🔺", rotulo: "Triângulo", descricao: "3 lados. Fatia de pizza, telhado, montanha.", cor: "#f97316" },
      { emoji: "⚪", rotulo: "Círculo", descricao: "Redondo, sem pontas. Sol, bola, roda.", cor: "#22c55e" },
      { emoji: "⬛", rotulo: "Quadrado", descricao: "4 lados iguais. Janela, dado, azulejo.", cor: "#2563eb" },
      { emoji: "▬", rotulo: "Retângulo", descricao: "4 lados, 2 longos + 2 curtos. Porta, celular, TV.", cor: "#a855f7" },
      { emoji: "〰️", rotulo: "Linha Curva", descricao: "Suave como onda ou nuvem.", cor: "#06b6d4" },
      { emoji: "➖", rotulo: "Linha Reta", descricao: "Direta como uma régua.", cor: "#f43f5e" },
    ],
    falaFinal: "Agora você é um mestre das formas geométricas!",
  },

  // 11 — AVALIAÇÃO
  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, arquiteto! Prova que dominou as formas.",
    quiz: {
      pergunta: "Que tipo de linha se parece com as ondas do mar ou com o contorno de uma nuvem?",
      alternativas: [
        { texto: "Linha Curva", correta: true },
        { texto: "Linha Reta", correta: false },
      ],
      feedback: "Isso! Linhas curvas dão sensação de movimento e suavidade ao desenho.",
    },
    missaoFamilia:
      "🏠 Mestres Construtores: usando embalagens vazias (caixas de pasta de dente, caixas de leite, tampinhas), construam em família um brinquedo reciclado, conversando sobre as formas de cada peça.",
    recompensaTitulo: "🌈 Página 2 — O Castelo das Formas Perfeitas restaurada!",
    recompensaItem: "📐 Régua Mágica de Formas",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Régua Mágica de Formas" },
};
