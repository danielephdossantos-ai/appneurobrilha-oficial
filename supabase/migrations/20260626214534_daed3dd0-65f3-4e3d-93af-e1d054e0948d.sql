ALTER TABLE public.bncc_biblioteca DROP CONSTRAINT IF EXISTS bncc_biblioteca_codigo_key;
ALTER TABLE public.bncc_biblioteca ADD CONSTRAINT bncc_biblioteca_ano_codigo_key UNIQUE (ano, codigo);