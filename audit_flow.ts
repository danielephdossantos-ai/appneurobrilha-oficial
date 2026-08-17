import { supabase } from "@/integrations/supabase/client";
import { resolverMissao } from "@/escola-brilha/motor/resolver";
import { DominioAprendizagem } from "@/escola-brilha/motor/dominio-aprendizagem";
import { MotorPedagogico } from "@/escola-brilha/motor/index";

async function audit() {
  console.log("--- INICIANDO AUDITORIA DE FLUXO REAL ---");
  
  const TEST_BNCC = "EF02MA01"; 
  
  const { data: child } = await supabase
    .from("children_profiles")
    .select("id, name, birth_date, education_level")
    .eq("education_level", "2º Ano")
    .limit(1)
    .single();

  if (!child) {
    console.log("ERRO: Nenhuma criança do 2º Ano encontrada.");
    return;
  }

  const childId = child.id;
  const idade = 7;
  const serie = "2º Ano";
  
  console.log(`Criança: ${child.name} (ID: ${childId})`);
  
  // Limpeza
  await supabase.from("escola_progresso").delete().eq("child_id", childId).eq("codigo_bncc", TEST_BNCC);
  
  // 1. Simular domínio
  await MotorPedagogico.progresso.salvar(childId, TEST_BNCC, {
    concluida: true,
    percentual: 90,
    acertos: 9,
    erros: 1,
    nivel_dominio: "nivel_2_pratica"
  } as any);

  console.log("Domínio simulado para Nível 2.");

  // 2. Resolver
  console.log("Executando resolverMissao...");
  const result = await resolverMissao(TEST_BNCC, { childId, idade, serie });

  if (result.existe) {
    const aula = result.missaoOficial || result.aulaBase;
    console.log(`Aula ID: ${aula?.id}`);
    
    const { data: log } = await supabase
      .from("motor_decisao_logs")
      .select("*")
      .eq("child_id", childId)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    console.log(`Log Motor: ${log?.resultado} | Origem: ${log?.aula_encontrada_tipo || 'N/A'}`);
    
    if (log?.aula_encontrada_id) {
       const { data: ag } = await supabase.from("aulas_geradas").select("status, total_usos").eq("id", log.aula_encontrada_id).single();
       console.log(`Status Validação: ${ag?.status} | Usos: ${ag?.total_usos}`);
    }
  }

  process.exit(0);
}

audit();
