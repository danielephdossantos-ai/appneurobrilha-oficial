import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Lock, Sparkles, Coins } from "lucide-react";
import { toast } from "sonner";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import {
  DISCIPLINAS_OFICIAIS,
  mascoteDaDisciplina,
  todosMascotes,
} from "@/escola-brilha/mascotes-disciplina";
import {
  getAssignments,
  getUnlockedMascotes,
  marcarDesbloqueado,
  precoDoMascote,
  setAssignment,
  todosDesbloqueados,
} from "@/escola-brilha/mascote-assign";

export const Route = createFileRoute("/escola-brilha/professores")({
  head: () => ({
    meta: [
      { title: "Meus Professores — Escola Brilha" },
      {
        name: "description",
        content:
          "Escolha qual mascote é o professor de cada disciplina. Desbloqueie novos professores com BrilhoCoins.",
      },
    ],
  }),
  component: ProfessoresPage,
});

function ProfessoresPage() {
  const { activeChild, addCoins } = useAppState();
  const [tick, setTick] = useState(0); // força re-render após mudanças locais
  const childId = activeChild?.id ?? null;
  const coins = activeChild?.coins ?? 0;

  const unlocked = useMemo(
    () => new Set(getUnlockedMascotes(childId)),
    [childId, tick],
  );
  const assignments = useMemo(() => getAssignments(childId), [childId, tick]);
  const allUnlocked = useMemo(() => todosDesbloqueados(childId), [childId, tick]);
  const catalogo = useMemo(() => todosMascotes(), []);

  if (!activeChild) {
    return (
      <Shell>
        <div className="p-6 text-white">
          Selecione uma criança para gerenciar os professores.
        </div>
      </Shell>
    );
  }

  const handleUnlock = (slug: string) => {
    const preco = precoDoMascote(slug);
    if (coins < preco) {
      toast.error("BrilhoCoins insuficientes", {
        description: `Você tem ${coins}, precisa de ${preco}.`,
      });
      return;
    }
    addCoins(-preco);
    marcarDesbloqueado(activeChild.id, slug);
    toast.success("Novo professor desbloqueado! 🎉");
    setTick((t) => t + 1);
  };

  const handleAssign = (disciplinaSlug: string, mascoteSlug: string) => {
    if (!unlocked.has(mascoteSlug)) return;
    setAssignment(activeChild.id, disciplinaSlug, mascoteSlug);
    toast.success("Professor atualizado!");
    setTick((t) => t + 1);
  };

  return (
    <Shell>
      <div className="min-h-screen bg-[#0d1f55] text-white pb-24">
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/escola-brilha"
              className="flex items-center gap-2 h-11 px-3 rounded-2xl bg-white/10 active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" /> Voltar
            </Link>
            <div className="flex items-center gap-2 bg-yellow-400/90 text-[#0d1f55] font-black px-3 h-11 rounded-2xl">
              <Coins className="h-5 w-5" /> {coins}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-yellow-300" /> Meus Professores
          </h1>
          <p className="text-white/80 mt-1">
            Escolha o mascote de cada disciplina. Cada mascote só pode ensinar
            UMA disciplina por vez.
          </p>

          {allUnlocked ? (
            <div className="mt-4 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 p-3 text-emerald-100 text-sm font-bold">
              ✨ Você desbloqueou todos os professores! Agora é só escolher.
            </div>
          ) : (
            <div className="mt-4 rounded-2xl bg-white/10 p-3 text-white/85 text-sm">
              Ganhe BrilhoCoins nas missões e compre novos professores abaixo.
            </div>
          )}

          {/* Loja rápida — mascotes ainda bloqueados */}
          <section className="mt-6">
            <h2 className="text-lg font-black mb-2">Loja dos Professores</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {catalogo.map((m) => {
                const isUnlocked = unlocked.has(m.slug);
                const preco = m.preco ?? 0;
                return (
                  <div
                    key={m.slug}
                    className="rounded-2xl p-3 bg-white/10 border-2"
                    style={{ borderColor: isUnlocked ? m.corPrimaria : "rgba(255,255,255,0.12)" }}
                  >
                    <div className="flex items-center gap-2">
                      <img src={m.imagem} alt={m.nome} className="h-12 w-12 rounded-xl object-cover bg-white/80" />
                      <div className="min-w-0">
                        <div className="font-black truncate">{m.nome}</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/70 truncate">
                          {m.papel}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      {isUnlocked ? (
                        <div className="flex items-center gap-1 text-emerald-300 text-xs font-black">
                          <Check className="h-4 w-4" /> Desbloqueado
                        </div>
                      ) : (
                        <button
                          onClick={() => handleUnlock(m.slug)}
                          disabled={coins < preco}
                          className="w-full h-9 rounded-xl bg-yellow-400 text-[#0d1f55] font-black text-sm flex items-center justify-center gap-1 disabled:opacity-40"
                        >
                          <Coins className="h-4 w-4" /> {preco}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Escala por disciplina */}
          <section className="mt-8">
            <h2 className="text-lg font-black mb-2">Escale seus professores</h2>
            <div className="space-y-3">
              {DISCIPLINAS_OFICIAIS.map((d) => {
                const escolhidoSlug = assignments[d.slug] ?? d.slug;
                const escolhido = mascoteDaDisciplina(escolhidoSlug);
                // opções: qualquer mascote desbloqueado + o padrão da disciplina
                const opcoes = catalogo.filter(
                  (m) =>
                    unlocked.has(m.slug) &&
                    // se já está atribuído a OUTRA disciplina, esconder
                    (assignments[d.slug] === m.slug ||
                      !Object.entries(assignments).some(
                        ([disc, slug]) => slug === m.slug && disc !== d.slug,
                      )),
                );
                return (
                  <motion.div
                    key={d.slug}
                    layout
                    className="rounded-2xl bg-white/10 p-3 border-2"
                    style={{ borderColor: escolhido.corPrimaria + "80" }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={escolhido.imagem}
                        alt={escolhido.nome}
                        className="h-14 w-14 rounded-xl object-cover bg-white/90"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs uppercase tracking-widest text-white/70">
                          {d.nome}
                        </div>
                        <div className="font-black text-lg truncate">
                          {escolhido.emoji} {escolhido.nome}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                      {opcoes.map((m) => {
                        const ativo = escolhidoSlug === m.slug;
                        return (
                          <button
                            key={m.slug}
                            onClick={() => handleAssign(d.slug, m.slug)}
                            className="shrink-0 h-16 w-16 rounded-2xl grid place-items-center bg-white/10 border-2 active:scale-95"
                            style={{
                              borderColor: ativo ? m.corPrimaria : "transparent",
                            }}
                            title={`${m.nome} — ${m.papel}`}
                          >
                            <img
                              src={m.imagem}
                              alt={m.nome}
                              className="h-12 w-12 rounded-xl object-cover"
                            />
                          </button>
                        );
                      })}
                      {/* mascotes bloqueados só como preview */}
                      {catalogo
                        .filter((m) => !unlocked.has(m.slug))
                        .map((m) => (
                          <div
                            key={"lock-" + m.slug}
                            className="shrink-0 h-16 w-16 rounded-2xl grid place-items-center bg-white/5 border-2 border-dashed border-white/20 relative"
                            title={`${m.nome} — bloqueado (${m.preco} coins)`}
                          >
                            <img
                              src={m.imagem}
                              alt={m.nome}
                              className="h-12 w-12 rounded-xl object-cover opacity-40 grayscale"
                            />
                            <Lock className="absolute top-1 right-1 h-3.5 w-3.5 text-white/80" />
                          </div>
                        ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
