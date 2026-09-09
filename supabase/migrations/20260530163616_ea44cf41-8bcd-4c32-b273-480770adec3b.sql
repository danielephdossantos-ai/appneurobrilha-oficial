-- Adicionar colunas de moedas na tabela de perfis de crianças
ALTER TABLE public.children 
ADD COLUMN IF NOT EXISTS coins INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS earned_today INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_earned INTEGER DEFAULT 0;

-- Função para adicionar moedas
CREATE OR REPLACE FUNCTION public.add_brilhocoins(child_id UUID, amount INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE public.children
  SET 
    coins = coins + amount,
    earned_today = earned_today + amount,
    total_earned = total_earned + amount,
    updated_at = now()
  WHERE id = child_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Função para resetar moedas diárias (pode ser chamada por um cron ou trigger de login)
CREATE OR REPLACE FUNCTION public.reset_daily_coins()
RETURNS void AS $$
BEGIN
  UPDATE public.children
  SET earned_today = 0;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Garantir permissões
GRANT EXECUTE ON FUNCTION public.add_brilhocoins(UUID, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.add_brilhocoins(UUID, INTEGER) TO service_role;
