-- Inserindo atividades do 1º Ano no Banco Pedagógico
INSERT INTO public.pedagogical_activities_base (
    titulo, 
    materia, 
    serie, 
    faixa_etaria, 
    habilidade_bncc, 
    nivel_dificuldade, 
    objetivo_pedagogico, 
    estrategia_pedagogica,
    reforco_positivo,
    reforco_erro,
    tags,
    variacoes
) VALUES 
(
    'Festa das Letras', 
    'Português', 
    '1º Ano', 
    '6 anos', 
    'EF01LP02', 
    'simples', 
    'Reconhecer letras do alfabeto e associar sons', 
    'Apresentar letras grandes com apoio de imagens (ex: A de Abelha)',
    'Você é um mestre das letras!',
    'Tente novamente! Olhe bem para o desenho.',
    ARRAY['alfabetizacao', 'letras', 'visual'],
    '[
        {"enunciado": "Qual dessas é a letra A?", "options": ["A", "B", "C"], "answer": "A", "type": "visual_match"},
        {"enunciado": "Com qual letra começa BOLA?", "options": ["B", "P", "D"], "answer": "B", "type": "visual_match"}
    ]'::jsonb
),
(
    'Mestre das Sílabas', 
    'Português', 
    '1º Ano', 
    '6 anos', 
    'EF01LP06', 
    'intermediario', 
    'Formar sílabas simples e compor palavras', 
    'Unir consoantes e vogais para formar sons',
    'Incrível! Você montou a palavra certinho!',
    'Quase lá! Vamos juntar os pedacinhos de novo?',
    ARRAY['alfabetizacao', 'silabas'],
    '[
        {"enunciado": "B + O forma qual som?", "options": ["BO", "BA", "BE"], "answer": "BO", "type": "visual_match"},
        {"enunciado": "Complete: CA + ___ = CASA", "options": ["SA", "MA", "LA"], "answer": "SA", "type": "visual_match"}
    ]'::jsonb
),
(
    'Pequenos Matemáticos', 
    'Matemática', 
    '1º Ano', 
    '6 anos', 
    'EF01MA01', 
    'simples', 
    'Contar e comparar quantidades até 10', 
    'Uso de emojis e elementos visuais para contagem',
    'Matemática é o seu superpoder!',
    'Conte devagarzinho cada estrela.',
    ARRAY['matematica', 'contagem'],
    '[
        {"enunciado": "Quantas estrelas você vê? ⭐⭐⭐", "options": ["2", "3", "4"], "answer": "3", "type": "visual_match"},
        {"enunciado": "Qual número vem depois do 4?", "options": ["3", "5", "6"], "answer": "5", "type": "visual_match"}
    ]'::jsonb
),
(
    'Desafio da Soma Brilhante', 
    'Matemática', 
    '1º Ano', 
    '6 anos', 
    'EF01MA06', 
    'intermediario', 
    'Resolver adições simples com apoio visual', 
    'Somar quantidades usando ícones coloridos',
    'Você brilha muito nos cálculos!',
    'Vamos contar todas juntas agora?',
    ARRAY['matematica', 'soma'],
    '[
        {"enunciado": "🍎 + 🍎🍎 = ?", "options": ["2", "3", "4"], "answer": "3", "type": "visual_match"},
        {"enunciado": "2 + 2 é igual a:", "options": ["3", "4", "5"], "answer": "4", "type": "visual_match"}
    ]'::jsonb
);
