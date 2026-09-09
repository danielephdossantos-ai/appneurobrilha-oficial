/**
 * Normalizador de Hiperfocos do Perfil
 * Extrai o hiperfoco principal da anamnese ou perfil da criança.
 */
export function extrairHiperfoco(profile: any): string | null {
  if (!profile) return null;

  // 1. Tentar pegar do campo explícito se existir no futuro
  if (profile.hiperfoco) return profile.hiperfoco;

  // 2. Tentar pegar da anamnese_v2 (se carregada)
  const anamnese = profile.anamnese_v2;
  if (anamnese && anamnese.responses) {
    // Verificamos o step que costuma ter interesses (geralmente step10 ou step9 dependendo da versão)
    // No projeto NeuroBrilha, o hiperfoco é perguntado na anamnese
    const r = anamnese.responses;
    
    // Busca comum em campos de "interesses", "gosta de", etc.
    // Baseado no log anterior, step10 tem "interesses_restritos", mas o valor é um score
    // O texto livre geralmente fica em campos específicos.
    // Vamos procurar por padrões conhecidos.
    
    const interesses = r.step10?.interesses_detalhes || r.step1?.interesses || r.step1?.hiperfoco;
    if (interesses) return interesses;
  }

  // 3. Fallback para campos genéricos de metadados
  if (profile.metadata?.hiperfoco) return profile.metadata.hiperfoco;

  return null;
}
