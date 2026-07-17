export type ObjetivoBNCC = {
  codigo: string;
  descricao: string;
  oQueOAlunoAprende: string;
};

export type Materiais = {
  digitais: string[];
  fisicos: string[];
  opcionais: string[];
};

export type Historia = {
  titulo: string;
  narrativa: string[];
};

export type Descoberta = {
  perguntaGuia: string;
  observacoes: string[];
  hipoteses: string[];
};

export type Explicacao = {
  ideia: string;
  exemplos: { artista: string; detalhe: string }[];
  regraSimples: string;
};

export type Demonstracao = {
  titulo: string;
  passos: string[];
  dica: string;
};

export type Experimentacao = {
  convite: string;
  desafios: string[];
};

export type ProducaoGuiada = {
  passoAPasso: string[];
};

export type ProducaoLivre = {
  titulo: string;
  instrucao: string;
  dicas: string[];
};

export type Compartilhar = { perguntas: string[] };

export type Curiosidade = { titulo: string; fatos: string[] };

export type ProjetoFinal = {
  titulo: string;
  entregavel: string;
  legendaSugerida: string;
};

export type Rubrica = {
  criterios: { nome: string; descricao: string }[];
  niveis: { nome: string; cor: string }[];
};

export type Relatorio = {
  paraPais: string;
  paraProfessor: string;
  paraAdmin: string;
};

export type AulaArte = {
  slug: string;
  unidade: { numero: number; titulo: string; subtitulo: string };
  titulo: string;
  bncc: ObjetivoBNCC[];
  materiais: Materiais;
  historia: Historia;
  descoberta: Descoberta;
  explicacao: Explicacao;
  demonstracao: Demonstracao;
  experimentacao: Experimentacao;
  producaoGuiada: ProducaoGuiada;
  producaoLivre: ProducaoLivre;
  compartilhar: Compartilhar;
  curiosidade: Curiosidade;
  projetoFinal: ProjetoFinal;
  rubrica: Rubrica;
  relatorio: Relatorio;
};
