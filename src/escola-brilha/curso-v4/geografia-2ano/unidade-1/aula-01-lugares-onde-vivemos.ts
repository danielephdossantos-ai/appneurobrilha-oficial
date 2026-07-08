import type { AulaGeografiaV4 } from "../../types";
import ribeirinhaImg from "@/assets/geografia/moradias/ribeirinha.jpg";
import apartamentoImg from "@/assets/geografia/moradias/apartamento.jpg";
import casaUrbanaImg from "@/assets/geografia/moradias/casa-urbana.jpg";
import sitioImg from "@/assets/geografia/moradias/sitio.jpg";
import aldeiaImg from "@/assets/geografia/moradias/aldeia.jpg";
import paisagemMistaImg from "@/assets/geografia/moradias/paisagem-mista.jpg";

/**
 * EF02GE01 · Aula 01 — "Por que nem toda casa é igual?"
 * Cada lugar tem seu próprio Modo Investigador com pins explicativos.
 */
const aula: AulaGeografiaV4 = {
  slug: "aula-01-lugares-onde-vivemos",
  titulo: "Por que nem toda casa é igual?",
  iconeTrilha: "🛖",
  bncc: ["EF02GE01"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O GeoScanner chegou",
    personagem: "Aurora",
    historia:
      "Aurora te deu um equipamento chamado GeoScanner. Ele mostra o que os olhos comuns não veem — mas só funciona pra quem observa com atenção.\n\nHoje você não vai só olhar uma casa. Você vai descobrir por que ela foi construída exatamente desse jeito.",
  },

  momento02_galeria: {
    bloco: {
      instrucao:
        "5 lugares reais do Brasil. Toque em qualquer um pra investigar — comece pelo que te chamou mais atenção.",
      lugares: [
        { id: "apartamento", nome: "Apartamento", emoji: "🏢", imagemUrl: apartamentoImg },
        { id: "casa-urbana", nome: "Casa na cidade", emoji: "🏠", imagemUrl: casaUrbanaImg },
        { id: "sitio", nome: "Sítio no campo", emoji: "🌾", imagemUrl: sitioImg },
        { id: "ribeirinha", nome: "Casa ribeirinha", emoji: "🌊", imagemUrl: ribeirinhaImg },
        { id: "aldeia", nome: "Aldeia indígena", emoji: "🛖", imagemUrl: aldeiaImg },
      ],
    },
  },

  momento03_investigador: {
    blocos: [
      {
        lugarId: "apartamento",
        nomeLugar: "Apartamento na cidade grande",
        emoji: "🏢",
        imagemUrl: apartamentoImg,
        pergunta: "Por que TANTAS famílias moram empilhadas no mesmo prédio?",
        hipoteses: [
          "Porque prédio é mais bonito do que casa.",
          "Porque na cidade grande sobra pouco chão e muita gente precisa morar.",
          "Porque as pessoas gostam de morar bem alto.",
        ],
        correta: 1,
        fechamento:
          "Na cidade grande mora MUITA gente e sobra pouco chão. Por isso as casas viram andares empilhados — assim várias famílias moram no mesmo pedacinho de terra.",
        pistas: [
          {
            icone: "⬆️",
            rotulo: "prédio bem alto",
            x: 50, y: 25,
            explicacao:
              "O prédio cresce PRA CIMA porque na cidade não sobra espaço pros lados. Cada andar é uma casa diferente, com uma família diferente.",
            curiosidade: "Sabia? Em São Paulo tem prédio com mais de 40 andares só de moradia.",
          },
          {
            icone: "🪟",
            rotulo: "muitas janelas iguais",
            x: 35, y: 55,
            explicacao:
              "Cada fileira de janelas é um apartamento. Elas são iguaizinhas porque o prédio foi construído todo de uma vez, seguindo a mesma planta.",
            curiosidade: "Sabia? Um prédio grande pode ter mais moradores do que uma rua inteira de casas.",
          },
          {
            icone: "🚗",
            rotulo: "rua asfaltada com carros",
            x: 78, y: 88,
            explicacao:
              "Na cidade tudo é feito pra carro, ônibus e moto passarem. Por isso a rua é de asfalto e tem calçada pros pedestres.",
            curiosidade: "Sabia? Prédios de apartamento costumam ter garagem embaixo, escondida.",
          },
          {
            icone: "🌳",
            rotulo: "pouquíssimas árvores",
            x: 92, y: 78,
            explicacao:
              "Repare como quase não tem verde. Na cidade grande, a natureza fica espremida — as pessoas precisam ir até parques pra ver árvore de verdade.",
            curiosidade: "Sabia? Por isso muitos apartamentos têm plantinhas na varanda.",
          },
          {
            icone: "🏙️",
            rotulo: "outros prédios em volta",
            x: 88, y: 45,
            explicacao:
              "Quando um bairro é assim, com prédio do lado de prédio, chamamos de área URBANA. É onde mora a maior parte dos brasileiros.",
            curiosidade: "Sabia? Mais de 8 em cada 10 brasileiros vivem em cidades.",
          },
        ],
      },
      {
        lugarId: "casa-urbana",
        nomeLugar: "Casa na cidade",
        emoji: "🏠",
        imagemUrl: casaUrbanaImg,
        pergunta: "Por que essa casa tem MURO e PORTÃO na frente?",
        hipoteses: [
          "Pra separar a casa da rua e proteger a família na cidade.",
          "Porque toda casa precisa ter muro, é uma regra.",
          "Pra ficar mais bonita do que as casas vizinhas.",
        ],
        correta: 0,
        fechamento:
          "Essa casa também é da cidade, mas de um bairro mais tranquilo. A família tem quintal e portão, e o telhado de telha protege da chuva e do sol.",
        pistas: [
          {
            icone: "🧱",
            rotulo: "paredes de tijolo",
            x: 55, y: 55,
            explicacao:
              "As paredes são de tijolo e cimento, cobertas com tinta. Esse material dura muitos anos e aguenta chuva, sol e vento da cidade.",
            curiosidade: "Sabia? Uma casa dessas pode durar mais de 50 anos se for bem cuidada.",
          },
          {
            icone: "🏘️",
            rotulo: "telhado de telha vermelha",
            x: 40, y: 25,
            explicacao:
              "As telhas ficam inclinadas pra água da chuva escorrer rápido. A cor avermelhada é do barro cozido que forma a telha.",
            curiosidade: "Sabia? Esse telhado é um dos mais comuns do Brasil inteiro.",
          },
          {
            icone: "🚪",
            rotulo: "portão e muro",
            x: 15, y: 70,
            explicacao:
              "O portão e o muro protegem a casa. Na cidade, a família fecha o espaço pra ninguém entrar sem ser convidado.",
            curiosidade: "Sabia? Antigamente as casas nem tinham muro — a rua era considerada segura.",
          },
          {
            icone: "🌿",
            rotulo: "jardim na frente",
            x: 60, y: 78,
            explicacao:
              "O pedaço de terra na frente da casa vira jardim. É pouco espaço, mas dá pra plantar algumas flores e uma árvore pequena.",
            curiosidade: "Sabia? Em casa de cidade grande, esse cantinho verde é super valioso.",
          },
          {
            icone: "🛣️",
            rotulo: "calçada e asfalto",
            x: 50, y: 92,
            explicacao:
              "A rua é de asfalto e a calçada é de bloquete. É por aí que passam pessoas caminhando, ciclistas e carros.",
            curiosidade: "Sabia? Toda casa da cidade precisa ter calçada — é lei.",
          },
        ],
      },
      {
        lugarId: "sitio",
        nomeLugar: "Sítio no campo",
        emoji: "🌾",
        imagemUrl: sitioImg,
        pergunta: "Por que a família do sítio tem TANTO espaço em volta da casa?",
        hipoteses: [
          "Porque no campo ninguém quer morar perto dos outros.",
          "Porque precisam de terra pra plantar e criar animais.",
          "Porque não conseguiram terminar de construir mais casas.",
        ],
        correta: 1,
        fechamento:
          "No sítio a família vive junto da natureza. A casa é simples, tem muito espaço, e os animais fazem parte do dia a dia. Aqui, plantar e criar bicho é o trabalho principal.",
        pistas: [
          {
            icone: "🏠",
            rotulo: "casa simples com varanda",
            x: 55, y: 40,
            explicacao:
              "A casa do sítio costuma ter varanda pra família descansar na sombra depois do trabalho no campo. Não precisa ser grande — precisa ser confortável.",
            curiosidade: "Sabia? Muita casa de sítio ainda é feita de adobe (tijolo de barro cru).",
          },
          {
            icone: "🐔",
            rotulo: "galinhas soltas",
            x: 30, y: 72,
            explicacao:
              "As galinhas vivem soltas ciscando o chão. Elas dão OVOS todo dia pra família comer ou vender na cidade.",
            curiosidade: "Sabia? Uma galinha bota cerca de 250 ovos por ano.",
          },
          {
            icone: "🌳",
            rotulo: "árvore grande e antiga",
            x: 18, y: 30,
            explicacao:
              "No campo sobra espaço pra árvore crescer bem grande. Ela faz sombra pros animais e pra família descansar no calor.",
            curiosidade: "Sabia? Essa árvore pode ter mais idade do que os avós de quem mora ali.",
          },
          {
            icone: "🛤️",
            rotulo: "estrada de terra",
            x: 68, y: 88,
            explicacao:
              "No sítio a estrada não é de asfalto, é de TERRA. Passam poucos carros, então não precisa ser feita de material caro.",
            curiosidade: "Sabia? Quando chove muito, a estrada de terra vira lama e fica difícil passar.",
          },
          {
            icone: "🌾",
            rotulo: "muito espaço aberto",
            x: 90, y: 55,
            explicacao:
              "Aqui não tem prédio nem casa colada. A gente chama isso de área RURAL — o lugar onde vem quase toda a comida que a gente come.",
            curiosidade: "Sabia? Arroz, feijão, leite, ovo e frango — tudo isso nasce no campo antes de chegar no mercado.",
          },
        ],
      },
      {
        lugarId: "ribeirinha",
        nomeLugar: "Casa Ribeirinha",
        emoji: "🌊",
        imagemUrl: ribeirinhaImg,
        pergunta: "Por que essa casa foi construída ACIMA da água, sobre estacas?",
        hipoteses: [
          "Pra ficar mais bonita, com um estilo diferente.",
          "Porque o rio sobe muito e a família não pode se molhar.",
          "Porque a família não gosta de andar no chão.",
        ],
        correta: 1,
        fechamento:
          "Essa casa foi construída sobre estacas de madeira porque o rio sobe e desce o ano todo. Assim, quando a água enche, a família continua seca. O barco é o carro da porta de casa.",
        pistas: [
          {
            icone: "🏠", rotulo: "casa de madeira", x: 55, y: 42,
            explicacao:
              "A casa é feita de madeira porque a floresta amazônica tem MUITA árvore por perto. Fica mais fácil e barato construir com o material que já existe ali.",
            curiosidade: "Sabia? Os moradores escolhem madeiras que não estragam com a umidade, como itaúba e maçaranduba.",
          },
          {
            icone: "⬆️", rotulo: "construída sobre estacas", x: 55, y: 72,
            explicacao:
              "Essas 'perninhas' de madeira são chamadas de PALAFITAS. Elas erguem a casa bem alta pra que a água do rio, quando sobe, passe POR BAIXO — e não por dentro.",
            curiosidade: "Sabia? Na cheia, o rio pode subir mais de 10 metros. É a altura de um prédio de 3 andares!",
          },
          {
            icone: "🌊", rotulo: "rio embaixo da casa", x: 30, y: 88,
            explicacao:
              "O rio é o QUINTAL e a RUA dessas famílias. É por ele que chega comida, remédio, escola e visita. Sem o rio, ninguém sai de casa.",
            curiosidade: "Sabia? Existem escolas flutuantes na Amazônia — a criança vai estudar de barco.",
          },
          {
            icone: "🛶", rotulo: "canoa presa na escada", x: 82, y: 82,
            explicacao:
              "A canoa fica amarrada na escada igual a gente estaciona o carro na garagem. É o transporte principal da família ribeirinha.",
            curiosidade: "Sabia? Muitas crianças ribeirinhas aprendem a remar antes de aprender a andar de bicicleta.",
          },
          {
            icone: "🌳", rotulo: "floresta ao redor", x: 12, y: 25,
            explicacao:
              "A floresta dá tudo: madeira pra casa, frutas pra comer, remédio das plantas e sombra pro calor. A família vive JUNTO da floresta, não contra ela.",
            curiosidade: "Sabia? Do açaí ao guaraná, muita coisa que a gente come vem daí.",
          },
          {
            icone: "🌧️", rotulo: "região de muita chuva", x: 88, y: 15,
            explicacao:
              "Na Amazônia chove quase todo dia. Por isso o telhado é bem inclinado — pra água escorrer rápido e não empoçar em cima da casa.",
            curiosidade: "Sabia? Chove tanto que existem só duas estações: o 'inverno' (muita chuva) e o 'verão' (menos chuva). Frio de verdade não tem.",
          },
        ],
      },
      {
        lugarId: "aldeia",
        nomeLugar: "Aldeia Indígena",
        emoji: "🛖",
        imagemUrl: aldeiaImg,
        pergunta: "O que essa comunidade indígena mais VALORIZA no jeito de morar?",
        hipoteses: [
          "Ter cada família bem separada, longe uma da outra.",
          "Viver junto da natureza, em comunidade, do jeito dos antepassados.",
          "Construir casas cada vez mais altas e modernas.",
        ],
        correta: 1,
        fechamento:
          "Na aldeia, as casas (chamadas OCAS) são feitas com o que a floresta oferece: madeira, cipó e palha. Elas são redondas ou compridas, e ficam em roda pra família viver TODO MUNDO JUNTO.",
        pistas: [
          {
            icone: "🛖", rotulo: "oca de palha", x: 22, y: 55,
            explicacao:
              "A oca é uma casa indígena tradicional. O teto de palha protege do sol e da chuva, e mantém a parte de dentro sempre fresquinha.",
            curiosidade: "Sabia? Numa mesma oca podem morar várias famílias juntas — avós, pais, tios e primos.",
          },
          {
            icone: "🌴", rotulo: "telhado de folhas de palmeira", x: 55, y: 22,
            explicacao:
              "As folhas de palmeira são trançadas e viram um teto forte. Elas seguram a chuva por fora e deixam o ar passar por dentro.",
            curiosidade: "Sabia? Um telhado de palha bem feito dura mais de 5 anos.",
          },
          {
            icone: "🔥", rotulo: "fogueira no centro", x: 60, y: 68,
            explicacao:
              "O fogo fica no MEIO da aldeia. É ali que a comunidade se reúne pra cozinhar, contar histórias e tomar decisões juntos.",
            curiosidade: "Sabia? Muitas aldeias mantêm o mesmo fogo aceso o dia inteiro.",
          },
          {
            icone: "🌳", rotulo: "floresta em volta", x: 82, y: 30,
            explicacao:
              "A aldeia foi construída dentro da floresta. Os povos indígenas conhecem cada planta e sabem cuidar dela sem destruir.",
            curiosidade: "Sabia? No Brasil existem mais de 300 povos indígenas diferentes, cada um com seu jeito de morar.",
          },
          {
            icone: "🟫", rotulo: "chão de terra batida", x: 45, y: 92,
            explicacao:
              "O chão é de terra firme, sem asfalto nem cimento. As crianças correm descalças e brincam livres — a natureza é o quintal.",
            curiosidade: "Sabia? A terra batida fica dura de tanto pisar em cima, quase como um piso.",
          },
        ],
      },
    ],
  },

  momento04_hipoteses: {
    perguntas: [
      {
        imagemUrl: ribeirinhaImg,
        pergunta: "Por que essa casa fica ERGUIDA sobre estacas de madeira?",
        hipoteses: [
          "Pra ficar mais bonita, com estilo diferente.",
          "Porque o rio sobe muito e a família não pode se molhar.",
          "Porque a família não gosta de andar no chão.",
        ],
        correta: 1,
        explicacao:
          "Na Amazônia o rio SOBE e DESCE o ano todo. Na cheia ele pode subir 10 metros — a altura de um prédio de 3 andares. As estacas erguem a casa pra que a água passe por baixo e a família continue seca.",
      },
      {
        imagemUrl: apartamentoImg,
        pergunta: "Por que na cidade grande as pessoas moram em PRÉDIOS altos?",
        hipoteses: [
          "Porque na cidade sobra pouco chão e muita gente precisa morar.",
          "Porque prédio é mais barato de construir do que casa.",
          "Porque as pessoas gostam de olhar tudo de cima.",
        ],
        correta: 0,
        explicacao:
          "Na cidade grande mora MUITA gente e o espaço no chão acaba rápido. Empilhando andares, várias famílias moram no mesmo pedacinho de terra. Um prédio pode ter mais moradores do que uma rua inteira de casas.",
      },
      {
        imagemUrl: aldeiaImg,
        pergunta: "Por que a oca é feita de MADEIRA e PALHA, e não de tijolo?",
        hipoteses: [
          "Porque os povos indígenas ainda não descobriram o tijolo.",
          "Porque a floresta oferece esses materiais e eles combinam com o clima quente.",
          "Porque é mais rápido montar e desmontar quando muda de lugar.",
        ],
        correta: 1,
        explicacao:
          "A oca usa o que a FLORESTA oferece: madeira das árvores, palha das palmeiras, cipó pra amarrar. Além disso, palha deixa o ar passar — mantém a oca fresca no calor da mata. Cada povo constrói do jeito que combina com o lugar onde vive.",
      },
    ],
  },

  momento05_comparar: {
    comparacoes: [
      {
        pergunta: "Qual moradia AGUENTA melhor uma enchente grande?",
        a: { nome: "Casa na cidade", emoji: "🏠", imagemUrl: casaUrbanaImg },
        b: { nome: "Casa ribeirinha", emoji: "🌊", imagemUrl: ribeirinhaImg },
        correta: "b",
        explicacao:
          "A casa da cidade fica no chão — se a água subir, ela alaga. A ribeirinha é ERGUIDA sobre estacas justamente pra que o rio, quando enche, passe por baixo. Cada casa é construída pra vencer o desafio do seu lugar.",
      },
      {
        pergunta: "Onde CABE mais gente morando no mesmo pedacinho de chão?",
        a: { nome: "Apartamento", emoji: "🏢", imagemUrl: apartamentoImg },
        b: { nome: "Sítio no campo", emoji: "🌾", imagemUrl: sitioImg },
        correta: "a",
        explicacao:
          "No sítio uma família ocupa MUITO espaço — precisa de chão pra plantar e criar bichos. No prédio, empilhando andares, dezenas de famílias moram no mesmo tamanho de terreno. Por isso a cidade grande é cheia de prédios.",
      },
      {
        pergunta: "Em qual desses lugares a família mora MAIS PERTO da natureza?",
        a: { nome: "Apartamento na cidade", emoji: "🏢", imagemUrl: apartamentoImg },
        b: { nome: "Aldeia indígena", emoji: "🛖", imagemUrl: aldeiaImg },
        correta: "b",
        explicacao:
          "No apartamento a natureza fica espremida — quase só concreto e asfalto. Na aldeia a família vive DENTRO da floresta: a comida, o remédio, os materiais da casa, tudo vem dali. São dois jeitos bem diferentes de viver no Brasil.",
      },
    ],
  },

  momento06_painel: {
    bloco: {
      colunas: ["Lugar", "Onde fica", "Como é construída", "Por quê"],
      linhas: [
        {
          emoji: "🏢",
          celulas: [
            "Apartamento",
            "Cidade grande",
            "Prédio alto com muitos andares",
            "Muita gente, pouco chão — empilha famílias",
          ],
        },
        {
          emoji: "🏠",
          celulas: [
            "Casa na cidade",
            "Bairro urbano",
            "Tijolo, telhado inclinado, muro",
            "Aguenta chuva e sol, protege a família",
          ],
        },
        {
          emoji: "🌾",
          celulas: [
            "Sítio",
            "Campo (área rural)",
            "Casa simples com varanda e quintal grande",
            "Espaço pra plantar e criar animais",
          ],
        },
        {
          emoji: "🌊",
          celulas: [
            "Casa ribeirinha",
            "Beira de rio na Amazônia",
            "Madeira sobre estacas altas",
            "Rio sobe e desce o ano todo",
          ],
        },
        {
          emoji: "🛖",
          celulas: [
            "Aldeia indígena",
            "Dentro da floresta",
            "Oca de madeira, cipó e palha",
            "Usa o que a floresta oferece e é fresca no calor",
          ],
        },
      ],
      sintese:
        "Cada lugar do Brasil pede um jeito diferente de morar. O CLIMA, o TERRENO e o TRABALHO da família decidem como a casa é construída. Não existe casa 'melhor' — existe a casa CERTA pra cada lugar.",
    },
  },

  momento07_investigacaoLivre: {
    bloco: {
      imagemUrl: paisagemMistaImg,
      instrucao:
        "Foto nova! O GeoScanner desligou — agora é você. Marque só o que você REALMENTE está vendo na foto. Cuidado: tem coisa que NÃO aparece.",
      pistas: [
        { id: "rio", icone: "🌊", rotulo: "um rio passando", existe: true },
        { id: "estrada", icone: "🛣️", rotulo: "uma estrada", existe: true },
        { id: "arvores", icone: "🌳", rotulo: "árvores espalhadas", existe: true },
        { id: "plantacao", icone: "🌾", rotulo: "plantação (roça)", existe: true },
        { id: "predios", icone: "🏢", rotulo: "prédios altos ao fundo", existe: true },
        { id: "praia", icone: "🏖️", rotulo: "praia com areia", existe: false },
        { id: "montanha-neve", icone: "🏔️", rotulo: "montanha com neve", existe: false },
        { id: "aviao", icone: "✈️", rotulo: "avião no céu", existe: false },
      ],
      conclusao:
        "Boa observação, geoexplorador! Essa paisagem mistura CAMPO e CIDADE: tem rio, plantação e árvores (natureza), mas também estrada e prédios (feito por gente). A gente chama isso de área DE TRANSIÇÃO — nem totalmente rural, nem totalmente urbana. É assim que muitos lugares do Brasil realmente são.",
    },
  },


  momento10_missaoFamilia: {
    titulo: "Diário do GeoExplorador",
    passos: [
      "Passeie pela sua rua com alguém da família.",
      "Escolha 2 casas ou prédios bem diferentes.",
      "Observe: o tamanho, o material, o telhado, quem mora ali.",
      "Volte pra casa e responda no diário: o que mudou entre uma e outra? Por quê?",
    ],
    registro:
      "Registre com foto, desenho ou áudio contando o que descobriu.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Investigador das Moradias",
  },
};

export default aula;
