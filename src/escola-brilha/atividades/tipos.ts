// Banco Nacional de Atividades — tipos oficiais
// Cada missão pode usar diferentes tipos de atividade. A escolha é automática
// conforme a habilidade BNCC (ver ./seletor.ts).

export type TipoAtividade =
  | "multipla_escolha"
  | "verdadeiro_falso"
  | "completar"
  | "ligar"
  | "ordenar"
  | "arrastar"
  | "montar_palavras"
  | "montar_frases"
  | "caca_palavras"
  | "cruzadinha"
  | "memoria"
  | "sequencia_logica"
  | "classificacao"
  | "observacao"
  | "desenho"
  | "interpretacao"
  | "resolucao_problemas";

export interface AtividadeMeta {
  tipo: TipoAtividade;
  nome: string;
  descricao: string;
  // Faixa etária mínima recomendada (ano escolar, 0 = Infantil)
  anoMinimo: number;
  // Disciplinas onde faz mais sentido (vazio = todas)
  disciplinas: string[];
  // Habilidades cognitivas trabalhadas
  habilidades: string[];
}

export const CATALOGO_ATIVIDADES: Record<TipoAtividade, AtividadeMeta> = {
  multipla_escolha: {
    tipo: "multipla_escolha",
    nome: "Múltipla Escolha",
    descricao: "Escolher a alternativa correta entre opções.",
    anoMinimo: 0,
    disciplinas: [],
    habilidades: ["compreensão", "aplicação"],
  },
  verdadeiro_falso: {
    tipo: "verdadeiro_falso",
    nome: "Verdadeiro ou Falso",
    descricao: "Julgar afirmações como verdadeiras ou falsas.",
    anoMinimo: 0,
    disciplinas: [],
    habilidades: ["julgamento", "análise"],
  },
  completar: {
    tipo: "completar",
    nome: "Completar",
    descricao: "Preencher lacunas com a resposta correta.",
    anoMinimo: 1,
    disciplinas: ["portugues", "matematica", "ciencias"],
    habilidades: ["memória", "aplicação"],
  },
  ligar: {
    tipo: "ligar",
    nome: "Ligar",
    descricao: "Conectar itens de duas colunas.",
    anoMinimo: 0,
    disciplinas: [],
    habilidades: ["associação", "correspondência"],
  },
  ordenar: {
    tipo: "ordenar",
    nome: "Ordenar",
    descricao: "Colocar elementos em ordem correta.",
    anoMinimo: 1,
    disciplinas: ["matematica", "historia", "portugues", "ciencias"],
    habilidades: ["sequenciação", "raciocínio"],
  },
  arrastar: {
    tipo: "arrastar",
    nome: "Arrastar e Soltar",
    descricao: "Mover elementos para a posição correta.",
    anoMinimo: 0,
    disciplinas: [],
    habilidades: ["coordenação", "classificação"],
  },
  montar_palavras: {
    tipo: "montar_palavras",
    nome: "Montar Palavras",
    descricao: "Organizar letras para formar palavras.",
    anoMinimo: 1,
    disciplinas: ["portugues"],
    habilidades: ["alfabetização", "consciência fonológica"],
  },
  montar_frases: {
    tipo: "montar_frases",
    nome: "Montar Frases",
    descricao: "Organizar palavras para formar frases coerentes.",
    anoMinimo: 2,
    disciplinas: ["portugues"],
    habilidades: ["sintaxe", "leitura"],
  },
  caca_palavras: {
    tipo: "caca_palavras",
    nome: "Caça-Palavras",
    descricao: "Encontrar palavras escondidas em uma grade.",
    anoMinimo: 2,
    disciplinas: ["portugues", "ciencias", "historia", "geografia"],
    habilidades: ["atenção", "vocabulário"],
  },
  cruzadinha: {
    tipo: "cruzadinha",
    nome: "Cruzadinha",
    descricao: "Completar palavras cruzadas a partir de pistas.",
    anoMinimo: 3,
    disciplinas: ["portugues", "ciencias", "historia", "geografia"],
    habilidades: ["vocabulário", "raciocínio"],
  },
  memoria: {
    tipo: "memoria",
    nome: "Jogo da Memória",
    descricao: "Encontrar pares correspondentes.",
    anoMinimo: 0,
    disciplinas: [],
    habilidades: ["memória", "atenção"],
  },
  sequencia_logica: {
    tipo: "sequencia_logica",
    nome: "Sequência Lógica",
    descricao: "Descobrir e continuar padrões.",
    anoMinimo: 1,
    disciplinas: ["matematica", "ciencias"],
    habilidades: ["raciocínio lógico", "padrões"],
  },
  classificacao: {
    tipo: "classificacao",
    nome: "Classificação",
    descricao: "Agrupar elementos segundo critérios.",
    anoMinimo: 1,
    disciplinas: ["ciencias", "matematica", "geografia"],
    habilidades: ["análise", "categorização"],
  },
  observacao: {
    tipo: "observacao",
    nome: "Observação",
    descricao: "Analisar imagem/cena e responder.",
    anoMinimo: 0,
    disciplinas: ["ciencias", "artes", "geografia"],
    habilidades: ["percepção", "atenção"],
  },
  desenho: {
    tipo: "desenho",
    nome: "Desenho",
    descricao: "Representar o conteúdo por meio de desenho.",
    anoMinimo: 0,
    disciplinas: ["artes", "ciencias", "geografia"],
    habilidades: ["criatividade", "expressão"],
  },
  interpretacao: {
    tipo: "interpretacao",
    nome: "Interpretação",
    descricao: "Ler um texto/imagem e responder perguntas.",
    anoMinimo: 2,
    disciplinas: ["portugues", "historia", "ciencias"],
    habilidades: ["leitura", "compreensão"],
  },
  resolucao_problemas: {
    tipo: "resolucao_problemas",
    nome: "Resolução de Problemas",
    descricao: "Resolver problema aplicando o conteúdo.",
    anoMinimo: 2,
    disciplinas: ["matematica", "ciencias"],
    habilidades: ["raciocínio", "aplicação"],
  },
};

export const TODOS_TIPOS = Object.keys(CATALOGO_ATIVIDADES) as TipoAtividade[];
