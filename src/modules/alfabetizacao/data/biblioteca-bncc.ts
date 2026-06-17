/**
 * Biblioteca Pedagógica BNCC
 * Cada atividade contém: código BNCC, objetivo de aprendizagem,
 * faixa etária e habilidade desenvolvida.
 */

export type EixoBNCC =
  | "lingua-portuguesa"
  | "matematica"
  | "ciencias"
  | "geografia"
  | "historia"
  | "artes"
  | "educacao-fisica"
  | "socioemocional";

export type CompetenciaCognitiva =
  | "memoria"
  | "atencao"
  | "linguagem"
  | "raciocinio-logico"
  | "percepcao-visual"
  | "percepcao-auditiva"
  | "coordenacao-motora"
  | "funcao-executiva"
  | "socioemocional";

export interface AtividadeBNCC {
  id: string;
  codigoBNCC: string;
  titulo: string;
  eixo: EixoBNCC;
  objetivoAprendizagem: string;
  habilidadeDesenvolvida: string;
  competenciasCognitivas: CompetenciaCognitiva[];
  faixaEtaria: { min: number; max: number };
  serie: string;
  nivelDificuldade: 1 | 2 | 3 | 4 | 5;
  preRequisitos: string[];
  duracaoMinutos: number;
  tipoAtividade: string;
  tags: string[];
}

export const BIBLIOTECA_BNCC: AtividadeBNCC[] = [
  // ===== EDUCAÇÃO INFANTIL =====
  {
    id: "bib-ei-lp-01",
    codigoBNCC: "EI03EF01",
    titulo: "Escuta de Histórias",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Expressar ideias, desejos e sentimentos sobre suas vivências por meio da linguagem oral.",
    habilidadeDesenvolvida: "Escuta atenta e oralidade",
    competenciasCognitivas: ["linguagem", "atencao", "memoria"],
    faixaEtaria: { min: 3, max: 5 },
    serie: "Pré 1",
    nivelDificuldade: 1,
    preRequisitos: [],
    duracaoMinutos: 10,
    tipoAtividade: "oralidade",
    tags: ["historia", "escuta", "fala"],
  },
  {
    id: "bib-ei-lp-02",
    codigoBNCC: "EI03EF09",
    titulo: "Reconhecimento de Vogais",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Levantar hipóteses sobre a linguagem escrita por meio do reconhecimento de vogais.",
    habilidadeDesenvolvida: "Consciência fonológica inicial",
    competenciasCognitivas: ["linguagem", "percepcao-auditiva", "percepcao-visual"],
    faixaEtaria: { min: 4, max: 5 },
    serie: "Pré 2",
    nivelDificuldade: 1,
    preRequisitos: ["bib-ei-lp-01"],
    duracaoMinutos: 12,
    tipoAtividade: "vogal-som",
    tags: ["vogais", "fonema", "alfabetizacao"],
  },
  {
    id: "bib-ei-mat-01",
    codigoBNCC: "EI03ET07",
    titulo: "Contagem até 10",
    eixo: "matematica",
    objetivoAprendizagem:
      "Relacionar números às suas respectivas quantidades em sequência até 10.",
    habilidadeDesenvolvida: "Senso numérico e correspondência um a um",
    competenciasCognitivas: ["raciocinio-logico", "memoria", "atencao"],
    faixaEtaria: { min: 4, max: 5 },
    serie: "Pré 2",
    nivelDificuldade: 1,
    preRequisitos: [],
    duracaoMinutos: 15,
    tipoAtividade: "contagem",
    tags: ["numeros", "quantidade", "contagem"],
  },
  {
    id: "bib-ei-se-01",
    codigoBNCC: "EI03EO01",
    titulo: "Identificar Emoções",
    eixo: "socioemocional",
    objetivoAprendizagem:
      "Reconhecer e nomear sentimentos próprios e dos colegas em situações cotidianas.",
    habilidadeDesenvolvida: "Autoconsciência emocional",
    competenciasCognitivas: ["socioemocional", "linguagem"],
    faixaEtaria: { min: 3, max: 5 },
    serie: "Pré 1",
    nivelDificuldade: 1,
    preRequisitos: [],
    duracaoMinutos: 10,
    tipoAtividade: "identificacao-emocao",
    tags: ["emocoes", "empatia"],
  },

  // ===== 1º ANO =====
  {
    id: "bib-1-lp-01",
    codigoBNCC: "EF01LP01",
    titulo: "Direção da Leitura",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo.",
    habilidadeDesenvolvida: "Convenções da escrita",
    competenciasCognitivas: ["percepcao-visual", "atencao"],
    faixaEtaria: { min: 6, max: 7 },
    serie: "1º ano",
    nivelDificuldade: 2,
    preRequisitos: ["bib-ei-lp-02"],
    duracaoMinutos: 15,
    tipoAtividade: "leitura-guiada",
    tags: ["leitura", "direcionalidade"],
  },
  {
    id: "bib-1-lp-02",
    codigoBNCC: "EF01LP02",
    titulo: "Sílabas Simples",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Escrever palavras compostas por sílabas simples (consoante + vogal).",
    habilidadeDesenvolvida: "Codificação alfabética",
    competenciasCognitivas: ["linguagem", "memoria", "percepcao-auditiva"],
    faixaEtaria: { min: 6, max: 7 },
    serie: "1º ano",
    nivelDificuldade: 2,
    preRequisitos: ["bib-1-lp-01"],
    duracaoMinutos: 18,
    tipoAtividade: "silaba-fusao",
    tags: ["silabas", "escrita"],
  },
  {
    id: "bib-1-lp-03",
    codigoBNCC: "EF01LP09",
    titulo: "Rimas e Aliteração",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Comparar palavras identificando semelhanças e diferenças entre sons de sílabas.",
    habilidadeDesenvolvida: "Consciência fonológica",
    competenciasCognitivas: ["percepcao-auditiva", "linguagem", "memoria"],
    faixaEtaria: { min: 6, max: 7 },
    serie: "1º ano",
    nivelDificuldade: 2,
    preRequisitos: ["bib-ei-lp-02"],
    duracaoMinutos: 12,
    tipoAtividade: "rima",
    tags: ["rima", "som", "fonologia"],
  },
  {
    id: "bib-1-mat-01",
    codigoBNCC: "EF01MA01",
    titulo: "Números Naturais até 100",
    eixo: "matematica",
    objetivoAprendizagem:
      "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes contextos.",
    habilidadeDesenvolvida: "Numeralização",
    competenciasCognitivas: ["raciocinio-logico", "memoria"],
    faixaEtaria: { min: 6, max: 7 },
    serie: "1º ano",
    nivelDificuldade: 2,
    preRequisitos: ["bib-ei-mat-01"],
    duracaoMinutos: 20,
    tipoAtividade: "numeracao",
    tags: ["numeros", "ordem", "quantidade"],
  },
  {
    id: "bib-1-ci-01",
    codigoBNCC: "EF01CI02",
    titulo: "Partes do Corpo Humano",
    eixo: "ciencias",
    objetivoAprendizagem:
      "Localizar, nomear e representar graficamente partes do corpo humano e suas funções.",
    habilidadeDesenvolvida: "Conhecimento corporal",
    competenciasCognitivas: ["linguagem", "percepcao-visual", "memoria"],
    faixaEtaria: { min: 6, max: 7 },
    serie: "1º ano",
    nivelDificuldade: 2,
    preRequisitos: [],
    duracaoMinutos: 20,
    tipoAtividade: "nomeacao",
    tags: ["corpo", "saude"],
  },

  // ===== 2º ANO =====
  {
    id: "bib-2-lp-01",
    codigoBNCC: "EF02LP04",
    titulo: "Leitura de Palavras com Sílabas Complexas",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Ler e escrever palavras com correspondências regulares contextuais entre grafemas e fonemas.",
    habilidadeDesenvolvida: "Fluência leitora",
    competenciasCognitivas: ["linguagem", "atencao", "memoria"],
    faixaEtaria: { min: 7, max: 8 },
    serie: "2º ano",
    nivelDificuldade: 3,
    preRequisitos: ["bib-1-lp-02"],
    duracaoMinutos: 20,
    tipoAtividade: "leitura-palavra",
    tags: ["leitura", "ortografia"],
  },
  {
    id: "bib-2-mat-01",
    codigoBNCC: "EF02MA01",
    titulo: "Ordenação até Centena",
    eixo: "matematica",
    objetivoAprendizagem:
      "Comparar e ordenar números naturais até a ordem de centenas usando registros pessoais.",
    habilidadeDesenvolvida: "Sistema de numeração decimal",
    competenciasCognitivas: ["raciocinio-logico", "funcao-executiva"],
    faixaEtaria: { min: 7, max: 8 },
    serie: "2º ano",
    nivelDificuldade: 3,
    preRequisitos: ["bib-1-mat-01"],
    duracaoMinutos: 22,
    tipoAtividade: "ordenacao",
    tags: ["numeros", "comparacao"],
  },

  // ===== 3º ANO =====
  {
    id: "bib-3-lp-01",
    codigoBNCC: "EF03LP01",
    titulo: "Compreensão de Textos Curtos",
    eixo: "lingua-portuguesa",
    objetivoAprendizagem:
      "Ler e compreender textos variados com autonomia, identificando ideia central.",
    habilidadeDesenvolvida: "Compreensão leitora",
    competenciasCognitivas: ["linguagem", "raciocinio-logico", "memoria", "atencao"],
    faixaEtaria: { min: 8, max: 9 },
    serie: "3º ano",
    nivelDificuldade: 3,
    preRequisitos: ["bib-2-lp-01"],
    duracaoMinutos: 25,
    tipoAtividade: "texto-compreensao",
    tags: ["leitura", "interpretacao"],
  },
  {
    id: "bib-3-mat-01",
    codigoBNCC: "EF03MA03",
    titulo: "Fatos Básicos da Adição",
    eixo: "matematica",
    objetivoAprendizagem:
      "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental.",
    habilidadeDesenvolvida: "Cálculo mental",
    competenciasCognitivas: ["raciocinio-logico", "memoria", "funcao-executiva"],
    faixaEtaria: { min: 8, max: 9 },
    serie: "3º ano",
    nivelDificuldade: 3,
    preRequisitos: ["bib-2-mat-01"],
    duracaoMinutos: 20,
    tipoAtividade: "calculo-mental",
    tags: ["adicao", "multiplicacao"],
  },
];

// ===== Utilitários de consulta =====

export function buscarPorCodigoBNCC(codigo: string): AtividadeBNCC | undefined {
  return BIBLIOTECA_BNCC.find((a) => a.codigoBNCC === codigo);
}

export function filtrarPorIdade(idade: number): AtividadeBNCC[] {
  return BIBLIOTECA_BNCC.filter(
    (a) => idade >= a.faixaEtaria.min && idade <= a.faixaEtaria.max,
  );
}

export function filtrarPorSerie(serie: string): AtividadeBNCC[] {
  return BIBLIOTECA_BNCC.filter((a) => a.serie === serie);
}

export function filtrarPorEixo(eixo: EixoBNCC): AtividadeBNCC[] {
  return BIBLIOTECA_BNCC.filter((a) => a.eixo === eixo);
}

export function filtrarPorCompetencia(
  competencia: CompetenciaCognitiva,
): AtividadeBNCC[] {
  return BIBLIOTECA_BNCC.filter((a) =>
    a.competenciasCognitivas.includes(competencia),
  );
}

export function proximasAtividades(
  atividadesConcluidas: string[],
): AtividadeBNCC[] {
  return BIBLIOTECA_BNCC.filter(
    (a) =>
      !atividadesConcluidas.includes(a.id) &&
      a.preRequisitos.every((p) => atividadesConcluidas.includes(p)),
  );
}
