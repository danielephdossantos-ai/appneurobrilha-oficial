CREATE OR REPLACE FUNCTION public.sync_child_from_anamnese_v2()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_nome text;
  v_serie text;
  v_idade int;
BEGIN
  IF NEW.completed IS DISTINCT FROM true THEN
    RETURN NEW;
  END IF;

  v_nome := nullif(trim(regexp_replace(coalesce(NEW.responses #>> '{step1,nome}', ''), '\s+', ' ', 'g')), '');
  v_serie := nullif(trim(regexp_replace(coalesce(NEW.responses #>> '{step1,serie}', ''), '\s+', ' ', 'g')), '');

  IF coalesce(NEW.responses #>> '{step1,idade}', '') ~ '^\d+$' THEN
    v_idade := (NEW.responses #>> '{step1,idade}')::int;
  ELSE
    v_idade := NULL;
  END IF;

  UPDATE public.children
  SET
    nome = CASE WHEN v_nome IS NOT NULL AND length(v_nome) >= 2 THEN v_nome ELSE nome END,
    serie = COALESCE(v_serie, serie),
    idade = COALESCE(v_idade, idade),
    anamnese_completa = true,
    updated_at = now()
  WHERE id = NEW.child_id
    AND user_id = NEW.user_id;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS sync_child_from_anamnese_v2_trigger ON public.anamnese_v2;
CREATE TRIGGER sync_child_from_anamnese_v2_trigger
AFTER INSERT OR UPDATE OF responses, completed
ON public.anamnese_v2
FOR EACH ROW
EXECUTE FUNCTION public.sync_child_from_anamnese_v2();