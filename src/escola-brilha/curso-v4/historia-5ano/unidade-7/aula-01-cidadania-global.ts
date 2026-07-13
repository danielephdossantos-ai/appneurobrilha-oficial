import type { AulaGeoV1 } from "../../types";
import imgSol from "@/assets/historia-5ano/paineis-solares.jpg";
import imgParis from "@/assets/historia-5ano/acordo-paris.jpg";
import imgTerra from "@/assets/historia-5ano/planeta-terra.jpg";
import imgOds from "@/assets/historia-5ano/ods-17-cartaz.jpg";
import imgOnu from "@/assets/historia-5ano/onu-assembleia.jpg";

/**
 * História · 5º Ano · Unidade 7 · Aula 01
 * "Cidadania Global e Meio Ambiente: O Futuro do Planeta"
 * Restaura a Página 7: O Altar da Cidadania Planetária.
 * FINAL do curso — fecha o Memorial da Cidadania.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cidadania-global",
  titulo: "Cidadania Global e Meio Ambiente",
  iconeTrilha: "🌍",
  bncc: ["EF05HI09", "EF05HI10"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a LUPA sobre a foto da Terra vista do espaço. Não tem fronteiras. É UMA SÓ CASA pra 8 bilhões de pessoas.",
    mapaUrl: imgTerra,
    imagemDestaqueUrl: imgOds,
    aurora:
      "Pequeno Historiador, chegamos à última página do Memorial. E ela é sobre uma ideia gigante: CIDADANIA GLOBAL. Se o clima muda em um país, muda em todos. Se um oceano é poluído, todos sofrem.",
    falaFinal: "Nesta aula você acende a SÉTIMA e ÚLTIMA Tocha: O Altar da Cidadania Planetária.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando um país polui muito, isso afeta só ele?",
    pergunta: "Poluição respeita fronteiras?",
    fotoUrl: imgTerra,
    opcoes: [
      { id: "global", titulo: "Não. Afeta o planeta todo", subtitulo: "fumaça, oceano e clima são globais", emoji: "🌍", cor: "from-emerald-600 to-teal-800", fotoUrl: imgTerra },
      { id: "local", titulo: "Sim. Fica só naquele país", subtitulo: "cada um resolve o seu problema", emoji: "🗺️", cor: "from-slate-500 to-slate-700", fotoUrl: imgSol },
    ],
    respostaCerta: "global",
    feedbackAcerto: "Correto. Ar, oceanos e clima NÃO têm fronteira. Por isso os países precisam cooperar internacionalmente.",
    feedbackErro: "Não. Fumaça de fábrica na China chega até o Brasil pelo vento. Oceano poluído afeta peixes do mundo todo.",
    falaFinal: "Guarde essa ideia: CIDADANIA GLOBAL — meus atos aqui mudam o planeta inteiro.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas da cidadania planetária.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      { id: "cg", capa: "Cidadania Global", emoji: "🌍", cor: "from-emerald-600 to-teal-800", fotoUrl: imgTerra, conteudo: "CIDADANIA GLOBAL é entender que TODOS os seres humanos dividem o MESMO PLANETA. Problemas ambientais, sociais e sanitários não têm fronteira. Ações locais mudam o mundo inteiro.", exemplo: "Exemplo: separar o lixo em casa reduz a poluição dos oceanos a milhares de km." },
      { id: "ods", capa: "ODS / Agenda 2030", emoji: "🎯", cor: "from-amber-600 to-orange-800", fotoUrl: imgOds, conteudo: "ODS são os 17 OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL criados pela ONU em 2015. Formam a AGENDA 2030: metas globais pra acabar com pobreza, fome, desigualdade e proteger o planeta até 2030.", exemplo: "Exemplo: ODS 6 = água potável. ODS 13 = ação contra mudança climática. ODS 15 = vida terrestre." },
      { id: "sust", capa: "Desenvolvimento Sustentável", emoji: "♻️", cor: "from-sky-600 to-blue-800", fotoUrl: imgSol, conteudo: "DESENVOLVIMENTO SUSTENTÁVEL é crescer ECONOMICAMENTE respeitando os LIMITES da natureza. Usa energia limpa (solar, eólica), reduz desperdício e garante que as próximas gerações também tenham recursos.", exemplo: "Exemplo: substituir carvão por painel solar no telhado. Poluir menos, gerar energia limpa." },
    ],
    falaFinal: "Cidadania Global + ODS + Sustentabilidade. Trio que define o FUTURO do planeta.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o CARTAZ oficial da Agenda 2030 — os 17 Objetivos de Desenvolvimento Sustentável. Toque em cada objetivo.",
    instrucao: "Toque nos pontos do cartaz",
    mapaUrl: imgOds,
    pontos: [
      { id: "o1", x: 15, y: 20, emoji: "🚫", cor: "from-red-600 to-red-800", fotoUrl: imgOds, titulo: "ODS 1 — ERRADICAR A POBREZA", texto: "Acabar com a pobreza extrema no mundo até 2030. Metade da meta já foi cumprida globalmente." },
      { id: "o4", x: 60, y: 20, emoji: "📚", cor: "from-red-600 to-red-800", fotoUrl: imgOds, titulo: "ODS 4 — EDUCAÇÃO DE QUALIDADE", texto: "Educação inclusiva, equitativa e de qualidade pra TODAS as crianças, jovens e adultos." },
      { id: "o7", x: 32, y: 47, emoji: "☀️", cor: "from-yellow-600 to-yellow-800", fotoUrl: imgSol, titulo: "ODS 7 — ENERGIA LIMPA", texto: "Energia acessível, renovável e limpa. Solar, eólica, hidrelétrica. Menos carvão e petróleo." },
      { id: "o13", x: 47, y: 63, emoji: "🌡️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgTerra, titulo: "ODS 13 — AÇÃO CLIMÁTICA", texto: "Combater a mudança climática. Acordo de Paris (2015) une quase 200 países pra reduzir gases poluentes." },
    ],
    falaFinal: "17 objetivos. 1 planeta. Uma meta: 2030.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre cidadania global.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Como se chama a prática de consumir recursos com respeito aos limites da natureza?", fotoUrl: imgSol, cards: [{ id: "s", emoji: "♻️", titulo: "Desenvolvimento Sustentável", cor: "from-emerald-500 to-teal-700" }, { id: "e", emoji: "🏭", titulo: "Exploração acelerada", cor: "from-slate-500 to-slate-700" }, { id: "d", emoji: "💰", titulo: "Desmatamento", cor: "from-amber-500 to-orange-700" }], correta: "s", feedbackAcerto: "Correto. Desenvolvimento Sustentável.", feedbackErro: "É DESENVOLVIMENTO SUSTENTÁVEL." },
      { id: "q2", pergunta: "Quantos são os Objetivos de Desenvolvimento Sustentável da ONU?", fotoUrl: imgOds, cards: [{ id: "17", emoji: "🎯", titulo: "17", cor: "from-emerald-500 to-teal-700" }, { id: "5", emoji: "5️⃣", titulo: "5", cor: "from-amber-500 to-orange-700" }, { id: "100", emoji: "💯", titulo: "100", cor: "from-slate-500 to-slate-700" }], correta: "17", feedbackAcerto: "Correto. São 17 ODS na Agenda 2030.", feedbackErro: "São 17 ODS (Agenda 2030)." },
      { id: "q3", pergunta: "Qual acordo internacional (2015) une países pra combater a mudança climática?", fotoUrl: imgParis, cards: [{ id: "p", emoji: "🇫🇷", titulo: "Acordo de Paris", cor: "from-emerald-500 to-teal-700" }, { id: "b", emoji: "🇧🇷", titulo: "Acordo de Brasília", cor: "from-amber-500 to-orange-700" }, { id: "n", emoji: "❌", titulo: "Nenhum", cor: "from-slate-500 to-slate-700" }], correta: "p", feedbackAcerto: "Correto. Acordo de Paris (2015).", feedbackErro: "É o Acordo de Paris (2015)." },
    ],
    falaFinal: "Você já domina o vocabulário da cidadania planetária.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do cartaz da ODS: LOCAL x GLOBAL.",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgOds,
    camadas: [
      { id: "loc", rotulo: "Ações Locais", emoji: "🏠", cor: "from-emerald-600 to-teal-800", rect: { x: 0, y: 10, w: 50, h: 80 }, descricao: "O que VOCÊ pode fazer em casa: separar lixo, economizar água, andar de bicicleta, painel solar, evitar plástico descartável." },
      { id: "glob", rotulo: "Ações Globais", emoji: "🌐", cor: "from-sky-600 to-blue-800", rect: { x: 50, y: 10, w: 50, h: 80 }, descricao: "O que os PAÍSES fazem juntos: Acordo de Paris, Agenda 2030, conferências do clima (COPs), cooperação entre ONU e governos." },
    ],
    falaFinal: "Local + Global. Cada gesto conta. Cada país precisa cooperar.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as ações do MENOR pro MAIOR impacto ambiental.",
    instrucao: "Toque nas ações na ordem certa (menor impacto → maior)",
    pergunta: "Qual causa mais poluição?",
    paradas: [
      { id: "bike", emoji: "🚲", rotulo: "1. Ir de bicicleta", fotoUrl: imgSol, descricao: "Zero emissão. Melhor pro clima e pra saúde." },
      { id: "onibus", emoji: "🚌", rotulo: "2. Ônibus/metrô", fotoUrl: imgSol, descricao: "Divide a poluição entre muitas pessoas." },
      { id: "carro", emoji: "🚗", rotulo: "3. Carro elétrico compartilhado", fotoUrl: imgSol, descricao: "Emissão baixa, mas ainda usa energia." },
      { id: "avi", emoji: "✈️", rotulo: "4. Carro grande a gasolina sozinho", fotoUrl: imgTerra, descricao: "Maior emissão por pessoa transportada." },
    ],
    ordemCerta: ["bike", "onibus", "carro", "avi"],
    feedbackAcerto: "Perfeito. Bike → Ônibus → Carro elétrico → Carro a gasolina sozinho.",
    feedbackErro: "Essa não é a próxima. Pense: quem polui menos por pessoa?",
    falaFinal: "Suas escolhas de transporte pesam no clima do planeta.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 7 — última do Memorial. Toque nas palavras destacadas.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 7 — O Altar da Cidadania Planetária",
    paragrafos: [
      { id: "p1", texto: "CIDADANIA GLOBAL significa entender que todos os seres humanos dividem o MESMO PLANETA. Problemas do ar, do clima e dos oceanos não respeitam fronteiras — afetam TODA a humanidade.", chaves: ["Cidadania Global"], definicoes: { "Cidadania Global": "Consciência de que somos parte de UMA humanidade e um único planeta. Ações locais têm impacto mundial." }, fotoUrl: imgTerra },
      { id: "p2", texto: "Pra organizar a resposta, a ONU criou em 2015 a AGENDA 2030 com 17 OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL (ODS). Metas globais pra acabar com pobreza, fome, desigualdade e proteger o planeta até 2030.", chaves: ["Agenda 2030"], definicoes: { "Agenda 2030": "Compromisso mundial da ONU (2015) com 17 ODS pra transformar o planeta até 2030." }, fotoUrl: imgOds },
      { id: "p3", texto: "O ACORDO DE PARIS (2015) uniu quase 200 países pra reduzir gases poluentes e conter o aquecimento global. Painéis SOLARES, energia EÓLICA e reciclagem são armas do DESENVOLVIMENTO SUSTENTÁVEL.", chaves: ["Acordo de Paris"], definicoes: { "Acordo de Paris": "Tratado internacional de 2015 pra combater a mudança climática. Assinado por quase todos os países do mundo." }, fotoUrl: imgParis },
    ],
    falaFinal: "Leitura FINAL concluída. Você fecha o Memorial da Cidadania com a maior lição: cuidar do planeta é cuidar de TODOS.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão final! Cada rodada mostra uma ação. É SUSTENTÁVEL ou POLUENTE?",
    instrucao: "⏱️ Toque na classificação antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "s", emoji: "♻️", rotulo: "Sustentável" },
      { id: "p", emoji: "🏭", rotulo: "Poluente" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Painel solar no telhado", emoji: "☀️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Energia limpa e renovável", emoji: "⚡", cor: "from-emerald-500 to-teal-700" }, contexto: "Sol vira eletricidade.", pecaCertaId: "s", feedbackAcerto: "Correto. Solar = SUSTENTÁVEL.", feedbackErro: "Painel solar = SUSTENTÁVEL." },
      { id: "r2", municipioA: { nome: "Queimar plástico no lixo", emoji: "🔥", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Solta fumaça tóxica", emoji: "💨", cor: "from-orange-500 to-red-700" }, contexto: "Fumaça vai para o ar.", pecaCertaId: "p", feedbackAcerto: "Correto. Queimar plástico = POLUENTE.", feedbackErro: "Queimar plástico = POLUENTE." },
      { id: "r3", municipioA: { nome: "Separar lixo reciclável", emoji: "♻️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Papel, plástico, metal, vidro", emoji: "🗑️", cor: "from-emerald-500 to-teal-700" }, contexto: "Materiais reaproveitados.", pecaCertaId: "s", feedbackAcerto: "Correto. Reciclagem = SUSTENTÁVEL.", feedbackErro: "Separar lixo = SUSTENTÁVEL." },
      { id: "r4", municipioA: { nome: "Desmatar floresta", emoji: "🪓", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Retira árvores nativas", emoji: "🌳", cor: "from-orange-500 to-red-700" }, contexto: "Destrói o habitat de espécies.", pecaCertaId: "p", feedbackAcerto: "Correto. Desmatamento = POLUENTE.", feedbackErro: "Desmatar = destrói ecossistema = POLUENTE." },
      { id: "r5", municipioA: { nome: "Bicicleta pra escola", emoji: "🚲", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Zero emissão de CO₂", emoji: "🍃", cor: "from-emerald-500 to-teal-700" }, contexto: "Sem combustível fóssil.", pecaCertaId: "s", feedbackAcerto: "Correto. Bike = SUSTENTÁVEL.", feedbackErro: "Bike = zero emissão = SUSTENTÁVEL." },
      { id: "r6", municipioA: { nome: "Sacolinha plástica descartável", emoji: "🛍️", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Vai parar no oceano", emoji: "🌊", cor: "from-orange-500 to-red-700" }, contexto: "Demora 400 anos pra decompor.", pecaCertaId: "p", feedbackAcerto: "Correto. Plástico descartável = POLUENTE.", feedbackErro: "Plástico descartável = POLUENTE (400 anos no ambiente)." },
    ],
    falaFinal: "6 rodadas! Você já toma decisões conscientes pelo planeta.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza das energias globais: quanto usamos de FÓSSIL (poluente) vs RENOVÁVEL (limpa) no mundo?",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgSol,
    fatias: [
      { id: "fos", rotulo: "Fóssil (~70%)", emoji: "🛢️", percentual: 70, cor: "#b45309", descricao: "Petróleo, carvão, gás natural. Poluem o ar e causam aquecimento global. Meta é REDUZIR até 2030.", exemplos: ["🛢️ Petróleo", "⛏️ Carvão", "🔥 Gás"] },
      { id: "ren", rotulo: "Renovável (~30%)", emoji: "♻️", percentual: 30, cor: "#0f766e", descricao: "Solar, eólica, hidrelétrica. Limpas e infinitas. Meta é AUMENTAR pra pelo menos 50% até 2030.", exemplos: ["☀️ Solar", "💨 Eólica", "💧 Hidro"] },
    ],
    falaFinal: "Precisamos INVERTER essa pizza. Menos fóssil, mais renovável. Esse é o desafio da sua geração.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas FINAIS pra fechar o Memorial e ganhar o Globo de Cristal.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgTerra,
    perguntas: [
      { id: "av1", pergunta: "Como se chama a prática de consumir recursos respeitando os limites da natureza?", opcoes: [{ id: "a", texto: "Exploração industrial acelerada.", correta: false }, { id: "b", texto: "Desenvolvimento Sustentável.", correta: true }, { id: "c", texto: "Desmatamento programado.", correta: false }], feedbackAcerto: "Correto! Desenvolvimento Sustentável.", feedbackErro: "É DESENVOLVIMENTO SUSTENTÁVEL." },
      { id: "av2", pergunta: "Quantos são os Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030?", opcoes: [{ id: "a", texto: "17.", correta: true }, { id: "b", texto: "3.", correta: false }, { id: "c", texto: "100.", correta: false }], feedbackAcerto: "Correto! 17 ODS.", feedbackErro: "São 17 ODS." },
      { id: "av3", pergunta: "Qual acordo internacional (2015) une países pra combater a mudança climática?", opcoes: [{ id: "a", texto: "Acordo de Paris.", correta: true }, { id: "b", texto: "Acordo do Vaticano.", correta: false }, { id: "c", texto: "Acordo de Wall Street.", correta: false }], feedbackAcerto: "Correto! Acordo de Paris (2015).", feedbackErro: "É o Acordo de Paris." },
    ],
    selo: { nome: "Globo de Cristal do Memorial", subtitulo: "Insígnia FINAL do Memorial da Cidadania", emoji: "🌍", cor: "from-emerald-400 to-teal-600", fotoUrl: imgTerra },
    falaFinal: "MEMORIAL COMPLETO! Sete Tochas da Justiça acesas. Você é oficialmente um HISTORIADOR-CIDADÃO. Que a sua geração cuide bem do planeta.",
  },

  recompensa: { xp: 600, moedas: 500, medalha: "Globo de Cristal do Memorial" },
};
