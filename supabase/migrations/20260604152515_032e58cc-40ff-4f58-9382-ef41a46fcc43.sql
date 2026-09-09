-- Clean up if partially created
DROP TABLE IF EXISTS public.progresso_aluno;
DROP TABLE IF EXISTS public.atividades;
DROP TABLE IF EXISTS public.explicacoes;
DROP TABLE IF EXISTS public.bncc_habilidades;

CREATE TABLE public.bncc_habilidades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc TEXT UNIQUE NOT NULL,
  ano TEXT,
  disciplina TEXT,
  titulo TEXT,
  objetivo TEXT,
  nivel TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.explicacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc TEXT REFERENCES public.bncc_habilidades(codigo_bncc),
  texto_professor TEXT,
  audio TEXT,
  imagem TEXT,
  video TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.atividades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc TEXT REFERENCES public.bncc_habilidades(codigo_bncc),
  tipo TEXT,
  nivel TEXT,
  pergunta TEXT,
  alternativa_a TEXT,
  alternativa_b TEXT,
  alternativa_c TEXT,
  resposta TEXT,
  feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.progresso_aluno (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES public.children(id),
  codigo_bncc TEXT REFERENCES public.bncc_habilidades(codigo_bncc),
  tentativas INTEGER DEFAULT 0,
  acertos INTEGER DEFAULT 0,
  erros INTEGER DEFAULT 0,
  dominio NUMERIC DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Grant access to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bncc_habilidades TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.explicacoes TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.atividades TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.progresso_aluno TO authenticated;

-- Service role access
GRANT ALL ON public.bncc_habilidades TO service_role;
GRANT ALL ON public.explicacoes TO service_role;
GRANT ALL ON public.atividades TO service_role;
GRANT ALL ON public.progresso_aluno TO service_role;

-- Enable RLS
ALTER TABLE public.bncc_habilidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.explicacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.atividades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progresso_aluno ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read bncc_habilidades" ON public.bncc_habilidades FOR SELECT TO authenticated USING (true);
CREATE POLICY "Public read explicacoes" ON public.explicacoes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Public read atividades" ON public.atividades FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can manage their own children's progress" ON public.progresso_aluno FOR ALL TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.children 
    WHERE public.children.id = public.progresso_aluno.aluno_id 
    AND public.children.user_id = auth.uid()
  )
);