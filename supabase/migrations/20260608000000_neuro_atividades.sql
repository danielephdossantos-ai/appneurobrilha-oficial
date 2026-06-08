-- ============================================================
-- Consultório NeuroBrilha — Tabela de Atividades Clínicas
-- 41 categorias × 30 variações = 1.230 atividades cadastradas
-- ============================================================

CREATE TABLE IF NOT EXISTS neuro_atividades (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  categoria_slug text NOT NULL,
  categoria_nome text NOT NULL,
  grupo text NOT NULL,
  variacao_id text NOT NULL,
  variacao_index integer NOT NULL,
  payload jsonb NOT NULL,
  objetivo text,
  instrucao text,
  nivel_dificuldade integer DEFAULT 1 CHECK (nivel_dificuldade BETWEEN 1 AND 5),
  habilidade_clinica text,
  criado_em timestamp DEFAULT now(),
  UNIQUE(categoria_slug, variacao_id)
);

CREATE INDEX IF NOT EXISTS idx_neuro_ativ_slug ON neuro_atividades(categoria_slug);
CREATE INDEX IF NOT EXISTS idx_neuro_ativ_grupo ON neuro_atividades(grupo);
CREATE INDEX IF NOT EXISTS idx_neuro_ativ_nivel ON neuro_atividades(nivel_dificuldade);

-- ── FONO CLÍNICO ──────────────────────────────────────────────

-- Discriminação Auditiva (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica) VALUES
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-1',1,'{"pista":"Pato","par1":"PATO","par2":"BATO","correta":"PATO","emoji1":"🦆","emoji2":"🦇","ordem":["PATO","BATO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-2',2,'{"pista":"Faca","par1":"FACA","par2":"VACA","correta":"FACA","emoji1":"🔪","emoji2":"🐮","ordem":["FACA","VACA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-3',3,'{"pista":"Gato","par1":"GATO","par2":"RATO","correta":"GATO","emoji1":"🐱","emoji2":"🐭","ordem":["GATO","RATO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',1,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-4',4,'{"pista":"Bola","par1":"BOLA","par2":"COLA","correta":"BOLA","emoji1":"⚽","emoji2":"🧴","ordem":["BOLA","COLA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',1,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-5',5,'{"pista":"Carro","par1":"CARO","par2":"CARRO","correta":"CARRO","emoji1":"💸","emoji2":"🚗","ordem":["CARO","CARRO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-6',6,'{"pista":"Sapo","par1":"SAPO","par2":"TRAPO","correta":"SAPO","emoji1":"🐸","emoji2":"🧹","ordem":["SAPO","TRAPO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-7',7,'{"pista":"Lua","par1":"LUA","par2":"RUA","correta":"LUA","emoji1":"🌙","emoji2":"🛣️","ordem":["LUA","RUA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-8',8,'{"pista":"Mala","par1":"MALA","par2":"FALA","correta":"MALA","emoji1":"🧳","emoji2":"💬","ordem":["MALA","FALA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-9',9,'{"pista":"Peixe","par1":"PEIXE","par2":"LEITE","correta":"PEIXE","emoji1":"🐟","emoji2":"🥛","ordem":["PEIXE","LEITE"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-10',10,'{"pista":"Casa","par1":"CASA","par2":"VAZA","correta":"CASA","emoji1":"🏠","emoji2":"💧","ordem":["CASA","VAZA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-11',11,'{"pista":"Dedo","par1":"DEDO","par2":"MEDO","correta":"DEDO","emoji1":"👆","emoji2":"😨","ordem":["DEDO","MEDO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-12',12,'{"pista":"Flor","par1":"FLOR","par2":"FLAUTA","correta":"FLOR","emoji1":"🌸","emoji2":"🎵","ordem":["FLOR","FLAUTA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-13',13,'{"pista":"Lobo","par1":"LOBO","par2":"LOBO-GUARÁ","correta":"LOBO","emoji1":"🐺","emoji2":"🦊","ordem":["LOBO","LOBO-GUARÁ"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',4,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-14',14,'{"pista":"Trem","par1":"TREM","par2":"TRÊS","correta":"TREM","emoji1":"🚂","emoji2":"3️⃣","ordem":["TREM","TRÊS"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-15',15,'{"pista":"Copo","par1":"COPO","par2":"CORPO","correta":"COPO","emoji1":"🥤","emoji2":"💪","ordem":["COPO","CORPO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-16',16,'{"pista":"Pato","par1":"PATO","par2":"BATO","correta":"PATO","emoji1":"🦆","emoji2":"🦇","ordem":["BATO","PATO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-17',17,'{"pista":"Faca","par1":"FACA","par2":"VACA","correta":"FACA","emoji1":"🔪","emoji2":"🐮","ordem":["VACA","FACA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-18',18,'{"pista":"Gato","par1":"GATO","par2":"RATO","correta":"GATO","emoji1":"🐱","emoji2":"🐭","ordem":["RATO","GATO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',1,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-19',19,'{"pista":"Bola","par1":"BOLA","par2":"COLA","correta":"BOLA","emoji1":"⚽","emoji2":"🧴","ordem":["COLA","BOLA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',1,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-20',20,'{"pista":"Carro","par1":"CARO","par2":"CARRO","correta":"CARRO","emoji1":"💸","emoji2":"🚗","ordem":["CARRO","CARO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-21',21,'{"pista":"Sapo","par1":"SAPO","par2":"TRAPO","correta":"SAPO","emoji1":"🐸","emoji2":"🧹","ordem":["TRAPO","SAPO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-22',22,'{"pista":"Lua","par1":"LUA","par2":"RUA","correta":"LUA","emoji1":"🌙","emoji2":"🛣️","ordem":["RUA","LUA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-23',23,'{"pista":"Mala","par1":"MALA","par2":"FALA","correta":"MALA","emoji1":"🧳","emoji2":"💬","ordem":["FALA","MALA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-24',24,'{"pista":"Peixe","par1":"PEIXE","par2":"LEITE","correta":"PEIXE","emoji1":"🐟","emoji2":"🥛","ordem":["LEITE","PEIXE"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-25',25,'{"pista":"Casa","par1":"CASA","par2":"VAZA","correta":"CASA","emoji1":"🏠","emoji2":"💧","ordem":["VAZA","CASA"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-26',26,'{"pista":"Dedo","par1":"DEDO","par2":"MEDO","correta":"DEDO","emoji1":"👆","emoji2":"😨","ordem":["MEDO","DEDO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',2,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-27',27,'{"pista":"Flor","par1":"FLOR","par2":"FLAUTA","correta":"FLOR","emoji1":"🌸","emoji2":"🎵","ordem":["FLAUTA","FLOR"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-28',28,'{"pista":"Trem","par1":"TREM","par2":"TRÊS","correta":"TREM","emoji1":"🚂","emoji2":"3️⃣","ordem":["TRÊS","TREM"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-29',29,'{"pista":"Copo","par1":"COPO","par2":"CORPO","correta":"COPO","emoji1":"🥤","emoji2":"💪","ordem":["CORPO","COPO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',3,'Discriminação fonêmica'),
('discriminacao-auditiva','Discriminação Auditiva','Fono Clínico','da-30',30,'{"pista":"Gato","par1":"GATO","par2":"RATO","correta":"GATO","emoji1":"🐱","emoji2":"🐭","ordem":["GATO","RATO"]}','Diferenciar pares mínimos de palavras','Escuta a palavra e toque na figura certa.',1,'Discriminação fonêmica')
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- Articulação de Sons (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica) VALUES
('articulacao-sons','Articulação de Sons','Fono Clínico','as-1',1,'{"palavra":"RATO","silabas":["RA","TO"],"emoji":"🐭","fonema":"R","silaba_foco":"RA","nivel":1}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-2',2,'{"palavra":"RODA","silabas":["RO","DA"],"emoji":"⚙️","fonema":"R","silaba_foco":"RO","nivel":1}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-3',3,'{"palavra":"TERRA","silabas":["TER","RA"],"emoji":"🌎","fonema":"R","silaba_foco":"TER","nivel":2}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-4',4,'{"palavra":"CARRO","silabas":["CAR","RO"],"emoji":"🚗","fonema":"R","silaba_foco":"CAR","nivel":2}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-5',5,'{"palavra":"BURRO","silabas":["BUR","RO"],"emoji":"🫏","fonema":"R","silaba_foco":"BUR","nivel":2}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-6',6,'{"palavra":"FLOR","silabas":["FLOR"],"emoji":"🌸","fonema":"R","silaba_foco":"FLOR","nivel":1}','Articulação de fonema R em sílaba fechada','Repita a sílaba em destaque olhando para a figura.',4,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-7',7,'{"palavra":"SAPO","silabas":["SA","PO"],"emoji":"🐸","fonema":"S","silaba_foco":"SA","nivel":1}','Articulação de fonema S','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-8',8,'{"palavra":"SOPA","silabas":["SO","PA"],"emoji":"🍲","fonema":"S","silaba_foco":"SO","nivel":1}','Articulação de fonema S','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-9',9,'{"palavra":"SOL","silabas":["SOL"],"emoji":"☀️","fonema":"S","silaba_foco":"SOL","nivel":1}','Articulação de fonema S em sílaba fechada','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-10',10,'{"palavra":"ZEBRA","silabas":["ZE","BRA"],"emoji":"🦓","fonema":"Z","silaba_foco":"ZE","nivel":2}','Articulação de fonema Z','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-11',11,'{"palavra":"LEÃO","silabas":["LE","ÃO"],"emoji":"🦁","fonema":"L","silaba_foco":"LE","nivel":1}','Articulação de fonema L','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-12',12,'{"palavra":"BOLA","silabas":["BO","LA"],"emoji":"⚽","fonema":"L","silaba_foco":"LA","nivel":1}','Articulação de fonema L','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-13',13,'{"palavra":"LULA","silabas":["LU","LA"],"emoji":"🦑","fonema":"L","silaba_foco":"LU","nivel":1}','Articulação de fonema L','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-14',14,'{"palavra":"PIPA","silabas":["PI","PA"],"emoji":"🪁","fonema":"P","silaba_foco":"PI","nivel":1}','Articulação de fonema P','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-15',15,'{"palavra":"FADA","silabas":["FA","DA"],"emoji":"🧚","fonema":"F","silaba_foco":"FA","nivel":1}','Articulação de fonema F','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-16',16,'{"palavra":"FOCA","silabas":["FO","CA"],"emoji":"🦭","fonema":"F","silaba_foco":"FO","nivel":1}','Articulação de fonema F','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-17',17,'{"palavra":"MOLA","silabas":["MO","LA"],"emoji":"🌀","fonema":"M","silaba_foco":"MO","nivel":1}','Articulação de fonema M','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-18',18,'{"palavra":"NUVEM","silabas":["NU","VEM"],"emoji":"☁️","fonema":"N","silaba_foco":"NU","nivel":2}','Articulação de fonema N','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-19',19,'{"palavra":"VACA","silabas":["VA","CA"],"emoji":"🐮","fonema":"V","silaba_foco":"VA","nivel":1}','Articulação de fonema V','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-20',20,'{"palavra":"TATU","silabas":["TA","TU"],"emoji":"🦔","fonema":"T","silaba_foco":"TA","nivel":1}','Articulação de fonema T','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-21',21,'{"palavra":"RATO","silabas":["RA","TO"],"emoji":"🐭","fonema":"R","silaba_foco":"TO","nivel":1}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-22',22,'{"palavra":"RODA","silabas":["RO","DA"],"emoji":"⚙️","fonema":"R","silaba_foco":"DA","nivel":1}','Articulação de fonema R','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-23',23,'{"palavra":"SAPO","silabas":["SA","PO"],"emoji":"🐸","fonema":"S","silaba_foco":"PO","nivel":1}','Articulação de fonema S','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-24',24,'{"palavra":"LEÃO","silabas":["LE","ÃO"],"emoji":"🦁","fonema":"L","silaba_foco":"ÃO","nivel":2}','Articulação de fonema L em posição final','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-25',25,'{"palavra":"BOLA","silabas":["BO","LA"],"emoji":"⚽","fonema":"L","silaba_foco":"BO","nivel":1}','Articulação de fonema L','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-26',26,'{"palavra":"FOCA","silabas":["FO","CA"],"emoji":"🦭","fonema":"F","silaba_foco":"CA","nivel":1}','Articulação de fonema F','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-27',27,'{"palavra":"VACA","silabas":["VA","CA"],"emoji":"🐮","fonema":"V","silaba_foco":"CA","nivel":1}','Articulação de fonema V','Repita a sílaba em destaque olhando para a figura.',2,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-28',28,'{"palavra":"TATU","silabas":["TA","TU"],"emoji":"🦔","fonema":"T","silaba_foco":"TU","nivel":1}','Articulação de fonema T','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-29',29,'{"palavra":"MOLA","silabas":["MO","LA"],"emoji":"🌀","fonema":"M","silaba_foco":"LA","nivel":1}','Articulação de fonema M','Repita a sílaba em destaque olhando para a figura.',1,'Articulação fonêmica'),
('articulacao-sons','Articulação de Sons','Fono Clínico','as-30',30,'{"palavra":"NUVEM","silabas":["NU","VEM"],"emoji":"☁️","fonema":"N","silaba_foco":"VEM","nivel":2}','Articulação de fonema N em posição final','Repita a sílaba em destaque olhando para a figura.',3,'Articulação fonêmica')
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- ── COORDENAÇÃO MOTORA ────────────────────────────────────────

-- Toque em Sequência (30 amostras representativas)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica)
SELECT
  'toque-sequencia', 'Toque em Sequência', 'Coordenação Motora',
  'ts-' || n, n,
  jsonb_build_object(
    'pontos', jsonb_build_array(
      jsonb_build_object('id',1,'x',15+(n*7)%70,'y',15+(n*11)%70),
      jsonb_build_object('id',2,'x',25+(n*13)%60,'y',35+(n*7)%50),
      jsonb_build_object('id',3,'x',45+(n*5)%40,'y',20+(n*17)%60),
      jsonb_build_object('id',4,'x',60+(n*11)%30,'y',50+(n*9)%40),
      jsonb_build_object('id',5,'x',70+(n*3)%20,'y',25+(n*13)%50)
    ),
    'tempoLimite', 20 + (n % 5) * 5
  ),
  'Sequenciamento motor e planejamento',
  'Toque os pontos em ordem do menor para o maior número.',
  1 + (n % 5),
  'Coordenação visomotora'
FROM generate_series(1, 30) AS n
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- Ritmo de Batidas (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica)
SELECT
  'ritmo-batidas', 'Ritmo de Batidas', 'Coordenação Motora',
  'rb-' || n, n,
  CASE (n % 8)
    WHEN 0 THEN '{"padrao":["●","●"],"durMs":[200,200],"nivel":1}'::jsonb
    WHEN 1 THEN '{"padrao":["●","─"],"durMs":[200,600],"nivel":2}'::jsonb
    WHEN 2 THEN '{"padrao":["─","●","●"],"durMs":[600,200,200],"nivel":2}'::jsonb
    WHEN 3 THEN '{"padrao":["●","●","─"],"durMs":[200,200,600],"nivel":3}'::jsonb
    WHEN 4 THEN '{"padrao":["─","─"],"durMs":[600,600],"nivel":2}'::jsonb
    WHEN 5 THEN '{"padrao":["●","─","●"],"durMs":[200,600,200],"nivel":3}'::jsonb
    WHEN 6 THEN '{"padrao":["●","●","●","─"],"durMs":[200,200,200,600],"nivel":4}'::jsonb
    ELSE '{"padrao":["─","●","─"],"durMs":[600,200,600],"nivel":4}'::jsonb
  END,
  'Coordenação rítmica e memória motora',
  'Memorize o padrão de batidas e reproduza.',
  1 + (n % 5),
  'Memória motora'
FROM generate_series(1, 30) AS n
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- ── ATENÇÃO & CONCENTRAÇÃO ────────────────────────────────────

-- Achar o Diferente (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica)
SELECT
  'achar-diferente', 'Achar o Diferente', 'Atenção & Concentração',
  'ad-' || n, n,
  jsonb_build_object(
    'maioria', CASE (n % 10) WHEN 0 THEN '🔵' WHEN 1 THEN '⭐' WHEN 2 THEN '🐱' WHEN 3 THEN '🍎' WHEN 4 THEN '🌸' WHEN 5 THEN '🚗' WHEN 6 THEN '🟦' WHEN 7 THEN '🦋' WHEN 8 THEN '⬆️' ELSE '🌙' END,
    'diferente', CASE (n % 10) WHEN 0 THEN '🔴' WHEN 1 THEN '🌟' WHEN 2 THEN '🐶' WHEN 3 THEN '🍊' WHEN 4 THEN '🌺' WHEN 5 THEN '🚙' WHEN 6 THEN '🟥' WHEN 7 THEN '🐝' WHEN 8 THEN '⬇️' ELSE '☀️' END,
    'colunas', 3 + (n % 2),
    'posAlvo', (n * 7) % (9 + (n % 4) * 3)
  ),
  'Atenção seletiva e discriminação visual',
  'Encontre o elemento diferente de todos os outros.',
  1 + (n % 5),
  'Atenção seletiva'
FROM generate_series(1, 30) AS n
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- Reação Rápida (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica)
SELECT
  'reacao-rapida', 'Reação Rápida', 'Atenção & Concentração',
  'rr-' || n, n,
  jsonb_build_object(
    'alvo', '🟢',
    'erro', '🔴',
    'intervaloMs', GREATEST(600, 1400 - n * 25),
    'rounds', 5 + (n % 5)
  ),
  'Controle inibitório e tempo de reação (Go/No-Go)',
  'Toque SOMENTE no alvo verde — ignore o vermelho!',
  1 + (n % 5),
  'Controle inibitório'
FROM generate_series(1, 30) AS n
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- ── ALFABETIZAÇÃO ─────────────────────────────────────────────

-- Letra-Som (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica) VALUES
('letra-som','Letra e Som','Alfabetização','ls2-1',1,'{"fonema":"B","correta":"BOLA","imagens":[{"e":"⚽","n":"BOLA"},{"e":"🐱","n":"GATO"},{"e":"☀️","n":"SOL"},{"e":"🌙","n":"LUA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-2',2,'{"fonema":"C","correta":"CASA","imagens":[{"e":"🏠","n":"CASA"},{"e":"🐸","n":"SAPO"},{"e":"🦆","n":"PATO"},{"e":"🌸","n":"FLOR"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-3',3,'{"fonema":"G","correta":"GATO","imagens":[{"e":"🐱","n":"GATO"},{"e":"⚽","n":"BOLA"},{"e":"🚂","n":"TREM"},{"e":"🍎","n":"MAÇÃ"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-4',4,'{"fonema":"P","correta":"PATO","imagens":[{"e":"🦆","n":"PATO"},{"e":"🌙","n":"LUA"},{"e":"🐱","n":"GATO"},{"e":"⭐","n":"ESTRELA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-5',5,'{"fonema":"S","correta":"SOL","imagens":[{"e":"☀️","n":"SOL"},{"e":"🐶","n":"CACHORRO"},{"e":"🏠","n":"CASA"},{"e":"⚽","n":"BOLA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-6',6,'{"fonema":"L","correta":"LUA","imagens":[{"e":"🌙","n":"LUA"},{"e":"🚗","n":"CARRO"},{"e":"🍎","n":"MAÇÃ"},{"e":"🐸","n":"SAPO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-7',7,'{"fonema":"F","correta":"FLOR","imagens":[{"e":"🌸","n":"FLOR"},{"e":"⚽","n":"BOLA"},{"e":"🌙","n":"LUA"},{"e":"🏠","n":"CASA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-8',8,'{"fonema":"M","correta":"MAÇÃ","imagens":[{"e":"🍎","n":"MAÇÃ"},{"e":"🌸","n":"FLOR"},{"e":"⚽","n":"BOLA"},{"e":"🚗","n":"CARRO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-9',9,'{"fonema":"T","correta":"TREM","imagens":[{"e":"🚂","n":"TREM"},{"e":"🐶","n":"CACHORRO"},{"e":"☀️","n":"SOL"},{"e":"🌸","n":"FLOR"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-10',10,'{"fonema":"V","correta":"VACA","imagens":[{"e":"🐮","n":"VACA"},{"e":"⭐","n":"ESTRELA"},{"e":"🍌","n":"BANANA"},{"e":"🏠","n":"CASA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-11',11,'{"fonema":"D","correta":"DEDO","imagens":[{"e":"👆","n":"DEDO"},{"e":"🌙","n":"LUA"},{"e":"⚽","n":"BOLA"},{"e":"🐱","n":"GATO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-12',12,'{"fonema":"N","correta":"NUVEM","imagens":[{"e":"☁️","n":"NUVEM"},{"e":"🍎","n":"MAÇÃ"},{"e":"🚗","n":"CARRO"},{"e":"🌸","n":"FLOR"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-13',13,'{"fonema":"R","correta":"RATO","imagens":[{"e":"🐭","n":"RATO"},{"e":"🐱","n":"GATO"},{"e":"🏠","n":"CASA"},{"e":"☀️","n":"SOL"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',3,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-14',14,'{"fonema":"J","correta":"JANELA","imagens":[{"e":"🪟","n":"JANELA"},{"e":"⚽","n":"BOLA"},{"e":"🐸","n":"SAPO"},{"e":"🌙","n":"LUA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',3,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-15',15,'{"fonema":"Z","correta":"ZEBRA","imagens":[{"e":"🦓","n":"ZEBRA"},{"e":"🍎","n":"MAÇÃ"},{"e":"🐱","n":"GATO"},{"e":"🏠","n":"CASA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',3,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-16',16,'{"fonema":"B","correta":"BOLA","imagens":[{"e":"⚽","n":"BOLA"},{"e":"🌸","n":"FLOR"},{"e":"🐮","n":"VACA"},{"e":"🚗","n":"CARRO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-17',17,'{"fonema":"C","correta":"CARRO","imagens":[{"e":"🚗","n":"CARRO"},{"e":"🐸","n":"SAPO"},{"e":"🌙","n":"LUA"},{"e":"⚽","n":"BOLA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-18',18,'{"fonema":"G","correta":"GALO","imagens":[{"e":"🐓","n":"GALO"},{"e":"⚽","n":"BOLA"},{"e":"☀️","n":"SOL"},{"e":"🐱","n":"GATO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-19',19,'{"fonema":"P","correta":"PEIXE","imagens":[{"e":"🐟","n":"PEIXE"},{"e":"🌸","n":"FLOR"},{"e":"🚂","n":"TREM"},{"e":"🐱","n":"GATO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-20',20,'{"fonema":"S","correta":"SAPO","imagens":[{"e":"🐸","n":"SAPO"},{"e":"🌙","n":"LUA"},{"e":"🏠","n":"CASA"},{"e":"⭐","n":"ESTRELA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-21',21,'{"fonema":"L","correta":"LEÃO","imagens":[{"e":"🦁","n":"LEÃO"},{"e":"🍌","n":"BANANA"},{"e":"🐮","n":"VACA"},{"e":"🌸","n":"FLOR"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-22',22,'{"fonema":"F","correta":"FOCA","imagens":[{"e":"🦭","n":"FOCA"},{"e":"🐸","n":"SAPO"},{"e":"⚽","n":"BOLA"},{"e":"☀️","n":"SOL"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-23',23,'{"fonema":"M","correta":"MAÇÃ","imagens":[{"e":"🍎","n":"MAÇÃ"},{"e":"🦁","n":"LEÃO"},{"e":"🌙","n":"LUA"},{"e":"🚗","n":"CARRO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-24',24,'{"fonema":"T","correta":"TATU","imagens":[{"e":"🦔","n":"TATU"},{"e":"🌸","n":"FLOR"},{"e":"⚽","n":"BOLA"},{"e":"🏠","n":"CASA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-25',25,'{"fonema":"V","correta":"VOVÓ","imagens":[{"e":"👵","n":"VOVÓ"},{"e":"🐱","n":"GATO"},{"e":"🍎","n":"MAÇÃ"},{"e":"☀️","n":"SOL"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-26',26,'{"fonema":"B","correta":"BANANA","imagens":[{"e":"🍌","n":"BANANA"},{"e":"🌸","n":"FLOR"},{"e":"🚗","n":"CARRO"},{"e":"🌙","n":"LUA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',1,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-27',27,'{"fonema":"C","correta":"CAVALO","imagens":[{"e":"🐴","n":"CAVALO"},{"e":"🐸","n":"SAPO"},{"e":"⭐","n":"ESTRELA"},{"e":"🍎","n":"MAÇÃ"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-28',28,'{"fonema":"P","correta":"PORTA","imagens":[{"e":"🚪","n":"PORTA"},{"e":"⚽","n":"BOLA"},{"e":"🌙","n":"LUA"},{"e":"🐱","n":"GATO"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-29',29,'{"fonema":"A","correta":"ABELHA","imagens":[{"e":"🐝","n":"ABELHA"},{"e":"🚂","n":"TREM"},{"e":"🌸","n":"FLOR"},{"e":"🐮","n":"VACA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica'),
('letra-som','Letra e Som','Alfabetização','ls2-30',30,'{"fonema":"E","correta":"ELEFANTE","imagens":[{"e":"🐘","n":"ELEFANTE"},{"e":"🏠","n":"CASA"},{"e":"🍕","n":"PIZZA"},{"e":"⚽","n":"BOLA"}]}','Consciência fonêmica e correspondência letra-som','Toque na figura que começa com este som.',2,'Consciência fonológica')
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- Formando Palavras (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica) VALUES
('formando-palavras','Formando Palavras','Alfabetização','fp-1',1,'{"palavra":"BOLA","silabas":["BO","LA"],"embaralhadas":["LA","BO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-2',2,'{"palavra":"GATO","silabas":["GA","TO"],"embaralhadas":["TO","GA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-3',3,'{"palavra":"CASA","silabas":["CA","SA"],"embaralhadas":["SA","CA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-4',4,'{"palavra":"PATO","silabas":["PA","TO"],"embaralhadas":["TO","PA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-5',5,'{"palavra":"FACA","silabas":["FA","CA"],"embaralhadas":["CA","FA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-6',6,'{"palavra":"BOLO","silabas":["BO","LO"],"embaralhadas":["LO","BO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-7',7,'{"palavra":"MALA","silabas":["MA","LA"],"embaralhadas":["LA","MA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-8',8,'{"palavra":"SALA","silabas":["SA","LA"],"embaralhadas":["LA","SA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-9',9,'{"palavra":"FADA","silabas":["FA","DA"],"embaralhadas":["DA","FA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-10',10,'{"palavra":"LUPA","silabas":["LU","PA"],"embaralhadas":["PA","LU"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-11',11,'{"palavra":"BANANA","silabas":["BA","NA","NA"],"embaralhadas":["NA","BA","NA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-12',12,'{"palavra":"BONECA","silabas":["BO","NE","CA"],"embaralhadas":["CA","BO","NE"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-13',13,'{"palavra":"CAVALO","silabas":["CA","VA","LO"],"embaralhadas":["LO","CA","VA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-14',14,'{"palavra":"SAPATO","silabas":["SA","PA","TO"],"embaralhadas":["TO","SA","PA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-15',15,'{"palavra":"JANELA","silabas":["JA","NE","LA"],"embaralhadas":["LA","JA","NE"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-16',16,'{"palavra":"BORBOLETA","silabas":["BOR","BO","LE","TA"],"embaralhadas":["TA","BOR","LE","BO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-17',17,'{"palavra":"DINOSSAURO","silabas":["DI","NOS","SAU","RO"],"embaralhadas":["RO","DI","SAU","NOS"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-18',18,'{"palavra":"ELEFANTE","silabas":["E","LE","FAN","TE"],"embaralhadas":["TE","E","FAN","LE"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-19',19,'{"palavra":"TARTARUGA","silabas":["TAR","TA","RU","GA"],"embaralhadas":["GA","TAR","RU","TA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-20',20,'{"palavra":"CHOCOLATE","silabas":["CHO","CO","LA","TE"],"embaralhadas":["TE","CHO","LA","CO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-21',21,'{"palavra":"BOLA","silabas":["BO","LA"],"embaralhadas":["BO","LA"]}','Montagem de palavras com sílabas — ordem correta','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-22',22,'{"palavra":"GATO","silabas":["GA","TO"],"embaralhadas":["GA","TO"]}','Montagem de palavras com sílabas — ordem correta','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-23',23,'{"palavra":"SAPO","silabas":["SA","PO"],"embaralhadas":["PO","SA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-24',24,'{"palavra":"RATO","silabas":["RA","TO"],"embaralhadas":["TO","RA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-25',25,'{"palavra":"LOBO","silabas":["LO","BO"],"embaralhadas":["BO","LO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',1,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-26',26,'{"palavra":"MAÇÃ","silabas":["MA","ÇÃ"],"embaralhadas":["ÇÃ","MA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-27',27,'{"palavra":"ESCOLA","silabas":["ES","CO","LA"],"embaralhadas":["LA","ES","CO"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-28',28,'{"palavra":"MENINO","silabas":["ME","NI","NO"],"embaralhadas":["NO","ME","NI"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-29',29,'{"palavra":"GIRAFA","silabas":["GI","RA","FA"],"embaralhadas":["FA","GI","RA"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',2,'Síntese silábica'),
('formando-palavras','Formando Palavras','Alfabetização','fp-30',30,'{"palavra":"CADERNO","silabas":["CA","DER","NO"],"embaralhadas":["NO","CA","DER"]}','Montagem de palavras com sílabas','Toque nas sílabas na ordem certa para formar a palavra.',3,'Síntese silábica')
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;

-- Completar Letra (30)
INSERT INTO neuro_atividades (categoria_slug, categoria_nome, grupo, variacao_id, variacao_index, payload, objetivo, instrucao, nivel_dificuldade, habilidade_clinica) VALUES
('completar-letra','Completar a Letra','Alfabetização','cl-1',1,'{"palavra":"_ATO","letra":"G","outras":["P","R","B"],"resultado":"GATO","emoji":"🐱","opts":["G","P","R","B"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-2',2,'{"palavra":"BO_A","letra":"L","outras":["N","R","D"],"resultado":"BOLA","emoji":"⚽","opts":["L","N","R","D"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-3',3,'{"palavra":"CA_A","letra":"S","outras":["M","R","P"],"resultado":"CASA","emoji":"🏠","opts":["S","M","R","P"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-4',4,'{"palavra":"_LOR","letra":"F","outras":["C","B","P"],"resultado":"FLOR","emoji":"🌸","opts":["F","C","B","P"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-5',5,'{"palavra":"SO_","letra":"L","outras":["M","R","N"],"resultado":"SOL","emoji":"☀️","opts":["L","M","R","N"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-6',6,'{"palavra":"MA_Ã","letra":"Ç","outras":["S","T","R"],"resultado":"MAÇÃ","emoji":"🍎","opts":["Ç","S","T","R"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',3,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-7',7,'{"palavra":"PA_O","letra":"T","outras":["G","R","N"],"resultado":"PATO","emoji":"🦆","opts":["T","G","R","N"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-8',8,'{"palavra":"_UZ","letra":"L","outras":["M","R","N"],"resultado":"LUZ","emoji":"💡","opts":["L","M","R","N"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-9',9,'{"palavra":"PE_XE","letra":"I","outras":["A","U","E"],"resultado":"PEIXE","emoji":"🐟","opts":["I","A","U","E"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-10',10,'{"palavra":"CA_RO","letra":"R","outras":["L","M","N"],"resultado":"CARRO","emoji":"🚗","opts":["R","L","M","N"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',3,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-11',11,'{"palavra":"T_EM","letra":"R","outras":["L","N","M"],"resultado":"TREM","emoji":"🚂","opts":["R","L","N","M"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-12',12,'{"palavra":"_UA","letra":"L","outras":["R","N","M"],"resultado":"LUA","emoji":"🌙","opts":["L","R","N","M"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-13',13,'{"palavra":"_ATO","letra":"P","outras":["G","R","B"],"resultado":"PATO","emoji":"🦆","opts":["P","G","R","B"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-14',14,'{"palavra":"_OL","letra":"S","outras":["M","B","G"],"resultado":"SOL","emoji":"☀️","opts":["S","M","B","G"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-15',15,'{"palavra":"_ATO","letra":"R","outras":["G","P","B"],"resultado":"RATO","emoji":"🐭","opts":["R","G","P","B"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-16',16,'{"palavra":"BO_A","letra":"L","outras":["N","R","D"],"resultado":"BOLA","emoji":"⚽","opts":["N","L","R","D"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-17',17,'{"palavra":"_AÇÃ","letra":"M","outras":["F","P","B"],"resultado":"MAÇÃ","emoji":"🍎","opts":["M","F","P","B"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-18',18,'{"palavra":"GA_O","letra":"T","outras":["S","R","N"],"resultado":"GATO","emoji":"🐱","opts":["T","S","R","N"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-19',19,'{"palavra":"_LOR","letra":"F","outras":["B","P","C"],"resultado":"FLOR","emoji":"🌸","opts":["B","F","P","C"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-20',20,'{"palavra":"CA_A","letra":"S","outras":["P","R","M"],"resultado":"CASA","emoji":"🏠","opts":["P","S","R","M"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-21',21,'{"palavra":"_APATO","letra":"S","outras":["C","B","T"],"resultado":"SAPATO","emoji":"👟","opts":["S","C","B","T"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-22',22,'{"palavra":"BO_ECA","letra":"N","outras":["M","L","R"],"resultado":"BONECA","emoji":"🪆","opts":["N","M","L","R"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',3,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-23',23,'{"palavra":"_IRAFA","letra":"G","outras":["C","B","T"],"resultado":"GIRAFA","emoji":"🦒","opts":["G","C","B","T"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-24',24,'{"palavra":"JAR_IM","letra":"D","outras":["T","N","M"],"resultado":"JARDIM","emoji":"🌷","opts":["D","T","N","M"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',3,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-25',25,'{"palavra":"_IA","letra":"D","outras":["G","B","C"],"resultado":"DIA","emoji":"☀️","opts":["D","G","B","C"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',1,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-26',26,'{"palavra":"MA_ELA","letra":"R","outras":["N","L","D"],"resultado":"MARELA","emoji":"🎨","opts":["R","N","L","D"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',3,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-27',27,'{"palavra":"_AVALO","letra":"C","outras":["B","G","T"],"resultado":"CAVALO","emoji":"🐴","opts":["C","B","G","T"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-28',28,'{"palavra":"ES_OLA","letra":"C","outras":["B","T","G"],"resultado":"ESCOLA","emoji":"🏫","opts":["C","B","T","G"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-29',29,'{"palavra":"_EIXE","letra":"P","outras":["L","R","M"],"resultado":"PEIXE","emoji":"🐟","opts":["P","L","R","M"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',2,'Consciência fonológica'),
('completar-letra','Completar a Letra','Alfabetização','cl-30',30,'{"palavra":"_NIVERSO","letra":"U","outras":["A","E","I"],"resultado":"UNIVERSO","emoji":"🌌","opts":["U","A","E","I"]}','Análise fonêmica e escrita de palavras','Toque na letra que falta para completar a palavra.',4,'Consciência fonológica')
ON CONFLICT (categoria_slug, variacao_id) DO NOTHING;
