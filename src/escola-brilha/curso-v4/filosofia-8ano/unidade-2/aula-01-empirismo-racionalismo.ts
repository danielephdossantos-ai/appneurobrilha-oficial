import type { AulaGeoV1 } from "../../types";
import { url as locke } from "@/assets/filosofia-8ano/u2-locke.jpg.asset.json";
import { url as hume } from "@/assets/filosofia-8ano/u2-hume.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 2 · Aula 01
 * "Empirismo × Racionalismo" — EF08FI02 (autoral)
 * Tema: Locke, Hume × Descartes, Leibniz — de onde vêm as ideias?
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-empirismo-racionalismo",
  titulo: "De Onde Vêm as Ideias?",
  iconeTrilha: "📜",
  bncc: ["EF08FI02"],
  duracaoMin: 26,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: locke,
    imagemDestaqueUrl: locke,
    aurora:
      "Investigador, é o século XVII. Duas escolas de pensamento entram em rota de colisão na Europa. De um lado, os RACIONALISTAS (Descartes, Leibniz): a razão é a fonte principal do conhecimento, algumas ideias já nascem com a gente. Do outro, os EMPIRISTAS (Locke, Hume): a mente nasce como uma folha em branco — tudo o que sabemos entra pelos sentidos. Essa briga vai definir toda a ciência moderna.",
    falaFinal:
      "Nesta aula: tábula rasa de Locke, bolas de bilhar de Hume e a razão inata dos racionalistas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: de onde vêm suas ideias?",
    pergunta: "A maior parte do que sei veio…",
    opcoes: [
      { id: "sentidos", titulo: "Dos SENTIDOS", subtitulo: "ver, ouvir, tocar, experimentar", emoji: "👀", cor: "from-amber-400 to-orange-600" },
      { id: "razao", titulo: "Da RAZÃO", subtitulo: "pensar, calcular, deduzir", emoji: "🧠", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "sentidos",
    feedbackAcerto:
      "Boa. Pros empiristas (Locke, Hume), quase tudo vem pelos sentidos. Mas os racionalistas discordam — vamos ver.",
    feedbackErro:
      "Interessante. Descartes e Leibniz concordam. Mas Locke responde: 'e se tudo que você chama de razão veio da experiência primeiro?'.",
    falaFinal: "As duas respostas têm defensores geniais. O debate vale 400 anos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar no debate.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "tabula-rasa",
        capa: "1. Tábula rasa",
        emoji: "📄",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "TÁBULA RASA (tabula = tábua, rasa = lisa) é a tese de John Locke: a mente humana nasce como uma FOLHA EM BRANCO. Não trazemos ideias prontas do berço — tudo é escrito ali pela experiência (o que vimos, ouvimos, sentimos). Se você nunca viu uma cor, não pode imaginá-la. Se nunca ouviu música, não sabe o que é ritmo.",
        exemplo:
          "Ex.: bebê nasce sem saber que fogo queima. Só aprende depois de encostar (ou ver alguém encostar). A experiência é a professora.",
        fotoUrl: locke,
      },
      {
        id: "impressao-ideia",
        capa: "2. Impressão × Ideia",
        emoji: "🎨",
        cor: "from-cyan-500 to-blue-700",
        conteudo:
          "David Hume separa dois tipos de conteúdo mental: IMPRESSÕES (fortes, vívidas — o que você SENTE agora: dor, cor viva, som alto) e IDEIAS (cópias mais fracas das impressões — a lembrança do som, a imaginação da cor). Toda ideia vem de uma impressão anterior. Sem sentir, não há ideia.",
        exemplo:
          "Ex.: você lembra do gosto de laranja porque um dia comeu uma. Quem nunca comeu não consegue formar a ideia do gosto.",
        fotoUrl: hume,
      },
      {
        id: "ideias-inatas",
        capa: "3. Ideias inatas",
        emoji: "🧬",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "IDEIAS INATAS é a tese oposta, defendida pelos RACIONALISTAS (Descartes, Leibniz): algumas ideias já nascem com a gente — não são aprendidas pelos sentidos. Exemplos: a ideia de Deus, a ideia de infinito, os princípios da matemática. Ninguém precisa 'ver' o infinito pra pensar nele.",
        exemplo:
          "Ex.: você entende '2+2=4' antes mesmo de contar objetos. Pros racionalistas, essa capacidade é INATA.",
        fotoUrl: locke,
      },
    ],
    falaFinal: "Tábula rasa × impressão × ideias inatas. As três peças do tabuleiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos do grande debate.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: hume,
    pontos: [
      {
        id: "descartes",
        x: 22,
        y: 30,
        emoji: "🧠",
        cor: "from-sky-500 to-blue-700",
        titulo: "Descartes (1637) — a razão primeiro",
        texto:
          "Descartes já defendia que a razão é a fonte principal. Certas ideias — como Deus, infinito, matemática — não podem ter vindo dos sentidos porque nossos sentidos nunca captaram algo assim. Só a razão pura acessa essas verdades.",
        fotoUrl: locke,
      },
      {
        id: "locke",
        x: 72,
        y: 30,
        emoji: "📄",
        cor: "from-amber-500 to-orange-700",
        titulo: "Locke (1690) — a folha em branco",
        texto:
          "John Locke publica o 'Ensaio sobre o Entendimento Humano' e vira o jogo: 'a mente é uma folha em branco'. Tudo que sabemos entrou pelos sentidos ou por reflexão sobre o que os sentidos trouxeram. Nada nasce pronto na cabeça — nem Deus, nem matemática. Aprendemos.",
        fotoUrl: locke,
      },
      {
        id: "hume",
        x: 26,
        y: 70,
        emoji: "🎱",
        cor: "from-cyan-500 to-blue-700",
        titulo: "Hume (1748) — nem causa a gente vê",
        texto:
          "David Hume vai mais longe: nem CAUSA E EFEITO a gente enxerga. Quando uma bola de bilhar bate na outra, a gente vê a batida e depois a outra se movendo — mas 'causa' é uma expectativa que nossa mente cria pelo hábito. Fica difícil provar até a ciência.",
        fotoUrl: hume,
      },
      {
        id: "kant-preview",
        x: 74,
        y: 70,
        emoji: "🌉",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "A ponte que virá (Kant)",
        texto:
          "O debate ficou tão intenso que Kant, no próximo capítulo, propõe uma síntese: 'a experiência dá o conteúdo, mas a razão dá as FORMAS que organizam esse conteúdo'. Nem tábula rasa pura, nem ideias inatas puras.",
        fotoUrl: locke,
      },
    ],
    falaFinal: "Descartes → Locke → Hume → (Kant no próximo capítulo).",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas pra afinar o radar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "TÁBULA RASA (Locke) significa que a mente…",
        fotoUrl: locke,
        cards: [
          { id: "vazia", emoji: "📄", titulo: "Nasce em branco — tudo é aprendido pela experiência", cor: "from-amber-500 to-orange-700" },
          { id: "inata", emoji: "🧬", titulo: "Nasce com todas as ideias prontas", cor: "from-purple-500 to-fuchsia-700" },
          { id: "digital", emoji: "💾", titulo: "É um HD que a genética já formata", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "vazia",
        feedbackAcerto: "Isso. Folha em branco — a experiência escreve.",
        feedbackErro: "Tábula rasa = folha LISA (sem escrita). A experiência escreve depois.",
      },
      {
        id: "q2",
        pergunta: "Pra Hume, IDEIA é…",
        fotoUrl: hume,
        cards: [
          { id: "copia", emoji: "🎨", titulo: "Uma cópia mais fraca de uma impressão anterior", cor: "from-cyan-500 to-blue-700" },
          { id: "inato", emoji: "🧬", titulo: "Algo que já nascemos sabendo", cor: "from-purple-500 to-fuchsia-700" },
          { id: "deus", emoji: "✨", titulo: "Um sinal enviado por Deus à alma", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "copia",
        feedbackAcerto: "Perfeito. Impressão (forte) → ideia (cópia fraca).",
        feedbackErro: "Pra Hume, toda ideia é cópia de uma impressão vivida.",
      },
      {
        id: "q3",
        pergunta: "Descartes e Leibniz defendem que…",
        fotoUrl: locke,
        cards: [
          { id: "inatas", emoji: "🧬", titulo: "Existem IDEIAS INATAS que a razão traz sem precisar dos sentidos", cor: "from-purple-500 to-fuchsia-700" },
          { id: "rasa", emoji: "📄", titulo: "A mente é uma folha em branco preenchida pela experiência", cor: "from-amber-500 to-orange-700" },
          { id: "nada", emoji: "❌", titulo: "Não podemos conhecer nada", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "inatas",
        feedbackAcerto: "Isso. Racionalistas apostam em ideias que a razão já traz consigo.",
        feedbackErro: "Racionalismo = razão em 1º lugar, com IDEIAS INATAS. Tábula rasa é do outro lado.",
      },
    ],
    falaFinal: "3 acertos = radar epistemológico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O debate empirismo × racionalismo alimenta a ciência experimental (empirista) e a matemática pura (racionalista) — presentes em toda universidade brasileira. Marque 5 estados-referência.",
    instrucao: "Acenda 5 estados com pesquisa forte em Filosofia da Ciência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "SC"],
      pergunta: "Quais 5 estados abrigam programas de Filosofia da Ciência de referência (USP, UFRJ, UFMG, UFRGS, UFSC)?",
    },
    falaFinal: "SP, RJ, MG, RS e SC — cinco polos onde o debate continua.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como Hume constrói a teoria das ideias, passo a passo.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da percepção à ideia:",
    paradas: [
      { id: "sentir", emoji: "👀", rotulo: "1. Sentir uma IMPRESSÃO forte", descricao: "Ver, ouvir, tocar algo — o mundo entra pelos sentidos com força." },
      { id: "guardar", emoji: "🧠", rotulo: "2. Guardar na memória", descricao: "Aquela impressão vira registro na mente." },
      { id: "copiar", emoji: "🎨", rotulo: "3. Formar uma IDEIA (cópia)", descricao: "Depois, sem estar sentindo, você lembra ou imagina — é a ideia (mais fraca)." },
      { id: "combinar", emoji: "🧩", rotulo: "4. Combinar ideias", descricao: "Ideias simples se combinam em complexas (unicórnio = cavalo + chifre)." },
      { id: "criticar", emoji: "🔎", rotulo: "5. Suspeitar do que não tem impressão", descricao: "Se uma ideia não vem de nenhuma impressão, Hume desconfia — pode ser vazia." },
    ],
    ordemCerta: ["sentir", "guardar", "copiar", "combinar", "criticar"],
    feedbackAcerto: "Exato. Impressão → memória → ideia → combinação → crítica. Método empirista em 5 passos.",
    feedbackErro: "A ordem é: sentir, guardar, formar ideia, combinar, e por fim suspeitar do que não tem impressão.",
    falaFinal: "5 passos. Toda a epistemologia empirista em uma escada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 2 — De onde vêm as ideias",
    paragrafos: [
      { id: "p1", texto: "Depois de Descartes, dois grupos disputam a origem do conhecimento. Os RACIONALISTAS (Descartes, Leibniz) dizem: a razão vem em primeiro lugar, e certas ideias (Deus, infinito, matemática) já nascem com a gente — são INATAS.", chaves: ["racionalistas", "inatas"] },
      { id: "p2", texto: "Os EMPIRISTAS (Locke, Hume) respondem: a mente nasce como uma TÁBULA RASA — folha em branco. Tudo que sabemos entrou pelos sentidos. Não existe ideia sem experiência prévia.", chaves: ["empiristas", "tábula rasa"] },
      { id: "p3", texto: "Hume vai fundo: distingue IMPRESSÕES (fortes, vivas — o que sentimos agora) de IDEIAS (cópias mais fracas — o que lembramos). Toda ideia é cópia de uma impressão. E se não é? Suspeite — pode ser conceito vazio.", chaves: ["impressão", "ideia"] },
      { id: "p4", texto: "A tensão fica tão forte que abre caminho para Kant, no próximo capítulo, propor a grande síntese: a experiência dá o conteúdo, a razão dá as formas que organizam esse conteúdo. Nem só sentidos, nem só razão.", chaves: ["Kant", "síntese"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LABORATÓRIO DAS IDEIAS! Cada caso ilustra qual escola?",
    instrucao: "⏱️ Empirismo ou racionalismo?",
    duracaoSegundos: 15,
    pecas: [
      { id: "tabula-rasa", emoji: "📄", rotulo: "Tábula rasa (Locke)" },
      { id: "impressao-ideia", emoji: "🎨", rotulo: "Impressão → Ideia (Hume)" },
      { id: "ideias-inatas", emoji: "🧬", rotulo: "Ideias inatas (Descartes)" },
      { id: "causa-habito", emoji: "🎱", rotulo: "Causa é hábito (Hume)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Só sei o gosto de manga porque um dia comi'", emoji: "🥭", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Toda ideia vem de uma impressão", emoji: "🎨", cor: "from-cyan-400 to-blue-600" },
        contexto: "Sem experiência não há ideia do gosto.",
        pecaCertaId: "impressao-ideia",
        feedbackAcerto: "Isso. IMPRESSÃO → IDEIA. Sem comer, sem ideia do gosto.",
        feedbackErro: "É IMPRESSÃO → IDEIA de Hume: sem sentir, sem imaginar.",
      },
      {
        id: "r2",
        municipioA: { nome: "'A ideia de infinito não veio dos meus olhos'", emoji: "♾️", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Algumas ideias a razão já traz", emoji: "🧬", cor: "from-fuchsia-400 to-purple-600" },
        contexto: "Nenhum sentido capta o infinito.",
        pecaCertaId: "ideias-inatas",
        feedbackAcerto: "Perfeito. IDEIAS INATAS — infinito é caso clássico dos racionalistas.",
        feedbackErro: "É IDEIAS INATAS: como os sentidos não captam infinito, a razão o teria de nascença.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Bebê aprende que fogo queima depois de encostar'", emoji: "🔥", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Mente em branco, experiência escreve", emoji: "📄", cor: "from-amber-400 to-yellow-600" },
        contexto: "Nada vinha pronto — a queimadura ensinou.",
        pecaCertaId: "tabula-rasa",
        feedbackAcerto: "Isso. TÁBULA RASA — a experiência é a professora.",
        feedbackErro: "É TÁBULA RASA de Locke: nada vem pronto, tudo se aprende.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Vi a bola bater 100 vezes e a outra se mover. Espero que aconteça de novo.'", emoji: "🎱", cor: "from-cyan-400 to-blue-600" },
        municipioB: { nome: "Causa é hábito da mente", emoji: "🔁", cor: "from-blue-400 to-indigo-600" },
        contexto: "A gente NÃO vê 'causa' — vê sequências e cria expectativa.",
        pecaCertaId: "causa-habito",
        feedbackAcerto: "Perfeito. Hume: causa é HÁBITO, não algo visível.",
        feedbackErro: "É CAUSA=HÁBITO: nunca enxergamos causa, só regularidade.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Nunca vi um dragão, mas imagino: cavalo + asas + fogo'", emoji: "🐉", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Ideia complexa = combinação de impressões simples", emoji: "🧩", cor: "from-amber-400 to-orange-600" },
        contexto: "As partes existem na experiência; a combinação, na mente.",
        pecaCertaId: "impressao-ideia",
        feedbackAcerto: "Isso. Hume: sem impressões primárias, não há ideia composta.",
        feedbackErro: "É IMPRESSÃO → IDEIA: dragão = cavalo + asas + fogo (todas impressões vividas).",
      },
      {
        id: "r6",
        municipioA: { nome: "'2+2=4 é verdade antes de eu contar qualquer coisa'", emoji: "➕", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Verdade da razão pura", emoji: "🧠", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Verdade matemática independente da experiência.",
        pecaCertaId: "ideias-inatas",
        feedbackAcerto: "Perfeito. Racionalismo: verdades matemáticas são inatas da razão.",
        feedbackErro: "É IDEIAS INATAS: matemática, pra racionalistas, não precisa da experiência.",
      },
    ],
    falaFinal: "6 casos, 4 conceitos. Empirismo × racionalismo iluminados.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: 2 escolas em disputa.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "empirismo",
        rotulo: "EMPIRISMO (Locke, Hume)",
        emoji: "👀",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "A experiência é a fonte de todo conhecimento. Mente nasce como TÁBULA RASA. Toda ideia vem de uma impressão anterior. Sem sentir, sem saber. Origina o método científico experimental.",
        exemplos: ["🥭 'Só sei o gosto porque comi'", "🎱 'Causa é hábito, não algo visto'", "🔬 Ciência baseada em observação"],
      },
      {
        id: "racionalismo",
        rotulo: "RACIONALISMO (Descartes, Leibniz)",
        emoji: "🧠",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "A razão é a fonte principal. Certas ideias (Deus, infinito, matemática) já nascem com a gente — são INATAS. A experiência ajuda, mas a razão pura chega a verdades que os sentidos nunca alcançariam.",
        exemplos: ["♾️ 'Ideia de infinito é inata'", "➕ 'Matemática antes da contagem'", "🧬 Cogito de Descartes"],
      },
    ],
    falaFinal: "Empirismo × Racionalismo. Kant tentará conciliar no próximo capítulo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CARTÓGRAFO DAS IDEIAS.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "TÁBULA RASA (Locke) defende que…",
        opcoes: [
          { id: "a", texto: "A mente nasce em branco e a experiência a preenche", correta: true },
          { id: "b", texto: "A mente é uma cópia perfeita da mente de Deus", correta: false },
          { id: "c", texto: "Só os sábios têm ideias — o resto não", correta: false },
        ],
        feedbackAcerto: "Isso. Empirismo em uma frase: experiência escreve.",
        feedbackErro: "Tábula rasa é FOLHA EM BRANCO — experiência escreve depois.",
      },
      {
        id: "av2",
        pergunta: "Pra Hume, IDEIA é…",
        opcoes: [
          { id: "a", texto: "Uma cópia mais fraca de uma impressão anterior", correta: true },
          { id: "b", texto: "Uma revelação divina", correta: false },
          { id: "c", texto: "Uma marca genética da espécie", correta: false },
        ],
        feedbackAcerto: "Perfeito. Impressão forte → ideia (cópia fraca).",
        feedbackErro: "Pra Hume, ideia é sempre cópia de uma impressão vivida.",
      },
      {
        id: "av3",
        pergunta: "IDEIAS INATAS (Descartes, Leibniz) são…",
        opcoes: [
          { id: "a", texto: "Ideias que a razão traz sem depender dos sentidos (ex.: infinito)", correta: true },
          { id: "b", texto: "Ideias populares na moda", correta: false },
          { id: "c", texto: "Ideias aprendidas na escola", correta: false },
        ],
        feedbackAcerto: "Isso. Racionalismo aposta em ideias que não vieram dos sentidos.",
        feedbackErro: "Ideias inatas = ideias já presentes na razão desde o nascimento.",
      },
    ],
    selo: { nome: "Cartógrafo das Ideias", subtitulo: "Empirismo × Racionalismo", emoji: "📜", cor: "from-amber-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você mapeou o grande debate epistemológico.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo das Ideias" },
};
