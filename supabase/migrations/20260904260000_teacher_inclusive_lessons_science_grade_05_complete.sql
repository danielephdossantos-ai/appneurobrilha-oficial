-- Biblioteca Inclusiva · Ciências do 5º ano completa.
WITH lessons(code,rel,title) AS (VALUES
('EF05CI01','unidade-4/aulas-bncc-materia-agua.ts','Propriedades físicas dos materiais'),
('EF05CI02','unidade-4/aulas-bncc-materia-agua.ts','Estados físicos e mudanças da água'),
('EF05CI03','unidade-4/aulas-bncc-materia-agua.ts','Ciclo da água'),
('EF05CI04','unidade-4/aulas-bncc-materia-agua.ts','Cobertura vegetal e ciclo da água'),
('EF05CI05','unidade-4/aula-02-consumo-consciente.ts','Consumo consciente e reciclagem'),
('EF05CI06','unidade-3/aula-01.ts','Sistema digestório e nutrição'),
('EF05CI07','unidade-3/aula-02-sistema-circulatorio.ts','Sistema circulatório'),
('EF05CI08','unidade-3/aula-03-cardapio-equilibrado.ts','Alimentação variada e contexto'),
('EF05CI09','unidade-3/aula-04-disturbios-nutricionais.ts','Saúde alimentar sem estigma'),
('EF05CI10','unidade-6/aulas-bncc-observacao-do-ceu.ts','Constelações e observação do céu'),
('EF05CI11','unidade-6/aulas-bncc-observacao-do-ceu.ts','Rotação da Terra e movimento aparente'),
('EF05CI12','unidade-6/aula-02-fases-da-lua.ts','Fases da Lua'),
('EF05CI13','unidade-6/aula-03-instrumentos-opticos.ts','Instrumentos ópticos')
), p AS (SELECT code,'src/escola-brilha/curso-v4/ciencias-5ano/'||rel source_key,title,'Investigar e explicar '||lower(title)||' com modelos, dados e linguagem científica adequada ao 5º ano.' goal FROM lessons)
INSERT INTO public.teacher_inclusive_lessons (source_lesson_key,source_version,codigo_bncc,title,school_stage,school_year,subject,knowledge_object,learning_goal,supported_profiles,teacher_pages,student_pages,answer_key,accessibility,source_fidelity_checked,pedagogical_reviewed,technical_reviewed,status,source_route)
SELECT source_key,'audit-2026-09-04',code,title,'fundamental_1','5º Ano','Ciências',title,goal,ARRAY['tea','tdah','dislexia','deficiencia_intelectual','comunicacao','motora_escrita'],
jsonb_build_array(jsonb_build_object('title','Guia investigativo — '||code,'purpose',goal,'sections',jsonb_build_array(
 jsonb_build_object('heading','Prepare e proteja','content',jsonb_build_array('Professor seleciona e demonstra materiais; não usar calor, substâncias desconhecidas, dissecação nem observação direta do Sol.','Instrumentos ópticos apontam apenas para alvos seguros e nunca para o Sol.')),
 jsonb_build_object('heading','Ensino por modelos','content',jsonb_build_array('Separe o que foi observado, o que o modelo representa e o que foi inferido.','Use tabelas, diagramas e setas para tornar relações sistêmicas visíveis.','Em alimentação e saúde, não pesar, comparar corpos, prescrever dieta ou atribuir culpa; encaminhar dúvidas clínicas à família e profissional.')),
 jsonb_build_object('heading','Rotina ajustável','content',jsonb_build_array('Dê uma instrução por vez, use pausa planejada e retomada clara.','Aceite resposta oral, apontada, diagramada, desenhada, fotografada, digitada ou escrita.','Retire pistas gradualmente sem reduzir o objetivo.')),
 jsonb_build_object('heading','Critério','content','Explica quatro de cinco situações usando dados, modelo ou relação causal pertinente.')))),
jsonb_build_array(jsonb_build_object('title','1. Prever e representar','instruction','Observe o problema e construa hipótese ou modelo inicial.','activity','Registre componentes e relações principais.','support','Imagem ampliada, glossário e diagrama parcialmente preenchido.'),jsonb_build_object('title','2. Analisar dados','instruction','Compare registros e diferencie observação de inferência.','activity','Complete tabela ou modelo de '||lower(title)||' e cite evidência.','support','Exemplo resolvido e redução gradual das pistas.'),jsonb_build_object('title','3. Explicar e aplicar','instruction','Use o modelo em nova situação e diga seus limites.','activity','Produza conclusão baseada nos dados e uma pergunta para investigação futura.','support','Resposta oral, apontada, diagramada, digitada ou escrita.')),
jsonb_build_array(jsonb_build_object('page',1,'answer','Modelo inicial coerente.'),jsonb_build_object('page',2,'answer','Análise com evidência.'),jsonb_build_object('page',3,'answer','Conclusão limitada aos dados e ao modelo.','teacher_note','Registre autonomia, apoio eficaz e próximo passo.')),
jsonb_build_object('response_modes',jsonb_build_array('oral','pointing','diagram','drawing','photo','typing','writing'),'routine','adjustable','one_instruction_at_a_time',true,'read_aloud',true,'large_text',true,'visual_schedule',true,'planned_pause',true,'low_distraction',true,'safety_screened',true,'adult_supervision',true,'body_neutral',true,'print','grayscale-safe'),true,true,true,'published','/escola-brilha/curso/ciencias-5ano' FROM p
ON CONFLICT (source_lesson_key,codigo_bncc) DO UPDATE SET source_version=EXCLUDED.source_version,title=EXCLUDED.title,school_year=EXCLUDED.school_year,knowledge_object=EXCLUDED.knowledge_object,learning_goal=EXCLUDED.learning_goal,supported_profiles=EXCLUDED.supported_profiles,teacher_pages=EXCLUDED.teacher_pages,student_pages=EXCLUDED.student_pages,answer_key=EXCLUDED.answer_key,accessibility=EXCLUDED.accessibility,source_fidelity_checked=EXCLUDED.source_fidelity_checked,pedagogical_reviewed=EXCLUDED.pedagogical_reviewed,technical_reviewed=EXCLUDED.technical_reviewed,status=EXCLUDED.status,source_route=EXCLUDED.source_route,updated_at=now();

