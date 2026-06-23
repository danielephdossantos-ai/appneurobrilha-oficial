import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/database/supabase/client";
import { Bell, BellOff, BellRing, FileText, GraduationCap, ChevronRight } from "lucide-react";
import { usePushNotifications } from "@/hooks/usePushNotifications";


interface Props {
  childId: string | null;
}

interface ItemEstudo {
  id: string;
  title: string;
  subject: string;
  exam_date: string;
}
interface ItemTrabalho {
  id: string;
  titulo: string;
  data_entrega: string | null;
}

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function LembretesDiarios({ childId }: Props) {
  const { permission, request, notify } = usePushNotifications();
  const hoje = ymd(new Date());

  const { data } = useQuery({
    queryKey: ["lembretes_hoje", childId, hoje],
    queryFn: async () => {
      if (!childId) return { estudos: [], trabalhos: [] };

      // Provas/trabalhos da criança
      const { data: missoes } = await supabase
        .from("exam_missions")
        .select("id,subject,exam_date,tipo")
        .eq("child_id", childId);

      const missionIds = (missoes || []).map((m: any) => m.id);
      const subjMap = new Map<string, { subject: string; exam_date: string }>(
        (missoes || []).map((m: any) => [m.id, { subject: m.subject, exam_date: m.exam_date }])
      );

      let estudos: ItemEstudo[] = [];
      if (missionIds.length > 0) {
        const { data: plans } = await supabase
          .from("exam_study_plans")
          .select("id,mission_id,title,scheduled_date,completed")
          .in("mission_id", missionIds)
          .eq("scheduled_date", hoje)
          .eq("completed", false);
        // Agrupar por prova (mission_id): 1 item por matéria+data
        const porMissao = new Map<string, ItemEstudo>();
        for (const p of (plans || []) as any[]) {
          if (porMissao.has(p.mission_id)) continue;
          const info = subjMap.get(p.mission_id);
          porMissao.set(p.mission_id, {
            id: p.id,
            title: `Estudar: ${info?.subject || p.title}`,
            subject: info?.subject || "",
            exam_date: info?.exam_date || "",
          });
        }
        estudos = Array.from(porMissao.values());
      }

      // Trabalhos pendentes
      const { data: trabs } = await supabase
        .from("rb_trabalhos")
        .select("id,titulo,data_entrega,concluido")
        .eq("child_id", childId)
        .eq("concluido", false);
      const trabalhos: ItemTrabalho[] = (trabs || []).map((t: any) => ({
        id: t.id,
        titulo: t.titulo,
        data_entrega: t.data_entrega,
      }));

      return { estudos, trabalhos };
    },
    enabled: !!childId,
  });

  const estudos = data?.estudos || [];
  const trabalhos = data?.trabalhos || [];
  const total = estudos.length + trabalhos.length;

  // dispara notificação 1x por dia quando entrar na tela
  useEffect(() => {
    if (permission !== "granted" || total === 0 || !childId) return;
    const body = [
      estudos.length > 0 ? `📚 ${estudos.length} item(s) de estudo` : null,
      trabalhos.length > 0 ? `📝 ${trabalhos.length} trabalho(s) pendente(s)` : null,
    ]
      .filter(Boolean)
      .join(" • ");
    notify("Reforço Brilha — hoje", body, { tag: `rb-${childId}`, oncePerDay: true });
  }, [permission, total, childId, estudos.length, trabalhos.length, notify]);

  if (!childId) return null;

  const PermissionButton = (
    <button
      onClick={request}
      disabled={permission === "unsupported" || permission === "denied"}
      className={[
        "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1",
        permission === "granted"
          ? "bg-emerald-100 text-emerald-700 cursor-default"
          : permission === "denied"
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : permission === "unsupported"
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-700",
      ].join(" ")}
    >
      {permission === "granted" ? (
        <>
          <BellRing className="h-3 w-3" /> Ativado
        </>
      ) : permission === "denied" ? (
        <>
          <BellOff className="h-3 w-3" /> Bloqueado
        </>
      ) : (
        <>
          <Bell className="h-3 w-3" /> Ativar push
        </>
      )}
    </button>
  );

  if (total === 0) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BellRing className="h-4 w-4 text-emerald-700" />
          <p className="text-xs text-emerald-900 font-semibold">
            Nada pendente para hoje. 🎉
          </p>
        </div>
        {PermissionButton}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-rose-50 border-2 border-indigo-200 rounded-xl p-3 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-black uppercase tracking-wider text-indigo-800 flex items-center gap-1">
          <BellRing className="h-4 w-4" /> Hoje você tem {total} lembrete(s)
        </p>
        {PermissionButton}
      </div>
      <div className="space-y-1.5">
        {estudos.map((e) => (
          <Link
            key={e.id}
            to="/missao-prova"
            className="bg-white border border-rose-200 rounded-lg px-2.5 py-1.5 flex items-center gap-2 hover:bg-rose-50 hover:border-rose-400 transition-colors group"
          >
            <GraduationCap className="h-4 w-4 text-rose-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-foreground truncate">{e.title}</p>
              <p className="text-[10px] text-muted-foreground">
                Prova de {e.subject} em{" "}
                {new Date(e.exam_date + "T00:00:00").toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 opacity-0 group-hover:opacity-100 flex items-center gap-0.5">
              Estudar <ChevronRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
        {trabalhos.map((t) => (
          <Link
            key={t.id}
            to="/missao-trabalho"
            className="bg-white border border-amber-200 rounded-lg px-2.5 py-1.5 flex items-center gap-2 hover:bg-amber-50 hover:border-amber-400 transition-colors group"
          >
            <FileText className="h-4 w-4 text-amber-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-foreground truncate">{t.titulo}</p>
              <p className="text-[10px] text-muted-foreground">
                {t.data_entrega
                  ? `Entrega: ${new Date(t.data_entrega + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}`
                  : "Sem data de entrega"}
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 opacity-0 group-hover:opacity-100 flex items-center gap-0.5">
              Abrir <ChevronRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>

    </div>
  );
}
