import type { AulaGeoV1 } from "../../types";
import { url as imgQuilombo } from "@/assets/historia-4ano/quilombo-palmares.jpg.asset.json";
import { url as imgZumbi } from "@/assets/historia-4ano/estatua-zumbi.jpg.asset.json";
import { url as imgDoc } from "@/assets/historia-4ano/documento-navio.jpg.asset.json";
import { url as imgMapa } from "@/assets/historia-4ano/mapa-diaspora.jpg.asset.json";
/**
 * História · 4º Ano · Unidade 4 · Aula 01
 * "As Migrações Forçadas: A Diáspora Africana" — escravidão e resistência.
 * Restaura a Página 4 das Crônicas: As Vozes da Resistência.
 * Tom respeitoso, sem imagens gráficas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-diaspora-africana",
  titulo: "As Migrações Forçadas: A Diáspora Africana",
  iconeTrilha: "✊🏿",
  bncc: ["EF04HI03", "EF04HI08"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia de um documento antigo. Está registrado o nome de milhões de pessoas africanas que NÃO escolheram vir pro Brasil — foram trazidas à força.",
    mapaUrl: imgDoc,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, algumas migrações da história foram por escolha. Outras, não. Milhões de africanos foram capturados nas suas terras natais, separados de suas famílias e trazidos em navios pra trabalhar sem salário no Brasil colonial. É a chamada DIÁSPORA AFRICANA.",
    falaFinal:
      "Nesta aula você acende o quarto ponto do mapa — e honra as VOZES DA RESISTÊNCIA que criaram os quilombos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: os povos africanos escravizados aceitaram passivamente a situação, ou lutaram por LIBERDADE de várias formas?",
    pergunta: "Como reagiram os africanos escravizados?",
    fotoUrl: imgQuilombo,
    opcoes: [
      {
        id: "resistiram",
        titulo: "Resistiram: fugas, revoltas e quilombos",
        subtitulo: "criaram comunidades livres nas matas",
        emoji: "✊🏿",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgQuilombo,
      },
      {
        id: "aceitaram",
        titulo: "Aceitaram sem reagir",
        subtitulo: "não fizeram nada durante 300 anos",
        emoji: "🤐",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgDoc,
      },
    ],
    respostaCerta: "resistiram",
    feedbackAcerto:
      "Correto. RESISTIRAM de todas as formas: fugas, revoltas, culto às religiões africanas, capoeira e a criação dos QUILOMBOS — cidades livres escondidas nas matas.",
    feedbackErro:
      "Nunca houve aceitação passiva. Houve RESISTÊNCIA constante: fugas, revoltas, quilombos, preservação da cultura.",
    falaFinal: "Guarde: a história do povo negro no Brasil é história de LUTA e RESISTÊNCIA.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas para falar de forma respeitosa e correta sobre esse período.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "diaspora",
        capa: "Diáspora",
        emoji: "🌍",
        cor: "from-amber-700 to-orange-900",
        fotoUrl: imgMapa,
        conteudo:
          "DIÁSPORA é o espalhamento FORÇADO de um povo pelo mundo. A Diáspora Africana levou milhões de pessoas de países como Angola, Congo, Benim para as Américas, o Caribe e a Europa entre os séculos XVI e XIX.",
        exemplo:
          "Exemplo: cerca de 4,8 milhões de africanos foram trazidos ao Brasil durante a diáspora — o maior número de todos os países.",
      },
      {
        id: "forcada",
        capa: "Migração Forçada",
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgDoc,
        conteudo:
          "MIGRAÇÃO FORÇADA acontece quando uma pessoa é OBRIGADA a mudar de país sem ter escolha. É o contrário da migração voluntária. Na escravidão, africanos eram capturados, acorrentados e transportados sem consentimento.",
        exemplo:
          "Exemplo: hoje o mundo ainda tem migração forçada — pessoas fugindo de guerras (refugiados).",
      },
      {
        id: "quilombo",
        capa: "Quilombo",
        emoji: "✊🏿",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgQuilombo,
        conteudo:
          "QUILOMBO era uma COMUNIDADE LIVRE fundada por africanos e afrodescendentes que fugiam da escravidão. Ficavam escondidos em matas ou serras. Plantavam alimentos, criavam animais, mantinham suas religiões, línguas e músicas africanas.",
        exemplo:
          "Exemplo: o QUILOMBO DOS PALMARES (AL) chegou a ter 20 mil moradores e durou quase 100 anos. Foi liderado por Ganga Zumba, Zumbi e Dandara.",
      },
    ],
    falaFinal:
      "Diáspora + Migração Forçada + Quilombo: vocabulário de respeito e verdade histórica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o mapa oficial das rotas da diáspora africana pro Brasil. Toque em cada ponto pra ouvir a explicação.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "angola",
        x: 68,
        y: 72,
        emoji: "🌍",
        cor: "from-amber-700 to-orange-900",
        fotoUrl: imgMapa,
        titulo: "1. ANGOLA e CONGO — os pontos de partida",
        texto:
          "A maioria dos africanos trazidos ao Brasil veio da atual Angola, Congo e Costa da Mina (Golfo do Benim). Eram capturados no interior do continente e levados ao litoral.",
      },
      {
        id: "salvador",
        x: 30,
        y: 55,
        emoji: "🏛️",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgDoc,
        titulo: "2. SALVADOR (BA) — o principal porto",
        texto:
          "Salvador foi o maior porto negreiro das Américas. Chegavam navios lotados. Foi capital do Brasil colonial até 1763.",
      },
      {
        id: "recife",
        x: 32,
        y: 45,
        emoji: "🏭",
        cor: "from-red-600 to-orange-800",
        fotoUrl: imgMapa,
        titulo: "3. RECIFE (PE) — açúcar e resistência",
        texto:
          "Recife recebeu muitos africanos pra trabalhar nos engenhos de açúcar. Foi na região do Nordeste que surgiu o QUILOMBO DOS PALMARES.",
      },
      {
        id: "rio",
        x: 40,
        y: 68,
        emoji: "⛰️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgQuilombo,
        titulo: "4. RIO DE JANEIRO — porto do ouro",
        texto:
          "Rio de Janeiro cresceu com o ciclo do ouro. Africanos escravizados trabalhavam nas minas, nas fazendas e nas cidades — mas fugiam pros quilombos das serras.",
      },
    ],
    falaFinal:
      "Cada seta desse mapa carrega histórias de dor, MEMÓRIA e RESISTÊNCIA que formaram o Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas — vocabulário respeitoso e correto.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Como se chama a comunidade LIVRE fundada nas matas por africanos escravizados que conseguiam fugir?",
        fotoUrl: imgQuilombo,
        cards: [
          { id: "q", emoji: "✊🏿", titulo: "Quilombo", cor: "from-emerald-500 to-teal-700" },
          { id: "f", emoji: "🏰", titulo: "Feitoria", cor: "from-slate-500 to-slate-700" },
          { id: "s", emoji: "🏘️", titulo: "Senzala", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "q",
        feedbackAcerto: "Certeza. Comunidade LIVRE de resistência = QUILOMBO.",
        feedbackErro: "Feitoria era posto comercial; senzala era onde eram forçados a morar nas fazendas. LIVRE = QUILOMBO.",
      },
      {
        id: "q2",
        pergunta: "Como se chama uma migração em que a pessoa é OBRIGADA a mudar de país sem ter escolha?",
        fotoUrl: imgDoc,
        cards: [
          { id: "f", emoji: "⛓️", titulo: "Migração forçada", cor: "from-slate-500 to-slate-700" },
          { id: "v", emoji: "✈️", titulo: "Migração voluntária", cor: "from-sky-500 to-blue-700" },
          { id: "t", emoji: "🏖️", titulo: "Turismo", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "f",
        feedbackAcerto: "Exato. Sem escolha = MIGRAÇÃO FORÇADA.",
        feedbackErro: "Voluntária é por escolha; turismo é por lazer. Sem escolha = FORÇADA.",
      },
      {
        id: "q3",
        pergunta: "Quem foi Zumbi dos Palmares?",
        fotoUrl: imgZumbi,
        cards: [
          { id: "l", emoji: "✊🏿", titulo: "Líder do maior quilombo do Brasil", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⛵", titulo: "Navegador português", cor: "from-sky-500 to-blue-700" },
          { id: "c", emoji: "👑", titulo: "Rei de Portugal", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "l",
        feedbackAcerto: "Correto! ZUMBI foi líder do Quilombo dos Palmares — símbolo da resistência negra no Brasil.",
        feedbackErro: "Zumbi foi LÍDER do Quilombo dos Palmares. O 20 de novembro é dia de sua memória.",
      },
    ],
    falaFinal: "Vocabulário técnico dominado. Você fala com respeito e verdade histórica.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores no mesmo mapa: um mostra a ORIGEM (África: Angola, Congo, Costa da Mina), outro mostra os DESTINOS (Salvador, Recife, Rio).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "origem",
        rotulo: "Origem",
        emoji: "🌍",
        cor: "from-amber-700 to-orange-900",
        rect: { x: 55, y: 25, w: 40, h: 65 },
        descricao:
          "Costa Ocidental da África. Povos Bantu (Angola, Congo), Iorubá e Jeje (Golfo do Benim). Cada povo trouxe línguas, religiões e culinária diferentes.",
      },
      {
        id: "destino",
        rotulo: "Destino",
        emoji: "🇧🇷",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 5, y: 30, w: 40, h: 55 },
        descricao:
          "Costa brasileira: Salvador (o maior porto), Recife (engenhos), Rio (minas e cidade). O trabalho forçado sustentou 3 séculos da economia colonial.",
      },
    ],
    falaFinal:
      "A África que aportou aqui NÃO desapareceu — está viva na música, comida, religião, língua e ancestralidade brasileiras.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar as 4 grandes etapas da luta pela liberdade no Brasil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como foi a caminhada até a abolição?",
    paradas: [
      {
        id: "chegada",
        emoji: "⚓",
        rotulo: "1. Chegada dos primeiros navios (século XVI)",
        fotoUrl: imgDoc,
        descricao: "A partir de 1550, começam a chegar navios com africanos escravizados pra trabalhar nos engenhos de açúcar.",
      },
      {
        id: "palmares",
        emoji: "✊🏿",
        rotulo: "2. Quilombo dos Palmares (1600s)",
        fotoUrl: imgQuilombo,
        descricao: "Palmares (AL) foi o maior quilombo. Chegou a ter 20 mil moradores. Ganga Zumba, Zumbi e Dandara lideraram por décadas.",
      },
      {
        id: "leis",
        emoji: "📜",
        rotulo: "3. Leis abolicionistas (século XIX)",
        fotoUrl: imgDoc,
        descricao: "Lei Eusébio (1850), Ventre Livre (1871), Sexagenários (1885) — abolição por etapas, pressionada por revoltas e movimento abolicionista.",
      },
      {
        id: "aurea",
        emoji: "🕊️",
        rotulo: "4. Lei Áurea (1888)",
        fotoUrl: imgZumbi,
        descricao: "13 de maio de 1888: princesa Isabel assina o fim oficial da escravidão. Mas a luta por igualdade continua até hoje.",
      },
    ],
    ordemCerta: ["chegada", "palmares", "leis", "aurea"],
    feedbackAcerto: "Cronologia correta. 300 anos de resistência até a abolição — que ainda não é igualdade completa.",
    feedbackErro: "Essa não é a próxima etapa. Pense na ordem cronológica.",
    falaFinal: "Você mapeou a linha do tempo da luta negra no Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 4 e toque nas palavras destacadas.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 4 — As Vozes da Resistência",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Do século XVI ao XIX, cerca de 4,8 milhões de africanos foram trazidos ao Brasil de forma FORÇADA. Vieram principalmente de Angola, Congo e da Costa da Mina, capturados no interior da África e embarcados em navios. Isso é a DIÁSPORA AFRICANA.",
        chaves: ["Diáspora Africana"],
        definicoes: {
          "Diáspora Africana":
            "Espalhamento forçado de milhões de africanos pelas Américas, Caribe e Europa durante a escravidão.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p2",
        texto:
          "Eram obrigados a trabalhar sem salário nos engenhos de açúcar (Nordeste), nas minas de ouro (MG) e nas fazendas de café (SP/RJ). Perdiam nomes, línguas e direitos. Mas nunca deixaram de RESISTIR.",
        chaves: ["engenhos"],
        definicoes: {
          engenhos: "Grandes fazendas de cana-de-açúcar com fábrica de açúcar. Base da economia do Brasil colonial.",
        },
        fotoUrl: imgDoc,
      },
      {
        id: "p3",
        texto:
          "Muitos fugiam e fundavam QUILOMBOS — comunidades livres escondidas nas matas. O maior foi PALMARES, em Alagoas, com cerca de 20 mil moradores. Foi liderado por Ganga Zumba, ZUMBI e DANDARA.",
        chaves: ["Quilombos", "Zumbi", "Dandara"],
        definicoes: {
          Quilombos: "Comunidades livres fundadas por africanos e afrodescendentes fugidos, onde viviam com autonomia e cultura.",
          Zumbi: "Último grande líder de Palmares. Morto em 20 de novembro de 1695 — data hoje celebrada como Dia da Consciência Negra.",
          Dandara: "Guerreira de Palmares, esposa de Zumbi. Símbolo da resistência das mulheres negras.",
        },
        fotoUrl: imgQuilombo,
      },
      {
        id: "p4",
        texto:
          "A escravidão foi oficialmente abolida em 13 de maio de 1888 (LEI ÁUREA). Mas a luta por IGUALDADE, direitos e reparação continua até hoje. Muitas comunidades quilombolas existem no Brasil atual, defendendo suas terras e tradições.",
        chaves: ["Lei Áurea"],
        definicoes: {
          "Lei Áurea":
            "Lei assinada em 13 de maio de 1888 pela princesa Isabel que aboliu oficialmente a escravidão no Brasil.",
        },
        fotoUrl: imgZumbi,
      },
    ],
    falaFinal: "Leitura concluída. Honrar a memória é o primeiro passo pra não repetir a história.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador: cada rodada mostra uma característica. Classifique: MIGRAÇÃO VOLUNTÁRIA ou FORÇADA?",
    instrucao: "⏱️ Leia e toque",
    duracaoSegundos: 18,
    pecas: [
      { id: "v", emoji: "✈️", rotulo: "Voluntária" },
      { id: "f", emoji: "⛓️", rotulo: "Forçada" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Família italiana pega navio pro Brasil", emoji: "🇮🇹", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Buscando emprego nas fazendas de café", emoji: "☕", cor: "from-emerald-500 to-teal-700" },
        contexto: "Uma família decide sair da Itália pra ganhar a vida no café brasileiro no fim do século XIX.",
        pecaCertaId: "v",
        feedbackAcerto: "Sim! Decidiram por conta própria = VOLUNTÁRIA.",
        feedbackErro: "Decisão própria = VOLUNTÁRIA. Não foram obrigadas.",
      },
      {
        id: "r2",
        municipioA: { nome: "Homem capturado em Angola", emoji: "🌍", cor: "from-amber-700 to-orange-900" },
        municipioB: { nome: "Levado à força em navio", emoji: "⛓️", cor: "from-slate-700 to-slate-900" },
        contexto: "Homem foi capturado no interior da África, acorrentado e embarcado sem escolha rumo ao Brasil.",
        pecaCertaId: "f",
        feedbackAcerto: "Correto. Capturado à força = MIGRAÇÃO FORÇADA.",
        feedbackErro: "Sem escolha, à força = FORÇADA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Jovem japonês emigra em 1908", emoji: "🇯🇵", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Contrato de trabalho em fazenda", emoji: "📝", cor: "from-emerald-500 to-teal-700" },
        contexto: "Jovem japonês assina contrato pra trabalhar em fazenda paulista e embarca por escolha.",
        pecaCertaId: "v",
        feedbackAcerto: "Sim! Contrato + escolha = VOLUNTÁRIA.",
        feedbackErro: "Assinar contrato por escolha = VOLUNTÁRIA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Família separada em porto africano", emoji: "💔", cor: "from-amber-700 to-orange-900" },
        municipioB: { nome: "Sem direitos, sem salário", emoji: "⛓️", cor: "from-slate-700 to-slate-900" },
        contexto: "No porto, uma família é dividida, cada um pra um navio. Nenhum recebeu salário, nenhum escolheu.",
        pecaCertaId: "f",
        feedbackAcerto: "Sim. Separação forçada + sem direitos = FORÇADA.",
        feedbackErro: "Sem direitos e sem escolha = FORÇADA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Refugiado foge da guerra hoje", emoji: "🕊️", cor: "from-amber-700 to-orange-900" },
        municipioB: { nome: "Sai pra sobreviver, não por escolha", emoji: "⚠️", cor: "from-slate-700 to-slate-900" },
        contexto: "Família sai da Síria fugindo de bombardeios. Não escolheu — precisou pra sobreviver.",
        pecaCertaId: "f",
        feedbackAcerto: "Sim. Refugiado = MIGRAÇÃO FORÇADA moderna.",
        feedbackErro: "Refugiado NÃO escolhe migrar — foge pra sobreviver. FORÇADA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Cientista muda pros EUA pra estudar", emoji: "🎓", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Ganhou bolsa e aceitou", emoji: "🌟", cor: "from-emerald-500 to-teal-700" },
        contexto: "Cientista brasileira ganha bolsa de doutorado e decide morar 4 anos nos EUA.",
        pecaCertaId: "v",
        feedbackAcerto: "Correto. Bolsa + decisão = VOLUNTÁRIA.",
        feedbackErro: "Escolha própria + bolsa = VOLUNTÁRIA.",
      },
    ],
    falaFinal: "6 rodadas! Você diferencia voluntária e forçada com precisão histórica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da história do Brasil: dos 500 anos desde 1500, quantos foram com escravidão legal?",
    instrucao: "Toque nas fatias",
    fotoUrl: imgZumbi,
    fatias: [
      {
        id: "esc",
        rotulo: "Com escravidão legal (~72%)",
        emoji: "⛓️",
        percentual: 72,
        cor: "#78350f",
        descricao:
          "De 1550 (chegada dos primeiros navios) até 1888 (Lei Áurea), o Brasil teve escravidão LEGAL por cerca de 338 anos. É a MAIORIA da nossa história.",
        exemplos: ["📜 1550-1888", "🏛️ 338 anos", "🇧🇷 Colônia+Império"],
      },
      {
        id: "pos",
        rotulo: "Pós-abolição (~28%)",
        emoji: "🕊️",
        percentual: 28,
        cor: "#0f766e",
        descricao:
          "De 1888 até hoje: pouco mais de 130 anos. A luta por igualdade real, reparação e cidadania plena continua.",
        exemplos: ["📅 1888-hoje", "✊🏿 Consciência", "⚖️ Direitos"],
      },
    ],
    falaFinal: "72% da nossa história foi com escravidão legal. Entender isso é entender o Brasil.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia das Vozes da Resistência.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgZumbi,
    perguntas: [
      {
        id: "av1",
        pergunta: "Como se chama a comunidade LIVRE fundada nas matas por africanos escravizados?",
        opcoes: [
          { id: "a", texto: "Feitoria.", correta: false },
          { id: "b", texto: "Quilombo.", correta: true },
          { id: "c", texto: "Senzala.", correta: false },
        ],
        feedbackAcerto: "Correto! LIVRE = QUILOMBO.",
        feedbackErro: "Feitoria/senzala são de opressão. LIVRE = QUILOMBO.",
      },
      {
        id: "av2",
        pergunta: "Qual data é celebrada como Dia da Consciência Negra no Brasil?",
        opcoes: [
          { id: "a", texto: "13 de maio.", correta: false },
          { id: "b", texto: "20 de novembro (morte de Zumbi).", correta: true },
          { id: "c", texto: "07 de setembro.", correta: false },
        ],
        feedbackAcerto: "Isso! 20 de novembro — dia da morte de ZUMBI dos Palmares.",
        feedbackErro: "13/5 é a Lei Áurea; 7/9 é a Independência. Consciência Negra = 20/11.",
      },
      {
        id: "av3",
        pergunta: "Qual lei aboliu oficialmente a escravidão no Brasil?",
        opcoes: [
          { id: "a", texto: "Lei do Ventre Livre.", correta: false },
          { id: "b", texto: "Lei Áurea (1888).", correta: true },
          { id: "c", texto: "Lei Eusébio de Queirós.", correta: false },
        ],
        feedbackAcerto: "Correto! LEI ÁUREA, 13 de maio de 1888.",
        feedbackErro: "Ventre Livre libertou filhos; Eusébio proibiu tráfico. A ABOLIÇÃO oficial é a LEI ÁUREA (1888).",
      },
    ],
    selo: {
      nome: "Vozes da Resistência",
      subtitulo: "Insígnia da Diáspora e dos Quilombos",
      emoji: "✊🏿",
      cor: "from-emerald-400 to-teal-600",
      fotoUrl: imgZumbi,
    },
    falaFinal:
      "Insígnia conquistada! Página 4 restaurada. O quarto ponto brilha no mapa: As Vozes da Resistência.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Vozes da Resistência" },
};
