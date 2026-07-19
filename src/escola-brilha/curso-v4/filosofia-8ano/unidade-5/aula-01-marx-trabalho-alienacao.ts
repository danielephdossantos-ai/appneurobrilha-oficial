import type { AulaGeoV1 } from "../../types";
import { url as fabrica } from "@/assets/filosofia-8ano/u5-marx-fabrica.jpg.asset.json";
import { url as marx } from "@/assets/filosofia-8ano/u5-marx-retrato.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 5 · Aula 01
 * "Marx: Trabalho, Alienação e Luta de Classes" — EF08FI05 (autoral)
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-marx-trabalho-alienacao",
  titulo: "Trabalho, Alienação e Luta de Classes",
  iconeTrilha: "⚙️",
  bncc: ["EF08FI05"],
  duracaoMin: 27,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: fabrica,
    imagemDestaqueUrl: fabrica,
    aurora:
      "Investigador, Londres, meados do século XIX. A Revolução Industrial já esvaziou os campos e encheu as cidades. Fábricas escuras, jornadas de 14 horas, crianças operando máquinas, moradia coletiva insalubre. Um filósofo alemão exilado observa tudo da Biblioteca Britânica e escreve: 'a história de toda sociedade até agora existente é a história das LUTAS DE CLASSES'. Karl Marx pega a dialética de Hegel e vira ela do avesso: não são as ideias que movem o mundo — é o TRABALHO, é quem controla os meios de produção. E quando o trabalho vira mercadoria alugada, o trabalhador se torna estranho a si mesmo. É a ALIENAÇÃO.",
    falaFinal: "Nesta aula: trabalho, alienação e luta de classes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que move a história?",
    pergunta: "As mudanças históricas acontecem principalmente…",
    opcoes: [
      { id: "ideias", titulo: "PELAS IDEIAS", subtitulo: "filósofos, religião, cultura", emoji: "💭", cor: "from-sky-400 to-blue-600" },
      { id: "materia", titulo: "PELAS CONDIÇÕES MATERIAIS", subtitulo: "trabalho, produção, quem tem o quê", emoji: "⚙️", cor: "from-red-400 to-orange-600" },
    ],
    respostaCerta: "materia",
    feedbackAcerto: "Boa. Pra Marx, ideias são IMPORTANTES, mas quem produz e quem tem os meios de produção é o motor real da história.",
    feedbackErro: "Marx concorda que ideias importam — mas diz que elas são MOLDADAS pelas condições materiais. Quem tem os meios de produção define a ideologia da época.",
    falaFinal: "Materialismo histórico: o pão vem antes do pensamento.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar em Marx.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "trabalho",
        capa: "1. Trabalho",
        emoji: "🔨",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "TRABALHO, pra Marx, NÃO é castigo — é a atividade pela qual o ser humano se HUMANIZA. Ao transformar a natureza (fazendo uma casa, plantando, escrevendo um livro), a pessoa transforma a si mesma. O trabalho é o que nos diferencia dos outros animais: só nós projetamos ANTES de fazer.",
        exemplo: "Ex.: 'a aranha faz teia por instinto; o arquiteto imagina a casa na cabeça ANTES de construir. Aí está a diferença.' (Marx, O Capital).",
        fotoUrl: fabrica,
      },
      {
        id: "alienacao",
        capa: "2. Alienação",
        emoji: "🌀",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "ALIENAÇÃO (do latim alienus = estranho) é o que acontece quando o trabalhador VENDE seu trabalho por salário: (1) o produto não é dele; (2) o processo é decidido por outro; (3) ele se sente estranho ao próprio ato; (4) fica separado dos outros trabalhadores. Trabalhar deixa de humanizar — passa a desumanizar.",
        exemplo: "Ex.: quem monta 500 celulares por dia numa linha nunca 'sente' que fez o celular — o produto é da empresa, o ritmo é do chefe. O trabalho vira só um jeito de pagar aluguel.",
        fotoUrl: fabrica,
      },
      {
        id: "luta-classes",
        capa: "3. Luta de classes",
        emoji: "⚔️",
        cor: "from-red-500 to-orange-700",
        conteudo:
          "LUTA DE CLASSES é o conflito estruturante das sociedades divididas: de um lado, quem tem os MEIOS DE PRODUÇÃO (terras, fábricas, capital); do outro, quem só tem sua FORÇA DE TRABALHO pra vender. Cada época teve sua versão: senhores × escravos, nobres × servos, burgueses × operários. Pra Marx, essa tensão é o motor real da história.",
        exemplo: "Ex.: greves, sindicatos, reforma trabalhista, discussões sobre salário mínimo, home office × presencial — tudo é luta de classes contemporânea.",
        fotoUrl: marx,
      },
    ],
    falaFinal: "Trabalho × alienação × luta de classes. Tripé marxista.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da filosofia marxista.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: fabrica,
    pontos: [
      {
        id: "revolucao-industrial",
        x: 22,
        y: 30,
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        titulo: "A Revolução Industrial",
        texto: "Do fim do século XVIII, máquinas a vapor concentram trabalhadores em fábricas. Jornadas de 14-16 horas, salários baixíssimos, trabalho infantil. As cidades incham. Aqui nasce a CLASSE OPERÁRIA moderna.",
        fotoUrl: fabrica,
      },
      {
        id: "manuscritos",
        x: 74,
        y: 30,
        emoji: "📄",
        cor: "from-amber-500 to-orange-700",
        titulo: "1844 — os manuscritos da alienação",
        texto: "Jovem Marx escreve os 'Manuscritos Econômico-Filosóficos' e cria o conceito de ALIENAÇÃO: no capitalismo, o trabalhador é separado do produto, do processo, da própria humanidade e dos outros. O trabalho que deveria humanizar acaba desumanizando.",
        fotoUrl: marx,
      },
      {
        id: "manifesto",
        x: 26,
        y: 70,
        emoji: "📢",
        cor: "from-red-500 to-orange-700",
        titulo: "1848 — o Manifesto Comunista",
        texto: "Com Engels, Marx publica o 'Manifesto Comunista'. Frase de abertura: 'a história de toda sociedade até agora existente é a história das lutas de classes'. Chamado à unidade dos trabalhadores como sujeito histórico.",
        fotoUrl: marx,
      },
      {
        id: "capital",
        x: 76,
        y: 70,
        emoji: "📚",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "1867 — O Capital",
        texto: "Marx publica 'O Capital': análise gigantesca de como o capitalismo funciona, extrai mais-valia (lucro extraído do trabalho não pago), acumula riqueza em poucas mãos e cria crises periódicas. Livro base de toda economia crítica até hoje.",
        fotoUrl: marx,
      },
    ],
    falaFinal: "Fábrica → alienação → luta de classes → análise do capital. Marx em 4 passos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Pra Marx, o TRABALHO é…",
        fotoUrl: fabrica,
        cards: [
          { id: "humaniza", emoji: "🔨", titulo: "A atividade pela qual o ser humano se humaniza (transforma natureza e a si mesmo)", cor: "from-amber-500 to-orange-700" },
          { id: "castigo", emoji: "😞", titulo: "Um castigo divino", cor: "from-slate-400 to-gray-600" },
          { id: "hobby", emoji: "🎨", titulo: "Um hobby de fim de semana", cor: "from-pink-400 to-rose-600" },
        ],
        correta: "humaniza",
        feedbackAcerto: "Isso. Trabalho = atividade humanizadora. O problema é quando ele vira alienado.",
        feedbackErro: "Trabalho pra Marx é HUMANIZADOR — o problema é a forma alienada dele no capitalismo.",
      },
      {
        id: "q2",
        pergunta: "ALIENAÇÃO é quando o trabalhador…",
        fotoUrl: fabrica,
        cards: [
          { id: "estranha", emoji: "🌀", titulo: "Se torna estranho ao próprio trabalho, ao produto e a si mesmo", cor: "from-purple-500 to-fuchsia-700" },
          { id: "cansa", emoji: "😴", titulo: "Fica só cansado no fim do dia", cor: "from-slate-400 to-gray-600" },
          { id: "muda-emprego", emoji: "🔄", titulo: "Muda de emprego com frequência", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "estranha",
        feedbackAcerto: "Perfeito. Alienus = estranho. Trabalho vira estranho ao trabalhador.",
        feedbackErro: "Não é cansaço nem rotatividade — é ESTRANHAMENTO estrutural: o trabalho deixa de ser seu.",
      },
      {
        id: "q3",
        pergunta: "LUTA DE CLASSES, pra Marx, é…",
        fotoUrl: marx,
        cards: [
          { id: "motor", emoji: "⚔️", titulo: "O motor real da história — conflito entre quem tem meios de produção e quem só tem força de trabalho", cor: "from-red-500 to-orange-700" },
          { id: "fofoca", emoji: "🗣️", titulo: "Rivalidade entre vizinhos ricos e pobres", cor: "from-slate-400 to-gray-600" },
          { id: "eleicao", emoji: "🗳️", titulo: "Discussão entre partidos políticos", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "motor",
        feedbackAcerto: "Isso. Estrutural, econômica, histórica — não é fofoca nem eleição.",
        feedbackErro: "Luta de classes é ESTRUTURAL — conflito entre quem controla meios de produção e quem só vende trabalho.",
      },
    ],
    falaFinal: "3 acertos = radar marxista calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O pensamento marxista tem forte tradição no Brasil — de Caio Prado Jr. a Florestan Fernandes. Acenda 5 estados.",
    instrucao: "Acenda 5 estados-referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "BA"],
      pergunta: "Quais 5 estados abrigam programas de referência em pensamento marxista (USP, UFRJ, UFMG, UFRGS, UFBA)?",
    },
    falaFinal: "SP, RJ, MG, RS e BA — cinco polos da crítica social brasileira.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como surge a alienação no capitalismo. 5 passos.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do trabalho livre ao trabalho alienado:",
    paradas: [
      { id: "livre", emoji: "🌱", rotulo: "1. Trabalho livre e criativo", descricao: "O ser humano projeta, faz, colhe o resultado, se humaniza." },
      { id: "propriedade", emoji: "🏭", rotulo: "2. Meios de produção viram propriedade privada", descricao: "Terras, fábricas, ferramentas ficam nas mãos de poucos (burguesia)." },
      { id: "vender", emoji: "💼", rotulo: "3. Trabalhador precisa VENDER a força de trabalho", descricao: "Sem meios próprios, só resta alugar o próprio tempo por salário." },
      { id: "perder", emoji: "🌀", rotulo: "4. Perde controle do produto e do processo", descricao: "O produto vai pro dono, o ritmo é definido pelo chefe, o trabalhador vira peça." },
      { id: "alienado", emoji: "😞", rotulo: "5. ALIENAÇÃO completa", descricao: "Trabalhador estranho ao produto, ao processo, a si mesmo e aos outros. Trabalho que deveria humanizar, desumaniza." },
    ],
    ordemCerta: ["livre", "propriedade", "vender", "perder", "alienado"],
    feedbackAcerto: "Exato. Trabalho livre → propriedade → venda → perda → alienação. Cadeia marxista.",
    feedbackErro: "A ordem é: trabalho livre, propriedade, venda da força, perda de controle e alienação completa.",
    falaFinal: "5 passos. Anatomia da alienação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 5 — Marx e o trabalho",
    paragrafos: [
      { id: "p1", texto: "Karl Marx (1818-1883) observa a Revolução Industrial em Londres e formula: o ser humano se HUMANIZA pelo trabalho — projetando, transformando a natureza e a si mesmo. É o que nos diferencia dos outros animais.", chaves: ["Marx", "trabalho"] },
      { id: "p2", texto: "Mas no capitalismo o trabalho vira MERCADORIA alugada por salário. O trabalhador perde controle do produto, do processo, e se torna ESTRANHO a si mesmo. É a ALIENAÇÃO — o trabalho que deveria humanizar, passa a desumanizar.", chaves: ["alienação", "capitalismo"] },
      { id: "p3", texto: "Marx vira a dialética de Hegel do avesso: não são as ideias que movem a história — é a LUTA DE CLASSES entre quem controla os meios de produção (burguesia) e quem só tem sua força de trabalho pra vender (proletariado).", chaves: ["luta de classes", "meios de produção"] },
      { id: "p4", texto: "Em 'O Capital' (1867) Marx analisa a MAIS-VALIA: o trabalhador produz valor maior que o salário que recebe — a diferença vira lucro do capitalista. Essa análise fundamenta toda a economia crítica moderna e movimentos por direitos trabalhistas.", chaves: ["mais-valia", "direitos"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LABORATÓRIO MARXISTA! Cada caso ilustra qual conceito?",
    instrucao: "⏱️ Qual conceito marxista é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "trabalho", emoji: "🔨", rotulo: "Trabalho humanizador" },
      { id: "alienacao", emoji: "🌀", rotulo: "Alienação" },
      { id: "luta-classes", emoji: "⚔️", rotulo: "Luta de classes" },
      { id: "mais-valia", emoji: "💰", rotulo: "Mais-valia" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Faço um pão do começo ao fim e as pessoas comem — me sinto realizado'", emoji: "🥖", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Trabalho que humaniza", emoji: "🔨", cor: "from-amber-400 to-yellow-600" },
        contexto: "Controle do processo, produto próprio, satisfação.",
        pecaCertaId: "trabalho",
        feedbackAcerto: "Isso. TRABALHO no sentido humanizador — não alienado.",
        feedbackErro: "É TRABALHO humanizador: controle do processo + produto próprio = realização.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Aperto o mesmo parafuso 8 horas por dia — nunca vejo o produto pronto'", emoji: "🔩", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Trabalhador estranho ao produto", emoji: "🌀", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Linha de produção, tarefa repetitiva, sem visão do todo.",
        pecaCertaId: "alienacao",
        feedbackAcerto: "Perfeito. ALIENAÇÃO — trabalhador separado do produto e do processo.",
        feedbackErro: "É ALIENAÇÃO: peça na engrenagem, sem controle nem visão do todo.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Sindicato negocia salário e jornada com a empresa'", emoji: "✊", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Conflito estrutural quem tem × quem trabalha", emoji: "⚔️", cor: "from-red-400 to-orange-600" },
        contexto: "Tensão entre proprietários e trabalhadores.",
        pecaCertaId: "luta-classes",
        feedbackAcerto: "Isso. LUTA DE CLASSES contemporânea — sindicato × patronato.",
        feedbackErro: "É LUTA DE CLASSES: sindicato representa quem vende força de trabalho contra quem detém meios de produção.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Trabalhador produz R$ 100/hora, recebe R$ 20/hora — os R$ 80 restantes viram lucro'", emoji: "💰", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Valor extra que vira lucro", emoji: "📈", cor: "from-emerald-400 to-teal-600" },
        contexto: "Diferença entre valor produzido e salário pago.",
        pecaCertaId: "mais-valia",
        feedbackAcerto: "Perfeito. MAIS-VALIA — o que Marx chamou de coração do capitalismo.",
        feedbackErro: "É MAIS-VALIA: valor produzido além do salário = lucro do capitalista.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Motorista de app trabalha 12h/dia, sem controle do preço, sem direitos'", emoji: "🚗", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Nova forma de alienação digital", emoji: "📱", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Algoritmo controla ritmo, preço, avaliação — trabalhador executa.",
        pecaCertaId: "alienacao",
        feedbackAcerto: "Isso. ALIENAÇÃO 2.0 — versão digital do mesmo estranhamento.",
        feedbackErro: "É ALIENAÇÃO: o algoritmo virou o novo chefe invisível, sem controle nem direitos.",
      },
      {
        id: "r6",
        municipioA: { nome: "'Reforma trabalhista muda regras de férias e jornada'", emoji: "📜", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Disputa entre capital e trabalho na lei", emoji: "⚖️", cor: "from-red-400 to-orange-600" },
        contexto: "Legislação como campo de luta de classes.",
        pecaCertaId: "luta-classes",
        feedbackAcerto: "Perfeito. LUTA DE CLASSES no parlamento e nos tribunais.",
        feedbackErro: "É LUTA DE CLASSES: leis trabalhistas são disputa institucional entre capital e trabalho.",
      },
    ],
    falaFinal: "6 casos, 4 conceitos. Marx no século XXI.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: 2 lados do trabalho em Marx.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "humanizador",
        rotulo: "TRABALHO HUMANIZADOR",
        emoji: "🔨",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "O trabalho, em si, é a atividade pela qual o ser humano se humaniza — projeta, transforma a natureza, se realiza. Nos diferencia dos outros animais (só a gente pensa antes de fazer).",
        exemplos: ["🥖 Fazer pão do começo ao fim", "🏠 Construir a própria casa", "📖 Escrever um livro"],
      },
      {
        id: "alienado",
        rotulo: "TRABALHO ALIENADO",
        emoji: "🌀",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "No capitalismo, o trabalho é vendido por salário. O trabalhador perde controle do produto (não é dele), do processo (é o chefe que decide), e se torna estranho a si mesmo. É a alienação.",
        exemplos: ["🔩 Linha de produção fabril", "📱 Motoboy de app 12h/dia", "🖥️ Atender 200 chamados/dia sem autonomia"],
      },
    ],
    falaFinal: "Trabalho humanizador × alienado. A crítica marxista em 2 pratos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CRÍTICO SOCIAL.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra Marx, o TRABALHO é essencialmente…",
        opcoes: [
          { id: "a", texto: "A atividade humanizadora pela qual o ser humano transforma o mundo e a si mesmo", correta: true },
          { id: "b", texto: "Um castigo divino ao qual estamos condenados", correta: false },
          { id: "c", texto: "Algo que só serve pra ganhar dinheiro", correta: false },
        ],
        feedbackAcerto: "Isso. Trabalho = humanização. Alienado quando vira mercadoria alugada.",
        feedbackErro: "Pra Marx, trabalho é HUMANIZADOR — o problema é o formato alienado no capitalismo.",
      },
      {
        id: "av2",
        pergunta: "ALIENAÇÃO acontece quando o trabalhador…",
        opcoes: [
          { id: "a", texto: "Perde controle do produto, do processo e se torna estranho a si mesmo", correta: true },
          { id: "b", texto: "Fica apenas cansado no fim do dia", correta: false },
          { id: "c", texto: "Muda muito de emprego", correta: false },
        ],
        feedbackAcerto: "Perfeito. Alienus = estranho. Trabalho vira estranho ao trabalhador.",
        feedbackErro: "Alienação é ESTRUTURAL — separação entre trabalhador e o próprio trabalho.",
      },
      {
        id: "av3",
        pergunta: "LUTA DE CLASSES é…",
        opcoes: [
          { id: "a", texto: "O conflito estrutural entre quem detém meios de produção e quem só tem força de trabalho", correta: true },
          { id: "b", texto: "Rivalidade escolar entre turmas", correta: false },
          { id: "c", texto: "Discussão entre times de futebol", correta: false },
        ],
        feedbackAcerto: "Isso. Motor real da história, pra Marx.",
        feedbackErro: "Luta de classes é ECONÔMICA e ESTRUTURAL — quem controla × quem só vende trabalho.",
      },
    ],
    selo: { nome: "Crítico Social", subtitulo: "Insígnia da Análise Marxista", emoji: "⚙️", cor: "from-red-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você entrou no laboratório crítico de Marx.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Crítico Social" },
};
