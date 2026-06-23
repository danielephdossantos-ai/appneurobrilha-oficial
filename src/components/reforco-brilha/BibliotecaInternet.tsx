import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { buscarRecursosExternos, type RecursoExterno } from "@/lib/recursos-externos.functions";
import { Card } from "@/components/Layout";
import { Globe, ExternalLink, Loader2, RefreshCw, X, Play } from "lucide-react";

interface Props {
  query: string;
  onAbrirRecurso?: (recurso: RecursoExterno) => void;
}

function extractYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

// transforma URL para uma versão amigável a iframe (mobile / embed)
function toEmbedUrl(url: string, fonte: string): string {
  try {
    if (fonte === "wikipedia") {
      return url.replace("://pt.wikipedia.org/", "://pt.m.wikipedia.org/");
    }
    if (fonte === "wikiversity") {
      return url
        .replace("://pt.wikiversity.org/", "://pt.m.wikiversity.org/")
        .replace("://en.wikiversity.org/", "://en.m.wikiversity.org/");
    }
    return url;
  } catch {
    return url;
  }
}

export function BibliotecaInternet({ query, onAbrirRecurso }: Props) {
  const buscar = useServerFn(buscarRecursosExternos);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [resultados, setResultados] = useState<RecursoExterno[]>([]);
  const [fonte, setFonte] = useState<"cache" | "api" | "vazio" | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [preview, setPreview] = useState<{ url: string; title: string; fonte: string } | null>(null);

  async function rodar(force = false) {
    if (!query || query.trim().length < 3) return;
    setLoading(true);
    setErro(null);
    try {
      const res = await buscar({ data: { query, force } });
      setResultados(res.resultados);
      setFonte(res.fonte);
    } catch (e: any) {
      setErro(e?.message || "Erro ao buscar na biblioteca da internet");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    rodar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (!query || query.trim().length < 3) return null;

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-black uppercase tracking-widest text-emerald-700 flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Biblioteca da Internet
          {fonte === "cache" && (
            <span className="text-[10px] font-bold normal-case tracking-normal bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
              do cache
            </span>
          )}
        </h3>
        <button
          onClick={() => rodar(true)}
          disabled={loading}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 disabled:opacity-50"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
          Atualizar
        </button>
      </div>

      {loading && (
        <Card className="border-2 border-emerald-200 bg-emerald-50/50">
          <div className="flex items-center gap-3 text-emerald-700">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm font-medium">Buscando em fontes públicas (Wikipédia)...</span>
          </div>
        </Card>
      )}

      {erro && !loading && (
        <Card className="border-2 border-destructive/30 bg-destructive/5 text-sm text-destructive">
          {erro}
        </Card>
      )}

      {!loading && !erro && resultados.length === 0 && (
        <Card className="border-2 border-dashed border-emerald-200 bg-emerald-50/30 text-sm text-emerald-800">
          Nenhum resultado encontrado nas bibliotecas públicas para <b>{query}</b>.
        </Card>
      )}

      {!loading && resultados.length > 0 && (
        <div className="grid gap-3 md:grid-cols-2">
          {resultados.map((r, i) => {
            const ytId = r.fonte === "youtube" ? extractYoutubeId(r.url) : null;
            const abreExterno = r.fonte === "youtube-edu";
            const handleClick = (e: React.MouseEvent) => {
              onAbrirRecurso?.(r);
              if (abreExterno) return; // deixa o <a target="_blank"> abrir normalmente
              e.preventDefault();
              if (ytId) {
                setVideoId(ytId);
                setVideoTitle(r.titulo);
              } else {
                setPreview({ url: toEmbedUrl(r.url, r.fonte), title: r.titulo, fonte: r.fonte });
              }
            };
            return (
              <a
                key={r.id ?? `${r.fonte}-${i}`}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="block group cursor-pointer"
              >
                <Card className="h-full border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all bg-white">
                  <div className="flex gap-3">
                    {r.thumbnail ? (
                      <div className="relative h-20 w-20 shrink-0">
                        <img
                          src={r.thumbnail}
                          alt=""
                          loading="lazy"
                          className="h-20 w-20 rounded-xl object-cover border border-emerald-100"
                        />
                        {ytId && (
                          <div className="absolute inset-0 grid place-items-center rounded-xl bg-black/30">
                            <Play className="h-7 w-7 text-white fill-white" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-20 w-20 rounded-xl bg-emerald-100 grid place-items-center shrink-0">
                        <Globe className="h-8 w-8 text-emerald-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {r.fonte}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-emerald-700 line-clamp-2">
                        {r.titulo}
                      </h4>
                      {r.descricao && (
                        <p className="text-xs text-muted-foreground line-clamp-3 mt-1">
                          {r.descricao}
                        </p>
                      )}
                      <div className="flex items-center gap-1 mt-2 text-[11px] font-bold text-emerald-700">
                        {ytId ? "Assistir aqui" : "Abrir aqui"}{" "}
                        {ytId ? <Play className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      )}

      {videoId && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 grid place-items-center p-4 animate-in fade-in"
          onClick={() => setVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoId(null)}
              className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
              aria-label="Fechar"
            >
              <X className="h-4 w-4 text-black" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-white px-4 py-3 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-foreground line-clamp-1">{videoTitle}</p>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank", "noopener,noreferrer");
                }}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 shrink-0"
              >
                Abrir no YouTube <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 grid place-items-center p-2 sm:p-4 animate-in fade-in"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-3 py-2 border-b bg-emerald-50">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                  {preview.fonte}
                </p>
                <p className="text-sm font-bold text-foreground line-clamp-1">{preview.title}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() =>
                    window.open(preview.url, "_blank", "noopener,noreferrer")
                  }
                  className="text-xs font-bold text-emerald-700 hover:bg-emerald-100 px-2 py-1 rounded flex items-center gap-1"
                >
                  Abrir fora <ExternalLink className="h-3 w-3" />
                </button>
                <button
                  onClick={() => setPreview(null)}
                  className="p-1.5 rounded-full hover:bg-emerald-100"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4 text-black" />
                </button>
              </div>
            </div>
            <iframe
              src={preview.url}
              title={preview.title}
              className="flex-1 w-full bg-white"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
