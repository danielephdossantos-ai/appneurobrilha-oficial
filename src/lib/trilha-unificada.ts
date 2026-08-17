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
  status: z.enum(['bloqueado', 'disponivel', 'concluido', 'nao_realizado']),
  aulasDoDia: z.array(AulaSchema),
});

export type NodeTrilha = z.infer<typeof NodeTrilhaSchema>;

/**
 * Lógica para calcular o status de um nó baseado na data atual e progresso anterior
 */
export function calcularStatusNode(
  node: NodeTrilha, 
  hoje: Date, 
  noAnteriorConcluido: boolean
): NodeTrilha['status'] {
  const dataNode = new Date(node.dataLiberacao);
  const isPassado = dataNode < hoje && dataNode.toDateString() !== hoje.toDateString();
  const isHoje = dataNode.toDateString() === hoje.toDateString();

  if (node.status === 'concluido') return 'concluido';
  
  if (!noAnteriorConcluido && node.diaNumero > 1) {
    return 'bloqueado';
  }

  if (isPassado && node.status !== 'concluido') {
    return 'nao_realizado';
  }

  if (isHoje || (isPassado && noAnteriorConcluido)) {
    return 'disponivel';
  }

  return 'bloqueado';
}
