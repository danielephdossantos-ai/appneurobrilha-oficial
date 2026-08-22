// Envia notificações push para itens da Rotina e compromissos do app.
// IMPORTANTE: agendar a função a cada 5 minutos no Supabase para respeitar horários livres escolhidos pela família.
// Usa Web Push (VAPID) e registra cada ocorrência enviada para evitar duplicação.
// @ts-ignore
import webpush from "https://esm.sh/web-push@3.6.7";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const VAPID_PUBLIC = Deno.env.get("VAPID_PUBLIC_KEY")!;
  const VAPID_PRIVATE = Deno.env.get("VAPID_PRIVATE_KEY")!;
  const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:neurobrilha@gmail.com";

  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Carrega todas as subscriptions com child_id
  const { data: subs, error: subsErr } = await supabase
    .from("push_subscriptions")
    .select("id, child_id, endpoint, p256dh, auth, last_sent_at, timezone, device_role, enabled")
    .eq("enabled", true)
    .eq("device_role", "child");
  if (subsErr) {
    console.error("subs error", subsErr);
    return new Response(JSON.stringify({ error: subsErr.message }), { status: 500, headers: corsHeaders });
  }

  let sent = 0;
  let removed = 0;
  let skipped = 0;

  const nowUtc = new Date();

  for (const s of subs || []) {
    if (!s.child_id) { skipped++; continue; }
    const timezone = s.timezone || "America/Sao_Paulo";
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23", weekday: "short",
    }).formatToParts(nowUtc);
    const part = (type: string) => parts.find((p: any) => p.type === type)?.value || "";
    const hoje = `${part("year")}-${part("month")}-${part("day")}`;
    const hhmmNow = `${part("hour")}:${part("minute")}`;
    const weekdayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const weekdayNow = weekdayMap[part("weekday")] ?? 0;
    const minuteNow = Number(part("hour")) * 60 + Number(part("minute"));

    // missões da criança
    const { data: missoes } = await supabase
      .from("exam_missions")
      .select("id, subject")
      .eq("child_id", s.child_id);
    const missionIds = (missoes || []).map((m: any) => m.id);

    let estudosHoje = 0;
    if (missionIds.length > 0) {
      const { count } = await supabase
        .from("exam_study_plans")
        .select("id", { count: "exact", head: true })
        .in("mission_id", missionIds)
        .eq("scheduled_date", hoje)
        .eq("completed", false);
      estudosHoje = count || 0;
    }

    const { count: trabalhosCount } = await supabase
      .from("rb_trabalhos")
      .select("id", { count: "exact", head: true })
      .eq("child_id", s.child_id)
      .eq("concluido", false);
    const trabalhos = trabalhosCount || 0;

    // === Rotina configurável (fonte canônica de lembretes) ===
    const { data: rotinaRows } = await supabase
      .from("routine_items")
      .select("id,title,start_time,date,recurrence_days,reminder_minutes_before,status,route")
      .eq("child_id", s.child_id)
      .eq("reminder_enabled", true)
      .in("status", ["pendente", "atrasado"])
      .or(`date.eq.${hoje},date.is.null`);

    const rotinaDevida: any[] = [];
    for (const item of rotinaRows || []) {
      if (!item.date) {
        const dias = Array.isArray(item.recurrence_days) ? item.recurrence_days : [];
        if (!dias.includes(weekdayNow)) continue;
        const { data: occurrence } = await supabase
          .from("routine_item_occurrences")
          .select("status")
          .eq("routine_item_id", item.id)
          .eq("occurrence_date", hoje)
          .maybeSingle();
        if (occurrence?.status === "concluido" || occurrence?.status === "cancelado") continue;
      }
      const [hh, mm] = String(item.start_time || "00:00").slice(0, 5).split(":").map(Number);
      const dueMinute = hh * 60 + mm - Number(item.reminder_minutes_before || 0);
      // Janela de 10 min: segura para cron de 5 min e evita lembrar muito depois.
      if (minuteNow < dueMinute || minuteNow >= dueMinute + 10) continue;
      const { data: sentLog } = await supabase
        .from("routine_notification_log")
        .select("id")
        .eq("routine_item_id", item.id)
        .eq("occurrence_date", hoje)
        .eq("scheduled_time", String(item.start_time).slice(0, 5))
        .maybeSingle();
      if (!sentLog) rotinaDevida.push(item);
    }

    // === Ler com Aurora ===
    // busca agendamentos aurora pendentes (hoje ou atrasados) que ainda não foram concluídos
    const { data: auroraAgenda } = await supabase
      .from("study_agenda")
      .select("id, topic, exam_date, time_of_day, completed")
      .eq("child_id", s.child_id)
      .eq("category", "aurora")
      .eq("completed", false)
      .lte("exam_date", hoje);

    // criança fez aula do Aurora hoje?
    const { data: progresso } = await supabase
      .from("aurora_progresso")
      .select("ultima_data")
      .eq("child_id", s.child_id)
      .maybeSingle();
    const fezAuroraHoje = progresso?.ultima_data === hoje;

    // filtra: só envia se ainda não fez aula hoje E (horário passou OU está atrasado de dias anteriores)
    const auroraPendentes = (auroraAgenda || []).filter((a: any) => {
      if (fezAuroraHoje) return false;
      if (a.exam_date < hoje) return true; // atrasado
      // é hoje: só lembra se horário já passou (ou não tem hora)
      if (!a.time_of_day) return true;
      return a.time_of_day <= hhmmNow;
    });
    const auroraCount = auroraPendentes.length;

    // === Aulas de Apoio (trilha personalizada com horário editável pela mãe) ===
    // hoje é dia da semana (0=dom..6=sáb) — só envia se hora local >= hora agendada e não enviou nesta hora.
    const weekdayHoje = weekdayNow;
    const { data: apoioRow } = await supabase
      .from("study_agenda")
      .select("time_of_day, weekdays")
      .eq("child_id", s.child_id)
      .eq("category", "aulas_apoio")
      .maybeSingle();

    let aulaApoioAgora = false;
    if (apoioRow) {
      const dias: number[] = Array.isArray((apoioRow as any).weekdays)
        ? ((apoioRow as any).weekdays as number[])
        : [1, 2, 3, 4, 5];
      const hora = (apoioRow.time_of_day as string | null) ?? "14:00";
      if (dias.includes(weekdayHoje) && hora <= hhmmNow) {
        // dispara na hora exata (janela: hora bate)
        if (hora.slice(0, 2) === hhmmNow.slice(0, 2)) aulaApoioAgora = true;
      }
    }

    // === Rotina de Escrita Diária (caderno, lousa e ditado) ===
    const { data: escritaRow } = await supabase
      .from("study_agenda")
      .select("time_of_day, weekdays")
      .eq("child_id", s.child_id)
      .eq("category", "escrita_diaria")
      .maybeSingle();

    let escritaAgora = false;
    if (escritaRow) {
      const dias: number[] = Array.isArray((escritaRow as any).weekdays)
        ? ((escritaRow as any).weekdays as number[])
        : [1, 2, 3, 4, 5];
      const hora = (escritaRow.time_of_day as string | null) ?? "17:30";
      if (dias.includes(weekdayHoje) && hora <= hhmmNow) {
        if (hora.slice(0, 2) === hhmmNow.slice(0, 2)) escritaAgora = true;
      }
    }

    if (estudosHoje === 0 && trabalhos === 0 && auroraCount === 0 && !aulaApoioAgora && !escritaAgora && rotinaDevida.length === 0) { skipped++; continue; }


    const primeiraAurora = auroraPendentes[0];
    const auroraAtrasada = primeiraAurora && primeiraAurora.exam_date < hoje;

    const body = [
      rotinaDevida.length > 0 ? `⏰ ${rotinaDevida.map((r: any) => r.title).slice(0, 2).join(" + ")}` : null,
      escritaAgora ? `✏️ Hora da escrita: caderno, lousa e ditado (15 min)` : null,
      aulaApoioAgora ? `🌟 Hora das Aulas de Apoio!` : null,
      auroraCount > 0
        ? (auroraAtrasada
            ? `✨ Ler com Aurora atrasado — bora recuperar?`
            : `✨ Hora do Ler com Aurora${primeiraAurora?.time_of_day ? ` (${primeiraAurora.time_of_day})` : ""}`)
        : null,
      estudosHoje > 0 ? `📚 ${estudosHoje} estudo(s) pra hoje` : null,
      trabalhos > 0 ? `📝 ${trabalhos} trabalho(s) pendente(s)` : null,
    ].filter(Boolean).join(" • ");

    const payload = JSON.stringify({
      title: rotinaDevida.length > 0
        ? "Hora da sua rotina ✨"
        : escritaAgora
        ? "Pega o caderno e o lápis ✏️"
        : aulaApoioAgora
          ? "Hora de estudar com o Pip 🌟"
          : auroraCount > 0
            ? "Aurora está te esperando 🌟"
            : "Neuro Brilha — hoje tem missão! ✨",
      body,
      url: rotinaDevida.length > 0
        ? (rotinaDevida[0]?.route || "/rotina")
        : escritaAgora
        ? "/rotina-escrita"
        : aulaApoioAgora ? "/aulas-apoio" : auroraCount > 0 ? "/escola-brilha/ler-com-aurora" : "/rotina",
      // tag muda a cada hora pra permitir múltiplos lembretes ao longo do dia
      tag: `nb-${s.child_id}-${hoje}-${hhmmNow.slice(0, 2)}`,
    });


    try {
      await webpush.sendNotification(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        payload,
      );
      sent++;
      for (const item of rotinaDevida) {
        await supabase.from("routine_notification_log").insert({
          routine_item_id: item.id,
          child_id: s.child_id,
          occurrence_date: hoje,
          scheduled_time: String(item.start_time).slice(0, 5),
        }).then(() => undefined).catch(() => undefined);
      }
      await supabase.from("push_subscriptions").update({ last_sent_at: new Date().toISOString() }).eq("id", s.id);
    } catch (err: any) {
      const status = err?.statusCode;
      if (status === 404 || status === 410) {
        await supabase.from("push_subscriptions").delete().eq("id", s.id);
        removed++;
      } else {
        console.error("push error", s.endpoint, status, err?.body || err?.message);
      }
    }
  }

  return new Response(
    JSON.stringify({ ok: true, sent, removed, skipped, total: subs?.length || 0 }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
});
