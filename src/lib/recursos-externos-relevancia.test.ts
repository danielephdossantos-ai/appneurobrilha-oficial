import { describe, expect, it } from "vitest";

describe("curadoria de recursos escolares", () => {
  it("separa uma aula de sistema solar de entretenimento sem relação", () => {
    const termos = ["sistema", "solar"];
    const aula = "Sistema Solar: planetas e o Sol".toLowerCase();
    const musica = "Show musical do cantor favorito".toLowerCase();
    expect(termos.filter((termo) => aula.includes(termo))).toHaveLength(2);
    expect(termos.filter((termo) => musica.includes(termo))).toHaveLength(0);
  });
});
