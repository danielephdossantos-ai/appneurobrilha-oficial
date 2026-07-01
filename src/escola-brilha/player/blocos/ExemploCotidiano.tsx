import { Home } from "lucide-react";
export function ExemploCotidiano({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-[#22C55E]/15 border-2 border-[#22C55E]/40 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#3BD68B]">
        <Home className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">No seu dia a dia</span>
      </div>
      <p className="text-base leading-relaxed whitespace-pre-line">{texto}</p>
    </div>
  );
}
