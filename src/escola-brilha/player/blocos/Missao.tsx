import { Rocket } from "lucide-react";
import { Secao } from "./Secao";

export function Missao({ texto }: { texto: string }) {
  return (
    <Secao icon={Rocket} rotulo="Missão da aula" cor="#FF8A4C">
      <p className="text-xl font-black leading-snug">{texto}</p>
    </Secao>
  );
}
