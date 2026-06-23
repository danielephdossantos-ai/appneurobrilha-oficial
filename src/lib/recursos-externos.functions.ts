import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export interface RecursoExterno {
  id?: string;
  fonte: "wikipedia" | "youtube" | "openlibrary";
  titulo: string;
  descricao: string | null;
  url: string;
  thumbnail: string | null;
  conteudo?: string | null;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

// ---------- Wikipédia (PT) ----------
async function buscarWikipedia(query: string): Promise<RecursoExterno[]> {
  // 1) fulltext search retorna lista de artigos relevantes
  const searchUrl = `https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=5&srsearch=${encodeURIComponent(
    query,
  )}`;
  const searchRes = await fetch(searchUrl, {
    headers: { "User-Agent": "NeuroBrilhaKids/1.0 (educacional)" },
  });
  if (!searchRes.ok) return [];
  const data = (await searchRes.json()) as { query?: { search?: Array<{ title: string }> } };
  const titles = (data.query?.search || []).map((h) => h.title);
  if (titles.length === 0) return [];

  // 2) buscar summary REST de cada título (em paralelo)
  const summaries = await Promise.all(
    titles.slice(0, 5).map(async (titulo) => {
      try {
        const r = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`,
          { headers: { "User-Agent": "NeuroBrilhaKids/1.0" } },
        );
        if (!r.ok) return null;
        const s: any = await r.json();
        if (s.type === "disambiguation") return null;
        const recurso: RecursoExterno = {
          fonte: "wikipedia",
          titulo: s.title,
          descricao: s.extract || s.description || null,
          url: s.content_urls?.desktop?.page || `https://pt.wikipedia.org/wiki/${encodeURIComponent(titulo)}`,
          thumbnail: s.thumbnail?.source || null,
          conteudo: s.extract || null,
        };
        return recurso;
      } catch {
        return null;
      }
    }),
  );

  return summaries.filter((x): x is RecursoExterno => x !== null);
}

export const buscarRecursosExternos = createServerFn({ method: "POST" })
  .inputValidator((d: { query: string; force?: boolean }) => d)
  .handler(async ({ data }) => {
    const queryN = normalize(data.query);
    if (queryN.length < 3) return { resultados: [], fonte: "vazio" as const };

    const supabase = getServerClient();

    // 1) cache
    if (!data.force) {
      const { data: cached } = await supabase
        .from("rb_recursos_externos")
        .select("id,fonte,titulo,descricao,url,thumbnail,conteudo")
        .eq("query_normalizada", queryN)
        .gt("expires_at", new Date().toISOString())
        .order("ordem", { ascending: true })
        .limit(20);

      if (cached && cached.length > 0) {
        return { resultados: cached as RecursoExterno[], fonte: "cache" as const };
      }
    }

    // 2) buscar nas APIs públicas (por enquanto só Wikipédia)
    const resultados = await buscarWikipedia(queryN);

    // 3) salvar no cache
    if (resultados.length > 0) {
      const rows = resultados.map((r, i) => ({
        query_normalizada: queryN,
        fonte: r.fonte,
        titulo: r.titulo,
        descricao: r.descricao,
        url: r.url,
        thumbnail: r.thumbnail,
        conteudo: r.conteudo ?? null,
        ordem: i,
      }));
      await supabase.from("rb_recursos_externos").insert(rows);
    }

    return { resultados, fonte: "api" as const };
  });
