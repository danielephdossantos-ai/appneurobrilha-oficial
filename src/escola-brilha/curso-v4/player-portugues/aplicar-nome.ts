/**
 * Substitui tokens de nome da criança ({NOME}, {INICIAL}) em qualquer texto
 * das aulas de Português. Usa o primeiro nome da criança ativa (anamnese).
 * Sem nome cadastrado, o vocativo some sem deixar frase quebrada.
 */
export function aplicarNome(texto: string, nome?: string | null): string {
  const primeiro = (nome ?? "").trim().split(/\s+/)[0] ?? "";
  if (primeiro) {
    return texto
      .replace(/\{NOME\}/g, primeiro)
      .replace(/\{INICIAL\}/g, primeiro.charAt(0).toUpperCase());
  }
  return texto
    .replace(/\{NOME\},?\s*/g, "")
    .replace(/\{INICIAL\}/g, "");
}

/** Aplica `aplicarNome` recursivamente em todas as strings de um objeto/array. */
export function aplicarNomeProfundo<T>(valor: T, nome?: string | null): T {
  if (typeof valor === "string") return aplicarNome(valor, nome) as unknown as T;
  if (Array.isArray(valor)) {
    return valor.map((v) => aplicarNomeProfundo(v, nome)) as unknown as T;
  }
  if (valor && typeof valor === "object") {
    const saida: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(valor as Record<string, unknown>)) {
      saida[k] = aplicarNomeProfundo(v, nome);
    }
    return saida as unknown as T;
  }
  return valor;
}
