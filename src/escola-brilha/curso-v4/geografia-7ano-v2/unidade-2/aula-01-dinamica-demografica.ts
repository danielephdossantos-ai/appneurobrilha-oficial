import type { AulaGeoV1 } from "../../types";
import { url as piramide } from "@/assets/geografia-7ano/piramide-etaria-brasil.jpg.asset.json";
import { url as populacao } from "@/assets/geografia-7ano/populacao-brasileira.jpg.asset.json";
import { url as velhos } from "@/assets/geografia-7ano/envelhecimento-brasil.jpg.asset.json";
import { url as mae } from "@/assets/geografia-7ano/natalidade-queda.jpg.asset.json";
/**
 * Geografia · 7º Ano · Unidade 2 · Aula 01
 * "Dinâmica Demográfica" — BNCC EF07GE03, EF07GE04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-dinamica-demografica",
  titulo: "Dinâmica Demográfica do Brasil",
  iconeTrilha: "👥",
  bncc: ["EF07GE03", "EF07GE04"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: piramide,
    imagemDestaqueUrl: piramide,
    aurora:
      "Em 1970, a mulher brasileira tinha em média 5,8 filhos. Hoje tem 1,6 — MENOS que a média mundial. A expectativa de vida saltou de 54 anos (em 1970) para 76 (2023). Resultado: o Brasil está envelhecendo em ritmo acelerado. Isso é a TRANSIÇÃO DEMOGRÁFICA. Cada país passa por ela, mas o Brasil está fazendo em 60 anos o que a Europa levou 200. A PIRÂMIDE ETÁRIA, que era larga na base (muitos jovens), está virando um retângulo (poucos jovens, muitos adultos).",
    falaFinal: "O Brasil que era jovem virou adulto. E daqui 30 anos, será um país de idosos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta: por que a taxa de natalidade brasileira despencou de 5,8 (1970) pra 1,6 filhos por mulher (hoje)?",
    pergunta: "Principal causa da queda:",
    opcoes: [
      { id: "mulher", titulo: "Mulheres estudam e trabalham mais", subtitulo: "acesso a educação e trabalho", emoji: "📚", cor: "from-emerald-800 to-slate-950" },
      { id: "crise", titulo: "Crise econômica dos anos 80", subtitulo: "faltava dinheiro pra ter filhos", emoji: "💸", cor: "from-amber-800 to-slate-950" },
    ],
    respostaCerta: "mulher",
    feedbackAcerto:
      "Exato! O fator #1 foi a URBANIZAÇÃO + EDUCAÇÃO FEMININA + acesso a MÉTODOS CONTRACEPTIVOS a partir dos anos 70. Mulheres que estudam e trabalham fora casam mais tarde e têm menos filhos. Vale pra qualquer país do mundo.",
    feedbackErro:
      "A crise dos 80 acelerou, mas não é a causa principal. O fator #1 é a EMANCIPAÇÃO da mulher: educação, trabalho, contracepção. Toda vez que isso acontece em um país, natalidade cai.",
    falaFinal: "Regra global: educação feminina = queda de natalidade. Sempre.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos da demografia. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "natal", capa: "1. Taxa de Natalidade", emoji: "👶", cor: "from-sky-800 to-slate-950",
        conteudo: "TAXA DE NATALIDADE é o número de nascidos vivos a cada 1.000 habitantes por ano. Também usa-se a TAXA DE FECUNDIDADE (nº médio de filhos por mulher). No Brasil, fecundidade caiu de 5,8 (1970) para 1,6 (2024).",
        exemplo: "Curiosidade: para uma população se manter estável, é preciso que cada mulher tenha em média 2,1 filhos (taxa de REPOSIÇÃO). O Brasil está ABAIXO disso desde 2005. Ou seja, no futuro nossa população vai encolher se não houver imigração.",
        fotoUrl: mae,
      },
      {
        id: "mort", capa: "2. Expectativa de Vida", emoji: "❤️", cor: "from-red-800 to-slate-950",
        conteudo: "EXPECTATIVA DE VIDA é o número médio de anos que uma pessoa vive em um país. No Brasil, saltou de 54 anos (1970) para 76 (2023). Isso porque a MORTALIDADE INFANTIL caiu (vacinas, saneamento) e a medicina avançou.",
        exemplo: "Curiosidade: em Cingapura a expectativa é 84 anos; na Nigéria, 55. A diferença é diretamente ligada a saneamento básico, acesso à saúde e alimentação. Um brasileiro nascido hoje vive 22 anos a MAIS que um nascido em 1970.",
        fotoUrl: velhos,
      },
      {
        id: "pir", capa: "3. Pirâmide Etária", emoji: "📊", cor: "from-amber-800 to-orange-950",
        conteudo: "PIRÂMIDE ETÁRIA é um gráfico que mostra a distribuição da população por IDADE e SEXO. Países JOVENS têm pirâmide larga na base (muitas crianças). Países ENVELHECIDOS têm pirâmide invertida ou retangular.",
        exemplo: "Curiosidade: a pirâmide do Brasil em 1980 era uma pirâmide clássica (larga embaixo). Em 2024 já parece um retângulo. Em 2050, será invertida — mais idosos do que jovens. Igual Japão e Itália hoje.",
        fotoUrl: piramide,
      },
      {
        id: "envelh", capa: "4. Envelhecimento populacional", emoji: "👴", cor: "from-slate-700 to-slate-950",
        conteudo: "ENVELHECIMENTO POPULACIONAL é o aumento da proporção de IDOSOS (60+ anos) na população. No Brasil, idosos eram 4% em 1970; hoje são 15%; em 2050 serão 30%. Consequência: previdência mais cara, mais gastos com saúde, menos gente trabalhando.",
        exemplo: "Curiosidade: o Japão é o país mais envelhecido do mundo — 30% da população tem 65+ anos. Cidades inteiras estão sendo abandonadas por falta de jovens. O Brasil está caminhando pra esse cenário em 30 anos.",
        fotoUrl: velhos,
      },
    ],
    falaFinal: "Natalidade, expectativa, pirâmide, envelhecimento. 4 palavras que descrevem qualquer país.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é um estágio da TRANSIÇÃO DEMOGRÁFICA. Toque em cada um pra entender o processo.",
    instrucao: "Toque nos 4 cards pra ouvir cada estágio",
    mapaUrl: piramide,
    pontos: [
      { id: "e1", x: 20, y: 30, emoji: "👶", cor: "from-emerald-800 to-slate-950",
        titulo: "ESTÁGIO 1 — Alta natalidade + alta mortalidade",
        texto: "Países muito pobres. Muitas crianças nascem, muitas morrem cedo. População cresce devagar. Brasil viveu isso até 1940 mais ou menos.",
        fotoUrl: mae },
      { id: "e2", x: 55, y: 45, emoji: "🚀", cor: "from-amber-800 to-orange-950",
        titulo: "ESTÁGIO 2 — Explosão populacional",
        texto: "Melhora saneamento e medicina, mortalidade cai. Mas natalidade continua alta. População EXPLODE. Brasil viveu isso nos anos 1950-70.",
        fotoUrl: populacao },
      { id: "e3", x: 45, y: 60, emoji: "📉", cor: "from-sky-800 to-slate-950",
        titulo: "ESTÁGIO 3 — Natalidade cai",
        texto: "Urbanização, educação feminina e contracepção reduzem natalidade. Crescimento populacional desacelera. Brasil viveu isso nos anos 1980-2010.",
        fotoUrl: mae },
      { id: "e4", x: 70, y: 75, emoji: "👴", cor: "from-slate-700 to-slate-950",
        titulo: "ESTÁGIO 4 — Envelhecimento",
        texto: "Natalidade e mortalidade baixas. Muitos idosos, poucos jovens. Brasil está entrando aqui AGORA. Em 2050, seremos 30% idosos.",
        fotoUrl: velhos },
    ],
    falaFinal: "4 estágios. O Brasil está entre o 3 e o 4. Aos poucos, virando um país velho.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de demógrafo pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Taxa de fecundidade brasileira HOJE (filhos por mulher):",
        fotoUrl: mae,
        cards: [
          { id: "a", emoji: "1️⃣", titulo: "1,6 filhos", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "5️⃣", titulo: "5,8 filhos", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "3️⃣", titulo: "3,0 filhos", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 1,6 filhos por mulher. ABAIXO da taxa de reposição (2,1).",
        feedbackErro: "5,8 era em 1970. Hoje despencou pra 1,6 — abaixo da taxa de reposição." },
      { id: "q2", pergunta: "Principal fator da queda de natalidade brasileira:",
        fotoUrl: populacao,
        cards: [
          { id: "a", emoji: "📚", titulo: "Educação e trabalho feminino", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌡️", titulo: "Mudança de clima", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🎮", titulo: "Videogames tomando o tempo", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Educação feminina + acesso a contracepção = queda de natalidade em TODOS os países.",
        feedbackErro: "Clima não afeta natalidade. Videogames não. É EDUCAÇÃO FEMININA + trabalho + contracepção." },
      { id: "q3", pergunta: "Expectativa de vida do brasileiro em 2023:",
        fotoUrl: velhos,
        cards: [
          { id: "a", emoji: "🎯", titulo: "76 anos", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🕰️", titulo: "54 anos", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "💀", titulo: "45 anos", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 76 anos. Saltamos 22 anos em meio século.",
        feedbackErro: "54 anos era em 1970. Hoje é 76 — saltamos 22 anos em meio século." },
      { id: "q4", pergunta: "O que caracteriza uma pirâmide etária de país ENVELHECIDO:",
        fotoUrl: piramide,
        cards: [
          { id: "a", emoji: "📊", titulo: "Base estreita, topo largo", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🔺", titulo: "Base larga, topo estreito", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "⭕", titulo: "Circular", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Poucos jovens (base) + muitos idosos (topo) = país envelhecido.",
        feedbackErro: "Base larga = país jovem. País envelhecido tem BASE ESTREITA e topo largo." },
    ],
    falaFinal: "4 acertos = demógrafo em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O envelhecimento não é uniforme no Brasil. Alguns estados envelhecem mais rápido. Marque os 4 estados MAIS envelhecidos do Brasil (maior % de idosos).",
    instrucao: "Acenda os 4 estados mais envelhecidos",
    missao: {
      tipo: "selecionar",
      siglas: ["RS", "RJ", "SP", "MG"],
      pergunta: "Quais estados têm mais idosos?",
    },
    falaFinal:
      "RS, RJ, SP, MG. Sul e Sudeste envelheceram primeiro — foram os primeiros a industrializar e urbanizar.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os estágios da TRANSIÇÃO DEMOGRÁFICA que qualquer país atravessa.",
    instrucao: "Toque na ordem",
    pergunta: "Do início ao fim:",
    paradas: [
      { id: "e1", emoji: "👶", rotulo: "1. Alta natalidade + alta mortalidade",
        descricao: "Muita gente nasce e muita morre cedo. País pobre, população cresce devagar." },
      { id: "e2", emoji: "🚀", rotulo: "2. Explosão populacional",
        descricao: "Medicina melhora. Mortalidade despenca, natalidade ainda alta. População explode.", fotoUrl: populacao },
      { id: "e3", emoji: "📉", rotulo: "3. Queda de natalidade",
        descricao: "Urbanização + educação feminina reduzem nascimentos. Crescimento desacelera.", fotoUrl: mae },
      { id: "e4", emoji: "👴", rotulo: "4. Envelhecimento",
        descricao: "Natalidade e mortalidade baixas. País envelhece. Brasil está entrando aqui.", fotoUrl: velhos },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4"],
    feedbackAcerto: "Perfeito! O caminho que todo país desenvolvido já fez.",
    feedbackErro: "Comece por natalidade + mortalidade altas. Depois explosão, queda de natalidade, envelhecimento.",
    falaFinal: "4 estágios. Uma trajetória previsível quando um país se desenvolve.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 2 — Dinâmica Demográfica",
    paragrafos: [
      { id: "p1",
        texto: "A TAXA DE FECUNDIDADE brasileira caiu de 5,8 (1970) pra 1,6 filhos por mulher (2024) — abaixo da TAXA DE REPOSIÇÃO (2,1).",
        chaves: ["TAXA DE FECUNDIDADE", "TAXA DE REPOSIÇÃO"],
        definicoes: {
          "TAXA DE FECUNDIDADE": "Número médio de filhos por mulher em idade fértil. No Brasil: 5,8 em 1970 → 1,6 em 2024.",
          "TAXA DE REPOSIÇÃO": "2,1 filhos por mulher. Abaixo disso, a população encolhe (se não houver imigração).",
        },
        fotoUrl: mae,
      },
      { id: "p2",
        texto: "A EXPECTATIVA DE VIDA aumentou por causa da queda da MORTALIDADE INFANTIL (vacinas, saneamento) e do avanço da medicina.",
        chaves: ["EXPECTATIVA DE VIDA", "MORTALIDADE INFANTIL"],
        definicoes: {
          "EXPECTATIVA DE VIDA": "Anos que uma pessoa vive em média. Brasil: 54 anos (1970) → 76 anos (2023).",
          "MORTALIDADE INFANTIL": "Mortes de crianças até 1 ano por 1.000 nascidas vivas. Brasil: 115 em 1970 → 12 em 2023.",
        },
        fotoUrl: velhos,
      },
      { id: "p3",
        texto: "A PIRÂMIDE ETÁRIA brasileira era larga na base (jovem) em 1980. Hoje está virando um RETÂNGULO. Em 2050 será INVERTIDA (mais idosos que jovens).",
        chaves: ["PIRÂMIDE ETÁRIA", "RETÂNGULO", "INVERTIDA"],
        definicoes: {
          "PIRÂMIDE ETÁRIA": "Gráfico que mostra a distribuição da população por idade e sexo. Formato revela o estágio demográfico.",
          "RETÂNGULO": "Formato de pirâmide de país em transição — natalidade caindo, expectativa alta.",
          "INVERTIDA": "Formato de país envelhecido: base estreita (poucos jovens), topo largo (muitos idosos).",
        },
        fotoUrl: piramide,
      },
      { id: "p4",
        texto: "O ENVELHECIMENTO POPULACIONAL traz desafios: previdência mais cara, mais SAÚDE PÚBLICA, menos pessoas trabalhando por cada idoso.",
        chaves: ["ENVELHECIMENTO POPULACIONAL", "SAÚDE PÚBLICA"],
        definicoes: {
          "ENVELHECIMENTO POPULACIONAL": "Aumento da % de idosos. Brasil: 4% em 1970 → 15% em 2024 → 30% em 2050.",
          "SAÚDE PÚBLICA": "Sistema de saúde do país. Idosos usam mais serviços — SUS enfrenta pressão crescente.",
        },
        fotoUrl: velhos,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "natal", emoji: "", titulo: "Taxa de natalidade", cor: "from-slate-800 to-slate-900" },
      { id: "fec", emoji: "", titulo: "Taxa de fecundidade", cor: "from-slate-800 to-slate-900" },
      { id: "exp", emoji: "", titulo: "Expectativa de vida", cor: "from-slate-800 to-slate-900" },
      { id: "pir", emoji: "", titulo: "Pirâmide etária", cor: "from-slate-800 to-slate-900" },
      { id: "envelh", emoji: "", titulo: "Envelhecimento", cor: "from-slate-800 to-slate-900" },
      { id: "transi", emoji: "", titulo: "Transição demográfica", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito demográfico correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Número de nascidos vivos por mil habitantes em um ano.", cards, correta: "natal",
          feedbackAcerto: "Isso. Nascidos/1000 hab = TAXA DE NATALIDADE.", feedbackErro: "É TAXA DE NATALIDADE. Fecundidade se refere a filhos por mulher." },
        { id: "r2", pergunta: "Número médio de filhos por mulher em idade fértil.", cards, correta: "fec",
          feedbackAcerto: "Isso. Filhos por mulher = TAXA DE FECUNDIDADE.", feedbackErro: "É TAXA DE FECUNDIDADE. Foco no número por mulher." },
        { id: "r3", pergunta: "Número médio de anos que uma pessoa vive em determinado país.", cards, correta: "exp",
          feedbackAcerto: "Isso. Anos de vida = EXPECTATIVA DE VIDA.", feedbackErro: "É EXPECTATIVA DE VIDA. Brasil: 76 anos (2023)." },
        { id: "r4", pergunta: "Gráfico com barras horizontais mostrando idade e sexo da população.", cards, correta: "pir",
          feedbackAcerto: "Isso. Gráfico de idade/sexo = PIRÂMIDE ETÁRIA.", feedbackErro: "É PIRÂMIDE ETÁRIA. Base larga = país jovem; topo largo = envelhecido." },
        { id: "r5", pergunta: "Aumento contínuo da proporção de idosos na população.", cards, correta: "envelh",
          feedbackAcerto: "Isso. Mais idosos ao longo do tempo = ENVELHECIMENTO.", feedbackErro: "É ENVELHECIMENTO POPULACIONAL. Brasil terá 30% de idosos em 2050." },
        { id: "r6", pergunta: "Processo pelo qual países passam de alta natalidade/mortalidade para baixa natalidade/mortalidade.", cards, correta: "transi",
          feedbackAcerto: "Isso. Todo o processo = TRANSIÇÃO DEMOGRÁFICA.", feedbackErro: "É a TRANSIÇÃO DEMOGRÁFICA. Tem 4 estágios." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Analista demográfico formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da população brasileira por faixa etária (2024).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "jov", rotulo: "Jovens + Adultos (85%)", emoji: "👥", percentual: 85, cor: "#0284c7",
        descricao: "0 a 59 anos. Ainda maioria, mas encolhendo. Em 1970 era 96% da população.",
        exemplos: ["👶 Crianças", "🧑 Adultos", "👨‍💼 Trabalhadores"] },
      { id: "id", rotulo: "Idosos 60+ (15%)", emoji: "👴", percentual: 15, cor: "#6b7280",
        descricao: "Era 4% em 1970. Vai chegar a 30% em 2050. Vive mais e trabalha por menos anos.",
        exemplos: ["👴 Aposentados", "❤️ SUS", "🏥 Saúde"] },
    ],
    falaFinal: "15% de idosos hoje. 30% em 2050. Estamos envelhecendo em ritmo acelerado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Analista Demográfico.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Taxa de fecundidade brasileira caiu de 5,8 (1970) para:",
        opcoes: [
          { id: "a", texto: "1,6 filhos por mulher", correta: true },
          { id: "b", texto: "3,5 filhos por mulher", correta: false },
          { id: "c", texto: "5,0 filhos por mulher", correta: false },
        ],
        feedbackAcerto: "Isso! 1,6 — abaixo da taxa de reposição (2,1).",
        feedbackErro: "Está muito menor. Hoje é 1,6 filhos por mulher." },
      { id: "av2", pergunta: "Principal causa da queda de natalidade:",
        opcoes: [
          { id: "a", texto: "Educação feminina + contracepção", correta: true },
          { id: "b", texto: "Menos casamentos religiosos", correta: false },
          { id: "c", texto: "Mudança do clima", correta: false },
        ],
        feedbackAcerto: "Isso! EDUCAÇÃO FEMININA + acesso a contracepção.",
        feedbackErro: "Casamentos e clima não afetam. É EDUCAÇÃO FEMININA + trabalho + contracepção." },
      { id: "av3", pergunta: "% de idosos no Brasil em 2050 (projeção):",
        opcoes: [
          { id: "a", texto: "30% da população", correta: true },
          { id: "b", texto: "5% da população", correta: false },
          { id: "c", texto: "50% da população", correta: false },
        ],
        feedbackAcerto: "Isso! 30% em 2050 — semelhante ao Japão de hoje.",
        feedbackErro: "Estamos indo pra 30% em 2050. Já somos 15% hoje." },
    ],
    selo: { nome: "Analista Demográfico", subtitulo: "Insígnia do Explorador do Brasil", emoji: "👥", cor: "from-sky-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você lê a população do Brasil.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Analista Demográfico" },
};
