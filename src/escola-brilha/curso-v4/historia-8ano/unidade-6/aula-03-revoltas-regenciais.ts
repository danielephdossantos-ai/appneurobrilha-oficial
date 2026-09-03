import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula03: AulaGeoV1 = {
  slug: "aula-03-revoltas-regenciais",
  titulo: "As Revoltas Regenciais: um Império em Chamas",
  iconeTrilha: "🔥",
  bncc: ["EF08HI16"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFazenda,
    imagemDestaqueUrl: imgConst,
    aurora:
      "Década de 1830-1840. Com D. Pedro I fora e D. Pedro II ainda criança, o Brasil vive o Período Regencial: um poder central fraco, longe das províncias. Da Amazônia ao Rio Grande do Sul, populações pobres, escravizados, indígenas e elites locais insatisfeitas pegam em armas contra o governo do Rio de Janeiro. Cabanagem, Sabinada, Balaiada e Farroupilha explodem quase ao mesmo tempo.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem: Brasil em Rebeliões.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se o poder central estava fraco durante a Regência, o que você acha que aconteceu nas províncias distantes do Rio de Janeiro?",
    pergunta: "O que explica as revoltas regenciais (1831-1845)?",
    fotoUrl: imgFazenda,
    opcoes: [
      {
        id: "desc",
        titulo: "DESCONTENTAMENTO REGIONAL",
        subtitulo: "pobreza, exclusão política e poder central fraco",
        emoji: "🔥",
        cor: "from-red-800 to-slate-950",
      },
      {
        id: "harm",
        titulo: "PAZ E HARMONIA",
        subtitulo: "todas as províncias apoiavam a Regência",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
          { id: "c", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "desc",
    feedbackAcerto:
      "Correto. Sem um imperador adulto no trono, o poder central perdeu força. Tensões sociais antigas — pobreza, exclusão política, disputas entre elites locais e revolta de escravizados — explodiram em quase todas as regiões do país.",
    feedbackErro:
      "Não. O Período Regencial foi marcado por INSTABILIDADE: o poder central fraco permitiu que tensões sociais antigas explodissem em revoltas por todo o território.",
    falaFinal:
      "Ideia-base: Regência fraca + tensões antigas = onda de revoltas provinciais.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro revoltas, quatro contextos regionais diferentes.",
    instrucao: "",
    cadernos: [
      {
        id: "cab",
        capa: "Cabanagem",
        emoji: "🛶",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo:
          "CABANAGEM (1835-1840), no Grão-Pará, foi a revolta mais radical e sangrenta do período: cabanos (população pobre ribeirinha, indígenas, negros e mestiços) tomaram Belém e chegaram a proclamar um governo popular. A repressão foi brutal — estima-se entre 30 e 40 mil mortos, quase 20% da população da província.",
        exemplo:
          "Exemplo: o nome vem das 'cabanas' de palha onde vivia a população pobre ribeirinha da Amazônia.",
      },
      {
        id: "sab",
        capa: "Sabinada",
        emoji: "⚓",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        conteudo:
          "SABINADA (1837-1838), na Bahia, foi liderada pelo médico e jornalista Francisco Sabino. Rebeldes chegaram a proclamar a 'República Bahiense', que deveria durar até D. Pedro II completar a maioridade. Reprimida pelo governo imperial, custou milhares de vidas em Salvador.",
        exemplo:
          "Exemplo: apesar do nome 'República', os líderes não queriam separar-se do Brasil de vez — era uma autonomia temporária.",
      },
      {
        id: "bal",
        capa: "Balaiada",
        emoji: "🧺",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo:
          "BALAIADA (1838-1841), no Maranhão, uniu sertanejos pobres, vaqueiros e escravizados fugidos (formando o grupo dos 'negros balaios') contra a elite política local. O nome vem de Manuel Francisco dos Anjos Ferreira, fabricante de balaios (cestos).",
        exemplo:
          "Exemplo: Luís Alves de Lima e Silva, futuro Duque de Caxias, comandou as tropas que sufocaram a revolta — e ganhou prestígio militar por isso.",
      },
      {
        id: "far",
        capa: "Farroupilha",
        emoji: "🐎",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgIpiranga,
        conteudo:
          "FARROUPILHA (1835-1845), no Rio Grande do Sul, foi a mais LONGA revolta regencial — dez anos. Estancieiros gaúchos, revoltados com impostos sobre o charque (carne seca) frente à concorrência do produto platino, chegaram a proclamar a República Rio-Grandense.",
        exemplo:
          "Exemplo: terminou com o 'acordo de Ponche Verde' (1845), que perdoou os rebeldes e manteve o Rio Grande do Sul unido ao Império.",
      },
    ],
    falaFinal:
      "Cabanagem + Sabinada + Balaiada + Farroupilha. Quatro incêndios regionais na mesma década.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico das quatro revoltas regenciais pelo mapa do Brasil. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFazenda,
    pontos: [
      {
        id: "cab",
        x: 20,
        y: 20,
        emoji: "🛶",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        titulo: "CABANAGEM (Grão-Pará, 1835-1840)",
        texto:
          "A mais violenta: entre 30 e 40 mil mortos. Cabanos pobres tomaram Belém e proclamaram um governo popular antes de serem esmagados.",
      },
      {
        id: "bal",
        x: 40,
        y: 35,
        emoji: "🧺",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "BALAIADA (Maranhão, 1838-1841)",
        texto:
          "Sertanejos pobres e escravizados fugidos ('negros balaios') se rebelaram contra a elite local. Sufocada por Luís Alves de Lima e Silva.",
      },
      {
        id: "sab",
        x: 55,
        y: 45,
        emoji: "⚓",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        titulo: "SABINADA (Bahia, 1837-1838)",
        texto:
          "Proclamou a 'República Bahiense' temporária, liderada por Francisco Sabino, em Salvador.",
      },
      {
        id: "far",
        x: 30,
        y: 85,
        emoji: "🐎",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgIpiranga,
        titulo: "FARROUPILHA (Rio Grande do Sul, 1835-1845)",
        texto:
          "Dez anos de guerra pela República Rio-Grandense. Terminou com o acordo de Ponche Verde (1845).",
      },
    ],
    falaFinal: "Quatro focos de revolta. Todos revelam um Império frágil e desigual.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre as revoltas regenciais.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual revolta regencial ocorreu no Grão-Pará e foi a mais sangrenta?",
        fotoUrl: imgFazenda,
        cards: [
          { id: "c", emoji: "🛶", titulo: "Cabanagem", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "⚓", titulo: "Sabinada", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "🧺", titulo: "Balaiada", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. A Cabanagem, no Grão-Pará, matou entre 30 e 40 mil pessoas.",
        feedbackErro: "É a Cabanagem, no Grão-Pará (1835-1840), a mais sangrenta das revoltas regenciais.",
      },
      {
        id: "q2",
        pergunta: "Qual revolta durou 10 anos e proclamou a República Rio-Grandense?",
        fotoUrl: imgIpiranga,
        cards: [
          { id: "f", emoji: "🐎", titulo: "Farroupilha", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "⚓", titulo: "Sabinada", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "🛶", titulo: "Cabanagem", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "f",
        feedbackAcerto: "Correto. A Farroupilha (1835-1845), no Rio Grande do Sul, foi a mais longa.",
        feedbackErro: "É a Farroupilha. Durou dez anos e terminou com o acordo de Ponche Verde.",
      },
      {
        id: "q3",
        pergunta: "Qual futuro Duque de Caxias comandou a repressão à Balaiada, no Maranhão?",
        fotoUrl: imgPedro,
        cards: [
          { id: "l", emoji: "⚔️", titulo: "Luís Alves de Lima e Silva", cor: "from-teal-600 to-slate-900" },
          { id: "f", emoji: "✒️", titulo: "Francisco Sabino", cor: "from-amber-600 to-slate-900" },
          { id: "a", emoji: "👑", titulo: "D. Pedro I", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "l",
        feedbackAcerto: "Correto. Luís Alves de Lima e Silva, futuro Duque de Caxias, sufocou a Balaiada.",
        feedbackErro: "É Luís Alves de Lima e Silva — ganhou prestígio militar reprimindo a Balaiada.",
      },
    ],
    falaFinal: "Radar afiado. Você já distingue as quatro revoltas regenciais.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre as revoltas regenciais: quem lutava e o que o governo imperial fazia.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFazenda,
    camadas: [
      {
        id: "reb",
        rotulo: "Rebeldes provinciais",
        emoji: "🔥",
        cor: "from-red-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "Pobres livres, escravizados fugidos, indígenas, estancieiros e elites locais insatisfeitas — grupos sociais muito diferentes, unidos pela revolta contra o poder central fraco e distante.",
      },
      {
        id: "gov",
        rotulo: "Governo Regencial",
        emoji: "🏛️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Sem imperador adulto, o governo central respondeu às revoltas com repressão militar dura em todas as províncias, usando o exército para restaurar a autoridade do Rio de Janeiro.",
      },
    ],
    falaFinal: "Rebeldes diversos, repressão dura. Um retrato do Império fragmentado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene cronologicamente o início das quatro revoltas regenciais.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia das Revoltas Regenciais",
    paradas: [
      {
        id: "far",
        emoji: "🐎",
        rotulo: "1. Farroupilha (1835)",
        fotoUrl: imgIpiranga,
        descricao: "Estancieiros gaúchos se rebelam no Rio Grande do Sul.",
      },
      {
        id: "cab",
        emoji: "🛶",
        rotulo: "2. Cabanagem (1835)",
        fotoUrl: imgFazenda,
        descricao: "Cabanos tomam Belém no Grão-Pará.",
      },
      {
        id: "sab",
        emoji: "⚓",
        rotulo: "3. Sabinada (1837)",
        fotoUrl: imgConst,
        descricao: "Francisco Sabino proclama a República Bahiense.",
      },
      {
        id: "bal",
        emoji: "🧺",
        rotulo: "4. Balaiada (1838)",
        fotoUrl: imgPedro,
        descricao: "Sertanejos e negros balaios se rebelam no Maranhão.",
      },
    ],
    ordemCerta: ["far", "cab", "sab", "bal"],
    feedbackAcerto:
      "Perfeito. Farroupilha e Cabanagem começam em 1835; Sabinada em 1837; Balaiada em 1838.",
    feedbackErro: "Essa não é a próxima. As revoltas começaram entre 1835 e 1838 — comece pelas mais antigas.",
    falaFinal: "Quatro revoltas em quatro anos. O Período Regencial foi realmente turbulento.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página do livro-atlas. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Império",
    subtitulo: "Página — Brasil em Rebeliões",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Com D. Pedro I fora do país (1831) e D. Pedro II ainda criança, o Brasil entrou no PERÍODO REGENCIAL — anos de poder central fraco. Sem um imperador adulto para arbitrar conflitos, tensões antigas explodiram em revoltas por várias províncias.",
        chaves: ["Período Regencial"],
        definicoes: {
          "Período Regencial":
            "Período entre 1831 e 1840 em que o Brasil foi governado por regentes, na ausência de um imperador adulto no trono.",
        },
        fotoUrl: imgConst,
      },
      {
        id: "p2",
        texto:
          "Na Amazônia, a CABANAGEM (1835-1840) foi a mais radical: populações pobres, indígenas e negros tomaram Belém e chegaram a formar um governo popular. A repressão imperial matou entre 30 e 40 mil pessoas, cerca de 20% da população da província.",
        chaves: ["Cabanagem"],
        definicoes: {
          Cabanagem:
            "Revolta popular no Grão-Pará (1835-1840), liderada por cabanos pobres e indígenas, duramente reprimida pelo governo imperial.",
        },
        fotoUrl: imgFazenda,
      },
      {
        id: "p3",
        texto:
          "No Rio Grande do Sul, a FARROUPILHA (1835-1845) foi a revolta mais longa: dez anos. Estancieiros gaúchos, insatisfeitos com impostos sobre o charque, proclamaram a República Rio-Grandense. Terminou em acordo, sem separação do Império.",
        chaves: ["Farroupilha"],
        definicoes: {
          Farroupilha:
            "Revolta dos estancieiros do Rio Grande do Sul (1835-1845), que proclamaram a República Rio-Grandense e depois voltaram a integrar o Império.",
        },
        fotoUrl: imgIpiranga,
      },
      {
        id: "p4",
        texto:
          "Na Bahia (SABINADA, 1837-1838) e no Maranhão (BALAIADA, 1838-1841), revoltas semelhantes uniram pobres, escravizados e elites locais descontentes. Todas foram reprimidas à força — mostrando como o Império preferiu a repressão militar a resolver as desigualdades que provocavam as revoltas.",
        chaves: ["Sabinada"],
        definicoes: {
          Sabinada:
            "Revolta na Bahia (1837-1838) que proclamou temporariamente a 'República Bahiense', liderada por Francisco Sabino.",
        },
        fotoUrl: imgPedro,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica por que o Período Regencial foi tão instável.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada revolta ao seu contexto correto.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "cab", emoji: "🛶", rotulo: "Cabanagem" },
      { id: "far", emoji: "🐎", rotulo: "Farroupilha" },
      { id: "bal", emoji: "🧺", rotulo: "Balaiada" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Grão-Pará, 1835-1840", emoji: "🛶", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "30 a 40 mil mortos", emoji: "⚰️", cor: "from-emerald-600 to-slate-900" },
        contexto: "Revolta mais sangrenta da Regência.",
        pecaCertaId: "cab",
        feedbackAcerto: "Correto. Cabanagem = Grão-Pará.",
        feedbackErro: "É a Cabanagem, no Grão-Pará.",
      },
      {
        id: "r2",
        municipioA: { nome: "República Rio-Grandense", emoji: "🐎", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Acordo de Ponche Verde (1845)", emoji: "🤝", cor: "from-slate-600 to-slate-900" },
        contexto: "Revolta mais longa, dez anos.",
        pecaCertaId: "far",
        feedbackAcerto: "Correto. Farroupilha = Rio Grande do Sul.",
        feedbackErro: "É a Farroupilha, encerrada com o acordo de Ponche Verde.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Negros balaios'", emoji: "🧺", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Maranhão, 1838-1841", emoji: "🌾", cor: "from-cyan-600 to-slate-900" },
        contexto: "Sertanejos e escravizados fugidos revoltados.",
        pecaCertaId: "bal",
        feedbackAcerto: "Correto. Balaiada = Maranhão.",
        feedbackErro: "É a Balaiada, no Maranhão.",
      },
      {
        id: "r4",
        municipioA: { nome: "Duque de Caxias sufocou", emoji: "⚔️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Ganhou prestígio militar", emoji: "🎖️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Revolta reprimida por Luís Alves de Lima e Silva.",
        pecaCertaId: "bal",
        feedbackAcerto: "Correto. Foi na Balaiada.",
        feedbackErro: "É a Balaiada — reprimida por Caxias.",
      },
      {
        id: "r5",
        municipioA: { nome: "Charque e impostos altos", emoji: "🥩", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Estancieiros gaúchos revoltados", emoji: "🐎", cor: "from-slate-600 to-slate-900" },
        contexto: "Causa econômica da revolta.",
        pecaCertaId: "far",
        feedbackAcerto: "Correto. Farroupilha, motivada pelo imposto sobre o charque.",
        feedbackErro: "É a Farroupilha.",
      },
      {
        id: "r6",
        municipioA: { nome: "Belém tomada por cabanos", emoji: "🛶", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Governo popular temporário", emoji: "🏛️", cor: "from-emerald-600 to-slate-900" },
        contexto: "Cidade tomada pela revolta mais radical.",
        pecaCertaId: "cab",
        feedbackAcerto: "Correto. Cabanagem tomou Belém.",
        feedbackErro: "É a Cabanagem.",
      },
    ],
    falaFinal: "6 rodadas! Você já domina as revoltas regenciais.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza das revoltas regenciais: duração aproximada de cada conflito em anos, comparando as duas mais marcantes.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgIpiranga,
    fatias: [
      {
        id: "far",
        rotulo: "Farroupilha (10 anos)",
        emoji: "🐎",
        percentual: 67,
        cor: "#334155",
        descricao:
          "1835-1845. A mais longa das revoltas regenciais, no Rio Grande do Sul, motivada por impostos sobre o charque.",
        exemplos: ["🐎 Estancieiros", "🥩 Charque", "🤝 Ponche Verde"],
      },
      {
        id: "cab",
        rotulo: "Cabanagem (5 anos)",
        emoji: "🛶",
        percentual: 33,
        cor: "#047857",
        descricao:
          "1835-1840. A mais sangrenta, no Grão-Pará, com dezenas de milhares de mortos entre a população pobre e indígena.",
        exemplos: ["🛶 Cabanos", "⚰️ Repressão", "🌳 Amazônia"],
      },
    ],
    falaFinal: "Duas revoltas, dois recordes: uma pela duração, outra pela violência.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem das Revoltas.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFazenda,
    perguntas: [
      {
        id: "av1",
        pergunta: "As revoltas regenciais (1831-1845) foram causadas principalmente por:",
        opcoes: [
          { id: "a", texto: "Poder central fraco somado a tensões sociais e regionais antigas.", correta: true },
          { id: "b", texto: "Uma invasão estrangeira ao Brasil.", correta: false },
          { id: "c", texto: "Ordem direta do imperador D. Pedro II.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Sem imperador adulto, tensões antigas explodiram nas províncias.",
        feedbackErro: "É o poder central fraco somado às tensões sociais e regionais já existentes.",
      },
      {
        id: "av2",
        pergunta: "Qual foi a revolta mais sangrenta do Período Regencial?",
        opcoes: [
          { id: "a", texto: "Sabinada.", correta: false },
          { id: "b", texto: "Cabanagem.", correta: true },
          { id: "c", texto: "Balaiada.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. A Cabanagem, no Grão-Pará, matou dezenas de milhares.",
        feedbackErro: "É a Cabanagem, com 30 a 40 mil mortos.",
      },
      {
        id: "av3",
        pergunta: "Qual revolta durou dez anos e proclamou a República Rio-Grandense?",
        opcoes: [
          { id: "a", texto: "Farroupilha.", correta: true },
          { id: "b", texto: "Cabanagem.", correta: false },
          { id: "c", texto: "Sabinada.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. A Farroupilha (1835-1845), no Rio Grande do Sul.",
        feedbackErro: "É a Farroupilha, encerrada pelo acordo de Ponche Verde.",
      },
    ],
    selo: {
      nome: "Brasil em Rebeliões",
      subtitulo: "Engrenagem das Revoltas Regenciais",
      emoji: "🔥",
      cor: "from-red-600 to-slate-900",
      fotoUrl: imgConst,
    },
    falaFinal:
      "Engrenagem destravada. As revoltas regenciais mostram um Brasil profundamente desigual e dividido.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Brasil em Rebeliões" },
};
