import type { AulaArteV1 } from "../../types";
import mapaGabor from "@/assets/arte-5ano/u7-mapa-gabor.jpg";
import mapaMapping from "@/assets/arte-5ano/u7-mapa-mapping.jpg";
import mapaInterativa from "@/assets/arte-5ano/u7-mapa-interativa.jpg";
import mapaPiramide from "@/assets/arte-5ano/u7-mapa-piramide.jpg";
import vocabHolografia from "@/assets/arte-5ano/u7-vocab-holografia.jpg";
import vocabMapping from "@/assets/arte-5ano/u7-vocab-mapping.jpg";
import vocabInterativa from "@/assets/arte-5ano/u7-vocab-interativa.jpg";
import vocabFoton from "@/assets/arte-5ano/u7-vocab-foton.jpg";
import matPlastico from "@/assets/arte-5ano/u7-mat-plastico.jpg";
import matCelular from "@/assets/arte-5ano/u7-mat-celular.jpg";
import matTesoura from "@/assets/arte-5ano/u7-mat-tesoura.jpg";
import qPiramide from "@/assets/arte-5ano/u7-q-piramide.jpg";
import passo1 from "@/assets/arte-5ano/u7-passo1.jpg";
import passo2 from "@/assets/arte-5ano/u7-passo2.jpg";
import passo3 from "@/assets/arte-5ano/u7-passo3.jpg";
import passo4 from "@/assets/arte-5ano/u7-passo4.jpg";
import passo5 from "@/assets/arte-5ano/u7-passo5.jpg";

/**
 * Arte · 5º Ano · Unidade 7 · Aula 01 — "A Matriz Holográfica e as Novas Mídias Tecnológicas"
 * Metanarrativa: 🧩 A Matriz da Percepção Visual
 * AULA FINAL do 5º Ano — Dennis Gabor, Video Mapping e Arte Interativa Digital
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-holografia",
  titulo: "A Matriz Holográfica e as Novas Mídias Tecnológicas",
  iconeTrilha: "🔮",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto da Percepção! Chegamos à última câmara da Matriz: a luz vira IMAGEM FLUTUANTE no ar. Isso é HOLOGRAFIA — a tecnologia que projeta objetos 3D sem tela. Toca em cada pista pra investigar.",
    titulo: "🔮 A Matriz Holográfica",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🏆", rotulo: "Dennis Gabor (1947)", descricao: "Físico húngaro que inventou a holografia usando ondas de luz. Ganhou o Prêmio Nobel de Física em 1971 por essa descoberta.", cor: "#0f172a", fotoUrl: mapaGabor },
      { emoji: "🏙️", rotulo: "Video Mapping", descricao: "Projetores gigantes 'vestem' prédios e monumentos com vídeos que se encaixam perfeitamente nas formas 3D da superfície.", cor: "#a855f7", fotoUrl: mapaMapping },
      { emoji: "🤖", rotulo: "Arte Interativa Digital", descricao: "Sensores detectam seu movimento e um código de computador transforma isso em cores, sons e formas na tela em tempo real.", cor: "#06b6d4", fotoUrl: mapaInterativa },
      { emoji: "🔺", rotulo: "Pirâmide Holográfica", descricao: "Um pedaço de plástico transparente dobrado em pirâmide, sobre a tela do celular, faz imagens parecerem flutuar no ar.", cor: "#22d3ee", fotoUrl: mapaPiramide },
    ],
    falaFinal: "Você vai fechar a Matriz da Percepção dominando a tecnologia da luz do futuro!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de programador de fótons!",
    perguntas: [
      {
        pergunta: "O que Dennis Gabor inventou em 1947, usando ondas de luz que se cruzam?",
        fotoUrl: mapaGabor,
        alternativas: [
          { texto: "A Holografia — imagens 3D formadas por interferência de luz", correta: true },
          { texto: "A televisão colorida", correta: false },
        ],
        feedbackAcerto: "Perfeito! Gabor ganhou o Nobel de Física de 1971 por essa invenção.",
        feedbackErro: "Não é televisão! Gabor inventou a HOLOGRAFIA, usando o cruzamento de ondas de luz laser.",
      },
      {
        pergunta: "No Video Mapping, o que os artistas fazem com o projetor?",
        fotoUrl: mapaMapping,
        alternativas: [
          { texto: "Encaixam o vídeo exatamente nas formas 3D reais de um prédio ou objeto", correta: true },
          { texto: "Só projetam um filme comum numa parede lisa e branca", correta: false },
        ],
        feedbackAcerto: "Isso! O vídeo é programado pra 'vestir' cada janela, coluna e telhado do prédio.",
        feedbackErro: "Parede lisa é projeção comum. Video Mapping ENCAIXA o vídeo nas formas 3D reais da superfície.",
      },
      {
        pergunta: "Na arte interativa digital, o que transforma seu movimento em imagem na tela?",
        fotoUrl: mapaInterativa,
        alternativas: [
          { texto: "Um sensor que capta o movimento e um código que processa a informação", correta: true },
          { texto: "Mágica, sem nenhuma tecnologia envolvida", correta: false },
        ],
        feedbackAcerto: "Correto! Sensor + código = arte que reage a você em tempo real.",
        feedbackErro: "Não é mágica — é ENGENHARIA: sensor capta o movimento e o código transforma em imagem.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do programador de fótons. Toca em cada card!",
    cards: [
      { termo: "Holografia", definicao: "Técnica que usa laser e interferência de ondas de luz pra registrar e reconstruir imagens em três dimensões.", emoji: "🔮", cor: "#0f172a", fotoUrl: vocabHolografia },
      { termo: "Video Mapping", definicao: "Projeção de vídeo calculada pra se encaixar perfeitamente nas formas 3D reais de uma superfície, como um prédio.", emoji: "🏙️", cor: "#a855f7", fotoUrl: vocabMapping },
      { termo: "Arte Interativa Digital", definicao: "Instalação artística que usa sensores e código de computador pra reagir aos movimentos do público em tempo real.", emoji: "🤖", cor: "#06b6d4", fotoUrl: vocabInterativa },
      { termo: "Fóton Coerente", definicao: "Partícula de luz laser que viaja em sincronia perfeita com as outras — essencial pra criar o padrão de interferência da holografia.", emoji: "✨", cor: "#22d3ee", fotoUrl: vocabFoton },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a luz virou a última fronteira da arte.",
    paragrafos: [
      "Em 1947, o físico húngaro DENNIS GABOR descobriu que, se cruzar dois feixes de luz LASER, eles formam um padrão de interferência que guarda a informação de PROFUNDIDADE de um objeto. Isso é a HOLOGRAFIA. Em 1971, ele ganhou o Prêmio Nobel de Física por essa invenção.",
      "Diferente de uma foto comum, o holograma guarda a luz vinda de vários ângulos. Por isso, quando você olha um holograma, pode 'andar ao redor' da imagem e ver lados diferentes — como se o objeto estivesse realmente ali, flutuando.",
      "Hoje, artistas usam o VIDEO MAPPING: projetores potentes calculam a forma exata de um prédio (janelas, colunas, telhado) e 'vestem' essa superfície com vídeo, fazendo o edifício parecer que se transforma, quebra ou ganha vida.",
      "Também existe a ARTE INTERATIVA DIGITAL: instalações com SENSORES que detectam seu corpo se movendo, e um CÓDIGO de computador transforma esse movimento em cores, formas e sons na hora — a plateia vira parte da obra.",
      "Você pode brincar com holografia em casa! Uma PIRÂMIDE DE PLÁSTICO TRANSPARENTE, colocada de cabeça pra baixo sobre a tela de um celular tocando um vídeo especial, faz a imagem parecer flutuar no ar dentro da pirâmide.",
    ],
    pigmentos: [
      { nome: "Plástico transparente (trapézios)", hex: "#22d3ee", fonte: "Corpo da pirâmide holográfica", emoji: "🔺", fotoUrl: matPlastico },
      { nome: "Celular com vídeo especial", hex: "#0f172a", fonte: "Fonte de luz da holografia caseira", emoji: "📱", fotoUrl: matCelular },
      { nome: "Tesoura e régua", hex: "#a855f7", fonte: "Recortar os trapézios com precisão", emoji: "✂️", fotoUrl: matTesoura },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do programador de fótons!",
    perguntas: [
      {
        pergunta: "Por que um holograma parece 3D de verdade, mesmo sendo só luz?",
        fotoUrl: vocabHolografia,
        alternativas: [
          { texto: "Porque guarda a luz vinda de vários ângulos, criando sensação de profundidade real", correta: true },
          { texto: "Porque é uma foto normal ampliada bem grande", correta: false },
        ],
        feedbackAcerto: "Isso! O padrão de interferência guarda informação de vários ângulos, não só um.",
        feedbackErro: "Foto grande continua sendo plana. O holograma guarda luz de VÁRIOS ÂNGULOS.",
      },
      {
        pergunta: "Qual é a principal diferença entre Video Mapping e um projetor comum?",
        fotoUrl: vocabMapping,
        alternativas: [
          { texto: "O Video Mapping encaixa o vídeo nas formas 3D reais da superfície", correta: true },
          { texto: "O Video Mapping só funciona em telas planas de cinema", correta: false },
        ],
        feedbackAcerto: "Perfeito! O cálculo da forma real do objeto é o que faz a mágica funcionar.",
        feedbackErro: "Ao contrário! Video Mapping é feito pra superfícies COM RELEVO, não telas planas.",
      },
      {
        pergunta: "Na sua pirâmide holográfica caseira, qual é a fonte de luz que forma a imagem?",
        fotoUrl: matCelular,
        alternativas: [
          { texto: "A tela do celular tocando um vídeo especial de holograma", correta: true },
          { texto: "Uma lâmpada comum de teto", correta: false },
        ],
        feedbackAcerto: "Isso! A tela reflete nos 4 lados de plástico e cria a ilusão de profundidade.",
        feedbackErro: "Lâmpada de teto não tem o vídeo certo. É a TELA DO CELULAR com o vídeo especial.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada tecnologia usa um princípio diferente. Combina certinho!",
    animais: [
      {
        nome: "Padrão de luz cruzada", emoji: "🔮", fotoUrl: vocabHolografia,
        corAlvo: { nome: "Holografia a laser", hex: "#0f172a" },
        opcoes: [
          { nome: "Holografia a laser", hex: "#0f172a" },
          { nome: "Anamorfose de perspectiva", hex: "#7c2d12" },
          { nome: "Câmara escura", hex: "#1f2937" },
        ],
        falaAcerto: "Isso! Interferência de ondas de luz laser cria a imagem 3D.",
      },
      {
        nome: "Prédio 'vestido' de vídeo", emoji: "🏙️", fotoUrl: vocabMapping,
        corAlvo: { nome: "Video Mapping", hex: "#a855f7" },
        opcoes: [
          { nome: "Video Mapping", hex: "#a855f7" },
          { nome: "Pontilhismo digital", hex: "#dc2626" },
          { nome: "Vitral gótico", hex: "#f59e0b" },
        ],
        falaAcerto: "Perfeito! O vídeo é programado pra encaixar nas formas do prédio.",
      },
      {
        nome: "Sensor + código reagindo a você", emoji: "🤖", fotoUrl: vocabInterativa,
        corAlvo: { nome: "Arte Interativa Digital", hex: "#06b6d4" },
        opcoes: [
          { nome: "Arte Interativa Digital", hex: "#06b6d4" },
          { nome: "Escultura estática de mármore", hex: "#64748b" },
          { nome: "Afresco renascentista", hex: "#78350f" },
        ],
        falaAcerto: "Correto! Sensor capta o movimento, código transforma em arte ao vivo.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir sua PRÓPRIA pirâmide holográfica.",
    passos: [
      { id: "p1", texto: "DESENHO um trapézio: 6cm de base, 1cm no topo, 3,5cm de altura", emoji: "📐", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "RECORTO 4 trapézios iguais no plástico transparente", emoji: "✂️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "COLO as bordas dos 4 trapézios formando uma pirâmide sem o topo", emoji: "🔺", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "COLOCO a pirâmide de cabeça pra baixo sobre a tela do celular", emoji: "📱", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "TOCO um vídeo especial de holograma e a imagem parece FLUTUAR no ar!", emoji: "✨", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua pirâmide holográfica funciona igual às vitrines tecnológicas mais modernas!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do programador de fótons. Toca nas palavras coloridas.",
    titulo: "Diário do Programador de Fótons",
    trechos: [
      { texto: "Sou um arquiteto da luz. Uso a", palavraDestaque: "holografia", corDestaque: "#0f172a" },
      { texto: "pra fazer imagens flutuarem no ar, inventada por", palavraDestaque: "Dennis Gabor", corDestaque: "#a855f7" },
      { texto: "Quando projeto vídeo num prédio, chamo de", palavraDestaque: "video mapping", corDestaque: "#06b6d4" },
      { texto: "Se uso sensores e código, é", palavraDestaque: "arte interativa digital", corDestaque: "#22d3ee" },
      { texto: "Eu programo a luz — igual os cientistas do futuro!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🔦 O Programador de Fótons! Calibra CADA laser azul e vermelho antes do tempo acabar.",
    titulo: "🔦 O Programador de Fótons",
    instrucao: "Toque em todos os feixes de laser antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔵", rotulo: "Laser azul de referência", cor: "#06b6d4" },
      { emoji: "🔴", rotulo: "Laser vermelho do objeto", cor: "#dc2626" },
      { emoji: "✨", rotulo: "Ponto de interferência coerente", cor: "#a855f7" },
      { emoji: "🔺", rotulo: "Espelho da pirâmide holográfica", cor: "#22d3ee" },
      { emoji: "🏙️", rotulo: "Superfície 3D do video mapping", cor: "#0f172a" },
      { emoji: "🤖", rotulo: "Sensor de movimento calibrado", cor: "#0ea5e9" },
    ],
    falaFinal: "Fótons calibrados! Você domina a engenharia da luz do futuro.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o último caderno da Matriz da Percepção. Toca em cada verbete!",
    titulo: "📓 Caderno da Holografia",
    itens: [
      { emoji: "🏆", rotulo: "Dennis Gabor (1947)", descricao: "Inventou a holografia e ganhou o Nobel de Física em 1971.", cor: "#0f172a", fotoUrl: mapaGabor },
      { emoji: "🔮", rotulo: "Holografia", descricao: "Laser + interferência de ondas de luz criam imagens em 3D reais.", cor: "#22d3ee", fotoUrl: vocabHolografia },
      { emoji: "🏙️", rotulo: "Video Mapping", descricao: "Vídeo programado pra se encaixar nas formas 3D de um prédio.", cor: "#a855f7", fotoUrl: vocabMapping },
      { emoji: "🤖", rotulo: "Arte Interativa Digital", descricao: "Sensores e código transformam movimento do público em arte.", cor: "#06b6d4", fotoUrl: vocabInterativa },
      { emoji: "🔺", rotulo: "Pirâmide Holográfica Caseira", descricao: "4 trapézios de plástico sobre o celular fazem imagens flutuarem.", cor: "#22d3ee", fotoUrl: mapaPiramide },
    ],
    falaFinal:
      "🧩 A ÚLTIMA página do Atlas da Matriz da Percepção Visual foi restaurada! Você completou TODA a jornada do 5º Ano: da anamorfose de Holbein até a holografia de Gabor. A Matriz da Percepção Visual está INTEIRAMENTE desbloqueada, compreendida e dominada!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da Matriz, arquiteto da percepção!",
    quiz: {
      pergunta: "Como se chama a técnica que projeta imagens tridimensionais no ar, usando luz laser e interferência de ondas?",
      alternativas: [
        { texto: "Holografia", correta: true },
        { texto: "Fotografia panorâmica", correta: false },
      ],
      feedback:
        "Perfeito! É a HOLOGRAFIA — invenção de Dennis Gabor em 1947, que rendeu a ele o Prêmio Nobel de Física em 1971. Com isso, você conclui a jornada inteira da Matriz da Percepção Visual: da anamorfose renascentista até a luz programável do futuro!",
    },
    missaoFamilia:
      "🔦 O Cinema de Luz Fantasma: Com seus pais, apague as luzes e usem uma lanterna atrás de um copo de vidro texturizado (com relevos). Girem o copo devagar apontando pra parede — os relevos vão projetar sombras e formas de luz surpreendentes, quase como um cinema fantasma. Registrem no álbum!",
    recompensaTitulo:
      "🧩 A Matriz da Percepção Visual Inteiramente Desbloqueada, Compreendida e Dominada!",
    recompensaItem: "💎 O Cristal Emissor de Fótons Coerentes",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Cristal Emissor de Fótons Coerentes" },
};
