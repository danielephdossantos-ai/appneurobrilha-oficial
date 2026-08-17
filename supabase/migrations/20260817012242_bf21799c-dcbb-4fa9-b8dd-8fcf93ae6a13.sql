
CREATE TABLE public.motor_decisao_logs (
    id uuid primary key default gen_random_uuid(),
    child_id uuid not null,
    serie text not null,
    disciplina text not null,
    codigo_bncc text not null,
    nivel integer not null,
    motivo_geracao text,
    aula_procurada text,
    aula_encontrada_id uuid,
    aula_encontrada_tipo text,
    resultado text not null,
    created_at timestamptz default now()
);

GRANT SELECT, INSERT ON public.motor_decisao_logs TO authenticated;
GRANT ALL ON public.motor_decisao_logs TO service_role;

ALTER TABLE public.motor_decisao_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver seus próprios logs de decisão"
ON public.motor_decisao_logs
FOR SELECT
TO authenticated
USING (auth.uid() = child_id);

CREATE POLICY "Usuários podem inserir seus próprios logs de decisão"
ON public.motor_decisao_logs
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = child_id);
