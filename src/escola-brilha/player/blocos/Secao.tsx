import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Cartão genérico usado por quase todos os 12 blocos da aula.
 * Padroniza tipografia, espaçamentos e ícone-título.
 */
export function Secao({
  icon: Icon,
  rotulo,
  cor = "#FFC93C",
  children,
}: {
  icon: LucideIcon;
  rotulo: string;
  cor?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/20 p-6 [[data-skin=pip-ei]_&]:bg-transparent [[data-skin=pip-ei]_&]:border-0 [[data-skin=pip-ei]_&]:p-0">
      <div className="flex items-center gap-2 mb-3" style={{ color: cor }}>
        <Icon className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">{rotulo}</span>
      </div>
      <div className="text-white text-base leading-relaxed whitespace-pre-line [[data-skin=pip-ei]_&]:text-[#4a1d6b]">{children}</div>
    </div>
  );
}
