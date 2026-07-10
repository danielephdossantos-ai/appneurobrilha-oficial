import type { AulaGeoV1 } from "../../types";
import renovavel from "@/assets/geografia-5ano/energia-renovavel.jpg";
import fossil from "@/assets/geografia-5ano/energia-fossil.jpg";

/**
 * Geografia · 5º Ano · Unidade 4 · Aula 01
 * "Matriz Energética do Brasil" — EF05GE06 / EF05GE07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-matriz-energetica",
  titulo: "Matriz Energética do Brasil",
  iconeTrilha: "⚡",
  bncc: ["EF05GE06", "EF05GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: sol, vento e água viram energia.",
    mapaUrl: renovavel,
    imagemDestaqueUrl: renovavel,
    aurora:
      "Explorador, de onde vem a energia que acende a luz da sua casa e liga o seu tablet? Do SOL, do VENTO, da ÁGUA — e também do PETRÓLEO e do CARVÃO. O jeito que o país mistura essas fontes se chama MATRIZ ENERGÉTICA.",
    falaFinal: "O Brasil tem uma matriz LIMPA. Vamos ver por quê.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: qual dessas fontes NÃO ACABA nunca?",
    pergunta: "Qual fonte é RENOVÁVEL?",
    opcoes: [
      {
        id: "sol",
        titulo: "SOL",
        subtitulo: "raios de todo dia",
        emoji: "☀️",
        cor: "from-amber-400 to-yellow-600",
      },
      {
        id: "petroleo",
        titulo: "PETRÓLEO",
        subtitulo: "combustível do subsolo",
        emoji: "🛢️",
        cor: "from-slate-500 to-gray-700",
      },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "Isso! O SOL não acaba. Petróleo LEVA milhões de anos pra se formar — quando acabar, acabou.",
    feedbackErro: "Petróleo é FÓSSIL: acaba. Sol brilha todo dia = RENOVÁVEL.",
    falaFinal: "Renovável = não acaba. Fóssil = acaba um dia. Grande diferença.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da energia.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "matriz",
        capa: "1. Matriz energética",
        emoji: "⚡",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "MATRIZ ENERGÉTICA é a MISTURA de fontes que um país usa pra gerar energia. Cada país tem a sua.",
        exemplo: "Ex.: Brasil = muita hidrelétrica. Alemanha = muita solar e eólica.",
      },
      {
        id: "renovavel",
        capa: "2. Renovável",
        emoji: "♻️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "RENOVÁVEL é a fonte que NÃO acaba: sol, vento, água. Também é LIMPA — não polui o ar.",
        exemplo: "Ex.: painéis solares, hidrelétrica, turbinas eólicas.",
        fotoUrl: renovavel,
      },
      {
        id: "fossil",
        capa: "3. Fóssil (não renovável)",
        emoji: "🛢️",
        cor: "from-slate-500 to-gray-700",
        conteudo:
          "FÓSSIL é a fonte formada em milhões de anos: petróleo, carvão, gás. QUEIMA polui o ar e piora o aquecimento global.",
        exemplo: "Ex.: gasolina, óleo diesel, usinas a carvão.",
        fotoUrl: fossil,
      },
      {
        id: "hidreletrica",
        capa: "4. Hidrelétrica",
        emoji: "💧",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "HIDRELÉTRICA usa a FORÇA da água caindo pra gerar eletricidade. É a principal fonte de energia do Brasil.",
        exemplo: "Ex.: Itaipu (PR) gera energia pra Brasil e Paraguai.",
      },
    ],
    falaFinal: "Matriz, renovável, fóssil, hidrelétrica. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada fonte de energia e ouça como funciona.",
    instrucao: "Toque em cada balão",
    mapaUrl: renovavel,
    pontos: [
      {
        id: "solar",
        x: 25,
        y: 60,
        emoji: "☀️",
        cor: "from-amber-400 to-yellow-600",
        titulo: "SOLAR",
        texto:
          "Painéis solares captam a luz do sol e viram eletricidade. Brasil tem MUITO sol — potencial gigante.",
      },
      {
        id: "eolica",
        x: 55,
        y: 30,
        emoji: "🌬️",
        cor: "from-sky-500 to-blue-700",
        titulo: "EÓLICA",
        texto:
          "Turbinas altas giram com o vento e geram eletricidade. Nordeste tem muito vento — lidera essa fonte.",
      },
      {
        id: "hidro",
        x: 75,
        y: 55,
        emoji: "💧",
        cor: "from-blue-500 to-indigo-700",
        titulo: "HIDRELÉTRICA",
        texto:
          "Barragens grandes: água cai, gira turbinas, faz energia. Itaipu, Belo Monte, Furnas.",
      },
      {
        id: "biomassa",
        x: 40,
        y: 80,
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        titulo: "BIOMASSA",
        texto:
          "Queimar cana e bagaço vira energia elétrica. Também é renovável, se plantar de novo.",
      },
    ],
    falaFinal: "Sol, vento, água, biomassa. Brasil é rico em energia LIMPA.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre energia.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual fonte é RENOVÁVEL?",
        fotoUrl: renovavel,
        cards: [
          { id: "sol", emoji: "☀️", titulo: "Solar", cor: "from-amber-400 to-yellow-600" },
          { id: "car", emoji: "⛏️", titulo: "Carvão", cor: "from-slate-500 to-gray-700" },
          { id: "pet", emoji: "🛢️", titulo: "Petróleo", cor: "from-slate-600 to-gray-800" },
        ],
        correta: "sol",
        feedbackAcerto: "Isso! SOLAR = infinita e limpa.",
        feedbackErro: "Carvão e petróleo são FÓSSEIS. Renovável = SOLAR.",
      },
      {
        id: "q2",
        pergunta: "Qual a principal fonte de energia do Brasil?",
        cards: [
          { id: "car", emoji: "⛏️", titulo: "Carvão", cor: "from-slate-500 to-gray-700" },
          { id: "hid", emoji: "💧", titulo: "Hidrelétrica", cor: "from-blue-500 to-indigo-700" },
          { id: "nu", emoji: "☢️", titulo: "Nuclear", cor: "from-purple-500 to-fuchsia-700" },
        ],
        correta: "hid",
        feedbackAcerto: "Perfeito! HIDRELÉTRICA lidera a matriz brasileira.",
        feedbackErro: "Carvão e nuclear são pequenas partes. Brasil = HIDRELÉTRICA principalmente.",
      },
      {
        id: "q3",
        pergunta: "Queimar petróleo e carvão traz qual problema?",
        fotoUrl: fossil,
        cards: [
          { id: "polui", emoji: "🌫️", titulo: "Poluição do ar", cor: "from-slate-500 to-gray-700" },
          { id: "sil", emoji: "🤫", titulo: "Muito silêncio", cor: "from-sky-500 to-blue-700" },
          { id: "flor", emoji: "🌳", titulo: "Mais floresta", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "polui",
        feedbackAcerto: "Isso! Combustíveis fósseis POLUEM e aquecem o planeta.",
        feedbackErro: "Fósseis não trazem silêncio nem floresta — trazem POLUIÇÃO.",
      },
    ],
    falaFinal: "Radar afiado! Você já distingue limpa de suja.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Os estados que mais produzem energia RENOVÁVEL no Brasil. Nordeste lidera eólica e solar. Sul e Norte têm gigantes hidrelétricas.",
    instrucao: "Acenda os estados líderes em energia limpa",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "RN", "CE", "PR", "PA"],
      pergunta: "Quais estados lideram energia renovável no Brasil?",
    },
    falaFinal: "BA/RN/CE = eólica e solar. PR = Itaipu. PA = Belo Monte. Brasil é potência LIMPA.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o SOL vira LUZ na sua casa?",
    instrucao: "Toque na ordem certa",
    pergunta: "Caminho da energia SOLAR:",
    paradas: [
      {
        id: "sol",
        emoji: "☀️",
        rotulo: "1. Sol brilha",
        descricao: "O Sol emite raios de luz o dia todo.",
      },
      {
        id: "painel",
        emoji: "🔆",
        rotulo: "2. Painel solar capta",
        descricao: "Painéis no telhado transformam a luz em eletricidade contínua.",
      },
      {
        id: "inversor",
        emoji: "🔌",
        rotulo: "3. Inversor",
        descricao: "Aparelho converte a energia pro tipo que a casa usa.",
      },
      {
        id: "rede",
        emoji: "🏘️",
        rotulo: "4. Rede elétrica",
        descricao: "A energia vai pra rede da rua ou direto pra sua casa.",
      },
      {
        id: "luz",
        emoji: "💡",
        rotulo: "5. Luz acende",
        descricao: "Você aperta o interruptor e a lâmpada acende.",
      },
    ],
    ordemCerta: ["sol", "painel", "inversor", "rede", "luz"],
    feedbackAcerto: "Caminho solar completo! Do sol à sua lâmpada.",
    feedbackErro: "Repensa: sol → painel → inversor → rede → luz.",
    falaFinal: "5 etapas, energia limpa na sua tomada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as chaves.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 4 — Matriz Energética",
    paragrafos: [
      {
        id: "p1",
        texto:
          "MATRIZ ENERGÉTICA é a mistura de FONTES que um país usa pra gerar energia elétrica.",
        chaves: ["matriz", "fontes"],
      },
      {
        id: "p2",
        texto:
          "Fontes RENOVÁVEIS (sol, vento, água) não acabam e não poluem. Fontes FÓSSEIS (petróleo, carvão) acabam e poluem.",
        chaves: ["renováveis", "fósseis", "poluem"],
      },
      {
        id: "p3",
        texto:
          "A HIDRELÉTRICA é a principal fonte do Brasil. Itaipu (PR) é uma das maiores do mundo.",
        chaves: ["hidrelétrica", "itaipu"],
      },
      {
        id: "p4",
        texto:
          "O Brasil investe cada vez mais em EÓLICA e SOLAR, protegendo o planeta do aquecimento global.",
        chaves: ["eólica", "solar", "aquecimento"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LIGA A LUZ! Cada rodada, escolha a fonte certa pra cada situação.",
    instrucao: "⏱️ Qual fonte de energia?",
    duracaoSegundos: 12,
    pecas: [
      { id: "solar", emoji: "☀️", rotulo: "Solar" },
      { id: "eolica", emoji: "🌬️", rotulo: "Eólica" },
      { id: "hidro", emoji: "💧", rotulo: "Hidrelétrica" },
      { id: "petroleo", emoji: "🛢️", rotulo: "Petróleo" },
      { id: "carvao", emoji: "⛏️", rotulo: "Carvão" },
      { id: "biomassa", emoji: "🌾", rotulo: "Biomassa" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Telhado da escola", emoji: "🏫", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Dia ensolarado", emoji: "☀️", cor: "from-amber-400 to-orange-600" },
        contexto: "Escola pequena, dia de sol, sem barragem. Melhor fonte?",
        pecaCertaId: "solar",
        feedbackAcerto: "Isso! SOLAR — painel no telhado resolve.",
        feedbackErro: "Sol batendo no telhado = SOLAR direto na escola.",
      },
      {
        id: "r2",
        municipioA: { nome: "Litoral do Nordeste", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Vento forte", emoji: "🌬️", cor: "from-sky-500 to-indigo-600" },
        contexto: "Ceará ou RN com vento constante. Fonte ideal?",
        pecaCertaId: "eolica",
        feedbackAcerto: "Perfeito! EÓLICA — turbinas girando no vento nordestino.",
        feedbackErro: "Vento forte + costa = EÓLICA (turbinas).",
      },
      {
        id: "r3",
        municipioA: { nome: "Rio grande do PR", emoji: "🌊", cor: "from-blue-500 to-indigo-700" },
        municipioB: { nome: "Barragem enorme", emoji: "🏗️", cor: "from-slate-500 to-gray-700" },
        contexto: "Rio Paraná largo, muita água. Fonte tradicional do Brasil?",
        pecaCertaId: "hidro",
        feedbackAcerto: "Boa! HIDRELÉTRICA — Itaipu está bem aí.",
        feedbackErro: "Rio grande + barragem = HIDRELÉTRICA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Carro comum", emoji: "🚗", cor: "from-slate-500 to-gray-700" },
        municipioB: { nome: "Posto de gasolina", emoji: "⛽", cor: "from-red-500 to-rose-700" },
        contexto: "Combustível fóssil líquido que move a maioria dos carros. É?",
        pecaCertaId: "petroleo",
        feedbackAcerto: "Isso! PETRÓLEO vira gasolina e diesel.",
        feedbackErro: "Gasolina e diesel vêm do PETRÓLEO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Termelétrica antiga", emoji: "🏭", cor: "from-slate-500 to-gray-700" },
        municipioB: { nome: "Muita fumaça preta", emoji: "🌫️", cor: "from-slate-600 to-gray-800" },
        contexto: "Combustível SÓLIDO fóssil, muito poluente. É?",
        pecaCertaId: "carvao",
        feedbackAcerto: "Perfeito! CARVÃO — muito usado no exterior, pouco no Brasil.",
        feedbackErro: "Sólido, escuro e poluente = CARVÃO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Canavial", emoji: "🌾", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Bagaço queimando", emoji: "🔥", cor: "from-amber-400 to-orange-600" },
        contexto: "Bagaço de cana queimado gera energia. É?",
        pecaCertaId: "biomassa",
        feedbackAcerto: "Boa! BIOMASSA — bagaço da cana vira eletricidade.",
        feedbackErro: "Cana queimada = BIOMASSA.",
      },
    ],
    falaFinal: "6 fontes identificadas! Você conhece toda a matriz.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da MATRIZ brasileira: quanto vem de fonte LIMPA?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "limpa",
        rotulo: "Limpa/renovável (85%)",
        emoji: "♻️",
        percentual: 85,
        cor: "#10b981",
        descricao:
          "A maior parte da eletricidade brasileira vem de HIDRELÉTRICA, EÓLICA, SOLAR e BIOMASSA. Somos um dos países mais limpos do mundo.",
        exemplos: ["💧 Hidrelétrica", "🌬️ Eólica", "☀️ Solar"],
      },
      {
        id: "fossil",
        rotulo: "Fóssil (15%)",
        emoji: "🛢️",
        percentual: 15,
        cor: "#ef4444",
        descricao:
          "Só 15% vem de fontes fósseis — usada quando as hidrelétricas ficam com pouca água.",
        exemplos: ["🛢️ Petróleo", "⛽ Gás natural", "⛏️ Carvão"],
      },
    ],
    falaFinal: "Brasil = 85% limpa. Podemos chegar a 100%.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra ganhar a insígnia Engenheiro Sustentável.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Por que o Brasil deve investir em energia SOLAR e EÓLICA?",
        opcoes: [
          { id: "a", texto: "Porque funcionam melhor à noite", correta: false },
          { id: "b", texto: "Porque são limpas, renováveis e não poluem", correta: true },
          { id: "c", texto: "Porque são as mais caras", correta: false },
        ],
        feedbackAcerto: "Isso! LIMPAS, RENOVÁVEIS e não poluem — protegem o planeta.",
        feedbackErro: "Sol e vento são fortes durante o dia. Vantagem = LIMPAS.",
      },
      {
        id: "av2",
        pergunta: "Qual fonte é FÓSSIL (não renovável)?",
        opcoes: [
          { id: "a", texto: "Sol", correta: false },
          { id: "b", texto: "Petróleo", correta: true },
          { id: "c", texto: "Vento", correta: false },
        ],
        feedbackAcerto: "Perfeito! PETRÓLEO é fóssil — leva milhões de anos.",
        feedbackErro: "Sol e vento são renováveis. Fóssil = PETRÓLEO.",
      },
      {
        id: "av3",
        pergunta: "Qual a PRINCIPAL fonte de energia elétrica do Brasil?",
        opcoes: [
          { id: "a", texto: "Nuclear", correta: false },
          { id: "b", texto: "Hidrelétrica", correta: true },
          { id: "c", texto: "Carvão", correta: false },
        ],
        feedbackAcerto: "Isso! HIDRELÉTRICA lidera. Itaipu, Belo Monte, Furnas.",
        feedbackErro: "Nuclear e carvão são pequenos. Brasil = HIDRELÉTRICA.",
      },
    ],
    selo: {
      nome: "Engenheiro Sustentável",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "⚡",
      cor: "from-yellow-400 to-amber-600",
    },
    falaFinal: "Insígnia conquistada! Você sabe de onde vem a energia limpa.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Engenheiro Sustentável" },
};
