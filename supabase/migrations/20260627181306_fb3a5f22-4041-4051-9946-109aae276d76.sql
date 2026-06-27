CREATE TABLE public.rb_aulas_ia (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  semana_numero int not null,
  tema text not null,
  idade int,
  serie text,
  conteudo jsonb not null,
  created_at timestamptz not null default now()
);
CREATE INDEX rb_aulas_ia_lookup_idx ON public.rb_aulas_ia (area, semana_numero, tema, idade, serie);
GRANT SELECT, INSERT ON public.rb_aulas_ia TO authenticated;
GRANT ALL ON public.rb_aulas_ia TO service_role;
ALTER TABLE public.rb_aulas_ia ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_aulas_ia read authenticated" ON public.rb_aulas_ia FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_aulas_ia insert authenticated" ON public.rb_aulas_ia FOR INSERT TO authenticated WITH CHECK (true);