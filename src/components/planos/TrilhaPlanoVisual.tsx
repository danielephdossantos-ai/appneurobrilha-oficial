import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, ChevronRight, Play } from "lucide-react";
import { DIAS_LABEL, diaSemanaHoje } from "@/modules/primeiros-anos/builder";
import { toast } from "sonner";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useMundoFundo, MundoBar } from "@/components/worlds/MundoTrilha";
import { useNavigationStore } from "@/lib/navigation-context";

interface TrilhaItem {
  id: string;
  dia_semana: number;
  ordem?: number;
  titulo: string;
  rota: string;
  concluido: boolean;
  trilha_label: string;
  emoji?: string;
  minutos: number;
  slug?: string;
}

interface Props {
  itens: TrilhaItem[];
  onToggle?: (item: any) => void;
  tipo: "alfa" | "neuro";
}

function slugFromRoute(route: string): string {
  const clean = route.split("?")[0].replace(/\/$/, "");
  return clean.split("/").filter(Boolean).pop() ?? route;
}

export function TrilhaPlanoVisual({ itens, tipo }: Props) {
  const hoje = diaSemanaHoje();
  const navigate = useNavigate();
  const fundoMundo = useMundoFundo("");
  const location = useLocation();
  const setNavContext = useNavigationStore((s) => s.setContext);

  const diasDisponiveis = Array.from(new Set(itens.map((i) => i.dia_semana))).sort((a, b) => a - b);

  const handleItemClick = (item: TrilhaItem) => {
    if (item.dia_semana > hoje) {
      toast.info(`Esta aula abrirá na ${DIAS_LABEL[item.dia_semana]}! 🔒`);
      return;
    }

    const itensDoDia = itens
      .filter((i) => i.dia_semana === item.dia_semana && !i.concluido)
      .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));

    if (tipo === "neuro") {
      const start = Math.max(0, itensDoDia.findIndex((i) => i.id === item.id));
      const sessao = itensDoDia.slice(start);
      setNavContext({
        originRoute: location.pathname,
        originModule: "neuro-treino",
        originCategory: "meu-plano",
        returnPath: location.pathname,
        isPlanFlow: true,
        planType: "support",
        timestamp: Date.now(),
        lessonId: item.id,
        day: item.dia_semana,
        position: start,
        sessionActivities: sessao.map((i) => i.slug ?? slugFromRoute(i.rota)),
        sessionPlanItemIds: sessao.map((i) => i.id),
        sessionIndex: 0,
      });
    } else {
      setNavContext({
        originRoute: location.pathname,
        originModule: "alfabetizacao",
        returnPath: location.pathname,
        isPlanFlow: true,
        planType: "literacy",
        timestamp: Date.now(),
        lessonId: item.id,
        day: item.dia_semana,
        position: item.ordem ?? 0,
      });
    }

    navigate({ to: item.rota });
  };

  return (
    <div
      className={`relative py-10 flex flex-col items-center min-h-[600px] transition-all duration-700 ${fundoMundo.className}`}
      style={fundoMundo.style}
    >
      <MundoBar className="mb-4" />

      {(() => {
        const itensHoje = itens
          .filter((i) => i.dia_semana === hoje && !i.concluido)
          .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));
        if (itensHoje.length > 0) {
          const prox = itensHoje[0];
          return (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => handleItemClick(prox)}
              className="mb-10 btn-tap relative overflow-hidden rounded-[32px] bg-sun text-sun-foreground px-8 py-5 shadow-2xl flex items-center gap-4 border-4 border-white ring-8 ring-sun/20 z-20"
            >
              <div className="bg-white/20 p-2 rounded-2xl"><Play className="w-8 h-8 fill-current" /></div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Sua próxima missão</div>
                <div className="text-xl font-black">{prox.titulo}</div>
                {itensHoje.length > 1 && <div className="text-xs font-bold opacity-70">+ {itensHoje.length - 1} atividade(s) depois</div>}
              </div>
              <ChevronRight className="w-6 h-6 ml-2" />
            </motion.button>
          );
        }

        const doHoje = itens.filter((i) => i.dia_semana === hoje);
        const tudoConcluido = doHoje.length > 0 && doHoje.every((i) => i.concluido);
        if (tudoConcluido) {
          return (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-10 rounded-[32px] bg-emerald-500 text-white px-8 py-5 shadow-xl flex items-center gap-4 border-4 border-white z-20"
            >
              <div className="bg-white/20 p-2 rounded-2xl"><CheckCircle2 className="w-8 h-8" /></div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Parabéns!</div>
                <div className="text-xl font-black">Você concluiu tudo hoje! 🎉</div>
              </div>
            </motion.div>
          );
        }
        return null;
      })()}

      <div className="absolute top-20 bottom-0 w-2 bg-slate-200/30 dark:bg-slate-800/30 rounded-full left-1/2 -translate-x-1/2 z-0" />

      <div className="relative z-10 w-full max-w-sm space-y-16">
        {diasDisponiveis.map((dia, idx) => {
          const itensDoDia = itens
            .filter((i) => i.dia_semana === dia)
            .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));
          const pendentes = itensDoDia.filter((i) => !i.concluido);
          const proximo = pendentes[0] ?? itensDoDia[0];
          const trancado = dia > hoje;
          const ehHoje = dia === hoje;
          const concluido = itensDoDia.length > 0 && itensDoDia.every((i) => i.concluido);
          const isLeft = idx % 2 === 0;

          return (
            <div key={dia} className={`flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
              <div className="flex-1" />
              <div className="relative">
                <motion.button
                  whileHover={!trancado ? { scale: 1.1 } : {}}
                  whileTap={!trancado ? { scale: 0.95 } : {}}
                  onClick={() => proximo && handleItemClick(proximo)}
                  className={`relative w-24 h-24 rounded-full border-4 flex items-center justify-center shadow-lg transition-all ${
                    trancado
                      ? "bg-slate-300 border-slate-400 text-slate-500 grayscale cursor-not-allowed"
                      : ehHoje
                        ? "bg-sun border-white text-sun-foreground ring-8 ring-sun/20"
                        : concluido
                          ? "bg-emerald-500 border-emerald-600 text-white"
                          : "bg-primary border-white text-primary-foreground"
                  }`}
                >
                  {trancado ? <Lock className="w-10 h-10" /> : concluido ? <CheckCircle2 className="w-12 h-12" /> : <Star className={`w-12 h-12 ${ehHoje ? "animate-pulse" : ""}`} />}
                  {!trancado && pendentes.length > 1 && (
                    <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-black rounded-full w-7 h-7 flex items-center justify-center border-2 border-white">{pendentes.length}</div>
                  )}
                </motion.button>
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className={`text-sm font-black uppercase tracking-widest ${ehHoje ? "text-sun-foreground bg-sun px-3 py-1 rounded-full" : "text-muted-foreground"}`}>
                    {DIAS_LABEL[dia]}{ehHoje && " · Hoje"}
                  </span>
                </div>
              </div>
              <div className={`flex-1 px-4 ${isLeft ? "text-left" : "text-right"}`}>
                <div className={`max-w-[150px] ${isLeft ? "" : "ml-auto"}`}>
                  <h3 className={`text-sm font-black leading-tight ${trancado ? "text-slate-400" : "text-slate-900 dark:text-white"}`}>{proximo?.titulo}</h3>
                  <div className="text-[10px] font-bold text-muted-foreground mt-1 uppercase">{proximo?.trilha_label}</div>
                  {!concluido && pendentes.length > 1 && <div className="text-[10px] font-bold text-primary mt-1">{pendentes.length} missões restantes</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
