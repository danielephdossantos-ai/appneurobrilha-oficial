import type { AulaArteV1 } from "../../types";
import vocabTransparente from "@/assets/arte-4ano/u1-vocab-transparente.jpg";
import vocabTranslucido from "@/assets/arte-4ano/u1-vocab-translucido.jpg";
import vocabOpaco from "@/assets/arte-4ano/u1-vocab-opaco.jpg";
import vocabSombra from "@/assets/arte-4ano/u1-vocab-sombra.jpg";
import mapaDavinci from "@/assets/arte-4ano/u1-mapa-davinci.jpg";
import mapaCaravaggio from "@/assets/arte-4ano/u1-mapa-caravaggio.jpg";
import mapaPrisma from "@/assets/arte-4ano/u1-mapa-prisma.jpg";
import mapaAtelie from "@/assets/arte-4ano/u1-mapa-atelie.jpg";
import matCelofane from "@/assets/arte-4ano/u1-mat-celofane.jpg";
import matPapelao from "@/assets/arte-4ano/u1-mat-papelao.jpg";
import matAgua from "@/assets/arte-4ano/u1-mat-agua.jpg";
import matVidroJateado from "@/assets/arte-4ano/u1-mat-vidro-jateado.jpg";
import qVitral from "@/assets/arte-4ano/u1-q-vitral.jpg";
import qSombraChinesa from "@/assets/arte-4ano/u1-q-sombra-chinesa.jpg";
import qLanternaSombra from "@/assets/arte-4ano/u1-q-lanterna-sombra.jpg";
import qParedeTijolos from "@/assets/arte-4ano/u1-q-parede-tijolos.jpg";
import qTela from "@/assets/arte-4ano/u1-q-tela.jpg";
import qFolha from "@/assets/arte-4ano/u1-q-folha.jpg";
import passo1 from "@/assets/arte-4ano/u1-passo1-desenhar.jpg";
import passo2 from "@/assets/arte-4ano/u1-passo2-recortar.jpg";
import passo3 from "@/assets/arte-4ano/u1-passo3-colar-celofane.jpg";
import passo4 from "@/assets/arte-4ano/u1-passo4-luz.jpg";
import passo5 from "@/assets/arte-4ano/u1-passo5-sombra.jpg";
import fonteLuz from "@/assets/arte-4ano/u1-fonte-luz.jpg";
import teatroSombras from "@/assets/arte-4ano/u1-teatro-sombras.jpg";
import lupaLente from "@/assets/arte-4ano/u1-lupa-lente.jpg";

/**
 * Arte · 4º Ano · Unidade 1 · Aula 01 — "A Luz, a Sombra e o Mistério da Opacidade"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * (EF15AR02 / EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-luz-sombra-opacidade",
  titulo: "A Luz, a Sombra e o Mistério da Opacidade",
  iconeTrilha: "👁️",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheiro Visual! Um feixe de sol acabou de invadir o ateliê escuro — e cada coisa que ele encontra reage diferente. Toca em cada pista pra entender a FÍSICA que os grandes pintores usaram pra criar drama e mistério.",
    titulo: "🔦 O Feixe de Luz no Ateliê Escuro",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🕯️", rotulo: "Ateliê de janela única", descricao: "Uma única fonte de luz entrando numa sala escura — a receita clássica do drama renascentista.", cor: "#b45309", fotoUrl: mapaAtelie },
      { emoji: "📓", rotulo: "Caderno de Leonardo da Vinci", descricao: "Leonardo passava horas desenhando velas e esferas pra entender pra onde a luz vai — e pra onde NÃO vai.", cor: "#78350f", fotoUrl: mapaDavinci },
      { emoji: "🎭", rotulo: "Chiaroscuro de Caravaggio", descricao: "Claro-escuro extremo: só o essencial recebe luz, o resto some no preto. Puro suspense visual.", cor: "#292524", fotoUrl: mapaCaravaggio },
      { emoji: "🌈", rotulo: "Prisma de Newton", descricao: "A luz branca atravessa o cristal e se abre em arco-íris — a prova de que dentro da luz mora TODA cor.", cor: "#0ea5e9", fotoUrl: mapaPrisma },
    ],
    falaFinal: "Você está entrando no laboratório onde a FÍSICA e a ARTE se encontram.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de acender as tochas do laboratório, calibra o olho de engenheiro visual!",
    perguntas: [
      {
        pergunta: "Quando a luz da lanterna bate num objeto que NÃO deixa ela passar, o que aparece do outro lado?",
        fotoUrl: qLanternaSombra,
        alternativas: [
          { texto: "Uma sombra escura no formato do objeto", correta: true },
          { texto: "Um arco-íris colorido", correta: false },
        ],
        feedbackAcerto: "Isso! O objeto opaco BARRA a luz — e a sombra é o desenho do que ela não conseguiu atravessar.",
        feedbackErro: "Arco-íris precisa de prisma. Aqui a luz é BLOQUEADA — sobra uma SOMBRA com o formato do objeto.",
      },
      {
        pergunta: "Um vitral de igreja gótica é um material…",
        fotoUrl: qVitral,
        alternativas: [
          { texto: "Opaco, porque bloqueia toda a luz", correta: false },
          { texto: "Translúcido colorido — a luz passa mas ganha cor", correta: true },
        ],
        feedbackAcerto: "Perfeito, engenheiro! O vidro colorido deixa a luz atravessar tingindo tudo — é translúcido.",
        feedbackErro: "Se fosse opaco, a igreja ficaria escura. O vitral é TRANSLÚCIDO: deixa a luz passar colorida.",
      },
      {
        pergunta: "O teatro de sombras chinês funciona porque o boneco é…",
        fotoUrl: qSombraChinesa,
        alternativas: [
          { texto: "Feito de papelão OPACO recortado", correta: true },
          { texto: "Feito de vidro transparente", correta: false },
        ],
        feedbackAcerto: "Isso! Papelão opaco = silhueta perfeita quando a luz bate atrás.",
        feedbackErro: "Vidro transparente não faria sombra! O truque é o papelão OPACO cortado em forma.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do nosso laboratório óptico — toca em cada uma pra desbloquear o caderno.",
    cards: [
      { termo: "Transparente", definicao: "Deixa a luz passar TOTAL — dá pra enxergar nítido do outro lado (vidro, água limpa).", emoji: "🪟", cor: "#0ea5e9", fotoUrl: vocabTransparente },
      { termo: "Translúcido", definicao: "Deixa a luz passar PARCIAL — borra o que está atrás (papel vegetal, vitral).", emoji: "🕯️", cor: "#f59e0b", fotoUrl: vocabTranslucido },
      { termo: "Opaco", definicao: "BLOQUEIA a luz completamente. Nada passa (madeira, papelão, tijolo).", emoji: "🧱", cor: "#78350f", fotoUrl: vocabOpaco },
      { termo: "Sombra Projetada", definicao: "Marca ESCURA no formato do objeto opaco no lado oposto à luz.", emoji: "👤", cor: "#1f2937", fotoUrl: vocabSombra },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a luz VIAJA e o que acontece quando ela encontra um material. Cada tipo reage diferente!",
    paragrafos: [
      "A luz sai de uma FONTE (o sol, uma vela, uma lanterna, uma lâmpada) e viaja em linha reta pelo espaço até encontrar um objeto.",
      "Se o material for TRANSPARENTE, a luz atravessa quase toda — você enxerga o que está atrás com nitidez. O vidro da janela é o melhor exemplo.",
      "Se for TRANSLÚCIDO, a luz consegue passar, mas espalhada — o que está atrás vira uma silhueta borrada. Papel vegetal, vidro jateado e vitrais fazem isso.",
      "Se for OPACO, a luz PARA. Do lado oposto aparece uma sombra escura com o formato exato do objeto. É assim que Caravaggio criava seus dramas: uma fonte de luz, o resto opaco.",
    ],
    pigmentos: [
      { nome: "Vidro transparente", hex: "#38bdf8", fonte: "Luz passa 100%", emoji: "🪟", fotoUrl: matAgua },
      { nome: "Vitral / celofane", hex: "#f59e0b", fonte: "Luz passa colorida", emoji: "🕯️", fotoUrl: matCelofane },
      { nome: "Vidro jateado", hex: "#94a3b8", fonte: "Luz passa borrada", emoji: "🌫️", fotoUrl: matVidroJateado },
      { nome: "Papelão / madeira", hex: "#78350f", fonte: "Luz é bloqueada — vira sombra", emoji: "🧱", fotoUrl: matPapelao },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no seu caderno de laboratório!",
    perguntas: [
      {
        pergunta: "Que tipo de material BLOQUEIA TOTALMENTE a luz e projeta uma sombra na parede?",
        fotoUrl: qParedeTijolos,
        alternativas: [
          { texto: "Material Opaco", correta: true },
          { texto: "Material Transparente", correta: false },
        ],
        feedbackAcerto: "Perfeito! Opacos barram a luz — sem eles, não existiria sombra na pintura.",
        feedbackErro: "Transparente deixaria passar. Quem bloqueia e cria sombra é o material OPACO.",
      },
      {
        pergunta: "A tela onde o pintor pinta é geralmente…",
        fotoUrl: qTela,
        alternativas: [
          { texto: "Opaca — pra receber a tinta e não deixar luz passar", correta: true },
          { texto: "Transparente como vidro", correta: false },
        ],
        feedbackAcerto: "Isso! A tela é opaca pra segurar a tinta e criar uma superfície sólida.",
        feedbackErro: "Se fosse transparente, você veria a parede atrás! A tela é OPACA.",
      },
      {
        pergunta: "Uma folha verde iluminada por trás pelo sol brilha translúcida porque…",
        fotoUrl: qFolha,
        alternativas: [
          { texto: "Deixa a luz passar parcialmente, tingida de verde", correta: true },
          { texto: "É totalmente opaca como uma parede", correta: false },
        ],
        feedbackAcerto: "Sim! A folha é TRANSLÚCIDA — a luz atravessa colorindo tudo de verde.",
        feedbackErro: "Se fosse opaca, ficaria só escura. A folha é TRANSLÚCIDA — brilha quando iluminada por trás.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada obra usa um tipo de material pra brincar com a luz. Combina cada uma com a categoria certa!",
    animais: [
      {
        nome: "Vitral gótico da catedral", emoji: "🕯️", fotoUrl: qVitral,
        corAlvo: { nome: "Translúcido colorido", hex: "#f59e0b" },
        opcoes: [
          { nome: "Opaco absoluto", hex: "#1f2937" },
          { nome: "Translúcido colorido", hex: "#f59e0b" },
          { nome: "Transparente 100%", hex: "#38bdf8" },
        ],
        falaAcerto: "Vitral = translúcido colorido. A luz vira arco-íris dentro da catedral.",
      },
      {
        nome: "Boneco do teatro de sombras", emoji: "🐲", fotoUrl: qSombraChinesa,
        corAlvo: { nome: "Opaco recortado", hex: "#1f2937" },
        opcoes: [
          { nome: "Transparente", hex: "#38bdf8" },
          { nome: "Opaco recortado", hex: "#1f2937" },
          { nome: "Vidro jateado", hex: "#94a3b8" },
        ],
        falaAcerto: "Opaco recortado! Só a silhueta aparece na tela iluminada.",
      },
      {
        nome: "Copo de vidro na natureza-morta", emoji: "🥛", fotoUrl: matAgua,
        corAlvo: { nome: "Transparente", hex: "#38bdf8" },
        opcoes: [
          { nome: "Opaco pesado", hex: "#78350f" },
          { nome: "Transparente", hex: "#38bdf8" },
          { nome: "Translúcido leitoso", hex: "#e2e8f0" },
        ],
        falaAcerto: "Vidro limpo com água = TRANSPARENTE. A luz atravessa sem deformar quase nada.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir o SEU objeto de ilusão — a criatura-vitral do laboratório.",
    passos: [
      { id: "p1", texto: "DESENHO a silhueta numa cartolina PRETA (opaca)", emoji: "✏️", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "RECORTO janelas nos olhos e no corpo da criatura", emoji: "✂️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "COLO pedaços de celofane colorido (translúcido) por trás", emoji: "🎨", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "LEVO contra a luz da janela — os buracos brilham como vitral", emoji: "☀️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "PROJETO na parede: sombra opaca + brilhos coloridos", emoji: "🌈", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua criatura-vitral está VIVA — misto de sombra e luz colorida!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do engenheiro visual. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Engenheiro Visual",
    trechos: [
      { texto: "Descobri que o vidro da janela é totalmente", palavraDestaque: "transparente", corDestaque: "#0ea5e9" },
      { texto: "Já o papel vegetal, contra a luz, fica", palavraDestaque: "translúcido", corDestaque: "#f59e0b" },
      { texto: "O papelão preto do teatro de sombras é", palavraDestaque: "opaco", corDestaque: "#78350f" },
      { texto: "Quando a luz bate no objeto opaco, aparece uma", palavraDestaque: "sombra", corDestaque: "#1f2937" },
      { texto: "Sou um Engenheiro Visual — controlo a luz do meu ateliê!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🔦 O Prisma de Da Vinci! Toca em CADA peça do laboratório antes da tocha apagar pra guiar o feixe até a obra escondida.",
    titulo: "🔦 O Prisma de Da Vinci",
    instrucao: "Toque em todos os componentes ópticos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔦", rotulo: "Lanterna (fonte de luz)", cor: "#fbbf24" },
      { emoji: "🪟", rotulo: "Vidro transparente", cor: "#38bdf8" },
      { emoji: "🌈", rotulo: "Prisma de cristal", cor: "#a855f7" },
      { emoji: "🕯️", rotulo: "Vitral translúcido", cor: "#f59e0b" },
      { emoji: "🧱", rotulo: "Barreira opaca de tijolos", cor: "#78350f" },
      { emoji: "🖼️", rotulo: "Obra escondida no fundo", cor: "#dc2626" },
    ],
    falaFinal: "Feixe guiado! A obra restaurada acendeu no fundo do laboratório.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno do laboratório repassando cada descoberta. Toca em cada verbete!",
    titulo: "📓 Caderno do Laboratório Óptico",
    itens: [
      { emoji: "🔦", rotulo: "Fonte de Luz", descricao: "Sol, vela, lanterna — de onde os raios saem em linha reta.", cor: "#fbbf24", fotoUrl: fonteLuz },
      { emoji: "🪟", rotulo: "Transparente", descricao: "Vidro, água — luz passa 100%.", cor: "#0ea5e9", fotoUrl: vocabTransparente },
      { emoji: "🕯️", rotulo: "Translúcido", descricao: "Papel vegetal, vitral — luz passa borrada ou colorida.", cor: "#f59e0b", fotoUrl: vocabTranslucido },
      { emoji: "🧱", rotulo: "Opaco", descricao: "Papelão, madeira, tijolo — luz é bloqueada.", cor: "#78350f", fotoUrl: vocabOpaco },
      { emoji: "👤", rotulo: "Sombra Projetada", descricao: "Marca escura no formato do opaco no lado oposto à luz.", cor: "#1f2937", fotoUrl: vocabSombra },
      { emoji: "🎭", rotulo: "Chiaroscuro", descricao: "Técnica de Caravaggio: luz única + escuro profundo.", cor: "#292524", fotoUrl: mapaCaravaggio },
      { emoji: "🌈", rotulo: "Prisma", descricao: "Cristal que abre a luz branca em arco-íris.", cor: "#a855f7", fotoUrl: mapaPrisma },
    ],
    falaFinal: "Primeira página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, engenheiro visual — prova o que descobriu!",
    quiz: {
      pergunta: "Que tipo de material BLOQUEIA totalmente a luz e faz uma sombra ser projetada na parede oposta?",
      alternativas: [
        { texto: "Material Opaco", correta: true },
        { texto: "Material Transparente", correta: false },
      ],
      feedback: "Perfeito! Os materiais opacos barram os raios de luz e são FUNDAMENTAIS pra criar os efeitos de claro-escuro na arte — sem eles, o Caravaggio não existiria.",
    },
    missaoFamilia:
      "🎭 Teatro de Silhuetas Noturno: apaguem as luzes da sala. Com a lanterna do celular, projetem sombras de mãos e brinquedos OPACOS na parede. Aproximem e afastem o objeto da lanterna pra descobrir como a sombra fica GIGANTE ou pequenina e super nítida.",
    recompensaTitulo: "📜 Página 1 restaurada — O Esboço do Laboratório Óptico.",
    recompensaItem: "🔮 Lente de Cristal de Quartzo Renascentista",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Lente de Cristal Renascentista" },
};
