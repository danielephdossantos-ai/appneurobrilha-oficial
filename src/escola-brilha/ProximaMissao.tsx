import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useNavigationStore } from "@/lib/navigation-context";
import { Clock, Target, Sparkles, Rocket, ArrowRight, Trophy, Heart, Play } from "lucide-react";
import { proximaMissao, type MissaoMeta, type Dificuldade } from "./proxima-missao";
import { temaDaDisciplina } from "./missoes-tema";
import { useFavoritos, removerFavorito } from "@/lib/favoritos-neurotreino";

const CORES_DIF: Record<Dificuldade, { bg: string; fg: string }> = {
  Fácil: { bg: "bg-[#22C55E]/20", fg: "text-[#137a3a]" },
  Médio: { bg: "bg-[#FFC93C]/25", fg: "text-[#8a6a00]" },
  Difícil: { bg: "bg-[#FF8A4C]/20", fg: "text-[#a44a12]" },
};

/** Rotina Livre: missões favoritadas pela mãe no Neuro-Treino. */
function RotinaFavoritos() {
  const favoritos = useFavoritos();
  const navigate = useNavigate();
  const [sel, setSel] = useState(0);

  if (favoritos.length === 0) {
    return (
      <div className="rounded-3xl bg-white/80 border-2 border-dashed border-[#0d1f55]/20 p-4 mb-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/55 mb-1">
          <Heart className="h-3.5 w-3.5 text-rose-400" /> Rotina livre
        </div>
        <p className="text-sm font-bold text-[#0d1f55]/75 leading-snug">
          Nenhuma missão favorita salva. Clique no ❤️ em Neurotreino para montar a rotina!
        </p>
        <Link
          to="/neuro-treino"
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0d1f55] text-white font-black text-sm active:scale-[0.98]"
        >
          Abrir Neuro-Treino <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const atual = favoritos[Math.min(sel, favoritos.length - 1)];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#be123c] via-[#e11d48] to-[#f97316] text-white p-5 mb-4 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Heart className="h-4 w-4 text-white" fill="currentColor" />
        <div className="text-[10px] font-black uppercase tracking-widest text-white/85">
          Rotina livre · favoritas ({favoritos.length})
        </div>
      </div>

      {/* Carrossel horizontal das favoritas */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
        {favoritos.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setSel(i)}
            className={`snap-start shrink-0 w-24 rounded-2xl p-2 text-left border transition ${
              f.id === atual.id
                ? "bg-white text-[#8a1030] border-white"
                : "bg-white/10 border-white/25 text-white"
            }`}
          >
            <div className="h-10 grid place-items-center text-xl">
              {f.icone ? (
                <img src={f.icone} alt="" className="h-10 w-10 object-contain" />
              ) : (
                <span>{f.emoji ?? "⭐"}</span>
              )}
            </div>
            <div className="text-[10px] font-black leading-tight line-clamp-2 mt-1">{f.titulo}</div>
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white/15 border border-white/25 p-3 mt-1 mb-3">
        {atual.grupo && (
          <div className="text-[10px] font-black uppercase tracking-widest text-white/70">
            {atual.grupo}
          </div>
        )}
        <div className="text-lg font-black leading-tight">{atual.titulo}</div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            useNavigationStore.getState().setContext({
              originRoute: "/",
              originModule: "home",
              timestamp: Date.now(),
            });
            navigate({ to: "/trilha-unificada" } as never);
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-white text-[#8a1030] font-black active:scale-[0.98]"
        >
          Começar missão <ArrowRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Remover dos favoritos"
          onClick={() => removerFavorito(atual.id)}
          className="h-12 w-12 grid place-items-center rounded-2xl bg-white/15 border border-white/25 active:scale-95"
        >
          <Heart className="h-5 w-5 text-white" fill="currentColor" />
        </button>
      </div>
    </div>
  );
}

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
  const navigate = useNavigate();

  useEffect(() => {
    let vivo = true;
    proximaMissao(childId, serieCrianca).then((m) => {
      if (vivo) setMeta(m);
    });
    return () => {
      vivo = false;
    };
  }, [childId, serieCrianca]);

  const handleStartMission = () => {
    useNavigationStore.getState().setContext({
      originRoute: "/",
      originModule: "home",
      timestamp: Date.now(),
    });
    navigate({ to: "/trilha-unificada" });
  };

  if (meta === undefined) {
    return (
      <>
        <RotinaFavoritos />
        <div className="rounded-3xl bg-white/70 border-2 border-white h-40 mb-4 animate-pulse" />
      </>
    );
  }

  if (meta === null) {
    return (
      <>
      <RotinaFavoritos />
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
      </>
    );
  }

  const { aula, tempoEstimadoMin, dificuldade, objetivo } = meta;
  const dif = CORES_DIF[dificuldade];
  const tema = temaDaDisciplina(aula.disciplina);

  return (
    <>
    <RotinaFavoritos />
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

        <button
          onClick={handleStartMission}
          className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black active:scale-[0.98]"
        >
          Minha Jornada <Play className="h-5 w-5 fill-current" />
        </button>
      </div>
    </div>
    </>
  );
}
