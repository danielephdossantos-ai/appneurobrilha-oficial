import type { AulaGeoV1 } from "../../types";
import { url as ensinamentos } from "@/assets/ensino-religioso-6ano/u3-ensinamentos.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";
import { url as sutras } from "@/assets/ensino-religioso-6ano/u2-sutras.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 3 · Aula 01
 * "Lições de Como Viver" — EF06ER03
 * NÃO CONFESSIONAL. Foco: reconhecer ensinamentos sobre MODOS DE SER E VIVER
 * presentes em textos religiosos diferentes — sem julgar qual é a "certa".
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ensinamentos-viver",
  titulo: "Lições de Como Viver",
  iconeTrilha: "🌱",
  bncc: ["EF06ER03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: 5 textos, uma mesma pergunta.",
    mapaUrl: ensinamentos,
    imagemDestaqueUrl: ensinamentos,
    aurora:
      "Decifrador, quase todo texto sagrado tenta responder a MESMA pergunta central: 'como se vive uma vida boa?'. As respostas mudam de tradição pra tradição, mas os temas se repetem — generosidade, verdade, respeito, cuidado com o outro, coragem, humildade. Como se todos os povos, cada um do seu jeito, tivessem chegado a algumas conclusões parecidas.",
    falaFinal: "Nesta aula, vamos EXTRAIR ensinamentos de textos diferentes e ver o que eles têm em comum.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Sobre 'tratar bem o próximo', o que os textos religiosos falam?",
    opcoes: [
      { id: "coincidem", titulo: "COINCIDEM em muita coisa", subtitulo: "quase todos ensinam empatia", emoji: "🤝", cor: "from-emerald-400 to-teal-600" },
      { id: "diferem", titulo: "DISCORDAM totalmente", subtitulo: "cada um manda algo oposto", emoji: "⚔️", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "coincidem",
    feedbackAcerto: "Isso! Nos ensinamentos sobre CONVIVÊNCIA, quase todas as tradições convergem.",
    feedbackErro: "Não. Sobre 'tratar bem o outro', quase todas as tradições concordam — só usam palavras e histórias diferentes.",
    falaFinal: "Coincidem MAIS do que a gente imagina. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "etica", capa: "1. Ética religiosa", emoji: "⚖️", cor: "from-emerald-500 to-green-700", conteudo: "ÉTICA RELIGIOSA é o conjunto de ENSINAMENTOS sobre o que uma tradição considera bom, justo ou correto no comportamento humano. Diz como agir com os outros, com a natureza e consigo mesmo.", exemplo: "Ex.: 'Não faças ao outro o que não queres pra ti' aparece em várias tradições.", fotoUrl: ensinamentos },
      { id: "virtude", capa: "2. Virtude", emoji: "✨", cor: "from-amber-500 to-orange-700", conteudo: "VIRTUDE é uma QUALIDADE moral que a tradição valoriza e ensina a cultivar: generosidade, verdade, coragem, paciência, humildade, compaixão.", exemplo: "Ex.: a compaixão é virtude central no budismo; a caridade é central no cristianismo.", fotoUrl: biblia },
      { id: "regra-ouro", capa: "3. Regra de Ouro", emoji: "🌟", cor: "from-yellow-500 to-amber-700", conteudo: "REGRA DE OURO é um ensinamento que aparece em quase TODAS as grandes tradições: trate os outros como você gostaria de ser tratado. Palavras diferentes, ideia idêntica.", exemplo: "Ex.: cristianismo, judaísmo, islamismo, budismo, hinduísmo e confucionismo têm sua versão.", fotoUrl: alcorao },
    ],
    falaFinal: "Ética, virtude, regra de ouro. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 ensinamentos de tradições diferentes sobre COMO VIVER. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: ensinamentos,
    pontos: [
      { id: "crista", x: 22, y: 30, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "TRADIÇÃO CRISTÃ", texto: "A Bíblia ensina: 'Ama o teu próximo como a ti mesmo' (Mateus 22). Jesus contava histórias como a do Bom Samaritano pra mostrar que 'próximo' é qualquer pessoa que precisa de ajuda — mesmo estranhos.", fotoUrl: biblia },
      { id: "islamica", x: 70, y: 30, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "TRADIÇÃO ISLÂMICA", texto: "O Alcorão ensina a ZAKAT — dar parte do que se ganha a quem precisa é um dos 5 pilares do islamismo. E o Profeta Muhammad disse: 'Nenhum de vocês é crente até desejar ao irmão o que deseja pra si mesmo'.", fotoUrl: alcorao },
      { id: "budista", x: 30, y: 72, emoji: "☸️", cor: "from-yellow-500 to-orange-700", titulo: "TRADIÇÃO BUDISTA", texto: "Os Sutras ensinam a COMPAIXÃO (karuna) por TODOS os seres vivos — humanos, animais, até insetos. Buda dizia que a raiz do sofrimento é o apego; a saída é praticar amor por tudo que respira.", fotoUrl: sutras },
      { id: "orais", x: 76, y: 72, emoji: "🌍", cor: "from-red-500 to-rose-700", titulo: "TRADIÇÕES INDÍGENAS E AFRO", texto: "Guarani chamam UBUNTU nos ancestrais africanos ('eu sou porque nós somos'). Povos indígenas ensinam que TERRA, ÁGUA e AR não pertencem a ninguém — são sagrados. Cuidar da natureza é ensinamento espiritual, não opção.", fotoUrl: oralidade },
    ],
    falaFinal: "Palavras diferentes, mesma direção: cuidar do outro e do mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "A REGRA DE OURO diz basicamente:", fotoUrl: ensinamentos, cards: [
        { id: "trate", emoji: "🤝", titulo: "Trate os outros como quer ser tratado", cor: "from-emerald-500 to-green-700" },
        { id: "ouro", emoji: "💰", titulo: "Guarde ouro no cofre", cor: "from-slate-400 to-gray-600" },
        { id: "briga", emoji: "⚔️", titulo: "Briga sempre pra ganhar", cor: "from-red-500 to-rose-700" },
      ], correta: "trate", feedbackAcerto: "Isso! Aparece em quase todas as tradições.", feedbackErro: "REGRA DE OURO: trate os outros como VOCÊ gostaria de ser tratado." },
      { id: "q2", pergunta: "COMPAIXÃO por todos os seres vivos é ensinamento central de qual tradição?", fotoUrl: sutras, cards: [
        { id: "budismo", emoji: "☸️", titulo: "Budismo", cor: "from-yellow-500 to-orange-700" },
        { id: "capitalismo", emoji: "💼", titulo: "Capitalismo", cor: "from-slate-400 to-gray-600" },
        { id: "futebol", emoji: "⚽", titulo: "Futebol", cor: "from-emerald-500 to-green-700" },
      ], correta: "budismo", feedbackAcerto: "Perfeito! Karuna, compaixão, é central no budismo.", feedbackErro: "Compaixão por todos os seres vivos é ensinamento CENTRAL do BUDISMO." },
      { id: "q3", pergunta: "Tradições indígenas ensinam sobre a NATUREZA que:", fotoUrl: oralidade, cards: [
        { id: "sagrada", emoji: "🌳", titulo: "É sagrada, cuidar dela é dever", cor: "from-emerald-500 to-green-700" },
        { id: "vender", emoji: "💰", titulo: "É pra vender e explorar", cor: "from-red-500 to-rose-700" },
        { id: "indiferente", emoji: "😐", titulo: "Tanto faz o que se faz", cor: "from-slate-400 to-gray-600" },
      ], correta: "sagrada", feedbackAcerto: "Isso! Terra, água e ar são sagrados nas tradições indígenas.", feedbackErro: "Pra povos indígenas, a NATUREZA é SAGRADA. Cuidar dela é ensinamento espiritual." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados brasileiros com forte trabalho social ligado a tradições religiosas (comunidades, ONGs, casas de acolhimento).",
    instrucao: "Acenda 5 estados de forte trabalho social religioso",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "BA", "CE", "RS"], pergunta: "Quais 5 estados têm forte rede de trabalho social ligado a igrejas, terreiros e centros?" },
    falaFinal: "SP, MG (pastorais), BA (terreiros e obras cristãs), CE (comunidades), RS (imigrantes). Fé em ação.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um ensinamento religioso VIRA ação no mundo? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do texto à ação:",
    paradas: [
      { id: "leitura", emoji: "📖", rotulo: "1. LEITURA do texto", descricao: "A pessoa lê ou ouve o ensinamento numa celebração, aula ou estudo pessoal." },
      { id: "reflexao", emoji: "💭", rotulo: "2. REFLEXÃO sobre o sentido", descricao: "Ela pensa: 'o que isso quer dizer PRA MIM?'" },
      { id: "decisao", emoji: "🎯", rotulo: "3. DECISÃO de aplicar", descricao: "Escolhe experimentar aquilo na vida real, mesmo que seja difícil." },
      { id: "acao", emoji: "🤝", rotulo: "4. AÇÃO concreta", descricao: "Ajuda alguém, muda um comportamento, doa tempo ou dinheiro, cuida da natureza." },
      { id: "transformacao", emoji: "🌱", rotulo: "5. TRANSFORMAÇÃO da pessoa", descricao: "Ao repetir a ação, ela vira parte de quem a pessoa É — vira caráter." },
    ],
    ordemCerta: ["leitura", "reflexao", "decisao", "acao", "transformacao"],
    feedbackAcerto: "Isso! Leitura → reflexão → decisão → ação → transformação.",
    feedbackErro: "É LEITURA → REFLEXÃO → DECISÃO → AÇÃO → TRANSFORMAÇÃO.",
    falaFinal: "5 passos. Do texto ao caráter.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 3 — Ensinamentos de Viver",
    paragrafos: [
      { id: "p1", texto: "Quase todo texto sagrado tenta responder à pergunta 'COMO se vive uma vida boa?'. As respostas mudam de tradição pra tradição, mas os TEMAS se repetem.", chaves: ["como", "temas"] },
      { id: "p2", texto: "GENEROSIDADE, VERDADE, RESPEITO, CUIDADO com os outros, HUMILDADE e CORAGEM aparecem em textos cristãos, islâmicos, budistas, hindus, judaicos e nas tradições orais indígenas e afro.", chaves: ["generosidade", "cuidado"] },
      { id: "p3", texto: "A REGRA DE OURO — trate os outros como quer ser tratado — aparece em pelo menos 20 tradições diferentes. Palavras trocam, ideia central é a mesma.", chaves: ["regra", "central"] },
      { id: "p4", texto: "Um ensinamento só serve quando VIRA AÇÃO. Ler bonito e viver feio contradiz a proposta de qualquer tradição religiosa séria.", chaves: ["ação", "viver"] },
    ],
    falaFinal: "Leu tudo?",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TRADUTOR DE ENSINAMENTOS! Ligue cada frase à VIRTUDE que ela ensina.",
    instrucao: "⏱️ Que virtude essa frase ensina?",
    duracaoSegundos: 12,
    pecas: [
      { id: "generosidade", emoji: "🎁", rotulo: "Generosidade" },
      { id: "verdade", emoji: "🔍", rotulo: "Verdade" },
      { id: "respeito", emoji: "🙏", rotulo: "Respeito" },
      { id: "compaixao", emoji: "❤️", rotulo: "Compaixão" },
      { id: "humildade", emoji: "🌱", rotulo: "Humildade" },
      { id: "cuidado-natureza", emoji: "🌳", rotulo: "Cuidado com a natureza" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Dá ao pobre parte do que tens'", emoji: "🎁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Zakat — Islamismo", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, contexto: "Um dos 5 pilares.", pecaCertaId: "generosidade", feedbackAcerto: "Isso! Generosidade.", feedbackErro: "É GENEROSIDADE — a Zakat islâmica ensina exatamente isso." },
      { id: "r2", municipioA: { nome: "'Não dirás falso testemunho'", emoji: "🔍", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "10 Mandamentos — judaico-cristã", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, contexto: "Mandamento sobre não mentir.", pecaCertaId: "verdade", feedbackAcerto: "Perfeito! Verdade.", feedbackErro: "É VERDADE — não mentir sobre o próximo." },
      { id: "r3", municipioA: { nome: "'Honra teu pai e tua mãe'", emoji: "🙏", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Tradição judaico-cristã", emoji: "📖", cor: "from-sky-400 to-blue-600" }, contexto: "Mandamento sobre família.", pecaCertaId: "respeito", feedbackAcerto: "Isso! Respeito aos mais velhos.", feedbackErro: "É RESPEITO — honrar os pais é ensinamento central." },
      { id: "r4", municipioA: { nome: "'Sofre com quem sofre'", emoji: "❤️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Karuna — Budismo", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, contexto: "Sentir a dor do outro como se fosse sua.", pecaCertaId: "compaixao", feedbackAcerto: "Perfeito! Compaixão.", feedbackErro: "É COMPAIXÃO — Karuna, virtude central budista." },
      { id: "r5", municipioA: { nome: "'Quem se exalta será humilhado'", emoji: "🌱", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Evangelho cristão", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, contexto: "Sobre não se achar melhor que os outros.", pecaCertaId: "humildade", feedbackAcerto: "Isso! Humildade.", feedbackErro: "É HUMILDADE — não se achar superior." },
      { id: "r6", municipioA: { nome: "'A Terra não é nossa, nós é que somos dela'", emoji: "🌳", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Sabedoria indígena", emoji: "🪶", cor: "from-red-400 to-orange-600" }, contexto: "Sobre não ver a natureza como mercadoria.", pecaCertaId: "cuidado-natureza", feedbackAcerto: "Boa! Cuidado com a natureza.", feedbackErro: "É CUIDADO COM A NATUREZA — sabedoria central dos povos originários." },
    ],
    falaFinal: "6 virtudes traduzidas! Você virou Tradutor de Ensinamentos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: os grandes temas éticos que aparecem em quase TODOS os textos sagrados do mundo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "outros", rotulo: "Cuidar dos OUTROS (~60%)", emoji: "🤝", percentual: 60, cor: "#10b981", descricao: "Regra de ouro, generosidade, compaixão, respeito, honestidade — quase todos os textos religiosos ensinam a cuidar do próximo.", exemplos: ["🎁 Zakat", "❤️ Compaixão", "🕯️ Caridade"] },
      { id: "si-mundo", rotulo: "Cuidar de SI e do MUNDO (~40%)", emoji: "🌍", percentual: 40, cor: "#f59e0b", descricao: "Humildade, verdade consigo mesmo, respeito pela natureza, moderação, disciplina interior.", exemplos: ["🌱 Humildade", "🌳 Terra sagrada"] },
    ],
    falaFinal: "Outro, si, mundo. Três eixos éticos universais.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A REGRA DE OURO aparece em:", opcoes: [
        { id: "a", texto: "Apenas uma religião", correta: false },
        { id: "b", texto: "Quase todas as grandes tradições, com palavras diferentes", correta: true },
        { id: "c", texto: "Só na ciência moderna", correta: false },
      ], feedbackAcerto: "Isso! Ideia comum a quase todas as tradições sérias.", feedbackErro: "Aparece em QUASE TODAS as grandes tradições — só a formulação muda." },
      { id: "av2", pergunta: "Um ensinamento religioso só se completa quando:", opcoes: [
        { id: "a", texto: "É decorado sem entender", correta: false },
        { id: "b", texto: "VIRA AÇÃO concreta na vida", correta: true },
        { id: "c", texto: "É guardado como segredo", correta: false },
      ], feedbackAcerto: "Perfeito! Ler bonito e viver feio contradiz qualquer tradição séria.", feedbackErro: "Ensinamento se completa quando VIRA AÇÃO. Decorar sem viver não muda ninguém." },
      { id: "av3", pergunta: "Compaixão por todos os seres vivos é ensinamento central de:", opcoes: [
        { id: "a", texto: "Nenhuma tradição", correta: false },
        { id: "b", texto: "Budismo, mas ecoa em muitas outras", correta: true },
        { id: "c", texto: "Só do capitalismo moderno", correta: false },
      ], feedbackAcerto: "Isso! Karuna é central no budismo e ecoa em várias tradições.", feedbackErro: "É central no BUDISMO — mas o cuidado com seres vivos aparece em muitas outras tradições também." },
    ],
    selo: { nome: "Tradutor de Ensinamentos", subtitulo: "Insígnia da Ética Religiosa", emoji: "🌱", cor: "from-emerald-400 to-teal-600" },
    falaFinal: "Insígnia conquistada! Você sabe extrair lições de textos diferentes.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Tradutor de Ensinamentos" },
};
