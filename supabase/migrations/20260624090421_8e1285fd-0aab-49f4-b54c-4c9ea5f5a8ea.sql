CREATE TABLE IF NOT EXISTS public.banco_midias_categorias (
  id text PRIMARY KEY,
  label text NOT NULL,
  emoji text,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.banco_midias_categorias TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.banco_midias_categorias TO authenticated;
GRANT ALL ON public.banco_midias_categorias TO service_role;

ALTER TABLE public.banco_midias_categorias ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categorias do banco de mídias são públicas"
  ON public.banco_midias_categorias FOR SELECT
  USING (true);

CREATE POLICY "Admins podem gerenciar categorias do banco"
  ON public.banco_midias_categorias FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_banco_midias_categorias_updated
  BEFORE UPDATE ON public.banco_midias_categorias
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.banco_midias_categorias (id, label, emoji, ordem) VALUES
  ('letras',    'Letras',    '🔤', 1),
  ('silabas',   'Sílabas',   '🔠', 2),
  ('numeros',   'Números',   '🔢', 3),
  ('formas',    'Formas',    '🔷', 4),
  ('animais',   'Animais',   '🐶', 5),
  ('objetos',   'Objetos',   '🧸', 6),
  ('cotidiano', 'Cotidiano', '🏠', 7),
  ('mapas',     'Mapas',     '🗺️', 8),
  ('graficos',  'Gráficos',  '📊', 9),
  ('icones',    'Ícones',    '✨', 10),
  ('emocoes',   'Emoções',   '😊', 11)
ON CONFLICT (id) DO UPDATE
  SET label = EXCLUDED.label, emoji = EXCLUDED.emoji, ordem = EXCLUDED.ordem;
