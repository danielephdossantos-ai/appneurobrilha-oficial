/**
 * LOGGER - Sistema centralizado de logs
 */

import { LogLevel, LogCategory, type LogEntry, type PerformanceMetric, type PedagogicalEvent, type SecurityEvent } from './logTypes';

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs = 1000;
  private isDevelopment = import.meta.env.DEV;

  /**
   * Log genérico
   */
  private log(
    level: LogLevel,
    category: LogCategory,
    message: string,
    data?: Record<string, unknown>,
    error?: Error
  ): void {
    const entry: LogEntry = {
      timestamp: Date.now(),
      level,
      category,
      message,
      data,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    if (error) {
      entry.error = {
        message: error.message,
        stack: error.stack,
        type: error.constructor.name,
      };
    }

    // Armazena em memória
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Console em desenvolvimento
    if (this.isDevelopment) {
      this.logToConsole(entry);
    }

    // Enviar para servidor em produção
    if (!this.isDevelopment && level === LogLevel.ERROR) {
      this.sendToServer(entry);
    }
  }

  /**
   * Log de erro
   */
  error(message: string | Error, data?: Record<string, unknown>): void {
    if (message instanceof Error) {
      this.log(LogLevel.ERROR, LogCategory.ERROR, message.message, data, message);
    } else {
      this.log(LogLevel.ERROR, LogCategory.ERROR, message, data);
    }
  }

  /**
   * Log de informação
   */
  info(message: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.SYSTEM, message, data);
  }

  /**
   * Log de aviso
   */
  warn(message: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, LogCategory.SYSTEM, message, data);
  }

  /**
   * Log de debug
   */
  debug(message: string, data?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      this.log(LogLevel.DEBUG, LogCategory.SYSTEM, message, data);
    }
  }

  /**
   * Log de sucesso
   */
  success(message: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.SUCCESS, LogCategory.SYSTEM, message, data);
  }

  /**
   * Log de performance
   */
  performance(metric: PerformanceMetric, metadata?: Record<string, unknown>): void {
    const isWarning = metric.threshold && metric.value > metric.threshold;
    const level = isWarning ? LogLevel.WARN : LogLevel.INFO;

    this.log(level, LogCategory.PERFORMANCE, `Performance: ${metric.name}`, {
      metric: metric.name,
      value: metric.value,
      threshold: metric.threshold,
      status: metric.status,
      ...metadata,
    });
  }

  /**
   * Log de evento pedagógico
   */
  pedagogical(event: PedagogicalEvent, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.PEDAGOGICAL, `Evento pedagógico: ${event.action}`, {
      studentId: event.studentId,
      activityId: event.activityId,
      activityType: event.activityType,
      action: event.action,
      duration: event.duration,
      score: event.score,
      ...metadata,
    });
  }

  /**
   * Log de atividade
   */
  activity(activityType: string, action: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.ACTIVITY, `${activityType}: ${action}`, data);
  }

  /**
   * Log de progresso
   */
  progress(studentId: string, progressData: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.PROGRESS, 'Progresso atualizado', {
      studentId,
      ...progressData,
    });
  }

  /**
   * Log de evento de segurança
   */
  security(event: SecurityEvent): void {
    this.log(LogLevel.INFO, LogCategory.SECURITY, `Evento de segurança: ${event.action}`, {
      userId: event.userId,
      action: event.action,
      result: event.result,
      ipAddress: event.ipAddress,
      userAgent: event.userAgent,
      ...event.details,
    });
  }

  /**
   * Log de ação de usuário
   */
  userAction(action: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.USER_ACTION, action, data);
  }

  /**
   * Log de gamificação
   */
  gamification(message: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, LogCategory.GAMIFICATION, message, data);
  }

  /**
   * Retorna todos os logs
   */
  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  /**
   * Retorna logs filtrados
   */
  getLogsByCategory(category: LogCategory): LogEntry[] {
    return this.logs.filter(log => log.category === category);
  }

  /**
   * Retorna logs filtrados por nível
   */
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Limpa os logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Exporta logs em JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Log no console com formatação
   */
  private logToConsole(entry: LogEntry): void {
    const timestamp = new Date(entry.timestamp).toLocaleTimeString();
    const prefix = `[${timestamp}] [${entry.level}] [${entry.category}]`;

    const style = this.getConsoleStyle(entry.level);

    if (entry.error) {
      console.error(`${prefix} ${entry.message}`, entry.error);
    } else {
      console.log(`%c${prefix} ${entry.message}`, style, entry.data || '');
    }
  }

  /**
   * Estilos para console
   */
  private getConsoleStyle(level: LogLevel): string {
    const styles: Record<LogLevel, string> = {
      [LogLevel.DEBUG]: 'color: gray; font-weight: bold;',
      [LogLevel.INFO]: 'color: blue; font-weight: bold;',
      [LogLevel.WARN]: 'color: orange; font-weight: bold;',
      [LogLevel.ERROR]: 'color: red; font-weight: bold;',
      [LogLevel.SUCCESS]: 'color: green; font-weight: bold;',
    };
    return styles[level];
  }

  /**
   * Envia logs críticos para o servidor
   */
  private sendToServer(entry: LogEntry): void {
    try {
      // TODO: Implementar envio para servidor de logs
      // fetch('/api/logs', { method: 'POST', body: JSON.stringify(entry) });
    } catch (err) {
      console.error('Erro ao enviar log para servidor:', err);
    }
  }

  /**
   * Helpers para obter contexto
   */
  private getUserId(): string | undefined {
    // TODO: Implementar obtenção de ID de usuário do contexto
    return undefined;
  }

  private getSessionId(): string | undefined {
    // TODO: Implementar obtenção de session ID
    return undefined;
  }
}

export const logger = new Logger();
