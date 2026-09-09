
-- Fase 2.6: Português 6º Ano — mapear unidade_tematica, objeto_conhecimento e ordem
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Gêneros jornalísticos e efeitos de sentido', ordem=1 WHERE codigo_bncc='EF06LP01';
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Gêneros jornalísticos e efeitos de sentido', ordem=2 WHERE codigo_bncc='EF06LP02';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Léxico e semântica', ordem=3 WHERE codigo_bncc='EF06LP03';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe', ordem=4 WHERE codigo_bncc='EF06LP04';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe', ordem=5 WHERE codigo_bncc='EF06LP05';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe', ordem=6 WHERE codigo_bncc='EF06LP06';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe da oração e do período', ordem=7 WHERE codigo_bncc='EF06LP07';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe da oração e do período', ordem=8 WHERE codigo_bncc='EF06LP08';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe da oração e do período', ordem=9 WHERE codigo_bncc='EF06LP09';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe da oração e do período', ordem=10 WHERE codigo_bncc='EF06LP10';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe aplicada à produção', ordem=11 WHERE codigo_bncc='EF06LP11';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão textual', ordem=12 WHERE codigo_bncc='EF06LP12';

-- Pré-requisitos internos (encadeamento sequencial)
INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc) VALUES
('EF06LP02','EF06LP01'),
('EF06LP05','EF06LP04'),
('EF06LP06','EF06LP04'),
('EF06LP08','EF06LP07'),
('EF06LP09','EF06LP08'),
('EF06LP10','EF06LP09'),
('EF06LP11','EF06LP06'),
('EF06LP12','EF06LP11')
ON CONFLICT DO NOTHING;
