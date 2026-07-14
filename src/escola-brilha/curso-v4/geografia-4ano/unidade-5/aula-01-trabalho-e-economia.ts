import type { AulaGeoV1 } from "../../types";
import { url as primario } from "@/assets/geografia-4ano/setor-primario-agricultura.jpg.asset.json";
import { url as secundario } from "@/assets/geografia-4ano/setor-secundario-industria.jpg.asset.json";
import { url as terciario } from "@/assets/geografia-4ano/setor-terciario-servicos.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 5 · Aula 01
 * "Trabalho e Economia do Brasil" — EF04GE07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-trabalho-e-economia",
  titulo: "Trabalho e Economia: Como o Brasil Produz",
  iconeTrilha: "🏭",
  bncc: ["EF04GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe as 3 fotos: quem PLANTA, quem MONTA, quem ATENDE.",
    mapaUrl: primario,
    imagemDestaqueUrl: primario,
    aurora:
      "Explorador, de onde vem TUDO que você usa? A camiseta? O pão? O celular? Alguém PLANTOU (algodão, trigo). Alguém MONTOU numa fábrica (roupa, celular). Alguém VENDEU na loja. Esses 3 grupos de trabalho se chamam SETORES DA ECONOMIA.",
    falaFinal: "3 setores: Primário, Secundário e Terciário. Vamos abrir cada um.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: um agricultor colhendo laranja no pé trabalha em qual setor?",
    pergunta: "Colher laranja no pé é setor...",
    opcoes: [
      {
        id: "primario",
        titulo: "PRIMÁRIO",
        subtitulo: "extração da natureza",
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
      },
      {
        id: "secundario",
        titulo: "SECUNDÁRIO",
        subtitulo: "transformação em fábrica",
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
      },
    ],
    respostaCerta: "primario",
    feedbackAcerto:
      "Isso! Tirar direto da NATUREZA (plantar, criar animal, pescar) é setor PRIMÁRIO.",
    feedbackErro:
      "Fábrica é SECUNDÁRIO. Colher direto do pé é da NATUREZA — setor PRIMÁRIO.",
    falaFinal: "Primário = natureza. Bora ver os outros.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 setores da economia. Todo trabalho cabe em um deles.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "primario",
        capa: "1. Setor Primário",
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "SETOR PRIMÁRIO — tira coisas direto da NATUREZA. Agricultura, pecuária, pesca, extrativismo (madeira, minério).",
        exemplo: "Ex.: agricultor, pescador, criador de gado, minerador.",
        fotoUrl: primario,
      },
      {
        id: "secundario",
        capa: "2. Setor Secundário",
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        conteudo:
          "SETOR SECUNDÁRIO — TRANSFORMA matéria-prima em produto. Fábricas e indústrias.",
        exemplo: "Ex.: operário de montadora de carro, padeiro na indústria, costureira.",
        fotoUrl: secundario,
      },
      {
        id: "terciario",
        capa: "3. Setor Terciário",
        emoji: "🏥",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "SETOR TERCIÁRIO — PRESTA SERVIÇOS e VENDE. Comércio, escolas, hospitais, bancos, restaurantes.",
        exemplo: "Ex.: professor, médico, vendedor, motorista de app, garçom.",
        fotoUrl: terciario,
      },
      {
        id: "cadeia",
        capa: "4. Cadeia produtiva",
        emoji: "🔗",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "CADEIA PRODUTIVA é o caminho de um produto do CAMPO até você. Passa pelos 3 setores.",
        exemplo:
          "Ex.: trigo (primário) → farinha na fábrica (secundário) → pão na padaria (terciário).",
      },
    ],
    falaFinal: "Primário, secundário, terciário. 3 setores, 1 economia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Marquei 4 profissões no mapa. Toque e descubra o setor de cada uma.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "agricultor",
        x: 45,
        y: 55,
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        titulo: "Agricultor (Centro-Oeste)",
        texto:
          "Planta soja e milho no cerrado. Setor PRIMÁRIO — tira direto da terra.",
        fotoUrl: primario,
      },
      {
        id: "operario",
        x: 55,
        y: 65,
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        titulo: "Operário (Sudeste)",
        texto:
          "Monta carros numa fábrica em SP. Setor SECUNDÁRIO — transforma peças em produto.",
        fotoUrl: secundario,
      },
      {
        id: "medico",
        x: 60,
        y: 55,
        emoji: "🏥",
        cor: "from-sky-500 to-blue-700",
        titulo: "Médica (qualquer cidade)",
        texto:
          "Atende pacientes num hospital. Setor TERCIÁRIO — presta um serviço.",
        fotoUrl: terciario,
      },
      {
        id: "pescador",
        x: 75,
        y: 40,
        emoji: "🎣",
        cor: "from-cyan-500 to-blue-700",
        titulo: "Pescador (Nordeste)",
        texto:
          "Sai de barco e traz peixe do mar. Setor PRIMÁRIO — tira da natureza.",
      },
    ],
    falaFinal: "4 profissões, 3 setores. Todo trabalho cabe em algum.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre os setores.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Um PROFESSOR trabalha em qual setor?",
        fotoUrl: terciario,
        cards: [
          { id: "p", emoji: "🌾", titulo: "Primário", cor: "from-emerald-500 to-green-700" },
          { id: "s", emoji: "🏭", titulo: "Secundário", cor: "from-slate-500 to-gray-700" },
          { id: "t", emoji: "🏥", titulo: "Terciário", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "t",
        feedbackAcerto: "Isso! Professor PRESTA SERVIÇO = TERCIÁRIO.",
        feedbackErro: "Primário é natureza. Secundário é fábrica. Ensinar é SERVIÇO = TERCIÁRIO.",
      },
      {
        id: "q2",
        pergunta: "Uma FÁBRICA de tênis é setor...",
        fotoUrl: secundario,
        cards: [
          { id: "s", emoji: "🏭", titulo: "Secundário", cor: "from-slate-500 to-gray-700" },
          { id: "p", emoji: "🌾", titulo: "Primário", cor: "from-emerald-500 to-green-700" },
          { id: "t", emoji: "🏥", titulo: "Terciário", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "s",
        feedbackAcerto: "Perfeito! Fábrica TRANSFORMA = SECUNDÁRIO.",
        feedbackErro: "Fábrica = transformação = SETOR SECUNDÁRIO.",
      },
      {
        id: "q3",
        pergunta: "Um MINERADOR que tira ferro da mina trabalha no setor...",
        fotoUrl: primario,
        cards: [
          { id: "p", emoji: "🌾", titulo: "Primário", cor: "from-emerald-500 to-green-700" },
          { id: "s", emoji: "🏭", titulo: "Secundário", cor: "from-slate-500 to-gray-700" },
          { id: "t", emoji: "🏥", titulo: "Terciário", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "p",
        feedbackAcerto: "Boa! Extrair minério direto da natureza = PRIMÁRIO.",
        feedbackErro: "Tirar da NATUREZA (mineração, agricultura, pesca) = PRIMÁRIO.",
      },
    ],
    falaFinal: "Radar afiado! Você classifica qualquer profissão.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Cada região do Brasil tem uma atividade FORTE. Toque nos estados e sinta a economia.",
    instrucao: "Toque em cada estado — cores = atividade dominante",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "agro",
          rotulo: "Agro forte (soja/milho/boi)",
          emoji: "🌾",
          cor: "from-emerald-500 to-green-700",
          siglas: ["MT", "MS", "GO", "PR", "RS", "TO"],
          descricao: "Centro-Oeste e Sul lideram a agricultura e a pecuária.",
        },
        {
          id: "industria",
          rotulo: "Indústria forte (fábricas)",
          emoji: "🏭",
          cor: "from-slate-500 to-gray-700",
          siglas: ["SP", "MG", "RJ", "SC", "ES"],
          descricao: "Sudeste + SC concentram as grandes indústrias.",
        },
        {
          id: "servicos",
          rotulo: "Serviços/Turismo forte",
          emoji: "🏖️",
          cor: "from-sky-500 to-blue-700",
          siglas: ["BA", "CE", "RN", "PE", "AL", "SE", "PB", "MA", "PI", "DF"],
          descricao: "Nordeste e DF vivem muito de comércio, turismo e serviços.",
        },
        {
          id: "extrativismo",
          rotulo: "Extrativismo (floresta/mineração)",
          emoji: "🌳",
          cor: "from-amber-600 to-orange-800",
          siglas: ["AM", "PA", "AC", "RO", "RR", "AP"],
          descricao: "Norte é forte em madeira, castanha, açaí, ferro e ouro.",
        },
      ],
    },
    falaFinal: "Cada região puxa uma economia diferente. Juntas fazem o Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o TÊNIS chega no seu pé? Vamos organizar a cadeia produtiva.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordene o caminho do tênis:",
    paradas: [
      {
        id: "algodao",
        emoji: "🌱",
        rotulo: "1. Fazenda de algodão",
        descricao: "Agricultor planta e colhe algodão. Setor PRIMÁRIO.",
      },
      {
        id: "borracha",
        emoji: "🌳",
        rotulo: "2. Seringueira (borracha)",
        descricao: "Extrativista tira o látex da árvore. Setor PRIMÁRIO.",
      },
      {
        id: "fabrica",
        emoji: "🏭",
        rotulo: "3. Fábrica de tênis",
        descricao: "Operários montam o tênis. Setor SECUNDÁRIO.",
      },
      {
        id: "caminhao",
        emoji: "🚛",
        rotulo: "4. Caminhão / transporte",
        descricao: "Motorista leva o tênis pras lojas. Setor TERCIÁRIO.",
      },
      {
        id: "loja",
        emoji: "🛍️",
        rotulo: "5. Loja / vendedor",
        descricao: "Vendedor atende você e vende. Setor TERCIÁRIO.",
      },
    ],
    ordemCerta: ["algodao", "borracha", "fabrica", "caminhao", "loja"],
    feedbackAcerto: "Cadeia completa! Do campo até o seu pé — 3 setores em ação.",
    feedbackErro: "Repensa: começa na NATUREZA e termina na LOJA.",
    falaFinal: "Tudo que você compra passou por essa cadeia.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sozinho.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 8 — Trabalho e Economia",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A economia se divide em 3 SETORES: PRIMÁRIO (natureza), SECUNDÁRIO (fábrica) e TERCIÁRIO (serviços).",
        chaves: ["setores", "primário", "secundário", "terciário"],
      },
      {
        id: "p2",
        texto:
          "AGRICULTOR, pescador e minerador são do PRIMÁRIO. Tiram coisas direto da natureza.",
        chaves: ["agricultor", "primário", "natureza"],
      },
      {
        id: "p3",
        texto:
          "Operário de FÁBRICA é do SECUNDÁRIO. Transforma matéria-prima em produto pronto.",
        chaves: ["fábrica", "secundário", "produto"],
      },
      {
        id: "p4",
        texto:
          "Professor, médico, vendedor, motorista são do TERCIÁRIO. Prestam serviços pra outras pessoas.",
        chaves: ["professor", "terciário", "serviços"],
      },
    ],
    falaFinal: "Leu tudo. Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo SETOR-EXPRESS. Em qual setor cada profissão trabalha?",
    instrucao: "⏱️ Qual setor?",
    duracaoSegundos: 12,
    pecas: [
      { id: "primario", emoji: "🌾", rotulo: "Primário" },
      { id: "secundario", emoji: "🏭", rotulo: "Secundário" },
      { id: "terciario", emoji: "🏥", rotulo: "Terciário" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Pescador com rede", emoji: "🎣", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Tira peixe do mar", emoji: "🐟", cor: "from-sky-500 to-blue-700" },
        contexto: "Pescador que traz peixe direto do mar é setor...",
        pecaCertaId: "primario",
        feedbackAcerto: "Isso! Pesca = PRIMÁRIO.",
        feedbackErro: "Tira da natureza = PRIMÁRIO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Operário de montadora", emoji: "🏭", cor: "from-slate-500 to-gray-700" },
        municipioB: { nome: "Monta carros", emoji: "🚗", cor: "from-red-500 to-rose-700" },
        contexto: "Quem monta carro na fábrica é setor...",
        pecaCertaId: "secundario",
        feedbackAcerto: "Perfeito! Fábrica = SECUNDÁRIO.",
        feedbackErro: "Fábrica de carro = SECUNDÁRIO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Motorista de aplicativo", emoji: "🚕", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Leva passageiros", emoji: "🗺️", cor: "from-orange-500 to-amber-700" },
        contexto: "Motorista que leva você pra escola é setor...",
        pecaCertaId: "terciario",
        feedbackAcerto: "Boa! Transporte de gente = SERVIÇO = TERCIÁRIO.",
        feedbackErro: "Transportar pessoas = SERVIÇO = TERCIÁRIO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Vaqueiro no sertão", emoji: "🐄", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Cuida do gado", emoji: "🌾", cor: "from-emerald-500 to-green-700" },
        contexto: "Vaqueiro que cuida do rebanho é setor...",
        pecaCertaId: "primario",
        feedbackAcerto: "Combo! Pecuária = PRIMÁRIO.",
        feedbackErro: "Criar animal = PRIMÁRIO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Padeira na panificadora industrial", emoji: "🍞", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Faz pão em série na fábrica", emoji: "🥖", cor: "from-yellow-500 to-amber-700" },
        contexto: "Trabalha na FÁBRICA de pão é setor...",
        pecaCertaId: "secundario",
        feedbackAcerto: "Isso! Transformar trigo em pão na indústria = SECUNDÁRIO.",
        feedbackErro: "Fábrica = SECUNDÁRIO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Enfermeira no hospital", emoji: "🏥", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Cuida de pacientes", emoji: "💉", cor: "from-pink-500 to-rose-700" },
        contexto: "Enfermeira que atende no hospital é setor...",
        pecaCertaId: "terciario",
        feedbackAcerto: "Perfeito! Saúde = SERVIÇO = TERCIÁRIO.",
        feedbackErro: "Cuidar de pessoas = SERVIÇO = TERCIÁRIO.",
      },
    ],
    falaFinal: "6 profissões classificadas! Você é um SUPERVISOR ECONÔMICO.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos SETORES no Brasil: onde trabalha mais gente?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "terciario",
        rotulo: "Terciário (70%)",
        emoji: "🏥",
        percentual: 70,
        cor: "#0ea5e9",
        descricao:
          "A MAIORIA dos brasileiros trabalha em SERVIÇOS: comércio, escolas, hospitais, restaurantes, transporte.",
        exemplos: ["🛍️ Comércio", "🏥 Saúde", "🎓 Educação"],
      },
      {
        id: "outros",
        rotulo: "Primário + Secundário (30%)",
        emoji: "🌾",
        percentual: 30,
        cor: "#f59e0b",
        descricao:
          "Agricultura, pecuária, pesca e fábricas juntos empregam cerca de 30% da população.",
        exemplos: ["🌾 Agro", "🏭 Indústria", "🎣 Pesca"],
      },
    ],
    falaFinal: "Brasil vive muito de SERVIÇOS. Mas depende do campo e da indústria pra viver.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Supervisor Econômico.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Um professor da escola e uma médica do hospital trabalham em qual setor?",
        opcoes: [
          { id: "a", texto: "Primário", correta: false },
          { id: "b", texto: "Terciário (serviços)", correta: true },
          { id: "c", texto: "Secundário", correta: false },
        ],
        feedbackAcerto: "Isso! Educação e saúde são SERVIÇOS = TERCIÁRIO.",
        feedbackErro: "Ensinar e cuidar de gente é SERVIÇO = TERCIÁRIO.",
      },
      {
        id: "av2",
        pergunta: "Um pescador tirando peixe do mar é setor...",
        opcoes: [
          { id: "a", texto: "Primário", correta: true },
          { id: "b", texto: "Secundário", correta: false },
          { id: "c", texto: "Terciário", correta: false },
        ],
        feedbackAcerto: "Perfeito! Pesca tira da natureza = PRIMÁRIO.",
        feedbackErro: "Tirar da NATUREZA = PRIMÁRIO.",
      },
      {
        id: "av3",
        pergunta: "Uma fábrica que TRANSFORMA algodão em camiseta é setor...",
        opcoes: [
          { id: "a", texto: "Primário", correta: false },
          { id: "b", texto: "Secundário", correta: true },
          { id: "c", texto: "Terciário", correta: false },
        ],
        feedbackAcerto: "Isso! Fábrica que transforma = SECUNDÁRIO.",
        feedbackErro: "Fábrica que TRANSFORMA matéria-prima = SECUNDÁRIO.",
      },
    ],
    selo: {
      nome: "Supervisor Econômico",
      subtitulo: "Insígnia da Unidade 5 completa",
      emoji: "🏭",
      cor: "from-slate-500 to-gray-700",
    },
    falaFinal:
      "PARABÉNS, SUPERVISOR ECONÔMICO! Você entende como o Brasil produz suas riquezas.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Supervisor Econômico" },
};
