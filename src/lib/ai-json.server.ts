/** Utilitários seguros para respostas JSON de modelos de IA. */
export function extrairJSONSeguro(texto: string): string {
  const original = String(texto ?? "").trim();
  if (!original) throw new Error("Resposta vazia da IA");

  const bloco = original.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const candidatos = [bloco?.[1]?.trim(), original].filter(Boolean) as string[];

  for (const candidato of candidatos) {
    try {
      JSON.parse(candidato);
      return candidato;
    } catch {}

    const inicioObj = candidato.indexOf("{");
    const fimObj = candidato.lastIndexOf("}");
    if (inicioObj >= 0 && fimObj > inicioObj) {
      const recorte = candidato.slice(inicioObj, fimObj + 1);
      try {
        JSON.parse(recorte);
        return recorte;
      } catch {}
      const limpo = recorte.replace(/[\u0000-\u001F\u007F-\u009F]/g, " ");
      try {
        JSON.parse(limpo);
        return limpo;
      } catch {}
    }
  }

  throw new Error("A IA retornou conteúdo que não pode ser convertido em JSON válido");
}

export function parseJSONSeguro<T = unknown>(texto: string): T {
  return JSON.parse(extrairJSONSeguro(texto)) as T;
}
