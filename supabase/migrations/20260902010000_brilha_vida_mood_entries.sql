CREATE TABLE IF NOT EXISTS public.brilha_vida_mood_entries (
  id uuid PRIMARY KEY,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  source text NOT NULL CHECK (source IN ('zones','ruler','como-estou','semaforo','termometro','diario-sentir')),
  valence numeric NOT NULL CHECK (valence BETWEEN -2 AND 2),
  energy numeric NOT NULL CHECK (energy BETWEEN -2 AND 2),
  emotion text NOT NULL,
  quadrant text CHECK (quadrant IS NULL OR quadrant IN ('azul','verde','amarelo','vermelho')),
  trigger_text text,
  moment_text text,
  note text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS brilha_vida_mood_child_created_idx
  ON public.brilha_vida_mood_entries(child_id, created_at DESC);

ALTER TABLE public.brilha_vida_mood_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Families manage own mood entries" ON public.brilha_vida_mood_entries;
CREATE POLICY "Families manage own mood entries"
ON public.brilha_vida_mood_entries FOR ALL TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.children c
  WHERE c.id = brilha_vida_mood_entries.child_id AND c.user_id = auth.uid()
))
WITH CHECK (EXISTS (
  SELECT 1 FROM public.children c
  WHERE c.id = brilha_vida_mood_entries.child_id AND c.user_id = auth.uid()
));
