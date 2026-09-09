DELETE FROM public.study_agenda WHERE child_id = '5d3ce256-ef7f-42cb-925d-bece7c2778e9';
DELETE FROM public.rb_paginas_aula WHERE aula_id IN (SELECT id FROM public.rb_aulas_geradas_ia);
DELETE FROM public.rb_aulas_geradas_ia;