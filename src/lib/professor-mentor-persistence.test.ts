import { describe, expect, it, vi } from "vitest";
import { persistirAulaMentor } from "./professor-mentor-persistence.server";

function mockClient(options?: { pageError?: Error; linkError?: Error }) {
  const lessonId = "11111111-1111-4111-8111-111111111111";
  const planId = "22222222-2222-4222-8222-222222222222";
  const calls: string[] = [];
  const from = vi.fn((table: string) => {
    if (table === "rb_aulas") {
      return {
        insert: () => ({ select: () => ({ single: async () => ({ data: { id: lessonId }, error: null }) }) }),
        delete: () => ({ eq: async () => { calls.push("rollback"); return { error: null }; } }),
      };
    }
    if (table === "rb_paginas_aula") {
      return {
        insert: async () => {
          calls.push("pages");
          return { error: options?.pageError ?? null };
        },
        select: () => ({
          eq: async () => ({ count: 8, error: null }),
        }),
      };
    }
    if (table === "rb_aulas_geradas_ia") {
      return {
        upsert: () => ({ select: () => ({ single: async () => ({ data: { id: "cache" }, error: null }) }) }),
      };
    }
    if (table === "exam_study_plans") {
      return {
        update: (values: { mentor_aula_id: string }) => ({
          eq: () => ({
            select: () => ({
              single: async () => {
                calls.push("linked");
                return options?.linkError
                  ? { data: null, error: options.linkError }
                  : { data: { id: planId, mentor_aula_id: values.mentor_aula_id }, error: null };
              },
            }),
          }),
        }),
      };
    }
    throw new Error(`Tabela inesperada: ${table}`);
  });
  return { client: { from }, calls, lessonId, planId };
}

const input = {
  cacheKey: "missao-prova-cache",
  modulo: "missao_prova",
  dificuldadeOriginal: "português: verbos",
  titulo: "Verbos",
  objetivo: "Aprender verbos",
  provider: "gemini",
  conteudo: { materia: "Português" },
  paginas: Array.from({ length: 8 }, (_, index) => ({
    ordem: index + 1,
    tipo: "explicacao",
    titulo: `Página ${index + 1}`,
    conteudo: { texto: "Conteúdo" },
  })),
  studyPlanId: "22222222-2222-4222-8222-222222222222",
  minPaginas: 6,
};

describe("persistência da aula da Missão Prova", () => {
  it("salva as páginas antes de gravar mentor_aula_id", async () => {
    const { client, calls, lessonId } = mockClient();
    const result = await persistirAulaMentor(client as any, input);
    expect(result.aulaId).toBe(lessonId);
    expect(result.pageCount).toBe(8);
    expect(calls).toEqual(["pages", "linked"]);
  });

  it("nunca retorna sucesso quando a persistência das páginas falha", async () => {
    const { client, calls } = mockClient({ pageError: new Error("falha ao salvar páginas") });
    await expect(persistirAulaMentor(client as any, input)).rejects.toThrow("falha ao salvar páginas");
    expect(calls).toEqual(["pages", "rollback"]);
  });

  it("não considera sucesso quando mentor_aula_id não pode ser salvo", async () => {
    const { client, calls } = mockClient({ linkError: new Error("falha ao vincular") });
    await expect(persistirAulaMentor(client as any, input)).rejects.toThrow("falha ao vincular");
    expect(calls).toEqual(["pages", "linked", "rollback"]);
  });
});