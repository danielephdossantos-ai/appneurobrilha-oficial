
WITH mapa(codigo, unidade, objeto, ordem) AS (VALUES
  ('EF02MA01', 'Números', 'Leitura, escrita, comparação e ordenação de números de até três ordens pela compreensão de características do sistema de numeração decimal (valor posicional e função do zero)', 1),
  ('EF02MA02', 'Números', 'Composição e decomposição de números naturais (até 1000)', 2),
  ('EF02MA03', 'Números', 'Composição e decomposição de números naturais (até 1000)', 3),
  ('EF02MA04', 'Números', 'Composição e decomposição de números naturais (até 1000)', 4),
  ('EF02MA05', 'Números', 'Construção de fatos fundamentais da adição e da subtração', 5),
  ('EF02MA06', 'Números', 'Problemas envolvendo adição e subtração: significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades', 6),
  ('EF02MA07', 'Números', 'Problemas envolvendo adição de parcelas iguais (multiplicação)', 7),
  ('EF02MA08', 'Números', 'Problemas envolvendo significados de dobro, metade, triplo e terça parte', 8),
  ('EF02MA09', 'Álgebra', 'Construção de sequências repetitivas e de sequências recursivas', 9),
  ('EF02MA10', 'Álgebra', 'Identificação de regularidade de sequências e determinação de elementos ausentes na sequência', 10),
  ('EF02MA11', 'Álgebra', 'Identificação de regularidade de sequências e determinação de elementos ausentes na sequência', 11),
  ('EF02MA12', 'Geometria', 'Localização e movimentação de pessoas e objetos no espaço, segundo pontos de referência, e indicação de mudanças de direção e sentido; Esboço de roteiros e de plantas simples', 12),
  ('EF02MA13', 'Geometria', 'Localização e movimentação de pessoas e objetos no espaço, segundo pontos de referência, e indicação de mudanças de direção e sentido; Esboço de roteiros e de plantas simples', 13),
  ('EF02MA14', 'Geometria', 'Figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera): reconhecimento e características', 14),
  ('EF02MA15', 'Geometria', 'Figuras geométricas planas (círculo, quadrado, retângulo e triângulo): reconhecimento e características', 15),
  ('EF02MA16', 'Grandezas e Medidas', 'Medida de comprimento: unidades não padronizadas e padronizadas (metro, centímetro e milímetro)', 16),
  ('EF02MA17', 'Grandezas e Medidas', 'Medida de capacidade e de massa: unidades de medida não convencionais e convencionais (litro, mililitro, cm3, grama e quilograma)', 17),
  ('EF02MA18', 'Grandezas e Medidas', 'Medidas de tempo: intervalo de tempo, uso do calendário, leitura de horas em relógios digitais e ordenação de datas', 18),
  ('EF02MA19', 'Grandezas e Medidas', 'Medidas de tempo: intervalo de tempo, uso do calendário, leitura de horas em relógios digitais e ordenação de datas', 19),
  ('EF02MA20', 'Grandezas e Medidas', 'Sistema monetário brasileiro: reconhecimento de cédulas e moedas e equivalência de valores', 20),
  ('EF02MA21', 'Probabilidade e Estatística', 'Análise da ideia de aleatório em situações do cotidiano', 21),
  ('EF02MA22', 'Probabilidade e Estatística', 'Coleta, classificação e representação de dados em tabelas simples e de dupla entrada e em gráficos de colunas', 22),
  ('EF02MA23', 'Probabilidade e Estatística', 'Coleta, classificação e representação de dados em tabelas simples e de dupla entrada e em gráficos de colunas', 23)
)
UPDATE public.bncc_habilidades h
SET unidade_tematica = m.unidade,
    objeto_conhecimento = m.objeto,
    ordem = m.ordem,
    updated_at = now()
FROM mapa m
WHERE h.codigo_bncc = m.codigo;

INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc, origem)
SELECT h2.codigo_bncc, h1.codigo_bncc, 'auto-mesma-unidade'
FROM public.bncc_habilidades h1
JOIN public.bncc_habilidades h2
  ON h1.ano = h2.ano
 AND h1.disciplina = h2.disciplina
 AND h1.unidade_tematica = h2.unidade_tematica
 AND h1.ordem = h2.ordem - 1
WHERE h1.ano = '2º Ano'
  AND h1.disciplina ILIKE 'matem%'
  AND h1.unidade_tematica IS NOT NULL
ON CONFLICT (codigo_bncc, requer_codigo_bncc) DO NOTHING;
