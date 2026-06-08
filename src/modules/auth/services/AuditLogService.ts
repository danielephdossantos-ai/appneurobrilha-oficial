export interface AuditLogEntry {
  action: string;
  module: string;
  metadata?: Record<string, any>;
}

export class AuditLogService {
  static async log(_entry: AuditLogEntry) {
    // Audit logging is a no-op in this environment
  }
}
