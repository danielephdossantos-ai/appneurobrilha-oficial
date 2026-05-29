import { supabase } from "@/database/supabase/client";

export interface AuditLogEntry {
  action: string;
  module: string;
  metadata?: Record<string, any>;
}

export class AuditLogService {
  static async log(entry: AuditLogEntry) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase.from('audit_logs').insert({
        user_id: user.id,
        action: entry.action,
        module: entry.module,
        metadata: entry.metadata || {},
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
        ip_address: '0.0.0.0' // IP is usually handled by Supabase proxy, but we can store a placeholder
      });

      if (error) {
        // Silently fail or log to a secondary service to prevent breaking main flow
        // console.error('Audit log failed:', error);
      }
    } catch (e) {
      // Ignore
    }
  }
}
