import type { AulaGeoV1 } from "../../types";
import { url as simbolos } from "@/assets/ensino-religioso-7ano/u4-simbolos.jpg.asset.json";
import { url as dialogo } from "@/assets/ensino-religioso-7ano/u7-dialogo-inter.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-7ano/u1-etica-comum.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 3 · Aula 01
 * "Símbolos Religiosos" — EF07ER03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-simbolos-religiosos",
  titulo: "Símbolos Religiosos",
  iconeTrilha: "✨",
  bncc: ["EF07ER03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: 5 símbolos, 5 tradições.",
    mapaUrl: simbolos,
    imagemDestaqueUrl: simbolos,
    aurora:
      "Investigador, olha nessa mesa: uma cruz cristã, uma estrela de Davi judaica, uma meia-lua com estrela islâmica, um Om hindu e uma roda do Dharma budista. Nenhum é 'mais sagrado' que o outro. Cada um é uma CONDENSAÇÃO de séculos de história, fé e identidade — em uma única forma visual.",
    falaFinal:
      "Hoje a gente aprende a LER esses símbolos. O que cada um significa. De onde veio. E por que continua vivo depois de milênios.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: por que as religiões usam SÍMBOLOS visuais?",
    pergunta: "Pra quê símbolos?",
    opcoes: [
      { id: "decoracao", titulo: "Só pra DECORAR", subtitulo: "questão estética", emoji: "🎨", cor: "from-slate-400 to-gray-600" },
      { id: "identidade", titulo: "Pra IDENTIFICAR e ensinar", subtitulo: "reconhecer o grupo e resumir a fé", emoji: "🧭", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "identidade",
    feedbackAcerto: "Isso! Símbolos condensam identidade e ensinamentos em uma imagem que qualquer um reconhece.",
    feedbackErro: "Vai além de decorar. Símbolos IDENTIFICAM o grupo e RESUMEM séculos de ensinamento em uma forma simples.",
    falaFinal: "Símbolo = identidade + resumo da fé.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "simbolo", capa: "1. Símbolo", emoji: "✨", cor: "from-purple-500 to-fuchsia-700", conteudo: "SÍMBOLO é uma imagem simples que representa uma ideia complexa. A bandeira do Brasil é um símbolo do país — o pano importa menos que a ideia por trás.", exemplo: "Ex.: uma cruz não é 'só duas madeiras'. É um resumo visual da história de Jesus.", fotoUrl: simbolos },
      { id: "identidade", capa: "2. Identidade", emoji: "🪪", cor: "from-sky-500 to-blue-700", conteudo: "Símbolos ajudam grupos a manter IDENTIDADE — reconhecer quem faz parte e o que aquele grupo valoriza. Um judeu vê a estrela de Davi e reconhece seu povo.", exemplo: "Ex.: a kipá que muitos judeus usam na cabeça é símbolo de respeito ao sagrado.", fotoUrl: dialogo },
      { id: "sagrado", capa: "3. Sagrado", emoji: "🌟", cor: "from-amber-500 to-orange-700", conteudo: "SAGRADO é o que uma tradição considera separado do banal, digno de reverência especial. Símbolos religiosos são objetos comuns tratados como sagrados por convenção da tradição.", exemplo: "Ex.: o rosário católico é feito de contas simples, mas se torna sagrado pelo uso na oração.", fotoUrl: etica },
    ],
    falaFinal: "Símbolo, identidade, sagrado. Trinca.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 símbolos religiosos importantes. Toque em cada balão. Sem hierarquia — todos com igual respeito.",
    instrucao: "Toque em cada balão",
    mapaUrl: simbolos,
    pontos: [
      { id: "cruz", x: 20, y: 25, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "CRUZ — cristianismo", texto: "Representa a morte e ressurreição de Jesus. Símbolo universal do cristianismo desde o séc. IV. Aparece em templos, cemitérios, joias e bandeiras (Suíça, Grécia).", fotoUrl: simbolos },
      { id: "estrela", x: 78, y: 25, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "ESTRELA DE DAVI — judaísmo", texto: "Duas triângulos entrelaçados. Símbolo do povo judeu desde a Idade Média. Está na bandeira de Israel. Representa a união entre o divino e o humano.", fotoUrl: dialogo },
      { id: "crescente", x: 50, y: 50, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "MEIA-LUA E ESTRELA — islamismo", texto: "Símbolo mais associado ao islã, embora não seja religioso obrigatório. Vem do Império Otomano. Aparece em bandeiras (Turquia, Paquistão) e no topo de mesquitas.", fotoUrl: simbolos },
      { id: "om", x: 22, y: 75, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "OM (AUM) — hinduísmo", texto: "Som e sinal considerados sagrados. Representa o início do universo. Recitado em meditação e escrito em templos, joias e casas hindus.", fotoUrl: etica },
      { id: "dharma", x: 78, y: 75, emoji: "☸️", cor: "from-yellow-500 to-amber-700", titulo: "RODA DO DHARMA — budismo", texto: "Roda de 8 raios que representa o Caminho Óctuplo ensinado pelo Buda. Está na bandeira da Índia. Símbolo do budismo em todo o mundo.", fotoUrl: dialogo },
    ],
    falaFinal: "5 símbolos. 5 tradições. Todos com histórias longas e sentido preciso.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Um SÍMBOLO religioso serve principalmente pra:", fotoUrl: simbolos, cards: [
        { id: "decorar", emoji: "🎨", titulo: "Só decorar templos", cor: "from-slate-400 to-gray-600" },
        { id: "resumir", emoji: "🧭", titulo: "Identificar o grupo e resumir a fé", cor: "from-purple-500 to-fuchsia-700" },
        { id: "assustar", emoji: "😱", titulo: "Assustar os outros", cor: "from-red-500 to-rose-700" },
      ], correta: "resumir", feedbackAcerto: "Isso! Um símbolo condensa séculos de ideias em uma imagem simples.", feedbackErro: "Símbolo não é decoração nem intimidação. Serve pra identificar o grupo e resumir sua fé." },
      { id: "q2", pergunta: "A RODA DO DHARMA representa:", fotoUrl: dialogo, cards: [
        { id: "sol", emoji: "☀️", titulo: "O sol nascendo", cor: "from-amber-500 to-orange-700" },
        { id: "caminho", emoji: "☸️", titulo: "O Caminho Óctuplo do Buda", cor: "from-yellow-500 to-amber-700" },
        { id: "carro", emoji: "🚗", titulo: "Um carro antigo", cor: "from-slate-400 to-gray-600" },
      ], correta: "caminho", feedbackAcerto: "Perfeito! 8 raios = 8 passos do caminho ensinado pelo Buda.", feedbackErro: "É o CAMINHO ÓCTUPLO — os 8 passos do ensinamento budista." },
      { id: "q3", pergunta: "Símbolos religiosos DIFERENTES devem ser tratados com:", fotoUrl: etica, cards: [
        { id: "hierarquia", emoji: "🏆", titulo: "Hierarquia (uns valem mais)", cor: "from-slate-400 to-gray-600" },
        { id: "igual", emoji: "🤝", titulo: "Igual respeito", cor: "from-emerald-500 to-green-700" },
        { id: "medo", emoji: "😨", titulo: "Medo", cor: "from-red-500 to-rose-700" },
      ], correta: "igual", feedbackAcerto: "Isso! Nenhuma tradição é 'superior' — todos os símbolos merecem o mesmo respeito.", feedbackErro: "Nenhum símbolo religioso vale mais que o outro. Todos merecem IGUAL respeito." },
    ],
    falaFinal: "Radar dos símbolos afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados onde você encontraria facilmente TODOS esses símbolos convivendo em templos.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "PR", "RS", "DF"], pergunta: "5 estados/DF com forte diversidade religiosa visível na paisagem urbana?" },
    falaFinal: "SP, RJ, PR, RS, DF. Cidades grandes concentram toda essa diversidade simbólica.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um objeto comum vira SÍMBOLO SAGRADO?",
    instrucao: "Ordene os 5 passos",
    pergunta: "De objeto a símbolo:",
    paradas: [
      { id: "objeto", emoji: "🪵", rotulo: "1. OBJETO comum", descricao: "Uma peça qualquer — duas madeiras, uma pedra, uma faixa de pano." },
      { id: "evento", emoji: "⭐", rotulo: "2. EVENTO marcante", descricao: "Algo importante acontece envolvendo aquele objeto — visão, martírio, ensinamento." },
      { id: "memoria", emoji: "🕯️", rotulo: "3. MEMÓRIA guardada", descricao: "A comunidade passa a lembrar o evento sempre que vê aquele objeto." },
      { id: "convencao", emoji: "🤝", rotulo: "4. CONVENÇÃO firmada", descricao: "A tradição decide, coletivamente, tratar aquele objeto como sagrado." },
      { id: "simbolo", emoji: "✨", rotulo: "5. SÍMBOLO consolidado", descricao: "Séculos depois, o objeto vira símbolo reconhecido — mesmo por quem não conhece a história inteira." },
    ],
    ordemCerta: ["objeto", "evento", "memoria", "convencao", "simbolo"],
    feedbackAcerto: "Perfeito! Objeto → evento → memória → convenção → símbolo.",
    feedbackErro: "A ordem: OBJETO comum, EVENTO marcante, MEMÓRIA, CONVENÇÃO da tradição, SÍMBOLO consolidado.",
    falaFinal: "5 passos. É assim que uma cruz vira A Cruz.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 3 — Símbolos",
    paragrafos: [
      { id: "p1", texto: "SÍMBOLO religioso é uma imagem simples que RESUME uma ideia complexa. A cruz cristã, a estrela judaica, a meia-lua islâmica, o Om hindu e a roda do dharma budista são exemplos consagrados.", chaves: ["símbolo", "resume"] },
      { id: "p2", texto: "Todo símbolo tem uma HISTÓRIA. Nenhum caiu do céu já pronto: cada um nasceu de um evento importante, foi guardado pela memória da comunidade e virou convenção da tradição por séculos de uso.", chaves: ["história", "convenção"] },
      { id: "p3", texto: "Símbolos servem principalmente pra IDENTIFICAR o grupo (reconhecer quem partilha aquela fé) e ENSINAR (resumir em imagem o que levaria páginas pra explicar).", chaves: ["identificar", "ensinar"] },
      { id: "p4", texto: "Nenhum símbolo religioso é 'superior' aos outros. Todos merecem IGUAL respeito, mesmo quando não fazem parte da sua tradição. Zombar de um símbolo é ferir a identidade de todo um povo.", chaves: ["igual respeito"] },
    ],
    falaFinal: "Bora pro minijogo dos símbolos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LEITOR DE SÍMBOLOS! Cada pista aponta um símbolo. Escolha certo.",
    instrucao: "⏱️ Qual símbolo é esse?",
    duracaoSegundos: 12,
    pecas: [
      { id: "cruz", emoji: "✝️", rotulo: "Cruz" },
      { id: "estrela", emoji: "🕎", rotulo: "Estrela de Davi" },
      { id: "crescente", emoji: "☪️", rotulo: "Meia-lua" },
      { id: "om", emoji: "🕉️", rotulo: "Om" },
      { id: "dharma", emoji: "☸️", rotulo: "Roda do Dharma" },
      { id: "yin", emoji: "☯️", rotulo: "Yin-Yang" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Duas madeiras", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Bandeira da Suíça", emoji: "🇨🇭", cor: "from-red-400 to-rose-600" }, contexto: "Símbolo da tradição cristã desde o séc. IV.", pecaCertaId: "cruz", feedbackAcerto: "Isso! A cruz.", feedbackErro: "É a CRUZ — cristianismo." },
      { id: "r2", municipioA: { nome: "Dois triângulos", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Bandeira de Israel", emoji: "🇮🇱", cor: "from-yellow-400 to-amber-600" }, contexto: "Símbolo do povo judeu.", pecaCertaId: "estrela", feedbackAcerto: "Perfeito! Estrela de Davi.", feedbackErro: "É a ESTRELA DE DAVI — judaísmo." },
      { id: "r3", municipioA: { nome: "Lua + estrela", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Topo de mesquita", emoji: "🕌", cor: "from-teal-400 to-emerald-600" }, contexto: "Vem do Império Otomano.", pecaCertaId: "crescente", feedbackAcerto: "Isso! Meia-lua com estrela.", feedbackErro: "É a MEIA-LUA — associada ao islamismo." },
      { id: "r4", municipioA: { nome: "Som sagrado", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Recitado em yoga", emoji: "🧘", cor: "from-amber-400 to-orange-600" }, contexto: "Representa o início do universo.", pecaCertaId: "om", feedbackAcerto: "Perfeito! Om (AUM).", feedbackErro: "É o OM — hinduísmo." },
      { id: "r5", municipioA: { nome: "8 raios", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Caminho do Buda", emoji: "🪷", cor: "from-orange-400 to-amber-600" }, contexto: "Está na bandeira da Índia.", pecaCertaId: "dharma", feedbackAcerto: "Isso! Roda do Dharma.", feedbackErro: "É a RODA DO DHARMA — budismo." },
      { id: "r6", municipioA: { nome: "Preto e branco", emoji: "☯️", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "China antiga", emoji: "🐉", cor: "from-red-400 to-rose-600" }, contexto: "Representa a harmonia entre opostos.", pecaCertaId: "yin", feedbackAcerto: "Boa! Yin-Yang taoista.", feedbackErro: "É o YIN-YANG — taoismo, harmonia entre opostos." },
    ],
    falaFinal: "6 símbolos lidos! Investigador visual.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as grandes FUNÇÕES de um símbolo religioso.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "identificar", rotulo: "IDENTIFICAR o grupo (~55%)", emoji: "🪪", percentual: 55, cor: "#3b82f6", descricao: "Reconhecer quem partilha aquela tradição — templos, joias, roupas, arquitetura. Uma bandeira visual da fé.", exemplos: ["✝️ Igreja", "🕎 Kipá", "☪️ Mesquita"] },
      { id: "ensinar", rotulo: "ENSINAR em uma imagem (~45%)", emoji: "🧭", percentual: 45, cor: "#8b5cf6", descricao: "Resumir séculos de ensinamento em uma forma simples que qualquer criança da tradição consegue lembrar.", exemplos: ["☸️ 8 passos", "🕉️ Origem", "✝️ História"] },
    ],
    falaFinal: "Identificar e ensinar. Duas funções, uma imagem.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "SÍMBOLO religioso é:", opcoes: [
        { id: "a", texto: "Só decoração de templo", correta: false },
        { id: "b", texto: "Imagem simples que resume identidade e ensinamentos da tradição", correta: true },
        { id: "c", texto: "Um tipo de dinheiro", correta: false },
      ], feedbackAcerto: "Isso! Símbolo = identidade + ensinamento condensado.", feedbackErro: "Símbolo não é decoração. É imagem que resume IDENTIDADE e ENSINAMENTOS." },
      { id: "av2", pergunta: "A RODA DO DHARMA (budismo) tem 8 raios porque representa:", opcoes: [
        { id: "a", texto: "8 planetas", correta: false },
        { id: "b", texto: "Os 8 passos do Caminho Óctuplo ensinado pelo Buda", correta: true },
        { id: "c", texto: "8 divindades", correta: false },
      ], feedbackAcerto: "Perfeito! Cada raio = um passo do caminho budista.", feedbackErro: "Os 8 raios representam os 8 PASSOS do Caminho Óctuplo ensinado pelo Buda." },
      { id: "av3", pergunta: "Zombar de um símbolo religioso de outra tradição é:", opcoes: [
        { id: "a", texto: "Coisa sem importância", correta: false },
        { id: "b", texto: "Ferir a identidade de todo um povo", correta: true },
        { id: "c", texto: "Divertido e permitido", correta: false },
      ], feedbackAcerto: "Isso! Símbolo carrega identidade. Zombar é agredir o povo inteiro.", feedbackErro: "Zombar de um símbolo religioso FERE a identidade de todo o povo que ele representa." },
    ],
    selo: { nome: "Leitor de Símbolos", subtitulo: "Insígnia dos Símbolos Religiosos", emoji: "✨", cor: "from-purple-400 to-fuchsia-600" },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Leitor de Símbolos" },
};
