import type { AulaArteV1 } from "../../types";
import __asset_mapaZoom from "@/assets/arte-4ano/u7-mapa-zoom.jpg.asset.json";
const mapaZoom = __asset_mapaZoom.url;
import __asset_mapaMario from "@/assets/arte-4ano/u7-mapa-mario.jpg.asset.json";
const mapaMario = __asset_mapaMario.url;
import __asset_mapaPacman from "@/assets/arte-4ano/u7-mapa-pacman.jpg.asset.json";
const mapaPacman = __asset_mapaPacman.url;
import __asset_mapaTela from "@/assets/arte-4ano/u7-mapa-tela.jpg.asset.json";
const mapaTela = __asset_mapaTela.url;
import __asset_vocabPixel from "@/assets/arte-4ano/u7-vocab-pixel.jpg.asset.json";
const vocabPixel = __asset_vocabPixel.url;
import __asset_vocabGrade from "@/assets/arte-4ano/u7-vocab-grade.jpg.asset.json";
const vocabGrade = __asset_vocabGrade.url;
import __asset_vocabPixelArt from "@/assets/arte-4ano/u7-vocab-pixelart.jpg.asset.json";
const vocabPixelArt = __asset_vocabPixelArt.url;
import __asset_matQuadriculado from "@/assets/arte-4ano/u7-mat-quadriculado.jpg.asset.json";
const matQuadriculado = __asset_matQuadriculado.url;
import __asset_matCanetinhas from "@/assets/arte-4ano/u7-mat-canetinhas.jpg.asset.json";
const matCanetinhas = __asset_matCanetinhas.url;
import __asset_matPostit from "@/assets/arte-4ano/u7-mat-postit.jpg.asset.json";
const matPostit = __asset_matPostit.url;
import __asset_matComputador from "@/assets/arte-4ano/u7-mat-computador.jpg.asset.json";
const matComputador = __asset_matComputador.url;
import __asset_qTelaZoom from "@/assets/arte-4ano/u7-q-telazoom.jpg.asset.json";
const qTelaZoom = __asset_qTelaZoom.url;
import __asset_qSprite from "@/assets/arte-4ano/u7-q-sprite.jpg.asset.json";
const qSprite = __asset_qSprite.url;
import __asset_passo1 from "@/assets/arte-4ano/u7-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-4ano/u7-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-4ano/u7-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-4ano/u7-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-4ano/u7-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 4º Ano · Unidade 7 · Aula 01 — "A Ilusão Digital"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial (FECHAMENTO)
 * Fonte: Gráficos 8-bits dos videogames dos anos 80 + movimento Pixel Art contemporâneo.
 * (EF15AR04 / EF15AR05 / EF15AR26)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-pixel-arte-digital",
  titulo: "A Ilusão Digital — Pixel, Grade e Pixel Art",
  iconeTrilha: "🕹️",
  bncc: ["EF15AR04", "EF15AR05", "EF15AR26"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Designer do Futuro! Dá zoom gigante numa foto do celular. A imagem lisa VIRA quadradinhos coloridos organizados em fileiras. Cada quadradinho é um PIXEL. Toca em cada pista.",
    titulo: "🕹️ O Código das Telas",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🔍", rotulo: "Zoom na tela", descricao: "Aproxima demais uma foto: aparecem quadradinhos coloridos. Isso são os PIXELS.", cor: "#dc2626", fotoUrl: mapaZoom },
      { emoji: "🍄", rotulo: "Mario 8-bits (1985)", descricao: "Personagem famoso feito com POUCOS quadradinhos coloridos numa grade pequena.", cor: "#f59e0b", fotoUrl: mapaMario },
      { emoji: "👾", rotulo: "Pac-Man (1980)", descricao: "Fantasmas e Pac-Man são desenhos pixel-a-pixel numa grade — limitação virou estilo!", cor: "#facc15", fotoUrl: mapaPacman },
      { emoji: "📱", rotulo: "Tela moderna", descricao: "MILHÕES de pixels tão pequenininhos que o olho vê imagem lisa e nítida.", cor: "#0ea5e9", fotoUrl: mapaTela },
    ],
    falaFinal: "Você vai fechar o laboratório programando arte com quadradinhos!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de designer digital!",
    perguntas: [
      {
        pergunta: "O que aparece se você der um ZOOM enorme numa foto do celular?",
        fotoUrl: qTelaZoom,
        alternativas: [
          { texto: "Quadradinhos coloridos organizados em fileiras (pixels)", correta: true },
          { texto: "Círculos misturados aleatoriamente", correta: false },
        ],
        feedbackAcerto: "Isso! Toda imagem digital é feita de PIXELS quadrados.",
        feedbackErro: "Não são círculos. Toda tela é uma GRADE de quadradinhos = pixels.",
      },
      {
        pergunta: "Um sprite de nave espacial de 16×16 quadradinhos numa grade é…",
        fotoUrl: qSprite,
        alternativas: [
          { texto: "Pixel Art — arte feita pixel a pixel", correta: true },
          { texto: "Uma foto de nave real", correta: false },
        ],
        feedbackAcerto: "Correto! Pixel Art usa a GRADE como estilo estético.",
        feedbackErro: "Nave real seria foto. Isso é PIXEL ART — arte na grade.",
      },
      {
        pergunta: "Os pixels de uma tela ficam organizados em…",
        fotoUrl: vocabGrade,
        alternativas: [
          { texto: "Linhas e colunas (grade / matriz)", correta: true },
          { texto: "Espalhados aleatoriamente", correta: false },
        ],
        feedbackAcerto: "Isso! Toda tela é uma MATRIZ com linhas e colunas.",
        feedbackErro: "Aleatório vira bagunça. Pixels seguem GRADE certinha.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário digital. Toca em cada card!",
    cards: [
      { termo: "Pixel", definicao: "Menor unidade de cor que forma uma imagem digital. Milhões deles juntos = foto nítida.", emoji: "🟥", cor: "#dc2626", fotoUrl: vocabPixel },
      { termo: "Matriz / Grade", definicao: "Estrutura em linhas e colunas onde os pixels ficam. Cada pixel tem coordenada e cor.", emoji: "📐", cor: "#1e3a8a", fotoUrl: vocabGrade },
      { termo: "Pixel Art", definicao: "Estilo onde o artista deixa os quadradinhos visíveis como escolha estética. Legado dos jogos 8-bits.", emoji: "👾", cor: "#f59e0b", fotoUrl: vocabPixelArt },
      { termo: "Sprite", definicao: "Personagem ou objeto pequeno de um jogo, desenhado numa grade fixa (ex: 16×16 pixels).", emoji: "🚀", cor: "#a855f7", fotoUrl: qSprite },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como quadradinhos viraram a base do mundo digital.",
    paragrafos: [
      "PIXEL vem de 'Picture Element' — elemento de imagem. É o MENOR ponto colorido de uma tela. Milhões deles juntos formam a foto que você vê no celular.",
      "Os pixels são organizados em MATRIZ ou GRADE: linhas e colunas. Cada pixel tem uma coordenada (ex: linha 3, coluna 5) e uma cor específica na programação.",
      "Nos anos 1980, os computadores tinham POUCA memória. Os designers precisavam criar personagens (Mario, Pac-Man) coloridos apenas alguns quadradinhos numa grade pequena.",
      "A limitação técnica virou ESTILO. Hoje, a PIXEL ART é um movimento artístico onde os quadradinhos são propositalmente visíveis. É o cinema, o palco e o computador se encontrando.",
    ],
    pigmentos: [
      { nome: "Papel quadriculado", hex: "#bfdbfe", fonte: "Grade analógica perfeita", emoji: "📄", fotoUrl: matQuadriculado },
      { nome: "Canetinhas coloridas", hex: "#f43f5e", fonte: "Pintam pixel a pixel", emoji: "🖍️", fotoUrl: matCanetinhas },
      { nome: "Post-it colorido", hex: "#facc15", fonte: "Pixel gigante colável na parede", emoji: "🟨", fotoUrl: matPostit },
      { nome: "Editor no computador", hex: "#1e293b", fonte: "Programa oficial de pixel art", emoji: "💻", fotoUrl: matComputador },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno digital!",
    perguntas: [
      {
        pergunta: "O que é um PIXEL?",
        fotoUrl: vocabPixel,
        alternativas: [
          { texto: "O menor quadradinho colorido que forma uma imagem digital", correta: true },
          { texto: "Uma medida de distância (tipo centímetro)", correta: false },
        ],
        feedbackAcerto: "Isso! Pixel é o TIJOLO elementar da imagem digital.",
        feedbackErro: "Centímetro mede espaço físico. PIXEL é o quadradinho da tela.",
      },
      {
        pergunta: "Como se chama a estrutura de linhas e colunas onde os pixels ficam?",
        fotoUrl: vocabGrade,
        alternativas: [
          { texto: "Matriz ou grade", correta: true },
          { texto: "Círculo cromático", correta: false },
        ],
        feedbackAcerto: "Correto! Matriz = grade de linhas × colunas.",
        feedbackErro: "Círculo cromático é da cor. Pixels ficam em MATRIZ (grade).",
      },
      {
        pergunta: "Personagens de videogame antigo (Mario, Pac-Man) são feitos em qual estilo?",
        fotoUrl: mapaMario,
        alternativas: [
          { texto: "Pixel Art (8-bits)", correta: true },
          { texto: "Aquarela tradicional", correta: false },
        ],
        feedbackAcerto: "Fantástico! 8-bits = pixel art clássica.",
        feedbackErro: "Aquarela é tinta. Videogame antigo é PIXEL ART 8-bits.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada peça digital tem seu papel. Combina certinho!",
    animais: [
      {
        nome: "Quadradinho colorido único", emoji: "🟥", fotoUrl: vocabPixel,
        corAlvo: { nome: "Pixel", hex: "#dc2626" },
        opcoes: [
          { nome: "Pixel", hex: "#dc2626" },
          { nome: "Backdrop teatral", hex: "#0ea5e9" },
          { nome: "Taumatrópio", hex: "#b45309" },
        ],
        falaAcerto: "Um quadradinho colorido = 1 PIXEL.",
      },
      {
        nome: "Grade com linhas e colunas", emoji: "📐", fotoUrl: vocabGrade,
        corAlvo: { nome: "Matriz de pixels", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Matriz de pixels", hex: "#1e3a8a" },
          { nome: "Círculo cromático", hex: "#f59e0b" },
          { nome: "Onda sonora", hex: "#22c55e" },
        ],
        falaAcerto: "Grade = MATRIZ onde os pixels moram.",
      },
      {
        nome: "Nave espacial 16×16", emoji: "🚀", fotoUrl: qSprite,
        corAlvo: { nome: "Sprite / Pixel Art", hex: "#a855f7" },
        opcoes: [
          { nome: "Sprite / Pixel Art", hex: "#a855f7" },
          { nome: "Fotografia realista", hex: "#0ea5e9" },
          { nome: "Instrumento não-convencional", hex: "#22c55e" },
        ],
        falaAcerto: "Personagem pequeno numa grade = SPRITE de pixel art.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra virar Designer de Games!",
    passos: [
      { id: "p1", texto: "PEGO uma folha de papel quadriculado comum", emoji: "📄", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DELIMITO uma área de 16×16 quadradinhos (a grade do meu sprite)", emoji: "📐", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "COLORO quadrados INTEIROS com canetinha — nunca meios-quadrados", emoji: "🖍️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "USO cores CONTRASTANTES pro ícone ficar nítido de longe", emoji: "🎨", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "PRONTO — meu sprite de 8-bits está desenhado!", emoji: "🕹️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você programou visualmente como os primeiros designers de games!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do Designer do Futuro. Toca nas palavras coloridas.",
    titulo: "Diário do Designer Digital",
    trechos: [
      { texto: "O menor quadradinho colorido da tela se chama", palavraDestaque: "pixel", corDestaque: "#dc2626" },
      { texto: "Os pixels são organizados em linhas e colunas numa", palavraDestaque: "matriz", corDestaque: "#1e3a8a" },
      { texto: "Desenhar propositalmente com quadradinhos visíveis é fazer", palavraDestaque: "pixel art", corDestaque: "#f59e0b" },
      { texto: "Um personagem pequeno de jogo numa grade fixa é um", palavraDestaque: "sprite", corDestaque: "#a855f7" },
      { texto: "Sou designer do futuro — programo com quadradinhos e cores!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🕹️ Restaurador de Códigos 8-bits! Toca em CADA pixel colorido antes do tempo acabar pra recriar o sprite do jogo antigo.",
    titulo: "🕹️ Restaurador 8-bits",
    instrucao: "Toque em todos os pixels antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🟥", rotulo: "Pixel Vermelho (linha 1)", cor: "#dc2626" },
      { emoji: "🟧", rotulo: "Pixel Laranja (linha 2)", cor: "#f97316" },
      { emoji: "🟨", rotulo: "Pixel Amarelo (linha 3)", cor: "#facc15" },
      { emoji: "🟩", rotulo: "Pixel Verde (linha 4)", cor: "#22c55e" },
      { emoji: "🟦", rotulo: "Pixel Azul (linha 5)", cor: "#0ea5e9" },
      { emoji: "🟪", rotulo: "Pixel Roxo (linha 6)", cor: "#a855f7" },
    ],
    falaFinal: "Sprite restaurado! Seu jogo 8-bits está no ar.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da era digital. Toca em cada verbete!",
    titulo: "📓 Caderno do Designer do Futuro",
    itens: [
      { emoji: "🟥", rotulo: "Pixel", descricao: "Menor quadradinho colorido da tela.", cor: "#dc2626", fotoUrl: vocabPixel },
      { emoji: "📐", rotulo: "Matriz / Grade", descricao: "Linhas × colunas onde os pixels moram.", cor: "#1e3a8a", fotoUrl: vocabGrade },
      { emoji: "👾", rotulo: "Pixel Art", descricao: "Estilo onde os quadradinhos são visíveis por opção.", cor: "#f59e0b", fotoUrl: vocabPixelArt },
      { emoji: "🚀", rotulo: "Sprite", descricao: "Personagem/objeto pequeno de jogo numa grade fixa.", cor: "#a855f7", fotoUrl: qSprite },
      { emoji: "🍄", rotulo: "Videogame 8-bits", descricao: "Anos 80 — limitação técnica virou estética eterna.", cor: "#c2410c", fotoUrl: mapaMario },
      { emoji: "📱", rotulo: "Tela moderna", descricao: "Milhões de pixels pequenininhos = imagem lisa.", cor: "#0ea5e9", fotoUrl: mapaTela },
      { emoji: "💻", rotulo: "Laboratório fechado", descricao: "Luz, som, palco e pixel — tudo conectado!", cor: "#1e293b", fotoUrl: matComputador },
    ],
    falaFinal: "🎉 LABORATÓRIO DA ILUSÃO VISU-ESPACIAL TOTALMENTE DESATIVADO!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, Designer do Futuro! Última página do Atlas.",
    quiz: {
      pergunta:
        "Como se chama o menor ponto ou quadradinho colorido que, multiplicado por milhares, forma qualquer imagem nas telas dos celulares e computadores?",
      alternativas: [
        { texto: "Pixel", correta: true },
        { texto: "Centímetro", correta: false },
      ],
      feedback:
        "Incrível! Você dominou a física digital. Os pixels são os tijolos elementares do nosso mundo tecnológico visual — e agora você fechou o Laboratório da Ilusão inteiro!",
    },
    missaoFamilia:
      "🎨 Mosaico Coletivo de Post-it: junte a família e use post-its coloridos quadrados (ou papel picado). Escolha uma parede ou porta de armário e cole os quadrados alinhados em linhas e colunas pra montar um grande DESENHO PIXELADO coletivo em casa!",
    recompensaTitulo: "📜 Página 7 restaurada — 👁️ Laboratório da Ilusão Visu-Espacial COMPLETO!",
    recompensaItem: "💾 Microchip de Silício do Designer do Futuro",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Microchip de Silício" },
};
