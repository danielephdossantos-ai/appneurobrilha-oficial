-- Function to initialize journey
CREATE OR REPLACE FUNCTION public.handle_anamnese_completion()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.anamnese_completa = true AND (OLD.anamnese_completa = false OR OLD.anamnese_completa IS NULL)) THEN
        INSERT INTO public.child_journey (child_id)
        VALUES (NEW.id)
        ON CONFLICT (child_id) DO NOTHING;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger
CREATE OR REPLACE TRIGGER on_anamnese_completion
    AFTER UPDATE ON public.children
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_anamnese_completion();

-- Also for new children if they start completed (unlikely but safe)
CREATE OR REPLACE TRIGGER on_child_creation_anamnese
    AFTER INSERT ON public.children
    FOR EACH ROW
    WHEN (NEW.anamnese_completa = true)
    EXECUTE FUNCTION public.handle_anamnese_completion();
