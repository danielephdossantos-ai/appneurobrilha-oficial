INSERT INTO public.pedagogical_activities_base (
  titulo, materia, serie, faixa_etaria, habilidade_bncc, nivel_dificuldade, 
  objetivo_pedagogico, estrategia_pedagogica, variacoes, reforco_positivo, reforco_erro
) VALUES 
(
  'Alfabetização: Fábrica de Sílabas', 'portugues', '1º Ano', '6 anos', 'EF01LP06', 'simples',
  'Aprender a formar sílabas simples (consoante + vogal) com apoio visual.',
  'Olha a letra B! Se juntarmos com a vogal A, temos o BA. O que começa com BA?',
  '[{"type": "visual_match", "enunciado": "B + A faz qual pedacinho?", "options": ["BE", "BA", "BO"], "answer": "BA"}]',
  'Genial! Você montou o pedacinho da palavra!', 'Tente ouvir o som do B com o A de novo.'
),
(
  'Leitura Inicial: Detetive de Palavras', 'portugues', '1º Ano', '6 anos', 'EF01LP02', 'simples',
  'Relacionar palavras escritas curtas às suas representações visuais.',
  'Leia a palavra com calma: G-A-T-O. Qual bicho é esse?',
  '[{"type": "visual_match", "enunciado": "Onde está o GATO?", "options": ["🐶", "🐱", "🐭"], "answer": "🐱"}]',
  'Leitura perfeita! Você é um mestre!', 'Siga as letrinhas com o dedo para ler melhor.'
),
(
  'Escrita: Trem das Letras', 'portugues', '1º Ano', '6 anos', 'EF01LP10', 'simples',
  'Completar a sequência alfabética e identificar letras faltantes.',
  'O trem das letras está passando! Qual letra vem depois do A?',
  '[{"type": "visual_match", "enunciado": "A, ..., C. Qual letra falta?", "options": ["E", "B", "D"], "answer": "B"}]',
  'O trem seguiu viagem com a letra certa!', 'Pense na música do ABC para lembrar.'
),
(
  'Matemática: Pequenos Somadores', 'matematica', '1º Ano', '6 anos', 'EF01MA06', 'simples',
  'Introduzir o conceito de adição simples usando objetos concretos (emojis).',
  'Se você tem 2 maçãs e ganha mais 1, com quantas fica no total?',
  '[{"type": "visual_match", "enunciado": "🍎🍎 + 🍎 = ?", "options": ["2", "3", "4"], "answer": "3"}]',
  'Soma incrível! Você é um gênio da matemática!', 'Conte todas as maçãs juntas agora.'
),
(
  'Matemática: Maior ou Menor?', 'matematica', '1º Ano', '6 anos', 'EF01MA03', 'simples',
  'Comparar quantidades e identificar o grupo com mais elementos.',
  'Olha estes dois grupos de estrelas! Qual deles tem MAIS estrelas?',
  '[{"type": "visual_match", "enunciado": "Onde tem MAIS estrelas?", "options": ["⭐", "⭐⭐⭐", "⭐⭐"], "answer": "⭐⭐⭐"}]',
  'Olhar atento! Você acertou a quantidade!', 'Conte devagar para ver qual grupo é maior.'
);