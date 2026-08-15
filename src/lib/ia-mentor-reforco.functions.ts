import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * IA Mentor Reforço - Sistema de Geração de Aulas Contínuo via Gemini
 */

export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    dificuldade: z.string(),
    criancaId: z.string(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const diffNorm = data.dificuldade.toLowerCase().trim();
    const { supabase } = await import("@/integrations/supabase/client");
    const { callGemini } = await import("./gemini.server");

    try {
      // 1. Tentar encontrar uma aula já gerada no banco (Reutilização)
      const { data: existente } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .select("*")
        .filter("dificuldade_original", "eq", diffNorm)
        .limit(1)
        .maybeSingle();

      if (existente) {
        return { 
          aula: existente.conteudo, 
          origem: "reutilizada",
          id: existente.id 
        };
      }
    } catch (e) {
      console.warn("Busca no cache falhou:", e);
    }

    // 2. Prompt do Sistema focado em ensinar para mães
    const systemPrompt = `Você é um Especialista em Pedagogia e Neuroeducação.
Sua missão é gerar um plano de aula completo e explicativo para uma MÃE ajudar seu filho com uma dificuldade específica.
Use uma linguagem didática, acolhedora e prática.

A resposta DEVE ser um JSON no seguinte formato:
{
  "titulo": "Título da Aula",
  "objetivo": "O que a criança vai aprender",
  "passos": [
    { 
      "tipo": "explicação", 
      "texto": "Explicação clara do conceito para a mãe ler ou explicar." 
    },
    { 
      "tipo": "exemplo", 
      "texto": "Um exemplo prático do dia a dia." 
    },
    { 
      "tipo": "prática", 
      "texto": "Uma atividade guiada passo a passo." 
    },
    { 
      "tipo": "desafio", 
      "texto": "Um pequeno desafio para fixação." 
    },
    { 
      "tipo": "revisão", 
      "texto": "Dicas para a mãe revisar o conteúdo depois." 
    }
  ]
}

FOCO: Dificuldade: "${data.dificuldade}".
Considere o perfil neurodivergente se informado: "${data.perfilNeuro ?? 'Não informado'}".`;

    // 3. Chamada exclusiva ao Gemini 1.5 Flash
    const responseText = await callGemini({
      model: "gemini-3.7-flash",
      json: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere um plano de reforço para: ${data.dificuldade}` }
      ]
    });

    const novaAula = JSON.parse(responseText);
    let salvaId = "temp-" + Date.now();

    try {
      // 4. Salvar no Supabase para reutilização global
      const { data: salva, error } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .insert({
          dificuldade_original: diffNorm,
          conteudo: novaAula,
          tags: diffNorm.split(" ").filter(t => t.length > 3)
        })
        .select()
        .single();

      if (!error && salva) {
        salvaId = salva.id;
        
        // 5. AUTO-GERAR PÁGINAS PARA A APOSTILA
        const paginas = novaAula.passos.map((passo: any, index: number) => ({
          aula_id: salvaId,
          ordem: index + 1,
          tipo: passo.tipo === "explicação" ? "explicacao" : 
                passo.tipo === "exemplo" ? "exemplo" :
                passo.tipo === "prática" ? "pratica_guiada" :
                passo.tipo === "desafio" ? "avaliacao" : "proximos_passos",
          titulo: passo.tipo.toUpperCase(),
          conteudo: { texto: passo.texto }
        }));

        await (supabase as any).from("rb_paginas_aula").insert(paginas);
      }
    } catch (e) {
      console.error("Erro ao persistir aula do Gemini:", e);
    }

    return { 
      aula: novaAula, 
      origem: "gerada_gemini",
      id: salvaId 
    };
  });
