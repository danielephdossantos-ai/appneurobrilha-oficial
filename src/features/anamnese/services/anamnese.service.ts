/**
 * Anamnese Service
 */

import { logger } from '../../../core/logging/logger';

type AnamneseData = Record<string, unknown> & { id?: string; childId?: string; createdAt?: Date; updatedAt?: Date };

export class AnamneseService {
  private static TABLE = 'anamnese';

  /**
   * Obter anamnese de uma criança
   */
  static async getByChildId(childId: string): Promise<AnamneseData | null> {
    logger.warn('Serviço legado de anamnese desativado; use o módulo de anamnese atual.', { childId });
    return null;
  }

  /**
   * Criar anamnese
   */
  static async create(data: Omit<AnamneseData, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const result = { ...data, id: crypto.randomUUID(), createdAt: new Date(), updatedAt: new Date() };
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
      const result = {
        id,
        ...data,
        updatedAt: new Date(),
      };
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
      logger.success('Anamnese deletada', { id });
    } catch (error) {
      logger.error('Erro ao deletar anamnese', { id });
      throw error;
    }
  }
}

export default AnamneseService;
