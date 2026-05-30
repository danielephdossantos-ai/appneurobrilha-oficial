import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { GraduationCap, Sparkles, Brain, Compass, ShieldCheck, MessagesSquare, AlertTriangle, ArrowRight, Zap, Activity, Plus, Star } from "lucide-react";
import KidLiveMascot from "@/components/ui/KidLiveMascot";

import { usePedagogicalEngine } from "@/hooks/usePedagogicalEngine";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { cn } from "@/utils/utils";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroBrilha Kids — Início" },
      { name: "description", content: "Escolha quem vai brilhar hoje e continue a jornada de aprendizagem adaptativa." },
    ],
  }),
  component: Index,
});

function Index() {
  const { children: allChildren, activeChild, setActiveChild } = useAppState();
  const engine = usePedagogicalEngine();

  return (
    <Shell>
      <PageHeader
        emoji="✨"
        title={`Bem-vindo, ${activeChild?.nome ?? "amigo"}!`}
        subtitle="Sua jornada neuro-divertida começa aqui."
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-12 rounded-[4rem] border-4 border-primary/20 shadow-glow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <Puzzle size={120} className="text-primary rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
           <Star size={80} className="text-sun -rotate-12" />
        </div>

        <div className="flex-shrink-0">
          <KidLiveMascot 
            size="2xl" 
            emotion="waving" 
            message={`E aí, ${activeChild?.nome}! Pronto para brilhar?`}
          />
        </div>
        <div className="flex-1 text-center lg:text-left space-y-6 relative z-10">
          <div className="flex justify-center lg:justify-start">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-sun px-6 py-2 rounded-2xl text-primary font-black uppercase tracking-widest text-xs border-4 border-white shadow-soft"
            >
              <Award className="w-5 h-5 fill-primary/20" />
              Personagem Principal
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1]">
            Eu sou o Pip! <br/>
            <span className="text-secondary">O Guardião dos Desafios</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl font-medium">
            Juntos vamos transformar cada aprendizado em uma peça brilhante do seu quebra-cabeça do conhecimento!
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
             <div className="bg-primary/10 px-6 py-3 rounded-2xl font-black text-primary uppercase tracking-widest text-xs border-2 border-primary/20 flex items-center gap-2">
               <Sparkles className="w-4 h-4" /> Curioso
             </div>
             <div className="bg-success/10 px-6 py-3 rounded-2xl font-black text-success uppercase tracking-widest text-xs border-2 border-success/20 flex items-center gap-2">
               <Heart className="w-4 h-4" /> Amigável
             </div>
             <div className="bg-sun/10 px-6 py-3 rounded-2xl font-black text-warning-foreground uppercase tracking-widest text-xs border-2 border-sun/20 flex items-center gap-2">
               <Brain className="w-4 h-4" /> Inteligente
             </div>
          </div>
        </div>
      </div>


      <h2 className="text-2xl font-black mb-6 uppercase tracking-widest text-foreground/60 flex items-center gap-3">
        <Sparkles size={24} className="text-sun" />
        Quem vai brilhar hoje?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        {allChildren.map((c: any) => (
          <button
            key={c.id}
            onClick={() => setActiveChild(c.id)}
            className="group relative"
          >
            <KidCard 
              variant={c.id === activeChild?.id ? 'sky' : 'white'}
              className={`text-left h-full transition-all active:scale-95 ${
                c.id === activeChild?.id
                  ? "border-primary shadow-kid [--shadow-color:oklch(var(--primary-dark))]"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 rounded-3xl bg-secondary grid place-items-center text-5xl shadow-inner group-hover:scale-110 transition-transform">
                  {c.avatar}
                </div>
                <div>
                  <div className="text-xl font-black text-foreground">{c.nome}</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{c.idade} anos · {c.serie}</div>
                  <div className="mt-2 flex gap-2">
                    <Pill tone="info" className="px-3 py-1 text-[10px]">{c.diagnostico.toUpperCase()}</Pill>
                    {!c.anamnese_completa && <Pill tone="warning" className="px-3 py-1 text-[10px]">INCOMPLETO</Pill>}
                  </div>
                </div>
              </div>
            </KidCard>
          </button>
        ))}
        <Link
          to="/anamnese/$childId"
          params={{ childId: "nova" }}
          className="group"
        >
          <KidCard variant="white" className="border-4 border-dashed border-primary/20 hover:border-primary/50 transition-all h-full min-h-[100px] flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Plus strokeWidth={3} />
            </div>
            <span className="font-black text-primary uppercase tracking-widest text-sm">Nova Criança</span>
          </KidCard>
        </Link>
      </div>

      {activeChild && !activeChild.anamnese_completa && (
        <KidCard variant="sun" className="mb-10 border-sun shadow-kid [--shadow-color:oklch(var(--sun-dark))]">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-full bg-sun flex items-center justify-center text-3xl animate-bounce-gentle">
              ⚠️
            </div>
            <div className="flex-1">
              <div className="text-xl font-black text-warning-foreground leading-tight">Anamnese de {activeChild.nome} pendente</div>
              <p className="text-sm font-bold text-warning-foreground/70 mt-1 uppercase tracking-wider">Essencial para IA pedagógica funcionar</p>
            </div>
            <Link to="/anamnese/$childId" params={{ childId: activeChild.id }}>
              <KidButton variant="sun" size="sm">INICIAR</KidButton>
            </Link>
          </div>
        </KidCard>
      )}

      {engine && (
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <KidCard variant="white" className="border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Zap size={20} strokeWidth={3} />
              </div>
              <h3 className="font-black text-sm uppercase tracking-widest text-primary">Motor Neuroadaptativo</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Dificuldade', value: `x${engine.adaptive.difficulty.toFixed(1)}`, color: 'text-primary' },
                 { label: 'Pausas', value: `${engine.adaptive.breakFrequency} min`, color: 'text-foreground' },
                 { label: 'Instrução', value: engine.adaptive.instructionType, color: 'text-foreground' },
                 { label: 'Estímulos', value: engine.adaptive.stimuliLevel, color: 'text-foreground' },
               ].map((item) => (
                 <div key={item.label} className="bg-white/50 p-3 rounded-2xl border border-primary/10">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    <div className={cn("text-sm font-black capitalize", item.color)}>{item.value}</div>
                 </div>
               ))}
            </div>
          </KidCard>

          <KidCard variant="white" className="border-success/20 bg-success/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-success text-white">
                <Activity size={20} strokeWidth={3} />
              </div>
              <h3 className="font-black text-sm uppercase tracking-widest text-success">
                Perfil Sensorial: {activeChild?.sensory_mode || "FOCO"}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                <Pill tone="success" className="px-4 py-1.5 rounded-xl font-black">SOM {engine.sensory.soundVolume * 100}%</Pill>
                <Pill tone="info" className="px-4 py-1.5 rounded-xl font-black">LUZ {engine.sensory.brightness * 100}%</Pill>
                <Pill tone="default" className="px-4 py-1.5 rounded-xl font-black">FONTE {engine.sensory.fontSize}PX</Pill>
              </div>
              <p className="text-[10px] font-bold text-success/60 uppercase tracking-widest">
                * Calibrado para perfil {activeChild?.diagnostico}
              </p>
            </div>
          </KidCard>
        </div>
      )}

      <h2 className="text-2xl font-black mb-6 uppercase tracking-widest text-foreground/60 flex items-center gap-3">
        <Compass size={24} className="text-primary" />
        Explore sua Jornada
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Tile to="/historias" emoji="📚" title="HISTÓRIAS" desc="Livrinho interativo" color="from-[#6C5CE7]/30 to-[#6C5CE7]/5" shadow="oklch(0.5 0.15 300)" />
        <Tile to="/escola-brilha" emoji="🎓" title="Escola Brilha" desc="BNCC 1º–9º" color="from-primary/30 to-primary/5" shadow="oklch(var(--primary-dark))" />
        <Tile to="/reforco-brilha" emoji="✨" title="REFORÇO BRILHA" desc="Ensino infinito" color="from-petal/30 to-petal/5" shadow="oklch(var(--petal-dark))" />
        <Tile to="/neuro-treino" emoji="🧠" title="Neuro-Treino" desc="Reforço clínico" color="from-sky/30 to-sky/5" shadow="oklch(var(--sky-dark))" />
        <Tile to="/jornada-365" emoji="🧭" title="Jornada 365" desc="Sua rotina" color="from-sun/30 to-sun/5" shadow="oklch(var(--sun-dark))" />
        <Tile to="/amigo-virtual" emoji="🦄" title="Amigo Virtual" desc="IA & Estudo" color="from-lilac/30 to-lilac/5" shadow="oklch(0.7 0.1 300)" />
      </div>

    </Shell>
  );
}

function Tile({ to, emoji, title, desc, color, shadow }: { to: string; emoji: string; title: string; desc: string; color: string; shadow: string }) {
  return (
    <Link to={to} className="group">
      <KidCard 
        className={cn(
          `rounded-3xl p-6 bg-gradient-to-br ${color} border-2 border-white/50 shadow-kid hover:translate-y-[-4px] active:translate-y-[2px] active:shadow-kid-active transition-all h-full flex flex-col gap-2`,
        )}
        style={{ '--shadow-color': shadow } as React.CSSProperties}
      >
        <span className="text-5xl mb-2 group-hover:scale-125 transition-transform origin-left">{emoji}</span>
        <span className="font-black text-lg leading-tight uppercase tracking-wide">{title}</span>
        <span className="text-xs font-bold text-foreground/50 flex items-center gap-1 uppercase tracking-widest">{desc} <ArrowRight className="h-4 w-4" strokeWidth={3} /></span>
      </KidCard>
    </Link>
  );
}
