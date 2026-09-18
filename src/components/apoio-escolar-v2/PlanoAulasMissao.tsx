import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/database/supabase/client";
import { BibliotecaInternet } from "@/components/reforco-brilha/BibliotecaInternet";
import { useServerFn } from "@tanstack/react-start";
import { gerarAulaCompletaMissaoV2 } from "@/lib/apoio-escolar-mentor.functions";
import {
  criarAulaSegura,
  criarConsultaExataRecursos,
  filtrarTopicosDaMateria,
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
  resource_query: string | null;
}

interface Props {
  missao: MissaoParaPlano;
  tipo: TipoMissaoEscolar;
  childId: string;
}

function dataParaSessao(indice: number, limite: string) {
  const data = new Date();
  data.setDate(data.getDate() + indice);
  const sugerida = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;
  return sugerida > limite ? limite : sugerida;
}

export function PlanoAulasMissao({ missao, tipo, childId }: Props) {
  const qc = useQueryClient();
  const gerarAulaCompleta = useServerFn(gerarAulaCompletaMissaoV2);
  const chave = ["school-support-sessions", missao.id] as const;
  const [sessaoAtiva, setSessaoAtiva] = useState<SessaoSalva | null>(null);
  const [pagina, setPagina] = useState(0);
  const topicosValidos = filtrarTopicosDaMateria(missao.subject, missao.topics);

  const { data: sessoes = [], isLoading } = useQuery({
    queryKey: chave,
    queryFn: async () => {
      const resposta = await (supabase as any)
        .from("school_support_sessions")
        .select("id,title,topic,status,lesson_pages,resource_query")
        .eq("mission_id", missao.id)
        .order("scheduled_date", { ascending: true });
      if (resposta.error) throw resposta.error;
      const permitidos = new Set(topicosValidos.map((topico) => topico.toLocaleLowerCase("pt-BR")));
      return ((resposta.data ?? []) as SessaoSalva[]).filter((sessao) =>
        permitidos.has(sessao.topic.trim().toLocaleLowerCase("pt-BR")),
      );
    },
  });

  const criarPlano = useMutation({
    mutationFn: async () => {
      if (!topicosValidos.length) throw new Error("Informe o conteúdo exato da prova.");
      const registros = topicosValidos.map((topico, indice) => ({
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

  const refazerAulao = useMutation({
    mutationFn: async () => {
      for (const sessao of sessoes) {
        const resposta = await (supabase as any)
          .from("school_support_sessions")
          .update({
            lesson_pages: criarAulaSegura(missao.subject, sessao.topic),
            resource_query: criarConsultaExataRecursos({
              tipo,
              materia: missao.subject,
              conteudos: [sessao.topic],
              dataEntrega: missao.due_date,
            }),
          })
          .eq("id", sessao.id);
        if (resposta.error) throw resposta.error;
      }
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: chave });
      toast.success("Aulas atualizadas para o formato aulão.");
    },
    onError: () => toast.error("Não foi possível atualizar as aulas."),
  });

  const gerarComMentor = useMutation({
    mutationFn: async (sessao: SessaoSalva) => gerarAulaCompleta({ data: { sessionId: sessao.id, childId } }),
    onSuccess: async (resultado, sessao) => {
      await qc.invalidateQueries({ queryKey: chave });
      setSessaoAtiva({ ...sessao, lesson_pages: resultado.paginas, resource_query: resultado.resourceQuery });
      setPagina(0);
      toast.success(`Aulão completo criado com ${resultado.provider}.`);
    },
    onError: (erro) => toast.error(erro instanceof Error ? erro.message : "O Professor Mentor não conseguiu gerar esta aula."),
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
      <div className="mt-4 space-y-6">
      <div className="rounded-3xl border-2 border-primary/20 bg-background p-4 sm:p-6">
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
          Conteúdo obrigatório: {sessaoAtiva.topic}
        </p>
        <Button className="mt-3" variant="secondary" disabled={gerarComMentor.isPending} onClick={() => gerarComMentor.mutate(sessaoAtiva)}>
          <Sparkles className="mr-2 h-4 w-4" />
          {gerarComMentor.isPending ? "Professor preparando o aulão..." : "Gerar aulão completo com Professor Mentor"}
        </Button>
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
      {sessaoAtiva.resource_query ? (
        <section className="rounded-3xl border-2 border-red-100 bg-background p-4 sm:p-6">
          <h4 className="text-xl font-black">Vídeos para reforçar esta aula</h4>
          <p className="mb-4 mt-1 text-sm text-muted-foreground">
            Até 6 opções em linguagem simples, escolhidas somente quando correspondem ao conteúdo da prova.
          </p>
          <BibliotecaInternet query={sessaoAtiva.resource_query} somenteYoutube />
        </section>
      ) : null}
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
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-black uppercase tracking-wide text-primary">Aulas da missão</p>
        <Button
          size="sm"
          variant="outline"
          disabled={refazerAulao.isPending}
          onClick={() => refazerAulao.mutate()}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {refazerAulao.isPending ? "Atualizando..." : "Refazer como aulão"}
        </Button>
      </div>
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
