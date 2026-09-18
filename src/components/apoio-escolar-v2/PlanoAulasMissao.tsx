import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/database/supabase/client";
import {
  criarAulaSegura,
  criarConsultaExataRecursos,
  type PaginaAulaEscolar,
  type TipoMissaoEscolar,
} from "@/lib/apoio-escolar-v2";

interface MissaoParaPlano {
  id: string;
  subject: string;
  topics: string[];
  due_date: string;
}

interface SessaoSalva {
  id: string;
  title: string;
  topic: string;
  status: "planejada" | "em_andamento" | "concluida";
  lesson_pages: PaginaAulaEscolar[];
}

interface Props {
  missao: MissaoParaPlano;
  tipo: TipoMissaoEscolar;
}

function dataParaSessao(indice: number, limite: string) {
  const data = new Date();
  data.setDate(data.getDate() + indice);
  const sugerida = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;
  return sugerida > limite ? limite : sugerida;
}

export function PlanoAulasMissao({ missao, tipo }: Props) {
  const qc = useQueryClient();
  const chave = ["school-support-sessions", missao.id] as const;
  const [sessaoAtiva, setSessaoAtiva] = useState<SessaoSalva | null>(null);
  const [pagina, setPagina] = useState(0);

  const { data: sessoes = [], isLoading } = useQuery({
    queryKey: chave,
    queryFn: async () => {
      const resposta = await (supabase as any)
        .from("school_support_sessions")
        .select("id,title,topic,status,lesson_pages")
        .eq("mission_id", missao.id)
        .order("scheduled_date", { ascending: true });
      if (resposta.error) throw resposta.error;
      return (resposta.data ?? []) as SessaoSalva[];
    },
  });

  const criarPlano = useMutation({
    mutationFn: async () => {
      const registros = missao.topics.map((topico, indice) => ({
        mission_id: missao.id,
        scheduled_date: dataParaSessao(indice, missao.due_date),
        title: `Aula: ${topico}`,
        topic: topico,
        lesson_pages: criarAulaSegura(missao.subject, topico),
        resource_query: criarConsultaExataRecursos({
          tipo,
          materia: missao.subject,
          conteudos: [topico],
          dataEntrega: missao.due_date,
        }),
      }));
      const resposta = await (supabase as any).from("school_support_sessions").insert(registros);
      if (resposta.error) throw resposta.error;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: chave });
      toast.success("Plano criado com aulas completas.");
    },
    onError: (erro) =>
      toast.error(erro instanceof Error ? erro.message : "Não foi possível criar o plano."),
  });

  const concluir = async (sessao: SessaoSalva) => {
    const resposta = await (supabase as any)
      .from("school_support_sessions")
      .update({
        status: "concluida",
        completed_at: new Date().toISOString(),
      })
      .eq("id", sessao.id);
    if (resposta.error) {
      toast.error("A aula terminou, mas não foi possível salvar.");
      return;
    }
    await qc.invalidateQueries({ queryKey: chave });
    setSessaoAtiva(null);
    setPagina(0);
    toast.success("Aula concluída e salva.");
  };

  if (sessaoAtiva) {
    const paginas = Array.isArray(sessaoAtiva.lesson_pages) ? sessaoAtiva.lesson_pages : [];
    const atual = paginas[pagina];
    if (!atual)
      return <p className="mt-4 text-sm text-destructive">Esta aula não possui páginas válidas.</p>;
    return (
      <div className="mt-4 rounded-3xl border-2 border-primary/20 bg-background p-4 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            onClick={() => {
              setSessaoAtiva(null);
              setPagina(0);
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-black text-primary">
            {pagina + 1} de {paginas.length}
          </span>
        </div>
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          {sessaoAtiva.title}
        </p>
        <h4 className="mt-2 text-2xl font-black">{atual.titulo}</h4>
        <p className="mt-4 text-base leading-7 sm:text-lg">{atual.conteudo}</p>
        {atual.itens?.length ? (
          <ol className="mt-5 space-y-3">
            {atual.itens.map((item, indice) => (
              <li key={`${atual.ordem}-${indice}`} className="rounded-2xl border bg-muted/30 p-3">
                <strong className="mr-2">{indice + 1}.</strong>
                {item}
              </li>
            ))}
          </ol>
        ) : null}
        <div className="mt-6 flex justify-between gap-3 border-t pt-4">
          <Button
            variant="outline"
            disabled={pagina === 0}
            onClick={() => setPagina((valor) => valor - 1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          {pagina < paginas.length - 1 ? (
            <Button onClick={() => setPagina((valor) => valor + 1)}>
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => void concluir(sessaoAtiva)}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Concluir aula
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (isLoading) return <p className="mt-4 text-sm text-muted-foreground">Carregando plano...</p>;
  if (!sessoes.length) {
    return (
      <Button
        className="mt-4 w-full"
        variant="secondary"
        disabled={criarPlano.isPending}
        onClick={() => criarPlano.mutate()}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {criarPlano.isPending ? "Preparando..." : "Preparar aulas da missão"}
      </Button>
    );
  }
  return (
    <div className="mt-4 space-y-2 border-t pt-4">
      <p className="text-sm font-black uppercase tracking-wide text-primary">Aulas da missão</p>
      {sessoes.map((sessao) => (
        <button
          key={sessao.id}
          type="button"
          onClick={() => {
            setSessaoAtiva(sessao);
            setPagina(0);
          }}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border p-3 text-left hover:border-primary"
        >
          <span className="flex items-center gap-2 font-bold">
            <BookOpen className="h-4 w-4 text-primary" />
            {sessao.title}
          </span>
          <span className="text-xs font-bold text-muted-foreground">
            {sessao.status === "concluida" ? "Concluída" : "Abrir aula"}
          </span>
        </button>
      ))}
    </div>
  );
}
