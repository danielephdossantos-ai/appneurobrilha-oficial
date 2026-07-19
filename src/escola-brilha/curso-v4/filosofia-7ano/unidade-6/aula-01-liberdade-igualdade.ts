import type { AulaGeoV1 } from "../../types";
import { url as revolucao } from "@/assets/filosofia-7ano/u6-revolucao.jpg.asset.json";
import { url as declaracao } from "@/assets/filosofia-7ano/u6-declaracao.jpg.asset.json";
import { url as liberdade } from "@/assets/filosofia-7ano/u6-liberdade.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 6 · Aula 01
 * "Liberdade e Igualdade" — EF07FI06 (autoral)
 * Tema: Revolução Francesa (1789) — filosofia que virou lei.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-liberdade-igualdade",
  titulo: "Liberdade e Igualdade",
  iconeTrilha: "🎇",
  bncc: ["EF07FI06"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "1789 — o mundo racha ao meio.",
    mapaUrl: revolucao,
    imagemDestaqueUrl: revolucao,
    aurora:
      "Investigador, 14 de julho de 1789. Uma multidão em Paris invade a Bastilha e derruba, em uma tarde, mil anos de monarquia absoluta. Não é só uma revolta: é FILOSOFIA VIRANDO LEI. Rousseau, Locke, Voltaire e Montesquieu vinham escrevendo há décadas sobre LIBERDADE, IGUALDADE e FRATERNIDADE. Agora essas palavras viram gritos nas ruas e, poucos meses depois, viram um DOCUMENTO que muda tudo: a Declaração dos Direitos do Homem e do Cidadão.",
    falaFinal:
      "Nesta aula: como o iluminismo derrubou o Antigo Regime e fundou os direitos humanos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Antes de 1789, na França, a maioria das pessoas…",
    opcoes: [
      {
        id: "sem-direitos",
        titulo: "NÃO tinha direitos iguais",
        subtitulo: "clero e nobreza pagavam pouco imposto; povo pagava tudo",
        emoji: "😔",
        cor: "from-red-400 to-rose-600",
      },
      {
        id: "iguais",
        titulo: "Já tinha direitos iguais garantidos por lei",
        subtitulo: "todos votavam e pagavam impostos proporcionais",
        emoji: "🗳️",
        cor: "from-lime-400 to-green-600",
      },
    ],
    respostaCerta: "sem-direitos",
    feedbackAcerto:
      "Isso. No Antigo Regime, a França era dividida em 3 ESTADOS: 1º (clero), 2º (nobreza), 3º (o resto, ou seja, 96% da população). Só o 3º pagava impostos pesados. Injustiça estrutural.",
    feedbackErro:
      "Nada disso. A França do Antigo Regime era brutalmente desigual — clero e nobreza tinham privilégios; o povo pagava a conta.",
    falaFinal: "Antigo Regime = desigualdade legal. A revolução tenta acabar com ela.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-lema da revolução.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "liberdade",
        capa: "1. Liberdade",
        emoji: "🕊️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "LIBERDADE, no sentido iluminista, é PODER FAZER TUDO QUE NÃO PREJUDIQUE O OUTRO. É liberdade de expressão, de religião, de imprensa, de reunião. Não é 'fazer o que quiser'; é agir sem que ninguém (nem o Estado nem o outro) invada seu espaço.",
        exemplo:
          "Ex.: você pode falar o que pensa (expressão), escolher sua religião (crença), reunir-se com amigos (associação). O Estado NÃO pode proibir sem motivo legítimo.",
        fotoUrl: liberdade,
      },
      {
        id: "igualdade",
        capa: "2. Igualdade",
        emoji: "⚖️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "IGUALDADE, na Declaração, significa IGUALDADE PERANTE A LEI: todos os cidadãos são julgados pelos mesmos critérios, sem privilégio de nascimento ou classe. Acaba o mundo em que nobre paga menos imposto e escapa da cadeia. Ninguém está acima da lei.",
        exemplo:
          "Ex.: se um empresário rico e um trabalhador cometem o mesmo crime, ambos respondem pela mesma lei. Nada de tribunais separados por classe.",
        fotoUrl: declaracao,
      },
      {
        id: "fraternidade",
        capa: "3. Fraternidade",
        emoji: "🤝",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "FRATERNIDADE é o LAÇO CÍVICO entre cidadãos: reconhecer que somos IRMÃOS em direitos, apesar das diferenças. É a base da SOLIDARIEDADE — cuidar do outro como parte da mesma comunidade humana. Sem fraternidade, liberdade vira egoísmo e igualdade vira frieza.",
        exemplo:
          "Ex.: SUS, escola pública, políticas sociais — todos apoiam-se na ideia iluminista de fraternidade cidadã.",
        fotoUrl: revolucao,
      },
    ],
    falaFinal: "Liberdade, igualdade, fraternidade. Tripé da modernidade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da revolução. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: revolucao,
    pontos: [
      {
        id: "iluminismo",
        x: 22,
        y: 34,
        emoji: "💡",
        cor: "from-amber-500 to-orange-700",
        titulo: "Séc. XVIII — o Iluminismo prepara o terreno",
        texto:
          "Voltaire ataca a intolerância religiosa. Montesquieu propõe a SEPARAÇÃO DOS PODERES (Legislativo, Executivo, Judiciário). Rousseau defende a SOBERANIA POPULAR. Enciclopédia distribui saber científico. O terreno intelectual fica pronto pra explosão política.",
        fotoUrl: liberdade,
      },
      {
        id: "bastilha",
        x: 74,
        y: 30,
        emoji: "🏰",
        cor: "from-red-500 to-rose-700",
        titulo: "14/07/1789 — queda da Bastilha",
        texto:
          "Multidão parisiense invade a prisão símbolo da monarquia absoluta. Data vira feriado nacional francês até hoje (14 juillet). Não foi só um ataque a uma prisão: foi o começo do fim do Antigo Regime na França.",
        fotoUrl: revolucao,
      },
      {
        id: "declaracao",
        x: 28,
        y: 70,
        emoji: "📜",
        cor: "from-sky-500 to-blue-700",
        titulo: "26/08/1789 — Declaração dos Direitos do Homem",
        texto:
          "Assembleia proclama: 'Os homens nascem e permanecem LIVRES E IGUAIS em direitos'. 17 artigos que estabelecem liberdade, igualdade, propriedade, segurança, resistência à opressão, separação de poderes. Base direta de todos os documentos de direitos humanos posteriores.",
        fotoUrl: declaracao,
      },
      {
        id: "legado",
        x: 76,
        y: 70,
        emoji: "🌍",
        cor: "from-emerald-500 to-teal-700",
        titulo: "1948 — Declaração Universal dos Direitos Humanos",
        texto:
          "Depois de 2 guerras mundiais, a ONU adota a DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS (1948), herdeira direta da francesa de 1789. Cada artigo é filosofia iluminista transformada em compromisso internacional. Base da Constituição brasileira de 1988.",
        fotoUrl: revolucao,
      },
    ],
    falaFinal:
      "Iluminismo → Bastilha → Declaração → ONU. Filosofia vira lei mundial.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O Antigo Regime francês dividia a sociedade em…",
        fotoUrl: revolucao,
        cards: [
          {
            id: "tres",
            emoji: "3️⃣",
            titulo: "3 estados: clero, nobreza e Terceiro Estado (o povo)",
            cor: "from-amber-500 to-orange-700",
          },
          {
            id: "dois",
            emoji: "2️⃣",
            titulo: "Só 2 estados: ricos e pobres",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "iguais",
            emoji: "🟰",
            titulo: "Cidadãos todos iguais",
            cor: "from-lime-400 to-green-600",
          },
        ],
        correta: "tres",
        feedbackAcerto:
          "Isso. 3 Estados. Os dois primeiros (5% da população) tinham privilégios. O Terceiro (95%) pagava a conta.",
        feedbackErro:
          "Cidadãos iguais só depois de 1789. Antes eram 3 Estados desiguais — a injustiça que a Revolução destruiu.",
      },
      {
        id: "q2",
        pergunta: "'Liberdade', na Declaração de 1789, é…",
        fotoUrl: declaracao,
        cards: [
          {
            id: "nao-prejuizo",
            emoji: "🕊️",
            titulo: "Fazer tudo o que NÃO prejudique o outro",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "tudo",
            emoji: "🌀",
            titulo: "Fazer literalmente qualquer coisa, sem limite",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "seguir-rei",
            emoji: "👑",
            titulo: "Obedecer sem questionar o soberano",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "nao-prejuizo",
        feedbackAcerto:
          "Isso. Liberdade tem limite: o outro. Fora disso, é sagrada.",
        feedbackErro:
          "Não é fazer tudo nem obedecer cegamente. Liberdade = fazer o que NÃO prejudica o outro.",
      },
      {
        id: "q3",
        pergunta: "MONTESQUIEU é lembrado por propor…",
        fotoUrl: liberdade,
        cards: [
          {
            id: "separacao",
            emoji: "⚖️",
            titulo: "A separação dos 3 poderes (Legislativo, Executivo, Judiciário)",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "vontade-geral",
            emoji: "🤝",
            titulo: "A vontade geral (isso é Rousseau)",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "leviatã",
            emoji: "🐉",
            titulo: "O Estado Leviatã (isso é Hobbes)",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "separacao",
        feedbackAcerto:
          "Isso. Legislativo faz a lei, Executivo aplica, Judiciário julga. Trava clássica contra abuso.",
        feedbackErro:
          "Vontade geral é Rousseau; Leviatã é Hobbes. Montesquieu = SEPARAÇÃO DOS 3 PODERES.",
      },
    ],
    falaFinal: "Radar iluminista calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A Constituição de 1988 herda a Declaração de 1789. Escolha 5 estados com Assembleias Legislativas de forte atuação em direitos humanos.",
    instrucao: "Acenda 5 estados com pauta forte de direitos humanos",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "BA", "PE"],
      pergunta:
        "Quais 5 estados têm forte atuação institucional em direitos humanos no Brasil?",
    },
    falaFinal:
      "SP, RJ, MG, BA, PE. Iluminismo vira lei viva, dois séculos depois, no Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Cronologia da revolução em 5 marcos. Coloque em ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como o Antigo Regime caiu?",
    paradas: [
      {
        id: "iluminismo",
        emoji: "💡",
        rotulo: "1. Iluminismo (séc. XVIII)",
        descricao: "Voltaire, Montesquieu, Rousseau — ideias circulam pela Europa.",
      },
      {
        id: "crise",
        emoji: "🥖",
        rotulo: "2. Crise econômica na França",
        descricao: "Impostos pesados, fome, dívida do rei, revolta silenciosa.",
      },
      {
        id: "bastilha",
        emoji: "🏰",
        rotulo: "3. 14/07/1789 — queda da Bastilha",
        descricao: "Símbolo da monarquia absoluta cai. Começa a Revolução.",
      },
      {
        id: "declaracao",
        emoji: "📜",
        rotulo: "4. 26/08/1789 — Declaração dos Direitos",
        descricao: "Liberdade, igualdade e fraternidade viram documento.",
      },
      {
        id: "onu",
        emoji: "🌍",
        rotulo: "5. 1948 — Declaração Universal (ONU)",
        descricao: "Direitos humanos ganham dimensão global.",
      },
    ],
    ordemCerta: ["iluminismo", "crise", "bastilha", "declaracao", "onu"],
    feedbackAcerto:
      "Isso. Iluminismo → crise → Bastilha → Declaração francesa → ONU. Ideia percorreu 200 anos.",
    feedbackErro:
      "Ordem: Iluminismo → crise → 14/07 → Declaração 26/08 → ONU (1948).",
    falaFinal: "5 marcos. Filosofia virando direitos humanos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 6 — Liberdade e Igualdade",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No séc. XVIII, o Iluminismo espalha ideias novas: liberdade, igualdade, separação dos poderes, tolerância religiosa, soberania popular. Voltaire, Montesquieu e Rousseau preparam o terreno.",
        chaves: ["Iluminismo", "ideias"],
      },
      {
        id: "p2",
        texto:
          "Em 14 de julho de 1789, o povo de Paris invade a Bastilha e derruba, em uma tarde, mil anos de monarquia absoluta. Começa a Revolução Francesa.",
        chaves: ["Bastilha", "Revolução"],
      },
      {
        id: "p3",
        texto:
          "Poucos meses depois, a Assembleia proclama a DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO: 'Os homens nascem e permanecem livres e iguais em direitos'. Nasce o lema LIBERDADE, IGUALDADE, FRATERNIDADE.",
        chaves: ["Declaração", "direitos"],
      },
      {
        id: "p4",
        texto:
          "150 anos depois, em 1948, a ONU adota a DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS, herdeira direta da francesa. A Constituição brasileira de 1988 traz esses princípios pro nosso país.",
        chaves: ["ONU", "Constituição"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo LIBERDADE, IGUALDADE OU FRATERNIDADE? Classifique cada princípio real!",
    instrucao: "⏱️ Qual princípio se aplica?",
    duracaoSegundos: 15,
    pecas: [
      { id: "liberdade", emoji: "🕊️", rotulo: "Liberdade" },
      { id: "igualdade", emoji: "⚖️", rotulo: "Igualdade" },
      { id: "fraternidade", emoji: "🤝", rotulo: "Fraternidade" },
      { id: "todos", emoji: "🌟", rotulo: "Os 3 juntos" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Todos podem expressar sua opinião'",
          emoji: "🗣️",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Liberdade de expressão",
          emoji: "📢",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Direito clássico do iluminismo.",
        pecaCertaId: "liberdade",
        feedbackAcerto: "Isso. LIBERDADE — pilar iluminista.",
        feedbackErro: "É LIBERDADE — expressão sem censura arbitrária.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'A lei é a mesma pro CEO e pro entregador'",
          emoji: "⚖️",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Igualdade perante a lei",
          emoji: "🧑‍⚖️",
          cor: "from-yellow-400 to-orange-600",
        },
        contexto: "Fim do privilégio de classe.",
        pecaCertaId: "igualdade",
        feedbackAcerto: "Isso. IGUALDADE — ninguém está acima da lei.",
        feedbackErro: "É IGUALDADE — todos julgados pelas mesmas regras.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'SUS atende quem precisa, sem cobrar'",
          emoji: "🏥",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Cuidado com o outro como cidadão",
          emoji: "🤝",
          cor: "from-teal-400 to-cyan-600",
        },
        contexto: "Sistema de saúde universal e gratuito.",
        pecaCertaId: "fraternidade",
        feedbackAcerto: "Isso. FRATERNIDADE — solidariedade entre cidadãos.",
        feedbackErro: "É FRATERNIDADE — laço cívico feito política pública.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Todos podem escolher sua religião'",
          emoji: "🕌",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Liberdade religiosa",
          emoji: "⛪",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Voltaire seria fã dessa.",
        pecaCertaId: "liberdade",
        feedbackAcerto: "Isso. LIBERDADE — de crença.",
        feedbackErro: "É LIBERDADE — de escolher religião ou não seguir nenhuma.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Mulheres e homens votam desde 1932'",
          emoji: "🗳️",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Igualdade de gênero no voto",
          emoji: "👩‍🦰",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Fim do voto reservado a homens.",
        pecaCertaId: "igualdade",
        feedbackAcerto: "Isso. IGUALDADE — voto universal, sem distinção de gênero.",
        feedbackErro: "É IGUALDADE — mesmo direito político para todos.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Constituição de 1988 no Brasil'",
          emoji: "📜",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Liberdade + igualdade + fraternidade juntas",
          emoji: "🌟",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Um documento que sintetiza os 3 princípios.",
        pecaCertaId: "todos",
        feedbackAcerto:
          "Perfeito. OS 3 JUNTOS — nossa Constituição é herdeira direta do lema francês.",
        feedbackErro:
          "É OS 3 JUNTOS — Constituição de 88 sintetiza liberdade, igualdade e fraternidade.",
      },
    ],
    falaFinal:
      "6 casos. Você já lê a política brasileira com olhos iluministas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Antes e depois de 1789.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "antes",
        rotulo: "ANTES (Antigo Regime)",
        emoji: "👑",
        percentual: 50,
        cor: "#94a3b8",
        descricao:
          "3 Estados desiguais. Nobreza e clero (5%) tinham privilégios; povo (95%) pagava impostos. Monarquia absoluta. Sem liberdade de expressão nem de religião. Sem direitos garantidos.",
        exemplos: ["👑 Rei absoluto", "😔 Povo sem direitos", "💰 Impostos só pro povo"],
      },
      {
        id: "depois",
        rotulo: "DEPOIS (1789 em diante)",
        emoji: "🕊️",
        percentual: 50,
        cor: "#84cc16",
        descricao:
          "Direitos iguais perante a lei. Liberdade de expressão, religião, reunião. Soberania popular. Separação dos 3 poderes. Base dos direitos humanos modernos, herdada por 200 anos.",
        exemplos: ["📜 Constituição", "🗳️ Voto popular", "⚖️ Igualdade jurídica"],
      },
    ],
    falaFinal:
      "Antes e depois. Filosofia iluminista rasgou a história em duas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia CIDADÃO ILUMINISTA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta:
          "A DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO (1789) proclama que os homens nascem…",
        opcoes: [
          {
            id: "a",
            texto: "Livres e IGUAIS em direitos",
            correta: true,
          },
          { id: "b", texto: "Naturalmente divididos em classes", correta: false },
          { id: "c", texto: "Servos do rei", correta: false },
        ],
        feedbackAcerto:
          "Isso. Artigo 1º da Declaração — base de todo direito humano contemporâneo.",
        feedbackErro:
          "A Declaração DIZ o oposto do Antigo Regime: livres e iguais, não divididos em classes.",
      },
      {
        id: "av2",
        pergunta:
          "MONTESQUIEU é lembrado especialmente por propor…",
        opcoes: [
          {
            id: "a",
            texto:
              "A separação dos 3 poderes (Legislativo, Executivo, Judiciário)",
            correta: true,
          },
          { id: "b", texto: "O Leviatã absoluto", correta: false },
          { id: "c", texto: "O anel de Giges", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Separação de poderes = trava clássica contra tirania.",
        feedbackErro:
          "Leviatã é Hobbes; anel de Giges é Platão. Montesquieu = SEPARAÇÃO DOS 3 PODERES.",
      },
      {
        id: "av3",
        pergunta:
          "'LIBERDADE', no sentido iluminista, é…",
        opcoes: [
          { id: "a", texto: "Fazer literalmente qualquer coisa, sem limite", correta: false },
          {
            id: "b",
            texto:
              "Fazer tudo o que NÃO prejudique o outro (Declaração, art. 4º)",
            correta: true,
          },
          { id: "c", texto: "Obedecer sem questionar o rei", correta: false },
        ],
        feedbackAcerto:
          "Isso. Liberdade tem UM limite: o outro. Fora disso, é sagrada.",
        feedbackErro:
          "Não é 'tudo' nem obedecer cegamente. Liberdade tem UM limite: o direito do outro.",
      },
    ],
    selo: {
      nome: "Cidadão Iluminista",
      subtitulo: "Insígnia da Liberdade, Igualdade e Fraternidade",
      emoji: "🎇",
      cor: "from-red-400 to-blue-700",
    },
    falaFinal:
      "Insígnia conquistada! Você agora entende a matriz filosófica dos direitos que goza hoje.",
  },

  recompensa: { xp: 410, moedas: 305, medalha: "Cidadão Iluminista" },
};
