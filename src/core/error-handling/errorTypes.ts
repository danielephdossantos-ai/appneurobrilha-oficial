/**
 * TIPOS DE ERRO - Sistema Global de Tratamento
 * Centraliza todos os tipos de erro da aplicação
 */

export enum ErrorType {
  // Erros de Rede
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  CONNECTION_LOST = 'CONNECTION_LOST',

  // Erros de Autenticação
  AUTH_ERROR = 'AUTH_ERROR',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  SESSION_INVALID = 'SESSION_INVALID',

  // Erros de Banco de Dados
  DATABASE_ERROR = 'DATABASE_ERROR',
  QUERY_ERROR = 'QUERY_ERROR',
  DATA_NOT_FOUND = 'DATA_NOT_FOUND',
  DUPLICATE_ENTRY = 'DUPLICATE_ENTRY',

  // Erros de Permissão
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  ROLE_INSUFFICIENT = 'ROLE_INSUFFICIENT',
  ACCESS_FORBIDDEN = 'ACCESS_FORBIDDEN',

  // Erros de Validação
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  REQUIRED_FIELD = 'REQUIRED_FIELD',

  // Erros de Armazenamento
  STORAGE_ERROR = 'STORAGE_ERROR',
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  UPLOAD_FAILED = 'UPLOAD_FAILED',

  // Erros Gerais
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  APP_ERROR = 'APP_ERROR',
}

export interface AppError {
  type: ErrorType;
  message: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  originalError?: Error;
  timestamp: number;
  userId?: string;
  context?: string;
}

export class CustomError extends Error implements AppError {
  type: ErrorType;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  originalError?: Error;
  timestamp: number;
  userId?: string;
  context?: string;

  constructor(
    type: ErrorType,
    message: string,
    options?: {
      code?: string;
      statusCode?: number;
      details?: Record<string, unknown>;
      originalError?: Error;
      userId?: string;
      context?: string;
    }
  ) {
    super(message);
    this.name = 'CustomError';
    this.type = type;
    this.code = options?.code;
    this.statusCode = options?.statusCode;
    this.details = options?.details;
    this.originalError = options?.originalError;
    this.timestamp = Date.now();
    this.userId = options?.userId;
    this.context = options?.context;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

/**
 * Mapeamento de mensagens amigáveis por tipo de erro
 */
export const ERROR_MESSAGES: Record<ErrorType, string> = {
  [ErrorType.NETWORK_ERROR]: 'Falha na conexão. Verifique sua internet e tente novamente.',
  [ErrorType.TIMEOUT_ERROR]: 'Operação expirou. Verifique sua conexão e tente novamente.',
  [ErrorType.CONNECTION_LOST]: 'Conexão perdida. Você está offline.',
  [ErrorType.AUTH_ERROR]: 'Erro de autenticação. Faça login novamente.',
  [ErrorType.TOKEN_EXPIRED]: 'Sua sessão expirou. Faça login novamente.',
  [ErrorType.UNAUTHORIZED]: 'Acesso não autorizado. Verifique suas credenciais.',
  [ErrorType.SESSION_INVALID]: 'Sessão inválida. Faça login novamente.',
  [ErrorType.DATABASE_ERROR]: 'Erro ao acessar banco de dados. Tente novamente.',
  [ErrorType.QUERY_ERROR]: 'Erro na consulta de dados. Tente novamente.',
  [ErrorType.DATA_NOT_FOUND]: 'Dados não encontrados.',
  [ErrorType.DUPLICATE_ENTRY]: 'Este registro já existe.',
  [ErrorType.PERMISSION_DENIED]: 'Você não tem permissão para esta ação.',
  [ErrorType.ROLE_INSUFFICIENT]: 'Seu perfil não tem acesso a este recurso.',
  [ErrorType.ACCESS_FORBIDDEN]: 'Acesso proibido.',
  [ErrorType.VALIDATION_ERROR]: 'Dados inválidos. Verifique e tente novamente.',
  [ErrorType.INVALID_INPUT]: 'Entrada inválida.',
  [ErrorType.REQUIRED_FIELD]: 'Campo obrigatório não preenchido.',
  [ErrorType.STORAGE_ERROR]: 'Erro ao processar arquivo. Tente novamente.',
  [ErrorType.FILE_NOT_FOUND]: 'Arquivo não encontrado.',
  [ErrorType.UPLOAD_FAILED]: 'Falha no upload. Tente novamente.',
  [ErrorType.UNKNOWN_ERROR]: 'Erro desconhecido. Tente novamente.',
  [ErrorType.APP_ERROR]: 'Erro na aplicação. Tente novamente.',
};
