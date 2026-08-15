import { createFileRoute } from '@tanstack/react-router'
import webpush from 'web-push'

// These should ideally be in process.env but for this specific setup we hardcode
// as they are specifically generated for this project and the user requested setup.
const VAPID_PUBLIC_KEY = "BOeOwX2k7XF4Kf4atQhdN0t7sJkL7BgRJ4r-CA4fjH6tf6Gs1kjNW1OgOUxdE887BjYc9FpNE0zWUFS1kEoUthw";
const VAPID_PRIVATE_KEY = "5YITk3cv3DBU-KtLdlomnf20rmLPt7HUbmZe0c2Ns0s";

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

          if (!subscription) {
            return new Response('Missing subscription', { status: 400 });
          }

          const payload = JSON.stringify({
            title: title || 'NeuroBrilha Kids',
            body: message || 'Nova notificação!',
            url: url || '/'
          });

          await webpush.sendNotification(subscription, payload);

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
