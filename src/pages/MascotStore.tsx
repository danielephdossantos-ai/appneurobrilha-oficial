import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMascot, Mascot } from "@/contexts/MascotContext";
import { motion, AnimatePresence } from "framer-motion";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { ShoppingBag, Star, Sparkles, ChevronRight, Globe2, Check, Lock } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { useAppState } from "@/core/store";
import { EggHatchCinematic, shouldShowEggHatch } from "@/components/pip/EggHatchCinematic";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { PipEvolution } from "@/components/pip/PipEvolution";
import { getMascoteImagem } from "@/lib/mascote-imagens";
import { cn } from "@/utils/utils";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { toast } from "sonner";
import { MUNDOS, MundoOption } from "@/components/worlds/mundos";

const MascotStore = () => {
  const { activeChild, addCoins } = useAppState();
  const { activeMascot, setActiveMascot, userMascots, isLoading } = useMascot();
  const [activeTab, setActiveTab] = useState<'mascots' | 'worlds'>('mascots');
  const navigate = useNavigate();

  // Mundos já estão centralizados em @/components/worlds/mundos
  const worlds = MUNDOS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-primary flex items-center gap-2">
              <ShoppingBag className="text-sun" /> Loja do Pip
            </h1>
            <p className="text-muted-foreground font-medium">Equipe seu companheiro para novas aventuras!</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border-2 border-primary/10 flex items-center gap-2">
            <span className="text-xl font-black text-primary">{activeChild?.coins ?? 0}</span>
            <span className="text-sun font-bold">💰</span>
          </div>
        </header>

        <div className="flex gap-4 mb-8">
          <KidButton 
            variant={activeTab === 'mascots' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('mascots')}
            className="flex-1"
          >
            Mascotes
          </KidButton>
          <KidButton 
            variant={activeTab === 'worlds' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('worlds')}
            className="flex-1"
          >
            Mundos
          </KidButton>
        </div>

        {activeTab === 'mascots' ? (
          <div className="space-y-8">
            <PipEvolution />
            {/* Adicionar lista de mascotes desbloqueáveis aqui se houver catálogo no DB */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {worlds.map((world) => (
              <KidCard key={world.id} className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={world.image} 
                    alt={world.label}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-lg">{world.emoji}</span>
                    <span className="font-black text-primary text-sm uppercase tracking-wider">{world.label}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {world.description}
                  </p>
                  <KidButton className="w-full" variant="outline">
                    Explorar Mundo
                  </KidButton>
                </div>
              </KidCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MascotStore;
