-- Biblioteca Inclusiva · Ciências do 4º ano completa.
WITH lessons(code,rel,title) AS (VALUES
('EF04CI01','unidade-2/aula-01-misturas-transformacoes.ts','Misturas do cotidiano'),
('EF04CI02','unidade-2/aula-01-misturas-transformacoes.ts','Transformações reversíveis e irreversíveis'),
('EF04CI03','unidade-2/aula-01-misturas-transformacoes.ts','Mudanças causadas por aquecimento e resfriamento'),
('EF04CI04','unidade-3/aula-01-cadeia-alimentar.ts','Cadeias alimentares e fluxo de energia'),
('EF04CI05','unidade-3/aula-01-cadeia-alimentar.ts','Ciclo da matéria e decomposição'),
('EF04CI06','unidade-4/aula-01-microrganismos.ts','Microrganismos e seus papéis'),
('EF04CI07','unidade-4/aula-01-microrganismos.ts','Microrganismos na produção de alimentos'),
('EF04CI08','unidade-4/aula-01-microrganismos.ts','Prevenção de doenças transmissíveis'),
('EF04CI09','unidade-5/aula-01-sol-pontos-cardeais.ts','Pontos cardeais e posição do Sol'),
('EF04CI10','unidade-5/aula-01-sol-pontos-cardeais.ts','Sombras e orientação'),
('EF04CI11','unidade-6/aula-01-estacoes-ano.ts','Lua, estações e calendários')
), prepared AS (SELECT code,'src/escola-brilha/curso-v4/ciencias-4ano/'||rel source_key,title,'Investigar '||lower(title)||', registrar evidências e explicar conclusões adequadas ao 4º ano.' goal FROM lessons)
INSERT INTO public.teacher_inclusive_lessons (source_lesson_key,source_version,codigo_bncc,title,school_stage,school_year,subject,knowledge_object,learning_goal,supported_profiles,teacher_pages,student_pages,answer_key,accessibility,source_fidelity_checked,pedagogical_reviewed,technical_reviewed,status,source_route)
SELECT source_key,'audit-2026-09-04',code,title,'fundamental_1','4º Ano','Ciências',title,goal,ARRAY['tea','tdah','dislexia','deficiencia_intelectual','comunicacao','motora_escrita'],
jsonb_build_array(jsonb_build_object('title','Guia investigativo — '||code,'purpose',goal,'sections',jsonb_build_array(
 jsonb_build_object('heading','Segurança primeiro','content',jsonb_build_array('Professor seleciona materiais e demonstra procedimentos; criança não manipula calor, fogo, culturas de microrganismos, substâncias desconhecidas nem olha diretamente para o Sol.','Use imagens ou dados prontos quando a observação direta não for segura.')),
 jsonb_build_object('heading','Método científico','content',jsonb_build_array('Separe pergunta, hipótese, variável, observação, dado e conclusão.','Altere uma condição por vez e não trate hipótese como resultado.','Em saúde, use fontes confiáveis e não substitua orientação profissional.')),
 jsonb_build_object('heading','Rotina adaptativa','content',jsonb_build_array('Dê uma instrução por vez, use organizador visual, pausa planejada e retomada clara.','Aceite resposta oral, apontada, tabelada, desenhada, fotografada, digitada ou escrita.','Retire apoios gradualmente sem reduzir o objetivo.')),
 jsonb_build_object('heading','Critério','content','Explica quatro de cinco situações usando dados, relação causal ou modelo pertinente.')))),
jsonb_build_array(
 jsonb_build_object('title','1. Prever e modelar','instruction','Observe o problema e construa uma previsão ou modelo inicial.','activity','Registre hipótese e indique a pista usada.','support','Imagem ampliada, leitura em voz alta e esquema visual.'),
 jsonb_build_object('title','2. Comparar evidências','instruction','Analise dados ou observações mantendo visível o que mudou.','activity','Compare dois casos de '||lower(title)||' e registre semelhança, diferença e evidência.','support','Tabela, cartões e exemplo resolvido.'),
 jsonb_build_object('title','3. Explicar e transferir','instruction','Responda à pergunta e aplique o modelo em nova situação.','activity','Produza conclusão limitada aos dados e indique o que ainda precisaria ser investigado.','support','Resposta oral, apontada, tabelada, desenhada, digitada ou escrita.')),
jsonb_build_array(jsonb_build_object('page',1,'answer','Hipótese ligada a uma pista.'),jsonb_build_object('page',2,'answer','Comparação coerente com evidência.'),jsonb_build_object('page',3,'answer','Conclusão baseada nos dados, sem extrapolação.','teacher_note','Registre autonomia, apoio eficaz e próximo passo.')),
jsonb_build_object('response_modes',jsonb_build_array('oral','pointing','table','drawing','photo','typing','writing'),'routine','adjustable','one_instruction_at_a_time',true,'read_aloud',true,'large_text',true,'visual_schedule',true,'planned_pause',true,'low_distraction',true,'hands_on',true,'safety_screened',true,'adult_supervision',true,'print','grayscale-safe'),true,true,true,'published','/escola-brilha/curso/ciencias-4ano'
FROM prepared ON CONFLICT (source_lesson_key,codigo_bncc) DO UPDATE SET source_version=EXCLUDED.source_version,title=EXCLUDED.title,school_year=EXCLUDED.school_year,knowledge_object=EXCLUDED.knowledge_object,learning_goal=EXCLUDED.learning_goal,supported_profiles=EXCLUDED.supported_profiles,teacher_pages=EXCLUDED.teacher_pages,student_pages=EXCLUDED.student_pages,answer_key=EXCLUDED.answer_key,accessibility=EXCLUDED.accessibility,source_fidelity_checked=EXCLUDED.source_fidelity_checked,pedagogical_reviewed=EXCLUDED.pedagogical_reviewed,technical_reviewed=EXCLUDED.technical_reviewed,status=EXCLUDED.status,source_route=EXCLUDED.source_route,updated_at=now();

