import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callGemini } from "./gemini.server";
import { supabase } from "@/integrations/supabase/client";

/**
 * Motor de IA para Missão Prova e Trabalho.
 * Gera aulas persistentes com explicações, exemplos e blocos de Lousa Interativa.
 */

export const gerarAulaMissaoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    missaoId: z.string(),
    topico: z.string(),
    materia: z.string(),
    criancaId: z.string(),
    tipo: z.enum(["prova", "trabalho"])
  }).parse(data))
  .handler(async ({ data }) => {
    const { missaoId, topico, materia, criancaId, tipo } = data;
    
    // 1. Buscar contexto da criança
    const { data: child } = await supabase
      .from("children")
      .select("nome, idade, serie, diagnostico, hiperfoco")
      .eq("id", criancaId)
      .maybeSingle();

    const hiperfoco = child?.hiperfoco || "Interesses gerais";
    const idade = child?.idade || 8;
    const diagnostico = child?.diagnostico || "Não informado";

    // 2. Tentar encontrar aula já gerada para este tópico
    // Usamos um prefixo no título para identificar missões de IA
    const tituloBusca = `Missão: ${topico}`;
    const { data: aulaExistente } = await supabase
      .from("rb_aulas")
      .select("id, titulo, objetivo")
      .eq("titulo", tituloBusca)
      .eq("nivel", "basico")
      .maybeSingle();

    if (aulaExistente) {
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
A aula deve seguir um fluxo de 6 capítulos usando blocos de conteúdo variados.
Especialmente para Matemática ou Ciências, use o formato "lousaPassos" para explicações passo a passo.

FORMATO DOS BLOCOS DE CONTEÚDO:
- { "texto": "..." }
- { "destaque": "..." }
- { "bullets": ["...", "..."] }
- { "passos": ["...", "..."] }
- { "lousaPassos": { "titulo": "...", "passos": [{ "expr": "...", "explica": "...", "status": "ok" }] } }
- { "perguntas": [{ "pergunta": "...", "resposta": "..." }] }

A resposta DEVE ser um JSON:
{
  "titulo": "Título da Missão usando o Hiperfoco",
  "objetivo": "O que vamos aprender hoje",
  "paginas": [
    {
      "ordem": 1,
      "tipo": "explicacao",
      "titulo": "Início da Missão",
      "conteudo": { "texto": "Explicação inicial do tópico..." }
    },
    {
      "ordem": 2,
      "tipo": "exemplo",
      "titulo": "Exemplo Prático",
      "conteudo": { 
        "lousaPassos": {
          "titulo": "Resolvendo com ${hiperfoco}",
          "passos": [
             { "expr": "Expressão matemática ou lógica", "explica": "Explicação simples" },
             { "expr": "Próximo passo", "explica": "O que fizemos agora" }
          ]
        }
      }
    },
    {
      "ordem": 3,
      "tipo": "demonstracao",
      "titulo": "Entendendo Melhor",
      "conteudo": { "destaque": "Analogia poderosa usando ${hiperfoco}." }
    },
    {
      "ordem": 4,
      "tipo": "pratica_guiada",
      "titulo": "Vamos Treinar",
      "conteudo": { "passos": ["Primeiro faça isso...", "Depois aquilo..."] }
    },
    {
      "ordem": 5,
      "tipo": "avaliacao",
      "titulo": "Desafio do Pip",
      "conteudo": { "perguntas": [{ "pergunta": "Pergunta de revisão", "resposta": "Resposta explicada" }] }
    },
    {
      "ordem": 6,
      "tipo": "proximos_passos",
      "titulo": "Missão Cumprida",
      "conteudo": { "texto": "Parabéns! Você está pronto para a ${tipo}!" }
    }
  ]
}`;

    const responseText = await callGemini({
      model: "gemini-3.7-flash",
      json: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere uma aula de ${tipo} sobre o tópico "${topico}" da matéria "${materia}".` }
      ]
    });

    const aulaIA = JSON.parse(responseText);

    // 4. Persistir a aula e as páginas
    // Buscar categoria "Pedagógico" ou similar
    let { data: cat } = await supabase.from("rb_categorias").select("id").eq("nome", "Pedagógico").maybeSingle();
    if (!cat) {
       const { data: newCat } = await supabase.from("rb_categorias").insert({ nome: "Pedagógico", ordem: 99 }).select().single();
       cat = newCat;
    }

    // Buscar ou criar habilidade genérica
    let { data: hab } = await supabase.from("rb_habilidades").select("id").eq("nome", "Missões de Estudo IA").maybeSingle();
    if (!hab) {
       const { data: newHab } = await supabase.from("rb_habilidades").insert({
         categoria_id: cat!.id,
         nome: "Missões de Estudo IA",
         descricao: "Aulas geradas automaticamente para revisões e trabalhos"
       }).select().single();
       hab = newHab;
    }

    const { data: aula, error: aulaError } = await supabase.from("rb_aulas").insert({
      habilidade_id: hab!.id,
      titulo: tituloBusca,
      objetivo: aulaIA.objetivo || "Revisão personalizada",
      nivel: "basico",
      ordem: 0
    }).select().single();

    if (aulaError || !aula) {
       console.error("Erro ao salvar rb_aulas:", aulaError);
       throw new Error("Falha ao salvar cabeçalho da aula IA");
    }

    const paginas = aulaIA.paginas.map((p: any) => ({
      aula_id: aula.id,
      ordem: p.ordem,
      tipo: p.tipo || "explicacao",
      titulo: p.titulo,
      conteudo: p.conteudo
    }));

    await supabase.from("rb_paginas_aula").insert(paginas);

    return { aulaId: aula.id, recemGerada: true };
  });
