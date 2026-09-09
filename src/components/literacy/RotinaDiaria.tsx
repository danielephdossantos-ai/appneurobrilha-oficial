import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Flame, Timer, Trophy } from "lucide-react";
import { Card, Pill } from "@/components/Layout";
import type { ItemSalvo } from "@/modules/primeiros-anos/persist";

const META_MIN = 15;
const META_MAX = 20;

function hojeISO() {
  return new Date().toISOString().slice(0, 10);
}

function chaveStreak(childId: string) {
  return `nb:rotina-alfa:streak:${childId}`;
}

type StreakData = { dias: number; ultimo: string | null };

function lerStreak(childId: string): StreakData {
  try {
    const raw = localStorage.getItem(chaveStreak(childId));
    if (raw) return JSON.parse(raw) as StreakData;
  } catch {
    /* ignore */
  }
  return { dias: 0, ultimo: null };
}

function salvarStreak(childId: string, data: StreakData) {
  try {
    localStorage.setItem(chaveStreak(childId), JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

interface Props {
  childId: string;
  itensHoje: ItemSalvo[];
  onToggle: (item: ItemSalvo) => void;
}

/**
 * Rotina diária recomendada de 15–20 minutos:
 * seleciona as primeiras aulas do dia até fechar o tempo da meta,
 * mostra metas pequenas e marcação de conclusão.
 */
export function RotinaDiaria({ childId, itensHoje, onToggle }: Props) {
  const { rotina, bonus, minutosRotina } = useMemo(() => {
    const sel: ItemSalvo[] = [];
    let min = 0;
    for (const item of itensHoje) {
      if (sel.length > 0 && min >= META_MIN) break;
      sel.push(item);
      min += item.minutos ?? 5;
      if (min >= META_MAX) break;
    }
    return {
      rotina: sel,
      bonus: itensHoje.filter((i) => !sel.some((s) => s.id === i.id)),
      minutosRotina: min,
    };
  }, [itensHoje]);

  const feitas = rotina.filter((i) => i.concluido).length;
  const completo = rotina.length > 0 && feitas === rotina.length;
  const pct = rotina.length ? Math.round((feitas / rotina.length) * 100) : 0;

  const [streak, setStreak] = useState<StreakData>({ dias: 0, ultimo: null });

  useEffect(() => {
    setStreak(lerStreak(childId));
  }, [childId]);

  useEffect(() => {
    if (!completo) return;
    const hoje = hojeISO();
    const atual = lerStreak(childId);
    if (atual.ultimo === hoje) return;
    const ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const novo: StreakData = {
      dias: atual.ultimo === ontem ? atual.dias + 1 : 1,
      ultimo: hoje,
    };
    salvarStreak(childId, novo);
    setStreak(novo);
  }, [completo, childId]);

  if (itensHoje.length === 0) return null;

  return (
    <Card className="border-2 border-amber-400/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1">
            <Timer className="h-3.5 w-3.5" /> Rotina de hoje · {META_MIN}–{META_MAX} min
          </div>
          <h2 className="text-lg font-black leading-tight">
            {completo ? "Rotina completa! 🎉" : "Metas pequenas de hoje"}
          </h2>
          <p className="text-xs text-muted-foreground">
            {completo
              ? "Pouquinho por dia constrói leitura. Amanhã tem mais."
              : `Só ${minutosRotina} min hoje — leia junto com a criança.`}
          </p>
        </div>
        {streak.dias > 0 && (
          <Pill>
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-orange-500" /> {streak.dias}d
            </span>
          </Pill>
        )}
      </div>

      <div className="h-2.5 rounded-full bg-background overflow-hidden">
        <motion.div
          className="h-full bg-amber-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
        />
      </div>

      <ul className="space-y-2">
        {rotina.map((item, idx) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 rounded-2xl bg-background border-2 border-border p-2.5 ${
              item.concluido ? "opacity-60" : ""
            }`}
          >
            <button
              onClick={() => onToggle(item)}
              aria-label={item.concluido ? "Desmarcar meta" : "Marcar meta como feita"}
              className="btn-tap shrink-0"
            >
              {item.concluido ? (
                <CheckCircle2 className="h-6 w-6 text-amber-500" />
              ) : (
                <Circle className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
            <Link to={item.rota} className="flex-1 min-w-0">
              <div className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Meta {idx + 1} · {item.trilha_label}
              </div>
              <div className="font-bold break-words leading-tight">{item.titulo}</div>
            </Link>
            <Pill>{item.minutos} min</Pill>
          </li>
        ))}
      </ul>

      {completo && (
        <div className="flex items-center gap-2 text-sm font-bold text-amber-700 dark:text-amber-400">
          <Trophy className="h-4 w-4" /> Meta do dia batida — o resto é bônus.
        </div>
      )}

      {bonus.length > 0 && (
        <p className="text-xs text-muted-foreground">
          + {bonus.length} aula{bonus.length > 1 ? "s" : ""} de bônus mais abaixo, só se a criança
          quiser continuar.
        </p>
      )}
    </Card>
  );
}
