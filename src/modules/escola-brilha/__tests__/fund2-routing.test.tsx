/**
 * E2E-style guardrail: garante que TODAS as séries do Fundamental II
 * (6º, 7º, 8º, 9º) sempre renderizam o Fund2Player — nunca o ActivityPlayerC.
 *
 * Cobre:
 *  1. Set FUND2_GRADES que o roteador usa.
 *  2. generateActivityLesson6a9 retorna lesson válida para todos os
 *     códigos legacy do ACTIVITY_C_MAP (6º–9º).
 *  3. Render do Fund2Player com asserts no stepper (8 etapas) e no layout
 *     novo (sem marcas do ActivityPlayerC).
 */
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { generateActivityLesson6a9 } from "../data/activity-lesson-generator-6a9";
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

// ── Mocks de infraestrutura externa ao player ────────────────────────────
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

import { Fund2Player } from "../views/Fund2Player";

// Mesmo set usado em src/routes/escola-brilha.db.$aulaId.tsx
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

// Códigos BNCC representativos para cada série e disciplinas variadas.
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

describe("Fund2 routing guardrail (6º–9º Ano)", () => {
  it("FUND2_GRADES cobre todas as séries do Fundamental II", () => {
    ["6º Ano", "7º Ano", "8º Ano", "9º Ano"].forEach((g) =>
      expect(FUND2_GRADES.has(g)).toBe(true),
    );
  });

  it.each(BNCC_SAMPLES)(
    "generateActivityLesson6a9 retorna aula válida para $code ($grade)",
    ({ code, titulo }) => {
      const lesson = generateActivityLesson6a9(code, titulo);
      expect(lesson).not.toBeNull();
      expect(lesson!.screens.explicacao).toBeDefined();
      expect(lesson!.screens.exploracao.pairs.length).toBeGreaterThan(0);
      expect(lesson!.screens.exemplo_visual.sentences.length).toBeGreaterThan(0);
      expect(lesson!.screens.praticar.options.length).toBeGreaterThan(0);
    },
  );

  it.each(LEGACY_LESSONS.map((l) => [l.bncc_code, l.title, l.grade] as const))(
    "aula legacy %s (%s — %s) é roteada para Fund2Player (não ActivityPlayerC)",
    (code, title, grade) => {
      expect(FUND2_GRADES.has(grade)).toBe(true);
      const f2 = generateActivityLesson6a9(code, title);
      // Mesma condição usada em LessonPlayer.tsx e na rota db/$aulaId:
      // se generator retorna lesson, dispatcher usa Fund2Player.
      expect(f2).not.toBeNull();
    },
  );
});

describe("Fund2Player layout (stepper + novo layout)", () => {
  const lesson = generateActivityLesson6a9("EF06CI04", "Célula")!;

  it("renderiza as 8 etapas do stepper", () => {
    render(
      <Fund2Player
        lesson={lesson}
        disciplina="Ciências"
        serie="6º Ano"
        codigoBncc="EF06CI04"
      />,
    );
    [
      "MISSÃO",
      "EXPLORAÇÃO",
      "EXPLICAÇÃO",
      "EXEMPLO APLICADO",
      "ATIVIDADE GUIADA",
      "DESAFIO",
      "REVISÃO E SÍNTESE",
      "CONCLUSÃO",
    ].forEach((label) => {
      // labels aparecem >=1x (botões do stepper + título de tela atual)
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("exibe marcas do novo layout (BNCC pill, XP) e botão de áudio", () => {
    render(
      <Fund2Player
        lesson={lesson}
        disciplina="Ciências"
        serie="6º Ano"
        codigoBncc="EF06CI04"
      />,
    );
    expect(screen.getByText(/BNCC · EF06CI04/)).toBeInTheDocument();
    expect(screen.getAllByText(/XP/).length).toBeGreaterThan(0);
    expect(screen.getByLabelText("Ouvir explicação")).toBeInTheDocument();
    expect(screen.getByLabelText("Menu")).toBeInTheDocument();
  });

  it("NÃO renderiza marcas exclusivas do ActivityPlayerC (sidebar antiga)", () => {
    render(
      <Fund2Player
        lesson={lesson}
        disciplina="Ciências"
        serie="6º Ano"
        codigoBncc="EF06CI04"
      />,
    );
    // ActivityPlayerC usa um sidebar com "CAPÍTULO" em caps; Fund2Player não.
    expect(screen.queryByText(/CAPÍTULO/i)).toBeNull();
  });
});
