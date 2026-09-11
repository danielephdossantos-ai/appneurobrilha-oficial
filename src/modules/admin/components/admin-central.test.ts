import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("Central Administrativa", () => {
  const navigation = read("src/modules/admin/components/AdminCentralNavigation.tsx");
  const homeLink = read("src/modules/admin/components/AdminCentralHomeLink.tsx");
  const adminRoute = read("src/routes/admin.tsx");
  const adminHome = read("src/routes/admin.index.tsx");
  const adminCodes = read("src/routes/admin.professores.tsx");
  const home = read("src/routes/index.tsx");

  it("unifica painel e gestão de códigos na mesma navegação", () => {
    expect(navigation).toContain('to: "/admin"');
    expect(navigation).toContain('to: "/admin/professores"');
    expect(adminHome).toContain("AdminCentralNavigation");
    expect(adminCodes).toContain("AdminCentralNavigation");
  });

  it("mostra a entrada da Home somente após validar a role admin", () => {
    expect(homeLink).toContain('from("user_roles")');
    expect(homeLink).toContain('.eq("role", "admin")');
    expect(homeLink).toContain("if (!isAdmin) return null");
    expect(home).toContain("AdminCentralHomeLink");
  });

  it("mantem a rota protegida e as funções existentes de códigos", () => {
    expect(adminRoute).toContain('eq("role", "admin")');
    expect(adminCodes).toContain("admin_generate_teacher_free_codes");
    expect(adminCodes).toContain("admin_generate_child_free_codes");
    expect(adminCodes).toContain("admin_set_teacher_access");
  });
});
