import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpenCheck, ClipboardList, GraduationCap, LogOut, Sparkles } from "lucide-react";
import { supabase } from "@/database/supabase/client";

export function TeacherShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const logout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50">
      <header className="sticky top-0 z-30 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/area-professor" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg"><GraduationCap /></span>
            <span><b className="block text-lg leading-none text-slate-900">NeuroBrilha</b><small className="font-bold uppercase tracking-wider text-indigo-700">Área do Professor</small></span>
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            <Link to="/area-professor/biblioteca-inclusiva" className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-indigo-50"><BookOpenCheck className="mr-1 inline h-4 w-4" />Biblioteca</Link>
            <Link to="/area-professor/assistente-pedagogico" className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-indigo-50"><Sparkles className="mr-1 inline h-4 w-4" />Assistente</Link>
            <Link to="/area-professor/tarefas" className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-indigo-50"><ClipboardList className="mr-1 inline h-4 w-4" />Tarefas</Link>
          </nav>
          <button onClick={logout} className="inline-flex min-h-11 items-center gap-2 rounded-xl border px-3 text-sm font-bold text-slate-700 hover:bg-slate-50"><LogOut className="h-4 w-4" />Sair</button>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-3 py-5 md:px-6">{children}</div>
    </div>
  );
}
