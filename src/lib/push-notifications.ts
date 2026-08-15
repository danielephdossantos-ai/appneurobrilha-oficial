import { supabase } from "@/database/supabase/client";

const VAPID_PUBLIC_KEY = "BOeOwX2k7XF4Kf4atQhdN0t7sJkL7BgRJ4r-CA4fjH6tf6Gs1kjNW1OgOUxdE887BjYc9FpNE0zWUFS1kEoUthw";

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function registerPushNotifications() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.warn('Push messaging is not supported in this browser');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered');

    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      // Refresh subscription on server
      await saveSubscription(subscription);
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('Notification permission denied');
      return;
    }

    const newSubscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });

    await saveSubscription(newSubscription);
    console.log('Push subscription saved');
  } catch (error) {
    console.error('Error registering push notifications:', error);
  }
}

async function saveSubscription(subscription: PushSubscription) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const subscriptionJSON = subscription.toJSON();
  const endpoint = subscription.endpoint;
  const auth = subscriptionJSON.keys?.auth || '';
  const p256dh = subscriptionJSON.keys?.p256dh || '';

  if (!endpoint || !auth || !p256dh) {
    console.error('Invalid subscription object');
    return;
  }

  // A tabela 'push_subscriptions' segue o esquema do Database["public"]["Tables"]
  const { error } = await supabase
    .from('push_subscriptions')
    .upsert({
      user_id: user.id,
      endpoint: endpoint,
      auth: auth,
      p256dh: p256dh,
      user_agent: navigator.userAgent,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });

  if (error) {
    console.error('Error saving push subscription to DB:', error);
  }
}
