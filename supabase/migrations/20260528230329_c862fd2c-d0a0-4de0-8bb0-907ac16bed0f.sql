-- Função para o gatilho
CREATE OR REPLACE FUNCTION public.handle_new_security_alert()
RETURNS TRIGGER AS $$
DECLARE
    v_user_id UUID;
BEGIN
    -- Pegar o user_id (pai) da criança
    SELECT user_id INTO v_user_id FROM public.children WHERE id = NEW.child_id;
    
    -- Inserir na tabela de notificações
    INSERT INTO public.notifications (user_id, child_id, title, message, type)
    VALUES (
        v_user_id,
        NEW.child_id,
        'Alerta de Segurança!',
        NEW.reason || ': ' || NEW.content,
        'seguranca'
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Gatilho
CREATE TRIGGER on_security_alert_insert
AFTER INSERT ON public.child_security_alerts
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_security_alert();
