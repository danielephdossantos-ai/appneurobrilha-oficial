import { Link, useRouterState } from "@tanstack/react-router";
import { KeyRound, LayoutDashboard } from "lucide-react";

const links = [
  { to: "/admin", label: "Visão geral", icon: LayoutDashboard },
  { to: "/admin/professores", label: "Professores e códigos", icon: KeyRound },
] as const;

export function AdminCentralNavigation() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav aria-label="Central Administrativa" className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      {links.map(({ to, label, icon: Icon }) => {
        const active = pathname === to || (to === "/admin" && pathname === "/admin/");
        return (
          <Link
            key={to}
            to={to}
            className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-center text-sm font-bold transition-colors sm:flex-none ${
              active ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-indigo-50"
            }`}
            activeOptions={{ exact: true }}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
