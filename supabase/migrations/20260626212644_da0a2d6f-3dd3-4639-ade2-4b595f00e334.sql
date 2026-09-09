
-- Biblioteca BNCC: catálogo central de códigos por ano (1º ao 9º) e componente
CREATE TABLE IF NOT EXISTS public.bncc_biblioteca (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ano smallint NOT NULL CHECK (ano BETWEEN 1 AND 9),
  etapa text NOT NULL DEFAULT 'fundamental',
  componente text NOT NULL,        -- ex: 'Língua Portuguesa', 'Matemática', 'Ciências'...
  unidade_tematica text,           -- ex: 'Números', 'Leitura/Escuta'
  objeto_conhecimento text,
  codigo text NOT NULL,            -- ex: EF01MA01
  habilidade text NOT NULL,        -- descrição completa
  palavras_chave text[] DEFAULT '{}',
  ordem int DEFAULT 0,
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (codigo)
);

CREATE INDEX IF NOT EXISTS idx_bncc_biblioteca_ano ON public.bncc_biblioteca(ano);
CREATE INDEX IF NOT EXISTS idx_bncc_biblioteca_componente ON public.bncc_biblioteca(componente);
CREATE INDEX IF NOT EXISTS idx_bncc_biblioteca_ano_comp ON public.bncc_biblioteca(ano, componente);

GRANT SELECT ON public.bncc_biblioteca TO anon, authenticated;
GRANT ALL ON public.bncc_biblioteca TO service_role;

ALTER TABLE public.bncc_biblioteca ENABLE ROW LEVEL SECURITY;

CREATE POLICY "BNCC público leitura"
  ON public.bncc_biblioteca FOR SELECT
  USING (ativo = true);

CREATE POLICY "Admin gerencia BNCC"
  ON public.bncc_biblioteca FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_bncc_biblioteca_updated_at
  BEFORE UPDATE ON public.bncc_biblioteca
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- View agrupada por ano (estrutura de árvore da biblioteca)
CREATE OR REPLACE VIEW public.bncc_biblioteca_por_ano
WITH (security_invoker=on) AS
SELECT
  ano,
  ano::text || 'º Ano' AS rotulo,
  componente,
  count(*) AS total_codigos,
  jsonb_agg(jsonb_build_object(
    'codigo', codigo,
    'habilidade', habilidade,
    'unidade_tematica', unidade_tematica
  ) ORDER BY ordem, codigo) AS habilidades
FROM public.bncc_biblioteca
WHERE ativo = true
GROUP BY ano, componente
ORDER BY ano, componente;

GRANT SELECT ON public.bncc_biblioteca_por_ano TO anon, authenticated;
