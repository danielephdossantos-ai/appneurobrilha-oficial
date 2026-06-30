import React, { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  HelpCircle,
  Home,
  Lightbulb,
  ListChecks,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import type { LessonContent, QuizQuestao } from "@/modules/pedagogical-repository";
import { NextLessonInlineButton } from "../components/NextLessonInlineButton";
import type { LessonRef } from "../hooks/useNextLesson";

interface Props {
  lesson: LessonContent;
  currentRef?: LessonRef;
}

type StepId =
  | "objetivo"
  | "introducao"
  | "explicacao"
  | "exemplo"
  | "cotidiano"
  | "guiada"
  | "independente"
  | "curiosidade"
  | "desafio"
  | "resumo"
  | "revisao"
  | "quiz"
  | "resultado";

const STEPS: { id: StepId; label: string; Icon: typeof Target }[] = [
  { id: "objetivo", label: "Objetivo", Icon: Target },
  { id: "introducao", label: "Introdução", Icon: Sparkles },
  { id: "explicacao", label: "Explicação", Icon: BookOpen },
  { id: "exemplo", label: "Exemplo", Icon: Lightbulb },
  { id: "cotidiano", label: "No cotidiano", Icon: Home },
  { id: "guiada", label: "Prática guiada", Icon: ClipboardCheck },
  { id: "independente", label: "Prática", Icon: ClipboardList },
  { id: "curiosidade", label: "Curiosidade", Icon: HelpCircle },
  { id: "desafio", label: "Desafio", Icon: Sparkles },
  { id: "resumo", label: "Resumo", Icon: ListChecks },
  { id: "revisao", label: "Revisão", Icon: BookOpen },
  { id: "quiz", label: "Quiz", Icon: ClipboardCheck },
  { id: "resultado", label: "Resultado", Icon: Award },
];

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function cleanForChild(value: unknown): string {
  return text(value)
    .replace(/A habilidade\s+[A-Z0-9]+\s+pede que a criança consiga:\s*/gi, "Nesta aula, vamos aprender a ")
    .replace(/Ao final desta aula a criança será capaz de:\s*/gi, "Você vai aprender a ")
    .replace(/habilidade BNCC/gi, "missão")
    .replace(/BNCC/gi, "")
    .replace(/\s+\./g, ".")
    .replace(/\.\./g, ".")
    .trim();
}

function asArray<T = unknown>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function getFirstString(obj: unknown, keys: string[], fallback = "") {
  if (!obj || typeof obj !== "object") return fallback;
  const row = obj as Record<string, unknown>;
  for (const key of keys) {
    const value = text(row[key]);
    if (value) return value;
  }
  return fallback;
}

function normalizeSteps(value: unknown) {
  return asArray<Record<string, unknown>>(value)
    .map((item, index) => {
      const title =
        getFirstString(item, ["titulo", "step", "passo"], `Passo ${index + 1}`) ||
        `Passo ${index + 1}`;
      const detail = getFirstString(item, ["descricao", "detail", "instrucao", "dica"]);
      return { title, detail: cleanForChild(detail) };
    })
    .filter((item) => item.title || item.detail);
}

function normalizeActivities(value: unknown) {
  return asArray<Record<string, unknown>>(value)
    .map((item) => ({
      prompt: cleanForChild(getFirstString(item, ["enunciado", "instrucao", "pergunta", "titulo", "descricao"])),
      answer: cleanForChild(getFirstString(item, ["resposta", "gabarito", "explicacao"])),
      hint: cleanForChild(getFirstString(item, ["dica", "orientacao"])),
    }))
    .filter((item) => item.prompt || item.answer || item.hint);
}

function normalizeChallenge(value: unknown) {
  if (!value || typeof value !== "object") return null;
  const item = value as Record<string, unknown>;
  const title = cleanForChild(getFirstString(item, ["titulo", "enunciado", "pergunta"], "Desafio"));
  const description = cleanForChild(getFirstString(item, ["descricao", "resposta", "explicacao", "dica"]));
  return title || description ? { title, description } : null;
}

function normalizeKeywords(value: unknown) {
  return asArray<unknown>(value)
    .map((item) => {
      if (typeof item === "string") return { term: item, definition: "Palavra importante desta aula." };
      if (item && typeof item === "object") {
        const row = item as Record<string, unknown>;
        return {
          term: text(row.termo) || text(row.label) || text(row.palavra),
          definition: cleanForChild(text(row.definicao) || text(row.detail) || text(row.descricao)),
        };
      }
      return { term: "", definition: "" };
    })
    .filter((item) => item.term);
}

function quizIsValid(question: QuizQuestao) {
  return Boolean(question?.pergunta && Array.isArray(question.alternativas) && question.alternativas.length >= 2);
}

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 ${className}`}>{children}</section>
);

const StepHeader: React.FC<{
  Icon: typeof Target;
  eyebrow: string;
  title: string;
  subtitle?: string;
}> = ({ Icon, eyebrow, title, subtitle }) => (
  <div className="mb-5">
    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700">
      <Icon className="h-4 w-4" /> {eyebrow}
    </div>
    <h1 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{title}</h1>
    {subtitle && <p className="mt-2 text-base font-semibold text-slate-600">{subtitle}</p>}
  </div>
);

const TextBlock: React.FC<{ children: React.ReactNode; tone?: "blue" | "green" | "amber" | "slate" }> = ({
  children,
  tone = "slate",
}) => {
  const colors = {
    blue: "border-sky-200 bg-sky-50 text-sky-950",
    green: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    slate: "border-slate-200 bg-slate-50 text-slate-800",
  }[tone];
  return <div className={`rounded-2xl border p-4 text-lg leading-relaxed ${colors}`}>{children}</div>;
};

export const LessonContentPlayer: React.FC<Props> = ({ lesson, currentRef }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [quizPicks, setQuizPicks] = useState<Record<number, number>>({});

  const steps = useMemo(() => normalizeSteps(lesson.passo_a_passo), [lesson.passo_a_passo]);
  const guided = useMemo(() => normalizeActivities(lesson.atividade_guiada), [lesson.atividade_guiada]);
  const practice = useMemo(() => normalizeActivities(lesson.atividade_pratica), [lesson.atividade_pratica]);
  const challenge = useMemo(() => normalizeChallenge(lesson.desafio), [lesson.desafio]);
  const keywords = useMemo(() => normalizeKeywords(lesson.palavras_chave), [lesson.palavras_chave]);
  const quiz = useMemo(() => asArray<QuizQuestao>(lesson.quiz).filter(quizIsValid), [lesson.quiz]);

  const answered = Object.keys(quizPicks).length;
  const correct = quiz.reduce((total, question, index) => total + (quizPicks[index] === question.correta ? 1 : 0), 0);
  const score = quiz.length ? Math.round((correct / quiz.length) * 100) : 0;

  const current = STEPS[step];
  const CurrentIcon = current.Icon;
  const next = () => setStep((value) => Math.min(STEPS.length - 1, value + 1));
  const prev = () => setStep((value) => Math.max(0, value - 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            aria-label="Voltar para Escola Brilha"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-black uppercase tracking-wider text-emerald-700">
              {lesson.disciplina} • {lesson.ano}
            </p>
            <h1 className="truncate text-sm font-black text-slate-950 sm:text-base">{lesson.titulo}</h1>
          </div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">+30 XP</div>
        </div>
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3 sm:px-6">
          <ol className="flex min-w-max items-center gap-2">
            {STEPS.map((item, index) => {
              const active = index === step;
              const done = index < step;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => index <= step && setStep(index)}
                    disabled={index > step}
                    className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                      active
                        ? "bg-emerald-600 text-white shadow"
                        : done
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {index + 1}. {item.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
        <Card className="p-5 sm:p-8">
          {current.id === "objetivo" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Começo da aula" title={lesson.titulo} subtitle="Primeiro vamos entender a missão de aprendizagem." />
              <TextBlock tone="green">{cleanForChild(lesson.objetivo)}</TextBlock>
              {keywords.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {keywords.slice(0, 8).map((item, index) => (
                    <span key={`${item.term}-${index}`} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                      {item.term}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}

          {current.id === "introducao" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Introdução" title="Vamos entrar no assunto" />
              <TextBlock tone="blue">{cleanForChild(lesson.introducao)}</TextBlock>
              {lesson.contextualizacao && <TextBlock tone="slate"><span className="font-black">Observe: </span>{cleanForChild(lesson.contextualizacao)}</TextBlock>}
            </>
          )}

          {current.id === "explicacao" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Explicação" title="Aprenda passo a passo" />
              <TextBlock>{cleanForChild(lesson.explicacao)}</TextBlock>
              {steps.length > 0 && (
                <ol className="mt-5 space-y-3">
                  {steps.map((item, index) => (
                    <li key={index} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-sm font-black text-white">{index + 1}</span>
                      <div>
                        <p className="font-black text-slate-950">{cleanForChild(item.title)}</p>
                        {item.detail && <p className="mt-1 text-slate-700">{item.detail}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </>
          )}

          {current.id === "exemplo" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Exemplo" title="Veja como fica na prática" />
              <TextBlock tone="amber">{cleanForChild(lesson.exemplo1)}</TextBlock>
              {lesson.analogia && <TextBlock tone="green"><span className="font-black">Por que isso ajuda? </span>{cleanForChild(lesson.analogia)}</TextBlock>}
            </>
          )}

          {current.id === "cotidiano" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Exemplo cotidiano" title="Onde isso aparece na vida real?" />
              <TextBlock tone="blue">{cleanForChild(lesson.exemplo2 || lesson.contextualizacao || lesson.exemplo1)}</TextBlock>
            </>
          )}

          {current.id === "guiada" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Prática guiada" title="Vamos fazer juntos" subtitle="Leia, pense e use a dica antes de responder." />
              <div className="space-y-4">
                {(guided.length ? guided : [{ prompt: cleanForChild(lesson.exemplo1), answer: "", hint: cleanForChild(lesson.erro_comum) }]).map((item, index) => (
                  <div key={index} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="font-black text-emerald-950">{index + 1}. {item.prompt}</p>
                    {item.hint && <p className="mt-2 text-sm font-semibold text-emerald-800">Dica: {item.hint}</p>}
                    {item.answer && <details className="mt-3"><summary className="cursor-pointer font-black text-emerald-700">Ver resposta explicada</summary><p className="mt-2 text-emerald-900">{item.answer}</p></details>}
                  </div>
                ))}
              </div>
            </>
          )}

          {current.id === "independente" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Prática independente" title="Agora é sua vez" />
              <div className="space-y-4">
                {(practice.length ? practice : guided).map((item, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-black text-slate-950">{index + 1}. {item.prompt}</p>
                    {item.hint && <p className="mt-2 text-sm text-slate-600">Pista: {item.hint}</p>}
                    {item.answer && <details className="mt-3"><summary className="cursor-pointer font-black text-slate-700">Conferir depois de tentar</summary><p className="mt-2 text-slate-800">{item.answer}</p></details>}
                  </div>
                ))}
              </div>
            </>
          )}

          {current.id === "curiosidade" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Curiosidade" title="Uma descoberta legal" />
              <TextBlock tone="amber">{cleanForChild(lesson.curiosidade || "Esse assunto aparece em muitas situações da escola e da vida. Quanto mais você observa, mais fácil fica aprender.")}</TextBlock>
              {lesson.erro_comum && <TextBlock tone="slate"><span className="font-black">Cuidado com este erro comum: </span>{cleanForChild(lesson.erro_comum)}</TextBlock>}
            </>
          )}

          {current.id === "desafio" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Desafio" title={challenge?.title || "Desafio da aula"} />
              <TextBlock tone="green">{challenge?.description || cleanForChild(lesson.desafio as unknown as string) || "Explique com suas palavras o que você aprendeu e crie um exemplo."}</TextBlock>
            </>
          )}

          {current.id === "resumo" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Resumo" title="O que aprendemos hoje" />
              <TextBlock>{cleanForChild(lesson.resumo)}</TextBlock>
              {keywords.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {keywords.slice(0, 10).map((item, index) => (
                    <li key={`${item.term}-summary-${index}`} className="flex gap-2 rounded-xl bg-slate-50 p-3 text-slate-800">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span><span className="font-black">{item.term}</span>{item.definition ? ` — ${item.definition}` : ""}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {current.id === "revisao" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Revisão" title="Antes do quiz" />
              <TextBlock tone="blue">{cleanForChild(lesson.revisao || lesson.resumo)}</TextBlock>
            </>
          )}

          {current.id === "quiz" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Quiz" title="Mostre o que aprendeu" subtitle="Escolha uma alternativa para cada pergunta." />
              {quiz.length === 0 ? (
                <TextBlock>Esta aula ainda não tem quiz cadastrado. Use a revisão e siga para o resultado.</TextBlock>
              ) : (
                <div className="space-y-6">
                  {quiz.map((question, questionIndex) => {
                    const picked = quizPicks[questionIndex];
                    return (
                      <div key={questionIndex} className="rounded-2xl border border-slate-200 p-4">
                        <p className="mb-3 font-black text-slate-950">{questionIndex + 1}. {cleanForChild(question.pergunta)}</p>
                        <div className="space-y-2">
                          {question.alternativas.map((alternative, alternativeIndex) => {
                            const selected = picked === alternativeIndex;
                            const isCorrect = question.correta === alternativeIndex;
                            return (
                              <button
                                key={alternativeIndex}
                                onClick={() => setQuizPicks((state) => ({ ...state, [questionIndex]: alternativeIndex }))}
                                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left font-bold transition ${
                                  selected
                                    ? isCorrect
                                      ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                                      : "border-red-400 bg-red-50 text-red-900"
                                    : "border-slate-200 bg-white text-slate-800 hover:border-emerald-300"
                                }`}
                              >
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-black text-slate-700">
                                  {String.fromCharCode(65 + alternativeIndex)}
                                </span>
                                <span className="flex-1">{cleanForChild(alternative)}</span>
                                {selected && (isCorrect ? <Check className="h-5 w-5 text-emerald-600" /> : <X className="h-5 w-5 text-red-500" />)}
                              </button>
                            );
                          })}
                        </div>
                        {picked !== undefined && question.explicacao && (
                          <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">{cleanForChild(question.explicacao)}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {current.id === "resultado" && (
            <>
              <StepHeader Icon={CurrentIcon} eyebrow="Resultado" title="Aula concluída!" subtitle="Você chegou ao final da sequência pedagógica." />
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-200">
                  <p className="text-xs font-black uppercase text-emerald-700">Acertos</p>
                  <p className="text-3xl font-black text-emerald-900">{correct}</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-4 text-center ring-1 ring-sky-200">
                  <p className="text-xs font-black uppercase text-sky-700">Respondidas</p>
                  <p className="text-3xl font-black text-sky-900">{answered}/{quiz.length}</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4 text-center ring-1 ring-amber-200">
                  <p className="text-xs font-black uppercase text-amber-700">Domínio</p>
                  <p className="text-3xl font-black text-amber-900">{score}%</p>
                </div>
              </div>
              <TextBlock tone="green"><span className="font-black">Próximo passo: </span>{cleanForChild(lesson.revisao || "Revise o resumo e tente explicar a aula para alguém da sua família.")}</TextBlock>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {currentRef && <NextLessonInlineButton current={currentRef} />}
                <button onClick={() => navigate({ to: "/escola-brilha" })} className="rounded-xl border border-slate-200 px-5 py-3 font-black text-slate-700 hover:bg-slate-50">
                  Voltar à trilha
                </button>
              </div>
            </>
          )}
        </Card>
      </main>

      <footer className="sticky bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button onClick={prev} disabled={step === 0} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-black text-slate-700 disabled:opacity-30 hover:bg-slate-100">
            <ChevronLeft className="h-4 w-4" /> Voltar
          </button>
          <button onClick={next} disabled={step === STEPS.length - 1} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 font-black text-white shadow disabled:opacity-30 hover:bg-emerald-700">
            Continuar <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LessonContentPlayer;