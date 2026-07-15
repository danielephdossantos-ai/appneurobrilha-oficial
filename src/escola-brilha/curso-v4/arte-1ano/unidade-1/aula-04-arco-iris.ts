import type { AulaGeoV1 } from "../../types";

/**
 * Arte · 1º Ano · U1 · A04 — Meu Primeiro Arco-Íris
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-arco-iris",
  titulo: "Meu Primeiro Arco-Íris",
  iconeTrilha: "🌈",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "votoExplorador",
    aurora: "Depois da chuva, apareceu no céu. O que é?",
    pergunta: "Que fenômeno é esse?",
    opcoes: [
      { id: "arco", titulo: "Arco-íris", subtitulo: "7 cores no céu", emoji: "🌈", cor: "from-red-400 via-yellow-400 to-purple-500" },
      { id: "estrela", titulo: "Estrela", subtitulo: "brilha à noite", emoji: "⭐", cor: "from-yellow-300 to-amber-500" },
      { id: "nuvem", titulo: "Nuvem", subtitulo: "só branca", emoji: "☁️", cor: "from-sky-200 to-slate-400" },
    ],
    respostaCerta: "arco",
    feedbackAcerto: "É o ARCO-ÍRIS 🌈 — chuva + sol!",
    feedbackErro: "É o ARCO-ÍRIS! Chuva + sol no céu.",
    falaFinal: "Vamos aprender a pintar o nosso!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual é a PRIMEIRA cor do arco-íris?",
    pergunta: "Primeira cor:",
    opcoes: [
      { id: "vermelho", titulo: "Vermelho", subtitulo: "topo do arco", emoji: "🔴", cor: "from-rose-400 to-red-600" },
      { id: "azul", titulo: "Azul", subtitulo: "meio", emoji: "🔵", cor: "from-sky-400 to-blue-600" },
      { id: "violeta", titulo: "Violeta", subtitulo: "última", emoji: "🟣", cor: "from-purple-400 to-violet-700" },
    ],
    respostaCerta: "vermelho",
    feedbackAcerto: "Isso! VERMELHO no topo.",
    feedbackErro: "Vermelho vem PRIMEIRO, no topo.",
    falaFinal: "Ordem: vermelho → violeta.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 7 cores do arco-íris.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "v", capa: "1. VERMELHO", emoji: "🔴", cor: "from-rose-400 to-red-600", conteudo: "Primeira cor, no topo do arco." },
      { id: "l", capa: "2. LARANJA", emoji: "🟠", cor: "from-orange-400 to-amber-600", conteudo: "Segunda cor, quente." },
      { id: "a", capa: "3. AMARELO", emoji: "🟡", cor: "from-yellow-300 to-amber-500", conteudo: "Terceira cor, brilhante como o sol." },
      { id: "vd", capa: "4. VERDE", emoji: "🟢", cor: "from-emerald-400 to-green-600", conteudo: "Quarta cor, no meio do arco." },
      { id: "az", capa: "5. AZUL", emoji: "🔵", cor: "from-sky-400 to-blue-600", conteudo: "Quinta cor, cor do céu." },
      { id: "an", capa: "6. ANIL", emoji: "🟦", cor: "from-blue-500 to-indigo-700", conteudo: "Sexta cor, um azul mais escuro." },
      { id: "vt", capa: "7. VIOLETA", emoji: "🟣", cor: "from-purple-400 to-violet-700", conteudo: "Última cor, cor da flor." },
    ],
    falaFinal: "7 cores em uma ordem só!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada faixa do arco.",
    instrucao: "Toque nas faixas",
    layout: "personagem",
    mapaUrl: "",
    pontos: [
      { id: "1", x: 15, y: 30, emoji: "🔴", cor: "from-rose-400 to-red-600", titulo: "1º Vermelho", texto: "Primeira faixa, no topo." },
      { id: "2", x: 28, y: 30, emoji: "🟠", cor: "from-orange-400 to-amber-600", titulo: "2º Laranja", texto: "Vem logo depois." },
      { id: "3", x: 41, y: 30, emoji: "🟡", cor: "from-yellow-300 to-amber-500", titulo: "3º Amarelo", texto: "Cor do sol no arco." },
      { id: "4", x: 54, y: 30, emoji: "🟢", cor: "from-emerald-400 to-green-600", titulo: "4º Verde", texto: "Meio do arco." },
      { id: "5", x: 67, y: 30, emoji: "🔵", cor: "from-sky-400 to-blue-600", titulo: "5º Azul", texto: "Como o céu." },
      { id: "6", x: 80, y: 30, emoji: "🟦", cor: "from-blue-500 to-indigo-700", titulo: "6º Anil", texto: "Azul bem escuro." },
      { id: "7", x: 50, y: 75, emoji: "🟣", cor: "from-purple-400 to-violet-700", titulo: "7º Violeta", texto: "Última cor, embaixo." },
    ],
    falaFinal: "Sete faixas do arco-íris!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre o arco.",
    instrucao: "Toque na resposta",
    perguntas: [
      { id: "q1", pergunta: "Cor no TOPO:", cards: [{ id: "a", emoji: "🔴", titulo: "Vermelho", cor: "from-rose-400 to-red-600" }, { id: "b", emoji: "🔵", titulo: "Azul", cor: "from-sky-400 to-blue-600" }, { id: "c", emoji: "🟣", titulo: "Violeta", cor: "from-purple-400 to-violet-700" }], correta: "a", feedbackAcerto: "VERMELHO no topo!", feedbackErro: "Topo é VERMELHO." },
      { id: "q2", pergunta: "Cor EMBAIXO:", cards: [{ id: "a", emoji: "🟣", titulo: "Violeta", cor: "from-purple-400 to-violet-700" }, { id: "b", emoji: "🟡", titulo: "Amarelo", cor: "from-yellow-300 to-amber-500" }, { id: "c", emoji: "🔴", titulo: "Vermelho", cor: "from-rose-400 to-red-600" }], correta: "a", feedbackAcerto: "VIOLETA embaixo!", feedbackErro: "Embaixo é VIOLETA." },
      { id: "q3", pergunta: "Cor do MEIO:", cards: [{ id: "a", emoji: "🟢", titulo: "Verde", cor: "from-emerald-400 to-green-600" }, { id: "b", emoji: "🔴", titulo: "Vermelho", cor: "from-rose-400 to-red-600" }, { id: "c", emoji: "🟣", titulo: "Violeta", cor: "from-purple-400 to-violet-700" }], correta: "a", feedbackAcerto: "VERDE no meio!", feedbackErro: "Meio é VERDE." },
    ],
    falaFinal: "Você conhece a estrutura do arco!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Arco-íris = CHUVA + SOL.",
    instrucao: "Toque nos interruptores",
    mapaUrl: "",
    camadas: [
      { id: "chuva", rotulo: "Chuva", emoji: "🌧️", cor: "from-sky-400 to-blue-700", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Gotinhas de água no ar funcionam como pequenos prismas." },
      { id: "sol", rotulo: "Sol", emoji: "☀️", cor: "from-yellow-300 to-orange-500", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "A luz do sol atravessa as gotas e se abre em 7 cores." },
    ],
    falaFinal: "Só aparece quando os dois se encontram!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Coloque as 7 cores na ordem do arco.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem do arco-íris:",
    paradas: [
      { id: "1", emoji: "🔴", rotulo: "1. Vermelho", descricao: "Primeira, no topo." },
      { id: "2", emoji: "🟠", rotulo: "2. Laranja", descricao: "Segunda faixa." },
      { id: "3", emoji: "🟡", rotulo: "3. Amarelo", descricao: "Terceira faixa." },
      { id: "4", emoji: "🟢", rotulo: "4. Verde", descricao: "Meio do arco." },
      { id: "5", emoji: "🔵", rotulo: "5. Azul", descricao: "Quinta faixa." },
      { id: "6", emoji: "🟦", rotulo: "6. Anil", descricao: "Sexta faixa." },
      { id: "7", emoji: "🟣", rotulo: "7. Violeta", descricao: "Última faixa." },
    ],
    ordemCerta: ["1", "2", "3", "4", "5", "6", "7"],
    feedbackAcerto: "Arco-íris completo!",
    feedbackErro: "Comece pelo vermelho e termine no violeta.",
    falaFinal: "Ordem oficial do arco!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Artista — página final.",
    tituloLivro: "🎨 Diário do Artista",
    subtitulo: "Página 4 — Arco-Íris",
    paragrafos: [
      { id: "p1", texto: "O ARCO-ÍRIS aparece quando o SOL encontra a CHUVA. A luz atravessa as gotas e se abre em 7 cores.", chaves: ["arco-íris", "sol", "chuva"] },
      { id: "p2", texto: "As 7 cores são: VERMELHO, LARANJA, AMARELO, VERDE, AZUL, ANIL e VIOLETA. Sempre nessa ordem.", chaves: ["vermelho", "verde", "violeta"] },
    ],
    falaFinal: "Você fechou o Estúdio das Cores!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Qual é a próxima cor do arco?",
    instrucao: "⏱️ Complete a sequência",
    duracaoSegundos: 15,
    pecas: [
      { id: "l", emoji: "🟠", rotulo: "Laranja" },
      { id: "v", emoji: "🟢", rotulo: "Verde" },
      { id: "vt", emoji: "🟣", rotulo: "Violeta" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Antes", emoji: "🔴", cor: "from-rose-400 to-red-600" }, municipioB: { nome: "Depois", emoji: "🟡", cor: "from-yellow-300 to-amber-500" }, contexto: "Entre vermelho e amarelo vem…", pecaCertaId: "l", feedbackAcerto: "LARANJA!", feedbackErro: "Vem LARANJA." },
      { id: "r2", municipioA: { nome: "Antes", emoji: "🟡", cor: "from-yellow-300 to-amber-500" }, municipioB: { nome: "Depois", emoji: "🔵", cor: "from-sky-400 to-blue-600" }, contexto: "Entre amarelo e azul vem…", pecaCertaId: "v", feedbackAcerto: "VERDE!", feedbackErro: "Vem VERDE." },
      { id: "r3", municipioA: { nome: "Antes", emoji: "🟦", cor: "from-blue-500 to-indigo-700" }, municipioB: { nome: "Fim", emoji: "🏁", cor: "from-purple-400 to-violet-700" }, contexto: "Depois do anil, vem…", pecaCertaId: "vt", feedbackAcerto: "VIOLETA!", feedbackErro: "Depois do anil vem VIOLETA." },
    ],
    falaFinal: "Memorizou a ordem inteira!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "No arco-íris: parte quente e parte fria.",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      { id: "q", rotulo: "Metade quente", emoji: "🔥", percentual: 43, cor: "#ef4444", descricao: "Vermelho, laranja e amarelo — parte de cima.", exemplos: ["🔴", "🟠", "🟡"] },
      { id: "f", rotulo: "Metade fria", emoji: "❄️", percentual: 57, cor: "#3b82f6", descricao: "Verde, azul, anil e violeta — parte de baixo.", exemplos: ["🟢", "🔵", "🟦", "🟣"] },
    ],
    falaFinal: "Arco-íris tem tudo o que aprendeu!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra fechar o Estúdio.",
    instrucao: "3 perguntas",
    perguntas: [
      { id: "q1", pergunta: "Arco-íris tem quantas cores?", opcoes: [{ id: "a", texto: "7", correta: true }, { id: "b", texto: "3" }], feedbackAcerto: "Isso! 7 cores.", feedbackErro: "São 7 cores." },
      { id: "q2", pergunta: "Aparece quando:", opcoes: [{ id: "a", texto: "Chove com sol", correta: true }, { id: "b", texto: "Só à noite" }], feedbackAcerto: "Certo!", feedbackErro: "Aparece quando chove COM sol." },
      { id: "q3", pergunta: "Primeira cor:", opcoes: [{ id: "a", texto: "Vermelho", correta: true }, { id: "b", texto: "Violeta" }], feedbackAcerto: "PERFEITO!", feedbackErro: "A primeira é VERMELHO." },
    ],
    selo: { nome: "Pintor do Arco-Íris", subtitulo: "Fechou o Estúdio Brilha das Cores!", emoji: "🌈", cor: "from-red-400 via-yellow-400 via-emerald-400 via-sky-400 to-purple-500" },
    falaFinal: "Você é oficialmente um pequeno artista!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Pintor do Arco-Íris" },
};
