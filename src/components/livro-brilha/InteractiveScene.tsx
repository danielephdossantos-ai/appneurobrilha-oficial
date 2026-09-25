import { useState, type ReactNode } from "react";

import { cenarios, imagem, tocarSom, vozes } from "./midia";
import type { Ambiente, Ator, Expressao } from "./tipos";
import type { OpcoesFala } from "@/hooks/use-narracao-livro";

type Falar = (t: string, op?: OpcoesFala) => void;

/** Personagem ou objeto vivo: respira, pula, muda de expressão e fala. */
export function CharacterInteraction({ ator, falar, onToque }: { ator: Ator; falar: Falar; onToque: () => void }) {
  const [toques, setToques] = useState(0);
  const [pulando, setPulando] = useState(false);
  const [balao, setBalao] = useState<string | null>(null);
  const [exp, setExp] = useState<Expressao | undefined>(undefined);

  const tocar = () => {
    const fala = ator.falas[toques % ator.falas.length] ?? ator.nome;
    tocarSom(ator.som ?? "toque");
    setPulando(false);
    requestAnimationFrame(() => setPulando(true));
    setBalao(fala);
    if (ator.reacao) setExp(ator.reacao);
    setToques((n) => n + 1);
    onToque();
    const v = vozes[ator.voz ?? "narrador"];
    setTimeout(() => falar(fala, { ...v, onFim: () => { setBalao(null); setExp(undefined); } }), ator.som ? 450 : 0);
  };

  const vidaCls = ator.vida === "voar" ? "nb-voar" : ator.vida === "balancar" ? "nb-balancar" : ator.vida === "respirar" ? "nb-respirar" : "";

  return (
    <div className="absolute" style={{ left: `${ator.x}%`, top: `${ator.y}%`, width: `${ator.tamanho}%`, transform: "translate(-50%, -100%)" }}>
      {balao && (
        <div className="nb-fala absolute bottom-full left-1/2 z-20 mb-1 w-max max-w-[220px] rounded-2xl bg-card px-3 py-2 text-center text-sm font-bold text-ink shadow-lg ring-1 ring-line">
          {balao}
        </div>
      )}
      <button onClick={tocar} aria-label={`Tocar em ${ator.nome}`} className={`block w-full ${vidaCls}`}>
        <img
          src={imagem(ator.img, exp ?? ator.expressao)}
          alt={ator.nome}
          draggable={false}
          onAnimationEnd={() => setPulando(false)}
          className={`w-full select-none drop-shadow-[0_8px_10px_rgb(74_59_58/0.25)] ${pulando ? "nb-pular" : ""}`}
        />
        {toques === 0 && <span className="absolute -right-1 -top-1 size-4 animate-pulse-hot rounded-full bg-butter" />}
      </button>
    </div>
  );
}

function CamadaAmbiente({ tipo }: { tipo: Ambiente }) {
  if (tipo === "folhas")
    return (
      <>
        {[8, 28, 55, 74, 90].map((l, i) => (
          <span key={i} className="pointer-events-none absolute top-0 h-3 w-5 rounded-[60%_0] bg-peach/70" style={{ left: `${l}%`, animation: `nb-cair ${7 + i * 1.3}s linear ${i * 1.6}s infinite` }} />
        ))}
      </>
    );
  if (tipo === "agua")
    return (
      <>
        {[{ l: 40, t: 70 }, { l: 62, t: 78 }, { l: 50, t: 62 }].map((p, i) => (
          <span key={i} className="pointer-events-none absolute size-16 rounded-full border-2 border-card/70" style={{ left: `${p.l}%`, top: `${p.t}%`, animation: `nb-onda 3s ease-out ${i}s infinite` }} />
        ))}
      </>
    );
  if (tipo === "brilho")
    return (
      <>
        {[{ l: 20, t: 20 }, { l: 70, t: 15 }, { l: 45, t: 35 }, { l: 85, t: 40 }].map((p, i) => (
          <span key={i} className="pointer-events-none absolute size-3 rotate-45 rounded-sm bg-butter" style={{ left: `${p.l}%`, top: `${p.t}%`, animation: `nb-brilho 2.4s ease-in-out ${i * 0.6}s infinite` }} />
        ))}
      </>
    );
  return (
    <>
      {[10, 26].map((t, i) => (
        <span key={i} className="pointer-events-none absolute left-0 h-8 w-28 rounded-full bg-card/70 blur-[2px]" style={{ top: `${t}%`, animation: `nb-nuvem ${40 + i * 15}s linear ${-i * 18}s infinite` }} />
      ))}
    </>
  );
}

/** Cena ilustrada viva com personagens tocáveis e camadas animadas. */
export function InteractiveScene({ cenario, ambiente = [], atores, falar, onToque, children }: {
  cenario: string;
  ambiente?: Ambiente[] | undefined;
  atores: Ator[];
  falar: Falar;
  onToque: (nome: string) => void;
  children?: ReactNode;
}) {
  return (
    <div className="relative aspect-[4/3] w-full sm:aspect-[5/3] overflow-hidden rounded-[26px] bg-sky/20">
      <img src={cenarios[cenario]} alt="" width={1280} height={768} className="absolute inset-0 h-full w-full object-cover" />
      {ambiente.map((a) => <CamadaAmbiente key={a} tipo={a} />)}
      {atores.map((a) => (
        <CharacterInteraction key={a.nome} ator={a} falar={falar} onToque={() => onToque(a.nome)} />
      ))}
      {children}
    </div>
  );
}
