-- Reconstrução Completa da Arquitetura do Banco de Dados
-- Projeto: Brilha Mente Kids (Neurobrilha-Kids)

-- 1. EXTENSÕES E FUNÇÕES AUXILIARES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Função para atualizar timestamp de updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 2. TABELAS DE PERFIS (Núcleo de Usuários)

-- Tabela de Perfis Gerais (estende auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    role TEXT CHECK (role IN ('admin', 'responsavel', 'crianca', 'terapeuta')) NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Tabela de Responsáveis (Pais/Tutores)
CREATE TABLE IF NOT EXISTS public.parent_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    phone TEXT,
    cpf TEXT UNIQUE,
    consent_given BOOLEAN DEFAULT FALSE,
    consent_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de Crianças
CREATE TABLE IF NOT EXISTS public.children_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES public.parent_profiles(id) ON DELETE CASCADE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT,
    birth_date DATE NOT NULL,
    gender TEXT,
    diagnosis TEXT[], -- TEA, TDAH, etc.
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de Terapeutas
CREATE TABLE IF NOT EXISTS public.therapist_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    specialty TEXT,
    crp_crm TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. DADOS NEURO-COGNITIVOS E SENSORIAIS

-- Anamnese inicial
CREATE TABLE IF NOT EXISTS public.anamnesis (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    history TEXT,
    milestones JSONB, -- Marcos do desenvolvimento
    observations TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Perfil Neurodivergente (Configurações adaptativas)
CREATE TABLE IF NOT EXISTS public.neuro_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    main_diagnosis TEXT NOT NULL,
    severity_level INTEGER CHECK (severity_level BETWEEN 1 AND 3),
    comorbidities TEXT[],
    focus_duration_minutes INTEGER DEFAULT 15,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Perfil Cognitivo (Habilidades e Dificuldades)
CREATE TABLE IF NOT EXISTS public.cognitive_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    working_memory INTEGER DEFAULT 5, -- escala 1-10
    processing_speed INTEGER DEFAULT 5,
    attention_control INTEGER DEFAULT 5,
    impulse_control INTEGER DEFAULT 5,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Perfil Sensorial (Gatilhos e Preferências)
CREATE TABLE IF NOT EXISTS public.sensory_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    visual_sensitivity INTEGER DEFAULT 5,
    auditory_sensitivity INTEGER DEFAULT 5,
    tactile_sensitivity INTEGER DEFAULT 5,
    preferred_colors TEXT[],
    trigger_sounds TEXT[],
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4. ESTRUTURA PEDAGÓGICA (BNCC e Regras)

-- Habilidades BNCC
CREATE TABLE IF NOT EXISTS public.bncc_skills (
    code TEXT PRIMARY KEY, -- ex: EI03ET07
    description TEXT NOT NULL,
    segment TEXT NOT NULL, -- Educação Infantil, Fundamental
    field_of_experience TEXT, -- ex: Espaços, tempos, quantidades...
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Níveis BNCC/Pedagógicos
CREATE TABLE IF NOT EXISTS public.bncc_levels (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, -- ex: Nível 1 - Reconhecimento
    min_age INTEGER NOT NULL,
    max_age INTEGER NOT NULL
);

-- Templates de Atividades (Base)
CREATE TABLE IF NOT EXISTS public.activity_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    bncc_skill_code TEXT REFERENCES public.bncc_skills(code),
    base_difficulty INTEGER DEFAULT 1,
    cognitive_weight JSONB, -- Peso por área cognitiva
    sensory_type TEXT CHECK (sensory_type IN ('visual', 'auditory', 'mixed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Regras de Dificuldade e Recompensa
CREATE TABLE IF NOT EXISTS public.difficulty_rules (
    id SERIAL PRIMARY KEY,
    template_id UUID REFERENCES public.activity_templates(id),
    level INTEGER NOT NULL,
    config JSONB NOT NULL -- Parâmetros técnicos da atividade
);

CREATE TABLE IF NOT EXISTS public.reward_rules (
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL,
    min_score INTEGER NOT NULL,
    xp_reward INTEGER NOT NULL,
    coins_reward INTEGER NOT NULL
);

-- 5. EXECUÇÃO E PROGRESSÃO

-- Atividades Instanciadas
CREATE TABLE IF NOT EXISTS public.activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    template_id UUID REFERENCES public.activity_templates(id),
    child_id UUID REFERENCES public.children_profiles(id),
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    status TEXT DEFAULT 'pending'
);

-- Resultados de Atividades (Dados Brutos)
CREATE TABLE IF NOT EXISTS public.activity_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
    child_id UUID REFERENCES public.children_profiles(id),
    score DECIMAL,
    time_spent_seconds INTEGER,
    errors_count INTEGER,
    help_requested_count INTEGER,
    completion_data JSONB, -- Logs de clique, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Logs de Progressão
CREATE TABLE IF NOT EXISTS public.progression (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE,
    skill_code TEXT REFERENCES public.bncc_skills(code),
    mastery_level DECIMAL DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Sessões Diárias
CREATE TABLE IF NOT EXISTS public.daily_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE,
    start_time TIMESTAMP WITH TIME ZONE DEFAULT now(),
    end_time TIMESTAMP WITH TIME ZONE,
    total_activities INTEGER DEFAULT 0,
    mood_start TEXT,
    mood_end TEXT
);

-- 6. MÉTRICAS NEUROADAPTATIVAS (Logs constantes)

-- Métricas de Atenção
CREATE TABLE IF NOT EXISTS public.attention_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.daily_sessions(id) ON DELETE CASCADE,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
    focus_score INTEGER,
    distraction_events INTEGER,
    latency_ms INTEGER
);

-- Métricas de Fadiga e Sobrecarga
CREATE TABLE IF NOT EXISTS public.fatigue_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.daily_sessions(id) ON DELETE CASCADE,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
    reaction_time_trend TEXT, -- 'stable', 'slowing', 'irregular'
    error_rate_spike BOOLEAN DEFAULT FALSE,
    recommended_pause BOOLEAN DEFAULT FALSE
);

-- Logs de Adaptação (O que o motor decidiu fazer)
CREATE TABLE IF NOT EXISTS public.adaptation_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id),
    trigger_reason TEXT, -- ex: 'high_fatigue'
    action_taken TEXT, -- ex: 'reduced_visual_stimuli'
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 7. RELATÓRIOS E CONTROLE PARENTAL

-- Relatórios Consolidados
CREATE TABLE IF NOT EXISTS public.reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE,
    type TEXT CHECK (type IN ('pedagogical', 'cognitive', 'neuro')),
    period_start DATE,
    period_end DATE,
    data JSONB,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Controle Parental
CREATE TABLE IF NOT EXISTS public.parental_controls (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id UUID REFERENCES public.children_profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
    daily_time_limit_minutes INTEGER DEFAULT 60,
    break_interval_minutes INTEGER DEFAULT 20,
    allowed_start_time TIME,
    allowed_end_time TIME,
    forced_pause_duration_minutes INTEGER DEFAULT 5,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Notificações
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 8. PERMISSÕES E RLS (ROW LEVEL SECURITY)

-- Ativar RLS em todas as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.children_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.therapist_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anamnesis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.neuro_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cognitive_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sensory_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bncc_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bncc_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progression ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attention_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fatigue_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.adaptation_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parental_controls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- GRANTS
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT INSERT, UPDATE ON public.activity_results, public.attention_metrics, public.fatigue_metrics, public.adaptation_logs, public.daily_sessions TO authenticated;

-- POLÍTICAS BÁSICAS (Com verificação de existência)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users can view their own profile' AND tablename = 'profiles') THEN
        CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents can view their own record' AND tablename = 'parent_profiles') THEN
        CREATE POLICY "Parents can view their own record" ON public.parent_profiles FOR SELECT USING (profile_id = auth.uid());
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents can view their children' AND tablename = 'children_profiles') THEN
        CREATE POLICY "Parents can view their children" ON public.children_profiles 
        FOR SELECT USING (
            parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())
        );
    END IF;
END
$$;

-- 9. ÍNDICES PARA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_children_parent ON public.children_profiles(parent_id);
CREATE INDEX IF NOT EXISTS idx_activity_results_child ON public.activity_results(child_id);
CREATE INDEX IF NOT EXISTS idx_daily_sessions_child ON public.daily_sessions(child_id);
CREATE INDEX IF NOT EXISTS idx_progression_skill ON public.progression(skill_code);
CREATE INDEX IF NOT EXISTS idx_metrics_session ON public.attention_metrics(session_id);

-- 10. TRIGGERS PARA UPDATED_AT (Com verificação de existência)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_profiles_modtime') THEN
        CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_children_modtime') THEN
        CREATE TRIGGER update_children_modtime BEFORE UPDATE ON public.children_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_cognitive_modtime') THEN
        CREATE TRIGGER update_cognitive_modtime BEFORE UPDATE ON public.cognitive_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_sensory_modtime') THEN
        CREATE TRIGGER update_sensory_modtime BEFORE UPDATE ON public.sensory_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_parental_modtime') THEN
        CREATE TRIGGER update_parental_modtime BEFORE UPDATE ON public.parental_controls FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END
$$;
