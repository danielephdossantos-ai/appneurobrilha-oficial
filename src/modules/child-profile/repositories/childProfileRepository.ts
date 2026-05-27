import { supabase } from "@/integrations/supabase/client";
import { ChildProfile } from "../types";

export class ChildProfileRepository {
  async getAllByUserId(userId: string): Promise<ChildProfile[]> {
    const { data, error } = await supabase
      .from("children")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data as unknown as ChildProfile[];
  }

  async getById(id: string): Promise<ChildProfile | null> {
    const { data, error } = await supabase
      .from("children")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return null;
    return data as unknown as ChildProfile;
  }

  async create(profile: Omit<ChildProfile, "id">): Promise<ChildProfile> {
    const { data, error } = await supabase
      .from("children")
      .insert([profile])
      .select()
      .single();

    if (error) throw error;
    return data as unknown as ChildProfile;
  }

  async update(id: string, patch: Partial<ChildProfile>): Promise<void> {
    const { error } = await supabase
      .from("children")
      .update(patch)
      .eq("id", id);

    if (error) throw error;
  }
}

export const childProfileRepository = new ChildProfileRepository();
