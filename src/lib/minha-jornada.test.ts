import { describe, it, expect, vi, beforeEach } from "vitest";
import { adicionarItemJornada } from "./minha-jornada-orquestrador";
import { supabase } from "@/integrations/supabase/client";

vi.mock("@/integrations/supabase/client", () => {
  const mockSingle = vi.fn();
  const mockUpsert = vi.fn().mockReturnThis();
  const mockSelect = vi.fn().mockReturnThis();
  const mockEq = vi.fn().mockReturnThis();
  const mockFrom = vi.fn().mockReturnThis();
  
  return {
    supabase: {
      from: mockFrom,
      select: mockSelect,
      eq: mockEq,
      upsert: mockUpsert,
      single: mockSingle,
    },
  };
});

describe("Minha Jornada Orquestrador - Fundação", () => {
  const mockChildId = "child-123";

  beforeEach(() => {
    vi.clearAllMocks();
    (supabase.from as any).mockReturnThis();
    (supabase.select as any).mockReturnThis();
    (supabase.eq as any).mockReturnThis();
    (supabase.upsert as any).mockReturnThis();
  });

  it("deve respeitar o bloqueio de Neuro-Treino para idade >= 8", async () => {
    (supabase.single as any).mockResolvedValueOnce({ data: { idade: 8 }, error: null });

    const item: any = {
      child_id: mockChildId,
      source: "neuro_treino",
      source_id: "toque-sequencia",
      title: "Atividade Proibida",
      status: "pending",
      priority_score: 50
    };

    const result = await adicionarItemJornada(item);
    expect(result.success).toBe(false);
    expect(result.error).toBe("Idade não permitida para este motor");
  });

  it("deve permitir Neuro-Treino para idade < 8", async () => {
    (supabase.single as any)
      .mockResolvedValueOnce({ data: { idade: 7 }, error: null })
      .mockResolvedValueOnce({ data: { id: "item-1" }, error: null });

    const item: any = {
      child_id: mockChildId,
      source: "neuro_treino",
      source_id: "toque-sequencia",
      title: "Atividade Permitida",
      status: "pending",
      priority_score: 50
    };

    const result = await adicionarItemJornada(item);
    expect(result.success).toBe(true);
  });

  it("deve preservar source e source_id originais no upsert", async () => {
    (supabase.single as any).mockResolvedValueOnce({ data: { id: "item-1" }, error: null });

    const item: any = {
      child_id: mockChildId,
      source: "curriculo_anual",
      source_id: "EF02MA01-OF-01",
      title: "Aula de Matemática",
      status: "pending",
      priority_score: 80
    };

    await adicionarItemJornada(item);

    const upsertArgs = (supabase.upsert as any).mock.calls[0][0];
    expect(upsertArgs.source).toBe("curriculo_anual");
    expect(upsertArgs.source_id).toBe("EF02MA01-OF-01");
  });
});
