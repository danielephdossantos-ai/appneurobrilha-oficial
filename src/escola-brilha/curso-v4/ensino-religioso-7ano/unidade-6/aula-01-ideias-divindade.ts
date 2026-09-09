import type { AulaGeoV1 } from "../../types";
import { url as monoteismo } from "@/assets/ensino-religioso-7ano/u2-monoteismo.jpg.asset.json";
import { url as politeismo } from "@/assets/ensino-religioso-7ano/u2-politeismo.jpg.asset.json";
import { url as panteismo } from "@/assets/ensino-religioso-7ano/u2-panteismo.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 6 · Aula 01
 * "Ideias de Divindade" — EF07ER06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ideias-divindade",
  titulo: "Ideias de Divindade",
  iconeTrilha: "🌟",
  bncc: ["EF07ER06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: três formas humanas de imaginar o divino.",
    mapaUrl: monoteismo,
    imagemDestaqueUrl: monoteismo,
    aurora:
      "Investigador, olha esses três cenários. UM: céu estrelado sobre uma montanha silenciosa — imagem clássica do UM Deus criador que muitos monoteístas imaginam. DOIS: um templo hindu com dezenas de divindades esculpidas, cada uma com um domínio: Ganesha da sabedoria, Lakshmi da fortuna. TRÊS: a floresta amazônica cheia de vida, onde o divino está EM CADA folha.",
    falaFinal:
      "Três grandes ideias de divindade: MONOTEÍSMO (um só), POLITEÍSMO (muitos) e PANTEÍSMO (em tudo). Hoje a gente compara — sem julgar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual dessas ideias é MAIS ANTIGA na humanidade?",
    pergunta: "O que veio primeiro?",
    opcoes: [
      { id: "mono", titulo: "MONOTEÍSMO — um só deus", subtitulo: "veio primeiro, sempre", emoji: "🌌", cor: "from-slate-400 to-gray-600" },
      { id: "poli", titulo: "POLITEÍSMO / PANTEÍSMO", subtitulo: "muitos deuses / divino em tudo veio antes", emoji: "🌍", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "poli",
    feedbackAcerto: "Isso! As religiões mais antigas conhecidas eram politeístas ou animistas. Monoteísmo surgiu depois.",
    feedbackErro: "Ao contrário — politeísmo e animismo vieram primeiro. Monoteísmo apareceu bem depois na história.",
    falaFinal: "Ordem histórica: primeiro muitos, depois um.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "monoteismo", capa: "1. Monoteísmo", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "MONOTEÍSMO ('mono'=um, 'theos'=deus) é a crença em UM ÚNICO Deus, criador de tudo. Judaísmo, cristianismo e islamismo são as três grandes tradições monoteístas.", exemplo: "Ex.: o Shemá judaico ('Ouve, Israel, o Senhor é UM') resume o monoteísmo.", fotoUrl: monoteismo },
      { id: "politeismo", capa: "2. Politeísmo", emoji: "🕉️", cor: "from-orange-500 to-red-700", conteudo: "POLITEÍSMO ('poli'=muitos) é a crença em MUITOS deuses, cada um com uma função ou domínio. Hinduísmo, religiões da Grécia antiga, mitologias nórdica e egípcia.", exemplo: "Ex.: no hinduísmo, Brahma cria, Vishnu preserva, Shiva transforma.", fotoUrl: politeismo },
      { id: "panteismo", capa: "3. Panteísmo", emoji: "🌍", cor: "from-emerald-500 to-green-700", conteudo: "PANTEÍSMO ('pan'=tudo) é a ideia de que o divino ESTÁ EM TUDO — cada árvore, animal, rio, pessoa. Muitas tradições indígenas e o xintoísmo japonês têm forte panteísmo.", exemplo: "Ex.: pra muitos povos indígenas, cortar uma árvore antiga é gesto religioso.", fotoUrl: panteismo },
    ],
    falaFinal: "Um, muitos, em tudo. Três formas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tradições, 4 ideias de divindade. Toque em cada balão. Sem hierarquia.",
    instrucao: "Toque em cada balão",
    mapaUrl: politeismo,
    pontos: [
      { id: "judaismo", x: 22, y: 30, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "JUDAÍSMO — monoteísmo estrito", texto: "O primeiro grande monoteísmo da história. Um só Deus (HaShem), sem imagens, sem intermediários. 'Ouve, Israel: o Senhor nosso Deus é UM' (Shemá).", fotoUrl: monoteismo },
      { id: "hinduismo", x: 70, y: 30, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "HINDUÍSMO — muito complexo", texto: "Aparenta politeísmo (milhares de divindades: Vishnu, Shiva, Ganesha, Lakshmi). Mas muitos hindus veem todos como manifestações de UM Absoluto (Brahman). Politeísmo e monoteísmo juntos.", fotoUrl: politeismo },
      { id: "islam", x: 30, y: 72, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "ISLAMISMO — monoteísmo radical", texto: "Tawhid: unidade absoluta de Allah. Nenhuma imagem, nenhum sócio, nenhum parceiro. O maior 'pecado' no islã é associar qualquer coisa a Allah.", fotoUrl: monoteismo },
      { id: "indigena", x: 76, y: 68, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "TRADIÇÕES INDÍGENAS — panteísmo", texto: "Para muitos povos (guarani, yanomami, tupinambá), o sagrado está EM TUDO — no rio, no jaguar, no vento, na semente. Não existe 'natureza sem espírito'.", fotoUrl: panteismo },
    ],
    falaFinal: "4 caminhos. Todos legítimos. Todos com longa história.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "MONOTEÍSMO significa:", fotoUrl: monoteismo, cards: [
        { id: "um", emoji: "🌌", titulo: "Crença em UM só Deus", cor: "from-indigo-500 to-purple-700" },
        { id: "muitos", emoji: "🕉️", titulo: "Muitos deuses", cor: "from-slate-400 to-gray-600" },
        { id: "nenhum", emoji: "❌", titulo: "Nenhum deus", cor: "from-red-500 to-rose-700" },
      ], correta: "um", feedbackAcerto: "Isso! 'Mono' = um, 'theos' = deus.", feedbackErro: "MONOTEÍSMO = UM só. Muitos deuses é politeísmo." },
      { id: "q2", pergunta: "O HINDUÍSMO é um caso interessante porque:", fotoUrl: politeismo, cards: [
        { id: "so-poli", emoji: "🕉️", titulo: "É só politeísmo", cor: "from-slate-400 to-gray-600" },
        { id: "junta", emoji: "🔄", titulo: "Junta politeísmo aparente com monoteísmo profundo (Brahman)", cor: "from-orange-500 to-red-700" },
        { id: "so-mono", emoji: "🌌", titulo: "É só monoteísmo", cor: "from-indigo-500 to-purple-700" },
      ], correta: "junta", feedbackAcerto: "Perfeito! Muitas divindades como manifestações de UM Absoluto.", feedbackErro: "Hinduísmo é COMPLEXO: parece politeísmo, mas muitas escolas veem tudo como manifestações de UM." },
      { id: "q3", pergunta: "PANTEÍSMO é a ideia de que:", fotoUrl: panteismo, cards: [
        { id: "tudo", emoji: "🌍", titulo: "O divino está EM TUDO — natureza, seres", cor: "from-emerald-500 to-green-700" },
        { id: "alem", emoji: "🌌", titulo: "Só existe deus no céu", cor: "from-slate-400 to-gray-600" },
        { id: "nada", emoji: "❌", titulo: "Não existe divino", cor: "from-red-500 to-rose-700" },
      ], correta: "tudo", feedbackAcerto: "Isso! 'Pan' = tudo. Divino presente em cada elemento da natureza.", feedbackErro: "PANTEÍSMO = divino EM TUDO. Muito comum em tradições indígenas." },
    ],
    falaFinal: "Radar teológico afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados brasileiros onde as TRÊS ideias de divindade convivem em cidades grandes.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "BA", "PR"], pergunta: "5 estados onde igrejas monoteístas, templos hindus/budistas e tradições indígenas/afro convivem?" },
    falaFinal: "SP, RJ, MG, BA, PR. Diversidade teológica plena.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "História da ideia de divindade — como ela mudou ao longo da humanidade?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Evolução histórica:",
    paradas: [
      { id: "animismo", emoji: "🌳", rotulo: "1. ANIMISMO (30.000 a.C.+)", descricao: "As primeiras tradições viam espíritos em tudo — animais, plantas, rios (panteísmo antigo)." },
      { id: "politeismo", emoji: "🏛️", rotulo: "2. POLITEÍSMO (3000 a.C.+)", descricao: "Com cidades e agricultura, surgiram panteões: deuses egípcios, mesopotâmicos, gregos, romanos." },
      { id: "monoteismo", emoji: "🕎", rotulo: "3. MONOTEÍSMO (1500 a.C.+)", descricao: "Judaísmo formulou a ideia radical: UM só Deus criador. Cristianismo e islamismo herdaram." },
      { id: "sinteses", emoji: "🕉️", rotulo: "4. SÍNTESES sofisticadas", descricao: "Hinduísmo, budismo (não-teísta) e outras tradições combinaram as visões de formas complexas." },
      { id: "dialogo", emoji: "🤝", rotulo: "5. DIÁLOGO atual", descricao: "Hoje, as três visões dialogam. Nenhuma é considerada 'mais evoluída' — são modos diferentes." },
    ],
    ordemCerta: ["animismo", "politeismo", "monoteismo", "sinteses", "dialogo"],
    feedbackAcerto: "Perfeito! Animismo → politeísmo → monoteísmo → sínteses → diálogo.",
    feedbackErro: "A ordem histórica: ANIMISMO, POLITEÍSMO, MONOTEÍSMO, SÍNTESES, DIÁLOGO atual.",
    falaFinal: "5 passos. Milhares de anos de reflexão humana.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 6 — Ideias de Divindade",
    paragrafos: [
      { id: "p1", texto: "MONOTEÍSMO é a crença em UM só Deus, criador de tudo. Judaísmo, cristianismo e islamismo são as três grandes tradições monoteístas, todas com raízes comuns no Oriente Médio.", chaves: ["monoteísmo", "um"] },
      { id: "p2", texto: "POLITEÍSMO é a crença em MUITOS deuses, cada um com funções específicas. O hinduísmo parece politeísta (Brahma, Vishnu, Shiva, milhares de divindades), mas muitos hindus veem todos como manifestações de UM Absoluto: Brahman.", chaves: ["politeísmo", "muitos"] },
      { id: "p3", texto: "PANTEÍSMO é a crença de que o divino está EM TUDO — cada árvore, animal, rio, pessoa. Tradições indígenas do Brasil, do mundo e o xintoísmo japonês têm forte panteísmo.", chaves: ["panteísmo", "em tudo"] },
      { id: "p4", texto: "Nenhuma das três ideias é mais 'evoluída' que as outras. São MODOS diferentes de imaginar o mistério do sagrado. Todas merecem IGUAL respeito acadêmico e humano.", chaves: ["igual respeito"] },
    ],
    falaFinal: "Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TEÓLOGO! Cada rodada mostra uma frase de uma tradição. Qual ideia de divindade?",
    instrucao: "⏱️ Que tipo de divindade é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "mono", emoji: "🌌", rotulo: "Monoteísmo" },
      { id: "poli", emoji: "🕉️", rotulo: "Politeísmo" },
      { id: "pan", emoji: "🌳", rotulo: "Panteísmo" },
      { id: "misto", emoji: "🔄", rotulo: "Misto (mono + poli)" },
      { id: "n-teista", emoji: "☸️", rotulo: "Não-teísta (sem deus criador)" },
      { id: "trin", emoji: "☘️", rotulo: "Monoteísmo trinitário" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Judaísmo", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "'Ouve, Israel: o Senhor é UM'", emoji: "🌌", cor: "from-yellow-400 to-amber-600" }, contexto: "Shemá — profissão de fé judaica.", pecaCertaId: "mono", feedbackAcerto: "Isso! Monoteísmo estrito.", feedbackErro: "É MONOTEÍSMO — o Shemá afirma UM só Deus." },
      { id: "r2", municipioA: { nome: "Grécia antiga", emoji: "🏛️", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Zeus, Atena, Poseidon...", emoji: "⚡", cor: "from-cyan-400 to-blue-600" }, contexto: "Cada deus tem um domínio próprio.", pecaCertaId: "poli", feedbackAcerto: "Perfeito! Politeísmo grego.", feedbackErro: "É POLITEÍSMO — muitos deuses com funções." },
      { id: "r3", municipioA: { nome: "Indígena guarani", emoji: "🌳", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "'Sagrado em cada árvore'", emoji: "🌿", cor: "from-teal-400 to-emerald-600" }, contexto: "Divino presente em toda a natureza.", pecaCertaId: "pan", feedbackAcerto: "Isso! Panteísmo.", feedbackErro: "É PANTEÍSMO — divino em tudo." },
      { id: "r4", municipioA: { nome: "Hinduísmo", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Muitas divindades = UM Brahman", emoji: "🌌", cor: "from-amber-400 to-orange-600" }, contexto: "Politeísmo aparente + monoteísmo profundo.", pecaCertaId: "misto", feedbackAcerto: "Perfeito! Misto sofisticado.", feedbackErro: "É MISTO — hinduísmo junta as duas visões." },
      { id: "r5", municipioA: { nome: "Budismo Theravada", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Sem deus criador", emoji: "🧘", cor: "from-orange-400 to-amber-600" }, contexto: "Ensina o caminho, não afirma um deus criador.", pecaCertaId: "n-teista", feedbackAcerto: "Isso! Budismo é não-teísta.", feedbackErro: "É NÃO-TEÍSTA — budismo não afirma um deus criador." },
      { id: "r6", municipioA: { nome: "Cristianismo", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Pai, Filho e Espírito — UM só", emoji: "☘️", cor: "from-indigo-400 to-blue-700" }, contexto: "Um só Deus em três pessoas.", pecaCertaId: "trin", feedbackAcerto: "Boa! Monoteísmo trinitário cristão.", feedbackErro: "É TRINITÁRIO — cristianismo afirma um só Deus em três pessoas." },
    ],
    falaFinal: "6 visões distinguidas! Teólogo formado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: a distribuição aproximada da humanidade nas grandes ideias de divindade.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "mono", rotulo: "MONOTEÍSMO (~56%)", emoji: "🌌", percentual: 56, cor: "#6366f1", descricao: "Cristianismo (~31%), islamismo (~25%), judaísmo (~0,2%). Juntos, a maioria da população mundial.", exemplos: ["✝️", "☪️", "🕎"] },
      { id: "outros", rotulo: "POLI + PAN + NÃO-TEÍSTAS (~44%)", emoji: "🌍", percentual: 44, cor: "#10b981", descricao: "Hinduísmo (misto), budismo (não-teísta), tradições indígenas e afro (panteístas), sem religião — enorme diversidade.", exemplos: ["🕉️", "☸️", "🌳", "🥁"] },
    ],
    falaFinal: "Distribuição aproximada. Mundo plural.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "As TRÊS grandes tradições monoteístas do mundo são:", opcoes: [
        { id: "a", texto: "Hinduísmo, budismo, xintoísmo", correta: false },
        { id: "b", texto: "Judaísmo, cristianismo e islamismo", correta: true },
        { id: "c", texto: "Umbanda, candomblé, xamanismo", correta: false },
      ], feedbackAcerto: "Isso! As três grandes tradições monoteístas — todas com raízes no Oriente Médio.", feedbackErro: "As três monoteístas são JUDAÍSMO, CRISTIANISMO e ISLAMISMO." },
      { id: "av2", pergunta: "PANTEÍSMO é a ideia de que:", opcoes: [
        { id: "a", texto: "Existe um só deus", correta: false },
        { id: "b", texto: "O divino está EM TUDO — natureza e seres", correta: true },
        { id: "c", texto: "Não existe divino", correta: false },
      ], feedbackAcerto: "Perfeito! 'Pan' = tudo. Divino em toda a natureza.", feedbackErro: "PANTEÍSMO = divino EM TUDO — 'pan' significa 'tudo'." },
      { id: "av3", pergunta: "Qual das ideias é MAIS EVOLUÍDA?", opcoes: [
        { id: "a", texto: "Monoteísmo, porque veio depois", correta: false },
        { id: "b", texto: "Nenhuma — são modos diferentes de imaginar o sagrado, ambas com longa história", correta: true },
        { id: "c", texto: "Politeísmo", correta: false },
      ], feedbackAcerto: "Isso! Nenhuma é 'mais evoluída' — são modos diferentes e legítimos.", feedbackErro: "NENHUMA é mais evoluída. São modos legítimos de imaginar o sagrado." },
    ],
    selo: { nome: "Investigador da Divindade", subtitulo: "Insígnia das Ideias de Divindade", emoji: "🌟", cor: "from-indigo-400 to-purple-600" },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador da Divindade" },
};
