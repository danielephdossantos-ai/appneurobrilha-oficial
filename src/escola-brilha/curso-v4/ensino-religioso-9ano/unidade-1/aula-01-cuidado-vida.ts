import type { AulaGeoV1 } from "../../types";
import { url as cuidado } from "@/assets/ensino-religioso-9ano/u1-cuidado-vida.jpg.asset.json";
import { url as vidaMorte } from "@/assets/ensino-religioso-9ano/u2-vida-morte.jpg.asset.json";
import { url as justica } from "@/assets/ensino-religioso-9ano/u4-justica-solidariedade.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 1 · Aula 01
 * "O Cuidado com a Vida" — EF09ER01
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cuidado-vida",
  titulo: "O Cuidado com a Vida",
  iconeTrilha: "🌱",
  bncc: ["EF09ER01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o gesto central.",
    mapaUrl: cuidado,
    imagemDestaqueUrl: justica,
    aurora:
      "Curador, olhe essas mãos: idosas, jovens, negras, brancas, indígenas. Todas sustentam uma mesma coisa — uma vida em formação. Nenhuma tradição religiosa séria coloca outra coisa no centro. Cuidar da vida é o princípio zero. É de onde toda ética parte.",
    falaFinal: "Cuidar da vida = o princípio ético mais universal que existe.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: 'cuidar da vida' é ideia religiosa OU humana?",
    pergunta: "De onde nasce esse princípio?",
    opcoes: [
      { id: "religioso", titulo: "SÓ das religiões", subtitulo: "quem não é religioso não cuida", emoji: "⛪", cor: "from-amber-400 to-orange-600" },
      { id: "humano", titulo: "É HUMANO", subtitulo: "religiões e visões seculares compartilham", emoji: "🌍", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "humano",
    feedbackAcerto: "Isso! Cuidar da vida é princípio humano — as religiões articulam, mas visões seculares (humanismo, direitos humanos) também sustentam.",
    feedbackErro: "Cuidar da vida é PRINCÍPIO HUMANO. Religiões articulam de um jeito, humanistas de outro — mas o valor é compartilhado.",
    falaFinal: "Princípio humano. Muitas linguagens.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave da ética da vida.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "dignidade", capa: "1. Dignidade", emoji: "💎", cor: "from-sky-500 to-blue-700", conteudo: "DIGNIDADE é o valor intrínseco de cada pessoa. Não depende de dinheiro, cor, religião, orientação: existe pelo simples fato de ser humano.", exemplo: "Ex.: mesmo um preso ou uma pessoa em situação de rua tem dignidade que precisa ser respeitada.", fotoUrl: cuidado },
      { id: "sacralidade", capa: "2. Sacralidade da Vida", emoji: "🌱", cor: "from-emerald-500 to-green-700", conteudo: "Nas tradições religiosas, a vida é SAGRADA — vem de uma fonte transcendente (Deus, ancestrais, natureza divina) e por isso deve ser protegida.", exemplo: "Ex.: 'não matarás' (judaísmo/cristianismo/islamismo), ahimsa/não-violência (hinduísmo/budismo).", fotoUrl: vidaMorte },
      { id: "direitos", capa: "3. Direitos Humanos", emoji: "⚖️", cor: "from-amber-500 to-orange-700", conteudo: "Versão SECULAR do mesmo princípio: toda pessoa nasce livre e igual em dignidade e direitos. Base do Estado democrático moderno.", exemplo: "Ex.: Declaração Universal dos Direitos Humanos (1948) — inspirada por líderes religiosos E seculares.", fotoUrl: justica },
    ],
    falaFinal: "Dignidade + sacralidade + direitos = três linguagens do mesmo cuidado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 tradições, 5 formas de dizer 'cuidar da vida'.",
    instrucao: "Toque em cada balão",
    mapaUrl: cuidado,
    pontos: [
      { id: "judaico", x: 18, y: 25, emoji: "✡️", cor: "from-blue-500 to-indigo-700", titulo: "Judaísmo: Pikuach Nefesh", texto: "'Salvar uma vida' — princípio que se sobrepõe a QUALQUER outro mandamento. Salvar uma vida é como salvar o mundo inteiro.", fotoUrl: cuidado },
      { id: "cristao", x: 68, y: 25, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo: Ágape", texto: "'Amar o próximo como a si mesmo'. Cuidar do doente, do preso, do faminto é cuidar do próprio Cristo.", fotoUrl: justica },
      { id: "muculmano", x: 25, y: 55, emoji: "☪️", cor: "from-green-500 to-emerald-700", titulo: "Islamismo: Rahma", texto: "'Misericórdia' é atributo central de Allah. O muçulmano imita essa misericórdia cuidando dos vulneráveis.", fotoUrl: cuidado },
      { id: "budista", x: 72, y: 55, emoji: "☸️", cor: "from-orange-500 to-red-700", titulo: "Budismo: Karuna", texto: "'Compaixão' — reconhecer o sofrimento do outro como próprio. Praticar bondade ativa com todos os seres vivos.", fotoUrl: vidaMorte },
      { id: "afro", x: 50, y: 82, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Tradições Afro: Ubuntu/Axé", texto: "'Eu sou porque nós somos'. A vida individual só faz sentido dentro da comunidade que cuida.", fotoUrl: justica },
    ],
    falaFinal: "Pikuach nefesh, ágape, rahma, karuna, ubuntu — cinco palavras, um princípio.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "DIGNIDADE HUMANA depende de:", fotoUrl: cuidado, cards: [
        { id: "nada", emoji: "💎", titulo: "Nada — existe pelo fato de ser humano", cor: "from-emerald-500 to-green-700" },
        { id: "dinheiro", emoji: "💰", titulo: "Da renda da pessoa", cor: "from-slate-400 to-gray-600" },
        { id: "religiao", emoji: "⛪", titulo: "Da religião que segue", cor: "from-red-500 to-rose-700" },
      ], correta: "nada", feedbackAcerto: "Isso! Dignidade é INTRÍNSECA — existe pelo simples fato da pessoa ser humana.", feedbackErro: "Dignidade não depende de renda, cor, religião. Existe pelo fato de ser humano." },
      { id: "q2", pergunta: "'Pikuach Nefesh' no judaísmo significa:", fotoUrl: vidaMorte, cards: [
        { id: "salvar", emoji: "🌱", titulo: "Salvar uma vida acima de tudo", cor: "from-blue-500 to-indigo-700" },
        { id: "orar", emoji: "🕎", titulo: "Rezar toda manhã", cor: "from-slate-400 to-gray-600" },
        { id: "jejum", emoji: "🌙", titulo: "Jejuar por 40 dias", cor: "from-red-500 to-rose-700" },
      ], correta: "salvar", feedbackAcerto: "Perfeito! Salvar uma vida se sobrepõe a qualquer outro mandamento judaico.", feedbackErro: "É SALVAR UMA VIDA — princípio judaico que se sobrepõe a qualquer outra regra." },
      { id: "q3", pergunta: "Direitos Humanos (versão secular) e sacralidade da vida (religiosa):", fotoUrl: justica, cards: [
        { id: "opostos", emoji: "⚔️", titulo: "São opostos e se contradizem", cor: "from-red-500 to-rose-700" },
        { id: "convergem", emoji: "🤝", titulo: "Convergem no mesmo princípio", cor: "from-emerald-500 to-green-700" },
        { id: "iguais", emoji: "🟰", titulo: "São exatamente iguais", cor: "from-slate-400 to-gray-600" },
      ], correta: "convergem", feedbackAcerto: "Isso! Duas linguagens (secular e religiosa) que convergem no cuidado da vida.", feedbackErro: "Convergem: uma diz 'sagrada', outra diz 'digna e livre' — princípio é o mesmo." },
    ],
    falaFinal: "Radar afiado. Ética da vida entendida.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, cuidar da vida se faz em prática. Acenda 5 estados com forte tradição de proteção da vida.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "BA", "PE"], pergunta: "5 estados com grandes redes de hospitais filantrópicos (religiosos + seculares)?" },
    falaFinal: "SP, RJ, MG, BA, PE — Santas Casas, hospitais judaicos, evangélicos, SUS público. Todos cuidam.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o princípio 'cuidar da vida' vira ação concreta?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do princípio ao gesto:",
    paradas: [
      { id: "principio", emoji: "💎", rotulo: "1. PRINCÍPIO", descricao: "Toda vida tem valor intrínseco (dignidade)." },
      { id: "reconhecimento", emoji: "👁️", rotulo: "2. RECONHECIMENTO", descricao: "Vejo o outro como igual a mim em dignidade." },
      { id: "empatia", emoji: "❤️", rotulo: "3. EMPATIA", descricao: "Sinto o que o outro sente. O sofrimento dele me afeta." },
      { id: "escolha", emoji: "🧭", rotulo: "4. ESCOLHA", descricao: "Decido agir pra proteger essa vida específica." },
      { id: "acao", emoji: "🤝", rotulo: "5. AÇÃO", descricao: "Ajudo concretamente — doar, escutar, defender, cuidar." },
    ],
    ordemCerta: ["principio", "reconhecimento", "empatia", "escolha", "acao"],
    feedbackAcerto: "Perfeito! Princípio → reconhecimento → empatia → escolha → ação.",
    feedbackErro: "A ordem: PRINCÍPIO, RECONHECIMENTO, EMPATIA, ESCOLHA, AÇÃO.",
    falaFinal: "5 passos. Assim princípio vira gesto real.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 1 — O cuidado da vida",
    paragrafos: [
      { id: "p1", texto: "CUIDAR DA VIDA é o princípio ético mais universal que existe. Toda tradição religiosa séria e toda visão secular humanista o coloca no centro.", chaves: ["princípio", "universal"] },
      { id: "p2", texto: "As religiões chamam esse princípio de SACRALIDADE DA VIDA — vem de uma fonte transcendente e por isso é intocável. Judaísmo, cristianismo, islamismo, hinduísmo, budismo, tradições afro e indígenas: todos afirmam.", chaves: ["sacralidade", "todos afirmam"] },
      { id: "p3", texto: "As visões seculares chamam de DIGNIDADE HUMANA e DIREITOS HUMANOS — toda pessoa nasce livre e igual em direitos, pelo simples fato de ser humana.", chaves: ["dignidade", "direitos humanos"] },
      { id: "p4", texto: "Não é escolha entre religioso OU secular. As duas linguagens convergem no mesmo cuidado — e podem construir juntas hospitais, escolas, políticas públicas.", chaves: ["convergem", "juntas"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TRADIÇÃO → PALAVRA! Cada situação mostra uma ação de cuidado. Qual palavra-conceito da tradição?",
    instrucao: "⏱️ Qual palavra guia essa ação?",
    duracaoSegundos: 12,
    pecas: [
      { id: "pikuach", emoji: "✡️", rotulo: "Pikuach Nefesh" },
      { id: "agape", emoji: "✝️", rotulo: "Ágape" },
      { id: "rahma", emoji: "☪️", rotulo: "Rahma" },
      { id: "karuna", emoji: "☸️", rotulo: "Karuna" },
      { id: "ubuntu", emoji: "🥁", rotulo: "Ubuntu" },
      { id: "dh", emoji: "⚖️", rotulo: "Direitos Humanos" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sábado suspenso", emoji: "🚑", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Hospital judaico", emoji: "✡️", cor: "from-indigo-400 to-blue-600" }, contexto: "Rabino autoriza médico judeu a trabalhar no sábado pra salvar acidentado grave.", pecaCertaId: "pikuach", feedbackAcerto: "Isso! Pikuach Nefesh se sobrepõe até ao shabat.", feedbackErro: "É PIKUACH NEFESH — salvar vida se sobrepõe a qualquer regra." },
      { id: "r2", municipioA: { nome: "Sopão", emoji: "🍲", cor: "from-red-400 to-pink-600" }, municipioB: { nome: "Cristã na rua", emoji: "✝️", cor: "from-pink-400 to-rose-600" }, contexto: "Voluntária cristã serve sopa aos moradores de rua toda quarta-feira: 'fiz ao Cristo em cada um deles'.", pecaCertaId: "agape", feedbackAcerto: "Perfeito! Ágape — amor incondicional cristão.", feedbackErro: "É ÁGAPE — amor cristão traduzido em cuidado concreto." },
      { id: "r3", municipioA: { nome: "Zakat", emoji: "🕌", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "Muçulmano dá 2,5%", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, contexto: "Comerciante muçulmano dá 2,5% da riqueza aos pobres todo ano: 'Allah é ar-Rahman, o Misericordioso'.", pecaCertaId: "rahma", feedbackAcerto: "Isso! Rahma — misericórdia divina que se imita.", feedbackErro: "É RAHMA — misericórdia central no islamismo." },
      { id: "r4", municipioA: { nome: "Templo", emoji: "🛕", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Abrigo animal", emoji: "🐕", cor: "from-yellow-400 to-orange-600" }, contexto: "Monja budista alimenta animais abandonados: 'todo ser sente sofrimento como eu'.", pecaCertaId: "karuna", feedbackAcerto: "Perfeito! Karuna — compaixão por todos os seres.", feedbackErro: "É KARUNA — compaixão budista por TODO ser vivo." },
      { id: "r5", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Idoso acolhido", emoji: "👴", cor: "from-orange-400 to-amber-600" }, contexto: "Terreiro de candomblé acolhe idoso abandonado pela família: 'o mais velho é raiz da comunidade'.", pecaCertaId: "ubuntu", feedbackAcerto: "Isso! Ubuntu — 'eu sou porque nós somos'.", feedbackErro: "É UBUNTU — só existo porque a comunidade existe." },
      { id: "r6", municipioA: { nome: "ONG", emoji: "⚖️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Ativista sem religião", emoji: "🌍", cor: "from-cyan-400 to-sky-600" }, contexto: "Ativista ateu processa empresa que explora trabalho infantil: 'toda criança tem direito à infância'.", pecaCertaId: "dh", feedbackAcerto: "Boa! Direitos Humanos — versão secular do cuidado.", feedbackErro: "É DIREITOS HUMANOS — linguagem secular do mesmo cuidado universal." },
    ],
    falaFinal: "6 palavras, 6 tradições, 1 princípio: cuidar da vida.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as duas grandes linguagens do cuidado.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "religiosa", rotulo: "Linguagem SAGRADA (~65%)", emoji: "🙏", percentual: 65, cor: "#f59e0b", descricao: "Vida como dom sagrado. Cuidar é responder ao Criador, aos ancestrais ou ao princípio divino que sustenta tudo.", exemplos: ["✡️ Pikuach Nefesh", "☸️ Karuna", "🥁 Ubuntu/Axé"] },
      { id: "secular", rotulo: "Linguagem SECULAR (~35%)", emoji: "⚖️", percentual: 35, cor: "#0ea5e9", descricao: "Vida como valor intrínseco. Cuidar é reconhecer dignidade humana e defender direitos que todos compartilham.", exemplos: ["🌍 Direitos Humanos", "🤝 Humanismo", "💎 Dignidade"] },
    ],
    falaFinal: "Duas linguagens. Mesmo cuidado. Sociedade real precisa das duas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CURADOR DA VIDA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Cuidar da vida é princípio:", opcoes: [
        { id: "a", texto: "Só religioso", correta: false },
        { id: "b", texto: "Humano universal — religioso e secular convergem", correta: true },
        { id: "c", texto: "Só de uma religião", correta: false },
      ], feedbackAcerto: "Isso! Princípio humano universal.", feedbackErro: "Cuidar da vida é humano — religiões e visões seculares convergem." },
      { id: "av2", pergunta: "DIGNIDADE HUMANA:", opcoes: [
        { id: "a", texto: "Depende da renda da pessoa", correta: false },
        { id: "b", texto: "É valor intrínseco — existe pelo fato de ser humano", correta: true },
        { id: "c", texto: "Só existe pra quem tem religião", correta: false },
      ], feedbackAcerto: "Perfeito! Dignidade é intrínseca.", feedbackErro: "Dignidade é intrínseca — não depende de renda, religião ou nada externo." },
      { id: "av3", pergunta: "Pikuach Nefesh, ágape, rahma, karuna, ubuntu, direitos humanos:", opcoes: [
        { id: "a", texto: "São conceitos que se contradizem", correta: false },
        { id: "b", texto: "São seis linguagens de um mesmo cuidado da vida", correta: true },
        { id: "c", texto: "Só um é verdadeiro", correta: false },
      ], feedbackAcerto: "Isso! Seis linguagens, uma ética universal do cuidado.", feedbackErro: "Seis palavras diferentes, um mesmo princípio ético: cuidar da vida." },
    ],
    selo: { nome: "Curador da Vida", subtitulo: "Insígnia do Princípio Zero", emoji: "🌱", cor: "from-emerald-400 to-green-600" },
    falaFinal: "Insígnia conquistada! Você tem a ética base pra tudo que vem depois.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Curador da Vida" },
};
