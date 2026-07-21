// Envia notificações push diárias para crianças com lembretes de estudo/trabalhos.
// Chamado via pg_cron 1x ao dia. Usa Web Push (VAPID) — chega no celular mesmo com app fechado.
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

  const hoje = ymd(new Date());

  // Carrega todas as subscriptions com child_id
  const { data: subs, error: subsErr } = await supabase
    .from("push_subscriptions")
    .select("id, child_id, endpoint, p256dh, auth");
  if (subsErr) {
    console.error("subs error", subsErr);
    return new Response(JSON.stringify({ error: subsErr.message }), { status: 500, headers: corsHeaders });
  }

  let sent = 0;
  let removed = 0;
  let skipped = 0;

  const nowUtc = new Date();
  // horário local aproximado (Brasil, UTC-3)
  const nowLocal = new Date(nowUtc.getTime() - 3 * 60 * 60 * 1000);
  const hhmmNow = nowLocal.toISOString().slice(11, 16); // "HH:MM"

  for (const s of subs || []) {
    if (!s.child_id) { skipped++; continue; }

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

    if (estudosHoje === 0 && trabalhos === 0 && auroraCount === 0) { skipped++; continue; }

    const primeiraAurora = auroraPendentes[0];
    const auroraAtrasada = primeiraAurora && primeiraAurora.exam_date < hoje;

    const body = [
      auroraCount > 0
        ? (auroraAtrasada
            ? `✨ Você tem Ler com Aurora atrasado — bora recuperar?`
            : `✨ Hora do Ler com Aurora${primeiraAurora?.time_of_day ? ` (${primeiraAurora.time_of_day})` : ""}`)
        : null,
      estudosHoje > 0 ? `📚 ${estudosHoje} estudo(s) pra hoje` : null,
      trabalhos > 0 ? `📝 ${trabalhos} trabalho(s) pendente(s)` : null,
    ].filter(Boolean).join(" • ");

    const payload = JSON.stringify({
      title: auroraCount > 0
        ? "Aurora está te esperando 🌟"
        : "Neuro Brilha — hoje tem missão! ✨",
      body,
      url: auroraCount > 0 ? "/escola-brilha/ler-com-aurora" : "/reforco-brilha",
      // tag muda a cada hora pra permitir múltiplos lembretes ao longo do dia
      tag: `aurora-${s.child_id}-${hoje}-${hhmmNow.slice(0, 2)}`,
    });

    try {
      await webpush.sendNotification(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        payload,
      );
      sent++;
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
