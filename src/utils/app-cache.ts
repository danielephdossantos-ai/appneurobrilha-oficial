const APP_CACHE_VERSION = "2.8.3-alfa-silabas-visiveis";
const APP_VERSION_KEY = "app_version";

const LEGACY_PREFIXES = ["neurobrilha:", "pip:"];
const LEGACY_KEY_TOKENS = ["libras", "escola-brilha-aula", "aulas_bncc", "lc:v1:", "lc:v2:"];

export function getLegacyCacheKeys(storage: Storage = window.localStorage): string[] {
  const keys: string[] = [];

  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (!key) continue;

    const normalized = key.toLowerCase();
    const shouldClean =
      LEGACY_PREFIXES.some((prefix) => key.startsWith(prefix)) ||
      LEGACY_KEY_TOKENS.some((token) => normalized.includes(token));

    if (shouldClean) keys.push(key);
  }

  return keys;
}

export function shouldRefreshAppCache(storage: Storage = window.localStorage): boolean {
  return storage.getItem(APP_VERSION_KEY) !== APP_CACHE_VERSION;
}

export function clearLegacyAppCache(storage: Storage = window.localStorage): void {
  getLegacyCacheKeys(storage).forEach((key) => storage.removeItem(key));
  storage.setItem(APP_VERSION_KEY, APP_CACHE_VERSION);
}

export async function clearServiceWorkerCaches(): Promise<void> {
  if (typeof window === "undefined" || !("caches" in window)) return;

  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map((name) => caches.delete(name)));
}

export async function unregisterServiceWorkers(): Promise<void> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.unregister()));
}
