import { supabase } from "@/database/supabase/client";

export interface RBHabilidade {
  id: string;
  categoria_id: string;
  nome: string;
  descricao: string | null;
  palavras_chave: string[];
}

export interface RBCategoria {
  id: string;
  nome: string;
  cor: string | null;
  icone: string | null;
}

export interface RBAula {
  id: string;
  habilidade_id: string;
  titulo: string;
  objetivo: string | null;
  faixa_etaria: string | null;
  nivel: string;
}

export interface RBAtividadeRel {
  id: string;
  habilidade_id: string;
  atividade_id: string;
  titulo: string | null;
  modulo: string | null;
  rota: string | null;
}

export interface ScoredHabilidade extends RBHabilidade {
  score: number;
  matches: string[];
  categoria?: RBCategoria;
}

export interface SearchResult {
  main: ScoredHabilidade | null;
  related: ScoredHabilidade[];
  aulas: RBAula[];
  atividades: RBAtividadeRel[];
  query: string;
  tokens: string[];
}

// stopwords PT-BR comuns que atrapalham a busca
const STOPWORDS = new Set([
  "a","o","as","os","de","da","do","das","dos","e","ou","em","no","na","nos","nas",
  "um","uma","uns","umas","para","por","pra","com","sem","que","se","meu","minha",
  "seu","sua","ele","ela","eles","elas","muito","muita","muitos","muitas","mais",
  "menos","como","quando","onde","porque","por","ja","já","ser","estar","tem","ter",
  "nao","não","sim","esta","está","isso","isto","esse","essa","aquele","aquela",
  "consegue","consigo","conseguir","fazer","faz","fica","ficar","tá","ta","muito",
  "está","crianca","criança","filho","filha","aluno","aluna",
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Dicionário de sinônimos / expressões → palavras-chave pedagógicas.
// Permite busca semântica SEM IA. Chave: trecho normalizado (sem acento, minúsculo).
// Valor: tokens pedagógicos para expandir a busca.
const SYNONYMS: Record<string, string[]> = {
  // copiar da lousa / quadro
  "copiar da lousa": ["atencao", "visual", "coordenacao", "motora", "grafomotricidade", "escrita"],
  "copiar do quadro": ["atencao", "visual", "coordenacao", "motora", "grafomotricidade", "escrita"],
  "copiar lousa": ["atencao", "visual", "coordenacao", "motora", "grafomotricidade", "escrita"],
  "copiar quadro": ["atencao", "visual", "coordenacao", "motora", "grafomotricidade", "escrita"],
  lousa: ["atencao", "visual", "escrita", "grafomotricidade"],
  quadro: ["atencao", "visual", "escrita", "grafomotricidade"],
  // leitura
  "juntar silabas": ["silabas", "leitura", "consciencia", "fonologica", "alfabetizacao"],
  "juntar letras": ["silabas", "leitura", "consciencia", "fonologica", "alfabetizacao"],
  silabar: ["silabas", "leitura", "alfabetizacao"],
  ler: ["leitura", "alfabetizacao", "decodificacao"],
  letra: ["alfabeto", "letras", "alfabetizacao"],
  letras: ["alfabeto", "alfabetizacao"],
  vogal: ["vogais", "alfabeto", "alfabetizacao"],
  vogais: ["alfabeto", "alfabetizacao"],
  alfabeto: ["letras", "alfabetizacao"],
  // escrita
  escrever: ["escrita", "grafomotricidade", "coordenacao", "motora"],
  caligrafia: ["escrita", "grafomotricidade", "coordenacao", "motora"],
  letrinha: ["escrita", "grafomotricidade"],
  // matematica
  conta: ["matematica", "calculo", "operacoes"],
  contas: ["matematica", "calculo", "operacoes"],
  somar: ["adicao", "matematica", "operacoes"],
  soma: ["adicao", "matematica", "operacoes"],
  subtrair: ["subtracao", "matematica", "operacoes"],
  diminuir: ["subtracao", "matematica", "operacoes"],
  multiplicar: ["multiplicacao", "tabuada", "matematica"],
  tabuada: ["multiplicacao", "matematica"],
  dividir: ["divisao", "matematica"],
  numero: ["numeros", "matematica", "contagem"],
  numeros: ["matematica", "contagem"],
  contar: ["contagem", "numeros", "matematica"],
  // atencao / foco
  "nao presta atencao": ["atencao", "foco", "concentracao"],
  "nao consegue prestar atencao": ["atencao", "foco", "concentracao"],
  "se distrai": ["atencao", "foco", "concentracao"],
  distrai: ["atencao", "foco", "concentracao"],
  distraido: ["atencao", "foco", "concentracao"],
  foco: ["atencao", "concentracao"],
  concentracao: ["atencao", "foco"],
  // coordenacao
  recortar: ["coordenacao", "motora", "fina", "tesoura"],
  desenhar: ["coordenacao", "motora", "fina", "grafomotricidade"],
  pintar: ["coordenacao", "motora", "fina"],
  amarrar: ["coordenacao", "motora", "fina"],
  // fala / linguagem
  fala: ["linguagem", "oralidade", "comunicacao"],
  falar: ["linguagem", "oralidade", "comunicacao"],
  gagueja: ["linguagem", "fala", "oralidade"],
  // emocional / comportamento
  birra: ["autorregulacao", "emocional", "comportamento"],
  raiva: ["autorregulacao", "emocional"],
  ansiedade: ["autorregulacao", "emocional"],
  // memoria
  esquece: ["memoria", "atencao"],
  esquecer: ["memoria", "atencao"],
  memoria: ["memoria"],
};

function expandWithSynonyms(rawQuery: string, baseTokens: string[]): string[] {
  const queryN = normalize(rawQuery);
  const expanded = new Set(baseTokens);
  // frases primeiro (mais específicas)
  for (const key of Object.keys(SYNONYMS)) {
    if (key.includes(" ") && queryN.includes(key)) {
      SYNONYMS[key].forEach((t) => expanded.add(t));
    }
  }
  // depois tokens individuais
  for (const t of baseTokens) {
    if (SYNONYMS[t]) SYNONYMS[t].forEach((s) => expanded.add(s));
  }
  return Array.from(expanded);
}

function tokenize(query: string): string[] {
  const base = normalize(query)
    .split(" ")
    .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
  return expandWithSynonyms(query, base);
}

function scoreHabilidade(h: RBHabilidade, tokens: string[], rawQuery: string): { score: number; matches: string[] } {
  const nomeN = normalize(h.nome);
  const descN = normalize(h.descricao || "");
  const palavrasN = (h.palavras_chave || []).map(normalize);
  const queryN = normalize(rawQuery);
  const matches: string[] = [];
  let score = 0;

  // match exato do nome inteiro
  if (nomeN === queryN) score += 50;
  // query inteira aparece no nome
  if (queryN.length >= 3 && nomeN.includes(queryN)) score += 20;

  for (const t of tokens) {
    if (nomeN.includes(t)) {
      score += 8;
      matches.push(t);
    }
    if (palavrasN.some((p) => p === t)) {
      score += 6;
      if (!matches.includes(t)) matches.push(t);
    } else if (palavrasN.some((p) => p.includes(t))) {
      score += 3;
      if (!matches.includes(t)) matches.push(t);
    }
    if (descN.includes(t)) {
      score += 2;
      if (!matches.includes(t)) matches.push(t);
    }
  }

  return { score, matches };
}

// Limites pensados para escala (milhares de habilidades/aulas)
const MAX_HABILIDADES_FETCH = 100;      // candidatas trazidas do banco
const MAX_RELATED = 8;                  // habilidades relacionadas exibidas
const DEFAULT_PAGE_SIZE = 20;           // aulas e atividades por página

export interface PageOptions {
  limit?: number;
  offset?: number;
}

export async function searchReforcoBrilha(
  query: string,
  opts: PageOptions = {},
): Promise<SearchResult> {
  const tokens = tokenize(query);
  const result: SearchResult = {
    main: null,
    related: [],
    aulas: [],
    atividades: [],
    query,
    tokens,
  };

  if (tokens.length === 0) return result;

  const limit = Math.min(opts.limit ?? DEFAULT_PAGE_SIZE, 50);
  const offset = Math.max(opts.offset ?? 0, 0);

  // Filtro OR sobre nome + descrição (usa índices GIN trigram)
  const orParts: string[] = [];
  for (const t of tokens) {
    const safe = t.replace(/[%,]/g, "");
    orParts.push(`nome.ilike.%${safe}%`);
    orParts.push(`descricao.ilike.%${safe}%`);
  }

  // Duas consultas paralelas com LIMIT para evitar puxar tudo em escala
  const [byTextRes, byArrayRes] = await Promise.all([
    supabase
      .from("rb_habilidades")
      .select("id,categoria_id,nome,descricao,palavras_chave")
      .or(orParts.join(","))
      .limit(MAX_HABILIDADES_FETCH),
    supabase
      .from("rb_habilidades")
      .select("id,categoria_id,nome,descricao,palavras_chave")
      .overlaps("palavras_chave", tokens)
      .limit(MAX_HABILIDADES_FETCH),
  ]);

  const merged = new Map<string, RBHabilidade>();
  for (const h of [...(byTextRes.data || []), ...(byArrayRes.data || [])]) {
    merged.set(h.id, h as RBHabilidade);
  }
  if (merged.size === 0) return result;

  const scored: ScoredHabilidade[] = Array.from(merged.values())
    .map((h) => {
      const { score, matches } = scoreHabilidade(h, tokens, query);
      return { ...h, score, matches };
    })
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return result;

  // Categorias apenas do top-N exibido (não da lista inteira)
  const top = scored.slice(0, MAX_RELATED + 1);
  const catIds = Array.from(new Set(top.map((s) => s.categoria_id)));
  const { data: cats } = await supabase
    .from("rb_categorias")
    .select("id,nome,cor,icone")
    .in("id", catIds);
  const catMap = new Map<string, RBCategoria>();
  (cats || []).forEach((c: any) => catMap.set(c.id, c as RBCategoria));
  top.forEach((s) => (s.categoria = catMap.get(s.categoria_id)));

  result.main = top[0];
  result.related = top.slice(1, MAX_RELATED + 1);

  // Listas paginadas (aulas + atividades) em paralelo
  const [aulasRes, atividadesRes] = await Promise.all([
    listAulasDaHabilidade(result.main.id, { limit, offset }),
    listAtividadesDaHabilidade(result.main.id, { limit, offset }),
  ]);
  result.aulas = aulasRes;
  result.atividades = atividadesRes;

  return result;
}

export async function listAulasDaHabilidade(
  habilidadeId: string,
  opts: PageOptions = {},
): Promise<RBAula[]> {
  const limit = Math.min(opts.limit ?? DEFAULT_PAGE_SIZE, 50);
  const offset = Math.max(opts.offset ?? 0, 0);
  const { data } = await supabase
    .from("rb_aulas")
    .select("id,habilidade_id,titulo,objetivo,faixa_etaria,nivel")
    .eq("habilidade_id", habilidadeId)
    .order("ordem", { ascending: true })
    .range(offset, offset + limit - 1);
  return (data || []) as RBAula[];
}

export async function listAtividadesDaHabilidade(
  habilidadeId: string,
  opts: PageOptions = {},
): Promise<RBAtividadeRel[]> {
  const limit = Math.min(opts.limit ?? DEFAULT_PAGE_SIZE, 50);
  const offset = Math.max(opts.offset ?? 0, 0);
  const { data } = await supabase
    .from("rb_atividades_relacionadas")
    .select("id,habilidade_id,atividade_id,titulo,modulo,rota")
    .eq("habilidade_id", habilidadeId)
    .order("ordem", { ascending: true })
    .range(offset, offset + limit - 1);
  return (data || []) as RBAtividadeRel[];
}

export async function listHabilidadesDaCategoria(
  categoriaId: string,
  opts: PageOptions = {},
): Promise<RBHabilidade[]> {
  const limit = Math.min(opts.limit ?? DEFAULT_PAGE_SIZE, 100);
  const offset = Math.max(opts.offset ?? 0, 0);
  const { data } = await supabase
    .from("rb_habilidades")
    .select("id,categoria_id,nome,descricao,palavras_chave")
    .eq("categoria_id", categoriaId)
    .order("ordem", { ascending: true })
    .range(offset, offset + limit - 1);
  return (data || []) as RBHabilidade[];
}

