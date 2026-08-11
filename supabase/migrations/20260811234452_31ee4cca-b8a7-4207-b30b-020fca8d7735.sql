DELETE FROM public.children c
WHERE c.anamnese_completa = false
  AND c.nome = 'Nova criança'
  AND NOT EXISTS (SELECT 1 FROM public.anamnese_v2 a WHERE a.child_id = c.id)
  AND NOT EXISTS (SELECT 1 FROM public.activity_logs l WHERE l.child_id = c.id);