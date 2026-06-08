import { supabase } from "@/database/supabase/client";

export class AuthService {
  static async signOut() {
    window.location.href = "/api/logout";
  }

  static async getSession() {
    return { data: { session: null }, error: null };
  }

  static async getUser() {
    return { data: { user: null }, error: null };
  }

  static onAuthStateChange(_callback: (event: string, session: any) => void) {
    return { data: { subscription: { unsubscribe: () => {} } } };
  }

  static async updatePrivacySettings(settings: {
    terms_accepted?: boolean;
    marketing_consent?: boolean;
    analytics_consent?: boolean;
    data_usage_consent?: boolean;
  }) {
    return { error: null };
  }

  static async getPrivacySettings() {
    return null;
  }
}
