import { createFileRoute } from '@tanstack/react-router'
import webpush from 'web-push'

const VAPID_PUBLIC_KEY = "BDLiIHW7hCepBTwONPUDsBikTyKV4U-FTAMhAfsA4NqZAqMA0W_ef7qyYELVHVj6nNK-6KAqlZeqp27Pv6XMl4I";
const VAPID_PRIVATE_KEY = process.env['VAPID_PRIVATE_KEY'] || "5YITk3cv3DBU-KtLdlomnf20rmLPt7HUbmZe0c2Ns0s";

webpush.setVapidDetails(
  'mailto:suporte@neurobrilha.com.br',
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

export const Route = createFileRoute('/api/public/send-push')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { subscription, title, message, url } = body;

          let pushSubscription;
          
          if (subscription.endpoint && subscription.auth && subscription.p256dh) {
            pushSubscription = {
              endpoint: subscription.endpoint,
              keys: {
                auth: subscription.auth,
                p256dh: subscription.p256dh
              }
            };
          } else {
            pushSubscription = subscription;
          }

          if (!pushSubscription.endpoint) {
            return new Response('Missing subscription endpoint', { status: 400 });
          }

          const payload = JSON.stringify({
            title: title || 'NeuroBrilha Kids',
            body: message || 'Nova notificação!',
            url: url || '/'
          });

          await webpush.sendNotification(pushSubscription, payload);

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error: any) {
          console.error('Error sending push notification:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
    }
  }
})
