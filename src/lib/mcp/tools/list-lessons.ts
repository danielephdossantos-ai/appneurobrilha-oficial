import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_lessons",
  title: "Listar aulas BNCC disponíveis",
  description:
    "Lista os códigos BNCC das aulas de Matemática do 1º Ano disponíveis na biblioteca oficial do NeuroBrilha Kids.",
  inputSchema: {
    disciplina: z
      .enum(["matematica"])
      .optional()
      .describe("Disciplina a filtrar. No momento apenas 'matematica'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const codigos = Array.from(
      { length: 22 },
      (_, i) => `EF01MA${String(i + 1).padStart(2, "0")}`,
    );
    return {
      content: [{ type: "text", text: codigos.join(", ") }],
      structuredContent: { disciplina: "matematica", serie: "1ano", codigos },
    };
  },
});
