import { createFileRoute } from '@tanstack/react-router'
import webpush from 'web-push'
import { eq, lte, isNull, and } from 'drizzle-orm'
import { scheduledNotifications, pushSubscriptions } from '../../../../../shared/schema'

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
        const { supabaseAdmin: db } = await import("@/integrations/supabase/client.server");
        
        try {
          const now = new Date();
          
          const notifications = await db
            .select()
            .from(scheduledNotifications)
            .where(
              and(
                isNull(scheduledNotifications.sentAt),
                lte(scheduledNotifications.scheduledFor, now)
              )
            );

          const results = [];

          for (const notif of notifications) {
            // Buscar subscrições para este usuário
            const userSubscriptions = await db
              .select()
              .from(pushSubscriptions)
              .where(eq(pushSubscriptions.userId, notif.userId));

            if (userSubscriptions.length === 0) {
              await db
                .update(scheduledNotifications)
                .set({ 
                  sentAt: new Date(), 
                  errorMessage: "No subscriptions found" 
                })
                .where(eq(scheduledNotifications.id, notif.id));
              continue;
            }

            let anySuccess = false;
            
            for (const sub of userSubscriptions) {
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

            await db
              .update(scheduledNotifications)
              .set({ 
                sentAt: new Date(), 
                errorMessage: anySuccess ? null : "Failed to send to any subscription" 
              })
              .where(eq(scheduledNotifications.id, notif.id));
            
            results.push({ id: notif.id, success: anySuccess });
          }

          return new Response(JSON.stringify({ processed: results.length, details: results }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error: any) {
          console.error("[cron] Error processing notifications:", error);
          return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
      }
    }
  }
})
