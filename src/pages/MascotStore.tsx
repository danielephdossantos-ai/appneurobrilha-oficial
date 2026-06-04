import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useMascot, Mascot } from '@/contexts/MascotContext';
import { motion, AnimatePresence } from 'framer-motion';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { ShoppingBag, Star, Sparkles, ChevronRight, Globe2, Check, Lock } from 'lucide-react';
import { supabase } from '@/database/supabase/client';
import { useAppState } from '@/core/store';
import { EggHatchCinematic, shouldShowEggHatch } from '@/components/lumi/EggHatchCinematic';
import lumiMascot from '@/assets/pip-mascot.png';
import lumiEgg from '@/assets/pip-egg.png';
import lumiHatching from '@/assets/pip-hatching.png';
import lumiBaby from '@/assets/pip-baby.png';
import lumiDinossauros from '@/assets/pip-dinossauros.png';
import lumiEspaco from '@/assets/pip-espaco.png';
import lumiArte from '@/assets/pip-arte.png';
import lumiAnimais from '@/assets/pip-animais.png';
import lumiMusica from '@/assets/pip-musica.png';
import lumiFazendinha from '@/assets/pip-fazendinha.png';
import lumiSuperHerois from '@/assets/pip-super-herois.png';
import lumiPrincesas from '@/assets/pip-princesas.png';
import lumiMinecraft from '@/assets/pip-minecraft.png';
import lumiCarros from '@/assets/pip-carros.png';
import lumiTrens from '@/assets/pip-trens.png';
import lumiRobos from '@/assets/pip-robos.png';
import lumiVeiculos from '@/assets/pip-veiculos.png';
import lumaMascot from '@/assets/pip-girl-mascot.png';
import lumaEgg from '@/assets/pipa-egg.png';
import lumaHatching from '@/assets/pipa-hatching.png';
import lumaBaby from '@/assets/pipa-baby.png';
import lumaPrincesa from '@/assets/pip-girl-princesas.png';
import lumaUnicornio from '@/assets/pip-girl-unicornio.png';
import lumaDoutora from '@/assets/pip-girl-doutora.png';
import lumaAstronauta from '@/assets/pip-girl-astronauta.png';
import lumaBailarina from '@/assets/pip-girl-bailarina.png';
import lumaFada from '@/assets/pip-girl-fada.png';
import lumaSereia from '@/assets/pip-girl-sereia.png';
import lumaConfeiteira from '@/assets/pip-girl-confeiteira.png';
import lumaVeterinaria from '@/assets/pip-girl-veterinaria.png';
import lumaProfessora from '@/assets/pip-girl-professora.png';
import lumaArte from '@/assets/pip-girl-arte.png';
import lumaMusica from '@/assets/pip-girl-musica.png';
import lumaSuperHeroina from '@/assets/pip-girl-super-heroina.png';
import KidLiveMascot from '@/components/ui/KidLiveMascot';
import { LumiEvolution } from '@/components/lumi/LumiEvolution';
import { cn } from '@/utils/utils';
import { useHiperfoco } from '@/context/HiperfocoContext';
import { toast } from 'sonner';

// World thumbnails (cenários) — using the same illustrated worlds from Neuro-Treino
import worldAnimais from '@/assets/neuro-treino/worlds/animais.jpg';
import worldArte from '@/assets/neuro-treino/worlds/arte.jpg';
import worldCarros from '@/assets/neuro-treino/worlds/carros.jpg';
import worldDinossauros from '@/assets/neuro-treino/worlds/dinossauros.jpg';
import worldEspaco from '@/assets/neuro-treino/worlds/espaco.jpg';
import worldFazendinha from '@/assets/neuro-treino/worlds/fazendinha.jpg';
import worldHerois from '@/assets/neuro-treino/worlds/herois.jpg';
import worldMinecraft from '@/assets/neuro-treino/worlds/minecraft.jpg';
import worldMusica from '@/assets/neuro-treino/worlds/musica.jpg';
import worldPrincesas from '@/assets/neuro-treino/worlds/princesas.jpg';
import worldRobos from '@/assets/neuro-treino/worlds/robos.jpg';
import worldTrens from '@/assets/neuro-treino/worlds/trens.jpg';
import worldVeiculos from '@/assets/neuro-treino/worlds/veiculos.jpg';
import worldOceano from '@/assets/neuro-treino/worlds/oceano.jpg';
import worldFloresta from '@/assets/neuro-treino/worlds/floresta.jpg';
import worldCastelo from '@/assets/neuro-treino/worlds/castelo.jpg';

type WorldOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  image: string;
  hiperfocoId?: 'minecraft' | 'dinossauros' | 'herois' | 'animais' | 'carros';
  customLabel?: string;
};

const WORLDS: WorldOption[] = [
  { id: 'w-dino', label: 'Dinossauros', emoji: '🦖', description: 'Era jurássica cheia de rugidos e fósseis.', image: worldDinossauros, hiperfocoId: 'dinossauros' },
  { id: 'w-minecraft', label: 'Minecraft', emoji: '🟩', description: 'Construa aventuras bloco a bloco.', image: worldMinecraft, hiperfocoId: 'minecraft' },
  { id: 'w-espaco', label: 'Espaço', emoji: '🚀', description: 'Foguetes, planetas e estrelas brilhando.', image: worldEspaco, customLabel: 'Espaço' },
  { id: 'w-herois', label: 'Super-Heróis', emoji: '🦸', description: 'Poderes incríveis para salvar o dia!', image: worldHerois, hiperfocoId: 'herois' },
  { id: 'w-animais', label: 'Animais', emoji: '🐾', description: 'Floresta cheia de amigos peludos.', image: worldAnimais, hiperfocoId: 'animais' },
  { id: 'w-carros', label: 'Carros', emoji: '🚗', description: 'Acelere na pista de corrida!', image: worldCarros, hiperfocoId: 'carros' },
  { id: 'w-fazendinha', label: 'Fazendinha', emoji: '🚜', description: 'Bichinhos, plantação e muito sol.', image: worldFazendinha, customLabel: 'Fazendinha' },
  { id: 'w-arte', label: 'Arte', emoji: '🎨', description: 'Cores, pincéis e muita imaginação.', image: worldArte, customLabel: 'Arte' },
  { id: 'w-musica', label: 'Música', emoji: '🎵', description: 'Instrumentos mágicos e ritmo no ar.', image: worldMusica, customLabel: 'Música' },
  { id: 'w-princesas', label: 'Princesas', emoji: '👑', description: 'Castelos encantados e reinos mágicos.', image: worldPrincesas, customLabel: 'Princesas' },
  { id: 'w-robos', label: 'Robôs', emoji: '🤖', description: 'Tecnologia, engrenagens e futuro.', image: worldRobos, customLabel: 'Robôs' },
  { id: 'w-trens', label: 'Trens', emoji: '🚂', description: 'Estações, trilhos e grandes viagens.', image: worldTrens, customLabel: 'Trens' },
  { id: 'w-veiculos', label: 'Veículos', emoji: '🚙', description: 'Caminhões, motos e muita ação.', image: worldVeiculos, customLabel: 'Veículos' },
  { id: 'w-oceano', label: 'Oceano', emoji: '🐠', description: 'Mergulhe no fundo do mar cheio de vida.', image: worldOceano, customLabel: 'Oceano' },
  { id: 'w-floresta', label: 'Floresta Encantada', emoji: '🍄', description: 'Trilhas mágicas, fadas e cogumelos brilhantes.', image: worldFloresta, customLabel: 'Floresta' },
  { id: 'w-castelo', label: 'Castelo Mágico', emoji: '🏰', description: 'Torres nas nuvens com dragões amigos.', image: worldCastelo, customLabel: 'Castelo' },
];


const ADDITIONAL_CHARACTERS = [
  { id: 'lumi-dino', name: 'Lumi Explorador', description: 'Vamos rugir e descobrir o mundo jurássico!', category: 'premium', image_url: lumiDinossauros },
  { id: 'lumi-espaco', name: 'Lumi Astronauta', description: 'Pronto para decolar até as estrelas!', category: 'premium', image_url: lumiEspaco },
  { id: 'lumi-arte', name: 'Lumi Artista', description: 'Pincel na mão e muita cor pra criar.', category: 'premium', image_url: lumiArte },
  { id: 'lumi-animais', name: 'Lumi Veterinário', description: 'Cuidando dos amiguinhos com muito carinho.', category: 'premium', image_url: lumiAnimais },
  { id: 'lumi-musica', name: 'Lumi Maestro', description: 'Vamos reger uma sinfonia de aprendizado!', category: 'premium', image_url: lumiMusica },
  { id: 'lumi-fazendinha', name: 'Lumi Fazendeiro', description: 'Plantando aprendizado e colhendo conquistas.', category: 'premium', image_url: lumiFazendinha },
  { id: 'lumi-super', name: 'Lumi Super', description: 'Salvando o dia com o poder do estudo!', category: 'premium', image_url: lumiSuperHerois },
  { id: 'lumi-princesas', name: 'Lumi Realeza', description: 'Coroado de gentileza e sabedoria.', category: 'premium', image_url: lumiPrincesas },
  { id: 'lumi-minecraft', name: 'Lumi Builder', description: 'Construindo aventuras bloco a bloco.', category: 'premium', image_url: lumiMinecraft },
  { id: 'lumi-carros', name: 'Lumi Piloto', description: 'Acelerando rumo a novas conquistas.', category: 'premium', image_url: lumiCarros },
  { id: 'lumi-trens', name: 'Lumi Maquinista', description: 'Tchu-tchuuu! Bora pra próxima estação.', category: 'premium', image_url: lumiTrens },
  { id: 'lumi-robos', name: 'Lumi Robô', description: 'Tecnologia e curiosidade juntos.', category: 'premium', image_url: lumiRobos },
  { id: 'lumi-veiculos', name: 'Lumi Aventureiro', description: 'Mapa, binóculos e muita exploração.', category: 'premium', image_url: lumiVeiculos },
  { id: 'lumi-ovo', name: 'Ovo do Lumi', description: 'O começo de uma grande amizade, cheio de brilho e potencial.', category: 'premium', image_url: lumiEgg },
  { id: 'lumi-nascendo', name: 'Lumi Nascendo', description: 'A casquinha rachou e uma nova aventura vai começar.', category: 'premium', image_url: lumiHatching },
  { id: 'lumi-bebe', name: 'Lumi Bebê', description: 'Pequenino, curioso e pronto para seus primeiros desafios.', category: 'premium', image_url: lumiBaby },
  { id: 'luma-ovo', name: 'Ovo da Luma', description: 'Um ovo encantado guardando a doçura e coragem da Luma.', category: 'premium', image_url: lumaEgg },
  { id: 'luma-nascendo', name: 'Luma Nascendo', description: 'A Luma está chegando ao mundo com muito brilho.', category: 'premium', image_url: lumaHatching },
  { id: 'luma-bebe', name: 'Luma Bebê', description: 'A versão bebê da Luma, fofa, alegre e cheia de ternura.', category: 'premium', image_url: lumaBaby },
  { id: 'luma-original', name: 'Luma Clássica', description: 'A forma original da Luma, doce e cheia de coragem.', category: 'premium', image_url: lumaMascot },
  { id: 'luma-princesa', name: 'Luma Princesa', description: 'Coroada de gentileza, sabedoria e brilho próprio.', category: 'premium', image_url: lumaPrincesa },
  { id: 'luma-unicornio', name: 'Luma Unicórnio', description: 'Asas, chifre brilhante e muita magia.', category: 'premium', image_url: lumaUnicornio },
  { id: 'luma-doutora', name: 'Luma Doutora', description: 'Cuidando de todos com carinho e ciência.', category: 'premium', image_url: lumaDoutora },
  { id: 'luma-astronauta', name: 'Luma Astronauta', description: 'Pronta para explorar galáxias inteiras.', category: 'premium', image_url: lumaAstronauta },
  { id: 'luma-bailarina', name: 'Luma Bailarina', description: 'Cada passo é uma poesia em movimento.', category: 'premium', image_url: lumaBailarina },
  { id: 'luma-fada', name: 'Luma Fada', description: 'Espalhando pó mágico e desejos pelo caminho.', category: 'premium', image_url: lumaFada },
  { id: 'luma-sereia', name: 'Luma Sereia', description: 'Mergulhando em aventuras submarinas.', category: 'premium', image_url: lumaSereia },
  { id: 'luma-confeiteira', name: 'Luma Confeiteira', description: 'Receitas cheias de afeto e criatividade.', category: 'premium', image_url: lumaConfeiteira },
  { id: 'luma-veterinaria', name: 'Luma Veterinária', description: 'Amando e cuidando de todos os bichinhos.', category: 'premium', image_url: lumaVeterinaria },
  { id: 'luma-professora', name: 'Luma Professora', description: 'Ensinando com paciência e muito carinho.', category: 'premium', image_url: lumaProfessora },
  { id: 'luma-arte', name: 'Luma Artista', description: 'Pincel na mão, sonhos no papel.', category: 'premium', image_url: lumaArte },
  { id: 'luma-musica', name: 'Luma Musicista', description: 'Cantando e dançando ao som do coração.', category: 'premium', image_url: lumaMusica },
  { id: 'luma-super-heroina', name: 'Luma Super', description: 'Salvando o dia com coragem e gentileza.', category: 'premium', image_url: lumaSuperHeroina },
];

// Gamificação: requisito de Moedas Brilha para cada mascote da loja
// Ovo (0) → Nascendo (50) → Bebê (200) → Guardião + Fantasias (500)
const STAGE_THRESHOLDS = { ovo: 0, nascendo: 50, bebe: 200, guardiao: 500 } as const;

function getRequiredCoins(mascotId: string, mascotName: string): number {
  const id = (mascotId || '').toLowerCase();
  const name = (mascotName || '').toLowerCase();
  if (id.includes('ovo') || name.includes('ovo')) return STAGE_THRESHOLDS.ovo;
  if (id.includes('nascendo') || name.includes('nascendo')) return STAGE_THRESHOLDS.nascendo;
  if (id.includes('bebe') || name.includes('bebê') || name.includes('bebe')) return STAGE_THRESHOLDS.bebe;
  // Lumi (mascote principal) e Luma Clássica liberam ao virar Guardião
  return STAGE_THRESHOLDS.guardiao;
}

const MascotStorePage: React.FC = () => {
  const { userMascots } = useMascot();
  const { activeChild } = useAppState();
  const [dbMascots, setDbMascots] = useState<Mascot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEggHatch, setShowEggHatch] = useState(false);

  const totalEarned = activeChild?.total_earned ?? 0;

  // Cinematográfica do ovo no primeiro acesso da criança
  useEffect(() => {
    if (activeChild?.id && shouldShowEggHatch(activeChild.id)) {
      setShowEggHatch(true);
    }
  }, [activeChild?.id]);

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

      <WorldsSection />

      {/* Sistema de Evolução conectado ao progresso do app */}
      <div className="flex items-center gap-3 mb-6 mt-16">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={22} /> Evolução do Lumi & Luma
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
      </div>
      <p className="text-center text-muted-foreground font-bold mb-8 max-w-2xl mx-auto">
        Acompanhe a evolução do seu mascote conforme você conquista Moedas Brilha: Ovo → Nascendo → Bebê → Guardião. ✨
      </p>
      <LumiEvolution />

      <div className="flex items-center gap-3 mb-6 mt-16">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={22} /> Mascotes & Fantasias
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
      </div>


      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-[2.5rem]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {allDisplayMascots.map((mascot, index) => {
              const required = getRequiredCoins(mascot.id, mascot.name);
              const unlocked = totalEarned >= required;
              return (
                <MascotStoreCard
                  key={mascot.id}
                  mascot={mascot}
                  isOwned={ownedMascotIds.includes(mascot.id)}
                  index={index}
                  showCollectionButton={true}
                  unlocked={unlocked}
                  requiredCoins={required}
                  currentCoins={totalEarned}
                />
              );
            })}
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

      <AnimatePresence>
        {showEggHatch && activeChild?.id && (
          <EggHatchCinematic childId={activeChild.id} onClose={() => setShowEggHatch(false)} />
        )}
      </AnimatePresence>
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

const MascotStoreCard = ({
  mascot,
  isOwned,
  index,
  showCollectionButton = false,
  unlocked = true,
  requiredCoins = 0,
  currentCoins = 0,
}: {
  mascot: Mascot;
  isOwned: boolean;
  index: number;
  showCollectionButton?: boolean;
  unlocked?: boolean;
  requiredCoins?: number;
  currentCoins?: number;
}) => {
  const isLumi = mascot.name === 'Lumi';
  const rarity = mascot.category === 'primary' ? 'Oficial' : mascot.category === 'premium' ? 'Épico' : 'Comum';
  const rarityColor = mascot.category === 'primary' ? 'bg-primary' : mascot.category === 'premium' ? 'bg-purple-500' : 'bg-slate-500';
  const missingCoins = Math.max(0, requiredCoins - currentCoins);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ delay: index * 0.05 }}
    >
      <KidCard className={cn(
        "group h-full flex flex-col overflow-hidden border-2 transition-all duration-300",
        unlocked ? "border-border hover:border-primary/30" : "border-muted/40"
      )}>
        <div className="relative h-56 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className={cn(
            "relative z-10 w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
            !unlocked && "grayscale opacity-50"
          )}>
            {isLumi ? (
              <KidLiveMascot size="xl" showBadge={false} emotion="happy" className="animate-bounce-gentle" />

            ) : mascot.image_url ? (
              <img src={mascot.image_url} alt={mascot.name} className="w-full h-full object-contain drop-shadow-xl" />
            ) : (
              <span className="text-7xl">🧩</span>
            )}
          </div>

          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
              <div className="bg-white/95 rounded-full p-4 shadow-2xl">
                <Lock className="text-primary" size={32} strokeWidth={2.5} />
              </div>
            </div>
          )}

          <div className={cn(
            "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg",
            rarityColor
          )}>
            {rarity}
          </div>

          {isOwned && unlocked && (
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
              {isLumi ? 'Guardião Lendário' : 'Companheiro de Jornada'}
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
                {isLumi && (
                  <Link to="/colecao-lumi" className="w-full">
                    <KidButton variant="secondary" className="w-full py-4 text-xs">
                      Ver Fantasias do Lumi
                    </KidButton>
                  </Link>
                )}
              </div>
            ) : !unlocked ? (
              <div className="flex flex-col gap-2">
                <div className="w-full py-3 rounded-2xl bg-muted/40 border-2 border-muted text-muted-foreground text-center font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  <Lock size={14} />
                  Bloqueado
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-bold text-primary/70">
                    <span>{currentCoins} / {requiredCoins} 💰</span>
                    <span>Faltam {missingCoins} 💰</span>
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                      style={{ width: `${Math.min(100, (currentCoins / Math.max(1, requiredCoins)) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <KidButton
                variant="primary"
                className="w-full py-6 text-lg group/btn"
                onClick={() => {}}
              >
                <span className="flex items-center gap-2">
                  Desbloqueado! Adicionar
                  <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </KidButton>
            )}
          </div>
        </div>
      </KidCard>
    </motion.div>
  );
};

const WorldsSection: React.FC = () => {
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom } = useHiperfoco();
  const navigate = useNavigate();

  const handlePick = (w: WorldOption) => {
    if (w.hiperfocoId) {
      setHiperfocoById(w.hiperfocoId);
    } else if (w.customLabel) {
      setHiperfocoCustom(w.customLabel);
    }
    toast.success(`Mundo ${w.label} escolhido! 🌟`, {
      description: 'Pronto para brincar no Neuro-Treino.',
    });
  };

  const isActive = (w: WorldOption) => {
    if (!hiperfoco) return false;
    if (w.hiperfocoId) return hiperfoco.id === w.hiperfocoId;
    return hiperfoco.id === 'custom' && hiperfoco.label.toLowerCase() === (w.customLabel ?? '').toLowerCase();
  };

  return (
    <section className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Globe2 size={22} /> Mundos
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
      </div>
      <p className="text-center text-muted-foreground font-bold mb-8 max-w-2xl mx-auto">
        Escolha o mundo que você mais ama! Tudo no Neuro-Treino vai se transformar para a sua aventura favorita. ✨
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {WORLDS.map((w, i) => {
          const active = isActive(w);
          return (
            <motion.button
              key={w.id}
              type="button"
              onClick={() => handlePick(w)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'group relative overflow-hidden rounded-[2rem] border-4 text-left shadow-kid transition-all',
                active
                  ? 'border-primary ring-4 ring-primary/30'
                  : 'border-white/70 hover:border-primary/40'
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={w.image}
                  alt={w.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {active && (
                  <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <KidButton
          variant="secondary"
          onClick={() => navigate({ to: '/neuro-treino' })}
          className="px-8"
        >
          <span className="flex items-center gap-2">
            <Sparkles size={18} /> Ir para o Neuro-Treino
          </span>
        </KidButton>
      </div>
    </section>
  );
};

export default MascotStorePage;

