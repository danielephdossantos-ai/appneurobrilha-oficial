-- Create the pedagogical techniques table
CREATE TABLE public.tecnicas_pedagogicas (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    categoria TEXT,
    descricao TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Grant permissions
GRANT SELECT ON public.tecnicas_pedagogicas TO anon, authenticated;
GRANT ALL ON public.tecnicas_pedagogicas TO service_role;

-- Enable RLS
ALTER TABLE public.tecnicas_pedagogicas ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (or authenticated only if preferred, but usually pedagogical references are public)
CREATE POLICY "Permitir leitura para todos os usuários" ON public.tecnicas_pedagogicas
    FOR SELECT USING (true);

-- Add updated_at trigger
CREATE TRIGGER update_tecnicas_pedagogicas_updated_at
    BEFORE UPDATE ON public.tecnicas_pedagogicas
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert example data
INSERT INTO public.tecnicas_pedagogicas (nome, categoria, descricao) VALUES
('Método Fônico', 'Alfabetização', 'Foca no som de cada letra e na combinação desses sons para formar sílabas e palavras.'),
('Consciência Fonológica', 'Alfabetização', 'Habilidade de identificar e manipular as unidades sonoras da linguagem falada.'),
('TEACCH', 'Desenvolvimento', 'Tratamento e Educação para Crianças Autistas e com Distúrbios Correlatos da Comunicação.'),
('ABA', 'Desenvolvimento', 'Análise do Comportamento Aplicada, focada em reforço positivo e aprendizagem estruturada.'),
('Neuroeducação', 'Pedagogia', 'Aplicação de conhecimentos da neurociência para otimizar os processos de ensino e aprendizagem.'),
('Vygotsky', 'Pedagogia', 'Teoria Sociointeracionista que enfatiza o papel da cultura e das interações sociais no desenvolvimento.'),
('Gamificação', 'Metodologia', 'Uso de elementos e mecânicas de jogos para engajar e motivar alunos.'),
('Multissensorial', 'Metodologia', 'Ensino que envolve vários sentidos simultaneamente (visão, audição, tato).'),
('Aprendizagem Lúdica', 'Metodologia', 'Aprender através do brincar e de atividades divertidas.'),
('CRA', 'Matemática', 'Abordagem Concreto-Representacional-Abstrata para o ensino de conceitos matemáticos.');