import type { AulaGeoV1 } from "../../types";
import { url as meditacoes } from "@/assets/filosofia-8ano/u1-meditacoes.jpg.asset.json";
import { url as descartes } from "@/assets/filosofia-8ano/u1-descartes.jpg.asset.json";
import { url as cogito } from "@/assets/filosofia-8ano/u1-cogito.jpg.asset.json";
import { url as duvida } from "@/assets/filosofia-8ano/u1-duvida.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 1 · Aula 01
 * "A Dúvida que Fundou a Modernidade" — EF08FI01 (autoral)
 * Tema: Descartes — dúvida metódica, gênio maligno, cogito ergo sum.
 * Tom: adolescente investigador — sem infantilização, sem jargão vazio.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-duvida-metodica",
  titulo: "A Dúvida que Fundou a Modernidade",
  iconeTrilha: "🕯️",
  bncc: ["EF08FI01"],
  duracaoMin: 26,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: meditacoes,
    imagemDestaqueUrl: meditacoes,
    aurora:
      "Investigador, é inverno de 1619. Um jovem soldado francês de 23 anos, René Descartes, se tranca sozinho num quarto aquecido em uma cidade da Alemanha. Só uma vela, alguns livros e uma pergunta que vai virar o mundo de ponta-cabeça: 'e se TUDO o que me ensinaram estiver errado?'. A escola, os padres, os sentidos, os livros — se nada disso for confiável, o que sobra? Descartes decide fazer uma experiência filosófica radical: duvidar de tudo até achar uma única coisa que seja IMPOSSÍVEL de duvidar. Essa coisa será o alicerce do saber moderno.",
    falaFinal:
      "Nesta aula você entra no quarto de Descartes. Três chaves: a dúvida metódica, o gênio maligno e a certeza indestrutível — cogito, ergo sum.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite antes da investigação: qual das duas coisas você tem MAIS certeza que existe agora?",
    pergunta: "Neste exato momento, tenho certeza absoluta de que…",
    opcoes: [
      {
        id: "pensamento",
        titulo: "Estou PENSANDO agora",
        subtitulo: "não posso duvidar disso sem já estar pensando",
        emoji: "🧠",
        cor: "from-sky-400 to-cyan-600",
      },
      {
        id: "mundo",
        titulo: "O MUNDO à minha volta existe",
        subtitulo: "porque estou vendo, ouvindo e tocando",
        emoji: "🌍",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "pensamento",
    feedbackAcerto:
      "Boa. Pra Descartes, os sentidos podem enganar (sonhos, ilusões), mas duvidar já É pensar. O pensamento é a certeza mais forte que existe.",
    feedbackErro:
      "Cuidado: os sentidos enganam. Você já sonhou algo tão real que parecia verdade? Descartes vai mostrar que a certeza mais forte NÃO vem dos sentidos — vem do pensamento.",
    falaFinal: "Certeza absoluta = pensamento. Sentidos ficam em segundo lugar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave para entrar nas Meditações de Descartes.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "duvida-metodica",
        capa: "1. Dúvida metódica",
        emoji: "❓",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "DÚVIDA METÓDICA não é ficar em dúvida pra sempre — é um MÉTODO, uma ferramenta. Descartes decide duvidar de propósito de tudo o que puder ser duvidado, pra ver o que RESISTE. O que sobrar depois de tudo derrubado é uma certeza sólida. É como testar um alicerce batendo em cada tijolo: os frágeis caem, os fortes ficam.",
        exemplo:
          "Ex.: duvido dos sentidos (às vezes enganam), da matemática (e se um gênio me confunde?), do próprio corpo (e se for sonho?). Só o pensamento resiste.",
        fotoUrl: meditacoes,
      },
      {
        id: "genio-maligno",
        capa: "2. Gênio Maligno",
        emoji: "👹",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "GÊNIO MALIGNO é uma HIPÓTESE extrema criada por Descartes: 'imagine um ser super poderoso que gasta o tempo todo me enganando — fazendo eu ver coisas que não existem, acreditar em contas erradas, confundir sonho com realidade'. Se isso for verdade, absolutamente nada externo é confiável. É o teste-limite da dúvida.",
        exemplo:
          "Ex.: hoje é a versão 'e se eu estiver numa simulação de computador tipo Matrix?'. Descartes chegou nessa ideia 400 anos antes.",
        fotoUrl: duvida,
      },
      {
        id: "cogito",
        capa: "3. Cogito, ergo sum",
        emoji: "💡",
        cor: "from-amber-400 to-orange-600",
        conteudo:
          "COGITO, ERGO SUM significa 'penso, logo existo' (latim). É a única coisa que resiste à dúvida: mesmo que o gênio maligno me engane em tudo, ele NÃO consegue me enganar sobre eu estar pensando — porque pra ser enganado eu já preciso estar pensando. É a primeira certeza indestrutível da modernidade.",
        exemplo:
          "Ex.: duvide agora que você está pensando. Não dá — o próprio ato de duvidar É pensar. Cogito.",
        fotoUrl: cogito,
      },
    ],
    falaFinal: "Dúvida metódica, gênio maligno, cogito. As três alavancas de Descartes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "4 momentos da experiência filosófica que mudou o pensamento ocidental.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: meditacoes,
    pontos: [
      {
        id: "quarto-aquecido",
        x: 24,
        y: 32,
        emoji: "🕯️",
        cor: "from-amber-500 to-orange-700",
        titulo: "1619 — o quarto aquecido",
        texto:
          "Descartes tem 23 anos e serve como soldado no exército. Preso pelo inverno rigoroso, se tranca sozinho num quarto com estufa. Ali, sem escola, sem professor, sem tradição, ele decide fazer uma coisa que ninguém tinha feito antes: reconstruir todo o conhecimento humano a partir da sua própria razão. É o nascimento simbólico da MODERNIDADE FILOSÓFICA.",
        fotoUrl: meditacoes,
      },
      {
        id: "duvida-sentidos",
        x: 74,
        y: 30,
        emoji: "👁️",
        cor: "from-sky-500 to-blue-700",
        titulo: "1ª camada — duvidar dos sentidos",
        texto:
          "Descartes começa suave: 'os sentidos me enganam às vezes'. Ilusões de ótica, remo torto na água, febre que faz ver coisas. Se enganam às vezes, não são fonte confiável de certeza absoluta. Cai a primeira camada — o mundo visível já não pode ser o alicerce.",
        fotoUrl: descartes,
      },
      {
        id: "genio-maligno",
        x: 28,
        y: 70,
        emoji: "👹",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "2ª camada — e se um gênio maligno me engana em tudo?",
        texto:
          "Descartes vai fundo: 'e se um espírito super poderoso gasta o tempo todo me enganando — no que vejo, no que calculo, até em 2+2=4?'. Nessa hipótese extrema, nem a matemática se salva. Toda ideia herdada da escola e da tradição fica sob suspeita. Parece que sobrou nada.",
        fotoUrl: duvida,
      },
      {
        id: "cogito",
        x: 76,
        y: 70,
        emoji: "💡",
        cor: "from-amber-400 to-orange-600",
        titulo: "1637 — 'Penso, logo existo'",
        texto:
          "Aí vem a virada: por mais que o gênio maligno me engane, uma coisa ele NÃO pode fazer — me fazer duvidar sem eu pensar. Pra ser enganado, eu preciso existir como algo que pensa. COGITO, ERGO SUM. É a primeira certeza indestrutível, e sobre ela Descartes tenta reconstruir toda a ciência moderna. A partir daqui a filosofia deixa de partir de Deus ou da tradição — parte do EU.",
        fotoUrl: cogito,
      },
    ],
    falaFinal:
      "Quarto → dúvida dos sentidos → gênio maligno → cogito. Nasce o sujeito moderno.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra afinar o radar cartesiano.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "A DÚVIDA METÓDICA de Descartes serve pra…",
        fotoUrl: meditacoes,
        cards: [
          {
            id: "encontrar-certeza",
            emoji: "🧱",
            titulo: "Derrubar tudo que é frágil e achar uma certeza indestrutível",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "desistir",
            emoji: "🙅",
            titulo: "Desistir de conhecer o mundo — nada é verdade",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "provocar",
            emoji: "😈",
            titulo: "Só provocar os professores da escola",
            cor: "from-red-500 to-rose-700",
          },
        ],
        correta: "encontrar-certeza",
        feedbackAcerto:
          "Isso. A dúvida é MÉTODO — ferramenta pra achar o que resiste. Não é ceticismo desistente.",
        feedbackErro:
          "Descartes NÃO era cético desistente. Ele usa a dúvida como escavadeira: derruba o frágil pra achar o sólido.",
      },
      {
        id: "q2",
        pergunta: "O GÊNIO MALIGNO é…",
        fotoUrl: duvida,
        cards: [
          {
            id: "hipotese",
            emoji: "🎭",
            titulo: "Uma hipótese extrema pra testar até onde vai a dúvida",
            cor: "from-purple-500 to-fuchsia-700",
          },
          {
            id: "diabo",
            emoji: "😈",
            titulo: "Uma crença religiosa de Descartes no Diabo",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "personagem",
            emoji: "🦸",
            titulo: "Um personagem de um livro de ficção que ele leu",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "hipotese",
        feedbackAcerto:
          "Perfeito. É uma FICÇÃO FILOSÓFICA — o extremo da dúvida. Hoje seria 'e se eu vivo numa simulação?'.",
        feedbackErro:
          "Não é diabo nem personagem — é HIPÓTESE, uma experiência mental pra levar a dúvida ao limite.",
      },
      {
        id: "q3",
        pergunta: "'Cogito, ergo sum' significa…",
        fotoUrl: cogito,
        cards: [
          {
            id: "penso-existo",
            emoji: "💡",
            titulo: "Penso, logo existo",
            cor: "from-amber-400 to-orange-600",
          },
          {
            id: "penso-sou-livre",
            emoji: "🕊️",
            titulo: "Penso, logo sou livre",
            cor: "from-emerald-400 to-teal-600",
          },
          {
            id: "duvido-erro",
            emoji: "❓",
            titulo: "Duvido, logo erro",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "penso-existo",
        feedbackAcerto:
          "Isso. A certeza mínima e indestrutível: se pensa, existe. Alicerce da ciência moderna.",
        feedbackErro:
          "É 'penso, logo existo'. Liberdade e erro vêm depois — o cogito é a base.",
      },
    ],
    falaFinal: "3 acertos = radar cartesiano calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "cenaTematica",
    aurora:
      "Personagens e lugares desta virada histórica.",
    instrucao: "Toque em cada card",
    cenas: [
      {
        id: "descartes",
        titulo: "René Descartes (1596–1650)",
        subtitulo: "O pai da filosofia moderna",
        emoji: "🧑‍🔬",
        cor: "from-sky-500 to-blue-700",
        descricao:
          "Francês, matemático, filósofo e soldado. Criou a geometria analítica (o plano cartesiano leva seu nome). Escreveu o 'Discurso do Método' (1637) em francês — não em latim — pra qualquer pessoa alfabetizada poder ler. É um gesto revolucionário: filosofia deixa de ser só dos padres.",
        fotoUrl: descartes,
      },
      {
        id: "quarto",
        titulo: "O quarto aquecido — 1619",
        subtitulo: "O laboratório da modernidade",
        emoji: "🕯️",
        cor: "from-amber-500 to-orange-700",
        descricao:
          "Numa cidade da Alemanha (perto de Ulm), Descartes passa um inverno inteiro isolado num quarto com estufa. Ali tem 3 sonhos que descreve como visões filosóficas. Sai dali convencido de que precisa reconstruir TODO o saber a partir da razão individual. É o momento mítico do nascimento do 'eu penso' moderno.",
        fotoUrl: meditacoes,
      },
      {
        id: "meditacoes",
        titulo: "'Meditações Metafísicas' — 1641",
        subtitulo: "O livro que estruturou a dúvida",
        emoji: "📖",
        cor: "from-purple-500 to-fuchsia-700",
        descricao:
          "6 meditações. Na 1ª ele derruba tudo (sentidos, matemática, gênio maligno). Na 2ª chega ao cogito. Nas seguintes tenta provar Deus e reconstruir o mundo. Todo curso universitário de filosofia hoje ainda passa por esse livro — porque ele fundou a maneira MODERNA de pensar: partir do sujeito, não da tradição.",
        fotoUrl: cogito,
      },
    ],
    falaFinal:
      "Descartes, o quarto, o livro. A tríade que abre a Modernidade filosófica.",
  },

  cena07_praticaGuiada: {
    tipo: "arrastarParaAlvo",
    aurora:
      "Classifique 6 afirmações: sobrevive à dúvida cartesiana ou NÃO sobrevive?",
    instrucao: "Arraste cada card pro alvo certo",
    titulo: "Testando o alicerce",
    alvos: [
      {
        id: "sobrevive",
        rotulo: "SOBREVIVE à dúvida",
        emoji: "🧱",
        cor: "from-emerald-500 to-teal-700",
      },
      {
        id: "cai",
        rotulo: "CAI na dúvida",
        emoji: "💥",
        cor: "from-red-500 to-rose-700",
      },
    ],
    itens: [
      {
        id: "i1",
        texto: "'Estou pensando neste exato momento'",
        emoji: "🧠",
        alvoCertoId: "sobrevive",
      },
      {
        id: "i2",
        texto: "'Vejo uma mesa na minha frente'",
        emoji: "🪑",
        alvoCertoId: "cai",
      },
      {
        id: "i3",
        texto: "'2 + 2 = 4' (se o gênio maligno existir)",
        emoji: "🔢",
        alvoCertoId: "cai",
      },
      {
        id: "i4",
        texto: "'Eu existo como algo que pensa'",
        emoji: "💡",
        alvoCertoId: "sobrevive",
      },
      {
        id: "i5",
        texto: "'Meu corpo tem duas mãos'",
        emoji: "✋",
        alvoCertoId: "cai",
      },
      {
        id: "i6",
        texto: "'Estou duvidando de alguma coisa'",
        emoji: "❓",
        alvoCertoId: "sobrevive",
      },
    ],
    feedbackFinal:
      "Só sobrevive o que envolve o próprio ato de pensar. Sentidos, corpo e até matemática caem sob a dúvida extrema.",
    falaFinal:
      "3 sobrevivem, 3 caem. O alicerce é fininho — e é o cogito.",
  },

  cena08_missao: {
    tipo: "missaoFamilia",
    aurora:
      "Missão de campo em casa: virar Descartes por 10 minutos.",
    titulo: "Meditação metódica",
    passos: [
      "1. Escolha uma crença sua sobre alguma coisa (ex.: 'meu time é o melhor', 'aquele professor não gosta de mim', 'redes sociais são só entretenimento').",
      "2. Pergunte: essa crença veio de onde? Sentidos, tradição, moda, alguém falou?",
      "3. Aplique a dúvida metódica: existe algum motivo pra duvidar dela?",
      "4. Registre por escrito (ou por áudio): sobrou alguma certeza indestrutível depois da dúvida?",
    ],
    registro: "📸 Foto do caderno OU 🎙️ áudio de 30s explicando o que sobrou",
    falaFinal:
      "Você acabou de fazer, na sua casa, o que Descartes fez em 1619 num quarto aquecido.",
  },

  cena09_desafio: {
    tipo: "encaixePecas",
    aurora:
      "6 situações contemporâneas — encaixe qual conceito cartesiano cada uma revela.",
    instrucao: "Ligue a situação ao conceito",
    pecas: [
      {
        id: "duvida-metodica",
        rotulo: "Dúvida metódica",
        emoji: "❓",
        cor: "from-sky-500 to-blue-700",
      },
      {
        id: "sentidos-enganam",
        rotulo: "Sentidos enganam",
        emoji: "👁️",
        cor: "from-amber-500 to-orange-700",
      },
      {
        id: "genio-maligno",
        rotulo: "Gênio maligno",
        emoji: "👹",
        cor: "from-purple-500 to-fuchsia-700",
      },
      {
        id: "cogito",
        rotulo: "Cogito ergo sum",
        emoji: "💡",
        cor: "from-emerald-500 to-teal-700",
      },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Vi um vídeo no TikTok, será que é real?'",
          emoji: "📱",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Checar fontes antes de acreditar",
          emoji: "🔍",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Antes de acreditar, duvidar de propósito.",
        pecaCertaId: "duvida-metodica",
        feedbackAcerto:
          "Isso. DÚVIDA METÓDICA — não é desconfiar de tudo pra sempre, é checar antes de aceitar.",
        feedbackErro:
          "É DÚVIDA METÓDICA: duvidar de propósito pra depois aceitar só o que passa no teste.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Achei que era meu amigo acenando, era outra pessoa'",
          emoji: "🙋",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Visão pode enganar à distância",
          emoji: "👀",
          cor: "from-yellow-400 to-orange-600",
        },
        contexto: "Os sentidos falharam num caso simples.",
        pecaCertaId: "sentidos-enganam",
        feedbackAcerto:
          "Perfeito. SENTIDOS ENGANAM — não são fonte de certeza absoluta.",
        feedbackErro:
          "É SENTIDOS ENGANAM: se erram em coisas simples, não podem ser alicerce.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'E se tudo isso for uma simulação tipo Matrix?'",
          emoji: "🕶️",
          cor: "from-purple-400 to-fuchsia-600",
        },
        municipioB: {
          nome: "Hipótese extrema pra testar a realidade",
          emoji: "🧪",
          cor: "from-fuchsia-400 to-purple-600",
        },
        contexto: "Versão contemporânea da mesma experiência.",
        pecaCertaId: "genio-maligno",
        feedbackAcerto:
          "Isso. Matrix É o GÊNIO MALIGNO do século XXI — a mesma hipótese-limite.",
        feedbackErro:
          "É GÊNIO MALIGNO: Descartes inventou a Matrix filosófica 400 anos antes de Neo.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Mesmo em dúvida, eu SEI que estou pensando agora'",
          emoji: "💭",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Certeza indestrutível",
          emoji: "🧱",
          cor: "from-teal-400 to-emerald-600",
        },
        contexto: "O único ponto que resiste a qualquer dúvida.",
        pecaCertaId: "cogito",
        feedbackAcerto:
          "Perfeito. COGITO — a certeza que sobra depois que tudo caiu.",
        feedbackErro:
          "É COGITO: pra duvidar já preciso pensar. Logo, existo pensando.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Aquela vara na piscina parece torta — mas está reta'",
          emoji: "🏊",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Ilusão de ótica na água",
          emoji: "🌊",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Exemplo clássico do próprio Descartes.",
        pecaCertaId: "sentidos-enganam",
        feedbackAcerto:
          "Isso. SENTIDOS ENGANAM — Descartes usou exatamente esse exemplo.",
        feedbackErro:
          "É SENTIDOS ENGANAM — a vara está reta, a visão distorce na refração.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Antes de acreditar no boato, vou pesquisar'",
          emoji: "🧐",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Suspender o juízo até ter evidência",
          emoji: "⚖️",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Método cartesiano aplicado à internet.",
        pecaCertaId: "duvida-metodica",
        feedbackAcerto:
          "Perfeito. DÚVIDA METÓDICA — vacina contra fake news.",
        feedbackErro:
          "É DÚVIDA METÓDICA — suspender o juízo até ter razão pra aceitar.",
      },
    ],
    falaFinal:
      "6 casos, 4 conceitos. Descartes está mais vivo do que nunca.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza rápida: 2 tipos de conhecimento — Descartes só confia num.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "opiniao-herdada",
        rotulo: "OPINIÃO HERDADA (frágil)",
        emoji: "📜",
        percentual: 50,
        cor: "#94a3b8",
        descricao:
          "Aceitar uma ideia só porque a escola, os pais, a tradição ou a internet disseram. Não passou pelo teste da dúvida — pode cair a qualquer momento. Descartes chama isso de PRÉ-JUÍZO (pré = antes, juízo = pensar por si).",
        exemplos: ["📺 Aceitar boato sem checar", "📖 Repetir o que o livro disse sem pensar", "👥 Concordar por pressão social"],
      },
      {
        id: "conhecimento-claro",
        rotulo: "CONHECIMENTO CLARO E DISTINTO (sólido)",
        emoji: "💡",
        percentual: 50,
        cor: "#38bdf8",
        descricao:
          "Uma ideia que o próprio pensamento examinou, testou pela dúvida e aceitou porque não pôde ser negada. Descartes chama de ideia CLARA (evidente) e DISTINTA (não se confunde com outras). O cogito é o modelo.",
        exemplos: ["🧠 'Estou pensando agora'", "➕ '2+2=4' depois de conferir", "🪞 'Existo como algo que pensa'"],
      },
    ],
    falaFinal:
      "Opinião herdada × conhecimento examinado. A modernidade escolhe o 2º.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA MODERNIDADE.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A DÚVIDA METÓDICA de Descartes é…",
        opcoes: [
          {
            id: "a",
            texto:
              "Um método pra derrubar o que é frágil e achar uma certeza indestrutível",
            correta: true,
          },
          { id: "b", texto: "Uma crise emocional em que se duvida de tudo pra sempre", correta: false },
          { id: "c", texto: "Um jeito de aceitar tudo que os professores ensinam", correta: false },
        ],
        feedbackAcerto:
          "Isso. Dúvida é MÉTODO — ferramenta pra escavar até o alicerce sólido.",
        feedbackErro:
          "Não é crise nem obediência: é MÉTODO. Duvida-se de propósito, temporariamente, pra achar o que resiste.",
      },
      {
        id: "av2",
        pergunta: "A hipótese do GÊNIO MALIGNO serve pra…",
        opcoes: [
          { id: "a", texto: "Levar a dúvida ao extremo e testar se até a matemática resiste", correta: true },
          { id: "b", texto: "Provar que o Diabo existe", correta: false },
          { id: "c", texto: "Assustar o leitor pra ele parar de duvidar", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. É um EXPERIMENTO MENTAL — a Matrix filosófica de 1641.",
        feedbackErro:
          "Não é religioso nem susto: é HIPÓTESE-LIMITE pra empurrar a dúvida até onde puder ir.",
      },
      {
        id: "av3",
        pergunta:
          "COGITO, ERGO SUM é a primeira certeza porque…",
        opcoes: [
          {
            id: "a",
            texto:
              "Mesmo que tudo seja ilusão, pra duvidar eu já preciso estar pensando — logo, existo",
            correta: true,
          },
          { id: "b", texto: "Descartes provou por experimento científico no laboratório", correta: false },
          { id: "c", texto: "Deus revelou a Descartes num sonho", correta: false },
        ],
        feedbackAcerto:
          "Isso. O cogito é AUTOEVIDENTE: negá-lo já é confirmá-lo. Alicerce da ciência moderna.",
        feedbackErro:
          "Não vem de laboratório nem de revelação: é lógica pura. Duvidar exige pensar, pensar exige existir.",
      },
    ],
    selo: {
      nome: "Investigador da Modernidade",
      subtitulo: "Insígnia do Cogito e da Dúvida Metódica",
      emoji: "🕯️",
      cor: "from-sky-400 to-cyan-700",
    },
    falaFinal:
      "Insígnia conquistada! Você entrou no laboratório de Descartes e saiu com o cogito na mão.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Investigador da Modernidade" },
};
