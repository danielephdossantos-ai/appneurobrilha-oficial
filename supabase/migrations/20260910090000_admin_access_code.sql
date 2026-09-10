CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.admin_access_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code_hash text NOT NULL UNIQUE,
  label text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  max_uses integer NOT NULL DEFAULT 1 CHECK (max_uses > 0),
  use_count integer NOT NULL DEFAULT 0 CHECK (use_count >= 0),
  expires_at timestamptz,
  redeemed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  redeemed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_access_codes ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.admin_access_codes FROM anon, authenticated;
GRANT ALL ON public.admin_access_codes TO service_role;

CREATE OR REPLACE FUNCTION public.redeem_admin_access_code(p_code text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  selected_code public.admin_access_codes%ROWTYPE;
  current_user_id uuid := auth.uid();
BEGIN
  IF current_user_id IS NULL OR length(btrim(coalesce(p_code, ''))) < 12 THEN
    RETURN false;
  END IF;

  SELECT * INTO selected_code
  FROM public.admin_access_codes
  WHERE code_hash = encode(digest(upper(btrim(p_code)), 'sha256'), 'hex')
    AND active = true
    AND use_count < max_uses
    AND (expires_at IS NULL OR expires_at > now())
  FOR UPDATE;

  IF NOT FOUND THEN RETURN false; END IF;

  INSERT INTO public.user_roles(user_id, role)
  VALUES (current_user_id, 'admin'::public.app_role)
  ON CONFLICT (user_id, role) DO NOTHING;

  UPDATE public.admin_access_codes
  SET use_count = use_count + 1,
      redeemed_by = current_user_id,
      redeemed_at = now(),
      active = (use_count + 1) < max_uses
  WHERE id = selected_code.id;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.redeem_admin_access_code(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.redeem_admin_access_code(text) TO authenticated;

-- Código proprietário de uso único. O texto legível não é armazenado no banco.
INSERT INTO public.admin_access_codes(code_hash, label, max_uses)
VALUES (
  'ac1f94550260488189d4e74f8e577442e3bded17a21e86d4a067ecb5aad8f372',
  'Proprietária NeuroBrilha — Bloco 1',
  1
)
ON CONFLICT (code_hash) DO NOTHING;
