import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula02: AulaGeoV1 = {
  slug: "aula-02-brasil-pos-1989",
  titulo: "Brasil pós-1989: Democracia, Planos e Crises",
  iconeTrilha: "🇧🇷",
  bncc: ["EF09HI24"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFavela,
    imagemDestaqueUrl: imgNyc,
    aurora:
      "1989: primeira eleição direta para presidente desde 1960. Collor vence e é o primeiro Fernando eleito. Vem o Plano Collor (confisco da poupança), o impeachment de 1992, o Plano Real de 1994 (fim da hiperinflação), os governos FHC, Lula, Dilma (impeachment em 2016), Temer, Bolsonaro e o retorno de Lula em 2023. Trinta e cinco anos de democracia, crises, avanços sociais e polarização.",
    falaFinal: "Nó 7: a democracia brasileira sendo construída em tempo real.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que resolveu a hiperinflação que corroía o Brasil desde os anos 1980?",
    pergunta: "Qual plano econômico acabou com a hiperinflação brasileira?",
    fotoUrl: imgDig,
    opcoes: [
      { id: "real", titulo: "PLANO REAL (1994)", subtitulo: "criou o Real e ancorou os preços", emoji: "💵", cor: "from-emerald-800 to-slate-950" },
      { id: "collor", titulo: "PLANO COLLOR (1990)", subtitulo: "confiscou a poupança dos brasileiros", emoji: "🏦", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "real",
    feedbackAcerto: "Correto. O Plano Real, lançado em julho de 1994 por Fernando Henrique Cardoso (então ministro da Fazenda), derrubou uma inflação que passava de 2.000% ao ano.",
    feedbackErro: "Não. O Plano Collor (1990) confiscou a poupança e fracassou. Foi o Plano Real (1994) que estabilizou a moeda.",
    falaFinal: "Sem estabilidade econômica, não há democracia sólida.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave do Brasil pós-1989.",
    instrucao: "",
    cadernos: [
      { id: "impeach", capa: "Impeachment", emoji: "⚖️", cor: "from-amber-700 to-slate-900", fotoUrl: imgFavela, conteudo: "IMPEACHMENT é o processo constitucional de afastamento de um presidente por crime de responsabilidade. O Brasil viveu dois: Fernando Collor (1992, acusado de corrupção no esquema PC Farias) e Dilma Rousseff (2016, acusada de pedaladas fiscais).", exemplo: "Exemplo: em 1992, milhões de jovens de rosto pintado (os 'caras-pintadas') foram às ruas pedir o impeachment de Collor." },
      { id: "real", capa: "Plano Real", emoji: "💵", cor: "from-emerald-700 to-slate-900", fotoUrl: imgDig, conteudo: "PLANO REAL (1994) foi o programa que criou a moeda Real e usou a URV (Unidade Real de Valor) como âncora para acabar com a hiperinflação. É considerado o plano econômico mais bem-sucedido da história recente do Brasil.", exemplo: "Exemplo: em 1993 a inflação chegou a quase 2.500% ao ano; em 1995, caiu para cerca de 22% ao ano." },
      { id: "bolsa", capa: "Programas Sociais", emoji: "🤝", cor: "from-cyan-700 to-slate-900", fotoUrl: imgNyc, conteudo: "PROGRAMAS SOCIAIS de transferência de renda, como o Bolsa Família (criado em 2003, no governo Lula, unificando programas anteriores), ajudaram a tirar dezenas de milhões de pessoas da extrema pobreza nos anos 2000.", exemplo: "Exemplo: entre 2003 e 2014, o Brasil saiu do Mapa da Fome da ONU; a partir de 2021 a fome voltou a crescer, motivando o Auxílio Brasil e depois o novo Bolsa Família (2023)." },
      { id: "polar", capa: "Polarização Política", emoji: "🔴", cor: "from-slate-700 to-slate-900", fotoUrl: imgSmart, conteudo: "POLARIZAÇÃO POLÍTICA é a divisão radical da sociedade em blocos opostos, intensificada pelas redes sociais desde os protestos de junho de 2013 e sobretudo nas eleições de 2018 e 2022, entre apoiadores de Bolsonaro e de Lula.", exemplo: "Exemplo: em 8 de janeiro de 2023, apoiadores de Bolsonaro invadiram e depredaram as sedes dos Três Poderes em Brasília, uma semana após a posse de Lula." },
    ],
    falaFinal: "Impeachment + Plano Real + Programas sociais + Polarização. Coordenadas do Brasil recente.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três marcos da democracia brasileira. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgNyc,
    pontos: [
      { id: "p1", x: 22, y: 35, emoji: "🗳️", cor: "from-emerald-700 to-slate-900", fotoUrl: imgFavela, titulo: "ELEIÇÕES DIRETAS DE 1989", texto: "Primeira eleição presidencial direta em 29 anos, resultado da campanha das Diretas Já (1984). Fernando Collor de Mello venceu Lula no segundo turno." },
      { id: "p2", x: 50, y: 55, emoji: "💵", cor: "from-cyan-700 to-slate-900", fotoUrl: imgDig, titulo: "PLANO REAL E ESTABILIZAÇÃO (1994)", texto: "FHC, como ministro e depois presidente (1995–2002), consolidou a estabilidade monetária e privatizou estatais (Vale, telecomunicações)." },
      { id: "p3", x: 78, y: 40, emoji: "🏛️", cor: "from-amber-700 to-slate-900", fotoUrl: imgSmart, titulo: "GOVERNOS LULA, DILMA E CRISE DE 2016", texto: "Lula (2003–2010) ampliou programas sociais; Dilma (2011–2016) sofreu impeachment em meio à Operação Lava Jato e recessão econômica." },
    ],
    falaFinal: "Democracia, moeda estável, crise política. Três frentes que moldaram o Brasil atual.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quem foi o primeiro presidente eleito por voto direto após a ditadura militar?", fotoUrl: imgFavela, cards: [{ id: "col", emoji: "🗳️", titulo: "Fernando Collor (1989)", cor: "from-emerald-600 to-slate-900" }, { id: "fhc", emoji: "💵", titulo: "Fernando Henrique Cardoso", cor: "from-amber-600 to-slate-900" }, { id: "lula", emoji: "🤝", titulo: "Lula", cor: "from-slate-600 to-slate-900" }], correta: "col", feedbackAcerto: "Correto. Collor venceu Lula no segundo turno de 1989.", feedbackErro: "Foi Fernando Collor de Mello, eleito em 1989." },
      { id: "q2", pergunta: "O Plano Real foi lançado em que ano?", fotoUrl: imgDig, cards: [{ id: "94", emoji: "💵", titulo: "1994", cor: "from-emerald-600 to-slate-900" }, { id: "90", emoji: "🏦", titulo: "1990", cor: "from-amber-600 to-slate-900" }, { id: "02", emoji: "🗳️", titulo: "2002", cor: "from-slate-600 to-slate-900" }], correta: "94", feedbackAcerto: "Correto. Julho de 1994.", feedbackErro: "Foi em 1994, não 1990 (Plano Collor) nem 2002." },
      { id: "q3", pergunta: "Dilma Rousseff sofreu impeachment em que ano?", fotoUrl: imgSmart, cards: [{ id: "16", emoji: "⚖️", titulo: "2016", cor: "from-amber-600 to-slate-900" }, { id: "92", emoji: "🗳️", titulo: "1992", cor: "from-emerald-600 to-slate-900" }, { id: "18", emoji: "📱", titulo: "2018", cor: "from-slate-600 to-slate-900" }], correta: "16", feedbackAcerto: "Correto. Impeachment concluído em agosto de 2016.", feedbackErro: "Foi em 2016. 1992 foi o impeachment de Collor." },
    ],
    falaFinal: "Você já domina a linha do tempo democrática do Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas forças que moldaram o Brasil pós-1989.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "econ", rotulo: "Estabilização Econômica", emoji: "💵", cor: "from-emerald-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Plano Real (1994), privatizações, abertura comercial, Bolsa Família (2003) e crescimento com distribuição de renda nos anos 2000." },
      { id: "crise", rotulo: "Crises Políticas", emoji: "⚖️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Impeachment de Collor (1992) e Dilma (2016), Operação Lava Jato (desde 2014), invasão de 8 de janeiro de 2023." },
    ],
    falaFinal: "Estabilidade econômica e crises políticas caminharam lado a lado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da democracia brasileira.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1989–2023",
    paradas: [
      { id: "col", emoji: "🗳️", rotulo: "1. Collor eleito (1989)", fotoUrl: imgFavela, descricao: "Primeira eleição direta em 29 anos." },
      { id: "real", emoji: "💵", rotulo: "2. Plano Real (1994)", fotoUrl: imgDig, descricao: "Fim da hiperinflação." },
      { id: "dilma", emoji: "⚖️", rotulo: "3. Impeachment de Dilma (2016)", fotoUrl: imgSmart, descricao: "Crise política e recessão." },
      { id: "jan8", emoji: "🏛️", rotulo: "4. Invasão de Brasília (2023)", fotoUrl: imgNyc, descricao: "Ataque aos Três Poderes." },
    ],
    ordemCerta: ["col", "real", "dilma", "jan8"],
    feedbackAcerto: "Perfeito. 1989 → 1994 → 2016 → 2023. Trinta e quatro anos de democracia em construção.",
    feedbackErro: "Comece pela eleição de Collor (1989).",
    falaFinal: "4 marcos. Uma democracia posta à prova.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leitura sobre o Brasil pós-1989. Toque nos termos técnicos.",
    tituloLivro: "🇧🇷 A Teia da Nova República",
    subtitulo: "Página 7 — Brasil de 1989 a Hoje",
    paragrafos: [
      { id: "p1", texto: "Em 1989, o Brasil realizou sua primeira eleição presidencial direta desde 1960, fruto da mobilização das DIRETAS JÁ (1984). Fernando Collor de Mello venceu Lula no segundo turno, mas seu governo terminou em 1992 com um IMPEACHMENT por corrupção, tornando-se o primeiro presidente da história a sofrer esse processo.", chaves: ["Impeachment"], definicoes: { Impeachment: "Processo constitucional de afastamento de um chefe de governo por crime de responsabilidade." }, fotoUrl: imgFavela },
      { id: "p2", texto: "Em 1994, o então ministro Fernando Henrique Cardoso lançou o PLANO REAL, que acabou com décadas de hiperinflação e criou a moeda Real. FHC foi eleito presidente ainda em 1994 e reeleito em 1998, promovendo privatizações e abertura da economia.", chaves: ["Plano Real"], definicoes: { "Plano Real": "Programa econômico de 1994 que estabilizou a moeda e encerrou a hiperinflação brasileira." }, fotoUrl: imgDig },
      { id: "p3", texto: "Lula (2003–2010) ampliou programas sociais como o BOLSA FAMÍLIA e o Brasil viveu forte crescimento com redução da pobreza. Sua sucessora, Dilma Rousseff, sofreu um IMPEACHMENT em 2016 em meio à Operação Lava Jato e a uma grave recessão econômica.", chaves: ["Bolsa Família"], definicoes: { "Bolsa Família": "Programa de transferência de renda a famílias pobres, criado em 2003, condicionado à frequência escolar e à vacinação das crianças." }, fotoUrl: imgSmart },
      { id: "p4", texto: "Após os governos de Michel Temer e Jair Bolsonaro (2019–2022), marcados por forte POLARIZAÇÃO POLÍTICA, Lula venceu as eleições de 2022. Em 8 de janeiro de 2023, apoiadores de Bolsonaro invadiram os Três Poderes em Brasília, um dos episódios mais graves contra a democracia desde 1985.", chaves: ["Polarização Política"], definicoes: { "Polarização Política": "Divisão radical da sociedade em grupos opostos, com pouco espaço para diálogo, intensificada pelas redes sociais." }, fotoUrl: imgNyc },
    ],
    falaFinal: "Leitura concluída. Trinta e cinco anos de democracia, moeda estável e crises superadas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada fato ao seu período de governo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "col", emoji: "🗳️", rotulo: "Governo Collor" },
      { id: "fhc", emoji: "💵", rotulo: "Governo FHC" },
      { id: "lula", emoji: "🤝", rotulo: "Governo Lula" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Confisco da poupança", emoji: "🏦", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Plano Collor (1990)", emoji: "💰", cor: "from-amber-600 to-slate-900" }, contexto: "Medida impopular.", pecaCertaId: "col", feedbackAcerto: "Correto. Foi no governo Collor.", feedbackErro: "É do governo Collor." },
      { id: "r2", municipioA: { nome: "Criação do Real", emoji: "💵", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Plano Real (1994)", emoji: "📈", cor: "from-emerald-600 to-slate-900" }, contexto: "Fim da hiperinflação.", pecaCertaId: "fhc", feedbackAcerto: "Correto. FHC era ministro e depois presidente.", feedbackErro: "É do governo FHC." },
      { id: "r3", municipioA: { nome: "Privatização da Vale", emoji: "⛏️", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "1997", emoji: "🏭", cor: "from-emerald-600 to-slate-900" }, contexto: "Venda de estatal.", pecaCertaId: "fhc", feedbackAcerto: "Correto. Privatizações marcaram o governo FHC.", feedbackErro: "É do governo FHC." },
      { id: "r4", municipioA: { nome: "Bolsa Família", emoji: "🤝", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "2003", emoji: "📋", cor: "from-cyan-600 to-slate-900" }, contexto: "Transferência de renda.", pecaCertaId: "lula", feedbackAcerto: "Correto. Criado no governo Lula.", feedbackErro: "É do governo Lula." },
      { id: "r5", municipioA: { nome: "Saída do Mapa da Fome", emoji: "🍚", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "2014", emoji: "🌾", cor: "from-cyan-600 to-slate-900" }, contexto: "Reconhecido pela ONU/FAO.", pecaCertaId: "lula", feedbackAcerto: "Correto. Resultado dos governos Lula/Dilma.", feedbackErro: "É associado ao período Lula." },
      { id: "r6", municipioA: { nome: "Impeachment por corrupção", emoji: "⚖️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "1992", emoji: "🚪", cor: "from-amber-600 to-slate-900" }, contexto: "Esquema PC Farias.", pecaCertaId: "col", feedbackAcerto: "Correto. Collor renunciou durante o processo.", feedbackErro: "É do governo Collor." },
    ],
    falaFinal: "6 rodadas. Você já reconhece os governos pela sua marca histórica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Evolução da pobreza extrema no Brasil (1990 a 2014).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFavela,
    fatias: [
      { id: "red", rotulo: "Redução da pobreza extrema (~65%)", emoji: "📉", percentual: 65, cor: "#0f766e", descricao: "Entre 1990 e 2014, a proporção de brasileiros em extrema pobreza caiu cerca de 65%, impulsionada pela estabilização econômica e por programas sociais como o Bolsa Família.", exemplos: ["Bolsa Família (2003)", "Crescimento econômico dos anos 2000"] },
      { id: "perm", rotulo: "Pobreza que persistiu (~35%)", emoji: "🏚️", percentual: 35, cor: "#b45309", descricao: "Apesar dos avanços, cerca de 35% da pobreza extrema resistiu, ligada a desigualdade estrutural, recessão pós-2015 e retrocessos durante a pandemia de 2020.", exemplos: ["Recessão de 2015-2016", "Impactos da pandemia (2020)"] },
    ],
    falaFinal: "Avanços reais, mas desigualdade que ainda desafia o Brasil de hoje.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre o Brasil pós-1989.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgNyc,
    perguntas: [
      { id: "av1", pergunta: "O Plano Real (1994) é conhecido por:", opcoes: [{ id: "a", texto: "Confiscar a poupança dos brasileiros.", correta: false }, { id: "b", texto: "Acabar com a hiperinflação e criar o Real.", correta: true }, { id: "c", texto: "Instituir o voto direto para presidente.", correta: false }], feedbackAcerto: "Correto. Estabilizou a economia brasileira em 1994.", feedbackErro: "O Plano Real acabou com a hiperinflação." },
      { id: "av2", pergunta: "O Bolsa Família foi criado em:", opcoes: [{ id: "a", texto: "1994, no governo FHC.", correta: false }, { id: "b", texto: "2003, no governo Lula.", correta: true }, { id: "c", texto: "2016, no governo Temer.", correta: false }], feedbackAcerto: "Correto. Unificou programas sociais anteriores em 2003.", feedbackErro: "Foi criado em 2003, no governo Lula." },
      { id: "av3", pergunta: "O impeachment de Dilma Rousseff ocorreu em:", opcoes: [{ id: "a", texto: "1992.", correta: false }, { id: "b", texto: "2016.", correta: true }, { id: "c", texto: "2023.", correta: false }], feedbackAcerto: "Correto. Concluído em agosto de 2016.", feedbackErro: "Foi em 2016. 1992 foi o de Collor." },
    ],
    selo: { nome: "Nó 7 da Teia — GUARDIÃO DA DEMOCRACIA", subtitulo: "Fecha o eixo Brasil pós-1989", emoji: "🇧🇷", cor: "from-emerald-500 to-slate-900", fotoUrl: imgDig },
    falaFinal: "Trinta e cinco anos de democracia, com avanços e crises. O próximo capítulo é seu.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Guardião da Democracia" },
};
