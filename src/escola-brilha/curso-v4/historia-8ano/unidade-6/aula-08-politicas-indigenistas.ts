import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula08: AulaGeoV1 = {
  slug: "aula-08-politicas-indigenistas",
  titulo: "O Império e os Povos Indígenas: Catequese, Terra e Violência",
  iconeTrilha: "🪶",
  bncc: ["EF08HI21"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFazenda,
    imagemDestaqueUrl: imgPedro,
    aurora:
      "1845. O governo imperial cria o Regulamento das Missões, prometendo 'proteger' os povos indígenas. Na prática, o Império avançava sobre suas terras para expandir fazendas de café, criar colônias de imigrantes europeus e abrir estradas. Entre o discurso de 'civilizar' e a realidade de expulsar, o Estado brasileiro construiu, no século XIX, uma política indigenista que definiu o destino de centenas de povos originários.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem: Terra Indígena, Lei Imperial.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se o Império precisava de terras para o café e para colonos europeus, o que você imagina que aconteceu com as terras indígenas?",
    pergunta: "Qual foi a política oficial do Império em relação aos indígenas?",
    fotoUrl: imgFazenda,
    opcoes: [
      {
        id: "ass",
        titulo: "CATEQUESE + ASSIMILAÇÃO FORÇADA",
        subtitulo: "aldeamentos, perda de terras e de autonomia",
        emoji: "⛪",
        cor: "from-amber-800 to-slate-950",
      },
      {
        id: "res",
        titulo: "RESPEITO ÀS TERRAS E AUTONOMIA",
        subtitulo: "o Império reconhecia a posse indígena da terra",
        emoji: "❌",
        cor: "from-emerald-900 to-slate-950",
      },
    ],
    respostaCerta: "ass",
    feedbackAcerto:
      "Correto. O Regulamento das Missões (1845) e a Lei de Terras (1850) organizaram a catequese e a 'civilização' dos indígenas em aldeamentos administrados por missionários, ao mesmo tempo em que abriam caminho legal para que suas terras fossem consideradas 'devolutas' e repassadas a fazendeiros e colonos.",
    feedbackErro:
      "Não. O Império NÃO respeitou a posse indígena da terra. A Lei de Terras de 1850 classificou terras indígenas não documentadas como 'devolutas', permitindo sua venda e ocupação por fazendeiros e imigrantes europeus.",
    falaFinal:
      "Ideia-base: catequese + Lei de Terras = perda de território indígena disfarçada de 'civilização'.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos da política indigenista do Império.",
    instrucao: "",
    cadernos: [
      {
        id: "reg",
        capa: "Regulamento das Missões",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        conteudo:
          "O REGULAMENTO DAS MISSÕES (Decreto nº 426, de 1845) definiu a política indigenista oficial do Império: os indígenas deveriam ser 'catequizados e civilizados' em ALDEAMENTOS dirigidos por diretores e missionários, geralmente religiosos. Na prática, submetia os povos a trabalho, disciplina e conversão religiosa forçada.",
        exemplo:
          "Exemplo: os aldeamentos funcionavam como espaços de controle, onde línguas e costumes indígenas eram reprimidos em nome da 'civilização'.",
      },
      {
        id: "lei",
        capa: "Lei de Terras (1850)",
        emoji: "🗺️",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo:
          "A LEI DE TERRAS (Lei nº 601, de 1850) estabeleceu que só seria reconhecida como propriedade a terra com título legal registrado. Terras indígenas, tradicionalmente ocupadas sem documentos formais, passaram a ser classificadas como 'DEVOLUTAS' (do Estado), abrindo caminho para venda e ocupação por fazendeiros de café e colonos europeus.",
        exemplo:
          "Exemplo: comunidades indígenas de Minas Gerais e São Paulo perderam extensas áreas para o avanço das fazendas de café justamente nesse período.",
      },
      {
        id: "guer",
        capa: "Guerra e expulsão",
        emoji: "⚔️",
        cor: "from-red-800 to-slate-900",
        fotoUrl: imgIpiranga,
        conteudo:
          "Quando a catequese 'não bastava', o Império recorreu à FORÇA MILITAR. Expedições contra povos como os Kaingang, no Sul, e os Botocudo, no Leste, resultaram em massacres, escravização disfarçada de 'tutela' e expulsão de territórios tradicionais para abrir espaço a estradas, fazendas e colônias de imigrantes.",
        exemplo:
          "Exemplo: no Espírito Santo e em Minas Gerais, guerras contra os Botocudo duraram décadas e justificaram a ocupação de suas terras por colonos.",
      },
      {
        id: "resi",
        capa: "Resistência indígena",
        emoji: "✊",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo:
          "Apesar da violência, os povos indígenas RESISTIRAM: fugiram para o interior, negociaram alianças pontuais, preservaram línguas e práticas dentro e fora dos aldeamentos, e mantiveram reivindicações territoriais que continuam até hoje, séculos depois, nos processos de demarcação de terras indígenas no Brasil.",
        exemplo:
          "Exemplo: muitos povos usaram os próprios aldeamentos como espaço de reorganização, mantendo redes de parentesco e memória cultural mesmo sob controle missionário.",
      },
    ],
    falaFinal:
      "Aldeamento + Lei de Terras + Guerra + Resistência. A engrenagem que decidiu o destino territorial dos povos indígenas no Império.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico da política indigenista imperial pelo mapa do Brasil. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFazenda,
    pontos: [
      {
        id: "ald",
        x: 30,
        y: 25,
        emoji: "⛪",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        titulo: "ALDEAMENTOS (1845)",
        texto:
          "O Regulamento das Missões organizou aldeamentos administrados por diretores e missionários, que deveriam 'catequizar e civilizar' os indígenas — controlando trabalho, religião e costumes.",
      },
      {
        id: "sp",
        x: 45,
        y: 55,
        emoji: "☕",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        titulo: "AVANÇO DO CAFÉ (São Paulo e Minas Gerais)",
        texto:
          "A expansão das fazendas de café pressionou terras indígenas do Sudeste, classificadas como 'devolutas' pela Lei de Terras de 1850 e repassadas a fazendeiros.",
      },
      {
        id: "sul",
        x: 25,
        y: 85,
        emoji: "⚔️",
        cor: "from-red-800 to-slate-900",
        fotoUrl: imgIpiranga,
        titulo: "GUERRAS NO SUL (Kaingang)",
        texto:
          "No Sul, expedições militares contra os Kaingang buscavam abrir terras para colônias de imigrantes europeus, provocando conflitos violentos e prolongados.",
      },
      {
        id: "botoc",
        x: 60,
        y: 40,
        emoji: "🌲",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "GUERRAS NO LESTE (Botocudo)",
        texto:
          "Em Minas Gerais e no Espírito Santo, guerras contra os Botocudo se estenderam por décadas, justificando a ocupação de suas terras por estradas e colonos.",
      },
    ],
    falaFinal:
      "Aldeamento, café, guerra no Sul e no Leste. Diferentes formas do mesmo processo: perda territorial indígena.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre a política indigenista do Império.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que o Regulamento das Missões (1845) estabeleceu?",
        fotoUrl: imgConst,
        cards: [
          { id: "a", emoji: "⛪", titulo: "Aldeamentos de catequese e 'civilização'", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "🗳️", titulo: "Direito de voto indígena", cor: "from-emerald-600 to-slate-900" },
          { id: "c", emoji: "🏞️", titulo: "Demarcação de terras indígenas", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Organizou aldeamentos administrados por missionários e diretores.",
        feedbackErro: "É a organização de aldeamentos de catequese, dirigidos por missionários e diretores.",
      },
      {
        id: "q2",
        pergunta: "O que a Lei de Terras (1850) fez com terras indígenas sem título formal?",
        fotoUrl: imgFazenda,
        cards: [
          { id: "a", emoji: "🗺️", titulo: "Classificou como 'devolutas'", cor: "from-emerald-600 to-slate-900" },
          { id: "b", emoji: "📜", titulo: "Concedeu títulos automáticos aos indígenas", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🚫", titulo: "Proibiu a venda de qualquer terra", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Terras sem documento formal passaram a ser 'devolutas', abertas à venda.",
        feedbackErro: "Ela classificou como 'devolutas', permitindo sua venda a fazendeiros e colonos.",
      },
      {
        id: "q3",
        pergunta: "Quando a catequese 'não bastava', o que o Império fez contra povos indígenas?",
        fotoUrl: imgIpiranga,
        cards: [
          { id: "a", emoji: "⚔️", titulo: "Recorreu à força militar", cor: "from-red-600 to-slate-900" },
          { id: "b", emoji: "🤝", titulo: "Assinou tratados de terra permanentes", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🏛️", titulo: "Criou parlamentos indígenas", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Expedições militares contra Kaingang e Botocudo, por exemplo.",
        feedbackErro: "Recorreu à força militar — como nas guerras contra os Kaingang e os Botocudo.",
      },
    ],
    falaFinal: "Radar afiado. Você já distingue os instrumentos da política indigenista imperial.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a política indigenista: o discurso oficial e a realidade vivida pelos povos indígenas.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFazenda,
    camadas: [
      {
        id: "disc",
        rotulo: "Discurso oficial",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "O Estado imperial se apresentava como 'protetor' dos indígenas, promovendo catequese e 'civilização' por meio de aldeamentos administrados por missionários.",
      },
      {
        id: "real",
        rotulo: "Realidade vivida",
        emoji: "⚔️",
        cor: "from-red-800 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Na prática, indígenas perderam terras pela Lei de 1850, sofreram trabalho forçado nos aldeamentos e enfrentaram guerras de expulsão, como contra os Kaingang e os Botocudo.",
      },
    ],
    falaFinal: "Discurso de proteção, prática de expulsão. Duas faces da política indigenista imperial.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene cronologicamente os marcos da política indigenista imperial.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia da política indigenista imperial",
    paradas: [
      {
        id: "reg",
        emoji: "📜",
        rotulo: "1. Regulamento das Missões (1845)",
        fotoUrl: imgConst,
        descricao: "Cria aldeamentos de catequese e 'civilização' administrados por missionários.",
      },
      {
        id: "lei",
        emoji: "🗺️",
        rotulo: "2. Lei de Terras (1850)",
        fotoUrl: imgFazenda,
        descricao: "Classifica terras indígenas sem título como 'devolutas', abertas à ocupação.",
      },
      {
        id: "guer",
        emoji: "⚔️",
        rotulo: "3. Guerras de expulsão (décadas seguintes)",
        fotoUrl: imgIpiranga,
        descricao: "Expedições militares contra Kaingang e Botocudo abrem terras para colonos.",
      },
      {
        id: "resi",
        emoji: "✊",
        rotulo: "4. Resistência indígena permanente",
        fotoUrl: imgPedro,
        descricao: "Povos indígenas resistem, preservam cultura e reivindicam terras até hoje.",
      },
    ],
    ordemCerta: ["reg", "lei", "guer", "resi"],
    feedbackAcerto:
      "Perfeito. Aldeamento (1845) → Lei de Terras (1850) → guerras de expulsão → resistência indígena contínua.",
    feedbackErro: "Essa não é a próxima. Comece pelo Regulamento das Missões (1845).",
    falaFinal: "Quatro marcos que revelam como o Império tratou os povos indígenas como obstáculo, não como cidadãos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página do livro-atlas. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Império",
    subtitulo: "Página — Terra Indígena, Lei Imperial",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Em 1845, o Império criou o REGULAMENTO DAS MISSÕES, que organizava a política indigenista oficial: povos indígenas deveriam viver em ALDEAMENTOS, sob direção de missionários e funcionários, sendo 'catequizados e civilizados' — ou seja, convertidos ao cristianismo e adaptados aos costumes europeus.",
        chaves: ["Regulamento das Missões"],
        definicoes: {
          "Regulamento das Missões":
            "Decreto de 1845 que organizou aldeamentos indígenas dirigidos por missionários, com objetivo declarado de catequese e 'civilização'.",
        },
        fotoUrl: imgConst,
      },
      {
        id: "p2",
        texto:
          "Em 1850, a LEI DE TERRAS determinou que só era propriedade legal a terra com título registrado. Como muitas comunidades indígenas ocupavam suas terras sem documentos formais — pois viviam ali há gerações, sem precisar de papéis —, essas áreas foram classificadas como 'devolutas' e repassadas a fazendeiros de café e a colônias de imigrantes europeus.",
        chaves: ["Lei de Terras"],
        definicoes: {
          "Lei de Terras":
            "Lei de 1850 que exigia título formal de propriedade, classificando terras indígenas sem documentos como 'devolutas' e abertas à ocupação.",
        },
        fotoUrl: imgFazenda,
      },
      {
        id: "p3",
        texto:
          "Quando a catequese e a legislação não bastavam para 'liberar' terras, o Estado recorreu à GUERRA. Expedições militares contra os Kaingang, no Sul, e os Botocudo, em Minas Gerais e no Espírito Santo, duraram décadas e resultaram em massacres, escravização disfarçada de tutela e expulsão territorial.",
        chaves: ["Guerra de expulsão"],
        definicoes: {
          "Guerra de expulsão":
            "Conflitos militares promovidos pelo Império contra povos indígenas para abrir suas terras a colonos e fazendeiros.",
        },
        fotoUrl: imgIpiranga,
      },
      {
        id: "p4",
        texto:
          "Apesar da violência estatal, os povos indígenas RESISTIRAM: preservaram línguas, práticas religiosas e redes de parentesco, mesmo dentro dos aldeamentos, e continuaram reivindicando suas terras tradicionais. Essa luta por demarcação de território segue até os dias de hoje, mostrando a longa duração dessa história.",
        chaves: ["Resistência indígena"],
        definicoes: {
          "Resistência indígena":
            "Conjunto de estratégias de povos indígenas para preservar cultura, autonomia e território frente à política de assimilação e expulsão do Estado.",
        },
        fotoUrl: imgPedro,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica como a política indigenista imperial combinou catequese, lei e violência.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada elemento ao seu instrumento correto de política indigenista.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "reg", emoji: "⛪", rotulo: "Aldeamento" },
      { id: "lei", emoji: "🗺️", rotulo: "Lei de Terras" },
      { id: "guer", emoji: "⚔️", rotulo: "Guerra de expulsão" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Decreto de 1845", emoji: "📜", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Catequese e 'civilização'", emoji: "⛪", cor: "from-amber-600 to-slate-900" },
        contexto: "Política de assimilação por missionários.",
        pecaCertaId: "reg",
        feedbackAcerto: "Correto. É o Regulamento das Missões, criando aldeamentos.",
        feedbackErro: "É o Aldeamento (Regulamento das Missões, 1845).",
      },
      {
        id: "r2",
        municipioA: { nome: "Terra sem título formal", emoji: "📄", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Classificada como 'devoluta'", emoji: "🗺️", cor: "from-emerald-600 to-slate-900" },
        contexto: "Lei de 1850.",
        pecaCertaId: "lei",
        feedbackAcerto: "Correto. É a Lei de Terras (1850).",
        feedbackErro: "É a Lei de Terras — terras sem título formal ficaram 'devolutas'.",
      },
      {
        id: "r3",
        municipioA: { nome: "Kaingang, no Sul", emoji: "🏹", cor: "from-red-800 to-slate-900" },
        municipioB: { nome: "Expedição militar imperial", emoji: "⚔️", cor: "from-red-700 to-slate-900" },
        contexto: "Conflito por terras destinadas a colonos.",
        pecaCertaId: "guer",
        feedbackAcerto: "Correto. Foi uma Guerra de expulsão.",
        feedbackErro: "É Guerra de expulsão — expedição contra os Kaingang.",
      },
      {
        id: "r4",
        municipioA: { nome: "Botocudo, em Minas Gerais", emoji: "🌲", cor: "from-red-800 to-slate-900" },
        municipioB: { nome: "Guerra prolongada por décadas", emoji: "⚔️", cor: "from-red-700 to-slate-900" },
        contexto: "Ocupação de terras por estradas e colonos.",
        pecaCertaId: "guer",
        feedbackAcerto: "Correto. Também é uma Guerra de expulsão.",
        feedbackErro: "É Guerra de expulsão — conflito contra os Botocudo.",
      },
      {
        id: "r5",
        municipioA: { nome: "Missionários dirigindo indígenas", emoji: "⛪", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Trabalho e conversão religiosa", emoji: "🙏", cor: "from-amber-600 to-slate-900" },
        contexto: "Vida cotidiana nos aldeamentos.",
        pecaCertaId: "reg",
        feedbackAcerto: "Correto. É o Aldeamento.",
        feedbackErro: "É o Aldeamento — controle religioso e de trabalho.",
      },
      {
        id: "r6",
        municipioA: { nome: "Avanço do café em São Paulo", emoji: "☕", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Terras indígenas repassadas a fazendeiros", emoji: "🌾", cor: "from-emerald-600 to-slate-900" },
        contexto: "Efeito prático da lei de 1850.",
        pecaCertaId: "lei",
        feedbackAcerto: "Correto. É a Lei de Terras.",
        feedbackErro: "É a Lei de Terras — abriu terras 'devolutas' ao café.",
      },
    ],
    falaFinal: "6 rodadas! Você já domina os instrumentos da política indigenista imperial.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da política indigenista imperial: dois grandes instrumentos de controle territorial.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFazenda,
    fatias: [
      {
        id: "lei",
        rotulo: "Lei de Terras (1850)",
        emoji: "🗺️",
        percentual: 55,
        cor: "#047857",
        descricao:
          "Classificou terras indígenas sem título formal como 'devolutas', permitindo sua venda a fazendeiros e colonos — o principal instrumento legal de despojamento territorial.",
        exemplos: ["🗺️ Terra 'devoluta'", "☕ Fazendas de café", "🧑‍🌾 Colonos europeus"],
      },
      {
        id: "guer",
        rotulo: "Guerras de expulsão",
        emoji: "⚔️",
        percentual: 45,
        cor: "#991b1b",
        descricao:
          "Expedições militares contra povos como os Kaingang e os Botocudo, usadas quando a lei e a catequese não bastavam para liberar terras à colonização.",
        exemplos: ["🏹 Kaingang", "🌲 Botocudo", "⚔️ Expedições militares"],
      },
    ],
    falaFinal: "Lei e guerra, mãos dadas: dois caminhos para o mesmo resultado, a perda de território indígena.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem da Terra Indígena.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgIpiranga,
    perguntas: [
      {
        id: "av1",
        pergunta: "O que o Regulamento das Missões (1845) estabeleceu para os povos indígenas?",
        opcoes: [
          { id: "a", texto: "Aldeamentos de catequese e 'civilização', dirigidos por missionários.", correta: true },
          { id: "b", texto: "Autonomia política total.", correta: false },
          { id: "c", texto: "Direito automático de voto.", correta: false },
        ],
        feedbackAcerto: "Correto. Organizou aldeamentos de catequese sob direção de missionários.",
        feedbackErro: "Criou aldeamentos de catequese e 'civilização', dirigidos por missionários.",
      },
      {
        id: "av2",
        pergunta: "Qual foi o efeito prático da Lei de Terras (1850) sobre territórios indígenas?",
        opcoes: [
          { id: "a", texto: "Garantiu títulos automáticos aos indígenas.", correta: false },
          { id: "b", texto: "Classificou terras sem título formal como 'devolutas', abertas à ocupação.", correta: true },
          { id: "c", texto: "Proibiu qualquer venda de terra no país.", correta: false },
        ],
        feedbackAcerto: "Correto. Terras indígenas sem documento formal foram consideradas 'devolutas'.",
        feedbackErro: "Ela classificou terras sem título como 'devolutas', abertas a fazendeiros e colonos.",
      },
      {
        id: "av3",
        pergunta: "O que aconteceu quando a catequese não 'liberava' terras indígenas o suficiente?",
        opcoes: [
          { id: "a", texto: "O Império desistia da ocupação.", correta: false },
          { id: "b", texto: "O Império recorreu a expedições militares, como contra os Kaingang e os Botocudo.", correta: true },
          { id: "c", texto: "As terras eram devolvidas por completo.", correta: false },
        ],
        feedbackAcerto: "Correto. Guerras de expulsão contra povos como Kaingang e Botocudo.",
        feedbackErro: "O Império recorreu a guerras de expulsão, como contra Kaingang e Botocudo.",
      },
    ],
    selo: {
      nome: "Terra Indígena, Lei Imperial",
      subtitulo: "Engrenagem da Política Indigenista",
      emoji: "🪶",
      cor: "from-amber-600 to-slate-900",
      fotoUrl: imgFazenda,
    },
    falaFinal:
      "Engrenagem destravada. Catequese, lei e guerra revelam como o Império tratou os povos indígenas como obstáculo à expansão territorial.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Terra Indígena, Lei Imperial" },
};
