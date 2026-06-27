import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { gerarAulaDinamica, type AulaDinamica } from "@/lib/groq-professor.functions";
import { AulaDinamicaViewer } from "@/components/aula-ia/AulaDinamicaViewer";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/aula-ia/$bnccCode")({
  component: AulaIaPage,
  head: () => ({ meta: [{ title: "Aula Dinâmica IA · Neuro Brilha" }] }),
  errorComponent: ({ error }) => (
    <div className="p-6 text-red-600">Erro: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-6">Aula não encontrada.</div>,
});

function AulaIaPage() {
  const { bnccCode } = Route.useParams();
  const navigate = useNavigate();
  const gerar = useServerFn(gerarAulaDinamica);

  const [aula, setAula] = useState<AulaDinamica | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [info, setInfo] = useState<string>("");

  async function carregar(force = false) {
    setLoading(true);
    setErr(null);
    try {
      // Busca descrição da habilidade no banco BNCC
      const { data: hab } = await supabase
        .from("bncc_biblioteca")
        .select("codigo, descricao, ano, componente, idade_sugerida")
        .eq("codigo", bnccCode)
        .maybeSingle();

      const res = await gerar({
        data: {
          bnccCode,
          descricao: hab?.descricao ?? `Habilidade ${bnccCode} da BNCC`,
          idade: (hab?.idade_sugerida as number | undefined) ?? 9,
          serie: hab?.ano ?? undefined,
          componente: hab?.componente ?? undefined,
          force,
        },
      });

      if (!res.ok || !res.aula) {
        setErr(res.error ?? "Falha ao gerar aula");
      } else {
        setAula(res.aula);
        setInfo(res.cached ? "📚 Aula carregada do cache" : "✨ Aula gerada agora pela IA");
      }
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  if (!aula) {
    return (
      <div className="mx-auto max-w-xl p-6 space-y-4 text-center">
        <h1 className="text-2xl font-bold">Aula IA · {bnccCode}</h1>
        <p className="text-muted-foreground">
          Vamos pedir para o Professor Brilho preparar uma aula dinâmica para
          esta habilidade BNCC.
        </p>
        <button
          onClick={() => carregar(false)}
          disabled={loading}
          className="px-5 py-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
        >
          {loading ? "Gerando…" : "Iniciar aula"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-sm text-muted-foreground underline"
        >
          ← Voltar
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-xs text-muted-foreground pt-3">
        {info} · BNCC {bnccCode}{" "}
        <button onClick={() => carregar(true)} className="underline ml-2">
          regenerar
        </button>
      </div>
      <AulaDinamicaViewer aula={aula} />
    </div>
  );
}
