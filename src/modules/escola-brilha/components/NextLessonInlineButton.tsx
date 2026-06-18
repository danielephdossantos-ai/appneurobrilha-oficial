import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  useNextLesson,
  useEnsureDbLessonMeta,
  type LessonRef,
} from "../hooks/useNextLesson";

/**
 * Botão inline "Próxima atividade" para usar dentro da tela de conclusão,
 * lado a lado com "Voltar para o início".
 */
export const NextLessonInlineButton: React.FC<{
  current: LessonRef;
  className?: string;
}> = ({ current, className = "" }) => {
  const ready = useEnsureDbLessonMeta(current.kind === "db" ? current.id : null);
  const next = useNextLesson(current);

  if (current.kind === "db" && !ready) return null;
  if (!next) return null;

  const linkProps: any = { to: next.to };
  if (next.search) linkProps.search = next.search;
  if (next.params) linkProps.params = next.params;

  return (
    <Link
      {...linkProps}
      className={`w-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-black py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition ${className}`}
    >
      <Sparkles className="w-5 h-5" />
      <span className="truncate">Próxima atividade</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
};
