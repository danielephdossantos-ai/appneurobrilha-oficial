import type { AulaGeoV1 } from "../../types";
import { url as leviata } from "@/assets/filosofia-7ano/u5-leviata.jpg.asset.json";
import { url as locke } from "@/assets/filosofia-7ano/u5-locke.jpg.asset.json";
import { url as rousseau } from "@/assets/filosofia-7ano/u5-rousseau.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 5 · Aula 01
 * "O Contrato Social" — EF07FI05 (autoral)
 * Tema: Hobbes, Locke e Rousseau — as 3 versões do contrato.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-contrato-social",
  titulo: "O Contrato Social",
  iconeTrilha: "📜",
  bncc: ["EF07FI05"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Um pacto imaginário funda o Estado.",
    mapaUrl: leviata,
    imagemDestaqueUrl: leviata,
    aurora:
      "Investigador, entre os séculos XVII e XVIII, 3 filósofos fazem a mesma pergunta radical: 'por que a gente OBEDECE ao Estado?'. E inventam uma resposta genial: existe um CONTRATO SOCIAL — um pacto imaginário em que a gente abre mão de um pouco de liberdade em troca de segurança e ordem. Mas cada um imagina o contrato de um jeito: HOBBES desenha um monstro Leviatã; LOCKE desenha um governo limitado; ROUSSEAU desenha uma vontade geral. 3 pactos, 3 futuros.",
    falaFinal:
      "Nesta aula: as 3 versões do contrato que ainda decidem sua política de hoje.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite antes:",
    pergunta: "Sem Estado nenhum, a vida entre humanos seria…",
    opcoes: [
      {
        id: "caos",
        titulo: "Guerra de todos contra todos",
        subtitulo: "sem lei, sem segurança, ninguém confia em ninguém",
        emoji: "⚔️",
        cor: "from-red-400 to-rose-600",
      },
      {
        id: "paz",
        titulo: "Convivência pacífica em cooperação",
        subtitulo: "as pessoas se organizariam sozinhas, sem precisar de rei",
        emoji: "🌱",
        cor: "from-lime-400 to-green-600",
      },
    ],
    respostaCerta: "caos",
    feedbackAcerto:
      "Essa é a leitura de HOBBES — sem Estado, 'guerra de todos contra todos, vida solitária, pobre, sórdida, brutal e curta'. Locke e Rousseau discordam! Vamos ver.",
    feedbackErro:
      "Locke e Rousseau seriam mais otimistas que Hobbes. Mas mesmo eles concordam: sem PACTO, algum caos surgiria. Por isso o contrato.",
    falaFinal: "Sem contrato, algum caos — a discussão é: quanto Estado precisa?",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave do contratualismo.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "estado-natureza",
        capa: "1. Estado de natureza",
        emoji: "🌲",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "ESTADO DE NATUREZA é a situação IMAGINÁRIA em que os humanos viveriam ANTES de qualquer governo. Não é uma tese histórica — é um experimento mental pra descobrir por que criamos o Estado. Cada filósofo imagina esse estado de um jeito diferente e daí tira uma política diferente.",
        exemplo:
          "Ex.: pra Hobbes, é guerra. Pra Locke, é liberdade + insegurança. Pra Rousseau, é paz + inocência.",
        fotoUrl: leviata,
      },
      {
        id: "contrato",
        capa: "2. Contrato social",
        emoji: "📜",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "CONTRATO SOCIAL é o PACTO IMAGINÁRIO em que cada indivíduo abre mão de uma parte de sua liberdade em troca de segurança e ordem coletiva. É a fundação racional do Estado: obedecemos porque, hipoteticamente, aceitamos as regras.",
        exemplo:
          "Ex.: aceito pagar impostos e obedecer leis; em troca, o Estado garante segurança, saúde e justiça.",
        fotoUrl: locke,
      },
      {
        id: "soberania",
        capa: "3. Soberania",
        emoji: "👑",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "SOBERANIA é O PODER SUPREMO de decidir. Pra Hobbes, cabe ao Rei-Leviatã (praticamente absoluto). Pra Locke, ao povo, com governo limitado por direitos naturais. Pra Rousseau, à VONTADE GERAL (o que o povo quer em conjunto pro bem comum).",
        exemplo:
          "Ex.: no Brasil de hoje, a soberania é do POVO (Constituição, art. 1º) — herança direta de Locke e Rousseau.",
        fotoUrl: rousseau,
      },
    ],
    falaFinal: "Estado de natureza, contrato, soberania. 3 chaves modernas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos-chave. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: leviata,
    pontos: [
      {
        id: "hobbes",
        x: 22,
        y: 34,
        emoji: "🐉",
        cor: "from-slate-600 to-slate-800",
        titulo: "1651 — Hobbes escreve O Leviatã",
        texto:
          "Em plena guerra civil na Inglaterra, Thomas Hobbes escreve: sem Estado, a vida humana é 'GUERRA DE TODOS CONTRA TODOS'. Por medo, aceitamos um pacto: entregamos toda liberdade a um SOBERANO ABSOLUTO (o Leviatã) em troca de paz. Melhor rei duro que caos.",
        fotoUrl: leviata,
      },
      {
        id: "locke",
        x: 74,
        y: 30,
        emoji: "🕊️",
        cor: "from-emerald-500 to-teal-700",
        titulo: "1689 — Locke propõe o governo limitado",
        texto:
          "John Locke discorda: no estado de natureza, temos DIREITOS NATURAIS (vida, liberdade, propriedade) — só que sem juiz imparcial, vira insegurança. O contrato cria um governo COM PODERES LIMITADOS pra proteger esses direitos. Se abusar, o povo pode DERRUBÁ-LO. Base do liberalismo e das constituições modernas.",
        fotoUrl: locke,
      },
      {
        id: "rousseau",
        x: 28,
        y: 70,
        emoji: "🤝",
        cor: "from-lime-500 to-green-700",
        titulo: "1762 — Rousseau: a vontade geral",
        texto:
          "Jean-Jacques Rousseau vira a mesa: 'o homem nasce livre, mas por toda parte se acha acorrenta­do'. Pra ele, o contrato legítimo é aquele em que cada um obedece à VONTADE GERAL — não à maioria, mas ao que o povo quer no que há de melhor pra todos. Base da democracia participativa.",
        fotoUrl: rousseau,
      },
      {
        id: "revolucoes",
        x: 76,
        y: 70,
        emoji: "🎇",
        cor: "from-red-500 to-rose-700",
        titulo: "As ideias explodem em revoluções",
        texto:
          "Locke inspira a Independência dos EUA (1776). Rousseau inspira a Revolução Francesa (1789). Ambos inspiram a nossa Constituição de 1988 ('todo poder emana do povo'). Filosofia pura virando lei viva.",
        fotoUrl: leviata,
      },
    ],
    falaFinal:
      "Hobbes → Locke → Rousseau. 3 contratos que estão dentro da política de hoje.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Pra HOBBES, o estado de natureza é…",
        fotoUrl: leviata,
        cards: [
          {
            id: "guerra",
            emoji: "⚔️",
            titulo: "Guerra de todos contra todos",
            cor: "from-red-500 to-rose-700",
          },
          {
            id: "paz",
            emoji: "🌱",
            titulo: "Paraíso pacífico e inocente",
            cor: "from-lime-500 to-green-700",
          },
          {
            id: "liberdade",
            emoji: "🕊️",
            titulo: "Liberdade com direitos naturais bem definidos",
            cor: "from-sky-500 to-blue-700",
          },
        ],
        correta: "guerra",
        feedbackAcerto:
          "Isso. Pra Hobbes, sem Estado é guerra e medo. Por isso o Leviatã.",
        feedbackErro:
          "Paraíso é Rousseau; direitos naturais é Locke. Hobbes = GUERRA de todos contra todos.",
      },
      {
        id: "q2",
        pergunta: "Pra LOCKE, o Estado existe pra…",
        fotoUrl: locke,
        cards: [
          {
            id: "proteger",
            emoji: "🛡️",
            titulo: "Proteger direitos naturais (vida, liberdade, propriedade)",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "controlar",
            emoji: "👑",
            titulo: "Controlar totalmente todos os cidadãos",
            cor: "from-slate-500 to-gray-700",
          },
          {
            id: "eliminar",
            emoji: "❌",
            titulo: "Eliminar toda liberdade individual",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "proteger",
        feedbackAcerto:
          "Perfeito. Locke: governo LIMITADO existe pra proteger direitos. Se abusa, povo derruba.",
        feedbackErro:
          "Controle total é Hobbes. Locke = governo LIMITADO pra PROTEGER direitos.",
      },
      {
        id: "q3",
        pergunta: "A VONTADE GERAL de Rousseau é…",
        fotoUrl: rousseau,
        cards: [
          {
            id: "bem-comum",
            emoji: "🤝",
            titulo: "O que o povo quer para o bem comum de todos",
            cor: "from-lime-500 to-green-700",
          },
          {
            id: "maioria",
            emoji: "🗳️",
            titulo: "Simplesmente a soma de vontades individuais",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "rei",
            emoji: "👑",
            titulo: "O desejo do rei absoluto",
            cor: "from-amber-500 to-orange-700",
          },
        ],
        correta: "bem-comum",
        feedbackAcerto:
          "Isso. Vontade geral ≠ vontade da maioria. É o que o povo quer PRO BEM COMUM.",
        feedbackErro:
          "Maioria pode se enganar; rei é o oposto disso. Vontade geral = BEM COMUM.",
      },
    ],
    falaFinal: "Radar contratualista calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Constituições modernas nascem do contrato social. Escolha 5 estados brasileiros com forte tradição jurídica e Assembleias Legislativas de referência.",
    instrucao: "Acenda 5 estados com forte tradição jurídica",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RJ", "RS", "PE"],
      pergunta:
        "Quais 5 estados abrigam faculdades de Direito clássicas e tradição jurídica forte no Brasil?",
    },
    falaFinal:
      "SP, MG, RJ, RS, PE. Contrato social contemporâneo, feito lei em Assembleias.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Lógica do contrato em 5 passos. Coloque em ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como o Estado nasce, segundo os contratualistas?",
    paradas: [
      {
        id: "natureza",
        emoji: "🌲",
        rotulo: "1. Estado de natureza",
        descricao: "Antes de qualquer Estado, seres humanos convivem — bem ou mal.",
      },
      {
        id: "problema",
        emoji: "😰",
        rotulo: "2. Surge um problema",
        descricao:
          "Insegurança, disputa, falta de juiz imparcial (Locke), medo (Hobbes), corrupção (Rousseau).",
      },
      {
        id: "contrato",
        emoji: "📜",
        rotulo: "3. Firma-se o contrato",
        descricao: "Cada um cede um pouco de liberdade em troca de ordem coletiva.",
      },
      {
        id: "estado",
        emoji: "🏛️",
        rotulo: "4. Nasce o Estado",
        descricao: "Poder soberano organizado com base no pacto (rei, parlamento, povo).",
      },
      {
        id: "obediencia",
        emoji: "🤝",
        rotulo: "5. Obediência legítima",
        descricao:
          "Cidadãos obedecem porque o Estado protege o que o contrato promete.",
      },
    ],
    ordemCerta: ["natureza", "problema", "contrato", "estado", "obediencia"],
    feedbackAcerto:
      "Isso. Natureza → problema → contrato → Estado → obediência. Lógica contratualista.",
    feedbackErro:
      "Ordem: estado de natureza → surge problema → firmam contrato → nasce Estado → obediência.",
    falaFinal: "5 passos. Lógica do contratualismo em uma escada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 5 — O Contrato Social",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Entre os séculos XVII e XVIII, 3 filósofos perguntaram: por que obedecemos ao Estado? E responderam com o CONTRATO SOCIAL — um pacto imaginário em que cedemos liberdade em troca de segurança e ordem.",
        chaves: ["contrato", "pacto"],
      },
      {
        id: "p2",
        texto:
          "HOBBES (1651) diz: sem Estado, é guerra de todos contra todos. Por medo, aceitamos um SOBERANO ABSOLUTO — o Leviatã. Melhor rei duro que caos total.",
        chaves: ["Hobbes", "Leviatã"],
      },
      {
        id: "p3",
        texto:
          "LOCKE (1689) discorda: no estado de natureza já temos DIREITOS NATURAIS (vida, liberdade, propriedade). O contrato cria um GOVERNO LIMITADO pra proteger esses direitos — e se abusar, o povo pode derrubá-lo.",
        chaves: ["Locke", "direitos"],
      },
      {
        id: "p4",
        texto:
          "ROUSSEAU (1762) vira a mesa: o contrato legítimo é o que faz obedecer à VONTADE GERAL — o que o povo quer pro bem comum. Base direta da Revolução Francesa e da democracia participativa.",
        chaves: ["Rousseau", "vontade geral"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo QUEM DISSE ISSO? Cada frase pertence a Hobbes, Locke ou Rousseau. Acerte rápido!",
    instrucao: "⏱️ Qual filósofo?",
    duracaoSegundos: 15,
    pecas: [
      { id: "hobbes", emoji: "🐉", rotulo: "Hobbes" },
      { id: "locke", emoji: "🕊️", rotulo: "Locke" },
      { id: "rousseau", emoji: "🤝", rotulo: "Rousseau" },
      { id: "todos", emoji: "📜", rotulo: "Todos concordam" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'O homem nasce livre, mas por toda parte se acha acorrentado'",
          emoji: "🔗",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Frase de abertura do Contrato Social",
          emoji: "📖",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "1762, obra Do Contrato Social.",
        pecaCertaId: "rousseau",
        feedbackAcerto: "Isso. Frase icônica de ROUSSEAU. Vontade geral em ação.",
        feedbackErro: "É ROUSSEAU — frase de abertura do Contrato Social (1762).",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Sem Estado, a vida é solitária, pobre, brutal e curta'",
          emoji: "⚔️",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Diagnóstico do estado de natureza",
          emoji: "🐉",
          cor: "from-slate-400 to-gray-600",
        },
        contexto: "Leviatã, 1651.",
        pecaCertaId: "hobbes",
        feedbackAcerto: "Isso. HOBBES puro — sem Leviatã, guerra e miséria.",
        feedbackErro: "É HOBBES — diagnóstico do estado de natureza no Leviatã.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Direitos naturais: vida, liberdade e propriedade'",
          emoji: "🛡️",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Base do liberalismo político",
          emoji: "🕊️",
          cor: "from-sky-400 to-blue-600",
        },
        contexto: "Segundo Tratado sobre o Governo, 1689.",
        pecaCertaId: "locke",
        feedbackAcerto:
          "Isso. LOCKE — direitos naturais que nenhum governo pode violar.",
        feedbackErro:
          "É LOCKE — pai dos direitos naturais e do governo limitado.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Se o governo violar o pacto, o povo pode derrubá-lo'",
          emoji: "✊",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Direito de resistência",
          emoji: "🛡️",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Inspira a Independência dos EUA (1776).",
        pecaCertaId: "locke",
        feedbackAcerto:
          "Isso. LOCKE — governo abusivo perde legitimidade. Base da Declaração de Independência dos EUA.",
        feedbackErro:
          "É LOCKE — princípio do governo limitado e direito de resistência.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'A soberania pertence ao povo, expressa na vontade geral'",
          emoji: "🤝",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Base da Revolução Francesa (1789)",
          emoji: "🎇",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Vontade geral ≠ maioria: é o BEM COMUM.",
        pecaCertaId: "rousseau",
        feedbackAcerto: "Isso. ROUSSEAU puro — soberania popular e vontade geral.",
        feedbackErro: "É ROUSSEAU — soberania popular expressa na vontade geral.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Existe um contrato social que funda a obediência ao Estado'",
          emoji: "📜",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Ideia comum aos 3",
          emoji: "🕯️",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Os 3 partem da mesma hipótese-mãe.",
        pecaCertaId: "todos",
        feedbackAcerto:
          "Perfeito. TODOS concordam com a EXISTÊNCIA do contrato. Divergem no formato.",
        feedbackErro:
          "É TODOS: os 3 aceitam que há um contrato — Hobbes, Locke e Rousseau. Divergem no CONTEÚDO dele.",
      },
    ],
    falaFinal:
      "6 casos. Você já lê os 3 contratualistas por dentro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "3 contratos, 3 leituras da mesma pergunta.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "hobbes",
        rotulo: "HOBBES — Leviatã absoluto",
        emoji: "🐉",
        percentual: 50,
        cor: "#64748b",
        descricao:
          "Estado de natureza = guerra. Solução: entregar toda liberdade a um soberano forte. Segurança acima de tudo. Base de regimes centralizadores.",
        exemplos: ["⚔️ Sem Estado, caos", "👑 Rei absoluto legítimo", "🛡️ Ordem antes de liberdade"],
      },
      {
        id: "locke-rousseau",
        rotulo: "LOCKE + ROUSSEAU — poder no povo",
        emoji: "🕊️",
        percentual: 50,
        cor: "#84cc16",
        descricao:
          "Estado de natureza tem direitos (Locke) e liberdade (Rousseau). Governo é LIMITADO por direitos e/ou pela vontade geral. Base de democracias e constituições modernas.",
        exemplos: ["📜 Constituição limita o Estado", "🗳️ Soberania popular", "🤝 Direitos primeiro"],
      },
    ],
    falaFinal:
      "Duas famílias de contrato. A segunda venceu no mundo democrático contemporâneo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia DIPLOMATA DO CONTRATO.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra HOBBES, sem Estado a vida humana seria…",
        opcoes: [
          { id: "a", texto: "Paradisíaca e naturalmente cooperativa", correta: false },
          {
            id: "b",
            texto: "Guerra de todos contra todos — solitária, brutal e curta",
            correta: true,
          },
          {
            id: "c",
            texto: "Cheia de direitos naturais respeitados por todos",
            correta: false,
          },
        ],
        feedbackAcerto:
          "Isso. Sem Leviatã, guerra e medo. Por isso o pacto com soberano forte.",
        feedbackErro:
          "Paraíso é Rousseau; direitos naturais é Locke. Pra HOBBES é GUERRA total.",
      },
      {
        id: "av2",
        pergunta: "Pra LOCKE, o Estado legítimo existe pra…",
        opcoes: [
          { id: "a", texto: "Controlar totalmente cada cidadão", correta: false },
          {
            id: "b",
            texto:
              "Proteger direitos naturais (vida, liberdade, propriedade) — se abusar, povo derruba",
            correta: true,
          },
          { id: "c", texto: "Impor a religião oficial", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Governo LIMITADO pra proteger direitos. Base do liberalismo e das constituições modernas.",
        feedbackErro:
          "Controle total é Hobbes. LOCKE = governo LIMITADO e direitos protegidos.",
      },
      {
        id: "av3",
        pergunta: "A VONTADE GERAL de ROUSSEAU é…",
        opcoes: [
          { id: "a", texto: "O que o rei ordena", correta: false },
          {
            id: "b",
            texto:
              "O que o povo quer pro bem comum — não a mesma coisa que 'vontade da maioria'",
            correta: true,
          },
          { id: "c", texto: "A soma automática dos desejos individuais", correta: false },
        ],
        feedbackAcerto:
          "Isso. Vontade geral ≠ maioria. É o BEM COMUM. Base da Revolução Francesa.",
        feedbackErro:
          "Não é rei nem soma cega. Vontade geral = o que serve ao BEM COMUM.",
      },
    ],
    selo: {
      nome: "Diplomata do Contrato",
      subtitulo: "Insígnia dos 3 Contratualistas",
      emoji: "📜",
      cor: "from-sky-400 to-blue-700",
    },
    falaFinal:
      "Insígnia conquistada! Hobbes, Locke e Rousseau já são cartas na sua manga.",
  },

  recompensa: { xp: 405, moedas: 300, medalha: "Diplomata do Contrato" },
};
