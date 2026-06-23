
GRANT SELECT ON public.rb_aulas TO anon, authenticated;
GRANT SELECT ON public.rb_paginas_aula TO anon, authenticated;
GRANT SELECT ON public.rb_habilidade_prerequisitos TO anon, authenticated;
GRANT SELECT ON public.rb_habilidade_relacionadas TO anon, authenticated;
GRANT SELECT ON public.rb_aulas_premium_status TO anon, authenticated;

GRANT ALL ON public.rb_aulas TO service_role;
GRANT ALL ON public.rb_paginas_aula TO service_role;
