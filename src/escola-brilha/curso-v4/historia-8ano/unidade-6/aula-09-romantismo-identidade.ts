import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula09: AulaGeoV1 = {
  slug: "aula-09-romantismo-identidade",
  titulo: "Romantismo e a Invenção de uma Identidade Nacional",
  iconeTrilha: "🎭",
  bncc: ["EF08HI22"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgIpiranga,
    imagemDestaqueUrl: imgPedro,
    aurora:
      "1857. José de Alencar publica 'O Guarani', romance sobre o índio Peri e a moça branca Ceci. O Brasil recém-independente ainda precisava responder a uma pergunta incômoda: o que é ser brasileiro? Escritores, pintores e músicos do ROMANTISMO se voltaram ao índio 'idealizado' e à natureza tropical para construir uma identidade nacional distinta de Portugal — enquanto culturas populares, africanas e indígenas reais seguiam à margem dessa construção oficial.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem: A Nação Inventada.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se o Brasil recém-independente precisava provar que era diferente de Portugal, qual figura você imagina que os escritores românticos escolheram para representar a 'alma brasileira'?",
    pergunta: "Quem os românticos brasileiros escolheram como símbolo da nação?",
    fotoUrl: imgIpiranga,
    opcoes: [
      {
        id: "ind",
        titulo: "O ÍNDIO IDEALIZADO (INDIANISMO)",
        subtitulo: "herói nobre, corajoso, ligado à natureza",
        emoji: "🏹",
        cor: "from-emerald-800 to-slate-950",
      },
      {
        id: "pov",
        titulo: "O POVO NEGRO E INDÍGENA REAL",
        subtitulo: "suas línguas, religiões e formas de vida cotidianas",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
          { id: "c", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "ind",
    feedbackAcerto:
      "Correto. O INDIANISMO romântico (José de Alencar, Gonçalves Dias) criou um índio IDEALIZADO — nobre, corajoso, quase europeu em seus valores — para simbolizar as origens 'puras' da nação. Isso apagava a realidade de guerra, escravização e expulsão vivida pelos povos indígenas reais, e também deixava de lado a cultura negra e popular.",
    feedbackErro:
      "Não. Foi o ÍNDIO IDEALIZADO do Indianismo, não os povos negros e indígenas reais. A cultura popular, africana e indígena efetiva foi amplamente ignorada pela literatura oficial — ainda que sobrevivesse viva fora dos livros, na música, na culinária e na oralidade.",
    falaFinal:
      "Ideia-base: Romantismo construiu um símbolo idealizado, não um retrato fiel da diversidade cultural brasileira.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos da construção romântica da identidade nacional.",
    instrucao: "",
    cadernos: [
      {
        id: "rom",
        capa: "Romantismo",
        emoji: "🎭",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgConst,
        conteudo:
          "O ROMANTISMO chegou ao Brasil por volta de 1836 (poema 'Suspiros Poéticos e Saudades', de Gonçalves de Magalhães) e dominou a literatura, a pintura e a música até cerca de 1870. Valorizava a emoção, a natureza, o nacionalismo e a busca por uma identidade própria, distinta da herança colonial portuguesa.",
        exemplo:
          "Exemplo: o movimento coincidiu com o momento em que o Império buscava construir símbolos de unidade nacional, como o Hino e a Bandeira.",
      },
      {
        id: "indi",
        capa: "Indianismo",
        emoji: "🏹",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo:
          "INDIANISMO foi a vertente do Romantismo que transformou o indígena em HERÓI NACIONAL idealizado — corajoso, nobre, puro. José de Alencar escreveu 'O Guarani' (1857) e 'Iracema' (1865); Gonçalves Dias escreveu 'I-Juca Pirama' e 'Canção do Exílio' (1843). Esse índio literário pouco se parecia com os povos indígenas reais, que sofriam guerras e perda de terras no mesmo período.",
        exemplo:
          "Exemplo: em 'Iracema', o nome da personagem é anagrama de 'América' — o livro narra o 'nascimento' simbólico do povo brasileiro pela união do indígena com o colonizador português.",
      },
      {
        id: "arte",
        capa: "Pintura histórica",
        emoji: "🖼️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgIpiranga,
        conteudo:
          "A PINTURA HISTÓRICA românfica, com Pedro Américo ('Independência ou Morte', 1888) e Victor Meirelles ('Primeira Missa no Brasil', 1860; 'Moema', 1866), criou imagens grandiosas e heroicas de eventos e figuras nacionais — muitas vezes distantes da realidade histórica, mas fundamentais para fixar uma memória visual da nação nas escolas e livros até hoje.",
        exemplo:
          "Exemplo: a pintura de Pedro Américo do Grito do Ipiranga foi feita 66 anos depois do evento e é uma reconstrução idealizada, não um registro fiel.",
      },
      {
        id: "marg",
        capa: "Culturas à margem",
        emoji: "🥁",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo:
          "Enquanto a cultura LETRADA oficial (literatura, pintura, ópera) construía símbolos idealizados, culturas NÃO LETRADAS — de origem africana, indígena e popular — seguiam vivas na oralidade, na música, na religiosidade e na culinária, sem espaço nos salões da corte. Capoeira, samba de roda, congadas e línguas indígenas resistiam fora dos círculos oficiais.",
        exemplo:
          "Exemplo: no mesmo período em que Alencar idealizava o índio na literatura, a capoeira praticada por africanos e afrodescendentes era perseguida como 'contravenção' pela polícia imperial.",
      },
    ],
    falaFinal:
      "Romantismo + Indianismo + Pintura histórica + Culturas à margem. As peças que formaram uma identidade nacional seletiva.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico da construção da identidade nacional no Império. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgIpiranga,
    pontos: [
      {
        id: "lit",
        x: 25,
        y: 25,
        emoji: "📖",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        titulo: "LITERATURA INDIANISTA",
        texto:
          "José de Alencar ('O Guarani', 'Iracema') e Gonçalves Dias ('Canção do Exílio') criaram o índio-herói, símbolo literário da nação recém-independente.",
      },
      {
        id: "pint",
        x: 50,
        y: 45,
        emoji: "🖼️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgIpiranga,
        titulo: "PINTURA HISTÓRICA",
        texto:
          "Pedro Américo e Victor Meirelles pintaram cenas grandiosas da história nacional, criando a memória visual oficial do Brasil que conhecemos até hoje.",
      },
      {
        id: "musi",
        x: 65,
        y: 65,
        emoji: "🎼",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgConst,
        titulo: "MÚSICA E ÓPERA NACIONAL",
        texto:
          "Carlos Gomes compôs a ópera 'Il Guarany' (1870), levando o Indianismo aos palcos europeus e reforçando a imagem 'exótica' do Brasil no exterior.",
      },
      {
        id: "marg",
        x: 35,
        y: 80,
        emoji: "🥁",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "CULTURAS POPULARES À MARGEM",
        texto:
          "Capoeira, congadas, religiosidades afro-brasileiras e línguas indígenas seguiam vivas fora dos salões oficiais, muitas vezes perseguidas pelo Estado.",
      },
    ],
    falaFinal: "Literatura, pintura, música e margens. Camadas de uma identidade nacional em construção — e em disputa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre Romantismo e identidade nacional.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual romance de José de Alencar (1865) narra simbolicamente o 'nascimento' do povo brasileiro?",
        fotoUrl: imgFazenda,
        cards: [
          { id: "a", emoji: "🏹", titulo: "Iracema", cor: "from-emerald-600 to-slate-900" },
          { id: "b", emoji: "📖", titulo: "Memórias Póstumas", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🎭", titulo: "O Cortiço", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. 'Iracema' (1865), cujo nome é anagrama de 'América'.",
        feedbackErro: "É 'Iracema' (1865), de José de Alencar.",
      },
      {
        id: "q2",
        pergunta: "O que caracteriza o Indianismo romântico?",
        fotoUrl: imgIpiranga,
        cards: [
          { id: "a", emoji: "🏹", titulo: "Índio idealizado como herói nacional", cor: "from-emerald-600 to-slate-900" },
          { id: "b", emoji: "📊", titulo: "Relatos etnográficos precisos", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "⚙️", titulo: "Descrição da vida industrial", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. O índio como herói idealizado, distante da realidade histórica dos povos indígenas.",
        feedbackErro: "É o índio idealizado como herói nacional, não um retrato fiel dos povos reais.",
      },
      {
        id: "q3",
        pergunta: "Enquanto a literatura idealizava o índio, o que acontecia com culturas afro-brasileiras como a capoeira?",
        fotoUrl: imgPedro,
        cards: [
          { id: "a", emoji: "🥁", titulo: "Eram perseguidas pela polícia imperial", cor: "from-slate-600 to-slate-900" },
          { id: "b", emoji: "🏛️", titulo: "Eram ensinadas nas escolas oficiais", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🎖️", titulo: "Recebiam prêmios do Império", cor: "from-emerald-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. A capoeira era tratada como 'contravenção' pela polícia.",
        feedbackErro: "Eram perseguidas — a capoeira, por exemplo, era considerada 'contravenção'.",
      },
    ],
    falaFinal: "Radar afiado. Você já lê as camadas da identidade nacional romântica.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a construção da identidade nacional: cultura letrada oficial e cultura popular não letrada.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgIpiranga,
    camadas: [
      {
        id: "let",
        rotulo: "Cultura letrada oficial",
        emoji: "📖",
        cor: "from-emerald-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "Literatura indianista, pintura histórica e ópera, produzidas por uma elite letrada e divulgadas em salões, teatros e escolas — construíam o índio idealizado como símbolo nacional oficial.",
      },
      {
        id: "nlet",
        rotulo: "Cultura popular não letrada",
        emoji: "🥁",
        cor: "from-slate-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Práticas orais, musicais e religiosas de origem africana e indígena, transmitidas de geração em geração fora dos círculos oficiais, e muitas vezes perseguidas ou ignoradas pelo Estado.",
      },
    ],
    falaFinal: "Duas identidades brasileiras convivendo: a idealizada nos livros e a vivida nas ruas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene cronologicamente os marcos do Romantismo brasileiro.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia do Romantismo e da identidade nacional",
    paradas: [
      {
        id: "gm",
        emoji: "📜",
        rotulo: "1. Início do Romantismo (1836)",
        fotoUrl: imgConst,
        descricao: "Gonçalves de Magalhães publica 'Suspiros Poéticos e Saudades'.",
      },
      {
        id: "gd",
        emoji: "🌴",
        rotulo: "2. 'Canção do Exílio' (1843)",
        fotoUrl: imgFazenda,
        descricao: "Gonçalves Dias exalta a natureza brasileira como identidade nacional.",
      },
      {
        id: "og",
        emoji: "🏹",
        rotulo: "3. 'O Guarani' (1857)",
        fotoUrl: imgIpiranga,
        descricao: "José de Alencar populariza o Indianismo com o herói Peri.",
      },
      {
        id: "ic",
        emoji: "🎼",
        rotulo: "4. Ópera 'Il Guarany' (1870)",
        fotoUrl: imgPedro,
        descricao: "Carlos Gomes leva o Indianismo aos palcos europeus.",
      },
    ],
    ordemCerta: ["gm", "gd", "og", "ic"],
    feedbackAcerto:
      "Perfeito. Início do Romantismo (1836) → 'Canção do Exílio' (1843) → 'O Guarani' (1857) → ópera 'Il Guarany' (1870).",
    feedbackErro: "Essa não é a próxima. Comece pelo início do Romantismo, em 1836.",
    falaFinal: "Quatro marcos que mostram como a identidade nacional foi construída ao longo de décadas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página do livro-atlas. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Império",
    subtitulo: "Página — A Nação Inventada",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A partir de 1836, o ROMANTISMO chegou ao Brasil como movimento literário e artístico. Diferente da literatura colonial, ligada a Portugal, os românticos buscavam símbolos genuinamente brasileiros — a natureza tropical, a paisagem e, sobretudo, o indígena — para responder à pergunta: o que diferencia o Brasil de sua antiga metrópole?",
        chaves: ["Romantismo"],
        definicoes: {
          Romantismo:
            "Movimento cultural (c. 1836-1870) que valorizava a emoção, a natureza e o nacionalismo, buscando símbolos próprios para a identidade brasileira.",
        },
        fotoUrl: imgConst,
      },
      {
        id: "p2",
        texto:
          "A resposta encontrada foi o INDIANISMO: José de Alencar ('O Guarani', 1857; 'Iracema', 1865) e Gonçalves Dias ('Canção do Exílio', 1843) criaram um índio HERÓI, nobre e corajoso, símbolo das origens 'puras' da nação. Esse índio literário era muito diferente dos povos indígenas reais, que na mesma época perdiam terras e enfrentavam guerras de expulsão pelo próprio Estado imperial.",
        chaves: ["Indianismo"],
        definicoes: {
          Indianismo:
            "Vertente do Romantismo que idealizava o indígena como herói nacional, distante da realidade histórica vivida pelos povos indígenas.",
        },
        fotoUrl: imgFazenda,
      },
      {
        id: "p3",
        texto:
          "A PINTURA HISTÓRICA seguiu o mesmo caminho: Pedro Américo e Victor Meirelles criaram telas grandiosas de eventos nacionais, como o Grito do Ipiranga e a Primeira Missa, moldando a memória visual do Brasil até hoje — ainda que pintadas décadas depois dos fatos e com forte dose de idealização.",
        chaves: ["Pintura histórica"],
        definicoes: {
          "Pintura histórica":
            "Gênero artístico do século XIX que retratava eventos nacionais de forma grandiosa e idealizada, moldando a memória visual coletiva.",
        },
        fotoUrl: imgIpiranga,
      },
      {
        id: "p4",
        texto:
          "Enquanto essa cultura LETRADA oficial dominava salões, teatros e escolas, culturas NÃO LETRADAS de origem africana e indígena — capoeira, congadas, religiosidades, línguas orais — seguiam vivas fora dos círculos oficiais, muitas vezes perseguidas pelo Estado. A identidade nacional 'oficial', portanto, foi uma construção seletiva, que escolheu alguns símbolos e silenciou outros.",
        chaves: ["Cultura não letrada"],
        definicoes: {
          "Cultura não letrada":
            "Práticas culturais transmitidas oralmente, de origem africana, indígena e popular, geralmente excluídas dos símbolos nacionais oficiais.",
        },
        fotoUrl: imgPedro,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já entende como o Romantismo construiu — e recortou — a identidade nacional brasileira.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada obra ou prática ao seu tipo cultural.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "indi", emoji: "🏹", rotulo: "Indianismo" },
      { id: "pint", emoji: "🖼️", rotulo: "Pintura histórica" },
      { id: "marg", emoji: "🥁", rotulo: "Cultura à margem" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'O Guarani' (1857)", emoji: "📖", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "José de Alencar", emoji: "🏹", cor: "from-emerald-600 to-slate-900" },
        contexto: "Romance sobre o índio Peri.",
        pecaCertaId: "indi",
        feedbackAcerto: "Correto. É Indianismo.",
        feedbackErro: "É Indianismo — obra de José de Alencar.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Independência ou Morte' (1888)", emoji: "🖼️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Pedro Américo", emoji: "🎨", cor: "from-amber-600 to-slate-900" },
        contexto: "Cena grandiosa do Grito do Ipiranga.",
        pecaCertaId: "pint",
        feedbackAcerto: "Correto. É Pintura histórica.",
        feedbackErro: "É Pintura histórica — obra de Pedro Américo.",
      },
      {
        id: "r3",
        municipioA: { nome: "Capoeira", emoji: "🥋", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Perseguida como 'contravenção'", emoji: "🚓", cor: "from-slate-600 to-slate-900" },
        contexto: "Prática afro-brasileira fora dos círculos oficiais.",
        pecaCertaId: "marg",
        feedbackAcerto: "Correto. É Cultura à margem.",
        feedbackErro: "É Cultura à margem — a capoeira era perseguida.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Canção do Exílio' (1843)", emoji: "🌴", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Gonçalves Dias", emoji: "✒️", cor: "from-emerald-600 to-slate-900" },
        contexto: "Exalta a natureza brasileira.",
        pecaCertaId: "indi",
        feedbackAcerto: "Correto. É Indianismo/nacionalismo romântico.",
        feedbackErro: "É Indianismo — poema de Gonçalves Dias.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Primeira Missa no Brasil' (1860)", emoji: "⛪", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Victor Meirelles", emoji: "🎨", cor: "from-amber-600 to-slate-900" },
        contexto: "Cena idealizada do início da colonização.",
        pecaCertaId: "pint",
        feedbackAcerto: "Correto. É Pintura histórica.",
        feedbackErro: "É Pintura histórica — obra de Victor Meirelles.",
      },
      {
        id: "r6",
        municipioA: { nome: "Congadas e religiosidades afro-brasileiras", emoji: "🥁", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Transmitidas oralmente, fora dos salões oficiais", emoji: "🗣️", cor: "from-slate-600 to-slate-900" },
        contexto: "Cultura popular não letrada.",
        pecaCertaId: "marg",
        feedbackAcerto: "Correto. É Cultura à margem.",
        feedbackErro: "É Cultura à margem — tradição oral fora dos círculos oficiais.",
      },
    ],
    falaFinal: "6 rodadas! Você já distingue os símbolos oficiais e as culturas à margem na identidade nacional.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da identidade nacional romântica: cultura letrada oficial x culturas populares não letradas.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgIpiranga,
    fatias: [
      {
        id: "let",
        rotulo: "Cultura letrada oficial",
        emoji: "📖",
        percentual: 60,
        cor: "#047857",
        descricao:
          "Literatura indianista, pintura histórica e ópera formaram o símbolo nacional 'oficial' — divulgado em livros, salões e escolas, e presente até hoje na memória escolar do Brasil.",
        exemplos: ["🏹 Indianismo", "🖼️ Pintura histórica", "🎼 Ópera nacional"],
      },
      {
        id: "nlet",
        rotulo: "Culturas populares não letradas",
        emoji: "🥁",
        percentual: 40,
        cor: "#334155",
        descricao:
          "Práticas orais de origem africana e indígena sobreviveram fora dos círculos oficiais, muitas vezes perseguidas, mas fundamentais para a diversidade cultural brasileira real.",
        exemplos: ["🥁 Capoeira", "🎉 Congadas", "🗣️ Línguas indígenas"],
      },
    ],
    falaFinal: "Duas fatias, uma nação: a idealizada nos livros e a vivida nas ruas — ambas parte da história do Brasil.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem da Nação Inventada.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgPedro,
    perguntas: [
      {
        id: "av1",
        pergunta: "O que é o Indianismo romântico?",
        opcoes: [
          { id: "a", texto: "A idealização do indígena como herói nacional na literatura.", correta: true },
          { id: "b", texto: "Um relato etnográfico fiel dos povos indígenas.", correta: false },
          { id: "c", texto: "Uma lei de proteção às terras indígenas.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Idealizou o indígena como herói nacional, distante da realidade histórica.",
        feedbackErro: "É a idealização literária do indígena como herói nacional.",
      },
      {
        id: "av2",
        pergunta: "O que caracteriza a Pintura histórica do período romântico?",
        opcoes: [
          { id: "a", texto: "Retratos fiéis e imediatos dos eventos.", correta: false },
          { id: "b", texto: "Cenas grandiosas e idealizadas, muitas vezes pintadas décadas depois dos fatos.", correta: true },
          { id: "c", texto: "Fotografias documentais da época.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Eram cenas grandiosas e idealizadas, como as de Pedro Américo e Victor Meirelles.",
        feedbackErro: "São cenas grandiosas e idealizadas, muitas vezes pintadas décadas depois dos fatos.",
      },
      {
        id: "av3",
        pergunta: "O que aconteceu com culturas não letradas, como a capoeira, no mesmo período?",
        opcoes: [
          { id: "a", texto: "Foram incorporadas como símbolos oficiais da nação.", correta: false },
          { id: "b", texto: "Sobreviveram na oralidade, muitas vezes perseguidas pelo Estado.", correta: true },
          { id: "c", texto: "Desapareceram completamente.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Sobreviveram fora dos círculos oficiais, como a capoeira perseguida.",
        feedbackErro: "Sobreviveram na oralidade e na prática popular, muitas vezes perseguidas pelo Estado.",
      },
    ],
    selo: {
      nome: "A Nação Inventada",
      subtitulo: "Engrenagem do Romantismo e da Identidade Nacional",
      emoji: "🎭",
      cor: "from-emerald-600 to-slate-900",
      fotoUrl: imgIpiranga,
    },
    falaFinal:
      "Engrenagem destravada. Você já entende como a identidade nacional brasileira foi construída — e como sua diversidade real ia além dos símbolos oficiais.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "A Nação Inventada" },
};
