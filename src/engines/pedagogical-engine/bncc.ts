export interface BNCCSkill {
  id: string;
  code: string; // e.g., EF01MA01
  description: string;
  field:
    | "lingua-portuguesa"
    | "matematica"
    | "ciencias"
    | "geografia"
    | "historia"
    | "artes"
    | "educacao-fisica"
    | "psicomotricidade"
    | "socioemocional";
  level: number; // 0 (Preschool), 1 to 9 (year)
  domain?:
    | "alfabetizacao"
    | "matematica"
    | "leitura"
    | "interpretacao"
    | "coordenacao"
    | "gramatica"
    | "algebra"
    | "geometria"
    | "emocional"
    | "social"
    | "autonomia";
}

export const BNCC_SKILLS: BNCCSkill[] = [
  // Educação Infantil (Level 0)
  {
    id: "ei1",
    code: "EI03ET07",
    field: "matematica",
    level: 0,
    domain: "matematica",
    description: "Relacionar números às suas respectivas quantidades.",
  },
  {
    id: "ei2",
    code: "EI03EF09",
    field: "lingua-portuguesa",
    level: 0,
    domain: "alfabetizacao",
    description: "Levantar hipóteses em relação à linguagem escrita.",
  },
  {
    id: "ei3",
    code: "EI03ET05",
    field: "matematica",
    level: 0,
    domain: "geometria",
    description: "Classificar objetos e figuras de acordo com seus atributos.",
  },
  {
    id: "ei4",
    code: "EI03ET03",
    field: "ciencias",
    level: 0,
    domain: "matematica",
    description: "Identificar e manipular materiais e objetos de diferentes texturas.",
  },

  // 1º Ano
  {
    id: "ef01ma01",
    code: "EF01MA01",
    field: "matematica",
    level: 1,
    domain: "matematica",
    description: "Utilizar números naturais como indicador de quantidade ou de ordem.",
  },
  {
    id: "ef01lp02",
    code: "EF01LP02",
    field: "lingua-portuguesa",
    level: 1,
    domain: "alfabetizacao",
    description: "Escrever, espontaneamente ou por ditado, palavras e frases.",
  },
  {
    id: "ef01ci02",
    code: "EF01CI02",
    field: "ciencias",
    level: 1,
    domain: "coordenacao",
    description: "Localizar, nomear e representar as partes do corpo humano.",
  },
  {
    id: "ef01ge09",
    code: "EF01GE09",
    field: "geografia",
    level: 1,
    domain: "algebra",
    description: "Utilizar pontos de referência para a localização no espaço.",
  },
  {
    id: "ef01hi02",
    code: "EF01HI02",
    field: "historia",
    level: 1,
    domain: "gramatica",
    description: "Identificar a relação entre as pessoas e os lugares.",
  },
  {
    id: "ef01ar02",
    code: "EF01AR02",
    field: "artes",
    level: 1,
    domain: "interpretacao",
    description: "Explorar e reconhecer elementos constitutivos das artes visuais.",
  },

  // 2º Ano
  {
    id: "ef02ma01",
    code: "EF02MA01",
    field: "matematica",
    level: 2,
    domain: "matematica",
    description: "Comparar e ordenar números naturais (até a ordem de centenas).",
  },
  {
    id: "ef02lp04",
    code: "EF02LP04",
    field: "lingua-portuguesa",
    level: 2,
    domain: "alfabetizacao",
    description: "Ler e escrever corretamente palavras com sílabas simples.",
  },
  {
    id: "ef02ci04",
    code: "EF02CI04",
    field: "ciencias",
    level: 2,
    domain: "matematica",
    description: "Descrever características de plantas e animais.",
  },
  {
    id: "ef02ma20",
    code: "EF02MA20",
    field: "matematica",
    level: 2,
    domain: "algebra",
    description: "Estabelecer a equivalência de valores entre moedas e cédulas.",
  },
  {
    id: "ef02ge01",
    code: "EF02GE01",
    field: "geografia",
    level: 2,
    domain: "interpretacao",
    description: "Descrever elementos das paisagens e seus processos de transformação.",
  },
  {
    id: "ef02hi01",
    code: "EF02HI01",
    field: "historia",
    level: 2,
    domain: "coordenacao",
    description: "Reconhecer espaços de convivência e o papel das pessoas.",
  },

  // 3º Ano
  {
    id: "ef03ma03",
    code: "EF03MA03",
    field: "matematica",
    level: 3,
    domain: "matematica",
    description: "Construir e utilizar fatos básicos da adição e da multiplicação.",
  },
  {
    id: "ef03lp01",
    code: "EF03LP01",
    field: "lingua-portuguesa",
    level: 3,
    domain: "leitura",
    description: "Ler e compreender textos variados com autonomia e fluência.",
  },
  {
    id: "ef03ci04",
    code: "EF03CI04",
    field: "ciencias",
    level: 3,
    domain: "algebra",
    description: "Identificar características e estados físicos da matéria.",
  },
  {
    id: "ef03ge04",
    code: "EF03GE04",
    field: "geografia",
    level: 3,
    domain: "matematica",
    description: "Explicar como os processos naturais alteram as paisagens.",
  },
  {
    id: "ef03hi04",
    code: "EF03HI04",
    field: "historia",
    level: 3,
    domain: "interpretacao",
    description: "Identificar patrimônios históricos e culturais da cidade.",
  },

  // 4º Ano
  {
    id: "ef04ma01",
    code: "EF04MA01",
    field: "matematica",
    level: 4,
    domain: "matematica",
    description: "Ler, escrever e ordenar números naturais até dezenas de milhar.",
  },
  {
    id: "ef04lp01",
    code: "EF04LP01",
    field: "lingua-portuguesa",
    level: 4,
    domain: "gramatica",
    description: "Grafar palavras utilizando regras de acentuação gráfica.",
  },
  {
    id: "ef04ci04",
    code: "EF04CI04",
    field: "ciencias",
    level: 4,
    domain: "coordenacao",
    description: "Analisar o ciclo da matéria e o fluxo de energia nos ecossistemas.",
  },
  {
    id: "ef04ge05",
    code: "EF04GE05",
    field: "geografia",
    level: 4,
    domain: "algebra",
    description: "Distinguir unidades político-administrativas oficiais do Brasil.",
  },
  {
    id: "ef04hi01",
    code: "EF04HI01",
    field: "historia",
    level: 4,
    domain: "interpretacao",
    description: "Reconhecer a história como resultado da ação do ser humano.",
  },

  // 5º Ano
  {
    id: "ef05ma01",
    code: "EF05MA01",
    field: "matematica",
    level: 5,
    domain: "matematica",
    description: "Ler, escrever e ordenar números naturais até centenas de milhar.",
  },
  {
    id: "ef05lp01",
    code: "EF05LP01",
    field: "lingua-portuguesa",
    level: 5,
    domain: "interpretacao",
    description: "Inferir o sentido de palavras desconhecidas em textos.",
  },
  {
    id: "ef05ci01",
    code: "EF05CI01",
    field: "ciencias",
    level: 5,
    domain: "matematica",
    description: "Explorar fenômenos físicos e químicos.",
  },
  {
    id: "ef05ge03",
    code: "EF05GE03",
    field: "geografia",
    level: 5,
    domain: "algebra",
    description: "Identificar as formas e funções das cidades.",
  },
  {
    id: "ef05hi01",
    code: "EF05HI01",
    field: "historia",
    level: 5,
    domain: "gramatica",
    description: "Identificar os mecanismos de organização do poder e das sociedades.",
  },

  // 6º Ano em diante
  {
    id: "ef06ma01",
    code: "EF06MA01",
    field: "matematica",
    level: 6,
    domain: "matematica",
    description: "Resolver e elaborar problemas com números naturais.",
  },
  {
    id: "ef06lp01",
    code: "EF06LP01",
    field: "lingua-portuguesa",
    level: 6,
    domain: "interpretacao",
    description: "Reconhecer a impossibilidade de neutralidade absoluta.",
  },

  // ===== 6º Ano — Matemática (EF06MA01..EF06MA24) =====
  ...Array.from({ length: 24 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const descs: Record<string, string> = {
      "01": "Resolver e elaborar problemas com números naturais.",
      "02": "Reconhecer o sistema de numeração decimal.",
      "03": "Resolver problemas com múltiplos e divisores.",
      "04": "Construir algoritmo da divisão euclidiana.",
      "05": "Classificar números naturais em primos e compostos.",
      "06": "Resolver problemas com frações (parte/todo).",
      "07": "Comparar e ordenar frações.",
      "08": "Reconhecer equivalência de frações.",
      "09": "Resolver problemas com frações associando a divisão.",
      "10": "Resolver problemas com adição e subtração de frações.",
      "11": "Resolver problemas com as quatro operações com decimais.",
      "12": "Fazer estimativas de medidas com decimais.",
      "13": "Resolver problemas de porcentagem.",
      "14": "Reconhecer ângulos em figuras planas.",
      "15": "Resolver problemas envolvendo ângulos.",
      "16": "Classificar polígonos quanto a lados e ângulos.",
      "17": "Quadriláteros: características e propriedades.",
      "18": "Reconhecer prismas e pirâmides em planificações.",
      "19": "Identificar características de poliedros.",
      "20": "Resolver problemas com perímetro e área.",
      "21": "Construir figuras com régua e compasso.",
      "22": "Utilizar planos cartesianos para localização.",
      "23": "Calcular probabilidade de eventos simples.",
      "24": "Interpretar e construir gráficos e tabelas.",
    };
    return {
      id: `ef06ma${n}`,
      code: `EF06MA${n}`,
      field: "matematica" as const,
      level: 6,
      domain: (i < 13 ? "matematica" : i < 22 ? "geometria" : "matematica") as
        | "matematica"
        | "geometria",
      description: descs[n],
    };
  }),

  // ===== 6º Ano — Ciências (EF06CI01..EF06CI14) =====
  ...Array.from({ length: 14 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const descs: Record<string, string> = {
      "01": "Classificar materiais quanto à sua constituição.",
      "02": "Identificar transformações químicas no cotidiano.",
      "03": "Justificar separação de misturas por seus métodos.",
      "04": "Associar consumo consciente à reciclagem.",
      "05": "Explicar organização básica das células.",
      "06": "Compreender o corpo humano como sistema integrado.",
      "07": "Justificar hábitos saudáveis para o organismo.",
      "08": "Explicar o funcionamento de lentes e visão.",
      "09": "Discutir uso de lentes corretivas e instrumentos ópticos.",
      "10": "Explicar formação de rochas e tipos.",
      "11": "Identificar componentes do solo e sua importância.",
      "12": "Reconhecer processos de erosão e conservação do solo.",
      "13": "Descrever movimentos da Terra e fenômenos do sistema solar.",
      "14": "Caracterizar os planetas e corpos do sistema solar.",
    };
    return {
      id: `ef06ci${n}`,
      code: `EF06CI${n}`,
      field: "ciencias" as const,
      level: 6,
      description: descs[n],
    };
  }),

  // ===== 6º Ano — História (EF06HI01..EF06HI19) =====
  ...Array.from({ length: 19 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const descs: Record<string, string> = {
      "01": "Identificar diferentes formas de marcação do tempo.",
      "02": "Compreender a importância das fontes históricas.",
      "03": "Identificar fontes documentais sobre o passado.",
      "04": "Reconhecer a história como construção do conhecimento.",
      "05": "Descrever modificações na natureza pelas comunidades humanas.",
      "06": "Explicar surgimento da espécie humana e migrações.",
      "07": "Identificar aspectos da pré-história.",
      "08": "Descrever sociedades da Antiguidade na África e América.",
      "09": "Analisar os povos mesopotâmicos.",
      "10": "Caracterizar a sociedade egípcia.",
      "11": "Caracterizar a sociedade hebraica e fenícia.",
      "12": "Associar conceito de cidadania à pólis grega.",
      "13": "Conceituar democracia grega e suas limitações.",
      "14": "Discutir cultura grega: filosofia, arte e ciência.",
      "15": "Descrever a República e o Império Romano.",
      "16": "Analisar relações entre Roma e povos conquistados.",
      "17": "Compreender o cristianismo no Império Romano.",
      "18": "Identificar legado da Antiguidade Clássica.",
      "19": "Comparar diferentes sociedades antigas africanas e americanas.",
    };
    return {
      id: `ef06hi${n}`,
      code: `EF06HI${n}`,
      field: "historia" as const,
      level: 6,
      description: descs[n],
    };
  }),

  // ===== 6º Ano — Geografia (EF06GE01..EF06GE13) =====
  ...Array.from({ length: 13 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const descs: Record<string, string> = {
      "01": "Comparar modificações da paisagem em diferentes lugares.",
      "02": "Analisar relações entre componentes naturais e sociais.",
      "03": "Descrever movimentos populacionais.",
      "04": "Explicar transformações territoriais.",
      "05": "Relacionar padrões climáticos e tipos de vegetação.",
      "06": "Identificar características de biomas brasileiros.",
      "07": "Explicar mudanças no relevo por agentes naturais.",
      "08": "Medir distâncias usando escala cartográfica.",
      "09": "Elaborar mapas simples com legenda.",
      "10": "Identificar características da litosfera.",
      "11": "Analisar fenômenos da hidrosfera.",
      "12": "Compreender camadas da atmosfera.",
      "13": "Discutir impactos da ação humana nos ecossistemas.",
    };
    return {
      id: `ef06ge${n}`,
      code: `EF06GE${n}`,
      field: "geografia" as const,
      level: 6,
      description: descs[n],
    };
  }),

  // ===== 6º Ano — Língua Portuguesa (EF06LP02..EF06LP12 + EF67LP*) =====
  ...Array.from({ length: 11 }, (_, i) => {
    const n = String(i + 2).padStart(2, "0"); // 02..12 (01 já existe)
    const descs: Record<string, string> = {
      "02": "Estabelecer relação entre textos jornalísticos e contexto.",
      "03": "Identificar intencionalidade em textos publicitários.",
      "04": "Analisar efeitos de sentido em escolhas lexicais.",
      "05": "Inferir efeitos de humor e ironia.",
      "06": "Empregar concordância nominal e verbal adequada.",
      "07": "Diferenciar variedades linguísticas.",
      "08": "Reconhecer estrutura de períodos simples e compostos.",
      "09": "Identificar classes de palavras em função sintática.",
      "10": "Produzir textos narrativos com coerência e coesão.",
      "11": "Revisar textos quanto à ortografia e pontuação.",
      "12": "Planejar e produzir textos argumentativos curtos.",
    };
    return {
      id: `ef06lp${n}`,
      code: `EF06LP${n}`,
      field: "lingua-portuguesa" as const,
      level: 6,
      domain: "gramatica" as const,
      description: descs[n],
    };
  }),
  {
    id: "ef07ma01",
    code: "EF07MA01",
    field: "matematica",
    level: 7,
    domain: "matematica",
    description: "Resolver e elaborar problemas com números inteiros.",
  },
  {
    id: "ef07lp01",
    code: "EF07LP01",
    field: "lingua-portuguesa",
    level: 7,
    domain: "gramatica",
    description: "Distinguir palavras derivadas por prefixação e sufixação.",
  },
  {
    id: "ef08ma01",
    code: "EF08MA01",
    field: "matematica",
    level: 8,
    domain: "matematica",
    description: "Efetuar cálculos com potências de expoentes inteiros.",
  },
  {
    id: "ef08lp01",
    code: "EF08LP01",
    field: "lingua-portuguesa",
    level: 8,
    domain: "interpretacao",
    description: "Identificar e comparar as ideias centrais de um texto.",
  },
  {
    id: "ef09ma01",
    code: "EF09MA01",
    field: "matematica",
    level: 9,
    domain: "matematica",
    description: "Resolver e elaborar problemas com números reais.",
  },
  {
    id: "ef09lp01",
    code: "EF09LP01",
    field: "lingua-portuguesa",
    level: 9,
    domain: "interpretacao",
    description: "Analisar o funcionamento das linguagens nas práticas sociais.",
  },

  // SOCIOEMOCIONAL (Brilha Vida)
  {
    id: "se_emo",
    code: "BV-EMO",
    field: "socioemocional",
    level: 0,
    domain: "emocional",
    description: "Identificar e expressar sentimentos e emoções próprias e dos outros.",
  },
  {
    id: "se_emp",
    code: "BV-EMP",
    field: "socioemocional",
    level: 1,
    domain: "social",
    description: "Praticar a empatia e o respeito às diferenças no convívio social.",
  },
  {
    id: "se_aut",
    code: "BV-AUT",
    field: "socioemocional",
    level: 2,
    domain: "autonomia",
    description: "Desenvolver estratégias de autocontrole e regulação emocional.",
  },
  {
    id: "se_con",
    code: "BV-CON",
    field: "socioemocional",
    level: 3,
    domain: "social",
    description: "Resolver conflitos por meio do diálogo e cooperação.",
  },
];
