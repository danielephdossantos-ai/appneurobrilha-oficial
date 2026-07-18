import type { AulaArteV1 } from "../../types";
import mapaPraca from "@/assets/arte-3ano/u4-mapa-praca.jpg";
import mapaFloresta from "@/assets/arte-3ano/u4-mapa-floresta.jpg";
import mapaCidade from "@/assets/arte-3ano/u4-mapa-cidade.jpg";
import mapaGravador from "@/assets/arte-3ano/u4-mapa-gravador.jpg";
import vocabPaisagem from "@/assets/arte-3ano/u4-vocab-paisagem.jpg";
import vocabNatural from "@/assets/arte-3ano/u4-vocab-natural.jpg";
import vocabArtificial from "@/assets/arte-3ano/u4-vocab-artificial.jpg";
import vocabIntensidade from "@/assets/arte-3ano/u4-vocab-intensidade.jpg";
import nosOndas from "@/assets/arte-3ano/u4-nos-ondas.jpg";
import nosLancha from "@/assets/arte-3ano/u4-nos-lancha.jpg";
import nosGaivotas from "@/assets/arte-3ano/u4-nos-gaivotas.jpg";
import quizTrovao from "@/assets/arte-3ano/u4-quiz-trovao.jpg";

/**
 * Arte · 3º Ano · Unidade 4 · Aula 01 — "Paisagens Sonoras"
 * (EF15AR13 / EF15AR14 / EF15AR16)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-sons",
  titulo: "Paisagens Sonoras: A Arte de Escutar o Mundo",
  iconeTrilha: "🎧",
  bncc: ["EF15AR13", "EF15AR14", "EF15AR16"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Fecha os olhos por um instante e escuta. Ouviu? A cidade, a natureza, as pessoas — TUDO faz som. Toca em cada pista pra descobrir como os artistas gravam essas paisagens invisíveis.",
    titulo: "🔍 A Cidade dos Sons Invisíveis",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🌳", rotulo: "Praça pela manhã", descricao: "Pássaros cantando, folhas ao vento, crianças brincando — sons NATURAIS e HUMANOS misturados.", cor: "#16a34a", fotoUrl: mapaPraca },
      { emoji: "🦜", rotulo: "Floresta amazônica", descricao: "Só sons da natureza: chuva, macacos, insetos, rio. É chamada BIOFONIA.", cor: "#15803d", fotoUrl: mapaFloresta },
      { emoji: "🚗", rotulo: "Avenida movimentada", descricao: "Carros, buzinas, motores, ambulâncias — sons ARTIFICIAIS feitos pelas máquinas.", cor: "#4b5563", fotoUrl: mapaCidade },
      { emoji: "🎙️", rotulo: "Artista com gravador", descricao: "Ele CAPTURA os sons do mundo pra transformar em ARTE — uma paisagem sonora.", cor: "#7c3aed", fotoUrl: mapaGravador },
    ],
    falaFinal: "Cada lugar tem SUA paisagem sonora — a assinatura invisível de onde você está.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de gravar sons, treina o ouvido de artista!",
    perguntas: [
      {
        pergunta: "Qual desses sons é NATURAL?",
        fotoUrl: mapaFloresta,
        alternativas: [
          { texto: "O canto de um pássaro na floresta", correta: true },
          { texto: "A buzina de um carro", correta: false },
        ],
        feedbackAcerto: "Isso! Pássaro = natureza. Sons naturais vêm sem esforço humano.",
        feedbackErro: "Buzina foi feita por gente e máquina. Pássaro é NATUREZA pura.",
      },
      {
        pergunta: "Qual é um som ARTIFICIAL?",
        fotoUrl: mapaCidade,
        alternativas: [
          { texto: "O motor de um ônibus", correta: true },
          { texto: "O barulho da chuva caindo", correta: false },
        ],
        feedbackAcerto: "Certo! Motor foi INVENTADO por gente — é artificial.",
        feedbackErro: "Chuva é natural. O motor foi feito por humanos = artificial.",
      },
      {
        pergunta: "Quando um som é MUITO alto, dizemos que tem…",
        fotoUrl: vocabIntensidade,
        alternativas: [
          { texto: "Grande INTENSIDADE (volume alto)", correta: true },
          { texto: "Pouca intensidade", correta: false },
        ],
        feedbackAcerto: "Perfeito! Intensidade = quão alto ou baixo o som é.",
        feedbackErro: "Pouca intensidade seria SUSSURRO. Grito tem MUITA intensidade.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do artista sonoro — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Paisagem Sonora", definicao: "TUDO que você OUVE num lugar — como uma foto feita de sons.", emoji: "🎧", cor: "#7c3aed", fotoUrl: vocabPaisagem },
      { termo: "Som Natural", definicao: "Vem da natureza: vento, água, animais, chuva, trovão.", emoji: "🌿", cor: "#16a34a", fotoUrl: vocabNatural },
      { termo: "Som Artificial", definicao: "Feito por gente ou máquinas: carro, sino, celular, sirene.", emoji: "🚗", cor: "#4b5563", fotoUrl: vocabArtificial },
      { termo: "Intensidade", definicao: "O VOLUME do som: fraco (sussurro) ou forte (grito).", emoji: "🔊", cor: "#dc2626", fotoUrl: vocabIntensidade },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como os artistas sonoros gravam o mundo. Presta atenção no ouvido!",
    paragrafos: [
      "Um artista chamado Murray Schafer inventou a ideia de PAISAGEM SONORA: toda a mistura de sons que existe num lugar num certo momento.",
      "Ele saía com um GRAVADOR pela rua, pela mata, dentro de casa. Capturava tudo: passos, água, sinos, motores. Depois montava obras SONORAS pra ouvirmos como se fosse música.",
      "Sons NATURAIS vêm da natureza — trovão, cachoeira, pássaro. Sons ARTIFICIAIS vêm da vida humana — carro, buzina, TV, celular.",
      "Cada som tem INTENSIDADE (alto ou baixo), DURAÇÃO (curto ou longo) e ALTURA (grave ou agudo). Juntando tudo, o artista faz música com o mundo!",
    ],
    pigmentos: [
      { nome: "Azul da água", hex: "#0284c7", fonte: "Som líquido: rio, chuva, mar", emoji: "💧", fotoUrl: nosOndas },
      { nome: "Verde da mata", hex: "#15803d", fonte: "Som vivo: pássaros, folhas, bichos", emoji: "🌿", fotoUrl: mapaFloresta },
      { nome: "Cinza-metálico", hex: "#6b7280", fonte: "Som mecânico: motor, sirene, martelo", emoji: "⚙️", fotoUrl: mapaCidade },
      { nome: "Amarelo elétrico", hex: "#facc15", fonte: "Som agudo: sino, apito, alarme", emoji: "⚡", fotoUrl: quizTrovao },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "O nome PAISAGEM SONORA foi inventado por quem?",
        fotoUrl: mapaGravador,
        alternativas: [
          { texto: "Um artista/compositor chamado Murray Schafer", correta: true },
          { texto: "Por um pintor famoso", correta: false },
        ],
        feedbackAcerto: "Isso! Schafer foi o pai da ideia — som como paisagem.",
        feedbackErro: "Pintor mexe com cor. Schafer inventou a arte de OUVIR o mundo.",
      },
      {
        pergunta: "Trovão é som NATURAL ou ARTIFICIAL?",
        fotoUrl: quizTrovao,
        alternativas: [
          { texto: "NATURAL — vem do céu, da tempestade", correta: true },
          { texto: "Artificial — feito por máquina", correta: false },
        ],
        feedbackAcerto: "Certo! Trovão é da natureza pura, ninguém liga o interruptor dele.",
        feedbackErro: "Ninguém faz trovão com máquina. É da natureza = NATURAL.",
      },
      {
        pergunta: "Se um som demora bastante tempo pra acabar, ele tem grande…",
        fotoUrl: nosOndas,
        alternativas: [
          { texto: "DURAÇÃO", correta: true },
          { texto: "Cor", correta: false },
        ],
        feedbackAcerto: "Perfeito! Duração = quanto tempo o som fica no ar.",
        feedbackErro: "Som não tem cor. Se dura muito, tem grande DURAÇÃO.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada paisagem sonora tem uma 'cor' emocional. Descobre a cor certa pra cada lugar!",
    animais: [
      {
        nome: "Praia com ondas quebrando", emoji: "🌊", fotoUrl: nosOndas,
        corAlvo: { nome: "Azul-turquesa calmo", hex: "#06b6d4" },
        opcoes: [
          { nome: "Vermelho de alarme", hex: "#dc2626" },
          { nome: "Azul-turquesa calmo", hex: "#06b6d4" },
          { nome: "Preto pesado", hex: "#1f2937" },
        ],
        falaAcerto: "Isso! Ondas passam sensação de CALMA — azul-turquesa suave.",
      },
      {
        nome: "Lancha rápida a motor", emoji: "🚤", fotoUrl: nosLancha,
        corAlvo: { nome: "Laranja vibrante (som forte)", hex: "#ea580c" },
        opcoes: [
          { nome: "Rosa-bebê pastel", hex: "#f9a8d4" },
          { nome: "Laranja vibrante (som forte)", hex: "#ea580c" },
          { nome: "Verde-oliva fosco", hex: "#65a30d" },
        ],
        falaAcerto: "Perfeito! Motor rápido = alta intensidade = laranja quente.",
      },
      {
        nome: "Gaivotas no céu", emoji: "🕊️", fotoUrl: nosGaivotas,
        corAlvo: { nome: "Branco-azulado leve", hex: "#e0f2fe" },
        opcoes: [
          { nome: "Marrom-terra", hex: "#78350f" },
          { nome: "Branco-azulado leve", hex: "#e0f2fe" },
          { nome: "Roxo-escuro", hex: "#581c87" },
        ],
        falaAcerto: "Certo! Gritos agudos e leves — branco quase transparente.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra criar TUA paisagem sonora do bairro — com o celular!",
    passos: [
      { id: "p1", texto: "ESCOLHO um lugar interessante (praça, mercado, quintal)", emoji: "📍", ordem: 1, fotoUrl: mapaPraca },
      { id: "p2", texto: "GRAVO 1 minuto de sons no gravador do celular", emoji: "🎙️", ordem: 2, fotoUrl: mapaGravador },
      { id: "p3", texto: "LISTO os sons: quais são naturais? Quais são artificiais?", emoji: "📝", ordem: 3, fotoUrl: vocabPaisagem },
      { id: "p4", texto: "COMPARTILHO com a turma e adivinhamos o lugar de cada um!", emoji: "🎧", ordem: 4, fotoUrl: mapaCidade },
    ],
    falaAcerto: "Sua paisagem sonora está PRONTA! Cada lugar do bairro tem um som único.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador sonoro. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Manhã na Praça",
    trechos: [
      { texto: "Cheguei na praça e gravei toda a", palavraDestaque: "paisagem", corDestaque: "#7c3aed" },
      { texto: "Ouvi passarinho — som", palavraDestaque: "natural", corDestaque: "#16a34a" },
      { texto: "E ouvi buzina de ônibus — som", palavraDestaque: "artificial", corDestaque: "#4b5563" },
      { texto: "A ambulância passou com muita", palavraDestaque: "intensidade", corDestaque: "#dc2626" },
      { texto: "Sou um Explorador do Tempo — a página 4 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎧 Caça-Sons! Toca em CADA fonte sonora e classifica como natural ou artificial antes do tempo acabar.",
    titulo: "🎧 Caça-Sons do Bairro",
    instrucao: "Toque em cada fonte sonora e identifique!",
    tempoSeg: 40,
    itens: [
      { emoji: "🐦", rotulo: "Passarinho — NATURAL", cor: "#16a34a" },
      { emoji: "🚗", rotulo: "Carro — ARTIFICIAL", cor: "#4b5563" },
      { emoji: "🌧️", rotulo: "Chuva — NATURAL", cor: "#0284c7" },
      { emoji: "🔔", rotulo: "Sino — ARTIFICIAL", cor: "#eab308" },
      { emoji: "🐕", rotulo: "Cachorro — NATURAL", cor: "#78350f" },
      { emoji: "📱", rotulo: "Celular — ARTIFICIAL", cor: "#7c3aed" },
    ],
    falaFinal: "Você é um verdadeiro DJ de paisagens sonoras — todos os sons classificados!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição Sonora",
    itens: [
      { emoji: "🎧", rotulo: "Paisagem Sonora", descricao: "Tudo que se ouve num lugar.", cor: "#7c3aed", fotoUrl: vocabPaisagem },
      { emoji: "🌿", rotulo: "Som Natural", descricao: "Da natureza: chuva, pássaro, trovão.", cor: "#16a34a", fotoUrl: vocabNatural },
      { emoji: "🚗", rotulo: "Som Artificial", descricao: "De gente ou máquina: carro, sino, TV.", cor: "#4b5563", fotoUrl: vocabArtificial },
      { emoji: "🔊", rotulo: "Intensidade", descricao: "Volume: fraco ou forte.", cor: "#dc2626", fotoUrl: vocabIntensidade },
      { emoji: "🎙️", rotulo: "Gravador", descricao: "Ferramenta pra capturar sons do mundo.", cor: "#78350f", fotoUrl: mapaGravador },
      { emoji: "🌳", rotulo: "Praça", descricao: "Mistura sons naturais e artificiais.", cor: "#16a34a", fotoUrl: mapaPraca },
      { emoji: "⚡", rotulo: "Trovão", descricao: "Som natural muito intenso.", cor: "#facc15", fotoUrl: quizTrovao },
    ],
    falaFinal: "Página 4 do Atlas dos Exploradores DESBLOQUEADA — O Compositor das Ruas!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da expedição — mostra que tens ouvido afiado!",
    quiz: {
      pergunta: "O que é uma PAISAGEM SONORA?",
      alternativas: [
        { texto: "Todo o conjunto de sons que se ouve num lugar num momento", correta: true },
        { texto: "Uma pintura de um lugar", correta: false },
      ],
      feedback: "Excelente! Paisagem sonora é como uma FOTO feita de sons — capturada com o ouvido em vez do olho. Foi um artista chamado Murray Schafer que inventou a ideia.",
    },
    missaoFamilia:
      "🎧 Detetives do Som: em família, escolham 1 lugar (cozinha, quintal, praça) e gravem 30 segundos com o celular. Depois ouçam JUNTOS e listem cada som: natural ou artificial? Fraco ou forte?",
    recompensaTitulo: "📜 Página 4 restaurada — O Compositor das Ruas.",
    recompensaItem: "🎙️ Gravador Portátil do Explorador",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Gravador Portátil" },
};
