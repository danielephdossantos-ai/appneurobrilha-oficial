// Assistente do Professor — sistema de regras do próprio app, SEM IA.
// Conhece as áreas da criança e os materiais do professor e monta
// indicações, rotina semanal e tarefas prontas para enviar.

export type Destino = "crianca" | "professor";
export type Recurso = {
  id: string;
  nome: string;
  descricao: string;
  rota: string;
  destino: Destino;
  disciplina: string;
  idadeMin: number; // idade típica mínima
  idadeMax: number;
  tags: string[];
  fonte: "escola_brilha" | "neuro_treino" | "teacher_text";
  minutos: number;
};

export const RECURSOS: Recurso[] = [
  // ---------- Área da criança ----------
  { id: "primeiros-anos", nome: "Primeiros Anos", descricao: "Estímulos iniciais: sons, cores, formas e fala.", rota: "/primeiros-anos", destino: "crianca", disciplina: "Desenvolvimento", idadeMin: 2, idadeMax: 6, tags: ["infantil", "fala", "linguagem", "comunicacao", "cores", "formas", "estimulo", "atraso"], fonte: "escola_brilha", minutos: 10 },
  { id: "alfabetizacao", nome: "Alfabetização", descricao: "Letras, sons e sílabas passo a passo.", rota: "/alfabetizacao", destino: "crianca", disciplina: "Português", idadeMin: 4, idadeMax: 9, tags: ["leitura", "escrita", "letras", "silabas", "alfabetizacao", "dislexia", "som", "fonema"], fonte: "escola_brilha", minutos: 15 },
  { id: "biblioteca-alfa", nome: "Biblioteca de Alfabetização", descricao: "Histórias curtas por nível de leitura com perguntas.", rota: "/biblioteca-alfa", destino: "crianca", disciplina: "Português", idadeMin: 5, idadeMax: 10, tags: ["leitura", "compreensao", "historia", "fluencia", "dislexia", "interpretacao"], fonte: "escola_brilha", minutos: 15 },
  { id: "historias-brilha", nome: "Histórias Brilha", descricao: "50 histórias com cenários, leitura guiada e perguntas.", rota: "/historias-brilha", destino: "crianca", disciplina: "Português", idadeMin: 4, idadeMax: 10, tags: ["leitura", "historia", "emocoes", "compreensao", "socioemocional", "atencao"], fonte: "escola_brilha", minutos: 12 },
  { id: "soletracao", nome: "Soletração Brilha", descricao: "Treino de soletrar e escrever palavras.", rota: "/soletracao-brilha", destino: "crianca", disciplina: "Português", idadeMin: 6, idadeMax: 12, tags: ["escrita", "ortografia", "soletrar", "palavras", "dislexia", "silabas"], fonte: "escola_brilha", minutos: 10 },
  { id: "rotina-escrita", nome: "Rotina de Escrita", descricao: "Prática diária de escrita com apoio.", rota: "/rotina-escrita", destino: "crianca", disciplina: "Português", idadeMin: 6, idadeMax: 14, tags: ["escrita", "producao", "texto", "coordenacao", "motor", "caligrafia"], fonte: "escola_brilha", minutos: 15 },
  { id: "tabuada", nome: "Tabuada Brilha", descricao: "Tabuada com grupos, grade, lousa do Pip e jogos.", rota: "/tabuada-brilha", destino: "crianca", disciplina: "Matemática", idadeMin: 7, idadeMax: 14, tags: ["matematica", "tabuada", "multiplicacao", "calculo", "discalculia", "numeros"], fonte: "escola_brilha", minutos: 12 },
  { id: "contar-com-pip", nome: "Contar com o Pip", descricao: "Contagem e quantidade com figuras.", rota: "/escola-brilha/contar-com-pip", destino: "crianca", disciplina: "Matemática", idadeMin: 4, idadeMax: 8, tags: ["matematica", "contagem", "numeros", "quantidade", "discalculia", "adicao", "subtracao"], fonte: "escola_brilha", minutos: 10 },
  { id: "professor-matematica", nome: "Professor de Matemática", descricao: "Explicações de matemática passo a passo.", rota: "/professor-matematica", destino: "crianca", disciplina: "Matemática", idadeMin: 7, idadeMax: 15, tags: ["matematica", "calculo", "problemas", "discalculia", "explicacao"], fonte: "escola_brilha", minutos: 15 },
  { id: "matematica-ei", nome: "Matemática Infantil", descricao: "Números, formas e comparação para 3 a 6 anos.", rota: "/escola-brilha/matematica-ei", destino: "crianca", disciplina: "Matemática", idadeMin: 3, idadeMax: 6, tags: ["infantil", "matematica", "contagem", "formas", "numeros"], fonte: "escola_brilha", minutos: 10 },
  { id: "portugues-ei", nome: "Português Infantil", descricao: "Sons, rimas e letras para 3 a 6 anos.", rota: "/escola-brilha/portugues-ei", destino: "crianca", disciplina: "Português", idadeMin: 3, idadeMax: 6, tags: ["infantil", "linguagem", "rimas", "sons", "letras", "fala"], fonte: "escola_brilha", minutos: 10 },
  { id: "escola-brilha", nome: "Escola Brilha", descricao: "Aulas BNCC de todas as matérias por ano.", rota: "/escola-brilha", destino: "crianca", disciplina: "Todas", idadeMin: 6, idadeMax: 15, tags: ["bncc", "aula", "conteudo", "escola", "ciencias", "historia", "geografia", "ingles"], fonte: "escola_brilha", minutos: 20 },
  { id: "dislexia", nome: "Curso Dislexia", descricao: "Leitura estruturada para quem tem dificuldade de ler.", rota: "/escola-brilha/dislexia", destino: "crianca", disciplina: "Português", idadeMin: 6, idadeMax: 14, tags: ["dislexia", "leitura", "fonema", "silabas", "decodificacao"], fonte: "escola_brilha", minutos: 15 },
  { id: "apoio-escolar", nome: "Apoio Escolar", descricao: "Reforço para provas, tarefas e trabalhos.", rota: "/apoio-escolar", destino: "crianca", disciplina: "Todas", idadeMin: 6, idadeMax: 15, tags: ["reforco", "prova", "tarefa", "trabalho", "escola", "estudo"], fonte: "escola_brilha", minutos: 20 },
  { id: "reforco", nome: "Reforço Brilha", descricao: "Busca de conteúdos de reforço por habilidade.", rota: "/reforco-brilha", destino: "crianca", disciplina: "Todas", idadeMin: 6, idadeMax: 15, tags: ["reforco", "habilidade", "revisao", "dificuldade"], fonte: "escola_brilha", minutos: 15 },
  { id: "neuro-treino", nome: "Neuro Treino", descricao: "Atenção, memória e funções executivas em jogos.", rota: "/neuro-treino", destino: "crianca", disciplina: "Funções cognitivas", idadeMin: 3, idadeMax: 8, tags: ["atencao", "memoria", "tdah", "foco", "concentracao", "funcoes executivas", "tea"], fonte: "neuro_treino", minutos: 10 },
  { id: "brilha-vida", nome: "Brilha Vida", descricao: "Emoções, autonomia e vida prática.", rota: "/brilha-vida", destino: "crianca", disciplina: "Socioemocional", idadeMin: 3, idadeMax: 14, tags: ["emocoes", "socioemocional", "autonomia", "regulacao", "tea", "comportamento", "ansiedade", "vida pratica"], fonte: "escola_brilha", minutos: 10 },
  { id: "rotina", nome: "Rotina", descricao: "Rotina visual com lembretes.", rota: "/rotina", destino: "crianca", disciplina: "Autonomia", idadeMin: 3, idadeMax: 15, tags: ["rotina", "organizacao", "tea", "tdah", "previsibilidade", "autonomia"], fonte: "escola_brilha", minutos: 5 },
  // ---------- Área do professor ----------
  { id: "biblioteca-inclusiva", nome: "Biblioteca Inclusiva", descricao: "Aulas adaptadas e apostilas A4 por código BNCC.", rota: "/area-professor/biblioteca-inclusiva", destino: "professor", disciplina: "Todas", idadeMin: 3, idadeMax: 15, tags: ["aula", "bncc", "adaptada", "apostila", "imprimir", "inclusiva", "plano"], fonte: "teacher_text", minutos: 0 },
  { id: "atividades-adaptadas", nome: "Atividades BNCC Adaptadas", descricao: "Folhas prontas da Educação Infantil por código.", rota: "/area-professor/atividades-adaptadas", destino: "professor", disciplina: "Educação Infantil", idadeMin: 3, idadeMax: 6, tags: ["atividade", "imprimir", "infantil", "bncc", "folha", "ei03"], fonte: "teacher_text", minutos: 0 },
  { id: "jogos-imprimir", nome: "Jogos para Imprimir", descricao: "Jogos pedagógicos em folha para sala de aula.", rota: "/area-professor/atividades-imprimir", destino: "professor", disciplina: "Todas", idadeMin: 3, idadeMax: 10, tags: ["jogo", "imprimir", "sala", "atividade", "folha"], fonte: "teacher_text", minutos: 0 },
  { id: "alfabetizacao-prof", nome: "Alfabetização do Professor", descricao: "Planos e materiais de alfabetização.", rota: "/area-professor/alfabetizacao", destino: "professor", disciplina: "Português", idadeMin: 4, idadeMax: 9, tags: ["alfabetizacao", "leitura", "escrita", "plano", "letras"], fonte: "teacher_text", minutos: 0 },
  { id: "tarefas-prof", nome: "Tarefas de Casa", descricao: "Acompanhar e cancelar tarefas enviadas.", rota: "/area-professor/tarefas", destino: "professor", disciplina: "Todas", idadeMin: 3, idadeMax: 15, tags: ["tarefa", "casa", "acompanhar", "enviar"], fonte: "teacher_text", minutos: 0 },
];

const ANO_IDADE: Record<string, number> = { maternal: 3, "pre1": 4, "pre-1": 4, "pre i": 4, "pre2": 5, "pre-2": 5, "pre ii": 5, infantil: 5 };

export function norm(t: string) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function idadeDoAno(ano: string | null | undefined): number | null {
  if (!ano) return null;
  const n = norm(ano);
  for (const k of Object.keys(ANO_IDADE)) if (n.includes(k)) return ANO_IDADE[k];
  const m = n.match(/(\d+)/);
  if (m) { const a = Number(m[1]); if (a >= 1 && a <= 9) return a + 5; }
  return null;
}

export type PerfilApoio = Record<string, unknown> | null | undefined;

const CAMPOS_PERFIL = ["learning_strengths", "support_needs", "effective_strategies", "preferred_response_modes", "communication_supports", "sensory_environment_supports", "routine_and_attention_supports", "literacy_supports", "mathematics_supports"];

/** Palavras-chave do perfil (anamnese pedagógica) da criança. */
export function sinaisDoPerfil(perfil: PerfilApoio): string[] {
  if (!perfil) return [];
  const txt = CAMPOS_PERFIL.flatMap((c) => (Array.isArray(perfil[c]) ? (perfil[c] as string[]) : [])).join(" ");
  const n = norm(txt);
  const sinais = new Set<string>();
  const regras: [RegExp, string[]][] = [
    [/leitur|ler|letra|silab|fonem|dislex|decodific/, ["leitura", "silabas", "dislexia"]],
    [/escrit|caligraf|lapis|motor|coordena/, ["escrita", "motor"]],
    [/matemat|numer|calcul|conta|discalc|quantidad/, ["matematica", "contagem", "discalculia"]],
    [/atenc|foco|concentr|tdah|agita|distra/, ["atencao", "tdah", "rotina"]],
    [/memori/, ["memoria"]],
    [/emoc|ansie|crise|regula|frustr|comport|choro/, ["emocoes", "regulacao"]],
    [/rotina|previs|mudanc|transic|antecip/, ["rotina", "previsibilidade"]],
    [/comunic|fala|verbal|linguag|pictogr/, ["comunicacao", "fala", "linguagem"]],
    [/autism|tea\b|sensor|barulh/, ["tea", "rotina", "emocoes"]],
    [/visual|imagem|figura|desenh/, ["historia", "infantil"]],
  ];
  for (const [re, tags] of regras) if (re.test(n)) tags.forEach((t) => sinais.add(t));
  return [...sinais];
}

export type Indicacao = Recurso & { pontos: number; motivo: string };

export function indicarRecursos(opts: { idade: number | null; sinais: string[]; destino?: Destino; limite?: number }): Indicacao[] {
  const { idade, sinais, destino, limite = 8 } = opts;
  return RECURSOS.filter((r) => (!destino || r.destino === destino) && (idade == null || (idade >= r.idadeMin && idade <= r.idadeMax)))
    .map((r) => {
      const hits = r.tags.filter((t) => sinais.includes(t));
      return { ...r, pontos: hits.length * 10 + (r.destino === "crianca" ? 1 : 0), motivo: hits.length ? `Combina com o perfil: ${hits.slice(0, 3).join(", ")}` : "Adequado para a idade" };
    })
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, limite);
}

/** Pedido livre do professor: busca nos recursos por palavras. */
export function buscarPedido(pedido: string, idade: number | null): Indicacao[] {
  const palavras = norm(pedido).split(/[^a-z0-9]+/).filter((p) => p.length >= 3);
  if (!palavras.length) return [];
  return RECURSOS.map((r) => {
    const base = norm(`${r.nome} ${r.descricao} ${r.disciplina} ${r.tags.join(" ")}`);
    const hits = palavras.filter((p) => base.includes(p) || r.tags.some((t) => t.startsWith(p.slice(0, 5))));
    const idadeOk = idade == null || (idade >= r.idadeMin && idade <= r.idadeMax);
    return { ...r, pontos: hits.length * 10 + (idadeOk ? 3 : 0), motivo: idadeOk ? "Encontrado pelo pedido" : "Encontrado pelo pedido (fora da idade típica)" };
  })
    .filter((r) => r.pontos >= 10)
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, 8);
}

export type ItemRotina = { dia: string; recurso: Recurso; minutos: number };
const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

/** Rotina semanal: 2 atividades curtas por dia, alternando as indicações. */
export function montarRotina(indicacoes: Indicacao[]): ItemRotina[] {
  const criancas = indicacoes.filter((i) => i.destino === "crianca" && i.id !== "rotina");
  if (!criancas.length) return [];
  const itens: ItemRotina[] = [];
  DIAS.forEach((dia, d) => {
    for (let k = 0; k < 2; k++) {
      const r = criancas[(d * 2 + k) % criancas.length];
      if (!itens.some((x) => x.dia === dia && x.recurso.id === r.id)) itens.push({ dia, recurso: r, minutos: r.minutos });
    }
  });
  return itens;
}

export function proximaData(diaIndice: number): string {
  const hoje = new Date();
  const alvo = new Date(hoje);
  const dow = hoje.getDay(); // 0 dom
  let diff = diaIndice + 1 - dow;
  if (diff <= 0) diff += 7;
  alvo.setDate(hoje.getDate() + diff);
  return alvo.toISOString().slice(0, 10);
}
export const DIAS_SEMANA = DIAS;
