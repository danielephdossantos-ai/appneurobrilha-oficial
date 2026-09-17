export const TIPOS_MISSAO = ["prova", "tarefa", "trabalho"] as const;

export type TipoMissaoEscolar = (typeof TIPOS_MISSAO)[number];
export type StatusMissaoEscolar = "planejada" | "em_andamento" | "concluida" | "cancelada";

export interface RascunhoMissaoEscolar {
  tipo: TipoMissaoEscolar;
  materia: string;
  conteudos: string[];
  dataEntrega: string;
  titulo?: string;
  instrucoes?: string;
  serie?: string;
}

export interface PaginaAulaEscolar {
  ordem: number;
  tipo:
    | "acolhimento"
    | "objetivo"
    | "explicacao"
    | "exemplo"
    | "pratica_guiada"
    | "exercicio"
    | "revisao"
    | "correcao";
  titulo: string;
}

export interface ErroValidacaoMissao {
  campo: "tipo" | "materia" | "conteudos" | "dataEntrega";
  mensagem: string;
}

function dataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const [ano, mes, dia] = data.split("-").map(Number);
  const parsed = new Date(`${data}T00:00:00`);
  return (
    ano >= 1000 &&
    !Number.isNaN(parsed.getTime()) &&
    parsed.getFullYear() === ano &&
    parsed.getMonth() + 1 === mes &&
    parsed.getDate() === dia
  );
}

export function validarMissaoEscolar(
  rascunho: RascunhoMissaoEscolar,
  hoje: string,
): ErroValidacaoMissao[] {
  const erros: ErroValidacaoMissao[] = [];
  if (!TIPOS_MISSAO.includes(rascunho.tipo)) {
    erros.push({ campo: "tipo", mensagem: "Escolha Prova, Tarefa ou Trabalho." });
  }
  if (rascunho.materia.trim().length < 2) {
    erros.push({ campo: "materia", mensagem: "Informe a matéria." });
  }
  if (!rascunho.conteudos.some((conteudo) => conteudo.trim().length >= 2)) {
    erros.push({ campo: "conteudos", mensagem: "Informe o conteúdo que precisa ser estudado." });
  }
  if (!dataValida(rascunho.dataEntrega) || rascunho.dataEntrega < hoje) {
    erros.push({ campo: "dataEntrega", mensagem: "Informe uma data válida de hoje em diante." });
  }
  return erros;
}

export function tituloPadraoMissao(rascunho: RascunhoMissaoEscolar): string {
  if (rascunho.titulo?.trim()) return rascunho.titulo.trim();
  const rotulo = rascunho.tipo.charAt(0).toUpperCase() + rascunho.tipo.slice(1);
  return `${rotulo} de ${rascunho.materia.trim()}`;
}

export function criarConsultaExataRecursos(rascunho: RascunhoMissaoEscolar): string {
  const conteudos = rascunho.conteudos.map((item) => item.trim()).filter(Boolean).join(" ");
  const serie = rascunho.serie?.trim() ? ` ${rascunho.serie.trim()}` : "";
  return `${conteudos} ${rascunho.materia.trim()}${serie} aula explicada exercícios`.trim();
}

export function criarContextoTutor(rascunho: RascunhoMissaoEscolar): string {
  const conteudos = rascunho.conteudos.map((item) => item.trim()).filter(Boolean).join(", ");
  return [
    `TIPO DE MISSÃO: ${rascunho.tipo}`,
    `MATÉRIA OBRIGATÓRIA: ${rascunho.materia.trim()}`,
    `CONTEÚDOS OBRIGATÓRIOS: ${conteudos}`,
    rascunho.serie?.trim() ? `SÉRIE: ${rascunho.serie.trim()}` : null,
    "Explique como professor, em etapas curtas, e confira se a criança entendeu.",
    "Não troque de matéria, não invente outro conteúdo e não entregue somente a resposta.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function paginasObrigatoriasDaAula(): PaginaAulaEscolar[] {
  return [
    { ordem: 1, tipo: "acolhimento", titulo: "O que vamos aprender" },
    { ordem: 2, tipo: "objetivo", titulo: "Objetivo da missão" },
    { ordem: 3, tipo: "explicacao", titulo: "Explicação passo a passo" },
    { ordem: 4, tipo: "exemplo", titulo: "Exemplo resolvido" },
    { ordem: 5, tipo: "pratica_guiada", titulo: "Vamos fazer juntos" },
    { ordem: 6, tipo: "exercicio", titulo: "Agora é sua vez" },
    { ordem: 7, tipo: "revisao", titulo: "Revisão da missão" },
    { ordem: 8, tipo: "correcao", titulo: "Correção explicada" },
  ];
}
