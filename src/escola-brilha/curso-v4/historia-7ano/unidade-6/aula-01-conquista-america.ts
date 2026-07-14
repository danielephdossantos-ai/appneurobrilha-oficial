import type { AulaGeoV1 } from "../../types";
import { url as imgCortes } from "@/assets/historia-7ano/u6-cortes-astecas.jpg.asset.json";
import { url as imgVilca } from "@/assets/historia-7ano/u6-vilcabamba.jpg.asset.json";
import { url as imgCodice } from "@/assets/historia-7ano/u6-codice-florentino.jpg.asset.json";
import { url as imgObs } from "@/assets/historia-7ano/u6-obsidiana-aco.jpg.asset.json";
import { url as imgConq } from "@/assets/historia-7ano/u6-infografico-conquista.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-conquista-america",
  titulo: "A Conquista da América e as Sociedades Indígenas",
  iconeTrilha: "⚔️",
  bncc: ["EF07HI11", "EF07HI12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgCortes,
    imagemDestaqueUrl: imgConq,
    aurora:
      "Poucos centenas de espanhóis derrubaram os IMPÉRIOS ASTECA e INCA — milhões de habitantes, exércitos de milhares. Como? Não foi 'superioridade natural': foi combinação de armas de metal, cavalos, ALIANÇAS com povos rivais e — o pior de todos — DOENÇAS contra as quais os indígenas não tinham defesa.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 6 da Bússola: O Painel do Templo Indígena Subjugado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Hernán Cortés chegou ao México com poucas centenas de soldados. Como conseguiu derrotar Montezuma e milhares de guerreiros astecas?",
    pergunta: "Qual foi o fator DECISIVO da vitória espanhola sobre os astecas?",
    fotoUrl: imgCortes,
    opcoes: [
      {
        id: "ali",
        titulo: "ALIANÇAS COM POVOS INIMIGOS + DOENÇAS",
        subtitulo: "tlaxcaltecas + varíola + gripe",
        emoji: "🤝",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "sup",
        titulo: "PURA SUPERIORIDADE ESPANHOLA",
        subtitulo: "soldados imbatíveis, sozinhos",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "ali",
    feedbackAcerto:
      "Correto. Cortés aliou-se aos TLAXCALTECAS (inimigos históricos dos astecas) e a DOENÇAS europeias devastaram os indígenas. Sem essa combinação, a conquista não aconteceria.",
    feedbackErro:
      "Não. Sozinhos, os espanhóis seriam esmagados. O que decidiu foram as ALIANÇAS com povos indígenas rivais dos astecas + o impacto DEVASTADOR das doenças.",
    falaFinal:
      "Guarde: conquista NÃO foi 'europeus superiores'. Foi doença + aliança + violência.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da conquista da América.",
    instrucao: "",
    cadernos: [
      {
        id: "cor",
        capa: "Hernán Cortés",
        emoji: "⚔️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgCortes,
        conteudo:
          "HERNÁN CORTÉS foi o conquistador espanhol que liderou a invasão do México asteca (1519-1521). Chegou com ~600 homens, aliou-se aos tlaxcaltecas e destruiu Tenochtitlán, capital do Império Asteca.",
        exemplo:
          "Exemplo: quando Cortés desembarcou em Veracruz, mandou queimar seus próprios navios para forçar seus homens a lutar até o fim. Sem retorno possível.",
      },
      {
        id: "piz",
        capa: "Francisco Pizarro",
        emoji: "🗡️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgVilca,
        conteudo:
          "FRANCISCO PIZARRO foi o conquistador espanhol que derrubou o Império Inca (1532-1533). Com ~180 homens, aprisionou o imperador Atahualpa em Cajamarca e depois o executou, apesar do resgate em ouro.",
        exemplo:
          "Exemplo: o resgate de Atahualpa encheu um quarto de 6×5 metros de OURO até a altura do braço estendido. Pizarro recebeu, e mesmo assim matou o imperador. Marca da traição colonial.",
      },
      {
        id: "epi",
        capa: "Epidemias",
        emoji: "🦠",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgCodice,
        conteudo:
          "EPIDEMIAS de varíola, gripe, sarampo e tifo trazidas pelos europeus mataram até 80% da população indígena das Américas em um século. Doenças contra as quais os corpos nativos NÃO tinham defesa biológica.",
        exemplo:
          "Exemplo: antes de a maior parte dos espanhóis chegar aos Andes, a varíola já tinha matado o imperador inca Huayna Capac e o herdeiro — abrindo uma guerra civil que facilitou a conquista.",
      },
      {
        id: "etn",
        capa: "Etnocídio",
        emoji: "📿",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgObs,
        conteudo:
          "ETNOCÍDIO é a destruição SISTEMÁTICA da cultura de um povo: templos derrubados, livros queimados, línguas proibidas, religião imposta à força. Os espanhóis fizeram isso com maias, astecas e incas.",
        exemplo:
          "Exemplo: em 1562, o bispo Diego de Landa queimou milhares de códices maias em Yucatán, alegando que continham 'superstições demoníacas'. Restaram só 4 códices maias completos no mundo.",
      },
    ],
    falaFinal:
      "Cortés + Pizarro + Epidemias + Etnocídio. Quatro dimensões da conquista.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico dos fatores da conquista das Américas. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgConq,
    pontos: [
      {
        id: "arm",
        x: 15,
        y: 45,
        emoji: "🔫",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgObs,
        titulo: "1. ARMAS DE FOGO E CAVALOS",
        texto:
          "Arcabuzes, canhões, espadas de aço, armaduras metálicas e cavalos (desconhecidos nas Américas). Vantagem enorme em batalhas frontais.",
      },
      {
        id: "ali",
        x: 40,
        y: 45,
        emoji: "🤝",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgCortes,
        titulo: "2. ALIANÇAS COM POVOS INIMIGOS",
        texto:
          "Tlaxcaltecas (odiavam astecas), cañaris (odiavam incas). Muitos indígenas viram nos espanhóis oportunidade de libertação — e depois foram traídos.",
      },
      {
        id: "epi",
        x: 65,
        y: 45,
        emoji: "🦠",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgCodice,
        titulo: "3. EPIDEMIAS DEVASTADORAS",
        texto:
          "Varíola, gripe, sarampo, tifo. Até 80% da população indígena morreu em um século. Fator decisivo (às vezes chegava antes dos próprios europeus).",
      },
      {
        id: "etn",
        x: 90,
        y: 45,
        emoji: "📿",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgObs,
        titulo: "4. DESTRUIÇÃO CULTURAL",
        texto:
          "Etnocídio: templos derrubados, livros queimados, línguas proibidas, religião católica imposta. Apagar a memória dos povos vencidos.",
      },
    ],
    falaFinal:
      "Quatro fatores combinados. Nenhum deles sozinho explica a conquista.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador crítico da conquista.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual conquistador espanhol derrubou o Império ASTECA?",
        fotoUrl: imgCortes,
        cards: [
          { id: "c", emoji: "⚔️", titulo: "Hernán Cortés", cor: "from-amber-600 to-slate-900" },
          { id: "p", emoji: "🗡️", titulo: "Francisco Pizarro", cor: "from-teal-600 to-slate-900" },
          { id: "m", emoji: "⛵", titulo: "Fernão de Magalhães", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. CORTÉS derrubou os astecas. Pizarro derrubou os incas.",
        feedbackErro: "É CORTÉS. Pizarro foi contra os incas.",
      },
      {
        id: "q2",
        pergunta: "Qual fator INVISÍVEL trazido pelos europeus foi o maior responsável pela mortandade indígena?",
        fotoUrl: imgCodice,
        cards: [
          { id: "d", emoji: "🦠", titulo: "Doenças (varíola, gripe, sarampo)", cor: "from-cyan-600 to-slate-900" },
          { id: "a", emoji: "🎓", titulo: "Falta de educação indígena", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🌾", titulo: "Falta de agricultura", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "d",
        feedbackAcerto: "Correto. EPIDEMIAS mataram até 80% da população em um século.",
        feedbackErro: "Foram as DOENÇAS. Povos indígenas tinham agricultura e sistemas educacionais avançados.",
      },
      {
        id: "q3",
        pergunta: "Por que os TLAXCALTECAS se aliaram aos espanhóis contra os astecas?",
        fotoUrl: imgCortes,
        cards: [
          { id: "i", emoji: "⚔️", titulo: "Eram inimigos históricos dos astecas", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "💰", titulo: "Queriam dinheiro europeu", cor: "from-amber-600 to-slate-900" },
          { id: "r", emoji: "⛪", titulo: "Queriam converter-se ao catolicismo", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "i",
        feedbackAcerto: "Correto. INIMIGOS históricos. Astecas cobravam tributos pesados e faziam sacrifícios.",
        feedbackErro: "Foram INIMIGOS históricos — pagavam tributo pesado aos astecas e sofriam com sacrifícios humanos.",
      },
    ],
    falaFinal: "Radar afiado. Você já lê a conquista como um evento MULTICAUSAL.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre as Américas em 1500. GRANDES CIVILIZAÇÕES × MILHARES DE OUTROS POVOS.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgConq,
    camadas: [
      {
        id: "civ",
        rotulo: "Grandes civilizações",
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 15, y: 25, w: 30, h: 60 },
        descricao:
          "Astecas (México), Incas (Andes), Maias (Iucatã) e outros. Cidades enormes, escrita/quipus, matemática, arquitetura monumental.",
      },
      {
        id: "res",
        rotulo: "Milhares de outros povos",
        emoji: "🌎",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 55, y: 25, w: 40, h: 60 },
        descricao:
          "Povos amazônicos, tupis, guaranis, caribes, pueblo, mapuche, patagônicos. Línguas, tecnologias e organizações próprias — nem tudo era império.",
      },
    ],
    falaFinal:
      "Antes de 1500, as Américas eram um mosaico com dezenas de milhões de habitantes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo da conquista europeia das Américas.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia da conquista",
    paradas: [
      {
        id: "col",
        emoji: "🌎",
        rotulo: "1. Colombo chega ao Caribe (1492)",
        fotoUrl: imgCortes,
        descricao: "Espanhóis desembarcam nas Antilhas.",
      },
      {
        id: "cor",
        emoji: "⚔️",
        rotulo: "2. Cortés derruba os astecas (1521)",
        fotoUrl: imgCortes,
        descricao: "Queda de Tenochtitlán, capital asteca.",
      },
      {
        id: "piz",
        emoji: "🗡️",
        rotulo: "3. Pizarro derruba os incas (1533)",
        fotoUrl: imgVilca,
        descricao: "Execução de Atahualpa em Cajamarca.",
      },
      {
        id: "res",
        emoji: "🛡️",
        rotulo: "4. Última resistência: Vilcabamba cai (1572)",
        fotoUrl: imgVilca,
        descricao: "Tupac Amaru I, último inca, é morto.",
      },
    ],
    ordemCerta: ["col", "cor", "piz", "res"],
    feedbackAcerto:
      "Perfeito. Colombo → Astecas → Incas → Última resistência. 80 anos de conquista.",
    feedbackErro: "Essa não é a próxima. Colombo veio primeiro; Vilcabamba foi a última resistência inca.",
    falaFinal: "80 anos entre a chegada e o esmagamento militar da última resistência inca.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 6 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 6 — O Painel do Templo Subjugado",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A CONQUISTA da América não foi um encontro pacífico, mas um processo VIOLENTO de dominação militar, cultural e demográfica. HERNÁN CORTÉS derrubou o Império Asteca (1521) e FRANCISCO PIZARRO derrubou o Império Inca (1533).",
        chaves: ["Conquista"],
        definicoes: {
          Conquista:
            "Processo militar e cultural de dominação europeia sobre os povos das Américas nos séculos XV e XVI.",
        },
        fotoUrl: imgCortes,
      },
      {
        id: "p2",
        texto:
          "A vitória espanhola dependeu de quatro fatores combinados: SUPERIORIDADE MILITAR (armas de fogo, aço, cavalos), ALIANÇAS TÁTICAS com povos indígenas inimigos dos astecas e incas, e o IMPACTO DEVASTADOR das epidemias europeias (varíola, gripe, sarampo).",
        chaves: ["Alianças táticas", "Epidemias"],
        definicoes: {
          "Alianças táticas":
            "Acordos entre espanhóis e povos indígenas rivais dos astecas ou incas, essenciais para as vitórias militares.",
          Epidemias:
            "Ondas de doenças europeias sem imunidade nas Américas. Mataram até 80% da população indígena em um século.",
        },
        fotoUrl: imgCodice,
      },
      {
        id: "p3",
        texto:
          "Uma vez conquistadas, as terras entraram no sistema de exploração colonial. A ENCOMIENDA entregava indígenas a colonos espanhóis pra trabalho forçado. A MITA (herdada dos incas) obrigava aldeias inteiras a trabalhar em minas como a de POTOSÍ, na Bolívia.",
        chaves: ["Encomienda", "Mita Colonial"],
        definicoes: {
          Encomienda:
            "Sistema espanhol que dava a colonos o direito de explorar o trabalho de grupos indígenas em troca de 'proteção' e catequese.",
          "Mita Colonial":
            "Sistema de trabalho forçado por sorteio nas minas coloniais. Adaptado do sistema inca original, mas muito mais brutal.",
        },
        fotoUrl: imgObs,
      },
      {
        id: "p4",
        texto:
          "Paralelo à violência física veio o ETNOCÍDIO: destruição sistemática de templos, códices, língua e memórias ancestrais para forçar a conversão ao catolicismo. Ainda assim, muitos povos indígenas RESISTIRAM — em revoltas, em quilombos indígenas, na preservação secreta de línguas e rituais.",
        chaves: ["Etnocídio"],
        definicoes: {
          Etnocídio:
            "Destruição sistemática da cultura, língua, religião e memória de um povo. Marca da conquista colonial.",
        },
        fotoUrl: imgVilca,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já entende por que os historiadores atuais falam em CONQUISTA e INVASÃO — não em 'descobrimento'.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de historiador da conquista. Classifique cada elemento em ARMAS/CAVALOS, ALIANÇAS, EPIDEMIAS ou ETNOCÍDIO.",
    instrucao: "⏱️ Toque no fator correto",
    duracaoSegundos: 26,
    pecas: [
      { id: "arm", emoji: "🔫", rotulo: "Armas/Cavalos" },
      { id: "ali", emoji: "🤝", rotulo: "Alianças" },
      { id: "epi", emoji: "🦠", rotulo: "Epidemias" },
      { id: "etn", emoji: "📿", rotulo: "Etnocídio" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Tlaxcaltecas aliam-se a Cortés", emoji: "🤝", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Aliança tática indígena", emoji: "🗣️", cor: "from-teal-600 to-slate-900" },
        contexto: "Povo inimigo dos astecas se junta aos espanhóis.",
        pecaCertaId: "ali",
        feedbackAcerto: "Correto. Tlaxcaltecas = ALIANÇAS.",
        feedbackErro: "É ALIANÇA — Tlaxcaltecas contra os astecas.",
      },
      {
        id: "r2",
        municipioA: { nome: "Varíola devasta populações incas", emoji: "🦠", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Epidemia europeia", emoji: "💀", cor: "from-cyan-600 to-slate-900" },
        contexto: "Doença mata milhões sem contato militar direto.",
        pecaCertaId: "epi",
        feedbackAcerto: "Correto. Varíola = EPIDEMIAS.",
        feedbackErro: "É EPIDEMIAS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Bispo Landa queima códices maias em 1562", emoji: "🔥", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Destruição de livros indígenas", emoji: "📚", cor: "from-slate-600 to-slate-900" },
        contexto: "Milhares de livros maias destruídos.",
        pecaCertaId: "etn",
        feedbackAcerto: "Correto. Queima de códices = ETNOCÍDIO.",
        feedbackErro: "É ETNOCÍDIO — destruição da memória cultural.",
      },
      {
        id: "r4",
        municipioA: { nome: "Cavalos espanhóis assustam guerreiros astecas", emoji: "🐎", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Cavalaria pesada", emoji: "⚔️", cor: "from-amber-600 to-slate-900" },
        contexto: "Animais desconhecidos nas Américas.",
        pecaCertaId: "arm",
        feedbackAcerto: "Correto. Cavalos = ARMAS/CAVALOS.",
        feedbackErro: "É ARMAS/CAVALOS.",
      },
      {
        id: "r5",
        municipioA: { nome: "Espadas e armaduras de aço", emoji: "🗡️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Metalurgia europeia", emoji: "🛡️", cor: "from-amber-600 to-slate-900" },
        contexto: "Metal supera a obsidiana das clavas indígenas.",
        pecaCertaId: "arm",
        feedbackAcerto: "Correto. Aço = ARMAS/CAVALOS.",
        feedbackErro: "É ARMAS/CAVALOS.",
      },
      {
        id: "r6",
        municipioA: { nome: "Imposição do catolicismo aos povos vencidos", emoji: "⛪", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Catequização forçada", emoji: "📿", cor: "from-slate-600 to-slate-900" },
        contexto: "Rituais católicos substituem religiões indígenas.",
        pecaCertaId: "etn",
        feedbackAcerto: "Correto. Imposição religiosa = ETNOCÍDIO.",
        feedbackErro: "É ETNOCÍDIO.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já lê a conquista como um evento COMPLEXO e multifatorial.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da queda populacional indígena nas Américas em ~100 anos: proporção entre epidemias e violência direta.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgCodice,
    fatias: [
      {
        id: "epi",
        rotulo: "Epidemias (~75%)",
        emoji: "🦠",
        percentual: 75,
        cor: "#0891b2",
        descricao:
          "Varíola, gripe, sarampo, tifo. Doenças europeias em corpos sem imunidade. Fator principal da mortandade indígena.",
        exemplos: ["🦠 Varíola", "😷 Gripe", "🌡️ Sarampo"],
      },
      {
        id: "vio",
        rotulo: "Violência direta + trabalho forçado (~25%)",
        emoji: "⚔️",
        percentual: 25,
        cor: "#b45309",
        descricao:
          "Guerras, execuções, escravidão em minas (Potosí), Encomienda, Mita. Trabalho pesado matava por exaustão.",
        exemplos: ["⚔️ Guerras", "⛏️ Minas", "⛓️ Trabalho forçado"],
      },
    ],
    falaFinal:
      "Vírus foi ainda mais letal que espada. Mas os dois destruíram sociedades inteiras.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Painel do Templo Indígena Subjugado.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgCortes,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual conquistador espanhol derrubou o Império Inca?",
        opcoes: [
          { id: "a", texto: "Hernán Cortés.", correta: false },
          { id: "b", texto: "Francisco Pizarro.", correta: true },
          { id: "c", texto: "Colombo.", correta: false },
        ],
        feedbackAcerto: "Correto. PIZARRO derrubou os incas. Cortés derrubou os astecas.",
        feedbackErro: "É PIZARRO. Cortés foi contra os astecas.",
      },
      {
        id: "av2",
        pergunta: "Qual fator INVISÍVEL causou a maior mortandade indígena nas Américas?",
        opcoes: [
          { id: "a", texto: "Falta de escrita.", correta: false },
          { id: "b", texto: "Epidemias europeias (varíola, gripe, sarampo).", correta: true },
          { id: "c", texto: "Falta de agricultura.", correta: false },
        ],
        feedbackAcerto: "Correto. EPIDEMIAS mataram até 80% da população em um século.",
        feedbackErro: "Foram as EPIDEMIAS. Muitos povos americanos tinham escrita e agricultura avançadas.",
      },
      {
        id: "av3",
        pergunta: "Por que muitos livros didáticos hoje preferem CONQUISTA a 'DESCOBRIMENTO'?",
        opcoes: [
          { id: "a", texto: "Porque houve invasão, violência e etnocídio — não encontro pacífico.", correta: true },
          { id: "b", texto: "Porque os europeus não descobriram nada.", correta: false },
          { id: "c", texto: "Porque a palavra descobrimento é antiga demais.", correta: false },
        ],
        feedbackAcerto: "Correto. 'Descobrimento' esconde a VIOLÊNCIA; 'Conquista' nomeia o processo real.",
        feedbackErro: "É porque 'descobrimento' esconde a violência colonial. 'Conquista' descreve melhor o que ocorreu.",
      },
    ],
    selo: {
      nome: "Painel do Templo Indígena Subjugado",
      subtitulo: "Engrenagem 6 da Bússola",
      emoji: "⚔️",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgCortes,
    },
    falaFinal:
      "Engrenagem 6 destravada. Você agora entende a conquista como violência complexa, não 'descobrimento pacífico'.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Painel do Templo Indígena Subjugado" },
};
