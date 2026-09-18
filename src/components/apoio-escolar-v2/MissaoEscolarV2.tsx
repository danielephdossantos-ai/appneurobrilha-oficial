import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CalendarDays, CheckCircle2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  tituloPadraoMissao,
  validarMissaoEscolar,
  type RascunhoMissaoEscolar,
  type TipoMissaoEscolar,
} from "@/lib/apoio-escolar-v2";
import { PlanoAulasMissao } from "./PlanoAulasMissao";

interface Props {
  childId: string;
  serie?: string;
  tipo: TipoMissaoEscolar;
}
interface MissaoSalva {
  id: string;
  title: string;
  subject: string;
  topics: string[];
  due_date: string;
  status: string;
}

const rotulos = {
  prova: { singular: "prova", acao: "Cadastrar prova" },
  tarefa: { singular: "tarefa", acao: "Cadastrar tarefa" },
  trabalho: { singular: "trabalho", acao: "Cadastrar trabalho" },
} satisfies Record<TipoMissaoEscolar, { singular: string; acao: string }>;

function hojeLocal() {
  const agora = new Date();
  return `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, "0")}-${String(agora.getDate()).padStart(2, "0")}`;
}

export function MissaoEscolarV2({ childId, serie, tipo }: Props) {
  const qc = useQueryClient();
  const hoje = useMemo(hojeLocal, []);
  const [aberto, setAberto] = useState(false);
  const [materia, setMateria] = useState("");
  const [conteudos, setConteudos] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [instrucoes, setInstrucoes] = useState("");
  const chave = ["school-support-missions", childId, tipo] as const;

  const {
    data: missoes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: chave,
    queryFn: async () => {
      const resposta = await (supabase as any)
        .from("school_support_missions")
        .select("id,title,subject,topics,due_date,status")
        .eq("child_id", childId)
        .eq("kind", tipo)
        .neq("status", "cancelada")
        .order("due_date", { ascending: true });
      if (resposta.error) throw resposta.error;
      return (resposta.data ?? []) as MissaoSalva[];
    },
  });

  const cadastrar = useMutation({
    mutationFn: async () => {
      const rascunho: RascunhoMissaoEscolar = {
        tipo,
        materia,
        dataEntrega,
        instrucoes,
        serie,
        conteudos: conteudos
          .split(/[,;\n]/)
          .map((item) => item.trim())
          .filter(Boolean),
      };
      const erros = validarMissaoEscolar(rascunho, hoje);
      if (erros.length) throw new Error(erros[0].mensagem);
      const resposta = await (supabase as any).from("school_support_missions").insert({
        child_id: childId,
        kind: tipo,
        title: tituloPadraoMissao(rascunho),
        subject: rascunho.materia.trim(),
        topics: rascunho.conteudos,
        instructions: instrucoes.trim() || null,
        school_year: serie?.trim() || null,
        due_date: dataEntrega,
      });
      if (resposta.error) throw resposta.error;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: chave });
      setMateria("");
      setConteudos("");
      setDataEntrega("");
      setInstrucoes("");
      setAberto(false);
      toast.success(`${rotulos[tipo].acao.replace("Cadastrar ", "")} cadastrada na agenda.`);
    },
    onError: (erro) =>
      toast.error(erro instanceof Error ? erro.message : "Não foi possível cadastrar."),
  });

  const excluir = useMutation({
    mutationFn: async (id: string) => {
      const resposta = await (supabase as any)
        .from("school_support_missions")
        .update({ status: "cancelada" })
        .eq("id", id)
        .eq("child_id", childId);
      if (resposta.error) throw resposta.error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: chave }),
    onError: () => toast.error("Não foi possível remover este item da agenda."),
  });

  const tabelaAusente =
    error && String((error as any)?.message ?? error).includes("school_support_missions");

  return (
    <section className="mx-auto max-w-3xl space-y-4 px-3 pb-24 sm:px-4">
      <div className="rounded-3xl border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Agenda escolar</p>
            <h2 className="text-2xl font-black">{rotulos[tipo].acao}</h2>
          </div>
          <Button onClick={() => setAberto((valor) => !valor)} size="lg">
            <Plus className="mr-2 h-5 w-5" />
            {rotulos[tipo].acao}
          </Button>
        </div>
        {aberto && (
          <form
            className="mt-6 grid gap-4 rounded-2xl border bg-muted/30 p-4"
            onSubmit={(evento) => {
              evento.preventDefault();
              cadastrar.mutate();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`${tipo}-materia`}>Matéria</Label>
                <Input
                  id={`${tipo}-materia`}
                  value={materia}
                  onChange={(e) => setMateria(e.target.value)}
                  placeholder="Ex.: Matemática"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${tipo}-data`}>Data</Label>
                <Input
                  id={`${tipo}-data`}
                  type="date"
                  min={hoje}
                  value={dataEntrega}
                  onChange={(e) => setDataEntrega(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${tipo}-conteudos`}>Conteúdo exato</Label>
              <Input
                id={`${tipo}-conteudos`}
                value={conteudos}
                onChange={(e) => setConteudos(e.target.value)}
                placeholder="Ex.: frações equivalentes, soma de frações"
              />
              <p className="text-xs text-muted-foreground">
                Separe mais de um conteúdo com vírgula.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${tipo}-instrucoes`}>Observações ou instruções</Label>
              <textarea
                id={`${tipo}-instrucoes`}
                value={instrucoes}
                onChange={(e) => setInstrucoes(e.target.value)}
                placeholder="Ex.: revisar os exercícios do caderno"
                className="min-h-24 w-full rounded-xl border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setAberto(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={cadastrar.isPending}>
                {cadastrar.isPending ? "Salvando..." : "Salvar na agenda"}
              </Button>
            </div>
          </form>
        )}
      </div>

      {tabelaAusente ? (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
          A nova agenda ainda não foi ativada no banco. Aplique a migration da V2 antes de testar
          esta tela.
        </div>
      ) : isLoading ? (
        <div className="rounded-2xl border p-6 text-center">Carregando agenda...</div>
      ) : missoes.length === 0 ? (
        <div className="rounded-3xl border border-dashed p-8 text-center">
          <CalendarDays className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="font-bold">Nenhuma {rotulos[tipo].singular} cadastrada.</p>
          <p className="text-sm text-muted-foreground">
            Use o botão acima para colocar a primeira na agenda.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {missoes.map((missao) => (
            <article key={missao.id} className="rounded-3xl border bg-card p-4 shadow-sm sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase text-primary">
                      {tipo}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {missao.due_date.split("-").reverse().join("/")}
                    </span>
                  </div>
                  <h3 className="text-xl font-black">{missao.title}</h3>
                  <p className="font-semibold text-muted-foreground">{missao.subject}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {missao.topics.map((topico) => (
                      <span key={topico} className="rounded-full border px-3 py-1 text-sm">
                        {topico}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Remover da agenda"
                  onClick={() => excluir.mutate(missao.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t pt-3 text-sm font-bold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Salva na agenda
              </div>
              <PlanoAulasMissao missao={missao} tipo={tipo} childId={childId} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
