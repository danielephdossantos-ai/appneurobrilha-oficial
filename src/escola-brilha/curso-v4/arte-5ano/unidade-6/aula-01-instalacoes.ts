import type { AulaArteV1 } from "../../types";
import __asset_mapaOiticica from "@/assets/arte-5ano/u6-mapa-oiticica.jpg.asset.json";
const mapaOiticica = __asset_mapaOiticica.url;
import __asset_mapaKusama from "@/assets/arte-5ano/u6-mapa-kusama.jpg.asset.json";
const mapaKusama = __asset_mapaKusama.url;
import __asset_mapaPedestal from "@/assets/arte-5ano/u6-mapa-pedestal.jpg.asset.json";
const mapaPedestal = __asset_mapaPedestal.url;
import __asset_mapaBarbante from "@/assets/arte-5ano/u6-mapa-barbante.jpg.asset.json";
const mapaBarbante = __asset_mapaBarbante.url;
import __asset_vocabInstalacao from "@/assets/arte-5ano/u6-vocab-instalacao.jpg.asset.json";
const vocabInstalacao = __asset_vocabInstalacao.url;
import __asset_vocabEspaco3d from "@/assets/arte-5ano/u6-vocab-espaco3d.jpg.asset.json";
const vocabEspaco3d = __asset_vocabEspaco3d.url;
import __asset_vocabImersao from "@/assets/arte-5ano/u6-vocab-imersao.jpg.asset.json";
const vocabImersao = __asset_vocabImersao.url;
import __asset_vocabSitespecific from "@/assets/arte-5ano/u6-vocab-sitespecific.jpg.asset.json";
const vocabSitespecific = __asset_vocabSitespecific.url;
import __asset_matBarbante from "@/assets/arte-5ano/u6-mat-barbante.jpg.asset.json";
const matBarbante = __asset_matBarbante.url;
import __asset_matOrigami from "@/assets/arte-5ano/u6-mat-origami.jpg.asset.json";
const matOrigami = __asset_matOrigami.url;
import matLanterna from "@/assets/arte-5ano/u6-mat-lanterna.jpg";
import matFitaadesiva from "@/assets/arte-5ano/u6-mat-fitaadesiva.jpg";
import __asset_qPenetravel from "@/assets/arte-5ano/u6-q-penetravel.jpg.asset.json";
const qPenetravel = __asset_qPenetravel.url;
import __asset_qEspelhos from "@/assets/arte-5ano/u6-q-espelhos.jpg.asset.json";
const qEspelhos = __asset_qEspelhos.url;
import __asset_passo1 from "@/assets/arte-5ano/u6-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-5ano/u6-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-5ano/u6-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-5ano/u6-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import passo5 from "@/assets/arte-5ano/u6-passo5.jpg";

/**
 * Arte · 5º Ano · Unidade 6 · Aula 01 — "A Escultura no Espaço e as Instalações Tridimensionais"
 * Metanarrativa: 🎭 O Labirinto dos Vetores Espaciais
 * Fontes: Hélio Oiticica (Penetráveis), Yayoi Kusama (Infinity Mirror Rooms)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-instalacoes",
  titulo: "A Escultura no Espaço e as Instalações Tridimensionais",
  iconeTrilha: "🎭",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto Cênico! Brilha entrou numa sala cheia de fios vermelhos cruzando o ar e espelhos que se multiplicam pro infinito. Isso não é escultura comum — é INSTALAÇÃO, uma obra que a gente ATRAVESSA com o corpo. Toca em cada pista.",
    titulo: "🎭 O Espaço Que Vira Obra",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🌀", rotulo: "Penetrável de Hélio Oiticica", descricao: "O artista brasileiro criou labirintos coloridos que o visitante ATRAVESSA com o corpo inteiro, sentindo texturas e cheiros pelo caminho.", cor: "#dc2626", fotoUrl: mapaOiticica },
      { emoji: "✨", rotulo: "Sala de Espelhos de Yayoi Kusama", descricao: "Espelhos frente a frente e luzinhas piscando se multiplicam ao infinito — o visitante entra e vira parte de um universo sem fim.", cor: "#f59e0b", fotoUrl: mapaKusama },
      { emoji: "🗿", rotulo: "Escultura em pedestal", descricao: "A escultura clássica fica sobre uma base. A gente OLHA de fora, roda ao redor, mas nunca entra dentro dela.", cor: "#111827", fotoUrl: mapaPedestal },
      { emoji: "🧵", rotulo: "Instalação de barbante habitável", descricao: "Fios de lã vermelha cruzando um vão criam uma teia tridimensional — o espaço vazio embaixo da mesa vira obra de arte.", cor: "#dc2626", fotoUrl: mapaBarbante },
    ],
    falaFinal: "Você vai construir espaços que se HABITAM, igual os grandes instaladores contemporâneos!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteto cênico!",
    perguntas: [
      {
        pergunta: "Por que os Penetráveis de Hélio Oiticica NÃO são escultura tradicional?",
        fotoUrl: qPenetravel,
        alternativas: [
          { texto: "Porque o público ENTRA e caminha dentro da obra, sentindo com o corpo todo", correta: true },
          { texto: "Porque são feitos só de metal reluzente", correta: false },
        ],
        feedbackAcerto: "Perfeito! É uma INSTALAÇÃO — o corpo do visitante faz parte da obra.",
        feedbackErro: "O material não é o segredo. O que muda é que o visitante ENTRA na obra, não só olha de fora.",
      },
      {
        pergunta: "Na Sala de Espelhos Infinitos de Yayoi Kusama, o que cria a sensação de infinito?",
        fotoUrl: qEspelhos,
        alternativas: [
          { texto: "Espelhos frente a frente com luzinhas piscando refletidas sem fim", correta: true },
          { texto: "Uma tinta fosforescente que brilha sozinha", correta: false },
        ],
        feedbackAcerto: "Isso! O reflexo entre espelhos multiplica as luzes até parecer o universo inteiro.",
        feedbackErro: "Não é a tinta — são os ESPELHOS frente a frente que multiplicam a luz ao infinito.",
      },
      {
        pergunta: "Uma escultura tradicional em pedestal serve pra…",
        fotoUrl: mapaPedestal,
        alternativas: [
          { texto: "Ser observada de fora, girando ao redor, sem entrar nela", correta: true },
          { texto: "Ser habitada e atravessada pelo público", correta: false },
        ],
        feedbackAcerto: "Correto! Escultura tradicional é pra OLHAR; instalação é pra HABITAR.",
        feedbackErro: "Isso é o que a INSTALAÇÃO faz. A escultura em pedestal fica de fora, só pra observação.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do espaço tridimensional. Toca em cada card!",
    cards: [
      { termo: "Instalação Artística", definicao: "Obra pensada pra ocupar um espaço inteiro, usando objetos, luz, som e até cheiro — o público circula por dentro dela.", emoji: "🎭", cor: "#dc2626", fotoUrl: vocabInstalacao },
      { termo: "Espaço Tridimensional", definicao: "As três dimensões — altura, largura e profundidade — que a instalação usa. Diferente do quadro, aqui a gente entra E anda ao redor.", emoji: "📦", cor: "#111827", fotoUrl: vocabEspaco3d },
      { termo: "Imersão", definicao: "Sensação de estar DENTRO da obra, envolvido por ela com todos os sentidos, e não apenas olhando de longe.", emoji: "🌌", cor: "#f59e0b", fotoUrl: vocabImersao },
      { termo: "Site-specific (Obra pro lugar)", definicao: "Instalação criada especialmente pro espaço onde é montada — se mudar de lugar, perde parte do sentido.", emoji: "📍", cor: "#dc2626", fotoUrl: vocabSitespecific },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a escultura saiu do pedestal e virou espaço pra habitar.",
    paragrafos: [
      "Durante séculos, a ESCULTURA foi um objeto sobre um PEDESTAL. A gente olhava de fora, rodeava com os olhos, mas nunca entrava dentro dela.",
      "No século XX, artistas passaram a pensar o ESPAÇO inteiro como obra. Nasceu assim a INSTALAÇÃO ARTÍSTICA: usa paredes, chão, teto, luz, som e até cheiro pra criar uma experiência completa.",
      "O brasileiro HÉLIO OITICICA criou os PENETRÁVEIS: labirintos coloridos que o visitante atravessa com o corpo inteiro, pisando em areia, sentindo texturas e cheiros pelo caminho.",
      "A artista japonesa YAYOI KUSAMA constrói INFINITY MIRROR ROOMS: salas de espelhos com luzinhas piscando que se multiplicam ao infinito, dando a sensação de estar dentro do universo.",
      "A diferença central: a escultura tradicional é pra OLHAR de fora; a instalação é pra HABITAR — entrar, se mover e sentir com o corpo todo o ESPAÇO TRIDIMENSIONAL.",
    ],
    pigmentos: [
      { nome: "Barbante ou lã vermelha", hex: "#dc2626", fonte: "Tece a teia tridimensional no vão", emoji: "🧵", fotoUrl: matBarbante },
      { nome: "Origamis coloridos", hex: "#f59e0b", fonte: "Pendurados pra dar volume ao espaço", emoji: "🎏", fotoUrl: matOrigami },
      { nome: "Lanterna", hex: "#facc15", fonte: "Projeta sombras dentro da instalação", emoji: "🔦", fotoUrl: matLanterna },
      { nome: "Fita adesiva", hex: "#111827", fonte: "Fixa os fios e origamis no lugar certo", emoji: "🎗️", fotoUrl: matFitaadesiva },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do arquiteto cênico!",
    perguntas: [
      {
        pergunta: "O que faz um Penetrável de Oiticica ser uma INSTALAÇÃO e não uma escultura comum?",
        fotoUrl: qPenetravel,
        alternativas: [
          { texto: "O público entra e caminha por dentro, sentindo com o corpo todo", correta: true },
          { texto: "Ele é pintado com cores mais vivas que o normal", correta: false },
        ],
        feedbackAcerto: "Perfeito! A instalação vira experiência vivida, não só imagem observada.",
        feedbackErro: "Cor não é o segredo. O que importa é o corpo do visitante ENTRAR na obra.",
      },
      {
        pergunta: "Na Sala de Espelhos de Kusama, a repetição infinita das luzes é criada por…",
        fotoUrl: qEspelhos,
        alternativas: [
          { texto: "Espelhos posicionados frente a frente", correta: true },
          { texto: "Uma projeção de vídeo na parede", correta: false },
        ],
        feedbackAcerto: "Isso! Os espelhos refletem um ao outro sem parar, multiplicando a luz.",
        feedbackErro: "Não é vídeo — são os ESPELHOS frente a frente que criam o efeito infinito.",
      },
      {
        pergunta: "Uma instalação 'site-specific' significa que ela é…",
        fotoUrl: vocabSitespecific,
        alternativas: [
          { texto: "Feita especialmente pro lugar exato onde está montada", correta: true },
          { texto: "Fácil de embalar e vender em qualquer loja", correta: false },
        ],
        feedbackAcerto: "Fantástico! Mudar de lugar pode fazer a obra perder o sentido original.",
        feedbackErro: "Não é sobre venda — 'site-specific' é sobre pertencer a UM lugar específico.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada exemplo mostra um jeito de ocupar o espaço. Combina certinho!",
    animais: [
      {
        nome: "Penetrável de Hélio Oiticica", emoji: "🌀", fotoUrl: mapaOiticica,
        corAlvo: { nome: "Instalação Habitável", hex: "#dc2626" },
        opcoes: [
          { nome: "Instalação Habitável", hex: "#dc2626" },
          { nome: "Escultura Tradicional", hex: "#111827" },
          { nome: "Pintura de parede", hex: "#0ea5e9" },
        ],
        falaAcerto: "Isso! Labirinto colorido que se atravessa com o corpo inteiro.",
      },
      {
        nome: "Sala de Espelhos de Kusama", emoji: "✨", fotoUrl: mapaKusama,
        corAlvo: { nome: "Imersão Infinita", hex: "#f59e0b" },
        opcoes: [
          { nome: "Imersão Infinita", hex: "#f59e0b" },
          { nome: "Escultura em bronze", hex: "#78350f" },
          { nome: "Mural em tinta fosca", hex: "#64748b" },
        ],
        falaAcerto: "Perfeito! Espelhos e luzes multiplicam o espaço ao infinito.",
      },
      {
        nome: "Escultura clássica em pedestal", emoji: "🗿", fotoUrl: mapaPedestal,
        corAlvo: { nome: "Escultura Tradicional (Observação)", hex: "#111827" },
        opcoes: [
          { nome: "Escultura Tradicional (Observação)", hex: "#111827" },
          { nome: "Instalação Habitável", hex: "#dc2626" },
          { nome: "Anamorfose óptica", hex: "#7c2d12" },
        ],
        falaAcerto: "Correto! Fica sobre a base, só pra ser vista de fora.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir SUA própria instalação tridimensional.",
    passos: [
      { id: "p1", texto: "ESCOLHO um vão — embaixo da mesa — e amarro pontas de barbante vermelho nas quatro pernas", emoji: "🧵", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "CRUZO os fios de um lado a outro, formando uma teia tridimensional dentro do vão", emoji: "🕸️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "PENDURO origamis coloridos nos fios, fixando com fita adesiva", emoji: "🎏", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "CONVIDO a família a se abaixar e ENTRAR no vão pra sentir a instalação por dentro", emoji: "👨‍👩‍👧", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "APAGO a luz e uso a lanterna pra projetar sombras dos origamis nas paredes", emoji: "🔦", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua instalação funciona igualzinho aos espaços imersivos dos grandes artistas contemporâneos!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arquiteto cênico. Toca nas palavras coloridas.",
    titulo: "Diário do Arquiteto Cênico",
    trechos: [
      { texto: "Não faço só objetos — crio", palavraDestaque: "instalações artísticas", corDestaque: "#dc2626" },
      { texto: "que ocupam todo o", palavraDestaque: "espaço tridimensional", corDestaque: "#111827" },
      { texto: "pra o visitante viver a", palavraDestaque: "imersão", corDestaque: "#f59e0b" },
      { texto: "Como Hélio Oiticica com seus", palavraDestaque: "Penetráveis", corDestaque: "#dc2626" },
      { texto: "Eu transformo o vazio em experiência — igual os grandes instaladores!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🌌 Simulador de Espaços Infinitos! Toca em CADA elemento de espelhos e luzes antes do tempo acabar.",
    titulo: "🌌 O Simulador de Espaços Infinitos",
    instrucao: "Toque em todos os elementos antes do tempo acabar!",
    tempoSeg: 30,
    itens: [
      { emoji: "🪞", rotulo: "Espelho frontal cromado", cor: "#111827" },
      { emoji: "🪟", rotulo: "Espelho de fundo refletindo", cor: "#64748b" },
      { emoji: "💡", rotulo: "Luzinha piscante suspensa", cor: "#f59e0b" },
      { emoji: "🧵", rotulo: "Fio vermelho de Kusama", cor: "#dc2626" },
      { emoji: "🚶", rotulo: "Visitante entrando na sala", cor: "#facc15" },
      { emoji: "🎏", rotulo: "Origami pendurado no vão", cor: "#0ea5e9" },
    ],
    falaFinal: "Espaço infinito ativado! Você dominou a imersão dos Infinity Mirror Rooms.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da instalação. Toca em cada verbete!",
    titulo: "📓 Caderno da Instalação",
    itens: [
      { emoji: "🌀", rotulo: "Penetrável de Hélio Oiticica", descricao: "Labirinto colorido que se atravessa com o corpo inteiro.", cor: "#dc2626", fotoUrl: mapaOiticica },
      { emoji: "✨", rotulo: "Sala de Espelhos de Kusama", descricao: "Espelhos e luzes se multiplicam ao infinito.", cor: "#f59e0b", fotoUrl: mapaKusama },
      { emoji: "🗿", rotulo: "Escultura em pedestal", descricao: "Fica sobre a base, observada de fora, sem entrar nela.", cor: "#111827", fotoUrl: mapaPedestal },
      { emoji: "🎭", rotulo: "Instalação Artística", descricao: "Obra que ocupa o espaço inteiro e o público habita.", cor: "#dc2626", fotoUrl: vocabInstalacao },
      { emoji: "🌌", rotulo: "Imersão", descricao: "Sensação de estar dentro da obra, envolvido com todos os sentidos.", cor: "#f59e0b", fotoUrl: vocabImersao },
      { emoji: "🧵", rotulo: "Instalação de Barbante", descricao: "Fios cruzando um vão criam uma teia tridimensional habitável.", cor: "#dc2626", fotoUrl: mapaBarbante },
    ],
    falaFinal: "Nova página do Labirinto dos Vetores Espaciais DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteto cênico!",
    quiz: {
      pergunta: "Qual é a principal diferença entre uma INSTALAÇÃO artística e uma ESCULTURA tradicional?",
      alternativas: [
        { texto: "A instalação ocupa todo o espaço e o público entra e interage; a escultura fica num pedestal só pra ser observada de fora", correta: true },
        { texto: "A escultura é sempre colorida e a instalação é sempre em preto e branco", correta: false },
      ],
      feedback: "Perfeito! Instalações como os Penetráveis de Oiticica e as Salas de Espelhos de Kusama transformam o espaço em experiência vivida — bem diferente da escultura que fica parada no pedestal, esperando ser vista de longe!",
    },
    missaoFamilia:
      "🔦 A Instalação das Sombras Gigantes: À noite, com os pais, monte objetos (bonecos, mãos, origamis) na frente de uma lanterna acesa apontada pra parede. Componham uma cena com sombras GIGANTES se sobrepondo. Registrem uma foto da instalação de sombras no álbum!",
    recompensaTitulo: "📜 Nova página restaurada — O Labirinto dos Vetores Espaciais.",
    recompensaItem: "📐 Prumo de Latão de Arquiteto Cênico",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Prumo de Latão" },
};
