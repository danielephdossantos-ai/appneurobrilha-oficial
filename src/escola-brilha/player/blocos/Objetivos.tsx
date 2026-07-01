import { Target } from "lucide-react";
import { Secao } from "./Secao";

export function Objetivos({ itens }: { itens: string[] }) {
  return (
    <Secao icon={Target} rotulo="Objetivos" cor="#FFC93C">
      <ul className="space-y-2">
        {itens.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#FFC93C] shrink-0" />
            <span className="font-bold">{it}</span>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
