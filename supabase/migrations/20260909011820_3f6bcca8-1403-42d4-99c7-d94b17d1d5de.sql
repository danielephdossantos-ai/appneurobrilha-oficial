INSERT INTO public.teacher_profiles (user_id, display_name, school_name, status, access_expires_at, access_source)
SELECT id, 'NeuroBrilha', 'NeuroBrilha Kids', 'active', '2099-12-31 23:59:59+00', 'admin_code'
FROM auth.users WHERE lower(email) = 'neurobrilha@gmail.com'
ON CONFLICT (user_id) DO UPDATE SET status = 'active', access_expires_at = '2099-12-31 23:59:59+00', updated_at = now();