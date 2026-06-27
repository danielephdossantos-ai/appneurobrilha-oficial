
INSERT INTO public.pedagogical_templates
  (slug, name, disciplina, serie, metodo, sequencia_didatica, exemplos, erros_comuns, pratica_guiada, exercicios, desafio, revisao, avaliacao, tags)
VALUES
('ar-artes-visuais', 'Arte — Artes Visuais (cor, forma, composição)', 'Arte', '6º-9º', 'criação',
 $$[
   {"step":"Motivação","detail":"Por que algumas imagens nos emocionam mais que outras?"},
   {"step":"Observação","detail":"Comparar duas obras: uma com cores quentes, outra com cores frias."},
   {"step":"Explicação","detail":"Elementos da linguagem visual: ponto, linha, forma, cor, textura, espaço. Cores primárias geram secundárias. Composição organiza o olhar."},
   {"step":"Exemplo resolvido","detail":"Van Gogh em Noite Estrelada: linhas em espiral + azul + amarelo intenso = movimento e emoção."},
   {"step":"Prática guiada","detail":"Classificar obras por elemento visual dominante."},
   {"step":"Treino","detail":"3 imagens — identificar cor predominante e clima emocional."},
   {"step":"Desafio","detail":"Como uma obra abstrata pode comunicar sem mostrar objetos reais?"},
   {"step":"Resumo","detail":"Arte visual usa elementos para expressar ideias e sentimentos."},
   {"step":"Domínio","detail":"Analisar uma imagem usando vocabulário próprio das artes."}
 ]$$::jsonb,
 $$[{"question":"Por que cores quentes (vermelho/laranja) costumam transmitir energia?","answer":"Porque associamos a fogo, sol e calor; o cérebro liga essas cores a vitalidade.","resolution":[{"line":"Identificar a cor."},{"line":"Associar a referências culturais (sol/fogo)."},{"line":"Concluir o efeito emocional."}]}]$$::jsonb,
 $$[{"erro":"Achar que arte só serve para decorar."},{"erro":"Confundir cor primária com cor preferida."}]$$::jsonb,
 $$[{"prompt":"Quais são as cores primárias?","hint":"Não se obtêm por mistura.","options":[{"text":"Vermelho, azul e amarelo.","reason":"Correto.","isCorrect":true},{"text":"Verde, laranja e roxo.","reason":"Essas são secundárias.","isCorrect":false},{"text":"Preto, branco e cinza.","reason":"Não são cores propriamente.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um elemento da linguagem visual.","answer":"Ponto, linha, forma, cor, textura ou espaço."}]$$::jsonb,
 $${"contexto":"Analise uma obra à sua escolha, identificando 3 elementos visuais e o sentimento que transmitem."}$$::jsonb,
 $$[{"ponto":"Elementos visuais constroem o significado."},{"ponto":"Cor influencia emoção."},{"ponto":"Composição organiza o olhar."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['arte','visuais','cor','composicao']),

('ar-musica', 'Arte — Música (ritmo, melodia, gêneros)', 'Arte', '6º-9º', 'escuta-criação',
 $$[
   {"step":"Motivação","detail":"Por que algumas músicas grudam na cabeça?"},
   {"step":"Observação","detail":"Ouvir um trecho de samba e um de rock. O que muda?"},
   {"step":"Explicação","detail":"Elementos: melodia (sequência de notas), harmonia (notas juntas), ritmo (pulsação), timbre (cor do som). Cada gênero combina elementos de forma distinta."},
   {"step":"Exemplo resolvido","detail":"Samba: ritmo sincopado em 2/4, bateria/cavaquinho/pandeiro definem o timbre típico."},
   {"step":"Prática guiada","detail":"Identificar gênero musical em trechos."},
   {"step":"Treino","detail":"Associar instrumento × gênero (berimbau→capoeira, cavaquinho→samba)."},
   {"step":"Desafio","detail":"O que une a música brasileira de regiões tão diferentes (forró, maracatu, MPB)?"},
   {"step":"Resumo","detail":"Música combina ritmo, melodia, harmonia e timbre para criar identidade."},
   {"step":"Domínio","detail":"Reconhecer e descrever um gênero musical."}
 ]$$::jsonb,
 $$[{"question":"Qual elemento define o pulso de uma música?","answer":"Ritmo.","resolution":[{"line":"Ritmo é a pulsação."},{"line":"Faz você bater o pé."},{"line":"Base que sustenta a música."}]}]$$::jsonb,
 $$[{"erro":"Confundir melodia com letra."},{"erro":"Achar que música clássica é a única arte musical séria."}]$$::jsonb,
 $$[{"prompt":"O que é timbre?","hint":"A cor do som — diferencia instrumentos.","options":[{"text":"A qualidade que distingue dois instrumentos tocando a mesma nota.","reason":"Correto.","isCorrect":true},{"text":"O volume do som.","reason":"Esse é intensidade.","isCorrect":false},{"text":"A velocidade da música.","reason":"Esse é andamento.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um instrumento típico do samba.","answer":"Cavaquinho, pandeiro, surdo, tamborim."}]$$::jsonb,
 $${"contexto":"Escolha uma música que você gosta e descreva ritmo, melodia e instrumentação."}$$::jsonb,
 $$[{"ponto":"Música = ritmo + melodia + harmonia + timbre."},{"ponto":"Cada gênero tem identidade."},{"ponto":"Brasil tem riqueza musical regional."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['arte','musica','ritmo','generos']),

('ar-danca-corpo', 'Arte — Dança e Expressão Corporal', 'Arte', '6º-9º', 'experimentação',
 $$[
   {"step":"Motivação","detail":"O que o corpo pode contar sem palavras?"},
   {"step":"Observação","detail":"Vídeos curtos: balé, hip hop, frevo, jongo."},
   {"step":"Explicação","detail":"Dança organiza movimento no espaço e no tempo. Elementos: corpo, espaço, tempo, peso, fluxo. Cada estilo expressa uma cultura."},
   {"step":"Exemplo resolvido","detail":"Frevo: passos rápidos, sombrinha, energia alta, origem em Pernambuco."},
   {"step":"Prática guiada","detail":"Associar dança × região/cultura."},
   {"step":"Treino","detail":"Identificar elemento (espaço, tempo, peso) em descrições."},
   {"step":"Desafio","detail":"Como a dança vira forma de resistência cultural (jongo, hip hop)?"},
   {"step":"Resumo","detail":"Dança é corpo + cultura; cada estilo conta uma história."},
   {"step":"Domínio","detail":"Apreciar dança como expressão e patrimônio."}
 ]$$::jsonb,
 $$[{"question":"De onde vem o frevo?","answer":"Pernambuco.","resolution":[{"line":"Surge no carnaval do Recife."},{"line":"Mistura passos de capoeira e marcha."},{"line":"Patrimônio Cultural da Humanidade pela UNESCO."}]}]$$::jsonb,
 $$[{"erro":"Achar que só há um jeito correto de dançar."},{"erro":"Confundir dança com exercício físico."}]$$::jsonb,
 $$[{"prompt":"Qual é um elemento da dança?","hint":"Não é só passo.","options":[{"text":"Espaço, tempo, peso e fluxo.","reason":"Correto.","isCorrect":true},{"text":"Letra e refrão.","reason":"Esses são da música.","isCorrect":false},{"text":"Cor e textura.","reason":"Esses são das artes visuais.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma dança popular brasileira.","answer":"Frevo, samba, forró, maracatu, jongo, axé."}]$$::jsonb,
 $${"contexto":"Descreva uma dança regional do Brasil, sua origem e o que ela comunica."}$$::jsonb,
 $$[{"ponto":"Corpo conta histórias."},{"ponto":"Cada cultura tem dança própria."},{"ponto":"Dança preserva e transforma identidade."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['arte','danca','corpo','cultura']),

('ar-teatro', 'Arte — Teatro e Linguagem Cênica', 'Arte', '6º-9º', 'experimentação',
 $$[
   {"step":"Motivação","detail":"Por que assistimos peças e séries com tanto envolvimento?"},
   {"step":"Observação","detail":"Cena curta: como ator, espaço, iluminação e figurino criam o universo."},
   {"step":"Explicação","detail":"Teatro = ator + público + espaço. Elementos: personagem, cenário, figurino, iluminação, texto. Gêneros: drama, comédia, tragédia."},
   {"step":"Exemplo resolvido","detail":"Em Romeu e Julieta, conflito entre famílias gera tragédia — texto + atuação + cenário comunicam emoção."},
   {"step":"Prática guiada","detail":"Identificar gênero teatral (drama, comédia, tragédia)."},
   {"step":"Treino","detail":"Reconhecer elementos cênicos em uma descrição de cena."},
   {"step":"Desafio","detail":"Por que o teatro continua importante mesmo com cinema e streaming?"},
   {"step":"Resumo","detail":"Teatro é ao vivo, presencial e único a cada apresentação."},
   {"step":"Domínio","detail":"Apreciar teatro como linguagem viva."}
 ]$$::jsonb,
 $$[{"question":"O que diferencia o teatro do cinema?","answer":"O teatro é presencial e ao vivo; cada apresentação é única.","resolution":[{"line":"Cinema é gravado e reproduzido igual."},{"line":"Teatro acontece ali, naquele momento."},{"line":"Ator e público compartilham o mesmo espaço."}]}]$$::jsonb,
 $$[{"erro":"Achar que teatro é só decorar texto."},{"erro":"Confundir tragédia com comédia."}]$$::jsonb,
 $$[{"prompt":"Qual destes é elemento cênico?","hint":"Compõe a cena.","options":[{"text":"Figurino.","reason":"Correto.","isCorrect":true},{"text":"Acorde.","reason":"Esse é da música.","isCorrect":false},{"text":"Coreografia.","reason":"Essa é da dança.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um gênero teatral.","answer":"Drama, comédia, tragédia, musical."}]$$::jsonb,
 $${"contexto":"Imagine uma cena curta. Descreva personagem, conflito e desfecho."}$$::jsonb,
 $$[{"ponto":"Teatro = ator + público + espaço."},{"ponto":"Elementos cênicos constroem o universo."},{"ponto":"Ao vivo é único e irrepetível."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['arte','teatro','cena','dramaturgia']);


-- Mapeia todos os códigos BNCC de Arte (6º–9º) ao template mais específico
DELETE FROM public.bncc_template_map m
USING public.bncc_biblioteca b
WHERE m.bncc_code = b.codigo
  AND b.ano BETWEEN 6 AND 9
  AND b.componente = 'Arte';

WITH base AS (
  SELECT b.codigo, lower(b.habilidade || ' ' || coalesce(b.unidade_tematica,'') || ' ' || coalesce(b.objeto_conhecimento,'')) AS texto
  FROM public.bncc_biblioteca b
  WHERE b.ano BETWEEN 6 AND 9 AND b.componente = 'Arte'
),
scored AS (
  SELECT codigo,
    CASE
      WHEN texto ~ '(music|son|ritmo|melodi|harmoni|instrument|cantar|composic.o musical)' THEN 'ar-musica'
      WHEN texto ~ '(danc|coreograf|movimento corpor|expressao corpor)' THEN 'ar-danca-corpo'
      WHEN texto ~ '(teatr|cen|drama|encena|personagem|dramaturg)' THEN 'ar-teatro'
      ELSE 'ar-artes-visuais'
    END AS slug
  FROM base
)
INSERT INTO public.bncc_template_map (bncc_code, template_id, priority)
SELECT s.codigo, t.id, 1
FROM scored s JOIN public.pedagogical_templates t ON t.slug = s.slug
ON CONFLICT (bncc_code, template_id) DO NOTHING;

-- Limpa o cache para reconstrução com o novo template
DELETE FROM public.pedagogical_lessons_cache c
USING public.bncc_biblioteca b
WHERE c.bncc_code = b.codigo
  AND b.ano BETWEEN 6 AND 9
  AND b.componente = 'Arte';
