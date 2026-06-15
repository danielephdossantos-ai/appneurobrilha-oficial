/**
 * App Constants - Constantes globais
 */

// API
export const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = 30000; // 30 segundos
export const MAX_RETRIES = 3;

// Paginação
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// Autenticação
export const TOKEN_STORAGE_KEY = 'neurobrilha_auth_token';
export const REFRESH_TOKEN_STORAGE_KEY = 'neurobrilha_refresh_token';
export const SESSION_STORAGE_KEY = 'neurobrilha_session';

// Dificuldades
export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'] as const;
export const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

// Funções de usuário
export const USER_ROLES = ['admin', 'teacher', 'parent', 'student'] as const;
export const ROLE_LABELS: Record<string, string> = {
  admin: 'Administrador',
  teacher: 'Professor',
  parent: 'Responsável',
  student: 'Aluno',
};

// Tipos de notificação
export const NOTIFICATION_TYPES = ['info', 'success', 'warning', 'error'] as const;

// Cache
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutos
  MEDIUM: 15 * 60 * 1000, // 15 minutos
  LONG: 60 * 60 * 1000, // 1 hora
};

// Limites
export const LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10 MB
  MAX_UPLOAD_FILES: 5,
  MAX_ACTIVITY_TITLE_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MIN_PASSWORD_LENGTH: 8,
};

// Timeouts
export const TIMEOUTS = {
  ANIMATION: 300,
  TOAST: 3000,
  DEBOUNCE: 500,
};

// Cores e Temas
export const THEME = {
  colors: {
    primary: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
};
