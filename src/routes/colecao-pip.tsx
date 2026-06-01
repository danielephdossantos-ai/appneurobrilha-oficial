import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Shell } from '@/components/Layout';
import { KidCard } from '@/components/ui/KidCard';
import { Sparkles, Lock, Check } from 'lucide-react';
import { PIP_SKINS } from '@/components/ui/KidLiveMascot';
import pipMascot from '@/assets/pip-mascot.png';
import { useAppState } from '@/core/store';
import { cn } from '@/utils/utils';

export const Route = createFileRoute('/colecao-pip')({
  component: ColecaoPipPage,
});

type SkinInfo = {
  key: string;
  name: string;
  title: string;
  image: string;
  description: string;
};

const SKINS: SkinInfo[] = [
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

function ColecaoPipPage() {
  const { activeChild } = useAppState();
  const unlocked = new Set<string>([
    'original',
    ...((activeChild?.hyperfocus_list as string[]) || []),
  ]);

  return (
    <Shell>
      <div className="container mx-auto py-10 px-4">
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles size={14} />
            Coleção Pip
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-3"
          >
            Fantasias do Pip
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O Pip muda de roupa pra acompanhar o que você mais ama. Mesmo Pip,
            mesma alegria — só com um visual novo!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKINS.map((skin, i) => {
            const isUnlocked = unlocked.has(skin.key);
            return (
              <motion.div
                key={skin.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <KidCard className="h-full flex flex-col overflow-hidden group">
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
                    {!isUnlocked && (
                      <p className="mt-3 text-[10px] text-center font-bold text-muted-foreground uppercase tracking-widest">
                        Ative este hiperfoco no perfil para desbloquear
                      </p>
                    )}
                  </div>
                </KidCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
