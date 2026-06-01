-- Inserindo novos mascotes com UUIDs válidos
INSERT INTO public.mascots (id, name, description, image_url, category, base_stats, skins)
VALUES 
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d6f', 'Pip Carrinho', 'Vrum vrum! Acelerando na pista da diversão.', '/assets/pip-carros.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d70', 'Pip Caminhão', 'Carregando alegria por todas as estradas!', '/assets/pip-veiculos.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d71', 'Pip Trator', 'Força total para construir grandes aventuras.', '/assets/pip-fazendinha.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d72', 'Pip Moto', 'Equilíbrio e velocidade para explorar o mundo.', '/assets/pip-carros.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d73', 'Pip Explorador', 'Vamos rugir e descobrir o mundo jurássico!', '/assets/pip-dinossauros.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d74', 'Pip Astronauta', 'Pronto para decolar até as estrelas!', '/assets/pip-espaco.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d75', 'Pip Artista', 'Pincel na mão e muita cor pra criar.', '/assets/pip-arte.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d76', 'Pip Veterinário', 'Cuidando dos amiguinhos com muito carinho.', '/assets/pip-animais.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d77', 'Pip Maestro', 'Vamos reger uma sinfonia de aprendizado!', '/assets/pip-musica.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d78', 'Pip Fazendeiro', 'Plantando aprendizado e colhendo conquistas.', '/assets/pip-fazendinha.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d79', 'Pip Super', 'Salvando o dia com o poder do estudo!', '/assets/pip-super-herois.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d80', 'Pip Realeza', 'Coroado de gentileza e sabedoria.', '/assets/pip-princesas.png', 'premium', '{}', '{}'),
  ('792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d81', 'Pip Builder', 'Construindo aventuras bloco a bloco.', '/assets/pip-minecraft.png', 'premium', '{}', '{}')
ON CONFLICT (id) DO UPDATE SET 
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  category = EXCLUDED.category;

-- Conceder esses mascotes a todos os usuários existentes
INSERT INTO public.user_mascots (user_id, mascot_id, is_active, level, affinity, experience)
SELECT u.id, m.id, false, 1, 50, 0
FROM auth.users u
CROSS JOIN public.mascots m
WHERE m.name LIKE 'Pip %'
ON CONFLICT (user_id, mascot_id) DO NOTHING;
