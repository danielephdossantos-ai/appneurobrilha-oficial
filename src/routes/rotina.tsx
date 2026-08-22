import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getRoutineItems,
  toggleRoutineItemStatus,
  saveRoutineItem,
  deleteRoutineItem,
  cancelRoutineOccurrence,
  applyRoutineTemplate,
  type RoutineItem,
} from "@/lib/routine.functions";
import { format, addDays, subDays, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Calendar, ChevronLeft, ChevronRight, CheckCircle2, Play, Plus, Pencil, Trash2,
  X, Bell, Settings2, LayoutTemplate, Eye, EyeOff,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigationStore } from "@/lib/navigation-context";
import { usePushNotifications } from "@/hooks/usePushNotifications";

export const Route = createFileRoute("/rotina")({ component: Rotina });

type RoutineTemplate = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    type: RoutineItem["type"];
    startTime: string;
    durationMinutes: number;
    reminderMinutesBefore?: number;
  }>;
};

const templates: RoutineTemplate[] = [
  { id: "manha-escolar", emoji: "☀️", title: "Manhã escolar", description: "Do despertar até sair para a escola.", items: [
    { title: "Acordar", type: "outro", startTime: "06:45", durationMinutes: 10 },
    { title: "Ir ao banheiro", type: "higiene", startTime: "06:55", durationMinutes: 10 },
    { title: "Escovar os dentes", type: "higiene", startTime: "07:05", durationMinutes: 5 },
    { title: "Se vestir", type: "outro", startTime: "07:10", durationMinutes: 15 },
    { title: "Tomar café", type: "alimentacao", startTime: "07:25", durationMinutes: 20 },
    { title: "Pegar a mochila", type: "escola", startTime: "07:45", durationMinutes: 5 },
  ]},
  { id: "depois-escola", emoji: "🎒", title: "Depois da escola", description: "Chegar, descansar e organizar a tarde.", items: [
    { title: "Guardar a mochila", type: "escola", startTime: "13:00", durationMinutes: 5 },
    { title: "Lanche", type: "alimentacao", startTime: "13:10", durationMinutes: 20 },
    { title: "Descansar", type: "lazer", startTime: "13:30", durationMinutes: 30 },
    { title: "Fazer a tarefa", type: "estudo", startTime: "14:10", durationMinutes: 30 },
    { title: "Brincar", type: "lazer", startTime: "14:45", durationMinutes: 40 },
  ]},
  { id: "estudos", emoji: "📚", title: "Rotina de estudos", description: "Preparar, estudar, pausar e guardar.", items: [
    { title: "Preparar o material", type: "estudo", startTime: "16:00", durationMinutes: 5 },
    { title: "Estudar", type: "estudo", startTime: "16:05", durationMinutes: 20 },
    { title: "Pausa", type: "lazer", startTime: "16:25", durationMinutes: 10 },
    { title: "Revisar", type: "estudo", startTime: "16:35", durationMinutes: 15 },
    { title: "Guardar o material", type: "estudo", startTime: "16:50", durationMinutes: 5 },
  ]},
  { id: "noite", emoji: "🌙", title: "Hora de dormir", description: "Uma sequência calma para encerrar o dia.", items: [
    { title: "Jantar", type: "alimentacao", startTime: "19:00", durationMinutes: 30 },
    { title: "Tomar banho", type: "higiene", startTime: "19:40", durationMinutes: 20 },
    { title: "Colocar o pijama", type: "outro", startTime: "20:00", durationMinutes: 10 },
    { title: "Escovar os dentes", type: "higiene", startTime: "20:10", durationMinutes: 5 },
    { title: "Preparar a mochila", type: "escola", startTime: "20:15", durationMinutes: 10 },
    { title: "História ou leitura tranquila", type: "lazer", startTime: "20:30", durationMinutes: 20 },
    { title: "Dormir", type: "sono", startTime: "21:00", durationMinutes: 5 },
  ]},
];

function emojiFor(item: RoutineItem) {
  const t = item.title.toLowerCase();
  if (t.includes("dente")) return "🪥";
  if (t.includes("banho")) return "🚿";
  if (t.includes("vest") || t.includes("roup")) return "👕";
  if (t.includes("mochila")) return "🎒";
  if (t.includes("acord")) return "🛏️";
  if (t.includes("dorm")) return "🌙";
  if (t.includes("café") || t.includes("lanche") || t.includes("jantar") || t.includes("comer")) return "🍽️";
  if (t.includes("material") || t.includes("estud") || t.includes("tarefa") || t.includes("revis")) return "📚";
  if (item.type === "higiene") return "🧼";
  if (item.type === "alimentacao") return "🍎";
  if (item.type === "sono") return "🌙";
  if (item.type === "escola") return "🎒";
  if (item.type === "estudo" || item.type === "atividade_neurobrilha") return "📚";
  if (item.type === "lazer") return "🧩";
  if (item.type === "compromisso") return "📅";
  return "⭐";
}

function minutesOf(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function periodFor(item: RoutineItem): "manha" | "tarde" | "noite" | "estudos" {
  if (item.source === "learning_plan" || item.type === "estudo" || item.type === "atividade_neurobrilha" || item.type === "escola") return "estudos";
  const h = Number(item.startTime.slice(0, 2));
  if (h < 12) return "manha";
  if (h < 18) return "tarde";
  return "noite";
}

function Rotina() {
  const { activeChild } = useAppState();
  const childPush = usePushNotifications(activeChild?.id ?? null, "child");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setNavContext = useNavigationStore((s) => s.setContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editing, setEditing] = useState<RoutineItem | null | "new">(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<RoutineItem | null>(null);
  const [visualMode, setVisualMode] = useState(false);
  const [clockTick, setClockTick] = useState(() => Date.now());
  const syncedDates = useRef<Set<string>>(new Set());
  const dateStr = format(selectedDate, "yyyy-MM-dd");

  useEffect(() => {
    const timer = window.setInterval(() => setClockTick(Date.now()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeChild?.id) return;
    const saved = localStorage.getItem(`neurobrilha:routine-visual:${activeChild.id}`);
    setVisualMode(saved === null ? activeChild.idade <= 7 : saved === "1");
  }, [activeChild?.id, activeChild?.idade]);

  const setVisual = (value: boolean) => {
    setVisualMode(value);
    if (activeChild?.id) localStorage.setItem(`neurobrilha:routine-visual:${activeChild.id}`, value ? "1" : "0");
  };

  const { data: routine = [], isLoading } = useQuery({
    queryKey: ["routine", activeChild?.id, dateStr],
    queryFn: () => getRoutineItems({ data: { childId: activeChild!.id, date: dateStr } }),
    enabled: !!activeChild?.id,
  });

  useEffect(() => {
    if (!activeChild?.id || isLoading) return;
    const syncKey = `${activeChild.id}:${dateStr}`;
    if (syncedDates.current.has(syncKey)) return;
    syncedDates.current.add(syncKey);
    void import("@/modules/neuro-plano/sync.functions").then(async ({ syncPlansToRoutine }) => {
      try {
        await syncPlansToRoutine({ data: { childId: activeChild.id, date: dateStr } });
        await queryClient.invalidateQueries({ queryKey: ["routine", activeChild.id, dateStr] });
      } catch (err) {
        syncedDates.current.delete(syncKey);
        console.error("Erro ao sincronizar rotina:", err);
      }
    });
  }, [activeChild?.id, dateStr, isLoading, queryClient]);

  const toggleStatus = useMutation({
    mutationFn: (vars: { id: string; status: RoutineItem["status"] }) => toggleRoutineItemStatus({ data: { ...vars, childId: activeChild!.id, date: dateStr } }),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["routine", activeChild?.id, dateStr] });
      if (vars.status === "concluido") toast.success("Muito bem! Vamos para o próximo ✨");
    },
  });

  const removeSeries = useMutation({
    mutationFn: (item: RoutineItem) => deleteRoutineItem({ data: { id: item.id!, childId: activeChild!.id } }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["routine", activeChild?.id, dateStr] }); setDeleteTarget(null); toast.success("Rotina removida."); },
  });

  const removeToday = useMutation({
    mutationFn: (item: RoutineItem) => cancelRoutineOccurrence({ data: { id: item.id!, childId: activeChild!.id, date: dateStr } }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["routine", activeChild?.id, dateStr] }); setDeleteTarget(null); toast.success("Item removido somente deste dia."); },
  });

  const useTemplate = useMutation({
    mutationFn: (template: RoutineTemplate) => applyRoutineTemplate({ data: { childId: activeChild!.id, items: template.items } }),
    onSuccess: () => { setShowTemplates(false); queryClient.invalidateQueries({ queryKey: ["routine", activeChild?.id, dateStr] }); toast.success("Modelo adicionado! Você pode ajustar os horários quando quiser."); },
    onError: (e: any) => toast.error(e?.message ?? "Não foi possível adicionar o modelo."),
  });

  const sorted = useMemo(() => [...routine].sort((a, b) => a.startTime.localeCompare(b.startTime)), [routine]);
  const done = sorted.filter((i) => i.status === "concluido").length;
  const progress = sorted.length ? Math.round((done / sorted.length) * 100) : 0;
  const pending = sorted.filter((i) => i.status !== "concluido");
  const clock = new Date(clockTick);
  const nowMinutes = clock.getHours() * 60 + clock.getMinutes();
  const currentItem = useMemo(() => {
    if (!isToday(selectedDate) || !pending.length) return pending[0] ?? null;
    const started = pending.filter((i) => minutesOf(i.startTime) <= nowMinutes);
    return started[started.length - 1] ?? pending[0] ?? null;
  }, [pending, selectedDate, nowMinutes]);
  const nextItem = currentItem ? pending[pending.findIndex((i) => i.id === currentItem.id) + 1] ?? null : null;

  const groups = useMemo(() => ({
    manha: sorted.filter((i) => periodFor(i) === "manha"),
    tarde: sorted.filter((i) => periodFor(i) === "tarde"),
    estudos: sorted.filter((i) => periodFor(i) === "estudos"),
    noite: sorted.filter((i) => periodFor(i) === "noite"),
  }), [sorted]);

  if (!activeChild) {
    return <Shell><PageHeader icon={Calendar} title="Rotina" subtitle="Escolha uma criança primeiro" /><div className="text-center p-8"><Link to="/" className="btn-tap bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold">Voltar para o Início</Link></div></Shell>;
  }

  const startItem = (item: RoutineItem) => {
    if (!item.route) { toast.info("Esta é uma tarefa da rotina. Quando terminar, toque em “Já fiz!”."); return; }
    const planQueue = item.source === "learning_plan"
      ? sorted.filter((r) => r.source === "learning_plan" && r.route && r.status !== "concluido")
      : [];
    const startIndex = Math.max(0, planQueue.findIndex((r) => r.id === item.id));
    const session = planQueue.slice(startIndex);
    setNavContext({
      originRoute: "/rotina",
      originModule: item.type === "atividade_neurobrilha" ? "neuro-treino" : "escola-brilha",
      returnPath: "/rotina",
      isPlanFlow: item.source === "learning_plan",
      planType: item.type === "atividade_neurobrilha" ? "support" : item.type === "escola" ? "school" : "literacy",
      lessonId: item.sourceId ?? undefined,
      premiumItemId: item.premiumItemId ?? undefined,
      sessionRoutes: session.map((r) => r.route!).filter(Boolean),
      sessionPlanItemIds: session.map((r) => r.sourceId ?? ""),
      sessionPremiumItemIds: session.map((r) => r.premiumItemId ?? ""),
      sessionPlanTypes: session.map((r) => r.type === "atividade_neurobrilha" ? "support" : r.type === "escola" ? "school" : "literacy"),
      sessionIndex: 0,
      timestamp: Date.now(),
    });
    navigate({ to: item.route });
  };

  const complete = (item: RoutineItem) => item.id && toggleStatus.mutate({ id: item.id, status: item.status === "concluido" ? "pendente" : "concluido" });

  return (
    <Shell>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <PageHeader icon={Calendar} title={`Rotina de ${activeChild.nome}`} subtitle={isToday(selectedDate) ? "Um passo de cada vez. O app mostra o que vem agora e depois." : format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })} />
        <div className="flex gap-2">
          <button onClick={() => childPush.request()} disabled={childPush.permission === "granted"} className={`btn-tap p-3 rounded-2xl border ${childPush.permission === "granted" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-background"}`} aria-label="Ativar lembretes neste aparelho" title={childPush.permission === "granted" ? `Lembretes ativos para ${activeChild.nome} neste aparelho` : `Usar este aparelho para os lembretes de ${activeChild.nome}`}><Bell className="h-5 w-5"/></button>
          <button onClick={() => setVisual(!visualMode)} className="btn-tap p-3 rounded-2xl border bg-background" aria-label="Alternar modo visual">{visualMode ? <Eye className="h-5 w-5"/> : <EyeOff className="h-5 w-5"/>}</button>
          <button onClick={() => setShowTemplates(true)} className="btn-tap p-3 rounded-2xl border bg-background" aria-label="Modelos de rotina"><LayoutTemplate className="h-5 w-5"/></button>
          <button onClick={() => setEditing("new")} className="btn-tap p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg" aria-label="Adicionar rotina"><Plus className="h-5 w-5" /></button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-2 scrollbar-hide">
        <button onClick={() => setSelectedDate(subDays(selectedDate, 1))} className="p-2 rounded-xl bg-muted"><ChevronLeft className="h-5 w-5"/></button>
        <button onClick={() => setSelectedDate(new Date())} className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap ${isToday(selectedDate) ? "bg-primary text-primary-foreground" : "bg-muted"}`}>Hoje</button>
        <div className="flex-1 text-center font-bold min-w-[120px]">{format(selectedDate, "dd/MM/yyyy")}</div>
        <button onClick={() => setSelectedDate(addDays(selectedDate, 1))} className="p-2 rounded-xl bg-muted"><ChevronRight className="h-5 w-5"/></button>
      </div>

      {!isLoading && sorted.length > 0 && (
        <Card className="mb-5 p-5">
          <div className="flex items-center justify-between gap-3 mb-2"><div><p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Progresso do dia</p><p className="font-bold">{done} de {sorted.length} concluídas</p></div><span className="text-2xl font-bold">{progress}%</span></div>
          <div className="h-3 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }}/></div>
        </Card>
      )}

      {!isLoading && currentItem && (
        <Card className="mb-6 p-5 border-2 border-primary/25">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Agora</div>
          <div className="flex items-center gap-4">
            <div className={`${visualMode ? "text-6xl" : "text-4xl"}`}>{emojiFor(currentItem)}</div>
            <div className="flex-1 min-w-0"><h2 className={`${visualMode ? "text-2xl" : "text-xl"} font-bold`}>{currentItem.title}</h2><p className="text-sm text-muted-foreground">{currentItem.startTime} · {currentItem.durationMinutes} min</p>{nextItem && <p className="text-sm mt-2"><span className="font-bold">Depois:</span> {emojiFor(nextItem)} {nextItem.title}</p>}</div>
            {currentItem.route ? <button onClick={() => startItem(currentItem)} className="rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-bold inline-flex gap-2 items-center"><Play className="h-5 w-5 fill-current"/> Começar</button> : <button onClick={() => complete(currentItem)} className="rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-bold inline-flex gap-2 items-center"><CheckCircle2 className="h-5 w-5"/> Já fiz!</button>}
          </div>
        </Card>
      )}

      {isLoading ? (
        <div className="space-y-4 animate-pulse">{[1,2,3].map(i => <div key={i} className="h-24 bg-muted rounded-3xl" />)}</div>
      ) : sorted.length === 0 ? (
        <Card className="text-center p-10 bg-muted/40 border-dashed border-2">
          <div className="text-5xl mb-4">🌈</div><h3 className="font-bold text-lg mb-2">Vamos montar o dia?</h3>
          <p className="text-muted-foreground mb-6">Use um modelo pronto ou crie a rotina do seu jeito. Tudo é editável.</p>
          <div className="flex flex-wrap justify-center gap-2"><button onClick={() => setShowTemplates(true)} className="border px-5 py-3 rounded-xl font-bold inline-flex items-center gap-2"><LayoutTemplate className="h-4 w-4"/> Usar modelo</button><button onClick={() => setEditing("new")} className="bg-primary text-primary-foreground px-5 py-3 rounded-xl font-bold inline-flex items-center gap-2"><Plus className="h-4 w-4"/> Criar atividade</button></div>
        </Card>
      ) : (
        <div className="space-y-7">
          <RoutineSection title="☀️ Manhã" items={groups.manha} visualMode={visualMode} currentId={currentItem?.id} onStart={startItem} onComplete={complete} onEdit={setEditing} onDelete={setDeleteTarget}/>
          <RoutineSection title="🌤️ Tarde" items={groups.tarde} visualMode={visualMode} currentId={currentItem?.id} onStart={startItem} onComplete={complete} onEdit={setEditing} onDelete={setDeleteTarget}/>
          <RoutineSection title="📚 Estudos de hoje" items={groups.estudos} visualMode={visualMode} currentId={currentItem?.id} onStart={startItem} onComplete={complete} onEdit={setEditing} onDelete={setDeleteTarget}/>
          <RoutineSection title="🌙 Noite" items={groups.noite} visualMode={visualMode} currentId={currentItem?.id} onStart={startItem} onComplete={complete} onEdit={setEditing} onDelete={setDeleteTarget}/>
        </div>
      )}

      <Card className="mt-8 p-5">
        <div className="flex items-center gap-3"><Settings2 className="h-5 w-5 text-primary"/><div><h3 className="font-bold">Organize aqui mesmo</h3><p className="text-sm text-muted-foreground">Horários, dias, lembretes e atividades da família são editados nesta tela. As aulas dos planos entram automaticamente.</p></div></div>
      </Card>

      {editing && <RoutineEditor childId={activeChild.id} date={dateStr} initial={editing === "new" ? null : editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); queryClient.invalidateQueries({ queryKey: ["routine", activeChild.id, dateStr] }); }} />}
      {showTemplates && <TemplatePicker onClose={() => setShowTemplates(false)} onUse={(t) => useTemplate.mutate(t)} loading={useTemplate.isPending}/>} 
      {deleteTarget && <DeleteChoice item={deleteTarget} date={dateStr} onClose={() => setDeleteTarget(null)} onOnlyToday={() => removeToday.mutate(deleteTarget)} onAll={() => removeSeries.mutate(deleteTarget)} loading={removeToday.isPending || removeSeries.isPending}/>} 
    </Shell>
  );
}

function RoutineSection({ title, items, visualMode, currentId, onStart, onComplete, onEdit, onDelete }: { title: string; items: RoutineItem[]; visualMode: boolean; currentId?: string; onStart: (i: RoutineItem) => void; onComplete: (i: RoutineItem) => void; onEdit: (i: RoutineItem) => void; onDelete: (i: RoutineItem) => void }) {
  if (!items.length) return null;
  return <section><h3 className="font-bold text-lg mb-3">{title}</h3><div className="space-y-2">{items.map((item) => <RoutineRow key={item.id} item={item} visualMode={visualMode} isCurrent={item.id === currentId} onStart={onStart} onComplete={onComplete} onEdit={onEdit} onDelete={onDelete}/>)}</div></section>;
}

function RoutineRow({ item, visualMode, isCurrent, onStart, onComplete, onEdit, onDelete }: { item: RoutineItem; visualMode: boolean; isCurrent: boolean; onStart: (i: RoutineItem) => void; onComplete: (i: RoutineItem) => void; onEdit: (i: RoutineItem) => void; onDelete: (i: RoutineItem) => void }) {
  const completed = item.status === "concluido";
  return <div className={`rounded-2xl border p-3 flex items-center gap-3 ${isCurrent ? "border-primary/50 bg-primary/5" : "bg-background"} ${completed ? "opacity-60" : ""}`}>
    <div className="w-14 text-center"><div className="font-bold">{item.startTime}</div><div className="text-[10px] text-muted-foreground">{item.durationMinutes} min</div></div>
    <div className={`${visualMode ? "text-4xl" : "text-2xl"}`}>{emojiFor(item)}</div>
    <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><h4 className={`${visualMode ? "text-lg" : "text-base"} font-bold truncate`}>{item.title}</h4>{isCurrent && !completed && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-bold">AGORA</span>}</div>{item.source === "learning_plan" && <p className="text-xs text-muted-foreground">⭐ Plano de aprendizagem</p>}{item.reminderEnabled && <p className="text-[11px] text-muted-foreground inline-flex items-center gap-1"><Bell className="h-3 w-3"/> {item.reminderMinutesBefore > 0 ? `${item.reminderMinutesBefore} min antes` : "na hora"}</p>}</div>
    <div className="flex items-center gap-1">{item.route && !completed && <button onClick={() => onStart(item)} className="p-2 rounded-full bg-primary text-primary-foreground" aria-label="Começar"><Play className="h-4 w-4 fill-current"/></button>}<button onClick={() => onComplete(item)} className={`p-2 rounded-full ${completed ? "text-green-600" : "hover:bg-muted"}`} aria-label={completed ? "Marcar como pendente" : "Já fiz"}><CheckCircle2 className="h-5 w-5"/></button><button onClick={() => onEdit(item)} className="p-2 rounded-full hover:bg-muted" aria-label="Editar"><Pencil className="h-4 w-4"/></button>{item.source === "manual" && <button onClick={() => onDelete(item)} className="p-2 rounded-full hover:bg-red-500/10 text-red-600" aria-label="Excluir"><Trash2 className="h-4 w-4"/></button>}</div>
  </div>;
}

function RoutineEditor({ childId, date, initial, onClose, onSaved }: { childId: string; date: string; initial: RoutineItem | null; onClose: () => void; onSaved: () => void }) {
  const isPlanItem = !!initial && initial.source === "learning_plan";
  const [title, setTitle] = useState(initial?.title ?? "");
  const [type, setType] = useState<RoutineItem["type"]>(initial?.type ?? "outro");
  const [startTime, setStartTime] = useState(initial?.startTime ?? "08:00");
  const [duration, setDuration] = useState(initial?.durationMinutes ?? 20);
  const [reminder, setReminder] = useState(initial?.reminderEnabled ?? true);
  const [reminderBefore, setReminderBefore] = useState(initial?.reminderMinutesBefore ?? 5);
  const [notifyParent, setNotifyParent] = useState(initial?.notifyParentOnComplete ?? false);
  const [recurrence, setRecurrence] = useState<number[]>(initial?.recurrenceDays ?? []);
  const [saving, setSaving] = useState(false);
  const toggleDay = (d: number) => setRecurrence((r) => r.includes(d) ? r.filter(x => x !== d) : [...r, d]);

  const save = async () => {
    if (!title.trim()) return toast.error("Digite o nome da rotina.");
    setSaving(true);
    try {
      await saveRoutineItem({ data: {
        id: initial?.id, childId, title: title.trim(), description: initial?.description ?? null, type, startTime,
        durationMinutes: duration, date: isPlanItem ? date : (recurrence.length ? null : date), recurrenceDays: isPlanItem ? null : (recurrence.length ? recurrence : null),
        reminderEnabled: reminder, reminderMinutesBefore: reminder ? reminderBefore : 0, notifyParentOnComplete: notifyParent,
        status: initial?.status ?? "pendente", source: initial?.source ?? "manual", sourceId: initial?.sourceId ?? null, route: initial?.route ?? null, premiumItemId: initial?.premiumItemId ?? null,
      }});
      toast.success(isPlanItem ? "Horário do plano atualizado!" : "Rotina salva!"); onSaved();
    } catch (e: any) { toast.error(e?.message ?? "Não foi possível salvar a rotina."); } finally { setSaving(false); }
  };

  return <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"><div className="w-full max-w-lg rounded-[28px] bg-background border shadow-2xl p-6 space-y-4 my-8">
    <div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-bold">{initial ? (isPlanItem ? "Horário da atividade" : "Editar rotina") : "Nova atividade"}</h2><p className="text-xs text-muted-foreground mt-1">{isPlanItem ? "O plano escolheu a atividade. Você controla horário e lembrete." : "Tudo pode ser alterado depois."}</p></div><button onClick={onClose} className="p-2"><X/></button></div>
    <label className="block text-sm font-bold">Nome<input value={title} onChange={e => setTitle(e.target.value)} disabled={isPlanItem} className="mt-1 w-full rounded-xl border bg-background px-3 py-2 disabled:opacity-70" placeholder="Ex.: Escovar os dentes" /></label>
    <div className="grid grid-cols-2 gap-3"><label className="text-sm font-bold">Horário<input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="mt-1 w-full rounded-xl border bg-background px-3 py-2" /></label><label className="text-sm font-bold">Duração<input type="number" min={1} max={240} value={duration} onChange={e => setDuration(Number(e.target.value))} className="mt-1 w-full rounded-xl border bg-background px-3 py-2" /></label></div>
    {!isPlanItem && <><label className="block text-sm font-bold">Tipo<select value={type} onChange={e => setType(e.target.value as RoutineItem["type"])} className="mt-1 w-full rounded-xl border bg-background px-3 py-2"><option value="alimentacao">Alimentação</option><option value="higiene">Higiene</option><option value="sono">Sono</option><option value="escola">Escola</option><option value="estudo">Estudo</option><option value="lazer">Lazer</option><option value="compromisso">Compromisso</option><option value="outro">Outro</option></select></label><div><div className="text-sm font-bold mb-2">Repetir nos dias</div><div className="flex gap-1 flex-wrap">{[[1,"Seg"],[2,"Ter"],[3,"Qua"],[4,"Qui"],[5,"Sex"],[6,"Sáb"],[0,"Dom"]].map(([d,l]) => <button key={String(d)} type="button" onClick={() => toggleDay(Number(d))} className={`px-3 py-2 rounded-xl text-xs font-bold border ${recurrence.includes(Number(d)) ? "bg-primary text-primary-foreground border-primary" : "bg-background"}`}>{l}</button>)}</div><p className="text-[11px] text-muted-foreground mt-1">Sem dias marcados = apenas hoje ({date.split("-").reverse().join("/")}).</p></div></>}
    <div className="rounded-xl border p-3 space-y-3"><label className="flex items-center gap-3"><input type="checkbox" checked={reminder} onChange={e => setReminder(e.target.checked)} /><Bell className="h-4 w-4"/><span className="font-bold">Lembrar no celular</span></label>{reminder && <label className="block text-sm font-bold">Quando lembrar<select value={reminderBefore} onChange={e => setReminderBefore(Number(e.target.value))} className="mt-1 w-full rounded-xl border bg-background px-3 py-2"><option value={0}>Na hora</option><option value={5}>5 minutos antes</option><option value={10}>10 minutos antes</option><option value={15}>15 minutos antes</option><option value={30}>30 minutos antes</option></select></label>}</div>
    {!isPlanItem && <label className="flex items-start gap-3 rounded-xl border p-3"><input className="mt-1" type="checkbox" checked={notifyParent} onChange={e => setNotifyParent(e.target.checked)} /><span><span className="font-bold block">Avisar o responsável quando concluir</span><span className="text-xs text-muted-foreground">Útil para rotinas feitas pela criança em outro aparelho. Pode ser desligado para evitar notificações demais.</span></span></label>}
    <button onClick={save} disabled={saving} className="w-full rounded-2xl bg-primary text-primary-foreground py-3 font-bold disabled:opacity-60">{saving ? "Salvando..." : "Salvar"}</button>
  </div></div>;
}

function TemplatePicker({ onClose, onUse, loading }: { onClose: () => void; onUse: (t: RoutineTemplate) => void; loading: boolean }) {
  return <div className="fixed inset-0 z-[130] bg-black/60 backdrop-blur-sm grid place-items-center p-4"><div className="w-full max-w-2xl rounded-[28px] bg-background border shadow-2xl p-6 max-h-[88vh] overflow-y-auto"><div className="flex items-center justify-between mb-5"><div><h2 className="text-xl font-bold">Modelos de rotina</h2><p className="text-sm text-muted-foreground">Escolha um modelo e depois ajuste os horários.</p></div><button onClick={onClose} className="p-2"><X/></button></div><div className="grid md:grid-cols-2 gap-3">{templates.map((t) => <button key={t.id} disabled={loading} onClick={() => onUse(t)} className="text-left rounded-2xl border p-4 hover:border-primary/50 disabled:opacity-50"><div className="text-3xl mb-2">{t.emoji}</div><div className="font-bold">{t.title}</div><p className="text-sm text-muted-foreground mt-1">{t.description}</p><p className="text-xs font-bold text-primary mt-3">{t.items.length} passos · usar modelo</p></button>)}</div></div></div>;
}

function DeleteChoice({ item, onClose, onOnlyToday, onAll, loading }: { item: RoutineItem; date: string; onClose: () => void; onOnlyToday: () => void; onAll: () => void; loading: boolean }) {
  const recurring = !item.date && !!item.recurrenceDays?.length;
  return <div className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm grid place-items-center p-4"><div className="w-full max-w-md rounded-[24px] bg-background border shadow-2xl p-6"><h2 className="font-bold text-lg">Excluir “{item.title}”?</h2><p className="text-sm text-muted-foreground mt-2 mb-5">{recurring ? "Essa atividade se repete. Escolha se quer retirar apenas deste dia ou de toda a rotina." : "Esta atividade será removida da rotina."}</p><div className="space-y-2">{recurring && <button disabled={loading} onClick={onOnlyToday} className="w-full rounded-xl border px-4 py-3 font-bold">Excluir só hoje</button>}<button disabled={loading} onClick={onAll} className="w-full rounded-xl bg-red-600 text-white px-4 py-3 font-bold">{recurring ? "Excluir todos os próximos dias" : "Excluir atividade"}</button><button disabled={loading} onClick={onClose} className="w-full rounded-xl px-4 py-3 font-bold text-muted-foreground">Cancelar</button></div></div></div>;
}
