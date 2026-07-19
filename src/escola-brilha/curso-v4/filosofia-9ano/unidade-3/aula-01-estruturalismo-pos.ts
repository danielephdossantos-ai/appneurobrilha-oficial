import type { AulaGeoV1 } from "../../types";
import { url as foucaultImg } from "@/assets/filosofia-9ano/u3-foucault.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 3 · Aula 01
 * "Poder, Discurso e Diferença" — EF09FI03 (autoral)
 * Tema: Estruturalismo e Pós-estruturalismo — Foucault, Derrida.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-estruturalismo-pos",
  titulo: "Poder, Discurso e Diferença",
  iconeTrilha: "🎓",
  bncc: ["EF09FI03"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: foucaultImg,
    imagemDestaqueUrl: foucaultImg,
    aurora:
      "Investigador, este é Michel Foucault no Collège de France, anos 1970 — o auditório lotado ouve um filósofo que virou de ponta-cabeça a ideia de PODER. Enquanto Marx via poder na fábrica e nos donos, Foucault mostra que o poder também está no HOSPITAL, na ESCOLA, no PRESÍDIO, no exame médico — em toda relação social, invisível, capilar. Junto com Derrida, ele funda o pós-estruturalismo: filosofia que desmonta as verdades estáveis e escuta a DIFERENÇA, o marginal, o silenciado.",
    falaFinal:
      "Nesta aula você entra em Foucault e Derrida. Três chaves: discurso, biopoder e desconstrução.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: onde está o PODER na sociedade atual?",
    pergunta: "Poder hoje está principalmente…",
    opcoes: [
      { id: "capilar", titulo: "ESPALHADO em toda relação", subtitulo: "escola, hospital, algoritmo, exame, entrevista", emoji: "🕸️", cor: "from-fuchsia-400 to-purple-600" },
      { id: "governo", titulo: "SÓ nas mãos do governo", subtitulo: "presidente, ministros, congresso decidem tudo", emoji: "🏛️", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "capilar",
    feedbackAcerto: "Boa. Pra Foucault, o poder é CAPILAR — atravessa toda relação, não fica só no palácio.",
    feedbackErro: "Foucault vira o jogo: o poder MAIS eficiente é o que está na consulta médica, na prova, no feed — não só no palácio.",
    falaFinal: "Poder é capilar. Está em toda parte, invisível, produzindo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "discurso", capa: "1. Discurso", emoji: "💬", cor: "from-fuchsia-500 to-purple-700", conteudo: "DISCURSO, pra Foucault, não é 'só fala': é o conjunto de enunciados, práticas e instituições que produzem UMA VERDADE numa época. O 'discurso médico', o 'discurso jurídico', o 'discurso da normalidade' definem o que se pode dizer, quem pode dizer e o que conta como verdadeiro.", exemplo: "Ex.: o discurso médico do século XIX inventou categorias como 'histérica' e 'anormal' — e essas categorias moldaram vidas reais.", fotoUrl: foucaultImg },
      { id: "biopoder", capa: "2. Biopoder", emoji: "🧬", cor: "from-red-500 to-rose-700", conteudo: "BIOPODER é o poder que age sobre a VIDA das populações — natalidade, sexualidade, saúde, longevidade. Diferente do poder soberano ('deixar viver ou fazer morrer'), o biopoder é o poder que 'faz viver e deixa morrer'. Estatísticas, vacinação, censo, política de saúde: tudo isso é biopoder — nem sempre malvado, sempre presente.", exemplo: "Ex.: um app fitness que mede seus passos, seu sono e sua ansiedade participa do biopoder contemporâneo.", fotoUrl: foucaultImg },
      { id: "desconstrucao", capa: "3. Desconstrução", emoji: "🧩", cor: "from-amber-500 to-orange-700", conteudo: "DESCONSTRUÇÃO, pra Jacques Derrida, é o método de mostrar que todo texto ocidental funciona por PARES OPOSTOS hierárquicos (razão/emoção, homem/mulher, branco/negro, centro/margem) — e que a metade 'inferior' sempre foi tratada como acessória. Desconstruir é desestabilizar essa hierarquia e escutar a DIFERENÇA que ficou de fora.", exemplo: "Ex.: quando o pensamento decolonial questiona por que 'universal' virou sinônimo de 'europeu', está desconstruindo.", fotoUrl: foucaultImg },
    ],
    falaFinal: "Discurso, biopoder, desconstrução. As 3 alavancas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos do pós-estruturalismo.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: foucaultImg,
    pontos: [
      { id: "1966-palavras", x: 24, y: 30, emoji: "📚", cor: "from-fuchsia-500 to-purple-700", titulo: "1966 — Foucault, 'As Palavras e as Coisas'", texto: "Foucault mostra que cada época tem uma 'episteme' — uma maneira própria de organizar o saber. O 'homem' como objeto de ciência só foi inventado no século XIX; pode ser desinventado." },
      { id: "1967-derrida", x: 74, y: 30, emoji: "🧩", cor: "from-amber-500 to-orange-700", titulo: "1967 — Derrida, 'Gramatologia'", texto: "Jacques Derrida ataca a metafísica ocidental que sempre privilegiou fala sobre escrita, razão sobre corpo, centro sobre margem. Nasce a DESCONSTRUÇÃO." },
      { id: "1975-vigiar", x: 26, y: 70, emoji: "🔒", cor: "from-red-500 to-rose-700", titulo: "1975 — Foucault, 'Vigiar e Punir'", texto: "A prisão moderna, a escola, o hospital e o quartel usam a mesma tecnologia: VIGILÂNCIA CONSTANTE. Não é castigo do corpo, é fabricação de almas dóceis." },
      { id: "hoje", x: 76, y: 70, emoji: "📱", cor: "from-slate-500 to-gray-700", titulo: "Hoje — vigilância digital", texto: "Câmeras urbanas, reconhecimento facial, algoritmos de crédito, feed personalizado: o panóptico de Foucault virou onipresente. Discurso, biopoder e desconstrução ficaram mais urgentes." },
    ],
    falaFinal: "1966 → 1967 → 1975 → hoje. A crítica ao poder invisível.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "DISCURSO, em Foucault, é…", cards: [
        { id: "verdade", emoji: "💬", titulo: "Conjunto de enunciados e práticas que produzem verdade em uma época", cor: "from-fuchsia-500 to-purple-700" },
        { id: "conversa", emoji: "🗣️", titulo: "Uma simples conversa informal entre amigos", cor: "from-slate-400 to-gray-600" },
        { id: "religiao", emoji: "⛪", titulo: "A pregação religiosa de um pastor", cor: "from-amber-400 to-orange-600" },
      ], correta: "verdade", feedbackAcerto: "Isso. Discurso = regime de verdade de uma época.", feedbackErro: "Não é bate-papo nem sermão: é o regime que define o que conta como verdadeiro." },
      { id: "q2", pergunta: "BIOPODER é o poder que…", cards: [
        { id: "vida", emoji: "🧬", titulo: "Age sobre a VIDA das populações — saúde, natalidade, comportamento", cor: "from-red-500 to-rose-700" },
        { id: "morte", emoji: "⚔️", titulo: "Só decide quem mata na guerra", cor: "from-slate-400 to-gray-600" },
        { id: "dinheiro", emoji: "💰", titulo: "Só controla o dinheiro dos bancos", cor: "from-emerald-400 to-teal-600" },
      ], correta: "vida", feedbackAcerto: "Perfeito. Biopoder gere a vida — não só a morte.", feedbackErro: "Biopoder foca na vida da população, não só na guerra ou no dinheiro." },
      { id: "q3", pergunta: "DESCONSTRUÇÃO, em Derrida, é…", cards: [
        { id: "hierarquia", emoji: "🧩", titulo: "Desmontar oposições hierárquicas do pensamento ocidental", cor: "from-amber-500 to-orange-700" },
        { id: "destruir", emoji: "💥", titulo: "Destruir todo texto e jogar fora", cor: "from-slate-400 to-gray-600" },
        { id: "traduzir", emoji: "🔤", titulo: "Traduzir textos de uma língua pra outra", cor: "from-sky-400 to-blue-600" },
      ], correta: "hierarquia", feedbackAcerto: "Isso. Desconstruir ≠ destruir — é desestabilizar hierarquias.", feedbackErro: "Desconstruir não é destruir nem traduzir: é abalar oposições rígidas." },
    ],
    falaFinal: "3 acertos = radar pós-estruturalista calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Foucault e Derrida atravessaram o Brasil pelas ciências sociais. Acenda 5 estados.",
    instrucao: "Selecione 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "RS", "PE"], pergunta: "Quais 5 estados abrigam pós-graduações fortes em teoria pós-estruturalista?" },
    falaFinal: "USP, UFRJ, UFMG, UFRGS, UFPE. Foucault lido em todo canto.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o poder capilar funciona, segundo Foucault. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da soberania à vigilância:",
    paradas: [
      { id: "soberano", emoji: "👑", rotulo: "1. Poder soberano (rei)", descricao: "Poder centralizado no rei: castigo público e espetacular do corpo." },
      { id: "disciplinar", emoji: "🏫", rotulo: "2. Poder disciplinar (séc. XVIII-XIX)", descricao: "Prisão, escola, hospital, quartel: vigiar, adestrar, fabricar corpos dóceis." },
      { id: "biopoder", emoji: "🧬", rotulo: "3. Biopoder (séc. XIX-XX)", descricao: "Estatística, vacina, censo, saúde pública: gerir a VIDA das populações." },
      { id: "controle", emoji: "📱", rotulo: "4. Sociedade de controle (hoje)", descricao: "Câmera, algoritmo, reconhecimento facial, feed: vigilância contínua e invisível." },
      { id: "resistir", emoji: "✊", rotulo: "5. Onde há poder, há resistência", descricao: "Foucault insiste: o poder cria também subjetividades que resistem e reinventam." },
    ],
    ordemCerta: ["soberano", "disciplinar", "biopoder", "controle", "resistir"],
    feedbackAcerto: "Exato. Soberano → disciplinar → biopoder → controle → resistência.",
    feedbackErro: "Ordem: soberano, disciplinar, biopoder, controle, resistência.",
    falaFinal: "5 passos. Genealogia do poder moderno.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 3 — O poder capilar",
    paragrafos: [
      { id: "p1", texto: "Michel Foucault virou de ponta-cabeça a ideia clássica de poder. Enquanto Marx localizava o poder na propriedade dos meios de produção, Foucault mostra que o poder é CAPILAR: atravessa hospital, escola, prisão, exame médico, entrevista de emprego. Não é só do rei nem do patrão — é toda relação social.", chaves: ["Foucault", "poder capilar"] },
      { id: "p2", texto: "Em 'Vigiar e Punir' (1975), analisa o panóptico — arquitetura de prisão em que um vigia vê todos sem ser visto. Escola, quartel e fábrica moderna copiam o mesmo modelo: fabricar corpos dóceis pela VIGILÂNCIA contínua. E em 'História da Sexualidade' (1976), cunha o termo BIOPODER: poder que gere a vida das populações via saúde, natalidade e comportamento.", chaves: ["biopoder", "vigilância"] },
      { id: "p3", texto: "Jacques Derrida propõe a DESCONSTRUÇÃO: mostrar que todo texto ocidental funciona por pares opostos hierárquicos (razão/emoção, ocidente/oriente, homem/mulher) e que a metade inferior sempre foi silenciada. Desconstruir não é destruir — é abrir espaço pra DIFERENÇA que ficou de fora.", chaves: ["Derrida", "desconstrução"] },
      { id: "p4", texto: "Hoje, câmeras urbanas, reconhecimento facial, algoritmos de crédito e feed personalizado tornaram o panóptico onipresente. E movimentos feministas, negros e indígenas usam ferramentas pós-estruturalistas pra desmontar 'universais' que sempre foram particulares. Foucault e Derrida viraram nossos instrumentos cotidianos.", chaves: ["vigilância digital", "decolonial"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR DE PODER! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "discurso", emoji: "💬", rotulo: "Discurso / regime de verdade" },
      { id: "disciplinar", emoji: "🏫", rotulo: "Poder disciplinar" },
      { id: "biopoder", emoji: "🧬", rotulo: "Biopoder" },
      { id: "desconstrucao", emoji: "🧩", rotulo: "Desconstrução" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Câmeras nos corredores da escola vigiam alunos o tempo todo'", emoji: "📹", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Vigilância contínua fabricando docilidade", emoji: "🏫", cor: "from-rose-400 to-red-600" }, contexto: "Panoptismo escolar.", pecaCertaId: "disciplinar", feedbackAcerto: "Isso. PODER DISCIPLINAR — vigilância que adestra.", feedbackErro: "É PODER DISCIPLINAR: escola-panóptico." },
      { id: "r2", municipioA: { nome: "'Ministério da Saúde faz campanha nacional de vacinação'", emoji: "💉", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Poder que gere vida da população", emoji: "🧬", cor: "from-teal-400 to-emerald-600" }, contexto: "Gestão da vida coletiva.", pecaCertaId: "biopoder", feedbackAcerto: "Perfeito. BIOPODER — não é malvado, é presente.", feedbackErro: "É BIOPODER: gestão da vida da população." },
      { id: "r3", municipioA: { nome: "'Quem disse que universal é sinônimo de europeu?'", emoji: "🌍", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Desmontar par centro/margem", emoji: "🧩", cor: "from-orange-400 to-red-600" }, contexto: "Crítica decolonial em ação.", pecaCertaId: "desconstrucao", feedbackAcerto: "Isso. DESCONSTRUÇÃO — abre espaço pra diferença.", feedbackErro: "É DESCONSTRUÇÃO: abalar a hierarquia centro/margem." },
      { id: "r4", municipioA: { nome: "'No séc. XIX, medicina inventou a categoria histérica'", emoji: "🩺", cor: "from-fuchsia-400 to-purple-600" }, municipioB: { nome: "Discurso que produz verdade e sujeito", emoji: "💬", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Categoria médica moldando vidas.", pecaCertaId: "discurso", feedbackAcerto: "Perfeito. DISCURSO — categorias inventadas viram destinos.", feedbackErro: "É DISCURSO: enunciados que fabricam verdade e sujeito." },
      { id: "r5", municipioA: { nome: "'Algoritmo de crédito decide quem pode pegar empréstimo'", emoji: "📊", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Vida da população regulada por dado", emoji: "🧬", cor: "from-teal-400 to-emerald-600" }, contexto: "Biopoder digital.", pecaCertaId: "biopoder", feedbackAcerto: "Isso. BIOPODER na versão algorítmica.", feedbackErro: "É BIOPODER: dado que gere a vida econômica." },
      { id: "r6", municipioA: { nome: "'Prisão moderna substituiu suplício público por vigilância silenciosa'", emoji: "🔒", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Fabricar corpos dóceis, não punir corpo", emoji: "🏫", cor: "from-rose-400 to-red-600" }, contexto: "Vigiar e Punir em ação.", pecaCertaId: "disciplinar", feedbackAcerto: "Perfeito. PODER DISCIPLINAR — a virada do castigo pra vigilância.", feedbackErro: "É PODER DISCIPLINAR: vigilância como tecnologia." },
    ],
    falaFinal: "6 casos, 4 conceitos. Poder capilar no seu radar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 tipos de poder.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "soberano", rotulo: "PODER SOBERANO (antigo)", emoji: "👑", percentual: 50, cor: "#64748b", descricao: "Poder centralizado no rei, visível, espetacular. 'Deixar viver ou fazer morrer'. Modelo medieval-absolutista.", exemplos: ["⚔️ Execução pública", "🏰 Trono e coroa", "📜 Édito real"] },
      { id: "capilar", rotulo: "PODER CAPILAR (moderno)", emoji: "🕸️", percentual: 50, cor: "#a855f7", descricao: "Poder disperso em toda relação — escola, hospital, prisão, algoritmo. 'Fazer viver e deixar morrer'. Fabrica sujeitos, não só reprime. É onde Foucault ensina a olhar.", exemplos: ["🏫 Vigilância escolar", "🩺 Consulta médica", "📱 Algoritmo social"] },
    ],
    falaFinal: "Soberano × capilar. Foucault estuda o 2º.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GENEALOGISTA DO PODER.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "DISCURSO, em Foucault, é…", opcoes: [
        { id: "a", texto: "Conjunto de enunciados, práticas e instituições que produzem verdade e moldam sujeitos numa época", correta: true },
        { id: "b", texto: "Uma conversa informal entre pessoas comuns", correta: false },
        { id: "c", texto: "Uma pregação religiosa numa igreja", correta: false },
      ], feedbackAcerto: "Isso. Regime de verdade que produz sujeitos.", feedbackErro: "Não é bate-papo nem sermão: é regime de verdade." },
      { id: "av2", pergunta: "BIOPODER é o poder que…", opcoes: [
        { id: "a", texto: "Gere a vida das populações — saúde, natalidade, longevidade, comportamento coletivo", correta: true },
        { id: "b", texto: "Apenas condena à morte por decisão real", correta: false },
        { id: "c", texto: "Só se aplica à economia dos bancos", correta: false },
      ], feedbackAcerto: "Perfeito. Poder que gere a vida coletiva.", feedbackErro: "Biopoder gere a vida — não a morte nem só o dinheiro." },
      { id: "av3", pergunta: "DESCONSTRUÇÃO, em Derrida, é…", opcoes: [
        { id: "a", texto: "Desmontar as oposições hierárquicas do pensamento ocidental e escutar a diferença silenciada", correta: true },
        { id: "b", texto: "Destruir os textos e proibir sua leitura", correta: false },
        { id: "c", texto: "Traduzir palavra por palavra de uma língua a outra", correta: false },
      ], feedbackAcerto: "Isso. Desconstruir ≠ destruir — é abalar hierarquia.", feedbackErro: "Desconstruir não é destruir nem traduzir." },
    ],
    selo: { nome: "Genealogista do Poder", subtitulo: "Insígnia Foucault & Derrida", emoji: "🕸️", cor: "from-fuchsia-400 to-purple-700" },
    falaFinal: "Insígnia conquistada! Você entrou no Collège de France.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Genealogista do Poder" },
};
