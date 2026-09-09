import { db } from "./database";
import { SyncEngine } from "./sync-engine";

export class OfflineEngine {
  /**
   * Registra uma ação para ser sincronizada posteriormente.
   * Salva localmente de forma persistente primeiro.
   */
  static async queueAction(type: string, data: any) {
    const id = data.id || crypto.randomUUID();

    // 1. Salva o registro completo no cache local de "records" para leitura offline imediata
    await db.records.put({
      id,
      type,
      data,
      updatedAt: Date.now(),
    });

    // 2. Adiciona na fila de sincronização
    await db.syncQueue.add({
      type,
      data,
      timestamp: Date.now(),
      status: "pending",
      attempts: 0,
    });

    // 3. Tenta disparar sync se houver internet
    if (navigator.onLine) {
      SyncEngine.sync();
    }
  }

  /**
   * Recupera dados do cache local se o Supabase estiver inacessível
   */
  static async getLocalRecord(id: string) {
    return await db.records.get(id);
  }

  /**
   * Limpa cache antigo (ex: dados com mais de 30 dias)
   */
  static async cleanup() {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    await db.records.where("updatedAt").below(thirtyDaysAgo).delete();
  }
}
