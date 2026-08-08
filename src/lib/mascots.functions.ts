import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const buyMascot = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .input(z.object({ mascotId: z.string(), price: z.number(), childId: z.string() }))
  .handler(async ({ input, context }) => {
    const { supabase, userId } = context;

    // 1. Verificar saldo de moedas do filho
    const { data: child, error: childError } = await supabase
      .from("children")
      .select("coins")
      .eq("id", input.childId)
      .single();

    if (childError || !child) throw new Error("Criança não encontrada");
    if (child.coins < input.price) throw new Error("Moedas insuficientes");

    // 2. Deduzir moedas
    const { error: updateCoinsError } = await supabase
      .from("children")
      .update({ coins: child.coins - input.price })
      .eq("id", input.childId);

    if (updateCoinsError) throw updateCoinsError;

    // 3. Desbloquear mascote
    const { error: unlockError } = await supabase
      .from("user_mascots")
      .upsert({
        user_id: userId,
        mascot_id: input.mascotId,
        unlocked: true,
        is_active: false
      }, { onConflict: 'user_id,mascot_id' });

    if (unlockError) throw unlockError;

    return { success: true };
  });

export const toggleMascotActive = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .input(z.object({ mascotId: z.string() }))
  .handler(async ({ input, context }) => {
    const { supabase, userId } = context;

    // 1. Desativar todos
    await supabase
      .from("user_mascots")
      .update({ is_active: false })
      .eq("user_id", userId);

    // 2. Ativar o selecionado (apenas se estiver desbloqueado)
    const { error } = await supabase
      .from("user_mascots")
      .update({ is_active: true })
      .eq("user_id", userId)
      .eq("mascot_id", input.mascotId)
      .eq("unlocked", true);

    if (error) throw error;
    return { success: true };
  });
