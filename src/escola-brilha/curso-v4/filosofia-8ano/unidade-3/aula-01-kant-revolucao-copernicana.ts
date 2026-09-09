import type { AulaGeoV1 } from "../../types";
import { url as kant } from "@/assets/filosofia-8ano/u3-kant.jpg.asset.json";
import { url as imperativo } from "@/assets/filosofia-8ano/u3-imperativo.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 3 · Aula 01
 * "A Revolução Copernicana de Kant" — EF08FI03 (autoral)
 * Tema: Kant — síntese empirismo/racionalismo, imperativo categórico.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-kant-revolucao-copernicana",
  titulo: "A Revolução Copernicana da Filosofia",
  iconeTrilha: "🌌",
  bncc: ["EF08FI03"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: kant,
    imagemDestaqueUrl: kant,
    aurora:
      "Investigador, é a cidade de Königsberg, 1781. Um filósofo tão pontual que os vizinhos acertam o relógio pela sua caminhada acaba de publicar um livro que vira a filosofia de cabeça pra baixo: a 'Crítica da Razão Pura'. Immanuel Kant propõe uma síntese ousada entre os empiristas e os racionalistas: 'a experiência dá o conteúdo, mas nossa mente dá as FORMAS que organizam esse conteúdo'. E na moral, ele lança uma bomba: existe uma lei universal que a razão descobre sozinha — o IMPERATIVO CATEGÓRICO.",
    falaFinal: "Nesta aula: revolução copernicana, coisa-em-si × fenômeno, e o imperativo categórico.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando você olha o mundo, o que você vê?",
    pergunta: "A realidade que percebo é…",
    opcoes: [
      { id: "crua", titulo: "O MUNDO CRU", subtitulo: "exatamente como ele é em si mesmo", emoji: "🌍", cor: "from-emerald-400 to-teal-600" },
      { id: "filtrada", titulo: "O MUNDO FILTRADO", subtitulo: "pela minha mente (espaço, tempo, causalidade)", emoji: "🔮", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "filtrada",
    feedbackAcerto: "Boa. Kant: a mente NÃO copia o mundo — ela o ORGANIZA com filtros próprios (espaço, tempo, categorias).",
    feedbackErro: "Cuidado: pra Kant, é impossível ver o mundo 'cru'. Espaço, tempo e causalidade são LENTES da mente que sempre entram no meio.",
    falaFinal: "A mente não é espelho — é filtro ativo. Isso é a revolução copernicana.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar em Kant.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "copernicana",
        capa: "1. Revolução copernicana",
        emoji: "🌌",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "REVOLUÇÃO COPERNICANA (na filosofia) é a virada que Kant propõe: até ele, filósofos pensavam que a mente devia se adaptar ao mundo (como se copiasse a realidade). Kant inverte: é o MUNDO que aparece pra nós adaptado às formas da nossa mente. Igual Copérnico inverteu Terra × Sol, Kant inverte mente × mundo.",
        exemplo: "Ex.: você não 'descobre' que o tempo existe olhando o relógio — o tempo é uma FORMA da sua mente que faz o relógio ser possível pra você.",
        fotoUrl: kant,
      },
      {
        id: "fenomeno-numeno",
        capa: "2. Fenômeno × Coisa-em-si",
        emoji: "🔮",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "FENÔMENO é o mundo COMO APARECE pra gente — já filtrado por espaço, tempo e categorias mentais. COISA-EM-SI (númeno) é o mundo COMO É em si mesmo, independente da nossa mente. Kant diz: só conhecemos fenômenos. A coisa-em-si existe, mas fica pra sempre inatingível.",
        exemplo: "Ex.: você vê uma maçã vermelha. O fenômeno é a maçã percebida. A coisa-em-si é o que a maçã 'é' sem nenhum olho pra vê-la — Kant diz: não dá pra saber.",
        fotoUrl: kant,
      },
      {
        id: "imperativo",
        capa: "3. Imperativo categórico",
        emoji: "⚖️",
        cor: "from-amber-400 to-orange-600",
        conteudo:
          "IMPERATIVO CATEGÓRICO é a lei moral universal que Kant descobre pela razão pura: 'aja de tal modo que a máxima da sua ação possa se tornar LEI UNIVERSAL'. Ou seja: antes de fazer algo, pergunte — 'e se todo mundo fizesse isso?'. Se o mundo desabaria, a ação é imoral.",
        exemplo: "Ex.: mentir. Se TODO MUNDO mentisse sempre, ninguém acreditaria em ninguém — mentir viraria impossível. Logo, mentir é imoral.",
        fotoUrl: imperativo,
      },
    ],
    falaFinal: "Revolução copernicana × fenômeno × imperativo. As 3 alavancas de Kant.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da revolução kantiana.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: kant,
    pontos: [
      {
        id: "impasse",
        x: 24,
        y: 30,
        emoji: "⚔️",
        cor: "from-slate-500 to-gray-700",
        titulo: "O impasse antes de Kant",
        texto:
          "Empiristas (Hume) e racionalistas (Leibniz) estavam num beco: se tudo vem dos sentidos, a matemática vira só hábito. Se tudo vem da razão, como explicar a ciência experimental? Kant acorda pra esse problema e passa 10 anos calado até publicar a solução.",
        fotoUrl: kant,
      },
      {
        id: "sintese",
        x: 74,
        y: 30,
        emoji: "🌉",
        cor: "from-sky-500 to-blue-700",
        titulo: "1781 — a grande síntese",
        texto:
          "Kant propõe: a experiência dá o CONTEÚDO (as sensações), mas nossa mente dá as FORMAS (espaço, tempo, categorias como causa, quantidade, qualidade). Nem tábula rasa pura, nem ideias inatas puras — os dois trabalham juntos.",
        fotoUrl: kant,
      },
      {
        id: "limite",
        x: 26,
        y: 70,
        emoji: "🚧",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "Fenômeno × coisa-em-si",
        texto:
          "Se toda experiência passa pelo filtro da mente, então só conhecemos o MUNDO FILTRADO (fenômeno). O mundo 'em si mesmo' (coisa-em-si) fica pra sempre inatingível. A ciência é possível — mas dentro de limites bem definidos.",
        fotoUrl: kant,
      },
      {
        id: "moral",
        x: 76,
        y: 70,
        emoji: "⚖️",
        cor: "from-amber-400 to-orange-600",
        titulo: "1785 — o imperativo categórico",
        texto:
          "Na moral, Kant publica a 'Fundamentação da Metafísica dos Costumes': aja de modo que sua máxima possa virar lei universal. E: trate o ser humano SEMPRE como FIM, nunca só como MEIO. É o alicerce dos direitos humanos modernos.",
        fotoUrl: imperativo,
      },
    ],
    falaFinal: "Impasse → síntese → limites → moral universal. Kant em 4 passos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra calibrar o radar kantiano.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "REVOLUÇÃO COPERNICANA de Kant significa que…",
        fotoUrl: kant,
        cards: [
          { id: "mente-organiza", emoji: "🔮", titulo: "É a mente que organiza o mundo (não o contrário)", cor: "from-sky-500 to-blue-700" },
          { id: "terra-gira", emoji: "🌍", titulo: "A Terra gira em torno do Sol", cor: "from-amber-400 to-orange-600" },
          { id: "deus-centro", emoji: "✨", titulo: "Deus é o centro do universo", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "mente-organiza",
        feedbackAcerto: "Isso. Igual Copérnico inverteu Terra × Sol, Kant inverte mente × mundo.",
        feedbackErro: "Não é astronomia — é INVERSÃO filosófica: a mente organiza o mundo com suas formas.",
      },
      {
        id: "q2",
        pergunta: "COISA-EM-SI (númeno) é…",
        fotoUrl: kant,
        cards: [
          { id: "inatingivel", emoji: "🚧", titulo: "O mundo como é em si, inatingível pela nossa mente", cor: "from-purple-500 to-fuchsia-700" },
          { id: "objeto-caro", emoji: "💎", titulo: "Um objeto valioso", cor: "from-amber-400 to-orange-600" },
          { id: "espirito", emoji: "👻", titulo: "Um espírito invisível", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "inatingivel",
        feedbackAcerto: "Perfeito. Só conhecemos fenômenos — a coisa-em-si fica além do nosso alcance.",
        feedbackErro: "Coisa-em-si = mundo SEM filtro mental. Existe, mas Kant diz: inalcançável pra nós.",
      },
      {
        id: "q3",
        pergunta: "IMPERATIVO CATEGÓRICO ordena que…",
        fotoUrl: imperativo,
        cards: [
          { id: "universal", emoji: "⚖️", titulo: "Aja como se sua máxima pudesse virar lei universal", cor: "from-amber-400 to-orange-600" },
          { id: "prazer", emoji: "🍰", titulo: "Faça o que te dá prazer", cor: "from-pink-400 to-rose-600" },
          { id: "obedeca", emoji: "👮", titulo: "Obedeça sempre a autoridade", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "universal",
        feedbackAcerto: "Isso. 'E se todo mundo fizesse isso?' — teste kantiano.",
        feedbackErro: "Não é prazer nem obediência: é UNIVERSALIDADE. Só é moral o que TODOS poderiam fazer.",
      },
    ],
    falaFinal: "3 acertos = radar kantiano calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Kant é uma das referências mais estudadas em Filosofia no Brasil. Acenda 5 estados com forte tradição em ética kantiana e direitos humanos.",
    instrucao: "Acenda 5 estados-referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "DF"],
      pergunta: "Quais 5 estados/DF abrigam programas de referência em Kant e Direitos Humanos (USP, UFRJ, UFMG, UFRGS, UnB)?",
    },
    falaFinal: "SP, RJ, MG, RS e DF — cinco polos onde a moral kantiana é lida e criticada.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como aplicar o imperativo categórico a uma decisão. 5 passos.",
    instrucao: "Toque na ordem correta",
    pergunta: "Antes de agir:",
    paradas: [
      { id: "acao", emoji: "🤔", rotulo: "1. Pense na AÇÃO que quer fazer", descricao: "Ex.: 'mentir pra escapar de uma prova que não estudei'." },
      { id: "maxima", emoji: "📝", rotulo: "2. Formule a MÁXIMA (regra por trás)", descricao: "'Sempre que eu quiser me livrar de algo difícil, posso mentir'." },
      { id: "universalize", emoji: "🌍", rotulo: "3. Universalize", descricao: "'E se TODO MUNDO fizesse isso, sempre que quisesse?'." },
      { id: "teste", emoji: "🧪", rotulo: "4. Teste — o mundo funciona?", descricao: "Se todos mentissem sempre, ninguém acreditaria em ninguém — a mentira ficaria inútil." },
      { id: "decida", emoji: "⚖️", rotulo: "5. Se colapsa, é imoral", descricao: "Como colapsa (contradição prática), a ação é imoral. Não faça." },
    ],
    ordemCerta: ["acao", "maxima", "universalize", "teste", "decida"],
    feedbackAcerto: "Exato. Ação → máxima → universaliza → testa → decide. Método kantiano em 5 passos.",
    feedbackErro: "A ordem é: pensar a ação, formular a máxima, universalizar, testar e decidir.",
    falaFinal: "5 passos. Toda a ética kantiana em uma escada prática.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 3 — A revolução copernicana",
    paragrafos: [
      { id: "p1", texto: "Em 1781, Immanuel Kant publica a 'Crítica da Razão Pura' e faz o que chama de sua REVOLUÇÃO COPERNICANA: não é a mente que se ajusta ao mundo — é o mundo que aparece pra gente ajustado às formas da mente (espaço, tempo, categorias).", chaves: ["Kant", "copernicana"] },
      { id: "p2", texto: "Consequência: só conhecemos o FENÔMENO (mundo filtrado pela mente). A COISA-EM-SI (o mundo como é em si mesmo) existe, mas fica pra sempre além do nosso alcance. A ciência é possível — dentro de limites.", chaves: ["fenômeno", "coisa-em-si"] },
      { id: "p3", texto: "Na moral, Kant descobre o IMPERATIVO CATEGÓRICO: aja de tal modo que a máxima da sua ação possa se tornar LEI UNIVERSAL. Se todo mundo pudesse fazer o mesmo sem o mundo desabar, é moral. Se não, é imoral.", chaves: ["imperativo", "universal"] },
      { id: "p4", texto: "Segunda formulação: TRATE O SER HUMANO SEMPRE COMO FIM, nunca só como meio. Ninguém pode ser usado como instrumento. É o alicerce filosófico dos direitos humanos modernos, escritos 160 anos depois em 1948.", chaves: ["fim", "direitos humanos"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TRIBUNAL DE KANT! Cada caso passa (ou não) no teste da universalidade?",
    instrucao: "⏱️ Universalizável ou não?",
    duracaoSegundos: 15,
    pecas: [
      { id: "moral", emoji: "✅", rotulo: "Passa no teste (moral)" },
      { id: "imoral", emoji: "❌", rotulo: "Contradição (imoral)" },
      { id: "meio", emoji: "🚫", rotulo: "Usa pessoa como MEIO" },
      { id: "fim", emoji: "🤝", rotulo: "Trata como FIM" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Vou mentir sempre que for conveniente'", emoji: "🤥", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Se todos fizessem, ninguém acreditaria em ninguém", emoji: "🌀", cor: "from-red-400 to-orange-600" },
        contexto: "Universalizar a mentira colapsa a comunicação.",
        pecaCertaId: "imoral",
        feedbackAcerto: "Isso. IMORAL — universalizar a mentira destrói a própria mentira.",
        feedbackErro: "É IMORAL: se todos mentissem, ninguém acreditaria — contradição prática.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Vou ajudar quem precisa quando puder'", emoji: "🤝", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Se todos ajudassem, o mundo funcionaria bem", emoji: "🌍", cor: "from-emerald-400 to-teal-600" },
        contexto: "Universalizar a ajuda mútua fortalece a sociedade.",
        pecaCertaId: "moral",
        feedbackAcerto: "Perfeito. MORAL — passa no teste de universalidade.",
        feedbackErro: "É MORAL: ajudar universalizado só melhora o mundo.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Vou usar meu amigo só pra copiar a prova dele'", emoji: "📝", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Trata pessoa como ferramenta", emoji: "🔧", cor: "from-red-400 to-orange-600" },
        contexto: "Ninguém pode ser usado como puro instrumento.",
        pecaCertaId: "meio",
        feedbackAcerto: "Isso. Usa como MEIO — viola a 2ª fórmula do imperativo.",
        feedbackErro: "É MEIO: o amigo virou ferramenta pra sua nota — Kant proíbe.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Vou pedir ajuda sinceramente, respeitando o tempo do outro'", emoji: "🙏", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Trata o outro como pessoa livre", emoji: "🤝", cor: "from-emerald-400 to-teal-600" },
        contexto: "Pedir com respeito trata o outro como FIM.",
        pecaCertaId: "fim",
        feedbackAcerto: "Perfeito. Trata como FIM — respeita a liberdade do outro.",
        feedbackErro: "É FIM: pedir sinceramente respeita o outro como pessoa livre.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Vou fazer promessa que sei que não vou cumprir'", emoji: "🤞", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Promessa falsa universal destrói a promessa", emoji: "💥", cor: "from-red-400 to-orange-600" },
        contexto: "Se todos prometessem sem cumprir, promessa perderia sentido.",
        pecaCertaId: "imoral",
        feedbackAcerto: "Isso. IMORAL — universalizar promessa falsa mata a promessa.",
        feedbackErro: "É IMORAL: promessa falsa universalizada colapsa em contradição.",
      },
      {
        id: "r6",
        municipioA: { nome: "'Vou pagar o combinado ao trabalhador, com dignidade'", emoji: "💼", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Trata como pessoa completa, não só mão de obra", emoji: "🌟", cor: "from-emerald-400 to-teal-600" },
        contexto: "Pagar com dignidade trata como FIM.",
        pecaCertaId: "fim",
        feedbackAcerto: "Perfeito. Trata como FIM — a pessoa é mais que ferramenta de trabalho.",
        feedbackErro: "É FIM: pagar com dignidade respeita o trabalhador como pessoa.",
      },
    ],
    falaFinal: "6 casos, 4 vereditos. Tribunal de Kant fechado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as 2 revoluções de Kant.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "conhecimento",
        rotulo: "REVOLUÇÃO DO CONHECIMENTO",
        emoji: "🌌",
        percentual: 50,
        cor: "#38bdf8",
        descricao:
          "A mente organiza o mundo com formas próprias (espaço, tempo, categorias). Não conhecemos a coisa-em-si — só o fenômeno. A ciência é possível DENTRO desses limites.",
        exemplos: ["🔮 Fenômeno × coisa-em-si", "⏰ Espaço e tempo como formas mentais", "🧪 Ciência dentro dos limites"],
      },
      {
        id: "moral",
        rotulo: "REVOLUÇÃO DA MORAL",
        emoji: "⚖️",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "A razão descobre uma lei moral universal: aja de modo que sua máxima possa virar lei universal, e trate o ser humano sempre como fim, nunca só como meio. Base filosófica dos direitos humanos.",
        exemplos: ["⚖️ Imperativo categórico", "🤝 Pessoa como fim", "🌍 Direitos Humanos (1948)"],
      },
    ],
    falaFinal: "Conhecimento × Moral. Duas revoluções em um só filósofo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia FILÓSOFO CRÍTICO.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "REVOLUÇÃO COPERNICANA (Kant) inverte…",
        opcoes: [
          { id: "a", texto: "A relação: não é a mente que se ajusta ao mundo, é o mundo que aparece ajustado às formas da mente", correta: true },
          { id: "b", texto: "A relação Terra × Sol", correta: false },
          { id: "c", texto: "A ordem dos dias da semana", correta: false },
        ],
        feedbackAcerto: "Isso. Inversão filosófica: mente ATIVA, não passiva.",
        feedbackErro: "É filosófica: a mente organiza o mundo, o mundo não se copia sozinho na mente.",
      },
      {
        id: "av2",
        pergunta: "Só conhecemos o FENÔMENO porque…",
        opcoes: [
          { id: "a", texto: "Toda experiência passa pelo filtro das formas mentais (espaço, tempo, categorias)", correta: true },
          { id: "b", texto: "Deus só nos deixa ver a superfície das coisas", correta: false },
          { id: "c", texto: "Os cientistas ainda não descobriram tudo", correta: false },
        ],
        feedbackAcerto: "Perfeito. A coisa-em-si fica pra sempre inatingível — só temos fenômenos.",
        feedbackErro: "Não é religião nem falta de ciência: é ESTRUTURAL — a mente sempre filtra.",
      },
      {
        id: "av3",
        pergunta: "IMPERATIVO CATEGÓRICO ordena que…",
        opcoes: [
          { id: "a", texto: "Aja como se sua máxima pudesse ser lei universal, e trate a pessoa sempre como FIM", correta: true },
          { id: "b", texto: "Faça o que te der mais prazer imediato", correta: false },
          { id: "c", texto: "Obedeça a autoridade sem questionar", correta: false },
        ],
        feedbackAcerto: "Isso. Universalidade + pessoa como fim = base dos direitos humanos.",
        feedbackErro: "Não é prazer nem obediência cega: é UNIVERSALIDADE + DIGNIDADE da pessoa.",
      },
    ],
    selo: { nome: "Filósofo Crítico", subtitulo: "Insígnia da Revolução Copernicana", emoji: "🌌", cor: "from-sky-400 to-cyan-700" },
    falaFinal: "Insígnia conquistada! Você atravessou a revolução copernicana com Kant.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Filósofo Crítico" },
};
