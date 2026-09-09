import { z } from "zod";

// Mock version of parseBNCC for tests to avoid Vite glob imports
function parseBNCCMock(codigo: string) {
  const c = (codigo || "").toUpperCase().trim();
  const etapaSigla = c.slice(0, 2);
  const anoSigla = c.slice(2, 4);
  const disciplinaSigla = c.slice(4, 6);
  return { codigo: c, etapaSigla, anoSigla, disciplinaSigla, ano: `${parseInt(anoSigla)}º Ano` };
}

export async function mockDecidirConteudoAula(data: {
  codigoBNCC: string;
  childId: string;
  idade?: number;
  serie?: string;
  nivelAtual: number;
}, supabase: any) {
  const bncc = parseBNCCMock(data.codigoBNCC);
  
  // 1. Verificar na biblioteca global
  const { data: existente } = await supabase
    .from("aulas_geradas")
    .select("*")
    .eq("codigo_bncc", data.codigoBNCC)
    .eq("serie", data.serie || bncc.ano)
    .eq("nivel", data.nivelAtual)
    .eq("status", "approved")
    .maybeSingle();

  if (existente) {
    // Simular registrarUsoBibliotecaIA
    await supabase.from("aulas_geradas").update({
      total_usos: (existente.total_usos || 0) + 1,
      ultima_utilizacao: new Date().toISOString()
    }).eq("id", existente.id);

    return { 
      status: "pronta", 
      aulaId: existente.id, 
      origem: "biblioteca_ia"
    };
  }

  return { status: "necessita_geracao" };
}
