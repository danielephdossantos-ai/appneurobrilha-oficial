import { supabase } from "@/integrations/supabase/client";

export type PipelineNode = {
  id: string;
  tipo: "neuro" | "alfabetizacao" | "bncc";
  codigo: string;
  ordem: number;
  status: "concluido" | "atual" | "bloqueado";
  titulo: string;
};

export async function obterPipelineHibrido(childId: string): Promise<PipelineNode[]> {
  // 1. Obter perfil da criança na tabela 'children'
  const { data: child } = await supabase
    .from("children")
    .select("idade, serie")
    .eq("id", childId)
    .single();

  if (!child) return [];

  // Usar idade direta da tabela 'children'
  const age = child.idade || 0;
  const grade = child.serie || "";
  
  const isEnsinoFundamental = grade && 
    !grade.toLowerCase().includes("infantil") &&
    !grade.toLowerCase().includes("maternal") &&
    !grade.toLowerCase().includes("pré");

  // 2. Carregar aulas concluídas
  const { data: concluidoData } = await supabase
    .from("escola_progresso")
    .select("codigo_bncc")
    .eq("child_id", childId)
    .eq("concluida", true);
  
  const concluidas = new Set((concluidoData || []).map(r => r.codigo_bncc.toUpperCase()));

  const nodes: PipelineNode[] = [];
  let ordem = 0;
  
  const addNode = (tipo: PipelineNode["tipo"], codigo: string, titulo: string) => {
    const status = concluidas.has(codigo.toUpperCase()) 
      ? "concluido" 
      : nodes.length === nodes.filter(n => n.status === "concluido").length 
        ? "atual" 
        : "bloqueado";
        
    nodes.push({
      id: `${tipo}-${codigo}`,
      tipo,
      codigo,
      ordem: ordem++,
      status,
      titulo
    });
  };

  // 3. Lógica de Categorias por Currículo
  // Neuro-Treino (sempre até 7 anos)
  if (age < 8) {
    addNode("neuro", "NT_COORD_01", "Coordenação Motora I");
  }

  // Alfabetização (Primeiros Anos - currículo infantil ou até 7 anos)
  if (age <= 7 || !isEnsinoFundamental) {
    addNode("alfabetizacao", "PA_LETRAS_01", "Conhecendo as Vogais");
  }

  // BNCC (Apenas Ensino Fundamental)
  if (isEnsinoFundamental) {
    addNode("bncc", "EF01MA01", "Números Naturais");
  }

  // Repetir ciclo para visualização da trilha
  if (age < 8) addNode("neuro", "NT_MEMO_01", "Memória Visual");
  if (age <= 7 || !isEnsinoFundamental) addNode("alfabetizacao", "PA_LETRAS_02", "Brincando com a Letra A");
  if (isEnsinoFundamental) addNode("bncc", "EF01LP01", "Escrita Espontânea");

  return nodes;
}
