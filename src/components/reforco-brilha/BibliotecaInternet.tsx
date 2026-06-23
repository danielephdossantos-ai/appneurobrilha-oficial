import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { buscarRecursosExternos, type RecursoExterno } from "@/lib/recursos-externos.functions";
import { Card } from "@/components/Layout";
import { Globe, ExternalLink, Loader2, RefreshCw } from "lucide-react";

interface Props {
  query: string;
}

export function BibliotecaInternet({ query }: Props) {
  const buscar = useServerFn(buscarRecursosExternos);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [resultados, setResultados] = useState<RecursoExterno[]>([]);
  const [fonte, setFonte] = useState<"cache" | "api" | "vazio" | null>(null);

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
          {resultados.map((r, i) => (
            <a
              key={r.id ?? `${r.fonte}-${i}`}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all bg-white">
                <div className="flex gap-3">
                  {r.thumbnail ? (
                    <img
                      src={r.thumbnail}
                      alt=""
                      loading="lazy"
                      className="h-20 w-20 rounded-xl object-cover shrink-0 border border-emerald-100"
                    />
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
                      Ver mais <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
