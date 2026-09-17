import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (file: string) => readFileSync(resolve(process.cwd(), file), "utf8");
const prova = read("src/routes/missao-prova.tsx");
const trabalho = read("src/components/reforco-brilha/TrabalhoBrilha.tsx");
const tarefa = read("src/components/missao-tarefa/MissaoTarefa.tsx");
const reforco = read("src/routes/reforco-brilha.tsx");
const viewer = read("src/components/reforco-brilha/AulaViewer.tsx");
const mentor = read("src/lib/ia-mentor-reforco.functions.ts");

describe("Bloco 3 usa um Professor Mentor persistente", () => {
  it("Prova cria, vincula e registra a aula", () => {
    expect(prova).toContain('modo: "prova"');
    expect(prova).toContain("mentor_aula_id: aulaId");
    expect(prova).toContain("duration_seconds: tempoSegundos");
  });

  it("Trabalho ensina antes de montar", () => {
    expect(trabalho).toContain("Aprender");
    expect(trabalho).toContain("Montar →");
    expect(trabalho).toContain('modo: "trabalho"');
  });

  it("Tarefa ensina sem revelar a resposta", () => {
    expect(tarefa).toContain("Aprender o conteúdo");
    expect(tarefa).toContain('modo: "tarefa"');
    expect(tarefa).toContain("Não revele a resposta da tarefa");
  });

  it("Reforço usa a mesma aula e registra o ID gerado", () => {
    expect(reforco).toContain('modo: "reforco"');
    expect(reforco).toContain("onReady={(aulaId)");
    expect(viewer).toContain("onReady?.(res.id)");
  });

  it("Gemini, Groq e Lovable continuam centralizados no orquestrador", () => {
    expect(mentor).toContain("chamarProfessorMentorIA");
    expect(mentor).toContain('["reforco", "prova", "trabalho", "tarefa"]');
  });
});
