import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { chamarProfessorMentorIA } from "@/lib/ai-orchestrator.server";
import { extrairJSON } from "@/lib/ai-json.server";
import { buscarAulaMentorPorCache, criarCacheKey, persistirAulaMentor } from "@/lib/professor-mentor-persistence.server";
import { PROFESSOR_MENTOR_PEDAGOGIA } from "@/lib/professor-mentor-pedagogia";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { criarPaginasMissaoProva, MIN_MENTOR_PAGES } from "@/lib/missao-prova";

const AulaMentorSchema = z.object({
  titulo: z.string().min(3),
  objetivo: z.string().min(3),
  explicacao: z.string().min(20),
  exemplo: z.string().min(10),
  pratica_guiada: z.array(z.string().min(3)).min(2),
  desafio: z.array(z.string().min(3)).min(1),
  revisao: z.array(z.string().min(3)).min(2),
  dicas_familia: z.array(z.string().min(3)).optional().default([]),
});

export const AulaMissaoProvaSchema = z.object({
  titulo: z.string().min(3),
  objetivo: z.string().min(10),
  conceitos_essenciais: z.array(z.string().min(3)).min(2),
  explicacao: z.string().min(30),
  exemplos_resolvidos: z.array(z.string().min(5)).min(2),
  pratica_guiada: z.array(z.string().min(3)).min(2),
  exercicios_independentes: z.array(z.string().min(3)).min(2),
  revisao: z.array(z.string().min(3)).min(2),
  correcao_explicada: z.array(z.string().min(5)).min(2),
});

export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({
    dificuldade: z.string().min(2),
    criancaId: z.string().uuid(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data, context }) => {
    const supabase = context.supabase as any;

    const { data: crianca, error: childError } = await supabase
      .from("children")
      .select("idade,serie,hiperfoco,niveis,tempo_atencao_min")
      .eq("id", data.criancaId)
      .maybeSingle();
    if (childError) throw childError;

    const { data: anamnese } = await supabase
      .from("anamnese_v2")
      .select("scores,risk_levels")
      .eq("child_id", data.criancaId)
      .maybeSingle();

    const idade = Number(crianca?.idade ?? 7);
    const serie = String(crianca?.serie ?? "");
    const hiperfoco = String(crianca?.hiperfoco ?? "").trim();
    const dificuldade = data.dificuldade.trim();
    const cacheKey = criarCacheKey(["reforco", dificuldade, serie, Math.max(1, Math.min(4, Number((crianca?.niveis as any)?.geral ?? 1))), hiperfoco]);

    const reutilizada = await buscarAulaMentorPorCache(supabase, cacheKey);
    if (reutilizada) {
      return { aula: reutilizada.conteudo, origem: "reutilizada", id: reutilizada.aulaId };
    }

    const systemPrompt = `Você é o Professor Mentor NeuroBrilha, um professor digital de apoio educacional.
${PROFESSOR_MENTOR_PEDAGOGIA}

Seu trabalho é ENSINAR antes de avaliar. Não diagnostique, não prescreva tratamento e não crie uma aula "para TDAH/TEA/dislexia".
Use somente necessidades pedagógicas observadas, idade, série, nível, desempenho e preferências para adaptar ritmo, exemplos e quantidade de ajuda.
Você é o responsável pela explicação pedagógica: nunca mande a criança pedir aos pais para pesquisar, explicar ou encontrar a resposta.
Não comece perguntando o que ela quer estudar quando o assunto já foi informado. Identifique o tema, ensine os conceitos essenciais em ordem e só depois proponha prática.
Desenho, cartaz ou pesquisa podem ser recursos complementares, mas nunca podem substituir a explicação do conteúdo.
Não invente links, vídeos, autores ou fontes e não use entretenimento sem relação direta com o conteúdo escolar.

Criança: ${idade} anos. Série: ${serie || "não informada"}.
Hiperfoco/interesse: ${hiperfoco || "não informado"}.
Tempo de atenção informado: ${crianca?.tempo_atencao_min ?? "não informado"} min.
Sinais pedagógicos agregados da anamnese: ${JSON.stringify({ scores: anamnese?.scores ?? null, risk: anamnese?.risk_levels ?? null })}.

CICLO OBRIGATÓRIO: OBSERVAR -> EXPLICAR -> MODELAR -> GUIAR -> PRATICAR -> VERIFICAR -> REFORÇAR.
Para crianças pequenas, use CONCRETO -> VISUAL -> SIMBÓLICO.
Se houver hiperfoco, use-o como contexto pedagógico natural, sem transformar tudo em decoração.
Se a criança errar, explique de outra forma, use exemplo mais simples e retome pré-requisito. Nunca apenas diga "errado".

Retorne SOMENTE JSON válido:
{
 "titulo":"...",
 "objetivo":"...",
 "explicacao":"explicação clara e completa, com todos os conceitos essenciais do tema em ordem",
 "exemplo":"exemplo resolvido passo a passo, sem pular o raciocínio",
 "pratica_guiada":["passo 1","passo 2","passo 3"],
 "desafio":["atividade independente"],
 "revisao":["pergunta de revisão 1","pergunta de revisão 2"],
 "dicas_familia":["orientação curta opcional"]
}`;

    const ai = await chamarProfessorMentorIA({
      label: "reforco-brilha",
      json: true,
      max_tokens: 4096,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Ensine a dificuldade: ${dificuldade}` },
      ],
    });

    const aula = AulaMentorSchema.parse(extrairJSON(ai.text));
    const paginas = [
      { ordem: 1, tipo: "objetivo", titulo: "Objetivo", conteudo: { texto: aula.objetivo } },
      { ordem: 2, tipo: "explicacao", titulo: "Entenda", conteudo: { texto: aula.explicacao } },
      { ordem: 3, tipo: "exemplo", titulo: "Veja um exemplo", conteudo: { texto: aula.exemplo } },
      { ordem: 4, tipo: "pratica_guiada", titulo: "Vamos fazer juntos", conteudo: { passos: aula.pratica_guiada } },
      { ordem: 5, tipo: "desafio", titulo: "Agora é sua vez", conteudo: { bullets: aula.desafio } },
      { ordem: 6, tipo: "revisao", titulo: "Revisão", conteudo: { bullets: aula.revisao } },
      ...(aula.dicas_familia.length ? [{ ordem: 7, tipo: "dicas_familia", titulo: "Para a família", conteudo: { bullets: aula.dicas_familia } }] : []),
    ];

    const persisted = await persistirAulaMentor(supabase, {
      cacheKey,
      modulo: "reforco_brilha",
      dificuldadeOriginal: dificuldade.toLowerCase(),
      titulo: aula.titulo,
      objetivo: aula.objetivo,
      faixaEtaria: `${idade} anos`,
      nivel: "basico",
      provider: ai.provider,
      conteudo: aula,
      paginas,
      tags: dificuldade.toLowerCase().split(/\s+/).filter((t) => t.length > 3),
    });

    // Só retorna sucesso depois que aula + páginas + cache foram persistidos.
    return { aula, origem: `gerada_${ai.provider}`, id: persisted.aulaId };
  });

export const gerarAulaSessaoMissaoProva = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({
    sessionId: z.string().uuid(),
    criancaId: z.string().uuid(),
  }).parse(input))
  .handler(async ({ data, context }) => {
    const supabase = context.supabase as any;
    const { data: session, error: sessionError } = await supabase
      .from("exam_study_plans")
      .select("id,title,description,mentor_aula_id,mission:exam_missions!inner(id,child_id,subject,exam_date,notes,contents:exam_mission_contents(content_title))")
      .eq("id", data.sessionId)
      .single();
    if (sessionError || !session) throw new Error("Sessão de estudo não encontrada.");

    const mission = Array.isArray(session.mission) ? session.mission[0] : session.mission;
    if (!mission || mission.child_id !== data.criancaId) throw new Error("Esta sessão não pertence à criança selecionada.");

    if (session.mentor_aula_id) {
      const { data: existingPages, error: existingError } = await supabase
        .from("rb_paginas_aula")
        .select("id,ordem,tipo,titulo,conteudo")
        .eq("aula_id", session.mentor_aula_id)
        .order("ordem", { ascending: true });
      if (!existingError && (existingPages?.length ?? 0) >= MIN_MENTOR_PAGES) {
        return { id: session.mentor_aula_id, paginas: existingPages, origem: "persistida" as const };
      }
    }

    const conteudos = (mission.contents ?? [])
      .map((item: { content_title?: string }) => item.content_title?.trim())
      .filter((item: string | undefined): item is string => Boolean(item));
    if (conteudos.length === 0) throw new Error("Informe os conteúdos da prova antes de gerar a aula.");

    const { data: crianca, error: childError } = await supabase
      .from("children")
      .select("idade,serie,hiperfoco,niveis,tempo_atencao_min")
      .eq("id", data.criancaId)
      .single();
    if (childError || !crianca) throw new Error("Não foi possível carregar o perfil da criança.");

    const materia = String(mission.subject).trim();
    const topicos = conteudos.join(", ");
    const cacheKey = criarCacheKey(["missao-prova", session.id, materia, topicos]);
    const systemPrompt = `Você é o Professor Mentor NeuroBrilha e criará uma aula para uma prova escolar.
${PROFESSOR_MENTOR_PEDAGOGIA}

MATÉRIA OBRIGATÓRIA: ${materia}
CONTEÚDOS OBRIGATÓRIOS: ${topicos}
SÉRIE: ${crianca.serie || "não informada"}. IDADE: ${crianca.idade || "não informada"}.
INTERESSE PARA CONTEXTUALIZAÇÃO: ${crianca.hiperfoco || "não informado"}.

Não troque a matéria e não misture conteúdos de outra disciplina. Ensine os conceitos antes de avaliar.
Em Língua Portuguesa, inclua análise linguística e conjugação quando o conteúdo pedir verbos.
Em Matemática, apresente cálculos e raciocínio matemático, sem exercícios de gramática.
Cada correção deve explicar o raciocínio, não apenas informar a resposta.

Retorne SOMENTE JSON válido com este formato exato:
{
  "titulo":"...",
  "objetivo":"...",
  "conceitos_essenciais":["...","..."],
  "explicacao":"...",
  "exemplos_resolvidos":["...","..."],
  "pratica_guiada":["...","..."],
  "exercicios_independentes":["...","..."],
  "revisao":["...","..."],
  "correcao_explicada":["...","..."]
}`;

    const ai = await chamarProfessorMentorIA({
      label: "missao-prova-aula",
      json: true,
      max_tokens: 4096,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Prepare a aula de ${materia} sobre ${topicos}. Sessão: ${session.title}.` },
      ],
    });
    const aula = AulaMissaoProvaSchema.parse(extrairJSON(ai.text));
    const paginas = criarPaginasMissaoProva(aula);
    const persisted = await persistirAulaMentor(supabase, {
      cacheKey,
      modulo: "missao_prova",
      dificuldadeOriginal: `${materia}: ${topicos}`.toLowerCase(),
      titulo: aula.titulo,
      objetivo: aula.objetivo,
      faixaEtaria: crianca.idade ? `${crianca.idade} anos` : undefined,
      nivel: "basico",
      provider: ai.provider,
      conteudo: { ...aula, materia, conteudos },
      paginas,
      tags: [materia, ...conteudos].map((tag) => tag.toLowerCase()),
      studyPlanId: session.id,
      minPaginas: MIN_MENTOR_PAGES,
    });
    if (persisted.pageCount < MIN_MENTOR_PAGES) throw new Error("A aula não foi salva por completo. Tente novamente.");
    return { id: persisted.aulaId, paginas, origem: `gerada_${ai.provider}` as const };
  });
