import { supabase } from "./src/integrations/supabase/client";

async function audit() {
  console.log("--- AUDITORIA DE DADOS SUPABASE (ESTATÍSTICAS REAIS) ---");
  
  // 1. Verificar logs de decisão recentes
  const { data: logs } = await supabase
    .from("motor_decisao_logs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  console.log("Últimos 5 Logs de Decisão:");
  console.table(logs?.map(l => ({
    Criança: l.child_id.slice(0, 8),
    BNCC: l.codigo_bncc,
    Resultado: l.resultado,
    Origem: l.aula_encontrada_tipo,
    ID_Aula: l.aula_encontrada_id?.slice(0, 8)
  })));

  // 2. Verificar biblioteca de aulas geradas
  const { data: biblioteca } = await supabase
    .from("aulas_geradas")
    .select("id, titulo, codigo_bncc, status, total_usos, total_criancas")
    .eq("status", "approved" as any)
    .order("total_usos", { ascending: false })
    .limit(5);

  console.log("\nTop 5 Aulas na Biblioteca Pedagógica Viva:");
  console.table(biblioteca?.map(a => ({
    ID: a.id.slice(0, 8),
    Título: a.titulo,
    BNCC: a.codigo_bncc,
    Usos: a.total_usos,
    Crianças: a.total_criancas
  })));

  // 3. Verificar Validações
  const { data: validacoes } = await supabase
    .from("aulas_geradas")
    .select("status, metadata_validacao")
    .not("metadata_validacao", "is", null)
    .limit(1);

  if (validacoes && validacoes[0]) {
    console.log("\nExemplo de Metadados de Validação:");
    console.log(JSON.stringify(validacoes[0].metadata_validacao, null, 2));
  }

  process.exit(0);
}

audit();
