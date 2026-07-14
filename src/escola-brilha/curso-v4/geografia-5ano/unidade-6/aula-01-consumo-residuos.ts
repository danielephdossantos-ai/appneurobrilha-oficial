import type { AulaGeoV1 } from "../../types";
import { url as lixao } from "@/assets/geografia-5ano/lixao.jpg.asset.json";
import { url as aterro } from "@/assets/geografia-5ano/aterro-sanitario.jpg.asset.json";
import { url as logistica } from "@/assets/geografia-5ano/logistica-reversa.jpg.asset.json";
/**
 * Geografia · 5º Ano · Unidade 6 · Aula 01
 * "Consumo, Resíduos e Tecnologia" — EF05GE11 / EF05GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-consumo-residuos",
  titulo: "Consumo, Resíduos e Tecnologia",
  iconeTrilha: "♻️",
  bncc: ["EF05GE11", "EF05GE12"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: pra onde vai o que a gente joga fora?",
    mapaUrl: lixao,
    imagemDestaqueUrl: lixao,
    aurora:
      "Explorador, cada brasileiro produz cerca de 1kg de lixo por dia! Para onde vai isso tudo? Celular velho, sacola, resto de comida... O consumo gera RESÍDUOS que a tecnologia precisa ajudar a tratar.",
    falaFinal: "Vamos ver a diferença entre destino errado e destino inteligente.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: qual é o MELHOR destino pros restos de comida da cozinha?",
    pergunta: "Casca de banana, resto de arroz — melhor destino?",
    opcoes: [
      {
        id: "composto",
        titulo: "COMPOSTAGEM",
        subtitulo: "virar adubo natural",
        emoji: "🌱",
        cor: "from-emerald-400 to-green-600",
      },
      {
        id: "plastico",
        titulo: "SACO PLÁSTICO",
        subtitulo: "junto com todo o lixo",
        emoji: "🗑️",
        cor: "from-red-400 to-rose-600",
      },
    ],
    respostaCerta: "composto",
    feedbackAcerto:
      "Isso! COMPOSTAGEM transforma resto de comida em ADUBO natural. Diminui o lixo e vira alimento pras plantas.",
    feedbackErro: "Ir pro plástico é jogar fora. COMPOSTAGEM aproveita e vira adubo.",
    falaFinal: "Todo lixo tem um destino inteligente. Vamos descobrir todos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da reciclagem.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "lixao",
        capa: "1. Lixão",
        emoji: "🗑️",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "LIXÃO é o lixo jogado ao ar livre, sem tratamento. Polui solo, água, ar — atrai ratos e doenças.",
        exemplo: "Ex.: montanhas de lixo com urubus voando por cima.",
        fotoUrl: lixao,
      },
      {
        id: "aterro",
        capa: "2. Aterro sanitário",
        emoji: "🏗️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "ATERRO SANITÁRIO trata o lixo com técnica: camadas cobertas com terra, captação de gás, sem contaminar o solo.",
        exemplo: "Ex.: escavadeiras compactando lixo em camadas seladas.",
        fotoUrl: aterro,
      },
      {
        id: "reciclagem",
        capa: "3. Reciclagem",
        emoji: "♻️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "RECICLAGEM transforma lixo em MATÉRIA-PRIMA nova: garrafa PET vira roupa, papel vira caderno.",
        exemplo: "Ex.: coleta seletiva com lixeiras coloridas.",
      },
      {
        id: "reversa",
        capa: "4. Logística reversa",
        emoji: "🔄",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "LOGÍSTICA REVERSA é quando a EMPRESA recolhe seus próprios produtos velhos pra reciclar: pilhas, celulares, eletrônicos.",
        exemplo: "Ex.: entregar pilha usada no ponto do supermercado.",
        fotoUrl: logistica,
      },
    ],
    falaFinal: "Lixão, aterro, reciclagem, logística reversa. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada destino do lixo e ouça a Aurora explicar.",
    instrucao: "Toque em cada balão",
    mapaUrl: aterro,
    pontos: [
      {
        id: "lixao",
        x: 25,
        y: 40,
        emoji: "🗑️",
        cor: "from-red-500 to-rose-700",
        titulo: "LIXÃO — errado",
        texto:
          "Céu aberto, sem tratamento. Polui rio, solo, ar. Ainda existe em várias cidades — precisa acabar.",
      },
      {
        id: "aterro",
        x: 55,
        y: 55,
        emoji: "🏗️",
        cor: "from-emerald-500 to-green-700",
        titulo: "ATERRO — certo",
        texto:
          "Lixo em camadas, coberto, sem contato com chuva. Gás captado vira energia.",
      },
      {
        id: "reciclagem",
        x: 75,
        y: 35,
        emoji: "♻️",
        cor: "from-sky-500 to-blue-700",
        titulo: "RECICLAGEM — ótimo",
        texto:
          "Separar em casa: metal, plástico, papel, vidro. Cooperativas transformam em matéria-prima.",
      },
      {
        id: "composto",
        x: 45,
        y: 80,
        emoji: "🌱",
        cor: "from-amber-500 to-yellow-600",
        titulo: "COMPOSTAGEM",
        texto:
          "Restos orgânicos viram adubo em 3 meses. Reduz peso do lixo pela metade.",
      },
    ],
    falaFinal: "4 destinos: 1 errado, 3 certos. Escolha os 3.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre lixo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Onde tem o TRATAMENTO CORRETO do lixo?",
        fotoUrl: aterro,
        cards: [
          { id: "at", emoji: "🏗️", titulo: "Aterro sanitário", cor: "from-emerald-500 to-green-700" },
          { id: "li", emoji: "🗑️", titulo: "Lixão", cor: "from-red-500 to-rose-700" },
          { id: "ri", emoji: "🌊", titulo: "Rio da cidade", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "at",
        feedbackAcerto: "Isso! ATERRO SANITÁRIO trata direito, sem poluir.",
        feedbackErro: "Lixão e rio POLUEM. Tratamento correto = ATERRO SANITÁRIO.",
      },
      {
        id: "q2",
        pergunta: "O que fazer com PILHAS e CELULARES velhos?",
        fotoUrl: logistica,
        cards: [
          { id: "rev", emoji: "🔄", titulo: "Entregar em ponto de logística reversa", cor: "from-purple-500 to-fuchsia-700" },
          { id: "jog", emoji: "🗑️", titulo: "Jogar no lixo comum", cor: "from-red-500 to-rose-700" },
          { id: "en", emoji: "🕳️", titulo: "Enterrar no quintal", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "rev",
        feedbackAcerto: "Perfeito! LOGÍSTICA REVERSA — empresa reciclar.",
        feedbackErro: "Pilha no lixo comum ou enterrada CONTAMINA o solo. Ponto de LOGÍSTICA REVERSA.",
      },
      {
        id: "q3",
        pergunta: "Restos de comida podem virar...",
        cards: [
          { id: "co", emoji: "🌱", titulo: "Adubo (compostagem)", cor: "from-emerald-500 to-green-700" },
          { id: "en", emoji: "⚡", titulo: "Só energia elétrica", cor: "from-amber-500 to-yellow-600" },
          { id: "na", emoji: "🚯", titulo: "Nada — vai pro lixão", cor: "from-red-500 to-rose-700" },
        ],
        correta: "co",
        feedbackAcerto: "Isso! COMPOSTAGEM vira adubo natural pras plantas.",
        feedbackErro: "COMPOSTAGEM transforma resto de comida em ADUBO — dá pra fazer em casa.",
      },
    ],
    falaFinal: "Radar afiado! Você distingue destino certo do errado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Estados que já FECHARAM todos os lixões e usam só aterros sanitários. São exemplos pra seguir!",
    instrucao: "Acenda os estados exemplos de gestão de resíduos",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "SC", "PR", "DF"],
      pergunta: "Quais estados/DF são referências em gestão de resíduos?",
    },
    falaFinal: "SP, SC, PR e DF lideram — outros precisam seguir o exemplo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma GARRAFA PET vira CAMISETA nova?",
    instrucao: "Toque na ordem certa",
    pergunta: "Ciclo da reciclagem do PET:",
    paradas: [
      {
        id: "usar",
        emoji: "🧴",
        rotulo: "1. Você usa a garrafa",
        descricao: "Bebe o refrigerante e joga a garrafa vazia.",
      },
      {
        id: "separar",
        emoji: "♻️",
        rotulo: "2. Separa no lixo",
        descricao: "Vai pra lixeira de plástico (amarela ou verde).",
      },
      {
        id: "coleta",
        emoji: "🚛",
        rotulo: "3. Coleta seletiva",
        descricao: "Caminhão pega e leva pra cooperativa.",
      },
      {
        id: "fabrica",
        emoji: "🏭",
        rotulo: "4. Fábrica derrete e faz fio",
        descricao: "Garrafa vira flocos, depois fio de poliéster.",
      },
      {
        id: "roupa",
        emoji: "👕",
        rotulo: "5. Vira camiseta ou tapete",
        descricao: "Fio vira camiseta, tapete, mochila.",
      },
    ],
    ordemCerta: ["usar", "separar", "coleta", "fabrica", "roupa"],
    feedbackAcerto: "Ciclo completo! Garrafa vira camiseta.",
    feedbackErro: "Repensa: usa → separa → coleta → fábrica → roupa nova.",
    falaFinal: "5 etapas transformam lixo em roupa. Isso é economia circular.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as chaves.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 6 — Resíduos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "LIXÕES são o destino ERRADO — poluem solo, água e ar. Precisam ser fechados.",
        chaves: ["lixões", "poluem"],
      },
      {
        id: "p2",
        texto:
          "ATERROS SANITÁRIOS tratam o lixo em camadas cobertas, sem contaminação.",
        chaves: ["aterros", "tratam"],
      },
      {
        id: "p3",
        texto:
          "RECICLAGEM transforma lixo em matéria-prima nova. Depende da COLETA SELETIVA em casa.",
        chaves: ["reciclagem", "seletiva"],
      },
      {
        id: "p4",
        texto:
          "COMPOSTAGEM transforma resto de comida em ADUBO natural. LOGÍSTICA REVERSA devolve eletrônicos pra empresa.",
        chaves: ["compostagem", "reversa"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LIXEIRA CERTA! Cada rodada, escolha o destino correto do resíduo.",
    instrucao: "⏱️ Qual o destino certo?",
    duracaoSegundos: 12,
    pecas: [
      { id: "compostar", emoji: "🌱", rotulo: "Compostagem" },
      { id: "reciclar", emoji: "♻️", rotulo: "Reciclável" },
      { id: "reversa", emoji: "🔄", rotulo: "Logística reversa" },
      { id: "aterro", emoji: "🏗️", rotulo: "Aterro (rejeito)" },
      { id: "reusar", emoji: "🔧", rotulo: "Reusar" },
      { id: "doar", emoji: "🎁", rotulo: "Doar" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Casca de banana", emoji: "🍌", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Sobra de arroz", emoji: "🍚", cor: "from-emerald-400 to-green-600" },
        contexto: "Resto de comida orgânica. Destino?",
        pecaCertaId: "compostar",
        feedbackAcerto: "Isso! COMPOSTAGEM vira adubo em 3 meses.",
        feedbackErro: "Comida = COMPOSTAGEM. Vira adubo natural.",
      },
      {
        id: "r2",
        municipioA: { nome: "Garrafa PET", emoji: "🧴", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Papelão", emoji: "📦", cor: "from-amber-400 to-orange-600" },
        contexto: "Plástico e papelão limpos. Destino?",
        pecaCertaId: "reciclar",
        feedbackAcerto: "Perfeito! RECICLÁVEL — coleta seletiva.",
        feedbackErro: "PET e papelão vão pra RECICLAGEM.",
      },
      {
        id: "r3",
        municipioA: { nome: "Pilha usada", emoji: "🔋", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Celular velho", emoji: "📱", cor: "from-slate-400 to-gray-600" },
        contexto: "Eletrônico e pilha. Destino especial?",
        pecaCertaId: "reversa",
        feedbackAcerto: "Isso! LOGÍSTICA REVERSA — leve ao ponto certo.",
        feedbackErro: "Pilha/celular = LOGÍSTICA REVERSA (não pode jogar fora).",
      },
      {
        id: "r4",
        municipioA: { nome: "Fralda usada", emoji: "🧷", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Papel higiênico", emoji: "🧻", cor: "from-slate-400 to-gray-600" },
        contexto: "Rejeito não reciclável. Destino?",
        pecaCertaId: "aterro",
        feedbackAcerto: "Boa! ATERRO SANITÁRIO — sem alternativa.",
        feedbackErro: "Fralda e papel usado não recicla. ATERRO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Pote de vidro", emoji: "🫙", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Bem lavado", emoji: "✨", cor: "from-sky-400 to-blue-600" },
        contexto: "Pote de conserva vazio e lavado. Melhor opção?",
        pecaCertaId: "reusar",
        feedbackAcerto: "Isso! REUSAR — vira porta-lápis, potinho de mantimentos.",
        feedbackErro: "Antes de reciclar, tente REUSAR. Pote vira mil coisas.",
      },
      {
        id: "r6",
        municipioA: { nome: "Roupa ainda boa", emoji: "👕", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Não te serve mais", emoji: "🎁", cor: "from-emerald-400 to-green-600" },
        contexto: "Roupa em bom estado que não usa. Destino?",
        pecaCertaId: "doar",
        feedbackAcerto: "Perfeito! DOAR pra quem precisa — melhor que jogar fora.",
        feedbackErro: "Roupa boa = DOAR. Vira lixo se descartar.",
      },
    ],
    falaFinal: "6 destinos certos! Você virou mestre da coleta seletiva.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do LIXO doméstico: quanto dá pra evitar?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "evitavel",
        rotulo: "Reciclável/compostável (65%)",
        emoji: "♻️",
        percentual: 65,
        cor: "#10b981",
        descricao:
          "65% do lixo pode ser RECICLADO ou COMPOSTADO — só precisa separar em casa.",
        exemplos: ["🍌 Restos", "🧴 Plástico", "📦 Papel"],
      },
      {
        id: "rejeito",
        rotulo: "Rejeito real (35%)",
        emoji: "🗑️",
        percentual: 35,
        cor: "#ef4444",
        descricao:
          "Só 35% é REJEITO mesmo — vai pro aterro. O resto poderia ter destino melhor.",
        exemplos: ["🧷 Fraldas", "🧻 Papel usado", "🚬 Bitucas"],
      },
    ],
    falaFinal: "2/3 do seu lixo poderia virar coisa nova. Separar é começar.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra ganhar a insígnia Técnico em Reciclagem.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual é a MELHOR utilidade pra restos de comida?",
        opcoes: [
          { id: "a", texto: "Jogar em saco plástico junto com lixo comum", correta: false },
          { id: "b", texto: "Compostagem — virar adubo natural", correta: true },
          { id: "c", texto: "Jogar no rio", correta: false },
        ],
        feedbackAcerto: "Isso! COMPOSTAGEM enriquece o solo e reduz lixo.",
        feedbackErro: "Plástico e rio ATRAPALHAM. Compostagem transforma em ADUBO.",
      },
      {
        id: "av2",
        pergunta: "Qual é a diferença entre LIXÃO e ATERRO?",
        opcoes: [
          { id: "a", texto: "Nenhuma — são a mesma coisa", correta: false },
          { id: "b", texto: "Lixão polui; aterro trata corretamente", correta: true },
          { id: "c", texto: "Aterro é céu aberto e lixão é coberto", correta: false },
        ],
        feedbackAcerto: "Perfeito! LIXÃO polui; ATERRO trata em camadas seladas.",
        feedbackErro: "É o contrário: LIXÃO céu aberto polui. ATERRO trata direito.",
      },
      {
        id: "av3",
        pergunta: "O que a LOGÍSTICA REVERSA faz?",
        opcoes: [
          { id: "a", texto: "Coleta eletrônicos e pilhas pra reciclar", correta: true },
          { id: "b", texto: "Entrega comida em casa", correta: false },
          { id: "c", texto: "Leva lixo pro rio", correta: false },
        ],
        feedbackAcerto: "Isso! Empresa recolhe seus produtos velhos pra reciclar.",
        feedbackErro: "Comida é delivery. Rio é crime. LOGÍSTICA REVERSA = reciclar eletrônicos.",
      },
    ],
    selo: {
      nome: "Técnico em Reciclagem",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "♻️",
      cor: "from-red-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada! Cada resíduo tem seu destino certo.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Técnico em Reciclagem" },
};
