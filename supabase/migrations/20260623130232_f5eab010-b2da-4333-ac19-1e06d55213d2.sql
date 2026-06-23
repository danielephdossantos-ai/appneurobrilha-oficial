
CREATE POLICY "Autenticados gerenciam midias" ON public.rb_midias
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Autenticados gerenciam vinculos de midia" ON public.rb_midia_vinculos
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_midias TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_midia_vinculos TO authenticated;
GRANT ALL ON public.rb_midias TO service_role;
GRANT ALL ON public.rb_midia_vinculos TO service_role;
