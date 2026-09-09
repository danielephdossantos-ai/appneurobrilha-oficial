import type { AulaGeoV1 } from "../../types";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 1 · Aula 01
 * "A Palavra que Fica no Papel" — EF06ER01
 * NÃO CONFESSIONAL. Foco: como a tradição ESCRITA preserva memória.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-tradicao-escrita",
  titulo: "A Palavra que Fica no Papel",
  iconeTrilha: "📜",
  bncc: ["EF06ER01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: três livros, três povos, uma mesma ideia.",
    mapaUrl: torah,
    imagemDestaqueUrl: torah,
    aurora:
      "Decifrador, olha isso. Um rolo aberto num templo judaico. Uma Bíblia na capa dura sobre uma mesa cristã. Um Alcorão iluminado numa estante muçulmana. Três livros DIFERENTES, escritos em séculos DIFERENTES, guardando histórias, leis e orações — pra que nenhum dos três povos esqueça QUEM É.",
    falaFinal:
      "Nesta aula, vamos entender por que quase toda grande tradição religiosa produziu LIVROS. E o que esses livros fazem que a memória sozinha não consegue.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: por que povos religiosos escreveram livros em vez de só contarem oralmente?",
    pergunta: "Por que escrever?",
    opcoes: [
      { id: "memoria", titulo: "Pra a memória NÃO SUMIR", subtitulo: "gerações passam, o livro fica", emoji: "📖", cor: "from-amber-400 to-orange-600" },
      { id: "bonito", titulo: "Só porque é BONITO", subtitulo: "letra caprichada impressiona", emoji: "✨", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "memoria",
    feedbackAcerto: "Isso! Boca esquece, papel guarda. Escrever é a forma de atravessar séculos.",
    feedbackErro: "Beleza é bônus. O motivo real é PRESERVAR — pra que daqui a mil anos alguém ainda saiba o que aquele povo acreditava.",
    falaFinal: "Livro sagrado = memória atravessando o tempo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave pra hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "tradicao-escrita", capa: "1. Tradição escrita", emoji: "✍️", cor: "from-amber-500 to-orange-700", conteudo: "TRADIÇÃO ESCRITA é quando um povo registra suas crenças, histórias e leis em textos que podem ser lidos por gerações futuras — mesmo depois que os avós já se foram.", exemplo: "Ex.: um rabino lendo hoje um trecho que foi escrito há mais de 2500 anos.", fotoUrl: torah },
      { id: "cânone", capa: "2. Cânone", emoji: "📚", cor: "from-sky-500 to-blue-700", conteudo: "CÂNONE é a LISTA oficial de livros que uma tradição considera sagrados. Cada tradição tem o seu — nem todo texto religioso entra no cânone.", exemplo: "Ex.: a Bíblia católica tem 73 livros; a protestante tem 66; a Torá judaica tem os 5 primeiros.", fotoUrl: biblia },
      { id: "revelacao", capa: "3. Revelação", emoji: "🌟", cor: "from-purple-500 to-fuchsia-700", conteudo: "REVELAÇÃO é a ideia de que aquele texto NÃO é invenção humana comum — a tradição acredita que veio do sagrado, por inspiração, sonho ou palavra direta.", exemplo: "Ex.: muçulmanos acreditam que o Alcorão foi revelado ao Profeta Muhammad ao longo de 23 anos.", fotoUrl: alcorao },
    ],
    falaFinal: "Tradição escrita, cânone, revelação. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Vamos conhecer 4 grandes livros/tradições escritas. Toque em cada balão pra ouvir. Todos com o MESMO respeito.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: biblia,
    pontos: [
      { id: "torah", x: 22, y: 30, emoji: "📜", cor: "from-amber-500 to-orange-700", titulo: "TORÁ — tradição judaica", texto: "A Torá contém os 5 primeiros livros da Bíblia hebraica: Gênesis, Êxodo, Levítico, Números e Deuteronômio. Guarda a história do povo hebreu, os 10 mandamentos e leis de convivência. É lida em rolos manuscritos há mais de 2500 anos.", fotoUrl: torah },
      { id: "biblia", x: 70, y: 30, emoji: "📖", cor: "from-sky-500 to-blue-700", titulo: "BÍBLIA — tradição cristã", texto: "A Bíblia cristã tem duas partes: Antigo Testamento (herdado do judaísmo) e Novo Testamento (sobre a vida e os ensinamentos de Jesus). É o livro mais impresso da história — traduzido pra mais de 3000 idiomas.", fotoUrl: biblia },
      { id: "alcorao", x: 30, y: 72, emoji: "📕", cor: "from-emerald-500 to-green-700", titulo: "ALCORÃO — tradição islâmica", texto: "O Alcorão foi revelado ao Profeta Muhammad no século VII, na Arábia. É lido em árabe até hoje, mesmo por muçulmanos que não falam a língua — pra manter a musicalidade original das palavras.", fotoUrl: alcorao },
      { id: "orais", x: 76, y: 68, emoji: "🔥", cor: "from-red-500 to-rose-700", titulo: "TRADIÇÕES ORAIS — indígenas e afro-brasileiras", texto: "Nem toda tradição escreve. Povos indígenas e do candomblé guardam suas narrativas sagradas na PALAVRA FALADA, passada dos mais velhos pros mais novos ao redor do fogo e nos terreiros. Oralidade também é tradição.", fotoUrl: oralidade },
    ],
    falaFinal: "Quatro caminhos. Três em livro, um na voz. Todos guardando memória viva.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual é a principal função da TRADIÇÃO ESCRITA?", fotoUrl: torah, cards: [
        { id: "preservar", emoji: "📖", titulo: "Preservar memória por séculos", cor: "from-amber-500 to-orange-700" },
        { id: "vender", emoji: "💰", titulo: "Vender mais livros", cor: "from-slate-400 to-gray-600" },
        { id: "provar", emoji: "🔬", titulo: "Provar cientificamente algo", cor: "from-red-500 to-rose-700" },
      ], correta: "preservar", feedbackAcerto: "Isso! Escrever = atravessar o tempo com a memória inteira.", feedbackErro: "Não é venda nem prova científica. A função é PRESERVAR memória pra gerações futuras." },
      { id: "q2", pergunta: "O que é CÂNONE religioso?", fotoUrl: biblia, cards: [
        { id: "lista", emoji: "📚", titulo: "Lista oficial de textos sagrados", cor: "from-sky-500 to-blue-700" },
        { id: "arma", emoji: "🎯", titulo: "Uma arma antiga", cor: "from-slate-400 to-gray-600" },
        { id: "canto", emoji: "🎵", titulo: "Um tipo de canto", cor: "from-purple-500 to-fuchsia-700" },
      ], correta: "lista", feedbackAcerto: "Perfeito! Cânone é a lista OFICIAL de textos que a tradição considera sagrados.", feedbackErro: "Cânone aqui é a LISTA OFICIAL de livros sagrados de uma tradição." },
      { id: "q3", pergunta: "Povos indígenas e do candomblé preservam sua memória sagrada principalmente por...", fotoUrl: oralidade, cards: [
        { id: "oral", emoji: "🗣️", titulo: "Tradição ORAL falada", cor: "from-red-500 to-rose-700" },
        { id: "email", emoji: "📧", titulo: "E-mail", cor: "from-slate-400 to-gray-600" },
        { id: "tv", emoji: "📺", titulo: "TV a cabo", cor: "from-sky-500 to-blue-700" },
      ], correta: "oral", feedbackAcerto: "Isso! Oralidade é uma forma legítima e antiga de tradição religiosa.", feedbackErro: "É pela ORALIDADE — palavra falada dos mais velhos pros mais novos." },
    ],
    falaFinal: "Radar afinado. Você entende como diferentes tradições guardam memória.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, várias tradições escritas e orais convivem. Toque em 5 estados de forte presença dessas tradições.",
    instrucao: "Acenda 5 estados de forte diversidade textual/oral",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "PE", "AM"], pergunta: "Quais 5 estados combinam tradições escritas cristãs/judaicas/islâmicas E fortes tradições orais indígenas/afro?" },
    falaFinal: "SP e RJ (todas as tradições escritas), BA e PE (candomblé + cristãs), AM (indígenas). Brasil é biblioteca aberta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma palavra sagrada vira LIVRO oficial? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da palavra ao cânone:",
    paradas: [
      { id: "experiencia", emoji: "🌟", rotulo: "1. EXPERIÊNCIA marcante", descricao: "Alguém tem uma vivência considerada sagrada — visão, sonho, encontro, palavra recebida." },
      { id: "oralidade", emoji: "🗣️", rotulo: "2. ORALIDADE conta e reconta", descricao: "A comunidade passa a contar essa história de boca em boca, por gerações." },
      { id: "escrita", emoji: "✍️", rotulo: "3. ESCRITA registra", descricao: "Alguém escreve. Podem surgir várias versões escritas ao mesmo tempo." },
      { id: "selecao", emoji: "⚖️", rotulo: "4. SELEÇÃO de textos", descricao: "A comunidade decide juntos quais versões entram e quais ficam de fora." },
      { id: "canone", emoji: "📚", rotulo: "5. CÂNONE fechado", descricao: "A lista oficial é fechada. A partir daí, aquele conjunto de livros vira 'o sagrado'." },
    ],
    ordemCerta: ["experiencia", "oralidade", "escrita", "selecao", "canone"],
    feedbackAcerto: "Perfeito! Experiência → oralidade → escrita → seleção → cânone. Ciclo real das grandes tradições.",
    feedbackErro: "A ordem é: primeiro EXPERIÊNCIA acontece, depois ORALIDADE circula, depois alguém ESCREVE, depois vem a SELEÇÃO, e só então o CÂNONE fecha.",
    falaFinal: "5 passos. Do sussurro do desert ao livro nas mãos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia com atenção.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 1 — A Tradição Escrita",
    paragrafos: [
      { id: "p1", texto: "TRADIÇÃO ESCRITA é quando um povo registra suas crenças e histórias em TEXTOS que atravessam gerações. É o que evita que a memória se apague com o tempo.", chaves: ["escrita", "atravessam"] },
      { id: "p2", texto: "Cada grande tradição religiosa formou seu CÂNONE — a lista oficial de livros considerados sagrados. Torá, Bíblia, Alcorão, Vedas e Sutras são exemplos famosos.", chaves: ["cânone", "sagrados"] },
      { id: "p3", texto: "Muitas tradições dizem que seus textos são REVELAÇÃO — não invenção humana comum, mas mensagem vinda do sagrado por sonho, visão ou palavra direta.", chaves: ["revelação", "sagrado"] },
      { id: "p4", texto: "Nem toda tradição escreve. Povos indígenas e do candomblé têm ORALIDADE viva: a palavra falada, cuidadosamente passada dos mais velhos pros mais novos, também guarda memória sagrada com dignidade.", chaves: ["oralidade", "dignidade"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo dos livros.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GUARDIÃO DOS LIVROS! Cada rodada mostra pistas de um texto sagrado. Escolha qual tradição o guarda.",
    instrucao: "⏱️ Qual tradição guarda esse texto?",
    duracaoSegundos: 12,
    pecas: [
      { id: "judaica", emoji: "🕎", rotulo: "Judaica (Torá)" },
      { id: "crista", emoji: "✝️", rotulo: "Cristã (Bíblia)" },
      { id: "islamica", emoji: "☪️", rotulo: "Islâmica (Alcorão)" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hindu (Vedas)" },
      { id: "budista", emoji: "☸️", rotulo: "Budista (Sutras)" },
      { id: "oral", emoji: "🔥", rotulo: "Oral (indígena/afro)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "5 livros", emoji: "📜", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Rolos em hebraico", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, contexto: "Guarda os 10 mandamentos.", pecaCertaId: "judaica", feedbackAcerto: "Isso! Torá — 5 livros, lidos em rolos.", feedbackErro: "É a TORÁ judaica — 5 livros em rolos hebraicos." },
      { id: "r2", municipioA: { nome: "Antigo + Novo", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Traduzida em 3000 idiomas", emoji: "🌍", cor: "from-indigo-400 to-blue-700" }, contexto: "Livro mais impresso da história.", pecaCertaId: "crista", feedbackAcerto: "Perfeito! Bíblia cristã.", feedbackErro: "É a BÍBLIA cristã — Antigo + Novo Testamento." },
      { id: "r3", municipioA: { nome: "Revelado ao Muhammad", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Lido em árabe", emoji: "📕", cor: "from-teal-400 to-emerald-600" }, contexto: "Revelado ao longo de 23 anos.", pecaCertaId: "islamica", feedbackAcerto: "Isso! Alcorão da tradição islâmica.", feedbackErro: "É o ALCORÃO — tradição islâmica, revelado a Muhammad." },
      { id: "r4", municipioA: { nome: "Sânscrito antigo", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Rigveda, Samaveda...", emoji: "📜", cor: "from-amber-400 to-orange-600" }, contexto: "Textos mais antigos da humanidade ainda em uso.", pecaCertaId: "hindu", feedbackAcerto: "Perfeito! Vedas hindus, em sânscrito.", feedbackErro: "São os VEDAS — tradição hindu, escritos em sânscrito." },
      { id: "r5", municipioA: { nome: "Ensinamentos de Buda", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Textos em pali/chinês", emoji: "📃", cor: "from-amber-400 to-yellow-600" }, contexto: "Guardam falas atribuídas ao Buda.", pecaCertaId: "budista", feedbackAcerto: "Isso! Sutras budistas.", feedbackErro: "São os SUTRAS — textos que guardam ensinamentos do Buda." },
      { id: "r6", municipioA: { nome: "Sem livro impresso", emoji: "🔥", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Ancião conta à noite", emoji: "🗣️", cor: "from-orange-400 to-red-600" }, contexto: "Palavra falada dos mais velhos pros mais novos.", pecaCertaId: "oral", feedbackAcerto: "Boa! Tradição ORAL — indígena ou afro-brasileira.", feedbackErro: "É tradição ORAL: povos indígenas e afro-brasileiros preservam pela palavra falada." },
    ],
    falaFinal: "6 tradições reconhecidas! Você virou Guardião dos Livros.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 formas principais de preservar memória religiosa no mundo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "escrita", rotulo: "Tradições ESCRITAS (~70%)", emoji: "📖", percentual: 70, cor: "#f59e0b", descricao: "Judaísmo, cristianismo, islamismo, hinduísmo, budismo, sikhismo — todas com cânones de livros que atravessam séculos.", exemplos: ["🕎 Torá", "📖 Bíblia", "📕 Alcorão", "🕉️ Vedas"] },
      { id: "oral", rotulo: "Tradições ORAIS (~30%)", emoji: "🔥", percentual: 30, cor: "#ef4444", descricao: "Povos indígenas do mundo inteiro, tradições afro-brasileiras (candomblé, umbanda), muitas tradições africanas originárias. Sem livro impresso, mas com memória viva.", exemplos: ["🪶 Guarani", "🥁 Candomblé", "🌍 Iorubá"] },
    ],
    falaFinal: "Escrita e oral. Duas grandes vias. Ambas legítimas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia DECIFRADOR DOS LIVROS.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A principal função de um TEXTO SAGRADO escrito é:", opcoes: [
        { id: "a", texto: "Vender mais livros", correta: false },
        { id: "b", texto: "Preservar memória e ensinamentos por séculos", correta: true },
        { id: "c", texto: "Provar cientificamente algo", correta: false },
      ], feedbackAcerto: "Isso! Preservar memória e ensinamentos que a boca sozinha esqueceria.", feedbackErro: "Não é venda nem prova. É PRESERVAR memória e ensinamentos ao longo do tempo." },
      { id: "av2", pergunta: "Uma tradição religiosa que NÃO tem livro impresso...", opcoes: [
        { id: "a", texto: "Não é uma religião de verdade", correta: false },
        { id: "b", texto: "Pode preservar memória pela oralidade, com o mesmo valor", correta: true },
        { id: "c", texto: "Está condenada a desaparecer", correta: false },
      ], feedbackAcerto: "Perfeito! Oralidade tem o MESMO valor que a escrita como forma de preservação.", feedbackErro: "Sem livro NÃO é sem religião. Oralidade preserva com a mesma dignidade." },
      { id: "av3", pergunta: "O que é REVELAÇÃO segundo as tradições religiosas?", opcoes: [
        { id: "a", texto: "Um post publicado", correta: false },
        { id: "b", texto: "A ideia de que o texto veio do sagrado, não é invenção humana comum", correta: true },
        { id: "c", texto: "Um novo produto no mercado", correta: false },
      ], feedbackAcerto: "Isso! Revelação = mensagem vinda do sagrado, segundo a tradição.", feedbackErro: "Revelação, em religião, é a crença de que o texto veio do SAGRADO — não é invenção humana comum." },
    ],
    selo: { nome: "Decifrador dos Livros", subtitulo: "Insígnia da Tradição Escrita", emoji: "📜", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você entende como palavras atravessam séculos.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Decifrador dos Livros" },
};
