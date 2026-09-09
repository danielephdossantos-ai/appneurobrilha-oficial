import type { AulaGeoV1 } from "../../types";
import { url as bioImg } from "@/assets/filosofia-9ano/u5-bioetica.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 5 · Aula 01
 * "Vida, Diálogo e Ética do Século XXI" — EF09FI05 (autoral)
 * Tema: Ética Contemporânea e Bioética — Habermas, Peter Singer.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-etica-bioetica",
  titulo: "Vida, Diálogo e Ética do Século XXI",
  iconeTrilha: "🧬",
  bncc: ["EF09FI05"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: bioImg,
    imagemDestaqueUrl: bioImg,
    aurora:
      "Investigador, olhe este laboratório: hoje é possível editar genes com CRISPR, prolongar a vida por décadas, transplantar órgãos, criar embriões e treinar inteligências artificiais que tomam decisões médicas. A técnica avançou vertiginosamente — e a pergunta ética VOLTOU com força: é lícito porque é possível? Jürgen Habermas propõe a ética do DIÁLOGO — só é justo o que TODOS os afetados poderiam aceitar após argumentação livre. Peter Singer amplia o círculo moral a animais e ao futuro. Nasce a bioética.",
    falaFinal:
      "Nesta aula você entra no laboratório da ética. Três chaves: agir comunicativo, círculo moral e bioética.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: como decidir se uma nova tecnologia médica é ETICAMENTE aceitável?",
    pergunta: "O critério mais forte é…",
    opcoes: [
      { id: "dialogo", titulo: "DIÁLOGO livre entre todos os afetados", subtitulo: "cientistas, pacientes, sociedade — argumentos, não força", emoji: "🗣️", cor: "from-sky-400 to-blue-600" },
      { id: "mercado", titulo: "Se o MERCADO comprar, é aceitável", subtitulo: "o preço decide o que é bom pra sociedade", emoji: "💰", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "dialogo",
    feedbackAcerto: "Boa. Habermas: ética exige DIÁLOGO ideal — só é norma justa aquela que todos poderiam aceitar racionalmente.",
    feedbackErro: "Mercado não é ética — é preferência de quem pode pagar. Habermas insiste no diálogo racional entre todos.",
    falaFinal: "Ética = diálogo entre todos os afetados. Não é mercado nem imposição.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "comunicativo", capa: "1. Agir comunicativo (Habermas)", emoji: "🗣️", cor: "from-sky-500 to-blue-700", conteudo: "AGIR COMUNICATIVO, pra Habermas, é a ação orientada pela BUSCA DE ENTENDIMENTO — não pela vitória, pela manipulação nem pelo dinheiro. Só a força do MELHOR ARGUMENTO deve prevalecer. Uma norma é moralmente válida se puder ser aceita por todos os afetados em diálogo livre e simétrico.", exemplo: "Ex.: assembleia comunitária que discute com todos, sem coação, o uso de novos medicamentos.", fotoUrl: bioImg },
      { id: "circulo", capa: "2. Círculo moral (Singer)", emoji: "🔄", cor: "from-emerald-500 to-teal-700", conteudo: "CÍRCULO MORAL é o conjunto de seres que consideramos moralmente relevantes. Historicamente foi ampliando: só a família → só o clã → só o povo → toda humanidade → animais sencientes → gerações futuras → ecossistemas. Peter Singer defende que TODO ser capaz de sofrer entra no círculo.", exemplo: "Ex.: passar a considerar bem-estar de galinhas em granja e da floresta amazônica como questões éticas — não só econômicas.", fotoUrl: bioImg },
      { id: "bioetica", capa: "3. Bioética", emoji: "🧬", cor: "from-red-500 to-rose-700", conteudo: "BIOÉTICA é a ética aplicada aos dilemas da vida biológica e biomédica: eutanásia, aborto, edição genética (CRISPR), clonagem, IA em diagnóstico, pesquisa em humanos. Guia-se por 4 princípios: AUTONOMIA (respeitar a vontade), BENEFICÊNCIA (fazer o bem), NÃO-MALEFICÊNCIA (não prejudicar) e JUSTIÇA (distribuir recursos com equidade).", exemplo: "Ex.: comitê de bioética hospitalar decide se um adolescente tem autonomia pra recusar transfusão.", fotoUrl: bioImg },
    ],
    falaFinal: "Agir comunicativo, círculo moral, bioética. As 3 alavancas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos da ética contemporânea.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: bioImg,
    pontos: [
      { id: "1947-nuremberg", x: 22, y: 30, emoji: "⚖️", cor: "from-red-500 to-rose-700", titulo: "1947 — Código de Nuremberg", texto: "Após revelação dos experimentos nazistas em prisioneiros, o Tribunal de Nuremberg estabelece 10 princípios para pesquisa em humanos, com destaque para o CONSENTIMENTO LIVRE. Nasce a bioética moderna." },
      { id: "1975-libertacao", x: 74, y: 30, emoji: "🐷", cor: "from-emerald-500 to-teal-700", titulo: "1975 — Peter Singer, Libertação Animal", texto: "Singer denuncia o 'especismo' — preconceito contra outras espécies capazes de sofrer. Amplia o CÍRCULO MORAL a animais sencientes. Livro-bomba pra ética contemporânea." },
      { id: "1981-habermas", x: 26, y: 70, emoji: "🗣️", cor: "from-sky-500 to-blue-700", titulo: "1981 — Habermas, Teoria do Agir Comunicativo", texto: "Habermas propõe: norma justa é aquela que todos os afetados poderiam aceitar em diálogo livre e simétrico. Nasce a ÉTICA DO DISCURSO." },
      { id: "hoje", x: 76, y: 70, emoji: "🧬", cor: "from-fuchsia-500 to-purple-700", titulo: "Hoje — CRISPR, IA, clima", texto: "Edição genética permanente, IA que decide sobre pacientes, mudanças climáticas: dilemas éticos que envolvem gerações futuras. Habermas e Singer ficaram indispensáveis." },
    ],
    falaFinal: "1947 → 1975 → 1981 → hoje. A ética se atualiza.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "AGIR COMUNICATIVO, em Habermas, é ação orientada por…", cards: [
        { id: "entendimento", emoji: "🗣️", titulo: "Busca de entendimento pela força do melhor argumento", cor: "from-sky-500 to-blue-700" },
        { id: "forca", emoji: "⚔️", titulo: "Uso da força para vencer o oponente", cor: "from-red-400 to-rose-600" },
        { id: "dinheiro", emoji: "💰", titulo: "Recompensa financeira imediata", cor: "from-emerald-400 to-teal-600" },
      ], correta: "entendimento", feedbackAcerto: "Isso. Só o melhor argumento — não força nem dinheiro.", feedbackErro: "Não é força nem dinheiro: é entendimento pelo argumento." },
      { id: "q2", pergunta: "CÍRCULO MORAL, em Singer, se amplia para…", cards: [
        { id: "sencientes", emoji: "🔄", titulo: "Todos os seres capazes de sofrer, incluindo animais", cor: "from-emerald-500 to-teal-700" },
        { id: "familia", emoji: "👨‍👩‍👧", titulo: "Apenas a família mais próxima", cor: "from-slate-400 to-gray-600" },
        { id: "humanos", emoji: "🚶", titulo: "Apenas humanos adultos e saudáveis", cor: "from-red-400 to-rose-600" },
      ], correta: "sencientes", feedbackAcerto: "Perfeito. Todo ser capaz de sofrer entra no círculo.", feedbackErro: "Singer amplia — não restringe. Todo ser senciente entra." },
      { id: "q3", pergunta: "Os 4 princípios clássicos da BIOÉTICA são…", cards: [
        { id: "quatro", emoji: "🧬", titulo: "Autonomia, beneficência, não-maleficência e justiça", cor: "from-red-500 to-rose-700" },
        { id: "religiao", emoji: "⛪", titulo: "Fé, esperança, caridade e obediência", cor: "from-slate-400 to-gray-600" },
        { id: "mercado", emoji: "💰", titulo: "Lucro, eficiência, produtividade e crescimento", cor: "from-emerald-400 to-teal-600" },
      ], correta: "quatro", feedbackAcerto: "Isso. 4 princípios clássicos: autonomia, beneficência, não-maleficência, justiça.", feedbackErro: "Nem religião nem mercado: os 4 princípios são autonomia, beneficência, não-maleficência, justiça." },
    ],
    falaFinal: "3 acertos = radar ético calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A bioética brasileira tem comitês nacionais. Acenda 5 estados com CEP/CONEP fortes.",
    instrucao: "Selecione 5 estados",
    missao: { tipo: "selecionar", siglas: ["DF", "SP", "RJ", "MG", "RS"], pergunta: "Quais 5 estados abrigam comitês e programas fortes em bioética?" },
    falaFinal: "DF (CONEP), SP (USP), RJ (Fiocruz), MG e RS. Rede nacional de bioética.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como decidir um dilema bioético. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Método bioético em 5 passos:",
    paradas: [
      { id: "descrever", emoji: "🔍", rotulo: "1. Descrever o caso concreto", descricao: "Fatos médicos, contexto, quem é afetado — sem julgamento ainda." },
      { id: "principios", emoji: "🧭", rotulo: "2. Identificar princípios em jogo", descricao: "Autonomia, beneficência, não-maleficência, justiça — quais colidem?" },
      { id: "ouvir", emoji: "👂", rotulo: "3. Ouvir todos os afetados", descricao: "Paciente, família, equipe médica, sociedade — agir comunicativo." },
      { id: "argumentar", emoji: "🗣️", rotulo: "4. Deliberar com argumentos", descricao: "Confrontar razões livremente, sem coação nem interesse oculto." },
      { id: "decidir", emoji: "✅", rotulo: "5. Decidir e monitorar", descricao: "Escolher a norma que todos poderiam aceitar e reavaliar depois." },
    ],
    ordemCerta: ["descrever", "principios", "ouvir", "argumentar", "decidir"],
    feedbackAcerto: "Exato. Descrever → princípios → ouvir → argumentar → decidir.",
    feedbackErro: "Ordem: descrever, princípios, ouvir, argumentar, decidir.",
    falaFinal: "5 passos. Deliberação bioética viva.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 5 — Ética no laboratório",
    paragrafos: [
      { id: "p1", texto: "O século XX terminou com um choque: nunca fomos tão poderosos tecnologicamente e nunca tão exigidos eticamente. Auschwitz, Hiroshima, experimentos em prisioneiros, poluição planetária e agora CRISPR e inteligência artificial mudaram a escala do que podemos fazer — e do que podemos destruir.", chaves: ["poder técnico", "responsabilidade"] },
      { id: "p2", texto: "Jürgen Habermas propôs a ÉTICA DO DISCURSO: uma norma é moralmente válida se puder ser aceita por todos os afetados após diálogo livre e simétrico. O agir comunicativo — orientado pela busca de entendimento e pela força do melhor argumento — substitui a coação e o cálculo puramente estratégico.", chaves: ["Habermas", "agir comunicativo"] },
      { id: "p3", texto: "Peter Singer, na trilha do utilitarismo, ampliou o CÍRCULO MORAL para todos os seres capazes de sofrer — animais sencientes, gerações futuras, ecossistemas. Denunciou o 'especismo' como preconceito análogo ao racismo. Sua obra transformou o debate sobre alimentação, pesquisa animal, meio ambiente e prioridades globais.", chaves: ["Singer", "especismo"] },
      { id: "p4", texto: "A BIOÉTICA nasceu como resposta prática a esses dilemas. Guiada por 4 princípios clássicos — autonomia, beneficência, não-maleficência e justiça —, ela orienta comitês hospitalares, aprovação de pesquisa, políticas públicas de saúde e o debate atual sobre edição genética, eutanásia, IA médica e prioridades de vacinação. É Habermas e Singer entrando no cotidiano do laboratório.", chaves: ["bioética", "4 princípios"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR BIOÉTICO! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "comunicativo", emoji: "🗣️", rotulo: "Agir comunicativo" },
      { id: "circulo", emoji: "🔄", rotulo: "Círculo moral" },
      { id: "autonomia", emoji: "🖐️", rotulo: "Autonomia (bioética)" },
      { id: "justica", emoji: "⚖️", rotulo: "Justiça (bioética)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Adolescente informado recusa a transfusão por convicção pessoal'", emoji: "🩸", cor: "from-fuchsia-400 to-purple-600" }, municipioB: { nome: "Respeito à vontade esclarecida", emoji: "🖐️", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Princípio bioético em jogo.", pecaCertaId: "autonomia", feedbackAcerto: "Isso. AUTONOMIA — vontade livre e informada.", feedbackErro: "É AUTONOMIA: respeito à decisão esclarecida." },
      { id: "r2", municipioA: { nome: "'Vacina escassa: quem recebe primeiro?'", emoji: "💉", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Distribuição equitativa de recurso", emoji: "⚖️", cor: "from-teal-400 to-emerald-600" }, contexto: "Princípio bioético em jogo.", pecaCertaId: "justica", feedbackAcerto: "Perfeito. JUSTIÇA — distribuir com equidade.", feedbackErro: "É JUSTIÇA: distribuir recursos com equidade." },
      { id: "r3", municipioA: { nome: "'Assembleia com pacientes, médicos e sociedade discute CRISPR'", emoji: "🗣️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Deliberação livre pelos afetados", emoji: "🗣️", cor: "from-blue-400 to-sky-600" }, contexto: "Habermas em ação.", pecaCertaId: "comunicativo", feedbackAcerto: "Isso. AGIR COMUNICATIVO — só o melhor argumento vence.", feedbackErro: "É AGIR COMUNICATIVO: diálogo livre entre todos os afetados." },
      { id: "r4", municipioA: { nome: "'Bem-estar de galinhas em granja passa a ser questão ética'", emoji: "🐔", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Ampliação para seres sencientes", emoji: "🔄", cor: "from-teal-400 to-emerald-600" }, contexto: "Singer contra o especismo.", pecaCertaId: "circulo", feedbackAcerto: "Perfeito. CÍRCULO MORAL — todo ser capaz de sofrer entra.", feedbackErro: "É CÍRCULO MORAL: ampliar para seres sencientes." },
      { id: "r5", municipioA: { nome: "'Considerar impacto climático nas gerações futuras'", emoji: "🌍", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Círculo estendido ao futuro", emoji: "🔄", cor: "from-teal-400 to-emerald-600" }, contexto: "Ética para quem ainda não nasceu.", pecaCertaId: "circulo", feedbackAcerto: "Isso. CÍRCULO MORAL — gerações futuras também.", feedbackErro: "É CÍRCULO MORAL: ampliar para gerações futuras." },
      { id: "r6", municipioA: { nome: "'Comitê hospitalar decide após ouvir paciente, família e equipe'", emoji: "🏥", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Norma que todos poderiam aceitar", emoji: "🗣️", cor: "from-blue-400 to-sky-600" }, contexto: "Ética do discurso na prática.", pecaCertaId: "comunicativo", feedbackAcerto: "Perfeito. AGIR COMUNICATIVO — norma que todos poderiam aceitar.", feedbackErro: "É AGIR COMUNICATIVO: deliberação livre entre afetados." },
    ],
    falaFinal: "6 casos, 4 conceitos. Bioética no seu radar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 modos de decidir eticamente.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "estrategico", rotulo: "AGIR ESTRATÉGICO", emoji: "⚔️", percentual: 50, cor: "#64748b", descricao: "Ação orientada por sucesso, cálculo, manipulação ou coação. O outro é meio pra atingir meu objetivo. Habermas mostra que essa lógica não gera legitimidade moral.", exemplos: ["💰 Marketing farmacêutico agressivo", "🎯 Convencer sem ouvir", "⛔ Impor sem justificar"] },
      { id: "comunicativo", rotulo: "AGIR COMUNICATIVO", emoji: "🗣️", percentual: 50, cor: "#0284c7", descricao: "Ação orientada por entendimento e pela força do melhor argumento. O outro é interlocutor legítimo. É a base da ética do discurso — e da bioética séria.", exemplos: ["🏥 Comitê de bioética plural", "📋 Consentimento informado", "🌐 Deliberação global sobre clima"] },
    ],
    falaFinal: "Estratégico × comunicativo. Habermas escolhe o 2º.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA BIOÉTICA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "AGIR COMUNICATIVO, em Habermas, é ação orientada por…", opcoes: [
        { id: "a", texto: "Busca de entendimento pela força do melhor argumento entre todos os afetados", correta: true },
        { id: "b", texto: "Uso da força e da coação para vencer o adversário", correta: false },
        { id: "c", texto: "Recompensa financeira imediata e cálculo de lucro", correta: false },
      ], feedbackAcerto: "Isso. Só o melhor argumento — nem força, nem dinheiro.", feedbackErro: "Não é força nem lucro: é entendimento pelo argumento." },
      { id: "av2", pergunta: "CÍRCULO MORAL, em Peter Singer, é…", opcoes: [
        { id: "a", texto: "O conjunto de seres moralmente relevantes, que deve incluir todos os capazes de sofrer", correta: true },
        { id: "b", texto: "Apenas a família nuclear humana", correta: false },
        { id: "c", texto: "Somente adultos saudáveis e produtivos", correta: false },
      ], feedbackAcerto: "Perfeito. Todo ser senciente entra no círculo.", feedbackErro: "Singer AMPLIA — todo ser capaz de sofrer entra." },
      { id: "av3", pergunta: "Os 4 princípios da BIOÉTICA são…", opcoes: [
        { id: "a", texto: "Autonomia, beneficência, não-maleficência e justiça", correta: true },
        { id: "b", texto: "Fé, esperança, caridade e obediência", correta: false },
        { id: "c", texto: "Lucro, eficiência, produtividade e mercado", correta: false },
      ], feedbackAcerto: "Isso. 4 princípios clássicos da bioética.", feedbackErro: "Nem virtudes religiosas nem métricas de mercado: os 4 são autonomia, beneficência, não-maleficência e justiça." },
    ],
    selo: { nome: "Guardião da Bioética", subtitulo: "Insígnia Habermas & Singer", emoji: "🧬", cor: "from-red-400 to-rose-700" },
    falaFinal: "Insígnia conquistada! Você entrou no laboratório da ética contemporânea.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião da Bioética" },
};
