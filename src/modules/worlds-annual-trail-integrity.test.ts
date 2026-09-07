import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (file: string) => readFileSync(resolve(process.cwd(), file), "utf8");

describe("mundos e trilha do currículo anual", () => {
  it("usa o mesmo catálogo na loja e no fundo das trilhas", () => {
    const store = read("src/pages/MascotStore.tsx");
    const trail = read("src/components/worlds/MundoTrilha.tsx");
    expect(store).toContain('from "@/components/worlds/mundos"');
    expect(trail).toContain('from "@/components/worlds/mundos"');
    expect(trail).toContain("backgroundImage:");
  });

  it("mostra o currículo anual como trilha escolar", () => {
    const annual = read("src/routes/curriculo-anual.tsx");
    expect(annual).toContain("<TrilhaPlanoVisual");
    expect(annual).toContain('tipo="school"');
    expect(annual).toContain("disabled={!!periodoAtual");
  });

  it("tranca dias futuros e cria sequência diária escolar", () => {
    const visual = read("src/components/planos/TrilhaPlanoVisual.tsx");
    expect(visual).toContain("bloquearDiasFuturos && item.dia_semana > hoje");
    expect(visual).toContain('tipo === "school" ? "school" : "literacy"');
    expect(visual).toContain("sessionRoutes:");
  });
});
