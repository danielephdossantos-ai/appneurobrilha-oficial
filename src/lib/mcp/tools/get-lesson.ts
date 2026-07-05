import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_lesson",
  title: "Obter aula BNCC",
  description:
    "Retorna o conteúdo estruturado de uma aula da biblioteca oficial pelo código BNCC (ex: EF01MA02).",
  inputSchema: {
    codigo: z
      .string()
      .regex(/^EF\d{2}[A-Z]{2}\d{2}$/i, "Código BNCC inválido (ex: EF01MA02).")
      .describe("Código BNCC da aula."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ codigo }) => {
    const cod = codigo.toUpperCase();
    try {
      const mod = await import(`../../../escola-brilha/data/${cod}.ts`);
      const aula = mod.default ?? mod[cod] ?? mod;
      return {
        content: [{ type: "text", text: JSON.stringify(aula, null, 2) }],
        structuredContent: { codigo: cod, aula },
      };
    } catch {
      return {
        content: [{ type: "text", text: `Aula ${cod} não encontrada.` }],
        isError: true,
      };
    }
  },
});
