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
  Sparkles
} from 'lucide-react';
import KidLiveMascot from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';
import { toast } from 'sonner';
import { supabase } from '@/database/supabase/client';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const PipVirtualPet: React.FC = () => {
  const { activeMascot, gainExperience, gainAffinity, isLoading } = useMascot();
  const [activeTab, setActiveTab] = useState<'status' | 'room' | 'closet' | 'play'>('status');
  
  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;

  if (!activeMascot || activeMascot.evolution_stage === 'egg') {
    return <PipEggHatch />;
  }

  return (
    <div className="space-y-8">
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

      {/* Main Mascot View */}
      <div className="relative aspect-square max-w-md mx-auto bg-gradient-to-b from-sky-200 to-white rounded-[3rem] border-8 border-white shadow-kid p-8 flex items-center justify-center overflow-hidden">
        {/* Background Decorations (Room) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        </div>

        <KidLiveMascot 
          size="2xl" 
          showBadge={false} 
          emotion={activeMascot.stats.happiness < 30 ? 'thinking' : 'happy'} 
        />
        
        {/* Level Badge */}
        <div className="absolute top-6 right-6 bg-primary text-white font-black px-4 py-2 rounded-2xl shadow-lg border-2 border-white">
          NÍVEL {activeMascot.level}
        </div>

        {/* Name Tag */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-xl border-2 border-primary/20">
          <span className="font-black text-primary text-xl uppercase tracking-widest">
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
            gainAffinity(5);
            toast.success("Humm! Pip adorou o lanche educativo.");
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
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'play' && <ToyCatalog />}
          {activeTab === 'closet' && <ClosetCatalog />}
          {activeTab === 'room' && <RoomCustomizer />}
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
    <div className="w-16 h-16 bg-white rounded-2xl shadow-kid border-2 border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 3 })}
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
      // First, find or create the Pip mascot in the database
      // Using the UUID I seeded earlier: 792a7e4e-0c6a-4b9a-8e5f-1e9a3c4b5d6e
      
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
        description: `Seja bem-vindo, novo companheiro ${gender}!`,
      });
      
      // Force refresh of mascot data
      window.location.reload();
    } catch (error) {
      console.error('Error hatching egg:', error);
      toast.error("Erro ao chocar o ovo.");
    } finally {
      setIsHatching(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-4xl font-black text-primary mb-8 uppercase tracking-widest">Um novo amigo está chegando!</h2>
          <div className="relative w-64 h-80 mx-auto mb-12">
            <motion.div 
              animate={{ 
                rotate: [0, -5, 5, -5, 5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[150px] leading-none"
            >
              🥚
            </motion.div>
          </div>
          <KidButton size="lg" onClick={() => setStep(2)} className="px-12 py-8 text-2xl">
            CUIDAR DO OVO
          </KidButton>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h2 className="text-3xl font-black text-primary mb-8">COMO SERÁ SEU COMPANHEIRO?</h2>
          <div className="grid grid-cols-3 gap-6 mb-12">
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
            size="lg" 
            onClick={handleHatch} 
            loading={isHatching}
            className="px-12 py-8 text-2xl"
          >
            CHOCAR AGORA!
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
      "p-6 rounded-3xl border-4 transition-all flex flex-col items-center gap-4",
      selected ? "bg-primary text-white border-primary shadow-kid" : "bg-white text-muted-foreground border-primary/10 hover:border-primary/30"
    )}
  >
    <span className="text-5xl">{emoji}</span>
    <span className="font-black text-sm uppercase">{label}</span>
  </button>
);

const ToyCatalog = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <CatalogSection title="Brinquedos Educativos" type="toy" />
  </motion.div>
);

const ClosetCatalog = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <CatalogSection title="Fantasias & Roupas" type="costume" />
  </motion.div>
);

const RoomCustomizer = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <CatalogSection title="Decoração do Quarto" type="furniture" />
  </motion.div>
);

const CatalogSection = ({ title, type }: { title: string, type: string }) => {
  const [items, setItems] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase.from('mascot_catalog_items').select('*').eq('type', type).limit(20);
      setItems(data || []);
    };
    fetchItems();
  }, [type]);

  return (
    <div className="col-span-full">
      <h3 className="text-xl font-black text-primary mb-4 flex items-center gap-2 uppercase tracking-widest">
        <Sparkles size={18} /> {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map(item => (
          <KidCard key={item.id} className="p-4 flex flex-col items-center gap-2 group border-2 border-primary/5 hover:border-primary/20 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
              {type === 'toy' ? '🎮' : type === 'costume' ? '👕' : '🖼️'}
            </div>
            <span className="font-black text-[10px] text-center uppercase truncate w-full">{item.name}</span>
            <div className="flex items-center gap-1 bg-yellow-400/20 px-2 py-0.5 rounded-full">
              <Star size={10} fill="currentColor" className="text-yellow-600" />
              <span className="text-[10px] font-black text-yellow-700">LV {item.required_level}</span>
            </div>
          </KidCard>
        ))}
      </div>
    </div>
  );
};
