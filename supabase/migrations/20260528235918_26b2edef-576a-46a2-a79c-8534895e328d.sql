INSERT INTO public.pedagogical_activities_base (
  titulo, materia, serie, faixa_etaria, habilidade_bncc, nivel_dificuldade, 
  objetivo_pedagogico, estrategia_pedagogica, variacoes, reforco_positivo, reforco_erro
) VALUES 
(
  'Aventuras com Números: Contagem 1 a 10', 'matematica', 'Educação Infantil', '4-5 anos', 'EI03ET07', 'simples',
  'Aprender a relacionar números com quantidades reais usando elementos do dia a dia.',
  'Mostre imagens de frutas e peça para a criança contar quantas maçãs ela vê.',
  '[{"enunciado": "Quantas estrelas brilham no céu?", "options": ["3", "5", "10"], "answer": "5"}]',
  'Incrível! Você é um mestre da contagem!', 'Quase lá! Vamos contar de novo juntos?'
),
(
  'Detetive das Letras: Sílabas Simples', 'portugues', '1º Ano', '6 anos', 'EF01LP02', 'simples',
  'Identificar e formar sílabas simples para construção de palavras básicas.',
  'Junte o som do B com o A para formar BA. O que começa com BA? Bala!',
  '[{"enunciado": "Qual dessas palavras começa com BA?", "options": ["BOLA", "BALA", "BOLO"], "answer": "BALA"}]',
  'Você está lendo como um super-herói!', 'Tente ouvir o som da primeira letrinha de novo.'
),
(
  'Mestre da Tabuada: O Poder do 2', 'matematica', '2º Ano', '7 anos', 'EF02MA01', 'intermediario',
  'Compreender o conceito de dobro e a tabuada do 2.',
  'Multiplicar por 2 é o mesmo que somar o número com ele mesmo.',
  '[{"enunciado": "Se você tem 2 pacotes com 4 figurinhas cada, quantas figurinhas tem no total?", "options": ["6", "8", "10"], "answer": "8"}]',
  'Multiplicação dominada! Você brilha muito!', 'Lembre-se: 2 vezes 4 é o mesmo que 4 + 4.'
),
(
  'Exploradores do Texto: Ideia Central', 'portugues', '3º Ano', '8 anos', 'EF03LP01', 'intermediario',
  'Desenvolver a capacidade de identificar o tema principal de um texto curto.',
  'Leia o pequeno texto sobre o sol e diga qual a informação mais importante.',
  '[{"enunciado": "O sol é uma estrela que nos dá calor. Qual o assunto principal?", "options": ["As estrelas", "O calor do sol", "A noite"], "answer": "O calor do sol"}]',
  'Excelente interpretação! Você entende tudo!', 'O que o texto mais falou? Tente ler de novo.'
),
(
  'Desafio das Frações: Partes do Todo', 'matematica', '5º Ano', '10 anos', 'EF05MA07', 'complexo',
  'Introduzir o conceito de frações usando representações visuais (pizzas/barras).',
  'Imagine uma pizza cortada em 4 fatias. Se comermos 1, qual a fração restante?',
  '[{"enunciado": "Como escrevemos um quarto em números?", "options": ["1/2", "1/4", "4/1"], "answer": "1/4"}]',
  'Você domina as partes do todo! Sensacional!', 'A fração mostra em quantas partes dividimos.'
),
(
  'Crítico de Notícias: Fato vs Opinião', 'portugues', '9º Ano', '14 anos', 'EF09LP03', 'complexo',
  'Diferenciar fatos de opiniões em textos jornalísticos complexos.',
  'Analise a frase e decida se ela é algo que aconteceu ou o que alguém pensa.',
  '[{"enunciado": "O jogo terminou 2x0. Isso é:", "options": ["Fato", "Opinião"], "answer": "Fato"}]',
  'Análise crítica perfeita! Você pensa como um jornalista.', 'Um fato pode ser provado, uma opinião é um sentimento.'
);