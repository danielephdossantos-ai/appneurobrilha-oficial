INSERT INTO public.pedagogical_activities_base (
  titulo, materia, serie, faixa_etaria, habilidade_bncc, nivel_dificuldade, 
  objetivo_pedagogico, estrategia_pedagogica, variacoes, reforco_positivo, reforco_erro
) VALUES 
(
  'Alfabetização: Separando Pedacinhos', 'portugues', '1º Ano', '6 anos', 'EF01LP06', 'simples',
  'Desenvolver a consciência fonológica através da segmentação de palavras em sílabas.',
  'Bata palmas para cada pedacinho da palavra BONECA! Bo-ne-ca. Quantas vezes você bateu palmas?',
  '[{"type": "visual_match", "enunciado": "Quantas sílabas (pedacinhos) tem a palavra BONECA?", "options": ["1", "2", "3"], "answer": "3"}]',
  'Ritmo perfeito! Você separou tudo certinho!', 'Vamos falar a palavra devagar de novo?'
),
(
  'Leitura Inicial: Frases Amigas', 'portugues', '1º Ano', '6 anos', 'EF01LP16', 'simples',
  'Iniciar a leitura de frases curtas com apoio de imagem para contexto.',
  'Leia com o professor: O GATO CAIU. O que aconteceu com o gatinho?',
  '[{"type": "visual_match", "enunciado": "Escolha a imagem que combina com: O GATO CAIU", "options": ["🐱⬇️", "🐱🍎", "🐱🏠"], "answer": "🐱⬇️"}]',
  'Leitura brilhante! Você entendeu a mensagem!', 'Olhe para cada palavrinha e tente ler de novo.'
),
(
  'Escrita: Mestre das Letras', 'portugues', '1º Ano', '6 anos', 'EF01LP02', 'simples',
  'Praticar a escrita de palavras completando letras faltantes em nomes de objetos.',
  'Olha a BOLA! Está faltando uma letrinha... B_LA. Qual letra completa o nome?',
  '[{"type": "visual_match", "enunciado": "Qual letra completa a palavra B_LA?", "options": ["E", "O", "I"], "answer": "O"}]',
  'Palavra completa! Você escreve muito bem!', 'Diga o nome do objeto em voz alta para ouvir o som que falta.'
),
(
  'Matemática: Caminho dos Números', 'matematica', '1º Ano', '6 anos', 'EF01MA05', 'simples',
  'Identificar e completar sequências numéricas de 1 a 10.',
  'O caracol está subindo a escada! 1, 2, 3... qual número vem agora?',
  '[{"type": "visual_match", "enunciado": "1, 2, 3, ... Qual o próximo número?", "options": ["4", "5", "6"], "answer": "4"}]',
  'Sequência perfeita! Você conhece todos os números!', 'Conte os números na ordem para encontrar o próximo.'
),
(
  'Matemática: Desafio das Estrelas', 'matematica', '1º Ano', '6 anos', 'EF01MA06', 'intermediario',
  'Resolver problemas simples de adição com suporte visual de elementos lúdicos.',
  'No céu brilham 3 estrelas. Depois apareceram mais 2. Quantas estrelas temos agora?',
  '[{"type": "visual_match", "enunciado": "⭐⭐⭐ + ⭐⭐ = ?", "options": ["4", "5", "6"], "answer": "5"}]',
  'Cálculo estelar! Você é um campeão!', 'Conte todas as estrelinhas juntas para saber o total.'
);