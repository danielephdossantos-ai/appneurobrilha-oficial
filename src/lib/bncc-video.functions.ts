import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

type Resultado = {
  ok: boolean;
  video_url: string | null;
  titulo: string | null;
  canal: string | null;
  fonte: "youtube" | null;
  error?: string;
};

function getServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

async function youtubeBuscar(query: string): Promise<{
  videoId: string;
  titulo: string;
  canal: string;
} | null> {
  const keys = [process.env.YOUTUBE_API_KEY, process.env.YOUTUBE_API_KEY_NOVA]
    .map((k) => (k || "").trim())
    .filter((k, i, a) => k && a.indexOf(k) === i);
  if (keys.length === 0) return null;

  const q = `${query} aula educativo`;
  for (const key of keys) {
    const url =
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5` +
      `&safeSearch=strict&videoEmbeddable=true&relevanceLanguage=pt&regionCode=BR` +
      `&q=${encodeURIComponent(q)}&key=${key}`;
    try {
      const r = await fetch(url);
      const data: any = await r.json();
      if (!r.ok) continue;
      const item = (data.items || []).find((it: any) => it?.id?.videoId);
      if (item) {
        return {
          videoId: item.id.videoId,
          titulo: item.snippet?.title || "Vídeo",
          canal: item.snippet?.channelTitle || "",
        };
      }
    } catch {
      // tenta próxima chave
    }
  }
  return null;
}

export const buscarVideoBncc = createServerFn({ method: "POST" })
  .inputValidator((d: { codigo: string; query?: string; force?: boolean }) => d)
  .handler(async ({ data }): Promise<Resultado> => {
    const supabase = getServerClient();

    // monta query a partir do código + título/habilidade
    const [{ data: meta }, { data: conteudo }] = await Promise.all([
      supabase
        .from("bncc_biblioteca")
        .select("codigo,ano,componente,habilidade")
        .eq("codigo", data.codigo)
        .maybeSingle(),
      supabase
        .from("bncc_conteudo")
        .select("codigo,titulo,video_url")
        .eq("codigo", data.codigo)
        .maybeSingle(),
    ]);

    // Se já existe vídeo e não é force, retorna o atual
    if (!data.force && conteudo?.video_url) {
      return {
        ok: true,
        video_url: conteudo.video_url,
        titulo: conteudo.titulo,
        canal: null,
        fonte: "youtube",
      };
    }

    const query =
      data.query ||
      [
        conteudo?.titulo,
        (meta as any)?.habilidade,
        (meta as any)?.componente,
        (meta as any)?.ano ? `${(meta as any).ano} ano` : "",
      ]
        .filter(Boolean)
        .join(" ")
        .trim() ||
      data.codigo;

    const hit = await youtubeBuscar(query);
    if (!hit) {
      return {
        ok: false,
        video_url: null,
        titulo: null,
        canal: null,
        fonte: null,
        error: "Nenhum vídeo encontrado no YouTube agora.",
      };
    }

    const video_url = `https://www.youtube-nocookie.com/embed/${hit.videoId}`;

    // upsert do video_url
    await supabase
      .from("bncc_conteudo")
      .upsert(
        { codigo: data.codigo, video_url },
        { onConflict: "codigo" },
      );

    return {
      ok: true,
      video_url,
      titulo: hit.titulo,
      canal: hit.canal,
      fonte: "youtube",
    };
  });
