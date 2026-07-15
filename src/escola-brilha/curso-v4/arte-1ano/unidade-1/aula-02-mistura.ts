import type { AulaGeoV1 } from "../../types";

/**
 * Arte · 1º Ano · U1 · A02 — Cores Secundárias (mistura)
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-mistura",
  titulo: "Cores Que Nascem da Mistura",
  iconeTrilha: "🎨",
  bncc: ["EF15AR02", "EF15AR04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "votoExplorador",
    aurora: "Brilha misturou VERMELHO com AMARELO. Que cor nasceu?",
    pergunta: "Vermelho + Amarelo = ?",
    opcoes: [
      { id: "laranja", titulo: "Laranja", subtitulo: "cor da abóbora", emoji: "🟠", cor: "from-orange-400 to-amber-600" },
      { id: "verde", titulo: "Verde", subtitulo: "cor da folha", emoji: "🟢", cor: "from-emerald-400 to-green-600" },
      { id: "roxo", titulo: "Roxo", subtitulo: "cor da uva", emoji: "🟣", cor: "from-purple-400 to-violet-600" },
    ],
    respostaCerta: "laranja",
    feedbackAcerto: "Isso! Vermelho + Amarelo = LARANJA 🟠",
    feedbackErro: "Vermelho + Amarelo dá LARANJA (cor do pôr do sol).",
    falaFinal: "Quando duas primárias se abraçam, nasce uma cor NOVA!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "E amarelo com azul?",
    pergunta: "Amarelo + Azul = ?",
    opcoes: [
      { id: "verde", titulo: "Verde", subtitulo: "grama e folha", emoji: "🟢", cor: "from-emerald-400 to-green-600" },
      { id: "laranja", titulo: "Laranja", subtitulo: "abóbora", emoji: "🟠", cor: "from-orange-400 to-amber-600" },
      { id: "roxo", titulo: "Roxo", subtitulo: "uva", emoji: "🟣", cor: "from-purple-400 to-violet-600" },
    ],
    respostaCerta: "verde",
    feedbackAcerto: "Amarelo + Azul = VERDE 🟢",
    feedbackErro: "Amarelo + Azul dá VERDE (cor da grama).",
    falaFinal: "Cada mistura tem seu resultado certinho!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 3 cores SECUNDÁRIAS.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "laranja", capa: "LARANJA", emoji: "🟠", cor: "from-orange-400 to-amber-600", conteudo: "Vermelho + Amarelo.", exemplo: "Ex.: abóbora, cenoura, pôr do sol." },
      { id: "verde", capa: "VERDE", emoji: "🟢", cor: "from-emerald-400 to-green-600", conteudo: "Amarelo + Azul.", exemplo: "Ex.: folha, grama, sapo." },
      { id: "roxo", capa: "ROXO", emoji: "🟣", cor: "from-purple-400 to-violet-600", conteudo: "Vermelho + Azul.", exemplo: "Ex.: uva, berinjela, flor." },
    ],
    falaFinal: "3 cores novas nascidas de mistura!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque nos objetos secundários.",
    instrucao: "Toque nos objetos",
    layout: "personagem",
    mapaUrl: "",
    pontos: [
      { id: "abobora", x: 25, y: 30, emoji: "🎃", cor: "from-orange-400 to-amber-600", titulo: "Abóbora", texto: "Abóbora é LARANJA (vermelho + amarelo)." },
      { id: "folha", x: 50, y: 30, emoji: "🍃", cor: "from-emerald-400 to-green-600", titulo: "Folha", texto: "Folha é VERDE (amarelo + azul)." },
      { id: "uva", x: 75, y: 30, emoji: "🍇", cor: "from-purple-400 to-violet-600", titulo: "Uva", texto: "Uva é ROXA (vermelho + azul)." },
      { id: "cenoura", x: 30, y: 70, emoji: "🥕", cor: "from-orange-400 to-amber-600", titulo: "Cenoura", texto: "Cenoura também é LARANJA." },
      { id: "sapo", x: 70, y: 70, emoji: "🐸", cor: "from-emerald-400 to-green-600", titulo: "Sapo", texto: "Sapo é VERDE." },
    ],
    falaFinal: "Secundárias no mundo todo!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 misturas.",
    instrucao: "Que cor nasce?",
    perguntas: [
      { id: "q1", pergunta: "Vermelho + Amarelo:", cards: [{ id: "a", emoji: "🟠", titulo: "Laranja", cor: "from-orange-400 to-amber-600" }, { id: "b", emoji: "🟢", titulo: "Verde", cor: "from-emerald-400 to-green-600" }, { id: "c", emoji: "🟣", titulo: "Roxo", cor: "from-purple-400 to-violet-600" }], correta: "a", feedbackAcerto: "LARANJA!", feedbackErro: "Dá LARANJA." },
      { id: "q2", pergunta: "Amarelo + Azul:", cards: [{ id: "a", emoji: "🟢", titulo: "Verde", cor: "from-emerald-400 to-green-600" }, { id: "b", emoji: "🟠", titulo: "Laranja", cor: "from-orange-400 to-amber-600" }, { id: "c", emoji: "🟣", titulo: "Roxo", cor: "from-purple-400 to-violet-600" }], correta: "a", feedbackAcerto: "VERDE!", feedbackErro: "Dá VERDE." },
      { id: "q3", pergunta: "Vermelho + Azul:", cards: [{ id: "a", emoji: "🟣", titulo: "Roxo", cor: "from-purple-400 to-violet-600" }, { id: "b", emoji: "🟠", titulo: "Laranja", cor: "from-orange-400 to-amber-600" }, { id: "c", emoji: "🟢", titulo: "Verde", cor: "from-emerald-400 to-green-600" }], correta: "a", feedbackAcerto: "ROXO!", feedbackErro: "Dá ROXO." },
    ],
    falaFinal: "Você domina as misturas!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "PRIMÁRIAS x SECUNDÁRIAS.",
    instrucao: "Toque nos interruptores",
    mapaUrl: "",
    camadas: [
      { id: "prim", rotulo: "Primárias", emoji: "🎨", cor: "from-rose-400 to-red-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Vermelho, amarelo, azul — não nascem de mistura." },
      { id: "sec", rotulo: "Secundárias", emoji: "🌈", cor: "from-purple-400 to-pink-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Laranja, verde, roxo — nascem de duas primárias." },
    ],
    falaFinal: "Duas famílias de cores!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Monte a receita: quais cores misturar pra fazer ROXO?",
    instrucao: "Toque na ordem",
    pergunta: "Passo a passo pra fazer ROXO:",
    paradas: [
      { id: "1", emoji: "🔴", rotulo: "1. Pegar vermelho", descricao: "Comece com o vermelho." },
      { id: "2", emoji: "🔵", rotulo: "2. Juntar azul", descricao: "Adicione azul." },
      { id: "3", emoji: "🌀", rotulo: "3. Misturar", descricao: "Mexa até virar uma cor só." },
      { id: "4", emoji: "🟣", rotulo: "4. Roxo!", descricao: "Nasce o ROXO." },
    ],
    ordemCerta: ["1", "2", "3", "4"],
    feedbackAcerto: "Receita certa!",
    feedbackErro: "Pega uma cor, junta outra, mistura, vê o resultado.",
    falaFinal: "Toda mistura tem uma receita!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Artista — página 2.",
    tituloLivro: "🎨 Diário do Artista",
    subtitulo: "Página 2 — Misturas Mágicas",
    paragrafos: [
      { id: "p1", texto: "Cores SECUNDÁRIAS nascem quando duas PRIMÁRIAS se misturam. Laranja, verde e roxo são as 3 secundárias.", chaves: ["secundárias", "primárias"] },
      { id: "p2", texto: "Vermelho + amarelo = LARANJA. Amarelo + azul = VERDE. Vermelho + azul = ROXO. É uma mágica de verdade!", chaves: ["laranja", "verde", "roxo"] },
    ],
    falaFinal: "Você já sabe fazer 3 cores novas!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Qual mistura dá a cor pedida?",
    instrucao: "⏱️ Escolha a receita",
    duracaoSegundos: 15,
    pecas: [
      { id: "vm-am", emoji: "🔴🟡", rotulo: "Verm + Amar" },
      { id: "am-az", emoji: "🟡🔵", rotulo: "Amar + Azul" },
      { id: "vm-az", emoji: "🔴🔵", rotulo: "Verm + Azul" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Alvo", emoji: "🟠", cor: "from-orange-400 to-amber-600" }, municipioB: { nome: "Cor", emoji: "🎃", cor: "from-orange-400 to-amber-600" }, contexto: "Que mistura faz LARANJA?", pecaCertaId: "vm-am", feedbackAcerto: "Verm + Amar!", feedbackErro: "Laranja = vermelho + amarelo." },
      { id: "r2", municipioA: { nome: "Alvo", emoji: "🟢", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Cor", emoji: "🍃", cor: "from-emerald-400 to-green-600" }, contexto: "Que mistura faz VERDE?", pecaCertaId: "am-az", feedbackAcerto: "Amar + Azul!", feedbackErro: "Verde = amarelo + azul." },
      { id: "r3", municipioA: { nome: "Alvo", emoji: "🟣", cor: "from-purple-400 to-violet-600" }, municipioB: { nome: "Cor", emoji: "🍇", cor: "from-purple-400 to-violet-600" }, contexto: "Que mistura faz ROXO?", pecaCertaId: "vm-az", feedbackAcerto: "Verm + Azul!", feedbackErro: "Roxo = vermelho + azul." },
    ],
    falaFinal: "Cientista das misturas!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "6 cores no total: 3 primárias, 3 secundárias.",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      { id: "prim", rotulo: "Primárias", emoji: "🎨", percentual: 50, cor: "#ef4444", descricao: "Vermelho, amarelo, azul.", exemplos: ["🔴", "🟡", "🔵"] },
      { id: "sec", rotulo: "Secundárias", emoji: "🌈", percentual: 50, cor: "#a855f7", descricao: "Laranja, verde, roxo.", exemplos: ["🟠", "🟢", "🟣"] },
    ],
    falaFinal: "Meia paleta pronta pra pintar!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas.",
    instrucao: "3 perguntas",
    perguntas: [
      { id: "q1", pergunta: "Laranja nasce de:", opcoes: [{ id: "a", texto: "Vermelho + Amarelo", correta: true }, { id: "b", texto: "Azul + Verde" }], feedbackAcerto: "Isso!", feedbackErro: "Vermelho + Amarelo." },
      { id: "q2", pergunta: "Verde nasce de:", opcoes: [{ id: "a", texto: "Amarelo + Azul", correta: true }, { id: "b", texto: "Vermelho + Amarelo" }], feedbackAcerto: "Certo!", feedbackErro: "Amarelo + Azul." },
      { id: "q3", pergunta: "Roxo nasce de:", opcoes: [{ id: "a", texto: "Vermelho + Azul", correta: true }, { id: "b", texto: "Amarelo + Verde" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Vermelho + Azul." },
    ],
    selo: { nome: "Cientista das Cores", subtitulo: "Descobriu as secundárias!", emoji: "🧪", cor: "from-purple-400 via-pink-500 to-orange-500" },
    falaFinal: "Você domina as 6 cores!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Cientista das Cores" },
};
