import type { AulaGeoV1 } from "../../types";
import { url as imgAgora } from "@/assets/historia-5ano/agora-atenas.jpg.asset.json";
import { url as imgOstraco } from "@/assets/historia-5ano/ostraco.jpg.asset.json";
import { url as imgColiseu } from "@/assets/historia-5ano/coliseu-roma.jpg.asset.json";
import { url as imgConst } from "@/assets/historia-5ano/constituicao-1988.jpg.asset.json";
import { url as imgTimeline } from "@/assets/historia-5ano/timeline-cidadania.jpg.asset.json";
/**
 * História · 5º Ano · Unidade 1 · Aula 01 (PILOTO)
 * "O Conceito de Cidadania e a Antiguidade"
 * Restaura a Página 1 do Memorial: A Chama da Democracia.
 * Skin visual TRAVADA: fotografia real + infográfico PT-BR (padrão 3º/4º ano).
 * Linguagem calibrada 10 anos: mais reflexiva, técnica, com vocabulário político.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cidadania-antiguidade",
  titulo: "O Conceito de Cidadania e a Antiguidade",
  iconeTrilha: "⚖️",
  bncc: ["EF05HI01", "EF05HI04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Você está vendo o que restou da ÁGORA de Atenas — a praça onde, há mais de 2.500 anos, nasceu a palavra DEMOCRACIA.",
    mapaUrl: imgAgora,
    imagemDestaqueUrl: imgTimeline,
    aurora:
      "Pequeno Historiador, todo mundo fala em CIDADANIA — o direito de votar, ir à escola, ser tratado com respeito. Mas essa palavra não é moderna. Ela nasceu aqui, nessa praça grega, quando os cidadãos se reuniam pra decidir o futuro da cidade.",
    falaFinal:
      "Nesta aula você acende a primeira Tocha da Justiça no Memorial da Cidadania: A Chama da Democracia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite de investigador: na Atenas Antiga, quem tinha direito de votar nas decisões da cidade?",
    pergunta: "Quem era CIDADÃO em Atenas?",
    fotoUrl: imgAgora,
    opcoes: [
      {
        id: "restrito",
        titulo: "Só homens livres, adultos, atenienses",
        subtitulo: "mulheres, escravizados e estrangeiros ficavam de fora",
        emoji: "⚖️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgOstraco,
      },
      {
        id: "todos",
        titulo: "Todos os moradores da cidade",
        subtitulo: "homens, mulheres, crianças, escravizados — todos iguais",
        emoji: "👥",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgAgora,
      },
    ],
    respostaCerta: "restrito",
    feedbackAcerto:
      "Correto. A democracia grega era RESTRITA: só homens livres, adultos e nascidos em Atenas votavam. Mulheres, escravizados e estrangeiros ficavam de fora. Ainda não era uma cidadania UNIVERSAL.",
    feedbackErro:
      "Não. Foi um GRANDE começo, mas a democracia grega era EXCLUDENTE — só cerca de 10% da população votava. Mulheres e escravizados não tinham direito nenhum.",
    falaFinal:
      "Guarde essa ideia: a cidadania NASCEU pequena e foi sendo AMPLIADA ao longo de séculos. A luta por direitos continua até hoje.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas do vocabulário político do 5º ano. Cada caderno está aberto com foto real e definição clara.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "cidadania",
        capa: "Cidadania",
        emoji: "⚖️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgConst,
        conteudo:
          "CIDADANIA é o conjunto de DIREITOS (o que a pessoa pode receber: saúde, educação, voto, respeito) e DEVERES (o que a pessoa deve cumprir: obedecer leis, pagar impostos, respeitar o outro) que garantem a participação na vida em sociedade.",
        exemplo:
          "Exemplo: no Brasil, aos 16 anos você já pode tirar o Título de Eleitor e votar — isso é exercer a cidadania.",
      },
      {
        id: "democracia",
        capa: "Democracia",
        emoji: "🗳️",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgAgora,
        conteudo:
          "DEMOCRACIA vem do grego 'demos' (povo) + 'kratos' (poder). Significa 'GOVERNO DO POVO'. É o sistema em que os cidadãos escolhem seus governantes pelo VOTO e podem debater as leis da cidade.",
        exemplo:
          "Exemplo: eleger prefeito, governador e presidente é democracia em ação. Foi inventada em Atenas por volta de 500 a.C.",
      },
      {
        id: "republica",
        capa: "República",
        emoji: "🏛️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgColiseu,
        conteudo:
          "REPÚBLICA vem do latim 'res publica' — 'coisa pública'. É a forma de governo em que o CARGO político não é herdado (como na monarquia), mas ESCOLHIDO por tempo determinado. Nasceu em Roma antes de Cristo.",
        exemplo:
          "Exemplo: o Brasil é uma República desde 1889. O presidente governa por 4 anos e sai — não é rei.",
      },
    ],
    falaFinal:
      "Cidadania + Democracia + República. Esse trio é a base do vocabulário político do 5º ano. Vamos usar o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o INFOGRÁFICO oficial da evolução da cidadania — da Antiguidade até hoje. Toque em cada ponto pra ouvir como a ideia foi mudando.",
    instrucao: "Toque nos pontos da linha do tempo",
    mapaUrl: imgTimeline,
    pontos: [
      {
        id: "grecia",
        x: 18,
        y: 50,
        emoji: "🏛️",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgAgora,
        titulo: "1. GRÉCIA ANTIGA (Atenas, 500 a.C.)",
        texto:
          "Nasceu a DEMOCRACIA. Os cidadãos se reuniam na ÁGORA (praça pública) pra debater e votar. Mas era RESTRITA: só homens livres, adultos, atenienses. Cerca de 10% da população.",
      },
      {
        id: "roma",
        x: 50,
        y: 50,
        emoji: "⚔️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgColiseu,
        titulo: "2. ROMA ANTIGA (509 a.C.)",
        texto:
          "Roma criou a REPÚBLICA e as PRIMEIRAS LEIS ESCRITAS (Lei das Doze Tábuas). Aos poucos, os plebeus (povo comum) conquistaram direitos políticos depois de muitas revoltas.",
      },
      {
        id: "moderna",
        x: 82,
        y: 50,
        emoji: "🗳️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgConst,
        titulo: "3. CIDADANIA MODERNA (1988 no Brasil)",
        texto:
          "Hoje a cidadania é UNIVERSAL: garantida a todas as pessoas sem distinção de gênero, cor, religião ou classe. A Constituição de 1988 é chamada de 'Constituição Cidadã'.",
      },
    ],
    falaFinal:
      "Grécia → Roma → Cidadania Moderna. A cidadania AMPLIOU pra cada vez mais gente. E ainda está sendo construída.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas rápidas de investigador político. Testam se você domina o vocabulário técnico da aula.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Qual palavra grega significa 'GOVERNO DO POVO' e nomeia o sistema em que os cidadãos escolhem seus governantes pelo voto?",
        fotoUrl: imgAgora,
        cards: [
          { id: "d", emoji: "🗳️", titulo: "Democracia", cor: "from-sky-500 to-blue-700" },
          { id: "m", emoji: "👑", titulo: "Monarquia", cor: "from-amber-500 to-orange-700" },
          { id: "di", emoji: "⛔", titulo: "Ditadura", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "d",
        feedbackAcerto:
          "Correto. Demos (povo) + kratos (poder) = DEMOCRACIA. Inventada em Atenas.",
        feedbackErro:
          "Monarquia = governo do rei. Ditadura = governo de um só. Governo do POVO = DEMOCRACIA.",
      },
      {
        id: "q2",
        pergunta:
          "Na Atenas Antiga, quem TINHA direito de participar das assembleias e votar?",
        fotoUrl: imgOstraco,
        cards: [
          { id: "h", emoji: "👨", titulo: "Só homens livres, adultos e atenienses", cor: "from-amber-500 to-orange-700" },
          { id: "t", emoji: "👥", titulo: "Todas as pessoas da cidade", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "🧒", titulo: "Só as crianças", cor: "from-emerald-500 to-teal-700" },
        ],
        correta: "h",
        feedbackAcerto:
          "Exato. Só HOMENS LIVRES, ADULTOS e ATENIENSES. Mulheres, escravizados e estrangeiros ficavam de fora.",
        feedbackErro:
          "A democracia grega era RESTRITA — só cerca de 10% da população votava.",
      },
      {
        id: "q3",
        pergunta:
          "Como se chama a forma de governo em que o cargo NÃO é herdado (não é rei) e sim escolhido por tempo determinado?",
        fotoUrl: imgColiseu,
        cards: [
          { id: "r", emoji: "🏛️", titulo: "República", cor: "from-amber-500 to-orange-700" },
          { id: "mo", emoji: "👑", titulo: "Monarquia", cor: "from-slate-500 to-slate-700" },
          { id: "im", emoji: "⚔️", titulo: "Império", cor: "from-red-500 to-orange-700" },
        ],
        correta: "r",
        feedbackAcerto:
          "Isso. REPÚBLICA — 'coisa pública', cargo não herdado. Inventada em Roma.",
        feedbackErro:
          "Monarquia e Império têm rei ou imperador (cargo herdado). REPÚBLICA é cargo eleito por tempo determinado.",
      },
    ],
    falaFinal:
      "Radar afiado. Você já opera com vocabulário político: cidadania, democracia, república.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do MESMO infográfico: um destaca a cidadania na ANTIGUIDADE (restrita), outro destaca a cidadania MODERNA (universal). Veja o contraste.",
    instrucao: "Toque nos interruptores pra ver cada era",
    mapaUrl: imgTimeline,
    camadas: [
      {
        id: "antiga",
        rotulo: "Cidadania Antiga",
        emoji: "🏛️",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 0, y: 10, w: 66, h: 80 },
        descricao:
          "Restrita a POUCOS: só homens livres, adultos, nascidos na cidade. Mulheres, escravizados e estrangeiros ficavam DE FORA. Era um começo, mas ainda muito excludente.",
      },
      {
        id: "moderna",
        rotulo: "Cidadania Moderna",
        emoji: "🗳️",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 66, y: 10, w: 34, h: 80 },
        descricao:
          "UNIVERSAL: garantida a todas as pessoas sem distinção de gênero, cor, religião, orientação sexual ou classe social. É uma CONQUISTA de séculos de luta.",
      },
    ],
    falaFinal:
      "Duas eras, um mesmo caminho. A cidadania AMPLIOU — e ainda pode ampliar mais. É uma construção contínua.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos organizar a EVOLUÇÃO histórica da cidadania em 4 etapas. Toque em cada uma na ordem certa.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como a cidadania foi mudando ao longo da história?",
    paradas: [
      {
        id: "grecia",
        emoji: "🏛️",
        rotulo: "1. Grécia Antiga (500 a.C.)",
        fotoUrl: imgAgora,
        descricao:
          "Nasce a DEMOCRACIA em Atenas. Cidadãos votam na Ágora. Direito restrito a homens livres atenienses.",
      },
      {
        id: "roma",
        emoji: "⚔️",
        rotulo: "2. Roma Antiga (509 a.C.)",
        fotoUrl: imgColiseu,
        descricao:
          "Nasce a REPÚBLICA. Primeiras leis escritas (Lei das Doze Tábuas). Plebeus conquistam direitos aos poucos.",
      },
      {
        id: "revolucao",
        emoji: "🗽",
        rotulo: "3. Revolução Francesa (1789)",
        fotoUrl: imgTimeline,
        descricao:
          "Declaração dos Direitos do Homem: LIBERDADE, IGUALDADE, FRATERNIDADE. Ideia se espalha pelo mundo.",
      },
      {
        id: "constituicao",
        emoji: "🇧🇷",
        rotulo: "4. Constituição Cidadã (1988)",
        fotoUrl: imgConst,
        descricao:
          "Brasil garante cidadania UNIVERSAL: voto pra todos, direito à saúde, educação e liberdade de expressão.",
      },
    ],
    ordemCerta: ["grecia", "roma", "revolucao", "constituicao"],
    feedbackAcerto:
      "Cronologia perfeita: 500 a.C. → 509 a.C. → 1789 → 1988. Cada etapa AMPLIOU quem podia ser cidadão.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense: onde a cidadania NASCEU e como foi se ampliando?",
    falaFinal:
      "Você acabou de mapear 2.500 ANOS de história da cidadania. Cada etapa foi uma conquista.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Leia a Página 1 do Memorial da Cidadania com seus próprios olhos. Toque nas palavras destacadas pra ver a definição.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 1 — A Chama da Democracia",
    paragrafos: [
      {
        id: "p1",
        texto:
          "CIDADANIA é o conjunto de DIREITOS e DEVERES que uma pessoa tem pra participar da vida em sociedade. A ideia é antiga: nasceu há mais de 2.500 anos, na GRÉCIA ANTIGA, na cidade de ATENAS.",
        chaves: ["Cidadania"],
        definicoes: {
          Cidadania:
            "Conjunto de direitos (o que se pode receber) e deveres (o que se deve cumprir) que garantem a participação na vida em sociedade.",
        },
        fotoUrl: imgAgora,
      },
      {
        id: "p2",
        texto:
          "Em Atenas, os cidadãos se reuniam na ÁGORA (praça pública) pra debater e votar as leis. Nasceu ali a DEMOCRACIA — palavra grega que significa 'GOVERNO DO POVO'. Mas era RESTRITA: só homens livres, adultos e atenienses votavam. Mulheres, escravizados e estrangeiros ficavam de fora.",
        chaves: ["Ágora", "Democracia"],
        definicoes: {
          Ágora:
            "Praça pública das cidades gregas antigas onde os cidadãos se reuniam para debater e votar.",
          Democracia:
            "Do grego demos (povo) + kratos (poder) = 'governo do povo'. Sistema em que os cidadãos escolhem seus governantes pelo voto.",
        },
        fotoUrl: imgOstraco,
      },
      {
        id: "p3",
        texto:
          "Depois vieram os ROMANOS, que criaram a REPÚBLICA (do latim 'res publica' — coisa pública). Escreveram as PRIMEIRAS LEIS em pedra (Lei das Doze Tábuas). Aos poucos, os plebeus (povo comum) conquistaram direitos após muitas revoltas.",
        chaves: ["República"],
        definicoes: {
          República:
            "Forma de governo em que o cargo político NÃO é herdado (não é rei), mas escolhido pelo povo por tempo determinado.",
        },
        fotoUrl: imgColiseu,
      },
      {
        id: "p4",
        texto:
          "Hoje, a CIDADANIA MODERNA é UNIVERSAL: garantida a todas as pessoas sem distinção de gênero, cor, religião ou classe. No Brasil, a Constituição de 1988 é chamada de CONSTITUIÇÃO CIDADÃ porque colocou os direitos humanos em primeiro lugar.",
        chaves: ["Constituição Cidadã"],
        definicoes: {
          "Constituição Cidadã":
            "Apelido da Constituição brasileira de 1988, porque garantiu direitos fundamentais (saúde, educação, voto, liberdade) a todos os cidadãos.",
        },
        fotoUrl: imgConst,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, como a cidadania NASCEU pequena e cresceu ao longo dos séculos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de cidadão! Cada rodada mostra uma pessoa. Você tem que decidir rápido: em ATENAS ANTIGA, essa pessoa ERA cidadã ou NÃO ERA?",
    instrucao: "⏱️ Leia e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "e", emoji: "✅", rotulo: "Era cidadão" },
      { id: "n", emoji: "❌", rotulo: "Não era cidadão" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Homem livre, ateniense, 30 anos", emoji: "👨", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Dono de terras, nascido em Atenas", emoji: "🏛️", cor: "from-emerald-500 to-teal-700" },
        contexto: "Homem livre, adulto, dono de terras, nascido em Atenas.",
        pecaCertaId: "e",
        feedbackAcerto: "Correto! Perfil clássico do cidadão ateniense. ERA CIDADÃO.",
        feedbackErro: "Homem livre + adulto + ateniense = ERA cidadão em Atenas.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mulher ateniense, comerciante", emoji: "👩", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Adulta, livre, morava na cidade", emoji: "🏺", cor: "from-orange-500 to-red-700" },
        contexto: "Mulher adulta, livre, moradora de Atenas.",
        pecaCertaId: "n",
        feedbackAcerto: "Correto (e injusto): mulheres NÃO eram cidadãs em Atenas.",
        feedbackErro: "Mulheres, mesmo livres, NÃO tinham direitos políticos em Atenas. NÃO era cidadã.",
      },
      {
        id: "r3",
        municipioA: { nome: "Escravizado do interior da Grécia", emoji: "⛓️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Trabalhava nas construções", emoji: "🪨", cor: "from-orange-500 to-red-700" },
        contexto: "Homem escravizado, trabalhava nas grandes obras de Atenas.",
        pecaCertaId: "n",
        feedbackAcerto: "Correto. Pessoas escravizadas NÃO eram cidadãs.",
        feedbackErro: "Escravizados NÃO tinham direito político. NÃO era cidadão.",
      },
      {
        id: "r4",
        municipioA: { nome: "Comerciante de Esparta em Atenas", emoji: "🛒", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Morava há 20 anos na cidade", emoji: "🏘️", cor: "from-orange-500 to-red-700" },
        contexto: "Homem nascido em outra cidade grega (Esparta), morando em Atenas.",
        pecaCertaId: "n",
        feedbackAcerto: "Correto. ESTRANGEIRO (mesmo grego) não era cidadão de Atenas.",
        feedbackErro: "Só quem nascia em Atenas era cidadão ateniense. Estrangeiro = NÃO era.",
      },
      {
        id: "r5",
        municipioA: { nome: "Menino ateniense de 12 anos", emoji: "🧒", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Filho de cidadão livre", emoji: "👶", cor: "from-orange-500 to-red-700" },
        contexto: "Criança ateniense de 12 anos, filho de cidadão.",
        pecaCertaId: "n",
        feedbackAcerto: "Correto. Só ADULTO era cidadão. Criança ainda não.",
        feedbackErro: "Só adultos tinham direito de voto. Criança = ainda não era cidadão.",
      },
      {
        id: "r6",
        municipioA: { nome: "Filósofo ateniense, homem, 40 anos", emoji: "🧔", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Livre e nascido na cidade", emoji: "📜", cor: "from-emerald-500 to-teal-700" },
        contexto: "Homem adulto, livre, filósofo, nascido em Atenas.",
        pecaCertaId: "e",
        feedbackAcerto: "Correto. Perfil clássico: homem + livre + ateniense = ERA cidadão.",
        feedbackErro: "Homem + livre + adulto + ateniense = cidadão. ERA cidadão.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já enxerga por que a democracia grega era um COMEÇO, mas ainda muito excludente.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da população de Atenas: dos 100% dos moradores, quantos eram considerados CIDADÃOS?",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgAgora,
    fatias: [
      {
        id: "excluidos",
        rotulo: "Excluídos (~90%)",
        emoji: "❌",
        percentual: 90,
        cor: "#b45309",
        descricao:
          "Mulheres, escravizados, estrangeiros e crianças NÃO eram cidadãos. Somavam cerca de 90% da população de Atenas. Ficavam de fora das decisões políticas.",
        exemplos: ["👩 Mulheres", "⛓️ Escravizados", "🛒 Estrangeiros"],
      },
      {
        id: "cidadaos",
        rotulo: "Cidadãos (~10%)",
        emoji: "✅",
        percentual: 10,
        cor: "#0f766e",
        descricao:
          "Só cerca de 10% dos moradores de Atenas eram cidadãos: homens livres, adultos e nascidos na cidade. Um grupo pequeno decidia por todo mundo.",
        exemplos: ["👨 Homens livres", "🏛️ Adultos", "📜 Atenienses"],
      },
    ],
    falaFinal:
      "Impressionante: 90% ficavam de fora! Hoje entendemos por que a luta pela cidadania UNIVERSAL foi tão longa.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra ganhar a insígnia da Chama da Democracia e restaurar a Página 1 do Memorial.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgConst,
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Qual palavra grega, criada em Atenas, significa 'governo do povo' e defende a participação dos cidadãos nas decisões?",
        opcoes: [
          { id: "a", texto: "Monarquia absolutista.", correta: false },
          { id: "b", texto: "Democracia.", correta: true },
          { id: "c", texto: "Ditadura.", correta: false },
        ],
        feedbackAcerto: "Correto! DEMOCRACIA — demos (povo) + kratos (poder).",
        feedbackErro: "Monarquia = governo do rei. Ditadura = governo de um só. Governo do POVO = DEMOCRACIA.",
      },
      {
        id: "av2",
        pergunta:
          "Na Atenas Antiga, quem era considerado CIDADÃO com direito de votar nas assembleias?",
        opcoes: [
          { id: "a", texto: "Todos os moradores da cidade.", correta: false },
          { id: "b", texto: "Só homens livres, adultos, nascidos em Atenas.", correta: true },
          { id: "c", texto: "Só as crianças e mulheres.", correta: false },
        ],
        feedbackAcerto:
          "Correto! Democracia grega era RESTRITA: só homens livres atenienses (~10% da população).",
        feedbackErro:
          "Não era universal. Só homens livres, adultos e atenienses tinham direito ao voto.",
      },
      {
        id: "av3",
        pergunta:
          "Como se chama a Constituição brasileira de 1988, que garantiu direitos fundamentais a todos os cidadãos?",
        opcoes: [
          { id: "a", texto: "Constituição Imperial.", correta: false },
          { id: "b", texto: "Constituição Cidadã.", correta: true },
          { id: "c", texto: "Constituição Colonial.", correta: false },
        ],
        feedbackAcerto:
          "Isso! CONSTITUIÇÃO CIDADÃ — porque colocou os direitos humanos em primeiro lugar.",
        feedbackErro:
          "A de 1988 é a CONSTITUIÇÃO CIDADÃ — o Brasil não tem mais Império desde 1889.",
      },
    ],
    selo: {
      nome: "Chama da Democracia",
      subtitulo: "Insígnia oficial do Memorial da Cidadania",
      emoji: "⚖️",
      cor: "from-amber-400 to-orange-600",
      fotoUrl: imgAgora,
    },
    falaFinal:
      "Insígnia conquistada! Página 1 do Memorial restaurada. A primeira Tocha da Justiça brilha no grande salão: A Chama da Democracia.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Chama da Democracia" },
};
