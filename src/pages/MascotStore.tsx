import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useMascot, Mascot } from '@/contexts/MascotContext';
import { motion, AnimatePresence } from 'framer-motion';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { ShoppingBag, Star, Sparkles, ChevronRight } from 'lucide-react';
import { supabase } from '@/database/supabase/client';
import pipMascot from '@/assets/pip-mascot.png';
import pipDinossauros from '@/assets/pip-dinossauros.png';
import pipEspaco from '@/assets/pip-espaco.png';
import pipArte from '@/assets/pip-arte.png';
import pipAnimais from '@/assets/pip-animais.png';
import pipMusica from '@/assets/pip-musica.png';
import pipFazendinha from '@/assets/pip-fazendinha.png';
import pipSuperHerois from '@/assets/pip-super-herois.png';
import pipPrincesas from '@/assets/pip-princesas.png';
import pipMinecraft from '@/assets/pip-minecraft.png';
import pipCarros from '@/assets/pip-carros.png';
import pipTrens from '@/assets/pip-trens.png';
import pipRobos from '@/assets/pip-robos.png';
import pipVeiculos from '@/assets/pip-veiculos.png';
import KidLiveMascot from '@/components/ui/KidLiveMascot';
import { cn } from '@/utils/utils';


const ADDITIONAL_CHARACTERS = [
  { id: 'pip-dino-t-rex', name: 'Pip T-Rex', description: 'O rei dos dinossauros com dentes grandes e um rugido amigável!', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Rex&backgroundColor=b6e3f4' },
  { id: 'pip-dino-triceratops', name: 'Pip Triceratops', description: 'Três chifres e um escudo colorido para muitas aventuras jurássicas.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Tina&backgroundColor=ffdfbf' },
  { id: 'pip-dino-pterodactilo', name: 'Pip Pterodáctilo', description: 'Voando alto com asas enormes para ver o mundo de cima!', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Pter&backgroundColor=c0aede' },
  { id: 'pip-dino-braquiossauro', name: 'Pip Braquiossauro', description: 'O gigante gentil com pescoço longo para alcançar as estrelas.', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Braq&backgroundColor=d1d4f9' },
  { id: 'pip-dino-estegossauro', name: 'Pip Estegossauro', description: 'Com placas coloridas nas costas e muita vontade de brincar!', category: 'premium', image_url: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Steg&backgroundColor=ffd5dc' },
  { id: 'pip-espaco', name: 'Pip Astronauta', description: 'Pronto para decolar até as estrelas!', category: 'premium', image_url: pipEspaco },
  { id: 'pip-arte', name: 'Pip Artista', description: 'Pincel na mão e muita cor pra criar.', category: 'premium', image_url: pipArte },
  { id: 'pip-animais', name: 'Pip Veterinário', description: 'Cuidando dos amiguinhos com muito carinho.', category: 'premium', image_url: pipAnimais },
  { id: 'pip-musica', name: 'Pip Maestro', description: 'Vamos reger uma sinfonia de aprendizado!', category: 'premium', image_url: pipMusica },
  { id: 'pip-fazendinha', name: 'Pip Fazendeiro', description: 'Plantando aprendizado e colhendo conquistas.', category: 'premium', image_url: pipFazendinha },
  { id: 'pip-super', name: 'Pip Super', description: 'Salvando o dia com o poder do estudo!', category: 'premium', image_url: pipSuperHerois },
  { id: 'pip-princesas', name: 'Pip Realeza', description: 'Coroado de gentileza e sabedoria.', category: 'premium', image_url: pipPrincesas },
  { id: 'pip-minecraft', name: 'Pip Builder', description: 'Construindo aventuras bloco a bloco.', category: 'premium', image_url: pipMinecraft },
  { id: 'pip-carros', name: 'Pip Piloto', description: 'Acelerando rumo a novas conquistas.', category: 'premium', image_url: pipCarros },
  { id: 'pip-trens', name: 'Pip Maquinista', description: 'Tchu-tchuuu! Bora pra próxima estação.', category: 'premium', image_url: pipTrens },
  { id: 'pip-robos', name: 'Pip Robô', description: 'Tecnologia e curiosidade juntos.', category: 'premium', image_url: pipRobos },
  { id: 'pip-veiculos', name: 'Pip Aventureiro', description: 'Mapa, binóculos e muita exploração.', category: 'premium', image_url: pipVeiculos },
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
