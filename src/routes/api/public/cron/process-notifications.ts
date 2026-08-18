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
        const { supabaseAdmin: supabase } = await import("@/integrations/supabase/client.server");
        
        const { data: notifications, error } = await supabase
          .from("scheduled_notifications")
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

        for (const notif of (notifications as any[] || [])) {
          const subscriptions = notif.push_subscriptions;
          if (!subscriptions || (Array.isArray(subscriptions) && subscriptions.length === 0)) {
             await supabase
              .from("scheduled_notifications")
              .update({ sent_at: new Date().toISOString(), error_message: "No subscriptions found" } as any)
              .eq("id", notif.id);
             continue;
          }

          let anySuccess = false;
          const subsArray = Array.isArray(subscriptions) ? subscriptions : [subscriptions];
          
          for (const sub of subsArray) {
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

          await supabase
            .from("scheduled_notifications")
            .update({ 
              sent_at: new Date().toISOString(), 
              error_message: anySuccess ? null : "Failed to send to any subscription" 
            } as any)
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
