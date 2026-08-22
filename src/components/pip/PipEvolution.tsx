import { motion } from 'framer-motion';
import { Sparkles, Trophy, Lock, Check } from 'lucide-react';
import { useAppState } from '@/core/store';
import { useMascot } from '@/contexts/MascotContext';
import { url as pipEgg } from '@/assets/pip-egg.png.asset.json';
import { url as pipBaby } from '@/assets/pip-baby.png.asset.json';
import { url as pipMascot } from '@/assets/pip-mascot.png.asset.json';
import { url as pipaEgg } from '@/assets/pipa-egg.png.asset.json';
import { url as pipaBaby } from '@/assets/pipa-baby.png.asset.json';
import { url as pipaMascot } from '@/assets/pip-girl-mascot.png.asset.json';

const GOAL = 500;
export function PipEvolution() {
  const { activeChild } = useAppState();
  const { childMascotProfile } = useMascot();
  const isPipa = childMascotProfile?.active_mascot === 'pipa';
  const name = isPipa ? 'Pipa' : 'Pip';
  const total = activeChild?.total_earned ?? 0;
  const born = Boolean(childMascotProfile?.born_at);
  const guardian = childMascotProfile?.stage === 'crianca' || total >= GOAL;
  const img = !born ? (isPipa ? pipaEgg : pipEgg) : guardian ? (isPipa ? pipaMascot : pipMascot) : (isPipa ? pipaBaby : pipBaby);
  const progress = Math.min(100, Math.max(0, total / GOAL * 100));
  return (
    <section className="rounded-[2.5rem] border-4 border-primary/10 bg-gradient-to-br from-sky-50 to-pink-50 p-6 md:p-9 shadow-xl">
      <div className="grid gap-6 md:grid-cols-[220px,1fr] md:items-center">
        <motion.div animate={{y:[0,-6,0]}} transition={{duration:3,repeat:Infinity}} className="mx-auto h-48 w-48">
          <img src={img} alt={`${name} na jornada`} className="h-full w-full object-contain drop-shadow-2xl" />
        </motion.div>
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary"><Sparkles size={12}/> Crescendo com você</div>
          <h2 className="text-3xl font-black text-primary">{name} faz parte da sua jornada</h2>
          <p className="mt-2 text-muted-foreground">Aulas, rotinas e conquistas fazem seu companheiro ganhar experiência e afeto. Ao chegar a 500 BrilhoCoins conquistados na jornada, ele alcança a forma Guardião.</p>
          <div className="mt-5 max-w-lg">
            <div className="mb-1 flex justify-between text-xs font-bold text-primary/70"><span>{guardian ? 'Guardião desbloqueado' : 'Crescendo'}</span><span>{Math.min(total,GOAL)} / {GOAL} ✨</span></div>
            <div className="h-3 overflow-hidden rounded-full bg-primary/10"><motion.div initial={{width:0}} animate={{width:`${progress}%`}} className="h-full rounded-full bg-gradient-to-r from-sky-500 to-pink-500" /></div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <Stage label="Nascimento" img={isPipa?pipaEgg:pipEgg} unlocked={true} done={born}/>
            <Stage label="Bebê" img={isPipa?pipaBaby:pipBaby} unlocked={born} done={born}/>
            <Stage label="Guardião" img={isPipa?pipaMascot:pipMascot} unlocked={guardian} done={guardian}/>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-primary/70">
            <span className="rounded-full bg-white px-3 py-1">Nível {childMascotProfile?.mascot_level ?? 1}</span>
            <span className="rounded-full bg-white px-3 py-1">❤️ Afeto {childMascotProfile?.affinity ?? 0}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stage({label,img,unlocked,done}:{label:string;img:string;unlocked:boolean;done:boolean}){
 return <div className={`relative rounded-2xl border-2 bg-white p-3 text-center ${unlocked?'border-emerald-300':'border-slate-200 opacity-55'}`}>
   <img src={img} alt={label} className={`mx-auto h-16 w-16 object-contain ${unlocked?'':'grayscale'}`}/>
   <div className="mt-1 text-[11px] font-black text-primary">{label}</div>
   <div className="absolute right-2 top-2">{done?<Check size={14} className="text-emerald-500"/>:<Lock size={14} className="text-slate-400"/>}</div>
 </div>
}
