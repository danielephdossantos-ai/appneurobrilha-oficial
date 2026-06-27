import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import type { ActivityLesson } from "../types/activity-lesson";

/**
 * Player ESTUDANTIL (Fundamental II — 6º ao 9º Ano · 11–14 anos).
 *
 * Diferente do ActivityPlayer (Fundamental I): SEM mascotes Pip/Pipa,
 * SEM bolhas infantis. Visual sóbrio tipo livro didático/EdTech adulto
 * (Khan Academy / Brilliant), tipografia maior, leitura objetiva.
 */

type Screen = "explicacao" | "exploracao" | "explicacao_curta" | "exemplo_visual" | "praticar";

const ORDER: Screen[] = [
  "explicacao",
  "exploracao",
  "explicacao_curta",
  "exemplo_visual",
  "praticar",
];

const SCREEN_LABEL: Record<Screen, string> = {
  explicacao: "1 · Introdução",
  exploracao: "2 · Conceitos-chave",
  explicacao_curta: "3 · Resumo",
  exemplo_visual: "4 · Aplicação",
  praticar: "5 · Verificação",
};

interface Props {
  lesson: ActivityLesson;
  currentRef?: unknown;
}

export const ActivityPlayerTeen: React.FC<Props> = ({ lesson, currentRef }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Screen>("explicacao");
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const idx = ORDER.indexOf(step);
  const goNext = () => {
    if (idx < ORDER.length - 1) setStep(ORDER[idx + 1]);
  };
  const goPrev = () => {
    if (idx > 0) setStep(ORDER[idx - 1]);
  };

  const s = lesson.screens;
  const correctIndex = s.praticar.options.findIndex((o) => o.isCorrect);

  return (
    <div
      ref={currentRef}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={16} /> Voltar
          </button>
          <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {lesson.subject}
          </div>
          <div className="text-xs font-semibold text-emerald-600">+{lesson.xp} XP</div>
        </div>
        {/* Progress */}
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-slate-900 transition-all"
            style={{ width: `${((idx + 1) / ORDER.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {SCREEN_LABEL[step]}
        </div>
        <h1 className="mb-6 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          {lesson.title}
        </h1>

        {step === "explicacao" && (
          <section className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm uppercase tracking-wider text-slate-500">
                {s.explicacao.instruction}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {s.explicacao.highlight}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {s.explicacao.summary}
              </p>
            </div>
            {s.explicacao.image_url && (
              <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <img
                  src={s.explicacao.image_url}
                  alt={s.explicacao.image_caption ?? ""}
                  className="max-h-96 w-full object-contain bg-slate-50"
                />
                {s.explicacao.image_caption && (
                  <figcaption className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
                    {s.explicacao.image_caption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        )}

        {step === "exploracao" && (
          <section className="space-y-3">
            <p className="text-base text-slate-700">{s.exploracao.instruction}</p>
            <ul className="divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-white">
              {s.exploracao.pairs.map((p, i) => (
                <li
                  key={i}
                  className="grid grid-cols-3 gap-4 px-5 py-4 text-base"
                >
                  <span className="col-span-1 font-medium text-slate-500">{p.left}</span>
                  <span className="col-span-2 font-semibold text-slate-900">{p.right}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {step === "explicacao_curta" && (
          <section className="space-y-4">
            <div className="rounded-lg border-l-4 border-slate-900 bg-white p-6">
              <p className="text-base leading-relaxed text-slate-800">
                {s.explicacao_curta.text}
              </p>
              {s.explicacao_curta.highlights && s.explicacao_curta.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.explicacao_curta.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="rounded bg-slate-900 px-2 py-1 text-xs font-semibold text-white"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {s.explicacao_curta.tip && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <strong className="font-semibold">Dica de estudo: </strong>
                {s.explicacao_curta.tip}
              </div>
            )}
          </section>
        )}

        {step === "exemplo_visual" && (
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {s.exemplo_visual.title}
            </h2>
            {s.exemplo_visual.image_url && (
              <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <img
                  src={s.exemplo_visual.image_url}
                  alt={s.exemplo_visual.image_caption ?? ""}
                  className="max-h-96 w-full object-contain bg-slate-50"
                />
                {s.exemplo_visual.image_caption && (
                  <figcaption className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
                    {s.exemplo_visual.image_caption}
                  </figcaption>
                )}
              </figure>
            )}
            <ol className="space-y-2">
              {s.exemplo_visual.sentences.map((sent, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base text-slate-800">{sent.text}</span>
                </li>
              ))}
            </ol>
            <p className="rounded-lg bg-slate-100 p-4 text-sm italic text-slate-700">
              {s.exemplo_visual.conclusion}
            </p>
          </section>
        )}

        {step === "praticar" && (
          <section className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Questão
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                {s.praticar.question}
              </p>
            </div>
            <div className="space-y-2">
              {s.praticar.options.map((opt, i) => {
                const isSel = selected === i;
                const isCorrect = submitted && i === correctIndex;
                const isWrong = submitted && isSel && !opt.isCorrect;
                return (
                  <button
                    key={i}
                    disabled={submitted}
                    onClick={() => setSelected(i)}
                    className={`flex w-full items-center justify-between rounded-lg border-2 px-5 py-4 text-left text-base font-medium transition ${
                      isCorrect
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                        : isWrong
                        ? "border-red-500 bg-red-50 text-red-900"
                        : isSel
                        ? "border-slate-900 bg-slate-50 text-slate-900"
                        : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                    }`}
                  >
                    <span>
                      {String.fromCharCode(65 + i)}. {opt.text}
                    </span>
                    {isCorrect && <Check size={20} className="text-emerald-600" />}
                    {isWrong && <X size={20} className="text-red-600" />}
                  </button>
                );
              })}
            </div>
            {!submitted ? (
              <button
                disabled={selected === null}
                onClick={() => setSubmitted(true)}
                className="w-full rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white disabled:opacity-40"
              >
                Confirmar resposta
              </button>
            ) : (
              <button
                onClick={() => navigate({ to: "/escola-brilha" })}
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white"
              >
                Concluir aula (+{lesson.xp} XP)
              </button>
            )}
          </section>
        )}

        {/* Nav */}
        {step !== "praticar" && (
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={goPrev}
              disabled={idx === 0}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-30"
            >
              <ArrowLeft size={16} /> Anterior
            </button>
            <button
              onClick={goNext}
              className="flex items-center gap-1 rounded-md bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
            >
              Próximo <ArrowRight size={16} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ActivityPlayerTeen;
