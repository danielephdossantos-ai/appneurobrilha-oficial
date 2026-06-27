import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, CheckCircle2, X, Sparkles, ArrowRight, RotateCw, BookOpen } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { gerarAulaInterativa, type AulaInterativa, type TelaInterativa } from "@/lib/aula-interativa-ia.functions";
import { toast } from "sonner";

interface Props {
  area: string;
  semanaNumero: number;
  semanaTema: string;
  semanaDescricao?: string;
  habilidadeNome?: string;
  idade?: number;
  serie?: string;
  onClose: () => void;
  onConcluir?: () => void;
  onAbrirApostila?: () => void;
}

export function AulaInterativaIA(props: Props) {
  const { area, semanaNumero, semanaTema, idade, serie } = props;
  const [aula, setAula] = useState<AulaInterativa | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [resposta, setResposta] = useState<string | null>(null);
  const [acertou, setAcertou] = useState<boolean | null>(null);
  const [concluida, setConcluida] = useState(false);
  const gerar = useServerFn(gerarAulaInterativa);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setErro(null);
      try {
        // 1) tenta cache
        const { data: cache } = await (supabase as any)
          .from("rb_aulas_ia")
          .select("conteudo")
          .eq("area", area)
          .eq("semana_numero", semanaNumero)
          .eq("tema", semanaTema)
          .eq("idade", idade ?? null)
          .eq("serie", serie ?? null)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (cancelled) return;
        if (cache?.conteudo) {
          setAula(cache.conteudo as AulaInterativa);
          setLoading(false);
          return;
        }
        // 2) gera via Groq
        const r = await gerar({
          data: {
            area,
            semanaNumero,
            semanaTema,
            semanaDescricao: props.semanaDescricao,
            habilidadeNome: props.habilidadeNome,
            idade,
            serie,
          },
        });
        if (cancelled) return;
        if (!r.ok || !r.aula) {
          setErro(r.error || "Não consegui gerar a aula agora.");
          setLoading(false);
          return;
        }
        setAula(r.aula);
        // 3) salva cache (best-effort)
        await supabase.from("rb_aulas_ia" as any).insert({
          area,
          semana_numero: semanaNumero,
          tema: semanaTema,
          idade: idade ?? null,
          serie: serie ?? null,
          conteudo: r.aula,
        });
      } catch (e: any) {
        if (!cancelled) setErro(e?.message || "Erro inesperado");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area, semanaNumero, semanaTema, idade, serie]);

  const tela: TelaInterativa | undefined = aula?.telas[idx];
  const total = aula?.telas.length ?? 0;
  const ehUltima = idx === total - 1;
  const precisaResposta = tela && tela.tipo !== "exemplo" && !!tela.resposta;

  const proxima = () => {
    setResposta(null);
    setAcertou(null);
    if (ehUltima) {
      setConcluida(true);
      props.onConcluir?.();
      return;
    }
    setIdx((i) => i + 1);
  };

  const conferir = (alt: string) => {
    if (!tela?.resposta) return;
    setResposta(alt);
    const ok = alt.trim().toLowerCase() === tela.resposta.trim().toLowerCase();
    setAcertou(ok);
    if (ok) toast.success("Acertou! 🎉");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border-2 border-amber-500/40 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Aula Brilha · Semana {semanaNumero}
          </div>
          <div className="flex items-center gap-1">
            {props.onAbrirApostila && (
              <button
                onClick={props.onAbrirApostila}
                className="px-2 py-1 rounded-lg bg-amber-500/10 text-amber-700 hover:bg-amber-500/20 text-[11px] font-black flex items-center gap-1"
                aria-label="Abrir aula completa"
              >
                <BookOpen className="h-3.5 w-3.5" /> Aula completa
              </button>
            )}
            <button onClick={props.onClose} className="p-1 hover:bg-muted rounded" aria-label="Fechar">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center gap-2 p-10 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p className="text-sm">Brilha está preparando a aula…</p>
          </div>
        )}

        {!loading && erro && (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <p className="text-sm text-red-500">{erro}</p>
            <button
              onClick={() => { setErro(null); setIdx(0); setAula(null); setLoading(true); setTimeout(() => window.location.reload(), 50); }}
              className="px-3 py-2 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center gap-1"
            >
              <RotateCw className="h-3 w-3" /> Tentar de novo
            </button>
          </div>
        )}

        {!loading && !erro && aula && !concluida && tela && (
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <div className="flex gap-1">
              {aula.telas.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i <= idx ? "bg-amber-500" : "bg-amber-500/15"}`}
                />
              ))}
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">{tela.emoji ?? "✨"}</div>
              <h3 className="font-bold text-base">{tela.titulo}</h3>
              <p className="text-lg mt-2 leading-snug">{tela.conteudo}</p>
            </div>

            {tela.alternativas && tela.alternativas.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {tela.alternativas.map((alt) => {
                  const escolhida = resposta === alt;
                  const correta = tela.resposta?.trim().toLowerCase() === alt.trim().toLowerCase();
                  const cor =
                    resposta == null
                      ? "border-border hover:border-amber-500 hover:bg-amber-500/10"
                      : escolhida
                        ? correta
                          ? "border-emerald-500 bg-emerald-500/15"
                          : "border-red-500 bg-red-500/15"
                        : correta
                          ? "border-emerald-500/60 bg-emerald-500/10"
                          : "border-border opacity-60";
                  return (
                    <button
                      key={alt}
                      onClick={() => resposta == null && conferir(alt)}
                      disabled={resposta != null}
                      className={`py-3 px-2 rounded-xl border-2 font-semibold text-sm transition-all ${cor}`}
                    >
                      {alt}
                    </button>
                  );
                })}
              </div>
            )}

            {resposta != null && acertou === false && tela.dica && (
              <p className="text-xs text-center text-muted-foreground">💡 {tela.dica}</p>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={proxima}
                disabled={precisaResposta && resposta == null}
                className="px-4 py-2 rounded-xl bg-amber-500 text-white font-bold text-sm flex items-center gap-1 disabled:opacity-40"
              >
                {ehUltima ? "Concluir" : "Próximo"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {!loading && concluida && (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            <h3 className="font-bold text-lg">Aula concluída!</h3>
            <p className="text-sm text-muted-foreground">Mandou bem demais! 💛</p>
            <button onClick={props.onClose} className="mt-2 px-4 py-2 rounded-xl bg-amber-500 text-white font-bold text-sm">
              Voltar ao plano
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
