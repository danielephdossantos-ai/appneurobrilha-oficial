import { Link, Outlet, useRouterState, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { usePedagogicalEngine } from "@/hooks/usePedagogicalEngine";
import {
  Home, GraduationCap, Sparkles, Brain, CalendarDays, ListChecks,
  Compass, ShieldCheck, MessagesSquare, FileBarChart2, SlidersHorizontal,
  ClipboardList, LogOut, ChevronLeft, ChevronRight, Camera, Heart, ShoppingBag, BookOpen, ClipboardCheck
} from "lucide-react";
import { ReactNode } from "react";
import { supabase } from "@/database/supabase/client";
import { NotificationBell } from "./NotificationBell";
import { KidCard } from "./ui/KidCard";
import { KidButton } from "./ui/KidButton";
import KidLiveMascot from "./ui/KidLiveMascot";


const navCrianca = [
  { to: "/", label: "Início", icon: Home },
  { to: "/historias", label: "Histórias", icon: BookOpen },
  { to: "/escola-brilha", label: "Escola Brilha", icon: GraduationCap },
  { to: "/reforco-brilha", label: "REFORÇO BRILHA", icon: Sparkles },
  { to: "/neuro-treino", label: "Neuro-Treino", icon: Brain },
  { to: "/brilha-vida", label: "Brilha Vida", icon: Heart },
  { to: "/jornada-365", label: "Jornada 365", icon: Compass },
  { to: "/amigo-virtual", label: "Amigo Virtual", icon: Heart },
  { to: "/rotina", label: "Rotina", icon: ListChecks },
];

const navPais = [
  { to: "/painel-pais", label: "Painel dos Pais", icon: ShieldCheck },
  { to: "/progressao", label: "Progressão", icon: FileBarChart2 },
  { to: "/terapeuta-brilha", label: "Terapeuta Brilha", icon: MessagesSquare },
  { to: "/agenda", label: "Agenda", icon: CalendarDays },
  { to: "/relatorio", label: "Relatórios", icon: FileBarChart2 },
  { to: "/auditoria-pedagogica", label: "Auditoria", icon: ClipboardCheck },
] as const;

const navigationSequence = [
  "/",
  "/historias",
  "/escola-brilha",
  "/reforco-brilha",
  "/neuro-treino",
  "/brilha-vida",
  "/jornada-365",
  "/amigo-virtual",
  "/rotina",
  "/painel-pais",
  "/progressao",
  "/terapeuta-brilha",
  "/agenda",
  "/relatorio",
  "/auditoria-pedagogica",
];

function NavItem({ to, label, icon: Icon }: { to: string; label: string; icon: typeof Home }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all btn-tap font-bold"
      activeProps={{ className: "bg-primary text-primary-foreground shadow-kid [--shadow-color:oklch(var(--primary-dark))] font-black" }}
      activeOptions={{ exact: to === "/" }}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="text-sm">{label}</span>
    </Link>
  );
}

export function Shell({ children }: { children?: ReactNode }) {
  const { activeChild, children: allChildren, setActiveChild, logout } = useAppState();
  const engine = usePedagogicalEngine();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();


  const currentIndex = navigationSequence.indexOf(path);
  const prevPath = currentIndex > 0 ? navigationSequence[currentIndex - 1] : null;
  const nextPath = currentIndex < navigationSequence.length - 1 ? navigationSequence[currentIndex + 1] : null;

  // Apply neuro-adaptive CSS variables
  const adaptiveStyles = engine?.adaptive ? {
    "--visual-scale": engine.adaptive.visualScale,
    "--animation-speed-multiplier": 1 / engine.adaptive.animationSpeed,
    "--stimuli-opacity": engine.adaptive.stimuliLevel === "low" ? "0.3" : engine.adaptive.stimuliLevel === "high" ? "1" : "0.7",
    fontSize: `${16 * (engine.adaptive.visualScale ?? 1)}px`
  } as React.CSSProperties : {};

  return (
    <div 
      className="min-h-screen flex flex-col md:flex-row neuro-adaptive-container"
      style={adaptiveStyles}
    >
      <aside className="hidden md:flex w-80 shrink-0 flex-col bg-sidebar border-r-4 border-sidebar-border p-6 gap-4 overflow-y-auto">
        <Link to="/" className="flex items-center gap-3 px-2 py-4 mb-2">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-success grid place-items-center text-3xl shadow-glow transform -rotate-3">
            🌱
          </div>
          <div>
            <div className="font-black text-2xl text-sidebar-foreground leading-none tracking-tight">NeuroBrilha</div>
            <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mt-1">Premium Kids</div>
          </div>
        </Link>

        {activeChild && (
          <KidCard variant="white" className="p-4 border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-secondary grid place-items-center text-3xl shadow-inner">{activeChild.avatar}</div>
              <div className="min-w-0">
                <div className="font-black text-lg truncate leading-tight">{activeChild.nome}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{activeChild.idade} anos · {activeChild.serie}</div>
              </div>
            </div>
            {allChildren.length > 1 && (
              <select
                value={activeChild.id}
                onChange={(e) => setActiveChild(e.target.value)}
                className="mt-3 w-full text-xs font-bold rounded-xl bg-muted px-3 py-2 border-2 border-transparent focus:border-primary transition-all outline-none"
              >
                {allChildren.map((c: any) => (
                  <option key={c.id} value={c.id}>{c.avatar} {c.nome}</option>
                ))}
              </select>
            )}
          </KidCard>
        )}

        <div className="mt-2">
          <KidLiveMascot emotion="happy" size="sm" className="scale-75 -my-4" />
        </div>


        <div className="text-xs uppercase tracking-[0.2em] font-black text-sidebar-foreground/40 px-3 mt-4 mb-2">
          Explorar
        </div>
        <nav className="flex flex-col gap-1">
          {navCrianca.map((i) => <NavItem key={i.to} {...i} />)}
        </nav>

        <div className="text-xs uppercase tracking-[0.2em] font-black text-sidebar-foreground/40 px-3 mt-6 mb-2">
          Responsáveis
        </div>
        <nav className="flex flex-col gap-1">
          {navPais.map((i) => <NavItem key={i.to} {...i} />)}
          {activeChild && (
            <NavItem to={`/ajuste-dificuldades/${activeChild.id}`} label="Ajuste fino" icon={SlidersHorizontal} />
          )}
          {activeChild && (
            <NavItem to={`/anamnese/${activeChild.id}`} label="Anamnese" icon={ClipboardList} />
          )}
        </nav>

        <div className="mt-auto flex flex-col gap-1 pt-4">
          <button
            onClick={logout}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-destructive hover:bg-destructive/10 transition-colors btn-tap text-sm font-bold"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            Sair do App
          </button>
          <div className="text-[11px] text-sidebar-foreground/50 px-3 py-2">
            v0.1 · protótipo navegável
          </div>
        </div>

      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b-4 border-sidebar-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-extrabold flex items-center gap-2 md:hidden">
              <span className="text-2xl">🌱</span> NeuroBrilha
            </Link>
            {activeChild && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-muted/50">
                <span className="text-xl">{activeChild.avatar}</span>
                <span className="text-sm font-bold">{activeChild.nome}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <NotificationBell />
            {activeChild && (
              <div className="md:hidden text-sm flex items-center gap-1">
                <span className="text-xl">{activeChild.avatar}</span>
                <span className="font-bold">{activeChild.nome}</span>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 px-4 md:px-8 py-6 md:py-10 pb-32 md:pb-32 max-w-6xl w-full mx-auto relative">
          <div className="max-w-5xl w-full mx-auto">
            {children ?? <Outlet />}
          </div>
          <MobileNav path={path} />
          
          <div className="fixed bottom-24 left-0 right-0 px-6 flex justify-between pointer-events-none z-50 md:hidden">
            <div className="pointer-events-auto">
              {prevPath && (
                <button
                  onClick={() => navigate({ to: prevPath })}
                  className="h-14 w-14 rounded-full bg-white shadow-lg border-2 border-primary/20 flex items-center justify-center text-primary btn-tap"
                  aria-label="Voltar"
                >
                  <ChevronLeft size={32} strokeWidth={3} />
                </button>
              )}
            </div>
            <div className="pointer-events-auto">
              {nextPath && (
                <button
                  onClick={() => navigate({ to: nextPath })}
                  className="h-14 w-14 rounded-full bg-primary shadow-glow flex items-center justify-center text-white btn-tap"
                  aria-label="Seguir"
                >
                  <ChevronRight size={32} strokeWidth={3} />
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 gap-4 pointer-events-none z-50">
            <div className="pointer-events-auto">
              {prevPath && (
                <button
                  onClick={() => navigate({ to: prevPath })}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white shadow-xl border border-border text-foreground font-bold hover:bg-muted transition-colors btn-tap"
                >
                  <ChevronLeft size={20} />
                  Voltar
                </button>
              )}
            </div>
            <div className="pointer-events-auto">
              {nextPath && (
                <button
                  onClick={() => navigate({ to: nextPath })}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary shadow-glow text-white font-bold hover:opacity-90 transition-opacity btn-tap"
                >
                  Seguir
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function MobileNav({ path }: { path: string }) {
  const items = [
    { to: "/", icon: Home, label: "Início" },
    { to: "/escola-brilha", icon: GraduationCap, label: "Escola" },
    { to: "/amigo-virtual", icon: Heart, label: "Amigo" },
    { to: "/amigo-virtual", icon: Heart, label: "Amigo" },
    { to: "/painel-pais", icon: ShieldCheck, label: "Pais" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-10 bg-card border-t border-border px-2 py-2 flex justify-around">
      {items.map((i) => {
        const active = path === i.to;
        const Icon = i.icon;
        return (
          <Link key={i.to} to={i.to} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg btn-tap ${active ? "text-primary font-bold" : "text-muted-foreground"}`}>
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{i.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function PageHeader({ title, subtitle, emoji }: { title: string; subtitle?: string; emoji?: string }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center gap-3">
        {emoji && <span className="text-4xl md:text-5xl">{emoji}</span>}
        <div>
          <h1 className="text-2xl md:text-4xl">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-card p-5 shadow-soft border border-border ${className}`}>
      {children}
    </div>
  );
}

export function Pill({ children, tone = "default", className = "" }: { children: ReactNode; tone?: "default" | "success" | "warning" | "info" | "danger"; className?: string }) {
  const tones: Record<string, string> = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    info: "bg-sky/30 text-foreground",
    danger: "bg-destructive/15 text-destructive",
  };
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${tones[tone]} ${className}`}>{children}</span>;
}
