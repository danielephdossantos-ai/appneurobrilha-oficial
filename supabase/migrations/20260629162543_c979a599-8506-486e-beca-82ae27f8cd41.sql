
CREATE TABLE public.educational_games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  titulo text NOT NULL,
  descricao text,
  dificuldade text NOT NULL,
  objetivo text NOT NULL,
  pontuacao_maxima int NOT NULL DEFAULT 100,
  url text,
  tipo text,
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_educational_games_bncc ON public.educational_games(codigo_bncc);

GRANT SELECT ON public.educational_games TO anon, authenticated;
GRANT ALL ON public.educational_games TO service_role;

ALTER TABLE public.educational_games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Games readable by everyone"
  ON public.educational_games FOR SELECT USING (true);

CREATE POLICY "Admins manage games"
  ON public.educational_games FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_educational_games_updated_at
  BEFORE UPDATE ON public.educational_games
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
