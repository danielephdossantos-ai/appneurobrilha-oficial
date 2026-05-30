import { z } from "zod";

export const AdminRoleSchema = z.enum([
  'super_admin',
  'administrator',
  'support',
  'pedagogical_editor'
]);

export type AdminRole = z.infer<typeof AdminRoleSchema>;

export interface AdminPermission {
  module: 'users' | 'activities' | 'bncc' | 'mascots' | 'content' | 'plans' | 'system';
  actions: ('create' | 'read' | 'update' | 'delete' | 'manage')[];
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  permissions: AdminPermission[];
  last_login?: string;
}

export interface SystemHealthMetrics {
  active_users_24h: number;
  retention_rate: number;
  avg_progress: number;
  total_activities_today: number;
  critical_errors: number;
  system_performance_ms: number;
}
