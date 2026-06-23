import { useState } from "react";
import { GraduationCap, FileText } from "lucide-react";
import { CalendarioProvas } from "./CalendarioProvas";
import { TrabalhoBrilha } from "./TrabalhoBrilha";

interface Props {
  childId: string | null;
}

type Aba = "provas" | "trabalhos";

export function CategoriasReforco({ childId }: Props) {
  const [aba, setAba] = useState<Aba>("provas");

  return (
    <div className="space-y-3">
      {/* Tabs */}
      <div className="flex gap-2 bg-white border-2 border-gray-200 rounded-xl p-1">
        <button
          onClick={() => setAba("provas")}
          className={[
            "flex-1 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wider py-2.5 rounded-lg transition",
            aba === "provas"
              ? "bg-rose-100 text-rose-800 shadow-sm"
              : "text-gray-500 hover:bg-gray-50",
          ].join(" ")}
        >
          <GraduationCap className="h-4 w-4" />
          Missão Prova
        </button>
        <button
          onClick={() => setAba("trabalhos")}
          className={[
            "flex-1 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wider py-2.5 rounded-lg transition",
            aba === "trabalhos"
              ? "bg-amber-100 text-amber-800 shadow-sm"
              : "text-gray-500 hover:bg-gray-50",
          ].join(" ")}
        >
          <FileText className="h-4 w-4" />
          Trabalho
        </button>
      </div>

      {/* Conteúdo */}
      {aba === "provas" && (
        <div className="space-y-3">
          <CalendarioProvas
            childId={childId}
            filtroTipo="prova"
            titulo="Calendário de Provas"
          />
        </div>
      )}

      {aba === "trabalhos" && (
        <div className="space-y-3">
          <CalendarioProvas
            childId={childId}
            filtroTipo="trabalho"
            titulo="Calendário de Trabalhos"
          />
          <TrabalhoBrilha childId={childId} />
        </div>
      )}
    </div>
  );
}
