import type { AulaArteV1 } from "../../types";
import mapaCorredor from "@/assets/arte-4ano/u2-mapa-corredor.jpg";
import mapaBrunelleschi from "@/assets/arte-4ano/u2-mapa-brunelleschi.jpg";
import mapaCubo from "@/assets/arte-4ano/u2-mapa-cubo3d.jpg";
import mapaTrilhos from "@/assets/arte-4ano/u2-mapa-trilhos.jpg";
import vocabHorizonte from "@/assets/arte-4ano/u2-vocab-horizonte.jpg";
import vocabPonto from "@/assets/arte-4ano/u2-vocab-pontofuga.jpg";
import vocabLinhas from "@/assets/arte-4ano/u2-vocab-linhasfuga.jpg";
import vocab3d from "@/assets/arte-4ano/u2-vocab-3d.jpg";
import matRegua from "@/assets/arte-4ano/u2-mat-regua.jpg";
import matLapis from "@/assets/arte-4ano/u2-mat-lapis.jpg";
import matPapel from "@/assets/arte-4ano/u2-mat-papel.jpg";
import matCartolina from "@/assets/arte-4ano/u2-mat-cartolina.jpg";
import qRua from "@/assets/arte-4ano/u2-q-rua.jpg";
import qPostes from "@/assets/arte-4ano/u2-q-postes.jpg";
import qCorredor from "@/assets/arte-4ano/u2-q-corredorEscola.jpg";
import qFerrovia from "@/assets/arte-4ano/u2-q-ferrovia.jpg";
import passo1 from "@/assets/arte-4ano/u2-passo1.jpg";
import passo2 from "@/assets/arte-4ano/u2-passo2.jpg";
import passo3 from "@/assets/arte-4ano/u2-passo3.jpg";
import passo4 from "@/assets/arte-4ano/u2-passo4.jpg";
import passo5 from "@/assets/arte-4ano/u2-passo5.jpg";

/**
 * Arte · 4º Ano · Unidade 2 · Aula 01 — "A Engrenagem da Perspectiva"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * Fonte histórica: Filippo Brunelleschi (séc. XV, Florença)
 * (EF15AR02 / EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-perspectiva-ponto-fuga",
  titulo: "A Engrenagem da Perspectiva — Ponto de Fuga e Ilusão 3D",
  iconeTrilha: "📐",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheiro Visual! Olha esse corredor: teto, chão e paredes parecem se ESPREMER até um pontinho no fundo. Isso é matemática visual pura — o truque que Brunelleschi descobriu em 1420. Toca em cada pista pra decifrar a engrenagem.",
    titulo: "🏛️ O Truque de Brunelleschi em Florença",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🏫", rotulo: "Corredor que se espreme", descricao: "Linhas paralelas do mundo real parecem se encontrar num único ponto quando estão bem longe. Ilusão pura.", cor: "#0ea5e9", fotoUrl: mapaCorredor },
      { emoji: "🪞", rotulo: "Brunelleschi e o espelho", descricao: "O arquiteto pintou o Batistério de Florença e furou um buraco no meio da tábua. Olhando pelo furo com um espelho, provou que a perspectiva ENGANA o olho.", cor: "#b45309", fotoUrl: mapaBrunelleschi },
      { emoji: "📦", rotulo: "Cubo que ganha volume", descricao: "Um quadrado plano vira cubo 3D quando puxamos 3 cantos até o ponto de fuga. Matemática vira mágica.", cor: "#dc2626", fotoUrl: mapaCubo },
      { emoji: "🚂", rotulo: "Trilhos do trem", descricao: "Os dois trilhos são paralelos NA VIDA REAL — nunca se encontram. Mas o olho vê os dois se fundindo no horizonte.", cor: "#f59e0b", fotoUrl: mapaTrilhos },
    ],
    falaFinal: "Você está prestes a abrir janelas tridimensionais em papéis planos!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de puxar as réguas invisíveis, calibra o olho de engenheiro!",
    perguntas: [
      {
        pergunta: "Nessa rua, todas as linhas dos prédios parecem caminhar até um único…",
        fotoUrl: qRua,
        alternativas: [
          { texto: "Ponto de fuga no fundo da rua", correta: true },
          { texto: "Círculo de cores giratório", correta: false },
        ],
        feedbackAcerto: "Isso! O ponto onde tudo se encontra chama-se Ponto de Fuga.",
        feedbackErro: "Círculo de cores não tem nada a ver com perspectiva. As linhas convergem no PONTO DE FUGA.",
      },
      {
        pergunta: "Os postes de rua parecem cada vez menores porque estão…",
        fotoUrl: qPostes,
        alternativas: [
          { texto: "Cada vez mais LONGE do observador", correta: true },
          { texto: "Encolhendo de verdade", correta: false },
        ],
        feedbackAcerto: "Perfeito! Distância faz o cérebro ler tamanho menor — ilusão de profundidade.",
        feedbackErro: "Postes não encolhem sozinhos! Eles parecem menores por causa da DISTÂNCIA.",
      },
      {
        pergunta: "A linha imaginária que fica na altura dos olhos do observador chama-se…",
        fotoUrl: qFerrovia,
        alternativas: [
          { texto: "Linha do Horizonte", correta: true },
          { texto: "Linha de Chegada", correta: false },
        ],
        feedbackAcerto: "Correto! A Linha do Horizonte separa céu e terra na altura do olho.",
        feedbackErro: "Linha de chegada é de corrida. A linha imaginária dos olhos é a LINHA DO HORIZONTE.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da engrenagem da perspectiva. Toca em cada uma!",
    cards: [
      { termo: "Linha do Horizonte", definicao: "Linha imaginária na altura dos olhos do observador. Divide o céu da terra.", emoji: "🌅", cor: "#0ea5e9", fotoUrl: vocabHorizonte },
      { termo: "Ponto de Fuga", definicao: "Ponto fixo na linha do horizonte para onde TODAS as linhas paralelas afastadas parecem caminhar.", emoji: "🎯", cor: "#dc2626", fotoUrl: vocabPonto },
      { termo: "Linhas de Fuga", definicao: "Linhas inclinadas invisíveis que ligam os cantos dos objetos ao ponto de fuga — fazem o tamanho diminuir com a distância.", emoji: "📐", cor: "#78350f", fotoUrl: vocabLinhas },
      { termo: "Tridimensional (3D)", definicao: "Objeto com altura, largura E profundidade. A perspectiva SIMULA isso no papel plano.", emoji: "📦", cor: "#f59e0b", fotoUrl: vocab3d },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a régua e o lápis abrem uma janela 3D no papel plano.",
    paragrafos: [
      "Todo desenho começa numa folha PLANA — tem só duas dimensões: altura e largura. Sem profundidade.",
      "Pra enganar o olho, o artista desenha uma LINHA DO HORIZONTE na altura dos olhos do observador e marca um PONTO DE FUGA em cima dessa linha.",
      "Depois puxa LINHAS DE FUGA invisíveis (com lápis bem fraco) dos cantos dos objetos até o ponto de fuga. Isso garante que tudo diminua na proporção certa.",
      "Foi o arquiteto Brunelleschi que provou, com um espelho furado, que essa matemática engana o olho e cria a ilusão perfeita de espaço tridimensional.",
    ],
    pigmentos: [
      { nome: "Régua", hex: "#c2410c", fonte: "Traça as linhas retas até o ponto de fuga", emoji: "📏", fotoUrl: matRegua },
      { nome: "Lápis técnico", hex: "#1f2937", fonte: "Marca as linhas de construção bem fracas", emoji: "✏️", fotoUrl: matLapis },
      { nome: "Papel branco", hex: "#e5e7eb", fonte: "Suporte plano de 2 dimensões", emoji: "📄", fotoUrl: matPapel },
      { nome: "Cartolina colorida", hex: "#ec4899", fonte: "Pra pintar os prédios do desenho final", emoji: "🎨", fotoUrl: matCartolina },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere no caderno do laboratório!",
    perguntas: [
      {
        pergunta: "Qual o nome do ponto na linha do horizonte para onde TODAS as linhas de perspectiva convergem?",
        fotoUrl: vocabPonto,
        alternativas: [
          { texto: "Ponto de Fuga", correta: true },
          { texto: "Ponto de Luz", correta: false },
        ],
        feedbackAcerto: "Perfeito! O Ponto de Fuga é o coração geométrico da perspectiva 3D.",
        feedbackErro: "Ponto de Luz é iluminação. Quem une as linhas é o PONTO DE FUGA.",
      },
      {
        pergunta: "Num corredor de escola visto de frente, o teto e o chão parecem…",
        fotoUrl: qCorredor,
        alternativas: [
          { texto: "Se aproximar um do outro no fundo", correta: true },
          { texto: "Continuar bem separados até o infinito", correta: false },
        ],
        feedbackAcerto: "Isso! A distância faz o teto descer e o chão subir até se encontrarem no ponto de fuga.",
        feedbackErro: "No mundo real ficam paralelos, mas o olho VÊ eles se aproximando. É a ilusão da perspectiva.",
      },
      {
        pergunta: "Pra construir a perspectiva no papel, o artista usa quais 2 ferramentas principais?",
        fotoUrl: matRegua,
        alternativas: [
          { texto: "Régua e lápis", correta: true },
          { texto: "Tesoura e cola", correta: false },
        ],
        feedbackAcerto: "Correto! Régua pra traçar linhas retas até o ponto de fuga e lápis pra marcar tudo fraquinho.",
        feedbackErro: "Tesoura serve pra recortar. Pra desenhar perspectiva usamos RÉGUA e LÁPIS.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada cena tem uma pista visual da perspectiva. Combina com o conceito certo!",
    animais: [
      {
        nome: "Trilhos de trem se encontrando", emoji: "🚂", fotoUrl: mapaTrilhos,
        corAlvo: { nome: "Ponto de fuga no horizonte", hex: "#dc2626" },
        opcoes: [
          { nome: "Ponto de fuga no horizonte", hex: "#dc2626" },
          { nome: "Cor primária vermelha", hex: "#ef4444" },
          { nome: "Sombra projetada", hex: "#1f2937" },
        ],
        falaAcerto: "Isso! Os trilhos são paralelos, mas o olho os vê convergindo no PONTO DE FUGA.",
      },
      {
        nome: "Cubo desenhado em 3D", emoji: "📦", fotoUrl: mapaCubo,
        corAlvo: { nome: "Linhas de fuga desenhadas", hex: "#78350f" },
        opcoes: [
          { nome: "Linhas de fuga desenhadas", hex: "#78350f" },
          { nome: "Círculo cromático completo", hex: "#a855f7" },
          { nome: "Textura granulada", hex: "#94a3b8" },
        ],
        falaAcerto: "Correto! O cubo ganha volume porque as arestas viram LINHAS DE FUGA em direção ao ponto.",
      },
      {
        nome: "Paisagem com céu e campo", emoji: "🌅", fotoUrl: vocabHorizonte,
        corAlvo: { nome: "Linha do horizonte", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Linha do horizonte", hex: "#0ea5e9" },
          { nome: "Cor terciária", hex: "#a855f7" },
          { nome: "Prisma de Newton", hex: "#f59e0b" },
        ],
        falaAcerto: "Perfeito! A LINHA DO HORIZONTE separa céu de terra na altura do olho do observador.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir a SUA rua futurista em perspectiva.",
    passos: [
      { id: "p1", texto: "TRAÇO a linha do horizonte no meio da folha e marco um pontinho no centro (ponto de fuga)", emoji: "🎯", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "PUXO 2 linhas de fuga dos cantos de baixo da folha até o ponto de fuga (formam a estrada)", emoji: "📐", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "ADICIONO calçadas paralelas à estrada e postes que diminuem em direção ao fundo", emoji: "🛣️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "CONSTRUO prédios laterais com as linhas dos topos e bases indo até o ponto de fuga", emoji: "🏙️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "PINTO prédios da frente com cores FORTES e do fundo com cores CLARAS (ilusão de distância)", emoji: "🎨", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua rua futurista abriu uma janela 3D no papel plano!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do engenheiro visual. Toca nas palavras coloridas.",
    titulo: "Diário do Engenheiro Visual",
    trechos: [
      { texto: "A linha imaginária na altura dos meus olhos é a", palavraDestaque: "linha do horizonte", corDestaque: "#0ea5e9" },
      { texto: "O ponto onde tudo se encontra ao longe é o", palavraDestaque: "ponto de fuga", corDestaque: "#dc2626" },
      { texto: "As linhas invisíveis que ligam os cantos ao ponto são as", palavraDestaque: "linhas de fuga", corDestaque: "#78350f" },
      { texto: "Brunelleschi provou tudo isso com um espelho e um", palavraDestaque: "buraco", corDestaque: "#f59e0b" },
      { texto: "Agora eu abro janelas 3D em qualquer papel plano!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "📐 O Alinhador de Brunelleschi! Toca em CADA peça da cidade renascentista antes do tempo acabar pra alinhar tudo no ponto de fuga.",
    titulo: "📐 O Alinhador de Brunelleschi",
    instrucao: "Toque em todas as peças pra restaurar a perspectiva!",
    tempoSeg: 35,
    itens: [
      { emoji: "🎯", rotulo: "Ponto de fuga central", cor: "#dc2626" },
      { emoji: "🌅", rotulo: "Linha do horizonte", cor: "#0ea5e9" },
      { emoji: "🏛️", rotulo: "Coluna renascentista esquerda", cor: "#b45309" },
      { emoji: "🏛️", rotulo: "Coluna renascentista direita", cor: "#a16207" },
      { emoji: "⛪", rotulo: "Cúpula do Duomo no fundo", cor: "#f59e0b" },
      { emoji: "📐", rotulo: "Régua alinhada às linhas de fuga", cor: "#78350f" },
    ],
    falaFinal: "Cidade alinhada! A perspectiva de Brunelleschi está restaurada.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da perspectiva. Toca em cada verbete!",
    titulo: "📓 Caderno da Perspectiva Linear",
    itens: [
      { emoji: "🌅", rotulo: "Linha do Horizonte", descricao: "Linha imaginária na altura dos olhos — divide céu e terra.", cor: "#0ea5e9", fotoUrl: vocabHorizonte },
      { emoji: "🎯", rotulo: "Ponto de Fuga", descricao: "Ponto único no horizonte onde todas as linhas paralelas parecem se encontrar.", cor: "#dc2626", fotoUrl: vocabPonto },
      { emoji: "📐", rotulo: "Linhas de Fuga", descricao: "Linhas invisíveis dos cantos dos objetos até o ponto de fuga.", cor: "#78350f", fotoUrl: vocabLinhas },
      { emoji: "📦", rotulo: "Ilusão 3D", descricao: "Sensação de profundidade num papel plano, criada pela matemática da perspectiva.", cor: "#f59e0b", fotoUrl: vocab3d },
      { emoji: "🏛️", rotulo: "Brunelleschi (séc. XV)", descricao: "Arquiteto florentino que provou a perspectiva com um espelho furado.", cor: "#b45309", fotoUrl: mapaBrunelleschi },
      { emoji: "🚂", rotulo: "Trilhos paralelos", descricao: "Prova viva: são paralelos mas o olho vê eles se encontrando.", cor: "#a855f7", fotoUrl: mapaTrilhos },
      { emoji: "🎨", rotulo: "Cores da distância", descricao: "Fortes na frente, claras no fundo — aumenta a ilusão de profundidade.", cor: "#ec4899", fotoUrl: passo5 },
    ],
    falaFinal: "Segunda página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, engenheiro visual!",
    quiz: {
      pergunta: "Como se chama o ponto imaginário localizado na linha do horizonte para onde TODAS as linhas de perspectiva convergem?",
      alternativas: [
        { texto: "Ponto de Fuga", correta: true },
        { texto: "Ponto de Luz", correta: false },
      ],
      feedback: "Excelente! O Ponto de Fuga é o coração geométrico da perspectiva tridimensional — a chave que Brunelleschi usou pra abrir janelas 3D em paredes planas.",
    },
    missaoFamilia:
      "📸 Fotografia de Perspectiva Forçada: vão pra um espaço aberto (corredor longo, quintal). Uma pessoa fica BEM PERTO da câmera e estende a mão aberta. A outra fica BEM LONGE, alinhada com a mão da primeira. Tirem a foto: parece que a pessoa perto está segurando a pessoa longe como um bonequinho!",
    recompensaTitulo: "📜 Página 2 restaurada — O Diagrama das Cidades Geométricas.",
    recompensaItem: "📐 Régua Óptica de Latão Florentino",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Régua de Latão Florentino" },
};
