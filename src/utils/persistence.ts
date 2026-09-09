import { Persister } from "@tanstack/react-query-persist-client";
import { get, set, del } from "idb-keyval";

/**
 * Async persister for TanStack Query using IndexedDB via idb-keyval
 */
export const createIDBPersister = (idbKey: string = "react-query-cache"): Persister => {
  return {
    persistClient: async (client) => {
      await set(idbKey, client);
    },
    restoreClient: async () => {
      return await get(idbKey);
    },
    removeClient: async () => {
      await del(idbKey);
    },
  };
};

export const persister = createIDBPersister();
