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

    // 1. Tentar encontrar no banco para acesso instantâneo
    try {
      const { data: existente } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .select("*")
        .eq("dificuldade_original", diffNorm)
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
Idade: ${idadeCrianca} anos
Déficits/Diagnóstico: ${deficits}
Hiperfoco/Interesses: ${hiperfoco}
Nível de suporte/preferências: ${nivelSuporte}

REGRAS DE RECOMENDAÇÕES POR IDADE:
Ao sugerir vídeos ou links de apoio, verifique rigorosamente a idade da criança: ${idadeCrianca}.
- Se for entre 3 e 9 anos: Retorne APENAS sugestões de vídeos infantis/lúdicos do YouTube (canais educativos, canções pedagógicas, historinhas animadas). NENHUMA sugestão de Wikipedia, artigos longos ou enciclopédias é permitida.
- Se for entre 10 e 15 anos: Retorne videoaulas de nivelamento (canais de professores, resumos visuais) e pesquisas em sites como Wikipedia, Brasil Escola e portais educativos adequados.

Instruções de Personalização:
Adapte a linguagem, o ritmo da explicação e a abordagem aos déficits identificados.
USO OBRIGATÓRIO DO HIPERFOCO: Crie todos os exemplos, historinhas e atividades utilizando o hiperfoco da criança como tema central.

A resposta DEVE ser um JSON no seguinte formato:
{
  "titulo": "Título da Aula",
  "objetivo": "O que a criança vai aprender",
  "visao_terapeuta": "Breve orientação para a mãe sobre como conduzir o momento com base nas necessidades neurodivergentes do filho.",
  "dica_de_ouro": "O que fazer se a criança perder o foco ou se frustrar.",
  "recursos_apoio": [
    { "titulo": "Nome do Vídeo/Link", "url": "URL sugerida (YouTube/Wikipedia conforme regras)", "tipo": "video|texto" }
  ],
  "passos": [
    { "tipo": "explicação", "texto": "..." },
    { "tipo": "exemplo", "texto": "..." },
    { "tipo": "prática", "texto": "..." },
    { "tipo": "desafio", "texto": "..." },
    { "tipo": "revisão", "texto": "..." }
  ]
}

Estrutura da Aula:
1. Visão Terapeuta: Orientação pedagógica.
2. Passo a Passo: Usando hiperfoco.
3. Recursos de Apoio: Conforme REGRAS DE IDADE acima.
4. Dica de Ouro: Manejo de comportamento.`;

    // 3. Chamada ao Gemini
    const responseText = await callGemini({
      model: "gemini-1.5-flash",
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
          // Página de recursos de apoio (se houver)
          ...(novaAula.recursos_apoio?.length ? [{
            aula_id: salvaId,
            ordem: 1,
            tipo: "video_apoio",
            titulo: "MATERIAIS COMPLEMENTARES",
            conteudo: { links: novaAula.recursos_apoio }
          }] : []),
          ...novaAula.passos.map((passo: any, index: number) => ({
            aula_id: salvaId,
            ordem: index + (novaAula.recursos_apoio?.length ? 2 : 1),
            tipo: passo.tipo === "explicação" ? "explicacao" : 
                  passo.tipo === "exemplo" ? "exemplo" :
                  passo.tipo === "prática" ? "pratica_guiada" :
                  passo.tipo === "desafio" ? "avaliacao" : "proximos_passos",
            titulo: (passo.tipo || "ATIVIDADE").toUpperCase(),
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
