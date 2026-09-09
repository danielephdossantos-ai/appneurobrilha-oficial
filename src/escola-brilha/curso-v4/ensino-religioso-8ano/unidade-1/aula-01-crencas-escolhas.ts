import type { AulaGeoV1 } from "../../types";
import { url as crencas } from "@/assets/ensino-religioso-8ano/u1-crencas.jpg.asset.json";
import { url as convicoes } from "@/assets/ensino-religioso-8ano/u1-convicoes.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-8ano/u2-etica.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 1 · Aula 01
 * "Crenças que viram escolhas" — EF08ER01
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-crencas-escolhas",
  titulo: "Crenças que Viram Escolhas",
  iconeTrilha: "🧭",
  bncc: ["EF08ER01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: crença gera atitude.",
    mapaUrl: crencas,
    imagemDestaqueUrl: convicoes,
    aurora:
      "Investigador, olha esses jovens debatendo. Um é ateu, outro é evangélico, outra é do candomblé, outro é budista. Todos vão decidir a mesma coisa: se ajudam ou não a vizinha idosa. Cada um pensa a partir das suas CRENÇAS. E, mesmo assim, todos podem chegar em 'sim, ajudar'.",
    falaFinal: "Crenças moldam nossas escolhas — mas escolhas parecidas podem nascer de crenças bem diferentes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: crença religiosa DECIDE sozinha uma atitude?",
    pergunta: "Ter fé garante uma conduta ética?",
    opcoes: [
      { id: "sim", titulo: "SIM, garante", subtitulo: "quem tem fé faz o bem", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "nao", titulo: "NÃO", subtitulo: "crença influencia, mas a pessoa escolhe", emoji: "🧭", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Crença influencia FORTE, mas a pessoa sempre escolhe — inclusive escolhe se vive de acordo com a fé que diz ter.",
    feedbackErro: "Ter fé não garante nada sozinho: história mostra pessoas religiosas que fizeram bem E que fizeram mal. A escolha é da pessoa.",
    falaFinal: "Crença = orientação forte. Escolha = ato da pessoa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "crenca", capa: "1. Crença", emoji: "💭", cor: "from-sky-500 to-blue-700", conteudo: "CRENÇA é aquilo que uma pessoa considera verdadeiro sobre o mundo, sem precisar de prova científica. Pode ser religiosa (existe Deus) ou não (existe justiça).", exemplo: "Ex.: acreditar que toda vida é sagrada; acreditar que ninguém deve passar fome.", fotoUrl: crencas },
      { id: "conviccao", capa: "2. Convicção", emoji: "🧭", cor: "from-amber-500 to-orange-700", conteudo: "CONVICÇÃO é uma crença tão forte que orienta as decisões da pessoa no dia a dia. Vira compromisso: eu ajo assim porque acredito nisso.", exemplo: "Ex.: um médico que se convence de que 'salvar vida vem primeiro' atende mesmo cansado.", fotoUrl: convicoes },
      { id: "atitude", capa: "3. Atitude", emoji: "🤝", cor: "from-emerald-500 to-green-700", conteudo: "ATITUDE é o comportamento visível que nasce das convicções. É onde a crença encontra o mundo real.", exemplo: "Ex.: doar sangue, respeitar o vizinho de outra religião, não xingar quem pensa diferente.", fotoUrl: etica },
    ],
    falaFinal: "Crença → convicção → atitude. É o caminho.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 exemplos: mesma situação (idosa precisa de ajuda), quatro caminhos diferentes até o SIM.",
    instrucao: "Toque em cada balão",
    mapaUrl: crencas,
    pontos: [
      { id: "cristao", x: 22, y: 28, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Jovem cristã", texto: "Pensa: 'ame o próximo como a si mesmo'. Convicção religiosa vira atitude de cuidado.", fotoUrl: convicoes },
      { id: "candomble", x: 70, y: 28, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Jovem do candomblé", texto: "Pensa: 'axé é força vital — respeitar o mais velho fortalece a comunidade'. Fé afro-brasileira vira gesto.", fotoUrl: crencas },
      { id: "budista", x: 28, y: 72, emoji: "☸️", cor: "from-red-500 to-rose-700", titulo: "Jovem budista", texto: "Pensa: 'reduzir o sofrimento dos outros é meu caminho'. Convicção filosófica vira ajuda concreta.", fotoUrl: etica },
      { id: "humanista", x: 76, y: 72, emoji: "🌍", cor: "from-emerald-500 to-green-700", titulo: "Jovem sem religião", texto: "Pensa: 'somos humanos, é isso que basta'. Convicção humanista vira solidariedade.", fotoUrl: convicoes },
    ],
    falaFinal: "Quatro pontos de partida diferentes. Mesma atitude ética.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "CONVICÇÃO se diferencia de CRENÇA porque:", fotoUrl: convicoes, cards: [
        { id: "acao", emoji: "🧭", titulo: "Convicção orienta ações concretas", cor: "from-emerald-500 to-green-700" },
        { id: "mesma", emoji: "🟰", titulo: "São a mesma coisa", cor: "from-slate-400 to-gray-600" },
        { id: "prova", emoji: "🔬", titulo: "Convicção precisa de prova", cor: "from-red-500 to-rose-700" },
      ], correta: "acao", feedbackAcerto: "Isso! Convicção é crença que vira compromisso no dia a dia.", feedbackErro: "Convicção é crença FORTE o bastante pra orientar as ações. Não precisa de prova científica." },
      { id: "q2", pergunta: "Duas pessoas com religiões diferentes chegam à mesma atitude ética porque:", fotoUrl: crencas, cards: [
        { id: "acaso", emoji: "🎲", titulo: "Foi por acaso", cor: "from-slate-400 to-gray-600" },
        { id: "principio", emoji: "🤝", titulo: "Convicções diferentes podem apontar pro mesmo bem", cor: "from-sky-500 to-blue-700" },
        { id: "copia", emoji: "📋", titulo: "Uma copiou da outra", cor: "from-red-500 to-rose-700" },
      ], correta: "principio", feedbackAcerto: "Perfeito! Diferentes crenças podem convergir no mesmo cuidado com o outro.", feedbackErro: "Não é acaso nem cópia: princípios éticos comuns permitem que pessoas com fés distintas ajam parecido." },
      { id: "q3", pergunta: "Ter fé garante que a pessoa faça o bem?", fotoUrl: etica, cards: [
        { id: "garante", emoji: "🔒", titulo: "Sim, garante automaticamente", cor: "from-slate-400 to-gray-600" },
        { id: "influencia", emoji: "🧭", titulo: "Não. Influencia, mas a pessoa escolhe", cor: "from-emerald-500 to-green-700" },
        { id: "impede", emoji: "🚫", titulo: "Fé impede o bem", cor: "from-red-500 to-rose-700" },
      ], correta: "influencia", feedbackAcerto: "Isso! Crença influencia forte, mas a decisão é sempre da pessoa.", feedbackErro: "Fé influencia, mas não decide sozinha: a pessoa continua responsável pelas escolhas dela." },
    ],
    falaFinal: "Radar ético calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, escolhas guiadas por diferentes convicções constroem a vida pública. Acenda 5 estados de rica diversidade.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["BA", "SP", "RJ", "PE", "MG"], pergunta: "5 estados onde convivem tradições religiosas MUITO diferentes, tomando decisões públicas juntas?" },
    falaFinal: "BA, SP, RJ, PE, MG — mosaico de convicções, uma sociedade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma crença vira ATITUDE?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Da fé ao gesto:",
    paradas: [
      { id: "crenca", emoji: "💭", rotulo: "1. CRENÇA aparece", descricao: "A pessoa aprende ou descobre algo que considera verdadeiro (ex.: 'toda vida importa')." },
      { id: "reflexao", emoji: "🤔", rotulo: "2. REFLEXÃO pessoal", descricao: "A pessoa pensa se essa crença faz sentido pra vida dela." },
      { id: "conviccao", emoji: "🧭", rotulo: "3. CONVICÇÃO se firma", descricao: "A crença vira compromisso: eu ajo a partir disso." },
      { id: "escolha", emoji: "⚖️", rotulo: "4. ESCOLHA concreta", descricao: "Diante de uma situação real, a pessoa decide o que fazer." },
      { id: "atitude", emoji: "🤝", rotulo: "5. ATITUDE visível", descricao: "O gesto acontece e afeta o mundo — ajudar, respeitar, se posicionar." },
    ],
    ordemCerta: ["crenca", "reflexao", "conviccao", "escolha", "atitude"],
    feedbackAcerto: "Perfeito! Crença → reflexão → convicção → escolha → atitude.",
    feedbackErro: "A ordem: CRENÇA aparece, REFLEXÃO pessoal, CONVICÇÃO se firma, ESCOLHA concreta, ATITUDE visível.",
    falaFinal: "5 passos. É assim que fé vira gesto real.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 1 — Crenças e escolhas",
    paragrafos: [
      { id: "p1", texto: "CRENÇA é aquilo que a pessoa considera verdadeiro sobre a vida — religioso ou não. Ela influencia como a pessoa vê o mundo.", chaves: ["crença", "verdadeiro"] },
      { id: "p2", texto: "Quando uma crença é forte o suficiente pra orientar decisões, ela vira CONVICÇÃO. E a convicção se mostra em ATITUDES concretas.", chaves: ["convicção", "atitudes"] },
      { id: "p3", texto: "Pessoas com religiões diferentes podem chegar às MESMAS atitudes éticas — como ajudar, respeitar, cuidar. Convicções distintas convergem no bem comum.", chaves: ["mesmas atitudes", "bem comum"] },
      { id: "p4", texto: "Mas ter fé NÃO garante conduta ética automaticamente. A pessoa continua responsável pela escolha. Fé é orientação; escolha é ato.", chaves: ["não garante", "responsável"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CRENÇA → ATITUDE! Cada situação mostra uma atitude. Qual convicção está por trás?",
    instrucao: "⏱️ Qual convicção guia essa atitude?",
    duracaoSegundos: 12,
    pecas: [
      { id: "amor", emoji: "❤️", rotulo: "'Ame o próximo'" },
      { id: "axe", emoji: "🥁", rotulo: "'Respeitar o mais velho'" },
      { id: "sofrimento", emoji: "☸️", rotulo: "'Reduzir sofrimento'" },
      { id: "humanismo", emoji: "🌍", rotulo: "'Somos todos humanos'" },
      { id: "justica", emoji: "⚖️", rotulo: "'Justiça pra todos'" },
      { id: "vida", emoji: "🌱", rotulo: "'Toda vida é sagrada'" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Doar sangue", emoji: "🩸", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Ajudar desconhecido", emoji: "🤝", cor: "from-pink-400 to-red-600" }, contexto: "Uma jovem cristã doa sangue mensalmente porque acredita profundamente em cuidar do próximo.", pecaCertaId: "amor", feedbackAcerto: "Isso! Convicção cristã: amor ao próximo.", feedbackErro: "É AMOR AO PRÓXIMO — princípio central do cristianismo." },
      { id: "r2", municipioA: { nome: "Cuidar da avó", emoji: "👵", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Terreiro de candomblé", emoji: "🥁", cor: "from-orange-400 to-red-600" }, contexto: "Jovem de terreiro sempre cede o lugar pros mais velhos e escuta suas histórias.", pecaCertaId: "axe", feedbackAcerto: "Perfeito! Ancestralidade e respeito aos mais velhos.", feedbackErro: "É RESPEITAR OS MAIS VELHOS — pilar das tradições afro-brasileiras." },
      { id: "r3", municipioA: { nome: "Vegetariano", emoji: "🥬", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "Voluntário em ONG", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, contexto: "Jovem budista escolhe não comer carne e ajuda em abrigo de animais.", pecaCertaId: "sofrimento", feedbackAcerto: "Isso! Reduzir o sofrimento de todos os seres.", feedbackErro: "É REDUZIR O SOFRIMENTO — convicção budista central." },
      { id: "r4", municipioA: { nome: "Sem religião", emoji: "🌍", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Coleta de agasalhos", emoji: "🧥", cor: "from-cyan-400 to-sky-600" }, contexto: "Jovem ateu organiza campanha de agasalhos: 'ninguém deveria passar frio'.", pecaCertaId: "humanismo", feedbackAcerto: "Perfeito! Humanismo secular: cuidar do outro por sermos humanos.", feedbackErro: "É HUMANISMO — cuidar do outro porque somos todos humanos, sem precisar de religião." },
      { id: "r5", municipioA: { nome: "Advogada popular", emoji: "⚖️", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Defesa gratuita", emoji: "🏛️", cor: "from-indigo-400 to-purple-600" }, contexto: "Advogada judia defende de graça pessoas que não podem pagar: 'tzedaká é dever'.", pecaCertaId: "justica", feedbackAcerto: "Isso! Justiça social é princípio judaico central.", feedbackErro: "É JUSTIÇA PRA TODOS — no judaísmo, tzedaká significa justiça como dever." },
      { id: "r6", municipioA: { nome: "Meio ambiente", emoji: "🌱", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Kardec/Espiritismo", emoji: "🕊️", cor: "from-lime-400 to-emerald-600" }, contexto: "Espírita planta árvores no bairro: 'toda vida — humana, animal, vegetal — merece respeito'.", pecaCertaId: "vida", feedbackAcerto: "Boa! Respeito à vida em todas as formas.", feedbackErro: "É TODA VIDA É SAGRADA — princípio forte no espiritismo e em muitas tradições." },
    ],
    falaFinal: "6 convicções, 6 atitudes. Investigador da Convicção afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: duas grandes origens das convicções éticas hoje.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "religiosa", rotulo: "Origem RELIGIOSA (~65%)", emoji: "🙏", percentual: 65, cor: "#f59e0b", descricao: "Cristãos, evangélicos, católicos, espíritas, afro-brasileiros, judeus, muçulmanos, budistas, hindus. Convicções nascem de fé e tradição sagrada.", exemplos: ["✝️ 'Ame o próximo'", "☸️ 'Reduzir sofrimento'", "🥁 'Respeitar ancestrais'"] },
      { id: "secular", rotulo: "Origem SECULAR (~35%)", emoji: "🌍", percentual: 35, cor: "#0ea5e9", descricao: "Sem religião, ateus, agnósticos, humanistas. Convicções nascem de razão, ciência, direitos humanos, filosofia.", exemplos: ["🌍 Humanismo", "⚖️ Direitos humanos", "🧭 Ética filosófica"] },
    ],
    falaFinal: "Duas origens. Mesmas atitudes éticas possíveis.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DAS CONVICÇÕES.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "CONVICÇÃO se distingue de crença simples porque:", opcoes: [
        { id: "a", texto: "É a mesma coisa", correta: false },
        { id: "b", texto: "Orienta decisões concretas no dia a dia", correta: true },
        { id: "c", texto: "Só existe em religiosos", correta: false },
      ], feedbackAcerto: "Isso! Convicção é crença que vira compromisso ativo.", feedbackErro: "Convicção = crença FORTE o bastante pra orientar escolhas concretas." },
      { id: "av2", pergunta: "Duas pessoas de religiões distintas ajudam alguém: isso mostra que:", opcoes: [
        { id: "a", texto: "Uma copiou a outra", correta: false },
        { id: "b", texto: "Convicções diferentes podem levar ao mesmo bem", correta: true },
        { id: "c", texto: "Só uma religião é válida", correta: false },
      ], feedbackAcerto: "Perfeito! Convicções distintas podem convergir no cuidado com o outro.", feedbackErro: "O correto: convicções distintas podem apontar pro mesmo bem comum." },
      { id: "av3", pergunta: "Uma pessoa religiosa que age mal mostra que:", opcoes: [
        { id: "a", texto: "Religião é inútil", correta: false },
        { id: "b", texto: "Ter fé não garante conduta — a pessoa escolhe", correta: true },
        { id: "c", texto: "Todos os fiéis agem mal", correta: false },
      ], feedbackAcerto: "Isso! Fé influencia, mas a escolha é sempre da pessoa.", feedbackErro: "O correto: fé orienta, mas quem escolhe é a pessoa. Ela continua responsável." },
    ],
    selo: { nome: "Investigador das Convicções", subtitulo: "Insígnia da Crença que Vira Escolha", emoji: "🧭", cor: "from-sky-400 to-blue-600" },
    falaFinal: "Insígnia conquistada! Você entende como fé vira gesto no mundo.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador das Convicções" },
};
