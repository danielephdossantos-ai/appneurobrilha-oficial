import type { AulaGeoV1 } from "../../types";
import { url as tales } from "@/assets/filosofia-6ano/u2-tales.jpg.asset.json";
import { url as heraclito } from "@/assets/filosofia-6ano/u2-heraclito.jpg.asset.json";
import { url as pitagoras } from "@/assets/filosofia-6ano/u2-pitagoras.jpg.asset.json";
import { url as mileto } from "@/assets/filosofia-6ano/u2-mileto.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 2 · Aula 01
 * "Do Mito ao Logos: os Primeiros Filósofos" — EF06FI02 (autoral)
 * Tema: pré-socráticos (Tales, Anaximandro, Heráclito, Pitágoras) e a
 * ousadia de explicar o mundo SEM usar deuses.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mito-ao-logos",
  titulo: "Do Mito ao Logos: os Primeiros Filósofos",
  iconeTrilha: "🌊",
  bncc: ["EF06FI02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha essa cidade. Aqui alguém teve uma ideia perigosa.",
    mapaUrl: mileto,
    imagemDestaqueUrl: mileto,
    aurora:
      "Aprendiz, essa é MILETO — cidade grega na costa da atual Turquia, século VI a.C. Porto cheio, mercadores do Egito, da Fenícia, da Babilônia. Era uma cidade que ouvia mil histórias diferentes sobre como o mundo tinha nascido. E, no meio dessa confusão, um homem chamado TALES fez uma coisa que ninguém tinha ousado: tentou responder 'de que é feito o mundo?' SEM citar um único deus.",
    falaFinal:
      "Nesta aula, você conhece os PRÉ-SOCRÁTICOS — os primeiros filósofos, que trocaram o mito pelo logos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: se você tivesse que apostar em UMA coisa como 'origem de tudo', o que apostaria?",
    pergunta: "O que sustenta o mundo?",
    opcoes: [
      {
        id: "agua",
        titulo: "ÁGUA",
        subtitulo: "todo ser vivo precisa dela pra existir",
        emoji: "💧",
        cor: "from-sky-400 to-blue-600",
      },
      {
        id: "fogo",
        titulo: "FOGO",
        subtitulo: "tudo muda o tempo todo, como uma chama",
        emoji: "🔥",
        cor: "from-orange-400 to-red-600",
      },
      {
        id: "numero",
        titulo: "NÚMERO",
        subtitulo: "tudo obedece a proporções e cálculos",
        emoji: "🔢",
        cor: "from-violet-400 to-purple-600",
      },
    ],
    respostaCerta: "agua",
    feedbackAcerto:
      "Boa. Tales apostou em ÁGUA como o princípio (arché) de tudo. Mas guarda: Heráclito ia dizer FOGO e Pitágoras ia dizer NÚMERO. Nenhum estava 100% certo — o importante é que TODOS argumentaram sem citar deuses.",
    feedbackErro:
      "Sua aposta é válida! Tales apostou em ÁGUA, mas Heráclito defendeu FOGO e Pitágoras, NÚMERO. Nenhum estava 100% certo — o importante era ARGUMENTAR sem recorrer aos deuses.",
    falaFinal:
      "3 apostas, 3 filósofos. O que unia todos era o método: RAZÃO, não mito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras dos pré-socráticos que ainda usamos hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "arche",
        capa: "1. Arché",
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ARCHÉ (ar-ké) significa PRINCÍPIO — a substância ou realidade fundamental de que tudo é feito. Foi a primeira grande pergunta da filosofia: 'qual é a arché de tudo?'.",
        exemplo:
          "Ex.: Tales disse 'a arché é a água'. Anaximandro disse 'é o ápeiron (o ilimitado)'. Heráclito, 'é o fogo'.",
        fotoUrl: tales,
      },
      {
        id: "physis",
        capa: "2. Physis",
        emoji: "🌿",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "PHYSIS (fí-sis) é a NATUREZA — o mundo que a gente pode observar, que muda, cresce, morre e renasce. Os pré-socráticos foram chamados de 'filósofos da physis' porque queriam entender a natureza por si mesma, sem mitos.",
        exemplo:
          "Ex.: 'estudar a physis' era observar rios, plantas, estrelas — e tentar encontrar padrões racionais.",
        fotoUrl: heraclito,
      },
      {
        id: "cosmos",
        capa: "3. Cosmos",
        emoji: "✨",
        cor: "from-violet-500 to-purple-700",
        conteudo:
          "COSMOS quer dizer ORDEM. Os gregos perceberam que o universo NÃO é um caos — tem padrões, ciclos, proporções. Chamar o universo de 'cosmos' já é uma aposta filosófica: 'existe uma ordem que a razão pode descobrir'.",
        exemplo:
          "Ex.: Pitágoras mostrou que a música obedece a razões numéricas exatas. Isso é cosmos em ação.",
        fotoUrl: pitagoras,
      },
    ],
    falaFinal: "Arché, physis, cosmos. O vocabulário-base da filosofia da natureza.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "4 pensadores, 4 apostas diferentes sobre o mundo. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: mileto,
    pontos: [
      {
        id: "tales",
        x: 22,
        y: 34,
        emoji: "💧",
        cor: "from-sky-500 to-blue-700",
        titulo: "Tales de Mileto — a ÁGUA",
        texto:
          "Séc. VI a.C. Tales observou que TUDO que vive precisa de água: as plantas, os animais, as pessoas. Até a Terra, ele imaginava, flutuava sobre um oceano. Sua aposta: a ARCHÉ (o princípio de tudo) é a ÁGUA. Não importa se acertou — importa que argumentou POR OBSERVAÇÃO, não por mito.",
        fotoUrl: tales,
      },
      {
        id: "anaximandro",
        x: 68,
        y: 30,
        emoji: "♾️",
        cor: "from-slate-500 to-slate-700",
        titulo: "Anaximandro — o ILIMITADO",
        texto:
          "Discípulo de Tales, achou que água era pouco. Propôs o ÁPEIRON — o 'ilimitado', algo sem forma nem fim, do qual saem todas as coisas e ao qual todas voltam. Foi o primeiro a desenhar um mapa do mundo conhecido e a sugerir que a Terra flutua no espaço sem apoio. Ousadia enorme pra época.",
        fotoUrl: mileto,
      },
      {
        id: "heraclito",
        x: 30,
        y: 70,
        emoji: "🔥",
        cor: "from-orange-500 to-red-700",
        titulo: "Heráclito — o FOGO e a MUDANÇA",
        texto:
          "Séc. V a.C., Éfeso. Heráclito ficou famoso por uma frase: 'ninguém entra duas vezes no mesmo rio' — porque o rio já mudou e a pessoa também. Sua aposta: TUDO FLUI (panta rhei). A realidade é MUDANÇA, e o símbolo dela é o FOGO — que consome e transforma sem parar.",
        fotoUrl: heraclito,
      },
      {
        id: "pitagoras",
        x: 74,
        y: 68,
        emoji: "🔢",
        cor: "from-violet-500 to-purple-700",
        titulo: "Pitágoras — o NÚMERO",
        texto:
          "Séc. VI a.C., Crotona (sul da Itália). Pitágoras descobriu que a MÚSICA obedece a proporções numéricas exatas: cordas em razões 2:1 soam em oitava, 3:2 em quinta. Concluiu: se música é número, talvez TUDO seja número. A aposta pitagórica: a arché é a MATEMÁTICA.",
        fotoUrl: pitagoras,
      },
    ],
    falaFinal:
      "4 apostas diferentes. Todas erradas em detalhes, todas certas no MÉTODO: argumentar, não mitificar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que é ARCHÉ?",
        fotoUrl: tales,
        cards: [
          {
            id: "principio",
            emoji: "🌊",
            titulo: "O princípio ou realidade fundamental de que tudo é feito",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "deus",
            emoji: "⚡",
            titulo: "Um deus grego menor",
            cor: "from-amber-400 to-orange-600",
          },
          {
            id: "cidade",
            emoji: "🏛️",
            titulo: "Uma cidade da Grécia antiga",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "principio",
        feedbackAcerto:
          "Isso. Arché é o PRINCÍPIO — a resposta pra 'de que é feito tudo?'.",
        feedbackErro:
          "Arché não é deus nem cidade. É o PRINCÍPIO fundamental — a substância básica de tudo.",
      },
      {
        id: "q2",
        pergunta: "Heráclito ficou famoso por dizer que…",
        fotoUrl: heraclito,
        cards: [
          {
            id: "muda",
            emoji: "🔥",
            titulo: "Tudo muda — 'ninguém entra duas vezes no mesmo rio'",
            cor: "from-orange-500 to-red-700",
          },
          {
            id: "parado",
            emoji: "🗿",
            titulo: "Tudo é imóvel e nada muda de verdade",
            cor: "from-slate-500 to-slate-700",
          },
          {
            id: "deuses",
            emoji: "⚡",
            titulo: "Só os deuses podem explicar o mundo",
            cor: "from-amber-500 to-orange-700",
          },
        ],
        correta: "muda",
        feedbackAcerto:
          "Perfeito. Panta rhei — TUDO FLUI. O real é mudança.",
        feedbackErro:
          "Heráclito é o filósofo da MUDANÇA: tudo flui, o rio nunca é o mesmo, você também não.",
      },
      {
        id: "q3",
        pergunta: "Pitágoras concluiu que a arché é o NÚMERO porque…",
        fotoUrl: pitagoras,
        cards: [
          {
            id: "musica",
            emoji: "🎵",
            titulo: "Descobriu que a música obedece a proporções numéricas exatas",
            cor: "from-violet-500 to-purple-700",
          },
          {
            id: "gostava",
            emoji: "🧮",
            titulo: "Ele simplesmente gostava muito de matemática",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "sonho",
            emoji: "💤",
            titulo: "Sonhou com um deus dos números",
            cor: "from-amber-400 to-orange-600",
          },
        ],
        correta: "musica",
        feedbackAcerto:
          "Isso. Cordas em 2:1 dão a oitava, 3:2 a quinta. Se a MÚSICA é número, talvez tudo seja.",
        feedbackErro:
          "Não foi gosto nem sonho. Foi ARGUMENTO por observação: a música obedece a razões numéricas exatas.",
      },
    ],
    falaFinal: "Radar afinado. Você já pensa como pré-socrático.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A pergunta 'qual é a arché?' virou hoje a CIÊNCIA. No Brasil, os grandes centros de pesquisa em física básica ficam em 5 estados. Acenda eles.",
    instrucao: "Acenda 5 estados com física de referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PR"],
      pergunta:
        "Quais 5 estados abrigam centros de referência em física no Brasil?",
    },
    falaFinal:
      "USP e UNICAMP (SP), CBPF e UFRJ (RJ), UFMG (MG), UFRGS (RS), UFPR (PR). A pergunta de Tales continua viva nesses laboratórios.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como uma explicação passa de MITO pra LOGOS? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do mito ao logos, passo a passo:",
    paradas: [
      {
        id: "aceito",
        emoji: "🙏",
        rotulo: "1. ACEITO A HISTÓRIA",
        descricao:
          "'O trovão é a raiva de Zeus' — recebo pronto, sem questionar. Fase do MITO puro.",
      },
      {
        id: "duvido",
        emoji: "🤔",
        rotulo: "2. COMEÇO A DUVIDAR",
        descricao:
          "'Mas por que Zeus fica com raiva justo quando tem nuvem escura?' — o espanto aparece.",
      },
      {
        id: "observo",
        emoji: "👀",
        rotulo: "3. OBSERVO A PHYSIS",
        descricao:
          "Olho o céu, o vento, as nuvens. Percebo padrões: sempre chove antes do trovão.",
      },
      {
        id: "hipotese",
        emoji: "💡",
        rotulo: "4. LEVANTO HIPÓTESE",
        descricao:
          "'Talvez o trovão tenha uma causa natural, não divina.' — proponho uma explicação por causas.",
      },
      {
        id: "argumento",
        emoji: "🧠",
        rotulo: "5. ARGUMENTO E TESTO",
        descricao:
          "Debato com outros, aceito ser corrigido, procuro provas. Isso é LOGOS pleno.",
      },
    ],
    ordemCerta: ["aceito", "duvido", "observo", "hipotese", "argumento"],
    feedbackAcerto:
      "Exato. Aceito → duvido → observo → hipotetizo → argumento. É o caminho que Tales e companhia inauguraram.",
    feedbackErro:
      "A ordem é: 1) aceitar o mito, 2) duvidar, 3) observar a natureza, 4) levantar hipótese, 5) argumentar e testar.",
    falaFinal: "5 passos. O mesmo caminho que a ciência ainda faz hoje.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 2 — Os Pré-Socráticos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Os pré-socráticos são os PRIMEIROS FILÓSOFOS — pensadores gregos que viveram ANTES de Sócrates, entre os séculos VI e V a.C. Eles não formavam uma escola só; discordavam entre si. Mas todos tinham algo em comum: queriam explicar o mundo POR RAZÃO, sem recorrer a deuses.",
        chaves: ["pré-socráticos", "razão"],
      },
      {
        id: "p2",
        texto:
          "TALES DE MILETO propôs que a ARCHÉ (o princípio de tudo) era a ÁGUA. Argumento: todo ser vivo depende de água pra existir. Pode estar errado no detalhe — mas o método (observar e argumentar) inaugurou a filosofia da natureza.",
        chaves: ["Tales", "arché"],
      },
      {
        id: "p3",
        texto:
          "HERÁCLITO deu uma resposta oposta: a arché é o FOGO, porque tudo está em CONSTANTE MUDANÇA. Sua frase famosa — 'ninguém entra duas vezes no mesmo rio' — quer dizer que a realidade é movimento, não coisa fixa.",
        chaves: ["Heráclito", "mudança"],
      },
      {
        id: "p4",
        texto:
          "PITÁGORAS descobriu que a música obedece a proporções numéricas exatas. Concluiu que a arché podia ser o NÚMERO — a matemática seria a linguagem escondida do COSMOS (a ordem do universo). Uma ideia que voltaria séculos depois com Galileu e a ciência moderna.",
        chaves: ["Pitágoras", "número", "cosmos"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo CAÇADOR DE ARCHÉS! Cada rodada mostra uma explicação. Diga qual pré-socrático a defenderia (ou se é MITO puro).",
    instrucao: "⏱️ Quem defenderia essa ideia?",
    duracaoSegundos: 12,
    pecas: [
      { id: "tales", emoji: "💧", rotulo: "Tales (água)" },
      { id: "heraclito", emoji: "🔥", rotulo: "Heráclito (fogo/mudança)" },
      { id: "pitagoras", emoji: "🔢", rotulo: "Pitágoras (número)" },
      { id: "mito", emoji: "⚡", rotulo: "Mito (deuses)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Tudo depende de umidade pra viver'",
          emoji: "💧",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Argumento por observação da vida",
          emoji: "🌱",
          cor: "from-cyan-400 to-teal-600",
        },
        contexto: "Plantas, animais, pessoas — todos precisam de água.",
        pecaCertaId: "tales",
        feedbackAcerto: "Isso. É o argumento clássico de TALES: água como princípio.",
        feedbackErro: "É o argumento de TALES: tudo que vive precisa de água — logo, água é a arché.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Nada é fixo — tudo está mudando o tempo todo'",
          emoji: "🔥",
          cor: "from-orange-400 to-red-600",
        },
        municipioB: {
          nome: "Argumento por observação do fluxo",
          emoji: "🌊",
          cor: "from-red-400 to-orange-600",
        },
        contexto: "O rio, o corpo, as estações — tudo em movimento.",
        pecaCertaId: "heraclito",
        feedbackAcerto: "Perfeito. Panta rhei — a assinatura de HERÁCLITO.",
        feedbackErro: "É HERÁCLITO: tudo flui, nada permanece igual.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'A música obedece a razões matemáticas exatas'",
          emoji: "🎵",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Argumento por descoberta matemática",
          emoji: "🔢",
          cor: "from-fuchsia-400 to-purple-600",
        },
        contexto: "Cordas em 2:1, 3:2 — proporções que soam bem.",
        pecaCertaId: "pitagoras",
        feedbackAcerto: "Isso. É a intuição central de PITÁGORAS: o cosmos é matemático.",
        feedbackErro: "É PITÁGORAS: se música é número, talvez tudo seja.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'O sol nasce porque Hélio guia sua carruagem'",
          emoji: "☀️",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Explicação por deus, sem argumento",
          emoji: "🏛️",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Narrativa da tradição, não pede prova.",
        pecaCertaId: "mito",
        feedbackAcerto: "Boa. É MITO puro — deus + narrativa + sem argumento.",
        feedbackErro: "É MITO: explica por deus, sem observar nem argumentar.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Você nunca é o mesmo dois dias seguidos'",
          emoji: "🔥",
          cor: "from-orange-400 to-red-600",
        },
        municipioB: {
          nome: "Argumento sobre identidade e mudança",
          emoji: "🔄",
          cor: "from-red-400 to-fuchsia-600",
        },
        contexto: "Cada dia suas células, ideias e emoções mudam.",
        pecaCertaId: "heraclito",
        feedbackAcerto: "Isso. HERÁCLITO puro: o rio da vida também flui.",
        feedbackErro: "É HERÁCLITO: até a pessoa que 'você é' está sempre mudando.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'A galáxia é uma espiral com proporção áurea'",
          emoji: "🌀",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Argumento por proporção matemática",
          emoji: "📐",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "O universo obedece a razões matemáticas.",
        pecaCertaId: "pitagoras",
        feedbackAcerto: "Perfeito. É a intuição de PITÁGORAS voltando 25 séculos depois.",
        feedbackErro: "É PITÁGORAS: o cosmos tem proporção — número é a linguagem escondida.",
      },
    ],
    falaFinal:
      "6 rodadas. Você distingue as 3 grandes apostas pré-socráticas do mito puro. É muita coisa.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza rápida: as 2 grandes atitudes diante do mundo, desde a Grécia antiga.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "mito",
        rotulo: "MITO (narrativa/deuses)",
        emoji: "⚡",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Explica o mundo por histórias de deuses e heróis. Não pede argumento — pede fé na tradição. Consola, dá sentido, cria comunidade. Ainda vive em religiões, folclore e cinema.",
        exemplos: ["🏛️ Zeus e o raio", "🌊 Poseidon e o mar", "🎬 Filmes de super-herói"],
      },
      {
        id: "logos",
        rotulo: "LOGOS (razão/argumento)",
        emoji: "🧠",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "Explica o mundo por observação, causas e argumento. Aceita ser corrigido. Nasceu com os pré-socráticos e vive hoje na ciência, na filosofia e no debate público sério.",
        exemplos: ["💧 Tales e a água", "🔥 Heráclito e a mudança", "🔬 Ciência moderna"],
      },
    ],
    falaFinal:
      "Duas atitudes. Filosofia vive do lado do logos, mas respeita o poder cultural do mito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CAÇADOR DE ARCHÉS.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O que UNIA os pré-socráticos, apesar de discordarem entre si?",
        opcoes: [
          { id: "a", texto: "Todos moravam na mesma cidade", correta: false },
          {
            id: "b",
            texto: "Todos explicavam o mundo por RAZÃO, sem recorrer a deuses",
            correta: true,
          },
          { id: "c", texto: "Todos concordavam que a arché era a água", correta: false },
        ],
        feedbackAcerto:
          "Isso. Eles discordavam sobre a resposta, mas concordavam no MÉTODO: argumento, não mito.",
        feedbackErro:
          "Não era a cidade nem a resposta. Era o MÉTODO: explicar por razão e argumento, sem citar deuses.",
      },
      {
        id: "av2",
        pergunta: "A frase 'ninguém entra duas vezes no mesmo rio' é de:",
        opcoes: [
          { id: "a", texto: "Tales de Mileto", correta: false },
          { id: "b", texto: "Heráclito de Éfeso", correta: true },
          { id: "c", texto: "Pitágoras de Samos", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. É HERÁCLITO — filósofo da MUDANÇA. Panta rhei: tudo flui.",
        feedbackErro:
          "É HERÁCLITO. Ele defendia que a realidade é MUDANÇA — o rio já não é o mesmo, e você também não.",
      },
      {
        id: "av3",
        pergunta: "Por que a descoberta musical de Pitágoras foi FILOSOFICAMENTE importante?",
        opcoes: [
          { id: "a", texto: "Porque ele virou músico famoso", correta: false },
          {
            id: "b",
            texto: "Porque mostrou que o mundo pode obedecer a leis matemáticas — abrindo caminho pra ciência",
            correta: true,
          },
          { id: "c", texto: "Porque provou que os deuses tocavam lira", correta: false },
        ],
        feedbackAcerto:
          "Isso. Se música é número, TALVEZ tudo seja. Essa intuição volta em Galileu e na física moderna.",
        feedbackErro:
          "A importância é filosófica: se a música obedece a números, TALVEZ o universo inteiro obedeça — é a semente da ciência.",
      },
    ],
    selo: {
      nome: "Caçador de Archés",
      subtitulo: "Insígnia dos Pré-Socráticos",
      emoji: "🌊",
      cor: "from-sky-400 to-blue-700",
    },
    falaFinal:
      "Insígnia conquistada! Você agora sabe reconhecer as primeiras apostas racionais sobre o mundo.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Caçador de Archés" },
};
