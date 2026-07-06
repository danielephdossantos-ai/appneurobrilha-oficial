import { Sparkles } from "lucide-react";
import { Secao } from "./Secao";
import { TextoComMascotes } from "./TextoComMascotes";

export function Motivacao({ texto }: { texto: string }) {
  return (
    <Secao icon={Sparkles} rotulo="Por que aprender isso?" cor="#F0ABFC">
      <TextoComMascotes texto={texto} />
    </Secao>
  );
}
