// Push opcional para avisar o responsável quando a criança conclui um item da Rotina.
// Requer JWT do usuário e valida ownership da criança antes de usar service role.
// @ts-ignore
import webpush from "https://esm.sh/web-push@3.6.7";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization") || "";
  if (!authHeader) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
  const { data: authData } = await userClient.auth.getUser();
  const user = authData.user;
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

  const body = await req.json().catch(() => ({}));
  const childId = String(body.childId || "");
  const title = String(body.title || "Rotina concluída ✓");
  const message = String(body.message || "Uma atividade da rotina foi concluída.");
  if (!childId) return new Response(JSON.stringify({ error: "childId obrigatório" }), { status: 400, headers: corsHeaders });

  const service = createClient(supabaseUrl, serviceKey);
  const { data: child } = await service.from("children").select("id,user_id").eq("id", childId).eq("user_id", user.id).maybeSingle();
  if (!child) return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: corsHeaders });

  const { data: subs } = await service
    .from("push_subscriptions")
    .select("id,endpoint,p256dh,auth")
    .eq("user_id", user.id)
    .eq("enabled", true)
    .eq("device_role", "parent");

  if (!subs?.length) return new Response(JSON.stringify({ ok: true, sent: 0 }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });

  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT") || "mailto:neurobrilha@gmail.com",
    Deno.env.get("VAPID_PUBLIC_KEY")!,
    Deno.env.get("VAPID_PRIVATE_KEY")!,
  );

  let sent = 0;
  for (const sub of subs) {
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        JSON.stringify({ title, body: message, url: "/painel-pais", tag: `routine-complete-${childId}` }),
      );
      sent++;
    } catch (err: any) {
      if (err?.statusCode === 404 || err?.statusCode === 410) await service.from("push_subscriptions").delete().eq("id", sub.id);
      else console.error("routine completion push", err?.message ?? err);
    }
  }

  return new Response(JSON.stringify({ ok: true, sent }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
