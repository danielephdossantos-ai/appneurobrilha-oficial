import { BookOpen } from "lucide-react";
import { Secao } from "./Secao";

export function Explicacao({ texto }: { texto: string }) {
  return (
    <Secao icon={BookOpen} rotulo="Explicação" cor="#4C9EFF">
      {texto}
    </Secao>
  );
}
