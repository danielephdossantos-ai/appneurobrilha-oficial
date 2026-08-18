-- Verificar se a tabela tem RLS e se existem políticas
ALTER TABLE public.rb_aulas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rb_paginas_aula ENABLE ROW LEVEL SECURITY;

-- Garantir privilégios básicos (necessário além do RLS)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_aulas TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_paginas_aula TO authenticated;
GRANT ALL ON public.rb_aulas TO service_role;
GRANT ALL ON public.rb_paginas_aula TO service_role;

-- Criar políticas robustas que permitem a qualquer usuário autenticado criar conteúdo pedagógico
-- Isso é necessário para o fluxo de IA onde o usuário "gera" a aula
DROP POLICY IF EXISTS "Usuários autenticados podem criar aulas" ON public.rb_aulas;
CREATE POLICY "Usuários autenticados podem criar aulas" ON public.rb_aulas
FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Usuários autenticados podem criar páginas de aula" ON public.rb_paginas_aula;
CREATE POLICY "Usuários autenticados podem criar páginas de aula" ON public.rb_paginas_aula
FOR INSERT TO authenticated WITH CHECK (true);

-- Permitir leitura também, senão a aula some após criar
DROP POLICY IF EXISTS "Aulas são públicas para leitura" ON public.rb_aulas;
CREATE POLICY "Aulas são públicas para leitura" ON public.rb_aulas
FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Páginas são públicas para leitura" ON public.rb_paginas_aula;
CREATE POLICY "Páginas são públicas para leitura" ON public.rb_paginas_aula
FOR SELECT TO authenticated USING (true);
