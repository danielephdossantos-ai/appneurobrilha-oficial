import { supabase } from "@/database/supabase/client";

export class AuthService {
  static async signOut() {
    return supabase.auth.signOut();
  }

  static async getSession() {
    return supabase.auth.getSession();
  }

  static async getUser() {
    return supabase.auth.getUser();
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
    return supabase.auth.updateUser({ data: { privacy_settings: settings } });
  }

  static async getPrivacySettings() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user?.user_metadata?.privacy_settings ?? null;
  }
}
