import { BookOpen, Sparkles, HelpCircle, Hand } from "lucide-react";
import { Secao } from "./Secao";
import { TextoComMascotes } from "./TextoComMascotes";

/**
 * Bloco Narrativa — abertura obrigatória de toda missão.
 * História curta que desperta curiosidade, cria contexto,
 * apresenta um problema e convida a criança a participar.
 * Cada mascote nomeado no texto aparece com sua imagem oficial
 * (Brilha = estrela, Coruja, Lupi, Fifi, Téo, Piu, Esquilo).
 */

export function Narrativa({
  dados,
}: {
  dados: { titulo: string; contexto: string; problema: string; convite: string };
}) {
  return (
    <Secao icon={BookOpen} rotulo="Nossa história começa assim…" cor="#FFC93C">
      <h2 className="text-2xl font-black leading-tight mb-4">{dados.titulo}</h2>

      <div className="space-y-4">
        <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#FFC93C] mb-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Era uma vez…
          </div>
          <TextoComMascotes texto={dados.contexto} />
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#FF8A4C] mb-1.5">
            <HelpCircle className="h-3.5 w-3.5" />
            Só que apareceu um probleminha…
          </div>
          <TextoComMascotes texto={dados.problema} />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#FFC93C]/25 to-[#FF8A4C]/25 border-2 border-[#FFC93C]/40 p-4">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#FFC93C] mb-1.5">
            <Hand className="h-3.5 w-3.5" />
            E aí, topa entrar nessa?
          </div>
          <TextoComMascotes
            texto={dados.convite}
            className="text-lg font-black leading-snug w-full text-center"
          />
        </div>
      </div>
    </Secao>
  );
}
