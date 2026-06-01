import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useMascot, Mascot } from '@/contexts/MascotContext';
import { Shell } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { ShoppingBag, Star, Sparkles, ChevronRight } from 'lucide-react';
import { supabase } from '@/database/supabase/client';
import pipMascot from '@/assets/pip-mascot.png';
import KidLiveMascot from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';


const ADDITIONAL_CHARACTERS = [
  { id: 'rex', name: 'Rex', description: 'O T-Rex explorador com um sorriso gigante.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Rex&backgroundColor=b6e3f4' },
  { id: 'tina', name: 'Tina', description: 'Triceratops gentil com cores vivas e muita calma.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Tina&backgroundColor=ffdfbf' },
  { id: 'astro', name: 'Astro', description: 'Robô astronauta expressivo e muito amigável.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Astro&backgroundColor=c0aede' },
  { id: 'nova', name: 'Nova', description: 'Cadelinha espacial pronta para guiar aventuras.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Nova&backgroundColor=d1d4f9' },
  { id: 'luna', name: 'Luna', description: 'Gata unicórnio mágica com chifre brilhante.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Luna&backgroundColor=ffd5dc' },
  { id: 'mia', name: 'Mia', description: 'Gatinha delicada com olhos enormes e encantadores.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Mia&backgroundColor=ffdfbf' },
  { id: 'turbo', name: 'Turbo', description: 'Carrinho de corrida veloz com cores vibrantes.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Turbo&backgroundColor=b6e3f4' },
];

const MascotStorePage: React.FC = () => {
  const { userMascots } = useMascot();
  const [dbMascots, setDbMascots] = useState<Mascot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchAllMascots = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await (supabase as any)
          .from('mascots')
          .select('*')
          .order('name');

        if (error) throw error;
        setDbMascots(data || []);
      } catch (err) {
        console.error('Error fetching mascots from store:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMascots();
  }, []);

  const ownedMascotIds = userMascots.map(um => um.mascot_id);

  // Combine DB mascots with additional characters
  const allDisplayMascots = [...dbMascots];
  
  // Add additional characters if they're not already in the DB mascots (by name/id)
  ADDITIONAL_CHARACTERS.forEach(char => {
    if (!dbMascots.find(m => m.name === char.name)) {
      allDisplayMascots.push(char as Mascot);
    }
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
        >
          <ShoppingBag size={14} />
          Loja Brilha
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-primary mb-4"
        >
          Loja de Mascotes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Descubra novos amigos incríveis para acompanhar sua jornada de aprendizado! Cada mascote traz uma energia especial.
        </motion.p>
      </header>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-[2.5rem]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {allDisplayMascots.map((mascot, index) => (
              <MascotStoreCard 
                key={mascot.id} 
                mascot={mascot} 
                isOwned={ownedMascotIds.includes(mascot.id)}
                index={index}
                showCollectionButton={true}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {allDisplayMascots.length === 0 && !isLoading && (
        <div className="text-center py-20 bg-white/50 rounded-[3rem] border-4 border-dashed border-primary/10">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-black text-primary uppercase">Nenhum mascote encontrado</h3>
          <p className="text-muted-foreground font-bold">Tente buscar por outro nome ou mudar o filtro.</p>
        </div>
      )}
    </div>
  );
};

const TabButton = ({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap",
      active 
        ? "bg-primary text-white shadow-kid [--shadow-color:oklch(var(--primary-dark))]" 
        : "text-muted-foreground hover:bg-muted"
    )}
  >
    {icon}
    {label}
  </button>
);

const MascotStoreCard = ({ mascot, isOwned, index, showCollectionButton = false }: { mascot: Mascot, isOwned: boolean, index: number, showCollectionButton?: boolean }) => {
  const isPip = mascot.name === 'Pip';
  const rarity = mascot.category === 'primary' ? 'Oficial' : mascot.category === 'premium' ? 'Épico' : 'Comum';
  const rarityColor = mascot.category === 'primary' ? 'bg-primary' : mascot.category === 'premium' ? 'bg-purple-500' : 'bg-slate-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ delay: index * 0.05 }}
    >
      <KidCard className="group h-full flex flex-col overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300">
        <div className="relative h-56 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {isPip ? (
              <KidLiveMascot size="xl" showBadge={false} emotion="happy" className="animate-bounce-gentle" />

            ) : mascot.image_url ? (
              <img src={mascot.image_url} alt={mascot.name} className="w-full h-full object-contain drop-shadow-xl" />
            ) : (
              <span className="text-7xl">🧩</span>
            )}
          </div>


          <div className={cn(
            "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg",
            rarityColor
          )}>
            {rarity}
          </div>

          {isOwned && (
            <div className="absolute top-4 left-4 bg-success text-white p-1.5 rounded-full shadow-lg">
              <Star size={14} fill="white" />
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-black text-primary leading-tight mb-1 group-hover:text-secondary transition-colors">
              {mascot.name}
            </h3>
            <p className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest text-[10px]">
              {isPip ? 'Guardião Lendário' : 'Companheiro de Jornada'}
            </p>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 italic">
            "{mascot.description}"
          </p>

          <div className="mt-auto space-y-3">
            {isOwned ? (
              <div className="flex flex-col gap-2">
                <div className="w-full py-3 rounded-2xl bg-success/10 border-2 border-success/20 text-success text-center font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  <Star size={16} fill="currentColor" />
                  Já na Coleção
                </div>
                {isPip && (
                  <Link to="/colecao-pip" className="w-full">
                    <KidButton variant="secondary" className="w-full py-4 text-xs">
                      Ver Fantasias do Pip
                    </KidButton>
                  </Link>
                )}
              </div>
            ) : (
              <KidButton 
                variant="primary" 
                className="w-full py-6 text-lg group/btn"
                onClick={() => {}} // Futura integração de compra
              >
                <span className="flex items-center gap-2">
                  Ver Detalhes
                  <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </KidButton>
            )}
            
            {!isOwned && (
              <p className="text-[10px] text-center font-bold text-muted-foreground uppercase tracking-widest">
                Requer Nível {mascot.category === 'premium' ? '10' : '5'} + Moedas Brilha
              </p>
            )}
          </div>
        </div>
      </KidCard>
    </motion.div>
  );
};

export default MascotStorePage;
