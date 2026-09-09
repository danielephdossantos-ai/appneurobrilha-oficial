import type { AulaGeoV1 } from "../../types";
import { url as dialogo } from "@/assets/ensino-religioso-7ano/u7-dialogo-inter.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-7ano/u1-etica-comum.jpg.asset.json";
import { url as ritos } from "@/assets/ensino-religioso-7ano/u5-ritos-coletivos.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 7 · Aula 01
 * "Diálogo Inter-religioso" — EF07ER07 (finale)
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-dialogo-inter-religioso",
  titulo: "Diálogo Inter-religioso",
  iconeTrilha: "🤝",
  bncc: ["EF07ER07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: 4 lideranças religiosas sentadas na mesma sala.",
    mapaUrl: dialogo,
    imagemDestaqueUrl: dialogo,
    aurora:
      "Investigador, olha bem. Um padre católico, um imam muçulmano, um rabino judeu e um monge budista. Sentados. Escutando. Nenhum tentando CONVERTER o outro. Nenhum querendo PROVAR quem é o certo. Só conversando sobre a paz, sobre os pobres, sobre a Terra. Isso tem nome: DIÁLOGO INTER-RELIGIOSO. E é uma das descobertas mais importantes do nosso século.",
    falaFinal:
      "Última aula do 7º ano. Como tradições diferentes podem CONVIVER, DIALOGAR e trabalhar JUNTAS — sem apagar diferenças, sem virar iguais.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: pra tradições religiosas MUITO diferentes conversarem em paz, o que é essencial?",
    pergunta: "O que sustenta o diálogo?",
    opcoes: [
      { id: "convencer", titulo: "Cada um convencer o outro", subtitulo: "que a sua fé é a certa", emoji: "🎯", cor: "from-slate-400 to-gray-600" },
      { id: "escutar", titulo: "ESCUTAR pra entender", subtitulo: "sem querer converter, com respeito", emoji: "👂", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "escutar",
    feedbackAcerto: "Isso! Diálogo NÃO é competição. É escutar pra entender — sem querer converter.",
    feedbackErro: "Não. Tentar converter fecha o diálogo. Escutar pra ENTENDER abre.",
    falaFinal: "Diálogo = escutar sem converter.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "dialogo", capa: "1. Diálogo", emoji: "💬", cor: "from-sky-500 to-blue-700", conteudo: "DIÁLOGO ('dia' = através, 'logos' = palavra) é uma conversa em que os dois lados FALAM E ESCUTAM de verdade. Diferente de debate (competição) e de sermão (um só fala).", exemplo: "Ex.: um padre e um imam sentados juntos, cada um explicando o próprio jejum sem querer converter o outro.", fotoUrl: dialogo },
      { id: "tolerancia", capa: "2. Tolerância x Respeito", emoji: "🤝", cor: "from-amber-500 to-orange-700", conteudo: "TOLERAR é 'aguentar' o outro. RESPEITAR é reconhecer que o outro tem VALOR mesmo sendo diferente. Diálogo maduro vai além da tolerância: chega ao respeito ativo.", exemplo: "Ex.: não é 'aguentar' o vizinho evangélico — é reconhecer que a fé dele tem valor pra ele, e isso basta.", fotoUrl: etica },
      { id: "laicidade", capa: "3. Laicidade", emoji: "🏛️", cor: "from-emerald-500 to-green-700", conteudo: "LAICIDADE é o princípio de que o ESTADO (governo) não tem religião oficial e trata TODAS igualmente. Isso NÃO é ser 'contra religião' — é PROTEGER a liberdade de todas.", exemplo: "Ex.: no Brasil, a Constituição garante que ninguém pode ser obrigado ou impedido de praticar religião.", fotoUrl: ritos },
    ],
    falaFinal: "Diálogo, respeito, laicidade. Trinca final.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos históricos de DIÁLOGO inter-religioso. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: dialogo,
    pontos: [
      { id: "assis", x: 22, y: 30, emoji: "🕊️", cor: "from-sky-500 to-blue-700", titulo: "ASSIS 1986 — Encontro pela Paz", texto: "O Papa João Paulo II reuniu líderes de 12 tradições religiosas na Itália pra ORAREM JUNTOS pela paz mundial. Foi a primeira vez na história moderna. Um marco: rezar juntos, cada um do seu jeito.", fotoUrl: dialogo },
      { id: "gandhi", x: 70, y: 30, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "GANDHI — hindu ensinando pra todos", texto: "Mahatma Gandhi (hindu) baseou sua luta contra a colonização em princípios que TODAS as religiões compartilham: não-violência, verdade, respeito à vida. Inspirou até Martin Luther King (cristão).", fotoUrl: etica },
      { id: "brasil", x: 30, y: 72, emoji: "🇧🇷", cor: "from-emerald-500 to-green-700", titulo: "BRASIL — Constituição de 1988", texto: "'Todos são iguais perante a lei... é inviolável a liberdade de consciência e de crença.' O Brasil se declara Estado LAICO — que respeita todas as tradições, sem privilegiar nenhuma.", fotoUrl: ritos },
      { id: "conselho", x: 76, y: 68, emoji: "🌍", cor: "from-purple-500 to-fuchsia-700", titulo: "CONSELHO MUNDIAL DE RELIGIÕES", texto: "Existem hoje organizações permanentes onde judeus, cristãos, muçulmanos, budistas, hindus e indígenas conversam SEMPRE — sobre paz, meio ambiente, direitos humanos.", fotoUrl: dialogo },
    ],
    falaFinal: "4 exemplos reais. Diálogo NÃO é utopia — está acontecendo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "DIÁLOGO inter-religioso é:", fotoUrl: dialogo, cards: [
        { id: "converter", emoji: "🎯", titulo: "Cada um tentar converter o outro", cor: "from-slate-400 to-gray-600" },
        { id: "escutar", emoji: "👂", titulo: "Conversar escutando de verdade, sem querer converter", cor: "from-sky-500 to-blue-700" },
        { id: "concordar", emoji: "✅", titulo: "Todos concordarem em tudo", cor: "from-red-500 to-rose-700" },
      ], correta: "escutar", feedbackAcerto: "Isso! Diálogo NÃO é competição nem exige concordância total.", feedbackErro: "Diálogo NÃO é converter nem exigir concordância. É escutar pra entender." },
      { id: "q2", pergunta: "LAICIDADE do Estado significa:", fotoUrl: ritos, cards: [
        { id: "contra", emoji: "❌", titulo: "Estado contra a religião", cor: "from-slate-400 to-gray-600" },
        { id: "sem-oficial", emoji: "🏛️", titulo: "Estado sem religião oficial, tratando TODAS igualmente", cor: "from-emerald-500 to-green-700" },
        { id: "so-crista", emoji: "✝️", titulo: "Só religião cristã permitida", cor: "from-red-500 to-rose-700" },
      ], correta: "sem-oficial", feedbackAcerto: "Perfeito! Laicidade PROTEGE a liberdade de todas as religiões.", feedbackErro: "Laicidade NÃO é contra religião. É Estado SEM religião oficial, tratando TODAS igualmente." },
      { id: "q3", pergunta: "A diferença entre TOLERAR e RESPEITAR é:", fotoUrl: etica, cards: [
        { id: "igual", emoji: "🟰", titulo: "São a mesma coisa", cor: "from-slate-400 to-gray-600" },
        { id: "aguentar", emoji: "🤝", titulo: "Tolerar é aguentar; respeitar é reconhecer VALOR", cor: "from-amber-500 to-orange-700" },
        { id: "contrario", emoji: "🔄", titulo: "São opostos", cor: "from-red-500 to-rose-700" },
      ], correta: "aguentar", feedbackAcerto: "Isso! Respeito é mais profundo que tolerância. É reconhecer valor.", feedbackErro: "Tolerar é aguentar; RESPEITAR é reconhecer que o outro tem VALOR, mesmo sendo diferente." },
    ],
    falaFinal: "Radar final afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados brasileiros com histórico forte de DIÁLOGO inter-religioso e proteção da liberdade.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "MG", "RS"], pergunta: "5 estados com grandes ações inter-religiosas contra intolerância?" },
    falaFinal: "SP, RJ, BA, MG, RS. Onde diálogo acontece na prática.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como CONSTRUIR um diálogo real com alguém de outra religião?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Passos do diálogo:",
    paradas: [
      { id: "abrir", emoji: "🚪", rotulo: "1. ABRIR-se", descricao: "Aceitar que o outro pode ter razão em algo, ou pelo menos que faz sentido pra ele." },
      { id: "escutar", emoji: "👂", rotulo: "2. ESCUTAR sem interromper", descricao: "Deixar o outro explicar do jeito dele — sem pré-julgar." },
      { id: "perguntar", emoji: "❓", rotulo: "3. PERGUNTAR com curiosidade", descricao: "Fazer perguntas honestas, não pra criticar, mas pra entender melhor." },
      { id: "compartilhar", emoji: "💬", rotulo: "4. COMPARTILHAR sua visão", descricao: "Contar como você vê, sem dizer que é a única forma certa." },
      { id: "juntos", emoji: "🤝", rotulo: "5. AGIR juntos no comum", descricao: "Descobrir valores compartilhados e trabalhar JUNTOS no que importa: paz, meio ambiente, cuidado com os pobres." },
    ],
    ordemCerta: ["abrir", "escutar", "perguntar", "compartilhar", "juntos"],
    feedbackAcerto: "Perfeito! Abrir → escutar → perguntar → compartilhar → agir juntos.",
    feedbackErro: "A ordem: ABRIR-se, ESCUTAR, PERGUNTAR, COMPARTILHAR, AGIR juntos.",
    falaFinal: "5 passos. Diálogo real.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Última leitura do 7º ano.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 7 — Diálogo Inter-religioso",
    paragrafos: [
      { id: "p1", texto: "DIÁLOGO INTER-RELIGIOSO é a conversa MADURA entre tradições diferentes, onde os dois lados falam E ESCUTAM sem querer converter o outro. É uma das grandes descobertas do século XX.", chaves: ["diálogo", "escutam"] },
      { id: "p2", texto: "TOLERÂNCIA é 'aguentar' o outro. RESPEITO é reconhecer que o outro tem VALOR mesmo sendo diferente. O diálogo maduro busca o respeito, não só a tolerância.", chaves: ["respeito", "valor"] },
      { id: "p3", texto: "LAICIDADE do Estado NÃO significa ser contra religião. Significa que o governo não tem religião oficial e trata TODAS igualmente — protegendo a liberdade de cada uma. A Constituição brasileira de 1988 garante isso.", chaves: ["laicidade", "iguais"] },
      { id: "p4", texto: "Depois de 7 unidades investigando princípios éticos, símbolos, ritos, mitos e ideias de divindade, uma conclusão fica clara: as tradições religiosas DIFEREM em muito, mas COMPARTILHAM valores éticos essenciais — e podem conviver com respeito.", chaves: ["diferem", "compartilham"] },
    ],
    falaFinal: "Última leitura. Bora fechar com o minijogo final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GUARDIÃO DO DIÁLOGO! Cada situação exige uma atitude certa. Qual é?",
    instrucao: "⏱️ Qual é a atitude certa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "escutar", emoji: "👂", rotulo: "Escutar sem julgar" },
      { id: "respeitar", emoji: "🤝", rotulo: "Respeitar mesmo diferente" },
      { id: "defender", emoji: "🛡️", rotulo: "Defender liberdade de todos" },
      { id: "colaborar", emoji: "🌍", rotulo: "Colaborar no bem comum" },
      { id: "denunciar", emoji: "📢", rotulo: "Denunciar intolerância" },
      { id: "conviver", emoji: "🏘️", rotulo: "Conviver na diferença" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Colega umbandista", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Explica sua fé", emoji: "💬", cor: "from-orange-400 to-red-600" }, contexto: "Você é cristão. O que fazer?", pecaCertaId: "escutar", feedbackAcerto: "Isso! Escutar pra entender, não pra criticar.", feedbackErro: "É ESCUTAR sem julgar. Depois, se quiser, contar sua visão." },
      { id: "r2", municipioA: { nome: "Mesquita bairro", emoji: "🕌", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Vizinhos protestam", emoji: "❌", cor: "from-slate-400 to-gray-600" }, contexto: "Alguns vizinhos querem impedir a construção.", pecaCertaId: "defender", feedbackAcerto: "Perfeito! Defender liberdade de todas as religiões.", feedbackErro: "É DEFENDER a liberdade — a Constituição garante." },
      { id: "r3", municipioA: { nome: "Enchente na cidade", emoji: "🌊", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Igreja + terreiro + mesquita", emoji: "🤝", cor: "from-cyan-400 to-blue-600" }, contexto: "Como responder juntos à tragédia?", pecaCertaId: "colaborar", feedbackAcerto: "Isso! Bem comum acima das diferenças.", feedbackErro: "É COLABORAR — o sofrimento humano une todas as tradições." },
      { id: "r4", municipioA: { nome: "Terreiro atacado", emoji: "🚨", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Intolerância religiosa", emoji: "⚠️", cor: "from-orange-400 to-red-600" }, contexto: "Alguém depredou o local sagrado.", pecaCertaId: "denunciar", feedbackAcerto: "Perfeito! Intolerância é CRIME e deve ser denunciada.", feedbackErro: "É DENUNCIAR — intolerância religiosa é crime pela Lei brasileira." },
      { id: "r5", municipioA: { nome: "Vizinho ateu", emoji: "🧠", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Você é praticante", emoji: "🙏", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Ele não crê em nada. Você é religioso.", pecaCertaId: "respeitar", feedbackAcerto: "Isso! Não crer também é opção legítima.", feedbackErro: "É RESPEITAR — não crer é opção legítima protegida por lei." },
      { id: "r6", municipioA: { nome: "Mesma escola", emoji: "🏫", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "5 tradições diferentes", emoji: "🌈", cor: "from-pink-400 to-fuchsia-600" }, contexto: "Como fazer todo dia?", pecaCertaId: "conviver", feedbackAcerto: "Boa! Conviver diariamente na diferença — o dia a dia constrói.", feedbackErro: "É CONVIVER — a convivência diária é onde diálogo VIRA prática." },
    ],
    falaFinal: "6 atitudes! Você virou Guardião do Diálogo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza final: os dois grandes pilares do diálogo inter-religioso.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "respeito", rotulo: "RESPEITO à diferença (~50%)", emoji: "🤝", percentual: 50, cor: "#6366f1", descricao: "Reconhecer que o outro tem valor mesmo sendo diferente. Nenhuma tradição precisa desaparecer pra outra existir.", exemplos: ["👂 Escutar", "🛡️ Proteger", "🕊️ Não converter"] },
      { id: "colaboracao", rotulo: "COLABORAÇÃO no comum (~50%)", emoji: "🌍", percentual: 50, cor: "#10b981", descricao: "Trabalhar juntos no que TODAS as tradições valorizam: paz, justiça, cuidado com os pobres, proteção da Terra.", exemplos: ["🕊️ Paz", "🌱 Meio ambiente", "🤲 Pobres"] },
    ],
    falaFinal: "Respeito + colaboração. Fórmula da convivência.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DO DIÁLOGO e fechar o 7º ano!",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "DIÁLOGO inter-religioso NÃO é:", opcoes: [
        { id: "a", texto: "Escutar pra entender", correta: false },
        { id: "b", texto: "Tentar converter o outro à sua fé", correta: true },
        { id: "c", texto: "Colaborar no bem comum", correta: false },
      ], feedbackAcerto: "Isso! Tentar converter FECHA o diálogo.", feedbackErro: "Diálogo NÃO é converter. É escutar e colaborar. Converter é o oposto do diálogo." },
      { id: "av2", pergunta: "LAICIDADE do Estado brasileiro significa que:", opcoes: [
        { id: "a", texto: "Religião é proibida", correta: false },
        { id: "b", texto: "O Estado protege TODAS as religiões igualmente, sem oficial", correta: true },
        { id: "c", texto: "Só a religião católica é permitida", correta: false },
      ], feedbackAcerto: "Perfeito! Laicidade PROTEGE a liberdade de todas.", feedbackErro: "Laicidade PROTEGE todas as religiões igualmente. Não proíbe nenhuma." },
      { id: "av3", pergunta: "Depois de estudar tantas tradições diferentes, a conclusão do 7º ano é:", opcoes: [
        { id: "a", texto: "Uma delas é a certa e as outras estão erradas", correta: false },
        { id: "b", texto: "Elas diferem em muito, mas compartilham valores éticos essenciais — e podem conviver com respeito", correta: true },
        { id: "c", texto: "Todas são iguais", correta: false },
      ], feedbackAcerto: "Isso! Diferentes SIM. Iguais NÃO. Mas com valores comuns e capazes de conviver.", feedbackErro: "Nem uma é a 'certa', nem todas são iguais. DIFEREM em muito MAS compartilham valores éticos essenciais." },
    ],
    selo: { nome: "Guardião do Diálogo", subtitulo: "Insígnia Final do 7º Ano — Investigador das Éticas", emoji: "🤝", cor: "from-indigo-400 to-purple-600" },
    falaFinal: "INSÍGNIA FINAL CONQUISTADA! Você fechou o 7º Ano de Ensino Religioso. Investigador formado.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Guardião do Diálogo — 7º Ano" },
};
