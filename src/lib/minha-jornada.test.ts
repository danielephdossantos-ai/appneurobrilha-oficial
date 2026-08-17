import { describe, it, expect, vi, beforeEach } from "vitest";
import { adicionarItemJornada } from "./minha-jornada-orquestrador";
import { supabase } from "@/integrations/supabase/client";

// Mock Supabase
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn(),
      upsert: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
    })),
  },
}));

describe("Minha Jornada Orquestrador - Fundação", () => {
  const mockChildId = "child-123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve respeitar o bloqueio de Neuro-Treino para idade >= 8", async () => {
    // Mock criança com 8 anos
    (supabase.from as any)().single.mockResolvedValueOnce({ data: { idade: 8 } });

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
    // Mock criança com 7 anos
    (supabase.from as any)().single
      .mockResolvedValueOnce({ data: { idade: 7 } }) // Chamada do validarRegraIdade
      .mockResolvedValueOnce({ data: { id: "item-1" }, error: null }); // Chamada do upsert

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
    // Mock idade ok
    (supabase.from as any)().single
      .mockResolvedValueOnce({ data: { idade: 6 } })
      .mockResolvedValueOnce({ data: { id: "item-1" }, error: null });

    const item: any = {
      child_id: mockChildId,
      source: "curriculo_anual",
      source_id: "EF02MA01-OF-01",
      title: "Aula de Matemática",
      status: "pending",
      priority_score: 80
    };

    await adicionarItemJornada(item);

    const upsertCall = (supabase.from as any)().upsert.mock.calls[0][0];
    expect(upsertCall.source).toBe("curriculo_anual");
    expect(upsertCall.source_id).toBe("EF02MA01-OF-01");
  });
});
