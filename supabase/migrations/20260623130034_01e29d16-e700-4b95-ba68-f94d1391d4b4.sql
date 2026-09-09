
-- Banco de imagens pedagógicas: categoriza mídias em 9 tipos e indexa
ALTER TABLE public.rb_midias
  ADD COLUMN IF NOT EXISTS categoria text;

ALTER TABLE public.rb_midias
  DROP CONSTRAINT IF EXISTS rb_midias_categoria_check;

ALTER TABLE public.rb_midias
  ADD CONSTRAINT rb_midias_categoria_check
  CHECK (categoria IS NULL OR categoria IN (
    'letras','silabas','numeros','formas','animais',
    'objetos','cotidiano','mapas','graficos'
  ));

CREATE INDEX IF NOT EXISTS rb_midias_categoria_idx ON public.rb_midias(categoria);
CREATE INDEX IF NOT EXISTS rb_midias_tipo_idx ON public.rb_midias(tipo);
CREATE INDEX IF NOT EXISTS rb_midia_vinculos_entidade_idx
  ON public.rb_midia_vinculos(entidade_tipo, entidade_id);
