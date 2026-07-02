
-- Fase 1.3 — Matemática 3º Ano (EF03MA01..EF03MA28)
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Composição e decomposição de números naturais', ordem=1 WHERE codigo_bncc='EF03MA01';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Composição e decomposição de números naturais', ordem=2 WHERE codigo_bncc='EF03MA02';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Construção de fatos fundamentais da adição, subtração e multiplicação', ordem=3 WHERE codigo_bncc='EF03MA03';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Reta numérica', ordem=4 WHERE codigo_bncc='EF03MA04';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Procedimentos de cálculo (mental e escrito) com números naturais: adição e subtração', ordem=5 WHERE codigo_bncc='EF03MA05';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas envolvendo significados da adição e da subtração', ordem=6 WHERE codigo_bncc='EF03MA06';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas envolvendo diferentes significados da multiplicação e da divisão', ordem=7 WHERE codigo_bncc='EF03MA07';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas envolvendo diferentes significados da multiplicação e da divisão', ordem=8 WHERE codigo_bncc='EF03MA08';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Significados de metade, terça parte, quarta parte, quinta parte e décima parte', ordem=9 WHERE codigo_bncc='EF03MA09';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Identificação e descrição de regularidades em sequências numéricas recursivas', ordem=10 WHERE codigo_bncc='EF03MA10';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Relação de igualdade', ordem=11 WHERE codigo_bncc='EF03MA11';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Localização e movimentação: representação de objetos e pontos de referência', ordem=12 WHERE codigo_bncc='EF03MA12';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera): reconhecimento, análise de características e planificações', ordem=13 WHERE codigo_bncc='EF03MA13';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera): reconhecimento, análise de características e planificações', ordem=14 WHERE codigo_bncc='EF03MA14';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas planas (triângulo, quadrado, retângulo, trapézio e paralelogramo): reconhecimento e análise de características', ordem=15 WHERE codigo_bncc='EF03MA15';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Congruência de figuras geométricas planas', ordem=16 WHERE codigo_bncc='EF03MA16';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Significado de medida e de unidade de medida', ordem=17 WHERE codigo_bncc='EF03MA17';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Significado de medida e de unidade de medida', ordem=18 WHERE codigo_bncc='EF03MA18';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de comprimento (unidades não convencionais e convencionais): registro, instrumentos de medida, estimativas e comparações', ordem=19 WHERE codigo_bncc='EF03MA19';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de capacidade e de massa (unidades não convencionais e convencionais): registro, estimativas e comparações', ordem=20 WHERE codigo_bncc='EF03MA20';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Comparação de áreas por superposição', ordem=21 WHERE codigo_bncc='EF03MA21';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de tempo: leitura de horas em relógios digitais e analógicos, duração de eventos e reconhecimento de relações entre unidades de medida de tempo', ordem=22 WHERE codigo_bncc='EF03MA22';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de tempo: leitura de horas em relógios digitais e analógicos, duração de eventos e reconhecimento de relações entre unidades de medida de tempo', ordem=23 WHERE codigo_bncc='EF03MA23';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Sistema monetário brasileiro: estabelecimento de equivalências de um mesmo valor na utilização de diferentes cédulas e moedas', ordem=24 WHERE codigo_bncc='EF03MA24';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Análise da ideia de acaso em situações do cotidiano: espaço amostral', ordem=25 WHERE codigo_bncc='EF03MA25';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Leitura, interpretação e representação de dados em tabelas de dupla entrada e gráficos de barras', ordem=26 WHERE codigo_bncc='EF03MA26';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Leitura, interpretação e representação de dados em tabelas de dupla entrada e gráficos de barras', ordem=27 WHERE codigo_bncc='EF03MA27';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Coleta, classificação e representação de dados referentes a variáveis categóricas, por meio de tabelas e gráficos', ordem=28 WHERE codigo_bncc='EF03MA28';

-- Pré-requisitos automáticos: dentro do mesmo (ano, disciplina, unidade_tematica, objeto_conhecimento), cada ordem depende da anterior.
WITH seq AS (
  SELECT codigo_bncc,
         LAG(codigo_bncc) OVER (
           PARTITION BY ano, disciplina, unidade_tematica, objeto_conhecimento
           ORDER BY ordem
         ) AS prev_codigo
    FROM public.bncc_habilidades
   WHERE codigo_bncc LIKE 'EF03MA%'
)
INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc)
SELECT codigo_bncc, prev_codigo
  FROM seq
 WHERE prev_codigo IS NOT NULL
ON CONFLICT DO NOTHING;
