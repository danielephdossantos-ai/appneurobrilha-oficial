import { z } from "zod";

export const AulaSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  tipo: z.enum(['neuro-treino', 'alfabetizacao', 'curriculo', 'missao']),
  duracao: z.number().optional(), // em minutos
  concluida: z.boolean().default(false),
  thumbnail: z.string().optional(),
  path: z.string(), // rota para abrir a aula
});

export type Aula = z.infer<typeof AulaSchema>;

export const NodeTrilhaSchema = z.object({
  id: z.string(),
  diaNumero: z.number(),
  dataLiberacao: z.string(), // ISO Date
  status: z.enum(['bloqueado', 'disponivel', 'concluido', 'falta']),
  aulasDoDia: z.array(AulaSchema),
});

export type NodeTrilha = z.infer<typeof NodeTrilhaSchema>;

/**
 * Lógica para calcular o status de um nó baseado na data atual e progresso anterior
 */
export function calcularStatusNode(
  node: NodeTrilha, 
  index: number, 
  totalNodes: NodeTrilha[]
): NodeTrilha['status'] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const dataNode = new Date(node.dataLiberacao);
  dataNode.setHours(0, 0, 0, 0);

  // Se já está marcado como concluído, mantém
  if (String(node.status) === 'concluido') return 'concluido';

  // Se é uma data futura, está bloqueado
  if (dataNode > hoje) return 'bloqueado';

  // Se é o primeiro dia ou o anterior está concluído
  const anteriorConcluido = index === 0 || String(totalNodes[index - 1].status) === 'concluido';

  if (anteriorConcluido) {
    return 'disponivel';
  }

  // Se passou da data e o anterior não foi feito, é falta
  if (dataNode < hoje) return 'falta';

  return 'bloqueado';
}
