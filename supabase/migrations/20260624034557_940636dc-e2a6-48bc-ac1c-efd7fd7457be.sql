
-- 1) Insert Pipa mascot (Lumi/Pip already exists with id 0...001)
INSERT INTO public.mascots (id, name, description, image_url, category, base_stats)
VALUES (
  '00000000-0000-0000-0000-000000000002',
  'Pipa',
  'A guardiã rosa da Cidade do Pip — companheira mágica das aventuras.',
  '/src/assets/pip-girl-mascot.png',
  'primary',
  '{"speed":5,"focus":5,"empathy":7}'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- 2) Helper RPC: ativar um mascote (Pip ou Pipa) do usuário autenticado.
--    Insere a linha em user_mascots se não existir e marca como ativo.
--    O trigger handle_mascot_activation desativa os outros automaticamente.
CREATE OR REPLACE FUNCTION public.activate_user_mascot(p_mascot_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'NOT_AUTHENTICATED';
  END IF;

  INSERT INTO public.user_mascots (user_id, mascot_id, is_active)
  VALUES (v_uid, p_mascot_id, true)
  ON CONFLICT DO NOTHING;

  UPDATE public.user_mascots
    SET is_active = true
    WHERE user_id = v_uid AND mascot_id = p_mascot_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.activate_user_mascot(uuid) TO authenticated;

-- 3) RPC para ganhar XP no mascote ativo do usuário (chamado quando recebe BrilhoCoins)
CREATE OR REPLACE FUNCTION public.gain_active_mascot_xp(p_amount integer)
RETURNS TABLE(new_level integer, new_experience integer, leveled_up boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_row public.user_mascots;
  v_threshold integer;
  v_leveled boolean := false;
  v_exp integer;
  v_lvl integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'NOT_AUTHENTICATED';
  END IF;

  SELECT * INTO v_row FROM public.user_mascots
    WHERE user_id = v_uid AND is_active = true
    LIMIT 1;

  IF v_row.id IS NULL THEN
    RETURN;
  END IF;

  v_exp := COALESCE(v_row.experience, 0) + p_amount;
  v_lvl := COALESCE(v_row.level, 1);
  v_threshold := v_lvl * 100;

  WHILE v_exp >= v_threshold LOOP
    v_exp := v_exp - v_threshold;
    v_lvl := v_lvl + 1;
    v_leveled := true;
    v_threshold := v_lvl * 100;
  END LOOP;

  UPDATE public.user_mascots
    SET experience = v_exp, level = v_lvl
    WHERE id = v_row.id;

  RETURN QUERY SELECT v_lvl, v_exp, v_leveled;
END;
$$;

GRANT EXECUTE ON FUNCTION public.gain_active_mascot_xp(integer) TO authenticated;
