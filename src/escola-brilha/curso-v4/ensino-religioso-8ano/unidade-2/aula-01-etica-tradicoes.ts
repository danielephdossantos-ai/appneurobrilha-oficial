import type { AulaGeoV1 } from "../../types";
import { url as etica } from "@/assets/ensino-religioso-8ano/u2-etica.jpg.asset.json";
import { url as crencas } from "@/assets/ensino-religioso-8ano/u1-crencas.jpg.asset.json";
import { url as convicoes } from "@/assets/ensino-religioso-8ano/u1-convicoes.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 2 · Aula 01
 * "Ética das tradições" — EF08ER02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-etica-tradicoes",
  titulo: "A Ética das Tradições",
  iconeTrilha: "⚖️",
  bncc: ["EF08ER02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Cada tradição tem um núcleo ético.",
    mapaUrl: etica,
    imagemDestaqueUrl: convicoes,
    aurora:
      "Investigador, cada uma dessas tradições religiosas ou filosofias de vida tem um CORAÇÃO ÉTICO — um valor central que orienta tudo. Cristianismo: amor. Judaísmo: justiça (tzedaká). Islamismo: submissão à misericórdia. Budismo: compaixão. Humanismo: dignidade humana. Diferentes palavras, um chão comum: cuidar da vida do outro.",
    falaFinal: "Toda tradição séria tem um núcleo ético. Vamos investigar quais são.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: tradições tão diferentes podem ter FUNDAMENTOS ÉTICOS parecidos?",
    pergunta: "Existe base ética comum entre as tradições?",
    opcoes: [
      { id: "nao", titulo: "NÃO", subtitulo: "cada uma é totalmente diferente", emoji: "🚫", cor: "from-slate-400 to-gray-600" },
      { id: "sim", titulo: "SIM", subtitulo: "há princípios que se repetem", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "sim",
    feedbackAcerto: "Isso! Cuidar do outro, não matar sem motivo, honrar os pais, ser honesto — princípios que aparecem em quase todas.",
    feedbackErro: "Existe SIM: dignidade humana, cuidado com o próximo, honestidade — princípios que atravessam quase todas as grandes tradições.",
    falaFinal: "Base ética comum existe. Mas cada tradição tem seu sotaque próprio.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "moral", capa: "1. Moral", emoji: "📜", cor: "from-amber-500 to-orange-700", conteudo: "MORAL é o conjunto de regras concretas de uma cultura ou tradição sobre o que se deve ou não fazer. Muda de povo pra povo, de época pra época.", exemplo: "Ex.: 'não comer carne de porco' é moral judaica e islâmica; 'jejuar no Ramadã' é moral muçulmana.", fotoUrl: etica },
      { id: "etica", capa: "2. Ética", emoji: "⚖️", cor: "from-sky-500 to-blue-700", conteudo: "ÉTICA é a REFLEXÃO sobre as regras morais: por que elas existem? Fazem bem? Devem mudar? A ética olha pra moral com espírito crítico.", exemplo: "Ex.: perguntar 'faz sentido essa regra ainda hoje?' é atitude ética.", fotoUrl: convicoes },
      { id: "fundamento", capa: "3. Fundamento", emoji: "🏛️", cor: "from-purple-500 to-fuchsia-700", conteudo: "FUNDAMENTO ÉTICO é o valor central que sustenta a moral de uma tradição. Da amor cristão nasce a moral cristã; da compaixão budista, a moral budista.", exemplo: "Ex.: 'todo ser humano tem dignidade' fundamenta os direitos humanos modernos.", fotoUrl: crencas },
    ],
    falaFinal: "Moral = regra. Ética = pensar a regra. Fundamento = por que a regra existe.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 tradições, 5 fundamentos éticos centrais. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: etica,
    pontos: [
      { id: "cristianismo", x: 20, y: 26, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo — Ágape (amor)", texto: "Fundamento: amor incondicional ao próximo, inclusive ao estranho e ao inimigo. Moral cristã nasce daí.", fotoUrl: convicoes },
      { id: "judaismo", x: 72, y: 26, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "Judaísmo — Tzedaká (justiça)", texto: "Fundamento: justiça como DEVER, não caridade. Cuidar do pobre é obrigação, não favor.", fotoUrl: etica },
      { id: "islamismo", x: 26, y: 68, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "Islamismo — Rahma (misericórdia)", texto: "Fundamento: misericórdia de Alá se traduz em zakat (esmola obrigatória) e cuidado com órfãos e viúvas.", fotoUrl: crencas },
      { id: "budismo", x: 74, y: 68, emoji: "☸️", cor: "from-red-500 to-rose-700", titulo: "Budismo — Karuna (compaixão)", texto: "Fundamento: reduzir o sofrimento de TODOS os seres — humanos e não humanos. Moral budista nasce disso.", fotoUrl: etica },
      { id: "humanismo", x: 50, y: 88, emoji: "🌍", cor: "from-purple-500 to-fuchsia-700", titulo: "Humanismo — Dignidade humana", texto: "Fundamento: todo ser humano tem valor absoluto, independente de religião, raça, gênero. Base dos direitos humanos.", fotoUrl: convicoes },
    ],
    falaFinal: "5 fundamentos diferentes. Todos protegem a vida humana.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "MORAL e ÉTICA:", fotoUrl: etica, cards: [
        { id: "iguais", emoji: "🟰", titulo: "São a mesma coisa", cor: "from-slate-400 to-gray-600" },
        { id: "reflete", emoji: "🤔", titulo: "Ética reflete sobre a moral", cor: "from-sky-500 to-blue-700" },
        { id: "opostas", emoji: "↔️", titulo: "São opostas", cor: "from-red-500 to-rose-700" },
      ], correta: "reflete", feedbackAcerto: "Isso! Moral é a regra; ética pergunta por que ela existe e se ainda faz sentido.", feedbackErro: "Moral é a regra concreta; ética é pensar criticamente sobre ela." },
      { id: "q2", pergunta: "TZEDAKÁ, no judaísmo, significa:", fotoUrl: crencas, cards: [
        { id: "favor", emoji: "🎁", titulo: "Ajudar por favor", cor: "from-slate-400 to-gray-600" },
        { id: "justica", emoji: "⚖️", titulo: "Justiça como DEVER, não caridade", cor: "from-amber-500 to-orange-700" },
        { id: "lucro", emoji: "💰", titulo: "Ganhar dinheiro", cor: "from-red-500 to-rose-700" },
      ], correta: "justica", feedbackAcerto: "Perfeito! Ajudar o pobre é obrigação, não bondade opcional.", feedbackErro: "Tzedaká = JUSTIÇA. Cuidar de quem precisa é dever, não favor." },
      { id: "q3", pergunta: "Humanismo não religioso ainda pode ter fundamento ético?", fotoUrl: convicoes, cards: [
        { id: "nao", emoji: "🚫", titulo: "Não. Sem deus não tem ética", cor: "from-slate-400 to-gray-600" },
        { id: "sim", emoji: "🌍", titulo: "Sim. Dignidade humana é fundamento suficiente", cor: "from-emerald-500 to-green-700" },
        { id: "so", emoji: "📱", titulo: "Só ética moderna vale", cor: "from-red-500 to-rose-700" },
      ], correta: "sim", feedbackAcerto: "Isso! Dignidade humana funda ética sem precisar de religião.", feedbackErro: "Sim, tem: humanismo funda ética na dignidade humana. Direitos humanos nasceram assim." },
    ],
    falaFinal: "Radar dos fundamentos afiado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, todas essas tradições convivem em espaços públicos. Acenda 5 estados de forte pluralismo.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "BA", "RS"], pergunta: "5 estados com forte presença de tradições e filosofias de vida distintas convivendo?" },
    falaFinal: "SP, RJ, MG, BA, RS — laboratórios da convivência ética plural.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma tradição forma sua ÉTICA?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do valor central à conduta:",
    paradas: [
      { id: "valor", emoji: "💎", rotulo: "1. VALOR central", descricao: "A tradição identifica um valor supremo: amor, justiça, compaixão, dignidade..." },
      { id: "fundamento", emoji: "🏛️", rotulo: "2. FUNDAMENTO se firma", descricao: "Esse valor vira FUNDAMENTO ÉTICO — a base de tudo mais." },
      { id: "moral", emoji: "📜", rotulo: "3. MORAL se formula", descricao: "Do fundamento nascem regras concretas: o que se deve/não deve fazer." },
      { id: "pratica", emoji: "🤝", rotulo: "4. PRÁTICA acontece", descricao: "As pessoas vivem essas regras no dia a dia — na família, no trabalho, na comunidade." },
      { id: "reflexao", emoji: "🤔", rotulo: "5. REFLEXÃO ética", descricao: "Cada geração pergunta: essas regras ainda protegem o valor central? Precisam mudar?" },
    ],
    ordemCerta: ["valor", "fundamento", "moral", "pratica", "reflexao"],
    feedbackAcerto: "Perfeito! Valor → fundamento → moral → prática → reflexão.",
    feedbackErro: "A ordem: VALOR central, FUNDAMENTO se firma, MORAL se formula, PRÁTICA acontece, REFLEXÃO ética.",
    falaFinal: "5 passos. É como toda tradição séria constrói sua ética.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 2 — Fundamentos éticos",
    paragrafos: [
      { id: "p1", texto: "MORAL é o conjunto de regras concretas de uma cultura. ÉTICA é a reflexão crítica sobre essas regras — por que existem, se ainda fazem sentido, se deveriam mudar.", chaves: ["moral", "ética"] },
      { id: "p2", texto: "Toda tradição séria tem um FUNDAMENTO ÉTICO — o valor central que sustenta todas as regras. Cristianismo: amor. Judaísmo: justiça. Islamismo: misericórdia. Budismo: compaixão.", chaves: ["fundamento", "valor central"] },
      { id: "p3", texto: "Filosofias de vida não religiosas, como o HUMANISMO, também têm fundamento: a DIGNIDADE HUMANA. Deu origem à Declaração Universal dos Direitos Humanos (1948).", chaves: ["humanismo", "dignidade"] },
      { id: "p4", texto: "Comparar fundamentos ajuda a ENTENDER — nunca a escolher qual é 'melhor'. Cada tradição tem seu caminho pro mesmo cuidado com a vida.", chaves: ["comparar", "entender"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo FUNDAMENTOS! Cada frase revela o fundamento ético de UMA tradição. Qual é?",
    instrucao: "⏱️ Qual tradição tem esse fundamento?",
    duracaoSegundos: 12,
    pecas: [
      { id: "crist", emoji: "✝️", rotulo: "Cristianismo (amor)" },
      { id: "jud", emoji: "🕎", rotulo: "Judaísmo (justiça)" },
      { id: "isl", emoji: "☪️", rotulo: "Islamismo (misericórdia)" },
      { id: "bud", emoji: "☸️", rotulo: "Budismo (compaixão)" },
      { id: "hum", emoji: "🌍", rotulo: "Humanismo (dignidade)" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileiro (axé/ancestralidade)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Ágape", emoji: "❤️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Ame inclusive o inimigo", emoji: "✝️", cor: "from-indigo-400 to-blue-700" }, contexto: "Amor incondicional ao próximo, inclusive ao estranho e ao inimigo.", pecaCertaId: "crist", feedbackAcerto: "Isso! Fundamento cristão.", feedbackErro: "É CRISTIANISMO — ágape, amor incondicional." },
      { id: "r2", municipioA: { nome: "Tzedaká", emoji: "⚖️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Ajudar é dever", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, contexto: "Cuidar do pobre é OBRIGAÇÃO, não bondade opcional.", pecaCertaId: "jud", feedbackAcerto: "Perfeito! Judaísmo — tzedaká como dever.", feedbackErro: "É JUDAÍSMO — tzedaká significa justiça, não caridade." },
      { id: "r3", municipioA: { nome: "Rahma", emoji: "🤲", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Zakat obrigatório", emoji: "☪️", cor: "from-teal-400 to-emerald-600" }, contexto: "Misericórdia de Alá vira esmola obrigatória — 2,5% da riqueza pros que precisam.", pecaCertaId: "isl", feedbackAcerto: "Isso! Islamismo — misericórdia institucionalizada.", feedbackErro: "É ISLAMISMO — rahma, misericórdia que vira zakat obrigatório." },
      { id: "r4", municipioA: { nome: "Karuna", emoji: "🕊️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Todos os seres", emoji: "☸️", cor: "from-orange-400 to-red-600" }, contexto: "Reduzir sofrimento de todos os seres — humanos, animais, insetos, plantas.", pecaCertaId: "bud", feedbackAcerto: "Perfeito! Budismo — compaixão universal.", feedbackErro: "É BUDISMO — karuna, compaixão por todo ser sensível." },
      { id: "r5", municipioA: { nome: "Direitos Humanos", emoji: "🌍", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "1948, ONU", emoji: "📜", cor: "from-indigo-400 to-purple-600" }, contexto: "Todo ser humano tem valor absoluto, sem depender de religião, raça ou classe.", pecaCertaId: "hum", feedbackAcerto: "Boa! Humanismo — dignidade humana como fundamento.", feedbackErro: "É HUMANISMO — funda a ética na dignidade humana, sem religião." },
      { id: "r6", municipioA: { nome: "Ancestralidade", emoji: "🥁", cor: "from-orange-400 to-amber-600" }, municipioB: { nome: "Comunidade viva", emoji: "🌳", cor: "from-yellow-400 to-orange-600" }, contexto: "Respeitar mais velhos e ancestrais mantém o axé — a força vital — circulando na comunidade.", pecaCertaId: "afro", feedbackAcerto: "Isso! Tradições afro-brasileiras.", feedbackErro: "É AFRO-BRASILEIRO — axé e ancestralidade sustentam a comunidade." },
    ],
    falaFinal: "6 fundamentos éticos. Investigador da Ética afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: dois grandes caminhos éticos hoje.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "religiosa", rotulo: "Éticas de matriz RELIGIOSA (~70%)", emoji: "🙏", percentual: 70, cor: "#f59e0b", descricao: "Amor, justiça, misericórdia, compaixão, ancestralidade. Fundamentos que vêm de tradições religiosas milenares.", exemplos: ["✝️ Ágape", "🕎 Tzedaká", "☪️ Rahma", "☸️ Karuna"] },
      { id: "secular", rotulo: "Éticas SECULARES (~30%)", emoji: "🌍", percentual: 30, cor: "#0ea5e9", descricao: "Humanismo, direitos humanos, ética ambiental. Fundam-se em dignidade humana e razão, sem religião.", exemplos: ["🌍 Direitos Humanos", "⚖️ Ética filosófica"] },
    ],
    falaFinal: "Duas matrizes. Ambas protegem a vida do outro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia ANALISTA DE FUNDAMENTOS.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "MORAL e ÉTICA se distinguem porque:", opcoes: [
        { id: "a", texto: "Ética é a regra, moral é a reflexão", correta: false },
        { id: "b", texto: "Moral é a regra concreta, ética é a reflexão crítica sobre ela", correta: true },
        { id: "c", texto: "Ambas são iguais", correta: false },
      ], feedbackAcerto: "Isso! Moral aplica; ética questiona.", feedbackErro: "MORAL = regra. ÉTICA = pensar criticamente sobre a regra." },
      { id: "av2", pergunta: "Tradições religiosas diferentes têm fundamentos éticos:", opcoes: [
        { id: "a", texto: "Sempre opostos", correta: false },
        { id: "b", texto: "Diferentes, mas frequentemente convergentes no cuidado com a vida", correta: true },
        { id: "c", texto: "Sempre idênticos", correta: false },
      ], feedbackAcerto: "Perfeito! Diferentes caminhos, cuidado semelhante com a vida.", feedbackErro: "Diferentes, mas costumam CONVERGIR no cuidado com a vida do outro." },
      { id: "av3", pergunta: "Uma ética SEM religião:", opcoes: [
        { id: "a", texto: "É impossível", correta: false },
        { id: "b", texto: "Existe: fundamenta-se em dignidade humana e razão", correta: true },
        { id: "c", texto: "É sempre má", correta: false },
      ], feedbackAcerto: "Isso! Humanismo prova: dignidade humana funda ética séria.", feedbackErro: "É possível SIM: humanismo funda ética na dignidade humana. Direitos Humanos nasceram assim." },
    ],
    selo: { nome: "Analista de Fundamentos", subtitulo: "Insígnia da Ética das Tradições", emoji: "⚖️", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você reconhece o coração ético de cada tradição.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Analista de Fundamentos" },
};
