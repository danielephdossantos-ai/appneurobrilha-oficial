
CREATE TABLE public.parental_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  version text NOT NULL,
  accepted_at timestamptz NOT NULL DEFAULT now(),
  ip_address text,
  user_agent text,
  revoked_at timestamptz,
  revocation_reason text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, version)
);

GRANT SELECT, INSERT, UPDATE ON public.parental_consents TO authenticated;
GRANT ALL ON public.parental_consents TO service_role;

ALTER TABLE public.parental_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own consents"
  ON public.parental_consents FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users insert own consents"
  ON public.parental_consents FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users revoke own consents"
  ON public.parental_consents FOR UPDATE TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins view all consents"
  ON public.parental_consents FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_parental_consents_user ON public.parental_consents(user_id);
