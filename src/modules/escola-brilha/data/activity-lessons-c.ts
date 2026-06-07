import { ActivityLessonC } from '../types/activity-lesson-c';

/* ─── 6º ANO ─── */

export const OCEANOS_LESSON: ActivityLessonC = {
  id: 'oceanos-6ano',
  title: 'Oceanos e Clima',
  mission_question: 'Por que os oceanos são importantes para o planeta?',
  subject: 'Ciências da Natureza',
  area: 'ciencias_natureza',
  area_label: 'Ciências',
  grade: '6º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF06CI04',
  bncc_description: 'Compreender a importância dos oceanos na regulação climática e na biodiversidade.',
  xp: 230,
  color: { from: 'from-blue-700', to: 'to-cyan-600', accent: 'blue' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Entender o papel dos oceanos',
        'Descobrir sua importância para o clima',
        'Aplicar seus conhecimentos',
      ],
      context_emoji: '🌊',
      context_text: 'Os oceanos cobrem mais de 70% da superfície da Terra.',
    },
    exploracao: {
      instruction: 'Explore as informações abaixo.',
      texto: 'Os oceanos são importantes porque regulam a temperatura do planeta, absorvem grande parte do CO₂ atmosférico e abrigam mais de 80% de todos os seres vivos da Terra.',
      pontos_destaque: [
        { emoji: '💨', text: 'Produzem grande parte do oxigênio que respiramos.' },
        { emoji: '🌡️', text: 'Regulam o clima do planeta.' },
        { emoji: '🐟', text: 'São fonte de alimentos para bilhões de pessoas.' },
        { emoji: '🪸', text: 'Abrigam enorme biodiversidade.' },
      ],
      mascot_tip: 'Sempre que precisar, eu apareço para te ajudar!',
    },
    pontos_chave: {
      intro: 'Os oceanos são importantes porque:',
      points: [
        { icon: '🌡️', title: 'Regulação Climática', text: 'Absorvem calor e distribuem temperatura pelo planeta.' },
        { icon: '💧', title: 'Ciclo da Água', text: 'Evaporação dos oceanos forma as nuvens e as chuvas.' },
        { icon: '🌿', title: 'Produção de Oxigênio', text: 'Algas e fitoplâncton produzem +50% do oxigênio terrestre.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'As correntes marinhas ajudam a distribuir o calor pelo planeta.',
      scenario_emoji: '🗺️',
      analysis: [
        'A Corrente do Golfo esquenta o norte da Europa.',
        'Sem ela, países como o Reino Unido seriam muito mais frios.',
      ],
      conclusion: 'Isso influencia o clima de diversas regiões!',
    },
    desafio: {
      question: 'Qual alternativa melhor explica por que os oceanos regulam o clima do planeta?',
      options: [
        { letter: 'A', text: 'Porque absorvem e liberam calor de forma equilibrada.', isCorrect: true },
        { letter: 'B', text: 'Porque produzem ventos fortes.', isCorrect: false },
        { letter: 'C', text: 'Porque influenciam apenas as regiões costeiras.', isCorrect: false },
        { letter: 'D', text: 'Porque formam nuvens o tempo todo.', isCorrect: false },
      ],
      explanation: 'Os oceanos absorvem calor durante o dia e o liberam à noite, equilibrando as temperaturas globais.',
    },
  },
};

export const BIOMAS_LESSON: ActivityLessonC = {
  id: 'biomas-6ano',
  title: 'Biomas Brasileiros',
  mission_question: 'Quais são os principais biomas do Brasil e suas características?',
  subject: 'Geografia',
  area: 'ciencias_humanas',
  area_label: 'Geografia',
  grade: '6º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF06GE08',
  bncc_description: 'Identificar os principais biomas brasileiros e suas características geográficas.',
  xp: 220,
  color: { from: 'from-green-700', to: 'to-emerald-600', accent: 'green' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Conhecer os 6 biomas do Brasil',
        'Entender as características de cada bioma',
        'Relacionar bioma e fauna/flora',
      ],
      context_emoji: '🌎',
      context_text: 'O Brasil abriga 6 biomas terrestres e é o país com maior biodiversidade do mundo.',
    },
    exploracao: {
      instruction: 'Explore os biomas abaixo.',
      texto: 'Os biomas são grandes regiões geográficas com clima, flora e fauna específicos. O Brasil possui a Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal.',
      pontos_destaque: [
        { emoji: '🌳', text: 'Amazônia: maior floresta tropical do mundo.' },
        { emoji: '🌾', text: 'Cerrado: savana mais biodiversa do planeta.' },
        { emoji: '🏜️', text: 'Caatinga: único bioma exclusivamente brasileiro.' },
        { emoji: '🐊', text: 'Pantanal: maior área úmida do mundo.' },
      ],
      mascot_tip: 'Cada bioma tem animais e plantas únicos — protegê-los é essencial!',
    },
    pontos_chave: {
      intro: 'O que você precisa saber:',
      points: [
        { icon: '🌿', title: 'Diversidade', text: 'Cada bioma tem espécies de animais e plantas exclusivas.' },
        { icon: '⚠️', title: 'Ameaças', text: 'Desmatamento e queimadas destroem habitats inteiros.' },
        { icon: '🔬', title: 'Importância', text: 'Os biomas regulam o clima, a água e o ar que respiramos.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'A onça-pintada vive principalmente na Amazônia e no Pantanal.',
      scenario_emoji: '🐆',
      analysis: [
        'Ela precisa de grandes áreas preservadas para sobreviver.',
        'O desmatamento fragmenta seu habitat, ameaçando a espécie.',
      ],
      conclusion: 'Preservar o bioma é preservar a vida!',
    },
    desafio: {
      question: 'Qual bioma é exclusivamente brasileiro, ou seja, só existe no Brasil?',
      options: [
        { letter: 'A', text: 'Amazônia', isCorrect: false },
        { letter: 'B', text: 'Cerrado', isCorrect: false },
        { letter: 'C', text: 'Caatinga', isCorrect: true },
        { letter: 'D', text: 'Pampa', isCorrect: false },
      ],
      explanation: 'A Caatinga é o único bioma exclusivamente brasileiro, com vegetação adaptada ao clima semiárido.',
    },
  },
};

/* ─── 7º ANO ─── */

export const CELULAS_LESSON: ActivityLessonC = {
  id: 'celulas-7ano',
  title: 'Células e Organismos',
  mission_question: 'O que são células e qual é o seu papel nos seres vivos?',
  subject: 'Ciências da Natureza',
  area: 'ciencias_natureza',
  area_label: 'Ciências',
  grade: '7º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF07CI10',
  bncc_description: 'Conceituar célula como unidade básica dos seres vivos e identificar suas estruturas.',
  xp: 240,
  color: { from: 'from-violet-700', to: 'to-purple-600', accent: 'violet' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Entender o que é uma célula',
        'Conhecer as partes da célula',
        'Diferenciar células procariontes e eucariontes',
      ],
      context_emoji: '🔬',
      context_text: 'Todas as formas de vida são compostas por células — as unidades básicas da vida.',
    },
    exploracao: {
      instruction: 'Explore as informações sobre células.',
      texto: 'A célula é a menor unidade estrutural e funcional dos seres vivos. Ela realiza todas as funções vitais: nutrição, respiração, reprodução e excreção.',
      pontos_destaque: [
        { emoji: '🧬', text: 'O núcleo contém o DNA com as informações genéticas.' },
        { emoji: '⚡', text: 'As mitocôndrias produzem energia para a célula.' },
        { emoji: '🟢', text: 'Os ribossomos fabricam proteínas.' },
        { emoji: '🛡️', text: 'A membrana controla o que entra e sai da célula.' },
      ],
      mascot_tip: 'Pense na célula como uma mini-cidade com departamentos especializados!',
    },
    pontos_chave: {
      intro: 'Estruturas essenciais da célula:',
      points: [
        { icon: '🧬', title: 'Núcleo', text: 'Centro de controle — contém o DNA e dirige as atividades celulares.' },
        { icon: '⚡', title: 'Mitocôndria', text: 'A "usina de energia" — transforma nutrientes em ATP.' },
        { icon: '🛡️', title: 'Membrana Plasmática', text: 'Controla a entrada e saída de substâncias na célula.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'Uma bactéria e uma célula humana são bem diferentes.',
      scenario_emoji: '🦠',
      analysis: [
        'Bactérias: células procariontes — sem núcleo definido.',
        'Células humanas: eucariontes — com núcleo e organelas.',
      ],
      conclusion: 'Essa diferença é usada por antibióticos para combater bactérias sem afetar nossas células!',
    },
    desafio: {
      question: 'Qual organela celular é responsável pela produção de energia?',
      options: [
        { letter: 'A', text: 'Núcleo', isCorrect: false },
        { letter: 'B', text: 'Ribossomo', isCorrect: false },
        { letter: 'C', text: 'Mitocôndria', isCorrect: true },
        { letter: 'D', text: 'Membrana plasmática', isCorrect: false },
      ],
      explanation: 'A mitocôndria realiza a respiração celular, transformando glicose em energia (ATP) para a célula.',
    },
  },
};

export const EQUACOES_LESSON: ActivityLessonC = {
  id: 'equacoes-7ano',
  title: 'Equações de 1º Grau',
  mission_question: 'Como resolver equações do 1º grau usando o pensamento algébrico?',
  subject: 'Matemática',
  area: 'matematica',
  area_label: 'Matemática',
  grade: '7º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF07MA18',
  bncc_description: 'Resolver e elaborar problemas que envolvam equações do 1º grau.',
  xp: 250,
  color: { from: 'from-amber-700', to: 'to-orange-600', accent: 'amber' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Entender o que é uma equação',
        'Identificar incógnita, membro e solução',
        'Resolver equações do 1º grau',
      ],
      context_emoji: '🧮',
      context_text: 'Equações são a base da álgebra — usamos elas todo dia sem perceber!',
    },
    exploracao: {
      instruction: 'Explore o conceito de equação.',
      texto: 'Uma equação do 1º grau tem a forma ax + b = c, onde x é a incógnita (o valor que queremos descobrir). Para resolver, isolamos o x usando operações inversas.',
      pontos_destaque: [
        { emoji: '❓', text: 'A incógnita (x) é o valor desconhecido.' },
        { emoji: '⚖️', text: 'O sinal "=" indica equilíbrio entre os dois lados.' },
        { emoji: '↔️', text: 'Operações inversas: soma/subtração, multiplicação/divisão.' },
        { emoji: '✅', text: 'A solução é o valor de x que torna a equação verdadeira.' },
      ],
      mascot_tip: 'Pense na equação como uma balança — o que fizer de um lado, faz do outro!',
    },
    pontos_chave: {
      intro: 'Passo a passo para resolver:',
      points: [
        { icon: '1️⃣', title: 'Isolar a incógnita', text: 'Mova todos os termos com x para um lado da equação.' },
        { icon: '2️⃣', title: 'Operações inversas', text: 'Use + para cancelar −, e × para cancelar ÷.' },
        { icon: '3️⃣', title: 'Verificar', text: 'Substitua o valor de x na equação original para conferir.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'Resolva: 2x + 4 = 12',
      scenario_emoji: '📐',
      analysis: [
        '2x + 4 = 12 → subtraia 4 dos dois lados',
        '2x = 8 → divida os dois lados por 2',
        'x = 4 ✅',
      ],
      conclusion: 'Verificando: 2(4) + 4 = 8 + 4 = 12 ✓',
    },
    desafio: {
      question: 'Qual é o valor de x na equação: 3x − 6 = 9?',
      options: [
        { letter: 'A', text: 'x = 3', isCorrect: false },
        { letter: 'B', text: 'x = 4', isCorrect: false },
        { letter: 'C', text: 'x = 5', isCorrect: true },
        { letter: 'D', text: 'x = 6', isCorrect: false },
      ],
      explanation: '3x − 6 = 9 → 3x = 15 → x = 5. Verificando: 3(5) − 6 = 15 − 6 = 9 ✓',
    },
  },
};

/* ─── 8º ANO ─── */

export const REVOLUCAO_LESSON: ActivityLessonC = {
  id: 'revolucao-industrial-8ano',
  title: 'Revolução Industrial',
  mission_question: 'Como a Revolução Industrial transformou a sociedade e o mundo do trabalho?',
  subject: 'História',
  area: 'ciencias_humanas',
  area_label: 'História',
  grade: '8º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF08HI13',
  bncc_description: 'Analisar as transformações sociais, econômicas e culturais decorrentes da Revolução Industrial.',
  xp: 260,
  color: { from: 'from-stone-700', to: 'to-zinc-600', accent: 'stone' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Entender as causas da Revolução Industrial',
        'Analisar as mudanças no trabalho e na sociedade',
        'Relacionar com o mundo atual',
      ],
      context_emoji: '🏭',
      context_text: 'Séculos XVIII e XIX — a Inglaterra criou a maior transformação econômica da história moderna.',
    },
    exploracao: {
      instruction: 'Explore o contexto histórico.',
      texto: 'A Revolução Industrial começou na Inglaterra no século XVIII, com a invenção da máquina a vapor. Ela substituiu o trabalho artesanal pelas fábricas, criou o proletariado urbano e transformou a economia global.',
      pontos_destaque: [
        { emoji: '♨️', text: 'Máquina a vapor: motor da industrialização.' },
        { emoji: '🏙️', text: 'Urbanização acelerada e crescimento das cidades.' },
        { emoji: '⚙️', text: 'Surgimento do trabalho assalariado e das fábricas.' },
        { emoji: '📉', text: 'Condições de trabalho precárias — exploração e trabalho infantil.' },
      ],
      mascot_tip: 'Muitos direitos trabalhistas de hoje surgiram como resposta às condições desta época!',
    },
    pontos_chave: {
      intro: 'Consequências da Revolução Industrial:',
      points: [
        { icon: '👷', title: 'Nova Classe Social', text: 'Surgimento do proletariado — trabalhadores assalariados das fábricas.' },
        { icon: '🌍', title: 'Imperialismo', text: 'Europa buscou matéria-prima e mercados consumidores na Ásia e na África.' },
        { icon: '🔬', title: 'Avanço Tecnológico', text: 'Inovações como trem, telégrafo e eletricidade transformaram o cotidiano.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'Uma criança de 8 anos trabalhava 14h por dia em minas de carvão na Inglaterra do século XIX.',
      scenario_emoji: '⚫',
      analysis: [
        'Sem direitos trabalhistas, sem proteção legal.',
        'Isso gerou movimentos operários e leis de proteção ao trabalho.',
      ],
      conclusion: 'Hoje temos a CLT e leis que proíbem o trabalho infantil graças a essas lutas!',
    },
    desafio: {
      question: 'Qual foi a principal inovação tecnológica que impulsionou a Revolução Industrial?',
      options: [
        { letter: 'A', text: 'O avião', isCorrect: false },
        { letter: 'B', text: 'A máquina a vapor', isCorrect: true },
        { letter: 'C', text: 'A eletricidade', isCorrect: false },
        { letter: 'D', text: 'O computador', isCorrect: false },
      ],
      explanation: 'A máquina a vapor, inventada por James Watt em 1769, foi a grande força motriz da industrialização, movendo fábricas, trens e navios.',
    },
  },
};

export const SISTEMA_NERVOSO_LESSON: ActivityLessonC = {
  id: 'sistema-nervoso-8ano',
  title: 'Sistema Nervoso',
  mission_question: 'Como o sistema nervoso controla todas as funções do nosso corpo?',
  subject: 'Ciências da Natureza',
  area: 'ciencias_natureza',
  area_label: 'Ciências',
  grade: '8º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF08CI08',
  bncc_description: 'Comparar o modo de ação e a eficiência dos sistemas nervoso e endócrino na coordenação do organismo.',
  xp: 250,
  color: { from: 'from-indigo-700', to: 'to-blue-600', accent: 'indigo' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Identificar as partes do sistema nervoso',
        'Entender como os neurônios transmitem sinais',
        'Analisar respostas reflexas e voluntárias',
      ],
      context_emoji: '🧠',
      context_text: 'Seu cérebro processa 70.000 pensamentos por dia e transmite sinais a 400 km/h!',
    },
    exploracao: {
      instruction: 'Explore o sistema nervoso.',
      texto: 'O sistema nervoso é formado pelo encéfalo (cérebro, cerebelo e bulbo), pela medula espinhal e pelos nervos periféricos. Ele coordena todas as funções do organismo, recebendo e enviando sinais através dos neurônios.',
      pontos_destaque: [
        { emoji: '🧠', text: 'Cérebro: controla pensamento, memória e emoções.' },
        { emoji: '⚖️', text: 'Cerebelo: coordena movimentos e equilíbrio.' },
        { emoji: '🔌', text: 'Medula espinhal: conduz impulsos entre o cérebro e o corpo.' },
        { emoji: '⚡', text: 'Neurônios: células que transmitem impulsos elétricos.' },
      ],
      mascot_tip: 'O reflexo de tirar a mão do fogo acontece antes do cérebro pensar — é a medula espinhal agindo!',
    },
    pontos_chave: {
      intro: 'Divisões do sistema nervoso:',
      points: [
        { icon: '🧠', title: 'Sistema Nervoso Central (SNC)', text: 'Composto por encéfalo e medula espinhal — processa informações.' },
        { icon: '🔗', title: 'Sistema Nervoso Periférico (SNP)', text: 'Nervos que ligam o SNC ao restante do corpo.' },
        { icon: '🤖', title: 'Sistema Nervoso Autônomo', text: 'Controla funções involuntárias: batimentos, respiração, digestão.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'Você toca em uma frigideira quente.',
      scenario_emoji: '🔥',
      analysis: [
        '1. Receptores na pele detectam o calor.',
        '2. Sinal vai para a medula → mão recua (reflexo).',
        '3. Em seguida, o cérebro processa a dor.',
      ],
      conclusion: 'O arco reflexo protege o corpo antes mesmo da consciência agir!',
    },
    desafio: {
      question: 'Qual parte do sistema nervoso é responsável por coordenar o equilíbrio e os movimentos precisos?',
      options: [
        { letter: 'A', text: 'Cérebro', isCorrect: false },
        { letter: 'B', text: 'Medula espinhal', isCorrect: false },
        { letter: 'C', text: 'Cerebelo', isCorrect: true },
        { letter: 'D', text: 'Bulbo', isCorrect: false },
      ],
      explanation: 'O cerebelo coordena os movimentos voluntários, o equilíbrio e a postura corporal.',
    },
  },
};

/* ─── 9º ANO ─── */

export const GENETICA_LESSON: ActivityLessonC = {
  id: 'genetica-9ano',
  title: 'Genética e Hereditariedade',
  mission_question: 'Como as características dos pais são transmitidas para os filhos?',
  subject: 'Ciências da Natureza',
  area: 'ciencias_natureza',
  area_label: 'Ciências',
  grade: '9º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF09CI08',
  bncc_description: 'Analisar o papel do DNA na transmissão das características hereditárias, identificando as leis de Mendel.',
  xp: 280,
  color: { from: 'from-pink-700', to: 'to-rose-600', accent: 'pink' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Entender o DNA e os genes',
        'Conhecer as Leis de Mendel',
        'Analisar dominância e recessividade',
      ],
      context_emoji: '🧬',
      context_text: 'Gregor Mendel descobriu as leis da hereditariedade estudando ervilhas no século XIX.',
    },
    exploracao: {
      instruction: 'Explore os conceitos de genética.',
      texto: 'A genética estuda como as características são transmitidas de pais para filhos. Os genes, localizados no DNA, carregam essas informações. Mendel descobriu que os genes se apresentam em pares — um dominante e um recessivo.',
      pontos_destaque: [
        { emoji: '🧬', text: 'DNA: molécula que armazena informações genéticas.' },
        { emoji: '🔤', text: 'Gene: trecho do DNA que determina uma característica.' },
        { emoji: '👑', text: 'Gene dominante: se expressa mesmo em apenas uma cópia.' },
        { emoji: '🤫', text: 'Gene recessivo: só se expressa em duas cópias.' },
      ],
      mascot_tip: 'A cor dos olhos, o tipo sanguíneo e até algumas doenças seguem essas leis!',
    },
    pontos_chave: {
      intro: 'Conceitos fundamentais:',
      points: [
        { icon: '🧬', title: 'Genótipo x Fenótipo', text: 'Genótipo = genes que você possui. Fenótipo = característica visível.' },
        { icon: '👑', title: '1ª Lei de Mendel', text: 'Cada característica é determinada por um par de fatores que se separam na formação dos gametas.' },
        { icon: '🎲', title: '2ª Lei de Mendel', text: 'Diferentes características são herdadas de forma independente entre si.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'Cruzamento de ervilhas: flor roxa (PP) × flor branca (pp)',
      scenario_emoji: '🌸',
      analysis: [
        'Todos os filhos da 1ª geração: Pp → flores roxas.',
        '2ª geração: PP (25%), Pp (50%), pp (25%).',
        'Resultado: 75% roxas e 25% brancas.',
      ],
      conclusion: 'O gene para flor roxa é dominante sobre o branco!',
    },
    desafio: {
      question: 'Um indivíduo com genótipo Aa é chamado de:',
      options: [
        { letter: 'A', text: 'Homozigoto dominante', isCorrect: false },
        { letter: 'B', text: 'Homozigoto recessivo', isCorrect: false },
        { letter: 'C', text: 'Heterozigoto', isCorrect: true },
        { letter: 'D', text: 'Alelo múltiplo', isCorrect: false },
      ],
      explanation: 'Heterozigoto (Aa) possui dois alelos diferentes — um dominante (A) e um recessivo (a). Homozigoto seria AA ou aa.',
    },
  },
};

export const ILUMINISMO_LESSON: ActivityLessonC = {
  id: 'iluminismo-9ano',
  title: 'Iluminismo e Revoluções',
  mission_question: 'Como o Iluminismo influenciou as revoluções do século XVIII?',
  subject: 'História',
  area: 'ciencias_humanas',
  area_label: 'História',
  grade: '9º Ano',
  grade_range: '6º ao 9º Ano',
  bncc_code: 'EF09HI01',
  bncc_description: 'Analisar as ideias iluministas e sua influência nas revoluções burguesas e nas independências.',
  xp: 270,
  color: { from: 'from-yellow-700', to: 'to-amber-600', accent: 'yellow' },
  screens: {
    missao: {
      intro: 'Nesta missão você vai:',
      objectives: [
        'Compreender os ideais iluministas',
        'Relacionar Iluminismo e Revolução Francesa',
        'Analisar o impacto no mundo contemporâneo',
      ],
      context_emoji: '💡',
      context_text: 'Liberdade, Igualdade e Fraternidade — três palavras que mudaram a história da humanidade.',
    },
    exploracao: {
      instruction: 'Explore o Iluminismo.',
      texto: 'O Iluminismo foi um movimento intelectual do século XVIII que defendia a razão como guia supremo da humanidade. Seus pensadores (Locke, Voltaire, Rousseau, Montesquieu) criticaram o absolutismo e a Igreja e influenciaram revoluções.',
      pontos_destaque: [
        { emoji: '📖', text: 'Razão acima da fé e da tradição.' },
        { emoji: '⚖️', text: 'Separação dos poderes (Montesquieu).' },
        { emoji: '✍️', text: 'Contrato Social: o governo deriva do povo (Rousseau).' },
        { emoji: '🗽', text: 'Influência direta na Revolução Americana e Francesa.' },
      ],
      mascot_tip: 'Muitos direitos que você tem hoje — como liberdade de expressão — vêm dessas ideias!',
    },
    pontos_chave: {
      intro: 'Principais pensadores iluministas:',
      points: [
        { icon: '⚖️', title: 'Montesquieu', text: 'Criou a teoria da separação dos poderes: Executivo, Legislativo e Judiciário.' },
        { icon: '✍️', title: 'Rousseau', text: 'Defendeu a soberania popular — o poder pertence ao povo.' },
        { icon: '💬', title: 'Voltaire', text: 'Criticou a intolerância religiosa e defendeu a liberdade de expressão.' },
      ],
    },
    exemplo_aplicado: {
      title: 'Exemplo prático:',
      scenario: 'A Constituição Brasileira de 1988 reflete ideais iluministas.',
      scenario_emoji: '📜',
      analysis: [
        'Separação dos três poderes (Montesquieu).',
        'Soberania popular — o poder emana do povo.',
        'Garantia de direitos fundamentais — liberdade e igualdade.',
      ],
      conclusion: 'O Iluminismo ainda vive nas democracias modernas!',
    },
    desafio: {
      question: 'Qual pensador iluminista é conhecido pela teoria da separação dos poderes?',
      options: [
        { letter: 'A', text: 'Rousseau', isCorrect: false },
        { letter: 'B', text: 'Voltaire', isCorrect: false },
        { letter: 'C', text: 'Montesquieu', isCorrect: true },
        { letter: 'D', text: 'Locke', isCorrect: false },
      ],
      explanation: 'Montesquieu, em "O Espírito das Leis" (1748), propôs a divisão do governo em Executivo, Legislativo e Judiciário para evitar a tirania.',
    },
  },
};

export const ALL_C_LESSONS = [
  OCEANOS_LESSON,
  BIOMAS_LESSON,
  CELULAS_LESSON,
  EQUACOES_LESSON,
  REVOLUCAO_LESSON,
  SISTEMA_NERVOSO_LESSON,
  GENETICA_LESSON,
  ILUMINISMO_LESSON,
];
