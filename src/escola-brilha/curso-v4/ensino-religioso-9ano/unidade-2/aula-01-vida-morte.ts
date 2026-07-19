import type { AulaGeoV1 } from "../../types";
import { url as vidaMorte } from "@/assets/ensino-religioso-9ano/u2-vida-morte.jpg.asset.json";
import { url as imortalidade } from "@/assets/ensino-religioso-9ano/u3-imortalidade.jpg.asset.json";
import { url as cuidado } from "@/assets/ensino-religioso-9ano/u1-cuidado-vida.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 2 · Aula 01
 * "Vida, Morte e o Depois" — EF09ER02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-vida-morte",
  titulo: "Vida, Morte e o Depois",
  iconeTrilha: "🕯️",
  bncc: ["EF09ER02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o altar da memória.",
    mapaUrl: vidaMorte,
    imagemDestaqueUrl: imortalidade,
    aurora:
      "Curador, essa é a pergunta mais antiga da humanidade: o que acontece depois que morremos? Cada tradição religiosa deu uma resposta diferente — e cada resposta molda como as pessoas VIVEM. Quem acredita em ressurreição vive diferente de quem acredita em reencarnação, de quem acredita em ancestralidade, de quem acredita que não há nada depois.",
    falaFinal: "A resposta sobre a morte molda o jeito de viver.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: as religiões CONCORDAM sobre o que acontece após a morte?",
    pergunta: "Existe uma única resposta religiosa?",
    opcoes: [
      { id: "sim", titulo: "SIM, todas concordam", subtitulo: "vão pro céu ou inferno", emoji: "☁️", cor: "from-sky-400 to-blue-600" },
      { id: "nao", titulo: "NÃO, respostas muito diferentes", subtitulo: "cada tradição tem sua doutrina", emoji: "🌀", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Cada tradição tem sua doutrina: ressurreição, reencarnação, ancestralidade, nirvana, memória. Muitas respostas.",
    feedbackErro: "Não concordam! Cristianismo fala em ressurreição, hinduísmo em reencarnação, budismo em nirvana, indígenas em ancestralidade.",
    falaFinal: "Muitas respostas. Cada uma coerente por dentro.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "escatologia", capa: "1. Escatologia", emoji: "📜", cor: "from-purple-500 to-violet-700", conteudo: "ESCATOLOGIA é o estudo das doutrinas religiosas sobre o fim: fim da vida individual, fim da história, fim do mundo. Toda tradição tem a sua.", exemplo: "Ex.: escatologia cristã fala em Juízo Final; hinduísmo fala em ciclos cósmicos; budismo em nirvana.", fotoUrl: imortalidade },
      { id: "ritofunebre", capa: "2. Rito Fúnebre", emoji: "🕯️", cor: "from-slate-500 to-gray-700", conteudo: "RITOS FÚNEBRES são práticas religiosas que acompanham a morte e o luto: velório, sepultamento ou cremação, orações, rituais de despedida.", exemplo: "Ex.: velório católico com 7º dia, shivá judaico (7 dias), cremação hindu, axexê afro-brasileiro.", fotoUrl: vidaMorte },
      { id: "memoria", capa: "3. Memória", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "MEMÓRIA é como quem fica lembra dos que se foram. Nas tradições e no mundo secular, cuidar da memória é forma de manter viva a relação com quem partiu.", exemplo: "Ex.: acender vela, guardar foto, contar histórias, plantar árvore em nome da pessoa.", fotoUrl: cuidado },
    ],
    falaFinal: "Escatologia + rito fúnebre + memória = as tradições lidando com a morte.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 grandes respostas sobre 'o depois'.",
    instrucao: "Toque em cada balão",
    mapaUrl: imortalidade,
    pontos: [
      { id: "cristao", x: 18, y: 25, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo/Islamismo: Ressurreição", texto: "A alma vai a um estado intermediário e, no fim dos tempos, o corpo ressuscita pra julgamento. Céu ou inferno.", fotoUrl: vidaMorte },
      { id: "judaico", x: 68, y: 25, emoji: "✡️", cor: "from-blue-500 to-indigo-700", titulo: "Judaísmo: Olam ha-Bá", texto: "'O mundo que virá'. Foco maior está em VIVER BEM ESTA VIDA; o depois é confiado a Deus, com detalhes variados.", fotoUrl: imortalidade },
      { id: "hindu", x: 25, y: 55, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "Hinduísmo: Samsara", texto: "Ciclo de reencarnações. A alma (atman) renasce até alcançar moksha — libertação e união com o Divino (Brahman).", fotoUrl: imortalidade },
      { id: "budista", x: 72, y: 55, emoji: "☸️", cor: "from-amber-500 to-orange-700", titulo: "Budismo: Nirvana", texto: "Também há renascimento, mas o objetivo é EXTINGUIR o ciclo — nirvana é a paz do fim do desejo, do sofrimento e do renascer.", fotoUrl: vidaMorte },
      { id: "afroind", x: 50, y: 82, emoji: "🥁", cor: "from-emerald-500 to-green-700", titulo: "Afro/Indígena: Ancestralidade", texto: "Quem morre se torna ancestral: continua presente através da comunidade, dos rituais, dos filhos, da natureza.", fotoUrl: cuidado },
    ],
    falaFinal: "5 doutrinas. 5 formas coerentes de lidar com a mesma pergunta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "RESSURREIÇÃO é doutrina central de:", fotoUrl: vidaMorte, cards: [
        { id: "cri", emoji: "✝️", titulo: "Cristianismo e islamismo", cor: "from-sky-500 to-blue-700" },
        { id: "bud", emoji: "☸️", titulo: "Budismo", cor: "from-slate-400 to-gray-600" },
        { id: "afr", emoji: "🥁", titulo: "Candomblé", cor: "from-red-500 to-rose-700" },
      ], correta: "cri", feedbackAcerto: "Isso! Ressurreição do corpo é central no cristianismo e islamismo.", feedbackErro: "Ressurreição é doutrina cristã e islâmica — no fim dos tempos, corpo e alma se unem." },
      { id: "q2", pergunta: "SAMSARA (ciclo de reencarnações) é conceito:", fotoUrl: imortalidade, cards: [
        { id: "hin", emoji: "🕉️", titulo: "Hindu (também no budismo)", cor: "from-orange-500 to-red-700" },
        { id: "cri", emoji: "✝️", titulo: "Cristão", cor: "from-slate-400 to-gray-600" },
        { id: "jud", emoji: "✡️", titulo: "Judaico", cor: "from-red-500 to-rose-700" },
      ], correta: "hin", feedbackAcerto: "Perfeito! Samsara vem do hinduísmo e budismo — ciclo de renascimentos.", feedbackErro: "Samsara é hindu-budista — a alma renasce em ciclos até se libertar." },
      { id: "q3", pergunta: "Nas tradições afro-brasileiras e indígenas, a morte é vista como:", fotoUrl: cuidado, cards: [
        { id: "anc", emoji: "🌿", titulo: "Passagem — o morto vira ancestral presente", cor: "from-emerald-500 to-green-700" },
        { id: "fim", emoji: "❌", titulo: "Fim absoluto sem continuação", cor: "from-slate-400 to-gray-600" },
        { id: "cast", emoji: "🔥", titulo: "Castigo automático", cor: "from-red-500 to-rose-700" },
      ], correta: "anc", feedbackAcerto: "Isso! Ancestralidade — quem morre continua presente na comunidade.", feedbackErro: "É PASSAGEM: o morto vira ancestral e continua influenciando a comunidade viva." },
    ],
    falaFinal: "Escatologias distinguidas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, ritos fúnebres refletem essa diversidade. Acenda 5 estados onde ritos MUITO diferentes convivem.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["BA", "SP", "RJ", "PA", "PE"], pergunta: "5 estados com ritos católicos, evangélicos, afro-brasileiros e indígenas convivendo?" },
    falaFinal: "BA, SP, RJ, PA, PE — velório católico, culto evangélico, axexê, ritos indígenas. Todos no mesmo país.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um rito fúnebre acontece? (padrão amplo)",
    instrucao: "Ordene os 5 momentos",
    pergunta: "Do falecimento à memória duradoura:",
    paradas: [
      { id: "falecimento", emoji: "🕯️", rotulo: "1. FALECIMENTO", descricao: "A pessoa morre. Família e comunidade são avisadas." },
      { id: "preparacao", emoji: "🌿", rotulo: "2. PREPARAÇÃO", descricao: "Corpo é preparado segundo a tradição: banho, roupa, velório." },
      { id: "despedida", emoji: "🤝", rotulo: "3. DESPEDIDA", descricao: "Comunidade se reúne pra rezar, cantar, chorar, contar histórias." },
      { id: "sepultamento", emoji: "⚱️", rotulo: "4. SEPULTAMENTO/CREMAÇÃO", descricao: "Rito final do corpo, segundo a doutrina da tradição." },
      { id: "memoria", emoji: "📔", rotulo: "5. MEMÓRIA", descricao: "Missas de 7º dia, shivá, aniversários, fotos, histórias — o luto vira memória viva." },
    ],
    ordemCerta: ["falecimento", "preparacao", "despedida", "sepultamento", "memoria"],
    feedbackAcerto: "Perfeito! Falecimento → preparação → despedida → sepultamento → memória.",
    feedbackErro: "A ordem: FALECIMENTO, PREPARAÇÃO, DESPEDIDA, SEPULTAMENTO/CREMAÇÃO, MEMÓRIA.",
    falaFinal: "5 momentos. Toda tradição tem os 5, com detalhes próprios.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 2 — Doutrinas sobre a morte",
    paragrafos: [
      { id: "p1", texto: "ESCATOLOGIA é o estudo das doutrinas religiosas sobre 'o depois'. Cada tradição tem a sua, e cada uma molda o jeito de viver dos fiéis.", chaves: ["escatologia", "molda o jeito"] },
      { id: "p2", texto: "RESSURREIÇÃO (cristianismo, islamismo): corpo e alma se reencontram no fim dos tempos pra julgamento. SAMSARA (hinduísmo, budismo): a alma renasce em ciclos até se libertar.", chaves: ["ressurreição", "samsara"] },
      { id: "p3", texto: "ANCESTRALIDADE (afro-brasileiras, indígenas): quem morre não some — vira ancestral que continua presente na comunidade. MEMÓRIA (secular): quem morre vive nas lembranças e nas obras que deixou.", chaves: ["ancestralidade", "memória"] },
      { id: "p4", texto: "Não é uma doutrina verdadeira e as outras falsas. Cada uma responde de forma coerente à pergunta mais antiga da humanidade. Respeitar essa diversidade é ética básica.", chaves: ["coerente", "respeitar"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo DOUTRINA → TRADIÇÃO! Cada frase mostra uma crença. De qual tradição?",
    instrucao: "⏱️ De qual tradição vem essa crença?",
    duracaoSegundos: 12,
    pecas: [
      { id: "cristao", emoji: "✝️", rotulo: "Cristianismo" },
      { id: "islam", emoji: "☪️", rotulo: "Islamismo" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hinduísmo" },
      { id: "budista", emoji: "☸️", rotulo: "Budismo" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileira" },
      { id: "secular", emoji: "🌍", rotulo: "Secular/humanista" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Igreja", emoji: "⛪", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Fim dos tempos", emoji: "🌅", cor: "from-blue-400 to-indigo-600" }, contexto: "'Cristo ressuscitou. Nós também ressuscitaremos no último dia.'", pecaCertaId: "cristao", feedbackAcerto: "Isso! Ressurreição é dogma central cristão.", feedbackErro: "É CRISTIANISMO — ressurreição de Cristo e dos fiéis." },
      { id: "r2", municipioA: { nome: "Meca", emoji: "🕋", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "Yawm al-Din", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, contexto: "'No Dia do Juízo (Yawm al-Din), toda alma prestará conta a Allah.'", pecaCertaId: "islam", feedbackAcerto: "Perfeito! Yawm al-Din — Dia do Juízo islâmico.", feedbackErro: "É ISLAMISMO — Yawm al-Din, Dia do Juízo Final." },
      { id: "r3", municipioA: { nome: "Ganges", emoji: "🌊", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Moksha", emoji: "🕉️", cor: "from-red-400 to-orange-600" }, contexto: "'A alma renasce muitas vezes até alcançar moksha — libertação do ciclo.'", pecaCertaId: "hindu", feedbackAcerto: "Isso! Samsara e moksha são hindus.", feedbackErro: "É HINDUÍSMO — samsara (ciclo) e moksha (libertação)." },
      { id: "r4", municipioA: { nome: "Meditação", emoji: "🧘", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Nirvana", emoji: "☸️", cor: "from-yellow-400 to-amber-600" }, contexto: "'Quando o desejo cessa, cessa o sofrimento — e cessa o renascimento. Isso é nirvana.'", pecaCertaId: "budista", feedbackAcerto: "Perfeito! Nirvana é a extinção budista do ciclo.", feedbackErro: "É BUDISMO — nirvana, extinção do ciclo de renascimento." },
      { id: "r5", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Egungun", emoji: "🌿", cor: "from-orange-400 to-red-600" }, contexto: "'Os ancestrais (egungun) continuam entre nós — nos rituais, na comida, no axé transmitido.'", pecaCertaId: "afro", feedbackAcerto: "Isso! Ancestralidade — egungun na tradição afro.", feedbackErro: "É TRADIÇÃO AFRO — ancestrais (egungun) presentes na comunidade." },
      { id: "r6", municipioA: { nome: "Livro biografia", emoji: "📔", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Sem religião", emoji: "🌍", cor: "from-cyan-400 to-sky-600" }, contexto: "'Meu avô ateu vive nas histórias que conto, nos valores que passou, no jeito que ainda me guia.'", pecaCertaId: "secular", feedbackAcerto: "Boa! Memória viva — resposta secular.", feedbackErro: "É SECULAR — memória, legado, valores transmitidos." },
    ],
    falaFinal: "6 tradições, 6 respostas. Todas coerentes.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as tradições mundiais respondem 'o que acontece depois?'",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "linear", rotulo: "Visão LINEAR (~55%)", emoji: "➡️", percentual: 55, cor: "#0ea5e9", descricao: "Uma vida, uma morte, um destino final. Céu, inferno, purgatório, paraíso. Julgamento decide tudo. Cristianismo e islamismo dominam essa família.", exemplos: ["✝️ Ressurreição cristã", "☪️ Paraíso islâmico", "✡️ Olam ha-Bá"] },
      { id: "ciclica", rotulo: "Visão CÍCLICA (~30%)", emoji: "🌀", percentual: 30, cor: "#f59e0b", descricao: "A alma renasce em ciclos até alcançar libertação. Hinduísmo, budismo, jainismo, espiritismo. Karma decide o próximo renascimento.", exemplos: ["🕉️ Samsara hindu", "☸️ Renascimento budista", "🕊️ Espiritismo"] },
      { id: "ancestral", rotulo: "Visão ANCESTRAL/MEMÓRIA (~15%)", emoji: "🌿", percentual: 15, cor: "#10b981", descricao: "Quem morre continua na comunidade — como ancestral, como memória, como legado transmitido. Tradições afro, indígenas e visões seculares.", exemplos: ["🥁 Egungun", "🌾 Ancestrais indígenas", "📔 Memória secular"] },
    ],
    falaFinal: "3 grandes famílias de resposta. Todas coerentes.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUIA DAS PASSAGENS.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "ESCATOLOGIA é:", opcoes: [
        { id: "a", texto: "Estudo dos alimentos religiosos", correta: false },
        { id: "b", texto: "Doutrinas sobre o fim — morte, juízo, destino final", correta: true },
        { id: "c", texto: "Ritual só do cristianismo", correta: false },
      ], feedbackAcerto: "Isso! Estudo das doutrinas sobre 'o depois'.", feedbackErro: "Escatologia é o estudo das doutrinas religiosas sobre o fim." },
      { id: "av2", pergunta: "Ressurreição / Samsara / Ancestralidade são:", opcoes: [
        { id: "a", texto: "A mesma coisa com nomes diferentes", correta: false },
        { id: "b", texto: "Três respostas religiosas distintas à mesma pergunta", correta: true },
        { id: "c", texto: "Só uma é verdadeira", correta: false },
      ], feedbackAcerto: "Perfeito! Três doutrinas distintas — todas coerentes por dentro.", feedbackErro: "Três doutrinas distintas — cristianismo, hinduísmo/budismo, tradições afro/indígenas." },
      { id: "av3", pergunta: "A resposta que uma pessoa dá sobre 'o depois':", opcoes: [
        { id: "a", texto: "Não afeta o jeito dela viver", correta: false },
        { id: "b", texto: "Molda o jeito dela viver esta vida", correta: true },
        { id: "c", texto: "É só teoria sem consequência", correta: false },
      ], feedbackAcerto: "Isso! O que acredito sobre a morte molda como VIVO.", feedbackErro: "A resposta molda o jeito de viver — quem crê em julgamento vive diferente de quem crê em renascimento." },
    ],
    selo: { nome: "Guia das Passagens", subtitulo: "Insígnia das Doutrinas sobre a Morte", emoji: "🕯️", cor: "from-purple-400 to-fuchsia-600" },
    falaFinal: "Insígnia conquistada! Você respeita como cada tradição responde à maior pergunta.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guia das Passagens" },
};
