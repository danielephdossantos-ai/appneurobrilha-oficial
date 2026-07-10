import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/industrializacao.jpg";

/**
 * Geografia · 7º Ano · Unidade 3 · Aula 01
 * Industrialização e Macrocefalia Urbana
 * BNCC: EF07GE06, EF07GE07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-industrializacao-urbana",
  titulo: "Industrialização e Urbanização",
  iconeTrilha: "🏭",
  bncc: ["EF07GE06", "EF07GE07"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Em 1940, 70% do Brasil era rural. Hoje, 87% mora em cidades. Como?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, imagine um Brasil onde 7 em cada 10 pessoas viviam no campo, plantando café. Isso era 1940. Em 80 anos, tudo VIROU: hoje 87% moram em cidades. São Paulo saiu de 1 milhão pra 12 milhões de habitantes. Como um país inteiro se transformou tão rápido?",
    falaFinal: "A resposta tem 3 letras: I-N-D — indústria. Bora entender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que fez o Brasil sair do campo pra cidade tão rápido?",
    pergunta: "Qual foi o principal motor da urbanização brasileira?",
    opcoes: [
      { id: "petroleo", titulo: "A descoberta do petróleo", subtitulo: "gerou riqueza pra construir cidades", emoji: "🛢️", cor: "from-slate-400 to-slate-700" },
      { id: "industria", titulo: "A INDUSTRIALIZAÇÃO", subtitulo: "fábricas na cidade + máquinas no campo", emoji: "🏭", cor: "from-orange-400 to-red-600" },
    ],
    respostaCerta: "industria",
    feedbackAcerto: "Isso! Fábricas atraíram trabalhadores pras cidades. Máquinas expulsaram gente do campo.",
    feedbackErro: "Petróleo importa, mas foi a INDÚSTRIA que puxou milhões pra cidade.",
    falaFinal: "Indústria puxa, campo empurra. Resultado: cidades gigantes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da industrialização brasileira.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "substituicao", capa: "1. Substituição de Importações", emoji: "🏭", cor: "from-orange-500 to-red-700", conteudo: "Estratégia do governo Vargas (1930-1945): em vez de IMPORTAR produtos, o Brasil começou a fabricar aqui.", exemplo: "Ex.: antes comprávamos tecido da Inglaterra. Passamos a produzir em SP." },
      { id: "exodo", capa: "2. Êxodo Rural", emoji: "🚜", cor: "from-amber-500 to-yellow-700", conteudo: "ÊXODO RURAL: saída em massa das pessoas do campo pra cidade, em busca de emprego, saúde e escola.", exemplo: "Ex.: entre 1960 e 1980, 30 milhões de brasileiros deixaram o campo." },
      { id: "metropole", capa: "3. Metrópole", emoji: "🌆", cor: "from-sky-500 to-indigo-700", conteudo: "METRÓPOLE: cidade GIGANTE que influencia toda uma região, com mais de 1 milhão de habitantes e centro econômico forte.", exemplo: "Ex.: SP (12mi), Rio (6mi), BH (2,5mi), Salvador (2,4mi)." },
      { id: "macro", capa: "4. Macrocefalia Urbana", emoji: "🏙️", cor: "from-red-500 to-rose-700", conteudo: "MACROCEFALIA URBANA: quando uma cidade cresce DEMAIS pros serviços darem conta. Cabeça grande demais pro corpo.", exemplo: "Ex.: SP tem trânsito de 200 km, favelas, poluição — sinais de macrocefalia." },
    ],
    falaFinal: "Substituição, êxodo, metrópole, macrocefalia. 4 palavras que contam 90 anos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 marcos da industrialização brasileira.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "cafe", x: 55, y: 60, emoji: "☕", cor: "from-amber-500 to-orange-700", titulo: "1900 — Ciclo do Café (SP)", texto: "Fazendeiros de café acumularam capital. Esse dinheiro virou as primeiras fábricas em SP." },
      { id: "vargas", x: 45, y: 40, emoji: "🏛️", cor: "from-sky-500 to-blue-700", titulo: "1930 — Era Vargas", texto: "Governo criou CSN (aço), Petrobras e Vale. Estado puxou a indústria pesada." },
      { id: "jk", x: 40, y: 50, emoji: "🚗", cor: "from-red-500 to-rose-700", titulo: "1956 — Plano de Metas (JK)", texto: "Chegam multinacionais: VW, Ford, GM. Brasília é construída. Indústria automobilística nasce." },
      { id: "milagre", x: 60, y: 45, emoji: "📈", cor: "from-emerald-500 to-teal-700", titulo: "1970 — Milagre Econômico", texto: "PIB crescia 10% ao ano. Explosão de São Paulo. Êxodo rural em massa do Nordeste." },
      { id: "abertura", x: 50, y: 70, emoji: "🌐", cor: "from-purple-500 to-fuchsia-700", titulo: "1990 — Abertura Econômica", texto: "Collor abre o mercado. Fábricas modernizam, mas muitas fecham. Desindustrialização começa." },
    ],
    falaFinal: "Café → Vargas → JK → Milagre → Abertura. 90 anos de indústria.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de industrialista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "O governo que iniciou a industrialização pesada foi:",
        cards: [
          { id: "a", emoji: "🏛️", titulo: "Getúlio Vargas", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🚗", titulo: "Juscelino Kubitschek", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌐", titulo: "Fernando Collor", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Vargas criou CSN, Petrobras, Vale.", feedbackErro: "Foi VARGAS (1930-45). JK acelerou depois com as multinacionais.",
      },
      {
        id: "q2", pergunta: "Êxodo rural é:",
        cards: [
          { id: "a", emoji: "🌾", titulo: "Ir da cidade pro campo", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "🚜", titulo: "Ir do campo pra cidade", cor: "from-emerald-500 to-teal-700" },
          { id: "c", emoji: "🌊", titulo: "Ir pro exterior", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "b", feedbackAcerto: "Isso! Campo → cidade, em massa.", feedbackErro: "É do CAMPO pra CIDADE. Do latim 'exodus' = saída.",
      },
      {
        id: "q3", pergunta: "Macrocefalia urbana significa:",
        cards: [
          { id: "a", emoji: "🏙️", titulo: "Cidade cresce demais e serviços não dão conta", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌆", titulo: "Cidade fica moderna e bonita", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🏘️", titulo: "Cidade pequena e organizada", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! 'Cabeça' grande demais pro 'corpo'.", feedbackErro: "É quando a cidade cresce mais rápido que os serviços conseguem atender.",
      },
    ],
    falaFinal: "Radar industrial ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os estados do CONCENTRADO INDUSTRIAL brasileiro.",
    instrucao: "Marque os 4 estados mais industrializados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "RS"], pergunta: "Onde está concentrada a indústria brasileira?" },
    falaFinal: "SP, RJ, MG e RS concentram 75% da produção industrial do país.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as fases da industrialização brasileira.",
    instrucao: "Arraste na ordem cronológica",
    pergunta: "Do café ao século XXI:",
    paradas: [
      { id: "e1", emoji: "☕", rotulo: "1. Ciclo do Café (1900)", descricao: "Fazendeiros paulistas acumulam capital. Primeiras fábricas nascem em SP." },
      { id: "e2", emoji: "🏛️", rotulo: "2. Era Vargas (1930-45)", descricao: "Estado cria indústria de base: aço (CSN), petróleo (Petrobras), mineração (Vale)." },
      { id: "e3", emoji: "🚗", rotulo: "3. Plano de Metas — JK (1956)", descricao: "Multinacionais chegam. VW, Ford, GM. Nasce a indústria automobilística." },
      { id: "e4", emoji: "📈", rotulo: "4. Milagre Econômico (1970)", descricao: "PIB cresce 10% ao ano. Êxodo rural em massa. SP explode." },
      { id: "e5", emoji: "🌐", rotulo: "5. Abertura Econômica (1990)", descricao: "Collor abre mercado. Indústria moderniza, mas muitas fábricas fecham." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! 90 anos em 5 marcos.",
    feedbackErro: "Comece pelo Café (1900) e termine na Abertura (1990).",
    falaFinal: "5 fases. Um país que virou industrial em 100 anos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Indústria Brasileira",
    subtitulo: "Capítulo 3 — Do café à fábrica",
    paragrafos: [
      { id: "p1", texto: "A INDUSTRIALIZAÇÃO brasileira começou em SÃO PAULO com o capital do CAFÉ, no início do século XX.", chaves: ["industrialização", "são paulo", "café"] },
      { id: "p2", texto: "Getúlio VARGAS (1930-45) criou a indústria de BASE: aço, petróleo e mineração — as fábricas que fazem matéria-prima pras outras fábricas.", chaves: ["vargas", "indústria de base", "aço", "petróleo"] },
      { id: "p3", texto: "O ÊXODO RURAL foi enorme: entre 1960 e 1980, 30 MILHÕES de brasileiros saíram do campo. As METRÓPOLES cresceram descontroladamente.", chaves: ["êxodo rural", "30 milhões", "metrópoles"] },
      { id: "p4", texto: "Esse crescimento rápido gerou MACROCEFALIA: favelas, trânsito, poluição. A cidade cresceu mais rápido que os SERVIÇOS PÚBLICOS.", chaves: ["macrocefalia", "favelas", "serviços públicos"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo INDUSTRIALISTA EXPRESS! Que conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "sub", emoji: "🏭", rotulo: "Substituição de Importações" },
      { id: "ex", emoji: "🚜", rotulo: "Êxodo Rural" },
      { id: "met", emoji: "🌆", rotulo: "Metrópole" },
      { id: "mac", emoji: "🏙️", rotulo: "Macrocefalia" },
      { id: "des", emoji: "📉", rotulo: "Desindustrialização" },
      { id: "mult", emoji: "🚗", rotulo: "Multinacional" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vargas 1930", emoji: "🏛️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Fabricar aqui", emoji: "🏭", cor: "from-orange-400 to-red-600" }, contexto: "Estratégia de deixar de importar e passar a fabricar no Brasil:", pecaCertaId: "sub", feedbackAcerto: "Isso! SUBSTITUIÇÃO DE IMPORTAÇÕES.", feedbackErro: "Fabricar aqui em vez de importar = SUBSTITUIÇÃO DE IMPORTAÇÕES." },
      { id: "r2", municipioA: { nome: "30 milhões saíram", emoji: "🚜", cor: "from-amber-400 to-yellow-600" }, municipioB: { nome: "Do campo pra cidade", emoji: "🏙️", cor: "from-sky-400 to-blue-600" }, contexto: "Migração em massa nas décadas de 60-80:", pecaCertaId: "ex", feedbackAcerto: "Boa! ÊXODO RURAL.", feedbackErro: "Saída em massa do campo = ÊXODO RURAL." },
      { id: "r3", municipioA: { nome: "12 milhões hab", emoji: "🌆", cor: "from-sky-400 to-indigo-600" }, municipioB: { nome: "Centro econômico", emoji: "💼", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Cidade gigante que domina toda uma região:", pecaCertaId: "met", feedbackAcerto: "Isso! METRÓPOLE.", feedbackErro: "Cidade gigante centro de região = METRÓPOLE." },
      { id: "r4", municipioA: { nome: "Favelas + trânsito", emoji: "🚗", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Serviços não dão conta", emoji: "😵", cor: "from-orange-400 to-red-600" }, contexto: "Cidade cresceu mais que a infraestrutura conseguiu acompanhar:", pecaCertaId: "mac", feedbackAcerto: "Isso! MACROCEFALIA URBANA.", feedbackErro: "Cabeça grande demais pro corpo = MACROCEFALIA." },
      { id: "r5", municipioA: { nome: "Anos 1990", emoji: "📉", cor: "from-slate-400 to-slate-600" }, municipioB: { nome: "Fábricas fecham", emoji: "🏚️", cor: "from-gray-400 to-slate-600" }, contexto: "Depois da abertura econômica, muitas indústrias faliram:", pecaCertaId: "des", feedbackAcerto: "Boa! DESINDUSTRIALIZAÇÃO.", feedbackErro: "Fábricas fechando = DESINDUSTRIALIZAÇÃO." },
      { id: "r6", municipioA: { nome: "VW, Ford, GM", emoji: "🚗", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Chegaram com JK", emoji: "🌐", cor: "from-emerald-400 to-teal-600" }, contexto: "Empresa com sede em um país e fábricas em vários outros:", pecaCertaId: "mult", feedbackAcerto: "Isso! MULTINACIONAL.", feedbackErro: "Empresa global = MULTINACIONAL." },
    ],
    falaFinal: "6 conceitos dominados. Industrialista aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da INDÚSTRIA por região do Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "sudeste", rotulo: "Sudeste", emoji: "🏭", percentual: 55, cor: "#dc2626", descricao: "55% de toda a indústria nacional. SP sozinho tem 30%.", exemplos: ["🚗 ABC paulista (automóveis)", "⚙️ Vale do Paraíba (aeroespacial)", "⛽ Cubatão (petroquímica)"] },
      { id: "sul", rotulo: "Sul", emoji: "🍺", percentual: 20, cor: "#0d9488", descricao: "20% da indústria. Alimentos, calçados, eletrodomésticos.", exemplos: ["👟 Franca/RS (calçados)", "🍗 BRF/JBS (frigoríficos)", "🔧 Joinville (metalurgia)"] },
      { id: "nordeste", rotulo: "Nordeste", emoji: "⚗️", percentual: 12, cor: "#f59e0b", descricao: "12% da indústria. Cresceu com incentivos fiscais (SUDENE).", exemplos: ["🚗 Camaçari/BA (Ford, químico)", "👕 Ceará (têxtil)", "⚡ PE (Suape)"] },
      { id: "co", rotulo: "Centro-Oeste", emoji: "🌾", percentual: 8, cor: "#7c3aed", descricao: "8% da indústria. Agroindústria (soja, milho, carne).", exemplos: ["🌽 Rondonópolis (grãos)", "🥩 Frigoríficos MT", "🌿 Etanol GO"] },
      { id: "norte", rotulo: "Norte", emoji: "📱", percentual: 5, cor: "#16a34a", descricao: "5% da indústria. Zona Franca de Manaus (eletroeletrônicos).", exemplos: ["📺 ZFM (TVs, celulares)", "🏍️ Motos Honda Manaus", "⛏️ Vale/Carajás"] },
    ],
    falaFinal: "5 regiões, desigualdade brutal. Sudeste concentra mais da metade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Engenheiro Industrial.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A industrialização brasileira começou principalmente com o capital do:", opcoes: [{ id: "a", texto: "Café", correta: true }, { id: "b", texto: "Petróleo", correta: false }, { id: "c", texto: "Ouro", correta: false }], feedbackAcerto: "Isso! Fazendeiros paulistas viraram industriais.", feedbackErro: "Foi o CAFÉ que financiou as primeiras fábricas em SP." },
      { id: "av2", pergunta: "Êxodo rural é:", opcoes: [{ id: "a", texto: "Da cidade pro campo", correta: false }, { id: "b", texto: "Do campo pra cidade", correta: true }, { id: "c", texto: "Do Brasil pro exterior", correta: false }], feedbackAcerto: "Boa!", feedbackErro: "É do CAMPO pra CIDADE." },
      { id: "av3", pergunta: "Macrocefalia urbana é:", opcoes: [{ id: "a", texto: "Cidade grande organizada", correta: false }, { id: "b", texto: "Cidade cresce demais e serviços não dão conta", correta: true }, { id: "c", texto: "Cidade que produz muito café", correta: false }], feedbackAcerto: "Isso!", feedbackErro: "É crescimento desordenado — serviços não acompanham." },
    ],
    selo: { nome: "Engenheiro Industrial", subtitulo: "Insígnia da Indústria Brasileira", emoji: "🏭", cor: "from-orange-400 to-red-600" },
    falaFinal: "Insígnia conquistada! Você entende como o Brasil virou industrial.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Engenheiro Industrial" },
};
