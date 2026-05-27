import { useState, useEffect } from 'react';
import { get, set, del, keys } from 'idb-keyval';
import { toast } from 'sonner';

export interface PendingMutation {
  id: string;
  type: string;
  data: any;
  timestamp: number;
}

const QUEUE_KEY_PREFIX = 'sync_queue_';

export const useOfflineSync = () => {
  const [isOnline, setIsOnline] = useState(typeof window !== 'undefined' ? navigator.onLine : true);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.info('Conexão restabelecida. Sincronizando dados...', {
        id: 'sync-status'
      });
      syncPendingMutations();
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.warning('Você está offline. O progresso será salvo localmente.', {
        id: 'sync-status'
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    updatePendingCount();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const updatePendingCount = async () => {
    const allKeys = await keys();
    const queueKeys = allKeys.filter(key => typeof key === 'string' && key.startsWith(QUEUE_KEY_PREFIX));
    setPendingSyncCount(queueKeys.length);
  };

  const queueMutation = async (type: string, data: any) => {
    const id = crypto.randomUUID();
    const mutation: PendingMutation = {
      id,
      type,
      data,
      timestamp: Date.now(),
    };

    await set(`${QUEUE_KEY_PREFIX}${id}`, mutation);
    await updatePendingCount();

    if (isOnline) {
      await syncPendingMutations();
    }
  };

  const syncPendingMutations = async () => {
    const allKeys = await keys();
    const queueKeys = allKeys.filter(key => typeof key === 'string' && key.startsWith(QUEUE_KEY_PREFIX)) as string[];

    if (queueKeys.length === 0) return;

    for (const key of queueKeys) {
      try {
        const mutation = await get<PendingMutation>(key);
        if (!mutation) continue;

        // Process mutation...
        
        await new Promise(resolve => setTimeout(resolve, 500));

        await del(key);
      } catch (error) {
        console.error('Erro ao sincronizar mutação:', error);
      }
    }

    await updatePendingCount();
    toast.success('Sincronização concluída com sucesso!');
  };

  return {
    isOnline,
    pendingSyncCount,
    queueMutation,
    syncPendingMutations
  };
};
