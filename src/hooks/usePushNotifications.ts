import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";

type Perm = "default" | "granted" | "denied" | "unsupported";

const SW_PATH = "/sw-push.js";
const LAST_NOTIF_KEY = "rb_last_daily_notif";

// Chave VAPID pública (segura para expor no client)
const VAPID_PUBLIC_KEY =
  "BDLiIHW7hCepBTwONPUDsBikTyKV4U-FTAMhAfsA4NqZAqMA0W_ef7qyYELVHVj6nNK-6KAqlZeqp27Pv6XMl4I";

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

async function saveSubscriptionToSupabase(
  sub: PushSubscription,
  childId?: string | null,
) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const json = sub.toJSON();
    if (!json.endpoint || !json.keys?.p256dh || !json.keys?.auth) return;
    await (supabase as any).from("push_subscriptions").upsert(
      {
        user_id: user.id,
        child_id: childId ?? null,
        endpoint: json.endpoint,
        p256dh: json.keys.p256dh,
        auth: json.keys.auth,
        user_agent: navigator.userAgent,
      },
      { onConflict: "endpoint" },
    );
  } catch (e) {
    console.warn("[push] save subscription error", e);
  }
}

export function usePushNotifications(childId?: string | null) {
  const [permission, setPermission] = useState<Perm>("default");
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission as Perm);
    navigator.serviceWorker.getRegistration(SW_PATH).then((r) => {
      if (r) setRegistration(r);
    });
  }, []);

  const ensureSubscription = useCallback(
    async (reg: ServiceWorkerRegistration) => {
      try {
        let sub = await reg.pushManager.getSubscription();
        if (!sub) {
          sub = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
          });
        }
        await saveSubscriptionToSupabase(sub, childId);
      } catch (e) {
        console.warn("[push] subscribe error", e);
      }
    },
    [childId],
  );

  const request = useCallback(async () => {
    if (typeof window === "undefined") return false;
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      return false;
    }
    try {
      const reg = await navigator.serviceWorker.register(SW_PATH);
      setRegistration(reg);
      const res = await Notification.requestPermission();
      setPermission(res as Perm);
      if (res === "granted") {
        await navigator.serviceWorker.ready;
        await ensureSubscription(reg);
      }
      return res === "granted";
    } catch (e) {
      console.warn("[push] register/request error", e);
      return false;
    }
  }, [ensureSubscription]);

  // Se já estiver granted ao montar, garante que existe subscription salva
  useEffect(() => {
    if (permission !== "granted" || !registration) return;
    ensureSubscription(registration);
  }, [permission, registration, ensureSubscription]);

  const notify = useCallback(
    async (title: string, body: string, opts?: { tag?: string; oncePerDay?: boolean }) => {
      if (permission !== "granted") return;
      if (opts?.oncePerDay) {
        const today = new Date().toISOString().slice(0, 10);
        const key = `${LAST_NOTIF_KEY}_${opts.tag ?? "default"}`;
        if (localStorage.getItem(key) === today) return;
        localStorage.setItem(key, today);
      }
      try {
        const reg = registration ?? (await navigator.serviceWorker.getRegistration(SW_PATH));
        if (reg) {
          await reg.showNotification(title, {
            body,
            icon: "/favicon.ico",
            badge: "/favicon.ico",
            tag: opts?.tag,
          });
        } else {
          new Notification(title, { body, tag: opts?.tag });
        }
      } catch (e) {
        console.warn("[push] notify error", e);
      }
    },
    [permission, registration],
  );

  return { permission, request, notify };
}
