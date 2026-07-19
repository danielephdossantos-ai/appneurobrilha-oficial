import type { AulaGeoV1 } from "../../types";
import { url as imortalidade } from "@/assets/ensino-religioso-9ano/u3-imortalidade.jpg.asset.json";
import { url as vidaMorte } from "@/assets/ensino-religioso-9ano/u2-vida-morte.jpg.asset.json";
import { url as cuidado } from "@/assets/ensino-religioso-9ano/u1-cuidado-vida.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 3 · Aula 01
 * "Imortalidade & Ancestralidade" — EF09ER03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-imortalidade-ancestralidade",
  titulo: "Imortalidade & Ancestralidade",
  iconeTrilha: "✨",
  bncc: ["EF09ER03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o silêncio das estrelas.",
    mapaUrl: imortalidade,
    imagemDestaqueUrl: vidaMorte,
    aurora:
      "Curador, o ser humano olha o céu há milênios e pergunta: 'sou só isso? Existe algo em mim que dura?'. As respostas religiosas viraram três grandes famílias: IMORTALIDADE da alma, RENASCIMENTO em ciclos, e ANCESTRALIDADE viva na comunidade. Cada uma resolve o medo da morte de um jeito diferente.",
    falaFinal: "Três grandes respostas sobre o que dura de nós.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: existe UMA resposta certa sobre a alma?",
    pergunta: "As três famílias de resposta são:",
    opcoes: [
      { id: "certo", titulo: "Uma é a certa", subtitulo: "as outras estão erradas", emoji: "☝️", cor: "from-red-400 to-rose-600" },
      { id: "coerentes", titulo: "Três respostas coerentes", subtitulo: "cada uma faz sentido no próprio sistema", emoji: "🌀", cor: "from-purple-400 to-indigo-600" },
    ],
    respostaCerta: "coerentes",
    feedbackAcerto: "Isso! Não é debate de 'certa vs errada'. Cada tradição responde de forma coerente dentro do próprio sistema simbólico.",
    feedbackErro: "Ensino Religioso não escolhe 'a certa'. Estuda como cada tradição responde de forma coerente — respeitando todas.",
    falaFinal: "Não é competir. É entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "alma", capa: "1. Alma / Atman", emoji: "✨", cor: "from-sky-500 to-blue-700", conteudo: "ALMA é o nome dado ao 'algo em nós' que ultrapassa o corpo. Cristianismo/islamismo chamam de alma; hinduísmo chama de atman.", exemplo: "Ex.: 'quando meu avô morreu, senti que só o corpo dele partiu — o resto continua'.", fotoUrl: imortalidade },
      { id: "reencarnacao", capa: "2. Reencarnação", emoji: "🌀", cor: "from-orange-500 to-red-700", conteudo: "REENCARNAÇÃO é a doutrina de que a alma renasce em outros corpos até alcançar uma libertação final. Hinduísmo, budismo, espiritismo.", exemplo: "Ex.: quem faz o bem tem karma bom e renasce em condição melhor — até se libertar do ciclo (moksha/nirvana).", fotoUrl: vidaMorte },
      { id: "ancestralidade", capa: "3. Ancestralidade", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "ANCESTRALIDADE é a doutrina de que quem morre continua presente NA COMUNIDADE — como orientador espiritual, sabedoria transmitida, força que ainda age.", exemplo: "Ex.: 'meu bisavô guarani virou espírito da mata que ainda protege nosso povo'.", fotoUrl: cuidado },
    ],
    falaFinal: "Alma + reencarnação + ancestralidade = 3 chaves pra entender.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 doutrinas específicas.",
    instrucao: "Toque em cada balão",
    mapaUrl: imortalidade,
    pontos: [
      { id: "cristao", x: 18, y: 25, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo: alma imortal", texto: "A alma é criada por Deus, é única e imortal. Ao morrer, vai a Deus (ou não); no fim dos tempos, corpo ressuscita e se une à alma.", fotoUrl: imortalidade },
      { id: "islam", x: 68, y: 25, emoji: "☪️", cor: "from-green-500 to-emerald-700", titulo: "Islamismo: alma no Barzakh", texto: "Ao morrer, a alma vai ao Barzakh (estado intermediário) até o Yawm al-Din — Dia do Juízo, quando ressuscita pra prestar contas.", fotoUrl: vidaMorte },
      { id: "hindu", x: 25, y: 55, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "Hinduísmo: atman renasce", texto: "O atman (essência) é eterno e renasce em corpos diferentes segundo o karma. Objetivo: moksha — união com Brahman, sem mais renascer.", fotoUrl: imortalidade },
      { id: "espirit", x: 72, y: 55, emoji: "🕊️", cor: "from-indigo-500 to-purple-700", titulo: "Espiritismo (Kardec): pluralidade", texto: "A alma reencarna várias vezes pra evoluir moralmente. Cada vida é uma etapa de aprendizagem. Muito presente no Brasil.", fotoUrl: cuidado },
      { id: "afroind", x: 50, y: 82, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Afro/Indígenas: ancestralidade", texto: "Não é 'imortalidade individual da alma'. É a pessoa se tornando ancestral que continua presente NA COMUNIDADE — força coletiva viva.", fotoUrl: cuidado },
    ],
    falaFinal: "5 doutrinas coerentes. Nenhuma inferior à outra.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "ATMAN é o termo hindu pra:", fotoUrl: imortalidade, cards: [
        { id: "alma", emoji: "✨", titulo: "Essência eterna que renasce", cor: "from-orange-500 to-red-700" },
        { id: "corpo", emoji: "💪", titulo: "Corpo físico", cor: "from-slate-400 to-gray-600" },
        { id: "templo", emoji: "🛕", titulo: "Templo", cor: "from-red-500 to-rose-700" },
      ], correta: "alma", feedbackAcerto: "Isso! Atman é a essência que renasce até a libertação.", feedbackErro: "Atman é a ESSÊNCIA eterna que renasce em corpos diferentes até alcançar moksha." },
      { id: "q2", pergunta: "Ancestralidade nas tradições afro/indígenas significa:", fotoUrl: cuidado, cards: [
        { id: "com", emoji: "🌿", titulo: "O morto continua presente na comunidade", cor: "from-emerald-500 to-green-700" },
        { id: "ind", emoji: "☁️", titulo: "Alma individual sobe pro céu", cor: "from-slate-400 to-gray-600" },
        { id: "nada", emoji: "❌", titulo: "Nada — o morto some", cor: "from-red-500 to-rose-700" },
      ], correta: "com", feedbackAcerto: "Perfeito! Ancestralidade é presença coletiva na comunidade.", feedbackErro: "É PRESENÇA NA COMUNIDADE — o ancestral continua orientando, protegendo, sendo lembrado." },
      { id: "q3", pergunta: "Espiritismo (Kardec) é forte principalmente:", fotoUrl: imortalidade, cards: [
        { id: "br", emoji: "🇧🇷", titulo: "No Brasil", cor: "from-indigo-500 to-purple-700" },
        { id: "us", emoji: "🇺🇸", titulo: "Nos EUA", cor: "from-slate-400 to-gray-600" },
        { id: "jp", emoji: "🇯🇵", titulo: "No Japão", cor: "from-red-500 to-rose-700" },
      ], correta: "br", feedbackAcerto: "Isso! Brasil tem a maior comunidade espírita do mundo.", feedbackErro: "É NO BRASIL — o espiritismo francês (Kardec) tornou-se mais forte aqui do que na França." },
    ],
    falaFinal: "Doutrinas distinguidas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, essas três famílias convivem. Acenda 5 estados com forte presença espírita, afro-brasileira e cristã.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["MG", "RJ", "SP", "BA", "GO"], pergunta: "5 estados com muitos centros espíritas, terreiros e igrejas convivendo?" },
    falaFinal: "MG, RJ, SP, BA, GO — capital espírita (Uberaba), terreiros da Bahia, igrejas do Sudeste. Convivência plural.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma pessoa constrói sua visão sobre 'o que dura de mim'?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Da pergunta à convicção:",
    paradas: [
      { id: "pergunta", emoji: "❓", rotulo: "1. PERGUNTA nasce", descricao: "A pessoa perde alguém ou pensa na própria morte. Surge a pergunta: 'o que dura?'." },
      { id: "tradicao", emoji: "📜", rotulo: "2. TRADIÇÃO oferece", descricao: "A tradição familiar/comunitária apresenta uma resposta: alma, reencarnação, ancestralidade..." },
      { id: "reflexao", emoji: "🤔", rotulo: "3. REFLEXÃO pessoal", descricao: "A pessoa reflete, compara, questiona. Talvez estude outras tradições." },
      { id: "escolha", emoji: "🧭", rotulo: "4. ESCOLHA íntima", descricao: "A pessoa se posiciona: adere à tradição, muda de tradição, cria síntese pessoal ou fica secular." },
      { id: "vida", emoji: "🌱", rotulo: "5. IMPACTO na VIDA", descricao: "Essa convicção passa a moldar como a pessoa vive: prioridades, ética, relações." },
    ],
    ordemCerta: ["pergunta", "tradicao", "reflexao", "escolha", "vida"],
    feedbackAcerto: "Perfeito! Pergunta → tradição → reflexão → escolha → impacto na vida.",
    feedbackErro: "A ordem: PERGUNTA, TRADIÇÃO, REFLEXÃO, ESCOLHA, IMPACTO NA VIDA.",
    falaFinal: "5 passos. É assim que fé se forma de verdade.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 3 — Imortalidade e Ancestralidade",
    paragrafos: [
      { id: "p1", texto: "As tradições religiosas se organizam em TRÊS grandes famílias de resposta sobre 'o que dura de nós': IMORTALIDADE DA ALMA, RENASCIMENTO/REENCARNAÇÃO e ANCESTRALIDADE.", chaves: ["três famílias", "dura"] },
      { id: "p2", texto: "IMORTALIDADE (cristianismo, islamismo, judaísmo): a alma é única e vai a um destino final após a morte, com julgamento divino.", chaves: ["imortalidade", "destino final"] },
      { id: "p3", texto: "REENCARNAÇÃO (hinduísmo, budismo, espiritismo): a essência renasce em ciclos até alcançar libertação (moksha, nirvana) ou evolução moral completa.", chaves: ["reencarnação", "ciclos"] },
      { id: "p4", texto: "ANCESTRALIDADE (tradições afro-brasileiras e indígenas): a pessoa se torna ANCESTRAL que continua presente na COMUNIDADE — força coletiva viva. Nenhuma família é 'mais certa' que a outra: são visões coerentes que merecem respeito.", chaves: ["ancestralidade", "respeito"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CONCEITO → FAMÍLIA! Cada frase é típica de qual das 3 famílias?",
    instrucao: "⏱️ Imortalidade, reencarnação ou ancestralidade?",
    duracaoSegundos: 12,
    pecas: [
      { id: "imort", emoji: "✨", rotulo: "Imortalidade" },
      { id: "reenc", emoji: "🌀", rotulo: "Reencarnação" },
      { id: "ancest", emoji: "🌿", rotulo: "Ancestralidade" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Igreja", emoji: "⛪", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Missa 7º dia", emoji: "🕯️", cor: "from-blue-400 to-indigo-600" }, contexto: "'Minha avó católica agora está com Deus, esperando o dia da ressurreição.'", pecaCertaId: "imort", feedbackAcerto: "Isso! Imortalidade da alma cristã.", feedbackErro: "É IMORTALIDADE — alma única que vai a Deus." },
      { id: "r2", municipioA: { nome: "Templo hindu", emoji: "🛕", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Ganges", emoji: "🌊", cor: "from-red-400 to-orange-600" }, contexto: "'O atman do meu tio renasceu em outro corpo — ele viveu bem, seu karma é bom.'", pecaCertaId: "reenc", feedbackAcerto: "Perfeito! Reencarnação hindu.", feedbackErro: "É REENCARNAÇÃO — atman renasce segundo o karma." },
      { id: "r3", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Axexê", emoji: "🌿", cor: "from-orange-400 to-red-600" }, contexto: "'Meu babalorixá virou egungun — ainda orienta o terreiro pelas nossas cerimônias.'", pecaCertaId: "ancest", feedbackAcerto: "Isso! Ancestralidade afro — egungun na comunidade.", feedbackErro: "É ANCESTRALIDADE — egungun presente na comunidade." },
      { id: "r4", municipioA: { nome: "Centro", emoji: "🕊️", cor: "from-indigo-400 to-purple-600" }, municipioB: { nome: "Kardec", emoji: "📖", cor: "from-purple-400 to-fuchsia-600" }, contexto: "'A alma reencarna várias vezes pra evoluir moralmente — cada vida é uma etapa.'", pecaCertaId: "reenc", feedbackAcerto: "Perfeito! Espiritismo — reencarnação evolutiva.", feedbackErro: "É REENCARNAÇÃO — no espiritismo, pra evolução moral." },
      { id: "r5", municipioA: { nome: "Aldeia", emoji: "🏹", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Mata", emoji: "🌳", cor: "from-green-400 to-emerald-600" }, contexto: "'O pajé que morreu virou espírito da mata — ainda protege nossa aldeia.'", pecaCertaId: "ancest", feedbackAcerto: "Isso! Ancestralidade indígena.", feedbackErro: "É ANCESTRALIDADE — pajé virou espírito protetor da comunidade." },
      { id: "r6", municipioA: { nome: "Mesquita", emoji: "🕌", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "Barzakh", emoji: "✨", cor: "from-emerald-400 to-green-600" }, contexto: "'A alma do meu pai está no Barzakh, aguardando o Dia do Juízo.'", pecaCertaId: "imort", feedbackAcerto: "Boa! Imortalidade islâmica.", feedbackErro: "É IMORTALIDADE — alma única aguardando julgamento." },
    ],
    falaFinal: "3 famílias, 6 exemplos. Você distingue.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como os brasileiros se distribuem entre essas visões (aproximado, PNAD/censo).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "imort", rotulo: "Imortalidade da alma (~78%)", emoji: "✨", percentual: 78, cor: "#0ea5e9", descricao: "Cristãos (católicos, evangélicos), muçulmanos, judeus. Vida única, destino final decidido por julgamento divino.", exemplos: ["✝️ Católicos e evangélicos", "☪️ Muçulmanos", "✡️ Judeus"] },
      { id: "reenc-anc", rotulo: "Reencarnação + Ancestralidade (~13%)", emoji: "🌀", percentual: 13, cor: "#f59e0b", descricao: "Espíritas, umbandistas, candomblecistas, budistas, hindus, indígenas. Ciclos ou continuidade na comunidade.", exemplos: ["🕊️ Espíritas", "🥁 Terreiros", "🕉️ Hindus/Budistas"] },
      { id: "secular", rotulo: "Sem religião / secular (~9%)", emoji: "🌍", percentual: 9, cor: "#10b981", descricao: "Sem religião, ateus, agnósticos. Duração através de memória, legado, obras, filhos, valores transmitidos.", exemplos: ["📔 Memória viva", "🌱 Legado", "🌍 Humanismo"] },
    ],
    falaFinal: "Brasil real: 3 visões convivendo em 210 milhões de pessoas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA ETERNIDADE.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "IMORTALIDADE / REENCARNAÇÃO / ANCESTRALIDADE são:", opcoes: [
        { id: "a", texto: "Sinônimos com nomes diferentes", correta: false },
        { id: "b", texto: "Três famílias distintas de resposta sobre 'o que dura'", correta: true },
        { id: "c", texto: "Superstições sem sentido", correta: false },
      ], feedbackAcerto: "Isso! Três famílias distintas, todas coerentes.", feedbackErro: "Três famílias DISTINTAS — respostas coerentes de tradições diferentes." },
      { id: "av2", pergunta: "ATMAN é conceito de qual tradição?", opcoes: [
        { id: "a", texto: "Cristã", correta: false },
        { id: "b", texto: "Hindu (essência que renasce)", correta: true },
        { id: "c", texto: "Islâmica", correta: false },
      ], feedbackAcerto: "Perfeito! Atman é hindu — essência que renasce em corpos.", feedbackErro: "Atman é HINDU — essência eterna que renasce." },
      { id: "av3", pergunta: "Ancestralidade nas tradições afro/indígenas coloca o duradouro na:", opcoes: [
        { id: "a", texto: "Alma individual do morto", correta: false },
        { id: "b", texto: "Comunidade — o morto vira ancestral presente", correta: true },
        { id: "c", texto: "Apenas em um livro sagrado", correta: false },
      ], feedbackAcerto: "Isso! Ancestralidade é coletiva — na comunidade.", feedbackErro: "É NA COMUNIDADE — o morto vira ancestral que ainda age no grupo." },
    ],
    selo: { nome: "Guardião da Eternidade", subtitulo: "Insígnia das 3 Famílias de Resposta", emoji: "✨", cor: "from-indigo-400 to-purple-600" },
    falaFinal: "Insígnia conquistada! Você entende as três grandes respostas humanas.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Eternidade" },
};
