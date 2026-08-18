-- Habilitar inserção de aulas geradas por IA para usuários autenticados
-- Nota: rb_aulas armazena o conteúdo pedagógico que pode ser gerado dinamicamente
GRANT INSERT ON public.rb_aulas TO authenticated;
GRANT INSERT ON public.rb_paginas_aula TO authenticated;

-- Políticas de RLS para permitir que o usuário crie o conteúdo que a IA gera em seu nome
CREATE POLICY "Usuários autenticados podem criar aulas" ON public.rb_aulas
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Usuários autenticados podem criar páginas de aula" ON public.rb_paginas_aula
FOR INSERT TO authenticated WITH CHECK (true);
