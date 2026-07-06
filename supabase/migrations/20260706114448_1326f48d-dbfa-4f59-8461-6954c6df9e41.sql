INSERT INTO public.bncc_habilidades (codigo_bncc, titulo, ano, disciplina) VALUES
('EI03EO08', 'Reconhecer e nomear diferentes emoções em si e nos outros, desenvolvendo autocontrole e empatia.', 'Educação Infantil', 'O Eu, o Outro e o Nós'),
('EI03EO09', 'Participar ativamente de grupos e brincadeiras coletivas, cooperando com colegas.', 'Educação Infantil', 'O Eu, o Outro e o Nós'),
('EI03EO10', 'Integrar aprendizados sobre emoções, cooperação e atitudes sociais em situações do cotidiano.', 'Educação Infantil', 'O Eu, o Outro e o Nós')
ON CONFLICT (codigo_bncc) DO NOTHING;