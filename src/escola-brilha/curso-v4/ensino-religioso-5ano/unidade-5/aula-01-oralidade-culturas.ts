import type { AulaGeoV1 } from "../../types";
import { url as capoeira } from "@/assets/ensino-religioso-5ano/u5-capoeira.jpg.asset.json";
import { url as cigana } from "@/assets/ensino-religioso-5ano/u5-cigana.jpg.asset.json";
import { url as quilombola } from "@/assets/ensino-religioso-5ano/u5-quilombola.jpg.asset.json";
import { url as indigena } from "@/assets/ensino-religioso-5ano/05-indigena.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 5 · Aula 01
 * "Oralidade nas Culturas Indígenas, Afro e Ciganas" — EF05ER05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-oralidade-culturas",
  titulo: "Sabedorias que Chegaram pela Voz",
  iconeTrilha: "🥁",
  bncc: ["EF05ER05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: capoeira, uma roda inteira ensinando ao mesmo tempo.",
    mapaUrl: capoeira,
    imagemDestaqueUrl: capoeira,
    aurora:
      "Explorador, olha essa roda. Berimbau tocando, todo mundo em branco, cantos antigos. Nada disso está escrito em manual. Chegou até aqui atravessando o mar da África, escondido nos porões dos navios negreiros, e continuou vivo na boca de quem resistiu. É pura oralidade sagrada.",
    falaFinal:
      "Nesta aula, vamos honrar três matrizes que sustentam boa parte da religiosidade brasileira: INDÍGENA, AFRO-BRASILEIRA e CIGANA.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: as tradições indígena, afro e cigana têm menos valor porque quase não têm livros?",
    pergunta: "Sem livro = sem valor?",
    opcoes: [
      { id: "nao", titulo: "NÃO — têm valor igual", subtitulo: "guardam sabedoria pela voz", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
      { id: "sim", titulo: "Sim, valem menos", subtitulo: "só livro é sério", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Sabedoria não depende de papel. Valor é igual.",
    feedbackErro: "Cuidado com esse preconceito. Sabedoria não depende de papel. Todas têm o mesmo valor.",
    falaFinal: "Sem preconceito. Bora conhecer com respeito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave pra hoje.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "matriz", capa: "1. Matriz religiosa", emoji: "🌳", cor: "from-emerald-500 to-green-700", conteudo: "MATRIZ RELIGIOSA é a RAIZ, a origem cultural de onde vem uma tradição. No Brasil temos matriz indígena (originária), matriz africana (dos povos trazidos escravizados) e matriz europeia (dos colonizadores).", exemplo: "Ex.: candomblé tem matriz africana; pajelança tem matriz indígena.", fotoUrl: afro },
      { id: "sincret", capa: "2. Resistência cultural", emoji: "✊", cor: "from-red-500 to-rose-700", conteudo: "RESISTÊNCIA CULTURAL é o esforço de um povo pra MANTER sua identidade quando querem apagá-la. Muitas tradições afro e indígenas sobreviveram assim, escondidas ou disfarçadas.", exemplo: "Ex.: orixás cultuados escondidos atrás de santos católicos.", fotoUrl: quilombola },
      { id: "cigana", capa: "3. Povo Rom / cigano", emoji: "🎪", cor: "from-purple-500 to-fuchsia-700", conteudo: "Os POVOS CIGANOS (Rom, Calon, Sinti) vieram da Índia há mais de mil anos e viajaram pelo mundo. Guardam suas crenças, línguas e cantos pela ORALIDADE, sem escrita oficial.", exemplo: "Ex.: no Brasil há comunidades ciganas em MG, GO, BA.", fotoUrl: cigana },
    ],
    falaFinal: "Matriz, resistência, povos ciganos. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 expressões orais religiosas ou espirituais que vivem no Brasil. Escute com respeito.",
    instrucao: "Toque em cada balão",
    mapaUrl: afro,
    pontos: [
      { id: "indigena", x: 25, y: 30, emoji: "🪶", cor: "from-emerald-500 to-green-700", titulo: "PAJELANÇA INDÍGENA", texto: "Os pajés dos povos originários conhecem as ervas, os cantos de cura e as histórias da criação. Aprendem escutando os mais velhos por muitos anos. É saber MILENAR guardado só na palavra.", fotoUrl: indigena },
      { id: "candomble", x: 70, y: 30, emoji: "🥁", cor: "from-red-500 to-rose-700", titulo: "CANDOMBLÉ E UMBANDA", texto: "Nos terreiros, os ITANS (histórias dos orixás) e os cantos são passados de pai/mãe de santo pra filho de santo. Cada casa guarda um jeito próprio, ensinado só oralmente por respeito.", fotoUrl: afro },
      { id: "quilombola", x: 30, y: 70, emoji: "✊", cor: "from-amber-500 to-orange-700", titulo: "TRADIÇÕES QUILOMBOLAS", texto: "Nas comunidades quilombolas do Brasil (Kalunga, Conceição das Crioulas), a religiosidade mistura fé cristã, herança africana e memória do cativeiro. Rezas, jongos e reinados sobrevivem na voz.", fotoUrl: quilombola },
      { id: "cigana", x: 75, y: 68, emoji: "🎪", cor: "from-purple-500 to-fuchsia-700", titulo: "ESPIRITUALIDADE CIGANA", texto: "Os povos ciganos guardam suas crenças em Sara Kali, seus rituais de casamento e seus cantos SEM escrita. A líder mais velha ensina as meninas; os anciãos ensinam os meninos.", fotoUrl: cigana },
    ],
    falaFinal: "Quatro sabedorias vivas. Todas legítimas. Todas nossas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O candomblé tem matriz religiosa:", fotoUrl: afro, cards: [{ id: "afr", emoji: "🌍", titulo: "Africana", cor: "from-emerald-500 to-green-700" }, { id: "eur", emoji: "⛪", titulo: "Europeia", cor: "from-sky-500 to-blue-700" }, { id: "chi", emoji: "🏮", titulo: "Chinesa", cor: "from-red-500 to-rose-700" }], correta: "afr", feedbackAcerto: "Isso! Matriz africana, trazida pelos povos escravizados.", feedbackErro: "Candomblé tem matriz AFRICANA, herdada dos povos iorubás e outros." },
      { id: "q2", pergunta: "Os pajés indígenas aprendem seus saberes principalmente por meio de:", fotoUrl: indigena, cards: [{ id: "esc", emoji: "🗣️", titulo: "Escuta dos mais velhos", cor: "from-emerald-500 to-green-700" }, { id: "livr", emoji: "📖", titulo: "Livros da faculdade", cor: "from-slate-400 to-gray-600" }, { id: "int", emoji: "💻", titulo: "Só pela internet", cor: "from-sky-500 to-blue-700" }], correta: "esc", feedbackAcerto: "Perfeito! Escuta paciente dos mais velhos, por muitos anos.", feedbackErro: "Pajés aprendem ESCUTANDO os mais velhos por muitos anos." },
      { id: "q3", pergunta: "Os povos ciganos vieram originalmente da:", fotoUrl: cigana, cards: [{ id: "ind", emoji: "🕉️", titulo: "Índia", cor: "from-purple-500 to-fuchsia-700" }, { id: "eua", emoji: "🗽", titulo: "Estados Unidos", cor: "from-sky-500 to-blue-700" }, { id: "aust", emoji: "🦘", titulo: "Austrália", cor: "from-amber-500 to-orange-700" }], correta: "ind", feedbackAcerto: "Isso! Saíram da Índia há mais de mil anos.", feedbackErro: "Vieram da ÍNDIA há mais de mil anos e se espalharam pelo mundo." },
    ],
    falaFinal: "Radar afinado. Você conhece as raízes.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados com forte presença dessas três matrizes (indígena, afro, cigana).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["AM", "BA", "MG", "GO", "MA"], pergunta: "Quais 5 estados têm forte presença indígena, afro-brasileira ou cigana?" },
    falaFinal: "Amazonas (indígena), Bahia (afro), Minas (ciganos calons + congados), Goiás (calons), Maranhão (Tambor de Mina). Mosaico vivo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como uma tradição religiosa afro sobreviveu no Brasil apesar da escravidão.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como resistiu?",
    paradas: [
      { id: "trans", emoji: "⛵", rotulo: "1. TRAVESSIA forçada", descricao: "Milhões de africanos foram trazidos escravizados; trouxeram na memória seus cantos, orixás e histórias." },
      { id: "prob", emoji: "🚫", rotulo: "2. PROIBIÇÃO", descricao: "Colonizadores proibiram cultuar os orixás e falar as línguas africanas." },
      { id: "disf", emoji: "🎭", rotulo: "3. DISFARCE inteligente", descricao: "Cada orixá foi associado a um santo católico, permitindo culto escondido." },
      { id: "terr", emoji: "🏘️", rotulo: "4. TERREIROS surgem", descricao: "Depois da abolição, foram fundados terreiros abertos onde a tradição pôde florescer." },
      { id: "hoje", emoji: "🌱", rotulo: "5. VIVA hoje", descricao: "Milhões de brasileiros são candomblecistas ou umbandistas — e a Constituição garante esse direito." },
    ],
    ordemCerta: ["trans", "prob", "disf", "terr", "hoje"],
    feedbackAcerto: "Isso! Travessia → proibição → disfarce → terreiros → viva.",
    feedbackErro: "Ordem: TRAVESSIA → PROIBIÇÃO → DISFARCE (santos católicos) → TERREIROS → VIVA hoje.",
    falaFinal: "5 passos de resistência. Sobreviveu pela voz.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 5 — Sabedorias Orais",
    paragrafos: [
      { id: "p1", texto: "As tradições religiosas de MATRIZ INDÍGENA, AFRICANA e CIGANA guardam sua sabedoria principalmente pela ORALIDADE. Sem livro não significa sem valor.", chaves: ["matriz", "oralidade"] },
      { id: "p2", texto: "A pajelança indígena, o candomblé, a umbanda, as tradições quilombolas e a espiritualidade cigana são patrimônios culturais BRASILEIROS — parte da nossa história.", chaves: ["patrimônios", "brasileiros"] },
      { id: "p3", texto: "Muitas dessas tradições sofreram (e ainda sofrem) PRECONCEITO. A Constituição protege o direito de cultuar, e a escola tem o dever de ensinar sobre elas com respeito.", chaves: ["preconceito", "constituição"] },
      { id: "p4", texto: "Aprender sobre essas matrizes NÃO é abandonar a própria fé. É reconhecer as raízes do Brasil e respeitar quem é diferente de você.", chaves: ["raízes", "respeitar"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RAÍZES DO BRASIL! Ligue cada elemento à matriz correta.",
    instrucao: "⏱️ De qual matriz vem este elemento?",
    duracaoSegundos: 12,
    pecas: [
      { id: "indigena", emoji: "🪶", rotulo: "Indígena originária" },
      { id: "africana", emoji: "🥁", rotulo: "Africana / afro-brasileira" },
      { id: "cigana", emoji: "🎪", rotulo: "Cigana" },
      { id: "europeia", emoji: "⛪", rotulo: "Europeia cristã" },
      { id: "quilombola", emoji: "✊", rotulo: "Quilombola (mescla)" },
      { id: "oriental", emoji: "☸️", rotulo: "Asiática" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Orixás e atabaques", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Roupas brancas nos terreiros", emoji: "⚪", cor: "from-slate-300 to-slate-500" }, contexto: "Culto trazido pelos povos iorubás e bantos.", pecaCertaId: "africana", feedbackAcerto: "Isso! Matriz africana.", feedbackErro: "Vem da matriz AFRICANA, trazida pelos povos escravizados." },
      { id: "r2", municipioA: { nome: "Pajé e ervas de cura", emoji: "🌿", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Cantos ao redor do fogo", emoji: "🔥", cor: "from-amber-400 to-orange-600" }, contexto: "Saber milenar dos povos originários.", pecaCertaId: "indigena", feedbackAcerto: "Perfeito! Matriz indígena originária.", feedbackErro: "Vem da matriz INDÍGENA originária." },
      { id: "r3", municipioA: { nome: "Sara Kali", emoji: "🎪", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Acampamentos coloridos", emoji: "🏕️", cor: "from-pink-400 to-purple-600" }, contexto: "Padroeira das comunidades ciganas do mundo.", pecaCertaId: "cigana", feedbackAcerto: "Isso! Tradição cigana.", feedbackErro: "Vem da tradição CIGANA, com Sara Kali como figura central." },
      { id: "r4", municipioA: { nome: "Festa de santo", emoji: "⛪", cor: "from-blue-400 to-sky-600" }, municipioB: { nome: "Novena e procissão", emoji: "🙏", cor: "from-indigo-400 to-blue-700" }, contexto: "Devoção herdada da colonização portuguesa.", pecaCertaId: "europeia", feedbackAcerto: "Perfeito! Matriz europeia católica.", feedbackErro: "Vem da matriz EUROPEIA cristã." },
      { id: "r5", municipioA: { nome: "Comunidade Kalunga", emoji: "✊", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Jongo e reinado", emoji: "👑", cor: "from-red-400 to-amber-600" }, contexto: "Comunidades formadas por descendentes de escravizados.", pecaCertaId: "quilombola", feedbackAcerto: "Isso! Tradição quilombola — mescla afro e cristã.", feedbackErro: "É QUILOMBOLA: mescla herança africana e catolicismo popular." },
      { id: "r6", municipioA: { nome: "Templo budista", emoji: "☸️", cor: "from-orange-400 to-yellow-600" }, municipioB: { nome: "Meditação e sutras", emoji: "🧘", cor: "from-amber-400 to-orange-600" }, contexto: "Chegou com imigrantes japoneses.", pecaCertaId: "oriental", feedbackAcerto: "Perfeito! Matriz asiática, chegou com imigração japonesa.", feedbackErro: "É ASIÁTICA: chegou com a imigração japonesa e outras." },
    ],
    falaFinal: "6 raízes reconhecidas. Brasil é mistura mesmo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as principais matrizes religiosas que formaram o Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "principais", rotulo: "Matrizes principais (~80%)", emoji: "🌳", percentual: 80, cor: "#dc2626", descricao: "Três matrizes são a base: INDÍGENA (originária da terra), AFRICANA (trazida pelos povos escravizados) e EUROPEIA (dos colonizadores cristãos). Da mistura delas nasceu grande parte da religiosidade popular brasileira.", exemplos: ["🪶 Indígena", "🥁 Africana", "⛪ Europeia"] },
      { id: "outras", rotulo: "Outras matrizes (~20%)", emoji: "🌍", percentual: 20, cor: "#3b82f6", descricao: "Vieram depois pela imigração: asiática (budismo, xintoísmo), oriente médio (islamismo, judaísmo), cigana e outras.", exemplos: ["☸️ Budista", "🌙 Islâmica", "🎪 Cigana"] },
    ],
    falaFinal: "Três raízes principais, muitas mais convivendo. Brasil é mosaico.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "As tradições indígenas, afro-brasileiras e ciganas guardam seus saberes principalmente por:", opcoes: [{ id: "a", texto: "Oralidade — voz dos mais velhos", correta: true }, { id: "b", texto: "Livros didáticos", correta: false }, { id: "c", texto: "Reels e vídeos", correta: false }], feedbackAcerto: "Isso! Voz dos mais velhos, tradição milenar.", feedbackErro: "Guardam pela ORALIDADE — voz dos mais velhos." },
      { id: "av2", pergunta: "O candomblé sobreviveu no Brasil colonial principalmente porque:", opcoes: [{ id: "a", texto: "Foi sempre permitido", correta: false }, { id: "b", texto: "Se disfarçou associando orixás a santos católicos", correta: true }, { id: "c", texto: "Foi escrito em livros pelos colonizadores", correta: false }], feedbackAcerto: "Perfeito! Resistência cultural inteligente.", feedbackErro: "Sobreviveu com DISFARCE: cada orixá associado a um santo católico." },
      { id: "av3", pergunta: "A postura correta em relação às tradições indígenas, afro e ciganas é:", opcoes: [{ id: "a", texto: "Ignorar porque não são cristãs", correta: false }, { id: "b", texto: "Respeitar como patrimônio cultural brasileiro", correta: true }, { id: "c", texto: "Rir dos rituais", correta: false }], feedbackAcerto: "Isso! Patrimônio brasileiro, direito garantido.", feedbackErro: "RESPEITAR como patrimônio cultural do próprio Brasil." },
    ],
    selo: { nome: "Raízes do Brasil", subtitulo: "Insígnia das Matrizes", emoji: "🌳", cor: "from-red-400 to-rose-600" },
    falaFinal: "Insígnia conquistada! Você reconhece as raízes que fizeram o Brasil.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Raízes do Brasil" },
};
