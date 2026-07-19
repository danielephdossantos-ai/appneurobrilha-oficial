import type { AulaGeoV1 } from "../../types";
import { url as ritos } from "@/assets/ensino-religioso-7ano/u5-ritos-coletivos.jpg.asset.json";
import { url as origens } from "@/assets/ensino-religioso-7ano/u3-origens-antigas.jpg.asset.json";
import { url as simbolos } from "@/assets/ensino-religioso-7ano/u4-simbolos.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 4 · Aula 01
 * "Ritos e Mitos" — EF07ER04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ritos-mitos",
  titulo: "Ritos e Mitos",
  iconeTrilha: "🕯️",
  bncc: ["EF07ER04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: um jantar coletivo, silencioso, com centenas de pessoas.",
    mapaUrl: ritos,
    imagemDestaqueUrl: ritos,
    aurora:
      "Investigador, olha essa cena. Muçulmanos quebrando o jejum do Ramadã depois do pôr do sol. Não é um jantar comum — é RITO: gesto repetido, coletivo, com sentido além da comida. Ao mesmo tempo, contam uma HISTÓRIA: por que o profeta jejuou; como a compaixão pelos famintos foi revelada.",
    falaFinal:
      "RITO = o que se FAZ. MITO = o que se CONTA. Nenhuma tradição funciona sem os dois. Hoje a gente aprende a INTERPRETAR.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando uma comunidade repete um RITO por séculos, ela está...",
    pergunta: "Pra que serve o rito?",
    opcoes: [
      { id: "obrigacao", titulo: "Só cumprindo OBRIGAÇÃO", subtitulo: "por medo de castigo", emoji: "😨", cor: "from-slate-400 to-gray-600" },
      { id: "renovando", titulo: "RENOVANDO a memória coletiva", subtitulo: "e reafirmando quem é", emoji: "🔄", cor: "from-amber-400 to-orange-600" },
    ],
    respostaCerta: "renovando",
    feedbackAcerto: "Isso! Cada rito é uma memória VIVA — atualizada no corpo e na comunidade.",
    feedbackErro: "Não é medo. Rito é a comunidade RENOVANDO memória e identidade a cada geração.",
    falaFinal: "Rito = memória renovada com o corpo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "rito", capa: "1. Rito", emoji: "🕯️", cor: "from-amber-500 to-orange-700", conteudo: "RITO é um conjunto de gestos repetidos em ordem fixa, com sentido além da ação em si. Batizar, casar, jejuar, meditar em grupo — tudo rito.", exemplo: "Ex.: acender a vela do Shabat no judaísmo, todo sexta à noite, há mais de 3000 anos.", fotoUrl: ritos },
      { id: "mito", capa: "2. Mito", emoji: "📜", cor: "from-purple-500 to-fuchsia-700", conteudo: "MITO, no sentido religioso, NÃO é 'mentira'. É uma narrativa fundadora que explica origem, sentido e identidade — mesmo quando não é história literal.", exemplo: "Ex.: as narrativas de criação do mundo em Gênesis, no Popol Vuh maia, nos Vedas hindus.", fotoUrl: origens },
      { id: "interpretar", capa: "3. Interpretar", emoji: "🔍", cor: "from-sky-500 to-blue-700", conteudo: "INTERPRETAR um rito ou mito é perguntar: o que essa comunidade está DIZENDO com isso? Qual valor está sendo passado adiante?", exemplo: "Ex.: no Ramadã, o jejum diz 'compaixão pelos famintos' e 'disciplina espiritual'.", fotoUrl: simbolos },
    ],
    falaFinal: "Rito, mito, interpretar. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 grandes ritos e mitos do mundo. Toque em cada balão. Sem julgar — INTERPRETANDO.",
    instrucao: "Toque em cada balão",
    mapaUrl: ritos,
    pontos: [
      { id: "pascoa", x: 22, y: 30, emoji: "🍞", cor: "from-amber-500 to-orange-700", titulo: "PÁSCOA JUDAICA (Pessach)", texto: "RITO: jantar familiar com pão sem fermento e ervas amargas. MITO: relembra a fuga do Egito, a libertação da escravidão. INTERPRETAÇÃO: nenhum povo deve ser escravizado.", fotoUrl: ritos },
      { id: "batismo", x: 70, y: 30, emoji: "💧", cor: "from-sky-500 to-blue-700", titulo: "BATISMO CRISTÃO", texto: "RITO: mergulhar ou derramar água sobre a pessoa. MITO: rememora Jesus sendo batizado no rio Jordão. INTERPRETAÇÃO: começar vida nova, purificar-se, entrar na comunidade.", fotoUrl: simbolos },
      { id: "ramada", x: 30, y: 72, emoji: "🌙", cor: "from-emerald-500 to-green-700", titulo: "RAMADÃ ISLÂMICO", texto: "RITO: jejuar do amanhecer ao pôr do sol por 29-30 dias. MITO: o mês em que o Alcorão começou a ser revelado. INTERPRETAÇÃO: disciplina, empatia com os famintos, gratidão.", fotoUrl: origens },
      { id: "diwali", x: 76, y: 68, emoji: "🪔", cor: "from-orange-500 to-red-700", titulo: "DIWALI HINDU", texto: "RITO: acender fileiras de lâmpadas em casa por 5 noites. MITO: celebra a vitória da luz sobre a escuridão. INTERPRETAÇÃO: o bem prevalece; renovar esperança na comunidade.", fotoUrl: ritos },
    ],
    falaFinal: "4 ritos, 4 mitos, 4 lições. Interpretar é o segredo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "MITO religioso significa:", fotoUrl: origens, cards: [
        { id: "mentira", emoji: "🚫", titulo: "Mentira antiga", cor: "from-slate-400 to-gray-600" },
        { id: "fundador", emoji: "📜", titulo: "Narrativa fundadora que dá sentido", cor: "from-purple-500 to-fuchsia-700" },
        { id: "musica", emoji: "🎵", titulo: "Tipo de música", cor: "from-red-500 to-rose-700" },
      ], correta: "fundador", feedbackAcerto: "Isso! Mito NÃO é mentira. É narrativa que dá sentido à existência do grupo.", feedbackErro: "Mito religioso NÃO significa mentira. É narrativa FUNDADORA que dá sentido e identidade." },
      { id: "q2", pergunta: "O RITO do RAMADÃ (jejum) tem como uma das interpretações:", fotoUrl: ritos, cards: [
        { id: "punir", emoji: "😨", titulo: "Punir o corpo", cor: "from-slate-400 to-gray-600" },
        { id: "empatia", emoji: "❤️", titulo: "Sentir empatia por quem passa fome", cor: "from-emerald-500 to-green-700" },
        { id: "moda", emoji: "📱", titulo: "Moda passageira", cor: "from-red-500 to-rose-700" },
      ], correta: "empatia", feedbackAcerto: "Perfeito! Jejuar por escolha ajuda a lembrar de quem não escolhe passar fome.", feedbackErro: "Ramadã não é punição. Uma das interpretações centrais é EMPATIA com quem passa fome sem escolher." },
      { id: "q3", pergunta: "INTERPRETAR um rito é:", fotoUrl: simbolos, cards: [
        { id: "julgar", emoji: "⚖️", titulo: "Julgar se é certo", cor: "from-slate-400 to-gray-600" },
        { id: "entender", emoji: "🔍", titulo: "Perguntar QUE VALOR ele passa adiante", cor: "from-sky-500 to-blue-700" },
        { id: "copiar", emoji: "📋", titulo: "Copiar", cor: "from-red-500 to-rose-700" },
      ], correta: "entender", feedbackAcerto: "Isso! Interpretar = perguntar 'o que essa comunidade quer dizer com isso'.", feedbackErro: "Interpretar não é julgar. É ENTENDER que valor a comunidade transmite." },
    ],
    falaFinal: "Radar de interpretação afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados onde festas religiosas populares acontecem com força.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["BA", "PE", "MG", "SP", "PA"], pergunta: "5 estados com grandes festas religiosas populares no calendário?" },
    falaFinal: "BA (2 de Fevereiro), PE (São João), MG (barroco), SP (Nossa Sra. Aparecida), PA (Círio de Nazaré).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como INTERPRETAR corretamente um rito de outra tradição?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Passos da interpretação:",
    paradas: [
      { id: "observar", emoji: "👁️", rotulo: "1. OBSERVAR sem julgar", descricao: "Ver o rito acontecendo. Anotar gestos, sequência, objetos usados." },
      { id: "perguntar", emoji: "❓", rotulo: "2. PERGUNTAR aos praticantes", descricao: "Deixar quem pratica EXPLICAR — não inventar significado por conta própria." },
      { id: "narrativa", emoji: "📜", rotulo: "3. Conhecer a NARRATIVA (mito)", descricao: "Estudar a história fundadora que o rito rememora." },
      { id: "valor", emoji: "🧭", rotulo: "4. Identificar o VALOR", descricao: "Perguntar: que princípio ético ou espiritual esse rito passa adiante?" },
      { id: "respeitar", emoji: "🤝", rotulo: "5. RESPEITAR mesmo se diferente", descricao: "Aceitar que aquele valor faz sentido pra aquela comunidade, mesmo quando não é a sua tradição." },
    ],
    ordemCerta: ["observar", "perguntar", "narrativa", "valor", "respeitar"],
    feedbackAcerto: "Perfeito! Observar → perguntar → narrativa → valor → respeitar.",
    feedbackErro: "A ordem: OBSERVAR, PERGUNTAR aos praticantes, conhecer NARRATIVA, identificar VALOR, RESPEITAR.",
    falaFinal: "5 passos. Interpretação com respeito.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 4 — Ritos e Mitos",
    paragrafos: [
      { id: "p1", texto: "RITO é o conjunto de gestos repetidos com sentido além da ação — batizar, casar, jejuar, acender velas. MITO, no sentido religioso, é a NARRATIVA fundadora que dá sentido a esses gestos.", chaves: ["rito", "narrativa"] },
      { id: "p2", texto: "MITO religioso NÃO significa 'mentira'. É uma história que explica origem, valores e identidade de um povo — mesmo quando não é história científica literal.", chaves: ["não é mentira", "identidade"] },
      { id: "p3", texto: "INTERPRETAR um rito é perguntar QUE VALOR ele transmite. O jejum do Ramadã transmite empatia e disciplina. O batismo cristão transmite renovação. A Páscoa judaica transmite luta contra escravidão.", chaves: ["interpretar", "valor"] },
      { id: "p4", texto: "Interpretar exige HUMILDADE: deixar quem pratica explicar, em vez de inventar significado. E RESPEITO: aceitar que aquele valor faz sentido pra aquele povo, mesmo que não seja da sua tradição.", chaves: ["humildade", "respeito"] },
    ],
    falaFinal: "Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo INTÉRPRETE! Cada rodada mostra um RITO. Qual a INTERPRETAÇÃO central?",
    instrucao: "⏱️ Qual valor esse rito passa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "empatia", emoji: "❤️", rotulo: "Empatia com quem sofre" },
      { id: "renovacao", emoji: "💧", rotulo: "Renovação, começar de novo" },
      { id: "liberdade", emoji: "🕊️", rotulo: "Liberdade e não-escravidão" },
      { id: "luz", emoji: "🪔", rotulo: "Luz vence a escuridão" },
      { id: "gratidao", emoji: "🙏", rotulo: "Gratidão pelas colheitas" },
      { id: "memoria", emoji: "🕯️", rotulo: "Memória dos antepassados" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Jejum Ramadã", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Amanhecer→pôr-do-sol", emoji: "🌅", cor: "from-teal-400 to-emerald-600" }, contexto: "29 dias sem comer no horário do sol.", pecaCertaId: "empatia", feedbackAcerto: "Isso! Sentir a fome de quem passa fome sem escolher.", feedbackErro: "É EMPATIA — sentir na pele o que outros sentem por necessidade." },
      { id: "r2", municipioA: { nome: "Batismo cristão", emoji: "💧", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Mergulho em água", emoji: "🌊", cor: "from-indigo-400 to-blue-700" }, contexto: "Água como símbolo de purificação.", pecaCertaId: "renovacao", feedbackAcerto: "Perfeito! Água = lavar, renovar, começar.", feedbackErro: "É RENOVAÇÃO — começar vida nova, purificar-se." },
      { id: "r3", municipioA: { nome: "Pessach judaico", emoji: "🍞", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Pão sem fermento", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, contexto: "Rememora a saída do Egito.", pecaCertaId: "liberdade", feedbackAcerto: "Isso! Nenhum povo deve ser escravo.", feedbackErro: "É LIBERDADE — memória contra toda forma de escravização." },
      { id: "r4", municipioA: { nome: "Diwali hindu", emoji: "🪔", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Milhares de lâmpadas", emoji: "✨", cor: "from-amber-400 to-orange-600" }, contexto: "5 noites acendendo luzes na casa.", pecaCertaId: "luz", feedbackAcerto: "Perfeito! Luz vence trevas.", feedbackErro: "É LUZ vencendo a escuridão — o bem prevalece." },
      { id: "r5", municipioA: { nome: "Ação de Graças", emoji: "🌽", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Colheita partilhada", emoji: "🌾", cor: "from-orange-400 to-amber-600" }, contexto: "Refeição comunitária após colher.", pecaCertaId: "gratidao", feedbackAcerto: "Isso! Reconhecer o que se recebeu.", feedbackErro: "É GRATIDÃO pelas colheitas do ano." },
      { id: "r6", municipioA: { nome: "Finados / Obon", emoji: "🕯️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Velas em túmulos", emoji: "🌸", cor: "from-orange-400 to-red-600" }, contexto: "Cristãos e budistas honrando quem morreu.", pecaCertaId: "memoria", feedbackAcerto: "Boa! Manter viva a memória de quem se foi.", feedbackErro: "É MEMÓRIA dos antepassados — não deixar esquecer." },
    ],
    falaFinal: "6 interpretações! Intérprete formado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as duas grandes funções de rito + mito.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "memoria", rotulo: "MEMÓRIA viva do passado (~50%)", emoji: "📜", percentual: 50, cor: "#8b5cf6", descricao: "Cada rito e mito impede que a comunidade esqueça de onde veio, quem é, o que valoriza.", exemplos: ["🍞 Pessach", "🍷 Última Ceia"] },
      { id: "valor", rotulo: "TRANSMISSÃO de valores (~50%)", emoji: "🧭", percentual: 50, cor: "#f59e0b", descricao: "Cada rito passa adiante um princípio ético — empatia, gratidão, liberdade, luz — através do corpo e da narrativa.", exemplos: ["❤️ Empatia", "🕊️ Liberdade", "🪔 Luz"] },
    ],
    falaFinal: "Memória + valor. Rito e mito, juntos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "MITO religioso significa:", opcoes: [
        { id: "a", texto: "Mentira antiga", correta: false },
        { id: "b", texto: "Narrativa fundadora que dá sentido à identidade do povo", correta: true },
        { id: "c", texto: "Um tipo de jogo", correta: false },
      ], feedbackAcerto: "Isso! Mito não é mentira — é narrativa fundadora.", feedbackErro: "Mito religioso NÃO é mentira. É narrativa FUNDADORA que dá sentido." },
      { id: "av2", pergunta: "INTERPRETAR um rito de outra tradição exige:", opcoes: [
        { id: "a", texto: "Julgar rápido se é certo ou errado", correta: false },
        { id: "b", texto: "Observar, perguntar aos praticantes e identificar o valor transmitido", correta: true },
        { id: "c", texto: "Ignorar", correta: false },
      ], feedbackAcerto: "Perfeito! Interpretar é entender, não julgar.", feedbackErro: "Não é julgar rápido. É OBSERVAR, PERGUNTAR aos praticantes, e identificar o VALOR." },
      { id: "av3", pergunta: "O jejum do Ramadã transmite principalmente:", opcoes: [
        { id: "a", texto: "Punição corporal", correta: false },
        { id: "b", texto: "Disciplina e empatia com quem passa fome", correta: true },
        { id: "c", texto: "Diversão", correta: false },
      ], feedbackAcerto: "Isso! Disciplina espiritual e empatia com os famintos.", feedbackErro: "Ramadã NÃO é punição. Transmite DISCIPLINA e EMPATIA com quem passa fome." },
    ],
    selo: { nome: "Intérprete de Ritos", subtitulo: "Insígnia dos Ritos e Mitos", emoji: "🕯️", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Intérprete de Ritos" },
};
