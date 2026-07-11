CREATE TABLE public.historia_museu_digital (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  curso text NOT NULL,
  unidade integer NOT NULL,
  aula integer NOT NULL,
  tipo_item text NOT NULL CHECK (tipo_item IN ('engrenagem','card_museu','sala_desbloqueada')),
  nome_sala text,
  nome_item text NOT NULL,
  imagem_url text,
  xp integer NOT NULL DEFAULT 0,
  moedas integer NOT NULL DEFAULT 0,
  meta jsonb NOT NULL DEFAULT '{}'::jsonb,
  conquistado_em timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, curso, unidade, aula, tipo_item)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.historia_museu_digital TO authenticated;
GRANT ALL ON public.historia_museu_digital TO service_role;

ALTER TABLE public.historia_museu_digital ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários veem seu próprio museu"
  ON public.historia_museu_digital FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários criam itens no próprio museu"
  ON public.historia_museu_digital FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários atualizam o próprio museu"
  ON public.historia_museu_digital FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários deletam o próprio museu"
  ON public.historia_museu_digital FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE TRIGGER historia_museu_digital_updated_at
  BEFORE UPDATE ON public.historia_museu_digital
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_historia_museu_user_curso
  ON public.historia_museu_digital(user_id, curso, unidade);