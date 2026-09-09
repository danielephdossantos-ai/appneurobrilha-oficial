
CREATE OR REPLACE FUNCTION public.pre_requisitos_pendentes(
  p_child_id uuid,
  p_codigo_bncc text
)
RETURNS TABLE (
  codigo_bncc text,
  nivel_dominio public.mastery_level,
  motivo text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    pre.requer_codigo_bncc AS codigo_bncc,
    COALESCE(ep.nivel_dominio, 'nao_iniciada'::public.mastery_level) AS nivel_dominio,
    CASE 
      WHEN ep.child_id IS NULL THEN 'nunca_estudou'
      WHEN ep.nivel_dominio = 'em_aprendizagem' THEN 'em_aprendizagem'
      WHEN ep.nivel_dominio = 'nao_iniciada' THEN 'nao_iniciada'
      ELSE 'nao_dominada'
    END AS motivo
  FROM public.bncc_prerequisitos pre
  LEFT JOIN public.escola_progresso ep
    ON ep.child_id = p_child_id
   AND ep.codigo_bncc = pre.requer_codigo_bncc
  WHERE pre.codigo_bncc = p_codigo_bncc
    AND COALESCE(ep.nivel_dominio, 'nao_iniciada'::public.mastery_level)
        NOT IN ('parcialmente_dominada'::public.mastery_level, 'dominada'::public.mastery_level);
$$;

GRANT EXECUTE ON FUNCTION public.pre_requisitos_pendentes(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.pre_requisitos_pendentes(uuid, text) TO service_role;
