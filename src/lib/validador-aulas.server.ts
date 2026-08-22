import { z } from "zod";

// Utility to parse BNCC (isolated from main resolver to avoid Vite specific helpers in tests)
function parseBNCCLocal(codigo: string) {
  const c = (codigo || "").toUpperCase().trim();
  const etapaSigla = c.slice(0, 2);
  const anoSigla = c.slice(2, 4);
  const disciplinaSigla = c.slice(4, 6);
  const DISCIPLINAS: Record<string, string> = {
    MA: "Matemática", LP: "Língua Portuguesa", CI: "Ciências", HI: "História", GE: "Geografia",
    AR: "Arte", EF: "Educação Física", EN: "Língua Inglesa", ER: "Ensino Religioso", EO: "Campos de Experiência"
  };
  return {
    codigo: c,
    etapaSigla,
    anoSigla,
    disciplina: DISCIPLINAS[disciplinaSigla] ?? disciplinaSigla
  };
}

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
  
  // 1. JSON válido e Campos obrigatórios (Validação estrutural)
  const parsed = AULA_SCHEMA.safeParse(aulaContent);
  if (!parsed.success) {
    motivos.push("JSON inválido ou campos obrigatórios ausentes: " + parsed.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', '));
    return { status: 'rejected', motivos, data: now, versao: "1.2", modelo: context.modelo };
  }

  const aula = parsed.data;
  const bnccData = parseBNCCLocal(context.codigoBNCC);

  // 2. Validação Pedagógica de Identidade
  if (context.serie !== 'EI' && !context.codigoBNCC.includes(context.serie)) {
     // Apenas log de aviso, pois códigos BNCC às vezes não contém a série explicitamente na string de busca
  }

  // 3. Disciplina
  if (bnccData.disciplina !== context.disciplina && context.disciplina !== 'Neuro-Treino' && context.disciplina !== 'Apoio') {
    motivos.push(`Divergência de Disciplina: Esperado ${bnccData.disciplina}, recebido ${context.disciplina}`);
  }

  // 4. Coerência de Objetivo
  if (!aula.objetivo.toLowerCase().includes(bnccData.disciplina.toLowerCase()) && 
      !aula.titulo.toLowerCase().includes(bnccData.disciplina.toLowerCase()) &&
      !aula.objetivo.toLowerCase().includes(context.codigoBNCC.toLowerCase())) {
     motivos.push("Objetivo da aula parece não estar alinhado ao código BNCC ou Disciplina fornecidos.");
  }

  // 5. Duplicidade de Conteúdo Interno
  const conteudos = aula.capitulos.map(c => c.conteudo.substring(0, 100));
  const uniqueConteudos = new Set(conteudos);
  if (uniqueConteudos.size < conteudos.length) {
    motivos.push("Conteúdo repetitivo detectado entre capítulos da aula.");
  }

  // 6. Verificação de Atividades
  const temAtividade = aula.capitulos.some(c => c.atividade || (c.questoes && c.questoes.length > 0));
  if (!temAtividade) {
    motivos.push("Aula sem atividades práticas (Atividade Guiada/Independente/Avaliação).");
  }

  // 6.1 Ensino deve vir ANTES da cobrança. Uma aula educacional não pode ser só quiz.
  const tiposEnsino = /explica|ensino|introdu|model|exemplo|descoberta|conceito/i;
  const indiceEnsino = aula.capitulos.findIndex(c => tiposEnsino.test(c.tipo) && c.conteudo.trim().length >= 30);
  const indicePrimeiraAtividade = aula.capitulos.findIndex(c => !!c.atividade || !!(c.questoes && c.questoes.length));
  if (indiceEnsino < 0) {
    motivos.push("Aula sem etapa explícita de ensino/explicação antes da prática.");
  } else if (indicePrimeiraAtividade >= 0 && indiceEnsino > indicePrimeiraAtividade) {
    motivos.push("Aula cobra atividade antes de apresentar ensino/explicação.");
  }

  // 6.2 Verificação determinística de contas literais simples.
  // Para evitar falso positivo em expressões compostas, só valida uma linha/capítulo
  // quando o conteúdo inteiro é uma igualdade aritmética simples.
  const linhasMat = aula.capitulos.flatMap(c => c.conteudo.split(/\n+/).map(l => l.trim()).filter(Boolean));
  const contaInteiraRe = /^(-?\d+(?:[.,]\d+)?)\s*([+×*÷])\s*(-?\d+(?:[.,]\d+)?)\s*=\s*(-?\d+(?:[.,]\d+)?)\s*[.!]?$/;
  for (const linha of linhasMat) {
    const m = linha.match(contaInteiraRe);
    if (!m) continue;
    const a = Number(m[1].replace(",", "."));
    const b = Number(m[3].replace(",", "."));
    const informado = Number(m[4].replace(",", "."));
    let esperado: number | null = null;
    if (m[2] === "+") esperado = a + b;
    else if (["×", "*"].includes(m[2])) esperado = a * b;
    else if (m[2] === "÷" && b !== 0) esperado = a / b;
    if (esperado !== null && Math.abs(esperado - informado) > 1e-9) {
      motivos.push(`Erro matemático objetivo detectado: ${linha} (resultado esperado: ${esperado}).`);
    }
  }

  // 7. Filtro de Linguagem e Segurança (Neuroeducação)
  const textoCompleto = JSON.stringify(aula).toLowerCase();
  
  // Emojis (Proibido conforme Regra de Ouro)
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  if (emojiRegex.test(textoCompleto)) {
    motivos.push("A aula contém emojis, o que viola o padrão visual para neurodivergentes (distração).");
  }

  // Termos Inadequados
  const termosProibidos = ['burro', 'estúpido', 'idiota', 'matar', 'sangue', 'violência', 'sexo'];
  for (const termo of termosProibidos) {
    if (textoCompleto.includes(termo)) {
      motivos.push(`Conteúdo inadequado: presença do termo '${termo}'.`);
      return { status: 'rejected', motivos, data: now, versao: "1.2", modelo: context.modelo };
    }
  }

  // 8. Validação de Gabarito
  if (typeof aula.gabarito !== 'object' && typeof aula.gabarito !== 'string') {
    motivos.push("Gabarito em formato inválido ou inexistente.");
  }

  // 9. Coerência Pergunta x Resposta
  aula.capitulos.forEach((cap, idx) => {
    if (cap.atividade && cap.atividade.opcoes) {
      if (cap.atividade.correta < 0 || cap.atividade.correta >= cap.atividade.opcoes.length) {
        motivos.push(`Erro na Atividade ${idx + 1}: índice da resposta correta inválido.`);
      }
    }
  });

  // Determinação do Status Final
  let status: ValidationResult['status'] = 'approved';
  if (motivos.length > 0) {
    // Se tiver erros críticos (Emoji ou Estrutura) vai para rejeição ou correção
    const temEmoji = motivos.some(m => m.includes("emojis"));
    const temErroGrave = motivos.some(m => m.includes("JSON inválido") || m.includes("inadequado") || m.includes("Erro matemático objetivo"));
    
    if (temErroGrave) status = 'rejected';
    else status = 'correction_required';
  }

  return {
    status,
    motivos,
    data: now,
    versao: "1.2",
    modelo: context.modelo
  };
}
