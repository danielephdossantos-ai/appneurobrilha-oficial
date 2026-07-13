import type { AulaGeoV1 } from "../../types";
import imgFab from "@/assets/historia-8ano/u2-fabrica-manchester.jpg";
import imgTear from "@/assets/historia-8ano/u2-tear-mecanico.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-revolucao-industrial",
  titulo: "A Revolução Industrial e o Mundo do Trabalho",
  iconeTrilha: "⚙️",
  bncc: ["EF08HI04", "EF08HI05"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFab,
    imagemDestaqueUrl: imgTear,
    aurora:
      "Século XVIII, Inglaterra. Manchester amanhece coberta de FULIGEM. Chaminés cospem carvão dia e noite. Máquinas a vapor movem TEARES que produzem em uma hora o que artesãos faziam em uma semana. Nasce a REVOLUÇÃO INDUSTRIAL — e junto dela, uma nova classe: o proletariado.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 2: A Máquina do Progresso e do Trabalho.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "As máquinas produziam MUITO mais, MUITO mais barato. O que aconteceu com a maioria dos artesãos e camponeses?",
    pergunta: "Qual foi o principal impacto social da industrialização?",
    fotoUrl: imgTear,
    opcoes: [
      {
        id: "prol",
        titulo: "VIRARAM OPERÁRIOS URBANOS",
        subtitulo: "êxodo do campo → cidade",
        emoji: "🏭",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "ric",
        titulo: "TODOS FICARAM RICOS",
        subtitulo: "a máquina distribuiu riqueza igual",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "prol",
    feedbackAcerto:
      "Correto. Artesãos quebraram (não competiam com máquinas). Camponeses foram expulsos por cercamentos. Todos migraram para as cidades industriais e viraram OPERÁRIOS — jornadas de 14h, salários baixos, moradias insalubres.",
    feedbackErro:
      "Não. A industrialização gerou riqueza MUITO desigual: donos das fábricas (burguesia) enriqueceram; artesãos e camponeses viraram OPERÁRIOS mal pagos, aglomerados nas cidades.",
    falaFinal: "Nasce o proletariado — junto com a luta por direitos trabalhistas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos da Revolução Industrial.",
    instrucao: "",
    cadernos: [
      {
        id: "rev",
        capa: "Revolução Industrial",
        emoji: "⚙️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgFab,
        conteudo:
          "REVOLUÇÃO INDUSTRIAL foi a transformação econômica iniciada na Inglaterra no final do século XVIII. Substituiu a produção ARTESANAL por MAQUINÁRIA movida a VAPOR (depois carvão, depois eletricidade). Mudou o mundo.",
        exemplo:
          "Exemplo: em 1769, James Watt aperfeiçoou a máquina a vapor. Em 20 anos, teares mecânicos produziam tecido 40 vezes mais rápido que um tecelão artesanal.",
      },
      {
        id: "bur",
        capa: "Burguesia Industrial",
        emoji: "💼",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgFab,
        conteudo:
          "BURGUESIA INDUSTRIAL é a classe dona das FÁBRICAS, das MÁQUINAS e do CAPITAL. Enriqueceu vendendo produtos em massa. Passou a comandar economicamente o mundo — e a exigir poder político.",
        exemplo:
          "Exemplo: famílias como os Rothschild (Alemanha) e os Cadbury (Inglaterra) construíram fortunas com fábricas e bancos.",
      },
      {
        id: "pro",
        capa: "Proletariado",
        emoji: "🛠️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgTear,
        conteudo:
          "PROLETARIADO é a classe dos OPERÁRIOS: pessoas que só têm a própria FORÇA DE TRABALHO pra vender. Recebiam salário baixo, moravam em cortiços e trabalhavam em condições insalubres — inclusive crianças de 6 anos.",
        exemplo:
          "Exemplo: em Manchester (1830), operários trabalhavam 14-16 horas por dia, 6 dias por semana, por menos que o suficiente pra comer.",
      },
      {
        id: "cap",
        capa: "Capitalismo",
        emoji: "💰",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFab,
        conteudo:
          "CAPITALISMO é o sistema econômico baseado em PROPRIEDADE PRIVADA dos meios de produção (fábricas, máquinas), TRABALHO ASSALARIADO e busca de LUCRO. Consolidou-se com a Revolução Industrial.",
        exemplo:
          "Exemplo: o dono da fábrica compra a matéria-prima, paga salário e vende o produto. A diferença entre custo e venda é o LUCRO.",
      },
    ],
    falaFinal:
      "Indústria + Burguesia + Proletariado + Capitalismo. Quatro peças de um novo mundo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico da fábrica: quem faz o quê no novo mundo do trabalho.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTear,
    pontos: [
      {
        id: "vap",
        x: 30,
        y: 25,
        emoji: "🔥",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgFab,
        titulo: "MÁQUINA A VAPOR",
        texto:
          "Aperfeiçoada por James Watt (1769). Queima carvão pra aquecer água; o vapor move pistões que giram engrenagens. Substitui a força humana e animal.",
      },
      {
        id: "tea",
        x: 65,
        y: 55,
        emoji: "🧵",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTear,
        titulo: "TEAR MECÂNICO",
        texto:
          "Produz tecido 40 vezes mais rápido que a mão humana. Substituiu artesãos, gerou desemprego e provocou revoltas (movimento ludita: destruição de máquinas).",
      },
      {
        id: "ope",
        x: 20,
        y: 75,
        emoji: "👶",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgTear,
        titulo: "TRABALHO INFANTIL",
        texto:
          "Crianças de 6 anos trabalhavam 12-14h/dia. Ganhavam menos que adultos e cabiam em espaços onde adultos não caíam. Só em 1833 a Inglaterra proibiu menores de 9 anos em fábricas.",
      },
      {
        id: "dono",
        x: 80,
        y: 15,
        emoji: "💼",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFab,
        titulo: "DONO DA FÁBRICA",
        texto:
          "Burguesia industrial. Investia capital, controlava produção, contratava operários. Enriquecia com o LUCRO gerado pela diferença entre salários baixos e preço de venda.",
      },
    ],
    falaFinal: "Quatro peças. Uma fábrica. Um novo modo de organizar o trabalho.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador industrial.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual país foi PIONEIRO da Revolução Industrial?",
        fotoUrl: imgFab,
        cards: [
          { id: "i", emoji: "🇬🇧", titulo: "Inglaterra", cor: "from-teal-600 to-slate-900" },
          { id: "f", emoji: "🇫🇷", titulo: "França", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "🇪🇸", titulo: "Espanha", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "i",
        feedbackAcerto: "Correto. Inglaterra tinha carvão, ferro, colônias e capital.",
        feedbackErro: "É a INGLATERRA. Tinha carvão, ferro, colônias fornecedoras e mão de obra.",
      },
      {
        id: "q2",
        pergunta: "Quem AJUSTOU a máquina a vapor em 1769, dando início à revolução?",
        fotoUrl: imgTear,
        cards: [
          { id: "w", emoji: "🔥", titulo: "James Watt", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "💡", titulo: "Edison", cor: "from-amber-600 to-slate-900" },
          { id: "f", emoji: "🚗", titulo: "Ford", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "w",
        feedbackAcerto: "Correto. James Watt. Edison veio depois (eletricidade); Ford, no XX (linha de montagem).",
        feedbackErro: "É James Watt. Edison inventou a lâmpada (1879); Ford, a linha de montagem (1913).",
      },
      {
        id: "q3",
        pergunta: "A classe operária urbana que só tem a força de trabalho a vender é chamada de:",
        fotoUrl: imgTear,
        cards: [
          { id: "p", emoji: "🛠️", titulo: "Proletariado", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "💼", titulo: "Burguesia", cor: "from-amber-600 to-slate-900" },
          { id: "n", emoji: "👑", titulo: "Nobreza", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. Proletariado = operários. Burguesia = donos.",
        feedbackErro: "É PROLETARIADO. Burguesia é a classe DONA das fábricas.",
      },
    ],
    falaFinal: "Radar afiado. Você já lê o mundo industrial como um historiador.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre a cidade industrial. Quem morava onde.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFab,
    camadas: [
      {
        id: "bur",
        rotulo: "Burguesia (fora da fuligem)",
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 60, y: 5, w: 35, h: 40 },
        descricao:
          "Bairros afastados das fábricas, mansões, parques, ar limpo. Donos do capital e das máquinas.",
      },
      {
        id: "ope",
        rotulo: "Proletariado (cortiços)",
        emoji: "🏚️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 55, w: 60, h: 40 },
        descricao:
          "Cortiços em torno das fábricas, sem esgoto, ar contaminado, tuberculose, cólera. Expectativa de vida em Manchester (1840): 17 anos.",
      },
    ],
    falaFinal: "Mesma cidade. Dois mundos. Desigualdade que gera revolta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas da Revolução Industrial.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Passos da industrialização",
    paradas: [
      { id: "cer", emoji: "🌾", rotulo: "1. Cercamentos (séc. XVIII)", fotoUrl: imgFab, descricao: "Camponeses expulsos → mão de obra livre para as cidades." },
      { id: "wat", emoji: "🔥", rotulo: "2. Máquina a vapor (1769)", fotoUrl: imgTear, descricao: "Watt aperfeiçoa; energia mecânica em larga escala." },
      { id: "fab", emoji: "🏭", rotulo: "3. Fábricas (1780+)", fotoUrl: imgFab, descricao: "Manchester, Liverpool, Birmingham crescem em anos." },
      { id: "lud", emoji: "🔨", rotulo: "4. Ludismo e sindicatos (1810+)", fotoUrl: imgTear, descricao: "Operários se organizam contra as condições brutais." },
    ],
    ordemCerta: ["cer", "wat", "fab", "lud"],
    feedbackAcerto:
      "Perfeito. Cercamentos → Máquina → Fábricas → Luta operária.",
    feedbackErro: "Essa não é a próxima. Comece pelos cercamentos, que liberaram mão de obra.",
    falaFinal: "Quatro passos que reorganizaram o planeta.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 2 das Engrenagens.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 2 — A Máquina do Trabalho",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No fim do século XVIII, a Inglaterra passou por uma transformação sem igual: a REVOLUÇÃO INDUSTRIAL. Máquinas movidas a vapor substituíram a produção artesanal, multiplicaram a produtividade e criaram um novo mundo econômico.",
        chaves: ["Revolução Industrial"],
        definicoes: {
          "Revolução Industrial":
            "Transformação econômica iniciada na Inglaterra (séc. XVIII) que substituiu a produção artesanal pela mecanizada.",
        },
        fotoUrl: imgFab,
      },
      {
        id: "p2",
        texto:
          "A sociedade se dividiu em duas classes principais: a BURGUESIA INDUSTRIAL, dona das fábricas, e o PROLETARIADO, formado por operários que só tinham a força de trabalho para vender. A relação era desigual: 14 horas de trabalho, salários baixos, moradias insalubres.",
        chaves: ["Burguesia Industrial", "Proletariado"],
        definicoes: {
          "Burguesia Industrial": "Classe dona das fábricas, máquinas e capital.",
          "Proletariado": "Operários urbanos que vendem sua força de trabalho por salário.",
        },
        fotoUrl: imgTear,
      },
      {
        id: "p3",
        texto:
          "O sistema econômico dominante passou a ser o CAPITALISMO INDUSTRIAL: propriedade privada das fábricas, trabalho assalariado e busca constante de lucro. Cidades cresceram rápido demais — Manchester saltou de 25 mil (1770) para 300 mil habitantes (1850).",
        chaves: ["Capitalismo"],
        definicoes: {
          "Capitalismo":
            "Sistema baseado em propriedade privada dos meios de produção, trabalho assalariado e busca de lucro.",
        },
        fotoUrl: imgFab,
      },
      {
        id: "p4",
        texto:
          "As condições brutais geraram resistência: MOVIMENTOS LUDITAS destruíam máquinas; SINDICATOS surgiram para organizar operários; pensadores como Karl Marx (1848) escreveram sobre a luta de classes. Nasceram as primeiras leis trabalhistas — direito à jornada de 8 horas veio só no século XX.",
        chaves: ["Ludismo"],
        definicoes: {
          "Ludismo":
            "Movimento operário (1810+) que destruía máquinas em protesto contra o desemprego e as condições de trabalho.",
        },
        fotoUrl: imgTear,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica como as máquinas reorganizaram o trabalho no mundo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador industrial. Classifique cada elemento em BURGUESIA, PROLETARIADO ou MÁQUINA.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "bur", emoji: "💼", rotulo: "Burguesia" },
      { id: "pro", emoji: "🛠️", rotulo: "Proletariado" },
      { id: "maq", emoji: "⚙️", rotulo: "Máquina/Tecnologia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Dono de fábrica têxtil em Manchester", emoji: "🏭", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Investidor de capital", emoji: "💰", cor: "from-amber-600 to-slate-900" }, contexto: "Compra máquinas e contrata operários.", pecaCertaId: "bur", feedbackAcerto: "Correto. Dono de fábrica = BURGUESIA.", feedbackErro: "Dono de fábrica é BURGUESIA industrial." },
      { id: "r2", municipioA: { nome: "Criança de 10 anos operando tear", emoji: "👶", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Operário mirim", emoji: "🧵", cor: "from-cyan-600 to-slate-900" }, contexto: "Trabalha 12h/dia por salário mínimo.", pecaCertaId: "pro", feedbackAcerto: "Correto. PROLETARIADO — inclusive infantil, infelizmente.", feedbackErro: "É PROLETARIADO. Crianças eram operárias mal pagas." },
      { id: "r3", municipioA: { nome: "Máquina a vapor de James Watt", emoji: "🔥", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Motor movido a carvão", emoji: "⚙️", cor: "from-teal-600 to-slate-900" }, contexto: "Energia mecânica para fábricas.", pecaCertaId: "maq", feedbackAcerto: "Correto. Máquina a vapor = TECNOLOGIA industrial.", feedbackErro: "É MÁQUINA/TECNOLOGIA — motor da revolução." },
      { id: "r4", municipioA: { nome: "Banqueiro que financia ferrovias", emoji: "🏦", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Capitalista financeiro", emoji: "💼", cor: "from-amber-600 to-slate-900" }, contexto: "Emprestava capital pra construção de trens.", pecaCertaId: "bur", feedbackAcerto: "Correto. Banqueiro = BURGUESIA.", feedbackErro: "Banqueiros e financistas são BURGUESIA." },
      { id: "r5", municipioA: { nome: "Tecelão que perdeu emprego para o tear", emoji: "🧶", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Artesão desempregado", emoji: "🚶", cor: "from-cyan-600 to-slate-900" }, contexto: "Migra para a cidade em busca de trabalho.", pecaCertaId: "pro", feedbackAcerto: "Correto. Artesão arruinado vira PROLETÁRIO.", feedbackErro: "Artesãos empobrecidos viravam PROLETARIADO urbano." },
      { id: "r6", municipioA: { nome: "Locomotiva a vapor (1825)", emoji: "🚂", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Trem de carga inglês", emoji: "🛤️", cor: "from-teal-600 to-slate-900" }, contexto: "Transporta carvão e produtos.", pecaCertaId: "maq", feedbackAcerto: "Correto. Trem = TECNOLOGIA industrial.", feedbackErro: "É TECNOLOGIA — locomotiva de Stephenson (1825)." },
    ],
    falaFinal: "6 rodadas! Você já enxerga cada peça do sistema industrial.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da sociedade industrial: quem tinha capital e quem tinha só o trabalho.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFab,
    fatias: [
      { id: "bur", rotulo: "Burguesia (~10%)", emoji: "💼", percentual: 10, cor: "#b45309", descricao: "Donos das fábricas, bancos e ferrovias. Detentores do capital.", exemplos: ["🏭 Industriais", "🏦 Banqueiros", "🚂 Ferroviários"] },
      { id: "pro", rotulo: "Proletariado (~90%)", emoji: "🛠️", percentual: 90, cor: "#0f766e", descricao: "Operários urbanos, artesãos empobrecidos, camponeses migrados. Vendiam a força de trabalho por salário.", exemplos: ["🧵 Tecelões", "⛏️ Mineiros", "👶 Menores"] },
    ],
    falaFinal: "10% donos do capital. 90% donos apenas do próprio trabalho.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem do Trabalho.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFab,
    perguntas: [
      { id: "av1", pergunta: "Onde COMEÇOU a Revolução Industrial?", opcoes: [ { id: "a", texto: "França.", correta: false }, { id: "b", texto: "Inglaterra.", correta: true }, { id: "c", texto: "Estados Unidos.", correta: false } ], feedbackAcerto: "Correto. Inglaterra, séc. XVIII.", feedbackErro: "É a INGLATERRA — carvão, ferro, colônias e capital acumulado." },
      { id: "av2", pergunta: "As duas classes principais criadas pela Revolução Industrial foram:", opcoes: [ { id: "a", texto: "Nobreza e clero.", correta: false }, { id: "b", texto: "Patrícios e plebeus.", correta: false }, { id: "c", texto: "Burguesia industrial e proletariado.", correta: true } ], feedbackAcerto: "Correto. BURGUESIA (dona) x PROLETARIADO (operário).", feedbackErro: "É BURGUESIA INDUSTRIAL e PROLETARIADO." },
      { id: "av3", pergunta: "O sistema econômico consolidado pela Revolução Industrial é:", opcoes: [ { id: "a", texto: "Feudalismo.", correta: false }, { id: "b", texto: "Capitalismo.", correta: true }, { id: "c", texto: "Escravismo antigo.", correta: false } ], feedbackAcerto: "Correto. CAPITALISMO INDUSTRIAL.", feedbackErro: "É o CAPITALISMO — propriedade privada, trabalho assalariado, lucro." },
    ],
    selo: { nome: "A Engrenagem do Trabalho", subtitulo: "Engrenagem 2 das Liberdades", emoji: "⚙️", cor: "from-teal-500 to-slate-900", fotoUrl: imgFab },
    falaFinal: "Engrenagem 2 destravada. A máquina virou o eixo do mundo moderno.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "A Engrenagem do Trabalho" },
};
