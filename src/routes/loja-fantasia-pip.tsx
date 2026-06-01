import { createFileRoute } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Shell } from '@/components/Layout';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { useAppState, Hiperfoco } from '@/core/store';
import { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import { Sparkles, ShoppingBag, Check, Star } from 'lucide-react';
import pipMascot from '@/assets/pip-mascot.png';
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

const HERO_VARIANTS = [
  { name: "Batman", color: "#1a1a1a", secondary: "#fde047", logo: "🦇" },
  { name: "Super-Homem", color: "#1d4ed8", secondary: "#dc2626", logo: "S" },
  { name: "Hulk", color: "#166534", secondary: "#6b21a8", logo: "👊" },
  { name: "Homem de Ferro", color: "#991b1b", secondary: "#f59e0b", logo: "⚙️" },
  { name: "Thor", color: "#334155", secondary: "#ef4444", logo: "🔨" },
  { name: "Homem-Aranha", color: "#b91c1c", secondary: "#1d4ed8", logo: "🕸️" },
  { name: "Homem-Formiga", color: "#000000", secondary: "#dc2626", logo: "🐜" }
];

const GENERAL_VARIANTS = [
  { name: "Clássico", color: "#3b82f6" },
  { name: "Real", color: "#a855f7" },
  { name: "Galáctico", color: "#1e1b4b" },
  { name: "Místico", color: "#ec4899" },
  { name: "Lendário", color: "#eab308" },
  { name: "Aventureiro", color: "#10b981" },
  { name: "Supremo", color: "#ef4444" }
];

// Gerar modelos únicos para cada categoria seguindo estritamente o padrão visual do Pip
CATEGORIES.forEach(cat => {
  const variants = cat.id === 'super-herois' ? HERO_VARIANTS : GENERAL_VARIANTS;
  const baseImage = PIP_SKINS[cat.id] || PIP_SKINS['dinossauros'] || pipMascot;
  
  GENERATED_SKINS[cat.id] = variants.map((variant, i) => {
    return {
      id: `skin-${cat.id}-${i + 1}`,
      name: cat.id === 'super-herois' ? `Pip ${variant}` : `Pip ${cat.name} ${variant}`,
      category: cat.id as Hiperfoco,
      price: 150 + (i * 50),
      // Voltando a usar a imagem base do Pip para cada categoria para manter o padrão
      image: baseImage,
      description: cat.id === 'super-herois' 
        ? `Pip com os superpoderes do ${variant}!` 
        : `Um visual único de ${cat.name} no estilo ${variant}!`,
    };
  });
});

function LojaFantasiaPipPage() {
  const { activeChild, updateChild } = useAppState();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[3].id); // Começa na categoria de heróis (index 3)

  const handleSelectSkin = (category: Hiperfoco, imageUrl: string) => {
    if (!activeChild) return;
    
    // Salvando a skin específica nos flags do perfil para troca automática
    const updatedFlags = {
      ...(activeChild.flags || {}),
      active_skin_url: imageUrl
    };

    updateChild(activeChild.id, {
      flags: updatedFlags as any,
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
            Guarda-Roupa do Pip
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-4"
          >
            Loja de Fantasias
          </motion.h1>
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
              const isCurrent = (activeChild?.flags as any)?.active_skin_url === skin.image;
              
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
                      onClick={() => handleSelectSkin(skin.category, skin.image)}
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
