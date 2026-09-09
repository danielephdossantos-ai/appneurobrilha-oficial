-- Adicionar colunas para o novo sistema de hiperfocos
ALTER TABLE public.children 
ADD COLUMN IF NOT EXISTS has_hyperfocus BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS hyperfocus_list TEXT[] DEFAULT '{}';

-- Atualizar o tipo Hiperfoco no banco não é necessário se usarmos TEXT[], 
-- mas vamos garantir que o metadado do perfil reflita isso.
COMMENT ON COLUMN public.children.hyperfocus_list IS 'Lista de interesses da criança (dinossauros, espaco, minecraft, etc)';
