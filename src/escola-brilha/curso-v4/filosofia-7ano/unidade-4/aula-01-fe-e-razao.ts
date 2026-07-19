import type { AulaGeoV1 } from "../../types";
import { url as agostinho } from "@/assets/filosofia-7ano/u4-agostinho.jpg.asset.json";
import { url as tomas } from "@/assets/filosofia-7ano/u4-tomas-aquino.jpg.asset.json";
import { url as catedral } from "@/assets/filosofia-7ano/u4-catedral.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 4 · Aula 01
 * "Fé e Razão" — EF07FI04 (autoral)
 * Tema: filosofia medieval (Agostinho e Tomás de Aquino).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-fe-e-razao",
  titulo: "Fé e Razão",
  iconeTrilha: "⛪",
  bncc: ["EF07FI04"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Imagine a longa Idade Média.",
    mapaUrl: catedral,
    imagemDestaqueUrl: catedral,
    aurora:
      "Investigador, entre a queda de Roma (476) e o Renascimento (séc. XV), mil anos de filosofia acontecem dentro de MONASTÉRIOS e UNIVERSIDADES religiosas. A grande pergunta muda: 'a fé cristã e a razão grega são inimigas ou aliadas?'. Dois gigantes respondem: AGOSTINHO diz 'creio para entender'; TOMÁS DE AQUINO diz 'razão e fé se completam'. Nascem a teologia e a filosofia medieval.",
    falaFinal:
      "Nesta aula: como Agostinho e Tomás reconciliaram Atenas com Jerusalém.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite antes da investigação:",
    pergunta: "Fé e razão são…",
    opcoes: [
      {
        id: "aliadas",
        titulo: "ALIADAS — podem se ajudar",
        subtitulo: "razão organiza, fé completa o que a razão não alcança",
        emoji: "🤝",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "inimigas",
        titulo: "INIMIGAS — se cancelam",
        subtitulo: "se você usa uma, tem que desligar a outra",
        emoji: "⚔️",
        cor: "from-red-400 to-rose-600",
      },
    ],
    respostaCerta: "aliadas",
    feedbackAcerto:
      "Isso — pelo menos pra Agostinho e Tomás. Pra eles, as duas caminham juntas: razão até onde alcança, fé além.",
    feedbackErro:
      "Muita gente pensa 'ou uma ou outra'. Mas Agostinho e Tomás propõem: as duas se ajudam. É o casamento entre Atenas (razão) e Jerusalém (fé).",
    falaFinal: "Filosofia medieval = tentar juntar razão grega + fé cristã.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "patristica",
        capa: "1. Patrística",
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "PATRÍSTICA é o pensamento dos 'Padres da Igreja' (séc. II ao VIII) — pensadores cristãos que usaram filosofia grega (especialmente Platão) pra explicar a fé. Agostinho é o maior: fundou a matriz do pensamento cristão ocidental.",
        exemplo:
          "Ex.: 'Creio para entender' (Agostinho). A fé abre a porta; a razão explora a casa.",
        fotoUrl: agostinho,
      },
      {
        id: "escolastica",
        capa: "2. Escolástica",
        emoji: "🏛️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ESCOLÁSTICA é a filosofia ensinada nas ESCOLAS (universidades medievais) do séc. XI ao XV. Usa Aristóteles como base racional e tenta demonstrar tese por tese, com argumentos e contra-argumentos. Tomás de Aquino é o pico: 'Suma Teológica'.",
        exemplo:
          "Ex.: numa aula escolástica, o professor propõe uma tese, ouve as objeções, responde ponto por ponto e conclui. Método super organizado.",
        fotoUrl: tomas,
      },
      {
        id: "fe-razao",
        capa: "3. Fé + Razão",
        emoji: "⛪",
        cor: "from-violet-500 to-purple-700",
        conteudo:
          "Pra Tomás de Aquino, FÉ e RAZÃO não competem: são DUAS LUZES do mesmo Deus. A razão vai até onde consegue (o mundo natural, ética básica); a fé revela o que passa disso (destino último, mistérios). As duas se completam, não se cancelam.",
        exemplo:
          "Ex.: a razão prova que existe um bem maior possível; a fé revela QUEM é esse bem. Uma prepara o terreno, a outra ergue a casa.",
        fotoUrl: catedral,
      },
    ],
    falaFinal: "Patrística, escolástica, fé+razão. 3 chaves medievais.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da filosofia medieval. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: catedral,
    pontos: [
      {
        id: "queda",
        x: 22,
        y: 34,
        emoji: "🏛️",
        cor: "from-slate-500 to-slate-700",
        titulo: "476 — cai o Império Romano do Ocidente",
        texto:
          "Roma cai, cidades esvaziam, escolas gregas fecham. A filosofia sobrevive dentro de MONASTÉRIOS: monges copiam textos gregos à mão em cavernas de pedra. Se não fossem eles, nada de Aristóteles nem Platão pra gente hoje.",
        fotoUrl: catedral,
      },
      {
        id: "agostinho",
        x: 74,
        y: 30,
        emoji: "📖",
        cor: "from-amber-500 to-orange-700",
        titulo: "Séc. IV-V — Agostinho: 'creio para entender'",
        texto:
          "Agostinho de Hipona (Norte da África) foi um jovem farrista que se converteu ao cristianismo e virou o pensador mais influente do Ocidente. Ele usa Platão pra dizer: a alma humana busca Deus como o preso busca o sol; a fé abre a porta e a razão explora o interior.",
        fotoUrl: agostinho,
      },
      {
        id: "universidades",
        x: 28,
        y: 70,
        emoji: "🏰",
        cor: "from-emerald-500 to-teal-700",
        titulo: "Séc. XII — nascem as universidades",
        texto:
          "Paris, Bolonha, Oxford. Nasce a UNIVERSIDADE — professores fixos, aulas, debates, títulos. É lá que a escolástica floresce: ensinar filosofia + teologia pra formar clérigos e juristas. Método rígido: tese → objeções → resposta → conclusão.",
        fotoUrl: tomas,
      },
      {
        id: "tomas",
        x: 76,
        y: 70,
        emoji: "⚖️",
        cor: "from-violet-500 to-purple-700",
        titulo: "Séc. XIII — Tomás: fé + razão de mãos dadas",
        texto:
          "Tomás de Aquino, dominicano italiano, pega Aristóteles (que voltou à Europa via traduções árabes!) e mostra que sua filosofia da natureza cabe DIREITINHO na teologia cristã. Escreve a Suma Teológica: manual gigante que organiza tudo. Fé e razão viram DUAS LUZES do mesmo Deus.",
        fotoUrl: tomas,
      },
    ],
    falaFinal:
      "Queda de Roma → Agostinho → universidades → Tomás. Mil anos de pensamento.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "PATRÍSTICA é o pensamento…",
        fotoUrl: agostinho,
        cards: [
          {
            id: "padres",
            emoji: "📜",
            titulo: "Dos Padres da Igreja (séc. II a VIII), como Agostinho",
            cor: "from-amber-500 to-orange-700",
          },
          {
            id: "profs",
            emoji: "🏛️",
            titulo: "Dos professores universitários medievais",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "artistas",
            emoji: "🎨",
            titulo: "Dos artistas renascentistas",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "padres",
        feedbackAcerto:
          "Isso. Padres da Igreja — Agostinho é o maior deles. Base do pensamento cristão.",
        feedbackErro:
          "Professores universitários são ESCOLÁSTICOS (Tomás). Patrística = Padres da Igreja.",
      },
      {
        id: "q2",
        pergunta: "Pra Tomás de Aquino, fé e razão são…",
        fotoUrl: tomas,
        cards: [
          {
            id: "duas-luzes",
            emoji: "🕯️",
            titulo: "Duas luzes do mesmo Deus, que se completam",
            cor: "from-violet-500 to-purple-700",
          },
          {
            id: "inimigas",
            emoji: "⚔️",
            titulo: "Inimigas — quem tem fé perde a razão",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "iguais",
            emoji: "🟰",
            titulo: "Idênticas em tudo",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "duas-luzes",
        feedbackAcerto:
          "Perfeito. Duas luzes, um só Deus. Razão vai até onde alcança; fé completa.",
        feedbackErro:
          "Tomás não separa nem iguala: são LUZES DIFERENTES que iluminam a mesma verdade.",
      },
      {
        id: "q3",
        pergunta: "A ESCOLÁSTICA nasceu nas…",
        fotoUrl: catedral,
        cards: [
          {
            id: "univ",
            emoji: "🏰",
            titulo: "Universidades medievais (séc. XII-XV)",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "acad",
            emoji: "🏛️",
            titulo: "Academia de Platão, na Grécia Antiga",
            cor: "from-amber-400 to-orange-600",
          },
          {
            id: "praca",
            emoji: "⛲",
            titulo: "Praças renascentistas italianas",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "univ",
        feedbackAcerto:
          "Isso. Nasceu nas escolas de Paris, Bolonha, Oxford. Método rigoroso de debate.",
        feedbackErro:
          "A Academia é grega antiga. As praças renascentistas são posteriores. Escolástica = UNIVERSIDADES MEDIEVAIS.",
      },
    ],
    falaFinal: "Radar medieval calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Universidades católicas tradicionais no Brasil herdam a escolástica. Escolha 5 estados com PUCs históricas.",
    instrucao: "Acenda 5 estados com PUCs de referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PR"],
      pergunta:
        "Quais 5 estados abrigam PUCs históricas (Pontifícias Universidades Católicas) no Brasil?",
    },
    falaFinal:
      "PUC-SP, PUC-Rio, PUC-Minas, PUC-RS, PUC-PR. Herança direta da escolástica medieval.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Método escolástico em 5 passos. Coloque em ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como Tomás debatia uma tese?",
    paradas: [
      {
        id: "tese",
        emoji: "📌",
        rotulo: "1. Enuncia a tese",
        descricao: "Ex.: 'Deus pode ser conhecido pela razão'.",
      },
      {
        id: "objecoes",
        emoji: "❓",
        rotulo: "2. Lista as objeções",
        descricao: "Levanta os melhores contra-argumentos possíveis.",
      },
      {
        id: "autoridade",
        emoji: "📖",
        rotulo: "3. Cita uma autoridade",
        descricao: "Bíblia, Aristóteles, Agostinho — apoio inicial da tese.",
      },
      {
        id: "argumento",
        emoji: "🧠",
        rotulo: "4. Desenvolve o argumento",
        descricao: "Prova racional, passo a passo, apoiando a tese.",
      },
      {
        id: "responde",
        emoji: "✅",
        rotulo: "5. Responde cada objeção",
        descricao: "Volta ponto por ponto e resolve as dúvidas iniciais.",
      },
    ],
    ordemCerta: ["tese", "objecoes", "autoridade", "argumento", "responde"],
    feedbackAcerto:
      "Isso. Tese → objeções → autoridade → argumento → resposta. Método superorganizado.",
    feedbackErro:
      "Ordem: tese → lista objeções → cita autoridade → prova → responde cada objeção no fim.",
    falaFinal: "5 passos. Método escolástico completo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 4 — Fé e Razão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Depois da queda de Roma (476), mil anos de filosofia acontecem dentro de mosteiros e universidades religiosas. A grande pergunta muda: fé cristã e razão grega são inimigas ou aliadas?",
        chaves: ["fé", "razão"],
      },
      {
        id: "p2",
        texto:
          "AGOSTINHO (séc. IV-V), o maior dos Padres da Igreja (patrística), responde: 'CREIO PARA ENTENDER'. A fé abre a porta; a razão explora o interior. Usa Platão como base racional.",
        chaves: ["Agostinho", "patrística"],
      },
      {
        id: "p3",
        texto:
          "Séculos depois, TOMÁS DE AQUINO (séc. XIII), na Escolástica, dá o passo decisivo: fé e razão são DUAS LUZES do mesmo Deus. A razão vai até onde alcança (natureza, ética); a fé revela o que passa disso.",
        chaves: ["Tomás", "duas luzes"],
      },
      {
        id: "p4",
        texto:
          "O casamento entre Atenas (razão grega) e Jerusalém (fé cristã) formou o pensamento ocidental por mil anos e ainda hoje se sente em universidades, direitos humanos e ética.",
        chaves: ["Atenas", "Jerusalém"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo LUZES DA IDADE MÉDIA! Cada situação: usa a razão, a fé, as duas juntas, ou nenhuma?",
    instrucao: "⏱️ Qual luz está agindo?",
    duracaoSegundos: 15,
    pecas: [
      { id: "razao", emoji: "🧠", rotulo: "Razão" },
      { id: "fe", emoji: "⛪", rotulo: "Fé" },
      { id: "ambas", emoji: "🕯️", rotulo: "Fé + razão juntas" },
      { id: "nada", emoji: "🌀", rotulo: "Superstição (nem uma nem outra)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Provo que a Terra gira ao redor do Sol'",
          emoji: "🔭",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Prova científica",
          emoji: "🧪",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Só observação e cálculo.",
        pecaCertaId: "razao",
        feedbackAcerto: "Isso. RAZÃO pura — observação e demonstração.",
        feedbackErro: "É RAZÃO: prova científica se faz com observação e argumento.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Creio na vida após a morte'",
          emoji: "🕯️",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Confiança na Revelação",
          emoji: "⛪",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "Passa do que a razão pode provar.",
        pecaCertaId: "fe",
        feedbackAcerto: "Isso. FÉ — assunto de crença religiosa, não de prova científica.",
        feedbackErro: "É FÉ: a vida após a morte é objeto de crença, não de prova.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Estudo teologia com método rigoroso'",
          emoji: "📚",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Método escolástico de Tomás",
          emoji: "🕯️",
          cor: "from-yellow-400 to-orange-600",
        },
        contexto: "Fé como ponto de partida, razão organiza.",
        pecaCertaId: "ambas",
        feedbackAcerto: "Perfeito. FÉ + RAZÃO — método escolástico puro.",
        feedbackErro: "É FÉ + RAZÃO: fé dá o tema, razão organiza os argumentos.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Não passo por baixo de escada, dá azar'",
          emoji: "🪜",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Sem prova nem revelação — só medo",
          emoji: "🌀",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Nem razão nem fé sustentam isso.",
        pecaCertaId: "nada",
        feedbackAcerto:
          "Isso. SUPERSTIÇÃO — Tomás rejeitaria: não é razão, não é fé, é medo mal treinado.",
        feedbackErro:
          "É SUPERSTIÇÃO — nem razão (não prova nada) nem fé (não é revelação).",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Calculo o eclipse pra dia 20 de março'",
          emoji: "🌒",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Astronomia matemática",
          emoji: "🧮",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "100% cálculo racional.",
        pecaCertaId: "razao",
        feedbackAcerto: "Isso. RAZÃO — matemática pura, sem crença.",
        feedbackErro: "É RAZÃO: eclipse é cálculo astronômico.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Estudo ética inspirada nos evangelhos'",
          emoji: "⚖️",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Fé motiva, razão argumenta",
          emoji: "🕯️",
          cor: "from-yellow-400 to-orange-600",
        },
        contexto: "Casamento clássico Atenas + Jerusalém.",
        pecaCertaId: "ambas",
        feedbackAcerto:
          "Perfeito. FÉ + RAZÃO — evangelho como ponto de partida, razão organiza a ética.",
        feedbackErro:
          "É FÉ + RAZÃO: fé oferece a fonte, razão trabalha os princípios.",
      },
    ],
    falaFinal: "6 casos. Você já distingue razão, fé e superstição.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Dois gigantes medievais em 2 posições.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "agostinho",
        rotulo: "AGOSTINHO — creio para entender",
        emoji: "📖",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "A FÉ é o ponto de partida — abre a porta. A razão explora o interior. Base platônica. Patrística (Padres da Igreja).",
        exemplos: ["🕯️ Fé primeiro", "🌟 Razão depois", "📜 Base platônica"],
      },
      {
        id: "tomas",
        rotulo: "TOMÁS — duas luzes do mesmo Deus",
        emoji: "⚖️",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "FÉ e RAZÃO caminham juntas, iluminando facetas diferentes da mesma verdade. Base aristotélica. Escolástica (universidades).",
        exemplos: ["🧠 Razão em paralelo", "⛪ Fé em paralelo", "🏛️ Base aristotélica"],
      },
    ],
    falaFinal: "Dois métodos, um projeto: pensar a fé com rigor.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA IDADE MÉDIA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "AGOSTINHO é figura-chave da…",
        opcoes: [
          { id: "a", texto: "Escolástica (séc. XIII, universidades)", correta: false },
          {
            id: "b",
            texto: "Patrística (Padres da Igreja, séc. IV-V, base platônica)",
            correta: true,
          },
          { id: "c", texto: "Filosofia analítica contemporânea", correta: false },
        ],
        feedbackAcerto:
          "Isso. Agostinho = maior dos Padres da Igreja. Base platônica, 'creio para entender'.",
        feedbackErro:
          "Escolástica é séculos depois. Agostinho é PATRÍSTICA — Padre da Igreja.",
      },
      {
        id: "av2",
        pergunta: "Pra TOMÁS DE AQUINO, fé e razão…",
        opcoes: [
          { id: "a", texto: "Se cancelam mutuamente", correta: false },
          {
            id: "b",
            texto:
              "São duas luzes do mesmo Deus; se completam sem se confundir",
            correta: true,
          },
          { id: "c", texto: "São exatamente idênticas", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Duas luzes distintas iluminando a mesma verdade.",
        feedbackErro:
          "Não se cancelam nem são iguais: SE COMPLETAM. Razão até onde alcança, fé além.",
      },
      {
        id: "av3",
        pergunta: "ESCOLÁSTICA é o pensamento filosófico-teológico…",
        opcoes: [
          {
            id: "a",
            texto:
              "Das universidades medievais (séc. XI-XV), com método rigoroso de debate",
            correta: true,
          },
          { id: "b", texto: "Da Grécia Antiga, com Platão e Aristóteles", correta: false },
          { id: "c", texto: "Do Iluminismo francês", correta: false },
        ],
        feedbackAcerto:
          "Isso. Escolástica = método universitário medieval: tese, objeções, autoridade, argumento, resposta.",
        feedbackErro:
          "Grécia é antes; Iluminismo é séculos depois. Escolástica = UNIVERSIDADES MEDIEVAIS.",
      },
    ],
    selo: {
      nome: "Guardião da Idade Média",
      subtitulo: "Insígnia da Fé e da Razão",
      emoji: "⛪",
      cor: "from-violet-400 to-purple-700",
    },
    falaFinal:
      "Insígnia conquistada! Você já lê a Idade Média com respeito e método.",
  },

  recompensa: { xp: 400, moedas: 295, medalha: "Guardião da Idade Média" },
};
