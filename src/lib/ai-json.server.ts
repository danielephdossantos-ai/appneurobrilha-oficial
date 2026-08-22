export function extrairJSON(texto: string): unknown {
  const raw = String(texto ?? "").trim();
  if (!raw) throw new Error("A IA retornou uma resposta vazia.");

  const semFence = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    return JSON.parse(semFence);
  } catch {
    const firstObj = semFence.indexOf("{");
    const lastObj = semFence.lastIndexOf("}");
    if (firstObj >= 0 && lastObj > firstObj) {
      return JSON.parse(semFence.slice(firstObj, lastObj + 1));
    }
    const firstArr = semFence.indexOf("[");
    const lastArr = semFence.lastIndexOf("]");
    if (firstArr >= 0 && lastArr > firstArr) {
      return JSON.parse(semFence.slice(firstArr, lastArr + 1));
    }
    throw new Error("A resposta da IA não contém JSON válido.");
  }
}
