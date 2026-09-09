import type { AulaGeoV1 } from "../../types";
import { url as socrates } from "@/assets/filosofia-6ano/u3-socrates.jpg.asset.json";
import { url as jovens } from "@/assets/filosofia-6ano/u3-jovens-perguntando.jpg.asset.json";
import { url as maieutica } from "@/assets/filosofia-6ano/u3-maieutica.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 3 · Aula 01
 * "Sócrates e a Maiêutica" — EF06FI03 (autoral).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-socrates-maieutica",
  titulo: "Sócrates e a Maiêutica",
  iconeTrilha: "🗣️",
  bncc: ["EF06FI03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha esse rosto. Ele mudou a filosofia pra sempre.",
    mapaUrl: socrates,
    imagemDestaqueUrl: socrates,
    aurora:
      "Aprendiz, esse é SÓCRATES — Atenas, séc. V a.C. Ele não escreveu um livro sequer. Andava descalço pela ágora, parava políticos, poetas, generais e fazia UMA pergunta. Depois OUTRA. E outra. Até a pessoa perceber que NÃO SABIA o que achava que sabia. Isso irritou tanta gente que ele foi condenado à morte.",
    falaFinal:
      "Nesta aula você aprende o método de Sócrates: a MAIÊUTICA — a arte de fazer a verdade nascer pela pergunta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: qual é o melhor jeito de ENSINAR alguém a pensar de verdade?",
    pergunta: "Como se ensina a pensar?",
    opcoes: [
      { id: "resposta", titulo: "DAR A RESPOSTA PRONTA", subtitulo: "explicar tudo direitinho", emoji: "📖", cor: "from-amber-400 to-orange-600" },
      { id: "pergunta", titulo: "FAZER PERGUNTAS", subtitulo: "até a pessoa descobrir sozinha", emoji: "❓", cor: "from-violet-400 to-purple-600" },
      { id: "copiar", titulo: "MANDAR COPIAR", subtitulo: "repetir 100 vezes no caderno", emoji: "✏️", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "pergunta",
    feedbackAcerto: "Isso é sócrates puro. Ele achava que a verdade JÁ ESTÁ dentro de quem pensa — o mestre só faz a pergunta que faz ela NASCER.",
    feedbackErro: "Sócrates apostou em PERGUNTAS. Resposta pronta você esquece; verdade que você descobre sozinho fica.",
    falaFinal: "Perguntar bem ensina mais que responder tudo. Guarda essa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave do método socrático.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "ironia", capa: "1. Ironia Socrática", emoji: "🎭", cor: "from-violet-500 to-purple-700",
        conteudo: "IRONIA aqui não é sarcasmo. É Sócrates FINGIR que não sabe nada pra que o outro se solte e mostre o que acha. Assim as contradições do outro aparecem sem ele se ofender.",
        exemplo: "Ex.: 'Me explica, você que é sábio, o que é JUSTIÇA?' — o outro se enrola sozinho.",
        fotoUrl: socrates },
      { id: "maieutica", capa: "2. Maiêutica", emoji: "💡", cor: "from-amber-500 to-orange-700",
        conteudo: "MAIÊUTICA vem do grego 'parto'. A mãe de Sócrates era parteira. Ele dizia: 'faço o mesmo — só que ajudo a nascer IDEIAS, não bebês'. É a arte de fazer perguntas até a verdade aparecer na pessoa.",
        exemplo: "Ex.: em vez de dizer 'coragem é X', pergunta: 'um soldado que foge é covarde? E se fugir pra salvar a família?'.",
        fotoUrl: maieutica },
      { id: "aporia", capa: "3. Aporia", emoji: "🌀", cor: "from-sky-500 to-blue-700",
        conteudo: "APORIA é o momento em que a pessoa PERCEBE que se contradiz e não sabe mais o que dizer. Pra Sócrates isso é BOM: só quem admite que não sabe pode começar a aprender de verdade.",
        exemplo: "Ex.: 'Achei que sabia o que é amizade… agora percebo que não sei explicar. Vou pensar melhor.'",
        fotoUrl: jovens },
    ],
    falaFinal: "Ironia → maiêutica → aporia. É o ciclo do pensamento socrático.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos de um diálogo socrático. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: jovens,
    pontos: [
      { id: "p1", x: 20, y: 30, emoji: "🎭", cor: "from-violet-500 to-purple-700",
        titulo: "1. A abordagem irônica",
        texto: "Sócrates chega na ágora e para alguém: 'Você que é jovem e inteligente, me explica: o que é a CORAGEM?'. Ele finge não saber. A pessoa se sente valorizada e responde na hora.",
        fotoUrl: socrates },
      { id: "p2", x: 70, y: 28, emoji: "💬", cor: "from-sky-500 to-blue-700",
        titulo: "2. A primeira definição",
        texto: "'Coragem é enfrentar o inimigo sem fugir.' Sócrates parece concordar. Mas devolve: 'E o soldado que RECUA pra atacar de outro ângulo — é covarde ou corajoso?'. A pessoa hesita.",
        fotoUrl: jovens },
      { id: "p3", x: 28, y: 72, emoji: "🌀", cor: "from-amber-500 to-orange-700",
        titulo: "3. A aporia",
        texto: "Depois de 3 ou 4 tentativas, a pessoa se contradiz. 'Então… eu achava que sabia o que é coragem, mas agora não sei mais.' É a APORIA — o não-saber assumido.",
        fotoUrl: maieutica },
      { id: "p4", x: 74, y: 74, emoji: "💡", cor: "from-emerald-500 to-teal-700",
        titulo: "4. O nascimento da ideia",
        texto: "Sócrates NÃO dá a resposta. Ele diz: 'Ótimo, agora podemos investigar juntos'. A verdade não vem pronta — ela NASCE do diálogo. Isso é maiêutica.",
        fotoUrl: socrates },
    ],
    falaFinal: "Ironia, definição, aporia, nascimento. É assim que se ensina a PENSAR, não a decorar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Sócrates dizia 'só sei que nada sei'. Isso quer dizer que…", fotoUrl: socrates,
        cards: [
          { id: "burro", emoji: "🤷", titulo: "Ele era mesmo ignorante e admitia", cor: "from-slate-400 to-gray-600" },
          { id: "sabio", emoji: "🧠", titulo: "Reconhecer que não sabe é o começo de saber de verdade", cor: "from-violet-500 to-purple-700" },
          { id: "piada", emoji: "😂", titulo: "Era só uma piada dele com os amigos", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "sabio",
        feedbackAcerto: "Isso. Quem acha que já sabe TUDO não aprende nada. Aporia = ponto de partida.",
        feedbackErro: "Não é piada nem burrice. É POSTURA: só quem admite ignorância pode investigar de verdade." },
      { id: "q2", pergunta: "MAIÊUTICA significa…", fotoUrl: maieutica,
        cards: [
          { id: "parto", emoji: "💡", titulo: "Fazer a verdade NASCER pela pergunta", cor: "from-amber-500 to-orange-700" },
          { id: "aula", emoji: "📖", titulo: "Dar aula com slides organizados", cor: "from-slate-500 to-gray-700" },
          { id: "briga", emoji: "⚔️", titulo: "Vencer o outro numa discussão", cor: "from-red-500 to-orange-700" },
        ],
        correta: "parto",
        feedbackAcerto: "Perfeito. A palavra vem de 'parto' — ajudar a IDEIA a nascer.",
        feedbackErro: "Maiêutica não é vencer nem palestrar. É PARTEJAR ideias — o professor só faz a pergunta." },
      { id: "q3", pergunta: "Sócrates foi condenado à morte por…", fotoUrl: jovens,
        cards: [
          { id: "roubar", emoji: "💰", titulo: "Roubar dinheiro da cidade", cor: "from-slate-400 to-gray-600" },
          { id: "incomodar", emoji: "❓", titulo: "Incomodar os poderosos com perguntas difíceis", cor: "from-violet-500 to-purple-700" },
          { id: "guerra", emoji: "⚔️", titulo: "Trair Atenas numa guerra", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "incomodar",
        feedbackAcerto: "Isso. Pensar em público INCOMODA — e incomodou tanto que ele bebeu cicuta em 399 a.C.",
        feedbackErro: "Ele foi condenado por 'corromper a juventude' — ou seja, por ENSINAR a duvidar dos poderosos." },
    ],
    falaFinal: "Radar afinado. Você já entendeu o preço e o poder de perguntar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O método socrático virou base da EDUCAÇÃO moderna. Acenda 5 estados brasileiros com universidades de referência em Filosofia da Educação.",
    instrucao: "Acenda 5 estados com pesquisa forte em Filosofia da Educação",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "RS", "BA"], pergunta: "5 estados com programas de pós-graduação de destaque em Filosofia da Educação:" },
    falaFinal: "USP (SP), UFRJ (RJ), UFMG (MG), UFRGS (RS), UFBA (BA). Sócrates continua na sala de aula.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como se conduz um DIÁLOGO socrático? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Passos do método socrático:",
    paradas: [
      { id: "pergunta", emoji: "❓", rotulo: "1. FAÇA UMA PERGUNTA SIMPLES", descricao: "'O que é coragem?' 'O que é justiça?' — a pergunta parece fácil, mas não é." },
      { id: "escuta", emoji: "👂", rotulo: "2. ESCUTE A DEFINIÇÃO", descricao: "Deixe o outro definir sem interromper. Anote mentalmente." },
      { id: "contra", emoji: "🔄", rotulo: "3. DÊ UM CONTRAEXEMPLO", descricao: "'E nesse caso aqui? Sua definição ainda funciona?' — mostra o limite." },
      { id: "aporia", emoji: "🌀", rotulo: "4. CHEGUE À APORIA", descricao: "A pessoa percebe que se contradiz e admite: 'não sei explicar direito'." },
      { id: "juntos", emoji: "💡", rotulo: "5. INVESTIGUE JUNTO", descricao: "Sem dar a resposta pronta, pensem juntos numa definição melhor." },
    ],
    ordemCerta: ["pergunta", "escuta", "contra", "aporia", "juntos"],
    feedbackAcerto: "Exato. Pergunta → escuta → contraexemplo → aporia → investigação conjunta.",
    feedbackErro: "A ordem é: 1) perguntar, 2) escutar, 3) contraexemplo, 4) aporia, 5) investigar juntos.",
    falaFinal: "5 passos. Você pode usar amanhã em qualquer conversa importante.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 3 — O Método Socrático",
    paragrafos: [
      { id: "p1", texto: "SÓCRATES (470–399 a.C.) foi um filósofo ateniense que NÃO escreveu nada. Tudo o que sabemos dele veio dos discípulos, especialmente Platão. Ele acreditava que a filosofia não é um SABER que se transmite, mas uma ATIVIDADE que se pratica em diálogo.", chaves: ["Sócrates", "diálogo"] },
      { id: "p2", texto: "Seu método tem 3 movimentos. A IRONIA (fingir não saber pra o outro se soltar), a MAIÊUTICA (fazer perguntas até a ideia nascer) e a APORIA (o não-saber assumido que abre caminho pra investigar). O objetivo NÃO é vencer o outro — é pensar junto.", chaves: ["ironia", "maiêutica", "aporia"] },
      { id: "p3", texto: "A frase 'só sei que nada sei' resume tudo. Não é falsa modéstia: é RECONHECER que qualquer certeza deve ser testada. Quem se acha dono da verdade não filosofa — só repete.", chaves: ["nada sei"] },
      { id: "p4", texto: "Sócrates foi julgado por 'corromper a juventude e não crer nos deuses da cidade'. A verdade é que incomodava os poderosos ao mostrar as contradições deles em público. Condenado, bebeu cicuta em 399 a.C. — e virou símbolo eterno da coragem de perguntar.", chaves: ["cicuta", "coragem de perguntar"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo PARTEIRO DE IDEIAS! Cada rodada mostra uma frase — diga se é IRONIA, MAIÊUTICA, APORIA ou DOGMA (o oposto de tudo isso).",
    instrucao: "⏱️ Que movimento é esse?",
    duracaoSegundos: 12,
    pecas: [
      { id: "ironia", emoji: "🎭", rotulo: "Ironia (finge não saber)" },
      { id: "maieutica", emoji: "💡", rotulo: "Maiêutica (pergunta que ensina)" },
      { id: "aporia", emoji: "🌀", rotulo: "Aporia (admite não saber)" },
      { id: "dogma", emoji: "🗿", rotulo: "Dogma (impõe a verdade)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Me explica, você que é tão sábio, o que é a felicidade?'", emoji: "🎭", cor: "from-violet-400 to-purple-600" },
        municipioB: { nome: "Provocação disfarçada de humildade", emoji: "🎪", cor: "from-fuchsia-400 to-purple-600" },
        contexto: "Sócrates finge não saber pra o outro se comprometer.", pecaCertaId: "ironia",
        feedbackAcerto: "Isso. IRONIA clássica — humildade fingida pra abrir o debate.",
        feedbackErro: "É IRONIA: fingir não saber pra o outro mostrar o que pensa." },
      { id: "r2", municipioA: { nome: "'E se sua definição também vale nesse caso aqui? Vamos testar.'", emoji: "💡", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Pergunta que faz pensar mais fundo", emoji: "🔍", cor: "from-yellow-400 to-orange-600" },
        contexto: "A pergunta força a pessoa a refinar o próprio pensamento.", pecaCertaId: "maieutica",
        feedbackAcerto: "Perfeito. MAIÊUTICA — a pergunta ajuda a ideia a nascer.",
        feedbackErro: "É MAIÊUTICA: perguntar até a ideia se aperfeiçoar." },
      { id: "r3", municipioA: { nome: "'Confesso: agora percebi que não sei bem o que estou defendendo.'", emoji: "🌀", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Reconhecimento honesto de não-saber", emoji: "🙇", cor: "from-cyan-400 to-blue-600" },
        contexto: "Momento em que o interlocutor admite a contradição.", pecaCertaId: "aporia",
        feedbackAcerto: "Isso. APORIA — e é AQUI que a filosofia começa de verdade.",
        feedbackErro: "É APORIA: assumir que não sabe é o começo de aprender." },
      { id: "r4", municipioA: { nome: "'É assim porque é assim. Ponto. Não questiona.'", emoji: "🗿", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Verdade imposta, sem argumento", emoji: "🚫", cor: "from-gray-400 to-slate-600" },
        contexto: "Nenhum espaço pra pergunta ou dúvida.", pecaCertaId: "dogma",
        feedbackAcerto: "Boa. É DOGMA puro — o oposto do método socrático.",
        feedbackErro: "É DOGMA: verdade imposta, sem argumento — inimigo nº1 da filosofia." },
      { id: "r5", municipioA: { nome: "'Você diz que amizade é ajudar sempre. E ajudar o amigo a fazer algo errado?'", emoji: "💡", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Contraexemplo que testa a definição", emoji: "⚖️", cor: "from-yellow-400 to-orange-600" },
        contexto: "A pergunta expõe o limite da definição inicial.", pecaCertaId: "maieutica",
        feedbackAcerto: "Isso. MAIÊUTICA na veia: contraexemplo pra refinar a ideia.",
        feedbackErro: "É MAIÊUTICA: o contraexemplo é a ferramenta principal." },
      { id: "r6", municipioA: { nome: "'Confesso, jovem, sou um velho ignorante — me ensina o que é justiça?'", emoji: "🎭", cor: "from-violet-400 to-purple-600" },
        municipioB: { nome: "Postura irônica clássica", emoji: "🧓", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Sócrates se coloca abaixo pra o outro ensinar — e se enrolar.", pecaCertaId: "ironia",
        feedbackAcerto: "Perfeito. IRONIA socrática marca registrada.",
        feedbackErro: "É IRONIA: humildade fingida como abertura do diálogo." },
    ],
    falaFinal: "6 rodadas. Você distingue os 3 movimentos socráticos do dogma. É muita coisa.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: as 2 posturas diante da verdade.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "dogma", rotulo: "DOGMA (verdade imposta)", emoji: "🗿", percentual: 50, cor: "#f59e0b",
        descricao: "Aceita a verdade pronta, sem discutir. 'É assim porque sempre foi.' Rápido, cômodo — mas fecha o pensamento. É o oposto do método socrático.",
        exemplos: ["🚫 'Não questiona'", "📜 'A tradição já respondeu'", "👑 'Quem manda decide'"] },
      { id: "socratico", rotulo: "SOCRÁTICO (verdade investigada)", emoji: "💡", percentual: 50, cor: "#8b5cf6",
        descricao: "Toda certeza pode ser testada por perguntas. Reconhece que 'só sei que nada sei' e investiga em diálogo. Lento, incômodo — mas abre o pensamento.",
        exemplos: ["❓ 'Por que exatamente?'", "🔄 'E nesse caso aqui?'", "🌀 'Confesso: não sei'"] },
    ],
    falaFinal: "Duas posturas. Filosofia mora do lado socrático.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia PARTEIRO DE IDEIAS.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O que é MAIÊUTICA?",
        opcoes: [
          { id: "a", texto: "A arte de escrever livros de filosofia", correta: false },
          { id: "b", texto: "A arte de fazer perguntas até a verdade NASCER na pessoa", correta: true },
          { id: "c", texto: "A arte de vencer uma discussão em público", correta: false },
        ],
        feedbackAcerto: "Isso. Vem de 'parto' — ajudar a ideia a nascer pela pergunta.",
        feedbackErro: "Maiêutica = PARTO de ideias. O mestre não dá a resposta, faz a pergunta." },
      { id: "av2", pergunta: "'Só sei que nada sei' significa que Sócrates…",
        opcoes: [
          { id: "a", texto: "Era mesmo um ignorante", correta: false },
          { id: "b", texto: "Reconhecia que toda certeza deve ser testada — e isso abre o pensar", correta: true },
          { id: "c", texto: "Estava sendo modesto por educação", correta: false },
        ],
        feedbackAcerto: "Perfeito. A APORIA assumida é o começo do saber.",
        feedbackErro: "Não é ignorância nem modéstia — é uma POSTURA: só quem admite não saber, investiga." },
      { id: "av3", pergunta: "Por que o método socrático incomodava os poderosos de Atenas?",
        opcoes: [
          { id: "a", texto: "Porque Sócrates roubava dinheiro deles", correta: false },
          { id: "b", texto: "Porque expunha em público as contradições dos discursos poderosos", correta: true },
          { id: "c", texto: "Porque ele era estrangeiro e recém-chegado", correta: false },
        ],
        feedbackAcerto: "Isso. Perguntar bem é perigoso pra quem vive de certezas impostas.",
        feedbackErro: "Perguntar bem EXPÕE contradições — e isso incomoda quem manda por costume, não por argumento." },
    ],
    selo: { nome: "Parteiro de Ideias", subtitulo: "Insígnia do Método Socrático", emoji: "💡", cor: "from-amber-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você domina o método que nasceu na ágora de Atenas.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Parteiro de Ideias" },
};
