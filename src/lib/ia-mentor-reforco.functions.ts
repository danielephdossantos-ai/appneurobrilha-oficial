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

    // 0. Buscar dados da anamnese e perfil da criança
    let deficits = "Não informado";
    let hiperfoco = "Não informado";
    let nivelSuporte = "Geral";

    try {
      const { data: crianca } = await supabase
        .from("children")
        .select("diagnostico, hiperfoco, niveis")
        .eq("id", data.criancaId)
        .maybeSingle();

      if (crianca) {
        deficits = crianca.diagnostico || deficits;
        hiperfoco = crianca.hiperfoco || hiperfoco;
        if (crianca.niveis && typeof crianca.niveis === "object") {
          nivelSuporte = JSON.stringify(crianca.niveis);
        }
      }
      
      // Tentar buscar anamnese detalhada se disponível
      const { data: anamnese } = await supabase
        .from("anamnese_v2")
        .select("responses")
        .eq("child_id", data.criancaId)
        .maybeSingle();
      
      if (anamnese?.responses) {
        // Se houver respostas, anexamos ao contexto de déficits/perfil
        deficits += ` (Detalhes Anamnese: ${JSON.stringify(anamnese.responses)})`;
      }
    } catch (e) {
      console.warn("Falha ao carregar perfil da criança para IA:", e);
    }

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

    // 2. Prompt do Sistema conforme solicitação do usuário
    const systemPrompt = `Você é um especialista em neuroeducação, psicopedagogia e terapeuta multidisciplinar. Seu objetivo é criar um guia de aula prático, didático e acolhedor para a mãe ensinar seu filho em casa.

Perfil da Criança:
Déficits/Diagnóstico: ${deficits}
Hiperfoco/Interesses: ${hiperfoco}
Nível de suporte/preferências: ${nivelSuporte}

Instruções de Personalização:
Adapte a linguagem, o ritmo da explicação e a abordagem aos déficits identificados (ex: frases mais curtas e apoio visual para TDAH/Autismo; foco fonético e auditivo para Dislexia/DPA).

USO OBRIGATÓRIO DO HIPERFOCO: Crie todos os exemplos, historinhas e atividades utilizando o hiperfoco da criança como tema central para manter o engajamento.

A resposta DEVE ser um JSON no seguinte formato:
{
  "titulo": "Título da Aula",
  "objetivo": "O que a criança vai aprender",
  "visao_terapeuta": "Breve orientação para a mãe sobre como conduzir o momento com base nas necessidades neurodivergentes do filho.",
  "dica_de_ouro": "O que fazer se a criança perder o foco ou se frustrar durante a atividade.",
  "passos": [
    { 
      "tipo": "explicação", 
      "texto": "Como apresentar o conceito usando o tema do hiperfoco." 
    },
    { 
      "tipo": "exemplo", 
      "texto": "Um exemplo prático usando o hiperfoco." 
    },
    { 
      "tipo": "prática", 
      "texto": "Exercícios e jogos divertidos temáticos para fixação." 
    },
    { 
      "tipo": "desafio", 
      "texto": "Um pequeno desafio temático." 
    },
    { 
      "tipo": "revisão", 
      "texto": "Dicas para a mãe revisar o conteúdo depois." 
    }
  ]
}

Estrutura da Aula a ser gerada:
Visão Terapeuta/Professor: Orientação pedagógica.
Passo a Passo da Explicação: Usando hiperfoco.
Atividades Práticas: Fixação temática.
Dica de Ouro: Manejo de comportamento/frustração.`;

    // 3. Chamada ao Gemini
    const responseText = await callGemini({
      model: "gemini-3.7-flash",
      json: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere um plano de reforço para a dificuldade: "${data.dificuldade}". Lembre-se de usar o hiperfoco: "${hiperfoco}" em tudo.` }
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
        const paginas = [
          // Página inicial de orientações
          {
            aula_id: salvaId,
            ordem: 0,
            tipo: "explicacao",
            titulo: "ORIENTAÇÕES TERAPÊUTICAS",
            conteudo: { 
              texto: novaAula.visao_terapeuta,
              dica_ouro: novaAula.dica_de_ouro 
            }
          },
          ...novaAula.passos.map((passo: any, index: number) => ({
            aula_id: salvaId,
            ordem: index + 1,
            tipo: passo.tipo === "explicação" ? "explicacao" : 
                  passo.tipo === "exemplo" ? "exemplo" :
                  passo.tipo === "prática" ? "pratica_guiada" :
                  passo.tipo === "desafio" ? "avaliacao" : "proximos_passos",
            titulo: passo.tipo.toUpperCase(),
            conteudo: { texto: passo.texto }
          }))
        ];

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
