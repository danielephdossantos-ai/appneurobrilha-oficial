-- Biblioteca Inclusiva · Ciências do 6º ano completa.
WITH lessons(code,rel,title) AS (VALUES
('EF06CI01','unidade-4/aula-04-misturas.ts','Misturas homogêneas e heterogêneas'),
('EF06CI02','unidade-4/aula-01.ts','Transformações químicas'),
('EF06CI03','unidade-4/aula-02.ts','Separação de materiais'),
('EF06CI04','unidade-4/aula-03.ts','Materiais sintéticos e medicamentos'),
('EF06CI05','unidade-2/aula-01.ts','Célula como unidade da vida'),
('EF06CI06','unidade-2/aulas-organizacao-visao.ts','Níveis de organização dos seres vivos'),
('EF06CI07','unidade-2/aula-02-comando-central.ts','Sistema nervoso e coordenação'),
('EF06CI08','unidade-2/aulas-organizacao-visao.ts','Visão e correção óptica'),
('EF06CI09','unidade-2/aula-03-corpo-em-acao.ts','Sistemas locomotor e nervoso'),
('EF06CI10','unidade-2/aula-04-substancias-e-cerebro.ts','Efeitos de substâncias no sistema nervoso'),
('EF06CI11','unidade-6/aula-01.ts','Camadas internas da Terra'),
('EF06CI12','unidade-6/aulas-rochas-terra-sol.ts','Rochas e formação de fósseis'),
('EF06CI13','unidade-6/aulas-rochas-terra-sol.ts','Forma e movimentos da Terra'),
('EF06CI14','unidade-6/aulas-rochas-terra-sol.ts','Movimentos Terra–Sol e sombras')
), p AS (SELECT code,'src/escola-brilha/curso-v4/ciencias-6ano/'||rel source_key,title,'Investigar e explicar '||lower(title)||' com modelos, dados, relações causais e linguagem científica do 6º ano.' goal FROM lessons)
INSERT INTO public.teacher_inclusive_lessons (source_lesson_key,source_version,codigo_bncc,title,school_stage,school_year,subject,knowledge_object,learning_goal,supported_profiles,teacher_pages,student_pages,answer_key,accessibility,source_fidelity_checked,pedagogical_reviewed,technical_reviewed,status,source_route)
SELECT source_key,'audit-2026-09-04',code,title,'fundamental_2','6º Ano','Ciências',title,goal,ARRAY['tea','tdah','dislexia','deficiencia_intelectual','comunicacao','motora_escrita'],
jsonb_build_array(jsonb_build_object('title','Guia investigativo — '||code,'purpose',goal,'sections',jsonb_build_array(
 jsonb_build_object('heading','Prepare sem infantilizar','content',jsonb_build_array('Apresente problema, produto e critério; use modelo visual sem reduzir o conteúdo científico.','Professor controla materiais e demonstra procedimentos; não usar chama, reagentes, pressão, dissecação, amostras biológicas ou substâncias desconhecidas.')),
 jsonb_build_object('heading','Modelar e investigar','content',jsonb_build_array('Separe observação, modelo, inferência e conclusão; altere uma variável por vez quando aplicável.','Use diagramas de sistemas e escalas, deixando claro que modelos representam aspectos e têm limites.','Na habilidade EF06CI10, trabalhar somente prevenção, efeitos e busca de adulto/profissional; nunca demonstrar, normalizar ou instruir acesso ou uso de substâncias.')),
 jsonb_build_object('heading','Rotina adaptativa','content',jsonb_build_array('Divida tarefas longas, dê uma instrução por vez, permita pausa planejada e sinalize retomada.','Aceite resposta oral, apontada, diagramada, digitada, escrita ou com tecnologia assistiva.','Retire pistas gradualmente, mantendo linguagem adequada à idade.')),
 jsonb_build_object('heading','Critério','content','Explica quatro de cinco situações usando modelo, dado, relação causal ou evidência pertinente.')))),
jsonb_build_array(jsonb_build_object('title','1. Delimitar o sistema','instruction','Identifique componentes, escala, variável e pergunta.','activity','Construa hipótese ou modelo inicial e marque o que ele representa.','support','Glossário curto, diagrama e texto em blocos.'),jsonb_build_object('title','2. Analisar evidências','instruction','Compare dados, modelos ou procedimentos e diferencie observação de inferência.','activity','Complete tabela ou diagrama de '||lower(title)||' e cite evidência.','support','Exemplo resolvido e redução gradual de pistas.'),jsonb_build_object('title','3. Explicar e avaliar limites','instruction','Aplique o modelo em nova situação e explique onde ele não basta.','activity','Produza conclusão baseada nos dados e uma pergunta investigável seguinte.','support','Resposta oral, esquematizada, digitada, escrita ou assistida.')),
jsonb_build_array(jsonb_build_object('page',1,'answer','Sistema e hipótese delimitados.'),jsonb_build_object('page',2,'answer','Análise coerente com evidência.'),jsonb_build_object('page',3,'answer','Conclusão limitada ao modelo e aos dados.','teacher_note','Registre autonomia, apoio eficaz e próximo passo.')),
jsonb_build_object('response_modes',jsonb_build_array('oral','pointing','diagram','typing','writing','assistive_technology'),'routine','adjustable','one_instruction_at_a_time',true,'read_aloud',true,'large_text',true,'visual_schedule',true,'planned_pause',true,'low_distraction',true,'age_respectful',true,'safety_screened',true,'adult_supervision',true,'prevention_only',true,'print','grayscale-safe'),true,true,true,'published','/escola-brilha/curso/ciencias-6ano' FROM p
ON CONFLICT (source_lesson_key,codigo_bncc) DO UPDATE SET source_version=EXCLUDED.source_version,title=EXCLUDED.title,school_stage=EXCLUDED.school_stage,school_year=EXCLUDED.school_year,knowledge_object=EXCLUDED.knowledge_object,learning_goal=EXCLUDED.learning_goal,supported_profiles=EXCLUDED.supported_profiles,teacher_pages=EXCLUDED.teacher_pages,student_pages=EXCLUDED.student_pages,answer_key=EXCLUDED.answer_key,accessibility=EXCLUDED.accessibility,source_fidelity_checked=EXCLUDED.source_fidelity_checked,pedagogical_reviewed=EXCLUDED.pedagogical_reviewed,technical_reviewed=EXCLUDED.technical_reviewed,status=EXCLUDED.status,source_route=EXCLUDED.source_route,updated_at=now();

