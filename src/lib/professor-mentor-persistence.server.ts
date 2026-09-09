import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";

function db() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

export function criarCacheKey(parts: Array<string | number | null | undefined>): string {
  const normalized = parts.map((p) => String(p ?? "").trim().toLowerCase().replace(/\s+/g, " ")).join("|");
  return createHash("sha256").update(normalized).digest("hex");
}

export async function buscarAulaMentorPorCache(cacheKey: string) {
  const supabase = db();
  const { data: cache, error } = await supabase
    .from("rb_aulas_geradas_ia")
    .select("id,aula_id,conteudo,cache_key")
    .eq("cache_key", cacheKey)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  if (!cache?.aula_id) return null;

  const { data: paginas, error: pagError } = await supabase
    .from("rb_paginas_aula")
    .select("id,ordem,tipo,titulo,conteudo")
    .eq("aula_id", cache.aula_id)
    .order("ordem", { ascending: true });
  if (pagError) throw pagError;
  if (!paginas?.length) return null;
  return { cacheId: cache.id, aulaId: cache.aula_id, conteudo: cache.conteudo, paginas };
}

export async function persistirAulaMentor(input: {
  cacheKey: string;
  modulo: string;
  dificuldadeOriginal: string;
  titulo: string;
  objetivo?: string;
  faixaEtaria?: string;
  nivel?: string;
  provider: string;
  conteudo: any;
  paginas: Array<{ ordem: number; tipo: string; titulo?: string; conteudo: any }>;
  tags?: string[];
}) {
  const supabase = db();

  const { data: aula, error: aulaError } = await supabase
    .from("rb_aulas")
    .insert({
      habilidade_id: null,
      titulo: input.titulo,
      objetivo: input.objetivo ?? null,
      faixa_etaria: input.faixaEtaria ?? null,
      nivel: input.nivel ?? "basico",
      ordem: 0,
      modulo: input.modulo,
      cache_key: input.cacheKey,
      modelo_ia: input.provider,
      conteudo_ia: input.conteudo,
    })
    .select("id")
    .single();
  if (aulaError || !aula?.id) throw aulaError ?? new Error("Não foi possível persistir a aula canônica.");

  try {
    const rows = input.paginas.map((p) => ({ ...p, aula_id: aula.id }));
    const { error: pagesError } = await supabase.from("rb_paginas_aula").insert(rows);
    if (pagesError) throw pagesError;

    const { data: cache, error: cacheError } = await supabase
      .from("rb_aulas_geradas_ia")
      .upsert({
        aula_id: aula.id,
        cache_key: input.cacheKey,
        modulo: input.modulo,
        modelo_ia: input.provider,
        dificuldade_original: input.dificuldadeOriginal,
        conteudo: input.conteudo,
        tags: input.tags ?? [],
      }, { onConflict: "cache_key" })
      .select("id")
      .single();
    if (cacheError) throw cacheError;

    return { aulaId: aula.id, cacheId: cache?.id ?? null };
  } catch (error) {
    await supabase.from("rb_aulas").delete().eq("id", aula.id);
    throw error;
  }
}
