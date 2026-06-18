import React, { useState } from "react";
import { useAppState, Hiperfoco } from "@/core/store";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Sparkles, Check, Trash2, Edit3, Heart } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/utils/utils";

const HYPERFOCUS_OPTIONS: { value: Hiperfoco; label: string }[] = [
  { value: "dinossauros", label: "Dinossauros" },
  { value: "animais", label: "Animais" },
  { value: "carros", label: "Carros e Veículos" },
  { value: "super-herois", label: "Super-heróis" },
  { value: "minecraft", label: "Minecraft" },
  { value: "espaco", label: "Espaço" },
  { value: "princesas", label: "Princesas e Castelo" },
  { value: "fazendinha", label: "Fazendinha" },
  { value: "bailarinas", label: "Bailarinas" },
  { value: "sereias", label: "Sereias" },
  { value: "robos", label: "Robôs" },
  { value: "musica", label: "Música" },
  { value: "arte", label: "Arte" },
  { value: "trens", label: "Trens" },
];

export const HyperfocusManager: React.FC = () => {
  const { activeChild, updateChild } = useAppState();
  const [isAdding, setIsAdding] = useState(false);

  if (!activeChild) return null;

  const currentList = activeChild.hyperfocus_list || [];
  const hasHyperfocus = activeChild.has_hyperfocus ?? true;

  const toggleGlobalHyperfocus = (enabled: boolean) => {
    updateChild(activeChild.id, { has_hyperfocus: enabled });
    toast.success(enabled ? "Temas personalizados ativados!" : "Usando temas variados.");
  };

  const addHyperfocus = (focus: Hiperfoco) => {
    if (currentList.includes(focus)) {
      toast.error("Este interesse já está na lista!");
      return;
    }
    const newList = [...currentList, focus];
    updateChild(activeChild.id, { hyperfocus_list: newList });
    setIsAdding(false);
    toast.success(`${focus} adicionado aos interesses!`);
  };

  const removeHyperfocus = (focus: Hiperfoco) => {
    const newList = currentList.filter((f) => f !== focus);
    updateChild(activeChild.id, { hyperfocus_list: newList });
    toast.info("Interesse removido.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-primary/5 p-6 rounded-3xl border-2 border-primary/10">
        <div>
          <h3 className="text-xl font-black text-primary flex items-center gap-2">
            <Heart size={20} fill="currentColor" />
            Sistema de Hiperfocos
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {hasHyperfocus
              ? "A interface será personalizada com os temas favoritos abaixo."
              : "A interface usará temas variados e rotativos."}
          </p>
        </div>
        <div className="flex gap-2 p-1 bg-white rounded-2xl border-2 border-border">
          <button
            onClick={() => toggleGlobalHyperfocus(true)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
              hasHyperfocus
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            Sim
          </button>
          <button
            onClick={() => toggleGlobalHyperfocus(false)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
              !hasHyperfocus
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            Não
          </button>
        </div>
      </div>

      <AnimatePresence>
        {hasHyperfocus && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {currentList.map((focus) => {
                const info = HYPERFOCUS_OPTIONS.find((o) => o.value === focus);
                return (
                  <motion.div
                    layout
                    key={focus}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary shadow-sm transition-all text-center h-full">
                      <span className="text-3xl mb-1">{info?.icon || "✨"}</span>
                      <span className="text-xs font-black text-primary uppercase tracking-tighter truncate w-full">
                        {info?.label || focus}
                      </span>
                      <button
                        onClick={() => removeHyperfocus(focus)}
                        className="absolute -top-2 -right-2 bg-destructive text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={12} strokeWidth={3} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}

              <button
                onClick={() => setIsAdding(true)}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-all text-center h-full group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1 group-hover:scale-110 transition-transform">
                  <Plus size={20} strokeWidth={3} />
                </div>
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">
                  Adicionar
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal/Overlay de Seleção */}
      <AnimatePresence>
        {isAdding && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h4 className="text-xl font-black text-primary uppercase tracking-tight flex items-center gap-2">
                  <Sparkles size={20} className="text-yellow-500" />
                  Novo Hiperfoco
                </h4>
                <button
                  onClick={() => setIsAdding(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {HYPERFOCUS_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => addHyperfocus(option.value)}
                      disabled={currentList.includes(option.value)}
                      className={cn(
                        "flex flex-col items-center p-4 rounded-2xl border-2 transition-all text-center",
                        currentList.includes(option.value)
                          ? "bg-muted border-transparent opacity-50 cursor-not-allowed"
                          : "bg-white border-border hover:border-primary hover:bg-primary/5",
                      )}
                    >
                      <span className="text-3xl mb-1">{option.icon}</span>
                      <span className="text-xs font-black uppercase tracking-tighter truncate w-full">
                        {option.label}
                      </span>
                      {currentList.includes(option.value) && (
                        <Check size={12} className="text-success mt-1" strokeWidth={4} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-muted/30 border-t border-border flex justify-end">
                <KidButton variant="ghost" onClick={() => setIsAdding(false)}>
                  Fechar
                </KidButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
