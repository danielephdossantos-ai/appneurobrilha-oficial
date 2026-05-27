import { Link, Outlet, useRouterState, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/lib/store";
import {
  Home, GraduationCap, Sparkles, Brain, CalendarDays, ListChecks,
  Compass, ShieldCheck, MessagesSquare, FileBarChart2, SlidersHorizontal,
  ClipboardList, LogOut, ChevronLeft, ChevronRight
} from "lucide-react";
import { ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

const navCrianca = [
  { to: "/", label: "Início", icon: Home },
  { to: "/escola-brilha", label: "Escola Brilha", icon: GraduationCap },
  { to: "/reforco-brilha", label: "REFORÇO BRILHA", icon: Sparkles },
  { to: "/neuro-treino", label: "Neuro-Treino", icon: Brain },
  { to: "/jornada-365", label: "Jornada 365", icon: Compass },
  { to: "/rotina", label: "Rotina", icon: ListChecks },
];

const navPais = [
  { to: "/painel-pais", label: "Painel dos Pais", icon: ShieldCheck },
  { to: "/terapeuta-brilha", label: "Terapeuta Brilha", icon: MessagesSquare },
  { to: "/agenda", label: "Agenda", icon: CalendarDays },
  { to: "/relatorio", label: "Relatórios", icon: FileBarChart2 },
] as const;

const navigationSequence = [
  "/",
  "/escola-brilha",
  "/reforco-brilha",
  "/neuro-treino",
  "/jornada-365",
  "/rotina",
  "/painel-pais",
  "/terapeuta-brilha",
  "/agenda",
  "/relatorio",
];

function NavItem({ to, label, icon: Icon }: { to: string; label: string; icon: typeof Home }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors btn-tap"
      activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground font-bold shadow-soft" }}
      activeOptions={{ exact: to === "/" }}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="text-sm">{label}</span>
    </Link>
  );
}

export function Shell({ children }: { children?: ReactNode }) {
  const { activeChild, children: allChildren, setActiveChild } = useAppState();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  const currentIndex = navigationSequence.indexOf(path);
  const prevPath = currentIndex > 0 ? navigationSequence[currentIndex - 1] : null;
  const nextPath = currentIndex < navigationSequence.length - 1 ? navigationSequence[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="hidden md:flex w-72 shrink-0 flex-col bg-sidebar border-r border-sidebar-border p-4 gap-2">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-success grid place-items-center text-2xl shadow-glow">
            🌱
          </div>
          <div>
            <div className="font-extrabold text-sidebar-foreground leading-tight">NeuroBrilha</div>
            <div className="text-xs text-sidebar-foreground/60 -mt-0.5">Kids</div>
          </div>
        </Link>

        {activeChild && (
          <div className="mt-2 mb-3 rounded-2xl bg-card p-3 shadow-soft border border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-secondary grid place-items-center text-2xl">{activeChild.avatar}</div>
              <div className="min-w-0">
                <div className="font-bold truncate">{activeChild.nome}</div>
                <div className="text-xs text-muted-foreground">{activeChild.idade} anos · {activeChild.serie}</div>
              </div>
            </div>
            {allChildren.length > 1 && (
              <select
                value={activeChild.id}
                onChange={(e) => setActiveChild(e.target.value)}
                className="mt-2 w-full text-xs rounded-lg bg-muted px-2 py-1.5"
              >
                {allChildren.map((c: any) => (
                  <option key={c.id} value={c.id}>{c.avatar} {c.nome}</option>
                ))}
              </select>
            )}
          </div>
        )}

        <div className="text-[11px] uppercase tracking-wider font-bold text-sidebar-foreground/50 px-3 mt-2">
          Para a criança
        </div>
        <nav className="flex flex-col gap-1">
          {navCrianca.map((i) => <NavItem key={i.to} {...i} />)}
        </nav>

        <div className="text-[11px] uppercase tracking-wider font-bold text-sidebar-foreground/50 px-3 mt-4">
          Para os pais
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
          <div className="text-[11px] text-sidebar-foreground/50 px-3 py-2">
            v0.1 · protótipo navegável
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="md:hidden sticky top-0 z-10 backdrop-blur bg-background/80 border-b border-border px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold flex items-center gap-2">
            <span className="text-2xl">🌱</span> NeuroBrilha Kids
          </Link>
          {activeChild && (
            <div className="text-sm flex items-center gap-1">
              <span className="text-xl">{activeChild.avatar}</span>
              <span className="font-bold">{activeChild.nome}</span>
            </div>
          )}
        </header>

        <main className="flex-1 px-4 md:px-8 py-6 md:py-10 pb-32 md:pb-32 max-w-6xl w-full mx-auto relative">
          {children ?? <Outlet />}
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
    { to: "/neuro-treino", icon: Brain, label: "Treino" },
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
