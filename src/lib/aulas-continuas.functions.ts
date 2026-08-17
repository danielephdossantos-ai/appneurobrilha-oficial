import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { parseBNCC } from "@/escola-brilha/motor/resolver";
import { validarAulaIA } from "./validador-aulas.server";

/**
 * Módulo de Motor de Decisão de Conteúdo
 * Responsável por decidir qual aula utilizar e se é necessária geração via IA.
 */

export const decidirConteudoAula = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    codigoBNCC: z.string(),
    childId: z.string(),
    idade: z.number().optional(),
    serie: z.string().optional(),
    nivelAtual: z.number().default(1)
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const bncc = parseBNCC(data.codigoBNCC);
    
    // Regra Definitiva Neuro-Treino: somente até 7 anos.
    const isNeuroTreino = data.codigoBNCC.startsWith("NT");
    const idade = data.idade || 0;
    
    if (isNeuroTreino && idade >= 8) {
      return {
        status: "bloqueado",
        motivo: "Neuro-Treino disponível apenas para crianças até 7 anos.",
        sugestao: "Migrar para conteúdo pedagógico curricular."
      };
    }

    // 1. Tentar encontrar aula adequada (Série, Disciplina, BNCC, Nível)
    // Busca em: Biblioteca Oficial (estática), Banco de Aulas IA (bncc_conteudo / aulas_geradas)
    
    // 1.1. Verificar na biblioteca global de aulas geradas aprovadas
    const { data: existente } = await supabase
      .from("aulas_geradas")
      .select("*")
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("serie", data.serie || bncc.ano)
      .eq("nivel", data.nivelAtual)
      .eq("status", "approved" as any)
      .maybeSingle();

    if (existente) {
      // Registrar utilização e atualizar estatísticas da aula
      await registrarUsoBibliotecaIA(existente.id, data.childId);

      await registrarLogDecisao(data.childId, {
        serie: data.serie || bncc.ano,
        disciplina: bncc.disciplina,
        codigo_bncc: data.codigoBNCC,
        nivel: data.nivelAtual,
        aula_procurada: `BNCC:${data.codigoBNCC} Nível:${data.nivelAtual}`,
        aula_encontrada_id: existente.id,
        aula_encontrada_tipo: "ia",
        resultado: "encontrada"
      });

      return { 
        status: "pronta", 
        aulaId: existente.id, 
        titulo: existente.titulo,
        origem: "biblioteca_ia",
        conteudo: existente.conteudo
      };
    }

    // 1.2. Verificar se existe aula de nível seguinte para sugerir/utilizar
    const { data: nivelSeguinte } = await supabase
      .from("aulas_geradas")
      .select("*")
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("serie", data.serie || bncc.ano)
      .eq("nivel", data.nivelAtual + 1)
      .eq("status", "approved" as any)
      .maybeSingle();
      
    if (nivelSeguinte) {
       await registrarLogDecisao(data.childId, {
        serie: data.serie || bncc.ano,
        disciplina: bncc.disciplina,
        codigo_bncc: data.codigoBNCC,
        nivel: data.nivelAtual,
        aula_procurada: `BNCC:${data.codigoBNCC} Nível:${data.nivelAtual}`,
        aula_encontrada_id: nivelSeguinte.id,
        aula_encontrada_tipo: "ia_proximo_nivel",
        resultado: "encontrada"
      });

      return { 
        status: "pronta", 
        aulaId: nivelSeguinte.id, 
        titulo: nivelSeguinte.titulo,
        origem: "biblioteca_ia",
        conteudo: nivelSeguinte.conteudo,
        nota: "Utilizando aula do próximo nível disponível."
      };
    }

    // 2. Se não encontrou nada adequado, sinalizar necessidade de geração
    await registrarLogDecisao(data.childId, {
      serie: data.serie || bncc.ano,
      disciplina: bncc.disciplina,
      codigo_bncc: data.codigoBNCC,
      nivel: data.nivelAtual,
      aula_procurada: `BNCC:${data.codigoBNCC} Nível:${data.nivelAtual}`,
      resultado: "geracao_necessaria",
      motivo_geracao: "Nenhum conteúdo adequado encontrado na biblioteca global ou aulas prévias."
    });

    return { 
      status: "necessita_geracao", 
      codigoBNCC: data.codigoBNCC,
      nivel: data.nivelAtual,
      childId: data.childId,
      serie: data.serie || bncc.ano,
      disciplina: bncc.disciplina,
      idade: data.idade,
      motivo: "Nenhum conteúdo adequado encontrado na biblioteca permanente."
    };
  });

async function registrarLogDecisao(childId: string, log: any) {
  const { supabase } = await import("@/integrations/supabase/client");
  await supabase.from("motor_decisao_logs").insert({
    child_id: childId,
    ...log
  } as any);
}

/**
 * Registra o uso de uma aula da biblioteca IA e atualiza estatísticas
 */
async function registrarUsoBibliotecaIA(aulaId: string, childId: string) {
  const { supabase } = await import("@/integrations/supabase/client");
  
  // 1. Incrementar total de usos e atualizar data da última utilização
  // Usamos um RPC ou uma atualização simples (embora concorrência possa ser tema, aqui é pedagógico)
  const { data: aula } = await supabase
    .from("aulas_geradas")
    .select("total_usos, total_criancas, ultima_utilizacao")
    .eq("id", aulaId)
    .single();

  if (aula) {
    // Verificar se é uma nova criança usando esta aula
    const { count } = await supabase
      .from("motor_decisao_logs")
      .select("*", { count: 'exact', head: true })
      .eq("aula_encontrada_id", aulaId)
      .eq("child_id", childId);
    
    const isNovaCrianca = (count || 0) === 0;

    await supabase
      .from("aulas_geradas")
      .update({
        total_usos: (aula.total_usos || 0) + 1,
        total_criancas: isNovaCrianca ? (aula.total_criancas || 0) + 1 : aula.total_criancas,
        ultima_utilizacao: new Date().toISOString()
      } as any)
      .eq("id", aulaId);
  }
}

/**
 * Módulo de Geração Pedagógica Gemini
 * Exclusivo para geração de novas aulas BNCC
 */
export const gerarAulaGemini = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    childId: z.string(),
    codigoBNCC: z.string(),
    nivel: z.number(),
    idade: z.number(),
    serie: z.string(),
    disciplina: z.string(),
    objetivo: z.string().optional()
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { callGemini } = await import("./gemini.server");
    
    // 1. Buscar perfil neuro da criança para personalização
    const { data: profile } = await supabase
      .from("children_profiles" as any)
      .select("*, anamnese_v2:anamnese_v2(*)")
      .eq("id", data.childId)
      .maybeSingle();

    // 2. Preparar Prompt Estruturado (Instrução 5/8)
    const systemPrompt = `Você é um Especialista em Neuroeducação e Design Pedagógico.
Gere uma AULA COMPLETA em JSON estruturado para uma criança.

DADOS DO ALUNO:
- Idade: ${data.idade} anos
- Série: ${data.serie}
- Nível: ${data.nivel} (1: Iniciante, 2: Prática, 3: Consolidação, 4: Maestria)
- Perfil Neuro: ${JSON.stringify((profile as any)?.anamnese_v2 || "Padrão")}

OBJETIVO PEDAGÓGICO:
- Disciplina: ${data.disciplina}
- Código BNCC: ${data.codigoBNCC}
- Objetivo Específico: ${data.objetivo || "Desenvolver a habilidade proposta pela BNCC"}

REGRAS OBRIGATÓRIAS:
1. NÃO invente códigos BNCC. Use rigorosamente ${data.codigoBNCC}.
2. NÃO altere idade ou série.
3. PROIBIDO o uso de EMOJIS (distração visual para neurodivergentes).
4. Use linguagem infantil adequada para ${data.idade} anos.
5. Se idade <= 6 anos: Foco em imagens (descreva-as como objetos JSON).

ESTRUTURA DO JSON (DEVE SER VÁLIDO):
{
  "titulo": "Título lúdico",
  "objetivo": "...",
  "capitulos": [
    { "ordem": 1, "tipo": "introducao", "conteudo": "..." },
    { "ordem": 2, "tipo": "explicacao", "conteudo": "..." },
    { "ordem": 3, "tipo": "exemplo", "conteudo": "..." },
    { "ordem": 4, "tipo": "atividade_guiada", "conteudo": "...", "atividade": { "pergunta": "...", "opcoes": [], "correta": 0 } },
    { "ordem": 5, "tipo": "atividade_independente", "conteudo": "..." },
    { "ordem": 6, "tipo": "desafio", "conteudo": "..." },
    { "ordem": 7, "tipo": "revisao", "conteudo": "..." },
    { "ordem": 8, "tipo": "avaliacao", "conteudo": "...", "questoes": [] },
    { "ordem": 9, "tipo": "feedback", "conteudo": "..." }
  ],
  "gabarito": { ... },
  "criterios_conclusao": "..."
}

Retorne APENAS o JSON.`;

    // 3. Chamar Gemini através do helper centralizado
    const text = await callGemini({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere a aula para o código ${data.codigoBNCC} nível ${data.nivel}` }
      ],
      model: "gemini-1.5-flash",
      temperature: 0.2,
      json: true
    });

    let aulaGerada;
    try {
      aulaGerada = JSON.parse(text);
    } catch (e) {
      console.error("Gemini gerou JSON inválido:", text);
      throw new Error("Falha na estruturação da aula (JSON inválido)");
    }

    // 4. Validação da Aula (Implementação 6/8)
    const validacao = await validarAulaIA(aulaGerada, {
      codigoBNCC: data.codigoBNCC,
      idade: data.idade,
      serie: data.serie,
      disciplina: data.disciplina,
      nivel: data.nivel,
      modelo: "gemini-1.5-flash"
    });

    // 5. Persistência e Registro (Só aprova se passar na validação)
    const { data: salva, error: saveError } = await supabase
      .from("aulas_geradas")
      .insert({
        titulo: aulaGerada.titulo,
        serie: data.serie,
        disciplina: data.disciplina,
        codigo_bncc: data.codigoBNCC,
        conteudo: aulaGerada,
        modelo_ia: "gemini-1.5-flash",
        nivel: data.nivel,
        status: validacao.status,
        metadata_validacao: validacao // Salvando log completo da validação
      } as any)
      .select()
      .single();

    if (saveError) throw saveError;

    if (validacao.status !== 'approved') {
      return { 
        status: "validacao_falhou", 
        resultado: validacao.status,
        motivos: validacao.motivos,
        aula: salva 
      };
    }

    return { status: "sucesso", aula: salva };
  });

export const salvarAulaGerada = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    titulo: z.string(),
    serie: z.string(),
    disciplina: z.string(),
    codigoBNCC: z.string(),
    conteudo: z.any(),
    modeloIA: z.string(),
    objetivo: z.string().optional(),
    nivel: z.number().optional()
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    // Verificação de duplicidade antes de salvar
    const { data: duplicada } = await supabase
      .from("aulas_geradas")
      .select("id")
      .eq("serie", data.serie)
      .eq("disciplina", data.disciplina)
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("nivel", data.nivel || 1)
      .eq("status", "approved" as any)
      .maybeSingle();

    if (duplicada) {
      return { status: "duplicada", id: duplicada.id };
    }

    const { data: novaAula, error } = await supabase
      .from("aulas_geradas")
      .insert({
        titulo: data.titulo,
        serie: data.serie,
        disciplina: data.disciplina,
        codigo_bncc: data.codigoBNCC,
        conteudo: data.conteudo,
        modelo_ia: data.modeloIA,
        objetivo_pedagogico: data.objetivo,
        nivel: data.nivel || 1,
        status: 'draft' as any // Inicialmente como rascunho para validação
      } as any)
      .select()
      .single();

    if (error) throw error;
    return { status: "salva", aula: novaAula };
  });