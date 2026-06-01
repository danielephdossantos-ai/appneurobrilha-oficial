import React, { useState, useEffect } from 'react';
import { useMascot, Mascot } from '@/contexts/MascotContext';
import { Shell } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { ShoppingBag, Lock, Star, Search, Heart, Sparkles, ChevronRight, User, Check, Zap } from 'lucide-react';
import { supabase } from '@/database/supabase/client';
import pipMascot from '@/assets/pip-mascot.png';
import KidLiveMascot, { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';
import { useAppState } from '@/core/store';

const MascotStorePage: React.FC = () => {
  const { userMascots } = useMascot();
  const { activeChild } = useAppState();
  const [allMascots, setAllMascots] = useState<Mascot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'owned' | 'pip-collection' | 'dinossauros' | 'espaco' | 'magia' | 'veiculos' | 'animais'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAllMascots = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await (supabase as any)
          .from('mascots')
          .select('*')
          .order('name');

        if (error) throw error;
        setAllMascots(data || []);
      } catch (err) {
        console.error('Error fetching mascots from store:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMascots();
  }, []);

  const ownedMascotIds = userMascots.map(um => um.mascot_id);

  const filteredMascots = allMascots.filter(mascot => {
    const category = mascot.category?.trim().toLowerCase();
    const tab = activeTab.toLowerCase();
    
    const matchesSearch = !searchQuery || 
                         mascot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mascot.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (tab === 'all') return true;
    if (tab === 'owned') return ownedMascotIds.includes(mascot.id);
    if (tab === 'pip-collection') return mascot.name === 'Pip' || category === 'primary';
    
    return category === tab;
  });

  const unlockedPipSkins = new Set<string>([
    'original',
    ...((activeChild?.hyperfocus_list as string[]) || []),
  ]);

  const pipSkinsList = [
    { key: 'original', name: 'Pip Clássico', title: 'O Guardião dos Desafios', image: pipMascot, description: 'A forma original do Pip, sempre pronto pra aventura.' },
    { key: 'dinossauros', name: 'Pip Explorador', title: 'Dinossauros', image: PIP_SKINS.dinossauros, description: 'Vamos rugir e descobrir o mundo jurássico!' },
    { key: 'espaco', name: 'Pip Astronauta', title: 'Espaço', image: PIP_SKINS.espaco, description: 'Pronto para decolar até as estrelas!' },
    { key: 'arte', name: 'Pip Artista', title: 'Arte', image: PIP_SKINS.arte, description: 'Pincel na mão e muita cor pra criar.' },
    { key: 'animais', name: 'Pip Veterinário', title: 'Animais', image: PIP_SKINS.animais, description: 'Cuidando dos amiguinhos com muito carinho.' },
    { key: 'musica', name: 'Pip Maestro', title: 'Música', image: PIP_SKINS.musica, description: 'Vamos reger uma sinfonia de aprendizado!' },
    { key: 'fazendinha', name: 'Pip Fazendeiro', title: 'Fazendinha', image: PIP_SKINS.fazendinha, description: 'Plantando aprendizado e colhendo conquistas.' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-primary font-black uppercase tracking-widest text-sm mb-6 shadow-xl border-4 border-primary/20"
          >
            <Sparkles className="text-secondary animate-pulse" size={20} />
            Mundo dos Amigos
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-primary mb-6 tracking-tighter drop-shadow-lg"
          >
            Loja Brilha
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary/70 text-xl max-w-2xl mx-auto font-bold leading-relaxed"
          >
            Escolha seu novo companheiro de aventuras e colecione todos os amigos mágicos!
          </motion.p>
        </header>

        {/* Custom Tabs Navigation - Toy Box Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <CategoryTab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')} 
            label="Tudo" 
            emoji="🌈"
            color="bg-primary"
          />
          <CategoryTab 
            active={activeTab === 'owned'} 
            onClick={() => setActiveTab('owned')} 
            label="Meus" 
            emoji="⭐️"
            color="bg-success"
          />
          <CategoryTab 
            active={activeTab === 'pip-collection'} 
            onClick={() => setActiveTab('pip-collection')} 
            label="Pip" 
            emoji="🧩"
            color="bg-secondary"
          />
          <CategoryTab 
            active={activeTab === 'dinossauros'} 
            onClick={() => setActiveTab('dinossauros')} 
            label="Dinos" 
            emoji="🦖"
            color="bg-green-500"
          />
          <CategoryTab 
            active={activeTab === 'espaco'} 
            onClick={() => setActiveTab('espaco')} 
            label="Espaço" 
            emoji="🚀"
            color="bg-blue-600"
          />
          <CategoryTab 
            active={activeTab === 'magia'} 
            onClick={() => setActiveTab('magia')} 
            label="Magia" 
            emoji="✨"
            color="bg-purple-500"
          />
          <CategoryTab 
            active={activeTab === 'veiculos'} 
            onClick={() => setActiveTab('veiculos')} 
            label="Veloz" 
            emoji="🏎️"
            color="bg-orange-500"
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="h-96 bg-white/50 animate-pulse rounded-[3rem] border-4 border-white" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <AnimatePresence mode="popLayout">
              {activeTab === 'pip-collection' ? (
                pipSkinsList.map((skin, i) => (
                  <PipSkinCard 
                    key={skin.key} 
                    skin={skin} 
                    isUnlocked={unlockedPipSkins.has(skin.key)} 
                    index={i} 
                  />
                ))
              ) : (
                filteredMascots.map((mascot, index) => (
                  <MascotToyCard 
                    key={mascot.id} 
                    mascot={mascot} 
                    isOwned={ownedMascotIds.includes(mascot.id)}
                    index={index}
                  />
                ))
              )}
            </AnimatePresence>
          </div>
        )}

        {(!isLoading && filteredMascots.length === 0 && activeTab !== 'pip-collection') && (
          <div className="text-center py-32 bg-white/30 backdrop-blur-md rounded-[4rem] border-4 border-dashed border-primary/20">
            <div className="text-9xl mb-8 animate-bounce">🔍</div>
            <h3 className="text-4xl font-black text-primary mb-4">Ué, cadê os amigos?</h3>
            <p className="text-primary/60 text-xl font-bold">Tente mudar o filtro ou buscar outro nome!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryTab = ({ active, onClick, label, emoji, color }: { active: boolean, onClick: () => void, label: string, emoji: string, color: string }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-8 py-4 rounded-3xl font-black text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg border-b-4",
      active 
        ? `${color} text-white border-black/20 shadow-xl -translate-y-1` 
        : "bg-white text-primary border-transparent hover:bg-white/90"
    )}
  >
    <span className="text-2xl">{emoji}</span>
    {label}
  </button>
);

const MascotToyCard = ({ mascot, isOwned, index }: { mascot: Mascot, isOwned: boolean, index: number }) => {
  const isPip = mascot.name === 'Pip';
  const categoryColors: Record<string, string> = {
    'dinossauros': 'from-green-400 to-green-600',
    'espaco': 'from-blue-400 to-blue-600',
    'magia': 'from-purple-400 to-purple-600',
    'veiculos': 'from-orange-400 to-orange-600',
    'animais': 'from-pink-400 to-pink-600',
    'primary': 'from-primary/80 to-primary'
  };
  const color = categoryColors[mascot.category] || 'from-slate-400 to-slate-600';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 30 }}
      transition={{ type: "spring", damping: 15, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-white rounded-[3rem] p-4 shadow-2xl border-4 border-white transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
        <div className={cn(
          "relative h-64 rounded-[2.5rem] bg-gradient-to-br flex items-center justify-center p-6 overflow-hidden shadow-inner",
          color
        )}>
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-48 h-48 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            {isPip ? (
              <KidLiveMascot size="xl" showBadge={false} emotion="happy" className="scale-75" />
            ) : (
              <img 
                src={mascot.image_url} 
                alt={mascot.name} 
                className="w-full h-full object-contain filter brightness-110 contrast-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${mascot.name}`;
                }}
              />
            )}
          </div>

          {isOwned && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border-2 border-primary/20">
              <Star className="text-secondary fill-secondary" size={20} />
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col items-center text-center">
          <h3 className="text-3xl font-black text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors">
            {mascot.name}
          </h3>
          <p className="text-primary/60 text-sm font-bold line-clamp-2 italic mb-6">
            "{mascot.description}"
          </p>

          <div className="mt-auto w-full">
            {isOwned ? (
              <div className="w-full py-4 rounded-3xl bg-primary/5 text-primary/40 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 border-2 border-dashed border-primary/20">
                <Check size={16} /> Já é seu!
              </div>
            ) : (
              <KidButton 
                variant="primary" 
                className="w-full py-7 text-xl rounded-[2rem] shadow-kid [--shadow-color:oklch(var(--primary-dark))]"
              >
                Conhecer!
              </KidButton>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PipSkinCard = ({ skin, isUnlocked, index }: { skin: any, isUnlocked: boolean, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    className="group"
  >
    <div className="bg-white rounded-[3rem] p-4 shadow-2xl border-4 border-white transition-all duration-500 group-hover:-translate-y-4">
      <div className={cn(
        "relative h-64 rounded-[2.5rem] bg-gradient-to-br from-secondary/40 to-secondary flex items-center justify-center p-6 shadow-inner",
        !isUnlocked && "grayscale opacity-80"
      )}>
        <img 
          src={skin.image} 
          alt={skin.name} 
          className="w-48 h-48 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110" 
        />
        <div className={cn(
          "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest",
          isUnlocked ? "bg-success" : "bg-slate-500"
        )}>
          {isUnlocked ? "Livre" : "Bloqueado"}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-black text-primary">{skin.name}</h3>
        <p className="text-primary/60 text-xs font-bold mt-2 italic">"{skin.description}"</p>
      </div>
    </div>
  </motion.div>
);

export default MascotStorePage;
