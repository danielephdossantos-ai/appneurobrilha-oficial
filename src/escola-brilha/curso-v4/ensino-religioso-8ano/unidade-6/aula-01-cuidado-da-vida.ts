import type { AulaGeoV1 } from "../../types";
import { url as cuidado } from "@/assets/ensino-religioso-8ano/u6-cuidado.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-8ano/u2-etica.jpg.asset.json";
import { url as vidaMorte } from "@/assets/ensino-religioso-8ano/u3-vida-morte.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 6 · Aula 01
 * "Cuidar da vida" — EF08ER06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cuidado-da-vida",
  titulo: "O Cuidado da Vida",
  iconeTrilha: "💗",
  bncc: ["EF08ER06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: uma mão cuidando de outra.",
    mapaUrl: cuidado,
    imagemDestaqueUrl: etica,
    aurora:
      "Investigador, olha essa cena: alguém segurando a mão de um idoso doente. É simples e é sagrado. TODAS as tradições religiosas e filosofias de vida sérias colocam o CUIDADO DA VIDA como valor central. Muda a palavra — dharma, karuna, ahimsa, sacralidade, dignidade — mas o gesto é o mesmo: proteger a vida.",
    falaFinal: "Cuidar da vida é o coração comum das tradições. Hoje a gente investiga como.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: 'cuidar da vida' é ideia religiosa OU direito humano?",
    pergunta: "De onde vem esse princípio?",
    opcoes: [
      { id: "so_relig", titulo: "Só das religiões", subtitulo: "sem religião não existe", emoji: "⛪", cor: "from-slate-400 to-gray-600" },
      { id: "ambos", titulo: "Das tradições religiosas E dos direitos humanos", subtitulo: "convergem no mesmo cuidado", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "ambos",
    feedbackAcerto: "Isso! Religiões antigas e direitos humanos modernos convergem: proteger a vida é obrigação de todos.",
    feedbackErro: "Vem dos DOIS: tradições religiosas milenares E direitos humanos modernos. Ambos protegem a vida.",
    falaFinal: "Vem dos dois lados. Isso mostra a força universal do princípio.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "sacralidade", capa: "1. Sacralidade da Vida", emoji: "🕯️", cor: "from-purple-500 to-fuchsia-700", conteudo: "SACRALIDADE DA VIDA é a ideia — presente em muitas tradições — de que toda vida humana tem um valor absoluto, insubstituível. Ninguém pode ser tratado como coisa.", exemplo: "Ex.: 'sois criados à imagem de Deus' (Gênesis); 'atman é sagrado em todo ser' (Upanishades).", fotoUrl: vidaMorte },
      { id: "ahimsa", capa: "2. Não Violência (ahimsa)", emoji: "🕊️", cor: "from-sky-500 to-blue-700", conteudo: "AHIMSA (do sânscrito, 'não ferir') é o princípio hindu-jainista-budista de EVITAR causar dano a qualquer ser vivo. Inspirou Gandhi e Martin Luther King.", exemplo: "Ex.: escolha vegetariana, protestos pacíficos, mediação de conflitos.", fotoUrl: cuidado },
      { id: "dignidade", capa: "3. Dignidade Humana", emoji: "🌍", cor: "from-emerald-500 to-green-700", conteudo: "DIGNIDADE HUMANA é o valor inerente a todo ser humano — independente de religião, raça, classe. Base laica dos direitos humanos e reencontro com o princípio religioso da sacralidade.", exemplo: "Ex.: Declaração Universal dos Direitos Humanos (1948, Art. 1º).", fotoUrl: etica },
    ],
    falaFinal: "Sacralidade, ahimsa, dignidade. Três nomes pra um mesmo cuidado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 princípios de cuidado — em 5 tradições diferentes. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: cuidado,
    pontos: [
      { id: "crista", x: 20, y: 26, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristã — 'Ame o próximo'", texto: "Cuidar do doente, faminto, preso, estrangeiro é cuidar do próprio Cristo (Mateus 25). Rede católica e evangélica de hospitais no mundo todo.", fotoUrl: cuidado },
      { id: "judaica", x: 72, y: 26, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "Judaica — Pikuach Nefesh", texto: "Princípio 'salvar uma vida' PREVALECE sobre quase todas as outras regras — inclusive as religiosas. Vida vem primeiro.", fotoUrl: etica },
      { id: "islamica", x: 26, y: 68, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "Islâmica — Zakat", texto: "2,5% da riqueza vai obrigatoriamente pra cuidar de órfãos, viúvas, doentes, viajantes. Cuidado sistematizado.", fotoUrl: vidaMorte },
      { id: "budista", x: 74, y: 68, emoji: "☸️", cor: "from-red-500 to-rose-700", titulo: "Budista — Karuna e Ahimsa", texto: "Cuidado por TODOS os seres vivos: humanos, animais, insetos. Vegetarianismo, hospitais budistas, cuidado com idosos.", fotoUrl: etica },
      { id: "humanista", x: 50, y: 88, emoji: "🌍", cor: "from-purple-500 to-fuchsia-700", titulo: "Humanista — Dignidade", texto: "Direitos humanos, SUS, bioética, campanhas de vacinação, política pública de cuidado. Vida como valor inegociável, sem religião.", fotoUrl: cuidado },
    ],
    falaFinal: "5 caminhos. Mesmo destino: proteger a vida.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "PIKUACH NEFESH, no judaísmo, diz que:", fotoUrl: etica, cards: [
        { id: "salvar", emoji: "🩺", titulo: "Salvar uma vida prevalece sobre quase todas as outras regras", cor: "from-amber-500 to-orange-700" },
        { id: "rito", emoji: "📜", titulo: "Nenhuma regra pode ser quebrada", cor: "from-slate-400 to-gray-600" },
        { id: "sabbath", emoji: "🕯️", titulo: "Sabbath vale sempre mais que vida", cor: "from-red-500 to-rose-700" },
      ], correta: "salvar", feedbackAcerto: "Isso! Um judeu pode e DEVE quebrar o Sabbath pra salvar uma vida.", feedbackErro: "SALVAR UMA VIDA prevalece — no judaísmo, isso é regra suprema (pikuach nefesh)." },
      { id: "q2", pergunta: "AHIMSA (não violência) veio da tradição:", fotoUrl: cuidado, cards: [
        { id: "moderna", emoji: "📱", titulo: "Moderna, do séc. XX", cor: "from-slate-400 to-gray-600" },
        { id: "hindu", emoji: "🕉️", titulo: "Hindu-jainista-budista, milenar", cor: "from-amber-500 to-orange-700" },
        { id: "crista", emoji: "✝️", titulo: "Cristã", cor: "from-sky-500 to-blue-700" },
      ], correta: "hindu", feedbackAcerto: "Perfeito! Ahimsa é milenar — inspirou Gandhi.", feedbackErro: "AHIMSA vem da tradição hindu-jainista-budista, milenar. Depois inspirou Gandhi e MLK." },
      { id: "q3", pergunta: "A DIGNIDADE HUMANA nos direitos humanos vem:", fotoUrl: vidaMorte, cards: [
        { id: "so_relig", emoji: "⛪", titulo: "Só de religiões", cor: "from-slate-400 to-gray-600" },
        { id: "conv", emoji: "🌍", titulo: "Da convergência entre tradições religiosas e pensamento humanista", cor: "from-emerald-500 to-green-700" },
        { id: "estado", emoji: "🏛️", titulo: "Só do Estado moderno", cor: "from-red-500 to-rose-700" },
      ], correta: "conv", feedbackAcerto: "Isso! Sacralidade religiosa + dignidade filosófica = base dos direitos humanos.", feedbackErro: "Vem da CONVERGÊNCIA: sacralidade das religiões + dignidade da filosofia = direitos humanos." },
    ],
    falaFinal: "Radar do cuidado calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, cuidado da vida se faz junto por religiosos e não religiosos. Acenda 5 estados de forte rede de cuidado.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "RS", "PR", "BA"], pergunta: "5 estados com fortes redes de Santa Casa, hospitais confessionais e programas do SUS trabalhando juntos?" },
    falaFinal: "SP, MG, RS, PR, BA — cuidado em rede, fé e Estado somando forças.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o princípio 'cuidar da vida' vira AÇÃO CONCRETA?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do valor à mão estendida:",
    paradas: [
      { id: "principio", emoji: "🕯️", rotulo: "1. PRINCÍPIO reconhecido", descricao: "Tradição afirma: toda vida importa (sacralidade, karuna, dignidade)." },
      { id: "situacao", emoji: "👁️", rotulo: "2. SITUAÇÃO percebida", descricao: "Alguém está sofrendo — doente, com fome, sozinho, refugiado." },
      { id: "decisao", emoji: "🧭", rotulo: "3. DECISÃO ética", descricao: "'Preciso agir. Não posso passar direto.'" },
      { id: "acao", emoji: "🤝", rotulo: "4. AÇÃO concreta", descricao: "Ajuda direta: visita ao doente, comida, escuta, medicamento, abrigo." },
      { id: "estrutura", emoji: "🏥", rotulo: "5. ESTRUTURA duradoura", descricao: "Ações repetidas viram instituições: hospitais, ONGs, políticas públicas — cuidado organizado." },
    ],
    ordemCerta: ["principio", "situacao", "decisao", "acao", "estrutura"],
    feedbackAcerto: "Perfeito! Princípio → situação → decisão → ação → estrutura.",
    feedbackErro: "A ordem: PRINCÍPIO reconhecido, SITUAÇÃO percebida, DECISÃO ética, AÇÃO concreta, ESTRUTURA duradoura.",
    falaFinal: "5 passos. É como o cuidado sai do coração e chega no mundo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 6 — Cuidar da vida",
    paragrafos: [
      { id: "p1", texto: "O CUIDADO DA VIDA é princípio central em quase todas as tradições religiosas E na ética humanista. Muda o nome, o gesto é o mesmo: proteger a vida do outro.", chaves: ["cuidado", "proteger"] },
      { id: "p2", texto: "SACRALIDADE DA VIDA (várias religiões): a vida humana tem valor absoluto. PIKUACH NEFESH (judaísmo): salvar uma vida vale mais que quase qualquer regra. AHIMSA (hindu, budista, jainista): não ferir nenhum ser vivo.", chaves: ["sacralidade", "ahimsa"] },
      { id: "p3", texto: "ZAKAT (islamismo): 2,5% da riqueza vai obrigatoriamente pros que precisam. KARUNA (budismo): compaixão universal. Cuidado com o próximo (cristianismo): Mateus 25 — 'o que fizerdes ao menor, a mim fizerdes'.", chaves: ["zakat", "karuna"] },
      { id: "p4", texto: "A DIGNIDADE HUMANA — base dos direitos humanos modernos — é o reencontro laico desse mesmo princípio. Reconhecer isso ajuda cristãos, umbandistas, ateus e muçulmanos a cuidarem JUNTOS.", chaves: ["dignidade", "juntos"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo PRINCÍPIO DO CUIDADO! Cada gesto de cuidado nasce de UM princípio. Qual?",
    instrucao: "⏱️ Qual princípio guia essa ação?",
    duracaoSegundos: 12,
    pecas: [
      { id: "sac", emoji: "🕯️", rotulo: "Sacralidade da vida" },
      { id: "pik", emoji: "🕎", rotulo: "Pikuach Nefesh" },
      { id: "ahi", emoji: "🕊️", rotulo: "Ahimsa" },
      { id: "zak", emoji: "🤲", rotulo: "Zakat" },
      { id: "kar", emoji: "☸️", rotulo: "Karuna" },
      { id: "dig", emoji: "🌍", rotulo: "Dignidade humana" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Aborto grave", emoji: "🩺", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Rabino autoriza", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, contexto: "Grávida corre risco de morte. Rabino autoriza aborto — vida da mãe vem primeiro.", pecaCertaId: "pik", feedbackAcerto: "Isso! Pikuach nefesh: salvar vida vem primeiro.", feedbackErro: "É PIKUACH NEFESH — salvar vida prevalece, no judaísmo, sobre outras regras." },
      { id: "r2", municipioA: { nome: "Doação sangue", emoji: "🩸", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Toda vida importa", emoji: "🕯️", cor: "from-pink-400 to-red-600" }, contexto: "Cristão doa sangue mensalmente: 'toda vida é sagrada, criada por Deus'.", pecaCertaId: "sac", feedbackAcerto: "Perfeito! Sacralidade da vida.", feedbackErro: "É SACRALIDADE DA VIDA — toda vida humana tem valor absoluto." },
      { id: "r3", municipioA: { nome: "Vegetariano", emoji: "🥬", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Não fere seres", emoji: "🕊️", cor: "from-teal-400 to-emerald-600" }, contexto: "Jainista se recusa a comer carne — nenhum ser vivo deve ser ferido.", pecaCertaId: "ahi", feedbackAcerto: "Isso! Ahimsa — não violência.", feedbackErro: "É AHIMSA — não ferir nenhum ser vivo." },
      { id: "r4", municipioA: { nome: "Doação obrigatória", emoji: "🤲", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "2,5% da riqueza", emoji: "☪️", cor: "from-green-400 to-emerald-600" }, contexto: "Muçulmano dá anualmente 2,5% da riqueza pros pobres — dever religioso, não opção.", pecaCertaId: "zak", feedbackAcerto: "Perfeito! Zakat — cuidado sistematizado.", feedbackErro: "É ZAKAT — pilar do Islã, cuidado obrigatório com quem precisa." },
      { id: "r5", municipioA: { nome: "Hospital budista", emoji: "🧘", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Cuidar de todos os seres", emoji: "☸️", cor: "from-orange-400 to-red-600" }, contexto: "Monge budista cuida de moribundo com compaixão infinita — inclusive de inimigos.", pecaCertaId: "kar", feedbackAcerto: "Boa! Karuna — compaixão universal.", feedbackErro: "É KARUNA — compaixão por todos os seres, sem exceção." },
      { id: "r6", municipioA: { nome: "Vacinação SUS", emoji: "💉", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Todo humano importa", emoji: "🌍", cor: "from-cyan-400 to-sky-600" }, contexto: "Campanha de vacinação atende ricos e pobres, crentes e ateus, sem distinção.", pecaCertaId: "dig", feedbackAcerto: "Isso! Dignidade humana — base dos direitos humanos.", feedbackErro: "É DIGNIDADE HUMANA — todo humano tem valor absoluto, sem distinção." },
    ],
    falaFinal: "6 princípios, 6 gestos. Guardião do Cuidado afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: duas grandes formas do cuidado no Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "espontaneo", rotulo: "CUIDADO ESPONTÂNEO (~60%)", emoji: "🤝", percentual: 60, cor: "#ec4899", descricao: "Visita ao doente, ajuda ao vizinho, comida pro sem-teto, doação de sangue, mutirão em enchente. Nasce direto da convicção, sem instituição.", exemplos: ["🩸 Doar sangue", "👵 Cuidar da avó", "🍲 Ajudar vizinho"] },
      { id: "institucional", rotulo: "CUIDADO INSTITUCIONAL (~40%)", emoji: "🏥", percentual: 40, cor: "#10b981", descricao: "Santa Casa, hospital adventista, ONG evangélica, mesquita com alimentação, terreiro com sopa comunitária, SUS. Cuidado organizado, contínuo, com escala.", exemplos: ["🏥 Santa Casa", "🕌 Zakat organizado", "💉 SUS"] },
    ],
    falaFinal: "Duas formas. Ambas nasceram do mesmo princípio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA VIDA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O cuidado da vida:", opcoes: [
        { id: "a", texto: "É ideia moderna, sem raiz religiosa", correta: false },
        { id: "b", texto: "É princípio central em quase todas as tradições religiosas e no humanismo", correta: true },
        { id: "c", texto: "Só existe em uma religião", correta: false },
      ], feedbackAcerto: "Isso! Convergência antiga e universal.", feedbackErro: "Cuidar da vida é princípio comum a quase TODAS as tradições religiosas E ao humanismo." },
      { id: "av2", pergunta: "PIKUACH NEFESH (judaísmo) ensina:", opcoes: [
        { id: "a", texto: "Que regras religiosas nunca se quebram", correta: false },
        { id: "b", texto: "Que salvar uma vida prevalece sobre quase todas as outras regras", correta: true },
        { id: "c", texto: "Que só judeus devem ser socorridos", correta: false },
      ], feedbackAcerto: "Perfeito! Vida vem primeiro — no judaísmo.", feedbackErro: "Ensina que SALVAR VIDA prevalece — inclusive sobre o Sabbath." },
      { id: "av3", pergunta: "A DIGNIDADE HUMANA nos direitos humanos:", opcoes: [
        { id: "a", texto: "Substitui as religiões", correta: false },
        { id: "b", texto: "Converge com sacralidade religiosa: mesmo princípio, linguagem laica", correta: true },
        { id: "c", texto: "É oposta às religiões", correta: false },
      ], feedbackAcerto: "Isso! Convergência entre sacralidade e dignidade.", feedbackErro: "CONVERGE com sacralidade: mesmo princípio de proteger a vida, em linguagem laica." },
    ],
    selo: { nome: "Guardião da Vida", subtitulo: "Insígnia do Cuidado Compartilhado", emoji: "💗", cor: "from-pink-400 to-rose-600" },
    falaFinal: "Insígnia conquistada! Você reconhece o cuidado como língua comum da humanidade.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Vida" },
};
