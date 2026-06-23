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

// ---------- YouTube (Data API v3) ----------
async function buscarYoutube(query: string): Promise<RecursoExterno[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return [];
  // foco educativo infantil em PT-BR; embeddable + safeSearch strict
  const q = `${query} educativo infantil`;
  const url =
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6` +
    `&safeSearch=strict&videoEmbeddable=true&relevanceLanguage=pt&regionCode=BR` +
    `&q=${encodeURIComponent(q)}&key=${key}`;
  try {
    const r = await fetch(url);
    if (!r.ok) return [];
    const data: any = await r.json();
    const items: any[] = data.items || [];
    return items
      .filter((it) => it.id?.videoId)
      .map((it) => {
        const sn = it.snippet || {};
        const thumb =
          sn.thumbnails?.high?.url || sn.thumbnails?.medium?.url || sn.thumbnails?.default?.url || null;
        const rec: RecursoExterno = {
          fonte: "youtube",
          titulo: sn.title || "Vídeo",
          descricao: sn.channelTitle ? `${sn.channelTitle} — ${sn.description || ""}`.trim() : sn.description || null,
          url: `https://www.youtube.com/watch?v=${it.id.videoId}`,
          thumbnail: thumb,
          conteudo: null,
        };
        return rec;
      });
  } catch {
    return [];
  }
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

// ---------- OpenLibrary (livros, sem chave) ----------
async function buscarOpenLibrary(query: string): Promise<RecursoExterno[]> {
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6&language=por`;
    const r = await fetch(url, { headers: { "User-Agent": "NeuroBrilhaKids/1.0" } });
    if (!r.ok) return [];
    const data: any = await r.json();
    const docs: any[] = data.docs || [];
    return docs.slice(0, 6).map((d) => {
      const key = d.key as string; // "/works/OL12345W"
      const coverId = d.cover_i;
      const autor = Array.isArray(d.author_name) ? d.author_name.slice(0, 2).join(", ") : null;
      const ano = d.first_publish_year ? ` (${d.first_publish_year})` : "";
      const rec: RecursoExterno = {
        fonte: "openlibrary",
        titulo: d.title || "Livro",
        descricao: autor ? `${autor}${ano}` : ano || null,
        url: `https://openlibrary.org${key}`,
        thumbnail: coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null,
        conteudo: null,
      };
      return rec;
    });
  } catch {
    return [];
  }
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
    // 2) buscar nas APIs públicas (Wikipédia + YouTube em paralelo)
    const [wiki, yt] = await Promise.all([
      buscarWikipedia(queryN).catch(() => []),
      buscarYoutube(queryN).catch(() => []),
    ]);
    // intercalar: 1 wiki, 1 yt, ... para diversificar
    const resultados: RecursoExterno[] = [];
    const max = Math.max(wiki.length, yt.length);
    for (let i = 0; i < max; i++) {
      if (wiki[i]) resultados.push(wiki[i]);
      if (yt[i]) resultados.push(yt[i]);
    }

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
