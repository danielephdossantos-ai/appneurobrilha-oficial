import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Shell } from '@/components/Layout';
import { KidCard } from '@/components/ui/KidCard';
import { Sparkles, Lock, Check } from 'lucide-react';
import { LUMI_SKINS } from '@/components/ui/KidLiveMascot';
import lumiMascot from '@/assets/pip-mascot.png';
import lumaMascot from '@/assets/pip-girl-mascot.png';
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
import { useAppState } from '@/core/store';
import { cn } from '@/utils/utils';
import { LumiEvolution } from '@/components/lumi/LumiEvolution';

export const Route = createFileRoute('/colecao-lumi')({
  component: ColecaoLumiPage,
});

const SKINS = [
  { key: 'original', name: 'Lumi Clássico', title: 'O Guardião dos Desafios', image: lumiMascot, description: 'A forma original do Lumi, sempre pronto pra aventura.' },
  { key: 'dinossauros', name: 'Lumi Explorador', title: 'Dinossauros', image: LUMI_SKINS.dinossauros, description: 'Vamos rugir e descobrir o mundo jurássico!' },
  { key: 'espaco', name: 'Lumi Astronauta', title: 'Espaço', image: LUMI_SKINS.espaco, description: 'Pronto para decolar até as estrelas!' },
  { key: 'arte', name: 'Lumi Artista', title: 'Arte', image: LUMI_SKINS.arte, description: 'Pincel na mão e muita cor pra criar.' },
  { key: 'animais', name: 'Lumi Veterinário', title: 'Animais', image: LUMI_SKINS.animais, description: 'Cuidando dos amiguinhos com muito carinho.' },
  { key: 'musica', name: 'Lumi Maestro', title: 'Música', image: LUMI_SKINS.musica, description: 'Vamos reger uma sinfonia de aprendizado!' },
  { key: 'fazendinha', name: 'Lumi Fazendeiro', title: 'Fazendinha', image: LUMI_SKINS.fazendinha, description: 'Plantando aprendizado e colhendo conquistas.' },
  { key: 'super-herois', name: 'Lumi Super', title: 'Super-Heróis', image: LUMI_SKINS['super-herois'], description: 'Salvando o dia com o poder do estudo!' },
  { key: 'princesas', name: 'Lumi Realeza', title: 'Princesas', image: LUMI_SKINS.princesas, description: 'Coroado de gentileza e sabedoria.' },
  { key: 'minecraft', name: 'Lumi Builder', title: 'Minecraft', image: LUMI_SKINS.minecraft, description: 'Construindo aventuras bloco a bloco.' },
  { key: 'carros', name: 'Lumi Piloto', title: 'Carros', image: LUMI_SKINS.carros, description: 'Acelerando rumo a novas conquistas.' },
  { key: 'trens', name: 'Lumi Maquinista', title: 'Trens', image: LUMI_SKINS.trens, description: 'Tchu-tchuuu! Bora pra próxima estação.' },
  { key: 'robos', name: 'Lumi Robô', title: 'Robôs', image: LUMI_SKINS.robos, description: 'Tecnologia e curiosidade juntos.' },
  { key: 'veiculos', name: 'Lumi Aventureiro', title: 'Veículos', image: LUMI_SKINS.veiculos, description: 'Mapa, binóculos e muita exploração.' },
  // Coleção Luma (menina)
  { key: 'luma-original', name: 'Luma Clássica', title: 'A Guardiã dos Sonhos', image: lumaMascot, description: 'A forma original da Luma, doce e cheia de coragem.' },
  { key: 'luma-princesa', name: 'Luma Princesa', title: 'Realeza', image: lumaPrincesa, description: 'Coroada de gentileza, sabedoria e brilho próprio.' },
  { key: 'luma-unicornio', name: 'Luma Unicórnio', title: 'Mágica', image: lumaUnicornio, description: 'Asas, chifre brilhante e muita magia.' },
  { key: 'luma-doutora', name: 'Luma Doutora', title: 'Saúde', image: lumaDoutora, description: 'Cuidando de todos com carinho e ciência.' },
  { key: 'luma-astronauta', name: 'Luma Astronauta', title: 'Espaço', image: lumaAstronauta, description: 'Pronta para explorar galáxias inteiras.' },
  { key: 'luma-bailarina', name: 'Luma Bailarina', title: 'Dança', image: lumaBailarina, description: 'Cada passo é uma poesia em movimento.' },
  { key: 'luma-fada', name: 'Luma Fada', title: 'Encanto', image: lumaFada, description: 'Espalhando pó mágico e desejos pelo caminho.' },
  { key: 'luma-sereia', name: 'Luma Sereia', title: 'Oceano', image: lumaSereia, description: 'Mergulhando em aventuras submarinas.' },
  { key: 'luma-confeiteira', name: 'Luma Confeiteira', title: 'Doces', image: lumaConfeiteira, description: 'Receitas cheias de afeto e criatividade.' },
  { key: 'luma-veterinaria', name: 'Luma Veterinária', title: 'Animais', image: lumaVeterinaria, description: 'Amando e cuidando de todos os bichinhos.' },
  { key: 'luma-professora', name: 'Luma Professora', title: 'Educação', image: lumaProfessora, description: 'Ensinando com paciência e muito carinho.' },
  { key: 'luma-arte', name: 'Luma Artista', title: 'Arte', image: lumaArte, description: 'Pincel na mão, sonhos no papel.' },
  { key: 'luma-musica', name: 'Luma Musicista', title: 'Música', image: lumaMusica, description: 'Cantando e dançando ao som do coração.' },
  { key: 'luma-super-heroina', name: 'Luma Super', title: 'Super-Heroína', image: lumaSuperHeroina, description: 'Salvando o dia com coragem e gentileza.' },
  // Novos personagens integrados à coleção
  { key: 'rex', name: 'Rex', title: 'Dino Explorador', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Rex&backgroundColor=b6e3f4', description: 'O T-Rex explorador com um sorriso gigante.' },
  { key: 'tina', name: 'Tina', title: 'Mestra Sabedoria', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Tina&backgroundColor=ffdfbf', description: 'Triceratops gentil com cores vivas e muita calma.' },
  { key: 'astro', name: 'Astro', title: 'Viajante Estelar', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Astro&backgroundColor=c0aede', description: 'Robô astronauta expressivo e muito amigável.' },
  { key: 'nova', name: 'Nova', title: 'Guia das Estrelas', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Nova&backgroundColor=d1d4f9', description: 'Cadelinha espacial pronta para guiar aventuras.' },
  { key: 'luna', name: 'Luna', title: 'Gata Mística', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Luna&backgroundColor=ffd5dc', description: 'Gata unicórnio mágica com chifre brilhante.' },
  { key: 'mia', name: 'Mia', title: 'Patinhas Curiosas', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Mia&backgroundColor=ffdfbf', description: 'Gatinha delicada com olhos enormes e encantadores.' },
  { key: 'turbo', name: 'Turbo', title: 'Piloto do Saber', image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Turbo&backgroundColor=b6e3f4', description: 'Carrinho de corrida veloz com cores vibrantes.' },
];

const LUMA_HIGHLIGHTS = [
  { name: 'Luma Clássica', image: lumaMascot },
  { name: 'Luma Princesa', image: lumaPrincesa },
  { name: 'Luma Unicórnio', image: lumaUnicornio },
  { name: 'Luma Doutora', image: lumaDoutora },
  { name: 'Luma Astronauta', image: lumaAstronauta },
];

function ColecaoLumiPage() {
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
            Conheça todos os personagens da nossa turma! Da Lumi e suas fantasias aos novos companheiros de aventura.
          </p>
        </header>

        <section className="mb-10 rounded-[2.5rem] border-4 border-pink/20 bg-pink/10 p-5 md:p-7 shadow-xl">
          <div className="mb-5 flex flex-col gap-1 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50">
              Nova coleção menina
            </span>
            <h2 className="text-3xl font-black text-primary">Luma e suas fantasias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {LUMA_HIGHLIGHTS.map((luma) => (
              <div
                key={luma.name}
                className="rounded-[2rem] border-4 border-white bg-white/80 p-4 text-center shadow-md"
              >
                <div className="mx-auto mb-3 flex h-28 w-28 items-center justify-center rounded-full bg-pink/10">
                  <img
                    src={luma.image}
                    alt={luma.name}
                    className="h-full w-full object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-black text-primary">{luma.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Evolução do mascote */}
        <div className="mb-16">
          <LumiEvolution />
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