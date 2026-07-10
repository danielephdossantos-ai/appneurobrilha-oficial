/**
 * Geografia 6º Ano — Banco acadêmico Fund. 2 Avançado.
 * Textos densos, conceitos formais, desafio estilo ENEM.
 * Zero mascotes. Consumido pelo PlayerGeoV2 (Dashboard Científico).
 */

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
  };
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
    titulo: "A Terra no Espaço e Dinâmicas Orbitais",
    habilidade: "EF06GE03",
    introducao_academica:
      "A compreensão do planeta Terra como um corpo celeste dinâmico no espaço é a base da climatologia e da astronomia geográfica. Analisaremos como as interações gravitacionais, a excentricidade da órbita e os movimentos de inclinação axial determinam os ciclos cronológicos e os padrões de iluminação solar na superfície terrestre.",
    conteudo_pedagogico: {
      conceito_chave: "Movimentos Planetários e Obliquidade do Eixo",
      texto_teorico:
        "A Terra realiza múltiplos movimentos complexos. A Rotação, realizada em torno do seu próprio eixo imaginário com duração aproximada de 23h 56m, estabelece a alternância entre os períodos iluminados (dia) e escuros (noite) e a força de Coriolis. A Translação é o movimento elíptico ao redor do Sol (365 dias e 6 horas). A inclinação de 23°27' do eixo terrestre (obliquidade) em relação ao plano da eclíptica é a variável responsável pela distribuição desigual de energia solar nos hemisférios ao longo do ano, gerando os solstícios e equinócios.",
      exemplo_visual:
        "Análise dos Solstícios (máxima desigualdade de iluminação entre os hemisférios, marcando o início do Verão/Inverno) e Equinócios (iluminação igual em ambos os hemisférios, marcando o início da Primavera/Outono).",
      imagem_analise: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200",
    },
    desafio_critico: {
      pergunta:
        "Considerando o movimento de Translação e a inclinação estável do eixo terrestre, qual seria a consequência direta para o planeta caso a obliquidade do eixo fosse reduzida a zero grau (eixo perfeitamente vertical)?",
      opcoes: [
        {
          texto:
            "Haveria uma extinção das estações do ano, fazendo com que os dias e as noites tivessem sempre a mesma duração em todas as latitudes ao longo de todo o ano.",
          correta: true,
        },
        {
          texto: "O planeta perderia sua atmosfera devido à aceleração da velocidade orbital ao redor do Sol.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Sem a inclinação do eixo, os raios solares atingiriam a Terra sempre com a mesma angulação em cada latitude durante o ano todo. Não haveria variação térmica sazonal, eliminando as estações do ano.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Especialista em Dinâmicas Orbitais" },
  },
  {
    unidade: 2,
    slug: "unidade-2-cartografia-avancada",
    titulo: "Cartografia Avançada e Sistemas de Coordenadas",
    habilidade: "EF06GE01 / EF06GE02",
    introducao_academica:
      "A cartografia evoluiu de uma técnica de desenho para uma ciência de precisão matemática e geoprocessamento. Esta unidade aborda a rede geométrica de linhas imaginárias que permite a localização unívoca de qualquer ponto na superfície do geoide terrestre.",
    conteudo_pedagogico: {
      conceito_chave: "Coordenadas Geográficas e Projeções Cartográficas",
      texto_teorico:
        "O sistema de coordenadas baseia-se na intersecção de Paralelos (linhas horizontais que medem a Latitude de 0° a 90° Norte ou Sul, tendo como referência a Linha do Equador) e Meridianos (linhas verticais que medem a Longitude de 0° a 180° Leste ou Oeste, a partir do Meridiano de Greenwich). Toda representação plana de uma superfície esférica gera distorções, resolvidas por meio de Projeções Cartográficas (Cilíndricas, Cônicas ou Azimutais), que priorizam ora as formas (conformes), ora as áreas (equivalentes).",
      exemplo_visual:
        "Comparação entre a Projeção de Mercator (Eurocêntrica, preserva as formas mas distorce as áreas, expandindo as regiões polares) e a Projeção de Peters (Terceiro-Mundista, preserva a proporção das áreas mas deforma os contornos).",
      imagem_analise: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200",
    },
    desafio_critico: {
      pergunta:
        "Ao programar um sistema de navegação por satélite (GPS), qual propriedade geométrica das Coordenadas Geográficas garante que o cálculo de rota funcione de forma idêntica em qualquer país do mundo?",
      opcoes: [
        {
          texto:
            "O fato de as coordenadas se basearem em uma rede angular matemática de paralelos e meridianos, fixa e independente de fronteiras políticas.",
          correta: true,
        },
        {
          texto:
            "A utilização exclusiva da projeção cilíndrica de Peters que elimina todas as distorções do planeta.",
          correta: false,
        },
      ],
      explicacao_professor:
        "A rede de latitudes e longitudes é um sistema de coordenadas esféricas abstrato e universal. Qualquer ponto possui um endereço único determinado por graus, minutos e segundos angulares.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Analista de Sistemas Cartográficos" },
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
