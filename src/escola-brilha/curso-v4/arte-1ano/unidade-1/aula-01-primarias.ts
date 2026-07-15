import type { AulaGeoV1 } from "../../types";

/**
 * Arte · 1º Ano · U1 · A01 — Cores Primárias (EF15AR02/AR04)
 * cena01 sem lupa (votoExplorador).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-primarias",
  titulo: "As Cores Estão em Toda Parte",
  iconeTrilha: "🎨",
  bncc: ["EF15AR02", "EF15AR04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "votoExplorador",
    aurora: "Brilha acordou e a caixa mágica ficou SEM COR! Vamos descobrir as cores?",
    pergunta: "De que cor é uma MAÇÃ madura?",
    opcoes: [
      { id: "vermelho", titulo: "Vermelho", subtitulo: "cor do fogo", emoji: "🍎", cor: "from-rose-400 to-red-600" },
      { id: "amarelo", titulo: "Amarelo", subtitulo: "cor do sol", emoji: "🌟", cor: "from-yellow-300 to-amber-500" },
      { id: "azul", titulo: "Azul", subtitulo: "cor do céu", emoji: "🫐", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "vermelho",
    feedbackAcerto: "Isso! Maçã madura é VERMELHA!",
    feedbackErro: "Olha bem — a maçã madura é VERMELHA.",
    falaFinal: "Cada coisa no mundo tem uma cor. Vamos conhecer as principais!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "E o céu, de que cor é?",
    pergunta: "Qual cor é o céu num dia limpo?",
    opcoes: [
      { id: "azul", titulo: "Azul", subtitulo: "do mar e do céu", emoji: "☁️", cor: "from-sky-400 to-blue-600" },
      { id: "vermelho", titulo: "Vermelho", subtitulo: "quente", emoji: "🔥", cor: "from-rose-400 to-red-600" },
      { id: "amarelo", titulo: "Amarelo", subtitulo: "brilhante", emoji: "🌻", cor: "from-yellow-300 to-amber-500" },
    ],
    respostaCerta: "azul",
    feedbackAcerto: "Isso! Céu limpo é AZUL!",
    feedbackErro: "Céu limpo é AZUL, como o mar.",
    falaFinal: "Vermelho, amarelo e azul são cores PRIMÁRIAS.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 3 cores primárias — todas as outras nascem delas!",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "v", capa: "VERMELHO", emoji: "🍎", cor: "from-rose-400 to-red-600", conteudo: "Cor do fogo, do coração, da maçã.", exemplo: "Ex.: morango, rosa, coração." },
      { id: "a", capa: "AMARELO", emoji: "🍌", cor: "from-yellow-300 to-amber-500", conteudo: "Cor do sol, deixa a gente feliz.", exemplo: "Ex.: banana, girassol, queijo." },
      { id: "z", capa: "AZUL", emoji: "🫐", cor: "from-sky-400 to-blue-600", conteudo: "Cor do céu e do mar, dá calma.", exemplo: "Ex.: mirtilo, baleia, oceano." },
    ],
    falaFinal: "3 cores mágicas que abrem TODAS as outras!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada objeto do estúdio.",
    instrucao: "Toque nos objetos",
    layout: "personagem",
    mapaUrl: "",
    pontos: [
      { id: "morango", x: 20, y: 30, emoji: "🍓", cor: "from-rose-400 to-red-600", titulo: "Morango", texto: "Morango é VERMELHO — cor primária." },
      { id: "girassol", x: 50, y: 30, emoji: "🌻", cor: "from-yellow-300 to-amber-500", titulo: "Girassol", texto: "Girassol é AMARELO — cor primária." },
      { id: "mar", x: 80, y: 30, emoji: "🌊", cor: "from-sky-400 to-blue-600", titulo: "Mar", texto: "Mar é AZUL — cor primária." },
      { id: "carro", x: 30, y: 70, emoji: "🚗", cor: "from-rose-400 to-red-600", titulo: "Carro", texto: "Este carro é VERMELHO." },
      { id: "estrela", x: 70, y: 70, emoji: "⭐", cor: "from-yellow-300 to-amber-500", titulo: "Estrela", texto: "Estrela cintila AMARELA." },
    ],
    falaFinal: "Vermelho, amarelo e azul — em todo lugar!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque na cor certa",
    perguntas: [
      { id: "q1", pergunta: "Banana é:", cards: [{ id: "a", emoji: "🟡", titulo: "Amarela", cor: "from-yellow-300 to-amber-500" }, { id: "b", emoji: "🔴", titulo: "Vermelha", cor: "from-rose-400 to-red-600" }, { id: "c", emoji: "🔵", titulo: "Azul", cor: "from-sky-400 to-blue-600" }], correta: "a", feedbackAcerto: "Isso! Banana é AMARELA.", feedbackErro: "Banana é AMARELA." },
      { id: "q2", pergunta: "Mirtilo é:", cards: [{ id: "a", emoji: "🔵", titulo: "Azul", cor: "from-sky-400 to-blue-600" }, { id: "b", emoji: "🟡", titulo: "Amarelo", cor: "from-yellow-300 to-amber-500" }, { id: "c", emoji: "🔴", titulo: "Vermelho", cor: "from-rose-400 to-red-600" }], correta: "a", feedbackAcerto: "Mirtilo é AZUL!", feedbackErro: "Mirtilo é AZUL." },
      { id: "q3", pergunta: "Coração é:", cards: [{ id: "a", emoji: "🔴", titulo: "Vermelho", cor: "from-rose-400 to-red-600" }, { id: "b", emoji: "🟢", titulo: "Verde", cor: "from-emerald-400 to-green-600" }, { id: "c", emoji: "🔵", titulo: "Azul", cor: "from-sky-400 to-blue-600" }], correta: "a", feedbackAcerto: "Coração é VERMELHO ❤️", feedbackErro: "Coração é VERMELHO." },
    ],
    falaFinal: "Você já reconhece as 3 primárias!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Cores QUENTES e cores FRIAS.",
    instrucao: "Toque nos interruptores",
    mapaUrl: "",
    camadas: [
      { id: "quente", rotulo: "Quentes", emoji: "🔥", cor: "from-rose-400 to-orange-500", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Vermelho e amarelo lembram sol e fogo." },
      { id: "fria", rotulo: "Frias", emoji: "❄️", cor: "from-sky-400 to-blue-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Azul lembra mar e gelo, dá calma." },
    ],
    falaFinal: "Cor também é sensação!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as cores do ARCO-ÍRIS (só as primárias).",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordem no arco-íris:",
    paradas: [
      { id: "v", emoji: "🔴", rotulo: "1. Vermelho", descricao: "Primeira cor do arco-íris." },
      { id: "a", emoji: "🟡", rotulo: "2. Amarelo", descricao: "Cor do meio, brilhante." },
      { id: "z", emoji: "🔵", rotulo: "3. Azul", descricao: "Última das primárias." },
    ],
    ordemCerta: ["v", "a", "z"],
    feedbackAcerto: "Perfeito! Vermelho → Amarelo → Azul.",
    feedbackErro: "Pense no arco-íris: começa quente, termina frio.",
    falaFinal: "Ordem das primárias no arco-íris!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Seu Diário do Artista.",
    tituloLivro: "🎨 Diário do Artista",
    subtitulo: "Página 1 — Cores Primárias",
    paragrafos: [
      { id: "p1", texto: "Cores PRIMÁRIAS são três: VERMELHO, AMARELO e AZUL. Elas não nascem de mistura — todas as outras nascem delas.", chaves: ["primárias", "vermelho", "azul"] },
      { id: "p2", texto: "O VERMELHO chama atenção. O AMARELO deixa feliz. O AZUL acalma. Cada cor conta uma história diferente.", chaves: ["vermelho", "amarelo", "azul"] },
    ],
    falaFinal: "Você já é um pequeno artista!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada mostra um objeto — qual cor?",
    instrucao: "⏱️ Escolha a cor",
    duracaoSegundos: 15,
    pecas: [
      { id: "v", emoji: "🔴", rotulo: "Vermelho" },
      { id: "a", emoji: "🟡", rotulo: "Amarelo" },
      { id: "z", emoji: "🔵", rotulo: "Azul" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Fruta", emoji: "🍓", cor: "from-rose-400 to-red-600" }, municipioB: { nome: "Doce", emoji: "🍒", cor: "from-rose-400 to-red-600" }, contexto: "Morango maduro é dessa cor.", pecaCertaId: "v", feedbackAcerto: "VERMELHO!", feedbackErro: "Morango é VERMELHO." },
      { id: "r2", municipioA: { nome: "Fruta", emoji: "🍌", cor: "from-yellow-300 to-amber-500" }, municipioB: { nome: "Céu", emoji: "🌟", cor: "from-yellow-300 to-amber-500" }, contexto: "Banana madura é dessa cor.", pecaCertaId: "a", feedbackAcerto: "AMARELO!", feedbackErro: "Banana é AMARELA." },
      { id: "r3", municipioA: { nome: "Mar", emoji: "🌊", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Céu", emoji: "☁️", cor: "from-sky-400 to-blue-600" }, contexto: "Céu limpo tem essa cor.", pecaCertaId: "z", feedbackAcerto: "AZUL!", feedbackErro: "Céu é AZUL." },
    ],
    falaFinal: "Já reconhece qualquer primária!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "No arco-íris: metade quentes, metade frias.",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      { id: "quentes", rotulo: "Quentes", emoji: "🔥", percentual: 50, cor: "#ef4444", descricao: "Vermelho e amarelo aquecem o olhar.", exemplos: ["Vermelho", "Amarelo"] },
      { id: "frias", rotulo: "Frias", emoji: "❄️", percentual: 50, cor: "#3b82f6", descricao: "Azul refresca e acalma.", exemplos: ["Azul"] },
    ],
    falaFinal: "Cor é sentimento e é linguagem!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra ganhar seu selo.",
    instrucao: "3 perguntas",
    perguntas: [
      { id: "q1", pergunta: "Cor primária:", opcoes: [{ id: "a", texto: "Vermelho", correta: true }, { id: "b", texto: "Verde" }], feedbackAcerto: "Isso!", feedbackErro: "É VERMELHO — verde nasce de mistura." },
      { id: "q2", pergunta: "Sol é:", opcoes: [{ id: "a", texto: "Amarelo", correta: true }, { id: "b", texto: "Azul" }], feedbackAcerto: "Certo!", feedbackErro: "Sol é AMARELO." },
      { id: "q3", pergunta: "Cor fria:", opcoes: [{ id: "a", texto: "Azul", correta: true }, { id: "b", texto: "Vermelho" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Azul é fria." },
    ],
    selo: { nome: "Caçador de Cores", subtitulo: "1ª medalha do Estúdio Brilha!", emoji: "🎨", cor: "from-purple-400 via-pink-500 to-rose-500" },
    falaFinal: "Você devolveu as cores à caixa mágica!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Caçador de Cores" },
};
