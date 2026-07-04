import { BookOpen, Sparkles, HelpCircle, Hand } from "lucide-react";
import { Secao } from "./Secao";
import brilhaImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Bloco Narrativa — abertura obrigatória de toda missão.
 * História curta (≤ 2 min de leitura) que desperta curiosidade,
 * cria contexto, apresenta um problema e convida a criança a participar.
 */

// Mapa de mascotes reconhecidos no texto → imagem oficial.
const MASCOTES: Array<{ regex: RegExp; img: string; alt: string }> = [
  { regex: /\besquilo\s+brilha\b|\bbrilha\b/i, img: brilhaImg, alt: "Esquilo Brilha" },
];

function TextoComMascote({ texto }: { texto: string }) {
  const mascote = MASCOTES.find((m) => m.regex.test(texto));
  if (!mascote) return <p className="text-base leading-relaxed">{texto}</p>;
  return (
    <div className="flex items-start gap-3">
      <img
        src={mascote.img}
        alt={mascote.alt}
        className="h-20 w-20 shrink-0 object-contain drop-shadow-lg"
      />
      <p className="text-base leading-relaxed flex-1">{texto}</p>
    </div>
  );
}

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
          <TextoComMascote texto={dados.contexto} />
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#FF8A4C] mb-1.5">
            <HelpCircle className="h-3.5 w-3.5" />
            Só que apareceu um probleminha…
          </div>
          <TextoComMascote texto={dados.problema} />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#FFC93C]/25 to-[#FF8A4C]/25 border-2 border-[#FFC93C]/40 p-4">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#FFC93C] mb-1.5">
            <Hand className="h-3.5 w-3.5" />
            E aí, topa entrar nessa?
          </div>
          <p className="text-lg font-black leading-snug">{dados.convite}</p>
        </div>
      </div>
    </Secao>
  );
}
