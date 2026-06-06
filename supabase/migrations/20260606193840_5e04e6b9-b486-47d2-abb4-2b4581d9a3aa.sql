-- Insert missing pedagogical techniques first
INSERT INTO public.tecnicas_pedagogicas (nome, categoria, descricao) VALUES
('Onomatopeias', 'Alfabetização', 'Uso de sons que imitam a natureza ou objetos para facilitar a associação fonêmica.'),
('Leitura Guiada', 'Alfabetização', 'Prática de leitura acompanhada onde o professor/sistema orienta o foco do aluno.'),
('Resolução de Problemas', 'Metodologia', 'Foco em encontrar soluções para desafios práticos ou teóricos.'),
('Aprendizagem Cooperativa', 'Metodologia', 'Estratégia de ensino em que os alunos trabalham juntos para alcançar objetivos comuns.'),
('Revisão Espaçada', 'Neuroeducação', 'Técnica de aprendizagem que consiste em revisar o conteúdo em intervalos de tempo crescentes.'),
('Metacognição', 'Cognição', 'Pensar sobre o próprio processo de pensamento e aprendizagem.'),
('Aprendizagem por Descoberta', 'Metodologia', 'Método onde o aluno constrói conhecimento através da exploração e experimentação.'),
('Sala de Aula Invertida Adaptada', 'Metodologia', 'O aluno explora o conceito antes da formalização teórica.'),
('Pensamento Crítico', 'Cognição', 'Análise reflexiva e avaliação de informações para formar um julgamento.');

-- Relate BNCC codes to techniques in habilidade_tecnica
-- Note: Using a subquery to get IDs based on names for safety

-- EI03EF09 (Reconhecer letras)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EI03EF09', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Consciência Fonológica', 'Onomatopeias', 'Aprendizagem Lúdica', 'Vygotsky');

-- EF01LP05 (Reconhecimento de sílabas)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF01LP05', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Método Fônico', 'Consciência Fonológica', 'Neuroeducação', 'Vygotsky');

-- EF01LP06 (Formação de palavras)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF01LP06', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Método Fônico', 'Multissensorial');

-- EF01LP07 (Leitura)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF01LP07', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Método Fônico', 'Leitura Guiada');

-- EF01MA05 (Adição)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF01MA05', id FROM public.tecnicas_pedagogicas WHERE nome IN ('CRA', 'Neuroeducação');

-- EF03MA06 (Multiplicação)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF03MA06', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Resolução de Problemas', 'Vygotsky', 'Aprendizagem Cooperativa', 'Gamificação', 'Revisão Espaçada');

-- EF07CI08 (Ecossistemas)
INSERT INTO public.habilidade_tecnica (codigo_bncc, tecnica_id) 
SELECT 'EF07CI08', id FROM public.tecnicas_pedagogicas WHERE nome IN ('Metacognição', 'Aprendizagem por Descoberta', 'Sala de Aula Invertida Adaptada', 'Resolução de Problemas', 'Pensamento Crítico');