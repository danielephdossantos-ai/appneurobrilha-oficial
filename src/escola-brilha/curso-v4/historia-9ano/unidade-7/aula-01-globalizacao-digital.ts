import type { AulaGeoV1 } from "../../types";
import imgDig from "@/assets/historia-9ano/u7-era-digital.jpg";
import imgClima from "@/assets/historia-9ano/u7-clima-global.jpg";

import imgSmart from "@/assets/historia-9ano/u7-smartphone-jovem.jpg";
import imgNyc from "@/assets/historia-9ano/u7-nova-iorque-global.jpg";
import imgFavela from "@/assets/historia-9ano/u7-favela-cidade.jpg";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-globalizacao-digital",
  titulo: "Globalização, Era Digital e o Mundo de Hoje",
  iconeTrilha: "🌐",
  bncc: ["EF09HI17", "EF09HI18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgDig,
    imagemDestaqueUrl: imgClima,
    aurora:
      "Fim do século XX. A URSS cai (1991), a INTERNET vira comercial (1995), o Google nasce (1998), o iPhone chega (2007), redes sociais explodem. O mundo se torna GLOBALIZADO: mercadorias, informação e pessoas circulam como nunca. Ao mesmo tempo: mudanças climáticas, pandemia (2020), guerras (Ucrânia, Oriente Médio), IA generativa. Você vive o momento mais conectado — e mais complexo — da história humana.",
    falaFinal: "Nó 7: o presente que a Teia toda ajudou a tecer.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que mais define o mundo em que vocês nasceram?",
    pergunta: "Qual é a marca central do mundo de HOJE?",
    fotoUrl: imgSmart,
    opcoes: [
      { id: "gl", titulo: "GLOBALIZAÇÃO + ERA DIGITAL", subtitulo: "tudo interligado por redes e algoritmos", emoji: "🌐", cor: "from-cyan-800 to-slate-950" },
      { id: "is", titulo: "ISOLAMENTO ENTRE NAÇÕES", subtitulo: "cada país por si", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "gl",
    feedbackAcerto: "Correto. Você provavelmente veste uma roupa costurada em Bangladesh, num celular montado na China, com aplicativo dos EUA, ouvindo música coreana. Isso é globalização + era digital.",
    feedbackErro: "Não. O mundo NUNCA foi tão interconectado. Um vírus em Wuhan em 2020 parou o planeta em semanas.",
    falaFinal: "Globalização é o pano de fundo do século XXI.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave do mundo contemporâneo.",
    instrucao: "",
    cadernos: [
      { id: "gl", capa: "Globalização", emoji: "🌍", cor: "from-cyan-700 to-slate-900", fotoUrl: imgNyc, conteudo: "GLOBALIZAÇÃO é o processo de integração mundial de economias, culturas, comunicações e políticas, acelerado pela internet e pelo comércio internacional. Multinacionais operam em dezenas de países ao mesmo tempo.", exemplo: "Exemplo: um iPhone é DESENHADO nos EUA, seus chips vêm de TAIWAN, montagem na CHINA, materiais raros da ÁFRICA. Todo produto tem uma cadeia global." },
      { id: "int", capa: "Internet e Redes Sociais", emoji: "📱", cor: "from-teal-700 to-slate-900", fotoUrl: imgFavela, conteudo: "INTERNET (comercial desde 1995) e REDES SOCIAIS (Facebook 2004, YouTube 2005, Instagram 2010, TikTok 2016) mudaram como as pessoas se informam, trabalham, se relacionam e fazem política. Também trouxeram fake news e vício em telas.", exemplo: "Exemplo: a Primavera Árabe (2011) organizou protestos por Facebook e Twitter. Em 2020 a pandemia jogou o mundo inteiro no ensino remoto." },
      { id: "cl", capa: "Crise Climática", emoji: "🌡️", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "CRISE CLIMÁTICA é o aquecimento do planeta causado por queima de combustíveis fósseis e desmatamento. Consequências: derretimento de geleiras, secas, enchentes, incêndios. Acordos como o de PARIS (2015) tentam limitar o aumento a 1,5°C.", exemplo: "Exemplo: 2023 foi o ano mais quente já registrado. Greta Thunberg, com 16 anos, mobilizou milhões de jovens em greves globais pelo clima." },
      { id: "ia", capa: "Inteligência Artificial", emoji: "🤖", cor: "from-slate-700 to-slate-900", fotoUrl: imgClima, conteudo: "IA (Inteligência Artificial) generativa (ChatGPT, 2022) revolucionou trabalho, ensino e criação. Redige textos, escreve códigos, cria imagens e vídeos. Levanta debates sobre empregos, privacidade e ética.", exemplo: "Exemplo: em 2023–24 estudantes do mundo todo passaram a usar IA pra fazer temas. Governos discutem como REGULAR — sem sufocar inovação nem permitir abuso." },
    ],
    falaFinal: "Globalização + Internet + Crise climática + IA. Coordenadas do presente.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três grandes desafios do mundo de hoje. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgSmart,
    pontos: [
      { id: "des", x: 25, y: 30, emoji: "🌡️", cor: "from-amber-700 to-slate-900", fotoUrl: imgNyc, titulo: "MUDANÇAS CLIMÁTICAS", texto: "Aquecimento global, desmatamento, poluição. Ameaça direta às próximas gerações. Metas do Acordo de Paris (2015) e da COP30 (Belém, 2025)." },
      { id: "des2", x: 55, y: 55, emoji: "💰", cor: "from-cyan-700 to-slate-900", fotoUrl: imgFavela, titulo: "DESIGUALDADE", texto: "Os 1% mais ricos concentram quase metade da riqueza do mundo. No Brasil, os 10% mais ricos ficam com mais da metade da renda. Debate central do século XXI." },
      { id: "des3", x: 80, y: 40, emoji: "🤖", cor: "from-slate-700 to-slate-900", fotoUrl: imgDig, titulo: "AUTOMAÇÃO E IA", texto: "Máquinas substituem trabalhos manuais e agora também intelectuais. Repensar educação, trabalho e renda vira urgência." },
    ],
    falaFinal: "Clima + Desigualdade + IA. Três frentes que definem 2026 em diante.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quando a INTERNET se tornou comercial (aberta ao público em geral)?", fotoUrl: imgClima, cards: [{ id: "95", emoji: "🌐", titulo: "Anos 1990", cor: "from-teal-600 to-slate-900" }, { id: "50", emoji: "📻", titulo: "Anos 1950", cor: "from-amber-600 to-slate-900" }, { id: "20", emoji: "📱", titulo: "Anos 2020", cor: "from-slate-600 to-slate-900" }], correta: "95", feedbackAcerto: "Correto. Meados dos anos 1990 (1995 é referência).", feedbackErro: "É anos 1990. Antes existia, mas só em universidades." },
      { id: "q2", pergunta: "O Acordo de PARIS (2015) é sobre:", fotoUrl: imgSmart, cards: [{ id: "cl", emoji: "🌡️", titulo: "Combate ao aquecimento global", cor: "from-teal-600 to-slate-900" }, { id: "gu", emoji: "⚔️", titulo: "Fim de uma guerra", cor: "from-amber-600 to-slate-900" }, { id: "co", emoji: "💰", titulo: "Comércio internacional", cor: "from-slate-600 to-slate-900" }], correta: "cl", feedbackAcerto: "Correto. Meta de limitar o aquecimento a 1,5°C.", feedbackErro: "É sobre CLIMA — limitar o aquecimento global." },
      { id: "q3", pergunta: "A pandemia da COVID-19 começou em:", fotoUrl: imgNyc, cards: [{ id: "20", emoji: "😷", titulo: "2020", cor: "from-teal-600 to-slate-900" }, { id: "01", emoji: "📱", titulo: "2001", cor: "from-amber-600 to-slate-900" }, { id: "10", emoji: "🌐", titulo: "2010", cor: "from-slate-600 to-slate-900" }], correta: "20", feedbackAcerto: "Correto. Início em Wuhan (China) no fim de 2019, pandemia declarada em março de 2020.", feedbackErro: "É 2020. 2001 = atentado ao WTC; 2010 = Primavera Árabe." },
    ],
    falaFinal: "Você já mapeia as marcas do presente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois motores do mundo contemporâneo.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "int", rotulo: "Integração global", emoji: "🌍", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Comércio mundial (OMC), redes sociais, streaming, migrações, saúde global. Coisas viajam mais que pessoas — e pessoas viajam muito." },
      { id: "cri", rotulo: "Crises compartilhadas", emoji: "🌡️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Aquecimento global, pandemias, guerras (Ucrânia, Oriente Médio), fake news, desigualdade. Problemas de um país viram problema de todos." },
    ],
    falaFinal: "Integração e crises andam juntas. Solução do século XXI = cooperação global.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos do mundo contemporâneo.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1991–2025",
    paradas: [
      { id: "urss", emoji: "☭", rotulo: "1. Fim da URSS (1991)", fotoUrl: imgDig, descricao: "Fim da Guerra Fria." },
      { id: "ip", emoji: "📱", rotulo: "2. iPhone (2007)", fotoUrl: imgClima, descricao: "Redes sociais viram cotidiano." },
      { id: "co", emoji: "😷", rotulo: "3. Pandemia COVID (2020)", fotoUrl: imgSmart, descricao: "Mundo parado por semanas." },
      { id: "ia", emoji: "🤖", rotulo: "4. IA generativa (2022–25)", fotoUrl: imgNyc, descricao: "ChatGPT e afins mudam trabalho e escola." },
    ],
    ordemCerta: ["urss", "ip", "co", "ia"],
    feedbackAcerto: "Perfeito. 1991 → 2007 → 2020 → 2025. A Teia chega em você.",
    feedbackErro: "Comece pelo fim da URSS (1991).",
    falaFinal: "4 marcos. 34 anos. A vida que vocês conhecem.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 7 e final da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 7 — Globalização e o Mundo de Hoje",
    paragrafos: [
      { id: "p1", texto: "Com o fim da URSS em 1991, o mundo passou de bipolar (EUA × URSS) para uma nova ordem: MULTIPOLAR, com EUA, China, União Europeia, Rússia e potências emergentes (Brasil, Índia). A GLOBALIZAÇÃO acelerou — mercadorias, capital, informação e pessoas atravessam fronteiras em velocidade recorde.", chaves: ["Globalização"], definicoes: { Globalização: "Processo de integração econômica, cultural, política e tecnológica entre países em escala mundial." }, fotoUrl: imgFavela },
      { id: "p2", texto: "A INTERNET (comercial desde 1995) revolucionou tudo. O iPhone (2007) e as REDES SOCIAIS (Facebook 2004, Instagram 2010, TikTok 2016) mudaram informação, política e relacionamentos. Bom lado: acesso a conhecimento sem precedente. Ruim: fake news, vício em telas, polarização.", chaves: ["Redes Sociais"], definicoes: { "Redes Sociais": "Plataformas digitais (Facebook, Instagram, TikTok, X) onde pessoas produzem e consomem conteúdo, moldando opinião pública." }, fotoUrl: imgDig },
      { id: "p3", texto: "A CRISE CLIMÁTICA virou desafio central. O planeta esquentou cerca de 1,2°C desde 1900. Metas do Acordo de PARIS (2015) e da COP30 (Belém, 2025) buscam limitar a 1,5°C. Jovens como Greta Thunberg mobilizam greves pelo clima em dezenas de países.", chaves: ["Crise Climática"], definicoes: { "Crise Climática": "Aquecimento global causado pela emissão de gases de efeito estufa (queima de combustíveis fósseis e desmatamento)." }, fotoUrl: imgClima },
      { id: "p4", texto: "Em 2020 uma PANDEMIA (COVID-19) parou o mundo por meses. Em 2022 a Rússia invadiu a Ucrânia. A INTELIGÊNCIA ARTIFICIAL (ChatGPT, 2022) mudou trabalho e educação. Vocês vivem um mundo que exige cooperação global e pensamento crítico. A Teia começou em 1914 — chega em vocês, e vocês vão tecer o próximo pedaço.", chaves: ["Pandemia", "IA"], definicoes: { Pandemia: "Epidemia que se espalha por vários países — COVID-19 (2020) causou milhões de mortes e mudou o cotidiano mundial.", IA: "Inteligência Artificial: sistemas que aprendem e realizam tarefas antes exclusivas de humanos." }, fotoUrl: imgSmart },
    ],
    falaFinal: "Leitura concluída. A Teia do Tempo Presente agora está nas suas mãos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "dig", emoji: "📱", rotulo: "Era Digital" },
      { id: "cl", emoji: "🌡️", rotulo: "Crise Climática" },
      { id: "gl", emoji: "🌍", rotulo: "Globalização" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "TikTok", emoji: "🎵", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Rede social (2016)", emoji: "📱", cor: "from-teal-600 to-slate-900" }, contexto: "Vídeos curtos.", pecaCertaId: "dig", feedbackAcerto: "Correto. TikTok = Era Digital.", feedbackErro: "É Era Digital." },
      { id: "r2", municipioA: { nome: "Acordo de Paris (2015)", emoji: "🌡️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Meta de 1,5°C", emoji: "🌍", cor: "from-amber-600 to-slate-900" }, contexto: "Sobre aquecimento.", pecaCertaId: "cl", feedbackAcerto: "Correto. Paris = Crise Climática.", feedbackErro: "É Crise Climática." },
      { id: "r3", municipioA: { nome: "OMC", emoji: "💰", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Comércio mundial", emoji: "🚢", cor: "from-cyan-600 to-slate-900" }, contexto: "Regula trocas entre países.", pecaCertaId: "gl", feedbackAcerto: "Correto. OMC = Globalização.", feedbackErro: "É Globalização." },
      { id: "r4", municipioA: { nome: "ChatGPT (2022)", emoji: "🤖", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "IA generativa", emoji: "💬", cor: "from-teal-600 to-slate-900" }, contexto: "Mudou escola e trabalho.", pecaCertaId: "dig", feedbackAcerto: "Correto. ChatGPT = Era Digital.", feedbackErro: "É Era Digital." },
      { id: "r5", municipioA: { nome: "Greta Thunberg", emoji: "🌱", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Greves pelo clima", emoji: "✊", cor: "from-amber-600 to-slate-900" }, contexto: "Ativista sueca.", pecaCertaId: "cl", feedbackAcerto: "Correto. Greta = Crise Climática.", feedbackErro: "É Crise Climática." },
      { id: "r6", municipioA: { nome: "Multinacional", emoji: "🏢", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Empresa em vários países", emoji: "🌐", cor: "from-cyan-600 to-slate-900" }, contexto: "Ex.: Coca-Cola, Samsung.", pecaCertaId: "gl", feedbackAcerto: "Correto. Multinacional = Globalização.", feedbackErro: "É Globalização." },
    ],
    falaFinal: "6 rodadas. Você já lê o mundo em três eixos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Distribuição da riqueza mundial em 2024.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgNyc,
    fatias: [
      { id: "ri", rotulo: "1% mais ricos (~45%)", emoji: "💰", percentual: 45, cor: "#b45309", descricao: "O 1% mais rico da humanidade concentra cerca de 45% da riqueza global. Um dado central do debate sobre desigualdade.", exemplos: [] },
      { id: "re", rotulo: "99% restantes (~55%)", emoji: "🌍", percentual: 55, cor: "#0f766e", descricao: "Os 99% restantes dividem a outra metade. A metade mais pobre tem menos de 2% da riqueza mundial.", exemplos: [] },
    ],
    falaFinal: "1% × 99%. Um dos grandes debates do século XXI.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra fechar a Teia.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFavela,
    perguntas: [
      { id: "av1", pergunta: "GLOBALIZAÇÃO é:", opcoes: [{ id: "a", texto: "Isolamento entre países.", correta: false }, { id: "b", texto: "Integração mundial de economias, culturas e comunicações.", correta: true }, { id: "c", texto: "Fim do comércio internacional.", correta: false }], feedbackAcerto: "Correto. Mundo interligado como nunca.", feedbackErro: "É integração mundial." },
      { id: "av2", pergunta: "O Acordo de Paris (2015) trata de:", opcoes: [{ id: "a", texto: "Guerra na Ucrânia.", correta: false }, { id: "b", texto: "Limite ao aquecimento global.", correta: true }, { id: "c", texto: "Fim da URSS.", correta: false }], feedbackAcerto: "Correto. Meta de 1,5°C.", feedbackErro: "É sobre aquecimento global." },
      { id: "av3", pergunta: "A IA generativa (ChatGPT) surgiu por volta de:", opcoes: [{ id: "a", texto: "1995.", correta: false }, { id: "b", texto: "2022.", correta: true }, { id: "c", texto: "1969.", correta: false }], feedbackAcerto: "Correto. ChatGPT foi lançado em novembro de 2022.", feedbackErro: "É 2022 (ChatGPT). 1995 = internet comercial; 1969 = Lua." },
    ],
    selo: { nome: "Nó 7 da Teia — MESTRE DO TEMPO PRESENTE", subtitulo: "Fecha a Teia do 9º Ano", emoji: "🌐", cor: "from-cyan-500 to-slate-900", fotoUrl: imgDig },
    falaFinal: "TEIA COMPLETA. Do tiro em Sarajevo (1914) ao ChatGPT (2022). O próximo capítulo é seu.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Mestre do Tempo Presente" },
};
