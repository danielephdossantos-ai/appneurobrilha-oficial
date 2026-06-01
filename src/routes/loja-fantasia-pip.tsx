import { createFileRoute } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Shell } from '@/components/Layout';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { useAppState, Hiperfoco } from '@/core/store';
import { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import { Sparkles, ShoppingBag, Check, Star } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const Route = createFileRoute('/loja-fantasia-pip')({
  component: LojaFantasiaPipPage,
});

const CATEGORIES = [
  { id: 'dinossauros', name: 'Dinossauros', icon: '🦖' },
  { id: 'animais', name: 'Animais', icon: '🐶' },
  { id: 'minecraft', name: 'Minecraft', icon: '🧊' },
  { id: 'super-herois', name: 'Heróis', icon: '🦸‍♂️' },
  { id: 'super-heroinas', name: 'Heroínas', icon: '🦸‍♀️' },
  { id: 'princesas', name: 'Princesas', icon: '👑' },
  { id: 'monstros', name: 'Monstros', icon: '👾' },
];

const GENERATED_SKINS: Record<string, any[]> = {};

// Gerar 7 modelos para cada categoria
CATEGORIES.forEach(cat => {
  GENERATED_SKINS[cat.id] = Array.from({ length: 7 }).map((_, i) => ({
    id: `skin-${cat.id}-${i + 1}`,
    name: `Pip ${cat.name} ${i + 1}`,
    category: cat.id as Hiperfoco,
    price: 150 + (i * 50),
    image: PIP_SKINS[cat.id] || PIP_SKINS['dinossauros'], // Fallback seguro
    description: `Aumente sua diversão com o estilo ${cat.name}!`,
  }));
});

function LojaFantasiaPipPage() {
  const { activeChild, updateChild } = useAppState();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);

  const handleSelectSkin = (category: Hiperfoco) => {
    if (!activeChild) return;
    
    // Troca automática de hiperfoco para mudar a skin visual no app
    updateChild(activeChild.id, {
      hyperfocus_list: [category, ...(activeChild.hyperfocus_list || []).filter(h => h !== category)].slice(0, 5)
    });
    
    toast.success("Fantasia Trocada!", {
      description: "O Pip já vestiu o novo visual!",
      icon: <Sparkles className="text-sun" />
    });
  };

  return (
    <Shell>
      <div className="container mx-auto py-8 px-4">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
          >
            <ShoppingBag size={14} />
            Mercado Brilha
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-4"
          >
            Loja de Mascotes
          </motion.h1>

          {/* Navigation Tabs for Categories within Mascot Store */}
          <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
            <Link to="/loja-mascotes">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap text-muted-foreground hover:bg-muted">
                <Star size={18} />
                Mascotes Pip
              </button>
            </Link>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap bg-primary text-white shadow-kid [--shadow-color:oklch(var(--primary-dark))]">
              <Sparkles size={18} />
              Fantasias do Pip
            </button>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha um visual incrível e o Pip vai se transformar na hora, igual ao Tom Gato!
          </p>
        </header>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                selectedCategory === cat.id 
                  ? "bg-primary text-white shadow-kid [--shadow-color:oklch(var(--primary-dark))]" 
                  : "bg-white text-muted-foreground hover:bg-primary/5 border-2 border-primary/10"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grade de Fantasias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {GENERATED_SKINS[selectedCategory].map((skin, index) => {
              const isCurrent = activeChild?.hyperfocus_list?.[0] === skin.category;
              
              return (
                <motion.div
                  key={skin.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <KidCard className={`h-full flex flex-col items-center text-center p-6 border-4 transition-all ${
                    isCurrent ? "border-primary bg-primary/5" : "border-primary/10 hover:border-primary/30"
                  }`}>
                    <div className="relative w-40 h-40 mb-6 bg-gradient-to-b from-primary/5 to-transparent rounded-full flex items-center justify-center">
                      <img src={skin.image} alt={skin.name} className="w-full h-full object-contain drop-shadow-xl" />
                      {isCurrent && (
                        <div className="absolute -top-2 -right-2 bg-success text-white p-2 rounded-full shadow-lg">
                          <Check size={20} strokeWidth={4} />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-black text-primary mb-2">{skin.name}</h3>
                    <p className="text-xs text-muted-foreground mb-6 flex-1 italic">{skin.description}</p>
                    
                    <KidButton
                      variant={isCurrent ? "secondary" : "primary"}
                      onClick={() => handleSelectSkin(skin.category)}
                      className="w-full"
                    >
                      {isCurrent ? "Vestido" : (
                        <span className="flex items-center gap-2">
                          <Star size={16} fill="currentColor" />
                          Vestir Agora
                        </span>
                      )}
                    </KidButton>
                  </KidCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Shell>
  );
}
