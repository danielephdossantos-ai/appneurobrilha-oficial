
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Gêneros jornalísticos e propostas editoriais', ordem=1 WHERE codigo_bncc='EF07LP01';
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Gêneros jornalísticos multissemióticos', ordem=2 WHERE codigo_bncc='EF07LP02';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfologia — formação de palavras', ordem=3 WHERE codigo_bncc='EF07LP03';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe — verbo', ordem=4 WHERE codigo_bncc='EF07LP04';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe — transitividade verbal', ordem=5 WHERE codigo_bncc='EF07LP05';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Concordância nominal e verbal', ordem=6 WHERE codigo_bncc='EF07LP06';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe da oração', ordem=7 WHERE codigo_bncc='EF07LP07';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe — adjetivo', ordem=8 WHERE codigo_bncc='EF07LP08';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe — advérbio e locução adverbial', ordem=9 WHERE codigo_bncc='EF07LP09';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Morfossintaxe aplicada à produção', ordem=10 WHERE codigo_bncc='EF07LP10';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe do período composto por coordenação', ordem=11 WHERE codigo_bncc='EF07LP11';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão referencial', ordem=12 WHERE codigo_bncc='EF07LP12';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão referencial aplicada à leitura', ordem=13 WHERE codigo_bncc='EF07LP13';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Modalização e figuras de linguagem', ordem=14 WHERE codigo_bncc='EF07LP14';

INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc) VALUES
('EF07LP01','EF06LP02'),
('EF07LP02','EF07LP01'),
('EF07LP04','EF06LP04'),
('EF07LP05','EF07LP04'),
('EF07LP06','EF06LP06'),
('EF07LP07','EF07LP05'),
('EF07LP08','EF07LP07'),
('EF07LP09','EF07LP07'),
('EF07LP10','EF06LP11'),
('EF07LP11','EF06LP07'),
('EF07LP12','EF06LP12'),
('EF07LP13','EF07LP12'),
('EF07LP14','EF07LP13')
ON CONFLICT DO NOTHING;
