import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { Card } from "@/components/Layout";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  X,
  GraduationCap,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

interface Prova {
  id: string;
  child_id: string;
  subject: string;
  exam_date: string; // YYYY-MM-DD
  notes: string | null;
  tipo: "prova" | "trabalho";
}

interface Props {
  childId: string | null;
  filtroTipo?: "prova" | "trabalho" | "todos";
  titulo?: string;
}

const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function CalendarioProvas({ childId, filtroTipo = "todos", titulo }: Props) {
  const qc = useQueryClient();
  const today = new Date();
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<string>(ymd(today));
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [notes, setNotes] = useState("");
  const [tipo, setTipo] = useState<"prova" | "trabalho">(
    filtroTipo === "trabalho" ? "trabalho" : "prova"
  );

  const monthStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const monthEnd = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);

  const { data: provas = [] } = useQuery({
    queryKey: ["exam_missions", childId, cursor.getFullYear(), cursor.getMonth(), filtroTipo],
    queryFn: async (): Promise<Prova[]> => {
      if (!childId) return [];
      let q = supabase
        .from("exam_missions")
        .select("id,child_id,subject,exam_date,notes,tipo")
        .eq("child_id", childId)
        .gte("exam_date", ymd(monthStart))
        .lte("exam_date", ymd(monthEnd))
        .order("exam_date", { ascending: true });
      if (filtroTipo !== "todos") q = q.eq("tipo", filtroTipo);
      const { data, error } = await q;
      if (error) {
        console.warn("[calendario] erro:", error);
        return [];
      }
      return (data || []) as Prova[];
    },
    enabled: !!childId,
  });

  // Mapa data → provas
  const provasPorDia = useMemo(() => {
    const m = new Map<string, Prova[]>();
    for (const p of provas) {
      if (!m.has(p.exam_date)) m.set(p.exam_date, []);
      m.get(p.exam_date)!.push(p);
    }
    return m;
  }, [provas]);

  // Grade do mês (sempre 6 linhas x 7 colunas)
  const cells = useMemo(() => {
    const arr: { date: Date; inMonth: boolean }[] = [];
    const startDow = monthStart.getDay();
    const inicio = new Date(monthStart);
    inicio.setDate(inicio.getDate() - startDow);
    for (let i = 0; i < 42; i++) {
      const d = new Date(inicio);
      d.setDate(inicio.getDate() + i);
      arr.push({ date: d, inMonth: d.getMonth() === cursor.getMonth() });
    }
    return arr;
  }, [cursor, monthStart]);

  const provasDoDia = provasPorDia.get(selectedDate) || [];

  async function salvarProva(e: React.FormEvent) {
    e.preventDefault();
    if (!childId) {
      toast.error("Selecione uma criança antes");
      return;
    }
    if (!subject.trim()) return;
    const { error } = await supabase.from("exam_missions").insert({
      child_id: childId,
      subject: subject.trim(),
      exam_date: selectedDate,
      notes: notes.trim() || null,
      tipo,
    } as any);
    if (error) {
      toast.error("Erro ao salvar: " + error.message);
      return;
    }
    toast.success(tipo === "prova" ? "Prova agendada!" : "Trabalho agendado!");
    setSubject("");
    setNotes("");
    setShowForm(false);
    qc.invalidateQueries({ queryKey: ["exam_missions", childId] });
  }

  async function removerProva(id: string) {
    const { error } = await supabase.from("exam_missions").delete().eq("id", id);
    if (error) {
      toast.error("Erro ao remover");
      return;
    }
    qc.invalidateQueries({ queryKey: ["exam_missions", childId] });
  }

  const hojeStr = ymd(today);

  return (
    <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/60 to-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-indigo-700 flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          Calendário Escolar
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
            className="p-1.5 rounded-lg hover:bg-indigo-100 text-indigo-700"
            aria-label="Mês anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-bold text-indigo-900 min-w-[140px] text-center">
            {MESES[cursor.getMonth()]} {cursor.getFullYear()}
          </span>
          <button
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
            className="p-1.5 rounded-lg hover:bg-indigo-100 text-indigo-700"
            aria-label="Próximo mês"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* GRADE */}
        <div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            {DIAS_SEMANA.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-indigo-700 uppercase">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map(({ date, inMonth }, i) => {
              const s = ymd(date);
              const isToday = s === hojeStr;
              const isSelected = s === selectedDate;
              const tem = provasPorDia.has(s);
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(s)}
                  className={[
                    "aspect-square rounded-lg text-xs font-bold relative transition-all",
                    inMonth ? "text-foreground" : "text-muted-foreground/40",
                    isSelected
                      ? "bg-indigo-600 text-white shadow-md"
                      : isToday
                      ? "bg-indigo-100 text-indigo-900 ring-2 ring-indigo-400"
                      : "hover:bg-indigo-50",
                  ].join(" ")}
                >
                  {date.getDate()}
                  {tem && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {(provasPorDia.get(s) || []).slice(0, 3).map((p, idx) => (
                        <span
                          key={idx}
                          className={[
                            "h-1.5 w-1.5 rounded-full",
                            isSelected
                              ? "bg-white"
                              : p.tipo === "trabalho"
                              ? "bg-amber-500"
                              : "bg-rose-500",
                          ].join(" ")}
                        />
                      ))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* LISTA DO DIA */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-indigo-900">
              {new Date(selectedDate + "T00:00:00").toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "2-digit",
                month: "long",
              })}
            </p>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="text-[11px] font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              {showForm ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
              {showForm ? "Fechar" : "Novo evento"}
            </button>
          </div>

          {showForm && (
            <form onSubmit={salvarProva} className="space-y-2 bg-white border-2 border-indigo-200 rounded-xl p-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTipo("prova")}
                  className={[
                    "flex-1 text-xs font-bold py-1.5 rounded-lg border-2 transition",
                    tipo === "prova"
                      ? "bg-rose-100 border-rose-400 text-rose-800"
                      : "bg-white border-gray-200 text-gray-500",
                  ].join(" ")}
                >
                  Prova
                </button>
                <button
                  type="button"
                  onClick={() => setTipo("trabalho")}
                  className={[
                    "flex-1 text-xs font-bold py-1.5 rounded-lg border-2 transition",
                    tipo === "trabalho"
                      ? "bg-amber-100 border-amber-400 text-amber-800"
                      : "bg-white border-gray-200 text-gray-500",
                  ].join(" ")}
                >
                  Trabalho
                </button>
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={tipo === "prova" ? "Matéria (ex: Matemática)" : "Tema do trabalho"}
                className="w-full text-sm border border-indigo-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Conteúdo / observações (opcional)"
                rows={2}
                className="w-full text-sm border border-indigo-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 rounded-lg"
              >
                Salvar prova
              </button>
            </form>
          )}

          {provasDoDia.length === 0 && !showForm && (
            <p className="text-xs text-muted-foreground italic">Nenhuma prova nesse dia.</p>
          )}

          {provasDoDia.map((p) => {
            const isTrab = p.tipo === "trabalho";
            return (
              <div
                key={p.id}
                className={[
                  "flex items-start gap-3 bg-white border-2 rounded-xl p-3",
                  isTrab ? "border-amber-200" : "border-rose-100",
                ].join(" ")}
              >
                <div
                  className={[
                    "h-9 w-9 rounded-lg grid place-items-center shrink-0",
                    isTrab ? "bg-amber-100" : "bg-rose-100",
                  ].join(" ")}
                >
                  {isTrab ? (
                    <FileText className="h-5 w-5 text-amber-600" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-rose-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                    {isTrab ? "Trabalho" : "Prova"}
                  </p>
                  <p className="text-sm font-bold text-foreground">{p.subject}</p>
                  {p.notes && <p className="text-xs text-muted-foreground line-clamp-2">{p.notes}</p>}
                </div>
                <button
                  onClick={() => removerProva(p.id)}
                  className="p-1 text-muted-foreground hover:text-rose-600"
                  aria-label="Remover"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {!childId && (
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3">
          Selecione uma criança no topo para agendar provas.
        </p>
      )}
    </Card>
  );
}
