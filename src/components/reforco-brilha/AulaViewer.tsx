import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/database/supabase/client";
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Lightbulb,
  Eye,
  Hand,
  Users,
  CheckCircle2,
  ArrowRight,
  Volume2,
} from "lucide-react";

export interface AulaViewerProps {
  aulaId: string;
  titulo: string;
  onClose: () => void;
}

interface Pagina {
  id: string;
  ordem: number;
  tipo: string;
  titulo: string | null;
  conteudo: any;
}

const TIPO_META: Record<string, { label: string; icon: any; cor: string }> = {
  o_que_e: { label: "O que é", icon: BookOpen, cor: "from-pink-400 to-rose-500" },
  objetivo: { label: "Objetivo", icon: Target, cor: "from-orange-400 to-red-500" },
  explicacao: { label: "Explicação", icon: Lightbulb, cor: "from-amber-400 to-orange-500" },
  demonstracao: { label: "Demonstração", icon: Eye, cor: "from-emerald-400 to-teal-500" },
  pratica_guiada: { label: "Prática guiada", icon: Hand, cor: "from-sky-400 to-blue-500" },
  dicas_familia: { label: "Dicas para a família", icon: Users, cor: "from-indigo-400 to-purple-500" },
  avaliacao: { label: "Avaliação rápida", icon: CheckCircle2, cor: "from-violet-400 to-fuchsia-500" },
  proximos_passos: { label: "Próximos passos", icon: ArrowRight, cor: "from-rose-400 to-pink-500" },
  exemplo: { label: "Exemplo", icon: Lightbulb, cor: "from-amber-400 to-orange-500" },
  exercicio: { label: "Exercício", icon: Hand, cor: "from-sky-400 to-blue-500" },
  dica: { label: "Dica", icon: Lightbulb, cor: "from-amber-400 to-yellow-500" },
  video: { label: "Vídeo", icon: Eye, cor: "from-emerald-400 to-teal-500" },
  imagem: { label: "Imagem", icon: Eye, cor: "from-emerald-400 to-teal-500" },
  passo_a_passo: { label: "Passo a passo", icon: Hand, cor: "from-sky-400 to-blue-500" },
};

function speak(text: string) {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 0.95;
    synth.speak(u);
  } catch {
    // ignore
  }
}

function PaginaConteudo({ pagina }: { pagina: Pagina }) {
  const c = pagina.conteudo || {};

  return (
    <div className="space-y-5">
      {c.imagem && (
        <div className="rounded-3xl overflow-hidden border border-border bg-secondary/30">
          <img src={c.imagem} alt="" className="w-full max-h-96 object-contain" />
        </div>
      )}

      {c.video && (
        <div className="rounded-3xl overflow-hidden border border-border bg-black">
          <video src={c.video} controls className="w-full max-h-96" />
        </div>
      )}

      {c.audio && (
        <audio src={c.audio} controls className="w-full" />
      )}

      {c.texto && (
        <p className="text-lg leading-relaxed text-foreground font-medium whitespace-pre-line">
          {c.texto}
        </p>
      )}

      {c.destaque && (
        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-2xl">
          <p className="font-bold text-primary-foreground/90 text-base">{c.destaque}</p>
        </div>
      )}

      {Array.isArray(c.bullets) && c.bullets.length > 0 && (
        <ul className="space-y-2">
          {c.bullets.map((b: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-card border border-border rounded-2xl p-3"
            >
              <span className="h-6 w-6 rounded-full bg-primary/15 text-primary grid place-items-center font-black text-xs shrink-0">
                {i + 1}
              </span>
              <span className="text-base">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {Array.isArray(c.passos) && c.passos.length > 0 && (
        <ol className="space-y-2">
          {c.passos.map((p: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-3"
            >
              <span className="h-6 w-6 rounded-full bg-sky-500 text-white grid place-items-center font-black text-xs shrink-0">
                {i + 1}
              </span>
              <span className="text-base text-sky-900">{p}</span>
            </li>
          ))}
        </ol>
      )}

      {Array.isArray(c.exemplos) && c.exemplos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {c.exemplos.map((ex: any, i: number) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4 text-center"
            >
              <div className="text-3xl font-black text-emerald-700">{ex.silaba}</div>
              <ArrowRight className="h-4 w-4 mx-auto my-1 text-emerald-500" />
              <div className="text-lg font-bold text-emerald-900">{ex.palavra}</div>
            </div>
          ))}
        </div>
      )}

      {Array.isArray(c.perguntas) && c.perguntas.length > 0 && (
        <div className="space-y-3">
          {c.perguntas.map((p: any, i: number) => (
            <details
              key={i}
              className="bg-card border border-border rounded-2xl p-4 cursor-pointer group"
            >
              <summary className="font-bold text-foreground flex items-center justify-between">
                <span>
                  <span className="text-primary mr-2">{i + 1}.</span>
                  {p.pergunta}
                </span>
                <span className="text-xs text-muted-foreground group-open:hidden">
                  ver resposta
                </span>
              </summary>
              <div className="mt-3 p-3 bg-success/10 rounded-xl text-success font-bold">
                ✓ {p.resposta}
              </div>
            </details>
          ))}
        </div>
      )}

      {Array.isArray(c.escala) && c.escala.length > 0 && (
        <div className="space-y-2 mt-4">
          <h5 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            Como avaliar
          </h5>
          {c.escala.map((e: any, i: number) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3"
            >
              <span className="text-xs font-black bg-amber-500 text-white px-2 py-0.5 rounded-full">
                {e.min === e.max ? `${e.min} pt` : `${e.min}–${e.max} pts`}
              </span>
              <span className="text-sm text-amber-900">{e.texto}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AulaViewer({ aulaId, titulo, onClose }: AulaViewerProps) {
  const [paginas, setPaginas] = useState<Pagina[]>([]);
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("rb_paginas_aula")
        .select("id,ordem,tipo,titulo,conteudo")
        .eq("aula_id", aulaId)
        .order("ordem", { ascending: true });
      if (!alive) return;
      setPaginas((data || []) as Pagina[]);
      setIdx(0);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [aulaId]);

  const total = paginas.length;
  const atual = paginas[idx];
  const meta = useMemo(
    () => (atual ? TIPO_META[atual.tipo] || TIPO_META.explicacao : null),
    [atual],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => Math.min(total - 1, i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 animate-in fade-in">
      <div className="bg-background rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Capa da aula */}
        <div
          className={`relative px-6 py-4 text-white bg-gradient-to-br ${meta?.cor ?? "from-primary to-primary"}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-90">
                Aula · {idx + 1} de {total || "…"}
              </div>
              <h2 className="text-lg sm:text-xl font-black truncate">{titulo}</h2>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center shrink-0"
              aria-label="Fechar aula"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Trilha de progresso (capítulos) */}
          {total > 0 && (
            <div className="flex gap-1 mt-3 overflow-x-auto scrollbar-hide pb-1">
              {paginas.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 flex-1 min-w-[20px] rounded-full transition-all ${
                    i === idx ? "bg-white" : i < idx ? "bg-white/70" : "bg-white/25"
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Página */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-10 py-8">
          {loading ? (
            <div className="h-64 grid place-items-center text-muted-foreground">
              Carregando aula…
            </div>
          ) : !atual ? (
            <div className="h-64 grid place-items-center text-muted-foreground text-center">
              Esta aula ainda não tem páginas cadastradas.
            </div>
          ) : (
            <div key={atual.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                {meta?.icon && (
                  <div
                    className={`h-12 w-12 rounded-2xl text-white grid place-items-center bg-gradient-to-br ${meta.cor}`}
                  >
                    <meta.icon className="h-6 w-6" />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    {meta?.label}
                  </div>
                  <h3 className="text-2xl font-black leading-tight">
                    {atual.titulo || meta?.label}
                  </h3>
                </div>
                {(atual.conteudo?.texto || atual.titulo) && (
                  <button
                    onClick={() =>
                      speak(`${atual.titulo || meta?.label}. ${atual.conteudo?.texto || ""}`)
                    }
                    className="ml-auto h-10 w-10 rounded-full bg-secondary hover:bg-primary/10 grid place-items-center"
                    aria-label="Ouvir página"
                    title="Ouvir página"
                  >
                    <Volume2 className="h-5 w-5 text-primary" />
                  </button>
                )}
              </div>

              <PaginaConteudo pagina={atual} />
            </div>
          )}
        </div>

        {/* Navegação inferior */}
        <div className="border-t border-border bg-card px-4 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm disabled:opacity-30 hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="h-5 w-5" /> Voltar
          </button>

          <div className="text-xs text-muted-foreground font-bold">
            {total > 0 ? `${idx + 1} / ${total}` : ""}
          </div>

          {idx < total - 1 ? (
            <button
              onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm bg-primary text-white shadow-glow hover:opacity-90 transition-opacity"
            >
              Próxima <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm bg-success text-white hover:opacity-90 transition-opacity"
            >
              Concluir <CheckCircle2 className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AulaViewer;
