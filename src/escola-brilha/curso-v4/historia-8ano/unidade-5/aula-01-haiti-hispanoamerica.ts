import type { AulaGeoV1 } from "../../types";
import imgHaiti from "@/assets/historia-8ano/u5-haiti-revolucao.jpg";
import imgBoli from "@/assets/historia-8ano/u5-bolivar-andes.jpg";

import imgToussaint from "@/assets/historia-8ano/u5-toussaint.jpg";
import imgSanmartin from "@/assets/historia-8ano/u5-san-martin.jpg";
import imgMapaInd from "@/assets/historia-8ano/u5-mapa-independencias.jpg";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-haiti-hispanoamerica",
  titulo: "Haiti e as Independências Hispano-Americanas",
  iconeTrilha: "🗽",
  bncc: ["EF08HI10", "EF08HI11"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgHaiti,
    imagemDestaqueUrl: imgBoli,
    aurora:
      "1791. Na colônia francesa de SÃO DOMINGOS (atual Haiti), centenas de milhares de escravizados se rebelam e derrotam três exércitos europeus. Em 1804, proclamam a INDEPENDÊNCIA — primeira nação da América Latina, PRIMEIRA REPÚBLICA NEGRA DO MUNDO. Poucos anos depois, o continente inteiro estava em chamas.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem 5: O Grito das Américas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Depois do Haiti (1804), quase todas as colônias espanholas se tornaram independentes entre 1810 e 1825. Por que TÃO RÁPIDO?",
    pergunta: "Qual foi o gatilho principal das independências hispano-americanas?",
    fotoUrl: imgToussaint,
    opcoes: [
      { id: "cri", titulo: "CRISE NA ESPANHA + IDEIAS ILUMINISTAS", subtitulo: "Napoleão invade a Espanha (1808)", emoji: "💥", cor: "from-teal-800 to-slate-950" },
      { id: "esp", titulo: "A ESPANHA LIBERTOU AS COLÔNIAS", subtitulo: "concedeu independência pacífica", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "cri",
    feedbackAcerto:
      "Correto. Em 1808, Napoleão invadiu a Espanha e depôs o rei. Sem governo legítimo em Madri, as elites CRIOULAS das colônias — inspiradas pelo Iluminismo e pelo exemplo dos EUA (1776) e Haiti (1804) — organizaram juntas de governo e depois exércitos de libertação.",
    feedbackErro:
      "Não. A Espanha resistiu com força: as independências foram GUERRAS. Elite crioula + apoio popular + inspiração externa (EUA, Haiti, França) somaram-se ao vácuo criado pela invasão napoleônica.",
    falaFinal: "Vácuo espanhol + ideias iluministas + Haiti como prova viva = fogo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos das independências americanas.",
    instrucao: "",
    cadernos: [
      { id: "hai", capa: "Revolução Haitiana", emoji: "✊🏿", cor: "from-teal-700 to-slate-900", fotoUrl: imgSanmartin, conteudo: "REVOLUÇÃO HAITIANA (1791-1804) foi a única revolta de pessoas escravizadas que resultou em INDEPENDÊNCIA. Liderada por Toussaint L'Ouverture, derrotou franceses, ingleses e espanhóis. Primeira república negra do mundo.", exemplo: "Exemplo: em 1804, o Haiti aboliu a escravidão décadas antes de qualquer outro país americano (Brasil só aboliria em 1888). Foi punido com bloqueio econômico das potências europeias." },
      { id: "cri", capa: "Elite Criolla", emoji: "🎩", cor: "from-amber-700 to-slate-900", fotoUrl: imgMapaInd, conteudo: "CRIOULOS (ou CRIOLLOS) eram descendentes de espanhóis nascidos na América. Ricos, educados, mas sem acesso aos cargos superiores — reservados aos ESPANHÓIS DE MADRI. Descontentes, lideraram as independências.", exemplo: "Exemplo: Simón Bolívar era criollo venezuelano — filho de família rica, estudou na Europa, voltou pra libertar a Grã-Colômbia." },
      { id: "bol", capa: "Simón Bolívar", emoji: "🗽", cor: "from-cyan-700 to-slate-900", fotoUrl: imgHaiti, conteudo: "SIMÓN BOLÍVAR (1783-1830) foi o principal líder militar da independência da América do Sul espanhola. Libertou Venezuela, Colômbia, Equador, Peru e Bolívia — que leva seu nome. Sonhava com uma grande PÁTRIA hispano-americana unificada.", exemplo: "Exemplo: em 1819, Bolívar cruzou os Andes com seu exército — feito militar comparado ao de Aníbal cruzando os Alpes." },
      { id: "san", capa: "San Martín", emoji: "⚔️", cor: "from-slate-700 to-slate-900", fotoUrl: imgBoli, conteudo: "JOSÉ DE SAN MARTÍN (1778-1850) libertou ARGENTINA, CHILE e parte do PERU pelo sul. Encontrou Bolívar em Guayaquil (1822); recuou pra deixar a coordenação final com Bolívar. Morreu no exílio, esquecido, na França.", exemplo: "Exemplo: em 1817, cruzou os Andes com 5 mil homens, derrotou os espanhóis em Chacabuco e libertou o Chile." },
    ],
    falaFinal: "Haiti + Criolla + Bolívar + San Martín. Uma independência em cascata.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico das independências da América Latina (1804-1825).",
    instrucao: "Toque nos pontos",
    mapaUrl: imgToussaint,
    pontos: [
      { id: "hai", x: 30, y: 25, emoji: "🇭🇹", cor: "from-teal-700 to-slate-900", fotoUrl: imgSanmartin, titulo: "HAITI (1804)", texto: "Primeira. Liderada por Toussaint L'Ouverture e Jean-Jacques Dessalines. Aboliu a escravidão. Primeira república negra do mundo." },
      { id: "arg", x: 25, y: 75, emoji: "🇦🇷", cor: "from-amber-700 to-slate-900", fotoUrl: imgMapaInd, titulo: "ARGENTINA (1816)", texto: "Congresso de Tucumán proclama a independência. San Martín será o principal general do sul do continente." },
      { id: "grc", x: 55, y: 40, emoji: "🇻🇪", cor: "from-cyan-700 to-slate-900", fotoUrl: imgHaiti, titulo: "GRÃ-COLÔMBIA (1819)", texto: "Bolívar reúne Venezuela, Colômbia e Equador em UMA nação. Sonho panamericano — fragmentado em 1830 após sua morte." },
      { id: "per", x: 80, y: 60, emoji: "🇵🇪", cor: "from-slate-700 to-slate-900", fotoUrl: imgBoli, titulo: "PERU e BOLÍVIA (1824-25)", texto: "Últimos redutos espanhóis. Batalha de Ayacucho (1824) sela a independência de toda a América do Sul espanhola." },
    ],
    falaFinal: "Vinte anos, um continente inteiro rasgado do controle espanhol.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual foi a PRIMEIRA nação independente da América Latina?", fotoUrl: imgToussaint, cards: [ { id: "h", emoji: "🇭🇹", titulo: "Haiti (1804)", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "🇧🇷", titulo: "Brasil (1822)", cor: "from-amber-600 to-slate-900" }, { id: "a", emoji: "🇦🇷", titulo: "Argentina (1816)", cor: "from-slate-600 to-slate-900" } ], correta: "h", feedbackAcerto: "Correto. Haiti, 1804 — 18 anos antes do Brasil.", feedbackErro: "É o HAITI (1804). Argentina veio em 1816, Brasil em 1822." },
      { id: "q2", pergunta: "Quem foi o principal líder militar da independência da AMÉRICA DO SUL espanhola?", fotoUrl: imgSanmartin, cards: [ { id: "b", emoji: "🗽", titulo: "Simón Bolívar", cor: "from-teal-600 to-slate-900" }, { id: "n", emoji: "🎩", titulo: "Napoleão", cor: "from-amber-600 to-slate-900" }, { id: "w", emoji: "🇺🇸", titulo: "George Washington", cor: "from-slate-600 to-slate-900" } ], correta: "b", feedbackAcerto: "Correto. Simón Bolívar — libertou 5 países.", feedbackErro: "É SIMÓN BOLÍVAR. Washington libertou os EUA; Napoleão dominou a Europa." },
      { id: "q3", pergunta: "As INDEPENDÊNCIAS HISPANO-AMERICANAS aconteceram principalmente entre:", fotoUrl: imgMapaInd, cards: [ { id: "a", emoji: "📅", titulo: "1810-1825", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "📆", titulo: "1500-1600", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🗓️", titulo: "1900-1950", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. Grande onda entre 1810 e 1825.", feedbackErro: "É 1810-1825. 1500-1600 foi a conquista; 1900-1950 é o século XX." },
    ],
    falaFinal: "Radar afiado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre as novas repúblicas: o que MUDOU e o que FICOU IGUAL.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgHaiti,
    camadas: [
      { id: "mud", rotulo: "O que MUDOU", emoji: "🗽", cor: "from-teal-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 35 }, descricao: "Fim do domínio espanhol. Repúblicas com constituições. Elite crioula assume o poder político. Fim de tributos coloniais para Madri." },
      { id: "seg", rotulo: "O que FICOU igual", emoji: "⛓️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 35 }, descricao: "Grande maioria da população (indígenas, negros escravizados, mestiços pobres) seguiu excluída. Terras concentradas. Só o Haiti aboliu escravidão logo; outros levaram décadas." },
    ],
    falaFinal: "Independência política. Mas desigualdade colonial em pé.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as independências americanas.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia americana",
    paradas: [
      { id: "eua", emoji: "🇺🇸", rotulo: "1. Estados Unidos (1776)", fotoUrl: imgBoli, descricao: "Primeira independência do continente." },
      { id: "hai", emoji: "🇭🇹", rotulo: "2. Haiti (1804)", fotoUrl: imgToussaint, descricao: "Primeira república negra do mundo." },
      { id: "arg", emoji: "🇦🇷", rotulo: "3. Argentina (1816)", fotoUrl: imgSanmartin, descricao: "Congresso de Tucumán." },
      { id: "ay", emoji: "⚔️", rotulo: "4. Ayacucho (1824)", fotoUrl: imgMapaInd, descricao: "Batalha final da independência sul-americana." },
    ],
    ordemCerta: ["eua", "hai", "arg", "ay"],
    feedbackAcerto: "Perfeito. EUA → Haiti → Argentina → Ayacucho.",
    feedbackErro: "Essa não é a próxima. Comece pelos EUA (1776).",
    falaFinal: "Quatro marcos. Meio século de independências americanas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 5 das Engrenagens.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 5 — O Grito das Américas",
    paragrafos: [
      { id: "p1", texto: "Em 1791, escravizados da colônia francesa de SÃO DOMINGOS iniciaram a única revolução escrava vitoriosa da história. Liderados por TOUSSAINT L'OUVERTURE e depois por Dessalines, derrotaram franceses, ingleses e espanhóis. Em 1804, proclamaram a INDEPENDÊNCIA DO HAITI — primeira nação da América Latina e primeira república negra do mundo.", chaves: ["Revolução Haitiana"], definicoes: { "Revolução Haitiana": "Revolta escrava vitoriosa (1791-1804) que criou o Haiti — primeira república negra do mundo." }, fotoUrl: imgHaiti },
      { id: "p2", texto: "As colônias espanholas assistiam ao Haiti com admiração — e a elite crioula com medo. Mas a INVASÃO NAPOLEÔNICA DA ESPANHA (1808) criou o vácuo perfeito. Sem rei legítimo em Madri, JUNTAS DE GOVERNO surgiram em Caracas, Buenos Aires, Bogotá. O caminho para a independência estava aberto.", chaves: ["Crioulos"], definicoes: { "Crioulos": "Descendentes de espanhóis nascidos na América — ricos, cultos, mas sem acesso aos cargos superiores. Lideraram as independências." }, fotoUrl: imgBoli },
      { id: "p3", texto: "SIMÓN BOLÍVAR pelo norte (Venezuela, Colômbia, Equador, Peru, Bolívia) e JOSÉ DE SAN MARTÍN pelo sul (Argentina, Chile, parte do Peru) travaram guerras longas e sangrentas contra a Espanha. Em 1824, a BATALHA DE AYACUCHO selou a independência de toda a América do Sul espanhola.", chaves: ["Simón Bolívar"], definicoes: { "Simón Bolívar": "Líder militar criollo que libertou Venezuela, Colômbia, Equador, Peru e Bolívia (que leva seu nome)." }, fotoUrl: imgToussaint },
      { id: "p4", texto: "Bolívar sonhou com uma grande PÁTRIA HISPANO-AMERICANA unificada — a Grã-Colômbia. Não durou: interesses regionais fragmentaram o continente em várias repúblicas. Ainda assim, em vinte anos, a Espanha perdeu quase todo o seu império. Mas as desigualdades coloniais — concentração de terras, exclusão indígena e negra — seguiram intocadas por décadas.", chaves: ["Batalha de Ayacucho"], definicoes: { "Batalha de Ayacucho": "Batalha final (1824, Peru) que selou a independência da América do Sul espanhola." }, fotoUrl: imgSanmartin },
    ],
    falaFinal: "Leitura concluída. Você já vê a onda de independências como sistema.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão: identifique cada país e seu ANO de independência.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "h", emoji: "🇭🇹", rotulo: "Haiti (1804)" },
      { id: "a", emoji: "🇦🇷", rotulo: "Argentina (1816)" },
      { id: "g", emoji: "🇻🇪", rotulo: "Grã-Colômbia (1819)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Primeira república negra do mundo", emoji: "✊🏿", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Aboliu a escravidão em 1804", emoji: "🕊️", cor: "from-teal-600 to-slate-900" }, contexto: "Ilha caribenha ex-colônia francesa.", pecaCertaId: "h", feedbackAcerto: "Correto. HAITI (1804).", feedbackErro: "É o HAITI (1804) — primeira república negra do mundo." },
      { id: "r2", municipioA: { nome: "Congresso de Tucumán (1816)", emoji: "📜", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Independência do Vice-Reino do Rio da Prata", emoji: "🏛️", cor: "from-amber-600 to-slate-900" }, contexto: "Buenos Aires era a capital.", pecaCertaId: "a", feedbackAcerto: "Correto. ARGENTINA (1816).", feedbackErro: "É a ARGENTINA (1816) — Congresso de Tucumán." },
      { id: "r3", municipioA: { nome: "União de Venezuela + Colômbia + Equador", emoji: "🗺️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Grande sonho de Bolívar", emoji: "🗽", cor: "from-cyan-600 to-slate-900" }, contexto: "Existiu de 1819 a 1830.", pecaCertaId: "g", feedbackAcerto: "Correto. GRÃ-COLÔMBIA (1819).", feedbackErro: "É a GRÃ-COLÔMBIA (1819) — projeto bolivariano." },
      { id: "r4", municipioA: { nome: "Toussaint L'Ouverture", emoji: "⚔️", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Líder da revolução escrava", emoji: "✊🏿", cor: "from-teal-600 to-slate-900" }, contexto: "General negro nascido escravizado.", pecaCertaId: "h", feedbackAcerto: "Correto. Liderou o HAITI (1804).", feedbackErro: "É líder do HAITI (1804)." },
      { id: "r5", municipioA: { nome: "José de San Martín cruza os Andes (1817)", emoji: "🏔️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "General argentino", emoji: "🎖️", cor: "from-amber-600 to-slate-900" }, contexto: "Liberta o Chile, avança sobre o Peru.", pecaCertaId: "a", feedbackAcerto: "Correto. San Martín é da ARGENTINA (1816).", feedbackErro: "É da ARGENTINA (1816) — general San Martín." },
      { id: "r6", municipioA: { nome: "Batalha de Boyacá (1819)", emoji: "⚔️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Vitória decisiva de Bolívar", emoji: "🏆", cor: "from-cyan-600 to-slate-900" }, contexto: "Ocorreu no atual território colombiano.", pecaCertaId: "g", feedbackAcerto: "Correto. Boyacá sela a GRÃ-COLÔMBIA (1819).", feedbackErro: "É da GRÃ-COLÔMBIA (1819) — vitória de Bolívar." },
    ],
    falaFinal: "6 rodadas! Você já organiza a onda de independências.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza pós-independência: elite crioula no poder x maioria excluída.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMapaInd,
    fatias: [
      { id: "cri", rotulo: "Crioulos (~20%)", emoji: "🎩", percentual: 20, cor: "#b45309", descricao: "Descendentes de espanhóis. Assumem o poder político e econômico. Donos das grandes fazendas e minas.", exemplos: ["🏛️ Presidentes", "💰 Latifundiários", "⚔️ Militares"] },
      { id: "exc", rotulo: "Maioria excluída (~80%)", emoji: "🤝", percentual: 80, cor: "#0f766e", descricao: "Indígenas, africanos escravizados, mestiços pobres. Continuaram sem direitos políticos, terras ou educação.", exemplos: ["🌾 Indígenas", "⛓️ Escravizados", "🌍 Mestiços"] },
    ],
    falaFinal: "Independência política. Estrutura colonial em pé.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgHaiti,
    perguntas: [
      { id: "av1", pergunta: "O HAITI (1804) foi a PRIMEIRA:", opcoes: [ { id: "a", texto: "Colônia inglesa da América.", correta: false }, { id: "b", texto: "Nação independente da América Latina e primeira república negra do mundo.", correta: true }, { id: "c", texto: "Monarquia americana.", correta: false } ], feedbackAcerto: "Correto. Primeira independência da América Latina, primeira república negra do mundo.", feedbackErro: "É a PRIMEIRA nação independente da América Latina e PRIMEIRA república negra do mundo." },
      { id: "av2", pergunta: "SIMÓN BOLÍVAR libertou principalmente:", opcoes: [ { id: "a", texto: "Estados Unidos.", correta: false }, { id: "b", texto: "Venezuela, Colômbia, Equador, Peru e Bolívia.", correta: true }, { id: "c", texto: "Brasil.", correta: false } ], feedbackAcerto: "Correto. Cinco países — Bolívia leva seu nome.", feedbackErro: "É VENEZUELA, COLÔMBIA, EQUADOR, PERU e BOLÍVIA." },
      { id: "av3", pergunta: "O GATILHO das independências hispano-americanas foi:", opcoes: [ { id: "a", texto: "A invasão napoleônica da Espanha (1808).", correta: true }, { id: "b", texto: "A criação da ONU.", correta: false }, { id: "c", texto: "A abolição da escravidão.", correta: false } ], feedbackAcerto: "Correto. Vácuo de poder + ideias iluministas + exemplo dos EUA e Haiti.", feedbackErro: "Foi a INVASÃO NAPOLEÔNICA DA ESPANHA (1808) — deixou as colônias sem rei legítimo." },
    ],
    selo: { nome: "O Grito das Américas", subtitulo: "Engrenagem 5 das Liberdades", emoji: "🗽", cor: "from-teal-500 to-slate-900", fotoUrl: imgBoli },
    falaFinal: "Engrenagem 5 destravada. O continente inteiro se libertou — mas o Brasil vai fazer o caminho diferente.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "O Grito das Américas" },
};
