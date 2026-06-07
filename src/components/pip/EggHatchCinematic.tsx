import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import pipEgg from '@/assets/pip-egg.png';
import pipHatching from '@/assets/pip-hatching.png';
import pipBaby from '@/assets/pip-baby.png';
import pipaEgg from '@/assets/pipa-egg.png';
import pipaHatching from '@/assets/pipa-hatching.png';
import pipaBaby from '@/assets/pipa-baby.png';
import { KidButton } from '@/components/ui/KidButton';

type MascotChoice = 'pip' | 'pipa';

interface Props {
  childId: string;
  onClose: () => void;
}

const STORAGE_KEY = (childId: string) => `neurobrilha:hasSeenEggHatch:${childId}`;

export function EggHatchCinematic({ childId, onClose }: Props) {
  const [phase, setPhase] = useState<'choose' | 'shake' | 'crack' | 'reveal'>('choose');
  const [mascot, setMascot] = useState<MascotChoice>('pip');

  useEffect(() => {
    if (phase === 'shake') {
      const t1 = setTimeout(() => setPhase('crack'), 2200);
      return () => clearTimeout(t1);
    }
    if (phase === 'crack') {
      const t2 = setTimeout(() => setPhase('reveal'), 1800);
      return () => clearTimeout(t2);
    }
  }, [phase]);

  const finish = () => {
    try {
      localStorage.setItem(STORAGE_KEY(childId), '1');
      localStorage.setItem(`neurobrilha:starterMascot:${childId}`, mascot);
    } catch {}
    onClose();
  };

  const eggImg = mascot === 'pip' ? pipEgg : pipaEgg;
  const hatchImg = mascot === 'pip' ? pipHatching : pipaHatching;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-md p-4"
    >
      {/* sparkles bg */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(2px_2px_at_20%_20%,white,transparent),radial-gradient(2px_2px_at_70%_40%,white,transparent),radial-gradient(1.5px_1.5px_at_40%_70%,white,transparent),radial-gradient(2px_2px_at_85%_80%,white,transparent)] opacity-70 animate-pulse" />

      <div className="relative w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {phase === 'choose' && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-white font-black uppercase tracking-widest text-xs mb-4">
                  <Sparkles size={14} /> Sua jornada começa aqui
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-3">
                  Escolha o seu ovo mágico!
                </h1>
                <p className="text-white/80 text-lg max-w-md mx-auto">
                  Cada conquista vai fazer o seu amiguinho crescer. Quem vai chocar com você?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {(['pip', 'pipa'] as MascotChoice[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMascot(m)}
                    className={`relative rounded-3xl p-6 border-4 transition-all bg-white/10 backdrop-blur hover:bg-white/20 ${
                      mascot === m
                        ? m === 'pip'
                          ? 'border-sky-300 ring-4 ring-sky-300/40 scale-105'
                          : 'border-pink-300 ring-4 ring-pink-300/40 scale-105'
                        : 'border-white/20'
                    }`}
                  >
                    <img
                      src={m === 'pip' ? pipEgg : pipaEgg}
                      alt={`Ovo do ${m === 'pip' ? 'Pip' : 'Pipa'}`}
                      className="w-32 h-32 mx-auto object-contain drop-shadow-2xl"
                    />
                    <div className="mt-3 text-white font-black uppercase tracking-wider text-sm">
                      Ovo {m === 'pip' ? 'do Pip' : 'da Pipa'}
                    </div>
                  </button>
                ))}
              </div>

              <KidButton variant="primary" onClick={() => setPhase('shake')} className="px-10 py-5 text-lg">
                Chocar meu ovo! ✨
              </KidButton>
            </motion.div>
          )}

          {phase === 'shake' && (
            <motion.div
              key="shake"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                O ovo está se mexendo...
              </h2>
              <motion.img
                src={eggImg}
                alt="Ovo chocando"
                className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl"
                animate={{ rotate: [-6, 6, -6, 6, -4, 4, 0], y: [0, -8, 0, -8, 0] }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
              <p className="text-white/80 text-lg">Algo mágico está prestes a acontecer!</p>
            </motion.div>
          )}

          {phase === 'crack' && (
            <motion.div
              key="crack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                Crack! A casquinha rachou!
              </h2>
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6 }}
              >
                <img src={hatchImg} alt="Nascendo" className="w-full h-full object-contain drop-shadow-2xl" />
                {/* flash */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/70 blur-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.9, 0] }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          )}

          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-sun/30 backdrop-blur px-4 py-1.5 rounded-full text-white font-black uppercase tracking-widest text-xs">
                <Sparkles size={14} /> Bem-vindo ao mundo!
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                Olá, eu sou seu {mascot === 'pip' ? 'Pip' : 'sua Pipa'}!
              </h2>
              <motion.img
                src={hatchImg}
                alt="Mascote nascido"
                className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <p className="text-white/90 text-lg max-w-md mx-auto">
                Brinque, aprenda e ganhe Moedas Brilha 💰 para fazer seu amiguinho crescer e desbloquear novas fantasias!
              </p>
              <KidButton variant="primary" onClick={finish} className="px-10 py-5 text-lg">
                Vamos brincar! 🚀
              </KidButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function shouldShowEggHatch(childId: string | null | undefined): boolean {
  if (!childId) return false;
  try {
    return localStorage.getItem(STORAGE_KEY(childId)) !== '1';
  } catch {
    return false;
  }
}

export function getStarterMascot(childId: string | null | undefined): MascotChoice | null {
  if (!childId) return null;
  try {
    const v = localStorage.getItem(`neurobrilha:starterMascot:${childId}`);
    return v === 'pip' || v === 'pipa' ? v : null;
  } catch {
    return null;
  }
}
