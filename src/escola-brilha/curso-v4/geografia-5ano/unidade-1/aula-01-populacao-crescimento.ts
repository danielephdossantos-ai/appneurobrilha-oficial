import type { AulaGeoV1 } from "../../types";
import { url as censo } from "@/assets/geografia-5ano/censo-demografico.jpg.asset.json";
import { url as litoral } from "@/assets/geografia-5ano/distribuicao-litoral.jpg.asset.json";
import { url as metropole } from "@/assets/geografia-5ano/metropole-sp.jpg.asset.json";
/**
 * Geografia · 5º Ano · Unidade 1 · Aula 01
 * "A Dinâmica Populacional e Crescimento" — EF05GE01
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-populacao-crescimento",
  titulo: "A Dinâmica Populacional e Crescimento",
  iconeTrilha: "👥",
  bncc: ["EF05GE01", "EF05GE02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o Brasil não para de mudar.",
    mapaUrl: censo,
    imagemDestaqueUrl: censo,
    aurora:
      "Explorador, o Brasil tem mais de 200 milhões de pessoas! Mas como o governo sabe quantos somos? Um recenseador bate na porta, faz perguntas e anota. Isso é o CENSO DEMOGRÁFICO — a contagem oficial do país.",
    falaFinal: "Sem contar a gente, não dá pra planejar escola, hospital, moradia. Vamos entender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: pra que serve o governo saber quantas pessoas moram em cada cidade?",
    pergunta: "Por que fazer o Censo?",
    opcoes: [
      {
        id: "planejar",
        titulo: "PLANEJAR o futuro",
        subtitulo: "escolas, hospitais, ônibus, moradia",
        emoji: "🏥",
        cor: "from-emerald-400 to-green-600",
      },
      {
        id: "curiosidade",
        titulo: "Só CURIOSIDADE",
        subtitulo: "saber os nomes mais comuns",
        emoji: "🤔",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "planejar",
    feedbackAcerto:
      "Isso! O Censo mostra ONDE precisa mais escola, mais posto de saúde, mais transporte.",
    feedbackErro: "Nomes comuns é curiosidade. O Censo é ferramenta pra PLANEJAR o país.",
    falaFinal: "Contar bem = cuidar bem. Bora ver como a gente se espalha pelo Brasil.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave da população brasileira.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "censo",
        capa: "1. Censo",
        emoji: "📋",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "CENSO é a contagem oficial da população feita pelo IBGE de 10 em 10 anos. Vai casa por casa perguntando quem mora, idade, trabalho, cor.",
        exemplo: "Ex.: recenseador de camisa azul batendo na porta.",
        fotoUrl: censo,
      },
      {
        id: "densidade",
        capa: "2. Densidade demográfica",
        emoji: "📊",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "DENSIDADE é quantas pessoas moram em cada quilômetro quadrado. Alta = muita gente amontoada. Baixa = pouca gente espalhada.",
        exemplo: "Ex.: SP tem densidade ALTA. Amazonas tem densidade BAIXA.",
      },
      {
        id: "distribuicao",
        capa: "3. Distribuição",
        emoji: "🗺️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "DISTRIBUIÇÃO é como a população está espalhada. No Brasil, a maioria mora perto do LITORAL e nas capitais.",
        exemplo: "Ex.: Rio, Salvador, Recife, Fortaleza — todas colocadas no mar.",
        fotoUrl: litoral,
      },
      {
        id: "crescimento",
        capa: "4. Crescimento populacional",
        emoji: "📈",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "CRESCIMENTO é o aumento da população. Depende de nascimentos, mortes e migração. No Brasil, o crescimento está mais LENTO agora.",
        exemplo: "Ex.: famílias com menos filhos, gente vivendo mais tempo.",
      },
    ],
    falaFinal: "Censo, densidade, distribuição, crescimento. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto do Brasil e ouça como a população se distribui.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: litoral,
    pontos: [
      {
        id: "litoral",
        x: 70,
        y: 40,
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        titulo: "LITORAL — muita gente",
        texto:
          "A maioria dos brasileiros mora perto do mar. Foi lá que os portugueses fundaram as primeiras cidades: Salvador, Rio, Recife, Olinda.",
        fotoUrl: litoral,
      },
      {
        id: "interior",
        x: 40,
        y: 55,
        emoji: "🌾",
        cor: "from-amber-500 to-orange-700",
        titulo: "INTERIOR — menos gente",
        texto:
          "No sertão e no cerrado a densidade é baixa. Cidades pequenas, grandes distâncias entre uma e outra.",
      },
      {
        id: "amazonia",
        x: 25,
        y: 30,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "AMAZÔNIA — quase vazia",
        texto:
          "A maior floresta do mundo tem pouca gente. Só ribeirinhos e povos indígenas em cidades ao longo dos rios.",
      },
      {
        id: "capitais",
        x: 55,
        y: 65,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "GRANDES CAPITAIS",
        texto:
          "SP, RJ, BH concentram MILHÕES de pessoas. Puxam gente de todo país por trabalho e estudo.",
        fotoUrl: metropole,
      },
    ],
    falaFinal: "Litoral cheio, interior vazio, capitais bombando. Esse é o Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre a nossa gente.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem faz o Censo Demográfico no Brasil?",
        fotoUrl: censo,
        cards: [
          { id: "ibge", emoji: "📋", titulo: "IBGE", cor: "from-sky-500 to-blue-700" },
          { id: "esc", emoji: "🏫", titulo: "Escolas", cor: "from-amber-500 to-orange-700" },
          { id: "tv", emoji: "📺", titulo: "TV Globo", cor: "from-red-500 to-rose-700" },
        ],
        correta: "ibge",
        feedbackAcerto: "Isso! O IBGE é o órgão oficial que conta a população.",
        feedbackErro: "Escolas ensinam, TV informa. Contar é trabalho do IBGE.",
      },
      {
        id: "q2",
        pergunta: "Onde mora a MAIORIA dos brasileiros?",
        fotoUrl: litoral,
        cards: [
          { id: "lit", emoji: "🌊", titulo: "Perto do litoral", cor: "from-sky-500 to-blue-700" },
          { id: "flor", emoji: "🌳", titulo: "Na floresta", cor: "from-emerald-500 to-green-700" },
          { id: "des", emoji: "🏜️", titulo: "No deserto", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "lit",
        feedbackAcerto: "Perfeito! A maioria vive na faixa litorânea.",
        feedbackErro: "Floresta e sertão têm pouca gente. Litoral concentra tudo.",
      },
      {
        id: "q3",
        pergunta: "'Muitas pessoas em pouco espaço' é...",
        cards: [
          { id: "ad", emoji: "📊", titulo: "Alta densidade", cor: "from-red-500 to-rose-700" },
          { id: "bd", emoji: "🌵", titulo: "Baixa densidade", cor: "from-amber-500 to-orange-700" },
          { id: "mig", emoji: "🚚", titulo: "Migração", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "ad",
        feedbackAcerto: "Isso! ALTA densidade = muita gente por km².",
        feedbackErro: "Migração é movimento. Amontoado em pouco espaço = ALTA DENSIDADE.",
      },
    ],
    falaFinal: "Radar afiado! Você domina o vocabulário da população.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Os 5 estados mais POPULOSOS do Brasil. Toca em cada um. É onde vive muita, muita gente.",
    instrucao: "Acenda os 5 estados com mais habitantes",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RJ", "BA", "PR"],
      pergunta: "Quais são os 5 estados MAIS POPULOSOS?",
    },
    falaFinal: "SP lidera com 46 milhões. Depois MG, RJ, BA, PR. Muito povo, muito planejamento.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar o crescimento do Brasil na ordem certa.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Coloque em ordem a história da nossa população:",
    paradas: [
      {
        id: "indigenas",
        emoji: "🏹",
        rotulo: "1. Povos indígenas (antes de 1500)",
        descricao: "Milhões de indígenas já viviam aqui em centenas de povos diferentes.",
      },
      {
        id: "colonia",
        emoji: "⛵",
        rotulo: "2. Colônia: portugueses e africanos (1500-1822)",
        descricao: "Chegam portugueses e africanos escravizados. Cidades no litoral crescem.",
      },
      {
        id: "imigracao",
        emoji: "🚢",
        rotulo: "3. Imigração europeia e asiática (1850-1950)",
        descricao: "Italianos, alemães, japoneses vêm trabalhar no café e no campo.",
      },
      {
        id: "urbanizacao",
        emoji: "🏙️",
        rotulo: "4. Grande urbanização (1950-2000)",
        descricao: "Milhões saem do campo pra viver nas cidades. Explosão populacional.",
      },
      {
        id: "hoje",
        emoji: "📉",
        rotulo: "5. Hoje: crescimento LENTO",
        descricao: "Menos filhos por família, vida mais longa. País envelhecendo.",
      },
    ],
    ordemCerta: ["indigenas", "colonia", "imigracao", "urbanizacao", "hoje"],
    feedbackAcerto: "Linha do tempo perfeita! Você viu o Brasil crescer.",
    feedbackErro: "Repensa: indígenas primeiro, depois colônia, imigração, cidades, hoje.",
    falaFinal: "5 fases, 1 povo em transformação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 1 — População do Brasil",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O CENSO é a contagem oficial da população feita pelo IBGE de 10 em 10 anos.",
        chaves: ["censo", "ibge"],
      },
      {
        id: "p2",
        texto:
          "A maioria dos brasileiros mora perto do LITORAL. O INTERIOR e a Amazônia têm baixa densidade.",
        chaves: ["litoral", "interior", "densidade"],
      },
      {
        id: "p3",
        texto:
          "SP, MG, RJ, BA e PR são os estados MAIS POPULOSOS. Neles vive quase metade do país.",
        chaves: ["populosos", "sp", "metade"],
      },
      {
        id: "p4",
        texto:
          "Hoje o CRESCIMENTO da população é LENTO. Famílias têm menos filhos e as pessoas vivem mais.",
        chaves: ["crescimento", "lento", "filhos"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CENSO EXPRESS! Cada rodada, decida qual planejamento vem primeiro.",
    instrucao: "⏱️ O que a cidade precisa MAIS?",
    duracaoSegundos: 12,
    pecas: [
      { id: "escolas", emoji: "🏫", rotulo: "Mais escolas" },
      { id: "hospitais", emoji: "🏥", rotulo: "Mais hospitais" },
      { id: "moradia", emoji: "🏘️", rotulo: "Mais moradia" },
      { id: "transporte", emoji: "🚌", rotulo: "Mais transporte" },
      { id: "asilos", emoji: "👵", rotulo: "Mais asilos" },
      { id: "creches", emoji: "🍼", rotulo: "Mais creches" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Bairro de bebês", emoji: "🍼", cor: "from-pink-400 to-rose-600" },
        municipioB: { nome: "Muitos recém-nascidos", emoji: "👶", cor: "from-amber-400 to-orange-600" },
        contexto: "Censo mostrou explosão de bebês num bairro. O que construir?",
        pecaCertaId: "creches",
        feedbackAcerto: "Isso! Muitos bebês = precisa de CRECHES.",
        feedbackErro: "Bebês precisam de CRECHES, não de escola grande.",
      },
      {
        id: "r2",
        municipioA: { nome: "Idosos", emoji: "👵", cor: "from-purple-400 to-indigo-600" },
        municipioB: { nome: "Muita gente velhinha", emoji: "🧓", cor: "from-slate-400 to-gray-600" },
        contexto: "Cidade com maioria de idosos. O que priorizar?",
        pecaCertaId: "hospitais",
        feedbackAcerto: "Perfeito! Idosos precisam de HOSPITAIS e postos de saúde.",
        feedbackErro: "Idosos = mais cuidados médicos = mais HOSPITAIS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Trânsito parado", emoji: "🚗", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Ninguém anda", emoji: "🐢", cor: "from-slate-400 to-gray-600" },
        contexto: "Metrópole com trânsito travado horas. Solução?",
        pecaCertaId: "transporte",
        feedbackAcerto: "Isso! Mais TRANSPORTE público — metrô, ônibus, ciclovia.",
        feedbackErro: "Precisa de TRANSPORTE público de qualidade.",
      },
      {
        id: "r4",
        municipioA: { nome: "Muitas crianças", emoji: "🧒", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Idade escolar", emoji: "🎒", cor: "from-emerald-400 to-green-600" },
        contexto: "Bairro cheio de crianças de 7 a 14 anos. Prioridade?",
        pecaCertaId: "escolas",
        feedbackAcerto: "Boa! Crianças em idade escolar = mais ESCOLAS.",
        feedbackErro: "Crianças de 7 a 14 anos precisam de ESCOLAS.",
      },
      {
        id: "r5",
        municipioA: { nome: "Favela crescendo", emoji: "🏚️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Sem casa", emoji: "🏠", cor: "from-red-400 to-rose-600" },
        contexto: "Muita gente vivendo em condição precária. Solução?",
        pecaCertaId: "moradia",
        feedbackAcerto: "Isso! MORADIA digna é direito básico.",
        feedbackErro: "Prioridade = MORADIA digna pra todos.",
      },
      {
        id: "r6",
        municipioA: { nome: "Vovôs e vovós", emoji: "👴", cor: "from-purple-400 to-indigo-600" },
        municipioB: { nome: "Terceira idade", emoji: "🦳", cor: "from-slate-400 to-gray-600" },
        contexto: "Muitos idosos sem família por perto. O que construir?",
        pecaCertaId: "asilos",
        feedbackAcerto: "Perfeito! ASILOS e centros de convivência acolhem idosos.",
        feedbackErro: "Idosos sem família precisam de ASILOS e centros.",
      },
    ],
    falaFinal: "6 planejamentos certos! Censo vira ação.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da POPULAÇÃO brasileira: quantos moram na cidade?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "urbana",
        rotulo: "Cidades (85%)",
        emoji: "🏙️",
        percentual: 85,
        cor: "#ef4444",
        descricao:
          "A grande maioria dos brasileiros vive em CIDADES. Isso é fruto de décadas de êxodo rural.",
        exemplos: ["🏢 Prédios", "🚗 Trânsito", "🏫 Escolas urbanas"],
      },
      {
        id: "rural",
        rotulo: "Campo (15%)",
        emoji: "🌾",
        percentual: 15,
        cor: "#10b981",
        descricao:
          "Só 15% mora no CAMPO — mas produz boa parte da comida que abastece a cidade.",
        exemplos: ["🚜 Fazendas", "🐄 Pecuária", "🌱 Agricultura"],
      },
    ],
    falaFinal: "Brasil é país URBANO. Mas depende do campo pra comer.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Analista Demográfico.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra que serve o Censo Demográfico?",
        opcoes: [
          { id: "a", texto: "Saber nomes mais comuns do país", correta: false },
          { id: "b", texto: "Planejar escolas, hospitais e moradia", correta: true },
          { id: "c", texto: "Escolher o presidente", correta: false },
        ],
        feedbackAcerto: "Isso! Censo = ferramenta pra PLANEJAR o país.",
        feedbackErro: "Censo serve pra saber quantos somos e PLANEJAR o futuro.",
      },
      {
        id: "av2",
        pergunta: "Onde mora a MAIORIA dos brasileiros?",
        opcoes: [
          { id: "a", texto: "Amazônia", correta: false },
          { id: "b", texto: "Perto do litoral", correta: true },
          { id: "c", texto: "Deserto do Nordeste", correta: false },
        ],
        feedbackAcerto: "Perfeito! Litoral concentra a maior parte da população.",
        feedbackErro: "Amazônia é vazia. Nordeste tem sertão. Litoral = maioria.",
      },
      {
        id: "av3",
        pergunta: "'Muita gente por km²' se chama...",
        opcoes: [
          { id: "a", texto: "Baixa densidade", correta: false },
          { id: "b", texto: "Alta densidade demográfica", correta: true },
          { id: "c", texto: "Migração", correta: false },
        ],
        feedbackAcerto: "Isso! Amontoado = ALTA DENSIDADE demográfica.",
        feedbackErro: "Migração é mudança de lugar. Amontoado = ALTA DENSIDADE.",
      },
    ],
    selo: {
      nome: "Analista Demográfico",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "📊",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada! Você entende como o Brasil se conta.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Analista Demográfico" },
};
