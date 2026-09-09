/**
 * ERROR HANDLER - Tratamento centralizado de erros
 * Captura, classifica e registra erros
 */

import { logger } from '../logging/logger';
import { CustomError, ErrorType, ERROR_MESSAGES, type AppError } from './errorTypes';

export class ErrorHandler {
  /**
   * Trata um erro e o converte em AppError padrão
   */
  static handle(error: unknown, context?: string): AppError {
    const appError = this.classifyError(error, context);
    
    // Registra o erro
    logger.error(appError.message, {
      type: appError.type,
      code: appError.code,
      statusCode: appError.statusCode,
      context: appError.context,
      details: appError.details,
    });
    
    return appError;
  }

  /**
   * Classifica o erro e converte para formato padrão
   */
  static classifyError(error: unknown, context?: string): AppError {
    if (error instanceof CustomError) {
      return error;
    }

    if (error instanceof Error) {
      return this.classifyStandardError(error, context);
    }

    if (typeof error === 'string') {
      return new CustomError(ErrorType.APP_ERROR, error, { context });
    }

    if (typeof error === 'object' && error !== null) {
      return this.classifyObjectError(error as Record<string, unknown>, context);
    }

    return new CustomError(
      ErrorType.UNKNOWN_ERROR,
      'Erro desconhecido',
      { context }
    );
  }

  /**
   * Classifica erros padrão do JavaScript
   */
  private static classifyStandardError(error: Error, context?: string): AppError {
    const message = error.message || 'Erro desconhecido';

    // Detecta tipo de erro pela mensagem
    if (message.includes('network') || message.includes('fetch')) {
      return new CustomError(
        ErrorType.NETWORK_ERROR,
        message,
        { originalError: error, context }
      );
    }

    if (message.includes('timeout')) {
      return new CustomError(
        ErrorType.TIMEOUT_ERROR,
        message,
        { originalError: error, context }
      );
    }

    if (message.includes('auth') || message.includes('permission')) {
      return new CustomError(
        ErrorType.AUTH_ERROR,
        message,
        { originalError: error, context }
      );
    }

    if (message.includes('validation')) {
      return new CustomError(
        ErrorType.VALIDATION_ERROR,
        message,
        { originalError: error, context }
      );
    }

    return new CustomError(
      ErrorType.APP_ERROR,
      message,
      { originalError: error, context }
    );
  }

  /**
   * Classifica erros de objeto (ex: resposta de API)
   */
  private static classifyObjectError(
    error: Record<string, unknown>,
    context?: string
  ): AppError {
    const message = (error.message as string) || 'Erro desconhecido';
    const statusCode = (error.statusCode as number) || 
                       (error.status as number) || 
                       (error.code as number);

    let type = ErrorType.APP_ERROR;

    // Classifica por status code
    if (statusCode) {
      if (statusCode === 401) type = ErrorType.UNAUTHORIZED;
      else if (statusCode === 403) type = ErrorType.PERMISSION_DENIED;
      else if (statusCode === 404) type = ErrorType.DATA_NOT_FOUND;
      else if (statusCode === 409) type = ErrorType.DUPLICATE_ENTRY;
      else if (statusCode >= 500) type = ErrorType.DATABASE_ERROR;
    }

    return new CustomError(type, message, {
      statusCode,
      details: error,
      context,
    });
  }

  /**
   * Retorna mensagem amigável para o usuário
   */
  static getUserMessage(error: AppError): string {
    return ERROR_MESSAGES[error.type] || 'Ocorreu um erro. Tente novamente.';
  }

  /**
   * Retorna mensagem técnica para debug
   */
  static getDebugMessage(error: AppError): string {
    const lines = [
      `[${error.type}] ${error.message}`,
      `Código: ${error.code || 'N/A'}`,
      `Status: ${error.statusCode || 'N/A'}`,
    ];

    if (error.context) lines.push(`Contexto: ${error.context}`);
    if (error.details) lines.push(`Detalhes: ${JSON.stringify(error.details)}`);
    if (error.originalError) lines.push(`Erro Original: ${error.originalError.message}`);

    return lines.join('\n');
  }

  /**
   * Determina se o erro é crítico
   */
  static isCritical(error: AppError): boolean {
    const criticalTypes = [
      ErrorType.DATABASE_ERROR,
      ErrorType.QUERY_ERROR,
      ErrorType.STORAGE_ERROR,
    ];
    return criticalTypes.includes(error.type);
  }

  /**
   * Determina se é erro de conexão
   */
  static isConnectionError(error: AppError): boolean {
    const connectionErrors = [
      ErrorType.NETWORK_ERROR,
      ErrorType.TIMEOUT_ERROR,
      ErrorType.CONNECTION_LOST,
    ];
    return connectionErrors.includes(error.type);
  }

  /**
   * Determina se é erro de autenticação
   */
  static isAuthError(error: AppError): boolean {
    const authErrors = [
      ErrorType.AUTH_ERROR,
      ErrorType.TOKEN_EXPIRED,
      ErrorType.UNAUTHORIZED,
      ErrorType.SESSION_INVALID,
    ];
    return authErrors.includes(error.type);
  }
}
