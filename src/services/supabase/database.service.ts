/**
 * Database Service - Serviço centralizado de acesso ao banco de dados
 * 
 * Centraliza todas as operações de CRUD com o Supabase.
 * Nenhum componente deve acessar o BD diretamente.
 */

import { supabaseClient } from '../supabase/client';
import { logger } from '../../core/logging/logger';
import { ErrorHandler } from '../../core/error-handling/errorHandler';
import { ErrorType } from '../../core/error-handling/errorTypes';
import type { QueryOptions } from '../../types/app.types';

export class DatabaseService {
  /**
   * Buscar registros de uma tabela
   */
  static async select(
    table: string,
    options?: QueryOptions & { columns?: string }
  ) {
    try {
      let query = supabaseClient.from(table).select(options?.columns || '*');

      // Aplicar filtros
      if (options?.filter) {
        Object.entries(options.filter).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            query = query.eq(key, value);
          }
        });
      }

      // Aplicar ordenação
      if (options?.sort) {
        const [column, direction] = options.sort.split(':');
        query = query.order(column, { ascending: direction === 'asc' });
      }

      // Aplicar paginação
      if (options?.page && options?.pageSize) {
        const offset = (options.page - 1) * options.pageSize;
        query = query.range(offset, offset + options.pageSize - 1);
      }

      const { data, error, count } = await query;

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.select(${table})`
        );
      }

      logger.debug(`Registros recuperados de ${table}`, { count, table });

      return { data, count };
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.select(${table})`);
    }
  }

  /**
   * Buscar um único registro
   */
  static async selectOne(
    table: string,
    id: string,
    options?: { columns?: string }
  ) {
    try {
      let query = supabaseClient
        .from(table)
        .select(options?.columns || '*')
        .eq('id', id);

      const { data, error } = await query.single();

      if (error) {
        if (error.code === 'PGRST116') {
          throw ErrorHandler.handle(
            {
              type: ErrorType.DATA_NOT_FOUND,
              message: `Registro não encontrado em ${table}`,
            },
            `DatabaseService.selectOne(${table})`
          );
        }

        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.selectOne(${table})`
        );
      }

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.selectOne(${table})`);
    }
  }

  /**
   * Inserir registro
   */
  static async insert(table: string, data: Record<string, unknown>) {
    try {
      const { data: insertedData, error } = await supabaseClient
        .from(table)
        .insert([data])
        .select();

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.insert(${table})`
        );
      }

      logger.userAction(`Registro inserido em ${table}`, { id: insertedData?.[0]?.id });

      return insertedData?.[0];
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.insert(${table})`);
    }
  }

  /**
   * Atualizar registro
   */
  static async update(
    table: string,
    id: string,
    data: Record<string, unknown>
  ) {
    try {
      const { data: updatedData, error } = await supabaseClient
        .from(table)
        .update(data)
        .eq('id', id)
        .select();

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.update(${table})`
        );
      }

      logger.userAction(`Registro atualizado em ${table}`, { id });

      return updatedData?.[0];
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.update(${table})`);
    }
  }

  /**
   * Deletar registro
   */
  static async delete(table: string, id: string) {
    try {
      const { error } = await supabaseClient
        .from(table)
        .delete()
        .eq('id', id);

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.delete(${table})`
        );
      }

      logger.userAction(`Registro deletado de ${table}`, { id });
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.delete(${table})`);
    }
  }

  /**
   * Executar query customizada
   */
  static async query(table: string, queryFn: (q: any) => any) {
    try {
      const query = queryFn(supabaseClient.from(table));
      const { data, error } = await query;

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.DATABASE_ERROR,
            message: error.message,
          },
          `DatabaseService.query(${table})`
        );
      }

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, `DatabaseService.query(${table})`);
    }
  }
}

export default DatabaseService;
