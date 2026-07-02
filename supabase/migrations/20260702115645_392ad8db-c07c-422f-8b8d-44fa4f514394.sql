
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Gêneros jornalísticos — editorias e curadoria', ordem=1 WHERE codigo_bncc='EF08LP01';
UPDATE public.bncc_habilidades SET unidade_tematica='Leitura/escuta', objeto_conhecimento='Checagem de fatos e fidedignidade', ordem=2 WHERE codigo_bncc='EF08LP02';
UPDATE public.bncc_habilidades SET unidade_tematica='Produção de textos', objeto_conhecimento='Artigo de opinião — argumentação', ordem=3 WHERE codigo_bncc='EF08LP03';
UPDATE public.bncc_habilidades SET unidade_tematica='Produção de textos', objeto_conhecimento='Conhecimentos linguísticos aplicados à produção', ordem=4 WHERE codigo_bncc='EF08LP04';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Formação de palavras — composição e uso do hífen', ordem=5 WHERE codigo_bncc='EF08LP05';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Sintaxe — termos essenciais da oração', ordem=6 WHERE codigo_bncc='EF08LP06';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Regência e transitividade verbal', ordem=7 WHERE codigo_bncc='EF08LP07';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Vozes verbais', ordem=8 WHERE codigo_bncc='EF08LP08';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Adjuntos adnominais', ordem=9 WHERE codigo_bncc='EF08LP09';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Adjuntos adverbiais', ordem=10 WHERE codigo_bncc='EF08LP10';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Período composto — coordenação e subordinação', ordem=11 WHERE codigo_bncc='EF08LP11';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Orações subordinadas', ordem=12 WHERE codigo_bncc='EF08LP12';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão sequencial — articuladores textuais', ordem=13 WHERE codigo_bncc='EF08LP13';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão sequencial e referencial na produção', ordem=14 WHERE codigo_bncc='EF08LP14';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Coesão referencial — pronome relativo', ordem=15 WHERE codigo_bncc='EF08LP15';
UPDATE public.bncc_habilidades SET unidade_tematica='Análise linguística/semiótica', objeto_conhecimento='Modalização e argumentatividade', ordem=16 WHERE codigo_bncc='EF08LP16';

INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc) VALUES
('EF08LP01','EF07LP01'),
('EF08LP02','EF08LP01'),
('EF08LP03','EF07LP14'),
('EF08LP04','EF07LP10'),
('EF08LP05','EF07LP03'),
('EF08LP06','EF07LP07'),
('EF08LP07','EF07LP05'),
('EF08LP08','EF08LP07'),
('EF08LP09','EF07LP08'),
('EF08LP10','EF07LP09'),
('EF08LP11','EF07LP11'),
('EF08LP12','EF08LP11'),
('EF08LP13','EF07LP12'),
('EF08LP14','EF08LP13'),
('EF08LP15','EF08LP14'),
('EF08LP16','EF07LP14')
ON CONFLICT DO NOTHING;
