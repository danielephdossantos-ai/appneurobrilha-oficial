import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMascot } from '@/contexts/MascotContext';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { 
  Heart, 
  Star, 
  Zap, 
  Gamepad2, 
  Shirt, 
  Home as HomeIcon,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import KidLiveMascot, { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';
import { toast } from 'sonner';
import { supabase } from '@/database/supabase/client';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const PipVirtualPet: React.FC = () => {
  const { activeMascot, gainAffinity, isLoading, updateStats } = useMascot();
  const [activeTab, setActiveTab] = useState<'status' | 'closet' | 'play'>('status');
  const [currentSkin, setCurrentSkin] = useState<string | null>(null);
  
  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;

  if (!activeMascot || activeMascot.evolution_stage === 'egg') {
    return <PipEggHatch />;
  }

  return (
    <div className="min-h-[80vh] flex flex-col gap-8 bg-gradient-to-b from-sky-50 to-white rounded-[4rem] p-6 md:p-12 border-4 border-white shadow-2xl overflow-hidden">
      {/* Header Stats */}
      <div className="flex flex-wrap justify-center gap-6">
        <StatBadge icon={<Utensils size={16} />} value={activeMascot.stats.hunger} label="Fome" color="bg-orange-500" />
        <StatBadge icon={<Zap size={16} />} value={activeMascot.stats.energy} label="Energia" color="bg-yellow-500" />
        <StatBadge icon={<Heart size={16} />} value={activeMascot.stats.happiness} label="Felicidade" color="bg-red-500" />
      </div>

      {/* Main Wardrobe Display */}
      <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-center">
        
        {/* Central Pip - The focus */}
        <div className="relative order-1 lg:order-2 flex-1 flex flex-col items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-150 animate-pulse" />
          
          <motion.div 
            key={currentSkin || 'base'}
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="relative z-10"
          >
            <KidLiveMascot 
              size="2xl" 
              showBadge={false} 
              emotion="happy" 
              overrideImage={currentSkin ? PIP_SKINS[currentSkin] : undefined}
              className="drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          <div className="mt-8 bg-white/90 backdrop-blur px-12 py-4 rounded-full shadow-2xl border-4 border-primary">
            <span className="font-black text-primary text-3xl uppercase tracking-tighter">
              {activeMascot.gender === 'menina' ? 'Pipi' : 'Pip'}
            </span>
          </div>
        </div>

        {/* Side Controls/Catalogs */}
        <div className="order-2 lg:order-1 w-full lg:w-96 flex flex-col gap-4">
           <div className="flex gap-2 mb-4 p-2 bg-white/60 rounded-3xl border-2 border-primary/5">
              <TabTrigger active={activeTab === 'status'} onClick={() => setActiveTab('status')} icon={<HomeIcon />} label="Status" />
              <TabTrigger active={activeTab === 'closet'} onClick={() => setActiveTab('closet')} icon={<Shirt />} label="Vestir" />
              <TabTrigger active={activeTab === 'play'} onClick={() => setActiveTab('play')} icon={<Gamepad2 />} label="Brincar" />
           </div>

           <div className="h-[450px] overflow-y-auto pr-2 custom-scrollbar">
             <AnimatePresence mode="wait">
               {activeTab === 'status' && (
                 <motion.div key="status" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                   <KidCard className="p-6 bg-white/80 border-2 border-primary/10">
                     <h3 className="font-black text-primary uppercase text-sm mb-4">Ações Rápidas</h3>
                     <div className="grid grid-cols-2 gap-4">
                       <KidButton variant="secondary" onClick={() => { gainAffinity(5); toast.success('Pip amou o carinho!'); }} className="w-full">Dar Carinho</KidButton>
                       <KidButton variant="secondary" onClick={() => updateStats({ hunger: 100 })} className="w-full">Alimentar</KidButton>
                     </div>
                   </KidCard>
                 </motion.div>
               )}
               {activeTab === 'closet' && <CatalogGrid key="closet" type="costume" onSelect={setCurrentSkin} current={currentSkin} />}
               {activeTab === 'play' && <CatalogGrid key="play" type="toy" onSelect={setCurrentSkin} current={currentSkin} />}
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
};

const StatBadge = ({ icon, value, label, color }: { icon: React.ReactNode, value: number, label: string, color: string }) => (
  <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border-2 border-primary/5 flex items-center gap-3">
    <div className={cn("p-2 rounded-xl text-white", color)}>{icon}</div>
    <div>
      <div className="text-[10px] font-black text-muted-foreground uppercase leading-none mb-1">{label}</div>
      <div className="h-2 w-20 bg-muted rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} className={cn("h-full", color)} />
      </div>
    </div>
  </div>
);

const TabTrigger = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex-1 flex flex-col items-center py-3 rounded-2xl transition-all",
      active ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-white"
    )}
  >
    {icon}
    <span className="text-[10px] font-black uppercase mt-1">{label}</span>
  </button>
);

const CatalogGrid = ({ type, onSelect, current }: { type: 'costume' | 'toy', onSelect: (skin: string | null) => void, current: string | null }) => {
  const [items, setItems] = useState<any[]>([]);
  
  useEffect(() => {
    const fetch = async () => {
      const { data } = await (supabase as any).from('mascot_catalog_items').select('*').eq('type', type).order('name');
      setItems(data || []);
    };
    fetch();
  }, [type]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(item => {
        const skinKey = item.image_url?.replace('SKIN:', '');
        const isActive = current === skinKey;
        return (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
               if (skinKey) {
                 onSelect(skinKey);
                 toast.success(`${item.name} ativado!`);
               }
            }}
            className={cn(
              "p-4 rounded-[2rem] cursor-pointer transition-all border-4 flex flex-col items-center gap-3 bg-white",
              isActive ? "border-primary shadow-kid" : "border-transparent hover:border-primary/20 shadow-sm"
            )}
          >
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
              {skinKey && PIP_SKINS[skinKey] ? (
                <img src={PIP_SKINS[skinKey]} className="w-full h-full object-contain" alt={item.name} />
              ) : (
                <span className="text-4xl">{type === 'costume' ? '👕' : '🧸'}</span>
              )}
            </div>
            <span className="text-[10px] font-black text-center uppercase leading-tight line-clamp-1">{item.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const PipEggHatch: React.FC = () => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<'menino' | 'menina' | 'neutro'>('neutro');
  const [isHatching, setIsHatching] = useState(false);

  const handleHatch = async () => {
    if (!user) return;
    setIsHatching(true);
    
    try {
      const { error } = await (supabase as any)
        .from('user_mascots')
        .insert([{
          user_id: user.id,
          mascot_id: '792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d6e',
          gender,
          evolution_stage: 'baby',
          is_active: true,
          level: 1,
          experience: 0,
          affinity: 10,
          stats: { hunger: 100, energy: 100, happiness: 100 }
        }]);

      if (error) throw error;
      
      toast.success("O Pip nasceu!", {
        description: `Seja bem-vindo, novo companheiro ${gender === 'menina' ? 'Pipi' : 'Pip'}!`,
      });
      
      window.location.reload();
    } catch (error) {
      console.error('Error hatching egg:', error);
      toast.error("Erro ao chocar o ovo.");
    } finally {
      setIsHatching(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-12 bg-white/50 rounded-[4rem] border-4 border-dashed border-primary/20 p-12 shadow-2xl overflow-hidden">
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tighter">O Ovo do Conhecimento</h2>
          
          <div className="relative w-80 h-96 mx-auto mb-12 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-sun/40 via-sky/20 to-primary/30 blur-[100px] rounded-full animate-pulse" />
            
            <motion.div 
              animate={{ 
                rotate: [0, -3, 3, -3, 3, 0],
                y: [0, -15, 0]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-64 h-80 bg-gradient-to-b from-sky-200 via-white to-sun-100 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-8 border-white shadow-[0_25px_50px_rgba(0,0,0,0.1),inset_0_-20px_40px_rgba(255,215,0,0.2)] overflow-hidden">
                {/* Puzzle pieces pattern on shell */}
                <div className="absolute top-10 left-8 w-12 h-12 border-4 border-primary/10 rounded-lg rotate-12 opacity-40" />
                <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-secondary/10 rounded-lg -rotate-12 opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-8 border-white/20 rounded-full blur-xl" />

                {/* Cracks with eyes */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-24 flex flex-col items-center justify-center">
                  <div className="w-full h-2 bg-primary/20 rounded-full blur-sm mb-4" />
                  <div className="flex gap-12">
                    <motion.div 
                      animate={{ scaleY: [1, 0.1, 1] }} 
                      transition={{ repeat: Infinity, duration: 4, times: [0, 0.95, 1] }}
                      className="w-8 h-10 bg-primary rounded-full border-4 border-white shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                    <motion.div 
                      animate={{ scaleY: [1, 0.1, 1] }} 
                      transition={{ repeat: Infinity, duration: 4, times: [0, 0.95, 1] }}
                      className="w-8 h-10 bg-primary rounded-full border-4 border-white shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                  </div>
                  <div className="w-full h-2 bg-primary/20 rounded-full blur-sm mt-4" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-sun/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <p className="text-muted-foreground text-lg mb-8 font-bold max-w-md mx-auto italic">
            "Posso ouvir o Pip lá dentro! Ele está aprendendo muito e logo estará pronto para te conhecer."
          </p>
          <KidButton size="xl" onClick={() => setStep(2)} className="px-16 text-2xl py-8">
            CUIDAR DO OVO ✨
          </KidButton>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h2 className="text-3xl font-black text-primary mb-12 uppercase tracking-tight">COMO SERÁ SEU COMPANHEIRO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GenderOption 
              selected={gender === 'menino'} 
              onClick={() => setGender('menino')}
              label="Menino (Pip)"
              emoji="🧢"
            />
            <GenderOption 
              selected={gender === 'menina'} 
              onClick={() => setGender('menina')}
              label="Menina (Pipi)"
              emoji="🎀"
            />
            <GenderOption 
              selected={gender === 'neutro'} 
              onClick={() => setGender('neutro')}
              label="Neutro (Pip)"
              emoji="✨"
            />
          </div>
          <KidButton 
            size="xl" 
            onClick={handleHatch} 
            loading={isHatching}
            className="px-16"
          >
            CHOCAR AGORA! 🐣
          </KidButton>
        </motion.div>
      )}
    </div>
  );
};

const GenderOption = ({ selected, onClick, label, emoji }: { selected: boolean, onClick: () => void, label: string, emoji: string }) => (
  <button 
    onClick={onClick}
    className={cn(
      "p-8 rounded-[2.5rem] border-4 transition-all flex flex-col items-center gap-4 transform active:scale-95",
      selected ? "bg-primary text-white border-primary shadow-kid scale-105" : "bg-white text-muted-foreground border-primary/10 hover:border-primary/30"
    )}
  >
    <span className="text-6xl">{emoji}</span>
    <span className="font-black text-sm uppercase tracking-widest">{label}</span>
  </button>
);
