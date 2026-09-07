import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula05: AulaGeoV1 = {
  slug: "aula-05-brasil-globalizacao",
  titulo: "O Brasil na Globalização (anos 1990 em diante)",
  iconeTrilha: "🇧🇷",
  bncc: ["EF09HI27"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgNyc,
    imagemDestaqueUrl: imgFavela,
    aurora:
      "Anos 1990: o Brasil sai de décadas de ditadura e crise inflacionária e mergulha na GLOBALIZAÇÃO. Collor abre as importações (1990), o Plano Real estabiliza a moeda (1994), empresas brasileiras entram em bolsas estrangeiras, o país adere a acordos como o Mercosul (1991) e a OMC (1995). O Brasil deixa de ser uma economia fechada para se tornar um dos protagonistas emergentes do mundo globalizado.",
    falaFinal: "O Brasil entra na Teia global dos anos 1990.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual foi a virada que abriu o Brasil ao mundo?",
    pergunta: "O que caracteriza a inserção do Brasil na globalização nos anos 1990?",
    fotoUrl: imgSmart,
    opcoes: [
      { id: "ab", titulo: "ABERTURA COMERCIAL E ECONÔMICA", subtitulo: "fim do protecionismo, Plano Real, Mercosul", emoji: "🌐", cor: "from-green-800 to-slate-950" },
      { id: "fe", titulo: "FECHAMENTO TOTAL DAS FRONTEIRAS", subtitulo: "Brasil isolado do comércio mundial", emoji: "❌", cor: "from-amber-900 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "ab",
    feedbackAcerto: "Correto. Collor reduziu tarifas de importação em 1990, o Plano Real (1994) estabilizou a moeda e o Brasil se integrou a blocos como o Mercosul (1991).",
    feedbackErro: "Não. O Brasil fez o oposto: ABRIU sua economia, reduziu barreiras alfandegárias e buscou atrair investimento estrangeiro.",
    falaFinal: "Abertura + estabilização = a porta de entrada do Brasil no mundo globalizado.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro marcos da entrada do Brasil na globalização.",
    instrucao: "",
    cadernos: [
      { id: "col", capa: "Abertura Comercial (Collor)", emoji: "📦", cor: "from-green-700 to-slate-900", fotoUrl: imgNyc, conteudo: "Em 1990, o governo Fernando Collor de Mello reduziu drasticamente as tarifas de importação, encerrando décadas de protecionismo iniciado com a industrialização por substituição de importações. Empresas brasileiras precisaram competir com produtos estrangeiros.", exemplo: "Exemplo: carros e eletrônicos importados passaram a circular livremente, obrigando montadoras nacionais a se modernizar ou fechar." },
      { id: "real", capa: "Plano Real (1994)", emoji: "💵", cor: "from-teal-700 to-slate-900", fotoUrl: imgFavela, conteudo: "O PLANO REAL, criado no governo Itamar Franco com Fernando Henrique Cardoso como ministro da Fazenda, encerrou décadas de hiperinflação criando o Real como nova moeda em julho de 1994. A estabilidade monetária atraiu investimento estrangeiro direto.", exemplo: "Exemplo: a inflação, que chegou a mais de 2.000% ao ano em 1993, caiu para menos de 5% em poucos anos após o Real." },
      { id: "merc", capa: "Mercosul (1991)", emoji: "🤝", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "O MERCOSUL (Mercado Comum do Sul), criado pelo Tratado de Assunção em 1991 entre Brasil, Argentina, Paraguai e Uruguai, é um bloco de integração econômica regional que reduz tarifas entre os países-membros e amplia o comércio brasileiro na América do Sul.", exemplo: "Exemplo: hoje a Argentina é um dos principais destinos das exportações industriais brasileiras, graças ao livre comércio dentro do bloco." },
      { id: "priv", capa: "Privatizações", emoji: "🏭", cor: "from-slate-700 to-slate-900", fotoUrl: imgClima, conteudo: "Nos anos 1990, sobretudo no governo FHC (1995-2002), o Estado brasileiro vendeu empresas estatais (privatizações) como a Vale do Rio Doce (1997) e empresas de telecomunicações (Telebrás, 1998), seguindo a onda neoliberal mundial de redução do papel do Estado na economia.", exemplo: "Exemplo: a venda da Vale do Rio Doce em 1997 foi um dos maiores leilões de privatização da história do país, gerando forte debate político." },
    ],
    falaFinal: "Abertura + Real + Mercosul + Privatizações. As engrenagens da entrada global do Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes da globalização brasileira. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgSmart,
    pontos: [
      { id: "exp", x: 25, y: 30, emoji: "🚢", cor: "from-teal-700 to-slate-900", fotoUrl: imgNyc, titulo: "EXPORTAÇÕES E COMMODITIES", texto: "Nos anos 2000, o Brasil se tornou grande exportador de commodities (soja, minério de ferro, petróleo) para a China, que crescia aceleradamente. Isso trouxe divisas, mas também dependência de preços internacionais." },
      { id: "emp", x: 55, y: 55, emoji: "🏢", cor: "from-green-700 to-slate-900", fotoUrl: imgFavela, titulo: "MULTINACIONAIS BRASILEIRAS", texto: "Empresas como Embraer, Vale, JBS e Petrobras se tornaram multinacionais, atuando em dezenas de países. A Embraer, por exemplo, exporta aviões para companhias aéreas de todo o mundo." },
      { id: "des", x: 80, y: 40, emoji: "⚖️", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, titulo: "DESIGUALDADE E VULNERABILIDADE", texto: "A globalização trouxe crescimento, mas também expôs o Brasil a crises externas (como a crise asiática de 1997 e a crise financeira de 2008) e manteve alta desigualdade social, mesmo com programas como o Bolsa Família (2003)." },
    ],
    falaFinal: "Exportações, multinacionais e desigualdade: o Brasil global tem contradições.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ano o Plano Real criou a nova moeda brasileira?", fotoUrl: imgClima, cards: [{ id: "94", emoji: "💵", titulo: "1994", cor: "from-teal-600 to-slate-900" }, { id: "90", emoji: "📦", titulo: "1990", cor: "from-amber-600 to-slate-900" }, { id: "02", emoji: "🏢", titulo: "2002", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "94", feedbackAcerto: "Correto. O Real foi lançado em julho de 1994.", feedbackErro: "É 1994. 1990 foi a abertura comercial de Collor." },
      { id: "q2", pergunta: "O Mercosul (1991) reúne inicialmente:", fotoUrl: imgSmart, cards: [{ id: "mer", emoji: "🤝", titulo: "Brasil, Argentina, Paraguai e Uruguai", cor: "from-teal-600 to-slate-900" }, { id: "eu", emoji: "🇪🇺", titulo: "Países da Europa", cor: "from-amber-600 to-slate-900" }, { id: "as", emoji: "🌏", titulo: "China e Japão", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "mer", feedbackAcerto: "Correto. Tratado de Assunção, 1991.", feedbackErro: "São os quatro países fundadores sul-americanos." },
      { id: "q3", pergunta: "As PRIVATIZAÇÕES dos anos 1990 no Brasil significaram:", fotoUrl: imgNyc, cards: [{ id: "ve", emoji: "🏭", titulo: "Venda de empresas estatais ao setor privado", cor: "from-teal-600 to-slate-900" }, { id: "es", emoji: "🏛️", titulo: "Estatização de empresas privadas", cor: "from-amber-600 to-slate-900" }, { id: "fe", emoji: "🚫", titulo: "Fechamento de fronteiras comerciais", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "ve", feedbackAcerto: "Correto. Ex.: Vale do Rio Doce (1997) e Telebrás (1998).", feedbackErro: "Privatização é o oposto: venda de estatais ao setor privado." },
    ],
    falaFinal: "Você já domina as bases da globalização brasileira.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados da globalização brasileira.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "gan", rotulo: "Ganhos", emoji: "📈", cor: "from-teal-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Estabilidade monetária, aumento de exportações, multinacionais brasileiras de destaque mundial, acesso a tecnologia e investimento estrangeiro." },
      { id: "des", rotulo: "Desafios", emoji: "⚖️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Dependência de commodities, vulnerabilidade a crises externas, desindustrialização em setores, manutenção de forte desigualdade social." },
    ],
    falaFinal: "Ganhos e desafios andam juntos na globalização brasileira.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da inserção global do Brasil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1990–2003",
    paradas: [
      { id: "col", emoji: "📦", rotulo: "1. Abertura comercial (1990)", fotoUrl: imgDig, descricao: "Collor reduz tarifas de importação." },
      { id: "mer", emoji: "🤝", rotulo: "2. Mercosul (1991)", fotoUrl: imgClima, descricao: "Tratado de Assunção cria o bloco regional." },
      { id: "rea", emoji: "💵", rotulo: "3. Plano Real (1994)", fotoUrl: imgSmart, descricao: "Fim da hiperinflação, nova moeda." },
      { id: "bol", emoji: "🤲", rotulo: "4. Bolsa Família (2003)", fotoUrl: imgNyc, descricao: "Programa social busca reduzir desigualdade na era global." },
    ],
    ordemCerta: ["col", "mer", "rea", "bol"],
    feedbackAcerto: "Perfeito. 1990 → 1991 → 1994 → 2003. A rota da globalização brasileira.",
    feedbackErro: "Comece pela abertura comercial de Collor (1990).",
    falaFinal: "4 marcos, 13 anos: o Brasil se reposiciona no mundo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sobre a inserção do Brasil na globalização. Toque nos termos técnicos.",
    tituloLivro: "🇧🇷 O Brasil na Teia Global",
    subtitulo: "O Brasil e a globalização desde os anos 1990",
    paragrafos: [
      { id: "p1", texto: "Depois de décadas de economia fechada, o governo Fernando Collor de Mello (1990-1992) promoveu a ABERTURA COMERCIAL, reduzindo tarifas de importação e expondo a indústria nacional à concorrência internacional. Foi o primeiro passo do Brasil rumo à GLOBALIZAÇÃO econômica.", chaves: ["Abertura Comercial"], definicoes: { "Abertura Comercial": "Redução de barreiras (tarifas, cotas) ao comércio internacional, permitindo maior entrada de produtos e capitais estrangeiros." }, fotoUrl: imgFavela },
      { id: "p2", texto: "Em 1994, o PLANO REAL, elaborado sob o comando de Fernando Henrique Cardoso, criou uma nova moeda e encerrou a hiperinflação que corroía o país havia décadas. A estabilidade monetária atraiu investimentos estrangeiros e permitiu ao Brasil se integrar de forma mais estável à economia mundial.", chaves: ["Plano Real"], definicoes: { "Plano Real": "Conjunto de medidas econômicas que criou o Real e estabilizou a moeda brasileira em 1994, encerrando a hiperinflação." }, fotoUrl: imgDig },
      { id: "p3", texto: "O MERCOSUL, criado em 1991 pelo Tratado de Assunção, uniu Brasil, Argentina, Paraguai e Uruguai em um bloco de livre comércio regional. Já a adesão à Organização Mundial do Comércio (OMC), em 1995, integrou o Brasil às regras multilaterais do comércio internacional.", chaves: ["Mercosul"], definicoes: { Mercosul: "Bloco econômico regional formado por países da América do Sul para reduzir barreiras comerciais entre seus membros." }, fotoUrl: imgClima },
      { id: "p4", texto: "Nos anos 2000, empresas brasileiras como Embraer, Vale e JBS se tornaram multinacionais, e o Brasil passou a exportar grandes volumes de commodities para a China. Ao mesmo tempo, programas sociais como o BOLSA FAMÍLIA (2003) buscaram enfrentar a desigualdade herdada de séculos, mostrando que a globalização trouxe oportunidades, mas não resolveu sozinha os desafios sociais do país.", chaves: ["Bolsa Família"], definicoes: { "Bolsa Família": "Programa de transferência de renda criado em 2003 para famílias em situação de pobreza, uma das políticas sociais mais amplas do mundo." }, fotoUrl: imgSmart },
    ],
    falaFinal: "Leitura concluída. O Brasil global tem ganhos, contradições e desafios.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "ab", emoji: "📦", rotulo: "Abertura Comercial" },
      { id: "es", emoji: "💵", rotulo: "Estabilização Monetária" },
      { id: "in", emoji: "🤝", rotulo: "Integração Regional" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Collor (1990)", emoji: "📦", cor: "from-green-700 to-slate-900" }, municipioB: { nome: "Redução de tarifas", emoji: "🚢", cor: "from-green-600 to-slate-900" }, contexto: "Fim do protecionismo.", pecaCertaId: "ab", feedbackAcerto: "Correto. Abertura Comercial.", feedbackErro: "É Abertura Comercial." },
      { id: "r2", municipioA: { nome: "Plano Real (1994)", emoji: "💵", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Fim da hiperinflação", emoji: "📉", cor: "from-teal-600 to-slate-900" }, contexto: "Nova moeda.", pecaCertaId: "es", feedbackAcerto: "Correto. Estabilização Monetária.", feedbackErro: "É Estabilização Monetária." },
      { id: "r3", municipioA: { nome: "Mercosul (1991)", emoji: "🤝", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Bloco regional", emoji: "🌎", cor: "from-amber-600 to-slate-900" }, contexto: "Brasil, Argentina, Paraguai, Uruguai.", pecaCertaId: "in", feedbackAcerto: "Correto. Integração Regional.", feedbackErro: "É Integração Regional." },
      { id: "r4", municipioA: { nome: "OMC (1995)", emoji: "🌐", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Regras multilaterais", emoji: "📜", cor: "from-amber-600 to-slate-900" }, contexto: "Comércio mundial.", pecaCertaId: "in", feedbackAcerto: "Correto. Integração Regional/Multilateral.", feedbackErro: "É Integração Regional." },
      { id: "r5", municipioA: { nome: "Privatização da Vale (1997)", emoji: "🏭", cor: "from-green-700 to-slate-900" }, municipioB: { nome: "Venda de estatal", emoji: "💰", cor: "from-green-600 to-slate-900" }, contexto: "Menor papel do Estado.", pecaCertaId: "ab", feedbackAcerto: "Correto. Faz parte da Abertura Comercial/econômica.", feedbackErro: "É Abertura Comercial." },
      { id: "r6", municipioA: { nome: "Real estável", emoji: "💵", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Atrai investimento estrangeiro", emoji: "📊", cor: "from-teal-600 to-slate-900" }, contexto: "Confiança econômica.", pecaCertaId: "es", feedbackAcerto: "Correto. Estabilização Monetária.", feedbackErro: "É Estabilização Monetária." },
    ],
    falaFinal: "6 rodadas. Você já entende os pilares da globalização brasileira.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Como o Brasil se conecta ao mundo globalizado hoje.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgNyc,
    fatias: [
      { id: "com", rotulo: "Exportação de commodities (~55%)", emoji: "🌾", percentual: 55, cor: "#0f766e", descricao: "Mais da metade das exportações brasileiras são commodities como soja, minério de ferro e petróleo, evidenciando forte ligação com a demanda global, especialmente da China.", exemplos: ["Soja", "Minério de ferro", "Petróleo", "Carne bovina"] },
      { id: "ind", rotulo: "Produtos industrializados e serviços (~45%)", emoji: "🏭", percentual: 45, cor: "#b45309", descricao: "O restante vem de produtos industrializados (aviões, veículos) e serviços, mostrando que o Brasil também exporta tecnologia e conhecimento, ainda que em menor proporção.", exemplos: ["Aviões Embraer", "Veículos", "Serviços de TI", "Máquinas"] },
    ],
    falaFinal: "Commodities x indústria: o retrato da inserção global brasileira.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais para fechar a aula.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFavela,
    perguntas: [
      { id: "av1", pergunta: "O que o Plano Real (1994) resolveu?", opcoes: [{ id: "a", texto: "A hiperinflação brasileira.", correta: true }, { id: "b", texto: "A dívida externa da Argentina.", correta: false }, { id: "c", texto: "O fim do Mercosul.", correta: false }], feedbackAcerto: "Correto. Estabilizou a moeda e encerrou a hiperinflação.", feedbackErro: "É a hiperinflação, com a criação do Real." },
      { id: "av2", pergunta: "O Mercosul (1991) é formado inicialmente por:", opcoes: [{ id: "a", texto: "Brasil, Argentina, Paraguai e Uruguai.", correta: true }, { id: "b", texto: "Brasil, EUA e China.", correta: false }, { id: "c", texto: "Brasil, Portugal e Espanha.", correta: false }], feedbackAcerto: "Correto. Tratado de Assunção, 1991.", feedbackErro: "São os quatro fundadores sul-americanos." },
      { id: "av3", pergunta: "Uma consequência negativa da globalização para o Brasil foi:", opcoes: [{ id: "a", texto: "Vulnerabilidade a crises econômicas externas.", correta: true }, { id: "b", texto: "Fim total do comércio exterior.", correta: false }, { id: "c", texto: "Isolamento diplomático completo.", correta: false }], feedbackAcerto: "Correto. Crises como a asiática (1997) e a de 2008 afetaram diretamente a economia brasileira.", feedbackErro: "É a maior vulnerabilidade a crises externas." },
    ],
    selo: { nome: "Guardião da Globalização Brasileira", subtitulo: "Conclui a aula sobre o Brasil global", emoji: "🇧🇷", cor: "from-green-500 to-slate-900", fotoUrl: imgDig },
    falaFinal: "Aula concluída. O Brasil dos anos 1990 até hoje: aberto ao mundo, com seus desafios.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Guardião da Globalização Brasileira" },
};
