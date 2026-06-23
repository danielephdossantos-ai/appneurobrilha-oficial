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

function tokenize(query: string): string[] {
  return normalize(query)
    .split(" ")
    .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
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

export async function searchReforcoBrilha(query: string): Promise<SearchResult> {
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

  // Monta filtro OR: nome ilike token + palavras_chave overlap token
  const orParts: string[] = [];
  for (const t of tokens) {
    const safe = t.replace(/[%,]/g, "");
    orParts.push(`nome.ilike.%${safe}%`);
    orParts.push(`descricao.ilike.%${safe}%`);
  }

  const { data: byText } = await supabase
    .from("rb_habilidades")
    .select("id,categoria_id,nome,descricao,palavras_chave")
    .or(orParts.join(","))
    .limit(50);

  const { data: byArray } = await supabase
    .from("rb_habilidades")
    .select("id,categoria_id,nome,descricao,palavras_chave")
    .overlaps("palavras_chave", tokens)
    .limit(50);

  const merged = new Map<string, RBHabilidade>();
  for (const h of [...(byText || []), ...(byArray || [])]) {
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

  // Buscar categorias dos resultados
  const catIds = Array.from(new Set(scored.map((s) => s.categoria_id)));
  const { data: cats } = await supabase
    .from("rb_categorias")
    .select("id,nome,cor,icone")
    .in("id", catIds);
  const catMap = new Map<string, RBCategoria>();
  (cats || []).forEach((c: any) => catMap.set(c.id, c as RBCategoria));
  scored.forEach((s) => (s.categoria = catMap.get(s.categoria_id)));

  result.main = scored[0];
  result.related = scored.slice(1, 8);

  // Aulas da habilidade principal
  const { data: aulas } = await supabase
    .from("rb_aulas")
    .select("id,habilidade_id,titulo,objetivo,faixa_etaria,nivel")
    .eq("habilidade_id", result.main.id)
    .order("ordem", { ascending: true });
  result.aulas = (aulas || []) as RBAula[];

  // Atividades relacionadas da habilidade principal
  const { data: atividades } = await supabase
    .from("rb_atividades_relacionadas")
    .select("id,habilidade_id,atividade_id,titulo,modulo,rota")
    .eq("habilidade_id", result.main.id)
    .order("ordem", { ascending: true });
  result.atividades = (atividades || []) as RBAtividadeRel[];

  return result;
}
