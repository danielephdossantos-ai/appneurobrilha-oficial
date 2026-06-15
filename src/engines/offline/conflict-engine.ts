export class ConflictEngine {
  /**
   * Resolve conflitos entre dados locais e remotos.
   * Por padrão em apps infantis, o dado mais recente (timestamp) costuma ser o mais preciso.
   */
  static resolve(localData: any, remoteData: any) {
    if (!remoteData) return localData;
    if (!localData) return remoteData;

    const localTime = localData.updated_at ? new Date(localData.updated_at).getTime() : 0;
    const remoteTime = remoteData.updated_at ? new Date(remoteData.updated_at).getTime() : 0;

    // Se o local for mais novo, mantém o local
    if (localTime > remoteTime) {
      console.log("[ConflictEngine] Mantendo versão local (mais recente)");
      return localData;
    }

    // Caso contrário, usa o remoto
    console.log("[ConflictEngine] Usando versão remota");
    return remoteData;
  }

  /**
   * Mescla arrays de métricas (concatena o que falta)
   */
  static mergeMetrics(localMetrics: any[], remoteMetrics: any[]) {
    const remoteIds = new Set(remoteMetrics.map((m) => m.id));
    const uniqueLocal = localMetrics.filter((m) => !remoteIds.has(m.id));
    return [...remoteMetrics, ...uniqueLocal];
  }
}
