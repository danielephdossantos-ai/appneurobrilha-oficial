
-- Fase 1.5 — Matemática 5º Ano
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Sistema de numeração decimal: leitura, escrita e ordenação de números naturais (até seis ordens)', ordem=1 WHERE codigo_bncc='EF05MA01';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Números racionais expressos na forma decimal e sua representação na reta numérica', ordem=2 WHERE codigo_bncc='EF05MA02';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Representação fracionária dos números racionais: reconhecimento, significados, leitura e representação na reta numérica', ordem=3 WHERE codigo_bncc='EF05MA03';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência', ordem=4 WHERE codigo_bncc='EF05MA04';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência', ordem=5 WHERE codigo_bncc='EF05MA05';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Cálculo de porcentagens e representação fracionária', ordem=6 WHERE codigo_bncc='EF05MA06';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas: adição e subtração de números naturais e números racionais cuja representação decimal é finita', ordem=7 WHERE codigo_bncc='EF05MA07';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais', ordem=8 WHERE codigo_bncc='EF05MA08';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas de contagem envolvendo o princípio multiplicativo', ordem=9 WHERE codigo_bncc='EF05MA09';

UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Propriedades da igualdade e noção de equivalência', ordem=10 WHERE codigo_bncc='EF05MA10';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Propriedades da igualdade e noção de equivalência', ordem=11 WHERE codigo_bncc='EF05MA11';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Grandezas diretamente proporcionais. Problemas envolvendo a partição de um todo em duas partes proporcionais', ordem=12 WHERE codigo_bncc='EF05MA12';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Grandezas diretamente proporcionais. Problemas envolvendo a partição de um todo em duas partes proporcionais', ordem=13 WHERE codigo_bncc='EF05MA13';

UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Plano cartesiano: coordenadas cartesianas (1º quadrante) e representação de deslocamentos no plano', ordem=14 WHERE codigo_bncc='EF05MA14';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Plano cartesiano: coordenadas cartesianas (1º quadrante) e representação de deslocamentos no plano', ordem=15 WHERE codigo_bncc='EF05MA15';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas espaciais: reconhecimento, representações, planificações e características', ordem=16 WHERE codigo_bncc='EF05MA16';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas planas: características, representações e ângulos', ordem=17 WHERE codigo_bncc='EF05MA17';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Ampliação e redução de figuras poligonais em malhas quadriculadas: reconhecimento da congruência dos ângulos e da proporcionalidade dos lados correspondentes', ordem=18 WHERE codigo_bncc='EF05MA18';

UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de comprimento, área, massa, tempo, temperatura e capacidade: utilização de unidades convencionais e relações entre as unidades de medida mais usuais', ordem=19 WHERE codigo_bncc='EF05MA19';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Áreas e perímetros de figuras poligonais: algumas relações', ordem=20 WHERE codigo_bncc='EF05MA20';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Noção de volume', ordem=21 WHERE codigo_bncc='EF05MA21';

UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Espaço amostral: análise de chances de eventos aleatórios', ordem=22 WHERE codigo_bncc='EF05MA22';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Cálculo de probabilidade de eventos equiprováveis', ordem=23 WHERE codigo_bncc='EF05MA23';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Leitura, coleta, classificação, interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas', ordem=24 WHERE codigo_bncc='EF05MA24';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Leitura, coleta, classificação, interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas', ordem=25 WHERE codigo_bncc='EF05MA25';

WITH seq AS (
  SELECT codigo_bncc,
         LAG(codigo_bncc) OVER (
           PARTITION BY ano, disciplina, unidade_tematica, objeto_conhecimento
           ORDER BY ordem
         ) AS prev_codigo
    FROM public.bncc_habilidades
   WHERE codigo_bncc LIKE 'EF05MA%'
)
INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc)
SELECT codigo_bncc, prev_codigo FROM seq WHERE prev_codigo IS NOT NULL
ON CONFLICT DO NOTHING;
