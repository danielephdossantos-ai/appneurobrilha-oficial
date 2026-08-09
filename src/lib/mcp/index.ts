import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listLessons from "./tools/list-lessons";
import getLesson from "./tools/get-lesson";

// O issuer precisa ser o host direto do Supabase (o proxy publicado não serve).
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "neurobrilha-kids-mcp",
  title: "NeuroBrilha Kids MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas para explorar a biblioteca pedagógica BNCC do NeuroBrilha Kids. Use `list_lessons` para descobrir os códigos disponíveis e `get_lesson` para obter o conteúdo estruturado de uma aula.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listLessons, getLesson],
});

