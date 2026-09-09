
UPDATE public.bncc_habilidades SET unidade_tematica='Matéria e energia', objeto_conhecimento='Características e usos dos materiais', ordem=1 WHERE codigo_bncc='EF01CI01';
UPDATE public.bncc_habilidades SET unidade_tematica='Vida e evolução', objeto_conhecimento='Corpo humano — partes e funções', ordem=2 WHERE codigo_bncc='EF01CI02';
UPDATE public.bncc_habilidades SET unidade_tematica='Vida e evolução', objeto_conhecimento='Higiene e saúde', ordem=3 WHERE codigo_bncc='EF01CI03';
UPDATE public.bncc_habilidades SET unidade_tematica='Vida e evolução', objeto_conhecimento='Respeito à diversidade', ordem=4 WHERE codigo_bncc='EF01CI04';
UPDATE public.bncc_habilidades SET unidade_tematica='Terra e Universo', objeto_conhecimento='Escalas de tempo', ordem=5 WHERE codigo_bncc='EF01CI05';
UPDATE public.bncc_habilidades SET unidade_tematica='Terra e Universo', objeto_conhecimento='Sucessão dia e noite', ordem=6 WHERE codigo_bncc='EF01CI06';

INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc) VALUES
('EF01CI03','EF01CI02'),
('EF01CI06','EF01CI05')
ON CONFLICT DO NOTHING;
