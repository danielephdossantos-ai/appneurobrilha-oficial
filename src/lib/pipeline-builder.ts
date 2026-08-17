import { supabase } from "@/integrations/supabase/client";
import { resolverMissao } from "../escola-brilha/motor/resolver";

export type PipelineNode = {
  id: string;
  tipo: "neuro" | "alfabetizacao" | "bncc";
  codigo: string;
  ordem: number;
  status: "concluido" | "atual" | "bloqueado";
  titulo: string;
};

export async function obterPipelineHibrido(childId: string): Promise<PipelineNode[]> {
  // 1. Obter perfil da criança
  const { data: profile } = await supabase
    .from("profiles")
    .select("birth_date, current_grade")
    .eq("id", childId)
    .single();

  if (!profile) return [];

  const birthDate = new Set(profile.birth_date ? [new Date(profile.birth_date)] : []);
  const age = profile.birth_date ? 
    new Date().getFullYear() - new Date(profile.birth_date).getFullYear() : 0;
  
  const isEnsinoFundamental = profile.current_grade && 
    !profile.current_grade.toLowerCase().includes("infantil") &&
    !profile.current_grade.toLowerCase().includes("maternal") &&
    !profile.current_grade.toLowerCase().includes("pré");

  const gradeLevel = profile.current_grade || "";

  // 2. Carregar aulas concluídas
  const { data: concluidoData } = await supabase
    .from("escola_progresso")
    .select("codigo_bncc")
    .eq("child_id", childId)
    .eq("concluida", true);
  
  const concluidas = new Set((concluidoData || []).map(r => r.codigo_bncc.toUpperCase()));

  // 3. Montar a sequência (Mock de exemplo por enquanto, será alimentado pela lógica de motor)
  // A lógica real deve buscar as habilidades BNCC da série + Neuro Treino + Alfabetização
  
  const nodes: PipelineNode[] = [];
  let ordem = 0;

  // Exemplo de Estágios:
  // Estágio 1: Neuro
  // Estágio 2: Alfabetização
  // Estágio 3: BNCC (se for fundamental)

  // Esta lógica será expandida para buscar as aulas reais de cada banco
  // Por ora, vamos gerar uma lista baseada nos currículos
  
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

  // 4. Lógica de Categorias por Currículo
  // Neuro-Treino (sempre até 7 anos)
  if (age < 8) {
    addNode("neuro", "NT_COORD_01", "Coordenação Motora I");
  }

  // Alfabetização (Primeiros Anos - 3 a 7 anos)
  if (age <= 7) {
    addNode("alfabetizacao", "PA_LETRAS_01", "Conhecendo as Vogais");
  }

  // BNCC (Apenas Ensino Fundamental)
  if (isEnsinoFundamental) {
    addNode("bncc", "EF01MA01", "Números Naturais");
  }

  // Repetir ciclo
  if (age < 8) addNode("neuro", "NT_MEMO_01", "Memória Visual");
  if (age <= 7) addNode("alfabetizacao", "PA_LETRAS_02", "Brincando com a Letra A");
  if (isEnsinoFundamental) addNode("bncc", "EF01LP01", "Escrita Espontânea");

  return nodes;
}
