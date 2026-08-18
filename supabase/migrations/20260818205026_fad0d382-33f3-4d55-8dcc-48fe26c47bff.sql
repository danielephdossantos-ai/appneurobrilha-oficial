-- Habilitar RLS em rb_categorias e rb_habilidades e conceder permissões
ALTER TABLE public.rb_categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rb_habilidades ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON public.rb_categorias TO authenticated;
GRANT SELECT, INSERT ON public.rb_habilidades TO authenticated;

-- Políticas para rb_categorias
DROP POLICY IF EXISTS "Categorias leitura pública" ON public.rb_categorias;
CREATE POLICY "Categorias leitura pública" ON public.rb_categorias
FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Categorias inserção por usuários" ON public.rb_categorias;
CREATE POLICY "Categorias inserção por usuários" ON public.rb_categorias
FOR INSERT TO authenticated WITH CHECK (true);

-- Políticas para rb_habilidades
DROP POLICY IF EXISTS "Habilidades leitura pública" ON public.rb_habilidades;
CREATE POLICY "Habilidades leitura pública" ON public.rb_habilidades
FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Habilidades inserção por usuários" ON public.rb_habilidades;
CREATE POLICY "Habilidades inserção por usuários" ON public.rb_habilidades
FOR INSERT TO authenticated WITH CHECK (true);

-- Reforçar permissões em rb_aulas
GRANT ALL ON public.rb_aulas TO authenticated;
GRANT ALL ON public.rb_paginas_aula TO authenticated;

-- Verificar políticas de rb_aulas novamente
DROP POLICY IF EXISTS "Usuários autenticados podem criar aulas" ON public.rb_aulas;
CREATE POLICY "Usuários autenticados podem criar aulas" ON public.rb_aulas
FOR INSERT TO authenticated WITH CHECK (true);

-- O erro "new row violates RLS" muitas vezes acontece em colunas auto-preenchidas por funções que não tem acesso.
-- Mas aqui deve ser apenas falta de política nas tabelas de referência (categorias/habilidades)
