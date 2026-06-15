import { useState, useEffect } from "react";
import { toast } from "sonner";
import { db, SyncEngine, OfflineEngine } from "@/engines/offline";
import { useLiveQuery } from "dexie-react-hooks";

export const useOfflineSync = () => {
  const [isOnline, setIsOnline] = useState(typeof window !== "undefined" ? navigator.onLine : true);

  // Usando hook do Dexie para reatividade automática da fila
  const pendingSyncCount = useLiveQuery(() => db.syncQueue.count(), []) ?? 0;

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.info("Conexão restabelecida. Sincronizando dados...", {
        id: "sync-status",
      });
      SyncEngine.sync();
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.warning("Você está offline. O progresso será salvo localmente.", {
        id: "sync-status",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Sync inicial
    if (navigator.onLine) {
      SyncEngine.sync();
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return {
    isOnline,
    pendingSyncCount,
    queueMutation: OfflineEngine.queueAction,
    syncPendingMutations: SyncEngine.sync,
  };
};
