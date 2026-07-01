import { FileText } from "lucide-react";
export function Resumo({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-6 border-2 border-white/40 shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-[#4C9EFF]">
        <FileText className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Resumo</span>
      </div>
      <p className="text-base leading-relaxed whitespace-pre-line">{texto}</p>
    </div>
  );
}
