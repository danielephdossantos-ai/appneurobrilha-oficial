import type { AulaGeoV1 } from "../../types";
import imgMaquinaEscrever from "@/assets/historia-3ano/maquina-escrever-antiga.jpg";
import imgTelefonista from "@/assets/historia-3ano/telefonista-antiga.jpg";
import imgAcendedor from "@/assets/historia-3ano/acendedor-lampiao.jpg";
import imgProgramador from "@/assets/historia-3ano/programador-moderno.jpg";
import imgInfografico from "@/assets/historia-3ano/infografico-trabalho.jpg";
import imgLivro from "@/assets/historia-3ano/livro-cidades.jpg";

/**
 * História · 3º Ano · Unidade 3 · Aula 01
 * "Trabalho e Profissões de Outros Tempos"
 * Restaura a Página 3 do Grande Livro das Cidades: A Galeria dos Ofícios.
 * Visual: fotografias sépia históricas + infográfico linha do tempo.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-profissoes-de-outros-tempos",
  titulo: "Trabalho e Profissões de Outros Tempos",
  iconeTrilha: "⚙️",
  bncc: ["EF03HI05", "EF03HI06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre esta fotografia sépia. Você está vendo um ofício que sumiu quase por completo: o ACENDEDOR DE LAMPIÕES, que ao anoitecer acendia manualmente cada poste da rua.",
    mapaUrl: imgAcendedor,
    imagemDestaqueUrl: imgInfografico,
    aurora:
      "Pequeno Historiador, há cem anos a rua só tinha luz porque um homem passava com uma vara acesa. Quando a eletricidade chegou, esse trabalho ACABOU. Por que profissões inteiras desaparecem — e outras nascem — a cada nova tecnologia?",
    falaFinal:
      "A resposta se chama TRANSFORMAÇÃO DO TRABALHO: quando uma tecnologia nova resolve o problema mais rápido, o ofício antigo é substituído. É assim há séculos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes da explicação, palpite de investigador. Olhando o infográfico do trabalho ao longo do tempo, qual das frases é a mais correta?",
    pergunta: "Por que profissões antigas desaparecem?",
    fotoUrl: imgInfografico,
    opcoes: [
      {
        id: "tecnologia",
        titulo: "Novas tecnologias substituem",
        subtitulo: "eletricidade, computador, celular",
        emoji: "💡",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgProgramador,
      },
      {
        id: "moda",
        titulo: "As pessoas cansam",
        subtitulo: "simplesmente perdem o interesse",
        emoji: "😴",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgMaquinaEscrever,
      },
    ],
    respostaCerta: "tecnologia",
    feedbackAcerto:
      "Correto. A tecnologia é o motor principal. Eletricidade extinguiu o acendedor; a geladeira extinguiu o entregador de gelo; o computador extinguiu o datilógrafo.",
    feedbackErro:
      "Não é falta de interesse. É a TECNOLOGIA que substitui: quando uma máquina faz o serviço melhor, mais rápido ou mais barato, o ofício antigo desaparece.",
    falaFinal:
      "Guarde a regra: TODA vez que uma tecnologia nova resolve o problema, o ofício antigo se transforma ou se extingue.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas que todo historiador do 3º ano precisa dominar quando estuda o mundo do trabalho. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "extinta",
        capa: "Profissão Extinta",
        emoji: "🕯️",
        cor: "from-amber-700 to-orange-900",
        fotoUrl: imgAcendedor,
        conteudo:
          "PROFISSÃO EXTINTA é aquela que deixou de existir porque a tecnologia a substituiu. Ex: acendedor de lampiões (extinto pela eletricidade), leiteiro de carroça (extinto pela geladeira), despertador humano (extinto pelo relógio elétrico).",
        exemplo: "Exemplo: o ACENDEDOR DE LAMPIÕES acendia cada poste com uma vara — hoje isso é automático.",
      },
      {
        id: "modificada",
        capa: "Profissão Modificada",
        emoji: "📞",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgTelefonista,
        conteudo:
          "PROFISSÃO MODIFICADA é aquela que continua existindo, mas usa ferramentas totalmente diferentes das de antes. Ex: a TELEFONISTA de mesa telefônica ainda existe, mas hoje opera softwares — não plugs de fio.",
        exemplo: "Exemplo: o FOTÓGRAFO existia com rolo de filme químico; hoje trabalha com sensor digital e edição por computador.",
      },
      {
        id: "atual",
        capa: "Profissão do Presente",
        emoji: "💻",
        cor: "from-blue-600 to-indigo-800",
        fotoUrl: imgProgramador,
        conteudo:
          "PROFISSÃO DO PRESENTE (ou emergente) é aquela que só existe porque a tecnologia moderna a criou. Ex: programador de software, engenheiro de drones, criador de conteúdo digital, analista de dados.",
        exemplo: "Exemplo: PROGRAMADOR DE APLICATIVOS não existia em 1980 — foi o smartphone que criou essa profissão.",
      },
    ],
    falaFinal:
      "Extinta, Modificada, do Presente: o vocabulário técnico do mundo do trabalho. Vamos usar essas três palavras o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o infográfico da EVOLUÇÃO DO TRABALHO. Toque em cada ponto pra eu explicar como a tecnologia transformou aquele ofício ao longo do tempo.",
    instrucao: "Toque em cada ponto do infográfico pra ouvir a explicação",
    mapaUrl: imgInfografico,
    pontos: [
      {
        id: "escrita",
        x: 25,
        y: 20,
        emoji: "📝",
        cor: "from-amber-700 to-orange-900",
        fotoUrl: imgMaquinaEscrever,
        titulo: "1. Escrita — máquina → computador",
        texto:
          "Antes: DATILÓGRAFO batia em teclas metálicas sem apagar. Hoje: qualquer pessoa digita e edita no computador. A profissão de datilógrafo se extinguiu; nasceu a de digitador e redator digital.",
      },
      {
        id: "telefone",
        x: 25,
        y: 55,
        emoji: "☎️",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgTelefonista,
        titulo: "2. Comunicação — mesa de fios → celular",
        texto:
          "Antes: TELEFONISTA plugava cabos manualmente pra conectar cada chamada. Hoje: centrais automáticas fazem isso, e a telefonista virou atendente de call center com software.",
      },
      {
        id: "iluminacao",
        x: 25,
        y: 85,
        emoji: "💡",
        cor: "from-yellow-600 to-amber-800",
        fotoUrl: imgAcendedor,
        titulo: "3. Iluminação — lampião → LED",
        texto:
          "Antes: ACENDEDOR DE LAMPIÕES passava rua por rua ao anoitecer. Hoje: sensores automáticos acendem lâmpadas LED. Ofício totalmente extinto.",
      },
      {
        id: "hoje",
        x: 75,
        y: 55,
        emoji: "💻",
        cor: "from-blue-600 to-indigo-800",
        fotoUrl: imgProgramador,
        titulo: "4. Presente — programador digital",
        texto:
          "Hoje: PROGRAMADORES, engenheiros de drone, criadores de conteúdo, analistas de dados. Profissões que só existem porque a tecnologia digital nasceu.",
      },
    ],
    falaFinal:
      "Escrita, comunicação, iluminação: em cada uma, a tecnologia extinguiu um ofício e criou outro. É o CICLO DA TRANSFORMAÇÃO DO TRABALHO.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você classifica corretamente um ofício segundo o vocabulário técnico.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "O ACENDEDOR DE LAMPIÕES ainda existe hoje?",
        fotoUrl: imgAcendedor,
        cards: [
          { id: "ex", emoji: "🕯️", titulo: "Não — profissão extinta", cor: "from-amber-700 to-orange-900" },
          { id: "at", emoji: "💡", titulo: "Sim — só mudou de nome", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "ex",
        feedbackAcerto:
          "Correto. Foi EXTINTO pela eletricidade. Hoje não existe nenhum trabalhador que ande de rua em rua acendendo postes.",
        feedbackErro:
          "Não mudou de nome — desapareceu. Sensores automáticos e lâmpadas LED substituíram totalmente esse ofício.",
      },
      {
        id: "q2",
        pergunta: "A profissão de FOTÓGRAFO desapareceu?",
        fotoUrl: imgProgramador,
        cards: [
          { id: "ex", emoji: "🕯️", titulo: "Sim — desapareceu", cor: "from-amber-700 to-orange-900" },
          { id: "mo", emoji: "📷", titulo: "Não — foi modificada", cor: "from-slate-600 to-slate-800" },
        ],
        correta: "mo",
        feedbackAcerto:
          "Exato. O fotógrafo continua existindo, mas trocou o rolo de filme químico pela câmera digital e a sala escura pelo software de edição. Foi MODIFICADA.",
        feedbackErro:
          "Ainda existem fotógrafos por toda parte. O ofício não foi extinto — foi MODIFICADO pela chegada da câmera digital.",
      },
      {
        id: "q3",
        pergunta: "Programador de aplicativos é uma profissão do quê?",
        fotoUrl: imgProgramador,
        cards: [
          { id: "pr", emoji: "💻", titulo: "Do PRESENTE (nova)", cor: "from-blue-600 to-indigo-800" },
          { id: "pa", emoji: "🕯️", titulo: "Do passado remoto", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "pr",
        feedbackAcerto:
          "Certeza. É uma profissão DO PRESENTE — só existe porque o computador e o smartphone foram inventados.",
        feedbackErro:
          "Não existia programador de aplicativo em 1900. É uma profissão DO PRESENTE, criada pela tecnologia digital.",
      },
    ],
    falaFinal:
      "Radar afinado. Você já classifica qualquer ofício em Extinta, Modificada ou do Presente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do mesmo infográfico: um destaca o TRABALHO DO PASSADO (esquerda, sépia), outro destaca o TRABALHO DO PRESENTE (direita, digital). Veja como cada ferramenta foi substituída.",
    instrucao: "Toque nos interruptores pra ver cada era do trabalho",
    mapaUrl: imgInfografico,
    camadas: [
      {
        id: "passado",
        rotulo: "Passado",
        emoji: "🕯️",
        cor: "from-amber-700 to-orange-900",
        rect: { x: 0, y: 0, w: 45, h: 100 },
        descricao:
          "TRABALHO DO PASSADO: máquina de escrever, mesa telefônica de fios, lampião a gás. Ferramentas manuais ou mecânicas. Cada função dependia da força e da presença física de um trabalhador.",
      },
      {
        id: "presente",
        rotulo: "Presente",
        emoji: "💻",
        cor: "from-blue-600 to-indigo-800",
        rect: { x: 55, y: 0, w: 45, h: 100 },
        descricao:
          "TRABALHO DO PRESENTE: computador, smartphone, LED com sensor. Ferramentas digitais e automáticas. Um único software substitui o serviço de dezenas de trabalhadores manuais.",
      },
    ],
    falaFinal:
      "Dois interruptores, uma só verdade: a tecnologia empurra o trabalho pra frente. Historiadores estudam essa linha do tempo pra prever o futuro dos empregos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos ordenar 4 formas de fazer a mesma coisa — ESCREVER UM TEXTO — ao longo dos séculos. Organize da mais antiga pra mais moderna.",
    instrucao: "Toque nas etapas na ordem certa (do mais antigo ao mais moderno)",
    pergunta: "Como as pessoas escreveram textos ao longo do tempo?",
    paradas: [
      {
        id: "pena",
        emoji: "🪶",
        rotulo: "1. Pena e tinteiro",
        fotoUrl: imgAcendedor,
        descricao:
          "Etapa 1: até o século XIX, textos eram copiados à mão com pena de ave molhada em tinteiro. Um livro levava meses.",
      },
      {
        id: "maquina",
        emoji: "⌨️",
        rotulo: "2. Máquina de escrever",
        fotoUrl: imgMaquinaEscrever,
        descricao:
          "Etapa 2: a partir de 1900, a máquina de escrever mecânica virou padrão nos escritórios. Datilografia era profissão exigida.",
      },
      {
        id: "computador",
        emoji: "💻",
        rotulo: "3. Computador de mesa",
        fotoUrl: imgProgramador,
        descricao:
          "Etapa 3: nos anos 1990, o computador extinguiu a máquina de escrever. Chegou o botão APAGAR e o corretor automático.",
      },
      {
        id: "celular",
        emoji: "📱",
        rotulo: "4. Celular / IA",
        fotoUrl: imgInfografico,
        descricao:
          "Etapa 4: hoje qualquer pessoa dita um texto no celular e a inteligência artificial corrige e escreve trechos inteiros.",
      },
    ],
    ordemCerta: ["pena", "maquina", "computador", "celular"],
    feedbackAcerto:
      "Linha do tempo perfeita. Pena → Máquina → Computador → Celular/IA. A cada salto tecnológico, uma profissão inteira mudou.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense em qual ferramenta veio ANTES da máquina de escrever, e qual só existe HOJE.",
    falaFinal:
      "Você acabou de mapear a EVOLUÇÃO DE UM OFÍCIO. É assim que historiadores mostram que o trabalho nunca fica parado.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 3 do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 3 — A Galeria dos Ofícios",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O mundo do trabalho nunca ficou parado. A cada nova TECNOLOGIA que aparece, algumas profissões desaparecem e outras nascem. Chamamos essas de PROFISSÕES EXTINTAS: elas foram substituídas por máquinas ou processos automáticos.",
        chaves: ["tecnologia", "profissões extintas"],
        definicoes: {
          tecnologia:
            "Conjunto de ferramentas, máquinas e conhecimentos que a humanidade cria pra resolver problemas mais rápido.",
          "profissões extintas":
            "Ofícios que deixaram de existir porque a tecnologia os tornou desnecessários. Ex: acendedor de lampiões, datilógrafo.",
        },
        fotoUrl: imgAcendedor,
      },
      {
        id: "p2",
        texto:
          "Outras profissões não desaparecem, mas se transformam profundamente. São as PROFISSÕES MODIFICADAS: continuam existindo, mas o trabalhador precisa aprender ferramentas totalmente diferentes das que usava antes. O fotógrafo, o médico e o professor são exemplos.",
        chaves: ["profissões modificadas"],
        definicoes: {
          "profissões modificadas":
            "Ofícios que continuam existindo, mas cujas ferramentas mudaram completamente por causa da tecnologia. Ex: fotógrafo digital, professor online.",
        },
        fotoUrl: imgTelefonista,
      },
      {
        id: "p3",
        texto:
          "Além disso, a tecnologia CRIA profissões novas que nunca tinham existido. Um PROGRAMADOR de aplicativos, um piloto de drones ou um criador de conteúdo digital são exemplos de ofícios que só nasceram depois do computador e da internet.",
        chaves: ["programador", "profissões novas"],
        definicoes: {
          programador:
            "Profissional que escreve códigos em uma linguagem que o computador entende, criando aplicativos, sites e sistemas.",
          "profissões novas":
            "Ofícios que só existem por causa de uma tecnologia recente. Ex: youtuber, engenheiro de drones, cientista de dados.",
        },
        fotoUrl: imgProgramador,
      },
      {
        id: "p4",
        texto:
          "Estudar essa TRANSFORMAÇÃO DO TRABALHO ajuda o historiador (e você) a entender o presente e imaginar o futuro. Muitos empregos do próximo século ainda nem foram inventados — porque a tecnologia que os criará ainda não existe.",
        chaves: ["transformação do trabalho"],
        definicoes: {
          "transformação do trabalho":
            "Processo contínuo em que profissões antigas somem, outras mudam e novas nascem, sempre por causa da tecnologia.",
        },
        fotoUrl: imgInfografico,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que o trabalho nunca para de mudar.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão do historiador. Cada rodada mostra uma profissão. Você tem que classificar rápido: é EXTINTA (desapareceu), é MODIFICADA (continua mas mudou) ou é do PRESENTE (só existe por causa da tecnologia nova)?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "ex", emoji: "🕯️", rotulo: "Extinta" },
      { id: "mo", emoji: "📷", rotulo: "Modificada" },
      { id: "pr", emoji: "💻", rotulo: "Presente" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Datilógrafo de escritório", emoji: "⌨️", cor: "from-amber-700 to-orange-900" },
        municipioB: { nome: "Máquina de escrever mecânica", emoji: "📝", cor: "from-orange-600 to-amber-800" },
        contexto:
          "Homem batendo com dois dedos numa máquina de aço, sem botão apagar. Como classificamos?",
        pecaCertaId: "ex",
        fotoUrl: imgMaquinaEscrever,
        feedbackAcerto: "Correto. Datilógrafo é uma profissão EXTINTA — o computador tomou o lugar.",
        feedbackErro: "Não existe mais escritório contratando datilógrafo. É EXTINTA pela chegada do computador.",
      },
      {
        id: "r2",
        municipioA: { nome: "Telefonista de call center digital", emoji: "🎧", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Atendimento por software", emoji: "💬", cor: "from-blue-500 to-indigo-700" },
        contexto:
          "Antes era mesa de fios; hoje é software com fone e computador. A profissão continua existindo. Como classificamos?",
        pecaCertaId: "mo",
        fotoUrl: imgTelefonista,
        feedbackAcerto: "Correto. Telefonista foi MODIFICADA — mesmo nome, ferramentas totalmente diferentes.",
        feedbackErro: "Ainda existem telefonistas por toda parte. Não é extinta — é MODIFICADA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Criador de conteúdo digital", emoji: "📱", cor: "from-blue-600 to-indigo-800" },
        municipioB: { nome: "Youtuber e streamer", emoji: "🎥", cor: "from-purple-500 to-pink-700" },
        contexto:
          "Profissional que grava vídeos e vive de audiência na internet. Como classificamos?",
        pecaCertaId: "pr",
        fotoUrl: imgProgramador,
        feedbackAcerto: "Correto. Só existe porque a internet e o smartphone foram criados. É do PRESENTE.",
        feedbackErro: "Não existia em 1990. É uma profissão do PRESENTE, nascida da tecnologia digital.",
      },
      {
        id: "r4",
        municipioA: { nome: "Acendedor de lampiões", emoji: "🕯️", cor: "from-amber-700 to-orange-900" },
        municipioB: { nome: "Poste iluminado à noite", emoji: "🌙", cor: "from-slate-600 to-slate-800" },
        contexto:
          "Homem passa nas ruas ao anoitecer com uma vara acendendo cada poste. Como classificamos?",
        pecaCertaId: "ex",
        fotoUrl: imgAcendedor,
        feedbackAcerto: "Correto. EXTINTA. A eletricidade e o sensor automático acabaram com esse ofício.",
        feedbackErro: "Ninguém mais acende posto na mão. É EXTINTA — foi substituída pela eletricidade.",
      },
    ],
    falaFinal:
      "Missão concluída. Você classifica qualquer ofício em Extinta, Modificada ou do Presente.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com uma comparação em duas fatias. De um lado, ferramentas do PASSADO. Do outro, ferramentas do PRESENTE. Toque em cada fatia pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada era do trabalho",
    fotoUrl: imgInfografico,
    fatias: [
      {
        id: "passado",
        rotulo: "Passado",
        emoji: "🕯️",
        percentual: 50,
        cor: "#b45309",
        descricao:
          "Ferramentas manuais e mecânicas do passado. Cada operação exigia força humana, presença física e muito tempo. Um erro não podia ser corrigido facilmente.",
        exemplos: ["Máquina de escrever", "Mesa telefônica de fios", "Lampião a gás", "Pena e tinteiro"],
        fotoUrl: imgMaquinaEscrever,
      },
      {
        id: "presente",
        rotulo: "Presente",
        emoji: "💻",
        percentual: 50,
        cor: "#1e40af",
        descricao:
          "Ferramentas digitais e automáticas do presente. Um único software substitui dezenas de trabalhadores manuais. Erros são corrigidos com um clique.",
        exemplos: ["Computador e laptop", "Smartphone", "LED com sensor", "IA e correção automática"],
        fotoUrl: imgProgramador,
      },
    ],
    falaFinal:
      "Duas fatias, duas eras. A tecnologia nunca para — e a próxima geração de ofícios já está sendo inventada agora mesmo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a terceira página do Grande Livro das Cidades e ganha a Engrenagem de Bronze dos Ofícios.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual foi o principal motivo para a profissão de datilógrafo ser substituída no mercado de trabalho?",
        fotoUrl: imgMaquinaEscrever,
        opcoes: [
          { id: "a", texto: "A invenção e popularização dos computadores e teclados digitais.", correta: true },
          { id: "b", texto: "As pessoas deixaram de escrever textos e livros no mundo inteiro." },
        ],
        feedbackAcerto:
          "Certificado. O computador tornou a escrita mais rápida, limpa e fácil de corrigir. Datilógrafo virou profissão extinta.",
        feedbackErro:
          "As pessoas escrevem mais do que nunca. O motivo foi a chegada do COMPUTADOR — mais rápido e com botão apagar.",
      },
      {
        id: "q2",
        pergunta: "Como chamamos uma profissão que continua existindo, mas usa ferramentas totalmente novas hoje em dia?",
        fotoUrl: imgTelefonista,
        opcoes: [
          { id: "a", texto: "Profissão extinta." },
          { id: "b", texto: "Profissão modificada.", correta: true },
        ],
        feedbackAcerto:
          "Correto. Modificada: mesmo nome, ferramentas diferentes. É o caso do fotógrafo, do professor e da telefonista.",
        feedbackErro:
          "Se ainda existe, não é extinta. É MODIFICADA — a tecnologia mudou as ferramentas do trabalhador.",
      },
      {
        id: "q3",
        pergunta: "Qual dessas profissões só existe porque a tecnologia digital foi criada nas últimas décadas?",
        fotoUrl: imgProgramador,
        opcoes: [
          { id: "a", texto: "Programador de aplicativos.", correta: true },
          { id: "b", texto: "Padeiro de forno a lenha." },
        ],
        feedbackAcerto:
          "Certificação concluída. Programador é uma profissão do PRESENTE — nasceu com o computador e o smartphone.",
        feedbackErro:
          "Padeiro existe há milênios. Já PROGRAMADOR só existe porque o computador foi inventado — é do presente.",
      },
    ],
    selo: {
      nome: "⚙️ Engrenagem de Bronze dos Ofícios",
      subtitulo: "Terceira página do Grande Livro das Cidades restaurada",
      emoji: "⚙️",
      cor: "from-amber-500 via-orange-600 to-red-700",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A terceira página do Grande Livro das Cidades foi restaurada. Você agora entende como o trabalho se transforma com a tecnologia.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Guardião dos Ofícios" },
};
