import { describe, expect, it } from "vitest";
import { normalizarFala } from "@/lib/normalizador-fala";

describe("normalizarFala PT-BR", () => {
  const casos: Array<[string, string]> = [
    ["Número 3", "Número três"],
    ["3/4", "três quartos"],
    ["1/2", "um meio"],
    ["2,5", "dois vírgula cinco"],
    ["25%", "vinte e cinco por cento"],
    ["3²", "três ao quadrado"],
    ["10⁻²", "dez elevado a menos dois"],
    ["2³", "dois ao cubo"],
    ["√9", "raiz quadrada de nove"],
    ["−7", "menos sete"],
    ["2x + 4 = 10", "dois xis mais quatro é igual a dez"],
    ["7 · 1 · 1/8", "sete vezes um vezes um oitavo"],
    ["1,5 m", "um vírgula cinco metros"],
    ["150 cm", "cento e cinquenta centímetros"],
    ["R$ 12,50", "doze reais e cinquenta centavos"],
    ["7h30", "sete horas e trinta minutos"],
  ];

  it.each(casos)("lê %s como %s", (entrada, esperado) => {
    expect(normalizarFala(entrada).toLowerCase()).toContain(esperado.toLowerCase());
  });

  it("não transforma o artigo A no nome da letra em texto comum", () => {
    expect(normalizarFala("A casa é azul.")).toBe("A casa é azul.");
  });
});
