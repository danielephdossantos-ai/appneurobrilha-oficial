-- Tarefa de Casa Inteligente enviada pelo professor ao aluno com consentimento ativo.
-- Não expõe ao professor as tarefas privadas, fotos ou conversas criadas pela família.
CREATE TABLE IF NOT EXISTS public.teacher_homework_assignments(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_user_id uuid NOT NULL REFERENCES public.teacher_profiles(user_id) ON DELETE CASCADE,
  teacher_student_link_id uuid NOT NULL REFERENCES public.teacher_student_links(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  guardian_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL CHECK(char_length(title) BETWEEN 3 AND 120),
  subject text NOT NULL CHECK(char_length(subject) BETWEEN 2 AND 60),
  instructions text NOT NULL CHECK(char_length(instructions) BETWEEN 5 AND 1000),
  due_date date NOT NULL,
  source_type text NOT NULL DEFAULT 'teacher_text' CHECK(source_type IN('teacher_text','inclusive_lesson','escola_brilha','neuro_treino')),
  source_route text CHECK(source_route IS NULL OR (source_route LIKE '/%' AND source_route NOT LIKE '//%')),
  inclusive_lesson_id uuid REFERENCES public.teacher_inclusive_lessons(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'assigned' CHECK(status IN('assigned','started','completed','cancelled')),
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK((status='completed')=(completed_at IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS teacher_homework_teacher_idx ON public.teacher_homework_assignments(teacher_user_id,due_date DESC);
CREATE INDEX IF NOT EXISTS teacher_homework_child_idx ON public.teacher_homework_assignments(child_id,status,due_date);
ALTER TABLE public.teacher_homework_assignments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "assignment participants read" ON public.teacher_homework_assignments;
CREATE POLICY "assignment participants read" ON public.teacher_homework_assignments FOR SELECT TO authenticated USING(public.has_role(auth.uid(),'admin') OR teacher_user_id=auth.uid() OR guardian_user_id=auth.uid());
REVOKE ALL ON public.teacher_homework_assignments FROM anon,authenticated;

CREATE OR REPLACE FUNCTION public.teacher_create_homework_assignment(selected_link_id uuid,assignment_title text,assignment_subject text,assignment_instructions text,assignment_due_date date,assignment_source_type text DEFAULT 'teacher_text',assignment_source_route text DEFAULT NULL,selected_inclusive_lesson_id uuid DEFAULT NULL)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$DECLARE link_row public.teacher_student_links%ROWTYPE;new_id uuid;BEGIN
  SELECT * INTO link_row FROM public.teacher_student_links l WHERE l.id=selected_link_id AND l.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date;
  IF NOT FOUND OR NOT EXISTS(SELECT 1 FROM public.teacher_profiles p WHERE p.user_id=auth.uid() AND p.status='active' AND p.access_expires_at>=now()) THEN RAISE EXCEPTION 'ACTIVE_LINK_REQUIRED';END IF;
  IF char_length(trim(assignment_title)) NOT BETWEEN 3 AND 120 OR char_length(trim(assignment_subject)) NOT BETWEEN 2 AND 60 OR char_length(trim(assignment_instructions)) NOT BETWEEN 5 AND 1000 THEN RAISE EXCEPTION 'INVALID_CONTENT';END IF;
  IF assignment_due_date<current_date OR assignment_due_date>current_date+interval '180 days' THEN RAISE EXCEPTION 'INVALID_DUE_DATE';END IF;
  IF assignment_source_type NOT IN('teacher_text','inclusive_lesson','escola_brilha','neuro_treino') THEN RAISE EXCEPTION 'INVALID_SOURCE';END IF;
  IF assignment_source_route IS NOT NULL AND (assignment_source_route NOT LIKE '/%' OR assignment_source_route LIKE '//%' OR assignment_source_route LIKE '%://%') THEN RAISE EXCEPTION 'INTERNAL_ROUTE_ONLY';END IF;
  IF selected_inclusive_lesson_id IS NOT NULL AND NOT EXISTS(SELECT 1 FROM public.teacher_inclusive_lessons i WHERE i.id=selected_inclusive_lesson_id AND i.status='published' AND i.source_fidelity_checked AND i.pedagogical_reviewed AND i.technical_reviewed) THEN RAISE EXCEPTION 'LESSON_NOT_PUBLISHED';END IF;
  INSERT INTO public.teacher_homework_assignments(teacher_user_id,teacher_student_link_id,child_id,guardian_user_id,title,subject,instructions,due_date,source_type,source_route,inclusive_lesson_id) VALUES(auth.uid(),link_row.id,link_row.child_id,link_row.guardian_user_id,trim(assignment_title),trim(assignment_subject),trim(assignment_instructions),assignment_due_date,assignment_source_type,assignment_source_route,selected_inclusive_lesson_id) RETURNING id INTO new_id;RETURN new_id;
END$$;
CREATE OR REPLACE FUNCTION public.teacher_list_homework_assignments() RETURNS SETOF public.teacher_homework_assignments LANGUAGE sql SECURITY DEFINER SET search_path=public AS $$SELECT a.* FROM public.teacher_homework_assignments a JOIN public.teacher_student_links l ON l.id=a.teacher_student_link_id WHERE a.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date AND EXISTS(SELECT 1 FROM public.teacher_profiles p WHERE p.user_id=auth.uid() AND p.status='active' AND p.access_expires_at>=now()) ORDER BY a.due_date DESC,a.created_at DESC$$;
CREATE OR REPLACE FUNCTION public.guardian_list_teacher_homework(selected_child_id uuid) RETURNS SETOF public.teacher_homework_assignments LANGUAGE sql SECURITY DEFINER SET search_path=public AS $$SELECT a.* FROM public.teacher_homework_assignments a WHERE a.child_id=selected_child_id AND a.guardian_user_id=auth.uid() AND a.status<>'cancelled' AND EXISTS(SELECT 1 FROM public.children c WHERE c.id=selected_child_id AND c.user_id=auth.uid()) ORDER BY (a.status='completed'),a.due_date,a.created_at$$;
CREATE OR REPLACE FUNCTION public.guardian_update_teacher_homework_status(selected_assignment_id uuid,new_status text) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$BEGIN IF new_status NOT IN('started','completed') THEN RAISE EXCEPTION 'INVALID_STATUS';END IF;UPDATE public.teacher_homework_assignments SET status=new_status,completed_at=CASE WHEN new_status='completed' THEN now() ELSE NULL END,updated_at=now() WHERE id=selected_assignment_id AND guardian_user_id=auth.uid() AND status<>'cancelled';IF NOT FOUND THEN RAISE EXCEPTION 'ASSIGNMENT_NOT_FOUND';END IF;END$$;
CREATE OR REPLACE FUNCTION public.teacher_cancel_homework_assignment(selected_assignment_id uuid) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$BEGIN UPDATE public.teacher_homework_assignments SET status='cancelled',completed_at=NULL,updated_at=now() WHERE id=selected_assignment_id AND teacher_user_id=auth.uid() AND status<>'completed';IF NOT FOUND THEN RAISE EXCEPTION 'ASSIGNMENT_NOT_CANCELLABLE';END IF;END$$;
REVOKE ALL ON FUNCTION public.teacher_create_homework_assignment(uuid,text,text,text,date,text,text,uuid) FROM PUBLIC;REVOKE ALL ON FUNCTION public.teacher_list_homework_assignments() FROM PUBLIC;REVOKE ALL ON FUNCTION public.guardian_list_teacher_homework(uuid) FROM PUBLIC;REVOKE ALL ON FUNCTION public.guardian_update_teacher_homework_status(uuid,text) FROM PUBLIC;REVOKE ALL ON FUNCTION public.teacher_cancel_homework_assignment(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.teacher_create_homework_assignment(uuid,text,text,text,date,text,text,uuid) TO authenticated;GRANT EXECUTE ON FUNCTION public.teacher_list_homework_assignments() TO authenticated;GRANT EXECUTE ON FUNCTION public.guardian_list_teacher_homework(uuid) TO authenticated;GRANT EXECUTE ON FUNCTION public.guardian_update_teacher_homework_status(uuid,text) TO authenticated;GRANT EXECUTE ON FUNCTION public.teacher_cancel_homework_assignment(uuid) TO authenticated;
COMMENT ON TABLE public.teacher_homework_assignments IS 'Atividades enviadas pelo professor; separadas das tarefas privadas e fotos da família.';
