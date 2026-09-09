-- Garantir que as colunas existem (repetindo por segurança)
ALTER TABLE public.children ADD COLUMN IF NOT EXISTS coins INTEGER DEFAULT 0;
ALTER TABLE public.children ADD COLUMN IF NOT EXISTS earned_today INTEGER DEFAULT 0;
ALTER TABLE public.children ADD COLUMN IF NOT EXISTS total_earned INTEGER DEFAULT 0;

-- Resetar permissões de atualização para incluir novas colunas
GRANT ALL ON TABLE public.children TO authenticated;
GRANT ALL ON TABLE public.children TO service_role;

-- Recriar função RPC com caminho de busca explícito para segurança
CREATE OR REPLACE FUNCTION public.add_brilhocoins(child_id UUID, amount INTEGER)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.children
  SET 
    coins = COALESCE(coins, 0) + amount,
    earned_today = COALESCE(earned_today, 0) + amount,
    total_earned = COALESCE(total_earned, 0) + amount,
    updated_at = now()
  WHERE id = child_id;
END;
$$;
