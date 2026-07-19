import type { AulaArteV1 } from "../../types";
import __asset_mapaMosaico from "@/assets/arte-3ano/u2-mapa-mosaico-romano.jpg.asset.json";
const mapaMosaico = __asset_mapaMosaico.url;
import __asset_mapaBizantino from "@/assets/arte-3ano/u2-mapa-bizantino.jpg.asset.json";
const mapaBizantino = __asset_mapaBizantino.url;
import __asset_mapaTesselas from "@/assets/arte-3ano/u2-mapa-tesselas.jpg.asset.json";
const mapaTesselas = __asset_mapaTesselas.url;
import __asset_mapaSimetria from "@/assets/arte-3ano/u2-mapa-simetria.jpg.asset.json";
const mapaSimetria = __asset_mapaSimetria.url;
import __asset_vocabMosaico from "@/assets/arte-3ano/u2-vocab-mosaico.jpg.asset.json";
const vocabMosaico = __asset_vocabMosaico.url;
import __asset_vocabTesselas from "@/assets/arte-3ano/u2-vocab-tesselas.jpg.asset.json";
const vocabTesselas = __asset_vocabTesselas.url;
import vocabSimetria from "@/assets/arte-3ano/u2-vocab-simetria.jpg";
import __asset_vocabEquilibrio from "@/assets/arte-3ano/u2-vocab-equilibrio.jpg.asset.json";
const vocabEquilibrio = __asset_vocabEquilibrio.url;
import __asset_nosBorboleta from "@/assets/arte-3ano/u2-nos-borboleta.jpg.asset.json";
const nosBorboleta = __asset_nosBorboleta.url;
import __asset_nosArvore from "@/assets/arte-3ano/u2-nos-arvore.jpg.asset.json";
const nosArvore = __asset_nosArvore.url;
import nosEstrela from "@/assets/arte-3ano/u2-nos-estrela.jpg";
import __asset_passo1 from "@/assets/arte-3ano/u2-passo1-cortar.jpg.asset.json";
const passo1 = __asset_passo1.url;
import passo2 from "@/assets/arte-3ano/u2-passo2-desenhar.jpg";
import __asset_passo3 from "@/assets/arte-3ano/u2-passo3-colar.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-3ano/u2-passo4-completar.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_cotidianoCalcada from "@/assets/arte-3ano/u2-cotidiano-calcada.jpg.asset.json";
const cotidianoCalcada = __asset_cotidianoCalcada.url;
import __asset_quizAzulejos from "@/assets/arte-3ano/u2-quiz-azulejos.jpg.asset.json";
const quizAzulejos = __asset_quizAzulejos.url;
import __asset_quizArtesao from "@/assets/arte-3ano/u2-quiz-artesao.jpg.asset.json";
const quizArtesao = __asset_quizArtesao.url;

/**
 * Arte · 3º Ano · Unidade 2 · Aula 01 — "Mosaicos e Simetria"
 * (EF15AR01 / EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-mosaicos",
  titulo: "Mosaicos e Simetria: A Arte dos Padrões Repetitivos",
  iconeTrilha: "🔷",
  bncc: ["EF15AR01", "EF15AR04", "EF15AR05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Descemos até as ruínas de uma cidade romana e o chão é feito de MILHARES de pedrinhas quadradas coloridas. Juntas, formam um guerreiro! Toca em cada pista pra descobrir o segredo dos mosaicos.",
    titulo: "🔍 O Chão de Pedras da Cidade Romana",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🏛️", rotulo: "Mosaicos Romanos (Pompéia)", descricao: "Pisos e paredes decorados com pedrinhas coloridas. Retratavam heróis, deuses e cenas do dia a dia.", cor: "#b45309", fotoUrl: mapaMosaico },
      { emoji: "✨", rotulo: "Mosaicos Bizantinos (Istambul)", descricao: "Paredes de igrejas cobertas de vidro dourado e azul — brilhavam à luz das velas.", cor: "#eab308", fotoUrl: mapaBizantino },
      { emoji: "🪨", rotulo: "Tesselas: as pedrinhas mágicas", descricao: "Cada pedacinho quadrado se chama TESSELA. Podia ser pedra, vidro, cerâmica ou mármore.", cor: "#0f766e", fotoUrl: mapaTesselas },
      { emoji: "🦋", rotulo: "Simetria: o espelho invisível", descricao: "Como a borboleta: dobra ao meio e os dois lados encaixam perfeitamente. Isso é SIMETRIA.", cor: "#7c3aed", fotoUrl: mapaSimetria },
    ],
    falaFinal: "Eles usavam MATEMÁTICA e SIMETRIA pra montar uma ilusão perfeita de ordem e beleza.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de escavar mais fundo, treina o olho de arqueólogo!",
    perguntas: [
      {
        pergunta: "As pedrinhas coloridas que formam um mosaico se chamam…",
        fotoUrl: vocabTesselas,
        alternativas: [
          { texto: "Pinceladas", correta: false },
          { texto: "Tesselas", correta: true },
        ],
        feedbackAcerto: "Isso! Tesselas — as pedrinhas quadradas, cortadas uma a uma.",
        feedbackErro: "Pinceladas são de pintura. No mosaico, o pedacinho é a TESSELA.",
      },
      {
        pergunta: "Quando dobramos uma imagem ao meio e os dois lados ficam IDÊNTICOS, dizemos que ela tem…",
        fotoUrl: mapaSimetria,
        alternativas: [
          { texto: "Simetria (eixo simétrico)", correta: true },
          { texto: "Zoom", correta: false },
        ],
        feedbackAcerto: "Perfeito! Simetria = espelho invisível no meio da obra.",
        feedbackErro: "Zoom é aproximar. Quando dois lados são iguais, é SIMETRIA.",
      },
      {
        pergunta: "Onde os antigos romanos MAIS usavam mosaicos?",
        fotoUrl: mapaMosaico,
        alternativas: [
          { texto: "No chão e nas paredes dos palácios", correta: true },
          { texto: "Nas roupas dos soldados", correta: false },
        ],
        feedbackAcerto: "Certo! Piso e parede — pra durar séculos.",
        feedbackErro: "Roupas não. Pisos e paredes de palácios e banhos públicos.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da expedição — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Mosaico", definicao: "Imagem grande formada juntando MUITOS pedaços pequenos de pedra, vidro ou cerâmica.", emoji: "🔷", cor: "#b45309", fotoUrl: vocabMosaico },
      { termo: "Tesselas", definicao: "Os PEQUENOS FRAGMENTOS quadrados que formam o mosaico.", emoji: "🪨", cor: "#0f766e", fotoUrl: vocabTesselas },
      { termo: "Simetria", definicao: "Linha imaginária que divide uma figura em duas partes IGUAIS.", emoji: "🦋", cor: "#7c3aed", fotoUrl: vocabSimetria },
      { termo: "Equilíbrio", definicao: "Distribuição harmoniosa das partes — nada pesa mais de um lado.", emoji: "🏛️", cor: "#0891b2", fotoUrl: vocabEquilibrio },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como um mestre mosaicista romano trabalhava. Presta atenção na técnica!",
    paragrafos: [
      "Há mais de 2.000 anos, os romanos descobriram que pedaços coloridos de pedra, mármore ou vidro colados juntos formavam figuras GIGANTES vistas de longe.",
      "O artista primeiro DESENHAVA no chão o esboço do que ia fazer. Depois cortava cada TESSELA com um martelinho, escolhendo a cor certa pra cada pedacinho.",
      "Pra que a obra ficasse bonita, ele usava a SIMETRIA — dobrando o desenho ao meio de mentirinha e repetindo as cores dos dois lados como se houvesse um espelho.",
      "Os romanos gostavam de pedras naturais (bege, vermelho, preto). Os bizantinos preferiam VIDRO com folha de OURO por dentro — brilhava à luz das velas nas igrejas!",
    ],
    pigmentos: [
      { nome: "Mármore branco", hex: "#f5f5f4", fonte: "Pedra polida de montanhas italianas", emoji: "⚪", fotoUrl: vocabTesselas },
      { nome: "Vidro azul-cobalto", hex: "#1e40af", fonte: "Areia + óxido de cobalto derretidos", emoji: "🟦", fotoUrl: mapaBizantino },
      { nome: "Vidro dourado", hex: "#eab308", fonte: "Folha de ouro entre 2 camadas de vidro", emoji: "🟡", fotoUrl: mapaBizantino },
      { nome: "Terracota vermelha", hex: "#b91c1c", fonte: "Argila cozida em forno", emoji: "🟥", fotoUrl: vocabMosaico },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "Como o artista mosaicista PLANEJAVA a obra antes de colar as tesselas?",
        fotoUrl: passo2,
        alternativas: [
          { texto: "Desenhando o esboço no chão primeiro", correta: true },
          { texto: "Colando as pedras sem planejamento nenhum", correta: false },
        ],
        feedbackAcerto: "Sim! O esboço vinha ANTES — depois as tesselas seguiam o desenho.",
        feedbackErro: "Nada de improviso. O artista SEMPRE desenhava o esboço primeiro.",
      },
      {
        pergunta: "O que fazia o mosaico bizantino BRILHAR nas igrejas?",
        fotoUrl: mapaBizantino,
        alternativas: [
          { texto: "Folha de OURO dentro das tesselas de vidro", correta: true },
          { texto: "Uma lâmpada elétrica escondida", correta: false },
        ],
        feedbackAcerto: "Isso! Vidro + ouro por dentro = brilho mágico à luz das velas.",
        feedbackErro: "Eletricidade não existia. O brilho vinha da FOLHA DE OURO no vidro.",
      },
      {
        pergunta: "Quando pinto 3 quadradinhos azuis à direita do centro, pra manter a SIMETRIA eu preciso…",
        fotoUrl: vocabSimetria,
        alternativas: [
          { texto: "Pintar 3 quadradinhos azuis à esquerda também", correta: true },
          { texto: "Deixar o outro lado em branco", correta: false },
        ],
        feedbackAcerto: "Perfeito! Simetria = mesma coisa dos dois lados do eixo.",
        feedbackErro: "Se deixar um lado em branco, quebra a simetria. Tem que espelhar!",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada obra veio de um povo diferente. Escolhe a paleta de cores certa pra cada mosaico!",
    animais: [
      {
        nome: "Mosaico romano de piso (Pompéia)", emoji: "🏛️", fotoUrl: mapaMosaico,
        corAlvo: { nome: "Bege + terracota + preto", hex: "#b45309" },
        opcoes: [
          { nome: "Rosa-neon fluorescente", hex: "#ec4899" },
          { nome: "Bege + terracota + preto", hex: "#b45309" },
          { nome: "Verde-limão elétrico", hex: "#84cc16" },
        ],
        falaAcerto: "Isso! Cores da terra italiana — bege, vermelho terracota e preto.",
      },
      {
        nome: "Mosaico bizantino de igreja (Istambul)", emoji: "✨", fotoUrl: mapaBizantino,
        corAlvo: { nome: "Ouro + azul-cobalto", hex: "#eab308" },
        opcoes: [
          { nome: "Cinza urbano", hex: "#6b7280" },
          { nome: "Ouro + azul-cobalto", hex: "#eab308" },
          { nome: "Marrom fosco", hex: "#78350f" },
        ],
        falaAcerto: "Perfeito! Ouro e azul — as cores sagradas dos bizantinos.",
      },
      {
        nome: "Calçada portuguesa (Lisboa/Rio)", emoji: "⚫", fotoUrl: cotidianoCalcada,
        corAlvo: { nome: "Preto + branco (basalto e calcário)", hex: "#1f2937" },
        opcoes: [
          { nome: "Vermelho e amarelo brilhante", hex: "#dc2626" },
          { nome: "Preto + branco (basalto e calcário)", hex: "#1f2937" },
          { nome: "Roxo e rosa pastel", hex: "#c084fc" },
        ],
        falaAcerto: "Certo! Calçada portuguesa clássica: pedras pretas e brancas.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra montar SEU mosaico caseiro — com papel de revista!",
    passos: [
      { id: "p1", texto: "CORTO pedacinhos quadrados de revistas coloridas", emoji: "✂️", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DESENHO o contorno de um vaso ou figura no papel", emoji: "✏️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "COLO os quadradinhos um do lado do outro, preenchendo o desenho", emoji: "🧴", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "COMPLETO todos os espaços — meu mosaico está pronto!", emoji: "🎨", ordem: 4, fotoUrl: passo4 },
    ],
    falaAcerto: "Seu mosaico está PRONTO! Mesma técnica que os romanos usavam há 2.000 anos.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Ruínas de Pompéia",
    trechos: [
      { texto: "Desci na cidade romana e vi um chão de", palavraDestaque: "mosaico", corDestaque: "#b45309" },
      { texto: "Cada pedacinho quadrado é uma", palavraDestaque: "tessela", corDestaque: "#0f766e" },
      { texto: "Os dois lados do desenho eram iguais — tinha", palavraDestaque: "simetria", corDestaque: "#7c3aed" },
      { texto: "Tudo parecia em perfeito", palavraDestaque: "equilíbrio", corDestaque: "#0891b2" },
      { texto: "Sou um Explorador do Tempo — a página 2 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🪞 Espelho de Pastilhas! Toca em CADA peça correta pra completar o lado direito do mosaico antes do tempo acabar.",
    titulo: "🪞 Espelho de Pastilhas",
    instrucao: "Toque em todas as tesselas na ordem certa!",
    tempoSeg: 40,
    itens: [
      { emoji: "🟥", rotulo: "Tessela vermelha (canto)", cor: "#dc2626" },
      { emoji: "🟦", rotulo: "Tessela azul (borda)", cor: "#1e40af" },
      { emoji: "🟨", rotulo: "Tessela amarela (centro)", cor: "#eab308" },
      { emoji: "🟩", rotulo: "Tessela verde (folha)", cor: "#16a34a" },
      { emoji: "⬜", rotulo: "Tessela branca (fundo)", cor: "#f5f5f4" },
      { emoji: "⬛", rotulo: "Tessela preta (contorno)", cor: "#1f2937" },
    ],
    falaFinal: "Mosaico completo — os dois lados estão IDÊNTICOS! Você dominou a simetria.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição dos Mosaicos",
    itens: [
      { emoji: "🔷", rotulo: "Mosaico", descricao: "Imagem feita com muitas pedrinhas ou tesselas coladas.", cor: "#b45309", fotoUrl: vocabMosaico },
      { emoji: "🪨", rotulo: "Tesselas", descricao: "Cada pedacinho quadrado do mosaico.", cor: "#0f766e", fotoUrl: vocabTesselas },
      { emoji: "🦋", rotulo: "Simetria", descricao: "Espelho invisível: dois lados iguais.", cor: "#7c3aed", fotoUrl: vocabSimetria },
      { emoji: "🏛️", rotulo: "Mosaico Romano", descricao: "Pisos de palácios com pedras naturais.", cor: "#b45309", fotoUrl: mapaMosaico },
      { emoji: "✨", rotulo: "Mosaico Bizantino", descricao: "Igrejas com vidro dourado e azul.", cor: "#eab308", fotoUrl: mapaBizantino },
      { emoji: "⚫", rotulo: "Calçada Portuguesa", descricao: "Descendente moderna dos mosaicos.", cor: "#1f2937", fotoUrl: cotidianoCalcada },
      { emoji: "🎮", rotulo: "Pixels de videogame", descricao: "Cada pixel = uma tessela digital!", cor: "#7c3aed", fotoUrl: vocabTesselas },
    ],
    falaFinal: "Página 2 do Atlas dos Exploradores DESBLOQUEADA — O Labirinto dos Mosaicos de Vidro!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da expedição, arqueólogo — mostra o que aprendeu!",
    quiz: {
      pergunta: "Como são chamados os pequenos pedacinhos de pedra, vidro ou azulejo usados para montar um mosaico?",
      alternativas: [
        { texto: "Tesselas", correta: true },
        { texto: "Pinceladas", correta: false },
      ],
      feedback: "Excelente investigação! As tesselas eram cortadas minuciosamente pelos mestres mosaicistas da antiguidade — cada uma escolhida a dedo.",
    },
    missaoFamilia:
      "🔷 Detetives do Padrão: procurem em família por pisos ou calçadas do bairro que repitam padrões geométricos. Contem quantas cores diferentes aparecem e conversem sobre como o construtor planejou o encaixe.",
    recompensaTitulo: "📜 Página 2 restaurada — O Labirinto dos Mosaicos de Vidro.",
    recompensaItem: "🔨 Torquês de Arqueólogo (Cortador de Tesselas)",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Torquês de Arqueólogo" },
};
