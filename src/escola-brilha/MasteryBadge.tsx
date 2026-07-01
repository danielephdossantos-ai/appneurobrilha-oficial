export type NivelDominio =
  | "nao_iniciada"
  | "em_aprendizagem"
  | "parcialmente_dominada"
  | "dominada";

const CFG: Record<NivelDominio, { label: string; bg: string; fg: string; dot: string }> = {
  nao_iniciada: {
    label: "Não iniciada",
    bg: "bg-[#0d1f55]/8",
    fg: "text-[#0d1f55]/60",
    dot: "bg-[#0d1f55]/30",
  },
  em_aprendizagem: {
    label: "Em aprendizagem",
    bg: "bg-[#FFC93C]/20",
    fg: "text-[#8a6a00]",
    dot: "bg-[#FFC93C]",
  },
  parcialmente_dominada: {
    label: "Parcialmente dominada",
    bg: "bg-[#4C9EFF]/15",
    fg: "text-[#1858b8]",
    dot: "bg-[#4C9EFF]",
  },
  dominada: {
    label: "Dominada",
    bg: "bg-[#22C55E]/15",
    fg: "text-[#137a3a]",
    dot: "bg-[#22C55E]",
  },
};

export function MasteryBadge({ nivel }: { nivel: NivelDominio | null | undefined }) {
  const cfg = CFG[nivel ?? "nao_iniciada"];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${cfg.bg} ${cfg.fg}`}
      title="Nível de domínio da missão"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}
