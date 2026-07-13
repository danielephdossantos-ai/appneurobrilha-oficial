import type { AulaGeoV1 } from "../../types";
import mesaHistoriador from "@/assets/historia-3ano/mesa-historiador-caixas.jpg";
import fotoAntigaFamilia from "@/assets/historia-3ano/foto-antiga-familia.jpg";
import cartaAntiga from "@/assets/historia-3ano/carta-antiga.jpg";
import relogioBolso from "@/assets/historia-3ano/relogio-bolso.jpg";
import brinquedoLata from "@/assets/historia-3ano/brinquedo-lata.jpg";
import conceitoFonte from "@/assets/historia-3ano/conceito-fonte.jpg";
import conceitoPassado from "@/assets/historia-3ano/conceito-passado.jpg";
import quizPessoasTempo from "@/assets/historia-3ano/quiz-pessoas-tempo.jpg";
import quizRoupaEpoca from "@/assets/historia-3ano/quiz-roupa-epoca.jpg";

/**
 * História · 3º Ano · Unidade 1 · Aula 02
 * "Quem Conta a História?" (EF03HI01 / EF03HI02)
 *
 * SPEB 1.0 · Fase 3 — 11 cenas oficiais no engine PlayerGeoV1,
 * explicação + apoio visual em cada momento (memória obrigatória).
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-quem-conta-a-historia",
  titulo: "Quem Conta a História?",
  iconeTrilha: "🎙️",
  bncc: ["EF03HI01", "EF03HI02"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre a mesa. Cada objeto aponta pra UMA PESSOA que ajudou a contar a história.",
    mapaUrl: mesaHistoriador,
    aurora:
      "Brilha, hoje o Guardião da Memória trouxe uma pergunta: 'Quem foi que CONTOU essas histórias que a gente estuda?' A resposta não é UMA pessoa só — passa a lupa e descobre.",
    falaFinal:
      "Viu? A foto foi tirada por alguém, a carta foi escrita por alguém, o brinquedo foi guardado por alguém, e o vovô CONTA em entrevistas. História é contada por MUITAS vozes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de investigar, seu palpite: quem você acha que conta MELHOR a história de uma família?",
    pergunta: "Quem conta a história de uma família?",
    opcoes: [
      {
        id: "so-livro",
        titulo: "Só quem está no livro",
        subtitulo: "figura famosa",
        emoji: "📚",
        cor: "from-slate-400 to-slate-700",
      },
      {
        id: "muitas-vozes",
        titulo: "Muitas pessoas juntas",
        subtitulo: "avós, fotos, cartas, historiador",
        emoji: "👵👴📸",
        cor: "from-amber-400 to-orange-600",
      },
    ],
    respostaCerta: "muitas-vozes",
    feedbackAcerto:
      "Isso! A história de uma família se monta com MUITAS vozes juntas: memória de quem viveu + fontes que sobraram + trabalho do historiador.",
    feedbackErro:
      "Livro é UMA voz só. Pra contar direito, o historiador escuta várias pessoas e olha várias fontes.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai conhecer 4 tipos de 'contadores' da história.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Abri 4 cadernos com os principais NARRADORES da História. Cada um tem uma forma diferente de contar o passado — leia com atenção.",
    instrucao: "Leia cada caderno com atenção",
    cadernos: [
      {
        id: "testemunha",
        capa: "Testemunha",
        emoji: "👁️",
        cor: "from-sky-500 to-indigo-700",
        conteudo:
          "É a pessoa que VIU ou VIVEU o acontecimento. Ela conta como foi porque estava lá.",
        exemplo: "A vovó contando como era o casamento dela nos anos 1970.",
        fotoUrl: fotoAntigaFamilia,
      },
      {
        id: "narrador-oral",
        capa: "Narrador Oral",
        emoji: "🎙️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É quem PASSA a história de boca em boca — pais, avós, tios. A memória vira palavra falada.",
        exemplo: "O vovô contando o 'causo' do bisavô que ele ouviu quando era criança.",
        fotoUrl: conceitoPassado,
      },
      {
        id: "historiador",
        capa: "Historiador",
        emoji: "🔎",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "É quem ESTUDA várias fontes juntas — fotos, cartas, objetos, entrevistas — e conta a história com segurança.",
        exemplo: "O historiador que junta 10 cartas antigas pra explicar como as pessoas se comunicavam.",
        fotoUrl: conceitoFonte,
      },
      {
        id: "fonte",
        capa: "Fonte que Fala",
        emoji: "📸",
        cor: "from-rose-500 to-red-700",
        conteudo:
          "Uma FOTO, uma CARTA ou um OBJETO também 'contam' a história — sem falar, mostrando pistas.",
        exemplo: "Uma foto sépia mostra sozinha como as pessoas se vestiam.",
        fotoUrl: cartaAntiga,
      },
    ],
    falaFinal:
      "Agora você tem os 4 tipos de narradores: TESTEMUNHA, NARRADOR ORAL, HISTORIADOR e a própria FONTE. Todos contam — de jeitos diferentes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Volta comigo pra mesa do historiador. Toca em cada balão pra ouvir QUE PESSOA está contando aquela história.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: mesaHistoriador,
    pontos: [
      {
        id: "foto",
        x: 25,
        y: 40,
        emoji: "📸",
        cor: "from-sky-400 to-indigo-600",
        titulo: "A foto foi tirada por…",
        texto:
          "Um FOTÓGRAFO. Alguém pegou a câmera e apertou o botão. Essa pessoa escolheu quem entrava no retrato e como todos ficavam posicionados. A foto conta a história dela também.",
        fotoUrl: fotoAntigaFamilia,
      },
      {
        id: "carta",
        x: 60,
        y: 30,
        emoji: "✉️",
        cor: "from-amber-400 to-orange-600",
        titulo: "A carta foi escrita por…",
        texto:
          "Uma TESTEMUNHA da época. Ela sentou e contou pra outra pessoa o que estava vivendo. Cada palavra escolhida mostra o que era importante pra ela.",
        fotoUrl: cartaAntiga,
      },
      {
        id: "relogio",
        x: 45,
        y: 65,
        emoji: "⏰",
        cor: "from-stone-500 to-stone-800",
        titulo: "O relógio foi usado por…",
        texto:
          "O dono ORIGINAL. Ele carregou no bolso todo dia. O objeto sozinho já conta: 'aqui morou uma pessoa que precisava saber a hora antes de existir celular'.",
        fotoUrl: relogioBolso,
      },
      {
        id: "brinquedo",
        x: 80,
        y: 70,
        emoji: "🚂",
        cor: "from-rose-400 to-red-600",
        titulo: "O brinquedo foi guardado por…",
        texto:
          "Alguém que AMOU muito ele. Guardar um brinquedo por décadas é escolha. Essa pessoa é uma GUARDIÃ da memória — sem ela, o brinquedo teria virado sucata.",
        fotoUrl: brinquedoLata,
      },
    ],
    falaFinal:
      "Sacou? Atrás de cada fonte tem uma PESSOA que criou, escreveu, usou ou guardou. Todas ajudam a contar a história.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar ligado! Vou fazer 3 perguntas sobre quem conta a história. Escolhe o card certo pra o radar pousar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem é TESTEMUNHA da história?",
        fotoUrl: fotoAntigaFamilia,
        cards: [
          { id: "viu", emoji: "👁️", titulo: "Quem viveu e viu", cor: "from-sky-400 to-indigo-600" },
          { id: "leu", emoji: "📚", titulo: "Quem leu num livro", cor: "from-slate-400 to-slate-700" },
          { id: "adivinhou", emoji: "🔮", titulo: "Quem adivinhou", cor: "from-fuchsia-400 to-purple-600" },
        ],
        correta: "viu",
        feedbackAcerto:
          "Isso! Testemunha é quem ESTAVA LÁ. A pessoa que aparece na foto sépia é testemunha daquele casamento.",
        feedbackErro:
          "Repara: testemunha é quem VIU ou VIVEU o acontecimento — não quem só leu depois.",
      },
      {
        id: "q2",
        pergunta: "Quando o vovô conta um causo pra você, ele é…",
        fotoUrl: conceitoPassado,
        cards: [
          { id: "oral", emoji: "🎙️", titulo: "Narrador oral", cor: "from-amber-400 to-orange-600" },
          { id: "escritor", emoji: "✍️", titulo: "Escritor", cor: "from-emerald-400 to-teal-600" },
          { id: "pintor", emoji: "🎨", titulo: "Pintor", cor: "from-rose-400 to-pink-600" },
        ],
        correta: "oral",
        feedbackAcerto:
          "Combo! Contar de BOCA é ser narrador ORAL. A memória vira som e passa pra próxima geração.",
        feedbackErro:
          "Vovô está FALANDO, não escrevendo nem pintando. Isso é narração ORAL.",
      },
      {
        id: "q3",
        pergunta: "Quem JUNTA várias fontes pra contar a história com segurança?",
        fotoUrl: conceitoFonte,
        cards: [
          { id: "hist", emoji: "🔎", titulo: "O historiador", cor: "from-emerald-400 to-teal-600" },
          { id: "chef", emoji: "👨‍🍳", titulo: "O chef", cor: "from-amber-400 to-orange-600" },
          { id: "piloto", emoji: "✈️", titulo: "O piloto", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "hist",
        feedbackAcerto:
          "Exato! Historiador é o INVESTIGADOR — junta várias fontes antes de contar.",
        feedbackErro:
          "Chef cozinha, piloto voa. Quem investiga o passado é o HISTORIADOR 🔎.",
      },
    ],
    falaFinal:
      "Você já sabe distinguir testemunha, narrador oral e historiador. Cada um conta de um jeito.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Toda mesa de investigação tem CAMADAS de narradores. Liga os dois interruptores pra ver quem fala DIRETO da época e quem fala DE FORA olhando.",
    instrucao: "Toque nos interruptores",
    mapaUrl: mesaHistoriador,
    camadas: [
      {
        id: "dentro",
        rotulo: "Vozes de DENTRO da época",
        emoji: "🎙️",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 8, y: 25, w: 55, h: 55 },
        descricao:
          "Testemunhas, cartas escritas na hora, fotos tiradas na época, entrevistas com quem viveu. Falam com a voz de QUEM ESTAVA LÁ.",
      },
      {
        id: "fora",
        rotulo: "Vozes de FORA olhando o passado",
        emoji: "🔎",
        cor: "from-emerald-500 to-teal-700",
        rect: { x: 55, y: 55, w: 40, h: 40 },
        descricao:
          "Historiadores, professores, museus e livros de História. Não viveram a época — INVESTIGAM ela juntando as vozes de dentro.",
      },
    ],
    falaFinal:
      "Perceba: pra contar direito, o historiador (de fora) precisa das testemunhas (de dentro). Um depende do outro.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como uma história viaja da BOCA da vovó até o LIVRO na escola? Toca nas paradas na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Da memória até o livro de História: qual é o caminho?",
    paradas: [
      {
        id: "viveu",
        emoji: "👵",
        rotulo: "Alguém VIVEU",
        descricao: "A vovó vive uma época — brinca, se casa, trabalha. Isso vira memória dela.",
      },
      {
        id: "conta",
        emoji: "🎙️",
        rotulo: "Alguém CONTA",
        descricao: "A vovó conta pra família OU registra em foto, carta, diário. A memória sai da cabeça e vira fonte.",
      },
      {
        id: "investiga",
        emoji: "🔎",
        rotulo: "Historiador INVESTIGA",
        descricao: "O historiador junta várias fontes parecidas e compara pra ver o que combina.",
      },
      {
        id: "publica",
        emoji: "📚",
        rotulo: "Vira LIVRO",
        descricao: "A investigação vira livro, museu, aula — pra quem vem depois APRENDER.",
      },
    ],
    ordemCerta: ["viveu", "conta", "investiga", "publica"],
    feedbackAcerto:
      "Ordem certa! Da vida real até o livro passa por 4 mãos: quem viveu, quem contou, quem investigou e quem publicou.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: o que precisa acontecer ANTES pra história chegar num livro?",
    falaFinal:
      "Viu como é uma corrente? Se falta uma parada, a história se perde no caminho.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, investigador! Eu fico calada. Você lê o Diário do Historiador e vai tocando nas palavras importantes conforme lê.",
    tituloLivro: "📔 Diário do Historiador",
    subtitulo: "Página 2 — Quem conta a História?",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A História não é contada por uma pessoa só. Cada família tem testemunhas — pessoas que viveram uma época e lembram como era. A vovó, o vovô, o vizinho mais velho: todos são testemunhas.",
        chaves: ["testemunhas", "família", "época", "lembram"],
        definicoes: {
          "testemunhas":
            "Pessoas que VIVERAM ou VIRAM o acontecimento. Elas contam com a voz de quem estava lá.",
          "família":
            "Grupo de pessoas ligadas por parentesco. É a primeira roda de histórias que a criança escuta.",
          "época":
            "Um pedaço de tempo com jeito próprio de viver — a época da vovó tinha outros costumes que hoje.",
          "lembram":
            "Guardam na memória. A lembrança é uma FONTE oral: a história fica viva enquanto alguém lembra.",
        },
      },
      {
        id: "p2",
        texto:
          "Muita história é passada de boca em boca. É o narrador oral — o pai que conta como foi a infância, a tia que conta o causo do bisavô. Cada 'causo' é um pedaço de história que se salva.",
        chaves: ["boca em boca", "narrador oral", "causo", "salva"],
        definicoes: {
          "boca em boca":
            "Quando alguém FALA a história pra outra pessoa, que fala pra outra, e assim vai. Sem escrever.",
          "narrador oral":
            "Quem PASSA a história falando: pais, avós, tios. Fonte oral que atravessa gerações.",
          "causo":
            "Uma história curta contada pela família, geralmente engraçada ou marcante. Cada causo guarda um pedaço da época.",
          "salva":
            "Impede de se perder. Quando alguém CONTA, a memória vira palavra e não morre com quem viveu.",
        },
      },
      {
        id: "p3",
        texto:
          "O historiador é quem investiga tudo isso com método. Ele escuta testemunhas, lê cartas, olha fotos, estuda objetos. Depois compara várias fontes pra ter certeza antes de contar.",
        chaves: ["historiador", "investiga", "compara", "certeza"],
        definicoes: {
          "historiador":
            "Profissional que ESTUDA o passado usando fontes. É o investigador da História.",
          "investiga":
            "Procura pistas com atenção. Não aceita a primeira versão — busca provas em várias fontes.",
          "compara":
            "COLOCA lado a lado duas ou mais fontes pra ver se combinam. Se combinam, ganha certeza.",
          "certeza":
            "Segurança de que a história é verdadeira. Vem de várias fontes concordando, não de uma só.",
        },
      },
      {
        id: "p4",
        texto:
          "Até uma foto muda ou um brinquedo velho conta a história sozinho. As fontes mudas mostram pistas: roupas, cabelos, materiais, cenários. Elas também são narradores — só que sem voz.",
        chaves: ["mudas", "pistas", "materiais", "sem voz"],
        definicoes: {
          "mudas":
            "Fontes que NÃO FALAM: fotos, objetos, prédios. Contam mostrando, não falando.",
          "pistas":
            "Detalhes pequenos que revelam informação. Roupa, cabelo, material — cada detalhe é uma pista.",
          "materiais":
            "De que a coisa é feita — lata, madeira, plástico. O material mostra a época.",
          "sem voz":
            "Sem som. Mas quem ENXERGA os detalhes escuta a história do jeito do objeto.",
        },
      },
    ],
    falaFinal:
      "Você já sabe: história é contada por MUITAS vozes juntas — testemunhas, narradores orais, historiador e fontes mudas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Chegou o minijogo! Cada rodada mostra UM narrador em ação. Leia a pista e toque no TIPO CERTO de narrador antes do relógio zerar.",
    instrucao: "⏱️ Leia a pista e toque no narrador certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "testemunha", emoji: "👁️", rotulo: "Testemunha" },
      { id: "oral", emoji: "🎙️", rotulo: "Narrador Oral" },
      { id: "historiador", emoji: "🔎", rotulo: "Historiador" },
      { id: "fonte", emoji: "📸", rotulo: "Fonte muda" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Vovó Antônia", emoji: "👵", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Vovó Antônia se casou em 1970 e conta pra você TUDO que lembra daquele dia. Ela é qual tipo de narrador?",
        pecaCertaId: "testemunha",
        feedbackAcerto: "Isso! Ela VIVEU o acontecimento — é TESTEMUNHA 👁️.",
        feedbackErro: "Ela ESTAVA LÁ no casamento. Isso é TESTEMUNHA 👁️.",
      },
      {
        id: "r2",
        municipioA: { nome: "Papai", emoji: "🧔", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Seu pai NÃO viveu na época do bisavô, mas ouviu a história do bisavô do vovô — e agora conta pra você. Que narrador é?",
        pecaCertaId: "oral",
        feedbackAcerto: "Combo! Ele PASSA de boca em boca — é NARRADOR ORAL 🎙️.",
        feedbackErro: "Ele não viveu a época. Ele CONTA a memória que ouviu. Isso é ORAL 🎙️.",
      },
      {
        id: "r3",
        municipioA: { nome: "Dra. Marta", emoji: "👩‍🏫", cor: "from-indigo-500 to-violet-700" },
        municipioB: { nome: "Livro escolar", emoji: "📚", cor: "from-slate-500 to-slate-800" },
        contexto:
          "Dra. Marta estudou 200 cartas antigas e 50 fotos de família pra escrever o livro sobre a cidade. Ela é o quê?",
        pecaCertaId: "historiador",
        feedbackAcerto: "Boa! Investigou várias fontes e comparou — é HISTORIADORA 🔎.",
        feedbackErro: "Ela JUNTOU várias fontes e comparou. Isso é trabalho de HISTORIADORA 🔎.",
      },
      {
        id: "r4",
        municipioA: { nome: "Foto sépia", emoji: "📸", cor: "from-stone-500 to-stone-800" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Ninguém está falando. A foto sépia sozinha te mostra a roupa, o cabelo e o cenário de 1920. Que narrador é esse?",
        pecaCertaId: "fonte",
        feedbackAcerto: "Isso! Ela conta MOSTRANDO — é FONTE MUDA 📸.",
        feedbackErro: "Ninguém fala, mas os DETALHES contam. É FONTE muda 📸.",
      },
    ],
    falaFinal:
      "Investigador de narradores oficial! Você sabe reconhecer testemunha, narrador oral, historiador e fonte muda.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Olha a mesa de cima como pizza. Cada fatia é UM tipo de narrador. Toca em cada fatia pra rever.",
    instrucao: "🍕 Toque nas fatias pra rever",
    fatias: [
      {
        id: "vozes-vivas",
        rotulo: "Vozes VIVAS",
        emoji: "👵🎙️",
        percentual: 40,
        cor: "#b45309",
        descricao:
          "Testemunhas e narradores orais — pessoas que viveram ou ouviram e contam de boca. Muito importantes pra história da família.",
        exemplos: ["Vovó no casamento dela", "Tio contando o causo", "Vizinho mais velho"],
      },
      {
        id: "fontes-mudas",
        rotulo: "Fontes MUDAS",
        emoji: "📸✉️🧸",
        percentual: 35,
        cor: "#16a34a",
        descricao:
          "Fotos, cartas, objetos e prédios. Não falam, mas mostram pistas de como as pessoas viviam.",
        exemplos: ["Foto sépia", "Carta com selo", "Brinquedo de lata", "Casarão antigo"],
      },
      {
        id: "historiadores",
        rotulo: "HISTORIADORES",
        emoji: "🔎📚",
        percentual: 25,
        cor: "#4f46e5",
        descricao:
          "Investigadores que juntam TUDO — vozes vivas + fontes mudas — e organizam pra virar livro, aula e museu.",
        exemplos: ["Professora de história", "Autor do livro didático", "Curador de museu"],
      },
    ],
    falaFinal:
      "Repara: sozinha, NENHUMA fatia conta a história inteira. As três juntas é que fazem o Livro das Memórias.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Chegou a insígnia da Aula 02! Responda 3 perguntas — 1 chance por pergunta.",
    instrucao: "Toque na resposta certa.",
    perguntas: [
      {
        id: "p1",
        pergunta: "Quem é uma TESTEMUNHA da história?",
        opcoes: [
          { id: "a", texto: "Alguém que viveu ou viu o acontecimento.", correta: true },
          { id: "b", texto: "Alguém que só leu num livro." },
          { id: "c", texto: "Alguém que sonhou com o passado." },
        ],
        feedbackAcerto: "Isso! Testemunha VIVEU ou VIU. É a voz de quem estava lá.",
        feedbackErro: "Testemunha ESTAVA LÁ. Ler ou sonhar não conta.",
      },
      {
        id: "p2",
        pergunta: "Quando o vovô conta um causo, ele é…",
        opcoes: [
          { id: "a", texto: "Um pintor." },
          { id: "b", texto: "Um narrador oral.", correta: true },
          { id: "c", texto: "Um piloto." },
        ],
        feedbackAcerto: "Combo! Contar de boca é NARRADOR ORAL.",
        feedbackErro: "Ele está FALANDO. Isso é narrador ORAL.",
      },
      {
        id: "p3",
        pergunta: "Uma foto antiga sozinha pode contar história?",
        opcoes: [
          { id: "a", texto: "Não, porque não fala." },
          { id: "b", texto: "Sim, é uma fonte muda: conta mostrando.", correta: true },
          { id: "c", texto: "Só se alguém escrever atrás." },
        ],
        feedbackAcerto: "Perfeito! Fonte muda conta MOSTRANDO os detalhes.",
        feedbackErro: "Foto mostra roupa, cabelo, cenário. Ela CONTA sem falar.",
      },
    ],
    selo: {
      nome: "Escutador de Vozes",
      subtitulo: "Insígnia oficial do Livro das Memórias — Aula 02",
      emoji: "🎙️",
      cor: "from-amber-300 to-orange-500",
    },
    falaFinal:
      "Segunda página do Livro das Memórias completa! Você já sabe QUEM conta a história.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Escutador de Vozes" },
};
