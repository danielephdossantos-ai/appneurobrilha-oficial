import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Shell } from '@/components/Layout';
import { KidCard } from '@/components/ui/KidCard';
import { Sparkles, Lock, Check } from 'lucide-react';
import { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import pipMascot from '@/assets/pip-mascot.png';
import pipaMascot from '@/assets/pip-girl-mascot.png';
import pipaPrincesa from '@/assets/pip-girl-princesas.png';
import pipaUnicornio from '@/assets/pip-girl-unicornio.png';
import pipaDoutora from '@/assets/pip-girl-doutora.png';
import pipaAstronauta from '@/assets/pip-girl-astronauta.png';
import pipaBailarina from '@/assets/pip-girl-bailarina.png';
import pipaFada from '@/assets/pip-girl-fada.png';
import pipaSereia from '@/assets/pip-girl-sereia.png';
import pipaConfeiteira from '@/assets/pip-girl-confeiteira.png';
import pipaVeterinaria from '@/assets/pip-girl-veterinaria.png';
import pipaProfessora from '@/assets/pip-girl-professora.png';
import pipaArte from '@/assets/pip-girl-arte.png';
import pipaMusica from '@/assets/pip-girl-musica.png';
import pipaSuperHeroina from '@/assets/pip-girl-super-heroina.png';
import { useAppState } from '@/core/store';
import { cn } from '@/utils/utils';
import { PipEvolution } from '@/components/pip/PipEvolution';

export const Route = createFileRoute('/colecao-pip')({
  component: ColecaoPipPage,
});

const SKINS = [
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
  // Novos personagens integrados à coleção
  { key: 'rex', name: 'Rex', title: 'Dino Explorador', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Rex&backgroundColor=b6e3f4', description: 'O T-Rex explorador com um sorriso gigante.' },
  { key: 'tina', name: 'Tina', title: 'Mestra Sabedoria', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Tina&backgroundColor=ffdfbf', description: 'Triceratops gentil com cores vivas e muita calma.' },
  { key: 'astro', name: 'Astro', title: 'Viajante Estelar', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Astro&backgroundColor=c0aede', description: 'Robô astronauta expressivo e muito amigável.' },
  { key: 'nova', name: 'Nova', title: 'Guia das Estrelas', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Nova&backgroundColor=d1d4f9', description: 'Cadelinha espacial pronta para guiar aventuras.' },
  { key: 'luna', name: 'Luna', title: 'Gata Mística', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Luna&backgroundColor=ffd5dc', description: 'Gata unicórnio mágica com chifre brilhante.' },
  { key: 'mia', name: 'Mia', title: 'Patinhas Curiosas', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Mia&backgroundColor=ffdfbf', description: 'Gatinha delicada com olhos enormes e encantadores.' },
  { key: 'turbo', name: 'Turbo', title: 'Piloto do Saber', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Turbo&backgroundColor=b6e3f4', description: 'Carrinho de corrida veloz com cores vibrantes.' },
];

function ColecaoPipPage() {
  const { activeChild } = useAppState();
  
  // Forçar desbloqueio de todos para o usuário ver que as imagens existem
  const unlocked = new Set<string>(SKINS.map(s => s.key));

  return (
    <Shell>
      <div className="container mx-auto py-10 px-4">
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-sun/20 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles size={14} className="text-sun" />
            Coleção NeuroBrilha Kids
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-3"
          >
            Nossos Amiguinhos
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça todos os personagens da nossa turma! Do Pip e suas fantasias aos novos companheiros de aventura.
          </p>
        </header>
        {/* Evolução do mascote */}
        <div className="mb-16">
          <PipEvolution />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SKINS.map((skin, i) => (
            <motion.div
              key={skin.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-4 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-4 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent rounded-full">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform group-hover:scale-110"
                  />
                  <div className="absolute -top-2 -right-2 bg-sun text-white p-2 rounded-full shadow-lg">
                    <Check size={16} strokeWidth={4} />
                  </div>
                </div>
                
                <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] mb-1">
                  {skin.title}
                </span>
                <h3 className="text-xl font-black text-primary mb-2">
                  {skin.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skin.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
