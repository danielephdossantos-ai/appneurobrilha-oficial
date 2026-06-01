import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMascot, UserMascot } from '@/contexts/MascotContext';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { 
  Heart, 
  Star, 
  Zap, 
  ShoppingBag, 
  Gamepad2, 
  Shirt, 
  Home as HomeIcon,
  Utensils,
  ChevronRight,
  Sparkles,
  Camera
} from 'lucide-react';
import KidLiveMascot, { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';
import { toast } from 'sonner';
import { supabase } from '@/database/supabase/client';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const PipVirtualPet: React.FC = () => {
  const { activeMascot, gainExperience, gainAffinity, isLoading, updateStats } = useMascot();
  const [activeTab, setActiveTab] = useState<'status' | 'room' | 'closet' | 'play'>('status');
  const [currentSkin, setCurrentSkin] = useState<string | null>(null);
  
  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;

  if (!activeMascot || activeMascot.evolution_stage === 'egg') {
    return <PipEggHatch />;
  }

  return (
    <div className="space-y-8 bg-white/40 backdrop-blur-md rounded-[3rem] p-8 border-4 border-white shadow-xl">
      {/* Top Stats Bar */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard 
          icon={<Utensils className="text-orange-500" />} 
          label="Fome" 
          value={activeMascot.stats.hunger} 
          color="bg-orange-500"
        />
        <StatCard 
          icon={<Zap className="text-yellow-500" />} 
          label="Energia" 
          value={activeMascot.stats.energy} 
          color="bg-yellow-500"
        />
        <StatCard 
          icon={<Heart className="text-red-500" />} 
          label="Felicidade" 
          value={activeMascot.stats.happiness} 
          color="bg-red-500"
        />
      </div>

      {/* Main Mascot Room View */}
      <div className="relative aspect-[16/10] w-full max-w-4xl mx-auto bg-gradient-to-b from-sky-300 via-sky-100 to-green-100 rounded-[4rem] border-8 border-white shadow-2xl p-8 flex items-end justify-center overflow-hidden">
        {/* Room Floor */}
        <div className="absolute bottom-0 inset-x-0 h-1/4 bg-green-200/50 skew-y-1" />
        
        {/* Wall Decorations */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/80 rounded-2xl flex items-center justify-center text-4xl shadow-inner border-2 border-primary/5">🖼️</div>
        <div className="absolute top-16 right-20 w-32 h-40 bg-white/40 rounded-3xl border-4 border-white shadow-lg" />

        {/* Window */}
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-sky-200 rounded-2xl border-4 border-white flex items-center justify-center overflow-hidden">
           <div className="text-4xl animate-bounce-slow">☁️</div>
        </div>

        <motion.div 
          animate={activeMascot.evolution_stage === 'baby' ? { 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          } : { 
            y: [0, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: activeMascot.evolution_stage === 'baby' ? 2 : 4, ease: "easeInOut" }}
          className="relative z-10"
        >
          <KidLiveMascot 
            size={activeMascot.evolution_stage === 'baby' ? 'lg' : activeMascot.evolution_stage === 'child' ? 'xl' : '2xl'} 
            showBadge={false} 
            emotion={activeMascot.stats.happiness < 30 ? 'thinking' : 'happy'} 
            overrideImage={currentSkin ? PIP_SKINS[currentSkin] : undefined}
          />
        </motion.div>
        
        {/* Level Badge */}
        <div className="absolute top-6 left-6 bg-sun text-white font-black px-5 py-2 rounded-full shadow-lg border-2 border-white flex items-center gap-2">
          <Star size={16} fill="white" />
          LV {activeMascot.level}
        </div>

        {/* Name Tag */}
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-8 py-3 rounded-full shadow-xl border-4 border-primary">
          <span className="font-black text-primary text-2xl uppercase tracking-tighter">
            {activeMascot.gender === 'menina' ? 'Pipi' : 'Pip'}
          </span>
        </div>
      </div>

      {/* Interaction Menu */}
      <div className="flex justify-center gap-4">
        <InteractionButton 
          icon={<Utensils />} 
          label="Alimentar" 
          onClick={() => {
            gainAffinity(2);
            updateStats({ hunger: Math.min(100, activeMascot.stats.hunger + 10) });
            toast.success(`Humm! ${activeMascot.gender === 'menina' ? 'Pipi' : 'Pip'} adorou o lanche educativo.`);
          }}
        />
        <InteractionButton 
          icon={<Gamepad2 />} 
          label="Brincar" 
          onClick={() => setActiveTab('play')}
        />
        <InteractionButton 
          icon={<Shirt />} 
          label="Vestir" 
          onClick={() => setActiveTab('closet')}
        />
        <InteractionButton 
          icon={<HomeIcon />} 
          label="Quarto" 
          onClick={() => setActiveTab('room')}
        />
      </div>

      {/* Content Area */}
      <div className="mt-8 border-t-4 border-primary/5 pt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'play' && <ToyCatalog key="toys" />}
          {activeTab === 'closet' && <ClosetCatalog key="closet" onSelectSkin={setCurrentSkin} />}
          {activeTab === 'room' && <RoomCustomizer key="room" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: number, color: string }) => (
  <KidCard className="p-4 flex flex-col items-center gap-2">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-[10px] font-black uppercase text-muted-foreground">{label}</span>
    </div>
    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        className={cn("h-full", color)}
      />
    </div>
    <span className="text-xs font-black">{value}%</span>
  </KidCard>
);

const InteractionButton = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center gap-2 group"
  >
    <div className="w-20 h-20 bg-white rounded-3xl shadow-kid border-2 border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform hover:-translate-y-1">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 32, strokeWidth: 3 }) : icon}
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary">{label}</span>
  </button>
);

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
    <div className="max-w-2xl mx-auto text-center py-12 bg-white/50 rounded-[4rem] border-4 border-dashed border-primary/20 p-12 shadow-2xl">
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tighter">Um novo amigo está chegando!</h2>
          <div className="relative w-64 h-80 mx-auto mb-12 flex items-center justify-center">
             <div className="absolute inset-0 bg-sun/20 blur-3xl rounded-full animate-pulse" />
            <motion.div 
              animate={{ 
                rotate: [0, -5, 5, -5, 5, 0],
                y: [0, -20, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[180px] leading-none relative z-10"
            >
              🥚
            </motion.div>
          </div>
          <p className="text-muted-foreground text-lg mb-8 font-bold">O ovo do conhecimento está pronto para chocar!</p>
          <KidButton size="xl" onClick={() => setStep(2)} className="px-16">
            CUIDAR DO OVO
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

export const ToyCatalog = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
    <CatalogSection title="Brinquedos do Pip" type="toy" icon="🎮" />
  </motion.div>
);

export const ClosetCatalog = ({ onSelectSkin }: { onSelectSkin?: (skin: string | null) => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
    <CatalogSection 
      title="Guarda-Roupa Mágico" 
      type="costume" 
      icon="👕" 
      onItemClick={(item) => {
        if (item.image_url && item.image_url.startsWith('SKIN:')) {
          const skinKey = item.image_url.replace('SKIN:', '');
          onSelectSkin?.(skinKey);
          toast.success(`${item.name} equipada!`);
        }
      }} 
    />
  </motion.div>
);

const RoomCustomizer = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
    <CatalogSection title="Móveis e Decoração" type="furniture" icon="🏠" />
  </motion.div>
);

const CatalogSection = ({ title, type, icon, onItemClick }: { title: string, type: string, icon: string, onItemClick?: (item: any) => void }) => {
  const [items, setItems] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await (supabase as any).from('mascot_catalog_items').select('*').eq('type', type).order('required_level', { ascending: true });
      setItems(data || []);
    };
    fetchItems();
  }, [type]);

  return (
    <div className="col-span-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black text-primary flex items-center gap-3 uppercase tracking-tighter">
          <span className="text-3xl">{icon}</span> {title}
        </h3>
        <Pill tone="info" className="px-4 py-2 rounded-full font-black uppercase text-xs">
          {items.length} ITENS NO CATÁLOGO
        </Pill>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map(item => (
          <KidCard 
            key={item.id} 
            onClick={() => onItemClick?.(item)}
            className="p-6 flex flex-col items-center gap-4 group border-2 border-primary/5 hover:border-primary/20 transition-all cursor-pointer bg-white/50"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform shadow-inner overflow-hidden">
              {item.image_url && item.image_url.startsWith('SKIN:') ? (
                <img 
                  src={PIP_SKINS[item.image_url.replace('SKIN:', '')]} 
                  className="w-full h-full object-contain" 
                  alt={item.name}
                />
              ) : (
                type === 'toy' ? '🧩' : type === 'costume' ? '🎭' : '🛋️'
              )}
            </div>
            <div className="text-center w-full">
              <span className="font-black text-xs uppercase truncate block mb-1">{item.name}</span>
              <div className="flex items-center justify-center gap-1 bg-sun/20 px-3 py-1 rounded-full">
                <Star size={12} fill="currentColor" className="text-sun" />
                <span className="text-[10px] font-black text-sun-foreground">NÍVEL {item.required_level}</span>
              </div>
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {item.required_coins} Moedas
            </div>
          </KidCard>
        ))}
      </div>
    </div>
  );
};

const Pill = ({ children, tone = "default", className = "" }: { children: React.ReactNode; tone?: "default" | "success" | "warning" | "info" | "danger"; className?: string }) => {
  const tones: Record<string, string> = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    info: "bg-sky/30 text-foreground",
    danger: "bg-destructive/15 text-destructive",
  };
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${tones[tone]} ${className}`}>{children}</span>;
};
