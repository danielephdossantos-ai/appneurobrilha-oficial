GRANT SELECT, INSERT, UPDATE, DELETE ON public.routine_items TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.scheduled_notifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.push_subscriptions TO authenticated;
GRANT ALL ON public.routine_items TO service_role;
GRANT ALL ON public.scheduled_notifications TO service_role;
GRANT ALL ON public.push_subscriptions TO service_role;