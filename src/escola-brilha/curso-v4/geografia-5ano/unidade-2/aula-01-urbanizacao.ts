import type { AulaGeoV1 } from "../../types";
import metropole from "@/assets/geografia-5ano/metropole-sp.jpg";
import exodo from "@/assets/geografia-5ano/exodo-rural.jpg";
import litoral from "@/assets/geografia-5ano/distribuicao-litoral.jpg";

/**
 * Geografia · 5º Ano · Unidade 2 · Aula 01
 * "A Urbanização e as Grandes Cidades" — EF05GE03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-urbanizacao",
  titulo: "A Urbanização e as Grandes Cidades",
  iconeTrilha: "🏙️",
  bncc: ["EF05GE03", "EF05GE04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe a metrópole. Prédios até o horizonte.",
    mapaUrl: metropole,
    imagemDestaqueUrl: metropole,
    aurora:
      "Explorador, há 100 anos a MAIORIA dos brasileiros morava no CAMPO. Hoje, 85% mora em CIDADES! Esse movimento se chama URBANIZAÇÃO. Ela trouxe emprego, mas também trânsito, poluição e falta de moradia.",
    falaFinal: "Vamos entender por que o povo saiu do campo e o que virou das cidades.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: quando MUITAS famílias saem do campo pra viver em cidades grandes, isso se chama...",
    pergunta: "Como se chama sair do campo pra cidade?",
    opcoes: [
      {
        id: "exodo",
        titulo: "ÊXODO RURAL",
        subtitulo: "saída em massa do campo",
        emoji: "🚚",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "ferias",
        titulo: "FÉRIAS",
        subtitulo: "viagem de descanso",
        emoji: "🏖️",
        cor: "from-sky-400 to-blue-600",
      },
    ],
    respostaCerta: "exodo",
    feedbackAcerto:
      "Isso! ÊXODO RURAL = êxodo (saída em massa) + rural (campo). Foi o maior movimento do Brasil no século 20.",
    feedbackErro: "Férias é passeio. Sair pra sempre do campo pra cidade = ÊXODO RURAL.",
    falaFinal: "Milhões vieram. Cidades explodiram. Bora ver o que rolou.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da urbanização.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "urbanizacao",
        capa: "1. Urbanização",
        emoji: "🏙️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "URBANIZAÇÃO é o processo pelo qual mais pessoas passam a viver em CIDADES em vez do campo. No Brasil aconteceu forte entre 1950 e 2000.",
        exemplo: "Ex.: hoje 85% dos brasileiros vive em áreas urbanas.",
        fotoUrl: metropole,
      },
      {
        id: "exodo",
        capa: "2. Êxodo rural",
        emoji: "🚚",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "ÊXODO RURAL é a saída em MASSA do campo pra cidade. As famílias buscavam emprego nas fábricas e melhores escolas.",
        exemplo: "Ex.: nordestinos indo pra São Paulo trabalhar em fábricas.",
        fotoUrl: exodo,
      },
      {
        id: "metropole",
        capa: "3. Metrópole",
        emoji: "🌆",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "METRÓPOLE é uma cidade MUITO GRANDE que influencia várias outras ao redor. São Paulo, Rio e Belo Horizonte são metrópoles.",
        exemplo: "Ex.: SP tem quase 22 milhões contando a região metropolitana.",
      },
      {
        id: "saneamento",
        capa: "4. Saneamento básico",
        emoji: "🚰",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "SANEAMENTO BÁSICO é água tratada, esgoto encanado e coleta de lixo. Sem isso, o crescimento das cidades traz doenças.",
        exemplo: "Ex.: um bairro sem esgoto tem crianças doentes.",
      },
    ],
    falaFinal: "Urbanização, êxodo, metrópole, saneamento. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto da metrópole e ouça os desafios.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: metropole,
    pontos: [
      {
        id: "transito",
        x: 50,
        y: 60,
        emoji: "🚗",
        cor: "from-red-500 to-rose-700",
        titulo: "TRÂNSITO",
        texto:
          "Milhões de carros nas ruas. As pessoas gastam horas presas no trânsito indo pro trabalho.",
      },
      {
        id: "poluicao",
        x: 30,
        y: 30,
        emoji: "🌫️",
        cor: "from-slate-500 to-gray-700",
        titulo: "POLUIÇÃO DO AR",
        texto:
          "Fumaça de carros e fábricas polui o céu. Crianças com asma, gente doente.",
      },
      {
        id: "moradia",
        x: 75,
        y: 55,
        emoji: "🏚️",
        cor: "from-amber-500 to-orange-700",
        titulo: "FALTA DE MORADIA",
        texto:
          "Não tem casa pra todos. Aparecem favelas e ocupações sem estrutura.",
      },
      {
        id: "saneamento",
        x: 60,
        y: 75,
        emoji: "🚰",
        cor: "from-emerald-500 to-green-700",
        titulo: "SANEAMENTO",
        texto:
          "Bairros novos crescem sem esgoto tratado. Doenças aumentam.",
      },
    ],
    falaFinal: "Cidade grande = oportunidade + desafios. Precisa PLANEJAR.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre cidades.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Sair do campo em massa pra viver na cidade é...",
        fotoUrl: exodo,
        cards: [
          { id: "ex", emoji: "🚚", titulo: "Êxodo rural", cor: "from-amber-500 to-orange-700" },
          { id: "tur", emoji: "🏖️", titulo: "Turismo", cor: "from-sky-500 to-blue-700" },
          { id: "im", emoji: "✈️", titulo: "Imigração", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "ex",
        feedbackAcerto: "Isso! ÊXODO RURAL — saída em massa do campo.",
        feedbackErro: "Turismo é passeio. Sair pra sempre do campo = ÊXODO RURAL.",
      },
      {
        id: "q2",
        pergunta: "Cidade gigante que influencia várias outras é...",
        fotoUrl: metropole,
        cards: [
          { id: "vil", emoji: "🏡", titulo: "Vila", cor: "from-emerald-500 to-green-700" },
          { id: "met", emoji: "🌆", titulo: "Metrópole", cor: "from-purple-500 to-fuchsia-700" },
          { id: "faz", emoji: "🚜", titulo: "Fazenda", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "met",
        feedbackAcerto: "Perfeito! METRÓPOLE puxa várias cidades ao redor.",
        feedbackErro: "Vila é pequena, fazenda é rural. Cidade gigante = METRÓPOLE.",
      },
      {
        id: "q3",
        pergunta: "Água tratada + esgoto + coleta de lixo é...",
        cards: [
          { id: "san", emoji: "🚰", titulo: "Saneamento básico", cor: "from-emerald-500 to-green-700" },
          { id: "tra", emoji: "🚗", titulo: "Trânsito", cor: "from-red-500 to-rose-700" },
          { id: "pol", emoji: "🌫️", titulo: "Poluição", cor: "from-slate-500 to-gray-700" },
        ],
        correta: "san",
        feedbackAcerto: "Isso! SANEAMENTO BÁSICO — direito de todo cidadão.",
        feedbackErro: "Trânsito é carro, poluição é sujeira. Água + esgoto + lixo = SANEAMENTO.",
      },
    ],
    falaFinal: "Você já sabe distinguir os desafios da cidade grande.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "As 4 principais METRÓPOLES do Brasil. Toca em cada uma pra ver onde puxam gente e trabalho.",
    instrucao: "Acenda as 4 grandes metrópoles",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "DF"],
      pergunta: "Onde ficam as 4 grandes metrópoles brasileiras?",
    },
    falaFinal: "SP, RJ, BH e Brasília — metrópoles que comandam economia e política.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar a história de UMA família migrante.",
    instrucao: "Toque na ordem certa",
    pergunta: "Como acontece uma migração campo → cidade?",
    paradas: [
      {
        id: "seca",
        emoji: "🌵",
        rotulo: "1. Seca no campo",
        descricao: "A lavoura não dá. A família não tem o que comer nem vender.",
      },
      {
        id: "decisao",
        emoji: "💭",
        rotulo: "2. Decisão de migrar",
        descricao: "Um parente conta que em SP tem trabalho na fábrica. A família decide ir.",
      },
      {
        id: "viagem",
        emoji: "🚚",
        rotulo: "3. Viagem de pau-de-arara",
        descricao: "Ônibus lotado, dias na estrada. Levam só o essencial.",
      },
      {
        id: "chegada",
        emoji: "🏙️",
        rotulo: "4. Chegada na cidade grande",
        descricao: "Barulho, gente, prédios. Mora num quarto pequeno no começo.",
      },
      {
        id: "trabalho",
        emoji: "🏭",
        rotulo: "5. Trabalho e nova vida",
        descricao: "Consegue emprego na fábrica. Filhos vão pra escola urbana.",
      },
    ],
    ordemCerta: ["seca", "decisao", "viagem", "chegada", "trabalho"],
    feedbackAcerto: "Linha do êxodo perfeita! É a história de milhões.",
    feedbackErro: "Repensa: seca → decisão → viagem → chegada → trabalho.",
    falaFinal: "Cada migrante é uma história. Todas juntas viraram o Brasil urbano.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 2 — Cidades do Brasil",
    paragrafos: [
      {
        id: "p1",
        texto:
          "URBANIZAÇÃO é quando MAIS pessoas passam a morar em CIDADES do que no campo.",
        chaves: ["urbanização", "cidades"],
      },
      {
        id: "p2",
        texto:
          "O ÊXODO RURAL foi a saída em MASSA das famílias do campo pra buscar trabalho na cidade.",
        chaves: ["êxodo", "massa", "trabalho"],
      },
      {
        id: "p3",
        texto:
          "METRÓPOLES são cidades GIGANTES como SP, RJ e BH — puxam gente e economia.",
        chaves: ["metrópoles", "gigantes", "sp"],
      },
      {
        id: "p4",
        texto:
          "Crescimento sem planejamento traz TRÂNSITO, POLUIÇÃO e falta de SANEAMENTO.",
        chaves: ["trânsito", "poluição", "saneamento"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo URBANISTA! Cada rodada, escolha a solução certa pra cidade.",
    instrucao: "⏱️ Qual solução resolve?",
    duracaoSegundos: 12,
    pecas: [
      { id: "metro", emoji: "🚇", rotulo: "Metrô" },
      { id: "arvores", emoji: "🌳", rotulo: "Mais árvores" },
      { id: "esgoto", emoji: "🚰", rotulo: "Rede de esgoto" },
      { id: "moradia", emoji: "🏘️", rotulo: "Moradia popular" },
      { id: "reciclagem", emoji: "♻️", rotulo: "Coleta seletiva" },
      { id: "ciclovia", emoji: "🚴", rotulo: "Ciclovia" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Congestionamento", emoji: "🚗", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Horas parado", emoji: "⏰", cor: "from-amber-400 to-orange-600" },
        contexto: "Milhões de carros no trânsito. Solução mais eficiente?",
        pecaCertaId: "metro",
        feedbackAcerto: "Isso! METRÔ leva mais gente com menos poluição.",
        feedbackErro: "Ciclovia ajuda, mas METRÔ transporta MUITO mais gente.",
      },
      {
        id: "r2",
        municipioA: { nome: "Ar sujo", emoji: "🌫️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Calor demais", emoji: "🥵", cor: "from-red-400 to-rose-600" },
        contexto: "Cidade quente e poluída. O que planta?",
        pecaCertaId: "arvores",
        feedbackAcerto: "Perfeito! ÁRVORES limpam o ar e refrescam a cidade.",
        feedbackErro: "ÁRVORES resolvem os dois: limpam ar e diminuem calor.",
      },
      {
        id: "r3",
        municipioA: { nome: "Rio poluído", emoji: "🏞️", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Doenças", emoji: "🤒", cor: "from-red-400 to-rose-600" },
        contexto: "Esgoto vai direto pro rio. Solução?",
        pecaCertaId: "esgoto",
        feedbackAcerto: "Isso! REDE DE ESGOTO tratado protege rio e saúde.",
        feedbackErro: "Precisa REDE DE ESGOTO pra não contaminar rio nem povo.",
      },
      {
        id: "r4",
        municipioA: { nome: "Favela crescendo", emoji: "🏚️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Sem casa", emoji: "🏠", cor: "from-slate-400 to-gray-600" },
        contexto: "Muita gente sem moradia digna. O que construir?",
        pecaCertaId: "moradia",
        feedbackAcerto: "Boa! MORADIA POPULAR é direito social.",
        feedbackErro: "Precisa MORADIA POPULAR planejada com estrutura.",
      },
      {
        id: "r5",
        municipioA: { nome: "Lixão", emoji: "🗑️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Ruas sujas", emoji: "🧹", cor: "from-red-400 to-rose-600" },
        contexto: "Lixo virando problema. Solução inteligente?",
        pecaCertaId: "reciclagem",
        feedbackAcerto: "Isso! COLETA SELETIVA reduz aterro e vira renda.",
        feedbackErro: "COLETA SELETIVA separa e recicla, diminuindo o lixo.",
      },
      {
        id: "r6",
        municipioA: { nome: "Bicicleta esquecida", emoji: "🚲", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Curta distância", emoji: "📍", cor: "from-sky-400 to-blue-600" },
        contexto: "Bairro com trajetos curtos. Solução limpa?",
        pecaCertaId: "ciclovia",
        feedbackAcerto: "Perfeito! CICLOVIA incentiva bicicleta, sem poluição.",
        feedbackErro: "Trajetos curtos = CICLOVIA resolve com bicicleta.",
      },
    ],
    falaFinal: "6 soluções urbanas! Você pensa como urbanista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos DESAFIOS URBANOS: o que pega mais na metrópole?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "planejamento",
        rotulo: "Sem planejamento (70%)",
        emoji: "🚧",
        percentual: 70,
        cor: "#ef4444",
        descricao:
          "A maior parte dos problemas urbanos (trânsito, favela, poluição) vem de crescimento sem planejamento.",
        exemplos: ["🚗 Trânsito", "🏚️ Favelas", "🌫️ Poluição"],
      },
      {
        id: "estrutura",
        rotulo: "Estrutura ok (30%)",
        emoji: "🏢",
        percentual: 30,
        cor: "#10b981",
        descricao:
          "Bairros planejados com saneamento, transporte e áreas verdes funcionam bem — mostrando o caminho.",
        exemplos: ["🚇 Metrô", "🌳 Parques", "🚰 Esgoto"],
      },
    ],
    falaFinal: "Planejar cidade = cuidar de vida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Urbanista Júnior.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O crescimento RÁPIDO e sem planejamento de uma cidade causa:",
        opcoes: [
          { id: "a", texto: "Ruas limpas e sem carros", correta: false },
          { id: "b", texto: "Falta de saneamento, trânsito e poluição", correta: true },
          { id: "c", texto: "Menos habitantes", correta: false },
        ],
        feedbackAcerto: "Isso! Sem planejamento = trânsito, poluição, sem esgoto.",
        feedbackErro: "Ruas limpas exigem planejamento. Sem ele = trânsito e poluição.",
      },
      {
        id: "av2",
        pergunta: "'Sair em massa do campo pra viver na cidade' é...",
        opcoes: [
          { id: "a", texto: "Turismo", correta: false },
          { id: "b", texto: "Êxodo rural", correta: true },
          { id: "c", texto: "Imigração internacional", correta: false },
        ],
        feedbackAcerto: "Perfeito! ÊXODO RURAL = saída em massa do campo.",
        feedbackErro: "Turismo é passeio. Imigração é entre países. Massa do campo = ÊXODO RURAL.",
      },
      {
        id: "av3",
        pergunta: "Uma cidade GIGANTE que influencia várias outras é...",
        opcoes: [
          { id: "a", texto: "Vila", correta: false },
          { id: "b", texto: "Metrópole", correta: true },
          { id: "c", texto: "Sítio", correta: false },
        ],
        feedbackAcerto: "Isso! METRÓPOLE — puxa economia e gente ao redor.",
        feedbackErro: "Vila e sítio são pequenos. Gigante = METRÓPOLE.",
      },
    ],
    selo: {
      nome: "Urbanista Júnior",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🏙️",
      cor: "from-orange-400 to-red-600",
    },
    falaFinal: "Insígnia conquistada! Você pensa cidade com cuidado.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Urbanista Júnior" },
};
