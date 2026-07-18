import type { AulaArteV1 } from "../../types";
import mapaPalco from "@/assets/arte-4ano/u6-mapa-palco.jpg";
import mapaOlimpico from "@/assets/arte-4ano/u6-mapa-olimpico.jpg";
import mapaFundo from "@/assets/arte-4ano/u6-mapa-fundo.jpg";
import mapaAdereco from "@/assets/arte-4ano/u6-mapa-adereco.jpg";
import vocabPlanos from "@/assets/arte-4ano/u6-vocab-planos.jpg";
import vocabCenografia from "@/assets/arte-4ano/u6-vocab-cenografia.jpg";
import vocabAdereco from "@/assets/arte-4ano/u6-vocab-adereco.jpg";
import matCaixa from "@/assets/arte-4ano/u6-mat-caixasapato.jpg";
import matPapel from "@/assets/arte-4ano/u6-mat-papelcolorido.jpg";
import matLanterna from "@/assets/arte-4ano/u6-mat-lanterna.jpg";
import matPalito from "@/assets/arte-4ano/u6-mat-palito.jpg";
import qMontanhas from "@/assets/arte-4ano/u6-q-montanhas.jpg";
import qArvores from "@/assets/arte-4ano/u6-q-arvores.jpg";
import passo1 from "@/assets/arte-4ano/u6-passo1.jpg";
import passo2 from "@/assets/arte-4ano/u6-passo2.jpg";
import passo3 from "@/assets/arte-4ano/u6-passo3.jpg";
import passo4 from "@/assets/arte-4ano/u6-passo4.jpg";
import passo5 from "@/assets/arte-4ano/u6-passo5.jpg";

/**
 * Arte · 4º Ano · Unidade 6 · Aula 01 — "A Ilusão do Palco"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * Fonte histórica: Teatro Olimpico de Vicenza (Palladio, 1585) — perspectiva cênica.
 * (EF15AR18 / EF15AR19 / EF15AR20)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-ilusao-palco",
  titulo: "A Ilusão do Palco — Cenografia, Proporção e Profundidade Teatral",
  iconeTrilha: "🎭",
  bncc: ["EF15AR18", "EF15AR19", "EF15AR20"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteta da Ilusão Teatral! Do fundo da plateia o castelo parece GIGANTE lá longe. Chega perto: é uma placa de madeira pequena! Como? Cenografia. Toca em cada pista.",
    titulo: "🎭 A Mágica do Palco",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🏰", rotulo: "Palco com castelo ao fundo", descricao: "Da plateia parece um reino sem fim. Truque de escala e planos.", cor: "#a855f7", fotoUrl: mapaPalco },
      { emoji: "🏛️", rotulo: "Teatro Olimpico (1585)", descricao: "Palladio inclinou o piso e diminuiu as casas do fundo. O palco parece 10× mais comprido.", cor: "#78350f", fotoUrl: mapaOlimpico },
      { emoji: "🏔️", rotulo: "Backdrop pintado", descricao: "Montanhas azuladas ao fundo em tons SUAVES enganam o olho: parecem estar longe.", cor: "#0ea5e9", fotoUrl: mapaFundo },
      { emoji: "🪑", rotulo: "Adereços de cena", descricao: "Cadeira antiga + luminária a óleo + quadro = a história situa-se no PASSADO. Objetos contam época.", cor: "#c2410c", fotoUrl: mapaAdereco },
    ],
    falaFinal: "Você vai construir seu próprio reino de papel!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteta cênica!",
    perguntas: [
      {
        pergunta: "Pra fazer uma montanha parecer DISTANTE no fundo do palco, ela deve ser…",
        fotoUrl: qMontanhas,
        alternativas: [
          { texto: "Pequena e em tons azulados suaves", correta: true },
          { texto: "Enorme e com cores muito fortes", correta: false },
        ],
        feedbackAcerto: "Isso! Longe = pequeno + cores suaves = azulado.",
        feedbackErro: "Grande e forte = parece PERTO. Longe = pequeno e AZULADO.",
      },
      {
        pergunta: "Uma árvore no PRIMEIRO PLANO do cenário deve ser…",
        fotoUrl: qArvores,
        alternativas: [
          { texto: "Grande, detalhada e em cor viva", correta: true },
          { texto: "Pequena, azulada e sem detalhes", correta: false },
        ],
        feedbackAcerto: "Correto! Perto = grande + colorida + detalhada.",
        feedbackErro: "Isso é fundo. Primeiro plano é GRANDE, colorido e detalhado.",
      },
      {
        pergunta: "Uma cadeira antiga, luminária a óleo e quadro dourado no palco servem pra…",
        fotoUrl: mapaAdereco,
        alternativas: [
          { texto: "Situar a história numa época e ambiente (adereços)", correta: true },
          { texto: "Só encher espaço vazio", correta: false },
        ],
        feedbackAcerto: "Perfeito! Adereços CONTAM quando e onde a história se passa.",
        feedbackErro: "Nada no palco é aleatório. Cada objeto SITUA a cena.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do palco. Toca em cada card!",
    cards: [
      { termo: "Cenografia", definicao: "Arte de projetar os espaços onde a ação teatral acontece — o mundo visual da peça.", emoji: "🎭", cor: "#a855f7", fotoUrl: vocabCenografia },
      { termo: "Planos (1º, 2º, 3º)", definicao: "Divisão do palco em profundidade. 1º = frente (grande). 3º = fundo (pequeno).", emoji: "📐", cor: "#1e3a8a", fotoUrl: vocabPlanos },
      { termo: "Adereço de Cenário", definicao: "Objetos móveis (cadeira, quadro, luminária) que situam a história no tempo e no espaço.", emoji: "🪑", cor: "#c2410c", fotoUrl: vocabAdereco },
      { termo: "Backdrop / Fundo", definicao: "Painel pintado ou tecido ao fundo do palco. Cria o horizonte visual do cenário.", emoji: "🏔️", cor: "#0ea5e9", fotoUrl: mapaFundo },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o palco engana o olho há 400 anos.",
    paragrafos: [
      "CENOGRAFIA é a arte de projetar o espaço onde a peça acontece. Um palco pequeno pode virar um reino inteiro — se o cenógrafo souber os truques.",
      "O palco se divide em PLANOS: PRIMEIRO plano (frente, perto do público), SEGUNDO plano (meio) e TERCEIRO plano (fundo). Cada plano tem tamanho e cor diferentes.",
      "Coisas do PRIMEIRO plano são grandes, coloridas e detalhadas. Coisas do TERCEIRO plano são pequenas, azuladas e sem detalhes — o cérebro entende: está LONGE.",
      "Em 1585, o arquiteto Palladio construiu o Teatro Olimpico em Vicenza (Itália). Inclinou o piso e diminuiu as casinhas do fundo. Da plateia, o palco parece uma cidade inteira.",
    ],
    pigmentos: [
      { nome: "Caixa de sapato", hex: "#c2410c", fonte: "Palco em miniatura perfeito", emoji: "📦", fotoUrl: matCaixa },
      { nome: "Papel colorido", hex: "#22c55e", fonte: "Recorta e vira cenário em camadas", emoji: "📄", fotoUrl: matPapel },
      { nome: "Lanterna pequena", hex: "#facc15", fonte: "Ilumina o cenário — luz dramatiza", emoji: "🔦", fotoUrl: matLanterna },
      { nome: "Palitos de picolé", hex: "#78350f", fonte: "Bonecos e suportes do cenário", emoji: "🎪", fotoUrl: matPalito },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno cênico!",
    perguntas: [
      {
        pergunta: "Como se chama a arte de projetar os espaços do teatro?",
        fotoUrl: vocabCenografia,
        alternativas: [
          { texto: "Cenografia", correta: true },
          { texto: "Fotografia", correta: false },
        ],
        feedbackAcerto: "Isso! Cenografia = projetar o mundo visual da peça.",
        feedbackErro: "Fotografia é outra arte. No teatro é CENOGRAFIA.",
      },
      {
        pergunta: "O que fica no 3º PLANO (fundo) do cenário?",
        fotoUrl: vocabPlanos,
        alternativas: [
          { texto: "Elementos PEQUENOS em tons suaves (parecem longe)", correta: true },
          { texto: "Elementos GRANDES e muito coloridos", correta: false },
        ],
        feedbackAcerto: "Correto! Fundo = pequeno + azulado = ilusão de distância.",
        feedbackErro: "Grande + colorido é 1º plano. Fundo é PEQUENO e suave.",
      },
      {
        pergunta: "Uma cadeira antiga e uma luminária a óleo colocadas no palco são…",
        fotoUrl: mapaAdereco,
        alternativas: [
          { texto: "Adereços — situam a época da história", correta: true },
          { texto: "Instrumentos musicais", correta: false },
        ],
        feedbackAcerto: "Fantástico! Adereços contam QUANDO e ONDE a cena acontece.",
        feedbackErro: "Não são instrumentos. São ADEREÇOS que situam a época.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada elemento do palco tem seu plano certo. Combina!",
    animais: [
      {
        nome: "Árvore GRANDE detalhada", emoji: "🌳", fotoUrl: qArvores,
        corAlvo: { nome: "1º Plano (frente)", hex: "#22c55e" },
        opcoes: [
          { nome: "1º Plano (frente)", hex: "#22c55e" },
          { nome: "3º Plano (fundo)", hex: "#0ea5e9" },
          { nome: "Fora do palco", hex: "#78350f" },
        ],
        falaAcerto: "Grande e detalhada = perto do público = 1º plano.",
      },
      {
        nome: "Montanha azulada pequena", emoji: "🏔️", fotoUrl: qMontanhas,
        corAlvo: { nome: "3º Plano (fundo)", hex: "#0ea5e9" },
        opcoes: [
          { nome: "3º Plano (fundo)", hex: "#0ea5e9" },
          { nome: "1º Plano (frente)", hex: "#22c55e" },
          { nome: "Adereço de mesa", hex: "#c2410c" },
        ],
        falaAcerto: "Pequena e azulada = longe = 3º plano.",
      },
      {
        nome: "Cadeira antiga com quadro", emoji: "🪑", fotoUrl: mapaAdereco,
        corAlvo: { nome: "Adereço de cena", hex: "#c2410c" },
        opcoes: [
          { nome: "Adereço de cena", hex: "#c2410c" },
          { nome: "Backdrop pintado", hex: "#0ea5e9" },
          { nome: "Instrumento musical", hex: "#a855f7" },
        ],
        falaAcerto: "Objeto móvel que situa a história = ADEREÇO.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir teu palco em miniatura!",
    passos: [
      { id: "p1", texto: "PEGO uma caixa de sapato vazia e viro deitada — a boca abre pra frente", emoji: "📦", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DESENHO montanhas pequenas em azul suave (o fundo — 3º plano)", emoji: "🏔️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "DESENHO casinhas médias em cores neutras (o meio — 2º plano)", emoji: "🏠", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "DESENHO árvores grandes e detalhadas (a frente — 1º plano)", emoji: "🌳", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "COLO as 3 camadas com espaço entre elas — meu palco tem PROFUNDIDADE real!", emoji: "🎭", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Seu palco em miniatura funciona como o Teatro Olimpico!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário da arquiteta cênica. Toca nas palavras coloridas.",
    titulo: "Diário da Arquiteta Cênica",
    trechos: [
      { texto: "A arte de projetar o mundo visual da peça se chama", palavraDestaque: "cenografia", corDestaque: "#a855f7" },
      { texto: "O palco se divide em 1º, 2º e 3º", palavraDestaque: "planos", corDestaque: "#1e3a8a" },
      { texto: "Objetos que situam a história (cadeira, quadro, luminária) são", palavraDestaque: "adereços", corDestaque: "#c2410c" },
      { texto: "O painel pintado que forma o horizonte é o", palavraDestaque: "backdrop", corDestaque: "#0ea5e9" },
      { texto: "Sou arquiteta cênica — construo reinos inteiros num palco pequeno!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎬 Montador de Palcos! Toca em CADA elemento do cenário antes do tempo acabar pra estrear a peça.",
    titulo: "🎬 Montador de Palcos",
    instrucao: "Toque em todos os componentes antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🏔️", rotulo: "Montanhas ao fundo (3º plano)", cor: "#0ea5e9" },
      { emoji: "🏰", rotulo: "Castelo médio (2º plano)", cor: "#78350f" },
      { emoji: "🌳", rotulo: "Árvores grandes (1º plano)", cor: "#22c55e" },
      { emoji: "🪑", rotulo: "Adereço — cadeira antiga", cor: "#c2410c" },
      { emoji: "🔦", rotulo: "Lanterna de iluminação", cor: "#facc15" },
      { emoji: "🎭", rotulo: "Cortinas do palco", cor: "#a855f7" },
    ],
    falaFinal: "Cortinas abertas! Sua peça está pronta pra estrear.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da cenografia. Toca em cada verbete!",
    titulo: "📓 Caderno da Ilusão Teatral",
    itens: [
      { emoji: "🎭", rotulo: "Cenografia", descricao: "Arte de projetar o mundo visual da peça.", cor: "#a855f7", fotoUrl: vocabCenografia },
      { emoji: "📐", rotulo: "Planos", descricao: "1º frente (grande) · 2º meio · 3º fundo (pequeno).", cor: "#1e3a8a", fotoUrl: vocabPlanos },
      { emoji: "🏔️", rotulo: "Backdrop", descricao: "Painel do fundo — em tons suaves.", cor: "#0ea5e9", fotoUrl: mapaFundo },
      { emoji: "🪑", rotulo: "Adereços", descricao: "Objetos que situam a época e o lugar.", cor: "#c2410c", fotoUrl: vocabAdereco },
      { emoji: "🏛️", rotulo: "Teatro Olimpico (1585)", descricao: "Palladio inventou a perspectiva cênica.", cor: "#78350f", fotoUrl: mapaOlimpico },
      { emoji: "🏰", rotulo: "Ilusão do palco", descricao: "Palco pequeno vira reino gigante.", cor: "#4c1d95", fotoUrl: mapaPalco },
      { emoji: "📦", rotulo: "Palco caseiro", descricao: "Caixa de sapato + 3 camadas de papel = teatro em miniatura.", cor: "#7c2d12", fotoUrl: passo5 },
    ],
    falaFinal: "Sexta página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteta cênica!",
    quiz: {
      pergunta:
        "Pra fazer um objeto parecer estar muito DISTANTE no fundo do cenário, o cenógrafo deve construí-lo em qual escala?",
      alternativas: [
        { texto: "Em tamanho reduzido (menor que o real)", correta: true },
        { texto: "Em tamanho gigante (maior que o real)", correta: false },
      ],
      feedback:
        "Perfeito! Diminuir o tamanho dos objetos de fundo engana o cérebro e simula distância física real. É esse truque que os cenógrafos usam desde o Teatro Olimpico de 1585.",
    },
    missaoFamilia:
      "🎭 Teatro de Caixa Familiar: usem o palco de sapato que você construiu. Com a família, criem 2 personagens em palitos de picolé. Inventem uma cena curta de mistério e apresentem pros adultos usando lanternas pra iluminar!",
    recompensaTitulo: "📜 Página 6 restaurada — A Arquitetura dos Reinos de Papel.",
    recompensaItem: "🏛️ Maquete de Bolso em Miniatura",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Maquete de Bolso" },
};
