
CREATE TYPE public.lesson_example_categoria AS ENUM (
  'cotidiano','escola','familia','brincadeira','natureza','ciencia','matematica'
);

ALTER TABLE public.lesson_examples
  ADD COLUMN IF NOT EXISTS categoria public.lesson_example_categoria;

CREATE INDEX IF NOT EXISTS lesson_examples_categoria_idx
  ON public.lesson_examples(categoria);
