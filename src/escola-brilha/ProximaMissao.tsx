import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Target, Sparkles, Rocket, ArrowRight, Trophy } from "lucide-react";
import { proximaMissao, type MissaoMeta, type Dificuldade } from "./proxima-missao";
import { temaDaDisciplina } from "./missoes-tema";

const CORES_DIF: Record<Dificuldade, { bg: string; fg: string }> = {
  Fácil: { bg: "bg-[#22C55E]/20", fg: "text-[#137a3a]" },
  Médio: { bg: "bg-[#FFC93C]/25", fg: "text-[#8a6a00]" },
  Difícil: { bg: "bg-[#FF8A4C]/20", fg: "text-[#a44a12]" },
};

export function ProximaMissao({
  childId,
  serieCrianca,
  nomeCrianca,
}: {
  childId?: string;
  serieCrianca?: string;
  nomeCrianca?: string;
}) {
  const [meta, setMeta] = useState<MissaoMeta | null | undefined>(undefined);

  useEffect(() => {
    let vivo = true;
    proximaMissao(childId, serieCrianca).then((m) => {
      if (vivo) setMeta(m);
    });
    return () => {
      vivo = false;
    };
  }, [childId, serieCrianca]);

  if (meta === undefined) {
    return (
      <div className="rounded-3xl bg-white/70 border-2 border-white h-40 mb-4 animate-pulse" />
    );
  }

  if (meta === null) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-[#22C55E] to-[#0d1f55] text-white p-5 mb-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-5 w-5 text-[#FFC93C]" />
          <div className="text-[10px] font-black uppercase tracking-widest text-white/80">
            Jornada em dia
          </div>
        </div>
        <h2 className="text-xl font-black leading-tight">
          Você concluiu todas as missões disponíveis! 🎉
        </h2>
        <p className="text-sm text-white/85 mt-1">
          Novas aventuras chegam em breve. Enquanto isso, volte para revisar e fortalecer as
          missões conquistadas.
        </p>
      </div>
    );
  }

  const { aula, tempoEstimadoMin, dificuldade, objetivo } = meta;
  const dif = CORES_DIF[dificuldade];
  const tema = temaDaDisciplina(aula.disciplina);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0d1f55] via-[#1a2f7a] to-[#4C9EFF] text-white p-5 mb-4 shadow-lg relative overflow-hidden">
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#FFC93C]/20 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-1">
          <Rocket className="h-4 w-4 text-[#FFC93C]" />
          <div className="text-[10px] font-black uppercase tracking-widest text-white/80">
            Próxima missão {nomeCrianca ? `de ${nomeCrianca}` : "recomendada"}
          </div>
        </div>

        <div className="text-[11px] font-black uppercase tracking-widest text-[#FFC93C]/90 mb-1">
          {tema.emoji} {tema.nome}
        </div>
        <h2 className="text-xl font-black leading-tight mb-2">{aula.titulo}</h2>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-widest">
            {aula.ano}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-widest">
            <Clock className="h-3 w-3" /> ~{tempoEstimadoMin} min
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${dif.bg} ${dif.fg}`}
          >
            <Sparkles className="h-3 w-3" /> {dificuldade}
          </span>
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/20 p-3 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">
            <Target className="h-3 w-3" /> Objetivo desta missão
          </div>
          <p className="text-sm font-bold leading-snug">{objetivo}</p>
        </div>

        <Link
          to="/escola-brilha/$codigo"
          params={{ codigo: aula.codigo }}
          className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black active:scale-[0.98]"
        >
          Começar missão <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
