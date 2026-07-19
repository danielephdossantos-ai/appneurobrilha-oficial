import type { AulaGeoV1 } from "../../types";
import { url as aristoteles } from "@/assets/filosofia-7ano/u2-aristoteles.jpg.asset.json";
import { url as meioTermo } from "@/assets/filosofia-7ano/u2-meio-termo.jpg.asset.json";
import { url as eudaimonia } from "@/assets/filosofia-7ano/u2-eudaimonia.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 2 · Aula 01
 * "Aristóteles e a Vida Boa" — EF07FI02 (autoral)
 * Tema: virtude como hábito, meio-termo, eudaimonia.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-aristoteles-vida-boa",
  titulo: "Aristóteles e a Vida Boa",
  iconeTrilha: "🏹",
  bncc: ["EF07FI02"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Imagine o mestre e o discípulo.",
    mapaUrl: aristoteles,
    imagemDestaqueUrl: aristoteles,
    aurora:
      "Investigador, Platão foi mestre de um aluno teimoso: Aristóteles. Ele concordou com quase tudo, mas discordou de uma coisa central: pra Aristóteles, a virtude NÃO nasce pronta na alma — ela é um HÁBITO que a gente treina, como um arqueiro que erra 100 flechas até acertar. E o alvo não é 'ser famoso' nem 'ser rico': é EUDAIMONIA — florescer como ser humano.",
    falaFinal:
      "Nesta aula: virtude como hábito, meio-termo entre extremos, e a vida boa como projeto.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: uma pessoa se torna corajosa como?",
    pergunta: "Coragem é…",
    opcoes: [
      {
        id: "habito",
        titulo: "Um HÁBITO treinado em pequenas escolhas",
        subtitulo: "cada vez que enfrenta um medinho, fica mais corajosa",
        emoji: "🏹",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "dom",
        titulo: "Um DOM que já se nasce com ele",
        subtitulo: "ou tem, ou não tem, e pronto",
        emoji: "🎁",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "habito",
    feedbackAcerto:
      "Isso. Pra Aristóteles: ninguém nasce virtuoso — a gente se TORNA virtuoso agindo virtuosamente, como quem aprende violão tocando violão.",
    feedbackErro:
      "Aristóteles rebate: 'nos tornamos justos praticando atos justos, corajosos praticando atos corajosos'. É hábito, não dom.",
    falaFinal: "Virtude = ARETÉ, e areté se treina.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave da Ética a Nicômaco.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "arete",
        capa: "1. Areté (virtude)",
        emoji: "🏹",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "ARETÉ (a-ré-tê) é 'excelência' — a capacidade de fazer bem aquilo que é próprio de você. Um bom martelo tem areté quando prega bem; um humano tem areté quando pensa bem, age bem, convive bem. Virtude, pra Aristóteles, é um hábito adquirido pela repetição de boas ações.",
        exemplo:
          "Ex.: coragem não é 'não sentir medo'. É agir bem MESMO com medo — e isso a gente aprende praticando.",
        fotoUrl: aristoteles,
      },
      {
        id: "meio-termo",
        capa: "2. Meio-termo",
        emoji: "⚖️",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "Toda virtude, diz Aristóteles, está no MEIO entre dois extremos ruins. Coragem = meio entre COVARDIA (medo demais) e TEMERIDADE (medo de menos, imprudência). Generosidade = meio entre AVAREZA e ESBANJAMENTO. Não é um meio matemático — é o ponto certo pra cada situação.",
        exemplo:
          "Ex.: um arqueiro mira no centro do alvo. Erra pra esquerda (extremo A), erra pra direita (extremo B), acerta no meio-termo — que muda com o vento.",
        fotoUrl: meioTermo,
      },
      {
        id: "eudaimonia",
        capa: "3. Eudaimonia",
        emoji: "🌱",
        cor: "from-lime-500 to-green-700",
        conteudo:
          "EUDAIMONIA (eu-dai-mo-ní-a) não é 'felicidade' de sorriso rápido. É FLORESCIMENTO — realizar o que há de melhor em você ao longo da vida inteira. Uma vida boa é uma vida de virtudes praticadas em comunidade. Prazer sozinho não sustenta; virtude sim.",
        exemplo:
          "Ex.: ganhar na loteria dá alegria por semanas. Cultivar amizades verdadeiras dá eudaimonia por décadas.",
        fotoUrl: eudaimonia,
      },
    ],
    falaFinal: "Areté, meio-termo, eudaimonia. Trilogia aristotélica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "4 momentos-chave da Ética a Nicômaco. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: eudaimonia,
    pontos: [
      {
        id: "liceu",
        x: 22,
        y: 34,
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        titulo: "335 a.C. — Aristóteles funda o Liceu",
        texto:
          "Depois de estudar 20 anos com Platão, Aristóteles funda sua própria escola em Atenas: o LICEU. Lá ele investiga TUDO — biologia, política, retórica, ética. Ensinava andando (por isso 'peripatético'). O curso mais famoso vira o livro Ética a Nicômaco, dedicado ao filho.",
        fotoUrl: aristoteles,
      },
      {
        id: "virtude-habito",
        x: 74,
        y: 30,
        emoji: "🔁",
        cor: "from-emerald-500 to-teal-700",
        titulo: "Virtude é hábito, não sentimento",
        texto:
          "Aristóteles inverte Platão: virtude não é uma ideia eterna que a alma lembra — é um HÁBITO que a gente forma repetindo boas ações. 'Uma andorinha só não faz verão; um dia só de virtude não faz o virtuoso'. É treino, dia após dia.",
        fotoUrl: aristoteles,
      },
      {
        id: "meio",
        x: 28,
        y: 70,
        emoji: "⚖️",
        cor: "from-sky-500 to-blue-700",
        titulo: "A doutrina do meio-termo",
        texto:
          "Toda virtude é um MEIO-TERMO entre dois vícios. Coragem entre covardia e temeridade. Generosidade entre avareza e esbanjamento. Honestidade entre falsa modéstia e vanglória. Não é 'ficar em cima do muro' — é escolher o ponto certo pra cada situação.",
        fotoUrl: meioTermo,
      },
      {
        id: "eudaimonia",
        x: 76,
        y: 70,
        emoji: "🌱",
        cor: "from-lime-500 to-green-700",
        titulo: "Eudaimonia: o fim de tudo",
        texto:
          "Pra que servem as virtudes? Pra EUDAIMONIA — florescer como ser humano. Não é prazer momentâneo (isso é hedonê), nem sucesso externo. É uma vida inteira vivida com excelência, em comunidade, exercendo o que a gente tem de mais próprio: a razão.",
        fotoUrl: eudaimonia,
      },
    ],
    falaFinal:
      "Liceu → virtude-hábito → meio-termo → eudaimonia. Toda ética das virtudes sai daí.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Pra Aristóteles, a virtude é…",
        fotoUrl: aristoteles,
        cards: [
          {
            id: "habito",
            emoji: "🔁",
            titulo: "Um hábito adquirido pela repetição de boas ações",
            cor: "from-amber-500 to-orange-700",
          },
          {
            id: "ideia",
            emoji: "💭",
            titulo: "Uma ideia eterna que a alma lembra",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "sorte",
            emoji: "🍀",
            titulo: "Uma sorte que uns têm e outros não",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "habito",
        feedbackAcerto:
          "Isso. Hábito adquirido. Como aprender violão: tocando.",
        feedbackErro:
          "Ideia eterna é Platão. Aristóteles é o filósofo do HÁBITO — a gente se torna virtuoso praticando.",
      },
      {
        id: "q2",
        pergunta: "Coragem, segundo Aristóteles, é o meio-termo entre…",
        fotoUrl: meioTermo,
        cards: [
          {
            id: "cov-tem",
            emoji: "⚖️",
            titulo: "Covardia e temeridade",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "amor-odio",
            emoji: "💔",
            titulo: "Amor e ódio",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "riqueza-pobreza",
            emoji: "💰",
            titulo: "Riqueza e pobreza",
            cor: "from-amber-400 to-orange-600",
          },
        ],
        correta: "cov-tem",
        feedbackAcerto:
          "Exato. Covardia (medo demais) × temeridade (medo de menos). Coragem no meio.",
        feedbackErro:
          "Coragem lida com MEDO. Meio-termo entre covardia (medo demais) e temeridade (imprudência).",
      },
      {
        id: "q3",
        pergunta: "Eudaimonia é melhor traduzida como…",
        fotoUrl: eudaimonia,
        cards: [
          {
            id: "floresc",
            emoji: "🌱",
            titulo: "Florescimento humano por uma vida inteira de virtudes",
            cor: "from-lime-500 to-green-700",
          },
          {
            id: "prazer",
            emoji: "🍫",
            titulo: "Prazer imediato e intenso",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "sucesso",
            emoji: "🏆",
            titulo: "Sucesso financeiro e fama",
            cor: "from-amber-400 to-orange-600",
          },
        ],
        correta: "floresc",
        feedbackAcerto:
          "Perfeito. Eudaimonia = florescer como humano, ao longo da vida. Nada de sorriso rápido.",
        feedbackErro:
          "Prazer é hedonê. Fama é doxa. Eudaimonia é FLORESCIMENTO — vida boa inteira, com virtudes.",
      },
    ],
    falaFinal: "Radar aristotélico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A ética das virtudes vive em escolas e projetos de formação humana pelo Brasil. Escolha 5 estados com forte rede de ensino profissionalizante (Sistema S).",
    instrucao: "Acenda 5 estados com forte formação técnica",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RS", "PR", "SC"],
      pergunta:
        "Quais 5 estados concentram grande rede SENAI/SENAC de formação por hábito profissional?",
    },
    falaFinal:
      "SP, MG, RS, PR, SC. Escolas onde areté profissional se forma no dia a dia.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como uma virtude se forma, segundo Aristóteles? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do impulso bruto à virtude:",
    paradas: [
      {
        id: "situacao",
        emoji: "🎯",
        rotulo: "1. Aparece uma situação",
        descricao:
          "A vida apresenta um desafio: medo, tentação, injustiça, decisão difícil.",
      },
      {
        id: "escolha",
        emoji: "🤔",
        rotulo: "2. Escolha do meio-termo",
        descricao:
          "A razão avalia os extremos e busca o ponto certo pra ESTA situação.",
      },
      {
        id: "acao",
        emoji: "✋",
        rotulo: "3. Ação praticada",
        descricao:
          "Age no meio-termo, mesmo que dê trabalho e vá contra o impulso fácil.",
      },
      {
        id: "repeticao",
        emoji: "🔁",
        rotulo: "4. Repetição virando hábito",
        descricao:
          "Repete a boa ação em situações parecidas até virar segunda natureza.",
      },
      {
        id: "virtude",
        emoji: "🌱",
        rotulo: "5. Virtude formada (rumo à eudaimonia)",
        descricao:
          "O hábito virou caráter estável — mais uma peça da vida boa.",
      },
    ],
    ordemCerta: ["situacao", "escolha", "acao", "repeticao", "virtude"],
    feedbackAcerto:
      "Exato. Situação → escolha do meio → ação → repetição → virtude. Como um arqueiro treinando.",
    feedbackErro:
      "A ordem é: situação surge → escolho o meio-termo → ajo → repito → vira virtude.",
    falaFinal: "5 passos. Toda ética das virtudes cabe aqui.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 2 — Aristóteles e a vida boa",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Aristóteles foi aluno de Platão por 20 anos, mas discordou de uma coisa central: a virtude NÃO é uma ideia eterna que a alma lembra — é um HÁBITO que a gente forma repetindo boas ações.",
        chaves: ["Aristóteles", "hábito"],
      },
      {
        id: "p2",
        texto:
          "Toda virtude, diz ele, está no MEIO-TERMO entre dois vícios. Coragem entre covardia e temeridade. Generosidade entre avareza e esbanjamento. Não é ficar em cima do muro — é escolher o ponto certo pra cada situação.",
        chaves: ["meio-termo", "virtude"],
      },
      {
        id: "p3",
        texto:
          "O objetivo de todas as virtudes é a EUDAIMONIA — florescer como ser humano ao longo da vida inteira. Não é prazer rápido nem fama: é uma vida boa vivida com excelência, em comunidade, usando o que temos de mais próprio, a razão.",
        chaves: ["eudaimonia", "florescer"],
      },
      {
        id: "p4",
        texto:
          "Por isso Aristóteles compara o virtuoso a um ARQUEIRO: ele erra muitas flechas até aprender o meio-termo entre esquerda e direita, força e leveza. E como o vento muda, o meio muda — por isso virtude precisa de razão prática, não de fórmula.",
        chaves: ["arqueiro", "razão prática"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo ARQUEIRO DA VIRTUDE! Cada situação mostra dois extremos. Qual virtude está no MEIO-TERMO?",
    instrucao: "⏱️ Qual é o meio-termo?",
    duracaoSegundos: 15,
    pecas: [
      { id: "coragem", emoji: "🦁", rotulo: "Coragem" },
      { id: "generosidade", emoji: "🤲", rotulo: "Generosidade" },
      { id: "honestidade", emoji: "🫱", rotulo: "Honestidade" },
      { id: "temperanca", emoji: "🍎", rotulo: "Temperança" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "Covardia (fugir de tudo)",
          emoji: "🐔",
          cor: "from-slate-400 to-gray-600",
        },
        municipioB: {
          nome: "Temeridade (se jogar sem pensar)",
          emoji: "💥",
          cor: "from-red-400 to-rose-600",
        },
        contexto: "Entre medo demais e imprudência, qual virtude?",
        pecaCertaId: "coragem",
        feedbackAcerto:
          "Isso. CORAGEM = agir bem mesmo com medo, sem se jogar cegamente.",
        feedbackErro:
          "É CORAGEM — meio entre covardia (medo demais) e temeridade (imprudência).",
      },
      {
        id: "r2",
        municipioA: {
          nome: "Avareza (segurar tudo)",
          emoji: "💰",
          cor: "from-amber-400 to-yellow-600",
        },
        municipioB: {
          nome: "Esbanjamento (dar até o que falta)",
          emoji: "💸",
          cor: "from-red-400 to-rose-600",
        },
        contexto: "Entre agarrar tudo e torrar tudo, qual virtude?",
        pecaCertaId: "generosidade",
        feedbackAcerto:
          "Isso. GENEROSIDADE — dá o certo, na hora certa, pra quem precisa.",
        feedbackErro:
          "É GENEROSIDADE — meio entre avareza e esbanjamento.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "Falsa modéstia (esconder o que sabe)",
          emoji: "🙈",
          cor: "from-slate-400 to-gray-600",
        },
        municipioB: {
          nome: "Vanglória (inventar que sabe mais)",
          emoji: "🦚",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "Entre esconder e inflar, qual virtude?",
        pecaCertaId: "honestidade",
        feedbackAcerto:
          "Isso. HONESTIDADE — diz o que é, sem menos nem mais.",
        feedbackErro:
          "É HONESTIDADE — nem esconder o mérito, nem inventar mérito.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "Insensibilidade (não sentir prazer nenhum)",
          emoji: "🥶",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Descontrole (só correr atrás de prazer)",
          emoji: "🔥",
          cor: "from-red-400 to-rose-600",
        },
        contexto: "Entre nenhum prazer e prazer sem freio, qual virtude?",
        pecaCertaId: "temperanca",
        feedbackAcerto:
          "Perfeito. TEMPERANÇA — sente prazer com medida, no que vale a pena.",
        feedbackErro:
          "É TEMPERANÇA — meio entre insensibilidade e descontrole.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "Deixa o colega ser humilhado por medo",
          emoji: "😰",
          cor: "from-slate-400 to-gray-600",
        },
        municipioB: {
          nome: "Parte pra briga sem pensar",
          emoji: "👊",
          cor: "from-red-400 to-rose-600",
        },
        contexto: "Defender o colega falando firme, sem violência.",
        pecaCertaId: "coragem",
        feedbackAcerto:
          "Isso. CORAGEM prática — enfrentar o medo com palavras firmes.",
        feedbackErro:
          "É CORAGEM: enfrentar o medo do jeito certo — nem fugir, nem sair batendo.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "Come sozinho sem oferecer",
          emoji: "🍔",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Divide o lanche com o colega sem dinheiro",
          emoji: "🥪",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Ação que forma o hábito da virtude.",
        pecaCertaId: "generosidade",
        feedbackAcerto:
          "Perfeito. GENEROSIDADE — dá o que faz falta ao outro. Um dia = ato. Todo dia = virtude.",
        feedbackErro:
          "É GENEROSIDADE — pequeno gesto repetido vira virtude.",
      },
    ],
    falaFinal:
      "6 mirar. Você já lê o meio-termo — como um arqueiro treinado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 modos de buscar a vida boa.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "hedone",
        rotulo: "HEDONÊ (prazer imediato)",
        emoji: "🍫",
        percentual: 50,
        cor: "#f472b6",
        descricao:
          "Buscar prazer rápido e intenso. Diverte um pouco, mas não sustenta uma vida inteira. Aristóteles diria: é gostoso, não é eudaimonia.",
        exemplos: ["🍭 Comer doce sem parar", "📱 Rolar feed horas", "🎉 Só festa sem projeto"],
      },
      {
        id: "eudaimonia",
        rotulo: "EUDAIMONIA (florescimento)",
        emoji: "🌱",
        percentual: 50,
        cor: "#84cc16",
        descricao:
          "Uma vida inteira de virtudes praticadas em comunidade, exercendo a razão e formando bons hábitos. Dá trabalho, mas sustenta.",
        exemplos: ["📚 Aprender de verdade", "🤝 Cultivar amizades", "🎯 Formar bons hábitos"],
      },
    ],
    falaFinal:
      "Duas rotas pra 'vida boa'. Só a segunda passa no teste do tempo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia ARQUEIRO DAS VIRTUDES.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra Aristóteles, a virtude é fundamentalmente…",
        opcoes: [
          { id: "a", texto: "Um dom que se nasce com ele", correta: false },
          {
            id: "b",
            texto: "Um HÁBITO adquirido pela repetição de boas ações",
            correta: true,
          },
          { id: "c", texto: "Uma ideia eterna que a alma lembra", correta: false },
        ],
        feedbackAcerto:
          "Isso. Virtude é HÁBITO. Ninguém nasce virtuoso; a gente se torna praticando.",
        feedbackErro:
          "Ideia eterna é Platão. Aristóteles: virtude é HÁBITO formado com prática.",
      },
      {
        id: "av2",
        pergunta: "O 'meio-termo' aristotélico é…",
        opcoes: [
          {
            id: "a",
            texto: "O ponto certo entre dois extremos viciosos, ajustado à situação",
            correta: true,
          },
          { id: "b", texto: "Ficar em cima do muro sem opinião", correta: false },
          { id: "c", texto: "Uma média matemática entre dois números", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Meio-termo não é neutralidade covarde — é o ACERTO certo pra cada situação.",
        feedbackErro:
          "Não é 'ficar em cima do muro'. É o ponto CERTO entre dois vícios (ex.: coragem entre covardia e temeridade).",
      },
      {
        id: "av3",
        pergunta: "EUDAIMONIA é…",
        opcoes: [
          { id: "a", texto: "Prazer imediato e intenso", correta: false },
          {
            id: "b",
            texto:
              "Florescimento humano por uma vida inteira de virtudes praticadas em comunidade",
            correta: true,
          },
          { id: "c", texto: "Fama e riqueza", correta: false },
        ],
        feedbackAcerto:
          "Isso. Vida boa inteira, com virtudes, em comunidade, usando a razão. É trabalho de anos.",
        feedbackErro:
          "Prazer é hedonê. Fama é doxa. EUDAIMONIA é florescimento — projeto de vida inteira.",
      },
    ],
    selo: {
      nome: "Arqueiro das Virtudes",
      subtitulo: "Insígnia do Meio-Termo e da Eudaimonia",
      emoji: "🏹",
      cor: "from-amber-400 to-orange-700",
    },
    falaFinal:
      "Insígnia conquistada! Agora você mira no meio-termo, como Aristóteles pedia.",
  },

  recompensa: { xp: 390, moedas: 285, medalha: "Arqueiro das Virtudes" },
};
