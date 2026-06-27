import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export interface RecursoExterno {
  id?: string;
  fonte:
    | "wikipedia"
    | "youtube"
    | "openlibrary"
    | "wikiversity"
    | "archive";
  titulo: string;
  descricao: string | null;
  url: string;
  thumbnail: string | null;
  conteudo?: string | null;
}

export interface AvisoFonteExterna {
  fonte: "youtube";
  tipo: "sem_chave" | "chave_invalida" | "api_desativada" | "restricao" | "quota" | "erro";
  mensagem: string;
}



// ---------- YouTube (Data API v3) ----------
async function buscarYoutube(query: string): Promise<{ resultados: RecursoExterno[]; aviso?: AvisoFonteExterna }> {
  const key = (process.env.YOUTUBE_API_KEY_NOVA || process.env.YOUTUBE_API_KEY || "").trim();
  if (!key) {
    return {
      resultados: [],
      aviso: {
        fonte: "youtube",
        tipo: "sem_chave",
        mensagem: "A chave do YouTube ainda não está disponível no servidor.",
      },
    };
  }
  // foco educativo infantil em PT-BR; embeddable + safeSearch strict
  const q = `${query} educativo infantil`;
  const url =
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6` +
    `&safeSearch=strict&videoEmbeddable=true&relevanceLanguage=pt&regionCode=BR` +
    `&q=${encodeURIComponent(q)}&key=${key}`;
  try {
    const r = await fetch(url);
    const data: any = await r.json();
    if (!r.ok) {
      const reason = String(data?.error?.errors?.[0]?.reason || data?.error?.status || "").toLowerCase();
      const rawMessage = String(data?.error?.message || "Erro ao consultar o YouTube.");
      let tipo: AvisoFonteExterna["tipo"] = "erro";
      let mensagem = "O YouTube recusou a busca. Verifique se a chave está correta e se a API do YouTube Data v3 está ativa.";

      if (reason.includes("keyinvalid") || rawMessage.toLowerCase().includes("api key not valid")) {
        tipo = "chave_invalida";
        mensagem = "A chave do YouTube foi rejeitada como inválida. Gere uma nova chave e atualize YOUTUBE_API_KEY pelo formulário seguro.";
      } else if (reason.includes("accessnotconfigured") || reason.includes("apihasnotbeenused") || reason.includes("disabled")) {
        tipo = "api_desativada";
        mensagem = "A chave existe, mas a YouTube Data API v3 não está ativada no projeto do Google Cloud dessa chave.";
      } else if (reason.includes("iprefererblocked") || reason.includes("referer") || reason.includes("restriction")) {
        tipo = "restricao";
        mensagem = "A chave do YouTube tem restrição incompatível. Para chamada pelo servidor, use restrição por API e permita YouTube Data API v3.";
      } else if (reason.includes("quota") || reason.includes("dailylimit") || r.status === 403) {
        tipo = "quota";
        mensagem = "A cota do YouTube pode ter acabado ou a chave não tem permissão para usar essa API.";
      }

      console.warn("youtube_search_failed", { status: r.status, reason, message: rawMessage });
      return { resultados: [], aviso: { fonte: "youtube", tipo, mensagem } };
    }
    const items: any[] = data.items || [];
    const resultados = items
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
    return { resultados };
  } catch {
    return {
      resultados: [],
      aviso: {
        fonte: "youtube",
        tipo: "erro",
        mensagem: "Não consegui conectar ao YouTube agora. Tente atualizar a busca em alguns instantes.",
      },
    };
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

// ---------- Wikiversidade PT (cursos/aulas wiki, sem chave) ----------
async function buscarWikiversity(query: string): Promise<RecursoExterno[]> {
  try {
    const searchUrl = `https://pt.wikiversity.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=5&srsearch=${encodeURIComponent(query)}`;
    const r = await fetch(searchUrl, { headers: { "User-Agent": "NeuroBrilhaKids/1.0" } });
    if (!r.ok) return [];
    const data: any = await r.json();
    const hits: any[] = data.query?.search || [];
    return hits.slice(0, 5).map((h) => {
      const snippet = (h.snippet || "").replace(/<[^>]+>/g, "").trim();
      const rec: RecursoExterno = {
        fonte: "wikiversity",
        titulo: h.title,
        descricao: snippet || null,
        url: `https://pt.wikiversity.org/wiki/${encodeURIComponent(h.title.replace(/ /g, "_"))}`,
        thumbnail: null,
        conteudo: null,
      };
      return rec;
    });
  } catch {
    return [];
  }
}

// ---------- Internet Archive (livros/vídeos/áudios públicos, sem chave) ----------
async function buscarArchive(query: string): Promise<RecursoExterno[]> {
  try {
    // foco em materiais educacionais em português
    const q = `(${query}) AND (language:Portuguese OR language:"por") AND (mediatype:texts OR mediatype:movies OR mediatype:audio)`;
    const url = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}&fl[]=identifier&fl[]=title&fl[]=creator&fl[]=description&fl[]=mediatype&rows=6&page=1&output=json`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const data: any = await r.json();
    const docs: any[] = data.response?.docs || [];
    return docs.map((d) => {
      const desc = Array.isArray(d.description) ? d.description[0] : d.description;
      const autor = Array.isArray(d.creator) ? d.creator.join(", ") : d.creator;
      const tipo = d.mediatype === "movies" ? "Vídeo" : d.mediatype === "audio" ? "Áudio" : "Texto";
      const rec: RecursoExterno = {
        fonte: "archive",
        titulo: d.title || d.identifier,
        descricao: [tipo, autor, desc].filter(Boolean).join(" · ").slice(0, 240),
        url: `https://archive.org/details/${d.identifier}`,
        thumbnail: `https://archive.org/services/img/${d.identifier}`,
        conteudo: null,
      };
      return rec;
    });
  } catch {
    return [];
  }
}

// Khan Academy e YouTube EDU removidos: bloqueiam iframe / são apenas links de busca.

export const buscarRecursosExternos = createServerFn({ method: "POST" })
  .inputValidator((d: { query: string; force?: boolean }) => d)
  .handler(async ({ data }) => {
    const queryN = normalize(data.query);
    if (queryN.length < 3) return { resultados: [], fonte: "vazio" as const, avisos: [] as AvisoFonteExterna[] };

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
        const cachedClean = (cached as RecursoExterno[]).filter(
          (r) => (r.fonte as string) !== "khan" && (r.fonte as string) !== "youtube-edu",
        );
        return { resultados: cachedClean, fonte: "cache" as const, avisos: [] as AvisoFonteExterna[] };
      }
    }

    // 2) buscar em paralelo nas fontes públicas
    const [wiki, ytResult, books, wikiv, arch] = await Promise.all([
      buscarWikipedia(queryN).catch(() => []),
      buscarYoutube(queryN).catch(() => ({
        resultados: [],
        aviso: {
          fonte: "youtube",
          tipo: "erro",
          mensagem: "Não consegui consultar o YouTube agora.",
        } satisfies AvisoFonteExterna,
      })),
      buscarOpenLibrary(queryN).catch(() => []),
      buscarWikiversity(queryN).catch(() => []),
      buscarArchive(queryN).catch(() => []),
    ]);
    const yt = ytResult.resultados;
    const avisos = ytResult.aviso ? [ytResult.aviso] : [];

    // intercalar pra diversificar fontes
    const resultados: RecursoExterno[] = [];
    const max = Math.max(wiki.length, yt.length, books.length, wikiv.length, arch.length);
    for (let i = 0; i < max; i++) {
      if (wiki[i]) resultados.push(wiki[i]);
      if (yt[i]) resultados.push(yt[i]);
      if (books[i]) resultados.push(books[i]);
      if (wikiv[i]) resultados.push(wikiv[i]);
      if (arch[i]) resultados.push(arch[i]);
    }

    // 3) salvar no cache
    const cacheaveis = resultados;



    if (cacheaveis.length > 0) {
      const rows = cacheaveis.map((r, i) => ({
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

    return { resultados, fonte: "api" as const, avisos };
  });
