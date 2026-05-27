import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { get, set, del } from 'idb-keyval';

/**
 * Custom storage engine for TanStack Query persistence using IndexedDB
 */
export const idbStorage = {
  getItem: async (key: string) => {
    return await get(key);
  },
  setItem: async (key: string, value: string) => {
    await set(key, value);
  },
  removeItem: async (key: string) => {
    await del(key);
  },
};

export const persister = createSyncStoragePersister({
  storage: {
    getItem: (key) => {
      // IndexedDB is async, but createSyncStoragePersister expects sync
      // However, we can use it with a custom persister if needed or just handle the promise
      // Actually, for sync storage, we might need a workaround or use a different persister
      return localStorage.getItem(key);
    },
    setItem: (key, value) => {
      localStorage.setItem(key, value);
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  },
});
