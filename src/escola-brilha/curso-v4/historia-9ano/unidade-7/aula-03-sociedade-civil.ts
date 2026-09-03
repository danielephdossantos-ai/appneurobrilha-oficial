import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula03: AulaGeoV1 = {
  slug: "aula-03-sociedade-civil",
  titulo: "Sociedade Civil em Ação: Movimentos, ONGs e Redes",
  iconeTrilha: "✊",
  bncc: ["EF09HI25"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgSmart,
    imagemDestaqueUrl: imgFavela,
    aurora:
      "Depois de 1989, com a democracia consolidada, a sociedade civil brasileira ganhou protagonismo: movimentos sociais organizados (MST, movimento negro, movimento feminista, LGBTQIA+), ONGs atuando em direitos humanos e meio ambiente, e as redes sociais permitindo mobilizações rápidas — das Jornadas de Junho de 2013 ao ativismo climático liderado por jovens. Cidadãos comuns, organizados, passaram a pressionar o Estado e mudar leis.",
    falaFinal: "Nó 7: quando a sociedade organizada vira força de transformação.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Como a sociedade civil consegue pressionar governos a mudar leis?",
    pergunta: "Qual é a principal forma de a sociedade civil influenciar políticas públicas?",
    fotoUrl: imgSmart,
    opcoes: [
      { id: "org", titulo: "ORGANIZAÇÃO COLETIVA", subtitulo: "movimentos sociais, ONGs e redes de pressão", emoji: "✊", cor: "from-rose-800 to-slate-950" },
      { id: "esp", titulo: "ESPERAR O GOVERNO DECIDIR SOZINHO", subtitulo: "sem participação popular", emoji: "❌", cor: "from-amber-900 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "org",
    feedbackAcerto: "Correto. A Lei Maria da Penha (2006), o Estatuto da Igualdade Racial (2010) e o Marco Civil da Internet (2014) só existem por pressão organizada da sociedade civil.",
    feedbackErro: "Não. Historicamente, direitos avançam quando grupos se organizam e pressionam — não por concessão espontânea do poder público.",
    falaFinal: "Sociedade organizada é motor de mudança social.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave do ativismo pós-1989.",
    instrucao: "",
    cadernos: [
      { id: "ong", capa: "ONG", emoji: "🤲", cor: "from-rose-700 to-slate-900", fotoUrl: imgFavela, conteudo: "ONG (Organização Não Governamental) é uma entidade sem fins lucrativos, independente do Estado, que atua em causas como direitos humanos, meio ambiente e educação. No Brasil, cresceram muito após a Constituição de 1988.", exemplo: "Exemplo: a Anistia Internacional e a ONG brasileira SOS Mata Atlântica monitoram violações de direitos e desmatamento, respectivamente." },
      { id: "mst", capa: "Movimentos Sociais", emoji: "✊", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "MOVIMENTOS SOCIAIS são grupos organizados que lutam por uma causa comum. O MST (Movimento dos Trabalhadores Rurais Sem Terra, fundado em 1984) luta pela reforma agrária; o movimento negro e o movimento feminista lutam por igualdade racial e de gênero.", exemplo: "Exemplo: em 2015 e 2016, coletivos de estudantes secundaristas ocuparam mais de 200 escolas em São Paulo contra a reorganização escolar do governo estadual." },
      { id: "junho", capa: "Jornadas de Junho (2013)", emoji: "📢", cor: "from-cyan-700 to-slate-900", fotoUrl: imgNyc, conteudo: "As JORNADAS DE JUNHO de 2013 começaram como protesto contra o aumento da passagem de ônibus em São Paulo (organizado pelo Movimento Passe Livre) e se espalharam pelo Brasil, reunindo milhões de pessoas com pautas contra corrupção e por melhores serviços públicos.", exemplo: "Exemplo: em 20 de junho de 2013, mais de 1 milhão de pessoas protestaram em diversas cidades brasileiras no mesmo dia." },
      { id: "rede", capa: "Ativismo em Rede", emoji: "📱", cor: "from-slate-700 to-slate-900", fotoUrl: imgClima, conteudo: "ATIVISMO EM REDE é a mobilização social organizada por redes sociais e aplicativos de mensagens, que permite convocar protestos, denunciar violações e pressionar autoridades em tempo real, com custo baixo e alcance nacional ou global.", exemplo: "Exemplo: as greves globais pelo clima lideradas por jovens desde 2018, inspiradas pela ativista sueca Greta Thunberg, mobilizaram estudantes em mais de 150 países usando redes sociais." },
    ],
    falaFinal: "ONGs + Movimentos sociais + Jornadas de Junho + Ativismo em rede. Coordenadas do protagonismo civil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três exemplos de protagonismo civil. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFavela,
    pontos: [
      { id: "p1", x: 20, y: 30, emoji: "✊", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, titulo: "MST E REFORMA AGRÁRIA", texto: "Fundado em 1984, o MST organiza ocupações de terras improdutivas e pressiona por reforma agrária, sendo um dos maiores movimentos sociais da América Latina." },
      { id: "p2", x: 52, y: 55, emoji: "📢", cor: "from-cyan-700 to-slate-900", fotoUrl: imgNyc, titulo: "JORNADAS DE JUNHO (2013)", texto: "Protestos que começaram contra o aumento da tarifa de ônibus e viraram o maior movimento de rua do Brasil desde as Diretas Já, com pautas de saúde, educação e combate à corrupção." },
      { id: "p3", x: 80, y: 42, emoji: "🌱", cor: "from-emerald-700 to-slate-900", fotoUrl: imgSmart, titulo: "ATIVISMO CLIMÁTICO JOVEM", texto: "A partir de 2018, jovens de todo o mundo (inspirados por Greta Thunberg) organizaram greves escolares pelo clima, pressionando governos por políticas ambientais mais firmes." },
    ],
    falaFinal: "Terra, transporte e clima. Causas diferentes, mesma força: a organização coletiva.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O MST foi fundado em que ano e com qual objetivo?", fotoUrl: imgFavela, cards: [{ id: "mst", emoji: "✊", titulo: "1984, reforma agrária", cor: "from-amber-600 to-slate-900" }, { id: "err1", emoji: "🏭", titulo: "1994, privatizações", cor: "from-emerald-600 to-slate-900" }, { id: "err2", emoji: "📱", titulo: "2013, transporte", cor: "from-cyan-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "mst", feedbackAcerto: "Correto. O MST foi fundado em 1984 e luta pela reforma agrária.", feedbackErro: "O MST foi fundado em 1984 com foco na reforma agrária." },
      { id: "q2", pergunta: "O que motivou as Jornadas de Junho de 2013?", fotoUrl: imgNyc, cards: [{ id: "pas", emoji: "🚌", titulo: "Aumento da passagem de ônibus", cor: "from-cyan-600 to-slate-900" }, { id: "err1", emoji: "💵", titulo: "Fim do Plano Real", cor: "from-amber-600 to-slate-900" }, { id: "err2", emoji: "🌡️", titulo: "Acordo de Paris", cor: "from-emerald-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "pas", feedbackAcerto: "Correto. Organizado inicialmente pelo Movimento Passe Livre em São Paulo.", feedbackErro: "Foi o aumento da tarifa de ônibus que iniciou os protestos." },
      { id: "q3", pergunta: "Quem é a ativista que inspirou as greves globais pelo clima desde 2018?", fotoUrl: imgClima, cards: [{ id: "greta", emoji: "🌱", titulo: "Greta Thunberg", cor: "from-emerald-600 to-slate-900" }, { id: "err1", emoji: "💵", titulo: "Dilma Rousseff", cor: "from-amber-600 to-slate-900" }, { id: "err2", emoji: "📱", titulo: "Malala Yousafzai", cor: "from-cyan-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "greta", feedbackAcerto: "Correto. A sueca Greta Thunberg começou suas greves escolares em 2018.", feedbackErro: "Foi Greta Thunberg, ativista sueca do clima." },
    ],
    falaFinal: "Você já reconhece os principais protagonismos civis do Brasil e do mundo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas frentes de ação da sociedade civil.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgNyc,
    camadas: [
      { id: "rua", rotulo: "Mobilização de Rua", emoji: "📢", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Protestos, ocupações e greves organizados presencialmente: Jornadas de Junho (2013), ocupações de escolas (2015-16), marchas por direitos das mulheres e da população negra." },
      { id: "digital", rotulo: "Ativismo Digital", emoji: "📱", cor: "from-rose-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Campanhas online, petições, denúncias em redes sociais e hashtags que viralizam causas, como o #MeToo (2017) e as greves climáticas convocadas por redes globais." },
    ],
    falaFinal: "Rua e tela: dois espaços que se reforçam mutuamente na luta por direitos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos do protagonismo civil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1984–2019",
    paradas: [
      { id: "mst", emoji: "✊", rotulo: "1. Fundação do MST (1984)", fotoUrl: imgFavela, descricao: "Luta pela reforma agrária." },
      { id: "penha", emoji: "⚖️", rotulo: "2. Lei Maria da Penha (2006)", fotoUrl: imgDig, descricao: "Fruto de pressão de movimentos de mulheres." },
      { id: "junho", emoji: "📢", rotulo: "3. Jornadas de Junho (2013)", fotoUrl: imgNyc, descricao: "Maior onda de protestos desde as Diretas Já." },
      { id: "greta", emoji: "🌱", rotulo: "4. Greves climáticas jovens (2018-19)", fotoUrl: imgClima, descricao: "Ativismo global liderado por estudantes." },
    ],
    ordemCerta: ["mst", "penha", "junho", "greta"],
    feedbackAcerto: "Perfeito. 1984 → 2006 → 2013 → 2019. A sociedade civil crescendo em força e alcance.",
    feedbackErro: "Comece pela fundação do MST (1984).",
    falaFinal: "4 marcos. Décadas de organização popular.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leitura sobre o protagonismo da sociedade civil. Toque nos termos técnicos.",
    tituloLivro: "✊ A Teia da Cidadania Ativa",
    subtitulo: "Página 7 — Sociedade Civil Após 1989",
    paragrafos: [
      { id: "p1", texto: "Com a redemocratização, a sociedade civil brasileira se organizou em MOVIMENTOS SOCIAIS cada vez mais fortes. O MST, fundado em 1984, tornou-se um dos maiores movimentos sociais da América Latina, promovendo ocupações de terras improdutivas em nome da reforma agrária, prevista na Constituição de 1988 mas pouco implementada.", chaves: ["Movimentos Sociais"], definicoes: { "Movimentos Sociais": "Grupos organizados de cidadãos que se mobilizam coletivamente por uma causa comum, buscando mudanças sociais ou políticas." }, fotoUrl: imgFavela },
      { id: "p2", texto: "As ONGs também ganharam força, atuando em áreas como direitos humanos, meio ambiente e educação. A pressão de movimentos feministas resultou na LEI MARIA DA PENHA (2006), que criou mecanismos para coibir a violência doméstica contra a mulher — uma das leis mais avançadas do mundo nesse tema.", chaves: ["Lei Maria da Penha"], definicoes: { "Lei Maria da Penha": "Lei nº 11.340/2006 que cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher no Brasil." }, fotoUrl: imgDig },
      { id: "p3", texto: "Em junho de 2013, as JORNADAS DE JUNHO mostraram a força da mobilização digital: um protesto local contra o aumento da passagem de ônibus, organizado pelo Movimento Passe Livre, viralizou nas redes sociais e levou milhões às ruas em todo o país, com pautas contra a corrupção e por serviços públicos de qualidade.", chaves: ["Jornadas de Junho"], definicoes: { "Jornadas de Junho": "Onda de protestos ocorrida no Brasil em junho de 2013, iniciada contra o aumento das tarifas de transporte público e ampliada para diversas pautas sociais." }, fotoUrl: imgNyc },
      { id: "p4", texto: "Desde 2018, o ATIVISMO CLIMÁTICO ganhou força entre os jovens, com greves escolares inspiradas pela sueca Greta Thunberg, mobilizando estudantes em mais de 150 países, incluindo o Brasil. Redes sociais tornaram-se ferramenta central para organizar protestos, denunciar violações de direitos e pressionar governos em tempo real.", chaves: ["Ativismo Climático"], definicoes: { "Ativismo Climático": "Mobilização social organizada em defesa de políticas de combate às mudanças climáticas e de proteção ambiental." }, fotoUrl: imgClima },
    ],
    falaFinal: "Leitura concluída. A sociedade civil organizada segue moldando o Brasil e o mundo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada movimento à sua principal causa.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "terra", emoji: "🌾", rotulo: "Reforma Agrária" },
      { id: "genero", emoji: "⚖️", rotulo: "Direitos das Mulheres" },
      { id: "clima", emoji: "🌱", rotulo: "Causa Climática" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "MST", emoji: "✊", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Ocupação de terras", emoji: "🌾", cor: "from-amber-600 to-slate-900" }, contexto: "Fundado em 1984.", pecaCertaId: "terra", feedbackAcerto: "Correto. MST = Reforma Agrária.", feedbackErro: "É Reforma Agrária." },
      { id: "r2", municipioA: { nome: "Lei Maria da Penha", emoji: "⚖️", cor: "from-rose-700 to-slate-900" }, municipioB: { nome: "2006", emoji: "🛡️", cor: "from-rose-600 to-slate-900" }, contexto: "Combate à violência doméstica.", pecaCertaId: "genero", feedbackAcerto: "Correto. Direitos das mulheres.", feedbackErro: "É Direitos das Mulheres." },
      { id: "r3", municipioA: { nome: "Greta Thunberg", emoji: "🌱", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Greves escolares", emoji: "✊", cor: "from-emerald-600 to-slate-900" }, contexto: "Desde 2018.", pecaCertaId: "clima", feedbackAcerto: "Correto. Causa Climática.", feedbackErro: "É Causa Climática." },
      { id: "r4", municipioA: { nome: "Marcha das Margaridas", emoji: "🌼", cor: "from-rose-700 to-slate-900" }, municipioB: { nome: "Trabalhadoras rurais", emoji: "👩‍🌾", cor: "from-rose-600 to-slate-900" }, contexto: "Desde 2000.", pecaCertaId: "genero", feedbackAcerto: "Correto. Direitos das mulheres rurais.", feedbackErro: "É Direitos das Mulheres." },
      { id: "r5", municipioA: { nome: "Acampamentos rurais", emoji: "⛺", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Pressão por assentamentos", emoji: "🏘️", cor: "from-amber-600 to-slate-900" }, contexto: "Estratégia do MST.", pecaCertaId: "terra", feedbackAcerto: "Correto. Reforma Agrária.", feedbackErro: "É Reforma Agrária." },
      { id: "r6", municipioA: { nome: "COP30 (Belém, 2025)", emoji: "🌎", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Pressão da sociedade civil", emoji: "📢", cor: "from-emerald-600 to-slate-900" }, contexto: "Conferência do clima da ONU.", pecaCertaId: "clima", feedbackAcerto: "Correto. Causa Climática.", feedbackErro: "É Causa Climática." },
    ],
    falaFinal: "6 rodadas. Você já reconhece as causas que movem a sociedade civil brasileira.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Formas de participação cívica dos jovens brasileiros hoje.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgSmart,
    fatias: [
      { id: "digital", rotulo: "Ativismo digital (~60%)", emoji: "📱", percentual: 60, cor: "#0f766e", descricao: "A maior parte da mobilização social entre jovens hoje acontece por redes sociais: assinatura de petições online, campanhas de conscientização e divulgação de causas.", exemplos: ["Petições online", "Hashtags de campanhas", "Vídeos de conscientização"] },
      { id: "presencial", rotulo: "Mobilização presencial (~40%)", emoji: "✊", percentual: 40, cor: "#b45309", descricao: "Parte significativa ainda ocorre de forma presencial: participação em protestos de rua, ocupações e voluntariado em ONGs e associações comunitárias.", exemplos: ["Protestos de rua", "Voluntariado em ONGs"] },
    ],
    falaFinal: "Digital e presencial se combinam na cidadania ativa de hoje.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre a sociedade civil.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFavela,
    perguntas: [
      { id: "av1", pergunta: "O MST luta principalmente por:", opcoes: [{ id: "a", texto: "Reforma agrária.", correta: true }, { id: "b", texto: "Privatização de terras.", correta: false }, { id: "c", texto: "Fim das eleições diretas.", correta: false }], feedbackAcerto: "Correto. Fundado em 1984 com esse objetivo.", feedbackErro: "O MST luta pela reforma agrária." },
      { id: "av2", pergunta: "As Jornadas de Junho de 2013 começaram por causa:", opcoes: [{ id: "a", texto: "Do aumento da tarifa de ônibus.", correta: true }, { id: "b", texto: "Da hiperinflação.", correta: false }, { id: "c", texto: "Do impeachment de Collor.", correta: false }], feedbackAcerto: "Correto. Organizado pelo Movimento Passe Livre em São Paulo.", feedbackErro: "Foi o aumento da tarifa de ônibus." },
      { id: "av3", pergunta: "A Lei Maria da Penha (2006) trata de:", opcoes: [{ id: "a", texto: "Reforma agrária.", correta: false }, { id: "b", texto: "Combate à violência doméstica contra a mulher.", correta: true }, { id: "c", texto: "Mudanças climáticas.", correta: false }], feedbackAcerto: "Correto. Resultado da pressão de movimentos feministas.", feedbackErro: "É sobre violência doméstica contra a mulher." },
    ],
    selo: { nome: "Nó 7 da Teia — VOZ DA CIDADANIA", subtitulo: "Fecha o eixo Sociedade Civil", emoji: "✊", cor: "from-rose-500 to-slate-900", fotoUrl: imgSmart },
    falaFinal: "Movimentos, ONGs e redes seguem transformando o Brasil. O próximo capítulo é seu.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Voz da Cidadania" },
};
