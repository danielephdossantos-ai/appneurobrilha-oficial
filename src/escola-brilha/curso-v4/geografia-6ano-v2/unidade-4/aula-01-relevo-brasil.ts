import type { AulaGeoV1 } from "../../types";
import { url as mapaRelevo } from "@/assets/geografia-6ano/mapa-relevo-brasil.jpg.asset.json";
import { url as planalto } from "@/assets/geografia-6ano/planalto-central.jpg.asset.json";
import { url as planicieAmz } from "@/assets/geografia-6ano/planicie-amazonica.jpg.asset.json";
import { url as chapada } from "@/assets/geografia-6ano/chapada.jpg.asset.json";
import { url as serraMar } from "@/assets/geografia-6ano/serra-mar.jpg.asset.json";
import { url as depSertaneja } from "@/assets/geografia-6ano/depressao-sertaneja.jpg.asset.json";
/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 4 · Aula 01
 * "Relevo do Brasil" — BNCC EF06GE03, EF06GE11
 * Padrão U1/U2: imagens reais, curiosidades, definições, quiz 4 perguntas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-relevo-brasil",
  titulo: "Relevo do Brasil",
  iconeTrilha: "⛰️",
  bncc: ["EF06GE03", "EF06GE11"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: mapaRelevo,
    imagemDestaqueUrl: mapaRelevo,
    aurora:
      "O Brasil não é plano. Quando você viaja de carro percebe: sobe, desce, tem morro, tem serra, tem planície. Isso é RELEVO — o formato da superfície da terra. O Brasil tem três formas principais: PLANALTOS (áreas altas e onduladas), PLANÍCIES (áreas baixas e planas) e DEPRESSÕES (áreas afundadas). Nosso ponto mais alto é o Pico da Neblina, com 2.995 metros — 3x menos que o Everest. Isso porque nossa terra é ANTIGA: 500 milhões de anos de erosão desgastaram tudo.",
    falaFinal: "Sem montanha alta, com planalto antigo, muita planície. Brasil de terra velha e gasta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: por que o Brasil não tem picos de 8.000 metros como o Himalaia? A gente é continente igual à Ásia.",
    pergunta: "O que explica não termos montanhas gigantes?",
    opcoes: [
      { id: "borda", titulo: "Não estamos em BORDA de placa", subtitulo: "sem colisão, sem cordilheira nova", emoji: "🧩", cor: "from-emerald-800 to-slate-950" },
      { id: "chuva", titulo: "Chove demais no Brasil", subtitulo: "a chuva dissolve montanha", emoji: "🌧️", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "borda",
    feedbackAcerto:
      "Exato! Cordilheiras nascem em BORDAS de placas tectônicas que colidem (como Andes e Himalaia). O Brasil está no MEIO da placa Sul-Americana — sem colisão, sem montanha nova. Nossas formações são muito antigas (2 bilhões de anos) e a erosão já as reduziu.",
    feedbackErro:
      "Chuva erode, mas não é o principal. O motivo é geológico: sem borda de placa em colisão, não se forma montanha alta. Andes e Himalaia estão em bordas ativas. Brasil = interior estável.",
    falaFinal: "Regra: sem placa colidindo, sem cordilheira. Brasil = terra plana e antiga.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos do relevo. Cada card traz explicação, exemplo real e curiosidade científica.",
    instrucao: "",
    cadernos: [
      {
        id: "planalto",
        capa: "1. Planalto",
        emoji: "🏞️",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "PLANALTO é uma área ALTA (acima de 300 m), com topo aplainado e bordas escarpadas. No Brasil, 60% do território é planalto — herança de rochas muito antigas já bastante erodidas.",
        exemplo:
          "Curiosidade: o Planalto Central do Brasil (onde fica Brasília) tem rochas de 2 BILHÕES de anos. Já foi montanha jovem, hoje é planalto gasto pelo tempo.",
        fotoUrl: planalto,
      },
      {
        id: "planicie",
        capa: "2. Planície",
        emoji: "🌾",
        cor: "from-emerald-800 to-teal-950",
        conteudo:
          "PLANÍCIE é uma área BAIXA (abaixo de 200 m) e PLANA, formada por acumulação de sedimentos trazidos por rios, mar ou vento. É o tipo de relevo mais fértil pra agricultura.",
        exemplo:
          "Curiosidade: a Planície Amazônica é a MAIOR do mundo (5 milhões de km²). Foi criada por milhões de anos de sedimento carregado pelo rio Amazonas dos Andes até o Atlântico.",
        fotoUrl: planicieAmz,
      },
      {
        id: "depressao",
        capa: "3. Depressão",
        emoji: "🕳️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "DEPRESSÃO é uma área REBAIXADA em relação ao terreno ao redor. Nem sempre está abaixo do nível do mar — pode estar só mais baixa que planaltos vizinhos. No Brasil, temos Depressão Sertaneja e Depressão Pantaneira.",
        exemplo:
          "Curiosidade: a Depressão Sertaneja no Nordeste tem chão rachado por causa da seca. O rio São Francisco atravessa essa depressão levando água pro semiárido.",
        fotoUrl: depSertaneja,
      },
      {
        id: "chapada",
        capa: "4. Chapada",
        emoji: "⛰️",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "CHAPADA é um tipo de PLANALTO com topo bem plano e paredões verticais — parece uma mesa gigante. Formada pela erosão diferencial: a rocha do topo é dura e resiste; a rocha do lado é mole e cede.",
        exemplo:
          "Curiosidade: a Chapada Diamantina (BA) foi berço da mineração de diamantes no séc. XIX. Seus paredões têm até 400 m de altura — mais que a Estátua da Liberdade (93 m) quatro vezes empilhada.",
        fotoUrl: chapada,
      },
    ],
    falaFinal: "Planalto, planície, depressão, chapada. 4 formas de relevo, um só Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card é uma unidade de relevo brasileira. Toque em cada uma pra ver a foto real e entender como se formou.",
    instrucao: "Toque nos 4 cards pra ouvir cada unidade",
    mapaUrl: mapaRelevo,
    pontos: [
      {
        id: "amz",
        x: 20,
        y: 30,
        emoji: "🌾",
        cor: "from-emerald-800 to-teal-950",
        titulo: "PLANÍCIE AMAZÔNICA",
        texto:
          "A maior planície do mundo (5 milhões de km²). Cortada pelo rio Amazonas e centenas de afluentes. Solo formado por sedimentos trazidos dos Andes há milhões de anos. Alaga na cheia — o rio pode subir 15 metros em Manaus.",
        fotoUrl: planicieAmz,
      },
      {
        id: "central",
        x: 55,
        y: 55,
        emoji: "🏞️",
        cor: "from-amber-800 to-orange-950",
        titulo: "PLANALTO CENTRAL",
        texto:
          "Coração geográfico do Brasil. Onde fica Brasília (1.170 m de altitude). Rochas de 2 bilhões de anos, muito erodidas. Solo pobre coberto por cerrado. Nascentes dos rios Tocantins, Araguaia, São Francisco e Paraná.",
        fotoUrl: planalto,
      },
      {
        id: "chapada",
        x: 70,
        y: 45,
        emoji: "⛰️",
        cor: "from-amber-800 to-orange-950",
        titulo: "CHAPADA DIAMANTINA",
        texto:
          "Paredões verticais de até 400 m. Formados por erosão diferencial em rochas de 1,7 bilhão de anos. Foi região de garimpo de diamantes no séc. XIX. Hoje é Parque Nacional cheio de cachoeiras.",
        fotoUrl: chapada,
      },
      {
        id: "sertao",
        x: 75,
        y: 35,
        emoji: "🕳️",
        cor: "from-slate-700 to-slate-950",
        titulo: "DEPRESSÃO SERTANEJA",
        texto:
          "Nordeste semiárido, abaixo dos planaltos vizinhos. Solo raso, rochas expostas, vegetação de caatinga. É o sertão de Guimarães Rosa e Graciliano Ramos. Chão rachado na seca; lama vermelha na chuva.",
        fotoUrl: depSertaneja,
      },
    ],
    falaFinal:
      "4 unidades de relevo, 4 histórias geológicas. Do Amazonas ao sertão nordestino.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geógrafo pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Que tipo de relevo predomina no Brasil (60% do território)?",
        fotoUrl: planalto,
        cards: [
          { id: "p", emoji: "🏞️", titulo: "Planaltos", cor: "from-emerald-800 to-teal-950" },
          { id: "pl", emoji: "🌾", titulo: "Planícies", cor: "from-amber-800 to-orange-950" },
          { id: "m", emoji: "🏔️", titulo: "Montanhas altas", cor: "from-slate-700 to-slate-950" },
        ],
        correta: "p",
        feedbackAcerto: "Isso! PLANALTOS = 60% do Brasil. Solo antigo já erodido.",
        feedbackErro: "Planícies são só 40%. Montanhas altas quase nenhuma. Predomínio de PLANALTOS.",
      },
      {
        id: "q2",
        pergunta: "A maior PLANÍCIE do mundo fica:",
        fotoUrl: planicieAmz,
        cards: [
          { id: "amz", emoji: "🌳", titulo: "Amazônia (Brasil)", cor: "from-emerald-800 to-teal-950" },
          { id: "usa", emoji: "🌾", titulo: "Grandes Planícies (EUA)", cor: "from-amber-800 to-orange-950" },
          { id: "eur", emoji: "🌍", titulo: "Norte da Europa", cor: "from-sky-800 to-indigo-950" },
        ],
        correta: "amz",
        feedbackAcerto: "Boa! Planície Amazônica = 5 milhões de km². A maior do planeta.",
        feedbackErro: "As dos EUA e Europa são grandes, mas a AMAZÔNICA supera todas: 5 milhões de km².",
      },
      {
        id: "q3",
        pergunta: "Uma CHAPADA se caracteriza por:",
        fotoUrl: chapada,
        cards: [
          { id: "topo", emoji: "⛰️", titulo: "Topo plano + paredões verticais", cor: "from-emerald-800 to-teal-950" },
          { id: "pico", emoji: "🏔️", titulo: "Pico afilado no topo", cor: "from-slate-700 to-slate-950" },
          { id: "vale", emoji: "🕳️", titulo: "Vale profundo abaixo do mar", cor: "from-sky-800 to-indigo-950" },
        ],
        correta: "topo",
        feedbackAcerto: "Perfeito! Chapada = mesa gigante. Topo plano, lados escarpados.",
        feedbackErro: "Pico afilado é MONTANHA. Vale profundo é DEPRESSÃO. Chapada = topo plano com paredão.",
      },
      {
        id: "q4",
        pergunta: "Por que o Brasil não tem montanhas altas como o Himalaia?",
        fotoUrl: mapaRelevo,
        cards: [
          { id: "meio", emoji: "🧩", titulo: "Fica no meio da placa", cor: "from-emerald-800 to-teal-950" },
          { id: "sol", emoji: "☀️", titulo: "Muito sol derrete a rocha", cor: "from-amber-800 to-orange-950" },
          { id: "peq", emoji: "📏", titulo: "Território pequeno", cor: "from-red-800 to-slate-950" },
        ],
        correta: "meio",
        feedbackAcerto: "Isso! Cordilheiras nascem em BORDAS de placas em colisão. Brasil = meio da placa Sul-Americana.",
        feedbackErro: "Sol não derrete rocha. Brasil é o 5º maior país. O motivo é geológico: sem borda ativa, sem cordilheira.",
      },
    ],
    falaFinal: "4 acertos = você já lê um mapa de relevo com facilidade.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A CHAPADA DIAMANTINA fica no coração da Bahia, mas ela faz parte de uma grande formação chamada Serra do Espinhaço, que atravessa 3 estados. Marque quais.",
    instrucao: "Acenda os 3 estados da Serra do Espinhaço",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "MG", "PI"],
      pergunta: "Quais estados a Serra do Espinhaço atravessa?",
    },
    falaFinal:
      "BA, MG, PI. A Serra do Espinhaço é a coluna vertebral do Nordeste. Rochas de 1,7 bilhão de anos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Uma chapada gigante como a Diamantina não nasce pronta. Organize as etapas da formação — do sedimento no fundo do mar até o paredão que existe hoje.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Como se forma uma chapada?",
    paradas: [
      { id: "sed", emoji: "🌊", rotulo: "1. Sedimentação",
        descricao: "Há bilhões de anos, sedimentos se acumulam no fundo de um mar antigo." },
      { id: "roch", emoji: "🪨", rotulo: "2. Formação da rocha",
        descricao: "Com pressão, o sedimento vira rocha sedimentar (arenito, calcário)." },
      { id: "sobe", emoji: "⬆️", rotulo: "3. Elevação tectônica",
        descricao: "Movimentos internos elevam o antigo fundo do mar. Vira planalto." },
      { id: "erod", emoji: "🌧️", rotulo: "4. Erosão diferencial",
        descricao: "Chuva e vento gastam mais a rocha mole. A rocha dura resiste no topo.", fotoUrl: chapada },
      { id: "cha", emoji: "⛰️", rotulo: "5. Chapada formada",
        descricao: "Depois de milhões de anos: topo plano, paredões verticais. Uma mesa gigante." },
    ],
    ordemCerta: ["sed", "roch", "sobe", "erod", "cha"],
    feedbackAcerto: "Perfeito! Do fundo do mar antigo até o paredão de hoje — 1 bilhão de anos.",
    feedbackErro: "Comece pelo sedimento no mar. Depois vira rocha, sobe, erode, e vira chapada.",
    falaFinal: "Geologia é tempo. Muito tempo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 4 — Relevo do Brasil",
    paragrafos: [
      {
        id: "p1",
        texto:
          "PLANALTOS são áreas ALTAS (acima de 300 m) com topo APLAINADO. No Brasil, ocupam cerca de 60% do território — herança de ROCHAS ANTIGAS já bastante erodidas.",
        chaves: ["PLANALTOS", "APLAINADO", "ROCHAS ANTIGAS"],
        definicoes: {
          "PLANALTOS":
            "Áreas elevadas com topo plano ou ondulado. Diferem das montanhas por não terem pico afilado.",
          "APLAINADO":
            "Superfície suavizada pela erosão de milhões de anos. Não é totalmente plano, mas quase.",
          "ROCHAS ANTIGAS":
            "Rochas do embasamento cristalino brasileiro, com 500 milhões a 2 bilhões de anos.",
        },
        fotoUrl: planalto,
      },
      {
        id: "p2",
        texto:
          "PLANÍCIES são áreas BAIXAS e PLANAS, formadas por SEDIMENTAÇÃO. Ocupam 40% do Brasil, principalmente na Amazônia, Pantanal e faixa litorânea.",
        chaves: ["PLANÍCIES", "SEDIMENTAÇÃO", "AMAZÔNIA"],
        definicoes: {
          "PLANÍCIES":
            "Terrenos baixos (abaixo de 200 m) e planos. Excelentes pra agricultura e navegação.",
          "SEDIMENTAÇÃO":
            "Processo em que rios, mar ou vento depositam partículas de rocha. Aos poucos, forma um chão plano.",
          "AMAZÔNIA":
            "A maior planície do mundo (5 milhões de km²). Sedimentos vindos dos Andes há milhões de anos.",
        },
        fotoUrl: planicieAmz,
      },
      {
        id: "p3",
        texto:
          "DEPRESSÕES são áreas REBAIXADAS em relação aos terrenos vizinhos. No Brasil, a DEPRESSÃO SERTANEJA (Nordeste) e a Pantaneira são as principais.",
        chaves: ["DEPRESSÕES", "REBAIXADAS", "DEPRESSÃO SERTANEJA"],
        definicoes: {
          "DEPRESSÕES":
            "Áreas mais baixas que o terreno ao redor. Nem sempre abaixo do nível do mar.",
          "REBAIXADAS":
            "Foram desgastadas pela erosão até ficarem mais baixas que as regiões vizinhas.",
          "DEPRESSÃO SERTANEJA":
            "Área rebaixada do sertão nordestino, coberta por caatinga e cortada pelo rio São Francisco.",
        },
        fotoUrl: depSertaneja,
      },
      {
        id: "p4",
        texto:
          "CHAPADAS são planaltos com topo PLANO e PAREDÕES verticais — parecem mesas gigantes. Formadas por EROSÃO DIFERENCIAL: rocha dura resiste; rocha mole cede.",
        chaves: ["CHAPADAS", "PAREDÕES", "EROSÃO DIFERENCIAL"],
        definicoes: {
          "CHAPADAS":
            "Planaltos com topo aplainado horizontal e bordas verticais. Ex.: Diamantina, dos Guimarães, dos Veadeiros.",
          "PAREDÕES":
            "Bordas verticais quase perpendiculares, formadas quando rochas duras não cedem à erosão.",
          "EROSÃO DIFERENCIAL":
            "Desgaste desigual: rochas duras resistem, rochas moles somem. Cria formas com topo plano e lado escarpado.",
        },
        fotoUrl: chapada,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "planalto", emoji: "", titulo: "Planalto", cor: "from-slate-800 to-slate-900" },
      { id: "planicie", emoji: "", titulo: "Planície", cor: "from-slate-800 to-slate-900" },
      { id: "depressao", emoji: "", titulo: "Depressão", cor: "from-slate-800 to-slate-900" },
      { id: "chapada", emoji: "", titulo: "Chapada", cor: "from-slate-800 to-slate-900" },
      { id: "serra", emoji: "", titulo: "Serra", cor: "from-slate-800 to-slate-900" },
      { id: "vale", emoji: "", titulo: "Vale", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o tipo de relevo correto.",
      instrucao: "Escolha o relevo correto",
      perguntas: [
        { id: "r1", pergunta: "Área alta (acima de 300 m) com topo aplainado e ondulado, cobrindo 60% do Brasil.", cards, correta: "planalto",
          feedbackAcerto: "Isso. Alto + aplainado = PLANALTO.", feedbackErro: "É PLANALTO. Alto e ondulado — não plano baixo, não com pico." },
        { id: "r2", pergunta: "Área baixa (abaixo de 200 m) e plana, formada por sedimentos de rios. A da Amazônia é a maior do mundo.", cards, correta: "planicie",
          feedbackAcerto: "Isso. Baixa + plana = PLANÍCIE.", feedbackErro: "É PLANÍCIE. Baixa e plana, feita de sedimento." },
        { id: "r3", pergunta: "Área rebaixada em relação ao terreno vizinho. No Brasil, é onde fica o sertão nordestino.", cards, correta: "depressao",
          feedbackAcerto: "Isso. Rebaixada = DEPRESSÃO.", feedbackErro: "É DEPRESSÃO. Mais baixa que o terreno ao redor." },
        { id: "r4", pergunta: "Planalto com topo bem plano e paredões verticais — parece uma mesa gigante. A Diamantina é um exemplo.", cards, correta: "chapada",
          feedbackAcerto: "Isso. Topo plano + paredão = CHAPADA.", feedbackErro: "É CHAPADA. Mesa gigante, paredões verticais." },
        { id: "r5", pergunta: "Conjunto de morros e picos alinhados, geralmente estreito. Ex.: Serra do Mar, Serra da Mantiqueira.", cards, correta: "serra",
          feedbackAcerto: "Isso. Alinhamento de morros = SERRA.", feedbackErro: "É SERRA. Cadeia de morros, geralmente perto do litoral." },
        { id: "r6", pergunta: "Terreno mais baixo entre duas elevações, geralmente onde corre um rio. Ex.: Vale do São Francisco.", cards, correta: "vale",
          feedbackAcerto: "Isso. Rebaixo entre elevações = VALE.", feedbackErro: "É VALE. Corredor baixo entre morros ou serras." },
      ],
      falaFinal: "6 perguntas, 6 relevos identificados. Geógrafo do Brasil.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do RELEVO brasileiro por área total.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "pla", rotulo: "Planaltos (60%)", emoji: "🏞️", percentual: 60, cor: "#a16207",
        descricao: "Predominam no Brasil. Rochas antigas erodidas. Onde ficam a maioria das cidades e nascentes de rios.",
        exemplos: ["🏙️ Brasília", "⛏️ Minas Gerais", "🌾 Cerrado"] },
      { id: "plc", rotulo: "Planícies (40%)", emoji: "🌾", percentual: 40, cor: "#0284c7",
        descricao: "Amazônia, Pantanal, litoral. Solo fértil, ideal pra agricultura e navegação fluvial.",
        exemplos: ["🌳 Amazônia", "🐊 Pantanal", "🏖️ Litoral"] },
    ],
    falaFinal: "60% planalto, 40% planície. Brasil sem cordilheira, com muita terra plana.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Geógrafo do Brasil.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Tipo de relevo que predomina no Brasil:",
        opcoes: [
          { id: "a", texto: "Planaltos", correta: true },
          { id: "b", texto: "Montanhas altas", correta: false },
          { id: "c", texto: "Vulcões", correta: false },
        ],
        feedbackAcerto: "Isso! PLANALTOS = 60% do território.",
        feedbackErro: "Montanhas altas quase não temos. Vulcões, nenhum ativo. Predomínio de PLANALTOS." },
      { id: "av2", pergunta: "A maior planície do mundo é a:",
        opcoes: [
          { id: "a", texto: "Planície do Pantanal", correta: false },
          { id: "b", texto: "Planície Amazônica", correta: true },
          { id: "c", texto: "Planície Costeira", correta: false },
        ],
        feedbackAcerto: "Isso! PLANÍCIE AMAZÔNICA — 5 milhões de km².",
        feedbackErro: "Pantanal é grande, mas a AMAZÔNICA é a maior do planeta." },
      { id: "av3", pergunta: "Uma CHAPADA se caracteriza por:",
        opcoes: [
          { id: "a", texto: "Pico afilado no topo", correta: false },
          { id: "b", texto: "Topo plano e paredões verticais", correta: true },
          { id: "c", texto: "Terreno abaixo do mar", correta: false },
        ],
        feedbackAcerto: "Isso! Chapada = mesa gigante. Topo plano, paredões verticais.",
        feedbackErro: "Pico afilado = MONTANHA. Abaixo do mar = FOSSA. Chapada = topo plano + paredão." },
    ],
    selo: { nome: "Geógrafo do Brasil", subtitulo: "Insígnia do Explorador Planetário", emoji: "⛰️", cor: "from-amber-800 to-orange-950" },
    falaFinal: "Insígnia conquistada! Você domina o relevo brasileiro.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geógrafo do Brasil" },
};
