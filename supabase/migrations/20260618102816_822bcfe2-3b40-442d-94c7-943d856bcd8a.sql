
-- Vogal A: trocar 'apple' por 'pineapple' (Abacaxi) e alinhar palavra
UPDATE public.aulas_bncc
SET payload = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(payload, '{steps,1,illustration}', '"pineapple"'),
      '{steps,1,word}', '"ABACAXI"'
    ),
    '{steps,1,word2}', '"ABELHA"'
  ),
  '{steps,1,speech}', '"Olha! ABACAXI começa com A. ABELHA também começa com A!"'
)
WHERE payload->>'id' = 'vogal-a';

-- Vogal O: trocar 'balloon' por 'sheep' (Ovelha)
UPDATE public.aulas_bncc
SET payload = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(payload, '{steps,1,illustration}', '"sheep"'),
      '{steps,1,word}', '"OVELHA"'
    ),
    '{steps,1,word2}', '"OVO"'
  ),
  '{steps,1,speech}', '"Olha! OVELHA começa com O. OVO também começa com O!"'
)
WHERE payload->>'id' = 'vogal-o';
