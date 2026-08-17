import { describe, it, expect, vi, beforeEach } from "vitest";
import { adicionarItemJornada } from "./minha-jornada-orquestrador";
import { adaptarPlanoNeuroParaJornada } from "../modules/minha-jornada/plano-neuro-adapter";
import { supabase } from "@/integrations/supabase/client";

vi.mock("@/integrations/supabase/client", () => {
  const m = {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    upsert: vi.fn().mockReturnThis(),
    single: vi.fn(),
    order: vi.fn().mockReturnThis(),
  };
  return { supabase: m };
});

describe("Minha Jornada Orquestrador - Fase 2B.3 (Plano Neuro)", () => {
  const mockChildId = "child-123";

  beforeEach(() => {
    vi.clearAllMocks();
    (supabase.from as any).mockReturnThis();
    (supabase.select as any).mockReturnThis();
    (supabase.eq as any).mockReturnThis();
    (supabase.upsert as any).mockReturnThis();
  });

  describe("Adaptador Plano Neuro", () => {
    it("deve mapear corretamente os campos do Plano Neuro para a Jornada", () => {
      const mockPlano: any = {
        itens: [{
          semana: 1,
          dia_semana: 1,
          ordem: 1,
          slug: "memoria-visual",
          nome: "Memória Visual",
          emoji: "👁️",
          grupo: "Cognitivo",
          objetivo: "Treinar memória",
          por_que: "Atenção baixa",
          prioridade: 1,
          rota: "/neuro-treino/memoria-visual",
          minutos: 10
        }]
      };

      const result = adaptarPlanoNeuroParaJornada(mockChildId, mockPlano);
      expect(result).toHaveLength(1);
      
      const item = result[0];
      expect(item.child_id).toBe(mockChildId);
      expect(item.source).toBe("plano_neuro");
      expect(item.source_id).toBe("memoria-visual-1-1-1");
      expect(item.priority_score).toBe(90); // 100 - (1 * 10)
      expect(item.priority_reason).toBe("Atenção baixa");
      expect(item.metadata?.emoji).toBe("👁️");
    });

    it("deve lidar com plano vazio", () => {
      const result = adaptarPlanoNeuroParaJornada(mockChildId, { itens: [] } as any);
      expect(result).toEqual([]);
    });
  });

  describe("Regras e Validações", () => {
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

    it("NÃO deve bloquear Plano Neuro para idade >= 8", async () => {
      (supabase.single as any)
        .mockResolvedValueOnce({ data: { idade: 8 }, error: null })
        .mockResolvedValueOnce({ data: { id: "item-1" }, error: null });

      const item: any = {
        child_id: mockChildId,
        source: "plano_neuro",
        source_id: "atividade-1",
        title: "Plano Neuro para +8",
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
        source: "plano_neuro",
        source_id: "EF02MA01-OF-01",
        title: "Aula de Matemática",
        status: "pending",
        priority_score: 80
      };

      await adicionarItemJornada(item);

      const upsertArgs = (supabase.upsert as any).mock.calls[0][0];
      expect(upsertArgs.source).toBe("plano_neuro");
      expect(upsertArgs.source_id).toBe("EF02MA01-OF-01");
    });
  });
});
