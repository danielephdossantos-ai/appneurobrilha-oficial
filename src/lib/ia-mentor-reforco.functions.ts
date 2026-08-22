import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { chamarProfessorMentorIA } from "@/lib/ai-orchestrator.server";
import { extrairJSON } from "@/lib/ai-json.server";
import { buscarAulaMentorPorCache, criarCacheKey, persistirAulaMentor } from "@/lib/professor-mentor-persistence.server";

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

export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    dificuldade: z.string().min(2),
    criancaId: z.string().uuid(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

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

    const reutilizada = await buscarAulaMentorPorCache(cacheKey);
    if (reutilizada) {
      return { aula: reutilizada.conteudo, origem: "reutilizada", id: reutilizada.aulaId };
    }

    const systemPrompt = `Você é o Professor Mentor NeuroBrilha, um professor digital de apoio educacional.
Seu trabalho é ENSINAR antes de avaliar. Não diagnostique, não prescreva tratamento e não crie uma aula "para TDAH/TEA/dislexia".
Use somente necessidades pedagógicas observadas, idade, série, nível, desempenho e preferências para adaptar ritmo, exemplos e quantidade de ajuda.

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
 "explicacao":"explicação clara e completa",
 "exemplo":"exemplo resolvido passo a passo",
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

    const persisted = await persistirAulaMentor({
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
