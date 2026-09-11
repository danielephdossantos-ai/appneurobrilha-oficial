-- Mantem a administradora proprietaria autorizada por role e remove o fluxo de codigo administrativo.
-- Os codigos docentes, de alunos e de conexao permanecem inalterados.

INSERT INTO public.user_roles(user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'neurobrilha@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

DROP FUNCTION IF EXISTS public.redeem_admin_access_code(text);
DROP TABLE IF EXISTS public.admin_access_codes;
