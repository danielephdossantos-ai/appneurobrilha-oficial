/**
 * useDatabase - Hook para acesso ao banco de dados
 */

import { useState, useCallback } from 'react';
import { DatabaseService } from '../services/supabase/database.service';
import { useErrorHandler } from '../core/error-handling/useErrorHandler';
import { logger } from '../core/logging/logger';
import type { QueryOptions } from '../types/app.types';

export interface UseDatabaseReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
  fetch: (options?: QueryOptions) => Promise<void>;
  fetchOne: (id: string) => Promise<void>;
  insert: (data: Record<string, unknown>) => Promise<T | undefined>;
  update: (id: string, data: Record<string, unknown>) => Promise<T | undefined>;
  delete: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export function useDatabase<T = any>(tableName: string): UseDatabaseReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { error, handleError, clearError } = useErrorHandler();

  const fetch = useCallback(
    async (options?: QueryOptions) => {
      try {
        clearError();
        setIsLoading(true);
        const result = await DatabaseService.select(tableName, options);
        setData(result.data as T);
      } catch (err) {
        handleError(err, `useDatabase.fetch(${tableName})`);
      } finally {
        setIsLoading(false);
      }
    },
    [tableName, clearError, handleError]
  );

  const fetchOne = useCallback(
    async (id: string) => {
      try {
        clearError();
        setIsLoading(true);
        const result = await DatabaseService.selectOne(tableName, id);
        setData(result as T);
      } catch (err) {
        handleError(err, `useDatabase.fetchOne(${tableName})`);
      } finally {
        setIsLoading(false);
      }
    },
    [tableName, clearError, handleError]
  );

  const insert = useCallback(
    async (insertData: Record<string, unknown>) => {
      try {
        clearError();
        setIsLoading(true);
        const result = await DatabaseService.insert(tableName, insertData);
        logger.success(`Registro inserido em ${tableName}`);
        return result as T;
      } catch (err) {
        handleError(err, `useDatabase.insert(${tableName})`);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [tableName, clearError, handleError]
  );

  const update = useCallback(
    async (id: string, updateData: Record<string, unknown>) => {
      try {
        clearError();
        setIsLoading(true);
        const result = await DatabaseService.update(tableName, id, updateData);
        logger.success(`Registro atualizado em ${tableName}`);
        return result as T;
      } catch (err) {
        handleError(err, `useDatabase.update(${tableName})`);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [tableName, clearError, handleError]
  );

  const deleteRecord = useCallback(
    async (id: string) => {
      try {
        clearError();
        setIsLoading(true);
        await DatabaseService.delete(tableName, id);
        logger.success(`Registro deletado de ${tableName}`);
      } catch (err) {
        handleError(err, `useDatabase.delete(${tableName})`);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [tableName, clearError, handleError]
  );

  return {
    data,
    isLoading,
    error,
    fetch,
    fetchOne,
    insert,
    update,
    delete: deleteRecord,
    refetch: () => fetch(),
  };
}
