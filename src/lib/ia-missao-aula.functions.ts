import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/database/supabase/client";
import { aiOrchestrator } from "./ai-orchestrator.server";

/**
 * Motor de IA para Missão Prova e Trabalho.
 * Gera aulas persistentes com explicações, exemplos e blocos de Lousa Interativa.
 * Agora com Orquestrador Único e Fallback.
 */

export const gerarAulaMissaoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    missaoId: z.string(),
    sessionId: z.string().optional(), // ID do tópico no plano de estudo
    topico: z.string(),
    materia: z.string(),
    criancaId: z.string(),
    tipo: z.enum(["prova", "trabalho"])
  }).parse(data))
  .handler(async ({ data }) => {
    const { missaoId, sessionId, topico, materia, criancaId, tipo } = data;
    
    // 1. Buscar contexto da criança
    const { data: child } = await supabase
      .from("children")
      .select("nome, idade, serie, diagnostico, hiperfoco")
      .eq("id", criancaId)
      .maybeSingle();

    const hiperfoco = child?.hiperfoco || "Interesses gerais";
    const idade = child?.idade || 8;
    const diagnostico = child?.diagnostico || "Não informado";

    // 2. BUSCA PEDAGÓGICA (REUTILIZAÇÃO)
    // Procuramos por disciplina, tópico (similar), ano e nível
    const { data: aulaExistente } = await supabase
      .from("rb_aulas")
      .select("id, usage_count")
      .eq("titulo", `Missão: ${topico}`)
      .eq("faixa_etaria", `${idade} anos`)
      .maybeSingle();

    if (aulaExistente) {
      console.log(`[Reuso] Aula encontrada! Reutilizando ID: ${aulaExistente.id}`);
      // Incrementar contador de uso (opcional, mas bom para estatística)
      await supabase
        .from("rb_aulas")
        .update({ usage_count: (aulaExistente.usage_count || 0) + 1 } as any)
        .eq("id", aulaExistente.id);
        
      // Vincular se houver sessionId
      if (sessionId) {
        await supabase
          .from("exam_study_plans")
          .update({ aula_id: aulaExistente.id } as any)
          .eq("id", sessionId);
      }
        
      return { aulaId: aulaExistente.id, recemGerada: false };
    }

    // 3. Prompt para o Professor Mentor
    const systemPrompt = `Você é o PROFESSOR MENTOR do NeuroBrilha Kids, especialista em neuroeducação.
Sua missão é gerar uma AULA COMPLETA para uma ${tipo === "prova" ? "revisão de prova" : "preparação de trabalho"}.

CONTEXTO DO ALUNO:
- Nome: ${child?.nome || "Criança"}
- Idade: ${idade} anos
- Diagnóstico: ${diagnostico}
- HIPERFOCO (OBRIGATÓRIO USAR NOS EXEMPLOS): ${hiperfoco}

ESTRUTURA DA AULA (JSON):
A aula deve seguir um fluxo de 6 a 12 capítulos (momentos pedagógicos).
Para Matemática ou Ciências, use SEMPRE o formato "lousaPassos" para explicações passo a passo.

FLUXO PEDAGÓGICO OBRIGATÓRIO:
1. Apresentação (usando hiperfoco)
2. Explicação simples
3. Exemplo na Lousa (lousaPassos)
4. Resolução passo a passo
5. Prática guiada
6. Verificação final

FORMATO DOS BLOCOS DE CONTEÚDO:
- { "texto": "..." }
- { "destaque": "..." }
- { "bullets": ["...", "..."] }
- { "passos": ["...", "..."] }
- { "lousaPassos": { "titulo": "...", "passos": [{ "expr": "...", "explica": "...", "status": "ok" }] } }
- { "perguntas": [{ "pergunta": "...", "resposta": "..." }] }

A resposta DEVE ser um JSON válido:
{
  "titulo": "Título da Missão usando o Hiperfoco",
  "objetivo": "O que vamos aprender hoje",
  "paginas": [
    {
      "ordem": 1,
      "tipo": "explicacao",
      "titulo": "Início da Missão",
      "conteudo": { "texto": "..." }
    },
    ...
  ]
}`;

    // 4. CHAMAR ORQUESTRADOR DE IA
    const aiResult = await aiOrchestrator({
      label: `missao-${tipo}:${topico}`,
      json: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere uma aula completa de ${tipo} sobre "${topico}" de ${materia}. Use o hiperfoco "${hiperfoco}".` }
      ],
      temperature: 0.6
    });

    if (!aiResult.ok) {
      console.error(`[ADMIN_IA_AUDIT] Erro crítico no Orquestrador: ${aiResult.motivo} | Detalhe: ${aiResult.detalhe}`);
      throw new Error(aiResult.motivo || "Falha na geração da IA");
    }

    let aulaIA;
    try {
      // Remover qualquer lixo que tenha sobrado
      const jsonLimpo = aiResult.text.trim();
      aulaIA = JSON.parse(jsonLimpo);
      
      if (!aulaIA.paginas || !Array.isArray(aulaIA.paginas)) {
        throw new Error("A estrutura da aula gerada é inválida (faltam páginas).");
      }
    } catch (e: any) {
      console.error("[ADMIN_IA_AUDIT] Falha crítica no JSON.parse():", e.message);
      console.error("[ADMIN_IA_AUDIT] Texto bruto da IA:", aiResult.text);
      throw new Error(`A resposta da IA não é um JSON válido. (Fonte: ${aiResult.fonte})`);
    }

    // 5. VALIDAR E PERSISTIR
    // Buscar categoria "Pedagógico"
    let { data: cat } = await supabase.from("rb_categorias").select("id").eq("nome", "Pedagógico").maybeSingle();
    if (!cat) {
       const { data: newCat } = await supabase.from("rb_categorias").insert({ nome: "Pedagógico", ordem: 99 }).select().single();
       cat = newCat;
    }

    let { data: hab } = await supabase.from("rb_habilidades").select("id").eq("nome", "Missões de Estudo IA").maybeSingle();
    if (!hab) {
       const { data: newHab } = await supabase.from("rb_habilidades").insert({
         categoria_id: cat!.id,
         nome: "Missões de Estudo IA",
         descricao: "Aulas geradas automaticamente"
       }).select().single();
       hab = newHab;
    }

    const { data: aula, error: aulaError } = await supabase.from("rb_aulas").insert({
      habilidade_id: hab!.id,
      titulo: `Missão: ${topico}`,
      objetivo: aulaIA.objetivo || "Revisão personalizada",
      nivel: "basico",
      faixa_etaria: `${idade} anos`,
      ordem: 0
    } as any).select().single();

    if (aulaError || !aula) {
       console.error("Erro ao salvar rb_aulas:", aulaError);
       throw new Error("Falha ao salvar cabeçalho da aula");
    }

    const paginas = aulaIA.paginas.map((p: any, idx: number) => ({
      aula_id: aula.id,
      ordem: p.ordem || idx + 1,
      tipo: p.tipo || "explicacao",
      titulo: p.titulo || `Etapa ${idx + 1}`,
      conteudo: p.conteudo || {}
    }));

    await supabase.from("rb_paginas_aula").insert(paginas);
    
    // VINCULAR À MISSÃO/SESSÃO
    if (sessionId) {
      console.log(`[Persistência] Vinculando aula ${aula.id} à sessão ${sessionId}`);
      const { error: linkError } = await supabase
        .from("exam_study_plans")
        .update({ aula_id: aula.id } as any)
        .eq("id", sessionId);
        
      if (linkError) {
        console.error("Erro ao vincular aula ao plano de estudo:", linkError);
      }
    }
    
    return { aulaId: aula.id, recemGerada: true, fonte: aiResult.fonte };
  });
