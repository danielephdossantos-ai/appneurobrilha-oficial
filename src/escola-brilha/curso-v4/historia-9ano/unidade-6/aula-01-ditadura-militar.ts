import type { AulaGeoV1 } from "../../types";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgTanqueDit } from "@/assets/historia-9ano/u6-tanque-ditadura.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ditadura-militar",
  titulo: "Ditadura Militar Brasileira (1964–1985)",
  iconeTrilha: "✊",
  bncc: ["EF09HI15", "EF09HI16"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgDir,
    imagemDestaqueUrl: imgRes,
    aurora:
      "31 de março de 1964. Militares derrubam o presidente João Goulart. Começa a DITADURA MILITAR — 21 anos de governo com censura, prisões, tortura e cassação de opositores. Milhares de perseguidos, centenas de mortos e desaparecidos. Mas também surge uma resistência forte: música, teatro, imprensa alternativa. Em 1984, milhões nas ruas gritam DIRETAS JÁ. Em 1985 volta a democracia. Em 1988: a Constituição Cidadã.",
    falaFinal: "Nó 6: a democracia brasileira é jovem e foi conquistada.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que aconteceu em 31 de março de 1964 no Brasil?",
    pergunta: "Como os militares chegaram ao poder em 1964?",
    fotoUrl: imgTanqueDit,
    opcoes: [
      { id: "gol", titulo: "GOLPE MILITAR", subtitulo: "derrubaram um presidente eleito", emoji: "🎖️", cor: "from-amber-800 to-slate-950" },
      { id: "el", titulo: "ELEIÇÃO POPULAR", subtitulo: "venceram com voto direto", emoji: "❌", cor: "from-teal-800 to-slate-950" },
    ],
    respostaCerta: "gol",
    feedbackAcerto: "Correto. Foi um GOLPE. Os militares derrubaram João Goulart, presidente eleito, com apoio de setores civis, empresariais e dos EUA (contexto de Guerra Fria).",
    feedbackErro: "Não. Não houve eleição. Foi um golpe militar contra um presidente eleito.",
    falaFinal: "1964 foi golpe, não eleição. Fato histórico consolidado.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da ditadura.",
    instrucao: "",
    cadernos: [
      { id: "ai5", capa: "AI-5 (1968)", emoji: "📵", cor: "from-slate-700 to-slate-900", fotoUrl: imgMpb, conteudo: "AI-5 (Ato Institucional nº 5) foi decreto de 1968 que fechou o Congresso, suspendeu direitos políticos, cancelou o habeas corpus para crimes políticos e liberou a CENSURA prévia. Marco do endurecimento da ditadura — 'anos de chumbo'.", exemplo: "Exemplo: depois do AI-5, jornais precisavam mandar tudo pra Polícia Federal antes de publicar. Espaços em branco no lugar de matérias censuradas viraram símbolo." },
      { id: "tor", capa: "Tortura", emoji: "⛓️", cor: "from-amber-700 to-slate-900", fotoUrl: imgDiretas, conteudo: "TORTURA foi prática sistemática dos órgãos de repressão (DOI-CODI, DOPS) contra opositores. A Comissão Nacional da Verdade (2014) documentou 434 mortos e desaparecidos políticos e milhares de vítimas de tortura.", exemplo: "Exemplo: Vladimir Herzog, jornalista, foi morto sob tortura em 1975. A Igreja de São Paulo fez missa pública que juntou 8 mil pessoas — abalando a ditadura." },
      { id: "res", capa: "Resistência Cultural", emoji: "🎸", cor: "from-teal-700 to-slate-900", fotoUrl: imgDir, conteudo: "RESISTÊNCIA CULTURAL foi a resposta de artistas, jornalistas, estudantes e igrejas. Chico Buarque, Caetano Veloso, Gilberto Gil, Elis Regina cantaram contra a ditadura. Muitos foram exilados. Cartas, samba e teatro burlavam a censura.", exemplo: "Exemplo: 'Cálice' (Chico Buarque e Gilberto Gil, 1973) era uma reza que virou protesto: 'Pai, afasta de mim esse cálice de vinho tinto de sangue'. Foi censurada." },
      { id: "dir", capa: "Diretas Já (1984)", emoji: "✊", cor: "from-cyan-700 to-slate-900", fotoUrl: imgRes, conteudo: "DIRETAS JÁ foi o movimento de 1983–84 que pedia ELEIÇÕES DIRETAS para presidente. Milhões de pessoas nas ruas — 1,5 milhão só na Praça da Sé (SP). A emenda foi rejeitada, mas em 1985 a ditadura caiu e o Brasil voltou à democracia.", exemplo: "Exemplo: os comícios das Diretas Já reuniram artistas, políticos e povo — foi o maior movimento de massa da história brasileira até então." },
    ],
    falaFinal: "AI-5 + Tortura + Resistência + Diretas Já. Anatomia da ditadura e da volta à democracia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três fases da ditadura militar. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTanqueDit,
    pontos: [
      { id: "f1", x: 25, y: 30, emoji: "🎖️", cor: "from-teal-700 to-slate-900", fotoUrl: imgMpb, titulo: "1964–68: INSTALAÇÃO", texto: "Golpe, cassações, atos institucionais. Milagre econômico começa. Ainda há alguma imprensa e oposição." },
      { id: "f2", x: 55, y: 55, emoji: "⛓️", cor: "from-slate-700 to-slate-900", fotoUrl: imgDiretas, titulo: "1968–74: ANOS DE CHUMBO", texto: "AI-5, censura total, tortura sistemática, guerrilha do Araguaia. Fase mais violenta." },
      { id: "f3", x: 80, y: 40, emoji: "🕊️", cor: "from-cyan-700 to-slate-900", fotoUrl: imgDir, titulo: "1974–85: ABERTURA", texto: "Governo Geisel inicia distensão 'lenta, gradual e segura'. Anistia (1979), Diretas Já (1984), fim da ditadura (1985)." },
    ],
    falaFinal: "Instalação → Anos de Chumbo → Abertura. 21 anos em três fases.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "A ditadura militar brasileira começou com o golpe de:", fotoUrl: imgRes, cards: [{ id: "64", emoji: "🎖️", titulo: "1964", cor: "from-teal-600 to-slate-900" }, { id: "45", emoji: "🕊️", titulo: "1945", cor: "from-amber-600 to-slate-900" }, { id: "85", emoji: "🗳️", titulo: "1985", cor: "from-slate-600 to-slate-900" }], correta: "64", feedbackAcerto: "Correto. 31 de março de 1964.", feedbackErro: "É 1964. 1945 = fim da Era Vargas; 1985 = FIM da ditadura." },
      { id: "q2", pergunta: "O AI-5 (1968) representou:", fotoUrl: imgTanqueDit, cards: [{ id: "ec", emoji: "⛓️", titulo: "Endurecimento e censura total", cor: "from-teal-600 to-slate-900" }, { id: "ab", emoji: "🕊️", titulo: "Início da abertura democrática", cor: "from-amber-600 to-slate-900" }, { id: "el", emoji: "🗳️", titulo: "Volta das eleições diretas", cor: "from-slate-600 to-slate-900" }], correta: "ec", feedbackAcerto: "Correto. AI-5 abriu os 'anos de chumbo'.", feedbackErro: "É endurecimento. A abertura começa só em 1974." },
      { id: "q3", pergunta: "O movimento DIRETAS JÁ pedia:", fotoUrl: imgMpb, cards: [{ id: "el", emoji: "🗳️", titulo: "Eleições diretas para presidente", cor: "from-teal-600 to-slate-900" }, { id: "vg", emoji: "🎖️", titulo: "Volta de um general", cor: "from-amber-600 to-slate-900" }, { id: "mu", emoji: "🧱", titulo: "Queda do Muro de Berlim", cor: "from-slate-600 to-slate-900" }], correta: "el", feedbackAcerto: "Correto. Eleições diretas para presidente da República.", feedbackErro: "É eleições diretas — o povo escolhendo o presidente." },
    ],
    falaFinal: "Você já mapeia as três fases da ditadura brasileira.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados de 1964 a 1985.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgDiretas,
    camadas: [
      { id: "reg", rotulo: "Regime militar", emoji: "🎖️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "5 presidentes-generais: Castelo Branco → Costa e Silva → Médici → Geisel → Figueiredo. Censura, tortura, atos institucionais e 'milagre econômico'." },
      { id: "op", rotulo: "Resistência", emoji: "✊", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Estudantes (UNE), MDB, Igreja Católica, artistas, jornalistas, familiares de desaparecidos, guerrilha. Diretas Já mobiliza milhões em 1984." },
    ],
    falaFinal: "Regime × Resistência. A resistência venceu em 1985.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da ditadura.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1964–1988",
    paradas: [
      { id: "gol", emoji: "🎖️", rotulo: "1. Golpe (1964)", fotoUrl: imgDir, descricao: "Militares derrubam Jango." },
      { id: "ai5", emoji: "📵", rotulo: "2. AI-5 (1968)", fotoUrl: imgRes, descricao: "Censura total e anos de chumbo." },
      { id: "dir", emoji: "✊", rotulo: "3. Diretas Já (1984)", fotoUrl: imgTanqueDit, descricao: "Milhões nas ruas por eleições diretas." },
      { id: "co", emoji: "📜", rotulo: "4. Constituição (1988)", fotoUrl: imgMpb, descricao: "'Constituição Cidadã' sela a democracia." },
    ],
    ordemCerta: ["gol", "ai5", "dir", "co"],
    feedbackAcerto: "Perfeito. Golpe → AI-5 → Diretas → Constituição.",
    feedbackErro: "Comece pelo golpe (1964).",
    falaFinal: "24 anos em 4 marcos. Do golpe à Constituição.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 6 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 6 — Ditadura Militar",
    paragrafos: [
      { id: "p1", texto: "Em 31 de março de 1964 os militares deram um GOLPE e derrubaram o presidente eleito João Goulart. Foi apoiado por parte da elite civil, empresarial e pela política dos EUA na Guerra Fria (medo do socialismo). Começa a DITADURA MILITAR — 21 anos.", chaves: ["Golpe de 1964"], definicoes: { "Golpe de 1964": "Movimento militar-civil que derrubou o presidente João Goulart em 31 de março de 1964 e instalou a ditadura." }, fotoUrl: imgDiretas },
      { id: "p2", texto: "Em 1968 veio o AI-5 (Ato Institucional nº 5): fechou o Congresso, cancelou habeas corpus para crimes políticos e criou censura prévia. Começaram os 'ANOS DE CHUMBO' — tortura sistemática de opositores em porões como o DOI-CODI. Vidas foram destruídas.", chaves: ["AI-5"], definicoes: { "AI-5": "Ato Institucional nº 5 (1968) que endureceu a ditadura, fechou o Congresso e institucionalizou a censura." }, fotoUrl: imgDir },
      { id: "p3", texto: "A RESISTÊNCIA veio pela cultura: Chico Buarque, Caetano Veloso, Elis Regina cantaram contra a repressão; jornais alternativos denunciaram; a Igreja Católica protegeu perseguidos. Muitos foram exilados. Alguns entraram na luta armada.", chaves: ["Anos de Chumbo"], definicoes: { "Anos de Chumbo": "Período 1968–1974 da ditadura brasileira, marcado por censura, tortura e desaparecimentos." }, fotoUrl: imgRes },
      { id: "p4", texto: "A abertura começou em 1974 (Geisel), passou pela ANISTIA (1979) e explodiu com as DIRETAS JÁ (1984) — 1,5 milhão de pessoas na Praça da Sé pedindo eleições diretas. Em 1985 a ditadura terminou. Em 1988 a nova CONSTITUIÇÃO CIDADÃ garantiu direitos fundamentais e o voto para os analfabetos.", chaves: ["Constituição de 1988"], definicoes: { "Constituição de 1988": "Constituição atual do Brasil, chamada 'Cidadã' por garantir amplos direitos fundamentais." }, fotoUrl: imgTanqueDit },
    ],
    falaFinal: "Leitura concluída. A democracia brasileira tem só 41 anos — cuide dela.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento ao lado certo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "reg", emoji: "🎖️", rotulo: "Regime" },
      { id: "res", emoji: "✊", rotulo: "Resistência" },
      { id: "dem", emoji: "🕊️", rotulo: "Retorno à democracia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "AI-5", emoji: "📵", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Censura, sem habeas corpus", emoji: "⛓️", cor: "from-amber-600 to-slate-900" }, contexto: "1968.", pecaCertaId: "reg", feedbackAcerto: "Correto. AI-5 = Regime.", feedbackErro: "É Regime." },
      { id: "r2", municipioA: { nome: "Chico Buarque, Caetano, Elis", emoji: "🎸", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Canções de protesto", emoji: "🎤", cor: "from-cyan-600 to-slate-900" }, contexto: "Cultura contra a censura.", pecaCertaId: "res", feedbackAcerto: "Correto. Cultura = Resistência.", feedbackErro: "É Resistência." },
      { id: "r3", municipioA: { nome: "Diretas Já (1984)", emoji: "✊", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "1,5 milhão na Praça da Sé", emoji: "🗳️", cor: "from-teal-600 to-slate-900" }, contexto: "Marco de volta à democracia.", pecaCertaId: "dem", feedbackAcerto: "Correto. Diretas Já = Retorno à democracia.", feedbackErro: "É Retorno à democracia." },
      { id: "r4", municipioA: { nome: "DOI-CODI", emoji: "🚔", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Órgão de repressão política", emoji: "⛓️", cor: "from-amber-600 to-slate-900" }, contexto: "Anos 70.", pecaCertaId: "reg", feedbackAcerto: "Correto. DOI-CODI = Regime.", feedbackErro: "É Regime." },
      { id: "r5", municipioA: { nome: "Vladimir Herzog", emoji: "🕊️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Jornalista morto sob tortura (1975)", emoji: "✍️", cor: "from-cyan-600 to-slate-900" }, contexto: "Símbolo da resistência.", pecaCertaId: "res", feedbackAcerto: "Correto. Herzog = símbolo da resistência.", feedbackErro: "É Resistência." },
      { id: "r6", municipioA: { nome: "Constituição de 1988", emoji: "📜", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "'Constituição Cidadã'", emoji: "🇧🇷", cor: "from-teal-600 to-slate-900" }, contexto: "Selou a nova democracia.", pecaCertaId: "dem", feedbackAcerto: "Correto. Constituição de 88 = Democracia.", feedbackErro: "É Retorno à democracia." },
    ],
    falaFinal: "6 rodadas. Você já separa regime, resistência e democracia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Vítimas documentadas pela Comissão Nacional da Verdade (2014).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMpb,
    fatias: [
      { id: "mo", rotulo: "Mortos oficiais (~50%)", emoji: "🕯️", percentual: 50, cor: "#334155", descricao: "Cerca de 217 mortes de opositores confirmadas pela Comissão Nacional da Verdade — muitas por tortura ou execução em prisões.", exemplos: [] },
      { id: "de", rotulo: "Desaparecidos (~50%)", emoji: "🔎", percentual: 50, cor: "#0f766e", descricao: "Cerca de 217 desaparecidos políticos cujos corpos nunca foram encontrados. Famílias ainda hoje buscam informações.", exemplos: [] },
    ],
    falaFinal: "434 vidas destruídas. E milhares torturados. Nunca esquecer.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "O regime militar brasileiro começou em:", opcoes: [{ id: "a", texto: "1930.", correta: false }, { id: "b", texto: "1964.", correta: true }, { id: "c", texto: "1988.", correta: false }], feedbackAcerto: "Correto. Golpe de 31 de março de 1964.", feedbackErro: "É 1964." },
      { id: "av2", pergunta: "O AI-5 (1968):", opcoes: [{ id: "a", texto: "Instalou censura total e cancelou habeas corpus.", correta: true }, { id: "b", texto: "Convocou eleições diretas.", correta: false }, { id: "c", texto: "Abriu a democracia.", correta: false }], feedbackAcerto: "Correto. Endureceu a ditadura.", feedbackErro: "É censura e cancelamento do habeas corpus." },
      { id: "av3", pergunta: "As DIRETAS JÁ (1984) pediam:", opcoes: [{ id: "a", texto: "Volta dos militares ao poder.", correta: false }, { id: "b", texto: "Eleições diretas para presidente.", correta: true }, { id: "c", texto: "Fim das eleições.", correta: false }], feedbackAcerto: "Correto. O povo escolhendo o presidente.", feedbackErro: "É eleições diretas." },
    ],
    selo: { nome: "Nó 6 da Teia", subtitulo: "Ditadura e redemocratização", emoji: "✊", cor: "from-emerald-500 to-slate-900", fotoUrl: imgDir },
    falaFinal: "Nó 6 destravado. Democracia tem preço — e memória.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 6 — Ditadura Militar" },
};
