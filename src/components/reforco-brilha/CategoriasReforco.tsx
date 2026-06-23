import { Link } from "@tanstack/react-router";
import { GraduationCap, ArrowRight } from "lucide-react";
import { TrabalhoBrilha } from "./TrabalhoBrilha";
import { LembretesDiarios } from "./LembretesDiarios";

interface Props {
  childId: string | null;
}

export function CategoriasReforco({ childId }: Props) {
  return (
    <div className="space-y-3">
      {/* Lembretes do dia (in-app + push) */}
      <LembretesDiarios childId={childId} />

      {/* Atalho para Missão Prova (categoria própria do app) */}
      <Link
        to="/missao-prova"
        className="flex items-center justify-between gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl px-5 py-4 shadow-md hover:scale-[1.01] transition"
      >
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/20 grid place-items-center">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-indigo-100">
              Tem prova chegando?
            </div>
            <div className="text-base font-black">Abrir Missão Prova Brilha</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5" />
      </Link>

      {/* Reforço Brilha agora foca em Trabalhos */}
      <TrabalhoBrilha childId={childId} />
    </div>
  );
}
