import type { AulaGeoV1 } from "../../types";

const IMG_FEIRA = "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800";
const IMG_AGRO = "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800";
const IMG_CAMINHAO = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800";
const IMG_MERCADO = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800";

/**
 * Geografia · 5º Ano · Unidade 2 · Aula 02
 * "Campo e Cidade: Uma Só Corrente" — EF05GE04
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-campo-cidade-conectados",
  titulo: "Campo e Cidade: Uma Só Corrente",
  iconeTrilha: "🔗",
  bncc: ["EF05GE04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe a feira. Cada fruta veio de um lugar.",
    mapaUrl: IMG_FEIRA,
    imagemDestaqueUrl: IMG_FEIRA,
    aurora:
      "Explorador, a cidade não vive sem o campo, e o campo não vive sem a cidade. A comida vem do campo, mas o trator, a semente e o remédio vêm da cidade. Isso é INTERDEPENDÊNCIA — um depende do outro.",
    falaFinal: "Bora ver essa corrente invisível que conecta tudo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quem produz o arroz que você come no almoço?",
    pergunta: "De onde vem o arroz?",
    opcoes: [
      {
        id: "campo",
        titulo: "Do CAMPO",
        subtitulo: "fazendeiros no RS e MT plantam",
        emoji: "🌾",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "fabrica",
        titulo: "Só da FÁBRICA",
        subtitulo: "produzido dentro da cidade",
        emoji: "🏭",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "campo",
    feedbackAcerto: "Isso! Arroz cresce no CAMPO. A fábrica só empacota e a cidade só vende.",
    feedbackErro: "A fábrica só empacota. O arroz cresce no CAMPO.",
    falaFinal: "Sem campo, sem comida. Sem cidade, sem transporte pra distribuir.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras que conectam campo e cidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "interdep",
        capa: "1. Interdependência",
        emoji: "🔗",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "INTERDEPENDÊNCIA é depender um do outro. Campo produz comida, cidade produz máquinas e serviços. Um sem o outro não funciona.",
        exemplo: "Ex.: fazendeiro vende soja, compra trator feito na cidade.",
      },
      {
        id: "agro",
        capa: "2. Agronegócio",
        emoji: "🚜",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "AGRONEGÓCIO é toda a cadeia: da semente até a comida no supermercado. Envolve fazenda, fábrica, transporte e mercado.",
        exemplo: "Ex.: soja → fábrica de óleo → caminhão → gôndola do mercado.",
        fotoUrl: IMG_AGRO,
      },
      {
        id: "logistica",
        capa: "3. Logística",
        emoji: "🚚",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "LOGÍSTICA é como o produto SAI do campo e CHEGA na sua casa. Envolve estrada, caminhão, porto, avião.",
        exemplo: "Ex.: banana do Norte chega em SP de caminhão em 3 dias.",
        fotoUrl: IMG_CAMINHAO,
      },
      {
        id: "servicos",
        capa: "4. Serviços urbanos",
        emoji: "🏥",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "SERVIÇOS urbanos são o que o campo BUSCA na cidade: hospital, universidade, banco, loja grande.",
        exemplo: "Ex.: fazendeiro vai pra cidade fazer exame de coração.",
      },
    ],
    falaFinal: "Interdependência, agronegócio, logística, serviços. 4 elos da corrente.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada balão pra ver o fluxo entre campo e cidade.",
    instrucao: "Toque nos pontos",
    mapaUrl: IMG_AGRO,
    pontos: [
      {
        id: "fazenda",
        x: 25,
        y: 40,
        emoji: "🌾",
        cor: "from-amber-500 to-orange-700",
        titulo: "FAZENDA (campo)",
        texto: "Produz alimento, algodão, madeira, gado. Base de tudo que a cidade come e usa.",
      },
      {
        id: "estrada",
        x: 50,
        y: 55,
        emoji: "🚛",
        cor: "from-sky-500 to-blue-700",
        titulo: "TRANSPORTE",
        texto: "Caminhão, trem, navio levam a produção pro mercado. Sem estrada, comida apodrece.",
        fotoUrl: IMG_CAMINHAO,
      },
      {
        id: "industria",
        x: 65,
        y: 45,
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        titulo: "INDÚSTRIA (cidade)",
        texto: "Transforma soja em óleo, trigo em pão, leite em queijo. Agrega valor ao produto.",
      },
      {
        id: "mercado",
        x: 80,
        y: 65,
        emoji: "🛒",
        cor: "from-red-500 to-rose-700",
        titulo: "MERCADO (cidade)",
        texto: "Vende pra você. Aqui a corrente se fecha — do fazendeiro até a sua mesa.",
        fotoUrl: IMG_MERCADO,
      },
    ],
    falaFinal: "Fazenda → transporte → indústria → mercado. Essa é a corrente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Comida vem principalmente...",
        cards: [
          { id: "campo", emoji: "🌾", titulo: "Do campo", cor: "from-amber-500 to-orange-700" },
          { id: "fab", emoji: "🏭", titulo: "Só da fábrica", cor: "from-slate-500 to-gray-700" },
          { id: "lab", emoji: "🧪", titulo: "Do laboratório", cor: "from-purple-500 to-fuchsia-700" },
        ],
        correta: "campo",
        feedbackAcerto: "Isso! Comida vem do CAMPO. Fábrica só transforma.",
        feedbackErro: "Fábrica só transforma o que vem do CAMPO.",
      },
      {
        id: "q2",
        pergunta: "Trator, semente melhorada e remédio pro gado vêm...",
        fotoUrl: IMG_AGRO,
        cards: [
          { id: "cid", emoji: "🏭", titulo: "Da cidade (indústria)", cor: "from-sky-500 to-blue-700" },
          { id: "flor", emoji: "🌳", titulo: "Da floresta", cor: "from-emerald-500 to-green-700" },
          { id: "mar", emoji: "🌊", titulo: "Do mar", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "cid",
        feedbackAcerto: "Perfeito! Máquina e insumo saem da INDÚSTRIA urbana.",
        feedbackErro: "Trator e remédio são feitos em FÁBRICA na cidade.",
      },
      {
        id: "q3",
        pergunta: "Logística é...",
        cards: [
          { id: "trans", emoji: "🚚", titulo: "Transportar do campo à casa", cor: "from-sky-500 to-blue-700" },
          { id: "col", emoji: "🌾", titulo: "Colher no campo", cor: "from-amber-500 to-orange-700" },
          { id: "com", emoji: "🍽️", titulo: "Comer no restaurante", cor: "from-red-500 to-rose-700" },
        ],
        correta: "trans",
        feedbackAcerto: "Isso! LOGÍSTICA = mover produto do campo até você.",
        feedbackErro: "Colher é produção. Comer é consumo. LOGÍSTICA é o TRANSPORTE.",
      },
    ],
    falaFinal: "Radar afiado! Você entende a corrente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Os 4 maiores estados PRODUTORES DE ALIMENTOS do Brasil. Toca em cada um.",
    instrucao: "Acenda os estados que mais alimentam o Brasil",
    missao: {
      tipo: "selecionar",
      siglas: ["MT", "PR", "RS", "GO"],
      pergunta: "Quais estados MAIS produzem alimentos?",
    },
    falaFinal: "MT, PR, RS, GO — o celeiro que alimenta as cidades.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a viagem da soja: do campo até o seu prato.",
    instrucao: "Toque na ordem",
    pergunta: "Do plantio ao prato:",
    paradas: [
      {
        id: "plantio",
        emoji: "🌱",
        rotulo: "1. Plantio no MT",
        descricao: "Fazendeiro planta soja com trator e semente selecionada.",
      },
      {
        id: "colheita",
        emoji: "🌾",
        rotulo: "2. Colheita",
        descricao: "Máquina colheitadeira separa os grãos da planta.",
      },
      {
        id: "caminhao",
        emoji: "🚛",
        rotulo: "3. Caminhão pra fábrica",
        descricao: "Grãos vão pra indústria virar óleo, farinha ou ração.",
      },
      {
        id: "supermercado",
        emoji: "🛒",
        rotulo: "4. Supermercado",
        descricao: "Óleo de soja chega na gôndola bem embalado.",
      },
      {
        id: "casa",
        emoji: "🍳",
        rotulo: "5. Sua cozinha",
        descricao: "Você compra e frita o ovo. Corrente completa!",
      },
    ],
    ordemCerta: ["plantio", "colheita", "caminhao", "supermercado", "casa"],
    feedbackAcerto: "Ordem perfeita! Do MT até sua panela.",
    feedbackErro: "Repense: planta primeiro, come por último.",
    falaFinal: "5 elos, uma corrente contínua.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 3 — Campo e Cidade",
    paragrafos: [
      {
        id: "p1",
        texto: "Campo e cidade têm INTERDEPENDÊNCIA: um depende do outro pra funcionar.",
        chaves: ["interdependência"],
      },
      {
        id: "p2",
        texto: "O CAMPO produz ALIMENTO, algodão, madeira. A CIDADE produz MÁQUINAS e serviços.",
        chaves: ["campo", "alimento", "máquinas"],
      },
      {
        id: "p3",
        texto: "AGRONEGÓCIO é toda a cadeia: da semente ao supermercado. Envolve fazenda, indústria e transporte.",
        chaves: ["agronegócio", "cadeia"],
      },
      {
        id: "p4",
        texto: "LOGÍSTICA é como o produto sai do campo e chega em casa. Sem estrada boa, comida encarece.",
        chaves: ["logística", "estrada"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CORRENTE! Cada rodada, escolha o que o CAMPO manda pra CIDADE ou vice-versa.",
    instrucao: "⏱️ Quem produz isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "campo", emoji: "🌾", rotulo: "Campo produz" },
      { id: "cidade", emoji: "🏭", rotulo: "Cidade produz" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Arroz e feijão", emoji: "🍚", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Comida básica", emoji: "🍽️", cor: "from-red-400 to-rose-600" },
        contexto: "De onde vem o arroz e o feijão do seu prato?",
        pecaCertaId: "campo",
        feedbackAcerto: "Isso! Grãos vêm do CAMPO.",
        feedbackErro: "Grãos crescem no CAMPO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Celular", emoji: "📱", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Eletrônico", emoji: "💻", cor: "from-sky-400 to-blue-600" },
        contexto: "Onde é montado o seu celular?",
        pecaCertaId: "cidade",
        feedbackAcerto: "Perfeito! Fábrica de eletrônicos = CIDADE.",
        feedbackErro: "Eletrônico é feito em FÁBRICA URBANA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Leite", emoji: "🥛", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Manteiga", emoji: "🧈", cor: "from-amber-400 to-orange-600" },
        contexto: "Vaca leiteira mora em fazenda. Quem produz o leite?",
        pecaCertaId: "campo",
        feedbackAcerto: "Isso! Leite vem do CAMPO (fazendas leiteiras).",
        feedbackErro: "Leite vem da FAZENDA — CAMPO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Trator", emoji: "🚜", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Máquina agrícola", emoji: "⚙️", cor: "from-slate-400 to-gray-600" },
        contexto: "O fazendeiro usa trator pra plantar. Onde ele é fabricado?",
        pecaCertaId: "cidade",
        feedbackAcerto: "Boa! Trator é feito em INDÚSTRIA na CIDADE.",
        feedbackErro: "Trator é MÁQUINA, feito em FÁBRICA URBANA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Frango", emoji: "🐔", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Ovos", emoji: "🥚", cor: "from-red-400 to-rose-600" },
        contexto: "Frango e ovos vêm de granja. Granja fica onde?",
        pecaCertaId: "campo",
        feedbackAcerto: "Isso! Granja é área rural = CAMPO.",
        feedbackErro: "Granja fica na área RURAL = CAMPO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Remédio", emoji: "💊", cor: "from-purple-400 to-indigo-600" },
        municipioB: { nome: "Farmácia", emoji: "🏥", cor: "from-emerald-400 to-green-600" },
        contexto: "Remédio pra dor de cabeça é fabricado onde?",
        pecaCertaId: "cidade",
        feedbackAcerto: "Perfeito! Remédio vem de INDÚSTRIA FARMACÊUTICA (cidade).",
        feedbackErro: "Remédio é feito em INDÚSTRIA URBANA.",
      },
    ],
    falaFinal: "6 acertos! Você sabe quem produz o quê.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: onde MORA quem trabalha no agro brasileiro?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "rural",
        rotulo: "Área rural (60%)",
        emoji: "🌾",
        percentual: 60,
        cor: "#10b981",
        descricao: "A maioria dos trabalhadores rurais mora no próprio CAMPO ou em vilas.",
        exemplos: ["🏡 Sítio", "🐴 Fazenda", "🌱 Roça"],
      },
      {
        id: "urbana",
        rotulo: "Cidades pequenas (40%)",
        emoji: "🏘️",
        percentual: 40,
        cor: "#f97316",
        descricao: "Muita gente mora na CIDADE pequena e vai trabalhar no campo de dia.",
        exemplos: ["🚌 Van rural", "🏠 Casa na cidade", "🚜 Trabalha no campo"],
      },
    ],
    falaFinal: "Rural e urbano se misturam. Não existe fronteira rígida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Elo Campo-Cidade.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Interdependência entre campo e cidade significa que...",
        opcoes: [
          { id: "a", texto: "Campo não precisa da cidade", correta: false },
          { id: "b", texto: "Um depende do outro pra funcionar", correta: true },
          { id: "c", texto: "Cidade produz alimento sozinha", correta: false },
        ],
        feedbackAcerto: "Isso! Um DEPENDE do outro.",
        feedbackErro: "Interdependência = DEPENDER UM DO OUTRO.",
      },
      {
        id: "av2",
        pergunta: "O agronegócio inclui:",
        opcoes: [
          { id: "a", texto: "Só a plantação", correta: false },
          { id: "b", texto: "Toda a cadeia: semente, fazenda, indústria e mercado", correta: true },
          { id: "c", texto: "Só o supermercado", correta: false },
        ],
        feedbackAcerto: "Perfeito! Agronegócio é a CADEIA INTEIRA.",
        feedbackErro: "É a CADEIA INTEIRA — semente até mercado.",
      },
      {
        id: "av3",
        pergunta: "Sem logística (transporte), o que acontece com a comida?",
        opcoes: [
          { id: "a", texto: "Chega mais rápido", correta: false },
          { id: "b", texto: "Apodrece no campo e não chega em casa", correta: true },
          { id: "c", texto: "Fica mais barata", correta: false },
        ],
        feedbackAcerto: "Isso! Sem estrada, comida APODRECE no campo.",
        feedbackErro: "Sem transporte, comida NÃO CHEGA e apodrece.",
      },
    ],
    selo: {
      nome: "Elo Campo-Cidade",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🔗",
      cor: "from-emerald-400 to-green-600",
    },
    falaFinal: "Insígnia conquistada! Você viu a corrente inteira.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Elo Campo-Cidade" },
};
