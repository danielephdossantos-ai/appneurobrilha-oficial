import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Sparkles, Lock, Check } from "lucide-react";
import { useAppState } from "@/core/store";
import { PipEvolution } from "@/components/pip/PipEvolution";
import { equipChildSkin, listChildUnlocks, purchaseMascotItem } from "@/lib/child-mascot";
import { useMascot } from "@/contexts/MascotContext";
import { FANTASIAS, precoFantasia, type Fantasia, type Mascote, type Tamanho } from "@/lib/guarda-roupa";

const GRATIS = new Set(["original", "pipa-original", "baby", "pipa-baby"]);
const GRUPOS: { mascote: Mascote; titulo: string }[] = [
  { mascote: "pip", titulo: "Menino · Pip" },
  { mascote: "pipa", titulo: "Menina · Pipa" },
];
const TAMANHOS: { id: Tamanho; label: string }[] = [
  { id: "baby", label: "Baby" },
  { id: "grande", label: "Grande" },
  { id: "teen", label: "Teen" },
];

export function ColecaoMascotes({ semCabecalho = false }: { semCabecalho?: boolean }) {
  const { activeChild } = useAppState();
  const { childMascotProfile, refreshMascot } = useMascot();
  const queryClient = useQueryClient();
  const [cloudUnlocks, setCloudUnlocks] = useState<string[]>([]);
  const unlocked = useMemo(() => new Set([...GRATIS, ...cloudUnlocks]), [cloudUnlocks]);
  const custo = (k: string) => (GRATIS.has(k) ? 0 : precoFantasia(k, ""));

  const loadUnlocks = async () => {
    if (!activeChild?.id) return;
    setCloudUnlocks(await listChildUnlocks(activeChild.id, "skin"));
  };
  useEffect(() => { loadUnlocks().catch(console.error); }, [activeChild?.id]);

  const handleSkin = async (item: Fantasia) => {
    if (!activeChild) return;
    if (!unlocked.has(item.key)) {
      try {
        const r: any = await purchaseMascotItem(activeChild.id, "skin", item.key, custo(item.key));
        if (!r?.ok) { toast.error("BrilhoCoins insuficientes"); return; }
        await queryClient.invalidateQueries({ queryKey: ["children"] });
        await loadUnlocks();
        toast.success("Nova fantasia desbloqueada! ✨");
      } catch (e) { console.error(e); toast.error("Não foi possível desbloquear agora."); return; }
    }
    await equipChildSkin(activeChild.id, item.key);
    await refreshMascot();
    toast.success("Visual equipado!");
  };

  return (
    <div className="container mx-auto py-10 px-4">
        {!semCabecalho && <><header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sun/20 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4">
            <Sparkles size={14} className="text-sun" /> Coleção NeuroBrilha Kids
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-3">Nossos Amiguinhos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desbloqueie fantasias e leve o visual escolhido para toda a jornada.
          </p>
        </header>

        <div className="mb-16"><PipEvolution /></div></>}

        {GRUPOS.map((g) => (
          <section key={g.mascote} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center">{g.titulo}</h2>
            {TAMANHOS.map((t) => {
              const itens = FANTASIAS.filter((x) => x.mascote === g.mascote && x.tamanho === t.id);
              if (!itens.length) return null;
              return (
                <div key={t.id} className="mb-10">
                  <h3 className="text-xl font-black text-primary/70 uppercase tracking-widest mb-4">{t.label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {itens.map((skin, i) => {
                      const emUso = childMascotProfile?.equipped_skin === skin.key;
                      return (
                        <motion.div key={skin.key} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.04 }} className="relative group">
                          <div className="bg-card rounded-[2.5rem] p-6 shadow-xl border-4 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center text-center">
                            <div className="relative w-40 h-40 mb-4 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent rounded-full">
                              <img src={skin.image} alt={skin.nome} loading="lazy"
                                className="w-full h-full object-contain drop-shadow-2xl transition-transform group-hover:scale-110" />
                              {emUso ? (
                                <div className="absolute -top-2 -right-2 bg-emerald-500 text-primary-foreground p-2 rounded-full shadow-lg"><Check size={16} strokeWidth={4} /></div>
                              ) : !unlocked.has(skin.key) ? (
                                <div className="absolute -top-2 -right-2 bg-foreground/80 text-background p-2 rounded-full shadow-lg"><Lock size={16} strokeWidth={4} /></div>
                              ) : null}
                            </div>
                            <h4 className="text-xl font-black text-primary mb-2">{skin.nome}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{skin.acessorios.join(" · ")}</p>
                            <button onClick={() => handleSkin(skin)} disabled={emUso}
                              className="mt-4 w-full rounded-2xl bg-primary px-4 py-2 text-sm font-black text-primary-foreground disabled:opacity-50">
                              {emUso ? "Em uso" : unlocked.has(skin.key) ? "Usar fantasia" : `Desbloquear · ${custo(skin.key)} ✨`}
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        ))}
      </div>
  );
}
