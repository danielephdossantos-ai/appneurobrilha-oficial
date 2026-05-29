
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session;
    },
  });

  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      if (!session?.user) return [];
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);
      
      if (error) throw error;
      return data as Notification[];
    },
    enabled: !!session?.user,
  });

  const sendNotification = useMutation({
    mutationFn: async (notif: Omit<Notification, "id" | "user_id" | "read" | "created_at" | "scheduled_for">) => {
      if (!session?.user) throw new Error("Não autenticado");
      const { error } = await supabase
        .from("notifications")
        .insert([{
          ...notif,
          user_id: session.user.id,
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
      if (!session?.user) return;
      const { error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("user_id", session.user.id)
        .eq("read", false);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });

  // Real-time subscription
  useEffect(() => {
    if (!session?.user) return;

    const channel = supabase
      .channel(`notifications-${session.user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${session.user.id}`
        },
        (payload) => {
          const newNotif = payload.new as Notification;
          toast(newNotif.title, {
            description: newNotif.message,
            action: {
              label: "Ver",
              onClick: () => console.log("Notificação clicada", newNotif)
            }
          });
          queryClient.invalidateQueries({ queryKey: ["notifications"] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session?.user?.id, queryClient]);

  return {
    notifications,
    isLoading,
    sendNotification: sendNotification.mutate,
    markAsRead: markAsRead.mutate,
    markAllAsRead: markAllAsRead.mutate,
    unreadCount: notifications.filter(n => !n.read).length
  };
}
