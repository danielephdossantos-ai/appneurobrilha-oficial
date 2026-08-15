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
    let idadeCrianca = 7;

    try {
      const { data: crianca } = await supabase
        .from("children")
        .select("diagnostico, hiperfoco, niveis, idade")
        .eq("id", data.criancaId)
        .maybeSingle();

      if (crianca) {
        deficits = crianca.diagnostico || deficits;
        hiperfoco = crianca.hiperfoco || hiperfoco;
        idadeCrianca = crianca.idade || idadeCrianca;
        if (crianca.niveis && typeof crianca.niveis === "object") {
          nivelSuporte = JSON.stringify(crianca.niveis);
        }
      }
      
      const { data: anamnese } = await supabase
        .from("anamnese_v2")
        .select("responses")
        .eq("child_id", data.criancaId)
        .maybeSingle();
      
      if (anamnese?.responses) {
        deficits += ` (Detalhes Anamnese: ${JSON.stringify(anamnese.responses)})`;
      }
    } catch (e) {
      console.warn("Falha ao carregar perfil da criança para IA:", e);
    }

    // 1. Tentar encontrar no banco para acesso instantâneo (PERSISTÊNCIA)
    try {
      const { data: existente } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .select("*")
        .eq("dificuldade_original", diffNorm)
        .order("created_at", { ascending: false }) // Pega a mais recente
        .limit(1)
        .maybeSingle();

      if (existente) {
        // Garantir que as páginas também existem
        const { data: pagsExistentes } = await (supabase as any)
          .from("rb_paginas_aula")
          .select("id")
          .eq("aula_id", existente.id);

        if (pagsExistentes && pagsExistentes.length > 0) {
          return { 
            aula: existente.conteudo, 
            origem: "reutilizada",
            id: existente.id 
          };
        }
      }
    } catch (e) {
      console.warn("Busca no cache falhou:", e);
    }

    // 2. Prompt do Sistema Profissional (Psicopedagogia e Neuroeducação)
    const systemPrompt = `Você é um Especialista em Psicopedagogia e Neuroeducação de alto nível.
Seu objetivo é criar um guia de aula denso, didático e prático para a mãe ensinar seu filho em casa.
A aula deve ser um guia completo e profundo, não um resumo.

Perfil da Criança:
Idade: ${idadeCrianca} anos
Déficits/Diagnóstico: ${deficits}
Hiperfoco/Interesses: ${hiperfoco}
Nível de suporte/preferências: ${nivelSuporte}

DIRETRIZES DE CONTEÚDO (OBRIGATÓRIO):
1. PERSISTÊNCIA: A aula deve ser estruturada para ser salva e consultada múltiplas vezes.
2. DIDÁTICA: Use uma linguagem que a mãe entenda, mas com base científica sólida.
3. ADAPTAÇÃO AO DIAGNÓSTICO: Se a criança tem TDAH, use tarefas curtas e multissensoriais. Se for Autismo, foque em previsibilidade e apoio visual. Se for Dislexia, foque em instrução fônica e jogos auditivos.
4. OBRIGATORIEDADE DO HIPERFOCO: O tema central de TODA a aula (exemplos, estorinhas, analogias) DEVE ser o hiperfoco da criança: "${hiperfoco}".

REGRAS DE RECURSOS POR IDADE:
- 3 a 9 anos: Recomendar exclusivamente vídeos infantis educativos do YouTube. PROIBIDO Wikipedia ou textos acadêmicos.
- 10 a 15 anos: Recomendar videoaulas didáticas do YouTube e sites de pesquisa educativos (Wikipedia, Brasil Escola, etc).

A resposta DEVE ser um JSON no seguinte formato:
{
  "titulo": "Título Criativo usando o Hiperfoco",
  "objetivo": "Objetivo pedagógico claro",
  "capitulo1": {
    "titulo": "Capítulo 1 · Orientação para a Mãe (Como Ensinar)",
    "conteudo": "Explicação da metodologia pedagógica em linguagem simples, orientando exatamente o que falar, o tom de voz e como conduzir a atividade."
  },
  "capitulo2": {
    "titulo": "Capítulo 2 · Adaptação com o Hiperfoco",
    "conteudo": "Integração profunda do hiperfoco em toda a explicação e analogias da aula."
  },
  "capitulo3": {
    "titulo": "Capítulo 3 · Adaptação ao Diagnóstico/Déficit",
    "conteudo": "Como adaptar a didática especificamente para as necessidades neurodivergentes desta criança."
  },
  "capitulo4": {
    "titulo": "Capítulo 4 · Atividades Práticas e Brincadeiras",
    "atividades": [
      { "nome": "Atividade 1", "passo_a_passo": "Detalhes lúdicos usando objetos do dia a dia ou o hiperfoco." },
      { "nome": "Atividade 2", "passo_a_passo": "..." },
      { "nome": "Atividade 3", "passo_a_passo": "..." }
    ]
  },
  "capitulo5": {
    "titulo": "Capítulo 5 · Avaliação e Fixação",
    "perguntas": [
      { "pergunta": "...", "resposta_explicada": "Gabarito com orientação sobre o que fazer se a criança errar." }
    ]
  },
  "capitulo6": {
    "titulo": "Capítulo 6 · Materiais e Vídeos",
    "recursos": [
      { "titulo": "...", "url": "...", "tipo": "video|texto" }
    ]
  }
}`;

    // 3. Chamada ao Gemini 3.7 Flash
    const responseText = await callGemini({
      model: "gemini-3.7-flash",
      json: true,
      max_tokens: 4096, // Aumento de tokens para aulas densas
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere uma aula de reforço completa, profunda e profissional para a dificuldade: "${data.dificuldade}". Lembre-se: texto longo e explicativo, sem resumos superficiais.` }
      ]
    });

    const novaAula = JSON.parse(responseText);
    let salvaId = "temp-" + Date.now();

    try {
      // 4. Salvar no Supabase (Persistência garantida)
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
        
        // 5. Mapear Capítulos para rb_paginas_aula
        const paginas = [
          {
            aula_id: salvaId,
            ordem: 1,
            tipo: "explicacao",
            titulo: novaAula.capitulo1.titulo,
            conteudo: { texto: novaAula.capitulo1.conteudo }
          },
          {
            aula_id: salvaId,
            ordem: 2,
            tipo: "exemplo",
            titulo: novaAula.capitulo2.titulo,
            conteudo: { texto: novaAula.capitulo2.conteudo }
          },
          {
            aula_id: salvaId,
            ordem: 3,
            tipo: "dicas_familia",
            titulo: novaAula.capitulo3.titulo,
            conteudo: { texto: novaAula.capitulo3.conteudo }
          },
          {
            aula_id: salvaId,
            ordem: 4,
            tipo: "pratica_guiada",
            titulo: novaAula.capitulo4.titulo,
            conteudo: { 
              texto: "Siga o passo a passo das atividades abaixo:",
              passos: novaAula.capitulo4.atividades.map((a: any) => `${a.nome}: ${a.passo_a_passo}`)
            }
          },
          {
            aula_id: salvaId,
            ordem: 5,
            tipo: "avaliacao",
            titulo: novaAula.capitulo5.titulo,
            conteudo: { 
              perguntas: novaAula.capitulo5.perguntas.map((p: any) => ({
                pergunta: p.pergunta,
                resposta: p.resposta_explicada
              }))
            }
          },
          {
            aula_id: salvaId,
            ordem: 6,
            tipo: "video",
            titulo: novaAula.capitulo6.titulo,
            conteudo: { 
              texto: "Materiais recomendados para esta aula:",
              bullets: novaAula.capitulo6.recursos.map((r: any) => `${r.titulo}: ${r.url}`)
            }
          }
        ];

        await (supabase as any).from("rb_paginas_aula").insert(paginas);

        // 6. Atualizar Agenda de Estudos (Rotina)
        // Remove reforço anterior e coloca o novo
        await (supabase as any)
          .from("study_agenda")
          .delete()
          .eq("child_id", data.criancaId)
          .eq("type", "reforco_ia");

        await (supabase as any)
          .from("study_agenda")
          .insert({
            child_id: data.criancaId,
            topic: novaAula.titulo,
            type: "reforco_ia",
            exam_date: new Date().toISOString(),
            completed: false
          });
      }
    } catch (e) {
      console.error("Erro ao persistir aula ou agenda do Gemini:", e);
    }

    return { 
      aula: novaAula, 
      origem: "gerada_gemini",
      id: salvaId 
    };
  });
