import type { AulaArteV1 } from "../../types";
import __asset_brasiliaPlano from "@/assets/arte-7ano/u1-brasilia-plano.jpg.asset.json";
const brasiliaPlano = __asset_brasiliaPlano.url;
import __asset_niemeyerCongresso from "@/assets/arte-7ano/u1-niemeyer-congresso.jpg.asset.json";
const niemeyerCongresso = __asset_niemeyerCongresso.url;
import __asset_trilhosFuga from "@/assets/arte-7ano/u1-trilhos-fuga.jpg.asset.json";
const trilhosFuga = __asset_trilhosFuga.url;
import __asset_avenidaFuga from "@/assets/arte-7ano/u1-avenida-fuga.jpg.asset.json";
const avenidaFuga = __asset_avenidaFuga.url;
import diagramaPerspectiva from "@/assets/arte-7ano/u1-diagrama-perspectiva.jpg";
import __asset_muralUrbano from "@/assets/arte-7ano/u1-mural-urbano.jpg.asset.json";
const muralUrbano = __asset_muralUrbano.url;
import __asset_cidadeSuspensa from "@/assets/arte-7ano/u1-cidade-suspensa.jpg.asset.json";
const cidadeSuspensa = __asset_cidadeSuspensa.url;
import __asset_linhaHorizonte from "@/assets/arte-7ano/u1-linha-horizonte.jpg.asset.json";
const linhaHorizonte = __asset_linhaHorizonte.url;
import __asset_arquitetoDesenhando from "@/assets/arte-7ano/u1-arquiteto-desenhando.jpg.asset.json";
const arquitetoDesenhando = __asset_arquitetoDesenhando.url;
import __asset_catedralBrasilia from "@/assets/arte-7ano/u1-catedral-brasilia.jpg.asset.json";
const catedralBrasilia = __asset_catedralBrasilia.url;
import ruaCinza from "@/assets/arte-7ano/u1-rua-cinza.jpg";
import __asset_isometrica from "@/assets/arte-7ano/u1-isometrica.jpg.asset.json";
const isometrica = __asset_isometrica.url;
import __asset_diminuicaoEscalar from "@/assets/arte-7ano/u1-diminuicao-escalar.jpg.asset.json";
const diminuicaoEscalar = __asset_diminuicaoEscalar.url;
import __asset_passo1 from "@/assets/arte-7ano/u1-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import passo2 from "@/assets/arte-7ano/u1-passo2.jpg";
import passo3 from "@/assets/arte-7ano/u1-passo3.jpg";
import __asset_passo4 from "@/assets/arte-7ano/u1-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-7ano/u1-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;
import __asset_lucioCosta from "@/assets/arte-7ano/u1-lucio-costa-sketch.jpg.asset.json";
const lucioCosta = __asset_lucioCosta.url;
import __asset_holografiaPredio from "@/assets/arte-7ano/u1-holografia-predio.jpg.asset.json";
const holografiaPredio = __asset_holografiaPredio.url;

/**
 * Arte · 7º Ano · Unidade 1 · Aula 01 — "A Cidade como Tela e a Geometria do Espaço"
 * Metanarrativa: 🚀 Crônicas das Cidades Suspensas
 * Foco: perspectiva linear, ponto de fuga, urbanismo de Brasília, arte urbana.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cidades-suspensas",
  titulo: "A Cidade como Tela e a Geometria do Espaço",
  iconeTrilha: "🚀",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Urbanista Visual! O Códice virou tela holográfica: à sua frente, o mapa de uma metrópole com prédios que parecem flutuar sobre ruas cinzas. Sua missão é dominar as LEIS DO ESPAÇO — perspectiva, ponto de fuga e intervenção urbana — pra dar vida às Cidades Suspensas. Toca em cada pista.",
    titulo: "🚀 O Horizonte de Neon",
    instrucao: "Toca em cada pista pra ativar o módulo urbanista",
    itens: [
      { emoji: "🛸", rotulo: "Cidade Suspensa (Concept Art)", descricao: "Metrópole futurista com prédios flutuantes conectados por passarelas de neon. O ponto de partida da sua missão de arquiteto social.", cor: "#0891b2", fotoUrl: cidadeSuspensa },
      { emoji: "✈️", rotulo: "Plano Piloto de Brasília", descricao: "Lúcio Costa desenhou a cidade em forma de CRUZ curvada — parece um avião. Uma cidade INTEIRA projetada no papel antes de existir. Arte + urbanismo em escala continental.", cor: "#0f766e", fotoUrl: brasiliaPlano },
      { emoji: "🏛️", rotulo: "Curvas de Niemeyer", descricao: "Oscar Niemeyer usou concreto armado pra fazer o que era impossível: curvas fluidas em vãos gigantes. A arquitetura virou ESCULTURA em escala urbana.", cor: "#7c2d12", fotoUrl: niemeyerCongresso },
      { emoji: "🎨", rotulo: "Grafite transforma a rua", descricao: "Muralismo urbano: uma parede cinza vira ponto de encontro cultural. A arte muda a FUNÇÃO SOCIAL do espaço.", cor: "#dc2626", fotoUrl: muralUrbano },
    ],
    falaFinal: "Você vai aprender a projetar espaço com matemática visual e transformar cidades com arte.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de urbanista antes de puxar a régua!",
    perguntas: [
      {
        pergunta: "Se você está parado no meio de uma linha de trem RETA e olha para frente, os trilhos parecem se juntar à distância. Que conceito visual explica isso?",
        fotoUrl: trilhosFuga,
        alternativas: [
          { texto: "Perspectiva Linear — as retas paralelas convergem para o PONTO DE FUGA na Linha do Horizonte", correta: true },
          { texto: "Perspectiva Isométrica — os trilhos ficam sempre paralelos, sem profundidade", correta: false },
        ],
        feedbackAcerto: "Perfeito! É a Perspectiva Linear, descoberta na Renascença. Linhas paralelas convergem no PF.",
        feedbackErro: "Cuidado: na Isométrica NÃO existe convergência — os trilhos ficariam paralelos. Aqui eles se juntam, logo é Perspectiva Linear.",
      },
      {
        pergunta: "Um elemento perto do observador é desenhado GRANDE. Quando se aproxima do Ponto de Fuga, como ele deve ficar?",
        fotoUrl: diminuicaoEscalar,
        alternativas: [
          { texto: "Cada vez MENOR e menos nítido — é a Diminuição Escalar", correta: true },
          { texto: "Cada vez MAIOR, pra chamar atenção do longe", correta: false },
        ],
        feedbackAcerto: "Isso! Diminuição Escalar é o truque matemático que cria a ilusão de profundidade.",
        feedbackErro: "Ficaria estranho: se o fundo ficasse maior, o cérebro não entenderia como distância.",
      },
      {
        pergunta: "Uma rua abandonada e cinza recebe um MURAL de grafite com cores quentes. O que muda na percepção do lugar?",
        fotoUrl: muralUrbano,
        alternativas: [
          { texto: "O espaço deixa de ser 'de passagem' e vira ponto de encontro cultural — a arte muda a FUNÇÃO SOCIAL", correta: true },
          { texto: "Nada muda — pintar parede é só decoração sem efeito social", correta: false },
        ],
        feedbackAcerto: "Excelente! Arte urbana é INTERVENÇÃO SOCIAL: transforma percepção, uso e valor de um lugar.",
        feedbackErro: "A arte pública tem impacto direto no comportamento das pessoas naquele espaço — é urbanismo emocional.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do urbanista visual. Toca em cada verbete!",
    cards: [
      { termo: "Linha do Horizonte (LH)", definicao: "Linha imaginária no NÍVEL DOS OLHOS do observador. Divide céu e terra. Toda perspectiva começa por ela.", emoji: "📏", cor: "#0891b2", fotoUrl: linhaHorizonte },
      { termo: "Ponto de Fuga (PF)", definicao: "Ponto sobre a Linha do Horizonte onde todas as linhas diagonais paralelas convergem e desaparecem.", emoji: "🎯", cor: "#dc2626", fotoUrl: diagramaPerspectiva },
      { termo: "Diminuição Escalar", definicao: "Regra matemática: o que está PERTO é grande e detalhado; o que está longe (perto do PF) é pequeno e menos nítido.", emoji: "🔍", cor: "#7c2d12", fotoUrl: diminuicaoEscalar },
      { termo: "Perspectiva Linear", definicao: "Sistema geométrico que cria a ILUSÃO de profundidade no plano 2D usando LH + PF + linhas de fuga.", emoji: "📐", cor: "#0f766e", fotoUrl: avenidaFuga },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o desenho de uma cidade PODE MOLDAR o comportamento humano.",
    paragrafos: [
      "As cidades não são amontoados aleatórios de concreto. São ORGANISMOS VIVOS projetados a partir de linhas, ângulos, cores — e das pessoas que as habitam. Um urbanista visual é ao mesmo tempo arquiteto, artista e engenheiro social.",
      "O primeiro código do urbanista é a PERSPECTIVA LINEAR. Você traça a LINHA DO HORIZONTE ao nível dos olhos, marca um PONTO DE FUGA no centro, e puxa linhas diagonais até esse ponto. Instantaneamente o cérebro vê profundidade onde só havia papel plano.",
      "A regra complementar é a DIMINUIÇÃO ESCALAR: quanto mais um elemento se aproxima do Ponto de Fuga, menor e menos detalhado ele fica. Um prédio no primeiro plano é gigante; o mesmo prédio a 10 quarteirões vira um pontinho. Matemática pura virando ilusão visual.",
      "Em 1960, Lúcio Costa desenhou o PLANO PILOTO DE BRASÍLIA a partir do traçado de uma cruz — depois curvada pra caber no terreno. Vista de cima, a cidade parece um AVIÃO. Oscar Niemeyer completou a obra com colunas curvas, cúpulas e vãos livres de concreto armado. A cidade inteira virou uma escultura em escala continental.",
      "E quando a cidade envelhece e uma rua vira só concreto cinza? Entra a INTERVENÇÃO ARTÍSTICA URBANA. Grafite, muralismo, lambe-lambe: cores quentes e linhas dinâmicas transformam um beco perigoso em ponto de encontro cultural. A arte muda a função social do lugar — urbanismo emocional em ação.",
    ],
    pigmentos: [
      { nome: "Linha do Horizonte", hex: "#0891b2", fonte: "Base de toda perspectiva", emoji: "📏", fotoUrl: linhaHorizonte },
      { nome: "Ponto de Fuga", hex: "#dc2626", fonte: "Onde as linhas se encontram", emoji: "🎯", fotoUrl: diagramaPerspectiva },
      { nome: "Plano Piloto (Lúcio Costa)", hex: "#0f766e", fonte: "Cidade projetada como avião", emoji: "✈️", fotoUrl: lucioCosta },
      { nome: "Concreto curvo (Niemeyer)", hex: "#78716c", fonte: "Arquitetura virou escultura", emoji: "🏛️", fotoUrl: catedralBrasilia },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do urbanista!",
    perguntas: [
      {
        pergunta: "Onde EXATAMENTE fica localizado o Ponto de Fuga em uma perspectiva de um ponto só?",
        fotoUrl: diagramaPerspectiva,
        alternativas: [
          { texto: "Sobre a LINHA DO HORIZONTE, geralmente no centro do olhar do observador", correta: true },
          { texto: "No canto inferior da folha, longe da linha do horizonte", correta: false },
        ],
        feedbackAcerto: "Correto! O PF SEMPRE mora sobre a LH — é a lei fundamental da perspectiva linear.",
        feedbackErro: "PF fora da LH quebra a lógica visual — o cérebro deixa de ler como profundidade real.",
      },
      {
        pergunta: "Brasília foi desenhada a partir de qual forma inicial que depois foi curvada?",
        fotoUrl: lucioCosta,
        alternativas: [
          { texto: "De uma CRUZ (dois eixos), curvada pra lembrar um avião ou borboleta", correta: true },
          { texto: "De um círculo perfeito no meio do cerrado", correta: false },
        ],
        feedbackAcerto: "Isso! Lúcio Costa começou com uma cruz e curvou o eixo pra adaptar ao terreno.",
        feedbackErro: "Circular era o desejo de outras cidades utópicas. Brasília começou como CRUZ curvada.",
      },
      {
        pergunta: "Qual foi a inovação técnica que permitiu Niemeyer criar curvas gigantes e vãos livres?",
        fotoUrl: catedralBrasilia,
        alternativas: [
          { texto: "O CONCRETO ARMADO — permitiu formas curvas e estruturas leves em grande escala", correta: true },
          { texto: "A pedra maciça esculpida à mão, como na Grécia antiga", correta: false },
        ],
        feedbackAcerto: "Perfeito! Concreto armado = ferro + concreto. Deu liberdade estrutural nunca vista.",
        feedbackErro: "Pedra maciça não faria aquelas curvas fluidas — precisa de concreto armado moderno.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pelo CONCEITO de espaço que ela usa!",
    animais: [
      {
        nome: "Trilhos de trem convergindo", emoji: "🚆", fotoUrl: trilhosFuga,
        corAlvo: { nome: "Perspectiva Linear", hex: "#0891b2" },
        opcoes: [
          { nome: "Perspectiva Linear", hex: "#0891b2" },
          { nome: "Isométrica", hex: "#78716c" },
          { nome: "Grafite Urbano", hex: "#dc2626" },
        ],
        falaAcerto: "Isso! Linhas paralelas que convergem = Perspectiva Linear.",
      },
      {
        nome: "Mural colorido de rua", emoji: "🎨", fotoUrl: muralUrbano,
        corAlvo: { nome: "Intervenção Urbana", hex: "#dc2626" },
        opcoes: [
          { nome: "Intervenção Urbana", hex: "#dc2626" },
          { nome: "Plano Piloto", hex: "#0f766e" },
          { nome: "Perspectiva Linear", hex: "#0891b2" },
        ],
        falaAcerto: "Correto! Grafite/muralismo é INTERVENÇÃO ARTÍSTICA no espaço público.",
      },
      {
        nome: "Cúpula e torres do Congresso", emoji: "🏛️", fotoUrl: niemeyerCongresso,
        corAlvo: { nome: "Arquitetura Moderna", hex: "#7c2d12" },
        opcoes: [
          { nome: "Arquitetura Moderna", hex: "#7c2d12" },
          { nome: "Grafite Urbano", hex: "#dc2626" },
          { nome: "Diminuição Escalar", hex: "#0891b2" },
        ],
        falaAcerto: "Perfeito! Concreto armado, curvas e vãos livres = Arquitetura Moderna.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra desenhar a primeira avenida da SUA Cidade Suspensa.",
    passos: [
      { id: "p1", texto: "Traço a LINHA DO HORIZONTE no meio da folha e marco o PONTO DE FUGA no centro", emoji: "📏", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "Puxo linhas diagonais do PF pras 4 pontas da folha (formam chão e teto da avenida)", emoji: "📐", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "Desenho 4 prédios (2 de cada lado) com verticais retas e topos/bases ligados ao PF", emoji: "🏙️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "Adiciono passarelas aéreas, janelas de luz e detalhes — quanto mais perto do PF, menor", emoji: "🌉", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "Colorizo com neon e cores dinâmicas — está pronta a primeira avenida da Cidade Suspensa!", emoji: "🌆", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de criar o primeiro Distrito Arquitetônico da SUA Cidade Suspensa!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do urbanista visual. Toca nas palavras coloridas.",
    titulo: "Diário do Urbanista Visual",
    trechos: [
      { texto: "Sou urbanista visual. Toda cidade começa pela", palavraDestaque: "Linha do Horizonte", corDestaque: "#0891b2" },
      { texto: "e por um", palavraDestaque: "Ponto de Fuga", corDestaque: "#dc2626" },
      { texto: "onde as retas paralelas se encontram — isso é", palavraDestaque: "perspectiva linear", corDestaque: "#0f766e" },
      { texto: "Brasília nasceu do", palavraDestaque: "Plano Piloto", corDestaque: "#7c2d12" },
      { texto: "de Lúcio Costa; Niemeyer trouxe a curva. Nas ruas velhas, o", palavraDestaque: "grafite", corDestaque: "#dc2626" },
      { texto: "muda a função social do espaço. Arte é urbanismo emocional." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 Alinhador de Perspectiva! Toca em TODOS os elementos do canteiro de obras antes do tempo acabar.",
    titulo: "🎯 Alinhador de Perspectiva",
    instrucao: "Alinhe todos os vértices ao Ponto de Fuga antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "📏", rotulo: "Linha do Horizonte", cor: "#0891b2" },
      { emoji: "🎯", rotulo: "Ponto de Fuga central", cor: "#dc2626" },
      { emoji: "📐", rotulo: "Régua Teodolito Digital", cor: "#0f766e" },
      { emoji: "🏢", rotulo: "Bloco de prédio holográfico", cor: "#78716c" },
      { emoji: "🌉", rotulo: "Passarela aérea", cor: "#7c2d12" },
      { emoji: "💡", rotulo: "Janela de luz neon", cor: "#f59e0b" },
    ],
    falaFinal: "Alinhamento perfeito! O primeiro Distrito da Cidade Suspensa está estável.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a primeira página do módulo Cidades Suspensas. Toca em cada verbete!",
    titulo: "📓 Caderno do Urbanista Visual",
    itens: [
      { emoji: "📏", rotulo: "Linha do Horizonte", descricao: "Linha imaginária ao nível dos olhos do observador. Divide céu e terra — base de toda perspectiva.", cor: "#0891b2", fotoUrl: linhaHorizonte },
      { emoji: "🎯", rotulo: "Ponto de Fuga", descricao: "Ponto sobre a LH onde as retas paralelas convergem. Cria a ilusão de profundidade.", cor: "#dc2626", fotoUrl: diagramaPerspectiva },
      { emoji: "🔍", rotulo: "Diminuição Escalar", descricao: "Perto = grande e detalhado. Longe (perto do PF) = pequeno e menos nítido.", cor: "#7c2d12", fotoUrl: diminuicaoEscalar },
      { emoji: "✈️", rotulo: "Plano Piloto — Brasília", descricao: "Lúcio Costa desenhou a cidade em forma de cruz curvada, lembrando um avião.", cor: "#0f766e", fotoUrl: lucioCosta },
      { emoji: "🏛️", rotulo: "Curvas de Niemeyer", descricao: "Concreto armado permitiu curvas fluidas e vãos livres — arquitetura virou escultura.", cor: "#78716c", fotoUrl: catedralBrasilia },
      { emoji: "🎨", rotulo: "Intervenção Urbana", descricao: "Grafite e muralismo transformam a função social de ruas cinzas em pontos culturais.", cor: "#dc2626", fotoUrl: muralUrbano },
    ],
    falaFinal: "Primeiro Distrito da Cidade Suspensa RESTAURADO — Setor Arquitetônico ativo!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, urbanista visual!",
    quiz: {
      pergunta: "Você está no meio de uma linha de trem RETA olhando para a frente. Os trilhos parecem se juntar bem longe. Que conceito geométrico-visual explica esse fenômeno?",
      alternativas: [
        { texto: "Perspectiva Linear convergindo para o Ponto de Fuga sobre a Linha do Horizonte", correta: true },
        { texto: "Perspectiva Isométrica sem profundidade — trilhos ficam paralelos", correta: false },
      ],
      feedback: "Excelente! Na Perspectiva Linear (descoberta na Renascença), TODAS as linhas paralelas que se afastam do observador convergem para o Ponto de Fuga sobre a Linha do Horizonte. Isso cria a ilusão MATEMÁTICA de profundidade em uma superfície plana. Já a Isométrica preserva o paralelismo e não tem PF — por isso nunca dá sensação real de fundo.",
    },
    missaoFamilia:
      "📸 Missão Urbanista em Família: com um adulto, saia pela rua ou pelo quintal e fotografe UMA cena onde linhas paralelas parecem se juntar ao longe (calçada, corredor, rua, cerca, escada). Depois, no papel, desenhem juntos a mesma cena marcando a Linha do Horizonte e o Ponto de Fuga com régua. Registrem no álbum — foto + desenho lado a lado.",
    recompensaTitulo: "🚀 Primeiro Distrito restaurado — Setor Arquitetônico da Cidade Suspensa.",
    recompensaItem: "🔭 Lente de Escala e Régua Teodolito Digital",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Régua Teodolito Digital" },
};
