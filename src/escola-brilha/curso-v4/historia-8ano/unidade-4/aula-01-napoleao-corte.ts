import type { AulaGeoV1 } from "../../types";
import imgNap from "@/assets/historia-8ano/u4-napoleao-batalha.jpg";
import imgFam from "@/assets/historia-8ano/u4-familia-real-embarque.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-napoleao-corte",
  titulo: "Napoleão e a Vinda da Corte para o Brasil",
  iconeTrilha: "🎩",
  bncc: ["EF08HI08", "EF08HI09"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgNap,
    imagemDestaqueUrl: imgFam,
    aurora:
      "1808. NAPOLEÃO BONAPARTE domina a Europa. Impõe o BLOQUEIO CONTINENTAL contra a Inglaterra: nenhum porto europeu pode comerciar com os ingleses. Portugal, aliado histórico da Inglaterra, se recusa. Napoleão manda invadir. A família real portuguesa foge — para o Brasil.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem 4: A Coroa em Fuga.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A Corte portuguesa desembarcou no Rio em 1808. Qual foi o EFEITO IMEDIATO disso no Brasil?",
    pergunta: "O que mudou no Brasil com a chegada da Corte?",
    fotoUrl: imgFam,
    opcoes: [
      { id: "abr", titulo: "ABERTURA DOS PORTOS", subtitulo: "fim do monopólio comercial português", emoji: "⚓", cor: "from-teal-800 to-slate-950" },
      { id: "nada", titulo: "NADA MUDOU", subtitulo: "seguimos como simples colônia", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "abr",
    feedbackAcerto:
      "Correto. Ainda em 1808, D. João VI decretou a ABERTURA DOS PORTOS ÀS NAÇÕES AMIGAS. Brasil pôde comerciar direto com Inglaterra, França e outros. Fim de séculos de monopólio comercial português.",
    feedbackErro:
      "Não. Mudou muito: abertura dos portos, criação do Banco do Brasil, imprensa régia, escolas médicas. Brasil deixou de ser colônia fechada.",
    falaFinal: "A fuga da Corte foi o começo do fim do pacto colonial.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos da era napoleônica e da vinda da Corte.",
    instrucao: "",
    cadernos: [
      { id: "nap", capa: "Era Napoleônica", emoji: "🎩", cor: "from-teal-700 to-slate-900", fotoUrl: imgNap, conteudo: "ERA NAPOLEÔNICA (1799-1815) foi o período em que Napoleão Bonaparte dominou boa parte da Europa. Espalhou (à força) ideias da Revolução Francesa: Código Civil, fim de privilégios feudais, meritocracia.", exemplo: "Exemplo: o CÓDIGO NAPOLEÔNICO (1804) tornou-se base do direito civil de muitos países, inclusive do próprio Brasil." },
      { id: "blo", capa: "Bloqueio Continental", emoji: "🚫", cor: "from-amber-700 to-slate-900", fotoUrl: imgNap, conteudo: "BLOQUEIO CONTINENTAL (1806) foi a proibição, por Napoleão, de qualquer país europeu comerciar com a INGLATERRA. Objetivo: quebrar economicamente o único inimigo que ele não conseguia derrotar militarmente.", exemplo: "Exemplo: Portugal se recusou a aderir — dependia do comércio inglês. Napoleão respondeu invadindo Portugal em novembro de 1807." },
      { id: "cor", capa: "Vinda da Corte", emoji: "⛵", cor: "from-cyan-700 to-slate-900", fotoUrl: imgFam, conteudo: "VINDA DA CORTE (1808) foi a fuga da família real portuguesa (~15 mil pessoas) do Porto de Lisboa até o Rio de Janeiro, escoltada pela Marinha inglesa. Primeira e única vez que um rei europeu governou de uma colônia.", exemplo: "Exemplo: D. João VI mudou o status do Brasil: em 1815 elevou-o a REINO UNIDO A PORTUGAL — não era mais mera colônia." },
      { id: "abr", capa: "Abertura dos Portos", emoji: "⚓", cor: "from-slate-700 to-slate-900", fotoUrl: imgFam, conteudo: "ABERTURA DOS PORTOS ÀS NAÇÕES AMIGAS (28/01/1808) foi o primeiro decreto de D. João no Brasil. Fim do MONOPÓLIO COMERCIAL português. Brasil pôde comerciar direto com outros países.", exemplo: "Exemplo: a Inglaterra rapidamente virou principal parceira comercial — tratados de 1810 deram-lhe tarifas mais baixas que aos próprios portugueses." },
    ],
    falaFinal: "Napoleão + Bloqueio + Corte + Portos. Ecos globais que mudaram o Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico da Europa napoleônica e da rota da Corte para o Brasil.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFam,
    pontos: [
      { id: "lis", x: 20, y: 30, emoji: "⛵", cor: "from-teal-700 to-slate-900", fotoUrl: imgFam, titulo: "LISBOA (nov/1807)", texto: "Tropas napoleônicas se aproximam. A família real embarca em 15 navios com 15 mil pessoas, escoltada pela Marinha Real Britânica." },
      { id: "atl", x: 50, y: 55, emoji: "🌊", cor: "from-amber-700 to-slate-900", fotoUrl: imgFam, titulo: "TRAVESSIA DO ATLÂNTICO", texto: "Cerca de 60 dias de viagem. Passagem breve por Salvador (janeiro 1808) — onde D. João decreta a Abertura dos Portos." },
      { id: "rio", x: 80, y: 65, emoji: "🏰", cor: "from-cyan-700 to-slate-900", fotoUrl: imgFam, titulo: "RIO DE JANEIRO (março/1808)", texto: "Nova capital do IMPÉRIO PORTUGUÊS. D. João funda Banco do Brasil, Imprensa Régia, Jardim Botânico, Escolas de Medicina e a Real Academia Militar." },
      { id: "nap", x: 30, y: 15, emoji: "🎩", cor: "from-slate-700 to-slate-900", fotoUrl: imgNap, titulo: "NAPOLEÃO NA EUROPA", texto: "Segue conquistando até 1812 (invasão desastrosa da Rússia). Cai em 1815 em WATERLOO, contra ingleses e prussianos. Exilado na ilha de Santa Helena." },
    ],
    falaFinal: "Uma decisão de Napoleão. Uma coroa fugida. Uma colônia transformada.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ANO Napoleão impôs o Bloqueio Continental à Inglaterra?", fotoUrl: imgNap, cards: [ { id: "a", emoji: "📅", titulo: "1806", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "📆", titulo: "1789", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🗓️", titulo: "1822", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. 1806 — que gerou a invasão de Portugal em 1807.", feedbackErro: "É 1806. 1789 = Rev. Francesa; 1822 = Independência do Brasil." },
      { id: "q2", pergunta: "Qual foi o primeiro grande decreto de D. João no Brasil (1808)?", fotoUrl: imgFam, cards: [ { id: "a", emoji: "⚓", titulo: "Abertura dos Portos", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "🗽", titulo: "Independência", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "⚖️", titulo: "Constituição", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. Abertura dos Portos às Nações Amigas — 28/01/1808.", feedbackErro: "É a ABERTURA DOS PORTOS. Independência veio em 1822; Constituição em 1824." },
      { id: "q3", pergunta: "Onde Napoleão foi DEFINITIVAMENTE derrotado (1815)?", fotoUrl: imgNap, cards: [ { id: "a", emoji: "⚔️", titulo: "Waterloo", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "🏰", titulo: "Versalhes", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🏛️", titulo: "Roma", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. Waterloo (atual Bélgica), junho de 1815.", feedbackErro: "É Waterloo, na atual Bélgica." },
    ],
    falaFinal: "Radar afiado. Você já lê a era napoleônica.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre a chegada ao Rio: o que MUDOU e o que NÃO MUDOU.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFam,
    camadas: [
      { id: "mud", rotulo: "O que MUDOU", emoji: "✨", cor: "from-teal-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 35 }, descricao: "Abertura dos Portos, Banco do Brasil, Imprensa Régia, Jardim Botânico, faculdades de Medicina, Biblioteca Nacional. Brasil vira sede do Império." },
      { id: "seg", rotulo: "O que NÃO mudou", emoji: "⛓️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 35 }, descricao: "A ESCRAVIDÃO seguiu firme. Portugueses ocuparam melhores casas do Rio (a 'Ponta do Caju'). Elite branca mantida no topo. Povo pobre não votou nada disso." },
    ],
    falaFinal: "Reforma por cima. Base social intocada.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os fatos entre Napoleão e a vinda da Corte.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "De Napoleão à Corte no Brasil",
    paradas: [
      { id: "cor", emoji: "👑", rotulo: "1. Napoleão coroado imperador (1804)", fotoUrl: imgNap, descricao: "Se autocoroa em Notre-Dame." },
      { id: "blo", emoji: "🚫", rotulo: "2. Bloqueio Continental (1806)", fotoUrl: imgNap, descricao: "Portugal se recusa a aderir." },
      { id: "fug", emoji: "⛵", rotulo: "3. Fuga da Corte (nov/1807)", fotoUrl: imgFam, descricao: "Tropas francesas entram em Lisboa." },
      { id: "por", emoji: "⚓", rotulo: "4. Abertura dos Portos (jan/1808)", fotoUrl: imgFam, descricao: "D. João decreta em Salvador." },
    ],
    ordemCerta: ["cor", "blo", "fug", "por"],
    feedbackAcerto: "Perfeito. Coroação → Bloqueio → Fuga → Abertura.",
    feedbackErro: "Essa não é a próxima. Comece pela coroação de Napoleão (1804).",
    falaFinal: "Quatro passos que ligaram Paris ao Rio de Janeiro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 4 das Engrenagens.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 4 — A Coroa em Fuga",
    paragrafos: [
      { id: "p1", texto: "Depois da Revolução Francesa, um jovem general do exército chamado NAPOLEÃO BONAPARTE ascendeu ao poder. Em 1804 se autocoroou imperador e passou a dominar quase toda a Europa. Espalhou (à força) ideias da Revolução: Código Civil, fim de privilégios feudais, meritocracia.", chaves: ["Napoleão Bonaparte"], definicoes: { "Napoleão Bonaparte": "General francês que se tornou imperador (1804-1815) e dominou grande parte da Europa." }, fotoUrl: imgNap },
      { id: "p2", texto: "Em 1806, Napoleão impôs o BLOQUEIO CONTINENTAL: nenhum país europeu podia comerciar com a Inglaterra. Portugal — aliado histórico dos ingleses — se recusou. Em novembro de 1807, tropas francesas invadiram Portugal. A família real fugiu.", chaves: ["Bloqueio Continental"], definicoes: { "Bloqueio Continental": "Proibição imposta por Napoleão (1806) de comercializar com a Inglaterra." }, fotoUrl: imgNap },
      { id: "p3", texto: "Cerca de 15 mil pessoas atravessaram o Atlântico escoltadas pela Marinha inglesa. Ao aportar em Salvador, em janeiro de 1808, D. João decretou a ABERTURA DOS PORTOS ÀS NAÇÕES AMIGAS — fim de três séculos de monopólio comercial português. O Rio virou sede do IMPÉRIO PORTUGUÊS.", chaves: ["Abertura dos Portos"], definicoes: { "Abertura dos Portos": "Decreto de 28/01/1808 que permitiu ao Brasil comerciar diretamente com nações amigas de Portugal." }, fotoUrl: imgFam },
      { id: "p4", texto: "D. João criou o Banco do Brasil, a Imprensa Régia, o Jardim Botânico, escolas de Medicina e a Real Academia Militar. Em 1815, elevou o Brasil a REINO UNIDO A PORTUGAL — não era mais mera colônia. Estava pronto o terreno para a Independência, que viria em 1822.", chaves: ["Reino Unido a Portugal"], definicoes: { "Reino Unido a Portugal": "Status político dado ao Brasil em 1815 — igual a Portugal na estrutura do Império." }, fotoUrl: imgFam },
    ],
    falaFinal: "Leitura concluída. Você já conecta Napoleão com a preparação da Independência.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão: classifique cada elemento em NAPOLEÃO/EUROPA, VINDA DA CORTE ou MUDANÇAS NO BRASIL.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "eur", emoji: "🎩", rotulo: "Napoleão/Europa" },
      { id: "cor", emoji: "⛵", rotulo: "Vinda da Corte" },
      { id: "bra", emoji: "🇧🇷", rotulo: "Brasil transformado" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Bloqueio Continental (1806)", emoji: "🚫", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Proibição de comércio com Inglaterra", emoji: "⛔", cor: "from-teal-600 to-slate-900" }, contexto: "Estratégia econômica de Napoleão.", pecaCertaId: "eur", feedbackAcerto: "Correto. Bloqueio = NAPOLEÃO/EUROPA.", feedbackErro: "É NAPOLEÃO/EUROPA — estratégia contra a Inglaterra." },
      { id: "r2", municipioA: { nome: "15 mil pessoas fugindo em 15 navios", emoji: "⛵", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Marinha inglesa escolta a família real", emoji: "🚢", cor: "from-amber-600 to-slate-900" }, contexto: "Novembro de 1807, porto de Lisboa.", pecaCertaId: "cor", feedbackAcerto: "Correto. Travessia = VINDA DA CORTE.", feedbackErro: "É VINDA DA CORTE — fuga da família real." },
      { id: "r3", municipioA: { nome: "Fundação do Banco do Brasil (1808)", emoji: "🏦", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Primeira instituição financeira do país", emoji: "💰", cor: "from-cyan-600 to-slate-900" }, contexto: "Modernização institucional.", pecaCertaId: "bra", feedbackAcerto: "Correto. Banco do Brasil = MUDANÇA NO BRASIL.", feedbackErro: "É BRASIL TRANSFORMADO." },
      { id: "r4", municipioA: { nome: "Batalha de Waterloo (1815)", emoji: "⚔️", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Derrota final de Napoleão", emoji: "🏳️", cor: "from-teal-600 to-slate-900" }, contexto: "Ingleses + prussianos derrotam o imperador.", pecaCertaId: "eur", feedbackAcerto: "Correto. Waterloo = EUROPA NAPOLEÔNICA.", feedbackErro: "É NAPOLEÃO/EUROPA — sua derrota final." },
      { id: "r5", municipioA: { nome: "Chegada ao Rio em março de 1808", emoji: "🏰", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Corte instala-se na cidade", emoji: "👑", cor: "from-amber-600 to-slate-900" }, contexto: "Rio vira nova capital do Império.", pecaCertaId: "cor", feedbackAcerto: "Correto. Instalação = VINDA DA CORTE.", feedbackErro: "É VINDA DA CORTE — instalação no Rio." },
      { id: "r6", municipioA: { nome: "Abertura dos Portos às Nações Amigas", emoji: "⚓", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Fim do monopólio comercial português", emoji: "🌐", cor: "from-cyan-600 to-slate-900" }, contexto: "Decreto de 28/01/1808.", pecaCertaId: "bra", feedbackAcerto: "Correto. Abertura dos Portos = MUDANÇA NO BRASIL.", feedbackErro: "É BRASIL TRANSFORMADO — decreto que fez o Brasil sair do isolamento." },
    ],
    falaFinal: "6 rodadas! Você já enxerga a corrente de fatos ligando Napoleão ao Brasil.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do Rio de Janeiro (1808): mudanças por cima x base social intocada.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFam,
    fatias: [
      { id: "ref", rotulo: "Mudanças institucionais", emoji: "🏛️", percentual: 40, cor: "#0f766e", descricao: "Banco do Brasil, Imprensa Régia, escolas médicas, Real Biblioteca, Jardim Botânico, Abertura dos Portos. Elite branca beneficiada.", exemplos: ["🏦 Banco", "📰 Imprensa", "🎓 Escolas"] },
      { id: "int", rotulo: "Base social intocada", emoji: "⛓️", percentual: 60, cor: "#b45309", descricao: "Escravidão mantida, indígenas ignorados, pobres sem direitos, elite portuguesa no topo. Nada mudou pra maioria.", exemplos: ["⛓️ Escravidão", "🏚️ Cortiços", "🚫 Sem voto"] },
    ],
    falaFinal: "Modernização de fachada. Estrutura escravista intocada.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear A Coroa em Fuga.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFam,
    perguntas: [
      { id: "av1", pergunta: "O BLOQUEIO CONTINENTAL foi imposto por Napoleão contra:", opcoes: [ { id: "a", texto: "A Rússia.", correta: false }, { id: "b", texto: "A Inglaterra.", correta: true }, { id: "c", texto: "O Brasil.", correta: false } ], feedbackAcerto: "Correto. Contra a INGLATERRA — único inimigo que ele não vencia militarmente.", feedbackErro: "É contra a INGLATERRA — o único inimigo que sobrava." },
      { id: "av2", pergunta: "A vinda da Corte portuguesa para o Brasil ocorreu em:", opcoes: [ { id: "a", texto: "1808.", correta: true }, { id: "b", texto: "1500.", correta: false }, { id: "c", texto: "1822.", correta: false } ], feedbackAcerto: "Correto. Embarque em 1807, chegada em 1808.", feedbackErro: "É 1808. 1500 = chegada portuguesa; 1822 = Independência." },
      { id: "av3", pergunta: "Qual foi o primeiro grande DECRETO de D. João no Brasil?", opcoes: [ { id: "a", texto: "Abolição da escravidão.", correta: false }, { id: "b", texto: "Abertura dos Portos às Nações Amigas.", correta: true }, { id: "c", texto: "Proclamação da República.", correta: false } ], feedbackAcerto: "Correto. Abertura dos Portos — 28/01/1808, em Salvador.", feedbackErro: "É a ABERTURA DOS PORTOS. Abolição só em 1888; República em 1889." },
    ],
    selo: { nome: "A Coroa em Fuga", subtitulo: "Engrenagem 4 das Liberdades", emoji: "🎩", cor: "from-teal-500 to-slate-900", fotoUrl: imgFam },
    falaFinal: "Engrenagem 4 destravada. Corte no Rio = preparação da Independência.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "A Coroa em Fuga" },
};
