import { supabase } from "./src/integrations/supabase/client";
import { decidirConteudoAula, gerarAulaGemini } from "./src/lib/aulas-continuas.functions";

async function audit() {
  console.log("--- AUDITORIA DIRETA DE FUNÇÕES DE SERVIDOR ---");
  
  const TEST_BNCC = "EF02MA01";
  const { data: child } = await supabase
    .from("children_profiles")
    .select("id, name")
    .eq("education_level", "2º Ano")
    .limit(1)
    .single();

  if (!child) {
    console.log("ERRO: Nenhuma criança encontrada.");
    return;
  }

  console.log(`Criança: ${child.name} (${child.id})`);
  
  // 1. Testar Decisão
  console.log("Passo 1: Decidir Conteúdo...");
  const decisao = await decidirConteudoAula({
    data: {
      codigoBNCC: TEST_BNCC,
      childId: child.id,
      idade: 7,
      serie: "2º Ano",
      nivelAtual: 2
    }
  });
  console.log("Resultado Decisão:", JSON.stringify(decisao, null, 2));

  // 2. Testar Geração (se necessário ou forçar)
  if (decisao.status === "necessita_geracao" || true) {
    console.log("Passo 2: Disparando Gemini...");
    const gerada = await gerarAulaGemini({
      data: {
        childId: child.id,
        codigoBNCC: TEST_BNCC,
        nivel: 3,
        idade: 7,
        serie: "2º Ano",
        disciplina: "Matemática"
      }
    });
    console.log("Resultado Gemini:", JSON.stringify({ 
        status: gerada.status, 
        aulaId: gerada.aula?.id,
        valido: gerada.status === "sucesso"
    }, null, 2));
    
    if (gerada.aula?.id) {
       // 3. Testar Reutilização
       console.log("Passo 3: Testando Reutilização com outra criança...");
       const { data: child2 } = await supabase
         .from("children_profiles")
         .select("id")
         .neq("id", child.id)
         .limit(1)
         .single();
         
       if (child2) {
         const reuso = await decidirConteudoAula({
           data: {
             codigoBNCC: TEST_BNCC,
             childId: child2.id,
             idade: 7,
             serie: "2º Ano",
             nivelAtual: 3
           }
         });
         console.log("Resultado Reuso:", JSON.stringify({
            status: reuso.status,
            origem: reuso.origem,
            aulaId: reuso.aulaId,
            mesmoId: reuso.aulaId === gerada.aula.id
         }, null, 2));
       }
    }
  }

  process.exit(0);
}

audit().catch(e => {
    console.error(e);
    process.exit(1);
});
