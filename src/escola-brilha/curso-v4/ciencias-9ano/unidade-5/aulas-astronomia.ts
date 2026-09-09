import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-culturas-e-origens", titulo: "Céus, Culturas e Origens", icone: "✨", bncc: ["EF09CI15"],
  tema: "leituras culturais do céu e origem do mundo", conceito: "Povos de diferentes épocas criaram narrativas e calendários a partir do céu; a ciência constrói modelos testáveis com observações e evidências, sem apagar o valor cultural dessas narrativas.",
  explicacao: "Constelações e histórias variam entre culturas porque cada sociedade seleciona formas e significados. Modelos científicos sobre o Universo são avaliados por previsões, medições e revisão, enquanto narrativas culturais expressam memória, identidade e valores.",
  exemplo: "O mesmo conjunto de estrelas pode formar figuras diferentes em tradições indígenas brasileiras e na astronomia greco-romana, orientando épocas de plantio ou navegação.",
  vocabulario: ["cosmologia cultural", "constelação", "evidência científica"], etapas: ["Identificar a fonte cultural", "Descrever a leitura do céu", "Comparar finalidades", "Distinguir narrativa e modelo científico"],
  questoes: [
    { pergunta: "Por que culturas veem constelações diferentes?", opcoes: ["Interpretam padrões segundo histórias e necessidades próprias", "As estrelas mudam para cada povo", "Só uma cultura observa o céu", "Constelações são planetas"], correta: 0, explicacao: "As estrelas podem ser as mesmas; os agrupamentos e significados são culturais." },
    { pergunta: "Como modelos científicos são avaliados?", opcoes: ["Por evidências e previsões testáveis", "Por tradição apenas", "Por votação sem dados", "Por beleza"], correta: 0, explicacao: "A ciência confronta explicações com observações." },
    { pergunta: "Qual atitude é adequada ao comparar saberes?", opcoes: ["Respeitar contextos e distinguir finalidades", "Ridicularizar narrativas", "Chamar tudo de experimento", "Ignorar povos tradicionais"], correta: 0, explicacao: "Comparar com rigor não exige desvalorizar identidades culturais." },
  ], missao: "Compare duas leituras culturais de um fenômeno celeste e um modelo científico, explicitando fontes, finalidades e evidências.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-vida-fora-da-terra", titulo: "Condições para Vida Fora da Terra", icone: "🪐", bncc: ["EF09CI16"],
  tema: "possibilidade de vida fora da Terra", conceito: "A busca por vida considera água líquida, fonte de energia, elementos químicos, estabilidade ambiental e proteção, mas não pressupõe que toda vida seja igual à terrestre.",
  explicacao: "Astrônomos analisam atmosferas, temperaturas, órbitas e composição de planetas e luas. Zona habitável ajuda, mas não basta: atmosfera, campo magnético, atividade da estrela e disponibilidade de matéria também importam.",
  exemplo: "Marte teve água líquida no passado; Europa e Encélado podem ter oceanos sob o gelo. Essas evidências orientam missões, mas não provam vida.",
  vocabulario: ["habitabilidade", "exoplaneta", "bioassinatura"], etapas: ["Detectar o mundo", "Estimar temperatura e órbita", "Analisar atmosfera e água", "Separar indício de comprovação"],
  questoes: [
    { pergunta: "O que significa habitabilidade?", opcoes: ["Condições que podem permitir vida", "Prova de habitantes inteligentes", "Ter anéis", "Ser igual à Terra"], correta: 0, explicacao: "Habitável não significa habitado." },
    { pergunta: "Por que água líquida é investigada?", opcoes: ["Participa de processos essenciais à vida conhecida", "Cria vida automaticamente", "É um gás nobre", "Só existe na Terra"], correta: 0, explicacao: "É um solvente importante, mas sua presença isolada não prova vida." },
    { pergunta: "Uma bioassinatura possível é o quê?", opcoes: ["Sinal químico que exige investigação", "Fotografia obrigatória de seres", "Qualquer nuvem", "Som no vácuo"], correta: 0, explicacao: "Sinais precisam ser confirmados e causas não biológicas descartadas." },
  ], missao: "Avalie três mundos candidatos e argumente qual merece prioridade de pesquisa, sem confundir possibilidade com prova.",
});

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-evolucao-das-estrelas", titulo: "Nascimento, Vida e Morte das Estrelas", icone: "☀️", bncc: ["EF09CI17"],
  tema: "evolução estelar e o futuro do Sol", conceito: "Estrelas nascem de nuvens de gás, passam a maior parte da vida fundindo hidrogênio e evoluem conforme sua massa; o Sol se tornará gigante vermelha e depois anã branca.",
  explicacao: "Gravidade comprime gás até iniciar fusão. O equilíbrio entre gravidade e pressão sustenta a estrela. Estrelas massivas têm vidas mais curtas e finais diferentes; o Sol não tem massa para terminar como supernova.",
  exemplo: "Hoje o Sol está na sequência principal. Em bilhões de anos, expandirá como gigante vermelha, perderá camadas externas e deixará uma anã branca.",
  vocabulario: ["fusão nuclear", "sequência principal", "anã branca"], etapas: ["Formar protoestrela", "Iniciar fusão", "Consumir combustível", "Relacionar massa ao estágio final"],
  questoes: [
    { pergunta: "Qual processo libera energia no Sol?", opcoes: ["Fusão nuclear", "Combustão com oxigênio", "Evaporação", "Atrito com planetas"], correta: 0, explicacao: "Núcleos leves se fundem e liberam energia." },
    { pergunta: "O que mais influencia a evolução de uma estrela?", opcoes: ["Sua massa inicial", "Número de planetas", "Nome da constelação", "Distância da Terra"], correta: 0, explicacao: "A massa determina temperatura, duração e destino." },
    { pergunta: "Qual é o destino esperado do Sol?", opcoes: ["Gigante vermelha e anã branca", "Supernova e buraco negro", "Planeta rochoso", "Desaparecimento imediato"], correta: 0, explicacao: "O Sol tem massa baixa demais para virar supernova." },
  ], missao: "Construa uma linha do tempo do Sol e compare-a com a evolução de uma estrela muito mais massiva.",
});
