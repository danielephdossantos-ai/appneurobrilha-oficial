
-- Fase 1.1: Matemática 1º Ano — Unidade Temática + Objeto de Conhecimento (BNCC oficial)

WITH mapa(codigo, unidade, objeto, ordem) AS (VALUES
  ('EF01MA01', 'Números', 'Contagem de rotina; contagem ascendente e descendente; reconhecimento de números no contexto diário: indicação de quantidades, indicação de ordem ou indicação de código para a organização de informações', 1),
  ('EF01MA02', 'Números', 'Quantificação de elementos de uma coleção: estimativas, contagem um a um, pareamento ou outros agrupamentos e comparação', 2),
  ('EF01MA03', 'Números', 'Quantificação de elementos de uma coleção: estimativas, contagem um a um, pareamento ou outros agrupamentos e comparação', 3),
  ('EF01MA04', 'Números', 'Leitura, escrita e comparação de números naturais (até 100); reta numérica', 4),
  ('EF01MA05', 'Números', 'Leitura, escrita e comparação de números naturais (até 100); reta numérica', 5),
  ('EF01MA06', 'Números', 'Construção de fatos básicos da adição', 6),
  ('EF01MA07', 'Números', 'Composição e decomposição de números naturais', 7),
  ('EF01MA08', 'Números', 'Problemas envolvendo diferentes significados da adição e da subtração (juntar, acrescentar, separar, retirar)', 8),
  ('EF01MA09', 'Álgebra', 'Padrões figurais e numéricos: investigação de regularidades ou padrões em sequências', 9),
  ('EF01MA10', 'Álgebra', 'Sequências recursivas: observação de regras usadas utilizadas em seriações numéricas (mais 1, mais 2, menos 1, menos 2, por exemplo)', 10),
  ('EF01MA11', 'Geometria', 'Localização de objetos e de pessoas no espaço, utilizando diversos pontos de referência e vocabulário apropriado', 11),
  ('EF01MA12', 'Geometria', 'Localização de objetos e de pessoas no espaço, utilizando diversos pontos de referência e vocabulário apropriado', 12),
  ('EF01MA13', 'Geometria', 'Figuras geométricas espaciais: reconhecimento e relações com objetos familiares do mundo físico', 13),
  ('EF01MA14', 'Geometria', 'Figuras geométricas planas: reconhecimento do formato das faces de figuras geométricas espaciais', 14),
  ('EF01MA15', 'Grandezas e Medidas', 'Medidas de comprimento, massa e capacidade: comparações e unidades de medida não convencionais', 15),
  ('EF01MA16', 'Grandezas e Medidas', 'Medidas de tempo: unidades de medida de tempo, suas relações e o uso do calendário', 16),
  ('EF01MA17', 'Grandezas e Medidas', 'Medidas de tempo: unidades de medida de tempo, suas relações e o uso do calendário', 17),
  ('EF01MA18', 'Grandezas e Medidas', 'Medidas de tempo: unidades de medida de tempo, suas relações e o uso do calendário', 18),
  ('EF01MA19', 'Grandezas e Medidas', 'Sistema monetário brasileiro: reconhecimento de cédulas e moedas', 19),
  ('EF01MA20', 'Probabilidade e Estatística', 'Noção de acaso', 20),
  ('EF01MA21', 'Probabilidade e Estatística', 'Leitura de tabelas e de gráficos de colunas simples', 21),
  ('EF01MA22', 'Probabilidade e Estatística', 'Coleta e organização de informações; Registros pessoais para comunicação de informações coletadas', 22)
)
UPDATE public.bncc_habilidades h
SET
  unidade_tematica = m.unidade,
  objeto_conhecimento = m.objeto,
  ordem = m.ordem,
  updated_at = now()
FROM mapa m
WHERE h.codigo_bncc = m.codigo;

-- Pré-requisitos: cada habilidade depende da anterior na MESMA unidade temática do MESMO ano
INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc, origem)
SELECT h2.codigo_bncc, h1.codigo_bncc, 'auto-mesma-unidade'
FROM public.bncc_habilidades h1
JOIN public.bncc_habilidades h2
  ON h1.ano = h2.ano
 AND h1.disciplina = h2.disciplina
 AND h1.unidade_tematica = h2.unidade_tematica
 AND h1.ordem = h2.ordem - 1
WHERE h1.ano = '1º Ano'
  AND h1.disciplina ILIKE 'matem%'
  AND h1.unidade_tematica IS NOT NULL
ON CONFLICT (codigo_bncc, requer_codigo_bncc) DO NOTHING;
