
CREATE POLICY "Pais leem suas próprias fotos de tarefa"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'homework-photos' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Pais enviam fotos na própria pasta"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'homework-photos' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Pais apagam suas próprias fotos de tarefa"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'homework-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
