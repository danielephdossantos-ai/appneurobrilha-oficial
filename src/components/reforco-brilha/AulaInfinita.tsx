import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { buscarRecursosExternos, type RecursoExterno } from "@/lib/recursos-externos.functions";
import { Card } from "@/components/Layout";
import { Sparkles, Loader2, RefreshCw, X, Play, ExternalLink, BookOpen, Video, Library, GraduationCap, Archive } from "lucide-react";
import { SpeakButton } from "@/components/ui/SpeakButton";

interface Props {
  query: string;
}

const SECOES: { fonte: RecursoExterno["fonte"]; titulo: string; icone: any; cor: string; bg: string; border: string }[] = [
  { fonte: "wikipedia",   titulo: "📖 Leia e entenda",       icone: BookOpen,       cor: "text-sky-700",     bg: "bg-sky-50",     border: "border-sky-200" },
  { fonte: "youtube",     titulo: "🎥 Assista em vídeo",     icone: Video,          cor: "text-red-700",     bg: "bg-red-50",     border: "border-red-200" },
  { fonte: "wikiversity", titulo: "🎓 Curso completo",       icone: GraduationCap,  cor: "text-violet-700",  bg: "bg-violet-50",  border: "border-violet-200" },
  { fonte: "openlibrary", titulo: "📚 Livros recomendados",  icone: Library,        cor: "text-amber-700",   bg: "bg-amber-50",   border: "border-amber-200" },
  { fonte: "archive",     titulo: "🗄️ Acervo digital",       icone: Archive,        cor: "text-stone-700",   bg: "bg-stone-50",   border: "border-stone-200" },
];

function extractYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
function toEmbedUrl(url: string, fonte: string): string {
  try {
    if (fonte === "wikipedia") return url.replace("://pt.wikipedia.org/", "://pt.m.wikipedia.org/");
    if (fonte === "wikiversity")
      return url.replace("://pt.wikiversity.org/", "://pt.m.wikiversity.org/").replace("://en.wikiversity.org/", "://en.m.wikiversity.org/");
    // YouTube watch/shorts/youtu.be -> player embed — evita ERR_BLOCKED_BY_RESPONSE
    const yt = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1&playsinline=1`;
    return url;
  } catch {
    return url;
  }
}

export function AulaInfinita({ query }: Props) {
  const buscar = useServerFn(buscarRecursosExternos);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [resultados, setResultados] = useState<RecursoExterno[]>([]);
  const [avisos, setAvisos] = useState<string[]>([]);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [preview, setPreview] = useState<{ url: string; title: string; fonte: string } | null>(null);

  async function rodar(force = false) {
    if (!query || query.trim().length < 3) return;
    setLoading(true);
    setErro(null);
    try {
      const res = await buscar({ data: { query, force } });
      setResultados(res.resultados);
      setAvisos((res.avisos || []).map((aviso: { mensagem: string }) => aviso.mensagem));
    } catch (e: any) {
      setErro(e?.message || "Erro ao montar a aula");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    rodar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (!query || query.trim().length < 3) return null;

  const porFonte = new Map<string, RecursoExterno[]>();
  for (const r of resultados) {
    if (!porFonte.has(r.fonte)) porFonte.set(r.fonte, []);
    porFonte.get(r.fonte)!.push(r);
  }

  const totalSecoes = SECOES.filter((s) => (porFonte.get(s.fonte) || []).length > 0).length;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-fuchsia-50 to-amber-50">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl bg-primary text-white grid place-items-center shrink-0 shadow-glow">
            <Sparkles className="h-7 w-7" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Aula Brilha Infinita
              </span>
              <span className="text-[10px] font-bold text-muted-foreground">
                montada agora com bibliotecas públicas
              </span>
            </div>
            <h4 className="text-xl font-black text-foreground capitalize">{query}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Aula montada agora com {resultados.length} recurso(s) reais de Wikipédia, YouTube, Wikiversidade, OpenLibrary e Internet Archive — tudo gratuito.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <SpeakButton
                text={`${query}. Aula montada agora com ${resultados.length} recursos de bibliotecas públicas.`}
                label="Ouvir intro"
              />
              <button
                onClick={() => rodar(true)}
                disabled={loading}
                className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
                Atualizar aula
              </button>
            </div>
          </div>
        </div>
      </Card>

      {loading && (
        <Card className="border-2 border-primary/20 bg-primary/5">
          <div className="flex items-center gap-3 text-primary">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm font-medium">Montando a aula a partir de fontes públicas…</span>
          </div>
        </Card>
      )}

      {erro && !loading && (
        <Card className="border-2 border-destructive/30 bg-destructive/5 text-sm text-destructive">{erro}</Card>
      )}

      {!loading && !erro && avisos.length > 0 && (
        <Card className="border-2 border-amber-200 bg-amber-50 text-sm text-amber-900">
          <div className="font-black mb-1">Atenção no YouTube</div>
          <ul className="list-disc pl-5 space-y-1">
            {avisos.map((aviso) => (
              <li key={aviso}>{aviso}</li>
            ))}
          </ul>
        </Card>
      )}

      {!loading && !erro && totalSecoes === 0 && (
        <Card className="border-2 border-dashed border-muted text-sm text-muted-foreground">
          Não encontramos material público para <b>{query}</b>. Tente palavras mais simples (ex: "frações", "verbos", "sistema solar").
        </Card>
      )}

      {!loading &&
        SECOES.map((sec) => {
          const itens = porFonte.get(sec.fonte) || [];
          if (itens.length === 0) return null;
          const Icone = sec.icone;
          return (
            <div key={sec.fonte} className="space-y-2">
              <h3 className={`text-sm font-black uppercase tracking-widest flex items-center gap-2 px-1 ${sec.cor}`}>
                <Icone className="h-4 w-4" />
                {sec.titulo}
                <span className="text-[10px] font-bold normal-case tracking-normal text-muted-foreground">
                  ({itens.length})
                </span>
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                {itens.map((r, i) => {
                  const ytId = r.fonte === "youtube" ? extractYoutubeId(r.url) : null;
                  const handleClick = (e: React.MouseEvent) => {
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
                      <Card className={`h-full border-2 ${sec.border} hover:shadow-lg transition-all bg-white`}>
                        <div className="flex gap-3">
                          {r.thumbnail ? (
                            <div className="relative h-20 w-20 shrink-0">
                              <img
                                src={r.thumbnail}
                                alt=""
                                loading="lazy"
                                className={`h-20 w-20 rounded-xl object-cover border ${sec.border}`}
                              />
                              {ytId && (
                                <div className="absolute inset-0 grid place-items-center rounded-xl bg-black/30">
                                  <Play className="h-7 w-7 text-white fill-white" />
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className={`h-20 w-20 rounded-xl ${sec.bg} grid place-items-center shrink-0`}>
                              <Icone className={`h-8 w-8 ${sec.cor}`} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-bold text-sm text-foreground line-clamp-2 group-hover:${sec.cor}`}>
                              {r.titulo}
                            </h4>
                            {r.descricao && (
                              <p className="text-xs text-muted-foreground line-clamp-3 mt-1">{r.descricao}</p>
                            )}
                            <div className="flex items-center justify-between gap-2 mt-2">
                              <div className={`flex items-center gap-1 text-[11px] font-bold ${sec.cor}`}>
                                {ytId ? "Assistir aqui" : "Abrir aqui"}{" "}
                                {ytId ? <Play className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                              </div>
                              <span
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                              >
                                <SpeakButton
                                  size="sm"
                                  text={`${r.titulo}. ${r.descricao || ""}`}
                                  label="Ouvir"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}

      {videoId && (
        <div className="fixed inset-0 z-[100] bg-black/80 grid place-items-center p-4 animate-in fade-in" onClick={() => setVideoId(null)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setVideoId(null)} className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg" aria-label="Fechar">
              <X className="h-4 w-4 text-black" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {preview && (
        <div className="fixed inset-0 z-[100] bg-black/80 grid place-items-center p-2 sm:p-4 animate-in fade-in" onClick={() => setPreview(null)}>
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-3 px-3 py-2 border-b bg-primary/5">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">{preview.fonte}</p>
                <p className="text-sm font-bold text-foreground line-clamp-1">{preview.title}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => window.open(preview.url, "_blank", "noopener,noreferrer")} className="text-xs font-bold text-primary hover:bg-primary/10 px-2 py-1 rounded flex items-center gap-1">
                  Abrir fora <ExternalLink className="h-3 w-3" />
                </button>
                <button onClick={() => setPreview(null)} className="p-1.5 rounded-full hover:bg-primary/10" aria-label="Fechar">
                  <X className="h-4 w-4 text-black" />
                </button>
              </div>
            </div>
            <iframe src={toEmbedUrl(preview.url, preview.fonte)} title={preview.title} className="flex-1 w-full bg-white" sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation" referrerPolicy="no-referrer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
