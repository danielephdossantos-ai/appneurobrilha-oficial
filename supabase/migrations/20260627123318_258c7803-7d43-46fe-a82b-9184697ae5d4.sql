
GRANT SELECT, INSERT, UPDATE ON public.aulas_geradas_ia TO authenticated;
GRANT ALL ON public.aulas_geradas_ia TO service_role;

DROP POLICY IF EXISTS "Aulas IA insert autenticado" ON public.aulas_geradas_ia;
DROP POLICY IF EXISTS "Aulas IA update autenticado" ON public.aulas_geradas_ia;

CREATE POLICY "Aulas IA insert autenticado"
  ON public.aulas_geradas_ia FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Aulas IA update autenticado"
  ON public.aulas_geradas_ia FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);
