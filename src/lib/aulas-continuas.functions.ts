import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { parseBNCC } from "@/escola-brilha/motor/resolver";

/**
 * Módulo de Motor de Decisão de Conteúdo
 * Responsável por decidir qual aula utilizar e se é necessária geração via IA.
 */

export const decidirConteudoAula = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    codigoBNCC: z.string(),
    childId: z.string(),
    idade: z.number().optional(),
    serie: z.string().optional(),
    nivelAtual: z.number().default(1)
  }).parse(data))
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
 * Módulo de Geração Pedagógica Gemini
 * Exclusivo para geração de novas aulas BNCC
 */
export const gerarAulaGemini = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    childId: z.string(),
    codigoBNCC: z.string(),
    nivel: z.number(),
    idade: z.number(),
    serie: z.string(),
    disciplina: z.string(),
    objetivo: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    // 1. Obter chave da API com segurança (no servidor)
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY não configurada no ambiente.");
    }

    // 2. Buscar perfil neuro da criança para personalização
    // Usando children_profiles conforme verificado nos tipos
    const { data: profile } = await supabase
      .from("children_profiles" as any)
      .select("*, anamnese_v2:anamnese_v2(*)")
      .eq("id", data.childId)
      .maybeSingle();

    // 3. Preparar Prompt Estruturado (Instrução 5/8)
    const systemPrompt = `Você é um Especialista em Neuroeducação e Design Pedagógico.
Gere uma AULA COMPLETA em JSON estruturado.

DADOS DO ALUNO:
- Idade: ${data.idade} anos
- Série: ${data.serie}
- Nível: ${data.nivel}
- Perfil: ${JSON.stringify((profile as any)?.anamnese_v2 || "Padrão")}

OBJETIVO:
- Disciplina: ${data.disciplina}
- Código BNCC: ${data.codigoBNCC}

REGRAS:
1. NÃO invente códigos BNCC. Use ${data.codigoBNCC}.
2. NÃO altere idade/série.
3. Sem emojis.
4. Estrutura JSON: titulo, objetivo, capitulos[], gabarito, criterios_conclusao.
5. Capítulos obrigatórios: introducao, explicacao, exemplo, atividade_guiada, atividade_independente, desafio, revisao, avaliacao, feedback.`;

    const model = "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 4096,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
    const resData = await res.json();
    const text = resData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Resposta vazia do Gemini");

    const aulaGerada = JSON.parse(text);

    // 4. Persistência Automática
    const { data: salva, error: saveError } = await supabase
      .from("aulas_geradas")
      .insert({
        titulo: aulaGerada.titulo,
        serie: data.serie,
        disciplina: data.disciplina,
        codigo_bncc: data.codigoBNCC,
        conteudo: aulaGerada,
        modelo_ia: model,
        nivel: data.nivel,
        status: 'approved' as any
      } as any)
      .select()
      .single();

    if (saveError) throw saveError;
    return { status: "sucesso", aula: salva };
  });

export const salvarAulaGerada = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    titulo: z.string(),
    serie: z.string(),
    disciplina: z.string(),
    codigoBNCC: z.string(),
    conteudo: z.any(),
    modeloIA: z.string(),
    objetivo: z.string().optional(),
    nivel: z.number().optional()
  }).parse(data))
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