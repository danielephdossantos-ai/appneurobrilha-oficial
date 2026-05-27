import { supabase } from "@/integrations/supabase/client";
import { AuditLogService } from "./AuditLogService";

export class AuthService {
  static async signOut() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await AuditLogService.log({
        action: 'LOGOUT',
        module: 'AUTH',
        metadata: { userId: user.id }
      });
    }
    return await supabase.auth.signOut();
  }

  static async getSession() {
    return await supabase.auth.getSession();
  }

  static async getUser() {
    return await supabase.auth.getUser();
  }

  static onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }

  static async updatePrivacySettings(settings: {
    terms_accepted?: boolean;
    marketing_consent?: boolean;
    analytics_consent?: boolean;
    data_usage_consent?: boolean;
  }) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");

    const { data, error } = await supabase.from('user_privacy_settings')
      .upsert({
        user_id: user.id,
        ...settings,
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    await AuditLogService.log({
      action: 'UPDATE_PRIVACY_SETTINGS',
      module: 'AUTH',
      metadata: { settings }
    });

    return data;
  }

  static async getPrivacySettings() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data } = await supabase.from('user_privacy_settings')
      .select('*')
      .eq('user_id', user.id)
      .single();
    
    return data;
  }
}
