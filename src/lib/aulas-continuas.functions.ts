import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { parseBNCC } from "@/escola-brilha/motor/resolver";
import { validarAulaIA } from "./validador-aulas.server";
import { chamarProfessorMentor } from "./professor-mentor-engine.server";
import { persistirAulaMentor } from "./professor-mentor-persistence.server";

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

    // 0. Buscar perfil e hiperfoco
    const { data: profile } = await supabase
      .from("children_profiles")
      .select("*, anamnese_v2(*)")
      .eq("id", data.childId)
      .maybeSingle();
      
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
    const { supabase } = await import("@/integrations/supabase/client");
    
    // 1. Buscar perfil neuro da criança para personalização profunda
    const { data: profile } = await supabase
      .from("children")
      .select("nome, idade, serie, diagnostico, hiperfoco, anamnese_v2:anamnese_v2(responses)")
      .eq("id", data.childId)
      .maybeSingle();
    
    if (!profile) throw new Error("Criança não encontrada");

    // 2. Chamar o Motor Unificado Professor Mentor
    const aulaGerada = await chamarProfessorMentor(
      "REFORCO", // Usamos REFORCO como base pedagógica para Escola Brilha
      data.objetivo || `Aula sobre ${data.codigoBNCC}`,
      data.disciplina,
      {
        nome: profile.nome || "Criança",
        idade: data.idade,
        serie: data.serie,
        diagnostico: profile.diagnostico || undefined,
        hiperfoco: profile.hiperfoco || undefined,
        necessidadesAcessibilidade: (profile as any)?.anamnese_v2?.responses ? JSON.stringify((profile as any).anamnese_v2.responses) : undefined,
      }
    );

    // 3. Persistência Canônica (rb_aulas + rb_paginas_aula)
    const salvoCanonico = await persistirAulaMentor({
      supabase,
      modulo: "REFORCO",
      tema: data.objetivo || data.codigoBNCC,
      materia: data.disciplina,
      idade: data.idade,
      serie: data.serie,
      aula: aulaGerada,
      codigoBNCC: data.codigoBNCC
    });

    // 4. Compatibilidade Legada (aulas_geradas)
    // Mantemos este registro para que a Escola Brilha continue encontrando as aulas pelo fluxo atual
    const { data: salva, error: saveError } = await supabase
      .from("aulas_geradas")
      .insert({
        titulo: aulaGerada.titulo,
        serie: data.serie,
        disciplina: data.disciplina,
        codigo_bncc: data.codigoBNCC,
        conteudo: aulaGerada,
        modelo_ia: "professor-mentor-v1",
        nivel: data.nivel,
        hiperfoco: profile.hiperfoco,
        compatibilidade_hiperfoco: !!profile.hiperfoco,
        status: 'approved',
        aula_real_id: salvoCanonico.aulaId // Link para a nova estrutura
      } as any)
      .select()
      .single();

    if (saveError) {
      console.error("[EscolaBrilha] Erro ao salvar cache legado:", saveError);
    }

    return { 
      status: "sucesso", 
      aula: salva || { id: salvoCanonico.aulaId, titulo: aulaGerada.titulo, conteudo: aulaGerada } 
    };
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