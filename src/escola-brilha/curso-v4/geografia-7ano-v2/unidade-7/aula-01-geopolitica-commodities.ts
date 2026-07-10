import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/geopolitica-commodities.jpg";

/**
 * Geografia · 7º Ano · Unidade 7 · Aula 01
 * Geopolítica e Commodities
 * BNCC: EF07GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-geopolitica-commodities",
  titulo: "Geopolítica e Commodities",
  iconeTrilha: "🌐",
  bncc: ["EF07GE12"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "70% do que o Brasil exporta é matéria-prima. Isso é bom ou ruim?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, olhe o que o Brasil vende pro mundo: SOJA, MINÉRIO de ferro, PETRÓLEO, CARNE bovina, CAFÉ. Tudo é MATÉRIA-PRIMA — chamada de COMMODITY. A China compra quase metade disso. Mas quem transforma commodity em iPhone, carro e remédio? Outros países. E cobram MUITO mais caro.",
    falaFinal: "Bora entender o lugar do Brasil no jogo geopolítico global.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Quem é o MAIOR parceiro comercial do Brasil hoje?",
    pergunta: "Pra qual país o Brasil mais exporta?",
    opcoes: [
      { id: "eua", titulo: "Estados Unidos", subtitulo: "parceiro histórico", emoji: "🇺🇸", cor: "from-blue-400 to-indigo-600" },
      { id: "china", titulo: "CHINA", subtitulo: "compra soja, minério e petróleo", emoji: "🇨🇳", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "china",
    feedbackAcerto: "Isso! Desde 2009 a China é o maior parceiro comercial do Brasil — quase 30% das exportações.",
    feedbackErro: "EUA foi por décadas, mas desde 2009 a CHINA lidera.",
    falaFinal: "China precisa de comida e minério. Brasil vende. Casamento perfeito — e perigoso.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da geopolítica brasileira.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "comm", capa: "1. Commodity", emoji: "🌾", cor: "from-amber-500 to-orange-700", conteudo: "COMMODITY (do inglês 'mercadoria'): produto natural pouco transformado, vendido em grande volume no mercado global (soja, minério, café).", exemplo: "Ex.: 1 saca de soja vale o mesmo no Brasil, EUA ou Argentina." },
      { id: "bal", capa: "2. Balança Comercial", emoji: "⚖️", cor: "from-sky-500 to-blue-700", conteudo: "BALANÇA COMERCIAL: exportações − importações. Se vende mais que compra = superávit. Brasil tem superávit graças às commodities.", exemplo: "Ex.: Brasil exportou US$ 340 bi e importou US$ 240 bi em 2023 = superávit de US$ 100 bi." },
      { id: "brics", capa: "3. BRICS", emoji: "🌍", cor: "from-emerald-500 to-teal-700", conteudo: "BRICS: bloco de países emergentes — Brasil, Rússia, Índia, China e África do Sul. Buscam alternativa ao domínio econômico dos EUA e Europa.", exemplo: "Ex.: em 2024 entraram Arábia Saudita, Irã, Egito, Etiópia, EAU." },
      { id: "merc", capa: "4. Mercosul", emoji: "🤝", cor: "from-purple-500 to-fuchsia-700", conteudo: "MERCOSUL: bloco econômico da América do Sul (Brasil, Argentina, Uruguai, Paraguai). Reduz tarifas entre membros.", exemplo: "Ex.: um carro fabricado no Brasil entra na Argentina sem imposto alto." },
    ],
    falaFinal: "Commodity, balança, BRICS, Mercosul. O vocabulário do Brasil global.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 pontos-chave do comércio global brasileiro.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "china", x: 75, y: 40, emoji: "🇨🇳", cor: "from-red-500 to-rose-700", titulo: "China — o maior parceiro", texto: "Compra 30% das exportações brasileiras. Soja pra ração de porco + minério pra aço + petróleo." },
      { id: "eua", x: 30, y: 40, emoji: "🇺🇸", cor: "from-blue-500 to-indigo-700", titulo: "EUA — segundo maior", texto: "Compra 10% das exportações. Aço, café, aviões Embraer, petróleo. Parceiro tradicional." },
      { id: "merc", x: 45, y: 75, emoji: "🤝", cor: "from-purple-500 to-fuchsia-700", titulo: "Mercosul — quintal", texto: "Argentina + Uruguai + Paraguai compram carros, eletrodomésticos e roupas do Brasil." },
      { id: "ue", x: 55, y: 30, emoji: "🇪🇺", cor: "from-sky-500 to-blue-700", titulo: "União Europeia", texto: "Compra café, carne, celulose, minério. Acordo UE-Mercosul em negociação há 25 anos." },
      { id: "brics", x: 60, y: 55, emoji: "🌍", cor: "from-emerald-500 to-teal-700", titulo: "BRICS — alternativa global", texto: "Brasil, Rússia, Índia, China e África do Sul buscam moeda comum e menos dependência do dólar." },
    ],
    falaFinal: "5 direções, 5 estratégias. Brasil é comércio global.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de geopolítico.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "A principal exportação brasileira em VALOR é:",
        cards: [
          { id: "a", emoji: "🌾", titulo: "Soja", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "☕", titulo: "Café", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "🚗", titulo: "Automóveis", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Soja + farelo lidera as exportações há anos.", feedbackErro: "É a SOJA — US$ 60 bilhões só em 2023.",
      },
      {
        id: "q2", pergunta: "O 'S' de BRICS representa qual país?",
        cards: [
          { id: "a", emoji: "🇿🇦", titulo: "África do Sul (South Africa)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇸🇦", titulo: "Arábia Saudita", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇪🇸", titulo: "Espanha", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! South Africa entrou em 2011.", feedbackErro: "É South Africa = ÁFRICA DO SUL.",
      },
      {
        id: "q3", pergunta: "'Superávit comercial' significa:",
        cards: [
          { id: "a", emoji: "📈", titulo: "Exporta MAIS do que importa", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📉", titulo: "Importa mais do que exporta", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⚖️", titulo: "Vende e compra igual", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Sobra dinheiro na balança.", feedbackErro: "É EXPORTAR MAIS que importar. Sobra positivo.",
      },
    ],
    falaFinal: "Radar geopolítico ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os 4 estados que MAIS exportam soja no Brasil.",
    instrucao: "Marque os maiores exportadores de soja",
    missao: { tipo: "selecionar", siglas: ["MT", "PR", "RS", "GO"], pergunta: "Quais estados lideram a exportação de soja brasileira?" },
    falaFinal: "MT, PR, RS e GO = 75% da soja brasileira. Vai quase toda pra China.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a rota da SOJA brasileira até virar carne de porco chinesa.",
    instrucao: "Arraste na ordem da cadeia global",
    pergunta: "Do plantio à mesa da China:",
    paradas: [
      { id: "e1", emoji: "🌱", rotulo: "1. Plantio em MT/PR", descricao: "Fazendeiro planta soja no Cerrado, em novembro. Colhe em março." },
      { id: "e2", emoji: "🚛", rotulo: "2. Caminhão até o porto", descricao: "Soja vai por rodovia (BR-163) até portos de Santos, Paranaguá ou Santarém." },
      { id: "e3", emoji: "🚢", rotulo: "3. Navio graneleiro", descricao: "Navio gigante carrega 60.000 toneladas e atravessa o Pacífico em 40 dias." },
      { id: "e4", emoji: "🏭", rotulo: "4. Esmagamento na China", descricao: "Na China, soja vira farelo (ração) e óleo (comida)." },
      { id: "e5", emoji: "🐷", rotulo: "5. Vira porco chinês", descricao: "Farelo alimenta 450 milhões de porcos chineses. Carne vai pra mesa da China." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! Essa é a cadeia global das commodities.",
    feedbackErro: "Começa no plantio brasileiro e termina na mesa chinesa.",
    falaFinal: "5 etapas conectando MT à mesa da China. Isso é geopolítica na prática.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Geopolítica",
    subtitulo: "Capítulo 7 — Brasil no mundo",
    paragrafos: [
      { id: "p1", texto: "70% das EXPORTAÇÕES brasileiras são COMMODITIES: soja, minério de ferro, petróleo, carne e café. Matéria-prima pouco transformada.", chaves: ["exportações", "commodities", "soja"] },
      { id: "p2", texto: "A CHINA é o maior parceiro comercial do Brasil desde 2009 — compra quase 30% de tudo que exportamos. Depois vêm EUA, Argentina e União Europeia.", chaves: ["china", "parceiro", "30%"] },
      { id: "p3", texto: "O Brasil participa do BRICS (com Rússia, Índia, China e África do Sul) e do MERCOSUL (com Argentina, Uruguai e Paraguai). São blocos econômicos.", chaves: ["brics", "mercosul", "blocos"] },
      { id: "p4", texto: "O problema: commodity vale POUCO por tonelada. Um kg de soja vale US$ 0,50. Um kg de iPhone vale US$ 5.000. Depender de commodities deixa a economia FRÁGIL.", chaves: ["problema", "frágil", "iphone"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GEOPOLÍTICO EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "comm", emoji: "🌾", rotulo: "Commodity" },
      { id: "bal", emoji: "⚖️", rotulo: "Balança Comercial" },
      { id: "brics", emoji: "🌍", rotulo: "BRICS" },
      { id: "merc", emoji: "🤝", rotulo: "Mercosul" },
      { id: "sup", emoji: "📈", rotulo: "Superávit" },
      { id: "dep", emoji: "🔗", rotulo: "Dependência Econômica" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Soja + minério", emoji: "🌾", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Vendida em toneladas", emoji: "⚖️", cor: "from-emerald-400 to-teal-600" }, contexto: "Produto natural pouco transformado, vendido em volume:", pecaCertaId: "comm", feedbackAcerto: "Isso! COMMODITY.", feedbackErro: "Matéria-prima em volume = COMMODITY." },
      { id: "r2", municipioA: { nome: "Exporta − Importa", emoji: "⚖️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Conta anual", emoji: "📊", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Diferença entre o que o país vende e compra do exterior:", pecaCertaId: "bal", feedbackAcerto: "Boa! BALANÇA COMERCIAL.", feedbackErro: "Vendas − Compras externas = BALANÇA COMERCIAL." },
      { id: "r3", municipioA: { nome: "5 países emergentes", emoji: "🌍", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "BR + RU + IN + CH + ZA", emoji: "🤝", cor: "from-green-400 to-emerald-600" }, contexto: "Bloco de países que quer romper hegemonia dos EUA:", pecaCertaId: "brics", feedbackAcerto: "Isso! BRICS.", feedbackErro: "Brasil + Rússia + Índia + China + África do Sul = BRICS." },
      { id: "r4", municipioA: { nome: "AR + UY + PY + BR", emoji: "🤝", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Sem tarifas entre membros", emoji: "🚛", cor: "from-sky-400 to-blue-600" }, contexto: "Bloco econômico do Cone Sul da América do Sul:", pecaCertaId: "merc", feedbackAcerto: "Boa! MERCOSUL.", feedbackErro: "Bloco sul-americano = MERCOSUL." },
      { id: "r5", municipioA: { nome: "Exportou US$ 340bi", emoji: "📤", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Importou US$ 240bi", emoji: "📥", cor: "from-amber-400 to-orange-600" }, contexto: "Sobra positiva na balança comercial:", pecaCertaId: "sup", feedbackAcerto: "Isso! SUPERÁVIT.", feedbackErro: "Sobra positiva = SUPERÁVIT." },
      { id: "r6", municipioA: { nome: "30% pra China", emoji: "🇨🇳", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Se ela para de comprar…", emoji: "⚠️", cor: "from-orange-400 to-red-600" }, contexto: "Quando um país precisa DEMAIS de outro pra sobreviver:", pecaCertaId: "dep", feedbackAcerto: "Isso! DEPENDÊNCIA ECONÔMICA.", feedbackErro: "Precisar demais de um parceiro = DEPENDÊNCIA ECONÔMICA." },
    ],
    falaFinal: "6 conceitos dominados. Geopolítico aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza das EXPORTAÇÕES brasileiras: o que mais vendemos?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "soja", rotulo: "Soja e derivados", emoji: "🌾", percentual: 20, cor: "#f59e0b", descricao: "20% das exportações. US$ 60 bi/ano. Vai quase toda pra China virar ração de porco.", exemplos: ["🌾 Grão MT", "🥫 Óleo de soja", "🐷 Ração China"] },
      { id: "minerio", rotulo: "Minério de ferro", emoji: "⛰️", percentual: 15, cor: "#7c3aed", descricao: "15%. Vale extrai em MG e PA e exporta pra China (aço) e Japão.", exemplos: ["⛰️ Carajás PA", "⛏️ Vale MG", "🏗️ Aço China"] },
      { id: "petroleo", rotulo: "Petróleo bruto", emoji: "🛢️", percentual: 13, cor: "#0d9488", descricao: "13%. Petrobras extrai no Pré-Sal e exporta pra China, EUA e Europa.", exemplos: ["🛢️ Pré-Sal RJ", "⛽ Petrobras", "🚢 Refino externo"] },
      { id: "agro", rotulo: "Carne, açúcar, café, celulose", emoji: "🥩", percentual: 22, cor: "#dc2626", descricao: "22%. Agronegócio diversificado. Brasil é #1 mundial em carne bovina e café.", exemplos: ["🥩 JBS/BRF", "☕ Café SP/MG", "🎋 Celulose Suzano"] },
      { id: "manufatura", rotulo: "Manufaturas", emoji: "🚗", percentual: 30, cor: "#059669", descricao: "30%. Aviões Embraer, carros, autopeças, produtos químicos. A parte 'nobre'.", exemplos: ["✈️ Embraer", "🚗 Autos p/ Argentina", "💊 Químicos"] },
    ],
    falaFinal: "70% é matéria-prima. 30% é manufatura. Precisamos crescer o segundo grupo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Diplomata das Commodities.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O maior parceiro comercial do Brasil hoje é:", opcoes: [{ id: "a", texto: "China", correta: true }, { id: "b", texto: "EUA", correta: false }, { id: "c", texto: "Alemanha", correta: false }], feedbackAcerto: "Isso! Desde 2009.", feedbackErro: "É a CHINA — desde 2009 lidera as compras do Brasil." },
      { id: "av2", pergunta: "Commodity é:", opcoes: [{ id: "a", texto: "Produto industrial de alta tecnologia", correta: false }, { id: "b", texto: "Matéria-prima vendida em volume", correta: true }, { id: "c", texto: "Serviço de turismo", correta: false }], feedbackAcerto: "Perfeito!", feedbackErro: "É MATÉRIA-PRIMA vendida em volume (soja, minério, café)." },
      { id: "av3", pergunta: "O BRICS é formado por:", opcoes: [{ id: "a", texto: "Brasil, Reino Unido, Índia, Coreia, Suíça", correta: false }, { id: "b", texto: "Brasil, Rússia, Índia, China, África do Sul", correta: true }, { id: "c", texto: "Só países europeus", correta: false }], feedbackAcerto: "Isso!", feedbackErro: "BRICS = Brasil, Rússia, Índia, China, África do Sul." },
    ],
    selo: { nome: "Diplomata das Commodities", subtitulo: "Insígnia Geopolítica", emoji: "🌐", cor: "from-teal-400 to-cyan-600" },
    falaFinal: "Insígnia conquistada! Você entende o lugar do Brasil no mundo.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Diplomata das Commodities" },
};
