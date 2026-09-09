
GRANT SELECT ON public.rb_habilidades TO anon;
GRANT SELECT ON public.rb_categorias TO anon;
GRANT SELECT ON public.rb_aulas TO anon;
GRANT SELECT ON public.rb_atividades_relacionadas TO anon;

DROP POLICY IF EXISTS "rb_habilidades read" ON public.rb_habilidades;
CREATE POLICY "rb_habilidades read" ON public.rb_habilidades FOR SELECT USING (true);

DROP POLICY IF EXISTS "rb_categorias read" ON public.rb_categorias;
CREATE POLICY "rb_categorias read" ON public.rb_categorias FOR SELECT USING (true);

DROP POLICY IF EXISTS "rb_aulas read" ON public.rb_aulas;
CREATE POLICY "rb_aulas read" ON public.rb_aulas FOR SELECT USING (true);

DROP POLICY IF EXISTS "rb_atividades_relacionadas read" ON public.rb_atividades_relacionadas;
CREATE POLICY "rb_atividades_relacionadas read" ON public.rb_atividades_relacionadas FOR SELECT USING (true);
