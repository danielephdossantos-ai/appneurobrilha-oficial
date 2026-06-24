import { supabase } from "@/database/supabase/client";

export class AuthService {
  static async signOut() {
    await supabase.auth.signOut();
    window.location.href = "/auth";
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
    const { data: auth } = await supabase.auth.getUser();
    const userId = auth?.user?.id;
    if (!userId) return { error: new Error("NOT_AUTHENTICATED") };

    const { data: existing } = await supabase
      .from("user_privacy_settings")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from("user_privacy_settings")
        .update(settings)
        .eq("user_id", userId);
      return { error };
    }
    const { error } = await supabase
      .from("user_privacy_settings")
      .insert([{ user_id: userId, ...settings }]);
    return { error };
  }

  static async getPrivacySettings() {
    const { data: auth } = await supabase.auth.getUser();
    const userId = auth?.user?.id;
    if (!userId) return null;
    const { data } = await supabase
      .from("user_privacy_settings")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();
    return data;
  }
}
