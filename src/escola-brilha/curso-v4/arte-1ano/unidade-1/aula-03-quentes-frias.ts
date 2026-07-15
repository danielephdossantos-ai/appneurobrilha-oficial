import type { AulaGeoV1 } from "../../types";

/**
 * Arte · 1º Ano · U1 · A03 — Cores Quentes e Frias
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-quentes-frias",
  titulo: "Cores Que Esquentam, Cores Que Esfriam",
  iconeTrilha: "🔥",
  bncc: ["EF15AR02", "EF15AR04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "votoExplorador",
    aurora: "Brilha viu duas paisagens. Qual dá sensação de CALOR?",
    pergunta: "Qual paisagem é QUENTE?",
    opcoes: [
      { id: "deserto", titulo: "Deserto", subtitulo: "areia e sol", emoji: "🏜️", cor: "from-orange-400 to-red-600" },
      { id: "polo", titulo: "Polo", subtitulo: "gelo e neve", emoji: "🧊", cor: "from-sky-400 to-blue-600" },
      { id: "mar", titulo: "Mar fundo", subtitulo: "azul escuro", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "deserto",
    feedbackAcerto: "Isso! Deserto é QUENTE — cheio de laranja e amarelo.",
    feedbackErro: "Deserto é QUENTE — vermelho, laranja e amarelo dão calor.",
    falaFinal: "As cores contam a temperatura!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "E o gelo, quais cores tem?",
    pergunta: "Cores do gelo:",
    opcoes: [
      { id: "frias", titulo: "Azul e branco", subtitulo: "frias", emoji: "❄️", cor: "from-sky-400 to-blue-600" },
      { id: "quentes", titulo: "Vermelho e amarelo", subtitulo: "quentes", emoji: "🔥", cor: "from-rose-400 to-orange-500" },
      { id: "mist", titulo: "Roxo e verde", subtitulo: "misturadas", emoji: "🟣", cor: "from-purple-400 to-emerald-500" },
    ],
    respostaCerta: "frias",
    feedbackAcerto: "Gelo tem azul e branco — cores FRIAS.",
    feedbackErro: "Gelo é AZUL e branco — cores FRIAS.",
    falaFinal: "Frias acalmam, quentes agitam!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Duas famílias de temperatura.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "quentes", capa: "QUENTES", emoji: "🔥", cor: "from-rose-400 to-orange-500", conteudo: "Vermelho, laranja, amarelo. Lembram sol e fogo.", exemplo: "Ex.: sol, fogueira, abóbora, pimenta." },
      { id: "frias", capa: "FRIAS", emoji: "❄️", cor: "from-sky-400 to-blue-600", conteudo: "Azul, verde, roxo. Lembram água e floresta.", exemplo: "Ex.: mar, floresta, gelo, uva." },
    ],
    falaFinal: "Cada cor tem sua temperatura!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque nos elementos da paisagem.",
    instrucao: "Toque nos elementos",
    layout: "personagem",
    mapaUrl: "",
    pontos: [
      { id: "sol", x: 20, y: 25, emoji: "☀️", cor: "from-yellow-300 to-orange-500", titulo: "Sol", texto: "Sol é AMARELO/LARANJA — cor QUENTE." },
      { id: "fogo", x: 50, y: 25, emoji: "🔥", cor: "from-rose-400 to-orange-500", titulo: "Fogo", texto: "Fogo é VERMELHO — cor QUENTE." },
      { id: "abobora", x: 80, y: 25, emoji: "🎃", cor: "from-orange-400 to-amber-600", titulo: "Abóbora", texto: "Abóbora é LARANJA — QUENTE." },
      { id: "mar", x: 25, y: 75, emoji: "🌊", cor: "from-sky-400 to-blue-600", titulo: "Mar", texto: "Mar é AZUL — cor FRIA." },
      { id: "floresta", x: 55, y: 75, emoji: "🌲", cor: "from-emerald-400 to-green-700", titulo: "Floresta", texto: "Floresta é VERDE — cor FRIA." },
      { id: "uva", x: 80, y: 75, emoji: "🍇", cor: "from-purple-400 to-violet-600", titulo: "Uva", texto: "Uva é ROXA — cor FRIA." },
    ],
    falaFinal: "Metade quente, metade fria!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Quente ou fria?",
    instrucao: "Toque na resposta",
    perguntas: [
      { id: "q1", pergunta: "Vermelho é:", cards: [{ id: "a", emoji: "🔥", titulo: "Quente", cor: "from-rose-400 to-orange-500" }, { id: "b", emoji: "❄️", titulo: "Fria", cor: "from-sky-400 to-blue-600" }], correta: "a", feedbackAcerto: "QUENTE!", feedbackErro: "Vermelho é QUENTE." },
      { id: "q2", pergunta: "Azul é:", cards: [{ id: "a", emoji: "❄️", titulo: "Fria", cor: "from-sky-400 to-blue-600" }, { id: "b", emoji: "🔥", titulo: "Quente", cor: "from-rose-400 to-orange-500" }], correta: "a", feedbackAcerto: "FRIA!", feedbackErro: "Azul é FRIA." },
      { id: "q3", pergunta: "Verde é:", cards: [{ id: "a", emoji: "❄️", titulo: "Fria", cor: "from-sky-400 to-blue-600" }, { id: "b", emoji: "🔥", titulo: "Quente", cor: "from-rose-400 to-orange-500" }], correta: "a", feedbackAcerto: "FRIA!", feedbackErro: "Verde é FRIA — floresta, folha." },
    ],
    falaFinal: "Já sente a temperatura das cores!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "PAISAGEM QUENTE x PAISAGEM FRIA.",
    instrucao: "Toque nos interruptores",
    mapaUrl: "",
    camadas: [
      { id: "quente", rotulo: "Deserto", emoji: "🏜️", cor: "from-orange-400 to-red-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Sol forte, areia, pouca água — tudo em cores quentes." },
      { id: "fria", rotulo: "Polo Norte", emoji: "🧊", cor: "from-sky-300 to-blue-700", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Gelo, neve, mar profundo — tudo em cores frias." },
    ],
    falaFinal: "Paisagem quente sente calor, fria sente frescor!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Do mais QUENTE pro mais FRIO.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais quente pro mais frio:",
    paradas: [
      { id: "1", emoji: "🔴", rotulo: "1. Vermelho", descricao: "A mais quente de todas." },
      { id: "2", emoji: "🟠", rotulo: "2. Laranja", descricao: "Quente também." },
      { id: "3", emoji: "🟡", rotulo: "3. Amarelo", descricao: "Quente mas mais clara." },
      { id: "4", emoji: "🟢", rotulo: "4. Verde", descricao: "Fria e calma." },
      { id: "5", emoji: "🔵", rotulo: "5. Azul", descricao: "A mais fria de todas." },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Escala perfeita!",
    feedbackErro: "Pense: fogo → sol → grama → mar.",
    falaFinal: "Uma escala de temperatura de cores!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Artista — página 3.",
    tituloLivro: "🎨 Diário do Artista",
    subtitulo: "Página 3 — Temperatura das Cores",
    paragrafos: [
      { id: "p1", texto: "Cores QUENTES são vermelho, laranja e amarelo. Lembram fogo e sol. Deixam a imagem animada e cheia de energia.", chaves: ["quentes", "vermelho", "amarelo"] },
      { id: "p2", texto: "Cores FRIAS são azul, verde e roxo. Lembram mar e floresta. Deixam a imagem calma e tranquila.", chaves: ["frias", "azul", "verde"] },
    ],
    falaFinal: "Artistas escolhem cores pra passar sentimentos!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Onde combina cada elemento?",
    instrucao: "⏱️ Quente ou frio?",
    duracaoSegundos: 15,
    pecas: [
      { id: "quente", emoji: "🔥", rotulo: "Quente" },
      { id: "frio", emoji: "❄️", rotulo: "Frio" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Fogo", emoji: "🔥", cor: "from-rose-400 to-orange-500" }, municipioB: { nome: "Chamas", emoji: "🕯️", cor: "from-rose-400 to-orange-500" }, contexto: "Fogueira à noite — que família de cor?", pecaCertaId: "quente", feedbackAcerto: "QUENTE!", feedbackErro: "Fogo é QUENTE." },
      { id: "r2", municipioA: { nome: "Iceberg", emoji: "🧊", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Gelo", emoji: "❄️", cor: "from-sky-400 to-blue-600" }, contexto: "Iceberg no mar — que família?", pecaCertaId: "frio", feedbackAcerto: "FRIO!", feedbackErro: "Gelo é FRIO." },
      { id: "r3", municipioA: { nome: "Floresta", emoji: "🌲", cor: "from-emerald-400 to-green-700" }, municipioB: { nome: "Grama", emoji: "🌿", cor: "from-emerald-400 to-green-700" }, contexto: "Floresta densa — que família?", pecaCertaId: "frio", feedbackAcerto: "FRIO!", feedbackErro: "Verde é FRIO." },
    ],
    falaFinal: "Sabe classificar qualquer paisagem!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Metade das 6 cores é quente, metade é fria.",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      { id: "q", rotulo: "Quentes", emoji: "🔥", percentual: 50, cor: "#ef4444", descricao: "Vermelho, laranja, amarelo — energia.", exemplos: ["🔴", "🟠", "🟡"] },
      { id: "f", rotulo: "Frias", emoji: "❄️", percentual: 50, cor: "#3b82f6", descricao: "Azul, verde, roxo — calma.", exemplos: ["🔵", "🟢", "🟣"] },
    ],
    falaFinal: "Equilíbrio perfeito na paleta!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas.",
    instrucao: "3 perguntas",
    perguntas: [
      { id: "q1", pergunta: "Fogo é:", opcoes: [{ id: "a", texto: "Quente", correta: true }, { id: "b", texto: "Frio" }], feedbackAcerto: "Isso!", feedbackErro: "Fogo é QUENTE." },
      { id: "q2", pergunta: "Mar é:", opcoes: [{ id: "a", texto: "Frio", correta: true }, { id: "b", texto: "Quente" }], feedbackAcerto: "Certo!", feedbackErro: "Mar é FRIO." },
      { id: "q3", pergunta: "Amarelo é:", opcoes: [{ id: "a", texto: "Quente", correta: true }, { id: "b", texto: "Frio" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Amarelo é QUENTE." },
    ],
    selo: { nome: "Sensível às Cores", subtitulo: "Sente a temperatura!", emoji: "🌡️", cor: "from-orange-400 via-purple-500 to-sky-500" },
    falaFinal: "Você já pinta com sentimento!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Sensível às Cores" },
};
