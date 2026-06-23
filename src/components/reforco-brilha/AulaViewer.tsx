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
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[95vh] flex flex-col animate-in zoom-in-95 duration-300">
        {/* Capa da apostila */}
        <div
          className={`relative px-6 py-5 text-white bg-gradient-to-br ${meta?.cor ?? "from-primary to-primary"} rounded-t-[2rem] shadow-xl`}
        >
          {/* bolinhas decorativas estilo apostila */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-t-[2rem]">
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white" />
            <div className="absolute top-10 right-20 h-6 w-6 rounded-full bg-white" />
            <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full bg-white" />
          </div>

          <div className="relative flex items-center justify-between gap-3">
            <div className="min-w-0 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/25 backdrop-blur grid place-items-center shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-90">
                  Apostila Brilha
                </div>
                <h2 className="text-lg sm:text-2xl font-black truncate leading-tight">{titulo}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center shrink-0"
              aria-label="Fechar aula"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Indicador grande de progresso */}
          {total > 0 && (
            <div className="relative mt-4 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full bg-white text-foreground text-xs font-black shadow-md whitespace-nowrap">
                📖 Página {idx + 1} de {total}
              </div>
              <div className="flex-1 h-2.5 rounded-full bg-white/25 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${((idx + 1) / total) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Mini-trilha clicável */}
          {total > 0 && (
            <div className="relative flex gap-1 mt-2 overflow-x-auto scrollbar-hide pb-1">
              {paginas.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 flex-1 min-w-[18px] rounded-full transition-all ${
                    i === idx ? "bg-white" : i < idx ? "bg-white/70" : "bg-white/25"
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Página estilo papel de apostila */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-amber-50/40 to-white px-5 sm:px-12 py-8 border-x-4 border-amber-100 shadow-2xl">
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
              {/* Cabeçalho do capítulo */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-dashed border-amber-200">
                {meta?.icon && (
                  <div
                    className={`h-14 w-14 rounded-2xl text-white grid place-items-center bg-gradient-to-br ${meta.cor} shadow-lg shrink-0`}
                  >
                    <meta.icon className="h-7 w-7" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Capítulo {idx + 1} · {meta?.label}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight text-foreground">
                    {atual.titulo || meta?.label}
                  </h3>
                </div>
                {(atual.conteudo?.texto || atual.titulo || atual.conteudo?.bullets || atual.conteudo?.passos) && (
                  <button
                    onClick={() => speak(textoCompletoPagina(atual, meta?.label))}
                    className="h-11 w-11 rounded-full bg-primary/10 hover:bg-primary/20 grid place-items-center shrink-0 transition-colors"
                    aria-label="Ouvir página inteira"
                    title="Ouvir página inteira (voz do aparelho)"
                  >
                    <Volume2 className="h-5 w-5 text-primary" />
                  </button>
                )}
              </div>

              <PaginaConteudo pagina={atual} />
            </div>
          )}
        </div>

        {/* Rodapé navegação grande */}
        <div className="bg-white border-x-4 border-b-4 border-amber-100 rounded-b-[2rem] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 shadow-2xl">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-black text-sm bg-secondary text-foreground disabled:opacity-30 hover:bg-secondary/70 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" /> Voltar
          </button>

          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              Você está em
            </div>
            <div className="text-base font-black text-foreground">
              {total > 0 ? `Página ${idx + 1} de ${total}` : ""}
            </div>
          </div>

          {idx < total - 1 ? (
            <button
              onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-2xl font-black text-sm bg-primary text-white shadow-lg hover:opacity-90 hover:scale-105 transition-all"
            >
              Avançar <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-2xl font-black text-sm bg-success text-white shadow-lg hover:opacity-90 hover:scale-105 transition-all"
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
