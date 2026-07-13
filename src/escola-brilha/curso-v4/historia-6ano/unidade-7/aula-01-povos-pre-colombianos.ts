import type { AulaGeoV1 } from "../../types";
import imgMachu from "@/assets/historia-6ano/u7-machu-picchu.jpg";
import imgQuipu from "@/assets/historia-6ano/u7-quipu.jpg";
import imgCalendario from "@/assets/historia-6ano/u7-calendario-asteca.jpg";
import imgTeno from "@/assets/historia-6ano/u7-tenochtitlan.jpg";
import imgMapa from "@/assets/historia-6ano/u7-infografico-precolombianos.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-povos-pre-colombianos",
  titulo: "Maias, Astecas e Incas",
  iconeTrilha: "🌎",
  bncc: ["EF06HI13", "EF06HI14"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgMachu,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Machu Picchu, 2.430 metros de altitude. Tenochtitlán, cidade de 200 mil habitantes num lago. Calendários astronômicos maias com precisão comparável à ciência moderna. Antes de 1492, as Américas já abrigavam grandes civilizações complexas. Colombo não 'descobriu' nada vazio.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 7, o último: O Códice Decifrado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Um dos três grandes povos pré-colombianos usava CORDÕES COLORIDOS com nós pra registrar informação — sem alfabeto escrito, mas com um sistema muito eficiente.",
    pergunta: "Qual povo pré-colombiano usava QUIPUS (cordões com nós) pra registrar dados?",
    fotoUrl: imgQuipu,
    opcoes: [
      {
        id: "in",
        titulo: "INCAS",
        subtitulo: "Cordilheira dos Andes",
        emoji: "🏔️",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "ma",
        titulo: "MAIAS",
        subtitulo: "Península de Iucatã",
        emoji: "🌿",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "in",
    feedbackAcerto:
      "Correto. Os INCAS usavam QUIPUS — cordões coloridos com nós — pra registrar quantidades, tributos, população e até narrativas. Não tinham escrita alfabética, mas o sistema funcionava por todo o império.",
    feedbackErro:
      "Não. Os MAIAS tinham escrita própria com hieróglifos. Os QUIPUS de cordas eram uma tecnologia INCA — feita pra registrar informação num sistema decimal.",
    falaFinal:
      "Guarde: cada povo pré-colombiano criou soluções PRÓPRIAS de registro e organização.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave dos grandes povos pré-colombianos.",
    instrucao: "",
    cadernos: [
      {
        id: "ma",
        capa: "Maias",
        emoji: "🌿",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgCalendario,
        conteudo:
          "MAIAS viveram na atual Península de Iucatã (México, Guatemala, Belize, Honduras). Séc. III a IX d.C. foi seu apogeu. Cidades-estado independentes, escrita hieroglífica, matemática avançada com o zero e calendários astronômicos precisos.",
        exemplo:
          "Exemplo: os maias inventaram o ZERO independentemente dos indianos, séculos antes de o zero chegar à Europa. E seus calendários preveem eclipses com precisão de segundos.",
      },
      {
        id: "as",
        capa: "Astecas",
        emoji: "🦅",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTeno,
        conteudo:
          "ASTECAS (ou mexicas) dominaram o México Central entre 1325 e 1521. Capital: TENOCHTITLÁN, uma cidade de 200 mil habitantes construída sobre o Lago Texcoco, com chinampas (ilhas artificiais de cultivo) e mercados imensos.",
        exemplo:
          "Exemplo: os primeiros espanhóis que viram Tenochtitlán em 1519 disseram parecer um sonho: mais organizada, limpa e populosa que qualquer cidade europeia da época.",
      },
      {
        id: "in",
        capa: "Incas",
        emoji: "🏔️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMachu,
        conteudo:
          "INCAS formaram o MAIOR império das Américas: mais de 40 mil km de estradas atravessando a Cordilheira dos Andes, da Colômbia à Argentina. Capital em Cusco (Peru). Estado centralizado, terraços agrícolas, quipus e cirurgias.",
        exemplo:
          "Exemplo: a MITA era o sistema inca de trabalho coletivo obrigatório: cada família contribuía com força de trabalho pro Estado, em troca de armazéns públicos abertos em época de crise.",
      },
      {
        id: "reg",
        capa: "Sistemas de registro",
        emoji: "📚",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgQuipu,
        conteudo:
          "Cada civilização criou UM SISTEMA próprio pra registrar informação. Maias tinham hieróglifos e códices em papel de casca de árvore. Astecas usavam pictogramas. Incas usavam QUIPUS de cordas coloridas com nós.",
        exemplo:
          "Exemplo: o Códice de Dresden é um dos poucos livros maias que sobreviveu à queima feita pelos colonizadores espanhóis no séc. XVI. Milhares foram destruídos.",
      },
    ],
    falaFinal:
      "Maias + Astecas + Incas + Sistemas de registro. Três civilizações, três geografias, três sistemas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico oficial dos povos pré-colombianos. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "ma",
        x: 25,
        y: 40,
        emoji: "🌿",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgCalendario,
        titulo: "MAIAS · Iucatã (México)",
        texto:
          "Península de Iucatã, sul do México e Guatemala. Cidades-estado (Chichén Itzá, Tikal, Palenque). Escrita hieroglífica, zero, calendários astronômicos, matemática avançada.",
      },
      {
        id: "as",
        x: 30,
        y: 55,
        emoji: "🦅",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTeno,
        titulo: "ASTECAS · México Central",
        texto:
          "Capital em Tenochtitlán (~200 mil habitantes) no Lago Texcoco. Chinampas, mercados enormes, cobrança de tributos de povos vizinhos, exército forte.",
      },
      {
        id: "in",
        x: 40,
        y: 75,
        emoji: "🏔️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMachu,
        titulo: "INCAS · Cordilheira dos Andes",
        texto:
          "Império do Peru à Argentina. Capital em Cusco. 40 mil km de estradas, terraços agrícolas, mita, quipus, Machu Picchu, cirurgia craniana.",
      },
      {
        id: "us",
        x: 70,
        y: 40,
        emoji: "🗺️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMapa,
        titulo: "MAPA GERAL",
        texto:
          "Três civilizações localizadas em regiões DIFERENTES: Iucatã (Maias), México Central (Astecas), Andes (Incas). Não se conheciam entre si.",
      },
    ],
    falaFinal:
      "Três civilizações. Três geografias. Três projetos de sociedade. Todas complexas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de americanista.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual povo construiu MACHU PICCHU na Cordilheira dos Andes?",
        fotoUrl: imgMachu,
        cards: [
          { id: "i", emoji: "🏔️", titulo: "Incas", cor: "from-cyan-600 to-slate-900" },
          { id: "m", emoji: "🌿", titulo: "Maias", cor: "from-teal-600 to-slate-900" },
          { id: "a", emoji: "🦅", titulo: "Astecas", cor: "from-amber-600 to-slate-900" },
        ],
        correta: "i",
        feedbackAcerto: "Correto. Machu Picchu foi construído pelos INCAS no séc. XV.",
        feedbackErro: "É INCAS. Machu Picchu fica no Peru, coração do Império Inca.",
      },
      {
        id: "q2",
        pergunta: "Qual povo construiu a cidade de TENOCHTITLÁN sobre um lago?",
        fotoUrl: imgTeno,
        cards: [
          { id: "a", emoji: "🦅", titulo: "Astecas", cor: "from-amber-600 to-slate-900" },
          { id: "m", emoji: "🌿", titulo: "Maias", cor: "from-teal-600 to-slate-900" },
          { id: "i", emoji: "🏔️", titulo: "Incas", cor: "from-cyan-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. ASTECAS. Tenochtitlán ficava no atual centro da Cidade do México.",
        feedbackErro: "É ASTECAS. Tenochtitlán foi construída no Lago Texcoco, no México Central.",
      },
      {
        id: "q3",
        pergunta: "Qual civilização pré-colombiana inventou o ZERO independentemente?",
        fotoUrl: imgCalendario,
        cards: [
          { id: "m", emoji: "🌿", titulo: "Maias", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "🏛️", titulo: "Astecas", cor: "from-amber-600 to-slate-900" },
          { id: "i", emoji: "🏔️", titulo: "Incas", cor: "from-cyan-600 to-slate-900" },
        ],
        correta: "m",
        feedbackAcerto:
          "Correto. MAIAS. Inventaram o zero séculos antes de o conceito chegar à Europa.",
        feedbackErro:
          "É MAIAS. Matemática maia usava o zero e sistema base 20.",
      },
    ],
    falaFinal: "Radar afiado. Você já distingue os três grandes povos pré-colombianos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre as Américas em 1491. Um destaca as GRANDES CIVILIZAÇÕES; outro os povos DIVERSOS espalhados pelo continente.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "grand",
        rotulo: "Grandes civilizações",
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 15, y: 30, w: 40, h: 55 },
        descricao:
          "Maias (Iucatã), Astecas (México Central), Incas (Andes). Grandes cidades, tributos, escrita, calendário, engenharia.",
      },
      {
        id: "div",
        rotulo: "Milhares de outros povos",
        emoji: "🌎",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 55, y: 40, w: 40, h: 55 },
        descricao:
          "Amazônia, planícies norte-americanas, Andes: MILHARES de povos indígenas com línguas, tecnologias e organizações próprias. Nem tudo era império.",
      },
    ],
    falaFinal:
      "Antes de 1492, as Américas tinham diversidade cultural imensa — muito além dos três grandes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo dos grandes povos pré-colombianos, do mais antigo ao mais recente.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Linha do tempo das Américas",
    paradas: [
      {
        id: "olm",
        emoji: "🗿",
        rotulo: "1. Olmecas (2000 a.C.)",
        fotoUrl: imgMapa,
        descricao: "Cultura-mãe do México, base para maias e astecas.",
      },
      {
        id: "ma",
        emoji: "🌿",
        rotulo: "2. Apogeu maia (300–900 d.C.)",
        fotoUrl: imgCalendario,
        descricao: "Cidades-estado, escrita, calendário, matemática.",
      },
      {
        id: "as",
        emoji: "🦅",
        rotulo: "3. Império Asteca (1325–1521)",
        fotoUrl: imgTeno,
        descricao: "Tenochtitlán domina o México Central.",
      },
      {
        id: "in",
        emoji: "🏔️",
        rotulo: "4. Império Inca (1438–1533)",
        fotoUrl: imgMachu,
        descricao: "Auge da expansão inca nos Andes.",
      },
    ],
    ordemCerta: ["olm", "ma", "as", "in"],
    feedbackAcerto:
      "Perfeito. Olmecas → Maias → Astecas → Incas. Sucessão de civilizações.",
    feedbackErro: "Essa não é a próxima. Olmecas são a base — muito antes dos outros.",
    falaFinal: "As Américas tinham camadas milenares de história antes de 1492.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 7 — o último. Toque nos termos técnicos.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 7 — O Códice Decifrado",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Antes de 1492, as Américas abrigavam MILHARES de povos indígenas. Entre eles, três civilizações se destacaram por seu tamanho e complexidade: MAIAS, ASTECAS e INCAS. Nenhuma delas se conhecia — viviam a milhares de quilômetros umas das outras.",
        chaves: ["Maias", "Astecas", "Incas"],
        definicoes: {
          Maias:
            "Povo da Península de Iucatã (México/Guatemala). Cidades-estado, escrita hieroglífica, matemática com o zero, calendário astronômico.",
          Astecas:
            "Povo (também chamado mexicas) do México Central. Império com capital em Tenochtitlán, chinampas, cobrança de tributos.",
          Incas:
            "Povo da Cordilheira dos Andes. Maior império das Américas. Estradas, mita, quipus, Machu Picchu.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p2",
        texto:
          "Os MAIAS desenvolveram um dos sistemas matemáticos mais avançados da Antiguidade, com o zero, sistema base 20 e calendários astronômicos precisos. Suas cidades-estado (Chichén Itzá, Tikal, Palenque) tinham pirâmides, observatórios e escrita hieroglífica.",
        chaves: ["Escrita hieroglífica maia"],
        definicoes: {
          "Escrita hieroglífica maia":
            "Sistema de escrita própria dos maias, com centenas de símbolos que combinavam ideias e sons. Só começou a ser plenamente decifrado no século XX.",
        },
        fotoUrl: imgCalendario,
      },
      {
        id: "p3",
        texto:
          "Os ASTECAS construíram TENOCHTITLÁN, cidade sobre o Lago Texcoco com cerca de 200 mil habitantes — mais populosa que qualquer cidade europeia da mesma época. Usavam CHINAMPAS (ilhas artificiais de cultivo) e mercados imensos, além de cobrar tributos dos povos vizinhos.",
        chaves: ["Tenochtitlán", "Chinampas"],
        definicoes: {
          Tenochtitlán:
            "Capital do Império Asteca, no Lago Texcoco. Fundada em 1325, destruída pelos espanhóis em 1521. Está sob a atual Cidade do México.",
          Chinampas:
            "Ilhas agrícolas construídas dentro do lago, extremamente produtivas. Sustentavam a alta densidade populacional asteca.",
        },
        fotoUrl: imgTeno,
      },
      {
        id: "p4",
        texto:
          "Os INCAS ergueram o MAIOR império das Américas, com mais de 40 mil km de estradas ligando a Colômbia à Argentina. Usavam QUIPUS (cordões coloridos com nós) pra registrar informação, praticavam cirurgias e organizavam o trabalho pela MITA — sistema coletivo obrigatório.",
        chaves: ["Quipus", "Mita"],
        definicoes: {
          Quipus:
            "Cordões coloridos com nós usados pelos incas pra registrar quantidades, tributos, censos e talvez narrativas.",
          Mita:
            "Trabalho coletivo obrigatório no Império Inca. Cada família contribuía com força de trabalho em obras públicas em troca de proteção e reservas alimentares.",
        },
        fotoUrl: imgMachu,
      },
    ],
    falaFinal:
      "Leitura concluída. Você acabou de decifrar o Códice. As Américas tinham civilizações sofisticadas ANTES de qualquer europeu chegar.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de americanista. Classifique cada elemento em MAIA, ASTECA ou INCA.",
    instrucao: "⏱️ Toque no povo correto",
    duracaoSegundos: 24,
    pecas: [
      { id: "ma", emoji: "🌿", rotulo: "Maias" },
      { id: "as", emoji: "🦅", rotulo: "Astecas" },
      { id: "in", emoji: "🏔️", rotulo: "Incas" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Machu Picchu (Peru)", emoji: "🏔️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Cidade nos Andes", emoji: "🗻", cor: "from-cyan-600 to-slate-900" },
        contexto: "Cidade de pedra a 2.430 metros de altitude.",
        pecaCertaId: "in",
        feedbackAcerto: "Correto. Machu Picchu = INCAS.",
        feedbackErro: "Machu Picchu é INCA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Tenochtitlán sobre lago", emoji: "🏙️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Cidade em ilha artificial", emoji: "🌊", cor: "from-amber-600 to-slate-900" },
        contexto: "Cidade de 200 mil habitantes no México Central.",
        pecaCertaId: "as",
        feedbackAcerto: "Correto. Tenochtitlán = ASTECAS.",
        feedbackErro: "Tenochtitlán foi capital ASTECA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Escrita hieroglífica e zero matemático", emoji: "📜", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Símbolos e matemática", emoji: "🔢", cor: "from-teal-600 to-slate-900" },
        contexto: "Sistema avançado inventado na Iucatã.",
        pecaCertaId: "ma",
        feedbackAcerto: "Correto. Zero e hieróglifos = MAIAS.",
        feedbackErro: "Escrita hieroglífica e zero são invenções MAIAS.",
      },
      {
        id: "r4",
        municipioA: { nome: "Quipus (cordões com nós)", emoji: "🧶", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Registro em cordas", emoji: "🪢", cor: "from-cyan-600 to-slate-900" },
        contexto: "Sistema de registro por nós coloridos.",
        pecaCertaId: "in",
        feedbackAcerto: "Correto. Quipus = INCAS.",
        feedbackErro: "Quipus são registros INCAS.",
      },
      {
        id: "r5",
        municipioA: { nome: "Chinampas: ilhas de cultivo no lago", emoji: "🌾", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Agricultura em ilhas", emoji: "🏝️", cor: "from-amber-600 to-slate-900" },
        contexto: "Técnica agrícola no Vale do México.",
        pecaCertaId: "as",
        feedbackAcerto: "Correto. Chinampas = ASTECAS.",
        feedbackErro: "Chinampas são técnica ASTECA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Rede de 40.000 km de estradas nos Andes", emoji: "🛤️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Sistema viário imperial", emoji: "🗺️", cor: "from-teal-600 to-slate-900" },
        contexto: "Estradas cruzando a cordilheira, ligando várias regiões.",
        pecaCertaId: "in",
        feedbackAcerto: "Correto. Estradas dos Andes = INCAS.",
        feedbackErro: "Rede de estradas nos Andes = INCAS.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já distingue os três grandes povos pré-colombianos como um americanista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da população das Américas em 1491: proporção entre povos indígenas SEDENTÁRIOS (grandes civilizações) e povos SEMISSEDENTÁRIOS/NÔMADES (diversos).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMapa,
    fatias: [
      {
        id: "sed",
        rotulo: "Grandes civilizações (~60%)",
        emoji: "🏛️",
        percentual: 60,
        cor: "#b45309",
        descricao:
          "Maias, Astecas, Incas e outros povos sedentários com cidades, agricultura intensiva, escrita/registro e Estado organizado.",
        exemplos: ["🌿 Maias", "🦅 Astecas", "🏔️ Incas"],
      },
      {
        id: "div",
        rotulo: "Povos diversos (~40%)",
        emoji: "🌎",
        percentual: 40,
        cor: "#0f766e",
        descricao:
          "Milhares de povos semissedentários e nômades: Amazônia, Grandes Planícies, Caribe, Pampas. Línguas, tecnologias e organizações próprias.",
        exemplos: ["🏹 Caçadores", "🌳 Amazônicos", "🐎 Planícies"],
      },
    ],
    falaFinal:
      "Antes de 1492, as Américas eram um mosaico de milhares de sociedades — nem 'vazias' nem 'primitivas'.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Códice Decifrado — e completar a jornada.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgMachu,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual povo construiu Machu Picchu na Cordilheira dos Andes?",
        opcoes: [
          { id: "a", texto: "Astecas.", correta: false },
          { id: "b", texto: "Incas.", correta: true },
          { id: "c", texto: "Vikings.", correta: false },
        ],
        feedbackAcerto: "Correto. INCAS. Machu Picchu foi construída no séc. XV no Peru.",
        feedbackErro: "É INCAS. Machu Picchu fica no coração do Império Inca.",
      },
      {
        id: "av2",
        pergunta: "Qual povo pré-colombiano inventou o ZERO independentemente?",
        opcoes: [
          { id: "a", texto: "Maias.", correta: true },
          { id: "b", texto: "Astecas.", correta: false },
          { id: "c", texto: "Incas.", correta: false },
        ],
        feedbackAcerto: "Correto. MAIAS. Séculos antes de o zero chegar à Europa.",
        feedbackErro: "É MAIAS. Matemática maia é famosa pelo uso do zero e do sistema base 20.",
      },
      {
        id: "av3",
        pergunta: "O que era o sistema QUIPU?",
        opcoes: [
          { id: "a", texto: "Um esporte asteca.", correta: false },
          { id: "b", texto: "Cordões coloridos com nós usados pelos incas pra registrar informação.", correta: true },
          { id: "c", texto: "Uma cerimônia religiosa maia.", correta: false },
        ],
        feedbackAcerto: "Correto. QUIPU = registro em cordões com nós, sistema INCA.",
        feedbackErro: "QUIPU é o sistema INCA de registro por cordões e nós.",
      },
    ],
    selo: {
      nome: "Códice Decifrado",
      subtitulo: "Fragmento 7 — Códice COMPLETO",
      emoji: "📜",
      cor: "from-emerald-500 to-slate-900",
      fotoUrl: imgMapa,
    },
    falaFinal:
      "Códice DECIFRADO. Você agora entende: as Américas nunca foram 'vazias'. Estavam cheias de gente, ciência, cidades e história — muito antes de 1492.",
  },

  recompensa: { xp: 800, moedas: 600, medalha: "Códice Decifrado" },
};
