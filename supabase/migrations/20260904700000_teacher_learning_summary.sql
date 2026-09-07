-- Resumo pedagógico do aluno conectado: somente progresso escolar agregado.
-- Não entrega respostas, fotos, conversas, dados clínicos nem comparação entre crianças.
CREATE OR REPLACE FUNCTION public.teacher_get_student_learning_summary(selected_link_id uuid)
RETURNS TABLE(subject text,observed_skills integer,completed_skills integer,in_progress_skills integer,last_activity_at timestamptz)
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$BEGIN
 IF NOT EXISTS(SELECT 1 FROM public.teacher_student_links l JOIN public.teacher_profiles p ON p.user_id=l.teacher_user_id WHERE l.id=selected_link_id AND l.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date AND p.status='active' AND p.access_expires_at>=now()) THEN RAISE EXCEPTION 'ACTIVE_LINK_REQUIRED';END IF;
 RETURN QUERY WITH allowed AS(SELECT child_id FROM public.teacher_student_links WHERE id=selected_link_id),progress AS(SELECT CASE substring(e.codigo_bncc from 5 for 2) WHEN 'LP' THEN 'Língua Portuguesa' WHEN 'MA' THEN 'Matemática' WHEN 'CI' THEN 'Ciências' WHEN 'HI' THEN 'História' WHEN 'GE' THEN 'Geografia' WHEN 'AR' THEN 'Arte' WHEN 'LI' THEN 'Língua Inglesa' WHEN 'ER' THEN 'Ensino Religioso' ELSE 'Outros componentes' END discipline,e.concluida,e.bloco_atual,e.updated_at FROM public.escola_progresso e JOIN allowed a ON a.child_id=e.child_id)
 SELECT discipline,count(*)::integer,count(*)FILTER(WHERE concluida)::integer,count(*)FILTER(WHERE NOT concluida AND bloco_atual>0)::integer,max(updated_at) FROM progress GROUP BY discipline ORDER BY discipline;
END$$;
CREATE OR REPLACE FUNCTION public.teacher_get_student_homework_summary(selected_link_id uuid)
RETURNS TABLE(assigned_count integer,started_count integer,completed_count integer,overdue_count integer)
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$BEGIN
 IF NOT EXISTS(SELECT 1 FROM public.teacher_student_links l JOIN public.teacher_profiles p ON p.user_id=l.teacher_user_id WHERE l.id=selected_link_id AND l.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date AND p.status='active' AND p.access_expires_at>=now()) THEN RAISE EXCEPTION 'ACTIVE_LINK_REQUIRED';END IF;
 RETURN QUERY SELECT count(*)FILTER(WHERE a.status='assigned')::integer,count(*)FILTER(WHERE a.status='started')::integer,count(*)FILTER(WHERE a.status='completed')::integer,count(*)FILTER(WHERE a.status IN('assigned','started') AND a.due_date<current_date)::integer FROM public.teacher_homework_assignments a WHERE a.teacher_student_link_id=selected_link_id AND a.teacher_user_id=auth.uid() AND a.status<>'cancelled';
END$$;
REVOKE ALL ON FUNCTION public.teacher_get_student_learning_summary(uuid) FROM PUBLIC;REVOKE ALL ON FUNCTION public.teacher_get_student_homework_summary(uuid) FROM PUBLIC;GRANT EXECUTE ON FUNCTION public.teacher_get_student_learning_summary(uuid) TO authenticated;GRANT EXECUTE ON FUNCTION public.teacher_get_student_homework_summary(uuid) TO authenticated;
COMMENT ON FUNCTION public.teacher_get_student_learning_summary(uuid) IS 'Agrega somente habilidades observadas; não representa nota, laudo ou comparação entre alunos.';
