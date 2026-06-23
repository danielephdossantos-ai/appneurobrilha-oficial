import { Link } from "@tanstack/react-router";
import { GraduationCap, FileText, ArrowRight } from "lucide-react";
import { LembretesDiarios } from "./LembretesDiarios";

interface Props {
  childId: string | null;
}

export function CategoriasReforco({ childId }: Props) {
  return (
    <div className="space-y-3">
      <LembretesDiarios childId={childId} />

      <Link
        to="/missao-prova"
        className="flex items-center justify-between gap-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-2xl px-5 py-4 shadow-md hover:scale-[1.01] transition"
      >
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/20 grid place-items-center">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-rose-100">
              Tem prova chegando?
            </div>
            <div className="text-base font-black">Abrir Missão Prova Brilha</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5" />
      </Link>

      <Link
        to="/missao-trabalho"
        className="flex items-center justify-between gap-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-2xl px-5 py-4 shadow-md hover:scale-[1.01] transition"
      >
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/20 grid place-items-center">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-amber-100">
              Trabalho da escola?
            </div>
            <div className="text-base font-black">Abrir Missão Trabalho Brilha</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
