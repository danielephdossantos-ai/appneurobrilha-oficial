import type { AulaGeoV1 } from "../../types";
import { url as vidaMorte } from "@/assets/ensino-religioso-8ano/u3-vida-morte.jpg.asset.json";
import { url as doutrinas } from "@/assets/ensino-religioso-8ano/u3-doutrinas.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-8ano/u2-etica.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 3 · Aula 01
 * "Doutrinas sobre vida e morte" — EF08ER03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-vida-e-morte",
  titulo: "Doutrinas: Vida e Morte",
  iconeTrilha: "🕯️",
  bncc: ["EF08ER03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toda tradição tenta responder: o que é morrer?",
    mapaUrl: doutrinas,
    imagemDestaqueUrl: vidaMorte,
    aurora:
      "Investigador, uma pergunta atravessa todas as culturas: o que acontece quando alguém morre? Cristãos falam de céu. Hindus, de reencarnação. Budistas, de nirvana. Umbandistas, de retorno pra Aruanda. Ateus falam de fim biológico e memória viva. Cinco respostas — todas com peso, todas com cuidado.",
    falaFinal: "Cada tradição elabora uma DOUTRINA sobre vida e morte. Hoje a gente investiga essas respostas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual é a função dessas doutrinas sobre a morte?",
    pergunta: "Pra que servem?",
    opcoes: [
      { id: "medo", titulo: "Só assustar quem não crê", subtitulo: "controle pelo medo", emoji: "😨", cor: "from-slate-400 to-gray-600" },
      { id: "sentido", titulo: "Dar SENTIDO à vida e consolo na perda", subtitulo: "responder o que é morrer", emoji: "🕯️", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "sentido",
    feedbackAcerto: "Isso! Doutrinas sobre vida/morte servem pra dar SENTIDO à existência e consolar quem perde alguém.",
    feedbackErro: "Não é medo: doutrinas sobre a morte tentam responder 'o que é viver e morrer?' e consolar quem perde alguém.",
    falaFinal: "Sentido + consolo. Isso, sim, é a função central.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "doutrina", capa: "1. Doutrina", emoji: "📚", cor: "from-purple-500 to-fuchsia-700", conteudo: "DOUTRINA é o conjunto organizado de ensinamentos de uma tradição sobre um tema — como vida, morte, deus, salvação. É como o 'manual oficial' que aquela tradição defende.", exemplo: "Ex.: doutrina cristã do céu e inferno; doutrina hindu da reencarnação.", fotoUrl: doutrinas },
      { id: "escatologia", capa: "2. Escatologia", emoji: "🕯️", cor: "from-sky-500 to-blue-700", conteudo: "ESCATOLOGIA é a parte da doutrina que trata das 'coisas últimas': o que acontece no fim — da vida da pessoa, da história, do universo.", exemplo: "Ex.: paraíso, ressurreição, nirvana, reencarnação, aniquilação.", fotoUrl: vidaMorte },
      { id: "cosmovisao", capa: "3. Cosmovisão", emoji: "🌌", cor: "from-emerald-500 to-green-700", conteudo: "COSMOVISÃO é o modo como uma tradição enxerga TODO o mundo: origem do universo, sentido da vida, papel do ser humano, o que vem depois. Todas as doutrinas se encaixam nela.", exemplo: "Ex.: cosmovisão cristã, cosmovisão budista, cosmovisão indígena.", fotoUrl: etica },
    ],
    falaFinal: "Doutrina, escatologia, cosmovisão. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 grandes respostas sobre a morte, em 5 tradições. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: doutrinas,
    pontos: [
      { id: "crista", x: 20, y: 26, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristã — ressurreição", texto: "Morte é passagem: alma vai encontrar Deus, corpo ressuscitará no fim dos tempos. Vida eterna é união com Deus.", fotoUrl: vidaMorte },
      { id: "hindu", x: 72, y: 26, emoji: "🕉️", cor: "from-amber-500 to-orange-700", titulo: "Hindu — samsara e moksha", texto: "Alma (atman) renasce em outra vida (reencarnação). O ciclo se rompe com moksha — a libertação e união com o divino (Brahman).", fotoUrl: doutrinas },
      { id: "budista", x: 26, y: 68, emoji: "☸️", cor: "from-red-500 to-rose-700", titulo: "Budista — nirvana", texto: "Renascimento continua enquanto houver apego. Nirvana é o fim do sofrimento — não é 'paraíso', é libertação do ciclo.", fotoUrl: etica },
      { id: "umbanda", x: 74, y: 68, emoji: "✨", cor: "from-purple-500 to-fuchsia-700", titulo: "Umbandista — Aruanda", texto: "Espírito volta à Aruanda (plano espiritual), evolui e pode reencarnar. Continua ligado à comunidade dos vivos.", fotoUrl: vidaMorte },
      { id: "secular", x: 50, y: 88, emoji: "🌍", cor: "from-emerald-500 to-green-700", titulo: "Secular/humanista — legado", texto: "Vida termina biologicamente. Sentido está nos AFETOS deixados, no que a pessoa fez, na memória dos vivos.", fotoUrl: etica },
    ],
    falaFinal: "5 respostas. Todas tentam dar sentido ao inevitável.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "SAMSARA, no hinduísmo, é:", fotoUrl: doutrinas, cards: [
        { id: "castigo", emoji: "🚫", titulo: "Castigo por pecado", cor: "from-slate-400 to-gray-600" },
        { id: "ciclo", emoji: "🔄", titulo: "Ciclo de nascimento, morte e renascimento", cor: "from-amber-500 to-orange-700" },
        { id: "ceu", emoji: "☁️", titulo: "Céu eterno", cor: "from-sky-500 to-blue-700" },
      ], correta: "ciclo", feedbackAcerto: "Isso! Samsara é o ciclo — o objetivo é libertar-se dele (moksha).", feedbackErro: "Samsara = CICLO. A libertação dele chama-se moksha." },
      { id: "q2", pergunta: "NIRVANA, no budismo, é:", fotoUrl: vidaMorte, cards: [
        { id: "paraiso", emoji: "🏝️", titulo: "Um paraíso de prazeres", cor: "from-slate-400 to-gray-600" },
        { id: "libertacao", emoji: "☸️", titulo: "Fim do sofrimento e do ciclo de renascer", cor: "from-red-500 to-rose-700" },
        { id: "castigo", emoji: "🔥", titulo: "Punição eterna", cor: "from-orange-500 to-red-700" },
      ], correta: "libertacao", feedbackAcerto: "Perfeito! Nirvana é apagar o apego, não ganhar prazer.", feedbackErro: "Nirvana = LIBERTAÇÃO do sofrimento e do renascer. Não é paraíso." },
      { id: "q3", pergunta: "Uma cosmovisão humanista secular sobre a morte:", fotoUrl: etica, cards: [
        { id: "vazia", emoji: "🚫", titulo: "É sem sentido nenhum", cor: "from-slate-400 to-gray-600" },
        { id: "legado", emoji: "🌍", titulo: "Encontra sentido no legado e nos afetos", cor: "from-emerald-500 to-green-700" },
        { id: "religiosa", emoji: "⛪", titulo: "Precisa de religião pra ter sentido", cor: "from-red-500 to-rose-700" },
      ], correta: "legado", feedbackAcerto: "Isso! Sentido está no que se fez e nos que ficam.", feedbackErro: "Secular NÃO significa vazio: sentido está no legado e nos afetos deixados aos vivos." },
    ],
    falaFinal: "Radar escatológico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, ritos fúnebres variam entre tradições. Acenda 5 estados com forte diversidade de ritos de morte.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["BA", "RJ", "SP", "PA", "PE"], pergunta: "5 estados onde convivem missas católicas, cultos evangélicos, giras umbandistas, cerimônias indígenas e velórios civis?" },
    falaFinal: "BA, RJ, SP, PA, PE — mosaico de ritos, respeito compartilhado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma tradição constrói sua doutrina sobre a morte?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Da experiência ao consolo:",
    paradas: [
      { id: "perda", emoji: "😢", rotulo: "1. PERDA humana", descricao: "Alguém morre. A comunidade precisa dar sentido a isso." },
      { id: "pergunta", emoji: "❓", rotulo: "2. PERGUNTA se abre", descricao: "'Pra onde vai? Continua existindo? Vou reencontrar?'" },
      { id: "resposta", emoji: "📖", rotulo: "3. RESPOSTA doutrinária", descricao: "A tradição elabora uma resposta: céu, reencarnação, nirvana, legado." },
      { id: "rito", emoji: "🕯️", rotulo: "4. RITO fúnebre", descricao: "A resposta vira ritual: velório, missa, gira, cerimônia — despede e consola." },
      { id: "consolo", emoji: "🕊️", rotulo: "5. CONSOLO comunitário", descricao: "A comunidade se abraça, honra quem partiu e segue vivendo com sentido." },
    ],
    ordemCerta: ["perda", "pergunta", "resposta", "rito", "consolo"],
    feedbackAcerto: "Perfeito! Perda → pergunta → resposta → rito → consolo.",
    feedbackErro: "A ordem: PERDA humana, PERGUNTA se abre, RESPOSTA doutrinária, RITO fúnebre, CONSOLO comunitário.",
    falaFinal: "5 passos. É como toda tradição atravessa a morte.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 3 — Vida e morte",
    paragrafos: [
      { id: "p1", texto: "Toda tradição religiosa e cada filosofia de vida elabora DOUTRINAS sobre a morte — respostas organizadas pra pergunta 'o que acontece quando alguém morre?'.", chaves: ["doutrinas", "morte"] },
      { id: "p2", texto: "Cristianismo fala em RESSURREIÇÃO. Hinduísmo fala em SAMSARA (reencarnação) e MOKSHA (libertação). Budismo fala em NIRVANA (fim do ciclo). Todas usam palavras diferentes pra dar sentido ao mesmo mistério.", chaves: ["ressurreição", "samsara", "nirvana"] },
      { id: "p3", texto: "Tradições afro-brasileiras — como a umbanda — falam em ARUANDA e evolução espiritual. Cosmovisões indígenas falam em ancestrais que seguem cuidando da aldeia.", chaves: ["Aruanda", "ancestrais"] },
      { id: "p4", texto: "Cosmovisões seculares e humanistas encontram sentido no LEGADO — o que a pessoa fez, os afetos que deixou, a memória viva. Nenhuma resposta é 'a única certa': cada uma protege, do seu jeito, o sentido da vida.", chaves: ["legado", "sentido"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo COSMOVISÕES! Cada descrição é de UMA tradição. Qual é?",
    instrucao: "⏱️ Qual tradição descreve isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "crist", emoji: "✝️", rotulo: "Cristã" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hindu" },
      { id: "bud", emoji: "☸️", rotulo: "Budista" },
      { id: "umb", emoji: "✨", rotulo: "Umbandista" },
      { id: "indi", emoji: "🪶", rotulo: "Indígena" },
      { id: "sec", emoji: "🌍", rotulo: "Secular/humanista" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Ressurreição", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Vida eterna com Deus", emoji: "☁️", cor: "from-indigo-400 to-blue-700" }, contexto: "Alma encontra Deus e o corpo ressuscitará no fim dos tempos.", pecaCertaId: "crist", feedbackAcerto: "Isso! Doutrina cristã.", feedbackErro: "É CRISTÃ — ressurreição do corpo, vida eterna com Deus." },
      { id: "r2", municipioA: { nome: "Samsara", emoji: "🔄", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Moksha", emoji: "🕉️", cor: "from-yellow-400 to-amber-600" }, contexto: "Alma renasce em outra vida até se libertar do ciclo.", pecaCertaId: "hindu", feedbackAcerto: "Perfeito! Cosmovisão hindu.", feedbackErro: "É HINDU — samsara (ciclo) e moksha (libertação)." },
      { id: "r3", municipioA: { nome: "Nirvana", emoji: "☸️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Fim do sofrimento", emoji: "🧘", cor: "from-orange-400 to-red-600" }, contexto: "Libertar-se do ciclo de renascer é apagar o apego e cessar o sofrimento.", pecaCertaId: "bud", feedbackAcerto: "Isso! Cosmovisão budista.", feedbackErro: "É BUDISTA — nirvana como fim do sofrimento e do ciclo." },
      { id: "r4", municipioA: { nome: "Aruanda", emoji: "✨", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Gira e evolução", emoji: "🕯️", cor: "from-violet-400 to-purple-600" }, contexto: "Espírito segue evoluindo e mantém laços com a comunidade dos vivos.", pecaCertaId: "umb", feedbackAcerto: "Perfeito! Umbanda.", feedbackErro: "É UMBANDA — Aruanda, evolução espiritual e ligação com os vivos." },
      { id: "r5", municipioA: { nome: "Ancestrais", emoji: "🪶", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Terra e aldeia", emoji: "🌎", cor: "from-teal-400 to-emerald-600" }, contexto: "Antepassados seguem cuidando da aldeia, da terra e das novas gerações.", pecaCertaId: "indi", feedbackAcerto: "Boa! Cosmovisão indígena.", feedbackErro: "É INDÍGENA — ancestrais presentes na aldeia e na terra." },
      { id: "r6", municipioA: { nome: "Legado", emoji: "🌍", cor: "from-sky-400 to-cyan-600" }, municipioB: { nome: "Memória viva", emoji: "🕊️", cor: "from-cyan-400 to-sky-600" }, contexto: "Sentido está no que se fez em vida e nos afetos que ficam nos vivos.", pecaCertaId: "sec", feedbackAcerto: "Isso! Cosmovisão secular/humanista.", feedbackErro: "É SECULAR/HUMANISTA — sentido no legado e na memória viva." },
    ],
    falaFinal: "6 cosmovisões. Investigador das Doutrinas afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as tradições organizam a resposta sobre a morte.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "linear", rotulo: "LINEAR — uma vida, um destino (~55%)", emoji: "➡️", percentual: 55, cor: "#0ea5e9", descricao: "Cristianismo, judaísmo, islamismo: vive-se uma vez, o depois é céu/paraíso ou outra condição definitiva.", exemplos: ["✝️ Céu/inferno", "🕎 Olam Ha-Ba", "☪️ Jannah/Jahannam"] },
      { id: "ciclica", rotulo: "CÍCLICA — renascer até libertar-se (~45%)", emoji: "🔄", percentual: 45, cor: "#8b5cf6", descricao: "Hinduísmo, budismo, umbanda, muitos indígenas: alma passa por vários ciclos e evolui até libertar-se ou reintegrar-se.", exemplos: ["🕉️ Samsara", "☸️ Renascer", "✨ Reencarnação"] },
    ],
    falaFinal: "Duas grandes formas. Ambas dão sentido à morte.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA VIDA E DA MORTE.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "DOUTRINAS sobre a morte servem principalmente pra:", opcoes: [
        { id: "a", texto: "Assustar quem não crê", correta: false },
        { id: "b", texto: "Dar sentido à vida e consolar quem perde alguém", correta: true },
        { id: "c", texto: "Vender produtos", correta: false },
      ], feedbackAcerto: "Isso! Doutrinas trabalham SENTIDO e CONSOLO.", feedbackErro: "A função central é sentido + consolo. Medo é distorção." },
      { id: "av2", pergunta: "Cosmovisões LINEARES sobre a morte:", opcoes: [
        { id: "a", texto: "Ensinam ciclos de renascimento", correta: false },
        { id: "b", texto: "Ensinam uma vida seguida de destino definitivo", correta: true },
        { id: "c", texto: "Só existem no Ocidente", correta: false },
      ], feedbackAcerto: "Perfeito! Cristianismo, judaísmo, islamismo — todas lineares.", feedbackErro: "Lineares: uma vida, depois um destino final (céu, ressurreição, paraíso)." },
      { id: "av3", pergunta: "Diante de uma cosmovisão diferente da sua, o correto é:", opcoes: [
        { id: "a", texto: "Ridicularizar", correta: false },
        { id: "b", texto: "Reconhecer que responde ao mesmo mistério com outro caminho", correta: true },
        { id: "c", texto: "Ignorar", correta: false },
      ], feedbackAcerto: "Isso! Toda cosmovisão séria merece respeito.", feedbackErro: "O correto: RECONHECER que responde ao mesmo mistério da morte com outro caminho." },
    ],
    selo: { nome: "Investigador da Vida e da Morte", subtitulo: "Insígnia das Grandes Doutrinas", emoji: "🕯️", cor: "from-purple-400 to-fuchsia-600" },
    falaFinal: "Insígnia conquistada! Você respeita as diferentes cosmovisões humanas.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador da Vida e da Morte" },
};
