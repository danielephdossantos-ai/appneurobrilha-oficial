-- Adicionar coluna de skins na tabela de mascotes se não existir
ALTER TABLE public.mascots ADD COLUMN IF NOT EXISTS skins JSONB DEFAULT '{}'::jsonb;

-- Atualizar o Pip oficial com suas skins temáticas
-- Removido filtro de is_official para evitar erro se a coluna ainda não existir
UPDATE public.mascots 
SET skins = '{
  "dinossauros": "https://api.dicebear.com/7.x/bottts/svg?seed=PipExplorer",
  "espaco": "https://api.dicebear.com/7.x/bottts/svg?seed=PipAstronaut",
  "arte": "https://api.dicebear.com/7.x/bottts/svg?seed=PipArtist",
  "animais": "https://api.dicebear.com/7.x/bottts/svg?seed=PipVet",
  "musica": "https://api.dicebear.com/7.x/bottts/svg?seed=PipMaestro",
  "fazendinha": "https://api.dicebear.com/7.x/bottts/svg?seed=PipFarmer"
}'::jsonb
WHERE name = 'Pip';
