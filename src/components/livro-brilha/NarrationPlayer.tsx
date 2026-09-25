import { useMemo } from "react";

/** Texto grande da narração: palavra falada acende, palavras em destaque são tocáveis. */
export function NarrationPlayer({ texto, destaques = {}, charAtual, onPalavra }: {
  texto: string;
  destaques?: Record<string, string[]> | undefined;
  charAtual: number;
  onPalavra: (palavra: string, silabas: string[]) => void;
}) {
  const partes = useMemo(() => {
    const out: { p: string; ini: number }[] = [];
    const re = /\S+/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(texto))) out.push({ p: m[0], ini: m.index });
    return out;
  }, [texto]);

  return (
    <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
      {partes.map(({ p, ini }, i) => {
        const limpa = p.replace(/[.,!?:;]/g, "");
        const sil = destaques[limpa];
        const ativa = charAtual >= ini && charAtual < ini + p.length + 1;
        const cls = ativa ? "bg-butter/60 rounded-lg" : "";
        return (
          <span key={i}>
            {sil ? (
              <button
                onClick={() => onPalavra(limpa, sil)}
                className={`rounded-lg px-1 text-peach underline decoration-peach/50 decoration-4 underline-offset-4 active:animate-b-tap ${cls}`}
              >
                {p}
              </button>
            ) : (
              <span className={`transition-colors ${cls}`}>{p}</span>
            )}{" "}
          </span>
        );
      })}
    </p>
  );
}
