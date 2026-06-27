/**
 * Guardrail: garante que a camada pedagógica de 6º–9º existe, mas NÃO troca
 * o visual original das aulas interativas já desenhadas no Escola Brilha.
 */
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { buildLessonV2 } from "../engine/lesson-builder-v2";
import {
  CELULAS_LESSON,
  OCEANOS_LESSON,
  BIOMAS_LESSON,
  EQUACOES_LESSON,
  REVOLUCAO_LESSON,
  SISTEMA_NERVOSO_LESSON,
  GENETICA_LESSON,
  ILUMINISMO_LESSON,
} from "../data/activity-lessons-c";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => vi.fn(),
}));
vi.mock("../services/AudioSpeechService", () => ({
  AudioSpeechService: { speak: vi.fn(), stop: vi.fn() },
}));
vi.mock("../components/NextLessonInlineButton", () => ({
  NextLessonInlineButton: () => null,
}));
vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: new Proxy(
    {},
    {
      get: () =>
        ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  ),
}));

import { ActivityPlayerC } from "../views/ActivityPlayerC";

const FUND2_GRADES = new Set([
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano",
  "6º ao 7º Ano",
  "8º ao 9º Ano",
  "6º ao 9º Ano",
]);

const LEGACY_LESSONS = [
  OCEANOS_LESSON,
  BIOMAS_LESSON,
  CELULAS_LESSON,
  EQUACOES_LESSON,
  REVOLUCAO_LESSON,
  SISTEMA_NERVOSO_LESSON,
  GENETICA_LESSON,
  ILUMINISMO_LESSON,
];

const BNCC_SAMPLES: { code: string; titulo: string; grade: string }[] = [
  { code: "EF06CI04", titulo: "Célula", grade: "6º Ano" },
  { code: "EF06MA01", titulo: "Frações", grade: "6º Ano" },
  { code: "EF06LP01", titulo: "Leitura", grade: "6º Ano" },
  { code: "EF07GE02", titulo: "Mapas", grade: "7º Ano" },
  { code: "EF07HI01", titulo: "Renascimento", grade: "7º Ano" },
  { code: "EF07MA18", titulo: "Equações", grade: "7º Ano" },
  { code: "EF08CI08", titulo: "Sistema Nervoso", grade: "8º Ano" },
  { code: "EF08HI13", titulo: "Revolução", grade: "8º Ano" },
  { code: "EF08LP05", titulo: "Argumentação", grade: "8º Ano" },
  { code: "EF09CI08", titulo: "Genética", grade: "9º Ano" },
  { code: "EF09HI01", titulo: "Iluminismo", grade: "9º Ano" },
  { code: "EF09MA10", titulo: "Funções", grade: "9º Ano" },
];

describe("Pedagogia 6º–9º sem substituir visual original", () => {
  it("FUND2_GRADES cobre todas as séries do Fundamental II", () => {
    ["6º Ano", "7º Ano", "8º Ano", "9º Ano"].forEach((g) =>
      expect(FUND2_GRADES.has(g)).toBe(true),
    );
  });

  it.each(BNCC_SAMPLES)(
    "buildLessonV2 retorna aula de 9 telas para $code ($grade)",
    ({ code, titulo }) => {
      const lesson = buildLessonV2(code, titulo);
      expect(lesson).not.toBeNull();
      const s = lesson!.screens;
      // 9 telas presentes
      expect(s.missao).toBeDefined();
      expect(s.exploracao).toBeDefined();
      expect(s.explicacao).toBeDefined();
      expect(s.exemplo).toBeDefined();
      expect(s.guiada).toBeDefined();
      expect(s.atividade).toBeDefined();
      expect(s.desafio).toBeDefined();
      expect(s.resumo).toBeDefined();
      expect(s.dominio).toBeDefined();
      // shapes essenciais
      expect(s.explicacao.passoAPasso.length).toBeGreaterThanOrEqual(3);
      expect(s.guiada.options.every((o) => typeof o.reason === "string")).toBe(true);
      expect(s.atividade.items.length).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(LEGACY_LESSONS.map((l) => [l.bncc_code, l.title, l.grade] as const))(
    "aula legacy %s mantém ActivityPlayerC e ainda tem conteúdo pedagógico",
    (code, title, grade) => {
      expect(FUND2_GRADES.has(grade)).toBe(true);
      const v2 = buildLessonV2(code, title);
      expect(v2).not.toBeNull();
    },
  );

  it("explicação NUNCA é igual ao texto cru da BNCC", () => {
    const fakeBncc = "objetivo da bncc — texto que jamais deve virar explicação";
    for (const s of BNCC_SAMPLES) {
      const v2 = buildLessonV2(s.code, s.titulo, fakeBncc)!;
      expect(v2.screens.explicacao.conceito.toLowerCase()).not.toBe(fakeBncc);
    }
  });
});

describe("ActivityPlayerC layout preservado", () => {
  const lesson = CELULAS_LESSON;

  it("renderiza as telas originais do player interativo", () => {
    render(<ActivityPlayerC lesson={lesson} />);
    [
      "Missão",
      "Exploração",
      "Pontos-Chave",
      "Exemplo",
      "Desafio",
    ].forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("exibe marcas do layout antigo/interativo e botão de áudio", () => {
    render(<ActivityPlayerC lesson={lesson} />);
    expect(screen.getByText("Ciências")).toBeInTheDocument();
    expect(screen.getByText("7º Ano")).toBeInTheDocument();
    expect(screen.getAllByText(/XP/).length).toBeGreaterThan(0);
    expect(screen.getByLabelText("Ouvir explicação")).toBeInTheDocument();
  });
});
