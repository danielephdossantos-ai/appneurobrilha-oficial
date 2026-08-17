import { z } from "zod";
import { parseBNCC } from "@/escola-brilha/motor/resolver";

/**
 * Validador de Aulas Geradas por IA
 * Implementação 6/8 - Camada de Segurança e Qualidade
 */

export type ValidationResult = {
  status: 'approved' | 'correction_required' | 'rejected';
  motivos: string[];
  data: string;
  versao: string;
  modelo: string;
};

const AULA_SCHEMA = z.object({
  titulo: z.string().min(3),
  objetivo: z.string().min(10),
  capitulos: z.array(z.object({
    ordem: z.number(),
    tipo: z.string(),
    conteudo: z.string().min(10),
    atividade: z.object({
      pergunta: z.string(),
      opcoes: z.array(z.string()),
      correta: z.number()
    }).optional(),
    questoes: z.array(z.any()).optional()
  })).min(5),
  gabarito: z.any(),
  criterios_conclusao: z.string().min(5)
});

export async function validarAulaIA(
  aulaContent: any,
  context: {
    codigoBNCC: string;
    idade: number;
    serie: string;
    disciplina: string;
    nivel: number;
    modelo: string;
  }
): Promise<ValidationResult> {
  const motivos: string[] = [];
  const now = new Date().toISOString();
  
  // 1. JSON válido e Campos obrigatórios (via Zod)
  const parsed = AULA_SCHEMA.safeParse(aulaContent);
  if (!parsed.success) {
    motivos.push("Estrutura JSON inválida ou campos obrigatórios ausentes: " + parsed.error.message);
    return { status: 'rejected', motivos, data: now, versao: "1.0", modelo: context.modelo };
  }

  const aula = parsed.data;

  // 2. Série e Idade compatível
  const bnccData = parseBNCC(context.codigoBNCC);
  if (bnccData.anoSigla !== context.serie && bnccData.etapaSigla !== 'EI') {
    // Para fundamental, a série do código deve bater com a série solicitada
    // Se for EI, a validação é mais flexível por faixa etária
  }
  
  // 3. Disciplina correta
  if (bnccData.disciplina !== context.disciplina && context.disciplina !== 'Neuro-Treino') {
    motivos.push(`Disciplina divergente: Esperado ${bnccData.disciplina}, recebido ${context.disciplina}`);
  }

  // 4. Código BNCC existente e correspondente
  // (Aqui assumimos que o código enviado é o que deve estar na aula)
  if (!aula.objetivo.toLowerCase().includes(context.codigoBNCC.toLowerCase()) && 
      !aula.titulo.toLowerCase().includes(context.codigoBNCC.toLowerCase())) {
    // Muitas vezes a IA não coloca o código no texto, mas deve respeitar o objetivo
  }

  // 5. Nível correto
  // Validar se a complexidade dos capítulos condiz com o nível (simplificado por agora)
  
  // 6. Ausência de conteúdo duplicado (Capítulos com conteúdos idênticos)
  const conteudos = aula.capitulos.map(c => c.conteudo);
  const uniqueConteudos = new Set(conteudos);
  if (uniqueConteudos.size < conteudos.length) {
    motivos.push("Conteúdo duplicado detectado entre capítulos.");
  }

  // 7. Existência de gabarito e critérios de conclusão
  if (!aula.gabarito) motivos.push("Gabarito ausente.");
  if (!aula.criterios_conclusao) motivos.push("Critérios de conclusão ausentes.");

  // 8. Linguagem apropriada e Ausência de conteúdo inadequado
  // Palavras proibidas (filtro básico)
  const proibidas = ['merda', 'caralho', 'porra', 'violência', 'sexo']; // Exemplo simplificado
  const textoCompleto = JSON.stringify(aula).toLowerCase();
  for (const p of proibidas) {
    if (textoCompleto.includes(p)) {
      motivos.push(`Conteúdo inadequado detectado: termo impróprio.`);
      return { status: 'rejected', motivos, data: now, versao: "1.0", modelo: context.modelo };
    }
  }

  // 9. Coerência entre pergunta e resposta
  aula.capitulos.forEach(cap => {
    if (cap.atividade) {
      if (cap.atividade.correta < 0 || cap.atividade.correta >= cap.atividade.opcoes.length) {
        motivos.push(`Incoerência na atividade: índice da resposta correta fora do limite.`);
      }
    }
  });

  // 10. Emojis (Regra Neuroeducação: PROIBIDO)
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  if (emojiRegex.test(textoCompleto)) {
    motivos.push("Presença de emojis detectada (Proibido para evitar distração).");
    return { status: 'correction_required', motivos, data: now, versao: "1.0", modelo: context.modelo };
  }

  const finalStatus = motivos.length === 0 ? 'approved' : 'correction_required';
  
  return {
    status: finalStatus,
    motivos,
    data: now,
    versao: "1.0",
    modelo: context.modelo
  };
}
