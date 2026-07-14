import type { AulaGeoV1 } from "../../types";
import { url as soja } from "@/assets/geografia-7ano/agronegocio-soja.jpg.asset.json";
import { url as itaipu } from "@/assets/geografia-7ano/itaipu-hidreletrica.jpg.asset.json";
import { url as porto } from "@/assets/geografia-7ano/porto-santos.jpg.asset.json";
import { url as industria } from "@/assets/geografia-7ano/industria-brasil.jpg.asset.json";
import { url as metropole } from "@/assets/geografia-7ano/metropole-sao-paulo.jpg.asset.json";
import { url as pampa } from "@/assets/geografia-7ano/pampa-agropecuaria.jpg.asset.json";
/**
 * Geografia · 7º Ano · Unidade 4 · Aula 01
 * "Complexo Centro-Sul" — BNCC EF07GE09, EF07GE10
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-complexo-centro-sul",
  titulo: "Complexo Centro-Sul",
  iconeTrilha: "🏙️",
  bncc: ["EF07GE09", "EF07GE10"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: metropole,
    imagemDestaqueUrl: metropole,
    aurora:
      "O COMPLEXO CENTRO-SUL (Sudeste + Sul + Centro-Oeste) tem 55% da população brasileira e 74% do PIB nacional. Aqui estão: as maiores indústrias (ABC paulista), o maior porto (Santos), a maior hidrelétrica (Itaipu), o maior agronegócio (soja em MT), a capital do país (Brasília). Uma região que sozinha seria a 15ª maior economia do mundo — maior que a Espanha ou o México inteiros. É o CORAÇÃO ECONÔMICO do Brasil, mas também concentra as maiores desigualdades urbanas.",
    falaFinal: "3 regiões, 74% do PIB. O motor do Brasil bate aqui.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta: por que a REGIÃO SUDESTE concentra tanta indústria e riqueza, mais que qualquer outra região do Brasil?",
    pergunta: "O que fez o Sudeste ser o líder econômico:",
    opcoes: [
      { id: "hist", titulo: "HISTÓRIA + café + industrialização", subtitulo: "acúmulo de capital do café virou fábrica", emoji: "☕", cor: "from-emerald-800 to-slate-950" },
      { id: "clima", titulo: "Só o CLIMA ameno", subtitulo: "faz mais frio, produz mais", emoji: "❄️", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "hist",
    feedbackAcerto:
      "Exato! O SUDESTE acumulou capital com o CAFÉ (séc. XIX). Esse dinheiro virou FÁBRICAS a partir de 1900. Getúlio e JK aceleraram. Hoje SP é a capital industrial do Hemisfério Sul.",
    feedbackErro:
      "Clima ajuda um pouco, mas não explica. O motivo é HISTÓRICO: café gerou capital, capital virou indústria, indústria puxou mais gente e mais dinheiro. Círculo virtuoso de 150 anos.",
    falaFinal: "Regra: capital atrai capital. Sudeste começou primeiro e nunca parou.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 pilares do Centro-Sul. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      { id: "abc", capa: "1. ABC paulista", emoji: "🏭", cor: "from-sky-800 to-slate-950",
        conteudo: "ABC PAULISTA é a região industrial formada por Santo André, São Bernardo e São Caetano. Coração da indústria automobilística brasileira desde os anos 50.",
        exemplo: "Curiosidade: em São Bernardo do Campo estão as fábricas da Volkswagen, Mercedes-Benz, Ford e Toyota. Foi lá que Lula (metalúrgico) começou sua carreira política nos anos 70, liderando greves históricas.",
        fotoUrl: industria },
      { id: "agro", capa: "2. Agronegócio", emoji: "🚜", cor: "from-amber-800 to-orange-950",
        conteudo: "AGRONEGÓCIO é o conjunto de atividades ligadas à produção agropecuária em GRANDE ESCALA — usa máquinas, insumos químicos, alta tecnologia. Mato Grosso é o maior produtor de SOJA do Brasil.",
        exemplo: "Curiosidade: o Brasil se tornou o MAIOR EXPORTADOR de soja do mundo em 2013 (superou os EUA). Uma colheitadeira moderna colhe em 1 dia o que 100 trabalhadores levariam 1 mês. Isso explica por que o campo emprega cada vez menos gente.",
        fotoUrl: soja },
      { id: "hidro", capa: "3. Hidrelétrica", emoji: "⚡", cor: "from-emerald-800 to-slate-950",
        conteudo: "HIDRELÉTRICA gera eletricidade a partir da FORÇA DA ÁGUA que desce e move turbinas. É a principal fonte de energia do Brasil (60% da matriz elétrica).",
        exemplo: "Curiosidade: ITAIPU (fronteira Brasil-Paraguai) é a 2ª maior hidrelétrica do mundo em potência instalada. Sozinha produz 15% de toda a eletricidade que o Brasil consome. Belo Monte (PA) é a 4ª maior do mundo.",
        fotoUrl: itaipu },
      { id: "porto", capa: "4. Porto de Santos", emoji: "🚢", cor: "from-slate-700 to-slate-950",
        conteudo: "PORTO DE SANTOS (SP) é o MAIOR porto da América Latina. Movimenta 30% de tudo o que o Brasil exporta e importa. Recebe navios de todo o mundo carregando soja, minério de ferro, veículos, contêineres.",
        exemplo: "Curiosidade: 1 em cada 4 contêineres de café do mundo passa pelo porto de Santos. É o principal escoamento do agronegócio do Centro-Oeste. Sem Santos, o Brasil não exporta.",
        fotoUrl: porto },
    ],
    falaFinal: "ABC, agronegócio, hidrelétrica, Santos. 4 pilares que fazem o Brasil funcionar.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é um POLO econômico do Centro-Sul. Toque em cada um pra ver a foto real e entender.",
    instrucao: "Toque nos 4 cards pra ouvir cada polo",
    mapaUrl: metropole,
    pontos: [
      { id: "sp", x: 20, y: 30, emoji: "🏙️", cor: "from-slate-700 to-slate-950",
        titulo: "SÃO PAULO — Metrópole global",
        texto: "12 milhões de habitantes (município), 22 milhões na região metropolitana. Sede das principais empresas brasileiras. Bolsa de valores. Sozinha responde por 12% do PIB nacional.",
        fotoUrl: metropole },
      { id: "abc", x: 55, y: 45, emoji: "🏭", cor: "from-sky-800 to-slate-950",
        titulo: "ABC PAULISTA — Coração industrial",
        texto: "Santo André, São Bernardo, São Caetano. Volkswagen, Mercedes, Ford, Toyota. Produção de veículos, aço, químicos. Berço do sindicalismo brasileiro moderno.",
        fotoUrl: industria },
      { id: "cerrado", x: 45, y: 60, emoji: "🌾", cor: "from-amber-800 to-orange-950",
        titulo: "CERRADO PRODUTIVO — MT/GO",
        texto: "Maior produtor de SOJA e MILHO do Brasil. Fazendas de 10.000 hectares. Mecanização total. Exporta pra China principalmente. Motor do agronegócio nacional.",
        fotoUrl: soja },
      { id: "itaipu", x: 70, y: 75, emoji: "⚡", cor: "from-emerald-800 to-slate-950",
        titulo: "ITAIPU — Fronteira Brasil/Paraguai",
        texto: "2ª maior hidrelétrica do mundo. 14.000 MW instalados. Custou 20 bilhões de dólares nos anos 70-80. Produz 15% da eletricidade brasileira.",
        fotoUrl: itaipu },
    ],
    falaFinal: "4 polos, 1 região. Sudeste + Sul + Centro-Oeste = motor do Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de economista pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "% do PIB brasileiro concentrado no Centro-Sul (SE+S+CO):",
        fotoUrl: metropole,
        cards: [
          { id: "a", emoji: "📊", titulo: "74% do PIB", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💰", titulo: "30% do PIB", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "🌎", titulo: "50% do PIB", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 74% do PIB nacional no Centro-Sul.",
        feedbackErro: "Bem mais alto: 74% do PIB brasileiro está concentrado no Centro-Sul." },
      { id: "q2", pergunta: "Maior polo automobilístico do Brasil fica em:",
        fotoUrl: industria,
        cards: [
          { id: "a", emoji: "🚗", titulo: "ABC paulista", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌊", titulo: "Salvador (BA)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌴", titulo: "Manaus (AM)", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! ABC paulista concentra Volkswagen, Mercedes, Ford, Toyota.",
        feedbackErro: "Manaus é eletrônicos. Salvador é petroquímico. Automóveis = ABC PAULISTA." },
      { id: "q3", pergunta: "Estado brasileiro que mais produz SOJA:",
        fotoUrl: soja,
        cards: [
          { id: "a", emoji: "🌾", titulo: "Mato Grosso (MT)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌊", titulo: "Rio de Janeiro (RJ)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌵", titulo: "Ceará (CE)", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! MATO GROSSO — 30% da soja brasileira. Fazendas gigantes no Cerrado.",
        feedbackErro: "RJ é serviços. CE é semiárido. Soja é MATO GROSSO — 30% da produção nacional." },
      { id: "q4", pergunta: "ITAIPU está no rio Paraná e é a:",
        fotoUrl: itaipu,
        cards: [
          { id: "a", emoji: "⚡", titulo: "2ª maior hidrelétrica do mundo", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏭", titulo: "Maior refinaria de petróleo", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "🌉", titulo: "Maior ponte do Brasil", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 2ª MAIOR hidrelétrica do mundo. 15% da eletricidade brasileira.",
        feedbackErro: "Refinaria é Replan (SP). Ponte é Rio-Niterói. ITAIPU é HIDRELÉTRICA." },
    ],
    falaFinal: "4 acertos = economista em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Centro-Sul é formado por 3 regiões brasileiras juntas: Sudeste, Sul e Centro-Oeste. Marque os 3 estados MAIS ricos (maior PIB) do Brasil.",
    instrucao: "Acenda os 3 estados mais ricos",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG"],
      pergunta: "Quais estados têm o maior PIB do Brasil?",
    },
    falaFinal:
      "SP, RJ, MG. Só esses 3 estados concentram 53% do PIB brasileiro. Um oceano de riqueza + desigualdade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um grão de SOJA sai da fazenda em MT e chega no navio em Santos?",
    instrucao: "Toque na ordem",
    pergunta: "Do MT ao mundo:",
    paradas: [
      { id: "1", emoji: "🌱", rotulo: "1. Plantação em MT",
        descricao: "Fazenda no Cerrado planta soja. 3 meses depois, colheitadeiras entram.", fotoUrl: soja },
      { id: "2", emoji: "🚛", rotulo: "2. Transporte por caminhão",
        descricao: "Grão vai por rodovia (BR-163) até armazém. Custa caro, estrada ruim." },
      { id: "3", emoji: "🚂", rotulo: "3. Ferrovia ou rodovia longa",
        descricao: "Se possível, embarca em trem. Se não, mais 2.000 km de caminhão." },
      { id: "4", emoji: "🚢", rotulo: "4. Porto de Santos",
        descricao: "Chega ao maior porto da América Latina. Contêineres empilhados.", fotoUrl: porto },
      { id: "5", emoji: "🇨🇳", rotulo: "5. Navegam até a China",
        descricao: "40 dias de navegação. China compra 70% da soja brasileira exportada." },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Perfeito! Grão do Cerrado alimentando o outro lado do planeta.",
    feedbackErro: "Comece na plantação. Depois transporte, porto, navio, destino.",
    falaFinal: "5 etapas. Do Cerrado à mesa da China. Brasil como celeiro global.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 4 — Complexo Centro-Sul",
    paragrafos: [
      { id: "p1",
        texto: "O COMPLEXO CENTRO-SUL concentra 74% do PIB do Brasil. Reúne o SUDESTE (industrial), o SUL (industrial + agropecuário) e o CENTRO-OESTE (agronegócio).",
        chaves: ["COMPLEXO CENTRO-SUL", "SUDESTE", "CENTRO-OESTE"],
        definicoes: {
          "COMPLEXO CENTRO-SUL": "Grande região econômica formada por Sudeste + Sul + Centro-Oeste. Responde por 74% do PIB do Brasil.",
          "SUDESTE": "Região mais industrializada (SP, RJ, MG, ES). Concentra 42% da população brasileira e 53% do PIB.",
          "CENTRO-OESTE": "Região do agronegócio (MT, MS, GO, DF). Maior produtor de soja, milho e gado do país.",
        },
        fotoUrl: metropole,
      },
      { id: "p2",
        texto: "O ABC PAULISTA é o coração da INDÚSTRIA AUTOMOBILÍSTICA brasileira desde os anos 50. Santo André, São Bernardo e São Caetano concentram fábricas de Volkswagen, Mercedes e Ford.",
        chaves: ["ABC PAULISTA", "INDÚSTRIA AUTOMOBILÍSTICA"],
        definicoes: {
          "ABC PAULISTA": "Trio de cidades da Grande São Paulo (Santo André, São Bernardo, São Caetano). Berço industrial.",
          "INDÚSTRIA AUTOMOBILÍSTICA": "Fabricação de veículos. Setor que emprega 1,3 milhão de brasileiros direta e indiretamente.",
        },
        fotoUrl: industria,
      },
      { id: "p3",
        texto: "O AGRONEGÓCIO do CERRADO tornou o Brasil o maior exportador de SOJA do mundo. Mato Grosso lidera com 30% da produção.",
        chaves: ["AGRONEGÓCIO", "CERRADO", "SOJA"],
        definicoes: {
          "AGRONEGÓCIO": "Cadeia produtiva do campo — do plantio à exportação. Responde por 25% do PIB brasileiro.",
          "CERRADO": "Savana brasileira que se tornou o celeiro do país após aplicação de calcário no solo (nos anos 70).",
          "SOJA": "Grão principal do agronegócio. Brasil exporta 70% pra China (ração de porco e boi).",
        },
        fotoUrl: soja,
      },
      { id: "p4",
        texto: "ITAIPU é a 2ª maior HIDRELÉTRICA do mundo em potência. Junto com Belo Monte (4ª maior), o Brasil tem uma matriz elétrica 60% BASEADA em água.",
        chaves: ["ITAIPU", "HIDRELÉTRICA", "MATRIZ ELÉTRICA"],
        definicoes: {
          "ITAIPU": "Usina binacional Brasil-Paraguai no rio Paraná. 14.000 MW instalados. Custou 20 bilhões de dólares.",
          "HIDRELÉTRICA": "Usina que gera energia elétrica a partir da força da água em queda. Renovável e limpa.",
          "MATRIZ ELÉTRICA": "Combinação de fontes que geram eletricidade em um país. Brasil: 60% hidrelétrica, 12% eólica.",
        },
        fotoUrl: itaipu,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "abc", emoji: "", titulo: "ABC paulista", cor: "from-slate-800 to-slate-900" },
      { id: "cerrado", emoji: "", titulo: "Agronegócio do Cerrado", cor: "from-slate-800 to-slate-900" },
      { id: "itaipu", emoji: "", titulo: "Itaipu", cor: "from-slate-800 to-slate-900" },
      { id: "santos", emoji: "", titulo: "Porto de Santos", cor: "from-slate-800 to-slate-900" },
      { id: "pampa", emoji: "", titulo: "Pampas gaúchos", cor: "from-slate-800 to-slate-900" },
      { id: "sp", emoji: "", titulo: "Metrópole SP", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o polo do Centro-Sul correto.",
      instrucao: "Escolha o polo correto",
      perguntas: [
        { id: "r1", pergunta: "Trio de cidades paulistas que concentra a indústria automobilística brasileira desde os anos 50.", cards, correta: "abc",
          feedbackAcerto: "Isso. Santo André + São Bernardo + São Caetano = ABC PAULISTA.", feedbackErro: "É o ABC PAULISTA. Volkswagen chegou em 1953." },
        { id: "r2", pergunta: "Região do Centro-Oeste onde estão as maiores fazendas de soja e milho do Brasil.", cards, correta: "cerrado",
          feedbackAcerto: "Isso. Fazendas gigantes de grãos = AGRONEGÓCIO DO CERRADO.", feedbackErro: "É o AGRONEGÓCIO DO CERRADO. MT lidera com 30% da soja nacional." },
        { id: "r3", pergunta: "Usina hidrelétrica na fronteira Brasil-Paraguai, 2ª maior do mundo, no rio Paraná.", cards, correta: "itaipu",
          feedbackAcerto: "Isso. Rio Paraná, binacional = ITAIPU.", feedbackErro: "É ITAIPU. Sozinha gera 15% da eletricidade brasileira." },
        { id: "r4", pergunta: "Maior porto da América Latina, escoa 30% do comércio exterior brasileiro.", cards, correta: "santos",
          feedbackAcerto: "Isso. Maior porto da AL = PORTO DE SANTOS.", feedbackErro: "É o PORTO DE SANTOS. Escoa soja, minério, café." },
        { id: "r5", pergunta: "Região sul do RS com campos abertos, gado de corte e cultura do gaúcho.", cards, correta: "pampa",
          feedbackAcerto: "Isso. Campos gaúchos com gado = PAMPAS.", feedbackErro: "São os PAMPAS. Berço do churrasco e do chimarrão." },
        { id: "r6", pergunta: "Maior aglomerado urbano do Hemisfério Sul, 22 milhões de habitantes na região metropolitana.", cards, correta: "sp",
          feedbackAcerto: "Isso. Maior metrópole = SÃO PAULO.", feedbackErro: "É a METRÓPOLE SP. 22 milhões na região metropolitana." },
      ],
      falaFinal: "6 perguntas, 6 polos. Geógrafo econômico do Centro-Sul formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do PIB brasileiro por macrorregião (2023).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "cs", rotulo: "Centro-Sul (74%)", emoji: "🏙️", percentual: 74, cor: "#0284c7",
        descricao: "Sudeste + Sul + Centro-Oeste. Indústria, agronegócio, serviços, hidrelétricas.",
        exemplos: ["🏭 SP", "🚜 MT", "⚡ Itaipu"] },
      { id: "nne", rotulo: "Norte + Nordeste (26%)", emoji: "🌴", percentual: 26, cor: "#d97706",
        descricao: "9 estados nordestinos + 7 estados amazônicos. Mais população, menos PIB per capita.",
        exemplos: ["🌵 NE", "🌳 Amazônia", "🏖️ Turismo"] },
    ],
    falaFinal: "3 regiões concentram 74% da economia. 2 regiões dividem os outros 26%. Desigualdade regional real.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Economista do Centro-Sul.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Maior polo automobilístico do Brasil:",
        opcoes: [
          { id: "a", texto: "ABC paulista", correta: true },
          { id: "b", texto: "Manaus", correta: false },
          { id: "c", texto: "Salvador", correta: false },
        ],
        feedbackAcerto: "Isso! ABC PAULISTA. Volkswagen, Mercedes, Ford, Toyota.",
        feedbackErro: "Manaus é eletrônicos, Salvador é petroquímico. Automóveis é ABC." },
      { id: "av2", pergunta: "Estado brasileiro líder em produção de soja:",
        opcoes: [
          { id: "a", texto: "Mato Grosso", correta: true },
          { id: "b", texto: "São Paulo", correta: false },
          { id: "c", texto: "Amazonas", correta: false },
        ],
        feedbackAcerto: "Isso! MT lidera com 30% da soja brasileira.",
        feedbackErro: "SP é industrial. AM é floresta. Soja é MATO GROSSO." },
      { id: "av3", pergunta: "Itaipu é a:",
        opcoes: [
          { id: "a", texto: "2ª maior hidrelétrica do mundo", correta: true },
          { id: "b", texto: "Maior refinaria da América", correta: false },
          { id: "c", texto: "Maior ponte da América Latina", correta: false },
        ],
        feedbackAcerto: "Isso! 2ª MAIOR hidrelétrica do mundo em potência.",
        feedbackErro: "É HIDRELÉTRICA. 2ª maior do mundo, no rio Paraná." },
    ],
    selo: { nome: "Economista do Centro-Sul", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🏙️", cor: "from-sky-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você mapeou o coração econômico do Brasil.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Economista do Centro-Sul" },
};
// pampa asset referenced for completeness in the region context
export const _assets = { pampa };
