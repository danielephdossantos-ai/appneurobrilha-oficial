import type { AulaGeoV1 } from "../../types";
import { url as justica } from "@/assets/ensino-religioso-9ano/u4-justica-solidariedade.jpg.asset.json";
import { url as cuidado } from "@/assets/ensino-religioso-9ano/u1-cuidado-vida.jpg.asset.json";
import { url as sociedade } from "@/assets/ensino-religioso-9ano/u7-sociedade-justa.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 4 · Aula 01
 * "Justiça e Solidariedade" — EF09ER04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-justica-solidariedade",
  titulo: "Justiça e Solidariedade",
  iconeTrilha: "⚖️",
  bncc: ["EF09ER04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe a balança e o pão dividido.",
    mapaUrl: justica,
    imagemDestaqueUrl: sociedade,
    aurora:
      "Curador, olha essa cena: uma balança e um pão partilhado. Quase toda tradição religiosa e todo humanismo secular colocam DOIS princípios éticos no topo: dar a cada um o que merece (JUSTIÇA) e cuidar de quem precisa (SOLIDARIEDADE). Palavras diferentes — tzedaká, ágape, zakat, karuna, ubuntu, direitos humanos — mesmo pilar ético.",
    falaFinal: "Justiça + solidariedade = pilar ético universal.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: JUSTIÇA e CARIDADE são a mesma coisa?",
    pergunta: "Dar esmola = fazer justiça?",
    opcoes: [
      { id: "sim", titulo: "SIM, é a mesma coisa", subtitulo: "quem doa é justo", emoji: "🎁", cor: "from-amber-400 to-orange-600" },
      { id: "nao", titulo: "NÃO, são diferentes", subtitulo: "justiça muda estrutura, caridade alivia", emoji: "⚖️", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Caridade alivia AGORA (uma refeição). Justiça muda a ESTRUTURA (por que ele está com fome). As tradições sérias querem AS DUAS.",
    feedbackErro: "Não são a mesma coisa. Caridade alivia sintoma. Justiça ataca a causa. Ambas necessárias, mas distintas.",
    falaFinal: "Caridade + justiça = as duas juntas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "tzedaka", capa: "1. Tzedaká", emoji: "✡️", cor: "from-blue-500 to-indigo-700", conteudo: "TZEDAKÁ vem da raiz hebraica de JUSTIÇA (tzedek). No judaísmo, doar aos pobres NÃO é caridade opcional — é DEVER de justiça: aquele bem 'já pertencia' ao pobre.", exemplo: "Ex.: no judaísmo, 10% da renda pertence estruturalmente ao pobre — quem 'doa' está devolvendo, não presenteando.", fotoUrl: justica },
      { id: "zakat", capa: "2. Zakat", emoji: "☪️", cor: "from-green-500 to-emerald-700", conteudo: "ZAKAT é um dos 5 pilares do islamismo: 2,5% da riqueza acumulada por ano vai obrigatoriamente aos pobres. É purificação da riqueza + justiça social.", exemplo: "Ex.: em países muçulmanos, o Estado pode arrecadar zakat como imposto religioso pra redistribuir.", fotoUrl: sociedade },
      { id: "ubuntu", capa: "3. Ubuntu", emoji: "🥁", cor: "from-amber-500 to-orange-700", conteudo: "UBUNTU é princípio ético das culturas bantu africanas (e afro-brasileiras): 'eu sou porque nós somos'. Não existe pessoa isolada — só existo bem se meu grupo estiver bem.", exemplo: "Ex.: Nelson Mandela citava ubuntu como base da reconciliação sul-africana após o apartheid.", fotoUrl: cuidado },
    ],
    falaFinal: "Tzedaká + zakat + ubuntu = 3 pilares éticos convergentes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "6 princípios éticos, 6 tradições.",
    instrucao: "Toque em cada balão",
    mapaUrl: justica,
    pontos: [
      { id: "judeu", x: 15, y: 20, emoji: "✡️", cor: "from-blue-500 to-indigo-700", titulo: "Judaísmo: Tzedaká", texto: "Justiça-caridade: doar é DEVOLVER o que já pertencia estruturalmente ao pobre. Dever, não favor.", fotoUrl: justica },
      { id: "cristao", x: 50, y: 20, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo: Ágape", texto: "Amor incondicional que se traduz em cuidado do último — 'o que fizerem ao menor de meus irmãos, farão a mim'.", fotoUrl: cuidado },
      { id: "islam", x: 85, y: 20, emoji: "☪️", cor: "from-green-500 to-emerald-700", titulo: "Islamismo: Zakat", texto: "2,5% da riqueza aos pobres: obrigatório, purifica a riqueza e sustenta os vulneráveis.", fotoUrl: sociedade },
      { id: "budista", x: 20, y: 75, emoji: "☸️", cor: "from-orange-500 to-red-700", titulo: "Budismo: Karuna", texto: "Compaixão ativa por todos os seres — reduzir o sofrimento onde ele estiver.", fotoUrl: cuidado },
      { id: "afro", x: 50, y: 75, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Afro/Indígena: Ubuntu", texto: "'Eu sou porque nós somos'. Bem-estar coletivo antes do individual — pilar afro e indígena.", fotoUrl: justica },
      { id: "sec", x: 80, y: 75, emoji: "🌍", cor: "from-emerald-500 to-green-700", titulo: "Secular: Direitos Humanos", texto: "Todos nascem livres e iguais em dignidade e direitos. Base ética das democracias modernas.", fotoUrl: sociedade },
    ],
    falaFinal: "6 palavras diferentes. Mesmo compromisso ético.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "TZEDAKÁ, no judaísmo, é vista como:", fotoUrl: justica, cards: [
        { id: "dever", emoji: "⚖️", titulo: "Dever de justiça, não favor", cor: "from-blue-500 to-indigo-700" },
        { id: "favor", emoji: "🎁", titulo: "Favor opcional", cor: "from-slate-400 to-gray-600" },
        { id: "esmola", emoji: "🪙", titulo: "Esmola pra sentir-se bem", cor: "from-red-500 to-rose-700" },
      ], correta: "dever", feedbackAcerto: "Isso! Tzedaká é DEVER — a doação já pertencia estruturalmente ao pobre.", feedbackErro: "É DEVER — no judaísmo, doar é devolver algo que já pertencia ao pobre. Justiça, não favor." },
      { id: "q2", pergunta: "ZAKAT (islamismo) é:", fotoUrl: sociedade, cards: [
        { id: "obrig", emoji: "☪️", titulo: "Obrigação — 2,5% aos pobres ao ano", cor: "from-green-500 to-emerald-700" },
        { id: "opc", emoji: "🎁", titulo: "Doação totalmente opcional", cor: "from-slate-400 to-gray-600" },
        { id: "jejum", emoji: "🌙", titulo: "Jejum religioso", cor: "from-red-500 to-rose-700" },
      ], correta: "obrig", feedbackAcerto: "Perfeito! Zakat é um dos 5 pilares — obrigatório, 2,5% ao ano.", feedbackErro: "É OBRIGAÇÃO — um dos 5 pilares do islã, 2,5% da riqueza aos pobres." },
      { id: "q3", pergunta: "'Eu sou porque nós somos' é resumo de:", fotoUrl: cuidado, cards: [
        { id: "ubu", emoji: "🥁", titulo: "Ubuntu (ética africana/afro)", cor: "from-amber-500 to-orange-700" },
        { id: "ind", emoji: "☝️", titulo: "Individualismo moderno", cor: "from-slate-400 to-gray-600" },
        { id: "cap", emoji: "💰", titulo: "Capitalismo", cor: "from-red-500 to-rose-700" },
      ], correta: "ubu", feedbackAcerto: "Isso! Ubuntu — coletivismo ético africano.", feedbackErro: "É UBUNTU — princípio africano do 'somos porque somos junto'." },
    ],
    falaFinal: "Radar ético calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, esses princípios geram redes de solidariedade. Acenda 5 estados com grandes ações sociais religiosas + laicas.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "BA", "CE", "RJ"], pergunta: "5 estados com grandes redes de Pastorais, Ação da Cidadania, terreiros, mesquitas e ONGs?" },
    falaFinal: "SP, MG, BA, CE, RJ — Pastoral da Criança, Cáritas, terreiros, mesquitas, campanhas do Betinho. Todos ativos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um princípio ético vira POLÍTICA PÚBLICA?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do princípio à mudança estrutural:",
    paradas: [
      { id: "principio", emoji: "⚖️", rotulo: "1. PRINCÍPIO ético", descricao: "'Ninguém deveria passar fome' — princípio religioso e/ou humanista." },
      { id: "acaocom", emoji: "🍲", rotulo: "2. AÇÃO comunitária", descricao: "Grupo local começa: sopão, distribuição de cestas, mutirão." },
      { id: "rede", emoji: "🤝", rotulo: "3. REDE nacional", descricao: "Várias iniciativas locais se articulam em rede maior: Cáritas, Pastorais, ONGs." },
      { id: "pressao", emoji: "📢", rotulo: "4. PRESSÃO sobre o Estado", descricao: "A rede exige política pública: 'não basta assistir — o Estado precisa garantir alimento como direito'." },
      { id: "lei", emoji: "🏛️", rotulo: "5. LEI / POLÍTICA pública", descricao: "Nasce política pública universal: SUS, Bolsa Família, cotas, LOAS. Direito estruturalmente garantido." },
    ],
    ordemCerta: ["principio", "acaocom", "rede", "pressao", "lei"],
    feedbackAcerto: "Perfeito! Princípio → ação comunitária → rede → pressão → política pública.",
    feedbackErro: "A ordem: PRINCÍPIO, AÇÃO comunitária, REDE, PRESSÃO, LEI/política.",
    falaFinal: "5 passos. É assim que ética vira estrutura.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 4 — Justiça e Solidariedade",
    paragrafos: [
      { id: "p1", texto: "JUSTIÇA e SOLIDARIEDADE são pilares éticos que quase toda tradição religiosa e todo humanismo secular colocam no topo. Cada tradição tem uma palavra: tzedaká, ágape, zakat, karuna, ubuntu, direitos humanos.", chaves: ["justiça", "solidariedade"] },
      { id: "p2", texto: "TZEDAKÁ (judaísmo) e ZAKAT (islamismo) mostram algo importante: nessas tradições, doar aos pobres NÃO é favor. É DEVER de justiça — o bem já pertence estruturalmente ao mais vulnerável.", chaves: ["dever", "não é favor"] },
      { id: "p3", texto: "CARIDADE alivia AGORA (uma refeição). JUSTIÇA muda a ESTRUTURA (por que ele estava com fome). As duas são necessárias — mas não são a mesma coisa.", chaves: ["caridade", "estrutura"] },
      { id: "p4", texto: "Quando princípios éticos religiosos e seculares se articulam, viram POLÍTICAS PÚBLICAS: SUS, Bolsa Família, cotas, LOAS. Ética coletiva vira estrutura que sustenta a vida de milhões.", chaves: ["políticas públicas", "estrutura"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GESTO → PRINCÍPIO! Cada história mostra uma prática. De qual princípio ético vem?",
    instrucao: "⏱️ Qual princípio guia essa ação?",
    duracaoSegundos: 12,
    pecas: [
      { id: "tzedaka", emoji: "✡️", rotulo: "Tzedaká" },
      { id: "agape", emoji: "✝️", rotulo: "Ágape" },
      { id: "zakat", emoji: "☪️", rotulo: "Zakat" },
      { id: "karuna", emoji: "☸️", rotulo: "Karuna" },
      { id: "ubuntu", emoji: "🥁", rotulo: "Ubuntu" },
      { id: "dh", emoji: "⚖️", rotulo: "Direitos Humanos" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sinagoga", emoji: "✡️", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Doa 10%", emoji: "🪙", cor: "from-indigo-400 to-blue-600" }, contexto: "Comerciante judeu doa 10% da renda ao asilo local: 'isso já não era meu'.", pecaCertaId: "tzedaka", feedbackAcerto: "Isso! Tzedaká — dever de justiça judaico.", feedbackErro: "É TZEDAKÁ — o 10% já pertence estruturalmente ao pobre." },
      { id: "r2", municipioA: { nome: "Paróquia", emoji: "⛪", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Pastoral Criança", emoji: "👶", cor: "from-blue-400 to-cyan-600" }, contexto: "Voluntária católica visita mães pobres semanalmente: 'servi ao Cristo em cada criança'.", pecaCertaId: "agape", feedbackAcerto: "Perfeito! Ágape — amor cristão em ação.", feedbackErro: "É ÁGAPE — amor cristão traduzido em cuidado dos vulneráveis." },
      { id: "r3", municipioA: { nome: "Mesquita", emoji: "🕌", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "2,5% ao ano", emoji: "💰", cor: "from-emerald-400 to-green-600" }, contexto: "Muçulmano calcula e doa 2,5% da riqueza acumulada aos pobres do bairro.", pecaCertaId: "zakat", feedbackAcerto: "Isso! Zakat — obrigação islâmica.", feedbackErro: "É ZAKAT — 2,5% obrigatórios da riqueza." },
      { id: "r4", municipioA: { nome: "Templo", emoji: "🛕", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Hospice", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, contexto: "Voluntário budista cuida de doentes terminais gratuitamente: 'reduzir sofrimento é meu caminho'.", pecaCertaId: "karuna", feedbackAcerto: "Perfeito! Karuna — compaixão budista.", feedbackErro: "É KARUNA — compaixão ativa budista." },
      { id: "r5", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Todo grupo cuida", emoji: "🤝", cor: "from-orange-400 to-red-600" }, contexto: "Terreiro decide junto: 'ninguém do nosso grupo passa fome enquanto tiver comida em algum de nós'.", pecaCertaId: "ubuntu", feedbackAcerto: "Isso! Ubuntu — coletivismo ético.", feedbackErro: "É UBUNTU — 'somos porque somos junto'." },
      { id: "r6", municipioA: { nome: "ONG", emoji: "🌍", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Cotas raciais", emoji: "⚖️", cor: "from-cyan-400 to-sky-600" }, contexto: "Ativista defende cotas na universidade: 'todos devem ter chances iguais de dignidade'.", pecaCertaId: "dh", feedbackAcerto: "Boa! Direitos Humanos — justiça estrutural secular.", feedbackErro: "É DIREITOS HUMANOS — chances iguais como direito." },
    ],
    falaFinal: "6 princípios, 6 traduções. Mesmo compromisso.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: os dois pilares éticos universais.",
    instrucao: "Toque em cena",
    fatias: [
      { id: "justica", rotulo: "JUSTIÇA (~50%)", emoji: "⚖️", percentual: 50, cor: "#0ea5e9", descricao: "Dar a cada um o que lhe é devido. Muda ESTRUTURA. Base de leis, direitos, políticas públicas. Tzedaká + zakat + direitos humanos.", exemplos: ["✡️ Tzedaká", "☪️ Zakat", "⚖️ Direitos Humanos"] },
      { id: "solidariedade", rotulo: "SOLIDARIEDADE (~50%)", emoji: "🤝", percentual: 50, cor: "#f59e0b", descricao: "Cuidar de quem precisa AGORA. Cuida da PESSOA. Base de caridade, mutirão, comunidade. Ágape + karuna + ubuntu.", exemplos: ["✝️ Ágape", "☸️ Karuna", "🥁 Ubuntu"] },
    ],
    falaFinal: "Justiça muda estrutura. Solidariedade cuida agora. Sociedade justa precisa das DUAS.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA ÉTICA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "CARIDADE e JUSTIÇA são:", opcoes: [
        { id: "a", texto: "Exatamente a mesma coisa", correta: false },
        { id: "b", texto: "Complementares mas distintas — uma alivia, outra muda estrutura", correta: true },
        { id: "c", texto: "Opostas e incompatíveis", correta: false },
      ], feedbackAcerto: "Isso! Complementares mas distintas.", feedbackErro: "Complementares mas DISTINTAS — caridade alivia agora, justiça muda estrutura." },
      { id: "av2", pergunta: "TZEDAKÁ (judaica) e ZAKAT (islâmica) mostram que:", opcoes: [
        { id: "a", texto: "Doar é sempre favor opcional", correta: false },
        { id: "b", texto: "Doar aos pobres pode ser DEVER de justiça, não favor", correta: true },
        { id: "c", texto: "Religião não se importa com pobreza", correta: false },
      ], feedbackAcerto: "Perfeito! Nessas tradições, doar é dever estruturado.", feedbackErro: "É DEVER — o bem já pertencia estruturalmente ao pobre." },
      { id: "av3", pergunta: "Direitos Humanos (secular) e ágape/karuna/ubuntu (religiosos):", opcoes: [
        { id: "a", texto: "Se contradizem e não podem conviver", correta: false },
        { id: "b", texto: "Convergem em construir sociedades justas juntos", correta: true },
        { id: "c", texto: "Só um deles é válido", correta: false },
      ], feedbackAcerto: "Isso! Convergem e podem construir juntos.", feedbackErro: "CONVERGEM — princípios éticos religiosos e seculares constroem sociedade justa juntos." },
    ],
    selo: { nome: "Guardião da Ética", subtitulo: "Insígnia da Justiça com Solidariedade", emoji: "⚖️", cor: "from-amber-400 to-yellow-600" },
    falaFinal: "Insígnia conquistada! Você entende o mapa ético do mundo.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Ética" },
};
