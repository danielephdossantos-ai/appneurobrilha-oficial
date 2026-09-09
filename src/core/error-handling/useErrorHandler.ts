/**
 * useErrorHandler - Hook para tratamento de erros em componentes
 */

import { useState, useCallback } from 'react';
import { ErrorHandler } from './errorHandler';
import type { AppError } from './errorTypes';

export interface UseErrorHandlerReturn {
  error: AppError | null;
  handleError: (error: unknown, context?: string) => void;
  clearError: () => void;
  getUserMessage: () => string;
  isCritical: () => boolean;
  isConnectionError: () => boolean;
  isAuthError: () => boolean;
}

/**
 * Hook para gerenciar erros em componentes
 */
export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<AppError | null>(null);

  const handleError = useCallback((errorData: unknown, context?: string) => {
    const appError = ErrorHandler.handle(errorData, context);
    setError(appError);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    getUserMessage: () => error ? ErrorHandler.getUserMessage(error) : '',
    isCritical: () => error ? ErrorHandler.isCritical(error) : false,
    isConnectionError: () => error ? ErrorHandler.isConnectionError(error) : false,
    isAuthError: () => error ? ErrorHandler.isAuthError(error) : false,
  };
}
