import type { AulaGeoV1 } from "../../types";
import { aula01 as aulaCorpo } from "../unidade-2/aula-01-corpo";

export const aula01 = {
  ...aulaCorpo,
  slug: "aula-01-diversidade",
  titulo: "Cada Pessoa é Única",
  iconeTrilha: "🤝",
  bncc: ["EF01CI04"],
  cena01_motivacao: {
    ...aulaCorpo.cena01_motivacao,
    titulo: "Um grupo cheio de diferenças",
    historia: "Brilha observou a turma: há pessoas com cabelos, peles, alturas, vozes e jeitos diferentes de se movimentar e comunicar. A missão é perceber essas características sem comparar quem é melhor ou pior, porque toda pessoa merece respeito e participação.",
    fotoUrl: "",
  },
  cena02_previsao: {
    ...aulaCorpo.cena02_previsao,
    pergunta: "O que fazer quando um colega é diferente de você?",
    fotoUrl: "",
    opcoes: [
      { id: "respeitar", titulo: "Respeitar", subtitulo: "acolher as diferenças", emoji: "🤝", cor: "from-emerald-400 to-green-700" },
      { id: "rir", titulo: "Rir", subtitulo: "fazer piada", emoji: "😕", cor: "from-red-400 to-rose-700" },
      { id: "excluir", titulo: "Excluir", subtitulo: "não deixar participar", emoji: "🚫", cor: "from-slate-400 to-slate-700" },
      { id: "imitar", titulo: "Imitar", subtitulo: "zombar do jeito", emoji: "🙈", cor: "from-amber-400 to-orange-700" },
    ],
    respostaCerta: "respeitar",
    feedbackAcerto: "Isso! Diferenças merecem respeito.",
    feedbackErro: "Ninguém deve ser ridicularizado ou excluído por suas características.",
  },
  cena03_vocabulario: {
    ...aulaCorpo.cena03_vocabulario,
    cards: [
      { palavra: "Característica", explicacao: "Algo que podemos observar em uma pessoa, como cabelo, voz ou modo de se movimentar.", exemplo: "Cada pessoa reúne muitas características.", imagemUrl: "" },
      { palavra: "Diversidade", explicacao: "Convivência entre pessoas com diferentes características e maneiras de viver.", exemplo: "A diversidade torna a turma rica em experiências.", imagemUrl: "" },
      { palavra: "Respeito", explicacao: "Tratar todas as pessoas com cuidado, dignidade e igualdade de direitos.", exemplo: "Respeitar é ouvir e incluir.", imagemUrl: "" },
    ],
  },
  cena04_leituraGuiada: {
    ...aulaCorpo.cena04_leituraGuiada,
    aurora: "Observe sem julgar.",
    instrucao: "Toque nos pontos e descubra diferenças humanas",
    mapaUrl: "",
    pontos: [
      { id: "aparencia", x: 20, y: 30, emoji: "👩🏽‍🦱", cor: "from-amber-400 to-orange-700", titulo: "Aparência", texto: "Pele, cabelo, olhos e altura podem ser diferentes.", fotoUrl: "" },
      { id: "voz", x: 40, y: 30, emoji: "🗣️", cor: "from-cyan-400 to-sky-700", titulo: "Voz e comunicação", texto: "Pessoas podem falar, sinalizar ou usar recursos de comunicação.", fotoUrl: "" },
      { id: "movimento", x: 60, y: 30, emoji: "♿", cor: "from-purple-400 to-fuchsia-700", titulo: "Movimento", texto: "Cada pessoa se movimenta de um jeito e pode usar apoios.", fotoUrl: "" },
      { id: "gostos", x: 40, y: 70, emoji: "🎨", cor: "from-pink-400 to-rose-700", titulo: "Gostos", texto: "Brincadeiras, comidas e interesses também variam.", fotoUrl: "" },
      { id: "direitos", x: 60, y: 70, emoji: "🤝", cor: "from-emerald-400 to-green-700", titulo: "Direitos", texto: "Mesmo diferentes, todos têm direito a aprender, brincar e participar.", fotoUrl: "" },
    ],
    falaFinal: "Diferença não diminui ninguém.",
  },
  cena05_compreensao: {
    ...aulaCorpo.cena05_compreensao,
    perguntas: [
      { id: "q1", pergunta: "Qual atitude mostra respeito?", fotoUrl: "", cards: [{ id: "a", emoji: "🤝", titulo: "Convidar todos para brincar", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "😕", titulo: "Fazer piada", cor: "from-red-400 to-rose-700" }, { id: "c", emoji: "🚫", titulo: "Excluir", cor: "from-slate-400 to-slate-700" }, { id: "d", emoji: "🙈", titulo: "Imitar para zombar", cor: "from-amber-400 to-orange-700" }], correta: "a", feedbackAcerto: "Incluir é respeitar!", feedbackErro: "Respeito faz todas as pessoas participarem." },
      { id: "q2", pergunta: "Pessoas com características diferentes têm:", fotoUrl: "", cards: [{ id: "a", emoji: "⚖️", titulo: "Os mesmos direitos", cor: "from-blue-400 to-indigo-700" }, { id: "b", emoji: "1️⃣", titulo: "Direitos menores", cor: "from-red-400 to-rose-700" }, { id: "c", emoji: "0️⃣", titulo: "Nenhum direito", cor: "from-slate-400 to-slate-700" }, { id: "d", emoji: "🎲", titulo: "Direitos por sorteio", cor: "from-purple-400 to-fuchsia-700" }], correta: "a", feedbackAcerto: "Todos têm os mesmos direitos!", feedbackErro: "Características não mudam os direitos de uma pessoa." },
      { id: "q3", pergunta: "Diversidade significa:", fotoUrl: "", cards: [{ id: "a", emoji: "🌈", titulo: "Conviver com diferenças", cor: "from-pink-400 to-purple-700" }, { id: "b", emoji: "📋", titulo: "Todos serem iguais", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "🚪", titulo: "Separar pessoas", cor: "from-red-400 to-rose-700" }, { id: "d", emoji: "🤫", titulo: "Não conversar", cor: "from-amber-400 to-orange-700" }], correta: "a", feedbackAcerto: "Isso é diversidade!", feedbackErro: "Diversidade é conviver com pessoas diferentes." },
    ],
    falaFinal: "Respeito aprendido!",
  },
  cena06_personagensLugar: {
    ...aulaCorpo.cena06_personagensLugar,
    aurora: "Diferentes formas de participar.", instrucao: "Toque nas camadas", mapaUrl: "",
    camadas: [
      { id: "observar", rotulo: "Observar", emoji: "👀", cor: "from-cyan-400 to-sky-700", rect: { x: 10, y: 10, w: 35, h: 70 }, descricao: "Perceber características sem transformar diferenças em defeitos.", fotoUrl: "" },
      { id: "acolher", rotulo: "Acolher", emoji: "🤝", cor: "from-emerald-400 to-green-700", rect: { x: 55, y: 10, w: 35, h: 70 }, descricao: "Perguntar como ajudar e garantir participação.", fotoUrl: "" },
    ],
    falaFinal: "Observar, acolher e incluir!",
  },
  cena07_sequencia: {
    ...aulaCorpo.cena07_sequencia,
    aurora: "Resolva uma situação com respeito.", instrucao: "Coloque as ações na ordem", pergunta: "Como acolher um colega?",
    paradas: [
      { id: "ouvir", emoji: "👂", rotulo: "1. Ouvir", descricao: "Escute o colega.", fotoUrl: "" },
      { id: "perguntar", emoji: "❓", rotulo: "2. Perguntar", descricao: "Pergunte como incluir.", fotoUrl: "" },
      { id: "adaptar", emoji: "🧩", rotulo: "3. Adaptar", descricao: "Ajuste a brincadeira se necessário.", fotoUrl: "" },
      { id: "participar", emoji: "🤝", rotulo: "4. Participar", descricao: "Brinquem juntos.", fotoUrl: "" },
    ],
    ordemCerta: ["ouvir", "perguntar", "adaptar", "participar"], feedbackAcerto: "Acolhimento completo!", feedbackErro: "Primeiro escute e pergunte.", falaFinal: "Todos podem participar.",
  },
  cena08_voceLe: {
    ...aulaCorpo.cena08_voceLe,
    aurora: "Diário da Diversidade.", tituloLivro: "📓 Diário da Diversidade", subtitulo: "Página 7 — Cada pessoa é única",
    paragrafos: [
      { id: "p1", texto: "As pessoas podem ter PELES, CABELOS, OLHOS, ALTURAS e CORPOS diferentes. Essas características fazem parte da DIVERSIDADE humana.", chaves: ["características", "diversidade"], definicoes: { características: "Aspectos que podemos observar.", diversidade: "Convivência entre diferenças." }, fotoUrl: "" },
      { id: "p2", texto: "Algumas pessoas se movimentam, aprendem ou se comunicam de maneiras diferentes. Todas têm os mesmos DIREITOS e devem PARTICIPAR.", chaves: ["direitos", "participar"], definicoes: { direitos: "Garantias que pertencem a todas as pessoas.", participar: "Fazer parte das atividades." }, fotoUrl: "" },
      { id: "p3", texto: "RESPEITAR é não zombar, não excluir e não decidir o que alguém consegue fazer sem ouvir essa pessoa.", chaves: ["respeitar", "ouvir"], definicoes: { respeitar: "Tratar com dignidade.", ouvir: "Prestar atenção ao que a pessoa comunica." }, fotoUrl: "" },
    ],
    falaFinal: "Toda pessoa merece respeito.",
  },
  cena09_minijogo: {
    ...aulaCorpo.cena09_minijogo,
    aurora: "Escolha atitudes que incluem.", instrucao: "Qual atitude ajuda?", pecas: [{ id: "ouvir", emoji: "👂", rotulo: "Ouvir" }, { id: "incluir", emoji: "🤝", rotulo: "Incluir" }, { id: "zombar", emoji: "😕", rotulo: "Zombar" }, { id: "excluir", emoji: "🚫", rotulo: "Excluir" }],
    rodadas: [
      { id: "r1", municipioA: { nome: "Colega novo", emoji: "🧒", cor: "from-blue-400 to-indigo-700" }, municipioB: { nome: "Brincadeira", emoji: "⚽", cor: "from-emerald-400 to-green-700" }, contexto: "Um colega novo quer brincar. Você deve:", pecaCertaId: "incluir", fotoUrl: "", feedbackAcerto: "INCLUIR!", feedbackErro: "Convide o colega para participar." },
      { id: "r2", municipioA: { nome: "Comunicação", emoji: "🗣️", cor: "from-purple-400 to-fuchsia-700" }, municipioB: { nome: "Tempo", emoji: "⏳", cor: "from-amber-400 to-orange-700" }, contexto: "O colega precisa de mais tempo para responder. Você deve:", pecaCertaId: "ouvir", fotoUrl: "", feedbackAcerto: "OUVIR!", feedbackErro: "Espere e escute com atenção." },
    ],
    falaFinal: "Inclusão em ação!",
  },
  cena10_revisao: {
    ...aulaCorpo.cena10_revisao,
    aurora: "Três ideias importantes.", instrucao: "Toque nas partes", fotoUrl: "",
    fatias: [
      { id: "unicos", rotulo: "Únicos", emoji: "🌟", percentual: 34, cor: "#06b6d4", descricao: "Cada pessoa tem características próprias.", exemplos: ["Aparência", "Jeitos"], fotoUrl: "" },
      { id: "iguais", rotulo: "Direitos", emoji: "⚖️", percentual: 33, cor: "#8b5cf6", descricao: "Todas as pessoas têm os mesmos direitos.", exemplos: ["Aprender", "Brincar"], fotoUrl: "" },
      { id: "respeito", rotulo: "Respeito", emoji: "🤝", percentual: 33, cor: "#10b981", descricao: "Ninguém deve ser ridicularizado ou excluído.", exemplos: ["Ouvir", "Incluir"], fotoUrl: "" },
    ],
    falaFinal: "Diferença + direitos + respeito!",
  },
  cena11_avaliacao: {
    ...aulaCorpo.cena11_avaliacao,
    aurora: "3 perguntas finais.", instrucao: "Escolha entre 4 opções", fotoUrl: "",
    perguntas: [
      { id: "q1", pergunta: "Todas as pessoas têm:", fotoUrl: "", opcoes: [{ id: "a", texto: "Os mesmos direitos", correta: true }, { id: "b", texto: "Direitos pela altura" }, { id: "c", texto: "Direitos pela aparência" }, { id: "d", texto: "Direitos por sorteio" }], feedbackAcerto: "Isso!", feedbackErro: "Direitos são de todas as pessoas." },
      { id: "q2", pergunta: "Respeitar uma diferença é:", fotoUrl: "", opcoes: [{ id: "a", texto: "Ouvir e incluir", correta: true }, { id: "b", texto: "Fazer piada" }, { id: "c", texto: "Excluir" }, { id: "d", texto: "Zombar" }], feedbackAcerto: "Certo!", feedbackErro: "Respeito inclui e acolhe." },
      { id: "q3", pergunta: "Diversidade é:", fotoUrl: "", opcoes: [{ id: "a", texto: "Conviver com diferenças", correta: true }, { id: "b", texto: "Todos serem iguais" }, { id: "c", texto: "Separar a turma" }, { id: "d", texto: "Não participar" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Diversidade é conviver com diferenças." },
    ],
    selo: { nome: "Cristal da Diversidade", subtitulo: "7º cristal desbloqueado!", emoji: "💎", cor: "from-cyan-400 via-purple-500 to-emerald-600" },
    falaFinal: "Cristal da Diversidade recuperado!",
  },
  recompensa: { xp: 100, moedas: 20, medalha: "Guardião do Respeito" },
} as unknown as AulaGeoV1;
