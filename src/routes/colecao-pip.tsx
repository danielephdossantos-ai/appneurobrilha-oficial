import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Shell } from "@/components/Layout";
import { Lock, Check, Sparkles } from "lucide-react";
import { useAppState } from "@/core/store";
import { cn } from "@/utils/utils";
import { equipChildSkin, listChildUnlocks, purchaseMascotItem } from "@/lib/child-mascot";
import { useMascot } from "@/contexts/MascotContext";
import { FANTASIAS, precoFantasia, type Fantasia, type Mascote, type Tamanho } from "@/lib/guarda-roupa";

export const Route = createFileRoute("/colecao-pip")({
  head: () => ({
    meta: [
      { title: "Guarda-Roupa do Pip e da Pipa · NeuroBrilha Kids" },
      { name: "description", content: "Fantasias e acessórios do Pip e da Pipa nos tamanhos Baby, Grande e Teen." },
      { property: "og:title", content: "Guarda-Roupa do Pip e da Pipa" },
      { property: "og:description", content: "Jogue, ganhe BrilhoCoins e libere fantasias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GuardaRoupaPage,
});

const GRATIS = new Set(["original", "pipa-original", "baby", "pipa-baby"]);
const TAMANHOS: { id: Tamanho; label: string }[] = [
  { id: "baby", label: "Baby" },
  { id: "grande", label: "Grande" },
  { id: "teen", label: "Teen" },
];

function GuardaRoupaPage() {
  const { activeChild } = useAppState();
  const { childMascotProfile, refreshMascot } = useMascot();
  const queryClient = useQueryClient();
  const [cloudUnlocks, setCloudUnlocks] = useState<string[]>([]);
  const [mascote, setMascote] = useState<Mascote>((childMascotProfile?.active_mascot as Mascote) ?? "pip");
  const [tamanho, setTamanho] = useState<Tamanho>("grande");
  const equipada = childMascotProfile?.equipped_skin;
  const unlocked = useMemo(() => new Set([...GRATIS, ...cloudUnlocks]), [cloudUnlocks]);
  const itens = FANTASIAS.filter((x) => x.mascote === mascote && x.tamanho === tamanho);
  const atual = FANTASIAS.find((x) => x.key === equipada) ?? itens[0];
  const [selecionada, setSelecionada] = useState<Fantasia | undefined>(undefined);
  const vitrine = selecionada ?? atual;

  useEffect(() => {
    if (childMascotProfile?.active_mascot) setMascote(childMascotProfile.active_mascot as Mascote);
  }, [childMascotProfile?.active_mascot]);

  const loadUnlocks = async () => {
    if (!activeChild?.id) return;
    setCloudUnlocks(await listChildUnlocks(activeChild.id, "skin"));
  };
  useEffect(() => { loadUnlocks().catch(console.error); }, [activeChild?.id]);

  const custo = (k: string) => (GRATIS.has(k) ? 0 : precoFantasia(k, ""));

  const vestir = async (item: Fantasia) => {
    if (!activeChild) { toast.error("Escolha uma criança primeiro."); return; }
    if (!unlocked.has(item.key)) {
      try {
        const r: any = await purchaseMascotItem(activeChild.id, "skin", item.key, custo(item.key));
        if (!r?.ok) { toast.error("Jogue mais um pouco para ganhar BrilhoCoins!"); return; }
        await queryClient.invalidateQueries({ queryKey: ["children"] });
        await loadUnlocks();
        toast.success("Fantasia liberada! ✨");
      } catch (e) { console.error(e); toast.error("Não foi possível liberar agora."); return; }
    }
    await equipChildSkin(activeChild.id, item.key);
    await refreshMascot();
    toast.success(`${item.nome} vestido!`);
  };

  return (
    <Shell>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <header className="mb-6 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sun/20 px-4 py-2 text-xs font-black uppercase tracking-widest text-primary">
            <Sparkles size={14} className="text-sun" /> Guarda-Roupa
          </div>
          <h1 className="text-4xl font-black text-primary md:text-5xl">Vista seu amigo!</h1>
          <p className="mt-2 text-muted-foreground">Jogue, ganhe BrilhoCoins e libere novas fantasias.</p>
          <p className="mt-1 font-black text-primary">{activeChild?.coins ?? 0} BrilhoCoins ✨</p>
        </header>

        <div className="mb-4 flex justify-center gap-3">
          {(["pip", "pipa"] as Mascote[]).map((m) => (
            <button key={m} onClick={() => { setMascote(m); setSelecionada(undefined); }}
              className={cn("rounded-2xl px-8 py-3 text-lg font-black transition-all",
                mascote === m ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground")}>
              {m === "pip" ? "Pip" : "Pipa"}
            </button>
          ))}
        </div>
        <div className="mb-6 flex justify-center gap-2">
          {TAMANHOS.map((t) => (
            <button key={t.id} onClick={() => { setTamanho(t.id); setSelecionada(undefined); }}
              className={cn("rounded-full border-2 px-5 py-2 text-sm font-black",
                tamanho === t.id ? "border-sun bg-sun/20 text-primary" : "border-border text-muted-foreground")}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Espelho / provador */}
          {vitrine && (
            <div className="flex flex-col items-center rounded-[2rem] border-4 border-primary/10 bg-card p-5 shadow-xl lg:sticky lg:top-4 lg:self-start">
              <motion.img key={vitrine.key} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                src={vitrine.image} alt={vitrine.nome} className="h-56 w-56 object-contain drop-shadow-2xl" />
              <h2 className="mt-3 text-2xl font-black text-primary">{vitrine.nome}</h2>
              <p className="mt-3 text-xs font-black uppercase tracking-widest text-muted-foreground">Acessórios</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {vitrine.acessorios.map((a) => (
                  <span key={a} className="rounded-full bg-sun/20 px-3 py-1 text-sm font-bold text-primary">{a}</span>
                ))}
              </div>
              <button onClick={() => vestir(vitrine)} disabled={equipada === vitrine.key}
                className="mt-5 w-full rounded-2xl bg-primary px-4 py-3 font-black text-primary-foreground disabled:opacity-60">
                {equipada === vitrine.key ? "Vestindo agora" : unlocked.has(vitrine.key) ? "Vestir" : `Liberar · ${custo(vitrine.key)} ✨`}
              </button>
            </div>
          )}

          {/* Armário com cabides */}
          <div className="rounded-[2rem] border-8 border-amber-800/70 bg-amber-100/60 p-4 shadow-inner">
            <div className="mx-2 mb-2 h-2 rounded-full bg-amber-900/60" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {itens.map((item, i) => {
                const livre = unlocked.has(item.key);
                return (
                  <motion.button key={item.key} initial={{ rotate: -4, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04, type: "spring" }} onClick={() => setSelecionada(item)}
                    className={cn("relative flex flex-col items-center origin-top", vitrine?.key === item.key && "scale-105")}>
                    <svg viewBox="0 0 60 24" className="h-6 w-14 text-amber-900/70" aria-hidden>
                      <path d="M30 2 q6 0 6 5 q0 4 -6 6 L4 22 h52 L30 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <div className={cn("relative w-full rounded-3xl border-4 bg-card p-2 shadow-md",
                      equipada === item.key ? "border-emerald-500" : vitrine?.key === item.key ? "border-sun" : "border-card")}>
                      <img src={item.image} alt={item.nome} loading="lazy"
                        className={cn("mx-auto h-28 w-28 object-contain", !livre && "opacity-40 grayscale")} />
                      {equipada === item.key ? (
                        <span className="absolute right-1 top-1 rounded-full bg-emerald-500 p-1 text-primary-foreground"><Check size={14} strokeWidth={4} /></span>
                      ) : !livre ? (
                        <span className="absolute right-1 top-1 rounded-full bg-foreground/70 p-1 text-background"><Lock size={14} strokeWidth={3} /></span>
                      ) : null}
                      <p className="mt-1 text-center text-xs font-black text-primary">{item.nome}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
