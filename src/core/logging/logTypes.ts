/**
 * LOG TYPES - Tipos de logs da aplicação
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export enum LogCategory {
  // Logs técnicos
  ERROR = 'ERROR',
  PERFORMANCE = 'PERFORMANCE',
  SECURITY = 'SECURITY',
  
  // Logs pedagógicos
  PEDAGOGICAL = 'PEDAGOGICAL',
  ACTIVITY = 'ACTIVITY',
  PROGRESS = 'PROGRESS',
  ENGAGEMENT = 'ENGAGEMENT',
  
  // Logs de negócio
  AUTH = 'AUTH',
  USER_ACTION = 'USER_ACTION',
  GAMIFICATION = 'GAMIFICATION',
  SYSTEM = 'SYSTEM',
}

export interface LogEntry {
  timestamp: number;
  level: LogLevel;
  category: LogCategory;
  message: string;
  data?: Record<string, unknown>;
  userId?: string;
  sessionId?: string;
  error?: {
    message: string;
    stack?: string;
    type: string;
  };
  duration?: number; // ms
  metadata?: Record<string, unknown>;
}

export interface PerformanceMetric {
  name: string;
  value: number; // milliseconds
  threshold?: number;
  status: 'ok' | 'warn' | 'slow';
}

export interface PedagogicalEvent {
  studentId: string;
  activityId?: string;
  activityType?: string;
  action: string; // 'start', 'complete', 'error', etc
  duration?: number;
  score?: number;
  metadata?: Record<string, unknown>;
}

export interface SecurityEvent {
  userId: string;
  action: string;
  result: 'success' | 'failure';
  details?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}
