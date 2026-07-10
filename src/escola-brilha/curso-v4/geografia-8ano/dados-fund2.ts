/**
 * Geografia 8º Ano — Banco acadêmico Fund. 2 Avançado.
 * Foco: Mundo (globalização, DIT, geopolítica, EUA, África, América Latina).
 * Reutiliza os tipos de `geografia-6ano/dados-fund2` — mesma engine (PlayerGeoV2).
 */

import type { UnidadeFund2 } from "../geografia-6ano/dados-fund2";

export const UNIDADES_8ANO: UnidadeFund2[] = [
  // ============================================================
  // UNIDADE 1 — Globalização e DIT
  // ============================================================
  {
    unidade: 1,
    slug: "unidade-1-globalizacao-dit",
    titulo: "Globalização e a Divisão Internacional do Trabalho (DIT)",
    habilidade: "EF08GE05 / EF08GE06",
    introducao_academica:
      "A globalização integrou a economia global através de avanços nos transportes e nas telecomunicações. Mas essa integração não é igualitária: perpetua a Divisão Internacional do Trabalho (DIT), onde diferentes países assumem papéis específicos na produção e no consumo de riquezas mundiais.",
    conteudo_pedagogico: {
      conceito_chave: "Globalização, DIT Clássica × Nova DIT e Cadeias Globais de Valor",
      texto_teorico:
        "O mundo funciona hoje como uma única fábrica descentralizada: cada país entra na cadeia produtiva com sua vantagem específica (matéria-prima, mão-de-obra barata, engenharia de ponta ou marketing). Entender essa divisão é entender por que uns ganham muito e outros pouco na mesma cadeia.",
      etapas_teoricas: [
        {
          titulo: "1. O que é Globalização?",
          texto:
            "É o processo de aprofundamento da integração econômica, política, cultural e social do planeta. Empresas transnacionais instalam fábricas em vários países para reduzir custos, conectando o mundo em uma rede de fluxos financeiros, produtivos e informacionais instantâneos.",
          exemplo_real:
            "Um smartphone de uma empresa dos EUA tem tecnologia projetada na Califórnia, minerais extraídos na África, chips fabricados em Taiwan, montagem final na China e é vendido no Brasil. Um único produto atravessa 4 continentes antes de chegar às suas mãos.",
          exemplos_extras: [
            "A globalização não é nova (o comércio de especiarias já globalizou o mundo no séc. XV), mas a fase ATUAL, iniciada nos anos 1980, é qualitativamente diferente: fluxos financeiros instantâneos, fibra ótica, contêineres padronizados, jatos comerciais baratos. É a chamada 'globalização informacional' (Milton Santos).",
            "Existe também a 'globalização perversa': mesmos avanços que integram mercados também facilitam tráfico internacional, evasão fiscal em paraísos fiscais, fake news planetárias e pandemias que viajam de avião em 24 horas — como se viu com a COVID-19 em 2020.",
          ],
        },
        {
          titulo: "2. A Evolução da DIT",
          texto:
            "A DIT Clássica (período colonial, séc. XVI-XIX): colônias forneciam matéria-prima; metrópoles produziam manufaturados. A Nova DIT (pós-1970): países subdesenvolvidos industrializados também exportam produtos tecnológicos, mas continuam dependentes do capital e das patentes dos países ricos.",
          exemplo_real:
            "O Brasil fabrica carros e aviões modernos (Embraer), mas os lucros principais e as grandes decisões tecnológicas ainda voltam para matrizes na Europa ou nos EUA. Fabricar é diferente de possuir a tecnologia.",
          exemplos_extras: [
            "Alguns países fizeram a transição da DIT Clássica para a Nova DIT com sucesso, virando potências: Coreia do Sul (Samsung, LG, Hyundai), Taiwan (TSMC — a maior fabricante de chips do mundo). Investiram décadas em educação e ciência para deixar de ser 'só montagem' e virar donos da tecnologia.",
            "Outros ficaram 'presos' na DIT Clássica: exportando basicamente matéria-prima ou produtos de baixo valor agregado. É o caso de muitos países africanos, sul-americanos e do sudeste asiático — o que se chama 'armadilha do subdesenvolvimento'.",
          ],
        },
        {
          titulo: "3. Consequências Sociais",
          texto:
            "A globalização gera riqueza, mas também acentua a desigualdade. Áreas conectadas às redes de informação enriquecem rapidamente; regiões isoladas sofrem com exclusão econômica e desemprego estrutural causado pela automação e pela mobilidade das empresas.",
          exemplo_real:
            "A facilidade de transferir fábricas de um país para outro faz com que empresas abandonem cidades inteiras se encontrarem mão-de-obra mais barata em outro continente. Cidades industriais dos EUA (Detroit) e do Reino Unido (Sheffield) viraram símbolos do 'Rust Belt' pós-desindustrialização.",
          exemplos_extras: [
            "A automação (robôs e IA) acelera esse processo: empresas não precisam nem 'levar' a fábrica para outro país — podem simplesmente substituir trabalhadores por máquinas. Isso concentra riqueza nas mãos de donos de tecnologia e cria uma nova classe: os 'desnecessários' pelo mercado.",
            "Ao mesmo tempo, a globalização criou uma nova classe média em países emergentes (China, Índia, Brasil), tirando centenas de milhões da pobreza extrema. É o paradoxo: aumentou desigualdade DENTRO dos países ricos, mas diminuiu desigualdade ENTRE países.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Cadeias globais de valor",
        descricao:
          "Visualize como um único produto (smartphone, roupa de marca, chip eletrônico) percorre múltiplos continentes até chegar ao consumidor, e como o lucro é distribuído entre os países da cadeia.",
        legenda:
          "Observe: quem detém tecnologia, marca e design fica com a maior fatia do lucro (60-70%). Quem só monta ou fornece matéria-prima fica com fatias mínimas.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: Você sabia que a maior parte do valor que você paga em um tênis de marca famosa (~US$ 150) NÃO vai para os materiais nem para o trabalhador que o costurou? Quase 70% do preço serve para pagar marketing, design e lucro da empresa dona da marca (Nike, Adidas). O trabalhador vietnamita que costurou recebe cerca de US$ 0,50 pelo par. É a Nova DIT em números.",
      exemplo_visual:
        "Diagrama de uma cadeia global típica: design (EUA/Europa, 40% do lucro) → matéria-prima (África/Ásia, 5%) → montagem (Ásia, 10%) → marketing e varejo (EUA/Europa, 45%).",
      imagem_analise: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que caracteriza a NOVA DIT (Divisão Internacional do Trabalho) em relação à DIT Clássica?",
        opcoes: [
          {
            texto: "Países subdesenvolvidos também industrializam e exportam manufaturados, mas continuam dependentes do capital, das patentes e das decisões estratégicas dos países ricos.",
            correta: true,
            explicacao:
              "Correto. É a diferença central. Na DIT Clássica (colonial), o país pobre só exportava matéria-prima. Na Nova DIT, ele pode até montar iPhones — mas não é dono do design nem da marca, então lucra pouco.",
          },
          {
            texto: "Os países subdesenvolvidos assumiram controle total da propriedade intelectual e dos fluxos financeiros globais.",
            correta: false,
            explicacao:
              "É o oposto do que ocorre. Patentes e finanças continuam concentradas nos países ricos (EUA, Europa, Japão). Emergentes fabricam, mas não detêm a tecnologia.",
          },
          {
            texto: "A DIT deixou de existir porque a globalização eliminou as diferenças entre países.",
            correta: false,
            explicacao:
              "A globalização INTENSIFICOU a DIT, ela não a eliminou. As diferenças de renda entre países da OCDE e países africanos, por exemplo, são maiores hoje que há 50 anos.",
          },
        ],
      },
      {
        pergunta: "Por que Detroit (EUA) e Sheffield (Reino Unido) viraram símbolos do 'Rust Belt' (cinturão da ferrugem)?",
        opcoes: [
          {
            texto: "Suas indústrias tradicionais (automóveis, aço) fecharam ou migraram para países com mão-de-obra mais barata, deixando desemprego estrutural e cidades esvaziadas.",
            correta: true,
            explicacao:
              "Perfeito. É a face 'perversa' da globalização nos países ricos: quando é mais barato produzir no exterior, cidades inteiras perdem sua economia. Foi um dos motores do voto em Trump nos EUA em 2016.",
          },
          {
            texto: "Sofreram bombardeios durante a Guerra Fria que destruíram suas fábricas.",
            correta: false,
            explicacao:
              "Não houve bombardeio nem em Detroit nem em Sheffield na Guerra Fria. O declínio foi puramente econômico — desindustrialização por deslocamento de fábricas ao exterior.",
          },
          {
            texto: "As cidades foram atingidas por catástrofes climáticas que inutilizaram as indústrias.",
            correta: false,
            explicacao:
              "Sem relação. O 'Rust' (ferrugem) é uma metáfora para o abandono industrial, não descrição literal de dano climático. Fábricas fecharam por decisão econômica de empresas.",
          },
        ],
      },
      {
        pergunta: "Qual país virou 'a fábrica do mundo' a partir dos anos 1990, absorvendo boa parte da produção industrial que antes ficava nos EUA e Europa?",
        opcoes: [
          {
            texto: "China — pela combinação de mão-de-obra abundante e barata, infraestrutura, estabilidade política e políticas de atração de investimento estrangeiro.",
            correta: true,
            explicacao:
              "Isso mesmo. A China absorveu cadeias produtivas do mundo todo entre 1990-2010. Hoje é a segunda maior economia do planeta e disputa hegemonia com os EUA.",
          },
          {
            texto: "Brasil — que se tornou o maior polo industrial do Hemisfério Sul.",
            correta: false,
            explicacao:
              "O Brasil chegou a ter uma indústria forte nos anos 70-80, mas nas últimas décadas passou por DESINDUSTRIALIZAÇÃO (retorno à pauta primária). Não absorveu cadeias globais como a China fez.",
          },
          {
            texto: "Rússia — usando sua indústria pesada herdada da União Soviética.",
            correta: false,
            explicacao:
              "A Rússia herdou indústria militar e energética, mas nunca virou 'fábrica do mundo' para bens de consumo. Sua economia depende basicamente de petróleo e gás.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada país exerce um papel específico na cadeia global. Classifique corretamente.",
      categorias: [
        { id: "design", titulo: "Design e Patentes", cor: "cyan" },
        { id: "montagem", titulo: "Montagem em Massa", cor: "amber" },
        { id: "materia_prima", titulo: "Matéria-prima", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Vale do Silício (EUA) — projeto e engenharia do iPhone.", categoriaId: "design" },
        { texto: "China (Foxconn) — montagem de 90% dos iPhones do mundo.", categoriaId: "montagem" },
        { texto: "República Democrática do Congo — extração de coltan (mineral raro dos celulares).", categoriaId: "materia_prima" },
        { texto: "Bangladesh — costura de roupas para marcas como Zara e H&M.", categoriaId: "montagem" },
        { texto: "Chile — extração e refino de lítio para baterias.", categoriaId: "materia_prima" },
        { texto: "Alemanha — patentes e engenharia de precisão automotiva (Bosch, Siemens).", categoriaId: "design" },
      ],
    },

    desafio_critico: {
      pergunta:
        "A Nova DIT redefine a posição dos países subdesenvolvidos industrializados. Qual das alternativas define corretamente o papel atual desses países?",
      opcoes: [
        {
          texto:
            "Exportam produtos industrializados e commodities, mas permanecem dependentes da tecnologia avançada, das patentes e dos investimentos de grandes corporações estrangeiras.",
          correta: true,
        },
        {
          texto:
            "Assumiram o controle total da propriedade intelectual e dos principais fluxos financeiros das transnacionais.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Correto. Embora países subdesenvolvidos como Brasil, México e Índia agora fabriquem e exportem produtos industriais, ainda dependem das decisões financeiras e das patentes tecnológicas que pertencem aos países desenvolvidos. Fabricar não é o mesmo que possuir — e é aí que reside a assimetria da Nova DIT.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Analista de Redes Globais" },
  },

  // ============================================================
  // UNIDADE 2 — Regionalização Mundial: Norte e Sul
  // ============================================================
  {
    unidade: 2,
    slug: "unidade-2-norte-sul",
    titulo: "Regionalização Mundial: Norte e Sul",
    habilidade: "EF08GE01 / EF08GE02",
    introducao_academica:
      "Por que chamamos EUA e Europa de 'Norte' e Brasil, África e Índia de 'Sul', se esses termos geográficos não correspondem exatamente aos hemisférios? Vamos entender a regionalização mundial baseada em desenvolvimento — e por que a linha 'Norte × Sul' é a divisão política mais importante do planeta.",
    conteudo_pedagogico: {
      conceito_chave: "Regionalização por Desenvolvimento e Indicadores Socioeconômicos",
      texto_teorico:
        "A regionalização por desenvolvimento agrupa países por nível de renda, industrialização, IDH e inserção na economia global. A linha Norte-Sul (também chamada 'linha Brandt') foi traçada em 1980 e continua servindo de referência — apesar das novas configurações do séc. XXI.",
      etapas_teoricas: [
        {
          titulo: "Norte Desenvolvido — os países centrais",
          texto:
            "Conjunto formado por EUA, Canadá, Europa Ocidental, Japão, Coreia do Sul, Austrália e Nova Zelândia. Características: alta renda per capita, indústria de alta tecnologia, forte setor de serviços, IDH elevado (>0,8), população envelhecida, taxa de urbanização acima de 80%.",
          exemplo_real:
            "Alemanha, Japão e EUA sozinhos concentram cerca de 40% do PIB mundial, embora tenham menos de 8% da população global. A concentração de riqueza é o traço mais marcante do 'Norte'.",
          exemplos_extras: [
            "A maioria dos países do Norte pertence à OCDE (Organização para Cooperação e Desenvolvimento Econômico) e ao G7. Compartilham valores de democracia liberal, economia de mercado e proteção social — o chamado 'modelo ocidental'.",
            "Nem todos os países do 'Norte' estão geograficamente no hemisfério norte: Austrália e Nova Zelândia estão no Sul geográfico, mas socioeconomicamente pertencem ao 'Norte' desenvolvido. A regionalização é política/econômica, não geográfica pura.",
          ],
        },
        {
          titulo: "Sul Subdesenvolvido — os países periféricos e emergentes",
          texto:
            "Conjunto formado por América Latina, África, boa parte da Ásia e Oriente Médio. Características: economia dependente de exportação de commodities, alta desigualdade interna, IDH médio ou baixo, população jovem, urbanização rápida e desordenada, dívida externa historicamente alta.",
          exemplo_real:
            "A África Subsaariana concentra 15% da população mundial mas menos de 3% do PIB. É a região com menor renda per capita do planeta e onde vivem os países com IDH mais baixos (Níger, Chade, República Centro-Africana).",
          exemplos_extras: [
            "Dentro do 'Sul' há grande heterogeneidade. Alguns países emergentes (BRICS: Brasil, Rússia, Índia, China, África do Sul) acumularam poder econômico e político significativo. Não são mais 'periféricos clássicos', mas ainda não integraram o clube dos ricos.",
            "Os 'Tigres Asiáticos' (Coreia do Sul, Cingapura, Taiwan, Hong Kong) fizeram a transição do Sul para o Norte em ~40 anos (1960-2000). Provaram que o subdesenvolvimento não é destino — é o resultado de escolhas políticas e econômicas de décadas.",
          ],
        },
        {
          titulo: "Reconfigurações do Séc. XXI — China, BRICS e o Sul Global",
          texto:
            "A dicotomia Norte-Sul foi útil no séc. XX, mas se tornou insuficiente. A ascensão da China (2ª maior economia), da Índia (5ª economia) e do BRICS reconfigurou o tabuleiro. Emergiu o conceito de 'Sul Global' — países do Sul que se articulam politicamente para negociar melhores condições no comércio, no clima e nas finanças mundiais.",
          exemplo_real:
            "A cúpula do BRICS de 2023 admitiu novos membros: Emirados Árabes, Egito, Etiópia, Irã. É uma tentativa organizada de criar um bloco alternativo aos G7 e ao domínio do dólar americano no comércio internacional.",
          exemplos_extras: [
            "A China ultrapassou os EUA em PIB por paridade de poder de compra (PPP) em 2014. Isso significa que, medindo em bens e serviços que os cidadãos conseguem comprar, a economia chinesa já é a maior do mundo — embora em dólares correntes ainda seja a segunda.",
            "Alguns analistas propõem substituir 'Norte × Sul' por outras divisões: 'países centrais × emergentes × periféricos', ou 'países democráticos × autoritários'. Nenhum modelo captura tudo — a realidade geopolítica é mais complexa que qualquer mapa binário.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Linha de Brandt (Norte × Sul, 1980)",
        descricao:
          "Visualize a linha imaginária que separa países desenvolvidos (Norte) e subdesenvolvidos (Sul), e observe as anomalias: Austrália no Sul geográfico mas classificada no Norte; Coreia do Sul e Cingapura que 'subiram' desde 1980.",
        legenda:
          "Observe: a linha não é geográfica pura — é uma métrica de desenvolvimento. Alguns países subiram (Tigres Asiáticos), outros se mantiveram (África Subsaariana), e novos players (China) reconfiguram o mapa.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "📊 INSIGHT MACRO: Se a Terra fosse uma vila de 100 pessoas, ~15 morariam no 'Norte' com ~65% da renda global; ~85 morariam no 'Sul' com ~35% da renda. Essa é a desigualdade Norte-Sul em escala humana. Mas atenção: entre esses 85 do Sul, hoje há chineses de classe média com padrão europeu — a desigualdade DENTRO do Sul também explodiu.",
      exemplo_visual:
        "Mapa-múndi com a Linha de Brandt (1980) traçada em amarelo separando países 'Norte' (azul) e 'Sul' (marrom), destacando os Tigres Asiáticos como exceções que 'subiram' de categoria.",
      imagem_analise: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que a Austrália é classificada como país do 'Norte' desenvolvido, mesmo estando no Hemisfério Sul geográfico?",
        opcoes: [
          {
            texto: "Porque a divisão Norte-Sul é SOCIOECONÔMICA (renda, IDH, industrialização), não geográfica. Australia tem indicadores de país rico.",
            correta: true,
            explicacao:
              "Correto. Norte-Sul é uma metáfora política. Austrália, Nova Zelândia e África do Sul (branca, historicamente) estão no Sul geográfico, mas historicamente foram classificadas como parte do 'Norte' rico.",
          },
          {
            texto: "Porque a Austrália fica ao norte de países como Nova Zelândia e Antártida.",
            correta: false,
            explicacao:
              "Argumento geográfico não se aplica. A Austrália está claramente ao sul do Equador — está no Hemisfério Sul. A classificação é POLÍTICO-ECONÔMICA, não posicional.",
          },
          {
            texto: "Porque a maioria da população australiana descende de imigrantes europeus.",
            correta: false,
            explicacao:
              "Esse é um fator histórico, mas não é o critério oficial. O que classifica um país no 'Norte' são os indicadores atuais (renda, IDH, indústria), não a origem étnica da população.",
          },
        ],
      },
      {
        pergunta: "Os 'Tigres Asiáticos' (Coreia do Sul, Cingapura, Taiwan, Hong Kong) provam que:",
        opcoes: [
          {
            texto: "Um país pode sair do subdesenvolvimento se investir décadas em educação, industrialização de alta tecnologia e planejamento estatal — o subdesenvolvimento não é destino.",
            correta: true,
            explicacao:
              "Perfeito. Nos anos 1960 essas economias eram pobres. Em 40 anos viraram líderes tecnológicos globais (Samsung, TSMC). Foi resultado de políticas coordenadas, não milagre.",
          },
          {
            texto: "Basta abrir a economia para o capital estrangeiro para automaticamente virar país rico.",
            correta: false,
            explicacao:
              "Simplificação enganosa. Vários países abriram economia sem virar ricos (Brasil, México). Os Tigres combinaram abertura COM planejamento estatal forte e investimento em educação — foi a combinação que funcionou.",
          },
          {
            texto: "Só países da Ásia conseguem sair do subdesenvolvimento por razões culturais.",
            correta: false,
            explicacao:
              "Explicação culturalista, sem base científica. Chile, Irlanda e Israel também fizeram transições similares em outras regiões. Não há 'cultura vencedora' — há políticas certas para cada contexto.",
          },
        ],
      },
      {
        pergunta: "O que representa o BRICS e por que ele foi criado?",
        opcoes: [
          {
            texto: "Bloco de países emergentes (Brasil, Rússia, Índia, China, África do Sul) que se articulam para negociar coletivamente no comércio, clima e finanças — reduzindo a hegemonia do G7 e do dólar.",
            correta: true,
            explicacao:
              "Isso mesmo. É um projeto geopolítico do 'Sul Global' para ter mais voz em fóruns dominados pelo Norte. Recentemente admitiu novos membros (Emirados, Egito, Etiópia, Irã).",
          },
          {
            texto: "É uma aliança militar formada para se opor à OTAN.",
            correta: false,
            explicacao:
              "BRICS não é aliança militar (é econômica/política). A oposição à OTAN é papel principalmente da Rússia bilateral, não do bloco. E Brasil, Índia, África do Sul não têm postura militarmente antioccidental.",
          },
          {
            texto: "É uma organização de países ricos que substituiu o G7.",
            correta: false,
            explicacao:
              "Ao contrário. BRICS é composto por países EMERGENTES (Sul Global) que buscam alternativa aos ricos do G7 — não substituí-lo por dentro.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada país/grupo em: Norte Desenvolvido, Sul Emergente ou Sul Periférico.",
      categorias: [
        { id: "norte", titulo: "Norte Desenvolvido", cor: "cyan" },
        { id: "emergente", titulo: "Sul Emergente", cor: "amber" },
        { id: "periferico", titulo: "Sul Periférico", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Alemanha — 4ª maior economia global, hub industrial da UE.", categoriaId: "norte" },
        { texto: "China — 2ª maior economia, ascensão acelerada desde 1990.", categoriaId: "emergente" },
        { texto: "República Democrática do Congo — mineração dependente, guerras civis, IDH muito baixo.", categoriaId: "periferico" },
        { texto: "Japão — polo tecnológico, altos indicadores sociais, envelhecido.", categoriaId: "norte" },
        { texto: "Brasil — agroindústria forte, mas com desigualdade e reprimarização.", categoriaId: "emergente" },
        { texto: "Chade — economia de subsistência, IDH entre os mais baixos do planeta.", categoriaId: "periferico" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um analista afirma que 'a divisão Norte × Sul foi útil no séc. XX, mas se tornou insuficiente no séc. XXI'. Qual das alternativas explica melhor essa insuficiência?",
      opcoes: [
        {
          texto:
            "A ascensão da China, dos Tigres Asiáticos e do BRICS criou países que não são mais 'periféricos clássicos' nem 'centrais', mas ocupam posições intermediárias que a dicotomia binária não consegue capturar.",
          correta: true,
        },
        {
          texto:
            "A globalização eliminou completamente as diferenças entre países, tornando qualquer regionalização por desenvolvimento desnecessária.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. A dicotomia Norte-Sul foi criada em um mundo onde os países ricos eram claramente identificáveis e os pobres estavam claramente 'atrás'. Hoje temos China com potência tecnológica e política, mas ainda com regiões rurais pobres; Estados do Golfo com renda per capita europeia mas indicadores sociais medianos; Brasil como potência agrícola mas com desigualdade extrema. A geografia econômica virou multipolar — os mapas precisam de mais cores.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Cartógrafo da Ordem Mundial" },
  },

  // ============================================================
  // UNIDADE 3 — Geopolítica e Organizações Internacionais
  // ============================================================
  {
    unidade: 3,
    slug: "unidade-3-geopolitica-organizacoes",
    titulo: "Geopolítica e Organizações Internacionais (ONU, OMC, Blocos)",
    habilidade: "EF08GE13",
    introducao_academica:
      "Quando um país invade outro, quem decide o que fazer? Quando dois países discordam sobre tarifas, para onde vão? Quem estabelece as regras do comércio, da saúde global e dos direitos humanos? A resposta está nas organizações internacionais — o 'sistema operacional' das relações entre países.",
    conteudo_pedagogico: {
      conceito_chave: "Governança Global: ONU, OMC, FMI, OMS e Blocos Econômicos Regionais",
      texto_teorico:
        "Depois da 2ª Guerra Mundial, o mundo criou instituições multilaterais para evitar novos conflitos globais e organizar a economia. Essas organizações têm poder REAL — decisões da OMC podem obrigar países a mudar leis; sanções da ONU podem quebrar economias inteiras.",
      etapas_teoricas: [
        {
          titulo: "ONU — o parlamento do mundo",
          texto:
            "A Organização das Nações Unidas, fundada em 1945 após a 2ª Guerra Mundial, tem sede em Nova York e reúne 193 países. Seus órgãos principais: Assembleia Geral (cada país = 1 voto), Conselho de Segurança (15 membros, dos quais 5 permanentes com poder de veto: EUA, Rússia, China, França, Reino Unido) e agências especializadas (UNESCO, OMS, UNICEF, FAO).",
          exemplo_real:
            "Quando a Rússia invadiu a Ucrânia em 2022, a Assembleia Geral condenou por larga maioria (141 votos favoráveis). Mas no Conselho de Segurança, a Rússia (membro permanente) VETOU qualquer sanção militar. Isso mostra o principal defeito estrutural da ONU: 5 países podem paralisar decisões da maioria.",
          exemplos_extras: [
            "A crítica mais comum é que o Conselho de Segurança reflete o mundo de 1945 (vencedores da 2ª Guerra), não o de hoje. Alemanha, Japão, Índia, Brasil e África do Sul pleiteiam vaga permanente há décadas — sem sucesso, porque os 5 atuais não querem diluir seu poder.",
            "A ONU tem também operações de paz (capacetes azuis): tropas multinacionais enviadas a zonas de conflito. Brasil comandou a missão no Haiti (2004-2017). Foram operações que ajudaram a estabilizar países, mas também criticadas por casos de abuso e ineficácia.",
          ],
        },
        {
          titulo: "OMC — o juiz do comércio mundial",
          texto:
            "A Organização Mundial do Comércio, criada em 1995 (sucessora do GATT), regula o comércio internacional. Estabelece regras para tarifas, subsídios agrícolas, propriedade intelectual e resolve disputas comerciais entre países. Suas decisões são vinculantes: se um país perde uma disputa, deve mudar a lei ou sofrer retaliação autorizada.",
          exemplo_real:
            "Brasil × EUA no algodão: em 2004, o Brasil provou na OMC que os EUA subsidiavam ilegalmente seus produtores de algodão, prejudicando os brasileiros. Ganhamos o direito de retaliar comercialmente — os EUA acabaram pagando compensação ao Brasil (Instituto Brasileiro do Algodão).",
          exemplos_extras: [
            "A OMC é muito criticada por priorizar interesses de países ricos em áreas sensíveis (patentes de medicamentos, subsídios agrícolas). Isso levou à paralisia das negociações da 'Rodada Doha' (que discutia comércio agrícola mais justo para países em desenvolvimento).",
            "Nos últimos anos, EUA sob Trump e agora com Biden têm bloqueado nomeações para o Órgão de Apelação da OMC — o 'juizado supremo' do comércio mundial. Isso paralisa a resolução de disputas e enfraquece toda a estrutura multilateral.",
          ],
        },
        {
          titulo: "Blocos Econômicos — a integração regional",
          texto:
            "Além das organizações globais, países se agrupam em BLOCOS REGIONAIS para facilitar comércio e cooperar politicamente: União Europeia (UE), Mercosul, USMCA (antigo NAFTA), ASEAN (Sudeste Asiático), União Africana. Cada bloco tem graus diferentes de integração: zona de livre-comércio, união aduaneira, mercado comum, união monetária.",
          exemplo_real:
            "A União Europeia é o bloco mais integrado do mundo: 27 países, moeda única (Euro) em 20 deles, livre circulação de pessoas (Schengen), parlamento europeu eleito. Um cidadão português pode morar, trabalhar e votar em Berlim sem visto — algo inédito na história.",
          exemplos_extras: [
            "O Mercosul (Brasil, Argentina, Uruguai, Paraguai) é uma união aduaneira imperfeita: tem tarifa externa comum, mas com muitas exceções. Está travado desde 2016 em negociações com a UE por causa de resistência europeia à concorrência agrícola brasileira e argentina.",
            "Alguns blocos são mais políticos que econômicos: a União Africana (55 países) tem projeto de zona de livre-comércio continental (AfCFTA) desde 2021, buscando integrar economias que historicamente exportam mais para Europa e Ásia do que entre si.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Arquitetura da Governança Global",
        descricao:
          "Diagrama das principais organizações internacionais e sua hierarquia funcional: ONU (política/paz), OMC (comércio), FMI/BM (finanças), OMS (saúde) + os principais blocos regionais.",
        legenda:
          "Observe: são estruturas criadas majoritariamente entre 1944-1995. Refletem uma ordem mundial que já mudou muito — daí a crescente disputa por reformas.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: Toda vez que você compra um remédio genérico, esse direito vem de uma NEGOCIAÇÃO na OMC. Toda vez que a União Europeia proíbe importação de carne com hormônios, isso pode virar caso na OMC. Toda vez que o preço internacional do trigo dispara (guerra na Ucrânia), a FAO/ONU alerta países pobres importadores. Essas organizações parecem distantes, mas afetam o seu dia-a-dia.",
      exemplo_visual:
        "Organograma da ONU (Assembleia Geral, Conselho de Segurança, agências especializadas) conectado aos principais blocos regionais e organizações econômicas (OMC, FMI, BM).",
      imagem_analise: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que o Conselho de Segurança da ONU é considerado 'anacrônico' (fora do seu tempo)?",
        opcoes: [
          {
            texto: "Porque seus 5 membros permanentes com direito de veto (EUA, Rússia, China, França, Reino Unido) refletem a ordem mundial de 1945, não a de hoje — deixando de fora potências como Alemanha, Japão, Índia e Brasil.",
            correta: true,
            explicacao:
              "Correto. Foi desenhado pelos vencedores da 2ª Guerra. Hoje, esses 5 países não representam mais o peso econômico e demográfico global — mas mantêm privilégio de veto que paralisa decisões.",
          },
          {
            texto: "Porque tem membros demais e não consegue tomar decisões rápidas.",
            correta: false,
            explicacao:
              "Ao contrário: o Conselho tem apenas 15 membros. O problema não é excesso, mas o PODER DE VETO de 5 deles. Qualquer um pode bloquear qualquer decisão sozinho.",
          },
          {
            texto: "Porque só funciona em inglês, excluindo países que falam outras línguas.",
            correta: false,
            explicacao:
              "A ONU tem 6 línguas oficiais (inglês, francês, espanhol, russo, mandarim, árabe) com tradução simultânea. Idioma não é o problema.",
          },
        ],
      },
      {
        pergunta: "Uma disputa na OMC (Organização Mundial do Comércio) é vinculante. O que isso significa na prática?",
        opcoes: [
          {
            texto: "O país que perde a disputa é OBRIGADO a mudar sua legislação ou aceitar retaliação comercial autorizada pela OMC.",
            correta: true,
            explicacao:
              "Exato. É por isso que a OMC tem poder real. No caso Brasil × EUA do algodão, os EUA foram obrigados a pagar compensação ao Brasil, não podiam simplesmente ignorar.",
          },
          {
            texto: "As decisões da OMC são apenas sugestões — cada país decide se cumpre ou não.",
            correta: false,
            explicacao:
              "Se fossem apenas sugestões, a OMC seria irrelevante. O poder da organização vem justamente do caráter vinculante. Descumprir gera retaliação autorizada.",
          },
          {
            texto: "Só países ricos são obrigados a cumprir; países pobres podem ignorar.",
            correta: false,
            explicacao:
              "Ao contrário: a OMC vale para todos os 164 membros igualmente. A crítica é que os países ricos têm mais RECURSOS para litigar (advogados especializados) — mas as regras se aplicam a todos.",
          },
        ],
      },
      {
        pergunta: "O que diferencia a União Europeia de um simples 'bloco de livre-comércio' como o USMCA (antigo NAFTA)?",
        opcoes: [
          {
            texto: "A UE tem moeda única (Euro), livre circulação de pessoas (Schengen), parlamento eleito e leis comunitárias — é uma integração POLÍTICA, não só econômica.",
            correta: true,
            explicacao:
              "Perfeito. A UE é o bloco mais integrado do mundo. Vai muito além de tarifas: cria cidadania europeia, direitos comuns e legislação supranacional. USMCA se limita ao comércio.",
          },
          {
            texto: "A UE tem mais países que o USMCA, só isso.",
            correta: false,
            explicacao:
              "Quantidade não é a diferença qualitativa. UE tem 27 países vs 3 no USMCA, mas o que MUDA a natureza é o GRAU de integração (moeda, política, cidadania).",
          },
          {
            texto: "A UE não tem tarifas internas e o USMCA sim.",
            correta: false,
            explicacao:
              "Ambos eliminaram tarifas internas na maior parte dos produtos. A diferença é que a UE avançou MUITO ALÉM disso (moeda, política, cidadania) — o USMCA parou no comércio.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada organização/bloco tem uma função específica. Classifique corretamente.",
      categorias: [
        { id: "onu", titulo: "Sistema ONU (política/paz)", cor: "cyan" },
        { id: "economico", titulo: "Comércio e Finanças", cor: "amber" },
        { id: "regional", titulo: "Bloco Regional", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Conselho de Segurança — decide sanções e envia forças de paz.", categoriaId: "onu" },
        { texto: "OMC — arbitra disputas comerciais entre países.", categoriaId: "economico" },
        { texto: "União Europeia — moeda comum e livre circulação de cidadãos.", categoriaId: "regional" },
        { texto: "OMS — coordena resposta global a pandemias.", categoriaId: "onu" },
        { texto: "FMI — empresta recursos a países em crise cambial.", categoriaId: "economico" },
        { texto: "Mercosul — união aduaneira sul-americana.", categoriaId: "regional" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Analistas afirmam que 'o multilateralismo (governança via ONU, OMC etc.) está em crise no séc. XXI'. Qual das alternativas melhor explica essa crise?",
      opcoes: [
        {
          texto:
            "Grandes potências (EUA sob Trump, Rússia, China) têm agido unilateralmente, ignorando ou bloqueando decisões multilaterais — enquanto novos atores (Índia, Brasil, África do Sul) exigem reformas que os antigos hegemônicos resistem em aceitar.",
          correta: true,
        },
        {
          texto:
            "As organizações multilaterais foram todas dissolvidas nos últimos 10 anos, deixando o mundo sem coordenação internacional.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise. As organizações continuam existindo, mas sofrem esvaziamento: os EUA saíram da OMS na pandemia e do Acordo de Paris; bloqueiam o Órgão de Apelação da OMC; Rússia veta qualquer resolução crítica sua na ONU. Ao mesmo tempo, o G20 e o BRICS ganham protagonismo. O sistema multilateral criado em 1945 precisa se reinventar — mas quem tem privilégios (5 membros permanentes) não quer perder poder. Essa é a tensão central da geopolítica atual.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Diplomata da Ordem Multilateral" },
  },

  // ============================================================
  // UNIDADE 4 — Demografia Mundial, Migrações e Xenofobia
  // ============================================================
  {
    unidade: 4,
    slug: "unidade-4-migracoes-xenofobia",
    titulo: "Demografia Mundial, Migrações Globais e Xenofobia",
    habilidade: "EF08GE03 / EF08GE04",
    introducao_academica:
      "Nunca na história tantas pessoas cruzaram fronteiras. Guerras, mudanças climáticas, buscas por trabalho e reunião familiar movimentam mais de 280 milhões de migrantes internacionais no mundo. Vamos entender por que as pessoas migram — e por que, em muitos países ricos, isso virou o principal tema político da década.",
    conteudo_pedagogico: {
      conceito_chave: "Fluxos Migratórios Globais, Refúgio e Reações Xenófobas",
      texto_teorico:
        "Migração é o deslocamento de pessoas que atravessa uma fronteira administrativa (municipal, estadual ou nacional) e implica mudança de residência. Ela tem fatores de EXPULSÃO (guerra, pobreza, clima) e de ATRAÇÃO (trabalho, direitos, segurança). Nunca é uma decisão só individual — é o resultado de forças estruturais globais.",
      etapas_teoricas: [
        {
          titulo: "Migrações Econômicas — a busca por trabalho e renda",
          texto:
            "É o tipo mais numeroso de migração. Pessoas deixam países pobres para trabalhar em países ricos, geralmente enviando dinheiro (remessas) para famílias que ficaram. É uma decisão econômica racional: um trabalhador ganha 5 a 20 vezes mais fazendo o mesmo trabalho em outro país.",
          exemplo_real:
            "As remessas de migrantes para países em desenvolvimento somam mais de US$ 600 bilhões por ano — mais do que toda a ajuda internacional oficial de países ricos. Para países como El Salvador, Honduras e Nepal, as remessas representam mais de 20% do PIB nacional.",
          exemplos_extras: [
            "Brasil recebe muitos migrantes econômicos, principalmente da Venezuela (~450 mil desde 2015, fugindo da crise), Bolívia, Haiti e Colômbia. São Paulo e Roraima são os principais destinos. O Brasil concedeu status humanitário a boa parte dos venezuelanos.",
            "O Brasil também EMISSOR de migrantes: cerca de 4,4 milhões de brasileiros vivem no exterior, principalmente nos EUA (~1,9 milhão), Portugal (~370 mil) e Japão (~200 mil, descendentes de japoneses). Muitos enviam remessas regularmente.",
          ],
        },
        {
          titulo: "Refugiados — quem foge por sobrevivência",
          texto:
            "Diferentemente de migrantes econômicos, refugiados fogem por PERSEGUIÇÃO ou VIOLÊNCIA (guerra, terrorismo, perseguição religiosa, política ou étnica). São protegidos pela Convenção de Genebra de 1951: o país que os recebe é obrigado por lei a não devolvê-los ao país de origem (princípio de 'non-refoulement'). Em 2024, o mundo tem cerca de 120 milhões de deslocados forçados — recorde histórico.",
          exemplo_real:
            "A Síria produziu a maior crise de refugiados desde a 2ª Guerra: mais de 6 milhões de sírios fugiram desde 2011 (guerra civil). Turquia, Alemanha e Líbano são os maiores receptores. A Alemanha sozinha acolheu ~1 milhão em 2015, decisão de Angela Merkel que dividiu a Europa.",
          exemplos_extras: [
            "Ucrânia gerou o maior fluxo de refugiados da Europa desde 1945: em poucos meses após a invasão russa (2022), ~6 milhões de ucranianos deixaram o país, principalmente para Polônia, Alemanha e República Tcheca. UE ativou pela primeira vez a 'proteção temporária' em massa.",
            "Existe também um novo tipo de refugiado: os REFUGIADOS CLIMÁTICOS. Pessoas que perdem casa por enchentes, seca prolongada ou salinização de terras. Ainda não são reconhecidos formalmente pela Convenção de 1951 — o direito internacional está atrasado em relação à realidade climática.",
          ],
        },
        {
          titulo: "Xenofobia — a reação política contra imigrantes",
          texto:
            "Xenofobia é o ódio ou medo do estrangeiro. Nas últimas décadas, cresceu em muitos países ricos como reação às migrações e à insegurança econômica. Partidos populistas de extrema-direita capitalizam esse medo prometendo 'fechar fronteiras' — Trump nos EUA, Le Pen na França, Meloni na Itália, AfD na Alemanha.",
          exemplo_real:
            "A saída do Reino Unido da União Europeia (Brexit, 2016) foi decidida em referendo majoritariamente por preocupação com imigração — muitos britânicos queriam reduzir a chegada de trabalhadores da Europa Oriental (Polônia, Romênia). Ironia: a economia britânica dependia dessa mão-de-obra e teve escassez pós-Brexit.",
          exemplos_extras: [
            "A xenofobia tem base emocional mais que estatística. Estudos mostram que imigrantes contribuem MAIS aos cofres públicos do que consomem (pagam mais impostos que recebem em benefícios). Também cometem menos crimes que a população nativa. Mas fatos não vencem medos amplificados pela mídia.",
            "O caso italiano é revelador: o país tem taxa de fecundidade de 1,2 (uma das mais baixas do mundo) e envelhece rapidamente. Precisaria de imigrantes para manter o mercado de trabalho e a previdência — mas politicamente rejeita quem chega pelo Mediterrâneo. Contradição demográfica × política.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Fluxos migratórios globais",
        descricao:
          "Mapa das principais rotas migratórias contemporâneas: Rota do Mediterrâneo (África → Europa), Rota Centro-Americana (México → EUA), Rota do Oriente Médio (Síria → Turquia/UE), Rota Sul-Americana (Venezuela → Brasil/Colômbia).",
        legenda:
          "Observe: as rotas seguem gradientes de renda (do pobre para o rico) e zonas de conflito. Cada linha representa milhões de histórias humanas — e cada vez mais mortes no percurso.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: Se a Alemanha fechasse fronteiras aos imigrantes AMANHÃ, sua previdência social entraria em colapso em ~15 anos. Se os EUA deportassem todos os indocumentados (~11 milhões), a agricultura da Califórnia colheria menos de 20% do que colhe hoje. Migrações não são 'crise' — são o motor demográfico dos países ricos envelhecidos. O paradoxo é que muitos rejeitam politicamente aquilo que precisam economicamente.",
      exemplo_visual:
        "Mapa-múndi com setas coloridas indicando os principais corredores migratórios globais e círculos proporcionais mostrando os países que MAIS RECEBEM imigrantes (EUA, Alemanha, Turquia) e os que MAIS ENVIAM (Índia, México, China, Síria).",
      imagem_analise: "https://images.unsplash.com/photo-1526315251684-8f6e08cea3ec?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Qual é a diferença jurídica principal entre 'migrante econômico' e 'refugiado'?",
        opcoes: [
          {
            texto: "Refugiado foge de perseguição/violência e é protegido pela Convenção de Genebra (não pode ser devolvido); migrante econômico busca melhor renda e não tem essa proteção legal internacional.",
            correta: true,
            explicacao:
              "Correto. O status de refugiado dá direitos específicos (asilo, não-devolução). Migrante econômico depende das leis migratórias do país receptor — que podem ser restritivas.",
          },
          {
            texto: "Não há diferença: os dois termos são sinônimos.",
            correta: false,
            explicacao:
              "É uma distinção CENTRAL em direito internacional. Confundir os dois pode gerar decisões erradas de asilo — inclusive violando tratados internacionais.",
          },
          {
            texto: "Refugiado sempre é ilegal; migrante econômico sempre é legal.",
            correta: false,
            explicacao:
              "Exatamente o oposto. Refugiado tem status LEGAL protegido internacionalmente. Já muitos migrantes econômicos são 'irregulares' porque não têm visto de trabalho.",
          },
        ],
      },
      {
        pergunta: "Por que Itália, Alemanha e Japão precisam demograficamente de imigrantes, mesmo com resistência política crescente?",
        opcoes: [
          {
            texto: "Suas taxas de fecundidade estão muito abaixo da reposição (2,1 filhos por mulher), e sem imigração a população ativa encolhe, colapsando a previdência e o mercado de trabalho.",
            correta: true,
            explicacao:
              "Perfeito. É a 'armadilha demográfica' dos países ricos: envelhecem rápido, precisam de trabalhadores jovens, mas rejeitam politicamente quem chega. Contradição estrutural.",
          },
          {
            texto: "Porque suas indústrias exigem trabalho manual pesado que a população local se recusa a fazer.",
            correta: false,
            explicacao:
              "É PARTE da razão, mas não a principal. A questão central é DEMOGRÁFICA (fecundidade abaixo da reposição) — sem imigração, o país inteiro encolhe, não só um setor.",
          },
          {
            texto: "Porque leis internacionais obrigam esses países a aceitar cotas anuais de imigrantes.",
            correta: false,
            explicacao:
              "Não existe tal obrigação legal geral. Cada país decide sua política migratória (respeitando o direito de refúgio). A necessidade vem da demografia, não de imposição externa.",
          },
        ],
      },
      {
        pergunta: "Por que a saída do Reino Unido da União Europeia (Brexit, 2016) é considerada um caso emblemático de xenofobia política?",
        opcoes: [
          {
            texto: "Foi decidida majoritariamente por preocupação com a chegada de trabalhadores europeus (poloneses, romenos), mesmo esses sendo essenciais para setores como saúde, agricultura e construção.",
            correta: true,
            explicacao:
              "Isso mesmo. Depois do Brexit, hospitais britânicos perderam enfermeiros europeus, fazendas ficaram sem colhedores, e o país entrou em crise de mão-de-obra. Realidade contrariou promessa política.",
          },
          {
            texto: "O Reino Unido saiu porque a UE se recusou a devolver o dinheiro pago em taxas.",
            correta: false,
            explicacao:
              "Argumentos fiscais fizeram parte da campanha, mas não foram os decisivos. Pesquisas mostraram que 'imigração descontrolada' foi o principal motivador do voto pelo 'Leave'.",
          },
          {
            texto: "A UE obrigava o Reino Unido a adotar o Euro, o que a população rejeitou.",
            correta: false,
            explicacao:
              "Falso: o Reino Unido NUNCA adotou o Euro (manteve a Libra). E a UE nunca o obrigou a adotar. Confusão comum sobre o funcionamento do bloco.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada situação em: migração ECONÔMICA, REFÚGIO (por perseguição/violência), ou refúgio CLIMÁTICO.",
      categorias: [
        { id: "economica", titulo: "Migração Econômica", cor: "cyan" },
        { id: "refugio", titulo: "Refúgio (Guerra/Perseguição)", cor: "amber" },
        { id: "climatico", titulo: "Refúgio Climático", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Brasileiro indo trabalhar como faxineira em Portugal para enviar dinheiro à família.", categoriaId: "economica" },
        { texto: "Sírios fugindo da guerra civil após 2011.", categoriaId: "refugio" },
        { texto: "Habitantes das ilhas Tuvalu perdendo suas casas para o mar por conta da subida do nível oceânico.", categoriaId: "climatico" },
        { texto: "Ucranianos deixando o país após a invasão russa de 2022.", categoriaId: "refugio" },
        { texto: "Mexicanos atravessando a fronteira sul dos EUA para trabalhar na agricultura da Califórnia.", categoriaId: "economica" },
        { texto: "Agricultores de Bangladesh migrando após enchentes que salinizaram suas terras.", categoriaId: "climatico" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um economista afirma que 'os países ricos rejeitam politicamente aquilo que precisam demograficamente'. Qual das alternativas explica esse paradoxo?",
      opcoes: [
        {
          texto:
            "Populações envelhecidas dos países desenvolvidos precisam de imigrantes para manter previdência e mercado de trabalho — mas medos identitários, insegurança econômica e discurso populista de extrema-direita geram rejeição política à imigração, mesmo quando ela é economicamente necessária.",
          correta: true,
        },
        {
          texto:
            "Os países ricos não precisam de imigrantes; a rejeição é apenas uma resposta cultural natural à diferença.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Perfeito. A contradição é estrutural. Alemanha precisa importar 400 mil trabalhadores por ano só para manter o sistema produtivo — mas partidos anti-imigração ganham eleições. Japão foi a extremos para NÃO importar imigrantes (automatizou muita coisa) e vive crise de mão-de-obra e cuidado com idosos. O medo do 'outro' vence a lógica econômica. Compreender isso é entender por que a xenofobia é hoje um dos maiores fatores de instabilidade política nos países ricos.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Analista de Fluxos Populacionais" },
  },

  // ============================================================
  // UNIDADE 5 — EUA e Hegemonia Global
  // ============================================================
  {
    unidade: 5,
    slug: "unidade-5-eua-hegemonia",
    titulo: "Os Estados Unidos e sua Hegemonia Global",
    habilidade: "EF08GE10 / EF08GE11",
    introducao_academica:
      "Por que o dólar americano circula em quase todo o planeta? Por que filmes, música e comida americanos são conhecidos até em vilarejos remotos? Por que o exército dos EUA tem bases em mais de 80 países? Vamos entender a hegemonia americana: uma forma de poder que combina economia, militar, tecnologia e CULTURA.",
    conteudo_pedagogico: {
      conceito_chave: "Hegemonia Econômica, Militar, Tecnológica e Cultural (Soft Power)",
      texto_teorico:
        "Hegemonia é a capacidade de um país de estabelecer regras que os outros seguem — não só pela força militar, mas também pelo peso econômico, pela liderança tecnológica e pela influência cultural (soft power). Os EUA são a única superpotência a exercer os quatro simultaneamente desde 1945.",
      etapas_teoricas: [
        {
          titulo: "Hegemonia Econômica — o dólar como moeda mundial",
          texto:
            "Os EUA têm a maior economia do mundo (~US$ 27 trilhões, 25% do PIB global) e o dólar é a moeda de reserva internacional: cerca de 60% das reservas dos bancos centrais mundiais são em dólar. Petróleo, ouro e commodities são cotados em dólar. Isso dá aos EUA um privilégio enorme — podem imprimir dinheiro que o mundo aceita.",
          exemplo_real:
            "Quando os EUA aplicam sanções financeiras a um país (Irã, Venezuela, Rússia), esse país perde acesso ao sistema de pagamentos internacionais (SWIFT), que roda majoritariamente em dólar. A economia sancionada colapsa rapidamente — é uma arma econômica poderosíssima, exclusiva dos EUA e da UE.",
          exemplos_extras: [
            "Alguns países tentam 'desdolarizar' o comércio para escapar dessa dependência. China, Rússia e alguns BRICS fazem transações em yuan, rublo e outras moedas. Mas a substituição total é lenta: o dólar tem inércia estrutural de 80 anos.",
            "A hegemonia do dólar começou em 1944, na Conferência de Bretton Woods, quando o mundo saía da 2ª Guerra e os EUA detinham 70% do ouro mundial. Foi a maior 'jogada' geopolítica do séc. XX: os EUA amarraram o mundo à sua moeda por meio século.",
          ],
        },
        {
          titulo: "Hegemonia Militar — bases em 80+ países",
          texto:
            "Os EUA gastam mais em defesa que os 10 países seguintes juntos (~US$ 850 bilhões/ano, ~40% do gasto militar mundial). Mantêm cerca de 750 bases militares em mais de 80 países — algo sem paralelo na história. A OTAN (aliança militar do Atlântico Norte) é liderada por eles.",
          exemplo_real:
            "A base de Ramstein na Alemanha é o centro logístico das operações americanas no Oriente Médio, Europa e África. Sozinha comporta 50 mil militares e famílias — praticamente uma cidade americana em solo europeu. Existem bases similares no Japão, Coreia do Sul, Turquia, Kuwait, Guam.",
          exemplos_extras: [
            "A OTAN foi criada em 1949 para defender a Europa Ocidental da URSS na Guerra Fria. Após a queda da URSS (1991), continuou existindo — e se expandiu para o leste, incorporando ex-países comunistas. Foi essa expansão que a Rússia (Putin) usa como justificativa para a invasão da Ucrânia em 2022.",
            "Após 11/09/2001, os EUA declararam 'guerra ao terror' e invadiram Afeganistão (2001) e Iraque (2003), mudando o cenário geopolítico mundial. Essas guerras custaram trilhões, mataram centenas de milhares e não trouxeram vitórias claras — abalaram a percepção da onipotência militar americana.",
          ],
        },
        {
          titulo: "Hegemonia Cultural — o soft power americano",
          texto:
            "Além de força econômica e militar (hard power), os EUA exercem SOFT POWER — a capacidade de convencer sem coagir, por atração cultural. Hollywood, Netflix, YouTube, Instagram, Coca-Cola, McDonald's, música pop, moda, universidades (Harvard, MIT, Stanford). O 'estilo de vida americano' virou aspiração global.",
          exemplo_real:
            "Filmes americanos representam ~70% da bilheteria de cinema no Brasil, ~90% na Argentina, ~60% na Europa. Uma criança nigeriana e uma criança japonesa cresceram assistindo os mesmos desenhos da Disney. É um poder cultural sem precedentes na história humana.",
          exemplos_extras: [
            "O termo 'soft power' foi criado pelo cientista político americano Joseph Nye. Ele argumenta que o soft power é mais duradouro que o hard: você pode ocupar um país com exército por décadas, mas se ele adotar sua língua, sua música e seus valores, você o dominou culturalmente sem uso de força.",
            "Nos últimos anos, a China tenta desenvolver seu próprio soft power (Instituto Confúcio, filmes, TikTok, K-pop chinês). Ainda é bem inferior ao americano — Hollywood permanece o principal exportador cultural do planeta. Mas o TikTok já é um game-changer.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Anatomia da Hegemonia Americana",
        descricao:
          "Diagrama das 4 dimensões do poder americano: Econômica (dólar), Militar (bases + OTAN), Tecnológica (Big Tech + Vale do Silício) e Cultural (Hollywood + Universidades + Mídias Sociais).",
        legenda:
          "Observe: nenhuma outra potência na história (Império Romano, Britânico) reuniu essas quatro dimensões simultaneamente. Por isso a hegemonia americana é qualitativamente única.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: Faça um experimento com um amigo. Peça a ele para citar 5 filmes que assistiu no último ano, 5 marcas de tecnologia que usa e 5 músicas que escutou. Provavelmente 80% será americano. Essa é a hegemonia cultural em ação. Você não precisa ir aos EUA para viver o 'American way of life' — ele vem até você via Netflix, iPhone, Spotify e Instagram. É poder sem fronteiras.",
      exemplo_visual:
        "Mapa-múndi destacando as principais bases militares americanas no exterior, os principais fluxos de exportação cultural (Hollywood) e a rota do dólar como moeda de reserva internacional.",
      imagem_analise: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que o dólar americano é chamado de 'moeda de reserva mundial'?",
        opcoes: [
          {
            texto: "Porque cerca de 60% das reservas dos bancos centrais mundiais são em dólar, e commodities globais (petróleo, ouro) são cotadas nessa moeda.",
            correta: true,
            explicacao:
              "Correto. É um privilégio único que os EUA garantiram em 1944 (Bretton Woods). Dá aos americanos poder de sancionar economicamente qualquer país cortando seu acesso ao sistema em dólar.",
          },
          {
            texto: "Porque é a única moeda oficialmente aceita pela ONU em transações internacionais.",
            correta: false,
            explicacao:
              "A ONU não define moeda de transação. É o mercado + a inércia histórica que consolidaram o dólar. Não há decreto oficial internacional.",
          },
          {
            texto: "Porque os EUA obrigam por lei todos os países a comprar dólares.",
            correta: false,
            explicacao:
              "Não há obrigação legal. A hegemonia do dólar vem da CONVENIÊNCIA (aceito globalmente) e da FORÇA americana — não de imposição por lei.",
          },
        ],
      },
      {
        pergunta: "O que é 'soft power' e por que os EUA são os maiores praticantes?",
        opcoes: [
          {
            texto: "É a capacidade de influenciar sem usar força, por atração cultural (filmes, música, marcas, universidades). Os EUA dominam Hollywood, Big Tech e cultura pop globais.",
            correta: true,
            explicacao:
              "Perfeito. Uma criança japonesa que cresce vendo Homem-Aranha já é 'meio americana' culturalmente. Isso constrói afinidade duradoura — muito mais eficiente que ocupar militarmente.",
          },
          {
            texto: "É o uso de armas leves em vez de bombas atômicas.",
            correta: false,
            explicacao:
              "Confusão comum. 'Soft' aqui NÃO se refere a armamento — é uma metáfora para poder de CONVENCIMENTO cultural, oposto ao 'hard power' (força militar/econômica).",
          },
          {
            texto: "É a política de baixar juros para incentivar consumo.",
            correta: false,
            explicacao:
              "Isso é política monetária, não soft power. Soft power é sobre INFLUÊNCIA CULTURAL, não sobre economia interna.",
          },
        ],
      },
      {
        pergunta: "As guerras dos EUA no Afeganistão (2001) e no Iraque (2003) tiveram qual efeito principal sobre a hegemonia americana?",
        opcoes: [
          {
            texto: "Abalaram a percepção de onipotência americana: apesar do gasto trilionário, não trouxeram vitórias claras e enfraqueceram a legitimidade dos EUA em ações militares posteriores.",
            correta: true,
            explicacao:
              "Correto. É o chamado 'declínio relativo' americano. Perdeu-se a aura de invencibilidade que existia após 1991 (queda da URSS). China e Rússia aproveitaram para se afirmar.",
          },
          {
            texto: "Fortaleceram absolutamente a hegemonia americana, consolidando o controle sobre o Oriente Médio.",
            correta: false,
            explicacao:
              "Nem em nível militar nem econômico as guerras foram vitórias. Os talibãs voltaram ao poder no Afeganistão em 2021, o Iraque virou um caos. Custou trilhões sem estabilidade.",
          },
          {
            texto: "Não tiveram efeito relevante na geopolítica global.",
            correta: false,
            explicacao:
              "Efeito enorme: crise do refugiados sírios, ascensão do ISIS, desestabilização de todo o Oriente Médio, aumento da dívida americana. Foram guerras geopoliticamente centrais.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada elemento em uma das 4 dimensões do poder americano.",
      categorias: [
        { id: "economico", titulo: "Econômico (Dólar/Wall St)", cor: "cyan" },
        { id: "militar", titulo: "Militar (Bases/OTAN)", cor: "amber" },
        { id: "cultural", titulo: "Cultural (Soft Power)", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Dólar cotando o preço internacional do petróleo (petrodólar).", categoriaId: "economico" },
        { texto: "Base militar de Ramstein na Alemanha, com 50 mil militares.", categoriaId: "militar" },
        { texto: "Filmes da Marvel e Disney assistidos em 190 países.", categoriaId: "cultural" },
        { texto: "Wall Street e a Bolsa de Nova York (NYSE) sendo a principal referência financeira global.", categoriaId: "economico" },
        { texto: "Aliança OTAN unindo EUA, Canadá e Europa em defesa mútua.", categoriaId: "militar" },
        { texto: "Netflix, TikTok (parcialmente), Instagram e Youtube — mídias sociais dominantes.", categoriaId: "cultural" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Muitos analistas afirmam que a hegemonia americana está em 'declínio relativo' no séc. XXI. Qual das alternativas explica melhor esse fenômeno?",
      opcoes: [
        {
          texto:
            "A ascensão da China (2ª economia global), a fadiga militar americana após Afeganistão/Iraque, a desdolarização parcial promovida por BRICS e as divisões internas dos EUA (polarização política) reduziram o peso relativo da hegemonia americana — sem que ela tenha desaparecido.",
          correta: true,
        },
        {
          texto:
            "Os EUA deixaram de ser potência mundial e foram substituídos pela União Europeia como líder do sistema internacional.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. 'Declínio relativo' NÃO significa que os EUA caíram — significa que os OUTROS subiram. Em 1991 (fim da URSS), os EUA eram sozinhos no topo. Hoje, disputam com China (economia), Rússia (militar em algumas áreas), Índia (crescimento demográfico) e blocos regionais. A hegemonia continua existindo — só não é mais absoluta. Estamos entrando em uma era MULTIPOLAR pela primeira vez desde 1945.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Analista de Poder Global" },
  },

  // ============================================================
  // UNIDADE 6 — África: Fronteiras Artificiais
  // ============================================================
  {
    unidade: 6,
    slug: "unidade-6-africa-fronteiras",
    titulo: "África: Fronteiras Artificiais e Desafios Socioeconômicos",
    habilidade: "EF08GE14 / EF08GE15",
    introducao_academica:
      "Se você olhar o mapa da África, vai notar algo estranho: várias fronteiras são LINHAS RETAS, como se alguém tivesse usado uma régua. Isso não é coincidência. É a herança da colonização europeia — que dividiu o continente sem consultar os povos que viviam ali. Vamos entender como esse ato do séc. XIX ainda determina guerras, pobreza e conflitos étnicos hoje.",
    conteudo_pedagogico: {
      conceito_chave: "Colonização Europeia, Fronteiras Artificiais e Neocolonialismo",
      texto_teorico:
        "A África moderna carrega feridas profundas de dois processos históricos: o tráfico de escravos (séc. XVI-XIX) e a partilha colonial (séc. XIX-XX). Compreender esses dois processos é essencial para entender por que o continente mais rico em recursos naturais do mundo é também o mais pobre em renda per capita.",
      etapas_teoricas: [
        {
          titulo: "Conferência de Berlim (1884-85) — a partilha da África",
          texto:
            "Em 1884, 14 potências europeias se reuniram em Berlim, na Alemanha, para dividir a África entre si — sem convidar nenhum representante africano. A regra era 'quem chegar primeiro, ocupa'. Em ~30 anos, o continente inteiro foi retalhado em colônias com fronteiras baseadas em latitudes, longitudes e rios — ignorando totalmente etnias, línguas e territórios tradicionais.",
          exemplo_real:
            "O povo Yorubá foi dividido entre Nigéria (colônia britânica) e Benin (colônia francesa) por uma fronteira reta. Famílias e clãs ficaram separados por linhas em um mapa. Isso vale para dezenas de etnias africanas: até hoje, boa parte das guerras civis (Congo, Ruanda, Sudão) tem origem nessa divisão arbitrária.",
          exemplos_extras: [
            "Antes da colonização, a África tinha reinos, impérios e federações organizados por critérios étnicos e culturais (Império Mali, Reino de Bunyoro, Reino do Congo). A partilha destruiu essas estruturas, forçando etnias inimigas a conviver como 'um só país' — sementes de conflitos futuros.",
            "Só dois países africanos escaparam formalmente da colonização europeia: Etiópia (que resistiu militarmente aos italianos em 1896) e Libéria (fundada por ex-escravos americanos em 1847). Todos os outros 52 países africanos foram colônias.",
          ],
        },
        {
          titulo: "Descolonização e Independências (1950-1975)",
          texto:
            "Após a 2ª Guerra Mundial, com a Europa enfraquecida, os movimentos de independência africanos ganharam força. Entre 1957 (Gana) e 1975 (Angola, Moçambique, Cabo Verde), quase todo o continente conquistou independência formal. Mas as fronteiras artificiais foram MANTIDAS — para evitar guerras generalizadas de reajuste territorial.",
          exemplo_real:
            "Kwame Nkrumah (Gana), Patrice Lumumba (Congo) e Nelson Mandela (África do Sul) são os grandes nomes da descolonização africana. Muitos foram assassinados ou presos por potências ocidentais que queriam manter influência econômica. Lumumba foi morto em 1961 com apoio da CIA e da Bélgica.",
          exemplos_extras: [
            "Angola e Moçambique se independentizaram de Portugal em 1975 — só DEPOIS da Revolução dos Cravos (1974), que derrubou a ditadura salazarista portuguesa. Ambos os países entraram em guerras civis longas (financiadas pelos EUA e pela URSS na Guerra Fria) que devastaram infraestrutura por décadas.",
            "A África do Sul teve caso especial: independente do Reino Unido em 1934, mas dominada por elite branca até 1994, quando o regime de APARTHEID (segregação racial oficial) caiu com a eleição de Mandela — considerada uma das maiores vitórias políticas do séc. XX.",
          ],
        },
        {
          titulo: "Neocolonialismo — o novo colonialismo econômico",
          texto:
            "Independência política não significou independência econômica. As multinacionais europeias, americanas — e, mais recentemente, chinesas — mantêm controle sobre minérios, petróleo, agricultura de exportação e infraestrutura da África. Chama-se NEOCOLONIALISMO. Boa parte do coltan (mineral crucial para celulares), do cobalto (baterias) e do urânio mundial vem do continente — mas o lucro fica no Norte.",
          exemplo_real:
            "A República Democrática do Congo tem uma das maiores reservas mundiais de cobalto (essencial para baterias de smartphones e carros elétricos). Cerca de 70% do cobalto mundial é extraído lá — muitas vezes por crianças em condições análogas à escravidão. As multinacionais europeias e chinesas compram por preços baixíssimos e vendem baterias caras aos consumidores globais.",
          exemplos_extras: [
            "A China é hoje o maior parceiro comercial da África, tendo ultrapassado a Europa. Investe em infraestrutura (Belt and Road) em troca de acesso a commodities. Alguns analistas veem como 'nova colonização'; outros, como oportunidade única para o continente se desenvolver.",
            "Existem exceções ao neocolonialismo: Botsuana geriu bem sua riqueza de diamantes e tem hoje IDH médio-alto. Ruanda, após o genocídio de 1994, virou referência de estabilidade e crescimento no leste africano. Nada é destino inevitável — políticas locais fazem diferença.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Colonização e neocolonialismo africanos",
        descricao:
          "Compare o mapa da África em 1913 (auge colonial, quase 100% europeu) com o mapa atual (54 países independentes) — e visualize as fronteiras retas herdadas de Berlim que continuam dividindo etnias e alimentando conflitos.",
        legenda:
          "Observe: as fronteiras não mudaram após as independências. Foi uma decisão pragmática (evitar guerras territoriais), mas com custo enorme em termos de conflitos étnicos internos.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: A bateria do seu celular provavelmente contém cobalto do Congo, extraído em condições precárias, muitas vezes por crianças. Ele foi refinado na China, montado em fábrica asiática e vendido pela Apple ou Samsung ao consumidor final. O trabalhador congolês recebe centavos; a Apple lucra centenas de dólares por celular. Essa cadeia global é, na prática, o neocolonialismo do séc. XXI — invisível, mas real em cada aparelho.",
      exemplo_visual:
        "Dois mapas lado a lado: África em 1913 (colonizada, dominada por 7 potências europeias em cores distintas) × África hoje (54 países independentes, mas com as mesmas fronteiras retas herdadas).",
      imagem_analise: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que várias fronteiras africanas são linhas retas no mapa?",
        opcoes: [
          {
            texto: "Foram traçadas na Conferência de Berlim (1884-85) por potências europeias usando latitudes, longitudes e rios — sem consultar os povos africanos.",
            correta: true,
            explicacao:
              "Correto. É a herança da 'partilha da África'. Fronteiras que ignoram etnias e territórios tradicionais criaram Estados sem coesão interna — origem de muitas guerras civis atuais.",
          },
          {
            texto: "Foram estabelecidas pelos próprios povos africanos após as independências dos anos 1960.",
            correta: false,
            explicacao:
              "Exatamente o oposto. Os povos africanos preferiam fronteiras étnicas. As linhas retas foram IMPOSTAS pelos colonizadores europeus muito antes das independências.",
          },
          {
            texto: "São fronteiras naturais definidas pelo deserto do Saara e outros acidentes geográficos.",
            correta: false,
            explicacao:
              "Fronteiras naturais SEGUEM a geografia (rios, montanhas) e são irregulares. As linhas retas africanas IGNORAM a geografia — sinal claro de que foram artificiais.",
          },
        ],
      },
      {
        pergunta: "O que significa NEOCOLONIALISMO no contexto africano contemporâneo?",
        opcoes: [
          {
            texto: "Manutenção da dominação econômica por multinacionais europeias, americanas e chinesas sobre recursos africanos (minerais, petróleo, terras) mesmo após a independência política formal.",
            correta: true,
            explicacao:
              "Perfeito. Independência política não trouxe independência econômica. As riquezas continuam sendo extraídas por corporações estrangeiras, com lucros indo para o Norte.",
          },
          {
            texto: "É a volta do colonialismo tradicional, com países europeus reocupando militarmente a África.",
            correta: false,
            explicacao:
              "Não há reocupação militar formal. O neocolonialismo é ECONÔMICO (via multinacionais e endividamento), não militar. É por isso que ganhou o prefixo 'NEO' (novo).",
          },
          {
            texto: "É o processo de países africanos colonizarem países europeus por meio de imigração.",
            correta: false,
            explicacao:
              "A imigração africana para a Europa existe, mas não é 'colonização'. Neocolonialismo refere-se ao FLUXO INVERSO: exploração econômica da África por potências externas.",
          },
        ],
      },
      {
        pergunta: "A República Democrática do Congo produz cerca de 70% do cobalto mundial (essencial para baterias de celulares e carros elétricos). Por que a população congolesa não enriquece com essa riqueza?",
        opcoes: [
          {
            texto: "A extração é feita por multinacionais estrangeiras que pagam preços baixíssimos aos trabalhadores locais (muitos são crianças em condições precárias) e exportam a matéria-prima bruta; o lucro maior fica no exterior.",
            correta: true,
            explicacao:
              "Isso mesmo. É o clássico modelo neocolonial: África exporta matéria-prima barata, Norte processa e exporta produtos caros de volta. O valor agregado fica todo fora.",
          },
          {
            texto: "Porque a população congolesa se recusa a trabalhar nas minas por motivos religiosos.",
            correta: false,
            explicacao:
              "Falso e ofensivo. Existe intensa exploração de trabalho (inclusive infantil) nas minas do Congo. O problema NÃO é falta de trabalho — é a estrutura de exploração.",
          },
          {
            texto: "Porque o cobalto congolês tem qualidade ruim e não é valorizado no mercado internacional.",
            correta: false,
            explicacao:
              "Ao contrário: o cobalto do Congo é altamente valorizado e disputado (é insumo estratégico para baterias). O que é 'ruim' é a distribuição da renda gerada por ele.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada fato/situação em: COLONIZAÇÃO (séc. XIX-XX), DESCOLONIZAÇÃO (1950-75) ou NEOCOLONIALISMO (atual).",
      categorias: [
        { id: "colonizacao", titulo: "Colonização", cor: "amber" },
        { id: "descolonizacao", titulo: "Descolonização", cor: "cyan" },
        { id: "neocolonial", titulo: "Neocolonialismo", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Conferência de Berlim divide a África entre 14 potências europeias sem consultar africanos.", categoriaId: "colonizacao" },
        { texto: "Independência de Gana (1957) sob liderança de Kwame Nkrumah.", categoriaId: "descolonizacao" },
        { texto: "Multinacionais compram cobalto do Congo por preços baixíssimos para baterias de celulares.", categoriaId: "neocolonial" },
        { texto: "Portugal reconhece independência de Angola e Moçambique em 1975.", categoriaId: "descolonizacao" },
        { texto: "China investe em infraestrutura africana em troca de acesso a minerais estratégicos (Belt and Road).", categoriaId: "neocolonial" },
        { texto: "Rei Leopoldo II da Bélgica transforma o Congo em sua propriedade pessoal (Estado Livre do Congo).", categoriaId: "colonizacao" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um historiador africano afirma: 'A pobreza da África NÃO é um destino natural — é o resultado histórico da colonização e do neocolonialismo'. Qual das alternativas melhor sustenta essa tese?",
      opcoes: [
        {
          texto:
            "As fronteiras artificiais impostas em Berlim (1884-85) destruíram estruturas políticas tradicionais e geraram conflitos étnicos crônicos; simultaneamente, o modelo econômico extrativista mantido após as independências transfere continuamente valor da África para os países ricos, impedindo o acúmulo interno de capital e desenvolvimento tecnológico.",
          correta: true,
        },
        {
          texto:
            "A pobreza da África se deve exclusivamente ao clima tropical, que impede o desenvolvimento econômico em regiões quentes.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise. A explicação climática (determinismo geográfico) é rasa: várias regiões tropicais do mundo prosperaram (Singapura, Malásia, Costa Rica). O que explica a pobreza estrutural africana são fatores HISTÓRICOS E POLÍTICOS: 400 anos de tráfico de escravos que sangrou o continente demograficamente, 80 anos de colonização que destruiu estruturas produtivas locais, fronteiras artificiais que criam conflitos étnicos permanentes, e um modelo econômico atual que continua drenando recursos. Pobreza não é destino — é herança construída.",
    },
    recompensas: { xp: 600, moedas: 400, titulo: "Historiador das Fronteiras Coloniais" },
  },

  // ============================================================
  // UNIDADE 7 — América Latina: Dependência e Diversidade
  // ============================================================
  {
    unidade: 7,
    slug: "unidade-7-america-latina",
    titulo: "América Latina: Dependência Econômica e Diversidade",
    habilidade: "Consolidação Geral",
    introducao_academica:
      "A América Latina tem população indígena milenar, herança colonial ibérica, presença africana pela escravidão, imigração europeia e asiática, e diversidade natural única. Ao mesmo tempo, carrega uma marca comum: séculos de dependência econômica externa. Vamos consolidar o 8º ano entendendo como esse continente vizinho ao Brasil se organiza — e por que enfrenta os mesmos desafios estruturais.",
    conteudo_pedagogico: {
      conceito_chave: "Teoria da Dependência, Populismo e Integração Regional",
      texto_teorico:
        "A América Latina compreende 20 países, cerca de 660 milhões de habitantes, e uma das maiores reservas naturais do planeta (Amazônia, Cordilheira dos Andes, Pampas). Historicamente, foi colônia da Espanha (a maior parte), Portugal (Brasil), França (Haiti, Guiana Francesa), Reino Unido e Holanda. As independências ocorreram entre 1810-1830 — mas a estrutura econômica dependente se manteve.",
      etapas_teoricas: [
        {
          titulo: "Herança Colonial e Independências",
          texto:
            "A América Latina foi colônia entre 1492 e 1830. A colonização espanhola criou vice-reinos (Nova Espanha/México, Peru, Nova Granada, Rio da Prata) com forte exploração de metais preciosos (Potosí, Zacatecas). A portuguesa focou em cana-de-açúcar e ouro. As independências ocorreram entre 1810-1830, lideradas por figuras como Simón Bolívar (Grã-Colômbia) e San Martín (Argentina, Chile, Peru).",
          exemplo_real:
            "Bolívar sonhava com uma 'Grã-Colômbia' unificada — do México à Argentina. Fracassou: elites locais preferiram fragmentar o continente em 20 países pequenos. Se tivesse dado certo, a América Latina hoje seria uma superpotência do tamanho da União Europeia.",
          exemplos_extras: [
            "O Brasil teve independência diferente: foi um golpe interno da elite portuguesa (D. Pedro I) em 1822, sem guerra generalizada como no resto da AL. Isso preservou a monarquia até 1889, mantendo a escravidão até 1888 — a mais longa das Américas.",
            "A América Central e o Caribe têm história ainda mais atribulada: Haiti foi a PRIMEIRA república negra do mundo (1804, após revolta de escravos). Foi punido com pesadas indenizações à França por décadas — o que o mantém como país mais pobre das Américas até hoje.",
          ],
        },
        {
          titulo: "Teoria da Dependência — o subdesenvolvimento como estrutura",
          texto:
            "Nos anos 60-70, economistas latino-americanos (Celso Furtado, Fernando Henrique Cardoso, Raúl Prebisch) formularam a Teoria da Dependência: o subdesenvolvimento da AL não é 'atraso' que será superado com tempo; é uma POSIÇÃO ESTRUTURAL no sistema mundial. Somos periferia porque enviamos matéria-prima e capitais para o centro, que exporta produtos industrializados e tecnologia de volta.",
          exemplo_real:
            "O Chile é o maior produtor mundial de cobre — mas a indústria de fios de cobre e componentes eletrônicos está no Japão, Coreia e EUA. O Chile exporta o minério bruto; importa o produto acabado. Perde valor agregado no processo. É a Teoria da Dependência em uma commodity.",
          exemplos_extras: [
            "A Teoria da Dependência gerou várias correntes políticas na AL: nacionalismo desenvolvimentista (Getúlio Vargas no Brasil, Perón na Argentina), socialismos revolucionários (Cuba, Chile de Allende, Nicarágua sandinista) e depois populismos de esquerda (Chávez, Lula, Correa, Morales).",
            "Nas últimas décadas, alguns países latino-americanos tentaram QUEBRAR a dependência via industrialização. Brasil e México chegaram a ter indústrias fortes (anos 60-80), mas depois recuaram (reprimarização). Chile diversificou serviços. Nenhum saiu totalmente do modelo dependente.",
          ],
        },
        {
          titulo: "Diversidade Regional e Integração",
          texto:
            "Apesar de compartilhar heranças coloniais e desafios, a AL é muito diversa: México (federação industrial + narcotráfico), América Central (economias pequenas, fluxos migratórios), Andina (Bolívia, Peru, Equador — grande população indígena), Cone Sul (Brasil, Argentina, Chile, Uruguai — economias maiores e urbanas), Caribe (turismo + herança africana). Existem várias tentativas de integração: Mercosul, ALADI, UNASUL, CELAC.",
          exemplo_real:
            "O Mercosul, criado em 1991 (Brasil, Argentina, Uruguai, Paraguai + associados), buscava criar um mercado comum sul-americano. Está travado desde 2016 nas negociações com a UE. Vizinhos que deveriam integrar-se comercialmente ainda enfrentam barreiras protecionistas e políticas divergentes.",
          exemplos_extras: [
            "A CELAC (Comunidade dos Estados Latino-Americanos e Caribenhos) foi criada em 2010 como alternativa à OEA (dominada pelos EUA). Reúne 33 países da AL sem a presença norte-americana. É uma tentativa de coordenação política mais autônoma.",
            "México é um caso à parte: apesar de latino-americano, tem 80% do seu comércio com os EUA (via USMCA, antigo NAFTA). Está economicamente integrado à América do Norte, não à América Latina. É um dos exemplos mais claros de dependência bilateral extrema.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa da América Latina",
        descricao:
          "Visualize os 20 países latino-americanos, suas sub-regiões (México, América Central, Andina, Cone Sul, Caribe) e os principais blocos de integração (Mercosul, Aliança do Pacífico, CELAC).",
        legenda:
          "Observe: apesar de compartilhar heranças coloniais ibéricas e a Teoria da Dependência, a AL é fragmentada politicamente. As tentativas de integração enfrentam décadas de dificuldade.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "💰 INSIGHT MACRO: Compare a integração da União Europeia com a da América Latina. UE: 27 países, moeda única, livre circulação de pessoas, parlamento eleito. Mercosul: 4 países + associados, sem moeda comum, com vistos, sem parlamento supranacional. Ambos foram criados em datas próximas (UE virou o que é em 1993; Mercosul em 1991). A diferença de integração explica boa parte da diferença de peso econômico global entre os dois blocos hoje. Integração é escolha política — e a AL tem historicamente escolhido a fragmentação.",
      exemplo_visual:
        "Mapa da América Latina destacando as 5 sub-regiões culturais/geográficas e os principais fluxos econômicos (petróleo venezuelano, soja argentina/brasileira, cobre chileno, remessas centro-americanas).",
      imagem_analise: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que argumenta a Teoria da Dependência formulada por economistas latino-americanos?",
        opcoes: [
          {
            texto: "O subdesenvolvimento da América Latina não é 'atraso' que se supera com tempo — é uma POSIÇÃO ESTRUTURAL no sistema mundial: enviamos matéria-prima e capital ao centro, que exporta produtos industrializados de volta.",
            correta: true,
            explicacao:
              "Perfeito. Foi uma quebra de paradigma nos anos 60. Mostrou que 'esperar desenvolver' era ingênuo — só desenvolveria quem quebrasse a lógica exportadora primária.",
          },
          {
            texto: "A América Latina se atrasou economicamente porque seus governos não investiram em educação nos anos 60-70.",
            correta: false,
            explicacao:
              "Explicação simplista. A Teoria da Dependência aponta causas ESTRUTURAIS (posição no sistema mundial), não meramente decisões internas. Foi uma crítica ao 'desenvolvimentismo' otimista.",
          },
          {
            texto: "Os países latino-americanos são naturalmente ineficientes e não conseguem competir globalmente.",
            correta: false,
            explicacao:
              "É uma explicação racista/culturalista, sem base científica. A Teoria da Dependência NÃO culpa as pessoas latino-americanas — culpa as ESTRUTURAS econômicas globais.",
          },
        ],
      },
      {
        pergunta: "Por que o sonho de Simón Bolívar de uma 'Grã-Colômbia' unificada FRACASSOU?",
        opcoes: [
          {
            texto: "As elites locais de cada região preferiram fragmentar o continente em 20 países pequenos, cada uma consolidando poder econômico e político em seu território.",
            correta: true,
            explicacao:
              "Correto. É um caso clássico de como interesses de elite podem superar visões geopolíticas grandiosas. Se tivesse dado certo, hoje teríamos uma AL do tamanho da União Europeia.",
          },
          {
            texto: "Porque as potências europeias invadiram a América Latina novamente e impediram a unificação.",
            correta: false,
            explicacao:
              "Não houve reinvasão. As independências foram consolidadas nos anos 1810-1830. A fragmentação foi INTERNA (das elites locais), não imposta externamente.",
          },
          {
            texto: "Porque os EUA fizeram uma guerra contra Bolívar e o derrotaram militarmente.",
            correta: false,
            explicacao:
              "Sem base histórica. Os EUA ainda eram país pequeno nessa época. A fragmentação da Grã-Colômbia (1830) foi por conflitos entre elites de Venezuela, Colômbia e Equador.",
          },
        ],
      },
      {
        pergunta: "México é chamado por analistas de 'exceção latino-americana' porque:",
        opcoes: [
          {
            texto: "Tem 80% do seu comércio com os EUA (via USMCA), estando economicamente mais integrado à América do Norte do que à América Latina.",
            correta: true,
            explicacao:
              "Exato. Compartilha fronteira de 3.145 km com os EUA e depende disso economicamente. É o clássico caso de 'proximidade excessiva' com uma superpotência — vantagem e vulnerabilidade ao mesmo tempo.",
          },
          {
            texto: "O México não fala espanhol como o resto da América Latina.",
            correta: false,
            explicacao:
              "Falso. México é o MAIOR país hispanófono do mundo (mais falantes de espanhol que a Espanha). Sua exceção é econômica/geopolítica, não linguística.",
          },
          {
            texto: "O México tem monarquia, diferente das repúblicas latino-americanas.",
            correta: false,
            explicacao:
              "Falso. O México é uma república federal desde 1824. Nunca foi monarquia (a exceção monárquica na AL foi o Brasil, até 1889).",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada país/região em sua sub-região da América Latina.",
      categorias: [
        { id: "andina", titulo: "Região Andina", cor: "cyan" },
        { id: "cone_sul", titulo: "Cone Sul", cor: "amber" },
        { id: "america_central", titulo: "América Central/Caribe", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Peru — grande população indígena e antiga capital do Império Inca.", categoriaId: "andina" },
        { texto: "Argentina — economia com forte pecuária pampeana e agricultura.", categoriaId: "cone_sul" },
        { texto: "Costa Rica — polo turístico e ambiental sem exército.", categoriaId: "america_central" },
        { texto: "Bolívia — maior reserva mundial de lítio no Salar de Uyuni.", categoriaId: "andina" },
        { texto: "Cuba — economia socialista com forte presença cultural na música mundial.", categoriaId: "america_central" },
        { texto: "Chile — maior produtor global de cobre com economia diversificada.", categoriaId: "cone_sul" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um analista compara a União Europeia (27 países, moeda única, cidadania comum) com o Mercosul (4 países principais, sem moeda comum, com vistos). Considerando a Teoria da Dependência e a fragmentação latino-americana, qual é a MELHOR interpretação do desafio da América Latina no séc. XXI?",
      opcoes: [
        {
          texto:
            "A fragmentação política impede que a América Latina negocie coletivamente com potências (EUA, China, UE), perpetuando a dependência estrutural. Uma integração real (nos moldes da UE) exigiria décadas de coordenação política — desafio agravado pelas divergências ideológicas entre governos e pelos interesses de elites locais.",
          correta: true,
        },
        {
          texto:
            "A América Latina já superou completamente a dependência econômica e não precisa mais de integração — cada país negocia individualmente com sucesso.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. Parabéns por concluir o 8º ano de Geografia. Você agora entende que a AL enfrenta um paradoxo estrutural: compartilha problemas comuns (dependência de commodities, desigualdade, herança colonial) que só poderiam ser resolvidos coletivamente — mas politicamente age de forma fragmentada. A UE só funciona porque os países cederam soberania parcial em nome de um projeto comum. Na AL, esse tipo de cessão nunca foi possível — daí a repetição do ciclo dependência-crise-populismo-dependência ao longo de 200 anos de independências.",
    },
    recompensas: { xp: 1500, moedas: 800, titulo: "Analista Geopolítico da América Latina" },
  },
];

export function getUnidade8ano(slug: string): UnidadeFund2 | undefined {
  return UNIDADES_8ANO.find((u) => u.slug === slug);
}

export function getProximaUnidade8ano(slug: string): UnidadeFund2 | undefined {
  const i = UNIDADES_8ANO.findIndex((u) => u.slug === slug);
  return i >= 0 && i + 1 < UNIDADES_8ANO.length ? UNIDADES_8ANO[i + 1] : undefined;
}
