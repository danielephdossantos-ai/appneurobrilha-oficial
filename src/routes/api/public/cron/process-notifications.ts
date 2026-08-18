import { createFileRoute } from '@tanstack/react-router'
import webpush from 'web-push'

const VAPID_PUBLIC_KEY = "BDLiIHW7hCepBTwONPUDsBikTyKV4U-FTAMhAfsA4NqZAqMA0W_ef7qyYELVHVj6nNK-6KAqlZeqp27Pv6XMl4I";
const VAPID_PRIVATE_KEY = process.env['VAPID_PRIVATE_KEY'] || "5YITk3cv3DBU-KtLdlomnf20rmLPt7HUbmZe0c2Ns0s";

webpush.setVapidDetails(
  'mailto:suporte@neurobrilha.com.br',
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

export const Route = createFileRoute('/api/public/cron/process-notifications')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // No futuro, verificar header de autorização para cron do Supabase
        const { supabase } = await import("@/integrations/supabase/client");
        
        // 1. Buscar notificações agendadas pendentes que já passaram do horário
        const { data: notifications, error } = await supabase
          .from("scheduled_notifications" as any)
          .select(`
            *,
            push_subscriptions (*)
          `)
          .is("sent_at", null)
          .lte("scheduled_for", new Date().toISOString());

        if (error) {
          console.error("[cron] Error fetching notifications:", error);
          return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        const results = [];

        for (const notif of (notifications || [])) {
          const subscriptions = notif.push_subscriptions;
          if (!subscriptions || subscriptions.length === 0) {
             await supabase
              .from("scheduled_notifications" as any)
              .update({ sent_at: new Date().toISOString(), error_message: "No subscriptions found" })
              .eq("id", notif.id);
             continue;
          }

          let anySuccess = false;
          for (const sub of (Array.isArray(subscriptions) ? subscriptions : [subscriptions])) {
            try {
              const pushSubscription = {
                endpoint: sub.endpoint,
                keys: {
                  auth: sub.auth,
                  p256dh: sub.p256dh
                }
              };

              const payload = JSON.stringify({
                title: notif.title,
                body: notif.body,
                url: "/rotina"
              });

              await webpush.sendNotification(pushSubscription, payload);
              anySuccess = true;
            } catch (err: any) {
              console.warn(`[cron] Failed to send push to sub ${sub.id}:`, err.message);
            }
          }

          // Marcar como enviado
          await supabase
            .from("scheduled_notifications" as any)
            .update({ 
              sent_at: new Date().toISOString(), 
              error_message: anySuccess ? null : "Failed to send to any subscription" 
            })
            .eq("id", notif.id);
          
          results.push({ id: notif.id, success: anySuccess });
        }

        return new Response(JSON.stringify({ processed: results.length, details: results }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
  }
})
