import type { AulaGeoV1 } from "../../types";
import imgNavio from "@/assets/historia-4ano/navio-vapor.jpg";
import imgMala from "@/assets/historia-4ano/mala-imigrante.jpg";
import imgMapa from "@/assets/historia-4ano/mapa-imigracao.jpg";
import imgFesta from "@/assets/historia-4ano/festa-uva.jpg";
import imgPassaporte from "@/assets/historia-4ano/passaporte-antigo.jpg";

/**
 * História · 4º Ano · Unidade 5 · Aula 01
 * "A Imigração no Brasil: Séculos XIX e XX" — italianos, alemães, japoneses.
 * Restaura a Página 5 das Crônicas: O Caminho dos Imigrantes.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-imigracao",
  titulo: "A Imigração no Brasil: Séculos XIX e XX",
  iconeTrilha: "🛳️",
  bncc: ["EF04HI08", "EF04HI09"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre um passaporte antigo, escrito em outra língua, cheio de carimbos. Foi de uma família que atravessou o Atlântico em navio a vapor rumo ao Brasil.",
    mapaUrl: imgPassaporte,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, depois do fim da escravidão (1888), o Brasil precisava de trabalhadores. Milhões de europeus e asiáticos aceitaram atravessar o mundo e RECOMEÇAR aqui. Traziam pouco na mala e MUITA esperança.",
    falaFinal:
      "Nesta aula você acende o quinto ponto do mapa: O Caminho dos Imigrantes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: por que MILHÕES de europeus arrumaram as malas entre 1870 e 1950 pra vir viver do outro lado do oceano?",
    pergunta: "O que empurrou tantos imigrantes ao Brasil?",
    fotoUrl: imgNavio,
    opcoes: [
      {
        id: "crise",
        titulo: "Crises, guerras e falta de trabalho na Europa",
        subtitulo: "e promessa de terra e emprego no Brasil",
        emoji: "🌾",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgMala,
      },
      {
        id: "praia",
        titulo: "Só queriam conhecer a praia brasileira",
        subtitulo: "vinham a passeio",
        emoji: "🏖️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgFesta,
      },
    ],
    respostaCerta: "crise",
    feedbackAcerto:
      "Correto. CRISES econômicas, guerras e falta de terra empurraram famílias inteiras. Cartazes prometiam terra fértil e trabalho no Brasil.",
    feedbackErro:
      "Não vinham a passeio (nem existia turismo assim). Vinham pra RECOMEÇAR a vida — fugindo de crises e guerras.",
    falaFinal: "Guarde: migração é feita de FATORES DE EXPULSÃO (crise) e ATRAÇÃO (promessa de vida melhor).",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário da imigração.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "imigrante",
        capa: "Imigrante",
        emoji: "🛳️",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgNavio,
        conteudo:
          "IMIGRANTE é a pessoa que CHEGA num país vindo de outro. EMIGRANTE é a pessoa que SAI do seu próprio país. Um italiano que sai da Itália é EMIGRANTE lá — e IMIGRANTE aqui no Brasil.",
        exemplo:
          "Exemplo: entre 1870 e 1950, o Brasil recebeu cerca de 5 milhões de imigrantes europeus, árabes e asiáticos.",
      },
      {
        id: "hospedaria",
        capa: "Hospedaria dos Imigrantes",
        emoji: "🏛️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgMala,
        conteudo:
          "HOSPEDARIA DOS IMIGRANTES era um grande prédio (o mais famoso ficava em São Paulo) onde os recém-chegados dormiam, comiam e passavam por triagem antes de serem enviados às fazendas ou colônias.",
        exemplo:
          "Exemplo: milhões de famílias italianas, espanholas e japonesas passaram pela Hospedaria do Brás (SP) — hoje é o Museu da Imigração.",
      },
      {
        id: "colonia",
        capa: "Colônia Agrícola",
        emoji: "🌾",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgFesta,
        conteudo:
          "COLÔNIA AGRÍCOLA era uma comunidade de imigrantes fundada em terras do Sul do Brasil (RS, SC, PR). Cada família recebia um lote de terra pra plantar e criar animais. Muitas viraram cidades hoje conhecidas.",
        exemplo:
          "Exemplo: Blumenau (SC) e Nova Petrópolis (RS) começaram como colônias alemãs no século XIX.",
      },
    ],
    falaFinal:
      "Imigrante + Hospedaria + Colônia: vocabulário técnico do maior movimento demográfico do Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o mapa oficial da imigração ao Brasil. Toque em cada origem pra ouvir a história.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "italia",
        x: 20,
        y: 25,
        emoji: "🇮🇹",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgFesta,
        titulo: "1. ITÁLIA — o maior grupo",
        texto:
          "Cerca de 1,5 milhão de italianos vieram entre 1870 e 1930. Trabalharam nas fazendas de café em SP e fundaram colônias no Sul. Deixaram culinária (pizza, massas), Festa da Uva e sotaque.",
      },
      {
        id: "alemanha",
        x: 25,
        y: 15,
        emoji: "🇩🇪",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgMala,
        titulo: "2. ALEMANHA — colônias no Sul",
        texto:
          "Alemães chegaram desde 1824 e fundaram colônias em SC, RS e PR. Trouxeram casas ENXAIMEL (madeira e tijolo), fabricação de embutidos e cerveja artesanal.",
      },
      {
        id: "japao",
        x: 85,
        y: 20,
        emoji: "🇯🇵",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgMapa,
        titulo: "3. JAPÃO — a partir de 1908",
        texto:
          "Os japoneses começaram a chegar em 1908 no navio Kasato-Maru, no porto de Santos. Fundaram fazendas hortifrúti, o bairro Liberdade (SP) e revolucionaram a agricultura brasileira.",
      },
      {
        id: "arabes",
        x: 55,
        y: 30,
        emoji: "🇱🇧",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgPassaporte,
        titulo: "4. SÍRIA E LÍBANO — comércio",
        texto:
          "Libaneses e sírios chegaram no início do século XX e se espalharam como MASCATES (comerciantes ambulantes) por todo o Brasil. Trouxeram kibe, esfiha e o comércio de rua.",
      },
    ],
    falaFinal:
      "Cada origem trouxe cultura diferente. O Brasil que a gente conhece hoje é RESULTADO dessa mistura.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre imigração.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual foi a principal cultura agrícola que atraiu milhões de italianos ao Brasil?",
        fotoUrl: imgFesta,
        cards: [
          { id: "c", emoji: "☕", titulo: "Café", cor: "from-amber-500 to-orange-700" },
          { id: "s", emoji: "🌱", titulo: "Soja", cor: "from-emerald-500 to-teal-700" },
          { id: "u", emoji: "🍇", titulo: "Uva", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "c",
        feedbackAcerto: "Certeza. Foi o CAFÉ (SP) que precisou de milhões de braços italianos.",
        feedbackErro: "Uva e soja vieram depois. O motor da imigração italiana no fim do século XIX foi o CAFÉ.",
      },
      {
        id: "q2",
        pergunta: "Que grupo imigrante fundou o bairro Liberdade em São Paulo?",
        fotoUrl: imgMapa,
        cards: [
          { id: "j", emoji: "🇯🇵", titulo: "Japoneses", cor: "from-orange-500 to-red-700" },
          { id: "a", emoji: "🇩🇪", titulo: "Alemães", cor: "from-amber-500 to-orange-700" },
          { id: "i", emoji: "🇮🇹", titulo: "Italianos", cor: "from-emerald-500 to-teal-700" },
        ],
        correta: "j",
        feedbackAcerto: "Exato. Liberdade é o principal bairro JAPONÊS de SP — tem lanternas, festa de ano novo com dragões.",
        feedbackErro: "Alemães foram pro Sul; italianos pro café. Liberdade é bairro JAPONÊS.",
      },
      {
        id: "q3",
        pergunta: "Como se chama o prédio onde os imigrantes recém-chegados dormiam e passavam por triagem?",
        fotoUrl: imgMala,
        cards: [
          { id: "h", emoji: "🏛️", titulo: "Hospedaria dos Imigrantes", cor: "from-sky-500 to-blue-700" },
          { id: "s", emoji: "🏥", titulo: "Hospital", cor: "from-red-500 to-orange-700" },
          { id: "e", emoji: "🏫", titulo: "Escola pública", cor: "from-emerald-500 to-teal-700" },
        ],
        correta: "h",
        feedbackAcerto: "Isso. HOSPEDARIA DOS IMIGRANTES — a mais famosa foi a do Brás (SP).",
        feedbackErro: "Não era hospital nem escola. Era a HOSPEDARIA DOS IMIGRANTES.",
      },
    ],
    falaFinal: "Vocabulário técnico dominado. Você entende as principais origens da imigração ao Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores no mesmo mapa: um destaca EUROPA (Itália, Alemanha, Espanha, Portugal), outro destaca ÁSIA e ORIENTE MÉDIO (Japão, Síria, Líbano).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "europa",
        rotulo: "Europa",
        emoji: "🇪🇺",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 5, y: 8, w: 30, h: 45 },
        descricao:
          "Italianos, alemães, espanhóis, portugueses e ucranianos. Vieram por causa de crises, falta de terra e guerras. Trabalharam no café (SP) e fundaram colônias no Sul.",
      },
      {
        id: "asia",
        rotulo: "Ásia e Oriente Médio",
        emoji: "🌏",
        cor: "from-orange-600 to-red-800",
        rect: { x: 45, y: 15, w: 50, h: 40 },
        descricao:
          "Japoneses, sírios, libaneses e chineses. Chegaram no início do século XX. Revolucionaram agricultura (japoneses) e comércio urbano (sírio-libaneses).",
      },
    ],
    falaFinal: "Europa + Ásia + Oriente Médio: 3 origens principais que se misturaram ao Brasil colonial e africano.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar as 4 etapas da jornada de um imigrante típico do início do século XX.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como acontecia a chegada de um imigrante?",
    paradas: [
      {
        id: "arrumar",
        emoji: "🧳",
        rotulo: "1. Arrumar a mala e sair",
        fotoUrl: imgMala,
        descricao: "A família vendia tudo, cabia numa mala de madeira e ia ao porto europeu (Gênova, Lisboa, Bremen).",
      },
      {
        id: "navio",
        emoji: "🛳️",
        rotulo: "2. Travessia em navio a vapor",
        fotoUrl: imgNavio,
        descricao: "30 a 60 dias no oceano em terceira classe. Comida escassa, muita gente doente.",
      },
      {
        id: "santos",
        emoji: "⚓",
        rotulo: "3. Desembarque no porto de Santos",
        fotoUrl: imgPassaporte,
        descricao: "Trem levava da Serra do Mar direto pra HOSPEDARIA DOS IMIGRANTES no Brás (SP).",
      },
      {
        id: "fazenda",
        emoji: "☕",
        rotulo: "4. Envio pra fazenda ou colônia",
        fotoUrl: imgFesta,
        descricao: "Da hospedaria, cada família seguia pra sua fazenda de café (SP) ou colônia agrícola (Sul).",
      },
    ],
    ordemCerta: ["arrumar", "navio", "santos", "fazenda"],
    feedbackAcerto: "Jornada completa: partida → travessia → chegada → destino final.",
    feedbackErro: "Essa não é a próxima etapa. Pense na ordem cronológica da viagem.",
    falaFinal: "Você mapeou a rota típica de um imigrante europeu ao Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 5 e toque nas palavras destacadas.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 5 — O Caminho dos Imigrantes",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Depois da abolição da escravidão (1888), o Brasil precisava de trabalhadores. O governo INCENTIVOU a vinda de europeus e asiáticos pra trabalhar nas fazendas de café e povoar o Sul. Começava a era da IMIGRAÇÃO em massa.",
        chaves: ["imigração"],
        definicoes: {
          imigração: "Movimento de pessoas ENTRANDO num país para viver. Diferente de emigração (saindo).",
        },
        fotoUrl: imgNavio,
      },
      {
        id: "p2",
        texto:
          "Os principais grupos foram: ITALIANOS (o maior, no café de SP), ALEMÃES e POLONESES (colônias do Sul), ESPANHÓIS, PORTUGUESES, JAPONESES (a partir de 1908), SÍRIOS e LIBANESES (comércio ambulante).",
        chaves: ["colônias"],
        definicoes: {
          colônias: "Comunidades agrícolas de imigrantes no Sul do Brasil, onde cada família ganhava um lote de terra.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p3",
        texto:
          "A viagem em navio a vapor durava de 30 a 60 dias. Ao chegar no porto de SANTOS, seguiam de trem pra HOSPEDARIA DOS IMIGRANTES no Brás (SP), onde passavam por triagem antes de ir pras fazendas ou colônias.",
        chaves: ["Hospedaria dos Imigrantes"],
        definicoes: {
          "Hospedaria dos Imigrantes":
            "Prédio em SP onde os recém-chegados dormiam, comiam e eram distribuídos. Hoje é o Museu da Imigração.",
        },
        fotoUrl: imgMala,
      },
      {
        id: "p4",
        texto:
          "Cada grupo deixou marca cultural forte: massas e Festa da Uva (italianos), cerveja e Oktoberfest (alemães), bairro Liberdade e ano novo dos dragões (japoneses), kibe e esfiha (sírio-libaneses). O Brasil de hoje é essa MISTURA.",
        chaves: ["Festa da Uva"],
        definicoes: {
          "Festa da Uva": "Festa tradicional italiana em Caxias do Sul (RS), símbolo da imigração italiana no Brasil.",
        },
        fotoUrl: imgFesta,
      },
    ],
    falaFinal: "Leitura concluída. Você já explica como os imigrantes moldaram o Brasil moderno.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador cultural: cada rodada mostra uma marca cultural. Classifique a ORIGEM.",
    instrucao: "⏱️ Leia e toque",
    duracaoSegundos: 18,
    pecas: [
      { id: "i", emoji: "🇮🇹", rotulo: "Italiana" },
      { id: "a", emoji: "🇩🇪", rotulo: "Alemã" },
      { id: "j", emoji: "🇯🇵", rotulo: "Japonesa" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Festa da Uva em Caxias do Sul", emoji: "🍇", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Cantina, massas, sotaque", emoji: "🍝", cor: "from-red-500 to-orange-700" },
        contexto: "Cidade do RS celebra a colheita da uva com desfile, comida típica e sotaque característico.",
        pecaCertaId: "i",
        feedbackAcerto: "Sim! Uva + massas = ITALIANA.",
        feedbackErro: "Uva, massas e Festa da Uva = ITALIANA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Casa enxaimel de madeira e tijolo", emoji: "🏡", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Cerveja artesanal e embutidos", emoji: "🍺", cor: "from-yellow-500 to-orange-700" },
        contexto: "Vila em SC tem casas de estrutura de madeira aparente e produz cervejas típicas.",
        pecaCertaId: "a",
        feedbackAcerto: "Correto. Enxaimel + cerveja = ALEMÃ.",
        feedbackErro: "Enxaimel e cerveja artesanal são marcas ALEMÃS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Lanternas vermelhas e dragões", emoji: "🏮", cor: "from-red-600 to-orange-800" },
        municipioB: { nome: "Bairro Liberdade em SP", emoji: "🎎", cor: "from-red-500 to-red-700" },
        contexto: "Bairro paulistano famoso pelas lanternas vermelhas e pela festa de ano novo com desfile de dragões.",
        pecaCertaId: "j",
        feedbackAcerto: "Isso. Liberdade + dragões = JAPONESA.",
        feedbackErro: "Liberdade e dragões são marcas JAPONESAS.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pizza, macarrão e polenta", emoji: "🍕", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Comida difundida em SP", emoji: "🇮🇹", cor: "from-red-500 to-orange-700" },
        contexto: "A cozinha brasileira urbana adora pizzarias, cantinas e polenta.",
        pecaCertaId: "i",
        feedbackAcerto: "Sim! Pizza + polenta = ITALIANA.",
        feedbackErro: "Pizza e polenta = ITALIANA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Oktoberfest em Blumenau", emoji: "🍻", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Roupas típicas e chope", emoji: "🎉", cor: "from-yellow-500 to-orange-700" },
        contexto: "Maior festa de cerveja das Américas, realizada em SC.",
        pecaCertaId: "a",
        feedbackAcerto: "Correto. Oktoberfest = ALEMÃ.",
        feedbackErro: "Oktoberfest = festa ALEMÃ.",
      },
      {
        id: "r6",
        municipioA: { nome: "Sushi, tempura e caqui", emoji: "🍣", cor: "from-red-600 to-orange-800" },
        municipioB: { nome: "Cultura hortifruti no Brasil", emoji: "🥬", cor: "from-red-500 to-red-700" },
        contexto: "Imigrantes revolucionaram a produção de folhas, hortaliças e frutas no Brasil.",
        pecaCertaId: "j",
        feedbackAcerto: "Perfeito. Sushi + hortifruti = JAPONESA.",
        feedbackErro: "Sushi e hortifruti no Brasil = herança JAPONESA.",
      },
    ],
    falaFinal: "6 rodadas! Você já reconhece marcas culturais das principais imigrações.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos imigrantes: dos ~5 milhões que chegaram entre 1870 e 1950, quais foram os grupos maiores?",
    instrucao: "Toque nas fatias",
    fotoUrl: imgMapa,
    fatias: [
      {
        id: "europeus",
        rotulo: "Europeus (~80%)",
        emoji: "🇪🇺",
        percentual: 80,
        cor: "#059669",
        descricao:
          "Italianos, portugueses, espanhóis, alemães e poloneses foram a maioria. Vieram em navios a vapor pra trabalhar no café e nas colônias.",
        exemplos: ["🇮🇹 Italianos", "🇵🇹 Portugueses", "🇪🇸 Espanhóis"],
      },
      {
        id: "asiaticos",
        rotulo: "Asiáticos e árabes (~20%)",
        emoji: "🌏",
        percentual: 20,
        cor: "#ea580c",
        descricao:
          "Japoneses, sírios, libaneses e chineses formaram os principais grupos NÃO europeus. Marcaram comércio, hortifruti e culinária.",
        exemplos: ["🇯🇵 Japoneses", "🇱🇧 Libaneses", "🇸🇾 Sírios"],
      },
    ],
    falaFinal: "80% eram europeus. Mas os 20% asiáticos e árabes deixaram marcas culturais gigantes.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia do Caminho dos Imigrantes.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgNavio,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual foi a principal cultura agrícola que atraiu milhões de imigrantes italianos ao Brasil?",
        opcoes: [
          { id: "a", texto: "O plantio de café.", correta: true },
          { id: "b", texto: "A colheita de cacau na floresta.", correta: false },
          { id: "c", texto: "A extração de borracha.", correta: false },
        ],
        feedbackAcerto: "Isso! CAFÉ (SP) precisou de milhões de braços italianos.",
        feedbackErro: "Cacau e borracha ficaram no Norte com outros povos. Italianos = CAFÉ (SP).",
      },
      {
        id: "av2",
        pergunta: "Que grupo imigrante começou a chegar em 1908 no navio Kasato-Maru, no porto de Santos?",
        opcoes: [
          { id: "a", texto: "Alemães.", correta: false },
          { id: "b", texto: "Japoneses.", correta: true },
          { id: "c", texto: "Portugueses.", correta: false },
        ],
        feedbackAcerto: "Correto! JAPONESES chegaram no Kasato-Maru em 1908.",
        feedbackErro: "Alemães chegaram bem antes (1824); portugueses estavam desde 1500. Kasato-Maru = JAPONESES.",
      },
      {
        id: "av3",
        pergunta: "Qual a diferença entre imigrante e emigrante?",
        opcoes: [
          { id: "a", texto: "É a mesma coisa.", correta: false },
          { id: "b", texto: "Imigrante CHEGA num país; emigrante SAI do próprio país.", correta: true },
          { id: "c", texto: "Imigrante é do sul; emigrante é do norte.", correta: false },
        ],
        feedbackAcerto: "Perfeito. IMIGRANTE = quem chega. EMIGRANTE = quem sai.",
        feedbackErro: "Não é o mesmo. IMIGRANTE = chega. EMIGRANTE = sai.",
      },
    ],
    selo: {
      nome: "Caminho dos Imigrantes",
      subtitulo: "Insígnia da Imigração Europeia e Asiática",
      emoji: "🛳️",
      cor: "from-emerald-400 to-teal-600",
      fotoUrl: imgMapa,
    },
    falaFinal:
      "Insígnia conquistada! Página 5 restaurada. O quinto ponto brilha no mapa: O Caminho dos Imigrantes.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Caminho dos Imigrantes" },
};
