import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { parseBNCC } from "@/escola-brilha/motor/resolver";
import { validarAulaIA } from "./validador-aulas.server";
import { chamarProfessorMentorIA } from "./ai-orchestrator.server";
import { extrairJSON } from "./ai-json.server";

/**
 * Módulo de Motor de Decisão de Conteúdo
 * Responsável por decidir qual aula utilizar e se é necessária geração via IA.
 */

import { extrairHiperfoco } from "./hiperfoco-utils";

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

    // 0. Buscar a criança no cadastro canônico atual. A antiga children_profiles
    // pertence à arquitetura legada e não usa os mesmos IDs do app atual.
    const { data: child } = await supabase
      .from("children")
      .select("id,idade,serie,hiperfoco,niveis")
      .eq("id", data.childId)
      .maybeSingle();
    const { data: anam } = await supabase
      .from("anamnese_v2" as any)
      .select("scores,risk_levels")
      .eq("child_id", data.childId)
      .maybeSingle();
    const profile = { ...(child as any), anamnese_v2: anam };
    const hiperfoco = extrairHiperfoco(profile);

    // 1. Tentar encontrar aula adequada (Série, Disciplina, BNCC, Nível, Hiperfoco)
    
    // 1.1. Verificar se a criança já usou alguma aula (evitar repetição imediata)
    const { data: aulasJaUsadas } = await supabase
      .from("historico_uso_aulas")
      .select("aula_id")
      .eq("child_id", data.childId);
    
    const idsUsados = aulasJaUsadas?.map(u => u.aula_id) || [];

    // 1.2. Buscar na biblioteca global (Priorizando Hiperfoco)
    let query = supabase
      .from("aulas_geradas")
      .select("*")
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("serie", data.serie || bncc.ano)
      .eq("nivel", data.nivelAtual)
      .eq("status", "approved" as any);

    if (hiperfoco) {
      query = query.eq("hiperfoco", hiperfoco);
    }

    const { data: aprovadas } = await query;
    
    // Filtrar as que a criança ainda não usou
    const disponiveis = aprovadas?.filter(a => !idsUsados.includes(a.id)) || [];

    if (disponiveis.length > 0) {
      // Variedade: selecionar uma aleatória das disponíveis
      const selecionada = disponiveis[Math.floor(Math.random() * disponiveis.length)];
      
      await registrarUsoBibliotecaIA(selecionada.id, data.childId);

      return { 
        status: "pronta", 
        aulaId: selecionada.id, 
        titulo: selecionada.titulo,
        origem: "biblioteca_ia",
        conteudo: selecionada.conteudo
      };
    }

    // 1.3. Fallback: se não tiver com hiperfoco, buscar sem hiperfoco (Reuso Pedagógico)
    if (hiperfoco) {
      const { data: semHiperfoco } = await supabase
        .from("aulas_geradas")
        .select("*")
        .eq("codigo_bncc", data.codigoBNCC)
        .eq("serie", data.serie || bncc.ano)
        .eq("nivel", data.nivelAtual)
        .eq("status", "approved" as any)
        .is("hiperfoco", null);
      
      const disponiveisSemHip = semHiperfoco?.filter(a => !idsUsados.includes(a.id)) || [];
      
      if (disponiveisSemHip.length > 0) {
        const selecionada = disponiveisSemHip[0];
        await registrarUsoBibliotecaIA(selecionada.id, data.childId);
        return { 
          status: "pronta", 
          aulaId: selecionada.id, 
          titulo: selecionada.titulo,
          origem: "biblioteca_ia_sem_hiperfoco",
          conteudo: selecionada.conteudo
        };
      }
    }

    // 2. Se não encontrou nada adequado, sinalizar necessidade de geração
    return { 
      status: "necessita_geracao", 
      codigoBNCC: data.codigoBNCC,
      nivel: data.nivelAtual,
      childId: data.childId,
      serie: data.serie || bncc.ano,
      disciplina: bncc.disciplina,
      idade: data.idade,
      hiperfoco
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

    await supabase
      .from("historico_uso_aulas" as any)
      .upsert({ child_id: childId, aula_id: aulaId, usado_em: new Date().toISOString() } as any, {
        onConflict: "child_id,aula_id",
      });

    await registrarLogDecisao(childId, {
      aula_encontrada_id: aulaId,
      decisao: "biblioteca_ia",
      motivo: "Aula reutilizada da Biblioteca Pedagógica Viva",
    }).catch(() => undefined);
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
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    // 1. Buscar somente sinais pedagógicos necessários; diagnóstico não vira receita de aula.
    const { data: child } = await supabase
      .from("children")
      .select("idade,serie,hiperfoco,niveis,tempo_atencao_min")
      .eq("id", data.childId)
      .maybeSingle();
    const { data: anam } = await supabase
      .from("anamnese_v2")
      .select("scores,risk_levels")
      .eq("child_id", data.childId)
      .maybeSingle();
    const profile = { ...child, anamnese_v2: anam };
    const hiperfoco = extrairHiperfoco(profile);

    // 2. Preparar Prompt Estruturado (Instrução 5/8)
    const systemPrompt = `Você é um Especialista em Neuroeducação e Design Pedagógico.
Gere uma AULA COMPLETA em JSON estruturado para uma criança.

DADOS DO ALUNO:
- Idade: ${data.idade} anos
- Série: ${data.serie}
- Nível: ${data.nivel} (1: Iniciante, 2: Prática, 3: Consolidação, 4: Maestria)
- Sinais pedagógicos agregados: ${JSON.stringify((profile as any)?.anamnese_v2 || "Padrão")}
- HIPERFOCO/INTERESSE PRINCIPAL: ${hiperfoco || "Não especificado (use temas lúdicos universais como animais, espaço ou super-heróis)"}

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
6. PERSONALIZAÇÃO: Use o HIPERFOCO da criança como pano de fundo pedagógico para toda a aula. Se for "Dinossauros", os exemplos e problemas devem envolver dinossauros.
7. NEUROEDUCAÇÃO: Feedbacks devem explicar o porquê do acerto ou erro.


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

    // 3. Motor canônico: Gemini -> Groq -> Lovable.
    const ai = await chamarProfessorMentorIA({
      label: "aulas-continuas",
      json: true,
      temperature: 0.2,
      max_tokens: 4096,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere a aula para o código ${data.codigoBNCC} nível ${data.nivel}` },
      ],
    });
    const aulaGerada = extrairJSON(ai.text) as any;

    // 4. Validação da Aula (Implementação 6/8)
    const validacao = await validarAulaIA(aulaGerada, {
      codigoBNCC: data.codigoBNCC,
      idade: data.idade,
      serie: data.serie,
      disciplina: data.disciplina,
      nivel: data.nivel,
      modelo: ai.provider
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
        modelo_ia: ai.provider,
        nivel: data.nivel,
        hiperfoco: hiperfoco,
        compatibilidade_hiperfoco: !!hiperfoco,
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

    await supabase.from("historico_uso_aulas").upsert({
      child_id: data.childId, aula_id: salva.id, usado_em: new Date().toISOString()
    }, { onConflict: "child_id,aula_id" });
    return { status: "sucesso", aula: salva, provider: ai.provider };
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