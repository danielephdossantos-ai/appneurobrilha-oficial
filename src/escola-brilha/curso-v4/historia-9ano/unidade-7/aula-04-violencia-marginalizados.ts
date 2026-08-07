import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula04: AulaGeoV1 = {
  slug: "aula-04-violencia-marginalizados",
  titulo: "Violência contra Populações Marginalizadas e Direitos Humanos",
  iconeTrilha: "🛡️",
  bncc: ["EF09HI26"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFavela,
    imagemDestaqueUrl: imgSmart,
    aurora:
      "Apesar dos avanços democráticos após 1989, o Brasil segue com altos índices de violência contra populações marginalizadas: jovens negros e periféricos, mulheres, povos indígenas, população LGBTQIA+ e pessoas em situação de rua. Dados do Atlas da Violência mostram que jovens negros têm risco muito maior de morrer por homicídio do que jovens brancos. Direitos Humanos, previstos na Constituição de 1988, ainda são um projeto em disputa na prática.",
    falaFinal: "Nó 7: entender a violência para poder combatê-la.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Quem é o grupo mais atingido por homicídios no Brasil?",
    pergunta: "Segundo o Atlas da Violência, qual grupo tem o maior risco de ser vítima de homicídio no Brasil?",
    fotoUrl: imgFavela,
    opcoes: [
      { id: "jn", titulo: "JOVENS NEGROS", subtitulo: "de periferias urbanas", emoji: "✊🏿", cor: "from-rose-800 to-slate-950" },
      { id: "err", titulo: "IDOSOS DE CLASSE MÉDIA", subtitulo: "em bairros centrais", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "jn",
    feedbackAcerto: "Correto. O Atlas da Violência mostra que jovens negros (16-29 anos) têm taxa de homicídio muito mais alta que jovens brancos da mesma faixa etária — um retrato do racismo estrutural brasileiro.",
    feedbackErro: "Não. São jovens negros de periferias urbanas o grupo mais vitimado por homicídios no Brasil, segundo o Atlas da Violência.",
    falaFinal: "Violência no Brasil tem cor, idade e endereço.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave sobre violência e direitos humanos.",
    instrucao: "",
    cadernos: [
      { id: "racismo", capa: "Racismo Estrutural", emoji: "✊🏿", cor: "from-rose-700 to-slate-900", fotoUrl: imgFavela, conteudo: "RACISMO ESTRUTURAL é o conjunto de práticas e desigualdades enraizadas nas instituições da sociedade que prejudicam sistematicamente pessoas negras, mesmo sem que haja uma intenção individual de discriminar. Reflete-se em educação, emprego, saúde e segurança pública.", exemplo: "Exemplo: segundo o Atlas da Violência de 2023, pessoas negras representam cerca de 77% das vítimas de homicídio no Brasil, embora sejam cerca de 56% da população." },
      { id: "genero", capa: "Feminicídio", emoji: "⚖️", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "FEMINICÍDIO é o assassinato de uma mulher pelo simples fato de ser mulher, geralmente motivado por relações de poder e violência de gênero. A Lei do Feminicídio (2015) tipificou esse crime como qualificado no Código Penal brasileiro.", exemplo: "Exemplo: em 2023, o Brasil registrou mais de 1.400 casos de feminicídio, uma média de quase 4 mulheres mortas por dia por essa razão." },
      { id: "indigena", capa: "Violência contra Povos Indígenas", emoji: "🪶", cor: "from-emerald-700 to-slate-900", fotoUrl: imgNyc, conteudo: "Povos indígenas sofrem violações históricas de seus territórios, como invasões por garimpeiros e madeireiros ilegais, além de assassinatos de lideranças. A demarcação de terras indígenas, prevista na Constituição de 1988, segue incompleta e disputada judicialmente (tese do Marco Temporal).", exemplo: "Exemplo: em 2022, o indigenista Bruno Pereira e o jornalista Dom Phillips foram assassinados no Vale do Javari (Amazonas) enquanto investigavam pesca ilegal." },
      { id: "lgbt", capa: "LGBTfobia", emoji: "🏳️‍🌈", cor: "from-cyan-700 to-slate-900", fotoUrl: imgClima, conteudo: "LGBTFOBIA é a discriminação e violência contra pessoas LGBTQIA+ por sua orientação sexual ou identidade de gênero. Em 2019, o STF equiparou a homofobia e a transfobia ao crime de racismo, enquanto o Congresso não aprovava lei específica.", exemplo: "Exemplo: relatórios de ONGs apontam o Brasil, ao longo de anos seguidos, como um dos países que mais registra assassinatos de pessoas trans no mundo." },
    ],
    falaFinal: "Racismo + Feminicídio + Violência indígena + LGBTfobia. Frentes urgentes dos Direitos Humanos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes de violência e resistência. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFavela,
    pontos: [
      { id: "p1", x: 22, y: 32, emoji: "✊🏿", cor: "from-rose-700 to-slate-900", fotoUrl: imgDig, titulo: "JUVENTUDE NEGRA E PERIFÉRICA", texto: "Jovens negros de 15 a 29 anos são as maiores vítimas de homicídio no Brasil. Casos como os de João Alberto (2020, morto por seguranças em mercado) geraram forte comoção nacional." },
      { id: "p2", x: 52, y: 55, emoji: "⚖️", cor: "from-amber-700 to-slate-900", fotoUrl: imgSmart, titulo: "VIOLÊNCIA CONTRA A MULHER", texto: "A Lei Maria da Penha (2006) e a Lei do Feminicídio (2015) buscam proteger mulheres, mas o Brasil ainda registra milhares de casos de feminicídio por ano." },
      { id: "p3", x: 78, y: 40, emoji: "🪶", cor: "from-emerald-700 to-slate-900", fotoUrl: imgNyc, titulo: "POVOS INDÍGENAS E TERRITÓRIO", texto: "Conflitos por terra, garimpo ilegal e desmatamento colocam em risco vidas e territórios indígenas, como visto na crise humanitária dos Yanomami (denunciada em 2023)." },
    ],
    falaFinal: "Cor, gênero e território. Três marcadores da violência que a Constituição de 1988 prometeu combater.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que é feminicídio?", fotoUrl: imgDig, cards: [{ id: "fem", emoji: "⚖️", titulo: "Assassinato de mulher por razões de gênero", cor: "from-amber-600 to-slate-900" }, { id: "err1", emoji: "✊🏿", titulo: "Discriminação racial no trabalho", cor: "from-rose-600 to-slate-900" }, { id: "err2", emoji: "🪶", titulo: "Invasão de terras indígenas", cor: "from-emerald-600 to-slate-900" }], correta: "fem", feedbackAcerto: "Correto. Tipificado como crime qualificado desde 2015.", feedbackErro: "Feminicídio é o assassinato de mulher motivado pela condição de gênero." },
      { id: "q2", pergunta: "Em que ano o STF equiparou homofobia e transfobia ao crime de racismo?", fotoUrl: imgClima, cards: [{ id: "19", emoji: "🏳️‍🌈", titulo: "2019", cor: "from-cyan-600 to-slate-900" }, { id: "err1", emoji: "⚖️", titulo: "2006", cor: "from-amber-600 to-slate-900" }, { id: "err2", emoji: "🪶", titulo: "1988", cor: "from-emerald-600 to-slate-900" }], correta: "19", feedbackAcerto: "Correto. Decisão do STF em 2019, diante da omissão do Congresso.", feedbackErro: "Foi em 2019." },
      { id: "q3", pergunta: "Qual crise humanitária indígena foi denunciada em 2023 devido à ação de garimpeiros ilegais?", fotoUrl: imgNyc, cards: [{ id: "yano", emoji: "🪶", titulo: "Crise Yanomami", cor: "from-emerald-600 to-slate-900" }, { id: "err1", emoji: "⚖️", titulo: "Lei Maria da Penha", cor: "from-amber-600 to-slate-900" }, { id: "err2", emoji: "✊🏿", titulo: "Caso João Alberto", cor: "from-rose-600 to-slate-900" }], correta: "yano", feedbackAcerto: "Correto. A crise Yanomami, marcada por desnutrição e garimpo ilegal, ganhou atenção nacional em 2023.", feedbackErro: "Foi a crise humanitária Yanomami." },
    ],
    falaFinal: "Você já reconhece marcos recentes da luta por direitos humanos no Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas dimensões da violência contra marginalizados.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "estrut", rotulo: "Violência Estrutural", emoji: "🏚️", cor: "from-rose-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Desigualdade histórica de acesso a educação, emprego, moradia e segurança que atinge principalmente negros, indígenas e periferias — fruto de séculos de escravidão e exclusão." },
      { id: "resp", rotulo: "Respostas e Marcos Legais", emoji: "⚖️", cor: "from-emerald-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Leis e políticas de enfrentamento: Lei Maria da Penha (2006), Lei do Feminicídio (2015), Estatuto da Igualdade Racial (2010) e decisão do STF sobre LGBTfobia (2019)." },
    ],
    falaFinal: "Violência estrutural exige respostas estruturais — leis, políticas e mudança cultural.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos legais de proteção a direitos humanos.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 2006–2023",
    paradas: [
      { id: "penha", emoji: "⚖️", rotulo: "1. Lei Maria da Penha (2006)", fotoUrl: imgDig, descricao: "Combate à violência doméstica." },
      { id: "igual", emoji: "✊🏿", rotulo: "2. Estatuto da Igualdade Racial (2010)", fotoUrl: imgFavela, descricao: "Marco legal contra o racismo." },
      { id: "femi", emoji: "🛡️", rotulo: "3. Lei do Feminicídio (2015)", fotoUrl: imgSmart, descricao: "Qualifica o homicídio de mulheres por gênero." },
      { id: "yano", emoji: "🪶", rotulo: "4. Crise Yanomami denunciada (2023)", fotoUrl: imgNyc, descricao: "Ação emergencial contra o garimpo ilegal." },
    ],
    ordemCerta: ["penha", "igual", "femi", "yano"],
    feedbackAcerto: "Perfeito. 2006 → 2010 → 2015 → 2023. Avanços legais que ainda lutam para virar realidade prática.",
    feedbackErro: "Comece pela Lei Maria da Penha (2006).",
    falaFinal: "4 marcos legais. Uma luta que continua.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leitura sobre violência e direitos humanos. Toque nos termos técnicos.",
    tituloLivro: "🛡️ A Teia dos Direitos Ainda em Disputa",
    subtitulo: "Página 7 — Violência contra Marginalizados",
    paragrafos: [
      { id: "p1", texto: "A Constituição de 1988 garantiu direitos iguais a todos os brasileiros, mas o RACISMO ESTRUTURAL segue produzindo desigualdade profunda. Segundo o Atlas da Violência, pessoas negras representam a grande maioria das vítimas de homicídio no país, e jovens negros de periferia correm risco muito maior de morrer de forma violenta do que jovens brancos.", chaves: ["Racismo Estrutural"], definicoes: { "Racismo Estrutural": "Conjunto de práticas e desigualdades enraizadas nas instituições que prejudicam sistematicamente pessoas negras." }, fotoUrl: imgFavela },
      { id: "p2", texto: "A violência de gênero também é grave: a Lei Maria da Penha (2006) e a Lei do FEMINICÍDIO (2015) foram conquistas do movimento de mulheres, mas o Brasil ainda registra milhares de casos de feminicídio por ano, revelando que a mudança na lei precisa vir acompanhada de mudança cultural.", chaves: ["Feminicídio"], definicoes: { Feminicídio: "Assassinato de mulher motivado por razões de gênero, tipificado como crime qualificado desde 2015." }, fotoUrl: imgDig },
      { id: "p3", texto: "Povos indígenas enfrentam invasões de terra por garimpeiros e madeireiros ilegais. Em 2023, o governo federal declarou emergência sanitária no território Yanomami (Roraima), após denúncias de desnutrição infantil, malária e violência ligadas ao garimpo ilegal de ouro dentro da terra indígena.", chaves: ["Emergência Yanomami"], definicoes: { "Emergência Yanomami": "Crise humanitária declarada em 2023 no território indígena Yanomami, causada por garimpo ilegal, doenças e desnutrição." }, fotoUrl: imgNyc },
      { id: "p4", texto: "Pessoas LGBTQIA+ também sofrem violência sistemática. Em 2019, diante da omissão do Congresso Nacional em aprovar uma lei específica, o Supremo Tribunal Federal decidiu equiparar a LGBTFOBIA ao crime de racismo. Apesar disso, o Brasil segue entre os países com mais assassinatos de pessoas trans registrados no mundo.", chaves: ["LGBTfobia"], definicoes: { LGBTfobia: "Discriminação e violência contra pessoas por sua orientação sexual ou identidade de gênero." }, fotoUrl: imgClima },
    ],
    falaFinal: "Leitura concluída. Direitos humanos são conquista permanente, não ponto final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada lei ou fato ao grupo protegido.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "mulher", emoji: "⚖️", rotulo: "Mulheres" },
      { id: "negro", emoji: "✊🏿", rotulo: "População Negra" },
      { id: "indigena", emoji: "🪶", rotulo: "Povos Indígenas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Lei Maria da Penha", emoji: "⚖️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "2006", emoji: "🛡️", cor: "from-amber-600 to-slate-900" }, contexto: "Violência doméstica.", pecaCertaId: "mulher", feedbackAcerto: "Correto. Proteção às mulheres.", feedbackErro: "É proteção às Mulheres." },
      { id: "r2", municipioA: { nome: "Estatuto da Igualdade Racial", emoji: "✊🏿", cor: "from-rose-700 to-slate-900" }, municipioB: { nome: "2010", emoji: "📜", cor: "from-rose-600 to-slate-900" }, contexto: "Marco legal antirracista.", pecaCertaId: "negro", feedbackAcerto: "Correto. Proteção à população negra.", feedbackErro: "É proteção à População Negra." },
      { id: "r3", municipioA: { nome: "Crise Yanomami", emoji: "🪶", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "2023", emoji: "🚨", cor: "from-emerald-600 to-slate-900" }, contexto: "Emergência sanitária.", pecaCertaId: "indigena", feedbackAcerto: "Correto. Povos indígenas.", feedbackErro: "É Povos Indígenas." },
      { id: "r4", municipioA: { nome: "Lei do Feminicídio", emoji: "🛡️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "2015", emoji: "⚖️", cor: "from-amber-600 to-slate-900" }, contexto: "Qualifica o crime.", pecaCertaId: "mulher", feedbackAcerto: "Correto. Proteção às mulheres.", feedbackErro: "É proteção às Mulheres." },
      { id: "r5", municipioA: { nome: "Atlas da Violência", emoji: "📊", cor: "from-rose-700 to-slate-900" }, municipioB: { nome: "Dados sobre homicídios raciais", emoji: "✊🏿", cor: "from-rose-600 to-slate-900" }, contexto: "Publicado pelo IPEA/FBSP.", pecaCertaId: "negro", feedbackAcerto: "Correto. População Negra.", feedbackErro: "É População Negra." },
      { id: "r6", municipioA: { nome: "Marco Temporal (tese jurídica)", emoji: "🪶", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Disputa por demarcação de terras", emoji: "🗺️", cor: "from-emerald-600 to-slate-900" }, contexto: "Julgado pelo STF.", pecaCertaId: "indigena", feedbackAcerto: "Correto. Povos Indígenas.", feedbackErro: "É Povos Indígenas." },
    ],
    falaFinal: "6 rodadas. Você já reconhece as leis e crises que marcam a luta por direitos humanos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Vítimas de homicídio no Brasil por cor/raça (dados do Atlas da Violência).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFavela,
    fatias: [
      { id: "negros", rotulo: "Vítimas negras (~77%)", emoji: "✊🏿", percentual: 77, cor: "#b91c1c", descricao: "Pessoas negras (pretas e pardas) representam cerca de 77% das vítimas de homicídio no Brasil, segundo o Atlas da Violência, embora sejam pouco mais da metade da população — evidência do racismo estrutural.", exemplos: ["Jovens de periferias urbanas", "Vítimas de letalidade policial"] },
      { id: "outros", rotulo: "Vítimas não negras (~23%)", emoji: "🧑", percentual: 23, cor: "#0f766e", descricao: "Pessoas brancas, amarelas e indígenas somam cerca de 23% das vítimas de homicídio, uma proporção bem menor relativamente ao tamanho desses grupos na população total.", exemplos: ["Vítimas de outras regiões e contextos sociais"] },
    ],
    falaFinal: "Um dado que expõe o racismo estrutural na segurança pública brasileira.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre violência e direitos humanos.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgNyc,
    perguntas: [
      { id: "av1", pergunta: "O racismo estrutural se refere a:", opcoes: [{ id: "a", texto: "Apenas ofensas pessoais isoladas.", correta: false }, { id: "b", texto: "Desigualdades enraizadas nas instituições que prejudicam pessoas negras.", correta: true }, { id: "c", texto: "Uma lei aprovada em 1988.", correta: false }], feedbackAcerto: "Correto. É um fenômeno estrutural, não só individual.", feedbackErro: "Racismo estrutural é desigualdade enraizada nas instituições." },
      { id: "av2", pergunta: "A Lei do Feminicídio foi aprovada em:", opcoes: [{ id: "a", texto: "2006.", correta: false }, { id: "b", texto: "2015.", correta: true }, { id: "c", texto: "1988.", correta: false }], feedbackAcerto: "Correto. Tipificou o feminicídio como crime qualificado.", feedbackErro: "Foi em 2015." },
      { id: "av3", pergunta: "A crise humanitária Yanomami de 2023 foi causada principalmente por:", opcoes: [{ id: "a", texto: "Garimpo ilegal e invasão de território.", correta: true }, { id: "b", texto: "Aumento da tarifa de ônibus.", correta: false }, { id: "c", texto: "Impeachment presidencial.", correta: false }], feedbackAcerto: "Correto. Garimpo ilegal trouxe doenças, desnutrição e violência ao território.", feedbackErro: "Foi causada pelo garimpo ilegal no território Yanomami." },
    ],
    selo: { nome: "Nó 7 da Teia — DEFENSOR DOS DIREITOS HUMANOS", subtitulo: "Fecha o eixo Violência e Marginalização", emoji: "🛡️", cor: "from-rose-500 to-slate-900", fotoUrl: imgFavela },
    falaFinal: "Direitos humanos exigem vigilância constante. O próximo capítulo é seu.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Defensor dos Direitos Humanos" },
};
