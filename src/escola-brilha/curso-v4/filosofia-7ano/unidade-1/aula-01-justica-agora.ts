import type { AulaGeoV1 } from "../../types";
import { url as agora } from "@/assets/filosofia-7ano/u1-agora.jpg.asset.json";
import { url as platao } from "@/assets/filosofia-7ano/u1-platao.jpg.asset.json";
import { url as anel } from "@/assets/filosofia-7ano/u1-anel.jpg.asset.json";
import { url as alma } from "@/assets/filosofia-7ano/u1-alma-tripartite.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 1 · Aula 01
 * "A Justiça na Ágora" — EF07FI01 (autoral)
 * Tema: Platão (cidade justa, alma tripartite, mito do Anel de Giges).
 * Tom: pré-adolescente investigador da justiça — sem infantilização.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-justica-agora",
  titulo: "A Justiça na Ágora",
  iconeTrilha: "⚖️",
  bncc: ["EF07FI01"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: agora,
    imagemDestaqueUrl: agora,
    aurora:
      "Investigador, imagine a Ágora de Atenas há 2400 anos. Colunas de mármore, sandálias no chão de pedra, e homens debatendo por horas uma pergunta que ninguém conseguia resolver: 'o que é ser JUSTO?'. Um jovem chamado Platão escutava tudo. Ele viu seu mestre Sócrates ser condenado à morte por um tribunal 'legal', mas profundamente injusto. Aí Platão fez o juramento da vida dele: descobrir de uma vez o que é a JUSTIÇA — não a lei, não o costume: a justiça de verdade.",
    falaFinal:
      "Nesta aula você entra no laboratório de Platão. Três chaves: a cidade justa, a alma dividida, e um anel mágico que testa seu caráter.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite antes da investigação: quando alguém é JUSTO de verdade?",
    pergunta: "Uma pessoa é justa quando…",
    opcoes: [
      {
        id: "interior",
        titulo: "Age certo mesmo SEM ser vista",
        subtitulo: "por convicção interna, não por medo de punição",
        emoji: "🫀",
        cor: "from-violet-400 to-purple-600",
      },
      {
        id: "medo",
        titulo: "Só age certo se PUDEREM ver",
        subtitulo: "por medo de ser pega e castigada",
        emoji: "👁️",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "interior",
    feedbackAcerto:
      "Exato. Pra Platão, justiça é uma virtude INTERNA — quem só age certo por medo de câmera não é justo, é obediente.",
    feedbackErro:
      "Se a pessoa só age certo com medo, ela não é justa: é vigiada. Platão vai provar isso com um anel mágico daqui a pouco.",
    falaFinal: "Justiça = ordem interior, não vitrine.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave da República de Platão.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "polis",
        capa: "1. Pólis",
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "PÓLIS (pó-lis) é a cidade-estado grega — Atenas, Esparta, Tebas. Pra Platão, a pólis não é só um lugar: é uma COMUNIDADE que só funciona bem quando cada grupo faz o seu papel com excelência. Estudar a cidade justa, pra ele, é estudar a alma humana em tamanho grande.",
        exemplo:
          "Ex.: se governantes roubam, guerreiros são covardes e trabalhadores enganam, a pólis desmorona — como uma alma em conflito.",
        fotoUrl: agora,
      },
      {
        id: "alma-tripartite",
        capa: "2. Alma tripartite",
        emoji: "🧠",
        cor: "from-violet-500 to-purple-700",
        conteudo:
          "Platão diz que toda alma humana tem 3 partes: RAZÃO (pensa e decide), ÂNIMO (coragem, honra, força de vontade) e DESEJO (fome, sede, prazer). Ser justo é essas 3 partes trabalharem em ordem — a razão comandando, o ânimo protegendo, o desejo obedecendo.",
        exemplo:
          "Ex.: você quer comer 3 chocolates (desejo), sente vontade de resistir por orgulho (ânimo), e a razão decide 'um só, agora'. Alma em ordem.",
        fotoUrl: alma,
      },
      {
        id: "justica",
        capa: "3. Justiça",
        emoji: "⚖️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "JUSTIÇA, pra Platão, não é 'seguir a lei' nem 'ser bonzinho'. É HARMONIA — cada parte da alma (e cada grupo da cidade) fazendo o que lhe cabe, sem invadir o lugar do outro. Injustiça é bagunça interna: o desejo tomando o lugar da razão.",
        exemplo:
          "Ex.: um governante que só pensa em enriquecer inverte a ordem — o desejo mandando na razão. Isso é injustiça, mesmo que seja legal.",
        fotoUrl: platao,
      },
    ],
    falaFinal: "Pólis, alma tripartite, justiça. Três chaves de Platão.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "4 momentos que fundam a filosofia política ocidental. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: agora,
    pontos: [
      {
        id: "morte-socrates",
        x: 22,
        y: 34,
        emoji: "⚱️",
        cor: "from-slate-500 to-slate-700",
        titulo: "399 a.C. — a morte injusta que mudou tudo",
        texto:
          "Atenas condena Sócrates à morte por 'corromper a juventude' — um julgamento LEGAL mas obviamente injusto. Platão, discípulo de 28 anos, entende ali que lei e justiça não são a mesma coisa. E jura escrever um livro que explique de vez o que é ser justo. Esse livro se chamará A República.",
        fotoUrl: agora,
      },
      {
        id: "republica",
        x: 74,
        y: 30,
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        titulo: "A República — a cidade como espelho da alma",
        texto:
          "Platão propõe: pra entender a JUSTIÇA na pessoa (que é pequena e difícil de ver), vamos primeiro estudar a justiça na CIDADE (que é grande e visível). Ele imagina 3 grupos na pólis: governantes-filósofos (razão), guerreiros-guardiões (ânimo) e produtores-trabalhadores (desejo). Cidade justa = cada um no seu papel, com excelência.",
        fotoUrl: platao,
      },
      {
        id: "alma-tripartite",
        x: 28,
        y: 70,
        emoji: "🧠",
        cor: "from-violet-500 to-purple-700",
        titulo: "A alma tripartite — a mesma ordem, agora dentro",
        texto:
          "Se a cidade tem 3 grupos, a alma humana também tem 3 partes: razão, ânimo, desejo. Você é JUSTO quando a razão comanda, o ânimo apoia e o desejo obedece. É INJUSTO quando o desejo grita mais alto e derruba a razão — brigar sem pensar, comer demais, mentir por vantagem.",
        fotoUrl: alma,
      },
      {
        id: "anel-giges",
        x: 76,
        y: 70,
        emoji: "💍",
        cor: "from-emerald-500 to-teal-700",
        titulo: "O anel de Giges — o teste supremo",
        texto:
          "Glauco (irmão de Platão) provoca Sócrates: 'imagine um anel que te deixa invisível. Ninguém saberia se você roubou. Você continuaria justo?'. Se sim, você é justo de verdade. Se não, sua 'justiça' era só medo da câmera. Esse teste continua brutal — é o mesmo dilema de quem age diferente quando ninguém está olhando na internet.",
        fotoUrl: anel,
      },
    ],
    falaFinal:
      "4 marcos: morte de Sócrates → República → alma tripartite → anel de Giges. Toda ética ocidental sai daqui.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra afinar o radar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Pra Platão, JUSTIÇA é…",
        fotoUrl: platao,
        cards: [
          {
            id: "harmonia",
            emoji: "⚖️",
            titulo: "Harmonia entre as partes da alma (e da cidade)",
            cor: "from-violet-500 to-purple-700",
          },
          {
            id: "lei",
            emoji: "📜",
            titulo: "Qualquer coisa que a lei disser que é justo",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "forte",
            emoji: "💪",
            titulo: "O que o mais forte impõe aos outros",
            cor: "from-red-500 to-rose-700",
          },
        ],
        correta: "harmonia",
        feedbackAcerto:
          "Isso. Justiça é HARMONIA — razão comanda, ânimo apoia, desejo obedece. Vale pra alma e pra cidade.",
        feedbackErro:
          "Não é 'o que a lei diz' (a lei pode ser injusta, como no julgamento de Sócrates) nem 'o que o forte quer'. É HARMONIA interna.",
      },
      {
        id: "q2",
        pergunta: "Quais são as 3 partes da alma segundo Platão?",
        fotoUrl: alma,
        cards: [
          {
            id: "razao-animo-desejo",
            emoji: "🧠",
            titulo: "Razão, ânimo, desejo",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "cabeca-coracao-mao",
            emoji: "💗",
            titulo: "Cabeça, coração, mão",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "id-ego-superego",
            emoji: "🧬",
            titulo: "Id, ego e superego",
            cor: "from-amber-500 to-orange-700",
          },
        ],
        correta: "razao-animo-desejo",
        feedbackAcerto:
          "Perfeito. RAZÃO (pensa), ÂNIMO (coragem/honra) e DESEJO (fome, prazer).",
        feedbackErro:
          "Id, ego e superego é Freud (séculos depois). Platão: razão, ânimo, desejo.",
      },
      {
        id: "q3",
        pergunta: "O anel de Giges serve pra testar…",
        fotoUrl: anel,
        cards: [
          {
            id: "carater",
            emoji: "🫀",
            titulo: "Se você é justo por CARÁTER ou só por medo de ser visto",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "magia",
            emoji: "✨",
            titulo: "Se você acredita em magia grega",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "coragem",
            emoji: "⚔️",
            titulo: "Se você tem coragem de lutar",
            cor: "from-red-500 to-rose-700",
          },
        ],
        correta: "carater",
        feedbackAcerto:
          "Isso. Se invisível você continua justo — é caráter. Se muda — é medo. Simples e brutal.",
        feedbackErro:
          "O anel não testa magia nem coragem. Testa se sua justiça é INTERNA (caráter) ou EXTERNA (medo de punição).",
      },
    ],
    falaFinal: "Radar de justiça calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A filosofia política vive nos Tribunais de Justiça brasileiros. Escolha 5 estados com Tribunais de Justiça (TJs) atuantes.",
    instrucao: "Acenda 5 estados com Tribunais de Justiça de referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "BA"],
      pergunta:
        "Quais 5 estados abrigam Tribunais de Justiça de grande porte no Brasil?",
    },
    falaFinal:
      "TJ-SP (o maior tribunal do país), TJ-RJ, TJ-MG, TJ-RS e TJ-BA. Filosofia da justiça, viva em cada decisão.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como uma ALMA JUSTA se organiza, segundo Platão? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da hierarquia interior à ação justa:",
    paradas: [
      {
        id: "razao",
        emoji: "🧠",
        rotulo: "1. RAZÃO comanda",
        descricao:
          "A parte racional avalia a situação, pesa consequências e decide o que é certo.",
      },
      {
        id: "animo",
        emoji: "🛡️",
        rotulo: "2. ÂNIMO apoia",
        descricao:
          "A coragem e a honra sustentam a decisão da razão mesmo quando é difícil.",
      },
      {
        id: "desejo",
        emoji: "🔥",
        rotulo: "3. DESEJO obedece",
        descricao:
          "Fome, sede, prazer e impulsos aceitam o limite que a razão colocou.",
      },
      {
        id: "harmonia",
        emoji: "⚖️",
        rotulo: "4. HARMONIA interna",
        descricao:
          "As 3 partes deixam de brigar entre si — surge a virtude interior.",
      },
      {
        id: "acao",
        emoji: "✨",
        rotulo: "5. AÇÃO JUSTA",
        descricao:
          "De uma alma em ordem sai naturalmente uma ação justa — invisível ou não.",
      },
    ],
    ordemCerta: ["razao", "animo", "desejo", "harmonia", "acao"],
    feedbackAcerto:
      "Exato. Razão comanda → ânimo apoia → desejo obedece → harmonia interna → ação justa. Esse é o modelo de Platão.",
    feedbackErro:
      "A ordem é: RAZÃO comanda primeiro, ÂNIMO apoia, DESEJO obedece; então surge HARMONIA e, dela, a AÇÃO JUSTA.",
    falaFinal: "5 passos. Toda ética de Platão em uma escada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 1 — A Justiça segundo Platão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Depois que Atenas condenou Sócrates à morte num tribunal 'legal' mas injusto, Platão passou a vida tentando entender o que é JUSTIÇA de verdade — não a que a lei diz, mas a que a razão descobre.",
        chaves: ["Platão", "justiça"],
      },
      {
        id: "p2",
        texto:
          "No livro A REPÚBLICA, Platão diz: a alma humana tem 3 partes — RAZÃO (que pensa), ÂNIMO (que dá coragem) e DESEJO (que quer prazer). Ser justo é as 3 trabalharem em ordem, com a razão no comando.",
        chaves: ["República", "alma"],
      },
      {
        id: "p3",
        texto:
          "A mesma ordem vale para a CIDADE: governantes-filósofos pensam, guerreiros protegem, trabalhadores produzem. Cidade justa é aquela em que cada grupo faz o seu papel com excelência, sem invadir o lugar do outro.",
        chaves: ["cidade", "papel"],
      },
      {
        id: "p4",
        texto:
          "O irmão de Platão, Glauco, propõe um teste: se você tivesse um ANEL DE GIGES que te tornasse invisível, continuaria justo? Se sim, sua justiça é caráter interior. Se não, era só medo da punição — e nunca foi justiça.",
        chaves: ["Glauco", "anel", "caráter"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo TRIBUNAL DA ALMA! Cada caso mostra uma situação. Qual parte da alma está DOMINANDO — e a ação é justa ou injusta?",
    instrucao: "⏱️ Que parte da alma está no comando?",
    duracaoSegundos: 15,
    pecas: [
      { id: "razao", emoji: "🧠", rotulo: "Razão no comando (justo)" },
      { id: "animo-descontrolado", emoji: "🛡️", rotulo: "Ânimo sem razão (impulsivo)" },
      { id: "desejo-dominante", emoji: "🔥", rotulo: "Desejo dominante (injusto)" },
      { id: "harmonia", emoji: "⚖️", rotulo: "Harmonia (virtude)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Vi a carteira caída, mesmo sem câmera devolvi'",
          emoji: "💼",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Ação justa mesmo invisível",
          emoji: "🫀",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "Age certo sem ninguém ver — é caráter interior.",
        pecaCertaId: "harmonia",
        feedbackAcerto:
          "Isso. Alma em HARMONIA — razão decide, ânimo sustenta, desejo (de ficar com o dinheiro) obedece.",
        feedbackErro:
          "É HARMONIA: agir certo sem ninguém ver mostra a alma em ordem.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Só como escondido pra ninguém julgar'",
          emoji: "🍫",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Desejo mandando na razão",
          emoji: "🔥",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "O desejo dominou e derrubou a decisão racional.",
        pecaCertaId: "desejo-dominante",
        feedbackAcerto:
          "Isso. DESEJO DOMINANTE — quer o prazer e engana a razão. Alma em desordem.",
        feedbackErro:
          "É DESEJO DOMINANTE: o prazer venceu a razão. Alma desorganizada, ação injusta.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Bati no colega porque me ofendeu'",
          emoji: "👊",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Ânimo sem razão",
          emoji: "⚡",
          cor: "from-yellow-400 to-orange-600",
        },
        contexto: "O ânimo (honra ferida) reagiu sem a razão avaliar.",
        pecaCertaId: "animo-descontrolado",
        feedbackAcerto:
          "Isso. ÂNIMO SEM RAZÃO — coragem virou agressão porque a razão não freou.",
        feedbackErro:
          "É ÂNIMO SEM RAZÃO: a honra reagiu antes da razão pensar. Coragem vira violência.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Estava com raiva, respirei fundo e conversei'",
          emoji: "🌬️",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Razão dominou o impulso",
          emoji: "🧠",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Razão avaliou e escolheu diálogo em vez de agressão.",
        pecaCertaId: "razao",
        feedbackAcerto: "Perfeito. RAZÃO NO COMANDO — freou o impulso e escolheu bem.",
        feedbackErro:
          "É RAZÃO NO COMANDO: parou, pensou e escolheu diálogo em vez de reação.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Copiei a prova porque ninguém viu'",
          emoji: "📝",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Anel de Giges na prática",
          emoji: "💍",
          cor: "from-gray-400 to-slate-600",
        },
        contexto: "Sem observação, o desejo de nota alta venceu a razão.",
        pecaCertaId: "desejo-dominante",
        feedbackAcerto:
          "Isso. DESEJO DOMINANTE — falhou no teste do anel de Giges.",
        feedbackErro:
          "É DESEJO DOMINANTE: sem câmera, o desejo por nota derrubou a razão.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Defendi o colega BULLYADO mesmo perdendo popularidade'",
          emoji: "🛡️",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Coragem racional",
          emoji: "⚖️",
          cor: "from-teal-400 to-cyan-600",
        },
        contexto: "Razão decide + ânimo executa mesmo com custo social.",
        pecaCertaId: "harmonia",
        feedbackAcerto:
          "Perfeito. HARMONIA — razão viu o certo, ânimo teve coragem, desejo (de popularidade) obedeceu.",
        feedbackErro:
          "É HARMONIA: razão + ânimo alinhados, desejo obedecendo. Virtude platônica no exemplo.",
      },
    ],
    falaFinal:
      "6 casos. Você já lê a alma por dentro — como Platão pedia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza rápida: 2 modos de ser 'justo'. Só um Platão aceitaria.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "justica-medo",
        rotulo: "JUSTIÇA POR MEDO (aparente)",
        emoji: "👁️",
        percentual: 50,
        cor: "#94a3b8",
        descricao:
          "A pessoa só age certo quando pode ser vista, punida ou julgada. Tire a câmera, tire a punição — e a 'justiça' desaparece. Falha no teste do anel de Giges.",
        exemplos: ["📸 Só respeita fila com câmera", "🚔 Só freia quando vê guarda", "📱 Age diferente no anônimo"],
      },
      {
        id: "justica-carater",
        rotulo: "JUSTIÇA POR CARÁTER (real)",
        emoji: "🫀",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "A pessoa age certo por convicção interna — razão comanda, ânimo apoia, desejo obedece. Com ou sem câmera, a ação é a mesma. É a justiça verdadeira segundo Platão.",
        exemplos: ["💼 Devolve carteira sem ninguém ver", "📝 Não cola mesmo sozinho", "🤝 Cumpre promessa em segredo"],
      },
    ],
    falaFinal:
      "Duas 'justiças' possíveis. Só a segunda passa no teste do anel de Giges.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA JUSTIÇA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra Platão, a JUSTIÇA é fundamentalmente…",
        opcoes: [
          { id: "a", texto: "Cumprir a lei, seja ela qual for", correta: false },
          {
            id: "b",
            texto:
              "Harmonia entre as partes da alma (razão, ânimo, desejo) e entre os grupos da cidade",
            correta: true,
          },
          { id: "c", texto: "Ser popular e bem visto pelos outros", correta: false },
        ],
        feedbackAcerto:
          "Isso. Justiça é HARMONIA — na alma e na cidade. Lei sem harmonia pode ser injusta (Sócrates que o diga).",
        feedbackErro:
          "Não é lei nem popularidade. É HARMONIA — cada parte no seu papel, razão no comando.",
      },
      {
        id: "av2",
        pergunta: "Quando o DESEJO domina a razão numa pessoa, Platão diria que ela…",
        opcoes: [
          {
            id: "a",
            texto: "Está com a alma em DESORDEM — a ação tende a ser injusta",
            correta: true,
          },
          { id: "b", texto: "Está sendo criativa e livre", correta: false },
          { id: "c", texto: "Está mais feliz que os outros", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Alma em desordem = injustiça interior, mesmo que a lei não veja.",
        feedbackErro:
          "Desejo dominando não é 'liberdade' — é DESORDEM. A alma perde o comando e a ação vira injusta.",
      },
      {
        id: "av3",
        pergunta:
          "O ANEL DE GIGES é um teste filosófico pra descobrir se…",
        opcoes: [
          { id: "a", texto: "Você acredita em magia", correta: false },
          {
            id: "b",
            texto:
              "Sua justiça é INTERNA (caráter) ou apenas EXTERNA (medo de ser visto)",
            correta: true,
          },
          { id: "c", texto: "Você é bom em esportes", correta: false },
        ],
        feedbackAcerto:
          "Isso. Se invisível você continua justo, é caráter. Se muda, era só medo.",
        feedbackErro:
          "O anel testa CARÁTER: quem só é justo com câmera, não é justo — é vigiado.",
      },
    ],
    selo: {
      nome: "Investigador da Justiça",
      subtitulo: "Insígnia da Cidade Justa e da Alma em Ordem",
      emoji: "⚖️",
      cor: "from-violet-400 to-purple-700",
    },
    falaFinal:
      "Insígnia conquistada! Você agora sabe distinguir justiça de aparência.",
  },

  recompensa: { xp: 380, moedas: 280, medalha: "Investigador da Justiça" },
};
