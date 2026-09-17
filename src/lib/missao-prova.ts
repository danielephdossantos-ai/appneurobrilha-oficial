export const MIN_MENTOR_PAGES = 8;

export interface MissaoProvaAula {
  titulo: string;
  objetivo: string;
  conceitos_essenciais: string[];
  explicacao: string;
  exemplos_resolvidos: string[];
  pratica_guiada: string[];
  exercicios_independentes: string[];
  revisao: string[];
  correcao_explicada: string[];
}

export interface MentorPage {
  ordem: number;
  tipo: string;
  titulo: string;
  conteudo: Record<string, string | string[]>;
}

export function dataLocalHoje(): string {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

export function validarDataFutura(data: string, hoje = dataLocalHoje()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const [ano, mes, dia] = data.split("-").map(Number);
  if (ano < 1000 || mes < 1 || mes > 12 || dia < 1 || dia > 31) return false;
  const parsed = new Date(`${data}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return false;
  if (parsed.getFullYear() !== ano || parsed.getMonth() + 1 !== mes || parsed.getDate() !== dia) return false;
  return data > hoje;
}

export function montarTemaMissaoProva(materia: string, conteudos: string[], tituloSessao?: string): string {
  const topicos = conteudos.map((item) => item.trim()).filter(Boolean).join(", ");
  return [materia.trim(), topicos, tituloSessao?.trim()].filter(Boolean).join(" — ");
}

export function criarContextoPedagogicoMissaoProva(materia: string, conteudos: string[]): string {
  const materiaLimpa = materia.trim();
  const topicos = conteudos.map((item) => item.trim()).filter(Boolean).join(", ");
  return `MATÉRIA OBRIGATÓRIA: ${materiaLimpa}\nCONTEÚDOS OBRIGATÓRIOS: ${topicos}\nNão troque a matéria e não misture conteúdos de outra disciplina.`;
}

export function criarPaginasMissaoProva(aula: MissaoProvaAula): MentorPage[] {
  return [
    { ordem: 1, tipo: "objetivo", titulo: "Objetivo", conteudo: { texto: aula.objetivo } },
    { ordem: 2, tipo: "conceitos_essenciais", titulo: "Conceitos essenciais", conteudo: { bullets: aula.conceitos_essenciais } },
    { ordem: 3, tipo: "explicacao", titulo: "Explicação clara", conteudo: { texto: aula.explicacao } },
    { ordem: 4, tipo: "exemplo", titulo: "Exemplos resolvidos", conteudo: { passos: aula.exemplos_resolvidos } },
    { ordem: 5, tipo: "pratica_guiada", titulo: "Prática guiada", conteudo: { passos: aula.pratica_guiada } },
    { ordem: 6, tipo: "exercicio", titulo: "Agora é sua vez", conteudo: { bullets: aula.exercicios_independentes } },
    { ordem: 7, tipo: "revisao", titulo: "Revisão", conteudo: { bullets: aula.revisao } },
    { ordem: 8, tipo: "correcao_explicada", titulo: "Correção explicada", conteudo: { bullets: aula.correcao_explicada } },
  ];
}