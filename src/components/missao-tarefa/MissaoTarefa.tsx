import { useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/database/supabase/client";
import { Card } from "@/components/Layout";
import {
  Plus,
  Trash2,
  Calendar as CalendarIcon,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Camera,
  Loader2,
  Lightbulb,
  Brain,
  ClipboardList,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { analisarTarefaCasa } from "@/lib/groq-professor.functions";
import { useAppState } from "@/core/store";

interface Props {
  childId: string;
}

type Tarefa = {
  id: string;
  child_id: string;
  user_id: string;
  titulo: string;
  materia: string | null;
  due_date: string;
  foto_url: string | null;
  foto_texto: string | null;
  enunciado: string | null;
  ia_resumo: {
    tema?: string;
    o_que_a_tarefa_pede?: string;
    pergunta_pra_pensar?: string;
    sugestao_visual?: string;
  } | null;
  dicas_ia: string[] | null;
  dica_revelada: number;
  status: "pendente" | "em_andamento" | "concluida";
  created_at: string;
};

const STATUS_COLORS: Record<Tarefa["status"], string> = {
  pendente: "bg-amber-100 text-amber-800 border-amber-200",
  em_andamento: "bg-sky-100 text-sky-800 border-sky-200",
  concluida: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

const STATUS_LABEL: Record<Tarefa["status"], string> = {
  pendente: "Pendente",
  em_andamento: "Em andamento",
  concluida: "Concluída ✓",
};

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

export function MissaoTarefa({ childId }: Props) {
  const queryClient = useQueryClient();
  const { activeChild, addCoins } = useAppState();
  const [isAdding, setIsAdding] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [dueDate, setDueDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [enunciado, setEnunciado] = useState("");
  const [fotoBase64, setFotoBase64] = useState<string | null>(null);
  const fotoRef = useRef<HTMLInputElement | null>(null);

  const analisarFn = useServerFn(analisarTarefaCasa);

  const queryKey = ["homework_tasks", childId] as const;

  const { data: tarefas = [], isLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("homework_tasks")
        .select("*")
        .eq("child_id", childId)
        .order("due_date", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Tarefa[];
    },
  });

  function buildCriancaPayload() {
    if (!activeChild) return undefined;
    return {
      nome: activeChild.nome,
      idade: activeChild.idade,
      serie: activeChild.serie,
      diagnostico: activeChild.diagnostico,
      hiperfoco: activeChild.hiperfoco,
      hyperfocusList: activeChild.hyperfocus_list as string[] | undefined,
      tempoAtencaoMin: activeChild.tempo_atencao_min,
    };
  }

  const criarMutation = useMutation({
    mutationFn: async () => {
      if (!titulo.trim()) throw new Error("Coloque um título pra tarefa");

      const { data: auth } = await supabase.auth.getUser();
      const userId = auth.user?.id;
      if (!userId) throw new Error("Faça login pra salvar tarefas");

      let fotoUrl: string | null = null;
      if (fotoBase64) {
        // upload da foto
        const blob = await (await fetch(fotoBase64)).blob();
        const ext = blob.type.split("/")[1]?.split("+")[0] || "jpg";
        const path = `${userId}/${childId}/${Date.now()}.${ext}`;
        const up = await supabase.storage
          .from("homework-photos")
          .upload(path, blob, { contentType: blob.type, upsert: false });
        if (up.error) throw up.error;
        fotoUrl = path;
      }

      // chama IA pra gerar dicas
      const res = await analisarFn({
        data: {
          titulo: titulo.trim(),
          materia: materia.trim() || undefined,
          enunciado: enunciado.trim() || undefined,
          fotoBase64: fotoBase64 || undefined,
          crianca: buildCriancaPayload(),
        },
      });

      if (!res.ok || !res.resultado) {
        throw new Error(res.error || "A IA não conseguiu analisar essa tarefa");
      }

      const { error } = await (supabase as any).from("homework_tasks").insert([
        {
          child_id: childId,
          user_id: userId,
          titulo: titulo.trim(),
          materia: materia.trim() || null,
          due_date: dueDate,
          foto_url: fotoUrl,
          foto_texto: res.resultado.o_que_a_tarefa_pede,
          enunciado: enunciado.trim() || null,
          ia_resumo: {
            tema: res.resultado.tema,
            o_que_a_tarefa_pede: res.resultado.o_que_a_tarefa_pede,
            pergunta_pra_pensar: res.resultado.pergunta_pra_pensar,
            sugestao_visual: res.resultado.sugestao_visual,
          },
          dicas_ia: res.resultado.dicas,
          dica_revelada: 0,
          status: "pendente",
        },
      ]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setIsAdding(false);
      setTitulo("");
      setMateria("");
      setEnunciado("");
      setFotoBase64(null);
      setDueDate(format(new Date(), "yyyy-MM-dd"));
      toast.success("Tarefa salva e analisada pela IA!");
    },
    onError: (e: any) => toast.error(e?.message || "Falhou"),
  });

  const revelarDicaMutation = useMutation({
    mutationFn: async ({ tarefa }: { tarefa: Tarefa }) => {
      const proxima = Math.min(tarefa.dica_revelada + 1, 3);
      const { error } = await (supabase as any)
        .from("homework_tasks")
        .update({
          dica_revelada: proxima,
          status: tarefa.status === "pendente" ? "em_andamento" : tarefa.status,
        })
        .eq("id", tarefa.id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  const concluirMutation = useMutation({
    mutationFn: async (tarefa: Tarefa) => {
      const { error } = await (supabase as any)
        .from("homework_tasks")
        .update({ status: "concluida" })
        .eq("id", tarefa.id);
      if (error) throw error;
    },
    onSuccess: () => {
      addCoins(15);
      toast.success("Tarefa concluída! +15 brilhocoins ⭐");
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const excluirMutation = useMutation({
    mutationFn: async (tarefa: Tarefa) => {
      if (tarefa.foto_url) {
        await supabase.storage.from("homework-photos").remove([tarefa.foto_url]);
      }
      const { error } = await (supabase as any)
        .from("homework_tasks")
        .delete()
        .eq("id", tarefa.id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  async function onPickFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5_000_000) {
      toast.error("Foto muito grande (máx. 5MB)");
      return;
    }
    const b64 = await fileToBase64(f);
    setFotoBase64(b64);
  }

  return (
    <div className="space-y-4">
      {/* Cabeçalho ação */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 grid place-items-center text-amber-700">
              <ClipboardList className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-black text-base">Tarefas do dia</h3>
              <p className="text-xs text-muted-foreground">
                Tire foto da tarefa do caderno. O Professor Brilho dá <strong>dicas</strong>,
                nunca a resposta — assim você aprende sozinho(a).
              </p>
            </div>
          </div>
          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> Nova tarefa
            </button>
          )}
        </div>

        {isAdding && (
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Título da tarefa (ex: 'Página 42 de matemática')"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full border-2 border-amber-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Matéria (ex: Matemática)"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                className="border-2 border-amber-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border-2 border-amber-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <textarea
              placeholder="Enunciado (opcional — se preferir digitar em vez de fotografar)"
              value={enunciado}
              onChange={(e) => setEnunciado(e.target.value)}
              rows={3}
              className="w-full border-2 border-amber-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <input
                ref={fotoRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={onPickFoto}
                className="hidden"
              />
              <button
                onClick={() => fotoRef.current?.click()}
                className="bg-white border-2 border-amber-300 hover:border-amber-500 text-amber-700 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <Camera className="h-4 w-4" />
                {fotoBase64 ? "Trocar foto" : "Tirar foto"}
              </button>
              {fotoBase64 && (
                <>
                  <img
                    src={fotoBase64}
                    alt="prévia"
                    className="h-12 w-12 rounded-lg object-cover border border-amber-300"
                  />
                  <button
                    onClick={() => setFotoBase64(null)}
                    className="text-[11px] text-rose-600 underline"
                  >
                    remover
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => criarMutation.mutate()}
                disabled={criarMutation.isPending}
                className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2"
              >
                {criarMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Analisando…
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" /> Salvar + gerar dicas
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setIsAdding(false);
                  setFotoBase64(null);
                }}
                className="text-sm text-muted-foreground px-3"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </Card>

      {/* Lista */}
      {isLoading && (
        <div className="text-center text-sm text-muted-foreground py-6">Carregando…</div>
      )}
      {!isLoading && tarefas.length === 0 && (
        <Card className="text-center py-10">
          <ClipboardList className="h-10 w-10 text-amber-400 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Nenhuma tarefa ainda. Clique em <strong>Nova tarefa</strong> pra começar.
          </p>
        </Card>
      )}

      <div className="space-y-3">
        {tarefas.map((t) => (
          <TarefaCard
            key={t.id}
            tarefa={t}
            onRevelarDica={() => revelarDicaMutation.mutate({ tarefa: t })}
            onConcluir={() => concluirMutation.mutate(t)}
            onExcluir={() => excluirMutation.mutate(t)}
            revealingDica={revelarDicaMutation.isPending}
          />
        ))}
      </div>
    </div>
  );
}

function TarefaCard({
  tarefa,
  onRevelarDica,
  onConcluir,
  onExcluir,
  revealingDica,
}: {
  tarefa: Tarefa;
  onRevelarDica: () => void;
  onConcluir: () => void;
  onExcluir: () => void;
  revealingDica: boolean;
}) {
  const dicas = tarefa.dicas_ia ?? [];
  const revelar = Math.min(tarefa.dica_revelada, dicas.length);
  const dueLabel = format(new Date(tarefa.due_date + "T12:00:00"), "dd 'de' MMM", {
    locale: ptBR,
  });

  return (
    <Card className="border-l-4 border-l-amber-400">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${STATUS_COLORS[tarefa.status]}`}
            >
              {STATUS_LABEL[tarefa.status]}
            </span>
            {tarefa.materia && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center gap-1">
                <BookOpen className="h-3 w-3" /> {tarefa.materia}
              </span>
            )}
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" /> {dueLabel}
            </span>
          </div>
          <h4 className="font-black text-base mt-2">{tarefa.titulo}</h4>
          {tarefa.ia_resumo?.o_que_a_tarefa_pede && (
            <p className="text-xs text-muted-foreground mt-1">
              <Brain className="h-3 w-3 inline text-amber-500 mr-1" />
              <strong>O que a tarefa pede:</strong> {tarefa.ia_resumo.o_que_a_tarefa_pede}
            </p>
          )}
          {tarefa.ia_resumo?.sugestao_visual && (
            <p className="text-xs text-emerald-700 mt-1 italic">
              💡 {tarefa.ia_resumo.sugestao_visual}
            </p>
          )}
        </div>
        <button
          onClick={onExcluir}
          title="Excluir"
          className="text-rose-500 hover:text-rose-700 p-1"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Dicas progressivas */}
      {tarefa.status !== "concluida" && (
        <div className="mt-3 space-y-2">
          {Array.from({ length: revelar }).map((_, i) => (
            <div
              key={i}
              className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3 text-sm flex gap-2"
            >
              <Lightbulb className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-amber-700">Dica {i + 1}:</span>{" "}
                <span className="text-slate-800">{dicas[i]}</span>
              </div>
            </div>
          ))}
          {revelar < dicas.length && (
            <button
              onClick={onRevelarDica}
              disabled={revealingDica}
              className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <Lightbulb className="h-4 w-4" />
              {revelar === 0
                ? "Me dá a primeira dica"
                : `Liberar próxima dica (${revelar + 1}/${dicas.length})`}
            </button>
          )}
          {revelar === dicas.length && tarefa.ia_resumo?.pergunta_pra_pensar && (
            <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-3 text-sm">
              <span className="font-black text-sky-700">🤔 Pra pensar:</span>{" "}
              <span className="text-slate-800">{tarefa.ia_resumo.pergunta_pra_pensar}</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-3 flex gap-2 flex-wrap">
        {tarefa.status !== "concluida" && (
          <button
            onClick={onConcluir}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4" /> Concluir tarefa (+15 ⭐)
          </button>
        )}
      </div>
    </Card>
  );
}
