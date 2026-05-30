UPDATE public.mascots
SET
  name = 'Pip',
  description = 'Pip acredita que cada aprendizado adiciona uma nova peça ao grande quebra-cabeça do conhecimento. Curioso, inteligente, amigável, engraçado e motivador — o Guardião dos Desafios está sempre ao seu lado.',
  category = 'primary',
  base_stats = jsonb_build_object(
    'title', 'Guardião dos Desafios',
    'personality', jsonb_build_array('Curioso','Inteligente','Amigável','Engraçado','Motivador'),
    'traits', jsonb_build_array('Inteligente','Amigável','Curioso','Determinado'),
    'is_official', true,
    'is_removable', false
  )
WHERE id = '00000000-0000-0000-0000-000000000001';