import type { AulaGeoV1 } from "../../types";
import andes from "@/assets/geografia-8ano/cordilheira-andes.jpg";
import favela from "@/assets/geografia-8ano/favela-latina.jpg";
import mercosul from "@/assets/geografia-8ano/mercosul-mapa.jpg";
import cultura from "@/assets/geografia-8ano/cultura-latina.jpg";

/**
 * Geografia · 8º Ano · Unidade 2 · Aula 01
 * "América Latina" — BNCC EF08GE05, EF08GE06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-america-latina",
  titulo: "América Latina — Identidade, desigualdade e integração",
  iconeTrilha: "🌎",
  bncc: ["EF08GE05", "EF08GE06"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: andes,
    imagemDestaqueUrl: andes,
    aurora:
      "AMÉRICA LATINA são 20 países, 660 milhões de habitantes, do México à Argentina. Nasceu do encontro violento entre INDÍGENAS (astecas, maias, incas), EUROPEUS (Portugal, Espanha) e AFRICANOS escravizados. Herdou riquezas naturais (Cordilheira dos Andes, Amazônia, pampas) e feridas (desigualdade, favelas). Compartilha 3 línguas latinas (português, espanhol, francês), fé católica majoritária e uma cultura vibrante — samba, mariachi, cumbia. Hoje tenta se integrar pelo MERCOSUL e outros blocos.",
    falaFinal: "Um subcontinente marcado por diversidade natural, desigualdade profunda e cultura poderosa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual é a MAIOR cidade da América Latina em número de habitantes?",
    pergunta: "Qual dessas metrópoles é a maior?",
    opcoes: [
      { id: "sp", titulo: "SÃO PAULO (Brasil)", subtitulo: "~22 milhões", emoji: "🇧🇷", cor: "from-emerald-800 to-slate-950" },
      { id: "mex", titulo: "CIDADE DO MÉXICO", subtitulo: "~22 milhões", emoji: "🇲🇽", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "sp",
    feedbackAcerto:
      "Isso, por pouco! São Paulo (região metropolitana ~22,4 mi) supera a Cidade do México (~22,3 mi) em números recentes. Ambas são gigantes.",
    feedbackErro:
      "Bem próximas! São Paulo (~22,4 mi) tem uma leve vantagem sobre a Cidade do México (~22,3 mi). As duas são as maiores da América Latina.",
    falaFinal: "São Paulo e Cidade do México são as duas gigantes latino-americanas — quase empatadas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da América Latina.",
    instrucao: "",
    cadernos: [
      {
        id: "andes",
        capa: "1. Cordilheira dos Andes",
        emoji: "🏔️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "CORDILHEIRA DOS ANDES é a maior cadeia de montanhas do mundo em extensão: 7.240 km percorrendo 7 países (Venezuela, Colômbia, Equador, Peru, Bolívia, Chile, Argentina). O pico mais alto é o ACONCÁGUA (6.960 m).",
        exemplo:
          "Curiosidade: os Andes têm cidades a mais de 4.000 m de altitude, como La Paz (Bolívia, 3.640 m) e Potosí (4.090 m). Foi ali que o Império Inca construiu Machu Picchu no século XV. O oxigênio é 40% menor que ao nível do mar.",
        fotoUrl: andes,
      },
      {
        id: "urb",
        capa: "2. Urbanização desigual",
        emoji: "🏘️",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "URBANIZAÇÃO na América Latina é a mais rápida e desigual do mundo: 82% da população vive em cidades. Mas essa urbanização gerou FAVELAS gigantes por falta de planejamento e desigualdade de renda extrema.",
        exemplo:
          "Curiosidade: a Rocinha (RJ) tem cerca de 100 mil moradores, é a maior favela do Brasil. A Ciudad Neza (México) e Villa 31 (Buenos Aires) são exemplos similares. 20% dos latino-americanos vivem em assentamentos informais.",
        fotoUrl: favela,
      },
      {
        id: "merc",
        capa: "3. Mercosul",
        emoji: "🤝",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "MERCOSUL (Mercado Comum do Sul) é o bloco econômico da América do Sul, criado em 1991 pelo Tratado de Assunção. Membros plenos: BRASIL, ARGENTINA, URUGUAI, PARAGUAI (Venezuela suspensa). Cerca de 260 milhões de habitantes.",
        exemplo:
          "Curiosidade: no Mercosul, cidadãos podem viver e trabalhar em qualquer país-membro só com documento nacional — sem passaporte nem visto. Um paulista pode morar em Buenos Aires como se fosse Salvador.",
        fotoUrl: mercosul,
      },
      {
        id: "cult",
        capa: "4. Cultura mestiça",
        emoji: "💃",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "CULTURA LATINO-AMERICANA é MESTIÇA — mistura elementos indígenas, europeus e africanos. Isso aparece na música (samba, tango, mariachi, cumbia, reggaeton), na comida (tacos, feijoada, empanadas) e na religião (catolicismo + candomblé + tradições andinas).",
        exemplo:
          "Curiosidade: o carnaval do Rio recebe 6 milhões de foliões por ano. A cumbia colombiana nasceu de tambores africanos + flautas indígenas + estrutura melódica espanhola. É a fusão em som.",
        fotoUrl: cultura,
      },
    ],
    falaFinal: "Andes, favelas, Mercosul, mestiçagem. 4 pilares da América Latina.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos da América Latina. Toque em cada card.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: mercosul,
    pontos: [
      { id: "andes", x: 25, y: 60, emoji: "🏔️", cor: "from-slate-700 to-slate-950",
        titulo: "🏔️ Cordilheira dos Andes",
        texto: "7.240 km de montanhas. Aconcágua (6.960 m). La Paz e Machu Picchu. Espinha dorsal do continente.",
        fotoUrl: andes },
      { id: "urb", x: 60, y: 40, emoji: "🏘️", cor: "from-orange-800 to-slate-950",
        titulo: "🏘️ Urbanização desigual",
        texto: "82% da população em cidades. 20% em favelas. São Paulo, Cidade do México, Buenos Aires — megacidades com contrastes brutais.",
        fotoUrl: favela },
      { id: "merc", x: 45, y: 75, emoji: "🤝", cor: "from-emerald-800 to-slate-950",
        titulo: "🤝 Mercosul (1991)",
        texto: "Brasil, Argentina, Uruguai, Paraguai. 260 mi de habitantes. Livre circulação de pessoas e mercadorias.",
        fotoUrl: mercosul },
      { id: "cult", x: 75, y: 60, emoji: "💃", cor: "from-red-800 to-slate-950",
        titulo: "💃 Cultura mestiça",
        texto: "Samba, mariachi, cumbia, tango. Mistura indígena + africana + europeia. A alma do continente.",
        fotoUrl: cultura },
    ],
    falaFinal: "Geografia + urbanização + integração + cultura. Isso é a América Latina.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Cordilheira dos Andes é a maior do mundo em:",
        fotoUrl: andes,
        cards: [
          { id: "a", emoji: "📏", titulo: "Extensão (7.240 km)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "⛰️", titulo: "Altura (mais alta que o Himalaia)", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🌡️", titulo: "Temperatura", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 7.240 km — a maior EXTENSÃO. Himalaia é mais ALTA (Everest, 8.848 m).",
        feedbackErro: "É a maior em EXTENSÃO (7.240 km). Em altura, o Himalaia (Everest, 8.848 m) supera o Aconcágua (6.960 m)." },
      { id: "q2", pergunta: "Percentual de latino-americanos vivendo em cidades:",
        fotoUrl: favela,
        cards: [
          { id: "a", emoji: "🏙️", titulo: "82% (urbanização alta)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚜", titulo: "20% (maioria rural)", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🏡", titulo: "50% (metade e metade)", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 82% — uma das maiores taxas de urbanização do mundo.",
        feedbackErro: "É 82%. A América Latina se urbanizou muito rápido no século XX." },
      { id: "q3", pergunta: "Membros plenos do Mercosul:",
        fotoUrl: mercosul,
        cards: [
          { id: "a", emoji: "🤝", titulo: "Brasil, Argentina, Uruguai, Paraguai", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "EUA e México", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇨🇱", titulo: "Chile, Peru e Colômbia", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. BR + AR + UY + PY = fundadores do Mercosul (1991).",
        feedbackErro: "Chile e Peru são ASSOCIADOS, não plenos. EUA está em outro bloco (USMCA). Plenos: BR/AR/UY/PY." },
      { id: "q4", pergunta: "Cultura latino-americana é MESTIÇA porque mistura:",
        fotoUrl: cultura,
        cards: [
          { id: "a", emoji: "💃", titulo: "Indígena + africana + europeia", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇨🇳", titulo: "Chinesa + japonesa + coreana", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🇦🇺", titulo: "Australiana + inglesa", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Três matrizes: povos originários + africanos + colonizadores europeus.",
        feedbackErro: "Não. Chinesa/japonesa é ÁSIA. A latina é INDÍGENA + AFRICANA + EUROPEIA (ibérica)." },
    ],
    falaFinal: "4 acertos = geógrafo latino-americano.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil faz fronteira com quase todos os países da América do Sul. Acenda os 3 estados brasileiros que fazem fronteira com a ARGENTINA (nosso principal parceiro no Mercosul).",
    instrucao: "Acenda os estados fronteiriços com a Argentina",
    missao: {
      tipo: "selecionar",
      siglas: ["PR", "SC", "RS"],
      pergunta: "Quais estados fazem fronteira com a Argentina?",
    },
    falaFinal: "Paraná, Santa Catarina e Rio Grande do Sul. A porta brasileira do Mercosul.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 marcos da América Latina no tempo.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "inca", emoji: "🏛️", rotulo: "1. Império Inca no auge (1450)",
        descricao: "Machu Picchu construído nos Andes.", fotoUrl: andes },
      { id: "col", emoji: "⚔️", rotulo: "2. Conquista espanhola (1521)",
        descricao: "Cortés derrota os astecas. Início do domínio ibérico." },
      { id: "ind", emoji: "🎖️", rotulo: "3. Independências (1810–1825)",
        descricao: "Bolívar, San Martín, D. Pedro I libertam o continente." },
      { id: "urb", emoji: "🏘️", rotulo: "4. Grande urbanização (1950–2000)",
        descricao: "Êxodo rural. Cidades explodem. Nascem as megacidades.", fotoUrl: favela },
      { id: "merc", emoji: "🤝", rotulo: "5. Mercosul (1991)",
        descricao: "Brasil, Argentina, Uruguai, Paraguai criam o bloco.", fotoUrl: mercosul },
    ],
    ordemCerta: ["inca", "col", "ind", "urb", "merc"],
    feedbackAcerto: "Perfeito! 500 anos de América Latina em ordem.",
    feedbackErro: "Comece por Inca (1450). Depois conquista, independência, urbanização, Mercosul.",
    falaFinal: "5 marcos = a história da América Latina.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 2 — América Latina",
    paragrafos: [
      { id: "p1",
        texto: "A CORDILHEIRA DOS ANDES atravessa 7 países da América do Sul com 7.240 km de extensão. É o ACONCÁGUA (6.960 m) o pico mais alto do continente.",
        chaves: ["CORDILHEIRA DOS ANDES", "ACONCÁGUA"],
        definicoes: {
          "CORDILHEIRA DOS ANDES": "Maior cadeia de montanhas do mundo em extensão. Corta Venezuela, Colômbia, Equador, Peru, Bolívia, Chile e Argentina.",
          "ACONCÁGUA": "Pico mais alto da América (6.960 m), localizado na Argentina, perto da fronteira com o Chile.",
        },
        fotoUrl: andes },
      { id: "p2",
        texto: "A América Latina tem URBANIZAÇÃO de 82% da população. Isso gerou FAVELAS gigantes — 20% dos habitantes vivem em assentamentos informais.",
        chaves: ["URBANIZAÇÃO", "FAVELAS"],
        definicoes: {
          "URBANIZAÇÃO": "Processo em que a população migra do campo para a cidade. Na América Latina foi rápido e desigual (1950–2000).",
          "FAVELAS": "Assentamentos informais em morros, mangues ou periferias. Rocinha (RJ), Villa 31 (Buenos Aires), Ciudad Neza (México).",
        },
        fotoUrl: favela },
      { id: "p3",
        texto: "O MERCOSUL (1991) integra BRASIL, ARGENTINA, URUGUAI e PARAGUAI. Permite livre circulação de pessoas e mercadorias entre os 4 países.",
        chaves: ["MERCOSUL"],
        definicoes: {
          "MERCOSUL": "Mercado Comum do Sul (1991). Bloco econômico da América do Sul com 260 milhões de habitantes. Sede em Montevidéu (Uruguai).",
        },
        fotoUrl: mercosul },
      { id: "p4",
        texto: "A cultura latino-americana é MESTIÇA — mistura raízes INDÍGENAS, AFRICANAS e IBÉRICAS. Aparece na música (samba, mariachi, cumbia), religião e comida.",
        chaves: ["MESTIÇA", "INDÍGENAS", "IBÉRICAS"],
        definicoes: {
          "MESTIÇA": "Cultura formada pela mistura de povos diferentes. Na América Latina, indígenas + africanos + europeus.",
          "INDÍGENAS": "Povos originários das Américas: astecas (México), maias (América Central), incas (Andes), tupis-guaranis (Brasil).",
          "IBÉRICAS": "Cultura dos povos da Península Ibérica (Portugal e Espanha) que colonizaram a América Latina.",
        },
        fotoUrl: cultura },
    ],
    falaFinal: "Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "andes", emoji: "", titulo: "Andes", cor: "from-slate-800 to-slate-900" },
      { id: "acon", emoji: "", titulo: "Aconcágua", cor: "from-slate-800 to-slate-900" },
      { id: "fav", emoji: "", titulo: "Favelas", cor: "from-slate-800 to-slate-900" },
      { id: "merc", emoji: "", titulo: "Mercosul", cor: "from-slate-800 to-slate-900" },
      { id: "mest", emoji: "", titulo: "Mestiçagem", cor: "from-slate-800 to-slate-900" },
      { id: "lp", emoji: "", titulo: "La Paz", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Cadeia de montanhas de 7.240 km atravessando 7 países sul-americanos.", cards, correta: "andes",
          feedbackAcerto: "Isso. 7.240 km = ANDES.", feedbackErro: "É a Cordilheira dos ANDES." },
        { id: "r2", pergunta: "Pico mais alto da América, 6.960 m, na Argentina.", cards, correta: "acon",
          feedbackAcerto: "Isso. 6.960 m = ACONCÁGUA.", feedbackErro: "É o ACONCÁGUA. Aconcágua > Kilimanjaro > Mont Blanc." },
        { id: "r3", pergunta: "Assentamentos informais em morros e periferias das cidades latinas.", cards, correta: "fav",
          feedbackAcerto: "Isso. Assentamentos informais = FAVELAS.", feedbackErro: "São as FAVELAS. 20% da população latina mora nelas." },
        { id: "r4", pergunta: "Bloco econômico de 1991 formado por Brasil, Argentina, Uruguai e Paraguai.", cards, correta: "merc",
          feedbackAcerto: "Isso. 1991 + Cone Sul = MERCOSUL.", feedbackErro: "É o MERCOSUL. Sede em Montevidéu." },
        { id: "r5", pergunta: "Mistura de povos indígenas, africanos e europeus que define a cultura latina.", cards, correta: "mest",
          feedbackAcerto: "Isso. 3 matrizes = MESTIÇAGEM.", feedbackErro: "É a MESTIÇAGEM. Samba, cumbia, mariachi são frutos dela." },
        { id: "r6", pergunta: "Capital administrativa mais alta do mundo, a 3.640 m de altitude, na Bolívia.", cards, correta: "lp",
          feedbackAcerto: "Isso. 3.640 m + Bolívia = LA PAZ.", feedbackErro: "É LA PAZ (Bolívia). Cidade mais alta que serve como sede de governo." },
      ],
      falaFinal: "6 acertos = mestre latino-americano.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da América Latina: quem fala o quê?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "esp", rotulo: "Espanhol (~60%)", emoji: "🇪🇸", percentual: 60, cor: "#dc2626",
        descricao: "18 países falam espanhol: México, Argentina, Colômbia, Peru, Venezuela, Chile e mais.",
        exemplos: ["🇲🇽 México", "🇦🇷 Argentina", "🇨🇴 Colômbia"] },
      { id: "por", rotulo: "Português (~35%)", emoji: "🇧🇷", percentual: 35, cor: "#059669",
        descricao: "Só o Brasil fala português — mas com 215 milhões de habitantes é o país mais populoso do subcontinente.",
        exemplos: ["🇧🇷 Brasil (215 mi)"] },
    ],
    falaFinal: "18 países hispânicos, 1 lusófono. Mas o Brasil sozinho equivale a 35% da América Latina.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Explorador Latino.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Extensão da Cordilheira dos Andes:",
        opcoes: [
          { id: "a", texto: "1.000 km", correta: false },
          { id: "b", texto: "7.240 km — a maior do mundo", correta: true },
          { id: "c", texto: "20.000 km", correta: false },
        ],
        feedbackAcerto: "Isso! 7.240 km — recordista mundial em extensão.",
        feedbackErro: "É 7.240 km. Nem tão pequena, nem tão gigante — a maior do mundo em extensão." },
      { id: "av2", pergunta: "Membros plenos do Mercosul:",
        opcoes: [
          { id: "a", texto: "Brasil, Argentina, Uruguai, Paraguai", correta: true },
          { id: "b", texto: "México, EUA, Canadá", correta: false },
          { id: "c", texto: "Chile, Peru, Colômbia", correta: false },
        ],
        feedbackAcerto: "Isso! BR + AR + UY + PY.",
        feedbackErro: "México/EUA/Canadá = USMCA. Chile/Peru/Colômbia = Aliança do Pacífico. Mercosul = BR/AR/UY/PY." },
      { id: "av3", pergunta: "Cultura latino-americana é MESTIÇA porque mistura:",
        opcoes: [
          { id: "a", texto: "Indígena + africana + europeia", correta: true },
          { id: "b", texto: "Só espanhola", correta: false },
          { id: "c", texto: "Chinesa + japonesa", correta: false },
        ],
        feedbackAcerto: "Isso! Três matrizes: indígena + africana + ibérica.",
        feedbackErro: "Três matrizes: INDÍGENA + AFRICANA + IBÉRICA (portuguesa/espanhola)." },
    ],
    selo: { nome: "Explorador Latino", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🌎", cor: "from-emerald-800 to-teal-950" },
    falaFinal: "Insígnia conquistada! Você conhece a alma da América Latina.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Explorador Latino" },
};
