import type { AulaGeoV1 } from "../../types";
import { url as contador } from "@/assets/ensino-religioso-5ano/u4-contador.jpg.asset.json";
import { url as griot } from "@/assets/ensino-religioso-5ano/u4-griot.jpg.asset.json";
import { url as ancestrais } from "@/assets/ensino-religioso-5ano/u3-ancestrais.jpg.asset.json";
import { url as indigena } from "@/assets/ensino-religioso-5ano/05-indigena.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 4 · Aula 01
 * "A Força da Palavra Falada" — EF05ER04
 *
 * Tradição oral como forma legítima e potente de preservar memória religiosa.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-tradicao-oral",
  titulo: "A Força da Palavra Falada",
  iconeTrilha: "🗣️",
  bncc: ["EF05ER04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: um velho contando uma história ao redor do fogo.",
    mapaUrl: contador,
    imagemDestaqueUrl: contador,
    aurora:
      "Explorador, olha esse ancião. A luz do fogo, as crianças em volta. Ele não abre livro nenhum. Só a voz. E naquele momento ele passa pra próxima geração histórias que os avós dos avós dele contaram. Sem livro. Só palavra viva.",
    falaFinal:
      "Nesta aula, vamos entender por que a TRADIÇÃO ORAL é uma das formas mais antigas e potentes de guardar o sagrado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: entre livro e palavra falada, qual guarda memória há MAIS tempo na história da humanidade?",
    pergunta: "Qual é mais antiga?",
    opcoes: [
      { id: "oral", titulo: "PALAVRA FALADA", subtitulo: "muito antes da escrita", emoji: "🗣️", cor: "from-amber-400 to-orange-600" },
      { id: "livro", titulo: "LIVRO escrito", subtitulo: "sempre existiu", emoji: "📖", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "oral",
    feedbackAcerto: "Isso! Oralidade é muito mais antiga. Escrita surgiu tarde na história.",
    feedbackErro: "A oralidade é muito mais antiga. Escrita tem cerca de 5.500 anos. Fala e memória, milhares a mais.",
    falaFinal: "Palavra veio muito antes. Bora entender o poder dela.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "oralidade", capa: "1. Oralidade", emoji: "🗣️", cor: "from-amber-500 to-orange-700", conteudo: "ORALIDADE é a transmissão de conhecimento pela PALAVRA FALADA, de pessoa pra pessoa, sem depender de escrita. É a forma mais antiga de guardar memória.", exemplo: "Ex.: sua avó te ensina uma reza que a mãe dela ensinou.", fotoUrl: contador },
      { id: "griot", capa: "2. Griot / contador", emoji: "🎶", cor: "from-red-500 to-rose-700", conteudo: "GRIOT (na África) e CONTADOR (em várias culturas) são pessoas TREINADAS pra guardar e contar as histórias sagradas do povo. Um griot pode memorizar centenas de horas de história.", exemplo: "Ex.: um griot do Mali conhece a genealogia de gerações inteiras.", fotoUrl: griot },
      { id: "transmissao", capa: "3. Transmissão viva", emoji: "🌱", cor: "from-emerald-500 to-green-700", conteudo: "TRANSMISSÃO ORAL é viva: cada pessoa que conta adiciona um gesto, uma emoção, uma ênfase. Não é 'menos séria' que escrita — é diferente e cheia de vida.", exemplo: "Ex.: um mesmo mito pode ganhar detalhes conforme quem conta.", fotoUrl: ancestrais },
    ],
    falaFinal: "Oralidade, griot, transmissão viva. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Vamos conhecer 4 tradições religiosas que se apoiam FORTEMENTE na palavra falada.",
    instrucao: "Toque em cada balão",
    mapaUrl: griot,
    pontos: [
      { id: "africana", x: 25, y: 30, emoji: "🎶", cor: "from-red-500 to-rose-700", titulo: "GRIOTS DA ÁFRICA OCIDENTAL", texto: "Nos reinos do Mali, Senegal e Gâmbia, os griots são a MEMÓRIA VIVA das famílias reais e das tradições religiosas. Cantam histórias com a kora, um instrumento de cordas sagrado.", fotoUrl: griot },
      { id: "indigena", x: 70, y: 30, emoji: "🪶", cor: "from-emerald-500 to-green-700", titulo: "PAJÉS E ANCIÃOS INDÍGENAS", texto: "Não existe 'livro sagrado' na maioria dos povos indígenas — o SAGRADO está na palavra dos anciãos, nos cantos, nos rituais transmitidos há mil anos, de boca em boca.", fotoUrl: indigena },
      { id: "afro", x: 30, y: 70, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "TERREIROS AFRO-BRASILEIROS", texto: "Nos terreiros de candomblé, umbanda e tambor de mina, os ORIXÁS e as histórias sagradas (os itans) são aprendidos ESCUTANDO os mais velhos, os pais e mães de santo.", fotoUrl: afro },
      { id: "veda", x: 75, y: 68, emoji: "🕉️", cor: "from-sky-500 to-blue-700", titulo: "VEDAS HINDUÍSTAS", texto: "Os Vedas (textos sagrados do hinduísmo) foram TRANSMITIDOS ORALMENTE por mais de 3.000 anos antes de serem escritos. Os brâmanes memorizavam palavra por palavra.", fotoUrl: contador },
    ],
    falaFinal: "Quatro tradições, milhares de anos guardadas na boca de quem lembra.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que faz um GRIOT?", fotoUrl: griot, cards: [{ id: "guarda", emoji: "🎶", titulo: "Guarda e conta histórias sagradas", cor: "from-amber-500 to-orange-700" }, { id: "cozinh", emoji: "🍲", titulo: "Cozinha para o rei", cor: "from-slate-400 to-gray-600" }, { id: "planta", emoji: "🌾", titulo: "Cuida das plantas", cor: "from-emerald-500 to-green-700" }], correta: "guarda", feedbackAcerto: "Isso! Griot é memória viva do povo.", feedbackErro: "GRIOT guarda e conta as histórias sagradas do povo com música e voz." },
      { id: "q2", pergunta: "Os textos sagrados hindus (Vedas) foram, primeiro:", fotoUrl: contador, cards: [{ id: "oral", emoji: "🗣️", titulo: "Transmitidos ORALMENTE", cor: "from-amber-500 to-orange-700" }, { id: "livro", emoji: "📖", titulo: "Escritos em livros logo no início", cor: "from-slate-400 to-gray-600" }, { id: "cant", emoji: "🎵", titulo: "Cantados só em festas", cor: "from-sky-500 to-blue-700" }], correta: "oral", feedbackAcerto: "Perfeito! Mais de 3.000 anos só na palavra falada.", feedbackErro: "Foram transmitidos ORALMENTE por milhares de anos antes de virarem escrita." },
      { id: "q3", pergunta: "Tradição oral é MENOS séria que texto escrito?", fotoUrl: indigena, cards: [{ id: "nao", emoji: "🤝", titulo: "Não — é igualmente séria", cor: "from-emerald-500 to-green-700" }, { id: "sim", emoji: "❌", titulo: "Sim, é mais fraca", cor: "from-red-500 to-rose-700" }, { id: "sobra", emoji: "🗑️", titulo: "É só quem não sabe escrever", cor: "from-slate-400 to-gray-600" }], correta: "nao", feedbackAcerto: "Isso! Oralidade tem sabedoria própria — cheia de vida.", feedbackErro: "Oralidade NÃO é fraca. Guarda séculos de sabedoria com técnica própria." },
    ],
    falaFinal: "Palavra falada é séria como escrita. Só que diferente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados com forte tradição ORAL religiosa (indígena, afro, popular).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["AM", "MA", "BA", "PE", "MG"], pergunta: "Quais 5 estados têm forte oralidade religiosa (pajés, terreiros, contadores)?" },
    falaFinal: "Amazonas (pajés), Maranhão (Tambor de Mina), Bahia (candomblé), Pernambuco (Xangô), Minas (congados e folias). Palavra viva.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como uma história sagrada atravessa gerações pela oralidade.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como a história atravessa gerações?",
    paradas: [
      { id: "escuta", emoji: "👂", rotulo: "1. CRIANÇA escuta", descricao: "Uma criança escuta os mais velhos contando ao redor do fogo, na cozinha ou no terreiro." },
      { id: "memoriza", emoji: "🧠", rotulo: "2. MEMORIZA por repetição", descricao: "Escuta a mesma história várias vezes até saber de cor." },
      { id: "participa", emoji: "🎶", rotulo: "3. PARTICIPA dos cantos", descricao: "Começa a cantar junto, a repetir os gestos, a entrar no ritual." },
      { id: "conta", emoji: "🗣️", rotulo: "4. Um dia CONTA sozinha", descricao: "Quando adulta, essa criança conta pra outras crianças." },
      { id: "vive", emoji: "🌱", rotulo: "5. Tradição VIVE", descricao: "Assim a memória sagrada nunca morre — atravessa séculos sem precisar de papel." },
    ],
    ordemCerta: ["escuta", "memoriza", "participa", "conta", "vive"],
    feedbackAcerto: "Isso! Escuta → memoriza → participa → conta → tradição viva.",
    feedbackErro: "Primeiro ESCUTA, depois MEMORIZA, depois PARTICIPA, depois CONTA, e a tradição VIVE.",
    falaFinal: "5 passos, uma tradição milenar.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 4 — Palavra Falada",
    paragrafos: [
      { id: "p1", texto: "ORALIDADE é a transmissão do sagrado pela PALAVRA FALADA. É a forma mais antiga da humanidade guardar memória — muito antes da escrita existir.", chaves: ["oralidade", "falada"] },
      { id: "p2", texto: "Os GRIOTS africanos, os PAJÉS indígenas, os pais e mães de SANTO nos terreiros, os BRÂMANES hindus — todos guardam tradições sagradas na memória e passam pela voz.", chaves: ["griots", "pajés", "santo"] },
      { id: "p3", texto: "Oralidade NÃO é menos séria que escrita. Os Vedas foram transmitidos por 3.000 anos só pela boca, sem perder palavra. É outra forma de rigor.", chaves: ["séria", "rigor"] },
      { id: "p4", texto: "Cada vez que um mais velho conta uma história pra uma criança, a tradição continua viva. Escutar os mais velhos é ato de respeito e aprendizagem.", chaves: ["escutar", "respeito"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo VOZ DOS ANTIGOS! Ligue cada tradição à sua figura oral.",
    instrucao: "⏱️ Quem guarda essa tradição pela voz?",
    duracaoSegundos: 12,
    pecas: [
      { id: "griot", emoji: "🎶", rotulo: "Griot" },
      { id: "paje", emoji: "🪶", rotulo: "Pajé / Ancião indígena" },
      { id: "santo", emoji: "🥁", rotulo: "Pai / Mãe de santo" },
      { id: "bramane", emoji: "🕉️", rotulo: "Brâmane" },
      { id: "rabino", emoji: "🕎", rotulo: "Rabino (Torá oral)" },
      { id: "sheik", emoji: "🌙", rotulo: "Sheik / recitador" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Mali / Senegal", emoji: "🎶", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Kora e canto", emoji: "🎵", cor: "from-amber-400 to-orange-600" }, contexto: "Memória viva dos reinos africanos.", pecaCertaId: "griot", feedbackAcerto: "Isso! Griots da África Ocidental.", feedbackErro: "É o GRIOT: mestre da palavra na África Ocidental." },
      { id: "r2", municipioA: { nome: "Aldeia Yanomami", emoji: "🪶", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Cantos e curas", emoji: "🌿", cor: "from-teal-400 to-green-700" }, contexto: "Guardião do saber da floresta.", pecaCertaId: "paje", feedbackAcerto: "Perfeito! Pajés e anciãos indígenas.", feedbackErro: "É o PAJÉ: guarda os cantos, as curas e as histórias da aldeia." },
      { id: "r3", municipioA: { nome: "Terreiro de candomblé", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Itans dos orixás", emoji: "⚪", cor: "from-slate-300 to-slate-500" }, contexto: "Ensinam pela palavra e pelo exemplo.", pecaCertaId: "santo", feedbackAcerto: "Isso! Pais e mães de santo.", feedbackErro: "É o PAI/MÃE DE SANTO: transmite os itans oralmente no terreiro." },
      { id: "r4", municipioA: { nome: "Índia antiga", emoji: "🕉️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Vedas memorizados", emoji: "📿", cor: "from-indigo-400 to-blue-700" }, contexto: "Guardião oral dos textos sagrados hindus.", pecaCertaId: "bramane", feedbackAcerto: "Perfeito! Brâmanes memorizam os Vedas há milênios.", feedbackErro: "É o BRÂMANE: transmitiu os Vedas oralmente por 3.000 anos." },
      { id: "r5", municipioA: { nome: "Comunidade judaica", emoji: "🕎", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Ensinamentos da Torá oral", emoji: "📜", cor: "from-sky-400 to-blue-700" }, contexto: "Ensinamentos guardados junto do texto escrito.", pecaCertaId: "rabino", feedbackAcerto: "Isso! Rabinos guardam a tradição oral judaica.", feedbackErro: "É o RABINO: guarda a Torá oral, tradição paralela à escrita." },
      { id: "r6", municipioA: { nome: "Mundo islâmico", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Recitação do Alcorão", emoji: "🕌", cor: "from-teal-400 to-emerald-600" }, contexto: "Especialista que memoriza todo o texto sagrado.", pecaCertaId: "sheik", feedbackAcerto: "Perfeito! Os hafiz muçulmanos memorizam o Alcorão inteiro.", feedbackErro: "É o SHEIK / hafiz: recita o Alcorão inteiro de memória." },
    ],
    falaFinal: "6 vozes reconhecidas. Você entende o valor da palavra viva.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as tradições religiosas guardam sua memória hoje?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "mista", rotulo: "ORALIDADE + escrita (~70%)", emoji: "🗣️", percentual: 70, cor: "#f59e0b", descricao: "A maioria combina os dois: livros sagrados E ensinamentos passados de boca em boca. Ex.: cristianismo, islamismo, judaísmo, hinduísmo.", exemplos: ["📖 Livro + sermão", "🕌 Alcorão + hafiz"] },
      { id: "oral", rotulo: "ORALIDADE central (~30%)", emoji: "🎶", percentual: 30, cor: "#10b981", descricao: "Algumas tradições apoiam sua memória sagrada QUASE inteira na palavra falada. Ex.: indígenas, afro-brasileiras, ciganas.", exemplos: ["🪶 Pajés", "🥁 Terreiros"] },
    ],
    falaFinal: "Livro E voz. As duas guardam sagrado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Oralidade é uma forma legítima de guardar o sagrado?", opcoes: [{ id: "a", texto: "Não, só livro conta", correta: false }, { id: "b", texto: "Sim, é uma das mais antigas e potentes", correta: true }, { id: "c", texto: "Só quando é escrito depois", correta: false }], feedbackAcerto: "Isso! É legítima e milenar.", feedbackErro: "Sim! Oralidade é forma legítima, milenar e potente." },
      { id: "av2", pergunta: "Um griot é uma pessoa que:", opcoes: [{ id: "a", texto: "Guarda e conta histórias sagradas do povo", correta: true }, { id: "b", texto: "Só canta música moderna", correta: false }, { id: "c", texto: "Não tem função religiosa", correta: false }], feedbackAcerto: "Perfeito! Memória viva do povo africano.", feedbackErro: "GRIOT é o guardião das histórias sagradas do povo." },
      { id: "av3", pergunta: "Nas tradições indígenas, o sagrado está principalmente:", opcoes: [{ id: "a", texto: "Em livros antigos", correta: false }, { id: "b", texto: "Na palavra dos anciãos, nos cantos e rituais", correta: true }, { id: "c", texto: "Só na internet hoje", correta: false }], feedbackAcerto: "Isso! Palavra dos anciãos, cantos e rituais.", feedbackErro: "Está na PALAVRA dos anciãos, nos cantos e rituais transmitidos." },
    ],
    selo: { nome: "Voz dos Antigos", subtitulo: "Insígnia da Palavra Viva", emoji: "🗣️", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você respeita quem guarda o sagrado com a voz.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Voz dos Antigos" },
};
