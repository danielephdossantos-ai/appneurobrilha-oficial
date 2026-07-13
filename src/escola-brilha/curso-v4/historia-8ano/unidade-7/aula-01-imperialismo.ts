import type { AulaGeoV1 } from "../../types";
import imgBerlim from "@/assets/historia-8ano/u7-conferencia-berlim.jpg";
import imgAfrica from "@/assets/historia-8ano/u7-imperialismo-africa.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-imperialismo",
  titulo: "O Imperialismo e a Partilha do Mundo",
  iconeTrilha: "🗺️",
  bncc: ["EF08HI25", "EF08HI26", "EF08HI27"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgBerlim,
    imagemDestaqueUrl: imgAfrica,
    aurora:
      "1884. Berlim. Diplomatas europeus se reúnem em torno de um mapa da África — SEM UM ÚNICO AFRICANO PRESENTE. Riscam fronteiras com régua e transformam o continente em COLÔNIAS. Em 20 anos, quase toda a África e boa parte da Ásia estão sob controle europeu. Chamam isso de 'levar a civilização'. Chamamos hoje de IMPERIALISMO.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem 7: O Cetro Global.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Por que a Europa PRECISOU tanto de colônias no final do século XIX?",
    pergunta: "Qual foi a motivação principal do Imperialismo?",
    fotoUrl: imgAfrica,
    opcoes: [
      { id: "ind", titulo: "MATÉRIA-PRIMA + MERCADO + LUCRO", subtitulo: "combustível da 2ª Rev. Industrial", emoji: "⚙️", cor: "from-teal-800 to-slate-950" },
      { id: "boa", titulo: "AJUDAR OS POVOS COLONIZADOS", subtitulo: "missão civilizatória altruísta", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "ind",
    feedbackAcerto:
      "Correto. A 2ª Revolução Industrial (aço, elétrica, química) precisava de MATÉRIAS-PRIMAS (borracha, cobre, algodão, ouro), MERCADOS pra vender produtos e ÁREAS pra investir capital. A 'missão civilizatória' era o discurso; o motor era o LUCRO.",
    feedbackErro:
      "Não. A 'missão civilizatória' foi o discurso de fachada. O motor real era ECONÔMICO: matérias-primas baratas, mercados consumidores e investimento de capital. E também rivalidade geopolítica entre potências europeias.",
    falaFinal: "Discurso: civilização. Motor real: lucro industrial.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos do Imperialismo.",
    instrucao: "",
    cadernos: [
      { id: "imp", capa: "Imperialismo", emoji: "🗺️", cor: "from-teal-700 to-slate-900", fotoUrl: imgBerlim, conteudo: "IMPERIALISMO foi a expansão das potências europeias (+EUA e Japão) sobre Ásia, África e Oceania (1870-1914). Domínio POLÍTICO, ECONÔMICO, MILITAR e CULTURAL. Objetivo real: matérias-primas, mercados, capital e prestígio.", exemplo: "Exemplo: em 1880, a Europa controlava 10% da África. Em 1914, 90%. Só Etiópia e Libéria seguiram independentes." },
      { id: "ber", capa: "Conferência de Berlim", emoji: "🏛️", cor: "from-amber-700 to-slate-900", fotoUrl: imgBerlim, conteudo: "CONFERÊNCIA DE BERLIM (1884-1885) reuniu 14 potências europeias pra dividir a África — sem nenhum africano. Estabeleceu regras: quem ocupasse EFETIVAMENTE o território, ficava com ele. Deu início à 'CORRIDA COLONIAL'.", exemplo: "Exemplo: as fronteiras traçadas na conferência ignoraram povos, línguas, culturas e reinos africanos. Muitos conflitos étnicos atuais têm origem nessas linhas artificiais." },
      { id: "civ", capa: "'Missão Civilizatória'", emoji: "🎭", cor: "from-cyan-700 to-slate-900", fotoUrl: imgAfrica, conteudo: "MISSÃO CIVILIZATÓRIA foi a IDEOLOGIA usada para justificar o Imperialismo. Baseava-se em teorias racistas (darwinismo social) que colocavam europeus como 'superiores' encarregados de 'civilizar' outros povos.", exemplo: "Exemplo: o poema 'O Fardo do Homem Branco' (Kipling, 1899) representa essa mentalidade — pintar a colonização brutal como 'sacrifício' civilizador." },
      { id: "res", capa: "Resistência", emoji: "✊", cor: "from-slate-700 to-slate-900", fotoUrl: imgAfrica, conteudo: "RESISTÊNCIA A colonização foi FEROZ. Guerras Zulus (África do Sul), Revolta dos Boxers (China), Guerra do Ópio, resistência etíope em Adwa (1896 — única grande vitória africana da época). Mostrou que 'civilizar' foi eufemismo pra CONQUISTAR.", exemplo: "Exemplo: em 1896, o exército etíope derrotou o italiano na BATALHA DE ADWA. Etiópia manteve independência até 1936." },
    ],
    falaFinal: "Imperialismo + Berlim + Ideologia + Resistência. Peças de uma engrenagem global.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico da partilha da África (~1914).",
    instrucao: "Toque nos pontos",
    mapaUrl: imgBerlim,
    pontos: [
      { id: "br", x: 25, y: 30, emoji: "🇬🇧", cor: "from-teal-700 to-slate-900", fotoUrl: imgAfrica, titulo: "IMPÉRIO BRITÂNICO", texto: "Do Cairo à Cidade do Cabo: Egito, Sudão, Quênia, Rodésia, África do Sul. Sonho de eixo norte-sul. Colônias na Índia, Austrália, Canadá, Nigéria." },
      { id: "fr", x: 55, y: 30, emoji: "🇫🇷", cor: "from-amber-700 to-slate-900", fotoUrl: imgBerlim, titulo: "IMPÉRIO FRANCÊS", texto: "Grande parte do Oeste e Norte da África: Argélia, Marrocos, Tunísia, Senegal, Costa do Marfim, Madagáscar. Também Indochina (Vietnã)." },
      { id: "bp", x: 80, y: 55, emoji: "🇧🇪", cor: "from-cyan-700 to-slate-900", fotoUrl: imgAfrica, titulo: "CONGO BELGA (Leopoldo II)", texto: "Propriedade PESSOAL do rei belga por 20 anos. Extração brutal de borracha com trabalho forçado. Estima-se que 10 milhões de congoleses morreram." },
      { id: "et", x: 45, y: 75, emoji: "🇪🇹", cor: "from-slate-700 to-slate-900", fotoUrl: imgAfrica, titulo: "ETIÓPIA (independente)", texto: "Única grande nação africana a resistir com sucesso. Vitória em Adwa (1896) contra a Itália. Símbolo pan-africano." },
    ],
    falaFinal: "Um continente inteiro riscado em Berlim. Impacto que dura até hoje.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "A CONFERÊNCIA DE BERLIM (1884-85) foi convocada para:", fotoUrl: imgBerlim, cards: [ { id: "a", emoji: "🗺️", titulo: "Dividir a África entre europeus", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "🕊️", titulo: "Libertar a África", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🎓", titulo: "Discutir educação", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. Dividir a África — sem UM africano presente.", feedbackErro: "Foi para DIVIDIR A ÁFRICA entre potências europeias." },
      { id: "q2", pergunta: "Qual foi o principal MOTOR ECONÔMICO do Imperialismo?", fotoUrl: imgAfrica, cards: [ { id: "a", emoji: "⚙️", titulo: "2ª Revolução Industrial", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "🕍", titulo: "Cruzadas religiosas", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "☕", titulo: "Comércio de café", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. 2ª Rev. Industrial precisava de matérias-primas, mercados e capital.", feedbackErro: "É a 2ª REVOLUÇÃO INDUSTRIAL — matérias-primas, mercados, capital." },
      { id: "q3", pergunta: "Qual país africano derrotou os europeus em ADWA (1896)?", fotoUrl: imgAfrica, cards: [ { id: "e", emoji: "🇪🇹", titulo: "Etiópia", cor: "from-teal-600 to-slate-900" }, { id: "n", emoji: "🇳🇬", titulo: "Nigéria", cor: "from-amber-600 to-slate-900" }, { id: "e2", emoji: "🇪🇬", titulo: "Egito", cor: "from-slate-600 to-slate-900" } ], correta: "e", feedbackAcerto: "Correto. ETIÓPIA venceu a Itália em 1896.", feedbackErro: "Foi a ETIÓPIA — derrotou a Itália em Adwa (1896)." },
    ],
    falaFinal: "Radar afiado. Você já lê o Imperialismo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre a colônia: quem ganhava e quem perdia.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgAfrica,
    camadas: [
      { id: "eur", rotulo: "Colonizadores europeus", emoji: "🇬🇧", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 35 }, descricao: "Extraíram matérias-primas baratas (borracha, cobre, ouro, diamantes, algodão), abriram mercado para produtos industriais europeus, expandiram o capital financeiro." },
      { id: "col", rotulo: "Povos colonizados", emoji: "✊", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 35 }, descricao: "Perderam terras, autonomia política, línguas, culturas. Foram submetidos a trabalho forçado, massacres e à imposição da religião e educação europeias. Milhões de mortos." },
    ],
    falaFinal: "Colonizadores acumularam capital. Colonizados pagaram em vidas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos do Imperialismo.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos do Imperialismo",
    paradas: [
      { id: "ind", emoji: "⚙️", rotulo: "1. 2ª Rev. Industrial (1870+)", fotoUrl: imgAfrica, descricao: "Aço, elétrica, química, motor a explosão." },
      { id: "ber", emoji: "🏛️", rotulo: "2. Conferência de Berlim (1884)", fotoUrl: imgBerlim, descricao: "Potências dividem a África com régua e mapa." },
      { id: "adw", emoji: "⚔️", rotulo: "3. Batalha de Adwa (1896)", fotoUrl: imgAfrica, descricao: "Etiópia derrota a Itália. Resistência africana." },
      { id: "gm1", emoji: "💥", rotulo: "4. I Guerra Mundial (1914)", fotoUrl: imgBerlim, descricao: "Rivalidades imperialistas explodem na Europa." },
    ],
    ordemCerta: ["ind", "ber", "adw", "gm1"],
    feedbackAcerto: "Perfeito. Indústria → Berlim → Adwa → Guerra Mundial.",
    feedbackErro: "Essa não é a próxima. Comece pela 2ª Rev. Industrial (1870+).",
    falaFinal: "Quatro marcos. O caminho da corrida imperial à Grande Guerra.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 7 das Engrenagens — a última!",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 7 — O Cetro Global",
    paragrafos: [
      { id: "p1", texto: "No final do século XIX, a 2ª REVOLUÇÃO INDUSTRIAL transformou a produção europeia: aço, eletricidade, química, motor a explosão. As indústrias precisavam de MATÉRIAS-PRIMAS baratas (borracha, cobre, algodão, ouro) e MERCADOS pra vender. Começou o IMPERIALISMO — expansão europeia sobre Ásia, África e Oceania.", chaves: ["Imperialismo"], definicoes: { "Imperialismo": "Expansão política, econômica, militar e cultural das potências industriais sobre Ásia, África e Oceania (1870-1914)." }, fotoUrl: imgAfrica },
      { id: "p2", texto: "Em 1884-1885, a CONFERÊNCIA DE BERLIM reuniu 14 potências para dividir a África — sem UM africano presente. Estabeleceu que quem ocupasse efetivamente um território ficaria com ele. Em 30 anos, a Europa passou a controlar 90% do continente africano. Só ETIÓPIA e LIBÉRIA permaneceram independentes.", chaves: ["Conferência de Berlim"], definicoes: { "Conferência de Berlim": "Encontro (1884-85) das potências europeias para dividir a África sem consultar seus povos." }, fotoUrl: imgBerlim },
      { id: "p3", texto: "O discurso era 'MISSÃO CIVILIZATÓRIA' — europeus 'levando' civilização, cristianismo e progresso a povos 'inferiores'. Era ideologia RACISTA baseada em DARWINISMO SOCIAL. A realidade era brutal: no CONGO BELGA, propriedade pessoal do rei Leopoldo II, cerca de 10 milhões de congoleses morreram na extração de borracha.", chaves: ["Missão Civilizatória"], definicoes: { "Missão Civilizatória": "Ideologia racista usada para justificar o Imperialismo — pintar exploração como 'ajuda civilizadora'." }, fotoUrl: imgAfrica },
      { id: "p4", texto: "Houve RESISTÊNCIA em toda parte: Zulus na África do Sul, Boxers na China, Guerra do Ópio, Sepoy na Índia. Em 1896, a BATALHA DE ADWA marcou vitória etíope contra a Itália. As rivalidades imperialistas entre potências europeias — corrida por colônias, corrida armamentista, alianças militares — foram diretamente responsáveis pela eclosão da PRIMEIRA GUERRA MUNDIAL em 1914.", chaves: ["Batalha de Adwa"], definicoes: { "Batalha de Adwa": "Vitória etíope contra a Itália (1896). Marco da resistência africana ao imperialismo." }, fotoUrl: imgAfrica },
    ],
    falaFinal: "Leitura concluída. Você já vê como o mundo moderno foi desenhado — com régua europeia e sangue colonizado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão: classifique cada elemento em IMPERIALISMO (motor), CONFERÊNCIA DE BERLIM ou RESISTÊNCIA.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "mot", emoji: "⚙️", rotulo: "Motor imperialista" },
      { id: "ber", emoji: "🏛️", rotulo: "Conferência de Berlim" },
      { id: "res", emoji: "✊", rotulo: "Resistência" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Fábricas europeias precisam de borracha", emoji: "🌳", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Busca por matérias-primas baratas", emoji: "💰", cor: "from-teal-600 to-slate-900" }, contexto: "Motivação econômica central.", pecaCertaId: "mot", feedbackAcerto: "Correto. Matérias-primas = MOTOR IMPERIALISTA.", feedbackErro: "É MOTOR IMPERIALISTA — busca por matérias-primas." },
      { id: "r2", municipioA: { nome: "14 potências reunidas em 1884", emoji: "🗺️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Divisão da África sem africanos", emoji: "📐", cor: "from-amber-600 to-slate-900" }, contexto: "Regra: quem ocupa, fica.", pecaCertaId: "ber", feedbackAcerto: "Correto. Reunião = CONFERÊNCIA DE BERLIM.", feedbackErro: "É CONFERÊNCIA DE BERLIM (1884-1885)." },
      { id: "r3", municipioA: { nome: "Batalha de Adwa (1896)", emoji: "⚔️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Vitória etíope contra a Itália", emoji: "🇪🇹", cor: "from-cyan-600 to-slate-900" }, contexto: "Etiópia mantém independência.", pecaCertaId: "res", feedbackAcerto: "Correto. Adwa = RESISTÊNCIA africana.", feedbackErro: "É RESISTÊNCIA — Etiópia derrota a Itália." },
      { id: "r4", municipioA: { nome: "Necessidade de novos mercados consumidores", emoji: "🛒", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Vender produtos industriais europeus", emoji: "🏭", cor: "from-teal-600 to-slate-900" }, contexto: "Superprodução industrial precisa escoar.", pecaCertaId: "mot", feedbackAcerto: "Correto. Mercado consumidor = MOTOR IMPERIALISTA.", feedbackErro: "É MOTOR IMPERIALISTA — busca de mercados." },
      { id: "r5", municipioA: { nome: "Fronteiras traçadas com régua em Berlim", emoji: "📏", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Regra da ocupação efetiva", emoji: "📜", cor: "from-amber-600 to-slate-900" }, contexto: "Ignorava povos, línguas e culturas.", pecaCertaId: "ber", feedbackAcerto: "Correto. Fronteiras = CONFERÊNCIA DE BERLIM.", feedbackErro: "É CONFERÊNCIA DE BERLIM — fronteiras artificiais." },
      { id: "r6", municipioA: { nome: "Revolta dos Boxers na China (1900)", emoji: "🥋", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Levante popular contra estrangeiros", emoji: "🐉", cor: "from-cyan-600 to-slate-900" }, contexto: "Chineses contra domínio ocidental.", pecaCertaId: "res", feedbackAcerto: "Correto. Boxers = RESISTÊNCIA asiática.", feedbackErro: "É RESISTÊNCIA — revolta chinesa contra o imperialismo." },
    ],
    falaFinal: "6 rodadas! Você já lê o Imperialismo em suas peças-chave.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do mundo em 1914: potências imperialistas x povos colonizados.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgAfrica,
    fatias: [
      { id: "pot", rotulo: "Potências imperialistas", emoji: "🇬🇧", percentual: 20, cor: "#b45309", descricao: "Reino Unido, França, Alemanha, Bélgica, Itália, Portugal, Espanha, Holanda, EUA, Japão. Detinham capital, indústria e força militar.", exemplos: ["🇬🇧 Reino Unido", "🇫🇷 França", "🇺🇸 EUA"] },
      { id: "col", rotulo: "Povos colonizados", emoji: "🌍", percentual: 80, cor: "#0f766e", descricao: "África, Ásia e Oceania. Submetidos a domínio político, exploração econômica, imposição cultural e trabalho forçado.", exemplos: ["🌍 África", "🌏 Ásia", "🏝️ Oceania"] },
    ],
    falaFinal: "20% do mundo dominava 80%. Esse é o mapa que a I Guerra vai começar a rachar.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra fechar A ENGRENAGEM DA LIBERDADE.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgBerlim,
    perguntas: [
      { id: "av1", pergunta: "A CONFERÊNCIA DE BERLIM (1884-85) reuniu potências europeias para:", opcoes: [ { id: "a", texto: "Libertar a África.", correta: false }, { id: "b", texto: "Dividir a África entre elas, sem consultar os povos africanos.", correta: true }, { id: "c", texto: "Debater direitos humanos.", correta: false } ], feedbackAcerto: "Correto. Divisão sem UM africano presente.", feedbackErro: "Foi para DIVIDIR A ÁFRICA sem consultar seus povos." },
      { id: "av2", pergunta: "O motor econômico REAL do Imperialismo era:", opcoes: [ { id: "a", texto: "Levar a civilização a povos 'inferiores'.", correta: false }, { id: "b", texto: "Matérias-primas, mercados e capital para a 2ª Revolução Industrial.", correta: true }, { id: "c", texto: "Combater o comunismo.", correta: false } ], feedbackAcerto: "Correto. Civilização era discurso; motor era ECONÔMICO.", feedbackErro: "Era ECONÔMICO — matérias-primas, mercados, capital. 'Civilização' era discurso." },
      { id: "av3", pergunta: "Qual nação africana venceu os europeus em ADWA (1896)?", opcoes: [ { id: "a", texto: "Etiópia.", correta: true }, { id: "b", texto: "Egito.", correta: false }, { id: "c", texto: "África do Sul.", correta: false } ], feedbackAcerto: "Correto. ETIÓPIA — derrotou a Itália e manteve independência.", feedbackErro: "É a ETIÓPIA — vitória em Adwa contra os italianos." },
    ],
    selo: { nome: "O Cetro Global", subtitulo: "Engrenagem 7 das Liberdades", emoji: "🗺️", cor: "from-teal-500 to-slate-900", fotoUrl: imgBerlim },
    falaFinal: "TODAS AS 7 ENGRENAGENS DESTRAVADAS! Você percorreu Iluminismo → Indústria → Rev. Francesa → Napoleão → Independências → Brasil Imperial → Imperialismo. A mesa está posta para o 9º Ano.",
  },

  recompensa: { xp: 700, moedas: 600, medalha: "O Cetro Global" },
};
