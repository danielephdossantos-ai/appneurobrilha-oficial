import { supabase } from "@/database/supabase/client";
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
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    
    if (!user) {
      // Tentar getUser como fallback caso o session esteja instável
      const { data: { user: freshUser } } = await supabase.auth.getUser();
      if (!freshUser) throw new Error("Usuário não autenticado. Por favor, faça login novamente.");
      return this.performUpdatePrivacy(freshUser.id, settings);
    }

    return this.performUpdatePrivacy(user.id, settings);
  }

  private static async performUpdatePrivacy(userId: string, settings: any) {
    const { data, error } = await supabase.from('user_privacy_settings')
      .upsert({
        user_id: userId,
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
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    if (!user) {
      // Fallback para getUser caso o session não esteja disponível mas o user exista
      const { data: { user: freshUser } } = await supabase.auth.getUser();
      if (!freshUser) return null;
      return this.fetchPrivacySettings(freshUser.id);
    }

    return this.fetchPrivacySettings(user.id);
  }

  private static async fetchPrivacySettings(userId: string) {
    const { data, error } = await supabase.from('user_privacy_settings')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();
    
    return data;
  }
}
