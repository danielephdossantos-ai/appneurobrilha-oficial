import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { motion } from "framer-motion";
import {
  trilhasParaSerie,
  WEEKDAY_LABELS,
  WEEKDAY_LABELS_LONG,
  DEFAULT_WEEKDAYS,
  DEFAULT_TIME,
  AULAS_APOIO_TOPIC,
  AULAS_APOIO_CATEGORY,
} from "@/lib/aulas-apoio";
import { Bell, BellRing, Clock, Pencil, Save } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/aulas-apoio")({
  head: () => ({
    meta: [
      { title: "Aulas de Apoio — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Trilha diária de estudo da criança conectada à agenda da família com lembrete no celular.",
      },
      { property: "og:title", content: "Aulas de Apoio — Neuro Brilha Kids" },
      { property: "og:description", content: "Rotina de estudo + notificação em todos os celulares." },
    ],
  }),
  component: AulasApoio,
});

type Rotina = {
  id?: string;
  weekdays: number[];
  time: string;
};

function AulasApoio() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();
  const push = usePushNotifications(activeChild?.id ?? null);
  const [rotina, setRotina] = useState<Rotina>({ weekdays: DEFAULT_WEEKDAYS, time: DEFAULT_TIME });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const { faixa, trilhas } = trilhasParaSerie(activeChild?.serie);

  // Carregar rotina salva
  useEffect(() => {
    if (!activeChild?.id) return;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("study_agenda")
        .select("id, time_of_day, weekdays")
        .eq("child_id", activeChild.id)
        .eq("category", AULAS_APOIO_CATEGORY)
        .maybeSingle();
      if (data) {
        const wd = Array.isArray((data as any).weekdays)
          ? ((data as any).weekdays as number[])
          : DEFAULT_WEEKDAYS;
        setRotina({ id: data.id, weekdays: wd, time: data.time_of_day ?? DEFAULT_TIME });
      }
      setLoading(false);
    })();
  }, [activeChild?.id]);

  async function salvarRotina(next: Rotina) {
    if (!activeChild?.id) return;
    const payload: any = {
      child_id: activeChild.id,
      category: AULAS_APOIO_CATEGORY,
      topic: AULAS_APOIO_TOPIC,
      time_of_day: next.time,
      weekdays: next.weekdays,
      exam_date: new Date().toISOString().slice(0, 10),
      completed: false,
    };
    let res;
    if (next.id) {
      res = await supabase
        .from("study_agenda")
        .update(payload)
        .eq("id", next.id)
        .select("id")
        .maybeSingle();
    } else {
      res = await supabase.from("study_agenda").insert(payload).select("id").maybeSingle();
    }
    if (res.error) {
      toast.error("Não consegui salvar a rotina.");
      return;
    }
    setRotina({ ...next, id: res.data?.id ?? next.id });
    setEditing(false);
    toast.success("Rotina salva! Vamos avisar todos os celulares.");
  }

  function toggleDia(d: number) {
    setRotina((r) => {
      const has = r.weekdays.includes(d);
      const wd = has ? r.weekdays.filter((x) => x !== d) : [...r.weekdays, d].sort();
      return { ...r, weekdays: wd };
    });
  }

  const proximaFrase = descreverProximo(rotina);

  if (!activeChild) {
    return (
      <Shell>
        <PageHeader emoji="🌟" title="Aulas de Apoio" subtitle="Escolha uma criança primeiro" />
        <Link
          to="/"
          className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold inline-block"
        >
          Voltar para a home
        </Link>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHeader
        emoji="🌟"
        title="Aulas de Apoio"
        subtitle={`Trilha diária de ${activeChild.nome} · ${faixa}`}
      />

      {/* Cartão da rotina */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1f55] to-[#1a3a8c] text-white p-5 shadow-xl mb-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-white/70 text-xs font-black uppercase tracking-wider">
              Próxima aula
            </div>
            <div className="text-2xl font-black leading-tight mt-1 flex items-center gap-2">
              <Clock className="h-5 w-5" /> {rotina.time}
            </div>
            <div className="text-white/80 text-sm mt-1">{proximaFrase}</div>
          </div>
          <button
            onClick={() => setEditing((e) => !e)}
            className="btn-tap rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 px-3 py-2 text-sm font-black flex items-center gap-1"
          >
            <Pencil className="h-4 w-4" /> {editing ? "Fechar" : "Editar"}
          </button>
        </div>

        {editing && (
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-white/70 mb-2">
                Dias
              </div>
              <div className="flex gap-2 flex-wrap">
                {WEEKDAY_LABELS.map((l, i) => {
                  const on = rotina.weekdays.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleDia(i)}
                      className={`h-10 w-10 rounded-full font-black text-sm transition-all ${
                        on
                          ? "bg-[#FFC93C] text-[#0d1f55] shadow-md scale-105"
                          : "bg-white/10 text-white/70 border border-white/25"
                      }`}
                      title={WEEKDAY_LABELS_LONG[i]}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-white/70 mb-2">
                Horário
              </div>
              <input
                type="time"
                value={rotina.time}
                onChange={(e) => setRotina((r) => ({ ...r, time: e.target.value }))}
                className="rounded-xl bg-white text-[#0d1f55] font-black px-3 py-2 text-lg"
              />
            </div>
            <button
              onClick={() => salvarRotina(rotina)}
              disabled={loading}
              className="btn-tap w-full rounded-xl bg-[#FFC93C] text-[#0d1f55] font-black px-4 py-3 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" /> Salvar rotina
            </button>
          </div>
        )}

        {/* Notificações */}
        <div className="mt-4 rounded-2xl bg-white/10 border border-white/20 p-3 flex items-center gap-3">
          {push.permission === "granted" ? (
            <>
              <BellRing className="h-5 w-5 text-[#FFC93C]" />
              <div className="text-sm">
                <div className="font-black">Lembretes ligados neste celular</div>
                <div className="text-white/70 text-xs">
                  Também avisa em todos os celulares do responsável e da criança que ligarem os
                  lembretes.
                </div>
              </div>
            </>
          ) : push.permission === "unsupported" ? (
            <div className="text-sm text-white/70">
              Este celular não permite notificações. Use no Chrome ou Safari.
            </div>
          ) : (
            <>
              <Bell className="h-5 w-5" />
              <div className="flex-1 text-sm">
                <div className="font-black">Ativar lembretes neste celular</div>
                <div className="text-white/70 text-xs">
                  Para o app avisar sobre a próxima aula de {activeChild.nome}.
                </div>
              </div>
              <button
                onClick={() => push.request()}
                className="btn-tap rounded-lg bg-[#FFC93C] text-[#0d1f55] font-black px-3 py-1.5 text-sm"
              >
                Ativar
              </button>
            </>
          )}
        </div>
      </div>

      {/* Trilha estilo Duolingo */}
      <div className="mb-3 text-xs font-black uppercase tracking-wider text-muted-foreground">
        Trilha da {activeChild.nome}
      </div>
      <div className="relative py-4">
        {trilhas.map((t, idx) => {
          const offset = idx % 2 === 0 ? "ml-2" : "ml-auto mr-2";
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`relative w-[85%] max-w-md ${offset} mb-4`}
            >
              <button
                onClick={() => navigate({ to: t.rota })}
                className={`w-full text-left rounded-3xl bg-gradient-to-br ${t.cor} text-white shadow-lg p-4 active:scale-[0.98] transition-all`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-2xl bg-white/25 border-2 border-white/50 grid place-items-center text-3xl shadow-inner">
                    {t.emoji}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-wider text-white/80">
                      {t.disciplina}
                    </div>
                    <div className="text-lg font-black leading-tight truncate">{t.titulo}</div>
                    <div className="text-xs text-white/80 line-clamp-2">{t.descricao}</div>
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </Shell>
  );
}

function descreverProximo(r: Rotina): string {
  if (!r.weekdays.length) return "Nenhum dia selecionado — edite para começar.";
  const dias = r.weekdays.map((d) => WEEKDAY_LABELS_LONG[d].slice(0, 3)).join(", ");
  return `${dias} · ${r.time}`;
}
