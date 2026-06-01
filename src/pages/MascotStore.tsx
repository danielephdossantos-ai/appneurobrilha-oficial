import React, { useState, useEffect } from 'react';
import { useMascot, Mascot } from '@/contexts/MascotContext';
import { Shell } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { ShoppingBag, Lock, Star, Search, Heart, Sparkles, ChevronRight, User, Check } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'all' | 'locked' | 'owned' | 'pip-collection' | 'dinossauros' | 'espaco' | 'magia' | 'veiculos' | 'animais'>('all');
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
  }, [allMascots.length]); // Re-fetch se o número de mascotes mudar

  const ownedMascotIds = userMascots.map(um => um.mascot_id);

  const filteredMascots = allMascots.filter(mascot => {
    const category = mascot.category?.trim().toLowerCase();
    const tab = activeTab.toLowerCase();
    
    // Filtro de busca
    const matchesSearch = !searchQuery || 
                         mascot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mascot.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    // Lógica das Abas
    if (tab === 'all') return true;
    if (tab === 'locked') return !ownedMascotIds.includes(mascot.id);
    if (tab === 'owned') return ownedMascotIds.includes(mascot.id);
    if (tab === 'pip-collection') return mascot.name === 'Pip' || category === 'primary';
    
    // Categorias dinâmicas
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
    { key: 'super-herois', name: 'Pip Super', title: 'Super-Heróis', image: PIP_SKINS['super-herois'], description: 'Salvando o dia com o poder do estudo!' },
    { key: 'princesas', name: 'Pip Realeza', title: 'Princesas', image: PIP_SKINS.princesas, description: 'Coroado de gentileza e sabedoria.' },
    { key: 'minecraft', name: 'Pip Builder', title: 'Minecraft', image: PIP_SKINS.minecraft, description: 'Construindo aventuras bloco a bloco.' },
    { key: 'carros', name: 'Pip Piloto', title: 'Carros', image: PIP_SKINS.carros, description: 'Acelerando rumo a novas conquistas.' },
    { key: 'trens', name: 'Pip Maquinista', title: 'Trens', image: PIP_SKINS.trens, description: 'Tchu-tchuuu! Bora pra próxima estação.' },
    { key: 'robos', name: 'Pip Robô', title: 'Robôs', image: PIP_SKINS.robos, description: 'Tecnologia e curiosidade juntos.' },
    { key: 'veiculos', name: 'Pip Aventureiro', title: 'Veículos', image: PIP_SKINS.veiculos, description: 'Mapa, binóculos e muita exploração.' },
  ];

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

      {/* Barra de Pesquisa e Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Procurar um amigo novo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-border focus:border-primary outline-none transition-all font-bold text-foreground shadow-sm"
          />
        </div>
        
        <div className="flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-2xl border-2 border-border/50 shadow-sm overflow-x-auto no-scrollbar mb-4">
          <TabButton 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')} 
            label="Ver Tudo" 
            icon={<ShoppingBag size={18} />}
          />
          <TabButton 
            active={activeTab === 'owned'} 
            onClick={() => setActiveTab('owned')} 
            label="Meus Amigos" 
            icon={<User size={18} />}
          />
          <TabButton 
            active={activeTab === 'pip-collection'} 
            onClick={() => setActiveTab('pip-collection')} 
            label="Skins Pip" 
            icon={<Sparkles size={18} />}
          />
          <div className="w-px h-8 bg-border mx-2 self-center" />
          <TabButton 
            active={activeTab === 'dinossauros'} 
            onClick={() => setActiveTab('dinossauros')} 
            label="Dinos" 
            icon={<span className="text-xl">🦖</span>}
          />
          <TabButton 
            active={activeTab === 'espaco'} 
            onClick={() => setActiveTab('espaco')} 
            label="Espaço" 
            icon={<span className="text-xl">🚀</span>}
          />
          <TabButton 
            active={activeTab === 'magia'} 
            onClick={() => setActiveTab('magia')} 
            label="Magia" 
            icon={<span className="text-xl">✨</span>}
          />
          <TabButton 
            active={activeTab === 'veiculos'} 
            onClick={() => setActiveTab('veiculos')} 
            label="Veículos" 
            icon={<span className="text-xl">🏎️</span>}
          />
          <TabButton 
            active={activeTab === 'animais'} 
            onClick={() => setActiveTab('animais')} 
            label="Animais" 
            icon={<span className="text-xl">🐾</span>}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-[2.5rem]" />
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {activeTab === 'pip-collection' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pipSkinsList.map((skin, i) => {
                const isUnlocked = unlockedPipSkins.has(skin.key);
                return (
                  <motion.div
                    key={skin.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <KidCard className="h-full flex flex-col overflow-hidden group border-2 border-border hover:border-primary/30">
                      <div className="relative h-56 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                          <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                        </div>
                        <img
                          src={skin.image}
                          alt={skin.name}
                          className={cn(
                            'relative z-10 w-44 h-44 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110',
                            !isUnlocked && 'grayscale opacity-60'
                          )}
                          draggable={false}
                        />
                        <div
                          className={cn(
                            'absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg flex items-center gap-1',
                            isUnlocked ? 'bg-success' : 'bg-slate-500'
                          )}
                        >
                          {isUnlocked ? <><Check size={12} /> Liberado</> : <><Lock size={12} /> Bloqueado</>}
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest">
                          {skin.title}
                        </p>
                        <h3 className="text-xl font-black text-primary leading-tight">
                          {skin.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 italic flex-1">
                          "{skin.description}"
                        </p>
                      </div>
                    </KidCard>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredMascots.map((mascot, index) => (
                  <MascotStoreCard 
                    key={mascot.id} 
                    mascot={mascot} 
                    isOwned={ownedMascotIds.includes(mascot.id)}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {(activeTab !== 'pip-collection' && filteredMascots.length === 0 && !isLoading) && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-black text-primary">Nenhum mascote encontrado</h3>
          <p className="text-muted-foreground">Tente buscar por outro nome ou mudar o filtro.</p>
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

const MascotStoreCard = ({ mascot, isOwned, index }: { mascot: Mascot, isOwned: boolean, index: number }) => {
  const isPip = mascot.name === 'Pip';
  const categoryLabels: Record<string, string> = {
    'dinossauros': 'Dino Amigo',
    'espaco': 'Explorador',
    'magia': 'Mágico',
    'veiculos': 'Veloz',
    'animais': 'Pet Fofo',
    'primary': 'Oficial'
  };
  
  const rarity = categoryLabels[mascot.category] || 'Mascote';
  const rarityColors: Record<string, string> = {
    'dinossauros': 'bg-green-500',
    'espaco': 'bg-blue-600',
    'magia': 'bg-purple-500',
    'veiculos': 'bg-orange-500',
    'animais': 'bg-pink-500',
    'primary': 'bg-primary'
  };
  const rarityColor = rarityColors[mascot.category] || 'bg-slate-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ delay: index * 0.05 }}
    >
      <KidCard className="group h-full flex flex-col overflow-hidden border-4 border-white/50 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:border-primary/50 transition-all duration-500 rounded-[3rem] shadow-xl hover:shadow-2xl">
        <div className="relative h-72 bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center p-4 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {isPip ? (
              <KidLiveMascot size="xl" showBadge={false} emotion="happy" className="animate-bounce-gentle" />

            ) : mascot.image_url ? (
              <div className="relative w-full h-full">
                <img 
                  src={mascot.image_url} 
                  alt={mascot.name} 
                  className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 transition-all duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
              </div>
            ) : (
              <span className="text-7xl animate-pulse">🧩</span>
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
              <div className="w-full py-3 rounded-2xl bg-success/10 border-2 border-success/20 text-success text-center font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <Star size={16} fill="currentColor" />
                Já na Coleção
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
