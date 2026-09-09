-- Tabela de registros
CREATE TABLE public.missao_familia_registros (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  curso_slug TEXT NOT NULL,
  aula_slug TEXT NOT NULL,
  foto_path TEXT NOT NULL,
  legenda TEXT,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX missao_familia_registros_user_aula_idx
  ON public.missao_familia_registros(user_id, curso_slug, aula_slug, criado_em DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.missao_familia_registros TO authenticated;
GRANT ALL ON public.missao_familia_registros TO service_role;

ALTER TABLE public.missao_familia_registros ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own_registros_select"
  ON public.missao_familia_registros FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "own_registros_insert"
  ON public.missao_familia_registros FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "own_registros_update"
  ON public.missao_familia_registros FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "own_registros_delete"
  ON public.missao_familia_registros FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Políticas RLS no storage.objects — cada usuário só mexe na sua pasta
-- Convenção de path: {user_id}/{curso_slug}/{aula_slug}/{uuid}.{ext}
CREATE POLICY "missao_familia_fotos_select_own"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'missao-familia-fotos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "missao_familia_fotos_insert_own"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'missao-familia-fotos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "missao_familia_fotos_update_own"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'missao-familia-fotos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "missao_familia_fotos_delete_own"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'missao-familia-fotos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );