/**
 * Geografia 6º Ano — Banco acadêmico Fund. 2 Avançado.
 * Textos densos, conceitos formais, desafio estilo ENEM.
 * Zero mascotes. Consumido pelo PlayerGeoV2 (Dashboard Científico).
 */

export type EtapaTeorica = {
  titulo: string;
  texto: string;
  /** Chave da mini animação embutida no card do passo. */
  visual?: "rotacao" | "translacao" | "inclinacao" | "piao" | "latitude" | "longitude" | "projecoes";
  /** Exemplo real do dia-a-dia que materializa o conceito. */
  exemplo_real?: string;
  /** Casos reais extras (idealmente 2) para dar profundidade à etapa. */
  exemplos_extras?: string[];
};

export type RoteiroVisual = {
  foco: string;
  descricao: string;
  legenda: string;
  tipo?: "terra-orbita" | "globo-coordenadas" | "generico";
};

export type QuizItem = {
  pergunta: string;
  opcoes: Array<{ texto: string; correta: boolean; explicacao: string }>;
};

export type MiniJogoCategorizar = {
  tipo: "categorizar";
  instrucao: string;
  categorias: Array<{ id: string; titulo: string; cor: "cyan" | "amber" | "emerald" | "violet" }>;
  cartoes: Array<{ texto: string; categoriaId: string }>;
};

export type UnidadeFund2 = {
  unidade: number;
  slug: string;
  titulo: string;
  habilidade: string;
  introducao_academica: string;
  conteudo_pedagogico: {
    conceito_chave: string;
    texto_teorico: string;
    exemplo_visual: string;
    imagem_analise: string;
    etapas_teoricas?: EtapaTeorica[];
    roteiro_visual_interativo?: RoteiroVisual;
    exemplo_pratico_visual?: string;
  };
  /** Quiz rápido — 3 perguntas com feedback explicativo por alternativa. */
  quiz_relampago?: QuizItem[];
  /** Mini-jogo conceitual da unidade. */
  mini_jogo?: MiniJogoCategorizar;
  desafio_critico: {
    pergunta: string;
    opcoes: Array<{ texto: string; correta: boolean }>;
    explicacao_professor: string;
  };
  recompensas: { xp: number; moedas: number; titulo: string };
};


export const UNIDADES_6ANO: UnidadeFund2[] = [
  {
    unidade: 1,
    slug: "unidade-1-terra-no-espaco",
    titulo: "A Terra no Espaço: Movimentos e Estações do Ano",
    habilidade: "EF06GE03",
    introducao_academica:
      "Você já reparou que em algumas épocas do ano o dia amanhece mais cedo ou o inverno parece congelar a cidade? Isso não acontece por acaso. A Terra não está parada no espaço: ela gira, inclina-se e viaja ao redor do Sol. Vamos entender passo a passo como esses movimentos criam o ritmo da vida no nosso planeta.",
    conteudo_pedagogico: {
      conceito_chave: "Rotação, Translação e a Inclinação da Terra",
      texto_teorico:
        "Para entender a Geografia, imagine a Terra como um pião que gira meio 'deitado'. São três movimentos que, juntos, criam o dia, a noite e as estações do ano.",
      etapas_teoricas: [
        {
          titulo: "Movimento de Rotação — o giro do pião",
          texto:
            "A Terra gira em torno de si mesma como um pião. Esse giro demora cerca de 24 horas: enquanto um lado está de frente para o Sol (Dia), o outro está no escuro (Noite). Esse movimento também cria uma força invisível chamada Efeito de Coriolis, que desvia correntes de ar e ventos.",
          visual: "rotacao",
          exemplo_real:
            "Quando é meio-dia em Brasília (Brasil), em Tóquio (Japão) é meia-noite — Tóquio está no lado escuro da Terra. Por isso pessoas do outro lado do mundo trocam dia por noite: quando aqui amanhece, lá está anoitecendo.",
        },
        {
          titulo: "Movimento de Translação — a grande viagem",
          texto:
            "Ao mesmo tempo em que gira sobre si, a Terra viaja ao redor do Sol. Essa viagem demora 365 dias e 6 horas — é o que chamamos de um ano.",
          visual: "translacao",
          exemplo_real:
            "Aquelas 6 horas extras se acumulam: a cada 4 anos elas somam 24 horas = 1 dia inteiro. Por isso existe o ano bissexto (2020, 2024, 2028…), em que fevereiro ganha o dia 29 pra encaixar a viagem certinha.",
        },
        {
          titulo: "Inclinação do Eixo — o segredo das estações",
          texto:
            "O planeta não gira 'em pé': o eixo é inclinado em 23°27'. Por causa disso, enquanto a Terra viaja ao redor do Sol, um hemisfério recebe mais luz e calor diretamente do que o outro — e é isso que dá origem às quatro estações do ano.",
          visual: "inclinacao",
          exemplo_real:
            "Quando é Natal (dezembro) no Brasil, é verão — praia, calor, dias longos. No mesmo Natal em Nova York é inverno — neve, frio, dias curtos. A festa é a mesma, mas a estação é oposta por causa da inclinação da Terra.",
        },
      ],

      roteiro_visual_interativo: {
        foco: "Simulador da Terra em órbita",
        descricao:
          "Explore os três movimentos em abas: veja o giro que separa Dia e Noite, a viagem anual ao redor do Sol e como a inclinação faz os hemisférios receberem mais ou menos calor.",
        legenda:
          "Observe: a inclinação faz os raios solares baterem com mais força no Hemisfério Sul em dezembro (Verão) e no Hemisfério Norte em junho (Inverno para nós).",
        tipo: "terra-orbita",
      },
      exemplo_pratico_visual:
        "Segure uma lanterna (Sol) apontada para uma bola de futebol (Terra). Se você inclinar a bola para a frente, a parte de cima recebe muito mais luz do que a de baixo. É exatamente isso que acontece entre o Solstício (máxima desigualdade de luz, início do Verão ou Inverno) e o Equinócio (luz igual nos dois lados, início da Primavera ou Outono).",
      exemplo_visual:
        "Solstícios e Equinócios: a inclinação constante do eixo distribui a luz solar de forma diferente em cada época do ano.",
      imagem_analise: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200",
    },

    desafio_critico: {
      pergunta:
        "Imagine que cientistas descobriram um novo planeta idêntico à Terra, mas com uma única diferença: o seu eixo de rotação é perfeitamente reto (vertical, sem nenhuma inclinação). Se você fosse morar nesse planeta, o que aconteceria com o clima ao longo do ano?",
      opcoes: [
        {
          texto:
            "As estações do ano deixariam de existir, e todas as cidades teriam exatamente o mesmo clima e a mesma quantidade de luz do sol de janeiro a dezembro.",
          correta: true,
        },
        {
          texto:
            "O planeta congelaria por completo porque a falta de inclinação impediria a luz do Sol de chegar até a Linha do Equador.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise! Se o eixo da Terra fosse perfeitamente reto, os raios solares atingiriam os mesmos lugares com a mesma força o ano inteiro. Sem variação de luz e calor ao longo dos meses, as estações do ano (Primavera, Verão, Outono e Inverno) simplesmente deixariam de existir.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Explorador das Dinâmicas Planetárias" },
  },

  {
    unidade: 2,
    slug: "unidade-2-cartografia-avancada",
    titulo: "Cartografia e Coordenadas Geográficas",
    habilidade: "EF06GE01 / EF06GE02",
    introducao_academica:
      "Como o GPS do celular sabe exatamente onde você está no planeta? Como um piloto de avião cruza um oceano inteiro sem se perder? A resposta está em uma rede invisível de linhas matemáticas que envolve a Terra. Vamos decifrar, passo a passo, como a Cartografia transforma um planeta redondo em um endereço preciso.",
    conteudo_pedagogico: {
      conceito_chave: "Paralelos, Meridianos e Projeções Cartográficas",
      texto_teorico:
        "Imagine que a Terra é uma laranja e alguém desenhou nela uma malha de linhas: umas horizontais (paralelos) e outras verticais (meridianos). Cruzando essas duas famílias de linhas, qualquer ponto do planeta ganha um endereço único — a coordenada geográfica.",
      etapas_teoricas: [
        {
          titulo: "Paralelos & Latitude — o endereço Norte-Sul",
          texto:
            "Os Paralelos são círculos horizontais que envolvem a Terra. O maior deles é a Linha do Equador (0°), que divide o planeta em Hemisfério Norte e Hemisfério Sul. A distância angular de um ponto até o Equador chama-se Latitude e vai de 0° a 90° — para o Norte (N) ou para o Sul (S).",
          visual: "latitude",
          exemplo_real:
            "Manaus (AM) fica na latitude ~3° S: pertinho do Equador, por isso é quente e úmido o ano inteiro. Já Porto Alegre (RS) está a ~30° S: mais longe do Equador, tem inverno frio de verdade. A latitude explica boa parte do clima de uma cidade.",
        },
        {
          titulo: "Meridianos & Longitude — o endereço Leste-Oeste",
          texto:
            "Os Meridianos são semicírculos verticais que vão de polo a polo. O Meridiano de Greenwich (0°), na Inglaterra, é o marco zero mundial. A distância angular até Greenwich chama-se Longitude e vai de 0° a 180° — para o Leste (L) ou para o Oeste (O). É a longitude que define os fusos horários.",
          visual: "longitude",
          exemplo_real:
            "Brasília está em ~47° O e Tóquio em ~139° L — separadas por quase 180° de longitude. Por isso, quando é meio-dia aqui, já é a madrugada seguinte no Japão: cada 15° de longitude ≈ 1 hora de fuso.",
        },
        {
          titulo: "Projeções Cartográficas — planificando o planeta",
          texto:
            "A Terra é redonda, mas os mapas são planos. Toda vez que 'esticamos' a esfera para caber em uma folha, alguma coisa se deforma: ou as formas dos continentes, ou o tamanho real das áreas. Cada projeção resolve isso de um jeito diferente e revela uma visão política do mundo.",
          visual: "projecoes",
          exemplo_real:
            "Na Projeção de Mercator (a mais famosa), a Groenlândia parece maior que a África — mas a África real é 14× maior! Já a Projeção de Peters mostra os continentes com áreas proporcionais corretas, valorizando países tropicais. Não existe mapa 'neutro' — todo mapa é uma escolha.",
        },
      ],
      roteiro_visual_interativo: {
        foco: "Simulador do globo com coordenadas",
        descricao:
          "Explore em três abas a rede que localiza tudo no planeta: os paralelos horizontais da Latitude, os meridianos verticais da Longitude e a comparação lado a lado entre as projeções de Mercator e Peters.",
        legenda:
          "Observe: a Linha do Equador (dourada) é o zero da latitude, e o Meridiano de Greenwich (dourado) é o zero da longitude. Juntos, eles dão a origem do sistema de coordenadas terrestre.",
        tipo: "globo-coordenadas",
      },
      exemplo_pratico_visual:
        "Abra o Google Maps e clique com o botão direito em qualquer ponto: aparecem dois números, tipo '-23.5505, -46.6333'. O primeiro é a Latitude (23,5° Sul → Hemisfério Sul), o segundo é a Longitude (46,6° Oeste → a oeste de Greenwich). Esse é o endereço matemático da Praça da Sé, em São Paulo. Todo GPS do mundo entende essa linguagem — não importa o idioma, o país ou o fuso.",
      exemplo_visual:
        "Comparação entre a Projeção de Mercator (preserva as formas mas distorce as áreas, expandindo as regiões polares) e a Projeção de Peters (preserva a proporção das áreas mas achata os contornos).",
      imagem_analise: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200",
    },
    desafio_critico: {
      pergunta:
        "Um avião decola de Tóquio (Japão, ~35°N / 139°L) rumo a Buenos Aires (Argentina, ~34°S / 58°O). Durante o voo, o piloto muda de hemisfério tanto na Latitude quanto na Longitude. Qual afirmação explica corretamente essa mudança dupla?",
      opcoes: [
        {
          texto:
            "O avião atravessa a Linha do Equador (mudando de Hemisfério Norte para Sul na Latitude) e cruza um meridiano oposto ao de Greenwich (mudando de Hemisfério Leste para Oeste na Longitude).",
          correta: true,
        },
        {
          texto:
            "A mudança acontece porque a Projeção de Mercator distorce as coordenadas quando o avião voa em grande altitude, invertendo automaticamente os hemisférios.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Perfeito! Latitude e Longitude são sistemas independentes. Tóquio está a Norte do Equador e a Leste de Greenwich; Buenos Aires está a Sul do Equador e a Oeste de Greenwich. Para ir de uma à outra, o avião cruza os dois marcos zero — Equador (latitude 0°) e o anti-meridiano na linha internacional de data (longitude ±180°). Projeção cartográfica é apenas a forma de desenhar o mapa; não interfere na posição real do avião.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Cartógrafo das Coordenadas Universais" },
  },

  {
    unidade: 3,
    slug: "unidade-3-tectonica-de-placas",
    titulo: "Geodinâmica Interna e Tectônica de Placas",
    habilidade: "EF06GE05 / EF06GE06",
    introducao_academica:
      "A litosfera terrestre é uma camada dinâmica e fragmentada. Investigaremos a teoria da Tectônica de Placas, impulsionada pelas correntes de convecção do manto, e suas manifestações na superfície através de abalos sísmicos e vulcanismo.",
    conteudo_pedagogico: {
      conceito_chave: "Limites de Placas e Ciclo das Rochas",
      texto_teorico:
        "A crosta terrestre está dividida em placas tectônicas que flutuam sobre a astenosfera. Os limites entre essas placas podem ser: Divergentes (afastamento, com criação de nova crosta nas dorsais oceânicas), Convergentes (colisão, gerando subducção e dobramentos modernos como a Cordilheira do Himalaia) ou Transformantes (deslocamento lateral, como a Falha de San Andreas). O calor e a pressão gerados por essa dinâmica transformam rochas magmáticas e sedimentares em rochas metamórficas.",
      exemplo_visual:
        "O mecanismo de subducção, onde uma placa oceânica mais densa mergulha sob uma placa continental, fundindo a rocha em magma e gerando fossas oceânicas profundas e arcos vulcânicos.",
      imagem_analise: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1200",
    },
    desafio_critico: {
      pergunta:
        "A ausência de cadeias montanhosas de dobramentos modernos (como os Andes) e de vulcanismo ativo no território brasileiro é explicada cientificamente por qual característica geológica?",
      opcoes: [
        {
          texto:
            "A localização do Brasil no interior estável da Placa Sul-Americana, sobre um embasamento cristalino antigo e desgastado por processos erosivos.",
          correta: true,
        },
        {
          texto:
            "A profundidade excessiva do manto sob o continente sul-americano, que impede a ascensão do magma.",
          correta: false,
        },
      ],
      explicacao_professor:
        "O Brasil está posicionado no centro da Placa Sul-Americana. Os grandes terremotos e vulcões ocorrem nas bordas de choque (como a borda oeste da América do Sul). Nosso relevo é geologicamente antigo e estabilizado.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Especialista em Geodinâmica Litosférica" },
  },
  {
    unidade: 4,
    slug: "unidade-4-modelagem-do-relevo",
    titulo: "Geodinâmica Externa e Modelagem do Relevo",
    habilidade: "EF06GE04",
    introducao_academica:
      "Se as forças internas erguem as estruturas do relevo, as forças externas esculpem e desgastam a paisagem. Analisaremos o ciclo do intemperismo, da erosão e da sedimentação na transformação contínua do espaço geográfico.",
    conteudo_pedagogico: {
      conceito_chave: "Intemperismo, Erosão e Antropização",
      texto_teorico:
        "O relevo é o resultado do embate entre agentes endógenos (internos) e exógenos (externos). Os agentes exógenos atuam através do Intemperismo (químico, pela ação da água que dissolve os minerais; ou físico, pela variação de temperatura que fragmenta a rocha). A erosão é o processo de desgaste e transporte desse material sedimentar, que se acumula nas bacias sedimentares (deposição). Atualmente, a ação humana (antropização) atua como um agente erosivo acelerado através de desmatamentos e terraplenagens.",
      exemplo_visual:
        "A formação de voçorocas (grandes fendas no solo) decorrente do desmatamento da vegetação nativa, deixando o solo desprotegido contra o impacto direto das águas pluviais.",
      imagem_analise: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200",
    },
    desafio_critico: {
      pergunta:
        "Em encostas de morros urbanos, a retirada da cobertura vegetal original para a construção de moradias informais frequentemente resulta em desmoronamentos durante o período de chuvas intensas. Esse desastre socioambiental é provocado por:",
      opcoes: [
        {
          texto:
            "A perda da fixação mecânica das raízes e o aumento da infiltração de água no solo, que satura e perde a coesão, deslizando pela gravidade.",
          correta: true,
        },
        {
          texto: "O aumento do intemperismo físico provocado pelas sombras das casas erguidas na encosta.",
          correta: false,
        },
      ],
      explicacao_professor:
        "A vegetação amortece a chuva e suas raízes estruturam o solo. Sem ela, o solo fica exposto, absorve água até o limite e o peso faz a encosta ceder. É um clássico exemplo de impacto da ação humana acelerando processos naturais.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Pesquisador de Dinâmicas Geomorfológicas" },
  },
  {
    unidade: 5,
    slug: "unidade-5-dinamica-atmosferica",
    titulo: "Dinâmica Atmosférica e Circulação Global",
    habilidade: "EF06GE03 / EF06GE05",
    introducao_academica:
      "A atmosfera é uma camada de gases fluida regulada por variações de pressão, temperatura e umidade. Compreender o funcionamento do tempo meteorológico e a classificação dos climas mundiais pressupõe o estudo dos fatores e elementos climáticos em escala global.",
    conteudo_pedagogico: {
      conceito_chave: "Elementos Climáticos vs Fatores Climáticos",
      texto_teorico:
        "Elementos climáticos são as grandezas da atmosfera: temperatura, umidade e pressão atmosférica. Fatores climáticos são as condições que modificam esses elementos, como Latitude (quanto maior a latitude, menor a temperatura), Altitude (quanto mais alto, mais rarefeito e frio é o ar), Maritimidade/Continentalidade e as Massas de Ar. A circulação geral da atmosfera é movida pelo deslocamento do ar das zonas de alta pressão (frias/polares) para as zonas de baixa pressão (quentes/equatoriais), gerando os ventos e as células climáticas.",
      exemplo_visual:
        "O efeito da Continentalidade versus Maritimidade: cidades no interior do continente apresentam alta amplitude térmica (grande diferença entre a temperatura máxima e mínima do dia) devido à baixa retenção de calor pelo solo seco.",
      imagem_analise: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200",
    },
    desafio_critico: {
      pergunta:
        "Duas cidades localizadas exatamente na mesma latitude e no mesmo hemisfério apresentam médias térmicas anuais completamente distintas, sendo uma delas muito mais fria e úmida que a outra. Qual fator geográfico justifica isoladamente essa disparidade?",
      opcoes: [
        {
          texto:
            "A diferença de altitude entre as duas cidades, visto que o gradiente térmico reduz a temperatura à medida que a altitude aumenta.",
          correta: true,
        },
        {
          texto: "O movimento de rotação da Terra, que afeta as cidades de forma desigual com base na longitude.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Se a latitude é idêntica, a variação térmica deve-se a fatores locais. A altitude altera a pressão e a temperatura: a cada 1000 metros de subida, a temperatura cai cerca de 6°C.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Especialista em Climatologia Global" },
  },
  {
    unidade: 6,
    slug: "unidade-6-paisagens-climatobotanicas",
    titulo: "Grandes Paisagens Climatobotânicas Mundiais",
    habilidade: "EF06GE06 / EF06GE07",
    introducao_academica:
      "Os biomas terrestres não estão distribuídos ao acaso; eles representam a resposta da biosfera às condições de clima, solo e relevo. Mapearemos os ecossistemas globais e os severos impactos da fronteira técnico-econômica sobre essas coberturas vegetais.",
    conteudo_pedagogico: {
      conceito_chave: "Biomas, Domínios Morfoclimáticos e Pegada Ecológica",
      texto_teorico:
        "A vegetação é o elemento visual que melhor reflete as características de um clima. Regiões equatoriais abrigam florestas latifoliadas e perenifólias (como a Amazônia), com alta biodiversidade. Zonas temperadas apresentam florestas decíduas (que perdem as folhas no inverno). Regiões polares possuem a Tundra, ecossistema rasteiro que vegeta apenas no curto degelo. A exploração predatória desses biomas para mineração, agricultura e expansão urbana reduz os serviços ecossistêmicos essenciais e acelera a perda de nichos ecológicos.",
      exemplo_visual:
        "A desertificação induzida em áreas periféricas de biomas frágeis, provocada pela superpastagem e técnicas agrícolas incorretas de manejo do solo.",
      imagem_analise: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200",
    },
    desafio_critico: {
      pergunta:
        "A vegetação do tipo Tundra, composta majoritariamente por musgos e liquens, apresenta um ciclo de vida extremamente curto e ausência de árvores de grande porte. Esse perfil botânico é uma adaptação direta a qual limitação ambiental?",
      opcoes: [
        {
          texto:
            "O clima polar, caracterizado por solos congelados (permafrost) a maior parte do ano e escassez de radiação solar intensa.",
          correta: true,
        },
        {
          texto:
            "A altíssima acidez provocada pelo excesso de chuvas torrenciais nas zonas de baixa pressão atmosférica.",
          correta: false,
        },
      ],
      explicacao_professor:
        "No clima polar, as raízes não conseguem penetrar no solo congelado (permafrost). A vegetação só prospera na superfície durante as poucas semanas de verão, quando ocorre o degelo superficial.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Cientista de Sistemas Ecológicos" },
  },
  {
    unidade: 7,
    slug: "unidade-7-analise-integradora",
    titulo: "Análise Integradora das Ciências Geográficas",
    habilidade: "Consolidação Geral",
    introducao_academica:
      "A consolidação do conhecimento no 6º ano exige uma abordagem holística. A Geografia unifica os fenômenos físicos da Terra (astronomia, geologia, geomorfologia e climatologia) às ações da sociedade civil, capacitando o estudante a compreender o espaço geográfico como um produto social e natural integrado.",
    conteudo_pedagogico: {
      conceito_chave: "Espaço Geográfico e Análise de Sistemas Socioambientais",
      texto_teorico:
        "O espaço geográfico é a natureza modificada pelo trabalho humano através da técnica. Não há como isolar o estudo de um rio ou de uma montanha das atividades econômicas que ocorrem no seu entorno. O domínio das geotecnologias, a capacidade de interpretar gráficos de balanço hídrico e a análise crítica das dinâmicas ambientais são as competências necessárias para mitigar os impactos da crise ecológica global do Antropoceno.",
      exemplo_visual:
        "A cartografia digital moderna sobrepondo mapas de relevo, adensamento urbano e áreas de preservação permanente para o planejamento de uma cidade sustentável.",
      imagem_analise: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    },
    desafio_critico: {
      pergunta:
        "A categoria fundamental de análise da Geografia que define o objeto de estudo desta ciência como 'a natureza transformada pelo trabalho humano ao longo do tempo histórico' é denominada:",
      opcoes: [
        { texto: "Espaço Geográfico.", correta: true },
        { texto: "Lugar Afetivo.", correta: false },
      ],
      explicacao_professor:
        "O Espaço Geográfico é o conceito-chave da disciplina, englobando a dinâmica natural e a dinâmica social em constante transformação mútua. Parabéns, você concluiu o ciclo de proficiência acadêmica do 6º Ano!",
    },
    recompensas: { xp: 1500, moedas: 800, titulo: "Mestre em Análises de Sistemas Geográficos" },
  },
];

export function getUnidade6ano(slug: string): UnidadeFund2 | undefined {
  return UNIDADES_6ANO.find((u) => u.slug === slug);
}

export function getProximaUnidade6ano(slug: string): UnidadeFund2 | undefined {
  const i = UNIDADES_6ANO.findIndex((u) => u.slug === slug);
  return i >= 0 && i + 1 < UNIDADES_6ANO.length ? UNIDADES_6ANO[i + 1] : undefined;
}
