import type { AulaGeoV1 } from "../../types";
import { url as refugiados } from "@/assets/geografia-8ano/refugiados-siria.jpg.asset.json";
import { url as mapaMig } from "@/assets/geografia-8ano/mapa-migracao.jpg.asset.json";
import { url as mediterraneo } from "@/assets/geografia-8ano/mediterraneo-travessia.jpg.asset.json";
import { url as brasileiros } from "@/assets/geografia-8ano/brasileiros-exterior.jpg.asset.json";
/**
 * Geografia · 8º Ano · Unidade 5 · Aula 01
 * "Fluxos Migratórios" — BNCC EF08GE10, EF08GE11
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-migracoes",
  titulo: "Fluxos Migratórios — Refugiados e diásporas",
  iconeTrilha: "🧳",
  bncc: ["EF08GE10", "EF08GE11"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: mapaMig,
    imagemDestaqueUrl: refugiados,
    aurora:
      "Hoje, 280 MILHÕES de pessoas vivem fora do país onde nasceram — é como se toda a população dos EUA + Argentina estivesse em movimento. São REFUGIADOS fugindo de guerras (Síria, Ucrânia, Sudão), IMIGRANTES econômicos buscando trabalho (venezuelanos, mexicanos, africanos), estudantes, aposentados. Alguns brasileiros migram para Portugal, EUA, Japão. O Mediterrâneo virou o cemitério: 25 mil pessoas morreram tentando cruzá-lo em barcos precários desde 2014. Migrar é um direito humano — mas cada vez mais perigoso.",
    falaFinal: "280 milhões de pessoas em movimento. 1 em cada 30 humanos vive fora do país onde nasceu.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual país tem o MAIOR número de imigrantes vivendo dentro dele?",
    pergunta: "Qual país recebe mais imigrantes?",
    opcoes: [
      { id: "eua", titulo: "ESTADOS UNIDOS", subtitulo: "~50 milhões de imigrantes", emoji: "🇺🇸", cor: "from-sky-800 to-slate-950" },
      { id: "de", titulo: "ALEMANHA", subtitulo: "~16 milhões", emoji: "🇩🇪", cor: "from-amber-800 to-orange-950" },
    ],
    respostaCerta: "eua",
    feedbackAcerto:
      "Isso! Os EUA lideram com ~50 milhões de imigrantes — mais que qualquer outro país. Alemanha vem em 2º (16 mi), Arábia Saudita em 3º (13 mi).",
    feedbackErro:
      "É os EUA — ~50 milhões de imigrantes vivendo lá. Alemanha é 2ª (16 mi). Bem longe.",
    falaFinal: "EUA são o maior país de imigrantes do planeta — 15% da população nasceu fora.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave das migrações.",
    instrucao: "",
    cadernos: [
      {
        id: "ref",
        capa: "1. Refugiado",
        emoji: "🕊️",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "REFUGIADO é a pessoa que FOGE do país por GUERRA, perseguição política, religiosa ou violência. Não é migrante econômico — é forçado. Tem direito à proteção pela Convenção de Genebra (1951).",
        exemplo:
          "Curiosidade: a guerra da SÍRIA (desde 2011) gerou 6,5 milhões de refugiados — a maior crise desde a Segunda Guerra Mundial. Turquia recebeu 3,5 mi, Alemanha 1 mi. Muitos ainda vivem em campos de refugiados no Líbano e Jordânia.",
        fotoUrl: refugiados,
      },
      {
        id: "eco",
        capa: "2. Migrante econômico",
        emoji: "💼",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "MIGRANTE ECONÔMICO é a pessoa que ESCOLHE migrar em busca de trabalho, salário melhor ou estudo. Diferente do refugiado — não é forçado por guerra, mas por falta de oportunidades. Maioria dos migrantes do mundo é dessa categoria.",
        exemplo:
          "Curiosidade: os mexicanos são o maior grupo de imigrantes nos EUA (~11 milhões). Enviam US$ 60 bilhões por ano em REMESSAS para família no México — é a 2ª maior fonte de dinheiro entrando no país, atrás só do petróleo.",
        fotoUrl: mapaMig,
      },
      {
        id: "med",
        capa: "3. Mar Mediterrâneo",
        emoji: "⛵",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "MAR MEDITERRÂNEO é a ROTA MAIS PERIGOSA de migração do mundo. Africanos e sírios tentam cruzá-lo em barcos precários para chegar à Europa (Itália, Espanha, Grécia). Desde 2014, mais de 25 mil pessoas MORRERAM na travessia.",
        exemplo:
          "Curiosidade: a rota central (da Líbia à Itália) é a mais mortal — travessia de 300 km em bote inflável. Barcos superlotam com 100+ pessoas em botes para 30. A UE tem operações de resgate, mas migrantes continuam chegando.",
        fotoUrl: mediterraneo,
      },
      {
        id: "dia",
        capa: "4. Diáspora",
        emoji: "🌐",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "DIÁSPORA é a comunidade de migrantes de um mesmo país espalhada pelo mundo. Mantém laços culturais, língua, comida — e envia REMESSAS para família em casa. Brasileiros são cerca de 4 milhões espalhados por 100 países.",
        exemplo:
          "Curiosidade: PORTUGAL é o maior destino de brasileiros no exterior (~360 mil), seguido por EUA (~330 mil), Japão (~200 mil). Só de Governador Valadares (MG), 20 mil pessoas moram em Massachusetts (EUA). É uma diáspora com nome próprio.",
        fotoUrl: brasileiros,
      },
    ],
    falaFinal: "Refugiados, econômicos, mortes no mar, diáspora. 4 faces da migração.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 realidades da migração mundial.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: mapaMig,
    pontos: [
      { id: "ref", x: 55, y: 30, emoji: "🕊️", cor: "from-orange-800 to-slate-950",
        titulo: "🕊️ Refugiados sírios",
        texto: "6,5 milhões desde 2011. Maior crise desde a 2ª Guerra Mundial. Turquia recebeu 3,5 mi.",
        fotoUrl: refugiados },
      { id: "mex", x: 20, y: 40, emoji: "💼", cor: "from-emerald-800 to-slate-950",
        titulo: "💼 Mexicanos nos EUA",
        texto: "11 milhões. Enviam US$ 60 bi/ano em remessas. 2ª maior fonte de dinheiro do México.",
        fotoUrl: mapaMig },
      { id: "med", x: 50, y: 45, emoji: "⛵", cor: "from-sky-800 to-slate-950",
        titulo: "⛵ Mediterrâneo",
        texto: "Rota mais mortal. 25 mil mortos desde 2014. Botes precários da Líbia à Itália.",
        fotoUrl: mediterraneo },
      { id: "br", x: 70, y: 60, emoji: "🇧🇷", cor: "from-red-800 to-slate-950",
        titulo: "🇧🇷 Diáspora brasileira",
        texto: "4 milhões de brasileiros no exterior. Portugal (360 mil), EUA (330 mil), Japão (200 mil).",
        fotoUrl: brasileiros },
    ],
    falaFinal: "Cada migrante tem sua história — mas o mundo todo se move.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Diferença entre REFUGIADO e MIGRANTE ECONÔMICO:",
        fotoUrl: refugiados,
        cards: [
          { id: "a", emoji: "🕊️", titulo: "Refugiado FOGE de guerra; econômico ESCOLHE por trabalho", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💰", titulo: "Refugiado é rico; econômico é pobre", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🎂", titulo: "Refugiado é jovem; econômico é idoso", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Refugiado é FORÇADO pela guerra; econômico ESCOLHE por trabalho.",
        feedbackErro: "A diferença é MOTIVO: refugiado FOGE de guerra/perseguição; econômico escolhe MIGRAR por trabalho." },
      { id: "q2", pergunta: "País que MAIS recebeu refugiados sírios:",
        fotoUrl: refugiados,
        cards: [
          { id: "a", emoji: "🇹🇷", titulo: "Turquia (3,5 milhões)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "Estados Unidos", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🇧🇷", titulo: "Brasil", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. TURQUIA — 3,5 milhões de refugiados sírios (mais que qualquer outro país).",
        feedbackErro: "É a TURQUIA (3,5 milhões). EUA e Brasil receberam bem menos." },
      { id: "q3", pergunta: "Rota migratória mais MORTAL do mundo:",
        fotoUrl: mediterraneo,
        cards: [
          { id: "a", emoji: "⛵", titulo: "Mar Mediterrâneo (25 mil mortos)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "❄️", titulo: "Ártico", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🏔️", titulo: "Himalaia", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. MEDITERRÂNEO — 25 mil mortos desde 2014.",
        feedbackErro: "É o MEDITERRÂNEO. 25 mil pessoas morreram tentando cruzá-lo em botes precários." },
      { id: "q4", pergunta: "Maior destino da diáspora brasileira:",
        fotoUrl: brasileiros,
        cards: [
          { id: "a", emoji: "🇵🇹", titulo: "Portugal (~360 mil)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇨🇳", titulo: "China", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇦🇺", titulo: "Austrália", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. PORTUGAL — 360 mil brasileiros. Depois EUA (330 mil) e Japão (200 mil).",
        feedbackErro: "É PORTUGAL (360 mil). Mesma língua e cidadania europeia facilitam." },
    ],
    falaFinal: "4 acertos = analista das migrações.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil é ao mesmo tempo emissor e receptor de migrantes. Nos últimos anos, VENEZUELANOS entram por Roraima e HAITIANOS pelo Amazonas e Acre. Acenda os 3 estados de fronteira que mais recebem imigrantes hoje.",
    instrucao: "Acenda RR, AM e AC",
    missao: {
      tipo: "selecionar",
      siglas: ["RR", "AM", "AC"],
      pergunta: "Quais estados recebem mais venezuelanos e haitianos?",
    },
    falaFinal: "Roraima (venezuelanos), Amazonas e Acre (haitianos). Portas amazônicas do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 fluxos migratórios recentes por época.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1900", emoji: "🇮🇹", rotulo: "1. Europeus para o Brasil (1880–1930)",
        descricao: "3,5 milhões de italianos, alemães, japoneses. Substituem a mão de obra escrava." },
      { id: "1960", emoji: "👷", rotulo: "2. Turcos para a Alemanha (anos 1960)",
        descricao: "Alemanha em reconstrução chama trabalhadores turcos. Ficaram." },
      { id: "1990", emoji: "🇯🇵", rotulo: "3. Brasileiros para o Japão (anos 1990)",
        descricao: "Descendentes de japoneses (dekasseguis) migram para o Japão." },
      { id: "2011", emoji: "🕊️", rotulo: "4. Refugiados sírios (2011–hoje)",
        descricao: "Guerra civil na Síria. 6,5 milhões fogem do país.", fotoUrl: refugiados },
      { id: "2018", emoji: "🇻🇪", rotulo: "5. Venezuelanos pelo Brasil (2018–hoje)",
        descricao: "Crise econômica na Venezuela. 400 mil venezuelanos entram por Roraima." },
    ],
    ordemCerta: ["1900", "1960", "1990", "2011", "2018"],
    feedbackAcerto: "Perfeito! 140 anos de migrações em ordem.",
    feedbackErro: "Comece por europeus (1900). Depois turcos (1960), brasileiros no Japão (1990), sírios (2011), venezuelanos (2018).",
    falaFinal: "5 ondas migratórias em 140 anos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 5 — Fluxos Migratórios",
    paragrafos: [
      { id: "p1",
        texto: "REFUGIADO é quem FOGE do país por GUERRA ou perseguição. Tem direito à proteção pela Convenção de Genebra (1951). A guerra da Síria gerou 6,5 milhões de refugiados desde 2011.",
        chaves: ["REFUGIADO", "GUERRA"],
        definicoes: {
          "REFUGIADO": "Pessoa forçada a fugir do país por guerra, perseguição ou violência. Diferente de migrante econômico.",
          "GUERRA": "Conflito armado prolongado. Principais crises atuais: Síria (2011), Ucrânia (2022), Sudão (2023).",
        },
        fotoUrl: refugiados },
      { id: "p2",
        texto: "MIGRANTE ECONÔMICO escolhe migrar por TRABALHO ou salário melhor. Mexicanos nos EUA (11 mi) enviam US$ 60 bi/ano em REMESSAS ao México.",
        chaves: ["MIGRANTE ECONÔMICO", "REMESSAS"],
        definicoes: {
          "MIGRANTE ECONÔMICO": "Pessoa que escolhe migrar por oportunidades de trabalho e melhor qualidade de vida.",
          "REMESSAS": "Dinheiro que migrantes enviam ao país de origem. Sustentam famílias e são fonte importante de receita para países pobres.",
        },
        fotoUrl: mapaMig },
      { id: "p3",
        texto: "O MAR MEDITERRÂNEO é a rota migratória mais MORTAL. 25 mil pessoas morreram desde 2014 tentando cruzar em botes precários da África para a Europa.",
        chaves: ["MAR MEDITERRÂNEO", "MORTAL"],
        definicoes: {
          "MAR MEDITERRÂNEO": "Mar que separa África da Europa. Rota mais usada por migrantes: Líbia → Itália (300 km).",
          "MORTAL": "25 mil pessoas morreram tentando cruzar o Mediterrâneo entre 2014 e 2024. Cemitério da rota migratória.",
        },
        fotoUrl: mediterraneo },
      { id: "p4",
        texto: "DIÁSPORA BRASILEIRA são 4 milhões vivendo no exterior. Portugal (360 mil), EUA (330 mil), Japão (200 mil). Mantêm cultura brasileira longe de casa.",
        chaves: ["DIÁSPORA BRASILEIRA"],
        definicoes: {
          "DIÁSPORA BRASILEIRA": "Comunidade de brasileiros no exterior. Enviam remessas, mantêm cultura, votam nas eleições.",
        },
        fotoUrl: brasileiros },
    ],
    falaFinal: "Bora pro quiz.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "ref", emoji: "", titulo: "Refugiado", cor: "from-slate-800 to-slate-900" },
      { id: "eco", emoji: "", titulo: "Migrante econômico", cor: "from-slate-800 to-slate-900" },
      { id: "med", emoji: "", titulo: "Mediterrâneo", cor: "from-slate-800 to-slate-900" },
      { id: "dia", emoji: "", titulo: "Diáspora", cor: "from-slate-800 to-slate-900" },
      { id: "rem", emoji: "", titulo: "Remessa", cor: "from-slate-800 to-slate-900" },
      { id: "gen", emoji: "", titulo: "Conv. de Genebra", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Pessoa que foge do país por guerra ou perseguição.", cards, correta: "ref",
          feedbackAcerto: "Isso. REFUGIADO.", feedbackErro: "É o REFUGIADO. Foge de perseguição." },
        { id: "r2", pergunta: "Pessoa que escolhe migrar em busca de trabalho e salário melhor.", cards, correta: "eco",
          feedbackAcerto: "Isso. MIGRANTE ECONÔMICO.", feedbackErro: "É o MIGRANTE ECONÔMICO. Não é forçado — escolhe." },
        { id: "r3", pergunta: "Rota migratória mais mortal do mundo, 25 mil mortos desde 2014.", cards, correta: "med",
          feedbackAcerto: "Isso. MAR MEDITERRÂNEO.", feedbackErro: "É o MEDITERRÂNEO. Líbia → Itália." },
        { id: "r4", pergunta: "Comunidade de migrantes de um mesmo país espalhada pelo mundo.", cards, correta: "dia",
          feedbackAcerto: "Isso. DIÁSPORA.", feedbackErro: "É a DIÁSPORA. Ex: 4 milhões de brasileiros no exterior." },
        { id: "r5", pergunta: "Dinheiro que migrantes enviam à família no país de origem.", cards, correta: "rem",
          feedbackAcerto: "Isso. REMESSA.", feedbackErro: "É a REMESSA. Mexicanos enviam US$ 60 bi/ano ao México." },
        { id: "r6", pergunta: "Documento de 1951 que criou o status internacional de refugiado.", cards, correta: "gen",
          feedbackAcerto: "Isso. CONVENÇÃO DE GENEBRA.", feedbackErro: "É a CONVENÇÃO DE GENEBRA (1951)." },
      ],
      falaFinal: "6 acertos = analista migratório.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: migrantes internacionais no mundo hoje (280 milhões).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "eco", rotulo: "Migrantes econômicos (~87%)", emoji: "💼", percentual: 87, cor: "#0891b2",
        descricao: "Cerca de 245 milhões. Pessoas que migram por trabalho, estudo ou família.",
        exemplos: ["🇲🇽 Mexicanos nos EUA", "🇧🇷 Brasileiros em Portugal"] },
      { id: "ref", rotulo: "Refugiados (~13%)", emoji: "🕊️", percentual: 13, cor: "#ea580c",
        descricao: "Cerca de 35 milhões. Forçados a fugir por guerra ou perseguição.",
        exemplos: ["🇸🇾 Sírios", "🇺🇦 Ucranianos", "🇸🇩 Sudaneses"] },
    ],
    falaFinal: "A maioria escolhe migrar; a minoria foge de guerra. Mas todos merecem dignidade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "REFUGIADO é diferente de MIGRANTE ECONÔMICO porque:",
        opcoes: [
          { id: "a", texto: "Refugiado foge de guerra; econômico escolhe por trabalho", correta: true },
          { id: "b", texto: "São a mesma coisa", correta: false },
          { id: "c", texto: "Refugiado é rico; econômico é pobre", correta: false },
        ],
        feedbackAcerto: "Isso! Refugiado é FORÇADO; econômico ESCOLHE.",
        feedbackErro: "Refugiado FOGE de guerra/perseguição. Econômico ESCOLHE por trabalho." },
      { id: "av2", pergunta: "Rota migratória mais mortal do mundo:",
        opcoes: [
          { id: "a", texto: "Mediterrâneo (25 mil mortos)", correta: true },
          { id: "b", texto: "Atlântico", correta: false },
          { id: "c", texto: "Pacífico", correta: false },
        ],
        feedbackAcerto: "Isso! MEDITERRÂNEO — 25 mil mortos desde 2014.",
        feedbackErro: "É o MEDITERRÂNEO. Líbia → Itália em botes precários." },
      { id: "av3", pergunta: "País com maior número de imigrantes vivendo dentro dele:",
        opcoes: [
          { id: "a", texto: "Estados Unidos (~50 mi)", correta: true },
          { id: "b", texto: "Brasil", correta: false },
          { id: "c", texto: "Nigéria", correta: false },
        ],
        feedbackAcerto: "Isso! EUA — 50 milhões de imigrantes, 15% da população.",
        feedbackErro: "É os EUA (~50 mi). Brasil tem poucos imigrantes; Nigéria é país de emigração." },
    ],
    selo: { nome: "Analista Migratório", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🧳", cor: "from-cyan-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende quem se move pelo mundo e por quê.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Analista Migratório" },
};
