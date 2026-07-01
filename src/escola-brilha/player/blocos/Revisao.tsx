import { ListChecks } from "lucide-react";
import { Secao } from "./Secao";

export function Revisao({ dados }: { dados: { pontos: string[]; dica: string } }) {
  return (
    <Secao icon={ListChecks} rotulo="Resumo" cor="#A78BFA">
      <ul className="space-y-2 mb-3">
        {dados.pontos.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#A78BFA] shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl bg-white/10 border border-white/20 p-3 text-sm">
        💡 {dados.dica}
      </div>
    </Secao>
  );
}
