-- Corrigindo SEC-001 e SEC-002 (Auditoria 08/08/2026)
-- Conceder permissões para a tabela mascots
GRANT SELECT ON public.mascots TO authenticated;
GRANT SELECT ON public.mascots TO anon;
GRANT ALL ON public.mascots TO service_role;

-- Habilitar RLS
ALTER TABLE public.mascots ENABLE ROW LEVEL SECURITY;

-- Criar política de leitura pública (mascotes são visíveis para todos)
CREATE POLICY "Mascotes são visíveis para todos" 
ON public.mascots FOR SELECT 
USING (true);

-- Garantir que as tabelas relacionadas também tenham segurança correta
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_mascots TO authenticated;
GRANT ALL ON public.user_mascots TO service_role;
ALTER TABLE public.user_mascots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver seus próprios mascotes"
ON public.user_mascots FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem comprar/atualizar seus mascotes"
ON public.user_mascots FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem alterar estado dos seus mascotes"
ON public.user_mascots FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);
