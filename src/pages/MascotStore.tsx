import React, { useState, useEffect } from "react";
import { useMascot } from "@/contexts/MascotContext";
import { motion, AnimatePresence } from "framer-motion";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { ShoppingBag, Star, Sparkles, Globe2, Check, Lock, Coins } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { useAppState } from "@/core/store";
import { PipEvolution } from "@/components/pip/PipEvolution";
import { cn } from "@/utils/utils";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { toast } from "sonner";
import { MUNDOS, MundoOption } from "@/components/worlds/mundos";
import { HiperfocoId } from "@/data/hiperfocos";

const MascotStore = () => {
  const { activeChild } = useAppState();
  const { activeMascot, setActiveMascot, userMascots, isLoading } = useMascot();
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom } = useHiperfoco();
  const [activeTab, setActiveTab] = useState<'mascots' | 'worlds'>('mascots');
  
  const handleSelectWorld = (world: MundoOption) => {
    // Para mundos com hiperfocoId, sincronizamos com o contexto de hiperfoco
    if (world.hiperfocoId) {
      setHiperfocoById(world.hiperfocoId as Exclude<HiperfocoId, "custom">);
    } else {
      setHiperfocoCustom(world.customLabel || world.label);
    }
    
    toast.success(`Mundo ${world.label} selecionado!`, {
      icon: "🌍",
      description: "Sua trilha agora terá este visual mágico."
    });
  };

  const isWorldSelected = (world: MundoOption) => {
    if (!hiperfoco) return false;
    if (world.hiperfocoId) return hiperfoco.id === world.hiperfocoId;
    return hiperfoco.id === "custom" && (hiperfoco.label === world.label || hiperfoco.label === world.customLabel);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pb-24">
      {/* Header Fixo/Sticky no Topo */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-primary/10 px-4 py-4 mb-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-sun p-2 rounded-xl shadow-lg shadow-sun/20">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-primary leading-tight">Loja do Pip</h1>
              <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-sun" />
                Coleções Mágicas
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-inner border-2 border-primary/5">
            <span className="text-xl font-black text-primary">{activeChild?.coins ?? 0}</span>
            <div className="bg-sun/20 p-1 rounded-full">
              <Coins className="w-5 h-5 text-sun fill-sun" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Tabs Estilizadas */}
        <div className="flex p-1 bg-primary/5 rounded-2xl mb-8 border border-primary/10">
          <button 
            onClick={() => setActiveTab('mascots')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-black transition-all",
              activeTab === 'mascots' 
                ? "bg-white text-primary shadow-sm" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <Star className={cn("w-4 h-4", activeTab === 'mascots' ? "fill-sun text-sun" : "")} />
            MEUS PROFESSORES
          </button>
          <button 
            onClick={() => setActiveTab('worlds')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-black transition-all",
              activeTab === 'worlds' 
                ? "bg-white text-primary shadow-sm" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <Globe2 className={cn("w-4 h-4", activeTab === 'worlds' ? "text-sky-500" : "")} />
            MUNDOS MÁGICOS
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'mascots' ? (
            <motion.div 
              key="mascots"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-[2rem] p-6 border-4 border-primary/10 shadow-xl">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-black text-primary uppercase">Evolução do Pip</h2>
                  <p className="text-sm font-medium text-muted-foreground">Complete missões para desbloquear novas formas!</p>
                </div>
                <PipEvolution />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {/* Aqui entrarão os outros mascotes mentor IA se existirem no futuro */}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="worlds"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {MUNDOS.map((world, index) => {
                const selected = isWorldSelected(world);
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={world.id}
                  >
                    <KidCard className={cn(
                      "overflow-hidden group cursor-pointer transition-all duration-300 border-4",
                      selected ? "border-sun ring-4 ring-sun/20 shadow-sun/20" : "border-white hover:border-primary/10"
                    )} onClick={() => handleSelectWorld(world)}>
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={world.image} 
                          alt={world.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={cn(
                          "absolute inset-0 transition-colors duration-300",
                          selected ? "bg-sun/10" : "bg-black/20 group-hover:bg-black/5"
                        )} />
                        
                        {selected && (
                          <div className="absolute top-3 right-3 bg-sun text-white p-2 rounded-full shadow-lg">
                            <Check className="w-5 h-5 stroke-[4px]" />
                          </div>
                        )}
                        
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg border border-primary/5">
                          <span className="text-xl">{world.emoji}</span>
                          <span className="font-black text-primary text-xs uppercase tracking-tighter">{world.label}</span>
                        </div>
                      </div>
                      
                      <div className="p-5 bg-white">
                        <p className="text-muted-foreground text-xs font-bold leading-relaxed mb-4 min-h-[32px]">
                          {world.description}
                        </p>
                        
                        <KidButton 
                          className="w-full text-xs font-black h-10 rounded-xl" 
                          variant={selected ? "primary" : "sky"}
                        >
                          {selected ? "MUNDO ATIVO" : "USAR ESTE MUNDO"}
                        </KidButton>
                      </div>
                    </KidCard>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MascotStore;
