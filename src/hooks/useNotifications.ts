import { useEffect } from "react";
import { supabase } from "@/database/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type NotificationType = 'estudo' | 'rotina' | 'seguranca' | 'reforco' | 'amigo';

export interface Notification {
  id: string;
  user_id: string;
  child_id?: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  scheduled_for: string;
  created_at: string;
}

export function useNotifications() {
  const queryClient = useQueryClient();

  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return data as Notification[];
    },
  });

  const sendNotification = useMutation({
    mutationFn: async (notif: Omit<Notification, "id" | "user_id" | "read" | "created_at" | "scheduled_for">) => {
      const { error } = await supabase
        .from("notifications")
        .insert([{
          ...notif,
          read: false,
          scheduled_for: new Date().toISOString()
        }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });

  const markAsRead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });

  const markAllAsRead = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("read", false);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });

  return {
    notifications,
    isLoading,
    sendNotification: sendNotification.mutate,
    markAsRead: markAsRead.mutate,
    markAllAsRead: markAllAsRead.mutate,
    unreadCount: notifications.filter(n => !n.read).length
  };
}
