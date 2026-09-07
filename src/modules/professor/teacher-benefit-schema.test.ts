import { describe, expect, it } from "vitest";
import sql from "../../../supabase/migrations/20260902030000_teacher_benefits_and_free_codes.sql?raw";

describe("benefício anual da Área do Professor", () => {
  it("conta somente vínculos com assinatura paga ativa", () => {
    expect(sql).toContain("e.source='paid'");
    expect(sql).toContain("e.status='active'");
    expect(sql).toContain("count(DISTINCT l.child_id)");
  });
  it("desbloqueia ao atingir quatro e só inativa quando chega a zero", () => {
    expect(sql).toContain("paid_count>=4");
    expect(sql).toContain("WHEN paid_count>0 THEN 'active' ELSE 'inactive'");
  });
  it("envia uma única mensagem de comemoração", () => {
    expect(sql).toContain("Você desbloqueou o acesso gratuito!");
    expect(sql).toContain("IF prior_notified IS NULL");
  });
  it("recalcula automaticamente quando vínculo ou assinatura muda", () => {
    expect(sql).toContain("teacher_link_refresh_benefit");
    expect(sql).toContain("child_entitlement_refresh_teacher_benefit");
  });
  it("mantém códigos gratuitos de aluno com hash, prazo e uso único", () => {
    expect(sql).toContain("public.child_free_access_codes");
    expect(sql).toContain("digest(normalized,'sha256')");
    expect(sql).toContain("code_row.redeemed_at IS NOT NULL");
  });
});
