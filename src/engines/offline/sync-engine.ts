import { supabase } from '@/database/supabase/client';
import { db, type OfflineSyncQueue } from './database';
import { toast } from 'sonner';

export class SyncEngine {
  private static isSyncing = false;

  static async sync() {
    if (this.isSyncing) return;
    if (!navigator.onLine) return;

    const pending = await db.syncQueue
      .where('status')
      .anyOf(['pending', 'failed'])
      .sortBy('timestamp');

    if (pending.length === 0) return;

    this.isSyncing = true;
    console.log(`[SyncEngine] Iniciando sincronização de ${pending.length} itens.`);

    for (const item of pending) {
      try {
        await db.syncQueue.update(item.id!, { status: 'syncing' });
        
        const success = await this.processItem(item);
        
        if (success) {
          await db.syncQueue.delete(item.id!);
        } else {
          await this.handleFailure(item, 'Falha no processamento');
        }
      } catch (error: any) {
        await this.handleFailure(item, error.message);
      }
    }

    this.isSyncing = false;
    const remaining = await db.syncQueue.count();
    if (remaining === 0) {
      toast.success('Todos os dados foram sincronizados!');
    }
  }

  private static async processItem(item: OfflineSyncQueue): Promise<boolean> {
    const { type, data } = item;

    // Mapeamento de tipos para tabelas Supabase
    const typeToTable: Record<string, string> = {
      'activity_result': 'activity_results',
      'attention_metric': 'attention_metrics',
      'fatigue_metric': 'fatigue_metrics',
      'adaptation_log': 'adaptation_logs',
      'progression_update': 'progression',
      'daily_session': 'daily_sessions',
      'achievement_unlock': 'achievements'
    };

    const table = typeToTable[type];
    if (!table) {
      console.warn(`[SyncEngine] Tipo desconhecido: ${type}`);
      return true; // Considera processado para não travar a fila
    }

    const { error } = await supabase.from(table).upsert(data);
    
    if (error) {
      console.error(`[SyncEngine] Erro no Supabase (${table}):`, error);
      return false;
    }

    return true;
  }

  private static async handleFailure(item: OfflineSyncQueue, error: string) {
    await db.syncQueue.update(item.id!, {
      status: 'failed',
      attempts: (item.attempts || 0) + 1,
      lastError: error
    });
  }
}
