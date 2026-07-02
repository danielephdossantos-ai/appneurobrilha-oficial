
-- Fase 1.4 — Matemática 4º Ano
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Sistema de numeração decimal: leitura, escrita e ordenação de números naturais (até dezenas de milhar)', ordem=1 WHERE codigo_bncc='EF04MA01';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Composição e decomposição de um número natural de até cinco ordens, por meio de adições e multiplicações por potências de 10', ordem=2 WHERE codigo_bncc='EF04MA02';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais', ordem=3 WHERE codigo_bncc='EF04MA03';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais', ordem=4 WHERE codigo_bncc='EF04MA04';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais', ordem=5 WHERE codigo_bncc='EF04MA05';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas envolvendo diferentes significados da multiplicação e da divisão', ordem=6 WHERE codigo_bncc='EF04MA06';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas envolvendo diferentes significados da multiplicação e da divisão', ordem=7 WHERE codigo_bncc='EF04MA07';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Problemas de contagem', ordem=8 WHERE codigo_bncc='EF04MA08';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Números racionais: frações unitárias mais usuais (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100)', ordem=9 WHERE codigo_bncc='EF04MA09';
UPDATE public.bncc_habilidades SET unidade_tematica='Números', objeto_conhecimento='Números racionais: representação decimal para escrever valores do sistema monetário brasileiro', ordem=10 WHERE codigo_bncc='EF04MA10';

UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Sequência numérica recursiva formada por múltiplos de um número natural', ordem=11 WHERE codigo_bncc='EF04MA11';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Sequência numérica recursiva formada por números que deixam o mesmo resto ao serem divididos por um mesmo número natural diferente de zero', ordem=12 WHERE codigo_bncc='EF04MA12';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Relações entre adição e subtração e entre multiplicação e divisão', ordem=13 WHERE codigo_bncc='EF04MA13';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Propriedades da igualdade', ordem=14 WHERE codigo_bncc='EF04MA14';
UPDATE public.bncc_habilidades SET unidade_tematica='Álgebra', objeto_conhecimento='Propriedades da igualdade', ordem=15 WHERE codigo_bncc='EF04MA15';

UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Localização e movimentação: pontos de referência, direção e sentido. Paralelismo e perpendicularismo', ordem=16 WHERE codigo_bncc='EF04MA16';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Figuras geométricas espaciais (prismas e pirâmides): reconhecimento, representações, planificações e características', ordem=17 WHERE codigo_bncc='EF04MA17';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Ângulos retos e não retos: uso de dobraduras, esquadros e softwares', ordem=18 WHERE codigo_bncc='EF04MA18';
UPDATE public.bncc_habilidades SET unidade_tematica='Geometria', objeto_conhecimento='Simetria de reflexão', ordem=19 WHERE codigo_bncc='EF04MA19';

UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de comprimento, massa e capacidade: estimativas, utilização de instrumentos de medida e de unidades de medida convencionais mais usuais', ordem=20 WHERE codigo_bncc='EF04MA20';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Áreas de figuras construídas em malhas quadriculadas', ordem=21 WHERE codigo_bncc='EF04MA21';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de tempo: leitura de horas em relógios digitais e analógicos, duração de eventos e relações entre unidades de medida de tempo', ordem=22 WHERE codigo_bncc='EF04MA22';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de temperatura em grau Celsius: construção de gráficos para indicar a variação da temperatura medida em um dia ou em uma semana', ordem=23 WHERE codigo_bncc='EF04MA23';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Medidas de temperatura em grau Celsius: construção de gráficos para indicar a variação da temperatura medida em um dia ou em uma semana', ordem=24 WHERE codigo_bncc='EF04MA24';
UPDATE public.bncc_habilidades SET unidade_tematica='Grandezas e Medidas', objeto_conhecimento='Problemas utilizando o sistema monetário brasileiro', ordem=25 WHERE codigo_bncc='EF04MA25';

UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Análise de chances de eventos aleatórios', ordem=26 WHERE codigo_bncc='EF04MA26';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Leitura, interpretação e representação de dados em tabelas de dupla entrada, gráficos de colunas simples e agrupadas, gráficos de barras e colunas e gráficos pictóricos', ordem=27 WHERE codigo_bncc='EF04MA27';
UPDATE public.bncc_habilidades SET unidade_tematica='Probabilidade e Estatística', objeto_conhecimento='Diferenciação entre variáveis categóricas e variáveis numéricas. Coleta, classificação e representação de dados de pesquisa realizada', ordem=28 WHERE codigo_bncc='EF04MA28';

-- Pré-requisitos dentro do mesmo objeto de conhecimento
WITH seq AS (
  SELECT codigo_bncc,
         LAG(codigo_bncc) OVER (
           PARTITION BY ano, disciplina, unidade_tematica, objeto_conhecimento
           ORDER BY ordem
         ) AS prev_codigo
    FROM public.bncc_habilidades
   WHERE codigo_bncc LIKE 'EF04MA%'
)
INSERT INTO public.bncc_prerequisitos (codigo_bncc, requer_codigo_bncc)
SELECT codigo_bncc, prev_codigo FROM seq WHERE prev_codigo IS NOT NULL
ON CONFLICT DO NOTHING;
