import type { AulaGeoV1 } from "../../types";
import { url as arendtImg } from "@/assets/filosofia-9ano/u6-arendt.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 6 · Aula 01
 * "A Banalidade do Mal e a Ação Política" — EF09FI06 (autoral)
 * Tema: Filosofia Política Atual — Hannah Arendt.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-filosofia-politica-atual",
  titulo: "A Banalidade do Mal e a Ação Política",
  iconeTrilha: "🏛️",
  bncc: ["EF09FI06"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: arendtImg,
    imagemDestaqueUrl: arendtImg,
    aurora:
      "Investigador, esta é Hannah Arendt — filósofa alemã, judia, refugiada do nazismo. Em 1961, ela viaja a Jerusalém pra cobrir o julgamento de Adolf Eichmann, burocrata nazista responsável pela deportação de milhões pra campos de concentração. Ela esperava encontrar um monstro. Encontrou um homem MEDÍOCRE, obediente, que apenas 'cumpria ordens' e não pensava no que fazia. Nasce um conceito devastador: a BANALIDADE DO MAL. Mal moderno não precisa de perversos — precisa de gente que deixa de PENSAR.",
    falaFinal:
      "Nesta aula você entra em Arendt. Três chaves: banalidade do mal, ação e esfera pública.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: como o MAL EXTREMO acontece nas sociedades modernas?",
    pergunta: "Genocídios e crimes de massa acontecem principalmente porque…",
    opcoes: [
      { id: "obediencia", titulo: "Muita gente OBEDECE sem pensar", subtitulo: "burocratas normais que não questionam ordens", emoji: "📋", cor: "from-slate-400 to-gray-600" },
      { id: "monstros", titulo: "Uns poucos MONSTROS excepcionais", subtitulo: "psicopatas raros que forçam todos", emoji: "👹", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "obediencia",
    feedbackAcerto: "Boa. Arendt viu isso em Eichmann: obediência sem pensamento é a máquina do mal moderno.",
    feedbackErro: "Se dependesse só de monstros, seriam raros. Arendt mostra que o mal precisa é de gente 'normal' que não pensa.",
    falaFinal: "Mal moderno = ausência de pensamento em muita gente comum.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave de Arendt.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "banalidade", capa: "1. Banalidade do mal", emoji: "📋", cor: "from-slate-500 to-gray-700", conteudo: "BANALIDADE DO MAL é a tese de Arendt sobre Eichmann: o mal em escala industrial não precisa de perversos geniais — precisa de burocratas obedientes que perderam a capacidade de PENSAR criticamente. Eichmann não odiava judeus; ele só queria fazer carreira. E foi isso que o tornou monstruoso.", exemplo: "Ex.: policial que dispara sem questionar; funcionário que aprova despejos sem olhar rosto.", fotoUrl: arendtImg },
      { id: "acao", capa: "2. Ação (vita activa)", emoji: "🌱", cor: "from-emerald-500 to-teal-700", conteudo: "AÇÃO, pra Arendt, é a atividade especificamente humana pela qual COMEÇAMOS algo novo em público, junto com outros. É diferente do TRABALHO (produzir bens de consumo) e da FABRICAÇÃO (produzir obras duráveis). Só a ação política — que sempre revela quem somos — nos torna plenamente humanos.", exemplo: "Ex.: um protesto onde pessoas com nomes e rostos falam por si mesmas — não apenas produzem nem consomem.", fotoUrl: arendtImg },
      { id: "esfera-publica", capa: "3. Esfera pública", emoji: "🏛️", cor: "from-fuchsia-500 to-purple-700", conteudo: "ESFERA PÚBLICA é o espaço comum onde cidadãos aparecem uns aos outros, debatem, deliberam e agem juntos. Sem esfera pública, a política vira administração e o cidadão vira consumidor. Arendt alerta: totalitarismo destrói a esfera pública porque impede o encontro livre entre iguais.", exemplo: "Ex.: uma assembleia estudantil, uma praça ocupada, um parlamento vivo — não um feed algorítmico.", fotoUrl: arendtImg },
    ],
    falaFinal: "Banalidade do mal, ação, esfera pública. As 3 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos do pensamento de Arendt.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: arendtImg,
    pontos: [
      { id: "1933-exilio", x: 22, y: 30, emoji: "✈️", cor: "from-slate-500 to-gray-700", titulo: "1933 — Fuga do nazismo", texto: "Judia alemã, Hannah Arendt é presa pela Gestapo por pesquisar antissemitismo. Foge da Alemanha, passa por França e chega aos EUA em 1941 como refugiada apátrida." },
      { id: "1951-totalitarismo", x: 74, y: 30, emoji: "📕", cor: "from-red-500 to-rose-700", titulo: "1951 — Origens do Totalitarismo", texto: "Livro monumental: analisa nazismo e stalinismo como fenômenos NOVOS, diferentes de tirania comum. Totalitarismo destrói a espontaneidade humana e a esfera pública." },
      { id: "1958-condicao", x: 26, y: 70, emoji: "🌱", cor: "from-emerald-500 to-teal-700", titulo: "1958 — A Condição Humana", texto: "Distingue TRABALHO, FABRICAÇÃO e AÇÃO. Só a ação política, que começa algo novo entre iguais, é plenamente humana. Modernidade tende a substituir ação por consumo — e aí perde a política." },
      { id: "1963-eichmann", x: 76, y: 70, emoji: "⚖️", cor: "from-fuchsia-500 to-purple-700", titulo: "1963 — Eichmann em Jerusalém", texto: "Cunha a BANALIDADE DO MAL. Descobre que o mal extremo pode brotar da simples ausência de pensamento em pessoas medíocres. Livro escandalizou — e virou clássico obrigatório." },
    ],
    falaFinal: "1933 → 1951 → 1958 → 1963. A voz que atravessou o século.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "BANALIDADE DO MAL, em Arendt, quer dizer que…", cards: [
        { id: "burocrata", emoji: "📋", titulo: "O mal extremo pode brotar de burocratas obedientes que deixam de pensar", cor: "from-slate-500 to-gray-700" },
        { id: "monstro", emoji: "👹", titulo: "Só psicopatas raros são capazes de crimes coletivos", cor: "from-red-400 to-rose-600" },
        { id: "acidente", emoji: "🎲", titulo: "O mal é sempre resultado do acaso", cor: "from-amber-400 to-orange-600" },
      ], correta: "burocrata", feedbackAcerto: "Isso. Mal moderno = obediência sem pensamento.", feedbackErro: "Arendt inverteu: o mal precisa é de gente normal que não pensa." },
      { id: "q2", pergunta: "AÇÃO, na vita activa, é…", cards: [
        { id: "comecar", emoji: "🌱", titulo: "Começar algo novo em público, junto com outros", cor: "from-emerald-500 to-teal-700" },
        { id: "trabalho", emoji: "🛠️", titulo: "Apenas produzir bens materiais duráveis", cor: "from-slate-400 to-gray-600" },
        { id: "consumo", emoji: "🛒", titulo: "Consumir mercadorias no shopping", cor: "from-amber-400 to-orange-600" },
      ], correta: "comecar", feedbackAcerto: "Perfeito. Ação = começar algo novo em público.", feedbackErro: "Ação ≠ trabalho ≠ consumo. Ação é começo público." },
      { id: "q3", pergunta: "ESFERA PÚBLICA é…", cards: [
        { id: "espaco", emoji: "🏛️", titulo: "Espaço comum onde cidadãos aparecem, debatem e agem juntos", cor: "from-fuchsia-500 to-purple-700" },
        { id: "governo", emoji: "🏢", titulo: "Apenas os prédios oficiais do governo", cor: "from-slate-400 to-gray-600" },
        { id: "casa", emoji: "🏠", titulo: "O interior das casas e a vida familiar", cor: "from-amber-400 to-orange-600" },
      ], correta: "espaco", feedbackAcerto: "Isso. Esfera pública = encontro livre entre iguais.", feedbackErro: "Não é o prédio nem a casa: é o espaço comum de aparecimento cidadão." },
    ],
    falaFinal: "3 acertos = radar político calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Arendt é referência em ciência política e direitos humanos no Brasil. Acenda 5 estados.",
    instrucao: "Selecione 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "RS", "DF"], pergunta: "Quais 5 estados abrigam programas fortes em teoria política que dialogam com Arendt?" },
    falaFinal: "USP, UFRJ, UFMG, UFRGS e UnB. Arendt lida no Brasil todo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a banalidade do mal opera. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do obediente ao genocídio, segundo Arendt:",
    paradas: [
      { id: "sistema", emoji: "⚙️", rotulo: "1. Sistema totalitário se instala", descricao: "Regime destrói a esfera pública e institui ideologia única." },
      { id: "burocracia", emoji: "📋", rotulo: "2. Burocracia normal absorve o horror", descricao: "Ordens circulam por milhões de escritórios comuns." },
      { id: "obediencia", emoji: "🖇️", rotulo: "3. Cada um só cumpre sua parte", descricao: "Ninguém se vê responsável pelo todo — só pelo formulário." },
      { id: "nao-pensar", emoji: "🧠", rotulo: "4. Deixa-se de pensar", descricao: "Substituição do juízo próprio por 'ordens são ordens' e clichês." },
      { id: "mal-extremo", emoji: "🕯️", rotulo: "5. Mal extremo se realiza", descricao: "Sem pensamento e sem esfera pública, o crime coletivo se torna rotina administrativa." },
    ],
    ordemCerta: ["sistema", "burocracia", "obediencia", "nao-pensar", "mal-extremo"],
    feedbackAcerto: "Exato. Sistema → burocracia → obediência → não-pensar → mal extremo.",
    feedbackErro: "Ordem: sistema, burocracia, obediência, não-pensar, mal extremo.",
    falaFinal: "5 passos. Anatomia da banalidade do mal.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 6 — A banalidade do mal",
    paragrafos: [
      { id: "p1", texto: "Hannah Arendt fugiu do nazismo em 1933 e viveu como refugiada apátrida até 1951. Sua experiência marcou uma pergunta central: como sociedades civilizadas produziram, no século XX, sistemas de extermínio industrial? Sua resposta veio em três livros que se completam.", chaves: ["Arendt", "apátrida"] },
      { id: "p2", texto: "Em 'Origens do Totalitarismo' (1951), mostra que nazismo e stalinismo são fenômenos NOVOS, não simples tirania: destroem a espontaneidade humana e a esfera pública, transformando cidadãos em massa amorfa. Em 'A Condição Humana' (1958), distingue TRABALHO, FABRICAÇÃO e AÇÃO — só a ação política, que começa algo novo entre iguais, é plenamente humana.", chaves: ["totalitarismo", "ação"] },
      { id: "p3", texto: "Em 1961, cobre o julgamento de Eichmann em Jerusalém. Esperando encontrar um monstro, encontra um burocrata medíocre que 'só cumpria ordens'. Cunha a BANALIDADE DO MAL: o mal em escala industrial precisa menos de perversos geniais do que de gente comum que perdeu a capacidade de PENSAR criticamente.", chaves: ["Eichmann", "banalidade"] },
      { id: "p4", texto: "Hoje, quando algoritmos automatizam decisões, quando burocracias movem despejos e deportações, quando cidadãos viram consumidores desatentos, o alerta de Arendt vale mais do que nunca. Pensar, agir em público e sustentar a esfera comum são as três defesas contra a banalidade do mal.", chaves: ["algoritmo", "esfera pública"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR ARENDTIANO! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "banalidade", emoji: "📋", rotulo: "Banalidade do mal" },
      { id: "acao", emoji: "🌱", rotulo: "Ação política" },
      { id: "esfera", emoji: "🏛️", rotulo: "Esfera pública" },
      { id: "totalitario", emoji: "⛓️", rotulo: "Totalitarismo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'«Só cumpri ordens» diz o burocrata do sistema'", emoji: "📋", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Obediência sem pensamento", emoji: "📋", cor: "from-gray-400 to-slate-600" }, contexto: "Eichmann em Jerusalém.", pecaCertaId: "banalidade", feedbackAcerto: "Isso. BANALIDADE DO MAL — obediência sem juízo.", feedbackErro: "É BANALIDADE DO MAL: obediência sem pensamento." },
      { id: "r2", municipioA: { nome: "'Assembleia estudantil delibera com nomes e rostos'", emoji: "✋", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Começar algo novo em público", emoji: "🌱", cor: "from-teal-400 to-emerald-600" }, contexto: "Vita activa em ação.", pecaCertaId: "acao", feedbackAcerto: "Perfeito. AÇÃO — cidadãos aparecendo uns aos outros.", feedbackErro: "É AÇÃO POLÍTICA: começar algo novo entre iguais." },
      { id: "r3", municipioA: { nome: "'Praça vira palco de debate cidadão'", emoji: "🏛️", cor: "from-fuchsia-400 to-purple-600" }, municipioB: { nome: "Espaço comum de aparição", emoji: "🏛️", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Encontro livre entre iguais.", pecaCertaId: "esfera", feedbackAcerto: "Isso. ESFERA PÚBLICA — comum entre cidadãos.", feedbackErro: "É ESFERA PÚBLICA: espaço comum de aparição." },
      { id: "r4", municipioA: { nome: "'Regime destrói jornais, partidos e reunião livre'", emoji: "⛓️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Aniquilação do plural", emoji: "⛓️", cor: "from-rose-400 to-red-600" }, contexto: "Origens do totalitarismo.", pecaCertaId: "totalitario", feedbackAcerto: "Perfeito. TOTALITARISMO — massa uniforme, sem público.", feedbackErro: "É TOTALITARISMO: destrói pluralidade e esfera pública." },
      { id: "r5", municipioA: { nome: "'Algoritmo aprova despejos sem olhar rosto'", emoji: "💻", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Máquina obediente sem juízo", emoji: "📋", cor: "from-gray-400 to-slate-600" }, contexto: "Arendt no século XXI.", pecaCertaId: "banalidade", feedbackAcerto: "Isso. BANALIDADE DO MAL — versão algorítmica.", feedbackErro: "É BANALIDADE DO MAL: automação sem juízo humano." },
      { id: "r6", municipioA: { nome: "'Cidadão vira consumidor e some do espaço comum'", emoji: "🛒", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Esvaziamento do público", emoji: "🏛️", cor: "from-orange-400 to-red-600" }, contexto: "Modernidade que perde a política.", pecaCertaId: "esfera", feedbackAcerto: "Perfeito. ESFERA PÚBLICA se esvazia sem cidadão ativo.", feedbackErro: "É ESFERA PÚBLICA: quando cidadão vira só consumidor, ela some." },
    ],
    falaFinal: "6 casos, 4 conceitos. Arendt no seu radar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 modos de existir na vita activa.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "trabalho-fabricacao", rotulo: "TRABALHO + FABRICAÇÃO", emoji: "🛠️", percentual: 50, cor: "#64748b", descricao: "Trabalho sustenta a vida biológica (comer, faxinar); fabricação produz objetos duráveis (casa, livro, ponte). Necessárias — mas insuficientes. Sem a próxima fatia, viramos só produção e consumo.", exemplos: ["🍞 Pão do dia", "🏠 Construir casa", "📖 Escrever um livro"] },
      { id: "acao", rotulo: "AÇÃO (pluralidade)", emoji: "🌱", percentual: 50, cor: "#10b981", descricao: "Começar algo novo em público, junto com outros. Só a ação revela QUEM somos e sustenta a política. Sem ação, restam sobrevivência e obra — a esfera pública morre.", exemplos: ["🗳️ Assembleia cidadã", "📢 Protesto público", "🤝 Fundar movimento novo"] },
    ],
    falaFinal: "Trabalho/fabricação × ação. Arendt insiste na 2ª fatia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CIDADÃ DA ESFERA PÚBLICA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "BANALIDADE DO MAL, em Arendt, significa que…", opcoes: [
        { id: "a", texto: "O mal extremo pode brotar de pessoas comuns que obedecem sem pensar criticamente", correta: true },
        { id: "b", texto: "Só psicopatas raros e excepcionais praticam crimes coletivos", correta: false },
        { id: "c", texto: "O mal acontece apenas por acaso e nunca pode ser explicado", correta: false },
      ], feedbackAcerto: "Isso. Ausência de pensamento é a chave.", feedbackErro: "Nem monstros raros nem acaso: é obediência sem juízo." },
      { id: "av2", pergunta: "AÇÃO, na vita activa arendtiana, é…", opcoes: [
        { id: "a", texto: "Começar algo novo em público, entre iguais, revelando quem se é", correta: true },
        { id: "b", texto: "Apenas produzir bens materiais duráveis", correta: false },
        { id: "c", texto: "Consumir mercadorias no shopping", correta: false },
      ], feedbackAcerto: "Perfeito. Ação = começar algo novo em público.", feedbackErro: "Ação ≠ trabalho ≠ consumo. É começo público." },
      { id: "av3", pergunta: "ESFERA PÚBLICA, para Arendt, é…", opcoes: [
        { id: "a", texto: "O espaço comum de aparecimento onde cidadãos debatem, deliberam e agem juntos", correta: true },
        { id: "b", texto: "Apenas os prédios oficiais do Estado", correta: false },
        { id: "c", texto: "Somente o interior das casas e a vida familiar", correta: false },
      ], feedbackAcerto: "Isso. Espaço comum de aparição entre iguais.", feedbackErro: "Não é prédio nem casa: é espaço comum de aparição." },
    ],
    selo: { nome: "Cidadã da Esfera Pública", subtitulo: "Insígnia Hannah Arendt", emoji: "🏛️", cor: "from-fuchsia-400 to-purple-700" },
    falaFinal: "Insígnia conquistada! Você entrou no júri de Eichmann com Arendt.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cidadã da Esfera Pública" },
};
