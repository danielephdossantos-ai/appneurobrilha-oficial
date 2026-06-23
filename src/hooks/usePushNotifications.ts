import { useCallback, useEffect, useState } from "react";

type Perm = "default" | "granted" | "denied" | "unsupported";

const SW_PATH = "/sw-push.js";
const LAST_NOTIF_KEY = "rb_last_daily_notif"; // yyyy-mm-dd

export function usePushNotifications() {
  const [permission, setPermission] = useState<Perm>("default");
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("Notification" in window) || !("serviceWorker" in navigator)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission as Perm);
    navigator.serviceWorker.getRegistration(SW_PATH).then((r) => {
      if (r) setRegistration(r);
    });
  }, []);

  const request = useCallback(async () => {
    if (typeof window === "undefined") return false;
    if (!("Notification" in window) || !("serviceWorker" in navigator)) return false;
    try {
      const reg = await navigator.serviceWorker.register(SW_PATH);
      setRegistration(reg);
      const res = await Notification.requestPermission();
      setPermission(res as Perm);
      return res === "granted";
    } catch (e) {
      console.warn("[push] register/request error", e);
      return false;
    }
  }, []);

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
    [permission, registration]
  );

  return { permission, request, notify };
}
