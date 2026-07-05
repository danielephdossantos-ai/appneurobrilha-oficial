import { defineMcp } from "@lovable.dev/mcp-js";
import listLessons from "./tools/list-lessons";
import getLesson from "./tools/get-lesson";

export default defineMcp({
  name: "neurobrilha-kids-mcp",
  title: "NeuroBrilha Kids MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas para explorar a biblioteca pedagógica BNCC do NeuroBrilha Kids. Use `list_lessons` para descobrir os códigos disponíveis e `get_lesson` para obter o conteúdo estruturado de uma aula.",
  tools: [listLessons, getLesson],
});
