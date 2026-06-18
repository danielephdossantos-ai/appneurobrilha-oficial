import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  useNextLesson,
  useEnsureDbLessonMeta,
  type LessonRef,
} from "../hooks/useNextLesson";

/**
 * Botão flutuante "Próxima atividade" — garante o loop infinito da
 * biblioteca Escola Brilha (criança termina uma, vai pra próxima da
 * mesma matéria/série; se acabou a matéria, vai pra outra da série).
 */
export const NextLessonCTA: React.FC<{ current: LessonRef }> = ({ current }) => {
  // Se for aula do banco, precisamos garantir que carregamos os metadados
  // (série/disciplina) antes de calcular a próxima.
  const ready = useEnsureDbLessonMeta(current.kind === "db" ? current.id : null);
  const next = useNextLesson(current);

  if (current.kind === "db" && !ready) return null;
  if (!next) return null;

  const linkProps: any = { to: next.to };
  if (next.search) linkProps.search = next.search;
  if (next.params) linkProps.params = next.params;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[90vw]">
      <Link
        {...linkProps}
        className="group flex items-center gap-3 bg-white text-slate-900 rounded-2xl shadow-2xl border border-white/20 pl-4 pr-3 py-3 hover:scale-[1.02] active:scale-[0.98] transition"
      >
        <div className="flex flex-col text-left min-w-0">
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-amber-600">
            <Sparkles className="w-3 h-3" />
            Próxima atividade
          </span>
          <span className="text-sm font-black truncate max-w-[55vw] sm:max-w-[260px]">
            {next.title}
          </span>
          <span className="text-[10px] text-slate-500 font-semibold truncate">
            {next.subject} • {next.serie}
          </span>
        </div>
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-2 text-white">
          <ArrowRight className="w-5 h-5" />
        </div>
      </Link>
    </div>
  );
};
