/**
 * Anamnese Service
 */

import { DatabaseService } from '../../services/supabase/database.service';
import { logger } from '../../core/logging/logger';
import type { AnamneseData } from './types';

export class AnamneseService {
  private static TABLE = 'anamnese';

  /**
   * Obter anamnese de uma criança
   */
  static async getByChildId(childId: string): Promise<AnamneseData | null> {
    try {
      const result = await DatabaseService.select(this.TABLE, {
        filter: { childId },
      });
      return (result.data?.[0] || null) as AnamneseData | null;
    } catch (error) {
      logger.error('Erro ao buscar anamnese', { childId });
      throw error;
    }
  }

  /**
   * Criar anamnese
   */
  static async create(data: Omit<AnamneseData, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const result = await DatabaseService.insert(this.TABLE, data);
      logger.success('Anamnese criada', { childId: data.childId });
      return result as AnamneseData;
    } catch (error) {
      logger.error('Erro ao criar anamnese', { childId: data.childId });
      throw error;
    }
  }

  /**
   * Atualizar anamnese
   */
  static async update(
    id: string,
    data: Partial<Omit<AnamneseData, 'id' | 'createdAt' | 'updatedAt'>>
  ) {
    try {
      const result = await DatabaseService.update(this.TABLE, id, {
        ...data,
        updatedAt: new Date(),
      });
      logger.success('Anamnese atualizada', { id });
      return result as AnamneseData;
    } catch (error) {
      logger.error('Erro ao atualizar anamnese', { id });
      throw error;
    }
  }

  /**
   * Deletar anamnese
   */
  static async delete(id: string) {
    try {
      await DatabaseService.delete(this.TABLE, id);
      logger.success('Anamnese deletada', { id });
    } catch (error) {
      logger.error('Erro ao deletar anamnese', { id });
      throw error;
    }
  }
}

export default AnamneseService;
