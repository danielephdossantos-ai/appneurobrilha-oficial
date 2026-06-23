
ALTER TABLE public.rb_paginas_aula DROP CONSTRAINT IF EXISTS rb_paginas_aula_tipo_check;
ALTER TABLE public.rb_paginas_aula ADD CONSTRAINT rb_paginas_aula_tipo_check
CHECK (tipo IN (
  'o_que_e','objetivo','explicacao','demonstracao','pratica_guiada',
  'dicas_familia','avaliacao','proximos_passos',
  'exemplo','exercicio','dica','video','imagem','passo_a_passo'
));
