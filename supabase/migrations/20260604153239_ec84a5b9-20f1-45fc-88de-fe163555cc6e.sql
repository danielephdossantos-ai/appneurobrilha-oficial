ALTER TABLE public.bncc_habilidades ADD COLUMN IF NOT EXISTS ordem INTEGER;
-- Update existing skills with some default order
UPDATE public.bncc_habilidades SET ordem = 1 WHERE codigo_bncc = 'EI03EF01';
UPDATE public.bncc_habilidades SET ordem = 2 WHERE codigo_bncc = 'EI03EF09';
UPDATE public.bncc_habilidades SET ordem = 3 WHERE codigo_bncc = 'EF01LP01';
UPDATE public.bncc_habilidades SET ordem = 4 WHERE codigo_bncc = 'EF01LP09';
