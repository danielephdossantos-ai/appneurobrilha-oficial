ALTER TABLE public.mascots ADD COLUMN IF NOT EXISTS price integer DEFAULT 0;
ALTER TABLE public.user_mascots ADD COLUMN IF NOT EXISTS unlocked boolean DEFAULT false;

-- Garantir que os iniciais estão desbloqueados
UPDATE public.user_mascots SET unlocked = true WHERE mascot_id IN ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002');

INSERT INTO public.mascots (id, name, description, category, price)
VALUES 
  ('00000000-0000-0000-0000-000000000003', 'Dino', 'Um dinossauro valente e muito curioso.', 'shop', 500),
  ('00000000-0000-0000-0000-000000000004', 'Robo', 'Um robô inteligente que adora lógica.', 'shop', 750),
  ('00000000-0000-0000-0000-000000000005', 'Unicórnio', 'Mágica e brilho para iluminar seus estudos.', 'shop', 1000)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;