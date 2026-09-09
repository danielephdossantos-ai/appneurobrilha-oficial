
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Notícias falsas — checagem e curadoria', ordem=1 WHERE codigo_bncc='EF09LP01';
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Cobertura da imprensa — comparação de enfoques', ordem=2 WHERE codigo_bncc='EF09LP02';
UPDATE public.bncc_habilidades SET unidade_tematica='Produção de textos', objeto_conhecimento='Artigo de opinião — tipos de argumento', ordem=3 WHERE codigo_bncc='EF09LP03';
UPDATE public.bncc_habilidades SET unidade_tematica='Produção de textos', objeto_conhecimento='Norma-padrão — sintaxe complexa', ordem=4 WHERE codigo_bncc='EF09LP04';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe — predicativo do sujeito', ordem=5 WHERE codigo_bncc='EF09LP05';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Verbos de ligação', ordem=6 WHERE codigo_bncc='EF09LP06';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Regência verbal e nominal', ordem=7 WHERE codigo_bncc='EF09LP07';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Conjunções coordenativas e subordinativas', ordem=8 WHERE codigo_bncc='EF09LP08';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Orações adjetivas restritivas e explicativas', ordem=9 WHERE codigo_bncc='EF09LP09';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Colocação pronominal', ordem=10 WHERE codigo_bncc='EF09LP10';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão sequencial e modalização', ordem=11 WHERE codigo_bncc='EF09LP11';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Léxico — estrangeirismos', ordem=12 WHERE codigo_bncc='EF09LP12';

INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc) VALUES
('EF09LP01','EF08LP02'),
('EF09LP02','EF09LP01'),
('EF09LP03','EF08LP03'),
('EF09LP04','EF08LP04'),
('EF09LP05','EF08LP06'),
('EF09LP06','EF09LP05'),
('EF09LP07','EF08LP07'),
('EF09LP08','EF08LP11'),
('EF09LP09','EF08LP12'),
('EF09LP10','EF09LP07'),
('EF09LP11','EF08LP13'),
('EF09LP12','EF08LP05')
ON CONFLICT DO NOTHING;
