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
          exemplos_extras: [
            "Os furacões do Hemisfério Norte giram no sentido anti-horário e os do Hemisfério Sul no sentido horário. Isso não é coincidência: é o Efeito de Coriolis (consequência da rotação) desviando o ar em direções opostas nos dois hemisférios.",
            "Astronautas na Estação Espacial Internacional veem 16 nasceres do Sol por dia. Como a estação orbita rapidamente enquanto a Terra também gira, eles atravessam o ciclo dia/noite a cada 90 minutos — mostrando que 'dia' e 'noite' dependem inteiramente da rotação.",
          ],
        },
        {
          titulo: "Movimento de Translação — a grande viagem",
          texto:
            "Ao mesmo tempo em que gira sobre si, a Terra viaja ao redor do Sol. Essa viagem demora 365 dias e 6 horas — é o que chamamos de um ano.",
          visual: "translacao",
          exemplo_real:
            "Aquelas 6 horas extras se acumulam: a cada 4 anos elas somam 24 horas = 1 dia inteiro. Por isso existe o ano bissexto (2020, 2024, 2028…), em que fevereiro ganha o dia 29 pra encaixar a viagem certinha.",
          exemplos_extras: [
            "A órbita da Terra não é um círculo perfeito, é uma elipse. Em janeiro estamos no ponto mais próximo do Sol (periélio, ~147 milhões de km); em julho, no mais distante (afélio, ~152 milhões de km). Ou seja: no verão do Brasil estamos MAIS PERTO do Sol — as estações não dependem da distância, e sim da inclinação.",
            "A Terra viaja pelo espaço a cerca de 107 mil km/h — mais rápido que qualquer foguete já construído. Você não sente porque tudo à sua volta (ar, prédios, atmosfera) se move junto, como num carro em velocidade constante numa estrada perfeita.",
          ],
        },
        {
          titulo: "Inclinação do Eixo — o segredo das estações",
          texto:
            "O planeta não gira 'em pé': o eixo é inclinado em 23°27'. Por causa disso, enquanto a Terra viaja ao redor do Sol, um hemisfério recebe mais luz e calor diretamente do que o outro — e é isso que dá origem às quatro estações do ano.",
          visual: "inclinacao",
          exemplo_real:
            "Quando é Natal (dezembro) no Brasil, é verão — praia, calor, dias longos. No mesmo Natal em Nova York é inverno — neve, frio, dias curtos. A festa é a mesma, mas a estação é oposta por causa da inclinação da Terra.",
          exemplos_extras: [
            "Em cidades como Tromsø, na Noruega (dentro do Círculo Polar Ártico), o Sol NÃO SE PÕE por semanas seguidas em junho (Sol da Meia-Noite) e NÃO NASCE por semanas em dezembro (Noite Polar). O motivo é justamente a inclinação: em certas épocas, os polos ficam totalmente virados para ou contra o Sol.",
            "No Equador (latitude 0°), o dia dura praticamente 12 horas e a noite 12 horas o ano inteiro, sem estações marcadas — só 'seca' e 'chuvosa'. Isso acontece porque a inclinação afeta pouco quem está bem no meio do planeta; ela pesa muito mais nos hemisférios extremos.",
          ],
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

    quiz_relampago: [
      {
        pergunta: "Se a Terra parasse de girar sobre si mesma, o que aconteceria primeiro?",
        opcoes: [
          {
            texto: "Um lado do planeta ficaria em Dia permanente e o outro em Noite permanente.",
            correta: true,
            explicacao:
              "Correto. É a rotação que produz o ciclo dia/noite. Sem ela, o hemisfério voltado para o Sol ferveria e o oposto congelaria — a vida como conhecemos só é possível porque giramos a cada 24h.",
          },
          {
            texto: "As estações do ano deixariam de existir.",
            correta: false,
            explicacao:
              "Quase — mas você misturou dois movimentos. As estações dependem da INCLINAÇÃO + TRANSLAÇÃO, não da rotação. A rotação controla apenas o ciclo dia/noite.",
          },
          {
            texto: "O ano deixaria de ter 365 dias.",
            correta: false,
            explicacao:
              "Não. A duração do ano vem da TRANSLAÇÃO (volta ao redor do Sol), que é um movimento independente da rotação. A Terra continuaria orbitando o Sol em 365 dias mesmo parada em si.",
          },
        ],
      },
      {
        pergunta: "Por que o Natal no Brasil é no verão e nos Estados Unidos é no inverno, se é o mesmo dia?",
        opcoes: [
          {
            texto: "Porque a inclinação da Terra faz cada hemisfério receber mais ou menos luz solar direta em cada época do ano.",
            correta: true,
            explicacao:
              "Perfeito. Em dezembro o eixo faz o Hemisfério Sul (Brasil) apontar mais para o Sol — verão pra nós. Ao mesmo tempo, o Hemisfério Norte (EUA) fica virado para longe — inverno lá.",
          },
          {
            texto: "Porque o Brasil está mais perto do Sol que os Estados Unidos.",
            correta: false,
            explicacao:
              "Não. Brasil e EUA estão praticamente à mesma distância do Sol. A distância entre países é insignificante comparada aos 150 milhões de km que nos separam do Sol.",
          },
          {
            texto: "Porque a Terra gira em torno de si mesma no sentido oposto no verão.",
            correta: false,
            explicacao:
              "A Terra sempre gira no mesmo sentido (Oeste → Leste). O que muda com as estações é o hemisfério que recebe raios solares mais diretos, por causa da inclinação do eixo.",
          },
        ],
      },
      {
        pergunta: "Um ano bissexto (com 29 de fevereiro) acontece porque…",
        opcoes: [
          {
            texto: "A viagem da Terra ao redor do Sol dura 365 dias E 6 horas — a cada 4 anos essas horas viram 1 dia extra.",
            correta: true,
            explicacao:
              "Isso mesmo. O calendário 'arredonda' para 365 dias, mas sobram 6 horas por ano. Em 4 anos = 24 h = 1 dia. Se não tivéssemos o bissexto, o calendário sairia do lugar em relação às estações.",
          },
          {
            texto: "A Terra gira mais devagar de 4 em 4 anos.",
            correta: false,
            explicacao:
              "Não. A velocidade de rotação e translação é praticamente constante. O bissexto é só um ajuste do calendário humano à realidade astronômica: 365,25 dias por volta.",
          },
          {
            texto: "A Lua empurra a Terra e faz o ano ficar mais longo a cada 4 anos.",
            correta: false,
            explicacao:
              "A Lua realmente influencia a Terra (marés, por exemplo), mas não é ela que gera o bissexto. O motivo é puramente matemático: a translação leva 365,25 dias, e precisamos compensar as frações.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada frase abaixo é uma consequência de UM dos três movimentos da Terra. Toque em cada cartão e escolha a categoria correta.",
      categorias: [
        { id: "rotacao", titulo: "Rotação", cor: "cyan" },
        { id: "translacao", titulo: "Translação", cor: "amber" },
        { id: "inclinacao", titulo: "Inclinação do Eixo", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Depois de 24 horas volta a amanhecer no mesmo lugar.", categoriaId: "rotacao" },
        { texto: "A cada 4 anos precisamos de um ano bissexto.", categoriaId: "translacao" },
        {
          texto: "No Círculo Polar o Sol pode não se pôr por semanas em junho.",
          categoriaId: "inclinacao",
        },
        {
          texto: "Furacões giram em sentidos opostos nos dois hemisférios (Efeito de Coriolis).",
          categoriaId: "rotacao",
        },
        {
          texto: "Quando é Natal no Brasil é verão, e nos EUA é inverno.",
          categoriaId: "inclinacao",
        },
        {
          texto: "A Terra viaja a 107 mil km/h ao longo de uma órbita elíptica.",
          categoriaId: "translacao",
        },
      ],
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
          exemplos_extras: [
            "Cingapura fica em ~1° N (praticamente sobre o Equador). Resultado: temperatura média de 27°C o ano inteiro, sem inverno. Já Moscou está em ~55° N — inverno com −15°C. A diferença brutal não é de país rico ou pobre: é de latitude.",
            "Os Trópicos de Câncer (23,5° N) e de Capricórnio (23,5° S) marcam os limites onde o Sol chega a bater a pino ao meio-dia em algum momento do ano. Fora desse cinturão, o Sol nunca fica exatamente sobre a sua cabeça — a latitude decide isso.",
          ],
        },
        {
          titulo: "Meridianos & Longitude — o endereço Leste-Oeste",
          texto:
            "Os Meridianos são semicírculos verticais que vão de polo a polo. O Meridiano de Greenwich (0°), na Inglaterra, é o marco zero mundial. A distância angular até Greenwich chama-se Longitude e vai de 0° a 180° — para o Leste (L) ou para o Oeste (O). É a longitude que define os fusos horários.",
          visual: "longitude",
          exemplo_real:
            "Brasília está em ~47° O e Tóquio em ~139° L — separadas por quase 180° de longitude. Por isso, quando é meio-dia aqui, já é a madrugada seguinte no Japão: cada 15° de longitude ≈ 1 hora de fuso.",
          exemplos_extras: [
            "A Linha Internacional de Data fica em ~180° de longitude, no meio do Pacífico. Quem cruza ela de avião indo para o Leste 'volta no tempo' 24 horas; indo para o Oeste, 'pula' um dia. Não é ficção: é geografia pura resolvendo o encontro do Leste com o Oeste.",
            "O Brasil tem 4 fusos horários (do Acre a Fernando de Noronha) justamente por causa da sua enorme extensão em longitude — quase 40° de leste a oeste. Já a China, mesmo sendo gigante em latitude, usa um único fuso oficial por decisão política, não geográfica.",
          ],
        },
        {
          titulo: "Projeções Cartográficas — planificando o planeta",
          texto:
            "A Terra é redonda, mas os mapas são planos. Toda vez que 'esticamos' a esfera para caber em uma folha, alguma coisa se deforma: ou as formas dos continentes, ou o tamanho real das áreas. Cada projeção resolve isso de um jeito diferente e revela uma visão política do mundo.",
          visual: "projecoes",
          exemplo_real:
            "Na Projeção de Mercator (a mais famosa), a Groenlândia parece maior que a África — mas a África real é 14× maior! Já a Projeção de Peters mostra os continentes com áreas proporcionais corretas, valorizando países tropicais. Não existe mapa 'neutro' — todo mapa é uma escolha.",
          exemplos_extras: [
            "Mercator foi criada em 1569 para navegação: preserva ângulos, então um navio podia traçar uma rota reta e seguir a bússola sem erro. Mas ao esticar as áreas polares, deu ao Hemisfério Norte uma imagem visualmente 'maior' — o que muitos historiadores associam à visão colonial europeia do mundo.",
            "A Google usa uma variante da Mercator no Google Maps por um motivo técnico: ela mantém formas locais fiéis, o que é ideal para navegar rua a rua. Mas se você abrir o mapa-múndi bem 'zoom-out', vai ver a Antártida do tamanho de todos os continentes juntos — pura distorção de projeção.",
          ],
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
    quiz_relampago: [
      {
        pergunta: "Um GPS mostra a coordenada −22,9° / −43,2°. O que o sinal de menos significa?",
        opcoes: [
          {
            texto: "Latitude negativa = Hemisfério Sul; Longitude negativa = a Oeste de Greenwich.",
            correta: true,
            explicacao:
              "Exato. Essas coordenadas são do Rio de Janeiro: 22,9° ao Sul do Equador e 43,2° a Oeste do Meridiano de Greenwich. O sinal é a convenção matemática dos hemisférios.",
          },
          {
            texto: "Que o GPS perdeu o sinal e está mostrando valores inválidos.",
            correta: false,
            explicacao:
              "Não. Coordenadas negativas são totalmente válidas — são o padrão para indicar Sul (latitude) e Oeste (longitude). Todo GPS do mundo usa essa convenção.",
          },
          {
            texto: "Que o ponto fica abaixo do nível do mar.",
            correta: false,
            explicacao:
              "Cuidado: latitude e longitude são posições HORIZONTAIS na superfície da Terra. Altitude (profundidade) é um terceiro número, medido em metros, não em graus.",
          },
        ],
      },
      {
        pergunta: "Por que na Projeção de Mercator a Groenlândia parece do tamanho da África?",
        opcoes: [
          {
            texto: "Porque a projeção estica as áreas próximas aos polos para preservar as formas e os ângulos de navegação.",
            correta: true,
            explicacao:
              "Isso mesmo. Mercator foi desenhada para marinheiros: mantém formas locais e ângulos precisos, mas o custo é distorcer o TAMANHO das regiões polares. A África real é ~14× maior que a Groenlândia.",
          },
          {
            texto: "Porque a Groenlândia realmente é do tamanho da África, só que coberta de gelo.",
            correta: false,
            explicacao:
              "Não. Groenlândia tem ~2,2 milhões km²; África tem ~30 milhões km². A ilusão é 100% da projeção — na Projeção de Peters ou num globo real, você vê o tamanho verdadeiro.",
          },
          {
            texto: "Porque a Terra é achatada nos polos, então tudo lá em cima fica maior.",
            correta: false,
            explicacao:
              "A Terra é levemente achatada nos polos, mas o efeito é pequeno (~40 km numa esfera de 12.700 km). A distorção que você vê no mapa é matemática da projeção, não geometria do planeta.",
          },
        ],
      },
      {
        pergunta: "São Paulo está a ~46° O e o Cairo (Egito) a ~31° L. Quantos fusos horários (aproximadamente) separam as duas cidades?",
        opcoes: [
          {
            texto: "Aproximadamente 5 fusos, porque a diferença total é ~77° de longitude e cada fuso vale 15°.",
            correta: true,
            explicacao:
              "Perfeito. 46 + 31 = 77° de diferença. 77 ÷ 15 ≈ 5,1. Por isso, quando é meio-dia em São Paulo, no Cairo já são ~17h. Longitude e fuso horário andam sempre juntos.",
          },
          {
            texto: "Nenhum, porque estão na mesma latitude aproximada.",
            correta: false,
            explicacao:
              "Cuidado com a mistura: LATITUDE (Norte-Sul) não influencia fuso. Quem manda no fuso é a LONGITUDE (Leste-Oeste), porque a Terra gira em torno do próprio eixo — não Norte-Sul.",
          },
          {
            texto: "12 fusos, porque estão em hemisférios diferentes.",
            correta: false,
            explicacao:
              "12 fusos seria meio mundo de distância (~180°). Aqui a diferença real é bem menor: ~77°, o que dá cerca de 5 fusos. Hemisférios opostos em latitude não mudam a hora.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada frase abaixo pertence a UM dos três conceitos-chave da cartografia. Classifique cada cartão na categoria correta.",
      categorias: [
        { id: "latitude", titulo: "Latitude (Paralelos)", cor: "cyan" },
        { id: "longitude", titulo: "Longitude (Meridianos)", cor: "amber" },
        { id: "projecoes", titulo: "Projeções Cartográficas", cor: "emerald" },
      ],
      cartoes: [
        { texto: "A Linha do Equador (0°) é o marco zero desse sistema.", categoriaId: "latitude" },
        { texto: "O Meridiano de Greenwich (0°) é o marco zero desse sistema.", categoriaId: "longitude" },
        { texto: "Define os fusos horários do planeta.", categoriaId: "longitude" },
        { texto: "Quanto maior o valor, mais frio tende a ser o clima da região.", categoriaId: "latitude" },
        { texto: "A de Mercator distorce o tamanho da Groenlândia.", categoriaId: "projecoes" },
        { texto: "A de Peters preserva as áreas proporcionais dos continentes.", categoriaId: "projecoes" },
      ],
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
    quiz_relampago: [
      {
        pergunta: "Por que o Círculo de Fogo do Pacífico concentra tantos vulcões e terremotos?",
        opcoes: [
          {
            texto: "Porque fica sobre grandes limites de placas tectônicas que se chocam ou se afastam.",
            correta: true,
            explicacao:
              "Correto. As bordas das placas do Pacífico colidem com placas continentais (subducção) e liberam energia como terremotos, além de gerarem magma que vira vulcão. Cerca de 90% dos terremotos do mundo acontecem ali.",
          },
          {
            texto: "Porque o oceano Pacífico é o mais profundo do mundo, e a pressão da água causa terremotos.",
            correta: false,
            explicacao:
              "A profundidade do oceano é uma CONSEQUÊNCIA das fossas oceânicas (subducção), não a causa. Os terremotos vêm do movimento das placas, não da pressão da água.",
          },
          {
            texto: "Porque o clima quente e úmido do Pacífico derrete a crosta terrestre.",
            correta: false,
            explicacao:
              "A crosta terrestre não é afetada pelo clima superficial. O magma vem do manto, a centenas de km abaixo — muito mais quente que qualquer clima.",
          },
        ],
      },
      {
        pergunta: "O Himalaia continua CRESCENDO em altura todo ano. Por quê?",
        opcoes: [
          {
            texto: "Porque a Placa Indiana continua empurrando a Placa Euroasiática — é um limite convergente ainda ativo.",
            correta: true,
            explicacao:
              "Isso mesmo. Há ~50 milhões de anos a Índia colide com a Ásia, e o choque continua. O Everest cresce cerca de 4 mm por ano — geologicamente, é um relevo JOVEM.",
          },
          {
            texto: "Porque o gelo do topo das montanhas se acumula e aumenta a altitude.",
            correta: false,
            explicacao:
              "O gelo se acumula e derrete no ciclo anual, não aumenta a altura da rocha. O crescimento real vem do choque tectônico embaixo.",
          },
          {
            texto: "Porque o Sol aquece as rochas e elas se expandem para cima.",
            correta: false,
            explicacao:
              "A dilatação térmica das rochas é imperceptível em escala geológica. O que faz o Himalaia crescer é a força colossal do choque de placas.",
          },
        ],
      },
      {
        pergunta: "Qual tipo de limite tectônico está formando NOVA crosta oceânica no meio do Atlântico?",
        opcoes: [
          {
            texto: "Limite DIVERGENTE — as placas Sul-Americana e Africana estão se afastando, e magma sobe para preencher o vazio.",
            correta: true,
            explicacao:
              "Perfeito. É a Dorsal Meso-Atlântica: uma cordilheira submarina onde nasce crosta nova. Por isso a América do Sul e a África se separam alguns centímetros por ano.",
          },
          {
            texto: "Limite CONVERGENTE — as placas se chocam e formam vulcões no meio do oceano.",
            correta: false,
            explicacao:
              "Convergente é o oposto: placas se chocam. No Atlântico, a Placa Sul-Americana e a Africana se AFASTAM (divergente). Você trocou os conceitos.",
          },
          {
            texto: "Limite TRANSFORMANTE — as placas deslizam lateralmente uma pela outra.",
            correta: false,
            explicacao:
              "Transformante é deslizamento lateral (como a Falha de San Andreas). No Atlântico, o movimento é de afastamento, não de deslizamento.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada fenômeno geológico no tipo de limite tectônico que o produz.",
      categorias: [
        { id: "divergente", titulo: "Divergente (afastamento)", cor: "cyan" },
        { id: "convergente", titulo: "Convergente (choque)", cor: "amber" },
        { id: "transformante", titulo: "Transformante (deslizamento)", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Dorsal Meso-Atlântica — nasce crosta nova no oceano.", categoriaId: "divergente" },
        { texto: "Cordilheira do Himalaia — Índia colidindo com Ásia.", categoriaId: "convergente" },
        { texto: "Falha de San Andreas (Califórnia) — placas deslizando lateralmente.", categoriaId: "transformante" },
        { texto: "Fossa das Marianas — subducção de placa oceânica.", categoriaId: "convergente" },
        { texto: "Vale do Rift, na África — o continente rachando ao meio.", categoriaId: "divergente" },
        { texto: "Cordilheira dos Andes — placa oceânica mergulhando sob a Sul-Americana.", categoriaId: "convergente" },
      ],
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
    quiz_relampago: [
      {
        pergunta: "Qual a diferença entre INTEMPERISMO e EROSÃO?",
        opcoes: [
          {
            texto: "Intemperismo é o desgaste no LUGAR (rocha vira sedimento); erosão é o TRANSPORTE desse material para longe.",
            correta: true,
            explicacao:
              "Correto. Primeiro a rocha se decompõe onde está (intemperismo), depois a água, vento ou gelo carregam os fragmentos (erosão). São etapas encadeadas.",
          },
          {
            texto: "São sinônimos: os dois significam 'desgaste do solo'.",
            correta: false,
            explicacao:
              "Não. É uma diferença clássica de vestibular: intemperismo = decomposição in loco; erosão = movimento. Confundir custa ponto na prova.",
          },
          {
            texto: "Intemperismo é feito pelo humano; erosão é natural.",
            correta: false,
            explicacao:
              "Ambos podem ser naturais OU acelerados pela ação humana. A diferença está na etapa do processo (decompor vs transportar), não em quem faz.",
          },
        ],
      },
      {
        pergunta: "Uma voçoroca (fenda gigante no solo) é um exemplo de:",
        opcoes: [
          {
            texto: "Erosão acelerada pela ação humana (desmatamento + escoamento superficial da chuva).",
            correta: true,
            explicacao:
              "Perfeito. Voçorocas se formam quando o solo perde a cobertura vegetal e a água da chuva 'cava' o terreno rapidamente. É um dos exemplos mais visíveis de erosão antrópica.",
          },
          {
            texto: "Um tipo de vulcão que expele lama ao invés de lava.",
            correta: false,
            explicacao:
              "Não. Voçoroca é um problema de superfície, ligado à erosão do solo — nada tem a ver com atividade vulcânica.",
          },
          {
            texto: "Uma formação natural que só ocorre em regiões desérticas.",
            correta: false,
            explicacao:
              "Voçorocas ocorrem em qualquer clima onde o solo esteja exposto — muito comuns em áreas tropicais desmatadas do Brasil (Cerrado, Mata Atlântica).",
          },
        ],
      },
      {
        pergunta: "O relevo brasileiro é considerado geologicamente ANTIGO. O que isso significa?",
        opcoes: [
          {
            texto: "Foi formado há milhões de anos e já passou por muito desgaste erosivo — por isso não temos montanhas altas nem vulcões ativos.",
            correta: true,
            explicacao:
              "Isso mesmo. Nosso relevo mais alto (Pico da Neblina, ~2.995 m) é baixo comparado ao Himalaia (~8.848 m). Terreno antigo = mais tempo sob ação da erosão = mais 'gasto'.",
          },
          {
            texto: "Significa que o Brasil foi o primeiro continente a existir no planeta.",
            correta: false,
            explicacao:
              "Não. 'Antigo' aqui é um termo geológico sobre as ROCHAS e ESTRUTURAS do subsolo, não sobre a ordem cronológica de aparecimento dos continentes.",
          },
          {
            texto: "Que o Brasil vai sofrer terremotos fortes em breve por causa da idade.",
            correta: false,
            explicacao:
              "Ao contrário: por estar no meio da placa (não nas bordas), o Brasil é uma das regiões mais ESTÁVEIS do mundo. Terremotos fortes acontecem nas bordas das placas.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada agente de modelagem do relevo em INTERNO (endógeno), EXTERNO (exógeno) ou HUMANO (antrópico).",
      categorias: [
        { id: "interno", titulo: "Agente Interno", cor: "cyan" },
        { id: "externo", titulo: "Agente Externo", cor: "amber" },
        { id: "humano", titulo: "Agente Humano", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Terremoto causado pelo movimento das placas.", categoriaId: "interno" },
        { texto: "Erupção vulcânica com liberação de magma.", categoriaId: "interno" },
        { texto: "Vento carregando areia no deserto.", categoriaId: "externo" },
        { texto: "Chuva desgastando uma encosta de morro.", categoriaId: "externo" },
        { texto: "Terraplanagem para construir um bairro.", categoriaId: "humano" },
        { texto: "Mineração a céu aberto abrindo crateras.", categoriaId: "humano" },
      ],
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
    quiz_relampago: [
      {
        pergunta: "Duas cidades na mesma latitude, mas uma no litoral e outra no interior. Qual tende a ter maior amplitude térmica (mais diferença entre dia e noite)?",
        opcoes: [
          {
            texto: "A do interior, porque o continente esquenta e esfria mais rápido que a água do mar.",
            correta: true,
            explicacao:
              "Correto. Água tem alta capacidade de reter calor: o mar 'segura' a temperatura da cidade litorânea (maritimidade). Já o continente esfria rápido à noite e esquenta rápido de dia (continentalidade).",
          },
          {
            texto: "A do litoral, porque o vento marítimo agita muito o ar.",
            correta: false,
            explicacao:
              "Ao contrário: o mar suaviza a temperatura. Cidades litorâneas têm dias e noites com temperaturas próximas — pouca amplitude térmica.",
          },
          {
            texto: "As duas têm a mesma amplitude, porque estão na mesma latitude.",
            correta: false,
            explicacao:
              "Latitude é UM fator climático, mas não o único. Maritimidade/continentalidade também pesa muito, e é isso que diferencia as duas cidades aqui.",
          },
        ],
      },
      {
        pergunta: "Por que subir uma montanha muito alta faz o ar ficar frio, mesmo em regiões tropicais?",
        opcoes: [
          {
            texto: "Porque a cada 1000 m de altitude, a temperatura cai cerca de 6°C (gradiente térmico vertical).",
            correta: true,
            explicacao:
              "Exato. Por isso o Kilimanjaro (África, na linha do Equador!) tem geleiras no cume: os ~5.900 m fazem cair ~35°C em relação ao pé da montanha.",
          },
          {
            texto: "Porque no alto da montanha o Sol está mais distante.",
            correta: false,
            explicacao:
              "A diferença de altitude é insignificante frente à distância Terra-Sol (150 milhões de km). O frio vem da rarefação do ar, não da distância do Sol.",
          },
          {
            texto: "Porque os ventos polares sopram sempre de cima para baixo nas montanhas.",
            correta: false,
            explicacao:
              "Não. O frio da altitude é constante em todas as regiões, inclusive nos trópicos. É pura física do ar rarefeito.",
          },
        ],
      },
      {
        pergunta: "'Elemento climático' e 'fator climático' — qual é a diferença?",
        opcoes: [
          {
            texto: "Elemento é o que se mede (temperatura, umidade, pressão); fator é o que influencia essas medidas (latitude, altitude, mar).",
            correta: true,
            explicacao:
              "Perfeito. Elementos são os 'ingredientes' do clima; fatores são as 'condições' que determinam quanto de cada ingrediente vai ter em cada lugar.",
          },
          {
            texto: "São sinônimos: os dois termos significam a mesma coisa.",
            correta: false,
            explicacao:
              "Não são sinônimos. Em prova de vestibular ou ENEM, essa distinção costuma valer ponto — decore a diferença.",
          },
          {
            texto: "Elemento é o clima natural; fator é o clima modificado pelo humano.",
            correta: false,
            explicacao:
              "A ação humana influencia o clima (aquecimento global, ilhas de calor urbanas), mas não é isso que define 'fator climático' no sentido técnico. Fator é geográfico: latitude, altitude, continentalidade.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada item como ELEMENTO climático (o que se mede) ou FATOR climático (o que influencia).",
      categorias: [
        { id: "elemento", titulo: "Elemento Climático", cor: "cyan" },
        { id: "fator", titulo: "Fator Climático", cor: "amber" },
      ],
      cartoes: [
        { texto: "Temperatura do ar em graus Celsius.", categoriaId: "elemento" },
        { texto: "Latitude da cidade em relação ao Equador.", categoriaId: "fator" },
        { texto: "Umidade relativa do ar em porcentagem.", categoriaId: "elemento" },
        { texto: "Altitude do terreno em metros.", categoriaId: "fator" },
        { texto: "Pressão atmosférica em hectopascais.", categoriaId: "elemento" },
        { texto: "Proximidade do mar (maritimidade).", categoriaId: "fator" },
      ],
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
    quiz_relampago: [
      {
        pergunta: "Por que a Amazônia tem árvores altíssimas e a Tundra siberiana só tem musgos e liquens?",
        opcoes: [
          {
            texto: "Porque o clima (temperatura, umidade, luz) de cada região determina o tipo de vegetação que consegue sobreviver ali.",
            correta: true,
            explicacao:
              "Correto. A vegetação é o 'espelho' do clima. Amazônia = quente + úmido + luz o ano inteiro → floresta densa. Tundra = frio extremo + solo congelado → só plantas rasteiras.",
          },
          {
            texto: "Porque na Amazônia o solo é muito rico em nutrientes e na Tundra é pobre.",
            correta: false,
            explicacao:
              "Curiosidade: o solo amazônico é POBRE em nutrientes! A floresta se sustenta reciclando matéria orgânica na superfície. O que faz a diferença mesmo é o clima.",
          },
          {
            texto: "Porque a Tundra foi desmatada pelo ser humano no passado.",
            correta: false,
            explicacao:
              "Não. A Tundra sempre foi assim, por causa do clima polar. É um bioma naturalmente rasteiro, não uma floresta degradada.",
          },
        ],
      },
      {
        pergunta: "O Cerrado tem árvores baixas, tortas e com casca grossa. Isso é uma adaptação a quê?",
        opcoes: [
          {
            texto: "Ao clima com longa estação seca e à ocorrência natural de queimadas, que a casca grossa resiste.",
            correta: true,
            explicacao:
              "Perfeito. O Cerrado é o 'savana' brasileiro: 5-6 meses de seca por ano. As árvores tortas guardam água nas raízes profundas e a casca grossa protege do fogo natural.",
          },
          {
            texto: "Ao solo encharcado o ano inteiro, que impede o crescimento vertical.",
            correta: false,
            explicacao:
              "Ao contrário: o Cerrado é seco. O bioma de solo encharcado é o Pantanal, que tem outra flora bem diferente.",
          },
          {
            texto: "À baixa incidência de luz solar na região central do Brasil.",
            correta: false,
            explicacao:
              "O Cerrado recebe MUITO sol — está em baixa latitude. O fator limitante é a água (seca prolongada), não a luz.",
          },
        ],
      },
      {
        pergunta: "Qual é a maior ameaça atual à biodiversidade dos biomas tropicais?",
        opcoes: [
          {
            texto: "A expansão desordenada da fronteira agrícola, mineração e pecuária, que fragmenta os ecossistemas.",
            correta: true,
            explicacao:
              "Isso mesmo. Nos trópicos, a maior perda de biomas vem do avanço econômico sobre florestas — soja, gado, garimpo, madeira. Não é o clima natural, é a pressão humana.",
          },
          {
            texto: "O resfriamento global, que está tornando os trópicos frios demais para muitas espécies.",
            correta: false,
            explicacao:
              "O planeta está esquentando, não esfriando. E mesmo o aquecimento global afeta a biodiversidade, mas a ameaça mais imediata e direta é o desmatamento.",
          },
          {
            texto: "A chegada de meteoros e a atividade vulcânica intensa nos últimos anos.",
            correta: false,
            explicacao:
              "Sem base científica. A perda de biomas é um problema humano documentado (INPE, IBAMA), não astronômico ou geológico.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada característica pertence a um grande bioma. Classifique corretamente.",
      categorias: [
        { id: "equatorial", titulo: "Floresta Equatorial (Amazônia)", cor: "emerald" },
        { id: "temperada", titulo: "Floresta Temperada", cor: "amber" },
        { id: "polar", titulo: "Tundra Polar", cor: "cyan" },
      ],
      cartoes: [
        { texto: "Árvores altas e folhas largas perenes o ano inteiro.", categoriaId: "equatorial" },
        { texto: "Árvores decíduas que perdem as folhas no outono.", categoriaId: "temperada" },
        { texto: "Solo permanentemente congelado (permafrost).", categoriaId: "polar" },
        { texto: "Biodiversidade extrema, milhares de espécies por km².", categoriaId: "equatorial" },
        { texto: "Quatro estações do ano bem marcadas.", categoriaId: "temperada" },
        { texto: "Vegetação rasteira de musgos e liquens.", categoriaId: "polar" },
      ],
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
    quiz_relampago: [
      {
        pergunta: "Qual afirmação melhor define o conceito de 'espaço geográfico'?",
        opcoes: [
          {
            texto: "A natureza modificada pelo trabalho humano ao longo do tempo, unindo dinâmicas naturais e sociais.",
            correta: true,
            explicacao:
              "Correto. Espaço geográfico não é só natureza nem só sociedade — é o resultado da relação entre as duas. Milton Santos define assim: um sistema de objetos e ações em constante transformação.",
          },
          {
            texto: "Apenas o território físico delimitado por fronteiras políticas de um país.",
            correta: false,
            explicacao:
              "Isso é território, não espaço geográfico. O espaço é mais amplo: engloba relações econômicas, culturais e ambientais, mesmo que atravessem fronteiras.",
          },
          {
            texto: "A paisagem natural intocada pelo ser humano.",
            correta: false,
            explicacao:
              "Ao contrário: o espaço geográfico se constitui justamente pela ação humana sobre a natureza. Paisagem intocada é objeto de estudo da Ecologia, não a categoria central da Geografia.",
          },
        ],
      },
      {
        pergunta: "Um pesquisador quer entender por que uma cidade cresceu ao lado de um rio. Que abordagem geográfica é a mais completa?",
        opcoes: [
          {
            texto: "Cruzar dados físicos (hidrografia, relevo) com dados sociais (economia, história, migrações).",
            correta: true,
            explicacao:
              "Perfeito. A Geografia é integradora: nem só rio, nem só gente. É a interação entre a base natural e o trabalho humano que explica o crescimento urbano.",
          },
          {
            texto: "Estudar apenas a vazão do rio e a qualidade da água.",
            correta: false,
            explicacao:
              "Essa é a Hidrologia (ciência auxiliar). A Geografia usa esses dados, mas conecta ao contexto social — senão perde o poder explicativo.",
          },
          {
            texto: "Analisar somente os dados populacionais e econômicos.",
            correta: false,
            explicacao:
              "Isso é Demografia ou Economia. Sem a base física (por que ali e não em outro lugar?), a análise fica incompleta.",
          },
        ],
      },
      {
        pergunta: "O que caracteriza o Antropoceno como período geológico?",
        opcoes: [
          {
            texto: "É a época em que a ação humana passou a ser o principal agente modificador do planeta.",
            correta: true,
            explicacao:
              "Isso mesmo. Mudanças climáticas, desmatamento, plásticos nos oceanos — o impacto humano se tornou geológico, comparável ao de forças naturais.",
          },
          {
            texto: "É o período em que os continentes se moveram mais rapidamente na história.",
            correta: false,
            explicacao:
              "Não. A tectônica de placas segue seu ritmo lento (~cm/ano) independente da ação humana. O Antropoceno se define pela influência humana, não geológica.",
          },
          {
            texto: "É a era em que os dinossauros foram extintos por atividade vulcânica.",
            correta: false,
            explicacao:
              "Isso foi há 66 milhões de anos, no fim do Cretáceo. Antropoceno é recente: começa aproximadamente com a Revolução Industrial (séc. XVIII-XIX).",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada elemento na dimensão da Geografia que ele representa.",
      categorias: [
        { id: "fisica", titulo: "Dinâmica Física", cor: "cyan" },
        { id: "humana", titulo: "Dinâmica Humana", cor: "amber" },
        { id: "integrada", titulo: "Análise Integrada", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Erosão de encostas por chuvas fortes.", categoriaId: "fisica" },
        { texto: "Migração do campo para a cidade.", categoriaId: "humana" },
        { texto: "Enchente urbana provocada por chuva + impermeabilização do solo.", categoriaId: "integrada" },
        { texto: "Movimento das placas tectônicas.", categoriaId: "fisica" },
        { texto: "Rede global de comércio e fluxos financeiros.", categoriaId: "humana" },
        { texto: "Aquecimento global acelerado pela queima de combustíveis fósseis.", categoriaId: "integrada" },
      ],
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
