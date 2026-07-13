import type { AulaGeoV1 } from "../../types";
import imgBast from "@/assets/historia-8ano/u3-bastilha.jpg";
import imgGuil from "@/assets/historia-8ano/u3-guilhotina.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-revolucao-francesa",
  titulo: "A Revolução Francesa: Liberdade, Igualdade, Fraternidade",
  iconeTrilha: "🇫🇷",
  bncc: ["EF08HI06", "EF08HI07"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgBast,
    imagemDestaqueUrl: imgGuil,
    aurora:
      "14 de julho de 1789. Paris. O povo — armado de forcados, mosquetes e ideias iluministas — invade a BASTILHA, símbolo da tirania real. Em 10 anos, a França vai enforcar um rei, proclamar direitos universais e mudar o mundo pra sempre.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 3: O Estandarte Tricolor.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A França era o país mais rico da Europa. Por que o POVO estourou justo lá?",
    pergunta: "Qual foi o principal motivo do estouro revolucionário?",
    fotoUrl: imgBast,
    opcoes: [
      { id: "des", titulo: "DESIGUALDADE E FOME", subtitulo: "3% de privilégios; 97% sem nada", emoji: "🥖", cor: "from-teal-800 to-slate-950" },
      { id: "inv", titulo: "INVASÃO ESTRANGEIRA", subtitulo: "outro país atacou a França", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "des",
    feedbackAcerto:
      "Correto. A França vivia crise financeira, safras ruins, fome e desigualdade brutal. O 3º Estado (97%) sustentava tudo e não tinha voto. As ideias iluministas deram nome ao mal-estar. Explodiu.",
    feedbackErro:
      "Não. A França foi INVADIDA DEPOIS pelas monarquias vizinhas assustadas. A causa da revolução foi INTERNA: fome, dívida da coroa e desigualdade insustentável.",
    falaFinal: "Fome + desigualdade + ideias iluministas = fogo pronto.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da Revolução Francesa.",
    instrucao: "",
    cadernos: [
      { id: "ar", capa: "Antigo Regime", emoji: "👑", cor: "from-teal-700 to-slate-900", fotoUrl: imgBast, conteudo: "ANTIGO REGIME era a ordem política e social da França pré-1789: monarquia absoluta, sociedade estamental (Clero, Nobreza, 3º Estado), privilégios hereditários e economia agrícola.", exemplo: "Exemplo: Luís XVI governava sem parlamento eficaz. Clero e Nobreza (3%) não pagavam quase nenhum imposto." },
      { id: "3es", capa: "3º Estado", emoji: "🛠️", cor: "from-amber-700 to-slate-900", fotoUrl: imgGuil, conteudo: "3º ESTADO reunia burguesia, camponeses e trabalhadores urbanos — 97% da população francesa. Pagava TODOS os impostos e não tinha voto real. Foi o motor da revolução.", exemplo: "Exemplo: em maio de 1789, o 3º Estado se declarou ASSEMBLEIA NACIONAL e jurou dar à França uma Constituição." },
      { id: "dh", capa: "Declaração dos Direitos", emoji: "📜", cor: "from-cyan-700 to-slate-900", fotoUrl: imgBast, conteudo: "A DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO (agosto de 1789) afirmou pela primeira vez, oficialmente, que TODOS OS HOMENS NASCEM LIVRES E IGUAIS EM DIREITOS. Base dos direitos humanos modernos.", exemplo: "Exemplo: a Declaração Universal da ONU (1948) e a Constituição do Brasil (1988) herdam diretamente esse documento." },
      { id: "ter", capa: "Terror e Guilhotina", emoji: "🗡️", cor: "from-slate-700 to-slate-900", fotoUrl: imgGuil, conteudo: "PERÍODO DO TERROR (1793-1794), liderado por Robespierre, executou milhares na guilhotina — inclusive Luís XVI e Maria Antonieta. Objetivo declarado: defender a revolução de traidores. Resultado real: repressão e medo.", exemplo: "Exemplo: em pouco mais de 1 ano, mais de 16 mil pessoas foram guilhotinadas. O próprio Robespierre foi executado em julho de 1794." },
    ],
    falaFinal: "Antigo Regime + 3º Estado + Declaração + Terror. Quatro engrenagens.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico dos três estados da França pré-1789.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgGuil,
    pontos: [
      { id: "cle", x: 20, y: 25, emoji: "⛪", cor: "from-teal-700 to-slate-900", fotoUrl: imgBast, titulo: "1º ESTADO — CLERO (~0,5%)", texto: "Alto clero (bispos, cardeais) tinha luxo. Baixo clero (padres pobres) muitas vezes se aliou ao 3º Estado. Isento de impostos, recebia dízimo." },
      { id: "nob", x: 50, y: 25, emoji: "🗡️", cor: "from-amber-700 to-slate-900", fotoUrl: imgBast, titulo: "2º ESTADO — NOBREZA (~1,5%)", texto: "Donos das terras, altos cargos, viviam em Versalhes. Isentos da maioria dos impostos. Alguns nobres liberais apoiaram a revolução (Lafayette)." },
      { id: "ter", x: 80, y: 25, emoji: "🛠️", cor: "from-cyan-700 to-slate-900", fotoUrl: imgGuil, titulo: "3º ESTADO — POVO (~97%)", texto: "Burguesia (comerciantes, profissionais liberais), camponeses (80% da população) e trabalhadores urbanos (sans-culottes). Pagavam TODOS os impostos e não tinham voto." },
      { id: "bast", x: 50, y: 75, emoji: "🏰", cor: "from-slate-700 to-slate-900", fotoUrl: imgBast, titulo: "QUEDA DA BASTILHA (14/07/1789)", texto: "A prisão símbolo do absolutismo cai. Data se tornou feriado nacional francês. Marca oficial do início da Revolução." },
    ],
    falaFinal: "Três estados. Uma revolução que virou o mundo do avesso.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador da Revolução.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que DATA caiu a Bastilha, marco inicial da Revolução?", fotoUrl: imgBast, cards: [ { id: "a", emoji: "🎆", titulo: "14/07/1789", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "📅", titulo: "07/09/1822", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🗓️", titulo: "04/07/1776", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. 14/07/1789 — hoje feriado nacional francês.", feedbackErro: "É 14 de julho de 1789. 1776 é independência dos EUA; 1822 é a do Brasil." },
      { id: "q2", pergunta: "Qual foi o LEMA da Revolução Francesa?", fotoUrl: imgGuil, cards: [ { id: "a", emoji: "🇫🇷", titulo: "Liberdade, Igualdade, Fraternidade", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "👑", titulo: "Deus, Rei e Pátria", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "⚔️", titulo: "Ordem e Progresso", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. Liberdade, Igualdade, Fraternidade — herança iluminista.", feedbackErro: "É 'Liberdade, Igualdade, Fraternidade'. 'Ordem e Progresso' é do positivismo brasileiro." },
      { id: "q3", pergunta: "Quem foi o líder do PERÍODO DO TERROR (1793-1794)?", fotoUrl: imgGuil, cards: [ { id: "r", emoji: "🗡️", titulo: "Robespierre", cor: "from-teal-600 to-slate-900" }, { id: "n", emoji: "👑", titulo: "Luís XVI", cor: "from-amber-600 to-slate-900" }, { id: "b", emoji: "🎩", titulo: "Napoleão", cor: "from-slate-600 to-slate-900" } ], correta: "r", feedbackAcerto: "Correto. Robespierre liderou os jacobinos — e acabou guilhotinado em julho de 1794.", feedbackErro: "É Robespierre. Luís XVI foi o rei executado; Napoleão veio depois." },
    ],
    falaFinal: "Radar afiado. Você já mapeia a Revolução Francesa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre a Assembleia. Quem votou e quem não votou de verdade.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgGuil,
    camadas: [
      { id: "vot", rotulo: "Homens com direito a voto ativo (~15%)", emoji: "🗳️", cor: "from-amber-700 to-slate-900", rect: { x: 15, y: 10, w: 70, h: 40 }, descricao: "Só homens brancos que pagavam certo valor de imposto podiam votar. Camponeses pobres e sans-culottes ficaram de fora." },
      { id: "sem", rotulo: "Sem direito real (~85%)", emoji: "🚫", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Mulheres (todas), pobres, escravizados nas colônias. Olympe de Gouges reivindicou 'Direitos da Mulher e da Cidadã' (1791) — foi guilhotinada." },
    ],
    falaFinal: "Revolução avançou muito. Mas deixou desigualdades brutais pra resolver depois.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as fases da Revolução Francesa.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Fases da Revolução",
    paradas: [
      { id: "est", emoji: "📜", rotulo: "1. Estados Gerais (maio/1789)", fotoUrl: imgBast, descricao: "3º Estado se declara Assembleia Nacional." },
      { id: "bast", emoji: "🏰", rotulo: "2. Queda da Bastilha (jul/1789)", fotoUrl: imgBast, descricao: "Povo toma a prisão símbolo da tirania." },
      { id: "cst", emoji: "📖", rotulo: "3. Constituinte (1789-1791)", fotoUrl: imgGuil, descricao: "Declaração dos Direitos; monarquia constitucional." },
      { id: "ter", emoji: "🗡️", rotulo: "4. República e Terror (1792-1794)", fotoUrl: imgGuil, descricao: "Luís XVI executado; Robespierre lidera." },
    ],
    ordemCerta: ["est", "bast", "cst", "ter"],
    feedbackAcerto: "Perfeito. Estados Gerais → Bastilha → Constituinte → República/Terror.",
    feedbackErro: "Essa não é a próxima. A Bastilha caiu ANTES da Constituinte.",
    falaFinal: "Quatro fases. Dez anos que reescreveram a política mundial.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 3 das Engrenagens.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 3 — O Estandarte Tricolor",
    paragrafos: [
      { id: "p1", texto: "Em 1789, a França vivia um paradoxo: era o país mais rico da Europa e ao mesmo tempo tinha o povo faminto. O ANTIGO REGIME sustentava 3% de privilegiados (Clero e Nobreza) com o suor de 97% do 3º Estado, que pagava todos os impostos e não tinha voto real.", chaves: ["Antigo Regime"], definicoes: { "Antigo Regime": "Ordem social e política pré-1789: monarquia absoluta, sociedade estamental, privilégios hereditários." }, fotoUrl: imgBast },
      { id: "p2", texto: "Em maio de 1789, o rei convocou os ESTADOS GERAIS pra tentar resolver a crise financeira. O 3º Estado se declarou ASSEMBLEIA NACIONAL e jurou dar à França uma Constituição. Em 14 de julho, o povo de Paris tomou a BASTILHA — marco oficial da Revolução.", chaves: ["Assembleia Nacional"], definicoes: { "Assembleia Nacional": "Grupo do 3º Estado que se autoproclamou representante da nação e prometeu uma Constituição." }, fotoUrl: imgBast },
      { id: "p3", texto: "Em agosto de 1789, veio a DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO: 'todos os homens nascem livres e iguais em direitos'. Foi o primeiro texto oficial do mundo a colocar essas ideias como direitos universais. Base dos direitos humanos modernos.", chaves: ["Declaração dos Direitos"], definicoes: { "Declaração dos Direitos": "Texto de 1789 que consagrou os direitos naturais universais: liberdade, igualdade, propriedade, resistência à opressão." }, fotoUrl: imgBast },
      { id: "p4", texto: "A revolução radicalizou-se: em 1793, Luís XVI foi guilhotinado e a França virou REPÚBLICA. Sob liderança de ROBESPIERRE, começou o PERÍODO DO TERROR — milhares executados em nome da 'defesa da revolução'. Em 1794, o próprio Robespierre foi guilhotinado. Cinco anos depois, um jovem general chamado Napoleão dava o golpe final.", chaves: ["Terror"], definicoes: { "Terror": "Fase radical da Revolução (1793-1794) liderada por Robespierre; milhares foram guilhotinados." }, fotoUrl: imgGuil },
    ],
    falaFinal: "Leitura concluída. Você já explica os grandes marcos da Revolução Francesa.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão: classifique cada elemento em ANTIGO REGIME, REVOLUÇÃO ou TERROR.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "ar", emoji: "👑", rotulo: "Antigo Regime" },
      { id: "rev", emoji: "🇫🇷", rotulo: "Revolução" },
      { id: "ter", emoji: "🗡️", rotulo: "Terror" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Luís XVI e Maria Antonieta em Versalhes", emoji: "👑", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Corte real francesa", emoji: "🏰", cor: "from-amber-600 to-slate-900" }, contexto: "Vida de luxo enquanto o povo passa fome.", pecaCertaId: "ar", feedbackAcerto: "Correto. Corte de Versalhes = ANTIGO REGIME.", feedbackErro: "É ANTIGO REGIME — símbolo da monarquia absoluta." },
      { id: "r2", municipioA: { nome: "Queda da Bastilha em 14/07/1789", emoji: "🏰", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Ataque popular à prisão real", emoji: "🎆", cor: "from-teal-600 to-slate-900" }, contexto: "Marco inicial da Revolução.", pecaCertaId: "rev", feedbackAcerto: "Correto. Bastilha = REVOLUÇÃO.", feedbackErro: "É REVOLUÇÃO — marco inicial." },
      { id: "r3", municipioA: { nome: "Execução de Luís XVI por Robespierre (1793)", emoji: "🗡️", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Guilhotinamento do rei", emoji: "⚖️", cor: "from-slate-600 to-slate-900" }, contexto: "Fase mais radical.", pecaCertaId: "ter", feedbackAcerto: "Correto. Execução de Luís XVI = TERROR.", feedbackErro: "É TERROR — fase radical liderada por Robespierre." },
      { id: "r4", municipioA: { nome: "Sociedade estamental com 3 ordens", emoji: "⛪", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Divisão em Clero, Nobreza, 3º Estado", emoji: "👥", cor: "from-amber-600 to-slate-900" }, contexto: "Estrutura social pré-1789.", pecaCertaId: "ar", feedbackAcerto: "Correto. Sociedade estamental = ANTIGO REGIME.", feedbackErro: "É ANTIGO REGIME — 3 estados fixos." },
      { id: "r5", municipioA: { nome: "Declaração dos Direitos do Homem (1789)", emoji: "📜", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "'Todos os homens nascem livres e iguais'", emoji: "🕊️", cor: "from-teal-600 to-slate-900" }, contexto: "Texto que consagra direitos universais.", pecaCertaId: "rev", feedbackAcerto: "Correto. Declaração de 1789 = REVOLUÇÃO.", feedbackErro: "É REVOLUÇÃO — conquista principal da fase constituinte." },
      { id: "r6", municipioA: { nome: "16 mil executados em 1 ano", emoji: "⚖️", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Guilhotina em massa (1793-94)", emoji: "🗡️", cor: "from-slate-600 to-slate-900" }, contexto: "Fase de repressão radical.", pecaCertaId: "ter", feedbackAcerto: "Correto. Execuções em massa = TERROR.", feedbackErro: "É TERROR — repressão jacobina." },
    ],
    falaFinal: "6 rodadas! Você já separa as fases da Revolução.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da França pré-revolucionária: quem tinha privilégios x quem pagava a conta.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgBast,
    fatias: [
      { id: "priv", rotulo: "Clero + Nobreza (~3%)", emoji: "👑", percentual: 3, cor: "#b45309", descricao: "Privilégios hereditários. Isentos de impostos. Monopólio de cargos e terras.", exemplos: ["⛪ Alto Clero", "🗡️ Nobreza", "🏰 Corte"] },
      { id: "ter", rotulo: "3º Estado (~97%)", emoji: "🛠️", percentual: 97, cor: "#0f766e", descricao: "Burguesia + camponeses + sans-culottes. Pagavam todos os impostos. Sem voto real. Estouraram em 1789.", exemplos: ["💼 Burguesia", "🌾 Camponeses", "⚒️ Sans-culottes"] },
    ],
    falaFinal: "3% vivendo do trabalho de 97%. Bomba-relógio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear o Estandarte Tricolor.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgBast,
    perguntas: [
      { id: "av1", pergunta: "O 3º Estado da França pré-1789 era formado por:", opcoes: [ { id: "a", texto: "Clero e nobreza.", correta: false }, { id: "b", texto: "Burguesia, camponeses e trabalhadores urbanos.", correta: true }, { id: "c", texto: "Só camponeses.", correta: false } ], feedbackAcerto: "Correto. Burguesia + camponeses + sans-culottes = 97% da população.", feedbackErro: "É BURGUESIA + CAMPONESES + TRABALHADORES URBANOS — o 3º Estado." },
      { id: "av2", pergunta: "A DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO (1789) afirmou que:", opcoes: [ { id: "a", texto: "Só nobres têm direitos.", correta: false }, { id: "b", texto: "Todos os homens nascem livres e iguais em direitos.", correta: true }, { id: "c", texto: "O rei é dono de tudo.", correta: false } ], feedbackAcerto: "Correto. Base dos direitos humanos modernos.", feedbackErro: "É 'todos nascem LIVRES E IGUAIS em direitos'." },
      { id: "av3", pergunta: "O PERÍODO DO TERROR (1793-1794) foi liderado por:", opcoes: [ { id: "a", texto: "Robespierre.", correta: true }, { id: "b", texto: "Napoleão.", correta: false }, { id: "c", texto: "Luís XVI.", correta: false } ], feedbackAcerto: "Correto. Robespierre — também acabou guilhotinado em julho de 1794.", feedbackErro: "É ROBESPIERRE. Napoleão veio depois." },
    ],
    selo: { nome: "O Estandarte Tricolor", subtitulo: "Engrenagem 3 das Liberdades", emoji: "🇫🇷", cor: "from-teal-500 to-slate-900", fotoUrl: imgBast },
    falaFinal: "Engrenagem 3 destravada. Liberdade, Igualdade, Fraternidade — o mundo mudou.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "O Estandarte Tricolor" },
};
