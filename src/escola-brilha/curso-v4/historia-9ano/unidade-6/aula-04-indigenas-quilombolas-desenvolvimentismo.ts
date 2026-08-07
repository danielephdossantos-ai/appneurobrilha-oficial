import type { AulaGeoV1 } from "../../types";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgTanqueDit } from "@/assets/historia-9ano/u6-tanque-ditadura.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
export const aula04: AulaGeoV1 = {
  slug: "aula-04-indigenas-quilombolas-desenvolvimentismo",
  titulo: "Indígenas e Quilombolas contra o Desenvolvimentismo",
  iconeTrilha: "🪶",
  bncc: ["EF09HI21"],
  duracaoMin: 30,
  estilo: "teen",


  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgTanqueDit,
    imagemDestaqueUrl: imgRes,
    aurora:
      "Enquanto o governo militar celebrava o 'milagre econômico', grandes obras como a rodovia Transamazônica (a partir de 1970) e a usina de Itaipu (obras iniciadas em 1975) avançaram sobre terras indígenas e quilombolas sem consulta às comunidades. O MODELO DESENVOLVIMENTISTA da ditadura tratava povos originários e comunidades negras rurais como obstáculo ao 'progresso'. Diante disso, indígenas e quilombolas se organizaram para resistir e reivindicar seus territórios.",
    falaFinal: "Progresso para quem? Terra, floresta e identidade também são história.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Grandes obras da ditadura, como estradas e hidrelétricas, avançaram sobre territórios tradicionais. O que isso causou?",
    pergunta: "Como indígenas e quilombolas reagiram ao modelo desenvolvimentista da ditadura?",
    fotoUrl: imgRes,
    opcoes: [
      { id: "org", titulo: "ORGANIZAÇÃO E RESISTÊNCIA", subtitulo: "lutaram por demarcação de terras e reconhecimento", emoji: "✊", cor: "from-teal-800 to-slate-950" },
      { id: "ace", titulo: "ACEITAÇÃO SEM CONFLITO", subtitulo: "concordaram com a remoção", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "org",
    feedbackAcerto:
      "Correto. Povos indígenas criaram articulações como a UNI (União das Nações Indígenas, 1980) e comunidades quilombolas se organizaram para lutar por demarcação de terras — luta que resultou em conquistas na Constituição de 1988.",
    feedbackErro:
      "Não. Indígenas e quilombolas resistiram e se organizaram, mesmo sob repressão, para defender seus territórios.",
    falaFinal: "Resistência territorial: uma luta que atravessa a ditadura e chega até hoje.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da luta indígena e quilombola contra o desenvolvimentismo.",
    instrucao: "",
    cadernos: [
      { id: "des", capa: "Modelo Desenvolvimentista", emoji: "🏗️", cor: "from-amber-700 to-slate-900", fotoUrl: imgTanqueDit, conteudo: "MODELO DESENVOLVIMENTISTA da ditadura priorizava grandes obras de infraestrutura (estradas, hidrelétricas, colonização da Amazônia) como sinal de 'progresso', frequentemente ignorando direitos de povos que já viviam nessas terras.", exemplo: "Exemplo: a Transamazônica (BR-230, a partir de 1970) cortou terras indígenas no Pará e Amazonas sem consulta prévia às comunidades." },
      { id: "uni", capa: "UNI (União das Nações Indígenas)", emoji: "🪶", cor: "from-teal-700 to-slate-900", fotoUrl: imgRes, conteudo: "UNI, fundada em 1980, foi a primeira organização pan-indígena do Brasil, reunindo lideranças de diferentes povos para reivindicar demarcação de terras e direitos, participando ativamente da Constituinte de 1987-88.", exemplo: "Exemplo: o cacique Raoni Metuktire e a liderança Ailton Krenak tiveram papel de destaque nesse período, incluindo o discurso histórico de Krenak pintado de preto no Congresso Nacional (1987)." },
      { id: "qui", capa: "Comunidades Quilombolas", emoji: "🏘️", cor: "from-cyan-700 to-slate-900", fotoUrl: imgMpb, conteudo: "COMUNIDADES QUILOMBOLAS são grupos remanescentes de quilombos, com identidade própria e território tradicional. Durante a ditadura, muitas foram ameaçadas por grandes projetos agrícolas e de mineração sem reconhecimento legal de suas terras.", exemplo: "Exemplo: só com a Constituição de 1988 (Art. 68 do ADCT) os quilombolas conquistaram o direito à titulação de suas terras — um marco alcançado após décadas de luta." },
      { id: "iti", capa: "Grandes Obras (Itaipu, Transamazônica)", emoji: "🛣️", cor: "from-slate-700 to-slate-900", fotoUrl: imgDiretas, conteudo: "GRANDES OBRAS como a usina de ITAIPU (1975-1984, na fronteira com o Paraguai) e a TRANSAMAZÔNICA deslocaram populações indígenas e ribeirinhas, alagaram terras e alteraram ecossistemas, com pouca ou nenhuma compensação.", exemplo: "Exemplo: a construção de Itaipu inundou terras dos povos Avá-Guarani, que até hoje lutam pela demarcação e reparação por essas perdas." },
    ],
    falaFinal: "Desenvolvimentismo + UNI + Quilombolas + Grandes obras. O preço do 'progresso' recaiu sobre povos tradicionais.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes da luta territorial. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgRes,
    pontos: [
      { id: "tra", x: 24, y: 30, emoji: "🛣️", cor: "from-amber-700 to-slate-900", fotoUrl: imgTanqueDit, titulo: "TRANSAMAZÔNICA", texto: "Rodovia iniciada em 1970 cortou terras indígenas na Amazônia, trazendo colonos, doenças e desmatamento sem consulta às comunidades." },
      { id: "ita", x: 54, y: 56, emoji: "💧", cor: "from-cyan-700 to-slate-900", fotoUrl: imgDiretas, titulo: "ITAIPU E ALAGAMENTOS", texto: "A usina de Itaipu (1975-1984) alagou terras dos Avá-Guarani no Paraná, gerando deslocamentos forçados sem reparação adequada." },
      { id: "org", x: 80, y: 40, emoji: "🪶", cor: "from-teal-700 to-slate-900", fotoUrl: imgMpb, titulo: "ORGANIZAÇÃO INDÍGENA", texto: "A UNI (1980) uniu lideranças indígenas de vários povos para lutar por demarcação de terras, culminando em conquistas na Constituinte de 1987-88." },
    ],
    falaFinal: "Obras avançaram sobre territórios — e a resposta foi organização e luta política.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [      {
        id: "q1",
        pergunta: "O que a Transamazônica representou para povos indígenas?",
        fotoUrl: imgTanqueDit,
        cards: [
          { id: "t", emoji: "🛣️", titulo: "Avanço sobre terras sem consulta prévia", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "🎉", titulo: "Benefício direto e consultado", cor: "from-amber-600 to-slate-900" },
          { id: "n", emoji: "🚫", titulo: "Não teve nenhum impacto", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "t",
        feedbackAcerto: "Correto. A rodovia cortou terras indígenas sem consulta.",
        feedbackErro: "Foi um avanço sobre terras indígenas sem consulta prévia às comunidades.",
      },
      {
        id: "q2",
        pergunta: "O que foi a UNI, fundada em 1980?",
        fotoUrl: imgRes,
        cards: [
          { id: "u", emoji: "🪶", titulo: "Primeira organização pan-indígena do Brasil", cor: "from-teal-600 to-slate-900" },
          { id: "p", emoji: "🎖️", titulo: "Um partido militar", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "🏢", titulo: "Uma empresa estatal", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "u",
        feedbackAcerto: "Correto. A UNI uniu lideranças indígenas de vários povos.",
        feedbackErro: "Foi a primeira organização pan-indígena do Brasil.",
      },
      {
        id: "q3",
        pergunta: "Quando os quilombolas conquistaram direito à titulação de suas terras?",
        fotoUrl: imgMpb,
        cards: [
          { id: "c", emoji: "📜", titulo: "Na Constituição de 1988", cor: "from-teal-600 to-slate-900" },
          { id: "d", emoji: "🎖️", titulo: "No golpe de 1964", cor: "from-amber-600 to-slate-900" },
          { id: "z", emoji: "🌐", titulo: "Só em 2020", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. Art. 68 do ADCT, Constituição de 1988.",
        feedbackErro: "Foi na Constituição de 1988, artigo 68 do ADCT.",
      }
    ],
    falaFinal: "Você já reconhece o custo territorial do desenvolvimentismo e a resposta organizada.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados do desenvolvimentismo militar.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgDiretas,
    camadas: [
      { id: "est", rotulo: "Estado desenvolvimentista", emoji: "🏗️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Governo militar priorizava grandes obras (Transamazônica, Itaipu, colonização da Amazônia) como símbolo de progresso e segurança nacional." },
      { id: "pov", rotulo: "Povos tradicionais", emoji: "🪶", cor: "from-teal-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Indígenas e quilombolas, atingidos por essas obras, se organizaram (UNI, associações quilombolas) para reivindicar reconhecimento e demarcação de terras." },
    ],
    falaFinal: "Progresso de um lado, territórios ameaçados do outro. A luta segue até hoje.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da luta territorial.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1970-1988",
    paradas: [
      { id: "tr", emoji: "🛣️", rotulo: "1. Transamazônica (1970)", fotoUrl: imgTanqueDit, descricao: "Rodovia avança sobre terras indígenas." },
      { id: "it", emoji: "💧", rotulo: "2. Obras de Itaipu (1975)", fotoUrl: imgDiretas, descricao: "Alagamento de terras dos Avá-Guarani." },
      { id: "un", emoji: "🪶", rotulo: "3. Fundação da UNI (1980)", fotoUrl: imgRes, descricao: "Lideranças indígenas se unem nacionalmente." },
      { id: "co", emoji: "📜", rotulo: "4. Constituição de 1988", fotoUrl: imgMpb, descricao: "Reconhece direitos indígenas e territórios quilombolas." },
    ],
    ordemCerta: ["tr", "it", "un", "co"],
    feedbackAcerto: "Perfeito. De 1970 a 1988, a luta territorial cresce até virar direito constitucional.",
    feedbackErro: "Comece pela Transamazônica (1970) e siga a cronologia.",
    falaFinal: "4 marcos, 18 anos: do avanço sobre terras à conquista de direitos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 6-D da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 6-D — Indígenas e quilombolas contra o desenvolvimentismo",
    paragrafos: [
      { id: "p1", texto: "O regime militar adotou um MODELO DESENVOLVIMENTISTA que via grandes obras — estradas, hidrelétricas, colonização da Amazônia — como sinal de progresso, frequentemente sem consultar as comunidades que já viviam nessas terras.", chaves: ["Modelo Desenvolvimentista"], definicoes: { "Modelo Desenvolvimentista": "Política que priorizava grandes obras de infraestrutura como símbolo de progresso, muitas vezes ignorando direitos de povos tradicionais." }, fotoUrl: imgTanqueDit },
      { id: "p2", texto: "A TRANSAMAZÔNICA (a partir de 1970) e a usina de ITAIPU (1975-1984) atingiram diretamente terras indígenas, trazendo desmatamento, doenças e deslocamentos forçados, como o dos Avá-Guarani no Paraná.", chaves: ["Transamazônica"], definicoes: { "Transamazônica": "Rodovia federal construída a partir de 1970 que cortou terras indígenas na Amazônia sem consulta prévia." }, fotoUrl: imgDiretas },
      { id: "p3", texto: "Em resposta, lideranças indígenas fundaram a UNI (União das Nações Indígenas) em 1980, articulando a defesa de terras em nível nacional. Comunidades QUILOMBOLAS também se organizaram para reivindicar reconhecimento de seus territórios tradicionais.", chaves: ["UNI"], definicoes: { UNI: "União das Nações Indígenas, primeira organização pan-indígena brasileira, fundada em 1980." }, fotoUrl: imgRes },
      { id: "p4", texto: "Essa mobilização teve resultado concreto na Constituição de 1988: o artigo 231 reconheceu os direitos originários dos indígenas sobre suas terras, e o artigo 68 do ADCT garantiu aos remanescentes de quilombos o direito à titulação de suas terras.", chaves: ["Constituição de 1988"], definicoes: { "Constituição de 1988": "Constituição que reconheceu, pela primeira vez, direitos territoriais de indígenas e quilombolas de forma ampla." }, fotoUrl: imgMpb },
    ],
    falaFinal: "Leitura concluída. A luta territorial de indígenas e quilombolas moldou direitos hoje garantidos por lei.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "obr", emoji: "🏗️", rotulo: "Grande obra" },
      { id: "org", emoji: "🪶", rotulo: "Organização indígena/quilombola" },
      { id: "dir", emoji: "📜", rotulo: "Conquista de direitos" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Transamazônica", emoji: "🛣️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Rodovia sobre terra indígena", emoji: "🌳", cor: "from-amber-600 to-slate-900" }, contexto: "1970.", pecaCertaId: "obr", feedbackAcerto: "Correto. Transamazônica = Grande obra.", feedbackErro: "É Grande obra." },
      { id: "r2", municipioA: { nome: "UNI (1980)", emoji: "🪶", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Lideranças indígenas unidas", emoji: "🤝", cor: "from-teal-600 to-slate-900" }, contexto: "Articulação nacional.", pecaCertaId: "org", feedbackAcerto: "Correto. UNI = Organização.", feedbackErro: "É Organização indígena/quilombola." },
      { id: "r3", municipioA: { nome: "Art. 231 da Constituição", emoji: "📜", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Direitos originários indígenas", emoji: "⚖️", cor: "from-cyan-600 to-slate-900" }, contexto: "1988.", pecaCertaId: "dir", feedbackAcerto: "Correto. Art. 231 = Conquista de direitos.", feedbackErro: "É Conquista de direitos." },
      { id: "r4", municipioA: { nome: "Usina de Itaipu", emoji: "💧", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Alagou terras dos Avá-Guarani", emoji: "🌊", cor: "from-amber-600 to-slate-900" }, contexto: "1975-1984.", pecaCertaId: "obr", feedbackAcerto: "Correto. Itaipu = Grande obra.", feedbackErro: "É Grande obra." },
      { id: "r5", municipioA: { nome: "Ailton Krenak", emoji: "🎤", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Discurso na Constituinte (1987)", emoji: "🏛️", cor: "from-teal-600 to-slate-900" }, contexto: "Ícone da luta indígena.", pecaCertaId: "org", feedbackAcerto: "Correto. Krenak = Organização/liderança indígena.", feedbackErro: "É Organização indígena/quilombola." },
      { id: "r6", municipioA: { nome: "Art. 68 do ADCT", emoji: "🏘️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Titulação de terras quilombolas", emoji: "📜", cor: "from-cyan-600 to-slate-900" }, contexto: "1988.", pecaCertaId: "dir", feedbackAcerto: "Correto. Art. 68 = Conquista de direitos.", feedbackErro: "É Conquista de direitos." },
    ],
    falaFinal: "6 rodadas. Você já separa obras, organização e conquistas de direitos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Impactos territoriais do desenvolvimentismo militar, por tipo de obra.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgTanqueDit,
    fatias: [
      { id: "es", rotulo: "Estradas (~45%)", emoji: "🛣️", percentual: 45, cor: "#b45309", descricao: "Transamazônica e outras rodovias abriram caminho para colonização e desmatamento em terras indígenas.", exemplos: ["🛣️ Transamazônica"] },
      { id: "hi", rotulo: "Hidrelétricas e colonização agrícola (~55%)", emoji: "💧", percentual: 55, cor: "#0369a1", descricao: "Usinas como Itaipu alagaram territórios tradicionais e programas de assentamento na Amazônia avançaram sobre terras indígenas e quilombolas sem regularização prévia.", exemplos: ["💧 Itaipu", "🌾 Colonização"] },
    ],
    falaFinal: "Estradas, hidrelétricas e colonização — o preço do 'progresso' recaiu sobre povos tradicionais.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "O modelo desenvolvimentista da ditadura priorizava:", opcoes: [
        { id: "a", texto: "Grandes obras, muitas vezes sem consulta a povos tradicionais.", correta: true },
        { id: "b", texto: "Consulta prévia obrigatória a todas as comunidades.", correta: false },
        { id: "c", texto: "Preservação ambiental acima de tudo.", correta: false },
      ], feedbackAcerto: "Correto. Grandes obras avançaram sobre territórios sem consulta.", feedbackErro: "Priorizava grandes obras, muitas vezes sem consulta prévia." },
      { id: "av2", pergunta: "A UNI, fundada em 1980, foi:", opcoes: [
        { id: "a", texto: "A primeira organização pan-indígena do Brasil.", correta: true },
        { id: "b", texto: "Um órgão do governo militar.", correta: false },
        { id: "c", texto: "Uma empresa de mineração.", correta: false },
      ], feedbackAcerto: "Correto. Uniu lideranças de diferentes povos.", feedbackErro: "Foi a primeira organização pan-indígena do país." },
      { id: "av3", pergunta: "Os quilombolas conquistaram direito à titulação de suas terras:", opcoes: [
        { id: "a", texto: "Na Constituição de 1988.", correta: true },
        { id: "b", texto: "No golpe de 1964.", correta: false },
        { id: "c", texto: "Nunca conquistaram esse direito.", correta: false },
      ], feedbackAcerto: "Correto. Artigo 68 do ADCT.", feedbackErro: "Foi na Constituição de 1988." },
    ],
    selo: { nome: "EF09HI21", subtitulo: "Indígenas, quilombolas e desenvolvimentismo", emoji: "🪶", cor: "from-teal-500 to-slate-900", fotoUrl: imgRes },
    falaFinal: "Você entende o custo territorial do desenvolvimentismo e a força da luta indígena e quilombola.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Território e Resistência" },

};
